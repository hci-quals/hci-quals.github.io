---
id: context-is-something-systems-sense-and-people-make
title: "Context is something systems sense and people make"
part: part-4
keyIdea: part-4-ki1
order: 21
status: draft
label: "Context awareness"
origin:
  reading: dey-2001
  year: 2001
  blurb: "In 2001 Anind Dey defined context as any information that characterizes the situation of an entity relevant to a user’s interaction with an application."
readings:
  - id: dey-2001
    citation: "Dey, “Understanding and Using Context,” Personal and Ubiquitous Computing, 2001"
    authors: "Dey"
    title: "Understanding and Using Context"
    venue: "Personal and Ubiquitous Computing"
    year: 2001
    tag: Core
    description: "Dey defines context as any information that describes a person's or object's situation, and context-aware systems as those that use it. The definitions became standard in ubiquitous computing."
    url: "https://doi.org/10.1184/r1/6470603"
    urlKind: open
    doi: "10.1007/s007790170019"
    verified: true
  - id: dourish-2004
    citation: "Dourish, “What We Talk About When We Talk About Context,” Personal and Ubiquitous Computing, 2004"
    authors: "Dourish"
    title: "What We Talk About When We Talk About Context"
    venue: "Personal and Ubiquitous Computing"
    year: 2004
    tag: Added
    description: "Dourish contrasts the engineering view of context as stable information with a social view of context as arising from interaction. The paper is the direct counterpoint to Dey."
    url: "https://www.dourish.com/publications/2004/PUC2004-context.pdf"
    urlKind: pdf
    doi: "10.1007/s00779-003-0253-8"
    verified: true
  - id: bellotti-2002
    citation: "Bellotti et al., “Making Sense of Sensing Systems: Five Questions for Designers and Researchers,” CHI 2002"
    authors: "Bellotti et al."
    title: "Making Sense of Sensing Systems: Five Questions for Designers and Researchers"
    venue: "CHI 2002"
    year: 2002
    tag: Core
    description: "Bellotti and colleagues adapt Norman's gulfs to systems without screens and pose five questions, such as how a user addresses a system and how they know it is listening. The questions guide the design of sensing systems."
    url: "https://doi.org/10.1145/503376.503450"
    urlKind: doi
    doi: "10.1145/503376.503450"
    verified: true
---

## Abstract

Context awareness is the ability of a system to sense information about a user’s situation, such as location or activity, and adapt to it. The idea matters for mobile and ubiquitous computing, and it is contested: engineers treat context as data to be sensed, while social scientists argue context is produced by people through activity.

> **From the reading list:** Engineering defines context as sensed information; social science argues context is produced through activity. Sensing systems also need their own versions of Norman's gulfs.

## History

- 1994 — Schilit and colleagues introduce context-aware computing for mobile systems.
- 2001 — Dey offers a widely used definition of context and a toolkit architecture for building context-aware applications.
- 2002 — Bellotti et al. adapt Norman’s gulfs into five questions for sensing systems.
- 2004 — Dourish argues context is an interactional problem, not a representational one.

## Core concepts

- **Context** — In Dey’s definition, information characterizing the situation of a person, place or object relevant to an interaction.
- **Context-aware system** — A system that uses context to provide relevant information or services.
- **Representational vs. interactional view** — Dourish’s contrast between context as stable data and context as something produced in activity.
- **Address and alignment** — Two of Bellotti et al.’s questions: how a user directs input to a sensing system, and how they know it is attending.

## Questions, controversies, and new developments

- **Controversies.** Dey treats context as data a system can sense; Dourish argues context is produced through interaction and can't be fixed in advance. Context-aware systems often guess wrong and annoy users.
- **Responses and new developments.** Work on intelligibility and control (Lim and Dey, 2009) lets users see and correct a system's context inferences, an early form of explainability.

## Broader connections

- **Influence.** These ideas shaped mobile OS features such as location services and activity recognition. They also fed context-aware recommender systems and XAI.

## Discussion questions

- Can Dourish’s interactional view of context be built into a system, or is it only a critique?
- Apply Bellotti et al.’s five questions to a smart speaker. Which are answered poorly?
- When a context-aware system guesses wrong, who should be able to correct it, and how?
