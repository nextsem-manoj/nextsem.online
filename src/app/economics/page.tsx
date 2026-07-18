"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, CheckCircle, Award, Star, BookOpenCheck } from 'lucide-react';
import { economicsPhases } from './courseData';
import AdSenseBanner from '@/components/AdSenseBanner';

export default function EconomicsDashboard() {
  const router = useRouter();
  const [completedChapters, setCompletedChapters] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('nextsem_economics_completed');
    if (savedProgress) {
      try {
        setCompletedChapters(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Failed to parse economics progress:", e);
      }
    }
    const savedPoints = localStorage.getItem('nextsem_economics_points');
    if (savedPoints) {
      setPoints(parseInt(savedPoints) || 0);
    }
  }, []);

  const toggleChapterComplete = (path: string) => {
    const updated = { ...completedChapters, [path]: !completedChapters[path] };
    setCompletedChapters(updated);
    localStorage.setItem('nextsem_economics_completed', JSON.stringify(updated));

    // Update points (+50 per completed chapter)
    const newPoints = Object.values(updated).filter(Boolean).length * 50;
    setPoints(newPoints);
    localStorage.setItem('nextsem_economics_points', newPoints.toString());
  };

  const currentPhase = economicsPhases[0];
  const totalChapters = currentPhase.topics.length;
  const completedCount = Object.values(completedChapters).filter(Boolean).length;
  const percentComplete = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-[#07070c] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-blue-500 border-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#07070c] text-white flex flex-col justify-between font-sans selection:bg-blue-500/30 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to Hub</span>
        </Link>
        <div className="flex items-center gap-2 bg-blue-950/40 border border-sky-500/20 px-4 py-1.5 rounded-full">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-wider text-blue-300">
            {points} STATS Points
          </span>
        </div>
      </header>

      {/* Main Contents container */}
      <main className="flex-1 w-full max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 py-8 space-y-6 select-none">
        
        {/* Title module block */}
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-blue-500/10 border border-sky-500/20 text-[#38bdf8] text-[9px] font-black uppercase tracking-widest rounded-full">
            Class XI Curriculum
          </span>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
            Statistics for Economics
          </h1>
          <p className="text-xs text-slate-400 font-bold max-w-sm mx-auto leading-relaxed">
            Master statistical methods, collection systems, measures of central tendency, and tools to analyze real economic trends.
          </p>
        </div>

        {/* Ad 1 (Top) */}
        <div className="shrink-0">
          <AdSenseBanner />
        </div>

        {/* Course Progress Section */}
        <div className="bg-[#111116]/80 border border-white/5 rounded-3xl p-5 space-y-4 shadow-xl">
          <div className="flex justify-between items-center text-xs font-black uppercase">
            <span className="text-slate-400">Course Syllabus Progress</span>
            <span className="text-[#38bdf8]">{percentComplete}% Complete</span>
          </div>
          <div className="w-full bg-slate-900 border border-slate-850 h-2.5 rounded-full overflow-hidden p-[1px]">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-slate-500 justify-center">
            <BookOpenCheck size={12} className="text-blue-500" />
            <span>{completedCount} of {totalChapters} Chapters Completed</span>
          </div>
        </div>

        {/* Chapters list layout */}
        <div className="space-y-3">
          {currentPhase.topics.map((topic, index) => {
            const isCompleted = completedChapters[topic.path] || false;
            
            return (
              <React.Fragment key={topic.path}>
                {/* Ad 2 (Middle) placed after Chapter 4 */}
                {index === 4 && (
                  <div className="py-2 shrink-0">
                    <AdSenseBanner />
                  </div>
                )}
                
                <div 
                  className={`border rounded-2xl p-4 transition-all duration-300 flex items-center justify-between gap-4 ${
                    isCompleted 
                      ? "border-sky-500/20 bg-blue-950/5 shadow-md shadow-blue-950/5" 
                      : "border-slate-850 bg-slate-900/20 hover:border-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      onClick={() => toggleChapterComplete(topic.path)}
                      className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isCompleted
                          ? "bg-sky-600 border-sky-600 text-white"
                          : "border-slate-700 bg-transparent hover:border-blue-500 text-transparent"
                      }`}
                    >
                      ✓
                    </button>
                    <div className="min-w-0 text-left">
                      <span className="block text-[8px] font-black uppercase text-slate-500">NCERT Chapter {index + 1}</span>
                      <Link 
                        href={`/economics/book/${topic.path}`}
                        className="text-xs font-bold text-white hover:text-blue-400 transition-colors truncate block"
                      >
                        {topic.label}
                      </Link>
                    </div>
                  </div>

                  <Link 
                    href={`/economics/book/${topic.path}`}
                    className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-blue-500 text-white text-[9px] font-black uppercase tracking-wider rounded-xl transition-all"
                  >
                    Study
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Ad 3 (Bottom) */}
        <div className="shrink-0 pt-2">
          <AdSenseBanner />
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-[10px] text-slate-700 border-t border-white/5 select-none shrink-0 mt-8">
        © 2026 Nextsem Academy · NCERT Statistics for Economics Class XI Study Module
      </footer>
    </div>
  );
}
