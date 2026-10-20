import { parse as parseYaml } from 'yaml'
import ideasRaw from '/content/ideas.yaml?raw'
import fieldsRaw from '/content/fields.yaml?raw'
import { articleById, readingAuthors, type Reading } from './content'

export interface Idea {
  id: string
  number: string
  name: string
  claim: string
  alternatives: { text: string; emphasis: string }[]
  readings: Reading[]
  fields: string[]
  decades: number[]
}

const fieldsDoc = parseYaml(fieldsRaw) as Record<string, string[]>
export const fieldOrder = Object.keys(fieldsDoc)
export const fieldOf = new Map(Object.entries(fieldsDoc).flatMap(([f, ids]) => ids.map((id) => [id, f] as const)))

export const decadeOf = (r: Reading) => Math.floor((r.year ?? 0) / 10) * 10

const doc = parseYaml(ideasRaw) as {
  ideas: { id: string; name: string; claim: string; alternatives?: { text: string; emphasis: string }[]; articles: string[] }[]
}

export const ideas: Idea[] = doc.ideas.map((d, i) => {
  const seen = new Set<string>()
  const readings = d.articles
    .flatMap((id) => articleById.get(id)?.readings ?? [])
    .filter((r) => r.year && !seen.has(r.id) && seen.add(r.id))
    .sort((a, b) => (a.year ?? 0) - (b.year ?? 0))
  const present = new Set(readings.map((r) => fieldOf.get(r.id) ?? 'Other'))
  const first = decadeOf(readings[0])
  const last = decadeOf(readings[readings.length - 1])
  return {
    id: d.id,
    number: String(i + 1),
    name: d.name,
    claim: d.claim,
    alternatives: d.alternatives ?? [],
    readings,
    fields: [...fieldOrder, 'Other'].filter((f) => present.has(f)),
    decades: Array.from({ length: (last - first) / 10 + 1 }, (_, k) => first + k * 10),
  }
})

/** "Hutchins, Hollan and Norman" → "Hutchins et al."; "Card and Moran" → "Card & Moran". */
export function shortAuthors(r: Reading) {
  const a = readingAuthors(r).replace(/\s*\(eds?\.\)/, '')
  if (/ et al\.?$/.test(a)) return a
  const names = a.split(/,\s*|\s+and\s+/)
  if (names.length === 1) return a
  if (names.length === 2) return `${names[0]} & ${names[1]}`
  return `${names[0]} et al.`
}
