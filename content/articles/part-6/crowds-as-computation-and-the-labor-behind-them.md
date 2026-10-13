---
id: crowds-as-computation-and-the-labor-behind-them
title: "Crowds as computation, and the labor behind them"
part: part-6
keyIdea: part-6-ki2
order: 35
status: draft
label: "Human computation"
origin:
  reading: von-2004
  year: 2004
  blurb: "Luis von Ahn and Laura Dabbish introduced the ESP Game in 2004, showing that people playing a game could label images and launching human computation as a field."
readings:
  - id: von-2004
    citation: "von Ahn and Dabbish, “Labeling Images with a Computer Game,” CHI 2004"
    authors: "von Ahn and Dabbish"
    title: "Labeling Images with a Computer Game"
    venue: "CHI 2004"
    year: 2004
    tag: Core
    description: "Von Ahn and Dabbish present the ESP Game, where pairs of players label images while having fun. The paper showed that games can do useful computation and founded the field of human computation."
    url: "https://www.cs.cmu.edu/~biglou/ESP.pdf"
    urlKind: author
    doi: "10.1145/985692.985733"
    verified: true
  - id: bernstein-2010
    citation: "Bernstein et al., “Soylent: A Word Processor with a Crowd Inside,” UIST 2010"
    authors: "Bernstein et al."
    title: "Soylent: A Word Processor with a Crowd Inside"
    venue: "UIST 2010"
    year: 2010
    tag: Core
    description: "Bernstein and colleagues build Soylent, a word processor that sends editing tasks to crowd workers. Its Find-Fix-Verify pattern breaks writing tasks into small, reliable steps."
    url: "https://people.csail.mit.edu/msbernst/papers/soylent-uist2010.pdf"
    urlKind: author
    doi: "10.1145/1866029.1866078"
    verified: true
  - id: kittur-2013
    citation: "Kittur et al., “The Future of Crowd Work,” CSCW 2013"
    authors: "Kittur et al."
    title: "The Future of Crowd Work"
    venue: "CSCW 2013"
    year: 2013
    tag: Added
    description: "Kittur and colleagues set out a research agenda for crowd work that is fair, skilled and satisfying for workers. The paper frames crowdsourcing as a labor question as well as a technical one."
    url: "https://hci.stanford.edu/publications/2013/CrowdWork/futureofcrowdwork-cscw2013.pdf"
    urlKind: pdf
    doi: "10.1145/2441776.2441923"
    verified: true
  - id: retelny-2014
    citation: "Retelny et al., “Expert Crowdsourcing with Flash Teams,” UIST 2014"
    authors: "Retelny et al."
    title: "Expert Crowdsourcing with Flash Teams"
    venue: "UIST 2014"
    year: 2014
    tag: Core
    description: "Retelny and colleagues assemble teams of expert crowd workers on demand to complete complex projects such as design and animation. The paper shows that crowdsourcing can go beyond simple tasks."
    url: "https://hci.stanford.edu/publications/2014/flashteams/flashteams-uist2014.pdf"
    urlKind: pdf
    doi: "10.1145/2642918.2647409"
    verified: true
  - id: irani-2013
    citation: "Irani and Silberman, “Turkopticon: Interrupting Worker Invisibility in Amazon Mechanical Turk,” CHI 2013"
    authors: "Irani and Silberman"
    title: "Turkopticon: Interrupting Worker Invisibility in Amazon Mechanical Turk"
    venue: "CHI 2013"
    year: 2013
    tag: Core
    description: "Irani and Silberman build Turkopticon, a browser tool that lets Mechanical Turk workers rate employers. The paper exposes worker invisibility in crowdsourcing and treats design as activism."
    url: "https://doi.org/10.1145/2470654.2470742"
    urlKind: doi
    doi: "10.1145/2470654.2470742"
    verified: false
  - id: gray-2019
    citation: "Gray and Suri, Ghost Work, 2019, intro and ch. 1"
    authors: "Gray and Suri"
    title: "Ghost Work: How to Stop Silicon Valley from Building a New Global Underclass"
    venue: "Houghton Mifflin Harcourt"
    year: 2019
    tag: Adjacent
    description: "Gray and Suri study on-demand workers who label data and moderate content behind AI products. They show that much “automation” depends on hidden human labor."
    url: "https://ghostwork.info"
    urlKind: author
    doi: null
    verified: true
---

## Abstract

Crowds as computation is the idea that many people, each doing small tasks, can perform work that algorithms cannot, from image labeling to writing and expert projects. It matters for HCI because it opened new system designs and also exposed the often invisible and underpaid labor behind them.

> **From the reading list:** Crowds can do work no algorithm can, from labeling to writing to expert projects. The workers who do it are often invisible and underpaid.

## History

- 2004 — von Ahn and Dabbish present the ESP Game, turning image labeling into play.
- 2010 — Bernstein et al. build Soylent, embedding crowd workers in a word processor with Find-Fix-Verify.
- 2013 — Irani and Silberman’s Turkopticon and Kittur et al.’s research agenda frame crowd work as a labor issue.
- 2014–2019 — Flash teams coordinate expert crowds; Gray and Suri document hidden “ghost work” behind AI products.

## Core concepts

- **Human computation** — Using human effort as a component in a computational process.
- **Microtask** — A small, self-contained unit of work that can be done quickly by an online worker.
- **Find-Fix-Verify** — A crowd workflow that splits editing into finding problems, fixing them and verifying the fixes.
- **Ghost work** — Hidden human labor that makes automated systems appear to work on their own.

## Questions, controversies, and new developments

- **Controversies.** Hara et al. (CHI 2018) estimated median Mechanical Turk earnings at about $2 an hour. Researchers must weigh data quality and cost against fair pay, and AI training data relies on this labor.
- **Responses and new developments.** Worker-led tools like Dynamo (Salehi et al., CHI 2015) and Turkopticon, plus fair-pay guidelines for researchers.

## Broader connections

- **Influence.** ImageNet was labeled on Mechanical Turk, enabling the deep learning boom. Crowd labor now supplies RLHF data, and human computation powers citizen science such as Foldit and Galaxy Zoo.

## Discussion questions

- Soylent treats workers as a function call. What does that framing reveal and what does it hide?
- Researchers often pay crowd workers below minimum wage. What obligations do HCI researchers have, and who should enforce them?
- Is Turkopticon a research contribution, activism, or both? Does the distinction matter?
