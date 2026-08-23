"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Terminal, Play, CheckCircle, Copy, Check, Download, 
  ArrowRight, ExternalLink, Globe, Sparkles, BookOpen, 
  Layers, Monitor, Code, ShieldCheck, RefreshCcw, FileCode,
  CheckCircle2, Clock, HelpCircle, ChevronRight
} from "lucide-react";
import NsSubjectNavBar from "./NsSubjectNavBar";
import Footer from "./Footer";

const SCRIPT_CODE_PRO = `@echo off
title Nextsem Daily Workspace Launcher
color 0A

echo ===================================================
echo   AUTOMATED 3-TAB WORKSPACE LAUNCHER (.BAT)
echo ===================================================
echo.
echo Launching your daily productivity tabs...
echo.

rem Step 1: Launch Google Search
echo [1/3] Opening Google Search (https://www.google.com)...
start https://www.google.com
timeout /t 2 >nul

rem Step 2: Launch YouTube
echo [2/3] Opening YouTube (https://www.youtube.com)...
start https://www.youtube.com
timeout /t 2 >nul

rem Step 3: Launch Gmail
echo [3/3] Opening Gmail (https://mail.google.com)...
start https://mail.google.com

echo.
echo ===================================================
echo  [SUCCESS] All 3 tabs launched successfully!
echo ===================================================
echo.
pause
exit`;

const SCRIPT_CODE_SIMPLE = `@echo off
rem Minimal 5-line script to open 3 tabs in default browser
start https://www.google.com
start https://www.youtube.com
start https://mail.google.com
exit`;

const SCRIPT_CODE_CHROME = `@echo off
title Launch Tabs in Google Chrome
echo Opening Google, YouTube, and Gmail in Google Chrome...
start chrome https://www.google.com https://www.youtube.com https://mail.google.com
echo Done!
pause
exit`;

const SCRIPT_CODE_INCOGNITO = `@echo off
title Open Google & YouTube in Incognito
echo Launching Google Search and YouTube in Chrome Incognito...
start chrome --incognito "https://www.google.com" "https://www.youtube.com"
echo Incognito tabs opened! No browsing history will be saved.
pause
exit`;

interface TabPreview {
  id: string;
  title: string;
  url: string;
  icon: string;
  color: string;
  previewTitle: string;
  previewSnippet: string;
}

const TABS: TabPreview[] = [
  {
    id: "google",
    title: "Google Search",
    url: "https://www.google.com",
    icon: "🔍",
    color: "#4285F4",
    previewTitle: "Google Search Engine",
    previewSnippet: "Search the world's information, code documentation, and developer tools."
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://www.youtube.com",
    icon: "▶️",
    color: "#FF0000",
    previewTitle: "YouTube Developer Tutorials",
    previewSnippet: "Watch programming walkthroughs, tech news, and coding masterclasses."
  },
  {
    id: "gmail",
    title: "Gmail Workspace",
    url: "https://mail.google.com",
    icon: "✉️",
    color: "#EA4335",
    previewTitle: "Google Mail Inbox",
    previewSnippet: "Check your developer emails, GitHub notifications, and project updates."
  }
];

export default function BatchTabLauncherProjectClient() {
  const [activeCodeMode, setActiveCodeMode] = useState<"pro" | "simple" | "chrome" | "incognito">("pro");
  const [editableCode, setEditableCode] = useState<string>(SCRIPT_CODE_PRO);
  const [copied, setCopied] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const [activeTabPreview, setActiveTabPreview] = useState<string>("google");
  
  // Quiz State
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (activeCodeMode === "pro") setEditableCode(SCRIPT_CODE_PRO);
    else if (activeCodeMode === "simple") setEditableCode(SCRIPT_CODE_SIMPLE);
    else if (activeCodeMode === "chrome") setEditableCode(SCRIPT_CODE_CHROME);
    else setEditableCode(SCRIPT_CODE_INCOGNITO);
  }, [activeCodeMode]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(editableCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadBat = () => {
    const blob = new Blob([editableCode], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = activeCodeMode === "incognito" ? "open_incognito_tabs.bat" : "open_workspace_tabs.bat";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSimulateScript = () => {
    setIsRunning(true);
    setTerminalLogs(["C:\\Windows\\System32\\cmd.exe", "Executing script.bat..."]);
    setOpenTabs([]);

    if (activeCodeMode === "incognito") {
      setTimeout(() => {
        setTerminalLogs(prev => [
          ...prev,
          "C:\\Users\\Developer\\Desktop> start chrome --incognito \"https://www.google.com\" \"https://www.youtube.com\"",
          "--> [Incognito Flag Handled]: Initializing private Chrome window...",
          "--> [Private Session]: Opening Google Search tab (Incognito)...",
          "--> [Private Session]: Opening YouTube tab (Incognito)...",
          "",
          "===================================================",
          "[SUCCESS] Private Incognito tabs opened successfully!",
          "===================================================",
          "Press any key to continue . . ."
        ]);
        setOpenTabs(["google", "youtube"]);
        setActiveTabPreview("google");
        setIsRunning(false);
      }, 700);
      return;
    }

    // Step 1: Google
    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev, 
        "C:\\Users\\Developer\\Desktop> start https://www.google.com",
        "--> [HTTP Protocol Handled]: Dispatching Google Search to default browser..."
      ]);
      setOpenTabs(prev => [...prev, "google"]);
      setActiveTabPreview("google");
    }, 600);

    // Step 2: YouTube
    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev, 
        "C:\\Users\\Developer\\Desktop> timeout /t 2 >nul",
        "C:\\Users\\Developer\\Desktop> start https://www.youtube.com",
        "--> [HTTP Protocol Handled]: Dispatching YouTube to default browser..."
      ]);
      setOpenTabs(prev => [...prev, "youtube"]);
      setActiveTabPreview("youtube");
    }, 1400);

    // Step 3: Gmail
    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev, 
        "C:\\Users\\Developer\\Desktop> timeout /t 2 >nul",
        "C:\\Users\\Developer\\Desktop> start https://mail.google.com",
        "--> [HTTP Protocol Handled]: Dispatching Gmail to default browser...",
        "",
        "===================================================",
        "[SUCCESS] All 3 tabs launched successfully!",
        "===================================================",
        "Press any key to continue . . ."
      ]);
      setOpenTabs(prev => [...prev, "gmail"]);
      setIsRunning(false);
    }, 2200);
  };

  const handleResetSimulator = () => {
    setTerminalLogs([]);
    setOpenTabs([]);
    setActiveTabPreview("google");
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#264f78]">
      <NsSubjectNavBar showSubjectBar={true} />

      <main className="flex-1 max-w-[1240px] w-full mx-auto px-4 sm:px-6 py-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Link href="/batch" className="text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] font-semibold">
            Batch Dashboard
          </Link>
          <ChevronRight size={12} />
          <span className="text-white font-bold">3-Tab Workspace Launcher Project</span>
        </nav>

        {/* Project Hero Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950/40 via-slate-900 to-[#0f1117] border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-4">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Hands-On Automation Project</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Automated 3-Tab Browser Launcher (.bat Script)
            </h1>

            <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
              Build a real-world Windows batch file that automatically opens <strong className="text-white font-bold">Google Search</strong>, <strong className="text-white font-bold">YouTube</strong>, and <strong className="text-white font-bold">Gmail</strong> in your default web browser with a single double-click.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl text-slate-100">
                <Terminal size={14} className="text-emerald-400" />
                <span>Command: <code className="text-emerald-400 font-bold">start &lt;URL&gt;</code></span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl text-slate-100">
                <Clock size={14} className="text-sky-400" />
                <span>Delay: <code className="text-sky-400 font-bold">timeout /t 2</code></span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl text-slate-100">
                <ShieldCheck size={14} className="text-amber-400" />
                <span>🪟 Windows 11 Native</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Batch Editor & Browser Simulator */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="text-emerald-400" size={20} />
                <span>Interactive Batch Script Simulator & Live Tab Preview</span>
              </h2>
              <p className="text-xs text-slate-300">
                Test the batch script directly in the simulated Windows terminal and watch the browser tabs activate.
              </p>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs font-mono">
              <button
                onClick={() => setActiveCodeMode("pro")}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  activeCodeMode === "pro"
                    ? "bg-[#04AA6D] text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Production Script
              </button>
              <button
                onClick={() => setActiveCodeMode("simple")}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  activeCodeMode === "simple"
                    ? "bg-[#04AA6D] text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Minimal 5-Line
              </button>
              <button
                onClick={() => setActiveCodeMode("chrome")}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  activeCodeMode === "chrome"
                    ? "bg-[#04AA6D] text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Google Chrome Direct
              </button>
              <button
                onClick={() => setActiveCodeMode("incognito")}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  activeCodeMode === "incognito"
                    ? "bg-purple-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🕵️ Incognito Mode
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column (5 Cols): .BAT Editor */}
            <div className="lg:col-span-5 bg-[#1e1e1e] border border-[#333333] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[500px] font-mono">
              <div className="bg-[#252526] border-b border-[#333333] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCode size={16} className="text-emerald-400" />
                  <span className="text-xs font-bold text-slate-100">workspace.bat</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-mono">
                    Batch File
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="text-xs text-slate-300 hover:text-white font-bold flex items-center gap-1 transition-colors px-2 py-1 cursor-pointer"
                    title="Copy code"
                  >
                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                  <button
                    onClick={handleDownloadBat}
                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center gap-1 transition-colors px-2.5 py-1 rounded-lg cursor-pointer border border-slate-700"
                    title="Download .bat script to your computer"
                  >
                    <Download size={13} className="text-sky-400" />
                    <span>Download .bat</span>
                  </button>
                </div>
              </div>

              <div className="p-4 flex-1 bg-[#1e1e1e]">
                <textarea
                  value={editableCode}
                  onChange={(e) => setEditableCode(e.target.value)}
                  rows={15}
                  spellCheck={false}
                  className="w-full h-full bg-transparent font-mono text-xs leading-relaxed text-emerald-400 focus:outline-none resize-none selection:bg-[#264f78]"
                />
              </div>

              <div className="p-3 bg-[#252526] border-t border-[#333333] flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  Double-click ready for 🪟 Windows 11
                </span>
                <button
                  onClick={handleSimulateScript}
                  disabled={isRunning}
                  className="bg-[#04AA6D] hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-950"
                >
                  <Play size={14} />
                  <span>{isRunning ? "Executing Script..." : "Run in Simulator"}</span>
                </button>
              </div>
            </div>

            {/* Right Column (7 Cols): Terminal Console + Simulated Browser View */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Command Prompt Simulator Output */}
              <div className="bg-[#0c0d10] border border-slate-800 rounded-3xl p-5 font-mono shadow-2xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Terminal size={15} className="text-emerald-400" />
                    <span className="text-xs font-bold text-white">Command Prompt (cmd.exe) Output</span>
                  </div>
                  <button
                    onClick={handleResetSimulator}
                    className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCcw size={12} />
                    <span>Reset</span>
                  </button>
                </div>

                <div className="bg-black/90 border border-slate-900 rounded-2xl p-4 min-h-[170px] max-h-[220px] overflow-y-auto font-mono text-xs leading-relaxed space-y-1 text-slate-300">
                  {terminalLogs.length === 0 ? (
                    <div className="text-slate-500 italic py-8 text-center space-y-2">
                      <Terminal size={22} className="mx-auto opacity-40" />
                      <p>Click <strong className="text-emerald-400">"Run in Simulator"</strong> to watch the batch script execute.</p>
                    </div>
                  ) : (
                    terminalLogs.map((log, idx) => (
                      <div 
                        key={idx} 
                        className={
                          log.startsWith("C:\\") 
                            ? "text-slate-500" 
                            : log.includes("[SUCCESS]")
                            ? "text-emerald-400 font-bold"
                            : log.startsWith("-->")
                            ? "text-sky-400"
                            : "text-slate-200"
                        }
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Simulated Browser Multi-Tab Viewport */}
              <div className="bg-[#1e2029] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                {/* Browser Tab Bar */}
                <div className="bg-[#14151b] border-b border-slate-800 px-3 pt-2.5 flex items-center gap-1.5 overflow-x-auto">
                  {TABS.map((tab) => {
                    const isOpen = openTabs.includes(tab.id);
                    const isActive = activeTabPreview === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => isOpen && setActiveTabPreview(tab.id)}
                        disabled={!isOpen}
                        className={`flex items-center gap-2 px-3.5 py-1.5 text-xs rounded-t-xl transition-all font-medium border-t border-x ${
                          isOpen
                            ? isActive
                              ? "bg-[#1e2029] text-white border-slate-700 font-bold shadow"
                              : "bg-[#17181f] text-slate-300 border-slate-800 hover:text-white cursor-pointer"
                            : "opacity-30 border-transparent text-slate-500 cursor-not-allowed"
                        }`}
                      >
                        <span>{tab.icon}</span>
                        <span>{tab.title}</span>
                        {isOpen && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Browser Address Bar */}
                <div className="bg-[#1a1b23] border-b border-slate-800/80 px-4 py-2 flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex-1 bg-[#121318] border border-slate-800 rounded-lg px-3 py-1 text-xs font-mono text-slate-300 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">
                        {openTabs.length > 0
                          ? TABS.find(t => t.id === activeTabPreview)?.url
                          : "https://about:blank"}
                      </span>
                    </div>
                    {activeCodeMode === "incognito" && (
                      <span className="text-[10px] bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded font-mono font-bold flex items-center gap-1">
                        🕵️ Incognito / Private Session
                      </span>
                    )}
                  </div>
                </div>

                {/* Browser Content Area */}
                <div className="p-6 bg-[#16171f] min-h-[160px] flex flex-col justify-center">
                  {openTabs.length === 0 ? (
                    <div className="text-center text-slate-500 space-y-1">
                      <Globe size={28} className="mx-auto opacity-30 text-slate-400" />
                      <p className="text-xs">No active browser tabs open yet.</p>
                      <p className="text-[11px] text-slate-600">Run the batch script above to open Google, YouTube, and Gmail tabs.</p>
                    </div>
                  ) : (
                    (() => {
                      const currentTab = TABS.find(t => t.id === activeTabPreview);
                      if (!currentTab) return null;
                      return (
                        <div className="space-y-2 animate-fadeIn">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{currentTab.icon}</span>
                            <div>
                              <h3 className="text-base font-bold text-white">{currentTab.previewTitle}</h3>
                              <p className="text-xs text-[#04AA6D] font-mono">{currentTab.url}</p>
                            </div>
                          </div>
                          <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                            {currentTab.previewSnippet}
                          </p>
                          <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
                            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                              Tab Launched via start command
                            </span>
                            <span>• Status: Active 200 OK</span>
                          </div>
                        </div>
                      );
                    })()
                  )}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Step-by-Step Windows 11 Tutorial */}
        <section className="bg-[#0f1117] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="text-emerald-400" size={20} />
              <span>Step-by-Step Guide: How to Create and Run on 🪟 Windows 11</span>
            </h2>
            <p className="text-xs text-slate-300">
              Follow these simple steps on your PC to create your own double-clickable automation script.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Step 1 */}
            <div className="bg-[#17181c] border border-slate-800 p-5 rounded-2xl space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                  1
                </span>
                <span className="text-[10px] font-mono text-slate-400">Notepad</span>
              </div>
              <h3 className="text-sm font-bold text-white">Open Notepad</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Press <kbd className="bg-black px-1.5 py-0.5 rounded border border-slate-700 text-emerald-400 font-mono text-[10px]">⊞ Win + R</kbd>, type <code className="text-white font-mono font-bold">notepad</code>, and press Enter.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#17181c] border border-slate-800 p-5 rounded-2xl space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                  2
                </span>
                <span className="text-[10px] font-mono text-slate-400">Paste Code</span>
              </div>
              <h3 className="text-sm font-bold text-white">Paste the Script</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Copy the batch code above and paste it into your blank Notepad window.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#17181c] border border-slate-800 p-5 rounded-2xl space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                  3
                </span>
                <span className="text-[10px] font-mono text-slate-400">Save As</span>
              </div>
              <h3 className="text-sm font-bold text-white">Save with .bat Extension</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Click <strong>File &gt; Save As...</strong>, choose <strong>All Files (*.*)</strong>, and name it <code className="text-emerald-400 font-bold">workspace.bat</code>.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#17181c] border border-slate-800 p-5 rounded-2xl space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                  4
                </span>
                <span className="text-[10px] font-mono text-slate-400">Launch</span>
              </div>
              <h3 className="text-sm font-bold text-white">Double-Click to Run!</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Double-click <code className="text-white font-bold">workspace.bat</code> on your Desktop. All 3 tabs will open in your default browser!
              </p>
            </div>

          </div>
        </section>

        {/* Command Anatomy Breakdown */}
        <section className="bg-[#0f1117] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Code className="text-sky-400" size={20} />
              <span>Anatomy of Batch Commands Used in this Project</span>
            </h2>
            <p className="text-xs text-slate-300">
              Understanding why each line is needed in production-grade batch scripts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
            
            <div className="bg-[#17181c] border border-slate-800 p-4 rounded-xl space-y-2">
              <code className="text-xs font-mono font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-emerald-950 inline-block">
                @echo off
              </code>
              <p className="text-xs text-slate-200 leading-relaxed">
                By default, the Windows Command Prompt prints every line of code to the screen before running it. Adding <code className="text-emerald-400">@echo off</code> hides the code execution and only displays clean output messages.
              </p>
            </div>

            <div className="bg-[#17181c] border border-slate-800 p-4 rounded-xl space-y-2">
              <code className="text-xs font-mono font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-emerald-950 inline-block">
                start https://www.google.com
              </code>
              <p className="text-xs text-slate-200 leading-relaxed">
                The <code className="text-emerald-400">start</code> command tells Windows to open the target URL using the system’s default web browser (Google Chrome, Microsoft Edge, Firefox, or Brave).
              </p>
            </div>

            <div className="bg-[#17181c] border border-slate-800 p-4 rounded-xl space-y-2">
              <code className="text-xs font-mono font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-emerald-950 inline-block">
                timeout /t 2 &gt;nul
              </code>
              <p className="text-xs text-slate-200 leading-relaxed">
                Pauses script execution for 2 seconds. The <code className="text-sky-400">&gt;nul</code> redirection silences the default countdown message (<code className="text-slate-400">Waiting for 2 seconds...</code>), giving your browser time to open each tab cleanly without congestion.
              </p>
            </div>

            <div className="bg-[#17181c] border border-slate-800 p-4 rounded-xl space-y-2">
              <code className="text-xs font-mono font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-emerald-950 inline-block">
                pause &amp; exit
              </code>
              <p className="text-xs text-slate-200 leading-relaxed">
                <code className="text-emerald-400">pause</code> keeps the terminal window open until you press any key so you can read the status logs. <code className="text-emerald-400">exit</code> cleanly terminates the Command Prompt process.
              </p>
            </div>

          </div>
        </section>

        {/* Task Scheduler Automation Card */}
        <section className="bg-gradient-to-br from-slate-900 to-[#12141c] border border-sky-500/30 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏰</span>
            <div>
              <h2 className="text-lg font-bold text-white">Bonus Automation: Launch Every Morning at 9:00 AM!</h2>
              <p className="text-xs text-slate-300">Use 🪟 Windows 11 Task Scheduler to automate this script daily.</p>
            </div>
          </div>

          <div className="bg-black/50 border border-slate-800 rounded-2xl p-4 text-xs space-y-2 text-slate-200 leading-relaxed">
            <ol className="list-decimal list-inside space-y-1.5">
              <li>Press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 font-mono">⊞ Win + S</kbd> and search for <strong>Task Scheduler</strong>.</li>
              <li>Click <strong>Create Basic Task...</strong> on the right action panel.</li>
              <li>Name it <code className="text-sky-400 font-bold">Open Morning Workspace Tabs</code> and click Next.</li>
              <li>Trigger: Choose <strong>When I log on</strong> or <strong>Daily at 9:00 AM</strong>.</li>
              <li>Action: Choose <strong>Start a program</strong> and browse to your saved <code className="text-emerald-400 font-bold">workspace.bat</code> file.</li>
              <li>Click <strong>Finish</strong>! Your tabs will open automatically every day when you turn on your PC.</li>
            </ol>
          </div>
        </section>

        {/* Interactive MCQ Knowledge Check */}
        <section className="bg-[#0f1117] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-amber-400" size={20} />
              <h2 className="text-lg font-bold text-white">Knowledge Check: Batch Scripting</h2>
            </div>
            <span className="text-xs font-mono text-slate-400">1 Question Check</span>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-white">
              ❓ Which command in a Windows Batch file is used to open a website URL in the user's default browser?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "A", text: "open https://www.google.com", isCorrect: false },
                { label: "B", text: "start https://www.google.com", isCorrect: true },
                { label: "C", text: "launch --url https://www.google.com", isCorrect: false },
                { label: "D", text: "curl https://www.google.com", isCorrect: false }
              ].map((opt, idx) => {
                const isSelected = selectedQuizAnswer === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedQuizAnswer(idx);
                      setQuizSubmitted(true);
                    }}
                    className={`p-4 rounded-xl border text-left text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                      quizSubmitted
                        ? opt.isCorrect
                          ? "bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold"
                          : isSelected
                          ? "bg-rose-950/60 border-rose-500 text-rose-300 font-bold"
                          : "bg-slate-900/50 border-slate-800 text-slate-400"
                        : isSelected
                        ? "bg-slate-800 border-emerald-400 text-white"
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <span>
                      <strong className="text-white mr-2">[{opt.label}]</strong> {opt.text}
                    </span>
                    {quizSubmitted && opt.isCorrect && (
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {quizSubmitted && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/80 rounded-xl text-xs text-emerald-300 leading-relaxed">
                🎉 <strong>Correct Answer is B (<code className="text-white font-mono">start &lt;URL&gt;</code>)!</strong> The Windows internal <code className="text-white font-mono">start</code> command registers URL protocols and instructs your default browser to launch a new tab.
              </div>
            )}
          </div>
        </section>

        {/* Back Link to Batch Dashboard */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/batch"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D]"
          >
            ← Return to Windows Batch Scripting Dashboard
          </Link>
          <Link
            href="/cli"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D]"
          >
            Explore Windows CLI Course →
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
