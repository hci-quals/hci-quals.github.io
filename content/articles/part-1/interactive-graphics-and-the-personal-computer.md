---
id: interactive-graphics-and-the-personal-computer
title: "Interactive graphics and the personal computer"
part: part-1
keyIdea: part-1-ki2
order: 2
status: draft
label: "Graphical interaction"
origin:
  reading: sutherland-1963
  year: 1963
  blurb: "Ivan Sutherland's 1963 Sketchpad showed that a person could draw and manipulate structured graphics directly on a screen with a light pen, in real time."
readings:
  - id: sutherland-1963
    citation: "Sutherland, “Sketchpad,” 1963"
    authors: "Sutherland"
    title: "Sketchpad: A Man-Machine Graphical Communication System"
    venue: "AFIPS Spring Joint Computer Conference (thesis reprinted as Cambridge TR-574)"
    year: 1963
    tag: Core
    description: "Sutherland's thesis presents a system for drawing on a screen with a light pen, with constraints, copies of master drawings, and zooming. It introduced ideas that later became graphical interfaces, CAD, and object-oriented programming."
    url: "https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-574.html"
    urlKind: open
    doi: "10.1145/1461551.1461591"
    verified: true
  - id: engelbart-1968
    citation: "Engelbart, “The Mother of All Demos,” 1968 (video)"
    authors: "Engelbart"
    title: "The Mother of All Demos"
    venue: "Fall Joint Computer Conference (video)"
    year: 1968
    tag: Core
    description: "Engelbart demonstrates the mouse, hypertext links, shared editing, and video conferencing in one live 90-minute session. The demo showed what interactive computing could be decades before it became common."
    url: "https://www.dougengelbart.org/theDemo"
    urlKind: video
    doi: null
    verified: false
  - id: kay-1977
    citation: "Kay and Goldberg, “Personal Dynamic Media,” IEEE Computer, 1977"
    authors: "Kay and Goldberg"
    title: "Personal Dynamic Media"
    venue: "IEEE Computer"
    year: 1977
    tag: Core
    description: "Kay and Goldberg describe the Dynabook, a portable personal computer meant for everyone including children, and the Smalltalk system built toward it. The article set out the vision behind the modern personal computer and laptop."
    url: "https://marcusdenker.de/old/_Personal_Dynamic_Media_.html"
    urlKind: archive
    doi: "10.1109/C-M.1977.217672"
    verified: true
  - id: kay-1993
    citation: "Kay, “The Early History of Smalltalk,” HOPL-II, 1993"
    authors: "Kay"
    title: "The Early History of Smalltalk"
    venue: "HOPL-II / ACM SIGPLAN Notices"
    year: 1993
    tag: Modern
    description: "Kay's retrospective explains the ideas behind Smalltalk and the Dynabook, from Sketchpad and Simula to Piaget and Papert. It shows how a theory of learning drove the design of the GUI and object-oriented programming."
    url: "https://worrydream.com/EarlyHistoryOfSmalltalk/"
    urlKind: archive
    doi: "10.1145/234286.1057828"
    verified: true
  - id: johnson-1989
    citation: "Johnson et al., “The Xerox Star: A Retrospective,” IEEE Computer, 1989"
    authors: "Johnson et al."
    title: "The Xerox Star: A Retrospective"
    venue: "IEEE Computer"
    year: 1989
    tag: Core
    description: "The designers of the Xerox Star look back on the first commercial desktop interface, with icons, windows, and WYSIWYG documents. They explain their design choices and why the product sold poorly despite its influence."
    url: "https://www.lri.fr/~mbl/FundHCI/papers/XeroxStar-Computer89.pdf"
    urlKind: pdf
    doi: "10.1109/2.35211"
    verified: true
---

## Abstract

Interactive graphics is the practice of letting people see and act on visual representations on a screen in real time. A few systems from the 1960s to the 1980s built the vocabulary of the desktop interface, and their design decisions still shape how computers are used.

> **From the reading list:** A small set of systems showed that direct, visual, real-time interaction was possible and built the vocabulary of the desktop. Read them for the design decisions, not just the firsts.

## History

- 1963 — Sutherland's Sketchpad introduces light-pen drawing, constraints, and master/instance objects.
- 1968 — Engelbart's demo shows the mouse, hypertext, windows and shared-screen collaboration.
- 1970s — Kay and Goldberg at Xerox PARC describe the Dynabook vision and build Smalltalk with overlapping windows.
- 1981 — The Xerox Star ships the desktop metaphor, icons and consistent generic commands, later reviewed in a 1989 retrospective.

## Core concepts

- **Constraint-based drawing** — Sketchpad's idea that users state relations among parts and the system keeps them satisfied.
- **Dynabook** — Kay's vision of a portable personal computer that children and adults could use to create and simulate.
- **Desktop metaphor** — Representing files and actions as office objects such as documents, folders and trash.
- **Generic commands** — The Star's small set of commands (move, copy, delete, show properties) that work the same on every object type.
- **Users as authors** — The goal, central to Smalltalk, that ordinary users should be able to build their own tools.

## Questions, controversies, and new developments

- **Controversies.** Origin myths credit Apple and Xerox over government-funded labs. Kay argued the Mac kept the GUI but dropped the Dynabook's goal of users as programmers, and Nelson attacked the desktop metaphor as a paper simulation. The Star's commercial failure raises whether good HCI sells.
- **Responses and new developments.** Myers and Kay corrected the history. Post-WIMP research (Part III) challenges the metaphor, and end-user programming (Part VII) picks up the lost “users as authors” goal.

## Broader connections

- **Influence.** Sketchpad seeded computer graphics, CAD and constraint solving. Smalltalk shaped object-oriented programming, the model-view-controller pattern, IDEs and GUI toolkits.

## Discussion questions

- Which of the Star's design principles have held up, and which were tied to office work of the early 1980s?
- Kay says the Mac kept the GUI but dropped users as programmers. Is that a fair reading of history, and does it matter now?
- Popular histories credit Apple and Xerox, while Myers stresses government-funded research. How does the origin story shape what we think HCI research is for?
