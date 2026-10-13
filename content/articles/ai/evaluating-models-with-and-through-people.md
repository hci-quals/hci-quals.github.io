---
id: evaluating-models-with-and-through-people
title: "Evaluating models with and through people"
part: ai
keyIdea: ai-ki3
order: 73
status: draft
label: "Human-aligned LLM evaluation"
origin:
  reading: shankar-2024
  year: 2024
  blurb: "Shankar, Zamfirescu-Pereira, Hartmann, Parameswaran and Arawjo asked in 2024 'who validates the validators?', presenting EvalGen and showing that people's evaluation criteria shift as they grade LLM outputs."
readings:
  - id: lee-2023
    citation: "Lee et al., “Evaluating Human-Language Model Interaction,” TMLR, 2023"
    authors: "Lee et al."
    title: "Evaluating Human-Language Model Interaction"
    venue: "Transactions on Machine Learning Research"
    year: 2023
    tag: Adjacent
    description: "Lee and colleagues evaluate models on interactive tasks with real users and find that rankings differ from static benchmarks. They propose measuring process and user experience, not just outputs."
    url: "https://arxiv.org/abs/2212.09746v5"
    urlKind: arxiv
    doi: null
    verified: true
  - id: zheng-2023
    citation: "Zheng et al., “Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena,” NeurIPS 2023"
    authors: "Zheng et al."
    title: "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena"
    venue: "NeurIPS 2023 Datasets and Benchmarks"
    year: 2023
    tag: Adjacent
    description: "Zheng and colleagues show that strong models agree with human preferences about as often as people agree with each other, and describe the crowdsourced Chatbot Arena. The paper made LLM judges and preference voting standard."
    url: "https://arxiv.org/pdf/2306.05685"
    urlKind: arxiv
    doi: null
    verified: true
  - id: shankar-2024
    citation: "Shankar et al., “Who Validates the Validators?” UIST 2024"
    authors: "Shankar, Zamfirescu-Pereira, Hartmann, Parameswaran and Arawjo"
    title: "Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences"
    venue: "UIST 2024"
    year: 2024
    tag: Core
    description: "Shankar and colleagues build EvalGen, which helps developers create criteria for evaluating language model outputs. They find that users' criteria change as they grade, which they call criteria drift."
    url: "https://people.eecs.berkeley.edu/~bjoern/papers/shankar-validators-uist2024.pdf"
    urlKind: author
    doi: "10.1145/3654777.3676450"
    verified: true
---

## Abstract

Evaluating models with and through people is the study of how human judgment should be used to assess AI systems, including judging interactions rather than isolated outputs and checking automated judges against human preferences. It matters for HCI because benchmark scores often fail to predict how useful a system is in use, and newer methods such as preference voting platforms and LLM-as-a-judge move the validation problem rather than solve it.

> **From the reading list:** AI benchmarks measure outputs, but usefulness depends on interaction. Human preference platforms, LLM judges and criteria drift all raise the question of who validates the validators.

## History

- 2022 — Lee et al. release HALIE (first as H-LINE), a framework for evaluating the interaction process and user experience, not just final outputs.
- 2023 — Zheng et al. introduce MT-Bench and Chatbot Arena and report that strong LLM judges largely agree with human preferences, while noting position and verbosity biases.
- 2024 — Shankar et al.'s EvalGen aligns LLM-written evaluators to human grades and names 'criteria drift'.

## Core concepts

- **Interactive evaluation** — Assessing a model through the process and experience of people using it, not only the quality of a single output.
- **LLM-as-a-judge** — Using a strong language model to score or compare other models' outputs in place of human raters.
- **Pairwise preference platform** — A crowdsourced setup, such as Chatbot Arena, where people vote between two anonymous model responses to produce rankings.
- **Criteria drift** — The finding that people's evaluation criteria change as they grade outputs, so criteria cannot be fully fixed in advance.

## Questions, controversies, and new developments

- **Controversies.** Benchmarks suffer contamination, saturation and weak construct validity (Raji et al., “AI and the Everything in the Whole Wide World Benchmark,” 2021). LLM judges show position and verbosity biases, and preference leaderboards can be gamed.
- **Responses and new developments.** Interactive evaluation (Lee et al.), human-validated judge criteria (EvalGen) and calls to measure real-world use.

## Broader connections

- **Influence.** Evaluation choices steer ML research priorities and determine how frontier models are released and compared.

## Discussion questions

- Lee et al. find that better non-interactive scores do not always mean better interaction. What would it take for the field to adopt interaction-based evaluation as standard?
- If LLM judges agree with crowd votes, and crowd votes favor confident or verbose answers, what exactly is being validated?
- Does criteria drift mean evaluation should be treated as an ongoing design activity rather than a measurement step?
