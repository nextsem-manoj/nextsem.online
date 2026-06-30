"use client";

import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { CheckCircle } from 'lucide-react';

export default function MarkCompleteButton({ chapterId }: { chapterId: string }) {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const isCompleted = completedChapters[chapterId];

  const toggleCompletion = () => {
    if (isCompleted) {
      markIncomplete(chapterId);
    } else {
      markCompleted(chapterId);
    }
  };

  return (
    <div className="mt-8 flex justify-center border-t border-gray-200 dark:border-slate-800 pt-8">
      <button 
        onClick={toggleCompletion}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-md transition-all duration-300 ${isCompleted ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-800 dark:text-gray-100'}`}
      >
        <CheckCircle size={20} className={isCompleted ? 'text-white' : 'text-gray-400 dark:text-gray-300'} />
        {isCompleted ? 'Completed!' : 'Mark as Complete'}
      </button>
    </div>
  );
}
