---
id: mental-models-explanation-and-appropriate-reliance
title: "Explanations improve reliance on AI only when checking the AI is easy."
topic: "Mental models, explanation and appropriate reliance"
part: ai
keyIdea: ai-ki2
order: 70
status: draft
label: "Explanation and reliance"
origin:
  reading: bansal-2021
  year: 2021
  blurb: "Gagan Bansal and colleagues showed at CHI 2021 that AI explanations increased acceptance of AI advice whether or not it was correct, reframing explainable AI around appropriate reliance."
readings:
  - id: bansal-2019
    citation: "Bansal et al., “Beyond Accuracy: The Role of Mental Models in Human-AI Team Performance,” HCOMP 2019"
    authors: "Bansal et al."
    title: "Beyond Accuracy: The Role of Mental Models in Human-AI Team Performance"
    venue: "HCOMP 2019"
    year: 2019
    tag: Added
    description: "Bansal and colleagues show that team performance depends on whether people can learn where the AI errs, not only on its accuracy. Simpler error boundaries led to better teamwork."
    url: "https://ojs.aaai.org/index.php/HCOMP/article/view/5285"
    urlKind: open
    doi: "10.1609/hcomp.v7i1.5285"
    verified: true
  - id: kocielnik-2019
    citation: "Kocielnik, Amershi and Bennett, “Will You Accept an Imperfect AI?” CHI 2019"
    authors: "Kocielnik, Amershi and Bennett"
    title: "Will You Accept an Imperfect AI? Exploring Designs for Adjusting End-user Expectations of AI Systems"
    venue: "CHI 2019"
    year: 2019
    tag: Core
    description: "Kocielnik, Amershi, and Bennett test ways to set user expectations of an imperfect AI scheduling assistant. Setting expectations improved user acceptance even when the AI made errors."
    url: "https://www.microsoft.com/en-us/research/publication/will-you-accept-an-imperfect-ai-exploring-designs-for-adjusting-end-user-expectations-of-ai-systems/"
    urlKind: author
    doi: "10.1145/3290605.3300641"
    verified: true
  - id: miller-2019
    citation: "Miller, “Explanation in Artificial Intelligence: Insights from the Social Sciences,” Artificial Intelligence, 2019"
    authors: "Miller"
    title: "Explanation in Artificial Intelligence: Insights from the Social Sciences"
    venue: "Artificial Intelligence"
    year: 2019
    tag: Adjacent
    description: "Miller reviews philosophy and psychology on how people explain things and argues that XAI ignores it. Human explanations are contrastive, selective and social."
    url: "https://arxiv.org/abs/1706.07269"
    urlKind: arxiv
    doi: "10.1016/j.artint.2018.07.007"
    verified: true
  - id: doshi-velez-2017
    citation: "Doshi-Velez and Kim, “Towards a Rigorous Science of Interpretable Machine Learning,” 2017"
    authors: "Doshi-Velez and Kim"
    title: "Towards a Rigorous Science of Interpretable Machine Learning"
    venue: "arXiv preprint"
    year: 2017
    tag: Adjacent
    description: "Doshi-Velez and Kim propose evaluating interpretability at three levels: application-grounded, human-grounded and functionally-grounded. The paper defines how ML evaluates explanations with people."
    url: "https://arxiv.org/abs/1702.08608"
    urlKind: arxiv
    doi: null
    verified: true
  - id: liao-2020
    citation: "Liao, Gruen and Miller, “Questioning the AI: Informing Design Practices for Explainable AI User Experiences,” CHI 2020"
    authors: "Liao, Gruen and Miller"
    title: "Questioning the AI: Informing Design Practices for Explainable AI User Experiences"
    venue: "CHI 2020"
    year: 2020
    tag: Core
    description: "Liao, Gruen, and Miller interview AI designers and build a bank of questions users ask about AI systems. They frame explanation as answering these questions."
    url: "https://arxiv.org/abs/2001.02478"
    urlKind: arxiv
    doi: "10.1145/3313831.3376590"
    verified: true
  - id: bansal-2021
    citation: "Bansal et al., “Does the Whole Exceed Its Parts? The Effect of AI Explanations on Complementary Team Performance,” CHI 2021"
    authors: "Bansal et al."
    title: "Does the Whole Exceed Its Parts? The Effect of AI Explanations on Complementary Team Performance"
    venue: "CHI 2021"
    year: 2021
    tag: Core
    description: "Bansal and colleagues find that AI explanations made people more likely to accept AI recommendations whether or not they were correct. Explanations did not improve team performance as expected."
    url: "https://arxiv.org/abs/2006.14779"
    urlKind: arxiv
    doi: "10.1145/3411764.3445717"
    verified: true
  - id: bucinca-2021
    citation: "Buçinca, Malaya and Gajos, “To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI,” CSCW 2021"
    authors: "Buçinca, Malaya and Gajos"
    title: "To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI in AI-assisted Decision-making"
    venue: "CSCW 2021 (PACM HCI)"
    year: 2021
    tag: Core
    description: "Buçinca, Malaya, and Gajos show that making people think before seeing AI advice reduces over-reliance. People liked these designs less, which creates a tradeoff for designers."
    url: "https://arxiv.org/abs/2102.09692"
    urlKind: arxiv
    doi: "10.1145/3449287"
    verified: true
  - id: vasconcelos-2023
    citation: "Vasconcelos et al., “Explanations Can Reduce Overreliance on AI Systems During Decision-Making,” CSCW 2023"
    authors: "Vasconcelos et al."
    title: "Explanations Can Reduce Overreliance on AI Systems During Decision-Making"
    venue: "CSCW 2023 (PACM HCI)"
    year: 2023
    tag: Core
    description: "Vasconcelos and colleagues show that explanations can reduce over-reliance when checking the AI's answer is easy enough to be worth the effort. The paper explains the mixed results of earlier studies."
    url: "https://arxiv.org/abs/2212.06823"
    urlKind: arxiv
    doi: "10.1145/3579605"
    verified: true
---

## Abstract

Appropriate reliance means people follow AI advice when it is right and override it when it is wrong. This depends on accurate mental models of where the AI errs. Explanations were expected to help, but studies found they often increase reliance regardless of correctness, which has turned attention to when explanations and other interventions actually help people decide.

> **From the reading list:** People need accurate mental models of where AI is right and wrong. Explanations often increase reliance regardless of correctness; they help only when checking is easy, and social science says good explanations are contrastive and selective.

## History

- 2017 — Doshi-Velez and Kim propose levels for evaluating interpretability; Miller's social-science review appears on arXiv (journal version 2019).
- 2019 — Bansal et al. show that team performance depends on learning the AI's error boundary; Kocielnik et al. test expectation setting.
- 2020–2021 — Liao et al. build an XAI question bank; Bansal et al. find explanations raise blind acceptance; Buçinca et al. test cognitive forcing.
- 2023 — Vasconcelos et al. show explanations reduce overreliance when checking is cheap enough.

## Core concepts

- **Mental model of AI** — A user's beliefs about when and how an AI system succeeds or fails.
- **Error boundary** — The region of inputs where the AI tends to be wrong.
- **Complementary team performance** — When a human-AI team does better than either the person or the AI alone.
- **Contrastive explanation** — An explanation that answers why this outcome happened rather than some alternative.
- **Cognitive forcing function** — A design that makes people think before seeing AI advice, to reduce overreliance.

## Questions, controversies, and new developments

- **Controversies.** Explanations can increase overreliance. Rudin (Nature Machine Intelligence, 2019) argued post-hoc explanations are unfaithful and high-stakes models should be interpretable by design, and chain-of-thought explanations may not reflect model reasoning (Turpin et al., NeurIPS 2023).
- **Responses and new developments.** Cost-benefit accounts of verification (Vasconcelos), cognitive forcing functions, inherently interpretable models and mechanistic interpretability.

## Broader connections

- **Influence.** XAI became a large ML subfield and entered policy through debates over GDPR's “right to explanation.” It also affects how medical AI is deployed.

## Discussion questions

- Buçinca et al. found people disliked the designs that helped most. How should designers handle this tradeoff?
- Does Vasconcelos et al.'s cost-benefit account explain the earlier finding that explanations increase overreliance?
- Do Miller's properties of human explanation apply to chain-of-thought text from language models?
