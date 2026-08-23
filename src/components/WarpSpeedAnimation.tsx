"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronRight, ChevronLeft, ChevronDown, Layers, FileCode, Hash, FileJson, GraduationCap, Rocket, ArrowRight } from 'lucide-react';

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
              <button onClick={() => setIsFolded(false)} className="ml-1 text-slate-400 hover:text-white p-0.5 cursor-pointer">
                <ChevronRight size={13} />
              </button>
            </div>
            <div onClick={() => setIsFolded(false)} className="flex flex-wrap items-center gap-2 cursor-pointer bg-[#2d3748]/60 hover:bg-[#2d3748] px-2.5 py-0.5 rounded border border-slate-700/60 text-[#808080] text-xs font-mono select-none">
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
          {lines.map((line, lineIdx) => (
            <div key={lineIdx} className="flex items-start group hover:bg-[#2a2d2e] px-1 py-0.5 rounded transition-colors">
              <div className="flex items-center text-[#858585] text-[11px] select-none min-w-[40px] pr-2 shrink-0">
                <span className="w-5 text-right font-mono">{lineIdx + 1}</span>
                <span className="w-4" />
              </div>
              <div className="flex-1 overflow-x-hidden">
                <RenderLineContent line={line} fileType={fileType} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WarpSpeedAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [speed, setSpeed] = useState<number>(15);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('script.js');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const w = (canvas.width = canvas.parentElement?.clientWidth || 500);
    const h = (canvas.height = 340);

    const count = activeStep === 1 ? 0 : activeStep === 2 ? 25 : activeStep === 3 ? 100 : activeStep === 4 ? 200 : 300;
    const stars: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: (Math.random() - 0.5) * w,
        y: (Math.random() - 0.5) * h,
        z: Math.random() * w
      });
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(4, 6, 12, 0.4)';
      ctx.fillRect(0, 0, w, h);

      // STEP 1: Space Stage Blueprint & Container
      if (activeStep === 1) {
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.15)';
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = 0; y < h; y += 40) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }

        ctx.fillStyle = 'rgba(168, 85, 247, 0.9)';
        ctx.font = '14px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('<canvas id="warpCanvas" width="' + w + '" height="' + h + '"></canvas>', w / 2, h / 2 - 10);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
        ctx.font = '11px sans-serif';
        ctx.fillText('3D Space Stage Initialized • Perspective Origin Ready (Step 1)', w / 2, h / 2 + 15);
        return;
      }

      const cx = w / 2;
      const cy = h / 2;

      // STEP 2: 3D Star Coordinates Model
      if (activeStep === 2) {
        stars.forEach((star, idx) => {
          star.z -= 1; // slow motion
          if (star.z <= 0) star.z = w;

          const k = 128 / star.z;
          const px = star.x * k + cx;
          const py = star.y * k + cy;

          if (px >= 0 && px < w && py >= 0 && py < h) {
            const size = Math.max(1.5, (1 - star.z / w) * 4);
            ctx.fillStyle = `rgba(168, 85, 247, 0.9)`;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();

            if (idx < 3) {
              ctx.fillStyle = 'rgba(192, 132, 252, 0.8)';
              ctx.font = '10px monospace';
              ctx.textAlign = 'left';
              ctx.fillText(`Star[${idx}]: {x:${Math.round(star.x)}, y:${Math.round(star.y)}, z:${Math.round(star.z)}}`, px + 6, py + 4);
            }
          }
        });

        ctx.fillStyle = 'rgba(168, 85, 247, 0.9)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Step 2: 3D Starfield Coordinates Model (25 Stars)', w / 2, 25);
        animId = requestAnimationFrame(draw);
        return;
      }

      // STEP 3: Z-Perspective Motion
      if (activeStep === 3) {
        stars.forEach((star) => {
          star.z -= speed;
          if (star.z <= 0) {
            star.z = w;
            star.x = (Math.random() - 0.5) * w;
            star.y = (Math.random() - 0.5) * h;
          }

          const k = 128 / star.z;
          const px = star.x * k + cx;
          const py = star.y * k + cy;

          if (px >= 0 && px < w && py >= 0 && py < h) {
            const size = Math.max(1, (1 - star.z / w) * 3);
            const alpha = 1 - star.z / w;
            ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        ctx.fillStyle = 'rgba(168, 85, 247, 0.9)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Step 3: Z-Perspective Projection Motion', w / 2, 25);
        animId = requestAnimationFrame(draw);
        return;
      }

      // STEP 4: Velocity Controls
      if (activeStep === 4) {
        stars.forEach((star) => {
          star.z -= speed;
          if (star.z <= 0) {
            star.z = w;
            star.x = (Math.random() - 0.5) * w;
            star.y = (Math.random() - 0.5) * h;
          }

          const k = 128 / star.z;
          const px = star.x * k + cx;
          const py = star.y * k + cy;

          if (px >= 0 && px < w && py >= 0 && py < h) {
            const size = Math.max(1, (1 - star.z / w) * 3);
            const alpha = 1 - star.z / w;
            ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        ctx.fillStyle = 'rgba(168, 85, 247, 0.9)';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`Step 4: Speed Velocity Controls (Current Speed: ${speed}x)`, w / 2, 25);
        animId = requestAnimationFrame(draw);
        return;
      }

      // STEP 5: Full 3D Engine
      stars.forEach((star) => {
        star.z -= speed;
        if (star.z <= 0) {
          star.z = w;
          star.x = (Math.random() - 0.5) * w;
          star.y = (Math.random() - 0.5) * h;
        }

        const k = 128 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px < w && py >= 0 && py < h) {
          const size = Math.max(1, (1 - star.z / w) * 3);
          const alpha = 1 - star.z / w;
          ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animId);
  }, [speed, activeStep]);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: Space Canvas Stage Container",
      subtitle: "Initializing 3D perspective space canvas stage.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Warp Speed Starfield | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 1: Space Canvas -->
  <div class="space-stage">
    <canvas id="warpCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 1: Space Viewport Styling */
#warpCanvas {
  background: #04060c;
  width: 100%;
  height: 340px;
  border-radius: 16px;
  display: block;
}`,
      js: `// Step 1: Space Canvas Initialized
const canvas = document.getElementById('warpCanvas');
const ctx = canvas.getContext('2d');`
    },
    {
      step: 2,
      title: "Step 2: 3D Starfield Coordinates Model",
      subtitle: "Generating random X, Y, Z space coordinates for 300 stars.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Warp Speed Starfield | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 2: Starfield Coordinates -->
  <div class="space-stage">
    <canvas id="warpCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 2: Canvas Border & Shadow */
#warpCanvas {
  background: #04060c;
  border: 1px solid #1e1b4b;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
}`,
      js: `// Step 2: 3D Star Coordinate Array
const stars = [];
for (let i = 0; i < 300; i++) {
  stars.push({
    x: (Math.random() - 0.5) * canvas.width,
    y: (Math.random() - 0.5) * canvas.height,
    z: Math.random() * canvas.width
  });
}`
    },
    {
      step: 3,
      title: "Step 3: Perspective Projection & Z-Axis Travel",
      subtitle: "Calculating perspective divide (k = 128 / z) for realistic 3D acceleration.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Warp Speed Starfield | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 3: Perspective Travel -->
  <div class="space-stage">
    <canvas id="warpCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 3: Smooth Canvas Render */
#warpCanvas {
  border-radius: 16px;
}`,
      js: `// Step 3: Perspective Projection Math
function draw() {
  ctx.fillStyle = 'rgba(4, 6, 12, 0.4)';
  ctx.fillRect(0, 0, width, height);

  stars.forEach(star => {
    star.z -= speed;
    if (star.z <= 0) star.z = width;

    const k = 128 / star.z;
    const px = star.x * k + width / 2;
    const py = star.y * k + height / 2;
  });
}`
    },
    {
      step: 4,
      title: "Step 4: Warp Speed Acceleration Controls",
      subtitle: "Adding Normal, Impulse, and Hyper Warp speed buttons.",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Warp Speed Starfield | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 4: Speed Controls -->
  <div class="space-stage">
    <div class="controls">
      <button onclick="setSpeed(10)">Normal</button>
      <button onclick="setSpeed(25)">Impulse</button>
      <button onclick="setSpeed(45)">Hyper Warp</button>
    </div>
    <canvas id="warpCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* Step 4: Speed Buttons Styling */
.controls button {
  background: #2e1065;
  color: #c084fc;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
}`,
      js: `// Step 4: Speed Modifier Function
let speed = 15;
function setSpeed(val) { speed = val; }`
    },
    {
      step: 5,
      title: "Step 5: VS Code Interactive Workspace",
      subtitle: "Full interactive warp speed physics code. Edit script.js or style.css live below!",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Warp Speed Starfield | Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Step 5: Complete Interactive Warp Speed Canvas Markup -->
  <div class="space-stage" id="warpStage">
    <div class="controls">
      <button onclick="setSpeed(10)">Normal</button>
      <button onclick="setSpeed(25)">Impulse</button>
      <button onclick="setSpeed(45)">Hyper Warp</button>
    </div>
    <canvas id="warpCanvas"></canvas>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      css: `/* 💡 VS Code Live Editor: Complete Standalone Working Warp Speed CSS */
body {
  background: #04060c;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#warpCanvas {
  width: 100%;
  height: 340px;
  border-radius: 16px;
  border: 1px solid #1e1b4b;
  background: #04060c;
}`,
      js: `// Step 5: Complete Interactive 3D Warp Speed Engine
const canvas = document.getElementById('warpCanvas');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = 340;
let speed = 15;

const stars = [];
for (let i = 0; i < 300; i++) {
  stars.push({
    x: (Math.random() - 0.5) * w,
    y: (Math.random() - 0.5) * h,
    z: Math.random() * w
  });
}

function draw() {
  ctx.fillStyle = 'rgba(4, 6, 12, 0.4)';
  ctx.fillRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;

  stars.forEach((star) => {
    star.z -= speed;
    if (star.z <= 0) star.z = w;

    const k = 128 / star.z;
    const px = star.x * k + cx;
    const py = star.y * k + cy;

    if (px >= 0 && px < w && py >= 0 && py < h) {
      const size = Math.max(1, (1 - star.z / w) * 3);
      const alpha = 1 - star.z / w;
      ctx.fillStyle = \`rgba(168, 85, 247, \${alpha})\`;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
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
            <Rocket size={18} className="text-purple-400" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
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
          Warp Speed 3D Starfield Acceleration
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Learn how to build a 3D perspective starfield acceleration particle physics engine step-by-step.
        </p>
      </div>



      {/* WORKSPACE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* LEFT COLUMN: Main Stage */}
        <div className="bg-[#04060c] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between min-h-[460px] relative overflow-hidden shadow-2xl space-y-6 w-full">
          
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800/80 pb-4 gap-3">
            <div className="space-y-0.5">
              <span className="text-[11px] font-extrabold text-purple-400 uppercase tracking-wider font-mono">
                {currentStepData.title}
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {currentStepData.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono px-1 font-bold">Warp:</span>
                {[10, 25, 45].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-2 py-0.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      speed === s ? 'bg-purple-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {s === 10 ? 'Normal' : s === 25 ? 'Impulse' : 'Hyper'}
                  </button>
                ))}
              </div>

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

          <div className="w-full relative rounded-2xl overflow-hidden border border-slate-800/80 bg-[#04060c] shadow-inner my-auto">
            <canvas ref={canvasRef} className="w-full h-80 block" />
            <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[10px] font-mono text-purple-400 font-bold">
              3D WARP SPEED CANVAS STAGE
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
                Master these foundational web development concepts to build 3D perspective starfields from scratch!
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex bg-[#04AA6D]/10 border border-[#04AA6D]/30 text-[#04AA6D] text-xs font-mono font-bold px-3 py-1 rounded-full">
            Prerequisites & Roadmap
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/html/learn-html-web-free-lessons-what-is-the-internet"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xs">
                CANVAS
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                1. 3D Canvas Stage
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Learn HTML5 canvas initialization & center origin mapping.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start HTML Lessons »
            </span>
          </Link>

          <Link
            href="/html/html-headings-paragraphs-and-text-formatting"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs">
                CSS3
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                2. CSS Space Viewport
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Style space black backgrounds & full-width canvas borders.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start CSS Styling Lessons »
            </span>
          </Link>

          <Link
            href="/html/quiz"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold text-xs">
                PHYSICS
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                3. Perspective Math
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Master 3D perspective projection (`k = 128 / z`) & warp speed math.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Take 3D Physics Quiz »
            </span>
          </Link>

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
                Launch dev servers on Windows PC to test 3D warp speed physics live!
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
