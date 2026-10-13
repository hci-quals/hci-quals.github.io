---
id: input-devices-form-a-design-space
title: "Input devices form a design space"
part: part-3
keyIdea: part-3-ki1
order: 15
status: draft
label: "Input design space"
origin:
  reading: card-1991
  year: 1991
  blurb: "In 1990–91 Card, Mackinlay and Robertson at Xerox PARC described input devices as points in a design space defined by what they sense and how they compose."
readings:
  - id: card-1991
    citation: "Card, Mackinlay and Robertson, “A Morphological Analysis of the Design Space of Input Devices,” TOIS, 1991"
    authors: "Card, Mackinlay and Robertson"
    title: "A Morphological Analysis of the Design Space of Input Devices"
    venue: "ACM Transactions on Information Systems"
    year: 1991
    tag: Core
    description: "Card, Mackinlay, and Robertson describe input devices by what they sense and how they combine, producing a design space of all possible devices. The paper shows how to analyze a design space systematically."
    url: "https://apps.hci.rwth-aachen.de/borchers-old/cs377a/handouts/p99-card.pdf"
    urlKind: pdf
    doi: "10.1145/123078.128726"
    verified: true
  - id: buxton-1990
    citation: "Buxton, “A Three-State Model of Graphical Input,” INTERACT 1990"
    authors: "Buxton"
    title: "A Three-State Model of Graphical Input"
    venue: "INTERACT 1990"
    year: 1990
    tag: Core
    description: "Buxton describes graphical input as three states: out of range, tracking, and dragging. The model explains why mice, pens, and touchscreens behave differently and what each can and cannot support."
    url: "https://billbuxton.com/3state.html"
    urlKind: author
    doi: null
    verified: true
---

## Abstract

An input design space describes devices by the physical properties they sense, such as position, force or rotation, and the states they support, such as tracking or dragging. Treating devices this way explains why some feel different for the same task and points to device designs that do not yet exist.

> **From the reading list:** Devices can be described by what they sense and what states they support, which reveals unexplored designs and explains why devices differ.

## History

- 1985 — Buxton, Hill and Rowley propose an early model of input states for graphical interaction.
- 1990 — Buxton’s three-state model separates out-of-range, tracking and dragging states for pointing devices.
- 1991 — Card, Mackinlay and Robertson publish a morphological analysis of input devices in ACM TOIS.
- 2000s — Researchers add hover, pressure and touch states; ‘design space’ papers become a common HCI genre.

## Core concepts

- **Morphological analysis** — Laying out designs as combinations of parameters so that each device is a point in a space.
- **Composition operators** — Ways of combining simple sensors, such as merging or layering, to describe complex devices.
- **Three-state model** — Buxton’s description of pointing input as out-of-range, tracking and dragging states with transitions between them.
- **Expressiveness and effectiveness** — Whether a device can convey the intended input, and how well it does so for a person.

## Questions, controversies, and new developments

- **Controversies.** Morphological spaces describe but do not evaluate, and they can explode combinatorially. Buxton's three states do not cover multitouch or in-air input well.
- **Responses and new developments.** Later work added states for touch, pressure and hover. “Design space” papers became a genre, with reviewers sometimes calling them shallow.

## Broader connections

- **Influence.** The models shaped input device engineering, game controllers and OS input stacks, such as the hover state for pens.

## Discussion questions

- Which states would you need to add to Buxton’s model to describe multitouch or in-air hand tracking?
- A design space describes but does not evaluate. When is a design space paper a real contribution?
- Pick a recent device, such as a VR controller or smart ring, and place it in Card et al.’s space. What gaps appear?
