"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronLeft, ChevronRight, LayoutGrid, BookOpen, 
  User, Menu, X, LogIn, LogOut, Sliders, Type, Languages, Sparkles, Code, GraduationCap
} from "lucide-react";
import { mswordLessons } from "@/data/mswordLessonsData";
import { cliLessons } from "@/data/cliLessonsData";
import { htmlLessons } from "@/data/htmlLessonsData";
import { gitLessons } from "@/data/gitLessonsData";
import searchIndex from "@/data/searchIndex.json";
import { ncertSubjects } from "@/data/ncertCoursesData";
import { getChapterIdFromPath, getChapterUrl } from "@/lib/htmlLessonsHelper";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

interface LessonBottomNavigationProps {
  pathname: string;
}

type Lang = "english" | "hinglish" | "hindi";
type Level = "kid" | "pro";

interface UserObj {
  name: string;
  email: string;
  avatar?: string;
  photo?: string;
}

export default function LessonBottomNavigation({ pathname }: LessonBottomNavigationProps) {
  const [currentUser, setCurrentUser] = useState<UserObj | null>(null);
  const [selectedLang, setSelectedLang] = useState<Lang>("hinglish");
  const [selectedLevel, setSelectedLevel] = useState<Level>("kid");
  const [fontSize, setFontSize] = useState<number>(14);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [toolsOpen, setToolsOpen] = useState<boolean>(false);
  const [completedChapters, setCompletedChapters] = useState<Record<string, boolean>>({});

  // 5-Tab Navigation Bar (Prev/Home/Tools/Menu/Next):
  const [navVisible] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleFs = () => setIsFullscreen(!!document.fullscreenElement);
      document.addEventListener("fullscreenchange", handleFs);
      return () => document.removeEventListener("fullscreenchange", handleFs);
    }
  }, []);

  if (isFullscreen) return null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = (localStorage.getItem("nextsem_lesson_lang") || localStorage.getItem("nextsem_html_lang")) as Lang | null;
      const savedLevel = (localStorage.getItem("nextsem_lesson_level") || localStorage.getItem("nextsem_html_level")) as Level | null;
      if (savedLang) setSelectedLang(savedLang);
      if (savedLevel) setSelectedLevel(savedLevel);

      try {
        const done = JSON.parse(localStorage.getItem("nextsem_completed_chapters") || "{}");
        setCompletedChapters(done);
      } catch (e) {
        console.error(e);
      }

      const checkAuth = () => {
        const saved = localStorage.getItem("nextsem_user");
        let uObj = null;
        if (saved) {
          try {
            uObj = JSON.parse(saved);
          } catch (e) {
            console.error(e);
          }
        }
        setCurrentUser(uObj);
      };
      checkAuth();
      window.addEventListener("nextsem_auth_changed", checkAuth);

      const handlePrefChange = (e: Event) => {
        const customEvent = e as CustomEvent<{ lang?: Lang; level?: Level; fontSize?: number }>;
        if (customEvent.detail?.lang) setSelectedLang(customEvent.detail.lang);
        if (customEvent.detail?.level) setSelectedLevel(customEvent.detail.level);
        if (customEvent.detail?.fontSize) setFontSize(customEvent.detail.fontSize);
      };

      window.addEventListener("nextsem_lesson_pref_changed", handlePrefChange);
      return () => {
        window.removeEventListener("nextsem_auth_changed", checkAuth);
        window.removeEventListener("nextsem_lesson_pref_changed", handlePrefChange);
      };
    }
  }, []);

  const handleLangChange = (lang: Lang) => {
    setSelectedLang(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_lesson_lang", lang);
      localStorage.setItem("nextsem_html_lang", lang);
      window.dispatchEvent(new CustomEvent("nextsem_lesson_pref_changed", { detail: { lang } }));
    }
  };

  const handleLevelChange = (level: Level) => {
    setSelectedLevel(level);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_lesson_level", level);
      localStorage.setItem("nextsem_html_level", level);
      window.dispatchEvent(new CustomEvent("nextsem_lesson_pref_changed", { detail: { level } }));
    }
  };

  const handleFontSizeChange = (delta: number) => {
    const nextSize = Math.min(24, Math.max(12, fontSize + delta));
    setFontSize(nextSize);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("nextsem_lesson_pref_changed", { detail: { fontSize: nextSize } }));
    }
  };

  const handleSignIn = () => {
    setMenuOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open_google_auth"));
    }
  };

  const handleSignOut = async () => {
    try {
      if (auth) await signOut(auth);
      localStorage.removeItem("nextsem_user");
      setCurrentUser(null);
      setMenuOpen(false);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("nextsem_auth_changed"));
      }
    } catch (e) {
      console.error("Sign Out Error:", e);
    }
  };

  let prevHref: string | null = null;
  let nextHref: string | null = null;
  let dashboardHref = "/";
  let courseTitle = "Lesson";
  let progressText = "";
  let activeLessonsList: { id: number; slug: string; title: string }[] = [];
  let currentSlug = "";

  // 1. MS Word Lessons (/msword/<slug>)
  if (pathname.startsWith("/msword")) {
    const raw = pathname.replace(/^\/msword\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    const idx = mswordLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    dashboardHref = "/msword";
    courseTitle = "MS Word 365";
    activeLessonsList = mswordLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));

    if (idx !== -1) {
      progressText = `Lesson ${idx + 1} of ${mswordLessons.length}`;
      prevHref = idx > 0 ? `/msword/${mswordLessons[idx - 1].slug}` : "/msword";
      nextHref = idx < mswordLessons.length - 1 ? `/msword/${mswordLessons[idx + 1].slug}` : "/msword";
    } else {
      prevHref = "/msword";
      nextHref = `/msword/${mswordLessons[0].slug}`;
    }
  } 
  // 2. CLI Lessons (/cli/<slug>)
  else if (pathname.startsWith("/cli")) {
    const raw = pathname.replace(/^\/cli\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    const idx = cliLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    dashboardHref = "/cli";
    courseTitle = "Windows CLI";
    activeLessonsList = cliLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));

    if (idx !== -1) {
      progressText = `Lesson ${idx + 1} of ${cliLessons.length}`;
      prevHref = idx > 0 ? `/cli/${cliLessons[idx - 1].slug}` : "/cli";
      nextHref = idx < cliLessons.length - 1 ? `/cli/${cliLessons[idx + 1].slug}` : "/cli";
    } else {
      prevHref = "/cli";
      nextHref = `/cli/${cliLessons[0].slug}`;
    }
  } 
  // 3. HTML Lessons (/html/<slug>)
  else if (pathname.startsWith("/html")) {
    const raw = pathname.replace(/^\/html\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    const idx = htmlLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    dashboardHref = "/html";
    courseTitle = "HTML Web Dev";
    activeLessonsList = htmlLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));

    if (idx !== -1) {
      progressText = `Lesson ${idx + 1} of ${htmlLessons.length}`;
      prevHref = idx > 0 ? `/html/${htmlLessons[idx - 1].slug}` : "/html";
      nextHref = idx < htmlLessons.length - 1 ? `/html/${htmlLessons[idx + 1].slug}` : "/html";
    } else {
      prevHref = "/html";
      nextHref = `/html/${htmlLessons[0].slug}`;
    }
  } 
  // 4. Git Lessons (/git/<slug>)
  else if (pathname.startsWith("/git")) {
    const raw = pathname.replace(/^\/git\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    const idx = gitLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    dashboardHref = "/git";
    courseTitle = "Git & GitHub";
    activeLessonsList = gitLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));

    if (idx !== -1) {
      progressText = `Lesson ${idx + 1} of ${gitLessons.length}`;
      prevHref = idx > 0 ? `/git/${gitLessons[idx - 1].slug}` : "/git";
      nextHref = idx < gitLessons.length - 1 ? `/git/${gitLessons[idx + 1].slug}` : "/git";
    } else {
      prevHref = "/git";
      nextHref = `/git/${gitLessons[0].slug}`;
    }
  } 
  // 5. NCERT Notes (/ncert/notes/<key>)
  else if (pathname.startsWith("/ncert/notes/")) {
    const noteKey = pathname.replace("/ncert/notes/", "").split("/")[0].split("?")[0];
    const allUnits = ncertSubjects.flatMap((s) => s.blocks.flatMap((b) => b.units));
    const idx = allUnits.findIndex((u) => u.noteKey === noteKey);
    dashboardHref = "/ncert";
    courseTitle = "NCERT Hub";

    if (idx !== -1) {
      progressText = `Unit ${idx + 1} of ${allUnits.length}`;
      prevHref = idx > 0 ? `/ncert/notes/${allUnits[idx - 1].noteKey}` : "/ncert";
      nextHref = idx < allUnits.length - 1 ? `/ncert/notes/${allUnits[idx + 1].noteKey}` : "/ncert";
    } else {
      prevHref = "/ncert";
      nextHref = "/ncert";
    }
  }
  // 6. Textbook Book Chapters (/book/<id> or /<subject>/book/<id>)
  else if (pathname.includes("/book/")) {
    const chapterId = getChapterIdFromPath(pathname);
    const idx = searchIndex.findIndex((item) => item.id === chapterId);
    dashboardHref = "/course";
    courseTitle = "Textbook Chapter";

    if (idx !== -1) {
      progressText = `Chapter ${idx + 1} of ${searchIndex.length}`;
      prevHref = idx > 0 ? getChapterUrl(searchIndex[idx - 1].id) : "/course";
      nextHref = idx < searchIndex.length - 1 ? getChapterUrl(searchIndex[idx + 1].id) : "/course";
    } else {
      prevHref = "/course";
      nextHref = "/course";
    }
  }
  // 7. General Fallback
  else {
    dashboardHref = "/";
    courseTitle = "Lessons";
    progressText = "Interactive Lesson";
    prevHref = "/";
    nextHref = "/";
  }

  return (
    <>
      {/* ── SLIDE-UP TOOLS DRAWER ── */}
      {toolsOpen && (
        <>
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-40 transition-opacity animate-in fade-in duration-200"
            onClick={() => setToolsOpen(false)}
          />
          <div 
            className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-950/95 backdrop-blur-2xl border-t border-x border-blue-900/40 rounded-t-[32px] p-5 pb-24 z-50 animate-in slide-in-from-bottom duration-300 select-none shadow-[0_-12px_40px_rgba(0,0,0,0.8)] text-slate-100 space-y-4"
            style={{ paddingBottom: 'calc(5.5rem + env(safe-area-inset-bottom))' }}
          >
            <div className="w-12 h-1 bg-slate-700/60 rounded-full mx-auto mb-2" />
            <div className="flex justify-between items-center pb-3 border-b border-slate-800/80">
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <Sliders size={16} className="text-amber-400" />
                Lesson Reading Preferences
              </h3>
              <button 
                onClick={() => setToolsOpen(false)}
                className="p-1 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Language Switcher */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-blue-400 tracking-wider">Select Language</label>
              <div className="grid grid-cols-3 bg-slate-900 border border-slate-800 p-1 rounded-xl gap-1">
                {(["english", "hinglish", "hindi"] as Lang[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLangChange(lang)}
                    className={`text-xs font-black uppercase py-2 px-2 rounded-lg transition-all cursor-pointer ${
                      selectedLang === lang
                        ? "bg-blue-600 text-white shadow-md font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {lang === "english" ? "🇬🇧 EN" : lang === "hinglish" ? "🌐 Hinglish" : "🇮🇳 हिंदी"}
                  </button>
                ))}
              </div>
            </div>

            {/* Kid vs Pro Level Mode */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-amber-400 tracking-wider">Content Mode</label>
              <div className="grid grid-cols-2 bg-slate-900 border border-slate-800 p-1 rounded-xl gap-1">
                {(["kid", "pro"] as Level[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => handleLevelChange(level)}
                    className={`text-xs font-black uppercase py-2 px-2 rounded-lg transition-all cursor-pointer ${
                      selectedLevel === level
                        ? "bg-amber-400 text-slate-950 font-black shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {level === "kid" ? "🧒 Beginner Mode" : "💼 Professional"}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size Adjuster */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase text-slate-300 tracking-wider">Font Size ({fontSize}px)</label>
              <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-2 rounded-xl">
                <button
                  onClick={() => handleFontSizeChange(-1)}
                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-750 text-white font-black rounded-lg transition-colors cursor-pointer text-xs"
                >
                  A- Small
                </button>
                <span className="text-xs font-mono font-bold text-amber-400">{fontSize}px</span>
                <button
                  onClick={() => handleFontSizeChange(1)}
                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-750 text-white font-black rounded-lg transition-colors cursor-pointer text-xs"
                >
                  A+ Large
                </button>
              </div>
            </div>

          </div>
        </>
      )}

      {/* ── SLIDE-UP LESSON & NAVIGATION MENU DRAWER ── */}
      {menuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-40 transition-opacity animate-in fade-in duration-200"
            onClick={() => setMenuOpen(false)}
          />
          
          <div 
            className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-slate-950/95 backdrop-blur-2xl border-t border-x border-blue-900/40 rounded-t-[32px] p-5 pb-24 z-50 animate-in slide-in-from-bottom duration-300 select-none shadow-[0_-12px_40px_rgba(0,0,0,0.8)] text-slate-100"
            style={{ paddingBottom: 'calc(5.5rem + env(safe-area-inset-bottom))' }}
          >
            {/* Handle Indicator Bar */}
            <div className="w-12 h-1 bg-slate-700/60 rounded-full mx-auto mb-4" />

            {/* Header */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs shadow-inner">
                  NS
                </div>
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                  {courseTitle}
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
                    {progressText || "Menu"}
                  </span>
                </h3>
              </div>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1 custom-scrollbar">
              
              {/* User Auth Banner */}
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-2xl">
                {currentUser ? (
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {currentUser.photo ? (
                        <img 
                          src={currentUser.photo} 
                          alt={currentUser.name || "User"} 
                          className="w-9 h-9 rounded-full object-cover border-2 border-amber-500/30 shrink-0"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shrink-0 shadow-md">
                          {currentUser.avatar || currentUser.name?.charAt(0) || "U"}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {currentUser.name}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          {currentUser.email}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all cursor-pointer"
                      title="Sign Out"
                    >
                      <LogOut size={15} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-white">Guest Student</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Sign in to save certifications & stats</div>
                    </div>
                    <button
                      onClick={handleSignIn}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-extrabold text-[11px] transition-all cursor-pointer shadow-md shadow-amber-500/20"
                    >
                      <LogIn size={13} />
                      <span>Sign In</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Module Lessons Menu List */}
              {activeLessonsList.length > 0 && (
                <div className="space-y-1.5">
                  <div className="text-[10px] font-black uppercase tracking-wider text-blue-400 px-1">
                    All Course Lessons ({activeLessonsList.length})
                  </div>
                  {activeLessonsList.map((item) => {
                    const isActive = item.slug === currentSlug;
                    const itemDone = completedChapters[item.slug] === true;
                    return (
                      <Link
                        key={item.id}
                        href={`${dashboardHref}/${item.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between gap-2 p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-blue-600/20 border-blue-500/70 text-white font-bold"
                            : "bg-slate-900/50 border-slate-850 text-slate-300 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${
                            isActive ? "bg-blue-600 text-white" : itemDone ? "bg-emerald-950 text-emerald-400 border border-emerald-800/60" : "bg-slate-800 text-slate-400"
                          }`}>
                            {itemDone ? "✓" : item.id}
                          </span>
                          <span className="truncate text-xs">{item.title}</span>
                        </div>
                        {isActive && <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shrink-0" />}
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Quick Navigation Links */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                <Link
                  href={dashboardHref}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl text-xs font-bold text-slate-200"
                >
                  <BookOpen size={15} className="text-blue-400" />
                  <span>Course Dashboard</span>
                </Link>
                <Link
                  href="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl text-xs font-bold text-slate-200"
                >
                  <User size={15} className="text-amber-400" />
                  <span>My Profile</span>
                </Link>
                <Link
                  href="/cmd"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl text-xs font-bold text-slate-200"
                >
                  <Code size={15} className="text-blue-400" />
                  <span>CMD Terminal</span>
                </Link>
                <Link
                  href="/bca"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl text-xs font-bold text-slate-200"
                >
                  <GraduationCap size={15} className="text-amber-400" />
                  <span>BCA Syllabus</span>
                </Link>
              </div>

            </div>
          </div>
        </>
      )}



      {/* ── FULL-WIDTH PINNED EDGE-TO-EDGE TAB BAR ── */}
      <nav 
        className={`fixed left-0 right-0 bottom-0 w-full z-[999] md:hidden select-none bg-[#090d22]/95 backdrop-blur-2xl border-t border-slate-800/80 shadow-[0_-8px_25px_rgba(0,0,0,0.5)] text-slate-200 transition-transform duration-300 ${
          navVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="px-2 py-1 flex items-center justify-around w-full max-w-lg mx-auto">
          
          {/* TAB 1: PREV */}
          {prevHref ? (
            <Link
              href={prevHref}
              className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 active:scale-90 text-amber-400 hover:text-amber-300 font-bold"
            >
              <ChevronLeft size={18} className="stroke-[2.5] text-amber-400" />
              <span className="text-[10px] font-bold tracking-tight mt-0.5">Prev</span>
            </Link>
          ) : (
            <div className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl opacity-30 text-slate-500 cursor-not-allowed">
              <ChevronLeft size={18} className="stroke-[1.5]" />
              <span className="text-[10px] font-bold tracking-tight mt-0.5">Prev</span>
            </div>
          )}

          {/* TAB 2: HOME */}
          <Link
            href="/"
            className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 active:scale-90 text-slate-300 hover:text-white"
          >
            <div className="w-5 h-5 rounded bg-[#09101f] border border-[#04AA6D]/40 flex items-center justify-center text-[#04AA6D] font-black text-[9px] shadow-xs">
              NS
            </div>
            <span className="text-[10px] font-bold tracking-tight mt-0.5">Home</span>
          </Link>

          {/* TAB 3: TOOLS (Language, Kid/Pro, Font Size) */}
          <button
            onClick={() => {
              setToolsOpen(!toolsOpen);
              setMenuOpen(false);
            }}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
              toolsOpen 
                ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Sliders size={18} className={toolsOpen ? "stroke-[2.5]" : "stroke-[1.75]"} />
            <span className="text-[10px] font-bold tracking-tight mt-0.5">Tools</span>
            {toolsOpen && (
              <span className="absolute -top-0.5 w-1.5 h-1.5 bg-amber-400 rounded-full" />
            )}
          </button>

          {/* TAB 4: MENU */}
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setToolsOpen(false);
            }}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
              menuOpen 
                ? 'text-[#04AA6D] bg-[#04AA6D]/10 border border-[#04AA6D]/20' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Menu size={18} className={menuOpen ? "stroke-[2.5]" : "stroke-[1.75]"} />
            <span className="text-[10px] font-bold tracking-tight mt-0.5">Menu</span>
            {menuOpen && (
              <span className="absolute -top-0.5 w-1.5 h-1.5 bg-[#04AA6D] rounded-full" />
            )}
          </button>

          {/* TAB 5: NEXT */}
          {nextHref ? (
            <Link
              href={nextHref}
              className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 active:scale-90 text-amber-400 hover:text-amber-300 font-bold"
            >
              <ChevronRight size={18} className="stroke-[2.5] text-amber-400" />
              <span className="text-[10px] font-black tracking-tight mt-0.5">Next</span>
            </Link>
          ) : (
            <div className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl opacity-30 text-slate-500 cursor-not-allowed">
              <ChevronRight size={18} className="stroke-[1.5]" />
              <span className="text-[10px] font-black tracking-tight mt-0.5">Next</span>
            </div>
          )}

        </div>
      </nav>
    </>
  );
}
