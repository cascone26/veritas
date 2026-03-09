"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_SECTIONS } from "@/lib/constants";
import { useState, useEffect } from "react";

const iconMap: Record<string, string> = {
  chat: "💬", shield: "🛡️", target: "🎯", swords: "⚔️",
  book: "📖", cards: "🃏", sun: "☀️", route: "🗺️", "target-weak": "📍",
  zap: "⚡", scroll: "📜", glossary: "📚", lightbulb: "💡", scale: "⚖️",
  library: "🏛️", flame: "🔥", users: "👥", star: "⭐", map: "🗂️",
  document: "📄", clock: "⏳", tree: "🌳",
  pencil: "✏️", bookmark: "🔖", check: "✅", pray: "🙏", settings: "⚙️",
};

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggleSection = (title: string) => {
    setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  // Find which section the current path belongs to (auto-expand it)
  const activeSection = NAV_SECTIONS.find((s) =>
    s.items.some((item) => pathname === item.href)
  )?.title;

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-3 left-3 z-50 rounded-lg border border-stone-700 bg-stone-900/90 backdrop-blur p-2.5 text-stone-300 lg:hidden"
        aria-label="Open menu"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto border-r border-stone-800 bg-stone-950 transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-5 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="text-xl font-bold tracking-wide text-amber-500">VERITAS</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-stone-500 hover:text-stone-300 lg:hidden"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav */}
        <nav className="px-3 py-3 pb-24 lg:pb-6">
          {NAV_SECTIONS.map((section) => {
            const isCollapsed = collapsed[section.title] && section.title !== activeSection;
            const hasActive = section.items.some((item) => pathname === item.href);

            return (
              <div key={section.title} className="mb-1">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between px-2 py-2 group"
                >
                  <h3 className={`text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                    hasActive ? "text-amber-600" : "text-stone-600 group-hover:text-stone-400"
                  }`}>
                    {section.title}
                  </h3>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`text-stone-700 transition-transform duration-200 ${
                      isCollapsed ? "-rotate-90" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {!isCollapsed && (
                  <div className="mb-2">
                    {section.items.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] transition-colors ${
                            active
                              ? "bg-amber-500/10 text-amber-500"
                              : "text-stone-400 hover:bg-stone-800/50 hover:text-stone-200"
                          }`}
                        >
                          <span className="text-xs w-4 text-center">{iconMap[item.icon] || "•"}</span>
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-stone-800 bg-stone-950/95 backdrop-blur-sm px-2 py-1.5 lg:hidden safe-bottom">
        <div className="flex items-center justify-around">
          {[
            { name: "Ask", href: "/ask", icon: "💬" },
            { name: "Objection", href: "/objection", icon: "🛡️" },
            { name: "Summa", href: "/summa", icon: "📖" },
            { name: "Encyclopedia", href: "/encyclopedia", icon: "🏛️" },
            { name: "More", href: "#menu", icon: "☰" },
          ].map((item) => {
            if (item.href === "#menu") {
              return (
                <button
                  key={item.name}
                  onClick={() => setOpen(true)}
                  className="flex flex-col items-center gap-0.5 px-2 py-1 text-stone-500"
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="text-[9px]">{item.name}</span>
                </button>
              );
            }
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${
                  active ? "text-amber-500" : "text-stone-500"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-[9px]">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
