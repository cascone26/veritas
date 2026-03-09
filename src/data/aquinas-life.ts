// =============================================================================
// AQUINAS: LIFE & COMPLETE WORKS
// =============================================================================
// Comprehensive biography timeline and complete literary corpus of
// St. Thomas Aquinas, the Angelic Doctor (1225-1274).
// =============================================================================

export interface AquinasLifeEvent {
  year: string;
  title: string;
  description: string;
  significance?: string;
}

export interface AquinasWork {
  title: string;
  latinTitle?: string;
  description: string;
  category: string;
  status: "complete" | "incomplete" | "disputed";
  dateWritten?: string;
  significance?: string;
}

export const AQUINAS_LIFE: AquinasLifeEvent[] = [
  {
    year: "1225",
    title: "Birth at Roccasecca",
    description:
      "Thomas was born at Roccasecca Castle near Aquino in the Kingdom of Sicily to Count Landulf of Aquino and Donna Theodora of Theate, a family of minor Italian nobility related to the Hohenstaufen emperors.",
    significance:
      "Born into a world of feudal politics and ecclesiastical power, Thomas would transcend both to become the greatest theologian of the Western Church.",
  },
  {
    year: "1230",
    title: "Oblate at Monte Cassino",
    description:
      "At approximately five years old, Thomas was given as an oblate to the Benedictine abbey of Monte Cassino, the mother house of Western monasticism founded by St. Benedict himself. His family hoped he would eventually become abbot, bringing political advantage.",
    significance:
      "His early formation in Benedictine spirituality gave Thomas a lifelong devotion to liturgical prayer, lectio divina, and monastic discipline.",
  },
  {
    year: "1239",
    title: "Studies at the University of Naples",
    description:
      "When Monte Cassino was occupied by Frederick II's troops, Thomas was sent to the University of Naples, an imperial foundation. There he studied the trivium and quadrivium and first encountered the works of Aristotle, which had recently been translated into Latin from Arabic.",
    significance:
      "Naples introduced Thomas to the Aristotelian philosophy that would become the backbone of his entire theological synthesis.",
  },
  {
    year: "1244",
    title: "Joins the Dominican Order",
    description:
      "Against the fierce opposition of his aristocratic family, Thomas received the habit of the Order of Preachers (Dominicans) at the Priory of San Domenico Maggiore in Naples. The Dominicans were a mendicant order, and his family considered this a disgrace.",
    significance:
      "Choosing the mendicant life over the prestige of a Benedictine abbacy revealed Thomas's radical commitment to evangelical poverty and the intellectual apostolate.",
  },
  {
    year: "1244-1245",
    title: "Kidnapping and Imprisonment",
    description:
      "His brothers, acting on their mother's orders, intercepted Thomas on the road to Paris and imprisoned him in the family castle at Monte San Giovanni Campano for nearly two years. They even sent a woman to seduce him, but Thomas drove her from the room with a burning brand from the fireplace.",
    significance:
      "Thomas's steadfastness during captivity demonstrated the iron will beneath his quiet, contemplative exterior. Legend holds that angels girded him with a cord of perpetual chastity after this trial.",
  },
  {
    year: "1245",
    title: "Freed and Sent to Paris",
    description:
      "After about a year of imprisonment, Thomas was released (possibly with his mother's tacit consent) and sent to the Dominican studium generale in Paris, then the intellectual capital of Christendom.",
  },
  {
    year: "1245-1248",
    title: "Studies under Albert the Great in Paris",
    description:
      "Thomas studied under St. Albert the Great (Albertus Magnus), the most learned man of his age and a fellow Dominican. Albert recognized Thomas's genius despite his classmates' mockery of his corpulent, quiet demeanor — they called him 'the dumb ox.'",
    significance:
      "Albert reportedly said: 'You call him the dumb ox, but in his teaching he will one day produce such a bellowing as will be heard throughout the world.'",
  },
  {
    year: "1248-1252",
    title: "Studies under Albert in Cologne",
    description:
      "Thomas followed Albert to Cologne to help establish a new Dominican studium generale. He served as Albert's assistant and was ordained to the priesthood during this period. He began lecturing on Scripture as a biblical bachelor.",
  },
  {
    year: "1252-1256",
    title: "Bachelor of the Sentences at Paris",
    description:
      "Thomas returned to Paris to lecture on Peter Lombard's Sentences, the standard theological textbook of the medieval university. His commentary, the Scriptum super Sententiis, already displayed remarkable originality and mastery of both Aristotle and the Church Fathers.",
  },
  {
    year: "1256",
    title: "Inception as Master of Theology",
    description:
      "Thomas was made a Master of Theology at the University of Paris at the remarkably young age of about 31. The secular masters initially resisted admitting mendicants to their ranks, requiring papal intervention from Alexander IV.",
    significance:
      "His inaugural lecture marked the beginning of his career as a regent master, and he immediately began work on systematic theological questions.",
  },
  {
    year: "1256-1259",
    title: "First Parisian Regency",
    description:
      "During his first period as regent master in Paris, Thomas composed the De Veritate (Disputed Questions on Truth), the commentary on Boethius's De Trinitate, and began his Summa contra Gentiles. He also engaged in the heated controversy between secular and mendicant masters.",
  },
  {
    year: "1259-1265",
    title: "Teaching in Italy",
    description:
      "Thomas was assigned to teach at various Dominican houses in Italy: Orvieto (where the papal court resided), then Rome. At Orvieto he completed the Summa contra Gentiles and composed the Catena Aurea, a continuous commentary on the Gospels assembled from patristic texts.",
  },
  {
    year: "1264",
    title: "Composes the Office of Corpus Christi",
    description:
      "At the request of Pope Urban IV, Thomas composed the liturgical office for the newly instituted Feast of Corpus Christi. This includes the hymns Pange Lingua (with its final stanzas Tantum Ergo), Lauda Sion, Sacris Solemniis (including Panis Angelicus), and O Salutaris Hostia.",
    significance:
      "These eucharistic hymns remain among the most beloved in Catholic liturgy, demonstrating that Thomas was not merely a speculative thinker but a man of profound devotion and poetic sensibility.",
  },
  {
    year: "1265-1268",
    title: "Regent Master in Rome (Santa Sabina)",
    description:
      "Thomas established a new studium at the Dominican priory of Santa Sabina in Rome and began writing the Summa Theologiae, his masterwork. He also composed the Compendium Theologiae and continued his Aristotelian commentaries.",
    significance:
      "The Summa Theologiae was conceived as a comprehensive yet accessible synthesis of all theology for 'beginners' — though it became the greatest theological work ever written.",
  },
  {
    year: "1268-1272",
    title: "Second Parisian Regency",
    description:
      "Thomas returned to Paris for an unprecedented second regency to combat two threats: Latin Averroism (led by Siger of Brabant, who taught the eternity of the world and monopsychism) and a conservative Augustinian backlash against all Aristotelian philosophy. He fought on two fronts simultaneously.",
    significance:
      "This period produced his greatest polemical and commentarial works. Thomas showed that Aristotle, properly understood, was compatible with Christian faith — but also that Averroes had misread Aristotle.",
  },
  {
    year: "1268-1272",
    title: "Peak Literary Output",
    description:
      "During the second Paris period, Thomas produced an astonishing volume of work: the Secunda Pars of the Summa Theologiae, the De Malo, commentaries on nearly all of Aristotle's major works, and multiple disputed questions. His secretaries reported he could dictate to three or four scribes simultaneously on different topics.",
  },
  {
    year: "1272",
    title: "Returns to Naples to Establish Studium",
    description:
      "Thomas was recalled to Naples by the Dominican provincial chapter to establish a new studium generale at the priory of San Domenico Maggiore. He continued writing the Tertia Pars of the Summa Theologiae.",
  },
  {
    year: "1273",
    title: "The Mystical Experience",
    description:
      "On December 6, 1273, while celebrating Mass in the chapel of St. Nicholas in Naples, Thomas had a profound mystical experience after which he ceased all writing. When his socius Reginald of Piperno urged him to continue, Thomas replied: 'Reginald, I cannot, because all that I have written seems like straw to me.'",
    significance:
      "This event — whether a mystical vision, a stroke, or both — marks the boundary between human theological achievement and the beatific vision. Thomas recognized that even his greatest work was infinitely surpassed by the reality of God Himself.",
  },
  {
    year: "1274",
    title: "Journey to the Council of Lyon",
    description:
      "Despite his weakened state, Thomas was summoned by Pope Gregory X to attend the Second Council of Lyon, which aimed to reunite the Eastern and Western Churches. He set out in January 1274 but struck his head on a fallen tree branch along the road.",
  },
  {
    year: "1274",
    title: "Death at Fossanova",
    description:
      "Thomas was taken to the Cistercian abbey of Fossanova, where he died on March 7, 1274, at approximately 49 years of age. He was commenting on the Song of Songs when he died. His last words were reportedly a prayer of faith in the Real Presence of Christ in the Eucharist.",
    significance:
      "Thomas died in the same simplicity with which he had lived — a friar in a borrowed monastery, his great Summa left unfinished, having recognized that all theology is ultimately straw compared to the vision of God.",
  },
  {
    year: "1277",
    title: "Condemnations of 1277",
    description:
      "Three years after Thomas's death, Bishop Stephen Tempier of Paris condemned 219 propositions, some of which were held to implicate Thomas's teachings. The Franciscan Archbishop of Canterbury, Robert Kilwardby, issued a similar condemnation at Oxford.",
    significance:
      "This posthumous controversy demonstrated how radical Thomas's Aristotelian synthesis appeared to many contemporaries. It would take decades for his orthodoxy to be definitively vindicated.",
  },
  {
    year: "1323",
    title: "Canonization",
    description:
      "Thomas was canonized by Pope John XXII at Avignon on July 18, 1323, just 49 years after his death. The Pope reportedly said that Thomas had worked as many miracles as there are articles in the Summa. The 1277 condemnations were formally revoked.",
  },
  {
    year: "1567",
    title: "Declared Doctor of the Church",
    description:
      "Pope Pius V declared Thomas a Doctor of the Universal Church, ranking him alongside Ambrose, Augustine, Jerome, and Gregory the Great. His feast day was added to the universal calendar.",
    significance:
      "This made Thomas the fifth Doctor of the Church and underscored his unique authority as a theological guide for all Catholics.",
  },
  {
    year: "1879",
    title: "Aeterni Patris",
    description:
      "Pope Leo XIII issued the encyclical Aeterni Patris, mandating the study of Thomas Aquinas as the foundation of Catholic philosophy and theology in all seminaries and Catholic universities. This launched the Thomistic revival known as Neo-Scholasticism.",
    significance:
      "Leo XIII called Thomas 'the special bulwark and glory of the Catholic faith' and established him as the normative philosopher-theologian for Catholic intellectual life.",
  },
  {
    year: "1914",
    title: "The 24 Thomistic Theses",
    description:
      "Pope Pius X approved the 24 Thomistic Theses as the essential principles of Thomistic philosophy, to be used as norms for teaching in Catholic institutions.",
  },
  {
    year: "1917",
    title: "Code of Canon Law Mandate",
    description:
      "The 1917 Code of Canon Law (Canon 1366) prescribed that seminary professors must teach philosophy and theology 'according to the method, doctrine, and principles of the Angelic Doctor.' This was reiterated in the 1983 Code (Canon 252).",
  },
];

export const AQUINAS_COMPLETE_WORKS: AquinasWork[] = [
  // ========================
  // SUMMAE
  // ========================
  {
    title: "Summa Theologiae",
    latinTitle: "Summa Theologica",
    description:
      "Thomas's masterwork and the greatest theological synthesis ever written. Organized into three Parts (with the Second Part subdivided), containing 512 Questions, 2,669 Articles, and roughly 10,000 objections with replies. Covers the existence and nature of God, creation, the moral life, Christ, and the sacraments.",
    category: "summa",
    status: "incomplete",
    dateWritten: "1265-1273",
    significance:
      "Left unfinished after Thomas's mystical experience in December 1273. The Supplement was compiled by Reginald of Piperno from Thomas's earlier Sentences commentary. Remains the single most influential work of Catholic theology.",
  },
  {
    title: "Summa contra Gentiles",
    latinTitle: "Summa contra Gentiles",
    description:
      "A systematic defense of Catholic truth aimed at those outside the faith, particularly Islamic philosophers. Books I-III argue from natural reason alone; Book IV treats truths accessible only through revelation. Covers God's existence, His nature, creation, providence, and the Trinity.",
    category: "summa",
    status: "complete",
    dateWritten: "1259-1265",
    significance:
      "Often called the greatest work of apologetics ever written. Thomas demonstrates that faith and reason are complementary, not contradictory.",
  },

  // ========================
  // DISPUTED QUESTIONS
  // ========================
  {
    title: "On Truth",
    latinTitle: "Quaestiones Disputatae de Veritate",
    description:
      "29 disputed questions covering truth, God's knowledge, ideas, the Word, providence, predestination, the book of life, angelic knowledge, the mind, the teacher, prophecy, rapture, faith, reason, synderesis, conscience, grace, justification, Christ's knowledge, and the soul's knowledge after death.",
    category: "disputed",
    status: "complete",
    dateWritten: "1256-1259",
    significance:
      "Thomas's first great systematic work, demonstrating his mature method of disputation. Contains his most detailed treatment of truth, knowledge, and the divine ideas.",
  },
  {
    title: "On the Power of God",
    latinTitle: "Quaestiones Disputatae de Potentia Dei",
    description:
      "10 questions on God's power, generation, creation, the creation of formless matter, the conservation of things, miracles, the simplicity of the divine essence, the relations of the Trinity, the divine persons, and the procession of the persons.",
    category: "disputed",
    status: "complete",
    dateWritten: "1265-1266",
  },
  {
    title: "On Evil",
    latinTitle: "Quaestiones Disputatae de Malo",
    description:
      "16 questions on the nature of evil, original sin, the cause of sin, venial sin, and detailed treatments of each of the seven capital vices: vainglory, envy, sloth (acedia), avarice, gluttony, lust, and anger.",
    category: "disputed",
    status: "complete",
    dateWritten: "1269-1271",
    significance:
      "Thomas's most comprehensive treatment of moral evil and the capital vices. He argues that evil is not a substance but a privation of due good.",
  },
  {
    title: "On the Soul",
    latinTitle: "Quaestiones Disputatae de Anima",
    description:
      "21 articles on the nature of the human soul, its union with the body, its powers, and the intellect. Argues against Averroistic monopsychism (the thesis that there is only one intellect for all humans).",
    category: "disputed",
    status: "complete",
    dateWritten: "1269",
    significance:
      "Central to Thomas's battle against Latin Averroism. Demonstrates that each individual has their own personal intellect.",
  },
  {
    title: "On Spiritual Creatures",
    latinTitle: "Quaestiones Disputatae de Spiritualibus Creaturis",
    description:
      "11 articles on angels and the human soul, treating questions of composition (matter and form in spiritual beings), individuation, and the relationship between soul and body.",
    category: "disputed",
    status: "complete",
    dateWritten: "1267-1268",
  },
  {
    title: "On the Virtues",
    latinTitle: "Quaestiones Disputatae de Virtutibus",
    description:
      "Five questions: On the Virtues in General, On Charity, On Fraternal Correction, On Hope, and On the Cardinal Virtues. Treats whether virtues are habits, whether they are in the will, whether they can be lost, and detailed analyses of individual virtues.",
    category: "disputed",
    status: "complete",
    dateWritten: "1271-1272",
  },
  {
    title: "On the Union of the Incarnate Word",
    latinTitle: "Quaestio Disputata de Unione Verbi Incarnati",
    description:
      "A single disputed question with 5 articles on the hypostatic union of the divine and human natures in Christ, addressing the mode of union and its metaphysical implications.",
    category: "disputed",
    status: "complete",
    dateWritten: "1272",
  },

  // ========================
  // ARISTOTLE COMMENTARIES
  // ========================
  {
    title: "Commentary on the Physics",
    latinTitle: "In Physicam",
    description:
      "Detailed line-by-line commentary on Aristotle's Physics, covering the principles of natural philosophy, motion, change, place, time, the void, and the Prime Mover.",
    category: "commentary-aristotle",
    status: "complete",
    dateWritten: "1268-1269",
  },
  {
    title: "Commentary on the Metaphysics",
    latinTitle: "In Metaphysicam",
    description:
      "Commentary on Aristotle's Metaphysics, treating being qua being, substance, causality, potency and act, and the divine. Thomas transforms Aristotle's metaphysics by introducing the real distinction between essence and existence.",
    category: "commentary-aristotle",
    status: "incomplete",
    dateWritten: "1270-1272",
    significance:
      "Thomas's most important philosophical commentary. His reading of Aristotle through the lens of the essence-existence distinction produced a new metaphysics that transcends Aristotle.",
  },
  {
    title: "Commentary on the Nicomachean Ethics",
    latinTitle: "In Ethicam",
    description:
      "Commentary on Aristotle's Nicomachean Ethics, covering happiness, virtue, the intellectual and moral virtues, justice, friendship, and pleasure. Thomas carefully distinguishes natural and supernatural happiness.",
    category: "commentary-aristotle",
    status: "complete",
    dateWritten: "1271-1272",
  },
  {
    title: "Commentary on the Politics",
    latinTitle: "In Politicam",
    description:
      "Commentary on Aristotle's Politics, treating the nature of the state, the household, constitutions, and the best regime. Completed only through Book III, ch. 6.",
    category: "commentary-aristotle",
    status: "incomplete",
    dateWritten: "1272",
  },
  {
    title: "Commentary on the De Anima",
    latinTitle: "In De Anima",
    description:
      "Commentary on Aristotle's On the Soul, treating the definition of the soul, sensation, imagination, and intellection. Contains Thomas's critique of Averroes's interpretation of the agent intellect.",
    category: "commentary-aristotle",
    status: "complete",
    dateWritten: "1268",
    significance:
      "Key text in the anti-Averroist controversy. Thomas shows that Aristotle himself held that the intellect belongs to each individual person.",
  },
  {
    title: "Commentary on the Posterior Analytics",
    latinTitle: "In Posteriora Analytica",
    description:
      "Commentary on Aristotle's Posterior Analytics, treating the nature of scientific knowledge, demonstration, definition, and the first principles of science.",
    category: "commentary-aristotle",
    status: "complete",
    dateWritten: "1271-1272",
  },
  {
    title: "Commentary on the Perihermeneias",
    latinTitle: "In Perihermeneias",
    description:
      "Commentary on Aristotle's On Interpretation, treating propositions, truth and falsity, modal logic, and future contingents. Completed only through Book II, lesson 2.",
    category: "commentary-aristotle",
    status: "incomplete",
    dateWritten: "1270-1271",
  },
  {
    title: "Commentary on the De Caelo et Mundo",
    latinTitle: "In De Caelo et Mundo",
    description:
      "Commentary on Aristotle's On the Heavens, treating the nature of celestial bodies, the eternity of the world, and the elements. Completed only through Book III, lesson 8.",
    category: "commentary-aristotle",
    status: "incomplete",
    dateWritten: "1272-1273",
  },
  {
    title: "Commentary on the De Generatione et Corruptione",
    latinTitle: "In De Generatione et Corruptione",
    description:
      "Commentary on Aristotle's On Generation and Corruption, treating substantial change, the elements, and mixture. Completed only through Book I, lesson 17.",
    category: "commentary-aristotle",
    status: "incomplete",
    dateWritten: "1272-1273",
  },
  {
    title: "Commentary on the Meteora",
    latinTitle: "In Meteora",
    description:
      "Commentary on Aristotle's Meteorology, treating atmospheric and geological phenomena. Completed only through Book II, lesson 10.",
    category: "commentary-aristotle",
    status: "incomplete",
    dateWritten: "1269-1271",
  },
  {
    title: "Commentary on the De Sensu et Sensato",
    latinTitle: "In De Sensu et Sensato",
    description:
      "Commentary on Aristotle's On Sense and the Sensible, treating the nature of sensation, the objects of each sense, and common sensibles.",
    category: "commentary-aristotle",
    status: "complete",
    dateWritten: "1268-1269",
  },
  {
    title: "Commentary on the De Memoria et Reminiscentia",
    latinTitle: "In De Memoria et Reminiscentia",
    description:
      "Commentary on Aristotle's On Memory and Reminiscence, treating the nature of memory, the role of imagination, and the process of recollection.",
    category: "commentary-aristotle",
    status: "complete",
    dateWritten: "1268-1269",
  },

  // ========================
  // SCRIPTURE COMMENTARIES
  // ========================
  {
    title: "Commentary on Job",
    latinTitle: "Expositio super Iob ad litteram",
    description:
      "A literal commentary on the Book of Job, treating divine providence, the problem of evil, and the suffering of the innocent. Thomas rejects the allegorical approach in favor of a careful literal reading.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1261-1265",
    significance:
      "One of the finest medieval commentaries on Job. Thomas argues that the book's main theme is divine providence and that Job is vindicated because he speaks truly about God.",
  },
  {
    title: "Commentary on the Psalms",
    latinTitle: "In Psalmos Davidis Expositio",
    description:
      "Commentary on the first 54 Psalms. Thomas treats the Psalms as prophetic texts pointing to Christ and interprets them in light of the entire canon of Scripture.",
    category: "commentary-scripture",
    status: "incomplete",
    dateWritten: "1272-1273",
  },
  {
    title: "Commentary on Isaiah",
    latinTitle: "Expositio super Isaiam ad litteram",
    description:
      "A literal commentary on the Book of Isaiah, with special attention to the messianic prophecies and their fulfillment in Christ.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1252-1253",
  },
  {
    title: "Commentary on Jeremiah",
    latinTitle: "In Ieremiam",
    description:
      "Commentary on the Book of Jeremiah, based on Thomas's lectures. Treats themes of covenant, judgment, and the new covenant prophecy.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1252-1253",
  },
  {
    title: "Commentary on Lamentations",
    latinTitle: "In Threnos",
    description:
      "Commentary on the Lamentations of Jeremiah, treating the destruction of Jerusalem as both historical event and spiritual allegory.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1252-1253",
  },
  {
    title: "Commentary on Matthew",
    latinTitle: "Lectura super Matthaeum",
    description:
      "A reportatio (student transcription) of Thomas's lectures on the Gospel of Matthew. Covers the entire Gospel with attention to both literal and spiritual senses.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1256-1259",
  },
  {
    title: "Commentary on John",
    latinTitle: "Lectura super Ioannem",
    description:
      "Thomas's commentary on the Gospel of John, widely regarded as his finest scriptural commentary. Treats the Prologue's theology of the Word, the signs of Jesus, the Last Supper discourses, and the Passion narrative with extraordinary theological depth.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1270-1272",
    significance:
      "Considered by many scholars to be the greatest commentary on John's Gospel ever written. Thomas's treatment of the Prologue is a masterpiece of theological exegesis.",
  },
  {
    title: "Commentary on Romans",
    latinTitle: "Lectura super ad Romanos",
    description:
      "Commentary on St. Paul's Epistle to the Romans, treating justification, grace, predestination, law, and the relationship between Jews and Gentiles in God's plan of salvation.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1272-1273",
  },
  {
    title: "Commentary on 1 Corinthians",
    latinTitle: "Lectura super I ad Corinthios",
    description:
      "Commentary on St. Paul's First Epistle to the Corinthians, treating Church unity, wisdom, the Eucharist, the charisms, and the resurrection of the body.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1272-1273",
  },
  {
    title: "Commentary on 2 Corinthians",
    latinTitle: "Lectura super II ad Corinthios",
    description:
      "Commentary on St. Paul's Second Epistle to the Corinthians, treating apostolic ministry, the new covenant, and the relationship between suffering and glory.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1272-1273",
  },
  {
    title: "Commentary on Galatians",
    latinTitle: "Lectura super ad Galatas",
    description:
      "Commentary on St. Paul's Epistle to the Galatians, treating the relationship between the Mosaic Law and the Gospel, justification by faith, and Christian liberty.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on Ephesians",
    latinTitle: "Lectura super ad Ephesios",
    description:
      "Commentary on St. Paul's Epistle to the Ephesians, treating predestination, the mystery of the Church, the body of Christ, and the spiritual life.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on Philippians",
    latinTitle: "Lectura super ad Philippenses",
    description:
      "Commentary on St. Paul's Epistle to the Philippians, treating the kenosis hymn (Phil 2:5-11), humility, and the joy of the Christian life.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on Colossians",
    latinTitle: "Lectura super ad Colossenses",
    description:
      "Commentary on St. Paul's Epistle to the Colossians, treating the preeminence of Christ, the cosmic significance of the Incarnation, and the Christian moral life.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on 1 Thessalonians",
    latinTitle: "Lectura super I ad Thessalonicenses",
    description:
      "Commentary on St. Paul's First Epistle to the Thessalonians, treating the second coming of Christ, the resurrection of the dead, and watchfulness.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on 2 Thessalonians",
    latinTitle: "Lectura super II ad Thessalonicenses",
    description:
      "Commentary on St. Paul's Second Epistle to the Thessalonians, treating the Antichrist, eschatology, and the obligation to work.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on 1 Timothy",
    latinTitle: "Lectura super I ad Timotheum",
    description:
      "Commentary on St. Paul's First Epistle to Timothy, treating sound doctrine, the qualifications of bishops and deacons, and the ordering of the Church.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on 2 Timothy",
    latinTitle: "Lectura super II ad Timotheum",
    description:
      "Commentary on St. Paul's Second Epistle to Timothy, treating fidelity to the Gospel, suffering for the faith, and pastoral responsibility.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on Titus",
    latinTitle: "Lectura super ad Titum",
    description:
      "Commentary on St. Paul's Epistle to Titus, treating the qualifications of elders, sound doctrine, and the grace of God that brings salvation.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on Philemon",
    latinTitle: "Lectura super ad Philemonem",
    description:
      "Commentary on St. Paul's Epistle to Philemon, treating charity, fraternal relations, and the spiritual equality of master and slave in Christ.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1259-1265",
  },
  {
    title: "Commentary on Hebrews",
    latinTitle: "Lectura super ad Hebraeos",
    description:
      "Commentary on the Epistle to the Hebrews, treating Christ's superiority over angels, Moses, and the Levitical priesthood, and His eternal high priesthood.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1272-1273",
  },
  {
    title: "Catena Aurea",
    latinTitle: "Catena Aurea (Golden Chain)",
    description:
      "A continuous gloss on all four Gospels assembled from the writings of over 80 Church Fathers and ecclesiastical writers, both Greek and Latin. Thomas compiled patristic texts into a seamless running commentary, often using translations made specially for him.",
    category: "commentary-scripture",
    status: "complete",
    dateWritten: "1262-1268",
    significance:
      "A monument of patristic learning. Thomas drew on Greek Fathers largely unknown in the West, making the Catena a bridge between Eastern and Western exegetical traditions.",
  },

  // ========================
  // OPUSCULA
  // ========================
  {
    title: "On Being and Essence",
    latinTitle: "De Ente et Essentia",
    description:
      "An early but foundational treatise on metaphysics, treating the nature of being, essence, existence, substance, accident, and the real distinction between essence and existence in creatures. Written for his Dominican confreres.",
    category: "opuscula",
    status: "complete",
    dateWritten: "1252-1256",
    significance:
      "Contains the seeds of Thomas's entire metaphysical system, including the real distinction between essence (essentia) and existence (esse), which becomes the cornerstone of Thomistic philosophy.",
  },
  {
    title: "On the Unity of the Intellect",
    latinTitle: "De Unitate Intellectus contra Averroistas",
    description:
      "A polemical treatise against the Latin Averroists (especially Siger of Brabant) who held that there is only one possible intellect for all humans. Thomas argues from both Aristotle and reason that each person has their own individual intellect.",
    category: "opuscula",
    status: "complete",
    dateWritten: "1270",
    significance:
      "Thomas's most forceful philosophical polemic. He systematically demolishes the Averroist reading of Aristotle and defends personal intellectual immortality.",
  },
  {
    title: "On the Eternity of the World",
    latinTitle: "De Aeternitate Mundi",
    description:
      "A careful philosophical analysis of whether the world could have existed from eternity. Thomas argues that reason alone cannot demonstrate either that the world began in time or that it is eternal — this is known only through revelation.",
    category: "opuscula",
    status: "complete",
    dateWritten: "1271",
    significance:
      "A masterpiece of philosophical method, showing Thomas's willingness to follow arguments wherever they lead, even when the conclusion is uncomfortable for both Averroists and conservative theologians.",
  },
  {
    title: "Compendium of Theology",
    latinTitle: "Compendium Theologiae",
    description:
      "A concise summary of the entire Catholic faith organized around the three theological virtues: faith, hope, and charity. Treats God's existence and attributes, the Trinity, creation, Christology, and the last things.",
    category: "opuscula",
    status: "incomplete",
    dateWritten: "1265-1269",
  },
  {
    title: "On the Principles of Nature",
    latinTitle: "De Principiis Naturae",
    description:
      "An introductory treatise on Aristotelian natural philosophy, explaining matter, form, privation, the four causes, and the analogy of being.",
    category: "opuscula",
    status: "complete",
    dateWritten: "1252-1256",
  },
  {
    title: "On Kingship",
    latinTitle: "De Regno (De Regimine Principum)",
    description:
      "A treatise on political philosophy addressed to the King of Cyprus. Treats the best form of government (Thomas favors mixed monarchy), the duties of a king, and the relationship between temporal and spiritual authority.",
    category: "opuscula",
    status: "incomplete",
    dateWritten: "1265-1267",
  },
  {
    title: "On the Perfection of the Spiritual Life",
    latinTitle: "De Perfectione Spiritualis Vitae",
    description:
      "A defense of the mendicant religious life against secular masters who attacked the friars' claim to perfection. Treats the nature of evangelical perfection, the counsels, and the various states of life.",
    category: "opuscula",
    status: "complete",
    dateWritten: "1269-1270",
  },
  {
    title: "Against Those Who Attack Religious Life",
    latinTitle: "Contra Impugnantes Dei Cultum et Religionem",
    description:
      "A defense of the mendicant orders against William of Saint-Amour and other secular masters who sought to have the Dominicans and Franciscans expelled from the University of Paris.",
    category: "opuscula",
    status: "complete",
    dateWritten: "1256",
    significance:
      "Thomas's first published work, written at the height of the secular-mendicant controversy. A vigorous defense of the apostolic life combining poverty and teaching.",
  },
  {
    title: "On Separate Substances",
    latinTitle: "De Substantiis Separatis",
    description:
      "A treatise on the nature of angels, surveying the opinions of Plato, Aristotle, Avicenna, Averroes, and the Church Fathers on immaterial substances.",
    category: "opuscula",
    status: "incomplete",
    dateWritten: "1271-1273",
  },
  {
    title: "On the Mixture of the Elements",
    latinTitle: "De Mixtione Elementorum",
    description:
      "A short treatise on how the four elements combine in mixed bodies (compounds), addressing whether the forms of the elements remain or are destroyed in the mixture.",
    category: "opuscula",
    status: "complete",
    dateWritten: "1270-1271",
  },
  {
    title: "On the Articles of Faith and the Sacraments",
    latinTitle: "De Articulis Fidei et Ecclesiae Sacramentis",
    description:
      "A brief compendium of the articles of the Creed and the seven sacraments, written at the request of the Archbishop of Palermo as a guide for clergy.",
    category: "opuscula",
    status: "complete",
    dateWritten: "1261-1265",
  },
  {
    title: "Responses to Various Questions",
    latinTitle: "Responsiones ad Magistrum Ioannem de Vercellis",
    description:
      "Thomas's responses to 108 questions posed by the Dominican Master General John of Vercelli on various points of theology and Aristotelian philosophy.",
    category: "opuscula",
    status: "complete",
    dateWritten: "1265-1271",
  },

  // ========================
  // QUODLIBETAL QUESTIONS
  // ========================
  {
    title: "Quodlibetal Questions I-VI",
    latinTitle: "Quaestiones Quodlibetales I-VI",
    description:
      "Six sets of quodlibetal disputations from Thomas's second Parisian regency (1269-1272). In quodlibetal sessions, any member of the audience could raise any question, and the master had to respond. Topics range across theology, philosophy, ethics, and canon law.",
    category: "quodlibetal",
    status: "complete",
    dateWritten: "1269-1272",
    significance:
      "These demonstrate Thomas's extraordinary intellectual agility, as he had to address questions without preparation on any topic whatsoever.",
  },
  {
    title: "Quodlibetal Questions VII-XII",
    latinTitle: "Quaestiones Quodlibetales VII-XII",
    description:
      "Six sets of quodlibetal disputations from Thomas's Italian period and first Parisian regency. Includes important treatments of the relationship between theology and philosophy, the nature of grace, and moral questions.",
    category: "quodlibetal",
    status: "complete",
    dateWritten: "1256-1259",
  },

  // ========================
  // LITURGICAL
  // ========================
  {
    title: "Office of Corpus Christi",
    latinTitle: "Officium de Festo Corporis Christi",
    description:
      "The complete liturgical office for the Feast of Corpus Christi (the Body and Blood of Christ), including the hymns Pange Lingua, Sacris Solemniis, Verbum Supernum, and Lauda Sion, as well as antiphons, responsories, and the propers of the Mass.",
    category: "liturgical",
    status: "complete",
    dateWritten: "1264",
    significance:
      "These eucharistic hymns are among the most beautiful and theologically precise ever written. The Tantum Ergo (the last two stanzas of Pange Lingua) is sung at every Benediction of the Blessed Sacrament to this day.",
  },
  {
    title: "Adoro Te Devote",
    latinTitle: "Adoro Te Devote",
    description:
      "A eucharistic hymn of private devotion, expressing adoration of Christ present in the Blessed Sacrament. Often attributed to Thomas, though the attribution has been debated.",
    category: "liturgical",
    status: "complete",
    dateWritten: "c. 1264",
    significance:
      "One of the most beloved prayers in Catholic tradition. Contains the famous line: 'Seeing, touching, tasting are in Thee deceived; how says trusty hearing? That shall be believed.'",
  },

  // ========================
  // OTHER
  // ========================
  {
    title: "Commentary on Boethius's De Trinitate",
    latinTitle: "Expositio super Librum Boethii de Trinitate",
    description:
      "An exposition of Boethius's treatise on the Trinity that goes far beyond commentary to develop Thomas's own theory of the division of the sciences, the relationship between faith and reason, and the method of theology.",
    category: "other",
    status: "incomplete",
    dateWritten: "1257-1259",
    significance:
      "Contains Thomas's most detailed treatment of theological method and the division of speculative sciences into natural philosophy, mathematics, and metaphysics.",
  },
  {
    title: "Commentary on Boethius's De Hebdomadibus",
    latinTitle: "Expositio super Librum Boethii de Hebdomadibus",
    description:
      "A commentary on Boethius's treatise on how things can be good without being substantially good. Thomas uses it to develop his doctrine of participation and the distinction between being and goodness.",
    category: "other",
    status: "complete",
    dateWritten: "1256-1259",
  },
  {
    title: "Commentary on the Divine Names",
    latinTitle: "In Librum Beati Dionysii de Divinis Nominibus",
    description:
      "A commentary on Pseudo-Dionysius's On the Divine Names, treating the names we apply to God and the relationship between affirmative and negative theology. Thomas appropriates Dionysian themes into his own Aristotelian framework.",
    category: "other",
    status: "complete",
    dateWritten: "1265-1268",
  },
  {
    title: "Commentary on the Sentences",
    latinTitle: "Scriptum super Sententiis",
    description:
      "Thomas's commentary on Peter Lombard's four books of the Sentences, the standard theological textbook of the medieval university. Covers God, creation, the Incarnation, and the sacraments. Though an early work, it already displays Thomas's originality.",
    category: "other",
    status: "complete",
    dateWritten: "1252-1256",
    significance:
      "Thomas's first major theological work. Many topics treated here are revisited and refined in the Summa Theologiae. The Supplement to the Summa was compiled from Book IV of this commentary.",
  },
  {
    title: "Commentary on the Book of Causes",
    latinTitle: "In Librum de Causis Expositio",
    description:
      "A commentary on the Liber de Causis, a Neoplatonic text long attributed to Aristotle. Thomas was the first to correctly identify it as derived from Proclus's Elements of Theology, based on William of Moerbeke's new translation of Proclus.",
    category: "other",
    status: "complete",
    dateWritten: "1272",
    significance:
      "Demonstrates Thomas's critical acumen and his unique ability to integrate Neoplatonic and Aristotelian metaphysics.",
  },
  {
    title: "The Three Lenten Sermons",
    latinTitle: "Collationes in Decem Praeceptis / Collationes in Symbolum Apostolorum / Collationes in Orationem Dominicam",
    description:
      "Three sets of Lenten conferences delivered in the vernacular at Naples in 1273: on the Ten Commandments, the Apostles' Creed, and the Lord's Prayer. These popular sermons reveal Thomas the pastor and preacher.",
    category: "other",
    status: "complete",
    dateWritten: "1273",
    significance:
      "Among the last works Thomas produced before his mystical experience. They show that the greatest speculative theologian of the Middle Ages was also a gifted popular preacher.",
  },
  {
    title: "On the Commixture of the Elements to the Master of the Order",
    latinTitle: "De Operationibus Occultis Naturae",
    description:
      "A letter-treatise on occult natural operations, explaining how natural bodies can produce effects that go beyond the manifest qualities of the elements, through their substantial forms.",
    category: "other",
    status: "complete",
    dateWritten: "1269-1272",
  },
];
