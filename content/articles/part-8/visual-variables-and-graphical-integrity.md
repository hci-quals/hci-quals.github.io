---
id: visual-variables-and-graphical-integrity
title: "Data maps onto a small set of visual variables, and charts should show data honestly."
topic: "Visual variables and graphical integrity"
part: part-8
keyIdea: part-8-ki1
order: 45
status: draft
label: "Visual variables"
origin:
  reading: bertin-1967
  year: 1967
  blurb: "Jacques Bertin's Semiology of Graphics (1967) introduced visual variables, such as position, size, value and hue, as the building blocks of graphic encoding."
readings:
  - id: bertin-1967
    citation: "Bertin, Semiology of Graphics, 1967 (Eng. 1983), Part 1 selections"
    authors: "Bertin"
    title: "Semiology of Graphics: Diagrams, Networks, Maps"
    venue: "Gauthier-Villars (Eng. trans. University of Wisconsin Press 1983; Esri Press reprint 2010)"
    year: 1967
    tag: Core
    description: "Bertin describes visual variables, such as position, size, color, and shape, and how each can encode data. The book is the foundation of visualization theory."
    url: "https://www.esri.com/arcgis-blog/products/product/mapping/semiology-of-graphics-the-reprint-of-a-classic"
    urlKind: publisher
    doi: null
    verified: false
  - id: tufte-1983
    citation: "Tufte, The Visual Display of Quantitative Information, 1983, ch. 1, 4–6"
    authors: "Tufte"
    title: "The Visual Display of Quantitative Information"
    venue: "Graphics Press"
    year: 1983
    tag: Core
    description: "Tufte argues for graphical integrity and against decoration, introducing ideas such as data-ink and chartjunk. The book shaped how designers and scientists make charts."
    url: "https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/"
    urlKind: publisher
    doi: null
    verified: true
  - id: card-1999
    citation: "Card, Mackinlay and Shneiderman, Readings in Information Visualization, 1999, ch. 1"
    authors: "Card, Mackinlay and Shneiderman"
    title: "Readings in Information Visualization: Using Vision to Think"
    venue: "Morgan Kaufmann"
    year: 1999
    tag: Core
    description: "Card, Mackinlay, and Shneiderman define information visualization as using vision to think and present a reference model of the visualization pipeline. The chapter introduced the field's core concepts."
    url: "https://www.cs.umd.edu/~ben/Card-Mackinlay-Shneiderman-Readings%20in%20Information%20Visualization-1999-v2.pdf"
    urlKind: pdf
    doi: null
    verified: true
  - id: shneiderman-1996
    citation: "Shneiderman, “The Eyes Have It,” 1996"
    authors: "Shneiderman"
    title: "The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations"
    venue: "IEEE Symposium on Visual Languages"
    year: 1996
    tag: Core
    description: "Shneiderman offers the mantra “overview first, zoom and filter, then details on demand” and a taxonomy of tasks by data type. The paper is a widely cited guide for designing visualization tools."
    url: "https://doi.org/10.1109/VL.1996.545307"
    urlKind: doi
    doi: "10.1109/VL.1996.545307"
    verified: false
  - id: munzner-2014
    citation: "Munzner, Visualization Analysis and Design, 2014, ch. 1–2, 5"
    authors: "Munzner"
    title: "Visualization Analysis and Design"
    venue: "A K Peters/CRC Press"
    year: 2014
    tag: Modern
    description: "Munzner organizes the field around what data is shown, why, and how, with marks and channels at the center. The textbook is the modern synthesis of Bertin, Cleveland and McGill, and Mackinlay."
    url: "https://www.cs.ubc.ca/~tmm/vadbook/"
    urlKind: author
    doi: "10.1201/b17511"
    verified: true
---

## Abstract

Visual variables are the basic properties of marks, such as position, size, shape and color, used to encode data in a graphic. Together with ideas of graphical integrity, they underpin how HCI and visualization research describe, design and critique charts.

> **From the reading list:** Data can be mapped to a small set of visual channels, and charts should show data honestly without decoration. Visualization's theory starts from these principles.

## History

- 1967 — Bertin publishes Semiology of Graphics, defining visual variables and their properties.
- 1983 — Tufte's The Visual Display of Quantitative Information popularizes graphical integrity, data-ink and chartjunk.
- 1996–1999 — Shneiderman's information-seeking mantra and Card, Mackinlay and Shneiderman's Readings define information visualization as a field.
- 2014 — Munzner's what–why–how framework organizes visualization design around data, tasks and idioms.

## Core concepts

- **Visual variable** — A property of a mark, like position or color, that can encode data.
- **Graphical integrity** — Showing data without distortion, such as keeping visual size proportional to values.
- **Data-ink ratio** — Tufte's proportion of a graphic's ink that presents data rather than decoration.
- **Information-seeking mantra** — Overview first, zoom and filter, then details on demand.
- **Marks and channels** — Munzner's terms for graphical elements and the visual properties that encode data on them.

## Questions, controversies, and new developments

- **Controversies.** Tufte's minimalism was challenged by Bateman et al.'s “Useful Junk?” (CHI 2010), which found embellished charts were remembered better without hurting accuracy. Many of Bertin's rules were stated from expertise, not tested.
- **Responses and new developments.** Memorability studies (Borkin et al., 2013) and Munzner's textbook synthesized the principles with empirical evidence.

## Broader connections

- **Influence.** These principles shaped ggplot2's defaults, newsroom style guides and scientific figure standards.

## Discussion questions

- Tufte's principles are mostly normative. Which have been supported by later empirical work, and which challenged (e.g. chartjunk)?
- Is Shneiderman's mantra a design guideline, a task model or a slogan?
- How do Bertin's and Munzner's frameworks differ in what they treat as the unit of analysis?
