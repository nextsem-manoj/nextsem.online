"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { coursePhases } from '../data/courseData';
import PhaseCard from './PhaseCard';

const CourseTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartY = useRef(0);

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(coursePhases.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    
    // threshold for swipe
    if (diff > 50) {
      handleNext(); // swiped up
    } else if (diff < -50) {
      handlePrev(); // swiped down
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') handleNext();
      if (e.key === 'ArrowUp') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentPhase = coursePhases[activeIndex];

  return (
    <div className="flex-1 flex flex-col relative group items-center">
      <h2 className="text-[#0f172a] dark:text-white font-black text-2xl mb-6 text-center uppercase tracking-wide">
        COMPLETE COURSE STRUCTURE
      </h2>
      
      {/* Swipe Container */}
      <div 
        className="relative w-full max-w-2xl h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 select-none touch-pan-x"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute top-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          Swipe Up/Down or use Arrows
        </div>
        
        {/* Navigation Dots (Vertical) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
          {coursePhases.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300 dark:bg-gray-600'}`}
            ></div>
          ))}
        </div>

        {/* Up/Down Arrows for Desktop */}
        <button 
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="absolute top-8 z-20 p-2 bg-white/80 dark:bg-slate-700/80 rounded-full shadow hover:bg-white disabled:opacity-0 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
        
        <button 
          onClick={handleNext}
          disabled={activeIndex === coursePhases.length - 1}
          className="absolute bottom-8 z-20 p-2 bg-white/80 dark:bg-slate-700/80 rounded-full shadow hover:bg-white disabled:opacity-0 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {/* The Card */}
        <div className="w-full px-12 md:px-16 flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-500" key={currentPhase.id}>
          <Link href={`/book/${currentPhase.path}`} className="block w-full max-w-lg transition-transform hover:scale-[1.02]">
            <PhaseCard phase={currentPhase} onClick={() => {}} />
          </Link>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="bg-[#0f172a] text-white py-3 px-6 rounded-lg mb-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm font-bold shadow-md mt-6 mx-2 sm:mx-8 w-full max-w-2xl">
        <span>Total Duration: 34 - 45 Weeks (8 - 10 Months)</span>
        <span className="hidden sm:inline text-gray-500">|</span>
        <span>Project Based Learning</span>
        <span className="hidden sm:inline text-gray-500">|</span>
        <span className="text-yellow-400">Get Placed</span>
      </div>
    </div>
  );
};

export default CourseTimeline;
