"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { coursePhases } from "../data/courseData";
import PhaseCard from "../components/PhaseCard";
import BottomFeatures from "../components/BottomFeatures";
import Footer from "../components/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartY = useRef(0);
  const totalSlides = coursePhases.length + 4; // Hero + 8 Phases + Features Part 1 + Features Part 2 + Footer

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(totalSlides - 1, prev + 1));
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
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") handleNext();
      if (e.key === "ArrowUp") handlePrev();
    };
    
    let wheelTimeout: NodeJS.Timeout | null = null;
    const handleWheel = (e: WheelEvent) => {
      if (wheelTimeout) return;
      if (e.deltaY > 40) {
        handleNext();
        wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 500);
      } else if (e.deltaY < -40) {
        handlePrev();
        wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });
    
    // Prevent default scroll behavior on body
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleStartLearning = () => {
    if (typeof window !== "undefined") {
      const docEl = document.documentElement;
      try {
        if (docEl.requestFullscreen) {
          docEl.requestFullscreen().catch(() => {});
        } else if ((docEl as any).webkitRequestFullscreen) {
          (docEl as any).webkitRequestFullscreen();
        }
      } catch (err) {
        console.warn("Fullscreen request blocked", err);
      }
    }
  };

  const getGlowClass = (index: number) => {
    if (index === 0) return "from-blue-500/20 via-indigo-500/10 to-transparent";
    if (index >= 1 && index <= coursePhases.length) {
      const phase = coursePhases[index - 1];
      const id = phase.id;
      if (id.startsWith("P0")) return "from-blue-500/25 via-sky-500/10 to-transparent";
      if (id.startsWith("P1")) return "from-violet-500/25 via-purple-500/10 to-transparent";
      if (id.startsWith("P2")) return "from-pink-500/25 via-rose-500/10 to-transparent";
      if (id.startsWith("P3")) return "from-amber-500/25 via-yellow-500/10 to-transparent";
      if (id.startsWith("P4")) return "from-cyan-500/25 via-teal-500/10 to-transparent";
      if (id.startsWith("P5")) return "from-emerald-500/25 via-teal-500/10 to-transparent";
      if (id.startsWith("P6")) return "from-fuchsia-500/25 via-pink-500/10 to-transparent";
      if (id.startsWith("P7")) return "from-purple-500/25 via-indigo-500/10 to-transparent";
    }
    return "from-slate-500/15 via-slate-600/10 to-transparent";
  };

  return (
    <div 
      className="h-[100dvh] w-full bg-slate-50 dark:bg-[#060c18] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-200 relative overflow-hidden select-none transition-colors duration-1000"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Ambient Background Glows (Stationary for Parallax) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute -top-[20%] -left-[20%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full blur-[100px] md:blur-[150px] bg-gradient-to-br ${getGlowClass(activeIndex)} transition-all duration-[1000ms] ease-out animate-slow-rotate`} />
        <div className={`absolute -bottom-[20%] -right-[20%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full blur-[100px] md:blur-[150px] bg-gradient-to-tl ${getGlowClass((activeIndex + 2) % totalSlides)} transition-all duration-[1000ms] ease-out opacity-80 animate-slow-rotate`} />
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 bg-slate-900/40 dark:bg-black/40 backdrop-blur-md py-4 px-2.5 rounded-full border border-white/10 dark:border-slate-800/50 shadow-lg transition-all duration-300">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex 
                ? "bg-blue-500 dark:bg-blue-400 scale-125 shadow-[0_0_10px_rgba(59,130,246,0.8)]" 
                : "bg-slate-400/60 dark:bg-slate-600/60 hover:bg-slate-650"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 text-xs font-bold text-gray-400 uppercase tracking-widest animate-pulse pointer-events-none">
        Swipe or Scroll Up/Down
      </div>

      {/* Slide Container (translates Y based on activeIndex) */}
      <div 
        className="w-full h-full transition-transform duration-[850ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] flex flex-col will-change-transform transform-gpu"
        style={{ transform: `translate3d(0, -${activeIndex * 100}dvh, 0)` }}
      >
        
        {/* Slide 0: Hero */}
        <div className="h-[100dvh] w-full shrink-0 flex items-center justify-center p-3 md:p-4">
          <div className="flex flex-col items-center justify-center text-center py-6 px-3.5 md:py-10 md:px-4 w-full max-w-4xl bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-[#060c18] rounded-2xl border border-blue-100 dark:border-slate-800 shadow-sm transition-opacity duration-1000">
            
            {/* Introductory Badge with NS logo */}
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 md:px-4.5 md:py-2.5 rounded-full bg-[#020713]/90 border border-[#0f533a]/65 dark:border-emerald-500/20 mb-4 md:mb-8 text-xs sm:text-sm md:text-base shadow-[0_0_15px_rgba(16,185,129,0.12)]">
              <a href="https://bca-nextsem.web.app/book/p0-developer-setup" onClick={handleStartLearning} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <div className="bg-black rounded-lg w-6.5 h-6.5 md:w-7.5 md:h-7.5 flex items-center justify-center border border-[#4ade80]/50 font-black text-[10px] md:text-xs text-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.4)]">
                  NS
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-100 dark:text-white">Free Front End Developer Course by</span>
              </a>
              <a 
                href="https://bca-nextsem.web.app/book/p0-developer-setup" 
                onClick={handleStartLearning}
                className="text-[#4ade80] dark:text-[#4ade80] hover:text-emerald-400 font-black underline decoration-2 decoration-[#4ade80]/40 hover:decoration-[#4ade80] transition-all text-[10px] sm:text-xs md:text-sm"
              >
                Nextsem
              </a>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-6xl font-black text-slate-900 dark:text-white mb-3 md:mb-6 tracking-tight leading-tight">
              Start your journey to become a <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Front End Developer</span>
            </h2>
            <p className="text-slate-500 dark:text-gray-300 max-w-2xl text-[10px] sm:text-sm md:text-lg font-medium mb-6 md:mb-10">
              Master the skills needed to build stunning web applications. From absolute beginner to job-ready developer, the JBRS Practical Series will guide you step-by-step through real-world projects.
            </p>
            <a 
              href="/book/p0-developer-setup" 
              onClick={handleStartLearning}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm md:text-xl py-3 px-8 md:py-4 md:px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>🚀</span> Start Learning Now
            </a>
          </div>
        </div>

        {/* Slides 1-8: Course Phases */}
        {coursePhases.map((phase) => (
          <div key={phase.id} className="h-[100dvh] w-full shrink-0 flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
            {/* Massive Background Text */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
              <span className="text-[20rem] md:text-[35rem] font-black">{phase.id}</span>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl bg-white/70 dark:bg-slate-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden group">
              
              {/* Left Side: Branding and Icon */}
              <div className={`${phase.color} p-10 md:w-2/5 flex flex-col items-center justify-center text-white relative overflow-hidden transition-transform duration-700`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                
                <span className="text-xl font-bold tracking-widest uppercase mb-2 opacity-90 drop-shadow-sm">{phase.duration}</span>
                <h2 className="text-5xl md:text-6xl font-black text-center mb-8 drop-shadow-md leading-none">{phase.id}</h2>
                
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-5xl md:text-7xl font-black shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {phase.icon}
                </div>
              </div>

              {/* Right Side: Content and Topics */}
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                  {phase.title}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {phase.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: phase.color.replace('bg-[', '').replace(']', '') || '#3b82f6' }}></div>
                      <span className="text-sm md:text-base">{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href={`/book/${phase.path}`} 
                    onClick={handleStartLearning}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-slate-900 font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    <span>Explore Phase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>

                  {phase.id === "P5" && (
                    <a 
                      href="https://nodejs-by-nextsem.web.app/?source=pwa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
                    >
                      <span>Deep Dive Node.js 🚀</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}

        {/* Slide 9: Features Part 1 */}
        <div className="h-[100dvh] w-full shrink-0 flex flex-col items-center justify-center p-4 md:p-12 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-[#060c18] dark:to-slate-900">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <div className="relative z-10 max-w-7xl w-full flex flex-col items-center">
            <div className="text-center mb-8">
              <h2 className="text-sm md:text-lg font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-2">Everything You Need</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Tools & Projects</h3>
            </div>
            
            <BottomFeatures part={1} />
          </div>
        </div>

        {/* Slide 10: Features Part 2 */}
        <div className="h-[100dvh] w-full shrink-0 flex flex-col items-center justify-center p-4 md:p-12 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-[#060c18]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <div className="relative z-10 max-w-7xl w-full flex flex-col items-center">
            <div className="text-center mb-8">
              <h2 className="text-sm md:text-lg font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-2">Success Formula</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Features & Pedagogy</h3>
            </div>
            
            <BottomFeatures part={2} />
          </div>
        </div>

        {/* Slide 11: Final CTA and Footer */}
        <div className="h-[100dvh] w-full shrink-0 flex flex-col items-center justify-between relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl text-center px-4 relative z-10">
            <span className="text-6xl md:text-8xl mb-8">🎓</span>
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light">
              Join thousands of students and start your journey to becoming a job-ready Front End Developer today.
            </p>
            <Link 
              href="/book/p0-developer-setup" 
              className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-500 hover:to-green-400 text-white font-black text-2xl py-6 px-12 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all transform hover:scale-105"
            >
              <span>Start Learning For Free</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          <div className="w-full relative z-10 pb-16 md:pb-0 bg-black/30 backdrop-blur-md">
            <Footer />
          </div>
        </div>

      </div>
    </div>
  );
}
