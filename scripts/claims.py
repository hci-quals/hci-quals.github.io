"""Rename parts, key ideas and ideas so each heading is a claim; keeps the doc's wording in `topic:`."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "content"

PARTS = {
    "part-1": "Visions and historical foundations",
    "part-2": "Theory, cognition and models of interaction",
    "part-3": "Input, interaction techniques and interface paradigms",
    "part-4": "Ubiquitous, tangible and embodied computing",
    "part-5": "Design, prototyping and research through design",
    "part-6": "Social computing, CSCW and crowdsourcing",
    "part-7": "Programming, tools, toolkits and tools for thought",
    "part-8": "Information and data visualization",
    "part-9": "Accessibility, values, equity and critical HCI",
    "part-10": "Methodological reflections and what counts as a contribution",
    "ai": "Human-AI interaction",
}

KEY_IDEAS = {
    "part-1-ki1": "Computers should augment human thinking and connect people, not just automate calculation.",
    "part-1-ki2": "A handful of interactive graphics systems invented the vocabulary of personal computing.",
    "part-1-ki3": "HCI became a discipline by fusing cognitive psychology with engineering, and its focus keeps moving outward.",
    "part-2-ki1": "Users can be modeled as bounded-rational information processors.",
    "part-2-ki2": "Cognition is situated, distributed and embodied.",
    "part-2-ki3": "People build models of systems and treat them as social others.",
    "part-3-ki1": "Input performance can be modeled and engineered.",
    "part-3-ki2": "Interfaces work best when people act directly on visible objects.",
    "part-3-ki3": "“Natural” interaction is designed, not given.",
    "part-4-ki1": "Computing should recede into the everyday environment.",
    "part-4-ki2": "Bodies and physical space matter for interaction.",
    "part-4-ki3": "Sensing people in daily life enables new interaction but is hard to evaluate.",
    "part-5-ki1": "Design is its own way of knowing.",
    "part-5-ki2": "Exploring many alternatives cheaply leads to better designs.",
    "part-5-ki3": "Users and experts should shape design and evaluation, within each method’s limits.",
    "part-6-ki1": "Collaboration depends on common ground and visibility.",
    "part-6-ki2": "Communities and crowds can be designed, and they run on human labor.",
    "part-6-ki3": "Platforms shape what people see, say and present.",
    "part-7-ki1": "Tools and notations shape what people can make and think.",
    "part-7-ki2": "Everyone can program, given the right tools.",
    "part-7-ki3": "Tools help most when they answer people’s real questions and make process visible.",
    "part-8-ki1": "Visual encodings should be judged by human perception.",
    "part-8-ki2": "Visualization can be formalized, automated and used for analysis.",
    "part-8-ki3": "Visualizations communicate, persuade, and include or exclude.",
    "part-9-ki1": "Technology carries values, and design can account for them.",
    "part-9-ki2": "Design reproduces or challenges inequality.",
    "part-9-ki3": "Accessibility should change systems, not fix users.",
    "part-10-ki1": "HCI must say what kind of knowledge a paper contributes.",
    "part-10-ki2": "Evaluation and fieldwork should fit the contribution.",
    "part-10-ki3": "HCI evidence must be replicable and come from real people.",
    "ai-ki1": "Dividing work between people and machines shifts human effort rather than removing it.",
    "ai-ki2": "Human-AI systems should support appropriate reliance and keep human values in charge.",
    "ai-ki3": "Generative AI is now an interface, a test subject and an influence on people.",
}

IDEAS = {
    "computers-as-partners-that-augment-the-intellect": "Computers should be partners that amplify the human intellect rather than replace it.",
    "interactive-graphics-and-the-personal-computer": "Sketchpad, the Dynabook and the Star showed that direct, visual, real-time interaction could make computers personal.",
    "how-hci-became-a-discipline": "The interface has moved outward, from hardware to the mind to the work group, and the field has moved with it.",
    "levels-of-analysis-and-what-a-model-of-the-user-is": "A model of the user must say which level of analysis it explains.",
    "the-user-as-an-information-processor": "Modeling perception, memory and motor stages lets designers predict expert performance.",
    "behavior-as-adaptation-to-the-information-environment": "Behavior is best explained as adaptation to the structure of the information environment.",
    "action-is-situated-not-planned": "Action is situated, not planned.",
    "cognition-extends-into-the-world": "Cognition extends beyond the head into people, artifacts and the world.",
    "the-form-of-a-representation-shapes-the-task": "The form of a representation shapes how hard a task is.",
    "embodiment-ecology-and-affordances": "Meaning comes from acting in a physical and social world, which is what affordances describe.",
    "comparing-and-synthesizing-theories": "No single theory covers HCI, so theories must be compared by what each one sees and misses.",
    "mental-models-and-intuitive-theories": "People reason about systems through mental models that are incomplete but revisable.",
    "people-treat-computers-as-social-others": "People automatically treat computers that show social cues as social actors.",
    "movement-can-be-modeled-and-predicted": "Pointing and steering follow lawful relationships, such as Fitts’ law, that predict movement time.",
    "input-devices-form-a-design-space": "Input devices form a design space defined by what they sense and the states they support.",
    "text-entry-as-a-modeling-and-recognition-problem": "Text entry succeeds by exploiting the statistics of language and movement.",
    "directness-and-instruments": "Interfaces feel direct when the gulfs between intention and effect are small.",
    "navigating-information-larger-than-the-screen": "When information exceeds the screen, interfaces must trade detail against context.",
    "natural-interaction-across-speech-touch-pen-and-gesture": "Speech, touch, pen and gesture help only when labor is divided well and the body gets feedback.",
    "computing-that-disappears-and-its-critics": "Computing should disappear into the background, though critics argue it should engage people instead.",
    "context-is-something-systems-sense-and-people-make": "Context is not just data a system senses; people make it through activity.",
    "physical-objects-as-interfaces": "Digital information should take physical forms that people can grasp.",
    "bodies-matter-for-thinking": "Physical action supports thinking, learning and collaboration.",
    "immersive-and-mixed-reality": "Immersive systems work by creating presence somewhere along the real–virtual continuum.",
    "sensing-people-in-daily-life": "On-body and environmental sensing can support behavior change, but long-term effects are hard to show.",
    "design-problems-are-ill-structured": "Design problems are ill-structured, so designing is a planning problem of framing what to solve.",
    "making-things-as-a-form-of-research": "Making artifacts can itself produce research knowledge.",
    "explore-many-alternatives-before-committing": "Comparing several rough options beats committing early to one.",
    "tools-that-support-design-itself": "Design tools should keep work rough and connect design, testing and analysis.",
    "involving-people-in-design": "People affected by a design should take part in making it.",
    "inspection-based-evaluation": "Experts can find many usability problems cheaply, but their judgments vary.",
    "collaboration-at-a-distance-needs-common-ground": "Collaboration at a distance needs common ground, not a copy of face-to-face meetings.",
    "make-social-activity-visible": "Making social activity visible lets groups coordinate and hold each other accountable.",
    "designing-communities-with-social-science": "Social science theory can guide how online communities are designed.",
    "crowds-as-computation-and-the-labor-behind-them": "Crowds can do work algorithms cannot, but their labor is often invisible and underpaid.",
    "people-reason-about-invisible-algorithms": "People form folk theories about the invisible algorithms that shape what they see.",
    "self-presentation-and-governance-online": "People perform for imagined audiences online, and communities govern themselves through volunteer labor.",
    "low-threshold-high-ceiling": "Good tools have a low threshold and a high ceiling.",
    "notations-are-tools-for-thought": "Notations are tools for thought that make some ideas easy to express and others hard.",
    "learning-by-building": "People learn powerful ideas by building things they care about.",
    "programming-for-everyone-else": "End users can program when languages fit their tasks or systems infer programs from examples.",
    "tools-that-help-programmers-understand-code": "Debugging is information seeking, so tools should answer the questions programmers actually ask.",
    "exploration-versus-explanation": "Much programming is exploration, and exploring is at odds with explaining results.",
    "tools-for-thought": "Tools for thought change thinking through practices, not apps.",
    "visual-variables-and-graphical-integrity": "Data maps onto a small set of visual variables, and charts should show data honestly.",
    "encodings-can-be-ranked-by-perceptual-accuracy": "Encodings can be ranked by how accurately people read them.",
    "how-people-comprehend-graphs": "Reading a graph means matching visual patterns to mental schemas.",
    "design-knowledge-can-be-formalized-and-automated": "Visualization design knowledge can be formalized and automated.",
    "visualization-as-interactive-analysis-and-sensemaking": "Visualization is a medium for interactive analysis and sensemaking.",
    "designing-and-validating-visualization-systems": "Visualization systems must be designed and validated at nested levels, together with domain experts.",
    "visualizations-tell-stories-and-make-arguments": "Visualizations tell stories and make arguments; no chart is neutral.",
    "communicating-uncertainty": "Uncertainty becomes usable when it is shown in the right format, such as frequencies.",
    "who-visualization-serves": "Visualization serves some people and excludes others unless it is designed otherwise.",
    "artifacts-embody-values": "Artifacts embody values and politics.",
    "building-with-critical-reflection": "Researchers should build systems while critically reflecting on their own assumptions.",
    "design-and-power-gender-race-and-colonial-histories": "Gender, race and colonial history shape design, so affected communities should lead it.",
    "designing-for-and-with-the-global-south": "Designing with the Global South requires questioning assumptions about development.",
    "accessibility-from-fixing-users-to-changing-systems": "Accessibility should build on what people can do and on interdependence.",
    "every-method-trades-something-off": "Every method trades off generality, precision and realism.",
    "hci-has-shifted-paradigms": "HCI has shifted paradigms, and each paradigm needs its own methods.",
    "ways-of-knowing": "HCI produces knowledge in several distinct ways, each with its own standards.",
    "what-ethnography-is-for": "Ethnography’s value is understanding, not a list of design implications.",
    "evaluate-systems-on-their-own-terms": "Systems should be evaluated on their own terms, not forced through user studies.",
    "statistics-replication-and-open-science": "Flexible analyses produce false findings, so HCI needs open and replicable science.",
    "can-models-stand-in-for-people": "Language models cannot stand in for human participants.",
    "automation-shifts-work-instead-of-removing-it": "Automation shifts work instead of removing it.",
    "delegation-versus-control-agents-and-mixed-initiative": "Systems should act for people only when the expected benefit outweighs the cost of being wrong.",
    "people-teach-machines": "People teach machines, and human feedback is now the core training signal.",
    "designing-for-uncertain-capable-systems": "AI should augment human agency even though its capabilities are uncertain.",
    "mental-models-explanation-and-appropriate-reliance": "Explanations improve reliance on AI only when checking the AI is easy.",
    "whose-values-whose-voices": "AI systems encode whose values and voices count.",
    "natural-language-as-the-interface": "Natural language has become the interface, reopening the gulfs of execution and evaluation.",
    "evaluating-models-with-and-through-people": "AI models should be evaluated with and through people, not only on benchmarks.",
    "language-models-as-models-of-minds-and-people": "Language models can simulate minds and people, but passing a test is not understanding.",
    "effects-on-peoples-work-thinking-and-beliefs": "Generative AI changes how people work, think and believe.",
}


def q(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


# parts.yaml
p = ROOT / "parts.yaml"
s = p.read_text()
for pid, short in PARTS.items():
    s = re.sub(rf'(  - id: {re.escape(pid)}\n    title: ).*\n(    short: ).*', lambda m: m.group(1) + q(short) + "\n" + m.group(2) + q(short), s)
for kid, claim in KEY_IDEAS.items():
    s = re.sub(rf'(      - id: {re.escape(kid)}\n        title: ).*', lambda m: m.group(1) + q(claim), s)
p.write_text(s)

# articles
for f in (ROOT / "articles").glob("*/*.md"):
    t = f.read_text()
    aid = re.search(r"^id: (.+)$", t, re.M).group(1)
    if aid not in IDEAS:
        raise SystemExit(f"no claim for {aid}")
    old = re.search(r"^title: (.+)$", t, re.M).group(1)
    if "\ntopic:" not in t:
        t = t.replace(f"title: {old}\n", f"title: {old}\ntopic: {old}\n", 1)
    t = re.sub(r"^title: .+$", "title: " + q(IDEAS[aid]), t, count=1, flags=re.M)
    f.write_text(t)

# syllabus week titles follow the key idea claims
y = ROOT / "syllabus.yaml"
lines = y.read_text().split("\n")
kis = list(KEY_IDEAS.values())
i = 0
for n, line in enumerate(lines):
    if line.startswith("  - title: "):
        lines[n] = "  - title: " + q(kis[i])
        i += 1
y.write_text("\n".join(lines))
print("updated", len(IDEAS), "ideas,", len(KEY_IDEAS), "key ideas,", i, "weeks")
