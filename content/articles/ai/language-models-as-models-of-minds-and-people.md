---
id: language-models-as-models-of-minds-and-people
title: "Language models as models of minds and people"
part: ai
keyIdea: ai-ki3
order: 74
status: draft
label: "Generative agents"
origin:
  reading: park-2023
  year: 2023
  blurb: "Park and colleagues at Stanford and Google introduced generative agents in 2023: LLM-driven characters with memory, reflection and planning that produced believable individual and social behavior in a sandbox town."
readings:
  - id: park-2023
    citation: "Park et al., “Generative Agents: Interactive Simulacra of Human Behavior,” UIST 2023"
    authors: "Park et al."
    title: "Generative Agents: Interactive Simulacra of Human Behavior"
    venue: "UIST 2023"
    year: 2023
    tag: Core
    description: "Park and colleagues build agents powered by language models that remember, reflect, and plan, and place 25 of them in a simulated town. The agents produce believable individual and social behavior."
    url: "https://arxiv.org/abs/2304.03442"
    urlKind: arxiv
    doi: null
    verified: true
  - id: argyle-2023
    citation: "Argyle et al., “Out of One, Many: Using Language Models to Simulate Human Samples,” Political Analysis, 2023"
    authors: "Argyle et al."
    title: "Out of One, Many: Using Language Models to Simulate Human Samples"
    venue: "Political Analysis"
    year: 2023
    tag: Adjacent
    description: "Argyle and colleagues condition GPT-3 on demographic backstories and reproduce survey response patterns of US subgroups. The paper started “silicon sampling” in social science."
    url: "https://par.nsf.gov/servlets/purl/10444291"
    urlKind: pdf
    doi: null
    verified: true
  - id: binz-2023
    citation: "Binz and Schulz, “Using Cognitive Psychology to Understand GPT-3,” PNAS, 2023"
    authors: "Binz and Schulz"
    title: "Using Cognitive Psychology to Understand GPT-3"
    venue: "PNAS"
    year: 2023
    tag: Adjacent
    description: "Binz and Schulz give GPT-3 classic tasks from decision-making and reasoning research. It matches people on some and fails on causal reasoning and directed exploration."
    url: "https://pmc.ncbi.nlm.nih.gov/articles/9963545/"
    urlKind: open
    doi: null
    verified: true
  - id: ullman-2023
    citation: "Ullman, “Large Language Models Fail on Trivial Alterations to Theory-of-Mind Tasks,” 2023"
    authors: "Ullman"
    title: "Large Language Models Fail on Trivial Alterations to Theory-of-Mind Tasks"
    venue: "arXiv preprint"
    year: 2023
    tag: Adjacent
    description: "Ullman shows that small changes to false-belief tasks break models that pass the standard versions. The paper argues that passing a test is not evidence of the capacity it was designed for."
    url: "https://arxiv.org/abs/2302.08399v4"
    urlKind: arxiv
    doi: null
    verified: true
  - id: mitchell-2023
    citation: "Mitchell and Krakauer, “The Debate over Understanding in AI's Large Language Models,” PNAS, 2023"
    authors: "Mitchell and Krakauer"
    title: "The Debate over Understanding in AI's Large Language Models"
    venue: "PNAS"
    year: 2023
    tag: Adjacent
    description: "Mitchell and Krakauer lay out both sides of whether LLMs understand language and what kind of understanding is at stake. The paper is a balanced map of the debate."
    url: "https://arxiv.org/abs/2210.13966"
    urlKind: arxiv
    doi: null
    verified: true
  - id: shanahan-2023
    citation: "Shanahan, McDonell and Reynolds, “Role Play with Large Language Models,” Nature, 2023"
    authors: "Shanahan, McDonell and Reynolds"
    title: "Role Play with Large Language Models"
    venue: "Nature"
    year: 2023
    tag: Adjacent
    description: "Shanahan, McDonell, and Reynolds suggest describing a dialogue agent as playing characters rather than having beliefs. The framing offers a way to talk about agents without anthropomorphizing them."
    url: "https://spiral.imperial.ac.uk/entities/publication/76041c82-f0cf-4577-aab4-dce48dfc22f6"
    urlKind: open
    doi: "10.1038/s41586-023-06647-8"
    verified: true
---

## Abstract

Language models as models of minds and people refers to using large language models to simulate human behavior, stand in for survey respondents or serve as subjects in cognitive experiments. For HCI this offers new tools for prototyping social systems and piloting studies, but it also raises questions about validity, anthropomorphism and what, if anything, these models understand.

> **From the reading list:** LLMs can simulate believable people and pass some cognitive tests, which invites both new research tools and anthropomorphism. Cognitive scientists debate what, if anything, they understand.

## History

- 2022 — Argyle et al. and Binz and Schulz post preprints using GPT-3 as 'silicon samples' and as a subject in cognitive psychology tasks.
- 2022–2023 — Mitchell and Krakauer survey the split among researchers over whether LLMs understand language.
- 2023 — Ullman shows small changes to theory-of-mind tasks break apparent LLM success; Park et al. present generative agents at UIST.
- 2023 — Shanahan, McDonell and Reynolds propose role-play as a framing that avoids attributing human traits to dialogue agents.

## Core concepts

- **Believable agent** — A simulated character whose behavior seems plausible to observers, the standard Park et al. use to evaluate generative agents.
- **Algorithmic fidelity** — Argyle et al.'s term for how closely a model conditioned on demographic backstories reproduces the response patterns of real subgroups.
- **Silicon sample** — A set of simulated survey respondents produced by prompting a language model with real participants' characteristics.
- **Role-play framing** — Describing a dialogue agent as playing a character, so folk-psychological terms can be used without claiming the model has a mind.

## Questions, controversies, and new developments

- **Controversies.** Kosinski (PNAS 2024) argued theory of mind emerged in LLMs; Ullman showed trivial changes break it. Silicon samples may misrepresent groups, and treating models as minds feeds anthropomorphism.
- **Responses and new developments.** Adversarially varied test items, cognitive-psychology batteries and role-play framings that avoid attributing beliefs.

## Broader connections

- **Influence.** Cognitive scientists now fit LLM-based models to human data (e.g., Binz et al.'s Centaur, Nature 2025). LLMs also drive social simulation and AI evaluation.

## Discussion questions

- What would count as evidence that a simulated person is valid enough to replace a real participant in an HCI study?
- Ullman argues that failure cases should outweigh average success. How should HCI researchers weigh this when using LLMs to model users?
- Does the role-play framing help designers avoid anthropomorphism, or does it make believable simulation easier to over-trust?
