import { Link, useNavigate } from 'react-router-dom'
import { articles, pairs, parts, partColor, readingAuthors, readings, stats } from '../data/content'
import { Icon, ProgressBar } from '../components/ui'
import { IdeaLanes } from '../components/IdeaLanes'
import { useProgress } from '../store'

export function HomePage() {
  const nav = useNavigate()
  const progress = useProgress()
  const readCount = readings.filter((r) => progress[r.id]?.read).length
  const random = () => nav(`/a/${articles[Math.floor(Math.random() * articles.length)].id}`)

  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 pb-14 pt-16 sm:px-6 lg:grid-cols-[1fr_26rem] lg:px-8 lg:pt-24">
          <div>
          <div className="fade-in max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-300">MIT HCI · Quals reading group</p>
            <h1 className="font-serif text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              The key ideas of human-computer interaction
            </h1>
            <p className="mt-6 font-serif text-xl leading-relaxed text-ink-light">
              A guided path through the HCI quals list, organized as short encyclopedia-style entries. Each entry covers one idea:
              where it came from, its core concepts, what is still contested, and the readings that made it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/browse" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700">
                <Icon name="book" /> Browse all ideas
              </Link>
              <Link to="/timeline" className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-brand-400">
                <Icon name="timeline" /> Timeline
              </Link>
              <button onClick={random} className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-brand-400">
                <Icon name="dice" /> Random idea
              </button>
            </div>
          </div>
          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ['Parts', stats.parts],
              ['Key ideas', stats.keyIdeas],
              ['Ideas', stats.articles],
              ['Readings', stats.readings],
            ].map(([k, v]) => (
              <div key={k}>
                <dd className="font-serif text-4xl font-bold tabular-nums">{v}</dd>
                <dt className="mt-1 text-sm text-ink-light">{k}</dt>
              </div>
            ))}
          </dl>
          <div className="mt-8 max-w-3xl">
            <div className="mb-1.5 flex justify-between text-xs text-ink-lighter">
              <span>Your progress</span>
              <span className="tabular-nums">
                {readCount} / {readings.length} readings
              </span>
            </div>
            <ProgressBar value={readCount} total={readings.length} />
          </div>
          </div>
          <div className="fade-in hidden lg:block lg:pt-10">
            <IdeaLanes />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold">Map of the field</h2>
            <p className="mt-2 text-ink-light">Ten parts and a focus area, each cut down to its most influential key ideas.</p>
          </div>
          <Link to="/browse" className="hidden text-sm font-medium text-brand-700 hover:underline sm:block dark:text-brand-300">
            All ideas →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {parts.map((p) => {
            const pr = p.keyIdeas.flatMap((k) => k.articles.flatMap((a) => a.readings))
            const done = pr.filter((r) => progress[r.id]?.read).length
            return (
              <div key={p.id} className="group flex flex-col rounded-xl border border-line bg-card p-5 transition-shadow hover:shadow-md">
                <Link to={`/part/${p.id}`} className="mb-4 block">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 min-w-6 items-center justify-center rounded px-1 font-serif text-xs font-bold text-white" style={{ background: partColor(p.id) }}>
                      {p.numeral}
                    </span>
                    <span className="text-xs text-ink-lighter">
                      {pr.length} readings{done ? ` · ${done} read` : ''}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold leading-snug group-hover:text-brand-700 dark:group-hover:text-brand-300">{p.short}</h3>
                </Link>
                <ul className="mt-auto space-y-3 border-t border-line pt-4">
                  {p.keyIdeas.map((k) => (
                    <li key={k.id}>
                      <Link to={`/part/${p.id}#${k.id}`} className="text-sm font-medium leading-snug hover:text-brand-700 dark:hover:text-brand-300">
                        {k.title}
                      </Link>
                      {k.articles.length > 1 && (
                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                          {k.articles.map((a) => (
                            <Link key={a.id} to={`/a/${a.id}`} className="text-xs text-ink-lighter hover:text-ink">
                              {a.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                {done > 0 && <ProgressBar value={done} total={pr.length} className="mt-4" />}
              </div>
            )
          })}
        </div>
      </section>

      {pairs.length > 0 && (
        <section className="border-t border-line bg-surface-alt/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold">Read these as pairs</h2>
            <p className="mt-2 max-w-2xl text-ink-light">Each pair sets an older idea beside the newer work that tests or reuses it, and asks the question that connects them.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {pairs.map((p) => (
                <div key={p.question} className="rounded-xl border border-line bg-card p-5">
                  <p className="font-serif text-lg italic leading-snug">{p.question}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    {p.older.map((r) => (
                      <Link key={r.id} to={`/a/${r.articleId}#r-${r.id}`} className="rounded bg-surface-alt px-2 py-1 text-ink-light hover:text-ink">
                        {readingAuthors(r)} {r.year}
                      </Link>
                    ))}
                    <span className="text-ink-lighter">→</span>
                    {p.newer.map((r) => (
                      <Link key={r.id} to={`/a/${r.articleId}#r-${r.id}`} className="rounded bg-brand-50 px-2 py-1 text-brand-800 hover:text-brand-900 dark:bg-brand-900/40 dark:text-brand-200">
                        {readingAuthors(r)} {r.year}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
