---
id: designing-and-validating-visualization-systems
title: "Designing and validating visualization systems"
part: part-8
keyIdea: part-8-ki2
order: 50
status: draft
label: "Nested model"
origin:
  reading: munzner-2009
  year: 2009
  blurb: "Tamara Munzner (2009) introduced the nested model, which splits visualization design into four levels, each with its own threats to validity."
readings:
  - id: munzner-2009
    citation: "Munzner, “A Nested Model for Visualization Design and Validation,” TVCG, 2009"
    authors: "Munzner"
    title: "A Nested Model for Visualization Design and Validation"
    venue: "IEEE TVCG (InfoVis)"
    year: 2009
    tag: Core
    description: "Munzner divides visualization design into four nested levels, from understanding the domain problem to choosing algorithms. Each level has its own risks and its own ways to validate the work."
    url: "https://www.cs.ubc.ca/labs/imager/tr/2009/NestedModel/NestedModel.pdf"
    urlKind: pdf
    doi: "10.1109/TVCG.2009.111"
    verified: true
  - id: sedlmair-2012
    citation: "Sedlmair, Meyer and Munzner, “Design Study Methodology,” TVCG, 2012"
    authors: "Sedlmair, Meyer and Munzner"
    title: "Design Study Methodology: Reflections from the Trenches and the Stacks"
    venue: "IEEE TVCG (InfoVis)"
    year: 2012
    tag: Core
    description: "Sedlmair, Meyer, and Munzner describe how to conduct design studies, where visualization researchers work closely with domain experts. They give a nine-stage process and list 32 common pitfalls."
    url: "https://www.cs.ubc.ca/labs/imager/tr/2012/dsm/dsm.pdf"
    urlKind: pdf
    doi: "10.1109/TVCG.2012.213"
    verified: true
---

## Abstract

This idea gives visualization researchers structured ways to design systems for real users and to argue that a design works. It matters for HCI because it links design choices to appropriate evaluation methods and makes problem-driven design studies a recognized research contribution.

> **From the reading list:** Visualization design has distinct levels, each with its own threats to validity, and close collaboration with domain experts is a method in itself.

## History

- 2009 — Munzner's nested model defines domain, abstraction, idiom and algorithm levels with matching validation.
- 2012 — Sedlmair, Meyer and Munzner publish a nine-stage design study methodology with pitfalls.
- 2010s — Design studies become a common, accepted paper type at IEEE VIS.

## Core concepts

- **Nested model** — Four levels: domain problem, data/task abstraction, encoding/interaction idiom, and algorithm.
- **Threats to validity** — Ways a design can fail at each level, such as solving the wrong problem.
- **Design study** — Problem-driven research in which researchers work closely with domain experts on a real problem.
- **Transferable insight** — Lessons from a specific design study that apply beyond its domain.

## Questions, controversies, and new developments

- **Controversies.** Critics question how design studies generalize and what makes them rigorous.
- **Responses and new developments.** Meyer and Dykes's “Criteria for Rigor in Visualization Design Study” (TVCG 2020) proposes standards drawn from qualitative research.

## Broader connections

- **Influence.** Design studies produced widely used tools in bioinformatics and other sciences and set norms for domain collaborations.

## Discussion questions

- Why do upstream errors (wrong problem or abstraction) matter more than downstream ones in the nested model?
- What makes a design study generalizable research rather than a consulting project?
- How do these frameworks compare with HCI's broader debates about evaluating systems?
