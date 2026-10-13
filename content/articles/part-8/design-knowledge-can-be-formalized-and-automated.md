---
id: design-knowledge-can-be-formalized-and-automated
title: "Visualization design knowledge can be formalized and automated."
topic: "Design knowledge can be formalized and automated"
part: part-8
keyIdea: part-8-ki2
order: 48
status: draft
label: "Visualization grammars"
origin:
  reading: mackinlay-1986
  year: 1986
  blurb: "Jock Mackinlay's APT (1986) automatically designed graphical presentations by encoding expressiveness and effectiveness criteria."
readings:
  - id: mackinlay-1986
    citation: "Mackinlay, “Automating the Design of Graphical Presentations of Relational Information,” TOG, 1986"
    authors: "Mackinlay"
    title: "Automating the Design of Graphical Presentations of Relational Information"
    venue: "ACM Transactions on Graphics"
    year: 1986
    tag: Core
    description: "Mackinlay builds a system that automatically designs charts, using expressiveness and effectiveness criteria to choose encodings. The paper started automated visualization design."
    url: "https://courses.ischool.berkeley.edu/i247/f05/readings/Mackinlay_APT_TOG86.pdf"
    urlKind: pdf
    doi: "10.1145/22949.22950"
    verified: true
  - id: wilkinson-2005
    citation: "Wilkinson, The Grammar of Graphics, 2005, ch. 1–2"
    authors: "Wilkinson"
    title: "The Grammar of Graphics (2nd ed.)"
    venue: "Springer"
    year: 2005
    tag: Core
    description: "Wilkinson describes charts as combinations of independent parts, such as data, scales, coordinates, and marks. The grammar of graphics underlies ggplot2, Vega-Lite, and many other tools."
    url: "https://doi.org/10.1007/0-387-28695-0"
    urlKind: doi
    doi: "10.1007/0-387-28695-0"
    verified: false
  - id: stolte-2002
    citation: "Stolte, Tang and Hanrahan, “Polaris,” TVCG, 2002"
    authors: "Stolte, Tang and Hanrahan"
    title: "Polaris: A System for Query, Analysis, and Visualization of Multidimensional Relational Databases"
    venue: "IEEE TVCG"
    year: 2002
    tag: Core
    description: "Stolte, Tang, and Hanrahan build Polaris, which lets users build visualizations of databases by dragging fields onto shelves. The system became the commercial product Tableau."
    url: "https://graphics.stanford.edu/papers/polaris_extended/"
    urlKind: author
    doi: "10.1109/2945.981851"
    verified: true
  - id: bostock-2011
    citation: "Bostock, Ogievetsky and Heer, “D3: Data-Driven Documents,” TVCG, 2011"
    authors: "Bostock, Ogievetsky and Heer"
    title: "D3: Data-Driven Documents"
    venue: "IEEE TVCG (InfoVis)"
    year: 2011
    tag: Core
    description: "Bostock, Ogievetsky, and Heer present D3, a library that binds data directly to web page elements. D3 became the most widely used tool for custom web visualization."
    url: "https://idl.cs.washington.edu/files/2011-D3-InfoVis.pdf"
    urlKind: pdf
    doi: "10.1109/TVCG.2011.185"
    verified: true
  - id: satyanarayan-2017
    citation: "Satyanarayan et al., “Vega-Lite: A Grammar of Interactive Graphics,” TVCG, 2017"
    authors: "Satyanarayan, Moritz, Wongsuphasawat and Heer"
    title: "Vega-Lite: A Grammar of Interactive Graphics"
    venue: "IEEE TVCG (InfoVis)"
    year: 2017
    tag: Core
    description: "Satyanarayan and colleagues present Vega-Lite, a concise language for specifying interactive charts. It adds interaction to the grammar of graphics through selections."
    url: "https://idl.cs.washington.edu/files/2017-VegaLite-InfoVis.pdf"
    urlKind: pdf
    doi: "10.1109/TVCG.2016.2599030"
    verified: true
  - id: moritz-2019
    citation: "Moritz et al., “Formalizing Visualization Design Knowledge as Constraints” (Draco), TVCG, 2019"
    authors: "Moritz et al."
    title: "Formalizing Visualization Design Knowledge as Constraints: Actionable and Extensible Models in Draco"
    venue: "IEEE TVCG (InfoVis)"
    year: 2019
    tag: Core
    description: "Moritz and colleagues encode visualization design guidelines as logical constraints and learn their weights from experiments. The resulting system, Draco, recommends effective charts automatically."
    url: "https://idl.cs.washington.edu/files/2019-Draco-InfoVis.pdf"
    urlKind: pdf
    doi: "10.1109/TVCG.2018.2865240"
    verified: true
---

## Abstract

This idea holds that knowledge about good visualization design can be written down as rules, grammars or constraints and then used by software to generate charts. It underlies widely used tools such as Tableau, D3 and Vega-Lite, and current research on automated visualization recommendation.

> **From the reading list:** If effectiveness is understood, charts can be designed by algorithm. Grammars separate charts into composable parts that both people and systems can manipulate.

## History

- 1986 — Mackinlay's APT automates chart design using expressiveness and effectiveness criteria.
- 1999–2005 — Wilkinson's Grammar of Graphics describes charts as compositions of data, scales, geometry and coordinates.
- 2002–2011 — Polaris (later Tableau) and D3 turn formal specifications into practical tools.
- 2017–2019 — Vega-Lite adds a grammar of interaction; Draco encodes design knowledge as weighted constraints.

## Core concepts

- **Expressiveness** — Whether an encoding shows exactly the facts in the data and no more.
- **Effectiveness** — How well an encoding is perceived, based on perceptual rankings.
- **Grammar of graphics** — Describing a chart as composable components rather than a fixed chart type.
- **Declarative specification** — Stating what a visualization should show and letting the system decide how.
- **Constraint-based recommendation** — Generating designs by satisfying hard rules and optimizing weighted soft preferences.

## Questions, controversies, and new developments

- **Controversies.** Recommenders cannot capture analysts' intent or context, and grammars trade expressiveness (D3) for concision (Vega-Lite). Zgraggen et al. (CHI 2018) showed visual exploration produces false discoveries from multiple comparisons.
- **Responses and new developments.** Mixed-initiative recommenders (Voyager) and learned design weights (Draco) keep people in control.

## Broader connections

- **Influence.** Polaris became Tableau, and Vega-Lite powers Altair in Python notebooks. Grammars are now the target format for LLM chart generation.

## Discussion questions

- How do Mackinlay's expressiveness and effectiveness criteria survive in Vega-Lite and Draco?
- D3 is low-level and Vega-Lite is high-level. What is gained and lost at each level of abstraction?
- Can design knowledge be fully formalized, or does it always depend on context that rules miss?
