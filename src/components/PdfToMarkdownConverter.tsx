"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import { 
  FileText, Upload, Copy, Download, Check, Sparkles, 
  ArrowLeft, RefreshCw, Eye, Code, FileCode, AlertCircle, 
  BookOpen, Layers, Zap, FileCheck, Image as ImageIcon, CheckSquare
} from "lucide-react";
import AdSenseBanner from "./AdSenseBanner";

declare global {
  interface Window {
    pdfjsLib: any;
    Tesseract: any;
  }
}

export default function PdfToMarkdownConverter() {
  const [pdfLibLoaded, setPdfLibLoaded] = useState(false);
  const [tesseractLoaded, setTesseractLoaded] = useState(false);
  
  const [file, setFile] = useState<File | null>(null);
  const [pdfObjectUrl, setPdfObjectUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progressText, setProgressText] = useState("");
  const [markdown, setMarkdown] = useState<string>("");
  const [copied, setCopied] = useState(false);
  
  // Options
  const [includePageImages, setIncludePageImages] = useState<boolean>(true);

  // Output Window View Tabs: "pdf" | "doc" | "md"
  const [activeOutputTab, setActiveOutputTab] = useState<"pdf" | "doc" | "md">("doc");
  const [selectedPdfPage, setSelectedPdfPage] = useState<number>(1);
  const [totalPdfPages, setTotalPdfPages] = useState<number>(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfRef = useRef<any>(null);

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

  const handleTesseractLoad = () => {
    setTesseractLoaded(true);
  };

  // Render PDF Page onto Canvas for the PDF Viewer Tab
  const renderPdfCanvas = async (pageNum: number) => {
    if (!pdfRef.current || !canvasRef.current) return;
    try {
      const page = await pdfRef.current.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.3 });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport }).promise;
      }
    } catch (e) {
      console.error("Canvas render error:", e);
    }
  };

  useEffect(() => {
    if (activeOutputTab === "pdf" && pdfRef.current) {
      renderPdfCanvas(selectedPdfPage);
    }
  }, [activeOutputTab, selectedPdfPage]);

  // High-Precision Extraction, Image Snapshot & OCR Algorithm
  const processPdfFile = async (pdfFile: File) => {
    if (!window.pdfjsLib) {
      alert("PDF processing engine is loading. Please try again in 3 seconds.");
      return;
    }

    setIsProcessing(true);
    setProgressText("Reading PDF document...");
    setFile(pdfFile);

    // Create object URL for native PDF preview tab
    if (pdfObjectUrl) URL.revokeObjectURL(pdfObjectUrl);
    const objUrl = URL.createObjectURL(pdfFile);
    setPdfObjectUrl(objUrl);

    try {
      const arrayBuffer = await pdfFile.arrayBuffer();
      const loadingTask = window.pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      pdfRef.current = pdf;
      setTotalPdfPages(pdf.numPages);
      setSelectedPdfPage(1);

      let fullMarkdown = `# ${pdfFile.name.replace(/\.pdf$/i, "")}\n\n`;
      fullMarkdown += `> Extracted with **High-Precision Layout & Diagram Preservation** (${pdf.numPages} pages)\n\n---\n\n`;

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        setProgressText(`Analyzing page ${pageNum} of ${pdf.numPages} (preserving text & diagrams)...`);
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        
        let pageLines: { text: string; fontSize: number; isBold: boolean; x: number; y: number }[] = [];

        // Render page image snapshot to preserve diagrams/figures 100% as-is
        let pageImgDataUrl = "";
        if (includePageImages) {
          try {
            const viewport = page.getViewport({ scale: 1.5 });
            const offCanvas = document.createElement("canvas");
            offCanvas.width = viewport.width;
            offCanvas.height = viewport.height;
            const ctx = offCanvas.getContext("2d");
            if (ctx) {
              await page.render({ canvasContext: ctx, viewport }).promise;
              pageImgDataUrl = offCanvas.toDataURL("image/png");
            }
          } catch (imgErr) {
            console.warn("Page image capture notice:", imgErr);
          }
        }

        // Track text items with exact X, Y coordinates & font metrics
        for (const item of textContent.items) {
          if ("str" in item && item.str.trim()) {
            const str = item.str;
            const transform = item.transform || [1, 0, 0, 1, 0, 0];
            const fontSize = Math.round(Math.abs(transform[0]) || Math.abs(transform[3]) || 12);
            const x = Math.round(transform[4]);
            const y = Math.round(transform[5]);
            const fontName = (item.fontName || "").toLowerCase();
            const isBold = fontName.includes("bold") || fontName.includes("black") || fontName.includes("heavy");

            pageLines.push({ text: str, fontSize, isBold, x, y });
          }
        }

        // If page has almost no text items (e.g. Scanned image PDF), trigger Tesseract.js OCR fallback!
        let pageMarkdown = "";
        if (pageLines.length < 5 && window.Tesseract) {
          setProgressText(`Running Tesseract OCR engine on scanned page ${pageNum}...`);
          try {
            if (pageImgDataUrl) {
              const ocrResult = await window.Tesseract.recognize(pageImgDataUrl, "eng");
              pageMarkdown = formatRawTextToMarkdown(ocrResult.data.text, pageNum);
            }
          } catch (ocrErr) {
            console.warn("OCR Fallback notice:", ocrErr);
          }
        }

        if (!pageMarkdown) {
          // Group lines by Y coordinates
          pageMarkdown = formatStructuredLinesToMarkdown(pageLines, pageNum);
        }

        // Append embedded page image snapshot if enabled
        if (pageImgDataUrl) {
          pageMarkdown += `\n\n![Page ${pageNum} Exact Image & Diagram Snapshot](${pageImgDataUrl})\n`;
        }

        fullMarkdown += pageMarkdown + "\n\n---\n\n";
      }

      setMarkdown(fullMarkdown.trim());
      setActiveOutputTab("doc"); // Switch to Converted Doc Viewer tab
    } catch (err: any) {
      console.error("PDF Parsing Error:", err);
      alert("Error parsing PDF: " + (err.message || "Failed to extract text. Make sure file is a valid PDF document."));
    } finally {
      setIsProcessing(false);
      setProgressText("");
    }
  };

  // Convert coordinate-grouped lines into clean Markdown headings, code, and paragraphs
  const formatStructuredLinesToMarkdown = (
    items: { text: string; fontSize: number; isBold: boolean; x: number; y: number }[],
    pageNum: number
  ): string => {
    if (items.length === 0) return `### 📄 Page ${pageNum}\n\n*(Visual diagram / figure content)*`;

    // Group items by Y coordinate (within 4px tolerance)
    const lineMap: Map<number, typeof items> = new Map();
    for (const item of items) {
      let matchedY: number | null = null;
      for (const yKey of lineMap.keys()) {
        if (Math.abs(yKey - item.y) <= 4) {
          matchedY = yKey;
          break;
        }
      }
      if (matchedY !== null) {
        lineMap.get(matchedY)!.push(item);
      } else {
        lineMap.set(item.y, [item]);
      }
    }

    // Sort line keys descending (top of page down to bottom)
    const sortedYKeys = Array.from(lineMap.keys()).sort((a, b) => b - a);

    let result: string[] = [`### 📄 Page ${pageNum}`];

    for (const yKey of sortedYKeys) {
      const lineItems = lineMap.get(yKey)!;
      // Sort line items horizontally (left to right)
      lineItems.sort((a, b) => a.x - b.x);

      const lineText = lineItems.map(i => i.text).join(" ").trim();
      if (!lineText) continue;

      // Filter out footer page numbers
      if (/^\d+$/.test(lineText) && lineText.length <= 3) continue;

      const avgFontSize = lineItems.reduce((acc, i) => acc + i.fontSize, 0) / lineItems.length;
      const isLineBold = lineItems.some(i => i.isBold);

      // Large Font -> H1 or H2 Heading
      if (avgFontSize >= 18 || (avgFontSize >= 15 && isLineBold)) {
        result.push(`## ${lineText}`);
        continue;
      }

      // Medium Font / Bold -> H3 Sub-heading
      if (avgFontSize >= 14 || (avgFontSize >= 12 && isLineBold && lineText.length < 60)) {
        result.push(`### ${lineText}`);
        continue;
      }

      // Bullet List detection
      if (/^[\bullet\-\*•]\s+/.test(lineText)) {
        result.push(`* ${lineText.replace(/^[\bullet\-\*•]\s+/, "")}`);
        continue;
      }

      // Numbered List detection
      if (/^\d+[\.\)]\s+/.test(lineText)) {
        result.push(lineText);
        continue;
      }

      // Code blocks detection
      if (/^(function|const|let|var|class|import|export|<!DOCTYPE|<html|<div|cmd>|C:\\)/i.test(lineText)) {
        result.push(`\`\`\`\n${lineText}\n\`\`\``);
        continue;
      }

      // Format bold lead terms e.g. "Note:", "Important:"
      let formattedLine = lineText.replace(/^(Note|Important|Warning|Tip|Definition)\:/i, "**$1:**");
      result.push(formattedLine);
    }

    return result.join("\n\n");
  };

  const formatRawTextToMarkdown = (text: string, pageNum: number): string => {
    const lines = text.split("\n");
    let result: string[] = [`### 📄 Page ${pageNum} (OCR)`];

    for (let line of lines) {
      let trimmed = line.trim();
      if (!trimmed) continue;
      if (/^\d+$/.test(trimmed) && trimmed.length <= 3) continue;

      if (trimmed.length < 60 && (/^(Chapter|Unit|Module|Section|\d+\.)/i.test(trimmed) || trimmed === trimmed.toUpperCase())) {
        result.push(`## ${trimmed}`);
        continue;
      }
      if (/^[\bullet\-\*•]\s+/.test(trimmed)) {
        result.push(`* ${trimmed.replace(/^[\bullet\-\*•]\s+/, "")}`);
        continue;
      }
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
      {/* External Scripts */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js" 
        onLoad={handleScriptLoad}
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js" 
        onLoad={handleTesseractLoad}
      />

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/60 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <FileCode size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles size={9} /> High-Precision OCR &amp; Diagram Preservation Engine
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-black text-white mt-1">
              PDF to Markdown (.md) Converter Studio
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              Upload PDF textbooks or notes. Extracts structured text &amp; preserves exact page diagrams and figures as images.
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

      {/* Conversion Settings Panel */}
      <div className="bg-slate-950/80 border border-slate-850 p-4 rounded-2xl mb-6 flex flex-wrap items-center justify-between gap-4">
        <label className="flex items-center gap-2.5 cursor-pointer text-xs font-bold text-slate-200">
          <input 
            type="checkbox"
            checked={includePageImages}
            onChange={(e) => setIncludePageImages(e.target.checked)}
            className="w-4 h-4 rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 bg-slate-900"
          />
          <span className="flex items-center gap-1.5">
            <ImageIcon size={14} className="text-indigo-400" />
            <span>Include Exact Page Diagram/Image Snapshots (Keep 100% Visual Consistency)</span>
          </span>
        </label>

        <span className="text-[10px] text-slate-400 font-mono">
          Engine: PDF.js + Tesseract OCR 5.0
        </span>
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
              <p className="text-xs text-slate-400">Performing optical coordinate positioning &amp; layout extraction...</p>
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
                Supports PDF textbooks, course notes, slide decks &amp; scanned NCERT chapters
              </span>
            </>
          )}
        </div>
      </div>

      {/* Output Window Workspace */}
      {markdown && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Output Window Header & 3 View Tabs */}
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3 backdrop-blur-xl">
            {/* 3 Main Output View Tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800/60 w-full md:w-auto">
              <button
                onClick={() => setActiveOutputTab("pdf")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeOutputTab === "pdf"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText size={14} />
                <span>📄 Uploaded PDF Viewer</span>
              </button>

              <button
                onClick={() => setActiveOutputTab("doc")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeOutputTab === "doc"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Eye size={14} />
                <span>👁️ Converted Doc Viewer</span>
              </button>

              <button
                onClick={() => setActiveOutputTab("md")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeOutputTab === "md"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/20 font-black"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Code size={14} />
                <span>📝 .md File Viewer</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <button
                onClick={handleCopyMarkdown}
                className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold border border-slate-700 transition-all cursor-pointer active:scale-95"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied!" : "Copy .md"}</span>
              </button>
              <button
                onClick={handleDownloadMarkdown}
                className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-all cursor-pointer active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                <Download size={14} />
                <span>Download .md File</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Uploaded PDF Viewer */}
          {activeOutputTab === "pdf" && (
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 md:p-6 text-left shadow-2xl space-y-4">
              {/* PDF Page Selector Toolbar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-300">
                  Document: <span className="text-indigo-400 font-mono">{file?.name}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPdfPage(p => Math.max(1, p - 1))}
                    disabled={selectedPdfPage <= 1}
                    className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300 disabled:opacity-30 cursor-pointer"
                  >
                    Prev Page
                  </button>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    Page {selectedPdfPage} of {totalPdfPages}
                  </span>
                  <button
                    onClick={() => setSelectedPdfPage(p => Math.min(totalPdfPages, p + 1))}
                    disabled={selectedPdfPage >= totalPdfPages}
                    className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300 disabled:opacity-30 cursor-pointer"
                  >
                    Next Page
                  </button>
                </div>
              </div>

              {/* Rendered PDF Canvas Display */}
              <div className="flex justify-center overflow-x-auto p-4 bg-slate-900/50 rounded-2xl border border-slate-850">
                <canvas ref={canvasRef} className="rounded-xl shadow-2xl border border-slate-800 max-w-full" />
              </div>
            </div>
          )}

          {/* TAB 2: Converted Doc Viewer */}
          {activeOutputTab === "doc" && (
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
                  if (trimmed.startsWith("![") && trimmed.includes("](data:image")) {
                    const match = trimmed.match(/!\[(.*?)\]\((data:image\/.*)\)/);
                    if (match) {
                      return (
                        <div key={idx} className="my-6 p-3 bg-slate-900/80 border border-slate-800 rounded-2xl text-center space-y-2">
                          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">{match[1]}</span>
                          <img src={match[2]} alt={match[1]} className="rounded-xl mx-auto max-h-[700px] border border-slate-800 shadow-xl" />
                        </div>
                      );
                    }
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
          )}

          {/* TAB 3: .md File Viewer */}
          {activeOutputTab === "md" && (
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 md:p-6 text-left shadow-2xl relative">
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-400 border-b border-slate-850 pb-2">
                <span>FILE: {file ? file.name.replace(/\.pdf$/i, ".md") : "notes.md"}</span>
                <span>GITHUB FLAVORED MARKDOWN</span>
              </div>
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                className="w-full h-[600px] bg-transparent text-emerald-400 font-mono text-xs md:text-sm focus:outline-none resize-y leading-relaxed font-semibold custom-scrollbar"
                placeholder="Markdown text output..."
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
