"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Sparkles, BookOpen, GraduationCap, Lock, CheckCircle2, ChevronRight } from 'lucide-react';
import { ncertSubjects } from '@/data/ncertCoursesData';
import { useProgress } from '@/context/ProgressContext';
import AdSenseBanner from '@/components/AdSenseBanner';

// Map of noteKeys that have a real notes page built
const BUILT_NOTE_KEYS = new Set([
  'accounting-chapter-1',
  'accounting-chapter-2',
  'accounting-chapter-3',
  'accounting-chapter-4',
  'accounting-chapter-5',
  'accounting-chapter-6',
  'accounting-chapter-7',
  'accounting-chapter-8',
  'economics-11-chapter-1',
  'economics-11-chapter-2',
  'economics-11-chapter-3',
  'history-12-chapter-5',
  'history-12-chapter-10',
  'history-12-chapter-11',
  'history-12-chapter-13',
  'history-12-chapter-15',
  'physics-chapter-3',
]);

export default function NcertClient() {
  const { completedChapters } = useProgress();
  const [mounted, setMounted] = useState(false);
  const [points, setPoints] = useState(0);
  const [isSubdomain, setIsSubdomain] = useState(false);
  const [filter, setFilter] = useState<'all' | '11' | '12'>('all');

  useEffect(() => {
    setMounted(true);
    const savedUser = localStorage.getItem('nextsem_user');
    let email = "guest";
    if (savedUser) {
      try { const parsed = JSON.parse(savedUser); email = parsed.email || "guest"; } catch (e) {}
    }
    const savedPoints = localStorage.getItem(`nextsem_bca_points_${email}`);
    if (savedPoints) setPoints(parseInt(savedPoints) || 0);
    if (typeof window !== 'undefined' && window.location.hostname.startsWith('ncert.')) {
      setIsSubdomain(true);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-blue-500 border-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  const filteredSubjects = ncertSubjects.filter(s => {
    if (filter === '11') return s.class === '11th Class';
    if (filter === '12') return s.class === '12th Class';
    return true;
  });

  const totalUnits = ncertSubjects.reduce((acc, s) => acc + s.blocks.reduce((a, b) => a + b.units.length, 0), 0);
  const completedUnits = ncertSubjects.reduce((acc, s) =>
    acc + s.blocks.reduce((a, b) =>
      a + b.units.filter(u => !!completedChapters[`ncert_unit:${u.noteKey}`]).length, 0), 0);

  return (
    <div className="w-full h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-blue-900/8 blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-violet-900/8 blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-slate-950/85 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <a
          href={isSubdomain ? "https://nextsem.online" : "/"}
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>{isSubdomain ? "Back to Nextsem" : "Back to Hub"}</span>
        </a>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <BookOpen size={14} className="text-indigo-400" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-indigo-300 font-outfit">NCERT Hub</span>
        </div>
      </header>

      {/* Main Container (Split-Pane Grid) */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 py-4 overflow-hidden flex flex-col md:flex-row gap-6">
        
        {/* Left Column: Profile Stats & Filters (Scrollable) */}
        <aside className="w-full md:w-60 shrink-0 flex flex-col gap-4 overflow-y-auto pr-1 bg-[#0c0c14]/40 border border-slate-850/30 p-4 rounded-2xl">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block px-1 font-outfit">Your Progress</span>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-slate-900/40 border border-slate-850/50 p-3 rounded-xl">
              <span className="text-xs text-slate-400 font-medium">XP Earned</span>
              <div className="flex items-center gap-1">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-amber-400 font-outfit">{points}</span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-slate-900/40 border border-slate-850/50 p-3 rounded-xl">
              <span className="text-xs text-slate-400 font-medium">Completed</span>
              <span className="text-xs font-bold text-emerald-400 font-outfit">{completedUnits}/{totalUnits}</span>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-850/50 p-3 rounded-xl flex flex-col items-center">
            <span className="text-2xl font-black text-white font-outfit">{Math.round((completedUnits / totalUnits) * 100) || 0}%</span>
            <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5">Overall Progress</span>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-700"
                style={{ width: `${Math.round((completedUnits / totalUnits) * 100) || 0}%` }} />
            </div>
          </div>

          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block px-1 mt-2 font-outfit">Filters</span>
          
          <div className="flex flex-col gap-1.5 font-outfit">
            {(['all', '11', '12'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer border ${
                  filter === f
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                    : 'bg-slate-900/40 border-slate-850 text-slate-400 hover:text-white'
                }`}
              >
                {f === 'all' ? 'All Classes' : `Class ${f}th`}
              </button>
            ))}
          </div>

          {/* Ad 1 (Left Sidebar bottom): Compliant, high performance placement */}
          <div className="pt-4 mt-auto border-t border-slate-850/40 hidden md:block shrink-0">
            <span className="text-[8px] font-black uppercase tracking-wider text-slate-600 block mb-2 text-center">Advertisement</span>
            <div className="border border-slate-850 rounded-xl p-2 bg-slate-950/40 flex justify-center">
              <AdSenseBanner />
            </div>
          </div>
        </aside>

        {/* Center Column: Subjects & Chapter List (Scrollable) */}
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2 min-w-0">
          
          {/* Ad 2 (Top Banner): Responsive horizontal unit */}
          <div className="w-full shrink-0">
            <AdSenseBanner />
          </div>

          {/* Hero Banner */}
          <section className="text-left shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2 font-outfit">
              <GraduationCap size={12} />
              School &amp; Competitive Exam Prep
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none mb-1 font-outfit">
              NCERT Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Hub</span>
            </h1>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xl">
              Visual revision guides, concept notes, MCQs, and self-assessment for Class 11 &amp; 12 NCERT.
            </p>
          </section>

          {/* Subjects & Units */}
          <section className="space-y-6 pb-8">
            {filteredSubjects.map((subject) => (
              <div key={subject.code}
                className="bg-[#0d0d14]/60 border border-slate-850/50 rounded-[24px] overflow-hidden shadow-md">

                {/* Subject header */}
                <div className="flex items-center justify-between gap-3 p-5 pb-3 border-b border-slate-850/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl shrink-0 border"
                      style={{ backgroundColor: `${subject.color}12`, borderColor: `${subject.color}20` }}>
                      {subject.emoji}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5 font-outfit">
                        <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                          style={{ color: subject.color, backgroundColor: `${subject.color}15` }}>
                          {subject.class}
                        </span>
                        <span className="text-[9px] text-slate-600 font-black uppercase tracking-wider">{subject.code}</span>
                      </div>
                      <h2 className="text-sm md:text-base font-black text-white leading-tight font-outfit">{subject.name}</h2>
                    </div>
                  </div>
                  <span className="text-[9px] text-slate-500 font-black font-outfit">
                    {subject.blocks.reduce((a, b) => a + b.units.filter(u => !!completedChapters[`ncert_unit:${u.noteKey}`]).length, 0)}
                    /
                    {subject.blocks.reduce((a, b) => a + b.units.length, 0)} Done
                  </span>
                </div>

                {/* Blocks */}
                <div className="px-5 py-4 space-y-4">
                  {subject.blocks.map((block) => (
                    <div key={block.name} className="space-y-2">
                      <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest block font-outfit">{block.name}</span>
                      <div className="space-y-2">
                        {block.units.map((unit) => {
                          const isBuilt = BUILT_NOTE_KEYS.has(unit.noteKey);
                          const notesUrl = `/ncert/notes/${unit.noteKey}`;
                          const isDone = !!completedChapters[`ncert_unit:${unit.noteKey}`];

                          return (
                            <div
                              key={unit.fileName}
                              className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-[#111118]/50 hover:bg-[#111118]/80 border border-slate-850/40 hover:border-slate-800 rounded-xl transition-all duration-150 group"
                            >
                              <div className="flex items-start gap-3 min-w-0 flex-1 pr-4">
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs border"
                                  style={{
                                    backgroundColor: isDone ? '#39FF1415' : `${subject.color}12`,
                                    borderColor: isDone ? '#39FF1430' : `${subject.color}20`
                                  }}>
                                  {isDone ? '✅' : subject.emoji}
                                </div>
                                <div className="min-w-0 text-left">
                                  <h4 className="text-xs font-black text-white leading-snug group-hover:text-blue-200 transition-colors mb-0.5 font-outfit">
                                    {unit.displayName}
                                  </h4>
                                  <p className="text-[9px] text-slate-600 font-mono">{unit.fileName}</p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 mt-3 sm:mt-0 justify-end shrink-0 font-outfit">
                                <Link
                                  href={`/ncert/pdf?${new URLSearchParams({
                                    title: unit.displayName,
                                    url: unit.ncertPdfUrl,
                                    fallback: unit.localPdfPath,
                                    subject: subject.code.split('-')[0].toLowerCase(),
                                    color: subject.color
                                  }).toString()}`}
                                  className="px-3 py-1.5 bg-slate-800/60 hover:bg-slate-700/60 border border-white/5 hover:border-white/10 text-slate-300 hover:text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-1"
                                >
                                  📄 PDF
                                </Link>

                                {isBuilt ? (
                                  <Link
                                    href={notesUrl}
                                    className="px-3.5 py-1.5 text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-1"
                                    style={{ backgroundColor: subject.color }}
                                  >
                                    <Sparkles size={10} />
                                    Notes
                                  </Link>
                                ) : (
                                  <span className="px-3.5 py-1.5 bg-slate-850 border border-slate-800 text-slate-500 text-[10px] font-black uppercase tracking-wider rounded-xl flex items-center gap-1 cursor-not-allowed">
                                    <Lock size={9} />
                                    Soon
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Ad 3 (Right Sidebar): Compliant vertical ad (Exactly 3 Ads total per page view) */}
        <aside className="hidden md:flex w-80 shrink-0 flex-col gap-4 pl-1 bg-[#0c0c14]/40 border border-slate-850/30 p-4 rounded-2xl select-none justify-between">
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 text-center block pb-2 border-b border-slate-850/50 font-outfit">Sponsored Advertisement</span>
          
          <div className="border border-slate-850/50 rounded-xl p-3.5 bg-slate-950/40 flex-1 flex items-center justify-center text-center my-4 min-h-[400px]">
            <AdSenseBanner />
          </div>
        </aside>

      </main>

      {/* Footer copyright */}
      <footer className="w-full py-3.5 text-center text-[9px] text-slate-700 border-t border-white/5 select-none shrink-0 font-outfit">
        © 2026 Nextsem Academy · NCERT Study Companion
      </footer>
    </div>
  );
}
