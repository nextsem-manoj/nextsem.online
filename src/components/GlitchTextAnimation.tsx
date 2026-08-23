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
  Zap,
  RotateCcw
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

export default function GlitchTextAnimation() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [copied, setCopied] = useState(false);
  const [glitchText, setGlitchText] = useState("CYBERPUNK 2077");

  const stepsData = [
    {
      step: 1,
      title: "Step 1: HTML Data Attribute Setup",
      subtitle: "Structuring text with data-text attribute for CSS duplicate rendering.",
      explanation: {
        concept: "Using HTML5 data attributes to replicate content purely via CSS.",
        details: [
          "The data-text attribute holds the string that CSS pseudo-elements will duplicate.",
          "attr(data-text) allows CSS content to read HTML text dynamically.",
          "Sets up high-contrast dark cyberpunk background."
        ],
        takeaway: "Data attributes eliminate duplicate HTML DOM nodes for glitch layers."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Glitch Text | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Base Glitch Heading -->
  <h1 class="glitch" data-text="CYBERPUNK 2077">CYBERPUNK 2077</h1>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Dark Stage & Neon Base */
body {
  background: #08090c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Courier New', monospace;
}

.glitch {
  color: #ffffff;
  font-size: 48px;
  font-weight: 900;
  position: relative;
  letter-spacing: 4px;
}`,
      js: `// Step 1: Glitch Node Loaded
console.log("Step 1: Cyberpunk Glitch Stage Initialized!");`
    },
    {
      step: 2,
      title: "Step 2: Pseudo-Element RGB Channel Duplication",
      subtitle: "Generating overlapping Cyan and Magenta text layers using ::before and ::after.",
      explanation: {
        concept: "Creating chromatic aberration split layers with pseudo-elements.",
        details: [
          "::before creates the Cyan offset channel on the left.",
          "::after creates the Magenta offset channel on the right.",
          "position: absolute aligns both layers exactly on top of the original text."
        ],
        takeaway: "Layering Cyan and Red pseudo-elements produces authentic RGB color separation."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Glitch Text | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Glitch with RGB Channels -->
  <h1 class="glitch rgb-split" data-text="CYBERPUNK 2077">CYBERPUNK 2077</h1>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Cyan & Magenta Pseudo-Layers */
.rgb-split::before,
.rgb-split::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.rgb-split::before {
  left: -2px;
  text-shadow: 2px 0 #00ffff;
  color: #00ffff;
}

.rgb-split::after {
  left: 2px;
  text-shadow: -2px 0 #ff0055;
  color: #ff0055;
}`,
      js: `// Step 2: RGB Channel Split Active
console.log("Step 2: Cyan & Magenta Split Layers Active!");`
    },
    {
      step: 3,
      title: "Step 3: CSS Polygon Slice Ribbons (`clip-path`)",
      subtitle: "Slicing text horizontally using clip-path polygon coordinates.",
      explanation: {
        concept: "Splitting text into distinct horizontal visual slices.",
        details: [
          "clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%) isolates a horizontal strip.",
          "Different polygon coordinates on ::before and ::after slice different parts of the letters.",
          "Creates realistic digital tearing without extra images."
        ],
        takeaway: "clip-path polygon lets you mask specific rectangular bands of text."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Glitch Text | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Sliced Glitch Text -->
  <h1 class="glitch sliced" data-text="CYBERPUNK 2077">CYBERPUNK 2077</h1>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Horizontal Polygon Slices */
.sliced::before {
  clip-path: polygon(0 15%, 100% 15%, 100% 45%, 0 45%);
}

.sliced::after {
  clip-path: polygon(0 60%, 100% 60%, 100% 85%, 0 85%);
}`,
      js: `// Step 3: Horizontal Slices Applied
console.log("Step 3: Polygon Clip-Path Slices Ready!");`
    },
    {
      step: 4,
      title: "Step 4: Jitter & Keyframe Glitch Animation",
      subtitle: "Adding high-frequency random translation offsets and animated clip-paths.",
      explanation: {
        concept: "Dynamic keyframe physics for rapid glitch displacements.",
        details: [
          "@keyframes glitch-anim-1 moves the Cyan layer with changing clip rectangles.",
          "@keyframes glitch-anim-2 jitters the Magenta layer at a staggered duration.",
          "infinite alternate timing produces non-repetitive electronic glitching."
        ],
        takeaway: "Combining clip-path keyframes and transform displacements creates cinematic glitching."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Glitch Text | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Animated Jitter Glitch -->
  <h1 class="glitch animated-glitch" data-text="CYBERPUNK 2077">CYBERPUNK 2077</h1>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: High-Frequency Glitch Keyframes */
@keyframes glitch-anim-1 {
  0%   { clip-path: polygon(0 20%, 100% 20%, 100% 30%, 0 30%); transform: translate(-3px, -1px); }
  25%  { clip-path: polygon(0 50%, 100% 50%, 100% 65%, 0 65%); transform: translate(3px, 1px); }
  50%  { clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%); transform: translate(-2px, 2px); }
  75%  { clip-path: polygon(0 75%, 100% 75%, 100% 90%, 0 90%); transform: translate(2px, -2px); }
  100% { clip-path: polygon(0 35%, 100% 35%, 100% 55%, 0 55%); transform: translate(-1px, 0); }
}

.animated-glitch::before {
  animation: glitch-anim-1 1.8s infinite linear alternate-reverse;
}
.animated-glitch::after {
  animation: glitch-anim-1 2.2s infinite linear alternate;
}`,
      js: `// Step 4: Glitch Keyframe Physics Active
console.log("Step 4: Glitch Vibration Physics Running!");`
    },
    {
      step: 5,
      title: "Step 5: Interactive Cyberpunk Terminal Simulator",
      subtitle: "Full standalone Cyberpunk HUD with scanlines, customizable text, and click burst triggers.",
      explanation: {
        concept: "Complete Cyberpunk HUD with scanlines, custom text, and interactive triggers.",
        details: [
          "Scanline overlay creates authentic CRT monitor scanline rastering.",
          "Live text customizer allows instant rendering of any user sentence.",
          "Click trigger initiates maximum intensity glitch burst."
        ],
        takeaway: "Mastery of CSS pseudo-elements, clip-path, keyframe physics, and CRT HUD styling."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Glitch Text | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Complete Interactive Glitch Stage -->
  <div class="hud-container" id="hudContainer">
    <div class="scanlines"></div>
    <h1 class="glitch-master" data-text="CYBERPUNK 2077" id="glitchTitle">CYBERPUNK 2077</h1>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 5: Complete Standalone Cyberpunk Glitch CSS */
body {
  background: #050608;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Courier New', monospace;
}

.hud-container {
  position: relative;
  padding: 40px 60px;
  background: #090a10;
  border: 1px solid #00ffff40;
  box-shadow: 0 0 30px #00ffff20, inset 0 0 20px #ff005515;
  border-radius: 16px;
  cursor: pointer;
}

.glitch-master {
  color: #ffffff;
  font-size: 42px;
  font-weight: 900;
  position: relative;
  letter-spacing: 5px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.glitch-master::before,
.glitch-master::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-master::before {
  left: -3px;
  color: #00ffff;
  text-shadow: -2px 0 #00ffff;
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch-master::after {
  left: 3px;
  color: #ff0055;
  text-shadow: 2px 0 #ff0055;
  animation: glitch-anim-1 2.5s infinite linear alternate;
}

@keyframes glitch-anim-1 {
  0%   { clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%); transform: translate(-3px, -1px); }
  20%  { clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%); transform: translate(3px, 1px); }
  40%  { clip-path: polygon(0 5%, 100% 5%, 100% 25%, 0 25%); transform: translate(-2px, 2px); }
  60%  { clip-path: polygon(0 80%, 100% 80%, 100% 95%, 0 95%); transform: translate(2px, -2px); }
  80%  { clip-path: polygon(0 35%, 100% 35%, 100% 55%, 0 55%); transform: translate(-1px, 0); }
  100% { clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%); transform: translate(1px, -1px); }
}`,
      js: `// Step 5: Interactive Glitch Trigger
const hud = document.getElementById('hudContainer');

hud.addEventListener('click', () => {
  console.log("⚡ Cyberpunk Glitch Pulse Triggered!");
  alert("⚡ Cyberpunk Glitch Pulse Triggered!");
});`
    }
  ];

  const currentStepData = stepsData[activeStep - 1];

  const handleCopyCode = () => {
    const code = activeTab === 'index.html' ? currentStepData.html : activeTab === 'script.js' ? currentStepData.js : currentStepData.css;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 text-left selection:bg-[#264f78]">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-[#00ffff]" />
            <span className="text-xs font-bold text-[#00ffff] uppercase tracking-wider font-mono">
              Practical Developer Mini-Project #11
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#09101f] border border-[#00ffff]/40 px-3 py-1 rounded-xl text-xs font-mono font-bold text-[#00ffff]">
            <Zap size={14} className="text-[#ff0055]" />
            <span>Cyberpunk 2077 Glitch FX</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          How To Build Cyberpunk 2077 Glitch Text (Step-by-Step)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Master CSS <code className="text-[#00ffff] font-mono">clip-path</code> slicing, pseudo-element RGB channel separation, and high-frequency displacement keyframe physics.
        </p>

        {/* Progress Bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2">
            <span>Progress: Step {activeStep} of 5</span>
            <span className="text-[#00ffff]">{Math.round((activeStep / 5) * 100)}% Completed</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-[#00ffff] to-[#ff0055] transition-all duration-300 ease-out"
              style={{ width: `${(activeStep / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* Left Column: Canvas Preview */}
        <div className="bg-[#050608] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden shadow-2xl space-y-6 w-full font-mono">
          <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-4 z-10">
            <div className="space-y-1 pr-2">
              <span className="text-xs font-extrabold text-[#00ffff] uppercase tracking-wider font-mono">
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

          {/* Glitch Canvas Display */}
          <div className="relative w-full h-64 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-cyan-950 bg-black/90 p-4">
            <div className="relative select-none text-center">
              
              {/* Step 1: Base */}
              <div className="text-2xl sm:text-3xl font-black tracking-widest text-white">
                {glitchText}
              </div>

              {/* Step 2+: Cyan Channel */}
              {activeStep >= 2 && (
                <div
                  className={`absolute inset-0 text-2xl sm:text-3xl font-black tracking-widest text-[#00ffff] pointer-events-none ${
                    activeStep >= 4 ? 'animate-pulse' : ''
                  }`}
                  style={{
                    transform: activeStep >= 2 ? 'translate(-3px, -1px)' : 'none',
                    clipPath: activeStep >= 3 ? 'polygon(0 20%, 100% 20%, 100% 45%, 0 45%)' : 'none',
                    opacity: 0.85
                  }}
                >
                  {glitchText}
                </div>
              )}

              {/* Step 2+: Magenta Channel */}
              {activeStep >= 2 && (
                <div
                  className={`absolute inset-0 text-2xl sm:text-3xl font-black tracking-widest text-[#ff0055] pointer-events-none ${
                    activeStep >= 4 ? 'animate-bounce' : ''
                  }`}
                  style={{
                    transform: activeStep >= 2 ? 'translate(3px, 1px)' : 'none',
                    clipPath: activeStep >= 3 ? 'polygon(0 60%, 100% 60%, 100% 85%, 0 85%)' : 'none',
                    opacity: 0.85,
                    animationDuration: '1.5s'
                  }}
                >
                  {glitchText}
                </div>
              )}
            </div>

            {activeStep === 5 && (
              <div className="mt-6 w-full max-w-xs space-y-1.5 z-20">
                <input
                  type="text"
                  value={glitchText}
                  onChange={(e) => setGlitchText(e.target.value)}
                  className="w-full bg-slate-900/90 border border-cyan-500/40 rounded-xl px-3 py-1.5 text-xs text-cyan-300 font-mono text-center focus:outline-none focus:border-cyan-400"
                  placeholder="Type custom text..."
                />
              </div>
            )}
          </div>

          <div className="bg-[#09101f] border border-slate-800 rounded-2xl p-3.5 flex items-start gap-3">
            <Sparkles size={16} className="text-[#00ffff] shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-bold text-white block">Step {activeStep} Live Inspection</span>
              <p className="text-slate-400">
                {activeStep === 1 && "Base text with data-text attribute initialized on dark canvas."}
                {activeStep === 2 && "Added Cyan (-2px) and Magenta (+2px) RGB offset pseudo-element layers."}
                {activeStep === 3 && "Applied clip-path polygon masks to split the text into horizontal slices."}
                {activeStep === 4 && "Active keyframe translation physics jittering slices at high frequency."}
                {activeStep === 5 && "Full Cyberpunk HUD simulator with real-time customizable text input."}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: VS Code Editor */}
        <div className="bg-[#1e1e1e] border border-[#333333] rounded-3xl overflow-hidden shadow-2xl min-h-[480px] flex flex-col justify-between w-full font-mono">
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
            <VsCodeSyntaxHighlight
              code={activeTab === 'index.html' ? currentStepData.html : activeTab === 'script.js' ? currentStepData.js : currentStepData.css}
              fileType={activeTab === 'index.html' ? 'html' : activeTab === 'script.js' ? 'js' : 'css'}
            />
          </div>
        </div>

      </div>

      {/* Concepts Section */}
      <div className="bg-[#17181c] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <BookOpen className="text-[#00ffff]" size={22} />
          <div>
            <h2 className="text-lg font-bold text-white">
              Step {activeStep} Technical Breakdown & Concepts
            </h2>
            <p className="text-xs text-slate-400">
              Understanding CSS pseudo-elements, polygon clipping, and glitch physics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-[#00ffff] flex items-center gap-2">
              <Code2 size={16} /> Key Technical Details
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentStepData.explanation.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#00ffff] font-bold">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-[#ff0055] flex items-center gap-2">
              <Sparkles size={16} /> Important Takeaway
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentStepData.explanation.takeaway}
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#00ffff] hover:text-cyan-300 disabled:opacity-40 transition-colors cursor-pointer"
              >
                <span>{activeStep === 5 ? "All 5 steps completed!" : `Proceed to Step ${activeStep + 1}`}</span>
                {activeStep < 5 && <ChevronRight size={14} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <div className="bg-[#17181c] border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-[#00ffff]" size={22} />
          <h2 className="text-lg font-bold text-white">Recommended Nextsem Labs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/matrix-code-animation" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#00ffff] text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">1. Matrix Code Rain Animation Lab</span>
            <p className="text-slate-400">Master vertical translation keyframes and neon glow text shadows.</p>
          </Link>
          <Link href="/neon-button-animation" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#00ffff] text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">2. Cyberpulse Laser Neon Button Lab</span>
            <p className="text-slate-400">Create laser gradient borders and multi-layered glowing buttons.</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
