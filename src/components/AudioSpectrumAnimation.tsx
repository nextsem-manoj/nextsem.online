"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronRight, ChevronLeft, ChevronDown, Layers, FileCode, Hash, FileJson, GraduationCap, Volume2, Play, Pause, Music, ArrowRight } from 'lucide-react';

function RenderHtmlTag({ tagStr }: { tagStr: string }) {
  if (tagStr.startsWith('</')) {
    const tagName = tagStr.replace(/^<\//, '').replace(/>$/, '').trim();
    return (
      <span>
        <span className="text-[#808080]">&lt;/</span>
        <span className="text-[#569CD6] font-bold">{tagName}</span>
        <span className="text-[#808080]">&gt;</span>
      </span>
    );
  }

  const isSelfClosing = tagStr.endsWith('/>');
  const inner = tagStr.replace(/^</, '').replace(/\/?>$/, '');
  const firstSpaceIdx = inner.search(/\s/);

  if (firstSpaceIdx === -1) {
    const tagName = inner.trim();
    return (
      <span>
        <span className="text-[#808080]">&lt;</span>
        <span className="text-[#569CD6] font-bold">{tagName}</span>
        <span className="text-[#808080]">{isSelfClosing ? '/&gt;' : '&gt;'}</span>
      </span>
    );
  }

  const tagName = inner.substring(0, firstSpaceIdx);
  const attrString = inner.substring(firstSpaceIdx);

  const attrRegex = /([\w:-]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s>]+))?/g;
  const attrTokens: React.ReactNode[] = [];
  let match: RegExpExecArray | null;

  while ((match = attrRegex.exec(attrString)) !== null) {
    const attrName = match[1];
    const attrVal = match[2];
    attrTokens.push(
      <span key={match.index}>
        <span className="text-[#9CDCFE]"> {attrName}</span>
        {attrVal !== undefined && (
          <span>
            <span className="text-[#D4D4D4]">=</span>
            <span className="text-[#CE9178]">{attrVal}</span>
          </span>
        )}
      </span>
    );
  }

  return (
    <span>
      <span className="text-[#808080]">&lt;</span>
      <span className="text-[#569CD6] font-bold">{tagName}</span>
      {attrTokens}
      <span className="text-[#808080]">{isSelfClosing ? '/&gt;' : '&gt;'}</span>
    </span>
  );
}

function RenderLineContent({ line, fileType }: { line: string; fileType: 'html' | 'css' | 'js' }) {
  if (line.trim().startsWith('//') || line.trim().startsWith('/*') || line.trim().startsWith('<!--')) {
    return <span className="text-[#6A9955] italic whitespace-pre-wrap break-words break-all">{line}</span>;
  }

  if (fileType === 'html') {
    if (line.includes('<!DOCTYPE') || line.includes('<!doctype')) {
      return (
        <span className="whitespace-pre-wrap break-words break-all">
          <span className="text-[#808080]">&lt;!</span>
          <span className="text-[#569CD6] font-bold">DOCTYPE</span>
          <span className="text-[#9CDCFE]"> html</span>
          <span className="text-[#808080]">&gt;</span>
        </span>
      );
    }

    const parts = line.split(/(<[^>]+>)/g);
    return (
      <span className="whitespace-pre-wrap break-words break-all">
        {parts.map((part, pIdx) => {
          if (part.startsWith('<') && part.endsWith('>')) {
            return <RenderHtmlTag key={pIdx} tagStr={part} />;
          }
          return <span key={pIdx} className="text-[#D4D4D4]">{part}</span>;
        })}
      </span>
    );
  }

  if (fileType === 'js') {
    return (
      <span className="whitespace-pre-wrap break-words break-all">
        {line.split(' ').map((word, wIdx) => {
          if (['const', 'let', 'var', 'function', 'if', 'else', 'return', 'document', 'addEventListener'].includes(word)) {
            return <span key={wIdx} className="text-[#569CD6] font-bold">{word} </span>;
          }
          if (['console', 'window', 'alert', 'getElementById', 'querySelector'].includes(word)) {
            return <span key={wIdx} className="text-[#4EC9B0] font-bold">{word} </span>;
          }
          if (word.startsWith('"') || word.startsWith("'") || word.endsWith('"') || word.endsWith("'")) {
            return <span key={wIdx} className="text-[#CE9178]">{word} </span>;
          }
          return <span key={wIdx} className="text-[#D4D4D4]">{word} </span>;
        })}
      </span>
    );
  }

  if (line.includes(':') && !line.trim().startsWith('@')) {
    const colonIdx = line.indexOf(':');
    const prop = line.substring(0, colonIdx);
    const val = line.substring(colonIdx + 1);
    return (
      <span className="whitespace-pre-wrap break-words break-all">
        <span className="text-[#9CDCFE]">{prop}</span>
        <span className="text-[#D4D4D4]">:</span>
        <span className="text-[#CE9178]">{val}</span>
      </span>
    );
  }

  return <span className="text-[#D4D4D4] whitespace-pre-wrap break-words break-all">{line}</span>;
}

function VsCodeSyntaxHighlight({ code, fileType }: { code: string; fileType: 'html' | 'css' | 'js' }) {
  const [isFolded, setIsFolded] = useState<boolean>(fileType === 'html');
  const lines = code.split('\n');

  return (
    <div className="font-mono text-xs leading-relaxed w-full max-w-full overflow-x-hidden selection:bg-[#264f78]">
      {fileType === 'html' && isFolded && lines.length >= 10 ? (
        <div className="space-y-0.5">
          <div className="flex items-center group hover:bg-[#2a2d2e] px-1 py-0.5 rounded transition-colors">
            <div className="flex items-center text-[#858585] text-[11px] select-none min-w-[40px] pr-2 shrink-0">
              <span className="w-5 text-right font-mono">1</span>
              <button onClick={() => setIsFolded(false)} className="ml-1 text-slate-400 hover:text-white p-0.5 cursor-pointer">
                <ChevronRight size={13} />
              </button>
            </div>
            <div onClick={() => setIsFolded(false)} className="flex flex-wrap items-center gap-2 cursor-pointer bg-[#2d3748]/60 hover:bg-[#2d3748] px-2.5 py-0.5 rounded border border-slate-700/60 text-[#808080] text-xs font-mono select-none">
              <span className="text-[#569CD6] font-bold">&lt;!DOCTYPE html&gt;</span>
              <span className="text-[#808080]">&lt;head&gt;...&lt;/head&gt;</span>
              <span className="text-[10px] text-sky-400 bg-sky-950 px-1.5 py-0.2 rounded border border-sky-800 font-sans font-bold">
                Click to Expand HTML Head (Lines 1-10) ↔
              </span>
            </div>
          </div>

          {lines.slice(10).map((line, relativeIdx) => {
            const actualLineNum = relativeIdx + 11;
            return (
              <div key={actualLineNum} className="flex items-start group hover:bg-[#2a2d2e] px-1 py-0.5 rounded transition-colors">
                <div className="flex items-center text-[#858585] text-[11px] select-none min-w-[40px] pr-2 shrink-0">
                  <span className="w-5 text-right font-mono">{actualLineNum}</span>
                  <span className="w-4" />
                </div>
                <div className="flex-1 overflow-x-hidden">
                  <RenderLineContent line={line} fileType={fileType} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-0.5">
          {lines.map((line, lineIdx) => (
            <div key={lineIdx} className="flex items-start group hover:bg-[#2a2d2e] px-1 py-0.5 rounded transition-colors">
              <div className="flex items-center text-[#858585] text-[11px] select-none min-w-[40px] pr-2 shrink-0">
                <span className="w-5 text-right font-mono">{lineIdx + 1}</span>
                <span className="w-4" />
              </div>
              <div className="flex-1 overflow-x-hidden">
                <RenderLineContent line={line} fileType={fileType} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AudioSpectrumAnimation() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('script.js');
  const [copied, setCopied] = useState(false);
  const [barHeights, setBarHeights] = useState<number[]>([40, 70, 30, 90, 50, 80, 20, 60, 100, 45, 85, 35]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setBarHeights((prev) => prev.map(() => Math.floor(Math.random() * 85) + 15));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: Audio Equalizer Flex Container",
      subtitle: "Building HTML flexbox container for sound frequency bars.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Equalizer Spectrum | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Equalizer Container -->
  <div class="spectrum-container">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Equalizer Layout */
.spectrum-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  height: 200px;
  background: #050912;
  border-radius: 16px;
  padding: 24px;
}`,
      js: `// Step 1: Container initialized
console.log("Step 1: Audio Spectrum Container Active!");`
    },
    {
      step: 2,
      title: "Step 2: CSS Bar Styling & Neon Gradients",
      subtitle: "Styling equalizer bars with rounded caps & gradient glows.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Equalizer Spectrum | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Styled Equalizer Bars -->
  <div class="spectrum-container">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Bar Styling & Neon Glow */
.bar {
  width: 20px;
  background: linear-gradient(to top, #10b981, #2dd4bf, #fde047);
  border-radius: 6px 6px 0 0;
  box-shadow: 0 0 12px #10b981;
  transition: height 0.15s ease-out;
}`,
      js: `// Step 2: Neon Gradients Applied
console.log("Step 2: Neon Equalizer Bars Rendered!");`
    },
    {
      step: 3,
      title: "Step 3: Web Audio API & Frequency Beats Loop",
      subtitle: "Animating frequency heights dynamically using setInterval or Web Audio Analyser.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Equalizer Spectrum | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Equalizer Loop -->
  <div class="spectrum-container" id="spectrum"></div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Dynamic Height Transition */
.bar {
  height: 50%;
  transition: height 0.15s ease-out;
}`,
      js: `// Step 3: Frequency Loop
const bars = document.querySelectorAll('.bar');

setInterval(() => {
  bars.forEach(bar => {
    const randomHeight = Math.floor(Math.random() * 85) + 15;
    bar.style.height = randomHeight + '%';
  });
}, 150);`
    },
    {
      step: 4,
      title: "Step 4: Interactive Play / Pause Beats Toggle",
      subtitle: "Adding user controls to toggle beats animation state.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Equalizer Spectrum | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Interactive Audio Player -->
  <div class="audio-player">
    <button id="toggleBtn">Pause Beats</button>
    <div class="spectrum-container" id="spectrum"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: Button & State Styling */
#toggleBtn {
  background: #10b981;
  color: #000;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}`,
      js: `// Step 4: Play / Pause Control
let isPlaying = true;
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  btn.textContent = isPlaying ? 'Pause Beats' : 'Play Beats';
});`
    },
    {
      step: 5,
      title: "Step 5: VS Code Interactive Workspace",
      subtitle: "Full interactive spectrum code. Edit script.js or style.css live below!",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Equalizer Spectrum | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Complete Interactive Audio Spectrum Markup -->
  <div class="spectrum-card">
    <button id="toggleBtn">Pause Beats</button>
    <div class="spectrum-container" id="spectrum">
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      <div class="bar"></div><div class="bar"></div><div class="bar"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* 💡 VS Code Live Editor: Complete Standalone Working Equalizer CSS */
body {
  background: #050912;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.spectrum-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  height: 200px;
  background: #080d1a;
  border-radius: 16px;
  padding: 24px;
}

.bar {
  width: 20px;
  background: linear-gradient(to top, #10b981, #2dd4bf, #fde047);
  border-radius: 6px 6px 0 0;
  box-shadow: 0 0 12px #10b981;
  transition: height 0.15s ease-out;
}`,
      js: `// Step 5: Complete Interactive Audio Visualizer
const bars = document.querySelectorAll('.bar');
let isPlaying = true;

setInterval(() => {
  if (!isPlaying) return;
  bars.forEach(bar => {
    const height = Math.floor(Math.random() * 85) + 15;
    bar.style.height = height + '%';
  });
}, 150);`
    }
  ];

  const [userHtml, setUserHtml] = useState<string>(stepsData[4].html);
  const [userCss, setUserCss] = useState<string>(stepsData[4].css);
  const [userJs, setUserJs] = useState<string>(stepsData[4].js);

  const currentStepData = stepsData[activeStep - 1];

  const getCurrentActiveCode = () => {
    if (activeStep === 5) {
      if (activeTab === 'index.html') return userHtml;
      if (activeTab === 'style.css') return userCss;
      return userJs;
    }
    if (activeTab === 'index.html') return currentStepData.html;
    if (activeTab === 'style.css') return currentStepData.css;
    return currentStepData.js;
  };

  const getCurrentFileType = () => {
    if (activeTab === 'index.html') return 'html';
    if (activeTab === 'style.css') return 'css';
    return 'js';
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getCurrentActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 text-left font-sans">
      
      {/* Page Header */}
      <div className="space-y-2 border-b border-slate-800 pb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music size={18} className="text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Step-by-Step Interactive Integration
            </span>
          </div>

          {/* NS Brand Badge */}
          <div className="flex items-center gap-1.5 bg-[#09101f] border-2 border-[#04AA6D] px-2.5 py-1 rounded-xl text-xs font-mono font-black shadow-lg">
            <span className="text-[#04AA6D] text-sm">N</span>
            <span className="text-white text-sm">S</span>
            <span className="text-slate-300 ml-1 font-sans font-bold">Nextsem Labs</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Audio Equalizer Waveform Spectrum Beats
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Learn how to build a dynamic audio frequency spectrum visualizer step-by-step.
        </p>
      </div>



      {/* WORKSPACE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* LEFT COLUMN: Main Stage */}
        <div className="bg-[#050912] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between min-h-[460px] relative overflow-hidden shadow-2xl space-y-6 w-full">
          
          <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="space-y-0.5">
              <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider font-mono">
                {currentStepData.title}
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {currentStepData.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                disabled={activeStep === 1}
                className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft size={15} />
              </button>
              <span className="text-xs font-mono font-bold text-slate-400">
                {activeStep} / 5
              </span>
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* DYNAMIC EQUALIZER STAGE */}
          <div className="flex flex-col items-center justify-center space-y-6 my-auto w-full">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 text-black font-extrabold text-xs cursor-pointer hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'Pause Beats' : 'Play Beats'}</span>
            </button>

            <div className="flex items-end justify-center gap-2 sm:gap-3 h-48 w-full max-w-md bg-[#080d1a] border border-slate-800 rounded-2xl p-6 shadow-inner">
              {barHeights.map((h, idx) => (
                <div
                  key={idx}
                  className="w-4 sm:w-6 bg-gradient-to-t from-emerald-500 via-teal-400 to-amber-300 rounded-t-md transition-all duration-150 ease-out shadow-[0_0_12px_#10b981]"
                  style={{ height: `${isPlaying ? h : 15}%` }}
                />
              ))}
            </div>
          </div>

          {/* SLEEK NS WATERMARK */}
          <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#000000]/90 border border-[#04AA6D]/50 flex items-center justify-center font-mono font-black text-xs text-[#04AA6D] shadow-lg shadow-[#04AA6D]/20 animate-ns-watermark-pulse">
              NS
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: VS Code Multi-Tab Workspace Editor */}
        <div className="bg-[#1e1e1e] border border-[#333333] rounded-3xl overflow-hidden shadow-2xl space-y-0 text-left font-mono min-h-[460px] flex flex-col justify-between w-full">
          
          <div className="bg-[#252526] border-b border-[#333333] flex flex-wrap items-center justify-between px-3 pt-2">
            <div className="flex items-center gap-1 overflow-x-auto">
              <div className="flex items-center gap-1.5 mr-3 px-1">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              <button
                onClick={() => setActiveTab('index.html')}
                className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 border-t-2 rounded-t-sm transition-all cursor-pointer ${
                  activeTab === 'index.html' ? "bg-[#1e1e1e] border-[#007acc] text-white" : "bg-[#2d2d2d]/60 border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <FileCode size={13} className="text-[#e34c26]" />
                <span>index.html</span>
              </button>

              <button
                onClick={() => setActiveTab('style.css')}
                className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 border-t-2 rounded-t-sm transition-all cursor-pointer ${
                  activeTab === 'style.css' ? "bg-[#1e1e1e] border-[#007acc] text-white" : "bg-[#2d2d2d]/60 border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Hash size={13} className="text-[#569cd6]" />
                <span>style.css</span>
              </button>

              <button
                onClick={() => setActiveTab('script.js')}
                className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 border-t-2 rounded-t-sm transition-all cursor-pointer ${
                  activeTab === 'script.js' ? "bg-[#1e1e1e] border-[#007acc] text-white" : "bg-[#2d2d2d]/60 border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <FileJson size={13} className="text-[#f7df1e]" />
                <span>script.js</span>
              </button>
            </div>

            <button
              onClick={handleCopyCode}
              className="text-xs text-slate-400 hover:text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 px-2 mb-1"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copied ? "Copied!" : `Copy ${activeTab}`}</span>
            </button>
          </div>

          <div className="p-4 bg-[#1e1e1e] w-full max-w-full overflow-x-hidden flex-1 relative rounded-b-2xl border border-slate-800/80">
            {activeStep === 5 ? (
              <div className="space-y-2 h-full flex flex-col">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between border-b border-slate-800 pb-2 select-none">
                  <span>💡 Step 5 Live Workspace: Edit code below for instant updates</span>
                  <span className="text-[#04AA6D] font-bold">● Live Editable</span>
                </div>
                <textarea
                  value={getCurrentActiveCode()}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (activeTab === 'index.html') setUserHtml(val);
                    else if (activeTab === 'style.css') setUserCss(val);
                    else setUserJs(val);
                  }}
                  rows={16}
                  spellCheck={false}
                  className={`w-full bg-[#1e1e1e] font-mono text-xs leading-relaxed border border-slate-800/80 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-[#04AA6D] whitespace-pre-wrap break-words resize-none selection:bg-[#264f78] ${
                    activeTab === 'style.css' ? 'text-[#9CDCFE]' : activeTab === 'index.html' ? 'text-[#D4D4D4]' : 'text-[#CE9178]'
                  }`}
                  placeholder={`Edit ${activeTab} live here...`}
                />
              </div>
            ) : (
              <VsCodeSyntaxHighlight code={getCurrentActiveCode()} fileType={getCurrentFileType()} />
            )}
          </div>

        </div>

      </div>

      {/* REQUIRED SKILLS & COURSE LESSON LINKS */}
      <div className="bg-[#17181c] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#04AA6D]/20 border border-[#04AA6D]/50 flex items-center justify-center text-[#04AA6D]">
              <GraduationCap size={22} />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">
                What You Need To Learn To Build This Project
              </h2>
              <p className="text-xs text-slate-300">
                Master these foundational web development concepts to build audio visualizers from scratch!
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex bg-[#04AA6D]/10 border border-[#04AA6D]/30 text-[#04AA6D] text-xs font-mono font-bold px-3 py-1 rounded-full">
            Prerequisites & Roadmap
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/html/learn-html-web-free-lessons-what-is-the-internet"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-[#04AA6D]/10 border border-[#04AA6D]/30 flex items-center justify-center text-[#04AA6D] font-bold text-xs">
                HTML
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                1. HTML Flex Layout
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Learn Flexbox container layouts, DOM element nesting, and structure.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start HTML Lessons »
            </span>
          </Link>

          <Link
            href="/html/html-headings-paragraphs-and-text-formatting"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-xs">
                CSS3
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                2. CSS Neon Gradients
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Style equalizer bars with `linear-gradient` and box-shadow glows.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start CSS Styling Lessons »
            </span>
          </Link>

          <Link
            href="/html/quiz"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                AUDIO
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                3. Web Audio API Loops
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Master `setInterval`, `AnalyserNode` frequency data arrays, and height scaling.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Take Audio Quiz »
            </span>
          </Link>

          <Link
            href="/cli/learn-windows-command-prompt-cmd-basics"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                🪟 CMD
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                4. 🪟 Windows CMD Terminal
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Launch dev servers on Windows PC to test web audio animations live!
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start 🪟 Windows CMD Lessons »
            </span>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes nsWatermarkPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(4, 170, 109, 0.2); }
          50%      { transform: scale(1.05); box-shadow: 0 0 20px rgba(4, 170, 109, 0.5); }
        }
        .animate-ns-watermark-pulse {
          animation: nsWatermarkPulse 2.5s infinite ease-in-out;
        }
      `}</style>

    </div>
  );
}
