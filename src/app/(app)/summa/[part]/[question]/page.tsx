"use client";

import { useState, useEffect, useRef, use } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SUMMA_STRUCTURE } from "@/data/summa";
import ReaderSettings, { useReaderSettings, themeClasses } from "@/components/ReaderSettings";
import HighlightManager from "@/components/HighlightManager";

const PART_URL_TO_DATA: Record<string, string> = {
  I: "prima-pars",
  "I-II": "prima-secundae",
  "II-II": "secunda-secundae",
  III: "tertia-pars",
  supplement: "supplement",
};

const PART_LABELS: Record<string, string> = {
  I: "Prima Pars",
  "I-II": "Prima Secundae",
  "II-II": "Secunda Secundae",
  III: "Tertia Pars",
  supplement: "Supplement",
};

interface ArticleSection {
  type: "objection" | "on-the-contrary" | "i-answer-that" | "reply" | "other";
  heading: string;
  content: string;
}

interface Article {
  number: number;
  title: string;
  sections: ArticleSection[];
}

function classifySection(heading: string): ArticleSection["type"] {
  const h = heading.toLowerCase();
  if (h.startsWith("objection") || h.startsWith("obj.")) return "objection";
  if (h.includes("on the contrary") || h.includes("sed contra"))
    return "on-the-contrary";
  if (h.includes("i answer that") || h.includes("respondeo"))
    return "i-answer-that";
  if (h.startsWith("reply to objection") || h.startsWith("reply obj"))
    return "reply";
  return "other";
}

function parseMarkdown(md: string): { questionTitle: string; articles: Article[] } {
  const lines = md.split("\n");
  let questionTitle = "";
  const articles: Article[] = [];
  let currentArticle: Article | null = null;
  let currentSection: ArticleSection | null = null;

  for (const line of lines) {
    // Question title (# heading)
    if (line.startsWith("# ") && !line.startsWith("## ")) {
      questionTitle = line.replace(/^#\s+/, "").trim();
      continue;
    }

    // Article heading (## heading)
    if (line.startsWith("## ") && !line.startsWith("### ")) {
      if (currentSection && currentArticle) {
        currentArticle.sections.push(currentSection);
      }
      if (currentArticle) {
        articles.push(currentArticle);
      }
      const title = line.replace(/^##\s+/, "").trim();
      const numMatch = title.match(/Article\s+(\d+)/i);
      currentArticle = {
        number: numMatch ? parseInt(numMatch[1]) : articles.length + 1,
        title,
        sections: [],
      };
      currentSection = null;
      continue;
    }

    // Section heading (### heading)
    if (line.startsWith("### ")) {
      if (currentSection && currentArticle) {
        currentArticle.sections.push(currentSection);
      }
      const heading = line.replace(/^###\s+/, "").trim();
      currentSection = {
        type: classifySection(heading),
        heading,
        content: "",
      };
      continue;
    }

    // Content line
    if (currentSection) {
      currentSection.content += (currentSection.content ? "\n" : "") + line;
    }
  }

  // Flush remaining
  if (currentSection && currentArticle) {
    currentArticle.sections.push(currentSection);
  }
  if (currentArticle) {
    articles.push(currentArticle);
  }

  return { questionTitle, articles };
}

function SectionBlock({ section, theme }: { section: ArticleSection; theme: ReturnType<typeof themeClasses> }) {
  const trimmed = section.content.trim();
  if (!trimmed) return null;

  const isDark = !theme.text; // dark theme has empty text class

  const typeStyles: Record<ArticleSection["type"], { label: string; labelClass: string; textClass: string }> = {
    objection: {
      label: section.heading,
      labelClass: isDark ? "text-stone-500" : "text-stone-500",
      textClass: isDark ? "text-stone-400" : theme.text,
    },
    "on-the-contrary": {
      label: section.heading,
      labelClass: "text-emerald-500",
      textClass: isDark ? "text-emerald-400/80" : "text-emerald-700",
    },
    "i-answer-that": {
      label: section.heading,
      labelClass: "text-amber-400 text-base",
      textClass: isDark ? "text-stone-200" : theme.text,
    },
    reply: {
      label: section.heading,
      labelClass: isDark ? "text-stone-500" : "text-stone-500",
      textClass: isDark ? "text-stone-300" : theme.text,
    },
    other: {
      label: section.heading,
      labelClass: isDark ? "text-stone-400" : "text-stone-500",
      textClass: isDark ? "text-stone-300" : theme.text,
    },
  };

  const style = typeStyles[section.type];

  return (
    <div className={`${section.type === "i-answer-that" ? "rounded-lg border border-amber-900/30 bg-amber-950/20 p-4" : ""}`}>
      <h4 className={`text-sm font-semibold ${style.labelClass}`}>
        {style.label}
      </h4>
      <div className={`mt-1.5 text-sm leading-relaxed whitespace-pre-wrap ${style.textClass}`}>
        {trimmed}
      </div>
    </div>
  );
}

export default function SummaReader({
  params,
}: {
  params: Promise<{ part: string; question: string }>;
}) {
  const { part, question } = use(params);
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [activeArticle, setActiveArticle] = useState(1);
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const { settings, update: updateSettings } = useReaderSettings();
  const theme = themeClasses(settings.theme);

  const qNum = parseInt(question);
  const partLabel = PART_LABELS[part] || part;
  const dataId = PART_URL_TO_DATA[part];
  const partData = dataId ? SUMMA_STRUCTURE.find((p) => p.id === dataId) : null;
  const questionData = partData?.questions.find((q) => q.number === qNum);
  const maxQ = partData ? Math.max(...partData.questions.map((q) => q.number)) : 0;
  const minQ = partData ? Math.min(...partData.questions.map((q) => q.number)) : 1;

  useEffect(() => {
    const decodedPart = decodeURIComponent(part);
    fetch(`/summa/${decodedPart}/q${question}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [part, question]);

  // Scroll progress
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const pct = scrollHeight <= clientHeight ? 100 : (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(pct);

      // Update active article based on scroll position
      const articleEls = el.querySelectorAll("[data-article]");
      for (let i = articleEls.length - 1; i >= 0; i--) {
        const rect = articleEls[i].getBoundingClientRect();
        const containerRect = el.getBoundingClientRect();
        if (rect.top <= containerRect.top + 100) {
          setActiveArticle(parseInt(articleEls[i].getAttribute("data-article") || "1"));
          break;
        }
      }
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [markdown]);

  // Scroll to hash on load
  useEffect(() => {
    if (!markdown) return;
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [markdown]);

  const parsed = markdown ? parseMarkdown(markdown) : null;

  const jumpToArticle = (num: number) => {
    const el = document.getElementById(`article-${num}`);
    el?.scrollIntoView({ behavior: "smooth" });
    setActiveArticle(num);
  };

  if (loading) {
    return (
      <div className="flex h-app items-center justify-center">
        <div className="text-stone-500">Loading...</div>
      </div>
    );
  }

  if (notFound || !parsed) {
    return (
      <div className="flex h-app flex-col">
        <PageHeader title={`${partLabel}, Question ${qNum}`} subtitle="Summa Theologiae" icon="📖" />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
          <p className="text-lg text-stone-400">Coming soon</p>
          <p className="text-sm text-stone-600">
            The full text for this question has not been added yet.
          </p>
          <Link
            href="/summa"
            className="mt-4 rounded-lg bg-amber-600/20 px-4 py-2 text-sm text-amber-400 transition-colors hover:bg-amber-600/30"
          >
            Back to Summa Browser
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex h-app flex-col ${theme.bg || ""}`}>
      {/* Progress bar */}
      <div className="h-0.5 w-full bg-stone-900">
        <div
          className="h-full bg-amber-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <PageHeader
        title={parsed.questionTitle || `Question ${qNum}`}
        subtitle={`${partLabel} — ${parsed.articles.length} articles`}
        icon="📖"
      />

      {/* Navigation bar */}
      <div className="flex items-center justify-between border-b border-stone-800 bg-stone-950 px-6 py-2">
        <div className="flex items-center gap-2">
          <Link
            href="/summa"
            className="text-xs text-stone-500 transition-colors hover:text-amber-400"
          >
            Summa Browser
          </Link>
          <span className="text-stone-700">/</span>
          <span className="text-xs text-stone-400">{partLabel}</span>
          <span className="text-stone-700">/</span>
          <span className="text-xs text-amber-500">Q. {qNum}</span>
        </div>
        <div className="flex items-center gap-2">
          {qNum > minQ && (
            <Link
              href={`/summa/${part}/${qNum - 1}`}
              className="rounded px-2 py-1 text-xs text-stone-500 transition-colors hover:bg-stone-800 hover:text-stone-300"
            >
              Previous
            </Link>
          )}
          {qNum < maxQ && (
            <Link
              href={`/summa/${part}/${qNum + 1}`}
              className="rounded px-2 py-1 text-xs text-stone-500 transition-colors hover:bg-stone-800 hover:text-stone-300"
            >
              Next
            </Link>
          )}
        </div>
      </div>

      {/* Article navigation */}
      {parsed.articles.length > 1 && (
        <div className="flex flex-wrap items-center gap-1 border-b border-stone-800 bg-stone-900/30 px-6 py-2">
          <span className="mr-2 text-[10px] uppercase tracking-wider text-stone-600">
            Articles
          </span>
          {parsed.articles.map((a) => (
            <button
              key={a.number}
              onClick={() => jumpToArticle(a.number)}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                activeArticle === a.number
                  ? "bg-amber-600/20 text-amber-400"
                  : "text-stone-500 hover:text-stone-300"
              }`}
            >
              {a.number}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div ref={contentRef} className={`flex-1 overflow-y-auto px-6 py-6 ${theme.bg || ""}`}>
        <div
          className="mx-auto space-y-12"
          style={{ maxWidth: `${settings.lineWidth}px`, fontSize: `${settings.fontSize}px` }}
        >
          {parsed.articles.map((article) => (
            <article
              key={article.number}
              id={`article-${article.number}`}
              data-article={article.number}
            >
              <h3 className={`mb-4 text-lg font-semibold text-amber-400`}>
                {article.title}
              </h3>
              <div className="space-y-4">
                {article.sections.map((section, i) => (
                  <SectionBlock key={i} section={section} theme={theme} />
                ))}
              </div>
              {article.number < parsed.articles.length && (
                <div className="mt-8 border-b border-stone-800/50" />
              )}
            </article>
          ))}
        </div>

        {/* Bottom nav */}
        <div
          className="mx-auto mt-12 flex items-center justify-between border-t border-stone-800 pt-6"
          style={{ maxWidth: `${settings.lineWidth}px` }}
        >
          {qNum > minQ ? (
            <Link
              href={`/summa/${part}/${qNum - 1}`}
              className="rounded-lg bg-stone-900 px-4 py-2 text-sm text-stone-400 transition-colors hover:bg-stone-800 hover:text-stone-200"
            >
              {questionData
                ? `Q. ${qNum - 1}`
                : `Previous Question`}
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/summa"
            className="text-xs text-stone-600 transition-colors hover:text-amber-400"
          >
            Back to Summa Browser
          </Link>
          {qNum < maxQ ? (
            <Link
              href={`/summa/${part}/${qNum + 1}`}
              className="rounded-lg bg-stone-900 px-4 py-2 text-sm text-stone-400 transition-colors hover:bg-stone-800 hover:text-stone-200"
            >
              {questionData
                ? `Q. ${qNum + 1}`
                : `Next Question`}
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      <ReaderSettings settings={settings} onUpdate={updateSettings} />
      <HighlightManager contentRef={contentRef} />
    </div>
  );
}
