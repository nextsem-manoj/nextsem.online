"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Home, Menu, LogIn } from "lucide-react";
import searchIndex from "../data/searchIndex.json";
import { auth, signInWithGoogle } from "../lib/firebase";
import { getChapterIdFromPath, getChapterUrl } from "../lib/htmlLessonsHelper";

interface BookNavigationProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo?: string;
}

function NavigationContent({
  sidebarOpen,
  setSidebarOpen,
}: BookNavigationProps) {
  const pathname = usePathname();
  const currentChapterId = getChapterIdFromPath(pathname);
  const [currentUser, setCurrentUser] = React.useState<UserProfile | null>(null);

  React.useEffect(() => {
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

  // Find current, previous, and next chapters from searchIndex
  const currentIndex = searchIndex.findIndex((item) => item.id === currentChapterId);
  const prevChapter = currentIndex > 0 ? searchIndex[currentIndex - 1] : null;
  const nextChapter = currentIndex >= 0 && currentIndex < searchIndex.length - 1 ? searchIndex[currentIndex + 1] : null;

  // Calculate Prev / Next Href pointing directly to adjacent chapters
  const prevHref = prevChapter ? getChapterUrl(prevChapter.id) : null;
  const nextHref = nextChapter ? getChapterUrl(nextChapter.id) : null;

  const containerThemeClass = "bg-slate-950/80 text-slate-100 border border-white/5 shadow-2xl backdrop-blur-xl rounded-2xl";
  const buttonHoverClass = "hover:bg-slate-900/50 text-slate-400 hover:text-white";

  return (
    <div
      className={`fixed left-4 right-4 z-[1000] transition-all duration-300 max-w-lg mx-auto md:hidden ${containerThemeClass}`}
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex justify-around items-center h-14 w-full px-4">
        {/* Home Button */}
        <Link
          href="/"
          aria-label="Return to Main Landing Page"
          title="Home"
          className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${buttonHoverClass}`}
        >
          <Home size={18} className="mb-0.5" />
          <span className="text-[9px] font-black uppercase tracking-wider">Home</span>
        </Link>
        
        {/* Menu Button (Toggles Sidebar) */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${
            sidebarOpen 
              ? "text-amber-500 dark:text-amber-450 font-bold bg-slate-100 dark:bg-slate-900/50" 
              : buttonHoverClass
          }`}
          aria-label="Toggle Sidebar Menu"
        >
          <Menu size={18} className="mb-0.5" />
          <span className="text-[9px] font-black uppercase tracking-wider">Menu</span>
        </button>

        {/* Profile / Sign In Button beside Menu */}
        {currentUser ? (
          <Link
            href="/profile"
            className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${buttonHoverClass}`}
            title="Profile Dashboard"
          >
            {currentUser.photo ? (
              <img src={currentUser.photo} alt="" className="w-5 h-5 rounded-full object-cover border border-[#4ade80]/20 mb-0.5 shrink-0" />
            ) : (
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-[9px] mb-0.5 shrink-0">
                {currentUser.avatar}
              </div>
            )}
            <span className="text-[9px] font-black uppercase tracking-wider truncate max-w-[40px]">{currentUser.name.split(" ")[0]}</span>
          </Link>
        ) : (
          <button
            onClick={handleSignIn}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${buttonHoverClass}`}
            title="Sign In"
          >
            <LogIn size={18} className="mb-0.5 text-emerald-400" />
            <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400">Sign In</span>
          </button>
        )}

        {/* Prev Button */}
        {prevHref ? (
          <Link
            href={prevHref}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${buttonHoverClass}`}
          >
            <ChevronLeft size={20} className="mb-0.5" />
            <span className="text-[9px] font-black uppercase tracking-wider">Prev</span>
          </Link>
        ) : (
          <div className="flex-1 opacity-20 cursor-not-allowed flex flex-col items-center justify-center py-1.5">
            <ChevronLeft size={20} className="mb-0.5" />
            <span className="text-[9px] font-black uppercase tracking-wider">Prev</span>
          </div>
        )}

        {/* Next Button */}
        {nextHref ? (
          <Link
            href={nextHref}
            className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${buttonHoverClass}`}
          >
            <ChevronRight size={20} className="mb-0.5" />
            <span className="text-[9px] font-black uppercase tracking-wider">Next</span>
          </Link>
        ) : (
          <div className="flex-1 opacity-20 cursor-not-allowed flex flex-col items-center justify-center py-1.5">
            <ChevronRight size={20} className="mb-0.5" />
            <span className="text-[9px] font-black uppercase tracking-wider">Next</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookNavigation(props: BookNavigationProps) {
  return (
    <Suspense fallback={
      <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-slate-950 text-slate-100 py-3 text-center text-xs font-bold border-t border-slate-900">
        Loading Navigation...
      </div>
    }>
      <NavigationContent {...props} />
    </Suspense>
  );
}
