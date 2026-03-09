export interface Doctor {
  name: string;
  title: string;
  lived: string;
  majorWorks: string[];
  theologicalContribution: string;
  aquinasConnection: string;
}

export const DOCTORS: Doctor[] = [
  {
    name: "St. Thomas Aquinas",
    title: "Doctor Angelicus (Angelic Doctor)",
    lived: "1225–1274",
    majorWorks: ["Summa Theologica", "Summa Contra Gentiles", "De Veritate", "Commentaries on Aristotle"],
    theologicalContribution: "Synthesized Aristotelian philosophy with Christian theology, establishing the foundations of Scholasticism and articulating the Five Ways of proving God's existence.",
    aquinasConnection: "The central figure himself. All other Doctors are studied in relation to his work."
  },
  {
    name: "St. Augustine of Hippo",
    title: "Doctor Gratiae (Doctor of Grace)",
    lived: "354–430",
    majorWorks: ["Confessions", "City of God", "On the Trinity", "On Christian Doctrine"],
    theologicalContribution: "Developed the theology of original sin, grace, and predestination. Established the framework for Western theology that Aquinas would later build upon.",
    aquinasConnection: "Aquinas cites Augustine more than any other Church Father. Augustine's theology of grace deeply influenced the Summa."
  },
  {
    name: "St. Jerome",
    title: "Doctor Maximus (Greatest Doctor)",
    lived: "347–420",
    majorWorks: ["Vulgate Bible", "Commentaries on Scripture", "Against Jovinian"],
    theologicalContribution: "Translated the Bible into Latin (the Vulgate), which became the standard text for over a millennium. Pioneer of biblical scholarship.",
    aquinasConnection: "Aquinas relied on Jerome's Vulgate translation and his scriptural commentaries throughout the Summa."
  },
  {
    name: "St. Ambrose of Milan",
    title: "Doctor Mellifluus",
    lived: "340–397",
    majorWorks: ["De Officiis", "De Sacramentis", "De Fide"],
    theologicalContribution: "Championed the independence of the Church from the state and developed sacramental theology. Instrumental in Augustine's conversion.",
    aquinasConnection: "Aquinas frequently cites Ambrose on the sacraments and moral theology."
  },
  {
    name: "St. Gregory the Great",
    title: "Doctor of the Church",
    lived: "540–604",
    majorWorks: ["Moralia in Job", "Pastoral Care", "Dialogues"],
    theologicalContribution: "Reformed the liturgy, established papal authority, and wrote extensively on pastoral theology and moral instruction.",
    aquinasConnection: "Aquinas cites Gregory's moral and spiritual theology extensively, especially the Moralia."
  },
  {
    name: "St. Athanasius of Alexandria",
    title: "Doctor of the Church",
    lived: "296–373",
    majorWorks: ["On the Incarnation", "Against the Arians", "Life of Anthony"],
    theologicalContribution: "Defended the divinity of Christ against Arianism. His theology of the Incarnation became foundational for Christology.",
    aquinasConnection: "Aquinas draws on Athanasius's Christology, especially regarding the hypostatic union in ST III."
  },
  {
    name: "St. Basil the Great",
    title: "Doctor of the Church",
    lived: "330–379",
    majorWorks: ["On the Holy Spirit", "Hexaemeron", "The Long Rules"],
    theologicalContribution: "Articulated the theology of the Holy Spirit and established monastic rules that shaped Eastern monasticism.",
    aquinasConnection: "Aquinas cites Basil on the Trinity, particularly regarding the procession of the Holy Spirit."
  },
  {
    name: "St. Gregory of Nazianzus",
    title: "The Theologian",
    lived: "329–390",
    majorWorks: ["Theological Orations", "Letters", "Poems"],
    theologicalContribution: "His five Theological Orations provided definitive articulation of Trinitarian theology at Constantinople.",
    aquinasConnection: "Aquinas draws on Gregory's Trinitarian theology in Prima Pars, qq. 27-43."
  },
  {
    name: "St. John Chrysostom",
    title: "Doctor of the Church",
    lived: "347–407",
    majorWorks: ["Homilies on Matthew", "Homilies on Romans", "On the Priesthood"],
    theologicalContribution: "Greatest preacher of the early Church. His scriptural homilies set the standard for biblical exegesis.",
    aquinasConnection: "Aquinas cites Chrysostom's scriptural commentaries extensively in the Catena Aurea."
  },
  {
    name: "St. Hilary of Poitiers",
    title: "Doctor of the Church",
    lived: "310–367",
    majorWorks: ["De Trinitate", "Commentary on Matthew"],
    theologicalContribution: "Known as the 'Athanasius of the West' for his defense of Nicene orthodoxy against Arianism in Gaul.",
    aquinasConnection: "Aquinas cites Hilary on the Trinity, particularly regarding the generation of the Son."
  },
  {
    name: "St. Cyril of Alexandria",
    title: "Doctor of the Church",
    lived: "376–444",
    majorWorks: ["Against Nestorius", "Commentary on John", "Thesaurus"],
    theologicalContribution: "Defended the title Theotokos for Mary and articulated the hypostatic union against Nestorianism at Ephesus.",
    aquinasConnection: "Aquinas relies heavily on Cyril's Christology in Tertia Pars."
  },
  {
    name: "St. Cyril of Jerusalem",
    title: "Doctor of the Church",
    lived: "313–386",
    majorWorks: ["Catechetical Lectures", "Mystagogical Catecheses"],
    theologicalContribution: "His catechetical lectures provide detailed instruction on the sacraments and the Creed for newly baptized Christians.",
    aquinasConnection: "Aquinas references Cyril's sacramental theology in his treatment of Baptism and the Eucharist."
  },
  {
    name: "St. John of Damascus",
    title: "Doctor of the Church",
    lived: "676–749",
    majorWorks: ["An Exact Exposition of the Orthodox Faith", "Against Iconoclasts"],
    theologicalContribution: "Systematized Eastern theology and defended the veneration of icons. His Exposition became the standard Eastern theological textbook.",
    aquinasConnection: "Aquinas cites John Damascene extensively — he is the most-cited Eastern Father in the Summa."
  },
  {
    name: "St. Ephrem the Syrian",
    title: "Doctor of the Church",
    lived: "306–373",
    majorWorks: ["Hymns on Paradise", "Commentary on the Diatessaron", "Hymns Against Heresies"],
    theologicalContribution: "Greatest poet-theologian of the Syriac tradition. Used hymns and poetry as vehicles for theological instruction.",
    aquinasConnection: "While less directly cited, Ephrem's Marian theology influenced the broader tradition Aquinas inherited."
  },
  {
    name: "St. Peter Chrysologus",
    title: "Doctor of the Church",
    lived: "406–450",
    majorWorks: ["Sermons (176 extant)"],
    theologicalContribution: "Known for concise, powerful sermons covering the Creed, the Lord's Prayer, and the Incarnation.",
    aquinasConnection: "Aquinas occasionally cites Chrysologus's sermons on the Incarnation and the virtues."
  },
  {
    name: "St. Leo the Great",
    title: "Doctor of the Church",
    lived: "400–461",
    majorWorks: ["Tome of Leo", "Sermons", "Letters"],
    theologicalContribution: "His Tome to Flavian defined the orthodox position on Christ's two natures at the Council of Chalcedon.",
    aquinasConnection: "Aquinas cites Leo's Christological formulations in Tertia Pars."
  },
  {
    name: "St. Peter Damian",
    title: "Doctor of the Church",
    lived: "1007–1072",
    majorWorks: ["Book of Gomorrah", "On Divine Omnipotence", "Letters"],
    theologicalContribution: "Monastic reformer who argued for the supremacy of theology over philosophy and the absolute power of God.",
    aquinasConnection: "Aquinas engaged with Damian's arguments about divine omnipotence, particularly whether God can change the past."
  },
  {
    name: "St. Anselm of Canterbury",
    title: "Doctor of the Church",
    lived: "1033–1109",
    majorWorks: ["Proslogion", "Monologion", "Cur Deus Homo", "De Veritate"],
    theologicalContribution: "Developed the ontological argument for God's existence and the satisfaction theory of the Atonement.",
    aquinasConnection: "Aquinas famously rejected Anselm's ontological argument (ST I, q.2, a.1) while engaging deeply with his other works."
  },
  {
    name: "St. Bernard of Clairvaux",
    title: "Doctor Mellifluus (Honey-Tongued Doctor)",
    lived: "1090–1153",
    majorWorks: ["On Loving God", "Sermons on the Song of Songs", "On Consideration"],
    theologicalContribution: "Mystical theologian who emphasized the role of love and experience in the spiritual life. Championed Marian devotion.",
    aquinasConnection: "Aquinas cites Bernard on charity, the spiritual life, and grace. Bernard represents the affective tradition complementing Aquinas's intellectual approach."
  },
  {
    name: "St. Isidore of Seville",
    title: "Doctor of the Church",
    lived: "560–636",
    majorWorks: ["Etymologies", "De Natura Rerum", "Sententiae"],
    theologicalContribution: "His Etymologies was the first encyclopedia, preserving classical learning for the medieval world.",
    aquinasConnection: "Aquinas used Isidore's etymological definitions and his organization of knowledge as a model for systematic theology."
  },
  {
    name: "St. Bede the Venerable",
    title: "Doctor of the Church",
    lived: "673–735",
    majorWorks: ["Ecclesiastical History", "Commentaries on Scripture", "De Temporum Ratione"],
    theologicalContribution: "Father of English history. His biblical commentaries and historical works preserved learning in the early medieval period.",
    aquinasConnection: "Aquinas occasionally cites Bede's scriptural commentaries in the Catena Aurea."
  },
  {
    name: "St. Bonaventure",
    title: "Doctor Seraphicus (Seraphic Doctor)",
    lived: "1221–1274",
    majorWorks: ["The Mind's Journey into God", "Breviloquium", "Commentary on the Sentences"],
    theologicalContribution: "Franciscan theologian who developed an Augustinian-Platonic alternative to Aquinas's Aristotelian approach.",
    aquinasConnection: "Aquinas's contemporary and friendly rival. They were both at the University of Paris and died the same year."
  },
  {
    name: "St. Albert the Great",
    title: "Doctor Universalis (Universal Doctor)",
    lived: "1200–1280",
    majorWorks: ["De Animalibus", "Commentaries on Aristotle", "Summa Theologiae"],
    theologicalContribution: "Pioneer of natural science within theology. Introduced the complete works of Aristotle to the Latin West.",
    aquinasConnection: "Albert was Aquinas's teacher at Cologne and Paris. He recognized Thomas's genius and defended his work after his death."
  },
  {
    name: "St. Anthony of Padua",
    title: "Doctor Evangelicus (Evangelical Doctor)",
    lived: "1195–1231",
    majorWorks: ["Sermones Dominicales", "Sermones Festivi"],
    theologicalContribution: "Powerful preacher known for his scriptural knowledge and his sermons against heresy.",
    aquinasConnection: "A Franciscan contemporary whose homiletical approach complemented the scholastic method Aquinas would perfect."
  },
  {
    name: "St. Catherine of Siena",
    title: "Doctor of the Church",
    lived: "1347–1380",
    majorWorks: ["The Dialogue", "Letters (380+)", "Prayers"],
    theologicalContribution: "Mystic and political activist who influenced the return of the papacy to Rome. Her Dialogue is a masterwork of mystical theology.",
    aquinasConnection: "Catherine was a Dominican tertiary deeply influenced by Thomistic theology. She received her theological formation from Thomist friars."
  },
  {
    name: "St. Teresa of Avila",
    title: "Doctor of the Church",
    lived: "1515–1582",
    majorWorks: ["Interior Castle", "The Way of Perfection", "Autobiography"],
    theologicalContribution: "Reformed the Carmelite Order and wrote definitive works on mystical prayer and the stages of the spiritual life.",
    aquinasConnection: "Teresa's understanding of the soul's faculties reflects Thomistic anthropology, particularly the intellect-will relationship."
  },
  {
    name: "St. John of the Cross",
    title: "Doctor Mysticus (Mystical Doctor)",
    lived: "1542–1591",
    majorWorks: ["Dark Night of the Soul", "Ascent of Mount Carmel", "Spiritual Canticle"],
    theologicalContribution: "Supreme mystical theologian who described the purgative, illuminative, and unitive ways of prayer with unmatched precision.",
    aquinasConnection: "John studied Aquinas at Salamanca. His mystical theology builds on Thomistic metaphysics and psychology."
  },
  {
    name: "St. Robert Bellarmine",
    title: "Doctor of the Church",
    lived: "1542–1621",
    majorWorks: ["Disputationes", "De Romano Pontifice", "Catechism"],
    theologicalContribution: "Greatest Counter-Reformation apologist. His Disputationes systematically defended Catholic doctrine against Protestant objections.",
    aquinasConnection: "Bellarmine's apologetics are thoroughly Thomistic. He deployed Aquinas's arguments in defense of papal authority and the sacraments."
  },
  {
    name: "St. Peter Canisius",
    title: "Doctor of the Church",
    lived: "1521–1597",
    majorWorks: ["Catechisms (Major, Minor, Shortest)", "Summa Doctrinae Christianae"],
    theologicalContribution: "Second Apostle of Germany. His catechisms reclaimed much of Central Europe from Protestantism.",
    aquinasConnection: "Canisius's catechetical method draws directly on the structure and content of the Summa Theologica."
  },
  {
    name: "St. Lawrence of Brindisi",
    title: "Doctor Apostolicus",
    lived: "1559–1619",
    majorWorks: ["Opera Omnia (15 volumes)", "Mariale", "Lutheranismi Hypotyposis"],
    theologicalContribution: "Multilingual Capuchin who preached in multiple languages and wrote extensive scriptural commentaries.",
    aquinasConnection: "Lawrence's systematic approach to Scripture and theology reflects Thomistic methodology."
  },
  {
    name: "St. Francis de Sales",
    title: "Doctor of the Church",
    lived: "1567–1622",
    majorWorks: ["Introduction to the Devout Life", "Treatise on the Love of God"],
    theologicalContribution: "Made holiness accessible to laypeople. Pioneer of spiritual direction and the universal call to holiness.",
    aquinasConnection: "Francis's moral theology is deeply Thomistic. His understanding of the will, the virtues, and charity draws on Aquinas."
  },
  {
    name: "St. Alphonsus Liguori",
    title: "Doctor Zelantissimus (Most Zealous Doctor)",
    lived: "1696–1787",
    majorWorks: ["Moral Theology", "The Glories of Mary", "Visits to the Blessed Sacrament"],
    theologicalContribution: "Patron of moral theologians. Developed equiprobabilism as a middle way between rigorism and laxism.",
    aquinasConnection: "Alphonsus's moral theology is built on Thomistic foundations, particularly the treatise on law and the virtues."
  },
  {
    name: "St. Therese of Lisieux",
    title: "Doctor of the Church",
    lived: "1873–1897",
    majorWorks: ["Story of a Soul", "Letters", "Poems"],
    theologicalContribution: "Developed the 'Little Way' of spiritual childhood — sanctity through small acts of love. Patron of missions.",
    aquinasConnection: "Therese's 'Little Way' can be read as a lived application of Aquinas's teaching on charity as the form of all virtues."
  },
  {
    name: "St. Hildegard of Bingen",
    title: "Doctor of the Church",
    lived: "1098–1179",
    majorWorks: ["Scivias", "Liber Divinorum Operum", "Physica"],
    theologicalContribution: "Visionary mystic, composer, and polymath who developed a cosmic theology integrating creation, redemption, and the human person.",
    aquinasConnection: "Hildegard's cosmological vision, while different in method, shares Aquinas's conviction that creation reveals the Creator."
  },
  {
    name: "St. Gregory of Narek",
    title: "Doctor of the Church",
    lived: "951–1003",
    majorWorks: ["Book of Lamentations (Narek)", "Commentary on Song of Songs"],
    theologicalContribution: "Greatest Armenian theologian. His Book of Lamentations is a masterpiece of mystical prayer and penitential theology.",
    aquinasConnection: "Gregory of Narek represents the Armenian theological tradition, which shares many Thomistic concerns about divine attributes and human nature."
  },
  {
    name: "St. Irenaeus of Lyon",
    title: "Doctor of the Church",
    lived: "130–202",
    majorWorks: ["Against Heresies", "Demonstration of the Apostolic Preaching"],
    theologicalContribution: "First systematic theologian. Articulated recapitulation theory and defended apostolic tradition against Gnosticism.",
    aquinasConnection: "Irenaeus's defense of tradition and his theology of creation deeply influenced the Catholic intellectual tradition Aquinas inherited."
  },
];
