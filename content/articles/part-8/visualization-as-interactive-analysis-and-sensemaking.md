---
id: visualization-as-interactive-analysis-and-sensemaking
title: "Visualization is a medium for interactive analysis and sensemaking."
topic: "Visualization as interactive analysis and sensemaking"
part: part-8
keyIdea: part-8-ki2
order: 49
status: draft
label: "Visual analytics"
origin:
  reading: pirolli-2005
  year: 2005
  blurb: "Pirolli and Card (2005) modeled intelligence analysts' sensemaking as foraging and sensemaking loops, identifying leverage points for tools."
readings:
  - id: yi-2007
    citation: "Yi, Kang, Stasko and Jacko, “Toward a Deeper Understanding of the Role of Interaction in Information Visualization,” TVCG, 2007"
    authors: "Yi, Kang, Stasko and Jacko"
    title: "Toward a Deeper Understanding of the Role of Interaction in Information Visualization"
    venue: "IEEE TVCG (InfoVis)"
    year: 2007
    tag: Added
    description: "Yi and colleagues classify visualization interactions by user intent, such as select, explore, filter and connect. The taxonomy complements Heer and Shneiderman's."
    url: "https://doi.org/10.1109/TVCG.2007.70515"
    urlKind: doi
    doi: "10.1109/TVCG.2007.70515"
    verified: false
  - id: heer-2012
    citation: "Heer and Shneiderman, “Interactive Dynamics for Visual Analysis,” CACM, 2012"
    authors: "Heer and Shneiderman"
    title: "Interactive Dynamics for Visual Analysis"
    venue: "Communications of the ACM"
    year: 2012
    tag: Core
    description: "Heer and Shneiderman present a taxonomy of interactive operations in visual analysis, such as filtering, sorting, and coordinating views. The article guides the design of interactive analysis tools."
    url: "https://idl.cs.washington.edu/files/2012-InteractiveDynamics-CACM.pdf"
    urlKind: pdf
    doi: "10.1145/2133806.2133821"
    verified: true
  - id: pirolli-2005
    citation: "Pirolli and Card, “The Sensemaking Process and Leverage Points for Analyst Technology,” 2005"
    authors: "Pirolli and Card"
    title: "The Sensemaking Process and Leverage Points for Analyst Technology as Identified Through Cognitive Task Analysis"
    venue: "Proceedings of the International Conference on Intelligence Analysis"
    year: 2005
    tag: Core
    description: "Pirolli and Card study intelligence analysts and describe sensemaking as two loops: foraging for information and making sense of it. They identify points where tools could help most."
    url: "https://scholar.google.com/scholar?q=%22The%20Sensemaking%20Process%20and%20Leverage%20Points%20for%20Analyst%20Technology%22%20Pirolli%20Card"
    urlKind: search
    doi: null
    verified: false
  - id: kandel-2012
    citation: "Kandel et al., “Enterprise Data Analysis and Visualization: An Interview Study,” TVCG, 2012"
    authors: "Kandel, Paepcke, Hellerstein and Heer"
    title: "Enterprise Data Analysis and Visualization: An Interview Study"
    venue: "IEEE TVCG (VAST)"
    year: 2012
    tag: Core
    description: "Kandel and colleagues interview analysts at companies and find that much of their time goes to finding, cleaning, and preparing data. The study shaped research on data wrangling tools."
    url: "https://idl.cs.washington.edu/files/2012-EnterpriseAnalysisInterviews-VAST.pdf"
    urlKind: pdf
    doi: "10.1109/TVCG.2012.219"
    verified: true
  - id: victor-2011
    citation: "Victor, “Up and Down the Ladder of Abstraction,” 2011"
    authors: "Victor"
    title: "Up and Down the Ladder of Abstraction"
    venue: "worrydream.com (essay)"
    year: 2011
    tag: Core
    description: "Victor's interactive essay shows how to move between concrete examples and general patterns when understanding a system. It argues that interactive visualization can support this kind of thinking."
    url: "https://worrydream.com/LadderOfAbstraction/"
    urlKind: author
    doi: null
    verified: true
---

## Abstract

This idea treats visualization as part of an interactive process of analysis and sensemaking, not as a static picture. It matters for HCI because the value of a visualization system depends on how it supports people's whole workflow, from finding data to building and testing explanations.

> **From the reading list:** Analysis is a loop of foraging and sensemaking supported by interactive operations. Most analyst time goes to preparing data, not viewing it.

## History

- 2005 — Pirolli and Card describe the sensemaking loop from cognitive task analysis of analysts.
- 2007 — Yi et al. propose a taxonomy of interaction intents in information visualization.
- 2011 — Victor's 'Ladder of Abstraction' shows interactive control moving between concrete and abstract views.
- 2012 — Heer and Shneiderman taxonomize interactive dynamics; Kandel et al. interview enterprise analysts about workflows.

## Core concepts

- **Sensemaking loop** — Iterative cycles of gathering information and building representations or hypotheses.
- **Information foraging** — Seeking information by weighing its expected value against the cost of finding it.
- **Interaction intent** — The user's purpose in an interaction, such as select, filter, reconfigure or connect.
- **Ladder of abstraction** — Moving between concrete instances and abstract overviews of a system's behavior.
- **Data wrangling** — Cleaning and reshaping data, which Kandel et al. find takes much of analysts' time.

## Questions, controversies, and new developments

- **Controversies.** Visual analytics benefits are hard to measure, and North (2006) argued task-time measures miss insight. Open-ended exploration risks the garden of forking paths.
- **Responses and new developments.** Insight-based evaluation, provenance tracking and data-wrangling tools address measurement and preparation.

## Broader connections

- **Influence.** Stanford's Wrangler became the company Trifacta. Interactive analysis also motivated database research on low-latency and approximate query processing.

## Discussion questions

- Kandel et al. find that most analyst time goes to data preparation. What does that imply for visualization research priorities?
- Do interaction taxonomies (Yi et al., Heer and Shneiderman) help design new systems or mainly describe existing ones?
- How does Victor's essay compare with the academic papers as a contribution?
