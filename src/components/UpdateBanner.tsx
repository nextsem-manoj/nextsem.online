"use client";

import React, { useState, useEffect } from "react";
import { usePWA } from "../hooks/usePWA";
import { X, RefreshCw, Sparkles, ExternalLink, ShieldCheck, ArrowRight, BookOpen } from "lucide-react";
import { Capacitor } from "@capacitor/core";

const CURRENT_APP_VERSION = "2.7.0";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=online.nextsem.app";

const UpdateBanner = () => {
  const { updateAvailable, triggerUpdate } = usePWA();
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only show update notifications inside the native Android/iOS app
    if (!Capacitor.isNativePlatform()) return;

    // Check if current installed version is behind CURRENT_APP_VERSION
    const lastSeenVersion = localStorage.getItem("nextsem_app_version");
    
    if (lastSeenVersion !== CURRENT_APP_VERSION) {
      setShowModal(true);
      setShowBanner(true);
    } else if (updateAvailable) {
      setShowBanner(true);
    }

    // Initialize FCM Push Notification permissions on native app
    if (Capacitor.isNativePlatform() && "Notification" in window) {
      if (Notification.permission === "default") {
        Notification.requestPermission().catch(() => {});
      }
    }
  }, [updateAvailable]);

  const handleDismissModal = () => {
    localStorage.setItem("nextsem_app_version", CURRENT_APP_VERSION);
    setShowModal(false);
  };

  const handleOpenPlayStore = () => {
    localStorage.setItem("nextsem_app_version", CURRENT_APP_VERSION);
    setShowModal(false);
    setShowBanner(false);

    if (Capacitor.isNativePlatform()) {
      window.location.href = "market://details?id=online.nextsem.app";
      setTimeout(() => {
        window.open(PLAY_STORE_URL, "_blank");
      }, 500);
    } else if (updateAvailable) {
      triggerUpdate();
    } else {
      window.open(PLAY_STORE_URL, "_blank");
    }
  };

  return (
    <>
      {/* 1. TOP HEADER UPDATE BANNER */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-cyan-600 via-emerald-600 to-indigo-700 text-white shadow-lg animate-in slide-in-from-top duration-300">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[10px] uppercase shrink-0">
                v{CURRENT_APP_VERSION}
              </span>
              <p className="text-xs font-bold truncate">
                🚀 New Update Available! Interactive VS Code Simulator & 6 Full Stack Tracks.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button 
                onClick={handleOpenPlayStore}
                className="flex items-center gap-1.5 bg-slate-950 hover:bg-slate-900 border border-amber-400/40 text-amber-300 font-black text-[10px] sm:text-xs py-1 px-3 rounded-xl shadow-sm active:scale-95 transition-all uppercase tracking-wider cursor-pointer"
              >
                <RefreshCw size={12} className="animate-spin-slow text-emerald-400" />
                <span>Update Now</span>
              </button>
              <button 
                onClick={() => setShowBanner(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Dismiss update notification"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. LAUNCH APP UPDATE MODAL ALERT */}
      {showModal && (
        <>
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[10000] animate-in fade-in duration-200"
            onClick={handleDismissModal}
          />

          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-md bg-[#090d22] border-2 border-cyan-500/50 rounded-3xl p-6 z-[10001] shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-in zoom-in-95 duration-200 text-slate-100 select-none space-y-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-cyan-300">
                    Nextsem App Update v{CURRENT_APP_VERSION}
                  </h3>
                  <p className="text-[11px] text-emerald-400 font-bold">
                    Full Stack Web Developer Edition
                  </p>
                </div>
              </div>
              <button 
                onClick={handleDismissModal}
                className="p-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-3 py-1">
              <p className="text-xs font-medium text-slate-300">
                A new major update is ready! Upgrade now to get the latest interactive coding tools & tracks:
              </p>

              <div className="space-y-2 bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 text-xs">
                <div className="flex items-start gap-2.5">
                  <BookOpen size={15} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-white">Interactive Web IDE & Live Preview:</span>
                    <p className="text-[11px] text-slate-400">Real-time live code execution with Emmet abbreviation and Prettier auto-formatting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-white">6 Structured Developer Tracks:</span>
                    <p className="text-[11px] text-slate-400">Step-by-step pathways from 🪟 Windows 11 CLI &amp; HTML5 to React and Node.js.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-white">15+ Mini-Projects &amp; Canvas Labs:</span>
                    <p className="text-[11px] text-slate-400">Hands-on coding labs with 1-to-1 matching PC terminal screenshots.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleOpenPlayStore}
                className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <span>Update on Play Store</span>
                <ExternalLink size={14} />
              </button>

              <button
                onClick={handleDismissModal}
                className="py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center gap-1 hover:text-white transition-all cursor-pointer"
              >
                <span>Later</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UpdateBanner;
