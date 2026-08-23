"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, CloudRain, Rocket, CreditCard, Music } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  ctaText: string;
  ctaHref: string;
  previewGraphic: React.ReactNode;
}

export default function StudentProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const projects: ProjectItem[] = [
    {
      id: "candle-flame",
      title: "1. Realistic CSS Candle Flame",
      category: "CSS Keyframes",
      badgeBg: "bg-amber-500/10",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
      ctaText: "Launch Candle Lab 🕯️",
      ctaHref: "/candle-flame-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#070a12] border border-slate-800 rounded-xl flex flex-col items-center justify-center relative overflow-hidden shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors">
          <div className="absolute w-44 h-44 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative flex flex-col items-center justify-center z-10 transform scale-175 sm:scale-200">
            <div className="w-7 h-14 rounded-[50%_50%_35%_35%/80%_80%_30%_30%] bg-orange-500 shadow-[0_0_25px_#f97316] animate-flicker">
              <div className="w-4 h-8 mx-auto mt-1 rounded-[50%_50%_35%_35%/80%_80%_30%_30%] bg-yellow-300">
                <div className="w-2 h-4 mx-auto mt-0.5 rounded-[50%_50%_35%_35%/80%_80%_30%_30%] bg-white" />
              </div>
            </div>
            <div className="w-0.5 h-3 bg-slate-700" />
            <div className="w-14 h-16 bg-gradient-to-b from-amber-100 to-amber-300 rounded-t-sm rounded-b-md border-t border-amber-50/50 shadow-lg" />
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-amber-400 font-extrabold bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/80 shadow-md">
            CSS FLAME
          </span>
        </div>
      )
    },
    {
      id: "matrix-code",
      title: "2. Digital Matrix Code Rain",
      category: "Terminal Rain",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-[#04AA6D]",
      badgeBorder: "border-emerald-500/30",
      ctaText: "Launch Matrix Rain ⚡",
      ctaHref: "/matrix-code-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#000000] border border-slate-800 rounded-xl flex items-center justify-around p-4 relative overflow-hidden shrink-0 shadow-inner group-hover:border-[#04AA6D]/50 transition-colors font-mono select-none">
          <div className="flex justify-around w-full h-full text-xl sm:text-2xl font-black text-[#39ff14]">
            <div className="flex flex-col space-y-2 animate-bounce" style={{ animationDuration: '2.5s' }}>
              <span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="flex flex-col space-y-2 text-[#39ff14] drop-shadow-[0_0_15px_#39ff14] animate-bounce" style={{ animationDuration: '3.8s' }}>
              <span>0</span><span>1</span><span>1</span><span>0</span><span>1</span>
            </div>
            <div className="flex flex-col space-y-2 text-[#04AA6D] animate-bounce" style={{ animationDuration: '2s' }}>
              <span>1</span><span>1</span><span>0</span><span>1</span><span>0</span>
            </div>
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-[#04AA6D] font-extrabold bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/80 z-10 shadow-md">
            MATRIX CODE
          </span>
        </div>
      )
    },
    {
      id: "rain-effect",
      title: "3. Realistic HTML5 Canvas Rain",
      category: "Canvas Physics",
      badgeBg: "bg-sky-500/10",
      badgeText: "text-sky-400",
      badgeBorder: "border-sky-500/30",
      ctaText: "Launch Rain Lab 🌧️",
      ctaHref: "/rain-effect-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#070a12] border border-slate-800 rounded-xl flex flex-col items-center justify-center relative overflow-hidden shrink-0 shadow-inner group-hover:border-sky-500/50 transition-colors">
          <div className="absolute inset-0 flex justify-around opacity-75">
            <div className="w-0.5 h-16 bg-sky-400/80 rounded-full animate-bounce" style={{ animationDuration: '0.8s' }} />
            <div className="w-0.5 h-20 bg-sky-300 rounded-full animate-bounce" style={{ animationDuration: '1.2s' }} />
            <div className="w-0.5 h-14 bg-sky-400/90 rounded-full animate-bounce" style={{ animationDuration: '0.6s' }} />
            <div className="w-0.5 h-18 bg-sky-300 rounded-full animate-bounce" style={{ animationDuration: '1s' }} />
          </div>
          <CloudRain size={56} className="text-sky-400 animate-pulse z-10" />
          <span className="absolute bottom-3 right-3 text-xs font-mono text-sky-400 font-extrabold bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-800/80 z-10 shadow-md">
            CANVAS RAIN
          </span>
        </div>
      )
    },
    {
      id: "warp-speed",
      title: "4. Starfield Warp Speed Velocity",
      category: "3D Particles",
      badgeBg: "bg-purple-500/10",
      badgeText: "text-purple-400",
      badgeBorder: "border-purple-500/30",
      ctaText: "Launch Warp Speed 🚀",
      ctaHref: "/warp-speed-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#04060c] border border-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden shrink-0 shadow-inner group-hover:border-purple-500/50 transition-colors">
          <div className="absolute w-48 h-48 rounded-full border border-purple-500/30 animate-ping" />
          <Rocket size={60} className="text-purple-400 z-10 animate-bounce" />
          <span className="absolute bottom-3 right-3 text-xs font-mono text-purple-400 font-extrabold bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-800/80 z-10 shadow-md">
            WARP SPEED
          </span>
        </div>
      )
    },
    {
      id: "neon-button",
      title: "5. Cyberpulse Laser Neon Button",
      category: "Glow Physics",
      badgeBg: "bg-cyan-500/10",
      badgeText: "text-cyan-400",
      badgeBorder: "border-cyan-500/30",
      ctaText: "Launch Neon Button ⚡",
      ctaHref: "/neon-button-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#080b12] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shrink-0 shadow-inner group-hover:border-cyan-500/50 transition-colors">
          <div className="px-6 py-3.5 rounded-xl bg-[#090d16] border-2 border-cyan-400 text-white font-mono font-black text-sm tracking-wider shadow-[0_0_25px_#06b6d4] flex items-center gap-2 transform group-hover:scale-110 transition-transform">
            <Zap size={20} className="text-cyan-400 animate-pulse" />
            <span>CYBERPULSE</span>
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-cyan-400 font-extrabold bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/80 z-10 shadow-md">
            NEON BUTTON
          </span>
        </div>
      )
    },
    {
      id: "glassmorphism-card",
      title: "6. Holographic 3D Glass Card",
      category: "Perspective 3D",
      badgeBg: "bg-pink-500/10",
      badgeText: "text-pink-400",
      badgeBorder: "border-pink-500/30",
      ctaText: "Launch Holo Card 💳",
      ctaHref: "/glassmorphism-card-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#070a14] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shrink-0 shadow-inner group-hover:border-pink-500/50 transition-colors">
          <div className="w-36 h-44 rounded-2xl bg-white/10 border-2 border-pink-400/60 backdrop-blur-md flex flex-col items-center justify-center space-y-2 shadow-2xl transform rotate-6 group-hover:rotate-0 transition-transform">
            <CreditCard size={44} className="text-pink-400" />
            <span className="text-xs font-mono font-black text-pink-300 tracking-wider">HOLOGRAPHIC</span>
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-pink-400 font-extrabold bg-pink-950/80 px-2.5 py-1 rounded-md border border-pink-800/80 z-10 shadow-md">
            3D GLASS
          </span>
        </div>
      )
    },
    {
      id: "audio-spectrum",
      title: "7. Audio Equalizer Waveform Beats",
      category: "Sound Equalizer",
      badgeBg: "bg-teal-500/10",
      badgeText: "text-teal-400",
      badgeBorder: "border-teal-500/30",
      ctaText: "Launch Audio Beats 🎵",
      ctaHref: "/audio-spectrum-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#050912] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shrink-0 shadow-inner group-hover:border-teal-500/50 transition-colors">
          <div className="flex items-end justify-center gap-1.5 h-28 z-10">
            <div className="w-3.5 bg-teal-400 rounded-t h-16 animate-bounce" style={{ animationDuration: '0.9s' }} />
            <div className="w-3.5 bg-emerald-400 rounded-t h-24 animate-bounce" style={{ animationDuration: '1.4s' }} />
            <div className="w-3.5 bg-amber-400 rounded-t h-12 animate-bounce" style={{ animationDuration: '0.7s' }} />
            <div className="w-3.5 bg-teal-400 rounded-t h-28 animate-bounce" style={{ animationDuration: '1.1s' }} />
            <div className="w-3.5 bg-emerald-400 rounded-t h-18 animate-bounce" style={{ animationDuration: '0.8s' }} />
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-teal-400 font-extrabold bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800/80 z-10 shadow-md">
            AUDIO BEATS
          </span>
        </div>
      )
    },
    {
      id: "solar-system",
      title: "8. Solar System 3D Planet Orbit",
      category: "Rotational Orbit",
      badgeBg: "bg-amber-500/10",
      badgeText: "text-amber-300",
      badgeBorder: "border-amber-500/30",
      ctaText: "Launch Orbit Lab 🪐",
      ctaHref: "/solar-system-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#04060c] border border-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors">
          <div className="w-14 h-14 rounded-full bg-amber-400 shadow-[0_0_35px_#f59e0b] z-10 animate-pulse flex items-center justify-center text-xl">
            ☀️
          </div>
          <div className="absolute w-40 h-40 rounded-full border-2 border-sky-400/40 animate-spin" style={{ animationDuration: '6s' }}>
            <div className="w-6 h-6 rounded-full bg-sky-400 shadow-[0_0_15px_#38bdf8] absolute -top-3 left-16 flex items-center justify-center text-xs">
              🌍
            </div>
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-amber-300 font-extrabold bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/80 z-10 shadow-md">
            3D ORBIT
          </span>
        </div>
      )
    },
    {
      id: "cube-3d",
      title: "9. 3D Cube Rotation Engine",
      category: "Perspective 3D",
      badgeBg: "bg-indigo-500/10",
      badgeText: "text-indigo-400",
      badgeBorder: "border-indigo-500/30",
      ctaText: "Launch 3D Cube Lab 🧊",
      ctaHref: "/3d-cube-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#080b12] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shrink-0 shadow-inner group-hover:border-indigo-500/50 transition-colors">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 border-2 border-indigo-400/60 flex flex-col items-center justify-center space-y-2 shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform">
            <span className="text-4xl">🧊</span>
            <span className="text-xs font-mono font-black text-indigo-300 tracking-wider">3D CUBE</span>
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-indigo-400 font-extrabold bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-800/80 z-10 shadow-md">
            3D CUBE
          </span>
        </div>
      )
    },
    {
      id: "animated-waves",
      title: "10. Animated Ocean Waves & Bobbing",
      category: "SVG Waves",
      badgeBg: "bg-teal-500/10",
      badgeText: "text-teal-400",
      badgeBorder: "border-teal-500/30",
      ctaText: "Launch Ocean Lab 🌊",
      ctaHref: "/animated-waves-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#030812] border border-slate-800 rounded-xl flex flex-col items-center justify-end relative overflow-hidden shrink-0 shadow-inner group-hover:border-teal-500/50 transition-colors">
          <div className="text-5xl mb-10 animate-bounce z-10">⛵</div>
          <div className="w-full h-16 bg-[#04AA6D]/80 rounded-b-xl absolute bottom-0 left-0 right-0 flex items-center justify-center text-xs font-mono text-white font-black tracking-wider">
            OCEAN WAVES
          </div>
          <span className="absolute top-3 right-3 text-xs font-mono text-teal-400 font-extrabold bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800/80 z-20 shadow-md">
            FLUID WAVES
          </span>
        </div>
      )
    },
    {
      id: "glitch-text",
      title: "11. Cyberpunk 2077 Glitch Text",
      category: "Polygon Slicing",
      badgeBg: "bg-cyan-500/10",
      badgeText: "text-cyan-400",
      badgeBorder: "border-cyan-500/30",
      ctaText: "Launch Glitch Lab ⚡",
      ctaHref: "/glitch-text-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#050608] border border-slate-800 rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden shrink-0 shadow-inner group-hover:border-cyan-500/50 transition-colors font-mono select-none">
          <div className="relative text-2xl font-black text-white tracking-widest">
            <span>CYBERPUNK</span>
            <span className="absolute inset-0 text-cyan-400 opacity-80" style={{ transform: 'translate(-3px, -1px)', clipPath: 'polygon(0 20%, 100% 20%, 100% 45%, 0 45%)' }}>CYBERPUNK</span>
            <span className="absolute inset-0 text-rose-500 opacity-80" style={{ transform: 'translate(3px, 1px)', clipPath: 'polygon(0 60%, 100% 60%, 100% 85%, 0 85%)' }}>CYBERPUNK</span>
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-cyan-400 font-extrabold bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/80 z-10 shadow-md">
            GLITCH FX
          </span>
        </div>
      )
    },
    {
      id: "holographic-card",
      title: "12. 3D Holographic Foil Card Tilt",
      category: "Perspective 3D",
      badgeBg: "bg-amber-500/10",
      badgeText: "text-amber-300",
      badgeBorder: "border-amber-500/30",
      ctaText: "Launch Holo Card 💎",
      ctaHref: "/holographic-card-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#05070c] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shrink-0 shadow-inner group-hover:border-amber-400/50 transition-colors">
          <div className="w-32 h-44 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-black border-2 border-amber-400/80 shadow-2xl flex flex-col items-center justify-center space-y-1 transform rotate-6 group-hover:rotate-0 transition-transform">
            <span className="text-3xl">👑</span>
            <span className="text-[10px] font-mono font-black text-amber-300 tracking-wider">VIP ELITE</span>
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-amber-300 font-extrabold bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/80 z-10 shadow-md">
            3D HOLO FOIL
          </span>
        </div>
      )
    },
    {
      id: "dna-helix",
      title: "13. 3D Rotating DNA Double Helix",
      category: "Harmonic Waves",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-500/30",
      ctaText: "Launch Bio Lab 🧬",
      ctaHref: "/dna-helix-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#04060a] border border-slate-800 rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden shrink-0 shadow-inner group-hover:border-emerald-500/50 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center justify-between w-32">
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
              <div className="flex-1 h-0.5 bg-emerald-500/30 mx-1" />
              <div className="w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_10px_#14b8a6]" />
            </div>
            <div className="flex items-center justify-between w-32">
              <div className="w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_10px_#14b8a6]" />
              <div className="flex-1 h-0.5 bg-teal-500/30 mx-1" />
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
            </div>
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-emerald-400 font-extrabold bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/80 z-10 shadow-md">
            DNA HELIX
          </span>
        </div>
      )
    },
    {
      id: "liquid-wave",
      title: "14. Liquid Glass Battery & Wave",
      category: "Rotational Fluid",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-500/30",
      ctaText: "Launch Battery Lab 🔋",
      ctaHref: "/liquid-wave-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#04060a] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shrink-0 shadow-inner group-hover:border-emerald-500/50 transition-colors">
          <div className="w-24 h-40 bg-[#090e18] border-2 border-emerald-400/80 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute w-44 h-44 bg-emerald-500 rounded-[40%] animate-spin opacity-80 -bottom-10" style={{ animationDuration: '4s' }} />
            <span className="relative z-10 text-xs font-mono font-black text-white">85%</span>
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-emerald-400 font-extrabold bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/80 z-10 shadow-md">
            LIQUID WAVE
          </span>
        </div>
      )
    },
    {
      id: "black-hole",
      title: "15. Black Hole Gravitational Lensing",
      category: "Conic Lensing",
      badgeBg: "bg-amber-500/10",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
      ctaText: "Launch Lensing Lab 🌌",
      ctaHref: "/black-hole-animation",
      previewGraphic: (
        <div className="w-full h-56 sm:h-64 bg-[#020306] border border-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden shrink-0 shadow-inner group-hover:border-amber-500/50 transition-colors">
          <div className="absolute w-36 h-36 rounded-full border-2 border-amber-500/60 animate-pulse" />
          <div className="w-16 h-16 rounded-full bg-black shadow-[0_0_25px_#ff7800,0_0_50px_#ffaa00] z-10 flex items-center justify-center text-xs">
            🕳️
          </div>
          <span className="absolute bottom-3 right-3 text-xs font-mono text-amber-400 font-extrabold bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/80 z-10 shadow-md">
            BLACK HOLE
          </span>
        </div>
      )
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardStep = window.innerWidth < 640 ? 316 : 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -cardStep : cardStep,
      behavior: 'smooth'
    });
  };

  const handleScrollTrack = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const cardStep = window.innerWidth < 640 ? 316 : 400;
    
    if (maxScroll > 0 && scrollLeft >= maxScroll - 15) {
      setActiveIdx(projects.length - 1);
    } else {
      const index = Math.round(scrollLeft / cardStep);
      setActiveIdx(Math.min(projects.length - 1, Math.max(0, index)));
    }
  };

  return (
    <section className="space-y-4 text-left w-full max-w-full relative">
      
      {/* Clean Section Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <h2 className="text-lg sm:text-2xl font-extrabold text-white">
            Practical Developer Mini-Projects ({projects.length})
          </h2>
        </div>

        <Link
          href="/course/projects"
          className="text-xs font-bold text-[#04AA6D] hover:underline flex items-center gap-1 shrink-0"
        >
          <span>View All</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* CAROUSEL WRAPPER WITH TRANSPARENT SIDE DESKTOP NAV BUTTONS */}
      <div className="relative group/carousel">
        
        {/* Left Desktop Translucent Nav Button */}
        <button
          onClick={() => handleScroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 w-11 h-11 rounded-full bg-[#090d16]/85 border border-slate-700/80 text-slate-200 hover:text-white hover:bg-[#04AA6D] hover:border-[#04AA6D] backdrop-blur-md shadow-2xl items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Desktop Translucent Nav Button */}
        <button
          onClick={() => handleScroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 w-11 h-11 rounded-full bg-[#090d16]/85 border border-slate-700/80 text-slate-200 hover:text-white hover:bg-[#04AA6D] hover:border-[#04AA6D] backdrop-blur-md shadow-2xl items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll Right"
        >
          <ChevronRight size={22} />
        </button>

        {/* PURE NATURAL HORIZONTAL SWIPE CONTAINER */}
        <div
          ref={scrollRef}
          onScroll={handleScrollTrack}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-1 scroll-smooth touch-pan-x max-w-full"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="snap-start shrink-0 w-[88vw] max-w-[340px] sm:w-[380px] bg-slate-900/90 border border-slate-800 hover:border-[#04AA6D]/60 rounded-2xl p-3.5 sm:p-4 transition-all flex flex-col justify-between space-y-4 group shadow-2xl hover:-translate-y-1"
            >
              {/* LARGE HIGH-IMPACT PREVIEW GRAPHIC BANNER */}
              {project.previewGraphic}

              {/* ONLY HEADING TITLE & BADGE - ZERO EXTRA TEXT */}
              <div className="flex items-center justify-between gap-2 px-1">
                <h3 className="text-base font-black text-white group-hover:text-[#04AA6D] transition-colors truncate">
                  {project.title}
                </h3>
                <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border shrink-0 ${project.badgeBg} ${project.badgeText} ${project.badgeBorder}`}>
                  {project.category}
                </span>
              </div>

              {/* ACTION BUTTON */}
              <Link
                href={project.ctaHref}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-[#04AA6D] text-white hover:text-black text-xs font-extrabold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-md touch-manipulation"
              >
                <span>{project.ctaText}</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>

      </div>

      {/* Subtle Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {projects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => {
              if (scrollRef.current) {
                const cardStep = window.innerWidth < 640 ? 316 : 400;
                scrollRef.current.scrollTo({ left: idx * cardStep, behavior: 'smooth' });
              }
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer touch-manipulation ${
              activeIdx === idx
                ? "w-8 bg-[#04AA6D]"
                : "w-2 bg-slate-800 hover:bg-slate-700"
            }`}
          />
        ))}
      </div>

      {/* Global CSS Keyframes Style for Flame Preview */}
      <style jsx global>{`
        @keyframes flameFlicker {
          0%, 100% { transform: scaleY(1) skewX(0deg); }
          25% { transform: scaleY(1.08) skewX(-3deg); }
          50% { transform: scaleY(0.93) skewX(4deg); }
          75% { transform: scaleY(1.05) skewX(-2deg); }
        }
        .animate-flicker {
          animation: flameFlicker 1.2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
