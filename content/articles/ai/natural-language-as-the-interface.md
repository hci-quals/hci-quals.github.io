---
id: natural-language-as-the-interface
title: "Natural language has become the interface, reopening the gulfs of execution and evaluation."
topic: "Natural language as the interface"
part: ai
keyIdea: ai-ki3
order: 72
status: draft
label: "Prompting as interface"
origin:
  reading: brown-2020
  year: 2020
  blurb: "Brown and colleagues at OpenAI showed in 2020 with GPT-3 that a large language model could perform new tasks from a few examples written in a prompt, making natural-language prompting a general way to program models."
readings:
  - id: brown-2020
    citation: "Brown et al., “Language Models Are Few-Shot Learners” (GPT-3), NeurIPS 2020, sections 1–2"
    authors: "Brown et al."
    title: "Language Models Are Few-Shot Learners"
    venue: "NeurIPS 2020"
    year: 2020
    tag: Adjacent
    description: "Brown and colleagues show that a large model can do new tasks from a few examples in its prompt, without retraining. This finding turned prompting into the main interface to AI."
    url: "https://arxiv.org/abs/2005.14165"
    urlKind: arxiv
    doi: null
    verified: true
  - id: wei-2022
    citation: "Wei et al., “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models,” NeurIPS 2022"
    authors: "Wei et al."
    title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"
    venue: "NeurIPS 2022"
    year: 2022
    tag: Adjacent
    description: "Wei and colleagues show that prompting models to write intermediate steps improves performance on reasoning tasks. The paper shows that how users phrase requests changes what models can do."
    url: "https://arxiv.org/abs/2201.11903v5"
    urlKind: arxiv
    doi: null
    verified: true
  - id: wu-2022
    citation: "Wu, Terry and Cai, “AI Chains: Transparent and Controllable Human-AI Interaction by Chaining LLM Prompts,” CHI 2022"
    authors: "Wu, Terry and Cai"
    title: "AI Chains: Transparent and Controllable Human-AI Interaction by Chaining Large Language Model Prompts"
    venue: "CHI 2022"
    year: 2022
    tag: Core
    description: "Wu, Terry, and Cai break complex tasks into chains of language model steps that users can see and edit. Chaining improved transparency, control, and results."
    url: "https://arxiv.org/pdf/2110.01691"
    urlKind: arxiv
    doi: "10.1145/3491102.3517582"
    verified: true
  - id: lee-2022
    citation: "Lee, Liang and Yang, “CoAuthor,” CHI 2022"
    authors: "Lee, Liang and Yang"
    title: "CoAuthor: Designing a Human-AI Collaborative Writing Dataset for Exploring Language Model Capabilities"
    venue: "CHI 2022"
    year: 2022
    tag: Core
    description: "Lee, Liang, and Yang collect a dataset of people writing with GPT-3 and analyze how they use its suggestions. The work provides tools for studying human-AI writing."
    url: "https://arxiv.org/abs/2201.06796"
    urlKind: arxiv
    doi: "10.1145/3491102.3502030"
    verified: true
  - id: zamfirescu-pereira-2023
    citation: "Zamfirescu-Pereira et al., “Why Johnny Can't Prompt,” CHI 2023"
    authors: "Zamfirescu-Pereira, Wong, Hartmann and Yang"
    title: "Why Johnny Can't Prompt: How Non-AI Experts Try (and Fail) to Design LLM Prompts"
    venue: "CHI 2023"
    year: 2023
    tag: Core
    description: "Zamfirescu-Pereira and colleagues study non-experts designing prompts and find they write prompts as if talking to a person. They struggle to generalize and debug."
    url: "https://people.eecs.berkeley.edu/~bjoern/papers/zamfirescu-johnny-chi2023.pdf"
    urlKind: author
    doi: "10.1145/3544548.3581388"
    verified: true
  - id: barke-2023
    citation: "Barke, James and Polikarpova, “Grounded Copilot: How Programmers Interact with Code-Generating Models,” OOPSLA 2023"
    authors: "Barke, James and Polikarpova"
    title: "Grounded Copilot: How Programmers Interact with Code-Generating Models"
    venue: "OOPSLA 2023 (PACMPL)"
    year: 2023
    tag: Core
    description: "Barke, James, and Polikarpova observe programmers using GitHub Copilot and find two modes. Programmers use it to accelerate known work or to explore unfamiliar code."
    url: "https://arxiv.org/pdf/2206.15000"
    urlKind: arxiv
    doi: null
    verified: true
  - id: subramonyam-2024
    citation: "Subramonyam et al., “Bridging the Gulf of Envisioning: Cognitive Challenges in Prompt Based Interactions with LLMs,” CHI 2024"
    authors: "Subramonyam et al."
    title: "Bridging the Gulf of Envisioning: Cognitive Challenges in Prompt Based Interactions with LLMs"
    venue: "CHI 2024"
    year: 2024
    tag: Core
    description: "Subramonyam and colleagues extend Norman's gulfs to language models and propose the gulf of envisioning. Users struggle to imagine what to ask for and how to phrase it."
    url: "https://arxiv.org/pdf/2309.14459"
    urlKind: arxiv
    doi: "10.1145/3613904.3642754"
    verified: true
  - id: masson-2024
    citation: "Masson et al., “DirectGPT: A Direct Manipulation Interface to Interact with Large Language Models,” CHI 2024"
    authors: "Masson, Malacria, Casiez and Vogel"
    title: "DirectGPT: A Direct Manipulation Interface to Interact with Large Language Models"
    venue: "CHI 2024"
    year: 2024
    tag: Core
    description: "Masson and colleagues build DirectGPT, which lets users edit text and code by selecting and pointing instead of writing full prompts. Users completed tasks faster with shorter prompts."
    url: "https://cs.uwaterloo.ca/~dmasson/pdfs/directgpt.pdf"
    urlKind: author
    doi: "10.1145/3613904.3642462"
    verified: true
  - id: arawjo-2024
    citation: "Arawjo, Swanson, Suh, Pu, Glassman and Glassman, “ChainForge: A Visual Toolkit for Prompt Engineering and LLM Hypothesis Testing,” CHI 2024"
    authors: "Arawjo, Swoopes, Vaithilingam, Wattenberg and Glassman"
    title: "ChainForge: A Visual Toolkit for Prompt Engineering and LLM Hypothesis Testing"
    venue: "CHI 2024"
    year: 2024
    tag: Modern
    description: "Arawjo and colleagues build ChainForge, which lets people compare prompts and models side by side across many inputs. It treats prompting as hypothesis testing rather than trial and error."
    url: "https://glassmanlab.seas.harvard.edu/papers/chainforge.pdf"
    urlKind: author
    doi: "10.1145/3613904.3642016"
    verified: true
---

## Abstract

Natural language as the interface refers to controlling AI systems by writing instructions and examples in ordinary language rather than code or menus. Because in-context learning made prompting the main way to program large language models, it reopens classic HCI questions about Norman's gulfs of execution and evaluation: people struggle to know what to ask, to debug prompts and to judge outputs. HCI research responds by studying how people prompt and by building interfaces that structure, decompose or replace prompts.

> **From the reading list:** In-context learning made prompting the main way to program models, which reopens Norman's gulfs: people struggle to know what to ask, to debug prompts and to evaluate outputs. New interfaces structure, decompose or replace prompts.

## History

- 2020 — GPT-3 shows few-shot in-context learning, turning the prompt into a general-purpose programming surface.
- 2022 — Chain-of-thought prompting and AI Chains show that decomposing a task into steps improves both model output and user control.
- 2023 — 'Why Johnny Can't Prompt' and Grounded Copilot document how non-experts and programmers actually prompt and accept code suggestions.
- 2024 — The gulf of envisioning, DirectGPT and ChainForge propose cognitive models, direct manipulation and visual tools to replace trial-and-error prompting.

## Core concepts

- **In-context learning** — A model performing a new task from instructions or examples placed in its prompt, without changing its weights.
- **Prompt chaining** — Splitting a task into a sequence of LLM calls whose outputs feed later steps, so each step can be inspected and edited.
- **End-user prompt engineering** — Non-experts designing and testing prompts, often opportunistically and with misleading expectations drawn from talking to people.
- **Gulf of envisioning** — The gap between what a person wants and their ability to imagine a prompt and output that would achieve it.
- **Acceleration vs. exploration modes** — Barke et al.'s distinction between using a code assistant to reach a known next step faster and using it to explore unknown options.

## Questions, controversies, and new developments

- **Controversies.** Dijkstra's “On the Foolishness of ‘Natural Language Programming’” (EWD 667) argued natural language is too ambiguous to program with. Critics call chat a lazy default interface, and prompt engineering may be a temporary skill.
- **Responses and new developments.** Structured interfaces (chains, direct manipulation, ChainForge) and automatic prompt optimization such as DSPy (Khattab et al., ICLR 2024).

## Broader connections

- **Influence.** Prompting reshaped NLP research and programming tools, and it spawned PL work on languages for programming LLMs.

## Discussion questions

- Is prompting a new kind of end-user programming, or does natural language change the problem in a basic way? Use 'Why Johnny Can't Prompt' and Grounded Copilot as evidence.
- DirectGPT brings back direct manipulation, while AI Chains and ChainForge add structure. Which gulf (execution, evaluation or envisioning) does each approach mainly address?
- As models improve, will interfaces for structuring prompts become unnecessary, or will the evaluation problem remain no matter how good the model gets?
