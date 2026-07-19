"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, FileText, Sparkles, HelpCircle } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { bcaSemesters } from '@/data/bcaCoursesData';
import AdSenseBanner from '@/components/AdSenseBanner';
import BcaInteractiveModal from '@/components/bca-interactive/BcaInteractiveModal';

export default function SubjectSyllabusDashboard({ semester, subject }: { semester: string; subject: string }) {
  const router = useRouter();
  const { completedChapters } = useProgress();

  const semesterId = parseInt(semester, 10);
  const subjectCode = subject;

  const currentSemester = bcaSemesters.find(s => s.id === semesterId);
  const currentSubject = currentSemester?.subjects.find(s => s.code === subjectCode);

  const [mounted, setMounted] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("guest");
  const [points, setPoints] = useState(0);

  // Lab modal states
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [labUnitNum, setLabUnitNum] = useState<number>(1);
  const [labDefaultTab, setLabDefaultTab] = useState<string>("home");

  useEffect(() => {
    setMounted(true);

    const savedUser = localStorage.getItem('nextsem_user');
    let email = "guest";
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        email = parsed.email || "guest";
      } catch (e) {}
    }
    setUserEmail(email);

    const savedPoints = localStorage.getItem(`nextsem_bca_points_${email}`);
    if (savedPoints) {
      setPoints(parseInt(savedPoints) || 0);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-emerald-500 border-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  if (!currentSemester || !currentSubject) {
    return (
      <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <HelpCircle size={48} className="text-emerald-500 mb-4 animate-pulse" />
        <h1 className="text-2xl font-black mb-2">Subject Not Found</h1>
        <p className="text-slate-400 text-sm mb-6 max-w-sm">We couldn&apos;t locate this course syllabus in our BCA revised programme database.</p>
        <Link href="/bca" className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-xl text-xs uppercase tracking-wider transition-all">
          Back to BCA Hub
        </Link>
      </div>
    );
  }

  const getBlockProgress = (blockName: string) => {
    const block = currentSubject.blocks.find(b => b.name === blockName);
    if (!block) return { read: 0, total: 0, pct: 0 };

    let totalUnits = 0;
    let readUnits = 0;

    block.units.forEach(unit => {
      totalUnits++;
      const progressKey = `bca_unit:${block.path}/${unit.fileName}`;
      if (completedChapters[progressKey]) {
        readUnits++;
      }
    });

    return {
      read: readUnits,
      total: totalUnits,
      pct: totalUnits > 0 ? Math.round((readUnits / totalUnits) * 100) : 0
    };
  };

  const getSubjectProgress = () => {
    let totalUnits = 0;
    let readUnits = 0;

    currentSubject.blocks.forEach(block => {
      block.units.forEach(unit => {
        totalUnits++;
        const progressKey = `bca_unit:${block.path}/${unit.fileName}`;
        if (completedChapters[progressKey]) {
          readUnits++;
        }
      });
    });

    return {
      read: readUnits,
      total: totalUnits,
      pct: totalUnits > 0 ? Math.round((readUnits / totalUnits) * 100) : 0
    };
  };

  const subProg = getSubjectProgress();

  const handleOpenInteractive = (unitFileName: string, defaultTab?: string) => {
    const unitNum = unitFileName.includes('UNIT 2') ? 2 : 1;
    setLabUnitNum(unitNum);
    setLabDefaultTab(defaultTab || "home");
    setIsLabOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <Link 
          href={`/bca/${currentSemester.id}`} 
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to Semester {currentSemester.id}</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-550/20 px-4 py-1.5 rounded-full">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300">
              {points} BCA XP
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-8 py-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-black uppercase tracking-widest mb-6">
          <Link href="/bca" className="hover:text-white transition-colors">🏠 Home</Link>
          <span>›</span>
          <Link href={`/bca/${currentSemester.id}`} className="hover:text-white transition-colors">{currentSemester.name}</Link>
          <span>›</span>
          <span className="text-slate-350">{currentSubject.code}</span>
        </div>

        {/* Title Section */}
        <section className="mb-8 text-left md:flex md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                currentSubject.isLab ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
              }`}>
                {currentSubject.isLab ? 'Lab Module' : 'Theory Course'}
              </span>
              <span className="text-[10px] font-bold text-slate-500">{currentSubject.code}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight leading-none mb-1.5">
              {currentSubject.name}
            </h1>
            <p className="text-slate-400 text-xs">
              Syllabus Blocks &amp; Textbooks. Mark units read to complete course.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4 bg-slate-900/30 border border-slate-850 p-4 rounded-2xl">
            <div className="text-center">
              <span className="block text-emerald-450 font-black text-xl">{subProg.pct}%</span>
              <span className="block text-[8px] text-slate-500 font-black uppercase tracking-wider">Completed</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-center">
              <span className="block text-white font-black text-xl">{subProg.read}/{subProg.total}</span>
              <span className="block text-[8px] text-slate-500 font-black uppercase tracking-wider">Units Read</span>
            </div>
          </div>
        </section>

        <div className="mb-6">
          <AdSenseBanner />
        </div>

        {/* Blocks & Units Hierarchy */}
        <section className="space-y-8 mb-12">
          {currentSubject.blocks.map((block, bIdx) => {
            const bp = getBlockProgress(block.name);
            return (
              <div key={block.name} className="bg-[#121217]/40 border border-slate-850 rounded-[32px] overflow-hidden p-6 shadow-md">
                {/* Block header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-850 pb-4 mb-4">
                  <div className="text-left">
                    <span className="text-[10px] text-emerald-400 font-black uppercase tracking-wider">Block {bIdx + 1}</span>
                    <h2 className="text-base md:text-lg font-black text-white leading-tight mt-0.5">{block.name}</h2>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] text-slate-500 font-bold">{bp.read} of {bp.total} read</span>
                    <span className="text-[10px] font-black text-[#39D353] bg-[#39D353]/10 px-2 py-0.5 rounded-md">{bp.pct}%</span>
                  </div>
                </div>

                {/* Units List */}
                <div className="space-y-3">
                  {block.units.length === 0 ? (
                    <p className="text-xs text-slate-500 p-4 text-center select-none">No units configured in this block.</p>
                  ) : (
                    block.units.map((unit, uIdx) => {
                      const progressKey = `bca_unit:${block.path}/${unit.fileName}`;
                      const isCompleted = !!completedChapters[progressKey];
                      const pdfPath = `/BCA_NEW_Books/${block.path}/${unit.fileName}`;
                      const isUnit5 = unit.fileName.toLowerCase() === 'unit 5.pdf' || unit.fileName.toLowerCase() === 'unit-5.pdf';
                      const customNotesPath = isUnit5 
                        ? '/bca/notes/bcs-011-unit-5' 
                        : null;

                      return (
                        <div
                          key={unit.fileName}
                          onClick={() => {
                            if (customNotesPath) {
                              router.push(customNotesPath);
                            } else {
                              router.push(`/bca/viewer?file=${encodeURIComponent(pdfPath)}&title=${encodeURIComponent(unit.displayName)}`);
                            }
                          }}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#181822]/40 hover:bg-[#181822]/80 border border-white/5 hover:border-slate-800 rounded-2xl cursor-pointer transition-all duration-155 group"
                        >
                          <div className="flex items-start gap-3.5 min-w-0 pr-2">
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-black ${
                              isCompleted 
                                ? 'bg-[#39D353]/10 text-[#39D353] border border-[#39D353]/20' 
                                : 'bg-slate-800/40 text-slate-400 border border-slate-800/60'
                            }`}>
                              {isCompleted ? '✓' : uIdx + 1}
                            </div>
                            <div className="min-w-0 text-left">
                              <h4 className="text-sm font-black text-white truncate leading-snug group-hover:text-emerald-300 transition-colors">
                                {unit.displayName}
                              </h4>
                              <p className="text-[9px] text-slate-500 font-mono mt-0.5">{unit.fileName}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mt-3 sm:mt-0 justify-end">
                            {isUnit5 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (customNotesPath) router.push(customNotesPath);
                                }}
                                className="px-3 py-1.5 bg-gradient-to-r from-emerald-500/15 to-indigo-500/15 border border-emerald-550/35 hover:border-emerald-500/50 rounded-xl text-[9px] font-black uppercase text-emerald-350 tracking-wider transition-all duration-155 cursor-pointer flex items-center gap-1"
                              >
                                <Sparkles size={10} className="text-emerald-400" />
                                Interactive Notes
                              </button>
                            )}

                            {unit.isInteractive && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenInteractive(unit.fileName, unit.defaultTab);
                                }}
                                className="px-3 py-1.5 bg-gradient-to-r from-emerald-500/15 to-indigo-500/15 border border-emerald-550/35 hover:border-emerald-500/50 rounded-xl text-[9px] font-black uppercase text-emerald-300 tracking-wider transition-all duration-155 cursor-pointer flex items-center gap-1"
                              >
                                <Sparkles size={10} className="text-emerald-400" />
                                Interactive Lab
                              </button>
                            )}

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/bca/viewer?file=${encodeURIComponent(pdfPath)}&title=${encodeURIComponent(unit.displayName)}`);
                              }}
                              className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:border-slate-750 text-[10px] font-bold text-slate-300 rounded-xl transition-all duration-150 shrink-0 cursor-pointer flex items-center gap-1.5"
                            >
                              <FileText size={11} />
                              Open PDF
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* Lab Modal */}
      {isLabOpen && (
        <BcaInteractiveModal
          unitNumber={labUnitNum}
          defaultTab={labDefaultTab}
          onClose={() => setIsLabOpen(false)}
        />
      )}

      <footer className="w-full py-6 text-center text-[10px] text-slate-700 border-t border-white/5 select-none mt-auto">
        © 2026 Nextsem Academy · IGNOU BCA Revised Syllabus Companion
      </footer>
    </div>
  );
}
