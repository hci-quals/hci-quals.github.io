---
id: shneiderman-1997
citation: "Shneiderman and Maes, “Direct Manipulation vs. Interface Agents,” Interactions, 1997"
authors: "Shneiderman and Maes"
title: "Direct Manipulation vs. Interface Agents"
venue: Interactions
year: 1997
tag: Core
url: "https://www.cs.umd.edu/users/ben/papers/Shn-Maes-v4n6-1997.pdf"
urlKind: author
doi: "10.1145/267505.267514"
articleId: delegation-versus-control-agents-and-mixed-initiative
session: 3
sessionTheme: Who takes the initiative
sessionDate: 2026-11-19
kind: instantiation
ideaIds: [augmentation]
sources:
  - granola-raw-transcript-669094fc-bb6f-4924-be85-e56aba31ca1d
  - granola-summary
  - shared-google-doc-session-3-human-notes
note: "Discussed together with the UIST 2026 reprise (shneiderman-maes-2026) as a single implementation reading. The Google Doc table was only partly filled."
---

## Main idea

Shneiderman and Maes debate whether interfaces should keep people in direct control of visible objects, or should delegate work to intelligent agents that act on the user’s behalf. Shneiderman’s core motivation is a human sense of control and *justified responsibility*. Direct manipulation keeps people close to the decisions they make; agents create distance, and also risk narrowing what people see to whatever the agent brings — a problem if one does not know what to look for without a representation of the larger space. Maes’s counter is that the object-permanence assumptions under direct manipulation no longer hold. The world is social and dynamic: objects move without the user’s action. Some interface support can help people notice those changes, but agents are needed to act in environments the user cannot fully observe, including acting in ways the user may not be aware of. Agents, on her account, should understand personalized preferences and can go out and represent the user.

## What is the paper trying to do?

Stage a foundational argument about two interface philosophies — direct manipulation versus interface agents — that still frames discussions of AI assistants. The discussion treated the 1997 debate together with its 2026 reprise; this entry records the positions and the attempt to locate a real disagreement rather than two talks aimed at different tasks.

## What kind of contribution is it?

A published debate (not an empirical study), used here as an instantiation of the session’s question of who takes the initiative, and as a bridge to both idea papers.

## Why does it matter?

It forces a choice, or an apparent choice, about how close a person should be to the system’s decisions, and about whether “agent” is a harmless metaphor. It also supplies a concrete vocabulary — closeness to decisions, object permanence, delegated responsibility — for talking about automation levels and about thought partnership.

## Hot takes / discussion

The two sides can be mapped onto the idea papers in opposite ways. In one mapping, interface agents line up with the thought-partner vision: a system that understands the user’s preferences and can act for them. In another, *building* agents is where Parasuraman, Sheridan, and Wickens apply: the designer must decide what to automate, at what level, and need not automate every aspect of a task. The Collins et al. paper, on this second mapping, lines up with direct manipulation: if a shared world model surfaces interpretable variables, people can intervene on those variables. The thought-partner paper does not itself commit to what the user then *does* with the variables — only that they should be surfaced. If one simply sends an agent off to “do the thing,” a mechanistic explanation of why may not matter.

A persistent question is whether Shneiderman and Maes actually disagree, or are talking past each other about different scopes of task. Maes herself suggests that in a relatively stable domain — understanding a fixed object such as the human body, or a collection of movies — interfaces can be very useful, and that agents work well only when they sit on a good underlying interface and can draw the user to the right parts of it. If that concession holds, the debate may be less a single axis than two ranges of work.

What still looks like a real disagreement is the metaphor itself. In one view, calling a system an “agent” is not a merely verbal choice: it implies that responsibility has been delegated. With tools, the human remains responsible for use. In another view, especially once the setting is a social, web-like world, responsibility is already more diffuse, and a clean assignment of it is harder to maintain.

A richer account of *distance from design decisions* — direct manipulation very close to the choices one makes, agents far away — was wanted and not really given. How that distance relates to types and levels of automation, and to responsibility along the 1–10 ladder, is taken up further in the 2026 reprise.
