---
id: parasuraman-1997
citation: "Parasuraman and Riley, “Humans and Automation: Use, Misuse, Disuse, Abuse,” Human Factors, 1997"
authors: "Parasuraman and Riley"
title: "Humans and Automation: Use, Misuse, Disuse, Abuse"
venue: Human Factors
year: 1997
tag: Core
url: "https://doi.org/10.1518/001872097778543886"
urlKind: doi
doi: "10.1518/001872097778543886"
articleId: automation-shifts-work-instead-of-removing-it
session: 2
sessionTheme: The ironies of automation
sessionDate: 2026-11-12
kind: idea
ideaIds: [augmentation]
sources:
  - granola-raw-transcript-d4b23165-78dd-4fab-a3d2-112137d362b3
  - granola-summary
  - shared-google-doc-session-2-human-notes
---

## Main idea

Automation, as the group defined it from the paper, is when machines do something that humans are doing or recently did. Once it is in place, four patterns of human response become available:

- *Use*: a human operator oversees, corrects, or steers the machine.
- *Misuse* (overreliance): the operator uses automation when it is not appropriate — the stock example is a program driving a plane into the ground.
- *Disuse* (underreliance): the operator ignores automation when it should be used — the stock example is finding an alarm annoying, taping over it, and crashing.
- *Abuse*: management deploys automation where it is not well thought through and does not support the human operators.

A larger claim sits under the taxonomy: automation does not remove error; it *displaces* operator error upstream into designer error. The designer has to anticipate failures in advance rather than counting on the operator to catch them live. A second claim, which the group also heard in Bainbridge, is that automation may not decrease the operator’s work; it can increase it or make it less pleasant.

## What is the paper trying to do?

Give useful definitions and ways of thinking about what happens when machines do things humans are, or recently were, doing. The point of carving the space into use, misuse, disuse, and abuse is practical: the solutions differ. Disuse might mean the machine has too many false positives and needs to be fixed; misuse might mean the system needs to communicate in a way that calibrates the human. A diagnosis that addresses misuse will not necessarily address disuse.

## What kind of contribution is it?

A cognitive-science-inflected human-factors discussion: a vocabulary of causes and consequences, not a single empirical study or system. The group found the categories broadly useful, but also “fuzzy,” and sometimes so task-specific that it is hard to say, outside a domain, what “appropriate” use even is. One comment was that the taxonomy can look like a general classification of how things go wrong with *any* system, not only automation.

The aviation examples themselves have a historical explanation the group noted: a lot of this literature comes out of Navy and Air Force work on control panels, which is why the plane-crash case keeps returning (as it did in Session 1 as well).

## Why does it matter?

It gives language for different failure modes, and therefore for different repairs. It also connects backward to Session 1’s Yang reading: one reason it is uniquely difficult to design for human–AI interaction is uncertainty about capabilities and difficulty predicting downstream behavior — the same anticipation burden that “designer error” names.

## Hot takes / discussion

The most sustained hot take was that *overreliance* and *underreliance* are not the concepts that ultimately matter. Those terms presuppose a verifiable correct answer (the plane crashed, or it did not; the answer was right, or it was not). In the plane-crash examples, “overreliance” is often code for “the plane crashed and the pilot listened to the automation,” and “underreliance” for “the plane crashed and the pilot did not.” What the group argued is deeper is *shared context*.

The Boeing MAX case was used this way: a sensor thought the plane was tilting up and overcorrected down; the pilot knew something the plane did not. If the system knew what the human was trying to do, many of these failures would not occur in the same form. Humans have goals; over- and underreliance talk is clearest when the goal is a verifiable task. When it is not, the better question is whether both parties share a context, and how well a person thinks the machine represents the situation.

A follow-up was whether the line between misuse, disuse, and abuse is essentially a *communication* issue. The discussion granted that it can still be useful to ask, after something has gone badly, whether the human used the AI or did not. That distinction may have been more useful for earlier technologies. For LLMs, disuse seemed less central; the interesting variation is in shades of misuse and abuse, which should be analyzed as communication. LLMs were called “ultimate context machines”: even setting “intelligence” aside, the ability to take in large amounts of context may address many classic automation failures. In a true shared-context limit, a model that knew you were trusting it too much might calibrate its answer; a cockpit alarm that knew what the human cared about would be less likely to be taped over.

A related, more computational framing: over- and underuse are metacognitive. They depend on how well someone can represent the system’s capabilities (and factors the literature names as intermediates, such as trust and perceived risk). A formal account of trust, in this view, is a model of *what the system knows versus what the human knows*. If you think the system lacks context you have, trust drops and underreliance follows; if you think the system has more context than you do, overreliance follows. *Predictability* — if I give it something, do I know what will come out? — was offered as a close cousin of this capability model, and as central to use, disuse, and misuse. A predictable system is much less likely to be misused, disused, or abused. The group asked that later papers in the session, including Buçinca, be read through this shared-context / capability-model lens.
