import { parse as parseYaml } from 'yaml'
import partsRaw from '/content/parts.yaml?raw'
import pairsRaw from '/content/pairs.yaml?raw'
import syllabusRaw from '/content/syllabus.yaml?raw'

export type Tag = 'Core' | 'Modern' | 'Adjacent' | 'Added'
export type UrlKind = 'pdf' | 'open' | 'arxiv' | 'author' | 'archive' | 'video' | 'publisher' | 'doi' | 'search'

export interface Reading {
  id: string
  citation: string
  authors: string
  title: string
  venue: string
  year: number | null
  tag: Tag
  description: string
  url: string
  urlKind: UrlKind
  doi: string | null
  articleId: string
}

export interface Section {
  id: string
  title: string
  body: string
}

export interface Article {
  id: string
  number: string
  title: string
  partId: string
  keyIdeaId: string
  order: number
  label: string
  origin: { reading: string; year: number; blurb: string }
  readings: Reading[]
  pending: string[]
  people: string[]
  abstract: string
  sections: Section[]
}

export interface KeyIdea {
  id: string
  number: string
  title: string
  intro: string
  partId: string
  articles: Article[]
}

export interface Part {
  id: string
  number: string
  title: string
  short: string
  intro: string
  keyIdeas: KeyIdea[]
}

export interface Pair {
  older: Reading[]
  newer: Reading[]
  question: string
}

export interface Week {
  number: number
  title: string
  articles: Article[]
  start: Date
  end: Date
  pairs: Pair[]
}

const files = import.meta.glob('/content/articles/**/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

function parseArticle(raw: string, path: string): Article {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) throw new Error(`Missing frontmatter in ${path}`)
  const fm = parseYaml(m[1])
  let abstract = ''
  const sections: Section[] = []
  for (const chunk of m[2].split(/^## +/m).slice(1)) {
    const nl = chunk.indexOf('\n')
    const title = (nl === -1 ? chunk : chunk.slice(0, nl)).trim()
    const body = nl === -1 ? '' : chunk.slice(nl + 1).trim()
    if (title.toLowerCase() === 'abstract') abstract = body.replace(/^>.*$/gm, '').trim()
    else sections.push({ id: slugify(title), title, body })
  }
  const readings: Reading[] = (fm.readings ?? []).map((r: Reading) => ({ ...r, articleId: fm.id }))
  return {
    id: fm.id,
    number: '',
    title: fm.title,
    partId: fm.part,
    keyIdeaId: fm.keyIdea,
    order: fm.order ?? 0,
    label: fm.label ?? fm.title,
    origin: fm.origin ?? { reading: readings[0]?.id, year: readings[0]?.year ?? 0, blurb: '' },
    readings,
    pending: fm.pending ?? [],
    people: fm.people ?? [],
    abstract,
    sections,
  }
}

export const articles: Article[] = Object.entries(files)
  .map(([path, raw]) => parseArticle(raw, path))
  .sort((a, b) => a.order - b.order)
export const articleById = new Map(articles.map((a) => [a.id, a]))

const partsDoc = parseYaml(partsRaw) as {
  parts: { id: string; title: string; short: string; intro: string; keyIdeas: { id: string; title: string; intro: string }[] }[]
}
// Outline numbering: parts 1, 2, …; key ideas 2.1; ideas 2.1.1.
export const parts: Part[] = partsDoc.parts.map((p, i) => ({
  id: p.id,
  number: String(i + 1),
  title: p.title,
  short: p.short,
  intro: p.intro,
  keyIdeas: p.keyIdeas.map((k, j) => {
    const number = `${i + 1}.${j + 1}`
    const arts = articles.filter((a) => a.keyIdeaId === k.id)
    arts.forEach((a, n) => (a.number = `${number}.${n + 1}`))
    return { ...k, number, partId: p.id, articles: arts }
  }),
}))
// Encyclopedia order follows the outline.
articles.sort((a, b) => a.number.localeCompare(b.number, undefined, { numeric: true }))
export const partById = new Map(parts.map((p) => [p.id, p]))
export const keyIdeaById = new Map(parts.flatMap((p) => p.keyIdeas).map((k) => [k.id, k]))

export const readings: Reading[] = articles.flatMap((a) => a.readings)
export const readingById = new Map(readings.map((r) => [r.id, r]))

export const pairs: Pair[] = ((parseYaml(pairsRaw) as { pairs: { older: string[]; newer: string[]; question: string }[] }).pairs ?? []).map((p) => ({
  older: p.older.map((id) => readingById.get(id)).filter(Boolean) as Reading[],
  newer: p.newer.map((id) => readingById.get(id)).filter(Boolean) as Reading[],
  question: p.question,
}))

/* ---------- Syllabus ---------- */

const syl = parseYaml(syllabusRaw) as { start: string; intervalDays?: number; weeks: { title: string; ideas: string[] }[] }
const startDate = new Date(`${syl.start}T00:00:00`)
const interval = syl.intervalDays ?? 7

export const weeks: Week[] = syl.weeks.map((w, i) => {
  const start = new Date(startDate)
  start.setDate(start.getDate() + i * interval)
  const end = new Date(start)
  end.setDate(end.getDate() + interval - 1)
  return { number: i + 1, title: w.title, articles: w.ideas.map((id) => articleById.get(id)).filter(Boolean) as Article[], start, end, pairs: [] }
})

export const weekOfArticle = new Map<string, Week>()
weeks.forEach((w) => w.articles.forEach((a) => weekOfArticle.has(a.id) || weekOfArticle.set(a.id, w)))
export const weekOfReading = (r: Reading) => weekOfArticle.get(r.articleId)

// A pair is read in the week of its latest reading, so the older idea is revisited alongside the newer work.
for (const p of pairs) {
  const ws = [...p.older, ...p.newer].map(weekOfReading).filter(Boolean) as Week[]
  if (ws.length) ws.reduce((a, b) => (b.number > a.number ? b : a)).pairs.push(p)
}

export function currentWeek(today = new Date()): Week | undefined {
  const t = new Date(today)
  t.setHours(12)
  if (weeks.length && t < weeks[0].start) return weeks[0]
  return weeks.find((w) => t >= w.start && t <= new Date(w.end.getTime() + 86_399_000))
}

/* ---------- Helpers ---------- */

export function lineage(a: Article) {
  const origin = a.readings.find((r) => r.id === a.origin.reading) ?? a.readings[0]
  const others = a.readings.filter((r) => r !== origin).sort((x, y) => (x.year ?? 0) - (y.year ?? 0))
  const oy = a.origin.year ?? origin?.year ?? 0
  return { origin, roots: others.filter((r) => (r.year ?? 0) < oy), followUps: others.filter((r) => (r.year ?? 0) >= oy) }
}

/** Readings with the introducing work first, then by year. */
export function orderedReadings(a: Article) {
  const { origin, roots, followUps } = lineage(a)
  return [...(origin ? [origin] : []), ...roots, ...followUps]
}

export function readingTitle(r: Reading): string {
  if (r.title) return r.title
  const q = r.citation.match(/[“"](.+?)[,.]?[”"]/)
  return q ? q[1].replace(/[,.]$/, '') : (r.citation.split(',')[1] ?? r.citation).trim()
}
export function readingAuthors(r: Reading): string {
  return r.authors || r.citation.split(/,\s*[“"]/)[0].split(',')[0].trim()
}
export function readingVenue(r: Reading): string {
  if (r.venue) return r.venue
  return (r.citation.split(/[”"]/).pop() ?? '').replace(/^[,\s]+/, '').replace(/,?\s*\d{4}.*$/, '').trim()
}

export function sectionBody(a: Article, id: string) {
  return a.sections.find((s) => s.id === id)?.body ?? ''
}
/** Pull a labelled bullet (e.g. "Controversies.") out of a section body. */
export function bullet(a: Article, sectionId: string, label: string) {
  const m = sectionBody(a, sectionId).match(new RegExp(`\\*\\*${label}\\.?\\*\\*\\s*(.+)`))
  return m ? m[1].trim() : ''
}
export function listItems(body: string) {
  return body
    .split('\n')
    .filter((l) => l.startsWith('- '))
    .map((l) => l.slice(2).trim())
}

export const fmtDate = (d: Date) => d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
export const partLabel = (p: Part) => `${p.number}. ${p.short}`
