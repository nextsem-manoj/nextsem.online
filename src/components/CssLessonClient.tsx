"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, ChevronRight, Bookmark, Copy
} from "lucide-react";
import { cssLessons, Lesson } from "../data/cssLessonsData";
import AdSenseBanner from "./AdSenseBanner";
import TopicAnimationWidget from "./TopicAnimationWidget";
import CopyableCommand from "./CopyableCommand";
import { saveLastLesson } from "@/lib/userProgressSync";

interface CssLessonClientProps {
  lesson: Lesson;
}

export default function CssLessonClient({ lesson }: CssLessonClientProps) {
  const [selectedLang, setSelectedLang] = useState<"english" | "hinglish" | "hindi">("english");
  const [selectedLevel, setSelectedLevel] = useState<"kid" | "pro">("pro");
  const [mounted, setMounted] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("guest");
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("nextsem_user");
      if (savedUser) {
        try {
          const parsed = JSON.parse(savedUser);
          if (parsed?.email) {
            setUserEmail(parsed.email);
          }
        } catch (e) {
          console.error(e);
        }
      }

      // Check bookmark status
      try {
        const bookmarks = JSON.parse(localStorage.getItem("nextsem_css_bookmarks") || "[]");
        setIsBookmarked(bookmarks.includes(lesson.id));
      } catch (e) {
        console.error(e);
      }
    }
  }, [lesson.id]);

  const toggleBookmark = () => {
    if (typeof window === "undefined") return;
    try {
      const bookmarks = JSON.parse(localStorage.getItem("nextsem_css_bookmarks") || "[]");
      let updated: number[];
      if (bookmarks.includes(lesson.id)) {
        updated = bookmarks.filter((id: number) => id !== lesson.id);
        setIsBookmarked(false);
      } else {
        updated = [...bookmarks, lesson.id];
        setIsBookmarked(true);
      }
      localStorage.setItem("nextsem_css_bookmarks", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && lesson?.slug) {
      try {
        saveLastLesson(userEmail, {
          slug: lesson.slug,
          title: lesson.title,
          subject: "css",
          lessonNumber: lesson.id,
          visitedAt: new Date().toISOString(),
          totalLessons: cssLessons.length
        });
        localStorage.setItem(`nextsem_css_completed_${userEmail}_${lesson.id}`, "true");
      } catch (e) {
        console.error(e);
      }
    }
  }, [lesson.id, lesson.slug, lesson.title, userEmail]);

  // Find adjacent lessons
  const currentIndex = cssLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? cssLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < cssLessons.length - 1 ? cssLessons[currentIndex + 1] : null;

  // Inline backtick tokeniser for clean typography
  const renderInlineCode = (text: string): React.ReactNode[] => {
    const parts = text.split(/(`[^`]+`)/);
    return parts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        const token = part.slice(1, -1);
        return <CopyableCommand key={i} command={token} inline={true} />;
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  const renderFormattedInline = (text: string) => {
    const boldRegex = /\*\*(.*?)\*\*/g;
    if (boldRegex.test(text) || text.includes('`')) {
      const parts = text.split(boldRegex);
      return parts.map((part, pIdx) =>
        pIdx % 2 === 1
          ? <strong key={pIdx} className="text-white font-bold">{part}</strong>
          : <React.Fragment key={pIdx}>{renderInlineCode(part)}</React.Fragment>
      );
    }
    return renderInlineCode(text);
  };

  // Robust Markdown-to-JSX parser supporting multi-line code blocks
  const renderContentText = (text: string) => {
    if (!text) return null;

    // Split text into code blocks and markdown segments
    const blockRegex = /(```[\s\S]*?```)/g;
    const segments = text.split(blockRegex);

    return segments.map((segment, segIdx) => {
      const trimmedSegment = segment.trim();
      if (!trimmedSegment) return null;

      // Handle Code Blocks
      if (trimmedSegment.startsWith("```") && trimmedSegment.endsWith("```")) {
        const cleanCode = trimmedSegment
          .replace(/^```[a-z]*\n?/, "")
          .replace(/\n?```$/, "");

        const fullDemoCode = cleanCode.includes("<!DOCTYPE") || cleanCode.includes("<html")
          ? cleanCode
          : `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${lesson.title} - Nextsem Preview</title>
  <style>
${cleanCode}
  </style>
</head>
<body>
  <div class="container">
    <h1>${lesson.title}</h1>
    <p>Live CSS Preview in Nextsem Web Sandbox</p>
    <button class="btn btn-primary interactive-btn">Interactive Button</button>
  </div>
</body>
</html>`;

        return (
          <div key={`code-${segIdx}`} className="my-6 p-5 md:p-6 bg-[#1d2a35] border border-slate-700/60 rounded-xl space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-extrabold text-white tracking-tight">Example</h3>
              <button
                onClick={() => {
                  if (typeof navigator !== "undefined") {
                    navigator.clipboard.writeText(cleanCode);
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-md text-xs font-bold border border-white/10 transition-all cursor-pointer"
              >
                <Copy size={14} />
                <span>Copy</span>
              </button>
            </div>
            <div className="bg-[#15202b] p-4 md:p-5 rounded-lg border-l-4 border-[#04AA6D] font-mono text-sm overflow-x-auto leading-relaxed shadow-inner">
              <pre className="text-emerald-400 whitespace-pre">
                <code>{cleanCode}</code>
              </pre>
            </div>
            <Link
              href={`/htmldemo?code=${encodeURIComponent(fullDemoCode)}`}
              target="_blank"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm rounded-md transition-all shadow-md cursor-pointer"
            >
              <span>Try it Yourself »</span>
            </Link>
          </div>
        );
      }

      // Handle standard text lines
      const lines = segment.split("\n");
      return (
        <div key={`seg-${segIdx}`} className="space-y-2">
          {lines.map((line, idx) => {
            const trimmed = line.trim();
            if (!trimmed) return <div key={idx} className="h-2" />;

            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-xl md:text-2xl font-extrabold text-white mt-8 mb-4 border-b border-slate-800/60 pb-2 tracking-tight">
                  {trimmed.replace(/^##\s*/, "").replace(/^[#\s]+/, "").trim()}
                </h2>
              );
            }

            if (trimmed.startsWith("###")) {
              return (
                <h3 key={idx} className="text-lg sm:text-xl font-bold text-white mt-6 mb-2 tracking-tight">
                  {trimmed.replace(/^###\s*/, "").replace(/^[#\s]+/, "").trim()}
                </h3>
              );
            }

            if (trimmed.startsWith("* ")) {
              const itemText = trimmed.replace("* ", "");
              return (
                <li key={idx} className="ml-6 list-disc text-sm md:text-base text-slate-200 my-1.5 leading-relaxed">
                  {renderFormattedInline(itemText)}
                </li>
              );
            }

            if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ") || trimmed.startsWith("4. ") || trimmed.startsWith("5. ")) {
              const itemText = trimmed.replace(/^\d+\.\s*/, "");
              return (
                <li key={idx} className="ml-6 list-decimal text-sm md:text-base text-slate-200 my-1.5 leading-relaxed">
                  {renderFormattedInline(itemText)}
                </li>
              );
            }

            if (trimmed.startsWith("> ")) {
              return (
                <blockquote key={idx} className="my-4 p-4 border-l-4 border-[#04AA6D] bg-[#0c1328] rounded-r-xl text-sm md:text-base text-slate-200 font-medium leading-relaxed">
                  {renderFormattedInline(trimmed.replace(/^>\s*/, ""))}
                </blockquote>
              );
            }

            if (trimmed === "---") {
              return <hr key={idx} className="my-6 border-slate-800/80" />;
            }

            return (
              <p key={idx} className="text-sm md:text-base text-slate-200 leading-relaxed my-2 font-normal">
                {renderFormattedInline(trimmed)}
              </p>
            );
          })}
        </div>
      );
    });
  };

  const currentContent = (lesson && lesson[selectedLang] && lesson[selectedLang][selectedLevel]) 
    ? lesson[selectedLang][selectedLevel] 
    : (lesson && lesson.english ? lesson.english.pro : "");

  if (!mounted) {
    return (
      <div className="space-y-6 animate-pulse text-left py-10">
        <div className="h-6 bg-slate-900 rounded-lg w-1/4" />
        <div className="h-10 bg-slate-900 rounded-xl w-3/4" />
        <div className="h-48 bg-slate-900 rounded-2xl w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Banner Ad */}
      <AdSenseBanner />

      {/* Nextsem Academy Clean Header (Previous + Exact Lesson Title + Save + Next) */}
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800/60 pt-2">
        {/* Left: Previous Lesson */}
        <div className="flex items-center gap-2 shrink-0">
          {prevLesson ? (
            <Link
              href={prevLesson.id === 0 ? "/css" : `/css/${prevLesson.slug}`}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <ChevronLeft size={16} className="stroke-[2.5]" />
              <span className="hidden sm:inline">Previous</span>
            </Link>
          ) : (
            <div className="px-3.5 py-2 bg-slate-950/60 border border-slate-850 text-slate-600 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-not-allowed">
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">Previous</span>
            </div>
          )}
        </div>

        {/* Center: Exact Clean Topic Title */}
        <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight text-center truncate px-2">
          {lesson.title}
        </h1>

        {/* Right: Save Options + Next Lesson */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggleBookmark}
            className={`px-3 py-2 rounded-xl border transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
              isBookmarked
                ? "bg-emerald-950/40 border-emerald-500/40 text-[#04AA6D]"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
            }`}
            title={isBookmarked ? "Remove Bookmark" : "Bookmark Lesson"}
          >
            <Bookmark size={18} className={`stroke-[2.5] ${isBookmarked ? "fill-[#04AA6D] text-[#04AA6D]" : ""}`} />
            <span className="text-xs font-bold">{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
          </button>

          {nextLesson ? (
            <Link
              href={`/css/${nextLesson.slug}`}
              className="px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={16} className="stroke-[2.5]" />
            </Link>
          ) : null}
        </div>
      </div>

      {/* Language & Complexity Mode Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/50 rounded-2xl border border-slate-800/80">
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
          {(["english", "hinglish", "hindi"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                selectedLang === lang
                  ? "bg-[#04AA6D] text-white shadow-md shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setSelectedLevel("kid")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedLevel === "kid"
                ? "bg-white text-black shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🧒 Easy Visual
          </button>
          <button
            onClick={() => setSelectedLevel("pro")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedLevel === "pro"
                ? "bg-white text-black shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            💻 Pro Specs
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-slate-900/40 border border-slate-850 p-5 md:p-8 rounded-2xl shadow-xl backdrop-blur-xl relative overflow-hidden">
        <article className="prose prose-invert max-w-none text-left">
          {renderContentText(currentContent)}
        </article>

        {/* Visual Demonstration Topic Animation GIF Card */}
        <TopicAnimationWidget lessonId={lesson.id} lessonTitle={lesson.title} type="css" lang={selectedLang} />
      </div>

      {/* Nextsem Academy CSS Quiz / Playground Reminder Card */}
      <div className="my-8 p-5 md:p-6 bg-[#1d2a35] border border-slate-700/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl text-left">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#04AA6D]/20 text-[#04AA6D] flex items-center justify-center font-black text-xl shrink-0 border border-[#04AA6D]/30 shadow-inner">
            🎨
          </div>
          <div>
            <h4 className="text-base font-extrabold text-white">Practice in Live CSS Playground!</h4>
            <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
              Test your CSS3 layouts, Flexbox, Grid, and animations with real-time browser preview.
            </p>
          </div>
        </div>
        <Link
          href="/playground"
          className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer shrink-0 flex items-center gap-1.5"
        >
          <span>Open Playground »</span>
        </Link>
      </div>

      {/* Bottom Nextsem Academy Navigation Row */}
      <div className="flex items-center justify-between gap-4 border-t border-slate-800/60 pt-6 mt-8">
        {prevLesson ? (
          <Link
            href={prevLesson.id === 0 ? "/css" : `/css/${prevLesson.slug}`}
            className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
          >
            <ChevronLeft size={16} className="stroke-[3]" />
            <span>Previous</span>
          </Link>
        ) : (
          <div className="px-5 py-2.5 bg-slate-900/50 text-slate-600 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 border border-slate-850 cursor-not-allowed">
            <ChevronLeft size={16} />
            <span>Previous</span>
          </div>
        )}

        {/* Center Track Progress Sign In Button / Badge */}
        {userEmail === "guest" ? (
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("nextsem_open_auth"));
            }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
          >
            <span>Sign in to track progress</span>
          </button>
        ) : (
          <span className="hidden sm:inline text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
            ✓ Progress Auto-Saved
          </span>
        )}

        {nextLesson ? (
          <Link
            href={`/css/${nextLesson.slug}`}
            className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight size={16} className="stroke-[3]" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
