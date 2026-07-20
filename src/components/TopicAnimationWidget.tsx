"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RefreshCw, Eye, Sparkles, Monitor, Smartphone, Terminal, Code2, Layers, Cpu, Globe, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

interface TopicAnimationWidgetProps {
  lessonId: number;
  lessonTitle: string;
  type: "html" | "cli";
}

export default function TopicAnimationWidget({ lessonId, lessonTitle, type }: TopicAnimationWidgetProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [step, setStep] = useState(0);
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("mobile");
  const [activeTab, setActiveTab] = useState<"analogy" | "code">("analogy");

  // Auto-advance animation steps
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const lowerTitle = lessonTitle.toLowerCase();

  // Determine specific visual animation mode based on lesson topic
  const isViewportTopic = lowerTitle.includes("viewport") || lowerTitle.includes("mobile") || lowerTitle.includes("meta");
  const isClippedCliTopic = type === "cli" || lowerTitle.includes("cmd") || lowerTitle.includes("command") || lowerTitle.includes("terminal");
  const isFormTopic = lowerTitle.includes("form") || lowerTitle.includes("input") || lowerTitle.includes("button");
  const isInternetTopic = lowerTitle.includes("internet") || lowerTitle.includes("server") || lowerTitle.includes("client") || lowerTitle.includes("dns");

  // Everyday Real-Life Analogy Metadata
  const getRealLifeAnalogy = () => {
    if (isViewportTopic) {
      return {
        title: "👓 Real-Life Analogy: The Reading Glasses Effect",
        story: "Imagine reading a massive newspaper page through a tiny keyhole! Without the Viewport tag, mobile phones display a giant desktop screen shrunk down so small you have to zoom in constantly.",
        solution: "Adding initial-scale=1.0 & width=device-width is like putting on custom Prescription Glasses — it automatically fits every sentence to your screen!",
        icon: "📱",
        step1: "📰 Desktop Layout (1024px wide)",
        step2: "🔍 Shrunk onto tiny mobile screen without Viewport",
        step3: "👓 Viewport Tag applied ➔ 100% Fit & Auto-Scaled!"
      };
    }
    if (isClippedCliTopic) {
      return {
        title: "📂 Real-Life Analogy: Physical Office Filing Cabinet",
        story: "Imagine an office file cabinet filled with paper folders. Running terminal commands is like managing files with your hands!",
        solution: "mkdir = placing a new folder in cabinet, cd = opening that folder, dir = spreading paper files across your desk to read them!",
        icon: "📁",
        step1: "📥 mkdir Project ➔ New folder created in cabinet",
        step2: "🚪 cd Project ➔ Stepping inside folder",
        step3: "📄 dir ➔ Spreading all paperwork across desk"
      };
    }
    if (isFormTopic) {
      return {
        title: "📝 Real-Life Analogy: Bank Deposit Slip",
        story: "Filling out an HTML form is just like filling a Bank Deposit Slip at a cash counter!",
        solution: "<input> = writing your name & amount, <select> = choosing savings/checking, <button type='submit'> = handing slip to teller!",
        icon: "✍️",
        step1: "📝 Fill Name & Amount in fields (<input>)",
        step2: "🔘 Select Account Type (<select>)",
        step3: "🚀 Tap Submit ➔ Slip sent to Bank Teller (Server)"
      };
    }
    if (isInternetTopic) {
      return {
        title: "🍕 Real-Life Analogy: Zomato / Swiggy Food Delivery",
        story: "Understanding how the Internet works is just like ordering a pizza online!",
        solution: "Your Browser (Client) places order (HTTP Request) ➔ Delivery Highway (Router) ➔ Kitchen (Server) bakes pizza & sends it to your doorstep (HTTP Response)!",
        icon: "🛵",
        step1: "📱 Client (You): Tap 'Order Pizza' (Request)",
        step2: "🛵 Internet Highway (Routers): Transport data",
        step3: "🍕 Server (Kitchen): Sends website data back (Response)"
      };
    }
    return {
      title: "🏗️ Real-Life Analogy: Building a House",
      story: "HTML is like building the brick and cement skeleton of a modern house!",
      solution: "HTML = Brick Wall Skeleton, CSS = Paint & Interior Decor, JavaScript = Light Switches & Electrical Wiring!",
      icon: "🏡",
      step1: "🧱 HTML: Raw Brick & Pillar Skeleton",
      step2: "🎨 CSS: Wall Colors & Furniture Styling",
      step3: "⚡ JS: Interactive Light Switches"
    };
  };

  const analogy = getRealLifeAnalogy();

  return (
    <div className="my-6 bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl text-left select-none animate-in fade-in duration-500">
      {/* Widget Top Header Bar */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded-md shrink-0">
            🎬 REAL-LIFE VISUAL DEMO
          </span>
          <h4 className="text-xs font-bold text-slate-200 truncate">
            {lessonTitle}: Visual Analogy & Live Simulation
          </h4>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5 text-[10px] font-bold">
            <button
              onClick={() => setActiveTab("analogy")}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                activeTab === "analogy" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"
              }`}
            >
              💡 Real-Life Story
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                activeTab === "code" ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-white"
              }`}
            >
              💻 Live Code Demo
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer text-xs flex items-center gap-1 font-bold"
            title={isPlaying ? "Pause Demo" : "Play Demo"}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span className="hidden sm:inline text-[10px]">{isPlaying ? "Pause" : "Play"}</span>
          </button>
        </div>
      </div>

      {/* Real-Life Analogy Banner Card */}
      <div className="bg-gradient-to-r from-amber-950/30 via-slate-900/60 to-emerald-950/30 p-4 border-b border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="text-2xl p-2 bg-amber-500/10 border border-amber-500/30 rounded-xl shrink-0">
            {analogy.icon}
          </span>
          <div>
            <h5 className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1">
              <Lightbulb size={13} className="text-amber-400" />
              {analogy.title}
            </h5>
            <p className="text-xs text-slate-300 font-semibold leading-relaxed mt-1">
              {analogy.story}
            </p>
            <span className="text-[11px] text-emerald-400 font-bold block mt-1">
              ✨ <span className="underline">Code Equivalent</span>: {analogy.solution}
            </span>
          </div>
        </div>

        {/* Step Indicator Badges */}
        <div className="flex items-center gap-1.5 shrink-0 self-end md:self-auto bg-slate-950/80 p-2 rounded-xl border border-slate-800">
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 mr-1">Looping Step:</span>
          {[0, 1, 2].map((s) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                step === s ? "bg-amber-500 text-slate-950 scale-105" : "bg-slate-800 text-slate-400"
              }`}
            >
              {s === 0 ? "1. Real-Life" : s === 1 ? "2. Code Input" : "3. Visual Render"}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Animation Viewport Body */}
      <div className="p-4 md:p-6 bg-[#080d1a] relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

        {/* ── TOPIC CASE 1: Viewport & Mobile Scaling Demonstration ── */}
        {isViewportTopic ? (
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between bg-slate-900/80 p-2 rounded-xl border border-slate-800 text-xs">
              <span className="text-slate-400 font-mono text-[11px]">Toggle Device Layout:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setViewportMode("desktop")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    viewportMode === "desktop" ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  <Monitor size={12} /> Without Viewport (Tiny Keyhole View)
                </button>
                <button
                  onClick={() => setViewportMode("mobile")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    viewportMode === "mobile" ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  <Smartphone size={12} /> With Viewport (Glasses On 👓 Auto-Fit)
                </button>
              </div>
            </div>

            {/* Side-by-Side Screen Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Without Viewport Tag */}
              <div className={`border-2 rounded-2xl p-4 transition-all duration-500 ${viewportMode === "desktop" ? "border-amber-500 bg-amber-950/20" : "border-slate-800 bg-slate-900/40"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-amber-400 uppercase">❌ Without Meta Viewport</span>
                  <span className="text-[9px] font-mono text-slate-400">Fixed 1024px Desktop Layout</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-amber-500/30 h-44 flex flex-col justify-center items-center overflow-hidden relative">
                  <div className="transform scale-[0.45] origin-top text-center w-[400px] space-y-2 pointer-events-none opacity-60">
                    <div className="h-6 bg-slate-800 rounded w-full flex items-center px-3 text-[10px] text-slate-400">Header Bar</div>
                    <div className="h-16 bg-blue-900/40 border border-blue-500/40 rounded p-2 text-xs text-blue-300">
                      Unscaled Desktop Website (Hard to Read on Mobile without Zooming!)
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-10 bg-slate-800 rounded" />
                      <div className="h-10 bg-slate-800 rounded" />
                      <div className="h-10 bg-slate-800 rounded" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] px-2 py-0.5 rounded-full font-bold">
                    🔍 Pinch-to-Zoom Required!
                  </div>
                </div>
              </div>

              {/* With Meta Viewport Tag */}
              <div className={`border-2 rounded-2xl p-4 transition-all duration-500 ${viewportMode === "mobile" ? "border-emerald-500 bg-emerald-950/20" : "border-slate-800 bg-slate-900/40"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-emerald-400 uppercase">✅ With &lt;meta name="viewport"&gt;</span>
                  <span className="text-[9px] font-mono text-slate-400">width=device-width</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-emerald-500/30 h-44 flex flex-col justify-between overflow-hidden relative">
                  <div className="w-full space-y-2 animate-pulse">
                    <div className="h-5 bg-emerald-500/20 border border-emerald-500/40 rounded-lg flex items-center justify-between px-2 text-[10px] font-bold text-emerald-300">
                      <span>📱 Responsive Mobile Web</span>
                      <span>100% Fit</span>
                    </div>
                    <p className="text-[11px] text-slate-200 font-semibold leading-tight">
                      Layout automatically fits device width dynamically! Perfect legibility without zooming.
                    </p>
                    <div className="grid grid-cols-1 gap-1.5 pt-1">
                      <div className="h-6 bg-slate-800/80 rounded-lg flex items-center px-2 text-[10px] text-slate-300">⚡ Stacked Mobile Card 1</div>
                      <div className="h-6 bg-slate-800/80 rounded-lg flex items-center px-2 text-[10px] text-slate-300">⚡ Stacked Mobile Card 2</div>
                    </div>
                  </div>
                  <div className="mt-1 bg-emerald-500 text-slate-950 font-black text-[10px] py-1 px-3 rounded-lg text-center shadow-lg">
                    ✨ Perfect Mobile UX!
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : isClippedCliTopic ? (
          /* ── TOPIC CASE 2: Command Line Terminal Simulation GIF ── */
          <div className="space-y-3 relative z-10 font-mono">
            <div className="bg-black/90 rounded-xl border border-slate-800 p-4 shadow-2xl text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[10px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Terminal size={14} className="text-emerald-400" />
                  <span className="font-bold text-slate-200">🪟 Windows Command Prompt (CMD.EXE)</span>
                </div>
                <span>Step {step + 1} of 4</span>
              </div>

              {/* Terminal Code Typing Loop */}
              <div className="space-y-2 min-h-[110px] text-left">
                <div className="text-slate-400">
                  C:\Users\Nextsem&gt; <span className="text-emerald-400 font-bold animate-pulse">
                    {step === 0 && "ver"}
                    {step === 1 && "mkdir MyFirstProject"}
                    {step === 2 && "cd MyFirstProject"}
                    {step === 3 && "dir"}
                  </span>
                </div>

                <div className="text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-850 text-[11px] leading-relaxed">
                  {step === 0 && (
                    <div className="text-emerald-300">
                      Microsoft Windows [Version 10.0.22621.1702]<br />
                      <span className="text-[10px] text-slate-400 font-sans mt-1 block">💡 <span className="font-bold">ver</span> prints active OS build details.</span>
                    </div>
                  )}
                  {step === 1 && (
                    <div className="text-blue-300">
                      Directory created: C:\Users\Nextsem\MyFirstProject<br />
                      <span className="text-[10px] text-slate-400 font-sans mt-1 block">💡 <span className="font-bold">mkdir</span> creates new folder directories.</span>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="text-purple-300">
                      Active Path Changed ➔ C:\Users\Nextsem\MyFirstProject&gt;<br />
                      <span className="text-[10px] text-slate-400 font-sans mt-1 block">💡 <span className="font-bold">cd</span> navigates inside the folder path.</span>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="text-amber-300">
                      07/20/2026 09:40 PM &lt;DIR&gt; .<br />
                      07/20/2026 09:40 PM &lt;DIR&gt; ..<br />
                      <span className="text-[10px] text-slate-400 font-sans mt-1 block">💡 <span className="font-bold">dir</span> lists all files and folders in directory.</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Interactive Step Controls */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-850">
                <span className="text-[10px] text-slate-500">Live Command Execution Loop</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStep(s)}
                      className={`w-6 h-6 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                        step === s ? "bg-emerald-500 text-slate-950 scale-110" : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {s + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : isFormTopic ? (
          /* ── TOPIC CASE 3: HTML Forms & Input Controls Demonstration ── */
          <div className="space-y-3 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono">
                <span className="text-[10px] font-bold text-indigo-400 block mb-2">💻 HTML Code:</span>
                <pre className="text-slate-300 bg-slate-900 p-3 rounded-lg overflow-x-auto text-[11px] leading-relaxed">
{`<form action="/submit">
  <label>User Name:</label>
  <input type="text" 
         placeholder="Enter name" />
  <button type="submit">
    Submit
  </button>
</form>`}
                </pre>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/30 text-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 block mb-2">🌐 Browser UI Output:</span>
                  <div className="space-y-2 bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <label className="text-[11px] text-slate-300 font-bold block text-left">User Name:</label>
                    <input
                      type="text"
                      readOnly
                      value={step % 2 === 0 ? "John Developer" : "Nextsem Student"}
                      className="w-full bg-slate-950 border border-indigo-500/50 px-3 py-1.5 rounded text-xs text-emerald-300 font-bold transition-all"
                    />
                    <button className="w-full bg-emerald-500 text-slate-950 font-black py-1.5 rounded hover:bg-emerald-400 transition-all cursor-pointer text-xs">
                      Submit Form 🚀
                    </button>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-sans mt-2 block">
                  💡 Forms capture user input fields and transmit data to servers!
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* ── TOPIC CASE 4: Standard Code-to-Browser Render Demonstration ── */
          <div className="space-y-3 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Code Panel */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-blue-400 flex items-center gap-1">
                    <Code2 size={12} /> HTML Source Code
                  </span>
                  <span className="text-[9px] text-slate-500">Live Editor</span>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 text-[11px] text-slate-300 leading-relaxed font-mono">
                  <span className="text-purple-400">&lt;div</span> <span className="text-amber-300">class</span>=<span className="text-emerald-300">"lesson-card"</span><span className="text-purple-400">&gt;</span><br />
                  &nbsp;&nbsp;<span className="text-purple-400">&lt;h3&gt;</span>{lessonTitle}<span className="text-purple-400">&lt;/h3&gt;</span><br />
                  &nbsp;&nbsp;<span className="text-purple-400">&lt;p&gt;</span>Visual learning demo...<span className="text-purple-400">&lt;/p&gt;</span><br />
                  <span className="text-purple-400">&lt;/div&gt;</span>
                </div>
              </div>

              {/* Rendered Preview Panel */}
              <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 text-xs text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <Globe size={12} /> Rendered Browser View
                    </span>
                    <span className="text-[9px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      100% Match
                    </span>
                  </div>
                  <div className="bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40 space-y-1.5 shadow-lg animate-in zoom-in-95 duration-300">
                    <h3 className="text-sm font-black text-white flex items-center gap-1.5">
                      <Sparkles size={14} className="text-emerald-400" />
                      {lessonTitle}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      Browsers read HTML tags to display visually styled text, images, and interactive controls!
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-sans mt-3 block">
                  💡 Code is instantly transformed into rich visual components!
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
