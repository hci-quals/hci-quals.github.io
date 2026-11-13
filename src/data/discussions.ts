import { parse as parseYaml } from 'yaml'
import { slugify, type Section } from './content'

/** Headings rendered on a reading, in order. Anything else in the file, including Contributors, is left out. */
const DISCUSSION_HEADINGS = [
  'main idea',
  'what is the paper trying to do',
  'what kind of contribution is it',
  'why does it matter',
  'hot takes',
]

function headingKey(title: string) {
  return title.toLowerCase().replace(/[?]/g, '').replace(/\s+/g, ' ').trim()
}

function splitFrontmatter(raw: string, path: string) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) throw new Error(`Missing frontmatter in ${path}`)
  return { fm: parseYaml(m[1]) as Record<string, unknown>, body: m[2].trim() }
}

function discussionSections(body: string): Section[] {
  const parsed: Section[] = []
  for (const chunk of body.split(/^## +/m).slice(1)) {
    const nl = chunk.indexOf('\n')
    const title = (nl === -1 ? chunk : chunk.slice(0, nl)).trim()
    const text = (nl === -1 ? '' : chunk.slice(nl + 1)).trim()
    if (/^contributors\b/i.test(title)) continue
    parsed.push({ id: slugify(title), title, body: text })
  }
  const ordered: Section[] = []
  const used = new Set<number>()
  for (const key of DISCUSSION_HEADINGS) {
    const i = parsed.findIndex((s, idx) => !used.has(idx) && (headingKey(s.title) === key || headingKey(s.title).startsWith(`${key} `) || headingKey(s.title).startsWith(`${key}/`)))
    if (i >= 0) {
      used.add(i)
      ordered.push(parsed[i])
    }
  }
  return ordered
}

const discussionFiles = import.meta.glob('/content/discussions/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

const discussionById = new Map<string, Section[]>()
for (const [path, raw] of Object.entries(discussionFiles)) {
  const { fm, body } = splitFrontmatter(raw, path)
  const fromName = path.split('/').pop()?.replace(/\.md$/, '') ?? ''
  const id = String(fm.id ?? fromName)
  if (!id) throw new Error(`Discussion has no id: ${path}`)
  discussionById.set(id, discussionSections(body))
}

/** Markdown for a reading's discussion entry, or nothing when that reading has no file. */
export function discussionMarkdown(readingId: string): string | undefined {
  const sections = discussionById.get(readingId)
  if (!sections?.length) return undefined
  return sections.map((s) => `## ${s.title}\n\n${s.body}`).join('\n\n')
}

interface SessionNote {
  ideaId: string
  theme: string
  ideaReadings: string[]
  markdown: string
}

const sessionFiles = import.meta.glob('/content/discussions/sessions/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

const sessionNotes: SessionNote[] = Object.entries(sessionFiles).map(([path, raw]) => {
  const { fm, body } = splitFrontmatter(raw, path)
  const readings = (fm.readings ?? {}) as { ideas?: string[] }
  return {
    ideaId: String(fm.idea ?? ''),
    theme: String(fm.theme ?? ''),
    ideaReadings: readings.ideas ?? [],
    markdown: body,
  }
})

function normTheme(s: string) {
  return s.toLowerCase().replace(/[\u2013\u2014-]/g, '-').replace(/\s+/g, ' ').trim()
}

/** Synthesis for one meeting. Matched on the idea and theme, then on the idea readings. */
export function sessionSynthesis(ideaId: string, theme: string, ideaReadingIds: readonly string[]): string | undefined {
  const themeKey = normTheme(theme)
  const byTheme = sessionNotes.find((n) => n.ideaId === ideaId && normTheme(n.theme) === themeKey)
  if (byTheme) return byTheme.markdown
  const ids = [...ideaReadingIds].sort().join('\0')
  return sessionNotes.find((n) => n.ideaId === ideaId && [...n.ideaReadings].sort().join('\0') === ids)?.markdown
}
