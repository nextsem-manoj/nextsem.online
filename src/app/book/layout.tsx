"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sun, Moon, Coffee, LogIn, X, Menu } from "lucide-react";
import BookSidebar from "@/components/BookSidebar";
import BookNavigation from "@/components/BookNavigation";
import BookRightSidebar from "@/components/BookRightSidebar";
import searchIndex from "@/data/searchIndex.json";
import { coursePhases } from "@/data/courseData";
import { getChapterSimulator } from "@/data/chapterSimulators";
import { signInWithGoogle } from "@/lib/firebase";

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo?: string;
}

function BookLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('night-light');
    else setTheme('light');
  };
  const renderThemeIcon = () => {
    if (!mounted) return <div className="w-5 h-5 shrink-0" />;
    if (theme === 'light') return <Sun size={18} className="text-[#c1a648] shrink-0" />;
    if (theme === 'dark') return <Moon size={18} className="text-slate-350 shrink-0" />;
    return <Coffee size={18} className="text-[#7f7034] shrink-0" />;
  };
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("lg");
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  useEffect(() => {
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
      setCurrentUser(userObj);
    };
    checkAuth();
    window.addEventListener("nextsem_auth_changed", checkAuth);
    return () => {
      window.removeEventListener("nextsem_auth_changed", checkAuth);
    };
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      window.location.href = '/';
    } catch (err) {
      console.error("Sign-In Error: ", err);
    }
  };

  const pathname = usePathname();
  const currentChapterId = pathname?.split("/book/")[1] || "";

  // Reset scroll container to top on page mount/refresh and pathname changes
  useEffect(() => {
    setScrollPercent(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [pathname]);

  // Track scroll container progress percentage
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      let scrollTop = container.scrollTop;
      let totalHeight = container.scrollHeight - container.clientHeight;

      if (totalHeight <= 0) {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      }

      if (totalHeight <= 0) {
        setScrollPercent(0);
        return;
      }
      const percent = (scrollTop / totalHeight) * 100;
      setScrollPercent(Math.min(100, Math.max(0, percent)));
    };

    // Calculate once on mount/pathname changes to capture initial layouts
    handleScroll();

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mounted, pathname]);

  useEffect(() => {
    document.body.classList.add("in-book-mode");
    
    const savedFontSize = localStorage.getItem("read_font_size") as "sm" | "base" | "lg" | "xl" | null;

    setTimeout(() => {
      setMounted(true);
      if (savedFontSize) setFontSize(savedFontSize);
    }, 0);

    // Sync when BottomNavigation changes reader settings
    const onSettingsChange = () => {
      const f = localStorage.getItem("read_font_size") as "sm" | "base" | "lg" | "xl" | null;
      setTimeout(() => {
        if (f) setFontSize(f);
      }, 0);
    };
    window.addEventListener('readerSettingsChanged', onSettingsChange);

    return () => {
      document.body.classList.remove("in-book-mode");
      window.removeEventListener('readerSettingsChanged', onSettingsChange);
    };
  }, []);

  // Find current index in searchIndex
  const currentIndex = searchIndex.findIndex((item) => item.id === currentChapterId);
  const currentChapter = currentIndex >= 0 ? searchIndex[currentIndex] : null;

  // Find corresponding phase
  const currentPhase = coursePhases.find(phase => 
    phase.path === currentChapterId || phase.topics.some(t => t.path === currentChapterId)
  );

  const prevChapter = currentIndex > 0 ? searchIndex[currentIndex - 1] : null;
  const nextChapter = currentIndex >= 0 && currentIndex < searchIndex.length - 1 ? searchIndex[currentIndex + 1] : null;
  const prevHref = prevChapter ? `/book/${prevChapter.id}` : null;
  const nextHref = nextChapter ? `/book/${nextChapter.id}` : null;

  // Set prose sizing to 16px (base) and ensure layout constraints
  const fontSizeClass = "prose-base text-[16px] md:text-[16px] leading-relaxed w-full max-w-full overflow-x-hidden break-words";

  const themeClass = "bg-background border-slate-850 text-foreground";
  const headerThemeClass = "bg-background border-slate-850 text-foreground";



  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-[#c1a648]/30 transition-colors duration-300">
      <div className="flex-1 flex flex-col md:flex-row w-full max-w-[1800px] mx-auto pb-14 md:pb-0">
        <BookSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <main className="flex-1 p-0 md:p-6 w-full flex flex-col relative">
          
          {/* Sticky Header & Tied Progress Bar Container */}
          <div className="sticky top-0 z-50 shrink-0 shadow-md bg-background w-full">
            <div className={`w-full flex items-center gap-3 px-4 py-3 border-b border-x-0 md:border-x rounded-t-none md:rounded-t-2xl transition-all ${headerThemeClass}`}>
              <button
                type="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1 hover:bg-slate-800/20 dark:hover:bg-slate-800/80 rounded-lg transition-all text-slate-650 dark:text-slate-400 shrink-0 cursor-pointer"
                title="Toggle Curriculum Sidebar"
              >
                <Menu size={22} className="stroke-[2.5]" />
              </button>
              <Link 
                href="/" 
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-full transition-all text-slate-650 dark:text-slate-400 shrink-0"
                title="Close and Go Back to Course Menu"
              >
                <X size={22} className="stroke-[2.5]" />
              </Link>
              
              <div className="flex-1 min-w-0 text-left">
                <span className="block text-[10px] font-black uppercase tracking-wider text-[#c1a648]">
                  {currentPhase?.title || "Web Development"}
                </span>
                <h1 className="text-xs md:text-sm font-black truncate mt-0.5">
                  {currentChapter?.title || "Reading Lesson"}
                </h1>
              </div>

              {/* Desktop Navigation Controls */}
              <div className="hidden md:flex items-center gap-1 border-r border-slate-200 dark:border-slate-850 pr-2 mr-1">
                {prevHref ? (
                  <Link
                    href={prevHref}
                    className="px-2.5 py-1.5 hover:bg-slate-200/50 dark:hover:bg-slate-800/80 rounded-lg transition-all text-slate-650 dark:text-slate-400 flex items-center gap-0.5 text-xs font-bold"
                    title={`Previous: ${prevChapter?.title}`}
                  >
                    <ChevronLeft size={16} />
                    <span>Prev</span>
                  </Link>
                ) : (
                  <div className="px-2.5 py-1.5 opacity-30 text-slate-400 flex items-center gap-0.5 text-xs font-bold cursor-not-allowed">
                    <ChevronLeft size={16} />
                    <span>Prev</span>
                  </div>
                )}
                {nextHref ? (
                  <Link
                    href={nextHref}
                    className="px-2.5 py-1.5 hover:bg-slate-200/50 dark:hover:bg-slate-800/80 rounded-lg transition-all text-slate-650 dark:text-slate-400 flex items-center gap-0.5 text-xs font-bold"
                    title={`Next: ${nextChapter?.title}`}
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </Link>
                ) : (
                  <div className="px-2.5 py-1.5 opacity-30 text-slate-400 flex items-center gap-0.5 text-xs font-bold cursor-not-allowed">
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </div>
                )}
              </div>

              {/* Desktop Profile / Sign In */}
              <div className="hidden md:flex items-center gap-2 border-l border-slate-250/20 dark:border-slate-800/40 pl-2 ml-1">
                {currentUser ? (
                  <Link
                    href="/profile"
                    className="flex items-center gap-1.5 hover:bg-slate-200/50 dark:hover:bg-slate-800/80 px-2 py-1 rounded-lg transition-all text-[11px] font-bold text-slate-700 dark:text-slate-350"
                    title="Profile Dashboard"
                  >
                    {currentUser.avatar && (currentUser.avatar.startsWith("http") || currentUser.avatar.startsWith("/")) ? (
                      <img src={currentUser.avatar} alt="" className="w-5 h-5 rounded-full object-cover border border-[#c1a648]/20 shrink-0" />
                    ) : currentUser.photo ? (
                      <img src={currentUser.photo} alt="" className="w-5 h-5 rounded-full object-cover border border-[#c1a648]/20 shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-[9px] shrink-0">
                        {currentUser.avatar || currentUser.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="max-w-[70px] truncate">{currentUser.name.split(" ")[0]}</span>
                  </Link>
                ) : (
                  <button
                    onClick={handleSignIn}
                    className="flex items-center gap-1 hover:bg-slate-250/50 dark:hover:bg-slate-800/80 px-2 py-1 rounded-lg transition-all text-[11px] font-bold text-[#c1a648] shrink-0 cursor-pointer"
                    title="Sign In with Google"
                  >
                    <LogIn size={14} className="shrink-0" />
                    <span>Sign In</span>
                  </button>
                )}
              </div>
            </div>

            {/* Tied Glassmorphic Scroll Progress Bar */}
            <div className="w-full h-2.5 bg-slate-200/10 dark:bg-slate-950/40 backdrop-blur-md overflow-hidden shrink-0 border-x-0 md:border-x border-b border-slate-250/10 flex items-center justify-center relative">
              <div 
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#e4ca67] via-[#c1a648] to-[#967b26] rounded-r-full shadow-[0_0_8px_rgba(193,166,72,0.4)] transition-all duration-75"
                style={{ width: `${scrollPercent}%` }}
              />
              <span className="relative z-10 text-[7px] font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 pointer-events-none mix-blend-difference leading-none">
                {Math.round(scrollPercent)}% Read
              </span>
            </div>
          </div>

          {/* Main Reading Container */}
          {(() => {
            const hasSim = !!getChapterSimulator(currentChapterId);
            return (
              <div 
                ref={scrollContainerRef}
                className={
                  hasSim
                    ? "flex-1 relative z-10 flex flex-col min-h-0 overflow-hidden"
                    : `flex-1 px-4 py-5 md:px-8 md:py-8 border-x-0 md:border-x rounded-b-none md:rounded-b-2xl relative z-10 transition-all duration-300 ${themeClass} ${fontSizeClass}`
                }
              >
                <div className={hasSim ? "w-full h-full flex flex-col min-h-0" : "max-w-5xl mx-auto w-full"}>
                  {children}
                </div>
              </div>
            );
          })()}

        </main>

        <BookRightSidebar 
          currentChapterId={currentChapterId}
          currentChapterTitle={currentChapter?.title || "Reading Lesson"}
        />
      </div>
      <BookNavigation 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
      />
    </div>
  );
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background">
        <div className="text-sm font-bold text-slate-500 animate-pulse">Loading reader layout...</div>
      </div>
    }>
      <BookLayoutContent>{children}</BookLayoutContent>
    </Suspense>
  );
}
