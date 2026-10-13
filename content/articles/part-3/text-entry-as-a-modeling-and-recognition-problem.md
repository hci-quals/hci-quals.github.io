---
id: text-entry-as-a-modeling-and-recognition-problem
title: "Text entry as a modeling and recognition problem"
part: part-3
keyIdea: part-3-ki1
order: 16
status: draft
label: "Shape writing"
origin:
  reading: zhai-2003
  year: 2003
  blurb: "In 2003 Zhai and Kristensson introduced SHARK, which let users write words as gesture shapes on a stylus keyboard, decoded using a lexicon."
readings:
  - id: zhai-2003
    citation: "Zhai and Kristensson, “Shorthand Writing on Stylus Keyboard,” CHI 2003"
    authors: "Zhai and Kristensson"
    title: "Shorthand Writing on Stylus Keyboard"
    venue: "CHI 2003"
    year: 2003
    tag: Core
    description: "Zhai and Kristensson propose writing words by sliding a pen across a keyboard and recognizing the shape of the path. The idea became the swipe keyboards on today's phones."
    url: "https://doi.org/10.1145/642611.642630"
    urlKind: doi
    doi: "10.1145/642611.642630"
    verified: true
  - id: palin-2019
    citation: "Palin, Feit, Kim, Kristensson and Oulasvirta, “How Do People Type on Mobile Devices? Observations from a Study with 37,000 Volunteers,” MobileHCI 2019"
    authors: "Palin, Feit, Kim, Kristensson and Oulasvirta"
    title: "How Do People Type on Mobile Devices? Observations from a Study with 37,000 Volunteers"
    venue: "MobileHCI 2019"
    year: 2019
    tag: Modern
    description: "Palin and colleagues collect typing data from tens of thousands of volunteers and analyze speed, errors and the use of autocorrect and prediction. They find that intelligent text entry helps some typists and slows others."
    url: "https://www.pokristensson.com/pubs/PalinEtAlMobileHCI2019.pdf"
    urlKind: pdf
    doi: "10.1145/3338286.3340120"
    verified: true
---

## Abstract

Text entry research treats typing and writing as a joint problem of human motor behavior and statistical recognition. Methods such as gesture keyboards and autocorrect succeed by combining models of movement with models of language, and large-scale logging now shows how people type in practice.

> **From the reading list:** Text entry methods succeed by exploiting language statistics and motor patterns. Large-scale logging now lets researchers study typing as it happens in the wild.

## History

- 1990s — Soft-keyboard layouts are optimized using Fitts’ law and digraph statistics.
- 2003 — Zhai and Kristensson introduce SHARK shorthand on stylus keyboards, later known as ShapeWriter.
- 2010s — Gesture typing and statistical decoding ship on mainstream smartphone keyboards.
- 2019 — Palin et al. analyze a web typing test from about 37,000 volunteers on mobile devices.

## Core concepts

- **Gesture keyboard** — A keyboard on which users trace a word’s path across keys instead of tapping each letter.
- **Language model** — A statistical model of likely word sequences used to decode noisy input.
- **Words per minute** — The standard speed measure for text entry, normally counting five characters as a word.
- **Uncorrected error rate** — The share of errors left in the final text after the user stops correcting.

## Questions, controversies, and new developments

- **Controversies.** Autocorrect and prediction help some typists and slow others. Predictive text also nudges content toward predictable words (Arnold, Chauncey and Gajos, IUI 2020), and economists still debate whether QWERTY shows harmful lock-in (David, 1985, versus Liebowitz and Margolis).
- **Responses and new developments.** Better decoders reduced errors, and the influence of suggestions became a research topic that feeds AI-mediated communication (Human-AI, Key idea 2).

## Broader connections

- **Influence.** Gboard's next-word prediction was an early large-scale use of federated learning (Hard et al., 2018). Text-entry work also matters for augmentative and alternative communication.

## Discussion questions

- SHARK relies on users moving from visually guided tracing to recall of shapes. What does this say about designing for novices and experts at once?
- Palin et al. found autocorrect and prediction relate differently to speed. How would you test whether these features cause the differences?
- Predictive text can nudge what people write. Is that still a text entry problem, or something else?
