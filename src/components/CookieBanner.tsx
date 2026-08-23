"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, Check, X, Lock, ExternalLink } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const consent = localStorage.getItem("nextsem_cookie_consent");
        // Show banner if user has not yet accepted or set preferences on this device
        if (!consent) {
          // Brief 800ms timeout so splash screen/initial page loads cleanly first
          const timer = setTimeout(() => setShowBanner(true), 800);
          return () => clearTimeout(timer);
        }
      } catch (e) {
        console.error("Cookie consent check notice:", e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("nextsem_cookie_consent", "accepted");
        localStorage.setItem("cookie_consent", "true");
      } catch (e) {
        console.error(e);
      }
    }
    setShowBanner(false);
  };

  const handleEssentialOnly = () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("nextsem_cookie_consent", "essential");
        localStorage.setItem("cookie_consent", "essential");
      } catch (e) {
        console.error(e);
      }
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100000] p-4 sm:p-6 pointer-events-auto font-sans">
      <div className="max-w-4xl mx-auto bg-[#090d1f]/95 backdrop-blur-2xl border-2 border-[#04AA6D]/60 rounded-3xl p-5 sm:p-6 shadow-[0_-12px_40px_rgba(0,0,0,0.8)] text-white space-y-4 animate-in slide-in-from-bottom duration-500">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#04AA6D]/20 border border-[#04AA6D]/50 flex items-center justify-center text-[#04AA6D] shrink-0 shadow-inner">
              <Cookie size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                  Cookie & User Privacy Agreement
                </h3>
                <span className="bg-[#04AA6D]/20 text-[#04AA6D] border border-[#04AA6D]/40 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                  GDPR & AdSense Compliant
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Welcome to Nextsem Academy! We respect your privacy & data transparency.
              </p>
            </div>
          </div>

          <button
            onClick={handleEssentialOnly}
            className="p-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            title="Close Banner"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="text-xs text-slate-200 leading-relaxed space-y-2">
          <p>
            Nextsem Academy uses cookies, local storage, and similar technologies to save your <strong className="text-white font-bold">interactive lesson progress</strong>, sync your <strong className="text-white font-bold">certified Windows CMD terminal progress</strong>, and serve non-intrusive, relevant <strong className="text-white font-bold">developer ads (via Google AdSense & AdMob)</strong>.
          </p>
          <p className="text-slate-300">
            By continuing to browse or clicking <strong className="text-[#04AA6D] font-bold">"Accept All & Continue"</strong>, you agree to our platform terms, cookie usage, and data practices as described in our legal policies.
          </p>
        </div>

        {/* Legal Links Bar */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-medium pt-1">
          <Link href="/privacy" className="text-[#04AA6D] hover:text-emerald-300 underline decoration-[#04AA6D] flex items-center gap-1 font-semibold">
            <Lock size={12} />
            <span>Privacy Policy</span>
          </Link>
          <span>•</span>
          <Link href="/terms" className="text-[#04AA6D] hover:text-emerald-300 underline decoration-[#04AA6D] flex items-center gap-1 font-semibold">
            <ShieldCheck size={12} />
            <span>Terms of Service</span>
          </Link>
          <span>•</span>
          <Link href="/about" className="text-slate-300 hover:text-white underline flex items-center gap-1">
            <ExternalLink size={12} />
            <span>About Nextsem</span>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            onClick={handleEssentialOnly}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-750 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs transition-all cursor-pointer text-center"
          >
            Essential Cookies Only
          </button>
          
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-black hover:bg-slate-900 border border-white/20 text-white font-extrabold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg active:scale-95"
          >
            <Check size={16} className="stroke-[3] text-white" />
            <span>Accept All & Continue</span>
          </button>
        </div>

      </div>
    </div>
  );
}
