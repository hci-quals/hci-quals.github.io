import { parse as parseYaml } from 'yaml'
import partsRaw from '/content/parts.yaml?raw'
import pairsRaw from '/content/pairs.yaml?raw'

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
  verified: boolean
  articleId: string
}

export interface Section {
  id: string
  title: string
  body: string
}

export interface Article {
  id: string
  title: string
  partId: string
  keyIdeaId: string
  order: number
  status: string
  label: string
  origin: { reading: string; year: number; blurb: string }
  readings: Reading[]
  abstract: string
  sections: Section[]
}

export interface KeyIdea {
  id: string
  title: string
  intro: string
  partId: string
  articles: Article[]
}

export interface Part {
  id: string
  title: string
  short: string
  numeral: string
  intro: string
  keyIdeas: KeyIdea[]
}

export interface Pair {
  older: Reading[]
  newer: Reading[]
  question: string
}

const files = import.meta.glob('/content/articles/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

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
  const chunks = m[2].split(/^## +/m).slice(1)
  let abstract = ''
  const sections: Section[] = []
  for (const chunk of chunks) {
    const nl = chunk.indexOf('\n')
    const title = (nl === -1 ? chunk : chunk.slice(0, nl)).trim()
    const body = nl === -1 ? '' : chunk.slice(nl + 1).trim()
    if (title.toLowerCase() === 'abstract') abstract = body
    else sections.push({ id: slugify(title), title, body })
  }
  const readings: Reading[] = (fm.readings ?? []).map((r: Reading) => ({ ...r, articleId: fm.id }))
  return {
    id: fm.id,
    title: fm.title,
    partId: fm.part,
    keyIdeaId: fm.keyIdea,
    order: fm.order ?? 0,
    status: fm.status ?? 'draft',
    label: fm.label ?? fm.title,
    origin: fm.origin ?? { reading: readings[0]?.id, year: readings[0]?.year ?? 0, blurb: '' },
    readings,
    abstract,
    sections,
  }
}

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

export const articles: Article[] = Object.entries(files)
  .map(([path, raw]) => parseArticle(raw, path))
  .sort((a, b) => a.order - b.order)

export const articleById = new Map(articles.map((a) => [a.id, a]))

const partsDoc = parseYaml(partsRaw) as {
  parts: { id: string; title: string; short: string; intro: string; keyIdeas: { id: string; title: string; intro: string }[] }[]
}

export const parts: Part[] = partsDoc.parts.map((p, i) => ({
  id: p.id,
  title: p.title,
  short: p.short,
  numeral: p.id === 'ai' ? 'AI' : NUMERALS[i] ?? String(i + 1),
  intro: p.intro,
  keyIdeas: p.keyIdeas.map((k) => ({
    id: k.id,
    title: k.title,
    intro: k.intro,
    partId: p.id,
    articles: articles.filter((a) => a.keyIdeaId === k.id),
  })),
}))

export const partById = new Map(parts.map((p) => [p.id, p]))
export const keyIdeaById = new Map(parts.flatMap((p) => p.keyIdeas).map((k) => [k.id, k]))
export const keyIdeas = parts.flatMap((p) => p.keyIdeas)

export const readings: Reading[] = articles.flatMap((a) => a.readings)
export const readingById = new Map(readings.map((r) => [r.id, r]))

export const pairs: Pair[] = ((parseYaml(pairsRaw) as { pairs: { older: string[]; newer: string[]; question: string }[] }).pairs ?? []).map(
  (p) => ({
    older: p.older.map((id) => readingById.get(id)).filter(Boolean) as Reading[],
    newer: p.newer.map((id) => readingById.get(id)).filter(Boolean) as Reading[],
    question: p.question,
  }),
)

export function pairsForArticle(a: Article): Pair[] {
  const ids = new Set(a.readings.map((r) => r.id))
  return pairs.filter((p) => [...p.older, ...p.newer].some((r) => ids.has(r.id)))
}

/** Lineage for the timeline: what came before the origin, the origin, and the follow-ups. */
export function lineage(a: Article) {
  const origin = a.readings.find((r) => r.id === a.origin.reading) ?? a.readings[0]
  const others = a.readings.filter((r) => r !== origin).sort((x, y) => (x.year ?? 0) - (y.year ?? 0))
  const oy = a.origin.year ?? origin?.year ?? 0
  return {
    origin,
    roots: others.filter((r) => (r.year ?? 0) < oy),
    followUps: others.filter((r) => (r.year ?? 0) >= oy),
  }
}

/** A short display title for a reading, falling back to the quoted title inside the citation. */
export function readingTitle(r: Reading): string {
  if (r.title) return r.title
  const q = r.citation.match(/[“"](.+?)[,.]?[”"]/)
  if (q) return q[1].replace(/[,.]$/, '')
  const parts = r.citation.split(',')
  return (parts[1] ?? r.citation).trim()
}

export function readingAuthors(r: Reading): string {
  if (r.authors) return r.authors
  return r.citation.split(/,\s*[“"]/)[0].split(',')[0].trim()
}

export function readingVenue(r: Reading): string {
  if (r.venue) return r.venue
  const after = r.citation.split(/[”"]/).pop() ?? ''
  return after.replace(/^[,\s]+/, '').replace(/,?\s*\d{4}.*$/, '').trim()
}

export const PART_COLORS: Record<string, string> = {
  'part-1': '#b7791f',
  'part-2': '#7c5cc4',
  'part-3': '#2b7bb9',
  'part-4': '#2f8f6b',
  'part-5': '#c2577a',
  'part-6': '#d0702b',
  'part-7': '#5561c9',
  'part-8': '#0090b8',
  'part-9': '#9a7b1c',
  'part-10': '#6b7785',
  ai: '#d6455d',
}
export const partColor = (id: string) => PART_COLORS[id] ?? '#0090b8'

export const TAG_INFO: Record<Tag, { label: string; hint: string }> = {
  Core: { label: 'Core', hint: 'On the original quals list' },
  Modern: { label: 'Modern', hint: 'Recent work that revisits or updates an older idea' },
  Adjacent: { label: 'Adjacent', hint: 'Influential work from outside core HCI' },
  Added: { label: 'Added', hint: 'Classic added to fill a gap in the cluster' },
}

export const stats = {
  articles: articles.length,
  readings: readings.length,
  keyIdeas: keyIdeas.length,
  parts: parts.length,
}
