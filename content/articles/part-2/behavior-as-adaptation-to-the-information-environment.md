---
id: behavior-as-adaptation-to-the-information-environment
title: "Behavior is best explained as adaptation to the structure of the information environment."
topic: "Behavior as adaptation to the information environment"
part: part-2
keyIdea: part-2-ki1
order: 6
status: draft
label: "Information foraging"
origin:
  reading: pirolli-1999
  year: 1999
  blurb: "Peter Pirolli and Stuart Card's 1999 Psychological Review paper (building on a 1995 CHI paper) applied optimal foraging theory from ecology to how people seek and gather information."
readings:
  - id: anderson-1990
    citation: "Anderson, The Adaptive Character of Thought, 1990, ch. 1"
    authors: "Anderson"
    title: "The Adaptive Character of Thought"
    venue: "Lawrence Erlbaum Associates"
    year: 1990
    tag: Adjacent
    description: "Anderson proposes rational analysis: explain cognition by asking what would be optimal given the statistical structure of the environment. The method is the theoretical root of information foraging."
    url: "https://www.routledge.com/products/9781138988743"
    urlKind: publisher
    doi: null
    verified: true
  - id: pirolli-1999
    citation: "Pirolli and Card, “Information Foraging,” Psychological Review, 1999"
    authors: "Pirolli and Card"
    title: "Information Foraging"
    venue: "Psychological Review"
    year: 1999
    tag: Core
    description: "Pirolli and Card model people searching for information as animals foraging for food, following information scent and choosing where to spend effort. The theory explains browsing behavior and guides the design of search and navigation."
    url: "https://doi.org/10.1037/0033-295X.106.4.643"
    urlKind: doi
    doi: "10.1037/0033-295X.106.4.643"
    verified: true
  - id: fu-2007
    citation: "Fu and Pirolli, “SNIF-ACT: A Cognitive Model of User Navigation on the World Wide Web,” HCI, 2007"
    authors: "Fu and Pirolli"
    title: "SNIF-ACT: A Cognitive Model of User Navigation on the World Wide Web"
    venue: "Human-Computer Interaction"
    year: 2007
    tag: Modern
    description: "Fu and Pirolli build a cognitive model that predicts which links people click and when they leave a site, using information scent. It turns foraging theory into a runnable simulation of web users."
    url: "https://research.google.com/pubs/archive/25938.pdf"
    urlKind: pdf
    doi: "10.1080/07370020701638806"
    verified: true
---

## Abstract

Information foraging theory explains how people search and browse by treating them as foragers who adapt to the structure and costs of their information environment. It gave HCI a way to predict navigation from the environment rather than from internal mechanism, and its notion of information scent became standard web-usability vocabulary.

> **From the reading list:** Rational analysis explains behavior by the structure of the environment rather than by internal mechanism. Information foraging applies this to how people search and browse.

## History

- 1990 — Anderson's rational analysis explains cognition by the structure of the environment it adapts to.
- 1995 — Pirolli and Card present information foraging at CHI, borrowing models from optimal foraging theory.
- 1999 — The Psychological Review paper states patch, scent and diet models and the ACT-IF process model.
- 2007 — Fu and Pirolli's SNIF-ACT predicts web link choices and site-leaving from information scent.

## Core concepts

- **Rational analysis** — Explaining behavior by working out what would be optimal given goals, environment and computational limits.
- **Information patch** — A cluster of information, such as a web page or search result list, where a forager spends time before moving on.
- **Information scent** — The cues, such as link text, that people use to judge the value of following a path.
- **Information diet** — The choice of which kinds of information sources to pursue and which to ignore.
- **Marginal value theorem** — The rule that a forager should leave a patch when its rate of gain drops below the average rate available elsewhere.

## Questions, controversies, and new developments

- **Controversies.** Critics say rational analysis produces unfalsifiable just-so stories (Jones and Love, “Bayesian Fundamentalism or Enlightenment?” BBS 2011). Foraging assumes known goals and fits aimless exploration poorly.
- **Responses and new developments.** SNIF-ACT validated foraging against real click data. The theory was extended to programmers navigating code (Lawrance, Burnett and colleagues), and resource-rational analysis answers some falsifiability concerns.

## Broader connections

- **Influence.** Information scent became standard web-usability vocabulary. User models in IR evaluation metrics and code-navigation tools in software engineering draw on foraging.

## Discussion questions

- Foraging assumes people know what they are looking for. How well does it handle open-ended exploration or browsing for fun?
- Critics call rational analysis a source of just-so stories. What would count as evidence against information foraging theory?
- How would you adapt information scent to chat-based search, where an AI answers instead of showing links?
