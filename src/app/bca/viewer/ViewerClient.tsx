"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, Sparkles, Send, CheckCircle2, PenTool, Highlighter, Eraser, Trash2, Undo2, Star, X } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

// Local RAG dictionary for BCA hardware/origins questions
const AI_RESPONSES: Record<string, { title: string; summary: string; code?: string }> = {
  "von neumann": {
    title: "Von Neumann Architecture",
    summary: "First proposed by mathematician John von Neumann in 1945, this design forms the basis of almost all modern computers. Key features include: 1) A shared memory system holding both program instructions and data (Stored Program Concept), 2) A Central Processing Unit (CPU) containing an ALU and registers, 3) Sequential instruction execution tracked by a Program Counter (PC).",
    code: "// Von Neumann Instruction Cycle:\n// 1. FETCH: Instruction at address PC loaded to Instruction Register (IR)\n// 2. DECODE: Control Unit (CU) interprets instruction opcode\n// 3. EXECUTE: ALU performs arithmetic, stores results in Accumulator (ACC)\n// 4. UPDATE: PC increments to point to next cell address."
  },
  "register": {
    title: "CPU Registers",
    summary: "Registers are ultra-fast, volatile storage cells located directly inside the CPU core. They hold active instructions, data values being processed, and memory addresses. Key registers include the Program Counter (PC), Accumulator (ACC), Instruction Register (IR), Memory Address Register (MAR), and Memory Buffer Register (MBR).",
    code: "Accumulator (ACC) = 15; // ALU workspace\nProgram Counter (PC) = 04;   // Index of next code cell\nInstruction Register (IR) = 'ADD 06';"
  },
  "gate": {
    title: "Digital Logic Gates",
    summary: "Logic gates are the physical building blocks of microchips. They implement Boolean algebra operations (AND, OR, NOT, XOR, NAND, NOR) using transistor switches. Multiple logic gates are connected to form integrated circuits (ICs) like half-adders and arithmetic logic units (ALUs).",
    code: "// AND Gate Truth Table:\n// A=0, B=0 => Output=0\n// A=1, B=0 => Output=0\n// A=1, B=1 => Output=1 (High voltage)"
  },
  "babbage": {
    title: "Charles Babbage & Engines",
    summary: "Charles Babbage, a 19th-century mathematician, designed the Difference Engine (to automate polynomial tables) and the Analytical Engine (the first general-purpose programmable computer). Though mechanical, the Analytical Engine featured a processor (Mill), memory (Store), punched card input, and printer output.",
    code: "// Analytical Engine Components:\n// Mill  == CPU (processes calculations)\n// Store == RAM (holds variables and program states)\n// Cards == Input (punched card instructions)"
  },
  "generation": {
    title: "Computer Generations",
    summary: "Computer evolution is divided into 5 eras based on switching technologies: 1st Gen (Vacuum Tubes - hot, bulky), 2nd Gen (Transistors - smaller, efficient), 3rd Gen (Integrated Circuits - silicon microchips), 4th Gen (Microprocessors/VLSI - single-chip CPU), and 5th Gen (ULSI & Artificial Intelligence).",
    code: "const generations = {\n  '1st': 'Vacuum Tubes',\n  '2nd': 'Transistors',\n  '3rd': 'Integrated Circuits (ICs)',\n  '4th': 'VLSI Microprocessors',\n  '5th': 'ULSI & Neural Nets (AI)'\n};"
  },
  "limit": {
    title: "Computer Limitations",
    summary: "Despite their high speed, computers have physical bottlenecks: 1) No native intelligence (depend on human program scripts), 2) Emotionless (no moral, artistic, or empathetic judgment), 3) Purely logical execution (susceptible to garbage-in, garbage-out errors).",
    code: "if (userInput === 'garbage') {\n    return 'garbage'; // GIGO limitation\n}"
  }
};

interface Point {
  x: number;
  y: number;
  mode: string;
  color: string;
  size: number;
}

export default function TextbookViewer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { completedChapters, markCompleted, markIncomplete } = useProgress();

  const fileUrl = searchParams.get('file') || '';
  const fileTitle = searchParams.get('title') || 'Textbook Unit';

  // Redirection for custom visual textbook notes pages
  useEffect(() => {
    if (fileUrl.toLowerCase().includes('introduction to accounting.pdf') || fileUrl.toLowerCase().includes('accounting-chapter-1')) {
      router.replace('/ncert/notes/accounting-chapter-1');
    } else if (fileUrl.toLowerCase().includes('theory base of accounting.pdf') || fileUrl.toLowerCase().includes('accounting-chapter-2')) {
      router.replace('/ncert/notes/accounting-chapter-2');
    } else if (fileUrl.toLowerCase().includes('current electricity.pdf') || fileUrl.toLowerCase().includes('physics-chapter-3')) {
      router.replace('/ncert/notes/physics-chapter-3');
    } else if (fileUrl.toLowerCase().includes('unit 5.pdf') || fileUrl.toLowerCase().includes('unit-5')) {
      router.replace('/bca/notes/bcs-011-unit-5');
    }
  }, [fileUrl, router]);

  // Construct context key for reading progress
  // Extract relative path from file url
  const relativePath = fileUrl.replace('/BCA_NEW_Books/', '');
  const progressKey = `bca_unit:${relativePath}`;
  const isCompleted = !!completedChapters[progressKey];

  const [mounted, setMounted] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("guest");
  const [points, setPoints] = useState(0);

  // Drawing Canvas states
  const [isDrawOpen, setIsDrawOpen] = useState(false);
  const [tool, setTool] = useState<'pen' | 'highlighter' | 'eraser'>('pen');
  const [drawColor, setDrawColor] = useState<string>('#39FF14'); // Glowing green
  const [drawSize, setDrawSize] = useState<number>(3);
  
  // AI Buddy states
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'ai', text: "Hello! I am your BCA Study Buddy. Highlight any text in the textbook, or ask me questions about CPU registers, logic gates, or Von Neumann architecture!" }
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Canvas drawing ref variables
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef<boolean>(false);
  const pathsRef = useRef<Point[][]>([]);
  const currentPathRef = useRef<Point[]>([]);

  useEffect(() => {
    setMounted(true);

    const savedUser = localStorage.getItem('nextsem_user');
    let email = "guest";
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        email = parsed.email || "guest";
      } catch (e) {}
    }
    setUserEmail(email);

    const savedPoints = localStorage.getItem(`nextsem_bca_points_${email}`);
    if (savedPoints) {
      setPoints(parseInt(savedPoints) || 0);
    }

    // Load annotations if present
    const savedDrawings = localStorage.getItem(`bca_drawings:${relativePath}`);
    if (savedDrawings) {
      try {
        pathsRef.current = JSON.parse(savedDrawings);
      } catch (e) {}
    }
  }, [relativePath]);

  // Redraw canvas lines
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pathsRef.current.forEach((path) => {
      if (path.length === 0) return;
      ctx.beginPath();
      ctx.strokeStyle = path[0].mode === 'eraser' ? 'rgba(0,0,0,1)' : path[0].color;
      ctx.lineWidth = path[0].size;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      if (path[0].mode === 'eraser') {
        ctx.globalCompositeOperation = 'destination-out';
      } else {
        ctx.globalCompositeOperation = 'source-over';
      }

      ctx.moveTo(path[0].x, path[0].y);
      for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].x, path[i].y);
      }
      ctx.stroke();
    });

    // Reset composite operation
    ctx.globalCompositeOperation = 'source-over';
  }, []);

  // Sync canvas size to container
  useEffect(() => {
    if (!isDrawOpen) return;
    
    const timer = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      redrawCanvas();
    }, 100);

    return () => clearTimeout(timer);
  }, [isDrawOpen, redrawCanvas]);

  // Handle Mark completed progress toggle
  const handleToggleRead = () => {
    const savedUser = localStorage.getItem('nextsem_user');
    let email = "guest";
    if (savedUser) {
      try {
        email = JSON.parse(savedUser).email || "guest";
      } catch (e) {}
    }

    if (isCompleted) {
      markIncomplete(progressKey);
      
      // Deduct XP (-10 XP)
      const newPoints = Math.max(0, points - 10);
      setPoints(newPoints);
      localStorage.setItem(`nextsem_bca_points_${email}`, newPoints.toString());
    } else {
      markCompleted(progressKey);
      
      // Add XP (+10 XP)
      const newPoints = points + 10;
      setPoints(newPoints);
      localStorage.setItem(`nextsem_bca_points_${email}`, newPoints.toString());

      // Trigger Confetti Celebration (ProgressContext will automatically trigger its confetti if integrated, but let's confirm XP is set)
      playSound('success');
    }
  };

  const playSound = (type: 'success' | 'error') => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(type === 'success' ? 587.33 : 150, audioCtx.currentTime); // D5
      gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch (e) {}
  };

  // Canvas Drawing mouse triggers
  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    
    let clientX = 0;
    let clientY = 0;
    
    if ('touches' in e) {
      if (e.touches.length === 0) return null;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const handleStartDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const coords = getCoordinates(e);
    if (!coords) return;

    drawingRef.current = true;
    
    const size = tool === 'highlighter' ? 12 : tool === 'eraser' ? 20 : drawSize;
    const color = tool === 'highlighter' ? `${drawColor}60` : drawColor; // Semi-transparent for highlight

    const newPt: Point = {
      x: coords.x,
      y: coords.y,
      mode: tool,
      color,
      size
    };

    currentPathRef.current = [newPt];
    pathsRef.current.push(currentPathRef.current);
    redrawCanvas();
  };

  const handleDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return;
    e.preventDefault();
    
    const coords = getCoordinates(e);
    if (!coords) return;

    const size = tool === 'highlighter' ? 12 : tool === 'eraser' ? 20 : drawSize;
    const color = tool === 'highlighter' ? `${drawColor}60` : drawColor;

    const newPt: Point = {
      x: coords.x,
      y: coords.y,
      mode: tool,
      color,
      size
    };

    currentPathRef.current.push(newPt);
    redrawCanvas();
  };

  const handleEndDraw = () => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    // Save to local storage
    localStorage.setItem(`bca_drawings:${relativePath}`, JSON.stringify(pathsRef.current));
  };

  const handleUndo = () => {
    pathsRef.current.pop();
    localStorage.setItem(`bca_drawings:${relativePath}`, JSON.stringify(pathsRef.current));
    redrawCanvas();
  };

  const handleClearAll = () => {
    if (confirm("Clear all drawings and annotations on this page?")) {
      pathsRef.current = [];
      localStorage.removeItem(`bca_drawings:${relativePath}`);
      redrawCanvas();
    }
  };

  // AI Chat Bot triggers
  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = chatInput.trim();
    if (!input) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setChatInput("");
    setIsAiTyping(true);

    setTimeout(() => {
      const normalized = input.toLowerCase();
      let replyText = "I parsed your question, but that concept is outside the current Block 1 hardware syllabus context. Try asking about 'CPU registers', 'logic gates', or 'Von Neumann'!";
      
      // Dictionary check
      for (const key of Object.keys(AI_RESPONSES)) {
        if (normalized.includes(key)) {
          const entry = AI_RESPONSES[key];
          replyText = `### ${entry.title}\n\n${entry.summary}`;
          if (entry.code) {
            replyText += `\n\n\`\`\`javascript\n${entry.code}\n\`\`\``;
          }
          break;
        }
      }

      // Quiz request check
      if (normalized.includes("quiz") || normalized.includes("question") || normalized.includes("test me")) {
        const topics = Object.values(AI_RESPONSES);
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        replyText = `**Quick AI Quiz Prompt:**\nBased on your curriculum, can you explain the main functionality of **${randomTopic.title}**?\n\n*Draft your answer below, then check if it matches my detailed breakdown!*`;
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'ai', text: replyText }]);
      setIsAiTyping(false);
    }, 1500);
  };

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-emerald-500 border-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30 overflow-hidden relative">
      
      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-[#0a0a0f] flex items-center justify-between px-4 md:px-6 shrink-0 z-30">
        <div className="flex items-center gap-3 min-w-0">
          <button 
            onClick={() => router.back()} 
            className="flex items-center gap-1 text-slate-400 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back</span>
          </button>
          
          <div className="h-5 w-px bg-slate-800 hidden sm:block shrink-0" />
          
          <div className="min-w-0 text-left">
            <span className="text-[8px] text-slate-550 font-black uppercase tracking-widest block">Textbook Reader</span>
            <h1 className="text-sm font-black text-white truncate leading-tight pr-4">
              {fileTitle}
            </h1>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Toggle Pen Canvas */}
          <button
            onClick={() => setIsDrawOpen(!isDrawOpen)}
            className={`px-3 py-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              isDrawOpen 
                ? 'bg-emerald-500/10 border-emerald-400 text-emerald-350 shadow-md shadow-emerald-500/5' 
                : 'bg-slate-900 border-slate-800 text-slate-350 hover:bg-slate-850'
            }`}
          >
            <PenTool size={12} />
            <span className="hidden sm:inline">Digital Pen</span>
          </button>

          {/* Mark Complete */}
          <button
            onClick={handleToggleRead}
            className={`px-3 py-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              isCompleted 
                ? 'bg-[#39D353]/15 border-[#39D353]/30 text-[#39D353]' 
                : 'bg-indigo-650 border-indigo-650 hover:bg-indigo-600 text-white'
            }`}
          >
            <CheckCircle2 size={12} />
            <span>{isCompleted ? 'Completed ✓' : 'Mark Read'}</span>
          </button>

          {/* XP Badge */}
          <div className="hidden md:flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-550/20 px-3 py-1.5 rounded-full shrink-0">
            <Star size={12} className="fill-amber-400 text-amber-400 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-wider text-emerald-300">
              {points} XP
            </span>
          </div>
        </div>
      </header>

      {/* Main Core: Viewer + Sidebar */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left/Center Stage: PDF container */}
        <div className="flex-1 h-full bg-[#121217]/25 relative flex flex-col justify-center items-center">
          
          {/* Drawing Floating Toolbar */}
          {isDrawOpen && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#09090d]/95 border border-slate-850 p-2.5 rounded-2xl flex items-center gap-2.5 z-40 shadow-2xl">
              <button
                onClick={() => setTool('pen')}
                className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  tool === 'pen' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-450 hover:bg-slate-900'
                }`}
                title="Pen tool"
              >
                <PenTool size={14} />
              </button>
              
              <button
                onClick={() => setTool('highlighter')}
                className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  tool === 'highlighter' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-450 hover:bg-slate-900'
                }`}
                title="Highlighter tool"
              >
                <Highlighter size={14} />
              </button>

              <button
                onClick={() => setTool('eraser')}
                className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  tool === 'eraser' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-450 hover:bg-slate-900'
                }`}
                title="Eraser tool"
              >
                <Eraser size={14} />
              </button>

              <div className="w-px h-5 bg-slate-850" />

              {/* Color Selectors */}
              <div className="flex items-center gap-1.5">
                {['#39FF14', '#FF3131', '#FFFF00', '#00FFFF', '#FF00FF'].map(c => (
                  <button
                    key={c}
                    onClick={() => setDrawColor(c)}
                    className={`w-3.5 h-3.5 rounded-full border transition-transform ${drawColor === c ? 'scale-120 border-white' : 'border-none'}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              <div className="w-px h-5 bg-slate-850" />

              <button
                onClick={handleUndo}
                className="p-2 rounded-lg text-slate-450 hover:bg-slate-900 text-xs cursor-pointer"
                title="Undo stroke"
              >
                <Undo2 size={14} />
              </button>

              <button
                onClick={handleClearAll}
                className="p-2 rounded-lg text-red-400 hover:bg-red-500/5 text-xs cursor-pointer"
                title="Clear Page"
              >
                <Trash2 size={14} />
              </button>
            </div>
          )}

          {/* PDF Frame */}
          <div className="w-full h-full relative flex items-center justify-center">
            {fileUrl ? (
              <iframe
                src={fileUrl}
                className="w-full h-full border-none bg-slate-900"
                title="PDF Textbook Reader"
              />
            ) : (
              <div className="text-center p-6 text-slate-500">
                <BookOpen size={48} className="mx-auto mb-3 animate-bounce" />
                <p className="text-xs">No PDF textbook source configured for this page.</p>
                <p className="text-[11px] text-slate-400 mt-2">
                  You can download official study volumes directly from the{" "}
                  <a href="https://egyankosh.ac.in/handle/123456789/106391" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline font-bold">
                    IGNOU eGyanKosh repository
                  </a>.
                </p>
              </div>
            )}

            {/* Transparent drawing layer */}
            {isDrawOpen && (
              <canvas
                ref={canvasRef}
                onMouseDown={handleStartDraw}
                onMouseMove={handleDrawing}
                onMouseUp={handleEndDraw}
                onMouseLeave={handleEndDraw}
                onTouchStart={handleStartDraw}
                onTouchMove={handleDrawing}
                onTouchEnd={handleEndDraw}
                className="absolute inset-0 z-30 cursor-crosshair touch-none"
              />
            )}
          </div>
        </div>

        {/* Right Collapsible Sidebar: AI Study Buddy */}
        <aside className={`w-80 border-l border-slate-850/50 bg-[#09090d] flex flex-col justify-between shrink-0 transition-all duration-200 z-20 ${
          chatOpen ? 'translate-x-0' : 'translate-x-full hidden lg:flex lg:translate-x-0'
        }`}>
          {/* Sidebar Header */}
          <div className="h-12 border-b border-slate-850/40 bg-[#0b0b10] px-4 flex items-center justify-between shrink-0">
            <span className="text-[10px] text-indigo-400 font-black uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={13} className="text-indigo-400" />
              AI Study Buddy
            </span>
            <button
              onClick={() => setChatOpen(false)}
              className="lg:hidden p-1.5 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white"
            >
              <X size={15} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs select-all">
            {messages.map(msg => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <span className="text-[8px] text-slate-550 font-black uppercase tracking-wider mb-1">
                  {msg.sender === 'user' ? 'You' : 'Semmy AI'}
                </span>
                
                <div className={`p-3 rounded-2xl max-w-[85%] text-left whitespace-pre-wrap leading-relaxed select-text ${
                  msg.sender === 'user'
                    ? 'bg-indigo-650 text-white rounded-tr-none'
                    : 'bg-[#121217] border border-white/5 text-slate-350 rounded-tl-none font-medium'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isAiTyping && (
              <div className="flex flex-col items-start animate-pulse">
                <span className="text-[8px] text-slate-550 font-black uppercase tracking-wider mb-1">Semmy AI</span>
                <div className="bg-[#121217] border border-white/5 text-slate-550 px-3 py-2.5 rounded-2xl rounded-tl-none text-[10px] font-bold">
                  Formulating explanation...
                </div>
              </div>
            )}
          </div>

          {/* Chat Input panel */}
          <form onSubmit={handleAiSubmit} className="p-3 border-t border-slate-850/40 bg-[#09090d] flex gap-2 shrink-0">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about registers, gates..."
              className="flex-1 bg-black border border-slate-850 focus:border-indigo-500 outline-none rounded-xl text-xs text-white px-3 py-2 caret-indigo-400 select-text"
            />
            <button
              type="submit"
              className="p-2 bg-indigo-650 hover:bg-indigo-600 border border-indigo-600 text-white rounded-xl transition-all cursor-pointer shrink-0"
            >
              <Send size={13} />
            </button>
          </form>
        </aside>

        {/* Mobile floating trigger for AI Chat */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="lg:hidden absolute bottom-4 right-4 z-40 w-12 h-12 bg-indigo-650 border border-indigo-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition-transform"
        >
          <Sparkles size={18} />
        </button>

      </div>
    </div>
  );
}
