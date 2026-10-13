---
id: people-teach-machines
title: "People teach machines, and human feedback is now the core training signal."
topic: "People teach machines"
part: ai
keyIdea: ai-ki1
order: 68
status: draft
label: "Interactive ML"
origin:
  reading: fails-2003
  year: 2003
  blurb: "Jerry Fails and Dan Olsen introduced interactive machine learning in 2003, letting users quickly train and correct classifiers through examples."
readings:
  - id: fails-2003
    citation: "Fails and Olsen, “Interactive Machine Learning,” IUI 2003"
    authors: "Fails and Olsen"
    title: "Interactive Machine Learning"
    venue: "IUI 2003"
    year: 2003
    tag: Core
    description: "Fails and Olsen propose interactive machine learning, where users quickly train and correct models by giving examples. The paper treats machine learning as part of the interface."
    url: "https://doi.org/10.1145/604045.604056"
    urlKind: doi
    doi: "10.1145/604045.604056"
    verified: false
  - id: fogarty-2008
    citation: "Fogarty et al., “CueFlik: Interactive Concept Learning in Image Search,” CHI 2008"
    authors: "Fogarty et al."
    title: "CueFlik: Interactive Concept Learning in Image Search"
    venue: "CHI 2008"
    year: 2008
    tag: Core
    description: "Fogarty and colleagues build CueFlik, which lets users define image search concepts by giving examples. The system is an early example of end-user interactive machine learning."
    url: "https://homes.cs.washington.edu/~jfogarty/publications/chi2008-cueflik.pdf"
    urlKind: author
    doi: "10.1145/1357054.1357061"
    verified: true
  - id: amershi-2014
    citation: "Amershi, Cakmak, Knox and Kulesza, “Power to the People: The Role of Humans in Interactive Machine Learning,” AI Magazine, 2014"
    authors: "Amershi, Cakmak, Knox and Kulesza"
    title: "Power to the People: The Role of Humans in Interactive Machine Learning"
    venue: "AI Magazine"
    year: 2014
    tag: Core
    description: "Amershi and colleagues review case studies of people training machine learning systems. They show that people are not simple sources of labels and that systems should be designed around how people teach."
    url: "https://hcrlab.cs.washington.edu/assets/pdfs/2015/amershi2015aimag.pdf"
    urlKind: author
    doi: "10.1609/aimag.v35i4.2513"
    verified: true
  - id: kulesza-2015
    citation: "Kulesza, Burnett, Wong and Stumpf, “Principles of Explanatory Debugging to Personalize Interactive Machine Learning,” IUI 2015"
    authors: "Kulesza, Burnett, Wong and Stumpf"
    title: "Principles of Explanatory Debugging to Personalize Interactive Machine Learning"
    venue: "IUI 2015"
    year: 2015
    tag: Added
    description: "Kulesza and colleagues let users see why a classifier made a decision and correct its reasoning directly. Explanations plus corrections helped users build better models faster."
    url: "https://openaccess.city.ac.uk/id/eprint/13819/1/paper326.pdf"
    urlKind: pdf
    doi: "10.1145/2678025.2701399"
    verified: true
  - id: christiano-2017
    citation: "Christiano et al., “Deep Reinforcement Learning from Human Preferences,” NeurIPS 2017"
    authors: "Christiano et al."
    title: "Deep Reinforcement Learning from Human Preferences"
    venue: "NeurIPS 2017"
    year: 2017
    tag: Adjacent
    description: "Christiano and colleagues train agents from people's comparisons between pairs of behaviors instead of a hand-written reward. This method became the basis of RLHF."
    url: "https://arxiv.org/abs/1706.03741"
    urlKind: arxiv
    doi: null
    verified: true
  - id: ouyang-2022
    citation: "Ouyang et al., “Training Language Models to Follow Instructions with Human Feedback” (InstructGPT), NeurIPS 2022"
    authors: "Ouyang et al."
    title: "Training Language Models to Follow Instructions with Human Feedback"
    venue: "NeurIPS 2022"
    year: 2022
    tag: Adjacent
    description: "Ouyang and colleagues fine-tune GPT-3 using human demonstrations and preference rankings, and people strongly prefer the result to a much larger base model. The paper shows that human feedback, not just scale, makes models usable."
    url: "https://arxiv.org/abs/2203.02155"
    urlKind: arxiv
    doi: null
    verified: true
  - id: bai-2022
    citation: "Bai et al., “Constitutional AI: Harmlessness from AI Feedback,” 2022"
    authors: "Bai et al."
    title: "Constitutional AI: Harmlessness from AI Feedback"
    venue: "arXiv preprint"
    year: 2022
    tag: Adjacent
    description: "Bai and colleagues replace much human feedback with model self-critique guided by a written set of principles. The paper raises the question of who writes the principles and how people stay in the loop."
    url: "https://arxiv.org/abs/2212.08073"
    urlKind: arxiv
    doi: null
    verified: true
---

## Abstract

Interactive machine learning treats model training as a user interface, in which people give examples, see results and correct the model in a fast loop. Studies show that people act as teachers with their own strategies, not as simple label sources. Reinforcement learning from human feedback later made human judgment the main training signal for large language models.

> **From the reading list:** Interactive ML treats training as an interface, and people turn out to be teachers, not label sources. Reinforcement learning from human feedback made human judgment the core training signal for today's models.

## History

- 2003 — Fails and Olsen propose interactive machine learning with the Crayons tool.
- 2008 — Fogarty et al.'s CueFlik lets end users define image-search concepts by example.
- 2014–2015 — Amershi et al. show people are teachers, not oracles; Kulesza et al. pair explanations with corrections.
- 2017–2022 — Christiano et al. train from preference comparisons; InstructGPT and Constitutional AI scale this to language models.

## Core concepts

- **Interactive machine learning** — A rapid train-review-correct loop in which users shape a model directly.
- **End-user concept learning** — Users define categories for a system by providing positive and negative examples.
- **Explanatory debugging** — The system explains its predictions and users explain corrections back to it.
- **Reinforcement learning from human feedback** — Training a reward model from human preference comparisons and optimizing a policy against it.
- **AI feedback** — Replacing some human labels with model self-critique guided by written principles.

## Questions, controversies, and new developments

- **Controversies.** RLHF raters come from narrow populations, and annotator disagreement is usually treated as noise. Preference training can cause reward hacking and sycophancy (Key idea 3), and rater labor is often invisible.
- **Responses and new developments.** Constitutional AI, Direct Preference Optimization (Rafailov et al., NeurIPS 2023), perspectivist annotation (Aroyo and Welty's “Truth Is a Lie,” 2015) and jury learning.

## Broader connections

- **Influence.** Human feedback trains virtually all deployed LLMs. Interactive ML also shaped active learning and robot learning from demonstration.

## Discussion questions

- Is RLHF interactive machine learning at scale, or does it lose the features that made interactive ML useful?
- When rater disagreement is treated as noise, whose judgments end up shaping the model?
- Who should write a model's constitution, and how would we know whether it reflects the people it serves?
