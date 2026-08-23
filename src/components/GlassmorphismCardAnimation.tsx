"use client";

import React, { useState } from 'react';
import { Layers, Sparkles, CreditCard } from 'lucide-react';

export default function GlassmorphismCardAnimation() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX(-((y - centerY) / 10));
    setRotateY((x - centerX) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 text-left font-sans">
      <div className="space-y-1 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <CreditCard size={18} className="text-pink-400" />
          <span className="text-xs font-bold text-pink-400 uppercase tracking-wider font-mono">UI Physics Lab</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">Holographic Glassmorphism 3D Card</h1>
      </div>

      <div className="bg-[#070a14] border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden shadow-2xl space-y-6">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full max-w-sm h-56 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-150 ease-out cursor-pointer relative group overflow-hidden"
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-400 font-bold text-xs">
                NS
              </span>
              <span className="text-xs font-mono font-extrabold text-white tracking-widest">HOLOCARD</span>
            </div>
            <Sparkles size={18} className="text-pink-400 animate-pulse" />
          </div>

          <div className="z-10 space-y-1">
            <div className="text-xs font-mono text-slate-300">•••• •••• •••• 2026</div>
            <div className="text-sm font-bold text-white tracking-wider">FULL STACK DEVELOPER</div>
          </div>
        </div>
      </div>
    </div>
  );
}
