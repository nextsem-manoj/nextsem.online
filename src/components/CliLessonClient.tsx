"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, ChevronRight, BookOpen, Code, 
  HelpCircle, CheckCircle2, AlertCircle, Sparkles, Lock, ArrowLeft, X, FileText, Loader2
} from "lucide-react";
import { cliLessons } from "../data/cliLessonsData";
import AdSenseBanner from "./AdSenseBanner";
import { useProgress } from "../context/ProgressContext";
import { AdMob } from "@capacitor-community/admob";
import { triggerCelebration } from "../lib/celebration";
import TopicAnimationWidget from "./TopicAnimationWidget";

interface CliLessonClientProps {
  lesson: any; // Using any to avoid type issues with imported Lesson structures
}

export default function CliLessonClient({ lesson }: CliLessonClientProps) {
  const router = useRouter();
  const { completedChapters, markCompleted } = useProgress();

  const [mounted, setMounted] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"english" | "hinglish" | "hindi">("hinglish");
  const [selectedLevel, setSelectedLevel] = useState<"kid" | "pro">("kid");
  const [showTutorTip, setShowTutorTip] = useState(false);
  
  // Exercise States
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // PDF States
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState("");

  // User States
  // defaults to "guest" so progress auto-saves without login
  const [userEmail, setUserEmail] = useState<string>("guest");

  // Sync preferences on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("nextsem_cli_lang") as "english" | "hinglish" | "hindi" | null;
      if (savedLang) setSelectedLang(savedLang);

      const savedLevel = localStorage.getItem("nextsem_cli_level") as "kid" | "pro" | null;
      if (savedLevel) setSelectedLevel(savedLevel);

      const hideTip = localStorage.getItem("nextsem_cli_hide_tip") === "true";
      setShowTutorTip(false); // Help guide hidden by default
      setMounted(true);
    }
  }, []);

  const handleLangChange = (lang: "english" | "hinglish" | "hindi") => {
    setSelectedLang(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_cli_lang", lang);
    }
  };

  const handleLevelChange = (level: "kid" | "pro") => {
    setSelectedLevel(level);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_cli_level", level);
    }
  };

  const dismissTutorTip = () => {
    setShowTutorTip(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_cli_hide_tip", "true");
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

  const currentExercise = lesson.exercise[selectedLang] || lesson.exercise.english;

  // Check if current lesson is completed
  const isLessonCompletedKey = `nextsem_cli_completed_${userEmail}_${lesson.id}`;
  const [isLessonDone, setIsLessonDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const done = localStorage.getItem(isLessonCompletedKey) === "true" || completedChapters[lesson.slug] === true;
      setIsLessonDone(done);
      if (done) {
        // Pre-fill answer if already completed
        setSelectedOption(currentExercise.correctAnswer);
        setIsCorrect(true);
        setShowFeedback(true);
      } else {
        setSelectedOption(null);
        setIsCorrect(false);
        setShowFeedback(false);
        setShowHint(false);
      }
    }
  }, [lesson, isLessonCompletedKey, completedChapters, selectedLang, currentExercise]);

  // Find adjacent lessons
  const currentIndex = cliLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? cliLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < cliLessons.length - 1 ? cliLessons[currentIndex + 1] : null;

  // Check if next lesson is unlocked
  const isNextUnlocked = isLessonDone;

  const handleOptionSelect = (option: string, e?: React.MouseEvent) => {
    if (isLessonDone) return; // Prevent change after completion
    setSelectedOption(option);
    const correct = option === currentExercise.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      triggerCelebration(e);
      if (typeof window !== "undefined") {
        localStorage.setItem(isLessonCompletedKey, "true");
        setIsLessonDone(true);
        markCompleted(lesson.slug);

        // Trigger user rating prompt
        window.dispatchEvent(new CustomEvent("trigger-rate-prompt"));
      }
    }
  };

  const handlePdfDownload = async () => {
    const isNative = typeof window !== 'undefined' &&
      (window as any).Capacitor?.isNativePlatform();

    if (isNative) {
      setIsDownloading(true);
      setDownloadStatus("Preparing Ad...");
      try {
        // Prepare Rewarded Video Ad
        await AdMob.prepareRewardVideoAd({
          adId: 'ca-app-pub-4242865347895866/5641573985', // Production AdMob Rewarded Ad ID
          isTesting: false
        });

        // Setup event listener for reward
        let rewardEarned = false;
        const rewardListener = await AdMob.addListener('rewardedVideoReward' as any, () => {
          rewardEarned = true;
        });

        const closeListener = await AdMob.addListener('rewardedVideoClosed' as any, () => {
          // Clean up listeners
          rewardListener.remove();
          closeListener.remove();
          
          setIsDownloading(false);
          if (rewardEarned) {
            triggerPdfPrint();
          } else {
            alert("You must watch the full sponsored ad to unlock the PDF download!");
          }
        });

        // Show Ad
        await AdMob.showRewardVideoAd();
      } catch (e) {
        console.error("AdMob Rewarded Ad failed:", e);
        setIsDownloading(false);
        // Fallback: if ad fails to load/show, let them download anyway
        triggerPdfPrint();
      }
    } else {
      // Web simulation
      setIsDownloading(true);
      setDownloadStatus("Loading Ad...");
      setTimeout(() => {
        setDownloadStatus("Watching Ad (2s)...");
        setTimeout(() => {
          setIsDownloading(false);
          triggerPdfPrint();
        }, 2000);
      }, 1000);
    }
  };

  const triggerPdfPrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
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
          <li key={idx} className="ml-5 list-disc text-xs md:text-sm text-slate-350 my-1.5 leading-relaxed">
            {trimmed.replace("* ", "").replace(/\*\*(.*?)\*\*/g, "$1").trim()}
          </li>
        );
      }

      if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ")) {
        return (
          <li key={idx} className="ml-5 list-decimal text-xs md:text-sm text-slate-350 my-1.5 leading-relaxed">
            {trimmed.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1").trim()}
          </li>
        );
      }

      // Normal paragraph
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
            href="/cli" 
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
              **First visit?** Toggle learning languages (Hindi/Hinglish/English) or switch **Complexity Levels** (Kid Mode vs. Professional Mode) in the tabs below. Your selections persist automatically across all lessons!
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

        {/* Visual Demonstration Topic Animation GIF Card */}
        <TopicAnimationWidget lessonId={lesson.id} lessonTitle={lesson.title} type="cli" />
      </div>

      {/* Practice Question */}
      <div className="bg-slate-950 border border-slate-800/60 rounded-2xl overflow-hidden shadow-lg text-left">
        <div className="bg-slate-900/40 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle size={15} className="text-slate-400" />
            <span className="text-sm font-semibold text-slate-300">Practice Question</span>
          </div>
          {isLessonDone && (
            <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
              <CheckCircle2 size={13} />
              <span>Completed</span>
            </span>
          )}
        </div>

        <div className="p-5 md:p-6 space-y-4">
          <h4 className="text-sm font-bold text-slate-100 leading-snug">
            {currentExercise.question}
          </h4>

          {/* Fill-in-the-blank preview */}
          <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg font-mono text-xs text-slate-300 flex items-center gap-2 flex-wrap">
            <span className="text-slate-500">Your answer:</span>
            <span className={`px-2.5 py-0.5 rounded font-medium border text-xs transition-all ${
              selectedOption 
                ? isCorrect 
                  ? "bg-emerald-950 text-emerald-300 border-emerald-700" 
                  : "bg-rose-950 text-rose-300 border-rose-800"
                : "text-slate-500 border-slate-700 border-dashed"
            }`}>
              {selectedOption || "—"}
            </span>
          </div>

          {/* Quick-pick buttons */}
          <div className="space-y-1.5 pt-1">
            <span className="text-xs font-medium text-slate-500 block">Pick an answer:</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {currentExercise.options.slice(0, 4).map((option: string, idx: number) => {
                const isSelected = selectedOption === option;
                let pillStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white";

                if (isSelected) {
                  if (isCorrect) {
                    pillStyle = "bg-emerald-600 text-white border-emerald-500 font-semibold";
                  } else {
                    pillStyle = "bg-rose-700 text-white border-rose-600 font-semibold";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={(e) => handleOptionSelect(option, e)}
                    className={`px-3 py-2 rounded-lg border text-xs font-mono transition-all cursor-pointer text-center truncate active:scale-95 ${pillStyle}`}
                    title={option}
                  >
                    {isSelected && isCorrect ? `✓ ${option}` : isSelected ? `✗ Try again` : option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Multiple Choice Detailed List */}
          <div className="grid grid-cols-1 gap-2 pt-2">
            {currentExercise.options.map((option: string, idx: number) => {
              const isSelected = selectedOption === option;
              let btnStyle = "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200 hover:border-slate-700";
              let badge = null;

              if (isSelected) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-950 border-emerald-700 text-emerald-200";
                  badge = <span className="float-right text-xs font-medium text-emerald-400">✓ Correct</span>;
                } else {
                  btnStyle = "bg-rose-950 border-rose-800 text-rose-300";
                  badge = <span className="float-right text-xs font-medium text-rose-400">Try again</span>;
                }
              }

              return (
                <button
                  key={idx}
                  onClick={(e) => handleOptionSelect(option, e)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-150 leading-relaxed cursor-pointer ${btnStyle}`}
                >
                  <span className="text-slate-600 mr-2">{String.fromCharCode(65 + idx)}.</span>
                  {option}
                  {badge}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`p-3.5 rounded-xl border flex gap-3 items-start ${
              isCorrect 
                ? "bg-emerald-950/30 border-emerald-800 text-emerald-300"
                : "bg-slate-900 border-slate-700 text-slate-300"
            }`}>
              {isCorrect ? (
                <>
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-300">That's correct!</p>
                    <p className="text-xs text-slate-400 mt-0.5">Next lesson is now unlocked.</p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle size={16} className="shrink-0 mt-0.5 text-slate-400" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-200">Not quite — try another option.</p>
                    {showHint ? (
                      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                        Hint: {currentExercise.hint}
                      </p>
                    ) : (
                      <button
                        onClick={() => setShowHint(true)}
                        className="mt-1.5 text-xs text-indigo-400 hover:text-indigo-300 cursor-pointer underline underline-offset-2"
                      >
                        Show hint
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Rewarded Ad PDF Download Option */}
      <div className="w-full flex justify-center pt-2">
        <button
          onClick={handlePdfDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-xs bg-slate-900 border border-slate-850 hover:border-[#c1a648]/50 hover:bg-slate-850 text-[#c1a648] hover:text-white transition-all shadow-md active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          {isDownloading ? (
            <>
              <Loader2 size={14} className="animate-spin text-[#c1a648]" />
              <span>{downloadStatus}</span>
            </>
          ) : (
            <>
              <FileText size={14} />
              <span>Download Lesson PDF</span>
              <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-[#c1a648]/20 text-[#c1a648] text-[8px] font-black tracking-wider uppercase animate-pulse">
                <Sparkles size={8} /> Watch Ad
              </span>
            </>
          )}
        </button>
      </div>

      {/* Lesson Foot Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-850 pt-6">
        {prevLesson ? (
          <Link
            href={`/cli/${prevLesson.slug}`}
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
              href={`/cli/${nextLesson.slug}`}
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

      {/* Hidden print container containing the current lesson */}
      <div id="print-section" className="hidden prose prose-slate dark:prose-invert max-w-none text-left">
        <div className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-black text-slate-900">Nextsem Academy</h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Lesson: {lesson.title}</p>
        </div>
        <div className="text-slate-800">
          {renderContentText(lesson.english.pro)}
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <AdSenseBanner />
    </div>
  );
}
