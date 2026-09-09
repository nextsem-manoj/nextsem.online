"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WindowsIcon from '@/components/WindowsIcon';
import { 
  Code2, Palette, Cpu, Cloud, Terminal, 
  Layers, ArrowRight, CheckCircle2, Sparkles, 
  BookOpen, ShieldCheck, Compass, GitBranch
} from 'lucide-react';

const TRACKS_DATA = [
  {
    id: "cli",
    stage: "STAGE 0 • FOUNDATION",
    title: "Windows 11 CLI & Git Versioning",
    subtitle: "Command Prompt Mastery & GitHub Workflow",
    desc: "Conquer terminal fear by mastering directory navigation, drive switching, file creation, and Git repository commands directly in 🪟 Windows 11.",
    icon: <Terminal size={24} className="text-[#04AA6D]" />,
    href: "/cli",
    badge: "Terminal Fear-Killer",
    lessonsCount: "100+ Lessons",
    skills: [
      "🪟 Windows 11 Command Prompt (CMD)",
      "File and Directory Operations (dir, mkdir, copy, type)",
      "Git Init, Commit, Branching & Merge Conflicts",
      "GitHub Remote Repository & Pull Requests"
    ]
  },
  {
    id: "html",
    stage: "STAGE 1 • STRUCTURE",
    title: "HTML5 Web Architecture",
    subtitle: "Semantic Layouts & Pure Web Standards",
    desc: "Master the foundational skeleton of the web. Write clean, accessible HTML5 semantic tags, data tables, responsive media, and interactive forms.",
    icon: <Code2 size={24} className="text-[#04AA6D]" />,
    href: "/html",
    badge: "28 Lessons Live",
    lessonsCount: "98+ Tag Lessons",
    skills: [
      "Semantic HTML5 Elements (<header>, <main>, <article>, <section>)",
      "Accessible Forms, Inputs & Fieldsets",
      "Structured Data Tables & Media Embedding",
      "1-to-1 Windows 11 Browser Verification"
    ]
  },
  {
    id: "css",
    stage: "STAGE 2 • PRESENTATION",
    title: "CSS3 Styling & Modern Layouts",
    subtitle: "Flexbox, 2D CSS Grid & Responsive Design",
    desc: "Transform plain HTML into breathtaking, modern user interfaces with responsive CSS Flexbox, 2D Grid layouts, keyframe animations, and dark mode.",
    icon: <Palette size={24} className="text-[#04AA6D]" />,
    href: "/css",
    badge: "Core Track",
    lessonsCount: "25+ Lessons",
    skills: [
      "CSS Box Model, Spacing & Specificity",
      "Flexbox Dynamic 1D Alignment & Justification",
      "2D CSS Grid Layouts & Template Areas",
      "Glassmorphism, CSS Variables & Dark Themes"
    ]
  },
  {
    id: "js",
    stage: "STAGE 3 • LOGIC",
    title: "JavaScript (ES6+) Interactivity",
    subtitle: "DOM Manipulation & Asynchronous Programming",
    desc: "Bring web applications to life with modern JavaScript. Learn DOM event listeners, arrow functions, array iteration methods, async/await, and Fetch API.",
    icon: <Cpu size={24} className="text-[#04AA6D]" />,
    href: "/js",
    badge: "Interactive Track",
    lessonsCount: "40+ Lessons",
    skills: [
      "ES6+ Syntax, Let/Const, Destructuring & Spread",
      "DOM Manipulation, Event Listeners & Input Handling",
      "Promises, Async/Await & REST API Integration",
      "Local Storage State Persistence"
    ]
  },
  {
    id: "react",
    stage: "STAGE 4 • UI COMPONENTS",
    title: "React 19 & Next.js Framework",
    subtitle: "Reactive State & Full-Stack Architecture",
    desc: "Build lightning-fast Single Page Applications and Full-Stack web apps with React 19 functional components, useState, useEffect, and Next.js App Router.",
    icon: <Layers size={24} className="text-[#04AA6D]" />,
    href: "/react",
    badge: "Modern Frontend",
    lessonsCount: "30+ Lessons",
    skills: [
      "JSX Syntax & Reusable Component Composition",
      "React Hooks (useState, useEffect, useMemo, useRef)",
      "Next.js 15+ App Router, Dynamic Routing & Layouts",
      "Server-Side Rendering (SSR) & Client Components"
    ]
  },
  {
    id: "node",
    stage: "STAGE 5 • SERVER & DB",
    title: "Node.js & Backend REST APIs",
    subtitle: "Express Server Routing & Data Persistence",
    desc: "Architect scalable backend services and REST APIs with Node.js runtime, Express routing middleware, HTTP status codes, and database integration.",
    icon: <Cloud size={24} className="text-[#04AA6D]" />,
    href: "/nodejs",
    badge: "Backend Engineering",
    lessonsCount: "35+ Lessons",
    skills: [
      "Node.js Event Loop, File System & Modules",
      "Express.js Server Routing & Middleware",
      "RESTful API Design & JSON Serialization",
      "Database Integration & JWT Authentication"
    ]
  }
];

export default function TracksClient() {
  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D]/30">
      <Header />

      {/* ── TOP BREADCRUMB NAVIGATION ── */}
      <nav aria-label="Breadcrumb" className="bg-[#131417] border-b border-slate-800/80 px-4 sm:px-8 py-2.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2 font-medium">
          <Link href="/" className="hover:text-[#04AA6D] transition-colors">Home</Link>
          <span className="text-slate-600">›</span>
          <span className="text-white font-bold">Curated Developer Tracks</span>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 space-y-12">
        
        {/* ── HEADER INTRO BANNER ── */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04AA6D]/10 border border-[#04AA6D]/20 text-[#04AA6D] text-xs font-black uppercase tracking-wider">
            <Sparkles size={14} className="text-[#04AA6D]" />
            <span>Structured Career Pathways</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Curated <span className="text-[#04AA6D]">Developer Tracks</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Follow a proven, step-by-step full-stack roadmap engineered for <span className="inline-flex items-center gap-1 font-semibold text-white"><WindowsIcon className="w-4 h-4 text-white inline-block -mt-0.5" /> 🪟 Windows 11</span> developers. Each track features comprehensive conceptual guides, interactive live code compiler sandbox practice, and 1-to-1 screenshot verification.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/full-stack-web-development-roadmap"
              className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-[#04AA6D]/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Compass size={16} />
              <span>View Interactive Roadmap</span>
            </Link>
            <Link
              href="/playground"
              className="px-5 py-2.5 bg-[#1e2029] hover:bg-[#252834] text-white text-xs sm:text-sm font-bold rounded-xl border border-slate-700 hover:border-[#04AA6D] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Terminal size={16} className="text-[#04AA6D]" />
              <span>Launch VS Code Playground</span>
            </Link>
          </div>
        </div>

        {/* ── TRACKS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS_DATA.map((track) => (
            <div
              key={track.id}
              className="bg-[#1e2029] rounded-2xl border border-slate-800 hover:border-[#04AA6D]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 space-y-4">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 group-hover:scale-105 transition-transform">
                    {track.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-300 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    {track.badge}
                  </span>
                </div>

                {/* Title & Stage */}
                <div>
                  <div className="text-[11px] font-bold text-[#04AA6D] uppercase tracking-wider mb-1">
                    {track.stage}
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-[#04AA6D] transition-colors leading-snug">
                    {track.title}
                  </h2>
                  <div className="text-xs font-semibold text-slate-400 mt-0.5">
                    {track.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2.5">
                    {track.desc}
                  </p>
                </div>

                {/* Skills Bullet List */}
                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Skills Covered:
                  </div>
                  <ul className="space-y-1">
                    {track.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-tight">
                        <CheckCircle2 size={13} className="text-[#04AA6D] shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400">
                  {track.lessonsCount}
                </span>
                <Link
                  href={track.href}
                  className="px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-md group-hover:shadow-emerald-500/20"
                >
                  <span>Start Track</span>
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
