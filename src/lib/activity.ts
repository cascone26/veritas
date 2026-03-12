// Activity tracking — records page visits and topic affinities
// Used to power personalized course recommendations
import { recordActivity } from "./streaks";

export interface ActivityData {
  pageVisits: Record<string, number>;
  topicAffinities: Record<string, number>;
  coursesStarted: string[];
  coursesCompleted: string[];
  totalVisits: number;
}

// Maps routes to topic tags
const TOPIC_MAP: Record<string, string[]> = {
  "/summa": ["aquinas", "philosophy", "theology"],
  "/scg": ["aquinas", "apologetics", "philosophy"],
  "/objection": ["apologetics", "debate"],
  "/debate": ["apologetics", "debate"],
  "/simulator": ["apologetics", "debate"],
  "/debate-playbook": ["apologetics", "debate"],
  "/ask": ["aquinas", "theology"],
  "/scripture": ["scripture", "apologetics"],
  "/bible": ["scripture"],
  "/ccc": ["catechism", "theology"],
  "/catena": ["scripture", "church-fathers", "patristics"],
  "/glossary": ["philosophy", "theology"],
  "/flashcards": ["study", "aquinas"],
  "/fathers": ["church-fathers", "patristics", "history"],
  "/heresies": ["apologetics", "history", "theology"],
  "/denominations": ["apologetics", "protestant"],
  "/myths": ["apologetics"],
  "/naturallaw": ["natural-law", "philosophy", "moral-theology"],
  "/virtues": ["moral-theology", "aquinas"],
  "/sacraments": ["sacraments", "theology"],
  "/marian": ["marian", "apologetics"],
  "/councils": ["history", "theology"],
  "/encyclicals": ["theology", "papal"],
  "/saints": ["history", "theology"],
  "/timeline": ["history"],
  "/bioethics": ["moral-theology", "natural-law"],
  "/arguments": ["apologetics", "philosophy"],
  "/quickdraw": ["apologetics", "debate"],
  "/oneliners": ["apologetics", "debate"],
  "/plans": ["study"],
  "/spiritual-reading": ["spirituality", "classics"],
  "/prayers": ["spirituality", "liturgy"],
  "/typology": ["scripture", "theology"],
  "/prophecies": ["scripture", "apologetics"],
  "/covenants": ["scripture", "theology"],
  "/fallacies": ["philosophy", "debate"],
  "/critics": ["apologetics", "philosophy", "modern"],
  "/analogies": ["apologetics", "theology"],
  "/social": ["moral-theology", "natural-law"],
  "/weakness": ["study"],
  "/reading": ["study"],
  "/courses": ["study"],
};

function defaultActivity(): ActivityData {
  return {
    pageVisits: {},
    topicAffinities: {},
    coursesStarted: [],
    coursesCompleted: [],
    totalVisits: 0,
  };
}

export function getActivityData(): ActivityData {
  if (typeof window === "undefined") return defaultActivity();
  try {
    const stored = localStorage.getItem("veritas-activity");
    if (stored) return { ...defaultActivity(), ...JSON.parse(stored) };
  } catch {}
  return defaultActivity();
}

function saveActivityData(data: ActivityData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("veritas-activity", JSON.stringify(data));
  } catch {}
}

export function recordPageVisit(path: string): void {
  const data = getActivityData();
  const cleanPath = path.split("?")[0];

  // Match against TOPIC_MAP — find the longest matching prefix
  let matchedKey = "";
  for (const key of Object.keys(TOPIC_MAP)) {
    if (cleanPath === key || cleanPath.startsWith(key + "/")) {
      if (key.length > matchedKey.length) matchedKey = key;
    }
  }

  data.pageVisits[cleanPath] = (data.pageVisits[cleanPath] || 0) + 1;
  data.totalVisits = (data.totalVisits || 0) + 1;

  // Record streak activity for any content page visit
  if (matchedKey) {
    recordActivity();
  }

  const topics = TOPIC_MAP[matchedKey] || [];
  topics.forEach((topic) => {
    data.topicAffinities[topic] = (data.topicAffinities[topic] || 0) + 1;
  });

  saveActivityData(data);
}

export function markCourseStarted(courseId: string): void {
  const data = getActivityData();
  if (!data.coursesStarted.includes(courseId)) {
    data.coursesStarted = [...data.coursesStarted, courseId];
  }
  saveActivityData(data);
}

export function markCourseCompleted(courseId: string): void {
  const data = getActivityData();
  if (!data.coursesCompleted.includes(courseId)) {
    data.coursesCompleted = [...data.coursesCompleted, courseId];
  }
  if (!data.coursesStarted.includes(courseId)) {
    data.coursesStarted = [...data.coursesStarted, courseId];
  }
  saveActivityData(data);
}

// Score a course by how well it matches the user's activity profile
// Higher score = more relevant = should appear first
export function scoreCourse(courseTopics: string[], activity: ActivityData): number {
  let score = 0;
  courseTopics.forEach((topic) => {
    score += (activity.topicAffinities[topic] || 0) * 2;
  });
  return score;
}

// Default affinity profile for Jacob (used when no activity data exists)
// Based on known interests: apologetics, Thomism, classical education, RCA teaching
export const JACOB_DEFAULTS: Record<string, number> = {
  apologetics: 8,
  aquinas: 8,
  philosophy: 7,
  "natural-law": 6,
  theology: 6,
  "moral-theology": 5,
  "classical-education": 5,
  scripture: 5,
  debate: 5,
  protestant: 4,
  history: 3,
  spirituality: 3,
};

export function getEffectiveAffinities(activity: ActivityData): Record<string, number> {
  // Merge defaults with actual activity (actual data takes precedence at 2x weight)
  const merged: Record<string, number> = { ...JACOB_DEFAULTS };
  Object.entries(activity.topicAffinities).forEach(([topic, count]) => {
    merged[topic] = (merged[topic] || 0) + count * 2;
  });
  return merged;
}
