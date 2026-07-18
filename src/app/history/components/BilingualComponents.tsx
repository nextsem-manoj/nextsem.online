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
  // English parameters
  enQuestion: string;
  enOptions: string; // Comma separated options
  enCorrectOption: string;
  enExplanation: string;
  // Hindi parameters
  hiQuestion: string;
  hiOptions: string; // Comma separated options
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

  // Extract letter from option prefix (e.g. "[A]" or "A)")
  const getLetter = (opt: string) => {
    const match = opt.match(/^\[?([A-D])\]?/i);
    return match ? match[1].toUpperCase() : opt[0].toUpperCase();
  };

  const isCorrect = selected && getLetter(selected) === getLetter(correctOption);

  return (
    <div className="w-full p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 my-6 text-xs md:text-sm">
      {/* Question */}
      <h4 className="font-bold text-white leading-relaxed flex gap-2">
        <span className="text-purple-400">❓</span>
        <span>{question}</span>
      </h4>

      {/* Options */}
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
                  ? "bg-purple-950/40 border-purple-500 text-purple-300"
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

      {/* Actions */}
      <div className="flex gap-2">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95 shadow-lg shadow-purple-600/10"
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

      {/* Explanation banner */}
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
  enCorrectAnswer: string; // Comma separated acceptable answers
  enExplanation: string;
  
  hiPreText: string;
  hiPostText: string;
  hiCorrectAnswer: string; // Comma separated acceptable answers in Hindi
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
            className={`px-3 py-1 bg-slate-950 border rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 font-bold font-mono text-center text-xs md:text-sm ${
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

      {/* Actions */}
      <div className="flex gap-2">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!val.trim()}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer active:scale-95 shadow-lg shadow-purple-600/10"
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

      {/* Explanation Box */}
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
