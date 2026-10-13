---
id: encodings-can-be-ranked-by-perceptual-accuracy
title: "Encodings can be ranked by perceptual accuracy"
part: part-8
keyIdea: part-8-ki1
order: 46
status: draft
label: "Graphical perception"
origin:
  reading: cleveland-1984
  year: 1984
  blurb: "Cleveland and McGill (1984) ran experiments ranking elementary perceptual tasks, showing position judgments are more accurate than length, angle or area."
readings:
  - id: cleveland-1984
    citation: "Cleveland and McGill, “Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods,” JASA, 1984"
    authors: "Cleveland and McGill"
    title: "Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods"
    venue: "Journal of the American Statistical Association"
    year: 1984
    tag: Core
    description: "Cleveland and McGill run experiments on how accurately people read different chart encodings. Position is read most accurately, followed by length, angle, and area."
    url: "https://vis.pku.edu.cn/course/visclass_f25/material/Graphical_perception.pdf"
    urlKind: pdf
    doi: "10.1080/01621459.1984.10478080"
    verified: true
  - id: treisman-1980
    citation: "Treisman and Gelade, “A Feature-Integration Theory of Attention,” Cognitive Psychology, 1980"
    authors: "Treisman and Gelade"
    title: "A Feature-Integration Theory of Attention"
    venue: "Cognitive Psychology"
    year: 1980
    tag: Adjacent
    description: "Treisman and Gelade show that single features pop out in parallel while conjunctions of features require serial search. The theory explains preattentive processing, which visualization design relies on."
    url: "https://www.cs.princeton.edu/courses/archive/spring08/cos598B/Readings/TreismanGelade1980.pdf"
    urlKind: pdf
    doi: "10.1016/0010-0285(80)90005-5"
    verified: true
  - id: healey-2012
    citation: "Healey and Enns, “Attention and Visual Memory in Visualization and Computer Graphics,” TVCG, 2012"
    authors: "Healey and Enns"
    title: "Attention and Visual Memory in Visualization and Computer Graphics"
    venue: "IEEE TVCG"
    year: 2012
    tag: Core
    description: "Healey and Enns review research on visual attention and memory, including preattentive processing and change blindness. They explain how these findings should guide visualization design."
    url: "https://visionlab-psych.sites.olt.ubc.ca/files/2015/06/140_HealeyEnns_IEEE2011.pdf"
    urlKind: pdf
    doi: "10.1109/TVCG.2011.127"
    verified: true
  - id: heer-2010
    citation: "Heer and Bostock, “Crowdsourcing Graphical Perception,” CHI 2010"
    authors: "Heer and Bostock"
    title: "Crowdsourcing Graphical Perception: Using Mechanical Turk to Assess Visualization Design"
    venue: "CHI 2010"
    year: 2010
    tag: Core
    description: "Heer and Bostock replicate classic graphical perception experiments using Mechanical Turk workers and get similar results. The paper showed that crowdsourcing can test visualization designs cheaply."
    url: "https://idl.cs.washington.edu/files/2010-MTurk-CHI.pdf"
    urlKind: pdf
    doi: "10.1145/1753326.1753357"
    verified: true
  - id: brewer-1999
    citation: "Brewer, “Color Use Guidelines for Data Representation,” 1999"
    authors: "Brewer"
    title: "Color Use Guidelines for Data Representation"
    venue: "Proceedings of the Section on Statistical Graphics, American Statistical Association"
    year: 1999
    tag: Core
    description: "Brewer explains how to choose sequential, diverging, and qualitative color schemes depending on the type of data. Her guidelines became the basis for ColorBrewer."
    url: "https://www.personal.psu.edu/cab38/ColorSch/ASApaper.html"
    urlKind: author
    doi: null
    verified: false
  - id: kim-2018
    citation: "Kim and Heer, “Assessing Effects of Task and Data Distribution on the Effectiveness of Visual Encodings,” EuroVis, 2018"
    authors: "Kim and Heer"
    title: "Assessing Effects of Task and Data Distribution on the Effectiveness of Visual Encodings"
    venue: "Computer Graphics Forum (EuroVis)"
    year: 2018
    tag: Core
    description: "Kim and Heer show that the effectiveness of a visual encoding depends on the task and the data distribution, not only on fixed rankings. The study refines the Cleveland and McGill results."
    url: "https://idl.cs.washington.edu/files/2018-TaskDataEffectiveness-EuroVis.pdf"
    urlKind: pdf
    doi: "10.1111/cgf.13409"
    verified: true
  - id: franconeri-2021
    citation: "Franconeri, Padilla, Shah, Zacks and Hullman, “The Science of Visual Data Communication: What Works,” Psychological Science in the Public Interest, 2021"
    authors: "Franconeri, Padilla, Shah, Zacks and Hullman"
    title: "The Science of Visual Data Communication: What Works"
    venue: "Psychological Science in the Public Interest"
    year: 2021
    tag: Modern
    description: "Franconeri and colleagues review perception and cognition research on charts and turn it into evidence-based guidance. The review bridges visualization research and cognitive psychology."
    url: "https://www.psychologicalscience.org/publications/visual-data-communication.html"
    urlKind: open
    doi: "10.1177/15291006211051956"
    verified: true
---

## Abstract

Graphical perception is the study of how accurately people read data from visual encodings. Its central result, that encodings can be ranked by perceptual accuracy, gives visualization designers an empirical basis for choosing charts and is built into automated design tools.

> **From the reading list:** People read some encodings more accurately than others, which grounds design rules. Later work shows the rankings depend on task and data, and that they rest on how visual attention works.

## History

- 1980 — Treisman and Gelade's feature-integration theory explains which visual features are processed preattentively.
- 1984 — Cleveland and McGill rank elementary perceptual tasks from position to area and color.
- 1999–2010 — Brewer's color guidelines and Heer and Bostock's crowdsourced replications extend the evidence.
- 2018–2021 — Kim and Heer show rankings depend on task and data; Franconeri et al. synthesize the science.

## Core concepts

- **Elementary perceptual task** — A basic judgment, such as comparing positions or lengths, used to read a value from a graph.
- **Effectiveness ranking** — An ordering of encodings by how accurately people decode them.
- **Preattentive processing** — Fast, parallel detection of simple features like color or orientation before focused attention.
- **Sequential, diverging, qualitative schemes** — Brewer's color scheme types matched to ordered, two-sided or categorical data.
- **Crowdsourced experiment** — Running perception studies with online workers to replicate and scale lab findings.

## Questions, controversies, and new developments

- **Controversies.** Cleveland and McGill's rankings were generalized far beyond the tasks tested, and the pie-chart debate continues. Crowdsourced perception studies trade control for scale.
- **Responses and new developments.** Task- and data-specific studies (Kim and Heer) and perceptual laws for specific judgments, such as Weber's law for correlation (Harrison et al., 2014).

## Broader connections

- **Influence.** Rankings drive automated design systems (Mackinlay, Draco). Perceptual color research produced uniform colormaps like viridis, now default in Matplotlib.

## Discussion questions

- Kim and Heer find effectiveness depends on task and data distribution. Does this weaken the idea of a single ranking?
- Accuracy of value extraction is the main measure here. What other outcomes (memory, insight, decisions) might matter more?
- How much should vision science (Treisman, Healey and Enns) drive visualization guidelines?
