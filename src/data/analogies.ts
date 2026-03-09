export interface Analogy {
  doctrine: string;
  analogy: string;
  source: string;
  strengths: string[];
  limitations: string[];
  heresyWarning?: string;
}

export const ANALOGIES: Analogy[] = [
  // Trinity
  {
    doctrine: "The Trinity",
    analogy: "The sun, its light, and its warmth — one source, three distinct manifestations.",
    source: "Common patristic analogy",
    strengths: ["Illustrates shared origin", "Shows real distinction without separation", "Accessible to anyone"],
    limitations: ["Light and warmth are effects, not persons", "Suggests modalism if pressed too far"],
    heresyWarning: "Can slide into Modalism — the sun analogy can imply the three 'modes' aren't truly distinct persons."
  },
  {
    doctrine: "The Trinity",
    analogy: "The mind knowing itself: the mind, its self-knowledge, and the love between them (Augustine's psychological analogy).",
    source: "St. Augustine, De Trinitate",
    strengths: ["Grounded in the imago Dei", "Shows processions (intellect and will)", "Used by Aquinas himself"],
    limitations: ["Mind, knowledge, and love are not really distinct things", "Requires philosophical background"],
    heresyWarning: "If misunderstood, can suggest the persons are just aspects of God's self-awareness (Modalism)."
  },
  {
    doctrine: "The Trinity",
    analogy: "Three candles lighting one flame — three sources, one fire.",
    source: "Common apologetic analogy",
    strengths: ["Simple visual", "Shows unity"],
    limitations: ["Three candles are three separate objects", "Dangerously close to Tritheism"],
    heresyWarning: "Strongly suggests Tritheism — three separate gods who combine their power."
  },
  {
    doctrine: "The Trinity",
    analogy: "Water in three states: ice, liquid, steam.",
    source: "Common but problematic",
    strengths: ["Shows one substance in different forms"],
    limitations: ["Water cannot be all three simultaneously", "Classic example of Modalism"],
    heresyWarning: "THIS IS MODALISM. Water changes states sequentially — the Father, Son, and Spirit are eternally and simultaneously distinct persons. Do not use this analogy."
  },
  {
    doctrine: "The Trinity",
    analogy: "A man who is simultaneously a father, a son, and a husband.",
    source: "Common but heretical",
    strengths: ["Shows one person with multiple roles"],
    limitations: ["These are roles, not persons", "Textbook Modalism"],
    heresyWarning: "THIS IS MODALISM. This analogy says God is one person wearing three masks. The Son is not the Father playing a role."
  },
  // Incarnation
  {
    doctrine: "The Incarnation",
    analogy: "A king who disguises himself as a peasant to live among his people — not ceasing to be king, but taking on a new mode of life.",
    source: "Soren Kierkegaard, Philosophical Fragments",
    strengths: ["Shows voluntary self-humbling", "The king doesn't stop being king"],
    limitations: ["A disguise can be removed; Christ's human nature is permanent", "Can suggest the humanity is merely appearance"],
    heresyWarning: "Can slide into Docetism if it implies the human nature is a costume rather than a real nature assumed."
  },
  {
    doctrine: "The Incarnation",
    analogy: "An author writing himself into his own story as a character — fully present in the narrative while remaining the author.",
    source: "C.S. Lewis / modern apologetics",
    strengths: ["Shows the Creator entering creation", "The author doesn't stop being the author", "The character is real within the story"],
    limitations: ["A character is fictional; Christ's humanity is real", "Can suggest God is 'playing a part'"],
  },
  {
    doctrine: "The Incarnation",
    analogy: "A sword placed in fire — the sword becomes red-hot, sharing the fire's heat and light, while remaining a sword.",
    source: "St. John of Damascus",
    strengths: ["Shows two natures united without confusion", "The sword doesn't become fire, nor fire become sword", "Classic Eastern analogy"],
    limitations: ["Fire and sword are both created things", "The union of natures in Christ is unique"],
  },
  // Eucharist
  {
    doctrine: "The Eucharist (Transubstantiation)",
    analogy: "A letter sealed with a king's seal — the wax remains wax in appearance, but it now bears the authority and presence of the king.",
    source: "Medieval theological tradition",
    strengths: ["Shows substance change under same accidents", "Accessible"],
    limitations: ["The wax doesn't actually become the king", "Can downplay the reality of the change"],
  },
  {
    doctrine: "The Eucharist (Transubstantiation)",
    analogy: "In Aristotelian terms: the substance (what a thing IS) changes from bread to Christ's Body, while the accidents (what a thing LOOKS like) remain those of bread.",
    source: "St. Thomas Aquinas, ST III, q.75",
    strengths: ["Technically precise", "Uses the correct philosophical framework", "Actually explains the doctrine"],
    limitations: ["Requires understanding of substance/accident distinction", "Not intuitive for modern audiences"],
  },
  // Original Sin
  {
    doctrine: "Original Sin",
    analogy: "A polluted river — the contamination at the source affects every drop of water downstream, even though each drop didn't cause the pollution.",
    source: "Common theological analogy",
    strengths: ["Shows inherited condition vs. personal guilt", "Explains universality", "Shows need for purification"],
    limitations: ["Can imply we are personally guilty for Adam's act", "Water is passive; humans have free will"],
  },
  {
    doctrine: "Original Sin",
    analogy: "A nobleman who commits treason — his descendants lose their titles and privileges, not because of their personal crime, but because of their father's.",
    source: "St. Thomas Aquinas, ST I-II, q.81",
    strengths: ["Aquinas's own analogy", "Shows loss of inherited gifts", "Distinguishes loss of privilege from personal guilt"],
    limitations: ["Modern people find inherited punishment unjust", "The analogy is culturally distant"],
  },
  // Grace
  {
    doctrine: "Grace",
    analogy: "A branch grafted onto a vine — it shares the vine's life not by its own nature but by being joined to the vine.",
    source: "John 15:1-8 / Patristic tradition",
    strengths: ["Scriptural basis", "Shows participation in divine life", "The branch is real but dependent"],
    limitations: ["A branch has no choice; grace requires cooperation"],
  },
  {
    doctrine: "Grace",
    analogy: "Iron placed in fire becomes glowing hot — it participates in fire's nature (heat, light) while remaining iron.",
    source: "St. Thomas Aquinas, common scholastic analogy",
    strengths: ["Shows participation without destruction of nature", "Grace elevates, doesn't replace", "Classic Thomistic image"],
    limitations: ["Iron is passive; the soul cooperates with grace"],
  },
  // Hypostatic Union
  {
    doctrine: "Hypostatic Union",
    analogy: "Body and soul in a human person — two complete natures (material and spiritual) united in one person without confusion.",
    source: "Athanasian Creed / common patristic",
    strengths: ["Everyone experiences being body-and-soul", "Shows real distinction without separation", "One person, two natures"],
    limitations: ["Body and soul are parts; Christ's natures are complete", "The union of body and soul is natural; the hypostatic union is unique"],
    heresyWarning: "If pushed too far, can imply Christ's natures relate as parts to a whole, which approaches Apollinarianism."
  },
  // Purgatory
  {
    doctrine: "Purgatory",
    analogy: "A man rescued from a muddy pit — he's saved, but he needs to be cleaned up before entering the king's banquet hall.",
    source: "Common apologetic analogy",
    strengths: ["Shows salvation is accomplished but purification remains", "Intuitive", "Shows it's about fitness, not earning"],
    limitations: ["Can imply Purgatory is about external cleaning rather than interior transformation"],
  },
  {
    doctrine: "Purgatory",
    analogy: "Gold refined by fire — the fire doesn't destroy the gold but removes the dross, making it pure.",
    source: "1 Corinthians 3:13-15 / Patristic tradition",
    strengths: ["Scriptural basis", "Shows purification, not punishment", "The gold is saved through fire"],
    limitations: ["Can sound like works-righteousness if not properly contextualized"],
  },
  // Predestination & Free Will
  {
    doctrine: "Predestination and Free Will",
    analogy: "An author who writes a story in which characters make real choices — the author determines the plot, but the characters genuinely choose within it.",
    source: "C.S. Lewis / Thomistic tradition",
    strengths: ["Shows how divine sovereignty and human freedom coexist", "God's knowledge is authorial, not coercive"],
    limitations: ["Fictional characters don't really choose", "Can make human freedom seem illusory"],
  },
  // Natural Law
  {
    doctrine: "Natural Law",
    analogy: "The owner's manual for a car — the manufacturer knows the design and tells you how to use it properly. You can ignore the manual, but you'll damage the car.",
    source: "Modern apologetics",
    strengths: ["Shows moral law as design-based, not arbitrary", "Intuitive for modern audiences", "Connects to the idea of proper function"],
    limitations: ["Humans aren't machines", "Can reduce morality to mere function"],
  },
  // The Five Ways
  {
    doctrine: "Argument from Motion (First Way)",
    analogy: "A train of boxcars — each car is moved by the one behind it, but there must be an engine at the front or nothing moves at all.",
    source: "Common Thomistic analogy",
    strengths: ["Shows the need for an unmoved mover", "Simple visual", "Illustrates essentially ordered series"],
    limitations: ["The engine is itself a physical mover", "A train is a temporal series; the Five Ways address simultaneous causation"],
  },
  {
    doctrine: "Argument from Contingency (Third Way)",
    analogy: "A chandelier hanging from a chain — each link is held up by the one above it, but there must be a hook in the ceiling or the whole chain falls.",
    source: "Common Thomistic analogy",
    strengths: ["Shows the need for a necessary being", "Illustrates hierarchical dependence", "Not about temporal sequence"],
    limitations: ["The ceiling hook is still a physical thing", "Can be mistaken for a temporal argument"],
  },
];
