import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import ProgressIndicator from './ProgressIndicator';

const Header = () => {
  return (
    <header className="bg-[#0f172a]/80 backdrop-blur-xl text-white py-3 px-4 md:px-8 flex flex-row items-center justify-between border-b border-green-500/50 shadow-md relative z-50">
      
      {/* Left Section: Logo + Title in a horizontal row */}
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        {/* Compact Logo */}
        <Link href="/" className="flex flex-row items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="bg-[#0a0f1c] rounded-md w-8 h-8 flex flex-col items-center justify-center border border-[#4ade80]/30">
            <span className="text-[#4ade80] font-black text-sm leading-none tracking-tighter" style={{ textShadow: '0 0 5px #4ade80' }}>NS</span>
          </div>
          <span className="font-black text-lg hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">NextSem</span>
        </Link>
        
        {/* Title */}
        <div className="h-6 w-px bg-gray-600 hidden sm:block"></div>
        <h1 className="text-sm md:text-lg font-black text-white tracking-wide uppercase whitespace-nowrap overflow-hidden text-ellipsis">
          Nextsem JBRS course
        </h1>
      </div>

      {/* Right Section: Progress & Theme Toggle in a horizontal row */}
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        <div className="hidden md:block">
          <ProgressIndicator />
        </div>
        
        <ThemeToggle />
      </div>

    </header>
  );
};

export default Header;
