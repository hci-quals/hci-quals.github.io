import { Link, useParams } from 'react-router-dom'
import { articleById, articles, keyIdeaById, lineage, orderedReadings, partById, readingAuthors, weekOfArticle } from '../data/content'
import { Crumbs, Markdown, ReadingItem } from '../components/ui'

export function ArticlePage() {
  const { id } = useParams()
  const a = articleById.get(id ?? '')
  if (!a) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <h1 className="font-serif text-3xl font-semibold">Not found</h1>
        <Link to="/encyclopedia" className="mt-4 inline-block text-accent underline">
          Back to the encyclopedia
        </Link>
      </div>
    )
  }

  const part = partById.get(a.partId)!
  const ki = keyIdeaById.get(a.keyIdeaId)!
  const { origin } = lineage(a)
  const week = weekOfArticle.get(a.id)
  const discussion = a.sections.find((s) => s.id === 'discussion-questions')
  const body = a.sections.filter((s) => s.id !== 'discussion-questions')
  const idx = articles.indexOf(a)
  const prev = articles[idx - 1]
  const next = articles[idx + 1]
  const toc = [...body.map((s) => [s.id, s.title]), ['readings', 'Readings'], ...(discussion ? [['discussion-questions', 'Discussion questions']] : [])]

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <div className="lg:grid lg:grid-cols-[11rem_1fr] lg:gap-14">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-2 text-sm text-muted">
            {toc.map(([sid, title]) => (
              <a key={sid} href={`#${sid}`} className="block leading-snug hover:text-ink">
                {title}
              </a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 max-w-2xl">
          <Crumbs items={[{ label: 'Encyclopedia', to: '/encyclopedia' }, { label: part.short, to: `/encyclopedia#${part.id}` }, { label: ki.title, to: `/encyclopedia#${ki.id}` }]} />
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-[2.75rem]">{a.title}</h1>
          <p className="mt-4 text-[15px] text-muted">
            {origin && (
              <>
                Introduced {a.origin.year} by{' '}
                <a href={`#r-${origin.id}`} className="text-ink hover:text-accent">
                  {readingAuthors(origin)}
                </a>
              </>
            )}
            {week && (
              <>
                <span className="mx-2 text-faint">·</span>
                <Link to={`/syllabus#week-${week.number}`} className="hover:text-ink">
                  Syllabus week {week.number}
                </Link>
              </>
            )}
            {a.people.length > 0 && (
              <>
                <span className="mx-2 text-faint">·</span>
                {a.people.join(', ')}
              </>
            )}
          </p>

          <Markdown className="mt-10 text-[1.2rem] leading-[1.8]">{a.abstract}</Markdown>

          {body.map((s) => (
            <section key={s.id} id={s.id} className="mt-12 scroll-mt-24">
              <h2 className="mb-4 font-serif text-2xl font-semibold">{s.title}</h2>
              <Markdown>{s.body}</Markdown>
            </section>
          ))}

          <section id="readings" className="mt-14 scroll-mt-24">
            <h2 className="mb-6 font-serif text-2xl font-semibold">Readings</h2>
            <ol className="space-y-7">
              {orderedReadings(a).map((r) => (
                <ReadingItem key={r.id} r={r} note={r === origin ? 'Introduced the idea' : undefined} />
              ))}
            </ol>
            {a.pending.length > 0 && (
              <p className="mt-8 text-sm text-faint">
                To be added: <span className="italic">{a.pending.join('; ')}</span>
              </p>
            )}
          </section>

          {discussion && (
            <section id="discussion-questions" className="mt-14 scroll-mt-24 border-t border-rule pt-10">
              <h2 className="mb-4 font-serif text-2xl font-semibold">Discussion questions</h2>
              <Markdown>{discussion.body}</Markdown>
            </section>
          )}

          <nav className="mt-16 flex justify-between gap-6 border-t border-rule pt-6 text-sm">
            {prev ? (
              <Link to={`/encyclopedia/${prev.id}`} className="text-muted hover:text-ink">
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={`/encyclopedia/${next.id}`} className="text-right text-muted hover:text-ink">
                {next.title} →
              </Link>
            )}
          </nav>
        </article>
      </div>
    </div>
  )
}
