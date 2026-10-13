import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { articleById, parts, partColor, readingAuthors, readings, readingTitle, type Tag } from '../data/content'
import { ReadingLinks, ReadStatus } from '../components/ReadingCard'
import { Icon, TagBadge } from '../components/ui'
import { useProgress } from '../store'

const TAGS: Tag[] = ['Core', 'Modern', 'Adjacent', 'Added']
const FREE = new Set(['pdf', 'open', 'arxiv', 'author', 'archive', 'video'])

export function ReadingsPage() {
  const [params, setParams] = useSearchParams()
  const progress = useProgress()
  const q = params.get('q') ?? ''
  const tag = params.get('tag') ?? ''
  const part = params.get('part') ?? ''
  const status = params.get('status') ?? ''
  const sort = params.get('sort') ?? 'year'

  const set = (k: string, v: string) => {
    const n = new URLSearchParams(params)
    if (v) n.set(k, v)
    else n.delete(k)
    setParams(n, { replace: true })
  }

  const list = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
    return readings
      .filter((r) => {
        const a = articleById.get(r.articleId)!
        if (tag && r.tag !== tag) return false
        if (part && a.partId !== part) return false
        const st = progress[r.id] ?? {}
        if (status === 'read' && !st.read) return false
        if (status === 'unread' && st.read) return false
        if (status === 'starred' && !(st.interest ?? 0)) return false
        if (status === 'free' && !FREE.has(r.urlKind)) return false
        if (terms.length) {
          const hay = `${r.citation} ${r.title} ${r.description} ${a.title}`.toLowerCase()
          if (!terms.every((t) => hay.includes(t))) return false
        }
        return true
      })
      .sort((x, y) => {
        if (sort === 'interest') return (progress[y.id]?.interest ?? 0) - (progress[x.id]?.interest ?? 0) || (x.year ?? 0) - (y.year ?? 0)
        if (sort === 'author') return readingAuthors(x).localeCompare(readingAuthors(y))
        return (x.year ?? 0) - (y.year ?? 0)
      })
  }, [q, tag, part, status, sort, progress])

  const select = 'h-9 rounded-md border border-line bg-card px-2 text-sm outline-none focus:border-brand-400'

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="fade-in mb-6">
        <h1 className="font-serif text-4xl font-bold sm:text-5xl">All readings</h1>
        <p className="mt-3 text-ink-light">
          {readings.length} readings. Filter, mark what you've read and star what you want to discuss. Progress is saved in this browser.
        </p>
      </header>

      <div className="sticky top-14 z-20 -mx-4 mb-4 flex flex-wrap items-center gap-2 border-b border-line bg-surface/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="relative min-w-[14rem] flex-1">
          <Icon name="search" className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-lighter" />
          <input value={q} onChange={(e) => set('q', e.target.value)} placeholder="Filter by author, title, topic…" className={`${select} w-full pl-8`} />
        </div>
        <select value={part} onChange={(e) => set("part", e.target.value)} className={`${select} max-w-[13rem]`}>
          <option value="">All parts</option>
          {parts.map((p) => (
            <option key={p.id} value={p.id}>
              {p.id === 'ai' ? 'Human-AI' : `${p.numeral}. ${p.short}`}
            </option>
          ))}
        </select>
        <select value={status} onChange={(e) => set('status', e.target.value)} className={select}>
          <option value="">Any status</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
          <option value="starred">Starred</option>
          <option value="free">Free full text</option>
        </select>
        <select value={sort} onChange={(e) => set('sort', e.target.value)} className={select}>
          <option value="year">Sort: year</option>
          <option value="author">Sort: author</option>
          <option value="interest">Sort: interest</option>
        </select>
        <div className="flex gap-1">
          {TAGS.map((t) => (
            <button key={t} onClick={() => set('tag', tag === t ? '' : t)} className={`rounded transition-opacity ${tag && tag !== t ? 'opacity-35' : ''}`}>
              <TagBadge tag={t} />
            </button>
          ))}
        </div>
        <span className="ml-auto text-xs tabular-nums text-ink-lighter">{list.length} shown</span>
      </div>

      <ul className="divide-y divide-line">
        {list.map((r) => {
          const a = articleById.get(r.articleId)!
          return (
            <li key={r.id} className="grid gap-x-6 gap-y-2 py-4 md:grid-cols-[4rem_1fr_auto]">
              <div className="font-mono text-sm tabular-nums text-ink-light">{r.year}</div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-serif text-[17px] font-semibold leading-snug hover:text-brand-700 dark:hover:text-brand-300">
                    {readingTitle(r)}
                  </a>
                  <TagBadge tag={r.tag} />
                </div>
                <div className="mt-0.5 text-sm text-ink-light">{readingAuthors(r)}</div>
                <p className="mt-1.5 line-clamp-2 text-sm text-ink-light/90">{r.description}</p>
                <Link to={`/a/${a.id}#r-${r.id}`} className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-ink-lighter hover:text-ink">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: partColor(a.partId) }} />
                  {a.title}
                </Link>
              </div>
              <div className="flex flex-col items-start gap-2 md:items-end">
                <ReadingLinks r={r} />
                <ReadStatus r={r} compact />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
