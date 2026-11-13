---
session: 2
theme: The ironies of automation
date: 2026-11-12
idea: augmentation
readings:
  ideas: [bainbridge-1983, parasuraman-1997]
  instantiations: [bastani-2025, bucinca-2021]
sources:
  - granola-raw-transcript-d4b23165-78dd-4fab-a3d2-112137d362b3
  - granola-summary
  - shared-google-doc-session-2
---

# Session 2: The ironies of automation

Session 2 keeps Session 1’s shape: idea papers, then instantiations. Later papers are pulled into a common framework. That framework, developed around Parasuraman and Riley, is *shared context* and a computational picture of trust: model what the system knows versus what the human knows, and treat predictability of the system as central to use, misuse, and disuse.

The aim is to get through a canon, even when attendance fluctuates, and to stay with the questions rather than spend the time wording a consensus by hand. Bastani and Buçinca are the instantiation readings.

## Cross-reading synthesis

Parasuraman and Riley supply a vocabulary — use, misuse, disuse, abuse — whose practical value is that different diagnoses imply different repairs. That vocabulary holds. A sharper reading holds that over- and underreliance presuppose a verifiable score (often, in this literature, a crashed plane). The deeper issue is whether human and machine share a context and a model of the situation. LLMs, as “context machines,” may address some classic failures, while also multiplying shades of misuse rather than disuse. Predictability and a person’s model of the system’s capabilities become the intermediates (trust, perceived risk) worth formalizing.

Bainbridge supplies the irony: automation does the easy work, desksills the operator, and makes monitoring of the unusual worse. Deskilling is clearly relevant now (healthcare and other high-stakes domains). The open question is what “monitoring” should mean once some software systems no longer have a human overseer, and once formal verifiers can sign off on results no person understands. Verification does not vanish; it shifts (for example, onto the statement of the theorem, or the mapping into Lean). A P/NP intuition that verification is easier than generation weighs against Bainbridge’s harder-verification claim, and against metrics other than accuracy.

The way forward is not “make people do the automated work by hand” (close to disuse) but better monitoring interfaces. Natural language looks promising and, given Buçinca and related work on explanations, may not be sufficient; more interactive interfaces might be. The organizing question — does an optimal monitoring interface exist that makes underlying domain knowledge irrelevant? — splits. In one view, monitoring is observation-and-verification without steering. A sharper reading holds that monitoring is worthwhile only if it enables good intervention. Steering and verification are distinct skills, both vulnerable to deskilling.

The two instantiation papers fit the framework. Bastani et al. moves the irony into learning: unguarded GPT-4 can hurt later performance relative to a hints-only tutor, and the interesting automation target may be the *teacher* and the level at which learning goals are set (teacher vs. school district, local vs. generic context). Buçinca et al. instantiates both misuse and the irony: thinking before seeing the AI improves robustness to wrong advice, and people hate the forcing function, trust the system less, and illustrate that better performance can worsen experience. Explanations, as a form of oversight, do not automatically produce learning or appropriate reliance.

Lee and See (2004) and Simkute et al. (2024) are not instantiation readings of this session. “Zana’s paper” (Buçinca) is, including with Bainbridge.

## Open questions carried forward

- Can over- and underreliance be replaced by a model of shared context and of what each party knows?
- Does an optimal interface exist for a well-defined class of monitoring tasks such that domain knowledge becomes irrelevant? What, precisely, counts as a monitoring task, and does it include intervention?
- Are Bainbridge’s ironies limited to a mid-range of automation in physical process control, or do they still hold when systems are highly autonomous and sometimes formally verified without human understanding?
- At what level of abstraction should human goals (including teaching goals) be specified, and who specifies them?
- How should explanation and cognitive forcing be designed, given that they can improve performance while reducing trust and enjoyment?
