// Streak tracking — records daily study activity and maintains streak data

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  activityCalendar: Record<string, boolean>; // date -> did study
}

const STORAGE_KEY = "veritas-streaks";

function today(): string {
  return new Date().toISOString().split("T")[0];
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

function defaultStreakData(): StreakData {
  return {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: "",
    activityCalendar: {},
  };
}

export function getStreakData(): StreakData {
  if (typeof window === "undefined") return defaultStreakData();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data: StreakData = { ...defaultStreakData(), ...JSON.parse(stored) };
      // If last active date was before yesterday, streak is broken
      if (data.lastActiveDate && data.lastActiveDate < yesterday()) {
        data.currentStreak = 0;
      }
      return data;
    }
  } catch {}
  return defaultStreakData();
}

function saveStreakData(data: StreakData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export function recordActivity(): void {
  if (typeof window === "undefined") return;
  const data = getStreakData();
  const t = today();

  // Already recorded today
  if (data.lastActiveDate === t) return;

  data.activityCalendar[t] = true;

  if (data.lastActiveDate === yesterday()) {
    // Continue streak
    data.currentStreak += 1;
  } else if (data.lastActiveDate === t) {
    // Same day, no change
  } else {
    // Streak broken or first day
    data.currentStreak = 1;
  }

  if (data.currentStreak > data.longestStreak) {
    data.longestStreak = data.currentStreak;
  }

  data.lastActiveDate = t;
  saveStreakData(data);
}

export function isActiveToday(): boolean {
  const data = getStreakData();
  return data.lastActiveDate === today();
}

export function getCalendarData(months: number): { date: string; active: boolean }[] {
  const data = getStreakData();
  const result: { date: string; active: boolean }[] = [];
  const end = new Date();
  const start = new Date();
  start.setMonth(start.getMonth() - months);

  const current = new Date(start);
  while (current <= end) {
    const dateStr = current.toISOString().split("T")[0];
    result.push({ date: dateStr, active: !!data.activityCalendar[dateStr] });
    current.setDate(current.getDate() + 1);
  }

  return result;
}
