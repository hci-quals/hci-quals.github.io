# HCI Quals Reading Group

An OECS-style (oecs.mit.edu) reading-group site built from the *HCI Quals Reading List — Revised* Google Doc.
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
- `content/pairs.yaml` — the "Read these as pairs" table, by reading id.

`urlKind` controls the link button: `pdf | open | arxiv | author | archive | video` are shown as
free full text (green dot); `doi | publisher | search` are shown as plain links. Every reading with a DOI
also gets DOI and MIT Libraries proxy buttons.

`scripts/generate_content.py` produced the initial files from the doc. It will not overwrite existing
article files unless run with `--force`, so hand edits are safe.

## Local state

Read/interest marks and the session schedule are stored in the browser's localStorage.
