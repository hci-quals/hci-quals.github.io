import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  bullet,
  currentWeek,
  fmtDate,
  keyIdeaById,
  listItems,
  orderedReadings,
  lineage,
  weekOfReading,
  weeks,
  type Week,
} from '../data/content'
import { Chevron, Inline, ReadingItem } from '../components/ui'

const CONTROVERSY = 'questions-controversies-and-new-developments'

function Label({ children }: { children: React.ReactNode }) {
  return <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-faint">{children}</h4>
}

function WeekBody({ w }: { w: Week }) {
  const kiIds = [...new Set(w.articles.map((a) => a.keyIdeaId))]
  const ki = kiIds.length === 1 ? keyIdeaById.get(kiIds[0]) : undefined
  const multi = w.articles.length > 1
  const disagreements = w.articles.map((a) => ({ a, text: bullet(a, CONTROVERSY, 'Controversies') })).filter((d) => d.text)
  const questions = [
    ...w.articles.flatMap((a) => listItems(a.sections.find((s) => s.id === 'discussion-questions')?.body ?? '').slice(0, multi ? 1 : 2)),
    ...w.pairs.map((p) => p.question),
  ]

  return (
    <div className="space-y-10 pb-10 pt-2">
      {ki && (
        <div>
          <Label>The core idea</Label>
          <p className="max-w-2xl font-serif text-[1.15rem] leading-relaxed">{ki.intro}</p>
        </div>
      )}

      {disagreements.length > 0 && (
        <div>
          <Label>Where people disagree</Label>
          <ul className="max-w-2xl list-disc space-y-2 pl-5 font-serif text-[16px] leading-relaxed text-ink/85 marker:text-faint">
            {disagreements.map(({ a, text }) => (
              <li key={a.id}>
                {multi && <span className="font-sans text-sm tabular-nums text-faint">{a.number} </span>}
                <Inline>{text}</Inline>
              </li>
            ))}
          </ul>
        </div>
      )}

      {questions.length > 0 && (
        <div>
          <Label>Questions to carry in</Label>
          <ol className="max-w-2xl list-decimal space-y-2 pl-5 font-serif text-[16px] leading-relaxed text-ink/85 marker:text-faint">
            {questions.map((q) => (
              <li key={q}>
                <Inline>{q}</Inline>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div>
        <Label>Readings</Label>
        <div className="space-y-9">
          {w.articles.map((a) => {
            const { origin } = lineage(a)
            return (
              <div key={a.id}>
                {multi && (
                  <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-rule pb-2">
                    <h5 className="font-serif text-lg font-semibold leading-snug">
                      <span className="mr-2 font-sans text-sm font-normal tabular-nums text-faint">{a.number}</span>
                      {a.title}
                    </h5>
                    <Link to={`/encyclopedia/${a.id}`} className="shrink-0 text-sm text-muted hover:text-ink">
                      Entry →
                    </Link>
                  </div>
                )}
                <ol className="space-y-6">
                  {orderedReadings(a).map((r) => (
                    <ReadingItem key={r.id} r={r} note={r === origin ? 'Start here: introduced the idea' : undefined} />
                  ))}
                </ol>
                {!multi && (
                  <Link to={`/encyclopedia/${a.id}`} className="mt-5 inline-block text-sm text-muted hover:text-ink">
                    Read the encyclopedia entry →
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {w.pairs.length > 0 && (
        <div>
          <Label>Read together</Label>
          <div className="space-y-5">
            {w.pairs.map((p) => (
              <div key={p.question} className="rounded-lg border border-rule bg-card px-5 py-4">
                <p className="font-serif text-[17px] italic leading-snug">{p.question}</p>
                <ul className="mt-4 space-y-3">
                  {[...p.older, ...p.newer].map((r) => {
                    const rw = weekOfReading(r)
                    return (
                      <ReadingItem
                        key={r.id}
                        r={r}
                        compact
                        note={rw && rw.number !== w.number ? `Revisit from week ${rw.number}` : p.older.includes(r) ? 'Earlier idea' : 'Newer work'}
                      />
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function SyllabusPage() {
  const loc = useLocation()
  const now = currentWeek()
  const [open, setOpen] = useState<Set<number>>(() => new Set(now ? [now.number] : []))

  useEffect(() => {
    const m = loc.hash.match(/^#week-(\d+)/)
    if (m) setOpen((s) => new Set([...s, Number(m[1])]))
  }, [loc.hash])

  const toggle = (n: number) =>
    setOpen((s) => {
      const next = new Set(s)
      if (next.has(n)) next.delete(n)
      else next.add(n)
      return next
    })
  const allOpen = open.size === weeks.length

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <h1 className="font-serif text-4xl font-semibold tracking-tight">Syllabus</h1>
      <p className="mt-3 max-w-xl font-serif text-lg text-muted">
        One key idea per week. Each week states the core idea, where people disagree and what to think about, then lists the readings, with paired readings to
        read side by side.
      </p>
      <div className="mt-8 flex justify-end">
        <button onClick={() => setOpen(allOpen ? new Set() : new Set(weeks.map((w) => w.number)))} className="text-sm text-muted hover:text-ink">
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      <ol className="mt-3 border-t border-rule">
        {weeks.map((w) => {
          const isOpen = open.has(w.number)
          const isNow = now?.number === w.number
          const past = now ? w.number < now.number : false
          return (
            <li key={w.number} id={`week-${w.number}`} className="scroll-mt-20 border-b border-rule">
              <button onClick={() => toggle(w.number)} className="flex w-full items-baseline gap-5 py-5 text-left" aria-expanded={isOpen}>
                <span className="w-24 shrink-0 text-sm text-muted">
                  <span className="tabular-nums">Week {w.number}</span>
                  <span className="block text-xs text-faint">{fmtDate(w.start)}</span>
                </span>
                <span className={`flex-1 font-serif text-[19px] leading-snug ${past ? 'text-muted' : ''}`}>
                  {w.articles[0] && keyIdeaById.get(w.articles[0].keyIdeaId)?.title === w.title && (
                    <span className="mr-2 font-sans text-sm tabular-nums text-faint">{keyIdeaById.get(w.articles[0].keyIdeaId)?.number}</span>
                  )}
                  {w.title}
                  {isNow && <span className="ml-3 align-middle font-sans text-xs font-medium text-accent">This week</span>}
                </span>
                <Chevron open={isOpen} className="translate-y-0.5 text-faint" />
              </button>
              {isOpen && (
                <div className="sm:pl-[7.25rem]">
                  <WeekBody w={w} />
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
