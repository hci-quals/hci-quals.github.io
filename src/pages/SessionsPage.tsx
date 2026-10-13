import { useState } from 'react'
import { Link } from 'react-router-dom'
import { articleById, articles, keyIdeas, parts, partColor, readingAuthors, readingTitle } from '../data/content'
import { Icon, ProgressBar, TagBadge } from '../components/ui'
import { newId, sessionDate, updateSessions, useProgress, useSessions, type Session } from '../store'

const fmt = (d: Date | null) => (d ? d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }) : '')

function move<T>(arr: T[], from: number, to: number) {
  const a = [...arr]
  const [x] = a.splice(from, 1)
  a.splice(to, 0, x)
  return a
}

function SessionCard({ s, index, total, dragging, setDragging }: { s: Session; index: number; total: number; dragging: number | null; setDragging: (n: number | null) => void }) {
  const state = useSessions()
  const progress = useProgress()
  const [open, setOpen] = useState(true)
  const [adding, setAdding] = useState(false)
  const patch = (p: Partial<Session>) => updateSessions((st) => ({ ...st, sessions: st.sessions.map((x) => (x.id === s.id ? { ...x, ...p } : x)) }))
  const arts = s.articleIds.map((id) => articleById.get(id)).filter(Boolean) as typeof articles
  const rs = arts.flatMap((a) => a.readings)
  const done = rs.filter((r) => progress[r.id]?.read).length
  const scheduled = new Set(state.sessions.flatMap((x) => x.articleIds))

  return (
    <li
      draggable
      onDragStart={() => setDragging(index)}
      onDragEnd={() => setDragging(null)}
      onDragOver={(e) => {
        e.preventDefault()
        if (dragging !== null && dragging !== index) {
          updateSessions((st) => ({ ...st, sessions: move(st.sessions, dragging, index) }))
          setDragging(index)
        }
      }}
      className={`rounded-xl border bg-card transition-shadow ${dragging === index ? 'border-brand-400 opacity-60 shadow-lg' : 'border-line'}`}
    >
      <div className="flex items-center gap-3 p-4">
        <span className="cursor-grab text-ink-lighter active:cursor-grabbing" title="Drag to reorder">
          <Icon name="grip" />
        </span>
        <div className="flex w-16 shrink-0 flex-col items-center rounded-lg bg-surface-alt py-1.5">
          <span className="text-[10px] uppercase tracking-wider text-ink-lighter">Week</span>
          <span className="font-serif text-xl font-bold leading-none">{index + 1}</span>
        </div>
        <div className="min-w-0 flex-1">
          <input
            value={s.title}
            onChange={(e) => patch({ title: e.target.value })}
            className="w-full bg-transparent font-serif text-lg font-semibold outline-none focus:underline"
          />
          <div className="flex flex-wrap items-center gap-x-3 text-xs text-ink-lighter">
            <span>{fmt(sessionDate(state, index))}</span>
            <span>
              {arts.length} idea{arts.length === 1 ? '' : 's'} · {rs.length} readings
            </span>
            {rs.length > 0 && <ProgressBar value={done} total={rs.length} className="w-20" />}
          </div>
        </div>
        <div className="flex items-center gap-1 text-ink-lighter">
          <button disabled={index === 0} onClick={() => updateSessions((st) => ({ ...st, sessions: move(st.sessions, index, index - 1) }))} className="rounded p-1 hover:text-ink disabled:opacity-30" aria-label="Move up">
            <Icon name="up" />
          </button>
          <button disabled={index === total - 1} onClick={() => updateSessions((st) => ({ ...st, sessions: move(st.sessions, index, index + 1) }))} className="rounded p-1 hover:text-ink disabled:opacity-30" aria-label="Move down">
            <Icon name="down" />
          </button>
          <button onClick={() => setOpen((o) => !o)} className="rounded p-1 hover:text-ink" aria-label="Toggle details">
            <Icon name="chevron" className={`h-4 w-4 transition-transform ${open ? 'rotate-90' : ''}`} />
          </button>
          <button onClick={() => updateSessions((st) => ({ ...st, sessions: st.sessions.filter((x) => x.id !== s.id) }))} className="rounded p-1 hover:text-red-600" aria-label="Remove session">
            <Icon name="x" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-line px-4 pb-4 pt-3">
          <ul className="space-y-3">
            {arts.map((a) => (
              <li key={a.id} className="rounded-lg bg-surface-alt/60 p-3">
                <div className="flex items-start justify-between gap-3">
                  <Link to={`/a/${a.id}`} className="flex items-center gap-2 font-serif font-semibold hover:text-brand-700 dark:hover:text-brand-300">
                    <span className="h-2 w-2 rounded-full" style={{ background: partColor(a.partId) }} />
                    {a.title}
                  </Link>
                  <button onClick={() => patch({ articleIds: s.articleIds.filter((x) => x !== a.id) })} className="text-ink-lighter hover:text-red-600" aria-label="Remove idea">
                    <Icon name="x" className="h-3.5 w-3.5" />
                  </button>
                </div>
                <ul className="mt-2 space-y-1 pl-4">
                  {a.readings.map((r) => (
                    <li key={r.id} className="flex items-baseline gap-2 text-sm">
                      <span className={`h-3 w-3 shrink-0 translate-y-0.5 rounded-sm border ${progress[r.id]?.read ? 'border-emerald-600 bg-emerald-600' : 'border-ink-lighter'}`} />
                      <span className="font-mono text-xs text-ink-lighter">{r.year}</span>
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="min-w-0 truncate hover:text-brand-700 dark:hover:text-brand-300">
                        {readingAuthors(r)} — <span className="italic">{readingTitle(r)}</span>
                      </a>
                      <TagBadge tag={r.tag} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          {adding ? (
            <select
              autoFocus
              defaultValue=""
              onBlur={() => setAdding(false)}
              onChange={(e) => {
                if (e.target.value) patch({ articleIds: [...s.articleIds, e.target.value] })
                setAdding(false)
              }}
              className="mt-3 h-9 w-full rounded-md border border-line bg-card px-2 text-sm"
            >
              <option value="">Choose an idea…</option>
              {parts.map((p) => (
                <optgroup key={p.id} label={p.short}>
                  {articles
                    .filter((a) => a.partId === p.id && !s.articleIds.includes(a.id))
                    .map((a) => (
                      <option key={a.id} value={a.id}>
                        {scheduled.has(a.id) ? '• ' : ''}
                        {a.title}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
          ) : (
            <button onClick={() => setAdding(true)} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline dark:text-brand-300">
              <Icon name="plus" className="h-3.5 w-3.5" /> Add an idea
            </button>
          )}
          <textarea
            value={s.notes}
            onChange={(e) => patch({ notes: e.target.value })}
            placeholder="Notes: who leads, discussion plan, links…"
            rows={2}
            className="mt-3 w-full resize-y rounded-md border border-line bg-card p-2 text-sm outline-none focus:border-brand-400"
          />
        </div>
      )}
    </li>
  )
}

export function SessionsPage() {
  const state = useSessions()
  const [dragging, setDragging] = useState<number | null>(null)
  const scheduled = new Set(state.sessions.flatMap((s) => s.articleIds))

  const generate = (by: 'keyIdea' | 'part') => {
    if (state.sessions.length && !window.confirm('Replace the current schedule?')) return
    const sessions: Session[] =
      by === 'keyIdea'
        ? keyIdeas.map((k) => ({ id: newId(), title: k.title, articleIds: k.articles.map((a) => a.id), notes: '' }))
        : parts.map((p) => ({ id: newId(), title: p.short, articleIds: p.keyIdeas.flatMap((k) => k.articles.map((a) => a.id)), notes: '' }))
    updateSessions((st) => ({ ...st, sessions }))
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="fade-in mb-8">
        <h1 className="font-serif text-4xl font-bold sm:text-5xl">Sessions</h1>
        <p className="mt-3 text-ink-light">Plan the reading group week by week. Drag sessions to reorder them. The schedule is saved in this browser.</p>
      </header>

      <div className="mb-6 flex flex-wrap items-end gap-4 rounded-xl border border-line bg-card p-4">
        <label className="text-sm">
          <span className="mb-1 block text-xs text-ink-lighter">First session</span>
          <input type="date" value={state.startDate} onChange={(e) => updateSessions((s) => ({ ...s, startDate: e.target.value }))} className="h-9 rounded-md border border-line bg-surface px-2" />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-xs text-ink-lighter">Every</span>
          <select value={state.intervalDays} onChange={(e) => updateSessions((s) => ({ ...s, intervalDays: Number(e.target.value) }))} className="h-9 rounded-md border border-line bg-surface px-2">
            <option value={7}>week</option>
            <option value={14}>two weeks</option>
            <option value={3}>3 days</option>
            <option value={1}>day</option>
          </select>
        </label>
        <div className="ml-auto flex flex-wrap gap-2">
          <button onClick={() => generate('keyIdea')} className="rounded-md border border-line px-3 py-2 text-sm hover:border-brand-400">
            One session per key idea ({keyIdeas.length})
          </button>
          <button onClick={() => generate('part')} className="rounded-md border border-line px-3 py-2 text-sm hover:border-brand-400">
            One per part ({parts.length})
          </button>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-3 text-sm text-ink-light">
        <span>
          {scheduled.size} of {articles.length} ideas scheduled
        </span>
        <ProgressBar value={scheduled.size} total={articles.length} className="w-40" />
      </div>

      <ol className="space-y-3">
        {state.sessions.map((s, i) => (
          <SessionCard key={s.id} s={s} index={i} total={state.sessions.length} dragging={dragging} setDragging={setDragging} />
        ))}
      </ol>
      {state.sessions.length === 0 && (
        <div className="rounded-xl border border-dashed border-line px-6 py-16 text-center text-ink-light">
          <p className="font-serif text-lg">No sessions yet.</p>
          <p className="mt-1 text-sm">Generate a starting schedule above, add a session below, or use “Add to session” on any idea.</p>
        </div>
      )}
      <button
        onClick={() => updateSessions((st) => ({ ...st, sessions: [...st.sessions, { id: newId(), title: `Session ${st.sessions.length + 1}`, articleIds: [], notes: '' }] }))}
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-dashed border-line px-4 py-2.5 text-sm font-medium text-ink-light hover:border-brand-400 hover:text-ink"
      >
        <Icon name="plus" /> Add session
      </button>
    </div>
  )
}
