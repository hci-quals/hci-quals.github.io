import { useEffect, useMemo, useRef, useState } from 'react'
import { ideas, unplaced, decadeOf, fieldOf, shortAuthors, type Idea } from '../data/ideas'
import { readingTitle, type Reading } from '../data/content'
import { ReadingItem, SectionBar } from '../components/ui'
import { jumpTo, useCurrentSection } from '../components/sections'
import { BaseMotif, Motif } from '../components/Motif'

/** Subfield × decade grid of an idea's readings; choosing a reading opens its details below. */
function Matrix({ d }: { d: Idea }) {
  const [selected, setSelected] = useState<Reading | null>(null)
  const [hover, setHover] = useState<{ field: string; decade: number } | null>(null)
  const panel = useRef<HTMLDivElement>(null)
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
    return m
  }, [d])
  const cell = (field: string, decade: number) => cells.get(`${field}|${decade}`) ?? []

  // Time runs down the rows and subfields across the columns. Busier subfields get more width so their readings sit
  // side by side rather than in tall stacks; no column is narrower than its widest reading.
  const columns = d.fields
    .map((f) => Math.max(...d.decades.map((dec) => cell(f, dec).length)))
    .map((n) => `minmax(min-content, ${Math.sqrt(n)}fr)`)
    .join(' ')

  useEffect(() => {
    if (!selected) return
    panel.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <div>
      {/* When the grid is wider than the page it scrolls sideways, and a fade at the right edge says so. */}
      <div ref={scroller} className={`overflow-x-auto ${overflows ? '[mask-image:linear-gradient(90deg,#000_88%,transparent)]' : ''}`}>
        <div className="grid text-[13px]" style={{ gridTemplateColumns: `3.5rem ${columns}` }} onMouseLeave={() => setHover(null)}>
          <div className="sticky left-0 z-10 bg-paper" />
          {d.fields.map((f) => (
            <div key={f} className={`flex items-end px-1 pb-2 text-xs leading-tight transition-colors ${hover?.field === f ? 'text-ink' : 'text-muted'}`}>
              {f}
            </div>
          ))}
          {d.decades.map((dec) => {
            const empty = d.fields.every((f) => cell(f, dec).length === 0)
            return (
              <div key={dec} className="contents">
                <div
                  className={`sticky left-0 z-10 border-t border-rule bg-paper pr-2 tabular-nums transition-colors ${empty ? 'py-1 text-[11px] text-faint/60' : `py-2 text-xs ${hover?.decade === dec ? 'text-ink' : 'text-faint'}`}`}
                >
                  {dec}s
                </div>
                {d.fields.map((f) => (
                  <div key={f} className={`flex flex-wrap content-start gap-0.5 border-t border-rule pr-3 ${empty ? '' : 'py-1.5'}`}>
                    {cell(f, dec).map((r) => {
                      const on = selected?.id === r.id
                      return (
                        <button
                          key={r.id}
                          onClick={() => setSelected(on ? null : r)}
                          onMouseEnter={() => setHover({ field: f, decade: dec })}
                          onFocus={() => setHover({ field: f, decade: dec })}
                          title={readingTitle(r)}
                          aria-expanded={on}
                          className={`whitespace-nowrap rounded px-1 py-0.5 text-left leading-snug transition-colors ${on ? 'bg-ink text-paper' : `hover:bg-wash ${r.tag === 'Core' ? 'text-ink' : 'text-muted'}`}`}
                        >
                          {shortAuthors(r)} <span className={`tabular-nums ${on ? '' : 'text-faint'}`}>’{String(r.year).slice(2)}</span>
                        </button>
                      )
                    })}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
      {selected && (
        <div ref={panel} className="relative mt-4 scroll-mb-8 rounded-lg border border-rule bg-card p-5 pr-12">
          <ul>
            <ReadingItem r={selected} note={`${fieldOf(selected)} · ${selected.tag}`} />
          </ul>
          <button
            onClick={() => setSelected(null)}
            className="absolute right-3 top-3 rounded p-1.5 text-faint hover:bg-wash hover:text-ink"
            aria-label="Close details"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

function IdeaSection({ d }: { d: Idea }) {
  return (
    <section id={d.id} className="scroll-mt-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div className="min-w-0 flex-1">
          <p className="flex flex-wrap items-baseline gap-x-2 text-sm">
            <span className="tabular-nums text-faint">{d.number}</span>
            <span className="font-semibold tracking-tight">{d.name}</span>
            {d.aka && <span className="text-faint">also {d.aka}</span>}
          </p>
          <h2 className="mt-2 font-serif text-[1.65rem] font-semibold leading-snug tracking-tight sm:text-[1.85rem]">
            {d.position}
            {d.draft && (
              <span
                className="ml-2 inline-block -translate-y-1 rounded border border-rule px-1.5 align-middle font-sans text-[11px] font-normal tracking-normal text-faint"
                title="Proposed wording, not yet agreed"
              >
                draft
              </span>
            )}
          </h2>
          {d.problem && (
            <p className="mt-3 font-serif text-[17px] italic text-muted">
              <span className="font-sans text-xs not-italic text-faint">Open question</span> {d.problem}
            </p>
          )}
        </div>
        <div className="w-52 shrink-0 sm:w-60">
          <Motif idea={d.id} />
        </div>
      </div>
      <div className="mt-6">
        <Matrix d={d} />
      </div>
    </section>
  )
}

/** Names-only table of contents in the left margin on wide screens; marks the idea being read. */
function Contents({ sections }: { sections: { id: string; name: string }[] }) {
  const current = useCurrentSection(sections)
  return (
    <nav aria-label="Ideas" className="hidden lg:block">
      <ol className="sticky top-24 space-y-0.5 border-l border-rule text-[13px] leading-snug">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault()
                jumpTo(s.id)
              }}
              aria-current={s.id === current ? 'location' : undefined}
              className={`-ml-px block border-l py-1 pl-3 transition-colors ${s.id === current ? 'border-ink text-ink' : 'border-transparent text-faint hover:text-ink'}`}
            >
              {s.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function HomePage() {
  const sections = useMemo(
    () =>
      ideas.map((d) => ({
        id: d.id,
        name: d.name,
        mark: d.number,
        title: `${d.number}. ${d.name}`,
      })),
    [],
  )
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28 lg:pl-[15.5rem]">
        <h1 id="hq-hero-title" className="font-serif text-[2.6rem] font-semibold leading-tight tracking-tight sm:text-6xl">
          The Informal ‘HCI Quals’
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-muted">
          A collection of important ideas and readings from the HCI canon, assembled for an informal quals at MIT HCI.
        </p>
        <div className="mt-12 w-72">
          <BaseMotif />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:grid lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-x-10">
        <Contents sections={sections} />
        <div className="min-w-0">
          <SectionBar sections={sections} className="lg:hidden" />
          <div className="space-y-28">
            {ideas.map((d) => (
              <IdeaSection key={d.id} d={d} />
            ))}
          </div>

          {unplaced.length > 0 && (
            <details className="group mt-28 border-t border-rule pt-6">
              <summary className="cursor-pointer list-none text-sm text-muted hover:text-ink">
                <span className="mr-1 inline-block transition-transform group-open:rotate-90">›</span> Not yet placed under an idea ({unplaced.length})
              </summary>
              <ul className="mt-4 columns-1 gap-10 text-sm sm:columns-2">
                {unplaced.map((r) => (
                  <li key={r.id} className="mb-2 break-inside-avoid">
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                      {shortAuthors(r)} <span className="tabular-nums text-faint">{r.year}</span>{' '}
                      <span className="font-serif text-muted">{readingTitle(r)}</span>
                    </a>
                    <span className="ml-1.5 text-xs text-faint">{fieldOf(r)}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>
    </div>
  )
}
