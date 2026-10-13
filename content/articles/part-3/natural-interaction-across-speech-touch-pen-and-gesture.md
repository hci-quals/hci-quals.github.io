---
id: natural-interaction-across-speech-touch-pen-and-gesture
title: "Speech, touch, pen and gesture help only when labor is divided well and the body gets feedback."
topic: "“Natural” interaction across speech, touch, pen and gesture"
part: part-3
keyIdea: part-3-ki3
order: 19
status: draft
label: "Multimodal interaction"
origin:
  reading: bolt-1980
  year: 1980
  blurb: "In 1980 Richard Bolt’s Put-That-There at MIT combined speech and pointing to move objects on a wall-sized display."
readings:
  - id: bolt-1980
    citation: "Bolt, “Put-That-There: Voice and Gesture at the Graphics Interface,” SIGGRAPH 1980"
    authors: "Bolt"
    title: "“Put-That-There”: Voice and Gesture at the Graphics Interface"
    venue: "SIGGRAPH 1980"
    year: 1980
    tag: Core
    description: "Bolt presents a system where users point at a large screen and speak commands such as “put that there.” It was the first demonstration of combining speech and gesture in an interface."
    url: "https://www.media.mit.edu/speech/papers/1980/bolt_SIGGRAPH80_put-that-there.pdf"
    urlKind: pdf
    doi: "10.1145/800250.807503"
    verified: true
  - id: oviatt-1999
    citation: "Oviatt, “Ten Myths of Multimodal Interaction,” CACM, 1999"
    authors: "Oviatt"
    title: "Ten Myths of Multimodal Interaction"
    venue: "Communications of the ACM"
    year: 1999
    tag: Added
    description: "Oviatt uses empirical findings to correct assumptions about multimodal systems, such as that people always combine modes or that speech is primary. The paper gives multimodal design an evidence base."
    url: "https://dl.acm.org/doi/pdf/10.1145/319382.319398"
    urlKind: open
    doi: "10.1145/319382.319398"
    verified: true
  - id: buxton-2007
    citation: "Buxton, “Multi-Touch Systems That I Have Known and Loved,” 2007"
    authors: "Buxton"
    title: "Multi-Touch Systems That I Have Known and Loved"
    venue: "billbuxton.com (web essay)"
    year: 2007
    tag: Core
    description: "Buxton traces multi-touch research back to the 1980s, long before the iPhone. The web essay corrects common myths about where touch interfaces came from."
    url: "http://www.billbuxton.com/multitouchOverview.html"
    urlKind: author
    doi: null
    verified: true
  - id: hinckley-2010
    citation: "Hinckley et al., “Pen + Touch = New Tools,” UIST 2010"
    authors: "Hinckley et al."
    title: "Pen + Touch = New Tools"
    venue: "UIST 2010"
    year: 2010
    tag: Core
    description: "Hinckley and colleagues study how people use pen and touch together and build tools where the pen writes and touch manipulates. The paper shows how to divide work between input modalities."
    url: "https://www.microsoft.com/en-us/research/publication/pen-touch-new-tools/"
    urlKind: author
    doi: "10.1145/1866029.1866036"
    verified: true
  - id: wobbrock-2009
    citation: "Wobbrock, Morris and Wilson, “User-Defined Gestures for Surface Computing,” CHI 2009"
    authors: "Wobbrock, Morris and Wilson"
    title: "User-Defined Gestures for Surface Computing"
    venue: "CHI 2009"
    year: 2009
    tag: Core
    description: "Wobbrock, Morris, and Wilson ask non-technical users to invent gestures for common commands on a tabletop. The resulting gesture set and elicitation method are widely reused in gesture research."
    url: "https://microsoft.com/en-us/research/wp-content/uploads/2009/04/SurfaceGestures_CHI2009.pdf"
    urlKind: pdf
    doi: "10.1145/1518701.1518866"
    verified: true
  - id: wigdor-2011
    citation: "Wigdor and Wixon, “Touch versus In-Air Gestures,” Brave NUI World, 2011"
    authors: "Wigdor and Wixon"
    title: "Touch versus In-Air Gestures (in Brave NUI World)"
    venue: "Morgan Kaufmann"
    year: 2011
    tag: Core
    description: "Wigdor and Wixon compare touch gestures with mid-air gestures. Mid-air gestures lack physical feedback and cause fatigue, which limits where they work well."
    url: "https://shop.elsevier.com/books/brave-nui-world/wigdor/978-0-12-382231-4"
    urlKind: publisher
    doi: null
    verified: true
  - id: norman-2010
    citation: "Norman, “Natural User Interfaces Are Not Natural,” Interactions, 2010"
    authors: "Norman"
    title: "Natural User Interfaces Are Not Natural"
    venue: "Interactions"
    year: 2010
    tag: Added
    description: "Norman argues that gestures are neither natural nor discoverable and that gestural interfaces abandon hard-won principles like feedback and consistency. The essay is a short counterweight to NUI enthusiasm."
    url: "https://interactions.acm.org/archive/view/may-june-2010/natural-user-interfaces-are-not-natural1"
    urlKind: publisher
    doi: "10.1145/1744161.1744163"
    verified: true
---

## Abstract

Multimodal and ‘natural’ interaction uses speech, touch, pen and gesture, alone or together, as input to computers. Its value depends on dividing work well between modalities and on giving clear feedback, and critics argue that what counts as natural is designed and learned.

> **From the reading list:** Each new modality promises naturalness, but its value depends on dividing labor well and on feedback the body can feel. Critiques warn that “natural” is designed, not given.

## History

- 1980 — Bolt’s Put-That-There combines voice commands with pointing gestures.
- 1999 — Oviatt’s ‘Ten Myths’ uses empirical data to challenge assumptions about multimodal systems.
- 2007–2010 — Multi-touch spreads; Buxton traces its history, Wobbrock et al. elicit user gestures, Hinckley et al. combine pen and touch.
- 2010–2011 — Norman argues natural user interfaces are not natural; Wigdor and Wixon compare touch and in-air gestures.

## Core concepts

- **Multimodal integration** — Combining input from more than one channel, such as speech and pointing, into one command.
- **Division of labor** — Assigning each input modality the role it suits, such as pen for writing and touch for manipulation.
- **Gesture elicitation** — A method in which users propose gestures for given effects, and agreement across users is measured.
- **Legacy bias** — The tendency for elicited gestures to copy familiar mouse or touch conventions.
- **Discoverability** — How easily a person can find out what actions a system supports.

## Questions, controversies, and new developments

- **Controversies.** “Natural” is partly a marketing term. Gesture elicitation suffers from legacy bias toward familiar mouse and touch actions (Morris et al., 2014), mid-air input causes “gorilla arm,” and speech recognizers err far more for Black speakers (Koenecke et al., PNAS 2020).
- **Responses and new developments.** Elicitation methods were revised to reduce legacy bias, and the consumed-endurance metric (Hincapié-Ramos et al., CHI 2014) quantifies arm fatigue. Speech bias findings pushed for more diverse training data.

## Broader connections

- **Influence.** This work shaped smartphones, AR/VR hand tracking and multimodal ML, and it prompted fairness audits of speech systems.

## Discussion questions

- Oviatt argues that multimodal input is not just speech plus pointing. Which of her myths still shape today’s voice and AR systems?
- Is user-defined gesture elicitation a design method or a measure of existing habits?
- Norman says gestures leave no trace. How do pen + touch or AR hand tracking address or fail to address this?
