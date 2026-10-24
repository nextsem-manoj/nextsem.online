import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Terminal, Code2, GitBranch, Laptop, 
  CheckCircle2, ArrowRight, Sparkles, BookOpen, 
  ShieldCheck, Award, Flame, Play
} from "lucide-react";

export const metadata: Metadata = {
  title: "BCA Practical Portal — 50-Day Real-World Coding & Software Lab | Nextsem Academy",
  description: "Master BCA practical curriculum with hands-on coding in Visual Studio Code, Git, GitHub verification, and real software engineering exercises.",
  alternates: {
    canonical: "https://nextsem.online/bca"
  }
};

export default function BcaGatewayPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      {/* Breadcrumb Header */}
      <div className="border-b border-neutral-800 bg-neutral-950 py-3 px-4 sm:px-8">
        <nav className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span>🏠 Home</span>
          </Link>
          <span className="text-slate-600">❯</span>
          <span className="text-emerald-400 font-bold">BCA Hub</span>
        </nav>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-20 space-y-12">
        {/* Hero Banner */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
            <Sparkles size={14} className="text-emerald-400" />
            <span>Interactive BCA Industry Coding Labs</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            BCA Practical <span className="text-emerald-400">Learning Portal</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            Move beyond theoretical rote learning. Write code inside <strong>Visual Studio Code</strong>, push to your personal <strong>GitHub repository</strong>, and verify your real commits instantly with automated test suites.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/bca/practical"
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-base transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              <Play size={18} fill="currentColor" />
              <span>Launch 50-Day Practical Lab</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/bca/practical/how-it-works"
              className="px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-base border border-neutral-700 transition-all flex items-center gap-2"
            >
              <BookOpen size={18} className="text-slate-400" />
              <span>How It Works & Roadmap</span>
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Laptop size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">Real VS Code Practice</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Guided specs and starter templates designed for real local developer setups on Windows, Linux, and macOS.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <GitBranch size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">Live GitHub Verification</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Automated API inspection verifies your pushed commits, files, and line contents directly against curriculum test specs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Award size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">Daily Viva & Certification</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Technical viva question checks reinforce concepts before unlocking subsequent lab days and career milestones.
            </p>
          </div>
        </div>

        {/* Quick Launch Days Preview */}
        <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Flame className="text-amber-400" size={20} />
                <span>Featured Sprint: 50 Daily Practical Labs</span>
              </h3>
              <p className="text-sm text-slate-400">
                From Computer Basics and HTML to Database Architecture and Data Structures.
              </p>
            </div>
            <Link
              href="/bca/practical"
              className="text-emerald-400 hover:text-emerald-300 font-bold text-sm flex items-center gap-1 group"
            >
              <span>View All 50 Days</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/bca/practical/day-1-vs-code-git-setup"
              className="p-4 rounded-xl bg-black border border-neutral-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-bold text-emerald-400">Day 01</span>
                <span>Foundation</span>
              </div>
              <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                VS Code & Git Professional Setup
              </div>
            </Link>

            <Link
              href="/bca/practical/day-2-cli-navigation"
              className="p-4 rounded-xl bg-black border border-neutral-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-bold text-emerald-400">Day 02</span>
                <span>Terminal</span>
              </div>
              <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                Command Line Navigation & File Operations
              </div>
            </Link>

            <Link
              href="/bca/practical/day-3-html-semantic-structure"
              className="p-4 rounded-xl bg-black border border-neutral-800 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-bold text-emerald-400">Day 03</span>
                <span>Frontend</span>
              </div>
              <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                Semantic HTML5 & Accessible Document Tree
              </div>
            </Link>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center text-xs text-slate-500 pt-8 border-t border-neutral-800">
          Curriculum & Practical Systems Designed by <strong className="text-slate-300">Er. Manoj Kumar</strong> • Nextsem Academy
        </div>
      </main>
    </div>
  );
}
