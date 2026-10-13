# HCI Quals Reading Group

A static site with two parts: an **encyclopedia** of key HCI ideas and a week-by-week **syllabus** for the reading group.
Built from the *HCI Quals Reading List — Revised* Google Doc. Pushing to `main` deploys to https://hci-quals.github.io.
React + Vite + TypeScript + Tailwind v4.

```bash
npm install
npm run dev      # http://localhost:5180
```

## Editing content

Everything lives in `content/`. The dev server hot-reloads on save.

- `content/articles/<part>/<idea>.md` — one file per idea (sub-key-idea). YAML frontmatter holds the
  readings (citation, description, tag, url, urlKind, doi) and the timeline origin
  (`origin.reading` = id of the reading that introduced the idea, `origin.year`, `origin.blurb`).
  The body uses `## ` sections in OECS order: Abstract, History, Core concepts,
  Questions/controversies/new developments, Broader connections, Discussion questions.
  Any extra `## Heading` you add shows up in the article and its table of contents.
  Set `status: published` to drop the "Draft" badge.
- `content/parts.yaml` — parts and key ideas (titles and intros).
- `content/syllabus.yaml` — the syllabus: start date, interval and the ordered list of weeks (title + idea ids).
  Each week shows the key idea, its controversies, discussion questions, readings and any paired readings.
- `content/pairs.yaml` — the "Read these as pairs" table, by reading id. A pair is read in the syllabus week of its
  newest reading, and the older reading is pulled into that week.

Optional frontmatter: `pending:` (readings to be added, shown as a note) and `people:` (names shown under the title).

`urlKind` sets the link label (PDF, Read, arXiv, Watch, DOI, Find…).

`scripts/generate_content.py` produced the initial files from the doc. It will not overwrite existing
article files unless run with `--force`, so hand edits are safe.
