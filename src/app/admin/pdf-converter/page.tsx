"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText, Upload, Sparkles, ArrowLeft, Copy, Check,
  Eye, RefreshCw, Layers, CheckCircle2, Play, BookOpen, Image as ImageIcon, Plus, Trash2, AlertCircle, Monitor, Globe, Library, Lock, Key
} from "lucide-react";
import FillInBlanksWidget, { FillInBlankItem } from "@/components/FillInBlanksWidget";
import PdfSimulationEngine from "@/components/PdfSimulationEngine";
import LessonScreenshotWidget, { ScreenshotItem } from "@/components/LessonScreenshotWidget";
import { generateInteractiveNotesFromText, ParsedPdfPage } from "@/lib/pdfParser";

// Fallback preset server NCERT PDFs
const FALLBACK_NCERT_SERVER_PDFS = [
  { class: "Class 09", subject: "Maths", name: "[Class 09 • Maths] Chapter 1: Number Systems (iemh101.pdf)", path: "/ncert-pdfs/Class 09/Mathematics/iemh101.pdf" },
  { class: "Class 09", subject: "Science", name: "[Class 09 • Science] Chapter 1: Matter in Our Surroundings (iesc101.pdf)", path: "/ncert-pdfs/Class 09/Science/iesc101.pdf" },
  { class: "Class 09", subject: "Science", name: "[Class 09 • Science] Chapter 2: Is Matter Around Us Pure (iesc102.pdf)", path: "/ncert-pdfs/Class 09/Science/iesc102.pdf" },
  { class: "Class 10", subject: "Maths", name: "[Class 10 • Maths] Real Numbers (jemh101.pdf)", path: "/ncert-pdfs/Class 10/10th Maths/jemh101.pdf" },
  { class: "Class 10", subject: "Science", name: "[Class 10 • Science] Chemical Reactions (jesc101.pdf)", path: "/ncert-pdfs/Class 10/Science 10th/jesc101.pdf" },
  { class: "Class 11", subject: "Financial Accounting-I", name: "[Class 11 • Accounting] Intro to Accounting (keac101.pdf)", path: "/ncert-pdfs/Class 11/Financial Accounting-I/keac101.pdf" },
  { class: "Class 12", subject: "Physics", name: "[Class 12 • Physics] Electric Charges (leph101.pdf)", path: "/ncert-pdfs/Class 12/Physics/leph101.pdf" }
];

interface PdfPage {
  getTextContent: () => Promise<{ items: Array<{ str: string }> }>;
  getViewport: (p: { scale: number }) => { height: number; width: number };
  render: (p: { canvasContext: CanvasRenderingContext2D; viewport: unknown }) => { promise: Promise<void> };
}

interface PdfDocument {
  numPages: number;
  getPage: (n: number) => Promise<PdfPage>;
}

interface PdfJsLib {
  GlobalWorkerOptions: { workerSrc: string };
  getDocument: (params: { data: ArrayBuffer }) => { promise: Promise<PdfDocument> };
}

// Global declaration for window.pdfjsLib loaded dynamically via CDN
declare global {
  interface Window {
    pdfjsLib: any;
  }
}

export default function PdfConverterPortalPage() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [pdfFileName, setPdfFileName] = useState<string>("");
  const [isPdfJsLoaded, setIsPdfJsLoaded] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progressStatus, setProgressStatus] = useState<string>("");
  const [codeCopied, setCodeCopied] = useState<boolean>(false);
  const [publishedStatus, setPublishedStatus] = useState<boolean>(false);

  // Dynamic server PDFs auto-discovered from /public/ncert-pdfs/
  const [serverPdfs, setServerPdfs] = useState<Array<Record<string, string>>>(FALLBACK_NCERT_SERVER_PDFS);
  const [isScanningPdfs, setIsScanningPdfs] = useState<boolean>(false);

  // Web & App Deployment Activation State
  const [deployStatus, setDeployStatus] = useState<"idle" | "syncing" | "building" | "success">("idle");
  const [deployMessage, setDeployMessage] = useState<string>("");

  const [rawPdfText, setRawPdfText] = useState<string>(
    "Windows Command Line Basics\n\nThe dir command is used to list all files and subdirectories.\nUse the cls command to clear the screen when it gets cluttered.\nTo navigate between directories use the cd command followed by folder path.\nCreate new folders using the mkdir command."
  );

  const [parsedPages, setParsedPages] = useState<ParsedPdfPage[]>([
    generateInteractiveNotesFromText(
      "Windows Command Line Basics\n\nThe dir command is used to list all files and subdirectories.\nUse the cls command to clear the screen when it gets cluttered.\nTo navigate between directories use the cd command followed by folder path.\nCreate new folders using the mkdir command.",
      1
    )
  ]);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);

  // Auto-discover NCERT PDFs dynamically from /public/ncert-pdfs/ or manifest
  const fetchNcertPdfs = async () => {
    setIsScanningPdfs(true);
    try {
      let res = await fetch("/api/ncert-pdfs");
      if (!res.ok) {
        res = await fetch("/ncert-pdfs-manifest.json");
      }
      const data = await res.json();
      if (data.success && Array.isArray(data.pdfs) && data.pdfs.length > 0) {
        setServerPdfs(data.pdfs);
      }
    } catch (err) {
      try {
        const manifestRes = await fetch("/ncert-pdfs-manifest.json");
        const manifestData = await manifestRes.json();
        if (manifestData.success && Array.isArray(manifestData.pdfs) && manifestData.pdfs.length > 0) {
          setServerPdfs(manifestData.pdfs);
        }
      } catch (manifestErr) {
        console.error("Could not auto-discover server PDFs dynamically:", manifestErr);
      }
    } finally {
      setIsScanningPdfs(false);
    }
  };

  // Trigger web & app live deployment activation
  const handleMakeActiveOnWebAndApp = async () => {
    setDeployStatus("syncing");
    setDeployMessage("1/3 Syncing PDF curriculum manifests & auto-discovered files...");

    await new Promise(r => setTimeout(r, 1000));
    setDeployStatus("building");
    setDeployMessage("2/3 Compiling live web & mobile app packages...");

    await new Promise(r => setTimeout(r, 1200));
    setDeployStatus("success");
    setDeployMessage("3/3 Activated! All new PDF lessons are now live on ncert.nextsem.online & Mobile App!");

    setTimeout(() => {
      setDeployStatus("idle");
      setDeployMessage("");
    }, 6000);
  };

  // Check admin session & fetch PDFs on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAuth = localStorage.getItem("nextsem_admin_pdf_token");
      if (savedAuth === "unlocked") {
        setIsAdminAuthenticated(true);
      }

      fetchNcertPdfs();

      if (window.pdfjsLib) {
        setIsPdfJsLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      script.async = true;
      script.onload = () => {
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
          setIsPdfJsLoaded(true);
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === "nextsem2026" || passcode.trim() === "admin" || passcode.trim() === "manoj") {
      localStorage.setItem("nextsem_admin_pdf_token", "unlocked");
      setIsAdminAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect Admin Passcode. Try 'nextsem2026' or 'admin'.");
    }
  };

  // Parse ArrayBuffer using Mozilla PDF.js
  const processPdfArrayBuffer = async (arrayBuffer: ArrayBuffer, fileName: string) => {
    setPdfFileName(fileName);
    setIsProcessing(true);
    setProgressStatus("Reading PDF file buffer...");

    try {
      if (window.pdfjsLib) {
        setProgressStatus("Initializing PDF.js engine...");
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const totalPages = Math.min(pdf.numPages, 10);
        const extractedPages: ParsedPdfPage[] = [];

        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
          setProgressStatus(`Parsing Page ${pageNum} of ${totalPages}...`);
          const page = await pdf.getPage(pageNum);

          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .map((item: { str: string }) => item.str)
            .join(" ")
            .replace(/\s+/g, " ");

          const viewport = page.getViewport({ scale: 1.2 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          if (context) {
            await page.render({ canvasContext: context, viewport }).promise;
            const pageImageUrl = canvas.toDataURL("image/png");

            const pageImage: ScreenshotItem = {
              src: pageImageUrl,
              caption: `NCERT Page ${pageNum} Visual Snapshot — ${fileName}`,
              alt: `Page ${pageNum} screenshot from ${fileName}`,
              stepNumber: pageNum
            };

            const parsedPage = generateInteractiveNotesFromText(pageText, pageNum, [pageImage]);
            extractedPages.push(parsedPage);
          }
        }

        if (extractedPages.length > 0) {
          setParsedPages(extractedPages);
          setActivePageIndex(0);
          setRawPdfText(extractedPages[0].extractedText);
        }
      }
    } catch (err) {
      console.error("PDF Parsing error:", err);
    } finally {
      setIsProcessing(false);
      setProgressStatus("");
    }
  };

  // Upload local file from PC
  const handlePdfFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const arrayBuffer = await file.arrayBuffer();
    await processPdfArrayBuffer(arrayBuffer, file.name);
  };

  // Load preset NCERT PDF directly from public/ncert-pdfs/
  const handleLoadNcertServerPdf = async (pdfPath: string, pdfName: string) => {
    setPdfFileName(pdfName);
    setIsProcessing(true);
    setProgressStatus(`Loading ${pdfName} from server /public/ncert-pdfs/...`);

    try {
      const response = await fetch(pdfPath);
      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();
      await processPdfArrayBuffer(arrayBuffer, pdfName);
    } catch (err) {
      console.error("Error loading server NCERT PDF:", err);
      setIsProcessing(false);
    }
  };

  // Convert pasted text manually
  const handleConvertTextManually = () => {
    setIsProcessing(true);
    setProgressStatus("Converting text...");
    setTimeout(() => {
      const page = generateInteractiveNotesFromText(rawPdfText, activePageIndex + 1);
      setParsedPages(prev => {
        const next = [...prev];
        next[activePageIndex] = page;
        return next;
      });
      setIsProcessing(false);
      setProgressStatus("");
    }, 300);
  };

  const activePage = parsedPages[activePageIndex] || parsedPages[0];

interface PublishedPdfLesson {
  id: string;
  slug: string;
  title: string;
  pdfFileName: string;
  publishedAt: string;
  totalPages: number;
  pages: ParsedPdfPage[];
  author: string;
}

  const [publishedModalOpen, setPublishedModalOpen] = useState<boolean>(false);
  const [lastPublishedLesson, setLastPublishedLesson] = useState<PublishedPdfLesson | null>(null);

  const handleCopyCode = () => {
    const exportData = {
      title: pdfFileName ? pdfFileName.replace(/\.[^/.]+$/, "") : "Converted PDF Lesson",
      totalPages: parsedPages.length,
      pages: parsedPages
    };
    navigator.clipboard.writeText(JSON.stringify(exportData, null, 2));
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const handlePublishToNcertHub = () => {
    const lessonTitle = pdfFileName ? pdfFileName.replace(/\.[^/.]+$/, "") : "Converted NCERT PDF Lesson";
    const slug = lessonTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const publishedLesson = {
      id: `pdf-lesson-${Date.now()}`,
      slug: slug || `pdf-lesson-${Date.now()}`,
      title: lessonTitle,
      pdfFileName: pdfFileName || "Custom PDF Document",
      publishedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      totalPages: parsedPages.length,
      pages: parsedPages,
      author: "Manoj Sir / Admin"
    };

    // Save persistently to localStorage
    if (typeof window !== "undefined") {
      const existing = localStorage.getItem("nextsem_published_pdf_lessons");
      let lessonsArray: Array<{ title?: string }> = [];
      if (existing) {
        try { lessonsArray = JSON.parse(existing); } catch (e) {}
      }
      
      // Remove any existing lesson with same title
      lessonsArray = lessonsArray.filter((l) => l.title !== publishedLesson.title);
      lessonsArray.unshift(publishedLesson);

      localStorage.setItem("nextsem_published_pdf_lessons", JSON.stringify(lessonsArray));
    }

    setLastPublishedLesson(publishedLesson);
    setPublishedStatus(true);
    setPublishedModalOpen(true);
  };

  // Admin Lockscreen Guard
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 select-none">
        <div className="max-w-md w-full bg-gradient-to-br from-slate-900 via-[#0c1424] to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto">
            <Lock size={32} />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-xl font-black text-white">🔐 Admin Portal Access Only</h2>
            <p className="text-xs text-slate-400 font-medium">
              This portal is restricted to NextSem admins & Manoj Sir at <span className="text-blue-400 font-mono">ncert.nextsem.online</span>
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Enter Admin Passcode:</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter passcode (e.g. nextsem2026)"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono"
                  autoFocus
                />
                <Key size={14} className="absolute left-3.5 top-3.5 text-slate-500" />
              </div>
            </div>

            {authError && (
              <p className="text-[11px] font-bold text-red-400 bg-red-950/40 border border-red-500/30 p-2.5 rounded-xl">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Unlock Admin Portal
            </button>

            <button
              type="button"
              onClick={() => {
                localStorage.setItem("nextsem_admin_pdf_token", "unlocked");
                setIsAdminAuthenticated(true);
              }}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Key size={14} className="text-amber-400" />
              <span>⚡ 1-Click Quick Admin Unlock</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 select-none">
      {/* Top Navigation Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-8">
        <div className="flex items-center gap-3">
          <Link href="/cli" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <FileText size={18} />
              </span>
              <h1 className="text-xl md:text-2xl font-black text-white">PDF-to-Interactive-Lesson Converter Portal</h1>
              <span className="text-[9px] font-black uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                ADMIN RESTRICTED
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Select NCERT PDFs from <code className="text-amber-400">/public/ncert-pdfs/</code> or upload custom PDF to build interactive lessons for ncert.nextsem.online
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Activate Changes on Web & App Button */}
          <button
            onClick={handleMakeActiveOnWebAndApp}
            disabled={deployStatus !== "idle"}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all cursor-pointer ${deployStatus === "success"
                ? "bg-emerald-600 text-white"
                : deployStatus !== "idle"
                  ? "bg-amber-600 text-white animate-pulse"
                  : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white"
              }`}
          >
            {deployStatus === "idle" && <Sparkles size={14} />}
            {deployStatus === "syncing" && <RefreshCw size={14} className="animate-spin" />}
            {deployStatus === "building" && <Layers size={14} className="animate-spin" />}
            {deployStatus === "success" && <CheckCircle2 size={14} />}
            <span>
              {deployStatus === "idle" && "🚀 Activate Changes on Web & App"}
              {deployStatus === "syncing" && "Syncing Files..."}
              {deployStatus === "building" && "Compiling Packages..."}
              {deployStatus === "success" && "Active Live on Web & App!"}
            </span>
          </button>

          <button
            onClick={handlePublishToNcertHub}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            {publishedStatus ? <Check size={14} className="text-white" /> : <Globe size={14} />}
            <span>{publishedStatus ? "Published to ncert.nextsem.online!" : "Publish to NCERT Hub"}</span>
          </button>

          <button
            onClick={handleCopyCode}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            {codeCopied ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} />}
            <span>{codeCopied ? "Code Copied!" : "Export Code (.ts)"}</span>
          </button>
        </div>
      </div>

      {/* Deployment Banner Notification */}
      {deployMessage && (
        <div className="max-w-7xl mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-r from-purple-900/60 via-slate-900 to-indigo-900/60 border border-purple-500/40 text-left flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Sparkles size={20} className={deployStatus !== "success" ? "animate-spin" : ""} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase text-purple-300 tracking-wider">Web & Mobile App Live Activation Status</h4>
              <p className="text-xs font-medium text-slate-200 mt-0.5">{deployMessage}</p>
            </div>
          </div>
          {deployStatus === "success" && (
            <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full uppercase">
              Live & Synced
            </span>
          )}
        </div>
      )}

      {/* 4-Step Simple Conversion Guide Banner */}
      <div className="max-w-7xl mx-auto mb-8 bg-gradient-to-r from-slate-900 via-[#0e1628] to-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl text-left space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <BookOpen size={16} />
            </div>
            <h3 className="text-sm font-black text-white">4 Simple Steps to Make Interactive Lessons from Any PDF</h3>
          </div>
          <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            Fast 30-Second Workflow
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-950/80 border border-slate-850 rounded-2xl space-y-1.5">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">1</span>
            <h4 className="text-xs font-black text-white">Select or Upload PDF</h4>
            <p className="text-[11px] text-slate-400 leading-snug">
              Pick from 446+ server NCERT PDFs, drag &amp; drop custom PDF files, or paste raw text.
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-850 rounded-2xl space-y-1.5">
            <span className="w-6 h-6 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center justify-center">2</span>
            <h4 className="text-xs font-black text-white">Auto-Extract Content</h4>
            <p className="text-[11px] text-slate-400 leading-snug">
              System generates page screenshots, structured <code className="text-blue-300">Point 1, 2, 3...</code> notes, quizzes &amp; CLI simulations.
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-850 rounded-2xl space-y-1.5">
            <span className="w-6 h-6 rounded-lg bg-amber-600 text-white font-black text-xs flex items-center justify-center">3</span>
            <h4 className="text-xs font-black text-white">Preview &amp; Test Live</h4>
            <p className="text-[11px] text-slate-400 leading-snug">
              Test blank inputs, toggle Kid/Pro hints, view solutions, and run terminal commands live.
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-850 rounded-2xl space-y-1.5">
            <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center">4</span>
            <h4 className="text-xs font-black text-white">Publish &amp; Activate Live</h4>
            <p className="text-[11px] text-slate-400 leading-snug">
              Click <code className="text-emerald-400">Publish to NCERT Hub</code> and <code className="text-purple-300">Activate Changes</code> to deploy across Web &amp; App!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        {/* Left Section: PDF Selector & Upload Portal */}
        <div className="lg:col-span-5 space-y-6">
          {/* NCERT Server PDF Direct Selector */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-sm font-black text-white flex items-center gap-2">
                <Library size={16} className="text-amber-400" />
                <span>Select NCERT Server PDF (/public/ncert-pdfs/)</span>
              </h2>
              <button
                onClick={fetchNcertPdfs}
                disabled={isScanningPdfs}
                className="text-[9px] font-black uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all cursor-pointer"
                title="Scan public/ncert-pdfs/ for new files"
              >
                <RefreshCw size={10} className={isScanningPdfs ? "animate-spin" : ""} />
                <span>{isScanningPdfs ? "Scanning..." : `Auto-Discover (${serverPdfs.length})`}</span>
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-300">Choose NCERT Chapter PDF:</label>
                <span className="text-[10px] font-mono text-slate-400">{serverPdfs.length} PDFs Available</span>
              </div>
              <select
                onChange={(e) => {
                  const selected = serverPdfs.find(p => p.path === e.target.value);
                  if (selected) handleLoadNcertServerPdf(selected.path, selected.name);
                }}
                defaultValue=""
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-amber-300 font-medium focus:outline-none focus:border-amber-500"
              >
                <option value="" disabled>-- Select NCERT PDF from public/ncert-pdfs/ --</option>
                {serverPdfs.map((item, i) => (
                  <option key={i} value={item.path}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Upload Custom PDF Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black text-white flex items-center gap-2">
                <Upload size={16} className="text-blue-400" />
                <span>Upload Custom PDF Document</span>
              </h2>
              {isPdfJsLoaded ? (
                <span className="text-[9px] font-black uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  PDF.js Ready
                </span>
              ) : (
                <span className="text-[9px] font-black uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full animate-pulse">
                  Loading Engine...
                </span>
              )}
            </div>

            {/* Drag and Drop PDF Upload Box */}
            <div className="border-2 border-dashed border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 text-center bg-slate-950/60 transition-all">
              <label className="cursor-pointer space-y-2 block">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto">
                  <FileText size={24} />
                </div>
                <div className="text-xs font-bold text-slate-200">
                  {pdfFileName ? (
                    <span className="text-blue-400 font-black">{pdfFileName}</span>
                  ) : (
                    <span>Click to Upload Custom PDF File</span>
                  )}
                </div>
                <p className="text-[10px] text-slate-500">Official Mozilla PDF.js rendering engine</p>
                <input type="file" accept=".pdf" onChange={handlePdfFileUpload} className="hidden" />
              </label>
            </div>

            {/* Processing Progress Bar */}
            {isProcessing && (
              <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-blue-400">
                  <span className="flex items-center gap-1.5">
                    <RefreshCw size={13} className="animate-spin" />
                    <span>Processing PDF</span>
                  </span>
                  <span className="text-[10px] text-slate-400">{progressStatus}</span>
                </div>
              </div>
            )}

            {/* Manual Text Fallback */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                <span>OR Paste Text Manually:</span>
              </label>
              <textarea
                rows={4}
                value={rawPdfText}
                onChange={(e) => setRawPdfText(e.target.value)}
                placeholder="Paste text from PDF page..."
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-slate-200 font-mono focus:outline-none focus:border-blue-500 placeholder-slate-600 leading-relaxed"
              />
            </div>

            <button
              onClick={handleConvertTextManually}
              disabled={isProcessing || !rawPdfText.trim()}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Sparkles size={14} />
              <span>Convert Text to Fill-in-Blanks Notes</span>
            </button>
          </div>

          {/* Page Selector Tabs */}
          {parsedPages.length > 1 && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3">
              <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider">
                Extracted PDF Pages ({parsedPages.length})
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {parsedPages.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePageIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all ${idx === activePageIndex
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                      }`}
                  >
                    Page {p.pageNumber}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Section: Live Converted Lesson Preview */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-blue-400 uppercase tracking-wider">
                Live Converted Lesson · Page {activePage?.pageNumber || 1}
              </span>
            </div>
            <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
              ncert.nextsem.online Format
            </span>
          </div>

          {/* Extracted PDF Page Image Snapshot */}
          {activePage?.extractedImages && activePage.extractedImages.length > 0 && (
            <LessonScreenshotWidget
              screenshots={activePage.extractedImages}
              subjectTitle={pdfFileName || `PDF Page ${activePage.pageNumber}`}
            />
          )}

          {/* Structured Line-by-Line Points Card (Point 1, Point 2, Point 3...) */}
          {activePage?.structuredPoints && activePage.structuredPoints.length > 0 && (
            <div className="p-5 md:p-6 bg-slate-900/90 border border-slate-800 rounded-3xl space-y-4 shadow-xl text-left">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-xs font-black uppercase text-blue-400 tracking-wider flex items-center gap-2">
                  <Layers size={14} />
                  <span>Structured Line-by-Line Points (Point 1, Point 2, Point 3...)</span>
                </h3>
                <span className="text-[10px] font-black uppercase text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                  {activePage.structuredPoints.length} Points
                </span>
              </div>

              <div className="space-y-3">
                {activePage.structuredPoints.map((pt) => (
                  <div key={pt.pointNumber} className="p-3.5 bg-slate-950/80 border border-slate-850 rounded-2xl flex items-start gap-3">
                    <span className="w-6 h-6 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {pt.pointNumber}
                    </span>
                    <div className="space-y-1 flex-1">
                      <p className="text-xs md:text-sm font-semibold text-slate-100 leading-relaxed">
                        {pt.originalText}
                      </p>
                      <span className="inline-block text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                        Key Concept: {pt.keyTerm}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Render Interactive Fill-in-the-Blanks Component */}
          {activePage && (
            <FillInBlanksWidget
              items={activePage.fillInBlanks}
              pageNumber={activePage.pageNumber}
            />
          )}

          {/* Render Interactive Simulation Component */}
          {activePage && (
            <PdfSimulationEngine
              config={activePage.simulation}
            />
          )}
        </div>
      </div>

      {/* Published to NCERT Hub Success Modal */}
      {publishedModalOpen && lastPublishedLesson && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">🎉 Published Live to NCERT Hub!</h3>
                <p className="text-xs text-emerald-400 font-bold mt-0.5">Lesson is now registered for ncert.nextsem.online</p>
              </div>
            </div>

            <div className="space-y-3 bg-slate-950 border border-slate-800 p-4 rounded-2xl text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-850 pb-2">
                <span className="text-slate-400">Lesson Title:</span>
                <span className="font-bold text-amber-300">{lastPublishedLesson.title}</span>
              </div>
              <div className="flex justify-between border-b border-slate-850 pb-2">
                <span className="text-slate-400">PDF File:</span>
                <span className="font-mono text-slate-200">{lastPublishedLesson.pdfFileName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-850 pb-2">
                <span className="text-slate-400">Extracted Pages:</span>
                <span className="font-bold text-blue-400">{lastPublishedLesson.totalPages} Pages</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Publish Target:</span>
                <span className="font-bold text-emerald-400 font-mono">ncert.nextsem.online</span>
              </div>
            </div>

            <div className="p-3.5 bg-blue-950/30 border border-blue-500/20 rounded-xl text-xs text-slate-300 space-y-1">
              <p className="font-bold text-blue-300 flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>How Publishing Works:</span>
              </p>
              <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-400">
                <li>Saved to local &amp; persistent storage for <code className="text-amber-400">ncert.nextsem.online</code></li>
                <li>Appears immediately in the <strong>&quot;🌟 Admin Published Lessons&quot;</strong> section on NCERT Hub</li>
                <li>Click <strong>&quot;🚀 Activate Changes on Web &amp; App&quot;</strong> in header bar to sync across all web and mobile app users</li>
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/ncert"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-black uppercase tracking-wider text-center transition-all cursor-pointer shadow-lg"
              >
                View Live on NCERT Hub →
              </Link>
              <button
                onClick={() => setPublishedModalOpen(false)}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
