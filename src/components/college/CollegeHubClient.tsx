"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  BookOpen, 
  Terminal, 
  Code2, 
  Laptop, 
  GitBranch, 
  Award, 
  Sparkles, 
  Flame, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  ExternalLink,
  FileCode,
  ShieldCheck,
  Play
} from "lucide-react";
import { bcaSemesters } from "@/data/bcaCoursesData";

type DegreeType = "BCA" | "MCA" | "BTECH";

export default function CollegeHubClient() {
  const [selectedDegree, setSelectedDegree] = useState<DegreeType>("BCA");
  const [activeSemester, setActiveSemester] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // All BCA Semesters data from bcaCoursesData
  const currentSemesterData = useMemo(() => {
    return bcaSemesters.find((s) => s.id === activeSemester) || bcaSemesters[0];
  }, [activeSemester]);

  // Filter subjects based on search query
  const filteredSubjects = useMemo(() => {
    if (!searchQuery.trim()) {
      return currentSemesterData.subjects;
    }
    const q = searchQuery.toLowerCase();
    // Search across all semesters if query entered
    const allSubjects = bcaSemesters.flatMap((s) => 
      s.subjects.map((sub) => ({ ...sub, semesterName: s.name }))
    );
    return allSubjects.filter(
      (sub) => sub.name.toLowerCase().includes(q) || sub.code.toLowerCase().includes(q)
    );
  }, [currentSemesterData, searchQuery]);

  return (
    <div className="space-y-12">
      {/* ── 1. DEGREE PATHWAY SELECTOR PILLS ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-neutral-800 pb-6">
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <GraduationCap className="text-emerald-400" size={24} />
            <span>Select University Degree Curriculum</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Theory, practical labs, university syllabus codes, and viva exam preparation.
          </p>
        </div>

        {/* Degree Toggle Pills */}
        <div className="inline-flex items-center bg-neutral-900 border border-neutral-800 p-1 rounded-2xl">
          <button
            onClick={() => { setSelectedDegree("BCA"); setActiveSemester(1); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDegree === "BCA"
                ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🎓 BCA (3 Years)
          </button>
          <button
            onClick={() => { setSelectedDegree("MCA"); setActiveSemester(1); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDegree === "MCA"
                ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🚀 MCA (Postgrad)
          </button>
          <button
            onClick={() => { setSelectedDegree("BTECH"); setActiveSemester(1); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDegree === "BTECH"
                ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            💻 B.Tech CSE / B.Sc.
          </button>
        </div>
      </div>

      {/* ── 2. SEMESTER SELECTOR TABS & SEARCH BAR ── */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Semester Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 custom-scrollbar">
            {bcaSemesters.map((sem) => (
              <button
                key={sem.id}
                onClick={() => { setActiveSemester(sem.id); setSearchQuery(""); }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                  activeSemester === sem.id && !searchQuery
                    ? "bg-neutral-800 text-emerald-400 border-emerald-500/50 shadow-sm"
                    : "bg-neutral-900/60 text-slate-400 border-neutral-800 hover:text-white hover:border-neutral-700"
                }`}
              >
                {sem.name}
              </button>
            ))}
          </div>

          {/* Quick Subject Search */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search code or subject (e.g. BCS-111, Java, DBMS)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500/60 transition-colors"
            />
          </div>
        </div>

        {searchQuery && (
          <div className="text-xs text-slate-400 flex items-center justify-between">
            <span>Showing results matching: <strong className="text-emerald-400 font-mono">"{searchQuery}"</strong></span>
            <button onClick={() => setSearchQuery("")} className="text-slate-500 hover:text-white underline">
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* ── 3. SUBJECT CARDS GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSubjects.map((subject, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group space-y-4 shadow-sm"
          >
            <div className="space-y-3">
              {/* Top Badges */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-neutral-800 text-emerald-400 border border-neutral-700">
                  {subject.code}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  subject.isLab 
                    ? "bg-purple-950/60 text-purple-300 border border-purple-500/30" 
                    : "bg-blue-950/60 text-blue-300 border border-blue-500/30"
                }`}>
                  {subject.isLab ? "Practical Lab" : "Core Theory"}
                </span>
              </div>

              {/* Subject Title */}
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                {subject.name}
              </h3>

              {/* Units & Blocks Breakdown */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                  <Layers size={13} className="text-slate-500" />
                  <span>{subject.blocks.length} Blocks • {subject.blocks.reduce((acc, b) => acc + b.units.length, 0)} Units</span>
                </div>

                <div className="space-y-1 pl-1">
                  {subject.blocks.slice(0, 2).map((block, bIdx) => (
                    <div key={bIdx} className="text-[11px] text-slate-400 truncate flex items-center gap-1.5">
                      <span className="text-emerald-500 text-xs">›</span>
                      <span className="truncate">{block.name}</span>
                    </div>
                  ))}
                  {subject.blocks.length > 2 && (
                    <div className="text-[10px] text-slate-500 pl-3">
                      + {subject.blocks.length - 2} more blocks
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium">
                {subject.isLab ? "VS Code Hands-on" : "Complete Syllabus"}
              </span>

              {subject.isLab ? (
                <Link
                  href="/bca/practical"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Practice Lab</span>
                  <ArrowRight size={13} />
                </Link>
              ) : (
                <Link
                  href="/bca/practical"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  <span>Study Notes</span>
                  <ChevronRight size={14} />
                </Link>
              )}
            </div>
          </div>
        ))}

        {filteredSubjects.length === 0 && (
          <div className="col-span-full p-12 text-center rounded-2xl bg-neutral-900/30 border border-neutral-800 space-y-3">
            <BookOpen size={32} className="mx-auto text-slate-500" />
            <h4 className="text-base font-bold text-white">No Subjects Found</h4>
            <p className="text-xs text-slate-400">Try searching with a different keyword or subject code.</p>
          </div>
        )}
      </div>

      {/* ── 4. FEATURED 50-DAY CODING SPRINT BANNER ── */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-emerald-500/30 shadow-2xl relative overflow-hidden space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
              <Flame size={14} className="text-amber-400" />
              <span>Mandatory Practical Requirement</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              50-Day Real-World Coding &amp; GitHub Practical Lab
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every college degree student must implement guided code specifications locally in Visual Studio Code, push commits to GitHub, and pass automated test suites &amp; viva checks.
            </p>
          </div>

          <Link
            href="/bca/practical"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 flex items-center gap-2 shrink-0"
          >
            <Play size={16} fill="currentColor" />
            <span>Launch Practical Portal</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Sprint Sample Days Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5 pt-2">
          {[
            { day: "01", name: "VS Code & Git", track: "Tools" },
            { day: "02", name: "CLI Commands", track: "Terminal" },
            { day: "03", name: "Semantic HTML", track: "Frontend" },
            { day: "04", name: "CSS Layouts", track: "Styling" },
            { day: "05", name: "DOM Events", track: "JavaScript" },
            { day: "06", name: "Git Branches", track: "DevOps" },
          ].map((d, i) => (
            <Link
              key={i}
              href="/bca/practical"
              className="p-3 rounded-xl bg-black/60 border border-neutral-800 hover:border-emerald-500/40 transition-colors text-center group"
            >
              <div className="text-[10px] font-bold text-emerald-400">Day {d.day}</div>
              <div className="text-xs font-bold text-white group-hover:text-emerald-300 truncate">{d.name}</div>
              <div className="text-[9px] text-slate-500">{d.track}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
