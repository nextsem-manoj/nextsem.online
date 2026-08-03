"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, BookOpen, BookMarked, Flame } from "lucide-react";
import { LastLesson } from "@/lib/userProgressSync";

interface ResumeLessonBannerProps {
  lastLesson: LastLesson;
  streak?: number;
}

const subjectIcons: Record<string, React.ReactNode> = {
  cli: <Terminal size={18} className="text-emerald-400" />,
  html: <BookOpen size={18} className="text-orange-400" />,
  git: <BookMarked size={18} className="text-violet-400" />,
};

const subjectLabels: Record<string, string> = {
  cli: "Windows CMD / CLI",
  html: "HTML5",
  git: "Git & GitHub",
};

const subjectColors: Record<string, string> = {
  cli: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
  html: "from-orange-500/20 to-amber-500/10 border-orange-500/30",
  git: "from-violet-500/20 to-purple-500/10 border-violet-500/30",
};

export default function ResumeLessonBanner({ lastLesson, streak = 0 }: ResumeLessonBannerProps) {
  const icon = subjectIcons[lastLesson.subject] || <BookOpen size={18} />;
  const label = subjectLabels[lastLesson.subject] || lastLesson.subject.toUpperCase();
  const colorClass = subjectColors[lastLesson.subject] || "from-slate-500/20 to-slate-400/10 border-slate-500/30";

  return (
    <div className={`relative bg-gradient-to-r ${colorClass} border rounded-2xl p-4 md:p-5 overflow-hidden group`}>
      {/* Glow decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {/* Subject icon */}
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center">
            {icon}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">{label}</span>
              {streak > 0 && (
                <span className="flex items-center gap-0.5 text-[10px] font-bold text-amber-400">
                  <Flame size={10} className="fill-amber-400" /> {streak} day streak
                </span>
              )}
            </div>
            <p className="text-sm font-bold text-white truncate">
              Continue: <span className="text-emerald-300">Lesson {lastLesson.lessonNumber}</span>
            </p>
            <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
              {lastLesson.title.replace(/`/g, "")}
            </p>
          </div>
        </div>

        <Link
          href={`/${lastLesson.subject}/${lastLesson.slug}`}
          className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl 
            bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-extrabold 
            transition-all shadow-lg shadow-emerald-900/40 group-hover:scale-105 active:scale-95"
        >
          Continue
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
