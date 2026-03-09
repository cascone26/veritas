"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

interface WeakArea {
  id: string;
  topic: string;
  confidence: number;
  lastReviewed: string;
  notes: string;
}

export default function WeaknessPage() {
  const [areas, setAreas] = useState<WeakArea[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newTopic, setNewTopic] = useState("");
  const [newConfidence, setNewConfidence] = useState(3);
  const [newNotes, setNewNotes] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("veritas-weakness");
    if (stored) {
      try {
        setAreas(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const save = (updated: WeakArea[]) => {
    setAreas(updated);
    localStorage.setItem("veritas-weakness", JSON.stringify(updated));
  };

  const addArea = () => {
    if (!newTopic.trim()) return;
    const entry: WeakArea = {
      id: Date.now().toString(),
      topic: newTopic.trim(),
      confidence: newConfidence,
      lastReviewed: new Date().toISOString(),
      notes: newNotes.trim(),
    };
    save([...areas, entry]);
    resetForm();
  };

  const updateArea = () => {
    if (!editingId || !newTopic.trim()) return;
    const updated = areas.map((a) =>
      a.id === editingId
        ? {
            ...a,
            topic: newTopic.trim(),
            confidence: newConfidence,
            notes: newNotes.trim(),
            lastReviewed: new Date().toISOString(),
          }
        : a
    );
    save(updated);
    resetForm();
  };

  const deleteArea = (id: string) => {
    save(areas.filter((a) => a.id !== id));
  };

  const startEdit = (a: WeakArea) => {
    setEditingId(a.id);
    setNewTopic(a.topic);
    setNewConfidence(a.confidence);
    setNewNotes(a.notes);
    setShowForm(true);
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setNewTopic("");
    setNewConfidence(3);
    setNewNotes("");
  };

  const sorted = [...areas].sort((a, b) => a.confidence - b.confidence);

  const confidenceColor = (c: number) => {
    if (c <= 1) return "text-red-400";
    if (c <= 2) return "text-orange-400";
    if (c <= 3) return "text-yellow-400";
    if (c <= 4) return "text-emerald-400";
    return "text-green-400";
  };

  const confidenceBarColor = (c: number) => {
    if (c <= 1) return "bg-red-500";
    if (c <= 2) return "bg-orange-500";
    if (c <= 3) return "bg-yellow-500";
    if (c <= 4) return "bg-emerald-500";
    return "bg-green-500";
  };

  const confidenceLabel = (c: number) => {
    const labels = ["", "Very Weak", "Weak", "Moderate", "Good", "Strong"];
    return labels[c] || "";
  };

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Weakness Tracker"
        subtitle="Track your weak areas and build confidence over time"
        icon="🎯"
      />
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950 px-6 py-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-stone-400">
              {areas.length} topics tracked
            </p>
            <button
              onClick={() => {
                if (showForm) resetForm();
                else setShowForm(true);
              }}
              className="rounded-lg bg-amber-700 px-3 py-1.5 text-xs font-medium text-stone-100 hover:bg-amber-600 transition-colors"
            >
              {showForm ? "Cancel" : "+ Add Topic"}
            </button>
          </div>
        </div>
        <div className="px-6 py-4 space-y-4">
          {showForm && (
            <div className="rounded-xl border border-amber-900/50 bg-amber-950/10 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-amber-400">
                {editingId ? "Update Topic" : "New Weak Area"}
              </h3>
              <input
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                placeholder="Topic (e.g., Christology, The Fourth Way, Purgatory)"
                className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700"
              />
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Confidence: {newConfidence}/5 — {confidenceLabel(newConfidence)}
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setNewConfidence(n)}
                      className={`flex-1 rounded-lg border py-2 text-sm font-medium transition-colors ${
                        newConfidence === n
                          ? "border-amber-700 bg-amber-900/30 text-amber-400"
                          : "border-stone-800 bg-stone-900 text-stone-500 hover:border-stone-700"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                placeholder="Notes (what specifically do you struggle with?)"
                rows={3}
                className="w-full rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700 resize-none"
              />
              <button
                onClick={editingId ? updateArea : addArea}
                disabled={!newTopic.trim()}
                className="rounded-lg bg-amber-700 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-amber-600 disabled:opacity-50 transition-colors"
              >
                {editingId ? "Update" : "Add"}
              </button>
            </div>
          )}

          {sorted.length === 0 && !showForm ? (
            <div className="text-center py-12">
              <p className="text-sm text-stone-500">No weak areas tracked yet.</p>
              <p className="text-xs text-stone-600 mt-1">
                Add topics you want to improve on.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {sorted.map((a) => (
                <div
                  key={a.id}
                  className="rounded-xl border border-stone-800 px-4 py-3 transition-colors hover:border-stone-700"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-stone-200">
                      {a.topic}
                    </h3>
                    <span className={`text-sm font-bold ${confidenceColor(a.confidence)}`}>
                      {a.confidence}/5
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-stone-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${confidenceBarColor(a.confidence)}`}
                      style={{ width: `${(a.confidence / 5) * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[10px] text-stone-600">
                      Last reviewed: {new Date(a.lastReviewed).toLocaleDateString()}
                    </span>
                    <span className={`text-[10px] ${confidenceColor(a.confidence)}`}>
                      {confidenceLabel(a.confidence)}
                    </span>
                  </div>
                  {a.notes && (
                    <p className="mt-2 text-xs text-stone-500">{a.notes}</p>
                  )}
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => startEdit(a)}
                      className="text-[10px] text-amber-600 hover:text-amber-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteArea(a.id)}
                      className="text-[10px] text-red-600 hover:text-red-400"
                    >
                      Delete
                    </button>
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
