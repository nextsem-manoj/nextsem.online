"use client";

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, X, AlertCircle } from 'lucide-react';

// ── English Text Wrapper ──────────────────────────────────────────────────
export function English({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  if (language !== 'en') return null;
  return <div className="animate-in fade-in duration-200">{children}</div>;
}

// ── Hindi Text Wrapper ────────────────────────────────────────────────────
export function Hindi({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  if (language !== 'hi') return null;
  return <div className="animate-in fade-in duration-200">{children}</div>;
}

// ── Bilingual MCQ Quiz ────────────────────────────────────────────────────
interface BilingualQuizProps {
  questionId: string;
  enQuestion: string;
  enOptions: string;
  enCorrectOption: string;
  enExplanation: string;
  
  hiQuestion: string;
  hiOptions: string;
  hiCorrectOption: string;
  hiExplanation: string;
}

export function BilingualQuiz({
  enQuestion,
  enOptions,
  enCorrectOption,
  enExplanation,
  hiQuestion,
  hiOptions,
  hiCorrectOption,
  hiExplanation,
}: BilingualQuizProps) {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isEn = language === 'en';
  const question = isEn ? enQuestion : hiQuestion;
  const rawOptions = isEn ? enOptions : hiOptions;
  const correctOption = isEn ? enCorrectOption : hiCorrectOption;
  const explanation = isEn ? enExplanation : hiExplanation;

  const optionsList = rawOptions.split(',').map((o) => o.trim());

  const handleOptionClick = (opt: string) => {
    if (submitted) return;
    setSelected(opt);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const getLetter = (opt: string) => {
    const match = opt.match(/^\[?([A-D])\]?/i);
    return match ? match[1].toUpperCase() : opt[0].toUpperCase();
  };

  const isCorrect = selected && getLetter(selected) === getLetter(correctOption);

  return (
    <div className="w-full p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 my-6 text-xs md:text-sm">
      <h4 className="font-bold text-white leading-relaxed flex gap-2">
        <span className="text-blue-400">❓</span>
        <span>{question}</span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {optionsList.map((opt) => {
          const letter = getLetter(opt);
          const isSelected = selected === opt;
          const showSuccess = submitted && letter === getLetter(correctOption);
          const showFailure = submitted && isSelected && !isCorrect;

          return (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              disabled={submitted}
              className={`w-full text-left p-3.5 rounded-xl border font-semibold transition-all active:scale-[0.99] flex items-center justify-between ${
                showSuccess
                  ? "bg-emerald-950/40 border-emerald-500 text-emerald-300"
                  : showFailure
                  ? "bg-rose-950/40 border-rose-500 text-rose-300"
                  : isSelected
                  ? "bg-sky-950/40 border-sky-500 text-sky-300"
                  : "bg-slate-950/20 border-slate-850 text-slate-350 hover:border-slate-700 hover:bg-slate-950/40"
              }`}
            >
              <span>{opt}</span>
              {showSuccess && <Check size={16} className="text-emerald-400 shrink-0" />}
              {showFailure && <X size={16} className="text-rose-400 shrink-0" />}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95 shadow-lg shadow-sky-600/10"
          >
            {isEn ? "Submit Answer" : "उत्तर भेजें"}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-750 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all cursor-pointer active:scale-95"
          >
            {isEn ? "Reset Drill ↺" : "फिर से प्रयास करें ↺"}
          </button>
        )}
      </div>

      {submitted && (
        <div className={`p-4 rounded-xl border animate-in fade-in duration-300 ${
          isCorrect ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-300/90" : "bg-rose-950/20 border-rose-500/20 text-rose-300/90"
        }`}>
          <div className="flex gap-2 items-start">
            <AlertCircle size={16} className={isCorrect ? "text-emerald-400 shrink-0 mt-0.5" : "text-rose-400 shrink-0 mt-0.5"} />
            <div>
              <span className="font-black uppercase tracking-wider text-[10px] block mb-1">
                {isCorrect 
                  ? (isEn ? "✓ Correct Explanation" : "✓ सही उत्तर व्याख्या")
                  : (isEn ? "❌ Incorrect Explanation" : "❌ गलत उत्तर व्याख्या")}
              </span>
              <p className="text-xs font-bold leading-relaxed">{explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Bilingual Fill in the Blank Drill ─────────────────────────────────────
interface BilingualFillBlankProps {
  questionId: string;
  enPreText: string;
  enPostText: string;
  enCorrectAnswer: string;
  enExplanation: string;
  
  hiPreText: string;
  hiPostText: string;
  hiCorrectAnswer: string;
  hiExplanation: string;
}

export function BilingualFillBlank({
  enPreText,
  enPostText,
  enCorrectAnswer,
  enExplanation,
  hiPreText,
  hiPostText,
  hiCorrectAnswer,
  hiExplanation,
}: BilingualFillBlankProps) {
  const { language } = useLanguage();
  const [val, setVal] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isEn = language === 'en';
  const preText = isEn ? enPreText : hiPreText;
  const postText = isEn ? enPostText : hiPostText;
  const correctAnswers = (isEn ? enCorrectAnswer : hiCorrectAnswer).split(',').map(a => a.trim().toLowerCase());
  const explanation = isEn ? enExplanation : hiExplanation;

  const sampleAnswer = (isEn ? enCorrectAnswer : hiCorrectAnswer).split(',')[0].trim();
  const firstLetter = sampleAnswer.charAt(0).toUpperCase();
  const letterLength = sampleAnswer.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!val.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setVal('');
    setSubmitted(false);
  };

  const isCorrect = correctAnswers.includes(val.trim().toLowerCase());

  return (
    <div className="w-full p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 my-6 text-xs md:text-sm">
      <h4 className="font-bold text-white flex items-center gap-1.5">
        <span>✏️</span>
        <span>{isEn ? "Fill in the Blank:" : "रिक्त स्थान भरें:"}</span>
      </h4>

      <div className="space-y-1.5">
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2 text-white font-bold leading-relaxed">
          <span>{preText}</span>
          <input 
            type="text" 
            value={val}
            onChange={(e) => setVal(e.target.value)}
            disabled={submitted}
            placeholder={isEn ? "Type answer..." : "उत्तर लिखें..."}
            className={`px-3 py-1 bg-slate-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 font-bold font-mono text-center text-xs md:text-sm ${
              submitted 
                ? (isCorrect ? "border-emerald-500 text-emerald-300" : "border-rose-500 text-rose-300")
                : "border-slate-800 text-white"
            }`}
            style={{ width: '170px' }}
          />
          <span>{postText}</span>
        </form>

        {/* Dynamic real-time suggestion hint */}
        {!submitted && (
          <div className="text-[10px] font-bold text-slate-500 flex items-center gap-1 animate-pulse">
            <span>💡</span>
            <span>
              {isEn 
                ? `Hint: Starts with "${firstLetter}" (${letterLength} letters)` 
                : `संकेत: "${firstLetter}" से शुरू (${letterLength} अक्षर)`}
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!val.trim()}
            className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95 shadow-lg shadow-sky-600/10"
          >
            {isEn ? "Check Answer" : "जांचें"}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-750 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all cursor-pointer active:scale-95"
          >
            {isEn ? "Reset Drill ↺" : "फिर से प्रयास करें ↺"}
          </button>
        )}
      </div>

      {submitted && (
        <div className={`p-4 rounded-xl border animate-in fade-in duration-300 ${
          isCorrect ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-300/90" : "bg-rose-950/20 border-rose-500/20 text-rose-300/90"
        }`}>
          <div className="flex gap-2 items-start">
            <AlertCircle size={16} className={isCorrect ? "text-emerald-400 shrink-0 mt-0.5" : "text-rose-400 shrink-0 mt-0.5"} />
            <div>
              <span className="font-black uppercase tracking-wider text-[10px] block mb-1">
                {isCorrect 
                  ? (isEn ? "✓ Correct Answer" : "✓ सही उत्तर")
                  : (isEn ? "❌ Incorrect Answer" : "❌ गलत उत्तर")}
              </span>
              <p className="text-xs font-bold leading-relaxed mb-1.5">
                {isEn ? "Accepted answers: " : "स्वीकार्य उत्तर: "}
                <span className="font-mono bg-black/45 px-1.5 py-0.5 rounded text-white">{isEn ? enCorrectAnswer : hiCorrectAnswer}</span>
              </p>
              <p className="text-xs font-bold leading-relaxed">{explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Bilingual Match the Following Question ──────────────────────────────
interface BilingualMatchProps {
  questionId: string;
  enQuestion: string;
  hiQuestion: string;
  enLeftItems: string;
  hiLeftItems: string;
  enRightItems: string;
  hiRightItems: string;
  enOptions: string;
  hiOptions: string;
  enCorrectOption: string;
  hiCorrectOption: string;
  enExplanation: string;
  hiExplanation: string;
}

export function BilingualMatchQuestion({
  enQuestion,
  hiQuestion,
  enLeftItems,
  hiLeftItems,
  enRightItems,
  hiRightItems,
  enOptions,
  hiOptions,
  enCorrectOption,
  hiCorrectOption,
  enExplanation,
  hiExplanation
}: BilingualMatchProps) {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isEn = language === 'en';
  const question = isEn ? enQuestion : hiQuestion;
  const leftItems = (isEn ? enLeftItems : hiLeftItems).split(',').map(s => s.trim());
  const rightItems = (isEn ? enRightItems : hiRightItems).split(',').map(s => s.trim());
  const rawOptions = isEn ? enOptions : hiOptions;
  const correctOption = isEn ? enCorrectOption : hiCorrectOption;
  const explanation = isEn ? enExplanation : hiExplanation;

  const optionsList = rawOptions.split(',').map((o) => o.trim());

  const handleOptionClick = (opt: string) => {
    if (submitted) return;
    setSelected(opt);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const getLetter = (opt: string) => {
    const match = opt.match(/^\[?([A-D])\]?/i);
    return match ? match[1].toUpperCase() : opt[0].toUpperCase();
  };

  const isCorrect = selected && getLetter(selected) === getLetter(correctOption);

  return (
    <div className="w-full p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 my-6 text-xs md:text-sm">
      <h4 className="font-bold text-white flex items-center gap-1.5">
        <span>🔗</span>
        <span>{isEn ? "Match the Following:" : "सही मिलान करें:"}</span>
      </h4>

      <p className="text-slate-300 font-bold leading-relaxed">{question}</p>

      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/30 border border-slate-850">
        <div className="space-y-2 border-r border-slate-850 pr-2">
          <span className="text-[9px] font-black uppercase text-slate-500 block mb-1">Column I</span>
          {leftItems.map((item, idx) => (
            <div key={idx} className="text-slate-355 font-bold leading-relaxed text-xs">
              {item}
            </div>
          ))}
        </div>

        <div className="space-y-2 pl-2">
          <span className="text-[9px] font-black uppercase text-slate-500 block mb-1">Column II</span>
          {rightItems.map((item, idx) => (
            <div key={idx} className="text-slate-355 font-bold leading-relaxed text-xs">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        {optionsList.map((opt) => {
          const letter = getLetter(opt);
          const isSelected = selected === opt;
          const showSuccess = submitted && letter === getLetter(correctOption);
          const showFailure = submitted && isSelected && !isCorrect;

          return (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              disabled={submitted}
              className={`w-full text-left p-3 rounded-xl border font-semibold transition-all active:scale-[0.99] flex items-center justify-between ${
                showSuccess
                  ? "bg-emerald-950/40 border-emerald-500 text-emerald-300"
                  : showFailure
                  ? "bg-rose-950/40 border-rose-500 text-rose-300"
                  : isSelected
                  ? "bg-sky-950/40 border-sky-500 text-sky-305"
                  : "bg-slate-950/20 border-slate-850 text-slate-350 hover:border-slate-700 hover:bg-slate-950/40"
              }`}
            >
              <span>{opt}</span>
              {showSuccess && <Check size={16} className="text-emerald-400 shrink-0" />}
              {showFailure && <X size={16} className="text-rose-400 shrink-0" />}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95 shadow-lg shadow-sky-600/10"
          >
            {isEn ? "Submit Answer" : "उत्तर भेजें"}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-750 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all cursor-pointer active:scale-95"
          >
            {isEn ? "Reset Drill ↺" : "फिर से प्रयास करें ↺"}
          </button>
        )}
      </div>

      {submitted && (
        <div className={`p-4 rounded-xl border animate-in fade-in duration-300 ${
          isCorrect ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-300/90" : "bg-rose-950/20 border-rose-500/20 text-rose-300/90"
        }`}>
          <div className="flex gap-2 items-start">
            <AlertCircle size={16} className={isCorrect ? "text-emerald-400 shrink-0 mt-0.5" : "text-rose-400 shrink-0 mt-0.5"} />
            <div>
              <span className="font-black uppercase tracking-wider text-[10px] block mb-1">
                {isCorrect 
                  ? (isEn ? "✓ Correct Match" : "✓ सही मिलान")
                  : (isEn ? "❌ Incorrect Match" : "❌ गलत मिलान")}
              </span>
              <p className="text-xs font-bold leading-relaxed">{explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

