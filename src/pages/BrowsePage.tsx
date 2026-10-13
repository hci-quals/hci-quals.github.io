import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { articles, parts, partColor, type Article } from '../data/content'
import { PartChip, ProgressBar } from '../components/ui'
import { useProgress } from '../store'

function ArticleRow({ a }: { a: Article }) {
  const progress = useProgress()
  const done = a.readings.filter((r) => progress[r.id]?.read).length
  return (
    <Link to={`/a/${a.id}`} className="group flex items-start gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-card">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: partColor(a.partId) }} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-serif text-lg font-semibold group-hover:text-brand-700 dark:group-hover:text-brand-300">{a.title}</span>
          <span className="font-mono text-xs text-ink-lighter">{a.origin.year}</span>
        </div>
        <p className="mt-0.5 line-clamp-2 text-sm text-ink-light">{a.abstract.replace(/[*_>#]/g, '')}</p>
      </div>
      <div className="hidden w-24 shrink-0 pt-2 sm:block">
        <div className="mb-1 text-right text-[11px] tabular-nums text-ink-lighter">
          {done}/{a.readings.length}
        </div>
        <ProgressBar value={done} total={a.readings.length} />
      </div>
    </Link>
  )
}

export function BrowsePage() {
  const [mode, setMode] = useState<'topic' | 'az'>('topic')
  const az = useMemo(() => {
    const m = new Map<string, Article[]>()
    ;[...articles].sort((a, b) => a.title.localeCompare(b.title)).forEach((a) => {
      const L = a.title.replace(/^[“"]/, '')[0].toUpperCase()
      m.set(L, [...(m.get(L) ?? []), a])
    })
    return [...m.entries()]
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="fade-in mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">All ideas</h1>
          <p className="mt-3 text-ink-light">{articles.length} entries across ten parts and the Human-AI focus area.</p>
        </div>
        <div className="flex rounded-lg border border-line bg-card p-0.5 text-sm">
          {(['topic', 'az'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-md px-3 py-1.5 font-medium transition-colors ${mode === m ? 'bg-surface-alt text-ink' : 'text-ink-light hover:text-ink'}`}
            >
              {m === 'topic' ? 'By topic' : 'A–Z'}
            </button>
          ))}
        </div>
      </header>

      {mode === 'topic' ? (
        <div className="flex gap-10">
          <aside className="hidden w-60 shrink-0 lg:block">
            <nav className="sticky top-20 space-y-1 text-sm">
              {parts.map((p) => (
                <a key={p.id} href={`#${p.id}`} className="flex items-center gap-2 rounded px-2 py-1 text-ink-light hover:bg-black/5 hover:text-ink dark:hover:bg-white/10">
                  <span className="w-6 text-right font-serif text-xs font-bold" style={{ color: partColor(p.id) }}>
                    {p.numeral}
                  </span>
                  <span className="truncate">{p.short}</span>
                </a>
              ))}
            </nav>
          </aside>
          <div className="min-w-0 flex-1 space-y-14">
            {parts.map((p) => (
              <section key={p.id} id={p.id} className="scroll-mt-20">
                <div className="mb-4 border-b border-line pb-3">
                  <PartChip partId={p.id} short />
                  <Link to={`/part/${p.id}`}>
                    <h2 className="mt-1 font-serif text-2xl font-bold hover:text-brand-700 dark:hover:text-brand-300">{p.short}</h2>
                  </Link>
                </div>
                {p.keyIdeas.map((k) => (
                  <div key={k.id} className="mb-6">
                    <h3 className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-ink-lighter">{k.title}</h3>
                    {k.articles.map((a) => (
                      <ArticleRow key={a.id} a={a} />
                    ))}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <nav className="sticky top-14 z-10 -mx-4 mb-6 flex flex-wrap gap-1 border-b border-line bg-surface/90 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {az.map(([L]) => (
              <a key={L} href={`#az-${L}`} className="rounded px-2 py-1 font-serif font-semibold text-ink-light hover:bg-surface-alt hover:text-ink">
                {L}
              </a>
            ))}
          </nav>
          <div className="max-w-4xl space-y-8">
            {az.map(([L, list]) => (
              <section key={L} id={`az-${L}`} className="scroll-mt-28">
                <h2 className="mb-2 border-b border-line pb-1 font-serif text-2xl font-bold text-ink-lighter">{L}</h2>
                {list.map((a) => (
                  <ArticleRow key={a.id} a={a} />
                ))}
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
