"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Terminal, Code2, ArrowLeft, LogOut, Search, Play, 
  CheckCircle2, Lock, Menu, X, ChevronRight, RefreshCw, Award, Cpu, 
  Layers, HardDrive, Zap, Eye, LayoutGrid, GitCommit, ShieldCheck, Box, Activity
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
    instruction: "Verify that the MinGW / GCC C++ compiler is installed on ⊞ Windows 11. Type `g++ --version` and press Enter.",
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
    instruction: "Execute your compiled `main.exe` binary in ⊞ Windows Command Prompt. Type `main.exe` and press Enter.",
    expectedCommand: "main.exe",
    hint: "main.exe",
    successMsg: "Hello, World from C++ on ⊞ Windows 11!\n[Process exited with code 0 in 0.002 seconds]"
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

const CODE_PLAYGROUND_SNIPPETS = [
  {
    id: "hello",
    label: "1. Hello World (iostream)",
    code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, C++ Systems Studio on ⊞ Windows 11!" << std::endl;\n    return 0;\n}`,
    output: `Hello, C++ Systems Studio on ⊞ Windows 11!\n[Process exited with code 0 in 0.001s]`
  },
  {
    id: "pointers",
    label: "2. Pointer Swap (Memory &)",
    code: `#include <iostream>\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 99;\n    swap(x, y);\n    std::cout << "x = " << x << ", y = " << y << std::endl;\n    return 0;\n}`,
    output: `x = 99, y = 10\n[Stack memory swapped in-place without copying]`
  },
  {
    id: "vector",
    label: "3. STL vector & sort()",
    code: `#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {45, 12, 89, 3, 67};\n    std::sort(nums.begin(), nums.end());\n    for(int n : nums) std::cout << n << " ";\n    return 0;\n}`,
    output: `3 12 45 67 89 \n[STL std::sort O(N log N) complete]`
  },
  {
    id: "smart_ptr",
    label: "4. Smart Pointer (std::unique_ptr)",
    code: `#include <iostream>\n#include <memory>\n\nint main() {\n    auto ptr = std::make_unique<int>(100);\n    std::cout << "Value: " << *ptr << " at Heap Address: " << ptr.get() << std::endl;\n    return 0;\n} // Automatically destructed (Zero Leaks!)`,
    output: `Value: 100 at Heap Address: 0x00a184f0\n[RAII: Heap memory freed automatically]`
  }
];

export default function CppClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUnit, setSelectedUnit] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "roadmap">("grid");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Simulator State
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [commandInput, setCommandInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Microsoft Windows [Version 10.0.22631.3007]",
    "(c) Microsoft Corporation. All rights reserved.",
    "",
    "⚡ Welcome to C++ Systems Engineering Studio Terminal!",
    "Type the required command below to complete each interactive step."
  ]);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [activeTerminalTab, setActiveTerminalTab] = useState<"cmd" | "asm" | "flags">("cmd");

  // Code Playground State
  const [selectedSnippetIdx, setSelectedSnippetIdx] = useState(0);
  const [playgroundOutput, setPlaygroundOutput] = useState("");
  const [isRunningSnippet, setIsRunningSnippet] = useState(false);

  // Memory Visualizer State
  const [activeMemType, setActiveMemType] = useState<"stack" | "heap" | "pointer">("stack");

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

  const handleRunPlayground = () => {
    setIsRunningSnippet(true);
    setPlaygroundOutput("Compiling g++ snippet with -std=c++20 ...");
    setTimeout(() => {
      setPlaygroundOutput(CODE_PLAYGROUND_SNIPPETS[selectedSnippetIdx].output);
      setIsRunningSnippet(false);
    }, 400);
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
      {/* Telemetry Header Bar */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 py-1.5 text-[11px] font-mono text-slate-400 flex items-center justify-between overflow-x-auto select-none">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>C++ STUDIO ONLINE</span>
          </span>
          <span className="text-slate-500">|</span>
          <span className="flex items-center gap-1 text-slate-300">
            <Cpu size={12} className="text-blue-400" />
            <span>Compiler: MinGW GCC 13.2.0</span>
          </span>
          <span className="text-slate-500">|</span>
          <span className="flex items-center gap-1 text-slate-300">
            <Zap size={12} className="text-amber-400" />
            <span>Standard: C++20 ISO</span>
          </span>
          <span className="text-slate-500">|</span>
          <span className="flex items-center gap-1 text-slate-300">
            <HardDrive size={12} className="text-purple-400" />
            <span>Stack Base: 0x7ffd10</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
            Build Engine 100% Ready
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#17181c]/95 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 bg-slate-800/60 hover:bg-slate-700/80 rounded-xl transition-colors text-slate-300 hover:text-white">
              <ArrowLeft size={18} />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 flex items-center justify-center text-[#04AA6D] font-black text-base shadow-lg shadow-emerald-500/10">
                C++
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block leading-tight">C++ Systems Studio</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Low-Level High-Performance Engine</span>
              </div>
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
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-10">
        {/* Dual-Column Cyber Hero Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Cyber Banner */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-[#151f28] to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-black text-[#04AA6D] uppercase tracking-wider">
                  <Cpu size={14} />
                  <span>Systems Architecture 2026</span>
                </span>
                <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-[11px] font-mono font-bold text-blue-400">
                  ⊞ Windows 11 x86_64
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                C++ High-Performance & Systems Engineering
              </h1>

              <p className="text-slate-300 text-sm leading-relaxed">
                Master hardware-level execution, <strong className="text-white font-bold">pointers & memory addressing</strong>, dynamic heap allocations, object-oriented inheritance, virtual function tables, and modern <strong className="text-white font-bold">C++20 STL containers</strong>.
              </p>

              {/* Live Memory Telemetry Meter */}
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Stack & Heap Allocation Meter</span>
                  <span className="text-emerald-400 font-bold">0x7ffd10 &rarr; 0x00a120</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden flex border border-slate-800">
                  <div className="h-full bg-emerald-500 w-1/3" title="Stack Segment"></div>
                  <div className="h-full bg-blue-500 w-1/4" title="Heap Segment"></div>
                  <div className="h-full bg-purple-500 w-1/6" title="BSS / Data Segment"></div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Stack (33%)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Heap (25%)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Text/Data (16%)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6">
              <a href="#lessons-grid" className="px-6 py-3 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#04AA6D]/20 flex items-center gap-2">
                <span>Explore 20 Master Lessons</span>
                <ChevronRight size={16} />
              </a>
              <a href="#code-playground" className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl border border-slate-700 transition-all flex items-center gap-2">
                <Code2 size={16} />
                <span>Try Code Playground</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tabbed Terminal Studio */}
          <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-3xl p-5 shadow-2xl flex flex-col justify-between space-y-4">
            {/* Terminal Tab Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTerminalTab("cmd")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeTerminalTab === "cmd"
                      ? "bg-[#04AA6D] text-white"
                      : "bg-slate-950 text-slate-400 hover:text-white"
                  }`}
                >
                  ⊞ CMD Terminal
                </button>
                <button
                  onClick={() => setActiveTerminalTab("asm")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeTerminalTab === "asm"
                      ? "bg-[#04AA6D] text-white"
                      : "bg-slate-950 text-slate-400 hover:text-white"
                  }`}
                >
                  ⚡ Assembly (x86_64)
                </button>
                <button
                  onClick={() => setActiveTerminalTab("flags")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeTerminalTab === "flags"
                      ? "bg-[#04AA6D] text-white"
                      : "bg-slate-950 text-slate-400 hover:text-white"
                  }`}
                >
                  🛠️ g++ Flags
                </button>
              </div>

              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
                Step {currentStepIndex + 1}/{CPP_SIMULATOR_STEPS.length}
              </span>
            </div>

            {/* Tab 1: CMD Terminal */}
            {activeTerminalTab === "cmd" && (
              <div className="space-y-3">
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs space-y-1.5">
                  <p className="text-slate-200 font-medium">{currentStep.instruction}</p>
                  {showHint && (
                    <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded text-amber-300 font-mono text-[11px]">
                      💡 Type: <code className="text-white font-bold">{currentStep.expectedCommand}</code>
                    </div>
                  )}
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-[11px] font-bold text-emerald-400 hover:underline cursor-pointer"
                  >
                    {showHint ? "Hide Hint" : "Show Command Hint"}
                  </button>
                </div>

                <div className="bg-[#0c0c0c] border border-slate-800 rounded-xl overflow-hidden font-mono text-xs shadow-inner">
                  <div className="bg-[#1a1a1a] px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5 text-white font-bold">
                      <span className="text-[#04AA6D]">⊞</span> Administrator: g++ Compiler Terminal
                    </span>
                    <span>cmd.exe</span>
                  </div>
                  <div className="p-3 h-44 overflow-y-auto space-y-1 text-slate-200 text-[11px] leading-relaxed">
                    {terminalOutput.map((outLine, idx) => (
                      <div key={idx} className={outLine.startsWith("✅") ? "text-emerald-400 font-bold" : outLine.startsWith("❌") ? "text-rose-400 font-bold" : "text-slate-300"}>
                        {outLine}
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleCommandSubmit} className="flex items-center border-t border-slate-800 bg-[#121212] px-3 py-1.5">
                    <span className="text-[#04AA6D] font-bold mr-2 text-[11px]">C:\NextSem\CPP&gt;</span>
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      placeholder={`Type '${currentStep.expectedCommand}'...`}
                      className="flex-1 bg-transparent border-none outline-none text-white font-mono text-[11px] focus:ring-0"
                    />
                    <button type="submit" className="px-3 py-1 bg-[#04AA6D] hover:bg-[#039861] text-white font-bold text-[11px] rounded transition-colors cursor-pointer">
                      Run
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Tab 2: Assembly View */}
            {activeTerminalTab === "asm" && (
              <div className="bg-[#0c0c0c] border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 space-y-2 h-64 overflow-y-auto">
                <div className="text-emerald-400 font-bold border-b border-slate-800 pb-1">
                  ; Assembly Disassembly View (x86_64 System V ABI)
                </div>
                <pre className="text-[11px] text-slate-300 leading-relaxed">
{`main:
    push    rbp
    mov     rbp, rsp
    sub     rsp, 16
    mov     DWORD PTR [rbp-4], 42       ; int x = 42
    lea     rax, [rbp-4]                ; rax = &x (memory address)
    mov     QWORD PTR [rbp-16], rax     ; int *ptr = &x
    mov     rax, QWORD PTR [rbp-16]     ; dereference ptr
    mov     esi, DWORD PTR [rax]
    mov     edi, OFFSET FLAT:_ZSt4cout
    call    _ZNSolsEi                   ; std::cout << *ptr
    mov     eax, 0
    leave
    ret`}
                </pre>
              </div>
            )}

            {/* Tab 3: Compiler Flags */}
            {activeTerminalTab === "flags" && (
              <div className="bg-[#0c0c0c] border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 space-y-2.5 h-64 overflow-y-auto">
                <div className="text-emerald-400 font-bold border-b border-slate-800 pb-1">
                  🛠️ Standard g++ Optimization & Safety Flags
                </div>
                <div className="space-y-2 text-[11px]">
                  <div className="p-2 bg-slate-950 rounded border border-slate-800">
                    <span className="text-emerald-400 font-bold">-std=c++20</span>: Enables latest ISO C++20 language standards & concepts.
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800">
                    <span className="text-blue-400 font-bold">-O3</span>: Maximum release optimization (loop unrolling & SIMD vectorization).
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800">
                    <span className="text-amber-400 font-bold">-Wall -Wextra</span>: Enables all compiler warning diagnostics.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Interactive Stack vs Heap Memory & Pointer Visualizer Widget */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-[#04AA6D]">
                <Layers size={22} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">Interactive C++ Memory & Pointer Visualizer</h2>
                <p className="text-xs text-slate-400">Visualize physical RAM addressing, Stack frame allocation, and Heap dynamic pointers</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveMemType("stack")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeMemType === "stack" ? "bg-[#04AA6D] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Stack Memory
              </button>
              <button
                onClick={() => setActiveMemType("heap")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeMemType === "heap" ? "bg-[#04AA6D] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Heap (new/delete)
              </button>
              <button
                onClick={() => setActiveMemType("pointer")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeMemType === "pointer" ? "bg-[#04AA6D] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Pointer Aliasing
              </button>
            </div>
          </div>

          {/* Interactive Memory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-emerald-400 font-bold border-b border-slate-800 pb-2">
                <span>📍 Stack Address</span>
                <span>Variable & Value</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-emerald-500/30 flex items-center justify-between">
                <span className="text-slate-400">0x7ffd10</span>
                <span className="text-white font-bold">int age = 25;</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-blue-500/30 flex items-center justify-between">
                <span className="text-slate-400">0x7ffd14</span>
                <span className="text-white font-bold">double gpa = 3.92;</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-purple-500/30 flex items-center justify-between">
                <span className="text-slate-400">0x7ffd1c</span>
                <span className="text-amber-400 font-bold">int *ptr = 0x00a120;</span>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-blue-400 font-bold border-b border-slate-800 pb-2">
                <span>🌐 Heap Memory Pool</span>
                <span>Dynamic Allocation</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-[#04AA6D]/40 flex items-center justify-between">
                <span className="text-slate-400">0x00a120</span>
                <span className="text-emerald-400 font-bold">new int[100] (Array Data)</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">0x00a180</span>
                <span className="text-slate-300">Widget Object (make_unique)</span>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between text-slate-500">
                <span>0x00a1f0</span>
                <span>[Unallocated Heap RAM]</span>
              </div>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-purple-400 font-bold border-b border-slate-800 pb-2 mb-3">
                  💡 Memory Safety Takeaway
                </div>
                <p className="text-slate-300 text-xs leading-relaxed font-sans">
                  {activeMemType === "stack" && "Stack memory is fast and automatically managed when function scopes exit."}
                  {activeMemType === "heap" && "Heap memory allocated via new MUST be freed with delete or delete[] to prevent memory leaks."}
                  {activeMemType === "pointer" && "Pointers store hex memory addresses (&var) and dereference (*) to access target values."}
                </p>
              </div>
              <div className="p-3 bg-[#04AA6D]/10 border border-[#04AA6D]/30 rounded-xl text-[#04AA6D] text-[11px] font-bold">
                ✓ Smart Pointers (std::unique_ptr) manage Heap memory automatically in C++20!
              </div>
            </div>
          </div>
        </section>

        {/* Live Interactive Code Playground Section */}
        <section id="code-playground" className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-[#04AA6D]">
                <Code2 size={22} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">Live C++ Code Playground Studio</h2>
                <p className="text-xs text-slate-400">Test standard C++ code snippets with instant compilation simulation</p>
              </div>
            </div>

            <button
              onClick={handleRunPlayground}
              disabled={isRunningSnippet}
              className="px-6 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#04AA6D]/20 flex items-center gap-2 cursor-pointer"
            >
              <Play size={16} />
              <span>{isRunningSnippet ? "Compiling..." : "Run Snippet (g++)"}</span>
            </button>
          </div>

          {/* Snippet Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CODE_PLAYGROUND_SNIPPETS.map((snip, idx) => (
              <button
                key={snip.id}
                onClick={() => {
                  setSelectedSnippetIdx(idx);
                  setPlaygroundOutput("");
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedSnippetIdx === idx
                    ? "bg-[#04AA6D] text-white shadow-md"
                    : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {snip.label}
              </button>
            ))}
          </div>

          {/* Editor & Output Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-mono text-xs">
            {/* Editor Box */}
            <div className="bg-[#0c0c0c] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-[#1f1f1f] px-4 py-2 border-b border-slate-800 text-slate-400 flex items-center justify-between text-xs">
                <span>📄 main.cpp</span>
                <span className="text-emerald-400">C++20</span>
              </div>
              <pre className="p-4 text-slate-200 leading-relaxed overflow-x-auto h-52">
                {CODE_PLAYGROUND_SNIPPETS[selectedSnippetIdx].code}
              </pre>
            </div>

            {/* Output Box */}
            <div className="bg-[#0c0c0c] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="bg-[#1f1f1f] px-4 py-2 border-b border-slate-800 text-slate-400 flex items-center justify-between text-xs">
                <span>🖥️ Execution Output</span>
                <span>Exit Code: 0</span>
              </div>
              <div className="p-4 text-emerald-400 leading-relaxed h-52 overflow-y-auto">
                {playgroundOutput || (
                  <span className="text-slate-500 font-sans text-xs italic">
                    Click 'Run Snippet (g++)' above to compile and execute this code snippet.
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar Section */}
        <section id="lessons-grid" className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">C++ Curriculum Lessons</h2>
              <p className="text-xs text-slate-400">Select a lesson to start learning with code examples, Windows compilation, and interactive check tasks.</p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-slate-950 border border-slate-800 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "grid" ? "bg-[#04AA6D] text-white" : "text-slate-400 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewMode("roadmap")}
                  className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === "roadmap" ? "bg-[#04AA6D] text-white" : "text-slate-400 hover:text-white"
                  }`}
                  title="Roadmap View"
                >
                  <GitCommit size={16} />
                </button>
              </div>

              {/* Search Input */}
              <div className="relative flex-1 md:w-80">
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

          {/* Lessons Render: Grid View vs Roadmap View */}
          {viewMode === "grid" ? (
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
          ) : (
            /* Roadmap Timeline View */
            <div className="space-y-4 relative border-l-2 border-slate-800 ml-4 pl-6">
              {filteredLessons.map((lesson) => (
                <div key={lesson.id} className="relative group">
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[31px] top-4 w-4 h-4 rounded-full bg-slate-900 border-2 border-[#04AA6D] group-hover:bg-[#04AA6D] transition-colors"></div>

                  <Link
                    href={`/cpp/${lesson.slug}`}
                    className="block p-5 bg-slate-900/60 border border-slate-850 hover:border-[#04AA6D]/50 rounded-2xl transition-all shadow-xl hover:bg-slate-900"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl p-2 bg-slate-800 rounded-xl">{lesson.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-emerald-400">Lesson #{lesson.id}</span>
                            <span className="text-xs text-slate-500">•</span>
                            <span className="text-[10px] text-slate-400">{lesson.unit}</span>
                          </div>
                          <h3 className="text-base font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">
                            {lesson.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-[#04AA6D] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
