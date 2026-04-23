"use client";

import { useEffect, useRef, useState } from "react";

interface SilentSitProps {
  prompt?: string;
  defaultMinutes?: number;
}

/**
 * Silent Sit Timer.
 * Minimal UI. No music. No bells every minute — just an opening chime, a half-way breath,
 * and a closing chime. The practice is availability, not entertainment.
 */
export default function SilentSit({ prompt, defaultMinutes = 5 }: SilentSitProps) {
  const [minutes, setMinutes] = useState(defaultMinutes);
  const [remaining, setRemaining] = useState(defaultMinutes * 60);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [usePrayer, setUsePrayer] = useState(true);
  const [breathPhase, setBreathPhase] = useState<"in" | "out">("in");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    if (remaining <= 0) {
      setRunning(false);
      setCompleted(true);
      playChime();
      logSit(minutes);
      return;
    }
    intervalRef.current = setInterval(() => {
      setRemaining((r) => r - 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, remaining, minutes]);

  // Breath rhythm: 4s in, 6s out
  useEffect(() => {
    if (!running) return;
    const loop = setInterval(() => {
      setBreathPhase((p) => (p === "in" ? "out" : "in"));
    }, 5000);
    return () => clearInterval(loop);
  }, [running]);

  function start() {
    setRemaining(minutes * 60);
    setRunning(true);
    setCompleted(false);
    playChime();
  }

  function stop() {
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  function reset() {
    stop();
    setRemaining(minutes * 60);
    setCompleted(false);
  }

  function playChime() {
    try {
      const ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 528;
      osc.type = "sine";
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 2.2);
    } catch {
      // silent fail if browser blocks audio
    }
  }

  function logSit(m: number) {
    try {
      const key = "veritas-silent-sits";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push({ at: new Date().toISOString(), minutes: m });
      localStorage.setItem(key, JSON.stringify(existing.slice(-200)));
    } catch {}
  }

  const mm = Math.floor(remaining / 60);
  const ss = remaining % 60;
  const display = `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/40 p-8">
      <div className="mb-6 text-center">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-500">
          Silent Sit
        </div>
        {prompt && (
          <p className="mx-auto max-w-md text-sm italic leading-relaxed text-stone-400">
            {prompt}
          </p>
        )}
      </div>

      {/* Breath circle */}
      <div className="flex justify-center mb-8">
        <div
          className={`flex h-44 w-44 items-center justify-center rounded-full border border-amber-500/30 transition-all duration-[5000ms] ease-in-out ${
            running
              ? breathPhase === "in"
                ? "scale-100 bg-amber-500/10"
                : "scale-75 bg-amber-500/5"
              : "scale-90 bg-stone-900/60"
          }`}
        >
          <div className="text-center">
            <div className="font-mono text-3xl font-light text-amber-400">{display}</div>
            {running && (
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-stone-500">
                {breathPhase === "in" ? "breathe in" : "breathe out"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      {!running && !completed && (
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            {[2, 5, 10, 15, 20].map((n) => (
              <button
                key={n}
                onClick={() => {
                  setMinutes(n);
                  setRemaining(n * 60);
                }}
                className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                  minutes === n
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    : "border border-stone-700 text-stone-400 hover:border-stone-600"
                }`}
              >
                {n} min
              </button>
            ))}
          </div>

          <label className="flex items-center justify-center gap-2 text-xs text-stone-400">
            <input
              type="checkbox"
              checked={usePrayer}
              onChange={(e) => setUsePrayer(e.target.checked)}
              className="accent-amber-500"
            />
            Use Jesus Prayer on the breath (in: &ldquo;Jesus Christ, Son of God&rdquo; — out: &ldquo;have mercy on me, a sinner&rdquo;)
          </label>

          <div className="flex justify-center">
            <button
              onClick={start}
              className="rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-3 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/20"
            >
              Begin
            </button>
          </div>
        </div>
      )}

      {running && (
        <>
          {usePrayer && (
            <p className="mb-4 text-center text-xs text-stone-500 italic">
              {breathPhase === "in"
                ? "Jesus Christ, Son of God…"
                : "…have mercy on me, a sinner."}
            </p>
          )}
          <div className="flex justify-center gap-3">
            <button
              onClick={stop}
              className="rounded-full border border-stone-700 px-6 py-2 text-xs text-stone-400 hover:border-stone-500"
            >
              Pause
            </button>
            <button
              onClick={reset}
              className="rounded-full border border-stone-800 px-6 py-2 text-xs text-stone-500 hover:text-stone-400"
            >
              Reset
            </button>
          </div>
        </>
      )}

      {completed && (
        <div className="text-center space-y-4">
          <p className="text-sm text-amber-400">You showed up. That is the faith.</p>
          <p className="text-xs text-stone-500">
            &ldquo;The feeling of faith is not faith. Faith is the will to trust when feeling is gone.&rdquo;
          </p>
          <button
            onClick={reset}
            className="rounded-full border border-stone-700 px-6 py-2 text-xs text-stone-400 hover:border-stone-500"
          >
            Sit again
          </button>
        </div>
      )}
    </div>
  );
}
