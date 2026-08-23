"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';
import { auth, signInWithGoogle } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { coursePhases } from '@/data/courseData';
import searchIndex from '@/data/searchIndex.json';
import { getChapterSimulator } from '@/data/chapterSimulators';
import { ThemeToggle } from '@/components/ThemeToggle';
import FullStackRoadmap from '@/components/FullStackRoadmap';
import StudentProjectsSection from '@/components/StudentProjectsSection';
import CourseCarouselSection from '@/components/CourseCarouselSection';
import Footer from '@/components/Footer';
import { 
  Layers, Cpu, Code, Palette, Cloud, Briefcase, 
  Rocket, BookOpen, ChevronRight, Play, CheckCircle, 
  Zap, LogIn, LogOut, Terminal, Star, Search, Menu, X, 
  ChevronDown, Award, ExternalLink, RefreshCw, Sparkles,
  Database, Server, Globe, ShieldCheck, CheckCircle2, ArrowRight
} from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo?: string;
}

const moduleIcons: Record<string, React.ReactNode> = {
  "CLI": <Terminal size={18} className="text-emerald-400" />,
  "P0": <Layers size={18} className="text-purple-400" />,
  "P1": <Code size={18} className="text-blue-400" />,
  "P2": <Palette size={18} className="text-teal-400" />,
  "P3": <Cpu size={18} className="text-amber-400" />,
  "P4": <Code size={18} className="text-red-400" />,
  "P5": <Cloud size={18} className="text-sky-400" />,
  "P6": <Briefcase size={18} className="text-slate-400" />,
  "P7": <Rocket size={18} className="text-pink-400" />
};

export default function HomeClient() {
  const router = useRouter();
  const { completedChapters } = useProgress();
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  
  // Navigation states
  const [tutorialsDropdownOpen, setTutorialsDropdownOpen] = useState(false);
  const [exercisesDropdownOpen, setExercisesDropdownOpen] = useState(false);
  const [showAllPhases, setShowAllPhases] = useState(false);

  
  interface SearchItem {
    id: string;
    title: string;
    content: string;
    phase: string;
    duration: string;
    color: string;
    icon: string;
  }

  // Search states
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [navSearchQuery, setNavSearchQuery] = useState('');
  const [heroSearchResults, setHeroSearchResults] = useState<SearchItem[]>([]);
  const [navSearchResults, setNavSearchResults] = useState<SearchItem[]>([]);
  
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);

  const heroSearchRef = useRef<HTMLDivElement>(null);
  const navSearchRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (heroSearchRef.current && !heroSearchRef.current.contains(event.target as Node)) {
        setHeroSearchResults([]);
      }
      if (navSearchRef.current && !navSearchRef.current.contains(event.target as Node)) {
        setNavSearchResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Authenticated state listener
  useEffect(() => {
    const handleAuthChange = () => {
      const saved = localStorage.getItem('nextsem_user');
      if (saved) {
        try {
          setCurrentUser(JSON.parse(saved));
        } catch (e) {
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
    };
    handleAuthChange();
    window.addEventListener("nextsem_auth_changed", handleAuthChange);
    return () => window.removeEventListener("nextsem_auth_changed", handleAuthChange);
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error("Sign-In Error: ", err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("nextsem_user");
      window.dispatchEvent(new Event("nextsem_auth_changed"));
    } catch (e) {
      console.error("Logout failed:", e);
    }
  };

  const handleLaunchChapter = (path: string) => {
    let url = path.startsWith("cli/") || path.startsWith("html/") ? `/${path}` : `/book/${path}`;
    if (path === "cmd" || path === "cli") {
      url = "/cli";
    } else if (path === "p0-4-git") {
      url = "/git";
    }

    const hasCode = path === "cmd" || path === "p0-4-git" || !!getChapterSimulator(path);

    if (hasCode) {
      window.open(url, '_blank');
    } else {
      router.push(url);
    }
  };

  // Search logic
  const performSearch = (queryStr: string, setResults: React.Dispatch<React.SetStateAction<SearchItem[]>>) => {
    if (!queryStr.trim()) {
      setResults([]);
      return;
    }
    const cleanQuery = queryStr.toLowerCase();
    const matches = (searchIndex as SearchItem[]).filter((item: SearchItem) => 
      item.title.toLowerCase().includes(cleanQuery) || 
      item.content.toLowerCase().includes(cleanQuery)
    ).slice(0, 6);
    setResults(matches);
  };

  useEffect(() => {
    performSearch(heroSearchQuery, setHeroSearchResults);
  }, [heroSearchQuery]);

  useEffect(() => {
    performSearch(navSearchQuery, setNavSearchResults);
  }, [navSearchQuery]);

  const handleHeroSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (heroSearchQuery.trim()) {
      window.dispatchEvent(new CustomEvent("open_search", { 
        detail: { query: heroSearchQuery.trim() } 
      }));
      setHeroSearchQuery('');
    }
  };

  const handleNavSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (navSearchQuery.trim()) {
      window.dispatchEvent(new CustomEvent("open_search", { 
        detail: { query: navSearchQuery.trim() } 
      }));
      setNavSearchQuery('');
    }
  };

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col font-sans selection:bg-[#04AA6D]/30 transition-colors duration-200">
      
      {/* ── TOP NAVIGATION BAR (Nextsem Academy Style) ── */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-[54px] flex items-center justify-between">
          
          {/* Left Side Branding and Links */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link href="/" className="flex items-center gap-2 select-none group">
              <img src="/logo.svg" alt="Nextsem Logo" className="w-8 h-8 rounded-lg border border-emerald-500/20 group-hover:scale-105 transition-transform select-none" />
              <span className="font-black text-base tracking-tight text-slate-800 dark:text-white uppercase">
                Nextsem<span className="text-[#04AA6D] lowercase font-bold">.online</span>
              </span>
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-700 dark:text-slate-350">
              
              {/* Tutorials Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setTutorialsDropdownOpen(!tutorialsDropdownOpen);
                    setExercisesDropdownOpen(false);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
                >
                  Tutorials <ChevronDown size={14} className={`transform transition-transform ${tutorialsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {tutorialsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-4 w-[420px] z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-2 px-1">
                        Systems & Basics
                      </span>
                      <div className="flex flex-col gap-1 text-xs">
                        <button 
                          onClick={() => { handleScrollToId('setup-section'); setTutorialsDropdownOpen(false); }} 
                          className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl hover:text-[#04AA6D] transition-all text-left font-bold"
                        >
                          <span>⚙️</span>
                          <span className="truncate">Setup & Software</span>
                        </button>
                        <button 
                          onClick={() => { handleScrollToId('setup-section'); setTutorialsDropdownOpen(false); }} 
                          className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl hover:text-[#04AA6D] transition-all text-left font-bold"
                        >
                          <span>🌿</span>
                          <span className="truncate">Git & Version Control</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-2 px-1">
                        Web Development
                      </span>
                      <div className="flex flex-col gap-1 text-xs">
                        <button 
                          onClick={() => { handleScrollToId('html-section'); setTutorialsDropdownOpen(false); }} 
                          className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl hover:text-[#04AA6D] transition-all text-left font-bold"
                        >
                          <span>📝</span>
                          <span className="truncate">HTML Tutorials</span>
                        </button>
                        <button 
                          onClick={() => { handleScrollToId('css-section'); setTutorialsDropdownOpen(false); }} 
                          className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl hover:text-[#04AA6D] transition-all text-left font-bold"
                        >
                          <span>🎨</span>
                          <span className="truncate">CSS Styling & Flex</span>
                        </button>
                        <button 
                          onClick={() => { handleScrollToId('js-section'); setTutorialsDropdownOpen(false); }} 
                          className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl hover:text-[#04AA6D] transition-all text-left font-bold"
                        >
                          <span>⚡</span>
                          <span className="truncate">JavaScript Coding</span>
                        </button>
                        <button 
                          onClick={() => { handleScrollToId('react-section'); setTutorialsDropdownOpen(false); }} 
                          className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl hover:text-[#04AA6D] transition-all text-left font-bold"
                        >
                          <span>⚛️</span>
                          <span className="truncate">React UI Library</span>
                        </button>
                        <button 
                          onClick={() => { handleScrollToId('backend-section'); setTutorialsDropdownOpen(false); }} 
                          className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl hover:text-[#04AA6D] transition-all text-left font-bold col-span-2"
                        >
                          <span>🔌</span>
                          <span className="truncate">Node.js & Express</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Exercises Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setExercisesDropdownOpen(!exercisesDropdownOpen);
                    setTutorialsDropdownOpen(false);
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
                >
                  Exercises <ChevronDown size={14} className={`transform transition-transform ${exercisesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {exercisesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-2xl p-3 flex flex-col gap-1.5 w-[240px] z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block px-2 mb-1.5">
                      Interactive Tools
                    </span>
                    <Link href="/cli" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>🪟</span>
                      <span>Windows CLI</span>
                    </Link>
                    <Link href="/simulator" target="_blank" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>🖥️</span>
                      <span>Windows 11 Simulator</span>
                    </Link>
                    <Link href="/git" target="_blank" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>🌿</span>
                      <span>Git Simulator</span>
                    </Link>
                    <Link href="/playground" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>💻</span>
                      <span>Code Sandbox</span>
                    </Link>
                    <Link href="/bca" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>🎓</span>
                      <span>BCA Semester Hub</span>
                    </Link>
                    <Link href="/jobs" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-blue-400 text-xs font-bold transition-all">
                      <span>💼</span>
                      <span>BCA/MCA/B.Tech Jobs</span>
                    </Link>
                    <button onClick={() => { handleScrollToId('exercises-section'); setExercisesDropdownOpen(false); }} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all text-left">
                      <span>🏆</span>
                      <span>Course Quizzes</span>
                    </button>
                  </div>
                )}
              </div>

              <Link href="/curriculum" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer">
                <Rocket size={14} className="text-[#04AA6D]" />
                <span>Curriculum</span>
              </Link>
              <Link href="/course" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer">
                <BookOpen size={14} className="text-[#04AA6D]" />
                <span>Courses</span>
              </Link>

            </nav>
          </div>

          {/* Right Side Tools & Auth */}
          <div className="flex items-center gap-3">
            
            {/* Header Search Box */}
            <div ref={navSearchRef} className="relative hidden lg:block w-[180px] xl:w-[240px]">
              <form onSubmit={handleNavSearchSubmit} className="relative">
                <input 
                  type="text"
                  placeholder="Search tutorials..."
                  value={navSearchQuery}
                  onChange={(e) => setNavSearchQuery(e.target.value)}
                  className="w-full h-8 pl-8 pr-3 text-xs bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-full focus:outline-none focus:border-[#04AA6D] focus:ring-1 focus:ring-[#04AA6D] dark:text-white"
                />
                <Search size={14} className="absolute left-3 top-2 text-slate-400" />
              </form>

              {(navSearchResults.length > 0 || navSearchQuery.trim()) && (
                <div className="absolute top-full right-0 mt-1.5 w-[300px] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl max-h-[350px] overflow-y-auto z-50 text-left p-2 animate-in fade-in slide-in-from-top-1">
                  {navSearchResults.length > 0 && (
                    <>
                      {navSearchResults.map((result) => (
                        <button
                          key={result.id}
                          onClick={() => {
                            handleLaunchChapter(result.id);
                            setNavSearchQuery('');
                          }}
                          className="w-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg text-left transition-colors flex items-start gap-2 border-b border-slate-100 dark:border-slate-900 last:border-b-0"
                        >
                          <span className="text-sm mt-0.5">{result.icon || '📄'}</span>
                          <div>
                            <div className="text-xs font-bold text-slate-800 dark:text-white">{result.title}</div>
                            <div className="text-[10px] text-slate-400 truncate max-w-[230px]">{result.duration || '5 min read'} • {result.phase || 'Chapter'}</div>
                          </div>
                        </button>
                      ))}
                    </>
                  )}

                  {navSearchQuery.trim() && (
                    <div className="pt-1.5 border-t border-slate-150 dark:border-slate-900 mt-1">
                      <button
                        onClick={() => {
                          window.open(`https://www.google.com/search?q=${encodeURIComponent(navSearchQuery.trim())}`, '_blank', 'noopener,noreferrer');
                          setNavSearchQuery('');
                        }}
                        className="w-full p-2 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-lg text-left transition-colors flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs"
                      >
                        <Search size={12} className="text-blue-500 shrink-0" />
                        <span>Search &ldquo;{navSearchQuery}&rdquo; on Google Search</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Theme Toggle Button removed */}

            {/* Streak & XP (if logged in) */}
            {currentUser && (
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex items-center gap-1 text-[11px] font-black text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                  <Zap size={12} className="text-amber-500 fill-amber-500 animate-pulse" />
                  <span>🔥 5 Days</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-black text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  <span>🏆 1,480 XP</span>
                </div>
              </div>
            )}

            {/* Sign In / User menu */}
            <div>
              {currentUser ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-lg">
                    {currentUser.photo ? (
                      <img src={currentUser.photo} alt="" className="w-5 h-5 rounded-full object-cover border border-emerald-500/20" />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-[#04AA6D] text-white flex items-center justify-center font-black text-[9px]">
                        {currentUser.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200 hidden sm:inline max-w-[70px] truncate">{currentUser.name.split(" ")[0]}</span>
                  </div>
                  <button 
                    onClick={handleSignOut}
                    className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
                    title="Sign Out"
                  >
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handleSignIn}
                  className="flex items-center gap-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-md shadow-[#04AA6D]/10 cursor-pointer"
                >
                  <LogIn size={13} />
                  <span>Sign In</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* ── HERO STAGE: FULL STACK WEB DEVELOPER PATHWAY ── */}
      <section className="bg-theme-bg text-theme-text py-10 sm:py-20 px-4 sm:px-6 relative border-b border-theme-border overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-10 pointer-events-none bg-[radial-gradient(#04AA6D_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#04AA6D]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          {/* Pathway Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider shadow-lg">
            <Sparkles size={14} className="text-[#04AA6D] animate-pulse" />
            <span>100% Free Software Engineering Pathway • Zero Paywalls</span>
          </div>

          {/* Master Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight text-white max-w-4xl mx-auto">
            Become a Job-Ready <span className="text-[#04AA6D]">Full Stack</span> Web Developer
          </h1>

          {/* Subtitle / Clear Developer English Guidance */}
          <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Master modern web development step-by-step. Start with your first Windows terminal command and HTML structure, progress through modern CSS layouts and JavaScript logic, build full-stack React and Node.js applications, manage databases, and deploy real-world projects to the cloud.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/html/learn-html-web-free-lessons-what-is-the-internet"
              className="px-6 py-3.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#04AA6D]/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <BookOpen size={17} />
              <span>Start Step 1: HTML5 Web Basics »</span>
            </Link>
            <Link
              href="/cli"
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Terminal size={17} />
              <span>Developer Terminal & CLI »</span>
            </Link>
            <Link
              href="/full-stack-web-development-roadmap"
              className="px-6 py-3.5 bg-gradient-to-r from-amber-600 to-cyan-600 hover:from-amber-500 hover:to-cyan-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Rocket size={17} />
              <span>Full Stack 2026 Roadmap »</span>
            </Link>
          </div>

          {/* Live Windows CMD Terminal Preview Box */}
          <div className="max-w-2xl mx-auto mt-8 text-left rounded-2xl border border-slate-800 bg-[#0c1328] shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono font-bold text-slate-400 ml-2">🪟 Windows 11 Command Prompt — Project Workspace</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">LIVE CMD</span>
            </div>
            <div className="p-4 font-mono text-xs text-slate-300 space-y-1.5 select-all overflow-x-auto">
              <p className="text-slate-400">Microsoft Windows [Version 10.0.22631.4169]</p>
              <p className="text-slate-400">(c) Microsoft Corporation. All rights reserved.</p>
              <p className="pt-1"><span className="text-[#04AA6D]">C:\Users\Developer&gt;</span> mkdir nextsem-portfolio</p>
              <p><span className="text-[#04AA6D]">C:\Users\Developer&gt;</span> cd nextsem-portfolio</p>
              <p><span className="text-[#04AA6D]">C:\Users\Developer\nextsem-portfolio&gt;</span> echo ^&lt;h1^&gt;Hello Full Stack^&lt;/h1^&gt; &gt; index.html</p>
              <p><span className="text-[#04AA6D]">C:\Users\Developer\nextsem-portfolio&gt;</span> code .</p>
              <p className="text-emerald-400 font-bold">[SUCCESS] Workspace opened in VS Code. Ready to build!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8-STAGE SEQUENTIAL FULL STACK LEARNING PATHWAY ── */}
      <section id="pathway" className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="text-center space-y-2 mb-10">
          <span className="px-3.5 py-1 rounded-full bg-[#04AA6D]/15 text-[#04AA6D] border border-[#04AA6D]/30 text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            <span>Structured Step-by-Step Curriculum</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 8-Stage Full Stack Developer Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Follow this exact sequential path to eliminate all confusion. Master HTML web structures, CSS styling, JavaScript logic, the developer terminal, Git, React, Node.js, and Cloud deployment.
          </p>
        </div>

        {/* 8-Stage Grid Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Step 1: HTML5 */}
          <div className="p-5 bg-[#0c1328] border border-slate-800 hover:border-[#04AA6D] rounded-2xl transition-all shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#04AA6D]/20 text-[#04AA6D] font-black text-xs flex items-center justify-center border border-[#04AA6D]/40">01</span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">98+ Lessons</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-[#04AA6D] transition-colors flex items-center gap-2">
                  <Code size={18} className="text-[#04AA6D]" />
                  <span>🧱 HTML5 Architecture</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Web anatomy, semantic tags, forms, tables, inputs, accessibility, DOM hierarchy, and HTTP requests.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <Link href="/html" className="text-xs font-bold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] flex items-center gap-1">
                <span>Start Module 01</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/html/quiz" className="text-[11px] font-bold text-slate-400 hover:text-white">HTML Quiz ➔</Link>
            </div>
          </div>

          {/* Step 2: CSS3 UI */}
          <div className="p-5 bg-[#0c1328] border border-slate-800 hover:border-teal-500 rounded-2xl transition-all shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 font-black text-xs flex items-center justify-center border border-teal-500/40">02</span>
                <span className="text-[10px] font-bold text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/80">Interactive Labs</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-teal-400 transition-colors flex items-center gap-2">
                  <Palette size={18} className="text-teal-400" />
                  <span>🎨 CSS3 & Modern UI</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Flexbox layouts, CSS Grid systems, custom properties, keyframe animations, and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <Link href="/candle-flame-animation" className="text-xs font-bold text-teal-400 hover:text-teal-300 underline decoration-teal-400 flex items-center gap-1">
                <span>CSS Flame Lab</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/course/projects" className="text-[11px] font-bold text-slate-400 hover:text-white">15 Labs ➔</Link>
            </div>
          </div>

          {/* Step 3: JavaScript ES6+ */}
          <div className="p-5 bg-[#0c1328] border border-slate-800 hover:border-amber-500 rounded-2xl transition-all shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-black text-xs flex items-center justify-center border border-amber-500/40">03</span>
                <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/80">Core Logic</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                  <Zap size={18} className="text-amber-400" />
                  <span>⚡ JavaScript (ES6+)</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Variables, arrow functions, arrays, DOM manipulation, event listeners, and async API fetching.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <Link href="/playground" className="text-xs font-bold text-amber-400 hover:text-amber-300 underline decoration-amber-400 flex items-center gap-1">
                <span>JS Playground</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/rain-effect-animation" className="text-[11px] font-bold text-slate-400 hover:text-white">Canvas Lab ➔</Link>
            </div>
          </div>

          {/* Step 4: Windows CMD & Tooling */}
          <div className="p-5 bg-[#0c1328] border border-slate-800 hover:border-blue-500 rounded-2xl transition-all shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-black text-xs flex items-center justify-center border border-blue-500/40">04</span>
                <span className="text-[10px] font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/80">100+ Lessons</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Terminal size={18} className="text-blue-400" />
                  <span>🪟 Developer Terminal</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Terminal navigation, directory creation, drive switching, PATH variables, and developer tooling.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <Link href="/cli" className="text-xs font-bold text-blue-400 hover:text-blue-300 underline decoration-blue-400 flex items-center gap-1">
                <span>Start Module 04</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/cli/preview" className="text-[11px] font-bold text-slate-400 hover:text-white">Simulator ➔</Link>
            </div>
          </div>

          {/* Step 5: Git & GitHub */}
          <div className="p-5 bg-[#0c1328] border border-slate-800 hover:border-purple-500 rounded-2xl transition-all shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 font-black text-xs flex items-center justify-center border border-purple-500/40">05</span>
                <span className="text-[10px] font-bold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/80">Version Control</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-purple-400 transition-colors flex items-center gap-2">
                  <Globe size={18} className="text-purple-400" />
                  <span>🌿 Git & GitHub Lab</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  git init, staging commits, branches, pull requests, merge conflicts, and GitHub collaboration.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <Link href="/git" className="text-xs font-bold text-purple-400 hover:text-purple-300 underline decoration-purple-400 flex items-center gap-1">
                <span>Explore Git Lab</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/git/terminal" className="text-[11px] font-bold text-slate-400 hover:text-white">Simulator ➔</Link>
            </div>
          </div>

          {/* Step 6: React & Next.js */}
          <div className="p-5 bg-[#0c1328] border border-slate-800 hover:border-cyan-500 rounded-2xl transition-all shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-black text-xs flex items-center justify-center border border-cyan-500/40">06</span>
                <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/80">Modern Frontend</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Layers size={18} className="text-cyan-400" />
                  <span>⚛️ React & Next.js</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Components, JSX, hooks (useState/useEffect), props, App Router, SSR, and Server Components.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <Link href="/curriculum" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400 flex items-center gap-1">
                <span>React Modules</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/course" className="text-[11px] font-bold text-slate-400 hover:text-white">Curriculum ➔</Link>
            </div>
          </div>

          {/* Step 7: Backend Node.js */}
          <div className="p-5 bg-[#0c1328] border border-slate-800 hover:border-emerald-500 rounded-2xl transition-all shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-black text-xs flex items-center justify-center border border-emerald-500/40">07</span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">API Engineering</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Server size={18} className="text-emerald-400" />
                  <span>🔌 Node.js & REST APIs</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Node runtime, Express routing, HTTP middleware, JSON payloads, CORS, and JWT authentication.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <Link href="/curriculum" className="text-xs font-bold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] flex items-center gap-1">
                <span>Node.js Guide</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/full-stack-web-development-roadmap" className="text-[11px] font-bold text-slate-400 hover:text-white">Roadmap ➔</Link>
            </div>
          </div>

          {/* Step 8: Databases & Cloud */}
          <div className="p-5 bg-[#0c1328] border border-slate-800 hover:border-indigo-500 rounded-2xl transition-all shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 font-black text-xs flex items-center justify-center border border-indigo-500/40">08</span>
                <span className="text-[10px] font-bold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/80">Cloud Production</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <Database size={18} className="text-indigo-400" />
                  <span>🗄️ Databases & Cloud</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  MongoDB, SQL CRUD queries, Firebase Cloud backend, and production deployment on Vercel.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <Link href="/full-stack-web-development-roadmap" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 underline decoration-indigo-400 flex items-center gap-1">
                <span>Deploy Projects</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/course/projects" className="text-[11px] font-bold text-slate-400 hover:text-white">Portfolio ➔</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── FRONT PAGE CAROUSEL 1: INTERACTIVE DEVELOPER MINI-PROJECTS ── */}
      <section className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto w-full border-t border-slate-800/80">
        <StudentProjectsSection />
      </section>

      {/* ── FRONT PAGE CAROUSEL 2: STRUCTURED SUBJECT COURSES ── */}
      <section className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto w-full border-t border-slate-800/80">
        <CourseCarouselSection />
      </section>

      {/* ── PLATFORM PEDAGOGY PILLARS (WHY LEARN HERE?) ── */}
      <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto w-full border-t border-slate-800/80">
        <div className="text-center space-y-2 mb-10">
          <span className="px-3.5 py-1 rounded-full bg-[#04AA6D]/15 text-[#04AA6D] border border-[#04AA6D]/30 text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
            <ShieldCheck size={12} />
            <span>Developer-First Platform Standards</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Real-World Software Engineering
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every feature on Nextsem Academy is engineered to give aspiring developers the highest-efficiency learning experience without distractions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0c1328] border border-slate-800 rounded-2xl shadow-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#04AA6D]/20 text-[#04AA6D] flex items-center justify-center font-black">
              <Terminal size={22} />
            </div>
            <h3 className="text-lg font-extrabold text-white">1-to-1 Windows 11 Screenshots</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every lesson includes real Windows Command Prompt and VS Code screenshots so you can practice on your PC while verifying line-by-line against your mobile screen.
            </p>
          </div>

          <div className="p-6 bg-[#0c1328] border border-slate-800 rounded-2xl shadow-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black">
              <Zap size={22} />
            </div>
            <h3 className="text-lg font-extrabold text-white">Zero Paywalls & Forced Sign-ups</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              No mandatory credit cards or gated chapters. Immediately start reading tutorials, copying terminal commands, and testing interactive simulation labs.
            </p>
          </div>

          <div className="p-6 bg-[#0c1328] border border-slate-800 rounded-2xl shadow-xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
              <Code size={22} />
            </div>
            <h3 className="text-lg font-extrabold text-white">Complete Code Standard</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every code example is fully complete and ready to run. We never use truncated snippets or missing tags, ensuring your code works on the very first try.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPACT PHASE TOGGLE BANNER ── */}
      <section className="bg-slate-900 border-y border-slate-800 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#17181c] border border-slate-800 rounded-2xl shadow-xl">
            <div className="text-left space-y-1">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <BookOpen size={18} className="text-[#04AA6D]" />
                <span>Curriculum Modules & Phase Previews</span>
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                Explore HTML5, CSS3, JavaScript, React, Node.js, and Windows CLI subject modules.
              </p>
            </div>
            <button
              onClick={() => setShowAllPhases(!showAllPhases)}
              className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>{showAllPhases ? "Hide Course Phases" : "View All 9 Course Phases"}</span>
              <ChevronDown size={14} className={`transform transition-transform ${showAllPhases ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {showAllPhases && (
        <>
          {/* ── FULL STACK WEB DEVELOPER CAREER ROADMAP ── */}
          <section className="bg-slate-900 py-12 px-4 border-b border-slate-800">
            <div className="max-w-5xl mx-auto text-left space-y-6">
              <div className="text-center space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-[#04AA6D]/15 text-[#04AA6D] border border-[#04AA6D]/30 text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                  <Sparkles size={12} />
                  <span>Complete Career Path</span>
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Full Stack Web Developer Roadmap
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Follow our structured, step-by-step career path to master modern web development — from basic HTML tags to full-stack software engineering.
                </p>
              </div>

              {/* Roadmap Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                
                {/* Stage 1: Frontend Fundamentals */}
                <div className="p-6 bg-[#16222f] border border-slate-700/60 rounded-2xl shadow-xl hover:border-[#04AA6D]/60 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-[#04AA6D]/20 text-[#04AA6D] font-black text-xs flex items-center justify-center border border-[#04AA6D]/40">
                        01
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-md">
                        Step 1 • Foundation
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">
                        Frontend Web Fundamentals
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Master document structuring with HTML5, visual styling with CSS, and interactive logic with JavaScript.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">HTML5</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">CSS3</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">JavaScript ES6+</span>
                    </div>
                  </div>
                  <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <Link
                      href="/html"
                      className="px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Start HTML Tutorials »</span>
                    </Link>
                    <Link
                      href="/html/quiz"
                      className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
                    >
                      Take HTML Quiz ➔
                    </Link>
                  </div>
                </div>

                {/* Stage 2: Command Line & Version Control */}
                <div className="p-6 bg-[#16222f] border border-slate-700/60 rounded-2xl shadow-xl hover:border-indigo-500/60 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 font-black text-xs flex items-center justify-center border border-indigo-500/40">
                        02
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 border border-indigo-800 px-2.5 py-1 rounded-md">
                        Step 2 • Workflows
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white group-hover:text-indigo-400 transition-colors">
                        Command Line & Git Version Control
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Learn terminal commands in Windows Command Prompt and track project code versions using Git & GitHub.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">Windows CMD</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">Git Basics</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">GitHub Repos</span>
                    </div>
                  </div>
                  <div className="pt-6 mt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href="/cli"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Learn Windows CMD »</span>
                      </Link>
                      <Link
                        href="/cli/most-useful-cmd-commands-in-windows"
                        className="px-3.5 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Essential CMD Commands 🔥</span>
                      </Link>
                    </div>
                    <Link
                      href="/git/terminal"
                      className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
                    >
                      Git Terminal ➔
                    </Link>
                  </div>
                </div>

                {/* Stage 3: Modern UI & Frameworks */}
                <div className="p-6 bg-[#16222f] border border-slate-700/60 rounded-2xl shadow-xl hover:border-sky-500/60 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 font-black text-xs flex items-center justify-center border border-sky-500/40">
                        03
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800 px-2.5 py-1 rounded-md">
                        Step 3 • Frameworks
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white group-hover:text-sky-400 transition-colors">
                        React.js, Next.js & UI Frameworks
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Build reactive user interfaces, component architectures, client-side state management, and full-stack Next.js applications.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">React.js</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">Next.js App Router</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">Tailwind CSS</span>
                    </div>
                  </div>
                  <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <Link
                      href="/playground"
                      className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Open Code Playground »</span>
                    </Link>
                    <Link
                      href="/course/projects"
                      className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
                    >
                      Build Real Projects ➔
                    </Link>
                  </div>
                </div>

                {/* Stage 4: Computer Science & Full Stack Integration */}
                <div className="p-6 bg-[#16222f] border border-slate-700/60 rounded-2xl shadow-xl hover:border-amber-500/60 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-black text-xs flex items-center justify-center border border-amber-500/40">
                        04
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800 px-2.5 py-1 rounded-md">
                        Step 4 • CS Mastery
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white group-hover:text-amber-400 transition-colors">
                        Backend Systems & Computer Science (BCA)
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Understand computer hardware basics, operating systems, data structures, and university degree fundamentals.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">BCA Degree Hub</span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">PC Hardware</span>
                    </div>
                  </div>
                  <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <Link
                      href="/bca/semester-1"
                      className="px-4 py-2 bg-gradient-to-r from-amber-600 to-cyan-600 hover:from-amber-500 hover:to-cyan-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Explore IGNOU BCA 1st Sem Hub »</span>
                    </Link>
                    <Link
                      href="/course"
                      className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
                    >
                      View Full Curriculum ➔
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 2. HTML Band */}
          <section id="html-section" className="bg-[#D9EEE1] text-slate-900 py-16 px-4 md:px-8 transition-colors">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-left space-y-4">
                <span className="text-[10px] font-black uppercase bg-[#04AA6D]/20 border border-[#04AA6D]/30 px-3 py-1 rounded-full text-[#036c45]">
                  Phase 1: Web Markup
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-950 tracking-tight">
                  HTML5 Web markup
                </h2>
                <p className="text-slate-800 text-sm md:text-base max-w-lg leading-relaxed font-semibold">
                  The structural skeleton of the web. Master semantic page flows, navigation elements, forms, layouts, and Google search engine index tags.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link 
                    href="/html"
                    className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-[#04AA6D]/20 flex items-center gap-1.5"
                  >
                    <BookOpen size={14} className="stroke-[2.5]" />
                    <span>Learn HTML</span>
                  </Link>
                  <Link 
                    href="/playground"
                    className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-gray-900/10 flex items-center gap-1.5"
                  >
                    <Code size={14} className="stroke-[2.5]" />
                    <span>Try HTML Sandbox</span>
                  </Link>
                </div>
              </div>

              {/* Mock Code Box */}
              <div className="bg-[#282A35] text-white rounded-xl overflow-hidden shadow-2xl max-w-md lg:max-w-full mx-auto w-full text-xs text-left font-mono">
                <div className="bg-[#1f2029] px-4 py-2 border-b border-slate-800 flex justify-between select-none">
                  <span className="text-slate-400 font-bold text-[10px] uppercase">index.html</span>
                  <button onClick={() => router.push('/playground')} className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-0.5">
                    <span>Run Code</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
                <pre className="p-4 space-y-0.5 overflow-x-auto text-[11px] leading-relaxed">
                  <div><span className="text-cyan-400">&lt;!DOCTYPE html&gt;</span></div>
                  <div><span className="text-teal-400">&lt;html&gt;</span></div>
                  <div><span className="text-teal-400">  &lt;head&gt;</span></div>
                  <div><span className="text-teal-400">    &lt;title&gt;</span><span className="text-yellow-200">Nextsem Academy</span><span className="text-teal-400">&lt;/title&gt;</span></div>
                  <div><span className="text-teal-400">  &lt;body&gt;</span></div>
                  <div><span className="text-teal-400">    &lt;h1&gt;</span><span className="text-white font-bold">Welcome to Nextsem</span><span className="text-teal-400">&lt;/h1&gt;</span></div>
                  <div><span className="text-teal-400">    &lt;p&gt;</span><span className="text-slate-300">Learn to build beautiful websites.</span><span className="text-teal-400">&lt;/p&gt;</span></div>
                  <div><span className="text-teal-400">  &lt;/body&gt;</span></div>
                  <div><span className="text-teal-400">&lt;/html&gt;</span></div>
                </pre>
              </div>
            </div>
          </section>

          {/* 3. CSS Band */}
          <section id="css-section" className="bg-[#FFF4A3] text-slate-950 py-16 px-4 md:px-8 transition-colors">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              {/* Mock Code Box */}
              <div className="bg-[#282A35] text-white rounded-xl overflow-hidden shadow-2xl max-w-md lg:max-w-full mx-auto w-full text-xs text-left font-mono order-2 lg:order-1">
                <div className="bg-[#1f2029] px-4 py-2 border-b border-slate-800 flex justify-between select-none">
                  <span className="text-slate-400 font-bold text-[10px] uppercase">styles.css</span>
                  <button onClick={() => router.push('/playground')} className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-0.5">
                    <span>Try it</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
                <pre className="p-4 space-y-1 overflow-x-auto text-[11px] leading-relaxed">
                  <div><span className="text-yellow-400">body</span> &#123;</div>
                  <div>  <span className="text-cyan-400">background-color</span>: <span className="text-emerald-400">#060c18</span>;</div>
                  <div>  <span className="text-cyan-400">font-family</span>: <span className="text-teal-300">&apos;Outfit&apos;, sans-serif</span>;</div>
                  <div>&#125;</div>
                  <div className="pt-2"><span className="text-yellow-400">.landing-card</span> &#123;</div>
                  <div>  <span className="text-cyan-400">border</span>: <span className="text-slate-400">1px solid var(--theme-border)</span>;</div>
                  <div>  <span className="text-cyan-400">border-radius</span>: <span className="text-emerald-400">1rem</span>;</div>
                  <div>  <span className="text-cyan-400">backdrop-filter</span>: <span className="text-teal-300">blur(12px)</span>;</div>
                  <div>&#125;</div>
                </pre>
              </div>

              <div className="text-left space-y-4 order-1 lg:order-2">
                <span className="text-[10px] font-black uppercase bg-slate-900/10 border border-slate-900/20 px-3 py-1 rounded-full text-slate-950 font-bold">
                  Phase 2: Stylesheets &amp; Layouts
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-950 tracking-tight">
                  CSS3 Responsive Layouts
                </h2>
                <p className="text-slate-900 text-sm md:text-base max-w-lg leading-relaxed font-semibold">
                  Inject styling, positioning, and variables. Create premium responsive grid-panels, flexbox headers, dark switches, and smooth keyframe micro-animations.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <button 
                    onClick={() => handleLaunchChapter('p2-1-selectors')}
                    className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                  >
                    Learn CSS
                  </button>
                  <Link 
                    href="/playground"
                    className="px-5 py-2.5 border-2 border-slate-900 text-slate-950 font-black hover:bg-slate-900 hover:text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    CSS Reference
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* 4. JavaScript Band (Phase 3) */}
          <section id="js-section" className="bg-theme-bg border-b border-theme-border text-theme-text py-16 px-4 md:px-8">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-left space-y-4">
                <span className="text-[10px] font-black uppercase bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full text-theme-accent">
                  Phase 3: Scripting &amp; Logic
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-theme-text tracking-tight">
                  JavaScript Logic
                </h2>
                <p className="text-theme-text/80 text-sm md:text-base max-w-lg leading-relaxed">
                  Program logic, arrays, and event handlers. Manipulate DOM hierarchies dynamically and store database state vectors into local storage buffers.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <button 
                    onClick={() => handleLaunchChapter('p3-1-basics')}
                    className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-[#04AA6D]/20"
                  >
                    Learn JavaScript
                  </button>
                  <Link 
                    href="/playground"
                    className="px-5 py-2.5 bg-theme-surface hover:bg-theme-card text-theme-text border border-theme-border rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer inline-flex items-center justify-center"
                  >
                    JS Playground
                  </Link>
                </div>
              </div>

              {/* Mock Code Box */}
              <div className="bg-[#1f2029] border border-slate-800 text-white rounded-xl overflow-hidden shadow-2xl max-w-md lg:max-w-full mx-auto w-full text-xs text-left font-mono">
                <div className="bg-[#15161d] px-4 py-2 border-b border-slate-900 flex justify-between select-none">
                  <span className="text-slate-500 font-bold text-[10px] uppercase">main.js</span>
                  <button onClick={() => router.push('/playground')} className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-0.5">
                    <span>Run logic</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
                <pre className="p-4 space-y-1 overflow-x-auto text-[11px] leading-relaxed">
                  <div><span className="text-red-400">function</span> <span className="text-blue-400">calculateTotal</span>(subtotal, taxRate) &#123;</div>
                  <div>  <span className="text-red-400">let</span> tax = subtotal * taxRate;</div>
                  <div>  <span className="text-red-400">return</span> subtotal + tax;</div>
                  <div>&#125;</div>
                  <div className="pt-2"><span className="text-slate-400">{"// Output order check"}</span></div>
                  <div><span className="text-teal-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-blue-400">calculateTotal</span>(<span className="text-yellow-400">100</span>, <span className="text-yellow-400">0.08</span>)); <span className="text-[#39FF14]">{"// 108"}</span></div>
                </pre>
              </div>
            </div>
          </section>

          {/* 5. React & Backend Bands */}
          <section className="bg-slate-100 dark:bg-[#0c1222] py-16 px-4 md:px-8 border-y border-slate-200 dark:border-slate-800 transition-colors">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* React Block */}
              <div id="react-section" className="bg-[#E7F3FF] dark:bg-[#12233c] text-slate-900 dark:text-white p-8 rounded-2xl border border-blue-200 dark:border-slate-800 text-left flex flex-col justify-between transition-colors">
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400">React Core (⚛)</span>
                  <h3 className="text-2xl font-black uppercase">React UI libraries</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                    Build composable, reactive client interfaces. Leverage useState triggers, useEffect fetch handlers, and Context provider stores.
                  </p>
                  
                  <div className="bg-[#282A35] text-white p-4 rounded-xl font-mono text-[10px] space-y-1 overflow-x-auto shadow-inner select-none mt-4">
                    <div><span className="text-red-400">function</span> <span className="text-blue-400">Hero</span>(&#123; title &#125;) &#123;</div>
                    <div>  <span className="text-red-400">return</span> <span className="text-teal-400">&lt;h1&gt;</span>&#123;title&#125;<span className="text-teal-400">&lt;/h1&gt;</span>;</div>
                    <div>&#125;</div>
                  </div>
                </div>
                <button 
                  onClick={() => handleLaunchChapter('p4-1-jsx')} 
                  className="mt-6 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 rounded-lg text-xs font-black uppercase tracking-wider transition-all self-start cursor-pointer"
                >
                  Start React
                </button>
              </div>

              {/* Backend Block */}
              <div id="backend-section" className="bg-[#F3EBF6] dark:bg-[#20152b] text-slate-900 dark:text-white p-8 rounded-2xl border border-purple-200 dark:border-slate-800 text-left flex flex-col justify-between transition-colors">
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">Server Side (🔌)</span>
                  <h3 className="text-2xl font-black uppercase">Node.js &amp; Databases</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                    Deploy fast RESTful servers. Route Express endpoints, construct databases tables in MongoDB, and deploy full stack SaaS containers.
                  </p>

                  <div className="bg-[#282A35] text-white p-4 rounded-xl font-mono text-[10px] space-y-1 overflow-x-auto shadow-inner select-none mt-4">
                    <div><span className="text-red-400">const</span> express = <span className="text-blue-400">require</span>(<span className="text-yellow-200">&apos;express&apos;</span>);</div>
                    <div>app.<span className="text-blue-400">get</span>(<span className="text-yellow-200">&apos;/api&apos;</span>, (req, res) =&gt; res.<span className="text-blue-400">send</span>(<span className="text-yellow-200">&apos;Online&apos;</span>));</div>
                  </div>
                </div>
                <button 
                  onClick={() => handleLaunchChapter('p5-1-node')} 
                  className="mt-6 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 rounded-lg text-xs font-black uppercase tracking-wider transition-all self-start cursor-pointer"
                >
                  Start Backend
                </button>
              </div>

            </div>
          </section>
        </>
      )}

      {/* ── PROFESSIONAL PLATFORM PILLARS (Replaces Testimonials with Genuine Value) ── */}
      <section className="bg-[#17181c] border-t border-slate-800 py-16 px-4 md:px-8 text-left">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-[#04AA6D]/15 text-[#04AA6D] border border-[#04AA6D]/30 text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
              <Award size={12} />
              <span>Platform Engineering Standards</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built for Software Developers & Computer Science Students
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Nextsem Academy provides structured, hands-on developer training with real terminal execution and line-by-line visual verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 bg-[#0b0c10] border border-slate-800 rounded-2xl space-y-3 hover:border-[#04AA6D]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#04AA6D]/20 text-[#04AA6D] flex items-center justify-center font-extrabold text-lg border border-[#04AA6D]/30">
                🪟
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                Windows 11 Terminal Simulation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Practice Windows Command Prompt commands step-by-step with real terminal execution logic without installing separate software.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-[#0b0c10] border border-slate-800 rounded-2xl space-y-3 hover:border-[#04AA6D]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-extrabold text-lg border border-blue-500/30">
                📱
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                Mobile-to-PC 1-to-1 Matching
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Read lessons on mobile while practicing on PC. Terminal output text matches actual Windows Command Prompt output line-by-line.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-[#0b0c10] border border-slate-800 rounded-2xl space-y-3 hover:border-[#04AA6D]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-extrabold text-lg border border-amber-500/30">
                ⚡
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                High-Contrast Developer Theme
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Designed with a clean dark theme palette (`#17181c`), crisp white headings (`text-white font-bold`), and vibrant green accents.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-[#0b0c10] border border-slate-800 rounded-2xl space-y-3 hover:border-[#04AA6D]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-extrabold text-lg border border-purple-500/30">
                🔒
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                Privacy-First & Ad-Free Pages
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact, Privacy, Terms, and About utility pages are 100% clean and ad-free, respecting user privacy and platform standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADSENSE COMPLIANCE & LEGAL DIRECTORY (FOR FAST ADSENSE APPROVAL) ── */}
      <section className="bg-[#0b0c10] border-t border-slate-800 py-12 px-4 md:px-8 text-left">
        <div className="max-w-[1200px] mx-auto p-6 sm:p-8 bg-[#17181c] border border-emerald-500/30 rounded-3xl shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#04AA6D] bg-[#04AA6D]/15 border border-[#04AA6D]/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                <CheckCircle size={12} />
                <span>Google AdSense Review & Policy Verified</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Official Nextsem Academy Site Policies & Legal Hub
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Review our publisher policies, user privacy terms, support contact details, and search engine sitemap.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-[#04AA6D] animate-ping" />
              <span className="text-white">Live Publisher ID: pub-4242865347895866</span>
            </div>
          </div>

          {/* Quick Legal Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <Link
              href="/privacy"
              className="p-3.5 bg-[#0b0c10] hover:bg-slate-800/80 border border-slate-700/60 rounded-xl text-center transition-all group"
            >
              <div className="text-lg mb-1">📜</div>
              <div className="text-xs font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">Privacy Policy</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Cookie & Data Terms</div>
            </Link>

            <Link
              href="/terms"
              className="p-3.5 bg-[#0b0c10] hover:bg-slate-800/80 border border-slate-700/60 rounded-xl text-center transition-all group"
            >
              <div className="text-lg mb-1">⚖️</div>
              <div className="text-xs font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">Terms of Service</div>
              <div className="text-[10px] text-slate-400 mt-0.5">User Agreements</div>
            </Link>

            <Link
              href="/contact"
              className="p-3.5 bg-[#0b0c10] hover:bg-slate-800/80 border border-slate-700/60 rounded-xl text-center transition-all group"
            >
              <div className="text-lg mb-1">📞</div>
              <div className="text-xs font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">Contact Support</div>
              <div className="text-[10px] text-slate-400 mt-0.5">24/7 Help Desk</div>
            </Link>

            <Link
              href="/about"
              className="p-3.5 bg-[#0b0c10] hover:bg-slate-800/80 border border-slate-700/60 rounded-xl text-center transition-all group"
            >
              <div className="text-lg mb-1">ℹ️</div>
              <div className="text-xs font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">About Us</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Academy Vision</div>
            </Link>

            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-[#0b0c10] hover:bg-slate-800/80 border border-slate-700/60 rounded-xl text-center transition-all group col-span-2 sm:col-span-1"
            >
              <div className="text-lg mb-1">🗺️</div>
              <div className="text-xs font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">XML Sitemap</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Indexed 259 Pages</div>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER (Nextsem Academy style columned) ── */}
      <footer className="bg-[#1f2029] text-white border-t border-slate-850/80 transition-colors mt-auto">



        
        {/* Quick courses band */}
        <div className="bg-[#1b1c24] border-b border-slate-800/60 py-4">
          <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-black uppercase text-slate-400">
            <button onClick={() => handleScrollToId('cli-section')} className="hover:text-white cursor-pointer">CLI</button>
            <span>•</span>
            <button onClick={() => handleScrollToId('html-section')} className="hover:text-white cursor-pointer">HTML</button>
            <span>•</span>
            <button onClick={() => handleScrollToId('css-section')} className="hover:text-white cursor-pointer">CSS</button>
            <span>•</span>
            <button onClick={() => handleScrollToId('js-section')} className="hover:text-white cursor-pointer">JAVASCRIPT</button>
            <span>•</span>
            <button onClick={() => handleScrollToId('react-section')} className="hover:text-white cursor-pointer">REACT</button>
            <span>•</span>
            <button onClick={() => handleScrollToId('backend-section')} className="hover:text-white cursor-pointer">NODE.JS</button>
            <span>•</span>
            <Link href="/playground" className="hover:text-white">SANDBOX</Link>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-xs text-slate-400">
          
          <div className="space-y-3">
            <h5 className="font-black uppercase text-white text-xs tracking-wider">Top Tutorials</h5>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => handleScrollToId('html-section')} className="hover:text-white">HTML Tutorial</button></li>
              <li><button onClick={() => handleScrollToId('css-section')} className="hover:text-white">CSS Tutorial</button></li>
              <li><button onClick={() => handleScrollToId('js-section')} className="hover:text-white">JavaScript Tutorial</button></li>
              <li><button onClick={() => handleScrollToId('react-section')} className="hover:text-white">React Tutorial</button></li>
              <li><button onClick={() => handleScrollToId('backend-section')} className="hover:text-white">Node.js Backend</button></li>
              <li><button onClick={() => handleScrollToId('cli-section')} className="hover:text-white">Windows Commands (CLI)</button></li>
              <li><Link href="/curriculum" className="hover:text-white text-emerald-400 font-bold">🚀 Full Dev Curriculum</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-black uppercase text-white text-xs tracking-wider">Simulators & Tools</h5>
            <ul className="space-y-2 font-medium">
              <li><Link href="/cli" className="hover:text-white">🪟 Windows CLI Module</Link></li>
              <li><Link href="/git" target="_blank" className="hover:text-white">🌿 Git Simulator</Link></li>
              <li><Link href="/playground" className="hover:text-white">💻 Code Sandbox Playground</Link></li>
              <li><Link href="/bca" className="hover:text-white">🎓 BCA Semester Hub</Link></li>
              <li><button onClick={() => handleLaunchChapter('p0-3-vscode')} className="hover:text-white">VS Code Editor Setup</button></li>
              <li><button onClick={() => handleLaunchChapter('p0-5-devtools')} className="hover:text-white">Chrome DevTools Console</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-black uppercase text-white text-xs tracking-wider">Career Prep</h5>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => handleLaunchChapter('p7-2-resume')} className="hover:text-white">ATS-friendly Resume</button></li>
              <li><button onClick={() => handleLaunchChapter('p7-1-interview')} className="hover:text-white">Technical Interview Q&A</button></li>
              <li><button onClick={() => handleLaunchChapter('p7-3-github')} className="hover:text-white">GitHub Portfolio SEO</button></li>
              <li><button onClick={() => handleLaunchChapter('p6-1-portfolio')} className="hover:text-white">PWA App manifest</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-black uppercase text-white text-xs tracking-wider">Legal & AdSense Compliance</h5>
            <ul className="space-y-2 font-medium">
              <li><Link href="/privacy" className="hover:text-white">📜 Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">⚖️ Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white">📞 Contact Support</Link></li>
              <li><Link href="/about" className="hover:text-white">ℹ️ About Nextsem</Link></li>
              <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-[#04AA6D] text-[#04AA6D] font-bold">🗺️ XML Sitemap</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer / Nextsem Academy style */}
        <div className="bg-[#1b1c24] text-[10px] text-slate-500 font-medium py-6 px-4 border-t border-slate-800/40">
          <div className="max-w-[1000px] mx-auto text-center space-y-3 leading-relaxed">
            <p>
              Nextsem Academy is optimized for learning, testing, and training. Examples and simulations might be simplified to improve reading and basic understanding. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content.
            </p>
            <p>
              While using Nextsem Academy, you agree to have read and accepted our <Link href="/terms" className="underline hover:text-slate-400">terms of use</Link>, <Link href="/privacy" className="underline hover:text-slate-400">cookie and privacy policy</Link>.
            </p>
            <p className="pt-2 text-slate-400 font-bold uppercase tracking-wider font-sans">
              Copyright {new Date().getFullYear()} by Nextsem Academy. All rights reserved. Powered by React, Next.js & Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Standard Footer Bar */}
        <Footer />

      </footer>

    </div>
  );
}
