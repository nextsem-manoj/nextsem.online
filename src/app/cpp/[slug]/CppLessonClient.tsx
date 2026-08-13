"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CppLesson, cppLessons } from "@/data/cppLessonsData";
import UniversalLessonTemplate from "@/components/UniversalLessonTemplate";
import { CheckCircle2, HelpCircle, AlertCircle, Award, ChevronRight } from "lucide-react";

interface CppLessonClientProps {
  lesson: CppLesson;
}

export default function CppLessonClient({ lesson }: CppLessonClientProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const prevLesson = cppLessons.find((l) => l.id === lesson.id - 1) || null;
  const nextLesson = cppLessons.find((l) => l.id === lesson.id + 1) || null;

  const isCorrect = selectedOption === lesson.exercise.correctAnswer;

  const handleOptionSelect = (option: string) => {
    if (submitted) return;
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    setSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedOption(null);
    setSubmitted(false);
    setShowHint(false);
  };

  return (
    <div className="min-h-screen bg-[#17181c] text-white py-8 px-2 sm:px-4">
      {/* Universal Lesson Header & Single-Stream Content */}
      <UniversalLessonTemplate
        subject="cpp"
        subjectTitle="C++ Programming & Systems Engineering"
        subjectDashboardUrl="/cpp"
        totalLessonsInSubject={20}
        lesson={{
          id: lesson.id,
          slug: lesson.slug,
          title: lesson.title,
          unit: lesson.unit,
          bookRef: lesson.bookRef,
          screenshots: lesson.screenshots
        }}
        contentBody={lesson.contentBody}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />

      {/* Interactive MCQ Knowledge Check Section */}
      <div className="max-w-5xl mx-auto mt-10 space-y-6">
        <div className="p-6 md:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-[#04AA6D]">
              <HelpCircle size={22} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">Interactive Knowledge Check</h3>
              <p className="text-xs text-slate-400">Test your understanding of Lesson #{lesson.id} concepts</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base font-bold text-white leading-relaxed">
              {lesson.exercise.question}
            </p>

            <div className="space-y-2">
              {lesson.exercise.options.map((option, idx) => {
                let btnStyle = "bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-700";

                if (selectedOption === option) {
                  btnStyle = "bg-[#04AA6D]/20 border-[#04AA6D] text-white font-bold";
                }

                if (submitted) {
                  if (option === lesson.exercise.correctAnswer) {
                    btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-extrabold";
                  } else if (selectedOption === option) {
                    btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300 font-bold";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {submitted && option === lesson.exercise.correctAnswer && (
                      <CheckCircle2 size={18} className="text-emerald-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Buttons & Feedback */}
          <div className="space-y-3 pt-2">
            {!submitted ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCheckAnswer}
                  disabled={!selectedOption}
                  className={`px-6 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    selectedOption
                      ? "bg-[#04AA6D] hover:bg-[#039861] text-white shadow-lg shadow-[#04AA6D]/20"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Check Answer
                </button>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs font-bold text-slate-400 hover:text-amber-400 underline cursor-pointer"
                >
                  {showHint ? "Hide Hint" : "Need a Hint?"}
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div
                  className={`p-4 rounded-xl border text-xs leading-relaxed ${
                    isCorrect
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-medium"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-300 font-medium"
                  }`}
                >
                  {isCorrect ? (
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-emerald-400" />
                      <span>🎉 Outstanding! You answered correctly. Move to the next lesson or review details above.</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <AlertCircle size={18} className="text-rose-400" />
                      <span>Incorrect answer. Review the lesson material above and try again!</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleResetQuiz}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-bold transition-all cursor-pointer"
                  >
                    Try Again
                  </button>

                  {nextLesson && (
                    <Link
                      href={`/cpp/${nextLesson.slug}`}
                      className="px-5 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-1 shadow-md shadow-[#04AA6D]/20"
                    >
                      <span>Next Lesson »</span>
                    </Link>
                  )}
                </div>
              </div>
            )}

            {showHint && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs font-mono">
                💡 Hint: {lesson.exercise.hint}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
