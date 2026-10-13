---
id: exploration-versus-explanation
title: "Exploration versus explanation"
part: part-7
keyIdea: part-7-ki3
order: 43
status: draft
label: "Exploratory programming"
origin:
  reading: kery-2017
  year: 2017
  blurb: "Kery and Myers (2017) characterized exploratory programming, where code is written to discover what to build, and its tool needs."
readings:
  - id: kery-2017
    citation: "Kery and Myers, “Exploring Exploratory Programming,” VL/HCC 2017"
    authors: "Kery and Myers"
    title: "Exploring Exploratory Programming"
    venue: "VL/HCC 2017"
    year: 2017
    tag: Core
    description: "Kery and Myers define exploratory programming, where people write code to discover what to build rather than to implement a known design. They survey how existing tools support or hinder it."
    url: "https://doi.org/10.1109/VLHCC.2017.8103446"
    urlKind: doi
    doi: "10.1109/VLHCC.2017.8103446"
    verified: false
  - id: rule-2018
    citation: "Rule, Tabard and Hollan, “Exploration and Explanation in Computational Notebooks,” CHI 2018"
    authors: "Rule, Tabard and Hollan"
    title: "Exploration and Explanation in Computational Notebooks"
    venue: "CHI 2018"
    year: 2018
    tag: Core
    description: "Rule, Tabard, and Hollan analyze over a million Jupyter notebooks and interview data scientists. Notebooks are messy because people use them both to explore data and to explain results."
    url: "https://par.nsf.gov/servlets/purl/10064423"
    urlKind: pdf
    doi: "10.1145/3173574.3173606"
    verified: true
---

## Abstract

Exploratory programming is writing code to experiment with ideas when the goal is not yet clear, common in data science and creative work. HCI studies of computational notebooks show a tension between messy exploration and the clean explanation needed to share results.

> **From the reading list:** Much programming is exploratory, done to discover what to build. Notebooks show the tension between exploring and communicating results.

## History

- 1990s–2000s — Literate programming and interactive environments (Mathematica, IPython) mix code, output and prose.
- 2017 — Kery and Myers review exploratory programming and its needs for versioning and comparison.
- 2018 — Rule, Tabard and Hollan analyze about a million GitHub notebooks and find little explanatory text.
- Late 2010s — Tools for notebook cleanup, versioning and provenance follow from these studies.

## Core concepts

- **Exploratory programming** — Coding to discover requirements or insights rather than to implement a known specification.
- **Computational notebook** — A document that interleaves executable code, results and narrative text.
- **Exploration–explanation tension** — The conflict between fast, messy iteration and producing a clear account for others.
- **Provenance** — A record of how a result or version of the code came to be.

## Questions, controversies, and new developments

- **Controversies.** Notebooks are criticized for hidden state and poor reproducibility: Pimentel et al. (MSR 2019) found only about a quarter of sampled Jupyter notebooks ran without errors. Some developers argue notebooks encourage bad habits.
- **Responses and new developments.** Dependency-tracking kernels such as nbsafety (Macke et al., VLDB 2021) and versioning tools such as Kery's Verdant address hidden state and lost history.

## Broader connections

- **Influence.** Notebooks reshaped data-science practice and scientific reproducibility debates. They also prompted dataflow and provenance research in databases.

## Discussion questions

- Is the lack of explanation in notebooks a tool problem, an incentive problem or a natural feature of exploration?
- Should notebooks try to support both exploration and explanation, or should these be separate artifacts?
- How do these findings connect to cognitive dimensions such as viscosity and premature commitment?
