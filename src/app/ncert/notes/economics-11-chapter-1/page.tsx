"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Check, HelpCircle, RefreshCw, Award } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

interface MCQ {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export default function EconomicsChapter1Page() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:economics-11-chapter-1';
  const isChapterCompleted = !!completedChapters[progressKey];
  const [selectedMcqs, setSelectedMcqs] = useState<Record<number, number>>({});
  const [showMcqAnswers, setShowMcqAnswers] = useState<Record<number, boolean>>({});

  const mcqs: MCQ[] = [
    {
      id: 1,
      question: "Which term did Lord Curzon use to describe the state of India's economy at the time of independence?",
      options: ["An industrialized nation", "A predominantly agrarian economy", "A self-sufficient economy", "A mercantile economy"],
      answer: 1,
      explanation: "At independence, nearly 85% of India's population lived in villages and agriculture was the backbone of the economy."
    },
    {
      id: 2,
      question: "The drain of wealth theory was propounded by:",
      options: ["Karl Marx", "Dadabhai Naoroji", "Mahatma Gandhi", "Jawaharlal Nehru"],
      answer: 1,
      explanation: "Dadabhai Naoroji in his book 'Poverty and Un-British Rule in India' argued that British policies drained India's wealth to Britain."
    },
    {
      id: 3,
      question: "Which sector was deliberately de-industrialised by the British?",
      options: ["Agriculture", "Services", "Textiles and handicrafts", "Mining"],
      answer: 2,
      explanation: "Britain's cheap machine-made goods ruined India's traditional textile and handicraft industries, creating systematic de-industrialization."
    },
    {
      id: 4,
      question: "The primary motive behind the British developing railways in India was:",
      options: [
        "To industrialise India",
        "To integrate Indian markets for British goods and facilitate raw material export",
        "To promote tourism",
        "To connect rural areas to cities"
      ],
      answer: 1,
      explanation: "Railways served colonial interests — to move raw materials to ports and penetrate inland markets with cheap British manufactured goods."
    },
    {
      id: 5,
      question: "What was India's per capita income at the time of independence?",
      options: ["₹350 per year", "₹265 per year", "₹500 per year", "₹180 per year"],
      answer: 1,
      explanation: "India's per capita income was abysmally low at around ₹265 per year at the time of independence, reflecting extreme poverty."
    }
  ];

  const keyTerms = [
    { term: "De-industrialization", def: "Deliberate destruction of India's traditional industries by British through cheap imports and colonial policies." },
    { term: "Drain of Wealth", def: "Theory by Dadabhai Naoroji — net outflow of India's wealth to Britain through trade, taxes, and war charges." },
    { term: "Zamindari System", def: "Land revenue system where zamindars (landlords) collected taxes from peasants, often exploitatively." },
    { term: "Commercialization of Agriculture", def: "Shifting from subsistence to cash crops (indigo, cotton, jute) for export, reducing food security." },
    { term: "Forced Begar", def: "Forced unpaid labour extracted by zamindars and colonial authorities from peasants." },
    { term: "Home Charges", def: "Amount India paid to Britain for services like civil administration, military, pensions of British officials." }
  ];

  const timeline = [
    { year: "1600", event: "East India Company formed in England" },
    { year: "1757", event: "Battle of Plassey — British political control begins" },
    { year: "1857", event: "First War of Independence (Sepoy Mutiny)" },
    { year: "1858", event: "British Crown takes direct control of India" },
    { year: "1853", event: "First railway line: Bombay to Thane" },
    { year: "1857", event: "First universities established in Bombay, Calcutta, Madras" },
    { year: "1947", event: "Indian Independence — economy in ruins" }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white font-sans">
      <div className="fixed top-0 left-1/3 w-96 h-96 rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="h-16 border-b border-white/5 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
        <Link href="/ncert" className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all">
          <ArrowLeft size={16} />
          NCERT Hub
        </Link>
        <div className="flex items-center gap-3">
          {isChapterCompleted ? (
            <button onClick={() => markIncomplete(progressKey)}
              className="px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14]/25 text-[#39FF14] text-[10px] font-black uppercase tracking-wider rounded-xl flex items-center gap-1.5 cursor-pointer">
              <Check size={11} /> Completed
            </button>
          ) : (
            <button onClick={() => markCompleted(progressKey)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider rounded-xl flex items-center gap-1.5 cursor-pointer transition-all">
              <Award size={11} /> Mark Complete
            </button>
          )}
        </div>
      </header>

      <main className="w-full max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-12">

        {/* Title */}
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
            📈 Economics · Class 11 · Chapter 1
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Indian Economy on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Eve of Independence</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
            Understand the state of India&apos;s economy under British colonial rule — how it was systematically drained, de-industrialised, and left impoverished by 1947.
          </p>
        </section>

        {/* Key Concepts */}
        <section>
          <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
            <span className="text-xl">🔑</span> Key Concepts
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {keyTerms.map(({ term, def }) => (
              <div key={term} className="bg-[#0d0d14] border border-emerald-500/10 hover:border-emerald-500/25 rounded-2xl p-4 transition-all">
                <span className="text-emerald-400 font-black text-sm block mb-1">{term}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
            <span className="text-xl">📅</span> Historical Timeline
          </h2>
          <div className="relative pl-6 border-l border-emerald-500/20 space-y-5">
            {timeline.map(({ year, event }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider block mb-0.5">{year}</span>
                <p className="text-sm text-slate-300">{event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Topics */}
        <section className="space-y-4">
          <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
            <span className="text-xl">📝</span> Core Topics
          </h2>
          {[
            {
              title: "1. Low Level of Economic Development",
              color: "#10b981",
              points: [
                "Per capita income was ₹265/year — one of the world's lowest",
                "85% population engaged in agriculture; industry share was negligible",
                "Chronic food insecurity, famines, and poverty were widespread",
                "Life expectancy was just 32 years at independence"
              ]
            },
            {
              title: "2. Systematic De-industrialisation",
              color: "#3b82f6",
              points: [
                "Traditional handicrafts (textiles, metalwork, woodwork) destroyed by cheap British imports",
                "Artisans thrown out of work — shifted to agriculture, increasing pressure on land",
                "Protective tariffs denied to Indian goods; British goods imported duty-free",
                "India became a raw material supplier and a market for British manufactured goods"
              ]
            },
            {
              title: "3. Exploitative Land Revenue Systems",
              color: "#f59e0b",
              points: [
                "Zamindari (Permanent Settlement), Mahalwari, Ryotwari systems introduced",
                "Heavy taxation extracted from peasants regardless of harvest",
                "Commercialisation of agriculture — food crops replaced by export crops",
                "Land mortgaged and concentrated in hands of moneylenders"
              ]
            },
            {
              title: "4. Undeveloped Infrastructure with Colonial Motive",
              color: "#a855f7",
              points: [
                "Railways built to serve British commercial interests, not India's development",
                "Ports built to facilitate raw material export — not for domestic trade",
                "Irrigation canals built in cash crop areas (Punjab, Bengal) for export",
                "Telecommunications set up for administrative control, not public welfare"
              ]
            }
          ].map(({ title, color, points }) => (
            <div key={title} className="bg-[#0d0d14] border border-white/5 rounded-2xl p-5">
              <h3 className="font-black text-base mb-3" style={{ color }}>{title}</h3>
              <ul className="space-y-2">
                {points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-xs mt-0.5 shrink-0" style={{ color }}>▸</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* MCQ Section */}
        <section>
          <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2">
            <HelpCircle size={18} className="text-emerald-400" /> Practice MCQs
          </h2>
          <div className="space-y-5">
            {mcqs.map((mcq) => (
              <div key={mcq.id} className="bg-[#0d0d14] border border-white/5 rounded-2xl p-5">
                <p className="text-sm font-bold text-white mb-3">Q{mcq.id}. {mcq.question}</p>
                <div className="space-y-2 mb-3">
                  {mcq.options.map((opt, i) => {
                    const selected = selectedMcqs[mcq.id] === i;
                    const revealed = showMcqAnswers[mcq.id];
                    const isCorrect = i === mcq.answer;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedMcqs(s => ({ ...s, [mcq.id]: i }))}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all border cursor-pointer ${
                          revealed
                            ? isCorrect
                              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                              : selected
                                ? 'bg-red-500/15 border-red-500/40 text-red-300'
                                : 'border-white/5 text-slate-500'
                            : selected
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-white'
                              : 'border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        <span className="font-black mr-2">{String.fromCharCode(65 + i)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowMcqAnswers(s => ({ ...s, [mcq.id]: !s[mcq.id] }))}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles size={10} /> {showMcqAnswers[mcq.id] ? 'Hide' : 'Show'} Answer
                  </button>
                </div>
                {showMcqAnswers[mcq.id] && (
                  <div className="mt-3 p-3 bg-emerald-500/8 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 leading-relaxed">
                    <span className="font-black">✓ Correct: {String.fromCharCode(65 + mcq.answer)}. </span>
                    {mcq.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Mark Complete */}
        <div className="text-center py-6">
          {isChapterCompleted ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#39FF14]/10 border border-[#39FF14]/25 text-[#39FF14] font-black rounded-2xl">
              <Check size={16} /> Chapter Completed! Great work 🎉
            </div>
          ) : (
            <button onClick={() => markCompleted(progressKey)}
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl flex items-center gap-2 mx-auto cursor-pointer transition-all">
              <Award size={16} /> Mark Chapter as Complete
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
