---
id: action-is-situated-not-planned
title: "Action is situated, not planned"
part: part-2
keyIdea: part-2-ki2
order: 7
status: draft
label: "Situated action"
origin:
  reading: suchman-1987
  year: 1987
  blurb: "Lucy Suchman's 1987 book Plans and Situated Actions argued, from studies of people using a photocopier help system, that plans are resources for action rather than programs that determine it."
readings:
  - id: suchman-1987
    citation: "Suchman, Plans and Situated Actions, 1987 (2nd ed. 2007), intro, ch. 5–6"
    authors: "Suchman"
    title: "Plans and Situated Actions: The Problem of Human-Machine Communication"
    venue: "Cambridge University Press (2nd ed. 2007 as Human-Machine Reconfigurations)"
    year: 1987
    tag: Core
    description: "Suchman studies people using a photocopier's help system and argues that action depends on the situation rather than on following a plan. The book challenged AI's plan-based models of people and reshaped HCI and CSCW."
    url: "https://doi.org/10.1017/CBO9780511808418"
    urlKind: doi
    doi: "10.1017/CBO9780511808418"
    verified: true
  - id: winograd-1986
    citation: "Winograd and Flores, Understanding Computers and Cognition, 1986, ch. 1–3, 6, 12"
    authors: "Winograd and Flores"
    title: "Understanding Computers and Cognition: A New Foundation for Design"
    venue: "Ablex"
    year: 1986
    tag: Core
    description: "Winograd and Flores draw on Heidegger to argue that computers cannot understand language the way people do. They propose designing computers to support human action and communication instead of imitating intelligence."
    url: "https://scholar.google.com/scholar?q=Winograd+Flores+Understanding+Computers+and+Cognition+A+New+Foundation+for+Design"
    urlKind: search
    doi: null
    verified: false
  - id: brooks-1991
    citation: "Brooks, “Intelligence without Representation,” Artificial Intelligence, 1991"
    authors: "Brooks"
    title: "Intelligence without Representation"
    venue: "Artificial Intelligence"
    year: 1991
    tag: Adjacent
    description: "Brooks argues that intelligent behavior can emerge from simple layered reactions to the world, without central plans or symbolic models. It is AI's own version of the situated-action critique."
    url: "https://people.csail.mit.edu/brooks/papers/representation.pdf"
    urlKind: pdf
    doi: "10.1016/0004-3702(91)90053-M"
    verified: true
  - id: agre-1987
    citation: "Agre and Chapman, “Pengi: An Implementation of a Theory of Activity,” AAAI 1987"
    authors: "Agre and Chapman"
    title: "Pengi: An Implementation of a Theory of Activity"
    venue: "AAAI 1987"
    year: 1987
    tag: Adjacent
    description: "Agre and Chapman build a game-playing agent that acts through routines and indexical references rather than plans. The paper shows situated action as a working computational design."
    url: "https://cdn.aaai.org/AAAI/1987/AAAI87-048.pdf"
    urlKind: pdf
    doi: null
    verified: true
---

## Abstract

Situated action is the view that people act by responding to the particulars of their circumstances, using plans as resources rather than following them step by step. The critique showed that systems built on plan-following models misread their users, and it helped bring ethnographic methods into HCI and CSCW.

> **From the reading list:** People improvise in response to circumstances, so systems built on plan-following models of users misread them. This critique came from anthropology and philosophy, and AI made a parallel turn toward situated agents.

## History

- 1986 — Winograd and Flores draw on Heidegger to argue that design should attend to breakdowns and conversation, not internal representation.
- 1987 — Agre and Chapman's Pengi plays a video game through routine, indexical activity instead of planning.
- 1987 — Suchman shows a photocopier help system failing because it treats users' actions as executions of plans.
- 1991–1993 — Brooks argues for intelligence without representation; Vera and Simon reply that situated action fits symbolic AI.

## Core concepts

- **Plans as resources** — Plans orient action and help explain it afterward, but do not fully determine what people do.
- **Breakdown** — Winograd and Flores's term for the moment a tool stops being transparent and becomes an object of attention.
- **Indexical-functional representation** — Agre and Chapman's representations like 'the-bee-chasing-me', defined by role in current activity.
- **Subsumption architecture** — Brooks's layered robot control in which simple behaviors couple perception directly to action.
- **Mutual intelligibility** — How people and machines make sense of each other's actions in context, which Suchman found machines do poorly.

## Questions, controversies, and new developments

- **Controversies.** Vera and Simon's “Situated Action: A Symbolic Interpretation” (Cognitive Science, 1993) argued Suchman's findings fit symbolic AI, starting a special-issue debate. Designers complain situated accounts describe but do not predict.
- **Responses and new developments.** CSCW absorbed ethnomethodology as its core method. AI moved to reactive and then hybrid planning architectures, and LLM agents reopen plan-versus-situation questions.

## Broader connections

- **Influence.** Suchman helped found CSCW and workplace studies. Brooks's subsumption architecture led to behavior-based robotics and the Roomba.

## Discussion questions

- Vera and Simon argued situated action can be recast in symbolic terms. Is the disagreement about evidence or about vocabulary?
- Designers say situated accounts describe but do not prescribe. What concrete design guidance can you draw from Suchman's photocopier study?
- LLM agents plan in text and then act. Do Suchman's critiques apply to them, and to the people who use them?
