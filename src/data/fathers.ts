export interface ChurchFather {
  name: string;
  lived: string;
  tradition: "latin" | "greek" | "syriac";
  majorWorks: string[];
  keyContributions: string[];
  bestQuote: string;
}

export const CHURCH_FATHERS: ChurchFather[] = [
  {
    name: "St. Augustine of Hippo",
    lived: "354–430",
    tradition: "latin",
    majorWorks: ["Confessions", "City of God", "On the Trinity", "On Christian Doctrine", "Enchiridion"],
    keyContributions: ["Theology of grace and original sin", "Just war theory", "Trinitarian psychology", "Philosophy of time"],
    bestQuote: "You have made us for yourself, O Lord, and our hearts are restless until they rest in you."
  },
  {
    name: "St. Jerome",
    lived: "347–420",
    tradition: "latin",
    majorWorks: ["Vulgate Bible", "Commentary on Isaiah", "Against Jovinian", "De Viris Illustribus"],
    keyContributions: ["Latin translation of the Bible", "Biblical scholarship and exegesis", "Monastic advocacy"],
    bestQuote: "Ignorance of Scripture is ignorance of Christ."
  },
  {
    name: "St. Ambrose of Milan",
    lived: "340–397",
    tradition: "latin",
    majorWorks: ["De Officiis", "De Sacramentis", "De Fide", "Hexaemeron"],
    keyContributions: ["Church-state relations", "Sacramental theology", "Hymn writing", "Conversion of Augustine"],
    bestQuote: "When in Rome, do as the Romans do."
  },
  {
    name: "St. Gregory the Great",
    lived: "540–604",
    tradition: "latin",
    majorWorks: ["Moralia in Job", "Pastoral Care", "Dialogues", "Homilies on the Gospels"],
    keyContributions: ["Pastoral theology", "Liturgical reform", "Gregorian chant", "Papal administration"],
    bestQuote: "The proof of love is in the works. Where love exists, it works great things."
  },
  {
    name: "St. Athanasius of Alexandria",
    lived: "296–373",
    tradition: "greek",
    majorWorks: ["On the Incarnation", "Against the Arians", "Life of Anthony", "Festal Letters"],
    keyContributions: ["Defense of Nicene Christology", "Articulation of Christ's divinity", "Canon of Scripture"],
    bestQuote: "God became man so that man might become god."
  },
  {
    name: "St. Basil the Great",
    lived: "330–379",
    tradition: "greek",
    majorWorks: ["On the Holy Spirit", "Hexaemeron", "The Long Rules", "The Short Rules"],
    keyContributions: ["Pneumatology", "Monastic rules", "Trinitarian theology", "Social justice"],
    bestQuote: "The bread you store up belongs to the hungry; the cloak that lies in your chest belongs to the naked."
  },
  {
    name: "St. Gregory of Nazianzus",
    lived: "329–390",
    tradition: "greek",
    majorWorks: ["Five Theological Orations", "Letters", "Poems", "Orations"],
    keyContributions: ["Trinitarian theology", "Christological precision", "Theological poetry"],
    bestQuote: "What has not been assumed has not been healed."
  },
  {
    name: "St. John Chrysostom",
    lived: "347–407",
    tradition: "greek",
    majorWorks: ["Homilies on Matthew", "Homilies on Romans", "On the Priesthood", "Homilies on John"],
    keyContributions: ["Biblical preaching", "Liturgical development", "Social ethics", "Eucharistic theology"],
    bestQuote: "Not to share our own wealth with the poor is theft from the poor and deprivation of their means of life."
  },
  {
    name: "St. Irenaeus of Lyon",
    lived: "130–202",
    tradition: "greek",
    majorWorks: ["Against Heresies", "Demonstration of the Apostolic Preaching"],
    keyContributions: ["Refutation of Gnosticism", "Recapitulation theory", "Apostolic succession", "Canon formation"],
    bestQuote: "The glory of God is a human being fully alive."
  },
  {
    name: "St. Justin Martyr",
    lived: "100–165",
    tradition: "greek",
    majorWorks: ["First Apology", "Second Apology", "Dialogue with Trypho"],
    keyContributions: ["Christian apologetics", "Logos theology", "Integration of philosophy and faith"],
    bestQuote: "Whatever things were rightly said among all men are the property of us Christians."
  },
  {
    name: "St. Clement of Alexandria",
    lived: "150–215",
    tradition: "greek",
    majorWorks: ["Protrepticus", "Paedagogus", "Stromata"],
    keyContributions: ["Christian philosophy", "Faith and reason synthesis", "Allegorical interpretation"],
    bestQuote: "All truth is God's truth."
  },
  {
    name: "Origen of Alexandria",
    lived: "184–253",
    tradition: "greek",
    majorWorks: ["De Principiis", "Contra Celsum", "Hexapla", "Commentaries"],
    keyContributions: ["Allegorical exegesis", "Systematic theology", "Textual criticism of Scripture"],
    bestQuote: "The Scriptures were written by the Spirit of God, and have a meaning, not such only as is apparent at first sight, but also another which escapes the notice of most."
  },
  {
    name: "St. Cyprian of Carthage",
    lived: "210–258",
    tradition: "latin",
    majorWorks: ["On the Unity of the Church", "On the Lapsed", "Letters"],
    keyContributions: ["Ecclesiology", "Sacramental theology", "Theology of martyrdom"],
    bestQuote: "He cannot have God for his Father who does not have the Church for his mother."
  },
  {
    name: "Tertullian",
    lived: "155–220",
    tradition: "latin",
    majorWorks: ["Apologeticum", "Against Marcion", "Against Praxeas", "De Praescriptione"],
    keyContributions: ["Latin theological vocabulary", "Trinitarian formula", "Apologetics"],
    bestQuote: "The blood of the martyrs is the seed of the Church."
  },
  {
    name: "St. Ephrem the Syrian",
    lived: "306–373",
    tradition: "syriac",
    majorWorks: ["Hymns on Paradise", "Commentary on the Diatessaron", "Hymns Against Heresies", "Nisibene Hymns"],
    keyContributions: ["Theological poetry", "Marian theology", "Liturgical hymns", "Anti-heretical writings"],
    bestQuote: "Blessed is the person who has been able to acquire knowledge, not to puff himself up, but to edify others."
  },
  {
    name: "St. Hilary of Poitiers",
    lived: "310–367",
    tradition: "latin",
    majorWorks: ["De Trinitate", "Commentary on Matthew", "Commentary on Psalms"],
    keyContributions: ["Defense of Nicene faith in the West", "Trinitarian theology", "Christology"],
    bestQuote: "Everything that exists is either God or from God."
  },
  {
    name: "St. Cyril of Alexandria",
    lived: "376–444",
    tradition: "greek",
    majorWorks: ["Against Nestorius", "Commentary on John", "Thesaurus", "Twelve Anathemas"],
    keyContributions: ["Hypostatic union", "Title Theotokos for Mary", "Council of Ephesus"],
    bestQuote: "For we do not say that the nature of the Word was changed and became flesh, but rather that the Word, having personally united to himself flesh animated by a rational soul, became man."
  },
  {
    name: "St. John of Damascus",
    lived: "676–749",
    tradition: "greek",
    majorWorks: ["An Exact Exposition of the Orthodox Faith", "Against Iconoclasts", "Sacra Parallela"],
    keyContributions: ["Systematic Eastern theology", "Defense of icons", "Synthesis of patristic thought"],
    bestQuote: "I do not worship matter; I worship the Creator of matter who became matter for my sake."
  },
  {
    name: "St. Leo the Great",
    lived: "400–461",
    tradition: "latin",
    majorWorks: ["Tome of Leo", "Sermons", "Letters"],
    keyContributions: ["Chalcedonian Christology", "Papal authority", "Two natures of Christ"],
    bestQuote: "Christian, recognize your dignity, and now that you share in God's own nature, do not return to your former base condition by sinning."
  },
  {
    name: "St. Maximus the Confessor",
    lived: "580–662",
    tradition: "greek",
    majorWorks: ["Ambigua", "Mystagogia", "Quaestiones ad Thalassium"],
    keyContributions: ["Dyothelitism (two wills of Christ)", "Cosmic Christology", "Deification theology"],
    bestQuote: "The one who loves God values knowledge of God more than anything created by God."
  },
  {
    name: "St. Gregory of Nyssa",
    lived: "335–395",
    tradition: "greek",
    majorWorks: ["Life of Moses", "On the Making of Man", "Great Catechism", "Against Eunomius"],
    keyContributions: ["Apophatic theology", "Epektasis (eternal progress)", "Universal restoration debates"],
    bestQuote: "Concepts create idols of God; only wonder understands."
  },
  {
    name: "St. Peter Chrysologus",
    lived: "406–450",
    tradition: "latin",
    majorWorks: ["Sermons (176 extant)"],
    keyContributions: ["Concise preaching", "Incarnational theology", "Liturgical instruction"],
    bestQuote: "He who would jestingly mock his neighbor should first consider himself."
  },
  {
    name: "St. Ignatius of Antioch",
    lived: "35–108",
    tradition: "greek",
    majorWorks: ["Seven Epistles"],
    keyContributions: ["Episcopal authority", "Real Presence of the Eucharist", "Theology of martyrdom"],
    bestQuote: "I am the wheat of God, and let me be ground by the teeth of the wild beasts, that I may be found the pure bread of Christ."
  },
  {
    name: "St. Polycarp of Smyrna",
    lived: "69–155",
    tradition: "greek",
    majorWorks: ["Letter to the Philippians"],
    keyContributions: ["Apostolic witness", "Link between apostles and later Fathers", "Theology of martyrdom"],
    bestQuote: "Eighty-six years I have served Him, and He has done me no wrong. How can I blaspheme my King and my Savior?"
  },
];
