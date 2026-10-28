import { parse as parseYaml } from 'yaml'
import ideasRaw from '/content/ideas.yaml?raw'
import fieldsRaw from '/content/fields.yaml?raw'
import sessionsRaw from '/content/sessions.yaml?raw'
import kindsRaw from '/content/reading-kinds.yaml?raw'
import { readingById, readingAuthors, readingTitle, readings as allReadings, type Reading } from './content'

/** Idea readings introduce or argue a big idea; instantiation readings take up an earlier one. */
export type Kind = 'idea' | 'instantiation'
const kindsDoc = parseYaml(kindsRaw) as Record<Kind, string[]>
const kindByReading = new Map<string, Kind>([...kindsDoc.idea.map((id) => [id, 'idea'] as const), ...kindsDoc.instantiation.map((id) => [id, 'instantiation'] as const)])
export const kindOf = (r: Reading): Kind => kindByReading.get(r.id) ?? 'instantiation'

/** One meeting of the reading group: everyone reads the idea readings and at least one instantiation reading. */
export interface Session {
  /** Number across the whole syllabus, from 1. */
  n: number
  /** Position within its idea, from 1; picks the session colour. */
  k: number
  /** Meeting date, when set. */
  date?: Date
  ideas: Reading[]
  instantiations: Reading[]
}

const sessionsDoc = parseYaml(sessionsRaw) as {
  sessions: Record<string, { date?: string; ideas: string[]; instantiations: string[] }[]>
}
let sessionCount = 0

export interface Idea {
  id: string
  number: string
  name: string
  aka?: string
  position: string
  problem?: string
  draft: boolean
  readings: Reading[]
  sessions: Session[]
  /** The session each reading belongs to, if any. */
  sessionOf: Map<string, Session>
  fields: string[]
  decades: number[]
}

const fieldsDoc = parseYaml(fieldsRaw) as Record<string, string[]>
export const fieldOrder = [...Object.keys(fieldsDoc), 'Other']
export const fieldOf = (r: Reading) => fieldByReading.get(r.id) ?? 'Other'
const fieldByReading = new Map(Object.entries(fieldsDoc).flatMap(([f, ids]) => ids.map((id) => [id, f] as const)))

export const decadeOf = (r: Reading) => Math.floor((r.year ?? 0) / 10) * 10

const byYear = (a: Reading, b: Reading) => (a.year ?? 0) - (b.year ?? 0)
const decadeSpan = (rs: Reading[]) => {
  const first = decadeOf(rs[0])
  const last = decadeOf(rs[rs.length - 1])
  return Array.from({ length: (last - first) / 10 + 1 }, (_, k) => first + k * 10)
}

const doc = parseYaml(ideasRaw) as {
  ideas: { id: string; name: string; aka?: string; position: string; problem?: string; draft?: boolean; readings: string[] }[]
}

export const ideas: Idea[] = doc.ideas.map((d, i) => {
  const readings = d.readings
    .map((id) => readingById.get(id))
    .filter((r): r is Reading => !!r?.year)
    .sort(byYear)
  const present = new Set(readings.map(fieldOf))
  const pick = (ids: string[]) => ids.map((id) => readingById.get(id)).filter((r): r is Reading => !!r)
  const sessions = (sessionsDoc.sessions[d.id] ?? []).map((s, k) => ({
    n: ++sessionCount,
    k: k + 1,
    date: s.date ? new Date(`${s.date}T12:00:00`) : undefined,
    ideas: pick(s.ideas),
    instantiations: pick(s.instantiations),
  }))
  const sessionOf = new Map<string, Session>()
  for (const s of sessions) for (const r of [...s.ideas, ...s.instantiations]) sessionOf.set(r.id, s)
  return {
    id: d.id,
    number: String(i + 1),
    name: d.name,
    aka: d.aka,
    position: d.position,
    problem: d.problem,
    draft: !!d.draft,
    readings,
    sessions,
    sessionOf,
    fields: fieldOrder.filter((f) => present.has(f)),
    decades: decadeSpan(readings),
  }
})

// Readings no idea claims yet; the same reading filed under two old entries counts once.
const placed = new Set(ideas.flatMap((d) => d.readings.map((r) => r.id)))
const placedTitles = new Set(ideas.flatMap((d) => d.readings.map(readingTitle)))
const seenTitles = new Set<string>()
export const unplaced = allReadings
  .filter((r) => !placed.has(r.id) && !placedTitles.has(readingTitle(r)) && !seenTitles.has(readingTitle(r)) && seenTitles.add(readingTitle(r)))
  .sort(byYear)

/** "Hutchins, Hollan and Norman" → "Hutchins et al."; "Card and Moran" → "Card & Moran". */
export function shortAuthors(r: Reading) {
  const a = readingAuthors(r).replace(/\s*\(eds?\.\)/, '')
  if (/ et al\.?$/.test(a)) return a
  const names = a.split(/,\s*|\s+and\s+/)
  if (names.length === 1) return a
  if (names.length === 2) return `${names[0]} & ${names[1]}`
  return `${names[0]} et al.`
}

/** "Session 1 (11/5/26)": the number, plus the meeting date once one is set. */
export const sessionLabel = (s: Session) => `Session ${s.n}${s.date ? ` (${s.date.getMonth() + 1}/${s.date.getDate()}/${String(s.date.getFullYear()).slice(2)})` : ''}`
