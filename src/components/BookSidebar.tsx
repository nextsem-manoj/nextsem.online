"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown, Check, Home, ArrowLeft } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { coursePhases } from '../data/courseData';
import { htmlLessons } from '../data/htmlLessonsData';

import searchIndex from '../data/searchIndex.json';
import { getChapterIdFromPath, getChapterUrl } from '../lib/htmlLessonsHelper';

// Map phase id → color hex and title from courseData
const phaseColorMap: Record<string, string> = {};
const phaseTitleMap: Record<string, string> = {};
coursePhases.forEach((p) => {
  phaseColorMap[p.id] = p.bulletColor;
  phaseTitleMap[p.id] = p.title;
});

// Group search index items by phase prefix (P0, P1, ...)
type Chapter = { id: string; title: string; phaseKey: string };
type PhaseGroup = { key: string; label: string; color: string; chapters: Chapter[] };

const phaseGroups: PhaseGroup[] = [];
searchIndex.forEach((item) => {
  const phaseKey = item.phase.split('.')[0]; // "P0.1" -> "P0"
  let group = phaseGroups.find((g) => g.key === phaseKey);
  if (!group) {
    group = {
      key: phaseKey,
      label: phaseTitleMap[phaseKey] ?? phaseKey,
      color: phaseColorMap[phaseKey] ?? '#3b82f6',
      chapters: [],
    };
    phaseGroups.push(group);
  }
  group.chapters.push({
    id: item.id,
    title: `${item.phase}: ${item.title.split(': ').slice(1).join(': ') || item.title}`,
    phaseKey,
  });
});

interface BookSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const BookSidebar = ({ isOpen, setIsOpen }: BookSidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { completedChapters } = useProgress();

  // Determine which phase is currently active
  const activeChapterId = getChapterIdFromPath(pathname);
  const activePhaseKey = phaseGroups.find((g) =>
    g.chapters.some((c) => c.id === activeChapterId)
  )?.key ?? phaseGroups[0]?.key ?? '';

  // Expanded phases set — auto-expand the active one
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(
    () => new Set([activePhaseKey])
  );

  // HTML modules state and progress tracking
  const [completedHtmlLessons, setCompletedHtmlLessons] = useState<Set<number>>(new Set());
  const [userEmail, setUserEmail] = useState<string>("guest");
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set());

  const htmlModules = [
    { id: 1, title: "Web Fundamentals & Client-Server", range: [1, 10] },
    { id: 2, title: "Document Structure & Metadata", range: [11, 20] },
    { id: 3, title: "Structural Text & Layout Elements", range: [21, 30] },
    { id: 4, title: "Semantic Content & Modifications", range: [31, 40] },
    { id: 5, title: "Navigation & Hyperlinks", range: [41, 50] },
    { id: 6, title: "Multimedia & Art Direction", range: [51, 60] },
    { id: 7, title: "Native Audio, Video & Embeds", range: [61, 70] },
    { id: 8, title: "Lists, Tables & Layout Grids", range: [71, 80] },
    { id: 9, title: "Interactive Forms & Inputs", range: [81, 90] },
    { id: 10, title: "Advanced Semantics & APIs", range: [91, 100] }
  ].map(mod => ({
    ...mod,
    lessons: htmlLessons.filter(l => l.id >= mod.range[0] && l.id <= mod.range[1])
  }));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nextsem_user");
      let email = "guest";
      if (saved) {
        try {
          const userObj = JSON.parse(saved);
          if (userObj?.email) {
            email = userObj.email;
          }
        } catch (e) {}
      }
      setUserEmail(email);
      
      const completed = new Set<number>();
      for (let id = 1; id <= 100; id++) {
        const done = localStorage.getItem(`nextsem_html_completed_${email}_${id}`) === "true";
        if (done) completed.add(id);
      }
      setCompletedHtmlLessons(completed);
    }
  }, [pathname]);

  useEffect(() => {
    const currentLesson = htmlLessons.find(l => pathname.endsWith(`/${l.slug}`) || (pathname === '/html' && l.id === 1));
    if (currentLesson) {
      const activeModId = Math.floor((currentLesson.id - 1) / 10) + 1;
      setExpandedModules(prev => new Set([...prev, activeModId]));
    }
  }, [pathname]);

  const toggleModule = (modId: number) => {
    setExpandedModules(prev => {
      const next = new Set(prev);
      if (next.has(modId)) next.delete(modId);
      else next.add(modId);
      return next;
    });
  };

  useEffect(() => {
    if (activePhaseKey) {
      setTimeout(() => {
        setExpandedPhases((prev) => new Set([...prev, activePhaseKey]));
      }, 0);
    }
  }, [activePhaseKey]);

  const togglePhase = (key: string) => {
    setExpandedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <>
      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 h-screen
        w-full sm:w-72 bg-[#0f172a] border-r border-slate-850 text-white
        transition-transform duration-300 z-50 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-5">
          {/* Back Button */}
            <button
              onClick={() => {
                setIsOpen(false);
                if (window.opener || window.history.length === 1) {
                  window.close();
                } else {
                  if (activePhaseKey === 'P1') {
                    router.push('/html');
                  } else {
                    router.push('/');
                  }
                }
              }}
              className="w-full flex items-center gap-2 px-3 py-2.5 mb-5 bg-slate-900 hover:bg-[#121c38] border border-slate-850 hover:border-indigo-500/30 text-slate-300 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer"
              title="Return to Welcome Dashboard"
            >
              <ArrowLeft size={14} className="stroke-[2.5]" />
              <span>Back to Dashboard</span>
            </button>

            {/* Active Module Header */}
            {(() => {
              const currentGroup = phaseGroups.find((g) => g.key === activePhaseKey) || phaseGroups[0];
              if (!currentGroup) return null;
              
              const isHtml = activePhaseKey === 'P1';
              const completedCount = isHtml
                ? completedHtmlLessons.size
                : currentGroup.chapters.filter((c) => completedChapters[c.id]).length;
              const totalCount = isHtml ? 100 : currentGroup.chapters.length;
              const allDone = completedCount === totalCount && totalCount > 0;

              return (
                <div className="mb-4 text-left border-b border-slate-800/40 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: currentGroup.color }}>
                      Module: {currentGroup.key}
                    </span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                      allDone ? 'bg-emerald-950/60 text-emerald-400' : 'bg-slate-800/60 text-slate-450'
                    }`}>
                      {completedCount}/{totalCount}
                    </span>
                  </div>
                  <h3 className="text-xs font-black text-white uppercase tracking-tight leading-snug mt-1">
                    {isHtml ? "All HTML5 Modules" : currentGroup.label}
                  </h3>
                </div>
              );
            })()}

            {/* Chapters list of the active module */}
            <nav className="flex flex-col gap-1.5">
              {activePhaseKey === 'P1' ? (
                // Custom Nested HTML Modules Navigation
                <div className="flex flex-col gap-2">
                  {htmlModules.map((mod) => {
                    const isExpanded = expandedModules.has(mod.id);
                    const isCurrentModule = mod.lessons.some(l => pathname.endsWith(`/${l.slug}`) || (pathname === '/html' && l.id === 1));
                    const completedCount = mod.lessons.filter(l => completedHtmlLessons.has(l.id)).length;
                    
                    return (
                      <div key={mod.id} className="border border-slate-800/40 rounded-xl overflow-hidden bg-slate-900/10">
                        <button
                          onClick={() => toggleModule(mod.id)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 text-left transition-all ${
                            isCurrentModule ? 'bg-indigo-950/20 text-white' : 'hover:bg-slate-800/40 text-slate-350'
                          }`}
                        >
                          <div className="min-w-0 flex-1 pr-2">
                            <span className="text-[8px] font-black uppercase text-indigo-400 block tracking-wider">Unit {mod.id}</span>
                            <span className="text-[11px] font-bold truncate block mt-0.5 leading-snug">{mod.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-slate-800/60 text-slate-400">
                              {completedCount}/10
                            </span>
                            {isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                          </div>
                        </button>
                        
                        {isExpanded && (
                          <div className="bg-slate-950/25 border-t border-slate-900/60 p-1 flex flex-col gap-0.5">
                            {mod.lessons.map((lesson) => {
                              const isLActive = pathname.endsWith(`/${lesson.slug}`) || (pathname === '/html' && lesson.id === 1);
                              const isLCompleted = completedHtmlLessons.has(lesson.id);
                              
                              return (
                                <Link
                                  key={lesson.id}
                                  href={`/html/${lesson.slug}`}
                                  onClick={() => setIsOpen(false)}
                                  className={`flex items-start justify-between px-2.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                                    isLActive
                                      ? 'bg-[#2980b9] text-white font-bold'
                                      : isLCompleted
                                      ? 'text-emerald-300 hover:bg-emerald-950/20'
                                      : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
                                  }`}
                                >
                                  <div className="flex items-start gap-2 flex-1 min-w-0">
                                    {isLCompleted ? (
                                      <span className="shrink-0 mt-0.5 flex items-center justify-center w-3.5 h-3.5 rounded-full bg-emerald-500">
                                        <Check size={8} className="text-white stroke-[3]" />
                                      </span>
                                    ) : isLActive ? (
                                      <span className="w-3.5 shrink-0 font-black text-center text-white text-[9px]">•</span>
                                    ) : (
                                      <span className="shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full border border-slate-700/60" />
                                    )}
                                    <span className="truncate flex-1 text-left leading-normal">
                                      {lesson.id}. {lesson.title}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Default CLI / Other Courses Navigation
                (() => {
                  const currentGroup = phaseGroups.find((g) => g.key === activePhaseKey) || phaseGroups[0];
                  if (!currentGroup) return null;

                  return currentGroup.chapters.map((chapter, ci) => {
                    const isActive = activeChapterId === chapter.id;
                    const isCompleted = !!completedChapters[chapter.id];
                    const prevDone = ci === 0 || !!completedChapters[currentGroup.chapters[ci - 1].id];
                    const isNextUp = !isCompleted && !isActive && prevDone;

                    return (
                      <Link
                        key={chapter.id}
                        href={getChapterUrl(chapter.id)}
                        onClick={() => setIsOpen(false)}
                        className={`
                          flex items-start justify-between px-2.5 py-2.5 rounded-lg text-[13px] font-semibold transition-all group/ch
                          ${isActive
                            ? 'text-white shadow-sm font-bold'
                            : isCompleted
                            ? 'text-emerald-300 hover:bg-emerald-950/30 hover:text-emerald-200'
                            : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                        `}
                        style={isActive ? { backgroundColor: currentGroup.color } : {}}
                      >
                        <div className="flex items-start gap-2.5 min-w-0 flex-1">
                          {/* Status icon */}
                          {isCompleted && !isActive ? (
                            <span className="shrink-0 mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.6)]">
                              <Check size={9} className="text-white stroke-[3]" />
                           </span>
                          ) : isActive ? (
                            <span className="w-4 shrink-0 font-black text-[10px] text-center" style={{ color: currentGroup.color }}>•</span>
                          ) : isNextUp ? (
                            <span className="shrink-0 text-[13px] animate-bounce" title="Next up!">👆</span>
                          ) : (
                            <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full border border-slate-700/60 bg-slate-900/40" />
                          )}
                          <span className="whitespace-normal break-words leading-snug flex-1 text-left">{chapter.title}</span>
                        </div>
                        {isActive && <ChevronRight size={13} className="shrink-0 opacity-80 mt-1" />}
                        {isNextUp && (
                          <span className="shrink-0 text-[8px] font-black text-amber-400 bg-amber-950/40 px-1.5 py-0.5 rounded-full border border-amber-500/30 animate-pulse ml-1 mt-0.5">
                            NEXT
                          </span>
                        )}
                      </Link>
                    );
                  });
                })()
              )}
            </nav>
        </div>






      </aside>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default BookSidebar;

