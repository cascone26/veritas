export interface CourseLesson {
  title: string;
  description: string;
  readings: { source: string; path: string; label: string }[];
  questions: string[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  topics: string[];
  description: string;
  lessons: CourseLesson[];
  prerequisites?: string[];
  recommended?: boolean;
}

export const COURSES: Course[] = [
  // ===== BEGINNER =====
  {
    id: "five-ways",
    title: "The Five Ways",
    subtitle: "Aquinas's proofs for God's existence",
    difficulty: "beginner",
    duration: "3 days",
    topics: ["aquinas", "philosophy", "apologetics"],
    description: "Walk through each of Aquinas's Five Ways step by step. Learn the argument, understand the objections, and practice explaining them.",
    recommended: true,
    lessons: [
      {
        title: "The First & Second Ways: Motion and Efficient Cause",
        description: "The argument from motion and the argument from efficient causality — why an infinite regress is impossible.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=2&a=3", label: "ST I, q.2, a.3 — Whether God exists" },
          { source: "scg", path: "/scg?book=1&chapter=13", label: "SCG I, c.13 — Arguments to prove God's existence" },
        ],
        questions: ["What is the difference between per se and per accidens causal series?", "Why can't the series of movers go to infinity?", "How does Aquinas distinguish the First Way from the Second Way?"],
      },
      {
        title: "The Third & Fourth Ways: Contingency and Degrees",
        description: "Why contingent beings require a necessary being, and why degrees of perfection point to a maximum.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=2&a=3", label: "ST I, q.2, a.3 — The Third and Fourth Ways" },
          { source: "scg", path: "/scg?book=1&chapter=15", label: "SCG I, c.15 — God is eternal" },
        ],
        questions: ["What does 'contingent' mean in this context?", "How does the Fourth Way differ from the ontological argument?", "Why must there be a maximum in any genus?"],
      },
      {
        title: "The Fifth Way and Common Objections",
        description: "The argument from design (governance), plus the most common objections to all Five Ways and how to answer them.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=2&a=3", label: "ST I, q.2, a.3 — The Fifth Way" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 31-35 — Knowing God through creation" },
        ],
        questions: ["How does the Fifth Way differ from Paley's watchmaker argument?", "What is the 'Who made God?' objection and why does it fail?", "Can the Five Ways prove a personal God, or only a First Cause?"],
      },
    ],
  },
  {
    id: "catholic-101",
    title: "Catholic 101",
    subtitle: "What Catholics actually believe",
    difficulty: "beginner",
    duration: "5 days",
    topics: ["theology", "catechism", "apologetics"],
    description: "A crash course in core Catholic doctrine — the Creed, the sacraments, the moral life, and prayer. Built from the Catechism's own structure.",
    recommended: true,
    lessons: [
      {
        title: "The Creed: What We Believe",
        description: "God the Father, creation, the Fall, and why we need a Redeemer.",
        readings: [
          { source: "ccc", path: "/ccc?part=1", label: "CCC Part 1 — The Profession of Faith" },
          { source: "bible", path: "/bible?book=Genesis&chapter=1", label: "Genesis 1-3 — Creation and Fall" },
        ],
        questions: ["What does it mean to say God created ex nihilo?", "Why is original sin not just a metaphor?", "What is the relationship between faith and reason?"],
      },
      {
        title: "Christ and Redemption",
        description: "The Incarnation, the Paschal Mystery, and why God became man.",
        readings: [
          { source: "ccc", path: "/ccc?part=1", label: "CCC 456-478 — Why the Word became flesh" },
          { source: "bible", path: "/bible?book=John&chapter=1", label: "John 1 — The Word made flesh" },
        ],
        questions: ["What is the hypostatic union?", "Why was the Cross necessary?", "What does 'He descended into hell' mean?"],
      },
      {
        title: "The Sacraments",
        description: "The seven sacraments as channels of grace — especially Baptism, Eucharist, and Confession.",
        readings: [
          { source: "ccc", path: "/ccc?part=2", label: "CCC Part 2 — The Sacraments" },
          { source: "summa", path: "/summa?part=III&q=60&a=1", label: "ST III, q.60 — What is a sacrament?" },
        ],
        questions: ["Why seven sacraments and not more or fewer?", "What is the difference between a sacrament and a symbol?", "What does ex opere operato mean?"],
      },
      {
        title: "The Moral Life",
        description: "The Ten Commandments, the virtues, sin, and conscience.",
        readings: [
          { source: "ccc", path: "/ccc?part=3", label: "CCC Part 3 — Life in Christ" },
          { source: "summa", path: "/summa?part=I-II&q=94&a=2", label: "ST I-II, q.94, a.2 — The precepts of natural law" },
        ],
        questions: ["What is natural law?", "What are the four cardinal virtues?", "What is the difference between mortal and venial sin?"],
      },
      {
        title: "Prayer and the Our Father",
        description: "What prayer is, how to pray, and why the Our Father contains everything.",
        readings: [
          { source: "ccc", path: "/ccc?part=4", label: "CCC Part 4 — Christian Prayer" },
          { source: "bible", path: "/bible?book=Matthew&chapter=6", label: "Matthew 6:5-15 — The Lord's Prayer" },
        ],
        questions: ["What are the three expressions of prayer?", "Why does Aquinas call the Our Father the most perfect prayer?", "What does 'lead us not into temptation' actually mean?"],
      },
    ],
  },
  {
    id: "real-presence",
    title: "The Real Presence",
    subtitle: "Scripture to Aquinas on the Eucharist",
    difficulty: "beginner",
    duration: "4 days",
    topics: ["theology", "sacraments", "scripture", "aquinas", "apologetics"],
    description: "The full Catholic case for the Real Presence — from the Old Testament types through Christ's own words to Aquinas's metaphysical explanation.",
    recommended: true,
    lessons: [
      {
        title: "Old Testament Types",
        description: "Manna, Melchizedek, the Passover lamb — how the OT prefigures the Eucharist.",
        readings: [
          { source: "bible", path: "/bible?book=Exodus&chapter=16", label: "Exodus 16 — Manna from heaven" },
          { source: "bible", path: "/bible?book=Genesis&chapter=14", label: "Genesis 14:18 — Melchizedek's offering" },
        ],
        questions: ["How does the manna prefigure the Eucharist?", "Why is Melchizedek's offering of bread and wine significant?", "What is typology and why does it matter?"],
      },
      {
        title: "The Bread of Life Discourse",
        description: "John 6 — the hardest teaching Jesus ever gave, and the disciples who walked away.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=6", label: "John 6:22-71 — The Bread of Life" },
          { source: "catena", path: "/catena?gospel=john&chapter=6", label: "Catena Aurea on John 6 — Church Fathers" },
        ],
        questions: ["Did Jesus speak metaphorically in John 6? How do we know?", "Why did many disciples leave after this teaching?", "What does the Greek word 'trogo' (gnaw/munch) tell us?"],
      },
      {
        title: "The Last Supper and St. Paul",
        description: "The institution of the Eucharist and Paul's warning about eating unworthily.",
        readings: [
          { source: "bible", path: "/bible?book=Matthew&chapter=26", label: "Matthew 26:26-28 — This is my body" },
          { source: "bible", path: "/bible?book=1 Corinthians&chapter=11", label: "1 Corinthians 11:23-30 — Discerning the body" },
        ],
        questions: ["Why does Paul say eating unworthily makes you guilty of the body and blood?", "What do the words of institution mean?", "How do the Synoptic accounts complement John 6?"],
      },
      {
        title: "Aquinas on Transubstantiation",
        description: "The metaphysical explanation — substance vs. accidents, how bread becomes God.",
        readings: [
          { source: "summa", path: "/summa?part=III&q=75&a=1", label: "ST III, q.75 — The change of bread and wine into Christ's body" },
          { source: "ccc", path: "/ccc?part=2", label: "CCC 1373-1381 — The Real Presence" },
        ],
        questions: ["What is the difference between substance and accidents?", "Why is 'transubstantiation' more precise than 'Real Presence'?", "How do we respond to the objection that this is just Aristotelian philosophy?"],
      },
    ],
  },
  {
    id: "problem-of-evil",
    title: "The Problem of Evil",
    subtitle: "Every angle, every answer",
    difficulty: "beginner",
    duration: "5 days",
    topics: ["apologetics", "philosophy", "theology", "aquinas"],
    description: "The strongest objection to God's existence, answered from every angle — logical, evidential, emotional, and Thomistic.",
    recommended: true,
    lessons: [
      {
        title: "The Logical Problem of Evil",
        description: "Can an all-good, all-powerful God coexist with evil? Aquinas says yes — and here's why.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=2&a=3", label: "ST I, q.2, a.3, obj.1 — The objection from evil" },
          { source: "summa", path: "/summa?part=I&q=48&a=1", label: "ST I, q.48 — Evil as privation" },
        ],
        questions: ["What does it mean to say evil is a privation?", "Why does the free will defense work?", "How does Aquinas answer the objection in q.2, a.3?"],
      },
      {
        title: "Why God Permits Evil",
        description: "The greater-good defense, the nature of providence, and why a world without suffering is actually impossible.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=49&a=2", label: "ST I, q.49, a.2 — Whether the supreme good is the cause of evil" },
          { source: "summa", path: "/summa?part=I&q=22&a=2", label: "ST I, q.22 — Providence and evil" },
        ],
        questions: ["Does God cause evil?", "What is the difference between permitting and willing evil?", "Why is 'the best of all possible worlds' not a Catholic position?"],
      },
      {
        title: "Natural Evil and Animal Suffering",
        description: "Earthquakes, disease, predation — why natural evil is the harder problem and how Aquinas handles it.",
        readings: [
          { source: "scg", path: "/scg?book=3&chapter=71", label: "SCG III, c.71 — Divine providence and evil" },
          { source: "summa", path: "/summa?part=I&q=47&a=2", label: "ST I, q.47 — The diversity and inequality of things" },
        ],
        questions: ["Is natural evil punishment for original sin?", "How does the order of the universe require corruption?", "Why did God create predators?"],
      },
      {
        title: "Augustine on Evil",
        description: "The Confessions, the Enchiridion, and On Free Will — Augustine's journey from Manichaeism to the privation theory.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/confessions", label: "Confessions — Augustine's discovery that evil has no substance" },
          { source: "spiritual-reading", path: "/spiritual-reading/enchiridion-augustine", label: "Enchiridion — Faith, Hope, and Love on evil" },
        ],
        questions: ["Why did Augustine reject Manichaeism?", "How did Neo-Platonism help Augustine understand evil?", "What is the relationship between Augustine and Aquinas on evil?"],
      },
      {
        title: "The Emotional Problem and Pastoral Response",
        description: "When someone is suffering, arguments aren't enough. The Book of Job, the Cross, and redemptive suffering.",
        readings: [
          { source: "bible", path: "/bible?book=Job&chapter=38", label: "Job 38-42 — God's answer from the whirlwind" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 309-314 — Why does evil exist?" },
        ],
        questions: ["What is the difference between the logical and emotional problem of evil?", "How does the Cross answer suffering?", "What is redemptive suffering?"],
      },
    ],
  },
  {
    id: "intro-natural-law",
    title: "Introduction to Natural Law",
    subtitle: "The moral law written on every heart",
    difficulty: "beginner",
    duration: "5 days",
    topics: ["natural-law", "philosophy", "moral-theology", "aquinas"],
    description: "Aquinas's natural law theory from the ground up — what it is, how we know it, and why it matters for every moral question.",
    lessons: [
      {
        title: "What Is Law?",
        description: "Aquinas's definition of law and the four types: eternal, natural, human, and divine.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=90&a=4", label: "ST I-II, q.90 — The essence of law" },
          { source: "summa", path: "/summa?part=I-II&q=91&a=2", label: "ST I-II, q.91 — The different kinds of law" },
        ],
        questions: ["What are the four elements of Aquinas's definition of law?", "How does natural law relate to eternal law?", "Why is divine law necessary if we have natural law?"],
      },
      {
        title: "The First Principles",
        description: "Good is to be done and pursued, evil avoided — and the natural inclinations that specify it.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=94&a=2", label: "ST I-II, q.94, a.2 — The precepts of natural law" },
          { source: "ccc", path: "/ccc?part=3", label: "CCC 1954-1960 — The natural moral law" },
        ],
        questions: ["What are the three natural inclinations?", "Can the natural law be changed or abolished?", "How do we derive specific moral rules from first principles?"],
      },
      {
        title: "Natural Law and Human Rights",
        description: "How natural law grounds human dignity, rights, and justice — against both positivism and relativism.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=95&a=2", label: "ST I-II, q.95 — Human law derived from natural law" },
          { source: "spiritual-reading", path: "/spiritual-reading/gaudium-et-spes", label: "Gaudium et Spes — The Church in the modern world" },
        ],
        questions: ["Why can't rights be grounded in positive law alone?", "What makes an unjust law not really a law?", "How does natural law answer moral relativism?"],
      },
      {
        title: "Natural Law and Bioethics",
        description: "Applying natural law to abortion, euthanasia, contraception, and IVF.",
        readings: [
          { source: "summa", path: "/summa?part=II-II&q=64&a=5", label: "ST II-II, q.64, a.5 — Self-defense and double effect" },
          { source: "ccc", path: "/ccc?part=3", label: "CCC 2270-2283 — Respect for human life" },
        ],
        questions: ["What is the principle of double effect?", "How does natural law argue against abortion?", "Why does the Church oppose IVF?"],
      },
      {
        title: "Objections and Modern Challenges",
        description: "The Euthyphro dilemma, the is-ought gap, and the 'you can't impose your morality' objection.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=94&a=4", label: "ST I-II, q.94, a.4 — Whether the natural law is the same in all" },
          { source: "scg", path: "/scg?book=3&chapter=129", label: "SCG III, c.129 — The natural law" },
        ],
        questions: ["How does Aquinas solve the Euthyphro dilemma?", "Does natural law commit the naturalistic fallacy?", "Why is 'you can't legislate morality' self-refuting?"],
      },
    ],
  },
  // ===== INTERMEDIATE =====
  {
    id: "apologetics-protestantism",
    title: "Catholic Apologetics vs. Protestantism",
    subtitle: "Sola Scriptura, Sola Fide, and the Church",
    difficulty: "intermediate",
    duration: "7 days",
    topics: ["apologetics", "protestant", "scripture", "theology"],
    description: "The seven biggest Protestant objections to Catholicism, answered from Scripture, the Fathers, and Aquinas.",
    recommended: true,
    lessons: [
      {
        title: "Sola Scriptura",
        description: "The Bible alone? Why this doctrine is self-refuting and historically impossible.",
        readings: [
          { source: "bible", path: "/bible?book=2 Thessalonians&chapter=2", label: "2 Thessalonians 2:15 — Hold to the traditions" },
          { source: "spiritual-reading", path: "/spiritual-reading/dei-verbum", label: "Dei Verbum — Scripture and Tradition" },
        ],
        questions: ["Where does the Bible teach Sola Scriptura?", "How was the canon of Scripture determined?", "What did the early Church Fathers say about Scripture and Tradition?"],
      },
      {
        title: "Sola Fide",
        description: "Faith alone? James 2:24 and the Catholic understanding of justification.",
        readings: [
          { source: "bible", path: "/bible?book=James&chapter=2", label: "James 2:14-26 — Faith without works" },
          { source: "summa", path: "/summa?part=I-II&q=114&a=1", label: "ST I-II, q.114 — Merit" },
        ],
        questions: ["What does Paul mean by 'works of the law' in Romans?", "How does James 2:24 relate to Romans 3:28?", "What is the Catholic understanding of justification?"],
      },
      {
        title: "The Papacy",
        description: "Peter as the rock — Matthew 16, the early Church, and apostolic succession.",
        readings: [
          { source: "bible", path: "/bible?book=Matthew&chapter=16", label: "Matthew 16:18-19 — Upon this rock" },
          { source: "spiritual-reading", path: "/spiritual-reading/lumen-gentium", label: "Lumen Gentium — The Church" },
        ],
        questions: ["What does 'petra' vs 'petros' actually mean in the Greek?", "Did the early Church Fathers recognize papal primacy?", "What is apostolic succession and why does it matter?"],
      },
      {
        title: "The Saints and Mary",
        description: "Why we pray to saints, what the Marian dogmas actually claim, and the biblical basis for both.",
        readings: [
          { source: "bible", path: "/bible?book=Luke&chapter=1", label: "Luke 1:28-56 — The Magnificat" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 963-975 — Mary, Mother of the Church" },
        ],
        questions: ["Is praying to saints the same as worshipping them?", "What is the biblical basis for the Immaculate Conception?", "What does 'full of grace' (kecharitomene) mean?"],
      },
      {
        title: "Confession and Purgatory",
        description: "The power to forgive sins, the purification after death, and the scriptural evidence.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=20", label: "John 20:21-23 — Whose sins you forgive" },
          { source: "bible", path: "/bible?book=1 Corinthians&chapter=3", label: "1 Corinthians 3:11-15 — Saved through fire" },
        ],
        questions: ["Why can't I just confess directly to God?", "What is the scriptural basis for purgatory?", "What did the early Church practice regarding confession?"],
      },
      {
        title: "The Canon and Authority",
        description: "How we got the Bible, why Protestants have fewer books, and the authority question.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/providentissimus-deus", label: "Providentissimus Deus — On the study of Scripture" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 120-130 — The canon of Scripture" },
        ],
        questions: ["Who decided which books belong in the Bible?", "Why were the deuterocanonical books removed by Protestants?", "What is the 'canon within the canon' problem?"],
      },
      {
        title: "Putting It All Together",
        description: "The fundamental question: authority. Why every Protestant objection ultimately comes back to one issue.",
        readings: [
          { source: "summa", path: "/summa?part=II-II&q=1&a=10", label: "ST II-II, q.1, a.10 — Whether it belongs to the Magisterium to draw up a symbol of faith" },
          { source: "spiritual-reading", path: "/spiritual-reading/dei-verbum", label: "Dei Verbum — On divine revelation" },
        ],
        questions: ["Why is the authority question the most fundamental?", "How do you present the Catholic case charitably?", "What are the strongest Protestant counter-arguments?"],
      },
    ],
  },
  {
    id: "apologetics-atheism",
    title: "Catholic Apologetics vs. Atheism",
    subtitle: "Answering the New Atheists and beyond",
    difficulty: "intermediate",
    duration: "7 days",
    topics: ["apologetics", "philosophy", "aquinas", "modern"],
    description: "The strongest atheist arguments — from Dawkins to Nietzsche — answered with Thomistic philosophy.",
    recommended: true,
    lessons: [
      {
        title: "The New Atheist Playbook",
        description: "What Dawkins, Harris, Hitchens, and Dennett actually argue — and where they go wrong.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=2&a=3", label: "ST I, q.2, a.3 — Whether God exists" },
          { source: "scg", path: "/scg?book=1&chapter=13", label: "SCG I, c.13 — Arguments for God's existence" },
        ],
        questions: ["What is Dawkins's 'Ultimate Boeing 747' argument?", "Why does 'Who designed the designer?' miss the point?", "How do New Atheists typically misrepresent the Five Ways?"],
      },
      {
        title: "Science vs. Religion?",
        description: "The false conflict thesis, what faith actually means, and why science presupposes metaphysics.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=1&a=1", label: "ST I, q.1, a.1 — Whether sacred doctrine is necessary beyond philosophy" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 282-289 — Creation and science" },
        ],
        questions: ["Does faith mean believing without evidence?", "Why can't science prove or disprove God?", "What is scientism and why is it self-refuting?"],
      },
      {
        title: "The Moral Argument",
        description: "Without God, is everything permitted? Objective morality, moral realism, and the atheist's dilemma.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=91&a=2", label: "ST I-II, q.91 — Natural law and eternal law" },
          { source: "scg", path: "/scg?book=3&chapter=37", label: "SCG III, c.37 — The ultimate end is not pleasure" },
        ],
        questions: ["Can atheists be moral?", "Can morality be objective without God?", "How does natural law answer the Euthyphro dilemma?"],
      },
      {
        title: "Suffering, Evil, and the Cross",
        description: "The atheist's strongest card — and why Christianity has the only satisfying answer.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=48&a=1", label: "ST I, q.48 — Evil as privation" },
          { source: "bible", path: "/bible?book=Job&chapter=38", label: "Job 38-42 — God answers Job" },
        ],
        questions: ["How is the problem of evil actually stronger as an argument FOR God?", "Why does atheism make suffering meaningless rather than solving it?", "What is the evidential vs. logical problem of evil?"],
      },
      {
        title: "Consciousness, Reason, and the Argument from Mind",
        description: "Why materialism can't explain consciousness, rationality, or the reliability of our own minds.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=75&a=2", label: "ST I, q.75 — The human soul is not a body" },
          { source: "scg", path: "/scg?book=2&chapter=49", label: "SCG II, c.49 — The intellectual substance is not a body" },
        ],
        questions: ["What is the 'argument from reason' (C.S. Lewis)?", "Why can't materialism account for intentionality?", "What is Aquinas's argument that the intellect is immaterial?"],
      },
      {
        title: "The Historical Argument: The Resurrection",
        description: "The minimal facts case for the Resurrection — even using only what secular scholars accept.",
        readings: [
          { source: "bible", path: "/bible?book=1 Corinthians&chapter=15", label: "1 Corinthians 15:1-8 — The earliest creed" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 638-658 — The Resurrection of Christ" },
        ],
        questions: ["What are the 'minimal facts' that virtually all scholars accept?", "Why do alternative theories (hallucination, stolen body) fail?", "Why is 1 Cor 15 dated so early?"],
      },
      {
        title: "The Meaning Question",
        description: "Nietzsche, Camus, and the absurdity of atheist meaning-making. Why only the infinite satisfies.",
        readings: [
          { source: "scg", path: "/scg?book=3&chapter=25", label: "SCG III, c.25 — Happiness is not in worldly goods" },
          { source: "spiritual-reading", path: "/spiritual-reading/confessions", label: "Confessions — 'Our hearts are restless until they rest in You'" },
        ],
        questions: ["What did Nietzsche mean by 'God is dead'?", "Why is Camus's 'revolt' ultimately incoherent?", "How does Aquinas argue that only God can satisfy the human desire for happiness?"],
      },
    ],
  },
  {
    id: "what-is-man",
    title: "What Is a Human Being?",
    subtitle: "Soul, body, intellect, and will",
    difficulty: "intermediate",
    duration: "5 days",
    topics: ["philosophy", "aquinas", "theology"],
    description: "Aquinas's philosophical anthropology — the soul-body composite, the powers of the soul, free will, and what makes us human.",
    lessons: [
      {
        title: "The Soul-Body Composite",
        description: "Hylomorphism — the soul as the form of the body, against both dualism and materialism.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=75&a=1", label: "ST I, q.75, a.1 — Whether the soul is a body" },
          { source: "summa", path: "/summa?part=I&q=76&a=1", label: "ST I, q.76, a.1 — Whether the intellectual soul is the form of the body" },
        ],
        questions: ["What is hylomorphism?", "How does Aquinas avoid both Platonic dualism and materialism?", "Why can't the soul be a body?"],
      },
      {
        title: "The Intellect",
        description: "How we know things — abstraction, the agent intellect, and why thinking proves the soul is immaterial.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=79&a=3", label: "ST I, q.79 — The agent intellect" },
          { source: "summa", path: "/summa?part=I&q=84&a=6", label: "ST I, q.84 — How the soul knows bodies through the intellect" },
        ],
        questions: ["What is abstraction?", "Why does universality prove immateriality?", "What is the difference between the agent and possible intellect?"],
      },
      {
        title: "The Will and Free Choice",
        description: "What the will is, how it relates to the intellect, and why we are genuinely free.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=82&a=1", label: "ST I, q.82 — The will" },
          { source: "summa", path: "/summa?part=I&q=83&a=1", label: "ST I, q.83 — Free will" },
        ],
        questions: ["How does the will relate to the intellect?", "Why does Aquinas say the will is a rational appetite?", "How does Aquinas answer determinism?"],
      },
      {
        title: "The Emotions (Passions)",
        description: "Aquinas's psychology of emotion — the 11 passions and how they relate to virtue.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=22&a=1", label: "ST I-II, q.22 — The passions of the soul" },
          { source: "summa", path: "/summa?part=I-II&q=23&a=4", label: "ST I-II, q.23, a.4 — The number of the passions" },
        ],
        questions: ["What are the 11 passions?", "Are emotions good or bad?", "How do the passions relate to virtue and vice?"],
      },
      {
        title: "The Immortality of the Soul",
        description: "Aquinas's proof that the soul survives death — and what that means for the resurrection of the body.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=75&a=6", label: "ST I, q.75, a.6 — Whether the human soul is incorruptible" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 362-368 — Body and soul" },
        ],
        questions: ["Why does Aquinas argue the soul is incorruptible?", "If the soul is immortal, why do we need bodily resurrection?", "How does this differ from Plato's arguments for immortality?"],
      },
    ],
  },
  {
    id: "church-fathers-tour",
    title: "Reading the Church Fathers",
    subtitle: "A guided tour through the Catena Aurea",
    difficulty: "intermediate",
    duration: "10 days",
    topics: ["church-fathers", "patristics", "scripture", "history"],
    description: "Meet the greatest theologians of the first millennium through Aquinas's own curated collection of their commentary on the Gospels.",
    lessons: [
      {
        title: "Who Are the Church Fathers?",
        description: "The criteria for being a Father, the major periods, and why they matter.",
        readings: [
          { source: "catena", path: "/catena?gospel=matthew&chapter=1", label: "Catena Aurea on Matthew 1 — See the Fathers in action" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 688 — The Fathers as witnesses" },
        ],
        questions: ["What are the four marks of a Church Father?", "What is the difference between Latin and Greek Fathers?", "Why did Aquinas compile the Catena Aurea?"],
      },
      {
        title: "Augustine: The Western Giant",
        description: "Augustine's conversion, his theology, and his massive influence on everything after him.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/confessions", label: "Confessions — Augustine's autobiography" },
          { source: "catena", path: "/catena?gospel=john&chapter=1", label: "Catena on John 1 — Augustine on the Word" },
        ],
        questions: ["What was Augustine's journey to the faith?", "What are Augustine's most important contributions to theology?", "Where do Augustine and Aquinas agree and disagree?"],
      },
      {
        title: "The Greek Fathers: Chrysostom, Basil, Gregory",
        description: "The Cappadocians and the golden-mouthed preacher — Eastern theology at its finest.",
        readings: [
          { source: "catena", path: "/catena?gospel=matthew&chapter=5", label: "Catena on Matthew 5 — Chrysostom on the Beatitudes" },
          { source: "catena", path: "/catena?gospel=john&chapter=14", label: "Catena on John 14 — The Greek Fathers on the Holy Spirit" },
        ],
        questions: ["Why is Chrysostom called 'golden-mouthed'?", "What did the Cappadocians contribute to Trinitarian theology?", "How does Eastern patristic theology differ in emphasis from Western?"],
      },
      {
        title: "Jerome and the Vulgate",
        description: "The greatest biblical scholar of the ancient Church and his monumental translation.",
        readings: [
          { source: "catena", path: "/catena?gospel=matthew&chapter=16", label: "Catena on Matthew 16 — Jerome on Peter's confession" },
          { source: "bible", path: "/bible?book=Psalms&chapter=1", label: "Psalms 1 — Jerome's translation in action" },
        ],
        questions: ["Why was the Vulgate so important?", "How did Jerome approach biblical translation?", "What was the controversy between Jerome and Augustine over Bible translation?"],
      },
      {
        title: "Athanasius and the Arian Crisis",
        description: "The man who saved Christianity — Athanasius contra mundum.",
        readings: [
          { source: "catena", path: "/catena?gospel=john&chapter=1", label: "Catena on John 1 — The divinity of Christ" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 242-248 — The Trinity" },
        ],
        questions: ["What did Arius teach?", "Why was Nicaea necessary?", "What does 'consubstantial' (homoousios) mean and why did it matter?"],
      },
      {
        title: "The Fathers on Baptism and Eucharist",
        description: "What the earliest Christians believed about the sacraments — in their own words.",
        readings: [
          { source: "catena", path: "/catena?gospel=matthew&chapter=26", label: "Catena on Matthew 26 — The Last Supper" },
          { source: "catena", path: "/catena?gospel=matthew&chapter=28", label: "Catena on Matthew 28 — Baptismal commission" },
        ],
        questions: ["Did the early Church believe in the Real Presence?", "How did the Fathers understand baptismal regeneration?", "Why is patristic testimony important for apologetics?"],
      },
      {
        title: "The Fathers on Peter and the Church",
        description: "What the first centuries said about papal authority — the texts Protestants don't want you to read.",
        readings: [
          { source: "catena", path: "/catena?gospel=matthew&chapter=16", label: "Catena on Matthew 16 — Peter the Rock" },
          { source: "catena", path: "/catena?gospel=john&chapter=21", label: "Catena on John 21 — Feed my sheep" },
        ],
        questions: ["What did the Fathers say about Peter's primacy?", "How early is the evidence for papal authority?", "What about Fathers who seem to disagree?"],
      },
      {
        title: "The Fathers on Mary",
        description: "The New Eve, the Theotokos, and the earliest Marian devotion.",
        readings: [
          { source: "catena", path: "/catena?gospel=luke&chapter=1", label: "Catena on Luke 1 — The Annunciation" },
          { source: "catena", path: "/catena?gospel=john&chapter=2", label: "Catena on John 2 — The Wedding at Cana" },
        ],
        questions: ["When did Christians first call Mary 'Theotokos'?", "What is the Eve-Mary parallel in the Fathers?", "How do the Fathers interpret 'full of grace'?"],
      },
      {
        title: "The Fathers on Salvation and Grace",
        description: "Were the Fathers 'Catholic' or 'Protestant'? The grace-works question in the first centuries.",
        readings: [
          { source: "catena", path: "/catena?gospel=matthew&chapter=25", label: "Catena on Matthew 25 — The Last Judgment" },
          { source: "spiritual-reading", path: "/spiritual-reading/on-the-spirit-and-letter", label: "Augustine, On the Spirit and the Letter" },
        ],
        questions: ["Did the early Church teach 'faith alone'?", "How did the Pelagian controversy shape Western theology?", "What did the Fathers mean by 'divinization' (theosis)?"],
      },
      {
        title: "Why the Fathers Still Matter",
        description: "How to use patristic testimony in apologetics and personal study.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/dei-verbum", label: "Dei Verbum — The role of the Fathers" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 78-83 — Apostolic Tradition" },
        ],
        questions: ["Why do the Fathers have authority?", "How do you respond to 'the Fathers disagree with each other'?", "What's the best way to start reading the Fathers on your own?"],
      },
    ],
  },
  {
    id: "gospel-john-deep-dive",
    title: "The Gospel of John Deep Dive",
    subtitle: "Bible + Church Fathers side by side",
    difficulty: "intermediate",
    duration: "14 days",
    topics: ["scripture", "church-fathers", "theology", "aquinas"],
    description: "Read the most theological Gospel alongside the Church Fathers' commentary from the Catena Aurea.",
    lessons: [
      {
        title: "The Prologue (John 1:1-18)",
        description: "In the beginning was the Word — the most important 18 verses in the Bible.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=1", label: "John 1:1-18" },
          { source: "catena", path: "/catena?gospel=john&chapter=1", label: "Catena Aurea on John 1" },
        ],
        questions: ["Why does John echo Genesis 1:1?", "What does 'Logos' mean and why did John choose this word?", "What do the Fathers say about 'the Word was God'?"],
      },
      {
        title: "The Wedding at Cana and the Temple (John 2)",
        description: "The first sign and the cleansing — what they reveal about who Jesus is.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=2", label: "John 2" },
          { source: "catena", path: "/catena?gospel=john&chapter=2", label: "Catena Aurea on John 2" },
        ],
        questions: ["Why is this the 'first sign'?", "What role does Mary play?", "What does the temple cleansing reveal about Jesus's authority?"],
      },
      {
        title: "Nicodemus and the Samaritan Woman (John 3-4)",
        description: "Born again, living water — two conversion stories, two different approaches.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=3", label: "John 3-4" },
          { source: "catena", path: "/catena?gospel=john&chapter=3", label: "Catena Aurea on John 3" },
        ],
        questions: ["What does 'born of water and Spirit' mean?", "Why does Jesus reveal Himself to a Samaritan woman?", "How does John 3:16 fit in context?"],
      },
      {
        title: "The Bread of Life (John 6)",
        description: "The most Eucharistic chapter in Scripture.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=6", label: "John 6" },
          { source: "catena", path: "/catena?gospel=john&chapter=6", label: "Catena Aurea on John 6" },
        ],
        questions: ["At what point does Jesus shift from metaphor to literal?", "Why do the Fathers unanimously read this as Eucharistic?", "What does the disciples' departure tell us?"],
      },
      {
        title: "The I AM Statements (John 8-11)",
        description: "Light of the World, Good Shepherd, Resurrection and Life — and the absolute I AM.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=8", label: "John 8:48-59 — Before Abraham was, I AM" },
          { source: "catena", path: "/catena?gospel=john&chapter=10", label: "Catena Aurea on John 10 — The Good Shepherd" },
        ],
        questions: ["Why did the Jews try to stone Jesus after 'I AM'?", "How does the Good Shepherd discourse relate to the Church?", "What does the raising of Lazarus prefigure?"],
      },
      {
        title: "The Farewell Discourse (John 13-17)",
        description: "The Last Supper, the new commandment, the promise of the Spirit, and the High Priestly Prayer.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=14", label: "John 14-17" },
          { source: "catena", path: "/catena?gospel=john&chapter=17", label: "Catena Aurea on John 17 — The High Priestly Prayer" },
        ],
        questions: ["What does 'I am the way, the truth, and the life' mean in context?", "How does John 17 relate to Church unity?", "What does 'another Advocate' reveal about the Trinity?"],
      },
      {
        title: "The Passion (John 18-19)",
        description: "John's unique perspective on the trial, the Cross, and the blood and water.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=19", label: "John 18-19" },
          { source: "catena", path: "/catena?gospel=john&chapter=19", label: "Catena Aurea on John 19" },
        ],
        questions: ["Why does John emphasize 'blood and water'?", "What do the Fathers see in the seamless garment?", "How does John's Passion narrative differ from the Synoptics?"],
      },
    ],
  },
  {
    id: "aquinas-moral-theory",
    title: "Aquinas's Moral Theory",
    subtitle: "The treatise on human acts",
    difficulty: "intermediate",
    duration: "10 days",
    topics: ["moral-theology", "aquinas", "philosophy", "natural-law"],
    description: "The complete Thomistic ethics — happiness, human acts, habits, virtues, vices, law, and grace.",
    lessons: [
      {
        title: "The Ultimate End: Happiness",
        description: "What happiness is and where it can be found — not in wealth, pleasure, honor, or power.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=1&a=1", label: "ST I-II, q.1 — The last end of human life" },
          { source: "summa", path: "/summa?part=I-II&q=2&a=8", label: "ST I-II, q.2, a.8 — Happiness is in no created good" },
        ],
        questions: ["Why does Aquinas say every human act is ordered to an end?", "Why can't happiness be in any finite good?", "What is beatific vision?"],
      },
      {
        title: "Human Acts and Voluntariness",
        description: "What makes an act voluntary, the role of intention, and when ignorance excuses.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=6&a=1", label: "ST I-II, q.6 — The voluntary and involuntary" },
          { source: "summa", path: "/summa?part=I-II&q=12&a=1", label: "ST I-II, q.12 — Intention" },
        ],
        questions: ["What makes an act 'human' vs merely 'an act of a human'?", "When does ignorance excuse?", "What are the three fonts of morality?"],
      },
      {
        title: "The Passions",
        description: "Aquinas's sophisticated psychology — the 11 passions and their moral significance.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=22&a=1", label: "ST I-II, q.22-25 — The passions in general" },
          { source: "summa", path: "/summa?part=I-II&q=27&a=1", label: "ST I-II, q.27 — The cause of love" },
        ],
        questions: ["Are passions good or bad?", "What is the concupiscible vs. irascible appetite?", "How does love undergird all other passions?"],
      },
      {
        title: "Habits and Virtues",
        description: "What habits are, how they form, and the framework of cardinal and theological virtues.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=49&a=1", label: "ST I-II, q.49-54 — Habits in general" },
          { source: "summa", path: "/summa?part=I-II&q=61&a=2", label: "ST I-II, q.61, a.2 — The four cardinal virtues" },
        ],
        questions: ["What is a habit?", "How do virtues differ from skills?", "Why are there exactly four cardinal virtues?"],
      },
      {
        title: "Vice and Sin",
        description: "The nature of sin, the distinction between mortal and venial, and the capital vices.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=71&a=1", label: "ST I-II, q.71-74 — Vice and sin" },
          { source: "summa", path: "/summa?part=I-II&q=84&a=4", label: "ST I-II, q.84, a.4 — The seven capital vices" },
        ],
        questions: ["What makes a sin mortal vs. venial?", "What are the seven capital vices?", "Why is pride the root of all sin?"],
      },
      {
        title: "Law: Eternal, Natural, Human, Divine",
        description: "The four types of law and how they relate to each other.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=90&a=4", label: "ST I-II, q.90 — The essence of law" },
          { source: "summa", path: "/summa?part=I-II&q=91&a=1", label: "ST I-II, q.91 — The types of law" },
        ],
        questions: ["What is eternal law?", "How does human law derive from natural law?", "When is a human law unjust?"],
      },
      {
        title: "Grace",
        description: "Why we can't be good on our own — the necessity and nature of grace.",
        readings: [
          { source: "summa", path: "/summa?part=I-II&q=109&a=2", label: "ST I-II, q.109 — The necessity of grace" },
          { source: "summa", path: "/summa?part=I-II&q=110&a=1", label: "ST I-II, q.110 — The essence of grace" },
        ],
        questions: ["Why can't we be naturally virtuous enough?", "What is the difference between actual and habitual grace?", "How does grace perfect nature?"],
      },
      {
        title: "Prudence: The Master Virtue",
        description: "Why prudence is the charioteer of all virtues and what it actually involves.",
        readings: [
          { source: "summa", path: "/summa?part=II-II&q=47&a=1", label: "ST II-II, q.47 — Prudence in itself" },
          { source: "summa", path: "/summa?part=II-II&q=49&a=1", label: "ST II-II, q.49 — The parts of prudence" },
        ],
        questions: ["Why is prudence the first cardinal virtue?", "What are the eight integral parts of prudence?", "How does prudence differ from mere cleverness?"],
      },
      {
        title: "Justice",
        description: "Rendering to each what is due — the virtue that orders us to others.",
        readings: [
          { source: "summa", path: "/summa?part=II-II&q=58&a=1", label: "ST II-II, q.58 — Justice" },
          { source: "summa", path: "/summa?part=II-II&q=61&a=1", label: "ST II-II, q.61 — Commutative and distributive justice" },
        ],
        questions: ["What is justice?", "What are commutative and distributive justice?", "What are the vices opposed to justice?"],
      },
      {
        title: "Fortitude and Temperance",
        description: "The virtues that govern the passions — courage in the face of danger, moderation in the face of pleasure.",
        readings: [
          { source: "summa", path: "/summa?part=II-II&q=123&a=1", label: "ST II-II, q.123 — Fortitude" },
          { source: "summa", path: "/summa?part=II-II&q=141&a=1", label: "ST II-II, q.141 — Temperance" },
        ],
        questions: ["Why is martyrdom the supreme act of fortitude?", "What is the relationship between temperance and pleasure?", "How do fortitude and temperance serve prudence and justice?"],
      },
    ],
  },
  {
    id: "vatican-ii",
    title: "What Vatican II Actually Said",
    subtitle: "The four constitutions",
    difficulty: "intermediate",
    duration: "7 days",
    topics: ["theology", "history", "papal"],
    description: "Read the actual documents — not what people say they said. The four constitutions of Vatican II in context.",
    lessons: [
      {
        title: "Context: Why Was Vatican II Called?",
        description: "The state of the Church in 1962, John XXIII's vision, and what 'aggiornamento' actually means.",
        readings: [
          { source: "ccc", path: "/ccc?part=1", label: "CCC 1-3 — The purpose of the Catechism (fruit of Vatican II)" },
          { source: "spiritual-reading", path: "/spiritual-reading/sacrosanctum-concilium", label: "Sacrosanctum Concilium — The first document" },
        ],
        questions: ["What did John XXIII hope Vatican II would accomplish?", "What does 'pastoral council' mean vs. 'dogmatic'?", "Did Vatican II change any doctrine?"],
      },
      {
        title: "Lumen Gentium: The Church",
        description: "The Dogmatic Constitution on the Church — the People of God, the hierarchy, and the universal call to holiness.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/lumen-gentium", label: "Lumen Gentium — Full text" },
          { source: "spiritual-reading", path: "/spiritual-reading/mystici-corporis", label: "Mystici Corporis — Compare with Pius XII" },
        ],
        questions: ["What does 'subsists in' mean and why does it matter?", "What is the universal call to holiness?", "How does LG relate to Mystici Corporis?"],
      },
      {
        title: "Dei Verbum: Divine Revelation",
        description: "Scripture, Tradition, and the Magisterium — how God reveals Himself to us.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/dei-verbum", label: "Dei Verbum — Full text" },
          { source: "spiritual-reading", path: "/spiritual-reading/providentissimus-deus", label: "Providentissimus Deus — Compare with Leo XIII" },
        ],
        questions: ["How does DV describe the relationship between Scripture and Tradition?", "What does DV say about biblical inerrancy?", "How should Catholics approach biblical scholarship?"],
      },
      {
        title: "Sacrosanctum Concilium: The Sacred Liturgy",
        description: "What Vatican II actually said about the Mass — vs. what actually happened after.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/sacrosanctum-concilium", label: "Sacrosanctum Concilium — Full text" },
        ],
        questions: ["Did SC abolish Latin in the liturgy?", "What does 'active participation' actually mean?", "What does SC say about Gregorian chant and sacred music?"],
      },
      {
        title: "Gaudium et Spes: The Church in the Modern World",
        description: "Human dignity, marriage, culture, economics, and the Christian response to modernity.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/gaudium-et-spes", label: "Gaudium et Spes — Full text" },
          { source: "spiritual-reading", path: "/spiritual-reading/redemptor-hominis", label: "Redemptor Hominis — John Paul II's response" },
        ],
        questions: ["What does GS say about human dignity?", "How does GS approach marriage and family?", "What is the relationship between GS and Catholic social teaching?"],
      },
      {
        title: "The 'Spirit of Vatican II' vs. the Letter",
        description: "How the Council was interpreted, misinterpreted, and the ongoing debate about its legacy.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/deus-caritas-est", label: "Deus Caritas Est — Benedict XVI's hermeneutic of continuity in action" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 8-10 — The Catechism as authentic interpretation" },
        ],
        questions: ["What is the 'hermeneutic of continuity' vs. 'rupture'?", "What changes were actually mandated by the Council?", "How should a faithful Catholic read Vatican II?"],
      },
      {
        title: "Vatican II and Apologetics",
        description: "Using the Council documents to answer both traditionalist and progressive objections.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/lumen-gentium", label: "Lumen Gentium Ch. 3 — The hierarchy" },
          { source: "spiritual-reading", path: "/spiritual-reading/dei-verbum", label: "Dei Verbum Ch. 2 — Transmission of revelation" },
        ],
        questions: ["How do you answer someone who says Vatican II contradicted earlier teaching?", "How do you answer someone who says Vatican II didn't go far enough?", "What is the proper weight of a pastoral council?"],
      },
    ],
  },
  {
    id: "trinity",
    title: "The Holy Trinity",
    subtitle: "One God, three Persons",
    difficulty: "intermediate",
    duration: "7 days",
    topics: ["theology", "aquinas", "apologetics", "church-fathers"],
    description: "The central mystery of the Christian faith — what Aquinas teaches, what Scripture reveals, and how the Church Fathers defended it.",
    lessons: [
      {
        title: "The Biblical Foundation",
        description: "The Trinity in Scripture — not just Matthew 28:19 but the whole sweep of revelation.",
        readings: [
          { source: "bible", path: "/bible?book=John&chapter=1", label: "John 1:1-18 — The Word was God" },
          { source: "bible", path: "/bible?book=Matthew&chapter=28", label: "Matthew 28:19 — The Trinitarian formula" },
        ],
        questions: ["Where does the OT hint at plurality in God?", "How does John's prologue reveal the Trinity?", "What NT passages most clearly teach the Trinity?"],
      },
      {
        title: "The Councils: Nicaea to Constantinople",
        description: "How the Church defined Trinitarian doctrine against Arianism.",
        readings: [
          { source: "ccc", path: "/ccc?part=1", label: "CCC 242-260 — The Holy Trinity" },
          { source: "summa", path: "/summa?part=I&q=27&a=1", label: "ST I, q.27 — The procession of the divine persons" },
        ],
        questions: ["What did Arius teach?", "What does 'consubstantial' mean?", "Why was the Filioque controversial?"],
      },
      {
        title: "Aquinas on the Divine Processions",
        description: "Generation and spiration — how the Son proceeds from the Father and the Spirit from both.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=27&a=1", label: "ST I, q.27 — Procession" },
          { source: "summa", path: "/summa?part=I&q=28&a=1", label: "ST I, q.28 — The divine relations" },
        ],
        questions: ["What are the two divine processions?", "How does intellectual generation differ from creation?", "What are the divine relations?"],
      },
      {
        title: "The Three Persons",
        description: "Father, Son, and Holy Spirit — their distinct properties and their unity.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=29&a=4", label: "ST I, q.29, a.4 — The meaning of 'person'" },
          { source: "summa", path: "/summa?part=I&q=33&a=1", label: "ST I, q.33-36 — The three Persons" },
        ],
        questions: ["What does 'person' mean in Trinitarian theology?", "What are the personal properties?", "How is the Holy Spirit both Love and Gift?"],
      },
      {
        title: "Augustine's Psychological Analogy",
        description: "Memory, understanding, will — the Trinity reflected in the human mind.",
        readings: [
          { source: "spiritual-reading", path: "/spiritual-reading/on-the-trinity", label: "De Trinitate — Augustine's psychological analogy" },
          { source: "summa", path: "/summa?part=I&q=93&a=5", label: "ST I, q.93 — The image of God in man" },
        ],
        questions: ["How does the mind reflect the Trinity?", "What are the limits of this analogy?", "Why does Aquinas prefer the psychological model?"],
      },
      {
        title: "Answering Anti-Trinitarian Objections",
        description: "Jehovah's Witnesses, Muslims, Oneness Pentecostals — everyone who denies the Trinity.",
        readings: [
          { source: "scg", path: "/scg?book=4&chapter=2", label: "SCG IV, c.2-14 — Aquinas defends the Trinity" },
          { source: "ccc", path: "/ccc?part=1", label: "CCC 253-256 — Trinitarian dogma" },
        ],
        questions: ["How do you answer 'the Trinity is pagan'?", "How do you answer 'Jesus never claimed to be God'?", "How do you answer 'three persons = three Gods'?"],
      },
      {
        title: "Living the Trinity",
        description: "The Trinity is not just abstract theology — it's the pattern of all love, community, and the spiritual life.",
        readings: [
          { source: "summa", path: "/summa?part=I&q=43&a=1", label: "ST I, q.43 — The mission of the divine persons" },
          { source: "spiritual-reading", path: "/spiritual-reading/deus-caritas-est", label: "Deus Caritas Est — God is love" },
        ],
        questions: ["How does the Trinity relate to prayer?", "Why does the Church baptize in the Trinitarian name?", "How is human love an image of Trinitarian love?"],
      },
    ],
  },
  // ===== ADVANCED =====
  {
    id: "summa-reading-plan",
    title: "Reading the Summa Theologica",
    subtitle: "A structured 30-day reading plan",
    difficulty: "advanced",
    duration: "30 days",
    topics: ["aquinas", "philosophy", "theology"],
    description: "A curated path through the Summa's greatest hits — not all 611 questions, but the essential ones every serious student should know.",
    lessons: [
      { title: "Day 1-2: Sacred Doctrine (I, qq.1)", description: "Is theology a science? What is its method?", readings: [{ source: "summa", path: "/summa?part=I&q=1&a=1", label: "ST I, q.1" }], questions: ["Why is sacred doctrine necessary?", "How is theology a science?"] },
      { title: "Day 3-5: God's Existence and Nature (I, qq.2-11)", description: "The Five Ways, divine simplicity, perfection, goodness, infinity, immutability.", readings: [{ source: "summa", path: "/summa?part=I&q=2&a=3", label: "ST I, qq.2-11" }], questions: ["Why is simplicity the most fundamental divine attribute?", "What does it mean that God is His own existence?"] },
      { title: "Day 6-7: Knowledge, Will, Providence (I, qq.14-22)", description: "God knows all, wills all good, and governs all.", readings: [{ source: "summa", path: "/summa?part=I&q=14&a=1", label: "ST I, qq.14-22" }], questions: ["How does God know future contingents?", "What is the difference between antecedent and consequent will?"] },
      { title: "Day 8-9: The Trinity (I, qq.27-43)", description: "Processions, relations, persons, missions.", readings: [{ source: "summa", path: "/summa?part=I&q=27&a=1", label: "ST I, qq.27-43" }], questions: ["What are subsistent relations?", "How do the missions relate to the processions?"] },
      { title: "Day 10-11: Creation and Angels (I, qq.44-64)", description: "Why anything exists, the nature of angels, and the fall.", readings: [{ source: "summa", path: "/summa?part=I&q=44&a=1", label: "ST I, qq.44-64" }], questions: ["Why did God create?", "What is the nature of angelic knowledge?"] },
      { title: "Day 12-13: Human Nature (I, qq.75-89)", description: "The soul, intellect, will, and how we know.", readings: [{ source: "summa", path: "/summa?part=I&q=75&a=1", label: "ST I, qq.75-89" }], questions: ["Why is the soul the form of the body?", "How do we abstract universals?"] },
      { title: "Day 14-15: The Last End and Human Acts (I-II, qq.1-21)", description: "Happiness, voluntariness, intention, circumstances.", readings: [{ source: "summa", path: "/summa?part=I-II&q=1&a=1", label: "ST I-II, qq.1-21" }], questions: ["Can there be more than one last end?", "What are the three fonts of morality?"] },
      { title: "Day 16-17: The Passions (I-II, qq.22-48)", description: "Love, hatred, desire, joy, sorrow, fear, anger.", readings: [{ source: "summa", path: "/summa?part=I-II&q=22&a=1", label: "ST I-II, qq.22-48" }], questions: ["Why is love the first passion?", "Are passions subject to moral evaluation?"] },
      { title: "Day 18-19: Habits and Virtues (I-II, qq.49-70)", description: "What habits are, the cardinal virtues, theological virtues.", readings: [{ source: "summa", path: "/summa?part=I-II&q=49&a=1", label: "ST I-II, qq.49-70" }], questions: ["How do habits differ from powers?", "What is the mean of virtue?"] },
      { title: "Day 20-21: Sin and Vice (I-II, qq.71-89)", description: "Original sin, mortal and venial sin, the capital vices.", readings: [{ source: "summa", path: "/summa?part=I-II&q=71&a=1", label: "ST I-II, qq.71-89" }], questions: ["What is original sin?", "Why is pride the root of all sin?"] },
      { title: "Day 22-24: Law (I-II, qq.90-108)", description: "Eternal, natural, human, divine, the Old and New Law.", readings: [{ source: "summa", path: "/summa?part=I-II&q=90&a=1", label: "ST I-II, qq.90-108" }], questions: ["Why is law an ordinance of reason?", "How is the New Law the law of grace?"] },
      { title: "Day 25-26: Grace (I-II, qq.109-114)", description: "The necessity and nature of grace, justification, merit.", readings: [{ source: "summa", path: "/summa?part=I-II&q=109&a=1", label: "ST I-II, qq.109-114" }], questions: ["Why can't we merit the first grace?", "How does Aquinas understand justification?"] },
      { title: "Day 27-28: Faith, Hope, Charity (II-II, qq.1-46)", description: "The three theological virtues in depth.", readings: [{ source: "summa", path: "/summa?part=II-II&q=1&a=1", label: "ST II-II, qq.1-46" }], questions: ["Is faith an act of the intellect or will?", "Why is charity the form of all virtues?"] },
      { title: "Day 29-30: The Incarnation and Sacraments (III, qq.1-90)", description: "Why God became man, the hypostatic union, and the sacraments.", readings: [{ source: "summa", path: "/summa?part=III&q=1&a=1", label: "ST III, qq.1-90" }], questions: ["Was the Incarnation necessary?", "What is the hypostatic union?", "How do sacraments cause grace?"] },
    ],
  },
  {
    id: "thomistic-philosophy-intro",
    title: "Introduction to Thomistic Philosophy",
    subtitle: "A 4-week course",
    difficulty: "advanced",
    duration: "28 days",
    topics: ["philosophy", "aquinas"],
    description: "A university-level introduction to the philosophical foundations of Aquinas's thought — metaphysics, epistemology, natural theology, and ethics.",
    lessons: [
      { title: "Week 1, Day 1: What Is Philosophy?", description: "The love of wisdom, the parts of philosophy, and why Aristotle is 'The Philosopher.'", readings: [{ source: "summa", path: "/summa?part=I&q=1&a=1", label: "ST I, q.1 — Sacred doctrine and philosophy" }], questions: ["How does philosophy relate to theology?", "What are the main branches of philosophy?"] },
      { title: "Week 1, Day 2-3: Act and Potency", description: "The most fundamental distinction in Thomistic metaphysics.", readings: [{ source: "scg", path: "/scg?book=1&chapter=16", label: "SCG I, c.16 — No passive potency in God" }], questions: ["What is the act-potency distinction?", "Why is it impossible for something to be in act and potency in the same respect?"] },
      { title: "Week 1, Day 4-5: Hylomorphism", description: "Matter and form — how things are composed and what makes them what they are.", readings: [{ source: "summa", path: "/summa?part=I&q=76&a=1", label: "ST I, q.76 — Form and matter" }], questions: ["What is substantial form?", "What is prime matter?"] },
      { title: "Week 1, Day 6-7: The Four Causes", description: "Material, formal, efficient, final — why modern science only uses two.", readings: [{ source: "scg", path: "/scg?book=3&chapter=2", label: "SCG III, c.2 — Every agent acts for an end" }], questions: ["What are the four causes?", "Why did modern science abandon formal and final causes?", "Can we recover them?"] },
      { title: "Week 2, Day 1-2: Essence and Existence", description: "The real distinction — the key to understanding everything in Aquinas.", readings: [{ source: "summa", path: "/summa?part=I&q=3&a=4", label: "ST I, q.3, a.4 — In God essence and existence are identical" }], questions: ["What is the real distinction between essence and existence?", "Why is this Aquinas's most original contribution?"] },
      { title: "Week 2, Day 3-4: The Transcendentals", description: "Being, unity, truth, goodness, beauty — properties of everything that exists.", readings: [{ source: "summa", path: "/summa?part=I&q=16&a=1", label: "ST I, q.16 — Truth" }], questions: ["What are the transcendentals?", "How is every being true, good, and beautiful?"] },
      { title: "Week 2, Day 5-7: Epistemology", description: "How we know — sensation, abstraction, judgment, and the reliability of reason.", readings: [{ source: "summa", path: "/summa?part=I&q=84&a=6", label: "ST I, q.84 — How the soul knows through the intellect" }], questions: ["What is abstraction?", "How does Thomistic epistemology differ from both empiricism and rationalism?"] },
      { title: "Week 3, Day 1-3: Natural Theology", description: "What reason alone can know about God — the Five Ways and divine attributes.", readings: [{ source: "summa", path: "/summa?part=I&q=2&a=3", label: "ST I, q.2, a.3 — The Five Ways" }], questions: ["What can reason prove about God?", "What can only be known by revelation?"] },
      { title: "Week 3, Day 4-5: The Problem of Universals", description: "Realism vs. nominalism — why this 'abstract' debate has enormous consequences.", readings: [{ source: "summa", path: "/summa?part=I&q=85&a=1", label: "ST I, q.85 — The mode of intellectual knowledge" }], questions: ["What are universals?", "Why does nominalism lead to voluntarism?", "How does moderate realism solve the problem?"] },
      { title: "Week 3, Day 6-7: Philosophy of Nature", description: "Change, substance, accidents, and the structure of physical reality.", readings: [{ source: "summa", path: "/summa?part=I&q=45&a=1", label: "ST I, q.45 — Creation" }], questions: ["What is the difference between substantial and accidental change?", "How do the categories apply to physical things?"] },
      { title: "Week 4, Day 1-3: Ethics", description: "The good, happiness, virtue, natural law — the foundations of Thomistic ethics.", readings: [{ source: "summa", path: "/summa?part=I-II&q=94&a=2", label: "ST I-II, q.94, a.2 — Natural law" }], questions: ["How does Aquinas ground ethics in metaphysics?", "What makes natural law theory superior to deontology and consequentialism?"] },
      { title: "Week 4, Day 4-5: Political Philosophy", description: "The common good, justice, legitimate authority, and the limits of government.", readings: [{ source: "summa", path: "/summa?part=I-II&q=95&a=2", label: "ST I-II, q.95 — Human law" }], questions: ["What makes a law just?", "What is the common good?", "When can one disobey an unjust law?"] },
      { title: "Week 4, Day 6-7: Philosophy vs. Modern Errors", description: "How Thomistic philosophy answers Descartes, Hume, Kant, and the whole modern project.", readings: [{ source: "scg", path: "/scg?book=1&chapter=7", label: "SCG I, c.7 — Truth does not contradict truth" }], questions: ["How does Descartes's method differ from Aquinas's?", "What would Aquinas say to Hume's fork?", "Why is Kant's critique based on a misunderstanding of Thomistic epistemology?"] },
    ],
  },
  {
    id: "great-books-90",
    title: "Great Books of Western Civilization",
    subtitle: "A 90-day journey through the canon",
    difficulty: "advanced",
    duration: "90 days",
    topics: ["philosophy", "theology", "classics", "literature", "history"],
    description: "A curated path through the greatest works available on Veritas — from Homer to Vatican II, philosophy to literature to theology.",
    lessons: [
      { title: "Week 1-2: The Greeks — Homer to Aristotle", description: "The Iliad, the Republic, the Nicomachean Ethics, and the Greek dramatic tradition.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/the-republic", label: "Plato, The Republic" }, { source: "spiritual-reading", path: "/spiritual-reading/nicomachean-ethics", label: "Aristotle, Nicomachean Ethics" }], questions: ["What is Plato's theory of Forms?", "How does Aristotle's ethics differ from Plato's?"] },
      { title: "Week 3-4: The Roman World", description: "Virgil's Aeneid, Cicero, and the bridge between Athens and Jerusalem.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/aeneid", label: "Virgil, The Aeneid" }], questions: ["How does Virgil transform Homer?", "What is the Roman contribution to natural law?"] },
      { title: "Week 5-6: The Church Fathers", description: "Augustine's Confessions, City of God, and the patristic synthesis.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/confessions", label: "Augustine, Confessions" }, { source: "spiritual-reading", path: "/spiritual-reading/city-of-god", label: "Augustine, City of God" }], questions: ["How did Christianity transform classical philosophy?", "What is Augustine's philosophy of history?"] },
      { title: "Week 7-8: The Medieval Synthesis", description: "Boethius, Anselm, and the beginning of Scholasticism.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/consolation-of-philosophy", label: "Boethius, Consolation of Philosophy" }], questions: ["How does Boethius reconcile providence and free will?", "What is the ontological argument?"] },
      { title: "Week 9-10: Aquinas", description: "Selected questions from the Summa — the summit of medieval philosophy.", readings: [{ source: "summa", path: "/summa?part=I&q=2&a=3", label: "ST I, qq.1-13 (selections)" }, { source: "scg", path: "/scg?book=1&chapter=1", label: "SCG I (selections)" }], questions: ["How does Aquinas synthesize Aristotle and Christianity?", "What is Aquinas's most original contribution?"] },
      { title: "Week 11-12: Dante and the Medieval Imagination", description: "The Divine Comedy as theological poetry.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/divine-comedy", label: "Dante, Divine Comedy" }], questions: ["How does Dante use Aquinas's theology?", "What is the structure of the Comedy?"] },
      { title: "Week 13: The Reformation", description: "Luther's Freedom of a Christian and the Catholic response.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/freedom-of-christian", label: "Luther, Freedom of a Christian" }], questions: ["What are Luther's core claims?", "Where does he depart from Catholic teaching?"] },
    ],
  },
  // ===== MORE INTERMEDIATE COURSES =====
  {
    id: "sacraments-deep",
    title: "The Seven Sacraments",
    subtitle: "Aquinas's sacramental theology",
    difficulty: "intermediate",
    duration: "7 days",
    topics: ["sacraments", "theology", "aquinas"],
    description: "Each sacrament explored through Aquinas's Summa — what they are, how they work, why seven.",
    lessons: [
      { title: "What Is a Sacrament?", description: "Sign, cause, institution — the metaphysics of sacramental reality.", readings: [{ source: "summa", path: "/summa?part=III&q=60&a=1", label: "ST III, q.60 — The nature of sacraments" }], questions: ["What is the matter and form of a sacrament?", "How do sacraments cause grace?"] },
      { title: "Baptism", description: "The door of the sacraments — regeneration, character, original sin.", readings: [{ source: "summa", path: "/summa?part=III&q=66&a=1", label: "ST III, q.66 — Baptism" }, { source: "bible", path: "/bible?book=Romans&chapter=6", label: "Romans 6 — Buried with Christ in baptism" }], questions: ["What happens in baptism?", "Can infants be validly baptized?"] },
      { title: "Confirmation", description: "The strengthening of the Spirit — the sacrament of spiritual maturity.", readings: [{ source: "summa", path: "/summa?part=III&q=72&a=1", label: "ST III, q.72 — Confirmation" }], questions: ["How does Confirmation relate to Baptism?", "What is the sacramental character?"] },
      { title: "The Eucharist", description: "The source and summit — Real Presence, transubstantiation, sacrifice.", readings: [{ source: "summa", path: "/summa?part=III&q=73&a=1", label: "ST III, q.73-83 — The Eucharist" }], questions: ["Why is the Eucharist the greatest sacrament?", "How does transubstantiation work metaphysically?"] },
      { title: "Penance and Anointing", description: "The sacraments of healing — confession, contrition, satisfaction, and anointing of the sick.", readings: [{ source: "summa", path: "/summa?part=III&q=84&a=1", label: "ST III (Supplement), q.84 — Penance" }], questions: ["What are the three acts of the penitent?", "What is perfect vs. imperfect contrition?"] },
      { title: "Holy Orders", description: "The priesthood — sacramental character, the power of orders, in persona Christi.", readings: [{ source: "ccc", path: "/ccc?part=2", label: "CCC 1536-1600 — Holy Orders" }], questions: ["What does 'in persona Christi' mean?", "Why can only men be ordained?"] },
      { title: "Matrimony", description: "Marriage as sacrament — its nature, properties, and supernatural dimension.", readings: [{ source: "ccc", path: "/ccc?part=2", label: "CCC 1601-1666 — Matrimony" }, { source: "bible", path: "/bible?book=Ephesians&chapter=5", label: "Ephesians 5 — Marriage and the Church" }], questions: ["Why is marriage indissoluble?", "How is marriage a sign of Christ and the Church?"] },
    ],
  },
  {
    id: "marian-theology",
    title: "Mary in Catholic Theology",
    subtitle: "The four Marian dogmas and beyond",
    difficulty: "intermediate",
    duration: "5 days",
    topics: ["marian", "theology", "apologetics", "scripture"],
    description: "The biblical, patristic, and theological case for Catholic Marian doctrine.",
    lessons: [
      { title: "Mary in Scripture", description: "The New Eve, the Ark, the Woman of Revelation — Mary throughout the Bible.", readings: [{ source: "bible", path: "/bible?book=Luke&chapter=1", label: "Luke 1 — The Annunciation and Magnificat" }, { source: "bible", path: "/bible?book=Revelation&chapter=12", label: "Revelation 12 — The Woman clothed with the sun" }], questions: ["How is Mary the New Eve?", "What does 'full of grace' mean in Greek?"] },
      { title: "The Immaculate Conception", description: "Preserved from original sin — what it means and why.", readings: [{ source: "ccc", path: "/ccc?part=1", label: "CCC 490-493 — The Immaculate Conception" }, { source: "summa", path: "/summa?part=III&q=27&a=2", label: "ST III, q.27, a.2 — Mary's sanctification" }], questions: ["Did Aquinas accept the Immaculate Conception?", "How does the IC relate to the Redemption?"] },
      { title: "The Perpetual Virginity", description: "Before, during, and after birth — and what about Jesus's 'brothers'?", readings: [{ source: "bible", path: "/bible?book=Matthew&chapter=1", label: "Matthew 1:25 — The 'until' question" }, { source: "catena", path: "/catena?gospel=matthew&chapter=1", label: "Catena on Matthew 1 — The Fathers on virginity" }], questions: ["What does 'adelphos' mean?", "What did the Reformers teach about Mary's virginity?"] },
      { title: "Mother of God (Theotokos)", description: "The Council of Ephesus and why this title is about Christ, not just Mary.", readings: [{ source: "summa", path: "/summa?part=III&q=35&a=4", label: "ST III, q.35, a.4 — Whether Mary should be called Mother of God" }, { source: "ccc", path: "/ccc?part=1", label: "CCC 495 — Theotokos" }], questions: ["Why is Theotokos a Christological title?", "What was Nestorius's error?"] },
      { title: "The Assumption and Queenship", description: "Taken body and soul into heaven — and what it means for all of us.", readings: [{ source: "ccc", path: "/ccc?part=1", label: "CCC 966-975 — The Assumption and Mary's role" }], questions: ["Why was the Assumption defined so late (1950)?", "What is the theological basis for the Assumption?", "How does Mary's Assumption relate to our own bodily resurrection?"] },
    ],
  },
  {
    id: "catholic-social-teaching",
    title: "Catholic Social Teaching",
    subtitle: "From Rerum Novarum to today",
    difficulty: "intermediate",
    duration: "7 days",
    topics: ["moral-theology", "natural-law", "papal", "theology"],
    description: "The Church's social doctrine — subsidiarity, solidarity, the common good, just wages, and the dignity of work.",
    lessons: [
      { title: "Foundations: Natural Law and Human Dignity", description: "Why Catholic social teaching is built on natural law, not ideology.", readings: [{ source: "summa", path: "/summa?part=I-II&q=94&a=2", label: "ST I-II, q.94, a.2 — Natural law" }, { source: "spiritual-reading", path: "/spiritual-reading/gaudium-et-spes", label: "Gaudium et Spes — Human dignity" }], questions: ["How does natural law ground social teaching?", "What does human dignity mean?"] },
      { title: "Subsidiarity and Solidarity", description: "The two great principles — local solutions and universal brotherhood.", readings: [{ source: "ccc", path: "/ccc?part=3", label: "CCC 1883-1896 — Subsidiarity and participation" }], questions: ["What is subsidiarity?", "How do subsidiarity and solidarity balance each other?"] },
      { title: "Work, Wages, and Property", description: "The dignity of work, the just wage, and the right to private property (with limits).", readings: [{ source: "summa", path: "/summa?part=II-II&q=66&a=2", label: "ST II-II, q.66, a.2 — Whether it is lawful to steal in necessity" }], questions: ["What is a just wage?", "Is private property absolute?", "What is the universal destination of goods?"] },
      { title: "Marriage, Family, and Life", description: "The domestic church, the culture of life, and the Church's stand on bioethics.", readings: [{ source: "ccc", path: "/ccc?part=3", label: "CCC 2201-2257 — The family" }], questions: ["Why does the Church call the family the 'domestic church'?", "What is the culture of life vs. the culture of death?"] },
      { title: "War, Peace, and the Just War Tradition", description: "When is war justified? Aquinas's just war criteria and their application.", readings: [{ source: "summa", path: "/summa?part=II-II&q=40&a=1", label: "ST II-II, q.40 — War" }, { source: "ccc", path: "/ccc?part=3", label: "CCC 2302-2317 — Peace" }], questions: ["What are the criteria for a just war?", "Is pacifism a Catholic option?", "What about nuclear weapons?"] },
      { title: "Capitalism, Socialism, and the Third Way", description: "Why the Church rejects both laissez-faire capitalism and socialism.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/gaudium-et-spes", label: "Gaudium et Spes — Economic life" }], questions: ["Why does the Church reject pure capitalism?", "Why does the Church reject socialism?", "What is the 'third way'?"] },
      { title: "Immigration, Environment, and Modern Questions", description: "Applying CST principles to contemporary controversies.", readings: [{ source: "ccc", path: "/ccc?part=3", label: "CCC 2402-2449 — Social justice" }], questions: ["What does CST say about immigration?", "What is 'integral ecology'?", "How do you apply subsidiarity to modern policy questions?"] },
    ],
  },
  {
    id: "classical-theism",
    title: "Classical Theism",
    subtitle: "What God is NOT — divine simplicity and beyond",
    difficulty: "advanced",
    duration: "7 days",
    topics: ["philosophy", "aquinas", "theology"],
    description: "The classical theist understanding of God — simplicity, immutability, eternity, and why God is not 'a being' but Being Itself.",
    lessons: [
      { title: "Divine Simplicity", description: "God has no parts — why this is the most important and most misunderstood attribute.", readings: [{ source: "summa", path: "/summa?part=I&q=3&a=1", label: "ST I, q.3 — The simplicity of God" }], questions: ["What does it mean that God has no composition?", "Why does divine simplicity follow from the Five Ways?"] },
      { title: "Ipsum Esse Subsistens", description: "God is Being Itself — not a being among beings. The key to everything.", readings: [{ source: "summa", path: "/summa?part=I&q=3&a=4", label: "ST I, q.3, a.4 — Whether essence and existence are the same in God" }], questions: ["What does 'Ipsum Esse Subsistens' mean?", "How does this differ from pantheism?"] },
      { title: "The Via Negativa", description: "We know what God is NOT — the method of negative theology.", readings: [{ source: "summa", path: "/summa?part=I&q=3&a=1", label: "ST I, qq.3-11 — What God is not" }, { source: "scg", path: "/scg?book=1&chapter=14", label: "SCG I, c.14 — Knowing God by negation" }], questions: ["Why is negative theology necessary?", "Does the via negativa mean we know nothing about God?"] },
      { title: "Analogy", description: "How we speak about God — neither univocally nor equivocally.", readings: [{ source: "summa", path: "/summa?part=I&q=13&a=5", label: "ST I, q.13, a.5 — Whether names are said of God univocally" }], questions: ["What is analogical predication?", "How does analogy solve the problem of religious language?"] },
      { title: "Immutability and Eternity", description: "God does not change and is not in time — and why this is good news.", readings: [{ source: "summa", path: "/summa?part=I&q=9&a=1", label: "ST I, q.9 — Immutability" }, { source: "summa", path: "/summa?part=I&q=10&a=1", label: "ST I, q.10 — Eternity" }], questions: ["Does immutability make God impersonal?", "How can an immutable God respond to prayer?"] },
      { title: "Impassibility", description: "Does God suffer? The classical tradition vs. modern 'open theism.'", readings: [{ source: "summa", path: "/summa?part=I&q=20&a=1", label: "ST I, q.20 — God's love" }], questions: ["Does God have emotions?", "How do we reconcile divine love with impassibility?", "What is wrong with process theology?"] },
      { title: "Classical Theism vs. Theistic Personalism", description: "Why the 'big person in the sky' view of God is philosophically disastrous.", readings: [{ source: "scg", path: "/scg?book=1&chapter=22", label: "SCG I, c.22 — God's being is His essence" }], questions: ["What is theistic personalism?", "Why do both atheists and many Protestants assume theistic personalism?", "How does classical theism change every argument about God?"] },
    ],
  },
  {
    id: "scripture-typology",
    title: "Typology: Reading the Bible Like the Fathers",
    subtitle: "How the Old Testament points to the New",
    difficulty: "intermediate",
    duration: "5 days",
    topics: ["scripture", "theology", "church-fathers"],
    description: "The ancient art of typological reading — Adam prefigures Christ, the Ark prefigures the Church, the Passover prefigures the Eucharist.",
    lessons: [
      { title: "What Is Typology?", description: "The four senses of Scripture and why typology is not 'reading into' the text.", readings: [{ source: "summa", path: "/summa?part=I&q=1&a=10", label: "ST I, q.1, a.10 — The senses of Scripture" }, { source: "ccc", path: "/ccc?part=1", label: "CCC 115-119 — The senses of Scripture" }], questions: ["What are the four senses of Scripture?", "How does typology differ from allegory?"] },
      { title: "Adam and Christ", description: "The first Adam and the New Adam — Romans 5 and the reversal of the Fall.", readings: [{ source: "bible", path: "/bible?book=Romans&chapter=5", label: "Romans 5:12-21 — Adam and Christ" }, { source: "catena", path: "/catena?gospel=matthew&chapter=4", label: "Catena on Matthew 4 — The temptation" }], questions: ["How does Christ reverse what Adam did?", "What does 'recapitulation' mean?"] },
      { title: "Eve and Mary", description: "The New Eve — how the Fathers saw Mary as the reversal of Eve.", readings: [{ source: "bible", path: "/bible?book=Luke&chapter=1", label: "Luke 1 — Mary's 'yes' vs. Eve's 'no'" }, { source: "catena", path: "/catena?gospel=luke&chapter=1", label: "Catena on Luke 1" }], questions: ["How does Mary reverse Eve's disobedience?", "Where does this typology appear in the Fathers?"] },
      { title: "The Exodus and Salvation", description: "Egypt, the Red Sea, the wilderness, the Promised Land — the whole salvation story in miniature.", readings: [{ source: "bible", path: "/bible?book=Exodus&chapter=14", label: "Exodus 14 — The Red Sea crossing" }, { source: "bible", path: "/bible?book=1 Corinthians&chapter=10", label: "1 Corinthians 10:1-11 — Paul's typological reading" }], questions: ["How does the Exodus prefigure baptism?", "How does manna prefigure the Eucharist?", "What does the Promised Land represent?"] },
      { title: "Temple, Ark, Sacrifice", description: "The entire temple system points to Christ — and to the Mass.", readings: [{ source: "bible", path: "/bible?book=Hebrews&chapter=9", label: "Hebrews 9 — The heavenly sanctuary" }, { source: "summa", path: "/summa?part=I-II&q=102&a=4", label: "ST I-II, q.102, a.4 — The reasons for the ceremonial precepts" }], questions: ["How does the temple prefigure Christ's body?", "How does OT sacrifice relate to the Mass?", "Why is the Ark a type of Mary?"] },
    ],
  },
  {
    id: "debate-bootcamp-atheism",
    title: "Debate Bootcamp: Atheism",
    subtitle: "Study then spar",
    difficulty: "intermediate",
    duration: "3 days",
    topics: ["apologetics", "debate", "philosophy"],
    description: "Intensive preparation for debating atheists — study the arguments, then practice with the debate simulator.",
    lessons: [
      { title: "Their Best Arguments", description: "Problem of evil, divine hiddenness, science explains everything, religion is wish fulfillment.", readings: [{ source: "summa", path: "/summa?part=I&q=2&a=3", label: "ST I, q.2, a.3 — Objections to God's existence" }], questions: ["What are the four strongest atheist arguments?", "Which is hardest to answer?"] },
      { title: "Your Best Responses", description: "The Five Ways, the moral argument, the argument from reason, the fine-tuning argument.", readings: [{ source: "scg", path: "/scg?book=1&chapter=13", label: "SCG I, c.13 — Proofs for God" }, { source: "summa", path: "/summa?part=I&q=48&a=1", label: "ST I, q.48 — Evil as privation" }], questions: ["Can you explain the Five Ways in 2 minutes?", "What one-liner shuts down 'Who made God?'?"] },
      { title: "Sparring Practice", description: "Use the Debate Simulator to practice against an atheist opponent. Apply what you've learned.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/confessions", label: "Confessions — Augustine's conversion from skepticism" }], questions: ["What went well in your debate?", "Where were you weakest?", "What do you need to study more?"] },
    ],
  },
  {
    id: "debate-bootcamp-protestant",
    title: "Debate Bootcamp: Protestantism",
    subtitle: "Study then spar",
    difficulty: "intermediate",
    duration: "3 days",
    topics: ["apologetics", "debate", "protestant", "scripture"],
    description: "Intensive preparation for debating Protestants — study the arguments, then practice with the debate simulator.",
    lessons: [
      { title: "Their Best Arguments", description: "Sola Scriptura, Sola Fide, the papacy, Marian devotion, purgatory.", readings: [{ source: "bible", path: "/bible?book=Romans&chapter=3", label: "Romans 3:28 — Justified by faith" }], questions: ["What are the strongest Protestant arguments?", "Which Catholic doctrine is hardest to defend from Scripture alone?"] },
      { title: "Your Best Responses", description: "The canon argument, James 2, Matthew 16, the Fathers, visible Church.", readings: [{ source: "bible", path: "/bible?book=James&chapter=2", label: "James 2:24 — Not by faith alone" }, { source: "bible", path: "/bible?book=Matthew&chapter=16", label: "Matthew 16:18 — Upon this rock" }], questions: ["How do you use the canon argument effectively?", "What's the strongest one-liner for the papacy?"] },
      { title: "Sparring Practice", description: "Use the Debate Simulator to practice against a Protestant opponent.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/dei-verbum", label: "Dei Verbum — Scripture and Tradition" }], questions: ["What went well?", "Where were you weakest?", "What surprised you?"] },
    ],
  },
  {
    id: "heresies-history",
    title: "A History of Heresies",
    subtitle: "Know the errors to know the truth",
    difficulty: "intermediate",
    duration: "7 days",
    topics: ["history", "theology", "apologetics"],
    description: "Every major heresy from Gnosticism to modernism — what they taught, why they were wrong, and how the Church responded.",
    lessons: [
      { title: "Gnosticism and Marcionism", description: "The first great heresies — matter is evil, the OT God is a demiurge.", readings: [{ source: "bible", path: "/bible?book=Genesis&chapter=1", label: "Genesis 1 — 'God saw that it was good'" }, { source: "ccc", path: "/ccc?part=1", label: "CCC 285-289 — Against dualism" }], questions: ["What did the Gnostics teach?", "Why is Gnosticism still alive today?"] },
      { title: "Arianism", description: "The biggest crisis in Church history — was Christ created or eternal?", readings: [{ source: "summa", path: "/summa?part=I&q=27&a=1", label: "ST I, q.27 — The procession of the Son" }], questions: ["What did Arius teach?", "What was at stake at Nicaea?", "Where do we still see Arian thinking today?"] },
      { title: "Nestorianism and Monophysitism", description: "Getting the Incarnation wrong — too separate or too fused.", readings: [{ source: "summa", path: "/summa?part=III&q=2&a=6", label: "ST III, q.2 — The mode of union" }], questions: ["What is the hypostatic union?", "How did Chalcedon define it?"] },
      { title: "Pelagianism and Semi-Pelagianism", description: "Can we save ourselves? The grace controversy that never dies.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/on-nature-and-grace", label: "Augustine, On Nature and Grace" }, { source: "summa", path: "/summa?part=I-II&q=109&a=2", label: "ST I-II, q.109 — Grace" }], questions: ["What did Pelagius teach?", "Why is semi-Pelagianism so common today?"] },
      { title: "Iconoclasm and the Cathars", description: "Smashing images and hating matter — dualism keeps coming back.", readings: [{ source: "ccc", path: "/ccc?part=3", label: "CCC 2129-2132 — Sacred images" }], questions: ["What was the iconoclast controversy?", "What did the Cathars believe?"] },
      { title: "The Reformation Heresies", description: "Sola Scriptura, Sola Fide, the invisible church — where the Reformers went wrong.", readings: [{ source: "spiritual-reading", path: "/spiritual-reading/freedom-of-christian", label: "Luther, Freedom of a Christian" }], questions: ["What are the five 'solas'?", "Which Reformation claims were addressed at Trent?"] },
      { title: "Modernism and Beyond", description: "Pius X's 'synthesis of all heresies' — and its descendants today.", readings: [{ source: "ccc", path: "/ccc?part=1", label: "CCC 88-90 — Dogma and development" }], questions: ["What is modernism?", "How does legitimate development differ from corruption?", "What modern movements carry modernist DNA?"] },
    ],
  },
  {
    id: "prayer-spirituality",
    title: "Learning to Pray",
    subtitle: "A Catholic guide to the interior life",
    difficulty: "beginner",
    duration: "7 days",
    topics: ["spirituality", "theology", "liturgy"],
    description: "A practical course on Catholic prayer — from vocal prayer to meditation to contemplation, grounded in Aquinas and the spiritual masters.",
    lessons: [
      { title: "What Is Prayer?", description: "Raising the mind and heart to God — and why it's not optional.", readings: [{ source: "summa", path: "/summa?part=II-II&q=83&a=1", label: "ST II-II, q.83 — Prayer" }, { source: "ccc", path: "/ccc?part=4", label: "CCC 2558-2567 — What is prayer?" }], questions: ["How does Aquinas define prayer?", "Is prayer for God's benefit or ours?"] },
      { title: "Vocal Prayer", description: "The Our Father, the Hail Mary, the Rosary — praying with words.", readings: [{ source: "bible", path: "/bible?book=Matthew&chapter=6", label: "Matthew 6:5-15 — How to pray" }, { source: "ccc", path: "/ccc?part=4", label: "CCC 2700-2704 — Vocal prayer" }], questions: ["Why is vocal prayer important?", "How do you pray the Rosary meditatively?"] },
      { title: "Meditation", description: "Thinking about God — how to meditate on Scripture and the truths of faith.", readings: [{ source: "ccc", path: "/ccc?part=4", label: "CCC 2705-2708 — Meditation" }], questions: ["What is meditation in the Catholic tradition?", "How is it different from Eastern meditation?"] },
      { title: "Contemplation", description: "Resting in God — the highest form of prayer and the gift of the Holy Spirit.", readings: [{ source: "ccc", path: "/ccc?part=4", label: "CCC 2709-2719 — Contemplation" }, { source: "summa", path: "/summa?part=II-II&q=180&a=1", label: "ST II-II, q.180 — The contemplative life" }], questions: ["What is contemplation?", "Can everyone reach contemplation?"] },
      { title: "The Liturgy of the Hours", description: "The prayer of the Church — sanctifying every hour of the day.", readings: [{ source: "ccc", path: "/ccc?part=4", label: "CCC 1174-1178 — The Liturgy of the Hours" }], questions: ["What is the Liturgy of the Hours?", "How can laypeople pray it?"] },
      { title: "Difficulties in Prayer", description: "Dryness, distraction, desolation — and why they're normal.", readings: [{ source: "ccc", path: "/ccc?part=4", label: "CCC 2729-2745 — The battle of prayer" }], questions: ["Why does God allow spiritual dryness?", "How do you deal with distractions?"] },
      { title: "The Our Father: Line by Line", description: "Aquinas's commentary on the most perfect prayer.", readings: [{ source: "ccc", path: "/ccc?part=4", label: "CCC 2759-2865 — The Lord's Prayer" }, { source: "summa", path: "/summa?part=II-II&q=83&a=9", label: "ST II-II, q.83, a.9 — The Our Father" }], questions: ["Why does Aquinas call the Our Father the most perfect prayer?", "What does each petition ask for?"] },
    ],
  },
];
