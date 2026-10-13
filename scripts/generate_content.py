"""Generate content/ markdown files from the parsed doc structure + research JSON.

Usage: python3 scripts/generate_content.py <structure.json> <research_dir> [--force]

Existing article files are NOT overwritten unless --force is passed, so hand edits are safe.
"""
import json, os, re, sys, unicodedata
from pathlib import Path

import_yaml = None

structure = json.load(open(sys.argv[1], encoding="utf-8"))
research_dir = Path(sys.argv[2])
force = "--force" in sys.argv
root = Path(__file__).resolve().parent.parent / "content"
(root / "articles").mkdir(parents=True, exist_ok=True)

research = {"subs": {}, "readings": {}}
for f in sorted(research_dir.glob("g*.json")):
    try:
        d = json.load(open(f, encoding="utf-8"))
    except Exception as e:  # noqa
        print("skip", f, e)
        continue
    research["subs"].update(d.get("subs", {}))
    research["readings"].update(d.get("readings", {}))


def q(s):
    """YAML double-quoted scalar."""
    if s is None:
        return "null"
    s = str(s).replace("\\", "\\\\").replace('"', '\\"')
    return f'"{s}"'


def ascii_slug(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


used_ids = {}


def reading_id(citation, year):
    first = re.split(r"[ ,]", citation.strip())[0]
    base = ascii_slug(first) or "reading"
    rid = f"{base}-{year or 'nd'}"
    n = used_ids.get(rid, 0)
    used_ids[rid] = n + 1
    return rid if n == 0 else f"{rid}-{chr(ord('a') + n)}"


def scholar(citation):
    from urllib.parse import quote_plus
    return "https://scholar.google.com/scholar?q=" + quote_plus(citation)


parts_yaml = ["# Parts and key ideas. Edit titles/intros here; article files reference these ids.", "parts:"]
order = 0
for p in structure:
    parts_yaml += [f"  - id: {p['id']}", f"    title: {q(p['title'])}", f"    short: {q(p['short'])}", f"    intro: {q(p['intro'])}", "    keyIdeas:"]
    for k in p["keyIdeas"]:
        parts_yaml += [f"      - id: {k['id']}", f"        title: {q(k['title'])}", f"        intro: {q(k['intro'])}"]
        for s in k["subs"]:
            order += 1
            rs = research["subs"].get(s["id"], {})
            rr = research["readings"].get(s["id"], [])
            path = root / "articles" / p["id"] / f"{s['id']}.md"
            path.parent.mkdir(parents=True, exist_ok=True)
            readings = []
            for i, r in enumerate(s["readings"]):
                x = rr[i] if i < len(rr) and isinstance(rr[i], dict) else {}
                year = x.get("year") or r.get("year")
                readings.append({
                    "id": reading_id(r["citation"], year),
                    "citation": r["citation"],
                    "authors": x.get("authors") or "",
                    "title": x.get("title") or "",
                    "venue": x.get("venue") or "",
                    "year": year,
                    "tag": r["tag"],
                    "description": r["description"],
                    "url": x.get("url") or scholar(r["citation"]),
                    "urlKind": x.get("urlKind") or "search",
                    "doi": x.get("doi"),
                    "verified": bool(x.get("verified")),
                })
            if path.exists() and not force:
                continue
            oi = rs.get("originIndex", 0)
            if not isinstance(oi, int) or not (0 <= oi < len(readings)):
                oi = 0
            oy = rs.get("originYear") or (readings[oi]["year"] if readings else None)
            fm = ["---", f"id: {s['id']}", f"title: {q(s['title'])}", f"part: {p['id']}", f"keyIdea: {k['id']}",
                  f"order: {order}", "status: draft",
                  f"label: {q(rs.get('label') or s['title'])}",
                  "origin:", f"  reading: {readings[oi]['id'] if readings else 'null'}", f"  year: {oy}",
                  f"  blurb: {q(rs.get('originBlurb') or '')}",
                  "readings:"]
            for r in readings:
                fm.append(f"  - id: {r['id']}")
                for key in ("citation", "authors", "title", "venue"):
                    fm.append(f"    {key}: {q(r[key])}")
                fm.append(f"    year: {r['year'] if r['year'] else 'null'}")
                fm.append(f"    tag: {r['tag']}")
                fm.append(f"    description: {q(r['description'])}")
                fm.append(f"    url: {q(r['url'])}")
                fm.append(f"    urlKind: {r['urlKind']}")
                fm.append(f"    doi: {q(r['doi']) if r['doi'] else 'null'}")
                fm.append(f"    verified: {'true' if r['verified'] else 'false'}")
            fm.append("---")

            abstract = rs.get("abstract") or s["intro"]
            body = ["", "## Abstract", "", abstract, ""]
            if rs.get("abstract") and s["intro"] and s["intro"] != abstract:
                body += [f"> **From the reading list:** {s['intro']}", ""]
            body += ["## History", ""]
            hist = rs.get("history") or ["*TODO: trace how this idea emerged.*"]
            body += [f"- {h}" for h in hist] + [""]
            body += ["## Core concepts", ""]
            cc = rs.get("coreConcepts") or []
            if cc:
                body += [f"- **{c.get('term','')}** — {c.get('gloss','')}" for c in cc]
            else:
                body += ["- *TODO: key terms.*"]
            body += ["", "## Questions, controversies, and new developments", ""]
            if s["controversies"]:
                body.append(f"- **Controversies.** {s['controversies']}")
            if s["responses"]:
                body.append(f"- **Responses and new developments.** {s['responses']}")
            body += ["", "## Broader connections", ""]
            body.append(f"- **Influence.** {s['influence']}" if s["influence"] else "- *TODO*")
            body += ["", "## Discussion questions", ""]
            body += [f"- {d}" for d in (rs.get("discussion") or ["*TODO*"])]
            body.append("")
            path.write_text("\n".join(fm + body), encoding="utf-8")

(root / "parts.yaml").write_text("\n".join(parts_yaml) + "\n", encoding="utf-8")
print("articles:", order, "| research subs:", len(research["subs"]))
