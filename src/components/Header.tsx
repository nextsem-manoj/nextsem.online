import React from 'react';
import Link from 'next/link';
import { Terminal, Code, Palette, Zap, Server, Cpu, Rocket } from 'lucide-react';

const Header = () => {
  const subjectPills = [
    { label: "🪟 CLI", href: "/cli", icon: Terminal, color: "hover:border-[#04AA6D]/60 hover:text-[#04AA6D]" },
    { label: "🧱 HTML5", href: "/html", icon: Code, color: "hover:border-cyan-500/60 hover:text-cyan-400" },
    { label: "🎨 CSS3", href: "/html", icon: Palette, color: "hover:border-amber-500/60 hover:text-amber-400" },
    { label: "⚡ JS ES6", href: "/curriculum", icon: Zap, color: "hover:border-yellow-500/60 hover:text-yellow-400" },
    { label: "⚛️ React", href: "/curriculum", icon: Cpu, color: "hover:border-sky-500/60 hover:text-sky-400" },
    { label: "🟢 Node", href: "/curriculum", icon: Server, color: "hover:border-emerald-500/60 hover:text-emerald-400" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#060d1a]/95 backdrop-blur-xl text-white py-2.5 px-4 md:px-8 border-b border-[#04AA6D]/30 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Section: Official Logo & Brand Badge */}
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer shrink-0">
          <div 
            className="w-8.5 h-8.5 rounded-xl bg-[#0a0a0a] border-2 border-[#04AA6D]/60 flex items-center justify-center text-[#04AA6D] font-black text-xs shadow-[0_0_15px_rgba(4,170,109,0.4)] transition-all group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(4,170,109,0.7)] group-hover:border-[#04AA6D]"
            style={{ textShadow: "0 0 10px rgba(4, 170, 109, 0.9)" }}
          >
            NS
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#04AA6D] transition-colors">
            NextSem<span className="text-[#04AA6D]">.online</span>
          </span>
        </Link>

        {/* Center Section: Subject Shortcut Pills (Desktop/Tablet) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {subjectPills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className={`px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-bold text-slate-300 transition-all ${pill.color} hover:bg-slate-800`}
            >
              <span>{pill.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Section: 1-Click Start Free CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/cli"
            className="flex items-center gap-2 px-4 py-2 bg-[#04AA6D] hover:bg-[#039861] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-[#04AA6D]/20 hover:shadow-[#04AA6D]/30 transition-all cursor-pointer"
          >
            <Rocket size={14} className="stroke-[2.5]" />
            <span>Start Free</span>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
