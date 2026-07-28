"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft, BookOpen, Sparkles, Check, HelpCircle, AlertCircle, RefreshCw,
  Award, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, FileText, CheckCircle2,
  Lock, Download, Play, Layers, Globe, Bookmark, BookmarkCheck, Type
} from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import FillInBlanksWidget, { FillInBlankItem } from "@/components/FillInBlanksWidget";
import PdfSimulationEngine, { SimulationConfig } from "@/components/PdfSimulationEngine";
import LessonScreenshotWidget, { ScreenshotItem } from "@/components/LessonScreenshotWidget";

export interface NcertLessonPage {
  pageNo: number;
  title: string;
  originalText?: string;
  explanationEn: string;
  explanationHi: string;
  explanationHinglish: string;
  explanationEnPro?: string;
  explanationHiPro?: string;
  explanationHinglishPro?: string;
  keyPoints?: string[];
  pageImageUrl?: string; // High-res textbook snapshot
  mcq?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
    questionHi?: string;
    questionHinglish?: string;
  };
  blank?: {
    question: string;
    answer: string;
    hint: string;
    hintPro?: string;
  };
  simulation?: SimulationConfig;
  customSimulator?: React.ReactNode;
}

export interface NcertMasterLessonTemplateProps {
  noteKey: string;
  classLabel: string;
  subjectName: string;
  chapterNumber: number | string;
  chapterTitle: string;
  subtitle?: string;
  pages: NcertLessonPage[];
  downloadPdfFileName?: string;
}

export default function NcertMasterLessonTemplate({
  noteKey,
  classLabel,
  subjectName,
  chapterNumber,
  chapterTitle,
  subtitle,
  pages,
  downloadPdfFileName
}: NcertMasterLessonTemplateProps) {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = `ncert_unit:${noteKey}`;
  const isCompleted = !!completedChapters[progressKey];

  // State controls
  const [currentPageIdx, setCurrentPageIdx] = useState<number>(0);
  const [selectedLang, setSelectedLang] = useState<"hinglish" | "english" | "hindi">("hinglish");
  const [complexityMode, setComplexityMode] = useState<"kid" | "pro">("kid");
  const [activeViewMode, setActiveViewMode] = useState<"book" | "study">("study");
  const [zoomScale, setZoomScale] = useState<number>(100); // 100% to 250%

  // Quiz states
  const [selectedMcq, setSelectedMcq] = useState<number | null>(null);
  const [isMcqSubmitted, setIsMcqSubmitted] = useState<boolean>(false);
  const [blankInput, setBlankInput] = useState<string>("");
  const [isBlankSubmitted, setIsBlankSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState<boolean>(false);
  const [adRewardedSuccess, setAdRewardedSuccess] = useState<boolean>(false);

  const [fontSize, setFontSize] = useState<number>(16); // 14px to 22px
  const [bookmarkedPages, setBookmarkedPages] = useState<Record<number, boolean>>({});

  const currentPage = pages[currentPageIdx] || pages[0];
  const totalPages = pages.length;

  // Sync saved language & bookmarks preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("nextsem_ncert_lang") as "hinglish" | "english" | "hindi" | null;
      if (savedLang) setSelectedLang(savedLang);

      const savedBookmarks = localStorage.getItem(`nextsem_ncert_bm_${noteKey}`);
      if (savedBookmarks) {
        try {
          setBookmarkedPages(JSON.parse(savedBookmarks));
        } catch (e) {}
      }
    }
  }, [noteKey]);

  const toggleBookmarkCurrentPage = () => {
    const nextState = { ...bookmarkedPages, [currentPage.pageNo]: !bookmarkedPages[currentPage.pageNo] };
    setBookmarkedPages(nextState);
    if (typeof window !== "undefined") {
      localStorage.setItem(`nextsem_ncert_bm_${noteKey}`, JSON.stringify(nextState));
    }
  };

  const handleLangChange = (lang: "hinglish" | "english" | "hindi") => {
    setSelectedLang(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_ncert_lang", lang);
    }
  };

  const getExplanation = (): string => {
    if (complexityMode === "pro") {
      if (selectedLang === "english") return currentPage.explanationEnPro || currentPage.explanationEn || "";
      if (selectedLang === "hindi") return currentPage.explanationHiPro || currentPage.explanationHi || "";
      return currentPage.explanationHinglishPro || currentPage.explanationHinglish || "";
    }
    if (selectedLang === "english") return currentPage.explanationEn || "";
    if (selectedLang === "hindi") return currentPage.explanationHi || "";
    return currentPage.explanationHinglish || "";
  };

  const resetStepState = () => {
    setSelectedMcq(null);
    setIsMcqSubmitted(false);
    setBlankInput("");
    setIsBlankSubmitted(false);
    setShowHint(false);
  };

  const handleNextPage = () => {
    if (currentPageIdx < totalPages - 1) {
      setCurrentPageIdx(prev => prev + 1);
      resetStepState();
    } else {
      markCompleted(progressKey);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIdx > 0) {
      setCurrentPageIdx(prev => prev - 1);
      resetStepState();
    }
  };

  const handleDownloadPdfWithAd = () => {
    setIsDownloadingPdf(true);
    setTimeout(() => {
      setAdRewardedSuccess(true);
      setIsDownloadingPdf(false);
      // Simulate trigger download
      const targetFileName = downloadPdfFileName || `${noteKey}-notes.pdf`;
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("download", targetFileName);
      document.body.appendChild(link);
      setTimeout(() => setAdRewardedSuccess(false), 5000);
    }, 2500);
  };

  const formatTextContent = (rawText: string) => {
    if (!rawText) return null;
    const lines = rawText.split('\n');
    return lines.map((line, lIdx) => {
      if (!line.trim()) return <div key={lIdx} className="h-2" />;
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={lIdx} className="mb-2.5 leading-relaxed text-slate-100" style={{ fontSize: `${fontSize}px` }}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-extrabold text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans select-none">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-5 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/ncert"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all cursor-pointer border border-slate-200"
              title="Back to NCERT Hub"
            >
              <ArrowLeft size={18} />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase text-blue-700 bg-blue-100 border border-blue-200 px-2.5 py-0.5 rounded-full">
                  {classLabel} • {subjectName}
                </span>
                <span className="text-[10px] font-extrabold uppercase text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                  Interactive Lesson
                </span>
              </div>
              <h1 className="text-base md:text-xl font-extrabold text-slate-900 mt-0.5 flex items-center gap-2">
                <span>Ch {chapterNumber}: {chapterTitle}</span>
              </h1>
            </div>
          </div>

          {/* Action & Mode Controls */}
          <div className="flex flex-wrap items-center gap-2 self-stretch md:self-auto justify-between md:justify-end">
            {/* View Mode Switcher */}
            <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 flex items-center gap-1">
              <button
                onClick={() => setActiveViewMode("study")}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeViewMode === "study"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Sparkles size={13} />
                <span>Study &amp; Quiz</span>
              </button>
              <button
                onClick={() => setActiveViewMode("book")}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeViewMode === "book"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BookOpen size={13} />
                <span>Book Page Turner</span>
              </button>
            </div>

            {/* Language Selector */}
            <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 flex items-center gap-1">
              {(["hinglish", "english", "hindi"] as const).map(lang => (
                <button
                  key={lang}
                  onClick={() => handleLangChange(lang)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-extrabold capitalize transition-all cursor-pointer ${
                    selectedLang === lang
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {lang === "hinglish" ? "🇮🇳 Hinglish" : lang === "english" ? "🇺🇸 En" : "🇮🇳 हिंदी"}
                </button>
              ))}
            </div>

            {/* Bookmark Current Page Button */}
            <button
              onClick={toggleBookmarkCurrentPage}
              className={`px-3 py-1.5 rounded-xl border text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                bookmarkedPages[currentPage.pageNo]
                  ? "bg-blue-100 text-blue-800 border-blue-300"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-900"
              }`}
              title="Bookmark this page to revisit later"
            >
              {bookmarkedPages[currentPage.pageNo] ? <BookmarkCheck size={14} className="text-blue-700" /> : <Bookmark size={14} />}
              <span>{bookmarkedPages[currentPage.pageNo] ? "Bookmarked" : "Bookmark"}</span>
            </button>

            {/* Font Size Adjuster */}
            <div className="bg-slate-950 px-2 py-1 rounded-xl border border-slate-800 flex items-center gap-1">
              <button
                onClick={() => setFontSize(prev => Math.max(14, prev - 2))}
                className="text-xs font-bold text-slate-400 hover:text-white px-1.5 py-0.5 rounded cursor-pointer"
                title="Decrease Font Size"
              >
                A-
              </button>
              <span className="text-[10px] font-mono text-emerald-400 font-bold px-1">{fontSize}px</span>
              <button
                onClick={() => setFontSize(prev => Math.min(22, prev + 2))}
                className="text-xs font-bold text-slate-400 hover:text-white px-1.5 py-0.5 rounded cursor-pointer"
                title="Increase Font Size"
              >
                A+
              </button>
            </div>

            {/* Kid vs Pro Mode */}
            <button
              onClick={() => setComplexityMode(prev => (prev === "kid" ? "pro" : "kid"))}
              className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all cursor-pointer flex items-center gap-1.5 ${
                complexityMode === "kid"
                  ? "bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20"
                  : "bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20"
              }`}
            >
              <span>{complexityMode === "kid" ? "🧒 Kid Mode" : "🧑‍💻 Pro Mode"}</span>
            </button>

            {/* PDF Rewarded Download Button */}
            <button
              onClick={handleDownloadPdfWithAd}
              disabled={isDownloadingPdf}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Download size={13} className={isDownloadingPdf ? "animate-bounce" : ""} />
              <span>{isDownloadingPdf ? "Preparing PDF..." : "Download PDF"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="max-w-7xl mx-auto w-full p-4 md:p-8 flex-1 space-y-6">
        {/* Rewarded Ad Download Modal Banner */}
        {adRewardedSuccess && (
          <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 rounded-2xl flex items-center justify-between text-left shadow-lg">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={24} className="text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white">Rewarded Ad Verified — Download Ready!</h4>
                <p className="text-[11px] text-emerald-300">Your high-res PDF textbook notes have been generated for offline study.</p>
              </div>
            </div>
          </div>
        )}

        {/* Page Turner Bar & Progress Indicator */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg text-left">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrevPage}
              disabled={currentPageIdx === 0}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-all border border-slate-700 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Module Page {currentPageIdx + 1} of {totalPages}
              </span>
              <h2 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                <span>{currentPage.title}</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Completion Toggle */}
            <button
              onClick={() => (isCompleted ? markIncomplete(progressKey) : markCompleted(progressKey))}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
                isCompleted
                  ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
              }`}
            >
              <CheckCircle2 size={15} />
              <span>{isCompleted ? "Completed 🎉" : "Mark Unit Complete"}</span>
            </button>

            <button
              onClick={handleNextPage}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>{currentPageIdx < totalPages - 1 ? "Next Page →" : "Finish Lesson 🏆"}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 📖 DIGITAL BOOK TURNER VIEW MODE */}
        {activeViewMode === "book" && (
          <section className="bg-slate-900/90 border-2 border-amber-500/30 rounded-3xl p-6 space-y-6 shadow-2xl text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <BookOpen size={20} className="text-emerald-400" />
                <h3 className="text-base font-bold text-white">Digital Book Reader View</h3>
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                <button
                  onClick={() => setZoomScale(prev => Math.max(100, prev - 25))}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-xs font-mono text-emerald-400 font-bold min-w-[45px] text-center">
                  {zoomScale}%
                </span>
                <button
                  onClick={() => setZoomScale(prev => Math.min(250, prev + 25))}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  onClick={() => setZoomScale(100)}
                  className="text-slate-500 hover:text-slate-300 ml-1 cursor-pointer"
                  title="Reset Zoom"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>

            {/* Side-by-Side or Stacked Textbook Snapshot + Notes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Textbook Canvas/Snapshot Column */}
              <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-4 overflow-auto max-h-[650px] shadow-inner text-center">
                {currentPage.pageImageUrl ? (
                  <div className="inline-block transition-transform duration-200 origin-top-left" style={{ transform: `scale(${zoomScale / 100})` }}>
                    <img
                      src={currentPage.pageImageUrl}
                      alt={`NCERT Textbook Page ${currentPage.pageNo}`}
                      className="max-w-full h-auto rounded-xl border border-slate-800 shadow-md"
                    />
                  </div>
                ) : (
                  <LessonScreenshotWidget
                    items={[
                      {
                        src: "/ncert-pdfs/sample-page.png",
                        caption: `NCERT Textbook Page ${currentPage.pageNo} Snapshot — ${chapterTitle}`,
                        alt: `Page ${currentPage.pageNo} snapshot`,
                        stepNumber: currentPage.pageNo
                      }
                    ]}
                    stepNumber={currentPage.pageNo}
                  />
                )}
              </div>

              {/* Point-wise Notes Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Point-by-Point Reference</span>
                    <span className="text-[10px] text-slate-500 font-mono">Page {currentPage.pageNo}</span>
                  </div>
                  <div className="text-xs md:text-sm text-slate-200 leading-relaxed">
                    {formatTextContent(getExplanation())}
                  </div>

                  {currentPage.keyPoints && currentPage.keyPoints.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t border-slate-850 text-xs text-slate-300">
                      {currentPage.keyPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ✍️ INTERACTIVE STUDY & QUIZ VIEW MODE */}
        {activeViewMode === "study" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {/* Left Column: Line-by-Line Lesson Body & Interactive Simulator */}
            <div className="lg:col-span-7 space-y-6">
              {/* Concept Explanation Card with Authentic Interactive Book Border */}
              <article className="bg-slate-900/95 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500" />
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xs">🙋</span>
                    <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">NCERT Master Teacher Note</h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                    {selectedLang} • {complexityMode} mode
                  </span>
                </div>

                <div className="prose prose-invert max-w-none text-slate-100 leading-relaxed space-y-2">
                  {formatTextContent(getExplanation())}
                </div>

                {/* Original Textbook Extract Snippet */}
                {currentPage.originalText && (
                  <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-slate-400">NCERT Original Textbook Extract:</span>
                    <p className="text-xs text-slate-300 font-serif italic italic leading-relaxed">
                      &quot;{currentPage.originalText}&quot;
                    </p>
                  </div>
                )}
              </article>

              {/* Interactive Simulation / Calculator Engine */}
              {currentPage.customSimulator ? (
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
                  {currentPage.customSimulator}
                </div>
              ) : currentPage.simulation ? (
                <PdfSimulationEngine config={currentPage.simulation} />
              ) : null}
            </div>

            {/* Right Column: Interactive MCQ Exercise & Fill-in-the-Blanks Quiz Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* MCQ Card */}
              {currentPage.mcq && (
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <HelpCircle size={18} className="text-blue-400" />
                      <h3 className="text-sm font-bold text-white">MCQ Practice Card</h3>
                    </div>
                    <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                      Module {currentPageIdx + 1}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm font-semibold text-white">
                    {currentPage.mcq.question}
                  </p>

                  <div className="space-y-2">
                    {currentPage.mcq.options.map((opt, oIdx) => {
                      const isSelected = selectedMcq === oIdx;
                      const isCorrect = oIdx === currentPage.mcq?.answer;

                      let btnStyle = "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700";
                      if (isMcqSubmitted) {
                        if (isCorrect) btnStyle = "bg-emerald-950/80 border-emerald-500/50 text-emerald-300 font-bold";
                        else if (isSelected) btnStyle = "bg-red-950/80 border-red-500/50 text-red-300 font-bold";
                      } else if (isSelected) {
                        btnStyle = "bg-blue-600/20 border-blue-500 text-white font-bold";
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => {
                            if (!isMcqSubmitted) setSelectedMcq(oIdx);
                          }}
                          className={`w-full p-3 rounded-xl border text-xs text-left transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isMcqSubmitted && isCorrect && <Check size={14} className="text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>

                  {!isMcqSubmitted ? (
                    <button
                      onClick={() => {
                        if (selectedMcq !== null) setIsMcqSubmitted(true);
                      }}
                      disabled={selectedMcq === null}
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Submit MCQ Answer
                    </button>
                  ) : (
                    <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-1 text-xs">
                      <span className="font-bold text-emerald-400">Explanation:</span>
                      <p className="text-slate-300 leading-snug">{currentPage.mcq.explanation}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Fill-in-the-Blank Card */}
              {currentPage.blank && (
                <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-purple-400" />
                      <h3 className="text-sm font-bold text-white">Fill-in-the-Blank Card</h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm font-medium text-slate-200">
                    {currentPage.blank.question}
                  </p>

                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      if (blankInput.trim()) setIsBlankSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <input
                      type="text"
                      placeholder="Type your answer here..."
                      value={blankInput}
                      onChange={e => setBlankInput(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                    />

                    <div className="flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setShowHint(prev => !prev)}
                        className="text-[11px] font-bold text-purple-400 hover:underline cursor-pointer"
                      >
                        {showHint ? "Hide Hint" : "💡 Need a Hint?"}
                      </button>

                      <button
                        type="submit"
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        Check Answer
                      </button>
                    </div>
                  </form>

                  {showHint && (
                    <div className="p-3 bg-purple-950/40 border border-purple-500/30 rounded-xl text-xs text-purple-200">
                      💡 <strong>Hint:</strong> {currentPage.blank.hint}
                    </div>
                  )}

                  {isBlankSubmitted && (
                    <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-1 text-xs">
                      <span className="font-bold text-emerald-400">Correct Answer:</span>
                      <p className="text-white font-mono">{currentPage.blank.answer}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer copyright */}
      <footer className="w-full py-4 text-center text-[10px] text-slate-600 border-t border-slate-850 shrink-0">
        © 2026 Nextsem Academy • NCERT Interactive Study Companion
      </footer>
    </div>
  );
}
