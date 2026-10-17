import { useState } from 'react'
import { Link } from 'react-router-dom'
import { articles, partById, type Article } from '../data/content'

function shuffled<T>(items: T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

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
  // Shuffled once per visit so the ribbons mix topics instead of reading out the list in order.
  const [rows] = useState(() => {
    const mixed = shuffled(articles)
    return [0, 1, 2].map((r) => mixed.filter((_, i) => i % 3 === r))
  })

  return (
    <div>
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <h1 id="hq-hero-title" className="font-serif text-5xl font-semibold tracking-tight sm:text-6xl">The Informal ‘HCI Quals’</h1>
        <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-muted">
          A collection of important ideas and readings from the HCI canon, assembled for an informal quals at MIT HCI.
        </p>
      </section>

      <section className="space-y-4 pb-8" aria-label="Ideas">
        <Row items={rows[0]} duration={150} />
        <Row items={rows[1]} duration={180} reverse />
        <Row items={rows[2]} duration={165} />
      </section>
    </div>
  )
}
