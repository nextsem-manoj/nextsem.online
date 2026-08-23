"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronRight, ChevronLeft, ChevronDown, Layers, FileCode, Hash, FileJson, GraduationCap, Waves, ArrowRight } from 'lucide-react';

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

export default function AnimatedWavesAnimation() {
  const gutterRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [copied, setCopied] = useState(false);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: SVG Sine Wave Curves",
      subtitle: "Designing SVG bezier curve path templates.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animated Ocean Waves | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: SVG Wave Path -->
  <div class="ocean">
    <svg viewBox="0 0 1440 320" class="wave-svg">
      <path d="M0,192L48,197.3...Z"></path>
    </svg>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Wave Canvas */
.wave-svg {
  width: 100%;
  height: 120px;
}`,
      js: `// Step 1: SVG Canvas Formed
console.log("Step 1: SVG Wave Curves Created!");`
    },
    {
      step: 2,
      title: "Step 2: Layering Wave Depths",
      subtitle: "Overlapping 3 translucent wave SVG paths with varying opacities.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animated Ocean Waves | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Multi-Layer Ocean Depths -->
  <div class="ocean">
    <svg class="wave-1"><path></path></svg>
    <svg class="wave-2"><path></path></svg>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Opacity & Color Depths */
.wave-1 { fill: rgba(14, 165, 233, 0.4); }
.wave-2 { fill: rgba(4, 170, 109, 0.9); }`,
      js: `// Step 2: Ocean Layers Rendered
console.log("Step 2: Depth Opacities Active!");`
    },
    {
      step: 3,
      title: "Step 3: Horizontal Wave Translation",
      subtitle: "Animating waves horizontally with `@keyframes moveWave`.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animated Ocean Waves | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Scrolling Wave Container -->
  <div class="ocean">
    <svg class="wave-2 animate-wave"><path></path></svg>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Horizontal Keyframe Scroll */
@keyframes moveWave {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-wave { animation: moveWave 8s linear infinite; }`,
      js: `// Step 3: Horizontal Wave Physics
console.log("Step 3: Keyframe Wave Motion Active!");`
    },
    {
      step: 4,
      title: "Step 4: Floating Bobbing Physics",
      subtitle: "Adding vertical sinusoidal bobbing transform on floating elements.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animated Ocean Waves | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Floating Boat/Island -->
  <div class="ocean">
    <div class="boat animate-bobbing">⛵</div>
    <svg class="wave-2"><path></path></svg>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: Vertical Bobbing Physics */
@keyframes floatBob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}
.animate-bobbing { animation: floatBob 3s ease-in-out infinite; }`,
      js: `// Step 4: Boat Physics Attached
console.log("Step 4: Bobbing Motion Active!");`
    },
    {
      step: 5,
      title: "Step 5: VS Code Complete Ocean Wave Loader",
      subtitle: "Full multi-layer animated ocean waves with floating island bobbing physics.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animated Ocean Waves | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Complete Interactive Ocean Loader -->
  <div class="ocean" id="oceanStage">
    <div class="boat animate-bobbing">⛵</div>
    <svg class="wave-1"><path d="M0,192...Z"></path></svg>
    <svg class="wave-2 animate-wave"><path d="M0,128...Z"></path></svg>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* 💡 VS Code Live Editor: Complete Standalone Working Ocean Waves CSS */
body {
  background: #030812;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
}

.ocean {
  width: 100%;
  max-width: 600px;
  height: 240px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #0f172a, #0284c7);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.boat {
  font-size: 32px;
  margin-bottom: 24px;
  z-index: 10;
  animation: floatBob 3s ease-in-out infinite;
}

.wave-1 {
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 80px;
  fill: rgba(14, 165, 233, 0.4);
  animation: moveWave 12s linear infinite;
}

.wave-2 {
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 60px;
  fill: #04AA6D;
  animation: moveWave 7s linear infinite;
}

@keyframes moveWave {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes floatBob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}`,
      js: `// Step 5: Ocean Interactive Click Event
const ocean = document.getElementById('oceanStage');

ocean.addEventListener('click', () => {
  console.log("🌊 Wave Ripple Blast Triggered!");
  alert("🌊 Ocean Wave Ripple Blast Activated!");
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
            <Waves size={16} className="text-teal-400" />
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Step-by-Step Interactive Integration
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-ping" />
            <span>Nextsem Labs</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          How To Build Animated CSS Ocean Waves (Step-by-Step)
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Watch the ocean assemble piece-by-piece from HTML structure to fluid wave physics in VS Code below.
        </p>
      </div>

      {/* Desktop Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* Left Column: Canvas */}
        <div className="bg-[#030812] border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-between min-h-[460px] relative overflow-hidden shadow-2xl space-y-6 w-full">
          <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-4 z-10">
            <div className="space-y-0.5">
              <span className="text-[11px] font-extrabold text-teal-400 uppercase tracking-wider font-mono">
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

          {/* Interactive Floating Island & Waves */}
          <div className="relative w-full h-48 my-auto flex flex-col items-center justify-end overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-[#0f172a] to-[#0284c7]/30">
            {activeStep >= 4 && (
              <div className="relative z-20 mb-6 flex flex-col items-center animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="text-3xl filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                  ⛵
                </div>
              </div>
            )}

            {activeStep >= 1 && (
              <div className="w-full absolute bottom-0 left-0 right-0 opacity-40 animate-pulse">
                <svg viewBox="0 0 1440 320" className="w-full h-20 fill-sky-400">
                  <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
            )}

            {activeStep >= 2 && (
              <div className="w-full absolute bottom-0 left-0 right-0 opacity-80">
                <svg viewBox="0 0 1440 320" className="w-full h-16 fill-[#04AA6D]">
                  <path d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,154.7C672,128,768,96,864,106.7C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
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
                    activeTab === 'style.css' ? 'text-[#14b8a6]' : activeTab === 'index.html' ? 'text-[#D4D4D4]' : 'text-[#CE9178]'
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
            <span className="font-bold text-white">1. SVG Wave Bezier Curves</span>
            <p className="text-slate-400">Master SVG paths and multi-layer opacity physics.</p>
          </Link>
          <Link href="/cli" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#04AA6D] text-xs space-y-1 block">
            <span className="font-bold text-white">2. Windows CLI Project Setup</span>
            <p className="text-slate-400">Run SVG wave loaders locally on Windows PC.</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
