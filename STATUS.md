# Veritas — Personal Catholic Theology & Apologetics Platform

**Owner:** Jacob Cascone
**Stack:** Next.js + Supabase + Anthropic + Vercel
**Status:** Live — veritas-mauve-nu.vercel.app
**GitHub:** cascone26/veritas
**Last Deploy:** Mar 9, 2026

## Built So Far

**45+ pages across 9 nav sections:**

**AI Tools:** Ask Aquinas (streaming chat), Objection Handler, Debate Prep, Debate Simulator
**Study:** Summa Browser (512 questions), Flashcards (AI-generated), Daily Question, Reading Plans, Weakness Tracker, Spiritual Reading (26 classics)
**Reference:** Quick-Draw (25+ apologetics), Scripture Index (30+ verses), Glossary (60+ terms), Analogy Bank (25+ with heresy warnings), Natural Law (12 topics), One-Liners (55+ responses), Logical Fallacies (28+), Debate Playbook (10 strategies)
**Apologetics:** Myth Buster (20 myths), Modern Critics (15 thinkers), Denominations (12), Argument Trees
**Scripture & Sacraments:** Typology (30+ types), Prophecy Fulfillment (46+), Sacraments (all 7), Biblical Covenants (6)
**Encyclopedia:** Hub page (30 sections), Aquinas Life & Works (26 events + 60 works), Heresy Index (20+), Church Fathers (24), Saints/Doctors (37), Ecumenical Councils (21), Encyclicals (18), Marian Encyclopedia (4 dogmas + 48 titles), Virtues & Vices (41 entries), Timeline (60+ events), Catholic Contributions (22)
**Moral Theology:** Bioethics (15 topics), Social Teaching (14 principles)
**Personal:** Notes & Journal, Saved Arguments, Reading Tracker, Prayer Corner (19 prayers), Settings

**Data files:** 30+ files in src/data/ with comprehensive Catholic theology content

---

## What It Is

Personal AI-powered Catholic theology and apologetics tool. The most comprehensive Catholic intellectual toolkit that exists. Built on the complete works of St. Thomas Aquinas and everything he drew from, with every apologetics framework, every philosophical opponent, and every modern encounter mapped and ready.

Not a public product. Jacob's personal brain augmentation for defending and understanding the faith.

---

## Architecture

### The Knowledge Base (Encyclopedia)

The foundation of everything. All AI features, study tools, and apologetics reference draw from this unified knowledge base.

#### Layer 1: Aquinas's Complete Works (~100+ titles, ~8-9 million words)

**Theological Syntheses:**
- Summa Theologica (3 parts, 512 questions, 2,669 articles, ~10,000 objections answered)
- Summa Contra Gentiles (4 books, 463 chapters)
- Compendium Theologiae (unfinished — Faith section + beginning of Hope)

**Disputed Questions:**
- De Veritate (On Truth) — 29 questions
- De Potentia (On the Power of God) — 10 questions
- De Malo (On Evil) — 16 questions
- De Spiritualibus Creaturis (On Spiritual Creatures) — 11 articles
- De Anima (On the Soul) — 21 articles
- De Virtutibus in Communi (On the Virtues in General) — 13 articles
- De Caritate (On Charity) — 13 articles
- De Correctione Fraterna (On Fraternal Correction) — 2 articles
- De Spe (On Hope) — 4 articles
- De Virtutibus Cardinalibus (On the Cardinal Virtues) — 4 articles
- De Unione Verbi Incarnati (On the Union of the Incarnate Word) — 5 articles

**Quodlibetal Questions:** 12 sets covering angels, sin, Eucharist, sacraments, religious life, mendicant controversy

**Biblical Commentaries:**
- OT: Job (literal commentary), Psalms 1-54 (incomplete), Isaiah, Jeremiah, Lamentations
- NT: Matthew, John, Romans, 1-2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1-2 Thessalonians, 1-2 Timothy, Titus, Philemon, Hebrews
- Catena Aurea (Golden Chain) — patristic gloss on all 4 Gospels from 80+ Church Fathers

**Commentaries on Aristotle:**
- De Interpretatione, Posterior Analytics, Physics, De Caelo, De Generatione et Corruptione, Meteorologica, De Anima, De Sensu et Sensato, De Memoria et Reminiscentia, Nicomachean Ethics, Politics (partial), Metaphysics (all 12 books)

**Commentary on Peter Lombard's Sentences** (4 books, 182 distinctions)

**Commentaries on Other Works:**
- Boethius: De Trinitate, De Hebdomadibus
- Pseudo-Dionysius: De Divinis Nominibus
- Liber de Causis (Aquinas first identified its Proclean origin)

**Opuscula (Shorter Works):**
- De Ente et Essentia (On Being and Essence)
- De Principiis Naturae (On the Principles of Nature)
- De Aeternitate Mundi (On the Eternity of the World)
- De Unitate Intellectus Contra Averroistas (Against the Averroists)
- De Regimine Principum / De Regno (On Kingship)
- De Rationibus Fidei contra Saracenos, Graecos et Armenos
- Contra Errores Graecorum
- Contra Impugnantes Dei Cultum et Religionem
- De Perfectione Spiritualis Vitae
- De Forma Absolutionis
- De Sortibus, De Iudiciis Astrorum
- De Mixtione Elementorum, De Motu Cordis
- De Operationibus Occultis Naturae
- De Substantiis Separatis (unfinished)
- De Regimine Iudaeorum
- De Emptione et Venditione ad Tempus
- De Articulis Fidei et Ecclesiae Sacramentis
- De Secreto, De Fallaciis, De Propositionibus Modalibus
- Multiple Responsiones to John of Vercelli (108, 42, and 36 articles)

**Liturgical Works:**
- Pange Lingua Gloriosi Corporis Mysterium (includes Tantum Ergo)
- Sacris Solemniis (includes Panis Angelicus)
- Verbum Supernum Prodiens (includes O Salutaris Hostia)
- Lauda Sion Salvatorem (Corpus Christi Sequence)
- Adoro Te Devote
- Complete Office for Corpus Christi
- Prayer Before Mass, Prayer After Mass, Prayer Before Study, Prayer for Ordering a Life Wisely

**Letters & Sermons:**
- Letter on the Mode of Studying (De Modo Studendi)
- Collationes on the Creed, Lord's Prayer, Hail Mary, Ten Commandments, Two Commandments of Charity
- 20+ university sermons
- Principia (inaugural lectures)

#### Layer 2: Aquinas's Sources (The Encyclopedia Behind the Encyclopedia)

**Sacred Scripture:**
- Full Bible (Douay-Rheims + RSV-CE)
- Latin Vulgate (Jerome's translation — what Aquinas used)
- Glossa Ordinaria and Glossa Interlinearis

**Aristotle ("The Philosopher"):**
- Complete works: Organon (Categories, De Interpretatione, Prior/Posterior Analytics, Topics, Sophistical Refutations), Physics, De Caelo, De Generatione, Meteorologica, De Anima, Parva Naturalia, Metaphysics, Nicomachean Ethics, Politics, Rhetoric, Poetics, biological works

**Church Fathers — Latin:**
- Augustine (De Trinitate, City of God, Confessions, De Doctrina Christiana, De Genesi ad Litteram, Enchiridion, De Libero Arbitrio, all grace treatises, commentaries, letters, sermons — 30+ works cited)
- Ambrose, Jerome, Gregory the Great (Moralia in Job — massively cited), Hilary of Poitiers, Isidore of Seville (Etymologiae), Boethius, Cassiodorus, Leo the Great, Bede, Peter Lombard, Anselm of Canterbury, Bernard of Clairvaux, Hugh and Richard of St. Victor, Rabanus Maurus, Lactantius, Tertullian

**Church Fathers — Greek:**
- John Damascene (De Fide Orthodoxa — most cited Greek Father)
- Pseudo-Dionysius (Divine Names, Celestial/Ecclesiastical Hierarchy, Mystical Theology)
- John Chrysostom, Origen, Basil, Gregory of Nazianzus, Gregory of Nyssa, Athanasius, Cyril of Alexandria, Nemesius of Emesa, Theophylact, Maximus the Confessor

**Islamic Philosophers:**
- Avicenna (Ibn Sina): metaphysics, essence-existence distinction, agent intellect, contingency/necessity
- Averroes (Ibn Rushd, "the Commentator"): commentaries on all Aristotle, monopsychism, eternity of world
- Al-Ghazali (Algazel): occasionalism, critique of philosophers
- Al-Farabi: emanation, agent intellect, classification of sciences
- Avempace (Ibn Bajja): intellect and soul

**Jewish Philosophers:**
- Maimonides ("Rabbi Moyses"): Guide for the Perplexed — negative theology, God's existence, creation vs eternity, Old Law
- Avicebron (Solomon Ibn Gabirol): universal hylomorphism (refuted by Aquinas)

**Pagan Philosophers:**
- Plato (through Aristotle, Augustine, Calcidius's Timaeus)
- Neoplatonists: Plotinus (through Augustine/Macrobius), Proclus (Elements of Theology), Porphyry (Isagoge), Macrobius
- Pre-Socratics: Parmenides, Heraclitus, Democritus, Empedocles, Anaxagoras, Pythagoreans, Thales
- Stoics (through Cicero, Seneca, Augustine)
- Cicero, Seneca, Ptolemy, Euclid, Galen, Hippocrates

**Canon Law & Councils:**
- Gratian's Decretum, Papal Decretals
- Ecumenical Councils: Nicaea I, Constantinople I, Ephesus, Chalcedon, Constantinople II & III, Nicaea II, Lateran IV, Lyons I
- Provincial councils (Orange, Carthage, Toledo)

#### Layer 3: Philosophies & Worldviews Aquinas Engaged

**Islamic Philosophy:**
- Averroes: monopsychism, double truth, eternity of world, necessitarianism — refuted in De Unitate Intellectus, ST I q.76, SCG II
- Avicenna: emanationism, separate agent intellect, essence as accident — adopted/transformed essence-existence distinction, rejected emanation in ST I q.47, SCG II
- Al-Ghazali: occasionalism — refuted in SCG III cc.69-70, ST I q.105 a.5
- Al-Farabi: emanation, separate intellect — refuted in ST I q.79 a.4

**Ancient Greek Systems:**
- Platonism: separate Forms, soul-body dualism, innate knowledge — refuted in ST I q.84, De Ente et Essentia
- Neoplatonism: emanation, the One beyond being — adopted participation and evil-as-privation, rejected emanation
- Epicureanism: materialism, no providence, pleasure as highest good — refuted in ST I q.75, I-II q.2, SCG III
- Stoicism: corporeal God, pantheism, determinism, apatheia — refuted in ST I q.3, q.83, I-II qq.22-48
- Skepticism: impossibility of certainty — refuted in ST I q.85, De Veritate q.1
- Pre-Socratic positions: Parmenides (no change), Heraclitus (only change), Atomism (no forms/teleology)

**Christian Heresies:**
- Arianism: Son is creature — refuted in ST I qq.27-43
- Sabellianism/Modalism: one Person, three modes — refuted in ST I qq.28-30
- Nestorianism: two persons in Christ — refuted in ST III q.2, SCG IV cc.34-39
- Monophysitism: one nature in Christ — refuted in ST III q.2
- Docetism: phantom body — refuted in ST III q.5, SCG IV c.29
- Pelagianism: salvation by natural power — refuted in ST I-II qq.109-114
- Semi-Pelagianism: human initiative in faith — refuted in ST I-II q.109 a.6, q.112 a.2
- Manichaeism: two principles, evil matter — refuted in ST I qq.48-49, SCG II c.41
- Catharism/Albigensianism: medieval Manichaean dualism — SCG partly written against this
- Latin Averroism: monopsychism + double truth — De Unitate Intellectus

**Rival Scholastics:**
- Bonaventure: Augustinian illumination, plurality of forms, universal hylomorphism, demonstrability of temporal creation — Aquinas opposed on all points
- Duns Scotus (post-Aquinas): univocity of being, formal distinction, voluntarism, haecceity — opposed by Thomist tradition
- William of Ockham (post-Aquinas): nominalism, divine voluntarism, skepticism about natural theology
- Siger of Brabant: Latin Averroism — directly targeted in De Unitate Intellectus
- Peter Abelard: conceptualism, moral intentionalism — Aquinas's moderate realism and three-font morality theory respond

**Philosophical Systems:**
- Materialism: refuted via immateriality of intellect (ST I q.75)
- Dualism: refuted via soul as form of body (ST I q.76)
- Pantheism: refuted in ST I q.3 a.8, q.44 a.1
- Emanationism: refuted in ST I q.19 a.3, SCG II cc.23-24
- Occasionalism: refuted in SCG III cc.69-70
- Voluntarism: refuted in ST I q.82 a.3, I-II q.93-94
- Fideism: refuted in ST I q.1, SCG I cc.3-9 ("grace perfects nature")
- Rationalism: refuted in ST I q.1 a.1, q.32 a.1 (mysteries exceed reason)

#### Layer 4: Additional Encyclopedic Content

**Catechism of the Catholic Church** — full text, cross-referenced to Aquinas
**Ecumenical Council Documents** — Nicaea I through Vatican II
**Papal Encyclicals** — especially Aeterni Patris (Leo XIII), Fides et Ratio (JPII), Humanae Vitae (Paul VI)
**Canon Law** — relevant sections
**Doctors of the Church** — theological contributions of all 37
**Heresy Encyclopedia** — every major heresy with claims, refutations, and sources
**Conversion Stories** — organized by what convinced them

---

### Features (39 Total)

#### AI Core (3)
1. **Ask Aquinas** — AI chat grounded in the entire knowledge base. Real citations (ST I, Q.2, Art.3). Responds in Aquinas's dialectical framework. Adjusts depth to user level automatically.
2. **Objection Handler** — Paste any anti-Catholic argument, get structured Thomistic response (Objection / On the contrary / I answer that / Reply). Steelmans the objection first.
3. **Debate Prep** — Pick topic + opponent type (atheist, Protestant, Muslim, etc.), get full breakdown: their best arguments, your best responses, common traps, key verses, key Aquinas quotes.

#### Study Tools (3)
4. **Summa Browser** — Searchable Summa with plain English summaries alongside original. Bookmark, add notes, track progress. Cross-referenced to all sources Aquinas cites.
5. **Personal Flashcards** — AI-generated spaced repetition. Not just facts — "Why?" questions that test understanding. Interleaved across domains. Tracks weak spots.
6. **Daily Question** — One theology question per day. Spaced repetition scheduling. Elaborative interrogation format.

#### Reference (3)
7. **Apologetics Quick-Draw** — Organized by objection ("Catholics worship Mary" -> full response with sources). Fast lookup for live conversations.
8. **Scripture Index** — Catholic interpretations of every commonly contested verse. Protestant proof-texts with Catholic responses. Verse-by-verse defense.
9. **Glossary** — Every theological/philosophical term in plain English with progressive depth (catechetical -> scholastic).

#### Personal (3)
10. **Notes/Journal** — Save thoughts, arguments worked through, things to study deeper. Tag by topic, auto-link to relevant Summa sections.
11. **Reading Tracker** — Track what you've read through in the Summa, Catechism, Scripture, Church Fathers. Visual progress.
12. **Saved Arguments** — Bookmark best responses for reuse. Organize by topic and opponent type.

#### Advanced Study (9)
13. **Logical Reasoning Engine** — Formal logic fundamentals. Syllogisms, fallacy detection, valid argument forms. Shows logical structure of any argument, flags fallacies on either side.
14. **Cross-Reference System** — Everything linked. Click a Summa article -> see every Scripture verse, Father, Aristotle passage it references. And vice versa.
15. **Argument Trees** — Visual maps showing how doctrines connect and depend on each other. Pull on transubstantiation -> see hylomorphism, Aristotle, ST III Q.75-77, Trent Session XIII.
16. **Historical Timeline** — When each work was written, what was happening in the Church, what heresies Aquinas was responding to.
17. **Latin-English Toggle** — Switch between original Latin and translation on any Aquinas text.
18. **Opponent Steelman Mode** — Feed any opposing position, get the strongest version before helping you respond.
19. **Personal Argument Journal** — Structured entries: objection encountered, how I responded, what I'd do better.
20. **Difficulty Levels** — Every piece of content at 5 levels: ELI5, ELI10, ELI15, Adult, Scholar. Same doctrine, different depth.
21. **Audio Mode** — Any article, summary, or argument read aloud. For driving or working.

#### Encyclopedic Additions (9)
22. **Philosophical Foundations Library** — Not just Aristotle. Plato, Stoics, Boethius, Avicenna, Averroes, Maimonides, Neoplatonists, Pre-Socratics — with how Aquinas engaged each.
23. **Heresy Encyclopedia** — Every major heresy: what it claims, why it's wrong, where Aquinas/Church refutes it.
24. **Saints as Theologians Database** — Every Doctor of the Church's theological contributions, cross-referenced to Aquinas.
25. **Conversion Story Library** — Organized by what convinced them (historical, philosophical, eucharistic, moral).
26. **Protestant Denominational Map** — What each denomination believes, where they diverge from each other and from Catholicism.
27. **Daily Office Integration** — Liturgy of the Hours tied to current study topics.
28. **Scripture Memory System** — Spaced repetition for key apologetics verses with full Catholic context.
29. **Encyclical Reader** — Every papal encyclical searchable with plain-English summaries and Thomistic connections.
30. **Natural Law Toolkit** — Dedicated section for natural law ethics from first principles through specific applications.

#### Engagement & Practice (9)
31. **Church Father Quote Engine** — Searchable by topic, not just author. Need patristic support for apostolic succession? Pull every relevant quote instantly.
32. **Analogy Bank** — Best analogies for every major doctrine, organized by topic. Includes warnings about which analogies lead to heresies. Plus custom AI-generated analogies for specific audiences.
33. **Reading Plans** — Guided paths: "Aquinas in 90 days," "Catholic Apologetics Foundations," "Deep Dive: Eucharist," "Natural Theology Complete," custom plans.
34. **Liturgical Calendar Tie-Ins** — Today's feast day saint, what they taught, connection to current study.
35. **Personal Weakness Tracker** — Flag topics where you feel weakest. Veritas prioritizes those in daily questions and flashcards.
36. **Source Credibility Notes** — Know how your audience will receive a citation. "Citing Aquinas to a Protestant won't land — here's the same argument from Scripture alone."
37. **Podcast/Talk Notes** — Log insights from Catholic podcasts, talks, homilies. Tag by topic, auto-link to Summa sections.
38. **Prayer Integration** — Tie study sessions to relevant prayers. Studying the Eucharist? Here's Adoro Te Devote. Studying suffering? Relevant mysteries of the Rosary.
39. **Debate Simulator** — AI plays devil's advocate. Pick opponent type (atheist, Calvinist, Muslim, etc.) and difficulty level. Practice arguing live. Veritas scores responses and suggests stronger moves.

---

### Modern Apologetics Encounters (Pre-Built)

**vs. Atheists/Agnostics — Top 5:**
1. Problem of evil -> evil as privation, free will defense, existential flip
2. "No evidence" -> Five Ways, category error (God is not a hypothesis), scientism is self-refuting
3. Science replaced religion -> God of the gaps reframe, Catholic contributions to science
4. "Which God?" -> philosophical narrowing (polytheism out, pantheism out), historical case for Christianity
5. Religion makes people worse -> tu quoque + atheist regimes, historical corrections, can atheism ground morality?

**vs. Protestants — Top 5:**
1. Sola Scriptura -> 2 Thess 2:15, 1 Tim 3:15, canon problem, 40,000 denominations
2. Sola Fide -> James 2:24, Gal 5:6, Matt 7:21, Matt 25, Phil 2:12
3. Real Presence -> John 6:51-68 (trogo), 1 Cor 11:27, unanimous Church Fathers
4. Mary/Saints -> 1 Tim 2:1-5 context, Rev 5:8, kecharitomene, Queen Mother typology
5. Papal authority -> Matt 16:18-19 + Isaiah 22:22, Luke 22:31-32, John 21:15-17, Acts

**vs. "Spiritual But Not Religious" — Top 5:**
1. "All paths lead to God" -> law of non-contradiction, hidden arrogance
2. Moral relativism -> self-refuting, natural law
3. "Organized religion is corrupt" -> corruption proves goodness, Christ founded an institution
4. "I believe in energy/universe" -> "energy" is physics, universe is contingent, impersonal can't ground personal
5. Reincarnation -> soul-body unity, karma is morally incoherent

**vs. Islam — Top 5:**
1. Trinity -> not three gods, subsistent relations, Jesus's divine claims
2. Divinity of Christ -> trilemma, Resurrection evidence, pre-Nicene Fathers
3. Biblical corruption (tahrif) -> manuscript evidence, Quran contradicts corruption claim
4. Muhammad as prophet -> Paraclete is Holy Spirit, Deut 13 criteria, SCG I ch.6
5. Moral law differences -> natural law vs divine command theory, religious liberty

**vs. Orthodox — Top 5:**
1. Filioque -> "through the Son" = "and the Son," Maximus the Confessor, ST I q.36 a.2
2. Papal primacy -> biblical evidence, Pope Victor I (AD 190), Leo's Tome at Chalcedon
3. Immaculate Conception -> Scotist solution (preventive redemption), kecharitomene, new Eve
4. Purgatory -> Orthodox pray for the dead (implies intermediate state), 1 Cor 3:15, Rev 21:27
5. Development of doctrine -> acorn to oak, Orthodox Palamite theology is itself a development

**vs. Secular/Progressive — Top 5:**
1. Abortion -> biology (unique genome at fertilization), arbitrary personhood criteria, natural law
2. Same-sex marriage -> comprehensive union, bodily union argument, procreative orientation
3. Gender ideology -> soul-body unity (ST I q.75-76), sex/gender distinction is recent, Cass Review
4. Contraception -> unitive/procreative inseparability, Paul VI's predictions, NFP
5. Euthanasia -> ST II-II q.64 a.5, autonomy limits, Netherlands/Canada slippery slope, palliative care

**vs. Ex-Catholics — Top 5:**
1. Abuse scandal -> acknowledge fully, distinguish institution from members, Dallas Charter reforms
2. "Never really believed" -> catechesis failure, intellectual invitation, have you encountered the real thing?
3. "Too rigid/out of touch" -> Chesterton's fence, doctrine vs policy, progressive churches are dying
4. "Bad experience with priest/parish" -> validate, people vs truth, try a different parish
5. "Found peace outside" -> peace is not the truth criterion, fullness argument, the Eucharistic question

---

### Learning Engine (Research-Backed)

**Core Learning Loop:**
1. Concrete example introduces topic (hooks attention, builds intuition)
2. Socratic questioning guides discovery (Aquinas's own disputatio method)
3. Quaestio structure presents full argument (objections, sed contra, respondeo, replies)
4. Feynman check — user explains back, AI identifies gaps
5. Spaced repetition schedules review with elaborative "Why?" questions
6. Interleaved review mixes topic with related topics from other domains

**Explanation Engine:**
- Default: Analogy-first, then progressive disclosure (catechetical -> scholastic)
- Adaptive: Detects user level and preferred mode (narrative/logical/devotional)
- 5 levels: ELI5, ELI10, ELI15, Adult, Scholar
- Always steelmans objections before responding
- 3 output modes: Casual (Matt Fradd tone), Formal (Edward Feser precision), Devotional (Frank Sheed warmth)

**AI Advantages Over Books/Podcasts:**
- Adaptive difficulty in real-time
- Personalized weak-spot targeting
- Instant cross-referencing across thousands of sources
- Simulated debate practice with scoring
- Custom analogy generation for specific audiences
- Converting formal arguments to casual language and back
- Interactive quaestio exercises (fill in the blanks)
- Progress tracking and mastery profiles

**Key Apologists Modeled:**
- Trent Horn: direct engagement, debate, clarity under pressure
- Jimmy Akin: steel-manning, empathetic engagement
- Bishop Barron: beauty-first evangelization (beauty -> goodness -> truth)
- Scott Hahn: covenant narrative, Scripture depth
- Peter Kreeft: Socratic dialogue, common sense
- Edward Feser: rigorous Thomistic philosophy
- Matt Fradd: conversational, approachable
- Frank Sheed: street-corner clarity + prayer integration

**Core Thomistic Principles (Always Available):**
1. God is Ipsum Esse Subsistens — Being Itself, not a being among beings (ST I q.3 a.4)
2. Evil is privation, not substance (ST I qq.48-49)
3. The Five Ways are demonstrations, not hypotheses (ST I q.2 a.3)
4. Natural law is rational, not arbitrary (ST I-II qq.91-94)
5. Grace perfects nature (ST I q.1 a.8 ad 2)
6. Truth cannot contradict truth
7. Faith is intellect moved by will under grace (ST II-II q.2 a.1)

---

## Next Steps

1. Set up Next.js project with Supabase
2. Design database schema for the knowledge base
3. Build the knowledge base ingestion pipeline (Aquinas's works are public domain)
4. Build Ask Aquinas (core AI chat with knowledge base grounding)
5. Build Summa Browser
6. Build Apologetics Quick-Draw
7. Layer in remaining features

---

## Tech Notes

- All Aquinas works are public domain (died 1274)
- Major digital sources: corpusthomisticum.org, newadvent.org (Summa), dhspriory.org (English translations)
- Summa alone is ~1.5M words Latin, similar in English
- Total corpus ~8-9M words
- Will need chunked embeddings for RAG (retrieval-augmented generation)
- Citation format: ST I, q.2, a.3 (standard Thomistic citation)
