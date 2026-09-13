"use client";

import React, { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useTheme } from "next-themes";
import { signInWithGoogle } from "@/lib/firebase";
import NsSubjectNavBar from "@/components/NsSubjectNavBar";
import BookSidebar from "@/components/BookSidebar";

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo?: string;
}

function GitLayoutContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Default CLOSED — mobile-first; desktop opens on mount
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const lessonContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFsHint, setShowFsHint] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      const saved = localStorage.getItem("nextsem_user");
      let userObj = null;
      if (saved) {
        try { userObj = JSON.parse(saved); } catch (e) { console.error(e); }
      }
      setCurrentUser(userObj);
    };
    checkAuth();
    window.addEventListener("nextsem_auth_changed", checkAuth);
    return () => window.removeEventListener("nextsem_auth_changed", checkAuth);
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      window.dispatchEvent(new Event("nextsem_auth_changed"));
    } catch (err) {
      console.error("Sign-In Error: ", err);
    }
  };

  const effectiveSidebarWidth = sidebarCollapsed ? 52 : sidebarWidth;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSidebarOpen(false);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={lessonContainerRef} className="min-h-screen flex flex-col bg-[#060c18] text-foreground font-sans selection:bg-[#04AA6D]/30 transition-colors duration-300">
      <NsSubjectNavBar currentUser={currentUser} onSignIn={handleSignIn} onToggleSidebar={() => setSidebarOpen(prev => !prev)} />
      <div className="h-[2px] w-full bg-[#00e676] shadow-[0_0_8px_#00e676]" />
      <div className="flex-1 w-full bg-[#060c18]">
        <div className="w-full max-w-[1520px] mx-auto px-3 sm:px-5 md:px-6 py-4 flex flex-col md:flex-row gap-[5%] min-w-0 items-start">
          <BookSidebar
            isOpen={sidebarOpen}
            setIsOpen={setSidebarOpen}
            sidebarWidth={sidebarWidth}
            onWidthChange={setSidebarWidth}
            isCollapsed={sidebarCollapsed}
            onCollapsedChange={setSidebarCollapsed}
          />

          <main className="flex-1 min-w-0 w-full flex flex-col relative">
            {/* Main Reading Container */}
            <div
              ref={scrollContainerRef}
              className="flex-1 relative z-10 transition-all duration-300 w-full"
            >
              <div className="w-full">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function GitLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#060813]">
          <div className="text-sm font-bold text-slate-500 animate-pulse">Loading Git...</div>
        </div>
      }
    >
      <GitLayoutContent>{children}</GitLayoutContent>
    </Suspense>
  );
}
