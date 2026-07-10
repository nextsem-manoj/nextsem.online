"use client";

import React, { useState } from "react";
import { usePWA } from "../hooks/usePWA";
import { X, RefreshCw } from "lucide-react";

const UpdateBanner = () => {
  const { updateAvailable, triggerUpdate } = usePWA();
  const [dismissed, setDismissed] = useState(false);

  // If there's no update or user dismissed it, show nothing
  if (!updateAvailable || dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-blue-600 via-indigo-650 to-indigo-700 text-white shadow-md animate-in slide-in-from-top duration-300">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-base animate-pulse shrink-0">✨</span>
          <p className="text-xs sm:text-sm font-bold truncate">
            A new version of Nextsem Academy is available! Update now to get the latest features and lessons.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={triggerUpdate}
            className="flex items-center gap-1.5 bg-white hover:bg-slate-100 text-blue-700 hover:text-blue-800 font-extrabold text-[10px] sm:text-xs py-1.5 px-3.5 rounded-lg shadow-sm active:scale-95 transition-all uppercase tracking-wider"
          >
            <RefreshCw size={12} />
            Update Now
          </button>
          <button 
            onClick={() => setDismissed(true)}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Dismiss update notification"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBanner;
