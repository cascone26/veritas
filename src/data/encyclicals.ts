export interface Encyclical {
  title: string;
  pope: string;
  year: number;
  topic: string;
  summary: string;
  keyQuotes: string[];
  thomisticConnection: string;
}

export const ENCYCLICALS: Encyclical[] = [
  {
    title: "Aeterni Patris",
    pope: "Leo XIII",
    year: 1879,
    topic: "Thomistic Philosophy",
    summary: "Declared St. Thomas Aquinas the preeminent theologian of the Catholic Church and mandated the study of Thomistic philosophy in all Catholic seminaries.",
    keyQuotes: [
      "Thomas gathered together and cemented, distinguished and arranged, all their best contributions in one whole.",
      "The reasoning of Thomas proceeds from principles which are most broad and are in themselves the germs of almost infinite truths."
    ],
    thomisticConnection: "The most directly Thomistic encyclical. It restored Aquinas to the center of Catholic intellectual life."
  },
  {
    title: "Rerum Novarum",
    pope: "Leo XIII",
    year: 1891,
    topic: "Social Justice and Labor",
    summary: "The foundational social encyclical addressing the condition of the working class, private property, the role of the state, and workers' rights.",
    keyQuotes: [
      "It is neither just nor humane so to grind men down with excessive labor as to stupefy their minds and wear out their bodies.",
      "The right to possess private property is derived from nature, not from man."
    ],
    thomisticConnection: "Applies Aquinas's teaching on justice, the common good, and natural law to modern economic conditions."
  },
  {
    title: "Pascendi Dominici Gregis",
    pope: "Pius X",
    year: 1907,
    topic: "Modernism",
    summary: "Condemned the heresy of Modernism — the systematic attempt to reconcile Catholic doctrine with modern philosophy by reducing faith to religious sentiment.",
    keyQuotes: [
      "Modernism leads to atheism and to the annihilation of all religion.",
      "The Modernist sustains and includes within himself a manifold personality: he is a philosopher, a believer, a theologian, an historian, a critic, an apologist, a reformer."
    ],
    thomisticConnection: "Recommends Thomistic philosophy as the antidote to Modernist errors, particularly regarding the nature of knowledge and faith."
  },
  {
    title: "Divini Redemptoris",
    pope: "Pius XI",
    year: 1937,
    topic: "Atheistic Communism",
    summary: "Condemned atheistic Communism as intrinsically evil and outlined the Catholic social teaching alternative based on natural law and human dignity.",
    keyQuotes: [
      "Communism is intrinsically wrong, and no one who would save Christian civilization may collaborate with it in any undertaking whatsoever."
    ],
    thomisticConnection: "Grounds the critique of Communism in Thomistic natural law, particularly the natural right to private property and the nature of the common good."
  },
  {
    title: "Humani Generis",
    pope: "Pius XII",
    year: 1950,
    topic: "Modern Errors in Philosophy and Theology",
    summary: "Addressed errors in modern theology including existentialism, historicism, and polygenism, while affirming the value of scholastic philosophy.",
    keyQuotes: [
      "If the scholastic philosophy is rightly taught... it serves as a kind of preparation for the Gospel.",
      "The Teaching Authority of the Church does not forbid that, in conformity with the present state of human sciences, research and discussions take place with regard to the doctrine of evolution."
    ],
    thomisticConnection: "Explicitly defends Thomistic metaphysics and scholastic method against nouvelle theologie."
  },
  {
    title: "Fides et Ratio",
    pope: "John Paul II",
    year: 1998,
    topic: "Faith and Reason",
    summary: "Explored the relationship between faith and reason, arguing they are complementary wings by which the human spirit rises to the contemplation of truth.",
    keyQuotes: [
      "Faith and reason are like two wings on which the human spirit rises to the contemplation of truth.",
      "The Church has no philosophy of her own nor does she canonize any one particular philosophy in preference to others."
    ],
    thomisticConnection: "Extensively discusses Aquinas as the model of the faith-reason synthesis and calls him an 'apostle of the truth.'"
  },
  {
    title: "Veritatis Splendor",
    pope: "John Paul II",
    year: 1993,
    topic: "Moral Theology",
    summary: "Addressed the crisis in moral theology by reaffirming the existence of intrinsically evil acts and the reality of absolute moral norms.",
    keyQuotes: [
      "No one can escape from the fundamental questions: What must I do? How do I distinguish good from evil?",
      "There exist acts which per se and in themselves, independently of circumstances, are always seriously wrong by reason of their object."
    ],
    thomisticConnection: "Heavily Thomistic in structure and content. Draws extensively on Aquinas's treatise on human acts and the virtues."
  },
  {
    title: "Evangelium Vitae",
    pope: "John Paul II",
    year: 1995,
    topic: "The Value and Inviolability of Human Life",
    summary: "Condemned abortion, euthanasia, and the death penalty while articulating a comprehensive Gospel of Life rooted in human dignity.",
    keyQuotes: [
      "The Gospel of life is at the heart of Jesus' message.",
      "Not even a murderer loses his personal dignity."
    ],
    thomisticConnection: "Applies Aquinas's natural law theory to modern bioethical issues, particularly regarding the inviolability of innocent human life."
  },
  {
    title: "Humanae Vitae",
    pope: "Paul VI",
    year: 1968,
    topic: "Birth Control and Marriage",
    summary: "Reaffirmed the Church's teaching that artificial contraception is intrinsically wrong, based on the inseparable connection between the unitive and procreative meanings of marriage.",
    keyQuotes: [
      "Each and every marital act must of necessity retain its intrinsic relationship to the procreation of human life.",
      "Responsible parenthood is exercised by those who prudently and generously decide to have more children."
    ],
    thomisticConnection: "Grounded in Aquinas's natural law theory, particularly his teaching on the natural ends of marriage and the inseparability of the procreative and unitive goods."
  },
  {
    title: "Deus Caritas Est",
    pope: "Benedict XVI",
    year: 2005,
    topic: "Christian Love",
    summary: "Benedict XVI's first encyclical explored the nature of love — eros and agape — and the Church's charitable mission.",
    keyQuotes: [
      "God is love, and he who abides in love abides in God, and God abides in him.",
      "Love of God and love of neighbor are thus inseparable."
    ],
    thomisticConnection: "Draws on Aquinas's theology of charity (ST II-II, qq. 23-46) as the form of all virtues."
  },
  {
    title: "Spe Salvi",
    pope: "Benedict XVI",
    year: 2007,
    topic: "Christian Hope",
    summary: "Explored the nature of Christian hope as a theological virtue, distinguishing it from mere optimism and connecting it to eternal life.",
    keyQuotes: [
      "The one who has hope lives differently.",
      "It is not science that redeems man: man is redeemed by love."
    ],
    thomisticConnection: "Engages Aquinas's treatment of hope as a theological virtue (ST II-II, qq. 17-22)."
  },
  {
    title: "Caritas in Veritate",
    pope: "Benedict XVI",
    year: 2009,
    topic: "Social Teaching and Development",
    summary: "Applied Catholic social teaching to globalization, economic development, and the environment, arguing that charity must be guided by truth.",
    keyQuotes: [
      "Charity in truth, to which Jesus Christ bore witness, is the principal driving force behind the authentic development of every person and of all humanity."
    ],
    thomisticConnection: "Applies Thomistic concepts of the common good, subsidiarity, and natural law to contemporary social questions."
  },
  {
    title: "Laudato Si'",
    pope: "Francis",
    year: 2015,
    topic: "Care for Creation",
    summary: "Called for an integral ecology connecting environmental stewardship with social justice, human dignity, and the common good.",
    keyQuotes: [
      "The earth, our home, is beginning to look more and more like an immense pile of filth.",
      "We are not faced with two separate crises, one environmental and the other social, but rather with one complex crisis which is both social and environmental."
    ],
    thomisticConnection: "Draws on Aquinas's understanding of creation as participating in God's goodness and the natural law basis for stewardship."
  },
  {
    title: "Lumen Fidei",
    pope: "Francis",
    year: 2013,
    topic: "The Light of Faith",
    summary: "Completed Benedict XVI's trilogy on the theological virtues. Explored faith as a light that illuminates all human experience.",
    keyQuotes: [
      "Faith is born of an encounter with the living God who calls us and reveals his love.",
      "Those who believe are never alone."
    ],
    thomisticConnection: "Engages Aquinas's teaching on faith as a virtue that perfects the intellect (ST II-II, qq. 1-16)."
  },
  {
    title: "Quadragesimo Anno",
    pope: "Pius XI",
    year: 1931,
    topic: "Reconstruction of the Social Order",
    summary: "Written forty years after Rerum Novarum, it introduced the principle of subsidiarity and critiqued both unfettered capitalism and socialism.",
    keyQuotes: [
      "It is an injustice, a grave evil, and a disturbance of right order for a larger and higher organization to arrogate to itself functions which can be performed efficiently by smaller and lower bodies.",
      "Free competition, while justified and useful within certain limits, cannot direct economic life."
    ],
    thomisticConnection: "The principle of subsidiarity is rooted in Aquinas's political philosophy and his understanding of the common good."
  },
  {
    title: "Mit Brennender Sorge",
    pope: "Pius XI",
    year: 1937,
    topic: "The Church and Nazism",
    summary: "Condemned Nazi ideology, particularly its deification of race and state. Written in German and smuggled into Germany for reading from every pulpit.",
    keyQuotes: [
      "Whoever exalts race, or the people, or the State, to the supreme norm above their standard value and divinizes them to an idolatrous level, distorts an order of the world planned and created by God."
    ],
    thomisticConnection: "Applies natural law reasoning to condemn totalitarianism's violation of human dignity and natural rights."
  },
  {
    title: "Centesimus Annus",
    pope: "John Paul II",
    year: 1991,
    topic: "Social Teaching after the Fall of Communism",
    summary: "Reflected on the fall of Communism and applied Catholic social teaching to the new global situation, affirming free markets within moral limits.",
    keyQuotes: [
      "If by 'capitalism' is meant a system in which freedom in the economic sector is not circumscribed within a strong juridical framework, then the reply is certainly negative."
    ],
    thomisticConnection: "Applies Thomistic principles of justice, common good, and natural law to post-Cold War economics."
  },
  {
    title: "Redemptor Hominis",
    pope: "John Paul II",
    year: 1979,
    topic: "Christ the Redeemer",
    summary: "John Paul II's programmatic first encyclical declared that Christ reveals man to himself and that human dignity is the foundation of the Church's mission.",
    keyQuotes: [
      "Man cannot live without love. He remains a being that is incomprehensible for himself, his life is senseless, if love is not revealed to him."
    ],
    thomisticConnection: "Integrates Thomistic anthropology with personalist philosophy to articulate the dignity of the human person."
  },
];
