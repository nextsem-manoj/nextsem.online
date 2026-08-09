"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, ChevronRight, Bookmark, 
  Monitor, CheckCircle2, Copy, Check, FileText, Sparkles
} from "lucide-react";

export interface TestScreenshot {
  src: string;
  caption: string;
  alt?: string;
  stepNumber?: number;
}

export interface TestLessonData {
  id: number;
  slug: string;
  title: string;
  unit?: string;
  bookRef?: string;
  content: string;
  screenshots?: TestScreenshot[];
}

export interface TestLessonTemplateProps {
  subject?: string;
  subjectTitle?: string;
  subjectDashboardUrl?: string;
  totalLessonsInSubject?: number;
  lesson?: TestLessonData;
  prevLesson?: { id: number; slug: string; title: string } | null;
  nextLesson?: { id: number; slug: string; title: string } | null;
}

/**
 * Empty Lesson Data (No Content) for testing empty lesson state
 */
const EMPTY_LESSON_DATA: TestLessonData = {
  id: 1,
  slug: "empty-lesson-demo",
  title: "HTML5 Lesson — Empty Content State",
  unit: "Unit 1: HTML5 Foundation",
  content: "", // Completely Empty Content
  screenshots: []
};

export default function TestLessonTemplate({
  subject = "html",
  subjectTitle = "HTML5 Web Development",
  subjectDashboardUrl = "/html",
  totalLessonsInSubject = 100,
  lesson = EMPTY_LESSON_DATA,
  prevLesson = { id: 0, slug: "introduction-to-html5", title: "Introduction to HTML5" },
  nextLesson = { id: 2, slug: "learn-html-paragraph-tags-p", title: "HTML Paragraph Tags & Text Formatting" }
}: TestLessonTemplateProps) {
  const [mounted, setMounted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [activeZoomImage, setActiveZoomImage] = useState<TestScreenshot | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const bookmarkStorageKey = `nextsem_${subject}_bookmarks`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedBookmarks: number[] = JSON.parse(localStorage.getItem(bookmarkStorageKey) || "[]");
        setIsBookmarked(savedBookmarks.includes(lesson.id));
      } catch (e) {
        console.error("Bookmark read error:", e);
      }
      setMounted(true);
    }
  }, [lesson.id, bookmarkStorageKey]);

  const toggleBookmark = () => {
    try {
      const savedBookmarks: number[] = JSON.parse(localStorage.getItem(bookmarkStorageKey) || "[]");
      let updated: number[];
      if (savedBookmarks.includes(lesson.id)) {
        updated = savedBookmarks.filter((id) => id !== lesson.id);
        setIsBookmarked(false);
      } else {
        updated = [...savedBookmarks, lesson.id];
        setIsBookmarked(true);
      }
      localStorage.setItem(bookmarkStorageKey, JSON.stringify(updated));
    } catch (e) {
      console.error("Bookmark toggle error:", e);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const currentShot = lesson.screenshots?.[0];
  const cleanCode = lesson.content?.trim() || "";

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#17181c] p-6 text-left animate-pulse">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="h-6 bg-slate-900 rounded-lg w-1/4" />
          <div className="h-10 bg-slate-900 rounded-xl w-3/4" />
          <div className="h-64 bg-slate-900 rounded-2xl w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#17181c] py-6 px-2 sm:px-4 text-slate-100 font-sans">
      <div className="space-y-6 text-left max-w-5xl mx-auto">
        
        {/* Top Back Link & Lesson Counter */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href={subjectDashboardUrl}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#04AA6D] hover:text-[#039861] transition-colors"
          >
            <ChevronLeft size={16} />
            <span>Back to {subjectTitle} Lessons</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs font-bold text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2.5 py-1 rounded-full">
              <Sparkles size={13} className="text-amber-400" />
              <span>Draft</span>
            </span>
            <span className="text-xs font-mono font-black text-white bg-slate-900 border border-slate-800 px-3 py-1 rounded-xl shadow-sm">
              Lesson {lesson.id} / {totalLessonsInSubject}
            </span>
          </div>
        </div>

        {/* Header Navigation Bar */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800/60">
          <div className="flex items-center gap-2 shrink-0">
            {prevLesson ? (
              <Link
                href={`${subjectDashboardUrl}/${prevLesson.slug}`}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <ChevronLeft size={16} className="stroke-[2.5]" />
                <span className="hidden sm:inline">Previous</span>
              </Link>
            ) : null}
          </div>

          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight text-center truncate px-2">
            {lesson.title}
          </h1>

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
                href={`${subjectDashboardUrl}/${nextLesson.slug}`}
                className="px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={16} className="stroke-[2.5]" />
              </Link>
            ) : null}
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-slate-900/40 border border-slate-850 p-5 md:p-8 rounded-2xl shadow-xl backdrop-blur-xl space-y-6">
          
          {cleanCode ? (
            /* Nextsem Example Card (When Code exists) */
            <div className="p-5 md:p-6 bg-[#1d2a35] border border-slate-700/60 rounded-xl space-y-4 shadow-xl text-left">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-extrabold text-white tracking-tight">Example</h3>
                <button
                  onClick={() => handleCopyCode(cleanCode)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 hover:text-white rounded-lg transition-colors cursor-pointer"
                >
                  {copiedCode === cleanCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedCode === cleanCode ? "Copied!" : "Copy Code"}</span>
                </button>
              </div>

              <div className="bg-[#15202b] p-4 md:p-5 rounded-lg border-l-4 border-[#04AA6D] font-mono text-sm overflow-x-auto leading-relaxed shadow-inner">
                {cleanCode.split("\n").map((codeLine, cIdx) => (
                  <div key={cIdx} className="text-white font-medium">
                    {codeLine.includes("<") ? (
                      <span className="text-[#f25f5c] font-semibold">{codeLine}</span>
                    ) : (
                      <span>{codeLine}</span>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href={`/htmldemo?code=${encodeURIComponent(cleanCode)}`}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm rounded-md transition-all shadow-md cursor-pointer"
              >
                <span>Try it Yourself »</span>
              </Link>

              {currentShot && (
                <div className="pt-4 border-t border-slate-700/50 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                    <span className="flex items-center gap-2 text-blue-400 font-mono">
                      <span>🪟 Output Screenshot (Windows 11)</span>
                    </span>
                    <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                      100% Matching Code
                    </span>
                  </div>
                  <div 
                    className="w-full bg-[#15202b] p-2 rounded-lg border border-slate-800 flex items-center justify-center cursor-pointer group"
                    onClick={() => setActiveZoomImage(currentShot)}
                  >
                    <img
                      src={currentShot.src}
                      alt={currentShot.caption || "Windows 11 output preview"}
                      className="w-full h-auto max-h-[450px] object-contain rounded-md shadow-md group-hover:scale-[1.01] transition-transform duration-300"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="p-4 text-center text-xs font-mono text-slate-400">
                      📸 Click to Zoom Full Resolution Windows 11 Screenshot
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Sleek High-Contrast Empty State Card (When Content is Empty) */
            <div className="py-16 px-6 text-center space-y-4 my-4 border border-slate-800/80 rounded-2xl bg-slate-950/40">
              <div className="inline-flex p-4 rounded-2xl bg-slate-850/80 border border-slate-750 text-[#04AA6D] shadow-md">
                <FileText size={36} />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                No Content Available
              </h3>
              <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
                This lesson content is currently under development by the Nextsem team. Check back soon for interactive code examples and step-by-step Windows 11 screenshots!
              </p>
              <div className="pt-2">
                <Link
                  href={subjectDashboardUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs md:text-sm rounded-xl transition-all border border-slate-700 shadow-sm"
                >
                  <ChevronLeft size={16} />
                  <span>Return to Subject Lessons</span>
                </Link>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation */}
        <div className="hidden md:flex items-center justify-between gap-4 border-t border-slate-800/60 pt-6 mt-8">
          {prevLesson ? (
            <Link
              href={`${subjectDashboardUrl}/${prevLesson.slug}`}
              className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
            >
              <ChevronLeft size={16} className="stroke-[3]" />
              <span>Previous Lesson</span>
            </Link>
          ) : <div />}

          {nextLesson ? (
            <Link
              href={`${subjectDashboardUrl}/${nextLesson.slug}`}
              className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
            >
              <span>Next Lesson</span>
              <ChevronRight size={16} className="stroke-[3]" />
            </Link>
          ) : <div />}
        </div>

        {/* Full Resolution Lightbox Zoom Modal */}
        {activeZoomImage && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveZoomImage(null)}
          >
            <div 
              className="max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-4 space-y-4 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Monitor size={16} className="text-blue-400" />
                  <span className="text-xs font-black text-white">Full Resolution Windows 11 Screenshot</span>
                </div>
                <button 
                  onClick={() => setActiveZoomImage(null)}
                  className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Close ✕
                </button>
              </div>

              <div className="max-h-[72vh] overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center p-2 relative">
                <img 
                  src={activeZoomImage.src} 
                  alt={activeZoomImage.alt || activeZoomImage.caption} 
                  className="max-h-[68vh] w-auto object-contain rounded-xl shadow-lg"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 text-center">
                <p className="text-xs font-bold text-slate-200">
                  {activeZoomImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
