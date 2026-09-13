"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChevronDown, Check, ArrowLeft, X,
  BookOpen, Terminal, Globe, Layers, List, Award,
  GitBranch, GitCommit, GitMerge, Upload, Download, Search, Sparkles, Code
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { coursePhases } from '../data/courseData';
import { htmlLessons, Lesson as HtmlLesson } from '../data/htmlLessonsData';
import { cssLessons } from '../data/cssLessonsData';
import { jsLessons } from '../data/jsLessonsData';
import { reactLessons } from '../data/reactLessonsData';
import { nodeLessons } from '../data/nodeLessonsData';
import { cliLessons } from '../data/cliLessonsData';
import { gitLessons } from '../data/gitLessonsData';
import { cppLessons } from '../data/cppLessonsData';
import searchIndex from '../data/searchIndex.json';
import { getChapterIdFromPath, getChapterUrl } from '../lib/htmlLessonsHelper';

// Map phase id → color/title
const phaseColorMap: Record<string, string> = {};
const phaseTitleMap: Record<string, string> = {};
coursePhases.forEach((p) => {
  phaseColorMap[p.id] = p.bulletColor;
  phaseTitleMap[p.id] = p.title;
});

type Chapter = { id: string; title: string; phaseKey: string };
type PhaseGroup = { key: string; label: string; color: string; chapters: Chapter[] };

const phaseGroups: PhaseGroup[] = [];
searchIndex.forEach((item) => {
  const phaseKey = item.phase.split('.')[0];
  let group = phaseGroups.find((g) => g.key === phaseKey);
  if (!group) {
    group = { key: phaseKey, label: phaseTitleMap[phaseKey] ?? phaseKey, color: phaseColorMap[phaseKey] ?? '#3b82f6', chapters: [] };
    phaseGroups.push(group);
  }
  group.chapters.push({ id: item.id, title: `${item.phase}: ${item.title.split(': ').slice(1).join(': ') || item.title}`, phaseKey });
});

interface BookSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  sidebarWidth: number;
  onWidthChange: (w: number) => void;
  isCollapsed: boolean;
  onCollapsedChange: (c: boolean) => void;
}

// Format lesson titles to be short, appealing, and fit neatly inside sidebar
export function formatSidebarTitle(title: string, shortTitle?: string): string {
  if (shortTitle && shortTitle.trim()) return shortTitle.trim();

  const t = title.trim();

  // Curated concise titles for optimal sidebar readability
  const directMap: Record<string, string> = {
    "Visual Studio Code Download, Windows 11 Setup & First HTML Page": "VS Code & Win 11 Setup",
    "HTML Introduction (What is HTML?)": "What is HTML?",
    "Client vs. Server Model": "Client vs Server",
    "Understanding DNS Lookup": "DNS Lookup",
    "IP Addresses Explained (IPv4 vs. IPv6)": "IP Addresses (v4 & v6)",
    "TCP/IP 3-Way Handshake": "TCP 3-Way Handshake",
    "Anatomy of an HTTP Request": "HTTP Request Anatomy",
    "Anatomy of an HTTP Response": "HTTP Response Anatomy",
    "Anatomy of a URL": "URL Anatomy",
    "How Browsers Render HTML (DOM)": "How Browsers Render DOM",
    "Introduction to Browser DevTools": "Browser DevTools",
    "The <!DOCTYPE html> Declaration": "<!DOCTYPE html>",
    "The <html> Root Element": "<html> Root Tag",
    "The <head> Container": "<head> Metadata",
    "The <title> Element": "<title> Tag & SEO",
    "Responsive Viewport Configuration": "Responsive Viewport",
    "Adding Favicons": "Adding Favicons",
    "Linking CSS Stylesheets": "Linking CSS Files",
    "Internal CSS with the <style> Tag": "Internal CSS (<style>)",
    "Script Insertion with <script>": "Scripts (<script>)",
    "The <body> Container": "<body> Container",
    "Heading Elements (<h1> to <h6>)": "Headings (<h1> - <h6>)",
    "The Paragraph Element (<p>)": "Paragraphs (<p>)",
    "Line Breaks (<br />)": "Line Breaks (<br />)",
    "Horizontal Rules (<hr />)": "Horizontal Rules (<hr />)",
    "Div Containers (<div>)": "Div Containers (<div>)",
    "Span Containers (<span>)": "Span Inline (<span>)",
    "Blockquotes (<blockquote>)": "Blockquotes",
    "Inline Quotes (<q>)": "Inline Quotes (<q>)",
    "Address Details (<address>)": "Address (<address>)",
    "Presentational Bold (<b>) vs. Semantic Strong (<strong>)": "Bold (<b>) vs Strong",
    "Presentational Italic (<i>) vs. Semantic Emphasis (<em>)": "Italic (<i>) vs Emphasis",
    "Highlighted Text (<mark>)": "Highlight Text (<mark>)",
    "Code Snippets (<code>)": "Code Snippets (<code>)",
    "Preformatted Text (<pre>)": "Preformatted (<pre>)",
    "Insertions (<ins>) & Deletions (<del>)": "Insert & Delete Tags",
    "Strikethrough (<s>)": "Strikethrough (<s>)",
    "Abbreviations (<abbr>)": "Abbreviations (<abbr>)",
    "Defining Terms (<dfn>)": "Defining Terms (<dfn>)",
    "Superscript (<sup>) & Subscript (<sub>)": "Sup & Sub Tags",
    "Anchor Elements (<a>) & the href Attribute": "Links (<a> & href)",
    "Absolute vs. Relative Paths": "Absolute vs Relative Paths",
    "Parent Directory Hopping (../)": "Parent Directory (../)",
    "Grandparent Directory Hopping (../../)": "Grandparent Path (../../)",
    "Linking to Email Addresses (mailto:)": "Email Links (mailto:)",
    "Telephone Dialing Links (tel:)": "Telephone Links (tel:)",
    "Target Attributes (target=\"_blank\")": "Target Blank (target)",
    "Link Security (rel=\"noopener\")": "Link Security (rel)",
    "Document Hash Links (href=\"#id\")": "Hash Jump Links",
    "Download Attribute (force download)": "Download Attribute",
    "The Image Element (<img>)": "Images (<img> Tag)",
    "Image Sizing (width & height)": "Image Sizing",
    "Responsive Images (srcset & sizes)": "Responsive Images",
    "Art Direction with <picture> & <source>": "Art Direction (<picture>)",
    "Lazy Loading Images (loading attribute)": "Lazy Loading Images",
    "Semantic Image Wrappers (<figure> & <figcaption>)": "Figure & Figcaption",
    "Vector Graphics (<svg>)": "Vector Graphics (<svg>)",
    "Image Maps (<map> & <area>)": "Image Maps (<map>)",
    "Favicon Formats & Link Configurations": "Favicon Formats",
    "Capstone Project: Responsive Photo Gallery": "Project: Photo Gallery",
    "Audio Elements (src & controls)": "Audio Player (<audio>)",
    "Audio Fallback Formats & Sources": "Audio Fallbacks",
    "Video Elements (poster & preload)": "Video Player (<video>)",
    "Video Subtitles & Captions (<track>)": "Video Subtitles (<track>)",
    "External Site Embedding (<iframe> & sandbox)": "Embed Sites (<iframe>)",
    "Plugin Insertion (<embed> & <object>)": "Plugins (<embed>/<object>)",
    "Custom Data Attributes (data-*)": "Custom Data (data-*)",
    "Iframe Security & Permission Policies": "Iframe Security",
    "HTML5 Geolocation Semantic Structure": "HTML5 Geolocation",
    "Capstone Project: Media Showcase Layout": "Project: Media Showcase",
    "Unordered Lists (<ul> and <li>)": "Unordered Lists (<ul>)",
    "Ordered Lists (<ol> and <li>)": "Ordered Lists (<ol>)",
    "Ordered Lists Start & Reversed Attributes": "Ordered List Attributes",
    "Definition Lists (<dl>, <dt>, and <dd>)": "Definition Lists (<dl>)",
    "Tables Rows & Cells (<tr>, <td>, <th>)": "Tables (<tr>, <td>, <th>)",
    "Table Column Spanning (colspan & rowspan)": "Table Colspan & Rowspan",
    "Table Structured Sections (<thead>, <tbody>, <tfoot>)": "Table Semantics",
    "Table Column Groups (<colgroup> & <col>)": "Colgroup & Columns",
    "Table Borders & Spacing Layouts": "Table Borders & Spacing",
    "Capstone Project: Dynamic Pricing Grid": "Project: Pricing Grid",
    "Form Action & Method (processing basics)": "Form Action & Method",
    "Form Labels (for attribute linkage)": "Form Labels (<label>)",
    "Text & Password Inputs (type=\"text/password\")": "Text & Password Inputs",
    "Radio Buttons (type=\"radio\")": "Radio Buttons",
    "Checkboxes (type=\"checkbox\")": "Checkboxes",
    "Dropdown Select Lists (<select> and <option>)": "Dropdown Select (<select>)",
    "Multi-line Input (<textarea>)": "Multi-line (<textarea>)",
    "Buttons (type=\"submit/reset/button\")": "Buttons (<button>)",
    "Binding Input Labels (<label> wrapping)": "Wrapping Labels",
    "Form Groups (<fieldset> and <legend>)": "Fieldset & Legend",
    "Form Field Required Validation": "Form Validation (required)",
    "Regex Pattern Matching (pattern attribute)": "Regex Pattern Matching",
    "HTML5 Numeric Ranges (type=\"number/range\")": "Numeric Ranges",
    "Progress Indicators (<progress>) & Meter Gauges (<meter>)": "Progress & Meter",
    "Autocomplete Data Lists (<datalist>)": "Autocomplete (<datalist>)",
    "Collapsible Accordions (<details> and <summary>)": "Accordions (<details>)",
    "Native Modals & Popups (<dialog>)": "Native Dialog (<dialog>)",
    "Web Components Templates (<template> and <slot>)": "Templates & Slots",
    "Canvas Graphics (<canvas>)": "Canvas Graphics (<canvas>)",
    "Capstone Project: Complete Semantic Portfolio": "Project: Semantic Portfolio"
  };

  if (directMap[t]) return directMap[t];

  // Algorithmic shortener for other subjects (CSS, JS, CLI, Git, etc.)
  let clean = t
    .replace(/^Character Encoding with <meta charset=.*$/i, "Meta Charset (UTF-8)")
    .replace(/^Introduction to\s+/i, "")
    .replace(/^Understanding\s+/i, "")
    .replace(/^Presentational\s+/i, "")
    .replace(/^The\s+/i, "")
    .replace(/^How to\s+/i, "")
    .replace(/^How\s+/i, "")
    .replace(/Capstone Project:\s*/i, "Project: ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+Elements?\b/i, "")
    .replace(/\s+Containers?\b/i, "")
    .trim();

  return clean;
}

const BookSidebar = ({ isOpen, setIsOpen, sidebarWidth, isCollapsed }: BookSidebarProps) => {
  const pathname = usePathname() || "";
  const cleanPath = (pathname || "").replace(/\/+$/, "") || "/";
  const { completedChapters } = useProgress();
  const activeItemRef = useRef<HTMLAnchorElement | null>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedUnits, setCollapsedUnits] = useState<Record<string, boolean>>({});

  const activeChapterId = getChapterIdFromPath(pathname);
  const activePhaseKey = phaseGroups.find((g) =>
    g.chapters.some((c) => c.id === activeChapterId)
  )?.key ?? phaseGroups[0]?.key ?? '';

  const effectiveWidth = isCollapsed ? 52 : sidebarWidth;

  // Toggle unit expand/collapse
  const toggleUnit = (unitName: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCollapsedUnits((prev) => ({
      ...prev,
      [unitName]: !prev[unitName],
    }));
  };

  // Determine active subject
  const currentSubject = useMemo(() => {
    if (pathname.startsWith('/html')) return 'html';
    if (pathname.startsWith('/css')) return 'css';
    if (pathname.startsWith('/js') || pathname.startsWith('/javascript')) return 'js';
    if (pathname.startsWith('/react')) return 'react';
    if (pathname.startsWith('/nodejs') || pathname.startsWith('/node')) return 'nodejs';
    if (pathname.startsWith('/cli')) return 'cli';
    if (pathname.startsWith('/cpp')) return 'cpp';
    if (pathname.startsWith('/git')) return 'git';
    return 'book';
  }, [pathname]);

  // Auto-expand the unit that contains the active lesson whenever pathname changes
  useEffect(() => {
    let activeUnit = "";
    if (currentSubject === 'html') {
      const active = htmlLessons.find((l) => (l.slug && pathname.includes(l.slug)) || ((cleanPath === '/html' || pathname === '/html') && l.id === 0));
      if (active) activeUnit = active.unit;
    } else if (currentSubject === 'css') {
      const active = cssLessons.find((l) => pathname.includes(l.slug) || ((cleanPath === '/css' || pathname === '/css') && l.id === 1));
      if (active) activeUnit = active.unit;
    } else if (currentSubject === 'js') {
      const active = jsLessons.find((l) => pathname.includes(l.slug) || ((cleanPath === '/js' || pathname === '/js') && l.id === 1));
      if (active) activeUnit = active.unit;
    } else if (currentSubject === 'react') {
      const active = reactLessons.find((l) => pathname.includes(l.slug) || ((cleanPath === '/react' || pathname === '/react') && l.id === 1));
      if (active) activeUnit = active.unit;
    } else if (currentSubject === 'nodejs') {
      const active = nodeLessons.find((l) => pathname.includes(l.slug) || ((cleanPath === '/nodejs' || cleanPath === '/node' || pathname === '/nodejs') && l.id === 1));
      if (active) activeUnit = active.unit;
    } else if (currentSubject === 'cli') {
      const active = cliLessons.find((l) => pathname.includes(l.slug));
      if (active) activeUnit = active.unit;
    } else if (currentSubject === 'cpp') {
      const active = cppLessons.find((l) => pathname.includes(l.slug));
      if (active) activeUnit = active.unit;
    } else if (currentSubject === 'git') {
      const active = gitLessons.find((l) => pathname.includes(l.slug) || ((cleanPath === '/git' || pathname === '/git') && l.id === 1));
      if (active) activeUnit = active.unit;
    }

    if (activeUnit) {
      setCollapsedUnits((prev) => ({
        ...prev,
        [activeUnit]: false, // Ensure active unit is open
      }));
    }
  }, [pathname, currentSubject]);

  // Auto-scroll active lesson item into view smoothly
  useEffect(() => {
    if (activeItemRef.current) {
      const timer = setTimeout(() => {
        activeItemRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen, pathname]);

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Helper to render subject header badge
  const renderSubjectHeader = (title: string, count: number, icon?: React.ReactNode) => (
    <div className="px-3 pt-2 pb-2 mb-2 border-b border-slate-800 bg-[#090e1e]/60 rounded-lg mx-2 flex items-center justify-between">
      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#04AA6D]">
        {icon || <BookOpen size={14} className="text-[#04AA6D]" />}
        <span>{title}</span>
      </div>
      <span className="text-[10px] font-mono font-bold bg-[#04AA6D]/20 text-[#04AA6D] border border-[#04AA6D]/40 px-2 py-0.5 rounded-full">
        {count} Lessons
      </span>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/70 z-40 animate-in fade-in duration-200 cursor-pointer touch-manipulation backdrop-blur-xs"
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar Panel (z-50 on mobile, z-30 on desktop) ── */}
      <aside
        ref={scrollContainerRef}
        style={{ width: `${effectiveWidth}px` }}
        className={`
          fixed top-0 left-0 h-full z-50
          md:relative md:top-0 md:sticky md:top-[114px] md:self-start md:h-[calc(100vh-130px)] md:z-20 md:shrink-0
          bg-[#0c1328] text-white border border-slate-800/80 shadow-2xl md:rounded-2xl
          transition-all duration-300 overflow-y-auto overflow-x-hidden overscroll-contain custom-scrollbar
          ${isOpen ? 'translate-x-0 md:flex md:flex-col' : '-translate-x-full md:hidden'}
        `}
      >
        <div className="flex flex-col min-h-full py-2">
          
          {/* Mobile Header with Close Button */}
          <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#090e1e] sticky top-0 z-20 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#04AA6D]/20 border border-[#04AA6D]/40 flex items-center justify-center text-[#04AA6D] font-black text-xs">
                NS
              </div>
              <span className="font-extrabold text-sm text-white">Course Curriculum</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Search Box inside Sidebar */}
          <div className="px-3 pt-1 pb-2 sticky top-0 md:top-0 z-10 bg-[#0c1328] border-b border-slate-800/80">
            <div className="relative flex items-center">
              <Search size={13} className="absolute left-2.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics / chapters..."
                className="w-full bg-[#131d3d] border border-slate-700/80 rounded-lg pl-8 pr-7 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-[#04AA6D] focus:ring-1 focus:ring-[#04AA6D] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Navigation Items List */}
          <nav className="flex flex-col flex-1 pb-16 pt-2 px-1">
            
            {/* ── 1. HTML5 COURSE WITH FULL COLLAPSIBLE UNIT ACCORDIONS ── */}
            {currentSubject === 'html' ? (
              <div className="flex flex-col">
                {renderSubjectHeader("HTML5 MASTERCLASS", htmlLessons.length, <Globe size={14} className="text-[#04AA6D]" />)}

                {Array.from(new Set(htmlLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = htmlLessons.filter((l) => l.unit === unitName);
                  const filteredLessons = searchQuery
                    ? unitLessons.filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    : unitLessons;

                  if (searchQuery && filteredLessons.length === 0) return null;

                  const isCollapsed = collapsedUnits[unitName] ?? false;
                  const hasActiveLesson = unitLessons.some((l) => (l.slug && pathname.includes(l.slug)) || ((cleanPath === '/html' || pathname === '/html') && l.id === 0));

                  return (
                    <div key={uIdx} className="mb-2 bg-[#0d1733]/80 rounded-xl border border-slate-800/70 overflow-hidden shadow-xs">
                      {/* Clickable Unit Accordion Header with Rotating Chevron */}
                      <button
                        type="button"
                        onClick={(e) => toggleUnit(unitName, e)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-all text-left cursor-pointer select-none ${
                          hasActiveLesson
                            ? 'bg-[#04AA6D]/20 text-[#04AA6D] border-b border-[#04AA6D]/30 font-black'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate flex-1 min-w-0 pr-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] shrink-0" />
                          <span className="truncate">{unitName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono font-bold">
                            {filteredLessons.length}
                          </span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 text-[#04AA6D] ${
                              isCollapsed ? '-rotate-90 text-slate-400' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {/* Sub-topics & Chapters List */}
                      {!isCollapsed && (
                        <div className="flex flex-col space-y-0.5 p-1.5 bg-[#090f24]/70">
                          {filteredLessons.map((lesson) => {
                            const isActive = (lesson.slug && pathname.includes(lesson.slug)) || ((cleanPath === '/html' || pathname === '/html') && lesson.id === 0);
                            const lessonHref = lesson.id === 0 ? '/html/' : `/html/${lesson.slug}/`;

                            return (
                              <Link
                                ref={isActive ? activeItemRef : undefined}
                                key={lesson.id}
                                href={lessonHref}
                                prefetch={true}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-3 py-2 text-[12px] sm:text-[13px] rounded-lg transition-all cursor-pointer touch-manipulation group ${
                                  isActive
                                    ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                                }`}
                              >
                                <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                  {isActive && (
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />
                                  )}
                                  <span className="truncate">{lesson.id}. {formatSidebarTitle(lesson.title, (lesson as any).shortTitle)}</span>
                                </span>
                                {isActive && (
                                  <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                    ACTIVE
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            /* ── 2. CSS3 STYLING WITH FULL COLLAPSIBLE UNIT ACCORDIONS ── */
            ) : currentSubject === 'css' ? (
              <div className="flex flex-col">
                {renderSubjectHeader("CSS3 STYLING", cssLessons.length, <Layers size={14} className="text-[#04AA6D]" />)}

                {Array.from(new Set(cssLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = cssLessons.filter((l) => l.unit === unitName);
                  const filteredLessons = searchQuery
                    ? unitLessons.filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    : unitLessons;

                  if (searchQuery && filteredLessons.length === 0) return null;

                  const isCollapsed = collapsedUnits[unitName] ?? false;
                  const hasActiveLesson = unitLessons.some((l) => pathname.includes(l.slug) || ((cleanPath === '/css' || pathname === '/css') && l.id === 1));

                  return (
                    <div key={uIdx} className="mb-2 bg-[#0d1733]/80 rounded-xl border border-slate-800/70 overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={(e) => toggleUnit(unitName, e)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-all text-left cursor-pointer select-none ${
                          hasActiveLesson
                            ? 'bg-[#04AA6D]/20 text-[#04AA6D] border-b border-[#04AA6D]/30 font-black'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate flex-1 min-w-0 pr-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] shrink-0" />
                          <span className="truncate">{unitName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono font-bold">{filteredLessons.length}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 text-[#04AA6D] ${
                              isCollapsed ? '-rotate-90 text-slate-400' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {!isCollapsed && (
                        <div className="flex flex-col space-y-0.5 p-1.5 bg-[#090f24]/70">
                          {filteredLessons.map((lesson) => {
                            const isActive = pathname.includes(lesson.slug) || ((cleanPath === '/css' || pathname === '/css') && lesson.id === 1);
                            return (
                              <Link
                                ref={isActive ? activeItemRef : undefined}
                                key={lesson.id}
                                href={`/css/${lesson.slug}/`}
                                prefetch={true}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-3 py-2 text-[12px] sm:text-[13px] rounded-lg transition-all cursor-pointer touch-manipulation group ${
                                  isActive
                                    ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                                }`}
                              >
                                <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />}
                                  <span className="truncate">{lesson.id}. {formatSidebarTitle(lesson.title, (lesson as any).shortTitle)}</span>
                                </span>
                                {isActive && (
                                  <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                    ACTIVE
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            /* ── 3. JAVASCRIPT ES6+ WITH COLLAPSIBLE UNIT ACCORDIONS ── */
            ) : currentSubject === 'js' ? (
              <div className="flex flex-col">
                {renderSubjectHeader("JAVASCRIPT ES6+", jsLessons.length, <Sparkles size={14} className="text-[#04AA6D]" />)}

                {Array.from(new Set(jsLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = jsLessons.filter((l) => l.unit === unitName);
                  const filteredLessons = searchQuery
                    ? unitLessons.filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    : unitLessons;

                  if (searchQuery && filteredLessons.length === 0) return null;

                  const isCollapsed = collapsedUnits[unitName] ?? false;
                  const hasActiveLesson = unitLessons.some((l) => pathname.includes(l.slug) || ((cleanPath === '/js' || pathname === '/js') && l.id === 1));

                  return (
                    <div key={uIdx} className="mb-2 bg-[#0d1733]/80 rounded-xl border border-slate-800/70 overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={(e) => toggleUnit(unitName, e)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-all text-left cursor-pointer select-none ${
                          hasActiveLesson
                            ? 'bg-[#04AA6D]/20 text-[#04AA6D] border-b border-[#04AA6D]/30 font-black'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate flex-1 min-w-0 pr-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] shrink-0" />
                          <span className="truncate">{unitName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono font-bold">{filteredLessons.length}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 text-[#04AA6D] ${
                              isCollapsed ? '-rotate-90 text-slate-400' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {!isCollapsed && (
                        <div className="flex flex-col space-y-0.5 p-1.5 bg-[#090f24]/70">
                          {filteredLessons.map((lesson) => {
                            const isActive = pathname.includes(lesson.slug) || ((cleanPath === '/js' || pathname === '/js') && lesson.id === 1);
                            return (
                              <Link
                                ref={isActive ? activeItemRef : undefined}
                                key={lesson.id}
                                href={`/js/${lesson.slug}/`}
                                prefetch={true}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-3 py-2 text-[12px] sm:text-[13px] rounded-lg transition-all cursor-pointer touch-manipulation group ${
                                  isActive
                                    ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                                }`}
                              >
                                <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />}
                                  <span className="truncate">{lesson.id}. {formatSidebarTitle(lesson.title, (lesson as any).shortTitle)}</span>
                                </span>
                                {isActive && (
                                  <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                    ACTIVE
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            /* ── 4. REACT.JS WITH COLLAPSIBLE UNIT ACCORDIONS ── */
            ) : currentSubject === 'react' ? (
              <div className="flex flex-col">
                {renderSubjectHeader("REACT.JS MASTERCLASS", reactLessons.length, <Code size={14} className="text-[#04AA6D]" />)}

                {Array.from(new Set(reactLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = reactLessons.filter((l) => l.unit === unitName);
                  const filteredLessons = searchQuery
                    ? unitLessons.filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    : unitLessons;

                  if (searchQuery && filteredLessons.length === 0) return null;

                  const isCollapsed = collapsedUnits[unitName] ?? false;
                  const hasActiveLesson = unitLessons.some((l) => pathname.includes(l.slug) || ((cleanPath === '/react' || pathname === '/react') && l.id === 1));

                  return (
                    <div key={uIdx} className="mb-2 bg-[#0d1733]/80 rounded-xl border border-slate-800/70 overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={(e) => toggleUnit(unitName, e)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-all text-left cursor-pointer select-none ${
                          hasActiveLesson
                            ? 'bg-[#04AA6D]/20 text-[#04AA6D] border-b border-[#04AA6D]/30 font-black'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate flex-1 min-w-0 pr-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] shrink-0" />
                          <span className="truncate">{unitName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono font-bold">{filteredLessons.length}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 text-[#04AA6D] ${
                              isCollapsed ? '-rotate-90 text-slate-400' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {!isCollapsed && (
                        <div className="flex flex-col space-y-0.5 p-1.5 bg-[#090f24]/70">
                          {filteredLessons.map((lesson) => {
                            const isActive = pathname.includes(lesson.slug) || ((cleanPath === '/react' || pathname === '/react') && lesson.id === 1);
                            return (
                              <Link
                                ref={isActive ? activeItemRef : undefined}
                                key={lesson.id}
                                href={`/react/${lesson.slug}/`}
                                prefetch={true}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-3 py-2 text-[12px] sm:text-[13px] rounded-lg transition-all cursor-pointer touch-manipulation group ${
                                  isActive
                                    ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                                }`}
                              >
                                <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />}
                                  <span className="truncate">{lesson.id}. {formatSidebarTitle(lesson.title, (lesson as any).shortTitle)}</span>
                                </span>
                                {isActive && (
                                  <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                    ACTIVE
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            /* ── 5. NODE.JS & EXPRESS WITH COLLAPSIBLE UNIT ACCORDIONS ── */
            ) : currentSubject === 'nodejs' ? (
              <div className="flex flex-col">
                {renderSubjectHeader("NODE.JS & EXPRESS", nodeLessons.length, <Layers size={14} className="text-[#04AA6D]" />)}

                {Array.from(new Set(nodeLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = nodeLessons.filter((l) => l.unit === unitName);
                  const filteredLessons = searchQuery
                    ? unitLessons.filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    : unitLessons;

                  if (searchQuery && filteredLessons.length === 0) return null;

                  const isCollapsed = collapsedUnits[unitName] ?? false;
                  const hasActiveLesson = unitLessons.some((l) => pathname.includes(l.slug) || ((cleanPath === '/nodejs' || cleanPath === '/node' || pathname === '/nodejs') && l.id === 1));

                  return (
                    <div key={uIdx} className="mb-2 bg-[#0d1733]/80 rounded-xl border border-slate-800/70 overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={(e) => toggleUnit(unitName, e)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-all text-left cursor-pointer select-none ${
                          hasActiveLesson
                            ? 'bg-[#04AA6D]/20 text-[#04AA6D] border-b border-[#04AA6D]/30 font-black'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate flex-1 min-w-0 pr-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] shrink-0" />
                          <span className="truncate">{unitName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono font-bold">{filteredLessons.length}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 text-[#04AA6D] ${
                              isCollapsed ? '-rotate-90 text-slate-400' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {!isCollapsed && (
                        <div className="flex flex-col space-y-0.5 p-1.5 bg-[#090f24]/70">
                          {filteredLessons.map((lesson) => {
                            const isActive = pathname.includes(lesson.slug) || ((cleanPath === '/nodejs' || cleanPath === '/node' || pathname === '/nodejs') && lesson.id === 1);
                            return (
                              <Link
                                ref={isActive ? activeItemRef : undefined}
                                key={lesson.id}
                                href={`/nodejs/${lesson.slug}/`}
                                prefetch={true}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-3 py-2 text-[12px] sm:text-[13px] rounded-lg transition-all cursor-pointer touch-manipulation group ${
                                  isActive
                                    ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                                }`}
                              >
                                <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />}
                                  <span className="truncate">{lesson.id}. {formatSidebarTitle(lesson.title, (lesson as any).shortTitle)}</span>
                                </span>
                                {isActive && (
                                  <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                    ACTIVE
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            /* ── 6. WINDOWS 11 CLI WITH COLLAPSIBLE UNIT ACCORDIONS ── */
            ) : currentSubject === 'cli' ? (
              <div className="flex flex-col">
                {renderSubjectHeader("WINDOWS 11 CLI", cliLessons.length, <Terminal size={14} className="text-[#04AA6D]" />)}

                <div className="px-2 py-1 mb-2">
                  <Link
                    href="/terminal-fast-track"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#04AA6D]/20 border border-[#04AA6D] text-white font-bold text-xs hover:bg-[#04AA6D]/30 transition-all shadow-sm group cursor-pointer"
                  >
                    <span className="text-[#04AA6D] text-sm">⚡</span>
                    <div className="flex flex-col text-left">
                      <span className="text-white text-xs font-bold">30-Min Fast-Track</span>
                      <span className="text-[10px] text-slate-300 font-normal">5 Sacred Commands</span>
                    </div>
                  </Link>
                </div>

                {Array.from(new Set(cliLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = cliLessons.filter((l) => l.unit === unitName);
                  const filteredLessons = searchQuery
                    ? unitLessons.filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    : unitLessons;

                  if (searchQuery && filteredLessons.length === 0) return null;

                  const isCollapsed = collapsedUnits[unitName] ?? false;
                  const hasActiveLesson = unitLessons.some((l) => pathname.includes(l.slug));

                  return (
                    <div key={uIdx} className="mb-2 bg-[#0d1733]/80 rounded-xl border border-slate-800/70 overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={(e) => toggleUnit(unitName, e)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-all text-left cursor-pointer select-none ${
                          hasActiveLesson
                            ? 'bg-[#04AA6D]/20 text-[#04AA6D] border-b border-[#04AA6D]/30 font-black'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate flex-1 min-w-0 pr-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] shrink-0" />
                          <span className="truncate">{unitName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono font-bold">{filteredLessons.length}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 text-[#04AA6D] ${
                              isCollapsed ? '-rotate-90 text-slate-400' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {!isCollapsed && (
                        <div className="flex flex-col space-y-0.5 p-1.5 bg-[#090f24]/70">
                          {filteredLessons.map((lesson) => {
                            const isActive = pathname.includes(lesson.slug);
                            return (
                              <Link
                                ref={isActive ? activeItemRef : undefined}
                                key={lesson.id}
                                href={`/cli/${lesson.slug}/`}
                                prefetch={true}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-3 py-2 text-[12px] sm:text-[13px] rounded-lg transition-all cursor-pointer touch-manipulation group ${
                                  isActive
                                    ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                                }`}
                              >
                                <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />}
                                  <span className="truncate">{lesson.id}. {formatSidebarTitle(lesson.title, (lesson as any).shortTitle)}</span>
                                </span>
                                {isActive && (
                                  <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                    ACTIVE
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            /* ── 7. C++ SYSTEMS PROGRAMMING ── */
            ) : currentSubject === 'cpp' ? (
              <div className="flex flex-col">
                {renderSubjectHeader("C++ SYSTEMS PROGRAMMING", cppLessons.length, <Terminal size={14} className="text-[#04AA6D]" />)}

                {Array.from(new Set(cppLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = cppLessons.filter((l) => l.unit === unitName);
                  const filteredLessons = searchQuery
                    ? unitLessons.filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    : unitLessons;

                  if (searchQuery && filteredLessons.length === 0) return null;

                  const isCollapsed = collapsedUnits[unitName] ?? false;
                  const hasActiveLesson = unitLessons.some((l) => pathname.includes(l.slug));

                  return (
                    <div key={uIdx} className="mb-2 bg-[#0d1733]/80 rounded-xl border border-slate-800/70 overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={(e) => toggleUnit(unitName, e)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-all text-left cursor-pointer select-none ${
                          hasActiveLesson
                            ? 'bg-[#04AA6D]/20 text-[#04AA6D] border-b border-[#04AA6D]/30 font-black'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate flex-1 min-w-0 pr-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] shrink-0" />
                          <span className="truncate">{unitName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono font-bold">{filteredLessons.length}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 text-[#04AA6D] ${
                              isCollapsed ? '-rotate-90 text-slate-400' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {!isCollapsed && (
                        <div className="flex flex-col space-y-0.5 p-1.5 bg-[#090f24]/70">
                          {filteredLessons.map((lesson) => {
                            const isActive = pathname.includes(lesson.slug);
                            return (
                              <Link
                                ref={isActive ? activeItemRef : undefined}
                                key={lesson.id}
                                href={`/cpp/${lesson.slug}/`}
                                prefetch={true}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-3 py-2 text-[12px] sm:text-[13px] rounded-lg transition-all cursor-pointer touch-manipulation group ${
                                  isActive
                                    ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                                }`}
                              >
                                <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />}
                                  <span className="truncate">{lesson.id}. {formatSidebarTitle(lesson.title, (lesson as any).shortTitle)}</span>
                                </span>
                                {isActive && (
                                  <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                    ACTIVE
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            /* ── 8. GIT & GITHUB ── */
            ) : currentSubject === 'git' ? (
              <div className="flex flex-col">
                {renderSubjectHeader("GIT & GITHUB", gitLessons.length, <GitBranch size={14} className="text-[#04AA6D]" />)}

                <div className="px-2 py-1 mb-2">
                  <Link
                    href="/git/"
                    prefetch={true}
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#04AA6D]/20 border border-[#04AA6D] text-white font-bold text-xs hover:bg-[#04AA6D]/30 transition-all shadow-sm group cursor-pointer"
                  >
                    <span className="text-[#04AA6D] text-sm">⚡</span>
                    <div className="flex flex-col text-left">
                      <span className="text-white text-xs font-bold">Interactive Simulator</span>
                      <span className="text-[10px] text-slate-300 font-normal">Practice Git Terminal</span>
                    </div>
                  </Link>
                </div>

                {Array.from(new Set(gitLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = gitLessons.filter((l) => l.unit === unitName);
                  const filteredLessons = searchQuery
                    ? unitLessons.filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()) || l.slug.toLowerCase().includes(searchQuery.toLowerCase()))
                    : unitLessons;

                  if (searchQuery && filteredLessons.length === 0) return null;

                  const isCollapsed = collapsedUnits[unitName] ?? false;
                  const hasActiveLesson = unitLessons.some((l) => pathname.includes(l.slug) || ((cleanPath === '/git' || pathname === '/git') && l.id === 1));

                  return (
                    <div key={uIdx} className="mb-2 bg-[#0d1733]/80 rounded-xl border border-slate-800/70 overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={(e) => toggleUnit(unitName, e)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wider transition-all text-left cursor-pointer select-none ${
                          hasActiveLesson
                            ? 'bg-[#04AA6D]/20 text-[#04AA6D] border-b border-[#04AA6D]/30 font-black'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate flex-1 min-w-0 pr-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#04AA6D] shrink-0" />
                          <span className="truncate">{unitName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] text-slate-400 font-mono font-bold">{filteredLessons.length}</span>
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 text-[#04AA6D] ${
                              isCollapsed ? '-rotate-90 text-slate-400' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {!isCollapsed && (
                        <div className="flex flex-col space-y-0.5 p-1.5 bg-[#090f24]/70">
                          {filteredLessons.map((lesson) => {
                            const isActive = pathname.includes(lesson.slug) || ((cleanPath === '/git' || pathname === '/git') && lesson.id === 1);
                            return (
                              <Link
                                ref={isActive ? activeItemRef : undefined}
                                key={lesson.id}
                                href={`/git/${lesson.slug}/`}
                                prefetch={true}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-3 py-2 text-[12px] sm:text-[13px] rounded-lg transition-all cursor-pointer touch-manipulation group ${
                                  isActive
                                    ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                                }`}
                              >
                                <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                                  {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />}
                                  <span className="truncate">{lesson.id}. {formatSidebarTitle(lesson.title, (lesson as any).shortTitle)}</span>
                                </span>
                                {isActive && (
                                  <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                                    ACTIVE
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            /* ── 9. FULL-STACK ROADMAP / BOOK CHAPTERS ── */
            ) : (
              (() => {
                const currentGroup = phaseGroups.find((g) => g.key === activePhaseKey) || phaseGroups[0];
                if (!currentGroup) return null;
                const filteredChapters = searchQuery
                  ? currentGroup.chapters.filter((c) => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  : currentGroup.chapters;

                return (
                  <div className="flex flex-col space-y-1">
                    {renderSubjectHeader(currentGroup.label, filteredChapters.length, <Layers size={14} className="text-[#04AA6D]" />)}
                    {filteredChapters.map((chapter) => {
                      const isActive = activeChapterId === chapter.id;
                      const isCompleted = !!completedChapters[chapter.id];
                      return (
                        <Link
                          ref={isActive ? activeItemRef : undefined}
                          key={chapter.id}
                          href={getChapterUrl(chapter.id)}
                          prefetch={true}
                          onClick={handleLinkClick}
                          className={`flex items-center justify-between px-3.5 py-2 text-xs sm:text-[13px] rounded-lg font-medium transition-all cursor-pointer touch-manipulation ${
                            isActive
                              ? 'bg-[#04AA6D] text-white font-black shadow-lg shadow-emerald-950/70 ring-2 ring-emerald-300/60 border-l-4 border-l-white scale-[1.01]'
                              : 'text-slate-300 hover:bg-slate-800/80 hover:text-white border-l-4 border-transparent'
                          }`}
                        >
                          <span className="truncate flex-1 text-left flex items-center min-w-0 mr-1.5">
                            {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0 mr-2 shadow-xs" />}
                            <span className="truncate">{formatSidebarTitle(chapter.title.replace(/^(CLI\.\d+:|P\d+\.\d+:|Phase\s+\d+:)\s*/i, '').trim())}</span>
                          </span>
                          {isActive ? (
                            <span className="text-[9px] font-black uppercase tracking-wider bg-white text-[#04AA6D] px-1.5 py-0.5 rounded shadow-xs shrink-0 font-mono">
                              ACTIVE
                            </span>
                          ) : isCompleted ? (
                            <Check size={12} className="text-[#04AA6D] shrink-0 ml-1.5 stroke-[3]" />
                          ) : null}
                        </Link>
                      );
                    })}
                  </div>
                );
              })()
            )}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default BookSidebar;
