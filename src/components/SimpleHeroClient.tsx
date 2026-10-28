"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  Code2,
  Terminal,
  Sparkles,
  Laptop,
  CheckCircle2,
  ShieldCheck,
  Zap,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Layers,
  Copy,
  Check,
  Compass,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import WindowsIcon from "@/components/WindowsIcon";

export default function SimpleHeroClient() {
  const [copied, setCopied] = useState(false);
  const sampleCode = `<!DOCTYPE html>
<html>
  <head>
    <title>My First Website</title>
  </head>
  <body>
    <h1>Hello, World! 🚀</h1>
    <p>Building real web projects on 🪟 Windows 11.</p>
  </body>
</html>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col w-full bg-[#0d0e12] text-white">
      {/* ── BREADCRUMB NAVIGATION TRAIL ── */}
      <nav aria-label="Breadcrumb" className="w-full bg-[#111216] border-b border-slate-800/80 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white hover:text-[#04AA6D] font-bold transition-colors"
          >
            <span>🏠</span>
            <span>Home</span>
          </Link>
          <span className="text-slate-600 font-normal">❯</span>
          <span className="text-[#04AA6D] font-semibold">Nextsem Academy • College &amp; Higher Studies Platform (BCA, MCA, B.Tech, Jobs &amp; Coding)</span>
        </div>
      </nav>

      {/* ── 1. HERO BANNER SECTION ── */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/60 bg-gradient-to-b from-[#17181c] via-[#111216] to-[#0d0e12]">
        {/* Glow ambient background lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/4 right-10 w-[350px] h-[250px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-[#04AA6D]" />
                <span>100% Free Higher Education • College to Tech Job Placement</span>
              </div>

              {/* 3 Pathway Quick Switcher */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <Link
                  href="/bca"
                  className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <span>🎓 College (BCA/Degree)</span>
                </Link>
                <Link
                  href="/jobs"
                  className="px-3.5 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <span>💼 Tech Jobs &amp; Hiring</span>
                </Link>
                <Link
                  href="/bca/practical"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <span>💻 Skill-Based (Coding Lab)</span>
                </Link>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Higher Education for{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#04AA6D] to-teal-300">
                  BCA, MCA, B.Tech &amp; Tech Jobs.
                </span>
              </h1>

              {/* High-Impact Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                100% Free Higher Education &amp; Career Coaching by <strong>Er. Manoj Kumar</strong>. College Degrees (BCA, MCA, B.Tech CSE), 50-Day Practical Coding Labs verified live on <span className="text-white font-bold inline-flex items-center gap-1"><WindowsIcon className="w-4 h-4 inline-block text-cyan-400" /> Windows 11</span> VS Code, and Curated Tech Jobs &amp; Internships.
              </p>

              {/* Primary 3-Pathway CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/bca"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <GraduationCap className="w-4 h-4 text-white" />
                  <span>🎓 College Hub (BCA) »</span>
                </Link>

                <Link
                  href="/jobs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-rose-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Briefcase className="w-4 h-4 text-white" />
                  <span>💼 Tech Jobs &amp; Internships »</span>
                </Link>

                <Link
                  href="/bca/practical"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <Laptop className="w-4 h-4 text-white" />
                  <span>💻 50-Day Coding Lab ⚡</span>
                </Link>

                <Link
                  href="/tracks"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-sm sm:text-base border border-slate-700/80 transition-all hover:border-slate-500"
                >
                  <Compass className="w-4 h-4 text-[#04AA6D]" />
                  <span>Web Dev Tracks</span>
                </Link>
              </div>

              {/* Quick Stat Highlights */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#04AA6D]" />
                  <span className="text-white font-semibold">299+ Free Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#04AA6D]" />
                  <span className="text-white font-semibold">0 Login Required to Read</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#04AA6D]" />
                  <span className="text-white font-semibold">1-to-1 PC Screenshots</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Code Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#17181c] border border-slate-800 shadow-2xl overflow-hidden">
                {/* Card Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111216] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400">index.html — VS Code</span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-md bg-slate-800/60 hover:bg-slate-700/60 transition-colors"
                    title="Copy Code"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                {/* Code Window */}
                <div className="p-4 bg-[#0a0b0e] font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed">
                  <div className="text-slate-500">&lt;!DOCTYPE html&gt;</div>
                  <div><span className="text-cyan-400">&lt;html&gt;</span></div>
                  <div className="pl-4">
                    <span className="text-cyan-400">&lt;head&gt;</span>
                    <span className="text-slate-400">&lt;title&gt;</span>My First Website<span className="text-slate-400">&lt;/title&gt;</span>
                    <span className="text-cyan-400">&lt;/head&gt;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">&lt;body&gt;</span>
                  </div>
                  <div className="pl-8 text-emerald-400 font-bold">
                    &lt;h1&gt;Hello, World! 🚀&lt;/h1&gt;
                  </div>
                  <div className="pl-8 text-slate-300">
                    &lt;p&gt;Building real web projects on 🪟 Windows 11.&lt;/p&gt;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">&lt;/body&gt;</span>
                  </div>
                  <div><span className="text-cyan-400">&lt;/html&gt;</span></div>
                </div>

                {/* Instant Output Teaser */}
                <div className="p-4 bg-[#14151a] border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Live Output</span>
                    <span className="text-sm font-extrabold text-white">Hello, World! 🚀</span>
                  </div>

                  <Link
                    href="/playground"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#04AA6D]/20 hover:bg-[#04AA6D]/30 text-[#04AA6D] border border-[#04AA6D]/40 text-xs font-bold transition-all"
                  >
                    <span>Run in Playground</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. THE 3 PRIMARY LEARNING GATEWAYS ── */}
      <section id="gateways" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-extrabold uppercase tracking-wider border border-slate-700">
            <span>🎯</span>
            <span>Choose Your Learning Gateway</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 3 Core Learning Pathways
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal">
            Whether you need school coaching, college degree preparation, or job-ready software engineering skills, select your pathway below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pathway 1: Tech Jobs & Internships */}
          <div className="rounded-3xl bg-gradient-to-b from-[#15161c] to-[#0f1015] border border-rose-500/30 hover:border-rose-400 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-950/20 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-2xl">
                  💼
                </span>
                <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-rose-950/80 text-rose-300 border border-rose-800">
                  Hiring &amp; Placement
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
                  Tech Jobs &amp; Internships
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Curated tech jobs, off-campus hiring drives (TCS, Accenture, C-DOT, Wipro), paid internships, and central government IT officer openings.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Curated Off-Campus Drives &amp; GET Roles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Govt IT &amp; Autonomous R&amp;D Circulars (C-DOT, NIC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>BCA, MCA &amp; B.Tech Freshers Eligibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Direct Official Notification PDF Downloads</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60">
              <Link
                href="/jobs"
                className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-300 hover:text-white font-extrabold text-xs transition-colors border border-rose-500/30 hover:border-rose-500 shadow-sm"
              >
                <span>Enter Tech Jobs Portal 💼 »</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pathway 2: College */}
          <div className="rounded-3xl bg-gradient-to-b from-[#15161c] to-[#0f1015] border border-blue-500/30 hover:border-blue-400 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/20 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-2xl">
                  🎓
                </span>
                <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800">
                  Degrees &amp; BCA
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                  College Education Hub
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  University degree courses (BCA, MCA, B.Tech CSE), comprehensive semester-wise syllabi, theory units, and exam preparation guides.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>BCA Semesters 1 to 6 Complete Syllabi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>C, C++, Data Structures, DBMS, Java &amp; OS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>University Solved Question Banks &amp; Papers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Official Reference Links &amp; Exam Notes</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60">
              <Link
                href="/bca"
                className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-blue-500/10 hover:bg-blue-600 text-blue-300 hover:text-white font-extrabold text-xs transition-colors border border-blue-500/30 hover:border-blue-500 shadow-sm"
              >
                <span>Enter College Hub »</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pathway 3: Coding Lab */}
          <div className="rounded-3xl bg-gradient-to-b from-[#15161c] to-[#0f1015] border border-emerald-500/30 hover:border-emerald-400 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/20 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-2xl">
                  💻
                </span>
                <span className="text-[11px] font-black uppercase px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                  Job-Ready Labs
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                  Skill-Based Coding Labs
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  50-Day Practical Coding Labs verified live from your personal GitHub repository, plus full-stack web development and terminal workflow.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800/80 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>50-Day Hands-on VS Code Guided Specifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live GitHub Push Verification to Unlock Next Day</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full-Stack Web Dev: HTML5, CSS3, JS, React, Node</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Technical Viva simulation &amp; verified portfolio</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60">
              <Link
                href="/bca/practical"
                className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-black font-extrabold text-xs transition-colors border border-emerald-500/30 hover:border-emerald-500 shadow-sm"
              >
                <span>Enter 50-Day Coding Lab ⚡ »</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. "SKILL-BASED CODING TRACK" — THE 4-STEP DEVELOPER PATHWAY ── */}
      <section id="pathways" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-[#04AA6D] text-xs font-extrabold uppercase tracking-wider">
            Web &amp; Software Placement
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Full-Stack Developer Learning Pathway
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal">
            Step-by-step developer progression from markup basics to production cloud deployment on Windows 11.
          </p>
        </div>

        {/* 4 Sequential Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1: HTML5 */}
          <div className="group rounded-2xl bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl">
                  🌐
                </span>
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  STEP 1
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">
                  HTML5 Web Architecture
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Learn markup skeleton, headings, paragraphs, images, tables, forms, and VS Code on Windows 11.
                </p>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                98 Free Lessons • Beginner
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60">
              <Link
                href="/html"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800 group-hover:bg-[#04AA6D] text-white font-bold text-xs transition-colors"
              >
                <span>Start Step 1: HTML</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Step 2: CSS3 */}
          <div className="group rounded-2xl bg-[#17181c] border border-slate-800 hover:border-cyan-400 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl">
                  🎨
                </span>
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                  STEP 2
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  Modern CSS3 &amp; Grid
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Design beautiful layouts with Flexbox, CSS Grid, keyframe animations, dark themes, and mobile viewports.
                </p>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                30 Free Lessons • Layouts
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60">
              <Link
                href="/css"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800 group-hover:bg-cyan-500 text-white font-bold text-xs transition-colors"
              >
                <span>Start Step 2: CSS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Step 3: JavaScript */}
          <div className="group rounded-2xl bg-[#17181c] border border-slate-800 hover:border-amber-400 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-xl">
                  ⚡
                </span>
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  STEP 3
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-white group-hover:text-amber-400 transition-colors">
                  JavaScript ES6+ &amp; DOM
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Master functions, arrays, DOM manipulation, browser events, localStorage, and async fetch API.
                </p>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                50+ Concepts • Logic
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60">
              <Link
                href="/js"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800 group-hover:bg-amber-500 text-white font-bold text-xs transition-colors"
              >
                <span>Start Step 3: JavaScript</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Step 4: React & Full Stack */}
          <div className="group rounded-2xl bg-[#17181c] border border-slate-800 hover:border-sky-400 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-xl">
                  ⚛️
                </span>
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30">
                  STEP 4
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-white group-hover:text-sky-400 transition-colors">
                  React 19 &amp; Node.js APIs
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Build production web apps with React components, custom hooks, Node.js REST backend, and Git push.
                </p>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Advanced • Full-Stack
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60">
              <Link
                href="/tracks"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800 group-hover:bg-sky-500 text-white font-bold text-xs transition-colors"
              >
                <span>Explore Full-Stack Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. ESSENTIAL COMPANION TRACKS ── */}
      <section className="py-12 bg-[#111216] border-y border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Essential Developer Companion Tracks
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Skills every serious developer needs to excel on Windows 11 and industry teams.
              </p>
            </div>

            <Link
              href="/tracks"
              className="text-xs font-bold text-[#04AA6D] hover:underline inline-flex items-center gap-1"
            >
              <span>View all pathways</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 50-Day BCA Practical Lab */}
            <Link
              href="/bca/practical"
              className="p-5 rounded-xl bg-[#17181c] border border-slate-800 hover:border-emerald-500 transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <Laptop className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  ⚡ 50-Day BCA Practical Lab
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real VS Code specs, GitHub verification tests, and daily viva checks across 50 days of coding.
                </p>
                <span className="text-[11px] text-emerald-400 font-semibold inline-block pt-1">
                  50 Daily Sprints • Live Lab »
                </span>
              </div>
            </Link>

            {/* Windows 11 CLI */}
            <Link
              href="/cli"
              className="p-5 rounded-xl bg-[#17181c] border border-slate-800 hover:border-slate-600 transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <Terminal className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    🪟 Windows 11 Command Prompt
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  100 practical CMD commands: directory traversal, file management, and terminal automation.
                </p>
                <span className="text-[11px] text-cyan-400 font-semibold inline-block pt-1">
                  100 Lessons • Interactive Simulator »
                </span>
              </div>
            </Link>

            {/* Git & GitHub */}
            <Link
              href="/git"
              className="p-5 rounded-xl bg-[#17181c] border border-slate-800 hover:border-slate-600 transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🐙</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                  Git &amp; GitHub Version Control
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Master git init, commit, branch, merge, pull requests, and pushing your real projects online.
                </p>
                <span className="text-[11px] text-orange-400 font-semibold inline-block pt-1">
                  15 Lessons • Team Collaboration »
                </span>
              </div>
            </Link>

            {/* C & C++ Programming */}
            <Link
              href="/c"
              className="p-5 rounded-xl bg-[#17181c] border border-slate-800 hover:border-slate-600 transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                  C &amp; C++ Foundation
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Understand pointers, memory allocation, data structures, and computer science logic from the core.
                </p>
                <span className="text-[11px] text-blue-400 font-semibold inline-block pt-1">
                  Core CS • Algorithmic Thinking »
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. WHY NEXTSEM ACADEMY? (3 GOLDEN PILLARS) ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Learn on Nextsem Academy?
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Built by engineers to make learning to code fast, enjoyable, and free of confusion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-[#17181c] border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#04AA6D]">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-white">
              1-to-1 Windows 11 Verification
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every lesson provides matching step-by-step screenshots of VS Code and Command Prompt on 🪟 Windows 11. You can verify your terminal outputs line-by-line.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17181c] border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-white">
              5-Point Concise Lesson Standard
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No overwhelming walls of academic text. Lessons are summarized in maximum 5 bullet points with under 8 words per sentence for instant comprehension.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17181c] border border-slate-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-white">
              100% Free Open Education
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No credit card, no 7-day trials, no locked curriculum. You have full, unrestricted access to all 299+ lessons and browser playgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CALL TO ACTION BANNER ── */}
      <section className="py-14 bg-gradient-to-r from-emerald-950/40 via-[#17181c] to-teal-950/40 border-t border-slate-800/80 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build Your First Webpage Today?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Join thousands of students learning full-stack development without paying a single rupee.
          </p>
          <div className="pt-2">
            <Link
              href="/html/learn-html-web-free-lessons-what-is-the-internet"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-base shadow-xl shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start Lesson 1: What is the Internet? »</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
