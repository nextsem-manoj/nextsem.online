"use client";

import React from 'react';
import Link from 'next/link';
import { Flame, ArrowRight, Sparkles } from 'lucide-react';

export default function CandleFlameThumbnail() {
  return (
    <div className="bg-[#0b0f19] border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 group">
      
      {/* Left: Animated Flame Preview Graphics */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        
        {/* Animated Mini Realistic Candle Frame */}
        <div className="w-16 h-22 bg-[#06080e] border border-slate-800 rounded-xl flex flex-col items-center justify-end pb-2 relative overflow-hidden shrink-0 shadow-inner">
          
          {/* Ambient Glow */}
          <div className="absolute w-14 h-14 bg-amber-500/25 rounded-full blur-xl animate-pulse" />

          {/* Mini Realistic Flame */}
          <div className="relative flex flex-col items-center justify-end mb-0.5 z-10 animate-flicker">
            {/* Blue base */}
            <div className="w-3.5 h-2 bg-gradient-to-t from-blue-600 via-blue-400 to-transparent rounded-b-md absolute bottom-0 blur-[0.5px]" />
            {/* Outer flame */}
            <div className="w-4 h-8 rounded-[50%_50%_35%_35%/80%_80%_25%_25%] bg-gradient-to-t from-orange-500 via-amber-400 to-transparent shadow-[0_0_12px_#f97316] flex justify-center items-end pb-0.5">
              {/* Mid yellow */}
              <div className="w-2.5 h-5 rounded-[50%_50%_35%_35%/80%_80%_25%_25%] bg-yellow-300 shadow-[0_0_8px_#fde047] flex justify-center items-end pb-0.5">
                {/* White core */}
                <div className="w-1 h-2.5 rounded-[50%_50%_35%_35%/80%_80%_25%_25%] bg-white shadow-[0_0_4px_#fff]" />
              </div>
            </div>
          </div>

          {/* Mini Wick with Glowing Ember */}
          <div className="relative w-0.5 h-3 -mb-1 z-10 flex flex-col items-center">
            <div className="w-1 h-1 bg-[#ff4500] rounded-full shadow-[0_0_4px_#ff4500]" />
            <div className="w-0.5 h-2 bg-slate-900" />
          </div>

          {/* Mini 3D Wax Pillar Body */}
          <div className="w-10 h-10 bg-gradient-to-r from-[#e2d098] via-[#fef9c3] via-[#fef08a] via-[#fde047] to-[#854d0e] rounded-t-sm rounded-b-md z-10 relative shadow-md">
            {/* Molten pool */}
            <div className="w-full h-2 bg-gradient-to-r from-[#fef08a] to-[#713f12] rounded-[50%] absolute -top-1 border-t border-white/60" />
            {/* Mini drip */}
            <div className="absolute top-0 left-1 w-1 h-4 bg-[#fef9c3] rounded-b-full shadow-sm" />
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-1 text-left">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
              <Sparkles size={11} />
              <span>Photorealistic CSS3 Physics</span>
            </span>
          </div>

          <h3 className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
            Photorealistic Candle Flame Simulation
          </h3>

          <p className="text-xs text-slate-400 font-normal leading-relaxed max-w-lg">
            3D wax translucency, 4-zone combustion physics, blue root flame, and interactive wind draft lab.
          </p>
        </div>

      </div>

      {/* Right: Direct Project Action Button */}
      <Link
        href="/candle-flame-animation"
        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-all shadow-lg flex items-center justify-center gap-2 shrink-0 cursor-pointer"
      >
        <span>Open Physics Lab</span>
        <ArrowRight size={14} className="stroke-[2.5]" />
      </Link>

      {/* Embedded Animation CSS */}
      <style jsx global>{`
        @keyframes flameFlicker {
          0%, 100% { transform: scaleY(1) skewX(0deg) scaleX(1); }
          25% { transform: scaleY(1.08) skewX(-2deg) scaleX(0.95); }
          50% { transform: scaleY(0.95) skewX(3deg) scaleX(1.04); }
          75% { transform: scaleY(1.06) skewX(-1.5deg) scaleX(0.97); }
        }
        .animate-flicker {
          animation: flameFlicker 1.4s infinite ease-in-out;
        }
      `}</style>

    </div>
  );
}
