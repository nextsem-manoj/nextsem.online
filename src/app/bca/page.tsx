import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  Sparkles, 
  Flame, 
  ArrowRight,
  BookOpen
} from "lucide-react";
import CollegeHubClient from "@/components/college/CollegeHubClient";

export const metadata: Metadata = {
  title: "College Computer Science & IT Hub — BCA, MCA & B.Tech CSE Syllabus & 50-Day Lab | Nextsem Academy",
  description: "Complete free college computer education portal for BCA, MCA, and B.Tech CSE. Full 6-semester theory notes, university codes (BCS-111, MCS-011, Java, DBMS), and 50-day hands-on VS Code & GitHub practical labs.",
  alternates: {
    canonical: "https://nextsem.online/bca"
  },
  openGraph: {
    title: "College Computer Science & IT Hub | Nextsem Academy",
    description: "Comprehensive university degree curriculum for BCA, MCA, and B.Tech CSE with 6 full semesters of course notes and 50-Day Coding Lab.",
    url: "https://nextsem.online/bca",
    type: "website"
  }
};

export default function BcaGatewayPage() {
  return (
    <div className="min-h-screen bg-[#07080b] text-white selection:bg-emerald-500 selection:text-black">
      {/* ── BREADCRUMB NAVIGATION TRAIL ── */}
      <div className="border-b border-neutral-800 bg-[#0d0e12] py-3 px-4 sm:px-8">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-400 overflow-x-auto">
          <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1 shrink-0">
            <span>🏠 Home</span>
          </Link>
          <span className="text-slate-600">❯</span>
          <span className="text-emerald-400 font-bold shrink-0">🎓 College Hub (BCA, MCA &amp; B.Tech CSE)</span>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12">
        {/* ── HERO BANNER ── */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
            <Sparkles size={14} className="text-emerald-400" />
            <span>Accredited College Degree &amp; Software Engineering Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            College Degree &amp; <span className="text-emerald-400">Computer Science Hub</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Complete curriculum across all <strong>6 Semesters</strong> for <strong>BCA, MCA, and B.Tech CSE</strong>. Master theoretical computer foundations, core algorithms, database architecture, and verified real-world practical software development in <strong>Visual Studio Code</strong> and <strong>GitHub</strong>.
          </p>
        </div>

        {/* ── INTERACTIVE COLLEGE DEGREE CLIENT (BCA / MCA / B.TECH CSE CURRICULUM) ── */}
        <CollegeHubClient />

        {/* ── CROSS-NAVIGATION BANNER (SCHOOLING HUB & CODING LABS) ── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <BookOpen size={20} className="text-amber-400" />
              <span>Looking for Schooling (KG to 12th) or Coding Sandbox?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Explore NCERT K-12 notes, Middle School Doubt Studio, or write code in our browser-based IDE Playground.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/school"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs transition-colors shadow-lg shadow-amber-500/20"
            >
              🎒 Schooling Hub (KG-12)
            </Link>
            <Link
              href="/playground"
              className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs border border-neutral-700 transition-colors"
            >
              💻 Code Sandbox
            </Link>
          </div>
        </div>

        {/* Footer Attribution */}
        <div className="text-center text-xs text-slate-500 pt-8 border-t border-neutral-800">
          Curriculum &amp; Practical Systems Designed by <strong className="text-slate-300">Er. Manoj Kumar</strong> • Nextsem Academy
        </div>
      </main>
    </div>
  );
}
