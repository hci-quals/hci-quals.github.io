#!/usr/bin/env python3
"""Check content/sessions.yaml against the ideas, readings and subfields.

Rules: every idea has 2-4 sessions; each session has 3 main readings that span at least two
subfields and two decades; every listed reading belongs to that idea, has a reading-time estimate,
and appears once within the idea; no main reading is assigned in two ideas; and within an idea the
longest session takes at most 1.4x the shortest. Exits non-zero on any error.
"""
import collections
import glob
import sys

import yaml

ROOT = __file__.rsplit('/scripts/', 1)[0]


def load(path):
    with open(f'{ROOT}/{path}') as f:
        return yaml.safe_load(f)


def main():
    years = {}
    for path in glob.glob(f'{ROOT}/content/articles/*/*.md'):
        with open(path) as f:
            for r in yaml.safe_load(f.read().split('---')[1]).get('readings', []):
                years[r['id']] = r.get('year')
    field = {rid: name for name, ids in load('content/fields.yaml').items() for rid in ids}
    ideas = {i['id']: set(i['readings']) for i in load('content/ideas.yaml')['ideas']}
    doc = load('content/sessions.yaml')
    minutes, sessions = doc['minutes'], doc['sessions']

    errors, report = [], []
    main_home = collections.defaultdict(list)
    for idea, readings in ideas.items():
        plan = sessions.get(idea)
        if not plan:
            errors.append(f'{idea}: no sessions')
            continue
        if not 2 <= len(plan) <= 4:
            errors.append(f'{idea}: {len(plan)} sessions (want 2-4)')
        seen, totals = set(), []
        for n, s in enumerate(plan, 1):
            where = f'{idea} session {n}'
            ids = s['main'] + (s.get('optional') or [])
            for rid in ids:
                if rid not in readings:
                    errors.append(f'{where}: {rid} is not one of this idea\'s readings')
                if rid not in minutes:
                    errors.append(f'{where}: {rid} has no reading-time estimate')
                if rid in seen:
                    errors.append(f'{where}: {rid} appears twice in this idea')
                seen.add(rid)
            if len(s['main']) != 3:
                errors.append(f'{where}: {len(s["main"])} main readings (want 3)')
            fields = {field.get(r) for r in s['main']}
            decades = {(years.get(r) or 0) // 10 for r in s['main']}
            if len(fields) < 2:
                errors.append(f'{where}: main readings all from {fields}')
            if len(decades) < 2:
                errors.append(f'{where}: main readings all from the {decades.pop() * 10}s')
            for rid in s['main']:
                main_home[rid].append(where)
            total = sum(minutes.get(r, 0) for r in s['main'])
            totals.append(total)
            report.append(f'{where}: {total} min, {len(fields)} subfields, {len(decades)} decades, {len(s.get("optional") or [])} optional')
        if totals and max(totals) > 1.4 * min(totals):
            errors.append(f'{idea}: session times {totals} are unbalanced (longest > 1.4x shortest)')
    for rid, homes in main_home.items():
        if len(homes) > 1:
            errors.append(f'{rid} is a main reading in {homes}')
    for idea in sessions:
        if idea not in ideas:
            errors.append(f'sessions for unknown idea {idea}')

    print('\n'.join(report))
    if errors:
        print('\nERRORS\n' + '\n'.join(errors))
        sys.exit(1)
    print(f'\nOK: {sum(len(p) for p in sessions.values())} sessions across {len(sessions)} ideas')


if __name__ == '__main__':
    main()
