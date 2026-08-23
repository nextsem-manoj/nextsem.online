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
  Orbit,
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

export default function BlackHoleAnimation() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [copied, setCopied] = useState(false);
  const [warpIntensity, setWarpIntensity] = useState<number>(50);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: Central Event Horizon Core",
      subtitle: "Rendering pitch-black singularity sphere absorbing all background light.",
      explanation: {
        concept: "The Event Horizon where escape velocity exceeds light speed.",
        details: [
          "Perfect pitch-black circle (#000000) represents the event horizon.",
          "Sharp border contrasts against the cosmic deep-space background.",
          "Centered on a 3D coordinate system."
        ],
        takeaway: "The central black sphere creates the focal anchor for all surrounding accretion physics."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Black Hole Lensing | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Event Horizon Sphere -->
  <div class="cosmos">
    <div class="event-horizon"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Singularity Core */
body {
  background: #020306;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.cosmos {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.event-horizon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #000000;
  z-index: 10;
}`,
      js: `// Step 1: Event Horizon Loaded
console.log("Step 1: Event Horizon Singularity Initialized!");`
    },
    {
      step: 2,
      title: "Step 2: Neon Photon Ring Emission",
      subtitle: "Adding multi-layered plasma glow around the shadow boundary.",
      explanation: {
        concept: "The glowing Photon Sphere where light orbits the black hole.",
        details: [
          "Multi-layered box-shadow emits orange and gold plasma brilliance.",
          "Inner radial-gradient blends into the event horizon edge.",
          "Simulates relativistic Doppler beam brightening."
        ],
        takeaway: "Layered shadows create high-temperature plasma luminosity."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Black Hole Lensing | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Glowing Photon Sphere -->
  <div class="cosmos">
    <div class="photon-ring">
      <div class="event-horizon"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Photon Ring Glow */
.photon-ring {
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  box-shadow: 
    0 0 20px #ff6600,
    0 0 40px #ffaa00,
    0 0 80px rgba(255, 100, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      js: `// Step 2: Photon Ring Active
console.log("Step 2: Relativistic Photon Ring Active!");`
    },
    {
      step: 3,
      title: "Step 3: Swirling Relativistic Accretion Disk",
      subtitle: "Generating high-speed accretion disk using conic-gradient rotation.",
      explanation: {
        concept: "Superheated matter spiraling into the black hole.",
        details: [
          "conic-gradient sweeps from transparent -> gold -> crimson -> bright white.",
          "@keyframes spinAccretion spins the disk at relativistic velocity.",
          "transform: rotateX(65deg) tilts the disk into a 3D oval perspective."
        ],
        takeaway: "conic-gradient tilted with rotateX creates the iconic Interstellar accretion disk geometry."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Black Hole Lensing | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Swirling Accretion Disk -->
  <div class="cosmos">
    <div class="accretion-disk"></div>
    <div class="photon-ring">
      <div class="event-horizon"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Conic Gradient Accretion Disk */
.accretion-disk {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(255, 120, 0, 0.9),
    rgba(255, 220, 100, 1),
    rgba(255, 50, 0, 0.8),
    transparent 60%,
    rgba(255, 120, 0, 0.9)
  );
  transform: rotateX(68deg);
  animation: spinDisk 6s linear infinite;
  filter: blur(2px);
}

@keyframes spinDisk {
  0%   { transform: rotateX(68deg) rotateZ(0deg); }
  100% { transform: rotateX(68deg) rotateZ(360deg); }
}`,
      js: `// Step 3: Accretion Disk Swirl
console.log("Step 3: Relativistic Accretion Disk Online!");`
    },
    {
      step: 4,
      title: "Step 4: Gravitational Lensing Distortion",
      subtitle: "Bending background starfield light around the gravitational well.",
      explanation: {
        concept: "Einstein's General Relativity gravitational light deflection.",
        details: [
          "Secondary top halo bends over the event horizon.",
          "Starfield particles distort inward toward the center.",
          "Creates authentic curved gravitational lensing arc."
        ],
        takeaway: "Dual accretion arcs (horizontal disk + vertical halo) recreate the exact gravitational lens."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Black Hole Lensing | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Gravitational Lens Halo -->
  <div class="cosmos">
    <div class="lensing-halo"></div>
    <div class="accretion-disk"></div>
    <div class="photon-ring">
      <div class="event-horizon"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: Gravitational Lensing Arc */
.lensing-halo {
  position: absolute;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 4px solid rgba(255, 150, 50, 0.7);
  filter: blur(4px);
  box-shadow: 0 0 25px rgba(255, 100, 0, 0.8);
  animation: pulseHalo 4s ease-in-out infinite;
}

@keyframes pulseHalo {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50%      { transform: scale(1.08); opacity: 1; }
}`,
      js: `// Step 4: Gravitational Lensing Active
console.log("Step 4: Gravitational Lensing Arc Synced!");`
    },
    {
      step: 5,
      title: "Step 5: Interactive Astrophysics Observatory",
      subtitle: "Full gravitational simulator with mass controls, relativistic boost, and live pulse triggers.",
      explanation: {
        concept: "Interactive black hole physics simulation workspace.",
        details: [
          "Mass slider dynamically increases event horizon scale and accretion spin rate.",
          "Click trigger releases relativistic plasma jet pulse.",
          "Complete physics simulator for educational and visual demonstration."
        ],
        takeaway: "Combines conic gradients, 3D rotations, box-shadows, and interactive mass physics."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Black Hole Lensing | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Complete Interactive Black Hole Stage -->
  <div class="cosmos" id="blackHoleCosmos">
    <div class="lensing-halo"></div>
    <div class="accretion-disk"></div>
    <div class="photon-ring">
      <div class="event-horizon"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 5: Complete Standalone Black Hole CSS */
body {
  background: #020306;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: monospace;
}

.cosmos {
  position: relative;
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.event-horizon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #000;
  z-index: 10;
}

.photon-ring {
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  box-shadow: 0 0 25px #ff6600, 0 0 50px #ffaa00;
  display: flex;
  justify-content: center;
  align-items: center;
}

.accretion-disk {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #ff7800, #ffdc64, #ff3200, transparent 60%, #ff7800);
  transform: rotateX(68deg);
  animation: spinDisk 5s linear infinite;
  filter: blur(2px);
}`,
      js: `// Step 5: Interactive Gravitational Pulse
const cosmos = document.getElementById('blackHoleCosmos');

cosmos.addEventListener('click', () => {
  console.log("⚡ Gravitational Wave Burst Triggered!");
  alert("⚡ Gravitational Wave Burst: LIGO Signal Detected!");
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
            <Orbit size={18} className="text-amber-400" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
              Practical Developer Mini-Project #15
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#09101f] border border-amber-500/30 px-3 py-1 rounded-xl text-xs font-mono font-bold text-amber-400">
            <Zap size={14} className="text-amber-400" />
            <span>Black Hole Lensing Engine</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          How To Build Black Hole Gravitational Lensing (Step-by-Step)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Learn how to simulate relativistic accretion disk rotation with <code className="text-amber-400 font-mono">conic-gradient</code>, photon spheres, and light bending lensing arcs.
        </p>

        {/* Progress Bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2">
            <span>Progress: Step {activeStep} of 5</span>
            <span className="text-amber-400">{Math.round((activeStep / 5) * 100)}% Completed</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transition-all duration-300 ease-out"
              style={{ width: `${(activeStep / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* Left Column: Canvas Preview */}
        <div className="bg-[#020306] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px] relative overflow-hidden shadow-2xl space-y-6 w-full font-mono">
          <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-4 z-10">
            <div className="space-y-1 pr-2">
              <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider font-mono">
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

          {/* Black Hole Canvas */}
          <div className="relative w-full h-80 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-amber-950/60 bg-black p-4">
            
            {/* Background Starfield particles */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute w-1 h-1 bg-white rounded-full top-8 left-12" />
              <div className="absolute w-1.5 h-1.5 bg-amber-200 rounded-full top-20 right-16" />
              <div className="absolute w-1 h-1 bg-sky-200 rounded-full bottom-12 left-24" />
              <div className="absolute w-1.5 h-1.5 bg-white rounded-full bottom-20 right-28" />
            </div>

            {/* Cosmos Container */}
            <div className="relative flex items-center justify-center">
              
              {/* Step 4+: Gravitational Lensing Halo */}
              {activeStep >= 4 && (
                <div
                  className="absolute w-44 h-44 rounded-full border-4 border-amber-500/60 animate-pulse"
                  style={{
                    filter: 'blur(3px)',
                    boxShadow: '0 0 30px #f59e0b, inset 0 0 20px #ea580c'
                  }}
                />
              )}

              {/* Step 3+: Accretion Disk */}
              {activeStep >= 3 && (
                <div
                  className="absolute w-64 h-64 rounded-full animate-spin"
                  style={{
                    background: 'conic-gradient(from 0deg, #ff7800, #ffdc64, #ea580c, transparent 65%, #ff7800)',
                    transform: 'rotateX(68deg)',
                    filter: 'blur(2px)',
                    animationDuration: `${12 - warpIntensity / 10}s`
                  }}
                />
              )}

              {/* Step 2+: Photon Ring */}
              <div
                className="relative flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  width: `${75 + warpIntensity / 4}px`,
                  height: `${75 + warpIntensity / 4}px`,
                  boxShadow: activeStep >= 2 ? '0 0 25px #ff7800, 0 0 50px #ffaa00' : 'none'
                }}
              >
                {/* Step 1: Event Horizon */}
                <div
                  className="rounded-full bg-black z-10 transition-all duration-300"
                  style={{
                    width: `${68 + warpIntensity / 4}px`,
                    height: `${68 + warpIntensity / 4}px`
                  }}
                />
              </div>

            </div>

            {/* Step 5: Mass / Warp Control */}
            {activeStep === 5 && (
              <div className="mt-4 w-full max-w-xs space-y-1 z-20">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Gravitational Mass:</span>
                  <span className="text-amber-400">{warpIntensity} M☉</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={warpIntensity}
                  onChange={(e) => setWarpIntensity(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
            )}
          </div>

          <div className="bg-[#09101f] border border-slate-800 rounded-2xl p-3.5 flex items-start gap-3">
            <Sparkles size={16} className="text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-bold text-white block">Step {activeStep} Live Inspection</span>
              <p className="text-slate-400">
                {activeStep === 1 && "Central Event Horizon singularity sphere initialized on dark cosmic background."}
                {activeStep === 2 && "Superheated photon sphere ring active with multi-layered plasma glow."}
                {activeStep === 3 && "Relativistic accretion disk spinning with 3D rotateX(68deg) conic-gradient."}
                {activeStep === 4 && "Gravitational lensing halo bending surrounding space-time around the horizon."}
                {activeStep === 5 && "Full Astrophysics Simulator. Adjust mass slider to expand event horizon radius!"}
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
          <BookOpen className="text-amber-400" size={22} />
          <div>
            <h2 className="text-lg font-bold text-white">
              Step {activeStep} Technical Breakdown & Concepts
            </h2>
            <p className="text-xs text-slate-400">
              Understanding Conic Gradients, 3D Rotational Inclinations, and Photon Sphere Physics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              <Code2 size={16} /> Key Technical Details
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentStepData.explanation.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-orange-400 flex items-center gap-2">
              <Sparkles size={16} /> Important Takeaway
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentStepData.explanation.takeaway}
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 disabled:opacity-40 transition-colors cursor-pointer"
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
          <GraduationCap className="text-amber-400" size={22} />
          <h2 className="text-lg font-bold text-white">Recommended Nextsem Labs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/warp-speed-animation" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-amber-400 text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">1. Starfield 3D Warp Speed Lab</span>
            <p className="text-slate-400">Master 3D particle depth and velocity acceleration.</p>
          </Link>
          <Link href="/solar-system-animation" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-amber-400 text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">2. Solar System 3D Orbit Lab</span>
            <p className="text-slate-400">Learn planetary orbital physics and rotational keyframes.</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
