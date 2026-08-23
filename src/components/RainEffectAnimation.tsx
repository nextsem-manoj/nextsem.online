"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronRight, ChevronLeft, ChevronDown, Layers, FileCode, Hash, FileJson, GraduationCap, CloudRain, ArrowRight } from 'lucide-react';

// VS Code Dark+ Tokenizing Highlighting Renderer
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

export default function RainEffectAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('script.js');
  const [copied, setCopied] = useState(false);
  const [rainSpeed, setRainSpeed] = useState<number>(14);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    const height = (canvas.height = 340);

    interface Drop {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }

    const drops: Drop[] = [];
    const count = activeStep === 1 ? 0 : activeStep === 2 ? 15 : activeStep === 3 ? 60 : activeStep === 4 ? 120 : 180;

    for (let i = 0; i < count; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 22 + 10,
        speed: Math.random() * 5 + rainSpeed,
        opacity: Math.random() * 0.55 + 0.3
      });
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(7, 10, 18, 0.4)';
      ctx.fillRect(0, 0, width, height);

      // STEP 1: Blank Stage Container + Grid lines + Canvas Tag Badge
      if (activeStep === 1) {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
        ctx.lineWidth = 1;
        for (let x = 0; x < width; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += 40) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        ctx.fillStyle = 'rgba(56, 189, 248, 0.9)';
        ctx.font = '14px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('<canvas id="rainCanvas" width="' + width + '" height="' + height + '"></canvas>', width / 2, height / 2 - 10);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
        ctx.font = '11px sans-serif';
        ctx.fillText('Stage Initialized • 2D Context Ready • Waiting for Particle Array (Step 2)', width / 2, height / 2 + 15);
        return;
      }

      // STEP 2: Droplet Vector Array Data Model
      if (activeStep === 2) {
        ctx.lineWidth = 2;
        drops.forEach((drop, idx) => {
          ctx.strokeStyle = `rgba(56, 189, 248, ${drop.opacity})`;
          ctx.beginPath();
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x, drop.y + drop.length);
          ctx.stroke();

          if (idx < 3) {
            ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
            ctx.font = '10px monospace';
            ctx.textAlign = 'left';
            ctx.fillText(`Drop[${idx}]: {x:${Math.round(drop.x)}, y:${Math.round(drop.y)}, len:${Math.round(drop.length)}}`, drop.x + 8, drop.y + 10);
          }

          drop.y += 2.5;
          if (drop.y > height) drop.y = 0;
        });

        ctx.fillStyle = 'rgba(56, 189, 248, 0.9)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Step 2: Particle Droplet Data Model (15 Drops Array)', width / 2, 25);
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // STEP 3: Animation Loop & Ground Splash Physics
      if (activeStep === 3) {
        ctx.lineWidth = 1.5;
        drops.forEach((drop) => {
          ctx.strokeStyle = `rgba(56, 189, 248, ${drop.opacity})`;
          ctx.beginPath();
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x, drop.y + drop.length);
          ctx.stroke();

          if (drop.y + drop.speed >= height - 15) {
            ctx.beginPath();
            ctx.arc(drop.x, height - 6, Math.random() * 4 + 2, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(56, 189, 248, ${drop.opacity * 0.7})`;
            ctx.stroke();
          }

          drop.y += drop.speed;
          if (drop.y > height) {
            drop.y = -drop.length;
            drop.x = Math.random() * width;
          }
        });

        ctx.fillStyle = 'rgba(56, 189, 248, 0.9)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Step 3: requestAnimationFrame Loop & Ground Splash Physics', width / 2, 25);
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // STEP 4: Speed Controls & Intensities
      if (activeStep === 4) {
        ctx.lineWidth = 1.5;
        drops.forEach((drop) => {
          ctx.strokeStyle = `rgba(56, 189, 248, ${drop.opacity})`;
          ctx.beginPath();
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x, drop.y + drop.length);
          ctx.stroke();

          if (drop.y + drop.speed >= height - 15) {
            ctx.beginPath();
            ctx.arc(drop.x, height - 6, Math.random() * 4 + 2, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(56, 189, 248, ${drop.opacity * 0.7})`;
            ctx.stroke();
          }

          drop.y += drop.speed;
          if (drop.y > height) {
            drop.y = -drop.length;
            drop.x = Math.random() * width;
          }
        });

        ctx.fillStyle = 'rgba(56, 189, 248, 0.9)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`Step 4: Speed Controls (Current Velocity: ${rainSpeed}px/frame)`, width / 2, 25);
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // STEP 5: Full Interactive Engine
      ctx.lineWidth = 1.5;
      drops.forEach((drop) => {
        ctx.strokeStyle = `rgba(56, 189, 248, ${drop.opacity})`;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();

        if (drop.y + drop.speed >= height - 15) {
          ctx.beginPath();
          ctx.arc(drop.x, height - 6, Math.random() * 4 + 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${drop.opacity * 0.7})`;
          ctx.stroke();
        }

        drop.y += drop.speed;
        if (drop.y > height) {
          drop.y = -drop.length;
          drop.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [rainSpeed, activeStep]);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: HTML5 Canvas Stage Container",
      subtitle: "Initializing full-screen canvas stage & 2D rendering context.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Realistic Rain Drop Effect | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Canvas Stage Container -->
  <div className="stage">
    <canvas id="rainCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Dark Canvas Container Styling */
#rainCanvas {
  background: #070a12;
  width: 100%;
  height: 340px;
  border-radius: 16px;
  display: block;
}`,
      js: `// Step 1: Grab Canvas & Get 2D Context
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');
console.log("Step 1: Canvas Stage Initialized!");`
    },
    {
      step: 2,
      title: "Step 2: Particle Droplet Data Model",
      subtitle: "Generating random velocity vectors, droplet lengths & opacity layers.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Realistic Rain Drop Effect | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Canvas Stage + Droplet Physics -->
  <div className="stage">
    <canvas id="rainCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Stage & Canvas Border Styling */
#rainCanvas {
  background: #070a12;
  border: 1px solid #1e293b;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}`,
      js: `// Step 2: Particle Array & Velocity Model
const drops = [];
const count = 100;

for (let i = 0; i < count; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 5 + 12,
    opacity: Math.random() * 0.5 + 0.3
  });
}`
    },
    {
      step: 3,
      title: "Step 3: Animation Loop & Ground Splash Physics",
      subtitle: "Building requestAnimationFrame loop with splash ripple motion on ground hit.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Realistic Rain Drop Effect | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Rain Canvas + Splash Physics -->
  <div className="stage">
    <canvas id="rainCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Particle Trail Blur */
#rainCanvas {
  background: #070a12;
  border-radius: 16px;
}`,
      js: `// Step 3: Render Loop & Ground Splash
function draw() {
  ctx.fillStyle = 'rgba(7, 10, 18, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drops.forEach(drop => {
    ctx.strokeStyle = \`rgba(56, 189, 248, \${drop.opacity})\`;
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();

    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}
draw();`
    },
    {
      step: 4,
      title: "Step 4: Speed Controls & Storm Intensities",
      subtitle: "Adding Light, Heavy, and Storm rainfall velocity modifiers.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Realistic Rain Drop Effect | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Rain Canvas & Controls -->
  <div className="stage">
    <div className="controls">
      <button onclick="setSpeed(8)">Light</button>
      <button onclick="setSpeed(14)">Heavy</button>
      <button onclick="setSpeed(22)">Storm</button>
    </div>
    <canvas id="rainCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: Speed Control Buttons */
.controls button {
  background: #1e293b;
  color: #f8fafc;
  padding: 4px 12px;
  border-radius: 6px;
  cursor: pointer;
}`,
      js: `// Step 4: Speed Modifier Function
let rainSpeed = 14;

function setSpeed(newSpeed) {
  rainSpeed = newSpeed;
  drops.forEach(d => d.speed = Math.random() * 5 + rainSpeed);
}`
    },
    {
      step: 5,
      title: "Step 5: VS Code Interactive Workspace",
      subtitle: "Full interactive rain physics code. Edit script.js or style.css live below!",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Realistic Rain Drop Effect | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Complete Interactive Rain Canvas Markup -->
  <div className="stage" id="rainStage">
    <div className="controls">
      <button onclick="setSpeed(8)">Light</button>
      <button onclick="setSpeed(14)">Heavy</button>
      <button onclick="setSpeed(22)">Storm</button>
    </div>
    <canvas id="rainCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* 💡 VS Code Live Editor: Complete Standalone Working Rain CSS */
body {
  background: #070a12;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#rainCanvas {
  width: 100%;
  height: 340px;
  border-radius: 16px;
  border: 1px solid #1e293b;
  background: #070a12;
}`,
      js: `// Step 5: Complete Interactive Rain Animation Engine
const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = 340;

const drops = [];
const count = 150;

for (let i = 0; i < count; i++) {
  drops.push({
    x: Math.random() * width,
    y: Math.random() * height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 5 + 14,
    opacity: Math.random() * 0.5 + 0.3
  });
}

function draw() {
  ctx.fillStyle = 'rgba(7, 10, 18, 0.3)';
  ctx.fillRect(0, 0, width, height);

  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';

  drops.forEach((drop) => {
    ctx.strokeStyle = \`rgba(56, 189, 248, \${drop.opacity})\`;
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();

    drop.y += drop.speed;
    if (drop.y > height) {
      drop.y = -drop.length;
      drop.x = Math.random() * width;
    }
  });

  requestAnimationFrame(draw);
}

draw();`
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
            <CloudRain size={18} className="text-sky-400" />
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
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
          Realistic HTML5 Canvas Rain Drop Effect
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Learn how to build a high-performance HTML5 Canvas rainfall particle physics effect step-by-step.
        </p>
      </div>



      {/* WORKSPACE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* LEFT COLUMN: Main Canvas Stage */}
        <div className="bg-[#070a12] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between min-h-[460px] relative overflow-hidden shadow-2xl space-y-6 w-full">
          
          {/* Step Banner & Controls */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800/80 pb-4 gap-3">
            <div className="space-y-0.5">
              <span className="text-[11px] font-extrabold text-sky-400 uppercase tracking-wider font-mono">
                {currentStepData.title}
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {currentStepData.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {/* Rain Speed Buttons */}
              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono px-1 font-bold">Speed:</span>
                {[8, 14, 22].map((s) => (
                  <button
                    key={s}
                    onClick={() => setRainSpeed(s)}
                    className={`px-2 py-0.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      rainSpeed === s ? 'bg-sky-500 text-black shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {s === 8 ? 'Light' : s === 14 ? 'Heavy' : 'Storm'}
                  </button>
                ))}
              </div>

              {/* Step Navigation Arrows */}
              <div className="flex items-center gap-1.5">
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
          </div>

          {/* DYNAMIC CANVAS STAGE */}
          <div className="w-full relative rounded-2xl overflow-hidden border border-slate-800/80 bg-[#070a12] shadow-inner my-auto">
            <canvas ref={canvasRef} className="w-full h-80 block" />
            
            {/* Stage Info Badge */}
            <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] font-mono text-sky-400 font-bold">
              HTML5 CANVAS STAGE
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
          
          {/* VS Code Window Top Bar */}
          <div className="bg-[#252526] border-b border-[#333333] flex flex-wrap items-center justify-between px-3 pt-2">
            
            {/* Horizontal File Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              <div className="flex items-center gap-1.5 mr-3 px-1">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* Tab 1: index.html */}
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

              {/* Tab 2: style.css */}
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

              {/* Tab 3: script.js */}
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

            {/* Copy Button */}
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
                Master these foundational web development concepts to build realistic canvas physics engines from scratch!
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex bg-[#04AA6D]/10 border border-[#04AA6D]/30 text-[#04AA6D] text-xs font-mono font-bold px-3 py-1 rounded-full">
            Prerequisites & Roadmap
          </span>
        </div>

        {/* 4 Core Prerequisite Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: HTML5 Canvas Stage */}
          <Link
            href="/html/learn-html-web-free-lessons-what-is-the-internet"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xs">
                CANVAS
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                1. HTML5 Canvas Stage
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Learn HTML5 canvas element setup, 2D context initialization, and resolution scaling.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start HTML Lessons »
            </span>
          </Link>

          {/* Card 2: CSS Layout & Viewport */}
          <Link
            href="/html/html-headings-paragraphs-and-text-formatting"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-xs">
                CSS3
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                2. CSS Viewport Styling
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Style canvas borders, full-screen background overlays, and flex container alignment.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start CSS Styling Lessons »
            </span>
          </Link>

          {/* Card 3: Particle Physics Loop */}
          <Link
            href="/html/quiz"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                PHYSICS
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                3. Particle Animation Loop
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Master `requestAnimationFrame`, particle array loops, and ground splash physics.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Take Physics Quiz »
            </span>
          </Link>

          {/* Card 4: Windows CMD Terminal */}
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
                Launch local dev servers on Windows PC to test canvas particle physics in real-time!
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
