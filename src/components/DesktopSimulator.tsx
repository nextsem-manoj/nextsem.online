"use client";

/**
 * DesktopSimulator.tsx
 * Day 2 — 10-Day Gamified Roadmap
 *
 * A guided interactive overlay that teaches Windows mouse/keyboard skills.
 * Reads steps from desktopSimulatorSteps.ts, highlights target elements,
 * tracks user actions, manages XP/hearts, and persists progress to localStorage.
 *
 * Usage:
 *   <DesktopSimulator userEmail="student@email.com" onComplete={() => router.push('/book/cli-ch1-basics')} />
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  desktopSimulatorSteps,
  getNextStep,
  isSimulatorComplete,
  getTotalXP,
  type DesktopSimulatorStep,
  type ActionType,
} from "../data/desktopSimulatorSteps";
import { Heart, Star, Trophy, ChevronRight, Lightbulb, X, CheckCircle2, AlertCircle } from "lucide-react";

// ─── Constants ─────────────────────────────────────────────────────────────

const MAX_HEARTS = 5;
const HINT_DELAY_MS = 10000; // Show hint after 10s inactivity

// localStorage keys — scoped by user email
const progressKey = (email: string) => `nextsem_desktop_sim_progress_${email}`;
const heartsKey = (email: string) => `nextsem_desktop_sim_hearts_${email}`;
const certKey = (email: string) => `nextsem_desktop_sim_certified_${email}`;

// ─── Types ─────────────────────────────────────────────────────────────────

interface SimulatorProps {
  userEmail: string;
  onComplete?: () => void;
  onClose?: () => void;
}

interface FeedbackState {
  type: "success" | "error" | "info" | null;
  message: string;
}

interface MCQAnswer {
  selected: string | null;
  submitted: boolean;
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function DesktopSimulator({ userEmail, onComplete, onClose }: SimulatorProps) {
  // ── State ─────────────────────────────────────────────────────────
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [totalXP, setTotalXP] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState>({ type: null, message: "" });
  const [showHint, setShowHint] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [mcqAnswer, setMCQAnswer] = useState<MCQAnswer>({ selected: null, submitted: false });
  const [isComplete, setIsComplete] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  const hintTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentStep: DesktopSimulatorStep = desktopSimulatorSteps[currentStepIdx];
  const totalSteps = desktopSimulatorSteps.length;

  // ── Load saved progress ────────────────────────────────────────────
  useEffect(() => {
    if (!userEmail) return;
    const saved = localStorage.getItem(progressKey(userEmail));
    const savedHearts = localStorage.getItem(heartsKey(userEmail));
    const certified = localStorage.getItem(certKey(userEmail));

    if (certified === "true") {
      setIsComplete(true);
      return;
    }

    if (saved) {
      const ids: string[] = JSON.parse(saved);
      setCompletedIds(ids);
      // Resume from next uncompleted step
      const nextIdx = desktopSimulatorSteps.findIndex((s) => !ids.includes(s.id));
      if (nextIdx >= 0) setCurrentStepIdx(nextIdx);
    }

    if (savedHearts) {
      setHearts(Math.max(0, parseInt(savedHearts, 10)));
    }
  }, [userEmail]);

  // ── Hint timer — reset on step change ─────────────────────────────
  useEffect(() => {
    setShowHint(false);
    setHintVisible(false);
    if (hintTimer.current) clearTimeout(hintTimer.current);
    hintTimer.current = setTimeout(() => setShowHint(true), HINT_DELAY_MS);
    return () => {
      if (hintTimer.current) clearTimeout(hintTimer.current);
    };
  }, [currentStepIdx]);

  // ── Save progress ──────────────────────────────────────────────────
  const saveProgress = useCallback(
    (ids: string[], h: number) => {
      if (!userEmail) return;
      localStorage.setItem(progressKey(userEmail), JSON.stringify(ids));
      localStorage.setItem(heartsKey(userEmail), String(h));
    },
    [userEmail]
  );

  // ── Show feedback flash ────────────────────────────────────────────
  const flashFeedback = useCallback((type: FeedbackState["type"], message: string) => {
    setFeedback({ type, message });
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    feedbackTimer.current = setTimeout(() => setFeedback({ type: null, message: "" }), 3000);
  }, []);

  // ── Complete a step ────────────────────────────────────────────────
  const completeStep = useCallback(
    (step: DesktopSimulatorStep) => {
      const newCompleted = [...completedIds, step.id];
      const newXP = totalXP + step.xpReward;
      setCompletedIds(newCompleted);
      setTotalXP(newXP);
      setXpGained(step.xpReward);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 1800);
      flashFeedback("success", step.successMsg);
      saveProgress(newCompleted, hearts);

      // Check if all done
      if (isSimulatorComplete(newCompleted)) {
        setTimeout(() => {
          setIsComplete(true);
          if (userEmail) localStorage.setItem(certKey(userEmail), "true");
          onComplete?.();
        }, 2000);
        return;
      }

      // Advance to next step after short delay
      setTimeout(() => {
        const nextIdx = currentStepIdx + 1;
        if (nextIdx < totalSteps) {
          setCurrentStepIdx(nextIdx);
          setMCQAnswer({ selected: null, submitted: false });
        }
      }, 1800);
    },
    [completedIds, currentStepIdx, flashFeedback, hearts, onComplete, saveProgress, totalSteps, totalXP, userEmail]
  );

  // ── Deduct a heart ─────────────────────────────────────────────────
  const deductHeart = useCallback(
    (penalty: number) => {
      if (penalty <= 0) return;
      const newHearts = Math.max(0, hearts - penalty);
      setHearts(newHearts);
      saveProgress(completedIds, newHearts);
      flashFeedback("error", "Oops! That's not quite right. Try again! 💔");
    },
    [completedIds, flashFeedback, hearts, saveProgress]
  );

  // ── Handle action button click (non-MCQ steps) ─────────────────────
  const handleActionClick = () => {
    completeStep(currentStep);
  };

  // ── Handle MCQ selection ───────────────────────────────────────────
  const handleMCQSelect = (label: string) => {
    if (mcqAnswer.submitted) return;
    setMCQAnswer({ selected: label, submitted: false });
  };

  const handleMCQSubmit = () => {
    if (!mcqAnswer.selected || mcqAnswer.submitted) return;
    setMCQAnswer((prev) => ({ ...prev, submitted: true }));
    if (mcqAnswer.selected === currentStep.correctOption) {
      completeStep(currentStep);
    } else {
      deductHeart(currentStep.heartPenalty);
      setTimeout(() => setMCQAnswer({ selected: null, submitted: false }), 1200);
    }
  };

  // ── Difficulty badge colour ────────────────────────────────────────
  const difficultyColor = {
    beginner: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    easy: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    medium: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  }[currentStep.difficulty];

  // ── Category label ────────────────────────────────────────────────
  const categoryEmoji: Record<string, string> = {
    desktop: "🖥️",
    "start-menu": "🪟",
    taskbar: "📌",
    "file-explorer": "📁",
    terminal: "💻",
    "recycle-bin": "🗑️",
    shortcuts: "⌨️",
  };

  // ── Action instruction label ───────────────────────────────────────
  const actionLabel: Record<ActionType, string> = {
    click: "👆 Click",
    "double-click": "👆👆 Double-Click",
    "right-click": "🖱️ Right-Click",
    drag: "✋ Drag",
    keyboard: "⌨️ Type / Press",
    hover: "🎯 Hover",
    mcq: "🧠 Answer the Question",
  };

  const progressPercent = Math.round((completedIds.length / totalSteps) * 100);

  // ────────────────────────────────────────────────────────────────────
  // ── Render: Completion Screen ──────────────────────────────────────
  // ────────────────────────────────────────────────────────────────────
  if (isComplete) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
        <div className="bg-[#0f172a] border border-amber-400/30 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl shadow-amber-500/10 animate-scale-in">
          {/* Trophy */}
          <div className="w-20 h-20 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
            <Trophy size={40} className="text-amber-400" />
          </div>

          <h2 className="text-2xl font-black text-white mb-2">
            🏆 Desktop Certified!
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            You&apos;ve mastered Windows Desktop navigation. You&apos;re ready for the terminal!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
              <div className="text-amber-400 text-lg font-black">{getTotalXP()}</div>
              <div className="text-slate-500 text-xs mt-0.5">Total XP</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
              <div className="text-red-400 text-lg font-black">
                {"❤️".repeat(Math.max(0, hearts))}
              </div>
              <div className="text-slate-500 text-xs mt-0.5">Hearts Left</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-3 border border-white/10">
              <div className="text-emerald-400 text-lg font-black">{totalSteps}</div>
              <div className="text-slate-500 text-xs mt-0.5">Steps Done</div>
            </div>
          </div>

          {/* Badge */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-400/20 rounded-2xl p-4 mb-6">
            <div className="text-3xl mb-1">🏅</div>
            <div className="text-amber-400 font-black text-sm">Terminal Cadet</div>
            <div className="text-slate-500 text-xs">Awarded for completing the Desktop Simulator</div>
          </div>

          <button
            onClick={() => onComplete?.()}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-black rounded-2xl py-3 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            Start Learning CMD <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // ────────────────────────────────────────────────────────────────────
  // ── Render: Minimized pill ─────────────────────────────────────────
  // ────────────────────────────────────────────────────────────────────
  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-20 right-4 z-[9999] bg-[#0f172a] border border-purple-500/40 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl shadow-purple-500/10 hover:border-purple-400/60 transition-all"
      >
        <span className="text-purple-400 text-sm font-black">🎮 Step {currentStepIdx + 1}/{totalSteps}</span>
        <div className="flex items-center gap-1">
          {Array.from({ length: MAX_HEARTS }).map((_, i) => (
            <Heart
              key={i}
              size={12}
              className={i < hearts ? "text-red-400 fill-red-400" : "text-slate-700"}
            />
          ))}
        </div>
      </button>
    );
  }

  // ────────────────────────────────────────────────────────────────────
  // ── Render: Main Simulator Panel ──────────────────────────────────
  // ────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── XP Celebration Flash ── */}
      {showCelebration && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10001] pointer-events-none">
          <div className="bg-amber-400 text-black font-black text-2xl rounded-3xl px-8 py-4 shadow-2xl shadow-amber-500/50 animate-bounce-in">
            +{xpGained} XP ⭐
          </div>
        </div>
      )}

      {/* ── Feedback Toast ── */}
      {feedback.type && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-[10001] px-5 py-3 rounded-2xl font-bold text-sm shadow-xl max-w-sm w-full text-center transition-all
            ${feedback.type === "success" ? "bg-emerald-500 text-white" : ""}
            ${feedback.type === "error" ? "bg-red-500 text-white" : ""}
            ${feedback.type === "info" ? "bg-blue-500 text-white" : ""}
          `}
        >
          <div className="flex items-center justify-center gap-2">
            {feedback.type === "success" && <CheckCircle2 size={16} />}
            {feedback.type === "error" && <AlertCircle size={16} />}
            <span className="line-clamp-2">{feedback.message}</span>
          </div>
        </div>
      )}

      {/* ── Main Panel ── */}
      <div className="fixed bottom-20 right-4 z-[9999] w-full max-w-[360px] bg-[#0d1117] border border-white/10 rounded-3xl shadow-2xl shadow-purple-500/10 overflow-hidden">

        {/* ── Panel Header ── */}
        <div className="bg-gradient-to-r from-purple-900/60 to-blue-900/40 px-4 pt-4 pb-3 border-b border-white/5">
          <div className="flex items-center justify-between mb-2">
            {/* Category + step count */}
            <div className="flex items-center gap-2">
              <span className="text-lg">{categoryEmoji[currentStep.category] ?? "🖥️"}</span>
              <div>
                <div className="text-white font-black text-xs">{currentStep.title}</div>
                <div className="text-slate-500 text-[10px]">
                  Step {currentStepIdx + 1} of {totalSteps}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsMinimized(true)}
                className="w-6 h-6 rounded-full bg-amber-500/20 hover:bg-amber-500/40 text-amber-400 flex items-center justify-center text-xs transition-all"
                title="Minimize"
              >
                ─
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="w-6 h-6 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-400 flex items-center justify-center transition-all"
                  title="Close simulator"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-white/5 rounded-full h-1.5 mb-2">
            <div
              className="h-1.5 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Hearts + XP row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {Array.from({ length: MAX_HEARTS }).map((_, i) => (
                <Heart
                  key={i}
                  size={14}
                  className={`transition-all ${
                    i < hearts ? "text-red-400 fill-red-400" : "text-slate-700"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-amber-400 font-black text-xs">
              <Star size={12} className="fill-amber-400" />
              <span>{totalXP} XP</span>
            </div>
          </div>
        </div>

        {/* ── Panel Body ── */}
        <div className="p-4 space-y-3 max-h-[420px] overflow-y-auto">

          {/* Action type badge + difficulty */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
              {actionLabel[currentStep.action]}
            </span>
            <span className={`text-[10px] font-bold border px-2 py-0.5 rounded-full ${difficultyColor}`}>
              {currentStep.difficulty.charAt(0).toUpperCase() + currentStep.difficulty.slice(1)}
            </span>
            {currentStep.shortcut && (
              <span className="text-[10px] font-mono text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
                {currentStep.shortcut}
              </span>
            )}
          </div>

          {/* Instruction */}
          <div className="bg-white/3 border border-white/5 rounded-2xl p-3">
            <p className="text-slate-200 text-xs leading-relaxed whitespace-pre-line">
              {currentStep.instruction}
            </p>
          </div>

          {/* MCQ Options */}
          {currentStep.action === "mcq" && currentStep.mcqOptions && (
            <div className="space-y-2">
              {currentStep.mcqOptions.map((opt) => {
                const isSelected = mcqAnswer.selected === opt.label;
                const isCorrect = mcqAnswer.submitted && opt.label === currentStep.correctOption;
                const isWrong = mcqAnswer.submitted && isSelected && opt.label !== currentStep.correctOption;
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleMCQSelect(opt.label)}
                    disabled={mcqAnswer.submitted}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold border transition-all
                      ${isCorrect ? "bg-emerald-500/20 border-emerald-500/60 text-emerald-300" : ""}
                      ${isWrong ? "bg-red-500/20 border-red-500/60 text-red-300" : ""}
                      ${isSelected && !mcqAnswer.submitted ? "bg-purple-500/20 border-purple-500/50 text-purple-200" : ""}
                      ${!isSelected && !mcqAnswer.submitted ? "bg-white/3 border-white/10 text-slate-300 hover:bg-white/8 hover:border-white/20" : ""}
                    `}
                  >
                    <span className="text-slate-500 mr-2">[{opt.label}]</span>
                    {opt.text}
                  </button>
                );
              })}
              {mcqAnswer.selected && !mcqAnswer.submitted && (
                <button
                  onClick={handleMCQSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-black rounded-xl py-2.5 text-xs transition-all active:scale-95"
                >
                  Submit Answer ✓
                </button>
              )}
            </div>
          )}

          {/* Hint section */}
          {(showHint || hintVisible) && (
            <div className="bg-amber-500/8 border border-amber-500/25 rounded-2xl p-3">
              <div className="flex items-start gap-2">
                <Lightbulb size={14} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="text-amber-200 text-xs leading-relaxed">{currentStep.hint}</p>
              </div>
            </div>
          )}
        </div>

        {/* ── Panel Footer ── */}
        <div className="px-4 pb-4 pt-2 border-t border-white/5 space-y-2">

          {/* Hint toggle + skip */}
          <div className="flex gap-2">
            <button
              onClick={() => setHintVisible((v) => !v)}
              className="flex-1 text-[11px] font-bold text-amber-400 bg-amber-500/8 hover:bg-amber-500/15 border border-amber-500/20 rounded-xl py-2 flex items-center justify-center gap-1.5 transition-all"
            >
              <Lightbulb size={12} />
              {hintVisible ? "Hide Hint" : "Show Hint"}
            </button>

            {currentStep.action !== "mcq" && (
              <button
                onClick={handleActionClick}
                className="flex-1 text-[11px] font-black text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl py-2 flex items-center justify-center gap-1.5 transition-all active:scale-95"
              >
                {currentStep.id === "world-1-complete" ? "🏆 Claim Reward" : "✓ Mark Done"}
                <ChevronRight size={12} />
              </button>
            )}
          </div>

          {/* XP reward preview */}
          <div className="text-center text-[10px] text-slate-600">
            Complete this step to earn{" "}
            <span className="text-amber-400 font-bold">+{currentStep.xpReward} XP</span>
          </div>
        </div>
      </div>
    </>
  );
}
