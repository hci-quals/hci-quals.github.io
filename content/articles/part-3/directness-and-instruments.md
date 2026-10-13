---
id: directness-and-instruments
title: "Interfaces feel direct when the gulfs between intention and effect are small."
topic: "Directness and instruments"
part: part-3
keyIdea: part-3-ki2
order: 17
status: draft
label: "Direct manipulation"
origin:
  reading: shneiderman-1983
  year: 1983
  blurb: "In 1983 Ben Shneiderman named direct manipulation: interfaces with visible objects, physical actions and rapid, reversible feedback."
readings:
  - id: shneiderman-1983
    citation: "Shneiderman, “Direct Manipulation: A Step Beyond Programming Languages,” IEEE Computer, 1983"
    authors: "Shneiderman"
    title: "Direct Manipulation: A Step Beyond Programming Languages"
    venue: "IEEE Computer"
    year: 1983
    tag: Core
    description: "Shneiderman names direct manipulation: visible objects, physical actions instead of typed commands, and fast reversible operations. He argues it explains why systems like video games and spreadsheets felt easy to use."
    url: "https://www.cs.umd.edu/users/ben/papers/Shneiderman1983Direct.pdf"
    urlKind: pdf
    doi: "10.1109/MC.1983.1654471"
    verified: true
  - id: hutchins-1985
    citation: "Hutchins, Hollan and Norman, “Direct Manipulation Interfaces,” HCI, 1985"
    authors: "Hutchins, Hollan and Norman"
    title: "Direct Manipulation Interfaces"
    venue: "Human-Computer Interaction"
    year: 1985
    tag: Core
    description: "Hutchins, Hollan, and Norman explain why direct manipulation feels direct, using the ideas of distance and engagement. They also point out its limits, such as difficulty with repetition and abstraction."
    url: "https://vis.csail.mit.edu/classes/6.859/readings/pdfs/Hutchins-DirectManipulationInterfaces.pdf"
    urlKind: pdf
    doi: "10.1207/s15327051hci0104_2"
    verified: true
  - id: beaudouin-lafon-2000
    citation: "Beaudouin-Lafon, “Instrumental Interaction,” CHI 2000"
    authors: "Beaudouin-Lafon"
    title: "Instrumental Interaction: An Interaction Model for Designing Post-WIMP User Interfaces"
    venue: "CHI 2000"
    year: 2000
    tag: Core
    description: "Beaudouin-Lafon proposes that interfaces work through instruments, such as scrollbars or brushes, that sit between the user and the object being changed. The model helps compare and design interfaces beyond windows, icons, and menus."
    url: "https://www.lri.fr/~mbl/papers/CHI2000/paper.pdf"
    urlKind: pdf
    doi: "10.1145/332040.332473"
    verified: true
  - id: beaudouin-lafon-2021
    citation: "Beaudouin-Lafon, Bødker and Mackay, “Generative Theories of Interaction,” TOCHI, 2021"
    authors: "Beaudouin-Lafon, Bødker and Mackay"
    title: "Generative Theories of Interaction"
    venue: "ACM Transactions on Computer-Human Interaction"
    year: 2021
    tag: Modern
    description: "Beaudouin-Lafon, Bødker, and Mackay argue that HCI theories should help generate new designs, not only explain old ones. They use instrumental interaction, activity theory and co-adaptation as worked examples."
    url: "https://hal.science/hal-03434142"
    urlKind: open
    doi: "10.1145/3468505"
    verified: true
---

## Abstract

Direct manipulation is an interaction style in which users act on visible representations of objects and see the results right away. It explains much of why graphical interfaces were easier to learn than command languages, and later work extends it with interaction instruments and theories meant to generate new designs.

> **From the reading list:** Interfaces feel direct when the gulfs between intention and effect are small. Instrumental interaction and generative theories turn this insight into tools for inventing new interfaces, including for LLMs (see Human-AI pairings).

## History

- 1983 — Shneiderman names direct manipulation, citing editors, spreadsheets and video games as examples.
- 1985 — Hutchins, Hollan and Norman explain directness through the gulfs of execution and evaluation.
- 2000 — Beaudouin-Lafon proposes instrumental interaction, where tools mediate between users and domain objects.
- 2021 — Beaudouin-Lafon, Bødker and Mackay argue for generative theories that help invent new interfaces.

## Core concepts

- **Gulfs of execution and evaluation** — The distance between what a person wants to do and what the system lets them do, and between system state and what they perceive.
- **Engagement** — The feeling of acting on objects themselves rather than through an intermediary.
- **Interaction instrument** — A mediator, such as a scrollbar or brush, that turns user actions into commands on objects.
- **Degree of indirection** — The spatial and temporal offset between an instrument and the object it acts on.
- **Generative theory** — A theory whose main purpose is to help create new designs, not only to analyze existing ones.

## Questions, controversies, and new developments

- **Controversies.** Direct manipulation handles repetition, abstraction and large sets poorly, as Hutchins, Hollan and Norman admitted. Some now claim natural-language “intent” interfaces will replace it, while DirectGPT argues the two combine.
- **Responses and new developments.** Instruments, programming by demonstration and hybrid text-plus-pointing interfaces address the limits. Generative theories aim to invent past them.

## Broader connections

- **Influence.** Direct manipulation underlies GUI frameworks, spreadsheets, CAD and live programming environments.

## Discussion questions

- Hutchins, Hollan and Norman list limits of direct manipulation. Which of these do chat-based LLM interfaces solve, and which do they make worse?
- Is ‘directness’ a property of the interface, the user’s skill, or the task?
- How would you test whether a theory is actually generative?
