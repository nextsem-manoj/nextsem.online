"use client";

import React from 'react';
import Link from 'next/link';
import { Search, Compass, BookOpen, Terminal, Sparkles, Cpu } from 'lucide-react';
import NextsemLogoAnimation from './NextsemLogoAnimation';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#17181c]/95 backdrop-blur-md text-white py-3 px-4 md:px-8 border-b border-slate-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Section: Brand Logo */}
        <div className="flex items-center gap-6">
          <NextsemLogoAnimation mode="header" href="/" />
          
          {/* Main Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-bold text-slate-300">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/curriculum"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              Curriculum
            </Link>
            <Link
              href="/tracks"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors text-white font-bold"
            >
              Tracks
            </Link>
            <Link
              href="/guide"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors text-white font-bold flex items-center gap-1"
            >
              <Compass size={13} className="text-[#04AA6D]" />
              <span>Learning Guide</span>
            </Link>
            <Link
              href="/html"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              HTML
            </Link>
            <Link
              href="/css"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              CSS
            </Link>
            <Link
              href="/js"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              JavaScript
            </Link>
            <Link
              href="/react"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              React
            </Link>
            <Link
              href="/nodejs"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              Node.js
            </Link>
            <Link
              href="/cli"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              Windows CLI
            </Link>
            <Link
              href="/git"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              Git
            </Link>
            <Link
              href="/bca/practical"
              className="px-3 py-1.5 rounded-lg text-emerald-400 hover:bg-slate-800/80 transition-colors font-bold"
            >
              BCA Lab ⚡
            </Link>
            <Link
              href="/projects"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/full-stack-web-development-roadmap"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors text-[#04AA6D] font-bold"
            >
              Roadmap
            </Link>
          </nav>
        </div>

        {/* Right Action: Search Trigger & Quick Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open_search", { detail: { query: "" } }))}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer shadow-sm"
            title="Search Nextsem (Press /)"
            aria-label="Open Search"
          >
            <Search size={14} className="text-[#04AA6D]" />
            <span className="hidden sm:inline text-[11px]">Search</span>
            <span className="hidden sm:inline text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700 select-none">
              /
            </span>
          </button>

          <Link
            href="/course"
            className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-extrabold shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <BookOpen size={13} />
            <span className="hidden sm:inline">Start Free Lessons</span>
            <span className="sm:hidden">Courses</span>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
