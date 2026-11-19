---
id: parasuraman-2000
citation: "Parasuraman, Sheridan and Wickens, “A Model for Types and Levels of Human Interaction with Automation,” IEEE TSMC, 2000"
authors: "Parasuraman, Sheridan and Wickens"
title: "A Model for Types and Levels of Human Interaction with Automation"
venue: "IEEE Transactions on Systems, Man, and Cybernetics, Part A"
year: 2000
tag: Adjacent
url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=844354"
urlKind: pdf
doi: "10.1109/3468.844354"
articleId: automation-shifts-work-instead-of-removing-it
session: 3
sessionTheme: Who takes the initiative
sessionDate: 2026-11-19
kind: idea
ideaIds: [augmentation]
sources:
  - granola-raw-transcript-669094fc-bb6f-4924-be85-e56aba31ca1d
  - granola-summary
  - shared-google-doc-session-3-human-notes
---

## Main idea

A human operator’s work can be automated in part or in whole, and that automation is not a single dial. It decomposes across four types, or stages, each of which can be automated to a different degree:

- *Information acquisition*: sensing and registration of input data — sensors, a database query, or a search that returns relevant pages.
- *Information analysis*: wrangling, transforming, extrapolating, or predicting from that data so it can inform a choice.
- *Decision and action selection*: how much of the choice is delegated to the machine, from the human doing everything, through pre-approval or a timed chance to approve, to the machine deciding on its own.
- *Action implementation*: executing the chosen outcome.

Figure 2 is the key picture: a system can be high on one axis and low on another — for example, very automated in acquisition while deferring analysis and decision to the user. Figure 3 is a flowchart for choosing, for each component of a task, whether it should receive low or high automation. The human-performance costs the paper flags are mental workload (measured, in that literature, with instruments such as NASA TLX), situational awareness (as more is automated, people lose track of how information was produced and used to reach a decision), and complacency (growing used to trusting the system and losing a judicious sense of when that trust is safe). Complacency, in one later reading, is partly absorbed by the overreliance literature.

## What is the paper trying to do?

Two things at once: challenge the impulse to automate everything, because badly designed automation has well-known costs; and offer a positive scaffold for designing automation rather than only criticizing failures. It gives a more precise vocabulary for saying *what* is being automated, and a ladder of levels so a fail-safe need not jump from fully automatic to fully manual.

## What kind of contribution is it?

A human-factors design framework — four types, a scale of levels, a flowchart, and evaluative criteria — from 2000, treated as a foundational reading in that field and heavily cited since. The discussion used it as a conceptual and evaluative tool, not as a new empirical study.

## Why does it matter?

It lets designers ask who should own which context, and at what granularity, instead of treating “automation” as one decision. Accuracy on the automated step is not enough. If a decision is automated, people may not know it was made, or may lose a broader orientation toward the system — and that loss shows up on *other* tasks, in ways that are hard to metricize. The stock illustration is taking away the altimeter: the pilot no longer has to judge altitude, but also loses the awareness needed to prepare for touchdown or to engage another system. “Lights-out” automation, in which no people remain, is rarely achieved in practice; roles shift into oversight, repair, and the design of new machines. The paper also warned that over-automation can produce human performance costs (“human ability fatigue”) and that automation must be designed so those costs do not occur.

## Hot takes / discussion

In one view, that warning about human performance costs has largely been ignored, and many systems still do not even break automation down into the four types.

The four types are better thought of as *aspects* of a data flow than as “levels” stacked on one another. “Levels of automation” more properly names the low-to-high scale (including the 1–10 ladder). The framework’s service is higher-resolution language, not a complete parameterization. Further distinctions — high- versus low-level *decisions* crossed with high- versus low-level *automation*; raw sensor values versus already-semantic information — are not fully covered. Because the paper has been cited thousands of times, a natural follow-up is how Figure 2 has evolved in later work. The paper talks about upper and lower bounds rather than a claim that every system should climb the ladder to full automation, and Figure 2 already allows a system to be high on some dimensions and low on others. Acquisition is often a reasonable thing to automate (machines are good at it; humans are not). Analysis is more consequential, because it changes later interpretations. Decision-making is increasingly delegated, but the four types are examples of what to care about, not a mandatory checklist.

A recurring question is how far the analysis presupposes an *asymmetric* machine: faster or more scalable than a human, but less intelligent, with the main risk being an error the human must catch. A counter is that Figure 3’s secondary evaluative criteria already include cases where the machine simply does something better or more efficiently, so the paper is not only about sub-human machines.

The live tension is how far the framework still helps with LLMs and with generative work. It is at home with closed, sensor-driven tasks such as air traffic control. Automating acquisition of something like altitude is an obvious candidate; a high-level decision such as whether to trigger a fail-safe landing may depend on visibility, approach, and weight — context that is hard to formalize — and so may stay with the human. If an LLM matches human accuracy on a given task, accuracy is still the wrong sole criterion, because situational awareness is about remaining oriented for what comes next. In a fully lights-out future, an altimeter need not be shown, because no human is in the cockpit. Until then, measurements that are not strictly necessary for the automated function remain useful for oversight and for the new roles people occupy.

Creative or generative work may not be the same kind of task. The “automation of math,” or writing as a long sequence of word-choice decisions (Ted Chiang’s example), can be forced into the language of decisions, but it is unclear whether that is the useful construct. The framework assumes a closed set of tasks; in an open or infinite task space, some levels may be impossible — for instance, enumerating all possible decisions. It may be more useful to think about how people and machines tackle *networks* of tasks than about automating a single decision. That limitation is a bridge to a more bidirectional picture, in which the machine also has a model of the user.
