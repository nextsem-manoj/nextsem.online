import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 py-8 w-full mt-auto select-none font-sans">
      <div className="max-w-[1600px] mx-auto px-5 flex flex-col gap-6">
        
        {/* Top Row: Brand & Educator Bio */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
          
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="Nextsem Logo" className="w-7 h-7 rounded-lg border border-slate-200 p-0.5" />
              <span className="text-slate-900 font-extrabold text-sm tracking-wider uppercase">NextSem Academy</span>
            </div>
            <span className="text-xs text-slate-600 font-medium max-w-md">
              India&apos;s free multilingual platform for Web Development, Full Stack Engineering, and Computer Science.
            </span>
          </div>

          {/* Instructor Bio */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3 rounded-2xl">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
              MK
            </div>
            <div className="text-left text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <span>Manoj Kumar</span>
                <span className="text-[9px] font-extrabold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded-md">Lead Educator</span>
              </div>
              <span className="text-[10px] text-slate-500 block mt-0.5">Handcrafted with care for self-taught developers</span>
            </div>
          </div>

        </div>

        {/* Bottom Row: Legal Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Legal Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-slate-700">
            <Link href="/about" className="hover:text-blue-600 transition-colors cursor-pointer">About Us</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors cursor-pointer">Contact Us</Link>
            <Link href="/privacy" className="hover:text-blue-600 transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors cursor-pointer">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-blue-600 transition-colors cursor-pointer">Sitemap</Link>
          </div>

          {/* Copyright */}
          <div className="text-[11px] text-slate-500 text-center md:text-right font-medium">
            <span>© {new Date().getFullYear()} NextSem Academy. Educational content licensed under CC BY-SA 4.0.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
