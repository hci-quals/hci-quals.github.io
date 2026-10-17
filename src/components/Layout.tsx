import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function isDark() {
  const t = document.documentElement.dataset.theme
  return t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
}

function ThemeToggle() {
  const [dark, setDark] = useState(isDark)

  const toggle = () => {
    const next = dark ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('hq-theme', next)
    } catch {
      /* storage unavailable; the choice lasts for this visit */
    }
    setDark(!dark)
  }

  return (
    <button onClick={toggle} className="py-2 text-muted hover:text-ink" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Light mode' : 'Dark mode'}>
      {dark ? (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        </svg>
      )}
    </button>
  )
}

export function Layout() {
  const loc = useLocation()

  useEffect(() => {
    if (loc.hash) {
      const t = setTimeout(() => document.getElementById(decodeURIComponent(loc.hash.slice(1)))?.scrollIntoView({ block: 'start' }), 50)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [loc.pathname, loc.hash])

  // The home page already shows the title as its hero, so the header title waits until that heading scrolls under the header.
  const [heroVisible, setHeroVisible] = useState(false)
  useEffect(() => {
    const hero = document.getElementById('hq-hero-title')
    if (!hero) {
      setHeroVisible(false)
      return
    }
    const obs = new IntersectionObserver(([e]) => setHeroVisible(e.isIntersecting), { rootMargin: '-64px 0px 0px 0px' })
    obs.observe(hero)
    return () => obs.disconnect()
  }, [loc.pathname])

  // The home page belongs to neither side, so a faint ghost drifts between the options to show the switch is clickable.
  const side = loc.pathname.startsWith('/syllabus') ? 'syllabus' : /^\/(idea-)?encyclopedia/.test(loc.pathname) ? 'encyclopedia' : null
  const tab = (active: boolean) => `relative z-10 rounded px-3 py-1 text-center text-sm transition-colors duration-300 ${active ? 'text-paper' : 'text-muted hover:text-ink'}`

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-5 sm:px-8">
          <Link
            to="/"
            aria-hidden={heroVisible}
            tabIndex={heroVisible ? -1 : undefined}
            className={`mr-auto py-2 font-serif text-lg font-semibold tracking-tight transition-opacity duration-300 ${heroVisible ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
          >
            The Informal ‘HCI Quals’
          </Link>
          <nav className="hq-switch relative grid grid-cols-2 rounded-md border border-rule p-0.5">
            <span
              aria-hidden
              className={`absolute bottom-0.5 left-0.5 top-0.5 w-[calc(50%-2px)] rounded transition-[transform,background-color] duration-300 ease-out ${
                side ? 'bg-ink' : 'hq-ghost bg-ink/10'
              } ${side === 'syllabus' ? 'translate-x-full' : ''}`}
            />
            <Link to="/encyclopedia" className={tab(side === 'encyclopedia')} aria-current={side === 'encyclopedia' ? 'page' : undefined}>
              Encyclopedia
            </Link>
            <Link to="/syllabus" className={tab(side === 'syllabus')} aria-current={side === 'syllabus' ? 'page' : undefined}>
              Syllabus
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-24 border-t border-rule">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-faint sm:px-8">Informal quals reading list · MIT HCI</div>
      </footer>
    </div>
  )
}
