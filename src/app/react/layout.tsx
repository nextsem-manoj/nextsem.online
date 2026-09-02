"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { usePathname } from "next/navigation";
import BookSidebar from "@/components/BookSidebar";
import BookRightSidebar from "@/components/BookRightSidebar";
import { signInWithGoogle } from "@/lib/firebase";
import { getChapterIdFromPath } from "@/lib/htmlLessonsHelper";
import NsSubjectNavBar from "@/components/NsSubjectNavBar";

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  photo?: string;
}

function ReactLayoutContent({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
      window.dispatchEvent(new Event("nextsem_auth_changed"));
    } catch (err) {
      console.error("Sign-In Error: ", err);
    }
  };

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const effectiveSidebarWidth = sidebarCollapsed ? 52 : sidebarWidth;

  return (
    <div className="min-h-screen flex flex-col bg-[#060c18] text-foreground font-sans selection:bg-[#04AA6D]/30 transition-colors duration-300">
      <NsSubjectNavBar currentUser={currentUser} onSignIn={handleSignIn} onToggleSidebar={() => setSidebarOpen(prev => !prev)} />
      <div
        className="flex-1 flex flex-col md:flex-row w-full min-w-0 bg-[#17181c] transition-all duration-300"
        style={mounted && !isMobile && sidebarOpen ? { paddingLeft: `calc(10% + ${effectiveSidebarWidth}px)` } : undefined}
      >
        <BookSidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          sidebarWidth={sidebarWidth}
          onWidthChange={setSidebarWidth}
          isCollapsed={sidebarCollapsed}
          onCollapsedChange={setSidebarCollapsed}
        />

        <main className="flex-1 px-3 py-3 sm:px-6 md:px-8 lg:px-10 w-full flex flex-col relative min-w-0 bg-[#060c18]">
          <div
            ref={scrollContainerRef}
            className="flex-1 py-2 md:py-4 relative z-10 transition-all duration-300 w-full"
          >
            <div className="w-full max-w-5xl mx-auto">
              {children}
            </div>
          </div>
        </main>

        <BookRightSidebar
          currentChapterId={currentChapterId}
          currentChapterTitle="React.js Frontend Architecture"
        />
      </div>
    </div>
  );
}

export default function ReactLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#060c18]">
          <div className="text-sm font-bold text-slate-500 animate-pulse">
            Loading React.js curriculum...
          </div>
        </div>
      }
    >
      <ReactLayoutContent>{children}</ReactLayoutContent>
    </Suspense>
  );
}
