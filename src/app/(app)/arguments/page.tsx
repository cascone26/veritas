"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

interface Premise {
  text: string;
  support?: string;
  children?: Premise[];
}

interface ArgumentTree {
  title: string;
  conclusion: string;
  premises: Premise[];
}

const ARGUMENT_TREES: ArgumentTree[] = [
  {
    title: "The First Way: Argument from Motion",
    conclusion: "Therefore, there must exist a first mover, which is itself unmoved. This we call God.",
    premises: [
      {
        text: "Some things in the world are in motion (i.e., undergoing change).",
        support: "This is evident to the senses. A tree grows, water heats up, a stone falls.",
      },
      {
        text: "Whatever is in motion is moved by another.",
        support: "Nothing can move itself from potency to act — that would require it to be both potential and actual in the same respect simultaneously, which is a contradiction.",
        children: [
          {
            text: "Motion is the transition from potency to act.",
            support: "Aristotle, Physics III.1. To change is to go from being potentially X to being actually X.",
          },
          {
            text: "Nothing can be both in potency and in act in the same respect.",
            support: "The principle of non-contradiction. Wood is potentially hot but actually cold — it cannot be both actually hot and actually cold.",
          },
        ],
      },
      {
        text: "This chain of movers cannot go on to infinity.",
        support: "In an essentially ordered series (where each member depends on a prior member for its causal power right now), removing the first cause removes all subsequent causation. An infinite regress of dependent causes would have no first cause and therefore no causation at all.",
        children: [
          {
            text: "We are talking about an essentially ordered series, not an accidentally ordered series.",
            support: "An accidentally ordered series (like a chain of fathers begetting sons) could in principle be infinite. An essentially ordered series (like a hand moving a stick moving a ball) requires a first member because each member derives its causal power from the prior member simultaneously.",
          },
          {
            text: "Without a first mover, no subsequent motion is possible.",
            support: "Just as a chain cannot hold itself up without an anchor point, a series of simultaneously dependent movers requires an independent first mover.",
          },
        ],
      },
    ],
  },
  {
    title: "The Third Way: Argument from Contingency",
    conclusion: "Therefore, there must exist a being whose existence is necessary of itself, not receiving existence from another. This we call God.",
    premises: [
      {
        text: "We find in nature things that are possible to be and possible not to be (contingent beings).",
        support: "Everything we observe in the physical world could conceivably not exist. You, this table, the Earth — all could fail to exist.",
      },
      {
        text: "If everything were merely contingent, then at some point nothing would have existed.",
        support: "If a thing can not-be, then given infinite time, it will at some point not-be. If everything can not-be, then there was a time when nothing existed.",
        children: [
          {
            text: "What can fail to exist, at some time does not exist.",
            support: "Given sufficient time, every possibility is realized. If non-existence is possible for every being, then at some point all beings would simultaneously not exist.",
          },
        ],
      },
      {
        text: "If at some point nothing existed, then nothing would exist now.",
        support: "From nothing, nothing comes (ex nihilo nihil fit). If there was ever a state of absolute nothingness, nothing could have caused anything to begin existing.",
      },
      {
        text: "But things do exist now. Therefore, not everything is contingent.",
        support: "This is evident. We exist. The universe exists. Therefore our premise that everything is contingent must be false.",
      },
      {
        text: "There must be a necessary being. Either its necessity is caused by another, or it is necessary of itself.",
        support: "A necessary being cannot not-exist. Its existence is not contingent on anything else.",
        children: [
          {
            text: "A chain of caused necessary beings cannot go on infinitely (same reasoning as the Second Way).",
            support: "Just as with efficient causes, an essentially ordered series of necessary beings requires an uncaused first member.",
          },
        ],
      },
    ],
  },
  {
    title: "The Real Presence of Christ in the Eucharist",
    conclusion: "Therefore, the bread and wine truly become the Body and Blood of Christ — the Real Presence.",
    premises: [
      {
        text: "Christ said, 'This IS my body' and 'This IS my blood' (Matthew 26:26-28).",
        support: "The words of institution are plain and direct. Jesus does not say 'this represents' or 'this symbolizes.' He says 'this IS.'",
        children: [
          {
            text: "The Greek word 'estin' (is) is literal, not metaphorical.",
            support: "When Jesus uses metaphor elsewhere, the context makes it clear (e.g., 'I am the door'). Here, the apostles understood Him literally — and He did not correct them.",
          },
          {
            text: "In John 6, many disciples left because they took His words literally — and Jesus let them leave.",
            support: "John 6:60-66. If Jesus meant His words symbolically, He would have clarified. Instead, He doubled down and let disciples walk away.",
          },
        ],
      },
      {
        text: "Paul affirms the Real Presence and warns against unworthy reception.",
        support: "1 Corinthians 11:27-29 — 'Whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the body and blood of the Lord.' You cannot sin against a symbol.",
      },
      {
        text: "The early Church unanimously believed in the Real Presence.",
        support: "Ignatius of Antioch (107 AD), Justin Martyr (155 AD), Irenaeus (180 AD), Cyril of Jerusalem (350 AD) — all affirm that the Eucharist is truly Christ's Body and Blood.",
        children: [
          {
            text: "St. Ignatius of Antioch (c. 107 AD): Heretics 'abstain from the Eucharist because they do not confess that the Eucharist is the flesh of our Savior Jesus Christ.'",
            support: "Letter to the Smyrnaeans, Ch. 7. Written within living memory of the apostles.",
          },
          {
            text: "St. Justin Martyr (c. 155 AD): 'Not as common bread and common drink do we receive these; but as the flesh and blood of that Jesus who was made flesh.'",
            support: "First Apology, Ch. 66.",
          },
        ],
      },
      {
        text: "Transubstantiation explains HOW this is possible without contradiction.",
        support: "The substance (what a thing IS) changes from bread to Christ's Body, while the accidents (appearances — taste, texture, color) remain those of bread. This is not magic; it is a metaphysical change at the deepest level of reality.",
      },
    ],
  },
  {
    title: "Papal Authority (Petrine Primacy)",
    conclusion: "Therefore, Christ established Peter as the head of His Church, and this authority passes to Peter's successors — the Bishops of Rome.",
    premises: [
      {
        text: "Christ gave Peter unique authority among the apostles.",
        support: "Matthew 16:18-19 — 'You are Peter, and on this rock I will build my Church... I will give you the keys of the kingdom of heaven.'",
        children: [
          {
            text: "'Rock' (petra/petros) refers to Peter himself, not just his confession.",
            support: "In Aramaic (which Jesus spoke), there is only one word: Kepha. Jesus said, 'You are Kepha, and on this kepha I will build my Church.' The Greek gender distinction is purely grammatical.",
          },
          {
            text: "The 'keys of the kingdom' is an allusion to Isaiah 22:22.",
            support: "In Isaiah 22, the keys are given to the prime minister (steward) of the Davidic kingdom. Jesus is establishing Peter as the prime minister of His kingdom — the Church.",
          },
          {
            text: "Peter is consistently listed first among the apostles in every New Testament list.",
            support: "Matthew 10:2; Mark 3:16; Luke 6:14; Acts 1:13. Matthew even calls him 'first' (protos).",
          },
        ],
      },
      {
        text: "Christ specifically commissioned Peter to lead after the Resurrection.",
        support: "John 21:15-17 — 'Feed my lambs... Tend my sheep... Feed my sheep.' Three times, matching the three denials, Christ restores Peter and gives him pastoral authority over the whole flock.",
      },
      {
        text: "Peter exercised this authority in the early Church.",
        support: "Acts 1: Peter leads the election of Matthias. Acts 2: Peter preaches at Pentecost. Acts 10: Peter receives the vision about Gentiles. Acts 15: Peter speaks decisively at the Council of Jerusalem.",
      },
      {
        text: "The early Church recognized Roman primacy.",
        support: "Clement of Rome (96 AD) intervened in the Corinthian church. Ignatius of Antioch called Rome the church that 'presides in love.' Irenaeus said all churches must agree with Rome 'on account of its preeminent authority.'",
      },
      {
        text: "This authority is passed on through apostolic succession.",
        support: "The office of steward (Isaiah 22) is dynastic — it passes to successors. The apostles appointed successors (Acts 1:20-26; 2 Timothy 2:2; Titus 1:5). The Bishop of Rome is Peter's successor.",
      },
    ],
  },
  {
    title: "The Resurrection of Jesus Christ",
    conclusion: "Therefore, the best explanation of the evidence is that Jesus of Nazareth truly rose from the dead.",
    premises: [
      {
        text: "Jesus was crucified and died under Pontius Pilate.",
        support: "Attested by all four Gospels, Tacitus (Annals 15.44), Josephus (Antiquities 18.3.3), and the Talmud. Virtually no scholar denies the crucifixion.",
      },
      {
        text: "The tomb was found empty on the third day.",
        support: "All four Gospels report the empty tomb. The discovery by women is significant — in first-century Jewish culture, women's testimony was not legally admissible. No one would invent female witnesses.",
        children: [
          {
            text: "The Jewish authorities never denied the empty tomb.",
            support: "Matthew 28:11-15 — they claimed the disciples stole the body. This presupposes the tomb was empty. They never said 'the body is still in the tomb.'",
          },
          {
            text: "The tomb was known and accessible.",
            support: "Joseph of Arimathea's tomb was a known location. If the body were still there, the claim of resurrection could have been easily disproved.",
          },
        ],
      },
      {
        text: "Multiple groups of people claimed to see the risen Jesus on different occasions.",
        support: "1 Corinthians 15:3-8 (an early creed dating to within 3-5 years of the crucifixion) lists appearances to Peter, the Twelve, 500+ at once, James, all the apostles, and Paul.",
        children: [
          {
            text: "These were not hallucinations.",
            support: "Hallucinations are individual, not group events. They don't occur across different groups, times, and places. They don't produce the kind of transformation seen in the apostles.",
          },
          {
            text: "The conversion of Paul cannot be explained by prior belief.",
            support: "Paul was a persecutor of the Church. He had no psychological predisposition to 'see' Jesus. His conversion requires an adequate cause.",
          },
        ],
      },
      {
        text: "The apostles were willing to die for this claim.",
        support: "People die for things they believe are true, but no one dies for what they know to be a lie. If the disciples stole the body, they would know the resurrection was a fraud — yet they went to their deaths proclaiming it.",
        children: [
          {
            text: "The disciples had nothing to gain by lying.",
            support: "They were persecuted, imprisoned, beaten, and killed. There was no earthly benefit to claiming a resurrection they knew to be false.",
          },
        ],
      },
      {
        text: "Alternative explanations fail.",
        support: "The swoon theory, stolen body theory, hallucination theory, legend theory, and wrong tomb theory all have fatal problems that have been thoroughly refuted by scholarship.",
        children: [
          {
            text: "Swoon theory: Roman crucifixion was lethal. The spear wound (John 19:34) is medically consistent with death.",
            support: "Roman soldiers were expert executioners. Survival after crucifixion, burial, and three days without medical care is medically impossible.",
          },
          {
            text: "Stolen body theory: The disciples had no motive and no opportunity (guards, sealed tomb).",
            support: "A group of scared, scattered fishermen overpowering Roman guards, breaking a seal, and then dying for a lie they invented? This explanation requires more faith than the resurrection itself.",
          },
          {
            text: "Legend theory: The time gap is too short for legend development.",
            support: "The 1 Corinthians 15 creed dates to within 3-5 years. Legends require generations to develop. The eyewitnesses were still alive.",
          },
        ],
      },
    ],
  },
];

function PremiseNode({ premise, depth = 0 }: { premise: Premise; depth?: number }) {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className={`${depth > 0 ? "ml-4 border-l-2 border-stone-800 pl-4" : ""}`}>
      <div className="py-1.5">
        <button
          onClick={() => setShowSupport(!showSupport)}
          className="text-left group"
        >
          <p className="text-sm text-stone-200 group-hover:text-stone-100">
            <span className="text-amber-600 mr-1.5">
              {depth === 0 ? "P" : "•"}
            </span>
            {premise.text}
          </p>
        </button>
        {showSupport && premise.support && (
          <div className="mt-1.5 ml-4 rounded-lg bg-stone-900/50 border border-stone-800 px-3 py-2">
            <p className="text-xs text-stone-400">{premise.support}</p>
          </div>
        )}
      </div>
      {premise.children && (
        <div className="mt-1">
          {premise.children.map((child, i) => (
            <PremiseNode key={i} premise={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ArgumentsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Argument Trees"
        subtitle="Pre-built logical structures for major proofs of the faith"
        icon="🌳"
      />
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
        {ARGUMENT_TREES.map((arg, i) => (
          <div
            key={i}
            className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
          >
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full px-4 py-3 text-left"
            >
              <h3 className="text-sm font-semibold text-stone-200">
                {arg.title}
              </h3>
              <p className="mt-1 text-xs text-amber-600 italic">
                {arg.conclusion}
              </p>
            </button>
            {expanded === i && (
              <div className="border-t border-stone-800 px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-600 mb-3">
                  Premises — click any premise to see supporting evidence
                </p>
                <div className="space-y-1">
                  {arg.premises.map((p, j) => (
                    <PremiseNode key={j} premise={p} />
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-stone-800">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-500 mb-1">
                    Conclusion
                  </p>
                  <p className="text-sm font-medium text-stone-200">
                    {arg.conclusion}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
