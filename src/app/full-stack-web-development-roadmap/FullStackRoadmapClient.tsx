"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';
import FullStackRoadmap from '@/components/FullStackRoadmap';
import ResumeLessonBanner from '@/components/ResumeLessonBanner';
import { getLastLessonLocal, LastLesson } from '@/lib/userProgressSync';
import { cliLessons } from '@/data/cliLessonsData';
import { htmlLessons } from '@/data/htmlLessonsData';
import { cssLessons } from '@/data/cssLessonsData';
import {
  Rocket,
  TrendingUp,
  CheckCircle2,
  Target,
  ArrowLeft,
  BookOpen,
  Terminal,
  Code2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Compass,
  Palette
} from 'lucide-react';

export default function FullStackRoadmapClient() {
  const { completedChapters, totalCompleted } = useProgress();
  const [lastLesson, setLastLesson] = useState<LastLesson | null>(null);
  const [mounted, setMounted] = useState(false);

  const TARGET_TOTAL = 300;
  const overallPercent = Math.min(100, Math.round((totalCompleted / TARGET_TOTAL) * 100));

  const completedCliCount = cliLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;
  const completedHtmlCount = htmlLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;
  const completedCssCount = cssLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;

  useEffect(() => {
    setMounted(true);
    const ll = getLastLessonLocal();
    if (ll) setLastLesson(ll);
  }, []);

  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans selection:bg-[#04AA6D]/30">
      
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-[#0b0c10]/95 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/course"
            className="p-2 rounded-xl bg-[#17181c] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-extrabold"
          >
            <ArrowLeft size={16} />
            <span>Course Dashboard</span>
          </Link>
          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#04AA6D]/20 border border-[#04AA6D] flex items-center justify-center text-[#04AA6D] font-black text-xs">
              NS
            </div>
            <span className="text-white font-extrabold text-sm tracking-tight hidden sm:inline">
              Nextsem Academy
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/cli"
            className="px-3.5 py-1.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
          >
            <Terminal size={14} />
            <span>Windows CMD »</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 md:px-8 py-10 space-y-10">
        
        {/* ── HERO BANNER ── */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#04AA6D]/15 border border-[#04AA6D]/30 text-[#04AA6D] text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Official Developer Career Path 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
            Full Stack Web Development Roadmap
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Follow our structured, level-by-level status roadmap from 🪟 Windows CMD CLI and HTML5 basics up to React, Node.js REST APIs, MongoDB, and production deployment.
          </p>
        </section>

        {/* ── RETURNING USER PROGRESS & ACTIVE LESSON BANNER ── */}
        {mounted && (totalCompleted > 0 || lastLesson) && (
          <section className="bg-[#0b0c10] border border-emerald-500/30 rounded-3xl p-6 shadow-2xl space-y-6 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-[#04AA6D] uppercase tracking-widest flex items-center gap-1.5">
                  <TrendingUp size={12} />
                  <span>Your Live Progress Status</span>
                </span>
                <h2 className="text-xl font-bold text-white uppercase tracking-tight">
                  Learning Journey Breakdown
                </h2>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-[#17181c] border border-slate-800 px-3 py-1.5 rounded-xl">
                <strong className="text-[#04AA6D] font-extrabold text-sm">{totalCompleted}</strong> / {TARGET_TOTAL} Lessons Completed ({overallPercent}%)
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="h-3 bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#04AA6D] to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(overallPercent, 1)}%` }}
                />
              </div>
            </div>

            {/* Subject Status Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <Link
                href="/cli"
                className="p-3 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-xl flex items-center justify-between transition-colors group"
              >
                <div className="space-y-0.5 min-w-0 pr-1">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Windows CMD</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#04AA6D] truncate">{completedCliCount} / {cliLessons.length} Done</div>
                </div>
                <CheckCircle2 size={16} className="text-[#04AA6D] shrink-0" />
              </Link>

              <Link
                href="/html"
                className="p-3 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-xl flex items-center justify-between transition-colors group"
              >
                <div className="space-y-0.5 min-w-0 pr-1">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">HTML5 Web</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#04AA6D] truncate">{completedHtmlCount} / {htmlLessons.length} Done</div>
                </div>
                <CheckCircle2 size={16} className="text-[#04AA6D] shrink-0" />
              </Link>

              <Link
                href="/css"
                className="p-3 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-xl flex items-center justify-between transition-colors group"
              >
                <div className="space-y-0.5 min-w-0 pr-1">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">CSS3 Modern</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#04AA6D] truncate">{completedCssCount} / {cssLessons.length} Done</div>
                </div>
                <CheckCircle2 size={16} className="text-[#04AA6D] shrink-0" />
              </Link>

              <Link
                href="/course"
                className="p-3 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-xl flex items-center justify-between transition-colors group"
              >
                <div className="space-y-0.5 min-w-0 pr-1">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Full Syllabus</div>
                  <div className="text-xs font-bold text-white group-hover:text-[#04AA6D] truncate">9 Modules</div>
                </div>
                <ChevronRight size={16} className="text-slate-500 group-hover:text-[#04AA6D] shrink-0" />
              </Link>
            </div>

            {/* Resume Lesson Banner if active */}
            {lastLesson && (
              <div className="pt-2">
                <ResumeLessonBanner lastLesson={lastLesson} />
              </div>
            )}
          </section>
        )}

        {/* ── INTERACTIVE ROADMAP MATRIX ── */}
        <section className="bg-[#0b0c10] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-[#04AA6D] uppercase tracking-widest flex items-center gap-1.5">
                <Compass size={14} />
                <span>Level-by-Level Syllabus Tree</span>
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                Complete Career Path Matrix
              </h2>
            </div>
            <Link
              href="/cli"
              className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>Start Interactive Lessons »</span>
            </Link>
          </div>

          <FullStackRoadmap />
        </section>

        {/* ── ADSENSE COMPLIANCE & LEGAL HUB ── */}
        <section className="bg-[#0b0c10] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#04AA6D] bg-[#04AA6D]/15 border border-[#04AA6D]/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                <ShieldCheck size={12} />
                <span>AdSense Verified Policy Directory</span>
              </span>
              <h3 className="text-xl font-bold text-white">
                Official Platform Policies & Sitemap Links
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
            <Link href="/privacy" className="p-3 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-xl transition-colors">
              <div className="text-base mb-1">📜</div>
              <div className="text-xs font-bold text-white">Privacy Policy</div>
            </Link>
            <Link href="/terms" className="p-3 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-xl transition-colors">
              <div className="text-base mb-1">⚖️</div>
              <div className="text-xs font-bold text-white">Terms of Service</div>
            </Link>
            <Link href="/contact" className="p-3 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-xl transition-colors">
              <div className="text-base mb-1">📞</div>
              <div className="text-xs font-bold text-white">Contact Support</div>
            </Link>
            <Link href="/about" className="p-3 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-xl transition-colors">
              <div className="text-base mb-1">ℹ️</div>
              <div className="text-xs font-bold text-white">About Us</div>
            </Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#17181c] border border-slate-800 hover:border-[#04AA6D] rounded-xl transition-colors col-span-2 sm:col-span-1">
              <div className="text-base mb-1">🗺️</div>
              <div className="text-xs font-bold text-[#04AA6D]">XML Sitemap</div>
            </a>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0b0c10] border-t border-slate-800 py-8 px-4 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto space-y-3">
          <p className="font-bold text-white uppercase tracking-wider">
            Nextsem Academy — Full Stack Web Development Roadmap 2026
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link href="/privacy" className="text-[#04AA6D] hover:underline">📜 Privacy Policy</Link>
            <Link href="/terms" className="text-[#04AA6D] hover:underline">⚖️ Terms of Service</Link>
            <Link href="/contact" className="text-[#04AA6D] hover:underline">📞 Contact Support</Link>
            <Link href="/about" className="text-[#04AA6D] hover:underline">ℹ️ About Us</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-[#04AA6D] hover:underline font-bold">🗺️ XML Sitemap</a>
          </div>
          <p className="text-[10px] text-slate-500 pt-2">
            © {new Date().getFullYear()} Nextsem Academy. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
