"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { 
  Play, RotateCcw, Copy, Check, ArrowLeft, 
  Code2, Sparkles, Monitor, Tablet, Smartphone, 
  X, Eye, EyeOff, Terminal, FileCode, Layers, 
  CheckCircle2, RefreshCw, Files, Search, GitBranch, 
  Settings, User, ChevronRight, ChevronDown, Split, 
  Maximize2, Minimize2, ExternalLink, Plus, Folder, 
  FileText, Globe, Bell, CheckSquare, ShieldCheck, Flame,
  Bug, AlertCircle, AlertTriangle, Info, Columns, 
  Layout, MoreHorizontal, Download, Command, 
  FolderPlus, FilePlus, Sparkle, CornerDownLeft, Trash2, Zap,
  Sliders, Power, Wifi, Radio
} from "lucide-react";
import { expandEmmet, expandEmmetWithIndentation, getEmmetAbbreviationAtCursor } from "@/utils/emmetEngine";
import { formatDocument, DEFAULT_PRETTIER_CONFIG, PrettierConfig } from "@/utils/codeFormatter";



/* ── PRESET TEMPLATES ── */
interface ProjectTemplate {
  name: string;
  icon: string;
  category: string;
  files: {
    "index.html": string;
    "style.css": string;
    "script.js": string;
    "README.md": string;
  };
}

const TEMPLATES: Record<string, ProjectTemplate> = {
  counter: {
    name: "Interactive Counter",
    icon: "🔢",
    category: "Beginner",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VS Code Sandbox • Nextsem</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="app-container">
    <header class="hero">
      <div class="tech-badge">VS Code Live Engine</div>
      <h1>Nextsem Web IDE 🚀</h1>
      <p>Edit HTML, CSS & JavaScript with instant live browser execution.</p>
    </header>

    <main class="interactive-card">
      <div class="card-header">
        <h3>Live JavaScript Counter</h3>
        <span class="pulse-dot"></span>
      </div>
      
      <div class="counter-display" id="countDisplay">0</div>
      
      <div class="btn-group">
        <button id="decBtn" class="btn btn-secondary">− Decrement</button>
        <button id="resetBtn" class="btn btn-neutral">Reset</button>
        <button id="incBtn" class="btn btn-primary">+ Increment</button>
      </div>
    </main>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
      "style.css": `/* VS Code Dark+ Theme Sandbox Styling */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #0d1117;
  color: #f1f5f9;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.app-container {
  max-width: 520px;
  width: 100%;
}

.hero {
  text-align: center;
  margin-bottom: 24px;
}

.tech-badge {
  display: inline-block;
  background: rgba(4, 170, 109, 0.15);
  color: #04AA6D;
  border: 1px solid rgba(4, 170, 109, 0.35);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.hero h1 {
  font-size: 26px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
}

.hero p {
  color: #94a3b8;
  font-size: 14px;
}

.interactive-card {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  transition: border-color 0.2s, transform 0.2s;
}

.interactive-card:hover {
  border-color: #04AA6D;
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #21262d;
  padding-bottom: 12px;
}

.card-header h3 {
  font-size: 16px;
  color: #e2e8f0;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #04AA6D;
  border-radius: 50%;
  box-shadow: 0 0 10px #04AA6D;
}

.counter-display {
  font-size: 56px;
  font-weight: 900;
  color: #04AA6D;
  text-align: center;
  font-family: monospace;
  margin: 16px 0;
  transition: transform 0.15s;
}

.btn-group {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.btn {
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.15s;
}

.btn-primary {
  background: #04AA6D;
  color: #ffffff;
}
.btn-primary:hover {
  background: #039861;
}

.btn-secondary {
  background: #21262d;
  color: #e2e8f0;
  border: 1px solid #30363d;
}
.btn-secondary:hover {
  background: #30363d;
}

.btn-neutral {
  background: transparent;
  color: #94a3b8;
  border: 1px solid #30363d;
}
.btn-neutral:hover {
  background: #21262d;
  color: #ffffff;
}`,
      "script.js": `// VS Code Sandbox Script
let count = 0;
const countDisplay = document.getElementById("countDisplay");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCount(val) {
  count += val;
  if (countDisplay) {
    countDisplay.textContent = count;
    countDisplay.style.transform = "scale(1.2)";
    setTimeout(() => countDisplay.style.transform = "scale(1)", 120);
  }
  console.log("Counter updated to:", count);
}

if (incBtn) incBtn.addEventListener("click", () => updateCount(1));
if (decBtn) decBtn.addEventListener("click", () => updateCount(-1));
if (resetBtn) resetBtn.addEventListener("click", () => {
  count = 0;
  if (countDisplay) countDisplay.textContent = count;
  console.log("Counter reset to 0");
});

console.log("VS Code Sandbox ready • Press Ctrl+Enter to re-run! 🚀");`,
      "README.md": `# Nextsem Visual Studio Code Sandbox

Welcome to the browser-based VS Code environment!

## Hotkeys:
- **Ctrl + Enter** / **Cmd + Enter**: Run Code in Live Simple Browser
- **Ctrl + B**: Toggle Primary Explorer Side Bar
- **Ctrl + Shift + P** or **F1**: Open VS Code Command Palette
- **Tab**: Indent 2 spaces

## Included Files:
- \`src/index.html\` - Core markup structure
- \`src/style.css\` - Styling and themes
- \`src/script.js\` - Interactive logic & DOM events
- \`package.json\` - Project metadata`
    }
  },
  todo: {
    name: "Interactive Todo App",
    icon: "📝",
    category: "DOM Manipulation",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Todo List • VS Code Sandbox</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="todo-app">
    <h2>My Tasks 📋</h2>
    <div class="input-row">
      <input type="text" id="taskInput" placeholder="Add a new task..." autofocus>
      <button id="addBtn">+ Add</button>
    </div>
    <ul id="taskList" class="task-list"></ul>
    <div class="footer-row">
      <span id="taskCount">0 tasks left</span>
      <button id="clearCompletedBtn" class="text-btn">Clear Completed</button>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
      "style.css": `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: system-ui, sans-serif;
  background: #0f172a;
  color: #f8fafc;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.todo-app {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 24px;
  max-width: 440px;
  width: 100%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
h2 { font-size: 22px; margin-bottom: 16px; color: #38bdf8; }
.input-row { display: flex; gap: 8px; margin-bottom: 16px; }
input {
  flex: 1;
  background: #0f172a;
  border: 1px solid #475569;
  border-radius: 8px;
  padding: 10px 14px;
  color: white;
  font-size: 14px;
  outline: none;
}
input:focus { border-color: #38bdf8; }
button#addBtn {
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  font-weight: 700;
  cursor: pointer;
}
.task-list { list-style: none; display: flex; flex-col; gap: 8px; max-height: 240px; overflow-y: auto; }
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: #0f172a;
  border-radius: 8px;
  border: 1px solid #334155;
  cursor: pointer;
  transition: 0.15s;
}
.task-item.done { text-decoration: line-through; opacity: 0.5; }
.del-btn { background: none; border: none; color: #ef4444; font-weight: bold; cursor: pointer; }
.footer-row { display: flex; justify-content: space-between; margin-top: 16px; font-size: 12px; color: #94a3b8; }
.text-btn { background: none; border: none; color: #38bdf8; cursor: pointer; font-size: 12px; }`,
      "script.js": `const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const countEl = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearCompletedBtn");

let tasks = [
  { text: "Learn HTML5 Semantic Tags", done: true },
  { text: "Master CSS Flexbox & Grid", done: false },
  { text: "Build React App on Nextsem", done: false }
];

function render() {
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "task-item" + (t.done ? " done" : "");
    li.innerHTML = '<span>' + t.text + '</span><button class="del-btn" onclick="deleteTask(' + i + ')">✕</button>';
    li.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") {
        tasks[i].done = !tasks[i].done;
        render();
      }
    });
    list.appendChild(li);
  });
  const remaining = tasks.filter(t => !t.done).length;
  countEl.textContent = remaining + " tasks left";
}

window.deleteTask = function(i) {
  tasks.splice(i, 1);
  render();
};

function addTask() {
  if (!input.value.trim()) return;
  tasks.push({ text: input.value.trim(), done: false });
  input.value = "";
  render();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => { if (e.key === "Enter") addTask(); });
clearBtn.addEventListener("click", () => {
  tasks = tasks.filter(t => !t.done);
  render();
});

render();
console.log("Todo App initialized! Total tasks:", tasks.length);`,
      "README.md": `# Interactive Todo App
A full CRUD Todo List with live item toggling and filtering.`
    }
  },
  tictactoe: {
    name: "Tic Tac Toe Game",
    icon: "🎮",
    category: "Game Dev",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tic Tac Toe • VS Code Sandbox</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="game-card">
    <h2>Tic Tac Toe 🎮</h2>
    <div id="status" class="status">Player X's Turn</div>
    <div class="grid" id="grid">
      <button class="cell" data-i="0"></button>
      <button class="cell" data-i="1"></button>
      <button class="cell" data-i="2"></button>
      <button class="cell" data-i="3"></button>
      <button class="cell" data-i="4"></button>
      <button class="cell" data-i="5"></button>
      <button class="cell" data-i="6"></button>
      <button class="cell" data-i="7"></button>
      <button class="cell" data-i="8"></button>
    </div>
    <button id="restartBtn" class="restart-btn">Restart Game</button>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
      "style.css": `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: system-ui, sans-serif;
  background: #0f172a;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.game-card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 28px;
  text-align: center;
}
h2 { font-size: 24px; margin-bottom: 12px; color: #38bdf8; }
.status { margin-bottom: 16px; font-weight: bold; font-size: 16px; color: #a855f7; }
.grid {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  gap: 8px;
  margin: 0 auto 20px;
}
.cell {
  width: 80px;
  height: 80px;
  background: #0f172a;
  border: 1px solid #475569;
  border-radius: 8px;
  font-size: 32px;
  font-weight: 900;
  color: white;
  cursor: pointer;
  transition: 0.1s;
}
.cell:hover { background: #1e293b; }
.restart-btn {
  background: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 700;
  cursor: pointer;
}`,
      "script.js": `let board = Array(9).fill(null);
let turn = "X";
let winner = null;
const statusEl = document.getElementById("status");
const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restartBtn");

const wins = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function checkWinner() {
  for (let [a, b, c] of wins) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.includes(null) ? null : "Draw";
}

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const i = cell.dataset.i;
    if (board[i] || winner) return;
    board[i] = turn;
    cell.textContent = turn;
    cell.style.color = turn === "X" ? "#38bdf8" : "#f43f5e";
    winner = checkWinner();
    if (winner) {
      statusEl.textContent = winner === "Draw" ? "Game is a Draw! 🤝" : 'Player ' + winner + ' Wins! 🎉';
      console.log("Game result:", statusEl.textContent);
    } else {
      turn = turn === "X" ? "O" : "X";
      statusEl.textContent = "Player " + turn + "'s Turn";
    }
  });
});

restartBtn.addEventListener("click", () => {
  board = Array(9).fill(null);
  winner = null;
  turn = "X";
  statusEl.textContent = "Player X's Turn";
  cells.forEach(c => { c.textContent = ""; });
  console.log("Tic Tac Toe restarted");
});`,
      "README.md": `# Tic Tac Toe Game
Classic 3x3 turn-based game with win/draw detection algorithms.`
    }
  },
  glassmorphism: {
    name: "Glassmorphism Card",
    icon: "💎",
    category: "CSS Showcase",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Glassmorphism UI</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="bg-shape circle-1"></div>
  <div class="bg-shape circle-2"></div>
  <div class="glass-card">
    <div class="card-chip">PRO</div>
    <h3>Nextsem Developer Card</h3>
    <p>Modern frosted-glass UI powered by CSS backdrop-filter.</p>
    <div class="meta-row">
      <span>Er. Manoj Kumar</span>
      <span>⭐ 5.0 Rating</span>
    </div>
    <button class="glass-btn">Explore Features →</button>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
      "style.css": `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: system-ui, sans-serif;
  background: #090d16;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 1;
}
.circle-1 { width: 280px; height: 280px; background: #04AA6D; top: 15%; left: 20%; }
.circle-2 { width: 320px; height: 320px; background: #6366f1; bottom: 15%; right: 20%; }
.glass-card {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 32px;
  max-width: 380px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
}
.glass-card:hover { transform: translateY(-6px) rotateX(4deg); }
.card-chip {
  display: inline-block;
  background: rgba(4, 170, 109, 0.3);
  border: 1px solid #04AA6D;
  color: #04AA6D;
  font-size: 10px;
  font-weight: 800;
  padding: 2px 10px;
  border-radius: 12px;
  margin-bottom: 12px;
}
h3 { font-size: 20px; margin-bottom: 8px; }
p { font-size: 13px; color: #cbd5e1; line-height: 1.5; margin-bottom: 20px; }
.meta-row { display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; margin-bottom: 20px; }
.glass-btn {
  width: 100%;
  background: #04AA6D;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
}
.glass-btn:hover { background: #039861; box-shadow: 0 0 20px rgba(4, 170, 109, 0.5); }`,
      "script.js": `console.log("Glassmorphism Card template rendered!");
document.querySelector(".glass-btn")?.addEventListener("click", () => {
  alert("✨ Glassmorphism UI Active!");
});`,
      "README.md": `# Glassmorphism Card
Modern CSS glassmorphism UI with dynamic blur and glowing backdrop spheres.`
    }
  }
};

const DEFAULT_HTML = TEMPLATES.counter.files["index.html"];
const DEFAULT_CSS = TEMPLATES.counter.files["style.css"];
const DEFAULT_JS = TEMPLATES.counter.files["script.js"];
const DEFAULT_README = TEMPLATES.counter.files["README.md"];
const DEFAULT_PACKAGE_JSON = `{
  "name": "nextsem-workspace",
  "version": "1.0.0",
  "private": true,
  "description": "Visual Studio Code Sandbox for Full Stack Web Developers",
  "scripts": {
    "start": "live-server --port=5500",
    "test": "echo 'Running test suite... 100% passed!'"
  },
  "dependencies": {
    "html5": "latest",
    "css3": "latest",
    "javascript-es6": "latest"
  }
}`;

const COMMANDS_LIST = [
  { id: "run", name: "Live Preview: Run & Refresh Web Sandbox", icon: "▶" },
  { id: "toggle-sidebar", name: "View: Toggle Primary Side Bar (Explorer)", icon: "📁" },
  { id: "toggle-terminal", name: "View: Toggle Integrated Terminal Panel", icon: "💻" },
  { id: "layout-top", name: "Layout: Switch to Top Preview Drawer", icon: "⬆" },
  { id: "layout-split", name: "Layout: Switch to Split Screen (Side-by-Side)", icon: "◫" },
  { id: "download", name: "File: Download Project as Single HTML File", icon: "💾" },
  { id: "reset", name: "File: Reset Project to Default Starter Template", icon: "🔄" },
  { id: "template-counter", name: "Template: Load Interactive Counter", icon: "🔢" },
  { id: "template-todo", name: "Template: Load Interactive Todo List", icon: "📝" },
  { id: "template-tictactoe", name: "Template: Load Tic Tac Toe Game", icon: "🎮" },
  { id: "template-glassmorphism", name: "Template: Load Glassmorphism Card", icon: "💎" },
  { id: "theme-dark", name: "Theme: VS Code Dark+ (Default)", icon: "🎨" },
  { id: "theme-contrast", name: "Theme: High Contrast Dark", icon: "🌓" },
  { id: "theme-monokai", name: "Theme: Monokai Pro", icon: "🌙" },
];

export default function PlaygroundClient() {
  /* File & Workspace States */
  const [activeFile, setActiveFile] = useState<string>("index.html");
  const [openTabs, setOpenTabs] = useState<string[]>(["index.html", "style.css", "script.js", "README.md"]);
  const [htmlCode, setHtmlCode] = useState<string>(DEFAULT_HTML);
  const [cssCode, setCssCode] = useState<string>(DEFAULT_CSS);
  const [jsCode, setJsCode] = useState<string>(DEFAULT_JS);
  const [readmeCode, setReadmeCode] = useState<string>(DEFAULT_README);
  const [pkgJsonCode, setPkgJsonCode] = useState<string>(DEFAULT_PACKAGE_JSON);

  /* Mobile View States */
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mobileTab, setMobileTab] = useState<"code" | "preview">("code");

  /* VS Code UI Layout States */
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [activeActivity, setActiveActivity] = useState<"explorer" | "search" | "git" | "debug" | "extensions">("explorer");
  const [layoutMode, setLayoutMode] = useState<"top" | "split" | "hidden">("hidden");
  const [showBottomPanel, setShowBottomPanel] = useState<boolean>(false);
  const [activeBottomTab, setActiveBottomTab] = useState<"terminal" | "console" | "output" | "problems" | "ports">("terminal");
  
  /* Feature Modals & Search States */
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [paletteQuery, setPaletteQuery] = useState<string>("");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [sidebarSearchQuery, setSidebarSearchQuery] = useState<string>("");
  const [themeMode, setThemeMode] = useState<"dark-plus" | "high-contrast" | "monokai">("dark-plus");

  /* Device & Execution States */
  const [deviceMode, setDeviceMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Microsoft Windows [Version 10.0.22631.4169]",
    "(c) Microsoft Corporation. All rights reserved.",
    "",
    "PS C:\\Users\\nextsem\\workspace> live-server --port=5500",
    "Serving \"C:\\Users\\nextsem\\workspace\" at http://127.0.0.1:5500",
    "Ready for client-side JavaScript execution."
  ]);
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [cursorPos, setCursorPos] = useState<{ line: number; col: number }>({ line: 1, col: 1 });
  const [copied, setCopied] = useState<boolean>(false);

  /* Emmet Live Abbreviation State */
  const [emmetSuggestion, setEmmetSuggestion] = useState<{
    abbreviation: string;
    expanded: string;
    startIndex: number;
    endIndex: number;
  } | null>(null);

  /* Prettier Code Formatter Add-on State */
  const [prettierConfig, setPrettierConfig] = useState<PrettierConfig>(DEFAULT_PRETTIER_CONFIG);
  const [toastNotice, setToastNotice] = useState<string | null>(null);

  /* Live Server Add-on State */
  const [isLiveServerRunning, setIsLiveServerRunning] = useState<boolean>(true);
  const [liveServerPort, setLiveServerPort] = useState<number>(5500);
  const [hotReloadEnabled, setHotReloadEnabled] = useState<boolean>(true);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const getCurrentCode = (): string => {
    switch (activeFile) {
      case "index.html": return htmlCode;
      case "style.css": return cssCode;
      case "script.js": return jsCode;
      case "README.md": return readmeCode;
      case "package.json": return pkgJsonCode;
      default: return "";
    }
  };

  const setCurrentCode = (val: string) => {
    switch (activeFile) {
      case "index.html": setHtmlCode(val); break;
      case "style.css": setCssCode(val); break;
      case "script.js": setJsCode(val); break;
      case "README.md": setReadmeCode(val); break;
      case "package.json": setPkgJsonCode(val); break;
    }
  };

  const showToast = (msg: string) => {
    setToastNotice(msg);
    setTimeout(() => setToastNotice(null), 2800);
  };

  // Format active file with Prettier
  const formatCurrentFile = () => {
    const code = getCurrentCode();
    const formatted = formatDocument(code, activeFile, prettierConfig);
    if (formatted !== code) {
      setCurrentCode(formatted);
    }
    showToast(`✨ Prettier: Formatted ${activeFile}`);
    if (isLiveServerRunning) {
      compileAndRun();
    }
  };

  // Toggle Live Server Add-on
  const toggleLiveServer = () => {
    setIsLiveServerRunning((prev) => {
      const next = !prev;
      if (next) {
        setTerminalHistory((t) => [
          ...t,
          `PS C:\\Users\\nextsem\\workspace> live-server --port=${liveServerPort}`,
          `[Live Server v5.7.9]: Serving at http://127.0.0.1:${liveServerPort} (Hot reload active)`
        ]);
        showToast(`🟢 Live Server started on Port ${liveServerPort}`);
        compileAndRun();
      } else {
        setTerminalHistory((t) => [
          ...t,
          `[Live Server]: Server on port ${liveServerPort} stopped.`
        ]);
        showToast(`⚪ Live Server stopped`);
      }
      return next;
    });
  };

  // Open Live Server in a new tab / external window
  const openExternalPreview = () => {
    const win = window.open("", "_blank");
    if (win) {
      win.document.open();
      win.document.write(generateCombinedDoc());
      win.document.close();
      showToast(`🌐 Live Server opened in new tab`);
    }
  };

  // Load from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHtml = localStorage.getItem("nextsem_vscode_html");
      const savedCss = localStorage.getItem("nextsem_vscode_css");
      const savedJs = localStorage.getItem("nextsem_vscode_js");
      if (savedHtml) setHtmlCode(savedHtml);
      if (savedCss) setCssCode(savedCss);
      if (savedJs) setJsCode(savedJs);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nextsem_vscode_html", htmlCode);
      localStorage.setItem("nextsem_vscode_css", cssCode);
      localStorage.setItem("nextsem_vscode_js", jsCode);
    }
  }, [htmlCode, cssCode, jsCode]);

  // Construct combined document
  const generateCombinedDoc = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ${cssCode}
  </style>
  <script>
    (function() {
      const oldLog = console.log;
      const oldError = console.error;
      console.log = function(...args) {
        window.parent.postMessage({ type: 'LOG', data: args.join(' ') }, '*');
        oldLog.apply(console, args);
      };
      console.error = function(...args) {
        window.parent.postMessage({ type: 'ERROR', data: args.join(' ') }, '*');
        oldError.apply(console, args);
      };
    })();
  <\/script>
</head>
<body>
  ${htmlCode.replace(/<!DOCTYPE[\s\S]*?<body[^>]*>/i, '').replace(/<\/body>[\s\S]*?<\/html>/i, '') || htmlCode}
  <script>
    try {
      ${jsCode}
    } catch(err) {
      console.error("Runtime Error: " + err.message);
    }
  <\/script>
</body>
</html>`;
  };

  // Mobile viewport detector & responsive initializer
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false); // auto-collapse sidebar on phone so editor has 100% width
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compile and run in live preview
  const compileAndRun = () => {
    if (window.innerWidth < 768) {
      setMobileTab("preview");
    }
    if (layoutMode === "hidden") setLayoutMode("top");
    setTimeout(() => {
      if (!iframeRef.current) return;
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(generateCombinedDoc());
        doc.close();
      }
    }, 50);
  };

  // Sync code to mobile full-screen preview when active
  useEffect(() => {
    if (isMobile && mobileTab === "preview") {
      const timer = setTimeout(() => {
        if (!iframeRef.current) return;
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(generateCombinedDoc());
          doc.close();
        }
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [isMobile, mobileTab, htmlCode, cssCode, jsCode]);

  // Auto Live Reload (Hot Reload) when typing if Live Server is active
  useEffect(() => {
    if (!isLiveServerRunning || !hotReloadEnabled || layoutMode === "hidden") return;
    const timer = setTimeout(() => {
      compileAndRun();
    }, 350);
    return () => clearTimeout(timer);
  }, [htmlCode, cssCode, jsCode, isLiveServerRunning, hotReloadEnabled]);

  // Console message listener
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && (e.data.type === "LOG" || e.data.type === "ERROR")) {
        setConsoleLogs((prev) => [...prev, `${e.data.type === "ERROR" ? "❌ " : "❯ "}${e.data.data}`]);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Keyboard shortcut listener (Ctrl+Enter, Ctrl+B, Ctrl+Shift+P, F1, Ctrl+S, Shift+Alt+F)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Run Preview
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        compileAndRun();
      }
      // Toggle Side Bar
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setIsSidebarOpen((prev) => !prev);
      }
      // Command Palette
      if (((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "p") || e.key === "F1") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      // Save & Format (Ctrl+S)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        if (prettierConfig.formatOnSave) {
          formatCurrentFile();
        } else {
          compileAndRun();
          showToast(`💾 Saved ${activeFile}`);
        }
      }
      // Prettier Format Document (Shift + Alt + F or Ctrl + Shift + I)
      if ((e.shiftKey && e.altKey && e.key.toLowerCase() === "f") || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "i")) {
        e.preventDefault();
        formatCurrentFile();
      }
      // Toggle Terminal Panel
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setShowBottomPanel((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsCommandPaletteOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [htmlCode, cssCode, jsCode, layoutMode, activeFile, prettierConfig, isLiveServerRunning]);


  // Detect active Emmet abbreviation at cursor
  const checkEmmetSuggestion = (codeText: string, cursorIndex: number) => {
    const fileContext = activeFile.endsWith(".css") ? "css" : activeFile.endsWith(".js") ? "js" : "html";
    if (fileContext === "js") {
      setEmmetSuggestion(null);
      return;
    }
    const match = getEmmetAbbreviationAtCursor(codeText, cursorIndex);
    if (match) {
      const expanded = expandEmmet(match.abbreviation, fileContext);
      if (expanded) {
        setEmmetSuggestion({
          abbreviation: match.abbreviation,
          expanded,
          startIndex: match.startIndex,
          endIndex: match.endIndex
        });
        return;
      }
    }
    setEmmetSuggestion(null);
  };

  // Perform Emmet expansion programmatically
  const executeEmmetExpansion = () => {
    if (!textareaRef.current) return;
    const target = textareaRef.current;
    const start = target.selectionStart;
    const currentCode = getCurrentCode();
    const fileContext = activeFile.endsWith(".css") ? "css" : activeFile.endsWith(".js") ? "js" : "html";

    const result = expandEmmetWithIndentation(currentCode, start, fileContext);
    if (result) {
      setCurrentCode(result.newText);
      setEmmetSuggestion(null);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = result.newCursorPos;
        target.focus();
        compileAndRun();
      }, 0);
    }
  };

  // Handle Tab key in code editor with smart Emmet expansion
  const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const start = target.selectionStart;
    const currentCode = getCurrentCode();
    const fileContext = activeFile.endsWith(".css") ? "css" : activeFile.endsWith(".js") ? "js" : "html";

    // 1. Tab Key: Expand Emmet abbreviation if found; otherwise indent 2 spaces
    if (e.key === "Tab") {
      e.preventDefault();
      const result = expandEmmetWithIndentation(currentCode, start, fileContext);
      if (result) {
        setCurrentCode(result.newText);
        setEmmetSuggestion(null);
        setTimeout(() => {
          target.selectionStart = target.selectionEnd = result.newCursorPos;
          compileAndRun();
        }, 0);
        return;
      }

      // Default 2-space tab indentation
      const end = target.selectionEnd;
      const newCode = currentCode.substring(0, start) + "  " + currentCode.substring(end);
      setCurrentCode(newCode);

      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
      return;
    }

    // 2. Escape: Dismiss Emmet suggestion
    if (e.key === "Escape") {
      setEmmetSuggestion(null);
    }
  };

  // Update line and col count on cursor move and check Emmet
  const handleCursorMove = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;
    const start = textarea.selectionStart;
    const textLines = textarea.value.substring(0, start).split("\n");
    const line = textLines.length;
    const col = textLines[textLines.length - 1].length + 1;
    setCursorPos({ line, col });
    checkEmmetSuggestion(textarea.value, start);
  };

  const openFile = (filename: string) => {
    if (!openTabs.includes(filename)) {
      setOpenTabs([...openTabs, filename]);
    }
    setActiveFile(filename);
    if (isMobile) {
      setIsSidebarOpen(false);
      setMobileTab("code");
    }
  };

  const closeTab = (e: React.MouseEvent, filename: string) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t !== filename);
    if (newTabs.length === 0) {
      setOpenTabs(["index.html"]);
      setActiveFile("index.html");
    } else {
      setOpenTabs(newTabs);
      if (activeFile === filename) {
        setActiveFile(newTabs[newTabs.length - 1]);
      }
    }
  };

  const loadTemplate = (templateKey: string) => {
    const t = TEMPLATES[templateKey];
    if (t) {
      setHtmlCode(t.files["index.html"]);
      setCssCode(t.files["style.css"]);
      setJsCode(t.files["script.js"]);
      setReadmeCode(t.files["README.md"]);
      setActiveFile("index.html");
      setConsoleLogs([]);
      compileAndRun();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    if (confirm("Reset current project files to default VS Code templates?")) {
      loadTemplate("counter");
    }
  };

  // Download project as single HTML file
  const handleDownload = () => {
    const blob = new Blob([generateCombinedDoc()], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "nextsem-project.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Terminal interactive commands
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    const cmd = terminalInput.trim();
    const newHistory = [...terminalHistory, `PS C:\\Users\\nextsem\\workspace> ${cmd}`];

    if (cmd === "clear" || cmd === "cls") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    } else if (cmd === "run" || cmd === "npm start" || cmd === "live-server") {
      newHistory.push("Starting Live Server on port 5500...");
      newHistory.push("Compiled successfully with 0 errors.");
      compileAndRun();
    } else if (cmd === "ls" || cmd === "dir") {
      newHistory.push("Directory: C:\\Users\\nextsem\\workspace\\src");
      newHistory.push("Mode                Length Name");
      newHistory.push("----                ------ ----");
      newHistory.push("-a---                1248 index.html");
      newHistory.push("-a---                2480 style.css");
      newHistory.push("-a---                 960 script.js");
      newHistory.push("-a---                 412 README.md");
      newHistory.push("-a---                 350 package.json");
    } else if (cmd === "node script.js" || cmd === "node") {
      newHistory.push("Executing script.js in V8 JavaScript runtime...");
      newHistory.push("Output: VS Code Sandbox ready • Press Ctrl+Enter to re-run! 🚀");
    } else if (cmd === "help") {
      newHistory.push("Available Commands:");
      newHistory.push("  run / npm start    - Compile and launch live preview");
      newHistory.push("  dir / ls           - List workspace files");
      newHistory.push("  node script.js     - Run active JavaScript code");
      newHistory.push("  clear / cls        - Clear terminal screen");
      newHistory.push("  help               - Show this helper menu");
    } else {
      newHistory.push(`Command '${cmd}' recognized by Nextsem CLI. Type 'help' for available commands.`);
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const lineCount = getCurrentCode().split("\n").length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  const getDeviceWidth = () => {
    switch (deviceMode) {
      case "mobile": return "max-w-[340px]";
      case "tablet": return "max-w-[560px]";
      default: return "w-full";
    }
  };

  const getFileIcon = (file: string) => {
    if (file.endsWith(".html")) return <span className="text-[#e44d26] font-bold text-[11px]">📄</span>;
    if (file.endsWith(".css")) return <span className="text-[#42a5f5] font-bold text-[11px]">🎨</span>;
    if (file.endsWith(".js")) return <span className="text-[#f7df1e] font-bold text-[11px]">⚡</span>;
    if (file.endsWith(".md")) return <span className="text-[#38bdf8] font-bold text-[11px]">ℹ️</span>;
    if (file.endsWith(".json")) return <span className="text-[#f59e0b] font-bold text-[11px]">📦</span>;
    return <FileText size={12} className="text-[#94a3b8]" />;
  };

  const executeCommand = (id: string) => {
    switch (id) {
      case "run": compileAndRun(); break;
      case "toggle-sidebar": setIsSidebarOpen((prev) => !prev); break;
      case "toggle-terminal": setShowBottomPanel((prev) => !prev); break;
      case "layout-top": setLayoutMode("top"); break;
      case "layout-split": setLayoutMode("split"); break;
      case "download": handleDownload(); break;
      case "reset": handleReset(); break;
      case "template-counter": loadTemplate("counter"); break;
      case "template-todo": loadTemplate("todo"); break;
      case "template-tictactoe": loadTemplate("tictactoe"); break;
      case "template-glassmorphism": loadTemplate("glassmorphism"); break;
      case "theme-dark": setThemeMode("dark-plus"); break;
      case "theme-contrast": setThemeMode("high-contrast"); break;
      case "theme-monokai": setThemeMode("monokai"); break;
    }
  };

  // Command palette filter
  const filteredCommands = COMMANDS_LIST.filter(c => c.name.toLowerCase().includes(paletteQuery.toLowerCase()));

  // Theme styling rules
  const themeBg = themeMode === "high-contrast" ? "bg-black" : themeMode === "monokai" ? "bg-[#272822]" : "bg-[#1e1e1e]";
  const editorBg = themeMode === "high-contrast" ? "bg-black" : themeMode === "monokai" ? "bg-[#1e1f1c]" : "bg-[#1e1e1e]";

  return (
    <div className={`h-screen w-screen ${themeBg} text-[#cccccc] flex flex-col font-mono overflow-hidden select-none`}>
      
      {/* ── 1. NATIVE VS CODE TOP TITLEBAR & MENU BAR ── */}
      <header className="bg-[#323233] h-8 px-2 flex items-center justify-between border-b border-[#252526] text-xs text-[#cccccc] shrink-0 z-40 relative">
        
        {/* Left: VS Code Brand Logo + Native Dropdown Menus */}
        <div className="flex items-center gap-1">
          {/* VS Code Official Logo Icon */}
          <Link
            href="/"
            className="flex items-center gap-1.5 px-2 py-1 text-white hover:text-[#007acc] transition-colors font-sans font-bold text-[12px] group"
            title="Return to Nextsem Academy Home"
          >
            <Code2 size={16} className="text-[#007acc] group-hover:scale-110 transition-transform" />
            <span className="font-extrabold text-white">Nextsem Code</span>
          </Link>
          
          {/* Top Menu Dropdowns */}
          <div className="hidden lg:flex items-center text-[11px] text-[#cccccc] font-sans">
            
            {/* File Menu */}
            <div className="relative">
              <button 
                onClick={() => setActiveMenu(activeMenu === "file" ? null : "file")}
                className={`px-2 py-0.5 rounded hover:bg-[#454545] cursor-pointer transition-colors ${activeMenu === "file" ? "bg-[#454545] text-white" : ""}`}
              >
                File
              </button>
              {activeMenu === "file" && (
                <div className="absolute left-0 top-full mt-0.5 w-56 bg-[#252526] border border-[#454545] shadow-2xl rounded py-1 z-50 text-[11px] text-[#cccccc]">
                  <button onClick={() => { openFile("index.html"); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>New File</span> <span className="text-[#858585]">Ctrl+N</span>
                  </button>
                  <button onClick={() => { compileAndRun(); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Save & Run</span> <span className="text-[#858585]">Ctrl+S</span>
                  </button>
                  <button onClick={() => { handleDownload(); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Export as HTML</span> <span className="text-[#858585]">Ctrl+E</span>
                  </button>
                  <div className="h-[1px] bg-[#3c3c3c] my-1" />
                  <button onClick={() => { handleReset(); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-red-600 hover:text-white flex justify-between text-left">
                    <span>Reset Workspace</span>
                  </button>
                </div>
              )}
            </div>

            {/* Edit Menu */}
            <div className="relative">
              <button 
                onClick={() => setActiveMenu(activeMenu === "edit" ? null : "edit")}
                className={`px-2 py-0.5 rounded hover:bg-[#454545] cursor-pointer transition-colors ${activeMenu === "edit" ? "bg-[#454545] text-white" : ""}`}
              >
                Edit
              </button>
              {activeMenu === "edit" && (
                <div className="absolute left-0 top-full mt-0.5 w-52 bg-[#252526] border border-[#454545] shadow-2xl rounded py-1 z-50 text-[11px] text-[#cccccc]">
                  <button onClick={() => { handleCopy(); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Copy All Code</span> <span className="text-[#858585]">Ctrl+C</span>
                  </button>
                  <button onClick={() => { setActiveActivity("search"); setIsSidebarOpen(true); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Find & Replace</span> <span className="text-[#858585]">Ctrl+F</span>
                  </button>
                </div>
              )}
            </div>

            {/* View Menu */}
            <div className="relative">
              <button 
                onClick={() => setActiveMenu(activeMenu === "view" ? null : "view")}
                className={`px-2 py-0.5 rounded hover:bg-[#454545] cursor-pointer transition-colors ${activeMenu === "view" ? "bg-[#454545] text-white" : ""}`}
              >
                View
              </button>
              {activeMenu === "view" && (
                <div className="absolute left-0 top-full mt-0.5 w-56 bg-[#252526] border border-[#454545] shadow-2xl rounded py-1 z-50 text-[11px] text-[#cccccc]">
                  <button onClick={() => { setIsCommandPaletteOpen(true); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Command Palette...</span> <span className="text-[#858585]">F1</span>
                  </button>
                  <button onClick={() => { setIsSidebarOpen(!isSidebarOpen); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Toggle Side Bar</span> <span className="text-[#858585]">Ctrl+B</span>
                  </button>
                  <button onClick={() => { setShowBottomPanel(!showBottomPanel); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Toggle Terminal</span> <span className="text-[#858585]">Ctrl+`</span>
                  </button>
                  <div className="h-[1px] bg-[#3c3c3c] my-1" />
                  <button onClick={() => { setLayoutMode(layoutMode === "split" ? "top" : "split"); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Toggle Split Layout</span>
                  </button>
                </div>
              )}
            </div>

            {/* Run Menu */}
            <div className="relative">
              <button 
                onClick={() => setActiveMenu(activeMenu === "run" ? null : "run")}
                className={`px-2 py-0.5 rounded hover:bg-[#454545] cursor-pointer transition-colors ${activeMenu === "run" ? "bg-[#454545] text-white" : ""}`}
              >
                Run
              </button>
              {activeMenu === "run" && (
                <div className="absolute left-0 top-full mt-0.5 w-56 bg-[#252526] border border-[#454545] shadow-2xl rounded py-1 z-50 text-[11px] text-[#cccccc]">
                  <button onClick={() => { compileAndRun(); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left text-[#04AA6D] font-bold">
                    <span>▶ Start Debugging (Run)</span> <span className="text-[#858585]">Ctrl+Enter</span>
                  </button>
                  <button onClick={() => { setLayoutMode("top"); compileAndRun(); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Run in Top Drawer</span>
                  </button>
                  <button onClick={() => { setLayoutMode("split"); compileAndRun(); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Run in Split Right</span>
                  </button>
                </div>
              )}
            </div>

            {/* Terminal Menu */}
            <div className="relative">
              <button 
                onClick={() => setActiveMenu(activeMenu === "terminal" ? null : "terminal")}
                className={`px-2 py-0.5 rounded hover:bg-[#454545] cursor-pointer transition-colors ${activeMenu === "terminal" ? "bg-[#454545] text-white" : ""}`}
              >
                Terminal
              </button>
              {activeMenu === "terminal" && (
                <div className="absolute left-0 top-full mt-0.5 w-52 bg-[#252526] border border-[#454545] shadow-2xl rounded py-1 z-50 text-[11px] text-[#cccccc]">
                  <button onClick={() => { setShowBottomPanel(true); setActiveBottomTab("terminal"); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>New Terminal</span> <span className="text-[#858585]">Ctrl+`</span>
                  </button>
                  <button onClick={() => { setTerminalHistory([]); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>Clear Terminal</span>
                  </button>
                </div>
              )}
            </div>

            {/* Help Menu */}
            <div className="relative">
              <button 
                onClick={() => setActiveMenu(activeMenu === "help" ? null : "help")}
                className={`px-2 py-0.5 rounded hover:bg-[#454545] cursor-pointer transition-colors ${activeMenu === "help" ? "bg-[#454545] text-white" : ""}`}
              >
                Help
              </button>
              {activeMenu === "help" && (
                <div className="absolute left-0 top-full mt-0.5 w-56 bg-[#252526] border border-[#454545] shadow-2xl rounded py-1 z-50 text-[11px] text-[#cccccc]">
                  <Link href="/html" className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left block">
                    <span>HTML5 Documentation</span>
                  </Link>
                  <Link href="/cli" className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left block">
                    <span>Windows CMD CLI Lessons</span>
                  </Link>
                  <div className="h-[1px] bg-[#3c3c3c] my-1" />
                  <button onClick={() => { alert("Nextsem Web IDE v1.0.0 • High-performance in-browser VS Code simulator"); setActiveMenu(null); }} className="w-full px-3 py-1.5 hover:bg-[#04AA6D] hover:text-white flex justify-between text-left">
                    <span>About Nextsem IDE</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Center: Command Palette / File Quick Open Omnibar */}
        <div 
          onClick={() => setIsCommandPaletteOpen(true)}
          className="hidden sm:flex items-center gap-2 bg-[#1e1e1e] hover:bg-[#252526] border border-[#3c3c3c] hover:border-[#04AA6D]/60 px-3 py-0.5 rounded text-[11px] text-[#858585] max-w-sm sm:max-w-md w-full justify-between shadow-inner cursor-pointer transition-all"
          title="Open Command Palette (Ctrl+Shift+P / F1)"
        >
          <div className="flex items-center gap-1.5 truncate">
            <Search size={11} className="text-[#858585]" />
            <span className="text-[#cccccc] font-sans font-medium">nextsem-workspace</span>
            <span className="text-[#666666]">›</span>
            <span className="text-[#9cdcfe] font-mono">{activeFile}</span>
          </div>
          <kbd className="hidden sm:inline-block bg-[#2d2d2d] text-[#858585] text-[9px] px-1.5 py-0.2 rounded border border-[#3c3c3c]">
            Ctrl + P
          </kbd>
        </div>

        {/* Right: Layout Switcher & Primary Action Buttons */}
        <div className="flex items-center gap-1">
          
          {/* Primary Green Run Button */}
          <button
            onClick={compileAndRun}
            className="px-2.5 py-0.5 bg-[#04AA6D] hover:bg-[#039861] text-white text-[11px] font-sans font-bold rounded flex items-center gap-1 cursor-pointer transition-all shadow-sm active:scale-95"
            title="Run Code in Live Preview (Ctrl + Enter)"
          >
            <Play size={11} className="fill-white" />
            <span className="hidden sm:inline">Run</span>
          </button>

          {/* Toggle Layout (Top Drawer vs Split Right) */}
          <button
            onClick={() => setLayoutMode(layoutMode === "top" ? "split" : layoutMode === "split" ? "hidden" : "top")}
            className={`hidden md:block p-1 rounded hover:bg-[#454545] transition-colors ${layoutMode !== "hidden" ? "text-[#04AA6D]" : "text-[#cccccc]"}`}
            title={`Toggle Live Preview Layout (Current: ${layoutMode.toUpperCase()})`}
          >
            {layoutMode === "split" ? <Columns size={13} /> : layoutMode === "top" ? <Split size={13} /> : <EyeOff size={13} />}
          </button>

          {/* Toggle Bottom Terminal Panel */}
          <button
            onClick={() => setShowBottomPanel(!showBottomPanel)}
            className={`hidden sm:block p-1 rounded hover:bg-[#454545] transition-colors ${showBottomPanel ? "text-[#04AA6D]" : "text-[#cccccc]"}`}
            title="Toggle Integrated Terminal (Ctrl+`)"
          >
            <Terminal size={13} />
          </button>

          {/* Toggle Side Bar */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-1 rounded hover:bg-[#454545] transition-colors ${isSidebarOpen ? "text-[#04AA6D]" : "text-[#cccccc]"}`}
            title="Toggle Side Bar (Ctrl+B)"
          >
            <Layout size={13} />
          </button>

          {/* Export Project */}
          <button
            onClick={handleDownload}
            className="p-1 rounded hover:bg-[#454545] text-[#cccccc] transition-colors hidden sm:block"
            title="Download Workspace (HTML)"
          >
            <Download size={13} />
          </button>

        </div>

      </header>

      {/* ── MOBILE WORKSPACE STRIP (< 768px) ── */}
      <div className="md:hidden bg-[#252526] border-b border-[#1e1e1e] px-2.5 py-1.5 flex items-center justify-between z-30 shrink-0">
        {/* Mobile Tab Switcher */}
        <div className="flex items-center bg-[#1e1e1e] p-0.5 rounded-lg border border-[#3c3c3c]">
          <button
            onClick={() => setMobileTab("code")}
            className={`px-3 py-1 rounded-md text-xs font-sans font-bold flex items-center gap-1.5 transition-all ${
              mobileTab === "code"
                ? "bg-[#007acc] text-white shadow-sm"
                : "text-[#858585] hover:text-white"
            }`}
          >
            <Code2 size={13} />
            <span>Editor</span>
          </button>
          <button
            onClick={() => {
              compileAndRun();
              setMobileTab("preview");
            }}
            className={`px-3 py-1 rounded-md text-xs font-sans font-bold flex items-center gap-1.5 transition-all ${
              mobileTab === "preview"
                ? "bg-[#04AA6D] text-white shadow-sm"
                : "text-[#858585] hover:text-white"
            }`}
          >
            <Play size={12} className={mobileTab === "preview" ? "fill-white" : ""} />
            <span>Preview</span>
          </button>
        </div>

        {/* Mobile Quick Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`px-2.5 py-1 rounded-md text-xs font-sans font-medium flex items-center gap-1 border transition-colors ${
              isSidebarOpen
                ? "bg-[#37373d] text-white border-[#007acc]"
                : "bg-[#1e1e1e] text-[#cccccc] border-[#3c3c3c] hover:bg-[#2d2d2d]"
            }`}
            title="Open Files Explorer"
          >
            <Folder size={12} className="text-[#dcb67a]" />
            <span>Files</span>
          </button>

          <button
            onClick={() => {
              compileAndRun();
              showToast("⚡ Code compiled and running in Preview!");
            }}
            className="px-2.5 py-1 bg-[#04AA6D] hover:bg-[#039861] text-white text-xs font-sans font-bold rounded-md flex items-center gap-1 shadow-sm active:scale-95 transition-all"
            title="Run Code"
          >
            <Flame size={12} className="fill-white" />
            <span>Run</span>
          </button>
        </div>
      </div>

      {/* ── 2. MAIN VS CODE WORKSPACE: ACTIVITY BAR + SIDEBAR + CODE EDITOR + LIVE SANDBOX ── */}
      <div className="flex-1 flex min-h-0 relative">
        
        {/* ── A. ACTIVITY BAR (SLIM LEFT ICON STRIP) ── */}
        <aside className="hidden md:flex w-12 bg-[#333333] border-r border-[#252526] flex-col justify-between items-center py-1 shrink-0 z-20">
          
          {/* Top Activity Icons */}
          <div className="flex flex-col gap-1 w-full items-center">
            
            {/* 1. Explorer */}
            <button
              onClick={() => {
                if (activeActivity === "explorer") setIsSidebarOpen(!isSidebarOpen);
                else { setActiveActivity("explorer"); setIsSidebarOpen(true); }
              }}
              className={`p-2.5 rounded hover:text-white transition-colors relative w-full flex justify-center ${
                activeActivity === "explorer" && isSidebarOpen
                  ? "text-white before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-[#007acc]"
                  : "text-[#858585]"
              }`}
              title="Explorer (Ctrl+Shift+E)"
            >
              <Files size={18} />
            </button>

            {/* 2. Search */}
            <button
              onClick={() => {
                if (activeActivity === "search") setIsSidebarOpen(!isSidebarOpen);
                else { setActiveActivity("search"); setIsSidebarOpen(true); }
              }}
              className={`p-2.5 rounded hover:text-white transition-colors relative w-full flex justify-center ${
                activeActivity === "search" && isSidebarOpen
                  ? "text-white before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-[#007acc]"
                  : "text-[#858585]"
              }`}
              title="Search & Replace (Ctrl+Shift+F)"
            >
              <Search size={18} />
            </button>

            {/* 3. Source Control (Git) */}
            <button
              onClick={() => {
                if (activeActivity === "git") setIsSidebarOpen(!isSidebarOpen);
                else { setActiveActivity("git"); setIsSidebarOpen(true); }
              }}
              className={`p-2.5 rounded hover:text-white transition-colors relative w-full flex justify-center ${
                activeActivity === "git" && isSidebarOpen
                  ? "text-white before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-[#007acc]"
                  : "text-[#858585]"
              }`}
              title="Source Control (Git)"
            >
              <div className="relative">
                <GitBranch size={18} />
                <span className="absolute -top-1 -right-1.5 bg-[#007acc] text-white text-[8px] font-bold px-1 rounded-full">1</span>
              </div>
            </button>

            {/* 4. Run & Debug */}
            <button
              onClick={() => {
                if (activeActivity === "debug") setIsSidebarOpen(!isSidebarOpen);
                else { setActiveActivity("debug"); setIsSidebarOpen(true); }
              }}
              className={`p-2.5 rounded hover:text-white transition-colors relative w-full flex justify-center ${
                activeActivity === "debug" && isSidebarOpen
                  ? "text-white before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-[#007acc]"
                  : "text-[#858585]"
              }`}
              title="Run and Debug (Ctrl+Shift+D)"
            >
              <Bug size={18} />
            </button>

            {/* 5. Extensions */}
            <button
              onClick={() => {
                if (activeActivity === "extensions") setIsSidebarOpen(!isSidebarOpen);
                else { setActiveActivity("extensions"); setIsSidebarOpen(true); }
              }}
              className={`p-2.5 rounded hover:text-white transition-colors relative w-full flex justify-center ${
                activeActivity === "extensions" && isSidebarOpen
                  ? "text-white before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[2px] before:bg-[#007acc]"
                  : "text-[#858585]"
              }`}
              title="Extensions (Ctrl+Shift+X)"
            >
              <Layers size={18} />
            </button>

            {/* Live Preview Direct Trigger */}
            <button
              onClick={compileAndRun}
              className="p-2.5 text-[#04AA6D] hover:text-[#20c997] transition-colors w-full flex justify-center mt-2"
              title="Execute Live Preview (Ctrl+Enter)"
            >
              <Flame size={18} />
            </button>

          </div>

          {/* Bottom Activity Icons: Profile & Settings */}
          <div className="flex flex-col gap-1 w-full items-center">
            <Link
              href="/"
              className="p-2.5 text-[#858585] hover:text-white transition-colors w-full flex justify-center"
              title="Developer Account / Nextsem Home"
            >
              <User size={18} />
            </Link>

            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="p-2.5 text-[#858585] hover:text-white transition-colors w-full flex justify-center"
              title="Settings & Commands (Ctrl+Shift+P)"
            >
              <Settings size={18} />
            </button>
          </div>

        </aside>

        {/* Mobile Sidebar Backdrop */}
        {isSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/70 z-40 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* ── B. PRIMARY SIDE BAR (EXPLORER / SEARCH / GIT / EXTENSIONS) ── */}
        {isSidebarOpen && (
          <div className="fixed md:relative inset-y-0 left-0 z-50 md:z-10 w-72 md:w-60 lg:w-64 bg-[#252526] border-r border-[#1e1e1e] flex flex-col shrink-0 text-xs select-none shadow-2xl md:shadow-none animate-in slide-in-from-left duration-200">
            
            {/* Sidebar Header Title with Actions */}
            <div className="px-4 py-2 flex items-center justify-between text-[11px] font-sans font-bold tracking-wider text-[#bbbbbb] uppercase border-b border-[#1e1e1e]">
              <span className="truncate">
                {activeActivity === "explorer" && "Explorer: Nextsem-Workspace"}
                {activeActivity === "search" && "Search & Replace"}
                {activeActivity === "git" && "Source Control: Git"}
                {activeActivity === "debug" && "Run & Debug"}
                {activeActivity === "extensions" && "Extensions"}
              </span>
              
              <div className="flex items-center gap-1 shrink-0">
                {activeActivity === "explorer" && (
                  <>
                    <button onClick={() => openFile("index.html")} className="p-0.5 hover:text-white text-[#858585]" title="New File">
                      <FilePlus size={13} />
                    </button>
                    <button onClick={() => compileAndRun()} className="p-0.5 hover:text-white text-[#858585]" title="Refresh Workspace">
                      <RefreshCw size={12} />
                    </button>
                  </>
                )}
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 hover:text-white text-[#858585] ml-1 flex items-center gap-1 text-[11px] font-sans"
                  title="Close Sidebar"
                >
                  <X size={14} className="md:hidden" />
                  <Minimize2 size={12} className="hidden md:inline" />
                </button>
              </div>
            </div>

            {/* Sidebar Content Switcher */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-3">
              
              {/* 1. EXPLORER VIEW */}
              {activeActivity === "explorer" && (
                <>
                  {/* Open Editors Section */}
                  <div>
                    <div className="flex items-center gap-1 px-1 py-1 font-sans font-bold text-[10px] text-[#858585] uppercase tracking-wider">
                      <ChevronDown size={12} />
                      <span>OPEN EDITORS</span>
                    </div>
                    <div className="pl-3 space-y-0.5">
                      {openTabs.map((tab) => (
                        <div
                          key={tab}
                          onClick={() => setActiveFile(tab)}
                          className={`flex items-center justify-between px-2 py-1 rounded cursor-pointer group transition-colors ${
                            activeFile === tab ? "bg-[#37373d] text-white font-bold" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            {getFileIcon(tab)}
                            <span className="font-mono text-[11px] truncate">{tab}</span>
                          </div>
                          <button 
                            onClick={(e) => closeTab(e, tab)}
                            className="opacity-0 group-hover:opacity-100 text-[#858585] hover:text-white"
                          >
                            <X size={11} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workspace Folders Tree */}
                  <div>
                    <div className="flex items-center gap-1 px-1 py-1 font-sans font-bold text-[10px] text-[#858585] uppercase tracking-wider">
                      <ChevronDown size={12} />
                      <span>WORKSPACE</span>
                    </div>

                    <div className="pl-2 space-y-0.5">
                      {/* src Folder */}
                      <div className="flex items-center gap-1.5 px-2 py-1 font-sans font-semibold text-[11px] text-[#cccccc]">
                        <ChevronDown size={12} className="text-[#858585]" />
                        <Folder size={13} className="text-[#dcb67a]" />
                        <span>src</span>
                      </div>

                      {/* Files under src */}
                      <div className="pl-6 space-y-0.5">
                        <button
                          onClick={() => openFile("index.html")}
                          className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left transition-colors cursor-pointer ${
                            activeFile === "index.html" ? "bg-[#37373d] text-white" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                          }`}
                        >
                          <span className="text-[#e44d26] text-[11px] font-bold">📄</span>
                          <span className="truncate font-mono text-[11px]">index.html</span>
                        </button>

                        <button
                          onClick={() => openFile("style.css")}
                          className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left transition-colors cursor-pointer ${
                            activeFile === "style.css" ? "bg-[#37373d] text-white" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                          }`}
                        >
                          <span className="text-[#42a5f5] text-[11px] font-bold">🎨</span>
                          <span className="truncate font-mono text-[11px]">style.css</span>
                        </button>

                        <button
                          onClick={() => openFile("script.js")}
                          className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left transition-colors cursor-pointer ${
                            activeFile === "script.js" ? "bg-[#37373d] text-white" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                          }`}
                        >
                          <span className="text-[#f7df1e] text-[11px] font-bold">⚡</span>
                          <span className="truncate font-mono text-[11px]">script.js</span>
                        </button>
                      </div>

                      {/* Root Files */}
                      <div className="pl-4 space-y-0.5">
                        <button
                          onClick={() => openFile("README.md")}
                          className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left transition-colors cursor-pointer ${
                            activeFile === "README.md" ? "bg-[#37373d] text-white" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                          }`}
                        >
                          <span className="text-[#38bdf8] text-[11px] font-bold">ℹ️</span>
                          <span className="truncate font-mono text-[11px]">README.md</span>
                        </button>

                        <button
                          onClick={() => openFile("package.json")}
                          className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left transition-colors cursor-pointer ${
                            activeFile === "package.json" ? "bg-[#37373d] text-white" : "hover:bg-[#2a2d2e] text-[#cccccc]"
                          }`}
                        >
                          <span className="text-[#f59e0b] text-[11px] font-bold">📦</span>
                          <span className="truncate font-mono text-[11px]">package.json</span>
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* Starter Templates Accordion */}
                  <div className="pt-2 border-t border-[#1e1e1e]">
                    <div className="flex items-center gap-1 px-1 py-1 font-sans font-bold text-[10px] text-[#858585] uppercase tracking-wider">
                      <Sparkles size={12} className="text-[#04AA6D]" />
                      <span>STARTER TEMPLATES</span>
                    </div>

                    <div className="pl-2 pt-1 space-y-1">
                      {Object.entries(TEMPLATES).map(([key, t]) => (
                        <button
                          key={key}
                          onClick={() => loadTemplate(key)}
                          className="w-full text-left px-2 py-1.5 rounded hover:bg-[#2a2d2e] flex items-center justify-between text-[11px] group transition-colors"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span>{t.icon}</span>
                            <span className="truncate font-sans text-[#e2e8f0] group-hover:text-[#04AA6D]">{t.name}</span>
                          </div>
                          <span className="text-[9px] bg-[#1e1e1e] text-[#858585] px-1.5 py-0.5 rounded border border-[#333333]">
                            {t.category}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* 2. SEARCH & REPLACE VIEW */}
              {activeActivity === "search" && (
                <div className="space-y-3 pt-1">
                  <div>
                    <label className="text-[10px] text-[#858585] uppercase font-bold block mb-1">Search Workspace</label>
                    <input
                      type="text"
                      value={sidebarSearchQuery}
                      onChange={(e) => setSidebarSearchQuery(e.target.value)}
                      placeholder="Search text in files..."
                      className="w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded px-2.5 py-1 text-xs text-white outline-none focus:border-[#007acc]"
                    />
                  </div>

                  {sidebarSearchQuery && (
                    <div className="space-y-1 text-[11px]">
                      <div className="text-[#858585] text-[10px]">RESULTS:</div>
                      {htmlCode.toLowerCase().includes(sidebarSearchQuery.toLowerCase()) && (
                        <div onClick={() => openFile("index.html")} className="p-1.5 bg-[#1e1e1e] rounded hover:bg-[#2a2d2e] cursor-pointer flex items-center justify-between">
                          <span>index.html</span>
                          <span className="text-[#04AA6D] text-[10px]">match found</span>
                        </div>
                      )}
                      {cssCode.toLowerCase().includes(sidebarSearchQuery.toLowerCase()) && (
                        <div onClick={() => openFile("style.css")} className="p-1.5 bg-[#1e1e1e] rounded hover:bg-[#2a2d2e] cursor-pointer flex items-center justify-between">
                          <span>style.css</span>
                          <span className="text-[#04AA6D] text-[10px]">match found</span>
                        </div>
                      )}
                      {jsCode.toLowerCase().includes(sidebarSearchQuery.toLowerCase()) && (
                        <div onClick={() => openFile("script.js")} className="p-1.5 bg-[#1e1e1e] rounded hover:bg-[#2a2d2e] cursor-pointer flex items-center justify-between">
                          <span>script.js</span>
                          <span className="text-[#04AA6D] text-[10px]">match found</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 3. SOURCE CONTROL VIEW */}
              {activeActivity === "git" && (
                <div className="space-y-3 pt-1 text-xs">
                  <div className="bg-[#1e1e1e] p-2.5 rounded border border-[#3c3c3c] space-y-2">
                    <div className="flex items-center justify-between text-[#858585] text-[11px]">
                      <span>Branch: <strong className="text-white">main</strong></span>
                      <span className="text-[#04AA6D]">✓ Synced</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Commit message..."
                      className="w-full bg-[#252526] border border-[#3c3c3c] rounded px-2 py-1 text-white text-xs outline-none focus:border-[#007acc]"
                    />
                    <button
                      onClick={() => alert("✓ Changes committed to local workspace!")}
                      className="w-full bg-[#007acc] hover:bg-[#0062a3] text-white py-1 rounded font-sans font-bold cursor-pointer transition-colors"
                    >
                      Commit & Push
                    </button>
                  </div>
                  <div className="text-[#858585] text-[11px] px-1">
                    <span>1 pending change in <code>{activeFile}</code></span>
                  </div>
                </div>
              )}

              {/* 4. RUN & DEBUG VIEW */}
              {activeActivity === "debug" && (
                <div className="space-y-3 pt-1 text-xs">
                  <button
                    onClick={compileAndRun}
                    className="w-full bg-[#04AA6D] hover:bg-[#039861] text-white py-1.5 rounded font-sans font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow"
                  >
                    <Play size={13} className="fill-white" />
                    <span>Run and Debug Web App</span>
                  </button>

                  <div className="bg-[#1e1e1e] p-3 rounded border border-[#3c3c3c] space-y-2">
                    <div className="text-[#858585] font-bold text-[10px] uppercase">Breakpoints:</div>
                    <div className="text-[11px] text-[#cccccc] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>index.html: 32</span>
                    </div>
                    <div className="text-[11px] text-[#cccccc] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>script.js: 14</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. EXTENSIONS VIEW (INTERACTIVE PRETTIER, LIVE SERVER, EMMET) */}
              {activeActivity === "extensions" && (
                <div className="space-y-3 pt-1 text-xs">
                  <div className="text-[10px] text-[#858585] uppercase font-bold px-1 tracking-wider">
                    INSTALLED EXTENSIONS ({3})
                  </div>
                  
                  {/* 1. Live Server Extension Card */}
                  <div className="bg-[#1e1e1e] p-3 rounded-lg border border-[#3c3c3c] space-y-2.5 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-1.5">
                        <Radio size={14} className={isLiveServerRunning ? "text-[#04AA6D] animate-pulse" : "text-[#858585]"} />
                        <strong className="text-white text-[12px] font-sans font-bold">Live Server</strong>
                      </div>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${isLiveServerRunning ? "bg-[#04AA6D]/20 text-[#04AA6D]" : "bg-slate-700 text-slate-300"}`}>
                        {isLiveServerRunning ? `:${liveServerPort} Live` : "Stopped"}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#94a3b8] leading-tight font-sans">
                      Automatically launches a local development server with instant WebSocket live-reloading.
                    </p>

                    {/* Server Action Buttons */}
                    <div className="flex items-center gap-1.5 pt-1">
                      <button
                        onClick={toggleLiveServer}
                        className={`flex-1 py-1 px-2 rounded text-[11px] font-sans font-bold flex items-center justify-center gap-1 cursor-pointer transition-colors ${
                          isLiveServerRunning 
                            ? "bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/30" 
                            : "bg-[#04AA6D] text-white hover:bg-[#039861]"
                        }`}
                      >
                        <Power size={12} />
                        <span>{isLiveServerRunning ? "Stop Server" : "Go Live"}</span>
                      </button>

                      <button
                        onClick={openExternalPreview}
                        className="py-1 px-2 bg-[#2a2d2e] hover:bg-[#37373d] text-slate-200 hover:text-white rounded border border-[#3c3c3c] text-[11px] font-sans font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                        title="Open in external browser window"
                      >
                        <ExternalLink size={12} />
                        <span>Open</span>
                      </button>
                    </div>

                    {/* Port & Hot Reload Settings */}
                    <div className="pt-2 border-t border-[#2d2d2d] space-y-1.5 text-[11px] font-sans text-[#cccccc]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#858585]">Server Port:</span>
                        <div className="flex items-center gap-1">
                          {[5500, 3000, 8080].map((port) => (
                            <button
                              key={port}
                              onClick={() => {
                                setLiveServerPort(port);
                                showToast(`Live Server Port set to ${port}`);
                              }}
                              className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold transition-colors ${
                                liveServerPort === port
                                  ? "bg-[#007acc] text-white"
                                  : "bg-[#2d2d2d] text-[#858585] hover:text-white"
                              }`}
                            >
                              {port}
                            </button>
                          ))}
                        </div>
                      </div>

                      <label className="flex items-center justify-between cursor-pointer pt-0.5">
                        <span className="text-[#858585]">Auto Hot-Reload:</span>
                        <input
                          type="checkbox"
                          checked={hotReloadEnabled}
                          onChange={(e) => {
                            setHotReloadEnabled(e.target.checked);
                            showToast(`Hot Reload ${e.target.checked ? "Enabled" : "Disabled"}`);
                          }}
                          className="accent-[#04AA6D] cursor-pointer"
                        />
                      </label>
                    </div>
                  </div>

                  {/* 2. Prettier Code Formatter Extension Card */}
                  <div className="bg-[#1e1e1e] p-3 rounded-lg border border-[#3c3c3c] space-y-2.5 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-1.5">
                        <Sparkles size={14} className="text-[#007acc]" />
                        <strong className="text-white text-[12px] font-sans font-bold">Prettier Formatter</strong>
                      </div>
                      <span className="text-[9px] bg-[#007acc]/20 text-[#007acc] px-1.5 py-0.5 rounded font-bold">
                        v9.12.0
                      </span>
                    </div>

                    <p className="text-[11px] text-[#94a3b8] leading-tight font-sans">
                      Cleans up inconsistent indentation and standardizes HTML tags, CSS rules, and JavaScript logic.
                    </p>

                    {/* Format Document Button */}
                    <button
                      onClick={formatCurrentFile}
                      className="w-full py-1.5 px-2 bg-[#007acc] hover:bg-[#0062a3] text-white rounded text-[11px] font-sans font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-sm"
                    >
                      <Sparkles size={12} />
                      <span>Format Active Document</span>
                      <kbd className="bg-black/30 text-[9px] px-1 rounded ml-1 font-mono">Shift+Alt+F</kbd>
                    </button>

                    {/* Prettier Config Options */}
                    <div className="pt-2 border-t border-[#2d2d2d] space-y-1.5 text-[11px] font-sans text-[#cccccc]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#858585]">Tab Width:</span>
                        <div className="flex items-center gap-1">
                          {[2, 4].map((width) => (
                            <button
                              key={width}
                              onClick={() => {
                                setPrettierConfig((p) => ({ ...p, tabWidth: width }));
                                showToast(`Prettier Tab Width: ${width} spaces`);
                              }}
                              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-colors ${
                                prettierConfig.tabWidth === width
                                  ? "bg-[#04AA6D] text-white"
                                  : "bg-[#2d2d2d] text-[#858585] hover:text-white"
                              }`}
                            >
                              {width} sp
                            </button>
                          ))}
                        </div>
                      </div>

                      <label className="flex items-center justify-between cursor-pointer pt-0.5">
                        <span className="text-[#858585]">Format on Save:</span>
                        <input
                          type="checkbox"
                          checked={prettierConfig.formatOnSave}
                          onChange={(e) => {
                            setPrettierConfig((p) => ({ ...p, formatOnSave: e.target.checked }));
                            showToast(`Prettier Format on Save: ${e.target.checked ? "ON" : "OFF"}`);
                          }}
                          className="accent-[#007acc] cursor-pointer"
                        />
                      </label>
                    </div>
                  </div>

                  {/* 3. Emmet Snippet Engine Card */}
                  <div className="bg-[#1e1e1e] p-3 rounded-lg border border-[#3c3c3c] space-y-2 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-1.5">
                        <Zap size={14} className="text-[#04AA6D] fill-[#04AA6D]" />
                        <strong className="text-white text-[12px] font-sans font-bold">Emmet Engine</strong>
                      </div>
                      <span className="text-[9px] bg-[#04AA6D]/20 text-[#04AA6D] px-1.5 py-0.5 rounded font-bold">
                        Built-in
                      </span>
                    </div>
                    <p className="text-[11px] text-[#94a3b8] leading-tight font-sans">
                      Expand abbreviations like <code className="text-[#04AA6D]">!</code>, <code className="text-[#04AA6D]">div.card&gt;h3+p</code>, <code className="text-[#04AA6D]">ul&gt;li*3</code> with <kbd className="text-[9px] bg-[#141414] px-1 py-0.5 rounded border border-[#333]">Tab</kbd>.
                    </p>
                  </div>

                </div>
              )}


            </div>
          </div>
        )}

        {/* ── C. MAIN EDITOR CONTAINER WITH TABS, BREADCRUMBS, GLOVE & PREVIEW ── */}
        <div className={`flex-1 flex flex-col min-w-0 ${editorBg} overflow-hidden`}>
          
          {/* 1. Editor Tabs Bar (Visible on desktop or when mobileTab is code) */}
          {(!isMobile || mobileTab === "code") && (
            <div className="bg-[#252526] flex items-center justify-between border-b border-[#1e1e1e] shrink-0 overflow-x-auto select-none">
              <div className="flex items-center">
                {openTabs.map((tab) => (
                  <div
                    key={tab}
                    onClick={() => {
                      setActiveFile(tab);
                      if (isMobile) setMobileTab("code");
                    }}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs border-r border-[#1e1e1e] cursor-pointer group transition-colors ${
                      activeFile === tab
                        ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc] font-medium"
                        : "bg-[#2d2d2d] text-[#969696] hover:bg-[#252526]"
                    }`}
                  >
                    {getFileIcon(tab)}
                    <span className="font-mono text-[11px]">{tab}</span>
                    <button
                      onClick={(e) => closeTab(e, tab)}
                      className="opacity-0 group-hover:opacity-100 hover:text-white rounded-full p-0.5 transition-opacity"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))}

                {/* Add New Tab Button */}
                <button
                  onClick={() => openFile("README.md")}
                  className="p-1.5 text-[#858585] hover:text-white transition-colors"
                  title="Open Other Files"
                >
                  <Plus size={12} />
                </button>
              </div>

              {/* Tab Bar Action Icons */}
              <div className="flex items-center gap-1 px-3">
                {/* Green Run Shortcut */}
                <button
                  onClick={compileAndRun}
                  className="p-1 hover:bg-[#3c3c3c] rounded text-[#04AA6D] hover:text-white transition-colors"
                  title="Run in Live Preview (Ctrl+Enter)"
                >
                  <Play size={13} className="fill-[#04AA6D]" />
                </button>
                
                {/* Split Editor Toggle */}
                <button
                  onClick={() => setLayoutMode(layoutMode === "split" ? "top" : "split")}
                  className={`hidden md:block p-1 hover:bg-[#3c3c3c] rounded transition-colors ${layoutMode === "split" ? "text-[#007acc]" : "text-[#cccccc]"}`}
                  title="Toggle Split Screen Live Preview"
                >
                  <Split size={13} />
                </button>

                {/* Copy Code */}
                <button
                  onClick={handleCopy}
                  className="p-1 hover:bg-[#3c3c3c] rounded text-[#cccccc] transition-colors"
                  title="Copy Active Code"
                >
                  {copied ? <Check size={13} className="text-[#04AA6D]" /> : <Copy size={13} />}
                </button>
              </div>
            </div>
          )}

          {/* 2. Breadcrumbs Bar (Visible on desktop or when mobileTab is code) */}
          {(!isMobile || mobileTab === "code") && (
            <div className="bg-[#1e1e1e] px-3 sm:px-4 py-1 text-[10px] sm:text-[11px] text-[#858585] border-b border-[#252526] flex items-center gap-1.5 select-none font-sans overflow-x-auto">
              <span className="hover:text-white cursor-pointer">nextsem-workspace</span>
              <span>›</span>
              <span className="hover:text-white cursor-pointer">src</span>
              <span>›</span>
              <span className="text-[#cccccc] font-mono">{activeFile}</span>
              <span>›</span>
              <span className="text-[#858585] font-mono text-[10px]">
                {activeFile === "index.html" ? "<body>" : activeFile === "style.css" ? ".app-container" : "updateCount()"}
              </span>
            </div>
          )}

          {/* ── 3A. MOBILE FULL-SCREEN PREVIEW (< 768px when mobileTab === "preview") ── */}
          {isMobile && mobileTab === "preview" && (
            <div className="flex-1 flex flex-col h-full w-full bg-[#141414] overflow-hidden">
              {/* Mobile Simple Browser Header */}
              <div className="bg-[#2d2d2d] px-3 py-1.5 border-b border-[#1e1e1e] flex items-center justify-between text-xs select-none shrink-0">
                <div className="flex items-center gap-2 flex-1 min-w-0 mr-2">
                  <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-pulse shrink-0" />
                  <div className="flex-1 bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-0.5 rounded text-[11px] text-[#cccccc] font-mono truncate">
                    http://127.0.0.1:5500/{activeFile === "README.md" ? "index.html" : activeFile}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={compileAndRun}
                    className="p-1.5 bg-[#1e1e1e] hover:bg-[#3c3c3c] rounded text-[#04AA6D] border border-[#3c3c3c]"
                    title="Refresh Live View"
                  >
                    <RefreshCw size={12} />
                  </button>
                  <button
                    onClick={() => setMobileTab("code")}
                    className="px-2.5 py-1 bg-[#007acc] hover:bg-[#0062a3] text-white rounded text-[11px] font-sans font-bold flex items-center gap-1 shadow-xs"
                    title="Return to Code Editor"
                  >
                    <Code2 size={12} />
                    <span>Editor</span>
                  </button>
                </div>
              </div>

              {/* Full Mobile Sandboxed Iframe */}
              <div className="flex-1 w-full h-full bg-white overflow-hidden">
                <iframe
                  ref={iframeRef}
                  title="VS Code Mobile Live Preview"
                  sandbox="allow-scripts allow-modals"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}

          {/* ── 3B. DESKTOP LIVE PREVIEW (TOP DRAWER MODE) ── */}
          {!isMobile && layoutMode === "top" && (
            <div className="border-b-2 border-[#04AA6D]/50 bg-[#141414] flex flex-col shrink-0 max-h-[46vh] transition-all duration-200 shadow-2xl z-10">
              {/* VS Code Simple Browser Navigation Toolbar */}
              <div className="bg-[#2d2d2d] px-3 py-1.5 border-b border-[#1e1e1e] flex items-center justify-between text-xs select-none">
                {/* Simulated Browser URL bar */}
                <div className="flex items-center gap-2 flex-1 min-w-0 mr-3">
                  <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-pulse" />
                  <div className="flex-1 bg-[#1e1e1e] border border-[#3c3c3c] px-2.5 py-0.5 rounded text-[11px] text-[#cccccc] font-mono flex items-center justify-between">
                    <span className="truncate">http://127.0.0.1:5500/{activeFile === "README.md" ? "index.html" : activeFile}</span>
                    <span className="text-[10px] text-[#858585] hidden sm:inline">Simple Browser</span>
                  </div>
                </div>

                {/* Device Viewport Switcher & Window Actions */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setDeviceMode("desktop")}
                    className={`p-1 rounded ${deviceMode === "desktop" ? "bg-[#1e1e1e] text-[#04AA6D]" : "text-[#858585] hover:text-white"}`}
                    title="Desktop"
                  >
                    <Monitor size={12} />
                  </button>
                  <button
                    onClick={() => setDeviceMode("tablet")}
                    className={`p-1 rounded ${deviceMode === "tablet" ? "bg-[#1e1e1e] text-[#04AA6D]" : "text-[#858585] hover:text-white"}`}
                    title="Tablet (560px)"
                  >
                    <Tablet size={12} />
                  </button>
                  <button
                    onClick={() => setDeviceMode("mobile")}
                    className={`p-1 rounded ${deviceMode === "mobile" ? "bg-[#1e1e1e] text-[#04AA6D]" : "text-[#858585] hover:text-white"}`}
                    title="Mobile (340px)"
                  >
                    <Smartphone size={12} />
                  </button>

                  <button
                    onClick={compileAndRun}
                    className="p-1 hover:bg-[#3c3c3c] rounded text-[#cccccc] hover:text-white ml-1"
                    title="Refresh Live View"
                  >
                    <RefreshCw size={12} />
                  </button>

                  <button
                    onClick={() => setLayoutMode("split")}
                    className="p-1 hover:bg-[#3c3c3c] rounded text-[#cccccc] hover:text-white"
                    title="Switch to Split Screen"
                  >
                    <Columns size={12} />
                  </button>
                  
                  <button
                    onClick={() => setLayoutMode("hidden")}
                    className="p-1 hover:bg-[#3c3c3c] rounded text-[#cccccc] hover:text-white"
                    title="Close Live Preview"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* Sandboxed Live Viewport */}
              <div className="p-2 sm:p-3 flex items-center justify-center bg-[#111111] overflow-hidden">
                <div className={`w-full ${getDeviceWidth()} h-[210px] sm:h-[260px] transition-all duration-200 bg-white rounded shadow-inner overflow-hidden border border-[#3c3c3c]`}>
                  <iframe
                    ref={iframeRef}
                    title="VS Code Live Preview"
                    sandbox="allow-scripts allow-modals"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── 4. CODE EDITOR CANVAS (Visible on desktop or when mobileTab is code) ── */}
          {(!isMobile || mobileTab === "code") && (
            <div className="flex-1 flex min-h-0 relative overflow-hidden">
              {/* Editor Text Pane with Line Numbers & Minimap */}
              <div className="flex-1 flex min-h-0 overflow-hidden relative">
                {/* Line Numbers Gutter */}
                <div className="w-8 sm:w-12 py-3 bg-[#1e1e1e] border-r border-[#2d2d2d] flex flex-col text-right pr-1.5 sm:pr-3 font-mono text-[10px] sm:text-xs text-[#858585] select-none shrink-0 leading-[1.65]">
                  {lineNumbers.map((num) => (
                    <div key={num} className={`relative group ${num === cursorPos.line ? "text-[#c6c6c6] font-bold" : ""}`}>
                      <span className="hidden group-hover:inline-block absolute left-1 top-1 w-2 h-2 rounded-full bg-red-500 cursor-pointer" />
                      <span>{num}</span>
                    </div>
                  ))}
                </div>

                {/* Code Textarea Input */}
                <div className="flex-1 relative overflow-hidden flex bg-[#1e1e1e]">
                  <textarea
                    ref={textareaRef}
                    value={getCurrentCode()}
                    onChange={(e) => {
                      setCurrentCode(e.target.value);
                      const start = e.target.selectionStart;
                      checkEmmetSuggestion(e.target.value, start);
                    }}
                    onKeyDown={handleTextareaKeyDown}
                    onKeyUp={handleCursorMove}
                    onClick={handleCursorMove}
                    spellCheck={false}
                    autoCapitalize="none"
                    autoCorrect="off"
                    className="w-full h-full bg-transparent text-[#d4d4d4] font-mono text-xs sm:text-[13px] leading-[1.65] p-2 sm:p-3 resize-none focus:outline-none selection:bg-[#264f78] custom-scrollbar border-0"
                    placeholder={`Type HTML/CSS code or Emmet abbreviations (e.g. div.card>h3+p+button, ul>li*3, !) in ${activeFile}...`}
                  />

                  {/* Floating VS Code Emmet Suggestion Card */}
                  {emmetSuggestion && (
                    <div
                      onClick={executeEmmetExpansion}
                      className="absolute right-4 bottom-4 z-30 bg-[#252526] border border-[#007acc] text-[#cccccc] shadow-2xl rounded-lg p-2.5 max-w-xs sm:max-w-sm text-xs cursor-pointer hover:bg-[#2a2d2e] transition-all animate-in fade-in slide-in-from-bottom-2 duration-150 select-none"
                      title="Click or press Tab ⇥ to expand Emmet abbreviation"
                    >
                      <div className="flex items-center justify-between pb-1.5 border-b border-[#3c3c3c] mb-1.5">
                        <div className="flex items-center gap-1.5 text-[#007acc] font-bold text-[11px]">
                          <Zap size={13} className="text-[#007acc] fill-[#007acc]" />
                          <span>Emmet Abbreviation</span>
                        </div>
                        <kbd className="bg-[#1e1e1e] border border-[#3c3c3c] px-1.5 py-0.5 rounded text-[10px] text-[#04AA6D] font-mono font-bold">
                          Tab ⇥
                        </kbd>
                      </div>
                      <div className="font-mono text-[11px] text-white font-semibold truncate mb-1">
                        <span className="text-[#04AA6D] font-bold">{emmetSuggestion.abbreviation}</span>
                        <span className="text-[#858585] text-[10px] ml-1.5 font-normal">➔ Expand snippet</span>
                      </div>
                      <pre className="text-[10px] text-[#9cdcfe] font-mono bg-[#181818] p-1.5 rounded border border-[#333333] max-h-24 overflow-hidden whitespace-pre-wrap leading-tight">
                        {emmetSuggestion.expanded.length > 140 ? emmetSuggestion.expanded.substring(0, 140) + "..." : emmetSuggestion.expanded}
                      </pre>
                    </div>
                  )}
                </div>

                {/* Minimap Simulation on Right Edge */}
                <div className="w-14 bg-[#1a1a1a] border-l border-[#282828] hidden md:flex flex-col py-3 px-1 select-none shrink-0 opacity-40 hover:opacity-90 transition-opacity">
                  {lineNumbers.slice(0, 45).map((n) => (
                    <div 
                      key={n} 
                      className="h-1 bg-[#858585]/40 rounded-sm mb-0.5" 
                      style={{ width: `${Math.min(100, Math.max(20, (n * 17) % 100))}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* ── 5. DESKTOP SPLIT RIGHT PREVIEW MODE (IF ACTIVE) ── */}
              {!isMobile && layoutMode === "split" && (
                <div className="w-1/2 border-l border-[#2d2d2d] bg-[#141414] flex flex-col shrink-0 transition-all">
                  <div className="bg-[#2d2d2d] px-3 py-1.5 border-b border-[#1e1e1e] flex items-center justify-between text-xs select-none">
                    <div className="flex items-center gap-2 flex-1 min-w-0 mr-2">
                      <span className="w-2 h-2 rounded-full bg-[#04AA6D] animate-pulse" />
                      <span className="text-[11px] text-[#cccccc] font-mono truncate">http://127.0.0.1:5500/</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={compileAndRun} className="p-1 hover:bg-[#3c3c3c] rounded text-[#cccccc]" title="Refresh">
                        <RefreshCw size={12} />
                      </button>
                      <button onClick={() => setLayoutMode("top")} className="p-1 hover:bg-[#3c3c3c] rounded text-[#cccccc]" title="Switch to Top Drawer">
                        <Split size={12} />
                      </button>
                      <button onClick={() => setLayoutMode("hidden")} className="p-1 hover:bg-[#3c3c3c] rounded text-[#cccccc]" title="Close Preview">
                        <X size={12} />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 bg-white p-2">
                    <iframe
                      ref={iframeRef}
                      title="VS Code Split Live Preview"
                      sandbox="allow-scripts allow-modals"
                      className="w-full h-full border-0"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── 6. COLLAPSIBLE BOTTOM PANEL (TERMINAL / CONSOLE / OUTPUT / PROBLEMS) ── */}
          {showBottomPanel && (
            <div className="h-44 bg-[#1e1e1e] border-t border-[#2d2d2d] flex flex-col shrink-0 text-xs">
              
              {/* Bottom Panel Tab Bar */}
              <div className="bg-[#252526] px-4 py-1 flex items-center justify-between border-b border-[#1e1e1e]">
                <div className="flex items-center gap-4 text-[11px] font-sans">
                  
                  <button
                    onClick={() => setActiveBottomTab("problems")}
                    className={`hover:text-white transition-colors cursor-pointer py-0.5 ${
                      activeBottomTab === "problems" ? "text-white font-bold border-b-2 border-[#007acc]" : "text-[#858585]"
                    }`}
                  >
                    PROBLEMS (0)
                  </button>

                  <button
                    onClick={() => setActiveBottomTab("output")}
                    className={`hover:text-white transition-colors cursor-pointer py-0.5 ${
                      activeBottomTab === "output" ? "text-white font-bold border-b-2 border-[#007acc]" : "text-[#858585]"
                    }`}
                  >
                    OUTPUT
                  </button>

                  <button
                    onClick={() => setActiveBottomTab("console")}
                    className={`hover:text-white transition-colors cursor-pointer py-0.5 ${
                      activeBottomTab === "console" ? "text-white font-bold border-b-2 border-[#007acc]" : "text-[#858585]"
                    }`}
                  >
                    DEBUG CONSOLE {consoleLogs.length > 0 && `(${consoleLogs.length})`}
                  </button>

                  <button
                    onClick={() => setActiveBottomTab("terminal")}
                    className={`hover:text-white transition-colors cursor-pointer py-0.5 ${
                      activeBottomTab === "terminal" ? "text-white font-bold border-b-2 border-[#007acc]" : "text-[#858585]"
                    }`}
                  >
                    TERMINAL (POWERSHELL)
                  </button>

                  <button
                    onClick={() => setActiveBottomTab("ports")}
                    className={`hover:text-white transition-colors cursor-pointer py-0.5 ${
                      activeBottomTab === "ports" ? "text-white font-bold border-b-2 border-[#007acc]" : "text-[#858585]"
                    }`}
                  >
                    PORTS (5500)
                  </button>

                </div>

                <div className="flex items-center gap-2 text-[#858585]">
                  <button onClick={() => setConsoleLogs([])} className="hover:text-white" title="Clear">
                    <RotateCcw size={12} />
                  </button>
                  <button onClick={() => setShowBottomPanel(false)} className="hover:text-white" title="Close Panel">
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* Panel Content Area */}
              <div className="flex-1 p-3 overflow-y-auto font-mono text-[11px] text-[#cccccc] custom-scrollbar bg-[#181818]">
                
                {/* 1. Terminal Mode */}
                {activeBottomTab === "terminal" && (
                  <div className="space-y-1">
                    {terminalHistory.map((line, idx) => (
                      <div key={idx} className={line.startsWith("PS ") ? "text-cyan-400 font-bold" : line.includes("error") ? "text-red-400" : "text-[#cccccc]"}>
                        {line}
                      </div>
                    ))}

                    {/* Interactive Input Line */}
                    <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 pt-1">
                      <span className="text-cyan-400 font-bold shrink-0">PS C:\Users\nextsem\workspace&gt;</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        className="flex-1 bg-transparent border-0 text-white font-mono text-[11px] outline-none"
                        placeholder="Type 'run', 'ls', 'node script.js' or 'help'..."
                        autoFocus
                      />
                    </form>
                    <div ref={terminalEndRef} />
                  </div>
                )}

                {/* 2. Debug Console Mode */}
                {activeBottomTab === "console" && (
                  <div className="space-y-0.5">
                    {consoleLogs.length === 0 ? (
                      <div className="text-[#858585] italic">No console logs yet. Use console.log() in script.js!</div>
                    ) : (
                      consoleLogs.map((log, i) => (
                        <div key={i} className="text-emerald-400">{log}</div>
                      ))
                    )}
                  </div>
                )}

                {/* 3. Output Mode */}
                {activeBottomTab === "output" && (
                  <div className="space-y-1 text-[#858585]">
                    <div>[Nextsem Compiler Engine]: Build 1.0.0 initialized successfully.</div>
                    <div>[Language Server]: HTML, CSS3, JavaScript (ES6+) IntelliSense active.</div>
                    <div>[Live Preview]: Ready on internal localhost bridge.</div>
                  </div>
                )}

                {/* 4. Problems Mode */}
                {activeBottomTab === "problems" && (
                  <div className="space-y-1 text-[#858585]">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <ShieldCheck size={14} />
                      <span>No syntax errors or linter problems detected.</span>
                    </div>
                  </div>
                )}

                {/* 5. Ports Mode */}
                {activeBottomTab === "ports" && (
                  <div className="space-y-2 font-sans">
                    <div className="flex items-center justify-between bg-[#1e1e1e] p-2.5 rounded border border-[#3c3c3c]">
                      <div className="space-y-0.5">
                        <div className="text-white font-bold flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isLiveServerRunning ? "bg-[#04AA6D] animate-pulse" : "bg-slate-500"}`} />
                          <span>Port {liveServerPort} • Live Server v5.7.9</span>
                        </div>
                        <div className="text-[#858585] text-[11px] font-mono">
                          Local: http://127.0.0.1:{liveServerPort}/{activeFile === "README.md" ? "index.html" : activeFile}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={toggleLiveServer}
                          className={`px-2.5 py-1 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                            isLiveServerRunning ? "bg-rose-500/20 text-rose-300 hover:bg-rose-500/30" : "bg-[#04AA6D] text-white"
                          }`}
                        >
                          {isLiveServerRunning ? "Stop Port" : "Start Port"}
                        </button>
                        <button
                          onClick={openExternalPreview}
                          className="px-2.5 py-1 bg-[#2d2d2d] hover:bg-[#3c3c3c] text-white rounded text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors border border-[#454545]"
                        >
                          <ExternalLink size={12} />
                          <span>Open Window</span>
                        </button>
                      </div>
                    </div>
                    <div className="text-[#858585] text-[11px] px-1">
                      WebSocket Protocol: <code>ws://127.0.0.1:{liveServerPort}/ws</code> • Hot-Reload: {hotReloadEnabled ? "Active (350ms)" : "Manual"}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>

      </div>

      {/* ── 3. NATIVE VS CODE BOTTOM STATUS BAR ── */}
      <footer className="bg-[#007acc] text-white h-6 px-2 flex items-center justify-between text-[11px] shrink-0 select-none font-sans z-30">
        
        {/* Left Status Bar Items */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Remote WSL / Container Pill */}
          <button 
            onClick={() => setIsCommandPaletteOpen(true)}
            className="bg-[#005a9e] hover:bg-[#004b85] px-2 py-0.5 rounded text-white font-extrabold flex items-center gap-1 cursor-pointer"
            title="Open Remote Sandbox / Commands"
          >
            <span>&gt;&lt;</span>
          </button>

          {/* Git Branch */}
          <div className="flex items-center gap-1 hover:bg-black/20 px-1.5 py-0.5 rounded cursor-pointer" title="Git Branch: main">
            <GitBranch size={12} />
            <span className="font-bold">main*</span>
          </div>

          {/* Cloud Sync Icon */}
          <div className="hidden sm:flex items-center gap-1 hover:bg-black/20 px-1.5 py-0.5 rounded cursor-pointer" title="Synchronize Changes">
            <RotateCcw size={11} />
            <span>0↓ 0↑</span>
          </div>

          {/* Errors / Warnings */}
          <div className="flex items-center gap-1.5 hover:bg-black/20 px-1.5 py-0.5 rounded cursor-pointer" title="0 Errors, 0 Warnings">
            <ShieldCheck size={12} />
            <span>0</span>
          </div>

          {/* Live Server Interactive Status Pill */}
          <button
            onClick={toggleLiveServer}
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded font-bold cursor-pointer transition-all shadow-sm ${
              isLiveServerRunning 
                ? "bg-[#04AA6D] hover:bg-[#039861] text-white" 
                : "bg-black/30 hover:bg-black/50 text-white/90 border border-white/20"
            }`}
            title={isLiveServerRunning ? `Live Server active on Port ${liveServerPort} (Click to Stop)` : "Click to Start Live Server"}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isLiveServerRunning ? "bg-white animate-ping" : "bg-slate-300"}`} />
            <span className="hidden sm:inline">{isLiveServerRunning ? `Port: ${liveServerPort} (Live)` : "Go Live"}</span>
            <span className="sm:hidden">{isLiveServerRunning ? liveServerPort : "Go Live"}</span>
          </button>

        </div>

        {/* Right Status Bar Items */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Toggle Terminal Button */}
          <button 
            onClick={() => setShowBottomPanel(!showBottomPanel)}
            className="hover:bg-black/20 px-1.5 py-0.5 rounded flex items-center gap-1 cursor-pointer font-mono"
            title="Toggle Integrated Terminal (Ctrl+`)"
          >
            <Terminal size={11} />
            <span className="hidden sm:inline">Terminal</span>
          </button>

          {/* Line & Column Position */}
          <span className="font-mono hidden sm:inline">
            Ln {cursorPos.line}, Col {cursorPos.col}
          </span>

          <span className="hidden md:inline">Spaces: {prettierConfig.tabWidth}</span>
          <span className="hidden md:inline">UTF-8</span>
          <span className="hidden sm:inline">CRLF</span>

          {/* Language Mode */}
          <span className="font-bold font-mono px-1 py-0.5 rounded hover:bg-black/20 cursor-pointer">
            {activeFile === "index.html" ? "HTML" : activeFile === "style.css" ? "CSS" : activeFile === "script.js" ? "JavaScript" : activeFile === "README.md" ? "Markdown" : "JSON"}
          </span>

          {/* Prettier Formatter Action Pill */}
          <button
            onClick={formatCurrentFile}
            className="hover:bg-black/20 px-1.5 py-0.5 rounded cursor-pointer hidden sm:flex items-center gap-1 font-sans"
            title="Format Document with Prettier (Shift+Alt+F)"
          >
            <Sparkles size={11} />
            <span>Prettier: ✓</span>
          </button>

          {/* Emmet Status Checkmark */}
          <span 
            onClick={() => alert("⚡ Nextsem Emmet Engine Active: Type abbreviations like '!', 'div.card>h3+p+button.btn', 'ul>li*3', 'df', 'p20' and press Tab to expand!")}
            className="hover:bg-black/20 px-1.5 py-0.5 rounded cursor-pointer font-bold text-emerald-300 flex items-center gap-0.5" 
            title="Emmet Abbreviation Engine Active (Press Tab to expand)"
          >
            <span>Emmet: ✓</span>
          </span>

          {/* Notification Bell */}
          <div className="hover:bg-black/20 p-1 rounded cursor-pointer" title="Notifications">
            <Bell size={12} />
          </div>

        </div>

      </footer>

      {/* ── TOAST NOTIFICATION FLOATING PILL ── */}
      {toastNotice && (
        <div className="fixed bottom-9 right-6 z-50 bg-[#1e1e1e] border border-[#007acc] text-white px-3.5 py-2 rounded-lg shadow-2xl text-xs font-sans flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <Sparkles size={13} className="text-[#007acc]" />
          <span>{toastNotice}</span>
        </div>
      )}

      {/* ── 4. FLOATING VS CODE COMMAND PALETTE MODAL (CTRL+SHIFT+P / F1) ── */}
      {isCommandPaletteOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center pt-10 sm:pt-14 px-4"
          onClick={() => setIsCommandPaletteOpen(false)}
        >
          <div 
            className="bg-[#252526] border border-[#454545] rounded-lg shadow-2xl max-w-xl w-full overflow-hidden text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Bar */}
            <div className="p-2 border-b border-[#3c3c3c] flex items-center gap-2 bg-[#1e1e1e]">
              <span className="text-[#007acc] font-bold text-sm">&gt;</span>
              <input
                type="text"
                value={paletteQuery}
                onChange={(e) => setPaletteQuery(e.target.value)}
                placeholder="Type a command or action (e.g. Run, Template, Terminal, Theme)..."
                className="w-full bg-transparent border-0 text-white font-sans text-xs outline-none"
                autoFocus
              />
              <kbd className="text-[10px] text-[#858585] bg-[#2d2d2d] px-1.5 py-0.5 rounded border border-[#3c3c3c]">ESC</kbd>
            </div>

            {/* Filtered Command List */}
            <div className="max-h-72 overflow-y-auto custom-scrollbar p-1">
              {filteredCommands.map((cmd, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    executeCommand(cmd.id);
                    setIsCommandPaletteOpen(false);
                  }}
                  className="w-full px-3 py-2 text-left hover:bg-[#007acc] hover:text-white rounded flex items-center justify-between group transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span>{cmd.icon}</span>
                    <span className="text-[#cccccc] group-hover:text-white font-sans">{cmd.name}</span>
                  </div>
                  <CornerDownLeft size={12} className="text-[#858585] group-hover:text-white opacity-0 group-hover:opacity-100" />
                </button>
              ))}

              {filteredCommands.length === 0 && (
                <div className="p-4 text-center text-[#858585]">
                  No matching VS Code commands found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
