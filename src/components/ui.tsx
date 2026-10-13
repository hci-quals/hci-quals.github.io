import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'
import { readingAuthors, readingTitle, readingVenue, type Reading } from '../data/content'

export function Markdown({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div className={`prose-hq ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  )
}

/** Inline markdown (bold/italic only) without wrapping paragraphs. */
export function Inline({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ p: ({ children }) => <>{children}</> }}>
      {children}
    </ReactMarkdown>
  )
}

export function Chevron({ open = false, className = '' }: { open?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''} ${className}`} fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const LINK_LABEL: Record<string, string> = {
  pdf: 'PDF',
  open: 'Read',
  arxiv: 'arXiv',
  author: 'Read',
  archive: 'Archive',
  video: 'Watch',
  publisher: 'Publisher',
  doi: 'DOI',
  search: 'Find',
}

export function ReadingItem({ r, note, compact = false }: { r: Reading; note?: React.ReactNode; compact?: boolean }) {
  const doiUrl = r.doi ? `https://doi.org/${r.doi}` : null
  return (
    <li id={`r-${r.id}`} className="scroll-mt-24">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-serif text-[17px] font-semibold leading-snug hover:text-accent">
          {readingTitle(r)}
        </a>
      </div>
      <div className="mt-0.5 text-sm text-muted">
        {readingAuthors(r)}
        {readingVenue(r) && <>, <span className="italic">{readingVenue(r)}</span></>}
        {r.year && <>, {r.year}</>}
        <span className="mx-2 text-faint">·</span>
        <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          {LINK_LABEL[r.urlKind] ?? 'Link'}
        </a>
        {doiUrl && r.url !== doiUrl && (
          <a href={doiUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-faint hover:text-muted">
            DOI
          </a>
        )}
      </div>
      {note && <div className="mt-1 text-xs text-faint">{note}</div>}
      {!compact && <p className="mt-1.5 max-w-2xl font-serif text-[15.5px] leading-relaxed text-ink/80">{r.description}</p>}
    </li>
  )
}

export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-faint">/</span>}
          {it.to ? (
            <Link to={it.to} className="hover:text-ink">
              {it.label}
            </Link>
          ) : (
            <span>{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
