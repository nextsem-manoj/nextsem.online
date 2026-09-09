"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Play, RefreshCw, Copy, Check, RotateCcw, 
  ExternalLink, Smartphone, Tablet, Monitor, 
  Code2, Sparkles, X, Eye, EyeOff, Terminal, Zap
} from "lucide-react";
import { expandEmmet, expandEmmetWithIndentation, getEmmetAbbreviationAtCursor } from "@/utils/emmetEngine";


interface CodePreset {
  id: string;
  name: string;
  badge: string;
  icon: string;
  code: string;
}

const PRESETS: CodePreset[] = [
  {
    id: "html-starter",
    name: "HTML5 & CSS Card",
    badge: "Beginner",
    icon: "📄",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Nextsem Live Card</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #0f1117;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 16px;
      box-sizing: border-box;
    }
    .card {
      background: #181b24;
      border: 1px solid #2d3345;
      border-radius: 14px;
      padding: 24px;
      max-width: 380px;
      text-align: center;
      box-shadow: 0 16px 32px rgba(0,0,0,0.5);
      transition: transform 0.2s, border-color 0.2s;
    }
    .card:hover {
      transform: translateY(-2px);
      border-color: #04AA6D;
    }
    h2 {
      color: #04AA6D;
      margin-top: 0;
      font-size: 20px;
    }
    p {
      color: #cbd5e1;
      font-size: 13px;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      background: #04AA6D;
      color: white;
      border: none;
      padding: 9px 18px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 13px;
      cursor: pointer;
      margin-top: 6px;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #039861;
    }
  </style>
</head>
<body>

  <div class="card">
    <h2>Hello, Web Developer! 🚀</h2>
    <p>This is a live, editable online compiler. Try modifying this HTML or CSS code below and see the output update live!</p>
    <button class="btn" onclick="alert('Awesome! Your live code runs instantly 🎉')">Click Me »</button>
  </div>

</body>
</html>`
  },
  {
    id: "js-counter",
    name: "JS Live State",
    badge: "Interactive",
    icon: "⚡",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Counter</title>
  <style>
    body {
      font-family: sans-serif;
      background: #0b0f19;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 16px;
    }
    .box {
      background: #151c2e;
      border: 1px solid #283554;
      padding: 24px;
      border-radius: 14px;
      text-align: center;
      box-shadow: 0 12px 28px rgba(0,0,0,0.5);
    }
    #num {
      font-size: 42px;
      font-weight: 900;
      color: #04AA6D;
      margin: 10px 0;
      font-family: monospace;
    }
    .btn-group {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    button {
      background: #1f293d;
      color: white;
      border: 1px solid #3b4b6e;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 15px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.15s;
    }
    button:hover {
      background: #04AA6D;
      border-color: #04AA6D;
    }
  </style>
</head>
<body>

  <div class="box">
    <h3 style="margin-top:0;">JavaScript State Counter</h3>
    <div id="num">0</div>
    <div class="btn-group">
      <button onclick="update(-1)">−</button>
      <button onclick="reset()">Reset</button>
      <button onclick="update(+1)">+</button>
    </div>
  </div>

  <script>
    let count = 0;
    const numEl = document.getElementById("num");

    function update(delta) {
      count += delta;
      numEl.textContent = count;
      numEl.style.transform = "scale(1.15)";
      setTimeout(() => numEl.style.transform = "scale(1)", 120);
    }

    function reset() {
      count = 0;
      numEl.textContent = count;
    }
  </script>

</body>
</html>`
  },
  {
    id: "css-flexbox",
    name: "CSS Flexbox & Glow",
    badge: "CSS3 Grid",
    icon: "🎨",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox Demo</title>
  <style>
    body {
      background: #0d1117;
      color: #e6edf3;
      font-family: sans-serif;
      margin: 0;
      padding: 16px;
      min-height: 100vh;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      max-width: 380px;
      width: 100%;
    }
    .item {
      background: #161b22;
      border: 1px solid #30363d;
      border-radius: 10px;
      padding: 16px 8px;
      text-align: center;
      font-weight: bold;
      font-size: 13px;
      transition: all 0.2s;
      cursor: pointer;
    }
    .item:hover {
      background: #04AA6D;
      color: #fff;
      transform: translateY(-3px);
      box-shadow: 0 8px 18px rgba(4, 170, 109, 0.4);
    }
  </style>
</head>
<body>

  <h3 style="color:#04AA6D; margin-top:0; margin-bottom: 12px;">Interactive Flex Grid</h3>
  <div class="grid">
    <div class="item">HTML5</div>
    <div class="item">CSS3</div>
    <div class="item">JS ES6</div>
    <div class="item">React</div>
    <div class="item">Node.js</div>
    <div class="item">Windows CLI</div>
  </div>

</body>
</html>`
  }
];

export default function LiveCodeCompilerWidget() {
  const [activePresetId, setActivePresetId] = useState<string>(PRESETS[0].id);
  const [code, setCode] = useState<string>(PRESETS[0].code);
  const [showOutput, setShowOutput] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [deviceMode, setDeviceMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  
  /* Emmet Live State */
  const [emmetSuggestion, setEmmetSuggestion] = useState<{
    abbreviation: string;
    expanded: string;
    startIndex: number;
    endIndex: number;
  } | null>(null);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Sync preset change
  const handleSelectPreset = (preset: CodePreset) => {
    setActivePresetId(preset.id);
    setCode(preset.code);
    setEmmetSuggestion(null);
    setShowOutput(true);
  };

  // Check Emmet abbreviation at cursor
  const checkEmmet = (currentText: string, cursorIndex: number) => {
    const match = getEmmetAbbreviationAtCursor(currentText, cursorIndex);
    if (match) {
      const exp = expandEmmet(match.abbreviation, "html");
      if (exp) {
        setEmmetSuggestion({
          abbreviation: match.abbreviation,
          expanded: exp,
          startIndex: match.startIndex,
          endIndex: match.endIndex
        });
        return;
      }
    }
    setEmmetSuggestion(null);
  };

  // Expand Emmet snippet
  const executeEmmet = () => {
    if (!textareaRef.current) return;
    const target = textareaRef.current;
    const start = target.selectionStart;
    const result = expandEmmetWithIndentation(code, start, "html");
    if (result) {
      setCode(result.newText);
      setEmmetSuggestion(null);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = result.newCursorPos;
        target.focus();
        compileAndRun();
      }, 0);
    }
  };


  // Compile and run code in iframe
  const compileAndRun = () => {
    setShowOutput(true);
    setTimeout(() => {
      if (!iframeRef.current) return;
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(code);
        doc.close();
      }
    }, 50);
  };

  // Auto-run on code change if output is visible (debounced 300ms)
  useEffect(() => {
    if (!showOutput) return;
    const timer = setTimeout(() => {
      if (iframeRef.current) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(code);
          doc.close();
        }
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [code, showOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    const found = PRESETS.find((p) => p.id === activePresetId) || PRESETS[0];
    setCode(found.code);
  };

  // Device width mapping for responsive preview testing
  const getDeviceWidth = () => {
    switch (deviceMode) {
      case "mobile": return "max-w-[340px]";
      case "tablet": return "max-w-[540px]";
      default: return "w-full";
    }
  };

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-[#12151e] shadow-2xl overflow-hidden font-sans">
      
      {/* ── TOP HEADER / CONTROLS & PRESET SWITCHER ── */}
      <div className="bg-[#181b26] px-3 sm:px-5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2.5 select-none">
        
        {/* Left: Branding & Presets */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <div className="flex items-center gap-1.5 text-xs font-bold text-white mr-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#04AA6D] animate-pulse" />
            <span className="hidden sm:inline">Online Compiler:</span>
          </div>

          <div className="flex items-center gap-1">
            {PRESETS.map((preset) => {
              const isActive = preset.id === activePresetId;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#04AA6D] text-white shadow-sm shadow-[#04AA6D]/30"
                      : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80"
                  }`}
                >
                  <span>{preset.icon}</span>
                  <span>{preset.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Actions (Run, Toggle Output, Reset, Copy) */}
        <div className="flex items-center gap-1.5 ml-auto">
          {/* Primary Run Button */}
          <button
            onClick={compileAndRun}
            className="px-3.5 py-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-extrabold rounded-lg transition-all shadow-md shadow-[#04AA6D]/20 flex items-center gap-1.5 cursor-pointer active:scale-95"
            title="Run Code and display live output on top"
          >
            <Play size={13} className="fill-white" />
            <span>Run Code</span>
          </button>

          {/* Toggle Output Visibility */}
          <button
            onClick={() => setShowOutput(!showOutput)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer ${
              showOutput 
                ? "bg-slate-800 text-[#04AA6D] border border-[#04AA6D]/40" 
                : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700"
            }`}
            title={showOutput ? "Hide top output preview" : "Show top output preview"}
          >
            {showOutput ? <Eye size={13} /> : <EyeOff size={13} />}
            <span className="hidden sm:inline">{showOutput ? "Output Open" : "Show Output"}</span>
          </button>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="p-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs transition-colors cursor-pointer"
            title="Reset code to initial template"
          >
            <RotateCcw size={14} />
          </button>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="p-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs transition-colors cursor-pointer"
            title="Copy Code"
          >
            {copied ? <Check size={14} className="text-[#04AA6D]" /> : <Copy size={14} />}
          </button>

          {/* Full Screen Playground Link */}
          <Link
            href={`/htmldemo?code=${encodeURIComponent(code)}`}
            target="_blank"
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
            title="Open in Fullscreen IDE Playground"
          >
            <span>Full IDE</span>
            <ExternalLink size={12} />
          </Link>
        </div>

      </div>

      {/* ── OUTPUT PREVIEW (DISPLAYED DIRECTLY ON TOP OF CODE EDITOR WHEN RUN) ── */}
      {showOutput && (
        <div className="border-b border-slate-800 bg-[#090c13] transition-all animate-in slide-in-from-top-2 duration-200">
          
          {/* Output Control Sub-Bar */}
          <div className="bg-[#0f131c] px-3 sm:px-4 py-2 border-b border-slate-800/80 flex items-center justify-between text-xs select-none">
            
            {/* Left: Live Status & Mock URL */}
            <div className="flex items-center gap-2 flex-1 min-w-0 mr-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#04AA6D] inline-block animate-pulse" />
                <span className="font-bold text-white text-xs">Live Output</span>
              </div>
              <div className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 truncate max-w-[220px]">
                nextsem://preview/live.html
              </div>
            </div>

            {/* Right: Device Viewport Switcher & Close Button */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setDeviceMode("desktop")}
                className={`p-1.5 rounded-md transition-colors ${deviceMode === "desktop" ? "bg-slate-800 text-[#04AA6D]" : "text-slate-400 hover:text-white"}`}
                title="Desktop View"
              >
                <Monitor size={13} />
              </button>
              <button
                onClick={() => setDeviceMode("tablet")}
                className={`p-1.5 rounded-md transition-colors ${deviceMode === "tablet" ? "bg-slate-800 text-[#04AA6D]" : "text-slate-400 hover:text-white"}`}
                title="Tablet View"
              >
                <Tablet size={13} />
              </button>
              <button
                onClick={() => setDeviceMode("mobile")}
                className={`p-1.5 rounded-md transition-colors ${deviceMode === "mobile" ? "bg-slate-800 text-[#04AA6D]" : "text-slate-400 hover:text-white"}`}
                title="Mobile View"
              >
                <Smartphone size={13} />
              </button>
              <button
                onClick={() => setShowOutput(false)}
                className="p-1.5 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors ml-1"
                title="Hide output"
              >
                <X size={14} />
              </button>
            </div>

          </div>

          {/* Iframe Live Output Screen */}
          <div className="p-2 sm:p-3 flex items-center justify-center bg-[#05070c] overflow-hidden">
            <div className={`w-full ${getDeviceWidth()} h-[240px] sm:h-[300px] transition-all duration-200 bg-white rounded-lg shadow-inner overflow-hidden border border-slate-800`}>
              <iframe
                ref={iframeRef}
                title="Nextsem Live Preview"
                sandbox="allow-scripts allow-modals"
                className="w-full h-full border-0"
              />
            </div>
          </div>

        </div>
      )}

      {/* ── EDITABLE SOURCE CODE EDITOR (LOCATED DIRECTLY BELOW THE TOP OUTPUT) ── */}
      <div className="flex flex-col bg-[#141824] min-w-0">
        
        {/* Editor Subheader */}
        <div className="bg-[#10131c] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400 select-none">
          <div className="flex items-center gap-2">
            <Code2 size={14} className="text-[#04AA6D]" />
            <span className="font-bold text-slate-200">Interactive Source Code</span>
            <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-[#20c997] font-semibold">Editable</span>
            <span 
              onClick={() => alert("⚡ Emmet Engine Ready: Type abbreviations like '!', 'div.card>h3+p+button.btn', 'ul>li*3', 'df', 'p20' and press Tab to expand!")}
              className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold cursor-pointer hover:bg-emerald-500/20"
              title="Emmet abbreviation expansion active (Press Tab to expand)"
            >
              <Zap size={10} className="fill-emerald-400" />
              <span>Emmet: ✓</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span>Tab / Emmet supported</span>
            <span>•</span>
            <button
              onClick={compileAndRun}
              className="text-[#04AA6D] hover:underline font-bold font-sans cursor-pointer"
            >
              ▶ Click Run to re-render
            </button>
          </div>
        </div>

        {/* Code Textarea with Native Tab & Emmet Support */}
        <div className="relative p-3 sm:p-4 bg-[#141824] flex">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              const start = e.target.selectionStart;
              checkEmmet(e.target.value, start);
            }}
            onKeyUp={(e) => {
              const start = e.currentTarget.selectionStart;
              checkEmmet(e.currentTarget.value, start);
            }}
            onClick={(e) => {
              const start = e.currentTarget.selectionStart;
              checkEmmet(e.currentTarget.value, start);
            }}
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                e.preventDefault();
                const start = e.currentTarget.selectionStart;
                const result = expandEmmetWithIndentation(code, start, "html");
                if (result) {
                  setCode(result.newText);
                  setEmmetSuggestion(null);
                  setTimeout(() => {
                    if (textareaRef.current) {
                      textareaRef.current.selectionStart = textareaRef.current.selectionEnd = result.newCursorPos;
                    }
                  }, 0);
                  return;
                }

                // Default 2-space tab indent
                const end = e.currentTarget.selectionEnd;
                const newCode = code.substring(0, start) + "  " + code.substring(end);
                setCode(newCode);
                setTimeout(() => {
                  if (textareaRef.current) {
                    textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
                  }
                }, 0);
              }
              if (e.key === "Escape") {
                setEmmetSuggestion(null);
              }
            }}
            spellCheck={false}
            className="w-full h-[220px] sm:h-[280px] bg-transparent text-slate-200 font-mono text-xs sm:text-[13px] leading-[1.65] resize-none focus:outline-none selection:bg-[#04AA6D]/30 custom-scrollbar border-0"
            placeholder="Type HTML/CSS code or Emmet abbreviations (e.g. div.card>h3+p+button, ul>li*3, !) here..."
          />

          {/* Floating Emmet Suggestion Tooltip */}
          {emmetSuggestion && (
            <div
              onClick={executeEmmet}
              className="absolute right-4 bottom-4 z-30 bg-[#181b26] border border-[#04AA6D] text-[#cccccc] shadow-2xl rounded-lg p-2.5 max-w-xs sm:max-w-sm text-xs cursor-pointer hover:bg-[#1f2433] transition-all animate-in fade-in slide-in-from-bottom-2 duration-150 select-none"
              title="Click or press Tab ⇥ to expand Emmet abbreviation"
            >
              <div className="flex items-center justify-between pb-1 border-b border-slate-700 mb-1.5">
                <div className="flex items-center gap-1.5 text-[#04AA6D] font-bold text-[11px]">
                  <Zap size={12} className="text-[#04AA6D] fill-[#04AA6D]" />
                  <span>Emmet Abbreviation</span>
                </div>
                <kbd className="bg-slate-900 border border-slate-700 px-1.5 py-0.5 rounded text-[10px] text-[#04AA6D] font-mono font-bold">
                  Tab ⇥
                </kbd>
              </div>
              <div className="font-mono text-[11px] text-white font-semibold truncate mb-1">
                <span className="text-[#04AA6D] font-bold">{emmetSuggestion.abbreviation}</span>
                <span className="text-slate-400 text-[10px] ml-1.5 font-normal">➔ Expand snippet</span>
              </div>
              <pre className="text-[10px] text-emerald-300 font-mono bg-slate-950 p-1.5 rounded border border-slate-800 max-h-20 overflow-hidden whitespace-pre-wrap leading-tight">
                {emmetSuggestion.expanded.length > 120 ? emmetSuggestion.expanded.substring(0, 120) + "..." : emmetSuggestion.expanded}
              </pre>
            </div>
          )}
        </div>


      </div>

      {/* ── BOTTOM COMPILER FOOTER BAR ── */}
      <div className="bg-[#10131c] px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 select-none">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2 h-2 rounded-full bg-[#04AA6D]" />
          <span>Live In-Browser Web Engine</span>
        </div>
        <Link
          href="/html"
          className="font-bold text-[#04AA6D] hover:underline flex items-center gap-1"
        >
          <span>Explore 28+ HTML5 Lessons »</span>
        </Link>
      </div>

    </div>
  );
}
