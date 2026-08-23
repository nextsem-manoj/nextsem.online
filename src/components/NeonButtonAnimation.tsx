"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronRight, ChevronLeft, Layers, FileCode, Hash, FileJson, GraduationCap, Zap, ArrowRight } from 'lucide-react';

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
  const lines = code.split('\n');

  return (
    <div className="font-mono text-xs leading-relaxed space-y-0.5 selection:bg-[#264f78] w-full max-w-full overflow-x-hidden">
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} className="flex items-start group hover:bg-[#2a2d2e] px-1 py-0.5 rounded transition-colors">
          <div className="flex items-center text-[#858585] text-[11px] select-none min-w-[32px] pr-2 shrink-0">
            <span className="w-5 text-right font-mono">{lineIdx + 1}</span>
          </div>
          <div className="flex-1 overflow-x-hidden">
            <RenderLineContent line={line} fileType={fileType} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function NeonButtonAnimation() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [copied, setCopied] = useState(false);
  const [neonColor, setNeonColor] = useState('#04AA6D');

  const stepsData = [
    {
      step: 1,
      title: "Step 1: HTML Button Element",
      subtitle: "Creating the semantic button element.",
      html: `<!-- Step 1: Neon Button Markup -->
<button class="neon-btn">
  <span>CYBERPULSE</span>
</button>`,
      css: `/* Step 1: Base Button Layout */
.neon-btn {
  padding: 16px 36px;
  background: #090d16;
  color: #ffffff;
  font-family: monospace;
}`,
      js: `// Step 1: Initial Log
console.log("Step 1: Neon Button Created!");`
    },
    {
      step: 2,
      title: "Step 2: Multi-Layer Box Shadow Glow",
      subtitle: "Applying multi-layered CSS box-shadow for vibrant laser neon glow.",
      html: `<!-- Step 2: Button with Border Glow -->
<button class="neon-btn glow-active">
  <span>CYBERPULSE</span>
</button>`,
      css: `/* Step 2: Multi-Layered Neon Box Shadow */
.neon-btn {
  border: 2px solid #04AA6D;
  box-shadow: 0 0 15px #04AA6D, inset 0 0 15px #04AA6D;
}`,
      js: `// Step 2: Laser Glow Log
console.log("Step 2: Border Glow Active!");`
    },
    {
      step: 3,
      title: "Step 3: Text Shadow & Glassmorphism",
      subtitle: "Adding high-contrast text-shadow and dark translucent glass backdrop.",
      html: `<!-- Step 3: Glassmorphism Backdrop -->
<button class="neon-btn glass-mode">
  <span class="neon-text">CYBERPULSE</span>
</button>`,
      css: `/* Step 3: Text Glow & Glass Filter */
.neon-text {
  text-shadow: 0 0 10px #04AA6D;
  backdrop-filter: blur(8px);
}`,
      js: `// Step 3: Glassmorphism Attached
console.log("Step 3: Glassmorphism Filter Active!");`
    },
    {
      step: 4,
      title: "Step 4: Hover Laser Sweep Physics",
      subtitle: "Adding linear gradients and smooth 0.3s cubic-bezier hover transitions.",
      html: `<!-- Step 4: Hover State Markup -->
<button class="neon-btn hover-laser">
  <span>CYBERPULSE</span>
</button>`,
      css: `/* Step 4: Hover Laser Sweep Physics */
.neon-btn:hover {
  background: #04AA6D;
  color: #000000;
  box-shadow: 0 0 30px #04AA6D;
  transform: translateY(-2px);
}`,
      js: `// Step 4: Hover Event Log
console.log("Step 4: Hover Laser Sweep Active!");`
    },
    {
      step: 5,
      title: "Step 5: VS Code Interactive Neon Workspace",
      subtitle: "Full interactive neon button code. Edit style.css live below to see instant changes on screen!",
      html: `<!-- Step 5: Complete Interactive Neon Button -->
<button class="neon-btn" id="cyberBtn">
  <span>CYBERPULSE ⚡</span>
</button>`,
      css: `/* 💡 VS Code Live Editor: Edit CSS properties directly below! */
.neon-btn {
  padding: 16px 36px;
  background: #090d16;
  border: 2px solid #04AA6D;
  box-shadow: 0 0 25px #04AA6D, inset 0 0 15px #04AA6D;
  color: #ffffff;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
}`,
      js: `// Step 5: Interactive Click Listener
const cyberBtn = document.getElementById('cyberBtn');

cyberBtn.addEventListener('click', () => {
  console.log("⚡ Cyberpulse Laser Triggered!");
  alert("⚡ Neon Cyberpulse Activated!");
});`
    }
  ];

  const [customStep5Css, setCustomStep5Css] = useState<string>(stepsData[4].css);
  const currentStepData = stepsData[activeStep - 1];

  const handleCssChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setCustomStep5Css(text);
    const hexMatch = text.match(/#([0-9a-fA-F]{3,6})/);
    if (hexMatch) setNeonColor(`#${hexMatch[1]}`);
  };

  const getCurrentActiveCode = () => {
    if (activeTab === 'index.html') return currentStepData.html;
    if (activeTab === 'script.js') return currentStepData.js;
    return activeStep === 5 ? customStep5Css : currentStepData.css;
  };

  const getCurrentFileType = () => {
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
            <Zap size={16} className="text-[#04AA6D]" />
            <span className="text-xs font-bold text-[#04AA6D] uppercase tracking-wider">
              Step-by-Step Interactive Integration
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-ping" />
            <span>Nextsem Labs</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          How To Build A CSS Neon Laser Button (Step-by-Step)
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Click through the steps below to watch the button assemble piece-by-piece from HTML structure to CSS neon glow physics.
        </p>
      </div>



      {/* DESKTOP SIDE-BY-SIDE WORKSPACE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* LEFT COLUMN: Main Canvas Stage */}
        <div className="bg-[#080b12] border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-between min-h-[460px] relative overflow-hidden shadow-2xl space-y-6 w-full">
          
          <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="space-y-0.5">
              <span className="text-[11px] font-extrabold text-[#04AA6D] uppercase tracking-wider font-mono">
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

          {/* Dynamic Neon Button Canvas Display */}
          <div className="my-auto relative flex flex-col items-center gap-6">
            <button
              onClick={() => alert("⚡ Neon Button Clicked!")}
              className="px-8 py-4 rounded-xl font-mono font-black text-sm text-white tracking-widest transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
              style={{
                backgroundColor: '#090d16',
                border: activeStep >= 2 ? `2px solid ${neonColor}` : '1px solid #334155',
                boxShadow: activeStep >= 2 ? `0 0 25px ${neonColor}, inset 0 0 15px ${neonColor}` : 'none',
                textShadow: activeStep >= 3 ? `0 0 10px ${neonColor}` : 'none'
              }}
            >
              CYBERPULSE ⚡
            </button>

            {/* Color Swatch Picker */}
            {activeStep === 5 && (
              <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-full">
                <span className="text-[10px] text-slate-400 font-mono font-bold">Glow Color:</span>
                {['#04AA6D', '#00f0ff', '#ff0055', '#eab308'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setNeonColor(color)}
                    className="w-4 h-4 rounded-full border border-white/20 transition-transform hover:scale-125 cursor-pointer"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#000000]/90 border border-[#04AA6D]/50 flex items-center justify-center font-mono font-black text-xs text-[#04AA6D] shadow-lg shadow-[#04AA6D]/20 animate-pulse">
              NS
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: VS Code Multi-Tab Workspace Editor */}
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

          <div className="p-4 bg-[#1e1e1e] w-full max-w-full overflow-x-hidden flex-1 relative">
            {activeStep === 5 && activeTab === 'style.css' ? (
              <textarea
                value={customStep5Css}
                onChange={handleCssChange}
                rows={16}
                spellCheck={false}
                className="w-full h-full bg-[#1e1e1e] text-[#D4D4D4] font-mono text-xs leading-relaxed border-0 focus:outline-none focus:ring-0 transition-colors whitespace-pre-wrap break-words resize-none"
                placeholder="Edit CSS properties directly inside VS Code..."
              />
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
            <span className="font-bold text-white">1. CSS Box Shadow & Glow</span>
            <p className="text-slate-400">Master multi-layered box-shadow offsets and blur radii.</p>
          </Link>
          <Link href="/cli" className="bg-[#0f1117] p-4 rounded-xl border border-slate-800 hover:border-[#04AA6D] text-xs space-y-1 block">
            <span className="font-bold text-white">2. Windows CLI Project Setup</span>
            <p className="text-slate-400">Deploy HTML/CSS projects live on Windows PC.</p>
          </Link>
        </div>
      </div>

    </div>
  );
}
