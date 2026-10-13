---
id: design-problems-are-ill-structured
title: "Design problems are ill-structured"
part: part-5
keyIdea: part-5-ki1
order: 26
status: draft
label: "Wicked problems"
origin:
  reading: rittel-1973
  year: 1973
  blurb: "Horst Rittel and Melvin Webber introduced “wicked problems” in 1973 to describe planning problems that have no definitive formulation, no stopping rule, and no single right answer."
readings:
  - id: simon-1969
    citation: "Simon, “The Science of Design,” The Sciences of the Artificial, 1969, ch. 5"
    authors: "Simon"
    title: "The Sciences of the Artificial (ch. 5, “The Science of Design”)"
    venue: "MIT Press"
    year: 1969
    tag: Core
    description: "Simon defines design as changing existing situations into preferred ones and argues that design can be studied scientifically. He introduces satisficing and the idea of a science of the artificial."
    url: "https://archive.org/details/sciencesofartifi00simo"
    urlKind: archive
    doi: null
    verified: true
  - id: rittel-1973
    citation: "Rittel and Webber, “Dilemmas in a General Theory of Planning,” 1973"
    authors: "Rittel and Webber"
    title: "Dilemmas in a General Theory of Planning"
    venue: "Policy Sciences"
    year: 1973
    tag: Core
    description: "Rittel and Webber describe wicked problems, which have no clear definition, no final solution, and no right answer. The paper challenges the idea that design and planning can be fully systematic."
    url: "https://escholarship.org/content/qt01v4t1c9/qt01v4t1c9.pdf"
    urlKind: pdf
    doi: "10.1007/BF01405730"
    verified: true
  - id: schon-1983
    citation: "Schön, The Reflective Practitioner, 1983, ch. 2–3"
    authors: "Schön"
    title: "The Reflective Practitioner: How Professionals Think in Action (ch. 2–3)"
    venue: "Basic Books"
    year: 1983
    tag: Core
    description: "Schön studies architects and other professionals and argues that they think by acting and reflecting on the results. He calls this reflection-in-action and describes design as a conversation with materials."
    url: "https://archive.org/details/reflectivepracti00scho"
    urlKind: archive
    doi: null
    verified: true
  - id: cross-1982
    citation: "Cross, “Designerly Ways of Knowing,” Design Studies, 1982"
    authors: "Cross"
    title: "Designerly Ways of Knowing"
    venue: "Design Studies"
    year: 1982
    tag: Adjacent
    description: "Cross argues that design is a third culture of knowledge, alongside the sciences and humanities, with its own methods and values. The paper founded design studies as an academic field."
    url: "https://doi.org/10.1016/0142-694X(82)90040-0"
    urlKind: doi
    doi: "10.1016/0142-694X(82)90040-0"
    verified: true
  - id: dorst-2011
    citation: "Dorst, “The Core of ‘Design Thinking’ and Its Application,” Design Studies, 2011"
    authors: "Dorst"
    title: "The Core of ‘Design Thinking’ and Its Application"
    venue: "Design Studies"
    year: 2011
    tag: Modern
    description: "Dorst identifies framing, the creation of a new way of seeing a problem, as the core of expert design reasoning. The paper gives a precise account of what “design thinking” means."
    url: "https://doi.org/10.1016/j.destud.2011.07.006"
    urlKind: doi
    doi: "10.1016/j.destud.2011.07.006"
    verified: true
  - id: alexander-1977
    citation: "Alexander, A Pattern Language, 1977, intro plus ten patterns"
    authors: "Alexander, Ishikawa and Silverstein"
    title: "A Pattern Language: Towns, Buildings, Construction"
    venue: "Oxford University Press"
    year: 1977
    tag: Core
    description: "Alexander presents 253 patterns for building towns and homes, each a reusable solution to a recurring problem. The book inspired design patterns in software engineering and interaction design."
    url: "https://scholar.google.com/scholar?q=%22A+Pattern+Language%3A+Towns%2C+Buildings%2C+Construction%22+Alexander"
    urlKind: search
    doi: null
    verified: false
---

## Abstract

Ill-structured, or wicked, design problems are problems whose goals and constraints are not fixed in advance and shift as solutions are tried. The idea matters for HCI because interface and system design rarely starts from a complete specification, so design methods must support framing and reframing the problem, not only solving it.

> **From the reading list:** Design changes situations into preferred ones, but the problem itself shifts as solutions are tried. Designers manage this by reflecting in action and by framing.

## History

- 1969 — Simon defines design as changing existing situations into preferred ones and proposes a science of the artificial built on satisficing.
- 1973 — Rittel and Webber name “wicked problems,” arguing that planning problems resist systematic, linear solution methods.
- 1982–1983 — Cross argues design is its own way of knowing; Schön describes reflection-in-action as a conversation with the situation.
- 2011 — Dorst identifies framing as the core of expert design reasoning, giving “design thinking” a more precise meaning.

## Core concepts

- **Satisficing** — Choosing a solution that is good enough given limited time and information, rather than searching for an optimum.
- **Wicked problem** — A problem with no definitive formulation, no stopping rule, and solutions that are better or worse rather than true or false.
- **Reflection-in-action** — Thinking about a situation while acting in it, adjusting the framing based on how the materials respond.
- **Framing** — Constructing a new way of seeing a problem that makes a solution approach possible.
- **Pattern** — A named, reusable solution to a recurring problem in a given context, as in Alexander’s pattern language.

## Questions, controversies, and new developments

- **Controversies.** Simon's rational problem-solving view and Schön's reflective practice are rival paradigms (Dorst and Dijkhuis, 1995). “Design thinking” is criticized as a commodified buzzword, and Alexander told OOPSLA in 1996 that software patterns dropped his moral aims.
- **Responses and new developments.** Design cognition studies (Cross, Dorst) examine how experts actually frame problems. Dorst's account of framing gives design thinking a more precise meaning.

## Broader connections

- **Influence.** Alexander inspired software design patterns (Gamma et al., 1994) and, via patterns, wikis and agile methods. Wicked problems became standard in requirements engineering and policy.

## Discussion questions

- Simon and Schön are often read as rival paradigms. Can an HCI design process be both rational problem solving and reflective practice, and where does each fit?
- Which of Rittel and Webber’s ten properties of wicked problems apply to designing software interfaces, and which do not?
- Alexander criticized software patterns for dropping his moral aims. What would it mean for an HCI pattern library to carry values as well as solutions?
