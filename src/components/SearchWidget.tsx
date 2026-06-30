"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowLeft, X, History, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface ChapterIndexItem {
  id: string;
  title: string;
  phase: string;
  duration: string;
  tags: string;
  excerpt: string;
  color: string;
  icon: string;
}

const CHAPTERS_INDEX: ChapterIndexItem[] = [
  {
    id: 'p0-developer-setup',
    title: 'P0: Developer Setup',
    phase: 'P0',
    duration: '10 mins read',
    tags: 'editor, code, vscode, chrome, setup, installation, environment, developer',
    excerpt: 'Prepare your development machine. Install Visual Studio Code, Google Chrome developer tools, and set up your workspace folders.',
    color: 'bg-blue-605',
    icon: '💻'
  },
  {
    id: 'p1-1-intro-and-text',
    title: 'P1.1: Web Intro & Text',
    phase: 'P1.1',
    duration: '8 mins read',
    tags: 'html, css, javascript, tag, element, h1, paragraph, strong, emphasis',
    excerpt: 'Understand how the internet works, what HTML is, and how to write structures using headings, paragraphs, and styling tags.',
    color: 'bg-violet-605',
    icon: '📄'
  },
  {
    id: 'p1-2-links-and-media',
    title: 'P1.2: Links & Media',
    phase: 'P1.2',
    duration: '9 mins read',
    tags: 'anchor, href, image, src, alt, audio, video, media, source',
    excerpt: 'Learn to link pages together, create navigation menus, embed high-resolution images, and play audio/video natively in HTML5.',
    color: 'bg-violet-605',
    icon: '🔗'
  },
  {
    id: 'p1-3-lists-and-tables',
    title: 'P1.3: Lists & Tables',
    phase: 'P1.3',
    duration: '9 mins read',
    tags: 'unordered list, ul, ol, li, table, tr, th, td, colspan, rowspan',
    excerpt: 'Organize data using numbered and bulleted lists, and construct complex multi-dimensional tables with header rows.',
    color: 'bg-violet-605',
    icon: '📊'
  },
  {
    id: 'p1-4-forms-and-inputs',
    title: 'P1.4: Forms & Inputs',
    phase: 'P1.4',
    duration: '12 mins read',
    tags: 'form, input, text, email, password, submit, button, textarea, select, validation',
    excerpt: 'Build highly interactive user input forms. Use text fields, selects, textareas, and enforce browser-level validation.',
    color: 'bg-violet-605',
    icon: '📝'
  },
  {
    id: 'p1-5-semantics-and-seo',
    title: 'P1.5: Semantics & SEO',
    phase: 'P1.5',
    duration: '11 mins read',
    tags: 'semantic html, header, nav, section, article, footer, aside, seo, meta, search engine',
    excerpt: 'Structure documents using modern HTML5 semantic elements to achieve high SEO indexing and crawlability on search engines.',
    color: 'bg-violet-605',
    icon: '🎯'
  },
  {
    id: 'p1-6-html5-tags',
    title: 'P1.6: All HTML5 Tags',
    phase: 'P1.6',
    duration: '15 mins read',
    tags: 'complete guide, tag index, canvas, svg, embed, iframe, details, summary',
    excerpt: 'A comprehensive dictionary of every HTML5 tag, their purpose, deprecated tags, and practical code snippets for reference.',
    color: 'bg-violet-650',
    icon: '📚'
  },
  {
    id: 'p2-css-practical',
    title: 'P2: CSS Practical',
    phase: 'P2',
    duration: '14 mins read',
    tags: 'css selectors, flexbox, grid, box model, margins, padding, border, hover, active',
    excerpt: 'Master standard styling systems. Learn layouts with Flexbox and Grid, box sizing rules, responsive design, and CSS transitions.',
    color: 'bg-pink-600',
    icon: '🎨'
  },
  {
    id: 'p3-js-practical',
    title: 'P3: JS Practical',
    phase: 'P3',
    duration: '15 mins read',
    tags: 'javascript basic, variables, loops, functions, array, object, DOM manipulation, events',
    excerpt: 'Code the logic of web pages. Bind click event listeners, fetch data from public APIs, manipulate the DOM, and update state.',
    color: 'bg-amber-600',
    icon: '⚡'
  },
  {
    id: 'p4-react',
    title: 'P4: React',
    phase: 'P4',
    duration: '16 mins read',
    tags: 'components, props, state, useState, useEffect, lists, virtual dom, nextjs',
    excerpt: 'Learn the modern React UI library. Master hooks, build reusable custom components, pass props, and deploy single-page apps.',
    color: 'bg-cyan-600',
    icon: '⚛️'
  },
  {
    id: 'p5-node-mongodb',
    title: 'P5: Node.js & MongoDB',
    phase: 'P5',
    duration: '18 mins read',
    tags: 'backend, server, express, api, routing, databases, database collections, schemas',
    excerpt: 'Build scalable servers and REST APIs. Create models, query collections, run CRUD operations, and deploy cloud database schemas.',
    color: 'bg-emerald-600',
    icon: '🟢'
  },
  {
    id: 'p6-capstone',
    title: 'P6: Capstone Projects',
    phase: 'P6',
    duration: '20 mins read',
    tags: 'full stack project, Capstone, portfolio, code repository, git deployment, final exam',
    excerpt: 'Develop full stack projects from concept to live production. Integrate real databases, state management, and custom APIs.',
    color: 'bg-fuchsia-600',
    icon: '🚀'
  },
  {
    id: 'p7-placement',
    title: 'P7: Placement Prep',
    phase: 'P7',
    duration: '15 mins read',
    tags: 'placement questions, interview preparation, resume building, mock interviews, portfolios',
    excerpt: 'Get ready for interviews. Study common frontend developer questions, refine resumes, and structure your portfolio website.',
    color: 'bg-purple-600',
    icon: '💼'
  }
];

const SUGGESTED_SEARCHES = [
  'HTML5 semantic tags',
  'CSS Flexbox & Grid',
  'React hooks useState',
  'Node Express APIs',
  'MongoDB database collections'
];

const SearchWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const searchResults = CHAPTERS_INDEX.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.tags.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.phase.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 150);
        }}
        className="fixed top-4 right-4 z-40 w-11 h-11 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-200/50 dark:border-slate-800/80 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all text-slate-700 dark:text-slate-200"
        aria-label="Search curriculum"
      >
        <Search size={20} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#060c18] text-white z-[999] flex flex-col animate-in fade-in zoom-in-95 duration-200">
          
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
                placeholder="Search Nextsem curriculum..."
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

          <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-3xl mx-auto w-full pb-20">
            
            {!searchQuery && (
              <div className="space-y-6">
                
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

            {searchQuery && (
              <div className="space-y-4">
                <span className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
                  Search Results ({searchResults.length})
                </span>

                {searchResults.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {searchResults.map((item) => (
                      <Link
                        key={item.id}
                        href={`/book/${item.id}`}
                        onClick={() => handleSelectResult(item.title)}
                        className="flex flex-col sm:flex-row gap-4 p-3 bg-slate-900/30 hover:bg-slate-900/80 border border-slate-850 rounded-2xl transition-all duration-300 group hover:border-blue-500/40 shadow-sm"
                      >
                        <div className="aspect-video w-full sm:w-48 bg-slate-950 rounded-xl flex flex-col items-center justify-center border border-slate-850/80 shadow-md relative overflow-hidden shrink-0 group-hover:scale-[1.02] transition-transform duration-300">
                          <div className={`absolute inset-0 opacity-15 bg-gradient-to-br ${item.color} blur-xl`} />
                          
                          <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-2xl font-black shadow-lg border border-white/20 relative z-10 group-hover:rotate-6 transition-transform duration-300`}>
                            {item.icon}
                          </div>
                          <span className="absolute bottom-2 right-2 bg-black/80 text-[10px] font-black uppercase px-2 py-0.5 rounded border border-white/10 tracking-widest text-slate-250 z-10">
                            {item.phase}
                          </span>
                        </div>

                        <div className="flex flex-col justify-center flex-1">
                          <h4 className="text-base md:text-lg font-black text-white leading-snug group-hover:text-blue-400 transition-colors mb-1.5">
                            {item.title}
                          </h4>
                          
                          <div className="flex items-center gap-2 text-xs text-slate-400 font-bold mb-2">
                            <span>Nextsem Academy</span>
                            <span>•</span>
                            <span>{item.duration}</span>
                          </div>
                          
                          <p className="text-xs md:text-sm text-slate-400 font-medium line-clamp-2 leading-relaxed">
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
