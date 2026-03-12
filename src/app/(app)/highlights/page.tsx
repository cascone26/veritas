"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Highlight, getAllHighlights, deleteHighlight, updateHighlightNote } from "@/lib/highlights";

const COLOR_BG: Record<string, string> = {
  yellow: "rgba(250,204,21,0.3)",
  green: "rgba(74,222,128,0.3)",
  blue: "rgba(96,165,250,0.3)",
  pink: "rgba(244,114,182,0.3)",
};

function pageName(url: string): string {
  if (url.includes("/spiritual-reading/")) {
    const slug = url.split("/spiritual-reading/")[1];
    return slug
      ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "Spiritual Reading";
  }
  if (url.includes("/summa/")) {
    const parts = url.split("/summa/")[1]?.split("/");
    if (parts && parts.length >= 2) {
      return `Summa - ${parts[0]}, Q.${parts[1]}`;
    }
    return "Summa Theologica";
  }
  return url;
}

export default function HighlightsPage() {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [search, setSearch] = useState("");
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [editNoteText, setEditNoteText] = useState("");

  useEffect(() => {
    setHighlights(getAllHighlights());
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return highlights;
    const q = search.toLowerCase();
    return highlights.filter(
      (h) =>
        h.selectedText.toLowerCase().includes(q) ||
        h.note.toLowerCase().includes(q) ||
        h.pageUrl.toLowerCase().includes(q)
    );
  }, [highlights, search]);

  // Group by page
  const grouped = useMemo(() => {
    const map = new Map<string, Highlight[]>();
    for (const h of filtered) {
      const list = map.get(h.pageUrl) || [];
      list.push(h);
      map.set(h.pageUrl, list);
    }
    // Sort groups by most recent highlight
    return Array.from(map.entries()).sort((a, b) => {
      const aMax = Math.max(...a[1].map((h) => h.createdAt));
      const bMax = Math.max(...b[1].map((h) => h.createdAt));
      return bMax - aMax;
    });
  }, [filtered]);

  function handleDelete(id: string) {
    deleteHighlight(id);
    setHighlights(getAllHighlights());
  }

  function handleSaveNote(id: string) {
    updateHighlightNote(id, editNoteText);
    setEditingNote(null);
    setHighlights(getAllHighlights());
  }

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="My Highlights"
        subtitle={`${highlights.length} highlight${highlights.length !== 1 ? "s" : ""}`}
        icon="🖍"
      />

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto max-w-3xl">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search highlights..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-stone-800 bg-stone-900 px-4 py-2.5 text-sm text-stone-200 placeholder:text-stone-600 focus:border-amber-600 focus:outline-none"
            />
          </div>

          {highlights.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-stone-500 mb-2">No highlights yet</p>
              <p className="text-xs text-stone-600">
                Select text while reading to create highlights
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-stone-500">No highlights match your search</p>
            </div>
          ) : (
            <div className="space-y-8">
              {grouped.map(([url, items]) => (
                <div key={url}>
                  <div className="mb-3 flex items-center gap-2">
                    <Link
                      href={url}
                      className="text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      {pageName(url)}
                    </Link>
                    <span className="text-[10px] text-stone-600">
                      {items.length} highlight{items.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {items
                      .sort((a, b) => b.createdAt - a.createdAt)
                      .map((h) => (
                        <div
                          key={h.id}
                          className="rounded-lg border border-stone-800 bg-stone-900/50 p-3"
                        >
                          <div
                            className="rounded px-2 py-1 text-sm text-stone-300 leading-relaxed"
                            style={{ backgroundColor: COLOR_BG[h.color] }}
                          >
                            &ldquo;{h.selectedText}&rdquo;
                          </div>
                          {editingNote === h.id ? (
                            <div className="mt-2">
                              <textarea
                                className="w-full rounded border border-stone-700 bg-stone-800 p-2 text-xs text-stone-200 focus:border-amber-600 focus:outline-none"
                                rows={2}
                                value={editNoteText}
                                onChange={(e) => setEditNoteText(e.target.value)}
                                autoFocus
                              />
                              <div className="mt-1 flex gap-1 justify-end">
                                <button
                                  onClick={() => setEditingNote(null)}
                                  className="text-[10px] text-stone-500 hover:text-stone-300 px-2 py-1"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={() => handleSaveNote(h.id)}
                                  className="text-[10px] text-amber-400 bg-amber-600/20 px-2 py-1 rounded hover:bg-amber-600/30"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          ) : (
                            h.note && (
                              <p className="mt-2 text-xs text-stone-500 italic">
                                {h.note}
                              </p>
                            )
                          )}
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-[10px] text-stone-600">
                              {new Date(h.createdAt).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            <div className="flex gap-3">
                              <button
                                onClick={() => {
                                  setEditingNote(h.id);
                                  setEditNoteText(h.note);
                                }}
                                className="text-[10px] text-stone-500 hover:text-stone-300"
                              >
                                {h.note ? "Edit note" : "Add note"}
                              </button>
                              <button
                                onClick={() => handleDelete(h.id)}
                                className="text-[10px] text-red-500/60 hover:text-red-400"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
