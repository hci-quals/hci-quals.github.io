import { Link } from 'react-router-dom'
import { articles, currentWeek, partById, type Article } from '../data/content'

function IdeaCard({ a }: { a: Article }) {
  return (
    <Link
      to={`/encyclopedia/${a.id}`}
      className="flex h-36 w-80 shrink-0 flex-col justify-between rounded-lg border border-rule bg-card px-5 py-4 transition-colors hover:border-faint"
    >
      <span className="line-clamp-3 font-serif text-[16.5px] font-semibold leading-snug">{a.title}</span>
      <span className="text-xs text-muted">
        {a.number} · {partById.get(a.partId)?.short}
      </span>
    </Link>
  )
}

function Row({ items, reverse, duration }: { items: Article[]; reverse?: boolean; duration: number }) {
  return (
    <div className="hq-row overflow-hidden">
      <div className={`hq-track flex w-max gap-4 ${reverse ? 'reverse' : ''}`} style={{ ['--hq-duration' as string]: `${duration}s` }}>
        {[...items, ...items].map((a, i) => (
          <IdeaCard key={a.id + i} a={a} />
        ))}
      </div>
    </div>
  )
}

export function HomePage() {
  const rows = [0, 1, 2].map((r) => articles.filter((_, i) => i % 3 === r))
  const week = currentWeek()

  return (
    <div>
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <h1 className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">HCI Quals Readings</h1>
        <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-muted">
          A collection of important ideas and readings from the HCI canon, assembled for an informal quals at MIT HCI. Browse it as an encyclopedia, or follow the
          syllabus week by week.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/encyclopedia" className="rounded-md border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-85">
            Encyclopedia
          </Link>
          <Link to="/syllabus" className="rounded-md border border-rule bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-faint">
            Syllabus
          </Link>
        </div>
        {week && (
          <Link to={`/syllabus#week-${week.number}`} className="mt-8 inline-block text-sm text-muted hover:text-ink">
            This week: <span className="text-ink">Week {week.number}. {week.title}</span> →
          </Link>
        )}
      </section>

      <section className="space-y-4 pb-8" aria-label="Ideas">
        <Row items={rows[0]} duration={150} />
        <Row items={rows[1]} duration={180} reverse />
        <Row items={rows[2]} duration={165} />
      </section>
    </div>
  )
}
