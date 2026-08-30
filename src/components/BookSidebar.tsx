"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChevronDown, Check, ArrowLeft,
  PanelLeftClose, PanelLeftOpen,
  BookOpen, Terminal, Globe, Layers, List, Award,
  GitBranch, GitCommit, GitMerge, Upload, Download, Search, Command
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { coursePhases } from '../data/courseData';
import { htmlLessons } from '../data/htmlLessonsData';
import { cliLessons } from '../data/cliLessonsData';
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
      { title: "HTML HOME", href: "/html" },
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

  const activeChapterId = getChapterIdFromPath(pathname);
  const activePhaseKey = phaseGroups.find((g) =>
    g.chapters.some((c) => c.id === activeChapterId)
  )?.key ?? phaseGroups[0]?.key ?? '';

  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["HTML TUTORIAL"]));

  const effectiveWidth = isCollapsed ? 52 : sidebarWidth;

  const toggleSection = (cat: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  return (
    <>
      {/* Mobile Drawer Backdrop (No blur) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/60 z-40 animate-in fade-in duration-200 cursor-pointer"
        />
      )}

      {/* ── Sidebar Panel ── */}
      <aside
        style={{ width: `${effectiveWidth}px` }}
        className={`
          fixed top-14 md:top-[102px] left-0 md:left-[10%] h-[calc(100vh-3.5rem)] md:h-[calc(100vh-102px)]
          bg-[#0d1424] text-white border-r md:border-l border-slate-800/80 shadow-2xl
          transition-[width,transform] duration-300 z-30 overflow-y-auto overflow-x-hidden shrink-0 select-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full py-2">
          {/* Navigation Items List */}
          <nav className="flex flex-col flex-1 pb-10">
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
                          const isActive = (topic.slug && pathname.includes(topic.slug)) || (pathname === '/html' && topic.href === '/html');
                          const hasSub = !!topic.subItems?.length;

                          return (
                            <div key={tIdx}>
                              <Link
                                href={topicHref}
                                onClick={() => {
                                  if (window.innerWidth < 768) setIsOpen(false);
                                }}
                                className={`flex items-center justify-between px-4 py-1.5 text-[13px] transition-colors group ${
                                  isActive
                                    ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                    : 'text-slate-200 hover:text-white hover:bg-slate-800/70 border-l-4 border-transparent'
                                }`}
                              >
                                <span className="truncate">{topic.title}</span>
                                {topic.hasDropdown && (
                                  <ChevronDown
                                    size={12}
                                    className={`shrink-0 transition-transform ${
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
                                        onClick={() => {
                                          if (window.innerWidth < 768) setIsOpen(false);
                                        }}
                                        className={`block pl-7 pr-4 py-1 text-[12px] transition-colors ${
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
                    onClick={() => {
                      if (window.innerWidth < 768) setIsOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#04AA6D]/20 border border-[#04AA6D] text-white font-bold text-xs hover:bg-[#04AA6D]/30 transition-all shadow-sm group"
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
                              key={lesson.id}
                              href={`/cli/${lesson.slug}`}
                              onClick={() => {
                                if (window.innerWidth < 768) setIsOpen(false);
                              }}
                              className={`flex items-center justify-between px-4 py-1.5 text-[12px] sm:text-[13px] transition-colors group ${
                                isActive
                                  ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70 border-l-4 border-transparent'
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
                              key={lesson.id}
                              href={`/cpp/${lesson.slug}`}
                              onClick={() => {
                                if (window.innerWidth < 768) setIsOpen(false);
                              }}
                              className={`flex items-center justify-between px-4 py-1.5 text-[12px] sm:text-[13px] transition-colors group ${
                                isActive
                                  ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70 border-l-4 border-transparent'
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
              /* Git Steps */
              <div className="flex flex-col gap-0.5 text-left px-2">
                <span className="px-2 py-1 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-800/60 mb-1 block">
                  Git Commands (40)
                </span>
                {GIT_SIDEBAR_STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <Link
                      key={step.id}
                      href="/git"
                      onClick={() => { if (window.innerWidth < 768) setIsOpen(false); }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-300 hover:bg-slate-800/60 hover:text-white transition-all"
                    >
                      <Icon size={12} className="shrink-0 text-slate-500" />
                      <span className="truncate flex-1 text-left">{idx + 1}. {step.title}</span>
                    </Link>
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
                      key={chapter.id}
                      href={getChapterUrl(chapter.id)}
                      onClick={() => { if (window.innerWidth < 768) setIsOpen(false); }}
                      className={`flex items-center justify-between px-4 py-2 text-xs sm:text-[13px] font-medium transition-colors ${
                        isActive
                          ? 'bg-[#04AA6D]/20 text-white font-bold border-l-4 border-[#04AA6D]'
                          : 'text-slate-300 hover:bg-slate-800/60 hover:text-white border-l-4 border-transparent'
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
