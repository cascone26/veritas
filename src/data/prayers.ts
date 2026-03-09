export interface Prayer {
  title: string;
  author: string;
  occasion: string;
  text: string;
  relatedTopics: string[];
}

export const PRAYERS: Prayer[] = [
  {
    title: "Prayer Before Study",
    author: "St. Thomas Aquinas",
    occasion: "Study & Learning",
    text: "Creator of all things, true Source of light and wisdom, lofty Origin of all being, graciously let a ray of Your brilliance penetrate into the darkness of my understanding and take from me the double darkness in which I have been born, an obscurity of both sin and ignorance. Give me a sharp sense of understanding, a retentive memory, and the ability to grasp things correctly and fundamentally. Grant me the talent of being exact in my explanations, and the ability to express myself with thoroughness and charm. Point out the beginning, direct the progress, and help in completion; through Christ our Lord. Amen.",
    relatedTopics: ["Aquinas", "Study", "Wisdom", "Prayer"]
  },
  {
    title: "Prayer After Study",
    author: "St. Thomas Aquinas",
    occasion: "Study & Learning",
    text: "I thank You, Lord our God, for all the benefits which You have given me, for all the pains and insults You have borne for me. O most merciful Redeemer, Friend, and Brother, may I know You more clearly, love You more dearly, and follow You more nearly, day by day. Amen.",
    relatedTopics: ["Aquinas", "Gratitude", "Study"]
  },
  {
    title: "Anima Christi",
    author: "Traditional (attributed to various sources)",
    occasion: "Eucharistic Devotion",
    text: "Soul of Christ, sanctify me.\nBody of Christ, save me.\nBlood of Christ, inebriate me.\nWater from the side of Christ, wash me.\nPassion of Christ, strengthen me.\nO good Jesus, hear me.\nWithin Your wounds, hide me.\nPermit me not to be separated from You.\nFrom the wicked foe, defend me.\nAt the hour of my death, call me\nand bid me come to You,\nthat with Your Saints I may praise You\nforever and ever. Amen.",
    relatedTopics: ["Eucharist", "Christ", "Devotion"]
  },
  {
    title: "Adoro Te Devote",
    author: "St. Thomas Aquinas",
    occasion: "Eucharistic Devotion",
    text: "Godhead here in hiding, whom I do adore,\nMasked by these bare shadows, shape and nothing more,\nSee, Lord, at Thy service low lies here a heart\nLost, all lost in wonder at the God Thou art.\n\nSeeing, touching, tasting are in Thee deceived:\nHow says trusty hearing? That shall be believed;\nWhat God's Son has told me, take for truth I do;\nTruth Himself speaks truly or there's nothing true.\n\nOn the cross Thy Godhead made no sign to men,\nHere Thy very manhood steals from human ken:\nBoth are my confession, both are my belief,\nAnd I pray the prayer of the dying thief.\n\nI am not like Thomas, wounds I cannot see,\nBut can plainly call Thee Lord and God as he;\nLet me to a deeper faith daily nearer move,\nDaily make me harder hope and dearer love.\n\nO thou our reminder of Christ crucified,\nLiving Bread, the life of us for whom He died,\nLend this life to me then: feed and feast my mind,\nThere be Thou the sweetness man was meant to find.\n\nJesu, whom I look at shrouded here below,\nI beseech Thee send me what I thirst for so,\nSome day to gaze on Thee face to face in light\nAnd be blest forever with Thy glory's sight. Amen.",
    relatedTopics: ["Eucharist", "Aquinas", "Transubstantiation", "Faith"]
  },
  {
    title: "Pange Lingua Gloriosi Corporis Mysterium",
    author: "St. Thomas Aquinas",
    occasion: "Eucharistic Devotion",
    text: "Sing, my tongue, the Savior's glory,\nOf His Flesh the mystery sing;\nOf the Blood, all price exceeding,\nShed by our immortal King,\nDestined, for the world's redemption,\nFrom a noble womb to spring.\n\nOf a pure and spotless Virgin\nBorn for us on earth below,\nHe, as Man, with man conversing,\nStayed, the seeds of truth to sow;\nThen He closed in solemn order\nWondrously His life of woe.\n\nOn the night of that Last Supper,\nSeated with His chosen band,\nHe the Pascal victim eating,\nFirst fulfills the Law's command;\nThen as Food to His Apostles\nGives Himself with His own hand.\n\nWord made Flesh, the bread of nature\nBy His word to Flesh He turns;\nWine into His Blood He changes;\nWhat though sense no change discerns?\nOnly be the heart in earnest,\nFaith her lesson quickly learns.\n\nDown in adoration falling,\nLo! the sacred Host we hail;\nLo! o'er ancient forms departing,\nNewer rites of grace prevail;\nFaith for all defects supplying,\nWhere the feeble senses fail.\n\nTo the everlasting Father,\nAnd the Son who reigns on high,\nWith the Holy Ghost proceeding\nForth from Each eternally,\nBe salvation, honor, blessing,\nMight, and endless majesty. Amen.",
    relatedTopics: ["Eucharist", "Aquinas", "Corpus Christi", "Hymn"]
  },
  {
    title: "Suscipe (Take, Lord, Receive)",
    author: "St. Ignatius of Loyola",
    occasion: "Surrender & Offering",
    text: "Take, Lord, and receive all my liberty,\nmy memory, my understanding,\nand my entire will,\nall I have and call my own.\n\nYou have given all to me.\nTo You, Lord, I return it.\n\nEverything is Yours; do with it what You will.\nGive me only Your love and Your grace,\nthat is enough for me. Amen.",
    relatedTopics: ["Surrender", "Grace", "Ignatian Spirituality"]
  },
  {
    title: "Memorare",
    author: "Traditional (attributed to St. Bernard of Clairvaux)",
    occasion: "Marian Devotion",
    text: "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired by this confidence, I fly unto thee, O Virgin of virgins, my Mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.",
    relatedTopics: ["Mary", "Intercession", "Marian Devotion"]
  },
  {
    title: "Sub Tuum Praesidium",
    author: "Traditional (earliest known Marian prayer, c. 250 AD)",
    occasion: "Marian Devotion",
    text: "We fly to thy protection, O holy Mother of God. Despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin. Amen.",
    relatedTopics: ["Mary", "Protection", "Early Church"]
  },
  {
    title: "Salve Regina",
    author: "Traditional (attributed to Hermann of Reichenau, c. 1050)",
    occasion: "Marian Devotion",
    text: "Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.\n\nV. Pray for us, O holy Mother of God.\nR. That we may be made worthy of the promises of Christ. Amen.",
    relatedTopics: ["Mary", "Rosary", "Mercy"]
  },
  {
    title: "Prayer for the Faithful Departed",
    author: "Traditional",
    occasion: "Death & Purgatory",
    text: "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May the souls of all the faithful departed, through the mercy of God, rest in peace. Amen.",
    relatedTopics: ["Purgatory", "Death", "Mercy", "Eschatology"]
  },
  {
    title: "St. Michael the Archangel Prayer",
    author: "Pope Leo XIII",
    occasion: "Spiritual Warfare",
    text: "Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil; may God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, thrust into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.",
    relatedTopics: ["Angels", "Spiritual Warfare", "Protection"]
  },
  {
    title: "Veni Creator Spiritus",
    author: "Rabanus Maurus (attributed)",
    occasion: "Holy Spirit",
    text: "Come, Holy Spirit, Creator blest,\nand in our souls take up Thy rest;\ncome with Thy grace and heavenly aid\nto fill the hearts which Thou hast made.\n\nO comforter, to Thee we cry,\nO heavenly gift of God Most High,\nO fount of life and fire of love,\nand sweet anointing from above.\n\nThou in Thy sevenfold gifts are known;\nThou, finger of God's hand we own;\nThou, promise of the Father, Thou\nWho dost the tongue with power endow.\n\nKindle our senses from above,\nand make our hearts o'erflow with love;\nwith patience firm and virtue high\nthe weakness of our flesh supply.\n\nFar from us drive the foe we dread,\nand grant us Thy peace instead;\nso shall we not, with Thee for guide,\nturn from the path of life aside.\n\nOh, may Thy grace on us bestow\nthe Father and the Son to know;\nand Thee, through endless times confessed,\nof both the eternal Spirit blest.\n\nNow to the Father and the Son,\nWho rose from death, be glory given,\nwith Thou, O Holy Comforter,\nhenceforth by all in earth and heaven. Amen.",
    relatedTopics: ["Holy Spirit", "Pentecost", "Gifts of the Holy Spirit"]
  },
  {
    title: "Te Deum",
    author: "Traditional (attributed to Sts. Ambrose and Augustine)",
    occasion: "Praise & Thanksgiving",
    text: "We praise Thee, O God: we acknowledge Thee to be the Lord.\nAll the earth doth worship Thee, the Father everlasting.\nTo Thee all Angels cry aloud, the Heavens and all the Powers therein.\nTo Thee Cherubim and Seraphim continually do cry:\nHoly, Holy, Holy, Lord God of Hosts!\nHeaven and earth are full of the majesty of Thy glory.\nThe glorious company of the Apostles praise Thee.\nThe goodly fellowship of the Prophets praise Thee.\nThe noble army of Martyrs praise Thee.\nThe holy Church throughout all the world doth acknowledge Thee:\nThe Father of an infinite Majesty;\nThine adorable, true, and only Son;\nAlso the Holy Ghost, the Comforter.\nThou art the King of glory, O Christ.\nThou art the everlasting Son of the Father. Amen.",
    relatedTopics: ["Praise", "Trinity", "Liturgy"]
  },
  {
    title: "Tantum Ergo",
    author: "St. Thomas Aquinas",
    occasion: "Eucharistic Devotion",
    text: "Down in adoration falling,\nLo! the sacred Host we hail,\nLo! o'er ancient forms departing\nNewer rites of grace prevail;\nFaith for all defects supplying,\nWhere the feeble senses fail.\n\nTo the everlasting Father,\nAnd the Son Who reigns on high\nWith the Holy Spirit proceeding\nForth from each eternally,\nBe salvation, honor, blessing,\nMight and endless majesty. Amen.\n\nV. Thou hast given them bread from heaven.\nR. Having all sweetness within it.",
    relatedTopics: ["Eucharist", "Aquinas", "Benediction", "Adoration"]
  },
  {
    title: "Act of Contrition",
    author: "Traditional",
    occasion: "Confession & Repentance",
    text: "O my God, I am heartily sorry for having offended Thee, and I detest all my sins because I dread the loss of Heaven and the pains of Hell; but most of all because they offend Thee, my God, Who art all-good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen.",
    relatedTopics: ["Confession", "Repentance", "Sacrament of Reconciliation"]
  },
  {
    title: "Morning Offering",
    author: "Traditional (Apostleship of Prayer)",
    occasion: "Daily Devotion",
    text: "O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day for all the intentions of Your Sacred Heart, in union with the Holy Sacrifice of the Mass throughout the world, for the salvation of souls, the reparation for sins, the reunion of all Christians, and in particular for the intentions of the Holy Father this month. Amen.",
    relatedTopics: ["Sacred Heart", "Mary", "Daily Life", "Offering"]
  },
  {
    title: "Breastplate of St. Patrick",
    author: "St. Patrick (attributed)",
    occasion: "Protection & Daily Devotion",
    text: "Christ with me, Christ before me, Christ behind me,\nChrist in me, Christ beneath me, Christ above me,\nChrist on my right, Christ on my left,\nChrist when I lie down, Christ when I sit down, Christ when I arise,\nChrist in the heart of every man who thinks of me,\nChrist in the mouth of everyone who speaks of me,\nChrist in every eye that sees me,\nChrist in every ear that hears me.\n\nI arise today through a mighty strength,\nthe invocation of the Trinity,\nthrough belief in the Threeness,\nthrough confession of the Oneness\nof the Creator of creation. Amen.",
    relatedTopics: ["Protection", "Trinity", "Celtic Spirituality"]
  },
  {
    title: "Prayer of St. Francis",
    author: "Traditional (attributed to St. Francis of Assisi)",
    occasion: "Peace & Service",
    text: "Lord, make me an instrument of Your peace:\nwhere there is hatred, let me sow love;\nwhere there is injury, pardon;\nwhere there is doubt, faith;\nwhere there is despair, hope;\nwhere there is darkness, light;\nwhere there is sadness, joy.\n\nO divine Master, grant that I may not so much seek\nto be consoled as to console,\nto be understood as to understand,\nto be loved as to love.\nFor it is in giving that we receive,\nit is in pardoning that we are pardoned,\nand it is in dying that we are born to eternal life. Amen.",
    relatedTopics: ["Peace", "Service", "Franciscan Spirituality"]
  },
  {
    title: "Nicene Creed",
    author: "Council of Nicaea (325) / Constantinople (381)",
    occasion: "Profession of Faith",
    text: "I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible.\n\nI believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate, he suffered death and was buried, and rose again on the third day in accordance with the Scriptures. He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end.\n\nI believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets.\n\nI believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come. Amen.",
    relatedTopics: ["Trinity", "Creed", "Christology", "Council of Nicaea"]
  },
];
