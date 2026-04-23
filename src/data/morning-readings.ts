// 40-day rotating morning reading track.
// Each entry pairs a Father/Doctor/Saint reading with a single argument to chew on
// and a prompt for the silent sit. Day index = (epoch day) % readings.length.

export interface MorningReading {
  day: number;
  title: string;
  source: string;
  era: string;
  passage: string;      // 150-400 words of actual text
  reflection: string;   // 1-3 sentences: what to notice
  argumentRef: string;  // slug of a /practice argument to chew on
  sitPrompt: string;    // what to hold during the silent sit
}

export const MORNING_READINGS: MorningReading[] = [
  {
    day: 1,
    title: "Our hearts are restless",
    source: "Augustine, Confessions I.1",
    era: "397 AD",
    passage:
      "Great are You, O Lord, and greatly to be praised; great is Your power, and of Your wisdom there is no end. And man, being a part of Your creation, desires to praise You — man, who bears about with him his mortality, the witness of his sin, even the witness that You resist the proud — yet man, this part of Your creation, desires to praise You. You move us to delight in praising You; for You have made us for Yourself, and our heart is restless until it finds rest in You.",
    reflection:
      "Augustine opens not with an argument but with an observation: the human heart is made a certain way. The restlessness you feel is itself evidence. The longing for something you cannot name is not a defect — it is the signature of the thing you are made for.",
    argumentRef: "contingency",
    sitPrompt: "Notice the restlessness. Do not try to silence it. Hold it as the pull of the thing you were made for.",
  },
  {
    day: 2,
    title: "The Eucharist is the flesh of the Savior",
    source: "Ignatius of Antioch, Letter to the Smyrnaeans 7",
    era: "c. 107 AD",
    passage:
      "They abstain from the Eucharist and from prayer, because they do not confess that the Eucharist is the flesh of our Savior Jesus Christ, which suffered for our sins, and which the Father, of His goodness, raised up again. Those, therefore, who speak against this gift of God, incur death in the midst of their disputes. But it were better for them to treat it with respect, that they also might rise again.",
    reflection:
      "Ignatius is writing on his way to be eaten by lions in Rome. He is a disciple of the Apostle John. And in 107 AD he already calls the Eucharist 'the flesh of our Savior.' There is no gap between the apostles and this belief. The Real Presence is not a medieval invention.",
    argumentRef: "real-presence",
    sitPrompt: "Hold the word 'flesh.' Not symbol. Not sign. Flesh. Let the weight of 107 AD settle on you.",
  },
  {
    day: 3,
    title: "On the cross, He made no sign to men",
    source: "Aquinas, Adoro Te Devote",
    era: "c. 1264",
    passage:
      "Godhead here in hiding, whom I do adore, / Masked by these bare shadows, shape and nothing more, / See, Lord, at Thy service low lies here a heart / Lost, all lost in wonder at the God Thou art. / Seeing, touching, tasting are in Thee deceived: / How says trusty hearing? That shall be believed; / What God's Son has told me, take for truth I do; / Truth Himself speaks truly or there's nothing true. / On the cross Thy Godhead made no sign to men, / Here Thy very manhood steals from human ken: / Both are my confession, both are my belief.",
    reflection:
      "Aquinas — the most rigorous intellect in the Church's history — knew that the Eucharist gives no visible sign. The hiddenness is the point. If God revealed Himself by force of sensation, faith would not be faith; it would be sight. The veil is the invitation.",
    argumentRef: "hiddenness",
    sitPrompt: "If you demanded God appear visibly right now, faith would end. Sit with why the hiddenness might be a gift.",
  },
  {
    day: 4,
    title: "Lord, I believe — help my unbelief",
    source: "Mark 9:24",
    era: "c. 30 AD",
    passage:
      "And Jesus said to him, 'If you can! All things are possible to him who believes.' Immediately the father of the child cried out and said, 'I believe; help my unbelief!' And when Jesus saw that a crowd came running together, He rebuked the unclean spirit, saying to it, 'You deaf and dumb spirit, I command you, come out of him, and enter him no more.' And after crying out and convulsing him terribly, it came out, and the boy was like a corpse, so that most of them said, 'He is dead.' But Jesus took him by the hand and lifted him up, and he arose.",
    reflection:
      "Notice: the man who gets the miracle is not the one with perfect faith. He is the one who says 'I believe; help my unbelief' — in one breath, confession and doubt together. Christ does not reject the mixture. He works with it. The condition for healing is not certainty. It is the willingness to say both halves out loud.",
    argumentRef: "faith-is-will",
    sitPrompt: "Say the prayer: 'Lord, I believe; help my unbelief.' Say it with the doubt still present. That is the prayer.",
  },
  {
    day: 5,
    title: "Jesus is Lord",
    source: "Habermas, Minimal Facts",
    era: "Historical argument",
    passage:
      "Twelve facts about Jesus are accepted by 90%+ of scholars across the spectrum, including atheist and Jewish historians: (1) Jesus died by crucifixion. (2) He was buried. (3) His death caused his disciples to despair. (4) The tomb was found empty shortly after. (5) The disciples had experiences they believed were literal appearances of the risen Jesus. (6) The disciples were transformed from cowards into bold proclaimers. (7) This message was central from the beginning. (8) It was proclaimed in Jerusalem. (9) The Church grew there. (10) Sunday became the primary day of worship. (11) James, a skeptic, converted after an appearance. (12) Paul, a persecutor, converted after an appearance.",
    reflection:
      "These are not Christian claims. They are the common ground between Christian and non-Christian historians. Every alternative — hallucination, theft, legend, mistaken identity — has to account for all twelve. Each alternative fails on at least one. The Resurrection is the only hypothesis that accounts for the whole dataset. This is not a feeling. It is a historian's verdict.",
    argumentRef: "resurrection",
    sitPrompt: "You stand on ground here, not feeling. Let that be enough for five minutes.",
  },
  {
    day: 6,
    title: "The Church is a pillar of truth",
    source: "1 Timothy 3:15",
    era: "c. 63 AD",
    passage:
      "I hope to come to you shortly, but if I am delayed, I am writing these instructions to you so that you may know how one ought to behave in the household of God, which is the Church of the living God, the pillar and bulwark of truth. Great indeed, we confess, is the mystery of our religion: He was manifested in the flesh, vindicated in the spirit, seen by angels, preached among the nations, believed on in the world, taken up in glory.",
    reflection:
      "Paul does not call Scripture the pillar and bulwark of truth. He calls the Church that. The Church precedes and canonizes Scripture — she does not derive her authority from it. This single verse, on its own terms, is a problem for sola scriptura.",
    argumentRef: "sola-scriptura",
    sitPrompt: "Hold the image: a pillar. Something you lean on. Something older than you, holding up a weight you cannot carry alone.",
  },
  {
    day: 7,
    title: "You are Peter",
    source: "Matthew 16:18-19",
    era: "c. 30 AD",
    passage:
      "And I tell you, you are Peter, and on this rock I will build My Church, and the gates of Hades shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven.",
    reflection:
      "The 'keys' language is not accidental. It is a direct quotation of Isaiah 22:22, where King Hezekiah gives his steward Eliakim the key to the House of David — a dynastic office, succeeded from one steward to the next. Jesus, Son of David, does the same. This is an office, not a one-time grant. The papacy is not a medieval accretion; it is written into the text with a thousand-year-old Old Testament citation.",
    argumentRef: "papacy",
    sitPrompt: "Hold Peter's failure — his denial — alongside this verse. Christ entrusted the keys to the man who would deny Him. The office is Christ's, not the man's.",
  },
  {
    day: 8,
    title: "The dark night is the teacher",
    source: "John of the Cross, Dark Night I.8",
    era: "c. 1579",
    passage:
      "The night which we have called that of sense may and should be called a kind of correction and restraint of the desire rather than purgation. The reason is that all the imperfections and disorders of the sensual part have their root in the spirit, where all habits, both good and bad, are brought under control. Thus, until these are purged, the sensuality cannot be thoroughly purged. In this night which follows both, the two parts of the soul — spiritual and sensual — are purged together, since the one is never purged effectively without the other.",
    reflection:
      "John of the Cross is describing exactly what you are feeling. The dryness, the absence, the sense that nothing is there — this is not the faith failing. This is the faith being purified. God removes the consolations so that what remains is the will to trust without them. That stripped-down will is what grows into real faith.",
    argumentRef: "dark-night",
    sitPrompt: "If the dryness is the teacher, stop fighting it. Sit in it. Ask only to remain present.",
  },
  {
    day: 9,
    title: "Mother Teresa in the dark",
    source: "Letter to Fr. Michael Van Der Peet, Sep 1979",
    era: "20th century",
    passage:
      "Jesus has a very special love for you. As for me, the silence and the emptiness is so great, that I look and do not see, listen and do not hear, the tongue moves in prayer but does not speak. I want you to pray for me, that I let Him have [a] free hand.",
    reflection:
      "This is the woman Christendom regards as a living saint, writing in private about spiritual darkness that lasted nearly fifty years. She ran the mission, she served the poor, she said yes to God every day — and she felt nothing. She did not stop. The doing is the faith. The feeling is incidental.",
    argumentRef: "dark-night",
    sitPrompt: "If Mother Teresa continued in silence for fifty years, your current dryness is not proof of anything except that you are alive.",
  },
  {
    day: 10,
    title: "The First Mover",
    source: "Aquinas, ST I q.2 a.3 (First Way)",
    era: "1265-1274",
    passage:
      "The existence of God can be proved in five ways. The first and more manifest way is the argument from motion. It is certain, and evident to our senses, that in the world some things are in motion. Now whatever is in motion is put in motion by another. For motion is nothing else than the reduction of something from potentiality to actuality. But nothing can be reduced from potentiality to actuality, except by something in a state of actuality. If that by which it is moved be itself moved, then this also must be put in motion by another, and that by another. But this cannot go on to infinity, because then there would be no first mover, and, consequently, no other mover. Therefore it is necessary to arrive at a first mover, put in motion by no other; and this everyone understands to be God.",
    reflection:
      "Aquinas is not making a probabilistic argument. He is making a metaphysical demonstration. Nothing actualizes itself. If every actualizer is itself being actualized, nothing gets off the ground. There must be a first actualizer — pure act, no potency. This argument does not require the universe to have a beginning. It is about sustaining existence right now, in this moment.",
    argumentRef: "first-mover",
    sitPrompt: "Every breath you take is being given to you right now. What is sustaining it? Sit with that question.",
  },
  {
    day: 11,
    title: "The contingency argument",
    source: "Aquinas, ST I q.2 a.3 (Third Way)",
    era: "1265-1274",
    passage:
      "The third way is taken from possibility and necessity. We find in nature things that are possible to be and not to be, since they are found to be generated, and to corrupt, and consequently, they are possible to be and not to be. But it is impossible for these always to exist, for that which is possible not to be at some time is not. Therefore, if everything is possible not to be, then at one time there could have been nothing in existence. Now if this were true, even now there would be nothing in existence, because that which does not exist only begins to exist by something already existing. Therefore, not all beings are merely possible, but there must exist something the existence of which is necessary.",
    reflection:
      "This is the strongest argument in theism. Every contingent thing — every thing that might not have been — requires an explanation outside itself. You cannot regress infinitely through contingent things; the whole set still needs an explanation. There must be something that exists by its own nature. That is what we call God. This is not physics. It is metaphysics. It does not depend on any empirical discovery.",
    argumentRef: "contingency",
    sitPrompt: "You could have not existed. Something held you into being. Sit in that precariousness.",
  },
  {
    day: 12,
    title: "The fine-tuning of the universe",
    source: "Physics constants",
    era: "Modern cosmology",
    passage:
      "The cosmological constant is fine-tuned to 1 part in 10^120. The ratio of electromagnetic to gravitational force: 1 part in 10^40. The initial entropy of the universe, per Penrose: 1 part in 10^(10^123). Any of these knobs turned even fractionally and no stars form, no chemistry, no life. The standard alternatives are: (1) brute luck, (2) an unobservable multiverse, (3) design. Brute luck at these numbers is not a scientific claim; it is a capitulation. The multiverse multiplies entities and still requires explanation for why a universe-generator exists.",
    reflection:
      "You do physics with Anthony. You know what these numbers mean. When a parameter sits at 1 part in 10^120, the inference to design is not a failure of imagination; it is a commitment to evidence. The fine-tuning is not proof, but it is a massive Bayesian update in favor of a mind behind it.",
    argumentRef: "fine-tuning",
    sitPrompt: "The universe is not neutral. It leans toward you existing. Sit in the weight of that lean.",
  },
  {
    day: 13,
    title: "Polycarp, disciple of John",
    source: "Martyrdom of Polycarp 9-10",
    era: "155 AD",
    passage:
      "When the proconsul insisted and said, 'Swear the oath, and I will release you; curse Christ,' Polycarp answered, 'For eighty-six years I have been His servant, and He has done me no wrong. How can I blaspheme my King who saved me?' When the proconsul still insisted, saying, 'Swear by the genius of Caesar,' he answered, 'I am a Christian. If you wish to learn the doctrine of Christianity, fix a day and hear me.'",
    reflection:
      "Polycarp was a direct disciple of the Apostle John. He died for the faith in 155 AD. At eighty-six years old, he had been a Christian his entire adult life. The faith he would not deny was the faith handed to him by an eyewitness of the Resurrection. You are one generation from an eyewitness, through him.",
    argumentRef: "apostolic-succession",
    sitPrompt: "The faith passed through living hands. Polycarp heard it from John, who laid his head on Christ at the Last Supper.",
  },
  {
    day: 14,
    title: "Justin Martyr describes the Mass",
    source: "Justin Martyr, First Apology 67",
    era: "c. 155 AD",
    passage:
      "On the day called Sunday there is a gathering together in the same place of all who live in a given city or rural district. The memoirs of the apostles or the writings of the prophets are read for as long as time permits. Then, when the reader has finished, the president verbally admonishes and invites all to imitate these noble things. Then we all stand up together and offer prayers. And as we said before, when we have finished praying, bread is brought, and wine and water, and the president likewise offers prayers and thanksgivings to the best of his ability, and the people assent, saying Amen. And there is a distribution to each, and a participation of that over which thanks have been given.",
    reflection:
      "This is the Mass, in 155 AD. Readings from apostles and prophets, homily, prayers, offertory, consecration, communion. If you walked into a Catholic Mass tomorrow, the structure is the same as what Justin Martyr described. The liturgy is older than most of the books in the New Testament canon.",
    argumentRef: "early-church-catholic",
    sitPrompt: "The Mass is older than the canon of Scripture. You are inside a river that has been flowing for two thousand years.",
  },
  {
    day: 15,
    title: "Irenaeus on the rule of faith",
    source: "Irenaeus, Against Heresies III.3.1",
    era: "c. 180 AD",
    passage:
      "It is within the power of all, therefore, in every Church, who may wish to see the truth, to contemplate clearly the tradition of the apostles manifested throughout the whole world; and we are in a position to reckon up those who were by the apostles instituted bishops in the Churches, and the succession of these men to our own times. For they were desirous that these men should be very perfect and blameless in all things, whom also they were leaving behind as their successors, delivering up their own place of government to these men; which men, if they discharged their functions honestly, would be a great boon, but if they should fall away, the direst calamity.",
    reflection:
      "Irenaeus, writing in 180 AD, already appeals to apostolic succession as a visible, checkable fact. He names the bishops of Rome from Peter down to his own day. This is not mythology. It is public, institutional memory, written while the memory was still live.",
    argumentRef: "apostolic-succession",
    sitPrompt: "You can trace the hands on your bishop's head back to an apostle. Sit in that continuity.",
  },
  {
    day: 16,
    title: "Thomas needed to touch",
    source: "John 20:24-29",
    era: "c. 30 AD",
    passage:
      "Now Thomas, one of the Twelve, called the Twin, was not with them when Jesus came. So the other disciples told him, 'We have seen the Lord.' But he said to them, 'Unless I see in His hands the print of the nails, and place my finger in the mark of the nails, and place my hand in His side, I will not believe.' Eight days later, His disciples were again in the house, and Thomas was with them. The doors were shut, but Jesus came and stood among them, and said, 'Peace be with you.' Then He said to Thomas, 'Put your finger here, and see My hands; and put out your hand, and place it in My side; do not be faithless, but believing.' Thomas answered Him, 'My Lord and my God!' Jesus said to him, 'Have you believed because you have seen Me? Blessed are those who have not seen and yet believe.'",
    reflection:
      "Christ does not rebuke Thomas for needing evidence. He provides it. But then He says: blessed are those who have not seen and yet believe. The beatitude is for you, not Thomas. You will not get to touch the wounds. But the wounds are real, and Thomas confirmed it, and his confirmation is written down for you.",
    argumentRef: "faith-is-will",
    sitPrompt: "Thomas doubted among his brothers. You doubt among yours. Christ met him. He will meet you.",
  },
  {
    day: 17,
    title: "All is straw",
    source: "Aquinas at Naples, Dec 6, 1273",
    era: "1273",
    passage:
      "While he was celebrating Mass in the chapel of St. Nicholas on the morning of December 6, 1273, something so extraordinary happened that Thomas never wrote another word. He abandoned the Summa, unfinished. When his friend Reginald begged him to return to work, Thomas answered: 'Reginald, I cannot — because all that I have written seems like straw compared to what has now been revealed to me.'",
    reflection:
      "The most rigorous intellect in the history of the Church stopped writing because what he glimpsed in prayer dwarfed everything he had ever written. His work is the foundation of Catholic thought for seven centuries. He called it straw. The intellectual life and the mystical life are not opposed. The former is meant to collapse into the latter.",
    argumentRef: "faith-is-will",
    sitPrompt: "Aquinas saw something. He never described it. Sit in the knowledge that the goal is not to describe.",
  },
  {
    day: 18,
    title: "Seeing, touching, tasting are deceived",
    source: "Aquinas, Adoro Te Devote (stanza 2)",
    era: "c. 1264",
    passage:
      "Seeing, touching, tasting are in Thee deceived: / How says trusty hearing? That shall be believed; / What God's Son has told me, take for truth I do; / Truth Himself speaks truly or there's nothing true.",
    reflection:
      "Aquinas formalizes a claim: the senses are deceived at the Eucharist. You see bread. It is not bread. The only guarantor of the truth is Christ's word. If Truth Himself lies, there is no truth anywhere. Faith is not against reason; it is the rational response to the testimony of a trustworthy witness.",
    argumentRef: "real-presence",
    sitPrompt: "If Christ is trustworthy once, He is trustworthy always. The Eucharist is the test case. Sit with His word.",
  },
  {
    day: 19,
    title: "The canon of Scripture",
    source: "Council of Carthage (397 AD)",
    era: "4th century",
    passage:
      "Besides the canonical Scriptures, nothing is to be read in church under the name of divine Scripture. The canonical Scriptures are these: Genesis, Exodus, Leviticus... [full 73-book canon listed, including the deuterocanonicals: Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Maccabees]. Of the New Testament: four gospels, Acts, fourteen epistles of Paul, two of Peter, three of John, one of James, one of Jude, Revelation. Let this be made known also to our brother and fellow-bishop Boniface, or to other bishops of those parts, for the purpose of confirming that canon."
,
    reflection:
      "The canon of Scripture was not delivered by angels. It was discerned by the Church, in council, in 393 (Hippo) and 397 (Carthage), and ratified again at Trent. Sola scriptura cannot tell you which books are Scripture — the list is not in the books. The canon presupposes the authority of the Church that canonized it.",
    argumentRef: "sola-scriptura",
    sitPrompt: "You trust the Table of Contents. That trust was placed in you by the Church.",
  },
  {
    day: 20,
    title: "The moral argument",
    source: "C.S. Lewis, Mere Christianity I.1",
    era: "1952",
    passage:
      "Every one has heard people quarrelling... They say things like this: 'How'd you like it if anyone did the same to you?' — 'That's my seat, I was there first' — 'Leave him alone, he isn't doing you any harm' — 'Why should you shove in first?' — 'Give me a bit of your orange, I gave you a bit of mine' — 'Come on, you promised.' People say things like that every day, educated people as well as uneducated, and children as well as grown-ups. Now what interests me about all these remarks is that the man who makes them is not merely saying that the other man's behaviour does not happen to please him. He is appealing to some kind of standard of behaviour which he expects the other man to know about.",
    reflection:
      "The moral sense is a datum. Try denying it — the denial itself appeals to a standard ('that's unfair,' 'that's unjust'). If moral truths are real, they are not physical. They are not empirical. They demand a source outside matter. The moral argument does not prove Catholicism, but it forces a choice: either morality is an illusion, or it is grounded in something transcendent.",
    argumentRef: "moral-argument",
    sitPrompt: "When you were hurt unjustly, something inside you knew it was wrong. Where did that knowing come from?",
  },
  {
    day: 21,
    title: "The prodigal is already being run to",
    source: "Luke 15:20",
    era: "c. 30 AD",
    passage:
      "And he arose and came to his father. But while he was yet at a great distance, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him.",
    reflection:
      "The father is watching the road. Before the son has a chance to deliver his prepared speech, the father is running. In the ancient Near East, dignified men did not run. To run, he had to pull up his robe. The undignified sprint of God toward the wandering son is the point of the parable. You are being run toward right now. You have not yet finished your speech.",
    argumentRef: "faith-is-will",
    sitPrompt: "You do not need to arrive before He runs. Let yourself be met on the road.",
  },
  {
    day: 22,
    title: "The via negativa",
    source: "Pseudo-Dionysius, Mystical Theology 1",
    era: "5th-6th century",
    passage:
      "We pray that we may come into this darkness which is beyond light, and, without seeing and without knowing, may we see and know Him who is beyond vision and beyond knowledge — through not seeing and not knowing. For this is truly to see and to know: to praise the Transcendent transcendently, through the denial of all beings; as sculptors carving a statue remove every obstacle that hides the pure vision of the hidden image, and by that removal alone make the beauty hidden within it appear.",
    reflection:
      "Dionysius teaches that God is not another being to be known as beings are known. Our concepts limit Him by nature. The via negativa — saying what God is not — protects the majesty of what He is. The darkness you sit in is not a failure of vision. It is the recognition that the object of faith is not graspable by concept. Darkness can be the nearest encounter.",
    argumentRef: "hiddenness",
    sitPrompt: "God is not a feeling, not a concept, not an object of the mind. He is closer than those. Sit in the darkness that is nearer than any image.",
  },
  {
    day: 23,
    title: "The Jewish scholar's verdict",
    source: "Pinchas Lapide, The Resurrection of Jesus",
    era: "1982",
    passage:
      "I accept the resurrection of Easter Sunday not as an invention of the community of disciples, but as a historical event. The experience of the resurrection as the foundation act of the church, which has sustained the church for almost 2,000 years, seems to me — as a historian — a fact that is beyond question.",
    reflection:
      "Lapide is an Orthodox Jewish theologian. He does not become Christian. But as a historian, he cannot explain the origin of the Church without a real Resurrection. This is the inference from the data, made by someone who has no theological incentive to reach the conclusion.",
    argumentRef: "resurrection",
    sitPrompt: "A Jewish historian concluded the tomb was empty because the data forced him to. Sit with the weight of that.",
  },
  {
    day: 24,
    title: "The household of faith",
    source: "Galatians 6:10",
    era: "c. 49 AD",
    passage:
      "So then, as we have opportunity, let us do good to all men, and especially to those who are of the household of faith.",
    reflection:
      "Faith is not a solo pursuit. Paul assumes a household — a visible, structured community with mutual obligation. The Church is not optional to the Christian life; she is the household in which faith is fed. When you are weak, this is where strength is loaned.",
    argumentRef: "ecclesiology",
    sitPrompt: "You do not have to carry this alone. The household carries what the individual cannot.",
  },
  {
    day: 25,
    title: "The Eucharistic bread and cup",
    source: "Cyril of Jerusalem, Catechetical Lecture 22.6",
    era: "c. 350 AD",
    passage:
      "Do not, therefore, regard the Bread and Wine as simply that; for they are, according to the Master's declaration, the Body and Blood of Christ. Even though the senses suggest to you the other, let faith make you firm. Do not judge in this matter by taste, but be fully assured by faith, not doubting that you have been deemed worthy of the Body and Blood of Christ.",
    reflection:
      "Cyril is a fourth-century bishop teaching catechumens. He tells them flatly: the senses report bread and wine; faith reports Body and Blood; trust faith. This is not a late medieval development. This is the public catechesis of the Church in 350 AD.",
    argumentRef: "real-presence",
    sitPrompt: "The senses do their job. Faith does its own. Let both report, and trust the higher.",
  },
  {
    day: 26,
    title: "The Incarnation is the answer to divine hiddenness",
    source: "John 1:14",
    era: "c. 90 AD",
    passage:
      "And the Word became flesh and dwelt among us, full of grace and truth; we have beheld His glory, glory as of the only Son from the Father.",
    reflection:
      "The objection 'why is God hidden' assumes He has remained hidden. The Christian claim is that He has not. He took flesh. He lived thirty-three years in Palestine. The hiddenness you feel is after the Incarnation — it is the hiddenness of a God who has already spoken most clearly and now invites you to trust the word He has given.",
    argumentRef: "hiddenness",
    sitPrompt: "He has already shown His face. Your task is not to find Him but to remember what He has shown.",
  },
  {
    day: 27,
    title: "Faith is a habit of the intellect",
    source: "Aquinas, ST II-II q.4 a.1",
    era: "1265-1274",
    passage:
      "Faith is a habit of the mind whereby eternal life is begun in us, making the intellect assent to what is non-apparent. Thus faith differs from all other things pertaining to the intellect. For science and understanding and wisdom and knowledge regard things that are apparent; whereas opinion and suspicion regard things non-apparent, but without certitude. Faith alone regards things non-apparent but with firm assent.",
    reflection:
      "Aquinas defines faith with precision. Its object is non-apparent. Its mode is firm assent. This is why faith feels uncertain from the inside — its object is, by definition, not given by feeling. The firmness is not a feeling of certainty; it is the will's commitment to trust the testimony of the one who knows.",
    argumentRef: "faith-is-will",
    sitPrompt: "Faith without feeling is not a degraded faith. It is faith in its most native form.",
  },
  {
    day: 28,
    title: "Athanasius against the world",
    source: "Athanasius, On the Incarnation 54",
    era: "c. 318 AD",
    passage:
      "He became man that we might be made God. He manifested Himself by means of a body in order that we might perceive the Mind of the unseen Father. He endured shame from men that we might inherit immortality.",
    reflection:
      "This is the heart of Christian theology. The Incarnation is not God lowering Himself to us only; it is God raising us to Himself. The goal of the Christian life is theosis — becoming partakers of the divine nature (2 Peter 1:4). You are not being asked to merely survive. You are being drawn into the life of God.",
    argumentRef: "incarnation",
    sitPrompt: "You are being made God, not by your own power but by participation. Sit in the strangeness of that destiny.",
  },
  {
    day: 29,
    title: "The Mass is the sacrifice of Calvary",
    source: "Hebrews 13:10",
    era: "c. 65 AD",
    passage:
      "We have an altar from which those who serve the tent have no right to eat.",
    reflection:
      "Hebrews — the New Testament's most temple-focused letter — asserts that Christians have an altar. Altars are for sacrifice. The Mass is not merely a memorial meal; it is the re-presentation of Calvary in an unbloody manner. Every Mass you attend is not a new sacrifice but the same sacrifice, made present.",
    argumentRef: "real-presence",
    sitPrompt: "The sacrifice of Calvary is not in the past. It is present wherever the altar is.",
  },
  {
    day: 30,
    title: "Mary is the Ark of the Covenant",
    source: "Revelation 11:19-12:1",
    era: "c. 95 AD",
    passage:
      "Then God's temple in heaven was opened, and the ark of his covenant was seen within his temple; and there were flashes of lightning, voices, peals of thunder, an earthquake, and heavy hail. And a great sign appeared in heaven, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.",
    reflection:
      "The chapter break between 11 and 12 is a modern invention; in John's vision, the Ark appears and is identified as the woman. The Old Testament Ark carried the Word (tablets), the bread (manna), and the priesthood (Aaron's rod). Mary carried the Word made flesh, the Bread of Life, and the High Priest. She is the Ark. This is why the Church venerates her.",
    argumentRef: "marian",
    sitPrompt: "The one who carried Christ is not incidental. She is the first Christian. Ask her to pray for you.",
  },
  {
    day: 31,
    title: "Chesterton on the dead Church",
    source: "Chesterton, The Everlasting Man",
    era: "1925",
    passage:
      "Christianity has died many times and risen again; for it had a god who knew the way out of the grave. At least five times, therefore, with the Arian and the Albigensian, with the Humanist sceptic, after Voltaire and after Darwin, the Faith has to all appearance gone to the dogs. In each of these five cases it was the dog that died.",
    reflection:
      "The Church has died and risen repeatedly. Every age produces a confident obituary; every age is outlived. The same Church that Voltaire announced dead still crowns popes. The same Church the Enlightenment rejected still baptizes millions. You are standing inside something that has proven it knows how to survive. That is not a coincidence.",
    argumentRef: "church-endurance",
    sitPrompt: "Empires that declared the Church dead are dust. The Church still gathers. Sit with the weight of that pattern.",
  },
  {
    day: 32,
    title: "The unmoved mover",
    source: "Aristotle, Metaphysics XII.7",
    era: "c. 340 BC",
    passage:
      "There is, then, something which is always moved with an unceasing motion, which is motion in a circle; and this is plain not only in theory but in fact. Therefore the first heavens must be eternal. There is, therefore, also something which moves them. And since that which is moved and moves is intermediate, there is a mover which moves without being moved, being eternal, substance, and actuality.",
    reflection:
      "Aristotle, a pagan philosopher writing three centuries before Christ, reasoned his way to the existence of a First Mover — eternal, pure actuality, the source of all motion. Natural reason, unaided by revelation, can arrive at God. This is why the Church insists the existence of God is knowable from creation. Faith does not contradict reason; it completes it.",
    argumentRef: "first-mover",
    sitPrompt: "A pagan philosopher found God without a Bible. You have more than he did. What excuse do you have for despair?",
  },
  {
    day: 33,
    title: "God meets you in the ordinary",
    source: "Brother Lawrence, Practice of the Presence of God",
    era: "c. 1666",
    passage:
      "The time of business does not with me differ from the time of prayer; and in the noise and clatter of my kitchen, while several persons are at the same time calling for different things, I possess God in as great tranquility as if I were upon my knees at the blessed sacrament.",
    reflection:
      "Brother Lawrence was a lay Carmelite who worked in the monastery kitchen for forty years. He discovered that God was as available at the sink as in the chapel. The ordinary is not the enemy of the spiritual life. It is the arena. You do not need to escape your work to find God. You need to do it with Him.",
    argumentRef: "presence",
    sitPrompt: "The next mundane task you do — do it as if He were there. Because He is.",
  },
  {
    day: 34,
    title: "The pattern of covenant",
    source: "Jeremiah 31:31-34",
    era: "c. 587 BC",
    passage:
      "Behold, the days are coming, says the LORD, when I will make a new covenant with the house of Israel and the house of Judah, not like the covenant which I made with their fathers when I took them by the hand to bring them out of the land of Egypt, my covenant which they broke, though I was their husband, says the LORD. But this is the covenant which I will make with the house of Israel after those days, says the LORD: I will put my law within them, and I will write it upon their hearts; and I will be their God, and they shall be my people.",
    reflection:
      "Jeremiah — six centuries before Christ — predicts a new covenant written on hearts. This is the Christ event, announced in advance. The New Testament is not a departure from the Old; it is the fulfillment of a promise already made. The pattern of prophecy and fulfillment is the Bible's internal vindication of itself.",
    argumentRef: "prophecy",
    sitPrompt: "The new covenant was promised six hundred years before it arrived. The promise was kept. He keeps promises.",
  },
  {
    day: 35,
    title: "The conscience and the law",
    source: "Romans 2:14-15",
    era: "c. 57 AD",
    passage:
      "When Gentiles who have not the law do by nature what the law requires, they are a law to themselves, even though they do not have the law. They show that what the law requires is written on their hearts, while their conscience also bears witness and their conflicting thoughts accuse or perhaps excuse them.",
    reflection:
      "Paul asserts that the moral law is written on the human heart. Every man is given enough light to know that cruelty is wrong. This is the Catholic doctrine of natural law. You do not need Scripture to know that murder is evil. The knowing is already in you. The question is whether you will obey what you already know.",
    argumentRef: "moral-argument",
    sitPrompt: "Where have you disobeyed what you already knew was right? That is where to repent.",
  },
  {
    day: 36,
    title: "The test of time",
    source: "Gamaliel, Acts 5:38-39",
    era: "c. 35 AD",
    passage:
      "So in the present case I tell you, keep away from these men and let them alone; for if this plan or this undertaking is of men, it will fail; but if it is of God, you will not be able to overthrow them. You might even be found opposing God!",
    reflection:
      "Gamaliel, a Jewish rabbi, proposed a test: time will tell. Two thousand years later, the movement he proposed to test is the largest coherent community on earth. Every attempt to overthrow it — Roman, Arian, Islamic, Enlightenment, Communist — has failed. The pragmatic test Gamaliel proposed has been run. The verdict is in.",
    argumentRef: "church-endurance",
    sitPrompt: "The test has been run for twenty centuries. The Church is still here. Sit in the result.",
  },
  {
    day: 37,
    title: "Do the next right thing",
    source: "Brother Lawrence (paraphrased)",
    era: "17th century",
    passage:
      "The most excellent method of going to God is that of doing our common business without any view of pleasing men, and, as far as we are capable, purely for the love of God. It is a great delusion to think that the times of prayer ought to differ from other times. We are as strictly obliged to adhere to God by action in the time of action as by prayer in its season.",
    reflection:
      "When the faith feels impossible, stop trying to conjure belief. Do the next right thing. Go to Mass. Say the Our Father even if you feel nothing. Be kind to the person in front of you. The action precedes the feeling. The feeling follows the action, sometimes by years. Do not wait for the feeling.",
    argumentRef: "faith-is-will",
    sitPrompt: "What is the next right thing in front of you? Do it, with Him, whether you feel Him or not.",
  },
  {
    day: 38,
    title: "The cloud of witnesses",
    source: "Hebrews 12:1-2",
    era: "c. 65 AD",
    passage:
      "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with perseverance the race that is set before us, looking to Jesus the pioneer and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.",
    reflection:
      "You are not alone. Every saint, every Father, every faithful ancestor is watching. They are not metaphors; they are real persons in the presence of God, and they pray for you. The Communion of Saints is not a doctrine to memorize; it is a support network. When you struggle, you struggle within a crowd of witnesses who already finished the race.",
    argumentRef: "communion-of-saints",
    sitPrompt: "Name one saint. Ask them to pray for you, out loud or silently. They can hear you.",
  },
  {
    day: 39,
    title: "Be not afraid",
    source: "John Paul II, Homily at the Inauguration of His Pontificate",
    era: "Oct 22, 1978",
    passage:
      "Do not be afraid. Open wide the doors for Christ. To His saving power open the boundaries of States, economic and political systems, the vast fields of culture, civilization and development. Do not be afraid. Christ knows what is in man. He alone knows it.",
    reflection:
      "A pope who had lived under Nazi occupation and Soviet tyranny, who had watched friends die for the faith, stood before the world in 1978 and said: do not be afraid. Open the door wide. He is not asking you to manufacture courage. He is asking you to let Christ in. The fear dissolves in His presence, not in your efforts.",
    argumentRef: "faith-is-will",
    sitPrompt: "Where is the door you have kept closed? Open it. Say: come in. That is the whole movement.",
  },
  {
    day: 40,
    title: "The kingdom is within",
    source: "Luke 17:21",
    era: "c. 30 AD",
    passage:
      "Nor will they say, 'Lo, here it is!' or 'There!' for behold, the kingdom of God is in the midst of you.",
    reflection:
      "You have been looking outside — for a sign, a feeling, proof, evidence. Christ says the kingdom is in the midst of you. This does not mean it is a psychological state; it means it is present, now, where you are. The door is under your feet. You do not need to travel to find it. You need to stop looking over the horizon for what is already here.",
    argumentRef: "presence",
    sitPrompt: "Stop searching over the horizon. Sit where you are. The kingdom is here.",
  },
];

export function readingForDate(date: Date = new Date()): MorningReading {
  const epochDay = Math.floor(date.getTime() / (1000 * 60 * 60 * 24));
  return MORNING_READINGS[epochDay % MORNING_READINGS.length];
}
