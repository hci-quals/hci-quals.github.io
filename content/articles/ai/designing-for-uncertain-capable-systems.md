---
id: designing-for-uncertain-capable-systems
title: "AI should augment human agency even though its capabilities are uncertain."
topic: "Designing for uncertain, capable systems"
part: ai
keyIdea: ai-ki2
order: 69
status: draft
label: "Human-AI guidelines"
origin:
  reading: amershi-2019
  year: 2019
  blurb: "Saleema Amershi and colleagues proposed 18 guidelines for human-AI interaction at CHI 2019 and tested them with designers on real products."
readings:
  - id: amershi-2019
    citation: "Amershi et al., “Guidelines for Human-AI Interaction,” CHI 2019"
    authors: "Amershi et al."
    title: "Guidelines for Human-AI Interaction"
    venue: "CHI 2019"
    year: 2019
    tag: Core
    description: "Amershi and colleagues propose 18 guidelines for designing AI systems and test them with designers on real products. The guidelines are widely used in industry."
    url: "https://doi.org/10.1145/3290605.3300233"
    urlKind: doi
    doi: "10.1145/3290605.3300233"
    verified: false
  - id: yang-2020
    citation: "Yang et al., “Re-examining Whether, Why, and How Human-AI Interaction Is Uniquely Difficult to Design,” CHI 2020"
    authors: "Yang, Steinfeld, Rosé and Zimmerman"
    title: "Re-examining Whether, Why, and How Human-AI Interaction Is Uniquely Difficult to Design"
    venue: "CHI 2020"
    year: 2020
    tag: Core
    description: "Yang and colleagues explain why AI is hard to design for: it is uncertain what the AI can do and its outputs can be complex. They offer a framework for when these problems arise."
    url: "https://doi.org/10.1145/3313831.3376301"
    urlKind: open
    doi: "10.1145/3313831.3376301"
    verified: true
  - id: heer-2019
    citation: "Heer, “Agency plus Automation: Designing Artificial Intelligence into Interactive Systems,” PNAS, 2019"
    authors: "Heer"
    title: "Agency plus Automation: Designing Artificial Intelligence into Interactive Systems"
    venue: "PNAS"
    year: 2019
    tag: Core
    description: "Heer argues that AI should augment people rather than replace them, through shared representations that both people and algorithms can edit. He uses examples from data wrangling, visualization, and translation."
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6369770/"
    urlKind: open
    doi: "10.1073/pnas.1807184115"
    verified: true
  - id: satyanarayan-2024
    citation: "Satyanarayan and Jones, “Intelligence as Agency,” 2024"
    authors: "Satyanarayan and Jones"
    title: "Intelligence as Agency: Evaluating the Capacity of Generative AI to Empower or Constrain Human Action"
    venue: "An MIT Exploration of Generative AI (MIT Press)"
    year: 2024
    tag: Core
    description: "Satyanarayan and Jones propose evaluating AI by whether it expands or limits human agency. They argue that this matters more than measuring the system's intelligence."
    url: "https://mit-genai.pubpub.org/pub/94y6e0f8/release/2"
    urlKind: open
    doi: null
    verified: false
---

## Abstract

Designing for AI means designing for systems whose capabilities are uncertain and whose outputs can be complex and changing. HCI work in this area offers design guidelines, explains why AI is harder to prototype than conventional software, and argues that AI should extend human agency rather than replace people.

> **From the reading list:** AI is hard to design because its capabilities are uncertain and its outputs are complex. Design guidance argues for augmenting human agency through shared representations rather than replacing people.

## History

- 2017 — Dove et al. report that UX designers struggle to work with machine learning as a material.
- 2019 — Amershi et al. publish 18 human-AI guidelines; Heer argues for agency plus automation through shared representations.
- 2020 — Yang et al. trace design difficulty to capability uncertainty and output complexity.
- 2024 — Satyanarayan and Jones propose judging AI by whether it expands or limits human agency.

## Core concepts

- **Capability uncertainty** — Designers and users cannot easily know what an AI system can and cannot do.
- **Output complexity** — The range of possible outputs, from simple fixed sets to open-ended adaptive behavior.
- **Shared representation** — A domain representation that both people and algorithms can read and edit.
- **Agency** — People's capacity to form and pursue their own goals with the help of a tool.

## Questions, controversies, and new developments

- **Controversies.** Guidelines are generic and hard to apply, and designers often lack ML literacy (Dove et al., CHI 2017). “Augment, don't replace” conflicts with economic incentives to automate.
- **Responses and new developments.** Methods that treat ML as a design material and LLM-based prototyping tools give designers hands-on access to model behavior.

## Broader connections

- **Influence.** These works shaped industry guidebooks (Google PAIR, Microsoft HAX) and AI product practice. They also appear in AI policy discussions.

## Discussion questions

- Which of the 18 guidelines still hold for open-ended generative models, and which break?
- Is Heer's shared-representation approach possible when the AI's output is free text?
- How would we measure whether a system expands human agency, as Satyanarayan and Jones propose?
