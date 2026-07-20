"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import { 
  FileText, Upload, Copy, Download, Check, Sparkles, 
  ArrowLeft, RefreshCw, Eye, Code, FileCode, AlertCircle, BookOpen
} from "lucide-react";
import AdSenseBanner from "./AdSenseBanner";

declare global {
  interface Window {
    pdfjsLib: any;
  }
}

export default function PdfToMarkdownConverter() {
  const [pdfLibLoaded, setPdfLibLoaded] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progressText, setProgressText] = useState("");
  const [markdown, setMarkdown] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "raw">("preview");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
      setPdfLibLoaded(true);
    }
  }, []);

  const handleScriptLoad = () => {
    if (window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
      setPdfLibLoaded(true);
    }
  };

  const processPdfFile = async (pdfFile: File) => {
    if (!window.pdfjsLib) {
      alert("PDF processing library is still loading. Please try again in a moment.");
      return;
    }

    setIsProcessing(true);
    setProgressText("Reading PDF file bytes...");
    setFile(pdfFile);

    try {
      const arrayBuffer = await pdfFile.arrayBuffer();
      const loadingTask = window.pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;

      let fullMarkdown = `# ${pdfFile.name.replace(/\.pdf$/i, "")}\n\n`;
      fullMarkdown += `> Extracted from **${pdfFile.name}** (${pdf.numPages} pages)\n\n---\n\n`;

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        setProgressText(`Processing page ${pageNum} of ${pdf.numPages}...`);
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        
        let lastY: number | null = null;
        let pageText = "";

        for (const item of textContent.items) {
          if ("str" in item) {
            const str = item.str;
            const y = item.transform ? item.transform[5] : null;

            // Detect newline based on Y coordinate shift
            if (lastY !== null && y !== null && Math.abs(y - lastY) > 6) {
              pageText += "\n";
            }
            pageText += str + " ";
            if (y !== null) lastY = y;
          }
        }

        // Format extracted page text into structured Markdown
        const formattedPage = formatRawTextToMarkdown(pageText, pageNum);
        fullMarkdown += formattedPage + "\n\n---\n\n";
      }

      setMarkdown(fullMarkdown.trim());
    } catch (err: any) {
      console.error("PDF Parsing Error:", err);
      alert("Error parsing PDF: " + (err.message || "Failed to extract text. Make sure the file is a valid PDF document."));
    } finally {
      setIsProcessing(false);
      setProgressText("");
    }
  };

  // Convert raw PDF page string into clean Markdown
  const formatRawTextToMarkdown = (text: string, pageNum: number): string => {
    const lines = text.split("\n");
    let result: string[] = [`### 📄 Page ${pageNum}\n`];

    for (let line of lines) {
      let trimmed = line.trim();
      if (!trimmed) continue;

      // Filter header/footer line noise (e.g. pure page numbers)
      if (/^\d+$/.test(trimmed) && trimmed.length <= 3) continue;

      // Heading detection: short lines starting with numbers/capitals or uppercase
      if (trimmed.length < 60 && (
        /^(Unit|Chapter|Module|Section|\d+\.|\d+\:\s*)[A-Z]/i.test(trimmed) ||
        (trimmed === trimmed.toUpperCase() && trimmed.length > 5 && !trimmed.includes("."))
      )) {
        result.push(`## ${trimmed}`);
        continue;
      }

      // Sub-heading detection
      if (trimmed.length < 50 && /^\d+\.\d+\s+[A-Z]/.test(trimmed)) {
        result.push(`### ${trimmed}`);
        continue;
      }

      // Bullet lists
      if (/^[\bullet\-\*•]\s+/.test(trimmed)) {
        result.push(`* ${trimmed.replace(/^[\bullet\-\*•]\s+/, "")}`);
        continue;
      }

      // Numbered lists
      if (/^\d+[\.\)]\s+/.test(trimmed)) {
        result.push(trimmed);
        continue;
      }

      // Code-like snippets
      if (/^(function|const|let|var|class|import|export|<!DOCTYPE|<html|<div|cmd>|C:\\)/i.test(trimmed)) {
        result.push(`\`\`\`\n${trimmed}\n\`\`\``);
        continue;
      }

      // Highlight bold keywords e.g. "Note:", "Important:"
      trimmed = trimmed.replace(/^(Note|Important|Warning|Tip|Key Point)\:/i, "**$1:**");

      result.push(trimmed);
    }

    return result.join("\n\n");
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === "application/pdf" || droppedFile.name.endsWith(".pdf")) {
        processPdfFile(droppedFile);
      } else {
        alert("Please upload a valid PDF file.");
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processPdfFile(e.target.files[0]);
    }
  };

  const handleCopyMarkdown = () => {
    if (!markdown) return;
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    if (!markdown) return;
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const exportName = file ? file.name.replace(/\.pdf$/i, ".md") : "extracted_notes.md";
    link.setAttribute("download", exportName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 md:px-8 max-w-[1400px] mx-auto">
      {/* Load PDF.js from CDN */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js" 
        onLoad={handleScriptLoad}
      />

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/60 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <FileCode size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                Developer Tool
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-black text-white mt-1">
              PDF to Markdown (.md) Converter
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              Upload PDF textbooks, notes, or slides and convert them into structured `.md` files for Nextsem Academy.
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold transition-all w-fit"
        >
          <ArrowLeft size={14} />
          <span>Dashboard</span>
        </Link>
      </div>

      {/* File Upload Dropzone */}
      <div 
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        onClick={() => fileInputRef.current?.click()}
        className="relative border-2 border-dashed border-slate-800 hover:border-indigo-500/50 bg-slate-950/40 rounded-3xl p-8 md:p-12 text-center transition-all cursor-pointer group backdrop-blur-xl mb-8 overflow-hidden"
      >
        <input 
          ref={fileInputRef}
          type="file" 
          accept=".pdf,application/pdf"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
            {isProcessing ? (
              <RefreshCw size={28} className="animate-spin text-indigo-400" />
            ) : (
              <Upload size={28} />
            )}
          </div>

          {isProcessing ? (
            <div className="space-y-1">
              <span className="text-sm font-black text-white">{progressText}</span>
              <p className="text-xs text-slate-400">Extracting text & formatting headings into Markdown...</p>
            </div>
          ) : (
            <>
              <div>
                <span className="text-sm font-black text-white block">
                  {file ? `Uploaded: ${file.name}` : "Drag & Drop your PDF file here"}
                </span>
                <span className="text-xs text-slate-400 mt-1 block font-semibold">
                  or <span className="text-indigo-400 hover:underline">browse file</span> from your computer
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">
                Supports PDF textbooks, course notes, slide decks &amp; NCERT chapters
              </span>
            </>
          )}
        </div>
      </div>

      {/* Markdown Results Workspace */}
      {markdown && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Action Toolbar */}
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 backdrop-blur-xl">
            {/* View Mode Tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800/60 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "preview"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Eye size={14} />
                <span>Formatted Preview</span>
              </button>
              <button
                onClick={() => setActiveTab("raw")}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "raw"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Code size={14} />
                <span>Raw .md Text</span>
              </button>
            </div>

            {/* Copy & Download Actions */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyMarkdown}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold border border-slate-700 transition-all cursor-pointer active:scale-95"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied!" : "Copy .md"}</span>
              </button>
              <button
                onClick={handleDownloadMarkdown}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-all cursor-pointer active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                <Download size={14} />
                <span>Download .md File</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          {activeTab === "preview" ? (
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-3xl p-6 md:p-10 backdrop-blur-xl text-left shadow-2xl overflow-x-auto">
              <article className="prose prose-invert prose-blue max-w-none text-sm md:text-base leading-relaxed">
                {markdown.split("\n\n").map((paragraph, idx) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  if (trimmed.startsWith("# ")) {
                    return <h1 key={idx} className="text-2xl md:text-3xl font-black text-white border-b border-slate-800 pb-2 mb-4">{trimmed.replace("# ", "")}</h1>;
                  }
                  if (trimmed.startsWith("## ")) {
                    return <h2 key={idx} className="text-lg md:text-xl font-bold text-indigo-400 mt-6 mb-3 flex items-center gap-2">{trimmed.replace("## ", "")}</h2>;
                  }
                  if (trimmed.startsWith("### ")) {
                    return <h3 key={idx} className="text-base font-bold text-emerald-400 mt-4 mb-2">{trimmed.replace("### ", "")}</h3>;
                  }
                  if (trimmed.startsWith("> ")) {
                    return (
                      <blockquote key={idx} className="border-l-4 border-indigo-500 bg-indigo-950/20 p-3 rounded-r-xl my-4 text-slate-300 font-medium">
                        {trimmed.replace("> ", "")}
                      </blockquote>
                    );
                  }
                  if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
                    return (
                      <li key={idx} className="ml-5 list-disc text-slate-300 my-1">
                        {trimmed.replace(/^[\*\-]\s+/, "")}
                      </li>
                    );
                  }

                  return <p key={idx} className="text-slate-350 leading-relaxed my-2.5 font-medium">{trimmed}</p>;
                })}
              </article>
            </div>
          ) : (
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 md:p-6 text-left shadow-2xl relative">
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="w-full h-[550px] bg-transparent text-emerald-400 font-mono text-xs md:text-sm focus:outline-none resize-y leading-relaxed font-semibold"
                placeholder="Markdown output will appear here..."
              />
            </div>
          )}
        </div>
      )}

      {/* Banner Ad */}
      <div className="mt-10">
        <AdSenseBanner />
      </div>
    </div>
  );
}
