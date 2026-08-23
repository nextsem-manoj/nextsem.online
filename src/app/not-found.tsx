"use client";

import React from 'react';
import Link from 'next/link';
import { Home, BookOpen, Terminal, ArrowRight, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-[#17181c] text-white flex flex-col items-center justify-center font-sans selection:bg-[#04AA6D]/30 relative overflow-hidden px-4">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#04AA6D]/5 blur-[130px] pointer-events-none" />

      {/* Main Error Card */}
      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        
        {/* Floating Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#04AA6D]/10 border border-[#04AA6D]/20 shadow-lg animate-pulse mb-2">
          <HelpCircle size={40} className="text-[#04AA6D]" />
        </div>

        {/* Status Code */}
        <div className="space-y-2">
          <h1 className="text-6xl font-black tracking-tighter text-white font-outfit">
            404
          </h1>
          <h2 className="text-xl font-bold tracking-tight text-white font-outfit">
            Page Not Found
          </h2>
          <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
            The page you are looking for might have been moved or is temporarily unavailable.
          </p>
        </div>

        {/* Redirect Action Options */}
        <div className="bg-[#0b0c10] border border-slate-800 rounded-2xl p-4.5 space-y-2 text-left shadow-xl">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2 px-1 font-outfit">Quick Navigation</span>

          <Link 
            href="/" 
            className="flex items-center justify-between p-3 bg-[#17181c] hover:bg-[#04AA6D]/10 border border-slate-800 hover:border-[#04AA6D]/40 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <Home size={16} className="text-slate-400 group-hover:text-[#04AA6D]" />
              <span className="text-xs font-bold text-slate-100 group-hover:text-white">Go to Homepage</span>
            </div>
            <ArrowRight size={14} className="text-slate-500 group-hover:text-[#04AA6D] transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link 
            href="/course" 
            className="flex items-center justify-between p-3 bg-[#17181c] hover:bg-[#04AA6D]/10 border border-slate-800 hover:border-[#04AA6D]/40 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen size={16} className="text-slate-400 group-hover:text-[#04AA6D]" />
              <span className="text-xs font-bold text-slate-100 group-hover:text-white">Full Stack Curriculum</span>
            </div>
            <ArrowRight size={14} className="text-slate-500 group-hover:text-[#04AA6D] transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link 
            href="/cli" 
            className="flex items-center justify-between p-3 bg-[#17181c] hover:bg-[#04AA6D]/10 border border-slate-800 hover:border-[#04AA6D]/40 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <Terminal size={16} className="text-slate-400 group-hover:text-[#04AA6D]" />
              <span className="text-xs font-bold text-slate-100 group-hover:text-white">Windows 11 CMD CLI Module</span>
            </div>
            <ArrowRight size={14} className="text-slate-500 group-hover:text-[#04AA6D] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Small Footer brand link */}
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          Nextsem Academy — India&apos;s #1 Free Multilingual Platform
        </div>

      </div>
    </div>
  );
}

