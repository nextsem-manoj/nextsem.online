"use client";

import React, { useEffect, useState } from "react";
import { usePWA } from "../hooks/usePWA";

const InstallBanner = () => {
  const { isInstallable, installApp } = usePWA();
  const [dismissed, setDismissed] = useState(true); // Default to true to prevent flash before mount

  useEffect(() => {
    // Only check localStorage on client-side mount
    const isDismissed = localStorage.getItem("pwa-install-dismissed");
    if (!isDismissed) {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("pwa-install-dismissed", "true");
    setDismissed(true);
  };

  if (!isInstallable || dismissed) return null;

  return (
    <div className="fixed top-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 dark:border-blue-500/30 p-4 rounded-2xl shadow-2xl z-50 flex items-start gap-4 animate-in slide-in-from-top-12 duration-500">
      <div className="text-2xl bg-blue-500/10 p-2.5 rounded-xl text-blue-500">
        📱
      </div>
      <div className="flex-1">
        <h4 className="font-black text-sm text-slate-900 dark:text-white mb-1 uppercase tracking-wide">
          Install App
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-3">
          Get the JBRS course app on your device for a fast, full-screen, offline-ready experience.
        </p>
        <div className="flex gap-2">
          <button 
            onClick={installApp}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-2 px-4 rounded-lg shadow-sm transition-all"
          >
            Install
          </button>
          <button 
            onClick={handleDismiss}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs py-2 px-4 rounded-lg transition-all"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallBanner;
