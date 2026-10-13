---
id: navigating-information-larger-than-the-screen
title: "When information exceeds the screen, interfaces must trade detail against context."
topic: "Navigating information larger than the screen"
part: part-3
keyIdea: part-3-ki2
order: 18
status: draft
label: "Focus+context"
origin:
  reading: furnas-1986
  year: 1986
  blurb: "In 1986 George Furnas introduced generalized fisheye views, which show nearby or important items in detail and distant ones in summary."
readings:
  - id: furnas-1986
    citation: "Furnas, “Generalized Fisheye Views,” CHI 1986"
    authors: "Furnas"
    title: "Generalized Fisheye Views"
    venue: "CHI 1986"
    year: 1986
    tag: Core
    description: "Furnas shows how to display large structures by showing nearby details and distant landmarks together, using a degree-of-interest function. The idea is the basis for focus-plus-context displays."
    url: "https://cspages.ucalgary.ca/~saul/581/exer.eps/4furnas86.pdf"
    urlKind: pdf
    doi: "10.1145/22339.22342"
    verified: true
  - id: perlin-1993
    citation: "Perlin and Fox, “Pad: An Alternative Approach to the Computer Interface,” SIGGRAPH 1993"
    authors: "Perlin and Fox"
    title: "Pad: An Alternative Approach to the Computer Interface"
    venue: "SIGGRAPH 1993"
    year: 1993
    tag: Core
    description: "Perlin and Fox present Pad, an interface where users zoom across an infinite flat surface instead of opening windows. The paper started research on zoomable user interfaces."
    url: "https://mrl.cs.nyu.edu/~perlin/pad-siggraph.pdf"
    urlKind: pdf
    doi: "10.1145/166117.166125"
    verified: true
  - id: hill-1992
    citation: "Hill, Hollan, Wroblewski and McCandless, “Edit Wear and Read Wear,” CHI 1992"
    authors: "Hill, Hollan, Wroblewski and McCandless"
    title: "Edit Wear and Read Wear"
    venue: "CHI 1992"
    year: 1992
    tag: Core
    description: "Hill and colleagues record where people read and edit in documents and show this history as marks in the scroll bar. The paper introduced the idea of making interaction history visible to help later users."
    url: "https://doi.org/10.1145/142750.142751"
    urlKind: doi
    doi: "10.1145/142750.142751"
    verified: true
  - id: cockburn-2009
    citation: "Cockburn, Karlson and Bederson, “A Review of Overview+Detail, Zooming, and Focus+Context Interfaces,” ACM Computing Surveys, 2009"
    authors: "Cockburn, Karlson and Bederson"
    title: "A Review of Overview+Detail, Zooming, and Focus+Context Interfaces"
    venue: "ACM Computing Surveys"
    year: 2009
    tag: Modern
    description: "Cockburn, Karlson, and Bederson compare the empirical evidence for the three main strategies for large information spaces. They find that each wins in different tasks and give design guidance."
    url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2008/01/cockburn-ComputingSurveys09.pdf"
    urlKind: pdf
    doi: "10.1145/1456650.1456652"
    verified: true
---

## Abstract

Navigation techniques for large information spaces help people see detail without losing the surrounding context when content exceeds the display. The main approaches are focus+context distortion, zooming, separate overview and detail views, and cues such as interaction history.

> **From the reading list:** When content exceeds the display, designers trade off detail and context through fisheye, zooming and overview techniques, or by making history visible.

## History

- 1986 — Furnas defines a degree-of-interest function for generalized fisheye views.
- 1992 — Hill et al. show document read and edit history in scrollbars (‘edit wear and read wear’).
- 1993 — Perlin and Fox present Pad, a zoomable infinite surface and an early zoomable interface.
- 2009 — Cockburn, Karlson and Bederson review the evidence for overview+detail, zooming and focus+context.

## Core concepts

- **Degree of interest** — A score combining an item’s importance and its distance from the current focus.
- **Focus+context** — Showing detail and context in one view, often by distorting space.
- **Overview+detail** — Showing an overview and a detailed view in separate windows.
- **Semantic zoom** — Zooming that changes what is shown at each level, not just its size.
- **Computational wear** — Visible traces of past use attached to digital documents.

## Questions, controversies, and new developments

- **Controversies.** Fisheyes distort space and make targeting harder (Gutwin, 2002), and zooming can disorient. Cockburn et al.'s review found the empirical record mixed across tasks.
- **Responses and new developments.** Overview-plus-detail is often preferred, and semantic zoom changes what is shown, not just scale.

## Broader connections

- **Influence.** These techniques underlie map zooming, pinch-zoom on phones, code-editor minimaps and focus-plus-context visualization.

## Discussion questions

- Cockburn et al. found mixed results across tasks. What task features should decide which technique to use?
- Edit wear and read wear makes history visible. How does that idea relate to today’s collaborative editors?
- Why have zooming interfaces succeeded on maps and phones but not as general desktops, as Pad proposed?
