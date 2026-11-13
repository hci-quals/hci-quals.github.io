---
id: bucinca-2021
citation: "Buçinca, Malaya and Gajos, “To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI,” CSCW 2021"
authors: "Buçinca, Malaya and Gajos"
title: "To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI in AI-assisted Decision-making"
venue: "CSCW 2021 (PACM HCI)"
year: 2021
tag: Core
url: "https://arxiv.org/abs/2102.09692"
urlKind: arxiv
doi: "10.1145/3449287"
articleId: mental-models-explanation-and-appropriate-reliance
session: 2
sessionTheme: The ironies of automation
sessionDate: 2026-11-12
kind: instantiation
ideaIds: [augmentation]
sources:
  - granola-raw-transcript-d4b23165-78dd-4fab-a3d2-112137d362b3
  - granola-summary
  - shared-google-doc-session-2
note: "Discussed in Session 2 and listed in the Google Doc as Implementation Paper #3. The Google Doc tables for this paper were empty; the substance is from the transcript. The doc typoes the second author’s name and the venue."
---

## Main idea

When people make a decision with an AI, a *cognitive forcing function* — having to produce your own answer or guess *before* seeing the AI’s recommendation — can make them more accurate, especially more robust to *incorrect* AI output, than seeing the recommendation (and its explanation) first and then deciding. In the study’s general case, when the AI was correct, the order did not matter much. When the AI was wrong, people who saw the recommendation and explanation up front were more likely to stick with that incorrect opinion.

## What is the paper trying to do?

Test an interaction design that forces thinking before advice, in an AI-assisted decision task (recalled in the meeting as something like choosing a salad ingredient from statistics on flavor and nutrition). The system behind the study, the group noted, was not a modern GPT: it is a 2021 paper with a more deterministic machine-learning model, and the experimenters knew the correct and incorrect answers. The intended lesson is therefore about the general situation in which an AI gives you something that may not be correct for your case — a situation that may get rarer as models improve, but is unlikely to vanish.

## What kind of contribution is it?

An empirical HCI experiment on overreliance and explanations, used here as an instantiation of both Parasuraman (misuse / overreliance) and Bainbridge (an irony: a “less automated” or more effortful intervention works better, and people dislike it). The paper was also cited earlier in the Bainbridge discussion as evidence that AI explanations do not reliably support learning or skill retention, because people do not read them carefully enough — even when the explanations are good and correct.

## Why does it matter?

It gives a concrete design pattern (think first, then see the model) and a warning about explanations-as-oversight. It also shows that improving performance and improving the experience can pull in opposite directions.

## Hot takes / discussion

The corollary the group emphasized is that people *hated* cognitive forcing functions. They found them unhelpful and reported trusting the system less. An intermediate layer improved performance and made people like the system less. That was called a perfect example of an irony of automation: using *lesser* automation improved performance, and an intervention that helped also made the experience worse — an irony in itself. Explanations, in this light, are a form of monitoring and oversight, and they do not automatically do the work one hopes.

The paper was nominated, earlier in the hour, as a test case for the shared-context / capability-model framing developed around Parasuraman: forcing people to think first changes how they stand in relation to the model’s apparent knowledge, which is exactly where overreliance was said to live.
