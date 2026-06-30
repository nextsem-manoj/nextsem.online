"use client";

import React, { useState, useEffect } from "react";
import BookSidebar from "@/components/BookSidebar";
import { Type, Check, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");
  const [readTheme, setReadTheme] = useState<"default" | "sepia" | "dark">("default");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const savedFontSize = localStorage.getItem("read_font_size") as any;
    if (savedFontSize) setFontSize(savedFontSize);

    const savedReadTheme = localStorage.getItem("read_theme") as any;
    if (savedReadTheme) {
      setReadTheme(savedReadTheme);
    } else if (theme === "dark") {
      setReadTheme("dark");
    }
  }, [theme]);

  const handleThemeChange = (newTheme: "default" | "sepia" | "dark") => {
    setReadTheme(newTheme);
    localStorage.setItem("read_theme", newTheme);
    if (newTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleFontSizeChange = (newSize: "sm" | "base" | "lg" | "xl") => {
    setFontSize(newSize);
    localStorage.setItem("read_font_size", newSize);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#060c18] text-gray-900 dark:text-gray-100 font-sans pb-20">
        <div className="flex-1 flex flex-col md:flex-row w-full max-w-[1600px] mx-auto">
          <BookSidebar />
          <main className="flex-1 p-4 md:p-8 w-full max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 min-h-[80vh]">
              {children}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Map settings state to prose sizing classes
  const fontSizeClass = {
    sm: "prose-sm",
    base: "prose-base",
    lg: "prose-lg",
    xl: "prose-xl",
  }[fontSize];

  // Map settings state to layout theme classes
  const themeClass = {
    default: "bg-white border-gray-200 dark:bg-slate-900 dark:border-slate-800 text-gray-900 dark:text-gray-100",
    sepia: "sepia-mode border-[#e6dcc8]",
    dark: "bg-slate-900 border-slate-800 text-slate-100",
  }[readTheme];

  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 dark:bg-[#060c18] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-200 pb-20 transition-colors duration-300 ${readTheme === 'sepia' ? 'bg-[#f4ecd8] dark:bg-[#f4ecd8]' : ''}`}>
      <div className="flex-1 flex flex-col md:flex-row w-full max-w-[1600px] mx-auto">
        <BookSidebar />

        <main className="flex-1 p-4 md:p-8 w-full max-w-4xl mx-auto relative">
          
          {/* Main Reading Container */}
          <div className={`p-6 md:p-10 rounded-xl shadow-sm border relative z-10 min-h-[80vh] transition-all duration-300 ${themeClass} ${fontSizeClass}`}>
            {children}
          </div>

          {/* Floating Settings Button ("Aa") */}
          <div className="fixed bottom-20 right-4 z-40">
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="w-12 h-12 bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
              aria-label="Reading Settings"
            >
              <Type size={20} />
            </button>

            {settingsOpen && (
              <>
                {/* Backdrop overlay for closing settings */}
                <div className="fixed inset-0 z-10" onClick={() => setSettingsOpen(false)} />
                
                {/* Settings Popover */}
                <div className="absolute right-0 bottom-14 w-64 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-4 rounded-2xl shadow-2xl z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-slate-800 pb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500">Reading Settings</span>
                    <button onClick={() => setSettingsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                      <X size={16} />
                    </button>
                  </div>

                  {/* Font Size Option */}
                  <div className="mb-4">
                    <span className="block text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 mb-2">Font Size</span>
                    <div className="grid grid-cols-4 gap-1 bg-gray-100 dark:bg-slate-900 p-1 rounded-lg">
                      {(["sm", "base", "lg", "xl"] as const).map((size) => (
                        <button
                          key={size}
                          onClick={() => handleFontSizeChange(size)}
                          className={`py-1 text-[11px] font-bold rounded capitalize transition-all ${
                            fontSize === size
                              ? "bg-white dark:bg-slate-850 text-blue-600 dark:text-blue-400 shadow-sm"
                              : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                          }`}
                        >
                          {size === 'base' ? 'Med' : size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theme Option */}
                  <div>
                    <span className="block text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 mb-2">Theme</span>
                    <div className="flex flex-col gap-1.5">
                      {(["default", "sepia", "dark"] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => handleThemeChange(t)}
                          className={`flex items-center justify-between w-full px-3 py-2 text-xs font-bold rounded-lg transition-colors ${
                            readTheme === t
                              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/30"
                              : "hover:bg-gray-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-3.5 h-3.5 rounded-full border border-gray-300/60 ${
                              t === 'default' ? 'bg-white' : t === 'sepia' ? 'bg-[#f7f1e5]' : 'bg-slate-900'
                            }`} />
                            <span className="capitalize">{t}</span>
                          </div>
                          {readTheme === t && <Check size={14} className="text-blue-600 dark:text-blue-400" />}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}
