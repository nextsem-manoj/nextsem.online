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
    return <div className="w-8 h-8 rounded-full bg-slate-950/40 border border-slate-800/40 shrink-0" />;
  }

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('night-light');
    else setTheme('light');
  };

  return (
    <button
      onClick={cycleTheme}
      className="w-8 h-8 rounded-full border bg-slate-100 dark:bg-slate-950 border-slate-250 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0"
      title="Toggle Contrast Mode"
      aria-label="Toggle Contrast Mode"
    >
      {theme === "light" && <Sun size={14} className="text-yellow-500" />}
      {theme === "dark" && <Moon size={14} className="text-blue-400" />}
      {theme === "night-light" && <Coffee size={14} className="text-amber-500" />}
      {!["light", "dark", "night-light"].includes(theme || "") && <Sun size={14} />}
    </button>
  );
}
