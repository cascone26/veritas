"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("veritas-notes");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setNotes(parsed);
        if (parsed.length > 0) {
          selectNote(parsed[0]);
        }
      } catch {}
    }
  }, []);

  const saveNotes = (updated: Note[]) => {
    setNotes(updated);
    localStorage.setItem("veritas-notes", JSON.stringify(updated));
  };

  const selectNote = (note: Note) => {
    setSelectedId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setTagInput(note.tags.join(", "));
  };

  const createNew = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const updated = [newNote, ...notes];
    saveNotes(updated);
    selectNote(newNote);
  };

  const saveCurrentNote = () => {
    if (!selectedId) return;
    const tags = tagInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const updated = notes.map((n) =>
      n.id === selectedId
        ? { ...n, title, content, tags, updatedAt: new Date().toISOString() }
        : n
    );
    saveNotes(updated);
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    saveNotes(updated);
    if (selectedId === id) {
      if (updated.length > 0) {
        selectNote(updated[0]);
      } else {
        setSelectedId(null);
        setTitle("");
        setContent("");
        setTagInput("");
      }
    }
  };

  const filtered = notes.filter((n) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (
      n.title.toLowerCase().includes(s) ||
      n.content.toLowerCase().includes(s) ||
      n.tags.some((t) => t.toLowerCase().includes(s))
    );
  });

  return (
    <div className="flex h-app flex-col">
      <PageHeader
        title="Notes & Journal"
        subtitle="Your personal theological notebook"
        icon="📝"
      />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0 border-r border-stone-800 flex flex-col">
          <div className="p-3 space-y-2 border-b border-stone-800">
            <button
              onClick={createNew}
              className="w-full rounded-lg bg-amber-700 px-3 py-1.5 text-xs font-medium text-stone-100 hover:bg-amber-600 transition-colors"
            >
              + New Note
            </button>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes..."
              className="w-full rounded-lg border border-stone-800 bg-stone-900 px-2 py-1.5 text-xs text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="p-3 text-xs text-stone-600">No notes yet.</p>
            ) : (
              filtered.map((n) => (
                <button
                  key={n.id}
                  onClick={() => selectNote(n)}
                  className={`w-full border-b border-stone-800/50 px-3 py-2.5 text-left transition-colors ${
                    selectedId === n.id
                      ? "bg-stone-800/50"
                      : "hover:bg-stone-900"
                  }`}
                >
                  <p className="text-xs font-medium text-stone-300 truncate">
                    {n.title || "Untitled"}
                  </p>
                  <p className="text-[10px] text-stone-600 truncate mt-0.5">
                    {n.content.slice(0, 60) || "Empty note"}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {n.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded bg-stone-800 px-1 py-0.5 text-[8px] text-stone-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 flex flex-col">
          {selectedId ? (
            <>
              <div className="border-b border-stone-800 px-4 py-3 space-y-2">
                <div className="flex items-center justify-between">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={saveCurrentNote}
                    placeholder="Note title..."
                    className="flex-1 bg-transparent text-sm font-semibold text-stone-200 outline-none placeholder-stone-600"
                  />
                  <button
                    onClick={() => deleteNote(selectedId)}
                    className="text-[10px] text-red-600 hover:text-red-400 ml-2"
                  >
                    Delete
                  </button>
                </div>
                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onBlur={saveCurrentNote}
                  placeholder="Tags (comma-separated)..."
                  className="w-full bg-transparent text-xs text-stone-400 outline-none placeholder-stone-600"
                />
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onBlur={saveCurrentNote}
                placeholder="Start writing..."
                className="flex-1 resize-none bg-transparent px-4 py-3 text-sm text-stone-300 outline-none placeholder-stone-600 leading-relaxed"
              />
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-stone-500">No note selected</p>
                <button
                  onClick={createNew}
                  className="mt-2 text-xs text-amber-600 hover:text-amber-500"
                >
                  Create your first note
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
