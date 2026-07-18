"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, BookOpenCheck } from 'lucide-react';
import { historyPhases } from './courseData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import AdSenseBanner from '@/components/AdSenseBanner';

function HistoryDashboardClient() {
  const { language, setLanguage } = useLanguage();
  const [completedChapters, setCompletedChapters] = useState<Record<string, boolean>>({});
  const [points, setPoints] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load progress
    const saved = localStorage.getItem('nextsem_history_completed');
    if (saved) {
      try {
        setCompletedChapters(JSON.parse(saved));
      } catch (e) {}
    }
    const savedPoints = localStorage.getItem('nextsem_history_points');
    if (savedPoints) {
      setPoints(parseInt(savedPoints) || 0);
    }
  }, []);

  const toggleChapterComplete = (path: string) => {
    const updated = { ...completedChapters, [path]: !completedChapters[path] };
    setCompletedChapters(updated);
    localStorage.setItem('nextsem_history_completed', JSON.stringify(updated));

    // Update points (+50 per completed chapter)
    const newPoints = Object.values(updated).filter(Boolean).length * 50;
    setPoints(newPoints);
    localStorage.setItem('nextsem_history_points', newPoints.toString());
  };

  const currentPhase = historyPhases[0];
  const totalChapters = currentPhase.topics.length;
  const completedCount = Object.values(completedChapters).filter(Boolean).length;
  const percentComplete = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  const isEn = language === 'en';

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-[#07070c] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-purple-500 border-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#07070c] text-white flex flex-col justify-between font-sans selection:bg-purple-500/30 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>{isEn ? "Back to Hub" : "मुख्य हब"}</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Language toggle selector */}
          <div className="flex bg-slate-900 border border-slate-850 p-[2px] rounded-lg">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                isEn ? "bg-purple-650 text-white shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              EN 🇬🇧
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                !isEn ? "bg-purple-650 text-white shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              हिंदी 🇮🇳
            </button>
          </div>

          <div className="flex items-center gap-2 bg-purple-950/40 border border-purple-550/20 px-4 py-1.5 rounded-full">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-purple-300">
              {points} {isEn ? "HIST Points" : "इतिहास अंक"}
            </span>
          </div>
        </div>
      </header>

      {/* Main Contents container */}
      <main className="flex-1 w-full max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 py-8 space-y-6 select-none">
        
        {/* Title module block */}
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-550/20 text-[#c084fc] text-[9px] font-black uppercase tracking-widest rounded-full">
            {isEn ? "Class XII Curriculum" : "कक्षा १२ पाठ्यक्रम"}
          </span>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
            {isEn ? "Theme Four: Thinkers, Beliefs & Buildings" : "विषय चार: विचारक, विश्वास और इमारतें"}
          </h1>
          <p className="text-xs text-slate-400 font-bold max-w-sm mx-auto leading-relaxed">
            {isEn 
              ? "Cultural Developments (c. 600 BCE - 600 CE). Learn about Buddhism, Jainism, Sanchi Stupa, Vedic traditions, and early temples."
              : "सांस्कृतिक विकास (लगभग 600 ई.पू. - 600 ईस्वी)। बौद्ध धर्म, जैन धर्म, सांची स्तूप, वैदिक परंपराओं और प्रारंभिक मंदिरों का अध्ययन करें।"}
          </p>
        </div>

        {/* Ad 1 (Top) */}
        <div className="shrink-0">
          <AdSenseBanner />
        </div>

        {/* Course Progress Section */}
        <div className="bg-[#111116]/80 border border-white/5 rounded-3xl p-5 space-y-4 shadow-xl">
          <div className="flex justify-between items-center text-xs font-black uppercase">
            <span className="text-slate-400">{isEn ? "Course Syllabus Progress" : "पाठ्यक्रम प्रगति"}</span>
            <span className="text-[#c084fc]">{percentComplete}%</span>
          </div>
          <div className="w-full bg-slate-900 border border-slate-850 h-2.5 rounded-full overflow-hidden p-[1px]">
            <div 
              className="bg-gradient-to-r from-purple-500 to-fuchsia-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-slate-500 justify-center">
            <BookOpenCheck size={12} className="text-purple-500" />
            <span>
              {isEn 
                ? `${completedCount} of ${totalChapters} Chapters Completed`
                : `${completedCount} / ${totalChapters} अध्याय पूर्ण हुए`}
            </span>
          </div>
        </div>

        {/* Chapters list layout */}
        <div className="space-y-3">
          {currentPhase.topics.map((topic, index) => {
            const isCompleted = completedChapters[topic.path] || false;
            
            return (
              <React.Fragment key={topic.path}>
                {/* Ad 2 (Middle) placed after Chapter 5 */}
                {index === 5 && (
                  <div className="py-2 shrink-0">
                    <AdSenseBanner />
                  </div>
                )}
                
                <div 
                  className={`border rounded-2xl p-4 transition-all duration-300 flex items-center justify-between gap-4 ${
                    isCompleted 
                      ? "border-purple-550/20 bg-purple-950/5 shadow-md shadow-purple-950/5" 
                      : "border-slate-850 bg-slate-900/20 hover:border-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      onClick={() => toggleChapterComplete(topic.path)}
                      className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isCompleted
                          ? "bg-purple-550 border-purple-550 text-white"
                          : "border-slate-700 bg-transparent hover:border-purple-500 text-transparent"
                      }`}
                    >
                      ✓
                    </button>
                    <div className="min-w-0 text-left">
                      <span className="block text-[8px] font-black uppercase text-slate-500">
                        {isEn ? `NCERT Topic ${index + 1}` : `विषय भाग ${index + 1}`}
                      </span>
                      <Link 
                        href={`/history/book/${topic.path}`}
                        className="text-xs font-bold text-white hover:text-purple-400 transition-colors truncate block"
                      >
                        {topic.label}
                      </Link>
                    </div>
                  </div>

                  <Link 
                    href={`/history/book/${topic.path}`}
                    className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-purple-550 text-white text-[9px] font-black uppercase tracking-wider rounded-xl transition-all"
                  >
                    {isEn ? "Study" : "अध्ययन"}
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
      <footer className="w-full py-6 text-center text-[10px] text-slate-700 border-t border-white/5 select-none shrink-0 mt-8 font-mono">
        © 2026 Nextsem Academy · NCERT History Class XII Theme 4 Study Guide
      </footer>
    </div>
  );
}

export default function HistoryDashboard() {
  return (
    <LanguageProvider>
      <HistoryDashboardClient />
    </LanguageProvider>
  );
}
