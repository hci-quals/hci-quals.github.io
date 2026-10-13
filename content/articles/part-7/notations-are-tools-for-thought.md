---
id: notations-are-tools-for-thought
title: "Notations are tools for thought that make some ideas easy to express and others hard."
topic: "Notations are tools for thought"
part: part-7
keyIdea: part-7-ki1
order: 39
status: draft
label: "Cognitive dimensions"
origin:
  reading: green-1996
  year: 1996
  blurb: "Green and Petre (1996) gave the cognitive dimensions framework its fullest statement, building on Iverson's 1980 argument that notation shapes thought."
readings:
  - id: iverson-1980
    citation: "Iverson, “Notation as a Tool of Thought,” Turing Award lecture, 1980"
    authors: "Iverson"
    title: "Notation as a Tool of Thought"
    venue: "Communications of the ACM (Turing Award lecture)"
    year: 1980
    tag: Core
    description: "Iverson argues that a good notation helps people think by making ideas easy to express and manipulate, using APL as an example. The lecture is a classic statement of notation as a thinking tool."
    url: "https://www.jsoftware.com/papers/tottoc.htm"
    urlKind: open
    doi: "10.1145/358896.358899"
    verified: true
  - id: green-1996
    citation: "Green and Petre, “Usability Analysis of Visual Programming Environments: A Cognitive Dimensions Framework,” J. Visual Languages and Computing, 1996"
    authors: "Green and Petre"
    title: "Usability Analysis of Visual Programming Environments: A 'Cognitive Dimensions' Framework"
    venue: "Journal of Visual Languages and Computing"
    year: 1996
    tag: Core
    description: "Green and Petre present cognitive dimensions, such as viscosity and hidden dependencies, for evaluating programming environments and notations. The framework gives designers a shared vocabulary for usability tradeoffs."
    url: "https://doi.org/10.1006/jvlc.1996.0009"
    urlKind: doi
    doi: "10.1006/jvlc.1996.0009"
    verified: false
  - id: blackwell-2003
    citation: "Blackwell and Green, “Notational Systems — the Cognitive Dimensions of Notations Framework,” in Carroll (ed.), HCI Models, Theories, and Frameworks, 2003"
    authors: "Blackwell and Green"
    title: "Notational Systems: The Cognitive Dimensions of Notations Framework"
    venue: "In Carroll (ed.), HCI Models, Theories, and Frameworks, Morgan Kaufmann"
    year: 2003
    tag: Modern
    description: "Blackwell and Green give an updated, practical statement of cognitive dimensions with worked examples beyond programming. It is the most usable single introduction to the framework."
    url: "https://www.cl.cam.ac.uk/~afb21/publications/BlackwellGreen-CDsChapter.pdf"
    urlKind: pdf
    doi: null
    verified: true
---

## Abstract

This idea holds that a notation, such as a programming language, a diagram style or math symbols, shapes which ideas are easy to express, read and change. The cognitive dimensions framework gives HCI a shared vocabulary for discussing these trade-offs in programming systems and other notational designs.

> **From the reading list:** A notation's structure makes some ideas easy and others hard to express and change. Cognitive dimensions give a vocabulary for these tradeoffs.

## History

- 1980 — Iverson's Turing Award lecture argues that a well-designed notation such as APL extends what people can think.
- 1989 — Green first proposes cognitive dimensions as a broad-brush evaluation vocabulary.
- 1996 — Green and Petre apply the framework to visual dataflow languages such as LabVIEW and Prograph.
- 2003 — Blackwell and Green consolidate the framework for a general HCI audience.

## Core concepts

- **Viscosity** — Resistance of a notation to local changes.
- **Premature commitment** — Being forced to make decisions before the needed information is available.
- **Hidden dependencies** — Relationships between parts of a notation that are not visible.
- **Secondary notation** — Extra meaning conveyed through layout, color or grouping outside the formal syntax.
- **Trade-offs** — Improving one dimension usually worsens another, so no notation is best for all activities.

## Questions, controversies, and new developments

- **Controversies.** Evidence that notation shapes thought, a programming version of Sapir-Whorf, is thin. APL's terseness is criticized as unreadable, and Green and Petre found visual languages are not inherently better than text.
- **Responses and new developments.** Empirical PL-usability research tests syntax choices (Stefik and Siebert, 2013), and cognitive dimensions became a shared vocabulary.

## Broader connections

- **Influence.** APL's array model lives on in NumPy and data-science languages. These ideas inform PL and DSL design and notebook interfaces.

## Discussion questions

- Iverson argues for terse, powerful notation; cognitive dimensions warns about hard mental operations. Are these in tension?
- Is cognitive dimensions a theory, a checklist or a discussion tool? What does it predict, if anything?
- Pick a modern notation (spreadsheets, Jupyter, prompts). Which dimensions matter most for it?
