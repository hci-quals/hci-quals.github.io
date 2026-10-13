import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { toggleTheme, useTheme } from '../store'
import { SearchPalette } from './SearchPalette'
import { Icon, Kbd } from './ui'

const NAV = [
  { to: '/browse', label: 'Ideas' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/readings', label: 'Readings' },
  { to: '/sessions', label: 'Sessions' },
]

export function Layout() {
  const [searchOpen, setSearchOpen] = useState(false)
  const dark = useTheme()
  const loc = useLocation()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((o) => !o)
      } else if (e.key === '/' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (loc.hash) {
      const el = document.getElementById(decodeURIComponent(loc.hash.slice(1)))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
        el.classList.add('ring-2', 'ring-brand-400')
        setTimeout(() => el.classList.remove('ring-2', 'ring-brand-400'), 1800)
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [loc.pathname, loc.hash])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-line bg-surface/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 font-serif text-sm font-bold text-white">H</span>
            <span className="hidden font-serif text-lg font-bold tracking-tight sm:inline">HCI Quals</span>
          </Link>
          <button
            onClick={() => setSearchOpen(true)}
            className="ml-2 hidden h-8 w-64 items-center gap-2 rounded-md border border-line bg-card px-2.5 text-sm text-ink-lighter transition-colors hover:border-brand-400 md:flex"
          >
            <Icon name="search" className="h-3.5 w-3.5" />
            <span className="flex-1 text-left">Search…</span>
            <Kbd>⌘K</Kbd>
          </button>
          <nav className="ml-auto flex min-w-0 items-center gap-0 sm:gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `rounded-md px-1.5 py-1.5 text-[13px] font-medium transition-colors sm:px-3 sm:text-sm ${
                    isActive ? 'text-brand-700 dark:text-brand-300' : 'text-ink-light hover:text-ink'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <button onClick={() => setSearchOpen(true)} className="rounded-md p-1.5 text-ink-light hover:text-ink md:hidden" aria-label="Search">
              <Icon name="search" />
            </button>
            <button onClick={toggleTheme} className="rounded-md p-1.5 text-ink-light transition-colors hover:text-ink sm:p-2" aria-label="Toggle dark mode">
              <Icon name={dark ? 'sun' : 'moon'} />
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-24 border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-ink-lighter sm:px-6 lg:px-8">
          <span>
            HCI Quals Reading Group · built from the <em>HCI Quals Reading List — Revised</em>
          </span>
          <span>
            Styled after the{' '}
            <a href="https://oecs.mit.edu" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">
              Open Encyclopedia of Cognitive Science
            </a>
          </span>
        </div>
      </footer>
      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
