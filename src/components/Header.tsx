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
              href="/c"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors flex items-center gap-1 text-cyan-400 font-semibold"
            >
              <Cpu size={13} />
              <span>C Language</span>
            </Link>
            <Link
              href="/visual-logic"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors flex items-center gap-1 text-emerald-400 font-semibold"
            >
              <Compass size={13} />
              <span>Visual Logic</span>
            </Link>
            <Link
              href="/cli"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              Windows CLI
            </Link>
            <Link
              href="/html"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              HTML & CSS
            </Link>
            <Link
              href="/batch"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors"
            >
              Batch Scripts
            </Link>
            <Link
              href="/candle-flame-animation"
              className="px-3 py-1.5 rounded-lg hover:text-[#04AA6D] hover:bg-slate-800/80 transition-colors flex items-center gap-1 text-amber-400 font-semibold"
            >
              <Sparkles size={13} />
              <span>Physics Labs</span>
            </Link>
          </nav>
        </div>

        {/* Right Action: Quick Links & Action */}
        <div className="flex items-center gap-3">
          <Link
            href="/course"
            className="px-4 py-1.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-extrabold shadow-sm transition-all flex items-center gap-1.5"
          >
            <BookOpen size={13} />
            <span>Start Free Lessons</span>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
