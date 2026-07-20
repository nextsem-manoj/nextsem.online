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
import { 
  Layers, Cpu, Code, Palette, Cloud, Briefcase, 
  Rocket, BookOpen, ChevronRight, Play, CheckCircle, 
  Zap, LogIn, LogOut, Terminal, Star, Search, Menu, X, 
  ChevronDown, Award, ExternalLink, RefreshCw 
} from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo?: string;
}

const REAL_LIFE_EXAMPLES: Record<string, string> = {
  // Module 1 (CLI)
  "cli-ch1-basics": "Querying operating system specifications & clearing screen history",
  "cli-ch2-drives": "Scanning system partition volumes & drawing folder structure trees",
  "cli-ch3-prompt": "Color-coding your workstation backdrop and configuring prompt titles",
  "cli-ch4-directories": "Building and deleting nested client-project storage folders",
  "cli-ch5-attributes": "Locking credential settings configuration files from modifications",
  "cli-ch6-redirection": "Saving application error logs into external output txt files",
  "cli-ch7-operations": "Batch-duplicating critical source code backups to local archives",
  "cli-ch8-networking": "Flushing local DNS resolver caches to load newly pointed domains",
  "cli-ch9-disk": "Cleaning and formatting storage hard-drives",
  "cli-ch10-shares": "Mounting shared network folders from teammate host servers",
  "cli-ch11-users": "Configuring access accounts and permissions groups for developers",
  "cli-ch12-remote": "SSH connecting to headless Linux application servers",
  "cli-ch13-batch": "Coding an automated double-click server deployment script",
  "cli-ch14-tasks": "Auditing CPU load and force-closing unresponsive editor tasks",

  // Module 2 (P0 Intro to Coding)
  "p0-setup": "Understanding Full Stack Developer tech stacks and daily schedules",
  "p0-1-setup": "Installing runtime engines and developer browsers",
  "p0-3-vscode": "Optimizing shortcuts, auto-completion, and editor formatting",
  "p0-4-git": "Backing up local codebase history revisions onto GitHub repositories",
  "p0-5-devtools": "Inspecting HTML elements, CSS layouts, and response times on live sites",

  // Module 3 (P1 HTML)
  "p1-1-intro-and-text": "Coding a text-only, semantic developer resume web page",
  "p1-2-links-and-media": "Connecting online portfolios and embedding screenshot assets",
  "p1-3-lists-and-tables": "Coding structured pricing checkouts and product features lists",
  "p1-4-forms-and-inputs": "Building custom signup forms with type validation constraints",
  "p1-5-semantics-and-seo": "Optimizing keywords and search index tags to rank on Google",
  "p1-6-html5-tags": "Organizing layouts into standard semantic blocks (headers, articles)",

  // Module 4 (P2 CSS)
  "p2-1-selectors": "Styling interactive state dropdown menus and button link highlights",
  "p2-2-colors": "Styling glassmorphic card details with neon gradients",
  "p2-3-box-model": "Securing box sizes, paddings, and borders to prevent grid spill",
  "p2-4-positions": "Building sticky navbars that lock to the page top on scrolling",
  "p2-5-flexbox": "Aligning user cards into rows and centering them horizontally",
  "p2-6-grid": "Coding a responsive, multi-row analytics dashboard layout",
  "p2-7-animations": "Coding pulsating micro-interactions on purchase CTA buttons",
  "p2-8-variables": "Implementing a theme switcher dynamically using CSS root tokens",

  // Module 5 (P3 JS)
  "p3-1-basics": "Programming basic sales-tax calculation models",
  "p3-2-conditions": "Validating passwords and form inputs programmatically",
  "p3-3-arrays": "Adding and removing items inside a digital shopping cart array",
  "p3-4-advanced-arrays": "Filtering and mapping cheap items out of a product inventory list",
  "p3-5-objects": "Structuring user accounts records with email, XP points, and active flags",
  "p3-6-dom": "Appending shopping cart item elements to the page dynamically",
  "p3-7-events": "Coding click listeners to toggle collapsible FAQ accordion tabs",

  // Module 6 (P4 React)
  "p4-1-jsx": "Templating dynamic product cards using inline JS variables",
  "p4-2-components": "Reusing card components across multiple project routes",
  "p4-3-state": "Coding a live, reactive click-counter scoring system",
  "p4-4-lifecycle": "Fetching cryptocurrency price details from a live public API",
  "p4-5-forms": "Developing self-validating sign-in forms with state updates",
  "p4-6-context": "Syncing dark mode values across deeply nested components",

  // Module 7 (P5 Backend)
  "p5-1-node": "Executing backend scripts and custom file managers from CLI",
  "p5-2-express": "Setting up a backend API server responding on port 5000",
  "p5-3-rest": "Coding CRUD backend endpoints to register user entries",
  "p5-4-mongodb": "Connecting server APIs to cloud databases to store hashed accounts",
  "p5-5-deploy": "Deploying the complete application to static staging hosting",

  // Module 8 (P6 Capstone)
  "p6-1-portfolio": "Deploying a static, custom resume page showing your course certificates",
  "p6-2-saas": "Deploying a fully connected task management SaaS app with databases",

  // Module 9 (P7 Placement)
  "p7-1-interview": "Passing mock frontend assessments on CSS and JS loops",
  "p7-2-resume": "Highlighting Git capabilities to bypass automatic parser filters"
};

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  // Find dynamic "Continue Learning" active chapter
  const getNextUncompletedChapter = () => {
    const allChapters: { id: string; title: string; phase: string }[] = [];
    coursePhases.forEach(phase => {
      phase.topics.forEach(t => {
        allChapters.push({
          id: t.path,
          title: t.label,
          phase: phase.id
        });
      });
    });

    const next = allChapters.find(c => !completedChapters[c.id]);
    return next || allChapters[0];
  };

  const nextActive = getNextUncompletedChapter();

  const handleLaunchChapter = (path: string) => {
    let url = `/book/${path}`;
    if (path === "cmd") {
      url = "/cmd";
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

  // Statistics
  const totalChaptersCount = coursePhases.reduce((acc, phase) => acc + phase.topics.length, 0);
  const completedChaptersCount = Object.keys(completedChapters).filter(k => completedChapters[k]).length;
  const overallPercent = totalChaptersCount > 0 ? Math.round((completedChaptersCount / totalChaptersCount) * 100) : 0;
  const currentModule = coursePhases[activeModuleIdx] || coursePhases[0];

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col font-sans selection:bg-[#c1a648]/30 transition-colors duration-200">
      
      {/* ── TOP NAVIGATION BAR (W3Schools Style) ── */}
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
                      <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2 px-1">
                        🖥️ Systems & Basics
                      </span>
                      <div className="flex flex-col gap-1 text-xs">
                        <button 
                          onClick={() => { handleScrollToId('cli-section'); setTutorialsDropdownOpen(false); }} 
                          className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl hover:text-[#04AA6D] transition-all text-left font-bold"
                        >
                          <span>🪟</span>
                          <span className="truncate">Windows Commands (CLI)</span>
                        </button>
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
                      <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2 px-1">
                        🚀 Web Development
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
                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block px-2 mb-1.5">
                      🛠️ Interactive Tools
                    </span>
                    <Link href="/cmd" target="_blank" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>🪟</span>
                      <span>CMD Simulator</span>
                    </Link>
                    <Link href="/git" target="_blank" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>🌿</span>
                      <span>Git Simulator</span>
                    </Link>
                    <Link href="/playground" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>💻</span>
                      <span>Code Sandbox</span>
                    </Link>
                    <Link href="/ncert" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>📚</span>
                      <span>NCERT Study Hub</span>
                    </Link>
                    <Link href="/bca" onClick={() => setExercisesDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all">
                      <span>🎓</span>
                      <span>BCA Semester Hub</span>
                    </Link>
                    <button onClick={() => { handleScrollToId('exercises-section'); setExercisesDropdownOpen(false); }} className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#04AA6D] text-xs font-bold transition-all text-left">
                      <span>🏆</span>
                      <span>Course Quizzes</span>
                    </button>
                  </div>
                )}
              </div>

              <button onClick={() => handleScrollToId('certificate-section')} className="px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer">Certificates</button>
              <Link href="/playground" className="px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all">Playground</Link>
              <Link href="/ncert" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer">
                <BookOpen size={14} className="text-[#04AA6D]" />
                <span>NCERT Hub</span>
              </Link>
              <Link href="/bca" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer">
                <Layers size={14} className="text-indigo-500" />
                <span>BCA Hub</span>
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

            {/* Theme Toggle Button */}
            <ThemeToggle />

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

            {/* Mobile menu trigger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 md:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-[#fafafa]/98 dark:bg-[#0b0f19]/98 backdrop-blur-md px-5 py-4 flex flex-col gap-4 text-left font-bold text-slate-800 dark:text-slate-200 animate-in slide-in-from-top-4 duration-200 shadow-2xl rounded-b-2xl">
            
            {/* Tutorials Section */}
            <div>
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2 px-1">
                📚 Tutorials
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button 
                  onClick={() => { handleScrollToId('cli-section'); setMobileMenuOpen(false); }} 
                  className="flex items-center gap-1.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all text-left"
                >
                  <span>🪟</span>
                  <span className="truncate">CLI (CMD)</span>
                </button>
                <button 
                  onClick={() => { handleScrollToId('setup-section'); setMobileMenuOpen(false); }} 
                  className="flex items-center gap-1.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all text-left"
                >
                  <span>⚙️</span>
                  <span className="truncate">Software Setup</span>
                </button>
                <button 
                  onClick={() => { handleScrollToId('html-section'); setMobileMenuOpen(false); }} 
                  className="flex items-center gap-1.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all text-left"
                >
                  <span>📝</span>
                  <span className="truncate">HTML Web Pages</span>
                </button>
                <button 
                  onClick={() => { handleScrollToId('css-section'); setMobileMenuOpen(false); }} 
                  className="flex items-center gap-1.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all text-left"
                >
                  <span>🎨</span>
                  <span className="truncate">CSS Layouts</span>
                </button>
                <button 
                  onClick={() => { handleScrollToId('js-section'); setMobileMenuOpen(false); }} 
                  className="flex items-center gap-1.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all text-left"
                >
                  <span>⚡</span>
                  <span className="truncate">JS Logic</span>
                </button>
                <button 
                  onClick={() => { handleScrollToId('react-section'); setMobileMenuOpen(false); }} 
                  className="flex items-center gap-1.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all text-left"
                >
                  <span>⚛️</span>
                  <span className="truncate">React UI</span>
                </button>
                <button 
                  onClick={() => { handleScrollToId('backend-section'); setMobileMenuOpen(false); }} 
                  className="flex items-center gap-1.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all text-left col-span-2"
                >
                  <span>🔌</span>
                  <span className="truncate">Backend Server Development</span>
                </button>
              </div>
            </div>

            {/* Exercises & Tools Section */}
            <div>
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2 px-1">
                🛠️ Exercises & Tools
              </span>
              <div className="flex flex-col gap-1.5 text-xs font-semibold">
                <Link 
                  href="/cmd" 
                  target="_blank" 
                  className="flex items-center gap-2.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all"
                >
                  <span>🪟</span>
                  <span>Windows CMD Simulator</span>
                </Link>
                <Link 
                  href="/git" 
                  target="_blank" 
                  className="flex items-center gap-2.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all"
                >
                  <span>🌿</span>
                  <span>Git Version Control Simulator</span>
                </Link>
                <Link 
                  href="/playground" 
                  className="flex items-center gap-2.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all"
                >
                  <span>💻</span>
                  <span>Interactive Code Sandbox</span>
                </Link>
                <Link 
                  href="/ncert" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-2.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all"
                >
                  <span>📚</span>
                  <span>NCERT Study Hub Companion</span>
                </Link>
                <Link 
                  href="/bca" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center gap-2.5 p-2 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-[#04AA6D]/10 dark:hover:bg-[#04AA6D]/20 hover:text-[#04AA6D] border border-slate-200/40 dark:border-slate-800/40 rounded-xl transition-all"
                >
                  <span>🎓</span>
                  <span>BCA Semester Hub</span>
                </Link>
              </div>
            </div>

            {/* Certificates Footer Link */}
            <button 
              onClick={() => { handleScrollToId('certificate-section'); setMobileMenuOpen(false); }} 
              className="flex items-center justify-center gap-2 p-2.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:from-amber-500/30 hover:to-yellow-500/30 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-xl text-xs font-black uppercase tracking-wider transition-all"
            >
              <span>🏅</span>
              <span>Claim Course Certificates</span>
            </button>
          </div>
        )}
      </header>

      {/* ── HERO SEARCH AREA (W3Schools Style) ── */}
      <section className="bg-[#282A35] text-white py-16 px-4 text-center relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#04AA6D_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            Learn to Code
          </h2>
          <p className="text-[#FFF4A3] text-sm md:text-base font-extrabold uppercase mt-2 tracking-wider">
            Start your journey to become a job-ready developer.
          </p>

          {/* Hero Big Search Box */}
          <div ref={heroSearchRef} className="mt-8 max-w-[560px] mx-auto relative">
            <form onSubmit={handleHeroSearchSubmit} className="flex shadow-2xl rounded-full overflow-hidden bg-white">
              <input 
                type="text"
                placeholder="Search our tutorials, e.g. HTML"
                value={heroSearchQuery}
                onChange={(e) => setHeroSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 text-slate-900 text-sm md:text-base focus:outline-none placeholder-slate-455 font-medium"
              />
              <button type="submit" className="bg-[#04AA6D] hover:bg-[#039861] text-white px-6 md:px-8 transition-colors flex items-center justify-center cursor-pointer">
                <Search size={20} />
              </button>
            </form>

            {/* Hero Search Results Dropdown */}
            {(heroSearchResults.length > 0 || heroSearchQuery.trim()) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-h-[400px] overflow-y-auto z-40 text-left p-3 animate-in fade-in duration-200">
                {heroSearchResults.length > 0 && (
                  <>
                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2 px-2">Matching Tutorials</span>
                    {heroSearchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => {
                          handleLaunchChapter(result.id);
                          setHeroSearchQuery('');
                        }}
                        className="w-full p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl text-left transition-colors flex items-start gap-3 border-b border-slate-100 dark:border-slate-900 last:border-b-0"
                      >
                        <span className="text-lg mt-0.5">{result.icon || '📄'}</span>
                        <div>
                          <div className="text-sm font-bold text-slate-800 dark:text-white">{result.title}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate max-w-[420px]">{result.duration || '5 min read'} • {result.phase || 'Course Chapter'}</div>
                        </div>
                      </button>
                    ))}
                  </>
                )}

                {heroSearchQuery.trim() && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2 px-2">Google Web Search</span>
                    <button
                      onClick={() => {
                        window.open(`https://www.google.com/search?q=${encodeURIComponent(heroSearchQuery.trim())}`, '_blank', 'noopener,noreferrer');
                        setHeroSearchQuery('');
                      }}
                      className="w-full p-2.5 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-xl text-left transition-colors flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-xs"
                    >
                      <Search size={14} className="text-blue-500 shrink-0" />
                      <span>Search &ldquo;{heroSearchQuery}&rdquo; on Google Search</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <p className="text-xs font-bold text-slate-350 mt-4 uppercase">
            Not sure where to begin? Try our <button onClick={() => handleScrollToId('cli-section')} className="text-[#FFF4A3] hover:underline cursor-pointer">CLI Tutorial</button> or <button onClick={() => handleScrollToId('html-section')} className="text-[#FFF4A3] hover:underline cursor-pointer">HTML Course</button>
          </p>

          {/* Quick bands links */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-xl mx-auto">
            {['CLI', 'Git', 'HTML', 'CSS', 'JavaScript', 'React', 'Backend'].map((tech) => {
              const ids: Record<string, string> = {
                'CLI': 'cli-section',
                'HTML': 'html-section',
                'CSS': 'css-section',
                'JavaScript': 'js-section',
                'React': 'react-section',
                'Backend': 'backend-section'
              };
              return (
                <button
                  key={tech}
                  onClick={() => {
                    if (tech === 'Git') {
                      handleLaunchChapter('p0-4-git');
                    } else {
                      handleScrollToId(ids[tech] || '');
                    }
                  }}
                  className="px-4 py-1.5 rounded-full text-xs font-black uppercase border border-slate-600 hover:border-[#04AA6D] hover:text-[#04AA6D] bg-slate-950/20 transition-all cursor-pointer"
                >
                  {tech}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── CORE LANGUAGE SECTIONS (W3Schools band layouts) ── */}
      
      {/* 1. Windows Commands CLI Band */}
      <section id="cli-section" className="bg-[#1e303f] dark:bg-[#111c26] border-b border-[#c1a648]/20 text-[#FFF4A3] py-16 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left space-y-4">
            <span className="text-[10px] font-black uppercase bg-[#c1a648]/20 border border-[#c1a648]/30 px-3 py-1 rounded-full text-[#FFF4A3]">
              Module 1: Terminal Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white font-mono flex items-center gap-3">
              <span>&gt;_</span>
              <svg viewBox="0 0 24 24" className="w-8 h-8 inline-block shrink-0" aria-hidden="true">
                <defs>
                  <linearGradient id="win11-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00adef" />
                    <stop offset="100%" stopColor="#0078d4" />
                  </linearGradient>
                </defs>
                <path fill="url(#win11-blue)" d="M0 0h11.5v11.5H0zM12.5 0H24v11.5H12.5zM0 12.5h11.5V24H0zM12.5 12.5H24V24H12.5z" />
              </svg>
              <span>Windows CLI</span>
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-lg leading-relaxed font-medium">
              The ultimate starting point. Command your operating system, automate backups, and control folders directly via typed text shell utilities.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link 
                href="/cli"
                className="px-5 py-2.5 bg-[#c1a648] hover:bg-[#a38b3a] text-slate-950 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer font-mono no-underline inline-flex items-center justify-center shadow-lg"
              >
                Learn Windows Command Line
              </Link>
            </div>
          </div>
          
          {/* Mock Console */}
          <div className="bg-[#0c0c0c] border border-[#c1a648]/30 rounded-xl overflow-hidden shadow-2xl max-w-md lg:max-w-full mx-auto w-full font-mono text-xs text-left">
            <div className="bg-[#1f1f1f] px-4 py-2 flex items-center justify-between border-b border-[#c1a648]/10 select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c1a648]/80" />
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Command Prompt (cmd.exe)</span>
              <span className="w-4" />
            </div>
            <div className="p-4 space-y-2 max-h-[220px] overflow-y-auto">
              <div className="text-slate-400">Microsoft Windows [Version 10.0.22621.1702]</div>
              <div className="text-slate-400">(c) Microsoft Corporation. All rights reserved.</div>
              <div className="pt-2">C:\Users\Student&gt; <span className="text-white font-bold">ver</span></div>
              <div className="text-slate-400">Microsoft Windows [Version 10.0.22621.1702]</div>
              <div>C:\Users\Student&gt; <span className="text-white font-bold">mkdir Nextsem</span></div>
              <div>C:\Users\Student&gt; <span className="text-white font-bold">cd Nextsem</span></div>
              <div>C:\Users\Student\Nextsem&gt; <span className="text-white font-bold">_</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HTML Band */}
      <section id="html-section" className="bg-[#D9EEE1] text-slate-900 py-16 px-4 md:px-8 transition-colors">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left space-y-4">
            <span className="text-[10px] font-black uppercase bg-[#04AA6D]/20 border border-[#04AA6D]/30 px-3 py-1 rounded-full text-[#036c45]">
              Module 3: Structures
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
                className="px-5 py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-slate-900/10 flex items-center gap-1.5"
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
              Module 4: Stylesheets
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
                className="px-5 py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-lg"
              >
                Learn CSS
              </button>
              <Link 
                href="/playground"
                className="px-5 py-2.5 border-2 border-slate-950 text-slate-950 font-black hover:bg-slate-950 hover:text-white rounded-lg text-xs uppercase tracking-wider transition-all"
              >
                CSS Reference
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. JavaScript Band */}
      <section id="js-section" className="bg-[#282A35] text-white py-16 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left space-y-4">
            <span className="text-[10px] font-black uppercase bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full text-[#04AA6D]">
              Module 5: Scripting
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              JavaScript Logic
            </h2>
            <p className="text-slate-350 text-sm md:text-base max-w-lg leading-relaxed">
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
                className="px-5 py-2.5 border border-slate-400 hover:bg-slate-800 hover:text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all"
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
              <div><span className="text-teal-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-blue-400">calculateTotal</span>(<span className="text-yellow-400">100</span>, <span className="text-yellow-400">0.08</span>)); <span className="text-slate-500">{"// 108"}</span></div>
            </pre>
          </div>
        </div>
      </section>

      {/* 5. React & Backend Bands (Compact side-by-side grids) */}
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
              className="mt-6 px-4 py-2.5 bg-[#282A35] hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-950 rounded-lg text-xs font-black uppercase tracking-wider transition-all self-start cursor-pointer"
            >
              Start React
            </button>
          </div>

          {/* Backend Block */}
          <div id="backend-section" className="bg-[#F3EBF6] dark:bg-[#20152b] text-slate-900 dark:text-white p-8 rounded-2xl border border-purple-200 dark:border-slate-800 text-left flex flex-col justify-between transition-colors">
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400">Server Side (🔌)</span>
              <h3 className="text-2xl font-black uppercase">Node.js & Databases</h3>
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
              className="mt-6 px-4 py-2.5 bg-[#282A35] hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-950 rounded-lg text-xs font-black uppercase tracking-wider transition-all self-start cursor-pointer"
            >
              Start Backend
            </button>
          </div>

        </div>
      </section>

      {/* ── MY LEARNING & DASHBOARD SECTION ── */}
      <section className="py-16 px-4 md:px-6 max-w-[1200px] mx-auto text-left">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[10px] font-black text-[#04AA6D] uppercase tracking-widest block">Active Progress Dashboard</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white uppercase mt-1 tracking-tight">
              My Learning Pathway
            </h2>
          </div>
          
          {!currentUser && (
            <button 
              onClick={handleSignIn}
              className="flex items-center gap-2 bg-[#04AA6D] hover:bg-[#039861] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#04AA6D]/15"
            >
              <LogIn size={14} />
              <span>Sign In with Google</span>
            </button>
          )}
        </div>

        {currentUser ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Active card */}
            <div className="lg:col-span-5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800/80 p-6 rounded-2xl shadow-sm text-left relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-emerald-500/5 to-transparent blur-2xl pointer-events-none" />
              
              <div>
                <span className="text-[9px] font-black uppercase text-[#04AA6D] bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  Active lesson
                </span>
                <h3 className="text-lg font-black text-slate-800 dark:text-white mt-4 uppercase tracking-tight leading-snug">
                  {nextActive.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium leading-relaxed italic">
                  💡 {REAL_LIFE_EXAMPLES[nextActive.id] || "Building standard responsive elements for full-stack deployment"}
                </p>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-wider mb-2">
                  <span>Course Pathway Completed</span>
                  <span>{overallPercent}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-100 dark:bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                    <div 
                      className="bg-gradient-to-r from-[#04AA6D] to-[#39FF14] h-full rounded-full transition-all duration-500" 
                      style={{ width: `${overallPercent}%` }}
                    />
                  </div>
                  <button 
                    onClick={() => handleLaunchChapter(nextActive.id)}
                    className="p-2 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg cursor-pointer transition-transform active:scale-95 shadow-md shadow-[#04AA6D]/20 shrink-0"
                    title="Launch Lesson"
                  >
                    <Play size={14} fill="white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Modules syllabus navigator */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin max-w-full">
                {coursePhases.map((phase, idx) => {
                  const isActive = idx === activeModuleIdx;
                  return (
                    <button
                      key={phase.id}
                      onClick={() => setActiveModuleIdx(idx)}
                      className={`px-4 py-2 rounded-full text-xs font-black uppercase whitespace-nowrap transition-all border cursor-pointer ${
                        isActive 
                          ? "bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-950 font-black shadow-md"
                          : "bg-white border-slate-200 text-slate-600 hover:border-slate-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700"
                      }`}
                    >
                      {phase.id}
                    </button>
                  );
                })}
              </div>

              {/* Chapters list box */}
              <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 text-left flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/60 pb-3">
                  <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase">{currentModule.title}</h4>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{currentModule.topics.length} Lessons</span>
                </div>

                <div className="flex flex-col gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                  {currentModule.topics.map((topic, idx) => {
                    const isCompleted = !!completedChapters[topic.path];
                    const isCurrent = !isCompleted && (idx === 0 || !!completedChapters[currentModule.topics[idx - 1]?.path]);
                    
                    return (
                      <div
                        key={topic.path}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-4 transition-all text-xs ${
                          isCurrent
                            ? "bg-emerald-500/5 border-emerald-500/20 text-slate-800 dark:text-white"
                            : isCompleted
                            ? "bg-slate-50/50 border-slate-200/60 text-slate-400 dark:bg-slate-950/10 dark:border-slate-900/50 dark:text-slate-500"
                            : "bg-transparent border-slate-200/40 text-slate-500 dark:border-slate-800/40"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div className="shrink-0">
                            {isCompleted ? (
                              <CheckCircle size={14} className="text-emerald-500" />
                            ) : isCurrent ? (
                              <div className="w-3.5 h-3.5 rounded-full border border-[#04AA6D] flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] animate-ping" />
                              </div>
                            ) : (
                              <div className="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-800" />
                            )}
                          </div>
                          <span className={`font-bold truncate ${isCurrent ? 'text-slate-800 dark:text-white font-extrabold' : ''}`}>{topic.label}</span>
                        </div>

                        <button 
                          onClick={() => handleLaunchChapter(topic.path)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                            isCurrent 
                              ? "bg-[#04AA6D] hover:bg-[#039861] text-white" 
                              : "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {isCompleted ? 'Review' : 'Start'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Guest Timeline Show */
          <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 text-center space-y-6">
            <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase">Syllabus Overview (9 Structured Modules)</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coursePhases.map((phase, idx) => (
                <div key={phase.id} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 text-left flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-xs shrink-0">
                    {phase.id}
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 block uppercase">Module 0{idx + 1}</span>
                    <span className="text-xs font-black text-slate-800 dark:text-white uppercase block mt-0.5 tracking-tight leading-snug">{phase.title}</span>
                    <span className="text-[10px] text-slate-500 font-semibold block mt-1">⏳ {phase.duration} • {phase.topics.length} chapters</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 max-w-md mx-auto">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Log in using Google Authentication to track your chapter completions, build customized sandbox portfolios, and receive your developer certificates.
              </p>
              <button 
                onClick={handleSignIn}
                className="mt-4 px-6 py-3 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#04AA6D]/20 w-full"
              >
                Sign In & Start Free Pathway
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ── EXERCISES & QUIZZES SECTION ── */}
      <section id="exercises-section" className="bg-slate-100 dark:bg-[#0c1222] py-16 px-4 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-[1200px] mx-auto text-center space-y-8">
          <div>
            <span className="text-[10px] font-black text-[#04AA6D] uppercase tracking-widest block">Self-Assessment Drills</span>
            <h2 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight mt-1">
              Interactive Exercises
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium mt-1">
              Reinforce coding muscle-memory. Solve multiple-choice questions, match parameters, and complete interactive assignments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {[
              { title: "CLI Drills", desc: "Execute filesystem commands, network checks, and attributes.", link: "cli-ch1-basics", icon: "💻" },
              { title: "Git Simulator", desc: "Initialize repos, stage changes, commit logs, and merge branches.", link: "p0-4-git", icon: "🌿" },
              { title: "HTML Quizzes", desc: "Identify tags, form structures, and SEO anchor keywords.", link: "p1-1-intro-and-text", icon: "📝" },
              { title: "CSS selectors", desc: "Select parameters, declare grids, and configure variables.", link: "p2-1-selectors", icon: "🎨" },
              { title: "JS arrays", desc: "Map lists, loop states, and trigger DOM click handlers.", link: "p3-1-basics", icon: "⚡" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#0f172a] p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col justify-between min-h-[160px] hover:-translate-y-1 transition-transform cursor-pointer"
                onClick={() => handleLaunchChapter(item.link)}
              >
                <div className="space-y-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
                <span className="text-[10px] font-black text-[#04AA6D] uppercase tracking-widest flex items-center gap-0.5 mt-4 hover:underline">
                  <span>Start Drill</span>
                  <ChevronRight size={10} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES & BADGES SECTION ── */}
      <section id="certificate-section" className="py-16 px-4 max-w-[1200px] mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-4">
            <span className="text-[10px] font-black text-[#04AA6D] uppercase tracking-widest block">Official Credentials</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tight leading-tight">
              Get Certified in Web Dev
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
              Complete all 9 structured modules, pass the final capstone project checkoffs, and earn your verified **Nextsem Academy Developer Certification** to showcase to hiring managers.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#04AA6D]" />
                <span>100% Free Verified Certificate</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#04AA6D]" />
                <span>Shareable Link on LinkedIn & Resume</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#04AA6D]" />
                <span>Verified student serial credential code</span>
              </li>
            </ul>

            <div className="pt-4">
              <button 
                onClick={() => handleScrollToId('certificate-section')}
                className="px-5 py-3 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#04AA6D]/20"
              >
                Earn Your Certificate
              </button>
            </div>
          </div>

          {/* Certificate mock container */}
          <div className="relative p-6 md:p-8 bg-[#1f2029] text-white border-4 border-slate-700 rounded-2xl shadow-2xl flex flex-col justify-between items-center text-center font-serif min-h-[300px] select-none">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 border-t-2 border-l-2 border-slate-600 w-6 h-6" />
            <div className="absolute top-2 right-2 border-t-2 border-r-2 border-slate-600 w-6 h-6" />
            <div className="absolute bottom-2 left-2 border-b-2 border-l-2 border-slate-600 w-6 h-6" />
            <div className="absolute bottom-2 right-2 border-b-2 border-r-2 border-slate-600 w-6 h-6" />

            <div className="space-y-1 mt-4">
              <span className="font-sans text-[10px] tracking-widest text-[#FFF4A3] font-black uppercase block">Certificate of Completion</span>
              <h3 className="text-xl md:text-2xl font-black tracking-tight text-white uppercase font-sans">Nextsem Academy</h3>
            </div>

            <div className="my-6">
              <p className="text-[10px] text-slate-400 font-sans uppercase font-bold tracking-wider">This verifies that student</p>
              <h4 className="text-lg md:text-xl font-bold text-white italic underline underline-offset-4 decoration-[#04AA6D] font-serif py-2">
                {currentUser ? currentUser.name : "Your Name Here"}
              </h4>
              <p className="text-[10px] text-slate-400 max-w-sm font-sans font-medium leading-relaxed mt-1">
                has successfully completed all requirements and quizzes for the course pathway in **Full Stack Web Development (Modules 1-9)**.
              </p>
            </div>

            <div className="w-full flex justify-between items-end border-t border-slate-800/80 pt-4 mt-2 font-sans">
              <div className="text-left">
                <span className="text-[8px] text-slate-500 uppercase block font-bold">Issued on</span>
                <span className="text-[9px] text-slate-350 font-bold block">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#04AA6D]/20 flex items-center justify-center text-[#04AA6D] border border-[#04AA6D]/40">
                <Award size={16} />
              </div>
              <div className="text-right">
                <span className="text-[8px] text-slate-500 uppercase block font-bold">Credential Serial</span>
                <span className="text-[9px] text-[#FFF4A3] font-mono block">NS-FST-424286</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── FULL STACK ROADMAP ── */}
      <div className="bg-gradient-to-b from-[#060d1a] to-[#0a1120]">
        <FullStackRoadmap />
      </div>

      {/* ── FOOTER (W3Schools style columned) ── */}
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
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-black uppercase text-white text-xs tracking-wider">Simulators & Tools</h5>
            <ul className="space-y-2 font-medium">
              <li><Link href="/cmd" target="_blank" className="hover:text-white">🪟 Windows CMD Simulator</Link></li>
              <li><Link href="/git" target="_blank" className="hover:text-white">🌿 Git Simulator</Link></li>
              <li><Link href="/playground" className="hover:text-white">💻 Code Sandbox Playground</Link></li>
              <li><Link href="/ncert" className="hover:text-white">📚 NCERT Study Companion</Link></li>
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
            <h5 className="font-black uppercase text-white text-xs tracking-wider">Legal & Academy</h5>
            <ul className="space-y-2 font-medium">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Support</Link></li>
              <li><Link href="/about" className="hover:text-white">About Nextsem</Link></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer / W3Schools style */}
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

      </footer>

    </div>
  );
}
