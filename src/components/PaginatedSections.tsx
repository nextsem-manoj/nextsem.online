"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Check } from "lucide-react";
import PracticeAssignment from "./PracticeAssignment";
import MarkCompleteButton from "./MarkCompleteButton";
import ChapterTips from "./ChapterTips";
import BookPagination from "./BookPagination";

interface PaginatedSectionsProps {
  slides: React.ReactNode[];
  hasAssignment: boolean;
  chapterId: string;
  instructions: string[];
}

export default function PaginatedSections({
  slides,
  hasAssignment,
  chapterId,
  instructions,
}: PaginatedSectionsProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Scroll to top of the reading container when slide changes
  useEffect(() => {
    const container = document.querySelector(".in-book-mode main div.overflow-y-auto") || document.querySelector("main div.overflow-y-auto");
    if (container) {
      container.scrollTop = 0;
    }
  }, [activeSlide]);

  if (!slides || slides.length === 0) return null;

  const isLastSlide = activeSlide === slides.length - 1;
  const progressPercent = ((activeSlide + 1) / slides.length) * 100;

  return (
    <div className="animate-in fade-in duration-500 space-y-6 pb-4">
      {/* Slide Deck Container */}
      <div className="w-full bg-[#0a1120]/75 backdrop-blur-xl border border-slate-850 rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-300">
        
        {/* Card Header: Progress Bar */}
        <div className="relative w-full h-1.5 bg-slate-900/40">
          <div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-300 shadow-[0_0_8px_rgba(52,211,153,0.3)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Card Info Bar */}
        <div className="px-6 pt-4 pb-2 flex items-center justify-between border-b border-slate-800/40 text-slate-400 text-xs font-bold">
          <div className="flex items-center gap-1.5 text-blue-400">
            <BookOpen size={14} />
            <span>LESSON SLIDES</span>
          </div>
          <div className="bg-slate-800/60 px-3 py-1 rounded-full text-slate-300 font-mono">
            {activeSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Card Body: Active Slide Content */}
        <div className="px-6 py-6 md:px-8 md:py-8 min-h-[220px] max-w-none">
          <article className="prose prose-slate dark:prose-invert prose-blue max-w-none text-[15px] leading-relaxed">
            {slides[activeSlide]}
          </article>
        </div>

        {/* Card Footer: Navigation Actions */}
        <div className="px-6 py-4 border-t border-slate-800/40 bg-slate-900/20 flex flex-col sm:flex-row justify-between items-center gap-3">
          
          {/* Back Button */}
          <button
            onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
            disabled={activeSlide === 0}
            className="w-full sm:w-auto px-4 py-2 text-xs font-black rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-30 disabled:hover:bg-slate-900 disabled:hover:text-slate-300 transition-all flex items-center justify-center gap-1 active:scale-95"
          >
            <ChevronLeft size={14} className="stroke-[3]" /> PREV
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === activeSlide ? "w-6 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "w-2 bg-slate-800 hover:bg-slate-700"}`}
                title={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next/Finish Button */}
          {activeSlide < slides.length - 1 ? (
            <button
              onClick={() => setActiveSlide((prev) => Math.min(slides.length - 1, prev + 1))}
              className="w-full sm:w-auto px-5 py-2 text-xs font-black rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center justify-center gap-1 active:scale-95 shadow-lg shadow-blue-600/25"
            >
              NEXT <ChevronRight size={14} className="stroke-[3]" />
            </button>
          ) : (
            <div className="w-full sm:w-auto px-5 py-2 text-xs font-black rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center gap-1 cursor-default animate-pulse">
              <Check size={14} className="stroke-[3]" /> COMPLETED
            </div>
          )}
        </div>

      </div>

      {/* Gamification widgets loaded once they finish all slides */}
      {isLastSlide && (
        <div className="space-y-6 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ChapterTips chapterId={chapterId} />

          {hasAssignment && (
            <div className="border-t border-slate-800/60 pt-6">
              <PracticeAssignment chapterId={chapterId} instructions={instructions} />
            </div>
          )}

          <div className="border-t border-slate-800/60 pt-6">
            <MarkCompleteButton chapterId={chapterId} hasAssignment={hasAssignment} />
          </div>

          <BookPagination />
        </div>
      )}
    </div>
  );
}
