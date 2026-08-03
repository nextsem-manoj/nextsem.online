"use client";

import React, { useState } from "react";
import { Share2, Copy, Check, MessageCircle, X, Send, Globe } from "lucide-react";

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
  variant?: "icon" | "full";
  className?: string;
}

export default function ShareButton({
  title = "Learn Full Stack Development Free",
  text = "I'm learning web development on Nextsem! 100% free, interactive lessons. Check it out!",
  url,
  variant = "full",
  className = "",
}: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "https://nextsem.online");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(`${text} ${shareUrl}`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareLinks = [
    {
      label: "Twitter / X",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "hover:bg-sky-500/20 hover:border-sky-500/40 hover:text-sky-400",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodedUrl}&hashtags=webdev,coding,nextsem`,
    },
    {
      label: "WhatsApp",
      icon: <MessageCircle size={15} />,
      color: "hover:bg-green-500/20 hover:border-green-500/40 hover:text-green-400",
      href: `https://wa.me/?text=${encodedText}`,
    },
    {
      label: "LinkedIn",
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      color: "hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`,
    },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer text-xs font-bold
          bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-600
          ${variant === "icon" ? "px-2" : ""}`}
        title="Share this lesson"
      >
        <Share2 size={14} />
        {variant === "full" && <span>Share</span>}
      </button>

      {/* Dropdown panel */}
      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          {/* Share panel */}
          <div className="absolute right-0 top-10 z-50 w-56 bg-[#0c1328] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/50 p-3 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
              <span className="text-[11px] font-extrabold text-slate-300 uppercase tracking-widest">Share</span>
              <button onClick={() => setOpen(false)} className="text-slate-500 hover:text-slate-200 cursor-pointer">
                <X size={13} />
              </button>
            </div>

            {/* Copy Link */}
            <button
              onClick={handleCopy}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-300
                bg-slate-800/40 border border-slate-700/40 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-400
                transition-all cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? "Link Copied! ✅" : "Copy Link"}</span>
            </button>

            {/* Social Share Links */}
            {shareLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-400
                  bg-slate-800/40 border border-slate-700/40 transition-all ${link.color}`}
                onClick={() => setOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}

            {/* Native share API (mobile) */}
            {typeof navigator !== "undefined" && "share" in navigator && (
              <button
                onClick={() => {
                  navigator.share({ title, text, url: shareUrl }).catch(() => {});
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-400
                  bg-slate-800/40 border border-slate-700/40 hover:bg-purple-500/20 hover:border-purple-500/40 hover:text-purple-400
                  transition-all cursor-pointer"
              >
                <Share2 size={14} />
                <span>More Options...</span>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
