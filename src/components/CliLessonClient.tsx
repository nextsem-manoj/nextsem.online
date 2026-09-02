"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, ChevronRight, BookOpen, Code, 
  HelpCircle, CheckCircle2, AlertCircle, Sparkles, Lock, ArrowLeft, X, FileText, Loader2, Bookmark, Download, Terminal, Award, ExternalLink
} from "lucide-react";
import { cliLessons, type Lesson, type CommandItem } from "../data/cliLessonsData";
import AdSenseBanner from "./AdSenseBanner";
import CommandScreenshotWidget from "./CommandScreenshotWidget";
import { useProgress } from "../context/ProgressContext";
import { triggerCelebration } from "../lib/celebration";
import { Capacitor } from "@capacitor/core";
import { showRewardedAd } from "@/lib/admobHelper";
import { generateAndDownloadLessonPdf } from "@/lib/pdfHelper";
import { ensure50Sentences } from "@/lib/lessonEnricher";
import CopyableCommand from "./CopyableCommand";
import ShareButton from "./ShareButton";
import { saveLastLesson } from "@/lib/userProgressSync";
import { auth } from "@/lib/firebase";

interface CliLessonClientProps {
  lesson: Lesson;
}

const NAV_LINKS = [
  { label: "📁 CLI Hub", href: "/cli" },
  { label: "⚡ 30-Min Fast-Track", href: "/terminal-fast-track" },
  { label: "⚡ Essential Commands", href: "/cli/essential-cmd-commands" },
  { label: "🚀 Useful Commands", href: "/cli/most-useful-cmd-commands-in-windows" },
  { label: "🧠 CLI Quiz", href: "/cli/quiz" },
  { label: "🗺️ Developer Roadmap", href: "/full-stack-web-development-roadmap" },
];


export default function CliLessonClient({ lesson }: CliLessonClientProps) {
  const router = useRouter();
  const { completedChapters, markCompleted } = useProgress();

  const [mounted, setMounted] = useState(false);
  const [reachedBottom, setReachedBottom] = useState(false);
  const bottomSentinelRef = useRef<HTMLDivElement>(null);

  // Reveal bottom nav when user scrolls to lesson end
  useEffect(() => {
    const sentinel = bottomSentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setReachedBottom(true); },
      { threshold: 0.1 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedBookmarks = JSON.parse(localStorage.getItem("nextsem_cli_bookmarks") || "[]");
        setIsBookmarked(savedBookmarks.includes(lesson.id));
      } catch (e) {
        console.error(e);
      }
      setMounted(true);
    }
  }, [lesson.id]);

  // Track last visited lesson for resume feature
  useEffect(() => {
    const userEmail = auth.currentUser?.email;
    saveLastLesson(userEmail, {
      slug: lesson.slug,
      title: lesson.title,
      subject: "cli",
      lessonNumber: lesson.id,
      visitedAt: new Date().toISOString(),
    });
  }, [lesson.slug, lesson.title, lesson.id]);

  const toggleBookmark = () => {
    if (typeof window !== "undefined") {
      try {
        const savedBookmarks = JSON.parse(localStorage.getItem("nextsem_cli_bookmarks") || "[]");
        let updated: number[];
        if (savedBookmarks.includes(lesson.id)) {
          updated = savedBookmarks.filter((id: number) => id !== lesson.id);
          setIsBookmarked(false);
        } else {
          updated = [...savedBookmarks, lesson.id];
          setIsBookmarked(true);
        }
        localStorage.setItem("nextsem_cli_bookmarks", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
    }
  };
  
  // Exercise States
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // User States
  const [userEmail, setUserEmail] = useState<string>("guest");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nextsem_user");
      if (saved) {
        try {
          const userObj = JSON.parse(saved);
          if (userObj?.email) {
            setUserEmail(userObj.email);
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const currentExercise = lesson.exercise || {
    question: "Which tool is used for terminal commands?",
    options: ["CLI", "GUI"],
    correctAnswer: "CLI",
    hint: "CLI processes stream commands!"
  };

  // Check if current lesson is completed
  const isLessonCompletedKey = `nextsem_cli_completed_${userEmail}_${lesson.id}`;
  const [isLessonDone, setIsLessonDone] = useState(false);

  // Shuffle MCQ options randomly on exercise change
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  useEffect(() => {
    if (currentExercise?.options) {
      const array = [...currentExercise.options];
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setShuffledOptions(array);
    }
    // Always start with clean, unselected exercise state so students select the answer themselves
    setSelectedOption(null);
    setIsCorrect(false);
    setShowFeedback(false);
    setShowHint(false);
  }, [currentExercise]);

  // Find adjacent lessons
  const currentIndex = cliLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? cliLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < cliLessons.length - 1 ? cliLessons[currentIndex + 1] : null;

  const handleOptionSelect = (option: string, e?: React.MouseEvent) => {
    setSelectedOption(option);
    const correct = option === currentExercise.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      triggerCelebration(e);
    }

    // MANDATORY REQUIREMENT: Answering the MCQ marks lesson completed whether correct or wrong!
    if (typeof window !== "undefined") {
      localStorage.setItem(isLessonCompletedKey, "true");
      setIsLessonDone(true);
      markCompleted(lesson.slug);
      markCompleted(lesson.id.toString());
      window.dispatchEvent(new Event("nextsem_progress_changed"));
    }
  };

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    const rawText = lesson.content || "";
    const fullContentText = ensure50Sentences(rawText, lesson.title, lesson.unit, "english", "pro");

    if (Capacitor.isNativePlatform()) {
      const adSuccess = await showRewardedAd(() => {
        generateAndDownloadLessonPdf({
          title: lesson.title,
          courseName: "🪟 Windows CLI & Command Prompt",
          content: fullContentText,
          unit: lesson.unit,
          author: "Er. Manoj Kumar",
          canonicalUrl: `https://nextsem.online/cli/${lesson.slug}`
        });
      });
      if (!adSuccess) {
        generateAndDownloadLessonPdf({
          title: lesson.title,
          courseName: "🪟 Windows CLI & Command Prompt",
          content: fullContentText,
          unit: lesson.unit,
          author: "Er. Manoj Kumar",
          canonicalUrl: `https://nextsem.online/cli/${lesson.slug}`
        });
      }
    } else {
      generateAndDownloadLessonPdf({
        title: lesson.title,
        courseName: "🪟 Windows CLI & Command Prompt",
        content: fullContentText,
        unit: lesson.unit,
        author: "Er. Manoj Kumar",
        canonicalUrl: `https://nextsem.online/cli/${lesson.slug}`
      });
    }
    setIsDownloading(false);
  };

  // Inline code tokenizer (renders clean bold underlined white text)
  const renderInlineCode = (text: string): React.ReactNode[] => {
    const parts = text.split(/(`[^`]+`)/);
    return parts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        const token = part.slice(1, -1);
        return (
          <u key={i} className="text-white font-bold underline font-mono text-xs sm:text-sm mx-0.5">
            {token}
          </u>
        );
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  // Markdown-to-JSX parser matching screenshot aesthetic
  const renderContentText = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      // Filter out any raw image markdown tags like ![alt text](image.png) or [alt text]
      if (/!\[.*?\]\(.*?\)|\[alt text\]|image-\d+\.png/i.test(trimmed)) {
        return null;
      }

      if (trimmed === "---") {
        return <hr key={idx} className="my-6 border-slate-800/80" />;
      }

      if (trimmed.startsWith("###")) {
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-7 mb-3 flex items-center gap-2">
            <span>{trimmed.replace("###", "").trim()}</span>
          </h3>
        );
      }

      if (trimmed.startsWith("* ")) {
        const itemText = trimmed.replace("* ", "").replace(/\*\*/g, "").trim();
        return (
          <li key={idx} className="ml-5 list-disc text-xs sm:text-sm text-slate-200 my-1 leading-relaxed font-normal">
            {renderInlineCode(itemText)}
          </li>
        );
      }

      if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ")) {
        const itemText = trimmed.replace(/^\d+\.\s*/, "").replace(/\*\*/g, "").trim();
        return (
          <li key={idx} className="ml-5 list-decimal text-xs sm:text-sm text-slate-200 my-1 leading-relaxed font-normal">
            {renderInlineCode(itemText)}
          </li>
        );
      }

      // Normal paragraph
      const boldRegex = /\*\*(.*?)\*\*/g;
      if (boldRegex.test(trimmed) || trimmed.includes('`')) {
        const parts = trimmed.split(boldRegex);
        return (
          <p key={idx} className="text-xs sm:text-sm text-[#e2e8f0] leading-relaxed my-3 font-normal">
            {parts.map((part, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-white font-bold">{part}</strong> : renderInlineCode(part))}
          </p>
        );
      }

      return (
        <p key={idx} className="text-xs sm:text-sm text-[#e2e8f0] leading-relaxed my-3 font-normal">
          {renderInlineCode(trimmed)}
        </p>
      );
    });
  };

  const rawContent = lesson.content || "";
  const currentContent = rawContent;

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

      {/* ── SPACIOUS LESSON TITLE & METADATA HEADER ── */}
      <div className="py-5 border-b border-slate-800/80 text-left space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {lesson.unit && (
            <span className="inline-block px-2.5 py-1 rounded-full bg-[#04AA6D]/10 text-[#04AA6D] border border-[#04AA6D]/30 text-[10px] font-black uppercase tracking-wider">
              {lesson.unit}
            </span>
          )}

          {/* Square Badge for Lesson Number / 1000 + Green Tick if Completed */}
          <div className={`px-3 py-1 bg-[#0c1328] border rounded-lg text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 ${
            completedChapters[lesson.slug] || completedChapters[lesson.id] || completedChapters[`cli_${lesson.id}`]
              ? 'border-[#04AA6D] bg-[#04AA6D]/15'
              : 'border-[#04AA6D]/50'
          }`}>
            {(completedChapters[lesson.slug] || completedChapters[lesson.id] || completedChapters[`cli_${lesson.id}`]) && (
              <CheckCircle2 size={15} className="text-[#04AA6D] shrink-0" />
            )}
            <span className="text-[#04AA6D]">Lesson #{lesson.id}</span>
            <span className="text-slate-400">/ {cliLessons.length}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
          {lesson.title}
        </h1>

        <div className="flex items-center justify-between flex-wrap gap-3 pt-1 text-xs text-slate-400 font-medium">
          {/* Author: NextSem with logo badge */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-[#09101f] border border-[#04AA6D]/60 flex items-center justify-center text-[#04AA6D] font-black text-[9px] shadow-sm">
              NS
            </div>
            <span className="font-bold text-white">NextSem</span>
            <span className="text-slate-600">•</span>
            <span>Last Updated: 5 Aug, 2026</span>
          </div>

          {/* Curriculum Page Link + Share */}
          <div className="flex items-center gap-3">
            <ShareButton
              title={lesson.title}
              text={`I'm learning "${lesson.title}" on Nextsem — free CLI course! 🚀`}
              url={typeof window !== "undefined" ? window.location.href : `https://nextsem.online/cli/${lesson.slug}`}
              variant="icon"
            />
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#04AA6D] hover:text-white transition-colors"
            >
              <span>View Full Curriculum</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── FAST-TRACK BRIDGE CARD FOR WEB DEVELOPERS ── */}
      <div className="bg-[#141824] border border-[#04AA6D]/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg text-left">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#04AA6D]/20 border border-[#04AA6D] flex items-center justify-center text-[#04AA6D] shrink-0 mt-0.5">
            <Terminal size={20} />
          </div>
          <div className="space-y-1">
            <div className="text-[10px] font-black uppercase tracking-wider text-[#04AA6D]">
              Fast-Track For Web Developers
            </div>
            <h4 className="text-sm sm:text-base font-extrabold text-white">
              Don&apos;t want to read 30+ terminal lessons?
            </h4>
            <p className="text-xs text-white font-normal leading-relaxed">
              Learn just the 5 essential commands you need to build web apps in under 15 minutes with video &amp; interactive lab.
            </p>
          </div>
        </div>
        <Link
          href="/terminal-fast-track"
          className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5 cursor-pointer self-start sm:self-auto"
        >
          <span>Take 15-Min Fast-Track »</span>
        </Link>
      </div>

      {/* ── MAIN CONTENT AREA (FRAMELESS / NO HEAVY OUTER BORDER) ── */}
      <div className="py-2 space-y-4">
        <article className="prose prose-invert max-w-none text-left">
          {renderContentText(currentContent)}
        </article>

        {/* ── PER-COMMAND STEPS ── */}
        {lesson.commands && lesson.commands.length > 0 && (
          <div className="space-y-4 pt-3 border-t border-slate-800/80">

            {lesson.commands.map((item: CommandItem, cmdIdx: number) => (
              <div key={cmdIdx} className="space-y-3 text-left py-3 border-b border-slate-800/60 last:border-0">
                {/* Description */}
                <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                  {item.description}
                </p>

                {/* Command Line on New Line */}
                <div className="pt-1 font-mono text-xs sm:text-sm text-left">
                  <span className="text-slate-500 font-bold select-none">C:\Users\Developer&gt; </span>
                  <u className="text-white font-bold underline font-mono text-xs sm:text-sm">{item.cmd}</u>
                </div>

                {/* Dedicated Command Screenshot Box */}
                <CommandScreenshotWidget
                  lessonId={lesson.id}
                  lessonSlug={`${lesson.slug}_cmd_${cmdIdx + 1}`}
                  lessonTitle={item.cmd}
                  cmd={item.cmd}
                  defaultImage={`/screenshots/cli/lesson${lesson.id}_cmd_${cmdIdx + 1}.png`}
                />
              </div>
            ))}
          </div>
        )}

        {(!lesson.commands || lesson.commands.length === 0) && (
          <CommandScreenshotWidget lessonId={lesson.id} lessonSlug={lesson.slug} lessonTitle={lesson.title} />
        )}
      </div>

      {/* ── INTERACTIVE PILL EXERCISE BLOCK ── */}
      <div className="p-5 md:p-6 bg-[#0e1117] border border-[#04AA6D]/40 rounded-2xl shadow-xl text-left space-y-4">
        <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div>
              <h4 className="text-base font-extrabold text-white">Interactive Lesson Check</h4>
              <p className="text-[11px] text-slate-400">Test your understanding to unlock progress</p>
            </div>
          </div>
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-2.5 py-1 bg-[#04AA6D]/10 border border-[#04AA6D]/30 text-[#04AA6D] hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
          >
            <HelpCircle size={14} />
            <span>{showHint ? "Hide Hint" : "Hint"}</span>
          </button>
        </div>

        {showHint && (
          <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-200 font-medium">
            <strong>Hint:</strong> {currentExercise.hint}
          </div>
        )}

        <p className="text-sm font-bold text-slate-200 leading-relaxed">
          {currentExercise.question}
        </p>

        {/* Option Pills (Randomized) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {(shuffledOptions.length > 0 ? shuffledOptions : currentExercise.options).map((opt: string, optIdx: number) => {
            const isSelected = selectedOption === opt;
            const isCorrectOpt = opt === currentExercise.correctAnswer;

            let pillStyle = "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white";
            if (showFeedback) {
              if (isSelected && isCorrectOpt) {
                pillStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-extrabold shadow-md";
              } else if (isSelected && !isCorrectOpt) {
                pillStyle = "bg-rose-950/80 border-rose-500 text-rose-300 font-extrabold";
              } else if (isCorrectOpt) {
                pillStyle = "bg-emerald-950/40 border-emerald-500/40 text-emerald-400 font-bold";
              }
            }

            return (
              <button
                key={optIdx}
                onClick={(e) => handleOptionSelect(opt, e)}
                className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between gap-2 cursor-pointer ${pillStyle}`}
              >
                <span>{opt}</span>
                {showFeedback && isSelected && (
                  isCorrectOpt ? (
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="text-rose-400 shrink-0" />
                  )
                )}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${
            isCorrect ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-300" : "bg-rose-950/60 border border-rose-500/40 text-rose-300"
          }`}>
            {isCorrect ? (
              <>
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Excellent! You got it right! Progress recorded.</span>
              </>
            ) : (
              <>
                <AlertCircle size={16} className="text-rose-400 shrink-0" />
                <span>Incorrect option. Try another answer above!</span>
              </>
            )}
          </div>
        )}
      </div>





      {/* ── AUTHOR ATTRIBUTION BADGE ── */}
      <div className="flex items-center justify-between flex-wrap gap-2 p-3 bg-[#0e1117]/80 border border-slate-800 rounded-xl text-xs text-slate-400">
        <Link href="/about" className="flex items-center gap-2 hover:opacity-80 transition-opacity" title="View Author Profile">
          <img
            src="/manoj-kumar.jpg"
            alt="Er. Manoj Kumar — Curriculum Author"
            className="w-6 h-6 rounded-full object-cover object-top border border-[#04AA6D]"
          />
          <span>Curriculum Author: <strong className="text-white font-bold hover:text-[#04AA6D] transition-colors">Er. Manoj Kumar</strong></span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/curriculum"
            className="text-[#04AA6D] hover:underline flex items-center gap-1 font-bold"
          >
            <span>Full Curriculum</span>
          </Link>
          <span className="text-slate-700">•</span>
          <a
            href="https://nextsem.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#04AA6D] hover:underline flex items-center gap-1 font-bold"
          >
            <span>nextsem.online</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>


      {/* Sentinel — bottom nav reveals when this enters viewport */}
      <div ref={bottomSentinelRef} className="h-1 w-full" />

      {/* ── FOOTER PAGINATION BUTTONS (visible only after user reaches end) ── */}
      <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-b border-slate-800/80 py-6 my-6 transition-all duration-500 ${reachedBottom ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}>
        {prevLesson ? (
          <button
            onClick={() => { window.location.href = prevLesson.id === 1 ? "/cli/introduction-to-command-line-interface-cli-basics" : `/cli/${prevLesson.slug}`; }}
            className="w-full sm:w-auto justify-center px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <ChevronLeft size={16} className="stroke-[2.5]" />
            <span>Previous Lesson</span>
          </button>
        ) : (
          <div className="w-full sm:w-auto justify-center px-5 py-2.5 bg-slate-950/50 text-slate-600 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 border border-slate-850 cursor-not-allowed">
            <ChevronLeft size={16} />
            <span>Previous Lesson</span>
          </div>
        )}

        {/* Center Lesson Number / 1000 Square Badge + Green Tick */}
        <div className={`px-3 py-1.5 bg-[#0c1328] border rounded-lg text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 ${
          completedChapters[lesson.slug] || completedChapters[lesson.id] || completedChapters[`cli_${lesson.id}`]
            ? 'border-[#04AA6D] bg-[#04AA6D]/15'
            : 'border-[#04AA6D]/50'
        }`}>
          {(completedChapters[lesson.slug] || completedChapters[lesson.id] || completedChapters[`cli_${lesson.id}`]) && (
            <CheckCircle2 size={15} className="text-[#04AA6D] shrink-0" />
          )}
          <span className="text-[#04AA6D]">Lesson #{lesson.id}</span>
          <span className="text-slate-400">/ {cliLessons.length}</span>
        </div>

        {nextLesson ? (
          <button
            onClick={() => { window.location.href = `/cli/${nextLesson.slug}`; }}
            className="w-full sm:w-auto justify-center px-6 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
          >
            <span>Next Lesson</span>
            <ChevronRight size={16} className="stroke-[3]" />
          </button>
        ) : (
          <div className="w-full sm:w-auto justify-center px-5 py-2.5 bg-slate-950/50 text-slate-600 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 border border-slate-850 cursor-not-allowed">
            <span>Next Lesson</span>
            <ChevronRight size={16} />
          </div>
        )}
      </div>


      {/* Hidden print container containing the current lesson */}
      <div id="print-section" className="hidden prose prose-slate dark:prose-invert max-w-none text-left">
        <div className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-black text-slate-900">Nextsem Academy</h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Lesson: {lesson.title}</p>
          <p className="text-xs text-slate-400">Author: NextSem</p>
        </div>
        <div className="text-slate-800">
          {renderContentText(lesson.content || "")}
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <AdSenseBanner />
    </div>
  );
}
