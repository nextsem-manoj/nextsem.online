"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Download, Terminal, ShieldCheck, Zap, Trash2, BellOff, 
  Gamepad2, Gauge, Check, Copy, AlertTriangle, ExternalLink,
  ChevronRight, Laptop, Sparkles, RefreshCw
} from 'lucide-react';

export default function WinFastClient() {
  const [copied, setCopied] = useState(false);

  const command = "irm https://nextsem.online/tools/WinFast.ps1 | iex";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#17181c] text-slate-100 flex flex-col font-sans selection:bg-[#04AA6D] selection:text-white">
      {/* 1. Header & Breadcrumbs */}
      <header className="border-b border-white/10 bg-[#0c1328]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#04AA6D] to-emerald-700 flex items-center justify-center font-extrabold text-white shadow-lg shadow-emerald-500/20">
              NS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base leading-tight tracking-tight">NextSem</span>
              <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">Tools & Open Source</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <a 
              href="/downloads/WinFast11.exe" 
              download 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <Download size={16} />
              <span>Download .EXE</span>
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb Trail */}
      <nav className="bg-[#0c1328]/40 border-b border-white/5 py-2.5 px-4" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span>🏠 Home</span>
          </Link>
          <ChevronRight size={13} className="text-slate-600" />
          <span className="text-slate-400">Tools</span>
          <ChevronRight size={13} className="text-slate-600" />
          <span className="text-white font-bold text-emerald-400">WinFast 11 Optimizer</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 w-full space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 pt-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
            <Sparkles size={14} />
            <span>v1.0.0 High Performance Edition • 100% Free & Open Source</span>
          </div>

          <div className="flex justify-center py-2">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl p-1 bg-gradient-to-br from-cyan-400/30 via-emerald-500/40 to-transparent shadow-2xl shadow-emerald-500/20">
              <img 
                src="/images/win11_speedup_icon.png" 
                alt="WinFast 11 Official Icon" 
                className="w-full h-full object-contain rounded-2xl drop-shadow-md"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WinFast 11 — Ultimate Windows 11 Speedup Suite
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Make your Windows 11 lightning fast with zero risk. Automatically clears hidden cache junk, terminates background telemetry & ad tracking, and unlocks the hidden <strong className="text-white">Ultimate Performance</strong> profile in just 1 click.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a 
              href="/downloads/WinFast11.exe" 
              download 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#04AA6D] hover:bg-[#039861] text-white font-bold text-base shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <Download size={20} />
              <span>Download WinFast11.exe (17 KB)</span>
            </a>

            <a 
              href="/downloads/WinFast11-v1.0.0.zip" 
              download 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/15 transition-all hover:border-white/30"
            >
              <Laptop size={18} />
              <span>Download Full Zip (.zip)</span>
            </a>
          </div>

          {/* Quick Notice */}
          <div className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Zero Bloatware • Auto System Restore Point Guarantee • Developed by Manoj</span>
          </div>
        </div>

        {/* 1-Line PowerShell Command Box */}
        <div className="bg-[#0c1328] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Terminal size={20} className="text-emerald-400" />
              <h2 className="text-lg font-bold text-white">Instant One-Liner (No Download Required)</h2>
            </div>
            <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-slate-300 font-medium hidden sm:inline-block">PowerShell (Admin)</span>
          </div>

          <p className="text-sm text-slate-300">
            Don&apos;t want to download any files? Open <strong className="text-white">PowerShell as Administrator</strong> (Win + X &rarr; Terminal/PowerShell as Admin) and paste this single command:
          </p>

          <div className="relative flex items-center justify-between bg-black/60 border border-white/10 rounded-xl p-3.5 sm:p-4 font-mono text-sm overflow-x-auto text-emerald-400">
            <span className="truncate pr-4">{command}</span>
            <button 
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold transition-all shrink-0"
              title="Copy Command"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? "Copied!" : "Copy Command"}</span>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">What WinFast 11 Does For Your PC</h2>
            <p className="text-sm text-slate-400">Every optimization is safe, tested, and reversible with 1-click restore points.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Feature 1 */}
            <div className="bg-[#0c1328]/60 border border-white/10 rounded-2xl p-5 space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Auto Restore Point</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Automatically creates a Windows System Restore Point (<code className="text-xs text-emerald-300 bg-white/5 px-1 py-0.5 rounded">WinFast11_BeforeOptimization</code>) before touching any settings. 100% risk-free.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#0c1328]/60 border border-white/10 rounded-2xl p-5 space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Trash2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Deep Junk & Cache Purge</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Cleans gigabytes of obsolete temporary files, Prefetch caches, temporary Windows Update downloads, and empties the Recycle Bin to reclaim storage.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0c1328]/60 border border-white/10 rounded-2xl p-5 space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <BellOff size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Disable Telemetry & Tracking</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Halts background diagnostic reporting (<code className="text-xs text-red-300 bg-white/5 px-1 py-0.5 rounded">DiagTrack</code>), ad ID tracking, and Cortana background processes to free up RAM & CPU threads.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#0c1328]/60 border border-white/10 rounded-2xl p-5 space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Zap size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Ultimate Performance Plan</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unlocks and activates Windows hidden ultra-responsive power profile, eliminating micro-stutters during heavy gaming and development multitasking.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#0c1328]/60 border border-white/10 rounded-2xl p-5 space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Gauge size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Fast 50ms UI Response</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reduces Explorer menu show delays down to 50ms and eliminates artificial Windows startup delays so apps launch instantaneously.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#0c1328]/60 border border-white/10 rounded-2xl p-5 space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Gamepad2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Game Mode & GPU Scheduling</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ensures Windows Hardware-Accelerated GPU Scheduling (HAGS) and Game Mode are properly prioritized for high FPS and lowest input latency.
              </p>
            </div>
          </div>
        </div>

        {/* How to Run / SmartScreen Guidance */}
        <div className="bg-[#0c1328]/70 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <Laptop size={22} className="text-emerald-400" />
            <span>How to Run (3 Steps)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="font-extrabold text-emerald-400 text-base">Step 1</div>
              <div className="font-bold text-white">Download or Paste</div>
              <p className="text-slate-300 text-xs">Download <code className="text-emerald-300">WinFast11.exe</code> or paste the one-line command in PowerShell.</p>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="font-extrabold text-emerald-400 text-base">Step 2</div>
              <div className="font-bold text-white">Launch as Admin</div>
              <p className="text-slate-300 text-xs">Double-click the .exe. When Windows asks for permission, click <strong className="text-white">Yes</strong>.</p>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="font-extrabold text-emerald-400 text-base">Step 3</div>
              <div className="font-bold text-white">Press 1 & Restart</div>
              <p className="text-slate-300 text-xs">In the color menu, press <strong className="text-white">1</strong> for Full Turbo Optimization. Restart PC to feel the speed boost!</p>
            </div>
          </div>

          {/* SmartScreen Tip Alert */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-slate-200">
            <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-amber-300">If Windows Defender SmartScreen Appears:</span>
              <p className="text-slate-300 text-xs leading-relaxed">
                As a newly released open-source tool, Windows SmartScreen may show an &quot;unrecognised app&quot; prompt. Simply click <strong className="text-white underline">More info</strong> &rarr; <strong className="text-white underline">Run anyway</strong>. The tool is 100% clean and transparent.
              </p>
            </div>
          </div>
        </div>

        {/* Author & Credits Box */}
        <div className="text-center py-6 border-t border-white/10 space-y-2">
          <p className="text-sm text-slate-300">
            Developed by <strong className="text-white">Manoj</strong> • Published by <strong className="text-white">NextSem Academy</strong>
          </p>
          <p className="text-xs text-slate-500">
            Distributed under the MIT Open Source License. Free to use, inspect, and share.
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0c1328] py-8 text-center text-xs text-slate-400 space-y-3">
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">About NextSem</Link>
          <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Support</Link>
        </div>
        <p className="text-slate-500">
          © {new Date().getFullYear()} NextSem Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
