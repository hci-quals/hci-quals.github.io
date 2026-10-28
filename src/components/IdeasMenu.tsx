import { useEffect, useRef, useState } from 'react'
import { ideas } from '../data/ideas'
import { jumpTo, useCurrentSection } from './sections'

const sections = ideas.map((d) => ({ id: d.id, name: d.name }))

/** A quiet header menu listing the big ideas; marks the one being read and jumps to any other. */
export function IdeasMenu() {
  const [open, setOpen] = useState(false)
  const current = useCurrentSection(sections)
  const root = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        button.current?.focus()
      }
    }
    const onDown = (e: PointerEvent) => !root.current?.contains(e.target as Node) && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onDown)
    root.current?.querySelector<HTMLElement>('[aria-current], a')?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onDown)
    }
  }, [open])

  const name = sections.find((s) => s.id === current)?.name

  return (
    <div ref={root} className="relative min-w-0">
      <button
        ref={button}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex min-w-0 items-center gap-1.5 rounded-md px-2 py-1 text-sm text-muted transition-colors hover:text-ink"
      >
        <span className="shrink-0">Ideas</span>
        {name && (
          <span className="hidden min-w-0 truncate text-faint md:inline">
            <span aria-hidden>· </span>
            {name}
          </span>
        )}
        <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <nav aria-label="Ideas" className="absolute right-0 top-full z-50 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-lg border border-rule bg-paper p-1.5 shadow-xl">
          <ol className="max-h-[70dvh] overflow-y-auto">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    jumpTo(s.id)
                  }}
                  aria-current={s.id === current ? 'location' : undefined}
                  className={`block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-wash focus-visible:bg-wash focus-visible:outline-none ${s.id === current ? 'font-medium text-ink' : 'text-muted'}`}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  )
}
