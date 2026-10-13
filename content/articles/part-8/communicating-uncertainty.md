---
id: communicating-uncertainty
title: "Communicating uncertainty"
part: part-8
keyIdea: part-8-ki3
order: 52
status: draft
label: "Uncertainty visualization"
origin:
  reading: kay-2016
  year: 2016
  blurb: "Kay et al. (2016) designed and tested uncertainty displays for bus arrival predictions, introducing quantile dotplots for everyday users."
readings:
  - id: gigerenzer-1995
    citation: "Gigerenzer and Hoffrage, “How to Improve Bayesian Reasoning without Instruction: Frequency Formats,” Psychological Review, 1995"
    authors: "Gigerenzer and Hoffrage"
    title: "How to Improve Bayesian Reasoning without Instruction: Frequency Formats"
    venue: "Psychological Review"
    year: 1995
    tag: Adjacent
    description: "Gigerenzer and Hoffrage show that people solve Bayesian problems far better when information is given as natural frequencies rather than probabilities. The finding underlies frequency-based uncertainty visualizations like quantile dotplots."
    url: "http://hdl.handle.net/21.11116/0000-0000-B798-6"
    urlKind: open
    doi: "10.1037/0033-295X.102.4.684"
    verified: true
  - id: kay-2016
    citation: "Kay et al., “When (ish) Is My Bus?” CHI 2016"
    authors: "Kay, Kola, Hullman and Munson"
    title: "When (ish) Is My Bus? User-centered Visualizations of Uncertainty in Everyday, Mobile Predictive Systems"
    venue: "CHI 2016"
    year: 2016
    tag: Core
    description: "Kay and colleagues design visualizations of bus arrival uncertainty and find that quantile dotplots help people make better decisions. The paper shows how to communicate uncertainty to non-experts."
    url: "https://idl.cs.washington.edu/files/2016-WhenIsMyBus-CHI.pdf"
    urlKind: pdf
    doi: "10.1145/2858036.2858558"
    verified: true
  - id: hullman-2019
    citation: "Hullman et al., “In Pursuit of Error: A Survey of Uncertainty Visualization Evaluation,” TVCG, 2019"
    authors: "Hullman, Qiao, Correll, Kale and Kay"
    title: "In Pursuit of Error: A Survey of Uncertainty Visualization Evaluation"
    venue: "IEEE TVCG (InfoVis)"
    year: 2019
    tag: Core
    description: "Hullman and colleagues survey how researchers evaluate uncertainty visualizations. They find inconsistent methods and propose ways to evaluate them more rigorously."
    url: "https://idl.cs.washington.edu/files/2019-UncertaintyEval-InfoVis.pdf"
    urlKind: pdf
    doi: "10.1109/TVCG.2018.2864889"
    verified: true
---

## Abstract

Uncertainty visualization concerns showing the range or probability of possible values rather than a single estimate. It matters for HCI because many systems make predictions, and how uncertainty is shown affects people's understanding and decisions.

> **From the reading list:** People reason poorly with probabilities, but some formats, like frequencies, make uncertainty usable. Evaluation of uncertainty displays is still inconsistent.

## History

- 1995 — Gigerenzer and Hoffrage show people reason about probabilities better with natural frequency formats.
- 2016 — Kay et al. introduce quantile dotplots for bus arrival times, drawing on the frequency-framing idea.
- 2019 — Hullman et al. survey uncertainty visualization evaluations and find inconsistent methods and measures.

## Core concepts

- **Frequency format** — Expressing probability as counts (e.g. 3 out of 10) rather than percentages.
- **Quantile dotplot** — A plot showing a distribution as a small number of equally likely outcomes, drawn as dots.
- **Bayesian reasoning** — Updating beliefs about probabilities in light of new evidence.
- **Decision-based evaluation** — Measuring how well a visualization supports decisions, not just value reading.

## Questions, controversies, and new developments

- **Controversies.** Gigerenzer's frequency-format claims challenged Kahneman and Tversky's heuristics-and-biases program. Many researchers misread error bars (Belia et al., 2005), and some fear showing uncertainty lowers trust.
- **Responses and new developments.** Hypothetical outcome plots (Hullman, Resnick and Adar, 2015) and decision-based evaluations.

## Broader connections

- **Influence.** These ideas shaped election and weather forecast graphics and COVID dashboards. They also inform how ML calibration and uncertainty are shown.

## Discussion questions

- Why might frequency framing help people reason about uncertainty, and does the evidence carry over to visual displays?
- Hullman et al. criticize how uncertainty visualizations are evaluated. What would a better study look like?
- Should systems ever hide uncertainty to keep displays simple?
