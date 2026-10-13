---
id: whose-values-whose-voices
title: "Whose values, whose voices"
part: ai
keyIdea: ai-ki2
order: 71
status: draft
label: "Pluralistic AI"
origin:
  reading: alkhatib-2019
  year: 2019
  blurb: "Ali Alkhatib and Michael Bernstein introduced street-level algorithms in 2019, comparing algorithms to bureaucrats who apply policy to individual cases but cannot use discretion on new ones."
readings:
  - id: alkhatib-2019
    citation: "Alkhatib and Bernstein, “Street-Level Algorithms,” CHI 2019"
    authors: "Alkhatib and Bernstein"
    title: "Street-Level Algorithms: A Theory at the Gaps Between Policy and Decisions"
    venue: "CHI 2019"
    year: 2019
    tag: Core
    description: "Alkhatib and Bernstein compare algorithms to street-level bureaucrats who apply policy to individual cases. Algorithms fail at new cases because, unlike people, they cannot use judgment."
    url: "https://doi.org/10.1145/3290605.3300760"
    urlKind: doi
    doi: "10.1145/3290605.3300760"
    verified: false
  - id: holstein-2019
    citation: "Holstein et al., “Improving Fairness in Machine Learning Systems: What Do Industry Practitioners Need?” CHI 2019"
    authors: "Holstein et al."
    title: "Improving Fairness in Machine Learning Systems: What Do Industry Practitioners Need?"
    venue: "CHI 2019"
    year: 2019
    tag: Core
    description: "Holstein and colleagues interview and survey machine learning practitioners about fairness. They find large gaps between research tools and what practitioners need."
    url: "https://arxiv.org/abs/1812.05239"
    urlKind: arxiv
    doi: "10.1145/3290605.3300830"
    verified: true
  - id: hancock-2020
    citation: "Hancock, Naaman and Levy, “AI-Mediated Communication,” JCMC, 2020"
    authors: "Hancock, Naaman and Levy"
    title: "AI-Mediated Communication: Definition, Research Agenda, and Ethical Considerations"
    venue: "Journal of Computer-Mediated Communication"
    year: 2020
    tag: Core
    description: "Hancock, Naaman, and Levy define AI-mediated communication, where AI changes, generates, or augments messages between people. They set out a research agenda and ethical questions."
    url: "https://doi.org/10.1093/jcmc/zmz022"
    urlKind: doi
    doi: "10.1093/jcmc/zmz022"
    verified: false
  - id: bommasani-2021
    citation: "Bommasani et al., “On the Opportunities and Risks of Foundation Models,” 2021, sections 1 and 5"
    authors: "Bommasani et al."
    title: "On the Opportunities and Risks of Foundation Models (sections 1 and 5)"
    venue: "arXiv preprint (Stanford CRFM)"
    year: 2021
    tag: Adjacent
    description: "Bommasani and colleagues name foundation models and analyze how one model adapted to many uses spreads both capability and harm. The report frames the societal questions HCI now studies."
    url: "https://arxiv.org/abs/2108.07258"
    urlKind: arxiv
    doi: null
    verified: true
  - id: bender-2021
    citation: "Bender et al., “On the Dangers of Stochastic Parrots,” FAccT 2021"
    authors: "Bender, Gebru, McMillan-Major and Shmitchell"
    title: "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?"
    venue: "FAccT 2021"
    year: 2021
    tag: Core
    description: "Bender and colleagues warn about the costs of large language models, including environmental impact, biased training data, and the illusion of understanding. The paper is a central critique of scaling language models."
    url: "https://doi.org/10.1145/3442188.3445922"
    urlKind: open
    doi: "10.1145/3442188.3445922"
    verified: true
  - id: gordon-2022
    citation: "Gordon et al., “Jury Learning: Integrating Dissenting Voices into Machine Learning Models,” CHI 2022"
    authors: "Gordon et al."
    title: "Jury Learning: Integrating Dissenting Voices into Machine Learning Models"
    venue: "CHI 2022"
    year: 2022
    tag: Core
    description: "Gordon and colleagues build jury learning, which lets practitioners choose whose labels an AI model learns from. The approach makes the choice of whose views count explicit."
    url: "https://arxiv.org/abs/2202.02950"
    urlKind: arxiv
    doi: "10.1145/3491102.3502004"
    verified: true
  - id: sorensen-2024
    citation: "Sorensen et al., “A Roadmap to Pluralistic Alignment,” ICML 2024"
    authors: "Sorensen et al."
    title: "A Roadmap to Pluralistic Alignment"
    venue: "ICML 2024"
    year: 2024
    tag: Adjacent
    description: "Sorensen and colleagues define ways a model can serve diverse values: presenting a range of views, steering to a perspective, or matching a population. The paper gives HCI's jury-learning ideas a place in alignment research."
    url: "https://arxiv.org/abs/2402.05070"
    urlKind: arxiv
    doi: null
    verified: true
---

## Abstract

This topic asks whose values and judgments AI systems encode as they apply policy, learn from labels and mediate communication between people. HCI work here studies practitioners' fairness needs, makes the choice of annotators explicit and examines the social costs of large models. Alignment research now asks how one model can serve many values.

> **From the reading list:** AI systems apply policy to cases, encode whose labels count and mediate communication between people. Alignment research now asks how to represent many values rather than one.

## History

- 2019 — Alkhatib and Bernstein describe street-level algorithms; Holstein et al. survey practitioners' fairness needs.
- 2020 — Hancock, Naaman and Levy define AI-mediated communication.
- 2021 — Bommasani et al. name foundation models; Bender et al. warn about the costs of large language models.
- 2022–2024 — Gordon et al.'s jury learning makes annotator choice explicit; Sorensen et al. propose pluralistic alignment.

## Core concepts

- **Street-level algorithm** — An algorithm that makes case-level decisions without the discretion human officials use for unusual cases.
- **AI-mediated communication** — Communication between people in which AI modifies, generates or augments messages.
- **Foundation model** — A large model trained on broad data and adapted to many downstream tasks.
- **Jury learning** — A method that lets practitioners choose which annotators' labels a model's predictions represent.
- **Pluralistic alignment** — Designing models to represent a range of values rather than a single averaged one.

## Questions, controversies, and new developments

- **Controversies.** Common fairness definitions cannot all be satisfied at once (Kleinberg et al., 2016; Chouldechova, 2017). Stochastic Parrots became a flashpoint after Google's dismissal of coauthors, and whose values a model follows remains contested.
- **Responses and new developments.** Participatory approaches, collective constitutions drafted with public input, algorithmic audits and pluralistic alignment.

## Broader connections

- **Influence.** These works shaped fairness in ML, FAccT and AI governance such as the EU AI Act.

## Discussion questions

- Does jury learning resolve the question of whose voices count, or move it to whoever picks the jury?
- How does the homogenization risk Bommasani et al. describe relate to Alkhatib and Bernstein's account of algorithms failing on new cases?
- Which of Sorensen et al.'s forms of pluralism fits AI-mediated communication best?
