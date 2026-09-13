"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Copy, Check, Sparkles, Smartphone, Monitor, Palette, 
  Download, ExternalLink, Layers, ShieldCheck, Eye
} from "lucide-react";

export default function LogoThemeStudio() {
  const [selectedBg, setSelectedBg] = useState<string>("#17181c");
  const [selectedSize, setSelectedSize] = useState<number>(120);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const bgOptions = [
    { id: "charcoal", name: "Charcoal Dark", value: "#17181c", border: "border-emerald-500/40" },
    { id: "navy", name: "Deep Navy Space", value: "#0c1328", border: "border-blue-500/40" },
    { id: "pitch", name: "Pure Pitch Black", value: "#000000", border: "border-slate-700" },
    { id: "academic", name: "Deep Academic Navy", value: "#060c18", border: "border-amber-500/40" },
    { id: "light", name: "Print / Light", value: "#f8fafc", border: "border-slate-300", lightText: true },
  ];

  const logoVariants = [
    {
      id: "mark",
      title: "1. Signature NS Monogram Mark",
      badge: "Primary Brand Emblem",
      desc: "Used in header navigation, course cards, lesson watermarks, and favicon badges.",
      svg: `<svg viewBox="0 0 160 160" width="100%" height="100%">
  <defs>
    <linearGradient id="cardG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c1328"/>
      <stop offset="100%" stop-color="#060c18"/>
    </linearGradient>
    <linearGradient id="greenG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#04AA6D"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="152" height="152" rx="36" fill="url(#cardG)" stroke="#04AA6D" stroke-width="4"/>
  <rect x="12" y="12" width="136" height="136" rx="28" fill="none" stroke="#10b981" stroke-width="1" stroke-opacity="0.3"/>
  <path d="M 28 120 V 40 L 72 120 V 40" fill="none" stroke="url(#greenG)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 132 54 C 132 38, 92 38, 92 58 C 92 80, 132 80, 132 102 C 132 120, 92 120, 92 104" fill="none" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>
</svg>`,
      render: (
        <svg viewBox="0 0 160 160" style={{ width: selectedSize, height: selectedSize }} className="transition-all drop-shadow-[0_0_20px_rgba(4,170,109,0.35)]">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c1328"/>
              <stop offset="100%" stopColor="#060c18"/>
            </linearGradient>
            <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#04AA6D"/>
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="152" height="152" rx="36" fill="url(#g1)" stroke="#04AA6D" strokeWidth="4"/>
          <rect x="12" y="12" width="136" height="136" rx="28" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M 28 120 V 40 L 72 120 V 40" fill="none" stroke="url(#g2)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 132 54 C 132 38, 92 38, 92 58 C 92 80, 132 80, 132 102 C 132 120, 92 120, 92 104" fill="none" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: "full-horizontal",
      title: "2. Full Horizontal Brand Wordmark",
      badge: "Desktop Header & Marketing",
      desc: "Full logo featuring the icon mark, crisp white 'Next', and vibrant emerald green 'sem'.",
      svg: `<svg viewBox="0 0 540 120" width="100%" height="100%">
  <rect x="10" y="10" width="100" height="100" rx="24" fill="#0c1328" stroke="#04AA6D" stroke-width="3"/>
  <path d="M 28 85 V 35 L 56 85 V 35" fill="none" stroke="#04AA6D" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 94 44 C 94 34, 68 34, 68 47 C 68 60, 94 60, 94 74 C 94 86, 68 86, 68 76" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/>
  <text x="135" y="75" font-family="system-ui, sans-serif" font-size="54" font-weight="900" fill="#FFFFFF">Next</text>
  <text x="262" y="75" font-family="system-ui, sans-serif" font-size="54" font-weight="900" fill="#04AA6D">sem</text>
  <text x="138" y="100" font-family="monospace" font-size="13" font-weight="700" fill="#94a3b8" letter-spacing="2">100% FREE DEV BOOTCAMP</text>
</svg>`,
      render: (
        <svg viewBox="0 0 540 120" style={{ width: Math.min(selectedSize * 2.8, 380), height: "auto" }} className="transition-all drop-shadow-md">
          <rect x="10" y="10" width="100" height="100" rx="24" fill="#0c1328" stroke="#04AA6D" strokeWidth="3"/>
          <path d="M 28 85 V 35 L 56 85 V 35" fill="none" stroke="#04AA6D" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 94 44 C 94 34, 68 34, 68 47 C 68 60, 94 60, 94 74 C 94 86, 68 86, 68 76" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round"/>
          <text x="135" y="75" fontFamily="system-ui, sans-serif" fontSize="54" fontWeight="900" fill="#FFFFFF">Next</text>
          <text x="262" y="75" fontFamily="system-ui, sans-serif" fontSize="54" fontWeight="900" fill="#04AA6D">sem</text>
          <text x="138" y="100" fontFamily="monospace" fontSize="13" fontWeight="700" fill="#94a3b8" letterSpacing="2">100% FREE DEV BOOTCAMP</text>
        </svg>
      )
    },
    {
      id: "app-icon",
      title: "3. Master 512x512 App Icon",
      badge: "Google Play & Mobile App",
      desc: "Android Squircle radius with deep gradient backdrop, radial glow, and thick contrast strokes.",
      svg: `<svg viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="115" fill="#0e172e"/>
  <circle cx="256" cy="256" r="220" fill="#04AA6D" fill-opacity="0.25"/>
  <path d="M 95 385 V 127 L 235 385 V 127" fill="none" stroke="#04AA6D" stroke-width="58" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 417 172 C 417 122, 290 122, 290 188 C 290 258, 417 258, 417 328 C 417 388, 290 388, 290 338" fill="none" stroke="#FFFFFF" stroke-width="58" stroke-linecap="round"/>
</svg>`,
      render: (
        <div className="relative p-2 rounded-[28px] bg-slate-900/60 border border-slate-800 shadow-2xl">
          <svg viewBox="0 0 512 512" style={{ width: selectedSize, height: selectedSize }} className="rounded-[22px] overflow-hidden shadow-[0_0_25px_rgba(4,170,109,0.3)]">
            <rect width="512" height="512" rx="115" fill="#0e172e"/>
            <circle cx="256" cy="256" r="220" fill="#04AA6D" fillOpacity="0.25"/>
            <path d="M 95 385 V 127 L 235 385 V 127" fill="none" stroke="#04AA6D" strokeWidth="58" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M 417 172 C 417 122, 290 122, 290 188 C 290 258, 417 258, 417 328 C 417 388, 290 388, 290 338" fill="none" stroke="#FFFFFF" strokeWidth="58" strokeLinecap="round"/>
          </svg>
        </div>
      )
    },
    {
      id: "gold",
      title: "4. Developer Gold Edition",
      badge: "Developer Hub & Certificates",
      desc: "Imperial gold (#c1a648) with Nextsem emerald accents for academic dignity.",
      svg: `<svg viewBox="0 0 160 160" width="100%" height="100%">
  <rect x="4" y="4" width="152" height="152" rx="36" fill="#0c1328" stroke="#c1a648" stroke-width="4"/>
  <path d="M 28 120 V 40 L 72 120 V 40" fill="none" stroke="#c1a648" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 132 54 C 132 38, 92 38, 92 58 C 92 80, 132 80, 132 102 C 132 120, 92 120, 92 104" fill="none" stroke="#04AA6D" stroke-width="18" stroke-linecap="round"/>
</svg>`,
      render: (
        <svg viewBox="0 0 160 160" style={{ width: selectedSize, height: selectedSize }} className="transition-all drop-shadow-[0_0_20px_rgba(193,166,72,0.4)]">
          <rect x="4" y="4" width="152" height="152" rx="36" fill="#0c1328" stroke="#c1a648" strokeWidth="4"/>
          <path d="M 28 120 V 40 L 72 120 V 40" fill="none" stroke="#c1a648" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 132 54 C 132 38, 92 38, 92 58 C 92 80, 132 80, 132 102 C 132 120, 92 120, 92 104" fill="none" stroke="#04AA6D" strokeWidth="18" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: "kids",
      title: "5. Kids Nextsem Playful Edition",
      badge: "Kids Mobile App",
      desc: "Warm amber & mint green squircle with playful bubble energy for preschool & KG kids.",
      svg: `<svg viewBox="0 0 160 160" width="100%" height="100%">
  <rect x="4" y="4" width="152" height="152" rx="44" fill="#1e1b4b" stroke="#f59e0b" stroke-width="5"/>
  <circle cx="130" cy="30" r="5" fill="#fbbf24"/>
  <circle cx="30" cy="130" r="4" fill="#34d399"/>
  <path d="M 30 115 V 45 L 72 115 V 45" fill="none" stroke="#f59e0b" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 130 58 C 130 42, 92 42, 92 60 C 92 82, 130 82, 130 102 C 130 118, 92 118, 92 102" fill="none" stroke="#10b981" stroke-width="20" stroke-linecap="round"/>
</svg>`,
      render: (
        <svg viewBox="0 0 160 160" style={{ width: selectedSize, height: selectedSize }} className="transition-all drop-shadow-lg">
          <rect x="4" y="4" width="152" height="152" rx="44" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="5"/>
          <circle cx="130" cy="30" r="5" fill="#fbbf24"/>
          <circle cx="30" cy="130" r="4" fill="#34d399"/>
          <path d="M 30 115 V 45 L 72 115 V 45" fill="none" stroke="#f59e0b" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 130 58 C 130 42, 92 42, 92 60 C 92 82, 130 82, 130 102 C 130 118, 92 118, 92 102" fill="none" stroke="#10b981" strokeWidth="20" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: "ncert",
      title: "6. NCERT Sapphire Edition",
      badge: "NCERT Solutions Hub",
      desc: "Azure blue (#0284c7) with pure white strokes for deep academic precision.",
      svg: `<svg viewBox="0 0 160 160" width="100%" height="100%">
  <rect x="4" y="4" width="152" height="152" rx="36" fill="#0c1e3d" stroke="#0284c7" stroke-width="4"/>
  <path d="M 28 120 V 40 L 72 120 V 40" fill="none" stroke="#0284c7" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 132 54 C 132 38, 92 38, 92 58 C 92 80, 132 80, 132 102 C 132 120, 92 120, 92 104" fill="none" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>
</svg>`,
      render: (
        <svg viewBox="0 0 160 160" style={{ width: selectedSize, height: selectedSize }} className="transition-all drop-shadow-[0_0_20px_rgba(2,132,199,0.4)]">
          <rect x="4" y="4" width="152" height="152" rx="36" fill="#0c1e3d" stroke="#0284c7" strokeWidth="4"/>
          <path d="M 28 120 V 40 L 72 120 V 40" fill="none" stroke="#0284c7" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 132 54 C 132 38, 92 38, 92 58 C 92 80, 132 80, 132 102 C 132 120, 92 120, 92 104" fill="none" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round"/>
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-[#17181c] text-white p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Breadcrumb & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="text-xs sm:text-sm font-bold text-[#04AA6D] hover:text-[#039861] underline decoration-[#04AA6D]"
            >
              ← Back to Nextsem Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-xs sm:text-sm text-slate-300 font-mono">Brand & Logo Design Studio</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-mono font-bold flex items-center gap-1.5">
              <ShieldCheck size={14} />
              <span>Central Brand Authority</span>
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="mt-8 mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c1328] border border-[#04AA6D]/40 text-[#04AA6D] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-lg">
            <Sparkles size={14} />
            <span>Design Once • Test Here • Deploy Across 4 Apps</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nextsem <span className="text-[#04AA6D]">Logo & Theme Studio</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Yahan par sabhi official logos aur theme colors live test karein. Jab testing final ho jaye, toh isi standard ko hum <span className="text-white font-bold">Full Stack Academy</span>, <span className="text-white font-bold">Kids App</span>, aur <span className="text-white font-bold">NCERT</span> par seamlessly sync karenge.
          </p>
        </div>

        {/* Interactive Testing Toolbar */}
        <div className="bg-[#0c1328] border border-slate-800 rounded-2xl p-5 mb-10 shadow-2xl flex flex-wrap items-center justify-between gap-6">
          
          {/* Background Switcher */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Palette size={14} className="text-[#04AA6D]" />
              <span>Test on Background Theme:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {bgOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedBg(opt.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 border ${
                    selectedBg === opt.value 
                      ? "bg-slate-800 text-white border-[#04AA6D] shadow-[0_0_10px_rgba(4,170,109,0.3)]" 
                      : "bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <span 
                    className="w-3.5 h-3.5 rounded-full border border-white/20" 
                    style={{ backgroundColor: opt.value }}
                  />
                  <span>{opt.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Slider */}
          <div className="flex flex-col gap-2 min-w-[200px]">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400">
              <span>Preview Scale:</span>
              <span className="text-[#04AA6D] font-mono">{selectedSize}px</span>
            </div>
            <input
              type="range"
              min="48"
              max="180"
              value={selectedSize}
              onChange={(e) => setSelectedSize(Number(e.target.value))}
              className="w-full accent-[#04AA6D] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>Header (48px)</span>
              <span>Default (120px)</span>
              <span>Hero (180px)</span>
            </div>
          </div>
        </div>

        {/* Master Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logoVariants.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1328] border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-slate-800/80 flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#04AA6D] bg-[#04AA6D]/10 border border-[#04AA6D]/30 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-extrabold text-white mt-2">
                    {item.title}
                  </h3>
                </div>
                
                <button
                  onClick={() => copyToClipboard(item.svg, item.id)}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#04AA6D] text-slate-300 hover:text-white transition-colors"
                  title="Copy SVG code"
                >
                  {copiedId === item.id ? (
                    <span className="flex items-center gap-1 text-[11px] text-[#04AA6D] font-bold">
                      <Check size={14} /> Copied
                    </span>
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>

              {/* Dynamic Live Canvas Stage */}
              <div 
                className="p-8 flex items-center justify-center transition-colors min-h-[220px]"
                style={{ backgroundColor: selectedBg }}
              >
                {item.render}
              </div>

              {/* Card Footer Details */}
              <div className="p-5 bg-slate-900/60 border-t border-slate-800/80">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand System Tokens Breakdown */}
        <div className="mt-14 bg-[#0c1328] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <Layers className="text-[#04AA6D]" size={24} />
            <div>
              <h2 className="text-xl font-bold text-white">
                Nextsem Global Palette Tokens (Folder: <code className="text-[#04AA6D] font-mono">logo for nextsem/</code>)
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Exact hex codes & CSS tokens to be replicated on other apps.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#17181c] border border-slate-800">
              <div className="w-full h-8 rounded-md bg-[#04AA6D] mb-3 shadow-[0_0_12px_rgba(4,170,109,0.5)]" />
              <span className="text-[11px] font-mono font-bold text-white block">#04AA6D</span>
              <span className="text-[10px] text-slate-300">Emerald Primary</span>
            </div>

            <div className="p-4 rounded-xl bg-[#17181c] border border-slate-800">
              <div className="w-full h-8 rounded-md bg-[#17181c] border border-slate-700 mb-3" />
              <span className="text-[11px] font-mono font-bold text-white block">#17181c</span>
              <span className="text-[10px] text-slate-300">Base Dark Background</span>
            </div>

            <div className="p-4 rounded-xl bg-[#17181c] border border-slate-800">
              <div className="w-full h-8 rounded-md bg-[#0c1328] border border-slate-700 mb-3" />
              <span className="text-[11px] font-mono font-bold text-white block">#0c1328</span>
              <span className="text-[10px] text-slate-300">Card Surface Navy</span>
            </div>

            <div className="p-4 rounded-xl bg-[#17181c] border border-slate-800">
              <div className="w-full h-8 rounded-md bg-[#c1a648] mb-3 shadow-[0_0_12px_rgba(193,166,72,0.5)]" />
              <span className="text-[11px] font-mono font-bold text-white block">#c1a648</span>
              <span className="text-[10px] text-slate-300">Developer Gold Accent</span>
            </div>
          </div>

          {/* Rollout Guide */}
          <div className="mt-8 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-4">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-[#04AA6D] shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-400">
                Cross-App Rollout Process
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Jab aap Nextsem Online par logo aur theme final approve kar denge, hum <code className="text-white font-bold">logo for nextsem</code> folder ke exact SVGs aur tokens ko <span className="text-[#04AA6D] font-bold">nextsem.online</span>, <span className="text-[#04AA6D] font-bold">mobile apps</span>, aur <span className="text-[#04AA6D] font-bold">interactive studios</span> me automatically copy & sync kar denge!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
