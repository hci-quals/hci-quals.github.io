---
id: the-user-as-an-information-processor
title: "The user as an information processor"
part: part-2
keyIdea: part-2-ki1
order: 5
status: draft
label: "Model Human Processor"
origin:
  reading: card-1983
  year: 1983
  blurb: "Card, Moran and Newell's 1983 book modeled the user as an information processor with perceptual, cognitive and motor stages, yielding the Model Human Processor and GOMS."
readings:
  - id: card-1983
    citation: "Card, Moran and Newell, The Psychology of Human-Computer Interaction, 1983, ch. 2, 5, 8"
    authors: "Card, Moran and Newell"
    title: "The Psychology of Human-Computer Interaction"
    venue: "Lawrence Erlbaum Associates"
    year: 1983
    tag: Core
    description: "Card, Moran, and Newell model the user as an information processor with perception, memory, and motor stages, and introduce GOMS and the Keystroke-Level Model. These models let designers predict how long expert users take to complete tasks."
    url: "https://dl.acm.org/doi/abs/10.5555/578027"
    urlKind: publisher
    doi: null
    verified: false
  - id: norman-1986
    citation: "Norman, “Cognitive Engineering,” in User Centered System Design, 1986"
    authors: "Norman"
    title: "Cognitive Engineering"
    venue: "In User Centered System Design (Norman and Draper, eds.), Lawrence Erlbaum Associates"
    year: 1986
    tag: Core
    description: "Norman describes seven stages of action and the gulfs of execution and evaluation, the gaps between what users want and what a system lets them do or shows them. These ideas remain basic vocabulary in interface design."
    url: "https://www.routledge.com/User-Centered-System-Design-New-Perspectives-on-Human-computer-Interaction/Norman-Draper/p/book/9780898598728"
    urlKind: publisher
    doi: null
    verified: true
  - id: norman-1988
    citation: "Norman, The Design of Everyday Things, 1988/2013, ch. 1, 3–5"
    authors: "Norman"
    title: "The Design of Everyday Things"
    venue: "Basic Books (originally The Psychology of Everyday Things, 1988; revised 2013)"
    year: 1988
    tag: Core
    description: "Norman explains why everyday objects confuse people, introducing affordances, signifiers, mappings, feedback, and the difference between slips and mistakes. The book made user-centered design known far beyond HCI."
    url: "https://jnd.org/books/the-design-of-everyday-things-revised-and-expanded-edition/"
    urlKind: author
    doi: null
    verified: false
  - id: gershman-2015
    citation: "Gershman, Horvitz and Tenenbaum, “Computational Rationality: A Converging Paradigm for Intelligence in Brains, Minds, and Machines,” Science, 2015"
    authors: "Gershman, Horvitz and Tenenbaum"
    title: "Computational Rationality: A Converging Paradigm for Intelligence in Brains, Minds, and Machines"
    venue: "Science"
    year: 2015
    tag: Adjacent
    description: "Gershman, Horvitz, and Tenenbaum argue that minds and machines both act by computing approximately optimal actions under limited resources. The paper unifies bounded rationality across cognitive science, neuroscience and AI."
    url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/273.full_.pdf"
    urlKind: pdf
    doi: "10.1126/science.aac6076"
    verified: true
  - id: oulasvirta-2022
    citation: "Oulasvirta, Jokinen and Howes, “Computational Rationality as a Theory of Interaction,” CHI 2022"
    authors: "Oulasvirta, Jokinen and Howes"
    title: "Computational Rationality as a Theory of Interaction"
    venue: "CHI 2022"
    year: 2022
    tag: Modern
    description: "Oulasvirta, Jokinen, and Howes model users as agents who choose the best strategy given their cognitive limits and the interface. The paper is the modern successor to GOMS, replacing fixed procedures with adaptation."
    url: "https://jyx.jyu.fi/handle/123456789/80999"
    urlKind: open
    doi: "10.1145/3491102.3517739"
    verified: true
---

## Abstract

The information-processing view models the user as a system of perceptual, cognitive and motor stages with measurable capacities and timings. It let HCI predict expert task times and locate where interfaces break down, and it has returned in recent work that treats users as bounded-optimal agents adapting to an interface.

> **From the reading list:** If you model perception, memory and motor stages, you can predict expert performance and locate where interfaces break down. This tradition has returned as computational rationality: users as bounded-optimal agents adapting to the interface.

## History

- 1983 — Card, Moran and Newell publish the Model Human Processor, GOMS and the keystroke-level model.
- 1986 — Norman describes the gulfs of execution and evaluation and the seven stages of action.
- 1988 — Norman's Design of Everyday Things brings these ideas to designers; the 2013 edition adds signifiers.
- 2015–2022 — Computational rationality reframes users as agents optimizing under cognitive limits.

## Core concepts

- **Model Human Processor** — A simplified architecture of perceptual, cognitive and motor processors with memories and cycle times.
- **GOMS** — Analyzing a task into Goals, Operators, Methods and Selection rules to predict expert performance.
- **Gulfs of execution and evaluation** — The gaps between what a user wants to do and what the system allows, and between system state and what the user can perceive.
- **Seven stages of action** — Norman's cycle from forming a goal through executing an action to evaluating the outcome.
- **Computational rationality** — Explaining behavior as the best policy available given a person's cognitive bounds and the task environment.

## Questions, controversies, and new developments

- **Controversies.** GOMS predicts only expert, error-free performance and ignores learning and context; Bannon's “From Human Factors to Human Actors” (1991) made this critique central. Norman's use of “affordance” departs from Gibson's, and computational rationality's optimality assumption is debated.
- **Responses and new developments.** CogTool (John et al., 2004) made keystroke-level modeling practical. Computational rationality and reinforcement-learning user models add adaptation and learning that GOMS lacked.

## Broader connections

- **Influence.** Project Ernestine (Gray, John and Atwood, 1993) used GOMS to show a new phone workstation would slow operators, saving a telecom firm millions. The tradition feeds cognitive architectures (ACT-R, EPIC) and user simulation in RL and recommender systems.

## Discussion questions

- GOMS predicts error-free expert performance. Is that a narrow special case or a useful baseline for design?
- What does computational rationality add to the Model Human Processor beyond learning and adaptation? Is it a new theory or a new modeling method?
- Norman's stages describe a single user and a device. Where does that framing break down for AI systems that act on their own?
