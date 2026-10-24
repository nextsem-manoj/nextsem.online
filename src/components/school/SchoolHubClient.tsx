"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Atom, 
  Briefcase, 
  Palette, 
  Flame,
  Search,
  ExternalLink,
  Layers,
  GraduationCap,
  FileText,
  X,
  Play,
  Share2,
  ChevronRight,
  Filter
} from "lucide-react";
import { CLASSES_DATA, Subject, Chapter } from "@/data/ncertData";

type StageKey = "ALL" | "SENIOR" | "SECONDARY" | "MIDDLE" | "PRIMARY" | "KG";
type StreamKey = "ALL" | "SCIENCE" | "COMMERCE" | "ARTS";

interface FeaturedStudio {
  title: string;
  badge: string;
  badgeColor: string;
  classTag: string;
  streamTag?: string;
  file: string;
  desc: string;
  emoji: string;
}

const FEATURED_STUDIOS: FeaturedStudio[] = [
  {
    title: "Middle School Doubt Diagnostic Studio",
    badge: "Official Studio",
    badgeColor: "bg-blue-900/60 text-blue-300 border-blue-500/40",
    classTag: "Class 6, 7 & 8",
    file: "/middle-school-doubt-diagnostic-studio.html",
    desc: "Personalized diagnostics for Ganita Prakash & Curiosity Science with Google Sign-in.",
    emoji: "🧭"
  },
  {
    title: "Financial Accounting Cash Book Studio",
    badge: "Interactive Numericals",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40",
    classTag: "Class 11 & 12",
    streamTag: "Commerce",
    file: "/financial-accounting-cash-book-numericals-studio.html",
    desc: "Single & Double Column Cash Book numerical solver with live debit/credit balancing.",
    emoji: "📊"
  },
  {
    title: "Physics Class 12 All Derivations Studio",
    badge: "CBSE Board 2026",
    badgeColor: "bg-cyan-900/60 text-cyan-300 border-cyan-500/40",
    classTag: "Class 12",
    streamTag: "Science",
    file: "/cbse-class12-physics-55-3-1-mcq-solutions.html",
    desc: "Gauss Law, Electrostatics & Optics step-by-step mathematical proofs & CBSE SQP.",
    emoji: "⚡"
  },
  {
    title: "History Class 12 (Themes I, II & III) 80 MCQs",
    badge: "CBSE Mastery",
    badgeColor: "bg-fuchsia-900/60 text-fuchsia-300 border-fuchsia-500/40",
    classTag: "Class 12",
    streamTag: "Arts",
    file: "/cbse-class12-history-pyq-2024-solved-hindi.html",
    desc: "Harappan Civilization, Kings & Farmers, and Framing Constitution solved in Hindi & English.",
    emoji: "🏛️"
  },
  {
    title: "Chemistry Haloalkanes & d/f-Block MCQs",
    badge: "NEET & Board",
    badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40",
    classTag: "Class 12",
    streamTag: "Science",
    file: "/chemistry-class12-alcohols-phenols-ethers-page1-2.html",
    desc: "Reaction mechanisms, IUPAC naming, physical properties & board competency questions.",
    emoji: "🧪"
  },
  {
    title: "Class 10 Trigonometry Interactive Studio",
    badge: "Board High-Weightage",
    badgeColor: "bg-yellow-900/60 text-yellow-300 border-yellow-500/40",
    classTag: "Class 10",
    file: "/class10-maths-ch8-trigonometry-interactive-studio.html",
    desc: "Interactive triangle ratio visualization, standard angle identities & solved proofs.",
    emoji: "📐"
  },
  {
    title: "Class 10 Chemical Reactions & Life Processes",
    badge: "Competency MCQ",
    badgeColor: "bg-teal-900/60 text-teal-300 border-teal-500/40",
    classTag: "Class 10",
    file: "/class10-science-ch1-chemical-reactions-difficult-mcq.html",
    desc: "Balancing equations, redox reactions, precipitation and respiration MCQs.",
    emoji: "🔬"
  },
  {
    title: "Business Studies Class 11 & 12 25 MCQs",
    badge: "Case Study Practice",
    badgeColor: "bg-amber-900/60 text-amber-300 border-amber-500/40",
    classTag: "Class 11 & 12",
    streamTag: "Commerce",
    file: "/business-studies-class11-ch1-kebs101-25-mcqs.html",
    desc: "Nature & Purpose of Business, Forms of Business Organization & Case Scenarios.",
    emoji: "💼"
  },
  {
    title: "Political Science Class 12 Sample Paper 2026",
    badge: "Official SQP Solved",
    badgeColor: "bg-purple-900/60 text-purple-300 border-purple-500/40",
    classTag: "Class 12",
    streamTag: "Arts",
    file: "/cbse-class12-polsci-sqp-2025-26-solutions.html",
    desc: "Complete solved solutions for CBSE Official SQP 2025-26 with marking scheme points.",
    emoji: "📜"
  },
  {
    title: "KG & Nursery Phonics & Animal Sounds",
    badge: "Foundational Early Years",
    badgeColor: "bg-rose-900/60 text-rose-300 border-rose-500/40",
    classTag: "KG / Nursery",
    file: "/kids-kg.html",
    desc: "Interactive alphabet phonics, audio pronunciations, finger tracing and fun games.",
    emoji: "🧸"
  }
];

export default function SchoolHubClient() {
  const [selectedStage, setSelectedStage] = useState<StageKey>("ALL");
  const [selectedStream, setSelectedStream] = useState<StreamKey>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClassNum, setSelectedClassNum] = useState<number | null>(null);
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);

  // Group classes by stage
  const stages = useMemo(() => [
    { key: "ALL", label: "All Stages (KG to 12th)", icon: "📚" },
    { key: "SENIOR", label: "Class 11 & 12 (All Streams)", icon: "🎓" },
    { key: "SECONDARY", label: "Class 9 & 10 (Boards)", icon: "🏆" },
    { key: "MIDDLE", label: "Class 6, 7 & 8 (NEP)", icon: "🧭" },
    { key: "PRIMARY", label: "Class 1 to 5", icon: "🌱" },
    { key: "KG", label: "KG & Nursery", icon: "🧸" },
  ], []);

  // Filter classes
  const filteredClasses = useMemo(() => {
    return CLASSES_DATA.filter((cls) => {
      // Stage filter
      if (selectedStage === "SENIOR" && cls.classNumber < 11) return false;
      if (selectedStage === "SECONDARY" && (cls.classNumber !== 9 && cls.classNumber !== 10)) return false;
      if (selectedStage === "MIDDLE" && (cls.classNumber < 6 || cls.classNumber > 8)) return false;
      if (selectedStage === "PRIMARY" && (cls.classNumber < 1 || cls.classNumber > 5)) return false;
      if (selectedStage === "KG") return false; // Handled separately in dedicated section

      // Class number filter
      if (selectedClassNum !== null && cls.classNumber !== selectedClassNum) return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesClass = `class ${cls.classNumber}`.includes(q) || cls.stageName.toLowerCase().includes(q);
        const matchesSubject = cls.subjects.some(s => 
          s.name.toLowerCase().includes(q) || 
          s.description.toLowerCase().includes(q) ||
          s.chapters.some(ch => ch.title.toLowerCase().includes(q))
        );
        return matchesClass || matchesSubject;
      }

      return true;
    }).sort((a, b) => b.classNumber - a.classNumber);
  }, [selectedStage, selectedClassNum, searchQuery]);

  // Filtered studios
  const filteredStudios = useMemo(() => {
    if (!searchQuery.trim() && selectedStream === "ALL" && selectedStage === "ALL") {
      return FEATURED_STUDIOS;
    }
    const q = searchQuery.toLowerCase();
    return FEATURED_STUDIOS.filter((studio) => {
      if (selectedStream !== "ALL" && studio.streamTag && studio.streamTag.toUpperCase() !== selectedStream) {
        return false;
      }
      if (!q) return true;
      return (
        studio.title.toLowerCase().includes(q) ||
        studio.desc.toLowerCase().includes(q) ||
        studio.classTag.toLowerCase().includes(q) ||
        (studio.streamTag && studio.streamTag.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedStream, selectedStage]);

  return (
    <div className="space-y-12">
      {/* ── SEARCH & STAGE CONTROLS ── */}
      <div className="bg-[#0f1117] border border-neutral-800 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters, numericals, studios (e.g. Cash Book, Trigonometry, Haloalkanes)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-neutral-900/90 border border-neutral-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs px-1.5 py-0.5 rounded-full bg-neutral-800"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Stage Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {stages.map((stg) => {
              const active = selectedStage === stg.key;
              return (
                <button
                  key={stg.key}
                  onClick={() => {
                    setSelectedStage(stg.key as StageKey);
                    setSelectedClassNum(null);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    active
                      ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                      : "bg-neutral-900/80 text-slate-300 hover:bg-neutral-800 border border-neutral-800"
                  }`}
                >
                  <span>{stg.icon}</span>
                  <span>{stg.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Senior Secondary Stream Filter Pills */}
        {(selectedStage === "ALL" || selectedStage === "SENIOR") && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-800/80">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
              <Filter size={13} className="text-amber-400" />
              <span>Stream Focus:</span>
            </span>
            {[
              { key: "ALL", label: "All Streams", color: "text-slate-300 border-neutral-700" },
              { key: "SCIENCE", label: "🧪 Science (PCM/PCB)", color: "text-cyan-300 border-cyan-500/40" },
              { key: "COMMERCE", label: "💼 Commerce (Accounts/BST/Eco)", color: "text-amber-300 border-amber-500/40" },
              { key: "ARTS", label: "🎨 Arts / Humanities (Hist/PolSci/Geo)", color: "text-fuchsia-300 border-fuchsia-500/40" },
            ].map((stream) => (
              <button
                key={stream.key}
                onClick={() => setSelectedStream(stream.key as StreamKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                  selectedStream === stream.key
                    ? "bg-white text-black border-white"
                    : `bg-neutral-900/80 hover:bg-neutral-800 ${stream.color}`
                }`}
              >
                {stream.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── FEATURED INTERACTIVE STUDIOS & WORKSHEETS ── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>100% Free Interactive Practice</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Featured Interactive Studios &amp; Solved Worksheets
            </h2>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline-block">
            {filteredStudios.length} Active Studios
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStudios.map((studio, idx) => (
            <a
              key={idx}
              href={studio.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#0f1117] border border-neutral-800 hover:border-emerald-500/60 transition-all flex flex-col justify-between space-y-3 hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{studio.emoji}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-800 text-slate-300 border border-neutral-700">
                      {studio.classTag}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${studio.badgeColor}`}>
                      {studio.badge}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors leading-snug">
                    {studio.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {studio.desc}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                <span>Launch Interactive Studio</span>
                <ArrowRight size={13} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FOUNDATIONAL / KG SECTION ── */}
      {(selectedStage === "ALL" || selectedStage === "KG" || selectedStage === "PRIMARY") && (
        <section className="space-y-4 pt-4 border-t border-neutral-800/80">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">Early Childhood Care &amp; Education (ECCE)</div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2 mt-0.5">
                <span>🧸 Nursery, LKG &amp; UKG Foundational Hub</span>
              </h2>
            </div>
            <a
              href="/kids-kg.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500 hover:text-black transition-colors flex items-center gap-1"
            >
              <span>Open Phonics Studio</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="/kids-kg.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0f1117] border border-neutral-800 hover:border-rose-500/50 transition-all space-y-2 group"
            >
              <div className="text-2xl">🔤</div>
              <h4 className="font-bold text-white text-sm group-hover:text-rose-400 transition-colors">
                Alphabet Phonics &amp; Sounds
              </h4>
              <p className="text-xs text-slate-400">
                Letters A to Z with authentic human audio pronunciation and cartoon picture cards.
              </p>
              <div className="text-[11px] font-bold text-rose-400 pt-2 flex items-center gap-1">
                <span>Play Sound Cards »</span>
              </div>
            </a>

            <a
              href="/kids-kg.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0f1117] border border-neutral-800 hover:border-rose-500/50 transition-all space-y-2 group"
            >
              <div className="text-2xl">✏️</div>
              <h4 className="font-bold text-white text-sm group-hover:text-rose-400 transition-colors">
                Interactive Digit Tracing
              </h4>
              <p className="text-xs text-slate-400">
                Numbers 1 to 20 finger tracing with guided strokes and sparkling completion confetti.
              </p>
              <div className="text-[11px] font-bold text-rose-400 pt-2 flex items-center gap-1">
                <span>Start Tracing »</span>
              </div>
            </a>

            <a
              href="/kids-kg.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0f1117] border border-neutral-800 hover:border-rose-500/50 transition-all space-y-2 group"
            >
              <div className="text-2xl">🦁</div>
              <h4 className="font-bold text-white text-sm group-hover:text-rose-400 transition-colors">
                Animal &amp; Color Recognition
              </h4>
              <p className="text-xs text-slate-400">
                Fun interactive matching games for shapes, colors, wild and domestic animals.
              </p>
              <div className="text-[11px] font-bold text-rose-400 pt-2 flex items-center gap-1">
                <span>Explore Animals »</span>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* ── CLASS-BY-CLASS EXPLORER WITH REAL 3D BOOK COVERS ── */}
      <section className="space-y-8 pt-4 border-t border-neutral-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">NEP 2020 Aligned Textbooks</div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
              Class 1 to 12 NCERT Curriculum &amp; Solutions
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            Showing {filteredClasses.length} Grade Levels
          </div>
        </div>

        {/* Classes Accordion / List */}
        <div className="space-y-6">
          {filteredClasses.map((cls) => {
            const isSelected = selectedClassNum === cls.classNumber;
            const stageColor =
              cls.classNumber >= 11
                ? "border-amber-500/30 text-amber-400 bg-amber-950/40"
                : cls.classNumber >= 9
                ? "border-emerald-500/30 text-emerald-400 bg-emerald-950/40"
                : cls.classNumber >= 6
                ? "border-blue-500/30 text-blue-400 bg-blue-950/40"
                : "border-teal-500/30 text-teal-400 bg-teal-950/40";

            return (
              <div
                key={cls.classNumber}
                className="bg-[#0f1117] border border-neutral-800 rounded-3xl p-6 sm:p-7 space-y-5 shadow-xl transition-all"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/80 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center font-black text-xl text-white shrink-0">
                      {cls.classNumber}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-extrabold text-white">
                          Class {cls.classNumber}
                        </h3>
                        <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${stageColor}`}>
                          {cls.stageName} Stage
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cls.nepFocus} • Age Group: {cls.ageGroup}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs font-bold text-slate-400 px-3 py-1 rounded-xl bg-neutral-900 border border-neutral-800">
                      {cls.subjects.length} Subjects
                    </span>
                  </div>
                </div>

                {/* Subject Cards Grid with Authentic Book Covers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cls.subjects.map((sub) => {
                    const hasCover = !!sub.coverImageUrl;
                    return (
                      <div
                        key={sub.id}
                        onClick={() => setActiveSubject(sub)}
                        className="group cursor-pointer p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/50 transition-all flex gap-3.5 items-start hover:bg-neutral-900/90"
                      >
                        {/* Book Cover Thumbnail */}
                        <div className="w-16 h-22 rounded-lg bg-neutral-800 border border-neutral-700 overflow-hidden shrink-0 shadow-md relative group-hover:scale-105 transition-transform">
                          {hasCover ? (
                            <img
                              src={sub.coverImageUrl}
                              alt={sub.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback if image fails to load
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-xs font-bold text-slate-400 p-1 text-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                              <BookOpen size={18} className="text-emerald-400 mb-1" />
                              <span className="text-[9px] line-clamp-2">{sub.name}</span>
                            </div>
                          )}
                        </div>

                        {/* Subject Metadata */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <h4 className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors truncate">
                            {sub.name}
                          </h4>
                          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                            {sub.description}
                          </p>
                          <div className="pt-1 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                            <span className="text-emerald-400 font-bold">
                              {sub.chapters.length} Chapters
                            </span>
                            <span className="group-hover:text-white transition-colors flex items-center gap-0.5">
                              View Chapters <ChevronRight size={11} />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CHAPTER EXPLORER MODAL / DRAWER ── */}
      {activeSubject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0f1117] border border-neutral-800 rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/60">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <BookOpen size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-black text-lg sm:text-xl text-white truncate">
                    {activeSubject.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {activeSubject.chapters.length} Rationalized Chapters (NEP 2020)
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveSubject(null)}
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content: Chapters List */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 max-h-[calc(90vh-140px)]">
              {activeSubject.chapters.length === 0 ? (
                <div className="text-center py-10 space-y-2">
                  <p className="text-sm text-slate-400">No chapters mapped yet for this subject.</p>
                </div>
              ) : (
                activeSubject.chapters.map((ch, idx) => (
                  <div
                    key={ch.id || idx}
                    className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">
                          Chapter {ch.chapterNumber}
                        </div>
                        <h4 className="font-bold text-white text-base">
                          {ch.title}
                        </h4>
                      </div>

                      {/* Official PDF Action */}
                      {ch.officialPdfUrl && (
                        <a
                          href={ch.officialPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-emerald-500 hover:text-black text-white text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0"
                        >
                          <span>NCERT PDF</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>

                    {ch.nepHighlights && (
                      <p className="text-xs text-slate-300 leading-relaxed bg-neutral-950/60 p-2.5 rounded-xl border border-neutral-800/80">
                        <strong className="text-amber-400 font-semibold">NEP Focus: </strong>
                        {ch.nepHighlights}
                      </p>
                    )}

                    {ch.summaryTextbook && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {ch.summaryTextbook}
                      </p>
                    )}

                    {/* Solutions & Exercises Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {ch.exerciseSolutions && ch.exerciseSolutions.length > 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                          ✓ {ch.exerciseSolutions.length} Solved Exercises
                        </span>
                      )}
                      {ch.competencyQuestions && ch.competencyQuestions.length > 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800/80">
                          🎯 {ch.competencyQuestions.length} Competency Questions
                        </span>
                      )}
                      {ch.quiz && ch.quiz.length > 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-950/80 text-amber-400 border border-amber-800/80">
                          ⚡ {ch.quiz.length} Practice MCQs
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-neutral-800 bg-neutral-900/40 flex items-center justify-between text-xs text-slate-400">
              <span>Curriculum authored by <strong className="text-slate-200">Er. Manoj Kumar</strong></span>
              <button
                onClick={() => setActiveSubject(null)}
                className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
