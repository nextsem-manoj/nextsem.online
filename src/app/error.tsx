"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, BookOpen } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Nextsem Application Exception caught by ErrorBoundary:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-[#060c18] text-white">
      <div className="max-w-md w-full bg-[#0c1328] border border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
          <AlertTriangle size={32} />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-extrabold text-white">Something went wrong</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            An unexpected error occurred while loading this lesson or view. Your progression and bookmarks have been preserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer"
          >
            <RefreshCw size={15} />
            <span>Try Again</span>
          </button>

          <Link
            href="/html"
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[#141b30] hover:bg-[#1c2747] border border-slate-700/80 text-slate-200 hover:text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs cursor-pointer"
          >
            <BookOpen size={15} className="text-[#04AA6D]" />
            <span>Curriculum</span>
          </Link>
        </div>

        {error?.digest && (
          <p className="text-[10px] font-mono text-slate-500 pt-2">
            Error Digest: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
