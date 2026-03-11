"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { COURSES, Course } from "@/data/courses";
import {
  getActivityData,
  getEffectiveAffinities,
  markCourseStarted,
  markCourseCompleted,
  ActivityData,
} from "@/lib/activity";

type Filter = "all" | "recommended" | "beginner" | "intermediate" | "advanced" | "started" | "completed";

const DIFFICULTY_COLORS: Record<string, string> = {
  beginner: "bg-green-900/50 text-green-300 border-green-700",
  intermediate: "bg-amber-900/50 text-amber-300 border-amber-700",
  advanced: "bg-red-900/50 text-red-300 border-red-700",
};

function scoreCourse(course: Course, affinities: Record<string, number>): number {
  let score = 0;
  course.topics.forEach((t) => {
    score += (affinities[t] || 0) * 2;
  });
  if (course.recommended) score += 10;
  return score;
}

export default function CoursesPage() {
  const [filter, setFilter] = useState<Filter>("recommended");
  const [activity, setActivity] = useState<ActivityData | null>(null);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [lessonProgress, setLessonProgress] = useState<Record<string, number[]>>({});

  useEffect(() => {
    setActivity(getActivityData());
    try {
      const stored = localStorage.getItem("veritas-lesson-progress");
      if (stored) setLessonProgress(JSON.parse(stored));
    } catch {}
  }, []);

  const affinities = useMemo(() => {
    if (!activity) return {};
    return getEffectiveAffinities(activity);
  }, [activity]);

  const sortedCourses = useMemo(() => {
    return [...COURSES].sort((a, b) => scoreCourse(b, affinities) - scoreCourse(a, affinities));
  }, [affinities]);

  const filteredCourses = useMemo(() => {
    if (!activity) return sortedCourses;
    switch (filter) {
      case "recommended":
        return sortedCourses;
      case "started":
        return sortedCourses.filter((c) => activity.coursesStarted.includes(c.id) && !activity.coursesCompleted.includes(c.id));
      case "completed":
        return sortedCourses.filter((c) => activity.coursesCompleted.includes(c.id));
      case "beginner":
      case "intermediate":
      case "advanced":
        return sortedCourses.filter((c) => c.difficulty === filter);
      default:
        return sortedCourses;
    }
  }, [filter, sortedCourses, activity]);

  function toggleLesson(courseId: string, lessonIndex: number) {
    setLessonProgress((prev) => {
      const completed = prev[courseId] || [];
      const next = completed.includes(lessonIndex)
        ? completed.filter((i) => i !== lessonIndex)
        : [...completed, lessonIndex];
      const updated = { ...prev, [courseId]: next };
      localStorage.setItem("veritas-lesson-progress", JSON.stringify(updated));

      // Mark course started/completed in activity
      const course = COURSES.find((c) => c.id === courseId);
      if (course) {
        if (next.length > 0) markCourseStarted(courseId);
        if (next.length === course.lessons.length) markCourseCompleted(courseId);
      }
      setActivity(getActivityData());
      return updated;
    });
  }

  const topTopics = useMemo(() => {
    return Object.entries(affinities)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([t]) => t);
  }, [affinities]);

  const started = activity?.coursesStarted.length || 0;
  const completed = activity?.coursesCompleted.length || 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <PageHeader
        title="Study Paths"
        subtitle={`${COURSES.length} courses — personalized to your interests`}
      />

      {/* Stats bar */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-3 text-center">
          <div className="text-2xl font-bold text-amber-400">{COURSES.length}</div>
          <div className="text-xs text-stone-400">Courses</div>
        </div>
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-3 text-center">
          <div className="text-2xl font-bold text-green-400">{started}</div>
          <div className="text-xs text-stone-400">Started</div>
        </div>
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-3 text-center">
          <div className="text-2xl font-bold text-blue-400">{completed}</div>
          <div className="text-xs text-stone-400">Completed</div>
        </div>
      </div>

      {/* Your interests */}
      {topTopics.length > 0 && (
        <div className="mb-6 rounded-lg border border-stone-800 bg-stone-900/30 p-4">
          <div className="mb-2 text-xs font-medium uppercase tracking-wider text-stone-500">
            Your Top Interests (courses ranked by these)
          </div>
          <div className="flex flex-wrap gap-2">
            {topTopics.map((t) => (
              <span key={t} className="rounded-full bg-amber-900/30 px-3 py-1 text-xs text-amber-300 border border-amber-800/50">
                {t.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(
          [
            ["recommended", "Recommended"],
            ["all", "All"],
            ["beginner", "Beginner"],
            ["intermediate", "Intermediate"],
            ["advanced", "Advanced"],
            ["started", "In Progress"],
            ["completed", "Completed"],
          ] as [Filter, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
              filter === key
                ? "bg-amber-600 text-white"
                : "bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Course list */}
      <div className="space-y-4">
        {filteredCourses.map((course) => {
          const isExpanded = expandedCourse === course.id;
          const progress = lessonProgress[course.id] || [];
          const pct = Math.round((progress.length / course.lessons.length) * 100);
          const isStarted = activity?.coursesStarted.includes(course.id);
          const isCompleted = activity?.coursesCompleted.includes(course.id);

          return (
            <div
              key={course.id}
              className="rounded-xl border border-stone-800 bg-stone-900/50 overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                className="w-full p-4 sm:p-5 text-left hover:bg-stone-800/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-lg font-semibold text-stone-100">{course.title}</h3>
                      {isCompleted && <span className="text-green-400 text-sm">&#10003; Complete</span>}
                    </div>
                    <p className="text-sm text-amber-400/80">{course.subtitle}</p>
                    <p className="mt-1 text-sm text-stone-400 line-clamp-2">{course.description}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className={`rounded-md border px-2 py-0.5 text-xs ${DIFFICULTY_COLORS[course.difficulty]}`}>
                        {course.difficulty}
                      </span>
                      <span className="text-xs text-stone-500">{course.duration}</span>
                      <span className="text-xs text-stone-500">{course.lessons.length} lessons</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    {isStarted && !isCompleted && (
                      <div className="text-right">
                        <div className="text-xs text-stone-500 mb-1">{pct}%</div>
                        <div className="h-1.5 w-20 rounded-full bg-stone-700 overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    )}
                    <span className="text-stone-500 text-lg">{isExpanded ? "−" : "+"}</span>
                  </div>
                </div>
              </button>

              {/* Expanded lessons */}
              {isExpanded && (
                <div className="border-t border-stone-800 bg-stone-950/50 p-4 sm:p-5">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {course.topics.map((t) => (
                      <span key={t} className="rounded-full bg-stone-800 px-2 py-0.5 text-xs text-stone-400">
                        {t.replace(/-/g, " ")}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {course.lessons.map((lesson, i) => {
                      const isDone = progress.includes(i);
                      return (
                        <div key={i} className={`rounded-lg border p-3 sm:p-4 ${isDone ? "border-green-800/50 bg-green-950/20" : "border-stone-800 bg-stone-900/30"}`}>
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() => toggleLesson(course.id, i)}
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-colors ${
                                isDone
                                  ? "border-green-600 bg-green-600 text-white"
                                  : "border-stone-600 text-stone-600 hover:border-amber-500 hover:text-amber-500"
                              }`}
                            >
                              {isDone ? "✓" : ""}
                            </button>
                            <div className="min-w-0 flex-1">
                              <h4 className={`text-sm font-medium ${isDone ? "text-green-300" : "text-stone-200"}`}>
                                {lesson.title}
                              </h4>
                              <p className="mt-0.5 text-xs text-stone-500">{lesson.description}</p>

                              {/* Readings */}
                              <div className="mt-2 space-y-1">
                                {lesson.readings.map((r, ri) => (
                                  <Link
                                    key={ri}
                                    href={r.path}
                                    className="block text-xs text-amber-400/70 hover:text-amber-300 transition-colors"
                                  >
                                    → {r.label}
                                  </Link>
                                ))}
                              </div>

                              {/* Questions */}
                              <div className="mt-2">
                                <details className="group">
                                  <summary className="cursor-pointer text-xs text-stone-500 hover:text-stone-300">
                                    Review questions ({lesson.questions.length})
                                  </summary>
                                  <ul className="mt-1 space-y-1 pl-3">
                                    {lesson.questions.map((q, qi) => (
                                      <li key={qi} className="text-xs text-stone-400 list-disc">
                                        {q}
                                      </li>
                                    ))}
                                  </ul>
                                </details>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredCourses.length === 0 && (
          <div className="py-12 text-center text-stone-500">
            No courses match this filter yet.
          </div>
        )}
      </div>
    </div>
  );
}
