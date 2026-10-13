import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { articles, readings, readingAuthors, readingTitle } from '../data/content'

interface Hit {
  kind: 'Idea' | 'Reading'
  title: string
  sub: string
  to: string
  score: number
}

function score(hay: string, q: string) {
  const h = hay.toLowerCase()
  let s = 0
  for (const t of q.toLowerCase().split(/\s+/).filter(Boolean)) {
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
    if (!q.trim()) return []
    const out: Hit[] = []
    for (const a of articles) {
      const s = score(`${a.number} ${a.title} ${a.label}`, q) * 3
      if (s) out.push({ kind: 'Idea', title: a.title, sub: a.number, to: `/encyclopedia/${a.id}`, score: s })
    }
    for (const r of readings) {
      const s = score(`${r.citation} ${r.title}`, q)
      if (s) out.push({ kind: 'Reading', title: readingTitle(r), sub: `${readingAuthors(r)}, ${r.year ?? ''}`, to: `/encyclopedia/${r.articleId}#r-${r.id}`, score: s })
    }
    return out.sort((a, b) => b.score - a.score).slice(0, 20)
  }, [q])

  useEffect(() => setSel(0), [q])
  if (!open) return null
  const go = (h: Hit) => {
    onClose()
    nav(h.to)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/20 px-4 pt-[14vh]" onClick={onClose}>
      <div className="w-full max-w-lg overflow-hidden rounded-lg border border-rule bg-card shadow-xl" onClick={(e) => e.stopPropagation()}>
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') (e.preventDefault(), setSel((s) => Math.min(s + 1, hits.length - 1)))
            else if (e.key === 'ArrowUp') (e.preventDefault(), setSel((s) => Math.max(s - 1, 0)))
            else if (e.key === 'Enter' && hits[sel]) go(hits[sel])
            else if (e.key === 'Escape') onClose()
          }}
          placeholder="Search ideas and readings"
          className="h-12 w-full border-b border-rule bg-transparent px-4 text-[15px] outline-none placeholder:text-faint"
        />
        {q.trim() && (
          <ul className="max-h-[50vh] overflow-y-auto py-1">
            {hits.length === 0 && <li className="px-4 py-5 text-sm text-faint">No matches</li>}
            {hits.map((h, i) => (
              <li key={h.to + i}>
                <button onMouseEnter={() => setSel(i)} onClick={() => go(h)} className={`flex w-full items-baseline gap-3 px-4 py-2 text-left ${i === sel ? 'bg-wash' : ''}`}>
                  <span className="min-w-0 flex-1 truncate text-sm">{h.title}</span>
                  <span className="shrink-0 text-xs text-faint">{h.kind === 'Idea' ? h.sub : h.sub}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
