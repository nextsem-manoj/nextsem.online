"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, RotateCcw, Play, CheckCircle2, 
  X, ChevronRight, Zap
} from "lucide-react";

interface Instruction {
  id: string;
  type: "move" | "turn_right" | "turn_left";
  blocks?: number;
  label: string;
  icon: string;
}

interface LevelConfig {
  level: number;
  title: string;
  maxSteps: number;
  start: { x: number; y: number; dir: "N" | "E" | "S" | "W" };
  target: { x: number; y: number };
  explanation: {
    title: string;
    concept: string;
    takeaway: string;
  };
}

// ── MATHEMATICALLY PRECISE 3x3 STREET GRID ──
// Roads: Horizontal (y: 80, 200, 320) & Vertical (x: 80, 200, 320). Step size = 120px
const LEVELS: LevelConfig[] = [
  {
    level: 1,
    title: "Level 1",
    maxSteps: 3,
    start: { x: 80, y: 320, dir: "N" }, // Bottom-left facing North
    target: { x: 320, y: 80 },          // Top-right
    explanation: {
      title: "Step-by-Step Logic",
      concept: "Computers follow directions in exact order from top to bottom. Turning before moving changes your entire path.",
      takeaway: "In programming, the order of your steps determines the result!"
    }
  },
  {
    level: 2,
    title: "Level 2",
    maxSteps: 3,
    start: { x: 80, y: 320, dir: "E" }, // Bottom-left facing East
    target: { x: 200, y: 80 },          // Mid-top
    explanation: {
      title: "Direct Route Planning",
      concept: "Looking ahead and planning your turns creates cleaner, faster computer instructions.",
      takeaway: "Plan the full route first — simplicity in design leads to clean execution!"
    }
  }
];

const AVAILABLE_PILLS: Instruction[] = [
  { id: "p-move-2", type: "move", blocks: 2, label: "Move Forward (2 blocks)", icon: "➔" },
  { id: "p-move-1", type: "move", blocks: 1, label: "Move Forward (1 block)", icon: "➔" },
  { id: "p-turn-right", type: "turn_right", label: "Turn Right", icon: "⮎" },
  { id: "p-turn-left", type: "turn_left", label: "Turn Left", icon: "⮌" }
];

export default function VisualLogicSimulator() {
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const currentLevel = LEVELS[currentLevelIdx] || LEVELS[0];

  const [selectedSteps, setSelectedSteps] = useState<Instruction[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIdx, setActiveStepIdx] = useState<number | null>(null);

  const [playerCoord, setPlayerCoord] = useState(currentLevel.start);
  const [routePolyline, setRoutePolyline] = useState<{ x: number; y: number }[]>([
    { x: currentLevel.start.x, y: currentLevel.start.y }
  ]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [failureMsg, setFailureMsg] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);

  // Reset state on level change
  useEffect(() => {
    setPlayerCoord(currentLevel.start);
    setRoutePolyline([{ x: currentLevel.start.x, y: currentLevel.start.y }]);
    setSelectedSteps([]);
    setIsSuccess(false);
    setIsFailed(false);
    setShowExplanation(false);
    setIsRunning(false);
    setActiveStepIdx(null);
  }, [currentLevelIdx, currentLevel]);

  // Add pill in ascending order (checked with maxSteps limit)
  const handleAddPill = (pill: Instruction) => {
    if (isRunning || isSuccess) return;
    if (selectedSteps.length >= currentLevel.maxSteps) return;
    const newInstruction: Instruction = {
      ...pill,
      id: `${pill.id}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`
    };
    setSelectedSteps((prev) => [...prev, newInstruction]);
    setIsFailed(false);
  };

  // Remove instruction by index
  const handleRemoveStep = (indexToRemove: number) => {
    if (isRunning || isSuccess) return;
    setSelectedSteps((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    setIsFailed(false);
  };

  // Clear all steps
  const handleReset = () => {
    setIsRunning(false);
    setSelectedSteps([]);
    setPlayerCoord(currentLevel.start);
    setRoutePolyline([{ x: currentLevel.start.x, y: currentLevel.start.y }]);
    setIsSuccess(false);
    setIsFailed(false);
    setActiveStepIdx(null);
  };

  // Run the sequence
  const handleRunAlgorithm = async () => {
    if (selectedSteps.length === 0 || isRunning) return;

    setIsRunning(true);
    setIsFailed(false);
    setIsSuccess(false);

    let curX = currentLevel.start.x;
    let curY = currentLevel.start.y;
    let curDir = currentLevel.start.dir;

    const polyline = [{ x: curX, y: curY }];
    setPlayerCoord({ x: curX, y: curY, dir: curDir });
    setRoutePolyline(polyline);

    const DIRS = ["N", "E", "S", "W"] as const;
    const BLOCK_STEP = 120; // Exact distance between street intersections (80, 200, 320)

    for (let i = 0; i < selectedSteps.length; i++) {
      setActiveStepIdx(i);
      const step = selectedSteps[i];

      await new Promise((r) => setTimeout(r, 500));

      if (step.type === "turn_right") {
        const nextIdx = (DIRS.indexOf(curDir) + 1) % 4;
        curDir = DIRS[nextIdx];
        setPlayerCoord({ x: curX, y: curY, dir: curDir });
      } else if (step.type === "turn_left") {
        const nextIdx = (DIRS.indexOf(curDir) + 3) % 4;
        curDir = DIRS[nextIdx];
        setPlayerCoord({ x: curX, y: curY, dir: curDir });
      } else if (step.type === "move") {
        const blocks = step.blocks || 1;
        for (let b = 0; b < blocks; b++) {
          let nextX = curX;
          let nextY = curY;

          if (curDir === "N") nextY -= BLOCK_STEP;
          if (curDir === "E") nextX += BLOCK_STEP;
          if (curDir === "S") nextY += BLOCK_STEP;
          if (curDir === "W") nextX -= BLOCK_STEP;

          // Out of map bounds check
          if (nextX < 40 || nextX > 360 || nextY < 40 || nextY > 360) {
            setIsFailed(true);
            setFailureMsg("⚠️ Pointer moved outside the road map! Check your turns and distance.");
            setIsRunning(false);
            setActiveStepIdx(null);
            return;
          }

          curX = nextX;
          curY = nextY;
          polyline.push({ x: curX, y: curY });
          setPlayerCoord({ x: curX, y: curY, dir: curDir });
          setRoutePolyline([...polyline]);
          await new Promise((r) => setTimeout(r, 350));
        }
      }
    }

    setActiveStepIdx(null);

    // Check if reached destination exactly (within 15px radius)
    const distanceToTarget = Math.hypot(curX - currentLevel.target.x, curY - currentLevel.target.y);
    if (distanceToTarget <= 20) {
      setIsSuccess(true);
    } else {
      setIsFailed(true);
      setFailureMsg("📍 Reached the end of your steps, but missed the star! Check your route.");
    }
    setIsRunning(false);
  };

  const svgPoints = routePolyline.map((p) => `${p.x},${p.y}`).join(" ");
  const progressPercent = Math.round(((currentLevelIdx + (isSuccess ? 1 : 0.35)) / LEVELS.length) * 100);

  const rotDeg = 
    playerCoord.dir === "N" ? -90 :
    playerCoord.dir === "E" ? 0 :
    playerCoord.dir === "S" ? 90 : 180;

  return (
    <div className="min-h-screen bg-[#090d16] text-white flex flex-col font-sans selection:bg-emerald-950 selection:text-emerald-300">
      
      {/* ── CLEAN TOP HEADER ── */}
      <header className="sticky top-0 z-40 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 py-3 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/curriculum"
              className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
              title="Exit"
            >
              <X size={16} />
            </Link>
            <Link href="/" className="flex items-center gap-2 group" title="Nextsem Academy">
              <div className="h-8 px-2.5 rounded-xl bg-[#0c1328] border border-[#04AA6D] flex items-center justify-center shadow-[0_0_12px_rgba(4,170,109,0.4)] group-hover:scale-105 transition-transform select-none">
                <span className="font-black text-sm tracking-tight text-[#04AA6D]">N</span>
                <span className="font-black text-sm tracking-tight text-white">S</span>
              </div>
            </Link>
          </div>

          {/* Continuous Green Progress Bar */}
          <div className="flex-1 max-w-md mx-auto flex items-center gap-3">
            <div className="flex-1 h-2.5 bg-slate-800 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-[#04AA6D] rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(4,170,109,0.8)]"
                style={{ width: `${Math.min(progressPercent, 100)}%` }}
              />
            </div>
            <span className="text-xs font-bold text-[#04AA6D] font-mono shrink-0">
              {progressPercent}%
            </span>
          </div>

          <div className="shrink-0 text-xs sm:text-sm font-extrabold text-white">
            {currentLevel.title}
          </div>

        </div>
      </header>

      {/* ── MAIN 2-COLUMN VIEWPORT ── */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* ── LEFT: CLEAN VECTOR STREET MAP ── */}
          <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-4 flex items-center justify-center shadow-xl">
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-auto max-h-[340px] rounded-2xl bg-[#060911] select-none"
            >
              {/* Clean Dark Roads (Horizontal: y = 80, 200, 320) */}
              <line x1="30" y1="80" x2="370" y2="80" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
              <line x1="30" y1="80" x2="370" y2="80" stroke="#0ea5e9" strokeWidth="1" opacity="0.35" strokeDasharray="6,6" />

              <line x1="30" y1="200" x2="370" y2="200" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
              <line x1="30" y1="200" x2="370" y2="200" stroke="#0ea5e9" strokeWidth="1" opacity="0.35" strokeDasharray="6,6" />

              <line x1="30" y1="320" x2="370" y2="320" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
              <line x1="30" y1="320" x2="370" y2="320" stroke="#0ea5e9" strokeWidth="1" opacity="0.35" strokeDasharray="6,6" />

              {/* Clean Dark Roads (Vertical: x = 80, 200, 320) */}
              <line x1="80" y1="30" x2="80" y2="370" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
              <line x1="80" y1="30" x2="80" y2="370" stroke="#0ea5e9" strokeWidth="1" opacity="0.35" strokeDasharray="6,6" />

              <line x1="200" y1="30" x2="200" y2="370" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
              <line x1="200" y1="30" x2="200" y2="370" stroke="#0ea5e9" strokeWidth="1" opacity="0.35" strokeDasharray="6,6" />

              <line x1="320" y1="30" x2="320" y2="370" stroke="#1e293b" strokeWidth="22" strokeLinecap="round" />
              <line x1="320" y1="30" x2="320" y2="370" stroke="#0ea5e9" strokeWidth="1" opacity="0.35" strokeDasharray="6,6" />

              {/* Glowing Dynamic Path Line */}
              {routePolyline.length > 1 && (
                <polyline
                  points={svgPoints}
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                />
              )}

              {/* Golden Destination Star Pin */}
              <g transform={`translate(${currentLevel.target.x - 14}, ${currentLevel.target.y - 30})`}>
                <circle cx="14" cy="14" r="14" fill="rgba(245,158,11,0.2)" className="animate-ping" />
                <path 
                  d="M14 0 C6.3 0 0 6.3 0 14 C0 24.5 14 34 14 34 C14 34 28 24.5 28 14 C28 6.3 21.7 0 14 0 Z" 
                  fill="#f59e0b" 
                  stroke="#fbbf24" 
                  strokeWidth="1.2" 
                />
                <text x="14" y="17" fill="#090d16" fontSize="12" textAnchor="middle" fontWeight="bold">★</text>
              </g>

              {/* Exact Cyan Navigation Arrow Pointer */}
              <g 
                transform={`translate(${playerCoord.x}, ${playerCoord.y}) rotate(${rotDeg}) translate(-14, -14)`}
                className="transition-transform duration-300"
              >
                <polygon 
                  points="3,3 25,14 3,25 9,14" 
                  fill="#22d3ee" 
                  stroke="#38bdf8" 
                  strokeWidth="1.5" 
                  strokeLinejoin="round" 
                  filter="drop-shadow(0 0 8px #22d3ee)"
                />
              </g>
            </svg>
          </div>

          {/* ── RIGHT: SIMPLE STEP BUILDER & PILLS ── */}
          <div className="space-y-5">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-extrabold text-white tracking-tight">
                    Steps to Destination:
                  </h3>
                  <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md border ${
                    selectedSteps.length >= currentLevel.maxSteps
                      ? "bg-amber-950/60 border-amber-500/60 text-amber-300"
                      : "bg-slate-800 border-slate-700 text-slate-300"
                  }`}>
                    {selectedSteps.length} / {currentLevel.maxSteps}
                  </span>
                </div>
                {selectedSteps.length > 0 && !isRunning && !isSuccess && (
                  <button
                    onClick={handleReset}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-rose-950/40 border border-slate-700 hover:border-rose-500/50 text-slate-300 hover:text-rose-300 font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-xs"
                    title="Clear all steps"
                  >
                    <RotateCcw size={12} />
                    <span>Clear All</span>
                  </button>
                )}
              </div>

              {/* Simple Grey Step Cards */}
              <div className="space-y-2.5 min-h-[140px]">
                {selectedSteps.length === 0 ? (
                  <div className="h-32 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-slate-500 text-xs font-semibold bg-slate-900/40 space-y-1">
                    <Zap size={18} className="text-slate-600" />
                    <span>Click buttons below to add steps (Max {currentLevel.maxSteps})</span>
                  </div>
                ) : (
                  selectedSteps.map((step, idx) => {
                    const isStepExecuting = activeStepIdx === idx;

                    return (
                      <div
                        key={step.id}
                        className={`rounded-2xl px-4 py-3 flex items-center justify-between transition-all duration-200 ${
                          isStepExecuting
                            ? "bg-cyan-950/80 border border-cyan-400 shadow-md"
                            : isSuccess
                            ? "bg-emerald-950/40 border border-emerald-500/40"
                            : "bg-[#182234] border border-slate-700/70"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-white font-extrabold text-sm sm:text-base">
                            {idx + 1}. {step.label}
                          </span>
                        </div>

                        <div>
                          {isSuccess ? (
                            <CheckCircle2 size={18} className="text-[#04AA6D]" />
                          ) : isStepExecuting ? (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                          ) : !isRunning ? (
                            <button
                              onClick={() => handleRemoveStep(idx)}
                              className="text-slate-500 hover:text-rose-400 p-1"
                              title="Remove"
                            >
                              <X size={14} />
                            </button>
                          ) : null}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Error Notification */}
              {isFailed && (
                <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-700/80 text-rose-200 text-xs font-bold flex items-center gap-2">
                  <X size={15} className="text-rose-400 shrink-0" />
                  <span>{failureMsg}</span>
                </div>
              )}
            </div>

            {/* Instruction Pills Bank (Grey Rectangular Box with Bold White Text) */}
            <div className="space-y-2 pt-1">
              <div className="flex flex-wrap gap-2.5">
                {AVAILABLE_PILLS.map((pill) => {
                  const isLimitReached = selectedSteps.length >= currentLevel.maxSteps;

                  return (
                    <button
                      key={pill.id}
                      onClick={() => handleAddPill(pill)}
                      disabled={isRunning || isSuccess || isLimitReached}
                      className="px-4 py-2.5 rounded-xl bg-[#242e42] hover:bg-[#2f3d56] active:scale-95 border border-slate-600/80 text-xs sm:text-sm font-extrabold text-white shadow-sm transition-all flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span className="text-cyan-400 font-black">{pill.icon}</span>
                      <span>{pill.label}</span>
                    </button>
                  );
                })}
              </div>
              {selectedSteps.length >= currentLevel.maxSteps && !isSuccess && (
                <p className="text-[11px] text-amber-300/90 font-medium">
                  Maximum {currentLevel.maxSteps} steps reached. Click Run or remove a step to modify.
                </p>
              )}
            </div>

          </div>

        </div>
      </main>

      {/* ── BOTTOM ACTION BAR ── */}
      <footer className="sticky bottom-0 z-40 bg-[#090d16]/95 backdrop-blur-md border-t border-slate-800 py-3.5 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          
          <div className="text-xs text-slate-400 font-medium hidden sm:block">
            {isSuccess ? "Great job! Path completed." : "Add steps and click Run to test."}
          </div>

          <div className="w-full sm:w-auto flex justify-end">
            {!isSuccess ? (
              <button
                onClick={handleRunAlgorithm}
                disabled={selectedSteps.length === 0 || isRunning}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-[#04AA6D] hover:bg-[#039861] disabled:bg-slate-800 disabled:text-slate-500 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                <Play size={15} className={isRunning ? "animate-spin" : "fill-white"} />
                <span>{isRunning ? "Running..." : "▶ Run Route"}</span>
              </button>
            ) : (
              <button
                onClick={() => setShowExplanation(true)}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm shadow-lg shadow-emerald-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue »</span>
                <ArrowRight size={15} />
              </button>
            )}
          </div>

        </div>
      </footer>

      {/* ── SIMPLE CLEAN EXPLANATION MODAL ── */}
      {showExplanation && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e1626] border border-slate-700 max-w-lg w-full rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl relative animate-in fade-in zoom-in duration-150">
            
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="h-8 px-2.5 rounded-xl bg-[#0c1328] border border-[#04AA6D] flex items-center justify-center shadow-[0_0_12px_rgba(4,170,109,0.4)] select-none">
                  <span className="font-black text-sm tracking-tight text-[#04AA6D]">N</span>
                  <span className="font-black text-sm tracking-tight text-white">S</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  {currentLevel.explanation.title}
                </h2>
              </div>
              <button
                onClick={() => setShowExplanation(false)}
                className="p-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {currentLevel.explanation.concept}
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-emerald-300 font-medium">
              💡 <strong className="text-white font-bold">Key Takeaway:</strong> {currentLevel.explanation.takeaway}
            </div>

            <div className="flex justify-end pt-1">
              <button
                onClick={() => {
                  setShowExplanation(false);
                  if (currentLevelIdx < LEVELS.length - 1) {
                    setCurrentLevelIdx((prev) => prev + 1);
                  } else {
                    setCurrentLevelIdx(0);
                  }
                }}
                className="px-6 py-2.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-1.5"
              >
                <span>{currentLevelIdx < LEVELS.length - 1 ? "Next Challenge »" : "Start Over"}</span>
                <ChevronRight size={15} />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
