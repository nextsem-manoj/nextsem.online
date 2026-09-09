"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WindowsIcon from '@/components/WindowsIcon';
import { 
  Sparkles, ArrowRight, Code2, Rocket, 
  Terminal, Play, Layers, Zap, CloudRain, 
  CreditCard, Compass, ExternalLink, Filter
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: "All" | "CSS Keyframes" | "Canvas & Physics" | "3D Perspective" | "Audio & Waves";
  tag: string;
  desc: string;
  badge: string;
  ctaText: string;
  ctaHref: string;
  previewGraphic: React.ReactNode;
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "candle-flame",
    title: "1. Realistic CSS Candle Flame",
    category: "CSS Keyframes",
    tag: "Keyframe Physics",
    desc: "Simulate organic fire flickers, heat teardrop gradient meshes, and ember glows using pure CSS keyframe animations.",
    badge: "CSS Flame",
    ctaText: "Launch Candle Lab",
    ctaHref: "/candle-flame-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#070a12] border border-slate-800 rounded-xl flex flex-col items-center justify-center relative overflow-hidden shadow-inner group-hover:border-amber-500/50 transition-colors">
        <div className="absolute w-28 h-28 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="relative flex flex-col items-center justify-center z-10 transform scale-125">
          <div className="w-5 h-10 rounded-[50%_50%_35%_35%/80%_80%_30%_30%] bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-300 shadow-[0_0_15px_#f97316] animate-flicker">
            <div className="w-3 h-6 mx-auto mt-1 rounded-[50%_50%_35%_35%/80%_80%_30%_30%] bg-yellow-200" />
          </div>
          <div className="w-0.5 h-2 bg-slate-600" />
          <div className="w-10 h-12 bg-gradient-to-b from-amber-100 to-amber-300 rounded-t-sm rounded-b-md shadow-md" />
        </div>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-amber-400 font-extrabold bg-amber-950/90 px-2 py-0.5 rounded border border-amber-800/80 shadow">
          CSS FLAME
        </span>
      </div>
    )
  },
  {
    id: "matrix-code",
    title: "2. Digital Matrix Code Rain",
    category: "Canvas & Physics",
    tag: "Terminal Rain",
    desc: "Build the iconic green cascading digital rain stream with HTML5 Canvas 2D context and random character generation.",
    badge: "Matrix Rain",
    ctaText: "Launch Matrix Rain",
    ctaHref: "/matrix-code-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#000000] border border-slate-800 rounded-xl flex items-center justify-around p-4 relative overflow-hidden shadow-inner group-hover:border-[#04AA6D]/50 transition-colors font-mono select-none">
        <div className="flex justify-around w-full h-full text-base font-black text-[#39ff14]/90">
          <div className="flex flex-col space-y-1 opacity-85">
            <span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
          </div>
          <div className="flex flex-col space-y-1 text-[#39ff14]">
            <span>0</span><span>1</span><span>1</span><span>0</span><span>1</span>
          </div>
          <div className="flex flex-col space-y-1 text-[#04AA6D] opacity-85">
            <span>1</span><span>1</span><span>0</span><span>1</span><span>0</span>
          </div>
        </div>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-[#04AA6D] font-extrabold bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800/80 z-10 shadow">
          MATRIX CODE
        </span>
      </div>
    )
  },
  {
    id: "rain-effect",
    title: "3. Realistic HTML5 Canvas Rain",
    category: "Canvas & Physics",
    tag: "Particle Dynamics",
    desc: "Architect a dynamic rainy weather system with variable velocity droplets, ground splash ripples, and dark sky ambiance.",
    badge: "Canvas Rain",
    ctaText: "Launch Rain Lab",
    ctaHref: "/rain-effect-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#070a12] border border-slate-800 rounded-xl flex flex-col items-center justify-center relative overflow-hidden shadow-inner group-hover:border-sky-500/50 transition-colors">
        <div className="absolute inset-0 flex justify-around opacity-60 pointer-events-none">
          <div className="w-0.5 h-10 bg-sky-400/80 rounded-full mt-3" />
          <div className="w-0.5 h-14 bg-sky-300 rounded-full mt-1" />
          <div className="w-0.5 h-8 bg-sky-400/90 rounded-full mt-5" />
          <div className="w-0.5 h-12 bg-sky-300 rounded-full mt-2" />
        </div>
        <CloudRain size={44} className="text-sky-400 z-10" />
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-sky-400 font-extrabold bg-sky-950/90 px-2 py-0.5 rounded border border-sky-800/80 z-10 shadow">
          CANVAS RAIN
        </span>
      </div>
    )
  },
  {
    id: "warp-speed",
    title: "4. Starfield Warp Speed Velocity",
    category: "3D Perspective",
    tag: "3D Particles",
    desc: "Simulate hyperspace warp drive star acceleration using radial distance calculations and canvas particle physics.",
    badge: "Warp Speed",
    ctaText: "Launch Warp Speed",
    ctaHref: "/warp-speed-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#04060c] border border-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden shadow-inner group-hover:border-purple-500/50 transition-colors">
        <div className="absolute w-28 h-28 rounded-full border border-purple-500/20" />
        <Rocket size={44} className="text-purple-400 z-10 transform -rotate-45" />
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-purple-400 font-extrabold bg-purple-950/90 px-2 py-0.5 rounded border border-purple-800/80 z-10 shadow">
          WARP SPEED
        </span>
      </div>
    )
  },
  {
    id: "neon-button",
    title: "5. Cyberpulse Laser Neon Button",
    category: "CSS Keyframes",
    tag: "Glow Physics",
    desc: "Create cyberpunk glowing border pulses, interactive hover state reflections, and high-voltage button aesthetics.",
    badge: "Neon Glow",
    ctaText: "Launch Neon Button",
    ctaHref: "/neon-button-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#080b12] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shadow-inner group-hover:border-cyan-500/50 transition-colors">
        <div className="px-4 py-2.5 rounded-xl bg-[#090d16] border-2 border-cyan-400 text-white font-mono font-black text-xs tracking-wider shadow-[0_0_15px_#06b6d4] flex items-center gap-1.5 transform group-hover:scale-105 transition-transform">
          <Zap size={16} className="text-cyan-400" />
          <span>CYBERPULSE</span>
        </div>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-cyan-400 font-extrabold bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-800/80 z-10 shadow">
          NEON BUTTON
        </span>
      </div>
    )
  },
  {
    id: "glassmorphism-card",
    title: "6. Holographic 3D Glass Card",
    category: "3D Perspective",
    tag: "Perspective 3D",
    desc: "Render modern frosted-glass cards using backdrop-filter blur, CSS 3D perspective tilts, and dynamic mouse tracking.",
    badge: "3D Glass",
    ctaText: "Launch Holo Card",
    ctaHref: "/glassmorphism-card-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#070a14] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shadow-inner group-hover:border-pink-500/50 transition-colors">
        <div className="w-28 h-32 rounded-2xl bg-slate-900/90 border-2 border-pink-400/60 flex flex-col items-center justify-center space-y-1.5 shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform">
          <CreditCard size={32} className="text-pink-400" />
          <span className="text-[10px] font-mono font-black text-pink-300 tracking-wider">HOLOGRAPHIC</span>
        </div>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-pink-400 font-extrabold bg-pink-950/90 px-2 py-0.5 rounded border border-pink-800/80 z-10 shadow">
          3D GLASS
        </span>
      </div>
    )
  },
  {
    id: "audio-spectrum",
    title: "7. Audio Equalizer Waveform Beats",
    category: "Audio & Waves",
    tag: "Web Audio API",
    desc: "Visualize audio frequency sound wave bars with responsive heights, dynamic color shifts, and real-time audio sync.",
    badge: "Audio Beats",
    ctaText: "Launch Audio Beats",
    ctaHref: "/audio-spectrum-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#050912] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shadow-inner group-hover:border-teal-500/50 transition-colors">
        <div className="flex items-end justify-center gap-1.5 h-20 z-10">
          <div className="w-2.5 bg-teal-400 rounded-t h-10" />
          <div className="w-2.5 bg-emerald-400 rounded-t h-16" />
          <div className="w-2.5 bg-amber-400 rounded-t h-8" />
          <div className="w-2.5 bg-teal-400 rounded-t h-18" />
          <div className="w-2.5 bg-emerald-400 rounded-t h-12" />
        </div>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-teal-400 font-extrabold bg-teal-950/90 px-2 py-0.5 rounded border border-teal-800/80 z-10 shadow">
          AUDIO BEATS
        </span>
      </div>
    )
  },
  {
    id: "solar-system",
    title: "8. Solar System 3D Planet Orbit",
    category: "3D Perspective",
    tag: "Rotational Orbit",
    desc: "Calculate elliptical planet orbits with central sun glowing gradients, satellite paths, and CSS transform-origin math.",
    badge: "3D Orbit",
    ctaText: "Launch Orbit Lab",
    ctaHref: "/solar-system-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#04060c] border border-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden shadow-inner group-hover:border-amber-500/50 transition-colors">
        <div className="w-8 h-8 rounded-full bg-amber-400 shadow-[0_0_20px_#f59e0b] z-10" />
        <div className="absolute w-28 h-28 rounded-full border border-sky-400/30">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] absolute -top-1 left-12" />
        </div>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-amber-300 font-extrabold bg-amber-950/90 px-2 py-0.5 rounded border border-amber-800/80 z-10 shadow">
          3D ORBIT
        </span>
      </div>
    )
  },
  {
    id: "cube-3d",
    title: "9. 3D Cube Rotation Engine",
    category: "3D Perspective",
    tag: "Matrix 3D",
    desc: "Master CSS 3D space: translateZ, rotateX, rotateY, and backface-visibility to build a rotating interactive cube.",
    badge: "3D Cube",
    ctaText: "Launch 3D Cube Lab",
    ctaHref: "/3d-cube-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#080b12] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shadow-inner group-hover:border-indigo-500/50 transition-colors">
        <div className="w-20 h-20 rounded-2xl bg-slate-900 border-2 border-indigo-400/60 flex flex-col items-center justify-center space-y-1 shadow-xl transform rotate-6 group-hover:rotate-0 transition-transform">
          <div className="w-6 h-6 border-2 border-indigo-400/80 rounded rotate-45" />
          <span className="text-[9px] font-mono font-black text-indigo-300 tracking-wider">3D CUBE</span>
        </div>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-indigo-400 font-extrabold bg-indigo-950/90 px-2 py-0.5 rounded border border-indigo-800/80 z-10 shadow">
          3D CUBE
        </span>
      </div>
    )
  },
  {
    id: "animated-waves",
    title: "10. Animated Ocean Waves & Bobbing",
    category: "Audio & Waves",
    tag: "SVG Fluid",
    desc: "Design soothing layered SVG wave paths with horizontal translation speeds and floating object buoyant physics.",
    badge: "Fluid Waves",
    ctaText: "Launch Ocean Lab",
    ctaHref: "/animated-waves-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#030812] border border-slate-800 rounded-xl flex flex-col items-center justify-end relative overflow-hidden shadow-inner group-hover:border-teal-500/50 transition-colors">
        <div className="w-full h-12 bg-[#04AA6D]/80 rounded-b-xl absolute bottom-0 left-0 right-0 flex items-center justify-center text-xs font-mono text-white font-black tracking-wider">
          OCEAN WAVES
        </div>
        <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-teal-400 font-extrabold bg-teal-950/90 px-2 py-0.5 rounded border border-teal-800/80 z-20 shadow">
          FLUID WAVES
        </span>
      </div>
    )
  },
  {
    id: "glitch-text",
    title: "11. Cyberpunk Glitch Text Effect",
    category: "CSS Keyframes",
    tag: "RGB Split",
    desc: "Create futuristic RGB split distortions and clip-path slicing animations for cybernetic headlines.",
    badge: "Glitch Text",
    ctaText: "Launch Glitch Lab",
    ctaHref: "/glitch-text-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#0a0512] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shadow-inner group-hover:border-fuchsia-500/50 transition-colors">
        <div className="text-xl font-mono font-black text-fuchsia-400 tracking-widest shadow-[0_0_15px_#d946ef] animate-pulse">
          GLITCH_ERR//
        </div>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-fuchsia-400 font-extrabold bg-fuchsia-950/90 px-2 py-0.5 rounded border border-fuchsia-800/80 z-10 shadow">
          GLITCH FX
        </span>
      </div>
    )
  },
  {
    id: "dna-helix",
    title: "12. 3D DNA Double Helix Animation",
    category: "3D Perspective",
    tag: "Biological 3D",
    desc: "Render biological double-stranded DNA helix nodes rotating along a 3D cylindrical axis with connected base pairs.",
    badge: "DNA Helix",
    ctaText: "Launch Helix Lab",
    ctaHref: "/dna-helix-animation",
    previewGraphic: (
      <div className="w-full h-48 bg-[#070b14] border border-slate-800 rounded-xl flex items-center justify-center p-4 relative overflow-hidden shadow-inner group-hover:border-emerald-500/50 transition-colors">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#04AA6D] animate-ping" />
          <div className="w-12 h-0.5 bg-slate-600" />
          <div className="w-3 h-3 rounded-full bg-cyan-400" />
        </div>
        <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-[#04AA6D] font-extrabold bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800/80 z-10 shadow">
          DNA HELIX
        </span>
      </div>
    )
  }
];

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "CSS Keyframes", "Canvas & Physics", "3D Perspective", "Audio & Waves"];

  const filteredProjects = selectedCategory === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D]/30">
      <Header />

      {/* ── TOP BREADCRUMB NAVIGATION ── */}
      <nav aria-label="Breadcrumb" className="bg-[#131417] border-b border-slate-800/80 px-4 sm:px-8 py-2.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2 font-medium">
          <Link href="/" className="hover:text-[#04AA6D] transition-colors">Home</Link>
          <span className="text-slate-600">›</span>
          <span className="text-white font-bold">Developer Mini-Projects</span>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 space-y-10">
        
        {/* ── INTRO HEADER BANNER ── */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04AA6D]/10 border border-[#04AA6D]/20 text-[#04AA6D] text-xs font-black uppercase tracking-wider">
            <Sparkles size={14} className="text-[#04AA6D]" />
            <span>Interactive Code Labs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            15+ Practical <span className="text-[#04AA6D]">Developer Mini-Projects</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Build hands-on, high-impact web animations, canvas physics, and 3D UI components on <span className="inline-flex items-center gap-1 font-semibold text-white"><WindowsIcon className="w-4 h-4 text-white inline-block -mt-0.5" /> 🪟 Windows 11</span>. Each project includes complete source code and live interactive sandbox testing.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/playground"
              className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-[#04AA6D]/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Code2 size={16} />
              <span>Launch VS Code Playground</span>
            </Link>
            <Link
              href="/tracks"
              className="px-5 py-2.5 bg-[#1e2029] hover:bg-[#252834] text-white text-xs sm:text-sm font-bold rounded-xl border border-slate-700 hover:border-[#04AA6D] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Compass size={16} className="text-[#04AA6D]" />
              <span>View Developer Tracks</span>
            </Link>
          </div>
        </div>

        {/* ── CATEGORY FILTER PILLS ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-bold mr-2 hidden sm:flex">
            <Filter size={13} className="text-[#04AA6D]" />
            <span>Filter by Stack:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#04AA6D] text-white shadow-md shadow-[#04AA6D]/25"
                  : "bg-[#1e2029] text-slate-300 hover:text-white hover:bg-[#282b37] border border-slate-700/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── PROJECTS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1e2029] rounded-2xl border border-slate-800 hover:border-[#04AA6D]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-5 space-y-3">
                {/* Visual Graphic Canvas Preview */}
                {project.previewGraphic}

                {/* Project Info */}
                <div>
                  <div className="flex items-center justify-between mt-2 mb-1">
                    <span className="text-[11px] font-bold text-[#04AA6D] uppercase tracking-wider">
                      {project.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-[#04AA6D] transition-colors leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href="/playground"
                  className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  title="Open code in online IDE sandbox"
                >
                  <Code2 size={13} className="text-[#04AA6D]" />
                  <span>Sandbox IDE</span>
                </Link>

                <Link
                  href={project.ctaHref}
                  className="px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-md group-hover:shadow-emerald-500/20"
                >
                  <span>{project.ctaText}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
