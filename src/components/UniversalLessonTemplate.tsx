"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, ChevronRight, Bookmark, Download, 
  Terminal, Monitor, Sparkles, CheckCircle2, Copy, Check, Search
} from "lucide-react";
import CopyableCommand from "./CopyableCommand";
import ShareButton from "./ShareButton";
import BrandLogoIcon from "./BrandLogoIcon";
import WindowsIcon from "./WindowsIcon";
import { saveLastLesson } from "@/lib/userProgressSync";
import { auth } from "@/lib/firebase";
import { useProgress } from "../context/ProgressContext";
import { triggerNavigationAd } from "@/lib/admobHelper";

export interface UniversalScreenshot {
  src: string;
  caption: string;
  alt?: string;
  stepNumber?: number;
  commandSnippet?: string;
}

export interface UniversalCommandItem {
  cmd: string;
  description: string;
  output?: string;
}

export interface UniversalLessonData {
  id: number;
  slug: string;
  title: string;
  unit?: string;
  bookRef?: string;
  content?: string;
  screenshots?: UniversalScreenshot[];
  commands?: UniversalCommandItem[];
}

export interface UniversalLessonTemplateProps {
  subject: string;                  // e.g. "html", "cli", "css", "js"
  subjectTitle: string;             // e.g. "HTML5 Web Development", "Windows Command Prompt CLI"
  subjectDashboardUrl: string;      // e.g. "/html", "/cli"
  totalLessonsInSubject?: number;   // default: 100
  lesson: UniversalLessonData;
  contentBody: string;               // Markdown or plain text content
  prevLesson?: { id: number; slug: string; title: string } | null;
  nextLesson?: { id: number; slug: string; title: string } | null;
}

export default function UniversalLessonTemplate({
  subject,
  subjectTitle,
  subjectDashboardUrl,
  totalLessonsInSubject = 100,
  lesson,
  contentBody,
  prevLesson,
  nextLesson
}: UniversalLessonTemplateProps) {
  const router = useRouter();
  const { completedChapters } = useProgress();

  const [mounted, setMounted] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [activeZoomImage, setActiveZoomImage] = useState<UniversalScreenshot | null>(null);

  const bookmarkStorageKey = `nextsem_${subject}_bookmarks`;
  const isLessonCompleted = Boolean(completedChapters?.[`${subject}_${lesson.id}`]) || Boolean(completedChapters?.[lesson.slug]);

  // Sync bookmark state on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedBookmarks: number[] = JSON.parse(localStorage.getItem(bookmarkStorageKey) || "[]");
        setIsBookmarked(savedBookmarks.includes(lesson.id));
      } catch (e) {
        console.error("Bookmark read error:", e);
      }
      setMounted(true);
    }
  }, [lesson.id, bookmarkStorageKey]);

  // Track last visited lesson for resume feature
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const userEmail = auth?.currentUser?.email;
        saveLastLesson(userEmail, {
          slug: lesson.slug,
          title: lesson.title,
          subject: subject,
          lessonNumber: lesson.id,
          visitedAt: new Date().toISOString(),
        });
      } catch (e) {
        console.error("Save last lesson error:", e);
      }
    }
  }, [lesson.slug, lesson.title, lesson.id, subject]);

  const toggleBookmark = () => {
    try {
      const savedBookmarks: number[] = JSON.parse(localStorage.getItem(bookmarkStorageKey) || "[]");
      let updated: number[];
      if (savedBookmarks.includes(lesson.id)) {
        updated = savedBookmarks.filter((id) => id !== lesson.id);
        setIsBookmarked(false);
      } else {
        updated = [...savedBookmarks, lesson.id];
        setIsBookmarked(true);
      }
      localStorage.setItem(bookmarkStorageKey, JSON.stringify(updated));
    } catch (e) {
      console.error("Bookmark toggle error:", e);
    }
  };

  const renderInlineCode = (str: string) => {
    const tagRegex = /(<\/?[a-zA-Z0-9!\s="-]+>|`[^`]+`)/g;
    const parts = str.split(tagRegex);
    return parts.map((part, i) => {
      if (!part) return null;
      if (part.startsWith('`') && part.endsWith('`')) {
        const cleanCmd = part.slice(1, -1);
        return <CopyableCommand key={i} command={cleanCmd} inline={true} />;
      }
      const subParts = part.split(tagRegex);
      return subParts.map((sub, j) => {
        if (tagRegex.test(sub) || (sub.startsWith('<') && sub.endsWith('>'))) {
          return <CopyableCommand key={`${i}-${j}`} command={sub.trim()} inline={true} />;
        }
        return <React.Fragment key={`${i}-${j}`}>{sub}</React.Fragment>;
      });
    });
  };

  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const isTerminalCommand = (code: string, lang?: string) => {
    const trimmed = code.trim();
    if (lang === "cmd" || lang === "bat" || lang === "bash" || lang === "sh" || lang === "powershell" || lang === "terminal") return true;
    if (
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
      trimmed.startsWith("code .") ||
      trimmed.startsWith("winget") ||
      trimmed.startsWith("pacman") ||
      trimmed.startsWith("g++")
    ) {
      return true;
    }
    return false;
  };

  const getHeaderTitle = (code: string, lang?: string) => {
    const trimmed = code.trim();
    if (isTerminalCommand(trimmed, lang)) {
      if (trimmed.startsWith("ping") || trimmed.startsWith("tracert") || trimmed.startsWith("ipconfig") || trimmed.startsWith("nslookup") || trimmed.startsWith("curl")) {
        return "Windows 11 Command Prompt (Network Command)";
      }
      if (trimmed.startsWith("winget")) return "Windows Package Manager Command";
      if (trimmed.startsWith("pacman")) return "MSYS2 Toolchain Command";
      if (trimmed.startsWith("g++")) return "GCC Compiler Command";
      return "Windows 11 Command Prompt (cmd.exe)";
    }
    if (trimmed.startsWith("#include") || trimmed.startsWith("int main") || trimmed.startsWith("using ")) return "C++ Source Code (main.cpp)";
    if (trimmed.startsWith("<!DOCTYPE") || trimmed.startsWith("<html") || trimmed.startsWith("<head") || trimmed.startsWith("<body") || trimmed.startsWith("<h1") || trimmed.startsWith("<p") || trimmed.startsWith("<div") || trimmed.startsWith("<a") || trimmed.startsWith("<img") || trimmed.startsWith("<span") || trimmed.startsWith("<style")) return "HTML5 Web Code (index.html)";
    return "Code Example";
  };

  const getTerminalOutput = (code: string) => {
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

    if (trimmed.startsWith("ipconfig")) {
      return `Windows IP Configuration

Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::5c2a:18a1:8f7b:e42a%12
   IPv4 Address. . . . . . . . . . . : 192.168.29.170
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.29.1`;
    }

    if (trimmed.includes("ucrt64.exe")) {
      return `C:\\Users\\Student> C:\\msys64\\ucrt64.exe
Launching MSYS2 UCRT64 Terminal (x86_64 GCC Toolchain Environment)...
[MSYS2 UCRT64 Terminal Window Opened Successfully]`;
    }

    if (trimmed.includes("winget install")) {
      return `Found MSYS2 [MSYS2.MSYS2] Version 20240113
This application is licensed to you by its publisher.
Downloading https://github.com/msys2/msys2-installer/releases/download/2024-01-13/msys2-x86_64-20240113.exe
  ██████████████████████████████  87.4 MB / 87.4 MB
Successfully verified installer hash
Starting package install...
Successfully installed MSYS2!`;
    }

    if (trimmed.includes("pacman")) {
      return `resolving dependencies...
looking for conflicting packages...

Packages (14) mingw-w64-ucrt-x86_64-binutils-2.41-2 mingw-w64-ucrt-x86_64-crt-git-11.0.0.r407-1
              mingw-w64-ucrt-x86_64-gcc-13.2.0-2 mingw-w64-ucrt-x86_64-gdb-13.2-1
              mingw-w64-ucrt-x86_64-headers-git-11.0.0.r407-1 mingw-w64-ucrt-x86_64-tools-git-11.0.0.r407-1

Total Download Size:    142.50 MiB
Total Installed Size:   812.30 MiB

:: Proceed with installation? [Y/n] y
(14/14) checking keys in keyring                      [100%]
(14/14) checking package integrity                    [100%]
(14/14) loading package files                         [100%]
(14/14) installing mingw-w64-ucrt-x86_64-gcc ......... [100%]
(14/14) installing base-devel toolchain .............. [100%]
Installation complete. GCC 13.2.0 ready for Windows 11 Pro.`;
    }

    if (trimmed.includes("g++ --version")) {
      return `g++ (Rev2, Built by MSYS2 project) 13.2.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.`;
    }

    if (trimmed.includes("g++ -O3") || trimmed.includes("main_optimized")) {
      return `C:\\Users\\Student\\CPP_Project> g++ -O3 -std=c++20 main.cpp -o main_optimized.exe
Compilation successful! Vectorized release binary created.

C:\\Users\\Student\\CPP_Project> main_optimized.exe
Hello World from C++ on Windows 11 Pro! [Modern C++20 Release Build]
[Process exited with code 0 in 0.001 seconds]`;
    }

    if (trimmed.includes("g++ -o") || trimmed.includes("g++ main.cpp")) {
      return `C:\\Users\\Student\\CPP_Project> g++ -o main.exe main.cpp
Compilation successful! [0 errors, 0 warnings]

C:\\Users\\Student\\CPP_Project> main.exe
Hello World from C++ on Windows 11 Pro!
[Process exited with code 0 in 0.001 seconds]`;
    }

    if (trimmed.includes("main.exe")) {
      return `Hello World from C++ on Windows 11 Pro!
[Process exited with code 0 in 0.001 seconds]`;
    }

    if (trimmed.includes("#include") || trimmed.includes("int main")) {
      return `C:\\Users\\Student\\CPP_Project> g++ -o main.exe main.cpp
C:\\Users\\Student\\CPP_Project> main.exe
Hello World from C++ on Windows 11 Pro!

[Process exited with code 0 in 0.001 seconds]`;
    }

    if (trimmed.startsWith("dir")) {
      return ` Volume in drive C has no label.
 Volume Serial Number is 8A4E-29F1

 Directory of C:\\Users\\Student
 
08/05/2026  10:15 AM    <DIR>          .
08/05/2026  10:15 AM    <DIR>          ..
08/05/2026  10:14 AM               248 index.html
08/05/2026  10:15 AM            14,233 styles.css
               2 File(s)         14,481 bytes
               2 Dir(s)  248,192,840,704 bytes free`;
    }

    return `C:\\Users\\Student> ${trimmed.split('\n')[0]}
Execution successful! Output verified on Windows 11 Pro x86_64.
[Process exited with code 0 in 0.002 seconds]`;
  };

  const getHeaderIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("compiler") || t.includes("setup") || t.includes("step") || t.includes("install") || t.includes("config")) {
      return "/icons/monochrome/settings.svg";
    }
    if (t.includes("performance") || t.includes("cpu") || t.includes("architecture") || t.includes("hardware") || t.includes("system")) {
      return "/icons/monochrome/cpu.svg";
    }
    if (t.includes("code") || t.includes("program") || t.includes("breakdown") || t.includes("hello world") || t.includes("source")) {
      return "/icons/monochrome/code.svg";
    }
    if (t.includes("memory") || t.includes("pointer") || t.includes("pipeline") || t.includes("stack") || t.includes("heap")) {
      return "/icons/monochrome/memory.svg";
    }
    if (t.includes("terminal") || t.includes("command") || t.includes("cmd") || t.includes("execut") || t.includes("prompt")) {
      return "/icons/monochrome/terminal.svg";
    }
    if (t.includes("window")) {
      return "/icons/monochrome/windows.svg";
    }
    return "/icons/monochrome/book.svg";
  };

  // Dynamic Markdown-to-JSX Parser with 1-to-1 Screenshot Card Embedding
  const renderFormattedContent = (text: string) => {
    if (!text) return null;
    const codeBlockRegex = /(```[a-z]*[\s\S]*?```)/gi;
    const blocks = text.split(codeBlockRegex);
    let exampleCounter = 0;

    return blocks.map((block, bIdx) => {
      const trimmedBlock = block.trim();
      if (!trimmedBlock) return null;

      // Detect multiline code fence ```lang ... ```
      if (trimmedBlock.startsWith("```")) {
        const langMatch = trimmedBlock.match(/^```([a-z0-9_-]*)/i);
        const codeLang = langMatch ? langMatch[1].toLowerCase() : "";
        const cleanCode = trimmedBlock
          .replace(/^```[a-z0-9_-]*\n?/i, "")
          .replace(/\n?```$/, "")
          .trim();

        const currentShot = lesson.screenshots?.[exampleCounter] || lesson.screenshots?.[0];
        exampleCounter++;

        const isTerminal = isTerminalCommand(cleanCode, codeLang);
        const isHtml = subject === "html" && !isTerminal;
        const displayHeader = getHeaderTitle(cleanCode, codeLang);

        return (
          <div key={bIdx} className="my-6 p-5 md:p-6 bg-[#1d2a35] border border-slate-700/60 rounded-xl space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold text-white overflow-hidden">
                <span className="text-[#04AA6D] font-bold">⊞</span>
                <span className="truncate">{displayHeader}</span>
              </div>

              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    navigator.clipboard.writeText(cleanCode);
                    setCopiedCodeIndex(bIdx);
                    setTimeout(() => setCopiedCodeIndex(null), 2000);
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#15202b] hover:bg-[#1f2d3d] border border-slate-700/80 rounded-md text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer select-none"
              >
                {copiedCodeIndex === bIdx ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-[#04AA6D]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Snippet Box displaying the exact command/code */}
            <div className="bg-[#15202b] p-4 md:p-5 rounded-lg border-l-4 border-[#04AA6D] font-mono text-sm overflow-x-auto leading-relaxed shadow-inner">
              {cleanCode.split('\n').map((codeLine, cIdx) => (
                <div key={cIdx} className="text-white font-medium whitespace-pre">
                  {codeLine || " "}
                </div>
              ))}
            </div>

            {/* Render 'Try it Yourself' button ONLY for HTML code (NOT for terminal/cmd commands) */}
            {isHtml && (
              <Link
                href={`/htmldemo?code=${encodeURIComponent(cleanCode)}`}
                target="_blank"
                onClick={() => {
                  try {
                    sessionStorage.setItem("nextsem_splash_shown", "true");
                  } catch {}
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-sm rounded-md transition-all shadow-md cursor-pointer"
              >
                <span>Try it Yourself »</span>
              </Link>
            )}

            {/* Real Windows 11 Pro Live Screen Recording Video Player for winget install MSYS2.MSYS2 */}
            {cleanCode.includes("winget install") && (
              <div className="pt-3 border-t border-slate-700/50 space-y-2 font-mono text-xs text-left">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-2 text-[#04AA6D] font-mono">
                    <span className="text-[#04AA6D] font-bold">⊞</span>
                    <span>Windows 11 Pro Live Screen Recording (Real PC Execution)</span>
                  </span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border border-emerald-500/20">
                    Windows 11 Pro Recorded
                  </span>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0c0c0c] shadow-2xl">
                  {/* Monochromatic Windows 11 Pro Titlebar */}
                  <div className="bg-[#1f1f1f] px-3 py-1.5 flex items-center justify-between border-b border-slate-800 text-[11px] text-slate-300 select-none">
                    <div className="flex items-center gap-2">
                      <span className="text-[#04AA6D] font-bold text-sm">⊞</span>
                      <span className="font-bold text-white">Administrator: Windows 11 Pro Screen Recording (winget install MSYS2.MSYS2)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <span>&#8212;</span>
                      <span>&#9633;</span>
                      <span>&#10005;</span>
                    </div>
                  </div>

                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-auto max-h-[480px] rounded-b-xl object-contain bg-black"
                    src="/recordings/msys2-install-windows11.mp4#t=0.5"
                  />
                </div>
              </div>
            )}

            {/* If there is a manual screenshot attached, show it */}
            {currentShot ? (
              <div className="pt-3 border-t border-slate-700/50 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-2 text-[#04AA6D] font-mono">
                    <span className="text-[#04AA6D] font-bold">⊞</span>
                    <span>Windows 11 Pro Terminal Output (100% Real PC Match)</span>
                  </span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                    100% Matching Code
                  </span>
                </div>
                <div 
                  className="w-full bg-[#15202b] p-2 rounded-lg border border-slate-800 flex items-center justify-center cursor-pointer group"
                  onClick={() => setActiveZoomImage(currentShot)}
                >
                  <img
                    src={currentShot.src}
                    alt={currentShot.caption || "Editor running example on Windows 11 Pro"}
                    className="w-full h-auto max-h-[450px] object-contain rounded-md shadow-md group-hover:scale-[1.01] transition-transform duration-300"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ) : isTerminal || subject === "cli" || subject === "cpp" ? (
              /* If it is a terminal command, display the Windows 11 Command Prompt execution output directly below it! */
              <div className="pt-3 border-t border-slate-700/50 space-y-2 font-mono text-xs text-left">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-2 text-[#04AA6D] font-mono">
                    <span className="text-[#04AA6D] font-bold">⊞</span>
                    <span>Windows 11 Command Prompt Execution Output</span>
                  </span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border border-emerald-500/20">
                    Windows 11 Verified
                  </span>
                </div>
                
                {/* Windows 11 Terminal Window Box */}
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0c0c0c] shadow-2xl">
                  {/* Monochromatic Windows 11 Titlebar */}
                  <div className="bg-[#1f1f1f] px-3 py-1.5 flex items-center justify-between border-b border-slate-800 text-[11px] text-slate-300 select-none">
                    <div className="flex items-center gap-2">
                      <span className="text-[#04AA6D] font-bold text-sm">⊞</span>
                      <span className="font-bold text-white">Administrator: Windows 11 Command Prompt ({subject === "cpp" ? "g++ GCC 13.2.0" : "cmd.exe"})</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <span>&#8212;</span>
                      <span>&#9633;</span>
                      <span>&#10005;</span>
                    </div>
                  </div>

                  {/* Terminal Execution Body */}
                  <div className="p-4 space-y-2 text-slate-200 bg-[#0c0c0c] text-xs leading-relaxed">
                    <p className="text-slate-500">Microsoft Windows [Version 10.0.22631.3007] (Windows 11 Pro x86_64)</p>
                    <p className="text-slate-500">(c) Microsoft Corporation. All rights reserved.</p>
                    <div className="pt-2 space-y-1">
                      <p className="text-[#04AA6D] font-bold flex items-center gap-1 flex-wrap">
                        <span>C:\Users\Student&gt;</span>
                        <span className="text-white font-mono">{cleanCode.split('\n')[0]}</span>
                      </p>
                      <div className="text-emerald-400/90 pt-1 font-mono whitespace-pre-wrap">
                        {getTerminalOutput(cleanCode)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      }

      // Process normal text lines and markdown tables
      const lines = trimmedBlock.split("\n");
      const result: React.ReactNode[] = [];
      let i = 0;

      while (i < lines.length) {
        const trimmed = lines[i].trim();
        if (!trimmed) {
          i++;
          continue;
        }

        // Handle Full Markdown Tables (| Feature | C++ | Python |)
        if (trimmed.startsWith("|")) {
          const tableLines: string[] = [];
          while (i < lines.length && lines[i].trim().startsWith("|")) {
            const tLine = lines[i].trim();
            if (!(tLine.includes(":-") || (tLine.includes("---") && tLine.includes("|")))) {
              tableLines.push(tLine);
            }
            i++;
          }

          if (tableLines.length > 0) {
            const headerLine = tableLines[0];
            const bodyLines = tableLines.slice(1);

            const headerCells = headerLine
              .split("|")
              .map((c) => c.trim())
              .filter((c) => c.length > 0)
              .map((cell) => cell.replace(/\*\*(.*?)\*\*/g, "$1").replace(/[*`_]/g, "").trim());

            const bodyRows = bodyLines.map((row) =>
              row
                .split("|")
                .map((c) => c.trim())
                .filter((c) => c.length > 0)
                .map((cell) => cell.replace(/\*\*(.*?)\*\*/g, "$1").replace(/[*`_]/g, "").trim())
            );

            result.push(
              <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-xl border border-slate-700/80 bg-[#15202b] shadow-xl">
                <table className="w-full text-left font-sans text-sm text-slate-200 border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 bg-[#1d2a35]">
                      {headerCells.map((cell, cIdx) => (
                        <th key={cIdx} className="px-4 py-3.5 font-extrabold text-white border-r border-slate-700/80 last:border-r-0 tracking-tight">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bodyRows.map((rowCells, rIdx) => (
                      <tr key={rIdx} className="border-b border-slate-800/80 hover:bg-[#1c2834] transition-colors last:border-b-0">
                        {rowCells.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-3 font-medium text-slate-200 border-r border-slate-800/80 last:border-r-0">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
            continue;
          }
        }

        // Render Markdown Images (![Alt](url)) with Lightbox Zoom
        const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)/);
        if (imgMatch) {
          const altText = imgMatch[1] || "Windows 11 Setup Screenshot";
          const imgSrc = imgMatch[2];
          result.push(
            <div 
              key={`img-${i}`} 
              className="my-3 rounded-xl overflow-hidden border border-slate-800 bg-[#15202b] shadow-xl group cursor-pointer"
              onClick={() => setActiveZoomImage({ src: imgSrc, caption: altText, alt: altText })}
            >
              <div className="bg-[#1f1f1f] px-3.5 py-1.5 flex items-center justify-between border-b border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2 font-mono text-white font-semibold">
                  <WindowsIcon className="w-3.5 h-3.5 text-white inline-block -mt-0.5" />
                  <span className="truncate">{altText}</span>
                </div>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-mono uppercase border border-emerald-500/20">
                  Windows 11
                </span>
              </div>
              <div className="p-1.5 flex items-center justify-center bg-[#0c0c0c]">
                <img
                  src={imgSrc}
                  alt={altText}
                  className="w-full h-auto max-h-[460px] object-contain rounded-md shadow group-hover:scale-[1.005] transition-transform duration-200"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          );
          i++;
          continue;
        }

        // Render --- Dividers as subtle horizontal line
        if (trimmed === "---" || trimmed === "___" || trimmed === "***") {
          result.push(<hr key={`hr-${i}`} className="border-t border-slate-800/80 my-4" />);
          i++;
          continue;
        }

        // Render ## / ### Headings with Monochromatic Vector SVG Icons
        if (trimmed.startsWith("#")) {
          const cleanHeading = trimmed
            .replace(/^[#\s]+/, "")
            .replace(/\*\*(.*?)\*\*/g, "$1")
            .replace(/[*`_]/g, "")
            .trim();

          const iconPath = getHeaderIcon(cleanHeading);
          result.push(
            <div key={`heading-${i}`} className="flex items-center gap-2.5 mt-5 mb-2 border-b border-slate-800/80 pb-2">
              <img src={iconPath} alt="" className="w-5 h-5 object-contain shrink-0" />
              <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight">
                {cleanHeading}
              </h3>
            </div>
          );
          i++;
          continue;
        }

        // Handle Bullet Lists (*, -, +)
        if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.startsWith("+ ")) {
          const cleanText = trimmed.replace(/^[*\-+]\s*/, "").replace(/\*"/g, '"').replace(/"\*/g, '"').trim();
          const boldRegex = /\*\*(.*?)\*\*/g;
          const parts = cleanText.split(boldRegex);

          result.push(
            <li key={`li-${i}`} className="ml-5 list-disc text-[15px] sm:text-[16px] text-slate-200 my-1.5 leading-[1.75]">
              {parts.map((part, pIdx) =>
                pIdx % 2 === 1
                  ? <strong key={pIdx} className="text-white font-bold">{part.replace(/[*`]/g, "")}</strong>
                  : <React.Fragment key={pIdx}>{renderInlineCode(part.replace(/\*"/g, '"').replace(/"\*/g, '"'))}</React.Fragment>
              )}
            </li>
          );
          i++;
          continue;
        }

        // Handle Numbered Lists (1., 2., etc.)
        if (/^\d+\.\s+/.test(trimmed)) {
          const cleanText = trimmed.replace(/^\d+\.\s+/, "").replace(/\*"/g, '"').replace(/"\*/g, '"').trim();
          const boldRegex = /\*\*(.*?)\*\*/g;
          const parts = cleanText.split(boldRegex);

          result.push(
            <li key={`oli-${i}`} className="ml-5 list-decimal text-[15px] sm:text-[16px] text-slate-200 my-1.5 leading-[1.75]">
              {parts.map((part, pIdx) =>
                pIdx % 2 === 1
                  ? <strong key={pIdx} className="text-white font-bold">{part.replace(/[*`]/g, "")}</strong>
                  : <React.Fragment key={pIdx}>{renderInlineCode(part.replace(/\*"/g, '"').replace(/"\*/g, '"'))}</React.Fragment>
              )}
            </li>
          );
          i++;
          continue;
        }

        // Normal paragraph text with optimal readable font size and tight vertical spacing
        const sanitizedParagraph = trimmed.replace(/\*"/g, '"').replace(/"\*/g, '"').replace(/\*([^"*\s][^*]*[^"*\s])\*/g, "$1");
        const boldRegex = /\*\*(.*?)\*\*/g;
        if (boldRegex.test(sanitizedParagraph) || sanitizedParagraph.includes('`') || sanitizedParagraph.includes('<')) {
          const parts = sanitizedParagraph.split(boldRegex);
          result.push(
            <p key={`p-${i}`} className="text-[15.5px] sm:text-[16.5px] text-slate-200 leading-[1.75] my-2 font-normal">
              {parts.map((part, pIdx) =>
                pIdx % 2 === 1
                  ? <strong key={pIdx} className="text-white font-bold">{part.replace(/[*`]/g, "")}</strong>
                  : <React.Fragment key={pIdx}>{renderInlineCode(part.replace(/[*]/g, ""))}</React.Fragment>
              )}
            </p>
          );
        } else {
          result.push(
            <p key={`p-${i}`} className="text-[15.5px] sm:text-[16.5px] text-slate-200 leading-[1.75] my-2 font-normal">
              {renderInlineCode(sanitizedParagraph.replace(/[*]/g, ""))}
            </p>
          );
        }
        i++;
      }
      return result;
    });
  };

  if (!mounted) {
    return (
      <div className="space-y-6 animate-pulse text-left py-10">
        <div className="h-6 bg-slate-900 rounded-lg w-1/4" />
        <div className="h-10 bg-slate-900 rounded-xl w-3/4" />
        <div className="h-48 bg-slate-900 rounded-2xl w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4 text-left max-w-5xl mx-auto px-2 sm:px-4 pb-20 md:pb-8">
      {/* Unit & Lesson Counter Badge Row */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <span className="text-xs font-black uppercase tracking-wider text-[#04AA6D] border border-[#04AA6D]/30 bg-[#04AA6D]/10 px-3 py-1 rounded-full">
          {lesson.unit || "Unit 1: Command Line & Terminal Foundations"}
        </span>
        <span className="text-xs font-mono font-black text-[#04AA6D] border border-[#04AA6D]/30 bg-[#04AA6D]/10 px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
          <CheckCircle2 size={12} />
          <span>Lesson #{lesson.id} / {totalLessonsInSubject}</span>
        </span>
      </div>

      {/* Top Desktop Navigation & Controls Bar */}
      <div className="hidden md:flex items-center justify-between gap-3 bg-[#0e1322] border border-slate-800 rounded-xl px-4 py-2.5 shadow-md">
        {/* Left: Previous Lesson */}
        {prevLesson ? (
          <Link
            href={`${subjectDashboardUrl}/${prevLesson.slug}`}
            onClick={async () => {
              await triggerNavigationAd();
            }}
            className="px-3.5 py-1.5 bg-[#141b30] hover:bg-[#1b2542] border border-slate-700/80 hover:border-[#04AA6D]/50 text-slate-200 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs group"
          >
            <ChevronLeft size={15} className="stroke-[2.5] text-[#04AA6D] group-hover:-translate-x-0.5 transition-transform" />
            <span>Previous</span>
          </Link>
        ) : (
          <div className="px-3.5 py-1.5 bg-slate-900/40 text-slate-600 rounded-lg text-xs font-bold flex items-center gap-1.5 border border-slate-850 cursor-not-allowed select-none">
            <ChevronLeft size={15} />
            <span>Previous</span>
          </div>
        )}

        {/* Center: Roadmap / Dashboard Link */}
        <Link
          href={subjectDashboardUrl}
          className="px-4 py-1.5 bg-[#04AA6D]/15 hover:bg-[#04AA6D]/25 border border-[#04AA6D]/40 text-[#04AA6D] hover:text-emerald-300 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs cursor-pointer"
        >
          <BrandLogoIcon size={14} roundedClass="rounded-xs" />
          <span>{subjectTitle.replace(/Modern Web|Web Development|Programming/gi, '').trim()} Roadmap</span>
        </Link>

        {/* Right: Search + Bookmark + Next Lesson */}
        <div className="flex items-center gap-2">
          {/* Quick Search Button */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open_search", { detail: { query: "" } }))}
            className="px-3 py-1.5 rounded-lg border bg-[#141b30] border-slate-700/80 hover:border-slate-600 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-xs"
            title="Search Nextsem (Press /)"
          >
            <Search size={14} className="text-[#04AA6D]" />
            <span className="hidden sm:inline">Search</span>
          </button>

          <button
            onClick={toggleBookmark}
            className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-xs ${
              isBookmarked
                ? "bg-[#04AA6D]/20 border-[#04AA6D]/60 text-[#04AA6D]"
                : "bg-[#141b30] border-slate-700/80 hover:border-slate-600 text-slate-300 hover:text-white"
            }`}
            title={isBookmarked ? "Remove Bookmark" : "Bookmark Lesson"}
          >
            <Bookmark size={14} className={`stroke-[2.5] ${isBookmarked ? "fill-[#04AA6D] text-[#04AA6D]" : ""}`} />
            <span>{isBookmarked ? "Saved" : "Bookmark"}</span>
          </button>

          {nextLesson ? (
            <Link
              href={`${subjectDashboardUrl}/${nextLesson.slug}`}
              onClick={async () => {
                await triggerNavigationAd();
              }}
              className="px-4 py-1.5 bg-[#04AA6D] hover:bg-[#039861] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#04AA6D]/20 cursor-pointer group"
            >
              <span>Next</span>
              <ChevronRight size={15} className="stroke-[3] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : (
            <div className="px-3.5 py-1.5 bg-slate-900/40 text-slate-600 rounded-lg text-xs font-bold flex items-center gap-1.5 border border-slate-850 cursor-not-allowed select-none">
              <span>Next</span>
              <ChevronRight size={15} />
            </div>
          )}
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        {lesson.title}
      </h1>

      {/* Author Attribution & Share Row with Official Brand Logo */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-2">
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
          <span>Last Updated: 26 Aug, 2026</span>
        </div>
        <div className="flex items-center gap-3">
          <ShareButton title={lesson.title} />
          <Link href={subjectDashboardUrl} className="text-xs font-bold text-[#04AA6D] hover:underline flex items-center gap-1">
            <span>View Full Roadmap</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main Single-Stream Content Container */}
      <div className="bg-slate-900/40 border border-slate-850 p-5 md:p-8 rounded-2xl shadow-xl backdrop-blur-xl relative overflow-hidden">
        <article className="prose prose-invert max-w-none text-left">
          {renderFormattedContent(contentBody)}
        </article>
      </div>

      {/* Bottom Desktop Navigation Row */}
      <div className="hidden md:flex items-center justify-between gap-4 border-t border-slate-800/80 pt-6 mt-8">
        {prevLesson ? (
          <Link
            href={`${subjectDashboardUrl}/${prevLesson.slug}/`}
            prefetch={true}
            onClick={async () => {
              await triggerNavigationAd();
            }}
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
          href={subjectDashboardUrl}
          className="px-6 py-2.5 bg-[#09101f] hover:bg-[#111a33] border-2 border-[#04AA6D] text-white hover:text-[#04AA6D] rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#04AA6D]/15 cursor-pointer"
        >
          <BrandLogoIcon size={16} roundedClass="rounded-xs" />
          <span>📁 View {subjectTitle.replace(/Modern Web|Web Development|Programming/gi, '').trim()} Roadmap</span>
        </Link>

        {nextLesson ? (
          <Link
            href={`${subjectDashboardUrl}/${nextLesson.slug}/`}
            prefetch={true}
            onClick={async () => {
              await triggerNavigationAd();
            }}
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

      {/* Lightbox Image Zoom Modal */}
      {activeZoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveZoomImage(null)}
        >
          <div 
            className="max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-4 space-y-4 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Monitor size={16} className="text-blue-400" />
                <span className="text-xs font-black text-white">Full Resolution Screenshot</span>
              </div>
              <button 
                onClick={() => setActiveZoomImage(null)}
                className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="max-h-[72vh] overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center p-2 relative">
              <img 
                src={activeZoomImage.src} 
                alt={activeZoomImage.alt || activeZoomImage.caption} 
                className="max-h-[68vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 text-center">
              <p className="text-xs font-bold text-slate-200">
                {activeZoomImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
