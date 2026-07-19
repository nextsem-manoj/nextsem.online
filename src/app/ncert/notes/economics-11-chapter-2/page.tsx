"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, Check, HelpCircle, Sparkles } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

interface MCQ { id: number; question: string; options: string[]; answer: number; explanation: string; }

export default function EconomicsChapter2Page() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:economics-11-chapter-2';
  const isChapterCompleted = !!completedChapters[progressKey];
  const [selectedMcqs, setSelectedMcqs] = useState<Record<number, number>>({});
  const [showMcqAnswers, setShowMcqAnswers] = useState<Record<number, boolean>>({});

  const mcqs: MCQ[] = [
    { id: 1, question: "The Planning Commission of India was set up in:", options: ["1947", "1950", "1952", "1956"], answer: 1, explanation: "The Planning Commission was established on 15 March 1950 to oversee planning and resource allocation for India's development." },
    { id: 2, question: "India's First Five Year Plan (1951–56) focused primarily on:", options: ["Heavy Industry", "Agriculture and Irrigation", "Education", "Defence"], answer: 1, explanation: "The First Five Year Plan prioritised agriculture, irrigation, and power, targeting food self-sufficiency after Partition disruptions." },
    { id: 3, question: "The Mahalanobis model (Second Plan) emphasised:", options: ["Agriculture", "Consumer goods", "Heavy capital goods industry", "Service sector"], answer: 2, explanation: "P.C. Mahalanobis's model gave priority to heavy capital goods industries to build a strong industrial base for rapid growth." },
    { id: 4, question: "The Green Revolution in India occurred primarily in the:", options: ["1940s", "1950s", "1960s–70s", "1980s"], answer: 2, explanation: "The Green Revolution (mid-1960s–70s) introduced high-yielding variety seeds, fertilizers, and irrigation to boost wheat and rice production." },
    { id: 5, question: "PSUs (Public Sector Undertakings) dominated which industries under India's planned economy?", options: ["Textiles and garments", "IT and services", "Steel, mining, and heavy machinery", "Agriculture"], answer: 2, explanation: "Under the Industrial Policy Resolution 1956, key industries like steel, mining, defence, and railways were reserved for the public sector." }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white font-sans">
      <div className="fixed top-0 right-1/3 w-96 h-96 rounded-full bg-emerald-900/8 blur-[120px] pointer-events-none" />
      <header className="h-16 border-b border-white/5 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
        <Link href="/ncert" className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all">
          <ArrowLeft size={16} /> NCERT Hub
        </Link>
        {isChapterCompleted ? (
          <button onClick={() => markIncomplete(progressKey)} className="px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14]/25 text-[#39FF14] text-[10px] font-black uppercase tracking-wider rounded-xl flex items-center gap-1.5 cursor-pointer">
            <Check size={11} /> Completed
          </button>
        ) : (
          <button onClick={() => markCompleted(progressKey)} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider rounded-xl flex items-center gap-1.5 cursor-pointer transition-all">
            <Award size={11} /> Mark Complete
          </button>
        )}
      </header>
      <main className="w-full max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-12">
        <section>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
            📈 Economics · Class 11 · Chapter 2
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Indian Economy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">1950–1990</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">The four decades of planned economic development — exploring Five Year Plans, the role of public sector, the Green Revolution, and India&apos;s mixed economy model.</p>
        </section>

        <section>
          <h2 className="text-lg font-black text-white mb-4">🎯 Five Year Plans Overview</h2>
          <div className="space-y-3">
            {[
              { plan: "1st Plan (1951–56)", focus: "Agriculture & Irrigation", achievement: "GDP grew at 3.6%; food production improved" },
              { plan: "2nd Plan (1956–61)", focus: "Heavy Industry (Mahalanobis)", achievement: "PSUs like BHEL, steel plants established" },
              { plan: "3rd Plan (1961–66)", focus: "Industry + Defence", achievement: "Hampered by wars (1962, 1965) and droughts" },
              { plan: "4th Plan (1969–74)", focus: "Growth + Stability", achievement: "Bank nationalisation, Green Revolution success" },
              { plan: "5th Plan (1974–79)", focus: "Poverty + Self-Reliance", achievement: "Garibi Hatao; India became food self-sufficient" },
              { plan: "6th Plan (1980–85)", focus: "Modernisation", achievement: "GDP growth ~5.4%; technology emphasis" },
              { plan: "7th Plan (1985–90)", focus: "Productivity + Modernisation", achievement: "GDP growth ~6%; poverty reduced significantly" }
            ].map(({ plan, focus, achievement }) => (
              <div key={plan} className="bg-[#0d0d14] border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="w-40 shrink-0">
                  <span className="text-emerald-400 font-black text-sm">{plan}</span>
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-0.5">Focus: {focus}</span>
                  <p className="text-xs text-slate-300">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-black text-white mb-4">📝 Core Topics</h2>
          {[
            { title: "The Mixed Economy Model", color: "#10b981", points: ["India adopted neither pure capitalism nor pure socialism — a 'mixed economy'", "Public sector controlled key industries; private sector allowed in consumer goods", "Licensing (permit raj) controlled who could start industries and how much they could produce", "Import substitution: protect Indian industries from foreign competition"] },
            { title: "Agricultural Strategy", color: "#3b82f6", points: ["Land reforms: abolition of zamindari, land ceiling, cooperative farming", "Green Revolution (1960s): HYV seeds, fertilizers, irrigation → wheat & rice boom", "White Revolution (Operation Flood): boosted milk production via cooperatives", "Food Corporation of India (1964): buffer stocks, price support for farmers"] },
            { title: "Industrial Policy & PSUs", color: "#f59e0b", points: ["Industrial Policy Resolution 1956 classified industries into 3 schedules", "Schedule A (public sector monopoly): railways, atomic energy, defence", "Schedule B (mixed): chemicals, fertilizers, road transport", "PSUs: ONGC, SAIL, BHEL, HAL built core industrial capacity"] }
          ].map(({ title, color, points }) => (
            <div key={title} className="bg-[#0d0d14] border border-white/5 rounded-2xl p-5">
              <h3 className="font-black text-base mb-3" style={{ color }}>{title}</h3>
              <ul className="space-y-2">
                {points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-xs mt-0.5 shrink-0" style={{ color }}>▸</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-lg font-black text-white mb-4 flex items-center gap-2"><HelpCircle size={18} className="text-emerald-400" /> Practice MCQs</h2>
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
                      <button key={i} onClick={() => setSelectedMcqs(s => ({ ...s, [mcq.id]: i }))}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all border cursor-pointer ${revealed ? isCorrect ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' : selected ? 'bg-red-500/15 border-red-500/40 text-red-300' : 'border-white/5 text-slate-500' : selected ? 'bg-emerald-500/10 border-emerald-500/30 text-white' : 'border-white/5 text-slate-400 hover:border-white/10 hover:text-white'}`}>
                        <span className="font-black mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                      </button>
                    );
                  })}
                </div>
                <button onClick={() => setShowMcqAnswers(s => ({ ...s, [mcq.id]: !s[mcq.id] }))}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-1.5">
                  <Sparkles size={10} /> {showMcqAnswers[mcq.id] ? 'Hide' : 'Show'} Answer
                </button>
                {showMcqAnswers[mcq.id] && (
                  <div className="mt-3 p-3 bg-emerald-500/8 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 leading-relaxed">
                    <span className="font-black">✓ Correct: {String.fromCharCode(65 + mcq.answer)}. </span>{mcq.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="text-center py-6">
          {isChapterCompleted ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#39FF14]/10 border border-[#39FF14]/25 text-[#39FF14] font-black rounded-2xl">
              <Check size={16} /> Chapter Completed! 🎉
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
