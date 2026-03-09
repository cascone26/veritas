"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState("");
  const [saved, setSaved] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("veritas-api-key");
    if (stored) setApiKey(stored);
  }, []);

  const saveApiKey = () => {
    localStorage.setItem("veritas-api-key", apiKey);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const clearAllData = () => {
    if (!confirm("This will clear ALL local data including notes, flashcards, reading progress, and saved arguments. Are you sure?")) return;
    const keys = [
      "veritas-api-key",
      "veritas-flashcards",
      "veritas-notes",
      "veritas-saved-arguments",
      "veritas-reading",
      "veritas-plans",
      "veritas-weakness",
    ];
    keys.forEach((k) => localStorage.removeItem(k));
    setApiKey("");
    alert("All data cleared.");
  };

  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Settings"
        subtitle="Configuration and preferences"
        icon="⚙️"
      />
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-lg space-y-8">
          {/* API Key */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-stone-200">
              Anthropic API Key
            </h2>
            <p className="text-xs text-stone-500">
              Used for AI-powered features like Ask Thomas, Debate Simulator, Flashcard Generation, and Daily Questions. Stored locally in your browser.
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-ant-..."
                className="flex-1 rounded-lg border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-stone-200 placeholder-stone-600 outline-none focus:border-amber-700 font-mono"
              />
              <button
                onClick={saveApiKey}
                className="rounded-lg bg-amber-700 px-4 py-2 text-sm font-medium text-stone-100 hover:bg-amber-600 transition-colors"
              >
                {saved ? "Saved" : "Save"}
              </button>
            </div>
            {apiKey && (
              <p className="text-[10px] text-emerald-600">
                Key stored locally. It will be sent with API requests.
              </p>
            )}
          </div>

          {/* Appearance */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-stone-200">
              Appearance
            </h2>
            <div className="flex items-center justify-between rounded-lg border border-stone-800 bg-stone-900 px-4 py-3">
              <div>
                <p className="text-sm text-stone-300">Dark Mode</p>
                <p className="text-xs text-stone-600">
                  Always on. Veritas is designed for dark mode.
                </p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  darkMode ? "bg-amber-700" : "bg-stone-700"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                    darkMode ? "left-5" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Data Management */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-stone-200">
              Data Management
            </h2>
            <p className="text-xs text-stone-500">
              All your data is stored locally in your browser. Nothing is sent to any server.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg border border-stone-800 bg-stone-900 px-4 py-3">
                <div>
                  <p className="text-sm text-stone-300">Flashcards</p>
                  <p className="text-xs text-stone-600">veritas-flashcards</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm("Clear all flashcards?")) {
                      localStorage.removeItem("veritas-flashcards");
                    }
                  }}
                  className="text-[10px] text-red-600 hover:text-red-400"
                >
                  Clear
                </button>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-stone-800 bg-stone-900 px-4 py-3">
                <div>
                  <p className="text-sm text-stone-300">Notes</p>
                  <p className="text-xs text-stone-600">veritas-notes</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm("Clear all notes?")) {
                      localStorage.removeItem("veritas-notes");
                    }
                  }}
                  className="text-[10px] text-red-600 hover:text-red-400"
                >
                  Clear
                </button>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-stone-800 bg-stone-900 px-4 py-3">
                <div>
                  <p className="text-sm text-stone-300">Saved Arguments</p>
                  <p className="text-xs text-stone-600">veritas-saved-arguments</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm("Clear all saved arguments?")) {
                      localStorage.removeItem("veritas-saved-arguments");
                    }
                  }}
                  className="text-[10px] text-red-600 hover:text-red-400"
                >
                  Clear
                </button>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-stone-800 bg-stone-900 px-4 py-3">
                <div>
                  <p className="text-sm text-stone-300">Reading Progress</p>
                  <p className="text-xs text-stone-600">veritas-reading</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm("Clear all reading progress?")) {
                      localStorage.removeItem("veritas-reading");
                    }
                  }}
                  className="text-[10px] text-red-600 hover:text-red-400"
                >
                  Clear
                </button>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-stone-800 bg-stone-900 px-4 py-3">
                <div>
                  <p className="text-sm text-stone-300">Reading Plans</p>
                  <p className="text-xs text-stone-600">veritas-plans</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm("Clear all plan progress?")) {
                      localStorage.removeItem("veritas-plans");
                    }
                  }}
                  className="text-[10px] text-red-600 hover:text-red-400"
                >
                  Clear
                </button>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-stone-800 bg-stone-900 px-4 py-3">
                <div>
                  <p className="text-sm text-stone-300">Weakness Tracker</p>
                  <p className="text-xs text-stone-600">veritas-weakness</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm("Clear all weakness data?")) {
                      localStorage.removeItem("veritas-weakness");
                    }
                  }}
                  className="text-[10px] text-red-600 hover:text-red-400"
                >
                  Clear
                </button>
              </div>
            </div>
            <button
              onClick={clearAllData}
              className="mt-4 rounded-lg border border-red-900 bg-red-950/30 px-4 py-2 text-sm text-red-400 hover:bg-red-950/50 transition-colors"
            >
              Clear All Data
            </button>
          </div>

          {/* About */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-stone-200">About</h2>
            <div className="rounded-lg border border-stone-800 bg-stone-900 px-4 py-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-stone-300">Veritas</span>
                <span className="text-xs text-stone-600">v1.0.0</span>
              </div>
              <p className="text-xs text-stone-500">
                A Catholic theology study companion built on the Summa Theologica of St. Thomas Aquinas.
              </p>
              <p className="text-xs text-stone-600">
                All reference data is bundled locally. AI features require an Anthropic API key. No data leaves your browser except API calls.
              </p>
              <div className="pt-2 border-t border-stone-800">
                <p className="text-[10px] text-stone-600">
                  Built with Next.js, Tailwind CSS, and Claude AI.
                </p>
                <p className="text-[10px] text-stone-600 mt-1">
                  &ldquo;All that I have written seems like straw compared to what has now been revealed to me.&rdquo; — St. Thomas Aquinas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
