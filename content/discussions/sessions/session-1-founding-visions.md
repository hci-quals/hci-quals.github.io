---
session: 1
theme: Founding visions of human–computer partnership
date: 2026-11-05
idea: augmentation
readings:
  ideas: [bush-1945, licklider-1960]
  instantiations: [lee-2022, lee-2025, yang-2020]
sources:
  - session1-zoom-ai-summary
  - shared-google-doc-session-1-human-notes
  - partial-session-1-zoom-transcript
---

# Session 1: Founding visions of human–computer partnership

The central theme of the reading series is *augmentation over automation*, meaning systems that enhance human capabilities rather than replace human judgment. The foundational and modern papers build a shared picture of how humans and machines should collaborate, including a distinction between derivable correctness and value-based judgment.

The aim is a foundation of HCI knowledge and a website that serves as an “encyclopedia of HCI knowledge,” based on agreed-upon answers to key questions, kept compact. Each reading is taken through those questions and refined into a cohesive representation of the text; the format can evolve. These pages are that representation. The main readings run in chronological order, starting with Bush.

## Cross-reading synthesis

Bush and Licklider form a paired founding vision. Bush’s problem is too much knowledge and too primitive a set of tools, addressed by machines that work with an associative, personal, instrumental use of information. Licklider’s problem is the false choice between mechanically extended man and full automation, addressed by a symbiotic middle in which people specify goals and evaluate, machines do deterministic and manual work, and the loop is tight and real-time (a pattern prefigured in tools such as Jupyter Notebooks). Together they give the theme its positive picture: instruments you can master, goals you can state, verification you can perform, context you can follow along a trail.

The instantiation readings take up those claims in current systems.

CoAuthor (Lee, Liang, and Yang, 2022) treats symbiosis as a claim about method: if partnership is an activity, the data should be interaction traces, not only outputs. Whether observable behavior is enough to understand the human in the partnership, or whether internal state is needed, is open.

The Impact of Generative AI on Critical Thinking (Lee et al., 2025) maps a similar loop — goals, instructions, verification — onto knowledge work, and reports less critical thinking under AI, especially when confidence in the AI is high. *Derivable* is not the same as *true*. Simon’s ill-structured problems apply: many goals cannot be fully specified, and uncertainty about goals often leads people to defer granularity to the model. A design problem follows: help people refine goals and success criteria. Alongside checking a verifiable part (does the program work?), should one probe whether an output fits a person’s values, and how can that kind of thicker description be embedded in real-time interaction?

Yang et al. (2020) is a meta-application of Licklider. Classic HCI, like classic programming, planned exact paths. Goal-oriented and just-in-time interfaces shift the work toward intent, while making design harder: capabilities are uncertain (especially when systems learn; a benchmark is only as good as it is, with Microsoft Tay as an example), and outputs are too complex for methods that assume fixed outcome states.

## Open questions

- **Verification vs. derivability.** How can systems distinguish between “derivable” correctness (logical consistency) and “true/good” outcomes that require human value judgments?
- **Measuring human intelligence.** Can human intelligence and activity be meaningfully understood by studying external patterns of behavior, or is internal state (for example EEG) necessary?
- **Goal refinement.** How can AI systems help users refine their goals and establish better criteria for success, rather than just producing an answer?
- **Self-improving systems.** Where does the line sit between symbiotic augmentation and systems that can generate their own software or interfaces?

A related question: how can value-sensitive, qualitative understanding (“a thicker description”) be embedded in real-time interaction, not only after the fact? Herbert Simon’s “The Structure of Ill-Structured Problems” is a possible future reading, specifically for its analysis of *along which dimensions* design problems are underspecified.
