"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown, Check, Home } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { coursePhases } from '../data/courseData';

import searchIndex from '../data/searchIndex.json';

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
  const { completedChapters } = useProgress();

  // Determine which phase is currently active
  const activeChapterId = pathname.split('/book/')[1] ?? '';
  const activePhaseKey = phaseGroups.find((g) =>
    g.chapters.some((c) => c.id === activeChapterId)
  )?.key ?? phaseGroups[0]?.key ?? '';

  // Expanded phases set — auto-expand the active one
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(
    () => new Set([activePhaseKey])
  );

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
        fixed md:sticky top-0 left-0 h-screen
        w-full md:w-72 bg-[#0f172a] border-r border-slate-850 text-white
        transition-transform duration-300 z-50 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-5">
          {/* Logo / Home Link */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 mb-6 group border-b border-gray-100 dark:border-slate-800/80 pb-4"
            onClick={() => setIsOpen(false)}
          >
            <img src="/logo.svg" alt="Nextsem Logo" className="w-7 h-7 rounded-lg border border-emerald-500/20" />
            <span className="font-black text-xs uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors">
              Nextsem <span className="text-amber-500 font-extrabold text-[9px] px-1.5 py-0.5 bg-amber-500/10 rounded border border-amber-500/20">Home</span>
            </span>
          </Link>

          <h2 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">
            Curriculum
          </h2>


          <nav className="flex flex-col gap-0.5">
            {phaseGroups.map((group) => {
              const isExpanded = expandedPhases.has(group.key);
              const completedCount = group.chapters.filter((c) => completedChapters[c.id]).length;
              const totalCount = group.chapters.length;
              const isPhaseActive = group.key === activePhaseKey;
              const allDone = completedCount === totalCount && totalCount > 0;

              return (
                <div key={group.key}>
                  {/* Phase Header — collapsible */}
                  <button
                    onClick={() => togglePhase(group.key)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all hover:bg-slate-800/60"
                    style={isPhaseActive ? { backgroundColor: `${group.color}15` } : {}}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Phase color dot */}
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: group.color }}
                      />
                      <div className="text-left min-w-0">
                        <div
                          className="text-[10px] font-black uppercase tracking-wider"
                          style={{ color: group.color }}
                        >
                          {group.key}
                        </div>
                        <div className="text-[11px] font-semibold text-slate-200 truncate leading-tight">
                          {group.label}
                        </div>
                      </div>
                    </div>

                     <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {/* Progress badge */}
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        allDone
                          ? 'bg-emerald-950/60 text-emerald-400'
                          : completedCount > 0
                          ? 'bg-blue-950/40 text-blue-400'
                          : 'bg-slate-800/50 text-slate-500'
                      }`}>
                        {completedCount}/{totalCount}
                      </span>
                      {isExpanded
                        ? <ChevronDown size={13} className="text-slate-400" />
                        : <ChevronRight size={13} className="text-slate-400" />
                      }
                    </div>
                  </button>

                  {/* Chapter List */}
                  {isExpanded && (
                    <div
                      className="ml-5 mt-0.5 mb-2 flex flex-col gap-0.5 border-l-2 pl-2.5"
                      style={{ borderColor: `${group.color}35` }}
                    >
                      {group.chapters.map((chapter, ci) => {
                        const isActive = activeChapterId === chapter.id;
                        const isCompleted = !!completedChapters[chapter.id];
                        // "Next up" = first chapter in this group that isn't completed and isn't active
                        const prevDone = ci === 0 || !!completedChapters[group.chapters[ci - 1].id];
                        const isNextUp = !isCompleted && !isActive && prevDone;
                        return (
                          <Link
                            key={chapter.id}
                            href={`/book/${chapter.id}`}
                            onClick={() => setIsOpen(false)}
                            className={`
                              flex items-center justify-between px-2.5 py-2 rounded-lg text-[12px] font-medium transition-all group/ch
                              ${isActive
                                ? 'text-white shadow-sm'
                                : isCompleted
                                ? 'text-emerald-300 hover:bg-emerald-950/30 hover:text-emerald-200'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                            `}
                            style={isActive ? { backgroundColor: group.color } : {}}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {/* Status icon */}
                              {isCompleted && !isActive ? (
                                <span className="shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(52,211,153,0.6)]">
                                  <Check size={9} className="text-white stroke-[3]" />
                                </span>
                              ) : isActive ? (
                                <span className="w-4 shrink-0" />
                              ) : isNextUp ? (
                                <span className="shrink-0 text-[13px] animate-bounce" title="Next up!">👆</span>
                              ) : (
                                <span className="shrink-0 w-4 h-4 rounded-full border border-slate-700/60 bg-slate-900/40" />
                              )}
                              <span className="truncate">{chapter.title}</span>
                            </div>
                            {isActive && <ChevronRight size={13} className="shrink-0 opacity-80" />}
                            {isNextUp && (
                              <span className="shrink-0 text-[9px] font-black text-amber-400 bg-amber-950/40 px-1.5 py-0.5 rounded-full border border-amber-500/30 animate-pulse ml-1">
                                NEXT
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
          </nav>






        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default BookSidebar;

