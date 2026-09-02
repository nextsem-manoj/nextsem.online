"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Terminal,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Flame,
  Globe,
  Rocket,
  ShieldCheck,
  Zap,
  Play,
  Monitor,
  FolderArchive,
  Compass,
  Star
} from 'lucide-react';

const LEARNING_TRACKS = [
  {
    id: 'cli',
    title: 'Windows 11 Command Prompt (CLI)',
    badge: 'Module 01 • Foundation',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: <Terminal size={22} className="text-emerald-600" />,
    description: 'Master directory navigation, drive switching, file creation, and command-line execution step-by-step.',
    lessonsCount: '100+ Lessons',
    href: '/cli',
    accentColor: 'group-hover:border-emerald-500'
  },
  {
    id: 'html',
    title: 'HTML5 & Web Architecture',
    badge: 'Module 02 • Markup',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
    icon: <Code2 size={22} className="text-orange-600" />,
    description: 'Build semantic web structures, HTML5 tags, forms, tables, accessibility, and clean markup.',
    lessonsCount: '98+ Lessons',
    href: '/html',
    accentColor: 'group-hover:border-orange-500'
  },
  {
    id: 'css',
    title: 'CSS3 Styling & UI Layouts',
    badge: 'Module 03 • Styling',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    icon: <Layers size={22} className="text-sky-600" />,
    description: 'Master Flexbox, CSS Grid layouts, keyframe animations, responsive design, and modern dark mode styling.',
    lessonsCount: '12+ Lessons',
    href: '/css',
    accentColor: 'group-hover:border-sky-500'
  },
  {
    id: 'js',
    title: 'JavaScript ES6+ & DOM Logic',
    badge: 'Module 04 • Logic',
    badgeColor: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    icon: <Sparkles size={22} className="text-yellow-600" />,
    description: 'Learn modern ES6+ syntax, arrow functions, array methods, DOM manipulation, async/await, and fetch APIs.',
    lessonsCount: '12+ Lessons',
    href: '/js',
    accentColor: 'group-hover:border-yellow-500'
  },
  {
    id: 'react',
    title: 'React.js Component Architecture',
    badge: 'Module 05 • Frontend SPA',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    icon: <Cpu size={22} className="text-cyan-600" />,
    description: 'Build single-page apps with JSX, useState, useEffect, custom hooks, and Context API global state.',
    lessonsCount: '12+ Lessons',
    href: '/react',
    accentColor: 'group-hover:border-cyan-500'
  },
  {
    id: 'nodejs',
    title: 'Node.js & Backend Architecture',
    badge: 'Module 06 • Backend',
    badgeColor: 'bg-green-50 text-green-700 border-green-200',
    icon: <Globe size={22} className="text-green-600" />,
    description: 'Build server-side backends with Node.js event loop, file system, HTTP server APIs, and middleware.',
    lessonsCount: '12+ Lessons',
    href: '/nodejs',
    accentColor: 'group-hover:border-green-500'
  },
  {
    id: 'git',
    title: 'Git & GitHub Version Control',
    badge: 'Module 07 • DevOps',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
    icon: <Terminal size={22} className="text-red-600" />,
    description: 'Master Git installation, commit histories, branching, merge conflict resolution, and GitHub repositories.',
    lessonsCount: '15+ Lessons',
    href: '/git',
    accentColor: 'group-hover:border-red-500'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Developer Roadmap',
    badge: 'Module 08 • Career Path',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: <Rocket size={22} className="text-amber-600" />,
    description: 'Complete career pathway from beginner fundamentals to production deployments and full-stack projects.',
    lessonsCount: 'Complete Career Path',
    href: '/full-stack-web-development-roadmap',
    accentColor: 'group-hover:border-amber-500'
  }
];

const VISUAL_LABS = [
  {
    id: 'c-visual-logic',
    title: 'C Language Visual Logic & Memory Simulation',
    category: 'Low-Level Systems',
    description: 'Master C programming from scratch through visual execution flow, memory address pointers (& and *), contiguous arrays, and loops.',
    href: '/c',
    tag: 'C Programming',
    tagColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50',
    icon: <Cpu size={20} className="text-cyan-400" />
  },
  {
    id: 'logic',
    title: 'Visual Logic & Algorithm Maze Simulator',
    category: 'Brilliant Coding Logic',
    description: 'Learn algorithms, sequencing, pathfinding and loops with interactive visual step pills — zero coding experience required.',
    href: '/visual-logic',
    tag: 'Beginner Algorithm',
    tagColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50',
    icon: <Compass size={20} className="text-emerald-400" />
  },
  {
    id: 'candle',
    title: 'Photorealistic Candle Flame Simulation',
    category: 'Combustion Physics',
    description: '3D wax translucency, 4-zone flame optics (blue oxygen base), and interactive wind draft physics.',
    href: '/candle-flame-animation',
    tag: 'Interactive Physics',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: <Flame size={20} className="text-amber-500" />
  },
  {
    id: 'blackhole',
    title: 'Relativistic Black Hole Simulation',
    category: 'Astrophysics',
    description: 'Event horizon singularity, superheated photon sphere, and gravitational lensing halo.',
    href: '/black-hole-animation',
    tag: 'Cosmic Lab',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    icon: <Sparkles size={20} className="text-indigo-500" />
  },
  {
    id: 'cube',
    title: '3D Interactive Rotating Glass Cube',
    category: '3D Geometry',
    description: 'Pure CSS 3D matrix transform space with interactive rotational axes and glass reflections.',
    href: '/3d-cube-animation',
    tag: '3D Matrix',
    tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
    icon: <Layers size={20} className="text-sky-500" />
  },
  {
    id: 'warpspeed',
    title: 'Starfield 3D Warp Speed Simulator',
    category: 'Particle Physics',
    description: 'Depth acceleration, star trail stretching, and hyper-drive relativistic velocity.',
    href: '/warp-speed-animation',
    tag: 'Particle Engine',
    tagColor: 'bg-violet-50 text-violet-700 border-violet-200',
    icon: <Rocket size={20} className="text-violet-500" />
  },
  {
    id: 'solar',
    title: 'Solar System 3D Orbit Mechanics',
    category: 'Orbital Dynamics',
    description: 'Planetary revolution keyframes, relative orbital velocities, and glowing solar corona.',
    href: '/solar-system-animation',
    tag: 'Orbital Motion',
    tagColor: 'bg-orange-50 text-orange-700 border-orange-200',
    icon: <Globe size={20} className="text-orange-500" />
  },
  {
    id: 'matrix',
    title: 'Matrix Digital Rain Code Stream',
    category: 'Canvas FX',
    description: 'Falling Japanese Katakana glyph streams with glowing leading phosphors and randomized decays.',
    href: '/matrix-code-animation',
    tag: 'Canvas Render',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: <Code2 size={20} className="text-emerald-500" />
  }
];

export default function CurriculumClient() {
  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-emerald-950 selection:text-emerald-300">
      
      {/* ── Top Navigation Bar ── */}
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-[#17181c] border-b border-slate-800 py-16 sm:py-24 px-4 sm:px-6">
        {/* Subtle Background Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 shadow-sm text-xs font-bold text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% Free Full-Stack Developer Curriculum</span>
            <span className="text-emerald-500">•</span>
            <span className="text-emerald-400 font-mono">Zero to Production</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Master Full Stack Web Development <br className="hidden sm:inline" />
            <span className="text-[#04AA6D] underline decoration-[#04AA6D]/40 decoration-wavy">
              From Scratch
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Learn step-by-step with interactive Windows 11 CLI command drills, pure HTML5/CSS3 animations, batch automation scripts, and full-stack project blueprints.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/curriculum"
              className="px-6 py-3.5 rounded-2xl bg-[#04AA6D] hover:bg-[#039861] text-white text-sm font-extrabold shadow-md shadow-emerald-900/30 hover:shadow-lg transition-all flex items-center gap-2 group"
            >
              <BookOpen size={16} />
              <span>Explore Curriculum</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/cli"
              className="px-6 py-3.5 rounded-2xl bg-[#0c1328] hover:bg-slate-800 text-white border border-slate-700 text-sm font-bold shadow-sm transition-all flex items-center gap-2"
            >
              <Terminal size={16} className="text-emerald-400" />
              <span>Start CLI Foundation</span>
            </Link>

            <Link
              href="/candle-flame-animation"
              className="px-6 py-3.5 rounded-2xl bg-[#0c1328] hover:bg-slate-800 text-white border border-slate-700 text-sm font-bold shadow-sm transition-all flex items-center gap-2"
            >
              <Sparkles size={16} className="text-amber-400" />
              <span>Explore Visual Labs</span>
            </Link>

            <Link
              href="/full-stack-web-development-roadmap"
              className="px-6 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-bold transition-all flex items-center gap-2"
            >
              <Compass size={16} className="text-slate-400" />
              <span>Career Roadmap</span>
            </Link>
          </div>

          {/* Key Value Badges */}
          <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="text-[#04AA6D] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white">100% Free</h4>
                <p className="text-[11px] text-slate-400">No paywalls, forever free</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="text-[#04AA6D] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white">Windows 11 Native</h4>
                <p className="text-[11px] text-slate-400">Exact 1-to-1 matching output</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="text-[#04AA6D] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white">Interactive Labs</h4>
                <p className="text-[11px] text-slate-400">Live sandbox drills</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="text-[#04AA6D] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white">Zero Prerequisites</h4>
                <p className="text-[11px] text-slate-400">Built for absolute beginners</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 1: CORE STRUCTURED LEARNING TRACKS ── */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-[#04AA6D]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#04AA6D] font-mono">
                Curriculum Pathways
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Structured Developer Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Follow our sequential curriculum designed to take you from initial terminal commands to full-stack mastery.
            </p>
          </div>

          <Link
            href="/course"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#04AA6D] hover:text-emerald-400 transition-colors shrink-0"
          >
            <span>View All Modules</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEARNING_TRACKS.map((track) => (
            <Link
              key={track.id}
              href={track.href}
              className={`bg-[#0c1328] border border-slate-800 hover:border-slate-700 hover:shadow-xl rounded-3xl p-6 flex flex-col justify-between space-y-5 transition-all duration-200 group ${track.accentColor}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#060c18] border border-slate-800 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {track.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${track.badgeColor}`}>
                    {track.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-slate-400">
                  {track.lessonsCount}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#04AA6D] group-hover:translate-x-0.5 transition-transform">
                  <span>Start Module</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* ── SECTION 2: INTERACTIVE VISUAL LABS & SIMULATORS ── */}
      <section className="bg-[#060c18] border-y border-slate-800 py-14">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                  Interactive Physics & Code Sandboxes
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Visual Animation Labs
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Real-time interactive simulations built purely with HTML5, modern CSS3 keyframes, and Web Audio synthesis.
              </p>
            </div>

            <Link
              href="/candle-flame-animation"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
            >
              <span>Explore All Labs</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Visual Labs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VISUAL_LABS.map((lab) => (
              <Link
                key={lab.id}
                href={lab.href}
                className="bg-[#0c1328] border border-slate-800 hover:border-slate-700 hover:shadow-xl rounded-3xl p-6 flex flex-col justify-between space-y-4 transition-all duration-200 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#17181c] border border-slate-800 flex items-center justify-center shadow-sm">
                      {lab.icon}
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${lab.tagColor}`}>
                      {lab.tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500">
                      {lab.category}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                      {lab.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {lab.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">
                    Live Simulator + VS Code
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#04AA6D] group-hover:translate-x-0.5 transition-transform">
                    <span>Launch Lab</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 3: PLATFORM PILLARS & METHODOLOGY ── */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#04AA6D] font-mono">
            How You Learn
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Designed for Absolute Clarity & Hands-On Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            No endless theory videos. Every lesson pairs live code examples with step-by-step Windows 11 terminal outputs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0c1328] border border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#060c18] border border-emerald-500/30 flex items-center justify-center text-[#04AA6D]">
              <Monitor size={20} />
            </div>
            <h3 className="text-base font-bold text-white">
              1-to-1 Windows 11 Output Matching
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Read lessons on your phone or browser while practicing live on your Windows PC with 100% line-by-line identical output verification.
            </p>
          </div>

          <div className="bg-[#0c1328] border border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#060c18] border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Code2 size={20} />
            </div>
            <h3 className="text-base font-bold text-white">
              Zero-Install Sandboxes & 1-Click Exports
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Edit HTML, CSS, JavaScript, and Batch files live in our embedded VS Code editors or download standalone `.html` and `.bat` files instantly.
            </p>
          </div>

          <div className="bg-[#0c1328] border border-slate-800 rounded-3xl p-6 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-[#060c18] border border-purple-500/30 flex items-center justify-center text-purple-400">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-base font-bold text-white">
              Structured Knowledge Checks & Quizzes
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reinforce every new tag, command, and syntax rule with interactive practice checks and instant feedback hints.
            </p>
          </div>
        </div>

      </section>

      {/* ── Footer ── */}
      <Footer />

    </div>
  );
}
