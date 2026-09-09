"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, ExternalLink, ArrowRight, Play, CheckCircle2, Heart, Share2, Volume2, VolumeX
} from "lucide-react";

interface StepInfo {
  timeRange: string;
  title: string;
  description: string;
}

const STEPS: StepInfo[] = [
  {
    timeRange: "0:00 - 0:07",
    title: "1. VS Code Emmet: div.rose>div.petal*6",
    description: "Fast-forward HTML structure instantly via Tab ⇥ expansion with live wireframe preview."
  },
  {
    timeRange: "0:07 - 0:12",
    title: "2A. CSS3 Organic Stem & Sharp Thorn",
    description: "Natural organic green gradient stem and realistic thorn geometry."
  },
  {
    timeRange: "0:12 - 0:16",
    title: "2B. CSS3 Natural Leaves & Calyx Sepals",
    description: "Leafy veins, curved bezier sepals, and organic structure."
  },
  {
    timeRange: "0:16 - 0:21",
    title: "2C. CSS3 3D Velvety Crimson Petals",
    description: "Velvety crimson radial gradients, 3D transform curvature, and closed bud."
  },
  {
    timeRange: "0:21 - 0:29",
    title: "3. JS Golden Ratio Math & Full 3D Bloom",
    description: "Hot-reload rendering a hyper-realistic deep crimson blooming rose with golden dew particles."
  },
  {
    timeRange: "0:29 - 0:37",
    title: "4. Official Splash Outro & Cute Like Request",
    description: "Official nextsem.online splash outro + animated like & share request."
  }
];

export default function CompilerShowcaseAnimation() {
  const [activeTab, setActiveTab] = useState<"youtube" | "native">("youtube");
  const [isMuted, setIsMuted] = useState<boolean>(true); // Starts muted for browser autoplay compliance

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full rounded-2xl border border-slate-800 bg-[#0d1017] shadow-2xl overflow-hidden select-none font-sans group">
      
      {/* ── 1. TOP VS CODE TITLE BAR ── */}
      <div className="bg-[#141824] px-3 sm:px-4 py-2.5 border-b border-slate-800 flex items-center justify-between gap-2 text-xs">
        
        {/* Left: Window Dots & Title */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 mr-1 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="font-extrabold text-white text-[11px] sm:text-xs tracking-wide truncate flex items-center gap-1.5">
            <span className="text-sm">🌹</span>
            <span>Nextsem Code • <span className="text-slate-400 font-normal">Realistic Blooming Rose (HTML/CSS/JS)</span></span>
          </span>
        </div>

        {/* Right: Sound Toggle & Direct YouTube Shorts Link */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={toggleMute}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
              isMuted 
                ? "bg-slate-800/90 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-white" 
                : "bg-[#04AA6D]/20 hover:bg-[#04AA6D]/30 border-[#04AA6D] text-[#04AA6D] shadow-sm shadow-[#04AA6D]/30"
            }`}
            title={isMuted ? "Click to enable audio (Browsers require 1 click to unmute)" : "Click to mute audio"}
          >
            {isMuted ? <VolumeX size={13} className="text-amber-400" /> : <Volume2 size={13} className="text-[#04AA6D] animate-pulse" />}
            <span>{isMuted ? "🔇 Tap for Sound" : "🔊 Sound ON"}</span>
          </button>

          {/* YouTube Link */}
          <a
            href="https://youtube.com/shorts/jfnopGGIogE?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-lg bg-[#ff0000]/15 hover:bg-[#ff0000]/25 border border-[#ff0000]/40 text-white hover:text-[#ff4e4e] text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-sm group/yt cursor-pointer"
            title="Watch full video on YouTube Shorts"
          >
            <Play size={11} className="fill-red-500 text-red-500" />
            <span className="hidden sm:inline">YouTube Shorts</span>
            <ExternalLink size={11} className="text-slate-400 group-hover/yt:text-white transition-colors" />
          </a>
        </div>

      </div>

      {/* ── 2. MAIN YOUTUBE SHORTS EMBED CONTAINER ── */}
      <div className="relative min-h-[520px] sm:min-h-[580px] md:min-h-[560px] flex items-center justify-center bg-[#07090e] p-3 sm:p-5 overflow-hidden">
        
        {/* Background Ambient Glowing Ring */}
        <div className="absolute inset-0 bg-radial from-emerald-500/10 via-rose-500/5 to-transparent pointer-events-none blur-3xl" />

        {/* Vertical 9:16 Shorts Player Frame */}
        <div className="relative w-full max-w-[340px] sm:max-w-[360px] md:max-w-[380px] aspect-[9/16] max-h-[640px] rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-[0_15px_50px_rgba(0,0,0,0.9)] bg-black">
          
          {activeTab === "youtube" ? (
            <iframe
              key={`yt-${isMuted}`}
              src={`https://www.youtube-nocookie.com/embed/jfnopGGIogE?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=jfnopGGIogE&rel=0&modestbranding=1&playsinline=1`}
              title="I Coded a Realistic Blooming Rose in HTML & CSS! 🌹✨ #shorts #coding"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover border-0"
            />
          ) : (
            <video
              className="w-full h-full object-contain bg-black"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              controls
            >
              <source src="/candle_flame_developer_short.mp4" type="video/mp4" />
              <source src="/candle_flame_developer_short.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Top-Right Player Switcher Pill */}
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-lg border border-slate-700/80 shadow-lg">
            <button
              type="button"
              onClick={() => setActiveTab("youtube")}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                activeTab === "youtube"
                  ? "bg-red-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              YouTube
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("native")}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                activeTab === "native"
                  ? "bg-[#04AA6D] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              HD Video
            </button>
          </div>

          {/* Floating Unmute Hint Banner (if muted) */}
          {isMuted && (
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-black/85 hover:bg-black backdrop-blur-md border border-[#04AA6D]/60 text-white text-xs font-bold flex items-center gap-2 shadow-2xl transition-all hover:scale-105 cursor-pointer animate-bounce"
            >
              <VolumeX size={14} className="text-amber-400" />
              <span>🔊 Tap to Unmute Music</span>
            </button>
          )}

        </div>

      </div>

      {/* ── 3. BOTTOM TIMELINE & STEP INFORMATION ROADMAP ── */}
      <div className="p-3 sm:p-4 bg-[#111420] border-t border-slate-800 flex flex-col gap-2.5">
        
        {/* Header & Quick Action */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-pulse" />
            <span className="font-bold text-white text-xs sm:text-sm">
              Project Breakdown (0:00 - 0:37)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/nextsemacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-[#e1306c] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Heart size={11} className="fill-[#e1306c]" />
              <span>@nextsemacademy</span>
            </a>

            <Link
              href="/playground"
              className="text-[11px] font-bold text-[#04AA6D] hover:underline flex items-center gap-1 cursor-pointer ml-2"
            >
              <span>Try Code in Live IDE »</span>
              <ArrowRight size={11} />
            </Link>
          </div>
        </div>

        {/* 4 Steps Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1 text-left">
          {STEPS.slice(0, 6).map((step, idx) => (
            <div 
              key={idx}
              className="p-2.5 rounded-xl bg-[#161a29] border border-slate-800/90 hover:border-[#04AA6D]/40 transition-colors flex flex-col gap-1"
            >
              <div className="flex items-center justify-between gap-2 text-[10px] font-mono">
                <span className="text-[#04AA6D] font-bold">Step {idx + 1}</span>
                <span className="text-slate-400">{step.timeRange}</span>
              </div>
              <p className="text-[11px] font-bold text-white line-clamp-1">
                {step.title}
              </p>
              <p className="text-[10px] text-slate-400 line-clamp-1 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
