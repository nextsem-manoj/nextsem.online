"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import FullStackRoadmap from '@/components/FullStackRoadmap';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ArrowLeft, BookOpen, Layers, Terminal, Rocket, CheckCircle2, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { cliLessons } from '@/data/cliLessonsData';
import { htmlLessons } from '@/data/htmlLessonsData';
import ResumeLessonBanner from '@/components/ResumeLessonBanner';
import ShareButton from '@/components/ShareButton';
import { getLastLessonLocal } from '@/lib/userProgressSync';
import { LastLesson } from '@/lib/userProgressSync';

export default function CurriculumClient() {
  const { completedChapters, totalCompleted } = useProgress();
  const [lastLesson, setLastLesson] = useState<LastLesson | null>(null);

  const TARGET_TOTAL = 300;
  const completedCliCount = cliLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;
  const completedHtmlCount = htmlLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id]).length;
  const overallPercent = Math.min(100, Math.round((totalCompleted / TARGET_TOTAL) * 100));

  useEffect(() => {
    const ll = getLastLessonLocal();
    if (ll) setLastLesson(ll);
  }, []);

  return (
    <div className="min-h-screen bg-[#060d1a] text-white flex flex-col font-sans selection:bg-[#04AA6D]/30">
      <Header />

      {/* ── HERO BANNER ── */}
      <section className="py-10 px-4 md:px-6 max-w-[1200px] mx-auto w-full space-y-5">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#04AA6D] text-xs font-black uppercase tracking-widest">
            <Rocket size={14} />
            <span>Full Stack Roadmap & Subject Tree</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Complete Free Dev Curriculum
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto font-medium leading-relaxed">
            Master full stack software development from Windows CLI and HTML basics up to React, Node.js REST APIs, MongoDB, and production deployment — completely free with step-by-step interactive simulators.
          </p>
        </div>

        {/* ── PROGRESS BANNER (Shown for returning users with progress) ── */}
        {totalCompleted > 0 ? (
          <div className="relative bg-[#0a1628]/80 border border-slate-700/60 rounded-2xl p-5 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">Your Progress</span>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  <span className="text-white font-extrabold">{totalCompleted}</span> / {TARGET_TOTAL} lessons · {overallPercent}% complete
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-700"
                  style={{ width: `${Math.max(overallPercent, 1)}%` }}
                />
              </div>

              {/* Subject pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "CMD/CLI", count: completedCliCount, total: cliLessons.length, href: "/cli", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
                  { label: "HTML5", count: completedHtmlCount, total: htmlLessons.length, href: "/html", color: "text-orange-400 border-orange-500/30 bg-orange-500/10" },
                  { label: "CSS3", count: 0, total: 100, href: "/html", color: "text-sky-400 border-sky-500/30 bg-sky-500/10" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-[11px] font-bold transition-all hover:scale-105 ${s.color}`}
                  >
                    <CheckCircle2 size={11} />
                    {s.label}: {s.count}/{s.total}
                  </Link>
                ))}
              </div>

              {/* Resume lesson or start CTA */}
              {lastLesson ? (
                <ResumeLessonBanner lastLesson={lastLesson} />
              ) : (
                <Link
                  href="/cli"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#04AA6D]/10 border border-[#04AA6D]/30 text-[#04AA6D] text-sm font-bold hover:bg-[#04AA6D]/20 transition-all"
                >
                  <Target size={15} />
                  Start with Lesson 1 — Windows CMD Basics
                  <ArrowRight size={13} />
                </Link>
              )}
            </div>
          </div>
        ) : (
          /* ── START JOURNEY CTA (For Guest / New Visitors) ── */
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#0a1628] via-[#0d1f38] to-[#0a1628] border border-[#04AA6D]/30 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base font-extrabold text-white flex items-center justify-center sm:justify-start gap-2">
                <Target size={16} className="text-[#04AA6D]" />
                <span>Ready to start your coding journey?</span>
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                No sign-up required to start. Try 300+ free interactive lessons with instant live terminal output.
              </p>
            </div>
            <Link
              href="/cli"
              className="px-5 py-2.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-[#04AA6D]/20 shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Start Lesson 1</span>
              <ArrowRight size={14} className="stroke-[2.5]" />
            </Link>
          </div>
        )}
      </section>

      {/* ── ROADMAP CONTAINER ── */}
      <main className="flex-1 max-w-[1300px] w-full mx-auto px-2 md:px-6 pb-16">
        <div className="bg-[#0a1120] border border-slate-800/80 rounded-3xl p-4 md:p-8 shadow-2xl">
          <FullStackRoadmap />
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#080e1a] border-t border-slate-800/80 py-8 px-4 text-center text-xs text-slate-500 font-medium">
        <div className="max-w-[1200px] mx-auto space-y-3">
          <p className="text-slate-400 font-bold uppercase tracking-wider">
            Nextsem Academy • Complete Free Dev Curriculum
          </p>
          <p className="text-[11px]">
            Designed for self-taught developers, college students, and computer science aspirants worldwide.
          </p>
        </div>
      </footer>

    </div>
  );
}
