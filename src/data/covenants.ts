export interface Covenant {
  name: string;
  mediator: string;
  sign: string;
  promise: string;
  scope: string;
  scripture: string;
  fulfillment: string;
}

export const COVENANTS: Covenant[] = [
  {
    name: "Adamic Covenant",
    mediator: "Adam (as head of the human family)",
    sign: "The Sabbath rest (Genesis 2:2-3) and the Tree of Life",
    promise: "Dominion over creation, communion with God, and eternal life — conditioned on obedience. The command not to eat of the Tree of Knowledge established the first moral law binding on humanity.",
    scope: "One couple — Adam and Eve, but representing all humanity (Adam as federal head)",
    scripture: "Genesis 1:26-28, 2:15-17. Hosea 6:7 — \"Like Adam they transgressed the covenant.\"",
    fulfillment: "Christ, the New Adam (Romans 5:12-21, 1 Corinthians 15:45-49), succeeds where Adam failed. Where Adam's disobedience brought death, Christ's obedience brings life. Where Adam lost the Tree of Life, Christ restores it through the Cross (Revelation 2:7, 22:2). The Church is the new Garden in which humanity is restored to communion with God through the sacraments.",
  },
  {
    name: "Noahic Covenant",
    mediator: "Noah (as patriarch of the surviving human family)",
    sign: "The rainbow (Genesis 9:12-17)",
    promise: "God will never again destroy the earth by flood. Establishment of basic moral law (prohibition of murder, blood laws) and the preservation of the natural order. This is the only covenant made with all living creatures, not just humans.",
    scope: "One family — Noah and his sons, representing all humanity and all living creatures",
    scripture: "Genesis 6:18, 9:1-17. Isaiah 54:9-10 — God compares His covenant faithfulness to the Noahic promise.",
    fulfillment: "The Flood is a type of Baptism (1 Peter 3:20-21) — as the waters destroyed the old world and saved Noah's family through the ark, so baptismal waters destroy sin and save through the Church (the new Ark). The universal scope of the Noahic covenant prefigures the universality of the New Covenant, which extends to all nations.",
  },
  {
    name: "Abrahamic Covenant",
    mediator: "Abraham (father of the chosen people)",
    sign: "Circumcision (Genesis 17:10-14)",
    promise: "Land (Canaan), descendants ('as numerous as the stars'), and universal blessing ('in you all the families of the earth shall be blessed'). The triple promise encompasses nation, territory, and mission. God's covenant with Abraham is unconditional — sealed by God alone passing through the cut animals (Genesis 15:17).",
    scope: "One tribe — Abraham and his descendants, but with universal implications ('all families of the earth')",
    scripture: "Genesis 12:1-3, 15:1-21, 17:1-22, 22:15-18. Galatians 3:6-29 — Paul's extended argument that the Abrahamic promises are fulfilled in Christ.",
    fulfillment: "Christ is the 'seed of Abraham' in whom all nations are blessed (Galatians 3:16). The land promise is spiritualized into the heavenly inheritance (Hebrews 11:16). The descendants become all who believe — Jew and Gentile united in Christ (Galatians 3:28-29). Circumcision is fulfilled in Baptism (Colossians 2:11-12), which is why the Church baptizes infants as Israel circumcised on the eighth day.",
  },
  {
    name: "Mosaic Covenant",
    mediator: "Moses (as lawgiver, prophet, and mediator between God and Israel)",
    sign: "The Sabbath (Exodus 31:13-17) and the Tabernacle/Temple system",
    promise: "Israel will be God's 'treasured possession, a kingdom of priests and a holy nation' (Exodus 19:5-6), conditional on obedience to the Law (Torah). The Mosaic covenant is bilateral — blessings for obedience, curses for disobedience (Deuteronomy 28).",
    scope: "One nation — Israel, organized as a theocratic kingdom under God's law",
    scripture: "Exodus 19-24 (the Sinai covenant), Deuteronomy 5-30 (renewal and elaboration). Hebrews 8-10 (comparison of old and new covenants).",
    fulfillment: "Christ fulfills the Mosaic Law perfectly (Matthew 5:17). He is the new Moses who gives the new Law from the new Sinai (the Sermon on the Mount). The sacrificial system is fulfilled in Christ's once-for-all sacrifice (Hebrews 9:11-14). The Tabernacle and Temple are fulfilled in Christ's body (John 2:19-21) and in the Church. The Passover is fulfilled in the Eucharist. The 'kingdom of priests' is fulfilled in the common priesthood of believers (1 Peter 2:9) and the ministerial priesthood.",
  },
  {
    name: "Davidic Covenant",
    mediator: "David (as king, establishing the royal dynasty)",
    sign: "The throne and dynasty of David (the Davidic kingdom structure: king, queen mother, prime minister, thank offering)",
    promise: "An eternal dynasty — David's descendant will reign forever. 'I will establish the throne of his kingdom forever' (2 Samuel 7:13). The Davidic king is adopted as God's 'son' (2 Samuel 7:14, Psalm 2:7). The kingdom will be universal and everlasting.",
    scope: "One royal house — the house of David, ruling over Israel and ultimately over all nations",
    scripture: "2 Samuel 7:8-16, Psalm 89:3-4, 19-37, Psalm 132:11-12, Isaiah 9:6-7, Isaiah 11:1-10.",
    fulfillment: "Christ is the Son of David (Matthew 1:1, Romans 1:3) who reigns forever (Luke 1:32-33). His kingdom is the Church. The Davidic kingdom structure is fulfilled in the Church: the King (Christ), the Queen Mother (Mary, cf. 1 Kings 2:19 — the gebirah), the Prime Minister with the keys (Peter/the Pope, cf. Isaiah 22:22 and Matthew 16:19), and the thank offering (the Eucharist — todah sacrifice). This is why understanding the Davidic kingdom is essential to understanding Catholic ecclesiology.",
  },
  {
    name: "New Covenant",
    mediator: "Jesus Christ (the eternal High Priest, Prophet, and King)",
    sign: "The Eucharist — 'This cup is the new covenant in my blood' (Luke 22:20, 1 Corinthians 11:25). Also Baptism as the entrance rite.",
    promise: "Total forgiveness of sins ('I will remember their sins no more'), the law written on hearts (interior transformation by the Holy Spirit), universal knowledge of God, and the indwelling of the Holy Spirit. This covenant is unconditional and eternal — it cannot be broken by human sin because it is maintained by God's fidelity, not ours.",
    scope: "All humanity — every nation, language, and people. The universal (catholic) scope is the culmination of the progressive widening from couple to family to tribe to nation to kingdom to all peoples.",
    scripture: "Jeremiah 31:31-34 (the prophecy), Luke 22:20 and 1 Corinthians 11:25 (institution), Hebrews 8:6-13 and 9:15 (theological exposition), Ezekiel 36:25-27 (the promise of interior renewal).",
    fulfillment: "The New Covenant is the fulfillment of all previous covenants: the restoration of communion lost in Adam, the universal blessing promised to Abraham, the priestly kingdom promised to Moses, and the eternal kingdom promised to David. It is mediated by Christ the eternal High Priest (Hebrews 7-10), sealed in His blood on the Cross, and perpetuated in the Eucharistic sacrifice. The Church is the New Covenant community — the new Israel, the Body of Christ, the People of God gathered from every nation into one family.",
  },
];
