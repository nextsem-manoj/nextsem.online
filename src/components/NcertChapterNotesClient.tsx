"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles, Check, HelpCircle, AlertCircle, RefreshCw, Award } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import AdSenseBanner from '@/components/AdSenseBanner';

export type MultilingualText = string | {
  english: string;
  hindi: string;
  hinglish: string;
};

export interface MCQ {
  id: number;
  question: MultilingualText;
  options: MultilingualText[];
  answer: number; // Index of correct option (0-based)
  explanation: MultilingualText;
}

export interface ShortAnswer {
  question: MultilingualText;
  answer: MultilingualText;
}

export interface Distinction {
  title: MultilingualText;
  desc: MultilingualText;
  table: { headers: string[]; rows: string[][] };
}

export interface Assertion {
  id: number;
  assertion: MultilingualText;
  reason: MultilingualText;
  correctOption: string; // 'A', 'B', 'C', 'D'
  explanation: MultilingualText;
}

export interface FillInBlank {
  id: number;
  question: MultilingualText;
  answer: MultilingualText;
  hint: MultilingualText;
}

interface NcertChapterNotesClientProps {
  noteKey: string;
  title: MultilingualText;
  classLabel: string;
  subjectName: string;
  introText: MultilingualText;
  distinctions?: Distinction[];
  mcqs: MCQ[];
  assertions: Assertion[];
  blanks: FillInBlank[];
}

export default function NcertChapterNotesClient({
  noteKey,
  title,
  classLabel,
  subjectName,
  introText,
  distinctions = [],
  mcqs,
  assertions,
  blanks
}: NcertChapterNotesClientProps) {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = `ncert_unit:${noteKey}`;
  const isChapterCompleted = !!completedChapters[progressKey];

  const [selectedLang, setSelectedLang] = useState<'english' | 'hinglish' | 'hindi'>('english');
  const [selectedMcqs, setSelectedMcqs] = useState<Record<number, number>>({});
  const [showMcqAnswers, setShowMcqAnswers] = useState<Record<number, boolean>>({});
  const [showAssertionAnswers, setShowAssertionAnswers] = useState<Record<number, boolean>>({});
  const [revealedBlanks, setRevealedBlanks] = useState<Record<number, boolean>>({});
  const [showBlankHints, setShowBlankHints] = useState<Record<number, boolean>>({});

  // Sync preferences on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("nextsem_ncert_lang") as 'english' | 'hinglish' | 'hindi' | null;
      if (savedLang) setSelectedLang(savedLang);
    }
  }, []);

  const handleLangChange = (lang: 'english' | 'hinglish' | 'hindi') => {
    setSelectedLang(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_ncert_lang", lang);
    }
  };

  const getTranslation = (val: MultilingualText): string => {
    if (!val) return "";
    if (typeof val === "string") return val;
    return val[selectedLang] || val.english || "";
  };

  const handleMcqSelect = (mcqId: number, optionIdx: number) => {
    setSelectedMcqs(prev => ({ ...prev, [mcqId]: optionIdx }));
    setShowMcqAnswers(prev => ({ ...prev, [mcqId]: true }));
  };

  const toggleAssertionAnswer = (id: number) => {
    setShowAssertionAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBlankReveal = (id: number) => {
    setRevealedBlanks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBlankHint = (id: number) => {
    setShowBlankHints(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30">
      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-slate-950/85 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
        <Link
          href="/ncert"
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to Hub</span>
        </Link>
        <div className="flex items-center gap-2">
          <BookOpen size={14} className="text-blue-400" />
          <span className="text-xs font-black uppercase tracking-wider text-blue-300 font-outfit">NCERT Hub Notes</span>
        </div>
      </header>

      {/* Main content body */}
      <main className="flex-1 w-full max-w-[900px] mx-auto px-4 py-8 space-y-6">
        
        {/* Language selector bar */}
        <div className="flex items-center gap-1.5 bg-slate-950/40 border border-slate-850 p-2.5 rounded-2xl backdrop-blur-xl">
          <span className="text-[9px] font-black uppercase text-slate-500 tracking-wider pl-2 pr-1 hidden sm:inline">🌐 Lang:</span>
          {(["english", "hinglish", "hindi"] as const).map((lang) => {
            const labelMap = { english: "🇬🇧 English", hinglish: "🗣️ Hinglish", hindi: "🕉️ Hindi" };
            return (
              <button
                key={lang}
                onClick={() => handleLangChange(lang)}
                className={`flex-1 py-1.5 text-[11px] font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  selectedLang === lang
                    ? "bg-[#04AA6D] text-white shadow-sm font-black"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {labelMap[lang]}
              </button>
            );
          })}
        </div>

        {/* Intro Card */}
        <div className="relative rounded-3xl p-6 md:p-10 border border-white/5 bg-gradient-to-br from-blue-950/20 via-slate-950 to-[#07070c] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full w-fit">
            {classLabel} · {subjectName}
          </span>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white mt-4 uppercase font-outfit">
            {getTranslation(title)}
          </h1>
          <p className="text-xs text-slate-400 leading-relaxed mt-3 max-w-2xl font-medium">
            {getTranslation(introText)}
          </p>
        </div>

        <AdSenseBanner />

        {/* Section layout */}
        <section className="space-y-12">
          
          {/* 1. Distinctions */}
          {distinctions.length > 0 && (
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs">1</span>
                Key Distinctions &amp; Comparisons
              </h2>
              <div className="space-y-8">
                {distinctions.map((item, idx) => (
                  <div key={idx} className="bg-[#121217]/40 border border-slate-855 rounded-2xl p-5 overflow-hidden">
                    <h3 className="text-sm font-bold text-white mb-2">{getTranslation(item.title)}</h3>
                    <p className="text-xs text-slate-455 leading-relaxed mb-4">{getTranslation(item.desc)}</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-slate-800 bg-slate-900/50">
                            {item.table.headers.map((h, i) => (
                              <th key={i} className="p-3 font-black text-slate-350">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="border-b border-slate-850/50 hover:bg-white/1 font-medium">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 text-slate-400">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. MCQs */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs">2</span>
              Multiple Choice Questions (MCQs)
            </h2>
            <div className="space-y-6">
              {mcqs.map((mcq, idx) => {
                const selected = selectedMcqs[mcq.id];
                const showAnswer = showMcqAnswers[mcq.id];

                return (
                  <div key={mcq.id} className="bg-[#121217]/50 border border-slate-855 rounded-[24px] p-6 space-y-4">
                    <p className="text-xs text-slate-250 leading-relaxed font-bold">
                      <span className="text-slate-550 font-mono mr-1.5">{idx + 1}.</span>
                      {getTranslation(mcq.question)}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {mcq.options.map((opt, oIdx) => {
                        const isCorrect = oIdx === mcq.answer;
                        const isSelected = selected === oIdx;
                        
                        let btnStyle = "bg-slate-950 border-slate-800 text-slate-350 hover:border-slate-700 hover:text-white";
                        if (showAnswer) {
                          if (isCorrect) {
                            btnStyle = "bg-emerald-500/10 border-emerald-500/40 text-emerald-300";
                          } else if (isSelected) {
                            btnStyle = "bg-rose-500/10 border-rose-500/40 text-rose-300";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={showAnswer}
                            onClick={() => handleMcqSelect(mcq.id, oIdx)}
                            className={`p-3.5 border rounded-xl text-left text-xs font-semibold leading-relaxed transition-all cursor-pointer ${btnStyle}`}
                          >
                            {getTranslation(opt)}
                          </button>
                        );
                      })}
                    </div>
                    {showAnswer && (
                      <div className="mt-4 p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                        <span className="text-[10px] font-black text-emerald-450 uppercase tracking-widest block mb-1">
                          Explanation:
                        </span>
                        <p className="text-xs text-slate-450 leading-relaxed font-medium">{getTranslation(mcq.explanation)}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Assertion & Reasoning */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs">3</span>
              Assertion &amp; Reasoning Questions
            </h2>
            <div className="space-y-6">
              {assertions.map((item, idx) => {
                const reveal = showAssertionAnswers[item.id];

                return (
                  <div key={item.id} className="bg-[#121217]/50 border border-slate-855 rounded-[24px] p-6">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-3 font-mono">
                      Question {idx + 1}
                    </span>
                    <div className="space-y-2.5">
                      <div className="flex gap-3">
                        <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-850 text-[9px] font-black rounded h-fit mt-0.5">A</span>
                        <p className="text-xs font-black text-white leading-relaxed">
                          <strong>Assertion:</strong> {getTranslation(item.assertion)}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-850 text-[9px] font-black rounded h-fit mt-0.5">R</span>
                        <p className="text-xs font-black text-slate-300 leading-relaxed">
                          <strong>Reason:</strong> {getTranslation(item.reason)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-850/60 flex items-center justify-between">
                      <button
                        onClick={() => toggleAssertionAnswer(item.id)}
                        className="text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-300 tracking-wider flex items-center gap-1 cursor-pointer"
                      >
                        {reveal ? 'Hide Analysis' : 'Show Correct Option & Analysis'}
                      </button>
                    </div>
                    {reveal && (
                      <div className="mt-4 p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                        <span className="text-[10px] font-black text-emerald-450 uppercase tracking-widest block mb-1">
                          Correct Choice: ({item.correctOption})
                        </span>
                        <p className="text-xs text-slate-455 leading-relaxed mt-1">{getTranslation(item.explanation)}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Fill in the Blanks */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs">4</span>
              Fill in the Blanks
            </h2>
            <div className="space-y-4">
              {blanks.map((item, idx) => {
                const reveal = revealedBlanks[item.id];
                const showHint = showBlankHints[item.id];

                return (
                  <div key={item.id} className="bg-[#121217]/50 border border-slate-855 rounded-[20px] p-5">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <span className="font-bold text-white mr-1.5">{idx + 1}.</span>
                      {getTranslation(item.question)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5 items-center">
                      <button
                        onClick={() => toggleBlankReveal(item.id)}
                        className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-[10px] text-indigo-400 hover:text-white font-bold rounded-lg cursor-pointer"
                      >
                        {reveal ? `Answer: ${getTranslation(item.answer)}` : 'Reveal Answer'}
                      </button>
                      <button
                        onClick={() => toggleBlankHint(item.id)}
                        className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-[10px] text-amber-500 hover:text-amber-450 font-bold rounded-lg cursor-pointer"
                      >
                        {showHint ? `Hint: ${getTranslation(item.hint)}` : 'Show Hint'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Completion Section */}
          <div className="bg-slate-950/80 border border-slate-850 rounded-[28px] p-6 text-center mt-10">
            <h3 className="text-sm font-black text-white mb-2">Have you finished revising this chapter?</h3>
            <p className="text-xs text-slate-500 mb-4">Marking it completed will update your NCERT progress stats on the homepage!</p>
            {isChapterCompleted ? (
              <button
                onClick={() => markIncomplete(progressKey)}
                className="px-6 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-450 hover:bg-emerald-500/15 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <Check size={14} /> Chapter Completed
              </button>
            ) : (
              <button
                onClick={() => markCompleted(progressKey)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                Mark Chapter Completed
              </button>
            )}
          </div>

        </section>
      </main>

      <footer className="w-full py-6 text-center text-[10px] text-slate-700 border-t border-white/5 select-none mt-auto">
        © 2026 Nextsem Academy · NCERT Study Companion
      </footer>
    </div>
  );
}
