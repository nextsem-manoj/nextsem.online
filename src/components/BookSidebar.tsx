"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChevronDown, Check, ArrowLeft, X,
  PanelLeftClose, PanelLeftOpen,
  BookOpen, Terminal, Globe, Layers, List, Award,
  GitBranch, GitCommit, GitMerge, Upload, Download, Search, Command
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { coursePhases } from '../data/courseData';
import { htmlLessons } from '../data/htmlLessonsData';
import { cssLessons } from '../data/cssLessonsData';
import { jsLessons } from '../data/jsLessonsData';
import { reactLessons } from '../data/reactLessonsData';
import { nodeLessons } from '../data/nodeLessonsData';
import { cliLessons } from '../data/cliLessonsData';
import { gitLessons } from '../data/gitLessonsData';
import { cppLessons } from '../data/cppLessonsData';
import searchIndex from '../data/searchIndex.json';
import { getChapterIdFromPath, getChapterUrl } from '../lib/htmlLessonsHelper';
import BrandLogoIcon from './BrandLogoIcon';

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

// Git simulator steps
const GIT_SIDEBAR_STEPS = [
  { id: 'init', title: 'Initialize Repo', icon: GitBranch },
  { id: 'status', title: 'Check Status', icon: Search },
  { id: 'add', title: 'Stage Files', icon: List },
  { id: 'commit', title: 'Commit Changes', icon: GitCommit },
  { id: 'branch', title: 'Rename Branch', icon: GitBranch },
  { id: 'remote', title: 'Add Remote', icon: Globe },
  { id: 'push', title: 'Push to Origin', icon: Upload },
  { id: 'checkout-b', title: 'Create & Switch Branch', icon: GitBranch },
  { id: 'merge', title: 'Merge Branches', icon: GitMerge },
  { id: 'pull', title: 'Pull Remote Changes', icon: Download },
  { id: 'stash', title: 'Stash Changes', icon: Layers },
  { id: 'stash-pop', title: 'Pop Stash', icon: Layers },
  { id: 'log', title: 'View Commit Log', icon: List },
  { id: 'log-oneline', title: 'Compact Log', icon: List },
  { id: 'revert', title: 'Revert Commit', icon: GitCommit },
  { id: 'reset-soft', title: 'Soft Reset', icon: GitCommit },
  { id: 'reset-hard', title: 'Hard Reset', icon: GitCommit },
  { id: 'diff', title: 'View Diff', icon: List },
  { id: 'tag', title: 'Create Tag', icon: Award },
  { id: 'clone', title: 'Clone Repository', icon: Download },
];

interface HtmlSidebarTopic {
  title: string;
  slug?: string;
  href?: string;
  hasDropdown?: boolean;
  subItems?: { title: string; href: string }[];
}

interface HtmlSidebarSection {
  category: string;
  topics: HtmlSidebarTopic[];
}

const W3_HTML_SECTIONS: HtmlSidebarSection[] = [
  {
    category: "HTML TUTORIAL",
    topics: [
      { title: "📊 HTML Course Dashboard", href: "/html" },
      { title: "🏆 Interactive HTML Quiz", href: "/html/quiz" },
      { title: "HTML Introduction", slug: "html-introduction-what-is-html", hasDropdown: true },
      { title: "HTML Editors", slug: "download-install-vscode-windows-11-setup-guide" },
      { 
        title: "HTML Basic", 
        slug: "doctype-html5-declaration-syntax", 
        hasDropdown: true,
        subItems: [
          { title: "Basic", href: "/html/doctype-html5-declaration-syntax" },
          { title: "Exercises", href: "/html/quiz" },
          { title: "Code Challenge", href: "/htmldemo" }
        ]
      },
      { title: "HTML Elements", slug: "html-root-element-lang-attribute", hasDropdown: true },
      { title: "HTML Attributes", slug: "custom-data-attributes-data-prefix", hasDropdown: true },
      { title: "HTML Headings", slug: "html-heading-tags-h1-to-h6", hasDropdown: true },
      { title: "HTML Paragraphs", slug: "html-paragraph-tag-p-margins", hasDropdown: true },
      { title: "HTML Styles", slug: "internal-css-styles-style-tag", hasDropdown: true },
      { title: "HTML Formatting", slug: "bold-b-vs-semantic-strong-tag", hasDropdown: true },
      { title: "HTML Quotations", slug: "blockquote-tag-long-quotations-cite", hasDropdown: true },
      { title: "HTML Comments", slug: "html-introduction-what-is-html", hasDropdown: true },
      { title: "HTML Colors", slug: "highlight-text-mark-tag-search-results" },
      { title: "HTML CSS", slug: "linking-external-css-stylesheets-link", hasDropdown: true },
      { title: "HTML Links", slug: "anchor-a-tag-href-hyperlinks", hasDropdown: true },
      { title: "HTML Images", slug: "image-src-alt-attributes-elements", hasDropdown: true },
      { title: "HTML Project", slug: "capstone-photo-gallery-responsive" },
      { title: "HTML Favicon", slug: "adding-favicons-link-rel-icon", hasDropdown: true },
      { title: "HTML Page Title", slug: "html-title-element-seo-importance" },
      { title: "HTML Tables", slug: "table-container-grid-rows-columns", hasDropdown: true },
      { title: "HTML Lists", slug: "unordered-lists-ul-li-bullet-points", hasDropdown: true },
      { title: "HTML Block & Inline", slug: "div-tag-generic-block-level-container", hasDropdown: true },
      { title: "HTML Classes", slug: "span-tag-generic-inline-container" },
      { title: "HTML Id", slug: "hash-links-jump-to-page-sections" },
      { title: "HTML Iframes", slug: "embedding-external-sites-iframe-sandbox" },
      { title: "HTML JavaScript", slug: "script-tag-insert-javascript-code" },
      { title: "HTML File Paths", slug: "absolute-vs-relative-link-paths" },
      { title: "HTML Head", slug: "html-head-container-metadata" },
      { title: "HTML Layout", slug: "capstone-portfolio-layout-page" },
      { title: "HTML Responsive", slug: "responsive-viewport-meta-tag-mobile" },
      { title: "HTML Computercode", slug: "monospace-code-snippet-code-tag" },
      { title: "HTML Semantics", slug: "figure-figcaption-semantic-image-wrappers" },
    ]
  },
  {
    category: "HTML FORMS",
    topics: [
      { title: "HTML Forms", slug: "form-action-method-attributes-processing", hasDropdown: true },
      { title: "HTML Form Attributes", slug: "form-labeling-for-attribute-linkage" },
      { title: "HTML Form Elements", slug: "form-groups-fieldset-legend-elements" },
      { title: "HTML Input Types", slug: "text-password-inputs-type-attributes", hasDropdown: true },
      { title: "HTML Input Attributes", slug: "form-validation-required-maxlength-minlength" },
      { title: "HTML Input Form Attributes", slug: "regex-pattern-matching-validation" }
    ]
  },
  {
    category: "HTML GRAPHICS",
    topics: [
      { title: "HTML Canvas", slug: "canvas-graphics-draw-shapes-context" },
      { title: "HTML SVG", slug: "inline-vector-graphics-svg-element" }
    ]
  },
  {
    category: "HTML MEDIA",
    topics: [
      { title: "HTML Media", slug: "audio-elements-src-controls-autoplay-attributes" },
      { title: "HTML Video", slug: "video-elements-src-poster-preload-settings" },
      { title: "HTML Audio", slug: "audio-fallback-source-format-types" },
      { title: "HTML Plug-ins", slug: "plugin-insertion-embed-object-elements" }
    ]
  },
  {
    category: "HTML APIS",
    topics: [
      { title: "HTML Geolocation", slug: "html5-native-geolocation-api-details" },
      { title: "HTML Web Storage", slug: "web-components-template-slot-elements" },
      { title: "HTML Dialog / Modals", slug: "native-modals-dialog-showmodal-methods" },
      { title: "HTML Details / Summary", slug: "collapsible-accordions-details-summary" }
    ]
  }
];

interface BookSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  sidebarWidth: number;
  onWidthChange: (w: number) => void;
  isCollapsed: boolean;
  onCollapsedChange: (c: boolean) => void;
}

const BookSidebar = ({ isOpen, setIsOpen, sidebarWidth, onWidthChange, isCollapsed, onCollapsedChange }: BookSidebarProps) => {
  const pathname = usePathname() || "";
  const router = useRouter();
  const { completedChapters } = useProgress();
  const activeItemRef = useRef<HTMLAnchorElement | null>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  const activeChapterId = getChapterIdFromPath(pathname);
  const activePhaseKey = phaseGroups.find((g) =>
    g.chapters.some((c) => c.id === activeChapterId)
  )?.key ?? phaseGroups[0]?.key ?? '';

  const effectiveWidth = isCollapsed ? 52 : sidebarWidth;

  // Auto-scroll active lesson item into view when sidebar is opened or pathname changes
  useEffect(() => {
    if (isOpen && activeItemRef.current) {
      setTimeout(() => {
        activeItemRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }, 150);
    }
  }, [isOpen, pathname]);

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Drawer Backdrop (z-40, below aside z-50) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/70 z-40 animate-in fade-in duration-200 cursor-pointer touch-manipulation"
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar Panel (z-50 on mobile, z-30 on desktop) ── */}
      <aside
        ref={scrollContainerRef}
        style={{ width: `${effectiveWidth}px` }}
        className={`
          fixed top-0 md:top-[98px] left-0 md:left-[10%] h-full md:h-[calc(100vh-98px)]
          bg-[#0c1328] text-white border-r md:border-l border-slate-800 shadow-2xl
          transition-transform duration-300 z-50 md:z-30 overflow-y-auto overflow-x-hidden shrink-0 overscroll-contain
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style-webkit-overflow-scrolling="touch"
      >
        <div className="flex flex-col min-h-full py-2">
          
          {/* Mobile Header with Close Button */}
          <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#090e1e] sticky top-0 z-10 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#04AA6D]/20 border border-[#04AA6D]/40 flex items-center justify-center text-[#04AA6D] font-black text-xs">
                NS
              </div>
              <span className="font-extrabold text-sm text-white">Course Topics</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Topics Menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Items List */}
          <nav className="flex flex-col flex-1 pb-12 pt-1">
            {pathname.startsWith('/html') ? (
              /* W3Schools Clean List Hierarchy for HTML */
              <div className="flex flex-col">
                {W3_HTML_SECTIONS.map((section, sIdx) => {
                  return (
                    <div key={sIdx} className="mb-2">
                      {/* Section Category Title */}
                      <div className="px-4 pt-2.5 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
                        {section.category}
                      </div>

                      {/* Topics */}
                      <div className="flex flex-col">
                        {section.topics.map((topic, tIdx) => {
                          const topicHref = topic.href || (topic.slug ? `/html/${topic.slug}` : '/html');
                          const isActive = (topic.slug && pathname.includes(topic.slug)) || (topic.href ? (pathname === topic.href || (topic.href !== '/html' && pathname.startsWith(topic.href))) : false);
                          const hasSub = !!topic.subItems?.length;

                          return (
                            <div key={tIdx}>
                              <Link
                                ref={isActive ? activeItemRef : undefined}
                                href={topicHref}
                                onClick={handleLinkClick}
                                className={`flex items-center justify-between px-4 py-2 text-[13px] transition-colors cursor-pointer touch-manipulation group ${
                                  isActive
                                    ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent active:bg-slate-800'
                                }`}
                              >
                                <span className="truncate flex-1 text-left">{topic.title}</span>
                                {topic.hasDropdown && (
                                  <ChevronDown
                                    size={12}
                                    className={`shrink-0 ml-1 transition-transform ${
                                      isActive ? 'text-[#04AA6D] rotate-180' : 'text-slate-500 group-hover:text-slate-300'
                                    }`}
                                  />
                                )}
                              </Link>

                              {/* Active Sub-Items (e.g. Basic, Exercises, Code Challenge) */}
                              {hasSub && isActive && (
                                <div className="bg-[#080d1a] py-0.5 border-y border-slate-800/40">
                                  {topic.subItems!.map((sub, subIdx) => {
                                    const isSubActive = pathname === sub.href;
                                    return (
                                      <Link
                                        key={subIdx}
                                        href={sub.href}
                                        onClick={handleLinkClick}
                                        className={`block pl-7 pr-4 py-1.5 text-[12px] transition-colors cursor-pointer touch-manipulation ${
                                          isSubActive
                                            ? 'font-bold text-white bg-[#04AA6D]/25 border-l-4 border-[#04AA6D]'
                                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                                        }`}
                                      >
                                        {sub.title}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : pathname.startsWith('/css') ? (
              /* CSS3 Styling Lessons */
              <div className="flex flex-col">
                <div className="px-4 pt-2 pb-1 text-[11px] font-black uppercase tracking-wider text-[#04AA6D] border-b border-slate-800/80 mb-2 flex items-center gap-1.5">
                  <span>CSS3 STYLING ({cssLessons.length})</span>
                </div>
                {Array.from(new Set(cssLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = cssLessons.filter((l) => l.unit === unitName);
                  return (
                    <div key={uIdx} className="mb-2">
                      <div className="px-4 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
                        {unitName}
                      </div>
                      <div className="flex flex-col">
                        {unitLessons.map((lesson) => {
                          const isActive = pathname.includes(lesson.slug) || (pathname === '/css' && lesson.id === 1);
                          return (
                            <Link
                              ref={isActive ? activeItemRef : undefined}
                              key={lesson.id}
                              href={`/css/${lesson.slug}`}
                              onClick={handleLinkClick}
                              className={`flex items-center justify-between px-4 py-2 text-[12px] sm:text-[13px] transition-colors cursor-pointer touch-manipulation group ${
                                isActive
                                  ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                              }`}
                            >
                              <span className="truncate flex-1 text-left">
                                #{lesson.id}. {lesson.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : pathname.startsWith('/js') || pathname.startsWith('/javascript') ? (
              /* JavaScript ES6+ Lessons */
              <div className="flex flex-col">
                <div className="px-4 pt-2 pb-1 text-[11px] font-black uppercase tracking-wider text-[#04AA6D] border-b border-slate-800/80 mb-2 flex items-center gap-1.5">
                  <span>JAVASCRIPT ES6+ ({jsLessons.length})</span>
                </div>
                {Array.from(new Set(jsLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = jsLessons.filter((l) => l.unit === unitName);
                  return (
                    <div key={uIdx} className="mb-2">
                      <div className="px-4 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
                        {unitName}
                      </div>
                      <div className="flex flex-col">
                        {unitLessons.map((lesson) => {
                          const isActive = pathname.includes(lesson.slug) || (pathname === '/js' && lesson.id === 1);
                          return (
                            <Link
                              ref={isActive ? activeItemRef : undefined}
                              key={lesson.id}
                              href={`/js/${lesson.slug}`}
                              onClick={handleLinkClick}
                              className={`flex items-center justify-between px-4 py-2 text-[12px] sm:text-[13px] transition-colors cursor-pointer touch-manipulation group ${
                                isActive
                                  ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                              }`}
                            >
                              <span className="truncate flex-1 text-left">
                                #{lesson.id}. {lesson.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : pathname.startsWith('/react') ? (
              /* React.js Lessons */
              <div className="flex flex-col">
                <div className="px-4 pt-2 pb-1 text-[11px] font-black uppercase tracking-wider text-[#04AA6D] border-b border-slate-800/80 mb-2 flex items-center gap-1.5">
                  <span>REACT.JS ({reactLessons.length})</span>
                </div>
                {Array.from(new Set(reactLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = reactLessons.filter((l) => l.unit === unitName);
                  return (
                    <div key={uIdx} className="mb-2">
                      <div className="px-4 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
                        {unitName}
                      </div>
                      <div className="flex flex-col">
                        {unitLessons.map((lesson) => {
                          const isActive = pathname.includes(lesson.slug) || (pathname === '/react' && lesson.id === 1);
                          return (
                            <Link
                              ref={isActive ? activeItemRef : undefined}
                              key={lesson.id}
                              href={`/react/${lesson.slug}`}
                              onClick={handleLinkClick}
                              className={`flex items-center justify-between px-4 py-2 text-[12px] sm:text-[13px] transition-colors cursor-pointer touch-manipulation group ${
                                isActive
                                  ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                              }`}
                            >
                              <span className="truncate flex-1 text-left">
                                #{lesson.id}. {lesson.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : pathname.startsWith('/nodejs') || pathname.startsWith('/node') ? (
              /* Node.js & Express Lessons */
              <div className="flex flex-col">
                <div className="px-4 pt-2 pb-1 text-[11px] font-black uppercase tracking-wider text-[#04AA6D] border-b border-slate-800/80 mb-2 flex items-center gap-1.5">
                  <span>NODE.JS & EXPRESS ({nodeLessons.length})</span>
                </div>
                {Array.from(new Set(nodeLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = nodeLessons.filter((l) => l.unit === unitName);
                  return (
                    <div key={uIdx} className="mb-2">
                      <div className="px-4 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
                        {unitName}
                      </div>
                      <div className="flex flex-col">
                        {unitLessons.map((lesson) => {
                          const isActive = pathname.includes(lesson.slug) || ((pathname === '/nodejs' || pathname === '/node') && lesson.id === 1);
                          return (
                            <Link
                              ref={isActive ? activeItemRef : undefined}
                              key={lesson.id}
                              href={`/nodejs/${lesson.slug}`}
                              onClick={handleLinkClick}
                              className={`flex items-center justify-between px-4 py-2 text-[12px] sm:text-[13px] transition-colors cursor-pointer touch-manipulation group ${
                                isActive
                                  ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                              }`}
                            >
                              <span className="truncate flex-1 text-left">
                                #{lesson.id}. {lesson.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : pathname.startsWith('/cli') ? (
              /* Windows 11 CLI Lessons */
              <div className="flex flex-col">
                <div className="px-4 pt-2 pb-1 text-[11px] font-black uppercase tracking-wider text-[#04AA6D] border-b border-slate-800/80 mb-2 flex items-center gap-1.5">
                  <Terminal size={13} className="text-[#04AA6D]" />
                  <span>Windows 11 CLI ({cliLessons.length})</span>
                </div>
                <div className="px-3 py-1 mb-2">
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
                  return (
                    <div key={uIdx} className="mb-2">
                      <div className="px-4 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
                        {unitName}
                      </div>
                      <div className="flex flex-col">
                        {unitLessons.map((lesson) => {
                          const isActive = pathname.includes(lesson.slug);
                          return (
                            <Link
                              ref={isActive ? activeItemRef : undefined}
                              key={lesson.id}
                              href={`/cli/${lesson.slug}`}
                              onClick={handleLinkClick}
                              className={`flex items-center justify-between px-4 py-2 text-[12px] sm:text-[13px] transition-colors cursor-pointer touch-manipulation group ${
                                isActive
                                  ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                              }`}
                            >
                              <span className="truncate flex-1 text-left">
                                #{lesson.id}. {lesson.title.replace(/`([^`]+)`/g, '$1')}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : pathname.startsWith('/cpp') ? (
              /* C++ Systems Programming Lessons */
              <div className="flex flex-col">
                <div className="px-4 pt-2 pb-1 text-[11px] font-black uppercase tracking-wider text-[#04AA6D] border-b border-slate-800/80 mb-2 flex items-center gap-1.5">
                  <Terminal size={13} className="text-[#04AA6D]" />
                  <span>C++ Systems Lessons ({cppLessons.length})</span>
                </div>
                {Array.from(new Set(cppLessons.map((l) => l.unit))).map((unitName, uIdx) => {
                  const unitLessons = cppLessons.filter((l) => l.unit === unitName);
                  return (
                    <div key={uIdx} className="mb-2">
                      <div className="px-4 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
                        {unitName}
                      </div>
                      <div className="flex flex-col">
                        {unitLessons.map((lesson) => {
                          const isActive = pathname.includes(lesson.slug);
                          return (
                            <Link
                              ref={isActive ? activeItemRef : undefined}
                              key={lesson.id}
                              href={`/cpp/${lesson.slug}`}
                              onClick={handleLinkClick}
                              className={`flex items-center justify-between px-4 py-2 text-[12px] sm:text-[13px] transition-colors cursor-pointer touch-manipulation group ${
                                isActive
                                  ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                              }`}
                            >
                              <span className="truncate flex-1 text-left">
                                #{lesson.id}. {lesson.title.replace(/`([^`]+)`/g, '$1')}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : pathname.startsWith('/git') ? (
              /* Git & GitHub Lessons */
              <div className="flex flex-col">
                <div className="px-4 pt-2 pb-1 text-[11px] font-black uppercase tracking-wider text-[#04AA6D] border-b border-slate-800/80 mb-2 flex items-center gap-1.5">
                  <GitBranch size={13} className="text-[#04AA6D]" />
                  <span>GIT & GITHUB ({gitLessons.length})</span>
                </div>
                <div className="px-3 py-1 mb-2">
                  <Link
                    href="/git"
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
                  return (
                    <div key={uIdx} className="mb-2">
                      <div className="px-4 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 select-none">
                        {unitName}
                      </div>
                      <div className="flex flex-col">
                        {unitLessons.map((lesson) => {
                          const isActive = pathname.includes(lesson.slug) || (pathname === '/git' && lesson.id === 1);
                          return (
                            <Link
                              ref={isActive ? activeItemRef : undefined}
                              key={lesson.id}
                              href={`/git/${lesson.slug}`}
                              onClick={handleLinkClick}
                              className={`flex items-center justify-between px-4 py-2 text-[12px] sm:text-[13px] transition-colors cursor-pointer touch-manipulation group ${
                                isActive
                                  ? 'bg-[#04AA6D]/25 text-white font-black border-l-4 border-[#04AA6D] shadow-inner'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-800/80 border-l-4 border-transparent'
                              }`}
                            >
                              <span className="truncate flex-1 text-left">
                                #{lesson.id}. {lesson.title}
                              </span>
                              {isActive && (
                                <span className="w-2 h-2 rounded-full bg-[#04AA6D] shadow-[0_0_8px_#04AA6D] shrink-0 ml-1.5" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

            ) : (
              /* Phase Course Chapters */
              (() => {
                const currentGroup = phaseGroups.find((g) => g.key === activePhaseKey) || phaseGroups[0];
                if (!currentGroup) return null;
                return currentGroup.chapters.map((chapter) => {
                  const isActive = activeChapterId === chapter.id;
                  const isCompleted = !!completedChapters[chapter.id];
                  return (
                    <Link
                      ref={isActive ? activeItemRef : undefined}
                      key={chapter.id}
                      href={getChapterUrl(chapter.id)}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between px-4 py-2 text-xs sm:text-[13px] font-medium transition-colors cursor-pointer touch-manipulation ${
                        isActive
                          ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                          : 'text-slate-300 hover:bg-slate-800/80 hover:text-white border-l-4 border-transparent'
                      }`}
                    >
                      <span className="truncate flex-1 text-left">
                        {chapter.title.replace(/^(CLI\.\d+:|P\d+\.\d+:|Phase\s+\d+:)\s*/i, '').trim()}
                      </span>
                      {isCompleted && (
                        <Check size={12} className="text-[#04AA6D] shrink-0 ml-1.5 stroke-[3]" />
                      )}
                    </Link>
                  );
                });
              })()
            )}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default BookSidebar;


