"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { 
  GraduationCap, 
  BookOpen, 
  Code2, 
  Laptop, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Flame, 
  Compass,
  ChevronRight
} from "lucide-react";
import { useStudentProgress } from "@/context/StudentProgressContext";

export type LearningPathType = "schooling" | "college" | "skills" | null;

interface PathOption {
  id: "schooling" | "college" | "skills";
  emoji: string;
  badge: string;
  title: string;
  subtitle: string;
  targetClasses: string;
  colorBorder: string;
  colorBg: string;
  colorText: string;
  colorGlow: string;
  redirectUrl: string;
  highlights: string[];
}

const PATH_OPTIONS: PathOption[] = [
  {
    id: "schooling",
    emoji: "🎒",
    badge: "KG to Class 12th",
    title: "Schooling Hub",
    subtitle: "Complete NCERT Class 1–12 education, bilingual notes & all stream specializations.",
    targetClasses: "Primary, Middle (6-8), Secondary (9-10) & Senior Secondary (11-12)",
    colorBorder: "border-amber-500/40 hover:border-amber-400",
    colorBg: "bg-amber-500/10 hover:bg-amber-500/15",
    colorText: "text-amber-400",
    colorGlow: "shadow-amber-500/10",
    redirectUrl: "/school",
    highlights: [
      "NCERT Textbooks & Solutions (Class 1 to 12)",
      "Class 11 & 12: Science, Commerce & Arts streams",
      "Bilingual Notes (English & हिंदी) + Daily Quizzes",
      "Middle School Doubt Diagnostic Studio"
    ]
  },
  {
    id: "college",
    emoji: "🎓",
    badge: "Degrees & Universities",
    title: "College Education",
    subtitle: "Computer Science & IT degree courses, university curriculum and theory units.",
    targetClasses: "BCA, MCA, B.Tech CSE & B.Sc Computer Science",
    colorBorder: "border-blue-500/40 hover:border-blue-400",
    colorBg: "bg-blue-500/10 hover:bg-blue-500/15",
    colorText: "text-blue-400",
    colorGlow: "shadow-blue-500/10",
    redirectUrl: "/bca",
    highlights: [
      "BCA Semesters 1 to 6 complete academic notes",
      "C, C++, Data Structures, DBMS, Java & OS units",
      "Official University Question Banks & Solved Papers",
      "Exam Preparation Guides & Chapter Summaries"
    ]
  },
  {
    id: "skills",
    emoji: "💻",
    badge: "Job-Ready Placement",
    title: "Skill-Based / Coding",
    subtitle: "Practical programming, hands-on VS Code labs, automated GitHub test verification.",
    targetClasses: "Full-Stack Web Dev, CLI Automation & Software Placement",
    colorBorder: "border-emerald-500/40 hover:border-emerald-400",
    colorBg: "bg-emerald-500/10 hover:bg-emerald-500/15",
    colorText: "text-emerald-400",
    colorGlow: "shadow-emerald-500/10",
    redirectUrl: "/bca/practical",
    highlights: [
      "50-Day Coding Practical Labs with real VS Code specs",
      "Automated GitHub API Commit & Repo Verifier",
      "Full-Stack MERN, React 19, Node.js & Windows CLI",
      "Daily Technical Viva simulation & certification"
    ]
  }
];

export default function LearningPathOnboardingModal() {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useStudentProgress();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState<"schooling" | "college" | "skills" | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if user already picked a learning path
    const storedPath = localStorage.getItem("nextsem_learning_path");
    
    // Automatically trigger on first launch if not yet selected
    if (!storedPath) {
      // Small timeout for smooth initial render
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setSelectedPath(storedPath as any);
    }

    // Global listener to re-open modal anytime user clicks "Switch Path" in header
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open_learning_path_modal", handleOpen);

    return () => {
      window.removeEventListener("open_learning_path_modal", handleOpen);
    };
  }, []);

  const handleSelectPath = (pathId: "schooling" | "college" | "skills", redirectUrl: string) => {
    setSelectedPath(pathId);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_learning_path", pathId);
      window.dispatchEvent(new CustomEvent("nextsem_learning_path_changed", { detail: pathId }));
    }

    setIsOpen(false);
    // Navigate smoothly to target portal
    router.push(redirectUrl);
  };

  const handleDismiss = () => {
    if (typeof window !== "undefined" && !localStorage.getItem("nextsem_learning_path")) {
      localStorage.setItem("nextsem_learning_path", "skills");
    }
    setIsOpen(false);
  };

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0d0e12] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background effects */}
        <div className="absolute top-0 left-1/4 w-72 h-40 bg-emerald-500/10 blur-[80px] pointer-events-none rounded-full" />
        <div className="absolute top-0 right-1/4 w-72 h-40 bg-blue-500/10 blur-[80px] pointer-events-none rounded-full" />

        {/* Modal Top Header */}
        <div className="relative px-6 pt-6 pb-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl">
              🎯
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                <Sparkles size={11} />
                <span>Nextsem Academy Personalization</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                Choose Your Learning Goal
              </h2>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            title="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Subtitle instructions */}
        <div className="px-6 py-3 bg-neutral-900/50 border-b border-neutral-800/60 text-xs sm:text-sm text-neutral-300">
          Aap kya padhna chahte hain? Select your primary pathway to customize your dashboard. <span className="text-slate-400">(Aap ise baad me kabhi bhi switch kar sakte hain!)</span>
        </div>

        {/* Main 3 Options Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {PATH_OPTIONS.map((opt) => {
            const isCurrent = selectedPath === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => handleSelectPath(opt.id, opt.redirectUrl)}
                className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent 
                    ? `${opt.colorBorder} ${opt.colorBg} ring-2 ring-emerald-500/50` 
                    : `border-neutral-800 bg-[#12141a] hover:${opt.colorBorder} hover:${opt.colorBg}`
                } shadow-xl hover:-translate-y-1`}
              >
                <div>
                  {/* Top Emoji & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl p-2 rounded-xl bg-black/40 border border-white/5 inline-block">
                      {opt.emoji}
                    </span>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border bg-black/50 ${opt.colorText} border-white/10`}>
                      {opt.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                    <span>{opt.title}</span>
                    <ChevronRight size={16} className="text-neutral-500 group-hover:translate-x-1 transition-transform" />
                  </h3>

                  <p className="text-xs text-neutral-300 font-medium leading-relaxed mt-2 mb-3">
                    {opt.subtitle}
                  </p>

                  <div className="text-[11px] font-semibold text-slate-400 bg-black/30 p-2 rounded-lg border border-white/5 mb-3">
                    🎯 <strong>Target:</strong> {opt.targetClasses}
                  </div>

                  {/* Key Highlights */}
                  <ul className="space-y-1.5 text-[11px] text-neutral-300 pt-1">
                    {opt.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 size={13} className={`${opt.colorText} shrink-0 mt-0.5`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-5 mt-4 border-t border-white/10">
                  <button
                    className={`w-full py-2.5 px-4 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
                      isCurrent
                        ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                        : "bg-neutral-800 hover:bg-neutral-700 text-white group-hover:bg-white group-hover:text-black"
                    }`}
                  >
                    <span>Enter {opt.title}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 bg-black/60 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Sparkles size={14} className="text-emerald-400 shrink-0" />
            <span>Nextsem Academy provides 100% free education with zero paywalls.</span>
          </div>

          <button
            onClick={handleDismiss}
            className="text-xs text-neutral-400 hover:text-white underline transition-colors"
          >
            Browse all sections without preference »
          </button>
        </div>
      </div>
    </div>
  );
}
