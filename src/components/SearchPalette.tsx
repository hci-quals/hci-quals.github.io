import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { articles, keyIdeas, partById, partColor, readings, readingTitle, readingAuthors } from '../data/content'
import { Icon, Kbd } from './ui'

interface Hit {
  kind: 'Idea' | 'Key idea' | 'Reading'
  title: string
  sub: string
  to: string
  color: string
  score: number
}

function score(hay: string, q: string): number {
  const h = hay.toLowerCase()
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
  let s = 0
  for (const t of terms) {
    const i = h.indexOf(t)
    if (i === -1) return 0
    s += i === 0 ? 3 : h[i - 1] === ' ' ? 2 : 1
  }
  return s
}

export function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const nav = useNavigate()
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setQ('')
      setSel(0)
      setTimeout(() => input.current?.focus(), 10)
    }
  }, [open])

  const hits = useMemo<Hit[]>(() => {
    if (!q.trim()) {
      return articles.slice(0, 8).map((a) => ({
        kind: 'Idea',
        title: a.title,
        sub: partById.get(a.partId)?.short ?? '',
        to: `/a/${a.id}`,
        color: partColor(a.partId),
        score: 1,
      }))
    }
    const out: Hit[] = []
    for (const a of articles) {
      const s = score(`${a.title} ${a.label} ${a.abstract}`, q) * 3
      if (s) out.push({ kind: 'Idea', title: a.title, sub: a.label, to: `/a/${a.id}`, color: partColor(a.partId), score: s })
    }
    for (const k of keyIdeas) {
      const s = score(k.title + ' ' + k.intro, q) * 2
      if (s) out.push({ kind: 'Key idea', title: k.title, sub: partById.get(k.partId)?.short ?? '', to: `/part/${k.partId}#${k.id}`, color: partColor(k.partId), score: s })
    }
    for (const r of readings) {
      const s = score(`${r.citation} ${r.title} ${r.description}`, q)
      if (s) {
        const a = articles.find((x) => x.id === r.articleId)!
        out.push({
          kind: 'Reading',
          title: readingTitle(r),
          sub: `${readingAuthors(r)} · ${r.year ?? ''}`,
          to: `/a/${a.id}#r-${r.id}`,
          color: partColor(a.partId),
          score: s,
        })
      }
    }
    return out.sort((a, b) => b.score - a.score).slice(0, 30)
  }, [q])

  useEffect(() => setSel(0), [q])

  if (!open) return null
  const go = (h: Hit) => {
    onClose()
    nav(h.to)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 px-4 pt-[12vh] backdrop-blur-[2px]" onClick={onClose}>
      <div
        className="fade-in w-full max-w-xl overflow-hidden rounded-xl border border-line bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Icon name="search" className="h-4 w-4 text-ink-lighter" />
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setSel((s) => Math.min(s + 1, hits.length - 1))
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setSel((s) => Math.max(s - 1, 0))
              } else if (e.key === 'Enter' && hits[sel]) go(hits[sel])
              else if (e.key === 'Escape') onClose()
            }}
            placeholder="Search ideas, key ideas, readings, authors…"
            className="h-12 flex-1 bg-transparent text-[15px] outline-none placeholder:text-ink-lighter"
          />
          <Kbd>esc</Kbd>
        </div>
        <ul className="scrollbar-thin max-h-[55vh] overflow-y-auto py-2">
          {hits.length === 0 && <li className="px-4 py-6 text-center text-sm text-ink-lighter">No matches</li>}
          {hits.map((h, i) => (
            <li key={h.kind + h.to + i}>
              <button
                onMouseEnter={() => setSel(i)}
                onClick={() => go(h)}
                className={`flex w-full items-center gap-3 px-4 py-2 text-left ${i === sel ? 'bg-surface-alt' : ''}`}
              >
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: h.color }} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{h.title}</span>
                  <span className="block truncate text-xs text-ink-lighter">{h.sub}</span>
                </span>
                <span className="shrink-0 text-[10px] uppercase tracking-wider text-ink-lighter">{h.kind}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
