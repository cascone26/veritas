export interface DebateStrategy {
  id: string;
  title: string;
  description: string;
  tactics: string[];
  examples?: string[];
}

export const DEBATE_PLAYBOOK: DebateStrategy[] = [
  {
    id: "socratic-method",
    title: "The Socratic Method in Practice",
    description:
      "Ask questions instead of making statements. Let the other person reason themselves into a corner or toward the truth. This was Aquinas's own method (the disputatio) and Socrates' method before him. Questions are harder to dismiss than assertions because they force the other person to think rather than react.",
    tactics: [
      "Start with a question your opponent will agree with, then build from there. 'Do you think torturing babies for fun is wrong?' If yes: 'Is that just your opinion, or is it objectively wrong?' If objectively wrong: 'Where does that objective standard come from?'",
      "When someone makes a claim, ask 'How do you know that?' or 'What do you mean by that?' rather than immediately countering. This forces them to examine their own assumptions.",
      "Use the 'Colombo tactic' (from Gregory Koukl): play slightly confused. 'I'm not sure I follow — could you help me understand what you mean by [X]?' This disarms aggression and exposes weak reasoning without you appearing combative.",
      "Ask 'What would it take to change your mind?' early in the conversation. If they can't name anything, you're not in a rational discussion — you're dealing with a presupposition. Name it and move on.",
      "When someone says 'I don't believe in God,' ask: 'What do you mean by God?' Many people are rejecting a concept of God that no serious theologian holds. Define terms before debating.",
      "Never answer a loaded question directly. Rephrase it: 'Why does the Church hate women?' becomes 'Are you asking what the Church actually teaches about the dignity of women? Let me explain.'",
    ],
    examples: [
      "Instead of: 'Abortion is murder!' Try: 'When do you think human rights begin? At birth? If so, what changes between five minutes before birth and five minutes after?'",
      "Instead of: 'God obviously exists!' Try: 'Why do you think anything exists at all rather than nothing? Where does the universe come from?'",
      "Instead of: 'The Bible is true!' Try: 'Have you ever looked at the manuscript evidence for the New Testament compared to other ancient documents?'",
    ],
  },
  {
    id: "steelman",
    title: "How to Steelman Before Responding",
    description:
      "Before responding to any argument, state the strongest version of your opponent's position — even stronger than they stated it themselves. This demonstrates intellectual honesty, earns respect, and ensures you are addressing the real argument rather than a weak version. If you can only defeat a weak version of the objection, you haven't won anything.",
    tactics: [
      "Begin your response with: 'Let me make sure I understand your position correctly. You're saying [strongest version of their argument]. Is that right?' Wait for confirmation before responding.",
      "If their argument is poorly stated, help them: 'I think there's actually a stronger version of your point. What you might be getting at is [X]. Let me address that version.'",
      "Study the best versions of opposing arguments BEFORE the conversation. Know Dawkins better than Dawkins fans do. Know the problem of evil better than the atheist presenting it. When you can state their argument better than they can, you've already won their respect.",
      "Concede what is true in their position before addressing what is false. 'You're right that the Crusades involved real violence and injustice. Now let me give you the historical context that's missing from that picture.'",
      "Never attack a straw man. If you catch yourself arguing against a position your opponent doesn't hold, stop and ask: 'Am I representing your view fairly?'",
    ],
  },
  {
    id: "concede-vs-hold",
    title: "When to Concede a Point vs. When to Hold Firm",
    description:
      "Knowing when to concede and when to hold firm is the difference between intellectual honesty and stubbornness. Conceding legitimate points builds credibility and shows you care about truth, not just winning. But some things are non-negotiable.",
    tactics: [
      "CONCEDE when the opponent makes a factually correct point, even if it's uncomfortable: 'You're right that the Church made errors in the Galileo case. John Paul II acknowledged that in 1992.' Then provide the fuller context.",
      "CONCEDE partial truths: 'You're right that some Christians have used the Bible to justify terrible things. But that's an abuse of the text, not what the text actually teaches.'",
      "HOLD FIRM on defined dogma — the Trinity, the Real Presence, the Incarnation, the moral law. These are not negotiable. Say so clearly: 'I understand your objection, but this is a defined truth of the faith. Let me explain why.'",
      "HOLD FIRM on logical principles — the law of non-contradiction, the principle of causality, the distinction between objective and subjective claims. If these are abandoned, rational discussion becomes impossible.",
      "NEVER concede something just to avoid conflict. If someone says 'all religions are the same,' do not nod along. Politely but firmly explain why they are not.",
      "The general rule: concede facts, hold firm on principles. Be flexible on matters of opinion, immovable on matters of truth.",
    ],
  },
  {
    id: "frame-control",
    title: "How to Control the Frame of a Debate",
    description:
      "Whoever controls the frame controls the debate. The 'frame' is the set of assumptions, definitions, and categories within which the discussion takes place. If you accept your opponent's frame, you've already lost half the battle. Reframe the discussion on your terms.",
    tactics: [
      "Define your terms before engaging. If someone says 'faith is believing without evidence,' correct the definition FIRST: 'That's not what faith means in Catholic theology. Faith is an act of the intellect assenting to truth. Now, with that definition, let's discuss.'",
      "Reject false frames: 'Science vs. religion' is a false frame. The real frame is 'science AND metaphysics.' When someone puts you in the 'science vs. religion' box, refuse: 'I reject that framing. The Catholic Church was the greatest patron of science in Western history. The real question is whether science is the ONLY way to know things.'",
      "Reframe moral questions from 'rights' to 'what is true': 'The question isn't whether you have a right to do X. The question is whether X is good for you and for society.'",
      "When accused of being 'judgmental,' reframe: 'Making moral judgments is not the same as being judgmental. Saying that stealing is wrong isn't judging the thief as a person — it's evaluating the action. Everyone makes moral judgments. The question is whether yours are grounded in reality.'",
      "Don't let the opponent set the agenda. If they're jumping between topics (Crusades! Inquisition! Galileo! Abuse!), stop them: 'You're raising five different topics. Let's pick one and discuss it properly. Which one matters most to you?'",
      "Reframe 'intolerance' charges: 'Tolerance doesn't mean agreeing with everything. It means treating people with dignity while disagreeing with their ideas. I can think you're wrong and still treat you with respect. That's actual tolerance.'",
    ],
  },
  {
    id: "body-language",
    title: "Reading Body Language and Emotional State",
    description:
      "Effective debate is not just about ideas — it's about reading the person in front of you. Are they genuinely curious, or are they hostile? Are they processing your argument, or have they shut down? Adjust your approach accordingly.",
    tactics: [
      "If they're crossing their arms, looking away, or giving short responses, they've closed off. Stop arguing and start asking questions. Switch to listening mode.",
      "If they're leaning in, making eye contact, and asking follow-up questions, they're genuinely interested. Go deeper. Give them more substance.",
      "Watch for the 'emotional trigger' — the moment when the conversation shifts from intellectual to personal. This usually means the topic touches a wound (a bad experience with the Church, a moral struggle, a family conflict). When this happens, stop debating and start listening.",
      "Mirror their energy but don't match their emotion. If they're angry, stay calm but engaged. If they're thoughtful, be thoughtful. If they're joking, be lighthearted. But never match hostility with hostility.",
      "If someone is getting increasingly agitated, lower your voice, slow down, and ask a personal question: 'Can I ask — has this topic affected you personally?' Often the real issue isn't intellectual but experiential.",
      "Pay attention to what they're NOT saying. If someone aggressively attacks the Church's sexual morality but doesn't seem to care about the Trinity or the Resurrection, the real issue is probably personal, not theological.",
    ],
  },
  {
    id: "when-to-stop",
    title: "When to Stop Arguing (Knowing Your Audience)",
    description:
      "Not every conversation needs to end with a conversion. Some conversations are won months or years later, when a seed you planted finally takes root. Knowing when to stop is as important as knowing what to say.",
    tactics: [
      "Stop when you've made your best point and the person is thinking. Don't over-explain. Let the argument land. Silence is powerful.",
      "Stop when the conversation has become circular — you're both repeating the same points. Say: 'I think we've both made our cases clearly. Let's let it sit and maybe come back to it another time.'",
      "Stop when emotions are running too hot for productive discussion. 'I think we're both getting heated. Let's take a break and come back to this when we can think more clearly.'",
      "Stop when you realize the person isn't interested in truth but in winning. Signs: they refuse to answer direct questions, they constantly change the subject, they mock rather than engage. Say: 'I don't think this conversation is productive right now. I'm happy to discuss it when you're interested in understanding my position, even if you disagree.'",
      "Never forget that the goal is not to win the argument but to win the person. If you win the argument and lose the relationship, you've failed. Peter Kreeft: 'In apologetics, the most important thing is not your argument but your love.'",
      "Plant seeds, don't expect harvest. Recommend a book. Share a link. Tell them: 'If you're ever curious, read [X]. I'd love to talk about it.' Then let it go.",
      "Pray for them. This is not a debate tactic. It's the most important thing you can do.",
    ],
  },
  {
    id: "three-levels",
    title: "The Three Levels Approach (Emotional, Rational, Authoritative)",
    description:
      "Every person operates primarily at one of three levels: emotional (feelings, experiences, relationships), rational (logic, evidence, arguments), or authoritative (trust in an authority — Scripture, the Church, a teacher). Effective communication requires identifying which level your interlocutor is on and meeting them there FIRST, then guiding them to the other levels.",
    tactics: [
      "LEVEL 1 — EMOTIONAL: If someone is driven by feelings ('I just feel like God wouldn't condemn X'), start with empathy, not arguments. Validate their feeling: 'I understand why you feel that way.' Then gently introduce the rational level: 'But feelings aren't always a reliable guide to truth. Let me share why I think the full picture is more nuanced.'",
      "LEVEL 2 — RATIONAL: If someone is driven by logic ('Give me evidence'), meet them with arguments — the Five Ways, the cosmological argument, the moral argument, the historical evidence for the Resurrection. Be precise, logical, and rigorous. Don't appeal to emotion or authority until you've established rational credibility.",
      "LEVEL 3 — AUTHORITATIVE: If someone already trusts an authority (a Protestant trusts the Bible; a Catholic trusts the Magisterium), work within that authority. With a Protestant, argue from Scripture first, then introduce Tradition. With a Catholic, reference the Catechism and papal teaching. Don't undermine their authority — build on it.",
      "The ideal progression is: MEET them where they are, MOVE them to the rational level (because truth is knowable by reason), and then INTRODUCE the authoritative level (because God has revealed Himself through Scripture, Tradition, and the Magisterium). But you can't skip steps.",
      "Bishop Barron's approach: lead with BEAUTY ('Look at this cathedral, this painting, this piece of music'), then move to GOODNESS ('Here's how the faith transforms lives'), then arrive at TRUTH ('Here's why it's actually true'). This is the reverse of the typical apologetics sequence, and it often works better because beauty disarms defenses.",
    ],
  },
  {
    id: "debate-traps",
    title: "Common Debate Traps and How to Avoid Them",
    description:
      "Experienced opponents will try to trap you with specific techniques designed to make you look bad or force you into untenable positions. Recognizing these traps is the first step to avoiding them.",
    tactics: [
      "THE GISH GALLOP: Your opponent throws 20 objections at once (Crusades! Inquisition! Galileo! Abuse! Wealth! Celibacy! Mary! Pope!). They know you can't address all of them. COUNTER: 'You've raised many different topics. I'm happy to discuss any of them in depth. Which one matters most to you? Let's start there.'",
      "THE GOTCHA QUESTION: 'So you think women should be barefoot and pregnant?' or 'So you're saying gay people are evil?' COUNTER: 'That's not what I said, and it's not what the Church teaches. Let me state my actual position and then you can disagree with THAT.'",
      "THE APPEAL TO EXPERTISE: 'I have a PhD in [X], so I know more about this than you.' COUNTER: 'I respect your expertise in [X], but this is a philosophical/theological question, not a [X] question. Credentials in one field don't transfer automatically to another.'",
      "THE MORAL SUPERIORITY PLAY: 'How can you call yourself a Christian when you believe [X]?' COUNTER: 'I believe [X] precisely because I'm a Christian. Let me explain why, and then you can tell me if the reasoning is wrong.'",
      "THE MOTTE AND BAILEY: They make a bold claim ('Religion is evil') and when challenged, retreat to a modest claim ('Well, some religious people do bad things'). When you accept the modest claim, they return to the bold one. COUNTER: 'Which claim are you making? That religion is evil, or that some religious people do bad things? Those are very different claims. Let's address whichever one you're actually defending.'",
      "THE FALSE DILEMMA: 'Either you accept science or you believe in fairy tales.' COUNTER: 'That's a false choice. The Catholic Church is the greatest patron of science in Western history. I accept science AND metaphysics. They answer different questions.'",
      "THE EMOTIONAL HOSTAGE: 'If you don't support [X], you're a bigot / hateful / on the wrong side of history.' COUNTER: 'Disagreement is not hatred. I can think you're wrong and still treat you with dignity. That's actual tolerance. Can we discuss the substance of the issue rather than trading accusations?'",
    ],
  },
  {
    id: "responding-to-mockery",
    title: "How to Respond to Mockery or Bad Faith",
    description:
      "Not everyone argues in good faith. Some people mock, ridicule, or argue disingenuously. Knowing how to respond — and when not to respond — is essential.",
    tactics: [
      "Don't return mockery with mockery. Stay calm, stay civil, stay on point. Your composure is itself a witness. If you respond to mockery with anger, you've lost.",
      "Name what's happening: 'You're mocking my position rather than engaging with it. I'm happy to discuss this seriously whenever you're ready.' This puts the burden back on them.",
      "Use humor when appropriate — but never at the other person's expense. Self-deprecating humor disarms hostility: 'I've been called worse things by better theologians.'",
      "If someone is clearly not interested in honest discussion, disengage gracefully: 'I don't think this conversation is going anywhere productive. If you ever want to discuss it seriously, I'm here.' Then walk away. You are not obligated to respond to every provocation.",
      "Remember Matthew 7:6 — 'Do not throw your pearls before swine.' This is not an insult; it's wisdom. Some audiences are not ready for the truth, and forcing it on them is counterproductive. Save your best arguments for people who are genuinely searching.",
      "When someone insults the faith, don't take the bait. Ask: 'What's really bothering you about this? Because I don't think it's actually what you said.' Often the mockery is a mask for pain.",
      "Chesterton's approach: be funnier than the mocker. 'The Bible tells us to love our neighbors, and also to love our enemies; probably because generally they are the same people.' Wit disarms hostility better than argument.",
    ],
  },
  {
    id: "winning-persons",
    title: "The Difference Between Winning an Argument and Winning a Person",
    description:
      "The goal of Catholic apologetics is not to win arguments. It is to bring people closer to Christ and His Church. These are not the same thing. You can demolish someone's argument and drive them further from the faith. You can lose the argument and plant a seed that bears fruit years later. The person in front of you is more important than the point you're making.",
    tactics: [
      "LISTEN more than you speak. James 1:19: 'Be quick to hear, slow to speak, slow to anger.' Most people have never had a Catholic listen to their objections without immediately arguing back. Listening itself is evangelization.",
      "Ask about their story. 'What's your background with the faith?' or 'Has something happened that made you question?' People argue from their experiences, not just their intellects. If you don't understand their story, you can't speak to their heart.",
      "Be honest about what you don't know. 'I don't have a good answer for that right now. Let me look into it and get back to you.' This builds more credibility than a bad answer delivered confidently.",
      "Distinguish between sincere seekers and hostile critics. Seekers deserve patience, gentleness, and your best arguments. Critics deserve respect but not unlimited time. The Apostles shook the dust off their feet when a town rejected the message (Matt 10:14). You can do the same — politely.",
      "Always leave the door open. Even if a conversation goes badly, end with: 'I appreciate your honesty. If you ever want to talk about this again, I'm here.' Never burn a bridge.",
      "Remember that conversion is the work of the Holy Spirit, not your arguments. Your job is to present the truth as clearly and charitably as you can. God does the rest. Pray before, during, and after every conversation.",
      "St. Francis de Sales: 'You can catch more flies with a drop of honey than with a barrel of vinegar.' Charity is the most powerful apologetic. A person who has experienced genuine Catholic love is harder to argue away from the faith than a person who has only heard good arguments.",
      "Peter Kreeft's rule: 'In apologetics, argument is the skeleton and love is the flesh. A skeleton without flesh is a horror; flesh without a skeleton is a jellyfish. You need both.'",
      "The ultimate apologetic is the lives of the saints. If your arguments are good but your life doesn't reflect the faith, your arguments will ring hollow. The best debater in the world is less convincing than a saint who prays.",
    ],
  },
];
