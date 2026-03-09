"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_SECTIONS } from "@/lib/constants";
import { useState } from "react";

const iconMap: Record<string, string> = {
  chat: "💬", shield: "🛡️", target: "🎯", swords: "⚔️",
  book: "📖", cards: "🃏", sun: "☀️", route: "🗺️", "target-weak": "📍",
  zap: "⚡", scroll: "📜", glossary: "📚", lightbulb: "💡", scale: "⚖️",
  library: "🏛️", flame: "🔥", users: "👥", star: "⭐", map: "🗂️",
  document: "📄", clock: "⏳", tree: "🌳",
  pencil: "✏️", bookmark: "🔖", check: "✅", pray: "🙏",
};

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed top-4 left-4 z-50 rounded-lg border border-stone-700 bg-stone-900 p-2 text-stone-300 lg:hidden"
      >
        {collapsed ? "✕" : "☰"}
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 overflow-y-auto border-r border-stone-800 bg-stone-950 transition-transform lg:translate-x-0 ${
          collapsed ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-5 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wide text-amber-500">VERITAS</span>
          </Link>
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-stone-600">
            Catholic Theology & Apologetics
          </p>
        </div>

        <nav className="px-3 py-4">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="mb-4">
              <h3 className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-stone-600">
                {section.title}
              </h3>
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setCollapsed(false)}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm transition-colors ${
                      active
                        ? "bg-amber-500/10 text-amber-500"
                        : "text-stone-400 hover:bg-stone-800/50 hover:text-stone-200"
                    }`}
                  >
                    <span className="text-xs">{iconMap[item.icon] || "•"}</span>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
