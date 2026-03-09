// =============================================================================
// MARIAN ENCYCLOPEDIA
// =============================================================================
// The four Marian dogmas with full theological detail, and a comprehensive
// list of Marian titles from Scripture, Tradition, and liturgy.
// =============================================================================

export interface MarianDogma {
  name: string;
  yearDefined: string;
  definition: string;
  scripturalBasis: string[];
  patristicWitness: string;
  aquinasTeaching: string;
  commonObjection: string;
  response: string;
}

export interface MarianTitle {
  title: string;
  meaning: string;
}

export const MARIAN_DOGMAS: MarianDogma[] = [
  {
    name: "Divine Motherhood (Theotokos)",
    yearDefined: "431 (Council of Ephesus)",
    definition:
      "Mary is truly the Mother of God (Theotokos), because she conceived and bore the Second Person of the Holy Trinity according to His human nature. The one she bore is not merely a human person joined to God, but is the eternal Son of God Himself, who assumed human nature in her womb.",
    scripturalBasis: [
      "Luke 1:43 \u2014 Elizabeth, filled with the Holy Spirit, greets Mary as 'the mother of my Lord,' using the divine title Kyrios.",
      "Galatians 4:4 \u2014 'God sent forth his Son, born of woman' \u2014 the one born of Mary is the pre-existent Son of God.",
      "Luke 1:35 \u2014 'The Holy Spirit will come upon you, and the power of the Most High will overshadow you; therefore the child to be born will be called holy \u2014 the Son of God.'",
      "John 1:14 \u2014 'The Word became flesh' \u2014 the subject of the Incarnation is the divine Word, not a human person.",
    ],
    patristicWitness:
      "St. Ignatius of Antioch (d. 107) wrote that 'our God, Jesus Christ, was carried in the womb of Mary.' St. Irenaeus (d. 202) taught that 'the Virgin Mary, being obedient, became the cause of salvation for herself and for the whole human race.' St. Cyril of Alexandria championed the title Theotokos against Nestorius at Ephesus, arguing that to deny it is to divide Christ into two persons.",
    aquinasTeaching:
      "Aquinas teaches (ST III, q. 35, a. 4) that the Blessed Virgin is truly called the Mother of God, not because she gave origin to the divine nature, but because she generated the human nature that was assumed by the divine Person. Since motherhood is a relation to a person (not to a nature), and the Person born of Mary is God, Mary is rightly called Theotokos. This title is primarily a Christological statement: it safeguards the unity of Christ's Person.",
    commonObjection:
      "Mary is only the mother of Christ's human nature, not of His divinity. Calling her 'Mother of God' confuses His two natures.",
    response:
      "Motherhood is a relationship to a person, not to a nature. A human mother does not generate her child's soul (which is created directly by God), yet she is truly the mother of her child \u2014 the whole person. Similarly, Mary did not generate the divine nature, but the Person she bore is God the Son. To deny the title Theotokos is to divide Christ into two persons, which is the Nestorian heresy condemned at Ephesus (431). CCC 466, 495.",
  },
  {
    name: "Perpetual Virginity",
    yearDefined: "553 (Second Council of Constantinople)",
    definition:
      "Mary was a virgin before, during, and after the birth of Christ (ante partum, in partu, et post partum). She conceived Jesus by the power of the Holy Spirit without the seed of man, gave birth without any loss of virginal integrity, and remained a virgin for the entirety of her life.",
    scripturalBasis: [
      "Isaiah 7:14 \u2014 'The virgin shall conceive and bear a son' \u2014 the sign requires virginal conception.",
      "Luke 1:34 \u2014 Mary's response 'How can this be, since I have no husband?' implies a commitment to virginity, not merely present circumstances.",
      "Ezekiel 44:2 \u2014 'This gate shall remain shut; it shall not be opened, and no one shall enter by it, for the Lord, the God of Israel, has entered by it' \u2014 traditionally interpreted as a figure of Mary's perpetual virginity.",
      "John 19:26-27 \u2014 Jesus entrusts Mary to John, which would be inexplicable if she had other children to care for her.",
    ],
    patristicWitness:
      "The perpetual virginity of Mary was virtually universal among the Church Fathers. St. Jerome (d. 420) wrote 'Against Helvidius' specifically to refute the claim that Mary had other children. St. Athanasius, St. Basil, St. Gregory of Nyssa, St. Ambrose, and St. Augustine all taught it. The Protoevangelium of James (c. 150) attests to the early belief in Mary's virginity before, during, and after birth.",
    aquinasTeaching:
      "Aquinas defends Mary's perpetual virginity extensively in ST III, q. 28. He argues that it would be unfitting for the womb that bore God Incarnate to bear any other child, just as the holy vessels of the Temple were set apart for sacred use alone. He also holds that the 'brothers of Jesus' mentioned in the Gospels were cousins or close relatives, following the common Semitic usage of 'brother' (adelphos). Mary's virginity manifests the exclusive character of her spousal relationship with God.",
    commonObjection:
      "The Gospels mention Jesus' brothers and sisters (Mark 6:3, Matthew 13:55). Mary must have had other children after Jesus.",
    response:
      "The Greek word adelphos ('brother') in Semitic usage encompasses cousins, nephews, and other close relatives \u2014 as seen throughout the Old Testament (e.g., Abraham calls his nephew Lot his 'brother' in Genesis 13:8). James and Joseph, named as Jesus' 'brothers,' are identified elsewhere as sons of another Mary (Matthew 27:56, Mark 15:40). If Mary had other sons, Jesus would not have entrusted her to John at the Cross (John 19:26-27). The universal witness of the early Church confirms Mary's perpetual virginity. CCC 499-501.",
  },
  {
    name: "Immaculate Conception",
    yearDefined: "1854 (Pope Pius IX, Ineffabilis Deus)",
    definition:
      "The Blessed Virgin Mary, from the first instant of her conception, by a singular grace and privilege of Almighty God and in view of the merits of Jesus Christ the Savior of the human race, was preserved free from all stain of original sin. She was redeemed by Christ, but in a preventive rather than restorative manner \u2014 preserved from sin rather than freed from it after the fact.",
    scripturalBasis: [
      "Genesis 3:15 \u2014 The 'woman' whose seed crushes the serpent's head is understood as sharing in a total enmity with Satan, incompatible with any bondage to sin.",
      "Luke 1:28 \u2014 The angel's greeting 'Hail, full of grace' (kecharitomene) uses a perfect passive participle indicating a completed, permanent state of grace prior to the Annunciation.",
      "Luke 1:42 \u2014 'Blessed are you among women, and blessed is the fruit of your womb' \u2014 Mary's blessedness parallels and is ordered to the blessedness of Christ.",
      "Song of Songs 4:7 \u2014 'You are altogether beautiful, my love; there is no flaw in you' \u2014 applied to Mary in the liturgical tradition.",
    ],
    patristicWitness:
      "The Fathers consistently taught Mary's exceptional holiness. St. Ephrem the Syrian (d. 373) wrote: 'You and your Mother are the only ones who are in every way beautiful; for in you, Lord, there is no spot, and in your Mother no stain.' St. Augustine (d. 430) said that when speaking of sin, he wished to make no mention whatsoever of Mary, 'on account of the honor of the Lord.' While the explicit dogmatic formulation came later, the seeds are found in the patristic theme of Mary as the 'New Eve' \u2014 entirely holy, undoing the sin of the first Eve.",
    aquinasTeaching:
      "Aquinas held that Mary was sanctified in the womb (ST III, q. 27), though he debated the precise timing. His concern was to preserve the universality of Christ's redemption \u2014 if Mary never contracted original sin, was she redeemed? The later dogmatic definition resolved this by teaching that Mary was redeemed 'in a more sublime manner' \u2014 preserved from sin rather than liberated from it. This preservative redemption is actually a more perfect application of Christ's saving grace, not an exception to it. Modern Thomists see the Immaculate Conception as fully compatible with Thomas's principles.",
    commonObjection:
      "If Mary was without sin, she did not need a Savior. But she calls God 'my Savior' in the Magnificat (Luke 1:47), which proves she was a sinner like everyone else.",
    response:
      "Mary's calling God 'my Savior' actually confirms the dogma rather than refuting it. She was indeed saved by Christ \u2014 but in a preventive manner, not a restorative one. An analogy: if someone is about to fall into a pit, you can either pull them out after they fall (restorative redemption) or catch them before they fall (preservative redemption). Both are genuine acts of saving. Mary's preservative redemption is actually the more perfect form of salvation, and she is the supreme fruit of Christ's redemptive work. CCC 491-493.",
  },
  {
    name: "Assumption of Mary",
    yearDefined: "1950 (Pope Pius XII, Munificentissimus Deus)",
    definition:
      "The Immaculate Mother of God, the ever-Virgin Mary, having completed the course of her earthly life, was assumed body and soul into heavenly glory. The dogma does not define whether Mary died before her Assumption (the question of the 'Dormition' is left open), but affirms that her body did not see corruption and that she now exists in glorified bodily form in heaven.",
    scripturalBasis: [
      "Revelation 12:1 \u2014 'A great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars' \u2014 the Church has traditionally identified this woman with Mary in glory.",
      "Psalm 132:8 \u2014 'Arise, O Lord, to your resting place, you and the ark of your might' \u2014 Mary is the Ark of the New Covenant; where the Lord goes, His Ark follows.",
      "1 Corinthians 15:54-57 \u2014 The victory over death through Christ applies preeminently to Mary, who shared most intimately in Christ's saving work.",
      "Luke 1:48-49 \u2014 'The Mighty One has done great things for me' \u2014 the Assumption is the greatest of the great things God did for Mary.",
    ],
    patristicWitness:
      "The feast of the Dormition/Assumption was universally celebrated in both East and West by the 6th century, indicating a belief already well-established. St. John Damascene (d. 749) preached: 'It was fitting that she, who had kept her virginity intact in childbirth, should keep her own body free from all corruption even after death. It was fitting that she who had carried the Creator as a child at her breast should dwell in the divine tabernacles.' St. Germanus of Constantinople (d. 733) also taught the Assumption as established belief.",
    aquinasTeaching:
      "While Aquinas did not treat the Assumption as a defined dogma (it was defined only in 1950), his principles strongly support it. He teaches (ST III, q. 27) that Mary received every grace befitting the Mother of God. Since bodily glorification is the natural completion of the fullness of grace, and since Mary's body was the vessel of the Incarnation, it is supremely fitting that it should not see corruption. Aquinas also teaches that Christ's bodily resurrection is the cause of ours (ST III, q. 56, a. 1) \u2014 and Mary, united to Christ more closely than any other creature, participates first in His resurrection.",
    commonObjection:
      "The Assumption is not in the Bible. It was invented in 1950. You cannot create new doctrines that have no scriptural basis.",
    response:
      "The Assumption was not invented in 1950 \u2014 it was solemnly defined in 1950 after centuries of universal belief. The feast was celebrated throughout Christendom by the 6th century. Dogmatic definitions do not create new truths but formally recognize what the Church has always believed. Furthermore, not all revealed truth is explicit in Scripture \u2014 the Church also relies on Sacred Tradition (2 Thessalonians 2:15). The scriptural basis exists in typological and theological form: Mary as the Ark of the Covenant (which was never allowed to decay), the woman of Revelation 12, and the fittingness that the Mother of the Risen Lord should share in His bodily glory. CCC 966.",
  },
];

export const MARIAN_TITLES: MarianTitle[] = [
  { title: "Theotokos", meaning: "God-bearer; Mother of God \u2014 the foundational Marian title, defined at Ephesus (431)" },
  { title: "Blessed Virgin Mary", meaning: "The most common Catholic title for Mary, affirming her blessedness (Luke 1:48) and perpetual virginity" },
  { title: "Our Lady", meaning: "The Catholic equivalent of 'Our Lord' \u2014 recognizing Mary's queenship and maternal relationship to all Christians" },
  { title: "Queen of Heaven", meaning: "Mary reigns as Queen because she is the Mother of the King (cf. the Gebirah, the Queen Mother in the Davidic kingdom)" },
  { title: "Mother of the Church", meaning: "Mary is the spiritual mother of all the faithful, a title formally proclaimed by Paul VI at Vatican II" },
  { title: "Mediatrix of All Graces", meaning: "Mary intercedes for all graces given to humanity, not as source but as channel, in subordination to Christ the one Mediator" },
  { title: "Seat of Wisdom", meaning: "Mary bore in her womb the Eternal Wisdom of God \u2014 Christ, the Logos" },
  { title: "Ark of the Covenant", meaning: "As the Ark held the tablets, manna, and Aaron's rod, Mary's womb held the Word, the Bread of Life, and the Eternal High Priest" },
  { title: "Gate of Heaven", meaning: "Through Mary, God entered the world; through her intercession, we enter heaven (cf. Ezekiel 44:2)" },
  { title: "Morning Star", meaning: "Mary heralds the coming of Christ as the morning star heralds the dawn" },
  { title: "Star of the Sea (Stella Maris)", meaning: "Mary guides the faithful through the storms of life to the safe harbor of her Son" },
  { title: "Tower of David", meaning: "Mary is a fortress of strength and faith, as David's tower was a stronghold of Israel" },
  { title: "Mirror of Justice", meaning: "Mary perfectly reflects the justice and holiness of God, without any distortion of sin" },
  { title: "Mystical Rose", meaning: "Mary is the most beautiful flower of creation, blooming in perfect grace" },
  { title: "Tower of Ivory", meaning: "Ivory symbolizes purity and strength \u2014 Mary's sinlessness and fortitude" },
  { title: "House of Gold", meaning: "Mary's soul was adorned with every grace, making her the most precious dwelling of God" },
  { title: "Cause of Our Joy", meaning: "By consenting to bear Christ, Mary brought the source of all joy into the world" },
  { title: "Refuge of Sinners", meaning: "Mary's maternal intercession is a sure refuge for those burdened by sin" },
  { title: "Comforter of the Afflicted", meaning: "Mary, who stood at the foot of the Cross, understands suffering and comforts those who are afflicted" },
  { title: "Help of Christians", meaning: "Mary's intercession aids Christians in their spiritual battles, a title especially promoted after the Battle of Lepanto (1571)" },
  { title: "Queen of the Rosary", meaning: "Mary gave the Rosary as a powerful means of meditation on the mysteries of Christ's life" },
  { title: "Our Lady of Sorrows", meaning: "Mary who shared in Christ's sufferings, her heart pierced by a sword (Luke 2:35)" },
  { title: "Immaculate Heart of Mary", meaning: "Mary's heart, free from all sin, burns with perfect love for God and for souls" },
  { title: "Our Lady of Guadalupe", meaning: "Mary appeared to St. Juan Diego in 1531, calling herself 'the Mother of the true God through whom everything lives'" },
  { title: "Our Lady of Lourdes", meaning: "Mary appeared to St. Bernadette at Lourdes in 1858, identifying herself as 'the Immaculate Conception'" },
  { title: "Our Lady of Fatima", meaning: "Mary appeared to three shepherd children at Fatima in 1917, calling for prayer, penance, and consecration to her Immaculate Heart" },
  { title: "Our Lady of Mount Carmel", meaning: "Patroness of the Carmelite order, associated with the Brown Scapular devotion" },
  { title: "Our Lady of Perpetual Help", meaning: "An ancient Byzantine icon depicting Mary holding the Christ Child while angels display the instruments of the Passion" },
  { title: "New Eve", meaning: "As Eve's disobedience brought death, Mary's obedience brought the Author of Life \u2014 she undoes the knot of Eve's transgression (St. Irenaeus)" },
  { title: "Handmaid of the Lord", meaning: "Mary's own title for herself (Luke 1:38), expressing her perfect docility to God's will" },
  { title: "Full of Grace (Gratia Plena)", meaning: "The angel's greeting to Mary (Luke 1:28), indicating a permanent and complete state of divine favor" },
  { title: "Mother of Mercy", meaning: "Mary is the mother of Him who is Mercy itself, and she extends that mercy through her intercession" },
  { title: "Virgin Most Prudent", meaning: "Mary exercised supreme prudence in her fiat, pondering in her heart the mysteries of God's plan (Luke 2:19)" },
  { title: "Virgin Most Faithful", meaning: "Mary's faith never wavered, even at the foot of the Cross \u2014 she is the model of faith for all believers" },
  { title: "Queen of Angels", meaning: "Mary, as Mother of the King of Angels, holds a dignity surpassing all angelic beings" },
  { title: "Queen of Patriarchs", meaning: "Mary is the fulfillment of the hopes of Abraham, Isaac, Jacob, and all the patriarchs" },
  { title: "Queen of Prophets", meaning: "Mary's Magnificat is the greatest prophetic song, and she bore the Prophet foretold by Moses (Deuteronomy 18:15)" },
  { title: "Queen of Apostles", meaning: "Mary was present with the apostles at Pentecost (Acts 1:14), and her faith sustained the infant Church" },
  { title: "Queen of Martyrs", meaning: "Mary's spiritual martyrdom at the Cross surpassed all physical martyrdom in intensity of suffering" },
  { title: "Queen of Confessors", meaning: "Mary is queen over all who confess the faith, being the first and greatest disciple of Christ" },
  { title: "Queen of Virgins", meaning: "Mary is the model and queen of all consecrated virgins, having dedicated her virginity entirely to God" },
  { title: "Queen of All Saints", meaning: "Mary surpasses all saints in holiness, being full of grace from the first moment of her existence" },
  { title: "Queen of Peace", meaning: "Mary is the mother of the Prince of Peace and intercedes for peace among nations and in souls" },
  { title: "Undoer of Knots", meaning: "Mary unties the knots of sin and confusion in our lives through her intercession \u2014 a devotion especially promoted by Pope Francis" },
  { title: "Mother of Divine Grace", meaning: "Mary is the mother of Christ, who is the source of all grace, and she cooperates in the distribution of grace" },
  { title: "Health of the Sick", meaning: "Mary's intercession brings healing of body and soul, as attested by countless miracles at Marian shrines" },
  { title: "Spouse of the Holy Spirit", meaning: "Mary conceived Christ by the power of the Holy Spirit, making her the unique spouse of the Third Person of the Trinity" },
  { title: "Mater Dolorosa", meaning: "The Sorrowful Mother who stood beneath the Cross, sharing in the sufferings of her Son for the redemption of the world" },
];
