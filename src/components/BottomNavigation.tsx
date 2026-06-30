"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Download, Users, User } from "lucide-react";
import { usePWA } from '../hooks/usePWA';

const BottomNavigation = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { isInstallable, installApp } = usePWA();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    {
      label: 'Home',
      path: '/',
      isButton: false,
      icon: (
        <div className="bg-[#0a0f1c] rounded-md w-6 h-6 flex flex-col items-center justify-center border border-[#4ade80]/30">
          <span className="text-[#4ade80] font-black text-[10px] leading-none tracking-tighter" style={{ textShadow: '0 0 5px #4ade80' }}>NS</span>
        </div>
      )
    },
    {
      label: 'Course',
      path: '/book/p0-developer-setup',
      isButton: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    },
    {
      label: 'Theme',
      path: '#',
      isButton: true,
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
      icon: mounted ? (theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />) : <div className="w-6 h-6" />
    },
    {
      label: 'Menu',
      path: '#',
      isButton: true,
      onClick: () => setMenuOpen(!menuOpen),
      icon: <Menu size={24} />
    }
  ];

  return (
    <>
      {/* Slide-up Menu Drawer */}
      {menuOpen && (
        <>
          {/* Overlay backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setMenuOpen(false)}
          />
          
          <div className="fixed bottom-16 left-0 right-0 max-w-lg mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-x border-gray-200 dark:border-slate-800 rounded-t-3xl shadow-2xl p-6 z-50 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-slate-800 pb-3">
              <h3 className="font-black text-lg uppercase tracking-wider text-slate-880 dark:text-white">Menu</h3>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-400"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {/* PWA Install Button */}
              {isInstallable && (
                <button
                  onClick={() => {
                    installApp();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-4 p-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-bold shadow-md transition-all animate-bounce"
                >
                  <Download size={20} />
                  <div className="text-left">
                    <span className="block text-sm">Download Web App</span>
                    <span className="block text-[10px] text-blue-100 font-medium">Install for fast offline access</span>
                  </div>
                </button>
              )}

              {/* Learn Node.js Link */}
              <a
                href="https://nodejs-by-nextsem.web.app/?source=pwa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-[#4ade80]/10 hover:bg-[#4ade80]/20 border border-[#4ade80]/20 text-emerald-600 dark:text-emerald-400 rounded-xl font-bold transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#0a0f1c] rounded-md w-8 h-8 flex items-center justify-center border border-[#4ade80]/30 font-black text-sm text-[#4ade80]">
                    JS
                  </div>
                  <div className="text-left">
                    <span className="block text-sm">Learn Node.js App</span>
                    <span className="block text-[10px] text-gray-500 dark:text-gray-400 font-medium">Deep dive into Backend & APIs</span>
                  </div>
                </div>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-black">Go →</span>
              </a>

              {/* Profile Placeholder */}
              <div className="flex items-center gap-4 p-3.5 bg-gray-100/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 rounded-xl font-bold opacity-60">
                <User size={20} />
                <span className="text-sm">Profile (Coming Soon)</span>
              </div>

              {/* Community Placeholder */}
              <div className="flex items-center gap-4 p-3.5 bg-gray-100/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 rounded-xl font-bold opacity-60">
                <Users size={20} />
                <span className="text-sm">Community (Coming Soon)</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-gray-200 dark:border-slate-800 pb-safe z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {navItems.map((item, idx) => {
            const isActive = !item.isButton && (pathname === item.path || (item.path !== '/' && pathname?.startsWith(item.path)));
            
            if (item.isButton) {
              return (
                <button
                  key={idx}
                  onClick={item.onClick}
                  className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                    menuOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <div className={`transition-transform duration-200 hover:scale-110 ${menuOpen ? 'scale-110' : ''}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-wide">
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <Link 
                key={idx} 
                href={item.path}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                  isActive 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold tracking-wide">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
