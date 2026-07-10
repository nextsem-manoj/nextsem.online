"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, BookOpen, Sparkles, Languages, ShieldCheck, 
  HardDriveDownload, ChevronRight, Search, Lock, LogOut, 
  LogIn, Terminal, CheckCircle2, Star, HelpCircle
} from 'lucide-react';
import { auth, signInWithGoogle } from '../../lib/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import FeatureSpotlight from '../../components/FeatureSpotlight';

export default function AboutClient() {
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; avatar: string; photo?: string } | null>(null);
  const [isAlreadyDownloaded, setIsAlreadyDownloaded] = useState(false);

  useEffect(() => {
    // Sync auth state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          name: user.displayName || "Alex J.",
          email: user.email || "",
          avatar: (user.displayName || "AJ").slice(0, 2).toUpperCase(),
          photo: user.photoURL || undefined
        });
      } else {
        setCurrentUser(null);
      }
    });

    // Check offline download status
    const checkOffline = () => {
      const saved = localStorage.getItem('nextsem_offline_chapters');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && Object.keys(parsed).length > 0) {
            setIsAlreadyDownloaded(true);
          }
        } catch (e) {
          console.error(e);
        }
      }
    };
    checkOffline();

    return () => unsubscribe();
  }, []);

  const handleStartLearning = () => {
    // Pre-select view mode or trigger starts
  };

  const handleOfflineFeatureClick = () => {
    window.dispatchEvent(new Event("trigger_offline_sync"));
  };

  const handleSearchFeatureClick = () => {
    window.dispatchEvent(new Event("open_search"));
  };

  const handleTranslateFeatureClick = () => {
    window.dispatchEvent(new Event("open_translation"));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white select-none relative overflow-x-hidden">
      
      {/* Ambient glowing background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Navbar */}
      <div className="h-16 border-b border-slate-850/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-slate-400 hover:text-white font-black text-xs md:text-sm uppercase tracking-wider transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to Map</span>
        </Link>
        <span className="text-xs font-black uppercase tracking-widest text-slate-400">Academy Overview</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-24 relative z-10">

        {/* Section 1: Hero Welcome */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 bg-gradient-to-br from-slate-900/60 to-[#060c18]/90 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-6 md:p-12 shadow-2xl">
          {/* Left Panel */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-3/5">
            {/* Trust badge row */}
            <div className="flex flex-wrap items-center gap-2 mb-4 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-450 border border-emerald-500/20">
                🟢 Free to Start
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                🏆 Certification Included
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                📱 Works Offline
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-5 tracking-tight leading-tight uppercase">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Zero</span> to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400">
                Job-Ready
              </span>{" "}
              Developer
            </h2>

            <div className="mb-6 md:mb-8 max-w-xl space-y-3">
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                💡 <strong className="text-white">No fluff. No passive watching.</strong> Just real code, real projects, and real results — structured from <em>absolute beginner</em> to a <em>hireable developer</em>.
              </p>

              {/* Outcome stat pills */}
              <div className="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start">
                {[
                  { icon: "⚡", label: "Structured in 8 Phases", color: "from-blue-500/15 to-indigo-500/10 border-blue-500/20 text-blue-400" },
                  { icon: "🎯", label: "Hands-on Every Lesson", color: "from-emerald-500/15 to-teal-500/10 border-emerald-500/20 text-emerald-400" },
                  { icon: "🧠", label: "Built for BCA / B.Tech", color: "from-violet-500/15 to-purple-500/10 border-violet-500/20 text-violet-400" },
                ].map((stat) => (
                  <span
                    key={stat.label}
                    className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r border ${stat.color} backdrop-blur-sm`}
                  >
                    <span>{stat.icon}</span> {stat.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start w-full max-w-md">
              <Link 
                href="/course" 
                onClick={handleStartLearning}
                className="w-full sm:w-auto text-black font-black text-xs md:text-sm uppercase tracking-widest py-3.5 px-8 md:py-4 md:px-10 rounded-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 active:scale-95 shrink-0 bg-[#39FF14] shadow-[0_0_25px_rgba(57,255,20,0.45)] hover:bg-[#5aff3e]"
              >
                🚀 Start Learning Now
              </Link>

              <button
                onClick={async () => {
                  if (currentUser) {
                    try {
                      await signOut(auth);
                    } catch (err) {
                      console.error("Sign Out Error:", err);
                    }
                  } else {
                    try {
                      await signInWithGoogle();
                    } catch (err) {
                      console.error("Sign In Error:", err);
                    }
                  }
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-900 text-slate-200 border border-slate-800 rounded-2xl font-bold text-xs md:text-sm shadow-md hover:bg-slate-855 hover:-translate-y-0.5 transition-all active:scale-95 shrink-0"
              >
                {currentUser ? (
                  <>
                    {currentUser.photo ? (
                      <img src={currentUser.photo} alt="" className="w-5 h-5 rounded-full shrink-0 object-cover border border-white/20" />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-[10px] shrink-0">
                        {currentUser.avatar}
                      </div>
                    )}
                    <span>Logged in: {currentUser.name} (Sign Out)</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span>Continue with Google</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile 2x2 Features Grid */}
            <div className="grid grid-cols-2 gap-2 mt-6 lg:hidden w-full max-w-md">
              <FeatureSpotlight featureId="offline-download-v1" label="Download all chapters offline!" side="top" color="blue">
                <button
                  onClick={handleOfflineFeatureClick}
                  className={`flex items-center gap-2 p-2 border rounded-xl text-left hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full ${
                    isAlreadyDownloaded
                      ? "bg-emerald-500/10 border-emerald-500/30"
                      : "bg-slate-900/40 border-slate-800/50 hover:border-blue-500/30"
                  }`}
                >
                  <div className={`p-1.5 rounded-lg shrink-0 ${
                    isAlreadyDownloaded ? "bg-emerald-500/10 text-emerald-450" : "bg-blue-500/10 text-blue-400"
                  }`}>
                    {isAlreadyDownloaded ? <ShieldCheck size={14} /> : <HardDriveDownload size={14} />}
                  </div>
                  <div className="min-w-0">
                    <h4 className={`text-[10px] font-bold truncate ${
                      isAlreadyDownloaded ? "text-emerald-400" : "text-white"
                    }`}>
                      {isAlreadyDownloaded ? "Offline Ready ✓" : "Offline Access"}
                    </h4>
                    <p className="text-[8px] text-slate-400 truncate mt-0.5">
                      {isAlreadyDownloaded ? "All cached" : "Read offline"}
                    </p>
                  </div>
                </button>
              </FeatureSpotlight>

              <Link
                href="/profile"
                className="flex items-center gap-2 p-2 bg-slate-900/40 border border-slate-800/50 rounded-xl text-left hover:scale-[1.02] hover:border-emerald-500/30 active:scale-[0.98] transition-all cursor-pointer"
              >
                <div className="p-1.5 bg-emerald-500/10 text-emerald-450 rounded-lg shrink-0">
                  <BookOpen size={14} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-bold text-white truncate">Saves Progress</h4>
                  <p className="text-[8px] text-slate-400 truncate mt-0.5">Track lessons easily</p>
                </div>
              </Link>

              <button
                onClick={handleSearchFeatureClick}
                className="flex items-center gap-2 p-2 bg-slate-900/40 border border-slate-800/50 rounded-xl text-left hover:scale-[1.02] hover:border-purple-500/30 active:scale-[0.98] transition-all cursor-pointer"
              >
                <div className="p-1.5 bg-purple-500/10 text-purple-400 rounded-lg shrink-0">
                  <Search size={14} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-bold text-white truncate">Instant Search</h4>
                  <p className="text-[8px] text-slate-400 truncate mt-0.5">Find topics quickly</p>
                </div>
              </button>

              <button
                onClick={handleTranslateFeatureClick}
                className="flex items-center gap-2 p-2 bg-slate-900/40 border border-slate-800/50 rounded-xl text-left hover:scale-[1.02] hover:border-amber-500/30 active:scale-[0.98] transition-all cursor-pointer"
              >
                <div className="p-1.5 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                  <Languages size={14} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10px] font-bold text-white truncate">Translations</h4>
                  <p className="text-[8px] text-slate-400 truncate mt-0.5">Multi-language UI</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Panel: Features List (Desktop Only) */}
          <div className="hidden lg:flex flex-col gap-4 lg:w-2/5 bg-slate-900/30 p-6 rounded-2xl border border-slate-800/30 backdrop-blur-sm">
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Course features</span>
            <div className="flex flex-col gap-3">
              <FeatureSpotlight featureId="offline-download-v1" label="Download all chapters offline!" side="right" color="blue">
                <button
                  onClick={handleOfflineFeatureClick}
                  className={`w-full text-left flex gap-3.5 items-start p-2.5 rounded-xl hover:scale-[1.02] active:scale-[0.99] border transition-all duration-300 cursor-pointer ${
                    isAlreadyDownloaded
                      ? "bg-emerald-500/5 border-emerald-500/25 hover:bg-emerald-500/10"
                      : "border-transparent hover:bg-slate-800/30 hover:border-slate-800/50"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isAlreadyDownloaded ? "bg-emerald-500/10 text-emerald-450" : "bg-blue-500/10 text-blue-400"
                  }`}>
                    {isAlreadyDownloaded ? <ShieldCheck size={18} /> : <HardDriveDownload size={18} />}
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold ${
                      isAlreadyDownloaded ? "text-emerald-450" : "text-white"
                    }`}>
                      {isAlreadyDownloaded ? "Offline Ready — All Synced ✓" : "PWA Offline Access"}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-bold">
                      {isAlreadyDownloaded
                        ? "All chapters are cached. Tap to re-sync with the latest content."
                        : "Download and study the curriculum offline without using internet."}
                    </p>
                  </div>
                </button>
              </FeatureSpotlight>

              <Link
                href="/profile"
                className="w-full text-left flex gap-3.5 items-start p-2.5 rounded-xl hover:bg-slate-800/30 hover:scale-[1.02] active:scale-[0.99] border border-transparent hover:border-slate-800/50 transition-all duration-300 cursor-pointer"
              >
                <div className="p-2.5 bg-emerald-500/10 text-emerald-450 rounded-lg shrink-0">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Automatic Progress Saves</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-bold">Keep track of your completed chapters automatically.</p>
                </div>
              </Link>

              <button
                onClick={handleSearchFeatureClick}
                className="w-full text-left flex gap-3.5 items-start p-2.5 rounded-xl hover:bg-slate-800/30 hover:scale-[1.02] active:scale-[0.99] border border-transparent hover:border-slate-800/50 transition-all duration-300 cursor-pointer"
              >
                <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-lg shrink-0">
                  <Search size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Instant Full-Text Search</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-bold">Instantly search the entire curriculum for code or concepts.</p>
                </div>
              </button>

              <button
                onClick={handleTranslateFeatureClick}
                className="w-full text-left flex gap-3.5 items-start p-2.5 rounded-xl hover:bg-slate-800/30 hover:scale-[1.02] active:scale-[0.99] border border-transparent hover:border-slate-800/50 transition-all duration-300 cursor-pointer"
              >
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                  <Languages size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Built-in Translations</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-bold">Read and learn chapters in multiple local languages seamlessly.</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Tools & Projects */}
        <div className="p-6 md:p-12 bg-slate-900/30 border border-slate-850 rounded-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-500">Everything You Need</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">Tools & Projects</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {/* Tools Panel */}
            <div className="p-6 bg-slate-950/40 border border-slate-850 rounded-2xl space-y-4 text-left">
              <h3 className="text-lg font-black flex items-center gap-2 text-white">
                🛠️ Tools & Tech
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {['VS Code', 'Git', 'GitHub', 'Chrome', 'Figma', 'Node.js', 'Express.js', 'MongoDB', 'React', 'Postman'].map((tech) => (
                  <span key={tech} className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-black text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects Panel */}
            <div className="p-6 bg-slate-950/40 border border-slate-850 rounded-2xl space-y-4 text-left">
              <h3 className="text-lg font-black flex items-center gap-2 text-white">
                📝 Real Projects
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-350 font-bold">
                {[
                  "Personal Portfolio Website",
                  "Responsive Business Website",
                  "To-Do List App",
                  "Weather Application",
                  "Notes App",
                  "E-Commerce Frontend",
                  "Blog Website",
                  "Full Stack Student Management System"
                ].map((project, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-blue-500 text-[10px]">▶</span> {project}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Features & Pedagogy */}
        <div className="p-6 md:p-12 bg-slate-900/30 border border-slate-850 rounded-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-500">Success Formula</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">Features & Pedagogy</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {/* Features list */}
            <div className="p-6 bg-slate-950/40 border border-slate-850 rounded-2xl space-y-4 text-left">
              <h3 className="text-lg font-black flex items-center gap-2 text-white">
                📚 Learning Features
              </h3>
              <ul className="space-y-4 text-xs font-bold text-slate-300">
                {[
                  { icon: "💡", title: "Concept + Practical", desc: "Every topic is backed by step-by-step logic, rules, and instant code editors." },
                  { icon: "✨", title: "Best Practices", desc: "Learn cleaner architectures, styling rules, directory structures, and workflows." },
                  { icon: "⚠️", title: "Common Mistakes", desc: "Identify and debug typical syntax and layout bugs before they block you." },
                  { icon: "🎯", title: "Interview Tips", desc: "Key theoretical questions and logic targets asked by top product recruiters." },
                  { icon: "📝", title: "MCQs & Quizzes", desc: "Verify your comprehension through phase-end challenges and logic benchmarks." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <strong className="text-white block text-sm font-black mb-0.5">{item.title}</strong>
                      <span className="text-slate-400 text-xs">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pedagogy / Formula */}
            <div className="p-6 bg-slate-950/40 border border-slate-850 rounded-2xl flex flex-col justify-between text-center relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <h3 className="text-lg font-black text-emerald-450 flex items-center justify-center gap-1.5">
                  ✔ Success Formula
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">⏰</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Consistency</span>
                  </div>
                  <span className="text-xl text-slate-500 font-black">+</span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">🚀</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Projects</span>
                  </div>
                  <span className="text-xl text-slate-500 font-black">+</span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl">📁</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Portfolio</span>
                  </div>
                </div>
                <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  = JOB READY 🏆
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Bottom CTA / Footer */}
        <div className="bg-gradient-to-br from-slate-900/40 to-slate-950 border border-slate-850 p-8 md:p-12 rounded-3xl text-center space-y-6">
          <span className="text-4xl animate-bounce inline-block">🚀</span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">Ready to Build Your Future?</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-xs md:text-sm font-bold leading-relaxed">
            Join thousands of students and start your journey to becoming a job-ready Front End Developer today.
          </p>
          <div className="pt-2">
            <Link 
              href="/course"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#39FF14] text-black font-black text-xs md:text-sm uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_20px_rgba(57,255,20,0.35)] cursor-pointer hover:scale-102 hover:bg-[#5aff3e]"
            >
              Start Learning For Free →
            </Link>
          </div>

          {/* Mini Footer */}
          <div className="pt-12 border-t border-slate-850/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-400">
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 font-black text-blue-400 text-[10px]">NS</span>
              <span className="font-black">NEXTSEM ACADEMY</span>
            </div>
            <div className="flex gap-4 text-[10px] font-black uppercase tracking-wider text-slate-500">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
            <span>© 2026 Nextsem. All rights reserved.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
