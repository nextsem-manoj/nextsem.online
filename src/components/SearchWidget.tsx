"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowLeft, X, History, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';
import searchIndex from '../data/searchIndex.json';

const SUGGESTED_SEARCHES = [
  'HTML5 semantic tags',
  'CSS Flexbox & Grid',
  'React hooks useState',
  'Node Express APIs',
  'MongoDB database collections'
];

interface SearchResultItem {
  id: string;
  title: string;
  content: string;
  phase: string;
  duration: string;
  color: string;
  icon: string;
  score: number;
  excerpt: string;
}

const SearchWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load Search History on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('nextsem_search_history');
      if (savedHistory) {
        try {
          setHistory(JSON.parse(savedHistory));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  // Save history to localStorage
  const saveSearchToHistory = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    const filtered = [trimmed, ...history.filter((h) => h !== trimmed)].slice(0, 5);
    setHistory(filtered);
    localStorage.setItem('nextsem_search_history', JSON.stringify(filtered));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('nextsem_search_history');
  };

  const handleFullscreenTrigger = () => {
    if (typeof window !== 'undefined') {
      const docEl = document.documentElement;
      try {
        if (docEl.requestFullscreen) {
          docEl.requestFullscreen().catch(() => {});
        } else if ((docEl as any).webkitRequestFullscreen) {
          (docEl as any).webkitRequestFullscreen();
        }
      } catch (err) {
        console.warn("Fullscreen request blocked", err);
      }
    }
  };

  const handleSelectResult = (query: string) => {
    saveSearchToHistory(query);
    handleFullscreenTrigger();
    setIsOpen(false);
  };

  // Advanced scoring and dynamic snippet extraction search algorithm
  const getSearchResults = (): SearchResultItem[] => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return (searchIndex as any[])
      .map((item) => {
        let score = 0;
        const lowerTitle = item.title.toLowerCase();
        const lowerContent = item.content.toLowerCase();

        // Exact title match: highest weight
        if (lowerTitle === query) {
          score += 1000;
        } else if (lowerTitle.startsWith(query)) {
          score += 500;
        } else if (lowerTitle.includes(query)) {
          score += 200;
        }

        // Exact full sentence match in content: high weight
        if (lowerContent.includes(query)) {
          score += 150;
        }

        // Check for individual word matches in title or content
        const words = query.split(/\s+/).filter((w) => w.length > 1);
        words.forEach((word) => {
          if (lowerTitle.includes(word)) score += 50;
          if (lowerContent.includes(word)) score += 10;
        });

        // Exact letter match (single letter search support)
        if (query.length === 1) {
          if (lowerTitle.includes(query)) score += 5;
          if (lowerContent.includes(query)) score += 1;
        }

        // Extract a clean matched text snippet around the query
        let excerpt = '';
        if (lowerContent.includes(query)) {
          const index = lowerContent.indexOf(query);
          const start = Math.max(0, index - 40);
          const end = Math.min(item.content.length, index + query.length + 60);
          excerpt = '...' + item.content.substring(start, end).replace(/\s+/g, ' ').trim() + '...';
        } else if (item.content.length > 100) {
          excerpt = item.content.substring(0, 100) + '...';
        } else {
          excerpt = item.content;
        }

        return { ...item, score, excerpt };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  };

  const results = getSearchResults();

  return (
    <>
      {/* Floating Header Search Icon Trigger */}
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 150);
        }}
        className="fixed top-3 right-24 md:top-4 md:right-4 z-50 w-9 h-9 md:w-11 md:h-11 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-200/50 dark:border-slate-800/80 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all text-slate-700 dark:text-slate-200"
        aria-label="Search curriculum"
      >
        <Search size={18} className="md:w-5 md:h-5" />
      </button>

      {/* YouTube Android App-style Fullscreen Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#060c18] text-white z-[999] flex flex-col animate-in fade-in zoom-in-95 duration-200">
          
          {/* Top Search Bar */}
          <div className="flex items-center gap-2 p-3 bg-slate-950/80 border-b border-slate-850/50 sticky top-0 z-50">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-slate-850 rounded-full transition-colors text-slate-400 hover:text-white"
            >
              <ArrowLeft size={22} />
            </button>
            
            <div className="flex-1 bg-slate-900 rounded-full px-4 py-2 flex items-center gap-2 border border-slate-800 focus-within:border-blue-500/50 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tag, code, or phrase..."
                className="flex-1 bg-transparent text-white placeholder-slate-500 font-bold focus:outline-none text-sm md:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Search Content Pane */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-3xl mx-auto w-full pb-20">
            
            {/* Case A: Empty Query - Show History & Suggestions */}
            {!searchQuery && (
              <div className="space-y-6">
                
                {/* Search History */}
                {history.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <History size={14} /> Recent Searches
                      </span>
                      <button onClick={clearHistory} className="text-xs font-bold text-blue-400 hover:underline">
                        Clear All
                      </button>
                    </div>
                    <div className="flex flex-col">
                      {history.map((h, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSearchQuery(h);
                            inputRef.current?.focus();
                          }}
                          className="flex items-center gap-3 py-3 border-b border-slate-900 hover:bg-slate-900/40 text-left text-sm font-semibold text-slate-200"
                        >
                          <History size={16} className="text-slate-500 shrink-0" />
                          <span className="flex-1 truncate">{h}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggestions */}
                <div>
                  <span className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Sparkles size={14} /> Recommended Topics
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_SEARCHES.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSearchQuery(s);
                          inputRef.current?.focus();
                        }}
                        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800/80 rounded-full text-xs font-bold text-slate-200 transition-all hover:scale-102 active:scale-98"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Book Navigation Quick Links */}
                <div>
                  <span className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <BookOpen size={14} /> Start Reading Quick Links
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link
                      href="/book/p0-developer-setup"
                      onClick={() => handleSelectResult('Developer Setup')}
                      className="flex items-center gap-3 p-3 bg-slate-900 hover:bg-slate-850 border border-slate-800/80 rounded-xl transition-all font-bold text-sm text-slate-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center border border-blue-500/30">💻</div>
                      <span>P0: Developer Setup</span>
                    </Link>
                    <Link
                      href="/book/p3-js-practical"
                      onClick={() => handleSelectResult('JS Practical')}
                      className="flex items-center gap-3 p-3 bg-slate-900 hover:bg-slate-850 border border-slate-800/80 rounded-xl transition-all font-bold text-sm text-slate-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-600/20 flex items-center justify-center border border-amber-500/30">⚡</div>
                      <span>P3: JS Practical Course</span>
                    </Link>
                  </div>
                </div>

              </div>
            )}

            {/* Case B: Query Entered - Show Scored Full-text Search Results */}
            {searchQuery && (
              <div className="space-y-4">
                <span className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
                  Search Results ({results.length})
                </span>

                {results.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {results.map((item) => (
                      <Link
                        key={item.id}
                        href={`/book/${item.id}`}
                        onClick={() => handleSelectResult(item.title)}
                        className="flex flex-col sm:flex-row gap-4 p-3 bg-slate-900/30 hover:bg-slate-900/80 border border-slate-850 rounded-2xl transition-all duration-300 group hover:border-blue-500/40 shadow-sm"
                      >
                        {/* 16:9 aspect ratio thumbnail */}
                        <div className="aspect-video w-full sm:w-48 bg-slate-950 rounded-xl flex flex-col items-center justify-center border border-slate-850/80 shadow-md relative overflow-hidden shrink-0 group-hover:scale-[1.02] transition-transform duration-300">
                          <div className={`absolute inset-0 opacity-15 bg-gradient-to-br ${item.color} blur-xl`} />
                          
                          <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-2xl font-black shadow-lg border border-white/20 relative z-10 group-hover:rotate-6 transition-transform duration-300`}>
                            {item.icon}
                          </div>
                          <span className="absolute bottom-2 right-2 bg-black/80 text-[10px] font-black uppercase px-2 py-0.5 rounded border border-white/10 tracking-widest text-slate-250 z-10">
                            {item.phase}
                          </span>
                        </div>

                        {/* YouTube Style metadata with dynamic excerpt match */}
                        <div className="flex flex-col justify-center flex-1">
                          <h4 className="text-base md:text-lg font-black text-white leading-snug group-hover:text-blue-400 transition-colors mb-1.5">
                            {item.title}
                          </h4>
                          
                          <div className="flex items-center gap-2 text-xs text-slate-400 font-bold mb-2">
                            <span>Nextsem Academy</span>
                            <span>•</span>
                            <span>{item.duration}</span>
                          </div>
                          
                          <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed bg-slate-900/40 border border-slate-850/20 px-3 py-2 rounded-lg font-mono overflow-x-hidden text-ellipsis whitespace-nowrap sm:whitespace-normal">
                            {item.excerpt}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <span className="block text-4xl mb-4">🔍</span>
                    <h4 className="text-base font-black text-slate-300 mb-1">No Results Found</h4>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      We couldn't find anything matching "{searchQuery}". Try searching for HTML, CSS, React, or Setup.
                    </p>
                  </div>
                )}

              </div>
            )}

          </div>

        </div>
      )}
    </>
  );
};

export default SearchWidget;
