---
id: mental-models-and-intuitive-theories
title: "Mental models and intuitive theories"
part: part-2
keyIdea: part-2-ki3
order: 12
status: draft
label: "Mental models"
origin:
  reading: gentner-1983
  year: 1983
  blurb: "Gentner and Stevens's 1983 edited volume Mental Models, including Norman's observations on how people model devices, established mental models as a topic for cognitive science and HCI."
pending:
  - "Micheal and Wendy (Sub substrates)"
  - "Concept Design?"
readings:
  - id: kieras-1984
    citation: "Kieras and Bovair, “The Role of a Mental Model in Learning to Operate a Device,” Cognitive Science, 1984"
    authors: "Kieras and Bovair"
    title: "The Role of a Mental Model in Learning to Operate a Device"
    venue: "Cognitive Science"
    year: 1984
    tag: Added
    description: "Kieras and Bovair show that people who were given a model of how a device worked learned and remembered procedures faster. The study is the classic evidence that accurate mental models help users."
    url: "https://onlinelibrary.wiley.com/doi/pdfdirect/10.1207/s15516709cog0803_3"
    urlKind: pdf
    doi: "10.1207/s15516709cog0803_3"
    verified: true
  - id: gentner-1983
    citation: "Gentner and Stevens (eds.), Mental Models, 1983, intro and Norman's “Some Observations on Mental Models”"
    authors: "Gentner and Stevens (eds.)"
    title: "Mental Models"
    venue: "Lawrence Erlbaum Associates (Psychology Press reissue 2014)"
    year: 1983
    tag: Added
    description: "This volume collects early work on how people model physical and technical systems. Norman's chapter observes that user models are incomplete, unstable and superstitious."
    url: "https://doi.org/10.4324/9781315802725"
    urlKind: publisher
    doi: "10.4324/9781315802725"
    verified: true
  - id: ullman-2020
    citation: "Ullman and Tenenbaum, “Bayesian Models of Conceptual Development: Learning as Building Models of the World,” Annual Review of Developmental Psychology, 2020, sections 1–3"
    authors: "Ullman and Tenenbaum"
    title: "Bayesian Models of Conceptual Development: Learning as Building Models of the World"
    venue: "Annual Review of Developmental Psychology"
    year: 2020
    tag: Adjacent
    description: "Ullman and Tenenbaum describe intuitive theories as generative models that people build and revise from evidence. The framing gives a computational account of what a “mental model” is and how it changes."
    url: "https://dspace.mit.edu/bitstreams/a7b4e210-3a9f-4855-8f71-868ed5c987f2/download"
    urlKind: pdf
    doi: "10.1146/annurev-devpsych-121318-084833"
    verified: true
  - id: lake-2017
    citation: "Lake, Ullman, Tenenbaum and Gershman, “Building Machines That Learn and Think Like People,” Behavioral and Brain Sciences, 2017, sections 1 and 4.1 (+ one commentary)"
    authors: "Lake, Ullman, Tenenbaum and Gershman"
    title: "Building Machines That Learn and Think Like People"
    venue: "Behavioral and Brain Sciences"
    year: 2017
    tag: Adjacent
    description: "Lake and colleagues argue that human learning relies on intuitive physics, intuitive psychology and compositional structure, and that AI should borrow them. The paper and its commentaries frame the structured-models vs. neural-networks debate."
    url: "https://arxiv.org/abs/1604.00289"
    urlKind: arxiv
    doi: "10.1017/S0140525X16001837"
    verified: true
---

## Abstract

A mental model is a person's internal representation of how a system works, which they use to predict its behavior and decide what to do. HCI studies how such models form and fail for devices and now for AI systems, while cognitive science treats them as intuitive theories that are learned and revised.

> **From the reading list:** People reason about devices, and increasingly about AI systems, using internal models that may be incomplete or wrong. Developmental and computational cognitive science treat such models as intuitive theories that can be learned and revised.

## History

- 1983 — Gentner and Stevens's Mental Models; Norman notes people's models are incomplete, unstable and unscientific.
- 1984 — Kieras and Bovair show a device model helps people learn and infer procedures for operating a control panel.
- 2010s — Bayesian cognitive science models intuitive physics and psychology as runnable, probabilistic theories.
- 2017–2020 — Lake et al. argue machines need such models; Ullman and Tenenbaum frame learning as building models of the world.

## Core concepts

- **Mental model** — An internal, often runnable representation of a system used to predict and explain its behavior.
- **Device model** — Knowledge of a device's internal components and how they connect, as opposed to rote procedures.
- **Intuitive theory** — An abstract, causal framework, such as intuitive physics or psychology, that structures everyday reasoning.
- **Learning as model building** — The view that learning revises structured, often program-like models of the world rather than just tuning associations.
- **Conceptual model** — Norman's term for the designer's intended model, which the system image should convey to users.

## Questions, controversies, and new developments

- **Controversies.** “Mental model” is used loosely: runnable simulation, causal theory or rule set. Whether intuitive physics is mental simulation (Ullman et al.) or perception-like (Bai et al.'s “core perception”) is contested, as is structured versus neural modeling (the DeepMind commentary on Lake et al.).
- **Responses and new developments.** Bayesian program induction learned handwritten characters from one example (Lake et al., Science 2015). Meta-learned neural networks then showed human-like compositional generalization (Lake and Baroni, Nature 2023), blurring the dichotomy.

## Broader connections

- **Influence.** These ideas inform explainable AI, model-based RL and world models, and robotics. HCI applies them to how people model AI systems (Human-AI, Key idea 2).

## Discussion questions

- 'Mental model' can mean a simulation, a causal theory or a set of rules. Which meaning does each reading use, and does the difference matter for design?
- What mental models do people form of a chat-based AI system, and how could the interface make a more accurate one easier to build?
- Kieras and Bovair found a device model helps only when it supports inferring procedures. What is the equivalent condition for explanations of AI behavior?
