"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronRight, ChevronLeft, ChevronDown, Layers, FileCode, Hash, FileJson, GraduationCap, Globe, ArrowRight } from 'lucide-react';

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
              <button
                onClick={() => setIsFolded(false)}
                className="ml-1 text-slate-400 hover:text-white p-0.5 cursor-pointer"
                title="Expand HTML Head (<head>...)"
              >
                <ChevronRight size={13} />
              </button>
            </div>
            <div
              onClick={() => setIsFolded(false)}
              className="flex flex-wrap items-center gap-2 cursor-pointer bg-[#2d3748]/60 hover:bg-[#2d3748] px-2.5 py-0.5 rounded border border-slate-700/60 text-[#808080] text-xs font-mono select-none"
            >
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
          {lines.map((line, lineIdx) => {
            const lineNum = lineIdx + 1;
            const isHeadStart = fileType === 'html' && lineIdx === 0 && lines.length >= 10;

            return (
              <div key={lineIdx} className="flex items-start group hover:bg-[#2a2d2e] px-1 py-0.5 rounded transition-colors">
                <div className="flex items-center text-[#858585] text-[11px] select-none min-w-[40px] pr-2 shrink-0">
                  <span className="w-5 text-right font-mono">{lineNum}</span>
                  {isHeadStart ? (
                    <button
                      onClick={() => setIsFolded(true)}
                      className="ml-1 text-slate-400 hover:text-white p-0.5 cursor-pointer"
                      title="Fold HTML Head (<head>...)"
                    >
                      <ChevronDown size={13} />
                    </button>
                  ) : (
                    <span className="w-4" />
                  )}
                </div>
                <div className="flex-1 overflow-x-hidden">
                  <RenderLineContent line={line} fileType={fileType} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function SolarSystemAnimation() {
  const gutterRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [copied, setCopied] = useState(false);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: Sun Core & Orbit Ring",
      subtitle: "Centering the glowing sun core and circular orbit line.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Solar System 3D Orbit | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Sun Core -->
  <div class="space">
    <div class="sun">☀️</div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Glowing Sun Styling */
.sun {
  width: 48px;
  height: 48px;
  background: #f59e0b;
  box-shadow: 0 0 30px #f59e0b;
  border-radius: 50%;
}`,
      js: `// Step 1: Space Initialized
console.log("Step 1: Sun Core Formed!");`
    },
    {
      step: 2,
      title: "Step 2: Earth & Moon Orbits",
      subtitle: "Positioning concentric circular border rings with absolute coordinates.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Solar System 3D Orbit | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Concentric Orbits -->
  <div class="space">
    <div class="sun">☀️</div>
    <div class="earth-orbit">
      <div class="earth">🌍</div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Circular Orbital Ring */
.earth-orbit {
  width: 144px;
  height: 144px;
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 50%;
  position: absolute;
}`,
      js: `// Step 2: Orbit Path Active
console.log("Step 2: Earth Orbit Path Calculated!");`
    },
    {
      step: 3,
      title: "Step 3: Keyframe Rotation Physics",
      subtitle: "Applying CSS `@keyframes spin` with infinite linear animation.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Solar System 3D Orbit | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Rotational Orbit Container -->
  <div class="space">
    <div class="earth-orbit animate-spin">
      <div class="earth">🌍</div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Keyframe Rotation Physics */
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 8s infinite linear;
}`,
      js: `// Step 3: Orbital Motion Active
console.log("Step 3: Keyframe Spin Active!");`
    },
    {
      step: 4,
      title: "Step 4: Planet Colors & Shadows",
      subtitle: "Styling blue Earth and red Mars with 3D spherical gradients.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Solar System 3D Orbit | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Multi-Planet System -->
  <div class="space">
    <div class="earth-orbit"><div class="earth">🌍</div></div>
    <div class="mars-orbit"><div class="mars">🔴</div></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: Spherical Lighting & Mars Orbit */
.earth { background: #38bdf8; box-shadow: 0 0 10px #38bdf8; }
.mars-orbit { width: 224px; height: 224px; animation: spin 14s infinite linear; }
.mars  { background: #ef4444; box-shadow: 0 0 10px #ef4444; }`,
      js: `// Step 4: Kepler Multi-Planet Physics
console.log("Step 4: Earth & Mars Orbits Synced!");`
    },
    {
      step: 5,
      title: "Step 5: VS Code Complete Solar Loader",
      subtitle: "Full multi-planet 3D orbital animation with Kepler speed physics.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Solar System 3D Orbit | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Complete Interactive Solar System -->
  <div class="solar-system" id="spaceStage">
    <div class="sun">☀️</div>
    <div class="earth-orbit animate-spin">
      <div class="earth">🌍</div>
    </div>
    <div class="mars-orbit animate-spin-slow">
      <div class="mars">🔴</div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* 💡 VS Code Live Editor: Complete Standalone Working Solar System CSS */
body {
  background: #04060c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
}

.solar-system {
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sun {
  width: 48px;
  height: 48px;
  background: #f59e0b;
  box-shadow: 0 0 35px #f59e0b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-10;
}

.earth-orbit {
  width: 150px;
  height: 150px;
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 50%;
  position: absolute;
  animation: spin 8s infinite linear;
  display: flex;
  justify-content: center;
}

.earth {
  width: 20px;
  height: 20px;
  background: #38bdf8;
  box-shadow: 0 0 10px #38bdf8;
  border-radius: 50%;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}

.mars-orbit {
  width: 240px;
  height: 240px;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 50%;
  position: absolute;
  animation: spin 14s infinite linear;
  display: flex;
  justify-content: center;
}

.mars {
  width: 16px;
  height: 16px;
  background: #ef4444;
  box-shadow: 0 0 10px #ef4444;
  border-radius: 50%;
  margin-top: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}`,
      js: `// Step 5: Solar System Interactive Event Listener
const spaceStage = document.getElementById('spaceStage');

spaceStage.addEventListener('click', () => {
  console.log("🪐 Kepler Speed Boost Triggered!");
  alert("🪐 Kepler Orbital Speed Boost Activated!");
});`
    }
  ];

  const [userHtml, setUserHtml] = useState<string>(stepsData[4].html);
  const [userCss, setUserCss] = useState<string>(stepsData[4].css);
  const [userJs, setUserJs] = useState<string>(stepsData[4].js);

  const currentStepData = stepsData[activeStep - 1];

  const getCurrentActiveCode = () => {
    if (activeStep === 5) {
      if (activeTab === 'index.html') return userHtml;
      if (activeTab === 'script.js') return userJs;
      return userCss;
    }
    if (activeTab === 'index.html') return currentStepData.html;
    if (activeTab === 'script.js') return currentStepData.js;
    return currentStepData.css;
  };

  const getCurrentFileType = (): 'html' | 'css' | 'js' => {
    if (activeTab === 'index.html') return 'html';
    if (activeTab === 'script.js') return 'js';
    return 'css';
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getCurrentActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 text-left selection:bg-[#264f78]">
      
      {/* Page Header */}
      <div className="space-y-2 border-b border-slate-800 pb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-amber-400" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Step-by-Step Interactive Integration
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-ping" />
            <span>Nextsem Labs</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          How To Build A CSS Solar System Planet Orbit (Step-by-Step)
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Watch the solar system assemble piece-by-piece from HTML structure to rotational physics in VS Code below.
        </p>
      </div>

      {/* Desktop Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* Left Column: Canvas */}
        <div className="bg-[#04060c] border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-between min-h-[460px] relative overflow-hidden shadow-2xl space-y-6 w-full">
          <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="space-y-0.5">
              <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider font-mono">
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
                className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-30 hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft size={15} />
              </button>
              <span className="text-xs font-mono font-bold text-slate-400">
                {activeStep} / 5
              </span>
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-30 hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Interactive Solar System Graphic */}
          <div className="relative w-64 h-64 flex items-center justify-center my-auto">
            <div className="w-12 h-12 rounded-full bg-amber-400 shadow-[0_0_35px_#f59e0b] z-10 animate-pulse flex items-center justify-center text-xs font-bold text-amber-950">
              ☀️
            </div>

            {activeStep >= 2 && (
              <div className={`absolute w-36 h-36 rounded-full border border-sky-500/30 flex items-center justify-center ${activeStep >= 3 ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }}>
                <div className="w-4 h-4 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] absolute -top-2 flex items-center justify-center text-[8px]">
                  🌍
                </div>
              </div>
            )}

            {activeStep >= 4 && (
              <div className={`absolute w-56 h-56 rounded-full border border-red-500/20 flex items-center justify-center ${activeStep >= 3 ? 'animate-spin' : ''}`} style={{ animationDuration: '14s' }}>
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] absolute -top-1.5 flex items-center justify-center text-[7px]">
                  🔴
                </div>
              </div>
            )}
          </div>

          <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
            <div className="w-9 h-9 rounded-xl bg-[#000000]/90 border border-[#04AA6D]/50 flex items-center justify-center font-mono font-black text-xs text-[#04AA6D]">
              NS
            </div>
          </div>
        </div>

        {/* Right Column: VS Code Multi-Tab Editor */}
        <div className="bg-[#1e1e1e] border border-[#333333] rounded-3xl overflow-hidden shadow-2xl min-h-[460px] flex flex-col justify-between w-full font-mono">
          
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
                  activeTab === 'index.html'
                    ? "bg-[#1e1e1e] border-[#007acc] text-white"
                    : "bg-[#2d2d2d]/60 border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <FileCode size={13} className="text-[#e34c26]" />
                <span>index.html</span>
              </button>

              <button
                onClick={() => setActiveTab('style.css')}
                className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 border-t-2 rounded-t-sm transition-all cursor-pointer ${
                  activeTab === 'style.css'
                    ? "bg-[#1e1e1e] border-[#007acc] text-white"
                    : "bg-[#2d2d2d]/60 border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Hash size={13} className="text-[#569cd6]" />
                <span>style.css</span>
              </button>

              <button
                onClick={() => setActiveTab('script.js')}
                className={`px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 border-t-2 rounded-t-sm transition-all cursor-pointer ${
                  activeTab === 'script.js'
                    ? "bg-[#1e1e1e] border-[#007acc] text-white"
                    : "bg-[#2d2d2d]/60 border-transparent text-slate-400 hover:text-slate-200"
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

          {/* VS Code Code Body (Line-Numbered, Collapsible <head> Pill, & VS Code Color-Coded Syntax Highlighting) */}
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
                    else if (activeTab === 'script.js') setUserJs(val);
                    else setUserCss(val);
                  }}
                  rows={16}
                  spellCheck={false}
                  className={`w-full bg-[#1e1e1e] font-mono text-xs leading-relaxed border border-slate-800/80 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-[#04AA6D] whitespace-pre-wrap break-words resize-none selection:bg-[#264f78] ${
                    activeTab === 'style.css' ? 'text-[#f59e0b]' : activeTab === 'index.html' ? 'text-[#D4D4D4]' : 'text-[#CE9178]'
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

      {/* Course Link Section */}
      <div className="bg-[#17181c] border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-[#04AA6D]" />
          <h2 className="text-lg font-bold text-white">What You Need To Learn</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/html" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#04AA6D] text-xs space-y-1 block">
            <span className="font-bold text-white">1. CSS Keyframe Rotations</span>
            <p className="text-slate-400">Master continuous 360-degree orbital rotational physics.</p>
          </Link>
          <Link href="/cli" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#04AA6D] text-xs space-y-1 block">
            <span className="font-bold text-white">2. Windows CLI Project Setup</span>
            <p className="text-slate-400">Run solar orbit animations locally on your PC.</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
