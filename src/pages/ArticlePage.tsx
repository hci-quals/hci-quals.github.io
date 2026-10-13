import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  articleById,
  articles,
  keyIdeaById,
  lineage,
  pairsForArticle,
  partById,
  partColor,
  readingAuthors,
  readingTitle,
  type Article,
} from '../data/content'
import { ReadingCard } from '../components/ReadingCard'
import { Icon, Markdown, PartChip, ProgressBar, TagBadge } from '../components/ui'
import { addArticleToSession, useProgress, useSessions } from '../store'

const DISCUSSION = 'discussion-questions'

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -65% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}

function AddToSession({ a }: { a: Article }) {
  const { sessions } = useSessions()
  const [open, setOpen] = useState(false)
  const inSession = sessions.find((s) => s.articleIds.includes(a.id))
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded border border-line px-3 py-1 text-sm transition-colors hover:border-brand-400"
      >
        <Icon name="calendar" className="h-3.5 w-3.5" />
        {inSession ? inSession.title : 'Add to session'}
      </button>
      {open && (
        <div className="fade-in absolute right-0 z-30 mt-1 w-60 overflow-hidden rounded-lg border border-line bg-card py-1 shadow-lg" onMouseLeave={() => setOpen(false)}>
          {sessions.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                addArticleToSession(a.id, s.id)
                setOpen(false)
              }}
              className="flex w-full items-center justify-between px-3 py-1.5 text-left text-sm hover:bg-surface-alt"
            >
              <span className="truncate">
                <span className="mr-2 text-ink-lighter">{i + 1}</span>
                {s.title}
              </span>
              {s.articleIds.includes(a.id) && <Icon name="check" className="h-3.5 w-3.5 text-brand-600" />}
            </button>
          ))}
          <button
            onClick={() => {
              addArticleToSession(a.id)
              setOpen(false)
            }}
            className="flex w-full items-center gap-2 border-t border-line px-3 py-2 text-left text-sm text-brand-700 hover:bg-surface-alt dark:text-brand-300"
          >
            <Icon name="plus" className="h-3.5 w-3.5" /> New session with this idea
          </button>
        </div>
      )}
    </div>
  )
}

export function ArticlePage() {
  const { id } = useParams()
  const a = articleById.get(id ?? '')
  const progress = useProgress()

  const sections = a?.sections ?? []
  const mainSections = sections.filter((s) => s.id !== DISCUSSION)
  const discussion = sections.find((s) => s.id === DISCUSSION)
  const pairs = a ? pairsForArticle(a) : []
  const tocIds = useMemo(
    () => [...mainSections.map((s) => s.id), 'readings', ...(discussion ? [DISCUSSION] : []), ...(pairs.length ? ['pairs'] : [])],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  )
  const active = useActiveSection(tocIds)

  if (!a) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold">Idea not found</h1>
        <Link to="/browse" className="mt-4 inline-block text-brand-600 underline">
          Browse all ideas
        </Link>
      </div>
    )
  }

  const part = partById.get(a.partId)!
  const ki = keyIdeaById.get(a.keyIdeaId)!
  const lin = lineage(a)
  const readCount = a.readings.filter((r) => progress[r.id]?.read).length
  const idx = articles.indexOf(a)
  const prev = articles[idx - 1]
  const next = articles[idx + 1]
  const tagCounts = a.readings.reduce<Record<string, number>>((m, r) => ((m[r.tag] = (m[r.tag] ?? 0) + 1), m), {})
  const titleFor = (sid: string) =>
    sid === 'readings' ? 'Readings' : sid === 'pairs' ? 'Read in pairs' : sections.find((s) => s.id === sid)?.title ?? sid

  return (
    <article key={a.id}>
      <div className="h-1" style={{ background: `linear-gradient(90deg, var(--color-brand-400), ${partColor(a.partId)}, var(--color-brand-400))` }} />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="fade-in mx-auto mb-10 max-w-3xl">
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-ink-lighter">
            <PartChip partId={a.partId} />
            <Icon name="chevron" className="h-3 w-3" />
            <Link to={`/part/${part.id}#${ki.id}`} className="hover:text-ink">
              {ki.title}
            </Link>
          </nav>
          <h1 className="mb-5 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{a.title}</h1>
          {lin.origin && (
            <p className="mb-6 flex flex-wrap items-baseline gap-x-2 text-[15px] text-ink-light">
              <span className="font-medium text-ink">{a.label}</span>
              <span>· introduced {a.origin.year} by</span>
              <a href={`#r-${lin.origin.id}`} className="text-brand-700 hover:underline dark:text-brand-300">
                {readingAuthors(lin.origin)}
              </a>
              <Link to={`/timeline?open=${a.id}`} className="ml-auto inline-flex items-center gap-1 text-sm text-ink-lighter hover:text-ink">
                <Icon name="timeline" className="h-3.5 w-3.5" /> View on timeline
              </Link>
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3 border-b border-line pb-6 text-sm text-ink-light">
            <span>{a.readings.length} readings</span>
            <span className="flex items-center gap-1">
              {(['Core', 'Modern', 'Adjacent', 'Added'] as const)
                .filter((t) => tagCounts[t])
                .map((t) => (
                  <span key={t} className="flex items-center gap-1">
                    <TagBadge tag={t} />
                    <span className="mr-1 text-xs tabular-nums">{tagCounts[t]}</span>
                  </span>
                ))}
            </span>
            {a.status === 'draft' && (
              <span className="rounded border border-dashed border-line px-2 py-0.5 text-xs" title="Scaffolding to be expanded">
                Draft
              </span>
            )}
            <div className="flex w-full items-center gap-3 sm:ml-auto sm:w-auto">
              <span className="text-xs tabular-nums">
                {readCount}/{a.readings.length} read
              </span>
              <ProgressBar value={readCount} total={a.readings.length} className="w-20" />
              <AddToSession a={a} />
            </div>
          </div>
        </header>

        <div className="mx-auto flex max-w-7xl gap-10">
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="scrollbar-thin sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-lighter">Contents</h3>
              <ul className="space-y-0.5 text-sm">
                {tocIds.map((sid) => (
                  <li key={sid}>
                    <a
                      href={`#${sid}`}
                      className={`block rounded border-l-2 px-2 py-1 leading-snug transition-all ${
                        active === sid
                          ? 'border-brand-500 bg-brand-50/60 text-ink dark:bg-brand-900/20'
                          : 'border-transparent text-ink-light hover:bg-black/5 hover:text-ink dark:hover:bg-white/10'
                      }`}
                    >
                      {titleFor(sid)}
                      {sid === 'readings' && <span className="ml-1 text-ink-lighter">({a.readings.length})</span>}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-line pt-6">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-lighter">In this key idea</h4>
                <ul className="space-y-1 text-sm">
                  {ki.articles.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={`/a/${s.id}`}
                        className={`flex items-start gap-2 rounded px-2 py-1 leading-snug ${
                          s.id === a.id ? 'font-medium text-ink' : 'text-ink-light hover:text-ink'
                        }`}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: s.id === a.id ? partColor(a.partId) : 'var(--color-line)' }} />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="min-w-0 max-w-3xl flex-1">
            <Markdown className="mb-10 text-[1.2rem] leading-[1.8]">{a.abstract}</Markdown>

            {mainSections.map((s) => (
              <section key={s.id} id={s.id} className="mb-10 scroll-mt-20 rounded-sm transition-shadow">
                <h2 className="mb-4 font-serif text-2xl font-bold">{s.title}</h2>
                <Markdown>{s.body}</Markdown>
              </section>
            ))}

            <section id="readings" className="mb-12 scroll-mt-20">
              <div className="mb-5 flex items-baseline justify-between">
                <h2 className="font-serif text-2xl font-bold">Readings</h2>
                <span className="text-sm text-ink-lighter">sorted by year</span>
              </div>
              <ol className="space-y-3">
                {[...a.readings]
                  .sort((x, y) => (x.year ?? 0) - (y.year ?? 0))
                  .map((r) => (
                    <ReadingCard key={r.id} r={r} isOrigin={r.id === lin.origin?.id} />
                  ))}
              </ol>
            </section>

            {discussion && (
              <section id={DISCUSSION} className="mb-12 scroll-mt-20 rounded-xl border border-line bg-surface-alt/60 p-6">
                <h2 className="mb-4 font-serif text-2xl font-bold">{discussion.title}</h2>
                <Markdown>{discussion.body}</Markdown>
              </section>
            )}

            {pairs.length > 0 && (
              <section id="pairs" className="mb-12 scroll-mt-20">
                <h2 className="mb-2 font-serif text-2xl font-bold">Read in pairs</h2>
                <p className="mb-5 text-sm text-ink-light">Older ideas set beside newer work that tests or reuses them.</p>
                <div className="space-y-3">
                  {pairs.map((p) => (
                    <div key={p.question} className="rounded-lg border border-line bg-card p-4">
                      <p className="mb-3 font-serif text-lg italic">{p.question}</p>
                      <div className="grid gap-3 text-sm sm:grid-cols-2">
                        {(['older', 'newer'] as const).map((side) => (
                          <div key={side}>
                            <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-ink-lighter">{side === 'older' ? 'Older idea' : 'Newer work'}</div>
                            {p[side].map((r) => (
                              <Link key={r.id} to={`/a/${r.articleId}#r-${r.id}`} className="block leading-snug text-ink-light hover:text-brand-700">
                                {readingAuthors(r)} ({r.year}) — <span className="italic">{readingTitle(r)}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <nav className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
              {prev ? (
                <Link to={`/a/${prev.id}`} className="group rounded-lg border border-line p-4 transition-colors hover:border-brand-400">
                  <div className="mb-1 text-xs text-ink-lighter">← Previous</div>
                  <div className="font-serif font-semibold group-hover:text-brand-700 dark:group-hover:text-brand-300">{prev.title}</div>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link to={`/a/${next.id}`} className="group rounded-lg border border-line p-4 text-right transition-colors hover:border-brand-400">
                  <div className="mb-1 text-xs text-ink-lighter">Next →</div>
                  <div className="font-serif font-semibold group-hover:text-brand-700 dark:group-hover:text-brand-300">{next.title}</div>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </article>
  )
}
