"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Play, RotateCcw, Layout, FileCode, CheckCircle, Terminal, HelpCircle, 
  ArrowLeft, Sun, Moon, Coffee, Trash2, Plus, Sliders, Type, Grid, MousePointerClick,
  RefreshCw, Sparkles, Globe
} from "lucide-react";

interface LogEntry {
  type: "log" | "error";
  message: string;
}

interface UIComponent {
  id: string;
  type: "div" | "h1" | "p" | "button" | "a" | "img";
  content: string;
  styles: {
    backgroundColor: string;
    color: string;
    borderRadius: string;
    padding: string;
    fontSize: string;
    margin: string;
    textAlign: string;
  };
  src?: string;
  href?: string;
}

const TEMPLATES = {
  basic: {
    html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Web Page</title>\n</head>\n<body>\n  <h1>Welcome to Nextsem Academy!</h1>\n  <p>This is a basic HTML web page. You can add HTML elements inside the body tag.</p>\n  <button id="alertBtn">Test Click</button>\n</body>\n</html>`,
    css: `body {\n  background-color: #0f172a;\n  color: #f8fafc;\n  padding: 24px;\n  font-family: sans-serif;\n}\n\nh1 {\n  color: #3b82f6;\n  font-size: 28px;\n}\n\np {\n  color: #94a3b8;\n  font-size: 16px;\n}\n\nbutton {\n  background: #10b981;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: bold;\n  cursor: pointer;\n  margin-top: 16px;\n}`,
    js: `console.log("Welcome to your code sandbox!");\n\nconst btn = document.getElementById("alertBtn");\nif (btn) {\n  btn.addEventListener("click", () => {\n    console.log("Button clicked!");\n    alert("Interactive code is working!");\n  });\n}`
  }
};

export default function PlaygroundClient() {
  const [playTheme, setPlayTheme] = useState<"default" | "sepia" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("play_theme") as "default" | "sepia" | "dark" | null;
      return saved || "dark";
    }
    return "dark";
  });
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [editorMode, setEditorMode] = useState<"builder" | "editor">("builder"); // Builder vs Manual Code
  const [viewMode, setViewMode] = useState<"editor" | "preview">("editor"); // Mobile tab view
  
  const [htmlCode, setHtmlCode] = useState(TEMPLATES.basic.html);
  const [cssCode, setCssCode] = useState(TEMPLATES.basic.css);
  const [jsCode, setJsCode] = useState(TEMPLATES.basic.js);
  
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [iframeSrcDoc, setIframeSrcDoc] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const highlightRef = useRef<HTMLPreElement>(null);

  // DIY Canvas Components state
  const [components, setComponents] = useState<UIComponent[]>([
    {
      id: "comp-1",
      type: "h1",
      content: "🎨 My Visual Masterpiece",
      styles: {
        backgroundColor: "transparent",
        color: "#38bdf8",
        borderRadius: "0px",
        padding: "12px",
        fontSize: "26px",
        margin: "8px",
        textAlign: "center"
      }
    },
    {
      id: "comp-2",
      type: "p",
      content: "This beautiful page was built by dragging, dropping, and styling elements! Try dragging a new button or clicking this text to edit its styles.",
      styles: {
        backgroundColor: "transparent",
        color: "#94a3b8",
        borderRadius: "0px",
        padding: "8px",
        fontSize: "14px",
        margin: "8px",
        textAlign: "center"
      }
    },
    {
      id: "comp-3",
      type: "button",
      content: "✨ Click Me!",
      styles: {
        backgroundColor: "#10b981",
        color: "#ffffff",
        borderRadius: "8px",
        padding: "10px",
        fontSize: "13px",
        margin: "12px",
        textAlign: "center"
      }
    }
  ]);
  const [activeCompId, setActiveCompId] = useState<string | null>("comp-1");
  const [builderTab, setBuilderTab] = useState<"palette" | "canvas" | "properties">("canvas");
  const [liveServer, setLiveServer] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);



  // Compile and run the code
  const compileAndRun = (html: string, css: string, js: string, theme: "default" | "sepia" | "dark" = playTheme) => {
    setLogs([]);
    const trimmedHtml = html.trim();
    
    const interceptScript = `
      <script>
        const _log = console.log;
        console.log = (...args) => {
          _log(...args);
          const serialized = args.map(a => 
            typeof a === 'object' ? JSON.stringify(a) : String(a)
          ).join(' ');
          window.parent.postMessage({ type: 'CONSOLE_LOG', message: serialized }, '*');
        };
        
        window.onerror = (message, source, lineno, colno) => {
          window.parent.postMessage({ 
            type: 'CONSOLE_ERROR', 
            message: message + " (Line " + lineno + ")"
          }, '*');
          return false;
        };
      </script>
    `;

    const userScript = `
      <script>
        try {
          ${js}
        } catch(e) {
          console.log("❌ Error: " + e.message);
        }
      </script>
    `;

    const iframeBg = theme === "default" ? "#ffffff" : theme === "sepia" ? "#f7f1e5" : "#0f172a";
    const iframeColor = theme === "default" ? "#0f172a" : theme === "sepia" ? "#433422" : "#f8fafc";

    const srcDoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: 'Inter', sans-serif;
              margin: 0;
              padding: 24px;
              background: ${iframeBg};
              color: ${iframeColor};
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 80vh;
            }
            ${css}
          </style>
          ${interceptScript}
        </head>
          <body>
            ${trimmedHtml}
            ${userScript}
          </body>
      </html>
    `;
    setIframeSrcDoc(srcDoc);
  };

  const runCode = () => {
    if (editorMode === "builder") {
      const generated = generateHTML(components);
      compileAndRun(generated, cssCode, jsCode, playTheme);
    } else {
      compileAndRun(htmlCode, cssCode, jsCode, playTheme);
    }
  };

  // Run on mount
  useEffect(() => {
    const initialTheme = playTheme;
    const timer = setTimeout(() => {
      if (editorMode === "builder") {
        const generated = generateHTML(components);
        compileAndRun(generated, cssCode, jsCode, initialTheme);
      } else {
        compileAndRun(htmlCode, cssCode, jsCode, initialTheme);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [editorMode, components, playTheme]);

  // Listen console logs
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "CONSOLE_LOG") {
        setLogs((prev) => [...prev, { type: "log", message: e.data.message }]);
      } else if (e.data && e.data.type === "CONSOLE_ERROR") {
        setLogs((prev) => [...prev, { type: "error", message: e.data.message }]);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Sync scroll positions for editor syntax highlighting
  useEffect(() => {
    if (editorRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = editorRef.current.scrollTop;
      highlightRef.current.scrollLeft = editorRef.current.scrollLeft;
    }
  }, [htmlCode, cssCode, jsCode, activeTab]);

  const handleScroll = () => {
    if (editorRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = editorRef.current.scrollTop;
      highlightRef.current.scrollLeft = editorRef.current.scrollLeft;
    }
  };

  // Live Server Hot-Reload Debounce Effect
  useEffect(() => {
    if (!liveServer) return;
    
    const timer = setTimeout(() => {
      if (editorMode === "builder") {
        const generated = generateHTML(components);
        compileAndRun(generated, cssCode, jsCode, playTheme);
      } else {
        compileAndRun(htmlCode, cssCode, jsCode, playTheme);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [htmlCode, cssCode, jsCode, editorMode, components, playTheme, liveServer]);

  const handleFormat = () => {
    setIsFormatting(true);
    setTimeout(() => {
      if (activeTab === "html") {
        setHtmlCode(formatHTML(htmlCode));
      } else if (activeTab === "css") {
        setCssCode(formatCSS(cssCode));
      } else if (activeTab === "js") {
        setJsCode(formatJS(jsCode));
      }
      setIsFormatting(false);
    }, 300);
  };

  function generateHTML(comps: UIComponent[]) {
    return comps.map(c => {
      const styleStr = `background-color: ${c.styles.backgroundColor}; color: ${c.styles.color}; border-radius: ${c.styles.borderRadius}; padding: ${c.styles.padding}; font-size: ${c.styles.fontSize}; margin: ${c.styles.margin}; text-align: ${c.styles.textAlign}; border: none; font-weight: bold; cursor: pointer; transition: all 0.2s; display: inline-block;`;
      
      if (c.type === "h1") return `<h1 style="${styleStr}">${c.content}</h1>`;
      if (c.type === "p") return `<p style="${styleStr}">${c.content}</p>`;
      if (c.type === "button") return `<button style="${styleStr}">${c.content}</button>`;
      if (c.type === "a") return `<a href="${c.href || '#'}" style="${styleStr}">${c.content}</a>`;
      if (c.type === "img") return `<img src="${c.src || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400'}" style="${styleStr} max-width:100%; height:auto;" alt="Visual item" />`;
      return `<div style="${styleStr}">${c.content}</div>`;
    }).join("\n");
  }

  // Drag & drop logic
  const handleDragStart = (e: React.DragEvent, type: UIComponent["type"]) => {
    e.dataTransfer.setData("text/plain", type);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("text/plain") as UIComponent["type"];
    if (!type) return;

    const newComp: UIComponent = {
      id: `comp-${Date.now()}`,
      type,
      content: type === "button" ? "🔥 Action" : type === "h1" ? "New Header" : type === "img" ? "" : "Tap to edit content",
      styles: {
        backgroundColor: type === "button" ? "#3b82f6" : "transparent",
        color: type === "button" ? "#ffffff" : "#f8fafc",
        borderRadius: type === "button" ? "8px" : "0px",
        padding: "10px",
        fontSize: type === "h1" ? "22px" : "14px",
        margin: "8px",
        textAlign: "center"
      }
    };
    setComponents((prev) => [...prev, newComp]);
    setActiveCompId(newComp.id);
  };

  const updateActiveCompStyle = (key: keyof UIComponent["styles"], val: string) => {
    if (!activeCompId) return;
    setComponents((prev) => prev.map((c) => {
      if (c.id === activeCompId) {
        return { ...c, styles: { ...c.styles, [key]: val } };
      }
      return c;
    }));
  };

  const updateActiveCompContent = (val: string) => {
    if (!activeCompId) return;
    setComponents((prev) => prev.map((c) => {
      if (c.id === activeCompId) {
        return { ...c, content: val };
      }
      return c;
    }));
  };

  const deleteActiveComp = () => {
    if (!activeCompId) return;
    setComponents((prev) => prev.filter((c) => c.id !== activeCompId));
    setActiveCompId(null);
  };

  const activeComp = components.find(c => c.id === activeCompId);
  const isLight = playTheme === "default";
  const isSepia = playTheme === "sepia";

  return (
    <div className={`h-[100dvh] w-full flex flex-col font-sans overflow-hidden select-none transition-colors duration-300 ${isLight ? "bg-slate-100 text-slate-900" : isSepia ? "bg-[#f4ecd8] text-[#5b4636]" : "bg-slate-900 text-white"}`}>
      
      {/* ── HEADER ── */}
      <header className={`flex justify-between items-center px-4 py-3 border-b transition-colors duration-300 z-10 shrink-0 ${isLight ? "bg-white border-slate-200" : isSepia ? "bg-[#ebdcb9] border-[#e6dcc8]" : "bg-slate-950 border-slate-800"}`}>
        <div className="flex items-center gap-3">
          <Link href="/" className={`p-1.5 rounded-lg transition-colors ${isLight ? "bg-slate-100 hover:bg-slate-200 text-slate-600" : isSepia ? "bg-[#ebdcb9]/60 hover:bg-[#ebdcb9] text-[#705845]" : "bg-slate-900 hover:bg-slate-800 text-slate-400"}`}>
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-sm font-black uppercase tracking-wider flex items-center gap-1.5">
              <span>Nextsem DIY Simulation Sandbox</span>
            </h1>
            <p className={`text-[10px] hidden sm:block ${isLight ? "text-slate-500" : isSepia ? "text-[#705845]/90" : "text-slate-400"}`}>
              Drag items, customize styles visually, and compile live code output.
            </p>
          </div>
        </div>

        {/* Builder / Code Editor toggle */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-900/60 p-1 border border-white/5 rounded-xl mr-4">
            <button 
              onClick={() => setEditorMode("builder")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${editorMode === "builder" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
            >
              <MousePointerClick size={12} />
              <span>Visual Builder</span>
            </button>
            <button 
              onClick={() => {
                setEditorMode("editor");
                setHtmlCode(generateHTML(components));
              }}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${editorMode === "editor" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
            >
              <FileCode size={12} />
              <span>Code Editor</span>
            </button>
          </div>

          <button 
            onClick={runCode}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg font-black text-xs shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Play size={13} className="fill-white" />
            <span>RUN</span>
          </button>
        </div>
      </header>

      {/* ── WORKSPACE PANELS ── */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative pb-[104px] md:pb-14">
        
        {/* VISUAL BUILDER VIEW PANEL */}
        {editorMode === "builder" && (
          <div className="flex-1 flex overflow-hidden">
            
            {/* Palette Panel (Left) */}
            <div className={`w-full md:w-48 border-r flex flex-col p-4 space-y-3 shrink-0 ${builderTab === "palette" ? "flex" : "hidden md:flex"} ${isLight ? "bg-slate-50 border-slate-200" : isSepia ? "bg-[#ebdcb9]/40 border-[#e6dcc8]" : "bg-slate-950/60 border-slate-900"}`}>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Components</span>
              <p className="text-[9px] text-slate-450 leading-relaxed">Drag components into the visual canvas area to design:</p>
              
              <div 
                draggable 
                onDragStart={(e) => handleDragStart(e, "h1")}
                className="p-3 bg-[#0d1527] hover:bg-[#121c33] border border-slate-800 rounded-xl cursor-grab flex items-center gap-2 text-xs font-black text-white"
              >
                <Type size={14} className="text-blue-400" />
                <span>Heading 1</span>
              </div>
              
              <div 
                draggable 
                onDragStart={(e) => handleDragStart(e, "p")}
                className="p-3 bg-[#0d1527] hover:bg-[#121c33] border border-slate-800 rounded-xl cursor-grab flex items-center gap-2 text-xs font-black text-white"
              >
                <Type size={14} className="text-purple-400" />
                <span>Paragraph</span>
              </div>

              <div 
                draggable 
                onDragStart={(e) => handleDragStart(e, "button")}
                className="p-3 bg-[#0d1527] hover:bg-[#121c33] border border-slate-800 rounded-xl cursor-grab flex items-center gap-2 text-xs font-black text-white"
              >
                <MousePointerClick size={14} className="text-emerald-400" />
                <span>Button</span>
              </div>

              <div 
                draggable 
                onDragStart={(e) => handleDragStart(e, "img")}
                className="p-3 bg-[#0d1527] hover:bg-[#121c33] border border-slate-800 rounded-xl cursor-grab flex items-center gap-2 text-xs font-black text-white"
              >
                <Grid size={14} className="text-amber-400" />
                <span>Image</span>
              </div>
            </div>

            {/* Droppable Canvas Panel (Center) */}
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className={`flex-1 flex flex-col p-6 items-center justify-center overflow-y-auto border-r ${builderTab === "canvas" ? "flex" : "hidden md:flex"} ${isLight ? "bg-slate-100 border-slate-200" : isSepia ? "bg-[#f4ecd8] border-[#e6dcc8]" : "bg-slate-900/40 border-slate-900"}`}
            >
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-4">Canvas Droppable Target</div>
              
              <div className="w-full max-w-md min-h-[360px] bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col space-y-4 items-center justify-start overflow-y-auto">
                {components.length === 0 ? (
                  <div className="text-center p-8 text-slate-500 text-xs flex flex-col items-center gap-2">
                    <MousePointerClick size={24} className="animate-bounce" />
                    <span>Drop elements here to build DIY page.</span>
                  </div>
                ) : (
                  components.map((comp) => {
                    const isActive = comp.id === activeCompId;
                    const styleStr = {
                      backgroundColor: comp.styles.backgroundColor,
                      color: comp.styles.color,
                      borderRadius: comp.styles.borderRadius,
                      padding: comp.styles.padding,
                      fontSize: comp.styles.fontSize,
                      margin: comp.styles.margin,
                      textAlign: comp.styles.textAlign as React.CSSProperties["textAlign"],
                    };
                    
                    return (
                      <div 
                        key={comp.id}
                        onClick={(e) => { e.stopPropagation(); setActiveCompId(comp.id); }}
                        className={`w-full relative transition-all rounded-lg ${isActive ? "ring-2 ring-blue-500 p-1" : "hover:ring-1 hover:ring-slate-700 p-1 cursor-pointer"}`}
                      >
                        {comp.type === "h1" && <h1 style={styleStr} className="font-bold leading-tight">{comp.content}</h1>}
                        {comp.type === "p" && <p style={styleStr}>{comp.content}</p>}
                        {comp.type === "button" && <button style={styleStr} className="font-semibold">{comp.content}</button>}
                        {comp.type === "img" && (
                          <img 
                            src={comp.src || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400"} 
                            style={styleStr} 
                            alt="visual component" 
                            className="max-w-full h-auto mx-auto"
                          />
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Properties Editor Panel (Right) */}
            <div className={`w-full md:w-64 flex flex-col p-4 overflow-y-auto shrink-0 ${builderTab === "properties" ? "flex" : "hidden md:flex"} ${isLight ? "bg-slate-50" : isSepia ? "bg-[#ebdcb9]/40" : "bg-[#0b101c]"}`}>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 block">Property Editor</span>
              
              {activeComp ? (
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-black uppercase text-slate-400">Content Text</span>
                    <input 
                      type="text"
                      value={activeComp.content}
                      onChange={(e) => updateActiveCompContent(e.target.value)}
                      className="w-full mt-1.5 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <span className="text-[9px] font-black uppercase text-slate-400">Text Color</span>
                    <div className="flex gap-2 mt-1.5">
                      {["#ffffff", "#38bdf8", "#10b981", "#fb7185", "#fbbf24"].map((c) => (
                        <button 
                          key={c}
                          onClick={() => updateActiveCompStyle("color", c)}
                          style={{ backgroundColor: c }}
                          className={`w-6 h-6 rounded-full border border-white/10 ${activeComp.styles.color === c ? "ring-2 ring-blue-500" : ""}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-black uppercase text-slate-400">Background</span>
                    <div className="flex gap-2 mt-1.5">
                      {["transparent", "#1e293b", "#10b981", "#3b82f6", "#ef4444"].map((bg) => (
                        <button 
                          key={bg}
                          onClick={() => updateActiveCompStyle("backgroundColor", bg)}
                          className={`w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[8px] ${activeComp.styles.backgroundColor === bg ? "ring-2 ring-blue-500" : ""}`}
                          style={{ backgroundColor: bg === "transparent" ? "gray" : bg }}
                        >
                          {bg === "transparent" && "T"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-black uppercase text-slate-400">Font Size ({activeComp.styles.fontSize})</span>
                    <input 
                      type="range"
                      min="10"
                      max="32"
                      value={parseInt(activeComp.styles.fontSize) || 14}
                      onChange={(e) => updateActiveCompStyle("fontSize", `${e.target.value}px`)}
                      className="w-full mt-1.5 accent-blue-500"
                    />
                  </div>

                  <div>
                    <span className="text-[9px] font-black uppercase text-slate-400">Padding ({activeComp.styles.padding})</span>
                    <input 
                      type="range"
                      min="0"
                      max="24"
                      value={parseInt(activeComp.styles.padding) || 10}
                      onChange={(e) => updateActiveCompStyle("padding", `${e.target.value}px`)}
                      className="w-full mt-1.5 accent-blue-500"
                    />
                  </div>

                  <div>
                    <span className="text-[9px] font-black uppercase text-slate-400">Border Radius ({activeComp.styles.borderRadius})</span>
                    <input 
                      type="range"
                      min="0"
                      max="24"
                      value={parseInt(activeComp.styles.borderRadius) || 0}
                      onChange={(e) => updateActiveCompStyle("borderRadius", `${e.target.value}px`)}
                      className="w-full mt-1.5 accent-blue-500"
                    />
                  </div>

                  <button 
                    onClick={deleteActiveComp}
                    className="w-full py-2.5 bg-red-650/20 hover:bg-red-650/40 border border-red-500/30 text-red-400 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Trash2 size={13} />
                    <span>Delete Item</span>
                  </button>
                </div>
              ) : (
                <p className="text-[10px] text-slate-500 italic">Select any canvas component to edit its details.</p>
              )}
            </div>
            
          </div>
        )}

        {/* CODE EDITOR VIEW PANEL (Original texteditor sandbox logic) */}
        {editorMode === "editor" && (
          <div className={`flex-1 flex flex-col md:border-r overflow-hidden transition-all ${viewMode === "editor" ? "flex" : "hidden md:flex"} ${isLight ? "border-slate-200" : isSepia ? "border-[#e6dcc8]" : "border-slate-800"}`}>
            
            <div className={`flex items-center justify-between px-2 border-b text-xs gap-1 shrink-0 transition-colors duration-300 ${isLight ? "bg-slate-50 border-slate-200" : isSepia ? "bg-[#ebdcb9]/40 border-[#e6dcc8]" : "bg-slate-955 border-slate-900"}`}>
              {/* Desktop view tab bar */}
              <div className="hidden sm:flex gap-1">
                <button onClick={() => setActiveTab("html")} className={`flex items-center gap-1 px-4 py-2.5 font-bold border-b-2 transition-all ${activeTab === "html" ? "border-orange-500 text-orange-400 bg-slate-900/50" : "text-slate-400"}`}>index.html</button>
                <button onClick={() => setActiveTab("css")} className={`flex items-center gap-1 px-4 py-2.5 font-bold border-b-2 transition-all ${activeTab === "css" ? "border-blue-500 text-blue-400 bg-slate-900/50" : "text-slate-400"}`}>style.css</button>
                <button onClick={() => setActiveTab("js")} className={`flex items-center gap-1 px-4 py-2.5 font-bold border-b-2 transition-all ${activeTab === "js" ? "border-yellow-500 text-yellow-400 bg-slate-900/50" : "text-slate-400"}`}>script.js</button>
              </div>

              {/* Mobile view dropdown selector */}
              <div className="flex sm:hidden max-w-[150px] relative py-1.5">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value as "html" | "css" | "js")}
                  className={`w-full border rounded-xl px-3.5 py-1 text-xs font-black focus:outline-none appearance-none cursor-pointer pr-7 ${isLight ? "bg-white border-slate-200 text-slate-800" : isSepia ? "bg-[#f4ecd8] border-[#ebdcb9] text-[#5b4636]" : "bg-slate-900 border-slate-800 text-white"}`}
                >
                  <option value="html">📄 index.html</option>
                  <option value="css">🎨 style.css</option>
                  <option value="js">⚡ script.js</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-450">
                  <span className="text-[7px]">▼</span>
                </div>
              </div>

              <button 
                onClick={handleFormat}
                disabled={isFormatting}
                className={`flex items-center gap-1 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider transition-all border ${isFormatting ? "animate-pulse" : ""} ${isLight ? "border-slate-300 text-slate-600 hover:bg-slate-100" : isSepia ? "border-[#d2c29e] text-[#5b4636] hover:bg-[#ebdcb9]" : "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"}`}
              >
                <Sparkles size={11} className="text-amber-500" />
                <span>{isFormatting ? "Formatting..." : "Prettier"}</span>
              </button>
            </div>

            <div className="flex-1 relative overflow-hidden bg-[#090d16] font-mono text-xs">
              {/* Highlight Overlay Underneath */}
              <pre
                ref={highlightRef}
                className="absolute inset-0 p-4 text-slate-300 pointer-events-none whitespace-pre-wrap break-all overflow-y-auto leading-relaxed h-full w-full select-none"
                dangerouslySetInnerHTML={{
                  __html: activeTab === "html" 
                    ? highlightHTML(htmlCode) 
                    : activeTab === "css" 
                      ? highlightCSS(cssCode) 
                      : highlightJS(jsCode)
                }}
              />
              {/* Transparent Editor Textarea on top */}
              <textarea
                ref={editorRef}
                value={activeTab === "html" ? htmlCode : activeTab === "css" ? cssCode : jsCode}
                onChange={(e) => {
                  if (activeTab === "html") setHtmlCode(e.target.value);
                  else if (activeTab === "css") setCssCode(e.target.value);
                  else setJsCode(e.target.value);
                }}
                onScroll={handleScroll}
                className="absolute inset-0 p-4 bg-transparent focus:outline-none resize-none overflow-y-auto leading-relaxed h-full w-full text-transparent caret-white whitespace-pre-wrap break-all"
                spellCheck="false"
              />
            </div>
          </div>
        )}

        {/* Live Preview Panel (Right Side iframe + logs) */}
        <div className={`flex-1 flex flex-col overflow-hidden transition-colors duration-300 ${viewMode === "preview" ? "flex" : "hidden md:flex"} ${isLight ? "bg-slate-100" : isSepia ? "bg-[#f4ecd8]" : "bg-slate-955"}`}>
          
          <div className={`py-2 px-3 border-b flex items-center gap-2.5 shrink-0 transition-colors duration-300 text-xs ${isLight ? "bg-slate-50 border-slate-200" : isSepia ? "bg-[#ebdcb9] border-[#e6dcc8]" : "bg-slate-955 border-slate-900"}`}>
            {/* Back / Forward / Refresh controls */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button 
                onClick={() => alert("Simulated Browser history back")} 
                className={`p-1 rounded transition-colors ${isLight ? "hover:bg-slate-200 text-slate-400" : isSepia ? "hover:bg-[#ebdcb9] text-[#705845]" : "hover:bg-slate-900 text-slate-500"}`}
                title="Back"
              >
                <ArrowLeft size={13} />
              </button>
              <button 
                onClick={() => alert("Simulated Browser history forward")} 
                className={`p-1 rounded transition-colors ${isLight ? "hover:bg-slate-200 text-slate-400" : isSepia ? "hover:bg-[#ebdcb9] text-[#705845]" : "hover:bg-slate-900 text-slate-500"}`}
                title="Forward"
              >
                <ArrowLeft size={13} className="rotate-180" />
              </button>
              <button 
                onClick={runCode} 
                className={`p-1 rounded transition-colors ${isLight ? "hover:bg-slate-200 text-slate-500" : isSepia ? "hover:bg-[#ebdcb9] text-[#705845]" : "hover:bg-slate-900 text-slate-400"}`}
                title="Refresh Frame"
              >
                <RefreshCw size={13} className={liveServer ? "text-emerald-500" : ""} />
              </button>
            </div>

            {/* Address Bar */}
            <div className={`flex-1 flex items-center justify-between gap-2 px-3 py-1 rounded-lg border font-mono text-[10px] transition-all select-all ${isLight ? "bg-white border-slate-200 text-slate-600" : isSepia ? "bg-[#f4ecd8] border-[#e6dcc8] text-[#5b4636]" : "bg-[#0c1222] border-slate-800 text-slate-300"}`}>
              <span className="truncate flex items-center gap-1">
                {liveServer ? (
                  <>
                    <span className="text-emerald-500 font-black">http://</span>
                    <span>127.0.0.1:5500/index.html</span>
                  </>
                ) : (
                  <>
                    <span className="text-slate-500">file:///</span>
                    <span>workspace/index.html</span>
                  </>
                )}
              </span>
              
              {liveServer && (
                <span className="flex items-center gap-1 text-[8px] font-black uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded shrink-0 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>LIVE</span>
                </span>
              )}
            </div>

            {/* Live Server toggle button in preview panel header */}
            <button 
              onClick={() => setLiveServer(!liveServer)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-lg font-black text-[10px] uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer border ${liveServer 
                ? "bg-emerald-600/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-600/20" 
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"}`}
            >
              <Globe size={11} className={liveServer ? "animate-spin" : ""} style={{ animationDuration: "3s" }} />
              <span>{liveServer ? "Go Offline" : "Go Live"}</span>
            </button>
          </div>

          <div className={`flex-1 relative transition-colors duration-300 ${isLight ? "bg-slate-100" : isSepia ? "bg-[#f4ecd8]" : "bg-[#0f172a]"}`}>
            {iframeSrcDoc ? (
               <iframe
                 ref={iframeRef}
                 title="Nextsem Code Sandbox Preview"
                 srcDoc={iframeSrcDoc}
                 sandbox="allow-scripts"
                 className="w-full h-full border-none bg-[#0f172a]"
               />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 gap-2">
                <Play size={32} className="animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Click RUN or Turn On LIVE SERVER</span>
              </div>
            )}
          </div>

          {/* Console logs */}
          <div className="h-[25%] min-h-[100px] flex flex-col overflow-hidden shrink-0 border-t border-slate-900 bg-[#070b12]">
            <div className="px-4 py-2 border-b border-slate-900 flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-1.5">
                <Terminal size={13} className="text-blue-550" />
                <span>Console Outputs</span>
              </span>
              {liveServer && (
                <span className="text-[9px] text-emerald-400 font-bold tracking-normal normal-case">
                  📡 Live Server active on Port 5500
                </span>
              )}
            </div>
            <div className="flex-1 p-3 overflow-y-auto font-mono text-[10px] leading-relaxed text-slate-400">
              {logs.length === 0 ? (
                <span className="italic text-slate-650">Console is active. Use console.log() to print events.</span>
              ) : (
                logs.map((log, idx) => (
                  <div key={idx} className={log.type === "error" ? "text-rose-500" : "text-blue-400"}>
                    &gt; {log.message}
                  </div>
                ))
              )}
            </div>
          </div>
 
        </div>
 
        {/* Mobile Tab switcher (only visible on mobile, positioned above BottomNavigation) */}
        <div className={`absolute bottom-14 left-0 right-0 h-12 border-t flex items-center justify-center gap-2 px-4 z-40 md:hidden ${isLight ? "bg-white/90 border-slate-200" : isSepia ? "bg-[#ebdcb9]/90 border-[#e6dcc8]" : "bg-slate-950/90 border-slate-900"}`}>
          {editorMode === "builder" ? (
            <div className="flex bg-slate-900/60 p-0.5 border border-white/5 rounded-xl w-full max-w-sm justify-around">
              <button 
                onClick={() => setBuilderTab("palette")}
                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all flex flex-col items-center justify-center gap-0.5 ${builderTab === "palette" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <Grid size={11} />
                <span>Palette</span>
              </button>
              <button 
                onClick={() => setBuilderTab("canvas")}
                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all flex flex-col items-center justify-center gap-0.5 ${builderTab === "canvas" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <Layout size={11} />
                <span>Canvas</span>
              </button>
              <button 
                onClick={() => setBuilderTab("properties")}
                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all flex flex-col items-center justify-center gap-0.5 ${builderTab === "properties" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <Sliders size={11} />
                <span>Properties</span>
              </button>
            </div>
          ) : (
            <div className="flex bg-slate-900/60 p-0.5 border border-white/5 rounded-xl w-full max-w-sm justify-around">
              <button 
                onClick={() => setViewMode("editor")}
                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all flex flex-col items-center justify-center gap-0.5 ${viewMode === "editor" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <FileCode size={11} />
                <span>Source Code</span>
              </button>
              <button 
                onClick={() => setViewMode("preview")}
                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all flex flex-col items-center justify-center gap-0.5 ${viewMode === "preview" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <Layout size={11} />
                <span>Preview</span>
              </button>
            </div>
          )}
        </div>
 
      </div>
    </div>
  );
}

// ── PRETTIER MOCK CODE FORMATTERS ──
function formatHTML(html: string): string {
  let formatted = "";
  let indent = 0;
  const cleanHtml = html
    .replace(/>\s+</g, "><")
    .replace(/(<[^>]+>)/g, "\n$1\n")
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  for (const line of cleanHtml) {
    const isClosing = line.startsWith("</");
    const isSelfClosing = line.endsWith("/>") || /<(!DOCTYPE|meta|link|img|br|hr|input)/i.test(line);

    if (isClosing) {
      indent = Math.max(0, indent - 1);
    }
    
    formatted += "  ".repeat(indent) + line + "\n";
    
    if (!isClosing && !isSelfClosing && !line.startsWith("<!")) {
      indent++;
    }
  }
  return formatted.trim();
}

function formatCSS(css: string): string {
  let formatted = "";
  let indent = 0;
  const lines = css
    .replace(/\s+/g, " ")
    .replace(/{/g, " {\n")
    .replace(/}/g, "\n}\n")
    .replace(/;/g, ";\n")
    .replace(/,/g, ", ")
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (line.startsWith("}")) {
      indent = Math.max(0, indent - 1);
    }
    formatted += "  ".repeat(indent) + line + "\n";
    if (line.endsWith("{")) {
      indent++;
    }
  }
  return formatted.replace(/\n\s*\n/g, "\n\n").trim();
}

function formatJS(js: string): string {
  let formatted = "";
  let indent = 0;
  const lines = js
    .replace(/\s+/g, " ")
    .replace(/{/g, " {\n")
    .replace(/}/g, "\n}\n")
    .replace(/;/g, ";\n")
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (line.startsWith("}")) {
      indent = Math.max(0, indent - 1);
    }
    formatted += "  ".repeat(indent) + line + "\n";
    if (line.endsWith("{")) {
      indent++;
    }
  }
  return formatted.replace(/\n\s*\n/g, "\n\n").trim();
}

// ── VS CODE SYNTAX HIGH LIGHTING ──
function highlightHTML(code: string): string {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Highlight comments
  escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="text-slate-500 font-normal italic">$1</span>');
  
  // Highlight tags: &lt;tag or &lt;/tag
  escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9\-]+)/g, '<span class="text-blue-400 font-bold">$1</span>');
  
  // Highlight tag ends: &gt; or /&gt;
  escaped = escaped.replace(/(\/?&gt;)/g, '<span class="text-blue-400 font-bold">$1</span>');
  
  // Highlight attribute values: ="value"
  escaped = escaped.replace(/(=["'][^"']*?["'])/g, '<span class="text-amber-300">$1</span>');
  
  // Highlight attributes: attributeName=
  escaped = escaped.replace(/(\s[a-zA-Z0-9\-]+)=/g, ' <span class="text-cyan-400">$1</span>=');
  
  return escaped;
}

function highlightCSS(code: string): string {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Highlight braces
  escaped = escaped.replace(/({|})/g, '<span class="text-yellow-500 font-bold">$1</span>');
  
  // Highlight comments
  escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-slate-500 italic">$1</span>');
  
  // Highlight values: : value;
  escaped = escaped.replace(/(:\s*[^;{}]+;)/g, (match) => {
    const val = match.slice(1, -1);
    return `:<span class="text-emerald-400">${val}</span>;`;
  });
  
  // Highlight properties: propertyName:
  escaped = escaped.replace(/([a-zA-Z0-9\-]+\s*):/g, '<span class="text-cyan-400">$1</span>:');
  
  // Highlight selectors: selector {
  escaped = escaped.replace(/([^{}\n]+)\s*\{/g, '<span class="text-orange-400 font-bold">$1</span> {');
  
  return escaped;
}

function highlightJS(code: string): string {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // Highlight strings
  escaped = escaped.replace(/("[^"]*?")/g, '<span class="text-amber-300">$1</span>');
  escaped = escaped.replace(/('[^']*?')/g, '<span class="text-amber-300">$1</span>');
  escaped = escaped.replace(/(`[^`]*?`)/g, '<span class="text-amber-300">$1</span>');
  
  // Highlight single-line comments
  escaped = escaped.replace(/(\/\/[^\n]*)/g, '<span class="text-slate-500 italic">$1</span>');
  
  // Highlight keywords
  const keywords = [
    "const", "let", "var", "function", "return", "if", "else", "for", "while", 
    "do", "switch", "case", "break", "continue", "new", "this", "class", "export", 
    "import", "from", "default", "true", "false", "null", "undefined", "document", "window"
  ];
  keywords.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b`, "g");
    escaped = escaped.replace(regex, '<span class="text-blue-400 font-bold">$1</span>');
  });

  // Highlight numbers
  escaped = escaped.replace(/\b(\d+)\b/g, '<span class="text-purple-400">$1</span>');
  
  // Highlight methods/functions: console.log or addEventListener
  escaped = escaped.replace(/(\.[a-zA-Z0-9_]+)(?=\()/g, '.<span class="text-yellow-400 font-bold">$1</span>');
  
  return escaped;
}
