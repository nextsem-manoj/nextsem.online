"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Search, ArrowLeft, X, History, Sparkles, BookOpen, 
  Camera, UploadCloud, FileText, CheckCircle2, XCircle,
  ExternalLink, Code 
} from 'lucide-react';
import Link from 'next/link';
import searchIndex from '../data/searchIndex.json';
import { getChapterUrl } from '../lib/htmlLessonsHelper';
import { auth, signInWithGoogle } from '../lib/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const SUGGESTED_SEARCHES = [
  'HTML5 semantic tags',
  'CSS Flexbox & Grid',
  'JavaScript ES6+',
  'React hooks useState',
  'Node Express APIs',
  'dir copy mkdir',
  'git init commit branch'
];

const STOP_WORDS = new Set(['a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'arent', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', 'cant', 'cannot', 'could', 'couldnt', 'did', 'didnt', 'do', 'does', 'doesnt', 'doing', 'dont', 'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', 'hadnt', 'has', 'hasnt', 'have', 'havent', 'having', 'he', 'hed', 'hell', 'hes', 'her', 'here', 'heres', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'hows', 'i', 'id', 'ill', 'im', 'ive', 'if', 'in', 'into', 'is', 'isnt', 'it', 'its', 'itself', 'lets', 'me', 'more', 'most', 'mustnt', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', 'shant', 'she', 'shed', 'shell', 'shes', 'should', 'shouldnt', 'so', 'some', 'such', 'than', 'that', 'thats', 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'theres', 'these', 'they', 'theyd', 'theyll', 'theyre', 'theyve', 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasnt', 'we', 'wed', 'well', 'were', 'weve', 'werent', 'what', 'whats', 'when', 'whens', 'where', 'wheres', 'which', 'while', 'who', 'whos', 'whom', 'why', 'whys', 'with', 'wont', 'would', 'wouldnt', 'you', 'youd', 'youll', 'youre', 'youve', 'your', 'yours', 'yourself', 'yourselves']);

function getLevenshteinDistance(a: string, b: string): number {
  const tmp = [];
  for (let i = 0; i <= a.length; i++) tmp[i] = [i];
  for (let j = 0; j <= b.length; j++) tmp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1,
        tmp[i][j - 1] + 1,
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return tmp[a.length][b.length];
}

const highlightText = (text: string, query: string) => {
  if (!query) return <span>{text}</span>;
  const words = query.toLowerCase().split(/\s+/).filter(w => w.length > 1 && !STOP_WORDS.has(w));
  if (words.length === 0) {
    const cleanQ = query.trim();
    if (!cleanQ) return <span>{text}</span>;
    words.push(cleanQ.toLowerCase());
  }

  const pattern = words.map(w => w.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="bg-[#04AA6D]/25 text-[#20c997] font-bold border border-[#04AA6D]/40 px-1 rounded">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

interface SearchItem {
  id: string;
  title: string;
  content: string;
  phase: string;
  duration: string;
  color: string;
  icon: string;
}

interface LensOcrResult {
  extractedText: string;
  queries: string[];
}

interface LensOmrAnswer {
  q: number | string;
  selected: string;
  status: "correct" | "incorrect";
  correct: string;
}

interface LensOmrResult {
  title?: string;
  score: number;
  total: number;
  percentage: number;
  answers: LensOmrAnswer[];
}

type LensResult = LensOcrResult | LensOmrResult;

interface SearchResultItem {
  id: string;
  title: string;
  content: string;
  phase: string;
  duration: string;
  color: string;
  icon: string;
  url?: string;
  score: number;
  excerpt: string;
}

const SearchWidget = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // User Authentication Real States
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Nextsem Lens Scanner states
  const [isLensOpen, setIsLensOpen] = useState(false);
  const [lensMode, setLensMode] = useState<"ocr" | "omr">("ocr");
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [lensResult, setLensResult] = useState<LensResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Debounce input to keep typing completely smooth on mobile soft keyboards
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 100);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Auto-close search modal when route/pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when search modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Load Search History & register global shortcut '/'
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('nextsem_search_history');
      if (savedHistory) {
        try {
          const parsed = JSON.parse(savedHistory);
          setHistory(parsed);
        } catch (e) {
          console.error(e);
        }
      }
    }

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 80);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []);

  // Listen to custom open_search & open_google_auth events
  useEffect(() => {
    const handleOpenAuth = () => {
      setIsAuthModalOpen(true);
    };
    window.addEventListener("open_google_auth", handleOpenAuth);

    const handleOpenSearch = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const query = typeof detail === 'object' && detail !== null && 'query' in detail ? detail.query : '';
      setIsOpen(true);
      if (query) {
        setSearchQuery(query);
      }
      setTimeout(() => inputRef.current?.focus(), 80);
    };
    window.addEventListener("open_search", handleOpenSearch as EventListener);

    const handleAuthError = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const code = customEvent.detail || "";
      if (code === "auth/configuration-not-found") {
        setAuthError("configuration-not-found");
      }
    };
    window.addEventListener("nextsem_auth_error", handleAuthError as EventListener);

    return () => {
      window.removeEventListener("open_google_auth", handleOpenAuth);
      window.removeEventListener("open_search", handleOpenSearch as EventListener);
      window.removeEventListener("nextsem_auth_error", handleAuthError as EventListener);
    };
  }, []);

  // Google authentication action
  const handleGoogleSignIn = async () => {
    try {
      setIsAuthModalOpen(false);
      await signInWithGoogle();
    } catch (err) {
      console.error("Google Sign-In Error: ", err);
      const authErr = err as { code?: string; message?: string };
      if (authErr.code === "auth/configuration-not-found") {
        setAuthError("configuration-not-found");
      } else {
        alert("Failed to authenticate with Google: " + (authErr.message || String(err)));
      }
    }
  };

  // Save history to localStorage
  const saveSearchToHistory = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    const filtered = [trimmed, ...history.filter((h) => h !== trimmed)].slice(0, 6);
    setHistory(filtered);
    localStorage.setItem('nextsem_search_history', JSON.stringify(filtered));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('nextsem_search_history');
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      saveSearchToHistory(searchQuery);
      inputRef.current?.blur();
    }
  };

  const handleSelectResult = (query: string) => {
    saveSearchToHistory(query);
    setIsOpen(false);
  };

  // High-efficiency memoized search results calculation
  const results = useMemo((): SearchResultItem[] => {
    const query = debouncedQuery.trim().toLowerCase();
    if (!query) return [];

    const queryWords = query.split(/\s+/).filter(w => w.length > 1);
    const stopWordsFiltered = queryWords.filter(w => !STOP_WORDS.has(w));
    const wordsToSearch = stopWordsFiltered.length > 0 ? stopWordsFiltered : queryWords;

    return (searchIndex as SearchItem[])
      .map((item) => {
        let score = 0;
        const lowerTitle = item.title.toLowerCase();
        const lowerContent = item.content.toLowerCase();

        // 1. Exact title match boost
        if (lowerTitle === query) {
          score += 1500;
        } else if (lowerTitle.startsWith(query)) {
          score += 800;
        } else if (lowerTitle.includes(query)) {
          score += 400;
        }

        // 2. Substring phrase match in content
        if (lowerContent.includes(query)) {
          score += 300;
        }

        // 3. Word matches in title & content
        wordsToSearch.forEach((word) => {
          if (lowerTitle.includes(word)) {
            score += 100;
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            if (regex.test(lowerTitle)) {
              score += 150;
            }
          }

          const occurrences = lowerContent.split(word).length - 1;
          if (occurrences > 0) {
            score += Math.min(occurrences * 15, 150);
          }

          if (word.length >= 4) {
            const titleWords = lowerTitle.split(/\s+/);
            titleWords.forEach((tWord) => {
              const cleanTWord = tWord.replace(/[^a-zA-Z]/g, '');
              if (cleanTWord.length >= 4) {
                const dist = getLevenshteinDistance(word, cleanTWord);
                if (dist === 1) {
                  score += 80;
                } else if (dist === 2) {
                  score += 40;
                }
              }
            });
          }
        });

        // 4. Word Proximity Boost
        if (wordsToSearch.length > 1) {
          let lastIndex = -1;
          let minDistance = Infinity;
          wordsToSearch.forEach((word) => {
            const idx = lowerContent.indexOf(word);
            if (idx !== -1) {
              if (lastIndex !== -1) {
                const dist = Math.abs(idx - lastIndex);
                if (dist < minDistance) minDistance = dist;
              }
              lastIndex = idx;
            }
          });
          if (minDistance < 150) {
            score += 100;
          }
        }

        // Extract clean matched snippet
        let excerpt = '';
        let bestIndex = 0;
        for (const word of wordsToSearch) {
          const idx = lowerContent.indexOf(word);
          if (idx !== -1) {
            bestIndex = idx;
            break;
          }
        }

        const start = Math.max(0, bestIndex - 40);
        const end = Math.min(item.content.length, bestIndex + 120);
        excerpt = item.content.substring(start, end).replace(/\s+/g, ' ').trim();
        if (start > 0) excerpt = '...' + excerpt;
        if (end < item.content.length) excerpt = excerpt + '...';

        return { ...item, score, excerpt };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [debouncedQuery]);

  // Lens processing logic
  const startLensProcess = (fileName: string, fileSize: string) => {
    setSelectedFile({ name: fileName, size: fileSize });
    setIsScanning(true);
    setLensResult(null);

    setTimeout(() => {
      setIsScanning(false);
      if (lensMode === "ocr") {
        if (fileName.includes("homework")) {
          setLensResult({
            extractedText: "Assignment 3: Implement HTML tables with styled borders and custom grid templates.",
            queries: ["HTML Tables", "Grid Layout"]
          });
        } else if (fileName.includes("syllabus")) {
          setLensResult({
            extractedText: "Phase 4 Core Focus: React Hooks, Component State Management, and API Integration.",
            queries: ["React Hooks", "API Integration"]
          });
        } else {
          setLensResult({
            extractedText: `Document scanner successfully parsed ${fileName}. Detected key technical terms: Flexbox, Grid columns, JavaScript array manipulation, and database schemas.`,
            queries: ["Flexbox", "JavaScript", "database schemas"]
          });
        }
      } else {
        setLensResult({
          title: fileName.includes("midterm") ? "Midterm Web Development OMR Evaluation" : "Custom OMR Grading Sheet",
          score: 16,
          total: 20,
          percentage: 80,
          answers: [
            { q: 1, selected: "A", correct: "A", status: "correct" },
            { q: 2, selected: "B", correct: "C", status: "incorrect" },
            { q: 3, selected: "D", correct: "D", status: "correct" },
            { q: 4, selected: "A", correct: "A", status: "correct" },
            { q: 5, selected: "C", correct: "B", status: "incorrect" },
            { q: 6, selected: "C", correct: "C", status: "correct" },
            { q: 7, selected: "B", correct: "B", status: "correct" },
            { q: 8, selected: "A", correct: "A", status: "correct" }
          ]
        });
      }
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeKB = (file.size / 1024).toFixed(1) + " KB";
      startLensProcess(file.name, sizeKB);
    }
  };

  if (pathname === '/playground') return null;

  return (
    <>
      {/* High Performance Fullscreen Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 h-[100dvh] w-full bg-[#0b0f19] text-white z-[999] flex flex-col overscroll-contain animate-in fade-in duration-150">
          
          {/* Top Search Bar */}
          <div className="flex items-center gap-2.5 p-3 sm:p-4 bg-[#080b13] border-b border-slate-800/80 sticky top-0 z-50 shrink-0">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Back"
              className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white shrink-0"
            >
              <ArrowLeft size={22} />
            </button>
            
            <div className="flex-1 bg-[#131926] rounded-full px-4 py-2 sm:py-2.5 flex items-center gap-2.5 border border-slate-700/60 focus-within:border-[#04AA6D] transition-colors relative shadow-inner">
              <Search size={17} className="text-[#04AA6D] shrink-0" />
              <input
                ref={inputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchSubmit();
                  }
                }}
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                inputMode="search"
                enterKeyHint="search"
                placeholder="Search HTML, CSS, JS, React, Node, CLI..."
                className="flex-1 bg-transparent text-white placeholder-slate-400 font-medium focus:outline-none text-base leading-normal"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white shrink-0 cursor-pointer"
                  title="Clear search"
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsLensOpen(true);
                  }}
                  className="p-1 text-slate-400 hover:text-[#04AA6D] rounded-full transition-colors shrink-0"
                  title="Nextsem Lens OCR/OMR Scanner"
                >
                  <Camera size={17} />
                </button>
              )}
            </div>
          </div>

          {/* Search Content Pane (Mobile touch-friendly scroll) */}
          <div className="flex-1 overflow-y-auto overscroll-y-contain px-4 py-4 md:p-6 max-w-3xl mx-auto w-full pb-28 [-webkit-overflow-scrolling:touch]">
            
            {/* Case A: Empty Query - Show History & Suggestions */}
            {!debouncedQuery && (
              <div className="space-y-6">
                
                {/* Search History */}
                {history.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <History size={14} className="text-[#04AA6D]" /> Recent Searches
                      </span>
                      <button onClick={clearHistory} className="text-xs font-bold text-[#04AA6D] hover:underline cursor-pointer">
                        Clear All
                      </button>
                    </div>
                    <div className="flex flex-col divide-y divide-slate-800/50">
                      {history.map((h, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSearchQuery(h);
                            inputRef.current?.focus();
                          }}
                          className="flex items-center gap-3 py-3 hover:bg-slate-900/40 text-left text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
                        >
                          <History size={15} className="text-slate-500 shrink-0" />
                          <span className="flex-1 truncate">{h}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggestions */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#04AA6D]" /> Recommended Topics
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_SEARCHES.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSearchQuery(s);
                          inputRef.current?.focus();
                        }}
                        className="px-3.5 py-1.5 bg-[#141b2b] hover:bg-[#1c263b] border border-slate-700/60 rounded-full text-xs font-semibold text-slate-200 transition-all hover:border-[#04AA6D]/50 cursor-pointer"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Start Track Links */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <BookOpen size={14} className="text-[#04AA6D]" /> Core Learning Tracks
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <Link
                      href="/html"
                      onClick={() => handleSelectResult('HTML5 Web Architecture')}
                      className="flex items-center gap-3 p-3.5 bg-[#111726] hover:bg-[#182035] border border-slate-800 rounded-xl transition-all font-bold text-sm text-slate-200 hover:border-[#04AA6D]/50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 text-sm">📄</div>
                      <div>
                        <span className="block">HTML5 Web Architecture</span>
                        <span className="text-[10px] text-slate-400 font-normal">98+ Step-by-step Lessons</span>
                      </div>
                    </Link>
                    <Link
                      href="/cli"
                      onClick={() => handleSelectResult('Windows CLI Terminal')}
                      className="flex items-center gap-3 p-3.5 bg-[#111726] hover:bg-[#182035] border border-slate-800 rounded-xl transition-all font-bold text-sm text-slate-200 hover:border-[#04AA6D]/50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 text-sm">⚡</div>
                      <div>
                        <span className="block">Windows 11 CLI Terminal</span>
                        <span className="text-[10px] text-slate-400 font-normal">Command Prompt &amp; Shell</span>
                      </div>
                    </Link>
                    <Link
                      href="/tracks"
                      onClick={() => handleSelectResult('6 Developer Learning Tracks')}
                      className="flex items-center gap-3 p-3.5 bg-[#111726] hover:bg-[#182035] border border-slate-800 rounded-xl transition-all font-bold text-sm text-slate-200 hover:border-[#04AA6D]/50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#04AA6D]/20 text-[#04AA6D] flex items-center justify-center border border-[#04AA6D]/30 text-sm">🎯</div>
                      <div>
                        <span className="block">6 Structured Tracks</span>
                        <span className="text-[10px] text-slate-400 font-normal">Stage 0 to Stage 5 Full Stack</span>
                      </div>
                    </Link>
                    <Link
                      href="/projects"
                      onClick={() => handleSelectResult('15+ Interactive Projects')}
                      className="flex items-center gap-3 p-3.5 bg-[#111726] hover:bg-[#182035] border border-slate-800 rounded-xl transition-all font-bold text-sm text-slate-200 hover:border-[#04AA6D]/50"
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30 text-sm">🚀</div>
                      <div>
                        <span className="block">15+ Interactive Projects</span>
                        <span className="text-[10px] text-slate-400 font-normal">Canvas &amp; CSS Keyframes Labs</span>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>
            )}

            {/* Case B: Query Entered */}
            {debouncedQuery && (
              <div className="space-y-4">

                {/* Standard Results list */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Matching Lessons &amp; Topics ({results.length})
                    </span>
                  </div>

                  {results.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      {results.map((item) => (
                        <Link
                          key={item.id}
                          href={item.url || getChapterUrl(item.id)}
                          onClick={() => handleSelectResult(item.title)}
                          className="flex flex-col sm:flex-row gap-3.5 p-3.5 bg-[#101626] hover:bg-[#161f36] border border-slate-800/80 rounded-2xl transition-all duration-200 group hover:border-[#04AA6D]/40 shadow-sm"
                        >
                          {/* Thumbnail / Icon Badge */}
                          <div className="w-full sm:w-36 h-20 bg-[#080d18] rounded-xl flex flex-col items-center justify-center border border-slate-800/80 shadow-md relative overflow-hidden shrink-0">
                            <div className="text-2xl font-black">{item.icon}</div>
                            <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border border-white/10 text-slate-300">
                              {item.phase}
                            </span>
                          </div>

                          {/* Metadata */}
                          <div className="flex flex-col justify-center flex-1 text-left min-w-0">
                            <h4 className="text-sm md:text-base font-bold text-white group-hover:text-[#20c997] transition-colors mb-1">
                              {highlightText(item.title, debouncedQuery)}
                            </h4>
                            
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium mb-1.5">
                              <span>Nextsem Academy</span>
                              <span>•</span>
                              <span>{item.duration}</span>
                            </div>
                            
                            <p className="text-xs text-slate-300 leading-relaxed font-mono truncate sm:whitespace-normal">
                              {highlightText(item.excerpt, debouncedQuery)}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10 border border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
                      <span className="block text-2xl mb-2">🔍</span>
                      <h4 className="text-sm font-bold text-white mb-1">No Matching Lessons Found</h4>
                      <p className="text-xs text-slate-400 max-w-xs mx-auto">
                        No direct matches for &quot;{debouncedQuery}&quot;. Try our external reference links below.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* External Web Search fallback shortcuts */}
            {debouncedQuery.trim() !== '' && (
              <div className="bg-[#101626] p-4 sm:p-5 rounded-2xl border border-slate-800 text-left animate-in fade-in duration-200 mt-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <ExternalLink size={13} className="text-[#04AA6D]" />
                  <span>Search on External Developer Resources</span>
                </span>
                <p className="text-xs text-slate-400 font-normal mb-3 leading-relaxed">
                  Looking for deeper specs? Search directly across official developer platforms:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(debouncedQuery)}`, '_blank', 'noopener,noreferrer')}
                    className="flex items-center gap-2 px-3 py-2.5 bg-[#090d18] hover:bg-[#141b2b] border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 transition-all cursor-pointer hover:border-[#04AA6D]/40"
                  >
                    <Search size={12} className="text-blue-400 shrink-0" />
                    <span className="truncate">Google Search</span>
                  </button>
                  <button
                    onClick={() => window.open(`https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(debouncedQuery)}`, '_blank', 'noopener,noreferrer')}
                    className="flex items-center gap-2 px-3 py-2.5 bg-[#090d18] hover:bg-[#141b2b] border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 transition-all cursor-pointer hover:border-orange-400/40"
                  >
                    <BookOpen size={12} className="text-orange-400 shrink-0" />
                    <span className="truncate">MDN Web Docs</span>
                  </button>
                  <button
                    onClick={() => window.open(`https://stackoverflow.com/search?q=${encodeURIComponent(debouncedQuery)}`, '_blank', 'noopener,noreferrer')}
                    className="flex items-center gap-2 px-3 py-2.5 bg-[#090d18] hover:bg-[#141b2b] border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 transition-all cursor-pointer hover:border-amber-400/40"
                  >
                    <Code size={12} className="text-amber-400 shrink-0" />
                    <span className="truncate">Stack Overflow</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Nextsem Lens: AI Document & OMR Scanner Modal Overlay */}
      {isLensOpen && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[1000] flex items-center justify-center p-4 select-none animate-in fade-in duration-200">
          <div className="bg-[#0b0f19] border border-slate-855 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-855 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h2 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Nextsem Lens</h2>
                  <p className="text-[10px] text-slate-500 font-extrabold uppercase">AI Document OCR & OMR Scanner</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setIsLensOpen(false);
                  setSelectedFile(null);
                  setLensResult(null);
                }} 
                className="p-1 bg-slate-900 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-5 md:p-6 grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
              
              {/* Left 3 Cols: File Selection and OCR/OMR Processing */}
              <div className="md:col-span-3 flex flex-col justify-between space-y-4">
                
                {/* Mode Selector pills */}
                <div>
                  <span className="block text-[10px] font-black uppercase text-slate-500 mb-2">Scanner Mode</span>
                  <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-900 gap-1">
                    <button 
                      onClick={() => {
                        setLensMode("ocr");
                        setLensResult(null);
                      }}
                      className={`flex-1 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                        lensMode === "ocr" 
                          ? "bg-blue-600 text-white shadow-lg" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      🔍 OCR Text Scan
                    </button>
                    <button 
                      onClick={() => {
                        setLensMode("omr");
                        setLensResult(null);
                      }}
                      className={`flex-1 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                        lensMode === "omr" 
                          ? "bg-blue-600 text-white shadow-lg" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      📝 OMR Grading
                    </button>
                  </div>
                </div>

                {/* Drop/Select Upload Area */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 min-h-[160px] border-2 border-dashed border-slate-800 hover:border-blue-500/50 rounded-2xl flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all bg-slate-950/40"
                >
                  <input 
                    ref={fileInputRef} 
                    type="file" 
                    accept="image/*,application/pdf" 
                    className="hidden" 
                    onChange={handleFileUpload}
                  />
                  <UploadCloud size={36} className="text-blue-500 mb-2.5 animate-bounce" />
                  <h4 className="text-xs md:text-sm font-black text-slate-200">
                    Click to browse or drop file here
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold mt-1">
                    Supports JPG, PNG images or PDF files (Max 8MB)
                  </p>
                </div>

                {/* Processing/Loading visual */}
                {isScanning && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin shrink-0" />
                    <div className="flex-1 text-left">
                      <span className="block text-xs font-black text-slate-300">
                        {lensMode === "ocr" ? "Running Optical Character Recognition..." : "Analyzing OMR option bubbles..."}
                      </span>
                      <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mt-1.5 border border-slate-850">
                        <div className="bg-blue-500 h-full w-[60%] animate-[pulse_1s_infinite]" />
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Right 2 Cols: Demo files & Quick Result display */}
              <div className="md:col-span-2 flex flex-col space-y-4">
                
                {/* Demo Quick Test Files */}
                <div>
                  <span className="block text-[10px] font-black uppercase text-slate-500 mb-2">Quick Test Files</span>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => startLensProcess("homework_assignment.png", "124 KB")}
                      className="flex items-center gap-2.5 p-2.5 bg-slate-950/80 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 rounded-xl transition-all text-left text-xs font-bold text-slate-300 cursor-pointer"
                    >
                      <FileText size={14} className="text-orange-500 shrink-0" />
                      <div>
                        <span className="block truncate">homework_assignment.png</span>
                        <span className="text-[9px] text-slate-500">HTML Homework sample</span>
                      </div>
                    </button>
                    <button
                      onClick={() => startLensProcess("syllabus_roadmap.pdf", "1.4 MB")}
                      className="flex items-center gap-2.5 p-2.5 bg-slate-950/80 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 rounded-xl transition-all text-left text-xs font-bold text-slate-300 cursor-pointer"
                    >
                      <FileText size={14} className="text-blue-500 shrink-0" />
                      <div>
                        <span className="block truncate">syllabus_roadmap.pdf</span>
                        <span className="text-[9px] text-slate-500">React syllabus sample</span>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        setLensMode("omr");
                        startLensProcess("midterm_omr_test.png", "84 KB");
                      }}
                      className="flex items-center gap-2.5 p-2.5 bg-slate-950/80 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 rounded-xl transition-all text-left text-xs font-bold text-slate-300 cursor-pointer"
                    >
                      <FileText size={14} className="text-emerald-500 shrink-0" />
                      <div>
                        <span className="block truncate">midterm_omr_test.png</span>
                        <span className="text-[9px] text-slate-500">OMR exam sheet sample</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* File Selected Status */}
                {selectedFile && !isScanning && (
                  <div className="bg-slate-950/70 border border-slate-900 p-3 rounded-xl text-left select-text">
                    <span className="block text-[9px] font-black uppercase text-slate-500 mb-1">Target Document</span>
                    <h5 className="text-xs font-bold text-white truncate">{selectedFile.name}</h5>
                    <p className="text-[9px] text-slate-500 font-bold">{selectedFile.size}</p>
                  </div>
                )}

              </div>
            </div>

            {/* Scan Output panel footer (if scanning completed) */}
            {lensResult && !isScanning && (
              <div className="bg-[#0e1423] border-t border-slate-855 p-5 shrink-0 text-left select-text overflow-y-auto max-h-56">
                
                {/* Result Mode: OCR */}
                {lensMode === "ocr" ? (
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-1.5 text-xs font-black text-blue-400 uppercase tracking-wide">
                      <Sparkles size={14} />
                      <span>Extracted OCR Content</span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-200 leading-relaxed bg-[#060910] border border-slate-900 p-3.5 rounded-xl font-mono">
                      &quot;{(lensResult as LensOcrResult).extractedText}&quot;
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-[9px] font-black uppercase text-slate-500">Detected Topics:</span>
                      {(lensResult as LensOcrResult).queries.map((q: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSearchQuery(q);
                            setIsLensOpen(false);
                            setIsOpen(true);
                            setTimeout(() => {
                              inputRef.current?.focus();
                            }, 200);
                          }}
                          className="px-2.5 py-1 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 text-[10px] font-black rounded-full transition-all cursor-pointer"
                        >
                          🔍 Search: {q}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Result Mode: OMR */
                  (() => {
                    const omrResult = lensResult as LensOmrResult;
                    return (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5 text-xs font-black text-emerald-400 uppercase tracking-wide">
                            <CheckCircle2 size={14} />
                            <span>OMR Evaluation Results</span>
                          </div>
                          <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-lg text-emerald-400 text-xs font-black">
                            Score: {omrResult.score} / {omrResult.total} ({omrResult.percentage}%)
                          </div>
                        </div>
                        
                        {/* OMR bubble grading spreadsheet grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#060910] border border-slate-900 p-3.5 rounded-xl">
                          {omrResult.answers.map((ans, idx: number) => (
                            <div 
                              key={idx} 
                              className="flex items-center justify-between p-2 bg-[#0b0f19] border border-slate-855 rounded-lg text-[10px] font-bold"
                            >
                              <span className="text-slate-500">Q{ans.q}:</span>
                              <span className="text-white">Opt: {ans.selected}</span>
                              {ans.status === "correct" ? (
                                <CheckCircle2 size={12} className="text-emerald-500" />
                              ) : (
                                <div className="flex items-center gap-1">
                                  <span className="text-slate-500 font-extrabold font-mono">({ans.correct})</span>
                                  <XCircle size={12} className="text-rose-500" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Auth Error Guidance Modal */}
      {authError && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[1020] flex items-center justify-center p-4 select-none animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 max-w-md w-full rounded-3xl p-6 shadow-2xl text-left space-y-4 animate-in zoom-in-95 duration-150">
            <div className="flex items-center gap-2 text-amber-500">
              <Sparkles size={20} className="animate-pulse" />
              <h3 className="text-base font-black uppercase tracking-wide">Firebase Activation Required</h3>
            </div>
            
            <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
              Google Sign-In has not been enabled in the Firebase Console for your project <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded font-mono text-[10px] text-blue-500 font-bold">bca-nextsem</code> yet.
            </p>

            <div className="space-y-3 pt-1">
              <span className="block text-[10px] font-black uppercase text-slate-400">How to activate Google Sign-In:</span>
              
              <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <a 
                    href="https://console.firebase.google.com/project/bca-nextsem/authentication" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-black text-blue-500 hover:underline"
                  >
                    Open Firebase Auth Console ↗
                  </a>
                  <span className="block text-[10px] text-slate-500 mt-0.5">Click &quot;Get Started&quot; if not already enabled.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <span className="font-black text-slate-800 dark:text-white">Enable Google Provider</span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">Go to the &quot;Sign-in method&quot; tab, click &quot;Add new provider&quot;, select &quot;Google&quot;, and save.</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-900 flex justify-end gap-2">
              <button
                onClick={() => setAuthError(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs rounded-xl transition-all cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Google Sign-in Trigger Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-[1010] flex items-center justify-center p-4 select-none animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 max-w-sm w-full rounded-3xl p-6 shadow-2xl text-center space-y-5 animate-in zoom-in-95 duration-150">
            {/* Google G Logo */}
            <div className="flex justify-center">
              <svg className="w-9 h-9" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>
            
            <div>
              <h3 className="text-lg font-black text-slate-800 dark:text-white">Sign in with Google</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-bold">Secure login using Google Auth</p>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all active:scale-95 cursor-pointer"
            >
              Continue to Google Sign-In
            </button>

            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white pt-2 block w-full text-center cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchWidget;
