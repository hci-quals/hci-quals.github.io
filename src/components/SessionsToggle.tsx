import { useState, type ReactNode } from 'react'
import { SessionsMode, sessionColor, useSessionsMode } from './sessionsMode'

const KEY = 'hq-sessions'

export function SessionsProvider({ children }: { children: ReactNode }) {
  const [on, setOnState] = useState(() => {
    try {
      return localStorage.getItem(KEY) === 'on'
    } catch {
      return false
    }
  })
  const setOn = (next: boolean) => {
    setOnState(next)
    try {
      localStorage.setItem(KEY, next ? 'on' : 'off')
    } catch {
      /* storage unavailable; the choice lasts for this visit */
    }
  }
  return <SessionsMode.Provider value={{ on, setOn }}>{children}</SessionsMode.Provider>
}

export function SessionsToggle() {
  const { on, setOn } = useSessionsMode()
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
      className={`flex shrink-0 items-center gap-2 rounded-full py-1 pl-1 pr-2.5 text-sm transition-colors ${on ? 'text-ink' : 'text-muted hover:text-ink'}`}
    >
      <span className={`relative h-4 w-7 rounded-full border transition-colors ${on ? 'border-ink bg-ink' : 'border-faint'}`}>
        <span className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full transition-all ${on ? 'left-[0.9rem] bg-paper' : 'left-0.5 bg-faint'}`} />
      </span>
      Sessions
      <span className="hidden gap-0.5 sm:flex" aria-hidden>
        {[1, 2, 3, 4].map((n) => (
          <span key={n} className={`h-1.5 w-1.5 rounded-full transition-opacity ${on ? 'opacity-100' : 'opacity-30'}`} style={{ background: sessionColor(n) }} />
        ))}
      </span>
    </button>
  )
}
