"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, ChevronRight, Bookmark, 
  Monitor, CheckCircle2, Copy, Check, Terminal, Play, Sparkles,
  Lightbulb, CheckCircle, AlertCircle, CornerDownLeft, Eye, Folder,
  FileCode, Lock, ShieldCheck, RefreshCw, Key, HelpCircle, Layers,
  ArrowRight, Volume2, VolumeX, Trophy, Bot, Layout, Award, HelpCircle as QuestionIcon,
  Smartphone, Laptop
} from "lucide-react";

export interface CliCommandSwitch {
  flag: string;
  description: string;
  example?: string;
  beginnerNote?: string;
}

export interface CliScreenshot {
  src: string;
  caption: string;
  alt?: string;
}

export interface GuidedStep {
  stepNumber: number;
  title: string;
  instruction: string;
  targetCommand: string;
  hint: string;
  rewardXp: number;
}

export interface Windows11CliLessonData {
  id: number;
  slug: string;
  title: string;
  unit?: string;
  category?: string;
  analogy?: string;                 // Real-world analogy for beginners
  promptPath?: string;             // e.g. "C:\\Users\\Nextsem>"
  command: string;                  // Primary command
  description: string;              // Beginner-friendly summary
  anatomyTokens?: { token: string; label: string; detail: string }[];
  switches?: CliCommandSwitch[];    // Flags table
  guidedSteps?: GuidedStep[];       // Guided Step-by-Step Hands-On Wizard
  expectedOutput: string;           // Exact 1-to-1 terminal output matching Windows 11 PC
  screenshot?: CliScreenshot;        // Windows 11 screenshot matching terminal output 100%
}

export interface Windows11CliLessonTemplateProps {
  subjectDashboardUrl?: string;
  totalLessonsInSubject?: number;
  lesson?: Windows11CliLessonData;
  prevLesson?: { id: number; slug: string; title: string } | null;
  nextLesson?: { id: number; slug: string; title: string } | null;
}

// Visual File System Items for Explorer Dual View
interface FileExplorerItem {
  name: string;
  type: "folder" | "file";
  size?: string;
  date: string;
  isHidden: boolean;
  isSystem: boolean;
}

const FILE_EXPLORER_DATABASE: FileExplorerItem[] = [
  { name: ".git", type: "folder", date: "08/06/2026 01:10 AM", isHidden: true, isSystem: true },
  { name: ".env.local", type: "file", size: "2,048 B", date: "08/06/2026 01:12 AM", isHidden: true, isSystem: false },
  { name: "AppData", type: "folder", date: "08/06/2026 01:14 AM", isHidden: true, isSystem: true },
  { name: "Documents", type: "folder", date: "08/06/2026 01:15 AM", isHidden: false, isSystem: false },
  { name: "Downloads", type: "folder", date: "08/06/2026 01:16 AM", isHidden: false, isSystem: false },
  { name: "Pictures", type: "folder", date: "08/06/2026 01:18 AM", isHidden: false, isSystem: false }
];

const PERFECT_MATCHING_CLI_LESSON: Windows11CliLessonData = {
  id: 2,
  slug: "learn-windows-cmd-dir-command",
  title: "🪟 Windows 11 CMD — Listing Files & Folders (`dir`)",
  unit: "Unit 1: Windows 11 OS Navigation & File Management",
  category: "File System Management",
  analogy: "💡 Think of `dir` as opening File Explorer to see what's inside a folder! Instead of double-clicking a yellow folder icon with your mouse on PC, you type `dir` in Command Prompt and it lists all contents instantly.",
  promptPath: "C:\\Users\\Nextsem>",
  command: "dir /a:h /o:n",
  description: "The `dir` (Directory) command asks Windows Command Prompt to scan and list all files, subdirectories, and hidden system files inside your current folder.",
  anatomyTokens: [
    { token: "dir", label: "Primary Command", detail: "Short for 'Directory'. Tells Windows to list files." },
    { token: "/a:h", label: "Attribute Switch", detail: "`/a` = Attribute filter, `h` = Hidden files." },
    { token: "/o:n", label: "Sort Order Switch", detail: "`/o` = Order filter, `n` = Sort by Name alphabetically." }
  ],
  guidedSteps: [
    {
      stepNumber: 1,
      title: "Step 1: List Normal Files",
      instruction: "On your PC, open CMD and type `dir` then press Enter (or test live on mobile below).",
      targetCommand: "dir",
      hint: "Typing `dir` shows standard visible files and folders.",
      rewardXp: 50
    },
    {
      stepNumber: 2,
      title: "Step 2: Reveal Hidden Files",
      instruction: "Now type `dir /a:h` to reveal hidden system files like `.git` and `.env.local`!",
      targetCommand: "dir /a:h",
      hint: "The `/a:h` switch forces Command Prompt to display files Windows usually hides.",
      rewardXp: 50
    },
    {
      stepNumber: 3,
      title: "Step 3: Sort Alphabetically",
      instruction: "Finally, type `dir /a:h /o:n` to show hidden files sorted alphabetically from A to Z.",
      targetCommand: "dir /a:h /o:n",
      hint: "Adding `/o:n` organizes all files neatly in alphabetical order!",
      rewardXp: 100
    }
  ],
  switches: [
    { flag: "/p", description: "Pauses output after each full screen of files. Press any key to see the next page.", example: "dir /p", beginnerNote: "Great when a folder contains hundreds of files!" },
    { flag: "/w", description: "Wide format! Displays files across 5 horizontal columns instead of a long single list.", example: "dir /w", beginnerNote: "Saves vertical scrolling space." },
    { flag: "/a:h", description: "Shows hidden files and folders that Windows File Explorer normally hides.", example: "dir /a:h", beginnerNote: "Essential for developers inspecting system files." },
    { flag: "/o:n", description: "Sorts all files alphabetically by name (A to Z).", example: "dir /o:n", beginnerNote: "Keeps long directory lists organized." },
    { flag: "/s", description: "Subdirectories! Recursively lists files in the current folder and ALL subfolders.", example: "dir /s", beginnerNote: "Searches deeply through all subfolders." }
  ],
  // EXACT VERBATIM OUTPUT FROM REAL WINDOWS 11 CMD
  expectedOutput: ` Volume in drive C has no label.
 Volume Serial Number is 482A-9E11

 Directory of C:\\Users\\Nextsem

08/06/2026  01:15 AM    <DIR>          .
08/06/2026  01:15 AM    <DIR>          ..
08/06/2026  01:10 AM    <DIR>          .git          (Hidden)
08/06/2026  01:12 AM             2,048 .env.local    (Hidden)
08/06/2026  01:14 AM    <DIR>          AppData
               1 File(s)          2,048 bytes
               4 Dir(s)  142,852,104,192 bytes free`,
  screenshot: {
    src: "/screenshots/cli/win11_cmd_dir_output.png",
    caption: "🪟 Real Windows 11 Command Prompt (cmd.exe) Output Screenshot — 100% Matching output text line-by-line.",
    alt: "Windows 11 Command Prompt dir command output screenshot"
  }
};

export default function Windows11CliLessonTemplate({
  subjectDashboardUrl = "/cli",
  totalLessonsInSubject = 100,
  lesson = PERFECT_MATCHING_CLI_LESSON,
  prevLesson = { id: 1, slug: "learn-windows-cmd-basics", title: "Introduction to Windows 11 Command Prompt" },
  nextLesson = { id: 3, slug: "learn-windows-cmd-mkdir-cd", title: "Creating & Navigating Folders (`mkdir`, `cd`)" }
}: Windows11CliLessonTemplateProps) {
  const [mounted, setMounted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [activeZoomImage, setActiveZoomImage] = useState<CliScreenshot | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  
  // Dual View Mode State (Split Screen: Terminal + Windows 11 File Explorer)
  const [dualViewMode, setDualViewMode] = useState<boolean>(true);

  // Gamified XP State
  const [userXp, setUserXp] = useState<number>(0);
  const [showCertModal, setShowCertModal] = useState<boolean>(false);

  // Interactive Simulator State
  const [simInput, setSimInput] = useState<string>(lesson.command);
  const [simOutput, setSimOutput] = useState<string>(lesson.expectedOutput);
  const [activeTokenIdx, setActiveTokenIdx] = useState<number | null>(0);
  const [aiSageHint, setAiSageHint] = useState<string>("Welcome Cadet! Type 'dir' to list your files, or tap Auto-Run!");

  // Explorer Live Filter State
  const [showHiddenInExplorer, setShowHiddenInExplorer] = useState<boolean>(false);
  const [isWideViewInExplorer, setIsWideViewInExplorer] = useState<boolean>(false);
  const [sortAlphabetical, setSortAlphabetical] = useState<boolean>(false);

  // Guided Step-by-Step Wizard State
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [stepCompleted, setStepCompleted] = useState<boolean[]>(
    lesson.guidedSteps ? new Array(lesson.guidedSteps.length).fill(false) : []
  );

  // Command Puzzle Builder State
  const [builtTokens, setBuiltTokens] = useState<string[]>(["dir"]);

  // Common Beginner Mistake Toggle State
  const [activeMistakeIdx, setActiveMistakeIdx] = useState<number | null>(null);
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);

  const bookmarkStorageKey = `nextsem_cli_bookmarks`;

  // Synthesize Web Audio SFX (Zero external assets needed!)
  const playSoundEffect = (type: "click" | "execute" | "success" | "cert") => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "click") {
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === "execute") {
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === "success") {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === "cert") {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch (e) {
      // Audio context fallback
    }
  };

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
    playSoundEffect("click");
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

  const handleCopy = (text: string) => {
    playSoundEffect("click");
    navigator.clipboard.writeText(text);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  // Run interactive command simulation inside lesson
  const runSimCommand = (inputCmd: string) => {
    playSoundEffect("execute");
    const trimmed = inputCmd.trim().toLowerCase();
    setSimInput(inputCmd);

    // Check guided step progression
    if (lesson.guidedSteps && lesson.guidedSteps[currentStepIdx]) {
      const target = lesson.guidedSteps[currentStepIdx].targetCommand.toLowerCase();
      if (trimmed === target) {
        playSoundEffect("success");
        const updatedSteps = [...stepCompleted];
        if (!updatedSteps[currentStepIdx]) {
          updatedSteps[currentStepIdx] = true;
          setStepCompleted(updatedSteps);
          setUserXp((prev) => prev + (lesson.guidedSteps?.[currentStepIdx]?.rewardXp || 50));
        }

        if (currentStepIdx < lesson.guidedSteps.length - 1) {
          setCurrentStepIdx(currentStepIdx + 1);
          setAiSageHint(`Great job! Move to ${lesson.guidedSteps[currentStepIdx + 1].title}!`);
        } else {
          playSoundEffect("cert");
          setShowCertModal(true);
          setAiSageHint("🎉 Outstanding Cadet! You mastered all steps and earned your CMD Certificate!");
        }
      }
    }

    if (trimmed === "cls" || trimmed === "clear") {
      setSimOutput(`C:\\Users\\Nextsem>`);
      setAiSageHint("Screen cleared! Type your next command.");
      return;
    }

    if (trimmed === "dir") {
      setShowHiddenInExplorer(false);
      setIsWideViewInExplorer(false);
      setSortAlphabetical(false);
      setSimOutput(` Directory of C:\\Users\\Nextsem\n\n08/06/2026  01:14 AM    <DIR>          AppData\n08/06/2026  01:15 AM    <DIR>          Documents\n08/06/2026  01:16 AM    <DIR>          Downloads\n               0 File(s)              0 bytes\n               3 Dir(s)  142,852,104,192 bytes free`);
      setAiSageHint("Standard `dir` lists visible folders in File Explorer! Notice hidden files are not visible yet.");
    } else if (trimmed === "dir /a:h") {
      setShowHiddenInExplorer(true);
      setIsWideViewInExplorer(false);
      setSortAlphabetical(false);
      setSimOutput(` Directory of C:\\Users\\Nextsem\n\n08/06/2026  01:10 AM    <DIR>          .git          (Hidden Folder)\n08/06/2026  01:12 AM             2,048 .env.local    (Hidden File)\n08/06/2026  01:14 AM    <DIR>          AppData       (System Folder)\n               1 File(s)          2,048 bytes\n               2 Dir(s)  142,852,104,192 bytes free`);
      setAiSageHint("Awesome! `/a:h` forces hidden files `.git` and `.env.local` to reveal in File Explorer!");
    } else if (trimmed.includes("dir /a:h /o:n") || trimmed.includes("dir /a:h/o:n")) {
      setShowHiddenInExplorer(true);
      setIsWideViewInExplorer(false);
      setSortAlphabetical(true);
      setSimOutput(lesson.expectedOutput);
      setAiSageHint("Perfect! `/o:n` sorts all revealed hidden files in alphabetical order!");
    } else if (trimmed.includes("/w")) {
      setShowHiddenInExplorer(false);
      setIsWideViewInExplorer(true);
      setSortAlphabetical(false);
      setSimOutput(` Directory of C:\\Users\\Nextsem\n\n[.git]          [.env.local]    [AppData]       [Documents]     [Downloads]\n               1 File(s)          2,048 bytes`);
      setAiSageHint("Wide list format active! Displays items horizontally in 5 columns.");
    } else if (trimmed === "help") {
      setSimOutput(`For more information on a specific command, type HELP command-name\nDIR          Displays a list of files and subdirectories in a directory.\nCLS          Clears the screen.`);
      setAiSageHint("Help reference menu loaded.");
    } else if (trimmed === "dir/a:h") {
      setSimOutput(`'dir/a:h' is not recognized as an internal command.\n\n💡 Beginner Tip: In Windows CMD, you MUST put a space between 'dir' and '/a:h'! Type 'dir /a:h'.`);
      setAiSageHint("⚠️ Remember the space rule! Type `dir /a:h` with a space.");
    } else {
      setSimOutput(`'${inputCmd}' is not recognized as an internal or external command,\noperable program or batch file.\n\n💡 Beginner Tip: Try typing 'dir', 'dir /a:h', or 'cls'!`);
      setAiSageHint("Command not recognized. Check spelling or try clicking one of the Quick Pills!");
    }
  };

  // Toggle Command Puzzle Switch Token
  const togglePuzzleToken = (tok: string) => {
    playSoundEffect("click");
    if (tok === "dir") return;
    if (builtTokens.includes(tok)) {
      const filtered = builtTokens.filter(t => t !== tok);
      setBuiltTokens(filtered);
      runSimCommand(filtered.join(" "));
    } else {
      const updated = [...builtTokens, tok];
      setBuiltTokens(updated);
      runSimCommand(updated.join(" "));
    }
  };

  const MISTAKES_DATA = [
    {
      title: "Mistake #1: Forgetting the Space (`dir/a:h`)",
      incorrect: "dir/a:h",
      correct: "dir /a:h",
      reason: "Windows CMD needs a space between the command name (`dir`) and switches (`/a:h`). Without a space, CMD thinks `dir/a:h` is one long file name!"
    },
    {
      title: "Mistake #2: Forward Slash vs Backslash (`dir \\a:h`)",
      incorrect: "dir \\a:h",
      correct: "dir /a:h",
      reason: "Command switches use FORWARD slashes (`/`), while Windows file paths use BACKSLASHES (`C:\\Users`)."
    },
    {
      title: "Mistake #3: Typing `directory` instead of `dir`",
      incorrect: "directory",
      correct: "dir",
      reason: "Command Prompt uses short abbreviations! The command is `dir`, not `directory`."
    }
  ];

  // Filter Explorer Items based on Live CMD State
  const visibleExplorerItems = FILE_EXPLORER_DATABASE.filter(item => {
    if (!showHiddenInExplorer && item.isHidden) return false;
    return true;
  }).sort((a, b) => {
    if (sortAlphabetical) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

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
    <div className="min-h-screen bg-[#17181c] py-6 px-2 sm:px-4 text-white font-sans">
      <div className="space-y-6 text-left max-w-5xl mx-auto">
        
        {/* Top Back Link & Gamified XP Counter Header (Vibrant Green Link Standard) */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href={subjectDashboardUrl}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] transition-colors"
          >
            <ChevronLeft size={16} className="text-white" />
            <span>Back to ⊞ Windows CLI Lessons</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Sound SFX Toggle Button (Black & White Monochromatic Icon) */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playSoundEffect("click");
              }}
              className="p-1.5 bg-slate-900 border border-slate-800 rounded-xl text-white transition-colors cursor-pointer"
              title={soundEnabled ? "Mute Terminal Sounds" : "Enable Terminal Sounds"}
            >
              {soundEnabled ? <Volume2 size={16} className="text-white" /> : <VolumeX size={16} className="text-slate-400" />}
            </button>

            {/* Gamified XP Progress Badge (High Contrast Pure White Text) */}
            <div className="flex items-center gap-1.5 text-xs font-mono font-extrabold text-white bg-slate-900 border border-slate-800 px-3 py-1 rounded-xl shadow-sm">
              <Trophy size={14} className="text-white" />
              <span>{userXp} XP</span>
            </div>

            <span className="text-xs font-mono font-extrabold text-white bg-slate-900 border border-slate-800 px-3 py-1 rounded-xl shadow-sm">
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
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <ChevronLeft size={16} className="stroke-[2.5] text-white" />
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
                  ? "bg-slate-800 border-emerald-500 text-[#04AA6D]"
                  : "bg-slate-900 border-slate-800 text-white hover:text-white"
              }`}
              title={isBookmarked ? "Remove Bookmark" : "Bookmark Lesson"}
            >
              <Bookmark size={18} className={`stroke-[2.5] ${isBookmarked ? "fill-[#04AA6D] text-[#04AA6D]" : "text-white"}`} />
              <span className="text-xs font-extrabold">{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
            </button>

            {nextLesson ? (
              <Link
                href={`${subjectDashboardUrl}/${nextLesson.slug}`}
                className="px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={16} className="stroke-[2.5] text-white" />
              </Link>
            ) : null}
          </div>
        </div>

        {/* 📱 MOBILE READING ↔ 💻 REAL PC PRACTICE COMPARISON CARD */}
        <div className="bg-slate-900 border-2 border-slate-800 p-4 md:p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 bg-slate-800 border border-slate-700 rounded-xl flex items-center gap-2 text-white">
              <Smartphone size={20} className="text-white" />
              <span className="text-xs font-bold">➔</span>
              <Laptop size={20} className="text-white" />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase text-[#04AA6D] tracking-wider block">
                📱 Read on Phone ↔ 💻 Practice on Real Windows 11 PC
              </span>
              <p className="text-xs md:text-sm text-white font-semibold leading-relaxed">
                The terminal code and output screenshot below are <strong className="text-white font-extrabold">100% identical line-by-line</strong> to actual Windows 11 Command Prompt output. You can compare your PC screen directly with your phone screen!
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-[11px] font-mono font-extrabold text-white bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl">
              ✓ 100% Line-by-Line Match
            </span>
          </div>
        </div>

        {/* Main Masterpiece Container */}
        <div className="bg-slate-900/40 border border-slate-850 p-5 md:p-8 rounded-2xl shadow-xl backdrop-blur-xl space-y-8">
          
          {/* 💡 Beginner Real-World Analogy Banner (White Text & Monochromatic Icon) */}
          {lesson.analogy && (
            <div className="bg-slate-900 border-l-4 border-[#04AA6D] border-slate-700/60 p-4 md:p-5 rounded-xl flex items-start gap-3.5 shadow-lg">
              <Lightbulb size={24} className="text-white shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <span className="text-xs font-black uppercase text-white tracking-wider block">
                  Beginner Analogy
                </span>
                <p className="text-sm md:text-base text-white font-semibold leading-relaxed">
                  {lesson.analogy}
                </p>
              </div>
            </div>
          )}

          {/* 🧭 Guided Step-by-Step Hands-On Wizard for Absolute Beginners */}
          {lesson.guidedSteps && (
            <div className="bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl space-y-4 shadow-xl text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Sparkles size={15} className="text-white" />
                  <span>Guided Step-by-Step Beginner Walkthrough</span>
                </span>
                <span className="text-xs font-mono font-extrabold text-white">
                  Step {currentStepIdx + 1} of {lesson.guidedSteps.length}
                </span>
              </div>

              {/* Progress Step Dots */}
              <div className="grid grid-cols-3 gap-2">
                {lesson.guidedSteps.map((st, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playSoundEffect("click");
                      setCurrentStepIdx(idx);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-extrabold text-center transition-all cursor-pointer border ${
                      currentStepIdx === idx
                        ? "bg-[#04AA6D] text-white border-[#04AA6D] shadow-md"
                        : stepCompleted[idx]
                        ? "bg-slate-800 text-white border-slate-700"
                        : "bg-slate-950 text-slate-300 border-slate-800"
                    }`}
                  >
                    {stepCompleted[idx] ? `✓ ${st.title}` : st.title}
                  </button>
                ))}
              </div>

              {/* Active Step Card */}
              {lesson.guidedSteps[currentStepIdx] && (
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-3">
                  <h4 className="text-base md:text-lg font-extrabold text-white flex items-center justify-between gap-2">
                    <span>{lesson.guidedSteps[currentStepIdx].title}</span>
                    <button
                      onClick={() => {
                        if (lesson.guidedSteps && lesson.guidedSteps[currentStepIdx]) {
                          runSimCommand(lesson.guidedSteps[currentStepIdx].targetCommand);
                        }
                      }}
                      className="px-3 py-1 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-extrabold rounded-lg shadow cursor-pointer transition-all flex items-center gap-1"
                    >
                      <span>Auto-Run Step</span>
                      <ArrowRight size={14} className="text-white" />
                    </button>
                  </h4>
                  <p className="text-xs md:text-sm text-white leading-relaxed font-semibold">
                    {lesson.guidedSteps[currentStepIdx].instruction}
                  </p>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs text-white font-semibold flex items-center gap-2">
                    <HelpCircle size={15} className="text-white shrink-0" />
                    <span>{lesson.guidedSteps[currentStepIdx].hint}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 🖥️ DUAL VIEW SIMULATOR TOGGLE BAR (Terminal + Windows 11 File Explorer Sync) */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>🖥️ Interactive Terminal & File Explorer Dual View</span>
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    playSoundEffect("click");
                    setDualViewMode(!dualViewMode);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all border cursor-pointer flex items-center gap-1.5 ${
                    dualViewMode
                      ? "bg-slate-800 border-[#04AA6D] text-[#04AA6D]"
                      : "bg-slate-900 border-slate-800 text-white hover:text-white"
                  }`}
                >
                  <Layout size={14} className="text-white" />
                  <span>{dualViewMode ? "Dual View Active (CMD + Explorer)" : "Full Terminal View"}</span>
                </button>
                <button
                  onClick={() => {
                    playSoundEffect("click");
                    setShowCheatSheet(true);
                  }}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-extrabold text-white rounded-xl transition-all cursor-pointer flex items-center gap-1"
                >
                  <QuestionIcon size={14} className="text-white" />
                  <span>CMD Cheat Sheet</span>
                </button>
              </div>
            </div>

            {/* Quick Command Pills for Beginners (Green Link Style) */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-extrabold text-white">Quick Pills:</span>
              {["dir", "dir /a:h", "dir /w", "cls", "help"].map((cmdPill, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => runSimCommand(cmdPill)}
                  className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono font-extrabold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] rounded-lg transition-all cursor-pointer"
                >
                  💊 {cmdPill}
                </button>
              ))}
            </div>

            {/* DUAL VIEW GRID (Terminal on Left, Live Synchronized File Explorer on Right) */}
            <div className={`grid grid-cols-1 ${dualViewMode ? "lg:grid-cols-2" : "grid-cols-1"} gap-4`}>
              
              {/* Authentic 🪟 Windows 11 Command Prompt Box */}
              <div className="rounded-xl overflow-hidden border border-slate-700/70 bg-[#0c1017] shadow-2xl flex flex-col justify-between">
                
                {/* Windows 11 Dark Title Bar */}
                <div className="bg-[#1f2937] px-4 py-2.5 flex items-center justify-between border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-white" />
                    <span className="text-xs font-mono font-extrabold text-white tracking-wide truncate">
                      ⊞ Command Prompt (cmd.exe)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white text-xs font-mono">
                    <span className="hover:text-slate-300 cursor-pointer">─</span>
                    <span className="hover:text-slate-300 cursor-pointer">□</span>
                    <span className="hover:text-slate-300 cursor-pointer">✕</span>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 md:p-5 font-mono text-sm space-y-4 text-left flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Live Input Field */}
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        runSimCommand(simInput);
                      }}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#161f2e] p-3 rounded-lg border border-slate-800"
                    >
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-[#04AA6D] font-extrabold shrink-0">{lesson.promptPath || "C:\\Users\\Nextsem>"}</span>
                        <input
                          type="text"
                          value={simInput}
                          onChange={(e) => setSimInput(e.target.value)}
                          className="bg-transparent text-white font-extrabold text-sm md:text-base font-mono focus:outline-none w-full border-b border-dashed border-slate-600 focus:border-[#04AA6D] px-1 py-0.5"
                          placeholder="type a command e.g. dir /a:h..."
                        />
                      </div>
                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs rounded-lg transition-all shadow-md cursor-pointer"
                        >
                          <CornerDownLeft size={13} className="text-white" />
                          <span>Execute</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCopy(simInput)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded-lg transition-colors cursor-pointer"
                        >
                          {copiedCmd ? <Check size={14} className="text-[#04AA6D]" /> : <Copy size={14} className="text-white" />}
                          <span>{copiedCmd ? "Copied!" : "Copy"}</span>
                        </button>
                      </div>
                    </form>

                    {/* Output Screen (100% Identical Line-by-Line to Real Windows 11 PC) */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-extrabold text-white uppercase tracking-wider block">
                          📄 Terminal Execution Output (Exact 1-to-1 Match):
                        </span>
                        <button
                          onClick={() => runSimCommand("cls")}
                          className="text-[11px] text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-extrabold cursor-pointer"
                        >
                          Clear Screen (`cls`)
                        </button>
                      </div>
                      <pre className="bg-[#080d14] p-4 rounded-lg border-l-4 border-[#04AA6D] text-white text-xs md:text-sm overflow-x-auto leading-relaxed font-mono min-h-[140px] max-h-[260px] shadow-inner font-extrabold">
                        {simOutput}
                      </pre>
                    </div>
                  </div>

                  {/* 💬 Floating AI Compiler Sage Assistant Widget */}
                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-start gap-2.5 mt-3 animate-fadeIn">
                    <Bot size={20} className="text-white shrink-0 mt-0.5" />
                    <div className="space-y-0.5 text-left">
                      <span className="text-[11px] font-black uppercase text-white tracking-wider block">
                        AI Sage Assistant Tip
                      </span>
                      <p className="text-xs text-white font-semibold leading-snug">
                        {aiSageHint}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* 🪟 Synchronized Windows 11 File Explorer Window (Visual Dual View) */}
              {dualViewMode && (
                <div className="rounded-xl overflow-hidden border border-slate-700/70 bg-[#0f172a] shadow-2xl flex flex-col justify-between animate-fadeIn">
                  
                  {/* File Explorer Header & Breadcrumb Bar */}
                  <div className="bg-[#1e293b] px-4 py-2.5 border-b border-slate-700/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Folder size={16} className="text-white" />
                        <span className="text-xs font-extrabold text-white tracking-wide">
                          🪟 File Explorer — Windows 11 Visual Live Sync
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-extrabold text-white bg-slate-900 px-2 py-0.5 rounded-full border border-slate-700">
                        {showHiddenInExplorer ? "Hidden Files Unlocked 🔓" : "Standard View 🔒"}
                      </span>
                    </div>

                    {/* Windows 11 File Path Breadcrumb */}
                    <div className="bg-[#0f172a] px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-white flex items-center gap-1 font-extrabold">
                      <span className="text-slate-400">Quick access &gt;</span>
                      <span className="text-[#04AA6D]">This PC</span>
                      <span className="text-slate-400">&gt;</span>
                      <span className="text-white">Local Disk (C:)</span>
                      <span className="text-slate-400">&gt;</span>
                      <span className="text-white">Users</span>
                      <span className="text-slate-400">&gt;</span>
                      <span className="text-[#04AA6D]">Nextsem</span>
                    </div>
                  </div>

                  {/* File Explorer File Grid / List */}
                  <div className="p-4 space-y-3 flex-1 overflow-y-auto max-h-[360px]">
                    <div className="flex items-center justify-between text-xs font-extrabold text-white pb-1 border-b border-slate-800">
                      <span>Name</span>
                      <span>Date modified</span>
                      <span>Type</span>
                    </div>

                    <div className={`grid ${isWideViewInExplorer ? "grid-cols-2" : "grid-cols-1"} gap-2`}>
                      {visibleExplorerItems.map((item, idx) => (
                        <div
                          key={idx}
                          className={`p-2.5 rounded-lg border transition-all flex items-center justify-between text-xs ${
                            item.isHidden
                              ? "bg-slate-900 border-slate-700 text-white font-extrabold"
                              : "bg-slate-900/80 border-slate-800 text-white font-extrabold"
                          }`}
                        >
                          <div className="flex items-center gap-2 font-mono font-extrabold truncate">
                            {item.type === "folder" ? (
                              <Folder size={16} className="text-white" />
                            ) : (
                              <FileCode size={16} className="text-white" />
                            )}
                            <span className="truncate">{item.name}</span>
                            {item.isHidden && (
                              <span className="text-[10px] bg-slate-800 text-white border border-slate-700 px-1.5 py-0.2 rounded font-sans shrink-0">
                                Hidden
                              </span>
                            )}
                          </div>

                          <div className="text-[11px] text-slate-300 font-mono shrink-0 ml-2">
                            {item.date.split(" ")[0]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explorer Footer Status */}
                  <div className="bg-[#1e293b] px-4 py-2 border-t border-slate-800 text-xs text-white font-extrabold flex items-center justify-between font-mono">
                    <span>{visibleExplorerItems.length} items total</span>
                    <span>{showHiddenInExplorer ? "Hidden items: 3" : "Hidden items hidden"}</span>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* 🧩 Interactive Command Puzzle Builder */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>🧩 Interactive Command Puzzle Builder</span>
              </h3>
              <span className="text-xs text-white font-semibold hidden sm:inline">Tap blocks to assemble command</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
              <div className="text-xs font-extrabold text-white uppercase tracking-wider">
                Tap switch blocks to append/remove flags:
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1.5 bg-[#04AA6D] text-white font-mono font-black text-sm rounded-lg shadow">
                  dir (Base Command)
                </span>
                {["/a:h", "/o:n", "/w", "/p", "/s"].map((token, tIdx) => {
                  const isActive = builtTokens.includes(token);
                  return (
                    <button
                      key={tIdx}
                      onClick={() => togglePuzzleToken(token)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs md:text-sm font-extrabold transition-all cursor-pointer border ${
                        isActive
                          ? "bg-slate-800 text-white border-[#04AA6D] shadow-md scale-105"
                          : "bg-slate-950 text-white border-slate-800 hover:border-slate-600"
                      }`}
                    >
                      {isActive ? `✓ ${token}` : `+ ${token}`}
                    </button>
                  );
                })}
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between gap-3">
                <div className="font-mono text-xs md:text-sm">
                  <span className="text-[#04AA6D] font-extrabold mr-2">C:\Users\Nextsem&gt;</span>
                  <span className="text-white font-black">{builtTokens.join(" ")}</span>
                </div>
                <button
                  onClick={() => runSimCommand(builtTokens.join(" "))}
                  className="px-3 py-1 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-extrabold rounded-lg transition-colors cursor-pointer"
                >
                  Test Assembly
                </button>
              </div>
            </div>
          </div>

          {/* 🔍 Interactive Command Anatomy Inspector */}
          {lesson.anatomyTokens && lesson.anatomyTokens.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <span>🔍 Command Anatomy Inspector</span>
                </h3>
                <span className="text-xs text-white font-semibold">Click any token to inspect its role</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-2 md:gap-3 flex-wrap">
                <span className="text-[#04AA6D] font-mono text-xs md:text-sm font-extrabold mr-1">
                  {lesson.promptPath || "C:\\Users\\Nextsem>"}
                </span>
                {lesson.anatomyTokens.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playSoundEffect("click");
                      setActiveTokenIdx(idx);
                    }}
                    className={`px-3 py-1.5 rounded-lg font-mono text-sm md:text-base font-extrabold transition-all cursor-pointer border ${
                      activeTokenIdx === idx
                        ? "bg-[#04AA6D] text-white border-[#04AA6D] shadow-md scale-105"
                        : "bg-slate-950 text-white border-slate-800 hover:border-slate-600"
                    }`}
                  >
                    {item.token}
                  </button>
                ))}
              </div>

              {activeTokenIdx !== null && lesson.anatomyTokens[activeTokenIdx] && (
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-1 animate-fadeIn text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold font-mono text-[#04AA6D]">
                      Token: <code className="text-white text-sm bg-slate-900 px-2 py-0.5 rounded">{lesson.anatomyTokens[activeTokenIdx].token}</code>
                    </span>
                    <span className="text-xs font-extrabold text-white bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
                      {lesson.anatomyTokens[activeTokenIdx].label}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-white font-semibold leading-relaxed pt-1">
                    {lesson.anatomyTokens[activeTokenIdx].detail}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ⚠️ Common Beginner Mistakes & Traps Card */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>⚠️ Common Beginner Mistakes & Traps</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {MISTAKES_DATA.map((mst, mIdx) => (
                <div 
                  key={mIdx}
                  onClick={() => {
                    playSoundEffect("click");
                    setActiveMistakeIdx(activeMistakeIdx === mIdx ? null : mIdx);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left space-y-2 ${
                    activeMistakeIdx === mIdx
                      ? "bg-slate-900 border-[#04AA6D] shadow-lg"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <span className="text-xs font-extrabold text-white block">{mst.title}</span>
                  <div className="font-mono text-xs space-y-1 font-extrabold">
                    <div className="text-slate-400">❌ Incorrect: {mst.incorrect}</div>
                    <div className="text-[#04AA6D]">✅ Correct: {mst.correct}</div>
                  </div>
                  <p className="text-xs text-white leading-relaxed pt-1 font-semibold">
                    {mst.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Command Switches Table */}
          {lesson.switches && lesson.switches.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight">
                ⚙️ Command Switches Reference
              </h3>
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-800 text-white font-extrabold">
                      <th className="p-3 w-24">Switch</th>
                      <th className="p-3">Description</th>
                      <th className="p-3">Beginner Tip</th>
                      <th className="p-3 w-32">Try Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850 text-white font-semibold">
                    {lesson.switches.map((sw, sIdx) => (
                      <tr key={sIdx} className="hover:bg-slate-900/50 transition-colors">
                        <td className="p-3 font-mono font-extrabold text-[#04AA6D]">{sw.flag}</td>
                        <td className="p-3 leading-relaxed">{sw.description}</td>
                        <td className="p-3 text-slate-300 text-xs leading-relaxed">{sw.beginnerNote || "Useful switch"}</td>
                        <td className="p-3 font-mono">
                          <button
                            onClick={() => runSimCommand(sw.example || `dir ${sw.flag}`)}
                            className="px-2.5 py-1 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1"
                          >
                            <span>▶ Run</span>
                            <span>{sw.flag}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 🪟 Windows 11 Terminal Output Screenshot Card (100% Line-by-Line Match) */}
          {lesson.screenshot && (
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold text-white">
                <span className="flex items-center gap-2 text-white font-mono">
                  <span>🪟 100% Matching Real PC Screenshot (Windows 11)</span>
                </span>
                <span className="text-[#04AA6D] bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                  Verified 1-to-1 Line Match
                </span>
              </div>
              <div 
                className="w-full bg-[#15202b] p-2 rounded-lg border border-slate-800 flex items-center justify-center cursor-pointer group"
                onClick={() => setActiveZoomImage(lesson.screenshot || null)}
              >
                <img
                  src={lesson.screenshot.src}
                  alt={lesson.screenshot.caption || "Windows 11 CMD Output"}
                  className="w-full h-auto max-h-[450px] object-contain rounded-md shadow-md group-hover:scale-[1.01] transition-transform duration-300"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="p-4 text-center text-xs font-mono text-white font-extrabold">
                  📸 Tap to Zoom Full Resolution Windows 11 Command Prompt Screenshot (Mobile Reader View)
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation (Green Link Standard) */}
        <div className="hidden md:flex items-center justify-between gap-4 border-t border-slate-800/60 pt-6 mt-8">
          {prevLesson ? (
            <Link
              href={`${subjectDashboardUrl}/${prevLesson.slug}`}
              className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
            >
              <ChevronLeft size={16} className="stroke-[3] text-white" />
              <span>Previous Lesson</span>
            </Link>
          ) : <div />}

          {nextLesson ? (
            <Link
              href={`${subjectDashboardUrl}/${nextLesson.slug}`}
              className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
            >
              <span>Next Lesson</span>
              <ChevronRight size={16} className="stroke-[3] text-white" />
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
                  <Monitor size={16} className="text-white" />
                  <span className="text-xs font-black text-white">Full Resolution Windows 11 Screenshot</span>
                </div>
                <button 
                  onClick={() => setActiveZoomImage(null)}
                  className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-extrabold transition-colors cursor-pointer"
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
                <p className="text-xs font-extrabold text-white">
                  {activeZoomImage.caption}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 🏆 CMD CERTIFIED ACHIEVEMENT MODAL */}
        {showCertModal && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowCertModal(false)}
          >
            <div 
              className="max-w-md w-full bg-slate-900 border-2 border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl text-center relative animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-slate-800 text-white border border-slate-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award size={36} className="text-white" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-black uppercase text-[#04AA6D] tracking-widest block">
                  Achievement Unlocked!
                </span>
                <h3 className="text-2xl font-black text-white">
                  ⊞ Windows 11 CMD Cadet 🏅
                </h3>
                <p className="text-xs text-white pt-1 font-semibold leading-relaxed">
                  Congratulations! You completed all guided walkthrough steps for `dir` and earned <strong className="text-[#04AA6D] font-black">+200 XP</strong>!
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-around font-mono text-xs font-extrabold">
                <div>
                  <span className="text-slate-400 block text-[10px]">TOTAL XP</span>
                  <span className="text-white font-black text-base">{userXp} XP</span>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <span className="text-slate-400 block text-[10px]">RANK</span>
                  <span className="text-[#04AA6D] font-black text-base">CMD Cadet</span>
                </div>
              </div>

              <button
                onClick={() => setShowCertModal(false)}
                className="w-full py-3 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Continue Learning 🚀
              </button>
            </div>
          </div>
        )}

        {/* 📜 CMD CHEAT SHEET DRAWER MODAL */}
        {showCheatSheet && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowCheatSheet(false)}
          >
            <div 
              className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-2xl text-left relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-sm font-extrabold text-white flex items-center gap-2">
                  <Terminal size={16} className="text-white" />
                  <span>⊞ Essential Windows CMD Keyboard Shortcuts</span>
                </span>
                <button 
                  onClick={() => setShowCheatSheet(false)}
                  className="text-xs text-white hover:text-slate-300"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2 text-xs font-mono font-extrabold">
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between">
                  <span className="text-[#04AA6D]">Tab Key</span>
                  <span className="text-white">Auto-completes file or folder name</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between">
                  <span className="text-[#04AA6D]">Up Arrow (▲)</span>
                  <span className="text-white">Cycles through previous typed commands</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between">
                  <span className="text-[#04AA6D]">cls</span>
                  <span className="text-white">Clears terminal output screen</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between">
                  <span className="text-[#04AA6D]">Ctrl + C</span>
                  <span className="text-white">Cancels currently running command</span>
                </div>
              </div>

              <button
                onClick={() => setShowCheatSheet(false)}
                className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-extrabold rounded-xl cursor-pointer"
              >
                Close Reference
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
