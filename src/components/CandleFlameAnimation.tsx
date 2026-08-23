"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  FileCode,
  Hash,
  FileJson,
  GraduationCap,
  Code2,
  Sparkles,
  ArrowRight,
  Flame,
  Wind,
  Volume2,
  VolumeX,
  RotateCcw,
  Download,
  Eye,
  Sliders
} from 'lucide-react';

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
          if (['const', 'let', 'var', 'function', 'if', 'else', 'return', 'document', 'addEventListener', 'new', 'AudioContext'].includes(word)) {
            return <span key={wIdx} className="text-[#569CD6] font-bold">{word} </span>;
          }
          if (['console', 'window', 'alert', 'getElementById', 'querySelector', 'Math'].includes(word)) {
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

  if (line.includes('{') || line.includes('}')) {
    return (
      <span className="whitespace-pre-wrap break-words break-all">
        <span className="text-[#D7BA7D] font-bold">{line.replace(/[\{\}]/g, '')}</span>
        {line.includes('{') && <span className="text-[#FFD700]"> &#123;</span>}
        {line.includes('}') && <span className="text-[#FFD700]">&#125;</span>}
      </span>
    );
  }

  return <span className="text-[#D4D4D4] whitespace-pre-wrap break-words break-all">{line}</span>;
}

function VsCodeSyntaxHighlight({ code, fileType }: { code: string; fileType: 'html' | 'css' | 'js' }) {
  const lines = code.split('\n');

  return (
    <div className="font-mono text-xs leading-relaxed w-full max-w-full overflow-x-hidden selection:bg-[#264f78] space-y-0.5">
      {lines.map((line, lineIdx) => {
        const lineNum = lineIdx + 1;
        return (
          <div key={lineIdx} className="flex items-start group hover:bg-[#2a2d2e] px-1 py-0.5 rounded transition-colors">
            <div className="flex items-center text-[#858585] text-[11px] select-none min-w-[36px] pr-2 shrink-0">
              <span className="w-5 text-right font-mono">{lineNum}</span>
              <span className="w-2" />
            </div>
            <div className="flex-1 overflow-x-hidden">
              <RenderLineContent line={line} fileType={fileType} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Preset Chemical Flame Colors
const FLAME_PRESETS = [
  {
    id: 'golden',
    name: 'Standard Beeswax (Golden)',
    outerColor: '#f97316',
    midColor: '#fde047',
    coreColor: '#ffffff',
    blueBase: '#3b82f6',
    glowColor: 'rgba(249, 115, 22, 0.45)',
    description: 'Classic hydrocarbon combustion with luminous incandescence.'
  },
  {
    id: 'cobalt',
    name: 'Natural Gas (Cobalt Blue)',
    outerColor: '#2563eb',
    midColor: '#60a5fa',
    coreColor: '#dbeafe',
    blueBase: '#1d4ed8',
    glowColor: 'rgba(59, 130, 246, 0.45)',
    description: 'High-oxygen clean combustion (Bunsen burner flame).'
  },
  {
    id: 'emerald',
    name: 'Copper Chloride (Emerald)',
    outerColor: '#059669',
    midColor: '#34d399',
    coreColor: '#ecfdf5',
    blueBase: '#0284c7',
    glowColor: 'rgba(168, 85, 247, 0.45)',
    description: 'Copper salt emission producing vibrant emerald green flame.'
  },
  {
    id: 'ruby',
    name: 'Strontium Salt (Ruby Red)',
    outerColor: '#dc2626',
    midColor: '#f87171',
    coreColor: '#fee2e2',
    blueBase: '#7c3aed',
    glowColor: 'rgba(239, 68, 68, 0.45)',
    description: 'Strontium nitrate pyrotechnic emission generating deep crimson.'
  },
  {
    id: 'amethyst',
    name: 'Potassium Violet (Amethyst)',
    outerColor: '#9333ea',
    midColor: '#c084fc',
    coreColor: '#f3e8ff',
    blueBase: '#4f46e5',
    glowColor: 'rgba(168, 85, 247, 0.45)',
    description: 'Potassium ionization producing rich lilac and purple tones.'
  }
];

export default function CandleFlameAnimation() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'index.html' | 'style.css' | 'script.js'>('style.css');
  const [isLit, setIsLit] = useState(true);
  const [copied, setCopied] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const soundGainRef = useRef<GainNode | null>(null);

  // Realistic Interactive Controls
  const [selectedPreset, setSelectedPreset] = useState(FLAME_PRESETS[0]);
  const [windDraft, setWindDraft] = useState<number>(0); // -15 to +15 deg tilt
  const [flameScale, setFlameScale] = useState<number>(1.0); // 0.7x to 1.4x
  const [flickerSpeed, setFlickerSpeed] = useState<number>(1.0); // 0.6s to 1.8s
  const [roomDarkness, setRoomDarkness] = useState<number>(85); // % ambient darkness

  // Procedural Web Audio Sound Generator
  const playCrackleSound = (start: boolean) => {
    if (!start) {
      if (soundGainRef.current && audioCtxRef.current) {
        soundGainRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.1);
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 2.5;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 650;
      filter.Q.value = 1.2;

      const gain = ctx.createGain();
      gain.gain.value = 0.04;
      soundGainRef.current = gain;

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState && isLit) {
      playCrackleSound(true);
    } else {
      playCrackleSound(false);
    }
  };

  useEffect(() => {
    if (soundEnabled) {
      playCrackleSound(isLit);
    }
    return () => {
      playCrackleSound(false);
    };
  }, [isLit, soundEnabled]);

  const stepsData = [
    {
      step: 1,
      title: "Step 1: 3D Wax Cylinder & Molten Dish",
      subtitle: "Designing the realistic wax pillar with 3D cylindrical lighting, translucent top rim, and liquid wax pool.",
      details: [
        "Uses multi-stop linear-gradient to simulate cylindrical lighting (highlight at 25%, shadow edge at 85%).",
        "Curved top molten dish with elliptical border-radius simulates liquid wax well around the wick.",
        "3D wax drip trails rendered with realistic drop-shadows."
      ],
      takeaway: "Real candles are 3D translucent cylinders that reflect light internally through subsurface scattering.",
      html: `<!-- Candle Wax Pillar & Molten Pool -->
<div class="candle-wrapper">
  <div class="wax-pillar">
    <div class="molten-pool">
      <div class="pool-reflection"></div>
    </div>
    <div class="wax-drip drip-left"></div>
    <div class="wax-drip drip-right"></div>
  </div>
  <div class="candle-shadow"></div>
</div>`,
      css: `/* Step 1: Photorealistic Wax Cylinder & Molten Well */
.candle-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wax-pillar {
  width: 72px;
  height: 160px;
  background: linear-gradient(
    90deg,
    #e2d098 0%,
    #fef9c3 22%,
    #fef08a 45%,
    #fde047 70%,
    #ca8a04 92%,
    #854d0e 100%
  );
  border-radius: 6px 6px 18px 18px;
  position: relative;
  box-shadow: inset 0 3px 6px rgba(255, 255, 255, 0.7),
              inset 0 -8px 12px rgba(0, 0, 0, 0.4),
              0 10px 30px rgba(0, 0, 0, 0.8);
}

.molten-pool {
  width: 100%;
  height: 16px;
  background: radial-gradient(ellipse at center, #fef08a 0%, #ca8a04 70%, #713f12 100%);
  border-radius: 50%;
  position: absolute;
  top: -8px;
  left: 0;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
}

.wax-drip {
  position: absolute;
  background: linear-gradient(90deg, #fef9c3, #eab308);
  border-radius: 0 0 10px 10px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
}

.drip-left {
  width: 9px;
  height: 48px;
  top: 0;
  left: 8px;
}

.drip-right {
  width: 7px;
  height: 75px;
  top: 0;
  right: 12px;
}

.candle-shadow {
  width: 120px;
  height: 16px;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.85) 0%, transparent 75%);
  margin-top: -6px;
}`,
      js: `// Step 1: Wax Pillar Initialized
console.log("🕯️ Step 1: 3D Wax Pillar & Molten Pool Rendered!");`
    },
    {
      step: 2,
      title: "Step 2: Cotton Wick & Incandescent Ember",
      subtitle: "Adding the organic curved cotton wick with a burning, glowing incandescent coal tip.",
      details: [
        "Curved wick posture using CSS transform rotate mimics a real burned cotton thread.",
        "Glowing red-orange ember tip animated with subtle pulse to simulate fuel vaporization.",
        "Anchored firmly into the center of the molten liquid wax pool."
      ],
      takeaway: "The flame is fed by capillary action drawing liquid fuel up the porous cotton thread to the hot tip.",
      html: `<!-- Wax Pillar + Braided Cotton Wick & Glowing Ember -->
<div class="candle-wrapper">
  <div class="wick-assembly">
    <div class="wick-ember"></div>
    <div class="wick-stem"></div>
  </div>
  
  <div class="wax-pillar">
    <div class="molten-pool"></div>
  </div>
  <div class="candle-shadow"></div>
</div>`,
      css: `/* Step 2: Braided Wick & Glowing Hot Ember */
.wick-assembly {
  position: relative;
  width: 4px;
  height: 20px;
  margin-bottom: -6px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wick-stem {
  width: 3.5px;
  height: 16px;
  background: linear-gradient(to top, #1e293b 0%, #0f172a 70%, #451a03 100%);
  border-radius: 2px;
  transform: rotate(4deg);
}

.wick-ember {
  width: 4px;
  height: 4px;
  background: #ff4500;
  border-radius: 50%;
  box-shadow: 0 0 6px #ff4500, 0 0 12px #ff7700;
  animation: emberPulse 1.8s infinite ease-in-out;
}

@keyframes emberPulse {
  0%, 100% {
    background: #ff4500;
    box-shadow: 0 0 4px #ff4500, 0 0 8px #ff6600;
  }
  50% {
    background: #ff7700;
    box-shadow: 0 0 7px #ff7700, 0 0 14px #ffaa00;
  }
}`,
      js: `// Step 2: Cotton Wick & Ember Active
console.log("🧵 Step 2: Braided Wick with Hot Ember Attached!");`
    },
    {
      step: 3,
      title: "Step 3: 4-Zone Photorealistic Flame Geometry",
      subtitle: "Constructing the 4 optical combustion zones: Blue base, vapor buffer, bright yellow body, and white core.",
      details: [
        "Zone 1 (Blue Root): Oxygen-rich combustion base (#2563eb to #38bdf8) where vapor mixes with air.",
        "Zone 2 (Dark Buffer): Hydrocarbon vapor pocket directly above the wick.",
        "Zone 3 (Luminous Body): Incandescent soot particles glowing bright yellow-orange with teardrop border-radius.",
        "Zone 4 (White-Hot Core): Hottest inner zone with radiant bloom."
      ],
      takeaway: "Layering multiple translucent optical zones creates realistic depth and lighting impossible with a single shape.",
      html: `<!-- Multi-Zone Combustion Flame & Candle Body -->
<div class="candle-wrapper">
  <div class="flame-assembly">
    <div class="flame-blue-base"></div>
    <div class="flame-outer">
      <div class="flame-middle">
        <div class="flame-core"></div>
      </div>
    </div>
  </div>
  
  <div class="wick-assembly">
    <div class="wick-ember"></div>
    <div class="wick-stem"></div>
  </div>
  
  <div class="wax-pillar">
    <div class="molten-pool"></div>
  </div>
  <div class="candle-shadow"></div>
</div>`,
      css: `/* Step 3: 4-Zone Photorealistic Flame Geometry */
.flame-assembly {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: -4px;
  z-index: 10;
}

/* Zone 1: Blue Oxygen Combustion Root */
.flame-blue-base {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 14px;
  background: radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.5) 60%, transparent 100%);
  border-radius: 50% 50% 30% 30%;
  filter: blur(0.5px);
  z-index: 11;
}

/* Zone 3: Luminous Outer Orange/Yellow Teardrop */
.flame-outer {
  width: 28px;
  height: 64px;
  background: linear-gradient(to top, rgba(249, 115, 22, 0.95) 0%, #f97316 40%, #fbbf24 85%, transparent 100%);
  border-radius: 50% 50% 35% 35% / 80% 80% 25% 25%;
  box-shadow: 0 0 35px rgba(249, 115, 22, 0.6),
              0 0 60px rgba(251, 191, 36, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 3px;
  filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.8));
}

/* Zone 4: Bright Middle Glow */
.flame-middle {
  width: 18px;
  height: 44px;
  background: linear-gradient(to top, #fde047 0%, #fef08a 75%, transparent 100%);
  border-radius: 50% 50% 35% 35% / 80% 80% 25% 25%;
  box-shadow: 0 0 20px #fde047;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2px;
}

/* Zone 5: Ultra-Bright White-Hot Core */
.flame-core {
  width: 9px;
  height: 24px;
  background: #ffffff;
  border-radius: 50% 50% 35% 35% / 80% 80% 25% 25%;
  box-shadow: 0 0 12px #ffffff;
}`,
      js: `// Step 3: 4 Optical Combustion Zones Rendered
console.log("🔥 Step 3: Multi-Zone Teardrop Flame Formed!");`
    },
    {
      step: 4,
      title: "Step 4: Turbulent Keyframe Physics & Ambient Bounce",
      subtitle: "Simulating organic micro-flutter, air currents, and radiant light bounce onto the candle wax.",
      details: [
        "Natural multi-stage @keyframes flicker simulates non-linear air turbulence and draft skew.",
        "Radial ambient room glow casts pulsing light against surrounding darkness.",
        "Dynamic specular highlight on the molten wax reflects the flickering flame."
      ],
      takeaway: "Natural flames never loop linearly; multi-frequency keyframe easing creates believable life.",
      html: `<!-- Animated Candle with Ambient Room Glow -->
<div class="candle-wrapper">
  <div class="ambient-glow"></div>

  <div class="flame-assembly animate-flicker">
    <div class="flame-blue-base"></div>
    <div class="flame-outer">
      <div class="flame-middle">
        <div class="flame-core"></div>
      </div>
    </div>
  </div>
  
  <div class="wick-assembly">
    <div class="wick-ember"></div>
    <div class="wick-stem"></div>
  </div>
  
  <div class="wax-pillar">
    <div class="molten-pool">
      <div class="pool-reflection animate-reflection"></div>
    </div>
  </div>
  <div class="candle-shadow"></div>
</div>`,
      css: `/* Step 4: Organic Turbulent Physics & Ambient Lighting */
.ambient-glow {
  position: absolute;
  top: -40px;
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.28) 0%, rgba(251, 191, 36, 0.12) 45%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  animation: ambientPulse 2s infinite ease-in-out;
}

.animate-flicker {
  animation: realFlameFlicker 1.4s infinite ease-in-out;
  transform-origin: bottom center;
}

@keyframes realFlameFlicker {
  0%   { transform: scaleY(1) scaleX(1) rotate(0deg) skewX(0deg); }
  15%  { transform: scaleY(1.08) scaleX(0.96) rotate(-1.5deg) skewX(-1.5deg); }
  30%  { transform: scaleY(0.96) scaleX(1.04) rotate(1deg) skewX(1deg); }
  45%  { transform: scaleY(1.12) scaleX(0.92) rotate(-2deg) skewX(-2deg); }
  60%  { transform: scaleY(0.98) scaleX(1.02) rotate(1.5deg) skewX(1.5deg); }
  75%  { transform: scaleY(1.05) scaleX(0.95) rotate(-0.5deg) skewX(-0.5deg); }
  90%  { transform: scaleY(0.94) scaleX(1.06) rotate(2deg) skewX(2deg); }
  100% { transform: scaleY(1) scaleX(1) rotate(0deg) skewX(0deg); }
}

@keyframes ambientPulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50%      { opacity: 1.1; transform: scale(1.06); }
}

.pool-reflection {
  width: 14px;
  height: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  margin: 2px auto 0;
  filter: blur(1px);
}

.animate-reflection {
  animation: reflectionShimmer 1.4s infinite ease-in-out;
}

@keyframes reflectionShimmer {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%      { opacity: 0.95; transform: scale(1.2); }
}`,
      js: `// Step 4: Turbulent Keyframe Physics Running
console.log("🌬️ Step 4: Physics Engine & Ambient Lighting Active!");`
    },
    {
      step: 5,
      title: "Step 5: Interactive Laboratory & Live Code Editor",
      subtitle: "Complete working standalone candle simulator with interactive wind draft, flame blowing, smoke particles, and color presets!",
      details: [
        "Full click-to-extinguish / reignite mechanic with wisps of rising realistic smoke.",
        "Interactive wind draft slider with real-time CSS transform tilt and fluid animation.",
        "Live editable CSS/HTML/JS workspace with 1-click standalone code export."
      ],
      takeaway: "Mastering advanced CSS gradients, multi-zone filters, and keyframe turbulence allows you to recreate any real-world physical phenomenon purely in code.",
      html: `<!-- Complete Interactive Candle Simulator -->
<div class="candle-container" id="myCandle">
  <!-- Ambient Room Glow -->
  <div class="ambient-glow" id="ambientGlow"></div>

  <!-- Realistic Flame Assembly -->
  <div class="flame-assembly animate-flicker" id="flameGroup">
    <div class="flame-blue-base"></div>
    <div class="flame-outer">
      <div class="flame-middle">
        <div class="flame-core"></div>
      </div>
    </div>
  </div>

  <!-- Wisps of Rising Smoke (Shown when Extinguished) -->
  <div class="smoke-assembly" id="smokeGroup" style="display: none;">
    <div class="smoke-wisp wisp-1"></div>
    <div class="smoke-wisp wisp-2"></div>
    <div class="smoke-wisp wisp-3"></div>
  </div>

  <!-- Braided Wick & Ember -->
  <div class="wick-assembly">
    <div class="wick-ember" id="wickEmber"></div>
    <div class="wick-stem"></div>
  </div>

  <!-- 3D Wax Pillar Body -->
  <div class="wax-pillar">
    <div class="molten-pool">
      <div class="pool-reflection animate-reflection"></div>
    </div>
    <div class="wax-drip drip-left"></div>
    <div class="wax-drip drip-right"></div>
  </div>

  <!-- Ground Drop Shadow -->
  <div class="candle-shadow"></div>
</div>`,
      css: `/* 💡 Standalone Photorealistic CSS Candle - Full Production Ready */
.candle-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.ambient-glow {
  position: absolute;
  top: -50px;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.32) 0%, rgba(251, 191, 36, 0.12) 45%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  animation: ambientPulse 2s infinite ease-in-out;
}

.flame-assembly {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: -4px;
  z-index: 10;
  transform-origin: bottom center;
}

.flame-blue-base {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 14px;
  background: radial-gradient(ellipse at bottom, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.5) 60%, transparent 100%);
  border-radius: 50% 50% 30% 30%;
  filter: blur(0.5px);
  z-index: 11;
}

.flame-outer {
  width: 28px;
  height: 64px;
  background: linear-gradient(to top, rgba(249, 115, 22, 0.95) 0%, #f97316 40%, #fbbf24 85%, transparent 100%);
  border-radius: 50% 50% 35% 35% / 80% 80% 25% 25%;
  box-shadow: 0 0 35px rgba(249, 115, 22, 0.6), 0 0 60px rgba(251, 191, 36, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 3px;
  filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.8));
}

.flame-middle {
  width: 18px;
  height: 44px;
  background: linear-gradient(to top, #fde047 0%, #fef08a 75%, transparent 100%);
  border-radius: 50% 50% 35% 35% / 80% 80% 25% 25%;
  box-shadow: 0 0 20px #fde047;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2px;
}

.flame-core {
  width: 9px;
  height: 24px;
  background: #ffffff;
  border-radius: 50% 50% 35% 35% / 80% 80% 25% 25%;
  box-shadow: 0 0 12px #ffffff;
}

.wick-assembly {
  position: relative;
  width: 4px;
  height: 20px;
  margin-bottom: -6px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wick-stem {
  width: 3.5px;
  height: 16px;
  background: linear-gradient(to top, #1e293b 0%, #0f172a 70%, #451a03 100%);
  border-radius: 2px;
  transform: rotate(4deg);
}

.wick-ember {
  width: 4px;
  height: 4px;
  background: #ff4500;
  border-radius: 50%;
  box-shadow: 0 0 6px #ff4500, 0 0 12px #ff7700;
}

.wax-pillar {
  width: 72px;
  height: 160px;
  background: linear-gradient(90deg, #e2d098 0%, #fef9c3 22%, #fef08a 45%, #fde047 70%, #ca8a04 92%, #854d0e 100%);
  border-radius: 6px 6px 18px 18px;
  position: relative;
  box-shadow: inset 0 3px 6px rgba(255, 255, 255, 0.7), inset 0 -8px 12px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.8);
}

.molten-pool {
  width: 100%;
  height: 16px;
  background: radial-gradient(ellipse at center, #fef08a 0%, #ca8a04 70%, #713f12 100%);
  border-radius: 50%;
  position: absolute;
  top: -8px;
  left: 0;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
}

.wax-drip {
  position: absolute;
  background: linear-gradient(90deg, #fef9c3, #eab308);
  border-radius: 0 0 10px 10px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
}

.drip-left {
  width: 9px;
  height: 48px;
  top: 0;
  left: 8px;
}

.drip-right {
  width: 7px;
  height: 75px;
  top: 0;
  right: 12px;
}

.candle-shadow {
  width: 120px;
  height: 16px;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.85) 0%, transparent 75%);
  margin-top: -6px;
}

/* Smoke Particles */
.smoke-assembly {
  position: absolute;
  top: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.smoke-wisp {
  position: absolute;
  width: 8px;
  height: 24px;
  background: linear-gradient(to top, rgba(148, 163, 184, 0.6) 0%, transparent 100%);
  border-radius: 50%;
  filter: blur(2px);
}

.wisp-1 { animation: smokeRise 2.4s infinite ease-out; }
.wisp-2 { animation: smokeRise 2.8s infinite 0.6s ease-out; }

@keyframes smokeRise {
  0%   { transform: translateY(0) scale(1); opacity: 0.7; }
  50%  { transform: translateY(-40px) translateX(10px) scale(2.2); opacity: 0.35; }
  100% { transform: translateY(-90px) translateX(-15px) scale(3.5); opacity: 0; }
}

@keyframes realFlameFlicker {
  0%   { transform: scaleY(1) scaleX(1) rotate(0deg) skewX(0deg); }
  15%  { transform: scaleY(1.08) scaleX(0.96) rotate(-1.5deg) skewX(-1.5deg); }
  30%  { transform: scaleY(0.96) scaleX(1.04) rotate(1deg) skewX(1deg); }
  45%  { transform: scaleY(1.12) scaleX(0.92) rotate(-2deg) skewX(-2deg); }
  60%  { transform: scaleY(0.98) scaleX(1.02) rotate(1.5deg) skewX(1.5deg); }
  75%  { transform: scaleY(1.05) scaleX(0.95) rotate(-0.5deg) skewX(-0.5deg); }
  90%  { transform: scaleY(0.94) scaleX(1.06) rotate(2deg) skewX(2deg); }
  100% { transform: scaleY(1) scaleX(1) rotate(0deg) skewX(0deg); }
}

.animate-flicker {
  animation: realFlameFlicker 1.4s infinite ease-in-out;
}`,
      js: `// Step 5: Interactive Click Listener to Toggle Flame & Smoke
const candle = document.getElementById('myCandle');
const flame = document.getElementById('flameGroup');
const smoke = document.getElementById('smokeGroup');
const glow = document.getElementById('ambientGlow');
const ember = document.getElementById('wickEmber');

let isLit = true;

candle.addEventListener('click', () => {
  isLit = !isLit;
  if (isLit) {
    flame.style.display = 'flex';
    smoke.style.display = 'none';
    glow.style.display = 'block';
    ember.style.boxShadow = '0 0 6px #ff4500, 0 0 12px #ff7700';
    console.log("🔥 Candle Reignited!");
  } else {
    flame.style.display = 'none';
    smoke.style.display = 'flex';
    glow.style.display = 'none';
    ember.style.boxShadow = 'none';
    console.log("💨 Candle Blown Out - Smoke Rising...");
  }
});`
    }
  ];

  const currentStepData = stepsData[activeStep - 1];
  const [userHtml, setUserHtml] = useState<string>(stepsData[4].html);
  const [userCss, setUserCss] = useState<string>(stepsData[4].css);
  const [userJs, setUserJs] = useState<string>(stepsData[4].js);

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

  const handleDownloadStandaloneHtml = () => {
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Realistic CSS Candle | Nextsem Academy</title>
  <style>
body {
  background: #07090e;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
${userCss}
  </style>
</head>
<body>
${userHtml}
  <script>
${userJs}
  </script>
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'realistic-candle-flame.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 text-left">
      
      {/* Top Header */}
      <div className="space-y-3 border-b border-slate-800 pb-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Flame size={18} className="text-amber-400 animate-pulse" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
              Photorealistic Web Physics Laboratory
            </span>
          </div>

          {/* NS Brand Badge & Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                soundEnabled
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Toggle Web Audio Procedural Flame Crackle"
            >
              {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
              <span className="hidden sm:inline">{soundEnabled ? 'Flame Audio On' : 'Flame Audio Off'}</span>
            </button>

            <div className="flex items-center gap-1.5 bg-[#09101f] border-2 border-[#04AA6D] px-2.5 py-1 rounded-xl text-xs font-mono font-black shadow-lg">
              <span className="text-[#04AA6D] text-sm">N</span>
              <span className="text-white text-sm">S</span>
              <span className="text-slate-300 ml-1 font-sans font-bold">Nextsem Labs</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          How To Build A Photorealistic CSS Candle (Step-by-Step)
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          Experience ultra-realistic 3D wax translucency, 4-zone combustion physics (blue oxygen base, glowing incandescent body), organic micro-turbulence, and wind draft mechanics without any images or 3D engines!
        </p>
      </div>

      {/* STEP SELECTOR CAROUSEL PILLS */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 select-none">
        {stepsData.map((s) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
              activeStep === s.step
                ? 'bg-amber-500/10 border-amber-400/80 shadow-lg shadow-amber-500/10 scale-[1.02]'
                : 'bg-[#0b0f19] border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                activeStep === s.step ? 'bg-amber-400 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
              }`}>
                0{s.step}
              </span>
              {activeStep === s.step && <Sparkles size={12} className="text-amber-400" />}
            </div>
            <span className={`text-xs font-bold truncate w-full ${activeStep === s.step ? 'text-white' : 'text-slate-300'}`}>
              {s.title.split(':')[1]?.trim() || s.title}
            </span>
          </button>
        ))}
      </div>

      {/* DESKTOP SIDE-BY-SIDE WORKSPACE GRID (Stacked on Mobile, 2-Column Side-by-Side on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* LEFT COLUMN: Main Candle Canvas Stage */}
        <div className="bg-[#06080e] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between min-h-[540px] relative overflow-hidden shadow-2xl space-y-6 w-full">
          
          {/* Top Stage Bar */}
          <div className="w-full flex items-center justify-between border-b border-slate-800/80 pb-3 z-20">
            <div className="space-y-0.5">
              <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider font-mono">
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
                title="Previous Step"
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
                title="Next Step"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Ambient Room Glow Halo */}
          {activeStep >= 4 && isLit && (
            <div
              className="absolute rounded-full pointer-events-none transition-all duration-700"
              style={{
                width: `${Math.round(280 * flameScale)}px`,
                height: `${Math.round(280 * flameScale)}px`,
                top: `${40 - windDraft * 1.5}px`,
                background: `radial-gradient(circle, ${selectedPreset.glowColor} 0%, rgba(251, 191, 36, 0.12) 45%, transparent 70%)`,
                opacity: (roomDarkness / 100) * 0.9,
                filter: 'blur(8px)',
                animation: `ambientPulse ${1.8 / flickerSpeed}s infinite ease-in-out`
              }}
            />
          )}

          {/* DYNAMIC LIVE CANVA ASSEMBLY */}
          <div
            onClick={() => activeStep >= 3 && setIsLit(!isLit)}
            title={activeStep >= 3 ? (isLit ? "Click candle to blow out" : "Click candle to reignite") : ""}
            className={`relative flex flex-col items-center justify-end z-10 pt-10 my-auto transition-transform ${
              activeStep >= 3 ? "cursor-pointer group" : ""
            }`}
          >
            
            {/* Dynamic Real Flame */}
            {activeStep >= 3 && isLit && (
              <div
                className="relative flex flex-col items-center justify-end z-20"
                style={{
                  transformOrigin: 'bottom center',
                  transform: `scale(${flameScale}) rotate(${windDraft}deg) skewX(${windDraft * 0.4}deg)`,
                  animation: activeStep >= 4 ? `realFlameFlicker ${1.4 / flickerSpeed}s infinite ease-in-out` : 'none',
                  marginBottom: '-4px'
                }}
              >
                
                {/* Zone 1: Blue Oxygen Combustion Root (Base) */}
                <div
                  className="absolute bottom-0 z-20 pointer-events-none"
                  style={{
                    width: '20px',
                    height: '14px',
                    background: `radial-gradient(ellipse at bottom, ${selectedPreset.blueBase} 0%, rgba(37, 99, 235, 0.4) 60%, transparent 100%)`,
                    borderRadius: '50% 50% 30% 30%',
                    filter: 'blur(0.5px)'
                  }}
                />

                {/* Zone 3 & 4: Luminous Outer Orange & Yellow Body */}
                <div
                  className="relative flex justify-center items-end"
                  style={{
                    width: '28px',
                    height: '64px',
                    background: `linear-gradient(to top, rgba(249, 115, 22, 0.95) 0%, ${selectedPreset.outerColor} 40%, ${selectedPreset.midColor} 85%, transparent 100%)`,
                    borderRadius: '50% 50% 35% 35% / 80% 80% 25% 25%',
                    boxShadow: `0 0 35px ${selectedPreset.glowColor}, 0 0 60px ${selectedPreset.outerColor}40`,
                    filter: `drop-shadow(0 0 10px ${selectedPreset.outerColor})`,
                    paddingBottom: '3px'
                  }}
                >
                  {/* Middle Yellow Glow */}
                  <div
                    className="flex justify-center items-end"
                    style={{
                      width: '18px',
                      height: '44px',
                      background: `linear-gradient(to top, ${selectedPreset.midColor} 0%, #fef08a 75%, transparent 100%)`,
                      borderRadius: '50% 50% 35% 35% / 80% 80% 25% 25%',
                      boxShadow: `0 0 20px ${selectedPreset.midColor}`,
                      paddingBottom: '2px'
                    }}
                  >
                    {/* Zone 5: Ultra-Bright White-Hot Core */}
                    <div
                      style={{
                        width: '9px',
                        height: '24px',
                        backgroundColor: selectedPreset.coreColor,
                        borderRadius: '50% 50% 35% 35% / 80% 80% 25% 25%',
                        boxShadow: `0 0 12px ${selectedPreset.coreColor}`
                      }}
                    />
                  </div>
                </div>

              </div>
            )}

            {/* Rising Wisps of Smoke when Extinguished */}
            {activeStep >= 3 && !isLit && (
              <div className="absolute top-[0%] flex flex-col items-center pointer-events-none z-20">
                <div className="w-2.5 h-16 bg-gradient-to-t from-slate-400/80 via-slate-500/40 to-transparent blur-[2px] animate-smoke-wisp-1" />
                <div className="w-3.5 h-20 bg-gradient-to-t from-slate-300/70 via-slate-400/30 to-transparent blur-[3px] -mt-10 animate-smoke-wisp-2" />
                <div className="w-2 h-12 bg-gradient-to-t from-slate-400/60 to-transparent blur-[1.5px] -mt-8 animate-smoke-wisp-3" />
              </div>
            )}

            {/* Braided Cotton Wick & Glowing Ember */}
            {activeStep >= 2 && (
              <div className="relative w-1 h-5 -mb-1.5 z-10 flex flex-col items-center">
                {/* Glowing Hot Ember Tip */}
                <div
                  className={`w-1 h-1 rounded-full transition-all ${
                    isLit
                      ? 'bg-[#ff4500] shadow-[0_0_6px_#ff4500,0_0_12px_#ff7700] animate-ember-pulse'
                      : 'bg-[#475569] shadow-none'
                  }`}
                />
                {/* Curved Wick Body */}
                <div className="w-[3.5px] h-4 bg-gradient-to-t from-[#1e293b] via-[#0f172a] to-[#451a03] rounded-sm transform rotate-[4deg]" />
              </div>
            )}

            {/* 3D Wax Pillar Body */}
            <div className="w-[72px] h-[160px] bg-gradient-to-r from-[#e2d098] via-[#fef9c3] via-[25%] via-[#fef08a] via-[50%] via-[#fde047] via-[72%] via-[#ca8a04] via-[90%] to-[#854d0e] rounded-t-[6px] rounded-b-[18px] relative shadow-[inset_0_3px_6px_rgba(255,255,255,0.7),inset_0_-8px_12px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.8)]">
              
              {/* Molten Liquid Wax Pool (Top Dish) */}
              <div className="w-full h-4 bg-gradient-to-r from-[#fef08a] via-[#ca8a04] to-[#713f12] rounded-[50%] absolute -top-2 left-0 border border-white/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Specular Liquid Reflection */}
                {isLit && (
                  <div className="w-3.5 h-1.5 bg-white/80 rounded-full mx-auto mt-0.5 blur-[0.8px] animate-reflection-shimmer" />
                )}
              </div>

              {/* Realistic 3D Wax Drips */}
              <div className="absolute top-0 left-2 w-2.5 h-12 bg-gradient-to-r from-[#fef9c3] to-[#eab308] rounded-b-full shadow-[2px_4px_6px_rgba(0,0,0,0.35)]" />
              <div className="absolute top-0 right-3 w-2 h-18 bg-gradient-to-r from-[#fef9c3] to-[#eab308] rounded-b-full shadow-[2px_4px_6px_rgba(0,0,0,0.35)]" />
              <div className="absolute top-0 left-7 w-1.5 h-8 bg-gradient-to-r from-[#fef9c3] to-[#eab308] rounded-b-full shadow-[1px_3px_4px_rgba(0,0,0,0.25)]" />
            </div>

            {/* Candle Ground Radial Shadow */}
            <div className="w-32 h-4 bg-gradient-to-r from-transparent via-black/90 to-transparent rounded-full blur-[2px] -mt-1.5" />
          </div>

          {/* Click Hint Pill */}
          <div className="z-20 text-center">
            <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
              {activeStep >= 3 ? (isLit ? "💡 Click candle to blow out" : "✨ Click to reignite with spark") : "Wax cylinder assembly in progress"}
            </span>
          </div>

          {/* Watermark */}
          <div className="absolute bottom-3 right-3 z-20 pointer-events-none flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-black/80 border border-[#04AA6D]/50 flex items-center justify-center font-mono font-black text-[10px] text-[#04AA6D] shadow-lg shadow-[#04AA6D]/20 animate-ns-watermark-pulse">
              NS
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: VS Code Multi-Tab Workspace Editor */}
        <div className="bg-[#1e1e1e] border border-[#333333] rounded-3xl overflow-hidden shadow-2xl space-y-0 text-left font-mono min-h-[540px] flex flex-col justify-between w-full">
          
          {/* VS Code Window Top Bar */}
          <div className="bg-[#252526] border-b border-[#333333] flex flex-wrap items-center justify-between px-3 pt-2">
            
            {/* Horizontal File Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {/* Traffic Light Dots */}
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

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadStandaloneHtml}
                className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 transition-colors cursor-pointer py-1.5 px-2"
                title="Download single-file standalone index.html to run on your PC"
              >
                <Download size={13} />
                <span className="hidden sm:inline">Download HTML</span>
              </button>

              <button
                onClick={handleCopyCode}
                className="text-xs text-slate-400 hover:text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 px-2 mb-1"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? "Copied!" : `Copy ${activeTab}`}</span>
              </button>
            </div>
          </div>

          {/* Code View Area */}
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
                  rows={18}
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

      {/* 🎛️ STEP 5 INTERACTIVE LABORATORY CONTROLS */}
      {activeStep === 5 && (
        <div className="bg-[#0c101d] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
                <Sliders size={20} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-white">
                  Interactive Physics & Chemical Combustion Controls
                </h2>
                <p className="text-xs text-slate-400">
                  Tune live environmental variables and chemical combustion spectrums in real-time.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedPreset(FLAME_PRESETS[0]);
                setWindDraft(0);
                setFlameScale(1.0);
                setFlickerSpeed(1.0);
                setRoomDarkness(85);
                setIsLit(true);
              }}
              className="text-xs font-mono font-bold text-slate-400 hover:text-white flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl cursor-pointer transition-colors"
            >
              <RotateCcw size={12} />
              <span>Reset Defaults</span>
            </button>
          </div>

          {/* Combustion Presets Pills */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-400" />
              <span>Chemical Combustion Spectrum Presets:</span>
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {FLAME_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPreset(preset)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-1 ${
                    selectedPreset.id === preset.id
                      ? 'bg-slate-900 border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-[#06080e] border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: preset.outerColor }}
                    />
                    <span className={`text-xs font-bold truncate ${selectedPreset.id === preset.id ? 'text-white' : 'text-slate-300'}`}>
                      {preset.name.split('(')[0]}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 leading-tight">
                    {preset.name.match(/\((.*?)\)/)?.[1] || ''}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            
            {/* Slider 1: Wind Draft */}
            <div className="bg-[#06080e] border border-slate-800/80 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Wind size={14} className="text-sky-400" />
                  <span>Wind Draft Tilt</span>
                </span>
                <span className="text-sky-400 font-mono">{windDraft > 0 ? `+${windDraft}°` : `${windDraft}°`}</span>
              </div>
              <input
                type="range"
                min="-15"
                max="15"
                step="1"
                value={windDraft}
                onChange={(e) => setWindDraft(Number(e.target.value))}
                className="w-full accent-sky-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Left Draft</span>
                <span>Calm (0°)</span>
                <span>Right Draft</span>
              </div>
            </div>

            {/* Slider 2: Flame Height / Scale */}
            <div className="bg-[#06080e] border border-slate-800/80 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Flame size={14} className="text-amber-400" />
                  <span>Flame Size</span>
                </span>
                <span className="text-amber-400 font-mono">{Math.round(flameScale * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.7"
                max="1.4"
                step="0.05"
                value={flameScale}
                onChange={(e) => setFlameScale(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Small (70%)</span>
                <span>Normal (100%)</span>
                <span>High (140%)</span>
              </div>
            </div>

            {/* Slider 3: Turbulence Speed */}
            <div className="bg-[#06080e] border border-slate-800/80 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={14} className="text-emerald-400" />
                  <span>Flicker Speed</span>
                </span>
                <span className="text-emerald-400 font-mono">{flickerSpeed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={flickerSpeed}
                onChange={(e) => setFlickerSpeed(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Slow (0.5x)</span>
                <span>Normal (1.0x)</span>
                <span>Fast (2.0x)</span>
              </div>
            </div>

            {/* Slider 4: Room Ambient Darkness */}
            <div className="bg-[#06080e] border border-slate-800/80 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Eye size={14} className="text-purple-400" />
                  <span>Ambient Halo Glow</span>
                </span>
                <span className="text-purple-400 font-mono">{roomDarkness}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                step="5"
                value={roomDarkness}
                onChange={(e) => setRoomDarkness(Number(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Dim</span>
                <span>Radiant</span>
                <span>Full Glow</span>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 🎓 STEP TECHNICAL BREAKDOWN & CONCEPTS */}
      <div className="bg-[#17181c] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#04AA6D]/20 border border-[#04AA6D]/50 flex items-center justify-center text-[#04AA6D]">
              <Code2 size={22} />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">
                Step {activeStep} Technical Architecture & Physics
              </h2>
              <p className="text-xs text-slate-300">
                Deep-dive into the CSS algorithms and physics used to create this realism.
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex bg-[#04AA6D]/10 border border-[#04AA6D]/30 text-[#04AA6D] text-xs font-mono font-bold px-3 py-1 rounded-full">
            CSS3 Architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              <Code2 size={16} /> Key Technical Details
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentStepData.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 bg-[#0f1117] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-[#04AA6D] flex items-center gap-2">
              <Sparkles size={16} /> Physics Takeaway
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentStepData.takeaway}
            </p>
            <div className="pt-3">
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#04AA6D] hover:text-emerald-300 disabled:opacity-40 transition-colors cursor-pointer"
              >
                <span>{activeStep === 5 ? "All 5 Steps Completed!" : `Proceed to Step ${activeStep + 1} »`}</span>
                {activeStep < 5 && <ChevronRight size={14} />}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* 📚 REQUIRED SKILLS & ROADMAP LINKS */}
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
                Master these foundational web development concepts to build realistic animations from scratch!
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex bg-[#04AA6D]/10 border border-[#04AA6D]/30 text-[#04AA6D] text-xs font-mono font-bold px-3 py-1 rounded-full">
            Prerequisites & Roadmap
          </span>
        </div>

        {/* Core Subject Link Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: HTML5 Structural Elements */}
          <Link
            href="/html/learn-html-web-free-lessons-what-is-the-internet"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-xs">
                HTML
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                1. HTML5 Structural Elements
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Learn nested DOM hierarchy and multi-layered container anatomy.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start HTML Lessons »
            </span>
          </Link>

          {/* Card 2: CSS Gradients & Curves */}
          <Link
            href="/html/html-headings-paragraphs-and-text-formatting"
            className="bg-[#0f1117] border border-slate-800 hover:border-[#04AA6D]/60 p-5 rounded-2xl space-y-3 group transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-xs">
                CSS3
              </div>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] transition-colors group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                2. CSS 3D Gradients & Curves
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Master cylindrical gradient shading and dual-axis teardrop border-radius.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start CSS Lessons »
            </span>
          </Link>

          {/* Card 3: Keyframe Animation Physics */}
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
                3. Keyframe Turbulence Physics
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Learn non-linear `@keyframes`, skew transforms, and light bloom.
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Take Animation Quiz »
            </span>
          </Link>

          {/* Card 4: Windows CMD CLI Terminal */}
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
                Run local dev servers on Windows PC to test your HTML/CSS code live!
              </p>
            </div>
            <span className="inline-block text-[11px] font-bold text-[#04AA6D] underline decoration-[#04AA6D]">
              Start 🪟 Windows CMD Lessons »
            </span>
          </Link>

        </div>

      </div>

      {/* Embedded Global Realistic Animation Keyframes */}
      <style jsx global>{`
        @keyframes realFlameFlicker {
          0%   { transform: scaleY(1) scaleX(1) rotate(0deg) skewX(0deg); opacity: 0.98; }
          15%  { transform: scaleY(1.08) scaleX(0.96) rotate(-1.5deg) skewX(-1.5deg); opacity: 1; }
          30%  { transform: scaleY(0.96) scaleX(1.04) rotate(1deg) skewX(1deg); opacity: 0.94; }
          45%  { transform: scaleY(1.12) scaleX(0.92) rotate(-2deg) skewX(-2deg); opacity: 1; }
          60%  { transform: scaleY(0.98) scaleX(1.02) rotate(1.5deg) skewX(1.5deg); opacity: 0.96; }
          75%  { transform: scaleY(1.05) scaleX(0.95) rotate(-0.5deg) skewX(-0.5deg); opacity: 0.99; }
          90%  { transform: scaleY(0.94) scaleX(1.06) rotate(2deg) skewX(2deg); opacity: 0.93; }
          100% { transform: scaleY(1) scaleX(1) rotate(0deg) skewX(0deg); opacity: 0.98; }
        }

        @keyframes ambientPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50%      { opacity: 1.1; transform: scale(1.06); }
        }

        @keyframes reflectionShimmer {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%      { opacity: 0.95; transform: scale(1.2); }
        }

        @keyframes emberPulse {
          0%, 100% {
            background: #ff4500;
            box-shadow: 0 0 4px #ff4500, 0 0 8px #ff6600;
          }
          50% {
            background: #ff7700;
            box-shadow: 0 0 7px #ff7700, 0 0 14px #ffaa00;
          }
        }

        @keyframes smokeWispRise1 {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.75; }
          50%  { transform: translateY(-40px) translateX(8px) scale(2.2); opacity: 0.4; }
          100% { transform: translateY(-95px) translateX(-14px) scale(3.6); opacity: 0; }
        }

        @keyframes smokeWispRise2 {
          0%   { transform: translateY(0) translateX(0) scale(0.8); opacity: 0.85; }
          50%  { transform: translateY(-45px) translateX(-10px) scale(2.4); opacity: 0.35; }
          100% { transform: translateY(-105px) translateX(18px) scale(4); opacity: 0; }
        }

        @keyframes smokeWispRise3 {
          0%   { transform: translateY(0) translateX(0) scale(0.6); opacity: 0.7; }
          50%  { transform: translateY(-35px) translateX(6px) scale(1.8); opacity: 0.3; }
          100% { transform: translateY(-80px) translateX(-8px) scale(3); opacity: 0; }
        }

        .animate-smoke-wisp-1 {
          animation: smokeWispRise1 2.2s infinite ease-out;
        }

        .animate-smoke-wisp-2 {
          animation: smokeWispRise2 2.6s infinite 0.5s ease-out;
        }

        .animate-smoke-wisp-3 {
          animation: smokeWispRise3 2.0s infinite 1.0s ease-out;
        }

        .animate-ember-pulse {
          animation: emberPulse 1.8s infinite ease-in-out;
        }

        .animate-reflection-shimmer {
          animation: reflectionShimmer 1.4s infinite ease-in-out;
        }

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
