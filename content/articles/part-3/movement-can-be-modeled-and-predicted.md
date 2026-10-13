---
id: movement-can-be-modeled-and-predicted
title: "Movement can be modeled and predicted"
part: part-3
keyIdea: part-3-ki1
order: 14
status: draft
label: "Pointing models"
origin:
  reading: card-1978
  year: 1978
  blurb: "In 1978 Card, English and Burr showed that mouse pointing time follows Fitts’ law, bringing a 1954 motor-control model into the evaluation of computer input devices."
readings:
  - id: fitts-1954
    citation: "Fitts, “The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement,” Journal of Experimental Psychology, 1954"
    authors: "Fitts"
    title: "The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement"
    venue: "Journal of Experimental Psychology"
    year: 1954
    tag: Adjacent
    description: "Fitts shows that the time to hit a target grows with the log of distance over width, treating movement as information transmission. This is the original statement of the law HCI adopted."
    url: "https://www.cs.princeton.edu/courses/archive/fall08/cos436/FittsJEP1954.pdf"
    urlKind: pdf
    doi: "10.1037/h0055392"
    verified: true
  - id: mackenzie-1992
    citation: "MacKenzie, “Fitts' Law as a Research and Design Tool in HCI,” HCI, 1992"
    authors: "MacKenzie"
    title: "Fitts' Law as a Research and Design Tool in Human-Computer Interaction"
    venue: "Human-Computer Interaction"
    year: 1992
    tag: Core
    description: "MacKenzie reviews Fitts' law, which predicts movement time from the distance to a target and its size, and shows how to apply it in HCI. The paper made Fitts' law a standard tool for comparing pointing devices."
    url: "https://www.yorku.ca/mack/hci1992.html"
    urlKind: author
    doi: "10.1207/s15327051hci0701_3"
    verified: true
  - id: card-1978
    citation: "Card, English and Burr, “Evaluation of Mouse, Rate-Controlled Isometric Joystick, Step Keys, and Text Keys,” Ergonomics, 1978"
    authors: "Card, English and Burr"
    title: "Evaluation of Mouse, Rate-Controlled Isometric Joystick, Step Keys, and Text Keys for Text Selection on a CRT"
    venue: "Ergonomics"
    year: 1978
    tag: Core
    description: "Card, English, and Burr compare the mouse, a joystick, step keys, and text keys for selecting text on a screen. The mouse was fastest, and the study helped bring it to the Xerox Star."
    url: "https://ftp.mirrorservice.org/sites/www.bitsavers.org/pdf/xerox/parc/techReports/SSL-77-1_Evaluation_of_Mouse_Rate-Controlled_Isometric_Joystick_Step_Keys_and_Text_Keys_for_Text_Selection_on_a_CRT.pdf"
    urlKind: archive
    doi: "10.1080/00140137808931762"
    verified: true
  - id: accot-1997
    citation: "Accot and Zhai, “Beyond Fitts' Law: Models for Trajectory-Based HCI Tasks,” CHI 1997"
    authors: "Accot and Zhai"
    title: "Beyond Fitts' Law: Models for Trajectory-Based HCI Tasks"
    venue: "CHI 1997"
    year: 1997
    tag: Added
    description: "Accot and Zhai derive the steering law, which predicts the time to move through a tunnel such as a cascading menu. It extends Fitts' law from targets to paths."
    url: "https://chi1997.chistatic.hosting.acm.org/proceedings/paper/ja.html"
    urlKind: open
    doi: "10.1145/258549.258760"
    verified: true
  - id: bi-2013
    citation: "Bi, Li and Zhai, “FFitts Law: Modeling Finger Touch with Fitts' Law,” CHI 2013"
    authors: "Bi, Li and Zhai"
    title: "FFitts Law: Modeling Finger Touch with Fitts' Law"
    venue: "CHI 2013"
    year: 2013
    tag: Modern
    description: "Bi, Li, and Zhai show that standard Fitts' law fits touch poorly because finger contact is imprecise, and add a term for that noise. The paper updates the classic model for touchscreens."
    url: "https://research.google.com/pubs/archive/41645.pdf"
    urlKind: pdf
    doi: "10.1145/2470654.2466180"
    verified: true
---

## Abstract

Movement modeling is the use of lawful relationships between distance, target size and time to predict how quickly and accurately people can point, steer or touch. In HCI these models let researchers compare devices and layouts on a common scale and predict performance before building a system.

> **From the reading list:** Pointing and steering follow lawful relationships between distance, size and time, which makes devices and layouts comparable. The same models have been refit for fingers on glass.

## History

- 1954 — Fitts uses information theory to show movement time grows with the log of distance over target width.
- 1978 — Card, English and Burr find the mouse beats joysticks and keys, and its pointing time fits Fitts’ law.
- 1992 — MacKenzie reviews Fitts’ law for HCI and proposes the Shannon formulation of the index of difficulty.
- 1997–2013 — Accot and Zhai derive the steering law for paths; Bi, Li and Zhai refit Fitts’ law for finger touch (FFitts).

## Core concepts

- **Index of difficulty** — A measure, in bits, of how hard a pointing task is, computed from target distance and width.
- **Throughput** — Bits per second achieved when pointing, used to compare input devices.
- **Effective width** — Target width recomputed from the actual spread of hits, so that models reflect real accuracy.
- **Steering law** — A model predicting the time to move through a constrained path from its length and width.
- **Absolute precision** — In FFitts law, the touch error from finger size that does not shrink with slower movement.

## Questions, controversies, and new developments

- **Controversies.** Researchers disagreed for decades on which Fitts formulation to use and how to compute effective width and throughput (Soukoreff and MacKenzie, 2004, versus critics). The laws describe averages, not individuals or novices.
- **Responses and new developments.** ISO 9241-9 standardized pointing evaluation. Probabilistic touch models (Bi and Zhai's Bayesian Touch, 2013) and the steering law extend modeling to fingers and paths.

## Broader connections

- **Influence.** Fitts' law justified the mouse, screen-edge menus and pie menus. It informs WCAG target-size guidelines, game design and robot teleoperation.

## Discussion questions

- Fitts framed movement as an information channel. What does that metaphor capture, and what does it hide?
- Card, English and Burr’s study helped justify the mouse. What would an equivalent study look like for today’s new input devices?
- If the laws describe averages, how should designers handle novices, older adults or people with motor impairments?
