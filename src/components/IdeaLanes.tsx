import { useState } from 'react'
import { Link } from 'react-router-dom'
import { parts, partColor, type Article } from '../data/content'

const MIN = 1940
const MAX = 2026
const pos = (y: number) => ((y - MIN) / (MAX - MIN)) * 100

/** Compact swimlane overview: one lane per part, one dot per idea at the year it was introduced. */
export function IdeaLanes() {
  const [hover, setHover] = useState<Article | null>(null)
  return (
    <div className="rounded-2xl border border-line bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-lighter">Ideas through time</h2>
        <Link to="/timeline" className="text-xs font-medium text-brand-700 hover:underline dark:text-brand-300">
          Open timeline →
        </Link>
      </div>
      <div className="space-y-1.5">
        {parts.map((p) => {
          const arts = p.keyIdeas.flatMap((k) => k.articles)
          return (
            <div key={p.id} className="flex items-center gap-3">
              <Link to={`/part/${p.id}`} className="w-7 shrink-0 text-right font-serif text-[11px] font-bold" style={{ color: partColor(p.id) }} title={p.short}>
                {p.numeral}
              </Link>
              <div className="relative h-4 flex-1">
                <div className="absolute inset-x-0 top-1/2 h-px bg-line" />
                {arts.map((a) => (
                  <Link
                    key={a.id}
                    to={`/timeline?open=${a.id}`}
                    onMouseEnter={() => setHover(a)}
                    onMouseLeave={() => setHover(null)}
                    className={`absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-card transition-transform hover:z-10 hover:scale-150 ${hover && hover.id !== a.id ? 'opacity-40' : ''}`}
                    style={{ left: `${pos(a.origin.year)}%`, background: partColor(p.id) }}
                    aria-label={`${a.label}, ${a.origin.year}`}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="ml-10 mt-2 flex justify-between font-mono text-[10px] text-ink-lighter">
        {[1940, 1960, 1980, 2000, 2020].map((y) => (
          <span key={y}>{y}</span>
        ))}
      </div>
      <div className="mt-4 min-h-[3.5rem] border-t border-line pt-3">
        {hover ? (
          <div className="fade-in">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-ink-lighter">{hover.origin.year}</span>
              <span className="font-serif font-semibold">{hover.label}</span>
            </div>
            <p className="mt-0.5 line-clamp-2 text-xs text-ink-light">{hover.origin.blurb || hover.title}</p>
          </div>
        ) : (
          <p className="text-xs text-ink-lighter">Hover a dot to preview an idea; click to see what followed it.</p>
        )}
      </div>
    </div>
  )
}
