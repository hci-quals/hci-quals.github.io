---
id: automation-shifts-work-instead-of-removing-it
title: "Automation shifts work instead of removing it"
part: ai
keyIdea: ai-ki1
order: 66
status: draft
label: "Ironies of automation"
origin:
  reading: bainbridge-1983
  year: 1983
  blurb: "Lisanne Bainbridge introduced the ironies of automation in 1983, arguing that automating most of a job leaves operators the hardest parts with less practice."
readings:
  - id: bainbridge-1983
    citation: "Bainbridge, “Ironies of Automation,” Automatica, 1983"
    authors: "Bainbridge"
    title: "Ironies of Automation"
    venue: "Automatica"
    year: 1983
    tag: Core
    description: "Bainbridge argues that automating most of a job leaves operators with the hardest parts and less practice to handle them. Her “ironies of automation” remain central to human-automation research."
    url: "https://doi.org/10.1016/0005-1098(83)90046-8"
    urlKind: doi
    doi: "10.1016/0005-1098(83)90046-8"
    verified: false
  - id: endsley-1995
    citation: "Endsley, “Toward a Theory of Situation Awareness in Dynamic Systems,” Human Factors, 1995"
    authors: "Endsley"
    title: "Toward a Theory of Situation Awareness in Dynamic Systems"
    venue: "Human Factors"
    year: 1995
    tag: Adjacent
    description: "Endsley defines situation awareness as perceiving, understanding and projecting the state of a system, and shows how automation can erode it. The model is standard in aviation and process control."
    url: "https://doi.org/10.1518/001872095779049543"
    urlKind: doi
    doi: "10.1518/001872095779049543"
    verified: true
  - id: parasuraman-1997
    citation: "Parasuraman and Riley, “Humans and Automation: Use, Misuse, Disuse, Abuse,” Human Factors, 1997"
    authors: "Parasuraman and Riley"
    title: "Humans and Automation: Use, Misuse, Disuse, Abuse"
    venue: "Human Factors"
    year: 1997
    tag: Core
    description: "Parasuraman and Riley define use, misuse, disuse, and abuse of automation. The paper explains why people rely on automation too much or too little."
    url: "https://doi.org/10.1518/001872097778543886"
    urlKind: doi
    doi: "10.1518/001872097778543886"
    verified: false
  - id: parasuraman-2000
    citation: "Parasuraman, Sheridan and Wickens, “A Model for Types and Levels of Human Interaction with Automation,” IEEE Trans. SMC-A, 2000"
    authors: "Parasuraman, Sheridan and Wickens"
    title: "A Model for Types and Levels of Human Interaction with Automation"
    venue: "IEEE Transactions on Systems, Man, and Cybernetics, Part A"
    year: 2000
    tag: Adjacent
    description: "Parasuraman, Sheridan, and Wickens describe automation along four stages (information acquisition, analysis, decision, action), each with its own level. The model is the standard way to specify how much a system automates."
    url: "https://doi.org/10.1109/3468.844354"
    urlKind: doi
    doi: "10.1109/3468.844354"
    verified: true
  - id: lee-2004
    citation: "Lee and See, “Trust in Automation: Designing for Appropriate Reliance,” Human Factors, 2004"
    authors: "Lee and See"
    title: "Trust in Automation: Designing for Appropriate Reliance"
    venue: "Human Factors"
    year: 2004
    tag: Core
    description: "Lee and See review research on trust in automation and argue that trust should match how reliable a system actually is. The paper defines calibrated trust and guides the design of reliable systems."
    url: "https://csel.eng.ohio-state.edu/productions/intel/research/trust/Lee%20%26%20See%20Trust%20Review.pdf"
    urlKind: pdf
    doi: "10.1518/hfes.46.1.50_30392"
    verified: true
---

## Abstract

The ironies of automation are the ways that automating most of a task can add to, rather than remove, the problems people face, leaving them with monitoring work and rare, difficult interventions. Human factors research built on this idea with concepts such as situation awareness, levels of automation and calibrated trust. These concepts are now used to ask how people should oversee AI systems that do most of the work.

> **From the reading list:** Automating most of a task leaves people the hardest parts, less practice and a monitoring job. Good reliance means trust that matches actual reliability, and human factors gives a vocabulary of automation levels and situation awareness.

## History

- 1983 — Bainbridge describes the ironies of automation in industrial process control.
- 1995 — Endsley defines situation awareness as perception, comprehension and projection, and shows how automation can erode it.
- 1997–2000 — Parasuraman and colleagues classify use, misuse, disuse and abuse, then propose stages and levels of automation.
- 2004 — Lee and See argue that trust should be calibrated to a system's actual reliability.

## Core concepts

- **Ironies of automation** — The observation that automation leaves people the hardest, rarest tasks while reducing the practice they need to do them.
- **Situation awareness** — An operator's perception of system state, understanding of what it means and projection of what will happen next.
- **Misuse and disuse** — Relying on automation when it should not be trusted, or ignoring it when it should be.
- **Levels of automation** — A scale, applied to each stage of information processing, from fully manual to fully automatic.
- **Calibrated trust** — Trust that matches how reliable a system actually is in a given context.

## Questions, controversies, and new developments

- **Controversies.** Kaber (2018) argued levels-of-automation frameworks rest on untested assumptions and are too linear. Trust questionnaires often disagree with actual reliance behavior, and it is debated whether the ironies apply to generative AI.
- **Responses and new developments.** Teaming frameworks (Klein et al., “Ten Challenges for Making Automation a Team Player,” 2004) and Simkute et al.'s application to generative AI.

## Broader connections

- **Influence.** These ideas shaped aviation, autonomous-vehicle levels (SAE J3016) and robotics. AI safety's “scalable oversight” problem restates the monitoring irony.

## Discussion questions

- Which of Bainbridge's ironies apply to people supervising generative AI, and which depend on the physical process-control setting?
- Kaber criticized levels-of-automation frameworks as too linear. Does the four-stage model of Parasuraman, Sheridan and Wickens address this?
- How could we measure calibrated trust through behavior rather than questionnaires?
