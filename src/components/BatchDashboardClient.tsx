"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Terminal, Play, CheckCircle, Lock, Award, 
  ChevronRight, ArrowRight, Zap, Target, Star,
  FileCode, Copy, Check, Search, Sparkles, BookOpen,
  Layers, ShieldCheck, RefreshCcw, Folder, Code, Monitor, GraduationCap,
  Download, Clock, Globe, FileText, CheckCircle2, AlertTriangle, ExternalLink,
  Sliders, Workflow, Cpu, FolderArchive, ArrowDownRight
} from "lucide-react";
import NsSubjectNavBar from "./NsSubjectNavBar";
import Footer from "./Footer";

interface WorkflowNode {
  id: string;
  type: "trigger" | "action" | "delay" | "condition" | "output";
  title: string;
  subtitle: string;
  badge?: string;
  command: string;
  icon: string;
}

interface BatchRecipe {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  duration: string;
  nodes: WorkflowNode[];
  codeSnippet: string;
}

const BATCH_RECIPES: BatchRecipe[] = [
  {
    id: 1,
    name: "3-Tab Browser & Workspace Launcher",
    slug: "open-browser-tabs-script",
    category: "Productivity",
    description: "Launches Google Search, YouTube, and Gmail with timed 2-second delays using Windows `start` and `timeout`.",
    duration: "10 mins",
    nodes: [
      {
        id: "n1",
        type: "trigger",
        title: "Double-Click Launcher",
        subtitle: "Launches script.bat",
        badge: "Trigger",
        command: "@echo off & title Workspace Launcher",
        icon: "zap"
      },
      {
        id: "n2",
        type: "action",
        title: "Open Google Search",
        subtitle: "start https://google.com",
        badge: "Browser",
        command: "start https://www.google.com",
        icon: "globe"
      },
      {
        id: "n3",
        type: "delay",
        title: "Safe Delay",
        subtitle: "Wait 2 seconds",
        badge: "2s Pause",
        command: "timeout /t 2 >nul",
        icon: "clock"
      },
      {
        id: "n4",
        type: "action",
        title: "Open YouTube",
        subtitle: "start https://youtube.com",
        badge: "Browser",
        command: "start https://www.youtube.com",
        icon: "globe"
      },
      {
        id: "n5",
        type: "action",
        title: "Open Gmail",
        subtitle: "start https://mail.google.com",
        badge: "Browser",
        command: "start https://mail.google.com",
        icon: "globe"
      },
      {
        id: "n6",
        type: "output",
        title: "Complete & Exit",
        subtitle: "All tabs launched",
        badge: "Done",
        command: "echo All tabs launched! & pause & exit",
        icon: "check"
      }
    ],
    codeSnippet: `@echo off
title Nextsem Daily Workspace Launcher
echo [1/3] Launching Google Search in default browser...
start https://www.google.com
timeout /t 2 >nul

echo [2/3] Launching YouTube developer playlist...
start https://www.youtube.com
timeout /t 2 >nul

echo [3/3] Launching Gmail inbox...
start https://mail.google.com

echo ========================================
echo  All workspace tabs launched successfully!
echo ========================================
pause
exit`
  },
  {
    id: 2,
    name: "Automated Daily File Backup & Timestamp Logger",
    slug: "batch-automation-real-world-project",
    category: "System Admin",
    description: "Creates a timestamped backup directory, copies source code, and writes an execution log file.",
    duration: "15 mins",
    nodes: [
      {
        id: "b1",
        type: "trigger",
        title: "Backup Trigger",
        subtitle: "Daily at 09:00 AM",
        badge: "Task Scheduler",
        command: "set BACKUP_DIR=%~dp0backup_%DATE%",
        icon: "clock"
      },
      {
        id: "b2",
        type: "action",
        title: "Create Backup Folder",
        subtitle: "mkdir %BACKUP_DIR%",
        badge: "Filesystem",
        command: 'mkdir "%BACKUP_DIR%" 2>nul',
        icon: "folder"
      },
      {
        id: "b3",
        type: "action",
        title: "Copy Project Files",
        subtitle: "xcopy /s /y src backup",
        badge: "Copy",
        command: 'xcopy "%~dp0src" "%BACKUP_DIR%" /s /e /y',
        icon: "copy"
      },
      {
        id: "b4",
        type: "condition",
        title: "Check Exit Code",
        subtitle: "if %ERRORLEVEL% == 0",
        badge: "Verify",
        command: "if %ERRORLEVEL% == 0 (echo Backup OK) else (echo Backup Failed)",
        icon: "cpu"
      },
      {
        id: "b5",
        type: "output",
        title: "Write Audit Log",
        subtitle: "echo Log >> backup.log",
        badge: "Success",
        command: 'echo Backup complete on %DATE% at %TIME% > "%BACKUP_DIR%\\log.txt"',
        icon: "check"
      }
    ],
    codeSnippet: `@echo off
title Automated Project Backup Utility
setlocal enabledelayedexpansion

set BACKUP_DATE=%date:~-4,4%%date:~-7,2%%date:~-10,2%
set DEST_DIR=%~dp0backup_!BACKUP_DATE!

echo [BACKUP] Target folder: !DEST_DIR!
if not exist "!DEST_DIR!" (
    mkdir "!DEST_DIR!"
    echo [OK] Created backup folder.
)

echo [COPY] Archiving source files...
xcopy "%~dp0src" "!DEST_DIR!" /s /e /y >nul

if %ERRORLEVEL% equ 0 (
    echo [SUCCESS] Backup completed with zero errors on %DATE% %TIME% > "!DEST_DIR!\\backup.log"
    echo Backup finished successfully!
) else (
    echo [ERROR] Backup failed with exit code: %ERRORLEVEL%
)

pause
exit /b`
  },
  {
    id: 3,
    name: "User Input & Interactive Math Calculator",
    slug: "batch-variables-and-user-input",
    category: "Variables & Input",
    description: "Prompts the user for their name and numbers with `set /p` and evaluates arithmetic with `set /a`.",
    duration: "10 mins",
    nodes: [
      {
        id: "c1",
        type: "trigger",
        title: "Console Prompt",
        subtitle: "set /p name=Enter name",
        badge: "User Input",
        command: 'set /p USER_NAME="Enter your name: "',
        icon: "zap"
      },
      {
        id: "c2",
        type: "action",
        title: "Capture Numbers",
        subtitle: "set /p num1=First number",
        badge: "Input",
        command: 'set /p NUM1="First number: " & set /p NUM2="Second number: "',
        icon: "sliders"
      },
      {
        id: "c3",
        type: "action",
        title: "Compute Math",
        subtitle: "set /a sum=NUM1 + NUM2",
        badge: "Math Engine",
        command: "set /a SUM=NUM1 + NUM2",
        icon: "cpu"
      },
      {
        id: "c4",
        type: "output",
        title: "Print Result",
        subtitle: "echo Total = %SUM%",
        badge: "Display",
        command: "echo Welcome %USER_NAME%! Result = %SUM%",
        icon: "check"
      }
    ],
    codeSnippet: `@echo off
title Interactive Batch Calculator
echo ========================================
echo    NEXTSEM BATCH MATH CALCULATOR
echo ========================================

set /p DEV_NAME="Enter your developer name: "
echo Welcome, %DEV_NAME%!

set /p NUM_A="Enter first number: "
set /p NUM_B="Enter second number: "

set /a RESULT=%NUM_A% + %NUM_B%
set /a MULT=%NUM_A% * %NUM_B%

echo.
echo ----------------------------------------
echo Calculation Results for %DEV_NAME%:
echo Addition (%NUM_A% + %NUM_B%): %RESULT%
echo Multiplication (%NUM_A% * %NUM_B%): %MULT%
echo ----------------------------------------
echo.
pause
exit`
  },
  {
    id: 4,
    name: "Loop Directory File Processor (`for /r`)",
    slug: "batch-file-loops-and-iteration",
    category: "Automation Loops",
    description: "Iterates through all `.txt` or `.log` files in subdirectories using `for /r` and processes them in batch.",
    duration: "15 mins",
    nodes: [
      {
        id: "l1",
        type: "trigger",
        title: "Directory Scanner",
        subtitle: "Scan folder tree",
        badge: "for /r",
        command: "for /r %%f in (*.txt) do ( ... )",
        icon: "folder"
      },
      {
        id: "l2",
        type: "condition",
        title: "Filter by File Size",
        subtitle: "Check %%~zf > 0",
        badge: "Condition",
        command: "if %%~zf gtr 0 ( echo Valid )",
        icon: "cpu"
      },
      {
        id: "l3",
        type: "action",
        title: "Process & Rename",
        subtitle: "ren %%f %%~nf_processed.txt",
        badge: "Action",
        command: "echo Processing: %%~nxf",
        icon: "copy"
      },
      {
        id: "l4",
        type: "output",
        title: "Summary Report",
        subtitle: "echo Total files processed",
        badge: "Summary",
        command: "echo Done! Scanned directory.",
        icon: "check"
      }
    ],
    codeSnippet: `@echo off
title Batch Directory Loop Processor
setlocal enabledelayedexpansion

echo Scanning current workspace for text files...
set /a COUNT=0

for /r "%~dp0" %%f in (*.txt) do (
    set /a COUNT+=1
    echo [File !COUNT!] Found: %%~nxf (Size: %%~zf bytes)
)

echo.
echo ========================================
echo  Total Text Files Processed: !COUNT!
echo ========================================
pause
exit /b`
  },
  {
    id: 5,
    name: "Temporary Cache & Garbage Cleaner",
    slug: "batch-conditional-logic-if-else",
    category: "System Cleanup",
    description: "Safely cleans Windows %TEMP% folder and browser cache files with confirmation prompts.",
    duration: "10 mins",
    nodes: [
      {
        id: "cl1",
        type: "trigger",
        title: "Check Privileges",
        subtitle: "Verify admin rights",
        badge: "Admin Check",
        command: "net session >nul 2>&1",
        icon: "zap"
      },
      {
        id: "cl2",
        type: "condition",
        title: "Confirm with User",
        subtitle: "choice /c YN",
        badge: "Prompt",
        command: "choice /c YN /m \"Proceed with cleanup?\"",
        icon: "sliders"
      },
      {
        id: "cl3",
        type: "action",
        title: "Purge Temp Files",
        subtitle: "del /q /f %TEMP%\\*.*",
        badge: "Purge",
        command: 'del /s /q /f "%TEMP%\\*.*" 2>nul',
        icon: "folder"
      },
      {
        id: "cl4",
        type: "output",
        title: "Report Disk Space",
        subtitle: "Cleanup complete",
        badge: "Done",
        command: "echo Temp directory cleaned successfully!",
        icon: "check"
      }
    ],
    codeSnippet: `@echo off
title Windows Temp & Cache Cleaner Utility
color 0A

echo ========================================
echo    WINDOWS SYSTEM CACHE CLEANER
echo ========================================
echo Target Temp Directory: %TEMP%
echo.

choice /c YN /m "Are you sure you want to purge temporary files? (Y/N)"
if errorlevel 2 (
    echo [CANCELLED] Cleanup aborted by user.
    pause
    exit /b
)

echo [CLEANING] Deleting junk files in %TEMP%...
del /s /q /f "%TEMP%\\*.*" >nul 2>&1
for /d %%p in ("%TEMP%\\*.*") do rmdir "%%p" /s /q >nul 2>&1

echo.
echo ========================================
echo [SUCCESS] Temporary files cleaned successfully!
echo ========================================
pause
exit`
  }
];

const BATCH_COMMANDS_CHEAT = [
  { cmd: "@echo off", desc: "Hides command echoing so only script outputs are printed to the console." },
  { cmd: "set /p var=\"prompt\"", desc: "Prompts the user for interactive input and stores the result in a variable." },
  { cmd: "set /a var=math", desc: "Evaluates mathematical and arithmetic expressions (addition, multiplication)." },
  { cmd: "if exist file ( )", desc: "Checks if a specified file or directory path exists before executing logic." },
  { cmd: "for %%i in (*) do ( )", desc: "Iterates through files, directories, or numbers in a batch loop." },
  { cmd: "for /r %%i in (*) do ( )", desc: "Recursively loops through all subdirectories starting from the specified path." },
  { cmd: "call :label args", desc: "Executes an internal subroutine/function label and returns to the caller." },
  { cmd: "goto :label", desc: "Jumps script execution directly to a specified :label destination." },
  { cmd: "choice /c YN", desc: "Displays a single-character interactive prompt with constrained key options." },
  { cmd: "timeout /t 5 >nul", desc: "Pauses script execution for a specified number of seconds without printing prompt." },
  { cmd: "%~dp0", desc: "Built-in variable returning the full absolute path of the directory containing the script." },
  { cmd: "echo msg > file.txt", desc: "Redirects text output to a file, overwriting existing content." },
  { cmd: "echo msg >> file.txt", desc: "Appends text output to the end of an existing file without overwriting." },
  { cmd: "taskkill /f /im app.exe", desc: "Forces the termination of a running process by its executable name." },
  { cmd: "start \"\" \"url\"", desc: "Launches an application, website, or document in its default associated program." }
];

export default function BatchDashboardClient() {
  const [selectedRecipe, setSelectedRecipe] = useState<BatchRecipe>(BATCH_RECIPES[0]);
  const [codeContent, setCodeContent] = useState<string>(BATCH_RECIPES[0].codeSnippet);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(-1);
  const [copied, setCopied] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"visual" | "code">("visual");

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // When recipe selection changes, update code and reset execution
  const handleSelectRecipe = (recipe: BatchRecipe) => {
    setSelectedRecipe(recipe);
    setCodeContent(recipe.codeSnippet);
    setActiveNodeIndex(-1);
    setIsRunning(false);
  };

  // Run the recipe with step-by-step visual node lighting and terminal logs
  const handleRunRecipe = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveNodeIndex(0);
    setTerminalLogs([
      "Microsoft Windows [Version 10.0.22631.3007]",
      "(c) Microsoft Corporation. All rights reserved.",
      "",
      `C:\\Projects\\AutoBatch> script.bat --run "${selectedRecipe.name}"`,
      `[${new Date().toLocaleTimeString()}] [INITIALIZING] Loading AutoBatch workflow pipeline...`
    ]);

    const totalNodes = selectedRecipe.nodes.length;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      if (step < totalNodes) {
        setActiveNodeIndex(step);
        const node = selectedRecipe.nodes[step];
        setTerminalLogs(prev => [
          ...prev,
          `[${new Date().toLocaleTimeString()}] [STEP ${step + 1}/${totalNodes}] Executing ${node.title} -> ${node.command}`
        ]);
      } else {
        clearInterval(interval);
        setActiveNodeIndex(-1);
        setIsRunning(false);
        setTerminalLogs(prev => [
          ...prev,
          `[${new Date().toLocaleTimeString()}] [SUCCESS] Batch recipe completed with exit code: 0 (%ERRORLEVEL% = 0)`,
          "C:\\Projects\\AutoBatch> _"
        ]);
      }
    }, 900);
  };

  // Download active script as .bat file directly to user PC
  const handleExportBat = () => {
    const filename = `${selectedRecipe.slug || "script"}.bat`;
    const blob = new Blob([codeContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredCommands = BATCH_COMMANDS_CHEAT.filter(item => 
    item.cmd.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#264f78]">
      {/* Universal Top Nav */}
      <NsSubjectNavBar showSubjectBar={true} />

      <main className="flex-1 max-w-[1360px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        
        {/* Top Header & Breadcrumb Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-[#04AA6D] font-bold">AutoBatch</span>
              <span>/</span>
              <span>Visual Workflow & Scripting Playground</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 p-1.5 rounded-xl">
                <Workflow size={24} />
              </span>
              <span>Windows Batch Automation Lab</span>
            </h1>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleRunRecipe}
              disabled={isRunning}
              className="bg-[#04AA6D] hover:bg-emerald-600 disabled:opacity-50 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
            >
              <Play size={15} className={isRunning ? "animate-spin" : "fill-current"} />
              <span>{isRunning ? "Running Pipeline..." : "Run Recipe"}</span>
            </button>

            <button
              onClick={handleExportBat}
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
              title="Download .bat file to your PC"
            >
              <Download size={15} className="text-sky-400" />
              <span>Export .bat</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        </div>

        {/* Recipe Selection Carousel / Pills */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 uppercase tracking-wider font-bold text-emerald-400">
              <Zap size={14} /> Select Automation Recipe
            </span>
            <span>{BATCH_RECIPES.length} Pre-built Templates</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {BATCH_RECIPES.map((recipe) => {
              const isSelected = selectedRecipe.id === recipe.id;
              return (
                <button
                  key={recipe.id}
                  onClick={() => handleSelectRecipe(recipe)}
                  className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? "bg-emerald-950/40 border-emerald-500/80 shadow-lg shadow-emerald-950/50 ring-1 ring-emerald-500/50"
                      : "bg-[#0f1117] border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 border border-slate-800 text-slate-300">
                      {recipe.category}
                    </span>
                    <h3 className={`text-xs font-bold leading-snug ${isSelected ? "text-emerald-300" : "text-white"}`}>
                      {recipe.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800/60">
                    <span>{recipe.nodes.length} Nodes</span>
                    <span className="text-emerald-400 font-bold">{recipe.duration}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION 1: Visual Automation Builder (Node Flow Diagram) */}
        <div className="bg-[#0f1117] border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Workflow size={18} />
              </span>
              <div>
                <h2 className="text-lg font-bold text-white">Visual Automation Builder</h2>
                <p className="text-xs text-slate-400">Interactive node pipeline representing pure Windows batch execution flow.</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-emerald-400 animate-ping" : "bg-slate-500"}`} />
                <span>{isRunning ? "Pipeline Active" : "Ready to Execute"}</span>
              </span>
            </div>
          </div>

          {/* Connected Flow Diagram */}
          <div className="overflow-x-auto pb-4 pt-2">
            <div className="flex items-center gap-3 min-w-max">
              {selectedRecipe.nodes.map((node, index) => {
                const isActive = activeNodeIndex === index;
                const isPast = activeNodeIndex > index;
                return (
                  <React.Fragment key={node.id}>
                    {/* Node Card */}
                    <div
                      className={`relative w-56 rounded-2xl p-4 border transition-all duration-300 flex flex-col justify-between space-y-3 ${
                        isActive
                          ? "bg-emerald-950/80 border-emerald-400 shadow-xl shadow-emerald-500/20 scale-105 ring-2 ring-emerald-400"
                          : isPast
                          ? "bg-[#141824] border-emerald-800/60 text-slate-300"
                          : "bg-[#17181c] border-slate-800 text-slate-300"
                      }`}
                    >
                      {/* Top Node Bar */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                          node.type === "trigger"
                            ? "bg-amber-950/60 text-amber-300 border-amber-800/60"
                            : node.type === "action"
                            ? "bg-sky-950/60 text-sky-300 border-sky-800/60"
                            : node.type === "delay"
                            ? "bg-purple-950/60 text-purple-300 border-purple-800/60"
                            : node.type === "condition"
                            ? "bg-emerald-950/60 text-emerald-300 border-emerald-800/60"
                            : "bg-emerald-950 text-emerald-400 border-emerald-800"
                        }`}>
                          {node.badge || node.type}
                        </span>

                        <span className="text-[11px] font-mono text-slate-400">
                          #{index + 1}
                        </span>
                      </div>

                      {/* Node Title & Subtitle */}
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-white leading-tight flex items-center gap-1.5">
                          {node.type === "delay" && <Clock size={13} className="text-purple-400" />}
                          {node.type === "action" && <Globe size={13} className="text-sky-400" />}
                          {node.type === "trigger" && <Zap size={13} className="text-amber-400" />}
                          {node.type === "condition" && <Cpu size={13} className="text-emerald-400" />}
                          {node.type === "output" && <CheckCircle2 size={13} className="text-emerald-400" />}
                          <span>{node.title}</span>
                        </h4>
                        <p className="text-[11px] text-slate-400 font-mono truncate">
                          {node.subtitle}
                        </p>
                      </div>

                      {/* Code Pill */}
                      <div className="bg-black/70 border border-slate-800/80 rounded-lg px-2.5 py-1.5 font-mono text-[10px] text-emerald-400 truncate">
                        {node.command}
                      </div>

                      {/* Active Pulse Indicator */}
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
                      )}
                    </div>

                    {/* Connecting Connector Arrow */}
                    {index < selectedRecipe.nodes.length - 1 && (
                      <div className="flex flex-col items-center justify-center px-1">
                        <div className={`h-0.5 w-6 transition-colors duration-300 ${
                          isPast || isActive ? "bg-emerald-400" : "bg-slate-700"
                        }`} />
                        <ArrowRight
                          size={14}
                          className={`transition-colors duration-300 ${
                            isPast || isActive ? "text-emerald-400" : "text-slate-700"
                          }`}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 2: Developer Playground (Live .bat Editor & Terminal Output) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Terminal size={18} className="text-emerald-400" />
              <h2 className="text-lg font-bold text-white">Developer Playground</h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400 hidden sm:inline">Monokai Dark Terminal & Real-Time CMD Emulation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            
            {/* Left Column: Live .bat Script Editor */}
            <div className="bg-[#1e1e1e] border border-[#333333] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[480px] font-mono">
              {/* Editor Header Bar */}
              <div className="bg-[#252526] border-b border-[#333333] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCode size={16} className="text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">script.bat</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-mono">
                    Windows Batch File
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="text-xs text-slate-400 hover:text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer px-2 py-1"
                  >
                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                  <button
                    onClick={handleRunRecipe}
                    disabled={isRunning}
                    className="bg-[#04AA6D] hover:bg-emerald-600 disabled:opacity-50 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg"
                  >
                    <Play size={13} />
                    <span>{isRunning ? "Executing..." : "Run Script"}</span>
                  </button>
                </div>
              </div>

              {/* Code Textarea / Editor Area */}
              <div className="p-4 flex-1 bg-[#1e1e1e] relative">
                <textarea
                  value={codeContent}
                  onChange={(e) => setCodeContent(e.target.value)}
                  rows={15}
                  spellCheck={false}
                  className="w-full h-full bg-transparent font-mono text-xs leading-relaxed text-emerald-400 focus:outline-none resize-none selection:bg-[#264f78]"
                  placeholder="Enter Windows Batch code here..."
                />
              </div>

              {/* Editor Footer Status Bar */}
              <div className="bg-[#007acc] text-white px-4 py-1.5 text-[11px] font-mono flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span>Windows (CRLF)</span>
                  <span>Batch</span>
                </div>
                <div>
                  <span>Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column: Simulated Windows Terminal (cmd.exe) */}
            <div className="bg-[#0c0d10] border border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between min-h-[480px] font-mono shadow-2xl space-y-4">
              {/* CMD Title Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">Command Prompt (cmd.exe)</span>
                </div>
                <button
                  onClick={() => setTerminalLogs([])}
                  className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCcw size={12} />
                  <span>Clear Console</span>
                </button>
              </div>

              {/* Terminal Logs Viewport */}
              <div className="flex-1 bg-black/95 border border-slate-900 rounded-2xl p-4 overflow-y-auto font-mono text-xs leading-relaxed space-y-1.5 text-slate-300 min-h-[320px]">
                {terminalLogs.length === 0 ? (
                  <div className="text-slate-600 italic py-16 text-center space-y-2">
                    <Terminal size={28} className="mx-auto opacity-30 text-emerald-400" />
                    <p>Click "Run Recipe" or "Run Script" to simulate Windows CMD execution.</p>
                  </div>
                ) : (
                  terminalLogs.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        log.startsWith("Microsoft") || log.startsWith("(c)") || log.startsWith("C:\\")
                          ? "text-slate-500"
                          : log.includes("[SUCCESS]")
                          ? "text-emerald-400 font-bold"
                          : log.includes("[ERROR]")
                          ? "text-rose-400 font-bold"
                          : log.includes("[STEP")
                          ? "text-sky-300"
                          : "text-slate-300"
                      }
                    >
                      {log}
                    </div>
                  ))
                )}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Footer Info */}
              <div className="text-[11px] text-slate-400 bg-slate-900/60 px-3 py-2 rounded-xl border border-slate-800/80 flex items-center justify-between">
                <span>💡 Tip: Export and double-click the <code className="text-emerald-400">.bat</code> file on your 🪟 Windows 11 PC!</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 3: Batch Commands Cheat Sheet */}
        <div className="bg-[#0f1117] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Code className="text-sky-400" size={20} />
                <span>Batch Commands Quick Reference Cheat Sheet</span>
              </h2>
              <p className="text-xs text-slate-400">Essential syntax and commands used in Windows .bat scripting.</p>
            </div>

            <div className="relative min-w-[240px]">
              <Search size={14} className="absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search batch commands..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCommands.map((item, idx) => (
              <div key={idx} className="bg-[#17181c] border border-slate-800/80 rounded-2xl p-4 space-y-1.5 hover:border-emerald-500/40 transition-colors">
                <code className="text-xs font-mono font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-emerald-950 inline-block">
                  {item.cmd}
                </code>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: Related Developer Tracks & Hands-On Projects */}
        <div className="bg-[#17181c] border border-slate-800 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="text-emerald-400" size={22} />
            <h2 className="text-lg font-bold text-white">Recommended Projects & Tracks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/batch/open-browser-tabs-script" className="bg-[#0f1117] p-4 rounded-2xl border border-slate-800 hover:border-emerald-400 text-xs space-y-1.5 block transition-colors group">
              <span className="font-bold text-white group-hover:text-emerald-400 flex items-center gap-1.5">
                <Globe size={14} className="text-emerald-400" /> 3-Tab Workspace Project Guide
              </span>
              <p className="text-slate-400">Step-by-step tutorial with multi-browser incognito support & Windows Task Scheduler.</p>
            </Link>

            <Link href="/cli" className="bg-[#0f1117] p-4 rounded-2xl border border-slate-800 hover:border-emerald-400 text-xs space-y-1.5 block transition-colors group">
              <span className="font-bold text-white group-hover:text-emerald-400 flex items-center gap-1.5">
                <Terminal size={14} className="text-sky-400" /> Windows CLI Terminal Course
              </span>
              <p className="text-slate-400">Master CMD commands, directory navigation, drive letters, and permissions.</p>
            </Link>

            <Link href="/git" className="bg-[#0f1117] p-4 rounded-2xl border border-slate-800 hover:border-emerald-400 text-xs space-y-1.5 block transition-colors group">
              <span className="font-bold text-white group-hover:text-emerald-400 flex items-center gap-1.5">
                <Code size={14} className="text-amber-400" /> Git Version Control Course
              </span>
              <p className="text-slate-400">Learn git commit, push, pull, branching, and GitHub workflows.</p>
            </Link>
          </div>
        </div>

      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}
