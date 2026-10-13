import { useSyncExternalStore } from 'react'

/** Tiny localStorage-backed store shared across components. */
function createStore<T>(key: string, initial: T) {
  let state: T = initial
  try {
    const raw = localStorage.getItem(key)
    if (raw) state = { ...initial, ...JSON.parse(raw) }
  } catch {
    /* storage unavailable */
  }
  const listeners = new Set<() => void>()
  return {
    get: () => state,
    set(next: T | ((s: T) => T)) {
      state = typeof next === 'function' ? (next as (s: T) => T)(state) : next
      try {
        localStorage.setItem(key, JSON.stringify(state))
      } catch {
        /* storage unavailable */
      }
      listeners.forEach((l) => l())
    },
    subscribe(l: () => void) {
      listeners.add(l)
      return () => listeners.delete(l)
    },
  }
}

export interface ReadingState {
  read?: boolean
  interest?: number // 0-3
}

const progressStore = createStore<{ readings: Record<string, ReadingState> }>('hq:progress', { readings: {} })

export function useProgress() {
  const s = useSyncExternalStore(progressStore.subscribe, progressStore.get)
  return s.readings
}

export function setReadingState(id: string, patch: ReadingState) {
  progressStore.set((s) => ({ readings: { ...s.readings, [id]: { ...s.readings[id], ...patch } } }))
}

export interface Session {
  id: string
  title: string
  articleIds: string[]
  notes: string
}

interface SessionsState {
  startDate: string
  intervalDays: number
  sessions: Session[]
}

const sessionsStore = createStore<SessionsState>('hq:sessions', {
  startDate: new Date().toISOString().slice(0, 10),
  intervalDays: 7,
  sessions: [],
})

export function useSessions() {
  return useSyncExternalStore(sessionsStore.subscribe, sessionsStore.get)
}
export const updateSessions = sessionsStore.set

export const newId = () => Math.random().toString(36).slice(2, 9)

export function addArticleToSession(articleId: string, sessionId?: string) {
  sessionsStore.set((s) => {
    if (!sessionId) {
      const session: Session = { id: newId(), title: `Session ${s.sessions.length + 1}`, articleIds: [articleId], notes: '' }
      return { ...s, sessions: [...s.sessions, session] }
    }
    return {
      ...s,
      sessions: s.sessions.map((x) =>
        x.id === sessionId && !x.articleIds.includes(articleId) ? { ...x, articleIds: [...x.articleIds, articleId] } : x,
      ),
    }
  })
}

export function sessionDate(state: SessionsState, index: number): Date | null {
  if (!state.startDate) return null
  const d = new Date(state.startDate + 'T12:00:00')
  d.setDate(d.getDate() + index * (state.intervalDays || 7))
  return d
}

const themeStore = createStore<{ dark: boolean }>('hq:theme-state', {
  dark: false,
})
// The <html> class (set before paint in index.html) is the source of truth.
themeStore.set({ dark: document.documentElement.classList.contains('dark') })
export function useTheme() {
  return useSyncExternalStore(themeStore.subscribe, themeStore.get).dark
}
export function toggleTheme() {
  themeStore.set((s) => {
    const dark = !s.dark
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('hq:theme', dark ? 'dark' : 'light')
    } catch {
      /* ignore */
    }
    return { dark }
  })
}
