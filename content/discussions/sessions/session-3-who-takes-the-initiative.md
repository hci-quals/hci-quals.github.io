---
session: 3
theme: Who takes the initiative
date: 2026-11-19
idea: augmentation
readings:
  ideas: [collins-2024, parasuraman-2000]
  instantiationsDiscussed: [shneiderman-1997, shneiderman-maes-2026]
  instantiationsInYamlNotDiscussed: [barke-2023, amershi-2019]
sources:
  - granola-raw-transcript-669094fc-bb6f-4924-be85-e56aba31ca1d
  - granola-summary
  - shared-google-doc-session-3
---

# Session 3: Who takes the initiative

The meeting kept the established format: idea papers first, then an implementation reading, with notes in the shared doc as a scaffold rather than a script to be completed by hand. It opened with Parasuraman, Sheridan, and Wickens (2000), then moved to Collins et al. (2024), then to the Shneiderman/Maes debate — the 1997 *Interactions* exchange and its UIST 2026 reprise — which was the implementation reading that had actually been read. The Google Doc’s tables for Barke, James, and Polikarpova (2023) and for Amershi et al. (2019) were left empty; those two papers are listed as this session’s instantiations on the site but were not discussed.

A mid-discussion interest, left as a possible later session, was to stage a mini-debate on causal versus conceptual explanation, on the model of the Shneiderman/Maes format.

## Cross-reading synthesis

Parasuraman, Sheridan, and Wickens supply a vocabulary for *what* is automated, and at what level, across four stages: acquisition, analysis, decision selection, and action. The practical claim is that automation is not a single dial, that a system can be high on one axis and low on another, and that the cost of automating a step is not just error on that step. Situational awareness, workload, and complacency (later partly absorbed by overreliance) are the human-performance costs; “lights-out” automation is rare, and people move into oversight and other roles. The framework is at home with closed, sensor-driven tasks. The hour’s pressure on it was whether those stages still help with LLMs and with generative work — math, writing, open-ended tasks — where the space of possible decisions may be unbounded and some levels may be impossible to instantiate.

Collins et al. supply a more bidirectional picture: a thought partner needs a model of the user’s beliefs and goals, a user-facing model of the machine’s reasoning, and a shared set of task-relevant variables. That is “thinking *with* people,” as against “thinking *like* people” (RLHF and related implicit user models). The discussion turned on how structured, and how interpretable to the user, the machine’s beliefs about the user must be — from handcrafted or LLM-synthesized Bayesian world models, through uninterpretable predictors fit to user traces, to an “RL nihilist” bet that labels and scale will induce whatever model is needed. A further split, left unresolved, was between causal explanations (intermediate steps; how an insight was reached) and conceptual explanations (the variables that matter, often in natural language). Mechanistic models were treated as more important where the provenance of a move or a proof step matters, and as more dispensable where a working result is the main prize.

The Shneiderman/Maes debate was the hinge between the two idea papers, and it can be mapped in more than one way. In one mapping, agents are the thought-partner vision (a system that models preferences and acts for the user), and the automation-levels paper is advice to the *builders* of those agents: decide what to automate, and at what level. In another, Collins et al. line up with direct manipulation: once interpretable variables are surfaced, people can intervene on them, whereas an opaque agent that “just does the thing” has less need to explain itself. The debate itself may be partly two scopes rather than one axis — Maes allows that agents work best on top of a good interface, and that relatively stable domains can be served by interfaces alone — but a substantive remainder is the metaphor of “agent,” which in Shneiderman’s reprise is not a verbal preference but a claim about delegated responsibility. Hooked to the 1–10 ladder, levels 1–6 (through a timed veto) can still be read as leaving responsibility with the human, and levels 7–10 as not. Two further dichotomies were challenged: user control versus system control need not be zero-sum if goals are aligned and the system is trusted; delegation versus collaboration can be supported by either style of design.

A common thread is that the cost of automation is not only accuracy but distance: loss of orientation, of oversight capacity, and of closeness to the decisions that get made. What a richer account of that distance would look like was left open.

## Open questions carried forward

- How well do types and levels of automation apply to generative or creative work, and to infinite task spaces? Is “decision” the right unit, or is a network of tasks a better one?
- How has Figure 2 of Parasuraman, Sheridan, and Wickens evolved in the large follow-on literature? What further axes (including level of decision crossed with level of automation) are needed?
- Must the machine’s beliefs about the user be interpretable to the user, or is an accurate implicit model enough? Is that an empirical bake-off, or a different kind of disagreement?
- When are causal (mechanistic) explanations needed, and when are conceptual, linguistic explanations enough? What would a structured debate on that distinction show?
- What would a richer account of “distance from design decisions” look like, and how should it relate to responsibility along the automation ladder?
