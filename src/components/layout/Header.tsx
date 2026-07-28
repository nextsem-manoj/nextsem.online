"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProgressIndicator from '@/components/ProgressIndicator';
import { FontSizeControlPill } from '@/components/FontSizeControl';

const Header = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleFs = () => setIsFullscreen(!!document.fullscreenElement);
      document.addEventListener("fullscreenchange", handleFs);
      return () => document.removeEventListener("fullscreenchange", handleFs);
    }
  }, []);

  if (isFullscreen) return null;

  return (
    <header className="bg-[#09101f] backdrop-blur-xl text-white py-3 px-5 border-b border-slate-800 shadow-md relative z-50 flex items-center justify-between">
      {/* Left Section: Logo + Title in a horizontal row */}
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        {/* Title Link */}
        <Link href="/" className="flex flex-row items-center gap-2.5 hover:opacity-80 transition-opacity">
          <img src="/logo.svg" alt="Nextsem Logo" className="w-7 h-7 rounded-lg border border-emerald-500/20" />
          <span className="font-extrabold text-lg text-white">NextSem</span>
        </Link>
        
        {/* Title */}
        <div className="h-5 w-px bg-slate-800 hidden sm:block"></div>
        <h1 className="text-xs sm:text-sm font-black text-[#04AA6D] uppercase tracking-wider truncate">
          Nextsem Academy
        </h1>
      </div>

      {/* Right Section: Progress & Font Size */}
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        <div className="hidden md:block">
          <ProgressIndicator />
        </div>
        
        {/* Accessibility: Text size control */}
        <div className="hidden md:block">
          <FontSizeControlPill />
        </div>
      </div>
    </header>
  );
};

export default Header;
