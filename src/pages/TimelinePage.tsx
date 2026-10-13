import { Fragment, useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { articles, lineage, parts, partColor, readingAuthors, readingTitle, type Article, type Reading } from '../data/content'
import { Icon, PartChip, TagBadge } from '../components/ui'
import { useProgress } from '../store'

const MIN_YEAR = 1940
const MAX_YEAR = 2026

/** A tiny axis showing where each reading of an idea sits in time. */
function Sparkline({ a, color }: { a: Article; color: string }) {
  const pos = (y: number) => ((y - MIN_YEAR) / (MAX_YEAR - MIN_YEAR)) * 100
  const lin = lineage(a)
  const oy = a.origin.year
  const last = Math.max(oy, ...lin.followUps.map((r) => r.year ?? oy))
  return (
    <div className="relative h-3 w-full" aria-hidden>
      <div className="absolute inset-x-0 top-1/2 h-px bg-line" />
      <div className="absolute top-1/2 h-0.5 -translate-y-1/2 rounded" style={{ left: `${pos(oy)}%`, width: `${pos(last) - pos(oy)}%`, background: color, opacity: 0.35 }} />
      {lin.roots.map((r) => (
        <span key={r.id} className="absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-lighter bg-surface" style={{ left: `${pos(r.year ?? oy)}%` }} />
      ))}
      {lin.followUps.map((r) => (
        <span key={r.id} className="absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ left: `${pos(r.year ?? oy)}%`, background: color, opacity: 0.7 }} />
      ))}
      <span className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-card" style={{ left: `${pos(oy)}%`, background: color }} />
    </div>
  )
}

function BranchItem({ r, color, muted }: { r: Reading; color: string; muted?: boolean }) {
  const progress = useProgress()
  const read = progress[r.id]?.read
  return (
    <li className="relative pl-6">
      <span className="absolute left-0 top-[0.6rem] h-px w-4" style={{ background: muted ? 'var(--color-line)' : color, opacity: muted ? 1 : 0.5 }} />
      <span
        className={`absolute -left-[3px] top-[0.42rem] h-[7px] w-[7px] rounded-full ${muted ? 'border border-ink-lighter bg-surface' : ''}`}
        style={muted ? undefined : { background: color }}
      />
      <Link to={`/a/${r.articleId}#r-${r.id}`} className="group flex flex-wrap items-baseline gap-x-2 gap-y-0.5 py-1">
        <span className="w-10 shrink-0 font-mono text-xs tabular-nums text-ink-lighter">{r.year}</span>
        <span className={`text-sm group-hover:text-brand-700 dark:group-hover:text-brand-300 ${muted ? 'text-ink-light' : 'text-ink'}`}>
          <span className="font-medium">{readingAuthors(r)}</span> — <span className="font-serif italic">{readingTitle(r)}</span>
        </span>
        <TagBadge tag={r.tag} />
        {read && <Icon name="check" className="h-3.5 w-3.5 text-emerald-600" />}
      </Link>
    </li>
  )
}

function IdeaNode({ a, expanded, onToggle, showYear }: { a: Article; expanded: boolean; onToggle: () => void; showYear: boolean }) {
  const color = partColor(a.partId)
  const lin = lineage(a)
  return (
    <div id={`idea-${a.id}`} className="group relative grid grid-cols-[3.25rem_1.5rem_1fr] sm:grid-cols-[4rem_2rem_1fr]">
      <div className="pt-4 text-right font-mono text-sm tabular-nums text-ink-light">{showYear ? a.origin.year : ''}</div>
      <div className="relative flex justify-center">
        <button
          onClick={onToggle}
          className={`relative z-10 mt-[1.15rem] h-3.5 w-3.5 rounded-full ring-4 ring-surface transition-transform duration-200 group-hover:scale-125 ${expanded ? 'scale-125' : ''}`}
          style={{ background: color }}
          aria-label={`Toggle ${a.label}`}
        />
      </div>
      <div className="pb-3 pl-1 sm:pl-2">
        <div
          role="button"
          tabIndex={0}
          onClick={onToggle}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onToggle())}
          className={`cursor-pointer rounded-xl border bg-card p-4 transition-all duration-200 hover:-translate-y-px hover:shadow-md ${expanded ? 'shadow-md' : 'border-line'}`}
          style={expanded ? { borderColor: color } : undefined}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-serif text-xl font-semibold leading-snug">{a.label}</h3>
              {a.label.toLowerCase() !== a.title.toLowerCase() && <p className="mt-0.5 text-sm text-ink-light">{a.title}</p>}
            </div>
            <span className={`mt-1 shrink-0 text-ink-lighter transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}>
              <Icon name="chevron" />
            </span>
          </div>
          {a.origin.blurb && <p className="mt-2 font-serif text-[15px] leading-relaxed text-ink/85">{a.origin.blurb}</p>}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <PartChip partId={a.partId} short />
            <span className="text-xs text-ink-lighter">
              {lin.followUps.length} follow-up{lin.followUps.length === 1 ? '' : 's'}
              {lin.roots.length > 0 && ` · ${lin.roots.length} earlier root${lin.roots.length === 1 ? '' : 's'}`}
            </span>
            <div className="min-w-[8rem] flex-1 opacity-60 transition-opacity group-hover:opacity-100">
              <Sparkline a={a} color={color} />
            </div>
          </div>
        </div>

        {expanded && (
          <div className="fade-in ml-3 mt-2 border-l-2 pb-2 pl-0" style={{ borderColor: `${color}55` }}>
            {lin.roots.length > 0 && (
              <>
                <div className="pl-6 pt-2 text-[11px] font-semibold uppercase tracking-wider text-ink-lighter">Earlier roots</div>
                <ul>{lin.roots.map((r) => <BranchItem key={r.id} r={r} color={color} muted />)}</ul>
              </>
            )}
            <div className="pl-6 pt-2 text-[11px] font-semibold uppercase tracking-wider" style={{ color }}>
              Introduced
            </div>
            <ul>{lin.origin && <BranchItem r={lin.origin} color={color} />}</ul>
            {lin.followUps.length > 0 && (
              <>
                <div className="pl-6 pt-2 text-[11px] font-semibold uppercase tracking-wider text-ink-lighter">Extended by</div>
                <ul>{lin.followUps.map((r) => <BranchItem key={r.id} r={r} color={color} />)}</ul>
              </>
            )}
            <Link to={`/a/${a.id}`} className="ml-6 mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline dark:text-brand-300">
              Open the full idea <Icon name="chevron" className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export function TimelinePage() {
  const [params, setParams] = useSearchParams()
  const hidden = useMemo(() => new Set((params.get('hide') ?? '').split(',').filter(Boolean)), [params])
  const openId = params.get('open')
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(openId ? [openId] : []))
  const [activeDecade, setActiveDecade] = useState<number | null>(null)

  const items = useMemo(
    () => articles.filter((a) => !hidden.has(a.partId)).sort((x, y) => x.origin.year - y.origin.year || x.order - y.order),
    [hidden],
  )
  const decades = useMemo(() => {
    const m = new Map<number, number>()
    for (let d = 1940; d <= 2020; d += 10) m.set(d, 0)
    items.forEach((a) => m.set(Math.floor(a.origin.year / 10) * 10, (m.get(Math.floor(a.origin.year / 10) * 10) ?? 0) + 1))
    return [...m.entries()]
  }, [items])
  const maxDecade = Math.max(...decades.map(([, n]) => n), 1)

  useEffect(() => {
    if (!openId) return
    setExpanded((s) => new Set([...s, openId]))
    const t = setTimeout(() => document.getElementById(`idea-${openId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 120)
    return () => clearTimeout(t)
  }, [openId])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const v = entries.filter((e) => e.isIntersecting)
        if (v[0]) setActiveDecade(Number((v[0].target as HTMLElement).dataset.decade))
      },
      { rootMargin: '-80px 0px -70% 0px' },
    )
    document.querySelectorAll('[data-decade]').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [items])

  const togglePart = (id: string) => {
    const next = new Set(hidden)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setParams(next.size ? { hide: [...next].join(',') } : {}, { replace: true })
    window.scrollTo({ top: 0 })
  }
  const soloPart = (id: string) => {
    const others = parts.filter((p) => p.id !== id).map((p) => p.id)
    const isSolo = others.every((o) => hidden.has(o)) && !hidden.has(id)
    setParams(isSolo ? {} : { hide: others.join(',') }, { replace: true })
  }
  const toggle = (id: string) =>
    setExpanded((s) => {
      const n = new Set(s)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })
  const allExpanded = items.length > 0 && items.every((a) => expanded.has(a.id))

  let lastDecade = -1
  let lastYear = -1

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="fade-in mx-auto mb-8 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold sm:text-5xl">Timeline of ideas</h1>
        <p className="mt-3 font-serif text-lg text-ink-light">
          When each idea entered the conversation. Click an idea to see the roots it drew on and the work that extended it.
        </p>
      </header>

      <div className="sticky top-14 z-20 -mx-4 mb-6 border-b border-line bg-surface/90 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-1.5">
          {parts.map((p) => {
            const off = hidden.has(p.id)
            return (
              <button
                key={p.id}
                onClick={() => togglePart(p.id)}
                onDoubleClick={() => soloPart(p.id)}
                title={`${p.short} (double-click to show only this)`}
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-all ${
                  off ? 'border-line text-ink-lighter opacity-60' : 'border-line bg-card text-ink hover:border-ink-lighter'
                }`}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: off ? 'transparent' : partColor(p.id), border: `1.5px solid ${partColor(p.id)}` }} />
                {p.id === 'ai' ? 'Human-AI' : p.numeral}
                <span className="hidden xl:inline">{p.short.split(/[,:]/)[0]}</span>
              </button>
            )
          })}
          <span className="ml-auto flex items-center gap-3 text-xs text-ink-lighter">
            <span>{items.length} ideas</span>
            <button
              onClick={() => setExpanded(allExpanded ? new Set() : new Set(items.map((a) => a.id)))}
              className="rounded border border-line px-2 py-1 text-ink-light hover:border-brand-400 hover:text-ink"
            >
              {allExpanded ? 'Collapse all' : 'Expand all'}
            </button>
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl gap-8">
        <aside className="hidden w-28 shrink-0 lg:block">
          <div className="sticky top-36">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-lighter">Decades</div>
            <ul className="space-y-1">
              {decades.map(([d, n]) => (
                <li key={d}>
                  <button
                    disabled={!n}
                    onClick={() => document.getElementById(`decade-${d}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className={`group flex w-full items-center gap-2 rounded px-1.5 py-1 text-left text-sm transition-colors disabled:opacity-30 ${
                      activeDecade === d ? 'bg-brand-50 text-ink dark:bg-brand-900/30' : 'text-ink-light hover:text-ink'
                    }`}
                  >
                    <span className="w-11 font-mono text-xs tabular-nums">{d}s</span>
                    <span className="h-1.5 rounded-full bg-brand-400/70" style={{ width: `${(n / maxDecade) * 40}px` }} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="relative min-w-0 flex-1">
          <div className="absolute bottom-0 top-0 left-[4.5rem] w-px bg-line sm:left-[5rem]" />
          {items.map((a) => {
            const decade = Math.floor(a.origin.year / 10) * 10
            const newDecade = decade !== lastDecade
            const showYear = a.origin.year !== lastYear
            lastDecade = decade
            lastYear = a.origin.year
            return (
              <Fragment key={a.id}>
                {newDecade && (
                  <div id={`decade-${decade}`} data-decade={decade} className="relative scroll-mt-32 pb-2 pt-8 first:pt-0">
                    <span className="relative z-10 ml-[2.5rem] inline-block bg-surface pr-3 font-serif text-3xl font-bold text-ink-lighter/70 sm:ml-[3rem]">
                      {decade}s
                    </span>
                  </div>
                )}
                <IdeaNode a={a} expanded={expanded.has(a.id)} onToggle={() => toggle(a.id)} showYear={showYear} />
              </Fragment>
            )
          })}
          {items.length === 0 && <p className="py-20 text-center text-ink-lighter">No parts selected.</p>}
        </div>
      </div>
    </div>
  )
}
