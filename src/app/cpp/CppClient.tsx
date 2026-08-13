"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Terminal, Code2, ArrowLeft, LogOut, Search, Play, 
  CheckCircle2, Lock, Menu, X, ChevronRight, RefreshCw, Award, Cpu, BookOpen
} from "lucide-react";
import { auth, signInWithGoogle } from "@/lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { cppLessons, CppLesson } from "@/data/cppLessonsData";

interface CppStepType {
  id: string;
  title: string;
  instruction: string;
  expectedCommand: string;
  hint: string;
  successMsg: string;
}

const CPP_SIMULATOR_STEPS: CppStepType[] = [
  {
    id: "version",
    title: "Check g++ Compiler Version",
    instruction: "Verify that the MinGW / GCC C++ compiler is installed on 🪟 Windows 11. Type `g++ --version` and press Enter.",
    expectedCommand: "g++ --version",
    hint: "g++ --version",
    successMsg: "g++ (Rev2, Built by MSYS2 project) 13.2.0\nCopyright (C) 2023 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions."
  },
  {
    id: "compile",
    title: "Compile C++ Source Code",
    instruction: "Compile `main.cpp` into a high-performance Windows executable `main.exe`. Type `g++ -o main.exe main.cpp` and press Enter.",
    expectedCommand: "g++ -o main.exe main.cpp",
    hint: "g++ -o main.exe main.cpp",
    successMsg: "Compiling main.cpp...\nCompilation successful! Created executable main.exe [0 warnings, 0 errors]"
  },
  {
    id: "run",
    title: "Run C++ Executable",
    instruction: "Execute your compiled `main.exe` binary in 🪟 Windows Command Prompt. Type `main.exe` and press Enter.",
    expectedCommand: "main.exe",
    hint: "main.exe",
    successMsg: "Hello, World from C++ on 🪟 Windows 11!\n[Process exited with code 0 in 0.002 seconds]"
  },
  {
    id: "optimize",
    title: "Compile with O3 Max Optimization",
    instruction: "Compile with release optimization flags for maximum speed execution. Type `g++ -O3 main.cpp -o main_opt.exe` and press Enter.",
    expectedCommand: "g++ -O3 main.cpp -o main_opt.exe",
    hint: "g++ -O3 main.cpp -o main_opt.exe",
    successMsg: "g++ -O3: Loop unrolling & SIMD vectorization enabled.\nGenerated main_opt.exe (Execution time optimized by 3.8x)!"
  }
];

export default function CppClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUnit, setSelectedUnit] = useState<string>("all");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulator State
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [commandInput, setCommandInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Microsoft Windows [Version 10.0.22631.3007]",
    "(c) Microsoft Corporation. All rights reserved.",
    "",
    "⚡ Welcome to NextSem C++ Compiler CLI Simulator!",
    "Type the required command below to complete each interactive step."
  ]);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const currentStep = CPP_SIMULATOR_STEPS[currentStepIndex];

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = commandInput.trim();
    if (!trimmed) return;

    const newLogs = [...terminalOutput, `C:\\NextSem\\CPP> ${commandInput}`];

    if (trimmed.toLowerCase() === currentStep.expectedCommand.toLowerCase()) {
      newLogs.push(`✅ SUCCESS: ${currentStep.successMsg}`);
      if (!completedSteps.includes(currentStep.id)) {
        setCompletedSteps((prev) => [...prev, currentStep.id]);
      }
      if (currentStepIndex < CPP_SIMULATOR_STEPS.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
        setShowHint(false);
      } else {
        newLogs.push("");
        newLogs.push("🏆 CONGRATULATIONS! You completed all C++ Compiler CLI steps!");
      }
    } else {
      newLogs.push(`❌ ERROR: Command '${trimmed}' not recognized or incorrect.`);
      newLogs.push(`💡 HINT: Try typing '${currentStep.expectedCommand}'`);
    }

    setTerminalOutput(newLogs);
    setCommandInput("");
  };

  const filteredLessons = cppLessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.unit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.contentBody.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesUnit = selectedUnit === "all" || lesson.unit.includes(selectedUnit);

    return matchesSearch && matchesUnit;
  });

  const unitsList = [
    { id: "all", label: "All Lessons (20)" },
    { id: "Unit 1", label: "Unit 1: Foundations & Windows 11 Setup" },
    { id: "Unit 2", label: "Unit 2: Loops, Functions & Scope" },
    { id: "Unit 3", label: "Unit 3: Memory, Pointers & References" },
    { id: "Unit 4", label: "Unit 4: OOP, Classes & Inheritance" },
    { id: "Unit 5", label: "Unit 5: STL, Exception & Smart Pointers" }
  ];

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans">
      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-[#17181c]/90 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 bg-slate-800/60 hover:bg-slate-700/80 rounded-xl transition-colors text-slate-300 hover:text-white">
              <ArrowLeft size={18} />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#04AA6D] font-black text-sm">
                C++
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">C++ Systems Programming</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-xs font-bold text-slate-300 hover:text-[#04AA6D] transition-colors">
              Home
            </Link>
            <Link href="/html" className="text-xs font-bold text-slate-300 hover:text-[#04AA6D] transition-colors">
              HTML5
            </Link>
            <Link href="/cli" className="text-xs font-bold text-slate-300 hover:text-[#04AA6D] transition-colors">
              Windows CLI
            </Link>
            <Link href="/git" className="text-xs font-bold text-slate-300 hover:text-[#04AA6D] transition-colors">
              Git & GitHub
            </Link>
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-200">{user.displayName || user.email}</span>
                <button
                  onClick={() => signOut(auth)}
                  className="p-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-bold transition-all"
                >
                  <LogOut size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-extrabold transition-all shadow-md"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-8">
        {/* Hero Card */}
        <div className="bg-gradient-to-r from-slate-900 via-[#1d2a35] to-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-black text-[#04AA6D] uppercase tracking-wider">
              <Cpu size={14} />
              <span>Full Stack C++ Systems Curriculum 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Master C++ Programming & High-Performance Engineering
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Step-by-step developer lessons covering <strong className="text-white font-bold">GCC / MinGW on 🪟 Windows 11</strong>, dynamic memory management, pointers, references, object-oriented inheritance, virtual functions, and the Standard Template Library (STL).
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#lessons-grid" className="px-6 py-3 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#04AA6D]/20">
                Explore 20 Master Lessons »
              </a>
              <a href="#cpp-simulator" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-slate-700 transition-all">
                Try Live Compiler Simulator
              </a>
            </div>
          </div>
        </div>

        {/* Interactive C++ CLI Simulator Widget */}
        <section id="cpp-simulator" className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-[#04AA6D]">
                <Terminal size={22} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">🪟 Windows 11 C++ Compiler Terminal Simulator</h2>
                <p className="text-xs text-slate-400">Step {currentStepIndex + 1} of {CPP_SIMULATOR_STEPS.length}: {currentStep.title}</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              Step {currentStepIndex + 1}/{CPP_SIMULATOR_STEPS.length}
            </span>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-xs space-y-2">
            <p className="text-slate-200 font-medium">{currentStep.instruction}</p>
            {showHint && (
              <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 font-mono text-xs">
                💡 Required Command: <code className="text-white font-bold">{currentStep.expectedCommand}</code>
              </div>
            )}
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-[11px] font-bold text-emerald-400 hover:underline cursor-pointer"
            >
              {showHint ? "Hide Hint" : "Show Command Hint"}
            </button>
          </div>

          {/* Terminal Box */}
          <div className="bg-[#0c0c0c] border border-slate-800 rounded-2xl overflow-hidden font-mono text-xs shadow-2xl">
            {/* Titlebar */}
            <div className="bg-[#1f1f1f] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-slate-400 text-xs">
              <span className="flex items-center gap-2 text-white font-bold">
                <span className="text-[#04AA6D]">⊞</span> Administrator: g++ C++ Compiler Terminal
              </span>
              <span>cmd.exe</span>
            </div>

            {/* Console Output */}
            <div className="p-4 h-56 overflow-y-auto space-y-1 text-slate-200 leading-relaxed">
              {terminalOutput.map((outLine, idx) => (
                <div key={idx} className={outLine.startsWith("✅") ? "text-emerald-400 font-bold" : outLine.startsWith("❌") ? "text-rose-400 font-bold" : "text-slate-300"}>
                  {outLine}
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleCommandSubmit} className="flex items-center border-t border-slate-800 bg-[#121212] px-4 py-2">
              <span className="text-[#04AA6D] font-bold mr-2">C:\NextSem\CPP&gt;</span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder={`Type '${currentStep.expectedCommand}'...`}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0"
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Run
              </button>
            </form>
          </div>
        </section>

        {/* Filter & Search Bar Section */}
        <section id="lessons-grid" className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">C++ Curriculum Lessons</h2>
              <p className="text-xs text-slate-400">Select a lesson to start learning with code examples, Windows compilation, and interactive check tasks.</p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search C++ lessons, pointers, vector..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#04AA6D] transition-colors"
              />
            </div>
          </div>

          {/* Unit Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {unitsList.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setSelectedUnit(unit.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedUnit === unit.id
                    ? "bg-[#04AA6D] text-white shadow-md shadow-[#04AA6D]/20"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {unit.label}
              </button>
            ))}
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/cpp/${lesson.slug}`}
                className="group p-5 bg-slate-900/60 border border-slate-850 hover:border-[#04AA6D]/50 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:bg-slate-900 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#04AA6D] bg-[#04AA6D]/10 border border-[#04AA6D]/30 px-2.5 py-0.5 rounded-full">
                      {lesson.unit}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">Lesson #{lesson.id}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl p-2 bg-slate-800/80 rounded-xl border border-slate-700/60">{lesson.icon}</span>
                    <div className="space-y-1">
                      <h3 className="text-base font-extrabold text-white group-hover:text-[#04AA6D] transition-colors leading-snug">
                        {lesson.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {lesson.contentBody.replace(/[#*`_-]/g, "").substring(0, 140)}...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold text-[#04AA6D] group-hover:text-emerald-400">
                  <span>Start Lesson »</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
