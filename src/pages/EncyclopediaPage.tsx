import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { articles, lineage, partById, partLabel, parts, readingAuthors, readingTitle, type Article } from '../data/content'
import { Chevron } from '../components/ui'

function ByTopic() {
  return (
    <div className="space-y-14">
      {parts.map((p) => (
        <section key={p.id} id={p.id} className="scroll-mt-24">
          <h2 className="font-serif text-2xl font-semibold">{partLabel(p)}</h2>
          <div className="mt-6 space-y-8">
            {p.keyIdeas.map((k) => (
              <div key={k.id} id={k.id} className="scroll-mt-24">
                <h3 className="text-sm font-medium text-muted">{k.title}</h3>
                <ul className="mt-2 border-t border-rule">
                  {k.articles.map((a) => (
                    <li key={a.id} className="border-b border-rule">
                      <Link to={`/encyclopedia/${a.id}`} className="flex items-baseline gap-4 py-3 hover:text-accent">
                        <span className="flex-1 font-serif text-[17px]">{a.title}</span>
                        <span className="text-sm tabular-nums text-faint">{a.origin.year}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function TimelineRow({ a }: { a: Article }) {
  const [open, setOpen] = useState(false)
  const { origin, followUps } = lineage(a)
  return (
    <li className="border-b border-rule">
      <div className="flex items-baseline gap-4 py-3">
        <span className="w-12 shrink-0 text-sm tabular-nums text-muted">{a.origin.year}</span>
        <div className="min-w-0 flex-1">
          <Link to={`/encyclopedia/${a.id}`} className="font-serif text-[17px] hover:text-accent">
            {a.title}
          </Link>
          <div className="text-xs text-faint">{partById.get(a.partId)?.short}</div>
        </div>
        {followUps.length > 0 && (
          <button onClick={() => setOpen((o) => !o)} className="flex shrink-0 items-center gap-1 text-xs text-muted hover:text-ink" aria-expanded={open}>
            {followUps.length} later work{followUps.length === 1 ? '' : 's'}
            <Chevron open={open} className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      {open && (
        <div className="mb-4 ml-16 border-l border-rule pl-4 text-sm">
          {origin && (
            <p className="mb-2 text-muted">
              Introduced by {readingAuthors(origin)}, <span className="italic">{readingTitle(origin)}</span>
            </p>
          )}
          <ul className="space-y-1">
            {followUps.map((r) => (
              <li key={r.id} className="flex gap-3">
                <span className="w-10 shrink-0 tabular-nums text-faint">{r.year}</span>
                <Link to={`/encyclopedia/${a.id}#r-${r.id}`} className="hover:text-accent">
                  {readingAuthors(r)}, <span className="italic">{readingTitle(r)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

function Chronological() {
  const sorted = [...articles].sort((x, y) => x.origin.year - y.origin.year || x.order - y.order)
  const decades = [...new Set(sorted.map((a) => Math.floor(a.origin.year / 10) * 10))]
  return (
    <div className="space-y-10">
      {decades.map((d) => (
        <section key={d}>
          <h2 className="font-serif text-2xl font-semibold text-muted">{d}s</h2>
          <ul className="mt-3 border-t border-rule">
            {sorted
              .filter((a) => Math.floor(a.origin.year / 10) * 10 === d)
              .map((a) => (
                <TimelineRow key={a.id} a={a} />
              ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export function EncyclopediaPage() {
  const [params, setParams] = useSearchParams()
  const view = params.get('view') === 'timeline' ? 'timeline' : 'topic'

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <h1 className="font-serif text-4xl font-semibold tracking-tight">Encyclopedia</h1>
      <p className="mt-3 max-w-xl font-serif text-lg text-muted">
        Each entry covers one idea: where it came from, its core concepts, what is still debated, and the readings behind it.
      </p>
      <div className="mt-8 mb-10 inline-flex rounded-md border border-rule p-0.5 text-sm">
        {(
          [
            ['topic', 'By topic'],
            ['timeline', 'Chronological'],
          ] as const
        ).map(([v, label]) => (
          <button
            key={v}
            onClick={() => setParams(v === 'topic' ? {} : { view: v }, { replace: true })}
            className={`rounded px-4 py-1.5 transition-colors ${view === v ? 'bg-wash text-ink' : 'text-muted hover:text-ink'}`}
          >
            {label}
          </button>
        ))}
      </div>
      {view === 'topic' ? <ByTopic /> : <Chronological />}
    </div>
  )
}
