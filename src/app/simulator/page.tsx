"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { auth, signInWithGoogle } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  desktopSimulatorSteps,
  isSimulatorComplete,
  getTotalXP,
  type DesktopSimulatorStep,
} from "../../data/desktopSimulatorSteps";
import { Heart, Star, Lightbulb, CheckCircle2, AlertCircle, X, ChevronRight, Trophy, Search } from "lucide-react";

// ─── Constants ──────────────────────────────────────────────────────────────
const MAX_HEARTS   = 5;
const progressKey  = (e: string) => `nextsem_desktop_sim_progress_${e}`;
const heartsKey    = (e: string) => `nextsem_desktop_sim_hearts_${e}`;
const certKey      = (e: string) => `nextsem_desktop_sim_certified_${e}`;

// ─── Types ───────────────────────────────────────────────────────────────────
interface FeedbackState { type: "success" | "error" | null; message: string; }
interface OpenWindow { id: string; title: string; emoji: string; content: React.ReactNode; x: number; y: number; }

// ─── Context Menu ─────────────────────────────────────────────────────────────
function CtxMenu({ x, y, items, onClose }: { x: number; y: number; items: string[]; onClose: () => void }) {
  return (
    <div
      className="fixed z-[999] bg-[#1e2d3d]/95 backdrop-blur border border-white/10 rounded-xl shadow-2xl py-1 min-w-[180px] text-xs"
      style={{ left: x, top: y }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {items.map((item, i) =>
        item === "---" ? (
          <div key={i} className="border-t border-white/10 my-1" />
        ) : (
          <button
            key={item}
            onClick={onClose}
            className="w-full text-left px-4 py-2 text-slate-300 hover:bg-blue-600/40 hover:text-white transition-colors"
          >
            {item}
          </button>
        )
      )}
    </div>
  );
}

// ─── Draggable Window ─────────────────────────────────────────────────────────
function DesktopWindow({ win, onClose }: { win: OpenWindow; onClose: (id: string) => void }) {
  const [pos, setPos] = useState({ x: win.x, y: win.y });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ mx: 0, my: 0, wx: 0, wy: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    dragStart.current = { mx: e.clientX, my: e.clientY, wx: pos.x, wy: pos.y };
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => setPos({
      x: dragStart.current.wx + e.clientX - dragStart.current.mx,
      y: Math.max(32, dragStart.current.wy + e.clientY - dragStart.current.my),
    });
    const up = () => setDragging(false);
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    return () => { document.removeEventListener("mousemove", move); document.removeEventListener("mouseup", up); };
  }, [dragging]);

  return (
    <div
      className="fixed z-[200] bg-[#0d1b2a]/95 backdrop-blur border border-white/15 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
      style={{ left: pos.x, top: pos.y, width: 480, minHeight: 300 }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 bg-[#0f2340]/80 border-b border-white/10 cursor-move select-none"
        onMouseDown={onMouseDown}
      >
        <div className="flex items-center gap-2">
          <span>{win.emoji}</span>
          <span className="text-white text-xs font-bold">{win.title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-amber-400/80 hover:bg-amber-300 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80 hover:bg-emerald-300 cursor-pointer" />
          <button onClick={() => onClose(win.id)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer" />
        </div>
      </div>
      {/* Content */}
      <div className="p-4 text-slate-300 text-xs">{win.content}</div>
    </div>
  );
}

// ─── Start Menu ───────────────────────────────────────────────────────────────
function StartMenu({ onClose, onSearch }: { onClose: () => void; onSearch: (q: string) => void }) {
  const [query, setQuery] = useState("");
  return (
    <div className="fixed bottom-12 left-2 z-[500] w-72 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-4 text-slate-300">
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-3 py-2 mb-4">
        <Search size={14} className="text-slate-500" />
        <input
          id="start-search-input"
          autoFocus
          className="bg-transparent outline-none text-xs w-full text-slate-200 placeholder:text-slate-600"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); onSearch(e.target.value); }}
          onKeyDown={(e) => { if (e.key === "Enter") { onSearch(query); onClose(); } }}
        />
      </div>
      <div className="text-[10px] text-slate-600 uppercase font-bold mb-2 px-1">Pinned Apps</div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[["📁","File Explorer"],["💻","CMD"],["⚙️","Settings"],["🗑️","Recycle Bin"]].map(([em, label]) => (
          <button key={label} onClick={onClose} className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-white/8 text-center">
            <span className="text-2xl">{em}</span>
            <span className="text-[9px] text-slate-400 font-bold truncate w-full">{label}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xs font-black">N</div>
          <span className="text-xs font-bold text-white">Student</span>
        </div>
        <button onClick={onClose} className="text-[10px] text-slate-500 hover:text-red-400 transition-colors">⏻ Shut down</button>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function SimulatorPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulator state
  const [completedIds,    setCompletedIds]    = useState<string[]>([]);
  const [currentStepIdx,  setCurrentStepIdx]  = useState(0);
  const [hearts,          setHearts]          = useState(MAX_HEARTS);
  const [totalXP,         setTotalXP]         = useState(0);
  const [xpGained,        setXpGained]        = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [feedback,        setFeedback]        = useState<FeedbackState>({ type: null, message: "" });
  const [hintVisible,     setHintVisible]     = useState(false);
  const [isComplete,      setIsComplete]      = useState(false);
  const [mcqAnswer,       setMCQAnswer]       = useState<{ selected: string | null; submitted: boolean }>({ selected: null, submitted: false });

  // Desktop UI state
  const [startOpen,    setStartOpen]    = useState(false);
  const [ctxMenu,      setCtxMenu]      = useState<{ x: number; y: number; items: string[]; targetId?: string } | null>(null);
  const [openWindows,  setOpenWindows]  = useState<OpenWindow[]>([]);
  const [time,         setTime]         = useState("");
  const [date,         setDate]         = useState("");
  const [searchQuery,  setSearchQuery]  = useState("");

  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const step: DesktopSimulatorStep = desktopSimulatorSteps[currentStepIdx];
  const totalSteps = desktopSimulatorSteps.length;

  // Auth
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => { setUserEmail(user?.email ?? null); setLoading(false); });
  }, []);

  // Load progress
  useEffect(() => {
    if (!userEmail) return;
    const savedIds   = localStorage.getItem(progressKey(userEmail));
    const savedHrts  = localStorage.getItem(heartsKey(userEmail));
    const certified  = localStorage.getItem(certKey(userEmail));
    if (certified === "true") {
      // Already certified — send straight to main app
      window.location.href = "/";
      return;
    }
    if (savedIds) {
      const ids: string[] = JSON.parse(savedIds);
      setCompletedIds(ids);
      const next = desktopSimulatorSteps.findIndex((s) => !ids.includes(s.id));
      if (next >= 0) setCurrentStepIdx(next);
    }
    if (savedHrts) setHearts(Math.max(0, parseInt(savedHrts, 10)));
  }, [userEmail]);

  // Clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setDate(now.toLocaleDateString([], { month: "short", day: "numeric" }));
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  // Close menus on click outside
  useEffect(() => {
    const close = () => { setCtxMenu(null); setStartOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  // Save progress
  const saveProgress = useCallback((ids: string[], h: number) => {
    if (!userEmail) return;
    localStorage.setItem(progressKey(userEmail), JSON.stringify(ids));
    localStorage.setItem(heartsKey(userEmail), String(h));
  }, [userEmail]);

  const flashFeedback = useCallback((type: "success" | "error", msg: string) => {
    setFeedback({ type, message: msg });
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    feedbackTimer.current = setTimeout(() => setFeedback({ type: null, message: "" }), 2600);
  }, []);

  const completeStep = useCallback((s: DesktopSimulatorStep) => {
    setCompletedIds((prev) => {
      const next = [...prev, s.id];
      saveProgress(next, hearts);
      setTotalXP((x) => x + s.xpReward);
      setXpGained(s.xpReward);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 1600);
      flashFeedback("success", s.successMsg);

      if (isSimulatorComplete(next)) {
        setTimeout(() => {
          setIsComplete(true);
          if (userEmail) localStorage.setItem(certKey(userEmail), "true");
        }, 2000);
        return next;
      }

      setTimeout(() => {
        setCurrentStepIdx((i) => Math.min(i + 1, totalSteps - 1));
        setMCQAnswer({ selected: null, submitted: false });
        setHintVisible(false);
      }, 1800);
      return next;
    });
  }, [flashFeedback, hearts, saveProgress, totalSteps, userEmail]);

  const deductHeart = useCallback((penalty: number) => {
    if (penalty <= 0) return;
    setHearts((h) => {
      const next = Math.max(0, h - penalty);
      saveProgress(completedIds, next);
      return next;
    });
    flashFeedback("error", "Wrong action! Try again. 💔");
  }, [completedIds, flashFeedback, saveProgress]);

  const validateAction = useCallback((performed: string, iconId?: string) => {
    if (!step) return;
    const targetId = step.targetElement.replace("#", "");
    const targetOk = !iconId || targetId === iconId || targetId === "desktop-bg" || targetId === "shortcut-demo-area";
    const actionOk = performed === step.action;

    if (actionOk && targetOk) {
      completeStep(step);
    } else if (actionOk && !targetOk) {
      deductHeart(step.heartPenalty);
    }
  }, [completeStep, deductHeart, step]);

  // Open a window
  const openWindow = useCallback((id: string, title: string, emoji: string, content: React.ReactNode) => {
    setOpenWindows((prev) => {
      if (prev.find((w) => w.id === id)) return prev;
      return [...prev, { id, title, emoji, content, x: 120 + prev.length * 30, y: 60 + prev.length * 20 }];
    });
  }, []);

  const closeWindow = useCallback((id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  // Desktop icon handlers
  const handleIconClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    validateAction("click", id);
  };

  const handleIconDblClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    validateAction("double-click", id);
    // Actually open window
    if (id === "recycle-bin-icon") openWindow("recycle-bin", "Recycle Bin", "🗑️",
      <div className="space-y-2">
        <p className="text-slate-400 text-center py-8">Recycle Bin is empty.</p>
      </div>
    );
    if (id === "file-explorer-icon" || id === "documents-folder") openWindow("file-explorer", "File Explorer", "📁",
      <div className="space-y-1">
        {["Desktop", "Downloads", "Documents", "Pictures", "Music"].map((f) => (
          <div key={f} className="flex items-center gap-2 px-2 py-1.5 hover:bg-white/5 rounded-lg cursor-pointer">
            <span>📁</span><span className="text-xs">{f}</span>
          </div>
        ))}
      </div>
    );
  };

  const handleIconRightClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); e.stopPropagation();
    setCtxMenu({ x: e.clientX, y: e.clientY, items: ["Open", "---", "Copy", "Rename", "Delete", "---", "Properties"], targetId: id });
    validateAction("right-click", id);
  };

  const handleDesktopRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCtxMenu({ x: e.clientX, y: e.clientY, items: ["View", "Sort by", "Refresh", "---", "New", "---", "Display settings", "Personalise"] });
    validateAction("right-click");
  };

  const handleDesktopClick = (e: React.MouseEvent) => {
    setStartOpen(false);
    setCtxMenu(null);
    validateAction("click");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (step?.action === "keyboard") completeStep(step);
    if (e.key === "Escape") { setStartOpen(false); setCtxMenu(null); }
  };

  const handleMCQSubmit = () => {
    if (!mcqAnswer.selected || mcqAnswer.submitted) return;
    setMCQAnswer((prev) => ({ ...prev, submitted: true }));
    if (mcqAnswer.selected === step.correctOption) { completeStep(step); }
    else { deductHeart(step.heartPenalty); setTimeout(() => setMCQAnswer({ selected: null, submitted: false }), 1000); }
  };

  const progressPercent = Math.round((completedIds.length / totalSteps) * 100);

  // ─── Loading ───────────────────────────────────────────────────────────────
  if (loading) return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  // ─── Auth gate ─────────────────────────────────────────────────────────────
  if (!userEmail) return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
      <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 max-w-sm w-full text-center">
        <div className="text-5xl mb-4">🎮</div>
        <h1 className="text-white font-black text-xl mb-2">Windows Desktop Simulator</h1>
        <p className="text-slate-400 text-sm mb-6">Sign in to start the guided experience and save your progress.</p>
        <button onClick={signInWithGoogle} className="w-full bg-white text-gray-900 font-black rounded-2xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );

  // ─── Completion ─────────────────────────────────────────────────────────────
  if (isComplete) return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
      <div className="bg-[#0f172a] border border-amber-400/30 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
        <div className="w-20 h-20 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
          <Trophy size={40} className="text-amber-400" />
        </div>
        <h2 className="text-2xl font-black text-white mb-2">🏆 Desktop Certified!</h2>
        <p className="text-slate-400 text-sm mb-6">You&apos;ve mastered Windows Desktop navigation!</p>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[["⭐ XP", getTotalXP()], ["❤️ Left", hearts], ["✅ Done", totalSteps]].map(([label, val]) => (
            <div key={String(label)} className="bg-white/5 rounded-2xl p-3 border border-white/10">
              <div className="text-white text-lg font-black">{val}</div>
              <div className="text-slate-500 text-xs mt-0.5">{label}</div>
            </div>
          ))}
        </div>
        <div className="bg-amber-500/10 border border-amber-400/20 rounded-2xl p-4 mb-6">
          <div className="text-3xl mb-1">🏅</div>
          <div className="text-amber-400 font-black text-sm">Terminal Cadet Badge</div>
        </div>
        <button
          onClick={() => { window.location.href = "/"; }}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black rounded-2xl py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-all"
        >
          🚀 Go to Main App <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );

  // ─── Desktop icons ─────────────────────────────────────────────────────────
  const desktopIcons = [
    { id: "recycle-bin-icon",   label: "Recycle Bin",   emoji: "🗑️" },
    { id: "file-explorer-icon", label: "File Explorer", emoji: "📁" },
    { id: "documents-folder",   label: "Documents",     emoji: "📄" },
  ];

  const targetIconId = step?.targetElement?.replace("#", "");

  // ─── Full Desktop Render ───────────────────────────────────────────────────
  return (
    <div
      id="desktop-bg"
      className="fixed inset-0 overflow-hidden select-none outline-none"
      style={{
        background: "radial-gradient(ellipse at 30% 20%, #0d2240 0%, #030b18 50%, #010a14 100%)",
      }}
      onClick={handleDesktopClick}
      onContextMenu={handleDesktopRightClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* ── Wallpaper grid ── */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* ── Animated blobs ── */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      {/* ─────────────────────────────────────────────────────
          TOP HUD — Hearts · Progress · XP
      ───────────────────────────────────────────────────── */}
      <header className="absolute top-0 left-0 right-0 h-9 z-[300] bg-black/40 backdrop-blur border-b border-white/5 flex items-center justify-between px-4">
        {/* Left: brand */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-5 h-5 rounded" />
          <span className="text-white font-black text-xs hidden sm:block">Nextsem Desktop Trainer</span>
        </div>

        {/* Center: progress bar */}
        <div className="flex-1 mx-6 max-w-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-[10px] font-mono whitespace-nowrap">{completedIds.length}/{totalSteps}</span>
            <div className="flex-1 bg-white/5 rounded-full h-1.5">
              <div className="h-1.5 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>

        {/* Right: Hearts + XP */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: MAX_HEARTS }).map((_, i) => (
              <Heart key={i} size={13} className={i < hearts ? "text-red-400 fill-red-400" : "text-slate-700"} />
            ))}
          </div>
          <div className="flex items-center gap-1 text-amber-400 font-black text-xs">
            <Star size={12} className="fill-amber-400" />{totalXP}
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────
          DESKTOP ICONS — Left column
      ───────────────────────────────────────────────────── */}
      <main className="absolute top-10 left-4 bottom-12 flex flex-col gap-4 pt-3 w-20 z-10">
        {desktopIcons.map((icon) => {
          const isTarget = targetIconId === icon.id;
          return (
            <button
              key={icon.id}
              id={icon.id}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all w-full text-center group
                ${isTarget
                  ? "bg-white/10 ring-2 ring-purple-400 ring-offset-2 ring-offset-transparent"
                  : "hover:bg-white/8"
                }`}
              style={isTarget ? { animation: "pulse 1.5s ease-in-out infinite" } : undefined}
              onClick={(e) => handleIconClick(e, icon.id)}
              onDoubleClick={(e) => handleIconDblClick(e, icon.id)}
              onContextMenu={(e) => handleIconRightClick(e, icon.id)}
            >
              <span className="text-3xl drop-shadow-lg">{icon.emoji}</span>
              <span className="text-[10px] text-white font-bold leading-tight drop-shadow">{icon.label}</span>
              {isTarget && (
                <span className="text-[8px] text-purple-300 font-bold bg-purple-500/20 rounded-full px-1.5 py-0.5">← Here!</span>
              )}
            </button>
          );
        })}
      </main>

      {/* ─────────────────────────────────────────────────────
          STEP GUIDANCE CARD — bottom-left floating card
      ───────────────────────────────────────────────────── */}
      <div
        id="mcq-block"
        className="absolute bottom-14 left-3 z-[100] w-[340px] sm:w-[380px] bg-[#0d1b2a]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-purple-500/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.stopPropagation()}
      >
        {/* Card header */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/30 px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-base">
              {{ "desktop": "🖥️", "start-menu": "🪟", "taskbar": "📌", "file-explorer": "📁", "terminal": "💻", "recycle-bin": "🗑️", "shortcuts": "⌨️" }[step.category] ?? "🎮"}
            </span>
            <div className="flex-1">
              <div className="text-white font-black text-xs">{step.title}</div>
              <div className="text-slate-500 text-[10px]">Step {currentStepIdx + 1} of {totalSteps} · +{step.xpReward} XP on complete</div>
            </div>
            <span className={`text-[9px] font-bold border px-2 py-0.5 rounded-full
              ${{ beginner: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", easy: "bg-blue-500/15 text-blue-400 border-blue-500/30", medium: "bg-amber-500/15 text-amber-400 border-amber-500/30" }[step.difficulty]}`}>
              {step.difficulty}
            </span>
          </div>
        </div>

        <div className="p-3 space-y-2 max-h-[280px] overflow-y-auto">
          {/* Instruction */}
          <p className="text-slate-200 text-[11px] leading-relaxed whitespace-pre-line">{step.instruction}</p>

          {/* Shortcut bubble */}
          {step.shortcut && (
            <div className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5">
              <span className="text-[10px] text-slate-400">Shortcut:</span>
              <kbd className="text-[10px] font-mono text-purple-300 font-bold">{step.shortcut}</kbd>
            </div>
          )}

          {/* Keyboard zone */}
          {step.action === "keyboard" && (
            <div
              id="shortcut-demo-area"
              tabIndex={0}
              className="bg-slate-900 border border-purple-500/30 rounded-2xl p-3 text-center cursor-text outline-none focus:border-purple-400"
              onKeyDown={(e) => { e.stopPropagation(); completeStep(step); }}
              onClick={(e) => { e.stopPropagation(); (e.currentTarget as HTMLElement).focus(); }}
            >
              <div className="text-2xl mb-1">⌨️</div>
              <div className="text-slate-400 text-[10px]">Click here, then press:</div>
              <div className="text-purple-300 font-mono font-black text-sm mt-0.5">{step.shortcut ?? "any key"}</div>
            </div>
          )}

          {/* Start search zone */}
          {step.action === "keyboard" && targetIconId === "start-search-input" && (
            <div className="flex items-center gap-2 bg-white/5 border border-purple-500/30 rounded-xl px-3 py-2">
              <Search size={12} className="text-slate-500" />
              <input
                id="start-search-input"
                className="bg-transparent outline-none text-[11px] text-slate-200 w-full placeholder:text-slate-600"
                placeholder="Type 'cmd' and press Enter..."
                onKeyDown={(e) => { e.stopPropagation(); if (e.key === "Enter") completeStep(step); }}
                onChange={() => { if (step.action === "keyboard") completeStep(step); }}
              />
            </div>
          )}

          {/* MCQ options */}
          {step.action === "mcq" && step.mcqOptions && (
            <div className="space-y-1.5">
              {step.mcqOptions.map((opt) => {
                const sel  = mcqAnswer.selected === opt.label;
                const ok   = mcqAnswer.submitted && opt.label === step.correctOption;
                const bad  = mcqAnswer.submitted && sel && opt.label !== step.correctOption;
                return (
                  <button key={opt.label}
                    onClick={(e) => { e.stopPropagation(); if (!mcqAnswer.submitted) setMCQAnswer({ selected: opt.label, submitted: false }); }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-[11px] font-bold border transition-all
                      ${ok  ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : ""}
                      ${bad ? "bg-red-500/20 border-red-500 text-red-300" : ""}
                      ${sel && !mcqAnswer.submitted ? "bg-purple-500/20 border-purple-500/60 text-purple-200" : ""}
                      ${!sel && !mcqAnswer.submitted ? "bg-white/3 border-white/10 text-slate-300 hover:bg-white/8" : ""}
                    `}
                  >
                    <span className="text-slate-500 mr-1.5">[{opt.label}]</span>{opt.text}
                  </button>
                );
              })}
              {mcqAnswer.selected && !mcqAnswer.submitted && (
                <button onClick={(e) => { e.stopPropagation(); handleMCQSubmit(); }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black rounded-xl py-2 text-[11px] active:scale-95 transition-all">
                  Submit Answer ✓
                </button>
              )}
            </div>
          )}

          {/* Hint */}
          {hintVisible && (
            <div className="bg-amber-500/8 border border-amber-500/25 rounded-2xl p-2.5">
              <div className="flex items-start gap-2">
                <Lightbulb size={13} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="text-amber-200 text-[10px] leading-relaxed">{step.hint}</p>
              </div>
            </div>
          )}
        </div>

        {/* Card footer */}
        <div className="px-3 pb-3 pt-1 border-t border-white/5 flex gap-2">
          <button onClick={() => setHintVisible((v) => !v)}
            className="flex-1 text-[10px] font-bold text-amber-400 bg-amber-500/8 hover:bg-amber-500/15 border border-amber-500/20 rounded-xl py-1.5 flex items-center justify-center gap-1 transition-all">
            <Lightbulb size={11} />{hintVisible ? "Hide Hint" : "Hint"}
          </button>
          {(step.action === "drag" || step.action === "hover") && (
            <button onClick={() => completeStep(step)}
              id="completion-btn"
              className="flex-1 text-[10px] font-black text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl py-1.5 flex items-center justify-center gap-1 active:scale-95 transition-all">
              ✓ Done <ChevronRight size={11} />
            </button>
          )}
          {step.id === "world-1-complete" && (
            <button onClick={() => completeStep(step)}
              id="completion-btn"
              className="flex-1 text-[10px] font-black text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl py-1.5 flex items-center justify-center gap-1 active:scale-95 transition-all">
              🏆 Claim Reward
            </button>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────
          TASKBAR
      ───────────────────────────────────────────────────── */}
      <div
        id="taskbar"
        className={`absolute bottom-0 left-0 right-0 h-11 z-[300] bg-[#0a1628]/90 backdrop-blur-xl border-t border-white/8 flex items-center px-2 gap-2
          ${targetIconId === "taskbar" ? "ring-2 ring-inset ring-purple-400" : ""}`}
        onClick={(e) => { e.stopPropagation(); validateAction("click", "taskbar"); }}
      >
        {/* Start button */}
        <button
          id="start-button"
          className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-all hover:bg-white/10
            ${targetIconId === "start-button" ? "ring-2 ring-purple-400 bg-purple-500/20" : ""}
            ${startOpen ? "bg-white/15" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setStartOpen((v) => !v);
            validateAction("click", "start-button");
          }}
        >
          🪟
        </button>

        <div className="h-5 w-px bg-white/10" />

        {/* Pinned taskbar apps */}
        {[["💻", "CMD"], ["📁", "Files"], ["🌐", "Browser"]].map(([em, label]) => (
          <button key={label} className="w-9 h-9 rounded-xl flex items-center justify-center text-base hover:bg-white/8 transition-all" title={label}>
            {em}
          </button>
        ))}

        <div className="flex-1" />

        {/* System tray */}
        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono pr-1">
          <span>📶</span>
          <span>🔋</span>
          <div className="h-3 w-px bg-white/10 mx-1" />
          <div className="text-right leading-tight">
            <div className="text-white text-[11px] font-bold">{time}</div>
            <div className="text-slate-500 text-[9px]">{date}</div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────
          START MENU
      ───────────────────────────────────────────────────── */}
      {startOpen && (
        <StartMenu onClose={() => setStartOpen(false)} onSearch={(q) => {
          setSearchQuery(q);
          if (q.toLowerCase().includes("cmd") && step.action === "keyboard") completeStep(step);
        }} />
      )}

      {/* ─────────────────────────────────────────────────────
          OPEN WINDOWS
      ───────────────────────────────────────────────────── */}
      {openWindows.map((win) => (
        <DesktopWindow key={win.id} win={win} onClose={closeWindow} />
      ))}

      {/* ─────────────────────────────────────────────────────
          CONTEXT MENU
      ───────────────────────────────────────────────────── */}
      {ctxMenu && (
        <CtxMenu x={ctxMenu.x} y={ctxMenu.y} items={ctxMenu.items} onClose={() => setCtxMenu(null)} />
      )}

      {/* ─────────────────────────────────────────────────────
          XP CELEBRATION FLASH
      ───────────────────────────────────────────────────── */}
      {showCelebration && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none">
          <div className="bg-amber-400 text-black font-black text-3xl rounded-3xl px-10 py-5 shadow-2xl shadow-amber-500/50 animate-bounce">
            +{xpGained} XP ⭐
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────
          FEEDBACK TOAST
      ───────────────────────────────────────────────────── */}
      {feedback.type && (
        <div className={`fixed top-12 left-1/2 -translate-x-1/2 z-[9999] px-5 py-3 rounded-2xl font-bold text-sm shadow-xl max-w-sm w-[90%] text-center
          ${feedback.type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
          <div className="flex items-center justify-center gap-2">
            {feedback.type === "success" ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
            <span className="line-clamp-2 text-xs">{feedback.message}</span>
          </div>
        </div>
      )}

      {/* Unused variable warning suppressor */}
      <span className="hidden">{searchQuery}</span>
    </div>
  );
}
