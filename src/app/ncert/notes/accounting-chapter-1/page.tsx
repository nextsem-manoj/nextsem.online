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

export default function AccountingNotesPage() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:accounting-chapter-1';
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
      question: "The modern role of an accountant has shifted from a mere record-keeper to:",
      options: [
        "An administrative assistant",
        "A member of the strategic decision-making team",
        "A database administrator",
        "An external auditor only"
      ],
      answer: 1,
      explanation: "Today's rapidly changing business environment requires accountants to analyze metrics and provide vital inputs to managers for strategic actions rather than just record ledger entries."
    },
    {
      id: 2,
      question: "Forensic accounting primarily involves:",
      options: [
        "Estimating depreciation on heavy machinery",
        "Solving crimes such as computer hacking and internet financial theft",
        "Developing tax codes for local authorities",
        "Preparing annual income statements"
      ],
      answer: 1,
      explanation: "Forensic accounting is a modern growth area combining auditing skills with investigative techniques to trace cyber thefts and digital fraud."
    },
    {
      id: 3,
      question: "Double-entry book-keeping was first documented by Luca Pacioli in which city and year?",
      options: [
        "Rome, 1492",
        "Venice, 1494",
        "Florence, 1500",
        "Athens, 1494"
      ],
      answer: 1,
      explanation: "Luca Pacioli, a Franciscan friar, published Summa de Arithmetica, Geometria, Proportion at Proportionality in Venice in 1494."
    },
    {
      id: 4,
      question: "The word 'Credit' comes from the Latin root word:",
      options: [
        "Debita",
        "Credo",
        "Debito",
        "Credito"
      ],
      answer: 1,
      explanation: "Credit originates from the Latin word 'credo', which means trust or belief in the proprietor."
    },
    {
      id: 5,
      question: "Which of the following events would NOT be recorded in the books of accounts?",
      options: [
        "Purchasing furniture for office use worth ₹10,000",
        "The death of a highly skilled Managing Director",
        "Paying monthly utility bills of ₹2,500",
        "Selling goods to a client on credit"
      ],
      answer: 1,
      explanation: "Although a Managing Director's death is highly critical to the business, it cannot be quantified in objective monetary terms, failing the 'Measurement' criterion."
    },
    {
      id: 6,
      question: "Recording of transactions must be performed in which order?",
      options: [
        "Alphabetical order",
        "Ascending order of monetary values",
        "Chronological (date-wise) order",
        "Order of liquidity"
      ],
      answer: 2,
      explanation: "Transactions are recorded in the books of accounts in the order of their occurrence (chronological order)."
    },
    {
      id: 7,
      question: "Which of the following is classified as an INTERNAL user of accounting records?",
      options: [
        "Debenture-holders",
        "Tax Authorities",
        "Plant Managers",
        "Trade Unions"
      ],
      answer: 2,
      explanation: "Plant managers are part of the internal operations team, using reports to plan daily manufacturing schedules."
    },
    {
      id: 8,
      question: "Lenders and banks study financial statements primarily to assess an organization's:",
      options: [
        "Environmental policy rating",
        "Creditworthiness and liquidity position",
        "Product design specifications",
        "Board of directors composition"
      ],
      answer: 1,
      explanation: "Lenders need to check if the company has the liquidity to pay interest bills and repay principal amounts on time."
    },
    {
      id: 9,
      question: "When financial reports use consistent units and formats over time to allow performance comparison across periods, they display:",
      options: [
        "Relevance",
        "Understandability",
        "Comparability",
        "Reliability"
      ],
      answer: 2,
      explanation: "Comparability requires reports to follow a common reporting period, units, and format, enabling users to evaluate year-on-year trends."
    },
    {
      id: 10,
      question: "A deduction given to a customer to encourage prompt cash payment is known as:",
      options: [
        "Trade Discount",
        "Cash Discount",
        "Credit Allowance",
        "Sales Rebate"
      ],
      answer: 1,
      explanation: "Cash discounts act as monetary incentives for debtors to pay their dues before the due date, and they are recorded in the ledger accounts."
    }
  ];

  const shortAnswers: ShortAnswer[] = [
    { question: "Define a Business Entity.", answer: "A business entity is a specifically identifiable business enterprise that possesses a distinct individual existence (e.g., Super Bazaar)." },
    { question: "What is the stewardship function of financial accounting?", answer: "The stewardship function refers to managing and accounting for the resources entrusted to the enterprise by shareholders, presenting a true report of the past period's performance." },
    { question: "Give two examples of intangible assets.", answer: "1) Patents, 2) Computer Software." },
    { question: "What is a Voucher?", answer: "A voucher is the documentary evidence in support of a business transaction (e.g., cash memo, invoice, receipt)." },
    { question: "State the GIGO principle in accounting.", answer: "GIGO stands for 'Garbage In, Garbage Out'; it means if incorrect financial data is entered (input), the resulting reports will be incorrect (output)." }
  ];

  const distinctions: Distinction[] = [
    {
      title: "Capital Expenditure vs. Revenue Expenditure",
      desc: "Distinction based on duration of benefits and balance sheet placement.",
      table: {
        headers: ["Feature", "Capital Expenditure", "Revenue Expenditure"],
        rows: [
          ["Duration of Benefit", "Provides economic benefit for more than one year.", "Benefit is fully consumed/exhausted within one year."],
          ["Balance Sheet Impact", "Recorded as an Asset on the Balance Sheet.", "Recorded as an Expense in the Profit & Loss Account."],
          ["Example", "Purchase of a delivery truck.", "Purchase of fuel for the delivery truck."]
        ]
      }
    },
    {
      title: "Trade Discount vs. Cash Discount",
      desc: "Distinction based on objective, ledger records, and applicability.",
      table: {
        headers: ["Feature", "Trade Discount", "Cash Discount"],
        rows: [
          ["Objective", "To encourage bulk sales or trade transactions.", "To encourage prompt and early cash payments from debtors."],
          ["Ledger Recording", "Not recorded in the books of accounts; deducted directly from list price.", "Recorded separately as an expense/income in the ledger."],
          ["Applicability", "Given at the time of purchase/sales.", "Given at the time of payment."]
        ]
      }
    }
  ];

  const assertions: Assertion[] = [
    {
      id: 1,
      assertion: "The appointment of a highly qualified Chief Financial Officer (CFO) is not recorded in the financial books of account.",
      reason: "Only transactions that are of financial character and measurable in monetary terms are recorded in accounting.",
      correctOption: "A",
      explanation: "The assertion is true; appointing a CFO is a qualitative event. The reason is also true and explains why this event is ignored (only monetary transactions are captured)."
    },
    {
      id: 2,
      assertion: "Cash discount is recorded in the books of accounts as a separate entry.",
      reason: "Cash discount is offered to customers to promote bulk purchases of inventory.",
      correctOption: "C",
      explanation: "The assertion is true; cash discount is recorded in the ledger. The reason is false; cash discount is given to prompt quick payment, whereas trade discount is given to promote bulk purchases."
    },
    {
      id: 3,
      assertion: "Accounting reports must use a common unit of measurement and format of reporting.",
      reason: "This format structure promotes the qualitative characteristic of understandability and comparability.",
      correctOption: "A",
      explanation: "Both statements are true. Using common units and formats allows users to easily compare performance across years or different entities (comparability), which directly supports the assertion."
    }
  ];

  const blanks: FillInBlank[] = [
    { id: 1, question: "The first book on double-entry book-keeping was written in Venice by ______ in 1494.", answer: "Luca Pacioli", hint: "A Franciscan friar who spread the double-entry accounting method." },
    { id: 2, question: "The qualitative characteristic of ______ ensures that the accounting information is free from error and bias.", answer: "Reliability", hint: "Verifiability, neutrality, and faithful representation support this pillar." },
    { id: 3, question: "Supply of raw materials from stores to the manufacturing division is an example of an ______ economic event.", answer: "Internal", hint: "It occurs entirely within the wings of the enterprise, without involving outsiders." },
    { id: 4, question: "The excess of revenues over expenses is called ______ during an accounting year.", answer: "Profit", hint: "It increases the investment of the owners." },
    { id: 5, question: "In ancient India, Kautilya wrote the book ______ which described how accounting records should be maintained.", answer: "Arthashasthra", hint: "Written twenty-three centuries ago during Chandragupta's kingdom." }
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-emerald-950/5 blur-[130px] pointer-events-none" />

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
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <BookOpen size={14} className="text-emerald-450" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-300">Class 11 Accountancy</span>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 py-8 relative z-10">
        
        {/* Banner Section */}
        <section className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            Revision Notes &amp; Interactive Lab
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none mb-3">
            Introduction to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400 font-extrabold">Accounting</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Master the fundamentals of the accounting cycle, primary user groups, qualitative pillars, and key balance sheet terms. Complete the tests below to verify your concept mastery.
          </p>
        </section>

        {/* Visual Map section */}
        <section className="bg-slate-950/70 border border-slate-850 rounded-[28px] p-6 mb-8">
          <h3 className="text-xs font-black text-slate-450 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            The Accounting Information Cycle
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center text-center">
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-550 font-bold uppercase">Step 1</span>
              <span className="text-xs font-black text-white">Identify</span>
            </div>
            <div className="text-slate-755 hidden sm:block">➔</div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-555 font-bold uppercase">Step 2</span>
              <span className="text-xs font-black text-white">Measure</span>
            </div>
            <div className="text-slate-755 hidden sm:block">➔</div>
            <div className="bg-[#121217] border border-white/5 p-3 rounded-2xl">
              <span className="block text-[10px] text-slate-555 font-bold uppercase">Step 3</span>
              <span className="text-xs font-black text-white">Record &amp; Comm</span>
            </div>
          </div>
        </section>

        {/* Developer Analogies / Tips */}
        <section className="mb-10 bg-indigo-950/20 border border-indigo-500/25 p-5 rounded-2xl flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
            <Code2 size={18} className="text-indigo-400" />
          </div>
          <div>
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest block mb-1">Developer Metaphor</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Think of accounting like Git commands: **Economic Transactions** are code commits. **Recording** is a `git push` to your repository. **Communication** is compiling your metrics into a telemetry dashboard. If your debits and credits do not balance, your pipeline build fails! 🛠️
            </p>
          </div>
        </section>

        {/* ── INTERACTIVE TEST BANK ── */}
        <section className="space-y-12">
          
          {/* 1. Multiple Choice Questions */}
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 rounded-lg text-xs">1</span>
              Paragraph-Level MCQs
            </h2>
            <div className="space-y-6">
              {mcqs.map((mcq, mIdx) => {
                const hasSelected = selectedMcqs[mcq.id] !== undefined;
                const isCorrect = selectedMcqs[mcq.id] === mcq.answer;
                const reveal = showMcqAnswers[mcq.id];

                return (
                  <div key={mcq.id} className="bg-[#121217]/50 border border-slate-855 rounded-[24px] p-5 md:p-6 text-left">
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
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 rounded-lg text-xs">2</span>
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
                    <button
                      onClick={() => toggleShortAnswer(idx)}
                      className="mt-3 text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-355 tracking-wider cursor-pointer"
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
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 rounded-lg text-xs">3</span>
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
                      <tbody className="divide-y divide-slate-855 bg-[#0c0c14]/40">
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
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 rounded-lg text-xs">4</span>
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
                        <p className="text-xs font-black text-white leading-relaxed">
                          **Assertion:** {item.assertion}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-850 text-[9px] font-black rounded h-fit mt-0.5">R</span>
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
                      <div className="mt-4 p-4 bg-slate-900/40 border border-slate-800 rounded-xl">
                        <span className="text-[10px] font-black text-emerald-450 uppercase tracking-widest block mb-1">
                          Correct Choice: ({item.correctOption})
                        </span>
                        <p className="text-xs text-slate-450 leading-relaxed mt-1">{item.explanation}</p>
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
              <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 rounded-lg text-xs">5</span>
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
                        className="px-3 py-1.5 bg-[#07070c] border border-slate-800 hover:border-slate-700 text-[10px] text-indigo-400 hover:text-white font-bold rounded-lg cursor-pointer"
                      >
                        {reveal ? `Answer: ${item.answer}` : 'Reveal Answer'}
                      </button>
                      <button
                        onClick={() => toggleBlankHint(item.id)}
                        className="px-3 py-1.5 bg-[#07070c] border border-slate-800 hover:border-slate-700 text-[10px] text-amber-500 hover:text-amber-450 font-bold rounded-lg cursor-pointer"
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
