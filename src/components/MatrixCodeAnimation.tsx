"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  FileCode,
  Hash,
  FileJson,
  GraduationCap,
  Terminal,
  BookOpen,
  Code2,
  Sparkles,
  Palette
} from 'lucide-react';

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
          if (['console', 'window', 'alert', 'getElementById'].includes(word)) {
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

export default function MatrixCodeAnimation() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'green' | 'red' | 'cyan' | 'gold'>('green');
  const [boostActive, setBoostActive] = useState(false);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: HTML Matrix Stream Container",
      subtitle: "Structuring digital code stream columns with monospace alignment.",
      explanation: {
        concept: "Creating the HTML skeleton and basic CSS black stage layout.",
        details: [
          "HTML <div class=\"matrix-rain\"> acts as the outer viewport/stage boundary.",
          "Inner <div class=\"column\"> holds the vertical binary stream characters (1 0 1 0 1).",
          "font-family: monospace ensures every character has identical width, preventing horizontal jitter."
        ],
        takeaway: "Without monospace fonts, different digit widths cause column misalignment."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Matrix Code Rain | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Matrix Stream Container -->
  <div class="matrix-rain">
    <div class="column">1 0 1 0 1</div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Black Stage Layout */
.matrix-rain {
  background: #000000;
  font-family: monospace;
  color: #04AA6D;
  padding: 20px;
  display: flex;
  justify-content: center;
}`,
      js: `// Step 1: Matrix Stream Container Initialized
console.log("Step 1: Matrix Stream Stage Created!");`
    },
    {
      step: 2,
      title: "Step 2: Neon Text Shadow & Glowing Head",
      subtitle: "Applying high-contrast laser glow and bright white leading character highlights.",
      explanation: {
        concept: "Laser green text shadows and bright lead characters.",
        details: [
          "text-shadow: 0 0 10px #39ff14, 0 0 20px #04AA6D builds a multi-layered neon glow.",
          ".head { color: #ffffff; } highlights the leading character of the falling drop.",
          "White lead character + bright green shadow recreates the authentic Matrix film visual effect."
        ],
        takeaway: "Layering multiple text shadows produces high-intensity radiance without image textures."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Matrix Code Rain | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Glowing Binary Column with Lead Character -->
  <div class="column glow">
    <span class="head">1</span>
    <span>0</span>
    <span>1</span>
    <span>0</span>
    <span>1</span>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Laser Green Text Shadow & White Lead Character */
.glow {
  color: #39ff14;
  text-shadow: 0 0 10px #39ff14, 0 0 20px #04AA6D;
  display: flex;
  flex-direction: column;
}

.head {
  color: #ffffff;
  text-shadow: 0 0 15px #ffffff, 0 0 25px #39ff14;
  font-weight: bold;
}`,
      js: `// Step 2: Neon Laser Shadow Activated
console.log("Step 2: Neon Glow & White Lead Highlight Active!");`
    },
    {
      step: 3,
      title: "Step 3: Keyframe Vertical Translation Physics",
      subtitle: "Animating falling code streams smoothly using CSS `@keyframes matrixFall`.",
      explanation: {
        concept: "Vertical translation physics using CSS keyframe animations.",
        details: [
          "@keyframes matrixFall moves text along the Y-axis from translateY(-100%) to translateY(100%).",
          "linear timing function ensures constant rain velocity without easing acceleration.",
          "infinite loop keeps the rain stream dropping continuously."
        ],
        takeaway: "GPU-accelerated transform: translateY() produces smooth 60fps animations."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Matrix Code Rain | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Falling Stream -->
  <div class="matrix-stage">
    <div class="column animate-fall glow">
      <span class="head">1</span>
      <span>0</span>
      <span>1</span>
      <span>0</span>
      <span>1</span>
      <span>0</span>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Vertical Fall Animation Physics */
@keyframes matrixFall {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.animate-fall {
  animation: matrixFall 4s linear infinite;
}`,
      js: `// Step 3: Animation Physics Active
console.log("Step 3: Keyframe Vertical Fall Active!");`
    },
    {
      step: 4,
      title: "Step 4: Multi-Column Cascading & Staggered Speeds",
      subtitle: "Cascading multiple streams with independent animation speeds and start delays.",
      explanation: {
        concept: "Breaking uniform movement with multi-column animation offsets.",
        details: [
          "Multiple column elements positioned side-by-side inside a flex container.",
          "Different animation-duration values (3s, 4.5s, 2.8s) vary stream drop velocities.",
          "Different animation-delay values (0s, 1.2s, 0.6s) prevent streams from falling simultaneously."
        ],
        takeaway: "Staggered delays and varied durations create realistic digital rain depth."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Matrix Code Rain | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Multi-Column Cascade Grid -->
  <div class="matrix-grid">
    <div class="col col-1 glow"><span class="head">1</span><span>0101</span></div>
    <div class="col col-2 glow"><span class="head">0</span><span>1100</span></div>
    <div class="col col-3 glow"><span class="head">1</span><span>0011</span></div>
    <div class="col col-4 glow"><span class="head">0</span><span>1010</span></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: Staggered Speeds & Delays */
.matrix-grid {
  display: flex;
  justify-content: space-around;
  background: #000;
  height: 220px;
  overflow: hidden;
}

.col-1 { animation: matrixFall 3s linear 0s infinite; }
.col-2 { animation: matrixFall 4.5s linear 1.2s infinite; }
.col-3 { animation: matrixFall 2.8s linear 0.5s infinite; }
.col-4 { animation: matrixFall 3.8s linear 0.9s infinite; }`,
      js: `// Step 4: Multi-Column Cascading Active
console.log("Step 4: Multi-Threaded Cascading Rain Running!");`
    },
    {
      step: 5,
      title: "Step 5: Interactive Workspace & Customization Engine",
      subtitle: "Full digital matrix code rain simulator. Edit CSS live below or click the stage for a speed boost!",
      explanation: {
        concept: "Full standalone implementation with opacity fading and click interactions.",
        details: [
          "writing-mode: vertical-rl creates native vertical text direction for matrix glyphs.",
          "@keyframes matrixFall includes opacity: 0 -> 1 -> 0 fade-in and fade-out effects.",
          "JavaScript event listener lets users click to boost animation speed dynamically."
        ],
        takeaway: "Combines HTML structure, CSS keyframes, vertical typography, and JS event handling."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Matrix Code Rain | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Complete Interactive Matrix Stream -->
  <div class="matrix-stage" id="matrixStage">
    <div class="stream s1"><span class="head">1</span>01010101</div>
    <div class="stream s2"><span class="head">0</span>10101010</div>
    <div class="stream s3"><span class="head">1</span>11000111</div>
    <div class="stream s4"><span class="head">0</span>00111000</div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 5: Complete Standalone Working Matrix Rain CSS */
body {
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
  font-family: monospace;
}

.matrix-stage {
  display: flex;
  justify-content: space-around;
  width: 320px;
  height: 240px;
  background: #000000;
  border: 1px solid #04AA6D;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 0 30px rgba(4, 170, 109, 0.25);
  cursor: pointer;
}

.stream {
  color: #39ff14;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0 0 12px #39ff14, 0 0 20px #04AA6D;
  writing-mode: vertical-rl;
  letter-spacing: 4px;
}

.stream .head {
  color: #ffffff;
  text-shadow: 0 0 15px #ffffff, 0 0 25px #39ff14;
}

.s1 { animation: matrixFall 3.2s linear infinite 0s; }
.s2 { animation: matrixFall 4.5s linear infinite 1s; }
.s3 { animation: matrixFall 2.7s linear infinite 0.4s; }
.s4 { animation: matrixFall 3.9s linear infinite 0.8s; }

@keyframes matrixFall {
  0%   { transform: translateY(-100%); opacity: 0; }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}`,
      js: `// Step 5: Interactive Rain Event Listener
const matrixStage = document.getElementById('matrixStage');

matrixStage.addEventListener('click', () => {
  console.log("⚡ Matrix Digital Rain Boost Active!");
  alert("⚡ Matrix Digital Rain Boost Activated!");
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

  const themeStyles = {
    green: {
      text: '#39ff14',
      shadow: '#04AA6D',
      head: '#ffffff',
      border: 'border-emerald-500/40',
      badge: 'bg-emerald-950 text-emerald-400 border-emerald-800'
    },
    red: {
      text: '#ff2a6d',
      shadow: '#ff003c',
      head: '#ffffff',
      border: 'border-rose-500/40',
      badge: 'bg-rose-950 text-rose-400 border-rose-800'
    },
    cyan: {
      text: '#05d9e8',
      shadow: '#0056b3',
      head: '#ffffff',
      border: 'border-cyan-500/40',
      badge: 'bg-cyan-950 text-cyan-400 border-cyan-800'
    },
    gold: {
      text: '#ffb703',
      shadow: '#fb8500',
      head: '#ffffff',
      border: 'border-amber-500/40',
      badge: 'bg-amber-950 text-amber-400 border-amber-800'
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <div className="max-w-6xl mx-auto space-y-10 text-left selection:bg-[#264f78]">
      
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-[#04AA6D]" />
            <span className="text-xs font-bold text-[#04AA6D] uppercase tracking-wider font-mono">
              Interactive Full-Stack Tutorial
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Color Theme:</span>
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setTheme('green')}
                className={`w-5 h-5 rounded-full bg-[#39ff14] border cursor-pointer transition-transform ${
                  theme === 'green' ? 'scale-110 ring-2 ring-white border-white' : 'opacity-60 hover:opacity-100 border-transparent'
                }`}
                title="Matrix Green"
              />
              <button
                onClick={() => setTheme('red')}
                className={`w-5 h-5 rounded-full bg-[#ff2a6d] border cursor-pointer transition-transform ${
                  theme === 'red' ? 'scale-110 ring-2 ring-white border-white' : 'opacity-60 hover:opacity-100 border-transparent'
                }`}
                title="Cyber Red"
              />
              <button
                onClick={() => setTheme('cyan')}
                className={`w-5 h-5 rounded-full bg-[#05d9e8] border cursor-pointer transition-transform ${
                  theme === 'cyan' ? 'scale-110 ring-2 ring-white border-white' : 'opacity-60 hover:opacity-100 border-transparent'
                }`}
                title="Electric Cyan"
              />
              <button
                onClick={() => setTheme('gold')}
                className={`w-5 h-5 rounded-full bg-[#ffb703] border cursor-pointer transition-transform ${
                  theme === 'gold' ? 'scale-110 ring-2 ring-white border-white' : 'opacity-60 hover:opacity-100 border-transparent'
                }`}
                title="Amber Gold"
              />
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          How To Build Digital Matrix Code Rain (Step-by-Step)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Learn how to craft the iconic Matrix green falling code rain using pure HTML, CSS keyframe animation physics, and optional JavaScript interactivity.
        </p>

        {/* Step Progress Bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2">
            <span>Progress: Step {activeStep} of 5</span>
            <span className="text-[#04AA6D]">{Math.round((activeStep / 5) * 100)}% Completed</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-[#04AA6D] to-[#39ff14] transition-all duration-300 ease-out"
              style={{ width: `${(activeStep / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* Left Column: Live Canvas Simulator */}
        <div className="bg-[#000000] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden shadow-2xl space-y-6 w-full font-mono">
          
          <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-4 z-10">
            <div className="space-y-1 pr-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-[#04AA6D] uppercase tracking-wider font-mono">
                  {currentStepData.title}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {currentStepData.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                disabled={activeStep === 1}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-30 hover:text-white transition-all cursor-pointer"
                title="Previous Step"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-mono font-bold text-slate-400 px-1">
                {activeStep} / 5
              </span>
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-30 hover:text-white transition-all cursor-pointer"
                title="Next Step"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Canvas Output */}
          <div
            onClick={() => {
              if (activeStep === 5) {
                setBoostActive(true);
                setTimeout(() => setBoostActive(false), 2000);
              }
            }}
            className={`relative w-full h-64 flex items-center justify-around overflow-hidden rounded-2xl border ${currentTheme.border} bg-black p-4 transition-all duration-300 ${
              activeStep === 5 ? 'cursor-pointer hover:border-emerald-400/80' : ''
            }`}
          >
            <div className="flex justify-around w-full h-full text-sm font-mono font-bold select-none">
              
              {/* Stream 1 */}
              <div
                className="flex flex-col space-y-1 transition-all duration-300"
                style={{
                  color: currentTheme.text,
                  textShadow: activeStep >= 2 ? `0 0 10px ${currentTheme.text}, 0 0 20px ${currentTheme.shadow}` : 'none',
                  animation: activeStep >= 3 ? `matrixFall ${boostActive ? '1s' : '3s'} linear infinite 0s` : 'none'
                }}
              >
                <span style={{ color: activeStep >= 2 ? currentTheme.head : currentTheme.text, textShadow: activeStep >= 2 ? `0 0 15px ${currentTheme.head}` : 'none' }}>1</span>
                <span>0</span><span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
              </div>

              {/* Stream 2 (Step 2+) */}
              {activeStep >= 2 && (
                <div
                  className="flex flex-col space-y-1 transition-all duration-300"
                  style={{
                    color: currentTheme.text,
                    textShadow: `0 0 10px ${currentTheme.text}, 0 0 20px ${currentTheme.shadow}`,
                    animation: activeStep >= 3 ? `matrixFall ${boostActive ? '1.5s' : '4.2s'} linear infinite 1.2s` : 'none'
                  }}
                >
                  <span style={{ color: currentTheme.head, textShadow: `0 0 15px ${currentTheme.head}` }}>0</span>
                  <span>1</span><span>1</span><span>0</span><span>1</span><span>0</span><span>0</span>
                </div>
              )}

              {/* Stream 3 (Step 4+) */}
              {activeStep >= 4 && (
                <div
                  className="flex flex-col space-y-1 transition-all duration-300"
                  style={{
                    color: currentTheme.text,
                    textShadow: `0 0 10px ${currentTheme.text}, 0 0 20px ${currentTheme.shadow}`,
                    animation: `matrixFall ${boostActive ? '0.8s' : '2.5s'} linear infinite 0.5s`
                  }}
                >
                  <span style={{ color: currentTheme.head, textShadow: `0 0 15px ${currentTheme.head}` }}>1</span>
                  <span>1</span><span>0</span><span>1</span><span>0</span><span>1</span><span>1</span>
                </div>
              )}

              {/* Stream 4 (Step 4+) */}
              {activeStep >= 4 && (
                <div
                  className="flex flex-col space-y-1 transition-all duration-300"
                  style={{
                    color: currentTheme.text,
                    textShadow: `0 0 10px ${currentTheme.text}, 0 0 20px ${currentTheme.shadow}`,
                    animation: `matrixFall ${boostActive ? '1.2s' : '3.8s'} linear infinite 0.9s`
                  }}
                >
                  <span style={{ color: currentTheme.head, textShadow: `0 0 15px ${currentTheme.head}` }}>0</span>
                  <span>0</span><span>1</span><span>0</span><span>1</span><span>1</span><span>0</span>
                </div>
              )}

            </div>

            {boostActive && (
              <div className="absolute inset-0 bg-emerald-500/10 backdrop-blur-[1px] flex items-center justify-center pointer-events-none animate-pulse">
                <span className="text-xs font-mono font-black text-emerald-400 bg-black/80 px-3 py-1.5 rounded-full border border-emerald-500 shadow-xl flex items-center gap-1.5">
                  <Sparkles size={14} /> ⚡ MATRIX SPEED BOOST ACTIVATED!
                </span>
              </div>
            )}
          </div>

          {/* Interactive Hint Banner */}
          <div className="bg-[#09101f] border border-slate-800 rounded-2xl p-3.5 flex items-start gap-3">
            <Sparkles size={16} className="text-[#04AA6D] shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-bold text-white block">Step {activeStep} Canvas Preview</span>
              <p className="text-slate-400">
                {activeStep === 1 && "Static column rendered with monospace typography on a pitch-black stage."}
                {activeStep === 2 && "Added laser text-shadow glow and a bright white leading character drop head."}
                {activeStep === 3 && "Vertical @keyframes matrixFall animation active (translateY translation physics)."}
                {activeStep === 4 && "Multi-column cascading matrix streams with staggered drop speeds & delays."}
                {activeStep === 5 && "Full interactive Matrix Rain workspace. Click the canvas to trigger a speed boost!"}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: VS Code Multi-Tab Code Editor */}
        <div className="bg-[#1e1e1e] border border-[#333333] rounded-3xl overflow-hidden shadow-2xl min-h-[480px] flex flex-col justify-between w-full font-mono">
          
          {/* Editor Header Bar */}
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

          {/* VS Code Code Body */}
          <div className="p-4 bg-[#1e1e1e] w-full max-w-full overflow-x-hidden flex-1 relative rounded-b-2xl border border-slate-800/80">
            {activeStep === 5 ? (
              <div className="space-y-2 h-full flex flex-col">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between border-b border-slate-800 pb-2 select-none">
                  <span>💡 Step 5 Live Playground: Edit code live below</span>
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
                    activeTab === 'style.css' ? 'text-[#39ff14]' : activeTab === 'index.html' ? 'text-[#D4D4D4]' : 'text-[#CE9178]'
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

      {/* Step Concept & Code Breakdown Section */}
      <div className="bg-[#17181c] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <BookOpen className="text-[#04AA6D]" size={22} />
          <div>
            <h2 className="text-lg font-bold text-white">
              Step {activeStep} Detailed Breakdown & Concepts
            </h2>
            <p className="text-xs text-slate-400">
              Understanding why this code works and the underlying web animation mechanics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-[#04AA6D] flex items-center gap-2">
              <Code2 size={16} /> Key Technical Details
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentStepData.explanation.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#04AA6D] font-bold">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-sky-400 flex items-center gap-2">
              <Sparkles size={16} /> Important Takeaway
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentStepData.explanation.takeaway}
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#04AA6D] hover:text-emerald-300 disabled:opacity-40 transition-colors cursor-pointer"
              >
                <span>{activeStep === 5 ? "You completed all 5 steps!" : `Proceed to Step ${activeStep + 1}`}</span>
                {activeStep < 5 && <ChevronRight size={14} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Course Link Section */}
      <div className="bg-[#17181c] border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-[#04AA6D]" size={22} />
          <h2 className="text-lg font-bold text-white">Recommended Nextsem Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/html" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#04AA6D] text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">1. Master CSS Keyframes & Transforms</span>
            <p className="text-slate-400">Deep dive into 60fps GPU animation physics & text-shadow lighting.</p>
          </Link>
          <Link href="/cli" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#04AA6D] text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">2. Windows CLI & Web Project Setup</span>
            <p className="text-slate-400">Run digital matrix code animations locally on your Windows PC.</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
