import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { parse as parseYaml } from 'yaml'
import raw from '/content/idea-encyclopedia.yaml?raw'
import { articleById, type Article } from '../data/content'
import { SectionBar } from '../components/ui'

// Draft regrouping by deep idea; the entries themselves are the same as in the encyclopedia.
const doc = parseYaml(raw) as {
  communities: Record<string, string>
  ideas: { id: string; title: string; gloss: string; articles: string[] }[]
}
const ideas = doc.ideas.map((d, i) => {
  const entries = d.articles.map((id) => articleById.get(id)).filter((a): a is Article => !!a)
  const years = entries.flatMap((a) => a.readings.map((r) => r.year).filter((y): y is number => !!y))
  const communities = [...new Set(entries.map((a) => doc.communities[a.partId] ?? a.partId))]
  return { ...d, number: String(i + 1), entries, years, communities }
})

const allYears = ideas.flatMap((d) => d.years)
const FIRST = Math.floor(Math.min(...allYears) / 10) * 10
const LAST = new Date().getFullYear()

/** One dot per reading on a shared time axis, so the spread across decades is visible at a glance. */
function Span({ years }: { years: number[] }) {
  if (!years.length) return null
  return (
    <div className="relative mt-3 h-3" aria-hidden>
      <div className="absolute inset-x-0 top-1/2 border-t border-rule" />
      {years.map((y, i) => (
        <span key={i} className="absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/50" style={{ left: `${((y - FIRST) / (LAST - FIRST)) * 100}%` }} />
      ))}
    </div>
  )
}

export function IdeaEncyclopediaPage() {
  const sections = useMemo(() => ideas.map((d) => ({ id: d.id, mark: d.number, title: `${d.number}. ${d.title}` })), [])

  return (
    <div className="mx-auto max-w-3xl px-5 pt-14 pb-14 sm:px-8">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">Idea Encyclopedia</h1>
        <span className="text-sm text-faint">Draft · regrouped by idea, not subfield</span>
      </div>
      <SectionBar sections={sections} />
      <div className="space-y-16">
        {ideas.map((d) => (
          <section key={d.id} id={d.id} className="scroll-mt-32">
            <h2 className="flex gap-3 font-serif text-2xl font-semibold">
              <span className="w-8 shrink-0 font-sans text-base font-normal tabular-nums leading-8 text-faint">{d.number}</span>
              <span>{d.title}</span>
            </h2>
            <div className="ml-11">
              <p className="mt-2 font-serif text-[17px] leading-relaxed text-muted">{d.gloss}</p>
              <div className="mt-4 flex justify-between text-xs text-faint">
                <span>{d.communities.join(' · ')}</span>
                <span className="tabular-nums">
                  {Math.min(...d.years)}–{Math.max(...d.years)}
                </span>
              </div>
              <Span years={d.years} />
              <ul className="mt-4 border-t border-rule">
                {d.entries.map((a) => (
                  <li key={a.id} className="border-b border-rule">
                    <Link to={`/encyclopedia/${a.id}`} className="flex items-baseline gap-3 py-3 hover:text-accent">
                      <span className="flex-1 font-serif text-[16.5px] leading-snug">{a.title}</span>
                      <span className="shrink-0 text-xs text-faint">{doc.communities[a.partId]}</span>
                      <span className="w-10 shrink-0 text-right text-sm tabular-nums text-faint">{a.origin.year}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
