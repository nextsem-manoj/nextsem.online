"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, LogIn, X, Menu } from "lucide-react";
import BookSidebar from "@/components/BookSidebar";
import BookNavigation from "@/components/BookNavigation";
import BookRightSidebar from "@/components/BookRightSidebar";
import { coursePhases } from "@/data/courseData";
import { signInWithGoogle } from "@/lib/firebase";
import searchIndex from "@/data/searchIndex.json";
import { getChapterIdFromPath } from "@/lib/htmlLessonsHelper";

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo?: string;
}

function HtmlLayoutContent({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  const pathname = usePathname() || "";
  const currentChapterId = getChapterIdFromPath(pathname);

  useEffect(() => {
    const checkAuth = () => {
      const saved = localStorage.getItem("nextsem_user");
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
      window.location.reload();
    } catch (err) {
      console.error("Sign-In Error: ", err);
    }
  };

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

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted, pathname]);

  useEffect(() => {
    document.body.classList.add("in-book-mode");
    setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => {
      document.body.classList.remove("in-book-mode");
    };
  }, []);

  const currentIndex = searchIndex.findIndex((item) => item.id === currentChapterId);
  const currentChapter = currentIndex >= 0 ? searchIndex[currentIndex] : null;

  const currentPhase = coursePhases.find(
    (phase) =>
      phase.path === currentChapterId ||
      phase.topics.some((t) => t.path === currentChapterId)
  );

  const prevChapter = currentIndex > 0 ? searchIndex[currentIndex - 1] : null;
  const nextChapter =
    currentIndex >= 0 && currentIndex < searchIndex.length - 1
      ? searchIndex[currentIndex + 1]
      : null;

  const prevHref = prevChapter
    ? prevChapter.id.startsWith("p1-")
      ? "/html"
      : `/book/${prevChapter.id}`
    : null;
  const nextHref = nextChapter
    ? nextChapter.id.startsWith("p1-")
      ? "/html"
      : `/book/${nextChapter.id}`
    : null;

  const themeClass = "bg-background border-slate-850 text-foreground";
  const headerThemeClass = "bg-background border-slate-850 text-foreground";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-[#c1a648]/30 transition-colors duration-300">
      <div className="flex-1 flex flex-col md:flex-row w-full max-w-[1800px] mx-auto pb-14 md:pb-0">
        <BookSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <main className="flex-1 p-0 md:p-6 w-full flex flex-col relative">
          {/* Header Bar matching target design */}
          <div
            className={`w-full flex items-center gap-3 px-4 py-3 border-b border-x-0 md:border-x rounded-t-none md:rounded-t-2xl z-20 shrink-0 transition-all sticky top-0 ${headerThemeClass}`}
          >
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
                  {currentUser.avatar &&
                  (currentUser.avatar.startsWith("http") ||
                    currentUser.avatar.startsWith("/")) ? (
                    <img
                      src={currentUser.avatar}
                      alt=""
                      className="w-5 h-5 rounded-full object-cover border border-[#c1a648]/20 shrink-0"
                    />
                  ) : currentUser.photo ? (
                    <img
                      src={currentUser.photo}
                      alt=""
                      className="w-5 h-5 rounded-full object-cover border border-[#c1a648]/20 shrink-0"
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-[9px] shrink-0">
                      {currentUser.avatar ||
                        currentUser.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="max-w-[70px] truncate">
                    {currentUser.name.split(" ")[0]}
                  </span>
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

          {/* Glassmorphic Scroll Progress Bar */}
          <div className="w-full h-2.5 bg-slate-200/10 dark:bg-slate-950/40 backdrop-blur-md sticky top-[46px] z-30 overflow-hidden shrink-0 border-x-0 md:border-x border-slate-250/5 flex items-center justify-center">
            <div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#e4ca67] via-[#c1a648] to-[#967b26] rounded-r-full shadow-[0_0_8px_rgba(193,166,72,0.4)] transition-all duration-75"
              style={{ width: `${scrollPercent}%` }}
            />
            <span className="relative z-10 text-[7px] font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 pointer-events-none mix-blend-difference leading-none">
              {Math.round(scrollPercent)}% Read
            </span>
          </div>

          {/* Main Reading Container */}
          <div
            ref={scrollContainerRef}
            className={`flex-1 px-4 py-5 md:px-8 md:py-8 border-x-0 md:border-x rounded-b-none md:rounded-b-2xl relative z-10 transition-all duration-300 ${themeClass}`}
          >
            <div className="max-w-5xl mx-auto w-full">{children}</div>
          </div>
        </main>

        <BookRightSidebar
          currentChapterId={currentChapterId}
          currentChapterTitle={currentChapter?.title || "Reading Lesson"}
        />
      </div>
      <BookNavigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
}

export default function HtmlLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background">
          <div className="text-sm font-bold text-slate-500 animate-pulse">
            Loading course layout...
          </div>
        </div>
      }
    >
      <HtmlLayoutContent>{children}</HtmlLayoutContent>
    </Suspense>
  );
}
