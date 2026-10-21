import { useEffect, useMemo, useRef, useState } from 'react'
import { ideas, unplaced, decadeOf, fieldOf, shortAuthors, type Idea } from '../data/ideas'
import { readingTitle, type Reading } from '../data/content'
import { ReadingItem, SectionBar } from '../components/ui'
import { Motif } from '../components/Motif'

/** Subfield × decade grid of an idea's readings; choosing a reading opens its details below. */
function Matrix({ d }: { d: Idea }) {
  const [selected, setSelected] = useState<Reading | null>(null)
  const [hover, setHover] = useState<{ field: string; decade: number } | null>(null)
  const panel = useRef<HTMLDivElement>(null)

  const cells = useMemo(() => {
    const m = new Map<string, Reading[]>()
    for (const r of d.readings) {
      const k = `${fieldOf(r)}|${decadeOf(r)}`
      m.set(k, [...(m.get(k) ?? []), r])
    }
    return m
  }, [d])
  const cell = (field: string, decade: number) => cells.get(`${field}|${decade}`) ?? []

  // Empty decades stay narrow; busier decades get proportionally more width so cells grow sideways, not into tall stacks.
  const columns = d.decades
    .map((dec) => Math.max(...d.fields.map((f) => cell(f, dec).length)))
    .map((n) => (n ? `minmax(min-content, ${Math.sqrt(n)}fr)` : '2.75rem'))
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
      {/* On narrow screens the grid scrolls sideways; the fade at the right edge says so. */}
      <div className="overflow-x-auto [mask-image:linear-gradient(90deg,#000_88%,transparent)] lg:[mask-image:none]">
        <div className="grid min-w-[44rem] text-[13px]" style={{ gridTemplateColumns: `minmax(6.5rem, 9.5rem) ${columns}` }} onMouseLeave={() => setHover(null)}>
          <div className="sticky left-0 z-10 bg-paper" />
          {d.decades.map((dec) => (
            <div key={dec} className={`px-1 pb-2 text-xs tabular-nums transition-colors ${hover?.decade === dec ? 'text-ink' : 'text-faint'}`}>
              {dec}s
            </div>
          ))}
          {d.fields.map((f) => (
            <div key={f} className="contents">
              <div className={`sticky left-0 z-10 border-t border-rule bg-paper py-2 pr-3 text-xs transition-colors ${hover?.field === f ? 'text-ink' : 'text-muted'}`}>{f}</div>
              {d.decades.map((dec) => (
                <div key={dec} className="flex flex-wrap content-start gap-0.5 border-t border-rule py-1.5 pr-1">
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
                        {shortAuthors(r)} <span className={`whitespace-nowrap tabular-nums ${on ? '' : 'text-faint'}`}>’{String(r.year).slice(2)}</span>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <div ref={panel} className="relative mt-4 scroll-mb-8 rounded-lg border border-rule bg-card p-5 pr-12">
          <ul>
            <ReadingItem r={selected} note={`${fieldOf(selected)} · ${selected.tag}`} />
          </ul>
          <button onClick={() => setSelected(null)} className="absolute right-3 top-3 rounded p-1.5 text-faint hover:bg-wash hover:text-ink" aria-label="Close details">
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
              <span className="ml-2 inline-block -translate-y-1 rounded border border-rule px-1.5 align-middle font-sans text-[11px] font-normal tracking-normal text-faint" title="Proposed wording, not yet agreed">
                draft
              </span>
            )}
          </h2>
          {d.problem && (
            <p className="mt-3 font-serif text-[17px] italic text-muted">
              <span className="font-sans text-xs not-italic text-faint">Open question</span> {d.problem}
            </p>
          )}
          <p className="mt-3 text-xs text-faint">
            {d.readings.length} readings · {d.fields.length} subfields · {d.readings[0].year}–{d.readings[d.readings.length - 1].year}
          </p>
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

export function HomePage() {
  const sections = useMemo(() => ideas.map((d) => ({ id: d.id, mark: d.number, title: `${d.number}. ${d.name}` })), [])
  const jump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
        <h1 id="hq-hero-title" className="font-serif text-[2.6rem] font-semibold leading-tight tracking-tight sm:text-6xl">
          The Informal ‘HCI Quals’
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-muted">
          A collection of important ideas and readings from the HCI canon, assembled for an informal quals at MIT HCI.
        </p>

        <ol className="mt-14 grid gap-x-10 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((d) => (
            <li key={d.id} className="border-b border-rule">
              <a href={`#${d.id}`} onClick={jump(d.id)} className="group flex gap-3 py-3.5">
                <span className="w-5 shrink-0 text-sm tabular-nums text-faint">{d.number}</span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold tracking-tight group-hover:text-accent">{d.name}</span>
                  <span className="mt-0.5 line-clamp-2 block font-serif text-[15px] leading-snug text-muted">{d.position}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionBar sections={sections} />
        <p className="-mt-4 mb-12 text-xs text-faint">
          Readings are laid out by subfield and decade. Brighter names are core readings; select one for details. Some readings illustrate an idea, others challenge it.
        </p>
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
  )
}
