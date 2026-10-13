---
id: inspection-based-evaluation
title: "Experts can find many usability problems cheaply, but their judgments vary."
topic: "Inspection-based evaluation"
part: part-5
keyIdea: part-5-ki3
order: 31
status: draft
label: "Heuristic evaluation"
origin:
  reading: nielsen-1990
  year: 1990
  blurb: "Nielsen and Molich introduced heuristic evaluation in 1990, showing that a few evaluators checking an interface against a short list of principles can find many usability problems."
readings:
  - id: nielsen-1990
    citation: "Nielsen and Molich, “Heuristic Evaluation of User Interfaces,” CHI 1990"
    authors: "Nielsen and Molich"
    title: "Heuristic Evaluation of User Interfaces"
    venue: "CHI 1990"
    year: 1990
    tag: Core
    description: "Nielsen and Molich show that a few evaluators checking an interface against simple principles can find most usability problems. Heuristic evaluation became one of the most common usability methods."
    url: "https://doi.org/10.1145/97243.97281"
    urlKind: doi
    doi: "10.1145/97243.97281"
    verified: false
  - id: gray-1998
    citation: "Gray and Salzman, “Damaged Merchandise? A Review of Experiments That Compare Usability Evaluation Methods,” HCI, 1998"
    authors: "Gray and Salzman"
    title: "Damaged Merchandise? A Review of Experiments That Compare Usability Evaluation Methods"
    venue: "Human-Computer Interaction"
    year: 1998
    tag: Added
    description: "Gray and Salzman show that influential studies comparing usability methods had serious validity problems. The paper is a lasting lesson in methodological rigor for HCI."
    url: "https://doi.org/10.1207/s15327051hci1303_2"
    urlKind: doi
    doi: "10.1207/s15327051hci1303_2"
    verified: true
  - id: hertzum-2001
    citation: "Hertzum and Jacobsen, “The Evaluator Effect: A Chilling Fact About Usability Evaluation Methods,” IJHCI, 2001"
    authors: "Hertzum and Jacobsen"
    title: "The Evaluator Effect: A Chilling Fact About Usability Evaluation Methods"
    venue: "International Journal of Human-Computer Interaction"
    year: 2001
    tag: Added
    description: "Hertzum and Jacobsen find that different evaluators using the same method on the same interface identify very different problems. The result limits how much any single evaluation can be trusted."
    url: "https://doi.org/10.1207/S15327590IJHC1304_05"
    urlKind: doi
    doi: "10.1207/S15327590IJHC1304_05"
    verified: true
---

## Abstract

Inspection-based evaluation is a family of usability methods in which experts examine an interface against principles or task walkthroughs, without testing with users. It matters for HCI because these methods are cheap and widely used, yet research shows that evaluators disagree and that many studies comparing methods are flawed.

> **From the reading list:** Experts can find many usability problems cheaply, but evaluators disagree and comparisons of methods are often flawed.

## History

- 1990 — Nielsen and Molich introduce heuristic evaluation as a discount usability method.
- 1993 — Nielsen and Landauer’s model gives rise to the claim that about five evaluators or users find most problems.
- 1998 — Gray and Salzman show that influential method-comparison experiments have serious validity problems.
- 2001 — Hertzum and Jacobsen document the evaluator effect: evaluators using the same method find very different problems.

## Core concepts

- **Heuristic** — A broad usability principle used as a checklist item, such as visibility of system status.
- **Discount usability** — Cheap, fast usability methods meant to be practical for everyday development.
- **Evaluator effect** — The finding that different evaluators applying the same method to the same interface report different problems.
- **Validity** — Whether a study’s design supports the conclusions drawn from it.

## Questions, controversies, and new developments

- **Controversies.** The “five users are enough” claim (Nielsen and Landauer, 1993) was challenged by studies showing many problems missed (Spool and Schroeder, 2001; Faulkner, 2003). Evaluator effects and flawed method comparisons undermine trust in discount methods.
- **Responses and new developments.** Guidance now recommends larger samples for high-stakes work and combining inspection with user testing.

## Broader connections

- **Influence.** Heuristic evaluation spread to software QA and accessibility audits. LLM-based automated usability checks are now being built on it.

## Discussion questions

- If evaluators disagree so much, what is a heuristic evaluation actually measuring?
- Which of Gray and Salzman’s validity concerns apply to evaluation methods in recent CHI papers?
- Could LLM-based usability checks reduce the evaluator effect, or would they hide it?
