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
            <Link href="/" className="flex items-center gap-2.5 select-none group">
              <div className="w-8 h-8 rounded-lg bg-[#0c1328] border border-[#04AA6D]/50 flex items-center justify-center shadow-[0_0_10px_rgba(4,170,109,0.3)] group-hover:border-[#04AA6D] transition-all">
                <svg viewBox="0 0 160 110" className="h-5 w-auto overflow-visible">
                  <path d="M 15 95 V 15 L 65 95 V 15" fill="none" stroke="#04AA6D" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 145 32 C 145 15, 95 15, 95 38 C 95 60, 145 60, 145 82 C 145 95, 95 95, 95 82" fill="none" stroke="#FFFFFF" strokeWidth="22" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col justify-center text-left">
                <span className="font-black text-sm tracking-tight text-slate-800 dark:text-white uppercase leading-none">
                  Nextsem<span className="text-[#04AA6D] lowercase font-bold">.online</span>
                </span>
                <span className="text-[8px] font-extrabold text-[#04AA6D] tracking-wider uppercase font-mono mt-0.5 leading-none">
                  Full Stack Web Developer
                </span>
              </div>
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
                    <Link href="/batch" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>⚙️</span>
                      <span>Batch Automation</span>
                    </Link>
                    <Link href="/cpp" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>⚡</span>
                      <span>C++ Systems</span>
                    </Link>
                    <Link href="/visual-logic" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>🧭</span>
                      <span>Visual Logic Gates</span>
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
          {/* Authentic Developer Platform Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0c1328] border border-slate-800 text-slate-300 text-xs font-semibold shadow-md hover:border-emerald-500/40 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#04AA6D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#04AA6D]"></span>
            </span>
            <span className="text-white font-bold tracking-tight">Nextsem Academy</span>
            <span className="text-slate-600 font-bold">•</span>
            <span className="text-slate-300">Full Stack Web Development Curriculum</span>
          </div>

          {/* Master Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight text-white max-w-4xl mx-auto">
            Become a Job-Ready <span className="text-[#04AA6D]">Full Stack</span> Web Developer
          </h1>

          {/* Subtitle / Clear Developer English Guidance */}
          <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Master full-stack web development step-by-step on your Windows PC. Start by setting up Visual Studio Code & HTML structure, progress through modern CSS layouts and JavaScript logic, build full-stack React and Node.js applications, manage databases, and deploy real-world projects to the cloud.
          </p>

          {/* Action CTA: Single Prominent Start Learning Button */}
          <div className="flex items-center justify-center pt-3">
            <Link
              href="/html/download-install-vscode-windows-11-setup-guide"
              className="px-10 py-4.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-black text-sm sm:text-base uppercase tracking-wider rounded-2xl shadow-2xl shadow-[#04AA6D]/30 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3 cursor-pointer border border-emerald-400/40"
            >
              <Play size={20} className="fill-white" />
              <span>Start Learning »</span>
            </Link>
          </div>

          {/* Actual 🪟 Windows 11 Visual Studio Code Editor Window */}
          <div className="max-w-3xl mx-auto mt-10 text-left rounded-xl border border-slate-700/80 bg-[#1e1e1e] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden font-sans">
            {/* 1. Windows 11 VS Code Title Bar */}
            <div className="h-8 bg-[#181818] border-b border-[#2b2b2b] flex items-center justify-between px-3 select-none">
              {/* Left: VS Code Icon & Menu Items */}
              <div className="flex items-center gap-3 text-xs text-slate-300">
                {/* VS Code Blue Icon */}
                <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 fill-[#007ACC]" aria-label="Visual Studio Code">
                  <path d="M72.9 96.6c2.4 1.3 5.4.9 7.4-.9l15.8-14.7c2.1-2 3.3-4.8 3.3-7.7V26.7c0-2.9-1.2-5.7-3.3-7.7L80.3 4.3c-2-1.8-5-2.2-7.4-.9L24.4 34.6 9.7 23.2c-1.8-1.4-4.3-1.4-6.1 0-1.8 1.4-2.6 3.7-2.1 5.9l8.6 39.8-8.6 39.8c-.5 2.2.3 4.5 2.1 5.9 1.8 1.4 4.3 1.4 6.1 0l14.7-11.4 48.5 31.8zM28.4 50l40.1-29.8v59.6L28.4 50z" />
                </svg>
                {/* Windows VS Code Standard Menu Bar */}
                <div className="hidden sm:flex items-center gap-2.5 text-[11px] text-[#cccccc] font-normal">
                  <span className="hover:bg-[#333333] px-1.5 py-0.5 rounded cursor-default">File</span>
                  <span className="hover:bg-[#333333] px-1.5 py-0.5 rounded cursor-default">Edit</span>
                  <span className="hover:bg-[#333333] px-1.5 py-0.5 rounded cursor-default">Selection</span>
                  <span className="hover:bg-[#333333] px-1.5 py-0.5 rounded cursor-default">View</span>
                  <span className="hover:bg-[#333333] px-1.5 py-0.5 rounded cursor-default">Go</span>
                  <span className="hover:bg-[#333333] px-1.5 py-0.5 rounded cursor-default">Run</span>
                  <span className="hover:bg-[#333333] px-1.5 py-0.5 rounded cursor-default">Terminal</span>
                  <span className="hover:bg-[#333333] px-1.5 py-0.5 rounded cursor-default">Help</span>
                </div>
              </div>

              {/* Center: File & Project Workspace Name */}
              <div className="text-[11px] text-slate-400 font-mono hidden md:block truncate max-w-xs">
                index.html - nextsem-fullstack - Visual Studio Code
              </div>

              {/* Right: Windows 11 Standard Caption Controls (Minimize, Maximize, Close) */}
              <div className="flex items-center h-full">
                <button className="h-8 w-10 hover:bg-[#333333] flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <span className="w-2.5 h-[1px] bg-current inline-block" />
                </button>
                <button className="h-8 w-10 hover:bg-[#333333] flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <span className="w-2.5 h-2.5 border border-current inline-block" />
                </button>
                <button className="h-8 w-11 hover:bg-[#e81123] flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <span className="text-xs">✕</span>
                </button>
              </div>
            </div>

            {/* 2. VS Code Main Layout: Left Activity Bar + Editor Area */}
            <div className="flex bg-[#1e1e1e]">
              {/* Left Vertical Activity Bar (Standard VS Code width) */}
              <div className="w-10 sm:w-11 bg-[#181818] border-r border-[#2b2b2b] flex flex-col items-center py-2 gap-4 text-slate-400 select-none">
                {/* Active Explorer Icon */}
                <div className="p-1.5 rounded text-white bg-[#2b2b2b]/60 border-l-2 border-[#007ACC] cursor-pointer" title="Explorer">
                  <Layers size={16} className="text-[#04AA6D]" />
                </div>
                <div className="p-1.5 rounded hover:text-white cursor-pointer" title="Search">
                  <Search size={16} />
                </div>
                <div className="p-1.5 rounded hover:text-white cursor-pointer" title="Source Control (Git)">
                  <Globe size={16} />
                </div>
                <div className="p-1.5 rounded hover:text-white cursor-pointer" title="Extensions">
                  <Cpu size={16} />
                </div>
              </div>

              {/* Center & Right: Editor Tabs + Code Area */}
              <div className="flex-1 flex flex-col min-w-0">
                {/* Editor Tab Bar */}
                <div className="h-8 bg-[#181818] border-b border-[#2b2b2b] flex items-center justify-between overflow-x-auto select-none">
                  <div className="flex items-center h-full">
                    {/* Active index.html Tab */}
                    <div className="h-full px-3.5 bg-[#1e1e1e] border-t-2 border-[#04AA6D] border-r border-[#2b2b2b] flex items-center gap-2 text-xs font-mono text-white font-bold cursor-default">
                      <span className="text-[#e44d26] font-extrabold text-[11px]">&lt;&gt;</span>
                      <span>index.html</span>
                      <span className="text-[10px] text-slate-500 hover:text-white ml-1">✕</span>
                    </div>
                    {/* Inactive styles.css Tab */}
                    <div className="h-full px-3.5 bg-[#181818] hover:bg-[#1f1f1f] border-r border-[#2b2b2b] flex items-center gap-2 text-xs font-mono text-slate-400 cursor-pointer hidden sm:flex">
                      <span className="text-[#264de4] font-extrabold text-[11px]">#</span>
                      <span>styles.css</span>
                    </div>
                    {/* Inactive app.js Tab */}
                    <div className="h-full px-3.5 bg-[#181818] hover:bg-[#1f1f1f] border-r border-[#2b2b2b] flex items-center gap-2 text-xs font-mono text-slate-400 cursor-pointer hidden sm:flex">
                      <span className="text-[#f7df1e] font-extrabold text-[11px]">JS</span>
                      <span>app.js</span>
                    </div>
                  </div>

                  {/* Breadcrumb / Status Badge */}
                  <div className="pr-3 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] animate-pulse" />
                    <span>🪟 Windows 11 Workstation</span>
                  </div>
                </div>

                {/* Code Body with Line Numbers */}
                <div className="p-4 bg-[#1e1e1e] font-mono text-xs text-slate-200 select-all overflow-x-auto leading-relaxed flex">
                  {/* Line Numbers Column */}
                  <div className="text-slate-600 select-none pr-4 text-right space-y-1 font-mono text-xs w-6 border-r border-[#2b2b2b] mr-4">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                  </div>

                  {/* Code Syntax Highlighted Lines */}
                  <div className="space-y-1 text-slate-300">
                    <p><span className="text-[#808080]">&lt;!-- 🚀 Nextsem Full Stack Web Developer Blueprint --&gt;</span></p>
                    <p><span className="text-[#569cd6]">&lt;!DOCTYPE</span> <span className="text-[#9cdcfe]">html</span><span className="text-[#569cd6]">&gt;</span></p>
                    <p><span className="text-[#569cd6]">&lt;html</span> <span className="text-[#9cdcfe]">lang</span>=<span className="text-[#ce9178]">&quot;en&quot;</span><span className="text-[#569cd6]">&gt;</span></p>
                    <p className="pl-3"><span className="text-[#569cd6]">&lt;head&gt;</span></p>
                    <p className="pl-6"><span className="text-[#569cd6]">&lt;title&gt;</span><span className="text-white font-bold">Job-Ready Full Stack Developer</span><span className="text-[#569cd6]">&lt;/title&gt;</span></p>
                    <p className="pl-6"><span className="text-[#569cd6]">&lt;link</span> <span className="text-[#9cdcfe]">rel</span>=<span className="text-[#ce9178]">&quot;stylesheet&quot;</span> <span className="text-[#9cdcfe]">href</span>=<span className="text-[#ce9178]">&quot;styles.css&quot;</span><span className="text-[#569cd6]">&gt;</span></p>
                    <p className="pl-3"><span className="text-[#569cd6]">&lt;/head&gt;</span></p>
                    <p className="pl-3"><span className="text-[#569cd6]">&lt;body&gt;</span></p>
                    <p className="pl-6"><span className="text-[#569cd6]">&lt;h1</span> <span className="text-[#9cdcfe]">class</span>=<span className="text-[#ce9178]">&quot;text-emerald-400&quot;</span><span className="text-[#569cd6]">&gt;</span><span className="text-white font-bold">Hello World! Building Full Stack Web Apps 🚀</span><span className="text-[#569cd6]">&lt;/h1&gt;</span></p>
                    <p className="pl-6"><span className="text-[#569cd6]">&lt;script</span> <span className="text-[#9cdcfe]">src</span>=<span className="text-[#ce9178]">&quot;app.js&quot;</span><span className="text-[#569cd6]">&gt;&lt;/script&gt;</span></p>
                    <p className="pl-3"><span className="text-[#569cd6]">&lt;/body&gt;</span></p>
                    <p><span className="text-[#569cd6]">&lt;/html&gt;</span></p>
                  </div>
                </div>

                {/* 3. VS Code Bottom Status Bar (Real VS Code Blue #007acc) */}
                <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-[11px] font-mono select-none">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Live: 5500</span>
                    </span>
                    <span className="hidden sm:inline opacity-80">main*</span>
                    <span className="hidden sm:inline opacity-80">0 ⚠ 0</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline">UTF-8</span>
                    <span className="hidden sm:inline">CRLF</span>
                    <span className="font-bold">HTML</span>
                    <span className="bg-black/20 px-1.5 py-0.2 rounded text-[10px]">Prettier</span>
                  </div>
                </div>
              </div>
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
          <div className="p-5 bg-[#0c1328] border border-slate-800 hover:border-[#04AA6D] rounded-2xl transition-all shadow-xl flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#04AA6D]/20 text-[#04AA6D] font-black text-xs flex items-center justify-center border border-[#04AA6D]/40">02</span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">101 Lessons</span>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white group-hover:text-[#04AA6D] transition-colors flex items-center gap-2">
                  <Palette size={18} className="text-[#04AA6D]" />
                  <span>🎨 CSS3 & Modern UI</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Flexbox layouts, CSS Grid systems, custom properties, keyframe animations, and responsive web design.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <Link href="/css" className="text-xs font-bold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D] flex items-center gap-1">
                <span>Start Module 02</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/course/projects" className="text-[11px] font-bold text-slate-400 hover:text-white">15 CSS Labs ➔</Link>
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
              <li><Link href="/html" className="hover:text-white">HTML5 Tutorials</Link></li>
              <li><Link href="/candle-flame-animation" className="hover:text-white">CSS3 Animations &amp; UI</Link></li>
              <li><Link href="/playground" className="hover:text-white">JavaScript ES6+ Logic</Link></li>
              <li><Link href="/curriculum" className="hover:text-white">React.js &amp; Next.js</Link></li>
              <li><Link href="/curriculum" className="hover:text-white">Node.js REST APIs</Link></li>
              <li><Link href="/cli" className="hover:text-white">Windows 11 CLI Commands</Link></li>
              <li><Link href="/curriculum" className="hover:text-[#04AA6D] text-[#04AA6D] font-bold">🚀 Full Dev Curriculum</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-black uppercase text-white text-xs tracking-wider">Simulators &amp; Tools</h5>
            <ul className="space-y-2 font-medium">
              <li><Link href="/cli" className="hover:text-white">🪟 Windows Terminal</Link></li>
              <li><Link href="/git" target="_blank" className="hover:text-white">🌿 Git Simulator</Link></li>
              <li><Link href="/batch" className="hover:text-white">⚙️ Windows Batch Automation</Link></li>
              <li><Link href="/cpp" className="hover:text-white">⚡ C++ Systems Track</Link></li>
              <li><Link href="/html" className="hover:text-white">🌐 Full Stack Code Studio</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-black uppercase text-white text-xs tracking-wider">Full Stack Pathways</h5>
            <ul className="space-y-2 font-medium">
              <li><Link href="/full-stack-web-development-roadmap" className="hover:text-white">🚀 Full Stack 2026 Roadmap</Link></li>
              <li><Link href="/course/projects" className="hover:text-white">💡 15+ Interactive Projects</Link></li>
              <li><Link href="/playground" className="hover:text-white">💻 Live Code Playground</Link></li>
              <li><Link href="/html" className="hover:text-white">🌐 HTML5 Architecture</Link></li>
              <li><Link href="/curriculum" className="hover:text-white">📦 Full Stack Modules</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-black uppercase text-white text-xs tracking-wider">Legal &amp; Policy Hub</h5>
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
