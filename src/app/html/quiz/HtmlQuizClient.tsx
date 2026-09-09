"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  HelpCircle, CheckCircle2, AlertCircle, ArrowLeft, RotateCcw,
  Trophy, Sparkles, ChevronRight, ChevronLeft, Award, Play,
  LayoutDashboard, BookOpen, Layers, Code2, Home, Check
} from "lucide-react";
import { htmlLessons } from "@/data/htmlLessonsData";

type Language = "english" | "hinglish" | "hindi";

interface AnswerRecord {
  questionIdx: number;
  selectedOption: string;
  isCorrect: boolean;
}

const getExerciseForLang = (ex: any, lang: Language) => {
  if (ex && typeof ex === "object" && "english" in ex) {
    return ex[lang] || ex.english;
  }
  return ex;
};

export default function HtmlQuizClient() {
  const [selectedLang, setSelectedLang] = useState<Language>("english");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerRecord>>({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [showJumpGrid, setShowJumpGrid] = useState(false);

  const totalQuestions = htmlLessons.length;
  const currentLesson = htmlLessons[currentQuestionIdx] || htmlLessons[0];
  const currentExercise = getExerciseForLang(currentLesson.exercise, selectedLang);

  const currentAnswer = answers[currentQuestionIdx];
  const isAnswered = currentAnswer !== undefined;
  const selectedOption = currentAnswer?.selectedOption ?? null;
  const isCorrect = currentAnswer?.isCorrect ?? false;

  // Calculate live score
  const score = Object.values(answers).filter((a) => a.isCorrect).length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round(((currentQuestionIdx + 1) / totalQuestions) * 100);

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    if (isAnswered) return; // Prevent changing choice for this question

    const correct = option === currentExercise.correctAnswer;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIdx]: {
        questionIdx: currentQuestionIdx,
        selectedOption: option,
        isCorrect: correct,
      },
    }));
  };

  // Next Question
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIdx < totalQuestions - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 60, behavior: "smooth" });
      }
    } else {
      setQuizFinished(true);
    }
  }, [currentQuestionIdx, totalQuestions]);

  // Previous Question
  const handlePrevQuestion = useCallback(() => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx((prev) => prev - 1);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 60, behavior: "smooth" });
      }
    }
  }, [currentQuestionIdx]);

  // Handle custom bottom navigation events
  useEffect(() => {
    const handleNext = () => {
      handleNextQuestion();
    };
    const handlePrev = () => {
      handlePrevQuestion();
    };
    const handleJump = (e: Event) => {
      const custom = e as CustomEvent<{ index: number }>;
      if (typeof custom.detail?.index === "number" && custom.detail.index >= 0 && custom.detail.index < totalQuestions) {
        setCurrentQuestionIdx(custom.detail.index);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 60, behavior: "smooth" });
        }
      }
    };
    const handleRestart = () => {
      setCurrentQuestionIdx(0);
      setAnswers({});
      setQuizFinished(false);
    };

    window.addEventListener("nextsem_quiz_next", handleNext);
    window.addEventListener("nextsem_quiz_prev", handlePrev);
    window.addEventListener("nextsem_quiz_jump", handleJump);
    window.addEventListener("nextsem_quiz_restart", handleRestart);

    return () => {
      window.removeEventListener("nextsem_quiz_next", handleNext);
      window.removeEventListener("nextsem_quiz_prev", handlePrev);
      window.removeEventListener("nextsem_quiz_jump", handleJump);
      window.removeEventListener("nextsem_quiz_restart", handleRestart);
    };
  }, [handleNextQuestion, handlePrevQuestion, totalQuestions]);

  // Sync quiz progress state to bottom navigation and analytics
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("nextsem_quiz_state", {
          detail: {
            questionIdx: currentQuestionIdx,
            totalQuestions,
            canPrev: currentQuestionIdx > 0,
            canNext: currentQuestionIdx < totalQuestions,
            score,
            answeredCount,
            courseTitle: "HTML Quiz",
            isFinished: quizFinished,
          },
        })
      );
    }
  }, [currentQuestionIdx, totalQuestions, quizFinished, score, answeredCount]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (quizFinished) return;

      if (e.key === "ArrowRight" || e.key === "Enter") {
        if (isAnswered) {
          handleNextQuestion();
        }
      } else if (e.key === "ArrowLeft") {
        handlePrevQuestion();
      } else if (["1", "2", "3", "4"].includes(e.key) && !isAnswered) {
        const optionIdx = parseInt(e.key, 10) - 1;
        if (currentExercise?.options && currentExercise.options[optionIdx]) {
          handleOptionSelect(currentExercise.options[optionIdx]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnswered, currentExercise, handleNextQuestion, handlePrevQuestion, quizFinished]);

  // Restart Quiz
  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setAnswers({});
    setQuizFinished(false);
  };

  return (
    <div className="w-full text-white font-sans selection:bg-[#04AA6D]/30 py-2 sm:py-4 space-y-5">

      {/* ── Top Header Breadcrumb & Actions Bar ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-[#04AA6D] transition-colors flex items-center gap-1">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <span className="text-slate-600">/</span>
          <Link href="/html" className="text-slate-300 hover:text-[#04AA6D] transition-colors font-bold flex items-center gap-1">
            <LayoutDashboard size={13} className="text-[#04AA6D]" />
            <span>HTML Dashboard</span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-[#04AA6D] font-bold">Interactive Quiz</span>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Direct HTML Dashboard Button */}
          <Link
            href="/html"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0c1328] hover:bg-[#141b34] text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-all border border-slate-700 hover:border-[#04AA6D] shadow-sm cursor-pointer group"
          >
            <LayoutDashboard size={14} className="text-[#04AA6D] group-hover:scale-110 transition-transform" />
            <span>HTML Dashboard</span>
          </Link>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {(["english", "hinglish", "hindi"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className={`px-2.5 py-1 text-[11px] font-extrabold uppercase rounded-lg transition-all cursor-pointer ${
                  selectedLang === lang
                    ? "bg-[#04AA6D] text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {lang === "english" ? "🇬🇧 EN" : lang === "hinglish" ? "🗣️ Hinglish" : "🕉️ हिंदी"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Quiz Header Banner ── */}
      <div className="p-5 sm:p-6 bg-[#0c1328] border border-slate-800 rounded-2xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#04AA6D] px-2.5 py-0.5 rounded-full bg-[#04AA6D]/10 border border-[#04AA6D]/30">
              COMPREHENSIVE ASSESSMENT
            </span>
            <span className="text-xs font-bold text-slate-400">
              {totalQuestions} Interactive Questions
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            HTML5 Interactive Certification Test
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Test your skills across all {totalQuestions} HTML5 lessons, VS Code setups, semantic tags, and Windows 11 workflows.
          </p>
        </div>

        {/* Live Score Display */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="px-5 py-3 bg-[#141b34] border border-slate-700/80 rounded-2xl text-center shadow-inner">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">SCORE</span>
            <span className="text-2xl font-black text-[#04AA6D]">
              {score} <span className="text-xs text-slate-400 font-bold">/ {answeredCount || 0}</span>
            </span>
          </div>
        </div>
      </div>

      {!quizFinished ? (
        <>
          {/* ── TOP DESKTOP & MOBILE ACTION TOOLBAR (PREV / NEXT / DASHBOARD) ── */}
          <div className="p-3 sm:p-3.5 bg-[#0c1328] border border-slate-700/80 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-lg">
            
            {/* Left Controls: Prev & Question Counter */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handlePrevQuestion}
                disabled={currentQuestionIdx === 0}
                className={`px-3.5 sm:px-4 py-2 rounded-xl border text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
                  currentQuestionIdx === 0
                    ? "bg-slate-900/40 border-slate-850 text-slate-600 cursor-not-allowed"
                    : "bg-[#141828] hover:bg-[#1c243c] border-slate-700 text-white hover:border-slate-500 shadow-sm active:scale-95"
                }`}
                title="Previous Question [Shortcut: Left Arrow]"
              >
                <ChevronLeft size={18} />
                <span>« Prev</span>
              </button>

              <div className="px-3.5 py-1.5 bg-[#141b34] rounded-xl border border-slate-700/80 text-xs sm:text-sm font-mono font-bold text-white flex items-center gap-1.5 shadow-inner">
                <span>Question</span>
                <span className="text-[#04AA6D] font-extrabold">{currentQuestionIdx + 1}</span>
                <span className="text-slate-500">/</span>
                <span className="text-slate-300">{totalQuestions}</span>
              </div>

              <button
                type="button"
                onClick={() => setShowJumpGrid(!showJumpGrid)}
                className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-[11px] font-bold text-slate-300 hover:text-white transition-all cursor-pointer hidden md:flex items-center gap-1"
                title="Toggle Question Grid"
              >
                <Layers size={13} className="text-[#04AA6D]" />
                <span>Jump</span>
              </button>
            </div>

            {/* Right Controls: Dashboard CTA & Next Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Direct HTML Dashboard Button */}
              <Link
                href="/html"
                className="px-3 sm:px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl text-xs sm:text-sm font-bold border border-slate-700 hover:border-[#04AA6D] transition-all flex items-center gap-1.5 shadow-sm"
              >
                <LayoutDashboard size={15} className="text-[#04AA6D]" />
                <span className="hidden sm:inline">HTML Dashboard</span>
                <span className="sm:hidden">Dashboard</span>
              </Link>

              {/* Next Question / Finish Button */}
              <button
                type="button"
                onClick={handleNextQuestion}
                className={`px-4 sm:px-6 py-2 rounded-xl font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md cursor-pointer active:scale-95 ${
                  currentQuestionIdx === totalQuestions - 1
                    ? "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30"
                    : isAnswered
                    ? "bg-[#04AA6D] hover:bg-[#039861] text-white shadow-[#04AA6D]/30 border border-emerald-400/40 transform hover:-translate-y-0.5"
                    : "bg-[#04AA6D] hover:bg-[#039861] text-white shadow-[#04AA6D]/20 border border-emerald-500/30"
                }`}
                title="Next Question [Shortcut: Enter or Right Arrow]"
              >
                <span>
                  {currentQuestionIdx === totalQuestions - 1
                    ? "Finish 🏆"
                    : isAnswered
                    ? "Next Question »"
                    : "Next »"}
                </span>
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

          {/* ── Progress Bar ── */}
          <div className="space-y-1 px-1">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Progress: Question {currentQuestionIdx + 1} of {totalQuestions}</span>
              <span className="text-[#04AA6D] font-mono">{progressPercent}% Completed</span>
            </div>
            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-[#04AA6D] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* ── Quick Jump 98-Question Grid (Collapsible/Expandable) ── */}
          {(showJumpGrid || false) && (
            <div className="p-4 bg-[#0c1328] border border-slate-800 rounded-2xl space-y-2 animate-in fade-in-50 duration-200">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Select any question to jump directly:</span>
                <button
                  type="button"
                  onClick={() => setShowJumpGrid(false)}
                  className="text-slate-400 hover:text-white text-xs underline cursor-pointer"
                >
                  Close
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1 custom-scrollbar">
                {htmlLessons.map((_, idx) => {
                  const ans = answers[idx];
                  const isCurrent = idx === currentQuestionIdx;
                  let pillStyle = "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700";

                  if (isCurrent) {
                    pillStyle = "bg-[#04AA6D] border-[#04AA6D] text-white font-extrabold shadow-md shadow-[#04AA6D]/30 scale-105";
                  } else if (ans) {
                    pillStyle = ans.isCorrect
                      ? "bg-emerald-950/80 border-emerald-600/80 text-emerald-300 font-bold"
                      : "bg-rose-950/80 border-rose-600/80 text-rose-300 font-bold";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentQuestionIdx(idx);
                        setShowJumpGrid(false);
                      }}
                      className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center border transition-all cursor-pointer ${pillStyle}`}
                      title={`Jump to Question ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Question Main Card ── */}
          <div className="bg-[#0c1328] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl text-left">
            
            {/* Question Header Bar */}
            <div className="bg-[#141b34] px-5 sm:px-6 py-3.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HelpCircle size={18} className="text-[#04AA6D]" />
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  LESSON {currentLesson.id}: {currentLesson.title}
                </span>
              </div>
              <Link
                href={`/html/${currentLesson.slug}`}
                className="text-[11px] font-mono font-bold text-[#04AA6D] hover:underline px-2.5 py-0.5 rounded-lg bg-[#04AA6D]/15 border border-[#04AA6D]/30 flex items-center gap-1"
                title="Open Lesson Explanation in New View"
              >
                <span>Read Lesson »</span>
              </Link>
            </div>

            <div className="p-5 sm:p-8 space-y-6">
              
              {/* Question Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-relaxed">
                {currentExercise?.question || "Loading question..."}
              </h2>

              {/* Option Buttons List */}
              <div className="space-y-3">
                {currentExercise?.options?.map((option: string, idx: number) => {
                  const isOptionSelected = selectedOption === option;
                  let btnStyle = "bg-[#141828] border-slate-800 hover:border-[#04AA6D] hover:bg-[#1a2035] text-slate-200";
                  
                  if (isAnswered) {
                    if (option === currentExercise.correctAnswer) {
                      btnStyle = "bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold shadow-lg shadow-emerald-500/15";
                    } else if (isOptionSelected) {
                      btnStyle = "bg-rose-950/90 border-rose-500 text-rose-200 font-bold shadow-lg shadow-rose-500/15";
                    } else {
                      btnStyle = "bg-[#111422] border-slate-850 text-slate-500 opacity-60";
                    }
                  }

                  const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(option)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border font-sans text-sm sm:text-base transition-all cursor-pointer flex items-center justify-between gap-3 group ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0 border ${
                          isAnswered && option === currentExercise.correctAnswer
                            ? "bg-emerald-500 text-black border-emerald-400 font-black"
                            : isAnswered && isOptionSelected
                            ? "bg-rose-500 text-white border-rose-400 font-black"
                            : "bg-slate-900 border-slate-700 text-slate-300 group-hover:border-[#04AA6D]"
                        }`}>
                          {optionLetter}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </div>

                      {isAnswered && (
                        option === currentExercise.correctAnswer ? (
                          <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                        ) : isOptionSelected ? (
                          <AlertCircle size={20} className="text-rose-400 shrink-0" />
                        ) : null
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback / Hint Box */}
              {isAnswered && (
                <div className={`p-4 rounded-xl border flex items-start gap-3 animate-in fade-in-50 duration-200 ${
                  isCorrect
                    ? "bg-emerald-950/40 border-emerald-700/60 text-emerald-200"
                    : "bg-[#141b34] border-slate-700 text-slate-300"
                }`}>
                  {isCorrect ? (
                    <CheckCircle2 size={22} className="text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={22} className="text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 text-xs sm:text-sm leading-relaxed space-y-1">
                    <p className="font-extrabold text-sm sm:text-base text-white">
                      {isCorrect ? "🎉 Correct Answer!" : "⚠️ Not quite right!"}
                    </p>
                    <p className="text-slate-300">
                      {currentExercise.hint}
                    </p>
                  </div>
                </div>
              )}

              {/* ── BOTTOM ACTION BUTTONS: PREVIOUS / DASHBOARD / NEXT ── */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-slate-800">
                
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIdx === 0}
                  className={`px-4 sm:px-6 py-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    currentQuestionIdx === 0
                      ? "bg-slate-900/50 border-slate-850 text-slate-600 cursor-not-allowed"
                      : "bg-[#141828] hover:bg-[#1c243c] border-slate-700 text-white hover:border-slate-500 cursor-pointer shadow-md active:scale-95"
                  }`}
                  title="Previous Question"
                >
                  <ChevronLeft size={18} />
                  <span>« Previous Question</span>
                </button>

                {/* HTML Dashboard Option in Middle */}
                <Link
                  href="/html"
                  className="px-4 sm:px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-[#04AA6D] text-slate-200 hover:text-white rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <LayoutDashboard size={16} className="text-[#04AA6D]" />
                  <span>HTML Course Dashboard</span>
                </Link>

                {/* Next Question / Finish Button */}
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className={`px-6 sm:px-8 py-3 rounded-xl font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-xl cursor-pointer active:scale-95 ${
                    currentQuestionIdx === totalQuestions - 1
                      ? "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30"
                      : isAnswered
                      ? "bg-[#04AA6D] hover:bg-[#039861] text-white shadow-[#04AA6D]/40 border border-emerald-400/40 transform hover:-translate-y-0.5"
                      : "bg-[#04AA6D] hover:bg-[#039861] text-white shadow-[#04AA6D]/20 border border-emerald-500/30"
                  }`}
                  title="Next Question"
                >
                  <span>
                    {currentQuestionIdx === totalQuestions - 1
                      ? "Finish Quiz 🏆"
                      : isAnswered
                      ? "Next Question »"
                      : "Next Question »"}
                  </span>
                  <ChevronRight size={18} />
                </button>

              </div>

              {/* Keyboard Shortcuts Hint Bar */}
              <div className="text-center pt-2 text-[11px] text-slate-400 font-mono hidden sm:block border-t border-slate-800/40">
                Desktop Shortcuts: <span className="text-white font-bold">[1, 2, 3, 4]</span> select option • <span className="text-[#04AA6D] font-bold">[Enter] / [→]</span> Next Question • <span className="text-slate-300 font-bold">[←]</span> Previous Question
              </div>

            </div>
          </div>
        </>
      ) : (
        /* ── Comprehensive Quiz Results Card ── */
        <div className="p-8 sm:p-12 bg-[#0c1328] border border-slate-800 rounded-3xl shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-24 h-24 rounded-full bg-[#04AA6D]/20 border-2 border-[#04AA6D]/40 text-[#04AA6D] flex items-center justify-center mx-auto text-5xl shadow-xl shadow-[#04AA6D]/20">
            🏆
          </div>

          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#04AA6D] block">
              ASSESSMENT COMPLETED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              HTML5 Certification Quiz Complete!
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
              Congratulations on completing all {totalQuestions} interactive HTML5 questions.
            </p>
          </div>

          {/* Score Showcase Card */}
          <div className="p-6 sm:p-8 bg-[#141b34] rounded-2xl border border-slate-700/80 max-w-md mx-auto space-y-2 shadow-inner">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
              FINAL RESULT
            </span>
            <div className="text-5xl font-black text-[#04AA6D] tracking-tight">
              {score} <span className="text-2xl text-slate-500 font-bold">/ {totalQuestions}</span>
            </div>
            <div className="text-base font-bold text-slate-200 mt-2">
              {Math.round((score / totalQuestions) * 100)}% Overall Accuracy
            </div>
            <p className="text-xs text-slate-400 pt-1">
              {score === totalQuestions
                ? "🌟 Perfect Score! You are an HTML5 Master Developer!"
                : score >= totalQuestions * 0.8
                ? "🎉 Outstanding job! You have a solid grasp of HTML5 concepts."
                : "💡 Great effort! Review the HTML lessons and re-attempt to improve your score."}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={handleRestartQuiz}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-slate-700 shadow-md"
            >
              <RotateCcw size={16} />
              <span>Restart Quiz</span>
            </button>
            
            <Link
              href="/html"
              className="px-7 py-3.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl shadow-[#04AA6D]/25 transition-all flex items-center gap-2 cursor-pointer border border-emerald-400/40"
            >
              <LayoutDashboard size={16} />
              <span>Return to HTML Dashboard »</span>
            </Link>

            <Link
              href="/playground"
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-slate-700 shadow-md"
            >
              <Code2 size={16} className="text-[#04AA6D]" />
              <span>Open Code Playground</span>
            </Link>
          </div>

        </div>
      )}

    </div>
  );
}
