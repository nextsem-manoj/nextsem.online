"use client";

import React, { useState, useRef } from 'react';
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
  CreditCard,
  Crown,
  Layers
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
          if (['console', 'window', 'alert', 'getElementById', 'querySelector', 'getBoundingClientRect'].includes(word)) {
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

export default function HolographicCardAnimation() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [copied, setCopied] = useState(false);
  const [cardTheme, setCardTheme] = useState<'gold' | 'cyber' | 'diamond'>('gold');
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 16;
    const rotY = ((x - centerX) / centerX) * 16;
    const sX = (x / rect.width) * 100;
    const sY = (y / rect.height) * 100;

    setTilt({ x: rotX, y: rotY, shineX: sX, shineY: sY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
  };

  const stepsData = [
    {
      step: 1,
      title: "Step 1: HTML Card Frame & 3D Perspective",
      subtitle: "Setting up perspective container and 3D card layout.",
      explanation: {
        concept: "Enabling the 3D space with CSS perspective property.",
        details: [
          "perspective: 1000px establishes a realistic depth viewing camera.",
          "Card element has fixed aspect ratio with dark glassmorphism styling.",
          "Rounded corners and subtle box shadow create depth foundation."
        ],
        takeaway: "Without perspective on the parent, 3D rotations appear flat."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Holographic Card | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Perspective Container -->
  <div class="card-wrap">
    <div class="card">
      <h2>VIP DEVELOPER</h2>
      <p>Nextsem Academy</p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: 3D Perspective Stage */
body {
  background: #06070a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.card-wrap {
  perspective: 1000px;
}

.card {
  width: 260px;
  height: 380px;
  background: #0f131d;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 24px;
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}`,
      js: `// Step 1: 3D Stage Initialized
console.log("Step 1: Perspective 3D Stage Ready!");`
    },
    {
      step: 2,
      title: "Step 2: Preserve-3D & Depth Stacking",
      subtitle: "Elevating card badges and text forward along the Z-axis with translateZ.",
      explanation: {
        concept: "Transforming 2D UI elements into multi-layered 3D components.",
        details: [
          "transform-style: preserve-3d allows child layers to maintain their 3D position.",
          "translateZ(40px) pulls the badge and title out towards the viewer.",
          "Creates realistic parallax when the card is tilted."
        ],
        takeaway: "translateZ creates genuine depth separation between layers."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Holographic Card | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: 3D Stacking Layers -->
  <div class="card-wrap">
    <div class="card preserve-3d">
      <div class="badge-3d">👑 ELITE</div>
      <h2 class="title-3d">VIP DEVELOPER</h2>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Z-Axis Layer Elevation */
.preserve-3d {
  transform-style: preserve-3d;
}

.badge-3d {
  transform: translateZ(40px);
  color: #ffd700;
  font-weight: bold;
}

.title-3d {
  transform: translateZ(30px);
  margin-top: 20px;
}`,
      js: `// Step 2: 3D Depth Layers Active
console.log("Step 2: Preserve-3D Layers Elevated!");`
    },
    {
      step: 3,
      title: "Step 3: Rainbow Holographic Foil Gradient",
      subtitle: "Overlaying iridescent rainbow shimmer using linear-gradient and color-dodge.",
      explanation: {
        concept: "Holographic foil lighting using CSS gradient blend modes.",
        details: [
          "Diagonal rainbow gradient simulates holographic reflection sheen.",
          "mix-blend-mode: color-dodge causes light to react with dark card layers.",
          "opacity adjustments create subtle metallic iridescence."
        ],
        takeaway: "Color-dodge blend mode turns flat rainbow gradients into reactive holographic foils."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Holographic Card | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Foil Layer -->
  <div class="card-wrap">
    <div class="card preserve-3d">
      <div class="holo-foil"></div>
      <div class="badge-3d">👑 ELITE</div>
      <h2 class="title-3d">VIP DEVELOPER</h2>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Holographic Foil Shimmer */
.holo-foil {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(255,0,0,0.3),
    rgba(255,165,0,0.3),
    rgba(255,255,0,0.3),
    rgba(0,255,0,0.3),
    rgba(0,255,255,0.3),
    rgba(0,0,255,0.3),
    rgba(128,0,128,0.3)
  );
  mix-blend-mode: color-dodge;
  opacity: 0.75;
  pointer-events: none;
}`,
      js: `// Step 3: Holographic Foil Active
console.log("Step 3: Rainbow Iridescence Layer Applied!");`
    },
    {
      step: 4,
      title: "Step 4: Dynamic Mouse Gyroscope Tracking",
      subtitle: "Calculating real-time rotateX and rotateY angles from mouse position.",
      explanation: {
        concept: "Dynamic JavaScript mouse event tracking into CSS 3D transforms.",
        details: [
          "getBoundingClientRect() gets card boundary coordinates on screen.",
          "Calculates mouse displacement from card center.",
          "Converts coordinates into smooth rotateX and rotateY angles."
        ],
        takeaway: "Mapping cursor offsets to 3D rotation angles produces physical tactile tilt."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Holographic Card | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Interactive Tilt Card -->
  <div class="card-wrap">
    <div class="card preserve-3d" id="holoCard">
      <div class="holo-foil" id="holoFoil"></div>
      <div class="badge-3d">👑 ELITE</div>
      <h2 class="title-3d">VIP DEVELOPER</h2>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: Smooth Tilt Transition */
.card {
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
  position: relative;
}`,
      js: `// Step 4: Real-time Cursor Math
const card = document.getElementById('holoCard');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  card.style.transform = \`rotateX(\${-y / 10}deg) rotateY(\${x / 10}deg)\`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});`
    },
    {
      step: 5,
      title: "Step 5: Interactive VIP Collectible Studio",
      subtitle: "Full collectible card studio with custom themes and live gyroscope lighting.",
      explanation: {
        concept: "Production-ready Web3 / Collectible 3D Hologram Card component.",
        details: [
          "Dynamic shine reflection moves synchronously with cursor position.",
          "Theme customizer allows switching between Gold, Cyber, and Diamond finishes.",
          "Smooth physics dampening on mouse leave."
        ],
        takeaway: "Combines 3D transforms, gradient blending, and event listeners into a premium UI."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Holographic Card | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Full Standalone Holo Card -->
  <div class="card-wrap">
    <div class="card preserve-3d" id="holoCard">
      <div class="holo-foil" id="holoFoil"></div>
      <div class="badge-3d">👑 NEXTSEM MASTER</div>
      <h2 class="title-3d">FULL-STACK CERTIFIED</h2>
      <div class="chip-3d">💳 04AA6D</div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 5: Complete Standalone Holo Card CSS */
body {
  background: #050608;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: monospace;
}

.card-wrap { perspective: 1000px; }

.card {
  width: 270px;
  height: 390px;
  background: linear-gradient(145deg, #111420, #06080e);
  border-radius: 22px;
  border: 1px solid rgba(255, 215, 0, 0.4);
  padding: 24px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 215, 0, 0.2);
  transform-style: preserve-3d;
  cursor: pointer;
}

.badge-3d { transform: translateZ(45px); color: #ffd700; font-weight: bold; }
.title-3d { transform: translateZ(35px); font-size: 20px; font-weight: 900; margin-top: 15px; }
.chip-3d { transform: translateZ(30px); margin-top: 140px; color: #04AA6D; font-weight: bold; }

.holo-foil {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4), transparent 60%);
  mix-blend-mode: overlay;
  pointer-events: none;
}`,
      js: `// Step 5: Full Interactive Event Listeners
const card = document.getElementById('holoCard');

card.addEventListener('click', () => {
  console.log("✨ Holographic Card Inspected!");
  alert("✨ VIP Collectible Holographic Card Inspected!");
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
            <CreditCard size={18} className="text-[#ffd700]" />
            <span className="text-xs font-bold text-[#ffd700] uppercase tracking-wider font-mono">
              Practical Developer Mini-Project #12
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Card Edition:</span>
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setCardTheme('gold')}
                className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                  cardTheme === 'gold' ? 'bg-[#ffd700] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                Gold
              </button>
              <button
                onClick={() => setCardTheme('cyber')}
                className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                  cardTheme === 'cyber' ? 'bg-[#00ffff] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cyber
              </button>
              <button
                onClick={() => setCardTheme('diamond')}
                className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${
                  cardTheme === 'diamond' ? 'bg-[#ff00a0] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Diamond
              </button>
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          How To Build 3D Holographic Foil Cards (Step-by-Step)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Learn 3D perspective depth styling, Z-axis translate stacking, rainbow foil gradient blending, and cursor-driven gyroscope physics.
        </p>

        {/* Progress Bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2">
            <span>Progress: Step {activeStep} of 5</span>
            <span className="text-[#ffd700]">{Math.round((activeStep / 5) * 100)}% Completed</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-[#ffd700] via-[#00ffff] to-[#ff00a0] transition-all duration-300 ease-out"
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
              <span className="text-xs font-extrabold text-[#ffd700] uppercase tracking-wider font-mono">
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

          {/* 3D Holo Card Canvas */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-80 flex items-center justify-center overflow-hidden rounded-2xl border border-amber-950/60 bg-black/90 p-4 cursor-grab active:cursor-grabbing"
            style={{ perspective: '1000px' }}
          >
            <div
              ref={cardRef}
              className={`w-48 h-68 rounded-2xl p-5 relative select-none shadow-2xl transition-transform duration-100 flex flex-col justify-between ${
                cardTheme === 'gold'
                  ? 'bg-gradient-to-br from-amber-950 via-slate-900 to-black border-2 border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                  : cardTheme === 'cyber'
                  ? 'bg-gradient-to-br from-cyan-950 via-slate-900 to-black border-2 border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.2)]'
                  : 'bg-gradient-to-br from-pink-950 via-slate-900 to-black border-2 border-pink-400/80 shadow-[0_0_25px_rgba(236,72,153,0.2)]'
              }`}
              style={{
                transform: activeStep >= 4 ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'none',
                transformStyle: activeStep >= 2 ? 'preserve-3d' : 'flat'
              }}
            >
              {/* Step 3+: Rainbow Foil Overlay */}
              {activeStep >= 3 && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-60"
                  style={{
                    background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255,255,255,0.8), transparent 50%), linear-gradient(135deg, rgba(255,0,0,0.25), rgba(255,255,0,0.25), rgba(0,255,255,0.25), rgba(255,0,255,0.25))`,
                    mixBlendMode: 'color-dodge'
                  }}
                />
              )}

              {/* Layer 1: Badge */}
              <div
                className="flex items-center justify-between"
                style={{ transform: activeStep >= 2 ? 'translateZ(40px)' : 'none' }}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <Crown size={14} />
                  <span>ELITE VIP</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">#04AA6D</span>
              </div>

              {/* Layer 2: Title */}
              <div
                className="space-y-1"
                style={{ transform: activeStep >= 2 ? 'translateZ(30px)' : 'none' }}
              >
                <h3 className="text-sm font-black tracking-wider text-white">
                  NEXTSEM DEVELOPER
                </h3>
                <p className="text-[10px] text-slate-300">Full-Stack Certified</p>
              </div>

              {/* Layer 3: Footer chip */}
              <div
                className="flex items-center justify-between text-[11px] pt-2 border-t border-white/10"
                style={{ transform: activeStep >= 2 ? 'translateZ(25px)' : 'none' }}
              >
                <span className="font-mono text-xs text-amber-400 font-bold">💎 2026 EDITION</span>
                <span className="text-[9px] bg-white/10 px-2 py-0.5 rounded">NEXTSEM</span>
              </div>
            </div>
          </div>

          <div className="bg-[#09101f] border border-slate-800 rounded-2xl p-3.5 flex items-start gap-3">
            <Sparkles size={16} className="text-[#ffd700] shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-bold text-white block">Step {activeStep} Live Inspection</span>
              <p className="text-slate-400">
                {activeStep === 1 && "Perspective (1000px) camera initialized on dark card wrapper."}
                {activeStep === 2 && "Preserve-3D enabled. Badge and titles elevated on Z-axis with translateZ."}
                {activeStep === 3 && "Holographic rainbow shimmer active using color-dodge blend mode."}
                {activeStep === 4 && "Mouse-tracking gyroscope enabled. Move cursor over card to tilt in 3D!"}
                {activeStep === 5 && "Full VIP Collectible Studio. Switch card editions (Gold / Cyber / Diamond)!"}
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
          <BookOpen className="text-[#ffd700]" size={22} />
          <div>
            <h2 className="text-lg font-bold text-white">
              Step {activeStep} Technical Breakdown & Concepts
            </h2>
            <p className="text-xs text-slate-400">
              Understanding 3D CSS Perspective, Preserve-3D, and Holographic Foil physics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-[#ffd700] flex items-center gap-2">
              <Code2 size={16} /> Key Technical Details
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentStepData.explanation.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#ffd700] font-bold">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-[#00ffff] flex items-center gap-2">
              <Sparkles size={16} /> Important Takeaway
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentStepData.explanation.takeaway}
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#ffd700] hover:text-amber-300 disabled:opacity-40 transition-colors cursor-pointer"
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
          <GraduationCap className="text-[#ffd700]" size={22} />
          <h2 className="text-lg font-bold text-white">Recommended Nextsem Labs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/3d-cube-animation" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#ffd700] text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">1. 3D Cube Rotation Engine Lab</span>
            <p className="text-slate-400">Master 3D cube faces and CSS 3D coordinate space.</p>
          </Link>
          <Link href="/glassmorphism-card-animation" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#ffd700] text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">2. Glassmorphism Card Lab</span>
            <p className="text-slate-400">Learn backdrop-filter blur and frosted glass lighting.</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
