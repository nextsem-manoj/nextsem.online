"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth, signInWithGoogle } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import CompilerShowcaseAnimation from '@/components/CompilerShowcaseAnimation';
import StudentProjectsSection from '@/components/StudentProjectsSection';
import FullStackRoadmap from '@/components/FullStackRoadmap';
import Footer from '@/components/Footer';
import WindowsIcon from '@/components/WindowsIcon';
import BrandLogoIcon from '@/components/BrandLogoIcon';
import searchIndexData from '@/data/searchIndex.json';
import { 
  Code, Terminal, Play, LogIn, LogOut, Search, Sparkles, ArrowRight, Rocket, X,
  Layers, Laptop, CheckCircle2, ShieldCheck, Zap, BookOpen, ChevronRight, ExternalLink
} from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo?: string;
}

interface SearchItem {
  id: string;
  title: string;
  content: string;
  phase: string;
  duration?: string;
  color?: string;
  icon?: string;
  url?: string;
}

const searchItems = searchIndexData as SearchItem[];

const AUTOCOMPLETE_DICTIONARY = [
  "html5 semantic tags",
  "html headings h1 to h6",
  "html paragraph tag",
  "html anchor tag hyperlinks",
  "html img image tag",
  "html tables and forms",
  "html input types and buttons",
  "css flexbox and grid layouts",
  "css selectors and box model",
  "css keyframe animations",
  "javascript es6 functions",
  "javascript array map filter reduce",
  "javascript async await promises",
  "react usestate and useeffect",
  "react components and props",
  "node express rest apis",
  "windows cmd dir copy mkdir",
  "git init commit branch merge",
  "windows 11 command prompt terminal"
];

const highlightMatch = (text: string, query: string) => {
  if (!query || !query.trim()) return <span>{text}</span>;
  const escapedQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="text-[#04AA6D] font-bold underline decoration-[#04AA6D]">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

const QUICK_TOPIC_PILLS = [
  { label: "HTML5 Tags", query: "HTML5 semantic tags" },
  { label: "🪟 Windows CMD", query: "dir copy mkdir" },
  { label: "CSS Flex & Grid", query: "CSS Flexbox & Grid" },
  { label: "JavaScript ES6", query: "JavaScript functions" },
  { label: "React Components", query: "React useState" },
  { label: "Git & GitHub", query: "git commit push" },
];

// ── NEW APP FEATURES SHOWCASE (HORIZONTAL SCROLL UNDER HEADER) ──
const NEW_APP_FEATURES = [
  {
    id: "playground",
    badge: "NEW",
    title: "Code Playground (Emmet + Prettier Live Server)",
    href: "/playground",
  },
  {
    id: "tracks",
    badge: "TRACKS",
    title: "6 Structured Developer Tracks (CLI to Full Stack)",
    href: "/tracks",
  },
  {
    id: "projects",
    badge: "15+ LABS",
    title: "Interactive Mini-Projects & Canvas Labs",
    href: "/projects",
  },
  {
    id: "cli",
    badge: "SIMULATOR",
    title: "🪟 Windows 11 CLI Terminal Fast-Track",
    href: "/cli",
  },
  {
    id: "html",
    badge: "98+ TAGS",
    title: "HTML5 Architecture & 1-to-1 PC Screenshots",
    href: "/html",
  },
  {
    id: "git",
    badge: "GIT FLOW",
    title: "Git & GitHub Version Control Workflow",
    href: "/git",
  },
];

const CAREER_TRACKS = [
  {
    id: "cli",
    icon: "🪟",
    title: "Windows 11 CLI & CMD",
    lessons: "15 Chapters",
    badge: "FOUNDATION",
    desc: "Master directory navigation (dir, cd), file attributes (attrib), scripting, and networking tools in authentic Windows CMD.",
    href: "/cli",
    color: "from-blue-500/20 to-transparent",
    border: "border-blue-500/30 hover:border-blue-400",
  },
  {
    id: "html",
    icon: "🌐",
    title: "HTML5 Semantic Engine",
    lessons: "98+ Tags",
    badge: "CORE WEB",
    desc: "Build modern, accessible web layouts with semantic tags, 1-to-1 authentic PC screenshots, and pure HTML structure.",
    href: "/html",
    color: "from-emerald-500/20 to-transparent",
    border: "border-emerald-500/30 hover:border-[#04AA6D]",
  },
  {
    id: "css",
    icon: "🎨",
    title: "Modern CSS3 & Styling",
    lessons: "40+ Lessons",
    badge: "DESIGN",
    desc: "Master Flexbox, CSS Grid, keyframe animations, dark mode themes, and responsive design for every device viewport.",
    href: "/css",
    color: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/30 hover:border-cyan-400",
  },
  {
    id: "js",
    icon: "⚡",
    title: "JavaScript ES6+ & DOM",
    lessons: "50+ Concepts",
    badge: "PROGRAMMING",
    desc: "Understand closures, array methods (map, filter, reduce), async/await, fetch API, and interactive event listeners.",
    href: "/tracks",
    color: "from-amber-500/20 to-transparent",
    border: "border-amber-500/30 hover:border-amber-400",
  },
  {
    id: "react",
    icon: "⚛️",
    title: "React 19 Engineering",
    lessons: "Components & Hooks",
    badge: "FRONTEND",
    desc: "Build dynamic, scalable client applications with custom hooks, state management, component composition, and Tailwind.",
    href: "/tracks",
    color: "from-sky-500/20 to-transparent",
    border: "border-sky-500/30 hover:border-sky-400",
  },
  {
    id: "backend",
    icon: "🚀",
    title: "Full-Stack Node & Git Flow",
    lessons: "APIs & Deployment",
    badge: "FULL-STACK",
    desc: "Create RESTful APIs with Node.js and Express, master Git branch and merge workflows, and deploy live to production.",
    href: "/tracks",
    color: "from-purple-500/20 to-transparent",
    border: "border-purple-500/30 hover:border-purple-400",
  },
];

const CORE_PILLARS = [
  {
    icon: <Zap className="w-6 h-6 text-[#04AA6D]" />,
    title: "100% Free Forever",
    desc: "Zero paywalls, no trial periods, and no credit card required. Pure open education for every aspiring engineer.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-[#04AA6D]" />,
    title: "1-to-1 Windows 11 Verification",
    desc: "Every lesson features authentic PC screenshots and Command Prompt outputs so you can verify your work line-by-line.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-[#04AA6D]" />,
    title: "5-Point Concise Lesson Standard",
    desc: "No overwhelming walls of text. Maximum 5 bullet points with maximum 8 words per point for lightning-fast comprehension.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#04AA6D]" />,
    title: "Pure Native Flutter Companion",
    desc: "High-performance offline mobile client on Android & iOS with 60-120 FPS interactive simulators and zero lag.",
  },
];

export default function HomeClient() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Authenticated state listener
  useEffect(() => {
    const handleAuthChange = () => {
      const saved = localStorage.getItem('nextsem_user');
      if (saved) {
        try {
          setCurrentUser(JSON.parse(saved));
        } catch {
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
    };

    handleAuthChange();
    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('nextsem_auth_changed', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('nextsem_auth_changed', handleAuthChange);
    };
  }, []);

  // Click outside to close search dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      if (res?.user) {
        const profile: UserProfile = {
          name: res.user.displayName || "Developer",
          email: res.user.email || "",
          avatar: res.user.displayName ? res.user.displayName.charAt(0).toUpperCase() : "D",
          photo: res.user.photoURL || undefined
        };
        localStorage.setItem("nextsem_user", JSON.stringify(profile));
        setCurrentUser(profile);
        window.dispatchEvent(new Event("nextsem_auth_changed"));
      }
    } catch (e) {
      console.error("Sign-in failed:", e);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      localStorage.removeItem("nextsem_user");
      window.dispatchEvent(new Event("nextsem_auth_changed"));
    } catch (e) {
      console.error("Logout failed:", e);
    }
  };

  // Autocomplete candidate calculation (Tab to complete)
  const autocompleteSuggestion = useMemo(() => {
    const cleanQ = heroSearchQuery.trim().toLowerCase();
    if (cleanQ.length < 2) return '';

    // 1. Check curated dictionary
    const dictMatch = AUTOCOMPLETE_DICTIONARY.find(term => 
      term.startsWith(cleanQ) && term !== cleanQ
    );
    if (dictMatch) return dictMatch;

    // 2. Check lesson titles from search index
    const titleMatch = searchItems.find(item => 
      item.title.toLowerCase().startsWith(cleanQ) && item.title.toLowerCase() !== cleanQ
    );
    if (titleMatch) return titleMatch.title;

    return '';
  }, [heroSearchQuery]);

  // Search results ranking
  const searchResults = useMemo(() => {
    const cleanQ = heroSearchQuery.trim().toLowerCase();
    if (!cleanQ) return [];

    const tokens = cleanQ.split(/\s+/).filter(Boolean);

    const scored = searchItems.map(item => {
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();
      const phaseLower = (item.phase || '').toLowerCase();
      let score = 0;

      if (titleLower === cleanQ) score += 50;
      else if (titleLower.startsWith(cleanQ)) score += 30;
      else if (titleLower.includes(cleanQ)) score += 20;

      if (phaseLower.includes(cleanQ)) score += 15;

      for (const t of tokens) {
        if (titleLower.includes(t)) score += 10;
        if (phaseLower.includes(t)) score += 5;
        if (contentLower.includes(t)) score += 2;
      }

      return { item, score };
    });

    return scored
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(s => s.item);
  }, [heroSearchQuery]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' && autocompleteSuggestion) {
      e.preventDefault();
      setHeroSearchQuery(autocompleteSuggestion);
      return;
    }

    if (e.key === 'ArrowDown' && isDropdownOpen && searchResults.length > 0) {
      e.preventDefault();
      setSelectedIndex(prev => (prev < searchResults.length - 1 ? prev + 1 : 0));
      return;
    }

    if (e.key === 'ArrowUp' && isDropdownOpen && searchResults.length > 0) {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : searchResults.length - 1));
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
        const targetUrl = searchResults[selectedIndex].url || '/html';
        setIsDropdownOpen(false);
        router.push(targetUrl);
      } else if (searchResults.length > 0) {
        const targetUrl = searchResults[0].url || '/html';
        setIsDropdownOpen(false);
        router.push(targetUrl);
      }
      return;
    }

    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
      inputRef.current?.blur();
    }
  };

  const handlePillClick = (query: string) => {
    setHeroSearchQuery(query);
    setIsDropdownOpen(true);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D]/30">
      
      {/* ── TOP STREAMLINED NAVBAR (CLEAN & SPACIOUS) ── */}
      <header className="sticky top-0 z-40 bg-[#17181c]/95 backdrop-blur-md border-b border-slate-800 shadow-sm select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 select-none group">
              <BrandLogoIcon className="w-8 h-8 text-xs" roundedClass="rounded-lg" />
              <div className="flex flex-col justify-center text-left">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white uppercase leading-none">
                  NextSem<span className="text-[#04AA6D] lowercase font-bold">.online</span>
                </span>
                <span className="text-[9px] font-bold text-[#04AA6D] tracking-wider uppercase font-mono mt-0.5 leading-none">
                  Full Stack Dev Curriculum
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
            <Link href="/html" className="hover:text-[#04AA6D] transition-colors flex items-center gap-1">
              <span>HTML5 Course</span>
            </Link>
            <Link href="/cli" className="hover:text-[#04AA6D] transition-colors flex items-center gap-1">
              <span>🪟 Windows CLI</span>
            </Link>
            <Link href="/tracks" className="hover:text-[#04AA6D] transition-colors flex items-center gap-1">
              <span>Career Tracks</span>
            </Link>
            <Link href="/projects" className="hover:text-[#04AA6D] transition-colors flex items-center gap-1">
              <span>15+ Projects</span>
            </Link>
            <Link href="/playground" className="text-[#04AA6D] hover:text-[#039861] transition-colors flex items-center gap-1 font-extrabold bg-[#04AA6D]/10 px-2.5 py-1 rounded-full border border-[#04AA6D]/20">
              <Code size={13} />
              <span>Playground</span>
            </Link>
          </nav>

          {/* Right: User Authentication / Profile */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/profile"
                  className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-2.5 py-1.5 rounded-full text-xs font-bold text-slate-200 hover:text-white transition-colors"
                >
                  {currentUser.photo ? (
                    <img src={currentUser.photo} alt="" className="w-5 h-5 rounded-full object-cover" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-[#04AA6D] text-white flex items-center justify-center font-black text-[9px]">
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="hidden sm:inline max-w-[90px] truncate">{currentUser.name.split(" ")[0]}</span>
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                  title="Sign Out"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button 
                onClick={handleSignIn}
                className="flex items-center gap-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md shadow-[#04AA6D]/20 cursor-pointer flex-shrink-0"
              >
                <LogIn size={13} />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── SUB-HEADER FEATURE TICKER BAR (PLACED UNDER THE HEADER, NOT INSIDE) ── */}
      <div className="w-full bg-[#12141c] border-b border-slate-800/80 py-2.5 overflow-hidden relative select-none z-30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 relative flex items-center">
          {/* Left Subtle Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#12141c] to-transparent z-10 pointer-events-none" />

          {/* Continuous Seamless Auto-Moving Marquee Container */}
          <div className="w-full overflow-hidden">
            <div className="flex items-center gap-3 w-max animate-marquee-ltr hover:[animation-play-state:paused] py-0.5 px-2">
              {[...NEW_APP_FEATURES, ...NEW_APP_FEATURES].map((item, idx) => (
                <Link
                  key={`${item.id}-${idx}`}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#171b26] hover:bg-[#1f2535] border border-slate-700/80 hover:border-[#04AA6D] rounded-full text-xs text-slate-200 hover:text-white transition-all duration-200 flex-shrink-0 group/pill shadow-sm"
                >
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-[#04AA6D]/20 text-[#04AA6D] border border-[#04AA6D]/30 group-hover/pill:bg-[#04AA6D] group-hover/pill:text-white transition-colors">
                    {item.badge}
                  </span>
                  <span className="font-semibold whitespace-nowrap text-xs text-slate-200 group-hover/pill:text-white">
                    {item.title}
                  </span>
                  <ArrowRight size={12} className="text-slate-500 group-hover/pill:text-[#04AA6D] group-hover/pill:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Subtle Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#12141c] to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* ── SECTION 1: HERO WITH INLINE SEARCH & COMPILER SHOWCASE ── */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 border-b border-slate-800 overflow-visible text-center bg-gradient-to-b from-[#17181c] via-[#1a1b22] to-[#17181c]">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full opacity-10 pointer-events-none bg-[radial-gradient(#04AA6D_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#04AA6D]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c1328] border border-slate-800 text-slate-300 text-xs font-semibold shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-pulse" />
            <span className="text-white font-bold">Nextsem Academy</span>
            <span className="text-slate-600 font-bold">•</span>
            <span>Complete Free Developer Curriculum</span>
          </div>

          {/* Master Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-3xl mx-auto">
            Become a Job-Ready <span className="text-[#04AA6D]">Full Stack</span> Web Developer
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Learn modern web development step-by-step on <span className="inline-flex items-center gap-1 font-semibold text-white"><WindowsIcon className="w-4 h-4 text-white inline-block -mt-0.5" /> Windows</span>. Master HTML5, CSS3, JavaScript, React, and Node.js with live coding practice.
          </p>

          {/* ── INLINE HERO SEARCH WITH TAB AUTOCOMPLETE & LIVE DROPDOWN ── */}
          <div ref={searchContainerRef} className="max-w-2xl mx-auto pt-2 relative z-30">
            <div className="relative flex items-center bg-[#0f1117] hover:bg-[#13161f] focus-within:bg-[#13161f] border border-slate-700/90 focus-within:border-[#04AA6D] rounded-2xl shadow-2xl transition-all">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#04AA6D] pointer-events-none" />
              
              {/* Ghost Autocomplete Text Overlay */}
              {autocompleteSuggestion && heroSearchQuery.trim().length > 0 && autocompleteSuggestion.toLowerCase().startsWith(heroSearchQuery.toLowerCase()) && (
                <div className="absolute left-12 right-36 top-0 bottom-0 flex items-center text-sm sm:text-base pointer-events-none overflow-hidden select-none font-sans pl-0.5">
                  <span className="text-transparent">{heroSearchQuery}</span>
                  <span className="text-slate-500">{autocompleteSuggestion.slice(heroSearchQuery.length)}</span>
                </div>
              )}

              <input 
                ref={inputRef}
                type="text"
                placeholder="Search 100+ HTML tags, CLI commands, React hooks, APIs..."
                value={heroSearchQuery}
                onChange={(e) => {
                  setHeroSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                  setSelectedIndex(-1);
                }}
                onFocus={() => {
                  if (heroSearchQuery.trim().length > 0) {
                    setIsDropdownOpen(true);
                  }
                }}
                onKeyDown={handleKeyDown}
                className="relative z-10 w-full h-12 sm:h-14 pl-12 pr-32 text-sm sm:text-base bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-0 cursor-text"
              />

              {/* Right Controls: Tab Hint Pill & Clear / Search Button */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 z-20">
                {autocompleteSuggestion && (
                  <button
                    type="button"
                    onClick={() => {
                      setHeroSearchQuery(autocompleteSuggestion);
                      inputRef.current?.focus();
                    }}
                    className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] font-mono text-[#04AA6D] font-bold shadow-sm transition-all cursor-pointer select-none"
                    title="Click or press Tab to autocomplete"
                  >
                    <span>Tab ⇥</span>
                  </button>
                )}

                {heroSearchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setHeroSearchQuery('');
                      setIsDropdownOpen(false);
                      inputRef.current?.focus();
                    }}
                    className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                    title="Clear Search"
                  >
                    <X size={16} />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    if (searchResults.length > 0) {
                      const targetUrl = selectedIndex >= 0 ? searchResults[selectedIndex].url : searchResults[0].url;
                      setIsDropdownOpen(false);
                      router.push(targetUrl || '/html');
                    } else if (heroSearchQuery) {
                      setIsDropdownOpen(true);
                    }
                  }}
                  className="px-3.5 py-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-1"
                >
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* ── INLINE SEARCH RESULTS DROPDOWN CARD ── */}
            {isDropdownOpen && heroSearchQuery.trim().length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-[#10131d] border border-slate-700/90 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden text-left animate-in fade-in-50 zoom-in-95 duration-150">
                <div className="px-3.5 py-2 bg-[#161a27] border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#04AA6D]" />
                    <span>{searchResults.length} Results for &ldquo;{heroSearchQuery}&rdquo;</span>
                  </span>
                  <span className="hidden sm:inline text-slate-400 text-[10px]">
                    {autocompleteSuggestion ? (
                      <span className="text-[#04AA6D] font-bold">Tip: Press Tab ⇥ to autocomplete</span>
                    ) : (
                      <span>↑↓ to navigate • ↵ to open • Esc to close</span>
                    )}
                  </span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="max-h-[360px] overflow-y-auto divide-y divide-slate-800/60 p-1.5">
                    {searchResults.map((item, idx) => {
                      const isSelected = idx === selectedIndex;
                      return (
                        <Link
                          key={item.id || idx}
                          href={item.url || "/html"}
                          onClick={() => setIsDropdownOpen(false)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all cursor-pointer group ${
                            isSelected 
                              ? "bg-[#04AA6D]/20 border border-[#04AA6D]/50 shadow-sm" 
                              : "hover:bg-[#161a28] border border-transparent"
                          }`}
                        >
                          <span className="text-lg shrink-0 mt-0.5 p-1 rounded-lg bg-slate-800/80 border border-slate-700">
                            {item.icon || "📄"}
                          </span>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors truncate">
                                {highlightMatch(item.title, heroSearchQuery)}
                              </h4>
                              {item.phase && (
                                <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-slate-800 text-emerald-400 border border-emerald-500/30">
                                  {item.phase}
                                </span>
                              )}
                            </div>

                            <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                              {highlightMatch(item.content, heroSearchQuery)}
                            </p>
                          </div>

                          <div className="flex items-center gap-1 shrink-0 text-slate-500 group-hover:text-[#04AA6D] mt-1.5">
                            <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-wider">Open</span>
                            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-6 text-center text-slate-400 space-y-2">
                    <p className="text-sm font-bold text-white">
                      No lessons found for &ldquo;{heroSearchQuery}&rdquo;
                    </p>
                    <p className="text-xs text-slate-400">
                      Try searching for <button type="button" onClick={() => handlePillClick("HTML5 semantic tags")} className="text-[#04AA6D] underline font-bold">HTML tags</button>, <button type="button" onClick={() => handlePillClick("dir copy mkdir")} className="text-[#04AA6D] underline font-bold">🪟 Windows CMD</button>, or <button type="button" onClick={() => handlePillClick("CSS Flexbox & Grid")} className="text-[#04AA6D] underline font-bold">CSS Flexbox</button>.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Quick Topic Search Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3 text-xs">
              <span className="text-slate-400 font-bold text-[11px] mr-1 hidden sm:inline">Popular:</span>
              {QUICK_TOPIC_PILLS.map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePillClick(pill.query)}
                  className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-[#04AA6D]/20 border border-slate-700 hover:border-[#04AA6D]/40 text-slate-300 hover:text-white text-[11px] font-medium transition-colors cursor-pointer"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              href="/html"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-xl shadow-[#04AA6D]/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border border-emerald-400/40"
            >
              <Play size={18} className="fill-white" />
              <span>Start HTML5 Lessons »</span>
            </Link>

            <Link
              href="/tracks"
              className="px-5 sm:px-6 py-3.5 sm:py-4 bg-[#1e2029] hover:bg-[#252834] text-white font-bold text-sm sm:text-base rounded-xl border border-slate-700 hover:border-[#04AA6D] transition-all flex items-center gap-2 cursor-pointer shadow-lg group"
            >
              <Sparkles size={18} className="text-[#04AA6D] group-hover:scale-110 transition-transform" />
              <span>🎯 Developer Tracks</span>
            </Link>

            <Link
              href="/projects"
              className="px-5 sm:px-6 py-3.5 sm:py-4 bg-[#1e2029] hover:bg-[#252834] text-white font-bold text-sm sm:text-base rounded-xl border border-slate-700 hover:border-[#04AA6D] transition-all flex items-center gap-2 cursor-pointer shadow-lg group"
            >
              <Rocket size={18} className="text-[#04AA6D] group-hover:scale-110 transition-transform" />
              <span>🚀 15+ Mini-Projects</span>
            </Link>
          </div>

          {/* ── 1-MIN VIDEO SHOWCASE: ONLINE COMPILER ── */}
          <div className="max-w-[340px] sm:max-w-[380px] md:max-w-3xl lg:max-w-4xl mx-auto pt-6 text-left space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2 px-1 select-none">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-pulse" />
                <span>🌹 Fast-Track Project • Realistic Blooming Rose (HTML + CSS + JS)</span>
              </div>
              
              <Link
                href="/playground"
                className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-white font-bold text-xs tracking-wide shadow-md shadow-[#04AA6D]/20 hover:shadow-[#04AA6D]/40 hover:-translate-y-0.5 transition-all duration-200 border border-emerald-400/40 group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Code size={13} className="group-hover:rotate-12 transition-transform duration-300 text-white" />
                <span>Open Online Playground</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200 text-white" />
              </Link>
            </div>

            <CompilerShowcaseAnimation />
          </div>

        </div>
      </section>

      {/* ── SECTION 2: 6 STRUCTURED CAREER TRACKS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="px-3 py-1 rounded-full bg-[#04AA6D]/10 text-[#04AA6D] border border-[#04AA6D]/30 text-xs font-extrabold uppercase tracking-wider">
            Structured Pathways
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            6 Master Pathways from Novice to Architect
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Each track is engineered step-by-step with 1-to-1 authentic PC screenshots, interactive terminal practice, and zero fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER_TRACKS.map((track) => (
            <Link
              key={track.id}
              href={track.href}
              className={`p-6 rounded-2xl bg-gradient-to-b ${track.color} bg-[#161a26] border ${track.border} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#04AA6D]/10 flex flex-col justify-between group cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                    {track.icon}
                  </span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {track.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#04AA6D] transition-colors">
                  {track.title}
                </h3>
                <p className="text-xs text-[#04AA6D] font-mono font-bold mt-1">
                  {track.lessons}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mt-3">
                  {track.desc}
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-slate-300 group-hover:text-[#04AA6D] mt-6 pt-4 border-t border-slate-800">
                <span>Start Learning Track</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: INTERACTIVE SIMULATOR & PLAYGROUND ARENA ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Windows CMD Simulator */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#131622] border border-slate-700/80 hover:border-[#04AA6D]/60 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-black uppercase tracking-wider">
                  Authentic PC Shell
                </span>
                <span className="text-xs text-slate-400">• Windows 11</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">
                🪟 Windows 11 Command Prompt Simulator
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                Practice 30+ fundamental CMD commands in a realistic terminal sandbox without risk to your PC. Learn directory trees, file copies, batch scripting, and networking tools.
              </p>

              {/* Terminal Code Snippet Preview */}
              <div className="mt-5 p-3.5 rounded-xl bg-black/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-1 select-none">
                <div className="text-slate-500">Microsoft Windows [Version 10.0.22631.3296]</div>
                <div className="text-slate-500">(c) Microsoft Corporation. All rights reserved.</div>
                <div className="pt-1 text-[#04AA6D]">C:\Users\Developer&gt; dir /a:h</div>
                <div className="text-slate-400 pl-2">Volume in drive C is OS</div>
                <div className="text-slate-400 pl-2">Directory of C:\Users\Developer</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-bold">15 Interactive Chapters</span>
              <Link
                href="/cli"
                className="px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Launch CLI Simulator</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Card 2: Online Code Playground */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#131622] border border-slate-700/80 hover:border-[#04AA6D]/60 transition-all flex flex-col justify-between shadow-xl group">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[#04AA6D] border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider">
                  Live Web Server
                </span>
                <span className="text-xs text-slate-400">• Emmet + Prettier</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#04AA6D] transition-colors">
                ⚡ Instant Live Code Playground
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                Write HTML5, CSS3, and modern JavaScript with real-time browser preview. Includes auto-formatting, Emmet abbreviations, and zero setup required.
              </p>

              {/* Editor Preview */}
              <div className="mt-5 p-3.5 rounded-xl bg-black/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-1 select-none">
                <div className="text-slate-500">&lt;!-- Live Web Sandbox --&gt;</div>
                <div><span className="text-blue-400">&lt;div</span> <span className="text-yellow-300">class</span>=<span className="text-emerald-300">&quot;dev-card&quot;</span><span className="text-blue-400">&gt;</span></div>
                <div className="pl-4 text-white">&lt;h1&gt;Hello World!&lt;/h1&gt;</div>
                <div><span className="text-blue-400">&lt;/div&gt;</span></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-bold">Zero Installation Needed</span>
              <Link
                href="/playground"
                className="px-4 py-2 bg-[#1f2433] hover:bg-[#282f42] text-white border border-slate-600 hover:border-[#04AA6D] text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Open Playground</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 4: FEATURED STUDENT PROJECTS & CANVAS LABS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-slate-800">
        <StudentProjectsSection />
      </section>

      {/* ── SECTION 5: THE NEXTSEM ADVANTAGE (4 CORE PILLARS) ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="px-3 py-1 rounded-full bg-[#04AA6D]/10 text-[#04AA6D] border border-[#04AA6D]/30 text-xs font-extrabold uppercase tracking-wider">
            Engineered for Mastery
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Why Nextsem Academy Is Different
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Built from the ground up for developers learning on PC while practicing on mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141824] border border-slate-800 hover:border-[#04AA6D]/40 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#04AA6D]/10 border border-[#04AA6D]/20 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: FULL STACK DEVELOPER ROADMAP ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full border-b border-slate-800">
        <FullStackRoadmap />
      </section>

      {/* ── SECTION 7: FINAL CALL TO ACTION ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 text-center max-w-5xl mx-auto w-full">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#182030] to-[#12151e] border border-[#04AA6D]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#04AA6D]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Start Your Software Engineering Journey Today
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            From your very first Windows terminal command to deploying production full-stack web applications. 100% free and open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <Link
              href="/html"
              className="px-8 py-4 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-xl shadow-xl shadow-[#04AA6D]/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border border-emerald-400/40"
            >
              <Play size={18} className="fill-white" />
              <span>Launch Free Curriculum »</span>
            </Link>

            <Link
              href="/tracks"
              className="px-6 py-4 bg-[#141824] hover:bg-[#1a2030] text-white font-bold text-sm sm:text-base rounded-xl border border-slate-700 hover:border-white transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Explore All 6 Tracks</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── UNIFIED COMPLIANCE FOOTER ── */}
      <Footer />

    </div>
  );
}
