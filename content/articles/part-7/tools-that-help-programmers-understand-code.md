---
id: tools-that-help-programmers-understand-code
title: "Tools that help programmers understand code"
part: part-7
keyIdea: part-7-ki3
order: 42
status: draft
label: "Interrogative debugging"
origin:
  reading: ko-2004
  year: 2004
  blurb: "Ko and Myers (2004) introduced the Whyline, which lets programmers ask 'why did' and 'why didn't' questions about program output."
readings:
  - id: ko-2004
    citation: "Ko and Myers, “Designing the Whyline,” CHI 2004"
    authors: "Ko and Myers"
    title: "Designing the Whyline: A Debugging Interface for Asking Questions about Program Behavior"
    venue: "CHI 2004"
    year: 2004
    tag: Core
    description: "Ko and Myers build the Whyline, a debugger that lets programmers ask why something did or did not happen. In studies, programmers found bugs much faster with it."
    url: "https://faculty.washington.edu/ajko/papers/Ko2004Whyline.pdf"
    urlKind: pdf
    doi: "10.1145/985692.985712"
    verified: true
  - id: brandt-2010
    citation: "Brandt et al., “Example-Centric Programming: Integrating Web Search into the Development Environment,” CHI 2010"
    authors: "Brandt, Dontcheva, Weskamp and Klemmer"
    title: "Example-Centric Programming: Integrating Web Search into the Development Environment"
    venue: "CHI 2010"
    year: 2010
    tag: Core
    description: "Brandt and colleagues build Blueprint, which brings example code from web search directly into the code editor. The paper shows how programmers learn by finding and adapting examples."
    url: "https://hci.stanford.edu/publications/paper.php?id=138"
    urlKind: author
    doi: "10.1145/1753326.1753402"
    verified: true
---

## Abstract

This idea covers programming tools designed around the questions programmers actually ask, such as why a behavior happened or where to find an example. It matters for HCI because empirical studies of programmers' information needs can lead to tools that make debugging and learning substantially easier.

> **From the reading list:** Debugging and learning are information-seeking problems; tools help by answering programmers' real questions and bringing examples into the editor.

## History

- Late 1990s–2003 — Studies of programmers show debugging is dominated by forming and testing hypotheses about causes.
- 2004 — Ko and Myers present the Whyline for the Alice environment, built from observed 'why' questions.
- 2008–2010 — The Java Whyline extends the approach to larger, real-world programs.
- 2010 — Brandt et al.'s Blueprint brings example-centric web search into the IDE.

## Core concepts

- **Interrogative debugging** — Debugging by asking direct questions about program behavior, answered from execution traces.
- **Why / why-not questions** — Questions about why an output occurred or failed to occur.
- **Information needs** — The questions developers try to answer while working, identified through observation.
- **Opportunistic programming** — Building by finding, adapting and gluing together existing code and examples.

## Questions, controversies, and new developments

- **Controversies.** Many developer-tool studies use students on small tasks, raising validity questions, and promising tools are rarely adopted.
- **Responses and new developments.** Field studies at large companies and work on developers' actual questions (Ko, LaToza and Myers) ground tool design in professional practice.

## Broader connections

- **Influence.** These ideas informed time-travel debugging and program slicing in software engineering, search-integrated IDEs and the design of AI coding assistants.

## Discussion questions

- Both tools start from observing programmers. What did those formative studies reveal that a designer would have missed?
- Has LLM-based assistance made example-centric search tools like Blueprint obsolete, or does it raise the same issues?
- How should we evaluate a debugging tool: speed, correctness, learning, or something else?
