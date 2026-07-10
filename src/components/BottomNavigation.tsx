"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";
import { Menu, X, Download, Users, User, RotateCw, Languages, HelpCircle, Code, LogOut, LogIn, BookOpen, Type, Sun, Moon, Coffee } from "lucide-react";
import { FontSizeControlBlock } from './FontSizeControl';
import { usePWA } from '../hooks/usePWA';
import { LANGUAGES, changeLanguage } from './TranslateWidget';
import RateAppPrompt from './RateAppPrompt';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { Capacitor } from '@capacitor/core';

const BottomNavigation = () => {
  const pathname = usePathname();
  if (pathname === '/simulator') return null;
  const { theme, setTheme } = useTheme();
  const { isInstallable, installApp } = usePWA();
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; avatar: string; photo?: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("lg");
  const [isNative, setIsNative] = useState(false);
  const isInBook = pathname?.startsWith('/book') || pathname === '/cmd';

  useEffect(() => {
    // Load reader settings from localStorage
    const savedFont = localStorage.getItem('read_font_size') as "sm" | "base" | "lg" | "xl" | null;
    const native = Capacitor.isNativePlatform();
    setTimeout(() => {
      setMounted(true);
      if (savedFont) setFontSize(savedFont);
      setIsNative(native);
    }, 0);

    // Listen for changes made by book layout
    const onSettingsChange = () => {
      const f = localStorage.getItem('read_font_size') as "sm" | "base" | "lg" | "xl" | null;
      setTimeout(() => {
        if (f) setFontSize(f);
      }, 0);
    };
    window.addEventListener('readerSettingsChanged', onSettingsChange);

    const checkAuth = () => {
      const saved = localStorage.getItem('nextsem_user');
      let userObj = null;
      if (saved) {
        try {
          userObj = JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
      setTimeout(() => setCurrentUser(userObj), 0);
    };
    checkAuth();
    window.addEventListener("nextsem_auth_changed", checkAuth);
    return () => {
      window.removeEventListener("nextsem_auth_changed", checkAuth);
      window.removeEventListener('readerSettingsChanged', onSettingsChange);
    };
  }, []);

  // Close menu when navigating/pathname changes
  useEffect(() => {
    setTimeout(() => setMenuOpen(false), 0);
  }, [pathname]);



  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
    } catch (err) {
      console.error("Sign Out Error:", err);
    }
  };

  const handleReaderFont = (size: "sm" | "base" | "lg" | "xl") => {
    setFontSize(size);
    localStorage.setItem('read_font_size', size);
    window.dispatchEvent(new Event('readerSettingsChanged'));
  };



  const handleSignIn = () => {
    setMenuOpen(false);
    window.dispatchEvent(new Event("open_google_auth"));
  };

  const handleRefresh = () => {
    if (typeof window !== 'undefined') {
      // Unregister service workers to clear cached PWA shells, then reload
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister();
          }
          window.location.reload();
        }).catch(() => {
          window.location.reload();
        });
      } else {
        window.location.reload();
      }
    }
  };

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
      path: '/course',
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
      onClick: () => {
        const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'night-light' : 'light';
        setTheme(nextTheme);
      },
      icon: (
        <div className="shrink-0">
          {!mounted ? (
            <Sun size={20} />
          ) : theme === 'light' ? (
            <Sun size={20} className="text-yellow-500" />
          ) : theme === 'dark' ? (
            <Moon size={20} className="text-blue-400" />
          ) : (
            <Coffee size={20} className="text-amber-500" />
          )}
        </div>
      )
    },

    {
      label: 'Menu',
      path: '#',
      isButton: true,
      onClick: () => setMenuOpen(!menuOpen),
      icon: <Menu size={24} />
    }
  ];


  if (isInBook || pathname === '/') return null;

  return (
    <>

      {/* Slide-up Menu Drawer */}
      {menuOpen && (
        <>
          {/* Overlay backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity animate-in fade-in duration-200"
            onClick={() => setMenuOpen(false)}
          />
          
          <div className="fixed bottom-0 left-0 right-0 bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl border-t border-x border-gray-200/60 dark:border-slate-800 rounded-t-[32px] shadow-none p-5 z-50 animate-in slide-in-from-bottom duration-300 select-none" style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}>
            
            {/* Header */}
            <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-slate-900 pb-2">
              <div className="flex items-center gap-2.5">
                <img src="/logo.svg" alt="Nextsem Logo" className="w-6 h-6 rounded-md border border-emerald-500/20" />
                <h3 className="font-black text-sm uppercase tracking-widest text-slate-800 dark:text-white flex items-center gap-1">
                  Nextsem <span className="text-amber-500 dark:text-amber-400 font-extrabold text-[10px] px-1.5 py-0.5 bg-amber-500/10 rounded-full border border-amber-500/20">Menu</span>
                </h3>
              </div>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-900 text-gray-500 dark:text-gray-400 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              
              {/* Profile / Account Status */}
              <div className="p-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl">
                {currentUser ? (
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {currentUser.photo ? (
                        <img 
                          src={currentUser.photo} 
                          alt={currentUser.name} 
                          className="w-10 h-10 rounded-full object-cover border border-white dark:border-slate-850 shadow-sm shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-650 text-white flex items-center justify-center font-black text-sm shadow-sm shrink-0">
                          {currentUser.avatar}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-black text-slate-800 dark:text-slate-200 truncate">
                          {currentUser.name}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 truncate mt-0.5">
                          {currentUser.email}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="p-2 hover:bg-rose-500/10 hover:text-rose-500 rounded-xl transition-all text-slate-400 cursor-pointer"
                      title="Sign Out"
                    >
                      <LogOut size={18} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-black text-slate-800 dark:text-slate-200">
                        Guest Student
                      </div>
                      <div className="text-[10px] font-bold text-slate-450 dark:text-slate-505 mt-0.5">
                        Sign in to track progress & stats
                      </div>
                    </div>
                    <button
                      onClick={handleSignIn}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black text-[10px] uppercase tracking-wide hover:scale-102 transition-all active:scale-95 cursor-pointer shadow-sm"
                    >
                      <LogIn size={10} className="stroke-[3]" />
                      <span>Sign In</span>
                    </button>
                  </div>
                )}
              </div>
              {/* SECTION: 🎯 LEARNING HUB */}
              <div className="space-y-2">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 pl-1">
                  🎯 Learning Hub
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {/* Profile Account Dashboard Link */}
                  <Link
                    href="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-col justify-between p-3 bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/15 rounded-2xl transition-all hover:scale-[1.02] active:scale-98"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-900 dark:bg-black rounded-lg w-7 h-7 flex items-center justify-center border border-blue-400/30 font-black text-xs text-blue-400">
                        <User size={14} />
                      </div>
                      <span className="text-xs font-black text-slate-800 dark:text-slate-200">Classroom</span>
                    </div>
                    <span className="block text-[9px] text-slate-500 font-bold mt-2 text-left leading-snug">Syllabus checklists & progress.</span>
                  </Link>

                  {/* Project Target Goals Link */}
                  <Link
                    href="/course/projects"
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-col justify-between p-3 bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/15 rounded-2xl transition-all hover:scale-[1.02] active:scale-98"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-900 dark:bg-black rounded-lg w-7 h-7 flex items-center justify-center border border-amber-450/30 font-black text-xs text-amber-400">
                        🎯
                      </div>
                      <span className="text-xs font-black text-slate-800 dark:text-slate-200">Target Goals</span>
                    </div>
                    <span className="block text-[9px] text-slate-500 font-bold mt-2 text-left leading-snug">Select active project objectives.</span>
                  </Link>

                  {/* Windows CMD Simulator Link */}
                  <Link
                    href="/cmd"
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-col justify-between p-3 bg-violet-500/5 hover:bg-violet-500/10 border border-violet-500/15 rounded-2xl transition-all hover:scale-[1.02] active:scale-98"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-900 dark:bg-black rounded-lg w-7 h-7 flex items-center justify-center border border-violet-400/30 font-black text-xs text-violet-450">
                        ⊞
                      </div>
                      <span className="text-xs font-black text-slate-800 dark:text-slate-200">CMD Simulator</span>
                    </div>
                    <span className="block text-[9px] text-slate-500 font-bold mt-2 text-left leading-snug">Run Windows terminal drills.</span>
                  </Link>

                  {/* Learn Node.js Link */}
                  <a
                    href="https://nodejs-by-nextsem.web.app/?source=pwa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between p-3 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/15 rounded-2xl transition-all hover:scale-[1.02] active:scale-98"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-900 dark:bg-black rounded-lg w-7 h-7 flex items-center justify-center border border-emerald-400/30 font-black text-xs text-emerald-400">
                        JS
                      </div>
                      <span className="text-xs font-black text-slate-800 dark:text-slate-200">Node.js Hub</span>
                    </div>
                    <span className="block text-[9px] text-slate-500 font-bold mt-2 text-left leading-snug">Backend & API Course. Go →</span>
                  </a>
                </div>
              </div>

              {/* SECTION: 📖 READER — only on book pages */}
              {isInBook && (
                <div className="space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 pl-1">
                    📖 Reader Display
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-gray-100 dark:border-slate-900 space-y-3">
                    {/* Font Size */}
                    <div>
                      <span className="block text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 flex items-center gap-1">
                        <Type size={10} /> Font Size
                      </span>
                      <div className="grid grid-cols-4 gap-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl">
                        {(["sm", "base", "lg", "xl"] as const).map((size) => (
                          <button
                            key={size}
                            onClick={() => handleReaderFont(size)}
                            className={`py-1.5 text-[10px] font-black rounded-lg capitalize transition-all ${
                              fontSize === size
                                ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                                : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                            }`}
                          >
                            {size === 'base' ? 'Med' : size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION: 🌐 PREFERENCES */}
              <div className="space-y-2">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 pl-1">
                  🌐 Preferences
                </div>

                {/* ♿ Accessibility: Text Size Control */}
                <FontSizeControlBlock />

                {/* Translation grid */}
                <div className="p-3 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-gray-100 dark:border-slate-900">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 font-black text-[10px] uppercase tracking-wider mb-2">
                    <Languages size={14} className="text-amber-500" />
                    <span>Choose Language</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setMenuOpen(false);
                        }}
                        className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-white dark:bg-slate-950 border border-gray-200/50 dark:border-slate-900 hover:border-amber-500/40 dark:hover:border-amber-400/30 hover:bg-amber-500/5 transition-all active:scale-95 cursor-pointer"
                      >
                        <span className="text-sm">{lang.flag}</span>
                        <span className="text-[7px] font-extrabold text-slate-500 dark:text-slate-400 mt-1 truncate max-w-full">{lang.label.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Theme Selector Grid */}
                <div className="p-3 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-gray-100 dark:border-slate-900 mt-2">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 font-black text-[10px] uppercase tracking-wider mb-2">
                    <Sun size={14} className="text-amber-500" />
                    <span>Choose Theme</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: 'light', label: '☀️ Light', color: 'hover:border-yellow-500/40 text-yellow-600 dark:text-yellow-400' },
                      { name: 'dark', label: '🌙 Dark', color: 'hover:border-blue-500/40 text-blue-500 dark:text-blue-400' },
                      { name: 'night-light', label: '💡 Night', color: 'hover:border-amber-500/40 text-amber-600 dark:text-amber-500' }
                    ].map((t) => (
                      <button
                        key={t.name}
                        onClick={() => {
                          setTheme(t.name);
                        }}
                        className={`flex items-center justify-center p-2.5 rounded-xl bg-white dark:bg-slate-950 border transition-all active:scale-95 cursor-pointer text-xs font-extrabold ${
                          theme === t.name 
                            ? 'border-amber-500 bg-amber-500/5' 
                            : 'border-gray-200/50 dark:border-slate-900 hover:bg-slate-100 dark:hover:bg-slate-900'
                        } ${t.color}`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION: 🛠️ UTILITIES */}
              <div className="space-y-2">
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 pl-1">
                  🛠️ System Utilities
                </div>
                {/* Utility Tools Row */}
                <div className="grid grid-cols-2 gap-2">
                  {/* App Tour */}
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('restart-tour'));
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-2.5 p-3 bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/15 rounded-xl text-left transition-all hover:scale-[1.01] active:scale-99 cursor-pointer"
                  >
                    <HelpCircle size={16} className="text-purple-400 shrink-0" />
                    <div>
                      <span className="block text-[11px] font-black text-slate-800 dark:text-slate-200">Replay Tour</span>
                      <span className="block text-[8px] text-slate-500 font-bold mt-0.5">Show tour instructions</span>
                    </div>
                  </button>

                  {/* Force Refresh */}
                  <button
                    onClick={() => {
                      handleRefresh();
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-2.5 p-3 bg-rose-500/5 hover:bg-rose-500/10 border border-rose-500/15 rounded-xl text-left transition-all hover:scale-[1.01] active:scale-99 cursor-pointer"
                  >
                    <RotateCw size={16} className="text-rose-500 shrink-0" />
                    <div>
                      <span className="block text-[11px] font-black text-slate-800 dark:text-slate-200 font-black">Refresh App</span>
                      <span className="block text-[8px] text-slate-500 font-bold mt-0.5">Reset cached offline shell</span>
                    </div>
                  </button>
                </div>

                {/* PWA Downloader Banner */}
                {isInstallable && (
                  <button
                    onClick={() => {
                      installApp();
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-450 hover:to-amber-550 text-slate-950 rounded-2xl font-black text-xs shadow-md transition-all active:scale-98 animate-pulse cursor-pointer border border-amber-400/20"
                  >
                    <Download size={14} className="stroke-[3]" />
                    <span>Download Offline App</span>
                  </button>
                )}
              </div>

              {/* Legal horizontal navigation links */}
              <div className="py-2.5 border-t border-b border-gray-100 dark:border-slate-800/80 flex justify-around text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 my-2">
                <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">About Us</Link>
                <span className="text-gray-300 dark:text-slate-800">|</span>
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Contact Us</Link>
                <span className="text-gray-300 dark:text-slate-800">|</span>
                <Link href="/privacy" onClick={() => setMenuOpen(false)} className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Privacy Policy</Link>
                <span className="text-gray-300 dark:text-slate-800">|</span>
                <Link href="/terms" onClick={() => setMenuOpen(false)} className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Terms of Service</Link>
              </div>

              {/* Rate App Widget */}
              <RateAppPrompt inline />

            </div>
          </div>
        </>
      )}

      {/* Main Bottom Navigation Bar — Pinned on web mobile, floating on native mobile */}
      <div
        className={
          isNative
            ? "fixed left-4 right-4 bg-[#0a0f1e]/80 backdrop-blur-xl border border-white/5 shadow-2xl rounded-2xl max-w-md mx-auto z-[9999] transition-all duration-300 md:hidden"
            : "fixed left-0 right-0 bottom-0 bg-[#0a0f1e]/90 backdrop-blur-xl border-t border-white/5 shadow-2xl rounded-t-2xl max-w-md mx-auto z-[9999] transition-all duration-300 md:hidden"
        }
        style={
          isNative
            ? { bottom: 'calc(1rem + env(safe-area-inset-bottom))' }
            : { paddingBottom: 'env(safe-area-inset-bottom)' }
        }
      >
        <div className="relative flex justify-around items-center h-14 w-full px-2">
          
          {/* Sliding Active Background */}
          {(() => {
            const getActiveIndicatorIndex = () => {
              if (menuOpen) return 3;
              if (pathname === '/') return 0;
              if (pathname === '/course' || pathname?.startsWith('/book')) return 1;
              return -1;
            };
            const activeIndicatorIdx = getActiveIndicatorIndex();
            if (activeIndicatorIdx < 0) return null;
            return (
              <div 
                className="absolute h-9 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10 rounded-xl transition-all duration-[300ms] ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
                style={{
                  width: '22%',
                  left: `${(activeIndicatorIdx * 24) + 2}%`,
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
            );
          })()}

          {navItems.map((item, idx) => {
            const isActive = item.isButton
              ? menuOpen
              : (item.path === '/' ? pathname === '/' : (pathname === '/course' || pathname?.startsWith('/book')));
            
            if (item.isButton) {
              return (
                <button
                  key={idx}
                  onClick={item.onClick}
                  className={`relative z-10 flex flex-col items-center justify-center w-full h-full space-y-0.5 transition-colors ${
                    menuOpen ? 'text-blue-600 dark:text-blue-450' : 'text-gray-500 dark:text-gray-450 hover:text-white'
                  }`}
                >
                  <div className={`transition-transform duration-200 hover:scale-110 ${menuOpen ? 'scale-110' : ''}`}>
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-bold tracking-wide">
                    {item.label}
                  </span>
                </button>
              );
            }

            return (
              <Link 
                key={idx} 
                href={item.path}
                className={`relative z-10 flex flex-col items-center justify-center w-full h-full space-y-0.5 transition-colors ${
                  isActive 
                    ? 'text-blue-600 dark:text-blue-450' 
                    : 'text-gray-500 dark:text-gray-450 hover:text-white'
                }`}
              >
                <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold tracking-wide">
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
