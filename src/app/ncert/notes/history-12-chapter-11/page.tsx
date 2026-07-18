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

export default function HistoryChapter11NotesPage() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:history-12-chapter-11';
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
      question: "The great mutiny-revolt of 1857 broke out first in which cantonment on May 10, 1857?",
      options: [
        "Barrackpore",
        "Meerut",
        "Lucknow",
        "Ambala"
      ],
      answer: 1,
      explanation: "On May 10, 1857, the sepoys in the cantonment of Meerut broke out in mutiny, marching subsequently to Delhi."
    },
    {
      id: 2,
      question: "Who was declared the symbolic leader of the 1857 Revolt by the rebel sepoys?",
      options: [
        "Nana Sahib",
        "Mughal Emperor Bahadur Shah Zafar",
        "Rani Laxmibai of Jhansi",
        "Kunwar Singh of Bihar"
      ],
      answer: 1,
      explanation: "On reaching Delhi, the sepoys appealed to the old Mughal Emperor, Bahadur Shah Zafar, to accept the leadership of the revolt."
    },
    {
      id: 3,
      question: "The Subsidiary Alliance system, which stripped princely states of military autonomy, was introduced by:",
      options: [
        "Lord Dalhousie",
        "Lord Wellesley",
        "Lord Charles Canning",
        "Lord Warren Hastings"
      ],
      answer: 1,
      explanation: "The Subsidiary Alliance system was devised by Lord Wellesley in 1798. Under it, the ally state had to maintain British troops and let British handle foreign affairs."
    },
    {
      id: 4,
      question: "Which state was described by Lord Dalhousie as 'a cherry that will drop into our mouth one day'?",
      options: [
        "Jhansi",
        "Awadh",
        "Satara",
        "Punjab"
      ],
      answer: 1,
      explanation: "In 1851, Governor-General Lord Dalhousie described the Kingdom of Awadh as 'a cherry that will drop into our mouth one day'. It was annexed in 1856."
    },
    {
      id: 5,
      question: "Which British officer was famous for capturing Delhi during the counter-insurgency operations?",
      options: [
        "Sir Colin Campbell",
        "John Nicholson",
        "Henry Havelock",
        "Hugh Rose"
      ],
      answer: 1,
      explanation: "Delhi was recaptured in September 1857 by British forces led by John Nicholson, who was mortally wounded during the operations."
    }
  ];

  const shortAnswers: ShortAnswer[] = [
    { question: "What immediate cause sparked the mutiny among sepoys?", answer: "The introduction of the Enfield Rifle, which used cartridges rumored to be greased with the fat of cows and pigs (offensive to Hindu and Muslim sepoys)." },
    { question: "Who was Shah Mal?", answer: "Shah Mal was a local rebel leader in Barout, Uttar Pradesh, who mobilized the villagers (chaurasi des) and cultivators, organizing supplies and intelligence network for the rebels." },
    { question: "What was the role of the Christian missionaries in triggering rumors?", answer: "Sepoys feared that the British government was actively backing Christian missionaries to convert Indians, destroy local caste networks, and introduce Western customs." },
    { question: "Mention two major centers of the 1857 Revolt and their leaders.", answer: "1) Jhansi (Rani Laxmibai), 2) Kanpur (Nana Sahib / Tantia Tope)." }
  ];

  const distinctions: Distinction[] = [
    {
      title: "Mutiny vs. Revolt (Rebellion)",
      desc: "Understanding the terminological distinction in colonial history.",
      table: {
        headers: ["Feature", "Mutiny", "Revolt (Rebellion)"],
        rows: [
          ["Definition", "A collective disobedience of military authority by soldiers.", "A wider uprising of civilian populations against state authority."],
          ["Participants", "Sepoys, infantrymen, and cavalrymen in garrisons.", "Peasants, talukdars, artisans, religious leaders, and general public."],
          ["Scope", "Usually starts within military units/cantonments.", "Encompasses entire districts, cities, and countrysides."]
        ]
      }
    },
    {
      title: "Subsidiary Alliance vs. Doctrine of Lapse",
      desc: "Contrasting two aggressive annexation policies of the East India Company.",
      table: {
        headers: ["Feature", "Subsidiary Alliance (1798)", "Doctrine of Lapse (1848)"],
        rows: [
          ["Devised By", "Lord Wellesley.", "Lord Dalhousie."],
          ["Mechanism", "State surrenders foreign relations and maintains a British resident/army.", "If a princely state ruler died without a natural heir, the state was annexed."],
          ["Example Annexation", "Hyderabad, Awadh (partially in 1801).", "Jhansi, Satara, Nagpur, Sambalpur."]
        ]
      }
    }
  ];

  const assertions: Assertion[] = [
    {
      id: 1,
      assertion: "The annexation of Awadh in 1856 dispossessed the local Talukdars.",
      reason: "The Summary Settlement of 1856 aimed to remove intermediaries and settle revenue directly with cultivators, stripping Talukdars of land and fortresses.",
      correctOption: "A",
      explanation: "Both statements are true, and the reason correctly explains how the British policy (Summary Settlement) directly attacked the economic and social power of the Awadh Talukdars, leading them to join the rebellion."
    },
    {
      id: 2,
      assertion: "British paintings of the 1857 Revolt, like Barker's 'Relief of Lucknow', celebrated Indian bravery.",
      reason: "Representations in Britain were created to reassure the British public of imperial supremacy and military glory.",
      correctOption: "D",
      explanation: "The assertion is false; British paintings depicted British troops as heroic saviors and rebels as barbaric/cowardly, celebrating British victory rather than Indian bravery. The reason is true."
    }
  ];

  const blanks: FillInBlank[] = [
    { id: 1, question: "Awadh was formally annexed by the East India Company in the year ______.", answer: "1856", hint: "Just one year before the great outbreak." },
    { id: 2, question: "Rani Laxmibai of Jhansi died fighting the British forces led by General ______.", answer: "Hugh Rose", hint: "He described her as the only man among the rebels." },
    { id: 3, question: "The rebel leader Nana Sahib was the adopted son of Peshwa ______.", answer: "Baji Rao II", hint: "He was denied his pension by the British." }
  ];

  return (
    <div className="w-full min-h-screen bg-[#07070c] text-white flex flex-col justify-between font-sans selection:bg-purple-500/30 relative pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-950/5 blur-[130px] pointer-events-none" />

      <header className="h-16 border-b border-slate-850/50 bg-[#07070c]/85 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
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
            Rebels and the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-extrabold">Raj</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Relive the timeline of the great Uprising of 1857, rebel plans, annexations, and British visual representations.
          </p>
        </section>

        {/* Visual Roadmap */}
        <section className="bg-slate-950/70 border border-slate-850 rounded-[28px] p-6 mb-8">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Cascading Outbreak of 1857
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-550 font-bold uppercase">May 10</span>
              <span className="text-xs font-black text-white">Meerut Mutiny</span>
              <span className="block text-[9px] text-red-400 mt-1">Sepoys seize arms</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-550 font-bold uppercase">May 11</span>
              <span className="text-xs font-black text-white"> Delhi March</span>
              <span className="block text-[9px] text-purple-400 mt-1">Bahadur Shah appealed</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-555 font-bold uppercase">Jun-Jul</span>
              <span className="text-xs font-black text-white">Civil Rebellion</span>
              <span className="block text-[9px] text-indigo-400 mt-1">Awadh &amp; UP Peasants join</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-555 font-bold uppercase">Sep onwards</span>
              <span className="text-xs font-black text-white">British Counter</span>
              <span className="block text-[9px] text-emerald-400 mt-1">Delhi retaken / Suppression</span>
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
              Think of the 1857 Revolt like a massive systems outage triggered by a tiny misconfigured setting (the greased cartridges). The outage starts in a single region (Meerut) and instantly spreads like cascading failure across all connected server nodes (garrisons). The British response is like a hard bare-metal reboot (martial law and brutal counter-insurgency) that completely wipes the legacy environment (ending Mughal sovereignty and East India Company charter) and transitions to a managed cloud service under the British Crown! 🛠️
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
                      <button onClick={() => setRevealedBlanks(p => ({ ...p, [item.id]: !p[item.id] }))} className="px-3 py-1.5 bg-[#07070c] border border-slate-800 hover:border-slate-700 text-[10px] text-indigo-400 hover:text-white font-bold rounded-lg cursor-pointer">
                        {reveal ? `Answer: ${item.answer}` : 'Reveal Answer'}
                      </button>
                      <button onClick={() => setShowBlankHints(p => ({ ...p, [item.id]: !p[item.id] }))} className="px-3 py-1.5 bg-[#07070c] border border-slate-800 hover:border-slate-700 text-[10px] text-amber-500 hover:text-amber-450 font-bold rounded-lg cursor-pointer">
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
