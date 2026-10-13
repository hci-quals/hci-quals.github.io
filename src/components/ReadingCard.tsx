import { Link } from 'react-router-dom'
import { articleById, readingAuthors, readingTitle, readingVenue, type Reading } from '../data/content'
import { setReadingState, useProgress } from '../store'
import { Icon, TagBadge } from './ui'

const LINK_LABEL: Record<string, string> = {
  pdf: 'PDF',
  open: 'Open access',
  arxiv: 'arXiv',
  author: 'Author copy',
  archive: 'Archive',
  video: 'Watch',
  publisher: 'Publisher',
  doi: 'DOI',
  search: 'Find it',
}

const FREE = new Set(['pdf', 'open', 'arxiv', 'author', 'archive', 'video'])

export function ReadingLinks({ r }: { r: Reading }) {
  const free = FREE.has(r.urlKind)
  const doiUrl = r.doi ? `https://doi.org/${r.doi}` : null
  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={r.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${
          free
            ? 'border-brand-300 bg-brand-50 text-brand-800 hover:bg-brand-100 dark:border-brand-700 dark:bg-brand-900/40 dark:text-brand-200'
            : 'border-line text-ink-light hover:border-brand-400 hover:text-ink'
        }`}
        title={r.verified ? 'Link checked' : 'Link not yet checked'}
      >
        {free && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
        {LINK_LABEL[r.urlKind] ?? 'Link'}
        <Icon name="external" className="h-3 w-3" />
      </a>
      {doiUrl && r.url !== doiUrl && (
        <a
          href={doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 font-mono text-[11px] text-ink-light hover:border-brand-400 hover:text-ink"
        >
          DOI
        </a>
      )}
      {doiUrl && (
        <a
          href={`https://libproxy.mit.edu/login?url=${doiUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-[11px] text-ink-light hover:border-brand-400 hover:text-ink"
          title="Open through the MIT Libraries proxy"
        >
          MIT Libraries
        </a>
      )}
    </div>
  )
}

export function ReadStatus({ r, compact = false }: { r: Reading; compact?: boolean }) {
  const progress = useProgress()
  const st = progress[r.id] ?? {}
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setReadingState(r.id, { read: !st.read })}
        className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium transition-all ${
          st.read
            ? 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
            : 'border-line text-ink-light hover:border-emerald-400 hover:text-ink'
        }`}
        aria-pressed={!!st.read}
      >
        <span
          className={`flex h-3.5 w-3.5 items-center justify-center rounded-sm border ${
            st.read ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-current'
          }`}
        >
          {st.read && <Icon name="check" className="h-3 w-3" />}
        </span>
        {!compact && (st.read ? 'Read' : 'Mark read')}
      </button>
      <div className="flex items-center" title="Interest">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            onClick={() => setReadingState(r.id, { interest: st.interest === n ? 0 : n })}
            className={`p-0.5 transition-colors ${(st.interest ?? 0) >= n ? 'text-amber-500' : 'text-ink-lighter/50 hover:text-amber-400'}`}
            aria-label={`Interest ${n}`}
          >
            <Icon name="star" className={`h-3.5 w-3.5 ${(st.interest ?? 0) >= n ? 'fill-current' : ''}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

export function ReadingCard({ r, isOrigin = false, showArticle = false }: { r: Reading; isOrigin?: boolean; showArticle?: boolean }) {
  const progress = useProgress()
  const read = progress[r.id]?.read
  const article = articleById.get(r.articleId)
  return (
    <li
      id={`r-${r.id}`}
      className={`group relative rounded-lg border bg-card p-4 sm:p-5 transition-all hover:shadow-sm ${
        isOrigin ? 'border-brand-300 dark:border-brand-800' : 'border-line'
      } ${read ? 'opacity-75 hover:opacity-100' : ''}`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-ink-light">
        <span className="font-mono tabular-nums">{r.year ?? 'n.d.'}</span>
        <TagBadge tag={r.tag} />
        {isOrigin && (
          <span className="inline-flex items-center gap-1 rounded bg-brand-600 px-1.5 py-px text-[11px] font-medium text-white">
            Introduced the idea
          </span>
        )}
        {showArticle && article && (
          <Link to={`/a/${article.id}`} className="truncate text-ink-lighter hover:text-brand-600">
            in {article.title}
          </Link>
        )}
      </div>
      <h4 className="font-serif text-lg font-semibold leading-snug">
        <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700 dark:hover:text-brand-300">
          {readingTitle(r)}
        </a>
      </h4>
      <p className="mt-0.5 text-sm text-ink-light">
        {readingAuthors(r)}
        {readingVenue(r) && <span className="text-ink-lighter"> · {readingVenue(r)}</span>}
      </p>
      <p className="mt-3 font-serif text-[15px] leading-relaxed text-ink/90">{r.description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <ReadingLinks r={r} />
        <ReadStatus r={r} />
      </div>
    </li>
  )
}
