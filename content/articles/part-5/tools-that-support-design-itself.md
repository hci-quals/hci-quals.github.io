---
id: tools-that-support-design-itself
title: "Design tools should keep work rough and connect design, testing and analysis."
topic: "Tools that support design itself"
part: part-5
keyIdea: part-5-ki2
order: 29
status: draft
label: "Design tools"
origin:
  reading: landay-1995
  year: 1995
  blurb: "Landay and Myers introduced SILK in 1995, a tool for sketching interfaces on a tablet and testing them while still rough, showing that software could support early-stage design."
readings:
  - id: landay-1995
    citation: "Landay and Myers, “Interactive Sketching for the Early Stages of User Interface Design” (SILK), CHI 1995"
    authors: "Landay and Myers"
    title: "Interactive Sketching for the Early Stages of User Interface Design"
    venue: "CHI 1995"
    year: 1995
    tag: Core
    description: "Landay and Myers build SILK, a tool that lets designers sketch interfaces on a tablet and test them while they still look rough. The paper argues that rough prototypes invite better early feedback."
    url: "https://chi1995.chistatic.hosting.acm.org/proceedings/papers/jal1bdy.htm"
    urlKind: open
    doi: "10.1145/223904.223910"
    verified: true
  - id: hartmann-2006
    citation: "Hartmann et al., “Reflective Physical Prototyping through Integrated Design, Test, and Analysis” (d.tools), UIST 2006"
    authors: "Hartmann et al."
    title: "Reflective Physical Prototyping through Integrated Design, Test, and Analysis"
    venue: "UIST 2006"
    year: 2006
    tag: Core
    description: "Hartmann and colleagues build d.tools, a toolkit for prototyping physical devices that connects hardware, software, and video of user tests. The paper shows how tools can support the full design-test-analyze cycle."
    url: "https://people.csail.mit.edu/msbernst/papers/dtools-uist06.pdf"
    urlKind: pdf
    doi: "10.1145/1166253.1166300"
    verified: true
  - id: hartmann-2008
    citation: "Hartmann, Yu, Allison, Yang and Klemmer, “Design as Exploration: Creating Interface Alternatives through Parallel Authoring and Runtime Tuning” (Juxtapose), UIST 2008"
    authors: "Hartmann, Yu, Allison, Yang and Klemmer"
    title: "Design as Exploration: Creating Interface Alternatives through Parallel Authoring and Runtime Tuning"
    venue: "UIST 2008"
    year: 2008
    tag: Added
    description: "Hartmann and colleagues build Juxtapose, which lets designers write and run several code alternatives side by side. It turns the parallel-prototyping finding into a tool."
    url: "https://hci.stanford.edu/publications/2008/juxtapose/juxtapose-uist2008.pdf"
    urlKind: pdf
    doi: "10.1145/1449715.1449732"
    verified: true
---

## Abstract

Design tools research builds software that supports the design process itself, such as sketching, prototyping, testing and comparing alternatives. It matters for HCI because the tools designers use shape which ideas they try, how quickly they iterate, and whether design, testing and analysis stay connected.

> **From the reading list:** Design tools can keep work rough enough to invite feedback and connect design, testing and analysis.

## History

- 1995 — Landay and Myers present SILK, letting designers sketch interfaces and interact with them while they still look rough.
- 2006 — Hartmann et al. present d.tools, linking physical prototypes, software and video of user tests.
- 2008 — Juxtapose lets designers author and run several code alternatives side by side, building on parallel-exploration research.
- 2010s — Low-fidelity tools such as Balsamiq and the Arduino ecosystem carry these ideas into practice, while academic tools remain rarely adopted.

## Core concepts

- **Sketch-based interface** — An interface that accepts rough hand-drawn input and interprets it as a working design.
- **Low fidelity** — A deliberately rough look that signals a design is unfinished and invites feedback.
- **Design-test-analysis cycle** — The loop of building a prototype, testing it with users and analyzing the results to revise it.
- **Parallel authoring** — Editing and running several variants of a design at the same time.

## Questions, controversies, and new developments

- **Controversies.** Research design tools are rarely adopted, and industry tools like Figma move faster than academic prototypes. How to evaluate a design tool is contested (Part X, Key idea 2).
- **Responses and new developments.** Olsen's evaluation criteria and open-source releases help. Some lab tools seeded companies and ecosystems.

## Broader connections

- **Influence.** d.tools fed into the Arduino-era physical prototyping ecosystem. Sketchy prototyping shaped low-fidelity tools such as Balsamiq.

## Discussion questions

- Why do research design tools rarely see adoption, while industry tools such as Figma spread quickly? Is adoption the right measure of success?
- SILK argues that roughness invites feedback. Does that hold when tools can produce polished output instantly?
- How should a design tool be evaluated: by usability, by the designs it produces, or by the processes it enables?
