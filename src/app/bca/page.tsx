"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, BookOpen, GraduationCap, Trophy, Sparkles } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { bcaSemesters } from '@/data/bcaCoursesData';
import AdSenseBanner from '@/components/AdSenseBanner';

export default function BcaDashboard() {
  const router = useRouter();
  const { completedChapters } = useProgress();
  
  const [mounted, setMounted] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("guest");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Get active user email
    const savedUser = localStorage.getItem('nextsem_user');
    let email = "guest";
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        email = parsed.email || "guest";
      } catch (e) {}
    }
    setUserEmail(email);

    // Load BCA points
    const savedPoints = localStorage.getItem(`nextsem_bca_points_${email}`);
    if (savedPoints) {
      setPoints(parseInt(savedPoints) || 0);
    }
  }, []);

  // Helpers to calculate progress
  const getSemesterProgress = (semId: number) => {
    const sem = bcaSemesters.find(s => s.id === semId);
    if (!sem) return { read: 0, total: 0, pct: 0 };
    
    let totalUnits = 0;
    let readUnits = 0;

    sem.subjects.forEach(sub => {
      sub.blocks.forEach(block => {
        block.units.forEach(unit => {
          totalUnits++;
          const progressKey = `bca_unit:${block.path}/${unit.fileName}`;
          if (completedChapters[progressKey]) {
            readUnits++;
          }
        });
      });
    });

    return {
      read: readUnits,
      total: totalUnits,
      pct: totalUnits > 0 ? Math.round((readUnits / totalUnits) * 100) : 0
    };
  };

  const getOverallProgress = () => {
    let totalUnits = 0;
    let readUnits = 0;

    bcaSemesters.forEach(sem => {
      sem.subjects.forEach(sub => {
        sub.blocks.forEach(block => {
          block.units.forEach(unit => {
            totalUnits++;
            const progressKey = `bca_unit:${block.path}/${unit.fileName}`;
            if (completedChapters[progressKey]) {
              readUnits++;
            }
          });
        });
      });
    });

    return {
      read: readUnits,
      total: totalUnits,
      pct: totalUnits > 0 ? Math.round((readUnits / totalUnits) * 100) : 0
    };
  };

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-emerald-500 border-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  const overall = getOverallProgress();

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30 relative">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to Hub</span>
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
        
        {/* Banner Section */}
        <section className="text-center md:text-left md:flex md:items-center md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-3">
              <GraduationCap size={12} />
              IGNOU BCA Revised Syllabus
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none mb-3">
              BCA Study <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Companion</span>
            </h1>
            <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
              Access structured textbook units, interactive micro-architecture simulators, and progress trackers. Pick up exactly where you left off. 
              You can also refer to the official syllabus materials on the <a href="https://egyankosh.ac.in/handle/123456789/106391" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-bold underline">eGyanKosh IGNOU Portal</a>.
            </p>
            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <Link
                href="/bca/semmy-ai"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-500 hover:to-violet-600 border border-indigo-500/40 text-white font-black text-[11px] uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-indigo-900/40 hover:-translate-y-0.5"
              >
                <Sparkles size={13} />
                Train Semmy AI
              </Link>
              <span className="text-[10px] text-slate-600 font-medium">Your AI study companion — teach it new concepts!</span>
            </div>
          </div>

          {/* Quick stats panel */}
          <div className="mt-6 md:mt-0 bg-[#121217]/95 border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center shrink-0 w-full md:w-64">
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest block mb-1">Total Progress</span>
            <div className="text-3xl font-black text-[#39D353]">{overall.pct}%</div>
            <span className="text-[10px] text-slate-400 mt-1 font-bold">{overall.read} of {overall.total} units read</span>
            <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${overall.pct}%` }} />
            </div>
          </div>
        </section>

        <div className="mb-6">
          <AdSenseBanner />
        </div>

        {/* Semesters Grid */}
        <section className="mb-10">
          <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Trophy size={18} className="text-amber-400" />
            Select Semester
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bcaSemesters.map((sem) => {
              const semProg = getSemesterProgress(sem.id);
              const isCompleted = semProg.pct === 100;
              
              // Colors based on semesters to match high-end dark look
              const colors = [
                "from-emerald-500/20 to-teal-500/10 hover:border-emerald-500/30",
                "from-blue-500/20 to-indigo-500/10 hover:border-blue-500/30",
                "from-purple-500/20 to-pink-500/10 hover:border-purple-500/30",
                "from-orange-500/20 to-amber-500/10 hover:border-orange-500/30",
                "from-cyan-500/20 to-blue-500/10 hover:border-cyan-500/30",
                "from-pink-500/20 to-rose-500/10 hover:border-pink-500/30"
              ];
              const borderStyles = colors[(sem.id - 1) % colors.length];

              return (
                <div
                  key={sem.id}
                  onClick={() => router.push(`/bca/${sem.id}`)}
                  className={`bg-gradient-to-br ${borderStyles} border border-white/5 rounded-[28px] p-6 cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-lg min-h-[160px]`}
                >
                  <div className="text-left">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl font-black text-white/20 select-none group-hover:text-white/40 transition-colors">
                        0{sem.id}
                      </span>
                      {isCompleted && (
                        <span className="text-[9px] font-black text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/20 px-2 py-0.5 rounded">
                          ✓ Complete
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-black text-white leading-tight group-hover:text-emerald-300 transition-colors">
                      {sem.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-bold mt-1">
                      {sem.subjects.length} subjects · {semProg.total} unit files
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-[10px] font-black text-slate-400 mb-1.5">
                      <span>Progress</span>
                      <span>{semProg.pct}%</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-400 rounded-full transition-all duration-500" 
                        style={{ width: `${semProg.pct}%` }} 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="w-full py-6 text-center text-[10px] text-slate-600 border-t border-white/5 select-none mt-auto flex flex-col items-center justify-center gap-2">
        <div>© 2026 Nextsem Academy · IGNOU BCA Revised Syllabus Companion</div>
        <div className="flex flex-wrap justify-center gap-3 text-slate-500 font-bold uppercase tracking-wider text-[9px]">
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <span>·</span>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
