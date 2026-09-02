"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChevronRight, ChevronDown, Check, ArrowLeft,
  PanelLeftClose, PanelLeftOpen, Search, X,
  FileCode, Layers, Palette, Type, Box, Layout, Columns, Grid, Smartphone, Sparkles, Wand2,
  Award, Terminal, FolderTree, Files, Code, Settings, Activity, Globe, HardDrive, GitBranch, Cpu
} from 'lucide-react';
import { htmlLessons } from '../data/htmlLessonsData';
import { cssLessons } from '../data/cssLessonsData';
import { cliLessons } from '../data/cliLessonsData';

// Git simulator steps
const GIT_SIDEBAR_STEPS = [
  { id: 'init', title: 'Initialize Repo' },
  { id: 'status', title: 'Check Status' },
  { id: 'add', title: 'Stage Files' },
  { id: 'commit', title: 'Commit Changes' },
  { id: 'branch', title: 'Rename Branch' },
  { id: 'remote', title: 'Add Remote' },
  { id: 'push', title: 'Push to Origin' },
  { id: 'checkout-b', title: 'Create & Switch Branch' },
  { id: 'merge', title: 'Merge Branches' },
  { id: 'pull', title: 'Pull Remote Changes' },
  { id: 'stash', title: 'Stash Changes' },
  { id: 'stash-pop', title: 'Pop Stash' },
  { id: 'log', title: 'View Commit Log' },
  { id: 'log-oneline', title: 'Compact Log' },
  { id: 'revert', title: 'Revert Commit' },
  { id: 'reset-soft', title: 'Soft Reset' },
  { id: 'reset-hard', title: 'Hard Reset' },
  { id: 'diff', title: 'View Diff' },
  { id: 'tag', title: 'Create Tag' },
  { id: 'clone', title: 'Clone Repository' },
  { id: 'fork-contribute', title: 'Fork & Contribute' },
  { id: 'rebase', title: 'Rebase Branch' },
  { id: 'squash', title: 'Squash Commits' },
  { id: 'ignore', title: '.gitignore Setup' },
  { id: 'config-name', title: 'Config Username' },
  { id: 'config-email', title: 'Config Email' },
  { id: 'remote-v', title: 'List Remotes' },
  { id: 'branch-list', title: 'List Branches' },
  { id: 'branch-del', title: 'Delete Branch' },
  { id: 'fetch-origin', title: 'Fetch Remote' },
  { id: 'track-remote', title: 'Track Remote Branch' },
  { id: 'clean-df', title: 'Clean Untracked' },
  { id: 'branch-all', title: 'All Branches' },
  { id: 'diff-staged', title: 'Staged Diff' },
  { id: 'checkout-discard', title: 'Discard Changes' },
  { id: 'cherry-pick', title: 'Cherry Pick' },
  { id: 'remote-rename', title: 'Rename Remote' },
  { id: 'remote-remove', title: 'Remove Remote' },
  { id: 'push-force', title: 'Force Push' },
  { id: 'shortlog', title: 'Author Shortlog' },
  { id: 'reflog', title: 'Reference Log' },
];

// Professional Module Configurations with Categories
const HTML_MODULES_CONFIG = [
  { id: 1, title: "01. Getting Started & VS Code", range: [1, 10], icon: FileCode },
  { id: 2, title: "02. Document Head & Metadata", range: [11, 20], icon: Layers },
  { id: 3, title: "03. Structural Text & Headings", range: [21, 30], icon: Type },
  { id: 4, title: "04. Semantic Tags & Content", range: [31, 40], icon: Palette },
  { id: 5, title: "05. Hyperlinks & Navigation", range: [41, 50], icon: Box },
  { id: 6, title: "06. Images & Visual Media", range: [51, 60], icon: Layout },
  { id: 7, title: "07. Audio, Video & Embeds", range: [61, 70], icon: Columns },
  { id: 8, title: "08. Lists, Tables & Layouts", range: [71, 80], icon: Grid },
  { id: 9, title: "09. Forms, Inputs & Security", range: [81, 90], icon: Smartphone },
  { id: 10, title: "10. HTML5 APIs & Modals", range: [91, 100], icon: Sparkles }
];

const CSS_MODULES_CONFIG = [
  { id: 0, title: "00. Setup & DevTools Inspector", range: [0, 0], icon: Wand2 },
  { id: 1, title: "01. Fundamentals & Selectors", range: [1, 10], icon: FileCode },
  { id: 2, title: "02. Colors, Backgrounds & Gradients", range: [11, 20], icon: Palette },
  { id: 3, title: "03. Typography & Web Fonts", range: [21, 30], icon: Type },
  { id: 4, title: "04. The CSS Box Model & Sizing", range: [31, 40], icon: Box },
  { id: 5, title: "05. Display Types & Positioning", range: [41, 50], icon: Layout },
  { id: 6, title: "06. Modern Flexbox Layouts", range: [51, 60], icon: Columns },
  { id: 7, title: "07. Modern CSS Grid Systems", range: [61, 70], icon: Grid },
  { id: 8, title: "08. Responsive & Media Queries", range: [71, 80], icon: Smartphone },
  { id: 9, title: "09. Pseudo Selectors & Variables", range: [81, 90], icon: Sparkles },
  { id: 10, title: "10. 2D/3D Transforms & Keyframes", range: [91, 100], icon: Wand2 }
];

const CLI_MODULES_CONFIG = [
  { id: 1, title: "01. Terminal & CMD Foundations", range: [1, 10], icon: Terminal },
  { id: 2, title: "02. File Systems & Navigation", range: [11, 20], icon: FolderTree },
  { id: 3, title: "03. File & Directory Operations", range: [21, 30], icon: Files },
  { id: 4, title: "04. Batch Scripting & Automation", range: [31, 40], icon: Code },
  { id: 5, title: "05. Environment & System Paths", range: [41, 50], icon: Settings },
  { id: 6, title: "06. Processes, Tasks & Services", range: [51, 60], icon: Activity },
  { id: 7, title: "07. Network Tools & Protocols", range: [61, 70], icon: Globe },
  { id: 8, title: "08. Disk Management & Security", range: [71, 80], icon: HardDrive },
  { id: 9, title: "09. Git Version Control in CLI", range: [81, 90], icon: GitBranch },
  { id: 10, title: "10. Advanced Terminal Utilities", range: [91, 100], icon: Cpu }
];

interface BookSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  sidebarWidth: number;
  onWidthChange: (w: number) => void;
  isCollapsed: boolean;
  onCollapsedChange: (c: boolean) => void;
}

export default function BookSidebar({
  isOpen,
  setIsOpen,
  sidebarWidth,
  onWidthChange,
  isCollapsed,
  onCollapsedChange,
}: BookSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const activeItemRef = useRef<HTMLAnchorElement | null>(null);

  const [completedHtmlLessons, setCompletedHtmlLessons] = useState<Set<number>>(new Set());
  const [completedCssLessons, setCompletedCssLessons] = useState<Set<number>>(new Set());
  const [completedCliLessons, setCompletedCliLessons] = useState<Set<number>>(new Set());
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [expandedModules, setExpandedModules] = useState<Set<number>>(() => new Set([0, 1, 2]));

  const isResizing = useRef(false);
  const dragStartX = useRef(0);
  const dragStartWidth = useRef(0);

  const isHtml = pathname.startsWith('/html');
  const isCss = pathname.startsWith('/css');
  const isCli = pathname.startsWith('/cli');
  const isGit = pathname.startsWith('/git');

  // Helper to determine if a lesson is currently active
  const isLessonActive = useCallback((lesson: { id: number; slug: string }, subject: string) => {
    if (!pathname) return false;
    const decoded = decodeURIComponent(pathname);
    const normalized = pathname.toLowerCase();
    const slugLower = lesson.slug.toLowerCase();

    if (normalized === `/${subject}/${slugLower}` || decoded === `/${subject}/${lesson.slug}`) return true;
    if (normalized.endsWith(`/${slugLower}`) || decoded.endsWith(`/${lesson.slug}`)) return true;
    if (normalized.includes(`/${slugLower}`)) return true;

    // Home / Index route defaults
    if (normalized === `/${subject}` || normalized === `/${subject}/`) {
      if (subject === 'cli' && lesson.id === 1) return true;
      if (subject === 'html' && (lesson.id === 0 || lesson.id === 1)) return true;
      if (subject === 'css' && lesson.id === 0) return true;
    }

    return false;
  }, [pathname]);

  // Load completed lesson records from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nextsem_user");
      let email = "guest";
      if (saved) {
        try {
          const u = JSON.parse(saved);
          if (u?.email) email = u.email;
        } catch {}
      }

      const completedH = new Set<number>();
      for (let id = 0; id <= 100; id++) {
        if (
          localStorage.getItem(`nextsem_html_completed_${email}_${id}`) === "true" ||
          localStorage.getItem(`nextsem_html_completed_guest_${id}`) === "true" ||
          localStorage.getItem(`nextsem_html_completed_${id}`) === "true"
        ) {
          completedH.add(id);
        }
      }
      setCompletedHtmlLessons(completedH);

      const completedC = new Set<number>();
      for (let id = 0; id <= 100; id++) {
        if (
          localStorage.getItem(`nextsem_css_completed_${email}_${id}`) === "true" ||
          localStorage.getItem(`nextsem_css_completed_guest_${id}`) === "true" ||
          localStorage.getItem(`nextsem_css_completed_${id}`) === "true"
        ) {
          completedC.add(id);
        }
      }
      setCompletedCssLessons(completedC);

      const completedCli = new Set<number>();
      for (let id = 1; id <= 100; id++) {
        if (
          localStorage.getItem(`nextsem_cli_completed_${email}_${id}`) === "true" ||
          localStorage.getItem(`nextsem_cli_completed_guest_${id}`) === "true" ||
          localStorage.getItem(`nextsem_cli_completed_${id}`) === "true"
        ) {
          completedCli.add(id);
        }
      }
      setCompletedCliLessons(completedCli);
    }
  }, [pathname]);

  // Auto-expand current active module on route change
  useEffect(() => {
    if (pathname.startsWith('/html')) {
      const currentLesson = htmlLessons.find(l => isLessonActive(l, 'html'));
      if (currentLesson) {
        const activeModId = currentLesson.id === 0 ? 1 : Math.ceil(currentLesson.id / 10);
        setExpandedModules(prev => new Set([...prev, activeModId]));
      }
    } else if (pathname.startsWith('/css')) {
      const currentLesson = cssLessons.find(l => isLessonActive(l, 'css'));
      if (currentLesson) {
        const activeModId = currentLesson.id === 0 ? 0 : Math.ceil(currentLesson.id / 10);
        setExpandedModules(prev => new Set([...prev, activeModId]));
      }
    } else if (pathname.startsWith('/cli')) {
      const currentLesson = cliLessons.find(l => isLessonActive(l, 'cli'));
      if (currentLesson) {
        const activeModId = Math.ceil(currentLesson.id / 10);
        setExpandedModules(prev => new Set([...prev, activeModId]));
      }
    }
  }, [pathname, isLessonActive]);

  // Auto-scroll active lesson into view smoothly
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeItemRef.current) {
        activeItemRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname, expandedModules]);

  // Auto-expand all modules when typing in search filter
  useEffect(() => {
    if (searchFilter.trim()) {
      setExpandedModules(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    }
  }, [searchFilter]);

  const toggleModule = (modId: number) => {
    setExpandedModules(prev => {
      const next = new Set(prev);
      if (next.has(modId)) {
        next.delete(modId);
      } else {
        next.add(modId);
      }
      return next;
    });
  };

  // Drag-to-resize handlers
  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    dragStartX.current = e.clientX;
    dragStartWidth.current = sidebarWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [sidebarWidth]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      const delta = e.clientX - dragStartX.current;
      const newWidth = Math.max(220, Math.min(480, dragStartWidth.current + delta));
      onWidthChange(newWidth);
    };
    const onUp = () => {
      if (!isResizing.current) return;
      isResizing.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, [onWidthChange]);

  const SIDEBAR_COLLAPSED_WIDTH = 56;
  const effectiveWidth = isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : sidebarWidth;

  // Clean title formatting helper
  const formatCleanTitle = (title: string, id: number, prefix: string) => {
    if (id === 0) return `${prefix.toUpperCase()} Home & Setup`;
    let t = title;
    t = t.replace(/^(Lesson\s+\d+:|Learn\s+CSS3?|Learn\s+HTML5?|Introduction\s+to\s+CSS3?|Introduction\s+to\s+HTML5?|What\s+is\s+CSS3?\s*\(|\)|What\s+is\s+HTML5?\s*\(|Anatomy\s+of\s+a\s+|The\s+|How\s+to\s+)/gi, '');
    t = t.replace(/\(.*?\)/g, '');
    t = t.replace(/\s*-\s*.*$/g, '');
    t = t.replace(/[),;:]+$/, '');
    t = t.replace(/\s+/g, ' ').trim();
    if (!t.toLowerCase().startsWith(prefix.toLowerCase()) && prefix !== 'cli') {
      t = `${prefix.toUpperCase()} ${t}`;
    }
    return t;
  };

  const totalLessons = isCss ? cssLessons.length : isHtml ? htmlLessons.length : isCli ? cliLessons.length : 100;
  const completedCount = isCss ? completedCssLessons.size : isHtml ? completedHtmlLessons.size : isCli ? completedCliLessons.size : 0;
  const progressPercent = Math.min(100, Math.round((completedCount / (totalLessons || 1)) * 100));

  // Prepare grouped modules
  const htmlModules = HTML_MODULES_CONFIG.map(mod => ({
    ...mod,
    lessons: htmlLessons.filter(l => l.id >= mod.range[0] && l.id <= mod.range[1])
  })).map(mod => ({
    ...mod,
    lessons: mod.lessons.filter(l => {
      if (!searchFilter.trim()) return true;
      const clean = formatCleanTitle(l.title, l.id, "html").toLowerCase();
      return clean.includes(searchFilter.toLowerCase()) || l.title.toLowerCase().includes(searchFilter.toLowerCase());
    })
  })).filter(mod => !searchFilter.trim() || mod.lessons.length > 0);

  const cssModules = CSS_MODULES_CONFIG.map(mod => ({
    ...mod,
    lessons: cssLessons.filter(l => l.id >= mod.range[0] && l.id <= mod.range[1])
  })).map(mod => ({
    ...mod,
    lessons: mod.lessons.filter(l => {
      if (!searchFilter.trim()) return true;
      const clean = formatCleanTitle(l.title, l.id, "css").toLowerCase();
      return clean.includes(searchFilter.toLowerCase()) || l.title.toLowerCase().includes(searchFilter.toLowerCase());
    })
  })).filter(mod => !searchFilter.trim() || mod.lessons.length > 0);

  const cliModules = CLI_MODULES_CONFIG.map(mod => ({
    ...mod,
    lessons: cliLessons.filter(l => l.id >= mod.range[0] && l.id <= mod.range[1])
  })).map(mod => ({
    ...mod,
    lessons: mod.lessons.filter(l => {
      if (!searchFilter.trim()) return true;
      const clean = formatCleanTitle(l.title, l.id, "cli").toLowerCase();
      const hasCmd = l.commands && l.commands.some(c => c.cmd.toLowerCase().includes(searchFilter.toLowerCase()));
      return clean.includes(searchFilter.toLowerCase()) || l.title.toLowerCase().includes(searchFilter.toLowerCase()) || hasCmd;
    })
  })).filter(mod => !searchFilter.trim() || mod.lessons.length > 0);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-xs z-30 animate-in fade-in duration-200"
        />
      )}

      {/* ── High-End Professional Documentation Sidebar ── */}
      <aside
        style={{ width: `${effectiveWidth}px` }}
        className={`
          fixed top-14 md:top-[58px] left-0 h-[calc(100vh-3.5rem)] md:h-[calc(100vh-58px)]
          bg-[#0b0f19] text-white border-r border-slate-800/80 shadow-2xl
          transition-[width,transform,opacity] duration-300 z-30 overflow-hidden shrink-0 select-none flex flex-col
          ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 md:translate-x-0 md:opacity-100'}
        `}
      >
        <div className="px-3 pt-3 pb-2 flex flex-col h-full overflow-hidden">

          {/* ── Top Header Controls & Dashboard Back Link ── */}
          <div className={`flex items-center ${isCollapsed ? 'flex-col gap-2' : 'justify-between gap-2'} pb-2.5 border-b border-slate-800/60`}>
            {!isCollapsed ? (
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && (window.opener || window.history.length === 1)) window.close();
                  else router.push(isCss ? '/css' : isHtml ? '/html' : isCli ? '/cli' : '/');
                }}
                className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-slate-400 hover:text-[#04AA6D] transition-colors cursor-pointer group"
                title="Return to Dashboard"
              >
                <ArrowLeft size={13} className="stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
                <span>Dashboard</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && (window.opener || window.history.length === 1)) window.close();
                  else router.push(isCss ? '/css' : isHtml ? '/html' : isCli ? '/cli' : '/');
                }}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-[#04AA6D] hover:bg-slate-800 transition-colors cursor-pointer"
                title="Dashboard"
              >
                <ArrowLeft size={15} />
              </button>
            )}

            {/* Collapse / Expand Toggle */}
            <button
              onClick={() => onCollapsedChange(!isCollapsed)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
              title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? <PanelLeftOpen size={15} /> : <PanelLeftClose size={15} />}
            </button>
          </div>

          {/* ── Course Badge & Live Progress Bar ── */}
          {!isCollapsed && (isHtml || isCss || isCli) && (
            <div className="pt-2.5 pb-2 px-0.5">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#04AA6D] flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-pulse shrink-0" />
                  <span className="truncate">
                    {isHtml ? "HTML5 MASTERCLASS" : isCss ? "CSS3 MASTERCLASS" : "🪟 WINDOWS CLI MASTERCLASS"}
                  </span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 shrink-0 font-mono">
                  {completedCount}/{totalLessons} ({progressPercent}%)
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#04AA6D] to-[#00e676] transition-all duration-500 shadow-[0_0_8px_#04AA6D]"
                  style={{ width: `${Math.max(3, progressPercent)}%` }}
                />
              </div>
            </div>
          )}

          {/* ── Interactive Lesson Filter Search ── */}
          {!isCollapsed && (isHtml || isCss || isCli) && (
            <div className="relative my-1.5">
              <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={`Filter ${isCss ? 'CSS properties' : isHtml ? 'HTML tags' : 'CLI commands (dir, git)...'}...`}
                className="w-full pl-7 pr-7 py-1.5 bg-[#131929] border border-slate-800 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#04AA6D] transition-all"
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          )}

          {/* ── Scrollable Grouped Modules & Lessons ── */}
          <nav className="flex flex-col gap-2 flex-1 overflow-y-auto custom-scrollbar pr-1 mt-1 pb-4">
            {isCss ? (
              /* CSS Grouped Modules */
              isCollapsed ? (
                <div className="flex flex-col items-center gap-1.5">
                  {cssModules.map((mod) => {
                    const Icon = mod.icon ?? Palette;
                    const hasActive = mod.lessons.some(l => isLessonActive(l, 'css'));
                    return (
                      <button
                        key={mod.id}
                        onClick={() => onCollapsedChange(false)}
                        title={mod.title}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                          hasActive ? 'bg-[#04AA6D] text-white shadow-md ring-2 ring-white/20' : 'text-[#04AA6D] hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <Icon size={14} />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col gap-2.5">
                  {cssModules.map((mod) => {
                    const Icon = mod.icon ?? Palette;
                    const isExp = expandedModules.has(mod.id);
                    const hasActiveLesson = mod.lessons.some(l => isLessonActive(l, 'css'));

                    return (
                      <div key={mod.id} className="flex flex-col gap-0.5 text-left">
                        {/* Module Accordion Header */}
                        <button
                          onClick={() => toggleModule(mod.id)}
                          className={`flex items-center justify-between gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                            hasActiveLesson
                              ? 'bg-emerald-950/40 text-[#04AA6D] border border-[#04AA6D]/60 shadow-sm'
                              : 'text-slate-300 hover:text-[#04AA6D] hover:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <Icon size={13} className={hasActiveLesson ? 'text-[#04AA6D]' : 'text-slate-400'} />
                            <span className="truncate">{mod.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[9px] px-1.5 py-0.2 bg-slate-800 text-slate-400 rounded-full font-bold">
                              {mod.lessons.length}
                            </span>
                            {isExp ? <ChevronDown size={13} className="text-slate-400" /> : <ChevronRight size={13} className="text-slate-500" />}
                          </div>
                        </button>

                        {/* Lesson Items inside Module */}
                        {isExp && (
                          <div className="flex flex-col gap-0.5 pl-2 mt-0.5 border-l border-slate-800/80 ml-3">
                            {mod.lessons.map((lesson) => {
                              const isLActive = isLessonActive(lesson, 'css');
                              const isLCompleted = completedCssLessons.has(lesson.id);
                              const cleanTitle = formatCleanTitle(lesson.title, lesson.id, "css");

                              return (
                                <Link
                                  key={lesson.id}
                                  ref={isLActive ? activeItemRef : undefined}
                                  href={lesson.id === 0 ? '/css' : `/css/${lesson.slug}`}
                                  onClick={() => { if (typeof window !== 'undefined' && window.innerWidth < 768) setIsOpen(false); }}
                                  className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] transition-all group ${
                                    isLActive 
                                      ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]' 
                                      : isLCompleted 
                                      ? 'text-emerald-400 font-medium hover:bg-slate-800/60 hover:text-white' 
                                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60 font-medium'
                                  }`}
                                >
                                  <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                    {isLActive ? (
                                      <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />
                                    ) : (
                                      <span className="text-slate-400 font-mono font-bold text-[11px] mr-1.5 shrink-0 opacity-80">{String(lesson.id).padStart(2, '0')}.</span>
                                    )}
                                    <span className={`truncate ${isLActive ? 'text-white font-black' : ''}`}>{cleanTitle}</span>
                                  </span>
                                  
                                  {isLActive ? (
                                    <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                      ACTIVE
                                    </span>
                                  ) : isLCompleted ? (
                                    <Check size={13} className="text-emerald-400 shrink-0 stroke-[3]" />
                                  ) : null}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )
            ) : isHtml ? (
              /* HTML Grouped Modules */
              isCollapsed ? (
                <div className="flex flex-col items-center gap-1.5">
                  {htmlModules.map((mod) => {
                    const Icon = mod.icon ?? FileCode;
                    const hasActive = mod.lessons.some(l => isLessonActive(l, 'html'));
                    return (
                      <button
                        key={mod.id}
                        onClick={() => onCollapsedChange(false)}
                        title={mod.title}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                          hasActive ? 'bg-[#04AA6D] text-white shadow-md ring-2 ring-white/20' : 'text-[#04AA6D] hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <Icon size={14} />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col gap-2.5">
                  {htmlModules.map((mod) => {
                    const Icon = mod.icon ?? FileCode;
                    const isExp = expandedModules.has(mod.id);
                    const hasActiveLesson = mod.lessons.some(l => isLessonActive(l, 'html'));

                    return (
                      <div key={mod.id} className="flex flex-col gap-0.5 text-left">
                        {/* Module Accordion Header */}
                        <button
                          onClick={() => toggleModule(mod.id)}
                          className={`flex items-center justify-between gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                            hasActiveLesson
                              ? 'bg-emerald-950/40 text-[#04AA6D] border border-[#04AA6D]/60 shadow-sm'
                              : 'text-slate-300 hover:text-[#04AA6D] hover:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <Icon size={13} className={hasActiveLesson ? 'text-[#04AA6D]' : 'text-slate-400'} />
                            <span className="truncate">{mod.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[9px] px-1.5 py-0.2 bg-slate-800 text-slate-400 rounded-full font-bold">
                              {mod.lessons.length}
                            </span>
                            {isExp ? <ChevronDown size={13} className="text-slate-400" /> : <ChevronRight size={13} className="text-slate-500" />}
                          </div>
                        </button>

                        {/* Lesson Items inside Module */}
                        {isExp && (
                          <div className="flex flex-col gap-0.5 pl-2 mt-0.5 border-l border-slate-800/80 ml-3">
                            {mod.lessons.map((lesson) => {
                              const isLActive = isLessonActive(lesson, 'html');
                              const isLCompleted = completedHtmlLessons.has(lesson.id);
                              const cleanTitle = formatCleanTitle(lesson.title, lesson.id, "html");

                              return (
                                <Link
                                  key={lesson.id}
                                  ref={isLActive ? activeItemRef : undefined}
                                  href={lesson.id === 0 ? '/html' : `/html/${lesson.slug}`}
                                  onClick={() => { if (typeof window !== 'undefined' && window.innerWidth < 768) setIsOpen(false); }}
                                  className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] transition-all group ${
                                    isLActive 
                                      ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]' 
                                      : isLCompleted 
                                      ? 'text-emerald-400 font-medium hover:bg-slate-800/60 hover:text-white' 
                                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60 font-medium'
                                  }`}
                                >
                                  <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                    {isLActive ? (
                                      <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />
                                    ) : (
                                      <span className="text-slate-400 font-mono font-bold text-[11px] mr-1.5 shrink-0 opacity-80">{String(lesson.id).padStart(2, '0')}.</span>
                                    )}
                                    <span className={`truncate ${isLActive ? 'text-white font-black' : ''}`}>{cleanTitle}</span>
                                  </span>
                                  
                                  {isLActive ? (
                                    <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                      ACTIVE
                                    </span>
                                  ) : isLCompleted ? (
                                    <Check size={13} className="text-emerald-400 shrink-0 stroke-[3]" />
                                  ) : null}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )
            ) : isCli ? (
              /* CLI Grouped Modules */
              isCollapsed ? (
                <div className="flex flex-col items-center gap-1.5">
                  {cliModules.map((mod) => {
                    const Icon = mod.icon ?? Terminal;
                    const hasActive = mod.lessons.some(l => isLessonActive(l, 'cli'));
                    return (
                      <button
                        key={mod.id}
                        onClick={() => onCollapsedChange(false)}
                        title={mod.title}
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                          hasActive ? 'bg-[#04AA6D] text-white shadow-md ring-2 ring-white/20' : 'text-[#04AA6D] hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <Icon size={14} />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col gap-2.5">
                  {cliModules.map((mod) => {
                    const Icon = mod.icon ?? Terminal;
                    const isExp = expandedModules.has(mod.id);
                    const hasActiveLesson = mod.lessons.some(l => isLessonActive(l, 'cli'));

                    return (
                      <div key={mod.id} className="flex flex-col gap-0.5 text-left">
                        {/* Module Accordion Header */}
                        <button
                          onClick={() => toggleModule(mod.id)}
                          className={`flex items-center justify-between gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                            hasActiveLesson
                              ? 'bg-emerald-950/40 text-[#04AA6D] border border-[#04AA6D]/60 shadow-sm'
                              : 'text-slate-300 hover:text-[#04AA6D] hover:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <Icon size={13} className={hasActiveLesson ? 'text-[#04AA6D]' : 'text-slate-400'} />
                            <span className="truncate">{mod.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[9px] px-1.5 py-0.2 bg-slate-800 text-slate-400 rounded-full font-bold">
                              {mod.lessons.length}
                            </span>
                            {isExp ? <ChevronDown size={13} className="text-slate-400" /> : <ChevronRight size={13} className="text-slate-500" />}
                          </div>
                        </button>

                        {/* Lesson Items inside Module */}
                        {isExp && (
                          <div className="flex flex-col gap-0.5 pl-2 mt-0.5 border-l border-slate-800/80 ml-3">
                            {mod.lessons.map((lesson) => {
                              const isLActive = isLessonActive(lesson, 'cli');
                              const isLCompleted = completedCliLessons.has(lesson.id);
                              const cleanTitle = formatCleanTitle(lesson.title, lesson.id, "cli");

                              return (
                                <Link
                                  key={lesson.id}
                                  ref={isLActive ? activeItemRef : undefined}
                                  href={lesson.id === 1 ? '/cli' : `/cli/${lesson.slug}`}
                                  onClick={() => { if (typeof window !== 'undefined' && window.innerWidth < 768) setIsOpen(false); }}
                                  className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] transition-all group ${
                                    isLActive 
                                      ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]' 
                                      : isLCompleted 
                                      ? 'text-emerald-400 font-medium hover:bg-slate-800/60 hover:text-white' 
                                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60 font-medium'
                                  }`}
                                >
                                  <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                    {isLActive ? (
                                      <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />
                                    ) : (
                                      <span className="text-slate-400 font-mono font-bold text-[11px] mr-1.5 shrink-0 opacity-80">{String(lesson.id).padStart(2, '0')}.</span>
                                    )}
                                    <span className={`truncate ${isLActive ? 'text-white font-black' : ''}`}>{cleanTitle}</span>
                                  </span>
                                  
                                  {isLActive ? (
                                    <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                      ACTIVE
                                    </span>
                                  ) : isLCompleted ? (
                                    <Check size={13} className="text-emerald-400 shrink-0 stroke-[3]" />
                                  ) : null}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )
            ) : (
              /* Git Simulator */
              <div className="flex flex-col gap-0.5 text-left pb-6">
                {GIT_SIDEBAR_STEPS.map((step, idx) => {
                  const isStepActive = pathname === '/git' && idx === 0;
                  return (
                    <Link
                      key={step.id}
                      ref={isStepActive ? activeItemRef : undefined}
                      href="/git"
                      onClick={() => { if (typeof window !== 'undefined' && window.innerWidth < 768) setIsOpen(false); }}
                      className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-all ${
                        isStepActive
                          ? 'bg-[#04AA6D] text-white font-black shadow-md shadow-emerald-950/60 ring-2 ring-emerald-400/50'
                          : 'text-slate-200 hover:bg-slate-800/60 hover:text-white'
                      }`}
                    >
                      <span className="truncate flex-1 text-left flex items-center">
                        {isStepActive ? (
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />
                        ) : (
                          <span className="text-slate-400 font-mono font-bold text-[11px] mr-1.5 shrink-0 opacity-80">{String(idx + 1).padStart(2, '0')}.</span>
                        )}
                        <span className="truncate">{step.title}</span>
                      </span>
                      {isStepActive && (
                        <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                          ACTIVE
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </nav>

          {/* ── Quick Utility Footer Action Card ── */}
          {!isCollapsed && (
            <div className="pt-2 border-t border-slate-800/60 mt-auto">
              <Link
                href={isCss ? "/playground" : isCli ? "/cli/quiz" : "/html/quiz"}
                className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-[#04AA6D]/15 to-emerald-950/20 border border-[#04AA6D]/30 rounded-lg text-xs font-extrabold text-[#04AA6D] hover:bg-[#04AA6D]/25 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-[#04AA6D] group-hover:scale-110 transition-transform" />
                  <span>{isCss ? "Interactive Sandbox" : isCli ? "CLI Knowledge Quiz" : "HTML Knowledge Quiz"}</span>
                </div>
                <span className="text-[10px] bg-[#04AA6D] text-white px-1.5 py-0.5 rounded font-bold">
                  {isCss ? "Live" : "100 Qs"}
                </span>
              </Link>
            </div>
          )}

        </div>

        {/* ── Resizable Right Border Grip Handle (Desktop Only) ── */}
        {!isCollapsed && (
          <div
            onMouseDown={handleDragStart}
            className="hidden md:block absolute top-0 right-0 w-1.5 h-full cursor-col-resize hover:bg-[#04AA6D]/60 active:bg-[#04AA6D] transition-colors"
            title="Drag to resize sidebar width"
          />
        )}
      </aside>
    </>
  );
}
