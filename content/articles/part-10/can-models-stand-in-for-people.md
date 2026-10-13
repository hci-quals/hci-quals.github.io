---
id: can-models-stand-in-for-people
title: "Can models stand in for people?"
part: part-10
keyIdea: part-10-ki3
order: 65
status: draft
label: "LLMs as participants"
origin:
  reading: dillion-2023
  year: 2023
  blurb: "In 2023 Dillion et al. and Hämäläinen et al. asked whether language models could replace or supplement human participants in research."
readings:
  - id: dillion-2023
    citation: "Dillion, Tandon, Gu and Gray, “Can AI Language Models Replace Human Participants?” Trends in Cognitive Sciences, 2023"
    authors: "Dillion, Tandon, Gu and Gray"
    title: "Can AI Language Models Replace Human Participants?"
    venue: "Trends in Cognitive Sciences 27(7)"
    year: 2023
    tag: Adjacent
    description: "Dillion and colleagues find that GPT-3.5's moral judgments correlate highly with human ones and discuss when models might substitute for participants. They list conditions and limits for doing so."
    url: "https://doi.org/10.1016/j.tics.2023.04.008"
    urlKind: doi
    doi: "10.1016/j.tics.2023.04.008"
    verified: true
  - id: hamalainen-2023
    citation: "Hämäläinen, Tavast and Kunnari, “Evaluating Large Language Models in Generating Synthetic HCI Research Data,” CHI 2023"
    authors: "Hämäläinen, Tavast and Kunnari"
    title: "Evaluating Large Language Models in Generating Synthetic HCI Research Data: A Case Study"
    venue: "CHI 2023"
    year: 2023
    tag: Modern
    description: "Hämäläinen, Tavast, and Kunnari find that GPT-3 can produce believable answers to open-ended HCI survey questions. They suggest uses for piloting while warning against replacing real data."
    url: "https://dl.acm.org/doi/pdf/10.1145/3544548.3580688"
    urlKind: pdf
    doi: "10.1145/3544548.3580688"
    verified: true
  - id: agnew-2024
    citation: "Agnew et al., “The Illusion of Artificial Inclusion,” CHI 2024"
    authors: "Agnew et al."
    title: "The Illusion of Artificial Inclusion"
    venue: "CHI 2024"
    year: 2024
    tag: Modern
    description: "Agnew and colleagues review proposals to replace participants with LLMs and argue they undermine the values of representation and participation. The paper is the main critique of synthetic participants."
    url: "https://arxiv.org/abs/2401.08572"
    urlKind: arxiv
    doi: "10.1145/3613904.3642703"
    verified: true
---

## Abstract

This idea asks whether large language models can stand in for human participants by generating human-like responses for surveys, interviews or studies. It matters for HCI because simulated participants promise speed and scale, while critics argue they misrepresent the people, especially marginalized groups, that HCI aims to understand.

> **From the reading list:** LLMs can produce human-like responses, tempting researchers to use them as simulated participants. Critics argue this erases the people HCI is meant to understand.

## History

- 2022–2023 — Researchers begin using LLMs to simulate survey and experimental responses.
- 2023 — Dillion et al. weigh when models might replace participants; Hämäläinen et al. test GPT-3 on synthetic HCI interview data.
- 2024 — Agnew et al. argue that substituting models for participants undermines representation and inclusion.

## Core concepts

- **Synthetic participants** — Model-generated responses used in place of data from real people.
- **Algorithmic fidelity** — How closely model outputs reproduce the response patterns of a human population.
- **Artificial inclusion** — Agnew et al.’s term for appearing to include groups through simulation rather than participation.
- **Piloting vs. substitution** — Using models to prepare studies versus using them to replace human data.

## Questions, controversies, and new developments

- **Controversies.** Simulated participants may flatten and misportray identity groups (Wang, Morgenstern and Dickerson, Nature Machine Intelligence 2025). They also skew toward populations overrepresented in training data.
- **Responses and new developments.** Current guidance limits LLM simulations to piloting and hypothesis generation. Benchmarks of simulation fidelity are emerging.

## Broader connections

- **Influence.** This question now spans social science methods, market research and AI evaluation with simulated users.

## Discussion questions

- Hämäläinen et al. found plausible synthetic answers. Is plausibility the right standard for research data?
- Are there study types where model participants are acceptable, such as piloting or stimulus generation?
- How does Agnew et al.’s critique connect to participatory and design justice commitments elsewhere in this course?
