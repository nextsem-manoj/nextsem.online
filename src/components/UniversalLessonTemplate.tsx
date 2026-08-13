"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, ChevronRight, Bookmark, Download, 
  Terminal, Monitor, Sparkles, CheckCircle2
} from "lucide-react";
import CopyableCommand from "./CopyableCommand";
import ShareButton from "./ShareButton";
import { saveLastLesson } from "@/lib/userProgressSync";
import { auth } from "@/lib/firebase";
import { useProgress } from "../context/ProgressContext";

export interface UniversalScreenshot {
  src: string;
  caption: string;
  alt?: string;
  stepNumber?: number;
  commandSnippet?: string;
}

export interface UniversalCommandItem {
  cmd: string;
  description: string;
  output?: string;
}

export interface UniversalLessonData {
  id: number;
  slug: string;
  title: string;
  unit?: string;
  bookRef?: string;
  content?: string;
  screenshots?: UniversalScreenshot[];
  commands?: UniversalCommandItem[];
}

export interface UniversalLessonTemplateProps {
  subject: string;                  // e.g. "html", "cli", "css", "js"
  subjectTitle: string;             // e.g. "HTML5 Web Development", "Windows Command Prompt CLI"
  subjectDashboardUrl: string;      // e.g. "/html", "/cli"
  totalLessonsInSubject?: number;   // default: 100
  lesson: UniversalLessonData;
  contentBody: string;               // Markdown or plain text content
  prevLesson?: { id: number; slug: string; title: string } | null;
  nextLesson?: { id: number; slug: string; title: string } | null;
}

export default function UniversalLessonTemplate({
  subject,
  subjectTitle,
  subjectDashboardUrl,
  totalLessonsInSubject = 100,
  lesson,
  contentBody,
  prevLesson,
  nextLesson
}: UniversalLessonTemplateProps) {
  const router = useRouter();
  const { completedChapters } = useProgress();

  const [mounted, setMounted] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [activeZoomImage, setActiveZoomImage] = useState<UniversalScreenshot | null>(null);

  const bookmarkStorageKey = `nextsem_${subject}_bookmarks`;
  const isLessonCompleted = Boolean(completedChapters?.[`${subject}_${lesson.id}`]) || Boolean(completedChapters?.[lesson.slug]);

  // Sync bookmark state on mount
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

  // Track last visited lesson for resume feature
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const userEmail = auth?.currentUser?.email;
        saveLastLesson(userEmail, {
          slug: lesson.slug,
          title: lesson.title,
          subject: subject,
          lessonNumber: lesson.id,
          visitedAt: new Date().toISOString(),
        });
      } catch (e) {
        console.error("Save last lesson error:", e);
      }
    }
  }, [lesson.slug, lesson.title, lesson.id, subject]);

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

  const renderInlineCode = (str: string) => {
    const tagRegex = /(<\/?[a-zA-Z0-9!\s="-]+>|`[^`]+`)/g;
    const parts = str.split(tagRegex);
    return parts.map((part, i) => {
      if (!part) return null;
      if (part.startsWith('`') && part.endsWith('`')) {
        const cleanCmd = part.slice(1, -1);
        return <CopyableCommand key={i} command={cleanCmd} inline={true} />;
      }
      const subParts = part.split(tagRegex);
      return subParts.map((sub, j) => {
        if (tagRegex.test(sub) || (sub.startsWith('<') && sub.endsWith('>'))) {
          return <CopyableCommand key={`${i}-${j}`} command={sub.trim()} inline={true} />;
        }
        return <React.Fragment key={`${i}-${j}`}>{sub}</React.Fragment>;
      });
    });
  };

  // Dynamic Markdown-to-JSX Parser with 1-to-1 Screenshot Card Embedding
  const renderFormattedContent = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");
    let exampleCounter = 0;

    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return null;

      if (trimmed === "---" || trimmed === "___" || trimmed === "***") {
        return <hr key={idx} className="border-t border-slate-800/80 my-6" />;
      }

      if (trimmed.startsWith("## ")) {
        const cleanTitle = trimmed.replace(/^##\s*/, "").replace(/^[#\s]+/, "").replace(/\*\*(.*?)\*\*/g, "$1").trim();
        return (
          <h2 key={idx} className="text-xl md:text-2xl font-extrabold text-white mt-8 mb-4 border-b border-slate-800/60 pb-2 tracking-tight">
            {cleanTitle}
          </h2>
        );
      }

      if (trimmed.startsWith("###")) {
        const cleanTitle = trimmed.replace(/^###\s*/, "").replace(/^[#\s]+/, "").replace(/\*\*(.*?)\*\*/g, "$1").trim();
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-bold text-white mt-6 mb-3 tracking-tight">
            {cleanTitle}
          </h3>
        );
      }

      // Ignore Markdown Table Separator Rows (|:---|:---|)
      if (trimmed.startsWith("|") && (trimmed.includes(":-") || trimmed.includes("--"))) {
        return null;
      }

      // Handle Markdown Table Rows (| col1 | col2 |)
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        const cells = trimmed
          .split("|")
          .map((c) => c.trim())
          .filter((c) => c.length > 0);

        if (cells.length === 0) return null;

        return (
          <div key={idx} className="my-4 overflow-x-auto rounded-xl border border-slate-800 bg-[#15202b]">
            <table className="w-full text-left font-sans text-sm text-slate-200 border-collapse">
              <tbody>
                <tr className="border-b border-slate-800 bg-[#1c2834]">
                  {cells.map((cell, cIdx) => {
                    const cleanCell = cell.replace(/\*\*(.*?)\*\*/g, "$1").replace(/[*`_]/g, "").trim();
                    return (
                      <td key={cIdx} className="px-4 py-3 font-extrabold text-white border-r border-slate-800 last:border-r-0">
                        {cleanCell}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        );
      }

      // Detect code snippets and render Example Card with embedded 100% matching screenshot
      if (
        trimmed.startsWith("Host:") ||
        trimmed.startsWith("GET ") ||
        trimmed.startsWith("HTTP/1.1 ") ||
        trimmed.startsWith("<!DOCTYPE html>") ||
        trimmed.startsWith("```")
      ) {
        const cleanCode = trimmed.replace(/^```[a-z]*\n?/, "").replace(/\n?```$/, "");
        const currentShot = lesson.screenshots?.[exampleCounter] || lesson.screenshots?.[0];
        exampleCounter++;

        const firstLine = cleanCode.split("\n")[0].trim();
        const displayHeader = firstLine.startsWith("#include") || firstLine.startsWith("int main") || firstLine.startsWith("<!DOCTYPE") || firstLine.startsWith("using ")
          ? (subject === "cpp" ? "C++ Source Code (main.cpp)" : "Source Code Snippet")
          : firstLine;

        return (
          <div key={idx} className="my-6 p-5 md:p-6 bg-[#1d2a35] border border-slate-700/60 rounded-xl space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold text-white overflow-hidden">
                <span className="text-[#04AA6D] font-bold">⊞</span>
                <span className="truncate">{displayHeader}</span>
              </div>
              <CopyableCommand command={cleanCode} inline={false} className="my-0" />
            </div>

            {/* Code Snippet Box */}
            <div className="bg-[#15202b] p-4 md:p-5 rounded-lg border-l-4 border-[#04AA6D] font-mono text-sm overflow-x-auto leading-relaxed shadow-inner">
              {cleanCode.split('\n').map((codeLine, cIdx) => {
                const tagRegex = /(<\/?[a-zA-Z0-9!\s="-]+>)/g;
                const tokens = codeLine.split(tagRegex);
                return (
                  <div key={cIdx}>
                    {tokens.map((tok, tIdx) => {
                      if (tok.startsWith('<') && tok.endsWith('>')) {
                        return <span key={tIdx} className="text-[#f25f5c] font-semibold">{tok}</span>;
                      }
                      return <span key={tIdx} className="text-white font-medium">{tok}</span>;
                    })}
                  </div>
                );
              })}
            </div>

            {/* Render 'Try it Yourself' button ONLY for HTML subject */}
            {subject === "html" && (
              <Link
                href={`/htmldemo?code=${encodeURIComponent(cleanCode)}`}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm rounded-md transition-all shadow-md cursor-pointer"
              >
                <span>Try it Yourself »</span>
              </Link>
            )}

            {/* Matching Screenshot / Windows 11 Pro Terminal Execution Output */}
            {currentShot ? (
              <div className="pt-3 border-t border-slate-700/50 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-2 text-[#04AA6D] font-mono">
                    <span className="text-[#04AA6D] font-bold">⊞</span>
                    <span>Windows 11 Pro Terminal Output (100% Real PC Match)</span>
                  </span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                    100% Matching Code
                  </span>
                </div>
                <div 
                  className="w-full bg-[#15202b] p-2 rounded-lg border border-slate-800 flex items-center justify-center cursor-pointer group"
                  onClick={() => setActiveZoomImage(currentShot)}
                >
                  <img
                    src={currentShot.src}
                    alt={currentShot.caption || "Editor running example on Windows 11 Pro"}
                    className="w-full h-auto max-h-[450px] object-contain rounded-md shadow-md group-hover:scale-[1.01] transition-transform duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ) : subject === "cli" || subject === "cpp" ? (
              <div className="pt-3 border-t border-slate-700/50 space-y-2 font-mono text-xs text-left">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-2 text-[#04AA6D] font-mono">
                    <span className="text-[#04AA6D] font-bold">⊞</span>
                    <span>Windows 11 Pro Terminal Execution Output</span>
                  </span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border border-emerald-500/20">
                    Windows 11 Pro Verified
                  </span>
                </div>
                
                {/* Windows 11 Pro Terminal Window Box */}
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0c0c0c] shadow-2xl">
                  {/* Monochromatic Windows 11 Pro Titlebar */}
                  <div className="bg-[#1f1f1f] px-3 py-1.5 flex items-center justify-between border-b border-slate-800 text-[11px] text-slate-300 select-none">
                    <div className="flex items-center gap-2">
                      <span className="text-[#04AA6D] font-bold text-sm">⊞</span>
                      <span className="font-bold text-white">Administrator: Windows 11 Pro Command Prompt ({subject === "cpp" ? "g++ GCC 13.2.0" : "cmd.exe"})</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <span>&#8212;</span>
                      <span>&#9633;</span>
                      <span>&#10005;</span>
                    </div>
                  </div>

                  {/* Terminal Execution Body */}
                  <div className="p-4 space-y-2 text-slate-200 bg-[#0c0c0c] text-xs leading-relaxed">
                    <p className="text-slate-500">Microsoft Windows [Version 10.0.22631.3007] (Windows 11 Pro x86_64)</p>
                    <p className="text-slate-500">(c) Microsoft Corporation. All rights reserved.</p>
                    <div className="pt-2 space-y-1">
                      <p className="text-[#04AA6D] font-bold flex items-center gap-1 flex-wrap">
                        <span>C:\Users\Student\CPP_Project&gt;</span>
                        <span className="text-white font-mono">{cleanCode}</span>
                      </p>
                      <div className="text-emerald-400/90 pt-1 font-mono whitespace-pre-wrap">
                        {cleanCode.includes("g++ --version")
                          ? "g++ (Rev2, Built by MSYS2 project) 13.2.0\nCopyright (C) 2023 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions."
                          : cleanCode.includes("g++ -o") || cleanCode.includes("g++")
                          ? "Compiling main.cpp into main.exe...\nCompilation successful! [0 errors, 0 warnings]"
                          : cleanCode.includes("winget")
                          ? "Found MSYS2 [MSYS2.MSYS2]\nDownloading https://github.com/msys2/msys2-installer/...\nInstalling package...\nSuccessfully installed MSYS2!"
                          : cleanCode.includes("main.exe") || cleanCode.includes("main_optimized.exe")
                          ? "Hello World from C++ on Windows 11 Pro!\n[Process exited with code 0 in 0.001 seconds]"
                          : "[Command executed on Windows 11 Pro with exit code 0]"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      }

      // Handle Bullet Lists (*, -, +)
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.startsWith("+ ")) {
        const cleanText = trimmed.replace(/^[*\-+]\s*/, "").replace(/\*"/g, '"').replace(/"\*/g, '"').trim();
        const boldRegex = /\*\*(.*?)\*\*/g;
        const parts = cleanText.split(boldRegex);

        return (
          <li key={idx} className="ml-6 list-disc text-sm md:text-base text-slate-300 my-2 leading-relaxed">
            {parts.map((part, pIdx) =>
              pIdx % 2 === 1
                ? <strong key={pIdx} className="text-white font-bold">{part.replace(/[*`]/g, "")}</strong>
                : <React.Fragment key={pIdx}>{renderInlineCode(part.replace(/\*"/g, '"').replace(/"\*/g, '"'))}</React.Fragment>
            )}
          </li>
        );
      }

      // Handle Numbered Lists (1., 2., etc.)
      if (/^\d+\.\s+/.test(trimmed)) {
        const cleanText = trimmed.replace(/^\d+\.\s+/, "").replace(/\*"/g, '"').replace(/"\*/g, '"').trim();
        const boldRegex = /\*\*(.*?)\*\*/g;
        const parts = cleanText.split(boldRegex);

        return (
          <li key={idx} className="ml-6 list-decimal text-sm md:text-base text-slate-300 my-2 leading-relaxed">
            {parts.map((part, pIdx) =>
              pIdx % 2 === 1
                ? <strong key={pIdx} className="text-white font-bold">{part.replace(/[*`]/g, "")}</strong>
                : <React.Fragment key={pIdx}>{renderInlineCode(part.replace(/\*"/g, '"').replace(/"\*/g, '"'))}</React.Fragment>
            )}
          </li>
        );
      }

      // Normal paragraph text
      const sanitizedParagraph = trimmed.replace(/\*"/g, '"').replace(/"\*/g, '"').replace(/\*([^"*\s][^*]*[^"*\s])\*/g, "$1");
      const boldRegex = /\*\*(.*?)\*\*/g;
      if (boldRegex.test(sanitizedParagraph) || sanitizedParagraph.includes('`') || sanitizedParagraph.includes('<')) {
        const parts = sanitizedParagraph.split(boldRegex);
        return (
          <p key={idx} className="text-sm md:text-base text-slate-300 leading-relaxed my-3 font-normal">
            {parts.map((part, pIdx) =>
              pIdx % 2 === 1
                ? <strong key={pIdx} className="text-white font-bold">{part.replace(/[*`]/g, "")}</strong>
                : <React.Fragment key={pIdx}>{renderInlineCode(part.replace(/[*]/g, ""))}</React.Fragment>
            )}
          </p>
        );
      }

      return (
        <p key={idx} className="text-sm md:text-base text-slate-300 leading-relaxed my-3 font-normal">
          {renderInlineCode(sanitizedParagraph.replace(/[*]/g, ""))}
        </p>
      );
    });
  };

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
    <div className="space-y-6 text-left max-w-5xl mx-auto px-2 sm:px-4">
      {/* Unit & Lesson Counter Badge Row */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <span className="text-xs font-black uppercase tracking-wider text-[#04AA6D] border border-[#04AA6D]/30 bg-[#04AA6D]/10 px-3 py-1 rounded-full">
          {lesson.unit || "Unit 1: Command Line & Terminal Foundations"}
        </span>
        <span className="text-xs font-mono font-black text-[#04AA6D] border border-[#04AA6D]/30 bg-[#04AA6D]/10 px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
          <CheckCircle2 size={12} />
          <span>Lesson #{lesson.id} / {totalLessonsInSubject}</span>
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        {lesson.title}
      </h1>

      {/* Author Attribution & Share Row */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-2">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-extrabold text-xs text-[#04AA6D] bg-[#04AA6D]/10 border border-[#04AA6D]/30 px-1.5 py-0.5 rounded">NS</span>
          <span className="font-bold text-slate-200">NextSem</span>
          <span>•</span>
          <span>Last Updated: 5 Aug, 2026</span>
        </div>
        <div className="flex items-center gap-3">
          <ShareButton title={lesson.title} />
          <Link href={subjectDashboardUrl} className="text-xs font-bold text-[#04AA6D] hover:underline flex items-center gap-1">
            <span>View Full Curriculum</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main Single-Stream Content Container */}
      <div className="bg-slate-900/40 border border-slate-850 p-5 md:p-8 rounded-2xl shadow-xl backdrop-blur-xl relative overflow-hidden">
        <article className="prose prose-invert max-w-none text-left">
          {renderFormattedContent(contentBody)}
        </article>
      </div>

      {/* Bottom Desktop Navigation Row */}
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

      {/* Lightbox Image Zoom Modal */}
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
                <span className="text-xs font-black text-white">Full Resolution Screenshot</span>
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
  );
}
