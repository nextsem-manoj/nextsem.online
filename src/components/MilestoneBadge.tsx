"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Trophy, Star, ArrowRight, Share2 } from "lucide-react";

interface MilestoneBadgeProps {
  milestone: number;
  onClose: () => void;
}

const MILESTONE_CONFIG: Record<number, {
  emoji: string;
  title: string;
  subtitle: string;
  badgeColor: string;
  nextCourse?: { label: string; href: string };
}> = {
  10: {
    emoji: "🌟",
    title: "10 Lessons Mastered!",
    subtitle: "You're building momentum. Keep going — you're in the top 30% of learners!",
    badgeColor: "from-sky-500 to-blue-600",
  },
  25: {
    emoji: "🔥",
    title: "25 Lessons Completed!",
    subtitle: "Quarter century! You're officially a consistent learner. The terminal bows to you!",
    badgeColor: "from-orange-500 to-rose-600",
  },
  50: {
    emoji: "⚡",
    title: "50 Lessons — Halfway Hero!",
    subtitle: "Half the journey done. Developers who reach Lesson 50 almost always finish the course!",
    badgeColor: "from-violet-500 to-purple-700",
  },
  100: {
    emoji: "🏆",
    title: "100 Lessons Mastered!",
    subtitle: "You've completed the FULL Windows CMD & PowerShell curriculum! You are now a CLI developer!",
    badgeColor: "from-amber-400 to-yellow-600",
    nextCourse: { label: "Start CSS3 Course →", href: "/html" },
  },
};

export default function MilestoneBadge({ milestone, onClose }: MilestoneBadgeProps) {
  const config = MILESTONE_CONFIG[milestone] || {
    emoji: "🎯",
    title: `${milestone} Lessons Done!`,
    subtitle: "Outstanding consistency! Keep pushing forward.",
    badgeColor: "from-emerald-500 to-teal-600",
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mini confetti burst
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: canvas.width / 2,
      y: canvas.height * 0.3,
      vx: (Math.random() - 0.5) * 8,
      vy: -(Math.random() * 6 + 2),
      r: Math.random() * 4 + 2,
      color: ["#04AA6D", "#f59e0b", "#8b5cf6", "#ec4899", "#38bdf8"][Math.floor(Math.random() * 5)],
      alpha: 1,
    }));

    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        p.alpha -= 0.012;
        if (p.alpha <= 0) return;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      if (particles.some((p) => p.alpha > 0)) {
        frame = requestAnimationFrame(animate);
      }
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const shareText = `🏆 I just completed ${milestone} lessons on Nextsem! Learning full stack web development for free. ${config.emoji}`;
  const shareUrl = typeof window !== "undefined" ? "https://nextsem.online/cli" : "https://nextsem.online/cli";

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-sm bg-[#080e1f] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">

        {/* Confetti canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X size={13} />
        </button>

        {/* Badge content */}
        <div className="relative z-10 flex flex-col items-center text-center p-8 pt-10 gap-4">
          {/* Badge icon */}
          <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${config.badgeColor} flex items-center justify-center text-4xl shadow-2xl ring-4 ring-white/10`}>
            {config.emoji}
          </div>

          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
            ))}
          </div>

          <div>
            <h2 className="text-xl font-black text-white tracking-tight">{config.title}</h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed font-medium">{config.subtitle}</p>
          </div>

          {/* Badge stamp */}
          <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${config.badgeColor} text-[11px] font-extrabold text-white uppercase tracking-widest shadow-lg`}>
            🏅 {milestone} Lessons Badge Earned
          </div>

          {/* Actions */}
          <div className="w-full flex flex-col gap-2 mt-1">
            {config.nextCourse && (
              <Link
                href={config.nextCourse.href}
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#04AA6D] hover:bg-[#039861] text-white text-sm font-extrabold transition-all shadow-lg"
              >
                <Trophy size={15} />
                {config.nextCourse.label}
                <ArrowRight size={14} />
              </Link>
            )}

            {/* Share Achievement */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-400 text-sm font-bold transition-all hover:bg-sky-500/30"
            >
              <Share2 size={14} />
              Share Achievement 🐦
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-400 text-sm font-bold hover:text-white transition cursor-pointer"
            >
              Continue Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
