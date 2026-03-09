export interface CSTEncyclical {
  name: string;
  year: number;
  pope: string;
  keyConcepts: string[];
  summary: string;
}

export interface CSTPrinciple {
  id: string;
  name: string;
  definition: string;
  aquinasFoundation: string;
  keyEncyclicalQuotes: string[];
  modernApplication: string;
}

export const CST_PRINCIPLES: CSTPrinciple[] = [
  {
    id: "human-dignity",
    name: "Human Dignity",
    definition:
      "Every human being possesses an inherent, inviolable dignity by virtue of being created in the image and likeness of God (imago Dei). This dignity is not conferred by the state, earned by achievement, or contingent on any quality or condition. It belongs to every person from conception to natural death, regardless of race, sex, age, ability, social status, or moral character. Human dignity is the foundation upon which all other principles of Catholic social teaching rest.",
    aquinasFoundation:
      "Aquinas grounds human dignity in the rational nature of the human person. Because we possess intellect and will, we are capable of knowing truth and choosing good — we are self-governing beings, not mere instruments (ST I-II, q.1, a.2). Every human being is made in the image of God, which consists primarily in the capacity for reason and free will (ST I, q.93, a.4). This dignity cannot be lost through sin, disability, or any other condition, because it belongs to human nature itself.",
    keyEncyclicalQuotes: [
      "Rerum Novarum (1891): 'No man may with impunity outrage that human dignity which God Himself treats with reverence.'",
      "Pacem in Terris (1963), 9: 'Every human being is a person; that is, his nature is endowed with intelligence and free will. By virtue of this, he has rights and duties of his own, flowing directly and simultaneously from his very nature.'",
      "Gaudium et Spes (1965), 12: 'According to the almost unanimous opinion of believers and unbelievers alike, all things on earth should be related to man as their center and crown.'",
      "Evangelium Vitae (1995), 2: 'Man is called to a fullness of life which far exceeds the dimensions of his earthly existence, because it consists in sharing the very life of God.'",
    ],
    modernApplication:
      "Human dignity is the basis for opposing abortion, euthanasia, the death penalty (in its current application), torture, human trafficking, racism, and any system that treats persons as means rather than ends. It also grounds the positive rights to life, food, shelter, healthcare, education, and religious freedom. In debates about AI and bioethics, human dignity establishes the principle that persons are not reducible to their functions or utility.",
  },
  {
    id: "common-good",
    name: "The Common Good",
    definition:
      "The common good is the sum total of social conditions that allow people, both as groups and as individuals, to reach their fulfillment more fully and more easily (CCC 1906, Gaudium et Spes 26). It is not the greatest good for the greatest number (utilitarianism), nor the sum of individual goods (individualism). It includes respect for the rights of the person, the social well-being and development of the group, and peace — the stability and security of a just order.",
    aquinasFoundation:
      "Aquinas teaches that human beings are naturally social (ST I-II, q.72, a.4) and that the good of the community is greater than the good of any individual — not because individuals are expendable, but because true human flourishing requires community (ST I-II, q.90, a.2). The common good is ordered to the ultimate good of each person: union with God. Law exists to promote the common good (ST I-II, q.90, a.2), and a law that violates the common good is no law at all (ST I-II, q.96, a.4).",
    keyEncyclicalQuotes: [
      "Mater et Magistra (1961), 65: 'The whole reason for the existence of civil authorities is the realization of the common good.'",
      "Gaudium et Spes (1965), 26: 'The common good embraces the sum of those conditions of social life by which individuals, families, and groups can achieve their own fulfillment in a relatively thorough and ready way.'",
      "Centesimus Annus (1991), 47: 'It is the task of the State to provide for the defense and preservation of common goods such as the natural and human environments.'",
    ],
    modernApplication:
      "The common good challenges both unrestrained capitalism (which reduces society to a collection of competing individuals) and totalitarian collectivism (which subordinates persons to the state). It demands that economic policy, healthcare, education, and environmental regulation be ordered to the genuine flourishing of all, especially the most vulnerable. It also grounds the obligation to contribute to society through work, civic participation, and charitable action.",
  },
  {
    id: "subsidiarity",
    name: "Subsidiarity",
    definition:
      "Subsidiarity holds that a higher-level institution (e.g., the federal government) should not take over functions that can be effectively performed by a lower-level institution (e.g., local government, family, voluntary association). Decisions should be made at the lowest competent level. However, subsidiarity also requires that higher authorities step in when lower-level institutions are unable to fulfill their responsibilities. It is a two-sided principle: it limits government overreach AND requires government assistance when needed.",
    aquinasFoundation:
      "While Aquinas does not use the term 'subsidiarity,' his political philosophy implies it. He holds that human communities are naturally layered — family, village, city, kingdom — and that each level has its proper function (Commentary on the Politics, I). The family is the first natural society and has rights that precede the state (ST II-II, q.57, a.4). Law should support, not supplant, the natural institutions of society. The ruler's task is to facilitate the common good, not to micromanage the lives of citizens.",
    keyEncyclicalQuotes: [
      "Quadragesimo Anno (1931), 79: 'It is a grave evil and disturbance of right order to assign to a greater and higher association what lesser and subordinate organizations can do.'",
      "Centesimus Annus (1991), 48: 'A community of a higher order should not interfere in the internal life of a community of a lower order, depriving the latter of its functions.'",
      "Laudato Si (2015), 196: 'It is essential to show special care for indigenous communities and their cultural traditions. They are not merely one minority among others, but should be the principal dialogue partners.'",
    ],
    modernApplication:
      "Subsidiarity is the Catholic principle most relevant to debates about the proper size and role of government. It warns against both libertarian minimalism (which denies the state any social role) and socialist centralization (which absorbs all social functions into the state). It supports local governance, parental rights in education, the independence of churches and voluntary associations, and federalism — while also recognizing that the government must act when private initiative fails (e.g., disaster relief, public health, systemic injustice).",
  },
  {
    id: "solidarity",
    name: "Solidarity",
    definition:
      "Solidarity is the firm and persevering determination to commit oneself to the common good — to the good of all and of each individual — because we are all really responsible for all (Sollicitudo Rei Socialis, 38). It is not mere sentimentality or vague compassion but a moral virtue and a social principle. It recognizes that human beings are interdependent by nature and by grace, and that the good of each is bound up with the good of all.",
    aquinasFoundation:
      "Aquinas teaches that charity — love of God and love of neighbor — is the form of all the virtues (ST II-II, q.23, a.8). The obligation to love one's neighbor extends to all human beings, ordered by the proximity and urgency of need (ST II-II, q.26). Justice requires rendering to each what is due (ST II-II, q.58, a.1), and the needs of the poor create obligations of justice, not merely charity. The universal destination of goods means that the goods of creation are ultimately intended for all (ST II-II, q.66, a.7).",
    keyEncyclicalQuotes: [
      "Sollicitudo Rei Socialis (1987), 38: 'Solidarity is not a feeling of vague compassion or shallow distress at the misfortunes of so many people. It is a firm and persevering determination to commit oneself to the common good.'",
      "Centesimus Annus (1991), 10: 'The principle of solidarity requires that men and women of our day cultivate a greater awareness that they are debtors of the society of which they have become a part.'",
      "Fratelli Tutti (2020), 116: 'Solidarity is a word that is not always well received; in certain situations, it has become a dirty word. Yet it is a word that expresses more than a few sporadic acts of generosity.'",
    ],
    modernApplication:
      "Solidarity grounds the obligation of wealthy nations to assist poor nations, the moral duty to welcome refugees and immigrants (while respecting the legitimate right of nations to regulate immigration), the obligation to address systemic injustice, and the need for international cooperation on global challenges like climate change, pandemic response, and nuclear disarmament. It challenges individualism, nationalism, and the throwaway culture.",
  },
  {
    id: "preferential-option",
    name: "Preferential Option for the Poor",
    definition:
      "The preferential option for the poor means that in all social, economic, and political decisions, the needs of the poor and vulnerable must be given special priority. This is not class warfare or Marxist ideology — it is a biblical and theological principle rooted in the Old Testament prophets, the teaching of Christ, and the constant tradition of the Church. God does not love the poor more than the rich, but the poor are more vulnerable and more likely to be excluded from the goods of society, so justice demands particular attention to their needs.",
    aquinasFoundation:
      "Aquinas teaches that the superfluous goods of the wealthy belong by natural right to the poor (ST II-II, q.66, a.7). In cases of extreme need, taking from the superfluous goods of another is not theft but the exercise of a natural right: 'In cases of need all things are common property' (ST II-II, q.66, a.7). This is not communism — Aquinas firmly defends private property (ST II-II, q.66, a.2) — but it means that private property is subject to a 'social mortgage' (John Paul II's phrase): the universal destination of goods.",
    keyEncyclicalQuotes: [
      "Rerum Novarum (1891), 37: 'The richer class have many ways of shielding themselves...whereas the mass of the poor have no resources of their own to fall back upon, and must chiefly depend upon the assistance of the State.'",
      "Populorum Progressio (1967), 23: 'If private property is not an absolute and unconditional right, then neither is the right of free trade.'",
      "Sollicitudo Rei Socialis (1987), 42: 'The option for the poor is not a sign of particularism or sectarianism but a form of special primacy in the exercise of Christian charity.'",
      "Evangelii Gaudium (2013), 53: 'Just as the commandment \"Thou shalt not kill\" sets a clear limit in order to safeguard the value of human life, today we also have to say \"thou shalt not\" to an economy of exclusion and inequality.'",
    ],
    modernApplication:
      "The preferential option demands that economic and social policies be evaluated primarily by how they affect the poorest and most vulnerable members of society. It challenges tax policies that burden the poor, healthcare systems that exclude the uninsured, immigration policies that ignore humanitarian obligations, and global trade practices that exploit developing nations. It does not endorse any particular economic system but demands that every system be judged by its fruits for the least of Christ's brethren (Matt 25:31-46).",
  },
  {
    id: "universal-destination",
    name: "Universal Destination of Goods",
    definition:
      "God created the goods of the earth for the benefit of all human beings. Private property is legitimate and necessary for personal autonomy and economic development, but it is not an absolute right. All private property is subject to a 'social mortgage' — the owner has obligations to the community, and in cases of extreme need, the goods of the earth belong to all. This principle does not abolish private property (the Church explicitly condemns communism) but subordinates it to the universal common good.",
    aquinasFoundation:
      "Aquinas defends private property on practical grounds: people take better care of what is their own, and private ownership prevents conflict (ST II-II, q.66, a.2). However, he immediately adds that 'as regards the use of external things, man ought to possess them not as his own but as common, so that he is ready to communicate them to others in their need' (ST II-II, q.66, a.2). In extreme necessity, taking from the superfluous goods of another is not stealing (ST II-II, q.66, a.7).",
    keyEncyclicalQuotes: [
      "Rerum Novarum (1891), 22: 'The earth, even though apportioned among private owners, ceases not thereby to minister to the needs of all.'",
      "Populorum Progressio (1967), 23: 'Private property does not constitute for anyone an absolute and unconditioned right.'",
      "Laborem Exercens (1981), 14: 'Christian tradition has never recognized the right to private property as absolute and untouchable.'",
      "Laudato Si (2015), 93: 'Whether believers or not, we are agreed today that the earth is essentially a shared inheritance, whose fruits are meant to benefit everyone.'",
    ],
    modernApplication:
      "This principle challenges both communism (which abolishes private property) and radical libertarianism (which treats property rights as absolute). It supports progressive taxation, social safety nets, land reform in developing countries, environmental stewardship (the earth's resources belong to future generations too), and the obligation of wealthy nations to assist poor ones. It does not dictate specific policies but establishes the moral framework within which economic decisions must be made.",
  },
  {
    id: "just-wage",
    name: "Just Wage and Workers' Rights",
    definition:
      "Workers have a right to a wage sufficient to support themselves and their families in dignity. This is not set by market forces alone but by the requirements of justice. Workers also have the right to safe working conditions, reasonable hours, rest, and the right to organize and form unions. Employers have corresponding obligations of justice toward their workers.",
    aquinasFoundation:
      "Aquinas teaches that justice requires rendering to each what is due (ST II-II, q.58, a.1). The worker is owed compensation proportionate to the value of their labor and sufficient for their needs. Aquinas condemns those who defraud laborers of their wages (ST II-II, q.77, a.4). He also recognizes the natural right of workers to form associations for mutual aid.",
    keyEncyclicalQuotes: [
      "Rerum Novarum (1891), 45: 'Let the working man and the employer make free agreements, and in particular let them agree freely as to the wages; nevertheless, there underlies a dictate of natural justice more imperious and ancient than any bargain between man and man, namely, that wages ought not to be insufficient to support a frugal and well-behaved wage-earner.'",
      "Laborem Exercens (1981), 19: 'The just remuneration for an adult worker, when he has family responsibilities, is one that is sufficient to establish and properly maintain a family and to provide security for its future.'",
      "Centesimus Annus (1991), 8: 'The State must contribute to the achievement of these goals both directly and indirectly...by creating favorable conditions for the free exercise of economic activity.'",
    ],
    modernApplication:
      "The just wage principle challenges minimum wages that are insufficient for family support, gig economy practices that deny workers benefits and protections, the suppression of union organizing, and global supply chains that exploit cheap labor in developing countries. It supports living wage initiatives, workplace safety regulation, paid family leave, and the right of workers to collectively bargain.",
  },
  {
    id: "role-of-state",
    name: "Role and Limits of the State",
    definition:
      "The state exists to promote the common good, protect human rights, and establish conditions for human flourishing. It has legitimate authority derived from God (Romans 13:1), but this authority is not unlimited. The state may not violate natural law, suppress religious freedom, absorb the functions of lower-level institutions (subsidiarity), or treat persons as mere instruments of state policy. The Church rejects both totalitarianism and anarchism.",
    aquinasFoundation:
      "Aquinas teaches that political authority is natural and necessary (ST I-II, q.95, a.1) — human beings need government because of their social nature. The purpose of government is the common good (ST I-II, q.90, a.2). However, an unjust law — one that violates the natural law or the common good — is not truly a law and does not bind in conscience (ST I-II, q.96, a.4). Citizens may (and sometimes must) resist unjust laws through legitimate means.",
    keyEncyclicalQuotes: [
      "Pacem in Terris (1963), 60: 'The attainment of the common good is the sole reason for the existence of civil authorities.'",
      "Centesimus Annus (1991), 44: 'A democracy without values easily turns into open or thinly disguised totalitarianism.'",
      "Caritas in Veritate (2009), 56: 'The principle of subsidiarity must remain closely linked to the principle of solidarity and vice versa.'",
    ],
    modernApplication:
      "This principle provides the framework for evaluating government action: the state should do what is necessary for the common good and no more. It supports constitutional limits on government power, the rule of law, separation of powers, religious freedom, and the independence of civil society. It challenges both the libertarian view that government is inherently evil and the progressive view that government should manage all social outcomes.",
  },
  {
    id: "just-war",
    name: "Just War Doctrine",
    definition:
      "The just war doctrine establishes strict moral criteria for when war is permissible (jus ad bellum) and how it may be conducted (jus in bello). Jus ad bellum requires: (1) just cause (defense against aggression), (2) legitimate authority (declared by the proper authority), (3) right intention (not for conquest, revenge, or economic gain), (4) last resort (all peaceful alternatives exhausted), (5) reasonable chance of success (war should not be futile), and (6) proportionality (the good achieved must outweigh the harm). Jus in bello requires: (1) distinction (between combatants and non-combatants — civilians may never be directly targeted), (2) proportionality (force used must be proportionate to the military objective), and (3) humane treatment of prisoners and wounded.",
    aquinasFoundation:
      "Aquinas establishes the three classical conditions for a just war (ST II-II, q.40, a.1): (1) the authority of the sovereign by whose command the war is to be waged, (2) a just cause (those who are attacked should deserve it on account of some fault), and (3) a right intention (to advance good or avoid evil). He also develops the principle of double effect (ST II-II, q.64, a.7), which grounds the distinction between directly targeting civilians (always wrong) and accepting civilian casualties as an unintended side effect of a legitimate military operation (potentially permissible if proportionate).",
    keyEncyclicalQuotes: [
      "Gaudium et Spes (1965), 79: 'As long as the danger of war remains and there is no competent and sufficiently powerful authority at the international level, governments cannot be denied the right to legitimate defense once every means of peaceful settlement has been exhausted.'",
      "Pacem in Terris (1963), 127: 'It is hardly possible to imagine that in the atomic era war could be used as an instrument of justice.'",
      "Fratelli Tutti (2020), 258: 'We can no longer think of war as a solution, because its risks will probably always be greater than its supposed benefits.'",
      "CCC 2309 — The conditions for legitimate defense by military force",
    ],
    modernApplication:
      "Just war doctrine is the moral framework underlying international humanitarian law, the Geneva Conventions, and the laws of armed conflict. It is invoked in debates about humanitarian intervention, nuclear deterrence (the Church has increasingly questioned the morality of nuclear weapons), drone warfare, preemptive strikes, and the responsibility to protect (R2P). It challenges both pacifism (which denies the right of defense) and militarism (which wages war without moral constraints).",
  },
  {
    id: "care-for-creation",
    name: "Care for Creation / Environmental Stewardship",
    definition:
      "Human beings are stewards, not absolute owners, of creation. We have a responsibility to care for the natural environment, not because nature is sacred in itself (pantheism), but because it is God's creation entrusted to our care, and because environmental degradation disproportionately harms the poor. This principle does not worship nature but recognizes that abuse of creation offends the Creator and harms our neighbors, especially the most vulnerable.",
    aquinasFoundation:
      "Aquinas teaches that all creatures reflect the goodness of God (ST I, q.47, a.1) and that the diversity of creation manifests the divine perfection more fully than any single creature could (ST I, q.47, a.1). Human beings are stewards of creation, charged with governing it wisely, not exploiting it recklessly (ST I, q.96, a.2). The goods of creation have a universal destination — they are intended for the benefit of all, including future generations.",
    keyEncyclicalQuotes: [
      "Laudato Si (2015), 2: 'This sister [the Earth] now cries out to us because of the harm we have inflicted on her by our irresponsible use and abuse of the goods with which God has endowed her.'",
      "Laudato Si (2015), 49: 'It needs to be said that some committed and prayerful Christians, with the excuse of realism and pragmatism, tend to ridicule expressions of concern for the environment.'",
      "Caritas in Veritate (2009), 48: 'The way humanity treats the environment influences the way it treats itself, and vice versa.'",
    ],
    modernApplication:
      "This principle grounds Catholic engagement with climate change, deforestation, water scarcity, pollution, and biodiversity loss. It challenges both the exploitation of nature for short-term profit and the idolization of nature that treats human beings as a problem. It insists that environmental policy must consider its impact on the poor and must be guided by an 'integral ecology' that connects care for nature with care for human dignity.",
  },
  {
    id: "religious-liberty",
    name: "Religious Liberty",
    definition:
      "Every person has the right to religious freedom — the right to seek truth, to embrace it when found, and to order one's life according to its demands, free from coercion by the state or any other human power. This right belongs to all persons, not just Catholics, and is grounded in the dignity of the human person and the nature of the act of faith, which must be free to be genuine. The state may not compel or forbid religious belief or practice, except to the extent necessary to protect public order, peace, and the rights of others.",
    aquinasFoundation:
      "Aquinas explicitly teaches that unbelievers should not be compelled to the faith: 'To believe depends on the will. Wherefore the faithful should in no way compel unbelievers to the faith' (ST II-II, q.10, a.8). He also holds that even an erroneous conscience binds — a person who sincerely believes something to be right is obligated to follow that belief, and acting against conscience is always wrong (ST I-II, q.19, a.5-6). These principles ground religious freedom in the nature of the intellect and will.",
    keyEncyclicalQuotes: [
      "Dignitatis Humanae (1965), 2: 'The human person has a right to religious freedom. This freedom means that all men are to be immune from coercion on the part of individuals or of social groups and of any human power.'",
      "Dignitatis Humanae (1965), 3: 'The truth cannot impose itself except by virtue of its own truth, as it makes its entrance into the mind at once quietly and with power.'",
      "Pacem in Terris (1963), 14: 'Every human being has the right to honor God according to the dictates of an upright conscience, and therefore the right to worship God privately and publicly.'",
    ],
    modernApplication:
      "Religious liberty is under threat globally — from persecution of Christians in the Middle East, China, and North Korea, to restrictions on conscience rights in Western democracies (e.g., forcing Catholic institutions to provide contraception or participate in actions contrary to their beliefs). The Church defends religious liberty for all people — not just Catholics — because the act of faith must be free. This is not relativism (the Church still holds that Catholicism is the fullness of truth) but a recognition that coerced faith is no faith at all.",
  },
];

export const CST_ENCYCLICALS: CSTEncyclical[] = [
  {
    name: "Rerum Novarum",
    year: 1891,
    pope: "Leo XIII",
    keyConcepts: [
      "Workers' rights",
      "Just wage",
      "Right to private property",
      "Rejection of socialism",
      "Limits of capitalism",
      "Role of the state",
      "Right to form unions",
    ],
    summary:
      "The foundational encyclical of modern Catholic social teaching. Written in response to the exploitation of workers during the Industrial Revolution, it defends the dignity of labor, the right to a just wage, the right to private property (against socialism), and the right of workers to organize. It rejects both socialism and unrestrained capitalism, proposing a middle way grounded in natural law and the common good. Every subsequent social encyclical builds on Rerum Novarum.",
  },
  {
    name: "Quadragesimo Anno",
    year: 1931,
    pope: "Pius XI",
    keyConcepts: [
      "Subsidiarity (first formal statement)",
      "Reconstruction of the social order",
      "Critique of both socialism and individualist capitalism",
      "Vocational groups",
      "Wealth concentration",
    ],
    summary:
      "Written 40 years after Rerum Novarum, this encyclical introduces the principle of subsidiarity for the first time: 'It is a grave evil to assign to a greater and higher association what lesser and subordinate organizations can do.' It criticizes both socialism and the concentration of wealth and power in the hands of a few, calling for the 'reconstruction of the social order.'",
  },
  {
    name: "Mater et Magistra",
    year: 1961,
    pope: "John XXIII",
    keyConcepts: [
      "Socialization",
      "Agriculture",
      "International development",
      "Scientific and technological progress",
      "Just distribution of wealth",
    ],
    summary:
      "Addresses the social question in the modern world, emphasizing the growing interdependence of nations, the needs of agricultural communities, and the obligation of wealthy nations to assist developing nations. Affirms the role of the state in promoting the common good while respecting subsidiarity.",
  },
  {
    name: "Pacem in Terris",
    year: 1963,
    pope: "John XXIII",
    keyConcepts: [
      "Human rights (comprehensive list)",
      "Peace",
      "Disarmament",
      "International authority",
      "Rights of nations",
      "Religious freedom",
    ],
    summary:
      "Written during the Cuban Missile Crisis, this encyclical addresses the conditions for world peace. It provides the most comprehensive papal list of human rights and duties, calls for nuclear disarmament, and proposes an international authority to promote the common good. It affirms religious freedom and the rights of all persons and nations.",
  },
  {
    name: "Populorum Progressio",
    year: 1967,
    pope: "Paul VI",
    keyConcepts: [
      "Integral human development",
      "International solidarity",
      "Trade justice",
      "Private property limits",
      "Development of peoples",
    ],
    summary:
      "Focuses on the development of peoples, arguing that development is the new name for peace. True development is not merely economic growth but the development of the whole person and every person. It critiques international trade systems that exploit developing nations and calls for a 'civilization of love.'",
  },
  {
    name: "Laborem Exercens",
    year: 1981,
    pope: "John Paul II",
    keyConcepts: [
      "The priority of labor over capital",
      "Subjective dimension of work",
      "Workers' rights",
      "Unions",
      "Spirituality of work",
    ],
    summary:
      "A profound reflection on the meaning and dignity of human work. John Paul II argues that labor has priority over capital because it is through work that persons realize their humanity. Work is not merely an economic activity but a participation in God's creative activity. The encyclical defends workers' rights, including the right to organize, while critiquing both capitalism (which reduces work to a commodity) and communism (which subordinates workers to the state).",
  },
  {
    name: "Sollicitudo Rei Socialis",
    year: 1987,
    pope: "John Paul II",
    keyConcepts: [
      "Solidarity as a virtue",
      "Structures of sin",
      "Authentic human development",
      "North-South divide",
      "Superdevelopment",
    ],
    summary:
      "Written 20 years after Populorum Progressio, this encyclical develops the concept of solidarity as a moral virtue and introduces the concept of 'structures of sin' — social, economic, and political systems that perpetuate injustice. It critiques both the Western bloc (materialist consumerism) and the Eastern bloc (totalitarian collectivism), calling for a development that is truly human.",
  },
  {
    name: "Centesimus Annus",
    year: 1991,
    pope: "John Paul II",
    keyConcepts: [
      "Market economy (conditional endorsement)",
      "Democracy and values",
      "Critique of socialism after the fall of the Berlin Wall",
      "Culture of life vs. culture of death",
      "Ecological concern",
    ],
    summary:
      "Written on the centenary of Rerum Novarum and after the fall of communism, this encyclical offers a nuanced assessment of capitalism. It endorses the market economy insofar as it operates within a strong juridical and moral framework, but warns against reducing human life to market logic. It warns that democracy without transcendent values 'easily turns into open or thinly disguised totalitarianism.'",
  },
  {
    name: "Caritas in Veritate",
    year: 2009,
    pope: "Benedict XVI",
    keyConcepts: [
      "Integral human development",
      "Gratuitousness (logic of gift)",
      "Subsidiarity and solidarity",
      "Globalization",
      "Human ecology",
    ],
    summary:
      "Addresses globalization and the economic crisis, arguing that economics must be guided by charity in truth. Introduces the concept of 'gratuitousness' — the logic of gift — as a necessary complement to the logic of exchange (market) and the logic of duty (state). Emphasizes that human ecology (respect for human nature) and natural ecology are inseparable.",
  },
  {
    name: "Laudato Si'",
    year: 2015,
    pope: "Francis",
    keyConcepts: [
      "Integral ecology",
      "Care for our common home",
      "Throwaway culture",
      "Climate change",
      "Technocratic paradigm",
      "Ecological conversion",
    ],
    summary:
      "The first encyclical devoted entirely to environmental stewardship. Proposes an 'integral ecology' that connects care for the natural environment with care for human dignity, especially the poor. Critiques the 'technocratic paradigm' that treats nature as raw material for exploitation. Calls for an 'ecological conversion' that changes both personal habits and social structures. Grounded in the theology of creation, not in secular environmentalism.",
  },
  {
    name: "Fratelli Tutti",
    year: 2020,
    pope: "Francis",
    keyConcepts: [
      "Universal fraternity",
      "Social friendship",
      "Critique of populism and nationalism",
      "Dialogue",
      "Death penalty (inadmissible)",
      "War (increasingly unjustifiable)",
      "Migrants and refugees",
    ],
    summary:
      "Calls for universal fraternity and social friendship, arguing that the parable of the Good Samaritan is the model for all human relationships. Critiques both populism and liberal individualism. Addresses migration, the death penalty (declared inadmissible), the moral limits of war, and the need for a reformed United Nations. Emphasizes dialogue, encounter, and the culture of care.",
  },
];
