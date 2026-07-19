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

export default function EconomicsChapter3NotesPage() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:economics-11-chapter-3';
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
      question: "Which of the following was a primary reason for introducing the economic reforms in India in 1991?",
      options: [
        "High accumulation of foreign exchange reserves",
        "Severe balance of payments (BOP) crisis and inflation",
        "Decreasing fiscal deficit of the government",
        "Introduction of the computer revolution"
      ],
      answer: 1,
      explanation: "In 1991, India faced a severe Balance of Payments crisis where foreign exchange reserves fell to a level insufficient to finance imports for even two weeks, combined with high inflation and fiscal deficits."
    },
    {
      id: 2,
      question: "To obtain financial help during the 1991 crisis, India approached which international institutions?",
      options: [
        "World Health Organisation & UNICEF",
        "International Monetary Fund (IMF) & World Bank (IBRD)",
        "World Trade Organisation & UNESCO",
        "Asian Development Bank & New Development Bank"
      ],
      answer: 1,
      explanation: "India mortgaged gold reserves and requested loans of $7 billion from the IMF and the World Bank to bail out its economy."
    },
    {
      id: 3,
      question: "Under Liberalisation, the requirement of industrial licensing was abolished for all except which category?",
      options: [
        "Information Technology and Telecom",
        "Textiles and Agriculture",
        "Alcohol, Cigarettes, Hazardous Chemicals, Industrial Explosives, Electronics Aerospace & Defense equipment",
        "Banking, Finance, and Insurance"
      ],
      answer: 2,
      explanation: "Industrial licensing was abolished for almost all product categories except a short list related to security, health, and environment concerns (like alcohol, hazardous chemicals, explosives, etc.)."
    },
    {
      id: 4,
      question: "The process of transferring ownership, control, or management of state-owned enterprises to the private sector is called:",
      options: [
        "Globalisation",
        "Privatisation",
        "Liberalisation",
        "Centralisation"
      ],
      answer: 1,
      explanation: "Privatisation involves selling government equity in Public Sector Undertakings (PSUs) through disinvestment or outright strategic sales."
    },
    {
      id: 5,
      question: "What is Outsourcing in the context of Globalisation?",
      options: [
        "Hiring workers from other states within the country",
        "Hiring regular services from external sources, mostly other countries (e.g. IT, BPO)",
        "Buying machinery from internal manufacturers",
        "Sending governmental delegates for foreign summits"
      ],
      answer: 1,
      explanation: "Outsourcing is a major outcome of globalisation where companies hire external agencies in low-wage countries like India to handle business tasks (like customer support or accounting)."
    }
  ];

  const shortAnswers: ShortAnswer[] = [
    { question: "What is Disinvestment?", answer: "Disinvestment refers to the selling of a part of equity of Public Sector Enterprises (PSEs) to the private sector/public to raise funds and improve efficiency." },
    { question: "Define Globalisation.", answer: "Globalisation is the integration of the domestic economy with the world economy through trade, investment, technology flows, and labor mobility." },
    { question: "What was the 'License Raj'?", answer: "License Raj refers to the strict system of government licenses, regulations, and permits required to start, expand, or produce goods in India prior to 1991." },
    { question: "Name the two types of fiscal/structural measures introduced under LPG.", answer: "1) Stabilisation measures (short-term to control inflation and correct BOP), 2) Structural reform measures (long-term to improve efficiency and remove rigidities)." }
  ];

  const distinctions: Distinction[] = [
    {
      title: "Stabilisation Measures vs. Structural Reforms",
      desc: "Distinction based on time horizon, objective, and policy actions under the 1991 reforms.",
      table: {
        headers: ["Feature", "Stabilisation Measures", "Structural Reforms"],
        rows: [
          ["Time Horizon", "Short-term measures.", "Long-term measures."],
          ["Primary Objective", "To correct weakness in the Balance of Payments and control inflation.", "To improve international competitiveness and efficiency of the economy."],
          ["Key Actions", "Devaluing rupee, tight monetary control, fiscal discipline.", "Deregulating industries, tax reform, financial sector reforms, trade liberalisation."]
        ]
      }
    },
    {
      title: "Liberalisation vs. Privatisation",
      desc: "Comparison of policy orientations regarding market restrictions and state ownership.",
      table: {
        headers: ["Feature", "Liberalisation", "Privatisation"],
        rows: [
          ["Definition", "Removing government controls, licenses, quotas, and barriers.", "Transferring ownership/management of public sector units to private hands."],
          ["Mechanism", "Deregulating rules and permitting free entry of private firms.", "Disinvestment of PSU shares, strategic joint ventures, or outright sales."],
          ["Focus", "Promoting open market competition.", "Improving corporate governance and operational efficiency."]
        ]
      }
    }
  ];

  const assertions: Assertion[] = [
    {
      id: 1,
      assertion: "Outsourcing became a highly popular business practice in India post-1991 reforms.",
      reason: "India offered a large pool of skilled, English-speaking professionals at relatively lower wage rates.",
      correctOption: "A",
      explanation: "Both statements are true, and the reason correctly explains why MNCs chose India as their primary destination for outsourcing (low wage costs and high skill availability)."
    },
    {
      id: 2,
      assertion: "The government classifications of Maharatnas, Navratnas, and Miniratnas were created to privatise public sector enterprises.",
      reason: "Classification grant greater financial and managerial autonomy to high-performing PSUs to make them globally competitive.",
      correctOption: "D",
      explanation: "The assertion is false because these statuses were created to improve the efficiency and keep ownership of public enterprises, not to privatise them. The reason is true as it describes the autonomy granted."
    }
  ];

  const blanks: FillInBlank[] = [
    { id: 1, question: "The New Economic Policy (NEP) was introduced in India in the month of July of the year ______.", answer: "1991", hint: "The year India underwent major structural LPG reforms." },
    { id: 2, question: "The World Trade Organisation (WTO) was established in the year ______ as the successor to GATT.", answer: "1995", hint: "Formed to promote multilateral trade agreements." },
    { id: 3, question: "______ is the policy of removing trade barriers like tariffs and quantitative import quotas.", answer: "Liberalisation", hint: "Making trade policies liberal." }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30 relative pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-emerald-950/5 blur-[130px] pointer-events-none" />

      <header className="h-16 border-b border-slate-850/50 bg-slate-950/85 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <Link href="/ncert" className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all">
          <ArrowLeft size={16} />
          <span>Back to NCERT Hub</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <BookOpen size={14} className="text-emerald-400" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-300">Class 11 Economics</span>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 py-8 relative z-10">
        <section className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            Revision Notes &amp; Interactive Lab
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none mb-3">
            Liberalisation, Privatisation &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400 font-extrabold">Globalisation</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Understand the LPG reforms, the reasons for economic overhaul, structural adjustments, and trade deregulations of 1991.
          </p>
        </section>

        <section className="bg-slate-950/70 border border-slate-850 rounded-[28px] p-6 mb-8">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            The LPG Framework (1991)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-[#121217] border border-white/5 p-4 rounded-2xl">
              <span className="block text-lg mb-1">🔓</span>
              <span className="block text-[10px] text-emerald-400 font-bold uppercase">Liberalisation</span>
              <span className="text-xs text-slate-400">Removing license requirements, barriers &amp; price controls.</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-4 rounded-2xl">
              <span className="block text-lg mb-1">🏢</span>
              <span className="block text-[10px] text-indigo-400 font-bold uppercase">Privatisation</span>
              <span className="text-xs text-slate-400">Selling government equity in public enterprises.</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-4 rounded-2xl">
              <span className="block text-lg mb-1">🌍</span>
              <span className="block text-[10px] text-purple-400 font-bold uppercase">Globalisation</span>
              <span className="text-xs text-slate-400">Integrating domestic market with global economies.</span>
            </div>
          </div>
        </section>

        <section className="mb-10 bg-indigo-950/20 border border-indigo-500/25 p-5 rounded-2xl flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
            <Code2 size={18} className="text-indigo-400" />
          </div>
          <div>
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest block mb-1">Developer Metaphor</span>
            <p className="text-xs text-slate-450 leading-relaxed">
              Think of the pre-1991 Indian economy like a closed local development server behind a strict firewall (License Raj). Introducing **LPG Reforms** is like refactoring the monolithic codebase into open microservices, opening the API ports, setting up public routers, and deploying globally to allow secure third-party integrations! 🚀
            </p>
          </div>
        </section>

        {/* INTERACTIVE TEST BANK */}
        <section className="space-y-12">
          {/* MCQs */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs">1</span>
              Paragraph-Level MCQs
            </h2>
            <div className="space-y-6">
              {mcqs.map((mcq, mIdx) => {
                const isCorrect = selectedMcqs[mcq.id] === mcq.answer;
                const reveal = showMcqAnswers[mcq.id];
                return (
                  <div key={mcq.id} className="bg-[#121217]/50 border border-slate-850 rounded-[24px] p-5 md:p-6 text-left">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Question {mIdx + 1} of {mcqs.length}</span>
                    <h4 className="text-sm font-black text-white mt-1 mb-4 leading-snug">{mcq.question}</h4>
                    <div className="space-y-2">
                      {mcq.options.map((opt, oIdx) => {
                        const isChosen = selectedMcqs[mcq.id] === oIdx;
                        let btnStyle = "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300";
                        if (isChosen) {
                          btnStyle = isCorrect ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400" : "bg-red-500/10 border-red-500/40 text-red-400";
                        }
                        if (reveal && oIdx === mcq.answer) {
                          btnStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-300";
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
                        <span className="text-[9px] font-black text-emerald-450 uppercase tracking-widest block mb-1">Correct Answer: {mcq.options[mcq.answer]}</span>
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
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs">2</span>
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
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs">3</span>
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
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs">4</span>
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
                        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-1">Correct Choice: ({item.correctOption})</span>
                        <p className="text-xs text-slate-450 leading-relaxed mt-1">{item.explanation}</p>
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
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs">5</span>
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
              <button onClick={() => markCompleted(progressKey)} className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5">
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
