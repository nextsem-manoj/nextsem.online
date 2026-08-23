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
  Droplets,
  BatteryCharging,
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

export default function LiquidWaveAnimation() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [copied, setCopied] = useState(false);
  const [chargeLevel, setChargeLevel] = useState<number>(75);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: HTML Vessel & Battery Glass Frame",
      subtitle: "Structuring rounded battery container with overflow hidden.",
      explanation: {
        concept: "Creating a glassmorphism containment vessel.",
        details: [
          "Container with overflow: hidden acts as the liquid viewport boundary.",
          "Rounded corners and frosted glass border mimic modern battery indicators.",
          "High contrast dark background highlights fluid color."
        ],
        takeaway: "overflow: hidden masks the rotating wave elements inside the bottle shape."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liquid Wave Battery | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Glass Battery Container -->
  <div class="battery-vessel">
    <div class="charge-display">75%</div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Glass Battery Housing */
body {
  background: #06080e;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: monospace;
}

.battery-vessel {
  position: relative;
  width: 140px;
  height: 240px;
  background: #0f1422;
  border: 3px solid rgba(4, 170, 109, 0.5);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(4, 170, 109, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.charge-display {
  color: white;
  font-size: 24px;
  font-weight: bold;
  z-index: 10;
}`,
      js: `// Step 1: Battery Vessel Initialized
console.log("Step 1: Glass Vessel Container Ready!");`
    },
    {
      step: 2,
      title: "Step 2: Rotational Geometry Wave Trick",
      subtitle: "Creating natural liquid wave curves using rotating border-radius squares.",
      explanation: {
        concept: "The famous CSS geometric trick for fluid wave simulation.",
        details: [
          "An oversized square with border-radius: 40% creates 4 curved wave crests.",
          "@keyframes waveRotate rotates the square 360 degrees continuously.",
          "As the corners pass the overflow boundary, they look like rising and falling waves."
        ],
        takeaway: "Rotating a 40% border-radius square generates realistic rolling wave physics without Canvas/WebGL."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liquid Wave Battery | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Single Rotating Wave Layer -->
  <div class="battery-vessel">
    <div class="wave wave-main"></div>
    <div class="charge-display">75%</div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Rotating Wave Geometry */
.wave {
  position: absolute;
  width: 320px;
  height: 320px;
  background: #04AA6D;
  border-radius: 40%;
  top: -140px;
  left: -90px;
  animation: waveRotate 5s linear infinite;
}

@keyframes waveRotate {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
      js: `// Step 2: Single Wave Rotation Active
console.log("Step 2: Rotating Wave Geometry Active!");`
    },
    {
      step: 3,
      title: "Step 3: Dual Wave Layering & Depth",
      subtitle: "Adding a secondary back wave with different rotation speed and opacity.",
      explanation: {
        concept: "Adding depth with dual asynchronous wave surfaces.",
        details: [
          ".wave-back rotates at 7 seconds with 0.55 opacity.",
          ".wave-front rotates at 4.5 seconds with 0.85 opacity.",
          "Asynchronous intersection produces realistic liquid interference patterns."
        ],
        takeaway: "Layering two rotating waves eliminates repetitive robotic patterns."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liquid Wave Battery | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Dual Wave Layers -->
  <div class="battery-vessel">
    <div class="wave wave-back"></div>
    <div class="wave wave-front"></div>
    <div class="charge-display">75%</div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Dual Layer Fluid Depth */
.wave-front {
  background: #04AA6D;
  opacity: 0.85;
  animation: waveRotate 4.5s linear infinite;
}

.wave-back {
  background: #028a55;
  opacity: 0.55;
  border-radius: 43%;
  animation: waveRotate 7s linear infinite;
}`,
      js: `// Step 3: Dual Wave Layers Synced
console.log("Step 3: Dual Wave Depth Active!");`
    },
    {
      step: 4,
      title: "Step 4: Rising Air Bubble Physics",
      subtitle: "Animating floating bubble particles from bottom to surface.",
      explanation: {
        concept: "Simulating effervescent charging bubbles using @keyframes bubbleRise.",
        details: [
          "Bubbles spawn with random left offsets and ascend on Y-axis.",
          "Keyframe fades out opacity as bubbles break the liquid surface.",
          "Creates energetic electrochemical charging visual."
        ],
        takeaway: "Adding ascending particle physics gives the liquid living, energetic realism."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liquid Wave Battery | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Liquid Battery with Bubbles -->
  <div class="battery-vessel">
    <div class="wave wave-back"></div>
    <div class="wave wave-front"></div>
    <div class="bubble b1"></div>
    <div class="bubble b2"></div>
    <div class="charge-display">75%</div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: Rising Bubble Particles */
.bubble {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  bottom: 0;
  animation: bubbleRise 3s infinite ease-in;
}

.b1 { left: 35%; animation-delay: 0.5s; }
.b2 { left: 65%; animation-delay: 1.5s; }

@keyframes bubbleRise {
  0%   { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-160px); opacity: 0; }
}`,
      js: `// Step 4: Bubble Generator Active
console.log("Step 4: Effervescent Bubble Physics Running!");`
    },
    {
      step: 5,
      title: "Step 5: Interactive Charging Control Studio",
      subtitle: "Full battery management simulator with live percentage slider and dynamic color shift.",
      explanation: {
        concept: "Complete production-ready Battery / Fluid Level Indicator.",
        details: [
          "Live slider adjusts wave top coordinate dynamically.",
          "Color transitions smoothly from Warning Red (<25%) to Gold (<60%) to Turbo Emerald (>60%).",
          "Includes interactive charging toggle boost."
        ],
        takeaway: "Integrates CSS geometric waves, keyframe rotation, and JavaScript state control."
      },
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liquid Wave Battery | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Full Interactive Battery Studio -->
  <div class="battery-vessel" id="batteryVessel">
    <div class="wave wave-back" id="waveBack"></div>
    <div class="wave wave-front" id="waveFront"></div>
    <div class="charge-display" id="chargeText">75%</div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 5: Complete Standalone Liquid Wave CSS */
body {
  background: #04060a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: monospace;
}

.battery-vessel {
  position: relative;
  width: 150px;
  height: 250px;
  background: #090e18;
  border: 3px solid #04AA6D;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 0 35px rgba(4, 170, 109, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.wave {
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 40%;
  left: -95px;
}

.wave-front { background: #04AA6D; opacity: 0.85; animation: waveRotate 4.5s linear infinite; }
.wave-back { background: #028a55; opacity: 0.55; border-radius: 43%; animation: waveRotate 7s linear infinite; }

@keyframes waveRotate {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
      js: `// Step 5: Interactive Charging Event
const vessel = document.getElementById('batteryVessel');

vessel.addEventListener('click', () => {
  console.log("⚡ Supercharge Turbo Mode Active!");
  alert("⚡ Supercharge Turbo Mode Active: 100% Rapid Charge!");
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

  const getLiquidColor = () => {
    if (chargeLevel < 30) return { main: '#ef4444', sec: '#b91c1c', border: 'border-red-500/50', text: 'text-red-400' };
    if (chargeLevel < 60) return { main: '#f59e0b', sec: '#b45309', border: 'border-amber-500/50', text: 'text-amber-400' };
    return { main: '#10b981', sec: '#047857', border: 'border-emerald-500/50', text: 'text-emerald-400' };
  };

  const currentColor = getLiquidColor();

  return (
    <div className="max-w-6xl mx-auto space-y-10 text-left selection:bg-[#264f78]">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Droplets size={18} className="text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
              Practical Developer Mini-Project #14
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#09101f] border border-emerald-500/30 px-3 py-1 rounded-xl text-xs font-mono font-bold text-emerald-400">
            <BatteryCharging size={14} className="text-emerald-400" />
            <span>Liquid Glass Wave Engine</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          How To Build Liquid Glass Battery & Wave Loaders (Step-by-Step)
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Master the famous <code className="text-emerald-400 font-mono">border-radius: 40%</code> rotational wave geometry trick, dual fluid layering, and dynamic charge levels.
        </p>

        {/* Progress Bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2">
            <span>Progress: Step {activeStep} of 5</span>
            <span className="text-emerald-400">{Math.round((activeStep / 5) * 100)}% Completed</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-300 ease-out"
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

          {/* Liquid Battery Canvas */}
          <div className="relative w-full h-80 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-emerald-950/60 bg-black/90 p-4">
            
            {/* Battery Housing */}
            <div className={`relative w-36 h-60 bg-[#090e18] border-4 ${currentColor.border} rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl transition-colors duration-300`}>
              
              {/* Step 3+: Back Wave */}
              {activeStep >= 3 && (
                <div
                  className="absolute w-80 h-80 rounded-[43%] animate-spin opacity-55 transition-all duration-300"
                  style={{
                    background: currentColor.sec,
                    top: `${140 - chargeLevel * 2.2}px`,
                    left: '-70px',
                    animationDuration: '7s'
                  }}
                />
              )}

              {/* Step 2+: Front Wave */}
              {activeStep >= 2 && (
                <div
                  className="absolute w-80 h-80 rounded-[40%] animate-spin opacity-85 transition-all duration-300"
                  style={{
                    background: currentColor.main,
                    top: `${140 - chargeLevel * 2.2}px`,
                    left: '-70px',
                    animationDuration: '4.5s'
                  }}
                />
              )}

              {/* Step 4+: Bubbles */}
              {activeStep >= 4 && (
                <>
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-white/80 animate-bounce bottom-4 left-10" style={{ animationDuration: '1.2s' }} />
                  <div className="absolute w-2 h-2 rounded-full bg-white/80 animate-bounce bottom-6 right-10" style={{ animationDuration: '1.8s' }} />
                </>
              )}

              {/* Percentage */}
              <div className="relative z-10 flex flex-col items-center space-y-0.5">
                <span className="text-2xl font-black text-white font-mono drop-shadow-md">
                  {chargeLevel}%
                </span>
                <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider">
                  CHARGING
                </span>
              </div>
            </div>

            {/* Step 5: Charge Slider */}
            {activeStep === 5 && (
              <div className="mt-4 w-full max-w-xs space-y-1 z-20">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Fluid Level:</span>
                  <span className={currentColor.text}>{chargeLevel}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={chargeLevel}
                  onChange={(e) => setChargeLevel(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
            )}
          </div>

          <div className="bg-[#09101f] border border-slate-800 rounded-2xl p-3.5 flex items-start gap-3">
            <Sparkles size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <span className="font-bold text-white block">Step {activeStep} Live Inspection</span>
              <p className="text-slate-400">
                {activeStep === 1 && "Glass battery container created with rounded corners and overflow hidden."}
                {activeStep === 2 && "Rotating border-radius: 40% square creating realistic rolling wave crests."}
                {activeStep === 3 && "Dual wave layers active with asynchronous rotation speeds for 3D liquid depth."}
                {activeStep === 4 && "Floating rising air bubble particles simulating electrochemical charging."}
                {activeStep === 5 && "Full Interactive Studio. Drag slider to change fluid height and watch colors shift!"}
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
              Understanding Rotational Fluid Waves, Overflow Masking, and Effervescent Particles.
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
            <h3 className="text-sm font-bold text-teal-400 flex items-center gap-2">
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
            <span className="font-bold text-white">1. Ocean Waves & Bobbing Boat Lab</span>
            <p className="text-slate-400">Learn SVG wave paths and floating physics.</p>
          </Link>
          <Link href="/rain-effect-animation" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-emerald-400 text-xs space-y-1 block transition-colors">
            <span className="font-bold text-white">2. Realistic HTML5 Canvas Rain Lab</span>
            <p className="text-slate-400">Master gravity particle velocity and splash ripple effects.</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
