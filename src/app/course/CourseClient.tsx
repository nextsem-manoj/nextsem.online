"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProgress } from '../../context/ProgressContext';
import { auth } from '../../lib/firebase';
import { coursePhases } from '../../data/courseData';
import chapterSimulators from '../../data/chapterSimulators';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import {
  Code,
  Palette,
  Cpu,
  Cloud,
  ChevronRight,
  ChevronDown,
  Layers,
  FileCode,
  Briefcase,
  Rocket,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Target,
  Sparkles
} from 'lucide-react';

interface ModuleItem {
  id: string;
  title: string;
  subtitle: string;
  statusLabel: string;
  description: string;
  firstChapterId: string;
  color: string;
  renderIllustration: () => React.ReactNode;
}

export default function CourseClient() {
  const router = useRouter();
  const { completedChapters, totalCompleted } = useProgress();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);
  const [loadingChapterPath, setLoadingChapterPath] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const toggleModuleExpand = (modId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };


  const TARGET_TOTAL = 300;
  const overallPercent = Math.min(100, Math.round((totalCompleted / TARGET_TOTAL) * 100));

  // Stagger boot steps for the simulated upcoming lessons
  useEffect(() => {
    if (!loadingChapterPath) return;

    const interval = setInterval(() => {
      setLoadingStep((s: number) => s + 1);
    }, 600);

    const timeout = setTimeout(() => {
      router.push(`/book/${loadingChapterPath}`);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loadingChapterPath, router]);

  const handleLaunchChapter = (path: string) => {
    if (path.startsWith("cli/")) {
      router.push(`/${path}`);
    } else if (path === "cmd") {
      router.push("/cli");
    } else if (path.startsWith("html/") || path === "html" || path === "p1") {
      router.push("/html");
    } else if (path.startsWith("css/") || path === "css" || path === "p2" || path === "p2-1-selectors") {
      router.push("/css");
    } else {
      setLoadingChapterPath(path);
      setLoadingStep(0);
    }
  };

  useEffect(() => {
    setMounted(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, [router]);

  // 9 Modules Definition matching coursePhases
  const modules: ModuleItem[] = [
    {
      id: "cli",
      title: "Windows Commands Module 1",
      subtitle: "LEVEL 1 • FOUNDATION",
      statusLabel: "🪟 Windows CMD CLI Workstation",
      description: "Master standard Command Prompt operations, directory navigation, file management, piping, and network diagnostics.",
      firstChapterId: "cli/introduction-to-command-line-interface-cli-basics",
      color: "#04AA6D",
      renderIllustration: () => (
        <svg viewBox="0 0 200 200" className="w-12 h-12">
          <g transform="translate(60, 50)">
            <path d="M5,5 L28,2 L28,25 L5,25 Z" fill="#04AA6D" opacity="0.9" />
            <path d="M32,2 L55,5 L55,25 L32,25 Z" fill="#04AA6D" opacity="0.9" />
            <path d="M5,29 L28,29 L28,52 L5,49 Z" fill="#04AA6D" opacity="0.9" />
            <path d="M32,29 L55,29 L55,49 L32,52 Z" fill="#04AA6D" opacity="0.9" />
          </g>
        </svg>
      )
    },
    {
      id: "p0",
      title: "Introduction to Coding",
      subtitle: "LEVEL 2 • DEV SETUP",
      statusLabel: "Developer Setup & Git Repository",
      description: "Install runtime tools, configure VS Code workspaces, and initialize local Git version control repositories.",
      firstChapterId: "p0-setup",
      color: "#04AA6D",
      renderIllustration: () => <Layers size={24} className="text-[#04AA6D]" />
    },
    {
      id: "p1",
      title: "HTML5 Web Architecture",
      subtitle: "LEVEL 3 • HTML5 CORE",
      statusLabel: "Semantic HTML5 & Document Layout",
      description: "Structure accessible web documents using semantic elements, lists, tables, forms, media assets, and SEO markup.",
      firstChapterId: "html",
      color: "#04AA6D",
      renderIllustration: () => <Code size={24} className="text-[#04AA6D]" />
    },
    {
      id: "p2",
      title: "CSS3 Styling & Responsive Design",
      subtitle: "LEVEL 4 • DESIGN & STYLING",
      statusLabel: "CSS3 Flexbox & Grid Systems",
      description: "Design responsive styled layouts using CSS root variables, Flexbox alignments, CSS Grid, and Keyframe animations.",
      firstChapterId: "css",
      color: "#04AA6D",
      renderIllustration: () => <Palette size={24} className="text-[#04AA6D]" />
    },
    {
      id: "p3",
      title: "JavaScript Fundamentals",
      subtitle: "LEVEL 5 • JS ENGINE",
      statusLabel: "DOM Events & Logic Control",
      description: "Program dynamic browser features using functions, arrays, ES6+ methods, DOM manipulation, and LocalStorage.",
      firstChapterId: "p3-1-basics",
      color: "#04AA6D",
      renderIllustration: () => <Cpu size={24} className="text-[#04AA6D]" />
    },
    {
      id: "p4",
      title: "React Basics",
      subtitle: "LEVEL 6 • FRONTEND FRAMEWORK",
      statusLabel: "React SPAs & Context Store",
      description: "Build reactive single page applications using JSX components, state hooks, side effects, and Context API.",
      firstChapterId: "p4-1-jsx",
      color: "#04AA6D",
      renderIllustration: () => <FileCode size={24} className="text-[#04AA6D]" />
    },
    {
      id: "p5",
      title: "Backend & APIs",
      subtitle: "LEVEL 7 • SERVER ENGINEERING",
      statusLabel: "Express Servers & MongoDB",
      description: "Architect robust Node REST APIs, structure MongoDB document collections, and deploy to Firebase Hosting.",
      firstChapterId: "p5-1-node",
      color: "#04AA6D",
      renderIllustration: () => <Cloud size={24} className="text-[#04AA6D]" />
    },
    {
      id: "p6",
      title: "Capstone Projects",
      subtitle: "LEVEL 8 • PORTFOLIO PROJECTS",
      statusLabel: "Full Stack Production Web Apps",
      description: "Assemble end-to-end full stack web applications combining HTML, CSS, JavaScript, React, and Node.js backend services.",
      firstChapterId: "p6-1-portfolio",
      color: "#04AA6D",
      renderIllustration: () => <Briefcase size={24} className="text-[#04AA6D]" />
    },
    {
      id: "p7",
      title: "Placement Prep",
      subtitle: "LEVEL 9 • CAREER READY",
      statusLabel: "Technical Interviews & ATS Resume",
      description: "Ace technical mock interviews, craft high-impact ATS developer resumes, and structure freelance client pipelines.",
      firstChapterId: "p7-1-interview",
      color: "#04AA6D",
      renderIllustration: () => <Rocket size={24} className="text-[#04AA6D]" />
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D]/30">
      
      {/* ── HEADER NAVIGATION ── */}
      <header className="sticky top-0 z-40 bg-[#17181c]/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 md:px-8 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} className="text-[#04AA6D]" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Nextsem Logo" className="w-6 h-6 rounded-md border border-[#04AA6D]/30" />
          <span className="font-extrabold text-sm uppercase tracking-tight text-white">Course Curriculum</span>
        </div>

        {currentUser ? (
          <button
            onClick={async () => { try { await signOut(auth); } catch (e) { console.error(e); } }}
            className="text-xs font-bold text-slate-400 hover:text-white transition-colors border-none bg-transparent cursor-pointer"
          >
            Sign out
          </button>
        ) : (
          <Link
            href="/"
            className="text-xs font-bold text-[#04AA6D] hover:text-[#039861] transition-colors"
          >
            Sign in
          </Link>
        )}
      </header>

      {/* ── HERO BANNER ── */}
      <main className="flex-1 max-w-5xl mx-auto px-4 md:px-6 py-8 space-y-8 w-full">
        <section className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#04AA6D]/10 border border-[#04AA6D]/20 text-[#04AA6D] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Full Stack Developer Pathway</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
            Complete Course Curriculum
          </h1>

          <p className="text-slate-300 text-xs md:text-sm max-w-2xl mx-auto font-medium leading-relaxed">
            Master full stack software development step-by-step from 🪟 Windows CMD CLI and HTML5 basics to React, Node.js REST APIs, MongoDB, and production deployment.
          </p>

          <div className="pt-2">
            <Link
              href="/full-stack-web-development-roadmap"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-cyan-600 hover:from-amber-500 hover:to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <Sparkles size={14} />
              <span>Full Stack Roadmap Status Page »</span>
            </Link>
          </div>
        </section>

        {/* ── REAL-TIME PROGRESS BANNER (Only shown for returning users with progress) ── */}
        {mounted && totalCompleted > 0 && (
          <section className="bg-[#0b0c10] border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#04AA6D]" />
                <span className="text-xs font-extrabold text-white uppercase tracking-wider">Overall Progress</span>
              </div>
              <span className="text-xs font-bold text-slate-300">
                <strong className="text-white font-extrabold">{totalCompleted}</strong> / {TARGET_TOTAL} lessons completed ({overallPercent}%)
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-3 bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#04AA6D] rounded-full transition-all duration-500"
                style={{ width: `${Math.max(overallPercent, 1)}%` }}
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                href="/cli"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#04AA6D]/30 bg-[#04AA6D]/10 text-[#04AA6D] text-xs font-bold transition-all hover:bg-[#04AA6D]/20"
              >
                <CheckCircle2 size={13} />
                🪟 Windows CLI Module
              </Link>
              <Link
                href="/html"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-[#17181c] text-white text-xs font-bold transition-all hover:border-[#04AA6D]"
              >
                <CheckCircle2 size={13} className="text-[#04AA6D]" />
                🌐 HTML5 Web Module
              </Link>
              <Link
                href="/git"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-[#17181c] text-white text-xs font-bold transition-all hover:border-[#04AA6D]"
              >
                <CheckCircle2 size={13} className="text-[#04AA6D]" />
                ⚡ Git & Terminal Module
              </Link>
            </div>
          </section>
        )}


        {/* ── MODULE CARDS LIST ── */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-2">
              <Target size={18} className="text-[#04AA6D]" />
              <span>Syllabus Modules</span>
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const allExpanded = modules.every(m => expandedModules[m.id]);
                  const nextState: Record<string, boolean> = {};
                  modules.forEach(m => {
                    nextState[m.id] = !allExpanded;
                  });
                  setExpandedModules(nextState);
                }}
                className="text-xs font-bold text-[#04AA6D] hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>{modules.every(m => expandedModules[m.id]) ? "Collapse All Modules ▲" : "Expand All Modules ▼"}</span>
              </button>
              <span className="text-xs font-bold text-slate-400">9 Core Levels</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modules.map((mod, index) => {
              const matchingPhase = coursePhases.find(p => p.id === mod.id.toUpperCase());
              const topicsList = matchingPhase?.topics || [];
              const completedTopics = topicsList.filter(t => completedChapters[t.path]);
              const modPercentComplete = topicsList.length > 0 ? Math.round((completedTopics.length / topicsList.length) * 100) : 0;
              const isExpanded = !!expandedModules[mod.id];

              return (
                <div
                  key={mod.id}
                  className="bg-[#0b0c10] border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg hover:border-[#04AA6D]/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Header line */}
                    <div 
                      onClick={() => toggleModuleExpand(mod.id)}
                      className="flex items-center justify-between cursor-pointer select-none group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-[#17181c] border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-[#04AA6D]/50 transition-colors">
                          {mod.renderIllustration()}
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] font-black text-[#04AA6D] uppercase tracking-widest block">
                            {mod.subtitle}
                          </span>
                          <h3 className="text-base font-bold text-white uppercase tracking-tight mt-0.5 truncate group-hover:text-[#04AA6D] transition-colors">
                            {mod.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-extrabold text-[#04AA6D] bg-[#04AA6D]/10 border border-[#04AA6D]/20 px-2.5 py-1 rounded-full">
                          {modPercentComplete}%
                        </span>
                        <div className="p-1 rounded-lg bg-[#17181c] border border-slate-800 text-slate-400 group-hover:text-white">
                          <ChevronDown size={16} className={`transform transition-transform ${isExpanded ? 'rotate-180 text-[#04AA6D]' : ''}`} />
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {mod.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="h-1.5 bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#04AA6D] rounded-full transition-all duration-300"
                        style={{ width: `${modPercentComplete}%` }}
                      />
                    </div>
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => toggleModuleExpand(mod.id)}
                    className="w-full flex items-center justify-between pt-2.5 border-t border-slate-800/80 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="text-[10px] font-black text-[#04AA6D] uppercase tracking-widest">
                      {isExpanded ? `Hide Lessons (${topicsList.length})` : `Show Lessons (${topicsList.length})`}
                    </span>
                    <ChevronDown size={14} className={`transform transition-transform ${isExpanded ? 'rotate-180 text-[#04AA6D]' : 'text-slate-500'}`} />
                  </button>

                  {/* Chapter items preview checklist (only visible when expanded) */}
                  {isExpanded && (
                    <div className="space-y-2 pt-2 border-t border-slate-800/60 animate-in fade-in slide-in-from-top-1 duration-200">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">
                        Lessons Checklist ({topicsList.length} Lessons):
                      </span>

                      <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1 custom-scrollbar">
                        {topicsList.map((topic, tIdx) => {
                          const isChapterCompleted = !!completedChapters[topic.path];
                          const isCurrent = !isChapterCompleted && (tIdx === 0 || !!completedChapters[topicsList[tIdx - 1]?.path]);

                          return (
                            <button
                              key={topic.path}
                              onClick={() => handleLaunchChapter(topic.path)}
                              className={`w-full p-2 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                                isCurrent
                                  ? "bg-[#17181c] border-[#04AA6D] text-white"
                                  : isChapterCompleted
                                  ? "bg-[#0b0c10] border-slate-800 text-slate-300 hover:border-slate-700"
                                  : "bg-[#17181c]/50 border-slate-800/80 text-slate-400 hover:border-slate-700"
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0 pr-2">
                                <div className="shrink-0">
                                  {isChapterCompleted ? (
                                    <div className="w-4 h-4 rounded-full bg-[#04AA6D]/20 border border-[#04AA6D] flex items-center justify-center text-[#04AA6D] text-[9px] font-bold">
                                      ✓
                                    </div>
                                  ) : isCurrent ? (
                                    <div className="w-4 h-4 rounded-full border border-[#04AA6D] flex items-center justify-center">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] animate-pulse" />
                                    </div>
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-slate-700 bg-transparent" />
                                  )}
                                </div>

                                <span className="text-xs font-bold truncate">
                                  {topic.label}
                                </span>
                              </div>

                              <ChevronRight size={14} className="text-slate-500 shrink-0" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0b0c10] border-t border-slate-800 py-6 px-4 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto space-y-2">
          <p className="font-bold text-white uppercase tracking-wider">
            Nextsem Academy — India&apos;s #1 Free Multilingual Platform
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold pt-1">
            <Link href="/privacy" className="text-[#04AA6D] hover:underline">📜 Privacy Policy</Link>
            <Link href="/terms" className="text-[#04AA6D] hover:underline">⚖️ Terms of Service</Link>
            <Link href="/contact" className="text-[#04AA6D] hover:underline">📞 Contact Support</Link>
            <Link href="/about" className="text-[#04AA6D] hover:underline">ℹ️ About Us</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-[#04AA6D] hover:underline font-bold">🗺️ XML Sitemap</a>
          </div>
        </div>
      </footer>

      {/* ── WINDOWS 11 BOOT SIMULATION OVERLAY ── */}
      {loadingChapterPath && (() => {
        const sim = chapterSimulators.find(s => s.chapterId === loadingChapterPath);
        const lessonsList = sim ? sim.lessons : [];
        const activePhase = coursePhases.find(p => p.topics.some(t => t.path === loadingChapterPath));

        return (
          <div className="fixed inset-0 z-[300] bg-[#17181c] flex flex-col items-center justify-between py-16 px-6 select-none font-mono">
            {/* Windows 11 Logo Simulation */}
            <div className="flex flex-col items-center gap-3 mt-8">
              <div className="grid grid-cols-2 gap-1 w-12 h-12 opacity-90 animate-pulse">
                <span className="w-5 h-5 bg-[#04AA6D] rounded-sm" />
                <span className="w-5 h-5 bg-[#04AA6D] rounded-sm" />
                <span className="w-5 h-5 bg-[#04AA6D] rounded-sm" />
                <span className="w-5 h-5 bg-[#04AA6D] rounded-sm" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-[#04AA6D]">
                🪟 WINDOWS 11 SIMULATOR
              </span>
            </div>

            {/* Orbit animation */}
            <div className="flex flex-col items-center gap-6 my-auto">
              <div className="flex flex-col items-center gap-4 text-center max-w-sm">
                <span className="text-xs font-bold text-white">
                  Loading {activePhase?.id || "Level"} Chapter Simulator...
                </span>

                <div className="w-64 bg-[#0b0c10] border border-slate-800 rounded-xl p-4 text-xs text-slate-300 text-left space-y-1.5 min-h-[120px]">
                  {lessonsList.slice(0, 4).map((lesson, idx) => {
                    const isVisible = loadingStep >= idx;
                    if (!isVisible) return null;
                    return (
                      <div key={lesson.id} className="flex items-center gap-2 text-white">
                        <span className="text-[#04AA6D]">✓</span>
                        <span className="truncate">{lesson.title}</span>
                      </div>
                    );
                  })}
                  {loadingStep >= lessonsList.length && (
                    <div className="text-[#04AA6D] font-bold text-xs mt-1 text-center animate-pulse">
                      READY — LAUNCHING 🚀
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">
              🪟 Windows 11 Command Prompt Simulation
            </div>
          </div>
        );
      })()}
    </div>
  );
}

