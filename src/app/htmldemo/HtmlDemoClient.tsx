"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Play, Home, RefreshCw, Copy, Check, RotateCcw,
  Download, Sparkles, Smartphone, Tablet, Monitor,
  Terminal, ArrowLeft, Code2, Globe, Lock, ExternalLink,
  ChevronDown, X, Trash2, WrapText
} from "lucide-react";

interface ConsoleLog {
  id: string;
  type: "log" | "warn" | "error" | "info";
  message: string;
  timestamp: string;
}

const TEMPLATES: { name: string; icon: string; code: string }[] = [
  {
    name: "HTML5 Starter",
    icon: "📄",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nextsem Academy Web Page</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #0f172a;
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
    }
    .card {
      background: #1e293b;
      border: 1px solid #334155;
      padding: 32px;
      border-radius: 16px;
      max-width: 480px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    }
    h1 {
      color: #04AA6D;
      margin-top: 0;
      font-size: 26px;
    }
    p {
      color: #cbd5e1;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      background: #04AA6D;
      color: white;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: bold;
      margin-top: 12px;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #039861;
    }
  </style>
</head>
<body>

  <div class="card">
    <h1>Welcome to Nextsem! 🚀</h1>
    <p>This is your live HTML5 and CSS workspace. Edit code in the left editor and watch the preview update instantly!</p>
    <a href="#" class="btn" onclick="alert('Hello from Nextsem Academy!')">Click Me »</a>
  </div>

</body>
</html>`
  },
  {
    name: "Interactive JS Counter",
    icon: "⚡",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interactive Counter</title>
  <style>
    body {
      font-family: sans-serif;
      background: #111827;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
    }
    .counter-box {
      background: #1f2937;
      border: 1px solid #374151;
      padding: 30px 40px;
      border-radius: 14px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    #count {
      font-size: 54px;
      font-weight: 900;
      color: #38bdf8;
      margin: 15px 0;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      margin: 0 5px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .inc { background: #04AA6D; color: white; }
    .dec { background: #ef4444; color: white; }
    .reset { background: #6b7280; color: white; }
    button:hover { opacity: 0.9; }
  </style>
</head>
<body>

  <div class="counter-box">
    <h2>Interactive Counter 🎯</h2>
    <div id="count">0</div>
    <div>
      <button class="dec" onclick="update(-1)">- Decrease</button>
      <button class="reset" onclick="resetCount()">Reset</button>
      <button class="inc" onclick="update(1)">+ Increase</button>
    </div>
  </div>

  <script>
    let current = 0;
    const countEl = document.getElementById("count");

    function update(amount) {
      current += amount;
      countEl.innerText = current;
      console.log("Counter updated to:", current);
    }

    function resetCount() {
      current = 0;
      countEl.innerText = current;
      console.log("Counter reset to 0");
    }
  </script>
</body>
</html>`
  },
  {
    name: "Modern Form with Validation",
    icon: "📝",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Form</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      background: #0f172a;
      color: #e2e8f0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
    }
    .form-card {
      background: #1e293b;
      border: 1px solid #334155;
      padding: 28px;
      border-radius: 12px;
      width: 100%;
      max-width: 400px;
    }
    h2 { color: #38bdf8; margin-top: 0; }
    label { display: block; font-size: 13px; margin: 12px 0 4px; font-weight: bold; color: #94a3b8; }
    input, textarea {
      width: 100%;
      padding: 10px;
      background: #0f172a;
      border: 1px solid #475569;
      border-radius: 6px;
      color: #fff;
      box-sizing: border-box;
      font-family: inherit;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: #04AA6D;
    }
    button {
      width: 100%;
      padding: 12px;
      background: #04AA6D;
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 16px;
      cursor: pointer;
    }
    button:hover { background: #039861; }
  </style>
</head>
<body>

  <div class="form-card">
    <h2>Send Message ✉️</h2>
    <form onsubmit="event.preventDefault(); handleSubmit();">
      <label>Your Name</label>
      <input type="text" id="name" placeholder="Manoj Kumar" required>

      <label>Email Address</label>
      <input type="email" id="email" placeholder="dev@nextsem.online" required>

      <label>Message</label>
      <textarea id="msg" rows="3" placeholder="I am learning full stack development..." required></textarea>

      <button type="submit">Submit Form »</button>
    </form>
  </div>

  <script>
    function handleSubmit() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      console.log("Form Submitted:", { name, email });
      alert("Thank you " + name + "! Your message was received.");
    }
  </script>
</body>
</html>`
  },
  {
    name: "Pricing Cards Grid",
    icon: "💎",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pricing Plans</title>
  <style>
    body {
      font-family: sans-serif;
      background: #090d16;
      color: white;
      padding: 40px 20px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      max-width: 800px;
    }
    .plan {
      background: #121a29;
      border: 1px solid #1e293b;
      padding: 24px;
      border-radius: 12px;
      width: 260px;
      text-align: center;
    }
    .featured {
      border: 2px solid #04AA6D;
      position: relative;
    }
    .badge {
      position: absolute;
      top: -12px;
      right: 20px;
      background: #04AA6D;
      font-size: 11px;
      font-weight: bold;
      padding: 3px 10px;
      border-radius: 20px;
    }
    .price { font-size: 36px; font-weight: bold; color: #04AA6D; margin: 15px 0; }
    ul { list-style: none; padding: 0; text-align: left; font-size: 13px; color: #94a3b8; }
    li { margin: 8px 0; }
    li:before { content: "✓ "; color: #04AA6D; font-weight: bold; }
    .btn {
      display: block;
      background: #1e293b;
      color: white;
      text-decoration: none;
      padding: 10px;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 15px;
    }
    .featured .btn { background: #04AA6D; }
  </style>
</head>
<body>

  <div class="grid">
    <div class="plan">
      <h3>Free Tier</h3>
      <div class="price">$0</div>
      <ul>
        <li>98+ Free HTML Lessons</li>
        <li>Windows 11 Setup Guide</li>
        <li>Interactive Editor</li>
      </ul>
      <a href="#" class="btn">Start Free</a>
    </div>

    <div class="plan featured">
      <span class="badge">POPULAR</span>
      <h3>Pro Developer</h3>
      <div class="price">$0</div>
      <ul>
        <li>Full Stack Web Track</li>
        <li>React & Node.js Projects</li>
        <li>Cloud Deployment Sandbox</li>
      </ul>
      <a href="#" class="btn">Get Started »</a>
    </div>
  </div>

</body>
</html>`
  }
];

const normalizeCode = (raw: string | null): string => {
  if (!raw) return TEMPLATES[0].code;
  const trimmed = raw.trim();
  if (trimmed.toLowerCase().includes("<!doctype html>") || trimmed.toLowerCase().includes("<html")) {
    return trimmed;
  }
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Nextsem Example</title>
  <style>
    body {
      font-family: sans-serif;
      background: #0f172a;
      color: #f8fafc;
      padding: 24px;
    }
    h1 { color: #04AA6D; }
  </style>
</head>
<body>

${trimmed}

</body>
</html>`;
};

export default function HtmlDemoClient() {
  const searchParams = useSearchParams();
  const paramCode = searchParams.get("code");

  const [htmlCode, setHtmlCode] = useState<string>(TEMPLATES[0].code);
  const [iframeSrc, setIframeSrc] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [orientation, setOrientation] = useState<"row" | "col">("row");
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [autoRun, setAutoRun] = useState<boolean>(true);
  const [showConsole, setShowConsole] = useState<boolean>(false);
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLog[]>([]);
  const [showTemplatesDropdown, setShowTemplatesDropdown] = useState<boolean>(false);
  const [cursorPos, setCursorPos] = useState<{ line: number; col: number }>({ line: 1, col: 1 });
  const [wordWrap, setWordWrap] = useState<boolean>(true);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  // Generate runnable HTML with Console interceptor
  const buildRunnableHtml = (sourceCode: string) => {
    const consoleInterceptor = `
      <script>
        (function() {
          const originalLog = console.log;
          const originalWarn = console.warn;
          const originalError = console.error;
          const originalInfo = console.info;

          function sendLog(type, args) {
            try {
              const msg = Array.from(args).map(arg => {
                if (typeof arg === 'object') {
                  try { return JSON.stringify(arg); } catch(e) { return String(arg); }
                }
                return String(arg);
              }).join(' ');
              window.parent.postMessage({ type: 'NEXTSEM_CONSOLE_LOG', logType: type, message: msg }, '*');
            } catch (err) {}
          }

          console.log = function() { originalLog.apply(console, arguments); sendLog('log', arguments); };
          console.warn = function() { originalWarn.apply(console, arguments); sendLog('warn', arguments); };
          console.error = function() { originalError.apply(console, arguments); sendLog('error', arguments); };
          console.info = function() { originalInfo.apply(console, arguments); sendLog('info', arguments); };

          window.addEventListener('error', function(e) {
            sendLog('error', [e.message + ' (Line ' + e.lineno + ')']);
          });
        })();
      </script>
    `;

    if (sourceCode.includes("<head>")) {
      return sourceCode.replace("<head>", `<head>${consoleInterceptor}`);
    }
    return `${consoleInterceptor}${sourceCode}`;
  };

  const runCode = (codeToRun: string) => {
    try {
      localStorage.setItem("nextsem_tryit_saved_code", codeToRun);
    } catch {}
    setIframeSrc(buildRunnableHtml(codeToRun));
  };

  // Listen for console logs sent from sandboxed iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "NEXTSEM_CONSOLE_LOG") {
        const newLog: ConsoleLog = {
          id: `${Date.now()}-${Math.random()}`,
          type: e.data.logType || "log",
          message: e.data.message || "",
          timestamp: new Date().toLocaleTimeString()
        };
        setConsoleLogs((prev) => [...prev.slice(-49), newLog]);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Initial code loader
  useEffect(() => {
    let initialVal = TEMPLATES[0].code;
    if (paramCode) {
      initialVal = normalizeCode(paramCode);
    } else {
      const saved = localStorage.getItem("nextsem_tryit_saved_code");
      if (saved) initialVal = saved;
    }
    setHtmlCode(initialVal);
    runCode(initialVal);
  }, [paramCode]);

  // Debounced auto-run
  useEffect(() => {
    if (!autoRun) return;
    const timer = setTimeout(() => {
      runCode(htmlCode);
    }, 450);
    return () => clearTimeout(timer);
  }, [htmlCode, autoRun]);

  // Synchronize line numbers scroll with textarea
  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  // Keyboard shortcut & Tab indentation handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Ctrl + Enter or Cmd + Enter to Run
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runCode(htmlCode);
      return;
    }

    // Alt + Z to Toggle Word Wrap
    if (e.altKey && (e.key === "z" || e.key === "Z")) {
      e.preventDefault();
      setWordWrap((prev) => !prev);
      return;
    }

    // Tab key: insert 2 spaces
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const val = target.value;

      const updated = val.substring(0, start) + "  " + val.substring(end);
      setHtmlCode(updated);

      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  const handleCursorUpdate = () => {
    if (!textareaRef.current) return;
    const pos = textareaRef.current.selectionStart;
    const textBefore = textareaRef.current.value.substring(0, pos);
    const lines = textBefore.split("\n");
    setCursorPos({
      line: lines.length,
      col: lines[lines.length - 1].length + 1
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Basic HTML formatter (2 spaces indent)
  const handleFormatCode = () => {
    try {
      let formatted = "";
      let indent = 0;
      const lines = htmlCode.split("\n");

      lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) {
          formatted += "\n";
          return;
        }

        if (trimmed.startsWith("</") || trimmed.startsWith("-->")) {
          indent = Math.max(0, indent - 1);
        }

        formatted += "  ".repeat(indent) + trimmed + "\n";

        if (
          (trimmed.startsWith("<") && !trimmed.startsWith("</") && !trimmed.endsWith("/>") && !trimmed.startsWith("<!") && !trimmed.includes("</")) ||
          trimmed.endsWith("{")
        ) {
          indent++;
        }
      });

      setHtmlCode(formatted.trim());
      runCode(formatted.trim());
    } catch {}
  };

  const linesCount = htmlCode.split("\n").length;

  return (
    <div className="flex flex-col h-screen bg-[#0e1726] text-white font-sans overflow-hidden">
      {/* ── TOP PROFESSIONAL TOOLBAR ── */}
      <header className="h-14 bg-[#16222f] border-b border-slate-800 flex items-center justify-between px-3 md:px-5 shrink-0 z-20 select-none shadow-md">
        {/* Left: Brand + Navigation + Templates Dropdown */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/html"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#09101f] hover:bg-slate-800 border border-slate-700/80 rounded-lg text-xs font-bold text-slate-200 transition-all shadow-sm"
            title="Return to Free HTML Lessons"
          >
            <ArrowLeft size={14} className="text-[#04AA6D]" />
            <span className="hidden sm:inline">HTML Lessons</span>
          </Link>

          <div className="h-5 w-[1px] bg-slate-700 mx-1 hidden sm:block"></div>

          {/* Templates Preset Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowTemplatesDropdown((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-bold text-slate-200 transition-all cursor-pointer"
            >
              <Sparkles size={13} className="text-amber-400" />
              <span className="hidden md:inline">Starter Templates</span>
              <ChevronDown size={13} />
            </button>

            {showTemplatesDropdown && (
              <div className="absolute left-0 mt-2 w-64 bg-[#1b2736] border border-slate-700 rounded-xl shadow-2xl z-50 p-1.5 space-y-1 backdrop-blur-xl">
                <div className="px-3 py-1.5 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Select Boilerplate
                </div>
                {TEMPLATES.map((tmpl, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setHtmlCode(tmpl.code);
                      runCode(tmpl.code);
                      setShowTemplatesDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-700/70 text-xs font-medium text-slate-200 flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="text-base">{tmpl.icon}</span>
                    <span>{tmpl.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center: Device Viewport Mode Switcher */}
        <div className="hidden lg:flex items-center bg-[#0d141e] p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewportMode("desktop")}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewportMode === "desktop" ? "bg-[#04AA6D] text-white shadow-sm" : "text-slate-400 hover:text-white"
            }`}
            title="Desktop 100% Viewport"
          >
            <Monitor size={14} />
            <span>Desktop</span>
          </button>

          <button
            onClick={() => setViewportMode("tablet")}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewportMode === "tablet" ? "bg-[#04AA6D] text-white shadow-sm" : "text-slate-400 hover:text-white"
            }`}
            title="Tablet 768px Viewport"
          >
            <Tablet size={14} />
            <span>Tablet</span>
          </button>

          <button
            onClick={() => setViewportMode("mobile")}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewportMode === "mobile" ? "bg-[#04AA6D] text-white shadow-sm" : "text-slate-400 hover:text-white"
            }`}
            title="Mobile 375px Viewport"
          >
            <Smartphone size={14} />
            <span>Mobile</span>
          </button>
        </div>

        {/* Right Actions: Auto-Run, Copy, Format, Download, Run Button */}
        <div className="flex items-center gap-2 md:gap-2.5">
          {/* Auto Run Toggle */}
          <label className="hidden xl:flex items-center gap-1.5 text-xs text-slate-300 font-medium cursor-pointer pr-1">
            <input
              type="checkbox"
              checked={autoRun}
              onChange={(e) => setAutoRun(e.target.checked)}
              className="rounded accent-[#04AA6D] w-3.5 h-3.5 cursor-pointer"
            />
            <span className="text-[11px]">Auto Run</span>
          </label>

          {/* Toggle Word Wrap */}
          <button
            onClick={() => setWordWrap((prev) => !prev)}
            className={`p-2 rounded-lg border transition-all cursor-pointer hidden md:flex ${
              wordWrap
                ? "bg-emerald-500/20 text-[#04AA6D] border-emerald-500/40"
                : "bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border-slate-700"
            }`}
            title={`Toggle Word Wrap (Alt+Z) - Currently ${wordWrap ? "ON" : "OFF"}`}
          >
            <WrapText size={16} />
          </button>

          {/* Format Code */}
          <button
            onClick={handleFormatCode}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer hidden md:flex"
            title="Beautify / Format HTML Indentation"
          >
            <Code2 size={16} />
          </button>

          {/* Copy Code */}
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Copy Code to Clipboard"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
          </button>

          {/* Download HTML File */}
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer hidden sm:flex"
            title="Download index.html to PC"
          >
            <Download size={16} />
          </button>

          {/* Rotate Split Orientation */}
          <button
            onClick={() => setOrientation((prev) => (prev === "row" ? "col" : "row"))}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer hidden sm:flex"
            title="Toggle Split Direction (Horizontal / Vertical)"
          >
            <RotateCcw size={16} />
          </button>

          {/* Main Run Button */}
          <button
            onClick={() => runCode(htmlCode)}
            className="px-4 sm:px-5 py-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs sm:text-sm rounded-lg transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 active:scale-95 cursor-pointer"
            title="Execute Code (Ctrl + Enter)"
          >
            <Play size={13} className="fill-white" />
            <span>Run</span>
          </button>
        </div>
      </header>

      {/* ── SPLIT WORKSPACE: 2-COLUMN SIDE-BY-SIDE ── */}
      <div className={`flex-1 flex ${orientation === "row" ? "flex-col md:flex-row" : "flex-col"} overflow-hidden relative`}>
        
        {/* Left Column: Authentic Windows 11 VS Code Editor */}
        <div className={`${orientation === "row" ? "w-full md:w-1/2 h-1/2 md:h-full" : "w-full h-1/2"} bg-[#1e1e1e] border-r border-slate-800 flex flex-col relative overflow-hidden`}>
          {/* File Tab Bar */}
          <div className="bg-[#252526] px-3 py-1.5 border-b border-[#141414] text-xs font-mono font-medium text-slate-300 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-3 py-1 rounded-t-lg border-t-2 border-[#04AA6D] text-xs font-semibold text-white shadow-sm">
                <span className="text-[#e34c26] font-mono font-bold text-xs">&lt;&gt;</span>
                <span className="font-mono text-slate-100 text-xs">index.html</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500/60 ml-1"></span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono hidden xl:inline">
                VS Code Workspace
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowConsole((prev) => !prev)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  showConsole ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "bg-slate-800/80 text-slate-400 hover:text-white"
                }`}
              >
                <Terminal size={12} />
                <span>Console ({consoleLogs.length})</span>
              </button>
            </div>
          </div>

          {/* Code Textarea with Line Numbers */}
          <div className="flex-1 flex overflow-hidden relative bg-[#1e1e1e]">
            {/* Synchronized Line Numbers Gutter */}
            <div
              ref={lineNumbersRef}
              className="w-11 sm:w-12 bg-[#1e1e1e] text-slate-600 font-mono text-xs sm:text-sm text-right pr-3 pt-4 border-r border-slate-800/80 select-none overflow-hidden space-y-0.5 leading-6"
            >
              {Array.from({ length: linesCount }, (_, i) => (
                <div key={i} className="h-6 leading-6">
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Main Code Input with Word Wrap */}
            <textarea
              ref={textareaRef}
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              onScroll={handleScroll}
              onKeyDown={handleKeyDown}
              onClick={handleCursorUpdate}
              onKeyUp={handleCursorUpdate}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
              className={`flex-1 bg-[#1e1e1e] text-slate-100 font-mono text-xs sm:text-sm p-4 pt-4 outline-none resize-none leading-6 border-none focus:ring-0 overflow-auto ${
                wordWrap ? "whitespace-pre-wrap break-words" : "whitespace-pre"
              }`}
              style={{
                caretColor: "#04AA6D",
                tabSize: 2
              }}
            />
          </div>

          {/* VS Code Blue Status Bar */}
          <div className="bg-[#007acc] px-3 py-1 flex items-center justify-between text-[11px] text-white font-mono select-none shrink-0">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                <span>HTML5</span>
              </span>
              <span className="hidden sm:inline text-white/80">UTF-8</span>
              <span className="text-white/80">Ln {cursorPos.line}, Col {cursorPos.col}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/90">Nextsem Academy</span>
              <span className="hidden sm:inline text-white/70">Spaces: 2</span>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic Modern Browser Window Frame */}
        <div className={`${orientation === "row" ? "w-full md:w-1/2 h-1/2 md:h-full" : "w-full h-1/2"} bg-[#0b0f19] flex flex-col relative overflow-hidden`}>
          
          {/* Browser Address Bar Header */}
          <div className="bg-[#1b2432] px-3 sm:px-4 py-2 border-b border-slate-800 text-xs font-mono flex items-center justify-between gap-2 shrink-0 select-none shadow-sm">
            {/* Traffic Light Dots */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
            </div>

            {/* Address Bar URL */}
            <div className="flex-1 max-w-xl bg-[#0e141f] border border-slate-700/80 rounded-lg px-3 py-1 text-slate-300 text-xs flex items-center justify-between gap-2 shadow-inner">
              <div className="flex items-center gap-2 truncate">
                <Lock size={12} className="text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">http://localhost:5500</span>
                <span className="text-slate-400 truncate">/index.html</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded shrink-0">
                200 OK
              </span>
            </div>

            {/* Reload Preview */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => runCode(htmlCode)}
                className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
                title="Reload Browser Preview"
              >
                <RefreshCw size={14} />
              </button>
            </div>
          </div>

          {/* Iframe Viewport Container (Handles Desktop, Tablet, Mobile widths) */}
          <div className="flex-1 bg-[#090d16] p-2 sm:p-4 overflow-auto flex items-center justify-center">
            <div
              className={`h-full bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 border border-slate-800 ${
                viewportMode === "mobile"
                  ? "w-[375px] max-w-full"
                  : viewportMode === "tablet"
                  ? "w-[768px] max-w-full"
                  : "w-full"
              }`}
            >
              <iframe
                title="Nextsem Academy Live HTML Output"
                srcDoc={iframeSrc}
                sandbox="allow-scripts"
                className="w-full h-full border-none bg-white"
              />
            </div>
          </div>

          {/* Collapsible Live JavaScript Console Drawer */}
          {showConsole && (
            <div className="h-44 bg-[#101725] border-t border-slate-800 flex flex-col shrink-0 text-xs font-mono">
              <div className="bg-[#162030] px-3 py-1.5 border-b border-slate-800 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <Terminal size={13} className="text-amber-400" />
                  <span className="font-bold text-white">JavaScript Developer Console</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setConsoleLogs([])}
                    className="p-1 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                    title="Clear Console"
                  >
                    <Trash2 size={13} />
                  </button>
                  <button
                    onClick={() => setShowConsole(false)}
                    className="p-1 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                    title="Close Console"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-3 overflow-y-auto space-y-1.5 font-mono text-[11px]">
                {consoleLogs.length === 0 ? (
                  <div className="text-slate-500 italic">No console logs yet. Use console.log() in your script to see output here.</div>
                ) : (
                  consoleLogs.map((log) => (
                    <div
                      key={log.id}
                      className={`flex items-start gap-2 py-0.5 ${
                        log.type === "error"
                          ? "text-red-400 bg-red-950/20 px-1 rounded"
                          : log.type === "warn"
                          ? "text-amber-300 bg-amber-950/20 px-1 rounded"
                          : "text-slate-200"
                      }`}
                    >
                      <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                      <span className="font-bold shrink-0">{log.type.toUpperCase()}:</span>
                      <span className="flex-1 break-all">{log.message}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
