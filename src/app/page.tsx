const features = [
  {
    title: "Ask Thomas",
    desc: "AI chat grounded in the complete works of Aquinas. Real citations. Adjusts to your level.",
    icon: "💬",
  },
  {
    title: "Objection Handler",
    desc: "Paste any anti-Catholic argument. Get a structured Thomistic response.",
    icon: "⚔️",
  },
  {
    title: "Debate Simulator",
    desc: "Practice against AI opponents — atheist, Protestant, Muslim, secular. Get scored.",
    icon: "🎯",
  },
  {
    title: "Summa Browser",
    desc: "512 questions. 2,669 articles. Searchable, cross-referenced, with plain English summaries.",
    icon: "📖",
  },
  {
    title: "Apologetics Quick-Draw",
    desc: "Organized by objection. Fast lookup with full sources for live conversations.",
    icon: "⚡",
  },
  {
    title: "Spaced Repetition",
    desc: "AI-generated flashcards that test understanding, not just memory. Tracks your weak spots.",
    icon: "🧠",
  },
];

const stats = [
  { value: "150+", label: "Works by Aquinas" },
  { value: "2,669", label: "Summa Articles" },
  { value: "10,000+", label: "Objections Answered" },
  { value: "45+", label: "Features Built" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <div className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gold-dim">
          Catholic Theology & Apologetics
        </div>
        <h1 className="mb-6 max-w-3xl text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
          VERITAS
        </h1>
        <p className="mb-4 max-w-lg text-lg leading-relaxed text-stone-400">
          Personal AI-powered platform built on the complete works of
          St. Thomas Aquinas and everything he drew from.
        </p>
        <p className="mb-10 max-w-md text-sm text-stone-500 italic">
          &ldquo;All that I have written seems like straw compared to what has now been revealed to me.&rdquo;
          <span className="block mt-1 not-italic text-gold-dim">— St. Thomas Aquinas, 1273</span>
        </p>
        <div className="flex gap-4">
          <a
            href="/ask"
            className="rounded-full border border-gold/30 bg-gold/10 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/20"
          >
            Enter Veritas
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-parchment/50 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gold">{stat.value}</div>
              <div className="mt-1 text-sm text-stone-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-[0.3em] text-gold-dim">
          Core Features
        </h2>
        <p className="mb-12 text-center text-stone-500">
          45+ features. Everything from AI chat to spaced repetition to debate simulation.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-parchment p-6 transition-colors hover:border-gold/30"
            >
              <div className="mb-3 text-2xl">{f.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-stone-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="border-t border-border bg-parchment/30 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-gold-dim">
            The Knowledge Base
          </h2>
          <p className="mb-8 text-2xl font-semibold text-foreground">
            Built on ~8-9 million words of primary sources
          </p>
          <div className="space-y-4 text-left text-sm text-stone-400">
            <div className="rounded-lg border border-border bg-background p-4">
              <span className="font-semibold text-foreground">Aquinas&apos;s Complete Works</span> — Summa Theologica, Summa Contra Gentiles,
              Disputed Questions, Quodlibetals, Biblical Commentaries, Aristotle Commentaries,
              Opuscula, Liturgical Works, Letters & Sermons
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <span className="font-semibold text-foreground">His Sources</span> — Sacred Scripture, Aristotle, Augustine (30+ works),
              Church Fathers (Latin & Greek), Avicenna, Averroes, Maimonides, Boethius,
              Pseudo-Dionysius, Canon Law, Ecumenical Councils
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <span className="font-semibold text-foreground">What He Argued Against</span> — Islamic philosophy, Neoplatonism, Epicureanism,
              Stoicism, Skepticism, 11 Christian heresies, rival Scholastics, materialism,
              pantheism, emanationism, occasionalism, voluntarism, fideism
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <span className="font-semibold text-foreground">Modern Apologetics</span> — Pre-built responses for atheists, Protestants,
              Muslims, Orthodox, secular/progressive, &ldquo;spiritual but not religious,&rdquo; and ex-Catholics.
              Top 5 encounters for each, steelmanned and answered.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-stone-600">
        Ad Maiorem Dei Gloriam
      </footer>
    </div>
  );
}
