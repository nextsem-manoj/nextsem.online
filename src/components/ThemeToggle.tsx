"use client";

import * as React from "react";
import { Sun, Moon, Coffee } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[112px] h-9 rounded-full bg-slate-950/40 border border-slate-800/40 shrink-0" />;
  }

  const themes = [
    { name: "light", icon: <Sun size={14} />, label: "Light", color: "text-yellow-500" },
    { name: "dark", icon: <Moon size={14} />, label: "Dark", color: "text-blue-400" },
    { name: "night-light", icon: <Coffee size={14} />, label: "Night", color: "text-amber-500" },
  ];

  const activeIdx = themes.findIndex((t) => t.name === (theme || "dark"));
  const slideLeft = 4 + (activeIdx >= 0 ? activeIdx : 1) * 36;

  return (
    <div className="relative flex items-center bg-slate-950/80 border border-slate-800/80 rounded-full p-1 shadow-inner select-none h-9 w-[112px] gap-1 shrink-0">
      {/* Sliding highlight container */}
      <div 
        className="absolute top-1 bottom-1 bg-slate-800/90 rounded-full shadow-md transition-all duration-[300ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          width: "32px",
          left: `${slideLeft}px`,
        }}
      />
      
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`relative z-10 w-8 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
            theme === t.name ? t.color : "text-slate-400 hover:text-slate-200"
          }`}
          title={`Switch to ${t.label} Theme`}
          aria-label={`Switch to ${t.label} Theme`}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
