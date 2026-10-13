---
id: delegation-versus-control-agents-and-mixed-initiative
title: "Delegation versus control: agents and mixed initiative"
part: ai
keyIdea: ai-ki1
order: 67
status: draft
label: "Mixed initiative"
origin:
  reading: horvitz-1999
  year: 1999
  blurb: "Eric Horvitz set out principles for mixed-initiative user interfaces in 1999, in which the system acts only when the expected benefit outweighs the cost of interrupting or being wrong."
readings:
  - id: norman-1994
    citation: "Norman, “How Might People Interact with Agents,” CACM, 1994"
    authors: "Norman"
    title: "How Might People Interact with Agents"
    venue: "Communications of the ACM"
    year: 1994
    tag: Core
    description: "Norman discusses how people might interact with software agents and raises concerns about control, privacy, and false expectations. The article is an early warning about designing intelligent assistants."
    url: "https://dl.acm.org/doi/pdf/10.1145/176789.176796"
    urlKind: pdf
    doi: "10.1145/176789.176796"
    verified: true
  - id: shneiderman-1997
    citation: "Shneiderman and Maes, “Direct Manipulation vs. Interface Agents,” Interactions, 1997"
    authors: "Shneiderman and Maes"
    title: "Direct Manipulation vs. Interface Agents"
    venue: "Interactions"
    year: 1997
    tag: Core
    description: "Shneiderman and Maes debate whether interfaces should give users direct control or delegate tasks to intelligent agents. The debate frames many current discussions about AI assistants."
    url: "https://www.cs.umd.edu/users/ben/papers/Shn-Maes-v4n6-1997.pdf"
    urlKind: author
    doi: "10.1145/267505.267514"
    verified: true
  - id: horvitz-1998
    citation: "Horvitz et al., “The Lumière Project,” UAI 1998"
    authors: "Horvitz et al."
    title: "The Lumière Project: Bayesian User Modeling for Inferring the Goals and Needs of Software Users"
    venue: "UAI 1998"
    year: 1998
    tag: Core
    description: "Horvitz and colleagues use Bayesian models to infer what software users need help with. The research led to the Office Assistant (Clippy), which failed partly because the product ignored the model's caution."
    url: "https://arxiv.org/abs/1301.7385"
    urlKind: arxiv
    doi: null
    verified: true
  - id: horvitz-1999
    citation: "Horvitz, “Principles of Mixed-Initiative User Interfaces,” CHI 1999"
    authors: "Horvitz"
    title: "Principles of Mixed-Initiative User Interfaces"
    venue: "CHI 1999"
    year: 1999
    tag: Core
    description: "Horvitz proposes principles for interfaces where both the user and the system can take initiative. The system should act only when the expected benefit outweighs the cost of interrupting or being wrong."
    url: "https://www.erichorvitz.com/chi99horvitz.pdf"
    urlKind: author
    doi: "10.1145/302979.303030"
    verified: true
  - id: shneiderman-2020
    citation: "Shneiderman, “Human-Centered Artificial Intelligence: Reliable, Safe & Trustworthy,” IJHCI, 2020"
    authors: "Shneiderman"
    title: "Human-Centered Artificial Intelligence: Reliable, Safe & Trustworthy"
    venue: "International Journal of Human-Computer Interaction"
    year: 2020
    tag: Modern
    description: "Shneiderman argues that high automation and high human control are not opposites and can be designed together. The paper updates his side of the 1997 debate for modern AI."
    url: "https://arxiv.org/abs/2002.04087"
    urlKind: arxiv
    doi: "10.1080/10447318.2020.1741118"
    verified: true
  - id: yao-2023
    citation: "Yao et al., “ReAct: Synergizing Reasoning and Acting in Language Models,” ICLR 2023"
    authors: "Yao et al."
    title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    venue: "ICLR 2023"
    year: 2023
    tag: Adjacent
    description: "Yao and colleagues have language models alternate between reasoning steps and actions like searching or clicking. The pattern became the basic loop of LLM agents."
    url: "https://arxiv.org/abs/2210.03629"
    urlKind: arxiv
    doi: null
    verified: true
  - id: sumers-2024
    citation: "Sumers, Yao, Narasimhan and Griffiths, “Cognitive Architectures for Language Agents,” TMLR, 2024"
    authors: "Sumers, Yao, Narasimhan and Griffiths"
    title: "Cognitive Architectures for Language Agents"
    venue: "Transactions on Machine Learning Research"
    year: 2024
    tag: Adjacent
    description: "Sumers and colleagues describe LLM agents using the vocabulary of cognitive architectures: memory, action spaces and decision procedures. The paper connects agent design to cognitive science."
    url: "https://arxiv.org/abs/2309.02427"
    urlKind: arxiv
    doi: null
    verified: true
  - id: kapoor-2024
    citation: "Kapoor, Stroebl, Siegel, Nadgir and Narayanan, “AI Agents That Matter,” 2024"
    authors: "Kapoor, Stroebl, Siegel, Nadgir and Narayanan"
    title: "AI Agents That Matter"
    venue: "arXiv preprint (later TMLR)"
    year: 2024
    tag: Adjacent
    description: "Kapoor and colleagues show that agent benchmarks ignore cost, overfit and don't reflect real use. They argue that agent evaluation needs to consider what people actually need."
    url: "https://arxiv.org/abs/2407.01502"
    urlKind: arxiv
    doi: null
    verified: true
---

## Abstract

Mixed-initiative interaction refers to interfaces in which both the user and an automated agent can take the lead, with the system deciding when to act, ask or stay out of the way. It sits between direct manipulation, where users stay in control, and delegation, where agents act for them. The debate has returned with LLM-based agents that can take actions on their own.

> **From the reading list:** The 1990s debate between direct manipulation and delegated agents is back with LLM agents. Mixed-initiative principles say when a system should act, and agent research in AI now defines what “acting” involves.

## History

- 1994 — Norman raises concerns about control, privacy and false expectations of software agents.
- 1997 — Shneiderman and Maes debate direct manipulation versus interface agents at IUI and CHI.
- 1998–1999 — Horvitz's Lumière project informs the Office Assistant; his mixed-initiative principles follow.
- 2020s — Shneiderman reframes control and automation as separate axes; ReAct and CoALA define LLM agents, and Kapoor et al. critique agent benchmarks.

## Core concepts

- **Interface agent** — Software that acts on the user's behalf, often with some autonomy and learning.
- **Direct manipulation** — Interaction in which users act on visible objects with immediate, reversible feedback.
- **Mixed initiative** — A design in which either the user or the system can start an action, depending on context.
- **Expected-utility action** — Acting, asking or waiting depending on the inferred probability of user goals and the costs of each choice.
- **Reason-act loop** — An LLM agent pattern that alternates reasoning steps with actions such as searching or clicking.

## Questions, controversies, and new developments

- **Controversies.** Clippy became the symbol of failed agents. LLM agents revive questions of reliability, accountability and whether chat is a good interface, and Kapoor et al. show agent benchmarks are often misleading.
- **Responses and new developments.** Mixed-initiative confirmation steps, human-in-the-loop agent designs and cost-aware agent evaluation.

## Broader connections

- **Influence.** This line runs through voice assistants, coding copilots, LLM agent frameworks and multi-agent systems research.

## Discussion questions

- Was Clippy a failure of the mixed-initiative principles themselves or of how they were applied?
- Has the 1997 debate been settled by LLM agents, or have the same arguments returned in new form?
- What would cost-aware agent evaluation, as Kapoor et al. propose, need to include to reflect people's actual use?
