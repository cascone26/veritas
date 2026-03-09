"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

interface EncyclopediaSection {
  name: string;
  icon: string;
  description: string;
  entryCount: string;
  href: string;
}

const SECTIONS: EncyclopediaSection[] = [
  {
    name: "Summa Browser",
    icon: "📖",
    description: "Browse all 512 questions and 2,669 articles of the Summa Theologica",
    entryCount: "512 questions",
    href: "/summa",
  },
  {
    name: "Heresy Index",
    icon: "🔥",
    description: "Every major heresy catalogued — what it claims, why it's wrong, how to refute it",
    entryCount: "30+ heresies",
    href: "/heresies",
  },
  {
    name: "Church Fathers",
    icon: "📜",
    description: "The great theologians of the first millennium — Latin, Greek, and Syriac traditions",
    entryCount: "24 Fathers",
    href: "/fathers",
  },
  {
    name: "Saints & Doctors",
    icon: "👑",
    description: "All 37 Doctors of the Church — their lives, works, and connection to Aquinas",
    entryCount: "37 Doctors",
    href: "/saints",
  },
  {
    name: "Denominations",
    icon: "🗂️",
    description: "What each denomination believes and how to engage them from a Catholic perspective",
    entryCount: "10+ traditions",
    href: "/denominations",
  },
  {
    name: "Encyclicals",
    icon: "📋",
    description: "Major papal encyclicals with summaries and Thomistic connections",
    entryCount: "18 encyclicals",
    href: "/encyclicals",
  },
  {
    name: "Timeline",
    icon: "📅",
    description: "Key events in Catholic intellectual history from Pentecost to the present",
    entryCount: "60+ events",
    href: "/timeline",
  },
  {
    name: "Scripture Index",
    icon: "📜",
    description: "Contested verses with Catholic interpretation and Thomistic defense",
    entryCount: "50+ verses",
    href: "/scripture",
  },
  {
    name: "Glossary",
    icon: "📚",
    description: "Theological and philosophical terms in plain English with progressive depth",
    entryCount: "100+ terms",
    href: "/glossary",
  },
  {
    name: "Natural Law",
    icon: "⚖️",
    description: "Natural law arguments, modern applications, objections, and responses",
    entryCount: "12 topics",
    href: "/naturallaw",
  },
  {
    name: "Analogy Bank",
    icon: "💡",
    description: "Analogies for every major doctrine — with strengths, limitations, and heresy warnings",
    entryCount: "25+ analogies",
    href: "/analogies",
  },
  {
    name: "Argument Trees",
    icon: "🌳",
    description: "Pre-built logical argument structures for major proofs of the faith",
    entryCount: "5 arguments",
    href: "/arguments",
  },
  {
    name: "Aquinas: Life & Works",
    icon: "✝️",
    description: "Complete biography and catalog of every authenticated work (~150 compositions)",
    entryCount: "150+ works",
    href: "/aquinas-life",
  },
  {
    name: "Ecumenical Councils",
    icon: "🏛️",
    description: "All 21 ecumenical councils — dates, definitions, significance",
    entryCount: "21 councils",
    href: "/councils",
  },
  {
    name: "Marian Encyclopedia",
    icon: "⭐",
    description: "4 Marian dogmas, 30+ titles, apparitions, and prayers with full theology",
    entryCount: "30+ entries",
    href: "/marian",
  },
  {
    name: "Virtues & Vices",
    icon: "⚖️",
    description: "Theological virtues, cardinal virtues, capital sins, gifts, fruits, beatitudes",
    entryCount: "40+ entries",
    href: "/virtues",
  },
  {
    name: "Typology Index",
    icon: "📜",
    description: "Old Testament types and their New Testament fulfillments",
    entryCount: "25+ types",
    href: "/typology",
  },
  {
    name: "Prophecy Fulfillment",
    icon: "🔮",
    description: "Every messianic prophecy with OT source and NT fulfillment",
    entryCount: "30+ prophecies",
    href: "/prophecies",
  },
  {
    name: "Sacraments",
    icon: "🙏",
    description: "All 7 sacraments — matter, form, minister, effects, objections, and responses",
    entryCount: "7 sacraments",
    href: "/sacraments",
  },
  {
    name: "Biblical Covenants",
    icon: "🗺️",
    description: "The 6 covenants from Adam to the New Covenant — salvation history mapped",
    entryCount: "6 covenants",
    href: "/covenants",
  },
  {
    name: "Logical Fallacies",
    icon: "🎯",
    description: "30+ formal and informal fallacies with theological examples",
    entryCount: "30+ fallacies",
    href: "/fallacies",
  },
  {
    name: "Modern Critics",
    icon: "👤",
    description: "Profiles of major critics of Christianity with pre-loaded Thomistic responses",
    entryCount: "15 thinkers",
    href: "/critics",
  },
  {
    name: "Myth Buster",
    icon: "💥",
    description: "20+ anti-Catholic myths with documented historical corrections",
    entryCount: "20+ myths",
    href: "/myths",
  },
  {
    name: "Catholic Contributions",
    icon: "💡",
    description: "What the Catholic Church gave the world — science, art, law, education, charity",
    entryCount: "25+ contributions",
    href: "/contributions",
  },
  {
    name: "Bioethics",
    icon: "🧬",
    description: "Catholic positions on modern bioethical issues with natural law reasoning",
    entryCount: "12 topics",
    href: "/bioethics",
  },
  {
    name: "Social Teaching",
    icon: "👥",
    description: "Catholic Social Teaching principles with key encyclicals and applications",
    entryCount: "12 principles",
    href: "/social",
  },
  {
    name: "One-Liners",
    icon: "⚡",
    description: "100+ punchy one-line Catholic responses organized by topic",
    entryCount: "100+ lines",
    href: "/oneliners",
  },
  {
    name: "Debate Playbook",
    icon: "📋",
    description: "How to debate effectively — Socratic method, framing, traps, and strategy",
    entryCount: "10 sections",
    href: "/debate-playbook",
  },
  {
    name: "Spiritual Reading",
    icon: "📖",
    description: "25+ Catholic spiritual classics ranked and described",
    entryCount: "25+ books",
    href: "/spiritual-reading",
  },
];

export default function EncyclopediaPage() {
  const [search, setSearch] = useState("");

  const filtered = SECTIONS.filter((s) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Encyclopedia"
        subtitle="Your complete Catholic reference library"
        icon="🏛️"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search all reference sections..."
            className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
          />
        </div>
        <div className="px-6 py-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-xl border border-stone-800 p-4 transition-all hover:border-amber-800/50 hover:bg-stone-900/30"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">
                      {section.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-500 leading-relaxed">
                      {section.description}
                    </p>
                    <p className="mt-2 text-[10px] text-amber-600">
                      {section.entryCount}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
