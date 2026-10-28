import { createContext, useContext } from 'react'

/** Whether readings are coloured by reading session. Toggled from the header; remembered per browser. */
export const SessionsMode = createContext<{ on: boolean; setOn: (on: boolean) => void }>({ on: false, setOn: () => {} })
export const useSessionsMode = () => useContext(SessionsMode)

export const sessionColor = (n: number) => `var(--hq-s${n})`
