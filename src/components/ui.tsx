import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'
import { TAG_INFO, partById, partColor, type Tag } from '../data/content'

export function Markdown({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div className={`prose-oecs ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  )
}

const TAG_STYLES: Record<Tag, string> = {
  Core: 'bg-brand-50 text-brand-800 border-brand-200 dark:bg-brand-900/40 dark:text-brand-200 dark:border-brand-800',
  Modern: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-800',
  Adjacent: 'bg-violet-50 text-violet-800 border-violet-200 dark:bg-violet-900/30 dark:text-violet-200 dark:border-violet-800',
  Added: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-800',
}

export function TagBadge({ tag }: { tag: Tag }) {
  return (
    <span
      title={TAG_INFO[tag]?.hint}
      className={`inline-flex items-center rounded border px-1.5 py-px text-[11px] font-medium tracking-wide ${TAG_STYLES[tag] ?? TAG_STYLES.Core}`}
    >
      {tag}
    </span>
  )
}

export function PartChip({ partId, short = false }: { partId: string; short?: boolean }) {
  const p = partById.get(partId)
  if (!p) return null
  return (
    <Link
      to={`/part/${p.id}`}
      className="inline-flex items-center gap-1.5 text-xs text-ink-light hover:text-ink transition-colors"
    >
      <span className="h-2 w-2 rounded-full shrink-0" style={{ background: partColor(p.id) }} />
      {p.id === 'ai' ? 'Human-AI' : `Part ${p.numeral}`}
      {!short && <span className="text-ink-lighter">· {p.short}</span>}
    </Link>
  )
}

export function ProgressBar({ value, total, className = '' }: { value: number; total: number; className?: string }) {
  const pct = total ? Math.round((value / total) * 100) : 0
  return (
    <div className={`h-1.5 rounded-full bg-surface-alt overflow-hidden ${className}`} title={`${value}/${total} read`}>
      <div className="h-full rounded-full bg-brand-500 transition-all duration-500" style={{ width: `${pct}%` }} />
    </div>
  )
}

export function Icon({ name, className = 'h-4 w-4' }: { name: string; className?: string }) {
  const common = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24' }
  switch (name) {
    case 'search':
      return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
    case 'sun':
      return <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
    case 'moon':
      return <svg {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
    case 'external':
      return <svg {...common}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
    case 'check':
      return <svg {...common}><path d="m5 12 5 5L20 7" /></svg>
    case 'star':
      return <svg {...common}><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" /></svg>
    case 'chevron':
      return <svg {...common}><path d="m9 6 6 6-6 6" /></svg>
    case 'down':
      return <svg {...common}><path d="m6 9 6 6 6-6" /></svg>
    case 'up':
      return <svg {...common}><path d="m18 15-6-6-6 6" /></svg>
    case 'dice':
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="9" cy="9" r=".8" fill="currentColor" /><circle cx="15" cy="15" r=".8" fill="currentColor" /><circle cx="15" cy="9" r=".8" fill="currentColor" /><circle cx="9" cy="15" r=".8" fill="currentColor" /></svg>
    case 'plus':
      return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>
    case 'x':
      return <svg {...common}><path d="M6 6l12 12M18 6 6 18" /></svg>
    case 'grip':
      return <svg {...common}><circle cx="9" cy="6" r=".9" fill="currentColor" /><circle cx="15" cy="6" r=".9" fill="currentColor" /><circle cx="9" cy="12" r=".9" fill="currentColor" /><circle cx="15" cy="12" r=".9" fill="currentColor" /><circle cx="9" cy="18" r=".9" fill="currentColor" /><circle cx="15" cy="18" r=".9" fill="currentColor" /></svg>
    case 'timeline':
      return <svg {...common}><path d="M6 3v18" /><circle cx="6" cy="7" r="2" /><circle cx="6" cy="16" r="2" /><path d="M10 7h10M10 16h7" /></svg>
    case 'calendar':
      return <svg {...common}><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
    case 'book':
      return <svg {...common}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19V5" /></svg>
    default:
      return null
  }
}

export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-line bg-surface-alt px-1.5 py-0.5 font-sans text-[10px] font-medium text-ink-lighter">
      {children}
    </kbd>
  )
}
