"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowLeft, Download, ExternalLink, RefreshCw,
  AlertTriangle, BookOpen, Wifi, WifiOff, Loader2,
  Menu, X, ChevronRight, FileText
} from 'lucide-react';
import { ncertSubjects, NcertSubject, NcertUnit } from '@/data/ncertCoursesData';

// ── Utility: check if a URL is reachable ─────────────────────────
async function isUrlReachable(url: string, timeoutMs = 4000): Promise<boolean> {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    // Use no-cors so we don't get blocked by CORS – we only care if it responds
    await fetch(url, { method: 'HEAD', signal: controller.signal, mode: 'no-cors' });
    clearTimeout(id);
    return true;
  } catch {
    return false;
  }
}

type PdfSource = 'checking' | 'ncert' | 'local' | 'unavailable';

function NcertPdfViewerContent() {
  const searchParams = useSearchParams();

  // URL-driven defaults
  const initialUrl = searchParams.get('url') || '';
  const initialFallback = searchParams.get('fallback') || '';
  const initialTitle = searchParams.get('title') || '';
  const initialSubject = searchParams.get('subject') || '';
  const initialColor = searchParams.get('color') || '#3b82f6';

  // Find first unit in database as absolute fallback
  const firstSubject = ncertSubjects[0];
  const firstBlock = firstSubject?.blocks[0];
  const firstUnit = firstBlock?.units[0];

  // State for active loaded unit details
  const [activeUnit, setActiveUnit] = useState<NcertUnit>(() => {
    if (initialUrl && initialTitle) {
      return {
        fileName: initialFallback,
        displayName: initialTitle,
        noteKey: '',
        ncertPdfUrl: initialUrl,
        localPdfPath: initialFallback
      };
    }
    return firstUnit || {
      fileName: 'kacc101.pdf',
      displayName: 'Unit 1: Introduction to Accounting',
      noteKey: 'accounting-chapter-1',
      ncertPdfUrl: 'https://ncert.nic.in/textbook/pdf/kacc101.pdf',
      localPdfPath: 'kacc101.pdf'
    };
  });

  const [activeSubject, setActiveSubject] = useState<NcertSubject>(() => {
    if (initialSubject) {
      const found = ncertSubjects.find(s => s.code.toLowerCase().startsWith(initialSubject.toLowerCase()));
      if (found) return found;
    }
    return firstSubject;
  });

  const [source, setSource] = useState<PdfSource>('checking');
  const [pdfUrl, setPdfUrl] = useState('');
  const [iframeKey, setIframeKey] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [classFilter, setClassFilter] = useState<'all' | '11' | '12'>('all');

  const localUrl = activeUnit.localPdfPath ? `/ncert-pdfs/${activeUnit.localPdfPath}` : '';

  // ── Determine best PDF source on active unit change ───────────────
  useEffect(() => {
    if (!activeUnit.ncertPdfUrl) {
      setSource('unavailable');
      return;
    }

    setSource('checking');
    isUrlReachable(activeUnit.ncertPdfUrl).then(online => {
      if (online) {
        setSource('ncert');
        setPdfUrl(`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(activeUnit.ncertPdfUrl)}`);
      } else if (localUrl) {
        setSource('local');
        setPdfUrl(localUrl);
      } else {
        setSource('unavailable');
      }
    });
  }, [activeUnit, localUrl]);

  // ── Retry handler ─────────────────────────────────────────────────
  const retry = () => {
    setSource('checking');
    setPdfUrl('');
    isUrlReachable(activeUnit.ncertPdfUrl).then(online => {
      if (online) {
        setSource('ncert');
        setPdfUrl(`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(activeUnit.ncertPdfUrl)}`);
      } else if (localUrl) {
        setSource('local');
        setPdfUrl(localUrl);
      } else {
        setSource('unavailable');
      }
      setIframeKey(k => k + 1);
    });
  };

  // ── Manual Source Toggles ─────────────────────────────────────────
  const useLocal = () => {
    if (localUrl) {
      setSource('local');
      setPdfUrl(localUrl);
      setIframeKey(k => k + 1);
    }
  };

  const useLive = () => {
    if (activeUnit.ncertPdfUrl) {
      setSource('ncert');
      setPdfUrl(`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(activeUnit.ncertPdfUrl)}`);
      setIframeKey(k => k + 1);
    }
  };

  const selectUnit = (unit: NcertUnit, subject: NcertSubject) => {
    setActiveUnit(unit);
    setActiveSubject(subject);
    setSidebarOpen(false);
  };

  const statusBadge = {
    checking:    { icon: <Loader2 size={9} className="animate-spin" />, label: 'Checking…',      cls: 'text-slate-400 bg-slate-800/60 border-slate-700' },
    ncert:       { icon: <Wifi size={9} />,                              label: 'Live · NCERT',   cls: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25' },
    local:       { icon: <WifiOff size={9} />,                           label: 'Local Backup',   cls: 'text-amber-400 bg-amber-500/10 border-amber-500/25' },
    unavailable: { icon: <AlertTriangle size={9} />,                     label: 'Unavailable',    cls: 'text-red-400 bg-red-500/10 border-red-500/25' },
  }[source];

  const rawDownloadUrl = source === 'ncert' ? activeUnit.ncertPdfUrl : localUrl;

  const filteredSubjects = ncertSubjects.filter(s => {
    if (classFilter === '11') return s.class.includes('11');
    if (classFilter === '12') return s.class.includes('12');
    return true;
  });

  return (
    <div className="w-full h-screen bg-[#07070c] text-white flex font-sans overflow-hidden relative">

      {/* ── LEFT SIDEBAR (Subject & Chapter Selector) ────────────────── */}
      <aside className={`w-72 md:w-80 shrink-0 bg-[#0a0a14] border-r border-white/5 flex flex-col h-full z-45 transition-transform duration-300 md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0 absolute left-0 top-0 bottom-0' : '-translate-x-full absolute md:relative'
      }`}>
        {/* Header */}
        <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#0e0e1a]/80">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-blue-455" />
            <span className="text-xs font-black uppercase tracking-widest text-slate-200">Textbooks Library</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="p-1 hover:bg-slate-900 rounded-lg md:hidden text-slate-400">
            <X size={15} />
          </button>
        </div>

        {/* Class Filter Tab */}
        <div className="p-3 border-b border-white/5 flex gap-1.5 bg-[#0e0e1a]/40">
          {(['all', '11', '12'] as const).map(tab => (
            <button key={tab} onClick={() => setClassFilter(tab)}
              className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                classFilter === tab
                  ? 'bg-blue-650 bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900 border border-white/5 text-slate-400 hover:text-white'
              }`}>
              {tab === 'all' ? 'All' : `${tab}th`}
            </button>
          ))}
        </div>

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 custom-scrollbar">
          {filteredSubjects.map(subject => (
            <div key={subject.code} className="space-y-1.5">
              {/* Subject Title Header */}
              <div className="flex items-center justify-between px-2 py-1 select-none">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="text-xs">{subject.emoji}</span>
                  {subject.name.split(' — ')[0].split(' - ')[0]}
                </span>
                <span className="text-[8px] font-bold text-slate-650 bg-slate-950/60 border border-white/5 px-1.5 py-0.5 rounded-md">
                  Class {subject.class.split(' ')[0]}
                </span>
              </div>

              {/* Chapters list */}
              <div className="space-y-1 pl-2">
                {subject.blocks.flatMap(b => b.units).map(unit => {
                  const isActive = activeUnit.displayName === unit.displayName;
                  return (
                    <div key={unit.displayName}
                      onClick={() => selectUnit(unit, subject)}
                      className={`group flex items-center justify-between px-3 py-2 rounded-xl text-[10px] font-bold cursor-pointer transition-all hover:bg-white/5 ${
                        isActive
                          ? 'bg-[#121222]/90 border border-blue-500/25 text-blue-450 font-black shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}>
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText size={11} className={isActive ? "text-blue-450" : "text-slate-605"} />
                        <span className="truncate pr-1 leading-snug">{unit.displayName.split(': ').slice(-1)[0]}</span>
                      </div>
                      <ChevronRight size={10} className={`shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'text-blue-450' : 'text-slate-605'}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="p-3 border-t border-white/5 bg-[#0e0e1a]/80">
          <Link href="/ncert" className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-slate-900 border border-white/5 hover:border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-white transition-all">
            <ArrowLeft size={12} />
            Back to NCERT Hub
          </Link>
        </div>
      </aside>

      {/* Backdrop overlay for mobile sidebar */}
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 md:hidden" />
      )}

      {/* ── CENTRAL VIEWER AREA ─────────────────────────────────────── */}
      <main className="flex-1 flex flex-col h-full bg-[#0a0a12] relative overflow-hidden min-w-0">

        {/* Top bar */}
        <header className="h-14 shrink-0 border-b border-white/5 bg-[#0a0a12]/95 backdrop-blur-md flex items-center justify-between px-4 gap-3 z-50">
          
          {/* Left: Hamburger menu (mobile) + Title Info */}
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={() => setSidebarOpen(true)}
              className="p-1.5 hover:bg-slate-900 rounded-lg md:hidden text-slate-400 hover:text-white shrink-0 cursor-pointer">
              <Menu size={18} />
            </button>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border text-sm"
              style={{ backgroundColor: `${activeSubject.color}15`, borderColor: `${activeSubject.color}25` }}>
              {activeSubject.emoji}
            </div>
            <div className="min-w-0 text-left">
              <h1 className="text-xs font-black text-white truncate leading-tight">{activeUnit.displayName}</h1>
              <p className="text-[9px] text-slate-500 font-bold leading-none mt-0.5">NCERT {activeSubject.class}</p>
            </div>
          </div>

          {/* Right: Badge + Actions */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Source status badge */}
            <div className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${statusBadge.cls}`}>
              {statusBadge.icon}
              {statusBadge.label}
            </div>

            {/* Manual Toggle Switch */}
            {source === 'ncert' && localUrl && (
              <button onClick={useLocal}
                className="px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-amber-500/20 bg-amber-500/10 text-amber-450 hover:bg-amber-500/25 transition-all cursor-pointer">
                Use Local Copy
              </button>
            )}
            {source === 'local' && activeUnit.ncertPdfUrl && (
              <button onClick={useLive}
                className="px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-500/20 bg-emerald-500/10 text-emerald-450 hover:bg-emerald-500/25 transition-all cursor-pointer">
                Use Live NCERT
              </button>
            )}

            {/* Retry */}
            <button onClick={retry} title="Retry"
              className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-400 hover:text-white transition-all cursor-pointer border border-white/5">
              <RefreshCw size={13} />
            </button>

            {/* External Direct Link */}
            {activeUnit.ncertPdfUrl && (
              <a href={activeUnit.ncertPdfUrl} target="_blank" rel="noopener noreferrer" title="Open directly on NCERT.nic.in"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-400 hover:text-white transition-all border border-white/5">
                <ExternalLink size={13} />
              </a>
            )}

            {/* Download */}
            {rawDownloadUrl && source !== 'unavailable' && (
              <a href={rawDownloadUrl} download={`${activeUnit.displayName}.pdf`} title="Download PDF to device" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider border border-white/5 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white transition-all">
                <Download size={11} /> Download
              </a>
            )}
          </div>
        </header>

        {/* PDF viewer area */}
        <div className="flex-1 relative min-h-0 bg-[#111114]">

          {/* Checking */}
          {source === 'checking' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#07070c] z-20">
              <div className="w-12 h-12 border-4 border-t-blue-500 border-slate-800 rounded-full animate-spin" />
              <div className="text-center">
                <p className="text-white font-black text-sm">Connecting to NCERT…</p>
                <p className="text-slate-500 text-xs mt-1">Checking server availability</p>
              </div>
            </div>
          )}

          {/* Unavailable */}
          {source === 'unavailable' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-[#07070c] z-20 px-6">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <AlertTriangle size={28} className="text-red-400" />
              </div>
              <div className="text-center max-w-md">
                <h2 className="text-white font-black text-lg mb-2">PDF Offline</h2>
                <p className="text-slate-400 text-sm leading-relaxed text-center">
                  The NCERT server is offline and no local backup copy has been created yet.
                  You can try again or open the official site directly:
                </p>
              </div>
              <div className="flex gap-3 flex-wrap justify-center">
                <button onClick={retry}
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-black text-sm rounded-xl transition-all cursor-pointer border border-white/5">
                  <RefreshCw size={14} /> Retry
                </button>
                {activeUnit.ncertPdfUrl && (
                  <a href={activeUnit.ncertPdfUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 text-white font-black text-sm rounded-xl"
                    style={{ backgroundColor: activeSubject.color }}>
                    <ExternalLink size={14} /> Open on NCERT
                  </a>
                )}
              </div>
            </div>
          )}

          {/* PDF iframe */}
          {(source === 'ncert' || source === 'local') && pdfUrl && (
            <iframe
              key={iframeKey}
              src={pdfUrl}
              className="w-full h-full border-0"
              title={activeUnit.displayName}
            />
          )}
        </div>

        {/* Bottom bar */}
        {source !== 'unavailable' && (
          <div className="h-8 shrink-0 bg-[#0a0a12]/80 border-t border-white/5 flex items-center justify-between px-4">
            <span className="text-[9px] text-slate-600 font-bold">
              📄 NCERT textbooks are copyrighted © NCERT. Provided for educational revision reference only.
            </span>
            <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer"
              className="text-[9px] text-slate-600 hover:text-slate-400 font-bold transition-colors">
              ncert.nic.in →
            </a>
          </div>
        )}
      </main>
    </div>
  );
}

export default function NcertPdfViewerPage() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen bg-[#07070c] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-blue-500 border-slate-800 rounded-full animate-spin" />
      </div>
    }>
      <NcertPdfViewerContent />
    </Suspense>
  );
}
