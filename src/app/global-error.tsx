"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Layout Error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#060c18] text-white flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-[#0c1328] border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
            <AlertTriangle size={32} />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-black text-white">Application Error</h2>
            <p className="text-xs text-slate-300">
              The page layout ran into an issue. Click below to recover and reload the application.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[#04AA6D] hover:bg-[#039861] text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
          >
            <RefreshCw size={16} />
            <span>Reload Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}
