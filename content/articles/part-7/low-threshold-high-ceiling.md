---
id: low-threshold-high-ceiling
title: "Low threshold, high ceiling"
part: part-7
keyIdea: part-7-ki1
order: 38
status: draft
label: "Threshold and ceiling"
origin:
  reading: myers-2000
  year: 2000
  blurb: "Myers, Hudson and Pausch (2000) framed UI tools by their threshold (how hard to start) and ceiling (how much can be built) in a review of past tool successes and failures."
readings:
  - id: myers-2000
    citation: "Myers, Hudson and Pausch, “Past, Present, and Future of User Interface Software Tools,” TOCHI, 2000"
    authors: "Myers, Hudson and Pausch"
    title: "Past, Present, and Future of User Interface Software Tools"
    venue: "ACM Transactions on Computer-Human Interaction (TOCHI)"
    year: 2000
    tag: Core
    description: "Myers, Hudson, and Pausch review which user interface tools succeeded and why. They introduce threshold and ceiling: how hard a tool is to start using and how much it can do."
    url: "https://kilthub.cmu.edu/articles/journal_contribution/Past_Present_and_Future_of_User_Interface_Software_Tools/6470303/1"
    urlKind: open
    doi: "10.1145/344949.344959"
    verified: true
  - id: wobbrock-2007
    citation: "Wobbrock, Wilson and Li, “Gestures without Libraries, Toolkits or Training: A $1 Recognizer for User Interface Prototypes,” UIST 2007"
    authors: "Wobbrock, Wilson and Li"
    title: "Gestures without Libraries, Toolkits or Training: A $1 Recognizer for User Interface Prototypes"
    venue: "UIST 2007"
    year: 2007
    tag: Core
    description: "Wobbrock, Wilson, and Li present a simple gesture recognizer that takes about 100 lines of code and needs no training data. The paper shows how making a technique easy to use spreads its adoption."
    url: "https://depts.washington.edu/acelab/proj/dollar/index.html"
    urlKind: author
    doi: "10.1145/1294211.1294238"
    verified: true
---

## Abstract

Low threshold, high ceiling is the principle that a good tool should be easy for beginners to start with while still letting experts build ambitious things. In HCI it is a standard lens for judging toolkits and programming systems, and it highlights that ease of adoption often decides whether a technique spreads at all.

> **From the reading list:** Successful tools are easy to start with and powerful at the top; making a technique trivially easy to adopt can matter more than making it optimal.

## History

- 1960s–80s — Logo and early UI management systems pursue 'low floor' entry for novices, with mixed success at the top end.
- 2000 — Myers, Hudson and Pausch review decades of UI tools and name threshold and ceiling as key lessons.
- 2007 — Wobbrock, Wilson and Li publish the $1 recognizer, trading some accuracy for a roughly 100-line, dependency-free gesture recognizer.
- 2010s — Follow-ups ($N, $P) raise the ceiling while keeping the threshold low; Processing and p5.js spread creative coding.

## Core concepts

- **Threshold** — How difficult it is to learn a tool and produce a first useful result.
- **Ceiling** — How much a tool can ultimately do once mastered.
- **Path of least resistance** — The designs a tool makes easiest, which users tend to produce.
- **Moving targets** — The risk that a tool is built for platforms or problems that soon become irrelevant.
- **Template matching** — The $1 recognizer's approach of comparing a resampled, normalized stroke against stored examples.

## Questions, controversies, and new developments

- **Controversies.** Toolkit contributions are hard to evaluate, and simple techniques like the $1 recognizer trade accuracy for ease. A low threshold can come with a low ceiling.
- **Responses and new developments.** Ledo et al.'s evaluation strategies (Part X) and follow-up recognizers ($N, $P) that raise the ceiling while keeping the threshold low.

## Broader connections

- **Influence.** Threshold and ceiling are standard terms in UI framework design. Easy-to-adopt toolkits like Processing and p5.js spread creative coding.

## Discussion questions

- Is the $1 recognizer a research contribution because of its accuracy, or because of its adoption? How should we evaluate it?
- Myers et al. found many tools failed by aiming at moving targets. Which current AI or LLM tooling might face the same fate?
- Can a tool have a low threshold and a high ceiling at once, or is there an unavoidable trade-off?
