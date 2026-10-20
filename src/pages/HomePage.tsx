import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ideas, decadeOf, fieldOf, shortAuthors, type Idea } from '../data/ideas'
import type { Reading } from '../data/content'
import { ReadingItem, SectionBar } from '../components/ui'
import { Motif } from '../components/Motif'

function shuffled<T>(items: T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function IdeaCard({ d }: { d: Idea }) {
  return (
    <Link
      to={`/#${d.id}`}
      className="flex h-36 w-80 shrink-0 flex-col justify-between rounded-lg border border-rule bg-card px-5 py-4 transition-colors hover:border-faint"
    >
      <span className="line-clamp-3 font-serif text-[16.5px] font-semibold leading-snug">{d.claim}</span>
      <span className="text-xs text-muted">
        {d.number} · {d.name}
      </span>
    </Link>
  )
}

function Row({ items, reverse, duration }: { items: Idea[]; reverse?: boolean; duration: number }) {
  return (
    <div className="hq-row overflow-hidden">
      <div className={`hq-track flex w-max gap-4 ${reverse ? 'reverse' : ''}`} style={{ ['--hq-duration' as string]: `${duration}s` }}>
        {[...items, ...items].map((d, i) => (
          <IdeaCard key={d.id + i} d={d} />
        ))}
      </div>
    </div>
  )
}

/** Subfield × decade grid of an idea's readings; clicking a reading opens its details below. */
function Matrix({ d }: { d: Idea }) {
  const [selected, setSelected] = useState<Reading | null>(null)
  const cell = (field: string, decade: number) => d.readings.filter((r) => (fieldOf.get(r.id) ?? 'Other') === field && decadeOf(r) === decade)
  // Empty decades stay narrow; busier decades get proportionally more width so cells grow sideways, not into tall stacks.
  const columns = d.decades
    .map((dec) => Math.max(...d.fields.map((f) => cell(f, dec).length)))
    .map((n) => (n ? `minmax(min-content, ${Math.sqrt(n)}fr)` : '2.75rem'))
    .join(' ')

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="grid min-w-[44rem] text-[13px]" style={{ gridTemplateColumns: `9.5rem ${columns}` }}>
          <div className="sticky left-0 bg-paper" />
          {d.decades.map((dec) => (
            <div key={dec} className="px-1 pb-2 text-xs tabular-nums text-faint">
              {dec}s
            </div>
          ))}
          {d.fields.map((f) => (
            <div key={f} className="contents">
              <div className="sticky left-0 border-t border-rule bg-paper py-2 pr-3 text-xs text-muted">{f}</div>
              {d.decades.map((dec) => (
                <div key={dec} className="flex flex-wrap content-start gap-x-0.5 gap-y-0.5 border-t border-rule py-1.5 pr-1">
                  {cell(f, dec).map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setSelected(selected?.id === r.id ? null : r)}
                      title={r.title}
                      aria-expanded={selected?.id === r.id}
                      className={`rounded px-1 py-0.5 text-left leading-snug transition-colors ${
                        selected?.id === r.id ? 'bg-ink text-paper' : `hover:bg-wash ${r.tag === 'Core' ? 'text-ink' : 'text-muted'}`
                      }`}
                    >
                      {shortAuthors(r)} <span className={`whitespace-nowrap tabular-nums ${selected?.id === r.id ? '' : 'text-faint'}`}>’{String(r.year).slice(2)}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <ul className="mt-4 rounded-lg border border-rule bg-card p-5">
          <ReadingItem r={selected} note={`${fieldOf.get(selected.id)} · ${selected.tag}`} />
        </ul>
      )}
    </div>
  )
}

export function HomePage() {
  // Shuffled once per visit so the ribbons mix ideas instead of reading out the list in order.
  const [rows] = useState(() => {
    const mixed = shuffled(ideas)
    return [0, 1, 2].map((r) => mixed.filter((_, i) => i % 3 === r))
  })
  const sections = useMemo(() => ideas.map((d) => ({ id: d.id, mark: d.number, title: `${d.number}. ${d.name}` })), [])

  return (
    <div>
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <h1 id="hq-hero-title" className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
          The Informal ‘HCI Quals’
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-muted">
          A collection of important ideas and readings from the HCI canon, assembled for an informal quals at MIT HCI.
        </p>
      </section>

      <section className="space-y-4 pb-8" aria-label="Ideas">
        <Row items={rows[0]} duration={150} />
        <Row items={rows[1]} duration={180} reverse />
        <Row items={rows[2]} duration={165} />
      </section>

      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8">
        <SectionBar sections={sections} />
        <div className="space-y-24">
          {ideas.map((d) => (
            <section key={d.id} id={d.id} className="scroll-mt-32">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h2 className="flex gap-3 font-serif text-[1.7rem] font-semibold leading-snug">
                    <span className="w-8 shrink-0 font-sans text-base font-normal tabular-nums leading-10 text-faint">{d.number}</span>
                    <span>{d.claim}</span>
                  </h2>
                  <p className="ml-11 mt-1 text-sm text-muted">
                    {d.name} <span className="mx-1.5 text-faint">·</span>
                    <span className="text-faint">
                      {d.readings.length} readings, {d.fields.length} subfields, {d.readings[0].year}–{d.readings[d.readings.length - 1].year}
                    </span>
                  </p>
                  {d.alternatives.length > 0 && (
                    <details className="group ml-11 mt-3 text-sm">
                      <summary className="cursor-pointer list-none text-muted hover:text-ink">
                        <span className="inline-block transition-transform group-open:rotate-90">›</span> {d.alternatives.length} other formulations
                      </summary>
                      <ol className="mt-3 space-y-3 border-l border-rule pl-4">
                        {d.alternatives.map((a, i) => (
                          <li key={i}>
                            <p className="font-serif text-[16px] leading-snug">{a.text}</p>
                            <p className="mt-0.5 text-xs text-faint">{a.emphasis}</p>
                          </li>
                        ))}
                      </ol>
                    </details>
                  )}
                </div>
                <div className="ml-11 w-48 shrink-0 sm:ml-0 sm:w-56">
                  <Motif idea={d.id} />
                </div>
              </div>
              <div className="mt-6">
                <Matrix d={d} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
