"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles, Check, HelpCircle, AlertCircle, RefreshCw, Award, Code2 } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

interface MCQ {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface ShortAnswer {
  question: string;
  answer: string;
}

interface Distinction {
  title: string;
  desc: string;
  table: { headers: string[]; rows: string[][] };
}

interface Assertion {
  id: number;
  assertion: string;
  reason: string;
  correctOption: string;
  explanation: string;
}

interface FillInBlank {
  id: number;
  question: string;
  answer: string;
  hint: string;
}

export default function HistoryChapter15NotesPage() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:history-12-chapter-15';
  const isChapterCompleted = !!completedChapters[progressKey];

  const [selectedMcqs, setSelectedMcqs] = useState<Record<number, number>>({});
  const [showMcqAnswers, setShowMcqAnswers] = useState<Record<number, boolean>>({});
  const [showShortAnswers, setShowShortAnswers] = useState<Record<number, boolean>>({});
  const [showAssertionAnswers, setShowAssertionAnswers] = useState<Record<number, boolean>>({});
  const [revealedBlanks, setRevealedBlanks] = useState<Record<number, boolean>>({});
  const [showBlankHints, setShowBlankHints] = useState<Record<number, boolean>>({});

  const mcqs: MCQ[] = [
    {
      id: 1,
      question: "The Constituent Assembly of India held its first session on which date?",
      options: [
        "August 15, 1947",
        "December 9, 1946",
        "January 26, 1950",
        "November 26, 1949"
      ],
      answer: 1,
      explanation: "The Constituent Assembly met for the first time on December 9, 1946, in the Constitution Hall (now Central Hall of Parliament)."
    },
    {
      id: 2,
      question: "Who introduced the historic 'Objectives Resolution' in the Constituent Assembly on December 13, 1946?",
      options: [
        "Dr. B.R. Ambedkar",
        "Jawaharlal Nehru",
        "Dr. Rajendra Prasad",
        "Sardar Vallabhbhai Patel"
      ],
      answer: 1,
      explanation: "Jawaharlal Nehru introduced the Objectives Resolution, outlining the ideals and guiding principles behind the framing of India's Constitution."
    },
    {
      id: 3,
      question: "Who served as the Chairman of the Drafting Committee of the Constitution?",
      options: [
        "Dr. Rajendra Prasad",
        "Dr. B.R. Ambedkar",
        "K.M. Munshi",
        "Alladi Krishnaswamy Iyer"
      ],
      answer: 1,
      explanation: "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee, responsible for writing the draft clauses of the Constitution."
    },
    {
      id: 4,
      question: "During the debates, who made a strong and passionate plea for reserving powers and resources to the provinces (states)?",
      options: [
        "B. R. Ambedkar",
        "K. Santhanam",
        "Jawaharlal Nehru",
        "G.B. Pant"
      ],
      answer: 1,
      explanation: "K. Santhanam from Madras argued strongly that a hyper-centralised government would break down and pleaded for fiscal and legislative powers for provinces."
    },
    {
      id: 5,
      question: "The Constitution of India was formally signed and adopted on November 26, 1949, and came into force on:",
      options: [
        "August 15, 1947",
        "January 26, 1950",
        "January 30, 1948",
        "August 26, 1950"
      ],
      answer: 1,
      explanation: "The Constitution came into force on January 26, 1950, celebrated as Republic Day, to commemorate the Purna Swaraj declaration of 1930."
    }
  ];

  const shortAnswers: ShortAnswer[] = [
    { question: "What was the Objectives Resolution?", answer: "A resolution introduced by Nehru defining India as an Independent Sovereign Republic, guaranteeing justice, equality, and freedom to all citizens." },
    { question: "Name the President of the Constituent Assembly.", answer: "Dr. Rajendra Prasad." },
    { question: "Who was the constitutional advisor to the Constituent Assembly?", answer: "Sir B.N. Rau, who prepared background files and drafts based on other constitutions." },
    { question: "What was Dr. Ambedkar's stance on the language issue?", answer: "He supported Hindustani or English initially, but as consensus grew, Hindi was declared the official language of the Union, with English continuing for official purposes." }
  ];

  const distinctions: Distinction[] = [
    {
      title: "Union List vs. State List vs. Concurrent List",
      desc: "How the Constitution divides legislative jurisdiction between the Center and the States.",
      table: {
        headers: ["Feature", "Union List", "State List", "Concurrent List"],
        rows: [
          ["Legislative Authority", "Only the Union Parliament can make laws.", "Only State Legislatures can make laws.", "Both Parliament and State Legislatures can make laws."],
          ["Subject Nature", "National importance (Defense, Foreign Affairs, Currency).", "Local/provincial importance (Police, Public Health, Agriculture).", "Common interest (Education, Forests, Marriage)."],
          ["Conflict Resolution", "Not applicable.", "Not applicable.", "Union law overrides State law in case of conflict."]
        ]
      }
    },
    {
      title: "Separate Electorates vs. Joint Electorates with Reservation",
      desc: "The debate over minority representation in legislatures.",
      table: {
        headers: ["Feature", "Separate Electorates", "Joint Electorates with Reservation"],
        rows: [
          ["Mechanism", "Only voters of a specific community elect their representative.", "All voters elect, but the seat is reserved for a candidate of a specific community."],
          ["Debate Stance", "Supported by some minority leaders (e.g. Pokker Bahadur) for protection.", "Supported by Ambedkar and Patel to prevent partition and communal division."],
          ["Adopted Format", "Rejected by the Constituent Assembly.", "Adopted for Scheduled Castes and Scheduled Tribes."]
        ]
      }
    }
  ];

  const assertions: Assertion[] = [
    {
      id: 1,
      assertion: "The Constituent Assembly had representatives elected through universal adult franchise.",
      reason: "Members of the assembly were elected indirectly by the members of the Provincial Legislative Assemblies.",
      correctOption: "D",
      explanation: "The assertion is false; the Constituent Assembly was not elected through universal adult franchise (only about 10-15% of the population had voting rights at that time). The reason is true."
    },
    {
      id: 2,
      assertion: "Dr. B.R. Ambedkar advocated for a strong central government.",
      reason: "He believed that a strong center was necessary to maintain peace, coordinate economic planning, and protect marginalized castes from local dominant groups.",
      correctOption: "A",
      explanation: "Both statements are true. Ambedkar felt local/provincial administrations were dominated by upper-caste groups, and a strong center would be better situated to protect minorities and Scheduled Castes."
    }
  ];

  const blanks: FillInBlank[] = [
    { id: 1, question: "The Constituent Assembly met for a total of ______ days spread over three years.", answer: "165", hint: "It took 2 years, 11 months, and 17 days of active drafts." },
    { id: 2, question: "______ was the Congress leader who chaired the Advisory Committee on Fundamental Rights and Minorities.", answer: "Sardar Vallabhbhai Patel", hint: "Known as the Iron Man of India." },
    { id: 3, question: "The Indian Constitution is the longest ______ constitution in the world.", answer: "written", hint: "It contains hundreds of articles and schedules." }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30 relative pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-950/5 blur-[130px] pointer-events-none" />

      <header className="h-16 border-b border-slate-850/50 bg-slate-950/85 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <Link href="/ncert" className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all">
          <ArrowLeft size={16} />
          <span>Back to NCERT Hub</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <BookOpen size={14} className="text-purple-400" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-purple-300">Class 12 History</span>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 py-8 relative z-10">
        <section className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            Revision Notes &amp; Interactive Lab
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none mb-3">
            Framing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-extrabold">Constitution</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Examine the debates, issues of rights, language, separate electorates, and division of powers in the Constituent Assembly (1946-1949).
          </p>
        </section>

        {/* Visual Map */}
        <section className="bg-slate-950/70 border border-slate-850 rounded-[28px] p-6 mb-8">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            The Constitutional Pipeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-550 font-bold uppercase">Dec 9, 1946</span>
              <span className="text-xs font-black text-white">First Session</span>
              <span className="block text-[9px] text-purple-450 mt-1">Assembly Convenes</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-550 font-bold uppercase">Dec 13, 1946</span>
              <span className="text-xs font-black text-white">Objectives Resolution</span>
              <span className="block text-[9px] text-indigo-455 mt-1">Nehru outlines principles</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-555 font-bold uppercase">1947-1949</span>
              <span className="text-xs font-black text-white">Debates &amp; Drafts</span>
              <span className="block text-[9px] text-pink-455 mt-1">Ambedkar drafts clauses</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-555 font-bold uppercase">Jan 26, 1950</span>
              <span className="text-xs font-black text-white">Constitution in Force</span>
              <span className="block text-[9px] text-red-455 mt-1">Republic Day</span>
            </div>
          </div>
        </section>

        {/* Metaphor */}
        <section className="mb-10 bg-indigo-950/20 border border-indigo-500/25 p-5 rounded-2xl flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
            <Code2 size={18} className="text-indigo-400" />
          </div>
          <div>
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest block mb-1">Developer Metaphor</span>
            <p className="text-xs text-slate-450 leading-relaxed">
              Think of the Constituent Assembly like a massive committee compiling an RFC (Request for Comments) specification for a new distributed OS (India). The **Drafting Committee (led by Dr. Ambedkar)** is the core development maintainer group. **Fundamental Rights** are the security policies and system permissions granted to every user thread (citizen) by default. The debates on provincial autonomy vs. central authority are like deciding the balance of compute loads between local edge nodes (states) and the central load balancer (union government)! 🖥️
            </p>
          </div>
        </section>

        {/* TEST BANK */}
        <section className="space-y-12">
          {/* MCQs */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-450 border border-purple-500/20 rounded-lg text-xs">1</span>
              Paragraph-Level MCQs
            </h2>
            <div className="space-y-6">
              {mcqs.map((mcq, mIdx) => {
                const isCorrect = selectedMcqs[mcq.id] === mcq.answer;
                const reveal = showMcqAnswers[mcq.id];
                return (
                  <div key={mcq.id} className="bg-[#121217]/50 border border-slate-850 rounded-[24px] p-5 md:p-6 text-left">
                    <span className="text-[10px] text-slate-550 font-bold uppercase tracking-wider">Question {mIdx + 1} of {mcqs.length}</span>
                    <h4 className="text-sm font-black text-white mt-1 mb-4 leading-snug">{mcq.question}</h4>
                    <div className="space-y-2">
                      {mcq.options.map((opt, oIdx) => {
                        const isChosen = selectedMcqs[mcq.id] === oIdx;
                        let btnStyle = "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300";
                        if (isChosen) {
                          btnStyle = isCorrect ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400" : "bg-red-500/10 border-red-500/40 text-red-400";
                        }
                        if (reveal && oIdx === mcq.answer) {
                          btnStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-305";
                        }
                        return (
                          <button
                            key={oIdx}
                            onClick={() => setSelectedMcqs(p => ({ ...p, [mcq.id]: oIdx }))}
                            className={`w-full text-left p-3.5 border rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isChosen && <span>{isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>}
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <button onClick={() => setShowMcqAnswers(p => ({ ...p, [mcq.id]: !p[mcq.id] }))} className="text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-300 tracking-wider cursor-pointer">
                        {reveal ? 'Hide Explanation' : 'View Answer & Explanation'}
                      </button>
                    </div>
                    {reveal && (
                      <div className="mt-3.5 p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest block mb-1">Correct Answer: {mcq.options[mcq.answer]}</span>
                        <p className="text-xs text-slate-400 leading-relaxed">{mcq.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Short Answers */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-450 border border-purple-500/20 rounded-lg text-xs">2</span>
              1-Mark Conceptual Questions
            </h2>
            <div className="space-y-4">
              {shortAnswers.map((sa, idx) => {
                const reveal = showShortAnswers[idx];
                return (
                  <div key={idx} className="bg-[#121217]/50 border border-slate-850 rounded-[20px] p-5">
                    <h4 className="text-xs font-black text-white leading-snug flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[9px] text-slate-500 shrink-0 mt-0.5">Q</span>
                      <span>{sa.question}</span>
                    </h4>
                    <button onClick={() => setShowShortAnswers(p => ({ ...p, [idx]: !p[idx] }))} className="mt-3 text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-300 tracking-wider cursor-pointer">
                      {reveal ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {reveal && <p className="mt-2.5 text-xs text-emerald-400 leading-relaxed border-l-2 border-emerald-500/30 pl-3">{sa.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Distinctions */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-450 border border-purple-500/20 rounded-lg text-xs">3</span>
              2-Mark Comparative Distinctions
            </h2>
            <div className="space-y-6">
              {distinctions.map((dist, dIdx) => (
                <div key={dIdx} className="bg-[#121217]/50 border border-slate-850 rounded-[26px] p-5 md:p-6">
                  <h3 className="text-sm font-black text-white leading-tight mb-1">{dist.title}</h3>
                  <p className="text-[11px] text-slate-400 mb-4">{dist.desc}</p>
                  <div className="overflow-x-auto border border-slate-850 rounded-2xl">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-900/80 border-b border-slate-850">
                          {dist.table.headers.map((h, idx) => (
                            <th key={idx} className="p-3.5 font-black text-slate-400 uppercase tracking-wider text-[10px]">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-850 bg-[#0c0c14]/40">
                        {dist.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-900/10 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`p-3.5 leading-relaxed ${cIdx === 0 ? 'font-bold text-white' : 'text-slate-400'}`}>{cell}</td>
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

          {/* Assertions */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-450 border border-purple-500/20 rounded-lg text-xs">4</span>
              3-Mark Assertion &amp; Reasoning
            </h2>
            <div className="space-y-6">
              {assertions.map((item, idx) => {
                const reveal = showAssertionAnswers[item.id];
                return (
                  <div key={item.id} className="bg-[#121217]/50 border border-slate-850 rounded-[24px] p-5 md:p-6 text-left">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Exercise {idx + 1} of {assertions.length}</span>
                    <div className="mt-2 space-y-3">
                      <div className="flex gap-3">
                        <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-850 text-[9px] font-black rounded h-fit mt-0.5">A</span>
                        <p className="text-xs font-black text-white leading-relaxed">**Assertion:** {item.assertion}</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-850 text-[9px] font-black rounded h-fit mt-0.5">R</span>
                        <p className="text-xs font-black text-slate-300 leading-relaxed">**Reason:** {item.reason}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-850/60 flex items-center justify-between">
                      <button onClick={() => setShowAssertionAnswers(p => ({ ...p, [item.id]: !p[item.id] }))} className="text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-300 tracking-wider cursor-pointer">
                        {reveal ? 'Hide Analysis' : 'Show Correct Option & Analysis'}
                      </button>
                    </div>
                    {reveal && (
                      <div className="mt-4 p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                        <span className="text-[10px] font-black text-emerald-450 uppercase tracking-widest block mb-1">Correct Choice: ({item.correctOption})</span>
                        <p className="text-xs text-slate-455 leading-relaxed mt-1">{item.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fill in Blanks */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-purple-500/10 text-purple-450 border border-purple-500/20 rounded-lg text-xs">5</span>
              Fill in the Blanks
            </h2>
            <div className="space-y-4">
              {blanks.map((item, idx) => {
                const reveal = revealedBlanks[item.id];
                const showHint = showBlankHints[item.id];
                return (
                  <div key={item.id} className="bg-[#121217]/50 border border-slate-855 rounded-[20px] p-5">
                    <p className="text-xs text-slate-300 leading-relaxed"><span className="font-bold text-white mr-1.5">{idx + 1}.</span>{item.question}</p>
                    <div className="mt-3 flex flex-wrap gap-2.5 items-center">
                      <button onClick={() => setRevealedBlanks(p => ({ ...p, [item.id]: !p[item.id] }))} className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-[10px] text-indigo-400 hover:text-white font-bold rounded-lg cursor-pointer">
                        {reveal ? `Answer: ${item.answer}` : 'Reveal Answer'}
                      </button>
                      <button onClick={() => setShowBlankHints(p => ({ ...p, [item.id]: !p[item.id] }))} className="px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-slate-700 text-[10px] text-amber-500 hover:text-amber-450 font-bold rounded-lg cursor-pointer">
                        {showHint ? `Hint: ${item.hint}` : 'Show Hint'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Completion */}
          <div className="bg-slate-950/80 border border-slate-850 rounded-[28px] p-6 text-center mt-10">
            <h3 className="text-sm font-black text-white mb-2">Have you finished revising this chapter?</h3>
            <p className="text-xs text-slate-500 mb-4">Marking it completed will update your NCERT progress stats on the homepage!</p>
            {isChapterCompleted ? (
              <button onClick={() => markIncomplete(progressKey)} className="px-6 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-450 hover:bg-emerald-500/15 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5">
                <Check size={14} /> Chapter Completed
              </button>
            ) : (
              <button onClick={() => markCompleted(progressKey)} className="px-6 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5">
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
