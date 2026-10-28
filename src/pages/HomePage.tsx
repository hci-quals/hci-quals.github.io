import { useEffect, useMemo, useRef, useState } from 'react'
import { ideas, unplaced, decadeOf, fieldOf, kindOf, shortAuthors, type Idea } from '../data/ideas'
import { readingAuthors, readingTitle, readingVenue, type Reading } from '../data/content'
import { Markdown } from '../components/ui'
import { jumpTo } from '../components/sections'
import { BaseMotif, Motif } from '../components/Motif'
import { sessionColor, useSessionsMode } from '../components/sessionsMode'
import structureMd from '/content/reading-group.md?raw'

type Panel = { type: 'structure' } | { type: 'reading'; r: Reading; idea: Idea }

const ideasOfReading = new Map<string, Idea[]>()
for (const d of ideas) for (const r of d.readings) ideasOfReading.set(r.id, [...(ideasOfReading.get(r.id) ?? []), d])

/** Box style for a reading: a solid outline for idea readings, a dotted one for instantiation readings. */
const kindBox = (r: Reading) => (kindOf(r) === 'idea' ? 'border-ink font-medium text-ink' : 'border-dashed border-muted/70 text-muted')

function KindSwatch({ kind }: { kind: 'idea' | 'instantiation' }) {
  return <span aria-hidden className={`inline-block h-3.5 w-5 rounded-[3px] border-[1.5px] ${kind === 'idea' ? 'border-ink' : 'border-dashed border-muted/70'}`} />
}

/** Decade × subfield grid of an idea's readings; choosing a reading shows it in the side panel. */
function Matrix({ d, selectedId, onSelect }: { d: Idea; selectedId?: string; onSelect: (r: Reading) => void }) {
  const { on: showSessions } = useSessionsMode()
  const [hover, setHover] = useState<{ field: string; decade: number } | null>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const [overflows, setOverflows] = useState(false)
  useEffect(() => {
    const el = scroller.current
    if (!el) return
    const check = () => setOverflows(el.scrollWidth > el.clientWidth + 1 && el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
    check()
    const ro = new ResizeObserver(check)
    ro.observe(el)
    el.addEventListener('scroll', check, { passive: true })
    return () => {
      ro.disconnect()
      el.removeEventListener('scroll', check)
    }
  }, [])

  const cells = useMemo(() => {
    const m = new Map<string, Reading[]>()
    for (const r of d.readings) {
      const k = `${fieldOf(r)}|${decadeOf(r)}`
      m.set(k, [...(m.get(k) ?? []), r])
    }
    // Idea readings always come before instantiation readings, then by year.
    const rank = (r: Reading) => (kindOf(r) === 'idea' ? 0 : 1)
    for (const rs of m.values()) rs.sort((a, b) => rank(a) - rank(b) || (a.year ?? 0) - (b.year ?? 0))
    return m
  }, [d])
  const cell = (field: string, decade: number) => cells.get(`${field}|${decade}`) ?? []

  // Time runs down the rows and subfields across the columns. Busier subfields get more width so their readings sit
  // side by side rather than in tall stacks; no column is narrower than its widest reading.
  const columns = d.fields
    .map((f) => Math.max(...d.decades.map((dec) => cell(f, dec).length)))
    .map((n) => `minmax(min-content, ${Math.sqrt(n)}fr)`)
    .join(' ')

  return (
    <div>
      {showSessions && d.sessions.length > 0 && (
        <ul className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
          {d.sessions.map((s) => (
            <li key={s.n} className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-sm" style={{ background: sessionColor(s.k) }} />
              <span className="font-medium text-ink">Session {s.n}</span>
            </li>
          ))}
        </ul>
      )}
      {/* When the grid is wider than its panel it scrolls sideways, and a fade at the right edge says so. */}
      <div ref={scroller} className={`overflow-x-auto ${overflows ? '[mask-image:linear-gradient(90deg,#000_88%,transparent)]' : ''}`}>
        <div className="grid text-[13px]" style={{ gridTemplateColumns: `3.5rem ${columns}` }} onMouseLeave={() => setHover(null)}>
          <div className="sticky left-0 z-10 bg-paper" />
          {d.fields.map((f) => (
            <div key={f} className={`flex items-end px-1 pb-2 text-xs leading-tight transition-colors ${hover?.field === f ? 'text-ink' : 'text-muted'}`}>
              {f}
            </div>
          ))}
          {d.decades.map((dec) => (
            <div key={dec} className="contents">
              <div className={`sticky left-0 z-10 border-t border-rule bg-paper py-2 pr-2 text-xs tabular-nums transition-colors ${hover?.decade === dec ? 'text-ink' : 'text-faint'}`}>
                {dec}s
              </div>
              {d.fields.map((f) => (
                <div key={f} className="flex flex-wrap content-start gap-1 border-t border-rule py-1.5 pr-3">
                  {cell(f, dec).map((r) => {
                    const on = selectedId === r.id
                    const session = showSessions ? d.sessionOf.get(r.id) : undefined
                    return (
                      <button
                        key={r.id}
                        onClick={() => onSelect(r)}
                        onMouseEnter={() => setHover({ field: f, decade: dec })}
                        onFocus={() => setHover({ field: f, decade: dec })}
                        title={readingTitle(r)}
                        aria-pressed={on}
                        aria-label={`${readingTitle(r)}, ${shortAuthors(r)} ${r.year}, ${kindOf(r)} reading${session ? `, session ${session.n}` : ''}`}
                        style={!on && session ? { background: `color-mix(in srgb, ${sessionColor(session.k)} 26%, transparent)` } : undefined}
                        className={`whitespace-nowrap rounded-[4px] border-[1.5px] px-1.5 py-0.5 text-left leading-snug transition-[color,background-color,opacity] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                          on ? 'border-ink bg-ink font-medium text-paper' : `hover:bg-wash ${kindBox(r)}`
                        } ${showSessions && !session && !on ? 'opacity-30' : ''}`}
                      >
                        {session && <span className={`mr-1 text-[10px] font-semibold tabular-nums ${on ? '' : 'text-ink/70'}`}>{session.n}</span>}
                        {shortAuthors(r)} <span className={`tabular-nums ${on ? '' : 'font-normal text-faint'}`}>’{String(r.year).slice(2)}</span>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function IdeaSection({ d, selectedId, onSelect }: { d: Idea; selectedId?: string; onSelect: (r: Reading, d: Idea) => void }) {
  return (
    // Each idea runs edge to edge of its pane, separated from the next by a full-width rule.
    <section id={d.id} className="-mx-5 scroll-mt-14 border-t border-ink/15 px-5 pb-24 pt-16 sm:-mx-8 sm:px-8 lg:-mx-10 lg:scroll-mt-0 lg:px-10" aria-labelledby={`${d.id}-name`}>
      <div className="mx-auto max-w-5xl">
      <h2 className="font-serif text-[1.65rem] leading-snug tracking-tight sm:text-[1.9rem]">
        <span id={`${d.id}-name`} className="block font-semibold">
          {d.name}
        </span>
        <span className="mt-1 block text-muted">
          {d.position}
          {d.draft && (
            <span
              className="ml-2 inline-block -translate-y-1 rounded border border-rule px-1.5 align-middle font-sans text-[11px] tracking-normal text-faint"
              title="Proposed wording, not yet agreed"
            >
              draft
            </span>
          )}
        </span>
      </h2>
      <div className="mx-auto mt-10 w-60 sm:w-72">
        <Motif idea={d.id} />
      </div>
      <div className="mt-10">
        <Matrix d={d} selectedId={selectedId} onSelect={(r) => onSelect(r, d)} />
      </div>
      </div>
    </section>
  )
}

function ReadingDetail({ r, idea, onJump }: { r: Reading; idea: Idea; onJump: (id: string) => void }) {
  const kind = kindOf(r)
  const session = idea.sessionOf.get(r.id)
  const venue = readingVenue(r)
  const doiUrl = r.doi ? `https://doi.org/${r.doi}` : null
  const others = (ideasOfReading.get(r.id) ?? []).filter((d) => d.id !== idea.id)
  return (
    <article>
      <p className="flex items-center gap-2 text-xs font-medium text-muted">
        <KindSwatch kind={kind} />
        {kind === 'idea' ? 'Idea reading' : 'Instantiation reading'}
      </p>
      <h2 className="mt-3 font-serif text-[1.55rem] font-semibold leading-snug tracking-tight">{readingTitle(r)}</h2>
      <p className="mt-2 text-sm text-muted">
        {readingAuthors(r)}
        {venue && (
          <>
            , <span className="italic">{venue}</span>
          </>
        )}
        {r.year && <>, {r.year}</>}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <a href={r.url} target="_blank" rel="noopener noreferrer" className="rounded-md bg-ink px-3 py-1.5 font-medium text-paper hover:opacity-85">
          Read
        </a>
        {doiUrl && r.url !== doiUrl && (
          <a href={doiUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-rule px-3 py-1.5 text-muted hover:text-ink">
            DOI
          </a>
        )}
      </div>
      <p className="mt-6 font-serif text-[17px] leading-relaxed">{r.description}</p>
      <dl className="mt-8 space-y-4 border-t border-rule pt-5 text-sm">
        <div>
          <dt className="text-xs text-faint">Big idea</dt>
          <dd className="mt-0.5">
            <button onClick={() => onJump(idea.id)} className="text-left hover:text-accent">
              {idea.name}
            </button>
            {others.map((o) => (
              <span key={o.id}>
                {', '}
                <button onClick={() => onJump(o.id)} className="text-left hover:text-accent">
                  {o.name}
                </button>
              </span>
            ))}
          </dd>
        </div>
        {session && (
          <div>
            <dt className="text-xs text-faint">Session</dt>
            <dd className="mt-0.5 flex items-center gap-2">
              <span aria-hidden className="h-3 w-3 shrink-0 rounded-sm" style={{ background: sessionColor(session.k) }} />
              Session {session.n}
            </dd>
          </div>
        )}
        <div>
          <dt className="text-xs text-faint">Subfield</dt>
          <dd className="mt-0.5">{fieldOf(r)}</dd>
        </div>
      </dl>
    </article>
  )
}

function StructureDetail() {
  return (
    <article>
      <h2 className="font-serif text-[1.55rem] font-semibold leading-snug tracking-tight">Reading group structure</h2>
      <Markdown className="prose-panel mt-4">{structureMd}</Markdown>
    </article>
  )
}

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

function PanelBody({ panel, onJump }: { panel: Panel; onJump: (id: string) => void }) {
  return panel.type === 'reading' ? <ReadingDetail r={panel.r} idea={panel.idea} onJump={onJump} /> : <StructureDetail />
}

/** On phones the side panel becomes a sheet over the page. */
function Sheet({ panel, onClose, onJump }: { panel: Panel; onClose: () => void; onJump: (id: string) => void }) {
  const close = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    // Only act as a modal sheet on narrow screens; on wide ones the side panel shows the same content.
    if (window.matchMedia('(min-width: 1024px)').matches) return
    const opener = document.activeElement as HTMLElement | null
    close.current?.focus()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
      opener?.focus()
    }
  }, [onClose])
  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label={panel.type === 'reading' ? readingTitle(panel.r) : 'Reading group structure'}>
      <div className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]" onClick={onClose} />
      <div className="hq-sheet absolute inset-x-0 bottom-0 max-h-[85dvh] overflow-y-auto rounded-t-2xl border-t border-rule bg-paper px-5 pb-10 pt-3 shadow-2xl">
        <div className="sticky top-0 -mx-5 mb-2 flex justify-end bg-paper px-3 pb-1">
          <span aria-hidden className="absolute left-1/2 top-1.5 h-1 w-10 -translate-x-1/2 rounded-full bg-rule" />
          <button ref={close} onClick={onClose} className="rounded-md p-2 text-muted hover:bg-wash hover:text-ink" aria-label="Close">
            <CloseIcon />
          </button>
        </div>
        <PanelBody panel={panel} onJump={onJump} />
      </div>
    </div>
  )
}

const PANEL_KEY = 'hq-panel-width'
const clampWidth = (w: number) => Math.round(Math.min(Math.max(w, 320), Math.min(window.innerWidth * 0.6, 960)))

/** Drag handle between the panes; also adjustable with the arrow keys. */
function Splitter({ width, onChange }: { width: number; onChange: (w: number) => void }) {
  const drag = (e: React.PointerEvent) => {
    e.preventDefault()
    const el = e.currentTarget as HTMLElement
    el.setPointerCapture(e.pointerId)
    const move = (ev: PointerEvent) => onChange(clampWidth(window.innerWidth - ev.clientX))
    const up = () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerup', up)
      document.body.style.cursor = ''
    }
    document.body.style.cursor = 'col-resize'
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerup', up)
  }
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize details panel"
      aria-valuenow={width}
      aria-valuemin={320}
      aria-valuemax={960}
      tabIndex={0}
      onPointerDown={drag}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') onChange(clampWidth(width + 32))
        if (e.key === 'ArrowRight') onChange(clampWidth(width - 32))
      }}
      className="group relative hidden w-2 shrink-0 cursor-col-resize touch-none lg:block focus-visible:outline-none"
    >
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-rule transition-colors group-hover:bg-faint group-focus-visible:bg-accent group-active:bg-ink" />
      <span className="absolute left-1/2 top-1/2 h-8 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-faint opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
    </div>
  )
}

export function HomePage() {
  // The details panel starts closed; choosing a reading or the structure opens it, and its close button shuts it.
  const [panel, setPanel] = useState<Panel | null>(null)
  const [width, setWidthState] = useState(() => {
    try {
      const w = Number(localStorage.getItem(PANEL_KEY))
      if (w) return clampWidth(w)
    } catch {
      /* storage unavailable */
    }
    return clampWidth(window.innerWidth / 3)
  })
  const setWidth = (w: number) => {
    setWidthState(w)
    try {
      localStorage.setItem(PANEL_KEY, String(w))
    } catch {
      /* storage unavailable */
    }
  }
  const aside = useRef<HTMLElement>(null)

  const show = (next: Panel) => {
    setPanel(next)
    aside.current?.scrollTo({ top: 0 })
  }
  const close = useMemo(() => () => setPanel(null), [])
  const select = (r: Reading, d: Idea) => (panel?.type === 'reading' && panel.r.id === r.id && panel.idea.id === d.id ? close() : show({ type: 'reading', r, idea: d }))
  const jump = (id: string) => {
    if (!window.matchMedia('(min-width: 1024px)').matches) close()
    jumpTo(id)
  }

  useEffect(() => {
    if (!panel) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [panel, close])

  const selected = panel?.type === 'reading' ? panel : undefined

  return (
    // On wide screens the page splits into two panes that scroll on their own; on narrow ones details open in a sheet.
    <div className="lg:flex lg:h-[calc(100dvh-3.5rem)]">
      <div className="min-w-0 px-5 sm:px-8 lg:flex-1 lg:overflow-y-auto lg:px-10">
        <section className="pb-16 pt-16 sm:pt-24">
          <h1 id="hq-hero-title" className="font-serif text-[2.6rem] font-semibold leading-tight tracking-tight sm:text-6xl">
            The Informal ‘HCI Quals’
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-muted">
            A collection of important ideas and readings from the HCI canon, assembled for an informal quals at MIT HCI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              onClick={() => (panel?.type === 'structure' ? close() : show({ type: 'structure' }))}
              aria-pressed={panel?.type === 'structure'}
              className={`rounded-md border border-ink px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                panel?.type === 'structure' ? 'bg-ink text-paper' : 'hover:bg-ink hover:text-paper'
              }`}
            >
              Reading group structure
            </button>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" aria-label="Key">
              <li className="flex items-center gap-2">
                <KindSwatch kind="idea" /> Idea reading
              </li>
              <li className="flex items-center gap-2">
                <KindSwatch kind="instantiation" /> Instantiation reading
              </li>
            </ul>
          </div>
          <div className="mx-auto mt-14 w-72">
            <BaseMotif />
          </div>
        </section>

        <div>
          {ideas.map((d) => (
            <IdeaSection key={d.id} d={d} selectedId={selected?.idea.id === d.id ? selected.r.id : undefined} onSelect={select} />
          ))}
        </div>
        <div className="mx-auto max-w-5xl pb-24">

          {unplaced.length > 0 && (
            <details className="group border-t border-rule pt-6">
              <summary className="cursor-pointer list-none text-sm text-muted hover:text-ink">
                <span className="mr-1 inline-block transition-transform group-open:rotate-90">›</span> Not yet placed under an idea ({unplaced.length})
              </summary>
              <ul className="mt-4 columns-1 gap-10 text-sm sm:columns-2">
                {unplaced.map((r) => (
                  <li key={r.id} className="mb-2 break-inside-avoid">
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                      {shortAuthors(r)} <span className="tabular-nums text-faint">{r.year}</span> <span className="font-serif text-muted">{readingTitle(r)}</span>
                    </a>
                    <span className="ml-1.5 text-xs text-faint">{fieldOf(r)}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>

      {panel && (
        <>
          <Splitter width={width} onChange={setWidth} />
          <aside
            ref={aside}
            aria-label="Details"
            style={{ width }}
            className="hidden shrink-0 overflow-y-auto bg-card/50 px-8 pb-10 pt-6 lg:block"
          >
            <div className="sticky top-0 -mx-2 mb-2 flex justify-end">
              <button onClick={close} className="rounded-md bg-card/80 p-2 text-muted backdrop-blur hover:bg-wash hover:text-ink" aria-label="Close panel">
                <CloseIcon />
              </button>
            </div>
            <PanelBody panel={panel} onJump={jump} />
          </aside>
          <Sheet panel={panel} onClose={close} onJump={jump} />
        </>
      )}
    </div>
  )
}
