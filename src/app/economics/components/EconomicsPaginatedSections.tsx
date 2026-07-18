"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import AdSenseBanner from "@/components/AdSenseBanner";

interface Props {
  slides: React.ReactNode[];
  chapterId: string;
  nextChapterPath?: string;
  nextChapterTitle?: string;
}

export default function EconomicsPaginatedSections({ slides, chapterId, nextChapterPath, nextChapterTitle }: Props) {
  const router = useRouter();
  const [activeIdx, setActiveIdx] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Check if this chapter is completed
    const saved = localStorage.getItem('nextsem_economics_completed');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed[chapterId]) setCompleted(true);
      } catch (e) {
        console.error(e);
      }
    }
  }, [chapterId]);

  const handleNext = () => {
    if (activeIdx < slides.length - 1) {
      setActiveIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      setActiveIdx((prev) => prev - 1);
    }
  };

  const markComplete = () => {
    const saved = localStorage.getItem('nextsem_economics_completed');
    let parsed: Record<string, boolean> = {};
    if (saved) {
      try {
        parsed = JSON.parse(saved);
      } catch (e) {}
    }
    parsed[chapterId] = true;
    localStorage.setItem('nextsem_economics_completed', JSON.stringify(parsed));
    setCompleted(true);

    // Add points
    const savedPoints = localStorage.getItem('nextsem_economics_points');
    const currPoints = parseInt(savedPoints || "0") || 0;
    const newPoints = currPoints + 50;
    localStorage.setItem('nextsem_economics_points', newPoints.toString());
    // Dispatch auth/progress change event for header
    window.dispatchEvent(new Event("nextsem_economics_progress_changed"));
  };

  const isLastSlide = activeIdx === slides.length - 1;

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-6 select-none">
      
      {/* Mini Slide indicator */}
      <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-500 px-1">
        <span className="flex items-center gap-1">
          <BookOpen size={12} className="text-blue-500" />
          <span>Section {activeIdx + 1} of {slides.length}</span>
        </span>
        <span className="font-mono text-blue-400">{(activeIdx + 1) * 10}% Read</span>
      </div>

      {/* Slide Card Deck container */}
      <div className="w-full bg-[#0a1120]/75 backdrop-blur-xl border border-slate-850 rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-300">
        
        {/* Active slide body */}
        <div className="p-6 md:p-8 min-h-[220px] prose prose-invert max-w-none text-left text-xs md:text-sm leading-relaxed text-slate-300 font-medium">
          {slides[activeIdx]}
        </div>

        {/* Deck Navigation Actions */}
        <div className="p-5 border-t border-slate-900 flex items-center justify-between gap-4 bg-slate-950/20">
          <button
            onClick={handlePrev}
            disabled={activeIdx === 0}
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-450 hover:text-white flex items-center justify-center transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95"
          >
            <ChevronLeft size={16} className="stroke-[3]" />
          </button>

          {isLastSlide ? (
            !completed ? (
              <button
                onClick={markComplete}
                className="flex-1 py-3 text-xs font-black uppercase tracking-widest text-black bg-[#38bdf8] hover:bg-[#58cbfb] rounded-xl transition-all flex items-center justify-center gap-1 active:scale-95 shadow-lg shadow-blue-500/10 cursor-pointer"
              >
                Mark Complete ✓
              </button>
            ) : (
              <div className="flex-1 py-3 text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center gap-1.5 cursor-default">
                <Check size={14} className="stroke-[3]" /> Completed
              </div>
            )
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 py-3 text-xs font-black uppercase tracking-widest text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
            >
              Next <ChevronRight size={14} className="stroke-[3]" />
            </button>
          )}
        </div>
      </div>

      <div className="shrink-0">
        <AdSenseBanner />
      </div>

      {/* Completion actions (Next Chapter recommendation) */}
      {isLastSlide && completed && (
        <div className="p-6 bg-[#0a1526]/40 border border-blue-500/10 rounded-3xl space-y-4 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="text-2xl animate-bounce block">🎉</span>
          <h3 className="text-sm font-black text-white uppercase tracking-tight">Chapter Mastery Achieved!</h3>
          <p className="text-xs text-slate-400 font-bold leading-relaxed max-w-xs mx-auto">
            You have successfully completed this NCERT Statistics for Economics chapter. Keep going to build your analytical skills!
          </p>
          <div className="pt-2 flex flex-col gap-2">
            {nextChapterPath ? (
              <button
                onClick={() => router.push(`/economics/book/${nextChapterPath}`)}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-black font-black text-xs uppercase tracking-widest rounded-2xl transition-all active:scale-95 shadow-md shadow-blue-500/10 cursor-pointer"
              >
                Next: {nextChapterTitle} →
              </button>
            ) : (
              <button
                onClick={() => router.push(`/economics`)}
                className="w-full py-3 bg-slate-900 border border-slate-800 hover:border-sky-500/20 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all active:scale-95 cursor-pointer"
              >
                Back to Syllabus 🏆
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
