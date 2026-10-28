#!/usr/bin/env python3
"""Check content/sessions.yaml and content/reading-kinds.yaml against the ideas, readings and subfields.

Errors (exit non-zero):
- every reading is categorized exactly once as an idea or an instantiation reading;
- every idea has 2-4 sessions; each session has at least two idea readings and one to three instantiation readings,
  each listed under the right kind and belonging to that idea, with a reading-time estimate;
- no reading appears in two sessions anywhere;
- each session's readings span at least two subfields and two decades;
- within an idea, the idea readings of the longest session take at most 1.5x those of the shortest
  (sessions marked `fixed` are chosen by the organizers and left out of this check).
Sessions with fewer than three instantiation readings are listed as notes.
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
    kinds = load('content/reading-kinds.yaml')
    doc = load('content/sessions.yaml')
    minutes, sessions = doc['minutes'], doc['sessions']

    errors, notes, report = [], [], []
    labelled = kinds['idea'] + kinds['instantiation']
    kind = {**{r: 'idea' for r in kinds['idea']}, **{r: 'instantiation' for r in kinds['instantiation']}}
    for rid, n in collections.Counter(labelled).items():
        if n > 1:
            errors.append(f'{rid} is categorized more than once')
    placed = set().union(*ideas.values())
    for rid in placed - set(labelled):
        errors.append(f'{rid} is not categorized as idea or instantiation')

    home = collections.defaultdict(list)
    number = 0
    for idea, readings in ideas.items():
        plan = sessions.get(idea)
        if not plan:
            errors.append(f'{idea}: no sessions')
            continue
        if not 2 <= len(plan) <= 4:
            errors.append(f'{idea}: {len(plan)} sessions (want 2-4)')
        idea_time = []
        for s in plan:
            number += 1
            where = f'session {number} ({idea})'
            for role, want in (('ideas', 'idea'), ('instantiations', 'instantiation')):
                for rid in s[role]:
                    if rid not in readings:
                        errors.append(f'{where}: {rid} is not one of this idea\'s readings')
                    if kind.get(rid) != want:
                        errors.append(f'{where}: {rid} is listed as {want} but categorized as {kind.get(rid)}')
                    if rid not in minutes:
                        errors.append(f'{where}: {rid} has no reading-time estimate')
                    home[rid].append(where)
            if len(s['ideas']) < 2:
                errors.append(f'{where}: {len(s["ideas"])} idea readings (want at least 2)')
            if not 1 <= len(s['instantiations']) <= 3:
                errors.append(f'{where}: {len(s["instantiations"])} instantiation readings (want 1-3)')
            elif len(s['instantiations']) < 3:
                notes.append(f'{where}: only {len(s["instantiations"])} instantiation readings')
            ids = s['ideas'] + s['instantiations']
            fields = {field.get(r) for r in ids}
            decades = {(years.get(r) or 0) // 10 for r in ids}
            if len(fields) < 2:
                errors.append(f'{where}: all readings from {fields}')
            if len(decades) < 2:
                errors.append(f'{where}: all readings from the {decades.pop() * 10}s')
            t = sum(minutes.get(r, 0) for r in s['ideas'])
            if not s.get('fixed'):
                idea_time.append(t)
            report.append(f'{where}: {len(s["ideas"])} idea ({t} min) + {len(s["instantiations"])} instantiation, {len(fields)} subfields, {len(decades)} decades')
        if idea_time and max(idea_time) > 1.5 * min(idea_time):
            errors.append(f'{idea}: idea-reading times {idea_time} are unbalanced (longest > 1.5x shortest)')
    for rid, where in home.items():
        if len(where) > 1:
            errors.append(f'{rid} appears in {where}')
    for idea in sessions:
        if idea not in ideas:
            errors.append(f'sessions for unknown idea {idea}')

    print('\n'.join(report))
    if notes:
        print('\nNOTES\n' + '\n'.join(notes))
    if errors:
        print('\nERRORS\n' + '\n'.join(errors))
        sys.exit(1)
    print(f'\nOK: {number} sessions across {len(sessions)} ideas')


if __name__ == '__main__':
    main()
