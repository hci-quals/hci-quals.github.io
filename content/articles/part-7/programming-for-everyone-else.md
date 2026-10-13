---
id: programming-for-everyone-else
title: "Programming for everyone else"
part: part-7
keyIdea: part-7-ki2
order: 41
status: draft
label: "End-user programming"
origin:
  reading: nardi-1993
  year: 1993
  blurb: "Bonnie Nardi's A Small Matter of Programming (1993) framed end-user programming around task-specific languages like spreadsheets and the social context of their use."
readings:
  - id: nardi-1993
    citation: "Nardi, A Small Matter of Programming, 1993, ch. 1–3"
    authors: "Nardi"
    title: "A Small Matter of Programming: Perspectives on End User Computing"
    venue: "MIT Press"
    year: 1993
    tag: Core
    description: "Nardi studies how people use spreadsheets and CAD tools and explains why they succeed as end-user programming. The book argues for task-specific languages built around how people work."
    url: "https://dl.acm.org/doi/10.5555/529410"
    urlKind: publisher
    doi: null
    verified: false
  - id: cypher-1991
    citation: "Cypher, “EAGER: Programming Repetitive Tasks by Example,” CHI 1991"
    authors: "Cypher"
    title: "EAGER: Programming Repetitive Tasks by Example"
    venue: "CHI 1991"
    year: 1991
    tag: Core
    description: "Cypher builds Eager, a system that watches users repeat actions and offers to complete the task for them. It is an early example of programming by demonstration and of an intelligent assistant."
    url: "https://acypher.com/Publications/CHI91/EagerCHI.html"
    urlKind: author
    doi: "10.1145/108844.108850"
    verified: true
  - id: gulwani-2011
    citation: "Gulwani, “Automating String Processing in Spreadsheets Using Input-Output Examples,” POPL 2011"
    authors: "Gulwani"
    title: "Automating String Processing in Spreadsheets Using Input-Output Examples"
    venue: "POPL 2011"
    year: 2011
    tag: Adjacent
    description: "Gulwani presents the synthesis algorithm behind Excel's Flash Fill, which infers string transformations from a few examples. It is the programming-languages work that made programming by example mainstream."
    url: "https://microsoft.com/en-us/research/wp-content/uploads/2016/12/popl11-synthesis.pdf"
    urlKind: pdf
    doi: "10.1145/1926385.1926423"
    verified: true
  - id: ko-2011
    citation: "Ko et al., “The State of the Art in End-User Software Engineering,” ACM Computing Surveys, 2011"
    authors: "Ko et al."
    title: "The State of the Art in End-User Software Engineering"
    venue: "ACM Computing Surveys"
    year: 2011
    tag: Modern
    description: "Ko and colleagues review research on how end users design, test, debug and reuse their programs. They show that end users face software engineering problems without software engineering training."
    url: "https://faculty.washington.edu/ajko/papers/Ko2011EndUserSoftwareEngineering.pdf"
    urlKind: pdf
    doi: "10.1145/1922649.1922658"
    verified: true
---

## Abstract

End-user programming covers the ways people who are not professional programmers create programs to support their own work, for example through spreadsheets, macros or examples. It matters for HCI because end users write far more programs than professional developers, and the tools they use shape both what they can build and how reliable it is.

> **From the reading list:** End users program when languages fit their tasks, and systems can infer programs from examples. Program synthesis made programming by example practical.

## History

- 1991 — Cypher's Eager watches HyperCard users and offers to finish repetitive tasks, an early programming-by-example system.
- 1993 — Nardi argues that task-specific formalisms and collaboration, not natural language, make end-user programming work.
- 2011 — Gulwani's string-program synthesis from examples ships in Excel as Flash Fill.
- 2011 — Ko et al. survey end-user software engineering, including testing, debugging and reuse.

## Core concepts

- **End-user programmer** — Someone who writes programs to support their own goals rather than as their job.
- **Programming by example** — Inferring a general program from demonstrations or input-output examples.
- **Task-specific formalism** — A notation, like a spreadsheet, tied to the concepts of a particular domain.
- **End-user software engineering** — Supporting the quality of end-user programs through testing, debugging and maintenance.
- **Attention investment** — The trade-off users weigh between the effort of programming and the time it will save.

## Questions, controversies, and new developments

- **Controversies.** Most large spreadsheets contain errors (Panko's reviews), and programming by example is ambiguous: many programs fit few examples. Some ask whether LLMs make end-user programming obsolete.
- **Responses and new developments.** End-user software engineering (Ko et al.) adds testing and debugging support. Disambiguation interfaces for synthesis (Mayer et al., UIST 2015) let users pick among candidate programs.

## Broader connections

- **Influence.** Program synthesis became a major PL research area and shipped as Excel's Flash Fill. These ideas also feed robotic process automation and LLM code generation.

## Discussion questions

- Nardi was skeptical that natural language would make programming easy. How do her arguments hold up for LLM-based coding?
- Eager and Flash Fill both infer programs from examples. What made one a lab prototype and the other a widely used feature?
- Should end-user programs be held to software-engineering standards, or is 'good enough' the right target?
