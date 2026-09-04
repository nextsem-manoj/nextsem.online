"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, ChevronRight, LayoutGrid, BookOpen, 
  User, Menu, X, LogIn, LogOut, Sliders, Type, Languages, Sparkles, Code, GraduationCap, CheckCircle2
} from "lucide-react";
import { mswordLessons } from "@/data/mswordLessonsData";
import { cliLessons } from "@/data/cliLessonsData";
import { htmlLessons } from "@/data/htmlLessonsData";
import { cssLessons } from "@/data/cssLessonsData";
import { jsLessons } from "@/data/jsLessonsData";
import { reactLessons } from "@/data/reactLessonsData";
import { nodeLessons } from "@/data/nodeLessonsData";
import { gitLessons } from "@/data/gitLessonsData";
import { cppLessons } from "@/data/cppLessonsData";

import searchIndex from "@/data/searchIndex.json";
import { getChapterIdFromPath, getChapterUrl } from "@/lib/htmlLessonsHelper";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { Capacitor } from "@capacitor/core";
import { showBannerAd, hideBannerAd, triggerNavigationAd } from "@/lib/admobHelper";
import { useProgress } from "@/context/ProgressContext";

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
  const router = useRouter();
  const { markCompleted } = useProgress();
  const [currentUser, setCurrentUser] = useState<UserObj | null>(null);
  const [selectedLang, setSelectedLang] = useState<Lang>("hinglish");
  const [selectedLevel, setSelectedLevel] = useState<Level>("kid");
  const [fontSize, setFontSize] = useState<number>(14);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [toolsOpen, setToolsOpen] = useState<boolean>(false);
  const [subjectDrawerOpen, setSubjectDrawerOpen] = useState<boolean>(false);
  const [profileOverlayOpen, setProfileOverlayOpen] = useState<boolean>(false);
  const [completedChapters, setCompletedChapters] = useState<Record<string, boolean>>({});

  // 5-Tab Navigation Bar (Prev/Home/Tools/Menu/Next):
  const [navVisible] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleFs = () => setIsFullscreen(!!document.fullscreenElement);
      document.addEventListener("fullscreenchange", handleFs);
      return () => document.removeEventListener("fullscreenchange", handleFs);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight || document.documentElement.clientHeight;

      // Show bottom navigation bar when student is within 350px of bottom of lesson
      const atBottom = scrollTop + clientHeight >= scrollHeight - 350;
      if (atBottom) {
        setIsAtBottom(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (Capacitor.isNativePlatform() && pathname !== "/") {
      showBannerAd();
    } else if (Capacitor.isNativePlatform() && pathname === "/") {
      hideBannerAd();
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = (localStorage.getItem("nextsem_lesson_lang") || localStorage.getItem("nextsem_html_lang")) as Lang | null;
      const savedLevel = (localStorage.getItem("nextsem_lesson_level") || localStorage.getItem("nextsem_html_level")) as Level | null;
      if (savedLang) setSelectedLang(savedLang);
      if (savedLevel) setSelectedLevel(savedLevel);

      const checkProgress = () => {
        try {
          const uSaved = localStorage.getItem("nextsem_user");
          let uEmail = "guest";
          if (uSaved) { try { uEmail = JSON.parse(uSaved).email || "guest"; } catch (_) {} }
          const done1 = JSON.parse(localStorage.getItem("nextsem_completed_chapters") || "{}");
          const done2 = JSON.parse(localStorage.getItem(`nextsem-progress:${uEmail}`) || "{}");
          const done3 = JSON.parse(localStorage.getItem("nextsem-progress") || "{}");
          const merged = { ...done3, ...done2, ...done1 };
          setCompletedChapters(merged);
        } catch (e) {
          console.error(e);
        }
      };
      checkProgress();
      window.addEventListener("nextsem_progress_changed", checkProgress);

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
        window.removeEventListener("nextsem_progress_changed", checkProgress);
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
  let currentLessonDisplay = "";
  const totalCourseLessons = 170; // Total course lessons across CLI, HTML, CSS, JS, React, Node, Git
  const cliCompletedCount = cliLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id] || completedChapters[`cli_${l.id}`]).length;
  const htmlCompletedCount = htmlLessons.filter(l => completedChapters[l.slug] || completedChapters[l.id] || completedChapters[`html_${l.id}`]).length;
  const totalCompletedCount = Object.keys(completedChapters).filter(k => completedChapters[k] === true).length;
  const overallPercent = Math.min(100, Math.round((totalCompletedCount / totalCourseLessons) * 100));

  // 1. MS Word Lessons (/msword/<slug>)
  if (pathname.startsWith("/msword")) {
    const raw = pathname.replace(/^\/msword\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    let idx = mswordLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    if (idx === -1 && (!raw || raw === "/")) idx = 0;
    dashboardHref = "/msword";
    courseTitle = "MS Word 365";
    activeLessonsList = mswordLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));
    currentSlug = mswordLessons[idx]?.slug || "";
    currentLessonDisplay = mswordLessons[idx]?.title || "";

    progressText = `Lesson ${idx + 1} of ${mswordLessons.length}`;
    prevHref = idx > 0 ? `/msword/${mswordLessons[idx - 1].slug}` : null;
    nextHref = idx < mswordLessons.length - 1 ? `/msword/${mswordLessons[idx + 1].slug}` : null;
  } 
  // 2. CLI Lessons (/cli/<slug>)
  else if (pathname.startsWith("/cli")) {
    const raw = pathname.replace(/^\/cli\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    let idx = cliLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    if (idx === -1 && (!raw || raw === "/")) idx = 0;
    dashboardHref = "/cli";
    courseTitle = "Windows CLI";
    activeLessonsList = cliLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));
    currentSlug = cliLessons[idx]?.slug || "";
    currentLessonDisplay = cliLessons[idx]?.title || "";

    progressText = `Lesson ${idx + 1} of ${cliLessons.length}`;
    prevHref = idx > 0 ? `/cli/${cliLessons[idx - 1].slug}` : null;
    nextHref = idx < cliLessons.length - 1 ? `/cli/${cliLessons[idx + 1].slug}` : null;
  } 
  // 3. HTML Lessons (/html/<slug>)
  else if (pathname.startsWith("/html")) {
    const raw = pathname.replace(/^\/html\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    let idx = htmlLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    if (idx === -1 && (!raw || raw === "/")) idx = 0;
    dashboardHref = "/html";
    courseTitle = "HTML Web Dev";
    activeLessonsList = htmlLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));
    currentSlug = htmlLessons[idx]?.slug || "";
    currentLessonDisplay = htmlLessons[idx]?.title || "";

    progressText = `Lesson ${idx + 1} of ${htmlLessons.length}`;
    prevHref = idx > 0 ? (htmlLessons[idx - 1].id === 1 ? "/html" : `/html/${htmlLessons[idx - 1].slug}`) : null;
    nextHref = idx < htmlLessons.length - 1 ? `/html/${htmlLessons[idx + 1].slug}` : null;
  } 
  // 4. CSS Lessons (/css/<slug>)
  else if (pathname.startsWith("/css")) {
    const raw = pathname.replace(/^\/css\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    let idx = cssLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    if (idx === -1 && (!raw || raw === "/")) idx = 0;
    dashboardHref = "/css";
    courseTitle = "CSS3 Styling";
    activeLessonsList = cssLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));
    currentSlug = cssLessons[idx]?.slug || "";
    currentLessonDisplay = cssLessons[idx]?.title || "";

    progressText = `Lesson ${idx + 1} of ${cssLessons.length}`;
    prevHref = idx > 0 ? `/css/${cssLessons[idx - 1].slug}` : null;
    nextHref = idx < cssLessons.length - 1 ? `/css/${cssLessons[idx + 1].slug}` : null;
  }
  // 5. JavaScript Lessons (/js/<slug> or /javascript/<slug>)
  else if (pathname.startsWith("/js") || pathname.startsWith("/javascript")) {
    const raw = pathname.replace(/^\/(?:js|javascript)\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    let idx = jsLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    if (idx === -1 && (!raw || raw === "/")) idx = 0;
    dashboardHref = "/js";
    courseTitle = "JavaScript";
    activeLessonsList = jsLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));
    currentSlug = jsLessons[idx]?.slug || "";
    currentLessonDisplay = jsLessons[idx]?.title || "";

    progressText = `Lesson ${idx + 1} of ${jsLessons.length}`;
    prevHref = idx > 0 ? `/js/${jsLessons[idx - 1].slug}` : null;
    nextHref = idx < jsLessons.length - 1 ? `/js/${jsLessons[idx + 1].slug}` : null;
  }
  // 6. React Lessons (/react/<slug>)
  else if (pathname.startsWith("/react")) {
    const raw = pathname.replace(/^\/react\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    let idx = reactLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    if (idx === -1 && (!raw || raw === "/")) idx = 0;
    dashboardHref = "/react";
    courseTitle = "React.js";
    activeLessonsList = reactLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));
    currentSlug = reactLessons[idx]?.slug || "";
    currentLessonDisplay = reactLessons[idx]?.title || "";

    progressText = `Lesson ${idx + 1} of ${reactLessons.length}`;
    prevHref = idx > 0 ? `/react/${reactLessons[idx - 1].slug}` : null;
    nextHref = idx < reactLessons.length - 1 ? `/react/${reactLessons[idx + 1].slug}` : null;
  }
  // 7. Node.js Lessons (/nodejs/<slug> or /node/<slug>)
  else if (pathname.startsWith("/nodejs") || pathname.startsWith("/node")) {
    const raw = pathname.replace(/^\/(?:nodejs|node)\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    let idx = nodeLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    if (idx === -1 && (!raw || raw === "/")) idx = 0;
    dashboardHref = "/nodejs";
    courseTitle = "Node.js";
    activeLessonsList = nodeLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));
    currentSlug = nodeLessons[idx]?.slug || "";
    currentLessonDisplay = nodeLessons[idx]?.title || "";

    progressText = `Lesson ${idx + 1} of ${nodeLessons.length}`;
    prevHref = idx > 0 ? `/nodejs/${nodeLessons[idx - 1].slug}` : null;
    nextHref = idx < nodeLessons.length - 1 ? `/nodejs/${nodeLessons[idx + 1].slug}` : null;
  }
  // 8. Git Lessons (/git/<slug>)
  else if (pathname.startsWith("/git")) {
    const raw = pathname.replace(/^\/git\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    let idx = gitLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    if (idx === -1 && (!raw || raw === "/")) idx = 0;
    dashboardHref = "/git";
    courseTitle = "Git & GitHub";
    activeLessonsList = gitLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));
    currentSlug = gitLessons[idx]?.slug || "";
    currentLessonDisplay = gitLessons[idx]?.title || "";

    progressText = `Lesson ${idx + 1} of ${gitLessons.length}`;
    prevHref = idx > 0 ? `/git/${gitLessons[idx - 1].slug}` : null;
    nextHref = idx < gitLessons.length - 1 ? `/git/${gitLessons[idx + 1].slug}` : null;
  }
  // 9. C++ / C Lessons (/cpp/<slug> or /c/<slug>)
  else if (pathname.startsWith("/cpp") || pathname.startsWith("/c")) {
    const raw = pathname.replace(/^\/(?:cpp|c)\/?/, "").split("/")[0].split("?")[0].replace(/\/$/, "");
    const decoded = decodeURIComponent(raw);
    let idx = cppLessons.findIndex((l) => l.slug === raw || l.slug === decoded || l.id === Number(raw));
    if (idx === -1 && (!raw || raw === "/")) idx = 0;
    dashboardHref = "/cpp";
    courseTitle = "C++ Coding";
    activeLessonsList = cppLessons.map(l => ({ id: l.id, slug: l.slug, title: l.title }));
    currentSlug = cppLessons[idx]?.slug || "";
    currentLessonDisplay = cppLessons[idx]?.title || "";

    progressText = `Lesson ${idx + 1} of ${cppLessons.length}`;
    prevHref = idx > 0 ? `/cpp/${cppLessons[idx - 1].slug}` : null;
    nextHref = idx < cppLessons.length - 1 ? `/cpp/${cppLessons[idx + 1].slug}` : null;
  }
  // 10. Textbook Book Chapters (/book/<id> or /<subject>/book/<id>)
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
  // 11. General Fallback
  else {
    dashboardHref = "/";
    courseTitle = "Lessons";
    progressText = "Interactive Lesson";
    prevHref = "/";
    nextHref = "/";
  }

  if (isFullscreen) return null;

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
                  href="/cli"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl text-xs font-bold text-slate-200"
                >
                  <Code size={15} className="text-blue-400" />
                  <span>Windows CLI</span>
                </Link>
                <Link
                  href="/html"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl text-xs font-bold text-slate-200"
                >
                  <GraduationCap size={15} className="text-amber-400" />
                  <span>HTML Lessons</span>
                </Link>
              </div>

            </div>
          </div>
        </>
      )}



      {/* ── SLIDE-UP SUBJECT & UNIT SWITCHER DRAWER (Integrating BcaHeaderNav Dropdown) ── */}
      {subjectDrawerOpen && (
        <>
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-40 transition-opacity animate-in fade-in duration-200"
            onClick={() => setSubjectDrawerOpen(false)}
          />
          
          <div 
            className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-[#090d22]/95 backdrop-blur-2xl border-t border-x border-cyan-500/40 rounded-t-[32px] p-5 pb-24 z-50 animate-in slide-in-from-bottom duration-300 select-none shadow-[0_-12px_40px_rgba(0,0,0,0.8)] text-slate-100"
            style={{ paddingBottom: 'calc(5.5rem + env(safe-area-inset-bottom))' }}
          >
            <div className="w-12 h-1 bg-slate-700/60 rounded-full mx-auto mb-4" />

            <div className="flex flex-col items-center text-center mb-4 pb-3 border-b border-slate-800/80 relative">
              <div className="flex items-center justify-center gap-2 mb-1">
                <BookOpen size={18} className="text-cyan-400" />
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-cyan-300 text-center">
                  {courseTitle} Curriculum ({activeLessonsList.length || 0})
                </h3>
              </div>
              <p className="text-xs text-slate-400 text-center font-medium">
                {progressText || "Select a lesson to navigate"}
              </p>
              <button 
                onClick={() => setSubjectDrawerOpen(false)}
                className="absolute right-0 top-0 p-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1 custom-scrollbar">
              {/* Active Reading Position Card */}
              {currentLessonDisplay && (
                <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-950/80 via-slate-900 to-amber-950/60 border border-cyan-500/40 text-center space-y-1 shadow-xl">
                  <div className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    📍 Active Lesson Position
                  </div>
                  <div className="text-xs sm:text-sm font-black text-cyan-200">
                    {currentLessonDisplay.replace(/^(CLI\.\d+:|P\d+\.\d+:|Phase\s+\d+:)\s*/i, '').trim()}
                  </div>
                </div>
              )}

              {/* Dynamic Lesson List */}
              <div className="flex flex-col gap-1.5">
                {activeLessonsList.map((item, idx) => {
                  const targetHref = `${dashboardHref}/${item.slug}`;
                  const isCurrent = pathname.endsWith(`/${item.slug}`) || pathname === targetHref;
                  const isDone = completedChapters[item.slug] || completedChapters[item.id];
                  return (
                    <Link
                      key={item.id || idx}
                      href={targetHref}
                      onClick={() => setSubjectDrawerOpen(false)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                        isCurrent
                          ? 'bg-[#04AA6D]/20 border-[#04AA6D]/60 text-[#04AA6D] font-bold shadow-md'
                          : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1 text-left">
                        <span className={`w-5 h-5 rounded-full text-[10px] font-extrabold flex items-center justify-center shrink-0 ${
                          isCurrent ? 'bg-[#04AA6D] text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="truncate">{item.title.replace(/^(CLI\.\d+:|P\d+\.\d+:|Phase\s+\d+:)\s*/i, '').trim()}</span>
                      </div>
                      {isDone && (
                        <CheckCircle2 size={14} className="text-[#04AA6D] shrink-0 ml-2" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── FULL-WIDTH PINNED EDGE-TO-EDGE TAB BAR (Mobile Viewports) ── */}
      <nav 
        className="fixed left-0 right-0 bottom-0 w-full z-[999] md:hidden select-none bg-[#090d22]/95 backdrop-blur-2xl border-t border-slate-800/80 shadow-[0_-8px_25px_rgba(0,0,0,0.5)] text-slate-200 transition-all duration-300 translate-y-0 opacity-100"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="px-2 py-1.5 flex items-center justify-around w-full max-w-xl mx-auto">
          
          {/* TAB 1: HOME */}
          <Link
            href="/"
            className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active:scale-90 text-slate-300 hover:text-white"
          >
            <div className="w-5 h-5 rounded bg-[#09101f] border border-[#04AA6D]/40 flex items-center justify-center text-[#04AA6D] font-black text-[9px] shadow-xs">
              NS
            </div>
            <span className="text-[10px] font-bold tracking-tight mt-0.5">Home</span>
          </Link>

          {/* TAB 2: PREV */}
          {prevHref ? (
            <button
              onClick={async () => {
                await triggerNavigationAd();
                window.location.href = prevHref!;
              }}
              className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active:scale-90 text-[#04AA6D] hover:text-white font-bold cursor-pointer"
            >
              <ChevronLeft size={18} className="stroke-[2.5] text-[#04AA6D]" />
              <span className="text-[10px] font-bold tracking-tight mt-0.5">Prev</span>
            </button>
          ) : (
            <div className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl opacity-30 text-slate-500 cursor-not-allowed">
              <ChevronLeft size={18} className="stroke-[1.5]" />
              <span className="text-[10px] font-bold tracking-tight mt-0.5">Prev</span>
            </div>
          )}

          {/* TAB 3: UNIT / SUBJECT SWITCHER */}
          <button
            onClick={() => {
              setSubjectDrawerOpen(!subjectDrawerOpen);
              setMenuOpen(false);
              setToolsOpen(false);
            }}
            className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
              subjectDrawerOpen 
                ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-500/30 font-bold' 
                : 'text-cyan-400 hover:text-cyan-200 font-bold'
            }`}
          >
            <BookOpen size={18} className="stroke-[2] text-cyan-400" />
            <span className="text-[10px] font-bold tracking-tight mt-0.5 truncate max-w-[80px]">
              {courseTitle} ▾
            </span>
            {subjectDrawerOpen && (
              <span className="absolute -top-0.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            )}
          </button>

          {/* TAB 4: NEXT */}
          {nextHref ? (
            <button
              onClick={async () => {
                if (currentSlug) markCompleted(currentSlug);
                await triggerNavigationAd();
                window.location.href = nextHref!;
              }}
              className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active:scale-90 text-[#04AA6D] hover:text-white font-bold cursor-pointer"
            >
              <ChevronRight size={18} className="stroke-[2.5] text-[#04AA6D]" />
              <span className="text-[10px] font-black tracking-tight mt-0.5">Next</span>
            </button>
          ) : (
            <div className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl opacity-30 text-slate-500 cursor-not-allowed">
              <ChevronRight size={18} className="stroke-[1.5]" />
              <span className="text-[10px] font-black tracking-tight mt-0.5">Next</span>
            </div>
          )}

          {/* TAB 5: ACCOUNT OVERLAY MODAL */}
          <button
            onClick={() => {
              setProfileOverlayOpen(true);
              setMenuOpen(false);
              setToolsOpen(false);
              setSubjectDrawerOpen(false);
            }}
            className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
              profileOverlayOpen
                ? 'text-[#04AA6D] bg-[#04AA6D]/10 border border-[#04AA6D]/30 font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {currentUser?.photo ? (
              <img src={currentUser.photo} alt="" className="w-5 h-5 rounded-full object-cover border border-[#04AA6D]" />
            ) : (
              <User size={18} className={profileOverlayOpen ? "stroke-[2.5] text-[#04AA6D]" : "stroke-[1.75]"} />
            )}
            <span className="text-[10px] font-bold tracking-tight mt-0.5">Account</span>
          </button>

        </div>
      </nav>

      {/* ── PROFILE OVERLAY MODAL (NON-DISTRACTING LESSON OVERLAY) ── */}
      {profileOverlayOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 text-left transition-all duration-300"
          onClick={() => setProfileOverlayOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-[#0b101d] border border-slate-800 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setProfileOverlayOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header / User Card */}
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800/80">
              {currentUser?.photo ? (
                <img src={currentUser.photo} alt="" className="w-12 h-12 rounded-2xl object-cover border-2 border-[#04AA6D]" />
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-[#04AA6D] text-slate-950 flex items-center justify-center font-black text-lg shadow-md">
                  {currentUser?.avatar || currentUser?.name?.charAt(0) || "D"}
                </div>
              )}
              <div>
                <h3 className="text-lg font-extrabold text-white">
                  {currentUser?.name || "Developer Profile"}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {currentUser?.email || "Signed in locally"}
                </p>
              </div>
            </div>

            {/* Overall Learning Progress */}
            <div className="p-4 bg-[#141b2d] border border-slate-800 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-white">Overall Learning Progress</span>
                <span className="text-[#04AA6D] font-extrabold">{totalCompletedCount} / {totalCourseLessons} lessons</span>
              </div>
              <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-[#04AA6D] to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${overallPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400 font-medium pt-0.5">
                {overallPercent}% of total curriculum completed! Keep learning.
              </p>
            </div>

            {/* Subject / Unit Breakdown Cards */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Unit & Subject Progress</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold">
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-between">
                  <span className="text-slate-200">🪟 Windows CLI</span>
                  <span className="text-[#04AA6D] font-extrabold">{cliCompletedCount} / {cliLessons.length}</span>
                </div>
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-between">
                  <span className="text-slate-200">🌐 HTML Development</span>
                  <span className="text-[#04AA6D] font-extrabold">{htmlCompletedCount} / {htmlLessons.length}</span>
                </div>
              </div>
            </div>

            {/* Actions: Sign Out / View Complete Profile / Return to Lesson */}
            <div className="pt-2 flex items-center gap-2 flex-wrap sm:flex-nowrap">
              {currentUser ? (
                <button
                  onClick={handleSignOut}
                  className="py-2.5 px-3 bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-300 font-extrabold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <LogOut size={15} />
                  <span>Sign Out</span>
                </button>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="py-2.5 px-3 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <LogIn size={15} />
                  <span>Sign In</span>
                </button>
              )}

              <a
                href="/profile"
                className="flex-1 py-2.5 px-3 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 font-extrabold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center shadow-md"
              >
                <User size={15} />
                <span>Full Profile &amp; Certificates »</span>
              </a>

              <button
                onClick={() => setProfileOverlayOpen(false)}
                className="py-2.5 px-3 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs rounded-xl transition-all cursor-pointer shadow-md shrink-0"
              >
                Return to Lesson
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
