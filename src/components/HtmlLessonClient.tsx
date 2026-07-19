"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, ChevronRight, BookOpen, Code, 
  HelpCircle, CheckCircle2, AlertCircle, Sparkles, Lock, ArrowLeft, X
} from "lucide-react";
import { htmlLessons, Lesson } from "../data/htmlLessonsData";
import AdSenseBanner from "./AdSenseBanner";
import { useProgress } from "../context/ProgressContext";

interface HtmlLessonClientProps {
  lesson: Lesson;
}

export default function HtmlLessonClient({ lesson }: HtmlLessonClientProps) {
  const router = useRouter();
  const { completedChapters, markCompleted } = useProgress();

  const [mounted, setMounted] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"english" | "hinglish" | "hindi">("english");
  const [selectedLevel, setSelectedLevel] = useState<"kid" | "pro">("pro");
  const [showTutorTip, setShowTutorTip] = useState(false);
  
  // Exercise States
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // User States
  const [userEmail, setUserEmail] = useState<string>("anonymous");

  // Sync preferences on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("nextsem_html_lang") as "english" | "hinglish" | "hindi" | null;
      if (savedLang) setSelectedLang(savedLang);

      const savedLevel = localStorage.getItem("nextsem_html_level") as "kid" | "pro" | null;
      if (savedLevel) setSelectedLevel(savedLevel);

      const hideTip = localStorage.getItem("nextsem_html_hide_tip") === "true";
      setShowTutorTip(!hideTip);
      setMounted(true);
    }
  }, []);

  const handleLangChange = (lang: "english" | "hinglish" | "hindi") => {
    setSelectedLang(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_html_lang", lang);
    }
  };

  const handleLevelChange = (level: "kid" | "pro") => {
    setSelectedLevel(level);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_html_level", level);
    }
  };

  const dismissTutorTip = () => {
    setShowTutorTip(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_html_hide_tip", "true");
    }
  };

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

  // Check if current lesson is completed
  const isLessonCompletedKey = `nextsem_html_completed_${userEmail}_${lesson.id}`;
  const [isLessonDone, setIsLessonDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const done = localStorage.getItem(isLessonCompletedKey) === "true";
      setIsLessonDone(done);
      if (done) {
        // Pre-fill answer if already completed
        setSelectedOption(lesson.exercise.correctAnswer);
        setIsCorrect(true);
        setShowFeedback(true);
      } else {
        setSelectedOption(null);
        setIsCorrect(false);
        setShowFeedback(false);
        setShowHint(false);
      }
    }
  }, [lesson, isLessonCompletedKey]);

  // Find adjacent lessons
  const currentIndex = htmlLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? htmlLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < htmlLessons.length - 1 ? htmlLessons[currentIndex + 1] : null;

  // Check if next lesson is unlocked
  const isNextUnlocked = isLessonDone || (typeof window !== "undefined" && localStorage.getItem(`nextsem_html_completed_${userEmail}_${lesson.id}`) === "true");

  const handleOptionSelect = (option: string) => {
    if (isLessonDone) return; // Prevent change after completion
    setSelectedOption(option);
    const correct = option === lesson.exercise.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      if (typeof window !== "undefined") {
        localStorage.setItem(isLessonCompletedKey, "true");
        setIsLessonDone(true);

        // Sync to global progress if this is the end of a unit
        checkAndSyncUnitProgress(lesson.id);
      }
    }
  };

  const checkAndSyncUnitProgress = (lessonId: number) => {
    // If the finished lesson is the 10th lesson of a phase, mark the phase complete
    const unitCompletionMap: Record<number, string> = {
      10: "p1-1-intro-and-text",
      20: "p1-2-links-and-media",
      30: "p1-3-lists-and-tables",
      40: "p1-4-forms-and-inputs",
      50: "p1-5-semantics-and-seo",
      100: "p1-6-html5-tags"
    };

    const chapterToMark = unitCompletionMap[lessonId];
    if (chapterToMark) {
      markCompleted(chapterToMark);
      // Trigger user rating prompt
      window.dispatchEvent(new CustomEvent("trigger-rate-prompt"));
    }
  };

  // Basic Markdown-to-JSX parser
  const renderContentText = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-2" />;

      if (trimmed.startsWith("###")) {
        return (
          <h3 key={idx} className="text-md md:text-lg font-black text-slate-100 mt-6 mb-3 flex items-center gap-2 border-b border-slate-800/40 pb-1">
            <span className="text-[#c1a648]">#</span>
            {trimmed.replace("###", "").trim()}
          </h3>
        );
      }

      if (trimmed.startsWith("* ")) {
        return (
          <li key={idx} className="ml-5 list-disc text-xs md:text-sm text-slate-300 my-1.5 leading-relaxed">
            {trimmed.replace("* ", "").replace(/\*\*(.*?)\*\*/g, "$1").trim()}
          </li>
        );
      }

      if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ")) {
        return (
          <li key={idx} className="ml-5 list-decimal text-xs md:text-sm text-slate-300 my-1.5 leading-relaxed">
            {trimmed.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1").trim()}
          </li>
        );
      }

      if (trimmed.startsWith("```")) {
        // Simple code block detector (only catches inline/starts)
        return null; // The main text filter handles multi-line codes separately
      }

      // Detect raw code snippets blocks
      if (trimmed.startsWith("Host:") || trimmed.startsWith("GET ") || trimmed.startsWith("HTTP/1.1 ") || trimmed.startsWith("<!DOCTYPE html>")) {
        return (
          <pre key={idx} className="bg-slate-950/80 p-3 rounded-lg border border-slate-800/50 font-mono text-[10px] md:text-xs text-[#c1a648] overflow-x-auto my-3 leading-relaxed">
            {trimmed}
          </pre>
        );
      }

      // Normal paragraph
      // Highlight bold markups **text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      if (boldRegex.test(trimmed)) {
        const parts = trimmed.split(boldRegex);
        return (
          <p key={idx} className="text-xs md:text-sm text-slate-350 leading-relaxed my-2.5 font-medium">
            {parts.map((part, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-[#c1a648] font-black">{part}</strong> : part)}
          </p>
        );
      }

      return (
        <p key={idx} className="text-xs md:text-sm text-slate-350 leading-relaxed my-2.5 font-medium">
          {trimmed}
        </p>
      );
    });
  };

  const currentContent = lesson[selectedLang][selectedLevel];

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

      {/* Lesson Navigation Header */}
      <div className="flex items-center justify-between border-b border-slate-800/50 pb-4">
        <div>
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 bg-slate-900 border border-slate-850 px-2 py-0.5 rounded-md">
            {lesson.unit}
          </span>
          <h2 className="text-lg md:text-xl font-black text-foreground mt-1">
            Lesson {lesson.id}: {lesson.title}
          </h2>
          <span className="text-[10px] text-slate-500 font-bold block mt-0.5">
            Reference: {lesson.bookRef}
          </span>
        </div>

        {/* Home Back Shortcut & Tutor Guide Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTutorTip(!showTutorTip)}
            className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              showTutorTip
                ? "bg-indigo-950/60 border-indigo-500/40 text-indigo-400"
                : "bg-slate-900/60 border-slate-800 text-slate-450 hover:text-white"
            }`}
            title="Toggle tutor instructions"
          >
            <span>💡 Help Guide</span>
          </button>

          <Link 
            href="/" 
            className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-wider bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 px-3 py-1.5 rounded-lg transition-all"
          >
            <ArrowLeft size={12} />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>

      {/* Tutor Help Guide Overlay */}
      {showTutorTip && (
        <div className="p-4 bg-indigo-950/20 border border-indigo-500/20 rounded-xl flex gap-3 relative animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="text-xl shrink-0 mt-0.5">💡</span>
          <div className="text-left pr-6">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-wider block">Interactive Lesson Guide</span>
            <p className="text-xs text-slate-350 font-semibold leading-relaxed mt-0.5">
              **First visit?** Toggle learning languages (Hindi/Hinglish/English) or switch **Complexity Levels** (Kid Mode vs. Professional Mode) in the tabs below. Your selections persist automatically across all 100 lessons!
            </p>
          </div>
          <button 
            onClick={dismissTutorTip}
            className="absolute top-2.5 right-2.5 text-slate-500 hover:text-slate-300 cursor-pointer p-0.5"
            title="Dismiss guide"
          >
            <X size={14} className="stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* Interactive Tabs Menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/40 border border-slate-850 p-2.5 rounded-2xl backdrop-blur-xl">
        {/* Language Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900/50 p-1 rounded-xl border border-slate-800/30">
          <span className="text-[9px] font-black uppercase text-slate-500 tracking-wider pl-2 pr-1 hidden sm:inline">🌐 Lang:</span>
          {(["english", "hinglish", "hindi"] as const).map((lang) => {
            const labelMap = { english: "🇬🇧 English", hinglish: "🗣️ Hinglish", hindi: "🕉️ Hindi" };
            return (
              <button
                key={lang}
                onClick={() => handleLangChange(lang)}
                className={`flex-1 py-1.5 text-[11px] font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  selectedLang === lang
                    ? "bg-[#c1a648] text-[#1e303f] shadow-sm font-black"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {labelMap[lang]}
              </button>
            );
          })}
        </div>

        {/* Level Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-900/50 p-1 rounded-xl border border-slate-800/30">
          <span className="text-[9px] font-black uppercase text-slate-500 tracking-wider pl-2 pr-1 hidden sm:inline">🧠 Level:</span>
          {(["kid", "pro"] as const).map((level) => {
            const labelMap = { kid: "🧒 Kid Mode (6th)", pro: "💻 Professional" };
            return (
              <button
                key={level}
                onClick={() => handleLevelChange(level)}
                className={`flex-1 py-1.5 text-[11px] font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  selectedLevel === level
                    ? "bg-[#7f7034] text-white shadow-sm font-black"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {labelMap[level]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-slate-900/40 border border-slate-850 p-5 md:p-8 rounded-2xl shadow-xl backdrop-blur-xl relative overflow-hidden">
        {/* Dynamic Mode Watermark */}
        <div className="absolute top-2 right-4 text-[9px] font-black uppercase tracking-widest text-slate-700 pointer-events-none select-none">
          {selectedLang} • {selectedLevel}
        </div>

        {/* Graphic Concept Visualizers (Batches 1-10 custom assets placeholder) */}
        {selectedLevel === "kid" && (
          <div className="mb-6 p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-xl flex items-start gap-3">
            <span className="text-2xl shrink-0">💡</span>
            <div className="text-left">
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider block">Simplified Analogy</span>
              <p className="text-xs text-slate-300 font-semibold leading-relaxed mt-0.5">
                We are using analogies here to make complex structures easy to visualize! Switch to **Professional** mode at the top once you understand the core idea.
              </p>
            </div>
          </div>
        )}

        <article className="prose prose-invert max-w-none text-left">
          {renderContentText(currentContent)}
        </article>
      </div>

      {/* Gamified Exercise Box */}
      <div className="bg-slate-950 border border-slate-800/60 rounded-2xl overflow-hidden shadow-2xl text-left">
        <div className="bg-slate-900/60 px-5 py-3 border-b border-slate-850 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle size={16} className="text-indigo-400" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-200">Interactive Lesson Check</span>
          </div>
          {isLessonDone && (
            <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1 animate-pulse">
              <Sparkles size={9} />
              <span>+10 XP Earned</span>
            </span>
          )}
        </div>

        <div className="p-5 md:p-6 space-y-4">
          <h4 className="text-sm font-bold text-slate-100 leading-snug">
            {lesson.exercise.question}
          </h4>

          {/* Multiple Choice Options */}
          <div className="grid grid-cols-1 gap-2.5">
            {lesson.exercise.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              let btnStyle = "bg-slate-950/50 border-slate-850 text-slate-350 hover:bg-slate-900 hover:text-white";
              
              if (isSelected) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_8px_rgba(52,211,153,0.2)]";
                } else {
                  btnStyle = "bg-rose-950/80 border-rose-500 text-rose-300 font-bold shadow-[0_0_8px_rgba(239,68,68,0.2)]";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  disabled={isLessonDone}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-xs md:text-sm transition-all duration-200 leading-relaxed cursor-pointer ${btnStyle}`}
                >
                  <span className="font-mono text-slate-500 mr-2">{String.fromCharCode(65 + idx)}.</span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Feedback Messages */}
          {showFeedback && (
            <div className={`p-4 rounded-xl border flex gap-3 items-start animate-in fade-in duration-300 ${
              isCorrect 
                ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300"
                : "bg-rose-950/40 border-rose-500/30 text-rose-300"
            }`}>
              {isCorrect ? (
                <>
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <span className="text-xs font-black uppercase block tracking-wider text-emerald-400">Correct Answer!</span>
                    <p className="text-xs text-slate-300 font-semibold leading-relaxed mt-0.5">
                      Awesome job! You have unlocked the next lesson. Keep up the streak!
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle size={18} className="shrink-0 mt-0.5 text-rose-400" />
                  <div className="flex-1">
                    <span className="text-xs font-black uppercase block tracking-wider text-rose-400">Incorrect Answer</span>
                    <p className="text-xs text-slate-300 font-semibold leading-relaxed mt-0.5">
                      That is not quite right. Try again, or click below to check the hint.
                    </p>
                    {showHint ? (
                      <div className="mt-2 text-[11px] bg-slate-950/40 p-2.5 rounded-lg border border-slate-800 text-slate-400 leading-relaxed font-medium">
                        💡 **Hint**: {lesson.exercise.hint}
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowHint(true)}
                        className="mt-2 text-[10px] font-black uppercase tracking-wider text-indigo-400 hover:text-indigo-300 cursor-pointer"
                      >
                        Show Hint
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lesson Foot Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-850 pt-6">
        {prevLesson ? (
          <Link
            href={`/html/${prevLesson.slug}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 hover:border-indigo-500/30 text-slate-400 hover:text-white rounded-xl text-[11px] font-black uppercase tracking-wider transition-all w-full sm:w-auto justify-center"
          >
            <ChevronLeft size={14} />
            <span>Prev: {prevLesson.title}</span>
          </Link>
        ) : (
          <div className="opacity-0 hidden sm:block" />
        )}

        {nextLesson ? (
          isNextUnlocked ? (
            <Link
              href={`/html/${nextLesson.slug}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#c1a648] hover:bg-[#7f7034] text-[#1e303f] hover:text-white rounded-xl text-[11px] font-black uppercase tracking-wider transition-all w-full sm:w-auto justify-center shadow-lg shadow-[#c1a648]/10"
            >
              <span>Next: {nextLesson.title}</span>
              <ChevronRight size={14} />
            </Link>
          ) : (
            <button
              onClick={() => alert("Please solve the check assignment correctly to unlock the next lesson!")}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 border border-slate-700 text-slate-500 rounded-xl text-[11px] font-black uppercase tracking-wider w-full sm:w-auto justify-center cursor-not-allowed opacity-60"
            >
              <span>Next: {nextLesson.title}</span>
              <Lock size={12} className="stroke-[2.5]" />
            </button>
          )
        ) : (
          <div className="opacity-0 hidden sm:block" />
        )}
      </div>

      {/* Bottom Ad Banner */}
      <AdSenseBanner />
    </div>
  );
}
