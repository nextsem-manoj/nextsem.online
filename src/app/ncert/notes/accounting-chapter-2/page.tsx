"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles, Check, HelpCircle, AlertCircle, RefreshCw, Award, Code2 } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

interface MCQ {
  id: number;
  question: string;
  options: string[];
  answer: number; // Index of correct option
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
  correctOption: string; // 'A', 'B', 'C', 'D'
  explanation: string;
}

interface FillInBlank {
  id: number;
  question: string;
  answer: string;
  hint: string;
}

export default function AccountingTheoryNotesPage() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:accounting-chapter-2';
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
      question: "Which accounting concept dictates that a business is separate and distinct from its owner(s)?",
      options: [
        "Going Concern Concept",
        "Money Measurement Concept",
        "Business Entity Concept",
        "Dual Aspect Concept"
      ],
      answer: 2,
      explanation: "The Business Entity Concept assumes that the business enterprise has a distinct, separate identity from its owners. Thus, the owner's personal transactions are kept separate from the business ledger."
    },
    {
      id: 2,
      question: "According to the Going Concern Concept, a business firm is assumed to:",
      options: [
        "Liquidate its assets in the near future",
        "Continue its operations indefinitely for a fairly long period of time",
        "Prepare accounts on a cash basis only",
        "Report all transactions at their current market replacement values"
      ],
      answer: 1,
      explanation: "Going Concern assumes the business will continue operations indefinitely and will not face liquidation in the foreseeable future. This justifies showing assets at historical cost rather than liquidation values."
    },
    {
      id: 3,
      question: "Under the Cost Concept, when an asset is acquired, its recorded value includes:",
      options: [
        "Only the basic invoice purchase price",
        "The purchase price plus acquisition, transportation, and installation costs",
        "The estimated market resale value at the end of the year",
        "The replacement cost adjusted for annual inflation rates"
      ],
      answer: 1,
      explanation: "The historical cost concept requires assets to be recorded at their purchase price, which includes all costs incurred to make the asset ready for its intended use (transportation, installation, trial runs)."
    },
    {
      id: 4,
      question: "The fundamental accounting equation 'Assets = Liabilities + Capital' is derived from which concept?",
      options: [
        "Consistency Concept",
        "Objectivity Concept",
        "Matching Concept",
        "Dual Aspect Concept"
      ],
      answer: 3,
      explanation: "The Dual Aspect Concept states that every business transaction has a two-fold effect, affecting at least two accounts. This is mathematically expressed as Assets = Liabilities + Capital."
    },
    {
      id: 5,
      question: "Under Accrual Basis accounting, revenue is recognized when:",
      options: [
        "Cash is physically received from the customer",
        "Goods are manufactured in the factory",
        "The legal right to receive cash arises (sale is complete / service rendered)",
        "The customer signs a purchase order contract"
      ],
      answer: 2,
      explanation: "Accrual basis and the Revenue Recognition Concept require revenue to be recorded when it is realized (earned), meaning the sale is complete or services are rendered, regardless of when cash is collected."
    },
    {
      id: 6,
      question: "The tendency of accountants to resolve uncertainty by understating assets and revenues while overstating liabilities and expenses is based on:",
      options: [
        "Materiality Concept",
        "Conservatism (Prudence) Concept",
        "Consistency Concept",
        "Full Disclosure Concept"
      ],
      answer: 1,
      explanation: "The Conservatism or Prudence Concept states that a conscious approach of 'playing safe' should be adopted. All anticipated losses must be provided for, but anticipated gains/profits are ignored until realized."
    },
    {
      id: 7,
      question: "An item whose knowledge would influence the decision of an informed user of financial statements is considered:",
      options: [
        "Consistent",
        "Objective",
        "Material",
        "Accrued"
      ],
      answer: 2,
      explanation: "The Materiality Concept states that only material facts need to be presented in detail. Materiality depends on whether the knowledge of the fact would influence a prudent investor's decision."
    },
    {
      id: 8,
      question: "Which of the following describes the destination-based consumption tax on goods and services in India?",
      options: [
        "VAT (Value Added Tax)",
        "Customs Duty",
        "GST (Goods and Services Tax)",
        "Income Tax"
      ],
      answer: 2,
      explanation: "GST is a destination-based consumption tax levied at all stages of value addition right from manufacture to final consumption."
    },
    {
      id: 9,
      question: " Taught under GST rules, what does 'IGST' stand for?",
      options: [
        "Internal Goods and Services Tax",
        "Integrated Goods and Services Tax",
        "Individual Government Sales Tariff",
        "Interstate General Sales Tax"
      ],
      answer: 1,
      explanation: "IGST stands for Integrated Goods and Services Tax, which is charged on the transfer of goods and services from one state to another (inter-state movement)."
    },
    {
      id: 10,
      question: "Which component of GST goes directly as revenue to the State Government for an intra-state sale?",
      options: [
        "CGST",
        "SGST",
        "IGST",
        "UTGST only"
      ],
      answer: 1,
      explanation: "SGST (State Goods and Services Tax) is collected by the State Government on transactions occurring within the boundaries of that state."
    }
  ];

  const shortAnswers: ShortAnswer[] = [
    { question: "What is GAAP?", answer: "GAAP stands for Generally Accepted Accounting Principles. It refers to the common set of rules, concepts, and guidelines adopted by the accounting profession to bring uniformity and consistency to financial statements." },
    { question: "Explain the Money Measurement Concept.", answer: "This concept states that only those transactions and events which can be expressed in monetary terms are recorded in accounting. Physical quantities (like acres of land or number of computers) are converted and recorded in monetary units (e.g., Rupees)." },
    { question: "Define the Accounting Period Concept.", answer: "The accounting period concept refers to the customized span of time (usually 12 months, from April 1 to March 31) at the end of which financial statements are prepared to assess performance." },
    { question: "What is the Objectivity Concept?", answer: "The Objectivity Concept requires that accounting transactions be recorded in an unbiased manner and supported by verifiable evidence (documents like invoices, cash memos, or receipts)." },
    { question: "State two limitations of Accounting Standards.", answer: "1) They fail to extend flexibility as they are rigidly followed. 2) They cannot override the prevailing statute/laws of the land." }
  ];

  const distinctions: Distinction[] = [
    {
      title: "Cash Basis vs. Accrual Basis of Accounting",
      desc: "Comparison based on timing of recognition of revenue and expenses.",
      table: {
        headers: ["Feature", "Cash Basis of Accounting", "Accrual Basis of Accounting"],
        rows: [
          ["Revenue Recognition", "Recorded only when cash is received from customers.", "Recorded when revenue is earned (due), regardless of cash flow."],
          ["Expense Recognition", "Recorded only when cash is paid out.", "Recorded when expenses are incurred (due), regardless of payment."],
          ["Matching Principle", "Does not follow the matching principle.", "Completely adheres to the matching principle to calculate true profits."],
          ["Reliability / Acceptability", "Not generally accepted by corporate bodies/laws.", "Highly reliable and legally mandated by Companies Act 2013."]
        ]
      }
    },
    {
      title: "Double Entry System vs. Single Entry System",
      desc: "Comparison based on completeness and scientific recording.",
      table: {
        headers: ["Feature", "Double Entry System", "Single Entry System"],
        rows: [
          ["Two-Fold Effect", "Records both debit and credit aspects of every transaction.", "Does not record the double-effect of all transactions; incomplete."],
          ["Accounts Maintained", "Maintains real, personal, and nominal accounts.", "Maintains only personal accounts and Cash Book records."],
          ["Trial Balance", "A Trial Balance can be prepared to check arithmetical accuracy.", "Trial Balance cannot be prepared, making detection of errors hard."],
          ["Acceptability", "Systematic, reliable, and accepted by tax authorities.", "Unscientific, incomplete, and not reliable for tax filings."]
        ]
      }
    }
  ];

  const assertions: Assertion[] = [
    {
      id: 1,
      assertion: "The capital brought in by the owner is shown as a liability in the balance sheet of the business.",
      reason: "Under the Business Entity Concept, the owner and the business enterprise are treated as separate, distinct legal entities.",
      correctOption: "A",
      explanation: "Both statements are true. The owner is treated as a creditor who has lent funds (capital) to the business, making capital an internal liability. The separate entity concept is the correct explanation."
    },
    {
      id: 2,
      assertion: "Closing stock is valued at cost price or market value, whichever is lower.",
      reason: "The Consistency Concept requires that the same accounting policies be applied consistently from one period to another.",
      correctOption: "B",
      explanation: "Both statements are true. Stock is valued at lower of cost or market value due to the Conservatism concept (playing safe). Consistency is a separate concept requiring uniform rules year-on-year. The reason is true, but does not explain the assertion."
    },
    {
      id: 3,
      assertion: "Accrual basis of accounting provides a true and fair view of the net profit of a business.",
      reason: "Accrual basis matches revenues earned in a period with the related expenses incurred in the same period.",
      correctOption: "A",
      explanation: "Both statements are true, and the reason correctly explains why accrual basis gives a true profit (because it follows the matching principle, unlike cash basis)."
    }
  ];

  const blanks: FillInBlank[] = [
    { id: 1, question: "Recognition of expenses in the same period as associated revenues is called the ______ concept.", answer: "Matching", hint: "It requires aligning input costs directly with the revenue they helped generate." },
    { id: 2, question: "The accounting concept that resolves uncertainty by understating assets and revenues is known as ______.", answer: "Conservatism", hint: "Also known as the Prudence concept (always play safe)." },
    { id: 3, question: "Revenue is generally recognized at the point of ______.", answer: "Sale", hint: "When the ownership and risks transfer, or the legal right to collect arises." },
    { id: 4, question: "The ______ concept requires that the same accounting method should be used from one accounting period to the next.", answer: "Consistency", hint: "Uniformity over time allows meaningful inter-period comparison." },
    { id: 5, question: "The ______ concept requires that accounting transactions should be free from the bias of accountants.", answer: "Objectivity", hint: "Requires transactions to be supported by verifiable vouchers." }
  ];

  const handleSelectOption = (mcqId: number, optIdx: number) => {
    setSelectedMcqs(prev => ({ ...prev, [mcqId]: optIdx }));
  };

  const toggleMcqAnswer = (mcqId: number) => {
    setShowMcqAnswers(prev => ({ ...prev, [mcqId]: !prev[mcqId] }));
  };

  const toggleShortAnswer = (idx: number) => {
    setShowShortAnswers(prev => ({ ...prev, [idx]: !prev[idx] }));
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
    <div className="w-full min-h-screen bg-[#07070c] text-white flex flex-col justify-between font-sans selection:bg-emerald-500/30 relative pb-12">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-indigo-950/5 blur-[130px] pointer-events-none" />

      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-[#07070c]/85 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <Link 
          href="/ncert" 
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to NCERT Hub</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <BookOpen size={14} className="text-indigo-400" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-indigo-300">Class 11 Accountancy</span>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 py-8 relative z-10">
        
        {/* Banner Section */}
        <section className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            Revision Notes &amp; Interactive Lab
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none mb-3">
            Theory Base of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-450 font-extrabold">Accounting</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Understand Generally Accepted Accounting Principles (GAAP), the 13 fundamental assumptions, accounting systems (double vs. single entry), and the Goods and Services Tax (GST) framework.
          </p>
        </section>

        {/* GST Hierarchy section */}
        <section className="bg-slate-950/70 border border-slate-850 rounded-[28px] p-6 mb-8">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Goods and Services Tax (GST) Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#121217] border border-white/5 p-4 rounded-2xl text-left">
              <span className="block text-[10px] text-indigo-400 font-bold uppercase tracking-wider mb-1">Intra-State Movement (Within State)</span>
              <p className="text-xs text-slate-400 mb-2">Split concurrently into two tax streams on a shared base:</p>
              <div className="flex gap-2">
                <span className="bg-slate-900 border border-slate-855 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white">CGST (Centre)</span>
                <span className="bg-slate-900 border border-slate-855 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white">SGST (State)</span>
              </div>
            </div>
            <div className="bg-[#121217] border border-white/5 p-4 rounded-2xl text-left">
              <span className="block text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-1">Inter-State Movement (Outside State)</span>
              <p className="text-xs text-slate-400 mb-2">Collected under a single integrated state-spanning pool:</p>
              <div className="flex gap-2">
                <span className="bg-slate-900 border border-emerald-950 px-2.5 py-1 rounded-lg text-[10px] font-bold text-emerald-300">IGST (Integrated)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Analogies / Tips */}
        <section className="mb-10 bg-emerald-950/20 border border-emerald-500/25 p-5 rounded-2xl flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
            <Code2 size={18} className="text-emerald-400" />
          </div>
          <div>
            <span className="text-[10px] font-black text-emerald-300 uppercase tracking-widest block mb-1">Developer Metaphor</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              **The consistency principle** is just like keeping a clean linting config (`eslint.config.js`). If you change your code formatting style (`Prettier` rules) mid-project without configuring a migration, your git diff will highlight structural noise, making historical comparisons impossible! 🛠️
            </p>
          </div>
        </section>

        {/* ── INTERACTIVE TEST BANK ── */}
        <section className="space-y-12">
          
          {/* 1. Multiple Choice Questions */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-lg text-xs">1</span>
              Paragraph-Level MCQs
            </h2>
            <div className="space-y-6">
              {mcqs.map((mcq, mIdx) => {
                const hasSelected = selectedMcqs[mcq.id] !== undefined;
                const isCorrect = selectedMcqs[mcq.id] === mcq.answer;
                const reveal = showMcqAnswers[mcq.id];

                return (
                  <div key={mcq.id} className="bg-[#121217]/50 border border-slate-850 rounded-[24px] p-5 md:p-6 text-left">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Question {mIdx + 1} of {mcqs.length}</span>
                    <h4 className="text-sm font-black text-white mt-1 mb-4 leading-snug">{mcq.question}</h4>
                    
                    <div className="space-y-2">
                      {mcq.options.map((opt, oIdx) => {
                        const isChosen = selectedMcqs[mcq.id] === oIdx;
                        let btnStyle = "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-350";
                        if (isChosen) {
                          btnStyle = isCorrect 
                            ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                            : "bg-red-500/10 border-red-500/40 text-red-400";
                        }
                        if (reveal && oIdx === mcq.answer) {
                          btnStyle = "bg-emerald-500/20 border-emerald-500/60 text-emerald-350";
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectOption(mcq.id, oIdx)}
                            className={`w-full text-left p-3.5 border rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isChosen && (
                              <span>{isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <button
                        onClick={() => toggleMcqAnswer(mcq.id)}
                        className="text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-300 tracking-wider flex items-center gap-1 cursor-pointer"
                      >
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

          {/* 2. Direct 1-Mark Questions */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-lg text-xs">2</span>
              1-Mark Conceptual Questions
            </h2>
            <div className="space-y-4">
              {shortAnswers.map((sa, idx) => {
                const reveal = showShortAnswers[idx];
                return (
                  <div key={idx} className="bg-[#121217]/50 border border-slate-855 rounded-[20px] p-5">
                    <h4 className="text-xs font-black text-white leading-snug flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[9px] text-slate-500 shrink-0 mt-0.5">Q</span>
                      <span>{sa.question}</span>
                    </h4>
                    <button
                      onClick={() => toggleShortAnswer(idx)}
                      className="mt-3 text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-350 tracking-wider cursor-pointer"
                    >
                      {reveal ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    {reveal && (
                      <p className="mt-2.5 text-xs text-emerald-355 leading-relaxed border-l-2 border-emerald-500/30 pl-3">
                        {sa.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. 2-Marks Distinctions */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-lg text-xs">3</span>
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
                              <td key={cIdx} className={`p-3.5 leading-relaxed ${cIdx === 0 ? 'font-bold text-white' : 'text-slate-450'}`}>
                                {cell}
                              </td>
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

          {/* 4. Assertion & Reasoning (3-Mark) */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-lg text-xs">4</span>
              3-Mark Assertion &amp; Reasoning
            </h2>
            <div className="space-y-6">
              {assertions.map((item, idx) => {
                const reveal = showAssertionAnswers[item.id];
                return (
                  <div key={item.id} className="bg-[#121217]/50 border border-slate-855 rounded-[24px] p-5 md:p-6 text-left">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Exercise {idx + 1} of {assertions.length}</span>
                    
                    <div className="mt-2 space-y-3">
                      <div className="flex gap-3">
                        <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-855 text-[9px] font-black rounded h-fit mt-0.5">A</span>
                        <p className="text-xs font-black text-white leading-relaxed">
                          **Assertion:** {item.assertion}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-855 text-[9px] font-black rounded h-fit mt-0.5">R</span>
                        <p className="text-xs font-black text-slate-300 leading-relaxed">
                          **Reason:** {item.reason}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-850/60 flex items-center justify-between">
                      <button
                        onClick={() => toggleAssertionAnswer(item.id)}
                        className="text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-300 tracking-wider flex items-center gap-1 cursor-pointer"
                      >
                        {reveal ? 'Hide Analysis' : 'Show Correct Option &amp; Analysis'}
                      </button>
                    </div>

                    {reveal && (
                      <div className="mt-4 p-4 bg-slate-900/40 border border-slate-805 rounded-xl">
                        <span className="text-[10px] font-black text-emerald-450 uppercase tracking-widest block mb-1">
                          Correct Choice: ({item.correctOption})
                        </span>
                        <p className="text-xs text-slate-455 leading-relaxed mt-1">{item.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. Fill in the Blanks */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-lg text-xs">5</span>
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
                      {item.question}
                    </p>
                    
                    <div className="mt-3 flex flex-wrap gap-2.5 items-center">
                      <button
                        onClick={() => toggleBlankReveal(item.id)}
                        className="px-3 py-1.5 bg-[#07070c] border border-slate-880 hover:border-slate-700 text-[10px] text-indigo-400 hover:text-white font-bold rounded-lg cursor-pointer"
                      >
                        {reveal ? `Answer: ${item.answer}` : 'Reveal Answer'}
                      </button>
                      <button
                        onClick={() => toggleBlankHint(item.id)}
                        className="px-3 py-1.5 bg-[#07070c] border border-slate-880 hover:border-slate-700 text-[10px] text-amber-500 hover:text-amber-450 font-bold rounded-lg cursor-pointer"
                      >
                        {showHint ? `Hint: ${item.hint}` : 'Show Hint'}
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

      {/* Footer copyright */}
      <footer className="w-full py-6 text-center text-[10px] text-slate-700 border-t border-white/5 select-none mt-auto">
        © 2026 Nextsem Academy · NCERT Study Companion
      </footer>
    </div>
  );
}
