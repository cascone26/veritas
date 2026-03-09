export interface SocialPrinciple {
  principle: string;
  definition: string;
  keyEncyclicals: string[];
  aquinasFoundation: string;
  modernApplication: string;
  keyQuote: string;
}

export const SOCIAL_PRINCIPLES: SocialPrinciple[] = [
  {
    principle: "Human Dignity",
    definition: "Every human person is created in the image and likeness of God (imago Dei) and possesses an inherent, inviolable dignity that cannot be taken away by any human power, circumstance, or condition. This dignity is the foundation of all Catholic social teaching and the source of all human rights.",
    keyEncyclicals: ["Rerum Novarum (Leo XIII, 1891)", "Pacem in Terris (John XXIII, 1963)", "Gaudium et Spes (Vatican II, 1965)", "Evangelium Vitae (John Paul II, 1995)", "Dignitas Infinita (DDF, 2024)"],
    aquinasFoundation: "Aquinas grounds human dignity in the rational soul, which bears God's image. Because the human person is rational, capable of knowing truth and willing good, they possess a dignity transcending all material creation (ST I, q.93; ST I-II, q.91, a.2). The natural law itself presupposes this dignity.",
    modernApplication: "Human dignity is the basis for opposing abortion, euthanasia, the death penalty, torture, trafficking, and discrimination. It also grounds positive rights: life, food, shelter, healthcare, education, work, and religious freedom. Every system must be judged by how it serves the human person.",
    keyQuote: "\"The basis for all that the Church believes about the moral dimensions of economic life is its vision of the transcendent worth — the sacredness — of human beings.\" — Economic Justice for All (U.S. Bishops, 1986)",
  },
  {
    principle: "The Common Good",
    definition: "The sum total of social conditions that allow people, both as groups and individuals, to reach their fulfillment more fully and more easily. Not the greatest good for the greatest number (utilitarianism) but the conditions enabling every person to flourish.",
    keyEncyclicals: ["Rerum Novarum (Leo XIII, 1891)", "Mater et Magistra (John XXIII, 1961)", "Gaudium et Spes 26 (Vatican II, 1965)", "Caritas in Veritate (Benedict XVI, 2009)"],
    aquinasFoundation: "The common good is the proper end of political authority (ST I-II, q.90, a.2). Law exists to serve the common good, not private interests. The common good includes the flourishing of each member. Unjust laws — those not serving the common good — are not truly laws (ST I-II, q.96, a.4).",
    modernApplication: "Government policy, economic systems, and institutions must be evaluated by whether they serve the common good. This includes infrastructure, education, healthcare, environmental protection, and rule of law. The needs of the poorest must be given priority, not as charity but as justice.",
    keyQuote: "\"It is agreed that in our time the common good is chiefly guaranteed when personal rights and duties are maintained.\" — Pacem in Terris 60 (John XXIII, 1963)",
  },
  {
    principle: "Subsidiarity",
    definition: "A higher-level organization should not perform functions that can be carried out effectively by a lower-level organization. Decisions should be made at the most local competent level. Central authority should support local communities, not replace them. This protects against both statism and individualism.",
    keyEncyclicals: ["Quadragesimo Anno 79-80 (Pius XI, 1931)", "Centesimus Annus (John Paul II, 1991)", "Caritas in Veritate (Benedict XVI, 2009)", "Laudato Si' (Francis, 2015)"],
    aquinasFoundation: "While Aquinas does not use the word, the principle is implicit in his political philosophy. He follows Aristotle in recognizing the family as the basic unit, intermediate associations as essential, and higher authority's role as coordination and support, not absorption (Commentary on Politics; ST I-II, q.105).",
    modernApplication: "Subsidiarity argues against both excessive centralization and unregulated libertarianism. It supports local governance, strong families, civil society, worker cooperatives, and community organizations. Federal programs should empower local institutions rather than replace them.",
    keyQuote: "\"It is an injustice and at the same time a grave evil and disturbance of right order to assign to a greater and higher association what lesser and subordinate organizations can do.\" — Quadragesimo Anno 79 (Pius XI, 1931)",
  },
  {
    principle: "Solidarity",
    definition: "A firm and persevering determination to commit oneself to the common good — the good of all and of each individual — because we are all truly responsible for all. Not mere sentimentality but a moral virtue recognizing the fundamental interdependence of all human beings.",
    keyEncyclicals: ["Sollicitudo Rei Socialis (John Paul II, 1987)", "Centesimus Annus (John Paul II, 1991)", "Fratelli Tutti (Francis, 2020)"],
    aquinasFoundation: "Aquinas grounds solidarity in justice (giving each what is due) and charity (willing the good of the other). The natural law teaches that human beings are social by nature and that the good of each is bound to the good of all (ST II-II, q.58; ST I-II, q.94, a.2).",
    modernApplication: "Solidarity requires wealthy nations to assist developing nations as justice, not charity. It demands that globalization serve all peoples. It challenges consumerism and individualism. It means standing with the persecuted, the marginalized, and the voiceless — including the unborn, elderly, refugees, and disabled.",
    keyQuote: "\"Solidarity is not a feeling of vague compassion or shallow distress at the misfortunes of so many people. It is a firm and persevering determination to commit oneself to the common good.\" — Sollicitudo Rei Socialis 38 (John Paul II, 1987)",
  },
  {
    principle: "Preferential Option for the Poor",
    definition: "The moral test of any society is how it treats its most vulnerable. The needs of the poor and marginalized must take priority in social and economic decisions. Rooted in Scripture and Christ's identification with the least (Matt 25:40).",
    keyEncyclicals: ["Rerum Novarum (Leo XIII, 1891)", "Populorum Progressio (Paul VI, 1967)", "Sollicitudo Rei Socialis (John Paul II, 1987)", "Evangelii Gaudium (Francis, 2013)", "Fratelli Tutti (Francis, 2020)"],
    aquinasFoundation: "Aquinas teaches that in genuine need, the natural law recognizes that earth's goods are intended for all (ST II-II, q.66, a.7). A person in extreme necessity may take what they need from another's surplus. Almsgiving is not mere generosity but a requirement of justice.",
    modernApplication: "Economic policies must be evaluated by their impact on the poorest. Tax policy, labor law, healthcare, education, housing, and immigration all have a 'poor test.' This challenges both statism (creating dependency) and libertarianism (ignoring structural injustice). It calls for empowerment, not just assistance.",
    keyQuote: "\"How can it be that it is not a news item when an elderly homeless person dies of exposure, but it is news when the stock market loses two points?\" — Evangelii Gaudium 53 (Francis, 2013)",
  },
  {
    principle: "Universal Destination of Goods",
    definition: "God intended the earth's goods for all humanity, not just the few. Private property is legitimate but subordinate to this universal principle. The right to private property carries a 'social mortgage.'",
    keyEncyclicals: ["Rerum Novarum (Leo XIII, 1891)", "Populorum Progressio (Paul VI, 1967)", "Laborem Exercens (John Paul II, 1981)", "Centesimus Annus (John Paul II, 1991)", "Laudato Si' (Francis, 2015)"],
    aquinasFoundation: "Created goods are naturally common — God gave the earth to all (ST II-II, q.66, a.1-2). Private property is a legitimate institution promoting orderly stewardship, but does not override the common destination. In extreme necessity, taking from surplus is not theft but exercise of a natural right (ST II-II, q.66, a.7).",
    modernApplication: "This challenges both unbridled capitalism (property as absolute right) and socialism (abolishing property). It calls for just distribution, progressive taxation, living wages, land reform, and international economic justice. It also grounds environmental stewardship — earth's resources belong to all generations.",
    keyQuote: "\"God destined the earth and all it contains for all men and all peoples so that all created things would be shared fairly by all mankind under the guidance of justice tempered by charity.\" — Gaudium et Spes 69",
  },
  {
    principle: "The Just Wage",
    definition: "Workers have a right to a wage sufficient to support themselves and their families in dignity. The just wage is not determined solely by market forces but by the worker's needs, contribution, the enterprise's health, and the common good.",
    keyEncyclicals: ["Rerum Novarum 45 (Leo XIII, 1891)", "Quadragesimo Anno (Pius XI, 1931)", "Mater et Magistra (John XXIII, 1961)", "Laborem Exercens (John Paul II, 1981)"],
    aquinasFoundation: "Justice in exchange requires proportionate payment (ST II-II, q.77). A wage exploiting the worker's need violates commutative justice. Labor has a personal dimension (dignity) and a social dimension (common good), and both must be fairly compensated.",
    modernApplication: "Living wage legislation, workers' right to organize, protections against exploitation, and fair trade all flow from this principle. It challenges the notion that wages should be purely market-determined, treating labor as just another commodity. Relevant to minimum wage, gig economy, sweatshop labor, and global supply chains.",
    keyQuote: "\"To defraud anyone of wages that are his due is a great crime which cries to the avenging anger of Heaven.\" — Rerum Novarum 20 (Leo XIII, 1891)",
  },
  {
    principle: "Workers' Rights",
    definition: "Workers have fundamental rights: productive work, just wages, safe conditions, organizing and unions, rest and leisure, and participation in decisions affecting their work. Work is an expression of human dignity and participation in God's creative activity.",
    keyEncyclicals: ["Rerum Novarum (Leo XIII, 1891)", "Quadragesimo Anno (Pius XI, 1931)", "Laborem Exercens (John Paul II, 1981)", "Centesimus Annus (John Paul II, 1991)"],
    aquinasFoundation: "Work is not punishment for sin but a natural expression of rationality and creativity. Through work, humans exercise stewardship over creation (ST I, q.96, a.2). Because work is personal, the worker must be treated as a subject, not an object — a person, not a tool.",
    modernApplication: "The right to unionize, workplace safety, limits on hours, family leave, and protections against child labor all have roots in Catholic social teaching. The Church defended workers decades before the secular labor movement. Today applicable to gig workers, migrant laborers, supply chain ethics, and automation.",
    keyQuote: "\"Work is for man, not man for work.\" — Laborem Exercens 6 (John Paul II, 1981)",
  },
  {
    principle: "Private Property",
    definition: "The right to private property is natural and essential for freedom, family stability, and economic initiative. However, it is not absolute — it is subordinate to the universal destination of goods and must serve the common good.",
    keyEncyclicals: ["Rerum Novarum (Leo XIII, 1891)", "Quadragesimo Anno (Pius XI, 1931)", "Mater et Magistra (John XXIII, 1961)", "Centesimus Annus (John Paul II, 1991)"],
    aquinasFoundation: "Private property is legitimate because it promotes careful stewardship, orderly management, and peace (ST II-II, q.66, a.2). But goods are originally common, and ownership must serve the common good. Excessive accumulation while others lack necessities is a sin against justice.",
    modernApplication: "The Church rejects both collectivism and unrestrained capitalism. Property rights must be balanced with the universal destination of goods, just taxation, and concern for the poor. Relevant to housing, land reform, intellectual property, and wealth inequality.",
    keyQuote: "\"The right to private property is subordinated to the right to common use, to the fact that goods are meant for everyone.\" — Laborem Exercens 14 (John Paul II, 1981)",
  },
  {
    principle: "Just War",
    definition: "Strict criteria for when military force is permissible (jus ad bellum: just cause, right authority, right intention, last resort, probability of success, proportionality) and how it must be conducted (jus in bello: non-combatant immunity, proportionality in force).",
    keyEncyclicals: ["Gaudium et Spes 79-82 (Vatican II, 1965)", "Centesimus Annus (John Paul II, 1991)", "Compendium of Social Doctrine 500-509", "Fratelli Tutti 256-262 (Francis, 2020)"],
    aquinasFoundation: "Aquinas systematized Just War criteria in ST II-II, q.40: authority of the sovereign, just cause, and rightful intention. Later theologians (Vitoria, Suarez) added last resort, probability of success, and proportionality.",
    modernApplication: "Applies to modern conflicts, humanitarian intervention, preemptive strikes, drone warfare, nuclear weapons, and cyberwarfare. The Church has grown increasingly skeptical of modern war's justice given destructive capacity. Non-combatant immunity absolutely prohibits targeting civilians.",
    keyQuote: "\"Every act of war directed to the indiscriminate destruction of whole cities or vast areas with their inhabitants is a crime against God and man.\" — Gaudium et Spes 80",
  },
  {
    principle: "Religious Liberty",
    definition: "Every person has the right to religious freedom — to seek truth and follow conscience in matters of religion, free from coercion. Rooted not in relativism but in human dignity: the person must be free to seek and embrace truth without compulsion.",
    keyEncyclicals: ["Dignitatis Humanae (Vatican II, 1965)", "Pacem in Terris (John XXIII, 1963)", "Redemptoris Missio (John Paul II, 1990)"],
    aquinasFoundation: "Faith must be a free act of the will — it cannot be coerced (ST II-II, q.10, a.8). Forced conversion is not true conversion. The principle that faith must be free provides the theological foundation for the modern declaration on religious liberty.",
    modernApplication: "Protects the right to practice faith publicly, educate children according to beliefs, and operate religious institutions. Also protects atheists from coercion. Under pressure from conscience mandates, anti-discrimination laws conflicting with religious belief, and the privatization of religion.",
    keyQuote: "\"The human person has a right to religious freedom. This freedom means that all men are to be immune from coercion on the part of individuals or of social groups and of any human power.\" — Dignitatis Humanae 2",
  },
  {
    principle: "Care for Creation",
    definition: "Human beings are stewards, not owners, of the natural world. We have a moral obligation to protect the environment for present and future generations. Environmental destruction is a moral issue because it harms the poor disproportionately and violates our stewardship responsibility.",
    keyEncyclicals: ["Laudato Si' (Francis, 2015)", "Centesimus Annus 37-38 (John Paul II, 1991)", "Caritas in Veritate (Benedict XVI, 2009)"],
    aquinasFoundation: "God is the primary owner of all creation; human dominion is stewardship, not sovereignty (ST I, q.96, a.2; ST II-II, q.66, a.1). The natural law requires responsible use and preservation for future generations. Creation has intrinsic goodness — God declared it 'very good' (Gen 1:31).",
    modernApplication: "Climate change, pollution, deforestation, species extinction, and water scarcity are moral issues. Integral ecology recognizes environmental, social, and economic concerns as interconnected. Care for creation is not opposed to human development but integral to it.",
    keyQuote: "\"The climate is a common good, belonging to all and meant for all.\" — Laudato Si' 23 (Francis, 2015)",
  },
];
