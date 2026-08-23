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
  Sparkles,
  BookOpen,
  Code2,
  Dna,
  Activity,
  Zap
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
          if (['const', 'let', 'var', 'function', 'if', 'else', 'return', 'document', 'addEventListener', 'for'].includes(word)) {
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

export default function DnaHelixAnimation() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [copied, setCopied] = useState(false);
  const [bioTheme, setBioTheme] = useState<'emerald' | 'cyan' | 'violet'>('emerald');
  const [speed, setSpeed] = useState<number>(2.5);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: HTML Base Pair Node Architecture",
      subtitle: "Structuring paired nucleotide spheres with connecting hydrogen bridge bars.",
      explanation: {
        concept: "Representing genetic base pairs in HTML DOM.",
        details: [
          "Each .pair row contains left node, connecting bar, and right node.",
          "Flexbox alignment centers the pair horizontally.",
          "Glow filters prepare nodes for 3D illumination."
        ],
        takeaway: "Clean node pairing simplifies 3D wave mathematics."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D DNA Helix | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Single DNA Base Pair -->
  <div class="dna-stage">
    <div class="pair">
      <div class="node left"></div>
      <div class="bar"></div>
      <div class="node right"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Base Pair Layout */
body {
  background: #04060a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.pair {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
  margin: 10px 0;
}

.node {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 12px #10b981;
}

.bar {
  flex: 1;
  height: 2px;
  background: rgba(16, 185, 129, 0.3);
}`,
      js: `// Step 1: DNA Node Initialized
console.log("Step 1: DNA Node Structure Ready!");`
    },
    {
      step: 2,
      title: "Step 2: Sinusoidal Horizontal Translation",
      subtitle: "Animating nodes back and forth with CSS @keyframes wave physics.",
      explanation: {
        concept: "Translating circular 3D motion into 2D sinusoidal sine waves.",
        details: [
          "Left node translates from -40px to +40px.",
          "Right node oscillates in opposite phase from +40px to -40px.",
          "easeInOut timing function mimics harmonic rotational physics."
        ],
        takeaway: "Opposite sinusoidal translation creates the illusion of circular orbit."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D DNA Helix | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Oscillating Base Pair -->
  <div class="dna-stage">
    <div class="pair">
      <div class="node left animate-sin"></div>
      <div class="bar"></div>
      <div class="node right animate-cos"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Sinusoidal Keyframe Waves */
@keyframes sinWaveLeft {
  0%   { transform: translateX(-40px); }
  50%  { transform: translateX(40px); }
  100% { transform: translateX(-40px); }
}

@keyframes sinWaveRight {
  0%   { transform: translateX(40px); }
  50%  { transform: translateX(-40px); }
  100% { transform: translateX(40px); }
}

.animate-sin { animation: sinWaveLeft 2s ease-in-out infinite; }
.animate-cos { animation: sinWaveRight 2s ease-in-out infinite; }`,
      js: `// Step 2: Sinusoidal Harmonic Motion
console.log("Step 2: Sine Wave Oscillations Active!");`
    },
    {
      step: 3,
      title: "Step 3: Staggered Delay Wave Cascading",
      subtitle: "Cascading 10+ pairs with incremental animation-delay values.",
      explanation: {
        concept: "Wave propagation through incremental phase delays.",
        details: [
          "Each subsequent pair gets a +0.15s delay offset.",
          "Generates a fluid spiral helical crest traveling vertically.",
          "Connects individual pairs into an unbroken double helix."
        ],
        takeaway: "animation-delay offsets create coherent traveling wave patterns."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D DNA Helix | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Cascading Multi-Strand Pairs -->
  <div class="dna-stage">
    <div class="pair p1"><div class="node left"></div><div class="bar"></div><div class="node right"></div></div>
    <div class="pair p2"><div class="node left"></div><div class="bar"></div><div class="node right"></div></div>
    <div class="pair p3"><div class="node left"></div><div class="bar"></div><div class="node right"></div></div>
    <div class="pair p4"><div class="node left"></div><div class="bar"></div><div class="node right"></div></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Staggered Phase Delays */
.p1 .node { animation-delay: 0.0s; }
.p2 .node { animation-delay: 0.2s; }
.p3 .node { animation-delay: 0.4s; }
.p4 .node { animation-delay: 0.6s; }`,
      js: `// Step 3: Phase Cascading Ready
console.log("Step 3: Staggered Wave Delays Synced!");`
    },
    {
      step: 4,
      title: "Step 4: 3D Depth Opacity & Scale Physics",
      subtitle: "Dimming and scaling back-hemisphere nodes to simulate true Z-depth.",
      explanation: {
        concept: "Simulating 3D perspective using scale() and opacity.",
        details: [
          "Nodes passing behind scale down to 0.7x and drop to 0.35 opacity.",
          "Nodes crossing the foreground scale up to 1.25x with intense neon glow.",
          "Creates vivid 3D roundness without WebGL."
        ],
        takeaway: "Synchronizing scale and opacity with translation generates depth."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D DNA Helix | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: 3D Depth Enhanced Helix -->
  <div class="dna-stage">
    <div class="pair depth-active"><div class="node left"></div><div class="bar"></div><div class="node right"></div></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: 3D Z-Depth Harmonic Keyframes */
@keyframes depthWaveLeft {
  0%   { transform: translateX(-40px) scale(1.2); opacity: 1; z-index: 10; }
  50%  { transform: translateX(40px) scale(0.7); opacity: 0.35; z-index: 1; }
  100% { transform: translateX(-40px) scale(1.2); opacity: 1; z-index: 10; }
}

.depth-active .left { animation: depthWaveLeft 2.4s ease-in-out infinite; }`,
      js: `// Step 4: 3D Depth Scaling Active
console.log("Step 4: 3D Z-Depth Scaling Online!");`
    },
    {
      step: 5,
      title: "Step 5: Interactive Quantum Genetics Bio-Lab",
      subtitle: "Full double helix simulator with bio-luminescent color themes and speed controls.",
      explanation: {
        concept: "Production-ready 3D genetic visualization engine.",
        details: [
          "12 full base pairs running synchronized harmonic phase loops.",
          "Theme selector changes between Bio-Emerald, Quantum-Cyan, and Cyber-Violet.",
          "Live speed controller adjusts rotational velocity."
        ],
        takeaway: "Mastery of harmonic keyframe physics, wave delays, and 3D depth simulation."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D DNA Helix | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Full Interactive DNA Helix Stage -->
  <div class="dna-chamber" id="dnaChamber">
    <div class="dna-helix">
      <!-- 12 Base Pairs generated dynamically -->
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 5: Complete Standalone DNA Helix CSS */
body {
  background: #030508;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: monospace;
}

.dna-chamber {
  padding: 30px;
  background: #070b12;
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 24px;
  box-shadow: 0 0 40px rgba(16, 185, 129, 0.15);
}

.pair {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
  height: 14px;
}

.node {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 14px #10b981;
}`,
      js: `// Step 5: Interactive Genetic Mutation Listener
const chamber = document.getElementById('dnaChamber');

chamber.addEventListener('click', () => {
  console.log("🧬 DNA Genetic Scan Complete!");
  alert("🧬 Genetic Scan Complete: 100% Sequence Match!");
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

  const themeColors = {
    emerald: { main: '#10b981', sec: '#059669', shadow: 'rgba(16, 185, 129, 0.4)' },
    cyan: { main: '#06b6d4', sec: '#0891b2', shadow: 'rgba(6, 182, 212, 0.4)' },
    violet: { main: '#c084fc', sec: '#9333ea', shadow: 'rgba(192, 132, 252, 0.4)' }
  };

  const currentTheme = themeColors[bioTheme];

  return (
    <div className="max-w-6xl mx-auto space-y-10 text-left selection:bg-[#264f78]">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Dna size={18} className="text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
              Practical Developer Mini-Project #13
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Theme:</span>
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setBioTheme('emerald')}
                className={`w-5 h-5 rounded-full bg-[#10b981] cursor-pointer transition-transform ${bioTheme === 'emerald' ? 'scale-110 ring-2 ring-white' : 'opacity-60'}`}
                title="Bio Emerald"
              />
              <button
                onClick={() => setBioTheme('cyan')}
                className={`w-5 h-5 rounded-full bg-[#06b6d4] cursor-pointer transition-transform ${bioTheme === 'cyan' ? 'scale-110 ring-2 ring-white' : 'opacity-60'}`}
                title="Quantum Cyan"
              />
              <button
                onClick={() => setBioTheme('violet')}
                className={`w-5 h-5 rounded-full bg-[#c084fc] cursor-pointer transition-transform ${bioTheme === 'violet' ? 'scale-110 ring-2 ring-white' : 'opacity-60'}`}
                title="Cyber Violet"
              />
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          How To Build 3D Rotating DNA Double Helix (Step-by-Step)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Master mathematical harmonic sine wave keyframes, staggered phase delays, and 3D Z-depth scaling physics.
        </p>

        {/* Progress Bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2">
            <span>Progress: Step {activeStep} of 5</span>
            <span className="text-emerald-400">{Math.round((activeStep / 5) * 100)}% Completed</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 transition-all duration-300 ease-out"
              style={{ width: `${(activeStep / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* Left Column: Canvas Preview */}
        <div className="bg-[#04060a] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden shadow-2xl space-y-6 w-full font-mono">
          <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-4 z-10">
            <div className="space-y-1 pr-2">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider font-mono">
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

          {/* DNA Helix Canvas */}
          <div className="relative w-full h-80 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-emerald-950/60 bg-black/90 p-4">
            <div className="space-y-2.5 py-4">
              {Array.from({ length: activeStep >= 3 ? 10 : 1 }).map((_, idx) => {
                const delay = activeStep >= 3 ? idx * 0.18 : 0;
                return (
                  <div key={idx} className="flex items-center justify-between w-40 relative">
                    {/* Left Node */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full z-10 transition-all ${
                        activeStep >= 2 ? 'animate-bounce' : ''
                      }`}
                      style={{
                        background: currentTheme.main,
                        boxShadow: `0 0 12px ${currentTheme.main}`,
                        animationDuration: `${speed}s`,
                        animationDelay: `${delay}s`
                      }}
                    />

                    {/* Connecting Bar */}
                    <div
                      className="flex-1 h-0.5 mx-1"
                      style={{
                        background: `linear-gradient(90deg, ${currentTheme.main}40, ${currentTheme.sec}40)`
                      }}
                    />

                    {/* Right Node */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full z-10 transition-all ${
                        activeStep >= 2 ? 'animate-bounce' : ''
                      }`}
                      style={{
                        background: currentTheme.sec,
                        boxShadow: `0 0 12px ${currentTheme.sec}`,
                        animationDuration: `${speed}s`,
                        animationDelay: `${delay + 0.5}s`
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#09101f] border border-slate-800 rounded-2xl p-3.5 flex items-start gap-3">
            <Sparkles size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-bold text-white block">Step {activeStep} Live Inspection</span>
              <p className="text-slate-400">
                {activeStep === 1 && "Single paired base node structure initialized on dark canvas."}
                {activeStep === 2 && "Harmonic sine/cosine translation physics active on left and right nodes."}
                {activeStep === 3 && "Staggered phase delay wave cascading vertically across 10 base pairs."}
                {activeStep === 4 && "Depth opacity and scale physics simulating 3D rotation roundness."}
                {activeStep === 5 && "Full Quantum Genetics Bio-Lab. Switch color themes and explore the helix!"}
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
          <BookOpen className="text-emerald-400" size={22} />
          <div>
            <h2 className="text-lg font-bold text-white">
              Step {activeStep} Technical Breakdown & Concepts
            </h2>
            <p className="text-xs text-slate-400">
              Understanding Harmonic Sine Waves, Staggered Delays, and 3D Perspective Scaling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
              <Code2 size={16} /> Key Technical Details
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentStepData.explanation.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
              <Sparkles size={16} /> Important Takeaway
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentStepData.explanation.takeaway}
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 disabled:opacity-40 transition-colors cursor-pointer"
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
          <GraduationCap className="text-emerald-400" size={22} />
          <h2 className="text-lg font-bold text-white">Recommended Nextsem Labs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/animated-waves-animation" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-emerald-400 text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">1. Animated Ocean Waves Lab</span>
            <p className="text-slate-400">Learn SVG wave paths and buoyancy physics.</p>
          </Link>
          <Link href="/audio-spectrum-animation" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-emerald-400 text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">2. Audio Spectrum Equalizer Lab</span>
            <p className="text-slate-400">Master audio frequency bars and responsive wave heights.</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
