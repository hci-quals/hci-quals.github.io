import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { SearchPalette } from './SearchPalette'

export function Layout() {
  const [searchOpen, setSearchOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (loc.hash) {
      const t = setTimeout(() => document.getElementById(decodeURIComponent(loc.hash.slice(1)))?.scrollIntoView({ block: 'start' }), 50)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [loc.pathname, loc.hash])

  const tab = ({ isActive }: { isActive: boolean }) =>
    `border-b py-4 text-[15px] transition-colors ${isActive ? 'border-ink text-ink' : 'border-transparent text-muted hover:text-ink'}`

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-6 px-5 sm:px-8">
          <Link to="/" className="mr-auto py-4 font-serif text-lg font-semibold tracking-tight">
            HCI Quals Readings
          </Link>
          <NavLink to="/encyclopedia" className={tab}>
            Encyclopedia
          </NavLink>
          <NavLink to="/syllabus" className={tab}>
            Syllabus
          </NavLink>
          <button onClick={() => setSearchOpen(true)} className="py-4 text-muted hover:text-ink" aria-label="Search (⌘K)" title="Search (⌘K)">
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <circle cx="11" cy="11" r="6.5" />
              <path d="m20 20-4-4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-24 border-t border-rule">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-faint sm:px-8">Informal quals reading list · MIT HCI</div>
      </footer>
      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
