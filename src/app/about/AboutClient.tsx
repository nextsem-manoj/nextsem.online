"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Languages, HardDriveDownload, ShieldCheck, Search, Terminal, Code, Layers, ChevronRight } from 'lucide-react';
import { auth, signInWithGoogle } from '../../lib/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

export default function AboutClient() {
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; photo?: string } | null>(null);
  const [isAlreadyDownloaded, setIsAlreadyDownloaded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({ name: user.displayName || "Student", email: user.email || "", photo: user.photoURL || undefined });
      } else {
        setCurrentUser(null);
      }
    });
    const saved = localStorage.getItem('nextsem_offline_chapters');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && Object.keys(parsed).length > 0) setIsAlreadyDownloaded(true);
      } catch (e) { console.error(e); }
    }
    return () => unsubscribe();
  }, []);

  const features = [
    { icon: <HardDriveDownload size={18} />, label: isAlreadyDownloaded ? "Offline Ready" : "Works Offline", desc: "Download the full curriculum and study without internet.", color: "text-blue-400" },
    { icon: <Languages size={18} />, label: "3 Languages", desc: "Every lesson in English, Hinglish, and Hindi.", color: "text-amber-400" },
    { icon: <Search size={18} />, label: "Instant Search", desc: "Find any topic across the entire curriculum in seconds.", color: "text-violet-400" },
    { icon: <BookOpen size={18} />, label: "Progress Sync", desc: "Your completed lessons sync across all your devices.", color: "text-emerald-400" },
    { icon: <Terminal size={18} />, label: "CMD Simulator", desc: "Interactive Windows terminal with step-by-step lessons.", color: "text-teal-400" },
    { icon: <Code size={18} />, label: "Code Playground", desc: "Write and preview HTML, CSS, and JavaScript live.", color: "text-sky-400" },
  ];

  const curriculum = [
    { phase: "Phase 1", label: "CLI & Dev Setup", topics: ["Windows Command Prompt", "VS Code Setup", "Git & GitHub", "Chrome DevTools"] },
    { phase: "Phase 2", label: "HTML & CSS", topics: ["HTML5 Fundamentals", "CSS Layouts & Flexbox", "Grid Systems", "Responsive Design"] },
    { phase: "Phase 3", label: "JavaScript", topics: ["Core JS Concepts", "DOM Manipulation", "Events & APIs", "ES6+ Features"] },
    { phase: "Phase 4", label: "React", topics: ["JSX & Components", "State & Props", "React Hooks", "Context API"] },
    { phase: "Phase 5", label: "Backend", topics: ["Node.js", "Express.js", "REST APIs", "MongoDB"] },
    { phase: "Phase 6", label: "Full Stack & Deploy", topics: ["Full Stack Projects", "Deployment", "Portfolio", "Interview Prep"] },
  ];

  const realProjects = [
    "Personal Portfolio Website",
    "Responsive Business Landing Page",
    "To-Do List App with Local Storage",
    "Weather App using a Public API",
    "Full Stack Notes Application",
    "E-Commerce Product Frontend",
    "Blog with CMS Integration",
    "Student Management System (Full Stack)",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ── Navbar ── */}
      <div className="sticky top-0 z-40 h-14 bg-slate-950/90 backdrop-blur border-b border-slate-800 flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
          <ArrowLeft size={15} />
          Home
        </Link>
        <span className="text-sm font-semibold text-slate-300">About Nextsem</span>
        {currentUser ? (
          <button
            onClick={async () => { try { await signOut(auth); } catch (e) { console.error(e); } }}
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={async () => { try { await signInWithGoogle(); } catch (e) { console.error(e); } }}
            className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Sign in
          </button>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-20">

        {/* ── Hero ── */}
        <section className="space-y-6">
          <div className="space-y-1">
            <p className="text-sm text-slate-500 font-medium">Free · Structured · Multilingual</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              From zero to<br />
              <span className="text-emerald-400">job-ready developer.</span>
            </h1>
          </div>
          <p className="text-base text-slate-400 leading-relaxed max-w-xl">
            Nextsem Academy is a free, structured web development curriculum built for BCA, B.Tech, and MCA students in India.
            No fluff — just real code, real projects, and a clear path to getting hired.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/course"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm rounded-xl transition-all"
            >
              Start learning <ChevronRight size={15} />
            </Link>
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-all"
            >
              View my progress
            </Link>
          </div>
        </section>

        {/* ── Features grid ── */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white">Everything included</h2>
            <p className="text-sm text-slate-500 mt-1">No paywalls. No premium tiers. All features are free.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {features.map((f, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className={`${f.color}`}>{f.icon}</div>
                <p className="text-sm font-semibold text-white">{f.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Curriculum phases ── */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white">The curriculum</h2>
            <p className="text-sm text-slate-500 mt-1">6 phases, structured from absolute beginner to deployment-ready.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {curriculum.map((c, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-600 font-mono">{c.phase}</span>
                  <span className="text-sm font-semibold text-white">{c.label}</span>
                </div>
                <ul className="space-y-1">
                  {c.topics.map((t, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/course" className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            See full curriculum <ChevronRight size={14} />
          </Link>
        </section>

        {/* ── Real projects ── */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-white">Real projects you'll build</h2>
            <p className="text-sm text-slate-500 mt-1">Every phase ends with a project you can add to your portfolio.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {realProjects.map((p, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3">
                <Layers size={13} className="text-slate-600 shrink-0" />
                <span className="text-sm text-slate-300">{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── What makes it different ── */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-white">Why Nextsem?</h2>
          <div className="space-y-4 text-sm text-slate-400 leading-relaxed max-w-2xl">
            <p>
              Most tutorials teach you <em>syntax</em>. We teach you <em>how to think like a developer</em>.
              Each lesson covers the concept, the common mistakes, best practices, and ends with a real quiz.
            </p>
            <p>
              Lessons are available in <strong className="text-slate-200">English, Hinglish, and Hindi</strong> — so you can
              read in the language you actually think in. Switching languages mid-lesson works instantly.
            </p>
            <p>
              Built specifically for <strong className="text-slate-200">Indian university students</strong> on the BCA, B.Tech,
              and MCA track. The curriculum aligns with what your college expects, plus what the industry demands.
            </p>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="border border-slate-800 bg-slate-900/50 rounded-2xl p-8 md:p-12 text-center space-y-5">
          <h2 className="text-2xl font-bold text-white">Ready to start?</h2>
          <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
            It's free. No account needed to begin. Sign in only when you want to save your progress.
          </p>
          <Link
            href="/course"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm rounded-xl transition-all"
          >
            View the full course <ChevronRight size={15} />
          </Link>
          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4 justify-center text-xs text-slate-600">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Use</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact</Link>
            <span>© 2026 Nextsem Academy</span>
          </div>
        </section>

      </div>
    </div>
  );
}
