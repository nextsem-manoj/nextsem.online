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

export default function HistoryChapter10NotesPage() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:history-12-chapter-10';
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
      question: "The Permanent Settlement in Bengal was introduced in 1793 under which Governor-General?",
      options: [
        "Lord Warren Hastings",
        "Lord Charles Cornwallis",
        "Lord William Bentinck",
        "Lord Mountbatten"
      ],
      answer: 1,
      explanation: "The Permanent Settlement (Zamindari System) was introduced in Bengal by Governor-General Lord Charles Cornwallis in 1793."
    },
    {
      id: 2,
      question: "What was the 'Sunset Law' associated with the Permanent Settlement?",
      options: [
        "Taxes were reduced after sunset",
        "If payment did not arrive by sunset of the specified date, the Zamindari estate was auctioned off",
        "Peasants could not harvest crops after sunset",
        "It marked the end of trade routes at dusk"
      ],
      answer: 1,
      explanation: "Under the Sunset Law, if the Zamindar failed to pay the revenue demand by the sunset of the designated payment date, their estate was put up for public auction."
    },
    {
      id: 3,
      question: "In colonial records, the term 'Ryot' refers to:",
      options: [
        "A wealthy land purchaser",
        "A peasant or cultivator",
        "A local tax collector of the East India Company",
        "An armed guard of the Zamindar"
      ],
      answer: 1,
      explanation: "In official Indo-Persian records and British colonial documents, 'Ryot' (or raiyat) denotes a peasant cultivator."
    },
    {
      id: 4,
      question: "Who were the Santhals?",
      options: [
        "Colonial administrative officers",
        "A tribal community cleared for forest settlement in Rajmahal Hills",
        "Wealthy moneylenders of Deccan countryside",
        "A military regiment of the British army"
      ],
      answer: 1,
      explanation: "The Santhals were a tribal agricultural community who settled in the Rajmahal Hills, clearing forests for settled plow cultivation, later rebelling against British taxation."
    },
    {
      id: 5,
      question: "What was the Fifth Report, submitted to the British Parliament in 1812?",
      options: [
        "A report on the conditions of English factories",
        "A document detailing East India Company's administration, revenue, and activities in India",
        "A charter to build railways in Madras presidency",
        "A list of military expenditure in Burma"
      ],
      answer: 1,
      explanation: "The Fifth Report was a comprehensive report on the administration and activities of the East India Company in India, submitted to the British Parliament in 1812."
    }
  ];

  const shortAnswers: ShortAnswer[] = [
    { question: "What was the Jotedar class?", answer: "Jotedars were rich peasants in Bengal who controlled large areas of land, active local trade, and exerted local influence over poor cultivators, often opposing Zamindars." },
    { question: "Define the Ryotwari System.", answer: "The Ryotwari system was a land revenue settlement introduced in Southern India (Madras/Bombay) where revenue was settled directly with individual cultivators (ryots) and revised periodically." },
    { question: "Who was Francis Buchanan?", answer: "Francis Buchanan was a physician and explorer who traveled extensively through the territories of the East India Company, writing detailed journals on agriculture, geography, and mineral wealth." },
    { question: "Why did Zamindars repeatedly default on land revenue payments?", answer: "1) Initial revenue demands were exceptionally high, 2) Agricultural prices were low, making payment difficult, 3) Revenue was fixed regardless of harvest quality." }
  ];

  const distinctions: Distinction[] = [
    {
      title: "Permanent Settlement vs. Ryotwari Settlement",
      desc: "Comparison of the two main land revenue systems introduced by the British in India.",
      table: {
        headers: ["Feature", "Permanent Settlement", "Ryotwari Settlement"],
        rows: [
          ["Region", "Bengal, Bihar, and Orissa.", "Bombay and Madras Presidencies."],
          ["Intermediary", "Zamindar acted as the middleman owner.", "No middlemen; direct deal between State and Ryot (cultivator)."],
          ["Revenue Rates", "Fixed permanently; could not be raised in the future.", "Not fixed permanently; revised periodically after 30 years."]
        ]
      }
    },
    {
      title: "Paharias vs. Santhals",
      desc: "Contrasting the two groups in the Rajmahal Hills.",
      table: {
        headers: ["Feature", "Paharias", "Santhals"],
        rows: [
          ["Livelihood", "Forest dwellers, shifting cultivators (used hoes), hunters.", "Settled agriculturalists (used plows), cleared forest land."],
          ["Relationship with Forest", "Protected forests, resisted external controls.", "Brought in by British to clear forests and settle."],
          ["Conflict", "Clashed with settled plowers and colonial authorities.", "Rebelled in 1855-56 against colonial tax demands and money lenders."]
        ]
      }
    }
  ];

  const assertions: Assertion[] = [
    {
      id: 1,
      assertion: "Zamindars often resorted to fictitious sales during estate auctions.",
      reason: "It was a strategy to retain control of their estates while evading high British revenue demands.",
      correctOption: "A",
      explanation: "Both statements are true. Zamindars transferred property to family members (exempt from auction laws) or had agents bid fictitiously, failing to pay the bid money so the estate stayed with them."
    },
    {
      id: 2,
      assertion: "The Fifth Report was completely unbiased and objective.",
      reason: "It was prepared by a select committee to scrutinize the monopoly and misrule of the East India Company.",
      correctOption: "D",
      explanation: "The assertion is false; the report was highly biased as it wanted to highlight the company's maladministration to argue for ending its monopoly. The reason is true."
    }
  ];

  const blanks: FillInBlank[] = [
    { id: 1, question: "The Santhal Rebellion occurred during the years ______.", answer: "1855-1856", hint: "Just a couple of years before the great revolt of 1857." },
    { id: 2, question: "In the Deccan countryside, the Ryotwari system was introduced in the ______ Presidency.", answer: "Bombay", hint: "Known for cotton boom and subsequent agrarian riots." },
    { id: 3, question: "The rich peasants in Bengal who often held local power over Zamindars were known as ______.", answer: "Jotedars", hint: "They lived in villages directly, unlike absentee Zamindars." }
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
            Colonialism &amp; the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-extrabold">Countryside</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Investigate the revenue settlements, agrarian relationships, Deccan riots, and Santhal resistance through official records and archives.
          </p>
        </section>

        {/* Visual Roadmap */}
        <section className="bg-slate-950/70 border border-slate-850 rounded-[28px] p-6 mb-8">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Agrarian Revenue Settlements Timeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-500 font-bold uppercase">1793</span>
              <span className="text-xs font-black text-white">Permanent Settlement</span>
              <span className="block text-[9px] text-purple-450 mt-1">Bengal / Cornwallis</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-500 font-bold uppercase">1812</span>
              <span className="text-xs font-black text-white">Fifth Report Submitted</span>
              <span className="block text-[9px] text-indigo-455 mt-1">British Parliament</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-500 font-bold uppercase">1820s</span>
              <span className="text-xs font-black text-white">Ryotwari System</span>
              <span className="block text-[9px] text-pink-455 mt-1">Bombay &amp; Southern India</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-500 font-bold uppercase">1855</span>
              <span className="text-xs font-black text-white">Santhal Revolt</span>
              <span className="block text-[9px] text-red-455 mt-1">Rajmahal Hills</span>
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
              Think of Colonial revenue systems like cloud hosting subscription tiers. The **Zamindari System** is like a reseller account: the government charges a flat annual rate, and the reseller (Zamindar) must squeeze tenants for whatever they can get. The **Sunset Law** is like an automated billing engine: if your payment misses the midnight cron deadline by a minute, the system instantly deprovisions and auctions off your server! 🖥️
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
