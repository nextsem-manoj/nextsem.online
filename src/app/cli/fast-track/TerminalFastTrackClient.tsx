"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WindowsIcon from "@/components/WindowsIcon";
import { triggerCelebration } from "@/lib/celebration";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Code2,
  HelpCircle,
  Lightbulb,
  Award,
  Play,
  Tv,
  Bot,
  Zap
} from "lucide-react";
import AiCompilerSageWidget from "@/components/AiCompilerSageWidget";
import { diagnoseCommand } from "@/lib/aiCompilerSage";

interface VideoTimestamp {
  seconds: number;
  time: string;
  cmd: string;
  label: string;
}

const VIDEO_TIMESTAMPS: VideoTimestamp[] = [
  { seconds: 0, time: "00:00", cmd: "cmd.exe", label: "Windows 11 Terminal" },
  { seconds: 2, time: "00:02", cmd: "mkdir", label: "Create Folder" },
  { seconds: 6, time: "00:06", cmd: "cd", label: "Navigate In" },
  { seconds: 9, time: "00:09", cmd: "dir", label: "Inspect Contents" },
  { seconds: 12, time: "00:12", cmd: "cls", label: "Clear Screen" },
  { seconds: 15, time: "00:15", cmd: "code .", label: "Launch VS Code" },
  { seconds: 18, time: "00:18", cmd: "Nextsem", label: "Academy Splash" },
];

interface FastTrackStep {
  stepNumber: number;
  expectedCmd: string;
  aliases: string[];
  actionName: string;
  whyLearnIt: string;
  explanation: string;
  terminalOutput: string[];
  newPromptPath: string;
  quickHint: string;
}

const STEPS: FastTrackStep[] = [
  {
    stepNumber: 1,
    expectedCmd: "mkdir my-portfolio",
    aliases: ["mkdir my-portfolio", "md my-portfolio"],
    actionName: "Create Your Project Folder",
    whyLearnIt: "Every project needs its own folder. Web developers create project workspaces right from the command line instead of right-clicking with a mouse.",
    explanation: "`mkdir` stands for Make Directory. In 🪟 Windows 11, it tells the operating system to create a new folder named `my-portfolio`.",
    terminalOutput: [
      "[Windows Kernel] Allocated NTFS directory block for 'my-portfolio'.",
      "✓ Folder created successfully in C:\\Users\\Student\\my-portfolio"
    ],
    newPromptPath: "C:\\Users\\Student",
    quickHint: "Type: mkdir my-portfolio"
  },
  {
    stepNumber: 2,
    expectedCmd: "cd my-portfolio",
    aliases: ["cd my-portfolio", "chdir my-portfolio"],
    actionName: "Step Inside Your Project Room",
    whyLearnIt: "Creating a folder is only half the battle. You must step inside it before writing code or installing packages.",
    explanation: "`cd` stands for Change Directory. Notice how your terminal prompt will change to show you are now located inside `my-portfolio`!",
    terminalOutput: [],
    newPromptPath: "C:\\Users\\Student\\my-portfolio",
    quickHint: "Type: cd my-portfolio"
  },
  {
    stepNumber: 3,
    expectedCmd: "dir",
    aliases: ["dir"],
    actionName: "Inspect Your Folder Contents",
    whyLearnIt: "Before building, developers inspect what files exist. `dir` lists all files and subfolders in your active directory.",
    explanation: "`dir` queries the file table. Because we just created this folder, it will show a clean, empty workspace with standard `.` and `..` directory pointers.",
    terminalOutput: [
      " Volume in drive C has no label.",
      " Volume Serial Number is 4C91-A7E2",
      "",
      " Directory of C:\\Users\\Student\\my-portfolio",
      "",
      "28-08-2026  18:30    <DIR>          .",
      "28-08-2026  18:30    <DIR>          ..",
      "               0 File(s)              0 bytes",
      "               2 Dir(s)  142,582,884,352 bytes free"
    ],
    newPromptPath: "C:\\Users\\Student\\my-portfolio",
    quickHint: "Type: dir"
  },
  {
    stepNumber: 4,
    expectedCmd: "cls",
    aliases: ["cls"],
    actionName: "Wipe the Terminal Screen Clean",
    whyLearnIt: "Terminals get cluttered with logs and errors quickly. `cls` cleans your buffer so you can focus on fresh work.",
    explanation: "`cls` stands for Clear Screen. It flushes the output buffer without closing your terminal session.",
    terminalOutput: [],
    newPromptPath: "C:\\Users\\Student\\my-portfolio",
    quickHint: "Type: cls"
  },
  {
    stepNumber: 5,
    expectedCmd: "code .",
    aliases: ["code .", "code .\\"],
    actionName: "Launch VS Code from Terminal",
    whyLearnIt: "This is the #1 secret weapon of modern software engineers. Never search the desktop for VS Code — open it straight from your project terminal!",
    explanation: "In terminal language, the dot `.` means THIS current folder. Typing `code .` commands Windows to launch Visual Studio Code with `my-portfolio` opened as the active workspace!",
    terminalOutput: [
      "[Nextsem Launcher] Locating VS Code installation in PATH...",
      "[Nextsem Launcher] Opening workspace: C:\\Users\\Student\\my-portfolio",
      "✓ Visual Studio Code launched successfully! Ready to write HTML5!"
    ],
    newPromptPath: "C:\\Users\\Student\\my-portfolio",
    quickHint: "Type: code ."
  }
];

interface TerminalEntry {
  type: "command" | "output" | "system" | "error";
  text: string;
  prompt?: string;
}

export default function TerminalFastTrackClient() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [promptPath, setPromptPath] = useState("C:\\Users\\Student");
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      type: "system",
      text: "Microsoft Windows [Version 10.0.22631.3007]\n(c) Microsoft Corporation. All rights reserved."
    }
  ]);
  const [completed, setCompleted] = useState(false);
  const [adviceMessage, setAdviceMessage] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [videoSource, setVideoSource] = useState<"short" | "youtube">("youtube");
  const [activeTimestamp, setActiveTimestamp] = useState<number>(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string>(
    "https://www.youtube-nocookie.com/embed/2E-jgpGTahE?rel=0"
  );
  const [showSageModal, setShowSageModal] = useState(false);

  const executeAutoDemo = async () => {
    if (isAutoPlaying) return;
    setIsAutoPlaying(true);
    setCompleted(false);
    setAdviceMessage(null);
    setCurrentStepIdx(0);
    setPromptPath("C:\\Users\\Student");
    setHistory([
      {
        type: "system",
        text: "Microsoft Windows [Version 10.0.22631.3007]\n(c) Microsoft Corporation. All rights reserved."
      }
    ]);

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    await sleep(800);

    for (let stepIndex = 0; stepIndex < STEPS.length; stepIndex++) {
      const step = STEPS[stepIndex];
      const cmdToType = step.expectedCmd;

      // Realistic typing animation
      for (let i = 1; i <= cmdToType.length; i++) {
        setInputVal(cmdToType.slice(0, i));
        await sleep(65);
      }

      await sleep(350); // Pause before pressing Enter

      // Execute command
      setInputVal("");
      const currentPath = stepIndex === 0 ? "C:\\Users\\Student" : STEPS[stepIndex - 1].newPromptPath;

      if (step.stepNumber === 4) {
        setHistory([]);
      } else {
        setHistory((prev) => [
          ...prev,
          {
            type: "command",
            prompt: currentPath,
            text: cmdToType
          },
          ...step.terminalOutput.map((line) => ({
            type: "output" as const,
            text: line
          }))
        ]);
      }

      setPromptPath(step.newPromptPath);

      if (stepIndex < STEPS.length - 1) {
        setCurrentStepIdx(stepIndex + 1);
        await sleep(1400); // Pause between steps
      } else {
        setCompleted(true);
        triggerCelebration();
      }
    }

    setIsAutoPlaying(false);
  };

  const handleJumpToTimestamp = (seconds: number) => {
    setActiveTimestamp(seconds);
    setActiveVideoUrl(
      `https://www.youtube-nocookie.com/embed/2E-jgpGTahE?start=${seconds}&autoplay=1&rel=0`
    );
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const currentStep = STEPS[currentStepIdx];

  // Auto-scroll ONLY the internal terminal container, preventing any outer window jumping
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, adviceMessage]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = inputVal.trim();
    if (!raw) return;

    // Reset error advice
    setAdviceMessage(null);

    const isMatch = currentStep.aliases.some(
      (alias) => alias.toLowerCase() === raw.toLowerCase()
    );

    // Append executed command to terminal history
    setHistory((prev) => [
      ...prev,
      {
        type: "command",
        prompt: promptPath,
        text: raw
      }
    ]);
    setInputVal("");

    if (isMatch) {
      // Correct command entered
      if (currentStep.stepNumber === 4) {
        // 'cls' clears history
        setHistory([]);
      } else if (currentStep.terminalOutput.length > 0) {
        setHistory((prev) => [
          ...prev,
          ...currentStep.terminalOutput.map((line) => ({
            type: "output" as const,
            text: line
          }))
        ]);
      }

      setPromptPath(currentStep.newPromptPath);

      if (currentStepIdx < STEPS.length - 1) {
        setCurrentStepIdx((prev) => prev + 1);
      } else {
        // Completed all 5 steps!
        setCompleted(true);
        triggerCelebration();
      }
    } else {
      // AI Compiler Sage CLI Diagnostics
      const sage = diagnoseCommand(raw, currentStep.expectedCmd);
      setAdviceMessage(
        `${sage.explanation}${sage.suggestedCmd ? ` Recommended: '${sage.suggestedCmd}'` : ""}`
      );
      setHistory((prev) => [
        ...prev,
        {
          type: "error",
          text: `'${raw}' is not recognized. AI Compiler Sage suggests: '${sage.suggestedCmd || currentStep.expectedCmd}'`
        }
      ]);
    }
  };

  const handleInsertCommand = (cmd: string) => {
    setInputVal(cmd);
    inputRef.current?.focus({ preventScroll: true });
  };

  const resetFastTrack = () => {
    setCurrentStepIdx(0);
    setPromptPath("C:\\Users\\Student");
    setInputVal("");
    setCompleted(false);
    setAdviceMessage(null);
    setHistory([
      {
        type: "system",
        text: "Microsoft Windows [Version 10.0.22631.3007]\n(c) Microsoft Corporation. All rights reserved."
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D]/30">
      
      {/* ── STANDARD HEADER ── */}
      <Header />

      <main className="flex-1 max-w-[1180px] w-full mx-auto px-4 md:px-8 py-8 space-y-8">
        
        {/* ── HERO BANNER ── */}
        <section className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#04AA6D] text-white text-xs font-black uppercase tracking-widest">
            <Sparkles size={13} className="text-[#04AA6D]" />
            <span>Stage 0 • 30-Minute Fast-Track</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            🪟 Windows 11 Terminal Fear-Killer for Web Developers
          </h1>

          <p className="text-white text-xs sm:text-sm font-normal leading-relaxed">
            Don&apos;t memorize 40 system admin commands. Aspiring web developers only need these <strong className="text-white font-bold">5 essential terminal commands</strong> to navigate folders, create projects, and launch VS Code. Master them here in 10 minutes and jump right into building web pages!
          </p>
        </section>

        {/* ── 5-STEP PROGRESS PILLS ── */}
        <div className="grid grid-cols-5 gap-2 max-w-2xl mx-auto">
          {STEPS.map((s, idx) => {
            const isDone = completed || idx < currentStepIdx;
            const isCurrent = !completed && idx === currentStepIdx;
            return (
              <div
                key={s.stepNumber}
                className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                  isDone
                    ? "bg-[#1e2029] border-[#04AA6D] text-white"
                    : isCurrent
                    ? "bg-[#1e2029] border-white text-white shadow-lg ring-1 ring-white/50"
                    : "bg-[#17181c] border-slate-800 text-slate-400"
                }`}
              >
                <div className="text-[10px] font-black uppercase text-white">Step {s.stepNumber}</div>
                <div className="text-xs font-mono font-bold truncate max-w-full text-white">
                  {s.expectedCmd.split(" ")[0]}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── ACTIVE TASK CARD (WHAT TO DO NOW) ── */}
        {!completed && (
          <section className="bg-[#1e2029] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#04AA6D] text-black font-black text-xs flex items-center justify-center">
                  {currentStep.stepNumber}
                </span>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-white">
                    Current Objective
                  </div>
                  <h2 className="text-base sm:text-lg font-extrabold text-white">
                    {currentStep.actionName}
                  </h2>
                </div>
              </div>

              {/* One-Click Insert Command */}
              <button
                onClick={() => handleInsertCommand(currentStep.expectedCmd)}
                className="px-3 py-1.5 rounded-lg bg-black/60 border border-slate-700 hover:border-[#04AA6D] text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                title="Click to paste directly into terminal"
              >
                <span className="text-white">Click to Fill:</span>
                <span className="text-[#04AA6D] underline decoration-[#04AA6D]">{currentStep.expectedCmd}</span>
              </button>
            </div>

            <p className="text-xs text-white leading-relaxed font-normal">
              <strong className="text-white font-bold">Why it matters:</strong> {currentStep.whyLearnIt}
            </p>

            <div className="text-xs text-white bg-[#17181c] p-3 rounded-xl border border-slate-800 flex items-start gap-2">
              <Lightbulb size={16} className="text-[#04AA6D] shrink-0 mt-0.5" />
              <span className="text-white">{currentStep.explanation}</span>
            </div>
          </section>
        )}

        {/* ── INTERACTIVE WINDOWS 11 TERMINAL WINDOW ── */}
        <section className="rounded-2xl border border-slate-700 overflow-hidden shadow-2xl bg-[#0c0c0c]">
          
          {/* Windows 11 CMD Title Bar */}
          <div className="bg-[#1f1f1f] px-4 py-2 border-b border-slate-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <WindowsIcon className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-xs font-mono font-medium text-slate-200">
                Command Prompt - cmd.exe (Stage 0 Terminal Simulator)
              </span>
            </div>

            {/* Windows Window Controls & Auto-Run Button */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={executeAutoDemo}
                disabled={isAutoPlaying}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-[#04AA6D]/20 hover:bg-[#04AA6D]/30 border border-[#04AA6D] rounded-lg text-[11px] font-mono text-white font-bold transition-all cursor-pointer shadow-sm disabled:opacity-50"
                title="Automatically type and run all 5 commands in real-time for video recording"
              >
                <Play size={11} className={`text-[#04AA6D] ${isAutoPlaying ? "animate-pulse" : ""}`} />
                <span>{isAutoPlaying ? "Auto-Typing..." : "Auto-Run Demo ▶"}</span>
              </button>

              <div className="hidden sm:flex items-center gap-2 text-slate-400 text-xs font-mono ml-1">
                <button className="hover:text-white cursor-default">─</button>
                <button className="hover:text-white cursor-default">□</button>
                <button className="hover:text-red-400 cursor-default">✕</button>
              </div>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div
            ref={terminalBodyRef}
            onClick={() => inputRef.current?.focus({ preventScroll: true })}
            className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-100 min-h-[300px] max-h-[420px] overflow-y-auto space-y-2 cursor-text"
          >
            {history.map((entry, i) => (
              <div key={i} className="leading-relaxed">
                {entry.type === "system" && (
                  <div className="text-slate-400 whitespace-pre-wrap">{entry.text}</div>
                )}
                {entry.type === "command" && (
                  <div className="text-white">
                    <span className="text-slate-400">{entry.prompt}&gt;</span>{" "}
                    <span className="text-white font-bold">{entry.text}</span>
                  </div>
                )}
                {entry.type === "output" && (
                  <div className="text-slate-300 whitespace-pre-wrap pl-2 border-l border-slate-800">
                    {entry.text}
                  </div>
                )}
                {entry.type === "error" && (
                  <div className="text-rose-400 font-bold">{entry.text}</div>
                )}
              </div>
            ))}

            {/* Live Interactive Input Line */}
            {!completed ? (
              <form onSubmit={handleCommandSubmit} className="flex items-center gap-1.5 pt-1">
                <span className="text-slate-400 shrink-0 select-none">
                  {promptPath}&gt;
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={currentStep.quickHint}
                  autoFocus
                  className="flex-1 bg-transparent text-white font-mono font-bold text-xs sm:text-sm outline-none border-none caret-[#04AA6D]"
                />
              </form>
            ) : (
              <div className="text-white font-bold pt-2 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#04AA6D]" />
                <span>🎉 STAGE 0 COMPLETED! All 5 Developer Commands Mastered!</span>
              </div>
            )}
          </div>

          {/* Terminal Bottom Controls */}
          <div className="bg-[#141414] px-4 py-2.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="text-white flex items-center gap-2 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-pulse" />
              <span>UTF-8 | Windows 11 Command Prompt Simulation</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSageModal(!showSageModal)}
                className="text-[#04AA6D] hover:text-[#039861] flex items-center gap-1.5 text-[11px] font-extrabold cursor-pointer px-2.5 py-1 rounded-md bg-[#04AA6D]/10 hover:bg-[#04AA6D]/20 border border-[#04AA6D]/40 transition-all"
              >
                <Bot size={13} />
                <span>{showSageModal ? "Hide AI Sage" : "AI Compiler Sage"}</span>
              </button>

              <button
                onClick={resetFastTrack}
                className="text-white/70 hover:text-white flex items-center gap-1 text-[11px] font-bold cursor-pointer"
              >
                <RotateCcw size={12} />
                <span>Reset Simulator</span>
              </button>
            </div>
          </div>
        </section>

        {/* ── AI COMPILER SAGE WIDGET (MILESTONE 3.1) ── */}
        {showSageModal && (
          <div className="animate-in fade-in duration-300">
            <AiCompilerSageWidget
              initialCommand={inputVal || currentStep.expectedCmd}
              expectedCommand={currentStep.expectedCmd}
              onApplyFix={(fixedCmd) => {
                handleInsertCommand(fixedCmd);
                setShowSageModal(false);
              }}
            />
          </div>
        )}

        {/* ── ADVISOR SPEECH BUBBLE (IF TYPO) ── */}
        {adviceMessage && (
          <div className="bg-amber-950/40 border border-amber-500/50 p-4 rounded-2xl flex items-start gap-3 text-white text-xs leading-relaxed animate-in fade-in">
            <HelpCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <strong className="text-amber-300 font-bold block mb-0.5">Friendly Terminal Tip:</strong>
              <span className="text-white">{adviceMessage}</span>
            </div>
            <button
              onClick={() => setShowSageModal(true)}
              className="shrink-0 px-2.5 py-1 rounded bg-[#04AA6D]/20 hover:bg-[#04AA6D]/30 border border-[#04AA6D] text-[#04AA6D] text-[10px] font-extrabold uppercase transition-all cursor-pointer flex items-center gap-1"
            >
              <Bot size={11} />
              <span>Ask AI Sage</span>
            </button>
          </div>
        )}

        {/* ── COMPLETION CELEBRATION MODAL ── */}
        {completed && (
          <section className="bg-gradient-to-br from-[#1e2029] to-[#14151a] border-2 border-[#04AA6D] rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-3xl bg-[#04AA6D]/20 border border-[#04AA6D] flex items-center justify-center text-[#04AA6D] mx-auto shadow-xl">
              <Award size={36} />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <span className="text-[10px] font-black uppercase tracking-widest text-white bg-white/10 px-3 py-1 rounded-full border border-[#04AA6D] inline-block">
                Milestone Reached
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Terminal Fear Conquered! 🏆
              </h2>
              <p className="text-xs sm:text-sm text-white font-normal leading-relaxed">
                You now know the exact 5 terminal commands professional web engineers use every single day. No more fear of black screens or missing folder paths!
              </p>
            </div>

            {/* Next Steps CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/html"
                className="px-6 py-3.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <Code2 size={16} />
                <span>Jump into Stage 1: HTML5 Architecture »</span>
              </Link>

              <Link
                href="/cli"
                className="px-6 py-3.5 rounded-xl bg-[#17181c] hover:bg-slate-800 text-white border border-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <WindowsIcon className="w-4 h-4 text-slate-300" />
                <span>Explore Full 30+ CLI Hub »</span>
              </Link>
            </div>
          </section>
        )}

        {/* ── VIDEO WALKTHROUGH SECTION (FOR VISUAL LEARNERS) ── */}
        <section className="bg-[#1e2029] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/5 border border-[#04AA6D] text-white text-[10px] font-black uppercase tracking-wider">
                <Tv size={13} className="text-[#04AA6D]" />
                <span>Visual Learner Video Guide</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Prefer Watching Over Reading? Video Walkthrough
              </h2>
              <p className="text-xs sm:text-sm text-white font-normal leading-relaxed">
                Watch how professional software developers create folders, navigate directory trees, and launch Visual Studio Code in 🪟 Windows 11 without touching the mouse.
              </p>
            </div>

            {/* Watch on YouTube Link */}
            <a
              href="https://youtube.com/shorts/2E-jgpGTahE"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer self-start sm:self-auto"
              title="Open video on YouTube Shorts"
            >
              <span>Watch on YouTube ↗</span>
            </a>
          </div>

          {/* Player Mode Switcher */}
          <div className="flex items-center gap-2 pt-1 flex-wrap">
            <button
              onClick={() => setVideoSource("youtube")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                videoSource === "youtube"
                  ? "bg-[#04AA6D] text-black shadow-md"
                  : "bg-[#17181c] text-white hover:text-[#04AA6D] border border-slate-800"
              }`}
            >
              <Tv size={12} />
              <span>YouTube Short (Official)</span>
            </button>

            <button
              onClick={() => setVideoSource("short")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                videoSource === "short"
                  ? "bg-[#04AA6D] text-black shadow-md"
                  : "bg-[#17181c] text-white hover:text-[#04AA6D] border border-slate-800"
              }`}
            >
              <Play size={12} className={videoSource === "short" ? "fill-black" : ""} />
              <span>Native HD Player</span>
            </button>
          </div>

          {/* Video Player Display */}
          {videoSource === "short" ? (
            <div className="flex justify-center w-full py-2">
              <div className="relative aspect-[9/16] w-full max-w-[360px] sm:max-w-[400px] rounded-3xl overflow-hidden border-2 border-slate-700 bg-black shadow-2xl">
                <video
                  key="short-video-player"
                  src="/terminal_fast_track_short.mp4"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover bg-black"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full py-2">
              <div className="relative aspect-[9/16] w-full max-w-[360px] sm:max-w-[400px] rounded-3xl overflow-hidden border-2 border-[#04AA6D]/60 bg-black shadow-2xl">
                <iframe
                  src={activeVideoUrl}
                  title="Nextsem Academy Windows 11 Terminal Fast-Track Official YouTube Short"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Jump-to-Command Timestamps */}
          {videoSource === "youtube" && (
            <div className="space-y-3 pt-1">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Play size={14} className="text-[#04AA6D]" />
                <span>Tap to Jump to Specific Command:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {VIDEO_TIMESTAMPS.map((item) => (
                  <button
                    key={item.seconds}
                    onClick={() => handleJumpToTimestamp(item.seconds)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTimestamp === item.seconds
                        ? "bg-[#04AA6D]/20 border-[#04AA6D] text-white ring-1 ring-[#04AA6D]"
                        : "bg-[#17181c] border-slate-800 text-white hover:border-[#04AA6D]"
                    }`}
                  >
                    <span className="text-white">{item.time}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-[#04AA6D] underline decoration-[#04AA6D]">{item.cmd}</span>
                    <span className="text-white font-sans text-[11px] font-normal">({item.label})</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ── QUICK REFERENCE CHEAT SHEET ── */}
        <section className="bg-[#1e2029] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-extrabold text-white">
              The 5 Sacred Commands Summary
            </h2>
            <p className="text-xs text-white font-normal mt-0.5">
              Bookmark this quick cheat sheet for whenever you set up a new project on Windows 11:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-sans">
              <thead>
                <tr className="border-b border-slate-800 text-white font-black uppercase text-[10px]">
                  <th className="py-2.5 px-3">Command</th>
                  <th className="py-2.5 px-3">Full Form</th>
                  <th className="py-2.5 px-3">Real-World Analogy</th>
                  <th className="py-2.5 px-3">Web Developer Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-white">
                <tr>
                  <td className="py-3 px-3 font-mono font-bold text-white">mkdir name</td>
                  <td className="py-3 px-3">Make Directory</td>
                  <td className="py-3 px-3">Building a new room in your house</td>
                  <td className="py-3 px-3">Creating a new project folder</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-mono font-bold text-white">cd name</td>
                  <td className="py-3 px-3">Change Directory</td>
                  <td className="py-3 px-3">Walking into the room</td>
                  <td className="py-3 px-3">Entering inside your project folder</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-mono font-bold text-white">dir</td>
                  <td className="py-3 px-3">Directory List</td>
                  <td className="py-3 px-3">Opening your eyes to see objects</td>
                  <td className="py-3 px-3">Verifying `index.html` and assets exist</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-mono font-bold text-white">cls</td>
                  <td className="py-3 px-3">Clear Screen</td>
                  <td className="py-3 px-3">Wiping the whiteboard clean</td>
                  <td className="py-3 px-3">Clearing noisy compiler logs</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-mono font-bold text-white">code .</td>
                  <td className="py-3 px-3">VS Code In Current Folder</td>
                  <td className="py-3 px-3">Opening your toolbox in this exact spot</td>
                  <td className="py-3 px-3">Opening VS Code with your project loaded</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-2 text-center">
            <Link
              href="/cli"
              className="text-xs font-bold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] inline-flex items-center gap-1.5"
            >
              <span>Need advanced networking, IP, and batch commands? Browse the complete 30+ lesson Windows CLI Hub »</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </section>

      </main>

      {/* ── STANDARD FOOTER ── */}
      <Footer />

    </div>
  );
}
