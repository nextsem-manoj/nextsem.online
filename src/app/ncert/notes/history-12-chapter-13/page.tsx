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

export default function HistoryChapter13NotesPage() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:history-12-chapter-13';
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
      question: "In which year did Mahatma Gandhi return to India from South Africa?",
      options: [
        "1915",
        "1917",
        "1919",
        "1920"
      ],
      answer: 0,
      explanation: "Mahatma Gandhi returned to India in January 1915 after spending two decades in South Africa, where he first developed satyagraha."
    },
    {
      id: 2,
      question: "Mahatma Gandhi's first major public appearance in India was at the opening of which institution in February 1916?",
      options: [
        "Sabarmati Ashram",
        "Banaras Hindu University (BHU)",
        "Indian National Congress Session at Lucknow",
        "Aligarh Muslim University"
      ],
      answer: 1,
      explanation: "Gandhiji's first major public address in India was at the opening ceremony of the Banaras Hindu University (BHU) in February 1916."
    },
    {
      id: 3,
      question: "The historic Salt March (Dandi March) began from Sabarmati Ashram on March 12 of which year?",
      options: [
        "1920",
        "1930",
        "1942",
        "1947"
      ],
      answer: 1,
      explanation: "The Salt Satyagraha began with the march to Dandi on March 12, 1930, ending on April 6, 1930, when Gandhiji broke the salt law."
    },
    {
      id: 4,
      question: "Which major national campaign was launched by Mahatma Gandhi in August 1942, demanding immediate British exit?",
      options: [
        "Non-Cooperation Movement",
        "Civil Disobedience Movement",
        "Quit India Movement",
        "Khilafat Movement"
      ],
      answer: 2,
      explanation: "The Quit India Movement was launched in August 1942 at the Gowalia Tank Maidan in Bombay, with the slogan 'Do or Die'."
    },
    {
      id: 5,
      question: "Who was Gandhiji's political mentor, who advised him to travel across India to understand the country first?",
      options: [
        "Bal Gangadhar Tilak",
        "Gopal Krishna Gokhale",
        "Dadabhai Naoroji",
        "Rabindranath Tagore"
      ],
      answer: 1,
      explanation: "Gopal Krishna Gokhale was Gandhiji's political mentor and advised him to tour India for a year to observe its conditions before taking up public causes."
    }
  ];

  const shortAnswers: ShortAnswer[] = [
    { question: "What was the Rowlatt Act of 1919?", answer: "An act passed by the Imperial Legislative Council allowing the government to imprison political activists without trial for up to two years." },
    { question: "Why was the Non-Cooperation Movement called off in February 1922?", answer: "Due to the Chauri Chaura incident, where an angry crowd set fire to a police station, killing 22 policemen, violating Gandhiji's principle of non-violence." },
    { question: "What was decided at the Gandhi-Irwin Pact of 1931?", answer: "Gandhiji agreed to suspend the Civil Disobedience Movement and participate in the Second Round Table Conference, while the British government agreed to release political prisoners." },
    { question: "Who was Lal-Bal-Pal?", answer: "The trio of nationalist leaders: Lala Lajpat Rai (Punjab), Bal Gangadhar Tilak (Maharashtra), and Bipin Chandra Pal (Bengal), who advocated militant opposition to British rule." }
  ];

  const distinctions: Distinction[] = [
    {
      title: "Non-Cooperation vs. Civil Disobedience",
      desc: "Distinguishing the two massive pan-India satyagraha campaigns.",
      table: {
        headers: ["Feature", "Non-Cooperation Movement (1920-22)", "Civil Disobedience Movement (1930-34)"],
        rows: [
          ["Primary Slogan / Aim", "Swaraj (Self-rule) and support to Khilafat cause.", "Purna Swaraj (Complete Independence)."],
          ["Core Action", "Refusal to cooperate with the administration (boycott of courts, colleges, foreign goods).", "Deliberate violation of colonial laws (like Salt monopoly, forest laws)."],
          ["Withdrawal Reason", "Chauri Chaura violent incident.", "Gandhi-Irwin Pact of 1931."]
        ]
      }
    },
    {
      title: "Moderate vs. Extremist Nationalists",
      desc: "Contrasting political ideologies within the Congress before Gandhi's leadership.",
      table: {
        headers: ["Ideology", "Moderates (e.g. Gokhale, Naoroji)", "Extremists (e.g. Tilak, Rai, Pal)"],
        rows: [
          ["Method", "Constitutional agitation, petitions, prayers, and peaceful advocacy.", "Boycott of foreign goods, swadeshi, passive resistance, and self-sacrifice."],
          ["Stance on British Rule", "Believed British rule was reformable and could bring progress.", "Felt British rule was exploitative and must be opposed directly."],
          ["Goal", "Gradual self-governance within the Empire.", "Immediate Swaraj (independence)."]
        ]
      }
    }
  ];

  const assertions: Assertion[] = [
    {
      id: 1,
      assertion: "The Salt March was an exceptionally clever choice to mobilize the masses.",
      reason: "Salt was a basic, universal commodity consumed by everyone, yet the British state held a monopoly on its manufacture and taxed it heavily.",
      correctOption: "A",
      explanation: "Both statements are true. Choosing salt connected the abstract concept of Purna Swaraj directly to a daily grievance of every rich and poor household."
    },
    {
      id: 2,
      assertion: "Gandhiji supported the partition of India as a solution to communal tension.",
      reason: "He boycotted the independence celebrations of August 15, 1947, spending the day in Calcutta fasting to restore peace.",
      correctOption: "D",
      explanation: "The assertion is false; Gandhiji vehemently opposed the partition of India, calling it a tragedy. The reason is true; he spent August 15 in Calcutta trying to end communal violence."
    }
  ];

  const blanks: FillInBlank[] = [
    { id: 1, question: "Gandhiji started his first satyagraha in India in the year 1917 in ______.", answer: "Champaran", hint: "A district in Bihar dealing with indigo plantation exploitation." },
    { id: 2, question: "The tragic Jallianwala Bagh massacre occurred on April 13, ______.", answer: "1919", hint: "It happened during Baisakhi festival in Amritsar." },
    { id: 3, question: "The American journalist who marched with Gandhiji during the Salt March was ______.", answer: "Webb Miller", hint: "He wrote detailed reports on British violence at Dharasana." }
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
            Mahatma Gandhi &amp; the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-extrabold">Nationalist Movement</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Trace the chronological phases of Satyagraha, Non-Cooperation, Civil Disobedience, and the final Quit India campaign.
          </p>
        </section>

        {/* Timeline */}
        <section className="bg-slate-950/70 border border-slate-850 rounded-[28px] p-6 mb-8">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Milestones of Satyagraha
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-550 font-bold uppercase">1915</span>
              <span className="text-xs font-black text-white">Returns to India</span>
              <span className="block text-[9px] text-purple-450 mt-1">From South Africa</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-550 font-bold uppercase">1920-22</span>
              <span className="text-xs font-black text-white">Non-Cooperation</span>
              <span className="block text-[9px] text-indigo-455 mt-1">Swaraj Boycott</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-555 font-bold uppercase">1930</span>
              <span className="text-xs font-black text-white">Dandi Salt March</span>
              <span className="block text-[9px] text-pink-455 mt-1">Civil Disobedience</span>
            </div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-555 font-bold uppercase">1942</span>
              <span className="text-xs font-black text-white">Quit India</span>
              <span className="block text-[9px] text-red-455 mt-1">Do or Die Campaign</span>
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
              Think of the Indian independence movement like a large-scale project refactoring. The **Non-Cooperation Movement** is like a server-side strike (deleting/blocking access to colonial routes). The **Salt March (Dandi)** is like a custom fork of an open-source project to bypass a proprietary license (breaking the government salt monopoly). The **Quit India Movement** is a force push to master (`git push --force`) demanding immediate deprecation of the legacy British codebase! 🛠️
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
