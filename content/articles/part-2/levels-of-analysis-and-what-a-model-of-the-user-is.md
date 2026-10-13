---
id: levels-of-analysis-and-what-a-model-of-the-user-is
title: "A model of the user must say which level of analysis it explains."
topic: "Levels of analysis and what a “model of the user” is"
part: part-2
keyIdea: part-2-ki1
order: 4
status: draft
label: "Levels of analysis"
origin:
  reading: marr-1982
  year: 1982
  blurb: "David Marr's 1982 book Vision proposed that information-processing systems be explained at three levels: computational theory, representation and algorithm, and implementation."
readings:
  - id: marr-1982
    citation: "Marr, Vision, 1982, ch. 1, “The Philosophy and the Approach”"
    authors: "Marr"
    title: "Vision: A Computational Investigation into the Human Representation and Processing of Visual Information"
    venue: "W. H. Freeman (MIT Press reissue 2010)"
    year: 1982
    tag: Adjacent
    description: "Marr argues that an information-processing system must be understood at three levels: computational theory, representation and algorithm, and implementation. The chapter is the standard reference for what counts as explaining a cognitive system."
    url: "https://people.ciirc.cvut.cz/~hlavac/pub/MiscTextForStudents/1982MarrDavidVisionBook.pdf"
    urlKind: pdf
    doi: null
    verified: true
  - id: gallistel-1990
    citation: "Gallistel, The Organization of Learning, 1990, ch. 2, “Representations”"
    authors: "Gallistel"
    title: "The Organization of Learning"
    venue: "MIT Press"
    year: 1990
    tag: Adjacent
    description: "Gallistel defines a representation as a functioning isomorphism between a system in the head and a system in the world. The chapter gives a precise sense of “representation” to set against HCI's looser uses (Key idea 2 below)."
    url: "https://scholar.google.com/scholar?q=Gallistel+The+Organization+of+Learning+1990"
    urlKind: search
    doi: null
    verified: false
  - id: lieder-2020
    citation: "Lieder and Griffiths, “Resource-Rational Analysis: Understanding Human Cognition as the Optimal Use of Limited Computational Resources,” Behavioral and Brain Sciences, 2020"
    authors: "Lieder and Griffiths"
    title: "Resource-Rational Analysis: Understanding Human Cognition as the Optimal Use of Limited Computational Resources"
    venue: "Behavioral and Brain Sciences"
    year: 2020
    tag: Adjacent
    description: "Lieder and Griffiths propose resource-rational analysis: model cognition as the optimal use of limited computational resources. The method links computational-level rational models to algorithmic-level process models."
    url: "https://cocosci.princeton.edu/papers/liederresource.pdf"
    urlKind: pdf
    doi: "10.1017/S0140525X1900061X"
    verified: true
---

## Abstract

Levels of analysis is the idea that a cognitive system can be explained at different levels: what problem it solves and why, what representations and algorithms it uses, and how it is physically built. For HCI it offers a vocabulary for saying what kind of explanation a user model gives, which makes it easier to compare approaches like GOMS, information foraging and computational rationality.

> **From the reading list:** Before choosing a theory, decide what kind of explanation you want: the problem being solved, the representations and algorithm, or the mechanism. Marr's levels give a shared vocabulary for comparing GOMS, foraging, and computational rationality.

## History

- 1982 — Marr's Vision sets out the computational, algorithmic and implementational levels.
- 1990 — Gallistel argues learning is best understood as building representations that are isomorphic to the world.
- 1990s — Connectionists argue the levels are not independent because implementation constrains algorithms.
- 2020 — Lieder and Griffiths propose resource-rational analysis, linking computational-level optimality to algorithmic limits.

## Core concepts

- **Computational level** — What problem the system solves and why that solution is appropriate.
- **Algorithmic/representational level** — How inputs and outputs are represented and what procedure transforms them.
- **Implementation level** — How the representation and algorithm are physically realized.
- **Representation (Gallistel)** — A functioning isomorphism between processes in the mind and aspects of the world they track.
- **Resource rationality** — Explaining behavior as the best use of limited cognitive resources, not as unbounded optimality.

## Questions, controversies, and new developments

- **Controversies.** Connectionists (Churchland and Sejnowski) argued Marr's levels are not independent, since implementation constrains algorithm. Dynamical-systems and enactivist critics question whether representations are needed at all, and Gallistel's strong representationalism is contested in neuroscience.
- **Responses and new developments.** Bayesian modeling works mainly at the computational level, and resource-rational analysis (Lieder and Griffiths, 2020) links it to the algorithmic level. HCI rarely states which level its models address.

## Broader connections

- **Influence.** Marr shaped computer vision, computational neuroscience and cognitive modeling. Level-of-analysis language now frames debates in ML interpretability.

## Discussion questions

- Take a familiar HCI model (Fitts' law, GOMS, a foraging model). At which of Marr's levels does it operate, and what would a model at another level add?
- Does resource-rational analysis really bridge the computational and algorithmic levels, or does it move the hard choices into the cost function?
- Gallistel insists on explicit representations. How does that sit with the situated and embodied critiques elsewhere in this part?
