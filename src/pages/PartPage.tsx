import { Link, useParams } from 'react-router-dom'
import { partById, partColor, parts, readingAuthors } from '../data/content'
import { Icon, ProgressBar } from '../components/ui'
import { useProgress } from '../store'

export function PartPage() {
  const { id } = useParams()
  const p = partById.get(id ?? '')
  const progress = useProgress()
  if (!p) return <div className="py-24 text-center">Part not found</div>
  const color = partColor(p.id)
  const idx = parts.indexOf(p)

  return (
    <div>
      <div className="h-1" style={{ background: color }} />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="fade-in mb-12 max-w-3xl">
          <div className="mb-3 flex items-center gap-2 text-sm text-ink-lighter">
            <span className="flex h-6 min-w-6 items-center justify-center rounded px-1 font-serif text-xs font-bold text-white" style={{ background: color }}>
              {p.numeral}
            </span>
            {p.id === 'ai' ? 'Focus area' : `Part ${p.numeral}`}
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">{p.short}</h1>
          <p className="mt-5 font-serif text-xl leading-relaxed text-ink-light">{p.intro}</p>
        </header>

        <div className="space-y-14">
          {p.keyIdeas.map((k, i) => (
            <section key={k.id} id={k.id} className="scroll-mt-20 rounded-sm transition-shadow">
              <div className="mb-5 flex gap-4">
                <span className="font-serif text-5xl font-bold leading-none" style={{ color: `${color}55` }}>
                  {i + 1}
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-lighter">Key idea {i + 1}</div>
                  <h2 className="mt-1 font-serif text-2xl font-bold leading-snug sm:text-3xl">{k.title}</h2>
                  <p className="mt-3 font-serif text-lg leading-relaxed text-ink-light">{k.intro}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {k.articles.map((a) => {
                  const done = a.readings.filter((r) => progress[r.id]?.read).length
                  const origin = a.readings.find((r) => r.id === a.origin.reading)
                  return (
                    <Link key={a.id} to={`/a/${a.id}`} className="group flex flex-col rounded-xl border border-line bg-card p-5 transition-all hover:-translate-y-px hover:shadow-md">
                      <div className="mb-2 flex items-center justify-between text-xs text-ink-lighter">
                        <span className="font-mono">
                          {a.origin.year}
                          {origin && ` · ${readingAuthors(origin)}`}
                        </span>
                        <span>{a.readings.length} readings</span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold leading-snug group-hover:text-brand-700 dark:group-hover:text-brand-300">{a.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-light">{a.abstract.replace(/[*_>#]/g, '')}</p>
                      <div className="mt-auto flex items-center gap-3 pt-4">
                        <ProgressBar value={done} total={a.readings.length} className="flex-1" />
                        <Icon name="chevron" className="h-4 w-4 text-ink-lighter transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-20 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
          {parts[idx - 1] ? (
            <Link to={`/part/${parts[idx - 1].id}`} className="rounded-lg border border-line p-4 hover:border-brand-400">
              <div className="text-xs text-ink-lighter">← Previous part</div>
              <div className="font-serif font-semibold">{parts[idx - 1].short}</div>
            </Link>
          ) : (
            <span />
          )}
          {parts[idx + 1] && (
            <Link to={`/part/${parts[idx + 1].id}`} className="rounded-lg border border-line p-4 text-right hover:border-brand-400">
              <div className="text-xs text-ink-lighter">Next part →</div>
              <div className="font-serif font-semibold">{parts[idx + 1].short}</div>
            </Link>
          )}
        </nav>
      </div>
    </div>
  )
}
