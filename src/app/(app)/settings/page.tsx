"use client";

import { useState, useEffect, useRef } from "react";
import PageHeader from "@/components/PageHeader";

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState("");
  const [saved, setSaved] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light" | "sepia">("dark");
  const [lastExport, setLastExport] = useState<string | null>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("veritas-api-key");
    if (stored) setApiKey(stored);
    const storedTheme = localStorage.getItem("veritas-theme") as "dark" | "light" | "sepia" | null;
    if (storedTheme) setTheme(storedTheme);
    const storedExport = localStorage.getItem("veritas-last-export");
    if (storedExport) setLastExport(storedExport);
  }, []);

  const applyTheme = (t: "dark" | "light" | "sepia") => {
    setTheme(t);
    localStorage.setItem("veritas-theme", t);
    const root = document.documentElement;
    root.classList.remove("theme-dark", "theme-light", "theme-sepia");
    root.classList.add(`theme-${t}`);
  };

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
      "veritas-theme",
      "veritas-recent-searches",
    ];
    keys.forEach((k) => localStorage.removeItem(k));
    document.documentElement.className = document.documentElement.className.replace(/theme-\w+/, "theme-dark");
    setApiKey("");
    alert("All data cleared.");
  };

  const exportData = () => {
    const data: Record<string, unknown> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("veritas-")) {
        const val = localStorage.getItem(key);
        if (val !== null) {
          try {
            data[key] = JSON.parse(val);
          } catch {
            data[key] = val;
          }
        }
      }
    }

    const dateStr = new Date().toISOString().split("T")[0];
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `veritas-backup-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    localStorage.setItem("veritas-last-export", dateStr);
    setLastExport(dateStr);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const raw = ev.target?.result as string;
        const data = JSON.parse(raw);

        if (typeof data !== "object" || data === null || Array.isArray(data)) {
          setImportStatus("Invalid file format.");
          return;
        }

        const veritasKeys = Object.keys(data).filter((k) => k.startsWith("veritas-"));
        if (veritasKeys.length === 0) {
          setImportStatus("No veritas data found in file.");
          return;
        }

        if (!confirm(`This will merge ${veritasKeys.length} item${veritasKeys.length === 1 ? "" : "s"}. Continue?`)) {
          setImportStatus(null);
          return;
        }

        veritasKeys.forEach((key) => {
          const val = data[key];
          localStorage.setItem(key, typeof val === "string" ? val : JSON.stringify(val));
        });

        setImportStatus(`Imported ${veritasKeys.length} items successfully.`);
        // Refresh displayed state
        const stored = localStorage.getItem("veritas-api-key");
        if (stored) setApiKey(stored);
        const storedTheme = localStorage.getItem("veritas-theme") as "dark" | "light" | "sepia" | null;
        if (storedTheme) setTheme(storedTheme);

        setTimeout(() => setImportStatus(null), 4000);
      } catch {
        setImportStatus("Failed to parse file. Make sure it is valid JSON.");
      }
    };
    reader.readAsText(file);

    // Reset file input so the same file can be re-selected
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex h-app flex-col">
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
              Used for AI-powered features like Ask Aquinas, Debate Simulator, Flashcard Generation, and Daily Questions. Stored locally in your browser.
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
            <p className="text-xs text-stone-500">
              Choose your reading theme. Dark is the default.
            </p>
            <div className="flex gap-2">
              {(["dark", "light", "sepia"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => applyTheme(t)}
                  className={`flex-1 rounded-lg border px-4 py-3 text-sm capitalize transition-colors ${
                    theme === t
                      ? "border-amber-700 bg-amber-900/30 text-amber-400"
                      : "border-stone-800 bg-stone-900 text-stone-500 hover:border-stone-700"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Export / Import */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-stone-200">
              Export / Import
            </h2>
            <p className="text-xs text-stone-500">
              Back up all your Veritas data or restore from a previous backup.
            </p>
            <div className="flex gap-2">
              <button
                onClick={exportData}
                className="rounded-lg border border-stone-800 bg-stone-900 px-4 py-2 text-sm text-stone-300 hover:border-stone-700 transition-colors"
              >
                Export All Data
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="rounded-lg border border-stone-800 bg-stone-900 px-4 py-2 text-sm text-stone-300 hover:border-stone-700 transition-colors"
              >
                Import Data
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </div>
            {lastExport && (
              <p className="text-[10px] text-stone-600">
                Last export: {lastExport}
              </p>
            )}
            {importStatus && (
              <p className={`text-xs ${importStatus.includes("success") ? "text-emerald-500" : "text-red-400"}`}>
                {importStatus}
              </p>
            )}
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
