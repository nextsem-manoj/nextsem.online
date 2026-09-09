"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Play, BookOpen, CheckCircle, Award, ChevronRight,
  ArrowRight, Zap, Search, HelpCircle, Code2, Laptop,
  Sparkles, Check, Filter, Layers, ArrowUpRight
} from "lucide-react";
import { htmlLessons, Lesson } from "@/data/htmlLessonsData";

// Unit metadata descriptions
const UNIT_DESCRIPTIONS: Record<string, string> = {
  "Unit 0: Developer Workstation Setup & Visual Studio Code":
    "Install Visual Studio Code, setup Windows 11 terminal workflow, configure 'Open with Code', and build your very first HTML5 webpage.",
  "Unit 1: HTML Introduction & Fundamentals":
    "Understand the core building blocks of HTML, what markup tags are, and how the internet serves web pages.",
  "Unit 1: Web Fundamentals & Client-Server Architecture":
    "Explore how web clients request pages, HTTP headers, request verbs, response status codes, and browser DOM rendering.",
  "Unit 2: The Document Structure & Metadata":
    "Master the HTML5 document skeleton: DOCTYPE, html root, head metadata, title tag, UTF-8 charsets, mobile viewports, and CSS linking.",
  "Unit 3: Structural Text & Layout Elements":
    "Format text hierarchies using headings (h1-h6), paragraphs, line breaks, horizontal rules, generic divs, spans, and quotes.",
  "Unit 4: Semantic Content & Text Modifications":
    "Semantic bold strong vs visual bold, emphasis em vs italic, text highlights mark, inline code tags, sub, sup, and deletions.",
  "Unit 5: Navigation & Hyperlinks":
    "Master anchor tags (a href), relative vs absolute URL paths, target blank security attributes, email links, and document jumps.",
  "Unit 6: Multimedia & Responsive Art Direction":
    "Embed responsive images, modern SVG vectors, figure captions, srcset art direction, and high-performance lazy loading.",
  "Unit 7: Native Audio, Video & Embeds":
    "Implement native HTML5 video and audio players, subtitle tracks, iframe embeds, and secure sandbox configurations.",
  "Unit 8: Lists, Tables & Layout Grids":
    "Organize structured data with ordered/unordered lists, description lists, table elements, headers, colspans, and rowspans.",
  "Unit 9: Interactive Forms & Inputs":
    "Build interactive user forms, text fields, radio buttons, checkboxes, dropdown selects, textareas, and client-side validation.",
  "Unit 10: Advanced Semantics, Validation & APIs":
    "Explore modern HTML5 dialog modals, details/summary accordions, canvas 2D contexts, progress meters, and web accessibility standards."
};

export default function HtmlDashboardClient() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("guest");
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({});

  const totalLessons = htmlLessons.length;

  // Load progress on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      let email = "guest";
      try {
        const saved = localStorage.getItem("nextsem_user");
        if (saved) {
          const userObj = JSON.parse(saved);
          if (userObj?.email) email = userObj.email;
        }
      } catch (e) {}
      setUserEmail(email);

      const completed = new Set<number>();
      htmlLessons.forEach((lesson) => {
        const doneScoped = localStorage.getItem(`nextsem_html_completed_${email}_${lesson.id}`) === "true";
        const doneGlobal = localStorage.getItem(`nextsem_html_completed_${lesson.id}`) === "true";
        if (doneScoped || doneGlobal) {
          completed.add(lesson.id);
        }
      });
      setCompletedLessons(completed);

      // Expand all units by default
      const defaultExpanded: Record<string, boolean> = {};
      htmlLessons.forEach((l) => {
        defaultExpanded[l.unit] = true;
      });
      setExpandedUnits(defaultExpanded);

      setMounted(true);
    }
  }, []);

  const completedCount = completedLessons.size;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  // Group lessons by units
  const groupedUnits = useMemo(() => {
    const map = new Map<string, Lesson[]>();
    htmlLessons.forEach((lesson) => {
      const unitKey = lesson.unit || "General HTML Lessons";
      if (!map.has(unitKey)) {
        map.set(unitKey, []);
      }
      map.get(unitKey)!.push(lesson);
    });

    return Array.from(map.entries()).map(([unitName, lessons], idx) => {
      const unitCompleted = lessons.filter((l) => completedLessons.has(l.id)).length;
      const unitDesc = UNIT_DESCRIPTIONS[unitName] || "Essential HTML5 lessons, syntax rules, and hands-on developer code practices.";
      return {
        unitIndex: idx,
        unitName,
        unitDesc,
        lessons,
        total: lessons.length,
        completed: unitCompleted,
        isCompleted: unitCompleted === lessons.length && lessons.length > 0
      };
    });
  }, [completedLessons]);

  // Next lesson to resume
  const nextLesson = useMemo(() => {
    for (const lesson of htmlLessons) {
      if (!completedLessons.has(lesson.id)) {
        return lesson;
      }
    }
    return htmlLessons[0] || null;
  }, [completedLessons]);

  // Toggle unit expansion
  const toggleUnit = (unitName: string) => {
    setExpandedUnits((prev) => ({
      ...prev,
      [unitName]: !prev[unitName]
    }));
  };

  // Filter lessons based on search query and category
  const filteredUnits = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q && selectedCategory === "all") return groupedUnits;

    return groupedUnits
      .map((unit) => {
        let matchesCategory = true;
        if (selectedCategory !== "all") {
          matchesCategory = unit.unitName.toLowerCase().includes(selectedCategory.toLowerCase());
        }

        const matchingLessons = unit.lessons.filter((l) => {
          if (!matchesCategory && selectedCategory !== "all") return false;
          if (!q) return true;
          return (
            l.title.toLowerCase().includes(q) ||
            l.slug.toLowerCase().includes(q) ||
            l.bookRef.toLowerCase().includes(q) ||
            `lesson ${l.id}`.includes(q)
          );
        });

        return {
          ...unit,
          lessons: matchingLessons,
        };
      })
      .filter((unit) => unit.lessons.length > 0);
  }, [groupedUnits, searchQuery, selectedCategory]);

  return (
    <div className="w-full text-white font-sans selection:bg-[#04AA6D]/30 py-2 sm:py-4 space-y-6">
      
      {/* ── Top Breadcrumb Navigation ── */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Link href="/" className="hover:text-[#04AA6D] transition-colors">
          Home
        </Link>
        <span className="text-slate-600">/</span>
        <span className="text-white font-bold">HTML Developer Pathway</span>
      </div>

        {/* ── Hero Banner Section ── */}
        <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden border border-slate-800 bg-[#0c1328] shadow-2xl">
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#04AA6D]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles size={13} className="text-emerald-400" />
                <span>100% Free Full Stack Foundation • No Paywalls</span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                HTML5 Master Developer Curriculum
              </h1>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Master standard semantic HTML5 tags, web document architecture, client-server models, responsive layouts, forms, and authentic Windows 11 VS Code workflows across {totalLessons} bite-sized lessons.
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-[#141b34] rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Lessons</span>
                  <span className="text-lg font-black text-white">{totalLessons}+ Modules</span>
                </div>
                <div className="p-3 bg-[#141b34] rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Course Units</span>
                  <span className="text-lg font-black text-[#04AA6D]">{groupedUnits.length} Units</span>
                </div>
                <div className="p-3 bg-[#141b34] rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Assessment</span>
                  <span className="text-lg font-black text-emerald-400">Live Quiz</span>
                </div>
                <div className="p-3 bg-[#141b34] rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Prerequisites</span>
                  <span className="text-lg font-black text-slate-200">Zero (Beginner)</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>Your Learning Progress</span>
                  <span className="text-[#04AA6D]">{completedCount} of {totalLessons} Lessons ({progressPercent}%)</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-[#04AA6D] transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

            </div>

            {/* Right CTAs */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              {nextLesson && (
                <Link
                  href={`/html/${nextLesson.slug}`}
                  className="px-6 py-4 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-[#04AA6D]/25 transition-all flex items-center justify-center gap-3 border border-emerald-400/30 group"
                >
                  <Play size={16} className="fill-current" />
                  <span>{completedCount > 0 ? "Resume Learning »" : "Start First Lesson »"}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}

              <Link
                href="/html/quiz"
                className="px-6 py-4 bg-[#141b34] hover:bg-[#1a2344] text-white font-bold text-sm rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                <Award size={18} className="text-amber-400" />
                <span>Take HTML Quiz Assessment</span>
              </Link>

              <Link
                href="/playground"
                className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <Code2 size={15} className="text-[#04AA6D]" />
                <span>Open Code Playground</span>
              </Link>
            </div>

          </div>
        </div>

        {/* ── Search & Filter Controls ── */}
        <div className="p-4 sm:p-5 bg-[#0c1328] border border-slate-800 rounded-2xl shadow-lg space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search input */}
            <div className="relative w-full md:w-96">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search lessons by tag, title, or topic..."
                className="w-full bg-[#141b34] border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#04AA6D] transition-colors"
              />
            </div>

            {/* Action shortcut to Quiz */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <Link
                href="/html/quiz"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold rounded-xl transition-all"
              >
                <HelpCircle size={14} className="text-emerald-400" />
                <span>Comprehensive Quiz ({totalLessons} Questions) »</span>
              </Link>
            </div>

          </div>

          {/* Filter Category Chips */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-800/80">
            {[
              { id: "all", label: "All Units" },
              { id: "Setup", label: "VS Code Setup" },
              { id: "Fundamentals", label: "Web Fundamentals" },
              { id: "Structure", label: "Document Structure" },
              { id: "Text", label: "Text & Typography" },
              { id: "Navigation", label: "Links & Anchors" },
              { id: "Multimedia", label: "Images & Vectors" },
              { id: "Video", label: "Audio & Video" },
              { id: "Tables", label: "Lists & Tables" },
              { id: "Forms", label: "Forms & Inputs" },
              { id: "Semantics", label: "Advanced APIs" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#04AA6D] text-white shadow-md shadow-[#04AA6D]/20"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Units & Lessons Accordion List ── */}
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <Layers size={22} className="text-[#04AA6D]" />
              <span>HTML5 Syllabus & Lesson Modules</span>
            </h2>
            <span className="text-xs font-bold text-slate-400">
              Showing {filteredUnits.reduce((acc, u) => acc + u.lessons.length, 0)} of {totalLessons} Lessons
            </span>
          </div>

          {filteredUnits.length === 0 ? (
            <div className="p-12 text-center bg-[#0c1328] border border-slate-800 rounded-2xl space-y-3">
              <Search size={32} className="text-slate-500 mx-auto" />
              <h3 className="text-lg font-bold text-white">No lessons matched your search query</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try searching for a different keyword like "heading", "form", "anchor", or reset the filter.
              </p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="px-4 py-2 bg-[#04AA6D] text-white text-xs font-bold rounded-xl mt-2"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredUnits.map((unit) => {
              const isExpanded = expandedUnits[unit.unitName] ?? true;

              return (
                <div
                  key={unit.unitName}
                  className="bg-[#0c1328] border border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all"
                >
                  {/* Unit Header Bar */}
                  <div
                    onClick={() => toggleUnit(unit.unitName)}
                    className="p-5 sm:p-6 bg-[#141b34] hover:bg-[#182140] border-b border-slate-800 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none transition-colors"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase text-[#04AA6D] tracking-widest px-2.5 py-0.5 rounded-full bg-[#04AA6D]/15 border border-[#04AA6D]/30">
                          {unit.unitName.split(":")[0] || `Unit ${unit.unitIndex}`}
                        </span>
                        {unit.isCompleted && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-emerald-950 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                            <CheckCircle size={10} className="text-emerald-400" /> Completed
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-white">
                        {unit.unitName}
                      </h3>
                      <p className="text-xs text-slate-300 font-normal leading-relaxed max-w-3xl">
                        {unit.unitDesc}
                      </p>
                    </div>

                    {/* Progress indicator and collapse toggle */}
                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-300 block">
                          {unit.completed} / {unit.total} Lessons
                        </span>
                        <div className="w-24 h-1.5 bg-slate-900 rounded-full overflow-hidden mt-1 border border-slate-800">
                          <div
                            className="h-full bg-[#04AA6D] transition-all duration-300"
                            style={{ width: `${Math.round((unit.completed / (unit.total || 1)) * 100)}%` }}
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 transition-transform"
                        aria-label="Toggle Unit"
                      >
                        <ChevronRight
                          size={16}
                          className={`transition-transform duration-200 ${isExpanded ? "rotate-90 text-[#04AA6D]" : ""}`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Lessons Grid */}
                  {isExpanded && (
                    <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {unit.lessons.map((lesson) => {
                        const isDone = completedLessons.has(lesson.id);

                        return (
                          <Link
                            key={lesson.id}
                            href={`/html/${lesson.slug}`}
                            className={`p-4 rounded-xl border transition-all flex items-start justify-between gap-3 group ${
                              isDone
                                ? "bg-emerald-950/20 border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/30"
                                : "bg-[#141828] border-slate-800/80 hover:border-[#04AA6D] hover:bg-[#1a2035]"
                            }`}
                          >
                            <div className="space-y-1.5 min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                                  isDone
                                    ? "bg-emerald-500 text-black border-emerald-400"
                                    : "bg-slate-900 text-slate-300 border-slate-700 group-hover:border-[#04AA6D]"
                                }`}>
                                  #{lesson.id}
                                </span>
                                <span className="text-[10px] font-mono text-slate-400 truncate">
                                  {lesson.bookRef || "HTML5 Specification"}
                                </span>
                              </div>

                              <h4 className="text-sm font-bold text-white group-hover:text-[#04AA6D] transition-colors leading-snug line-clamp-2">
                                {lesson.title}
                              </h4>
                            </div>

                            <div className="shrink-0 pt-0.5 flex items-center gap-1.5">
                              {isDone ? (
                                <CheckCircle size={18} className="text-emerald-400 shrink-0" />
                              ) : (
                                <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 group-hover:text-white group-hover:bg-[#04AA6D] group-hover:border-[#04AA6D] transition-all">
                                  <ArrowRight size={14} />
                                </span>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* ── Assessment & Quiz Card ── */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0c1328] via-[#141b34] to-[#0c1328] border border-slate-800 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <Award size={20} className="text-amber-400" />
              <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                Official Knowledge Check
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to Test Your HTML Skills?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Take the comprehensive HTML quiz with {totalLessons} multiple-choice questions, detailed explanations, keyboard navigation shortcuts, and instant certification score feedback.
            </p>
          </div>

          <Link
            href="/html/quiz"
            className="px-6 py-3.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-[#04AA6D]/25 transition-all flex items-center gap-2 shrink-0 border border-emerald-400/40"
          >
            <span>Launch HTML Quiz Assessment »</span>
            <ArrowRight size={16} />
          </Link>
        </div>

    </div>
  );
}
