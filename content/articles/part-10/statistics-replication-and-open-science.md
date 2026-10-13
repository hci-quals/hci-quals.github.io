---
id: statistics-replication-and-open-science
title: "Statistics, replication and open science"
part: part-10
keyIdea: part-10-ki3
order: 64
status: draft
label: "Replication crisis"
origin:
  reading: simmons-2011
  year: 2011
  blurb: "Simmons, Nelson and Simonsohn showed in 2011 that undisclosed flexibility in data collection and analysis can make almost any result appear significant."
readings:
  - id: simmons-2011
    citation: "Simmons, Nelson and Simonsohn, “False-Positive Psychology,” Psychological Science, 2011"
    authors: "Simmons, Nelson and Simonsohn"
    title: "False-Positive Psychology: Undisclosed Flexibility in Data Collection and Analysis Allows Presenting Anything as Significant"
    venue: "Psychological Science 22(11)"
    year: 2011
    tag: Adjacent
    description: "Simmons, Nelson, and Simonsohn show that common flexibility in data collection and analysis can make almost any result significant. The paper launched the reform movement in psychology."
    url: "https://doi.org/10.1177/0956797611417632"
    urlKind: doi
    doi: "10.1177/0956797611417632"
    verified: true
  - id: open-2015
    citation: "Open Science Collaboration, “Estimating the Reproducibility of Psychological Science,” Science, 2015"
    authors: "Open Science Collaboration"
    title: "Estimating the Reproducibility of Psychological Science"
    venue: "Science 349(6251)"
    year: 2015
    tag: Adjacent
    description: "This large team replicated 100 psychology studies and found that fewer than half produced the same result. The paper made the replication crisis concrete."
    url: "https://research.tilburguniversity.edu/en/publications/4b1e6c37-3ee2-414b-b790-66024d631d4a"
    urlKind: open
    doi: "10.1126/science.aac4716"
    verified: true
  - id: kay-2016-b
    citation: "Kay, Nelson and Hekler, “Researcher-Centered Design of Statistics: Why Bayesian Statistics Better Fit the Culture and Incentives of HCI,” CHI 2016"
    authors: "Kay, Nelson and Hekler"
    title: "Researcher-Centered Design of Statistics: Why Bayesian Statistics Better Fit the Culture and Incentives of HCI"
    venue: "CHI 2016"
    year: 2016
    tag: Modern
    description: "Kay, Nelson, and Hekler argue that Bayesian methods suit HCI's small studies and need to build on prior work. They treat statistical methods as designed tools for researchers."
    url: "https://www.mjskay.com/papers/chi_2016_bayes.pdf"
    urlKind: author
    doi: "10.1145/2858036.2858465"
    verified: true
  - id: cockburn-2018
    citation: "Cockburn, Gutwin and Dix, “HARK No More: On the Preregistration of CHI Experiments,” CHI 2018"
    authors: "Cockburn, Gutwin and Dix"
    title: "HARK No More: On the Preregistration of CHI Experiments"
    venue: "CHI 2018"
    year: 2018
    tag: Modern
    description: "Cockburn, Gutwin, and Dix argue that HCI experiments suffer from hypothesizing after results are known and propose preregistration. They discuss how it would fit HCI's publishing culture."
    url: "https://doi.org/10.1145/3173574.3173715"
    urlKind: doi
    doi: "10.1145/3173574.3173715"
    verified: true
---

## Abstract

This idea concerns how flexible analyses and publication incentives produce false findings, and how fields respond with preregistration, better statistics and shared materials. It matters for HCI because the field relies heavily on small experiments and borrowed statistical practice from psychology.

> **From the reading list:** Psychology's replication crisis showed how flexible analyses produce false findings. HCI has started to respond with preregistration, Bayesian methods and shared artifacts.

## History

- 2011 — Simmons, Nelson and Simonsohn describe “researcher degrees of freedom” in false-positive psychology.
- 2015 — The Open Science Collaboration replicates 100 psychology studies, with many failing to reproduce.
- 2016 — Kay, Nelson and Hekler argue Bayesian statistics fit HCI’s culture and incentives better.
- 2018 — Cockburn, Gutwin and Dix propose preregistration of CHI experiments.

## Core concepts

- **Researcher degrees of freedom** — Choices in data collection and analysis that can be tuned to reach significance.
- **HARKing** — Hypothesizing after the results are known and presenting it as a prior prediction.
- **Preregistration** — Publicly recording hypotheses and analysis plans before collecting data.
- **Bayesian estimation** — Reporting uncertainty about effect sizes and updating prior knowledge, rather than relying on p-value thresholds.

## Questions, controversies, and new developments

- **Controversies.** Bayesian versus frequentist methods, and whether preregistration fits exploratory HCI. Hornbæk et al. (CHI 2014) found only about 3% of HCI papers attempt replication.
- **Responses and new developments.** RepliCHI workshops, artifact badges, transparent statistics guidelines and calls for preregistration.

## Broader connections

- **Influence.** These reforms parallel ML reproducibility checklists (NeurIPS) and artifact evaluation in software engineering.

## Discussion questions

- Which of Simmons et al.’s degrees of freedom are most common in HCI studies?
- Does preregistration fit design-oriented or exploratory HCI work?
- Kay et al. argue Bayesian methods suit small studies. What are the risks of choosing priors in a review setting?
