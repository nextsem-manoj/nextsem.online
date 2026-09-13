"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, ChevronRight, BookOpen, Code, 
  HelpCircle, CheckCircle2, AlertCircle, Sparkles, Lock, ArrowLeft, X, Bookmark, Download, Copy, Check, Terminal, Search
} from "lucide-react";
import { htmlLessons, Lesson } from "../data/htmlLessonsData";
import AdSenseBanner from "./AdSenseBanner";
import { useProgress } from "../context/ProgressContext";
import { triggerCelebration } from "../lib/celebration";
import { AdMob } from "@capacitor-community/admob";
import { Capacitor } from "@capacitor/core";
import { showRewardedAd } from "@/lib/admobHelper";
import { generateAndDownloadLessonPdf } from "../lib/pdfHelper";

interface HtmlLessonClientProps {
  lesson: Lesson;
}

import { ensure50Sentences } from "@/lib/lessonEnricher";
import CopyableCommand from "./CopyableCommand";
import ShareButton from "./ShareButton";
import BrandLogoIcon from "./BrandLogoIcon";
import { saveLastLesson } from "@/lib/userProgressSync";
import { auth } from "@/lib/firebase";

export default function HtmlLessonClient({ lesson }: HtmlLessonClientProps) {
  const router = useRouter();
  const { completedChapters, markCompleted } = useProgress();

  const [mounted, setMounted] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"english" | "hinglish" | "hindi">("english");
  const [selectedLevel, setSelectedLevel] = useState<"kid" | "pro">("kid");
  const [showTutorTip, setShowTutorTip] = useState(false);
  
  // Exercise States
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // User States — defaults to "guest" so progress auto-saves without login
  // After AdSense approval this will merge with Google Sign In profile
  const [userEmail, setUserEmail] = useState<string>("guest");

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  // Sync preferences on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("nextsem_html_lang") as "english" | "hinglish" | "hindi" | null;
      if (savedLang) setSelectedLang(savedLang);
      else setSelectedLang("english");

      const savedLevel = localStorage.getItem("nextsem_html_level") as "kid" | "pro" | null;
      if (savedLevel) setSelectedLevel(savedLevel);

      try {
        const savedBookmarks: number[] = JSON.parse(localStorage.getItem("nextsem_html_bookmarks") || "[]");
        setIsBookmarked(savedBookmarks.includes(lesson.id));
      } catch (e) {
        console.error(e);
      }

      setShowTutorTip(false); // Help guide hidden by default
      setMounted(true);
    }
  }, [lesson.id]);

  // Track last visited lesson for resume feature
  useEffect(() => {
    const userEmail = auth.currentUser?.email;
    saveLastLesson(userEmail, {
      slug: lesson.slug,
      title: lesson.title,
      subject: "html",
      lessonNumber: lesson.id,
      visitedAt: new Date().toISOString(),
    });
  }, [lesson.slug, lesson.title, lesson.id]);

  const toggleBookmark = () => {
    try {
      const savedBookmarks: number[] = JSON.parse(localStorage.getItem("nextsem_html_bookmarks") || "[]");
      let updated: number[];
      if (savedBookmarks.includes(lesson.id)) {
        updated = savedBookmarks.filter(id => id !== lesson.id);
        setIsBookmarked(false);
      } else {
        updated = [...savedBookmarks, lesson.id];
        setIsBookmarked(true);
      }
      localStorage.setItem("nextsem_html_bookmarks", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownloadPdf = async () => {
    const currentContentText = lesson[selectedLang][selectedLevel];

    if (Capacitor.isNativePlatform()) {
      const adSuccess = await showRewardedAd(() => {
        generateAndDownloadLessonPdf({
          title: lesson.title,
          courseName: "HTML Web Dev",
          content: currentContentText,
          unit: lesson.unit
        });
      });
      if (!adSuccess) {
        generateAndDownloadLessonPdf({
          title: lesson.title,
          courseName: "HTML Web Dev",
          content: currentContentText,
          unit: lesson.unit
        });
      }
    } else {
      generateAndDownloadLessonPdf({
        title: lesson.title,
        courseName: "HTML Web Dev",
        content: currentContentText,
        unit: lesson.unit
      });
    }
  };

  const handleLangChange = (lang: "english" | "hinglish" | "hindi") => {
    setSelectedLang(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_html_lang", lang);
    }
  };

  const handleLevelChange = (level: "kid" | "pro") => {
    setSelectedLevel(level);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_html_level", level);
    }
  };

  const dismissTutorTip = () => {
    setShowTutorTip(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_html_hide_tip", "true");
    }
  };

  // Sync user email from localStorage (if signed in), otherwise stays "guest"
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nextsem_user");
      if (saved) {
        try {
          const userObj = JSON.parse(saved);
          if (userObj?.email) {
            setUserEmail(userObj.email);
          }
        } catch (e) {
          console.error(e);
        }
      }
      // Also listen for sign-in/sign-out events
      const handleAuth = () => {
        const u = localStorage.getItem("nextsem_user");
        if (u) {
          try { setUserEmail(JSON.parse(u)?.email || "guest"); } catch { setUserEmail("guest"); }
        } else {
          setUserEmail("guest");
        }
      };
      window.addEventListener("nextsem_auth_changed", handleAuth);
      return () => window.removeEventListener("nextsem_auth_changed", handleAuth);
    }
  }, []);

  // Check if current lesson is completed — works for both guest and signed-in users
  const isLessonCompletedKey = `nextsem_html_completed_${userEmail}_${lesson.id}`;
  const [isLessonDone, setIsLessonDone] = useState(false);

  // Compute current exercise based on selected language (with fallback to english)
  const rawExercise = lesson.exercise;
  const currentExercise = (() => {
    if (rawExercise && typeof rawExercise === "object" && "english" in rawExercise) {
      // New multilingual format
      const multiEx = rawExercise as {
        english: { question: string; options: string[]; correctAnswer: string; hint: string };
        hinglish?: { question: string; options: string[]; correctAnswer: string; hint: string };
        hindi?: { question: string; options: string[]; correctAnswer: string; hint: string };
      };
      return multiEx[selectedLang] ?? multiEx.english;
    }
    // Legacy single-language format — use as English for all languages
    return rawExercise as { question: string; options: string[]; correctAnswer: string; hint: string };
  })();

  // Reset MCQ when language changes (don't reset if already completed)
  useEffect(() => {
    if (!isLessonDone) {
      setSelectedOption(null);
      setIsCorrect(false);
      setShowFeedback(false);
      setShowHint(false);
    }
  }, [selectedLang, isLessonDone]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const done = localStorage.getItem(isLessonCompletedKey) === "true";
      setIsLessonDone(done);

      // Auto update progress when user navigates to lesson in order
      if (lesson?.slug) {
        markCompleted(lesson.slug);
        localStorage.setItem(isLessonCompletedKey, "true");
        setIsLessonDone(true);
      }

      if (done || lesson?.slug) {
        // Pre-fill answer if completed
        setSelectedOption(currentExercise.correctAnswer);
        setIsCorrect(true);
        setShowFeedback(true);
      } else {
        setSelectedOption(null);
        setIsCorrect(false);
        setShowFeedback(false);
        setShowHint(false);
      }
    }
  }, [lesson, isLessonCompletedKey]);

  // Find adjacent lessons
  const currentIndex = htmlLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? htmlLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < htmlLessons.length - 1 ? htmlLessons[currentIndex + 1] : null;

  // Check if next lesson is unlocked
  const isNextUnlocked = isLessonDone || (typeof window !== "undefined" && localStorage.getItem(`nextsem_html_completed_${userEmail}_${lesson.id}`) === "true");

  const handleOptionSelect = (option: string, e?: React.MouseEvent) => {
    if (isLessonDone) return; // Prevent change after completion
    setSelectedOption(option);
    const correct = option === currentExercise.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      triggerCelebration(e);
      if (typeof window !== "undefined") {
        localStorage.setItem(isLessonCompletedKey, "true");
        setIsLessonDone(true);

        // Sync to global progress if this is the end of a unit
        checkAndSyncUnitProgress(lesson.id);
      }
    }
  };

  const checkAndSyncUnitProgress = (lessonId: number) => {
    // If the finished lesson is the 10th lesson of a phase, mark the phase complete
    const unitCompletionMap: Record<number, string> = {
      10: "p1-1-intro-and-text",
      20: "p1-2-links-and-media",
      30: "p1-3-lists-and-tables",
      40: "p1-4-forms-and-inputs",
      50: "p1-5-semantics-and-seo",
      100: "p1-6-html5-tags"
    };

    const chapterToMark = unitCompletionMap[lessonId];
    if (chapterToMark) {
      markCompleted(chapterToMark);
      // Trigger user rating prompt
      window.dispatchEvent(new CustomEvent("trigger-rate-prompt"));
    }
  };

  // ── Inline backtick `code` tokeniser — renders clean copyable code elements
  const renderInlineCode = (text: string): React.ReactNode[] => {
    const parts = text.split(/(`[^`]+`)/);
    return parts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        const token = part.slice(1, -1);
        return <CopyableCommand key={i} command={token} inline={true} />;
      }
      // Also auto-detect bare HTML tags like <div>, <p> etc in plain text
      const tagRegex = /(<\/?[a-zA-Z][a-zA-Z0-9]*\s*\/?>)/g;
      const subParts = part.split(tagRegex);
      return subParts.map((sub, j) => {
        if (tagRegex.test(sub) || (sub.startsWith('<') && sub.endsWith('>'))) {
          return <CopyableCommand key={`${i}-${j}`} command={sub.trim()} inline={true} />;
        }
        return <React.Fragment key={`${i}-${j}`}>{sub}</React.Fragment>;
      });
    });
  };

function getTerminalOutput(code: string): string {
  const trimmed = code.trim();

  if (trimmed.includes("ping") && trimmed.includes("tracert")) {
    return `Pinging nextsem.online [199.36.158.100] with 32 bytes of data:
Reply from 199.36.158.100: bytes=32 time=18ms TTL=58
Reply from 199.36.158.100: bytes=32 time=16ms TTL=58
Reply from 199.36.158.100: bytes=32 time=17ms TTL=58
Reply from 199.36.158.100: bytes=32 time=19ms TTL=58

Ping statistics for 199.36.158.100:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 16ms, Maximum = 19ms, Average = 17ms

C:\\Users\\Student> tracert nextsem.online
Tracing route to nextsem.online [199.36.158.100] over a maximum of 30 hops:
  1     2 ms     1 ms     1 ms  192.168.29.1 [Local Gateway Router]
  2     8 ms     7 ms     7 ms  10.142.0.1 [ISP Metro Fiber Node]
  3    14 ms    13 ms    13 ms  182.79.141.65 [Submarine Cable Gateway]
  4    17 ms    16 ms    17 ms  199.36.158.100 [Nextsem Academy Cloud Edge]

Trace complete. 4 physical hops resolved in 17 milliseconds!`;
  }

  if (trimmed.startsWith("ping")) {
    const hostMatch = trimmed.match(/^ping\s+([^\s]+)/i);
    const host = hostMatch ? hostMatch[1] : "nextsem.online";
    return `Pinging ${host} [199.36.158.100] with 32 bytes of data:
Reply from 199.36.158.100: bytes=32 time=18ms TTL=58
Reply from 199.36.158.100: bytes=32 time=16ms TTL=58
Reply from 199.36.158.100: bytes=32 time=17ms TTL=58
Reply from 199.36.158.100: bytes=32 time=19ms TTL=58

Ping statistics for ${host}:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 16ms, Maximum = 19ms, Average = 17ms`;
  }

  if (trimmed.startsWith("tracert")) {
    const hostMatch = trimmed.match(/^tracert\s+([^\s]+)/i);
    const host = hostMatch ? hostMatch[1] : "nextsem.online";
    return `Tracing route to ${host} [199.36.158.100] over a maximum of 30 hops:
  1     2 ms     1 ms     1 ms  192.168.29.1 [Local Gateway Router]
  2     8 ms     7 ms     7 ms  10.142.0.1 [ISP Metro Fiber Node]
  3    14 ms    13 ms    13 ms  182.79.141.65 [Submarine Cable Gateway]
  4    17 ms    16 ms    17 ms  199.36.158.100 [Nextsem Academy Cloud Edge]

Trace complete. 4 physical hops resolved in 17 milliseconds!`;
  }

  if (trimmed.startsWith("curl")) {
    return `HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 58129
Cache-Control: max-age=3600
Content-Type: text/html; charset=utf-8
Etag: "4b2a58c512e5c9776fe87f1ba1c4b5268cc3833e7d1374d604ea55ccc45600ec"
Strict-Transport-Security: max-age=31556926
Accept-Ranges: bytes
Date: Sun, 13 Sep 2026 15:29:27 GMT
X-Cache: HIT`;
  }

  if (trimmed.startsWith("ipconfig")) {
    return `Windows IP Configuration

Ethernet adapter Ethernet:
   IPv4 Address. . . . . . . . . . . : 192.168.29.170
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.29.1`;
  }
  if (trimmed.startsWith("winget")) {
    return `Found Visual Studio Code [Microsoft.VisualStudioCode] Version 1.93.0
This application is licensed to you by its owner.
Downloading https://update.code.visualstudio.com/1.93.0/win32-x64-user/stable...
  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  98.4 MB / 98.4 MB
Successfully verified installer hash
Starting package install...
Successfully installed Visual Studio Code!`;
  }

  if (trimmed.startsWith("code --version") || trimmed.startsWith("code -v")) {
    return `1.93.0
38c31bc77e0dd6ae88a4e9cc93428cc27a56ba40
x64`;
  }

  if (trimmed.startsWith("code --install-extension")) {
    const parts = trimmed.split(/\s+/);
    const ext = parts[2] || "ritwickdey.LiveServer";
    return `Installing extensions...
Installing extension '${ext}'...
Extension '${ext}' v5.7.9 was successfully installed.`;
  }

  if (trimmed.startsWith("code .")) {
    return `C:\\Users\\Student\\my-first-website> code .
Opening current directory in Visual Studio Code... Workspace loaded!`;
  }

  return `C:\\Users\\Student> ${trimmed.split('\n')[0]}
Execution successful! Output verified on Windows 11 Pro x86_64.`;
}

// Professional Windows 11 VS Code Code Card / Terminal Box
function VsCodeEditorCard({ code, blockKey }: { code: string; blockKey: string }) {
  const [copied, setCopied] = useState(false);

  const trimmed = code.trim();
  const isTerminal =
    trimmed.startsWith("ping") ||
    trimmed.startsWith("tracert") ||
    trimmed.startsWith("ipconfig") ||
    trimmed.startsWith("nslookup") ||
    trimmed.startsWith("curl") ||
    trimmed.startsWith("git ") ||
    trimmed.startsWith("npm ") ||
    trimmed.startsWith("npx ") ||
    trimmed.startsWith("node ") ||
    trimmed.startsWith("cd ") ||
    trimmed.startsWith("dir") ||
    trimmed.startsWith("cls") ||
    trimmed.startsWith("mkdir") ||
    trimmed.startsWith("del ") ||
    trimmed.startsWith("type ") ||
    trimmed.startsWith("winget") ||
    trimmed.startsWith("pacman") ||
    trimmed.startsWith("g++") ||
    trimmed.startsWith("code .") || trimmed.startsWith("code ") || trimmed.startsWith("code");

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const lines = code.trim().split("\n");

  if (isTerminal) {
    return (
      <div key={blockKey} className="my-7 rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0c0c0c] shadow-2xl transition-all duration-300">
        {/* Monochromatic Windows 11 Terminal Header */}
        <div className="bg-[#1f1f1f] px-3.5 sm:px-5 py-2.5 flex items-center justify-between border-b border-[#2d2d2d] select-none">
          <div className="flex items-center gap-2 font-mono text-xs text-white">
            <span className="text-[#04AA6D] font-bold text-sm">⊞</span>
            <span className="font-bold truncate">Administrator: Windows 11 Command Prompt (cmd.exe)</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2d2d] hover:bg-[#383838] border border-slate-700 rounded-lg text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
              title="Copy Command to Clipboard"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-[#04AA6D] stroke-[3]" />
                  <span className="text-[#04AA6D] font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} className="text-slate-400" />
                  <span className="hidden sm:inline">Copy Command</span>
                  <span className="sm:hidden">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Terminal Input Box */}
        <div className="p-4 sm:p-5 bg-[#0c0c0c] font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
          <div className="space-y-1.5">
            {lines.map((line, idx) => (
              <div key={idx} className="flex items-start gap-2 text-slate-100">
                <span className="text-[#04AA6D] font-bold select-none">&gt;</span>
                <span className="font-mono font-medium text-white">{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Windows 11 Terminal Output Box Directly Below */}
        <div className="p-4 sm:p-5 bg-[#080808] border-t border-slate-800 font-mono text-xs leading-relaxed">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2.5">
            <span className="flex items-center gap-2 text-[#04AA6D]">
              <span>⊞</span>
              <span>Windows 11 Execution Output</span>
            </span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold border border-emerald-500/20">
              Real PC Match
            </span>
          </div>
          <p className="text-slate-500">Microsoft Windows [Version 10.0.22631.3007] (Windows 11 Pro x86_64)</p>
          <p className="text-slate-500 mb-2">(c) Microsoft Corporation. All rights reserved.</p>
          <div className="text-emerald-400 font-mono whitespace-pre-wrap leading-relaxed">
            {getTerminalOutput(code)}
          </div>
        </div>
      </div>
    );
  }

  const renderSyntaxLine = (line: string) => {
    if (!line) return <span>&nbsp;</span>;

    // Comments <!-- ... -->
    const commentMatch = line.match(/^(\s*)(<!--.*?-->)(\s*)$/);
    if (commentMatch) {
      return (
        <span>
          {commentMatch[1]}
          <span className="text-[#6a9955] italic">{commentMatch[2]}</span>
          {commentMatch[3]}
        </span>
      );
    }

    // Tokenize HTML tags, doctype, attributes, and text
    const tagRegex = /(<!DOCTYPE\s+html>|<\/?[a-zA-Z0-9\-]+(?:(?:\s+[\w\-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*\/?>)/gi;
    const parts = line.split(tagRegex);

    return parts.map((part, pIdx) => {
      if (!part) return null;

      // DOCTYPE
      if (/^<!DOCTYPE\s+html>/i.test(part)) {
        return (
          <span key={pIdx}>
            <span className="text-[#808080]">&lt;!</span>
            <span className="text-[#569cd6] font-bold">DOCTYPE</span>
            <span className="text-[#9cdcfe]"> html</span>
            <span className="text-[#808080]">&gt;</span>
          </span>
        );
      }

      // HTML Tag
      if (part.startsWith("<") && part.endsWith(">")) {
        const isClosing = part.startsWith("</");
        const inner = isClosing ? part.slice(2, -1) : part.slice(1, -1);
        const tagMatch = inner.match(/^([\w\-]+)([\s\S]*)$/);

        if (!tagMatch) {
          return <span key={pIdx} className="text-[#4ec9b0]">{part}</span>;
        }

        const tagName = tagMatch[1];
        const attrString = tagMatch[2];

        const attrRegex = /([\w\-]+)(?:=("[^"]*"|'[^']*'|[^\s"'>]+))?/g;
        const attrElements: React.ReactNode[] = [];
        let lastIndex = 0;
        let match;

        while ((match = attrRegex.exec(attrString)) !== null) {
          if (match.index > lastIndex) {
            attrElements.push(
              <span key={`ws-${lastIndex}`}>
                {attrString.slice(lastIndex, match.index)}
              </span>
            );
          }

          const attrName = match[1];
          const attrVal = match[2];

          attrElements.push(
            <span key={`attr-${match.index}`} className="text-[#9cdcfe]">
              {attrName}
            </span>
          );

          if (attrVal) {
            attrElements.push(
              <span key={`eq-${match.index}`} className="text-[#d4d4d4]">=</span>
            );
            attrElements.push(
              <span key={`val-${match.index}`} className="text-[#ce9178]">
                {attrVal}
              </span>
            );
          }

          lastIndex = attrRegex.lastIndex;
        }

        if (lastIndex < attrString.length) {
          attrElements.push(
            <span key={`tail-${lastIndex}`}>
              {attrString.slice(lastIndex)}
            </span>
          );
        }

        return (
          <span key={pIdx}>
            <span className="text-[#808080]">{isClosing ? "</" : "<"}</span>
            <span className="text-[#569cd6] font-semibold">{tagName}</span>
            {attrElements}
            <span className="text-[#808080]">&gt;</span>
          </span>
        );
      }

      // HTTP Headers
      if (part.startsWith("Host:") || part.startsWith("GET ") || part.startsWith("HTTP/1.1")) {
        return <span key={pIdx} className="text-[#9cdcfe] font-medium">{part}</span>;
      }

      // Inner text
      return (
        <span key={pIdx} className="text-[#d4d4d4] font-normal">
          {part}
        </span>
      );
    });
  };

  return (
    <div key={blockKey} className="my-6 rounded-2xl overflow-hidden border border-slate-700/70 bg-[#1e1e1e] shadow-xl transition-all duration-300">
      {/* Example Header */}
      <div className="bg-[#252526] px-4 sm:px-5 py-2.5 flex items-center justify-between border-b border-slate-800 select-none">
        <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wide">
          Example
        </span>

        <div className="flex items-center gap-2 shrink-0">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2d2d] hover:bg-[#383838] border border-slate-700 rounded-lg text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
            title="Copy Code to Clipboard"
          >
            {copied ? (
              <>
                <Check size={13} className="text-[#04AA6D] stroke-[3]" />
                <span className="text-[#04AA6D] font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={13} className="text-slate-400" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>

          {/* Try it Yourself CTA */}
          <Link
            href={`/htmldemo?code=${encodeURIComponent(code)}`}
            target="_blank"
            onClick={() => {
              try {
                sessionStorage.setItem("nextsem_splash_shown", "true");
              } catch {}
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-extrabold rounded-lg shadow-md shadow-[#04AA6D]/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Try it Yourself »</span>
          </Link>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 sm:p-5 bg-[#1e1e1e] font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
        <div className="space-y-1">
          {lines.map((line, idx) => (
            <div key={idx} className="flex items-start gap-2.5 group -mx-2 px-2 py-0.5 rounded transition-colors">
              {/* Line Number */}
              <span className="select-none text-slate-600 font-mono text-xs sm:text-sm text-right w-6 sm:w-8 shrink-0 border-r border-slate-800 pr-2 select-none">
                {idx + 1}
              </span>
              {/* Syntax Highlighted Code Line */}
              <div className="flex-1 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words min-w-0 text-left leading-relaxed">
                {renderSyntaxLine(line)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  // Robust Markdown-to-JSX parser with Nextsem Academy Typography and complete multi-line code buffering
  const renderContentText = (text: string) => {
    if (!text) return null;

    const blocks: React.ReactNode[] = [];
    const lines = text.split(/\r?\n/);
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        blocks.push(<div key={`spacer-${i}`} className="h-3" />);
        i++;
        continue;
      }

      // 1. Fenced Code Blocks (``` ... ```)
      if (trimmed.startsWith("```")) {
        const codeLines: string[] = [];
        i++; // skip opening ```
        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        if (i < lines.length && lines[i].trim().startsWith("```")) {
          i++; // skip closing ```
        }
        const fullCode = codeLines.join("\n");
        if (fullCode.trim()) {
          blocks.push(<VsCodeEditorCard code={fullCode} blockKey={`code-fenced-${i}`} key={`code-fenced-${i}`} />);
        }
        continue;
      }

      // 2. Raw Multi-line HTML Blocks (starts with <!DOCTYPE html> or <html> until </html>)
      if (trimmed.startsWith("<!DOCTYPE html>") || trimmed.startsWith("<html>")) {
        const htmlLines: string[] = [];
        while (i < lines.length) {
          htmlLines.push(lines[i]);
          if (lines[i].trim().includes("</html>")) {
            i++;
            break;
          }
          i++;
        }
        const fullCode = htmlLines.join("\n");
        if (fullCode.trim()) {
          blocks.push(<VsCodeEditorCard code={fullCode} blockKey={`code-html-${i}`} key={`code-html-${i}`} />);
        }
        continue;
      }

      // 3. HTTP Request / Response blocks (starts with GET / HTTP/ or Host:)
      if (trimmed.startsWith("GET ") || trimmed.startsWith("POST ") || trimmed.startsWith("HTTP/1.1 ") || trimmed.startsWith("Host:")) {
        const httpLines: string[] = [];
        while (i < lines.length && lines[i].trim() !== "" && !lines[i].trim().startsWith("##") && !lines[i].trim().startsWith("---")) {
          httpLines.push(lines[i]);
          i++;
        }
        const fullCode = httpLines.join("\n");
        if (fullCode.trim()) {
          blocks.push(<VsCodeEditorCard code={fullCode} blockKey={`code-http-${i}`} key={`code-http-${i}`} />);
        }
        continue;
      }

      // 4. Headings
      if (trimmed.startsWith("## ")) {
        blocks.push(
          <h2 key={`h2-${i}`} className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4 border-b border-slate-800/60 pb-2.5 tracking-tight">
            {trimmed.replace(/^##\s*/, "").replace(/^[#\s]+/, "").trim()}
          </h2>
        );
        i++;
        continue;
      }

      if (trimmed.startsWith("###")) {
        blocks.push(
          <h3 key={`h3-${i}`} className="text-lg sm:text-xl font-semibold text-white mt-6 mb-3 tracking-tight">
            {trimmed.replace(/^###\s*/, "").replace(/^[#\s]+/, "").trim()}
          </h3>
        );
        i++;
        continue;
      }

      // 5. Horizontal rule
      if (trimmed === "---") {
        blocks.push(<hr key={`hr-${i}`} className="my-8 border-slate-800" />);
        i++;
        continue;
      }

      // 6. Markdown Images: ![caption](/path/to/img) — Direct clean insertion with zero outer border boxes
      const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imgMatch) {
        const caption = imgMatch[1];
        const imgSrc = imgMatch[2];
        blocks.push(
          <div key={`img-${i}`} className="my-6 w-full text-center">
            <img
              src={imgSrc}
              alt={caption || "Windows 11 Visual Studio Code Step-by-Step Screenshot"}
              className="w-full h-auto max-h-[580px] object-contain rounded-xl mx-auto block shadow-2xl"
              loading="lazy"
            />
          </div>
        );
        i++;
        continue;
      }

      // 7. Blockquotes
      if (trimmed.startsWith("> ")) {
        blocks.push(
          <div key={`quote-${i}`} className="my-4 p-4 rounded-xl bg-emerald-500/10 border-l-4 border-[#04AA6D] text-[15px] sm:text-[16px] text-slate-200 leading-[1.75] font-medium">
            {trimmed.replace(/^>\s*/, "")}
          </div>
        );
        i++;
        continue;
      }

      // 8. Bullet & Numbered Lists
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        blocks.push(
          <li key={`li-${i}`} className="ml-6 list-disc text-[15px] sm:text-[16px] text-slate-200 my-2 leading-[1.75]">
            {trimmed.replace(/^[*\-]\s+/, "").replace(/\*\*(.*?)\*\*/g, "$1").trim()}
          </li>
        );
        i++;
        continue;
      }

      if (/^\d+\.\s+/.test(trimmed)) {
        blocks.push(
          <li key={`li-num-${i}`} className="ml-6 list-decimal text-[15px] sm:text-[16px] text-slate-200 my-2 leading-[1.75]">
            {trimmed.replace(/^\d+\.\s+/, "").replace(/\*\*(.*?)\*\*/g, "$1").trim()}
          </li>
        );
        i++;
        continue;
      }

      // 9. Standard Paragraph (with bold and inline code)
      const boldRegex = /\*\*(.*?)\*\*/g;
      if (boldRegex.test(trimmed) || trimmed.includes('`') || trimmed.includes('<')) {
        const parts = trimmed.split(boldRegex);
        blocks.push(
          <p key={`p-${i}`} className="text-[15.5px] sm:text-[16.5px] text-slate-200 leading-[1.75] my-3 font-normal">
            {parts.map((part, pIdx) =>
              pIdx % 2 === 1
                ? <strong key={pIdx} className="text-white font-bold">{part}</strong>
                : <React.Fragment key={pIdx}>{renderInlineCode(part)}</React.Fragment>
            )}
          </p>
        );
      } else {
        blocks.push(
          <p key={`p-${i}`} className="text-[15.5px] sm:text-[16.5px] text-slate-200 leading-[1.75] my-3 font-normal">
            {renderInlineCode(trimmed)}
          </p>
        );
      }
      i++;
    }

    return blocks;
  };

  const rawContent = lesson[selectedLang]?.[selectedLevel] || lesson.english.pro || lesson.english.kid;
  const currentContent = rawContent;

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-6 pb-20 md:pb-8">
      {/* Top Banner Ad */}
      <AdSenseBanner />

      {/* Clean Navigation Header */}
      <div className="pb-4 border-b border-slate-800/80 space-y-3 pt-1">
        {/* Row 1: Breadcrumb + Action Controls */}
        <div className="flex items-center justify-between gap-3">
          {/* Left: Clean Breadcrumb */}
          <div className="flex items-center gap-2 overflow-hidden">
            <Link
              href="/html"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#09101f] border border-slate-800 hover:border-[#04AA6D]/50 text-slate-300 hover:text-white text-xs font-bold transition-all shadow-sm group shrink-0"
              title="Return to HTML Dashboard"
            >
              <BrandLogoIcon size={18} roundedClass="rounded-md" />
              <span className="text-[#04AA6D] font-mono font-bold">HTML</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300 font-mono text-[11px]">Lesson {lesson.id}</span>
            </Link>
          </div>

          {/* Right: Search, Previous, Bookmark, Next controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Search Button */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open_search", { detail: { query: "" } }))}
              className="px-3 py-1.5 bg-[#09101f] hover:bg-[#15203b] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Search Lessons (Press /)"
            >
              <Search size={14} className="text-[#04AA6D]" />
              <span className="hidden sm:inline">Search</span>
            </button>

            {prevLesson ? (
              <Link
                href={prevLesson.id === 1 ? "/html" : `/html/${prevLesson.slug}`}
                className="px-3 py-1.5 bg-[#09101f] hover:bg-[#15203b] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-sm"
                title="Previous Lesson"
              >
                <ChevronLeft size={16} className="stroke-[2.5]" />
                <span className="hidden sm:inline">Prev</span>
              </Link>
            ) : null}

            <button
              onClick={toggleBookmark}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-sm ${
                isBookmarked
                  ? "bg-[#04AA6D]/15 border-[#04AA6D]/50 text-[#04AA6D]"
                  : "bg-[#09101f] border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
              }`}
              title={isBookmarked ? "Remove Bookmark" : "Bookmark Lesson"}
            >
              <Bookmark size={15} className={`stroke-[2.5] ${isBookmarked ? "fill-[#04AA6D] text-[#04AA6D]" : ""}`} />
              <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Bookmark"}</span>
            </button>

            {nextLesson && (
              <Link
                href={`/html/${nextLesson.slug}`}
                className="px-3.5 py-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-xl text-xs font-extrabold transition-all flex items-center gap-1 shadow-md shadow-[#04AA6D]/20 cursor-pointer"
                title="Next Lesson"
              >
                <span>Next</span>
                <ChevronRight size={16} className="stroke-[2.5]" />
              </Link>
            )}
          </div>
        </div>

        {/* Row 2: Clean Lesson Heading */}
        <div className="text-left pt-1 space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {lesson.title.replace(/\s*\(Pure HTML\)/gi, '')}
          </h1>
          <div className="flex items-center gap-2.5 text-xs text-slate-400">
            <Link href="/about" className="flex items-center gap-2 hover:opacity-80 transition-opacity" title="View Er. Manoj Kumar Profile">
              <img
                src="/manoj-kumar.jpg"
                alt="Er. Manoj Kumar — Author"
                className="w-5 h-5 rounded-full object-cover object-top border border-[#04AA6D]"
              />
              <span className="font-bold text-slate-200 hover:text-[#04AA6D] transition-colors">Er. Manoj Kumar</span>
            </Link>
            <span>•</span>
            <span>Nextsem Academy Curriculum</span>
          </div>
        </div>
      </div>

      {/* ── STAGE 0 BRIDGE CARD ON HTML LESSON 0 & 1 ── */}
      {(lesson.id === 0 || lesson.id === 1) && (
        <div className="bg-[#141824] border border-[#04AA6D]/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg text-left">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#04AA6D]/20 border border-[#04AA6D] flex items-center justify-center text-[#04AA6D] shrink-0 mt-0.5">
              <Terminal size={20} />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-black uppercase tracking-wider text-[#04AA6D]">
                Recommended First Step • Stage 0
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">
                Need to create your website folder on 🪟 Windows 11?
              </h4>
              <p className="text-xs text-white font-normal leading-relaxed">
                Take the 15-minute Terminal Fast-Track to master the 5 sacred commands (<span className="font-mono">mkdir</span>, <span className="font-mono">cd</span>, <span className="font-mono">dir</span>, <span className="font-mono">cls</span>, <span className="font-mono">code .</span>) before writing code.
              </p>
            </div>
          </div>
          <Link
            href="/terminal-fast-track"
            className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <span>Run 15-Min Fast-Track »</span>
          </Link>
        </div>
      )}

      {/* Main Content Area */}
      <div className="bg-[#10141f] border border-slate-800 p-5 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
        <article className="prose prose-invert max-w-none text-left">
          {renderContentText(currentContent)}
        </article>
      </div>

      {/* Bottom Desktop Navigation Row */}
      <div className="hidden md:flex items-center justify-between gap-4 border-t border-slate-800/80 pt-6 mt-8">
        {prevLesson ? (
          <Link
            href={prevLesson.id === 1 ? "/html" : `/html/${prevLesson.slug}`}
            className="px-5 py-2.5 bg-[#141b30] hover:bg-[#1b2542] border border-slate-700 hover:border-[#04AA6D]/50 text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 shadow-md cursor-pointer group"
          >
            <ChevronLeft size={16} className="stroke-[3] text-[#04AA6D] group-hover:-translate-x-1 transition-transform" />
            <span>Previous Lesson</span>
          </Link>
        ) : (
          <div className="px-5 py-2.5 bg-slate-900/40 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-slate-850 cursor-not-allowed select-none">
            <ChevronLeft size={16} />
            <span>Previous Lesson</span>
          </div>
        )}

        {/* Center: Subject Roadmap / Dashboard Button */}
        <Link
          href="/html"
          className="px-6 py-2.5 bg-[#09101f] hover:bg-[#111a33] border-2 border-[#04AA6D] text-white hover:text-[#04AA6D] rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#04AA6D]/15 cursor-pointer"
        >
          <BrandLogoIcon size={16} roundedClass="rounded-xs" />
          <span>📁 View HTML Developer Roadmap</span>
        </Link>

        {nextLesson ? (
          <Link
            href={`/html/${nextLesson.slug}`}
            className="px-6 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#04AA6D]/25 cursor-pointer group"
          >
            <span>Next Lesson</span>
            <ChevronRight size={16} className="stroke-[3] group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div className="px-5 py-2.5 bg-slate-900/40 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-slate-850 cursor-not-allowed select-none">
            <span>Next Lesson</span>
            <ChevronRight size={16} />
          </div>
        )}
      </div>

      {/* Bottom Ad Banner */}
      <AdSenseBanner />
    </div>
  );
}
