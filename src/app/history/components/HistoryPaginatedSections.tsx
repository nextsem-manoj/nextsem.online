"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import AdSenseBanner from "@/components/AdSenseBanner";

interface Props {
  slides: React.ReactNode[];
  chapterId: string;
  nextChapterPath?: string;
  nextChapterTitle?: string;
}

export default function HistoryPaginatedSections({ slides, chapterId, nextChapterPath, nextChapterTitle }: Props) {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Check if this chapter is completed
    const saved = localStorage.getItem('nextsem_history_completed');
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
    const saved = localStorage.getItem('nextsem_history_completed');
    let parsed: Record<string, boolean> = {};
    if (saved) {
      try {
        parsed = JSON.parse(saved);
      } catch (e) {}
    }
    parsed[chapterId] = true;
    localStorage.setItem('nextsem_history_completed', JSON.stringify(parsed));
    setCompleted(true);

    // Add points
    const savedPoints = localStorage.getItem('nextsem_history_points');
    const currPoints = parseInt(savedPoints || "0") || 0;
    const newPoints = currPoints + 50;
    localStorage.setItem('nextsem_history_points', newPoints.toString());
  };

  const isLastSlide = activeIdx === slides.length - 1;
  const isEn = language === 'en';

  return (
    <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-6 select-none">
      
      {/* Mini Slide indicator & Bilingual Toggle */}
      <div className="flex justify-between items-center px-1">
        <span className="flex items-center gap-1 text-[10px] font-black uppercase text-slate-500">
          <BookOpen size={12} className="text-blue-500" />
          <span>{isEn ? `Section ${activeIdx + 1} of ${slides.length}` : `भाग ${activeIdx + 1} / ${slides.length}`}</span>
        </span>

        {/* Language selector toggle buttons */}
        <div className="flex bg-slate-900 border border-slate-850 p-[2px] rounded-lg shrink-0">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-wider rounded-md transition-all cursor-pointer ${
              isEn 
                ? "bg-purple-600 text-white shadow-sm" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            EN 🇬🇧
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-wider rounded-md transition-all cursor-pointer ${
              !isEn 
                ? "bg-purple-600 text-white shadow-sm" 
                : "text-slate-400 hover:text-white"
            }`}
          >
            हिंदी 🇮🇳
          </button>
        </div>
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
                {isEn ? "Mark Complete ✓" : "पूर्ण चिन्हित करें ✓"}
              </button>
            ) : (
              <div className="flex-1 py-3 text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center gap-1.5 cursor-default">
                <Check size={14} className="stroke-[3]" /> {isEn ? "Completed" : "पूर्ण हुआ"}
              </div>
            )
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 py-3 text-xs font-black uppercase tracking-widest text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
            >
              {isEn ? "Next" : "आगे"} <ChevronRight size={14} className="stroke-[3]" />
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
          <span className="text-2xl animate-bounce block">🏆</span>
          <h3 className="text-sm font-black text-white uppercase tracking-tight">
            {isEn ? "Theme Mastered!" : "विषय पर पूर्ण अधिकार!"}
          </h3>
          <p className="text-xs text-slate-400 font-bold leading-relaxed max-w-xs mx-auto">
            {isEn 
              ? "You have successfully completed this NCERT History section. Keep reading to discover more about our cultural roots!"
              : "आपने सफलतापूर्वक इस इतिहास पाठ को पूर्ण कर लिया है। भारतीय इतिहास के बारे में और जानने के लिए अध्ययन जारी रखें!"}
          </p>
          <div className="pt-2 flex flex-col gap-2">
            {nextChapterPath ? (
              <button
                onClick={() => router.push(`/history/book/${nextChapterPath}`)}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-black font-black text-xs uppercase tracking-widest rounded-2xl transition-all active:scale-95 shadow-md shadow-blue-500/10 cursor-pointer"
              >
                {isEn ? `Next: ${nextChapterTitle}` : `आगे: ${nextChapterTitle}`} →
              </button>
            ) : (
              <button
                onClick={() => router.push(`/history`)}
                className="w-full py-3 bg-slate-900 border border-slate-800 hover:border-purple-550/20 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all active:scale-95 cursor-pointer"
              >
                {isEn ? "Back to Syllabus List 🏆" : "पाठ्यक्रम सूची पर वापस जाएं 🏆"}
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
