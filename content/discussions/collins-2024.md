---
id: collins-2024
citation: "Collins et al., “Building Machines That Learn and Think with People,” Nature Human Behaviour, 2024"
authors: "Collins, Sucholutsky, Bhatt, Chandra, Wong, Lee, Zhang, Zhi-Xuan, Ho, Mansinghka, Weller, Tenenbaum and Griffiths"
title: "Building Machines That Learn and Think with People"
venue: Nature Human Behaviour
year: 2024
tag: Core
url: "https://www.nature.com/articles/s41562-024-01991-9.pdf"
urlKind: pdf
doi: "10.1038/s41562-024-01991-9"
articleId: delegation-versus-control-agents-and-mixed-initiative
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

Machines that work as *thought partners* — systems one thinks *with*, rather than systems that only think *like* people — have to solve three problems:

- They must understand the user: goals, beliefs, and intentions.
- The user must have a good model of what the machine is thinking, including something of its decision process.
- There must be a shared world model: a common set of the variables that matter for the task, so the two can meet on common ground.

The Bayesian language in the paper reflects the Tenenbaum group’s way of modeling cognition. The broader claim, separable from that formalism, is that a shared world model and a model of the user are largely missing from current systems, and that progress depends on building them.

## What is the paper trying to do?

Name what is preventing machines from collaborating as thought partners, and sketch how to build toward shared understanding. Figure 1 is the conceptual picture, including the machine’s beliefs about the user (“Alice”). Table 1 lists modes of collaborative thought — scenarios in which a thought partner would help.

## What kind of contribution is it?

A cognitive-science perspective and design framework (Collins, Tenenbaum, Griffiths, and colleagues), not a single system or experiment. It is opinionated about structured, often Bayesian, representations of people and of the world, as opposed to purely implicit ones.

## Why does it matter?

It splits *thinking with people* from *thinking like people*. RLHF, on this reading, is an attempt to think like people: the model learns from feedback and can acquire an implicit user model. An explicit shared world model, with the relevant variables surfaced, is what would support thinking *with* people. The paper also makes unavoidable a question the types-and-levels automation framework leaves less explicit: what the machine must represent about the user, and whether that representation must be interpretable to the user.

## Hot takes / discussion

The three conditions are taken as necessary rather than sufficient; there is always more to be done. Table 1’s distinctions (collaboration, collaborative planning, collaborative sensemaking, and so on) may be somewhat arbitrary: useful as examples of domains, less clearly a privileged way to segment collaborative thought.

A central question is what constraints there should be on the machine’s beliefs about Alice, and whether it matters that *Alice* can understand those beliefs. In one view, associated with this research tradition, representations of human thought should be structured — for example, Bayesian. In another, a connectionist or “ML-pilled” approach could fit a wholly uninterpretable model to large traces of user behavior and still predict what Alice will say next with high fidelity. Historically, connectionist models were resisted in cognitive science in part because they were not inspectable as mechanistic models. A spectrum runs from uninterpretable neural nets on one side to handcrafted Bayesian models on the other. A middle path, now pursued in this group and in adjacent work (including Tom Griffiths and Noah Goodman), is to use LLMs to *synthesize* interpretable world models: propose parsimonious models over a shared variable set and test them against data.

One reading of the paper is that a good thought partner requires understanding what the model thinks about us — for example, whether it is biased. A more modest reading is that if the model assumes a perfectly rational user, its outputs will not be useful; the representation must be accurate enough, not necessarily inspectable. Multi-turn RLHF, optimized for whether the user liked the interaction, would already have to form some accurate beliefs about the user, and might even be incentivized to answer “what do you think I am thinking?” well enough to be accepted. In one view that satisfies only the first requirement, not the requirement that the user can see what is being represented. Establishing common ground may matter more than representing the user as such: the variables both parties care about, even where they disagree (a layout’s “corner spaces,” in the example), need to be surfaced.

A related desire is not a partner that merely approximates a generic human under resource constraints and offers the obvious solution, but one that can be creative — that introduces new ideas and finds gaps. The paper does not tightly commit to a task type; “thought partner” means surfacing the constraints and beliefs one cares about, and the model itself can still produce creative results. The operative contrast remains “think *with*” versus “learn and think *like*.”

An “RL nihilist” view says that enough labels of good versus bad interactions, at scale, will induce whatever implicit user model is needed, and that this is a direct optimization of the thing that matters: a good interaction. The paper’s view is more opinionated: implicit learning may be insufficient or impractical, and stronger priors and structured representations of the human are required. Whether that disagreement is ultimately an empirical bake-off with frontier labs is left open. A further conflation: the 2024 paper may be asking for more *context* about Alice, which models now receive in abundance, rather than *structured beliefs* about Alice.

When do mechanistic models matter? In one view, it is task-dependent. For collaborative drawing (for example ControlNet) or for math, one may want to see why a move was made, or which factors drove a proof step. For drug discovery, practitioners may care more about finding a working solution than about mechanism. A pushback is that this can be a false dichotomy — as if an interpretable route could not also find a solution, or as if people would not prefer interpretability if it were available. Another caution is that more uninterpretable, more complicated representations often perform better; interpretability may carry a performance cost, and not everything can be surfaced as an interpretable artifact.

People already form detailed, often inaccurate, *folk models* of opaque social-media rankers (liking, commenting, and following as imagined causes of what appears next). An open question is how such folk models would develop around thought partners that are, or are not, interpretable.

That question splits further into *causal* versus *conceptual* explanations. A causal explanation would reveal intermediate steps — how an insight was actually reached, or how a view of the world changed. A conceptual explanation, often in natural language, surfaces the variables that matter (“I prefer eggs over easy”) as a loose handle for thinking about decisions, without capturing every deep preference, and need not be merely post-hoc. In one view, causal or mechanistic explanations matter because they let people learn how a conclusion was driven. In another, conceptual explanations in language are the native medium of LLMs: users should be able to ask “what do you think about me?” and get a useful, reasonably stable answer they can correct, without needing a non-linguistic causal reading of a user profile. The disagreement was left unresolved, with interest in staging a mini-debate on causal versus conceptual explanation on the model of the Shneiderman/Maes debate.
