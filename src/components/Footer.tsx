import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0c1328] border-t border-slate-800 py-8 px-4 text-center text-xs text-slate-400 font-medium w-full mt-auto transition-colors">
      <div className="max-w-[1200px] mx-auto space-y-4">
        {/* Nextsem Educational Ecosystem Links */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pb-3 border-b border-slate-800/80">
          <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">
            Nextsem Ecosystem:
          </span>
          <a
            href="https://ignou.nextsem.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17181c] border border-slate-700 text-white font-bold hover:text-[#04AA6D] hover:border-[#04AA6D] transition-all shadow-xs"
          >
            <span>🎓</span>
            <span>IGNOU BCA Hub</span>
          </a>
          <a
            href="https://ncert.nextsem.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17181c] border border-slate-700 text-white font-bold hover:text-[#04AA6D] hover:border-[#04AA6D] transition-all shadow-xs"
          >
            <span>📚</span>
            <span>NCERT Solutions</span>
          </a>
        </div>

        <Link href="/curriculum" className="text-white font-bold uppercase tracking-wider hover:text-[#04AA6D] transition-colors inline-block">
          Nextsem Academy • Complete Free Dev Curriculum
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold pt-1">
          <Link href="/curriculum" className="text-slate-400 hover:text-[#04AA6D] hover:underline transition-colors">
            📚 Curriculum
          </Link>
          <Link href="/privacy" className="text-slate-400 hover:text-[#04AA6D] hover:underline transition-colors">
            📜 Privacy Policy
          </Link>
          <Link href="/terms" className="text-slate-400 hover:text-[#04AA6D] hover:underline transition-colors">
            ⚖️ Terms of Service
          </Link>
          <Link href="/contact" className="text-slate-400 hover:text-[#04AA6D] hover:underline transition-colors">
            📞 Contact Support
          </Link>
          <Link href="/about" className="text-slate-400 hover:text-[#04AA6D] hover:underline transition-colors">
            ℹ️ About Us
          </Link>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#04AA6D] hover:text-[#039861] hover:underline font-bold transition-colors"
          >
            🗺️ XML Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}

