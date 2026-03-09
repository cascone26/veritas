"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

type Difficulty = "beginner" | "intermediate" | "advanced";

interface Book {
  title: string;
  author: string;
  period: string;
  difficulty: Difficulty;
  covers: string;
  bestFor: string;
  keyInsight: string;
}

const BOOKS: Book[] = [
  {
    title: "Confessions",
    author: "St. Augustine",
    period: "397 AD",
    difficulty: "intermediate",
    covers: "Augustine's journey from sin and Manichaeism to Christianity. Part autobiography, part prayer, part philosophy. The first great spiritual memoir.",
    bestFor: "Anyone who has wrestled with sin, doubt, or intellectual pride. Converts especially.",
    keyInsight: "Our hearts are restless until they rest in God. The will, not just the intellect, must be converted.",
  },
  {
    title: "Introduction to the Devout Life",
    author: "St. Francis de Sales",
    period: "1609",
    difficulty: "beginner",
    covers: "Practical holiness for laypeople. How to pray, handle temptation, cultivate virtue, and live a devout life in the middle of the world — not just in a monastery.",
    bestFor: "Beginners who want a concrete spiritual program. Anyone who thinks holiness is only for monks and nuns.",
    keyInsight: "Devotion is possible in every state of life. Holiness is not about escape from the world but transformation within it.",
  },
  {
    title: "Story of a Soul",
    author: "St. Therese of Lisieux",
    period: "1897",
    difficulty: "beginner",
    covers: "The autobiography of the Little Flower and her 'Little Way' of spiritual childhood — doing small things with great love rather than seeking grand gestures.",
    bestFor: "Anyone overwhelmed by the idea of holiness. Those who feel too ordinary for sainthood.",
    keyInsight: "Holiness is not about doing extraordinary things but about doing ordinary things with extraordinary love.",
  },
  {
    title: "The Imitation of Christ",
    author: "Thomas a Kempis",
    period: "c. 1418-1427",
    difficulty: "beginner",
    covers: "Short meditations on the interior life, detachment from the world, consolation, and the Eucharist. The most widely read Christian devotional work after the Bible.",
    bestFor: "Daily devotional reading. Anyone seeking interior peace and detachment from worldly distractions.",
    keyInsight: "Vanity of vanities — all is vanity except loving God and serving Him alone.",
  },
  {
    title: "Interior Castle",
    author: "St. Teresa of Avila",
    period: "1577",
    difficulty: "advanced",
    covers: "The soul as a castle with seven mansions, each representing a stage of prayer and union with God. The definitive Catholic guide to mystical prayer.",
    bestFor: "Those serious about contemplative prayer. People who have been praying consistently and want to go deeper.",
    keyInsight: "The spiritual life is a journey inward. God dwells at the center of the soul, and prayer is the door.",
  },
  {
    title: "Dark Night of the Soul",
    author: "St. John of the Cross",
    period: "c. 1578-1585",
    difficulty: "advanced",
    covers: "The purification of the soul through spiritual darkness and dryness. How God strips away attachments — even spiritual consolations — to prepare the soul for union.",
    bestFor: "Those experiencing spiritual dryness or desolation. Advanced pray-ers who feel God has abandoned them.",
    keyInsight: "Spiritual darkness is not abandonment — it is God's way of purifying the soul for deeper union.",
  },
  {
    title: "Theology and Sanity",
    author: "Frank Sheed",
    period: "1946",
    difficulty: "intermediate",
    covers: "Catholic theology made accessible. The Trinity, the Incarnation, creation, the soul, grace — explained with razor clarity by one of the 20th century's best lay theologians.",
    bestFor: "Anyone who wants to actually understand Catholic theology rather than just memorize it.",
    keyInsight: "Theology is not a luxury for specialists — it is sanity. To not know God is to not know reality.",
  },
  {
    title: "Orthodoxy",
    author: "G.K. Chesterton",
    period: "1908",
    difficulty: "intermediate",
    covers: "Chesterton's intellectual autobiography — how he set out to invent a new philosophy and discovered it was Christianity. Brilliant paradoxes, devastating wit, and a joyful defense of Christian truth.",
    bestFor: "Intellectuals, skeptics, people who think Christianity is boring or irrational. Anyone who loves good writing.",
    keyInsight: "Christianity is the only framework that accounts for the full paradox of human experience — that life is both a tragedy and a comedy.",
  },
  {
    title: "Mere Christianity",
    author: "C.S. Lewis",
    period: "1952",
    difficulty: "beginner",
    covers: "The rational case for Christianity from natural law, through the nature of God, to Christian behavior and theology. Based on BBC radio talks during WWII.",
    bestFor: "Skeptics, seekers, new Christians. The best entry-level apologetics book ever written.",
    keyInsight: "The Moral Law points to a Lawgiver. Jesus was either Lord, liar, or lunatic — there is no room for 'just a great teacher.'",
  },
  {
    title: "The Everlasting Man",
    author: "G.K. Chesterton",
    period: "1925",
    difficulty: "intermediate",
    covers: "A sweeping vision of human history and the uniqueness of Christ. A response to H.G. Wells's Outline of History. Shows that Christianity is not one myth among many but the fulfillment of all myths.",
    bestFor: "Anyone who has heard that Christianity is just recycled pagan mythology. History lovers.",
    keyInsight: "Christ is not a myth that became fact — He is the fact that all myths were pointing toward.",
  },
  {
    title: "Summa of the Summa",
    author: "Peter Kreeft (editor)",
    period: "1990",
    difficulty: "intermediate",
    covers: "The most important and accessible passages from the Summa Theologica, with Kreeft's explanatory footnotes. The best way into Aquinas for the non-specialist.",
    bestFor: "Anyone intimidated by the full Summa who wants the essential arguments with helpful commentary.",
    keyInsight: "Aquinas's genius is not in obscurity but in clarity. His arguments are more radical and relevant than most modern philosophy.",
  },
  {
    title: "City of God",
    author: "St. Augustine",
    period: "413-426 AD",
    difficulty: "advanced",
    covers: "Augustine's magnum opus — a philosophy of history contrasting the City of God (those who love God) with the City of Man (those who love self). Written after the sack of Rome.",
    bestFor: "Serious readers who want to understand the Catholic philosophy of history, politics, and culture.",
    keyInsight: "All of human history is the story of two cities — two loves — and every person and society must choose between them.",
  },
  {
    title: "The Spirit of the Liturgy",
    author: "Joseph Ratzinger (Benedict XVI)",
    period: "2000",
    difficulty: "intermediate",
    covers: "Why liturgy matters, how it works, what the parts mean, and how modern reforms both helped and harmed it. A theological meditation on worship.",
    bestFor: "Catholics who want to understand why Mass is the way it is. Those drawn to liturgical beauty.",
    keyInsight: "The liturgy is not something we create — it is something we enter into. It is heaven touching earth.",
  },
  {
    title: "Jesus of Nazareth",
    author: "Benedict XVI",
    period: "2007-2012",
    difficulty: "intermediate",
    covers: "A three-volume portrait of Jesus combining historical-critical scholarship with the faith of the Church. Ratzinger's personal theological masterwork.",
    bestFor: "Anyone who wants a sophisticated, faith-filled encounter with the historical Jesus.",
    keyInsight: "The Jesus of history and the Christ of faith are the same person. Scholarship and faith illuminate each other.",
  },
  {
    title: "Rediscovering Catholicism",
    author: "Matthew Kelly",
    period: "2002",
    difficulty: "beginner",
    covers: "A wake-up call for lukewarm Catholics. Why the faith matters, what it actually teaches, and how to live it with passion and purpose.",
    bestFor: "Cradle Catholics who have gone through the motions. Anyone returning to the faith after time away.",
    keyInsight: "Catholicism is not a set of rules — it is a path to becoming the best version of yourself.",
  },
  {
    title: "Rome Sweet Home",
    author: "Scott & Kimberly Hahn",
    period: "1993",
    difficulty: "beginner",
    covers: "The conversion story of a Presbyterian minister and his wife. How a fierce anti-Catholic became one of the Church's most prominent defenders.",
    bestFor: "Protestants considering Catholicism. Anyone interested in conversion stories.",
    keyInsight: "The Catholic Church has answers to the questions that Protestantism cannot resolve — authority, the canon of Scripture, the Eucharist.",
  },
  {
    title: "The Last Superstition",
    author: "Edward Feser",
    period: "2008",
    difficulty: "intermediate",
    covers: "A polemical defense of Aristotelian-Thomistic philosophy against the New Atheists. Argues that modern philosophy took a catastrophically wrong turn in abandoning Aristotle.",
    bestFor: "Those who have read Dawkins/Hitchens and want the strongest philosophical counter. Philosophy enthusiasts.",
    keyInsight: "The New Atheists are not refuting classical theism — they do not even understand it. Their arguments attack a straw man.",
  },
  {
    title: "Five Proofs of the Existence of God",
    author: "Edward Feser",
    period: "2017",
    difficulty: "advanced",
    covers: "Five rigorous philosophical arguments for God's existence: Aristotelian, Neo-Platonic, Augustinian, Thomistic, and Rationalist. Each developed in full with responses to objections.",
    bestFor: "Philosophy students, serious apologists, anyone who wants ironclad arguments for theism.",
    keyInsight: "The existence of God is not a matter of faith — it is demonstrable through reason alone, and the arguments have never been successfully refuted.",
  },
  {
    title: "Aquinas: A Beginner's Guide",
    author: "Edward Feser",
    period: "2009",
    difficulty: "intermediate",
    covers: "The clearest modern introduction to Aquinas's philosophy: metaphysics, natural theology, psychology, ethics, and natural law. Makes Thomism accessible without dumbing it down.",
    bestFor: "Anyone who wants to understand Aquinas but does not know where to start.",
    keyInsight: "Aquinas's philosophy is not medieval trivia — it is the most coherent and powerful philosophical system ever developed.",
  },
  {
    title: "The Problem of Pain",
    author: "C.S. Lewis",
    period: "1940",
    difficulty: "beginner",
    covers: "Why a good God allows suffering. Lewis tackles the hardest objection to Christianity with clarity, honesty, and depth.",
    bestFor: "Anyone struggling with the problem of evil. People who have experienced suffering and wonder where God is.",
    keyInsight: "Pain is not evidence against God — it is the megaphone God uses to rouse a deaf world. Suffering can be redemptive.",
  },
  {
    title: "Theology for Beginners",
    author: "Frank Sheed",
    period: "1957",
    difficulty: "beginner",
    covers: "A shorter, simpler version of Theology and Sanity. God, the Trinity, creation, the Incarnation, grace, the Church, and the sacraments in under 200 pages.",
    bestFor: "True beginners in theology. RCIA candidates. Anyone who wants the essentials fast.",
    keyInsight: "You do not need a degree to understand God — you need clarity and willingness to think.",
  },
  {
    title: "The Screwtape Letters",
    author: "C.S. Lewis",
    period: "1942",
    difficulty: "beginner",
    covers: "A senior demon writes letters advising his nephew on how to tempt a human soul. Brilliant satire that exposes how temptation actually works in daily life.",
    bestFor: "Everyone. Especially those who think spiritual warfare is abstract or irrelevant.",
    keyInsight: "The devil's greatest trick is not dramatic evil — it is gradual distraction, complacency, and the slow drift away from God.",
  },
  {
    title: "True Devotion to Mary",
    author: "St. Louis de Montfort",
    period: "1712 (published 1843)",
    difficulty: "intermediate",
    covers: "The theology of Marian consecration — why total devotion to Mary is the fastest path to Jesus. The foundation for the 33-day consecration practice.",
    bestFor: "Catholics ready to deepen their Marian devotion. Those preparing for Marian consecration.",
    keyInsight: "To Jesus through Mary is not a detour — it is the shortcut God Himself chose when He came to us through her.",
  },
  {
    title: "Catholicism: A Journey to the Heart of the Faith",
    author: "Bishop Robert Barron",
    period: "2011",
    difficulty: "beginner",
    covers: "A comprehensive, beautiful introduction to the Catholic faith through its art, architecture, saints, and ideas. Companion to the documentary series.",
    bestFor: "Visual learners, seekers, anyone who wants to see why Catholicism is beautiful — not just true.",
    keyInsight: "Catholicism is not a system of prohibitions — it is the most beautiful, compelling, intellectually rich tradition in human history.",
  },
  {
    title: "The Way of Perfection",
    author: "St. Teresa of Avila",
    period: "1566",
    difficulty: "intermediate",
    covers: "Practical guidance on prayer, humility, and the spiritual life. Written for Teresa's Carmelite sisters but applicable to all Christians seeking deeper prayer.",
    bestFor: "Those developing a prayer life beyond basic vocal prayer. Anyone interested in Carmelite spirituality.",
    keyInsight: "Mental prayer is nothing other than a close sharing between friends — it is frequently taking time to be alone with the One who loves us.",
  },
  {
    title: "The Practice of the Presence of God",
    author: "Brother Lawrence",
    period: "1692",
    difficulty: "beginner",
    covers: "A lay brother's simple method of maintaining constant awareness of God's presence through every mundane task. Conversations and letters collected after his death.",
    bestFor: "Anyone who feels too busy to pray. People who struggle to find God outside of church.",
    keyInsight: "Washing dishes can be as holy as receiving communion — if done with love and awareness of God's presence.",
  },
];

const DIFFICULTIES: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export default function SpiritualReadingPage() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = BOOKS.filter((b) => {
    if (difficulty !== "all" && b.difficulty !== difficulty) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        b.title.toLowerCase().includes(s) ||
        b.author.toLowerCase().includes(s) ||
        b.covers.toLowerCase().includes(s)
      );
    }
    return true;
  });

  const difficultyColor = (d: Difficulty) => {
    switch (d) {
      case "beginner": return "text-emerald-400 border-emerald-800 bg-emerald-900/30";
      case "intermediate": return "text-amber-400 border-amber-800 bg-amber-900/30";
      case "advanced": return "text-red-400 border-red-800 bg-red-900/30";
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Spiritual Reading Guide"
        subtitle="Essential Catholic books for every stage of the journey"
        icon="📖"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3 space-y-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, author, or topic..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
          <div className="flex gap-2">
            {DIFFICULTIES.map((d) => (
              <button
                key={d.id}
                onClick={() => setDifficulty(d.id)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  difficulty === d.id
                    ? "bg-amber-900/50 text-amber-400 border border-amber-700"
                    : "bg-stone-900 text-stone-500 border border-stone-800 hover:border-stone-700"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-stone-600">
            {filtered.length} books
          </p>
        </div>
        <div className="px-6 py-4 space-y-2">
          {filtered.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-stone-800 transition-colors hover:border-stone-700"
            >
              <button
                onClick={() =>
                  setExpanded(expanded === b.title ? null : b.title)
                }
                className="w-full px-4 py-3 text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-sm text-stone-200">
                      {b.title}
                    </span>
                    <span className="ml-2 text-xs text-stone-500">
                      — {b.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] border ${difficultyColor(b.difficulty)}`}>
                      {b.difficulty}
                    </span>
                    <span className="text-[10px] text-stone-600">
                      {b.period}
                    </span>
                  </div>
                </div>
              </button>
              {expanded === b.title && (
                <div className="border-t border-stone-800 px-4 py-4 space-y-3">
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      What It Covers
                    </h4>
                    <p className="text-sm text-stone-300">{b.covers}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Best For
                    </h4>
                    <p className="text-sm text-stone-400">{b.bestFor}</p>
                  </div>
                  <div className="rounded-lg bg-stone-900 p-3">
                    <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                      Key Insight
                    </h4>
                    <p className="text-sm italic text-stone-300">
                      {b.keyInsight}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
