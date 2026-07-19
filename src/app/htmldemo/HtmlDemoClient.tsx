"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Play, ChevronRight, ChevronLeft, BookOpen, Code2, Lightbulb,
  FileText, Star, SkipForward, CheckCircle2, Lock, ArrowLeft,
  RefreshCw, Copy, Check, Menu, X
} from "lucide-react";

// ── Lesson Data ─────────────────────────────────────────────────────────────

interface Lesson {
  id: number;
  unit: string;
  title: string;
  type: "lesson" | "challenge";
  about: string;
  docs: { term: string; desc: string }[];
  hints: string[];
  starter: { html: string; css: string; js: string };
}

const LESSONS: Lesson[] = [
  {
    id: 1,
    unit: "Unit 1: HTML Basics",
    title: "What is HTML?",
    type: "lesson",
    about: "HTML stands for HyperText Markup Language. It is the standard language used to create and structure web pages. Every website you visit is built with HTML. In this lesson, you will learn what HTML is and view your very first web page structure.",
    docs: [
      { term: "<!DOCTYPE html>", desc: "Tells the browser this document is HTML5." },
      { term: "<html>", desc: "The root element that wraps all page content." },
      { term: "<head>", desc: "Contains metadata like title and links to styles." },
      { term: "<body>", desc: "Everything visible on the page goes inside here." },
      { term: "<title>", desc: "Sets the text that appears in the browser tab." },
    ],
    hints: ["Every HTML file starts with <!DOCTYPE html>", "The <body> tag holds all visible content", "Think of HTML tags as containers — they open and close"],
    starter: {
      html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>This is my first HTML webpage.</p>\n</body>\n</html>`,
      css: `body {\n  background-color: #0f172a;\n  color: #f8fafc;\n  font-family: sans-serif;\n  padding: 32px;\n}\n\nh1 {\n  color: #38bdf8;\n  font-size: 2rem;\n}\n\np {\n  color: #94a3b8;\n  font-size: 1rem;\n  margin-top: 12px;\n}`,
      js: `// No JavaScript needed for this lesson\nconsole.log("HTML page loaded!");`
    }
  },
  {
    id: 2,
    unit: "Unit 1: HTML Basics",
    title: "Headings & Paragraphs",
    type: "lesson",
    about: "HTML has six heading levels: h1 through h6. Use h1 for the main title and h2–h6 for subtitles. Paragraphs are created using the <p> tag. Together, headings and paragraphs form the text structure of any web page.",
    docs: [
      { term: "<h1> to <h6>", desc: "Heading tags from largest (h1) to smallest (h6)." },
      { term: "<p>", desc: "Defines a paragraph of text." },
      { term: "<br>", desc: "Inserts a line break inside text." },
      { term: "<strong>", desc: "Makes text bold and semantically important." },
      { term: "<em>", desc: "Makes text italic and semantically emphasized." },
    ],
    hints: ["Use only one <h1> per page", "Wrap every block of text in a <p> tag", "Use <strong> for bold, <em> for italic"],
    starter: {
      html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Headings Demo</title>\n</head>\n<body>\n  <h1>Main Title (h1)</h1>\n  <h2>Section Title (h2)</h2>\n  <h3>Subsection (h3)</h3>\n  <p>This is a regular paragraph. You can make text <strong>bold</strong> or <em>italic</em>.</p>\n  <p>This is a second paragraph with a<br>line break inside it.</p>\n</body>\n</html>`,
      css: `body {\n  background: #0f172a;\n  color: #f8fafc;\n  font-family: sans-serif;\n  padding: 32px;\n  line-height: 1.6;\n}\nh1 { color: #38bdf8; }\nh2 { color: #818cf8; }\nh3 { color: #34d399; }\np  { color: #94a3b8; margin: 10px 0; }`,
      js: `console.log("Headings lesson loaded!");`
    }
  },
  {
    id: 3,
    unit: "Unit 1: HTML Basics",
    title: "Links & Images",
    type: "lesson",
    about: "Links (<a>) let users navigate between pages. Images (<img>) display pictures on the page. Both are essential HTML elements used in virtually every website. In this lesson you will add clickable links and display images using HTML.",
    docs: [
      { term: "<a href=\"...\">", desc: "Creates a hyperlink. The href attribute holds the destination URL." },
      { term: "<img src=\"...\">", desc: "Embeds an image. src sets the image URL. Always add alt text." },
      { term: "target=\"_blank\"", desc: "Opens the link in a new browser tab." },
      { term: "alt=\"...\"", desc: "Describes the image for screen readers and when image fails to load." },
      { term: "width / height", desc: "Sets the size of an image in pixels or percent." },
    ],
    hints: ["Always add alt text to every <img>", "Use target=\"_blank\" to open links in a new tab", "Images are self-closing — no </img> needed"],
    starter: {
      html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Links & Images</title>\n</head>\n<body>\n  <h1>Links & Images</h1>\n  <p>Visit <a href="https://nextsem.online" target="_blank">Nextsem Academy</a> to learn more!</p>\n  <br>\n  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500" alt="Coding on a laptop" width="100%">\n</body>\n</html>`,
      css: `body {\n  background: #0f172a;\n  color: #f8fafc;\n  font-family: sans-serif;\n  padding: 32px;\n}\na {\n  color: #38bdf8;\n  text-decoration: underline;\n}\nimg {\n  border-radius: 12px;\n  margin-top: 16px;\n  max-width: 100%;\n}`,
      js: `console.log("Links & Images lesson loaded!");`
    }
  },
  {
    id: 4,
    unit: "Unit 2: CSS Styling",
    title: "Introduction to CSS",
    type: "lesson",
    about: "CSS stands for Cascading Style Sheets. It controls the look and feel of your HTML — colors, fonts, spacing, and layouts. CSS rules follow a selector { property: value; } pattern. In this lesson you will apply your first styles to HTML elements.",
    docs: [
      { term: "selector { }", desc: "Targets an HTML element to style. Example: h1 { color: red; }" },
      { term: "color", desc: "Sets the text color. Accepts color names, hex (#ff0000), or rgb()." },
      { term: "background-color", desc: "Sets the background color of an element." },
      { term: "font-size", desc: "Sets the size of text. Use px, rem, or em units." },
      { term: "padding / margin", desc: "padding = inner spacing. margin = outer spacing." },
    ],
    hints: ["CSS rules go inside curly braces { }", "Use px for pixel values: font-size: 18px", "Margin adds space outside; padding adds space inside"],
    starter: {
      html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>CSS Intro</title>\n</head>\n<body>\n  <h1>Styled Heading</h1>\n  <p>This paragraph has custom styles applied!</p>\n  <button>Click Me</button>\n</body>\n</html>`,
      css: `body {\n  background-color: #0f172a;\n  font-family: 'Segoe UI', sans-serif;\n  padding: 40px;\n}\n\nh1 {\n  color: #f472b6;\n  font-size: 2.5rem;\n  margin-bottom: 16px;\n}\n\np {\n  color: #94a3b8;\n  font-size: 1.1rem;\n  line-height: 1.7;\n}\n\nbutton {\n  background-color: #6366f1;\n  color: white;\n  border: none;\n  padding: 12px 28px;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-top: 20px;\n}`,
      js: `console.log("CSS lesson loaded!");`
    }
  },
  {
    id: 5,
    unit: "Unit 2: CSS Styling",
    title: "CSS Colors & Backgrounds",
    type: "lesson",
    about: "Colors bring your webpage to life. CSS supports color names (red), hex codes (#ff4500), RGB values rgb(255,69,0), and HSL values. Backgrounds can be solid colors, gradients, or even images. Let's explore all the ways to add color!",
    docs: [
      { term: "color: red;", desc: "Named colors — CSS supports 140+ named colors." },
      { term: "color: #ff4500;", desc: "Hex color code — 6-digit hexadecimal color." },
      { term: "color: rgb(255,69,0);", desc: "RGB color — Red, Green, Blue values 0–255." },
      { term: "background: linear-gradient()", desc: "Creates a gradient background between two or more colors." },
      { term: "opacity", desc: "Sets element transparency from 0 (invisible) to 1 (opaque)." },
    ],
    hints: ["Try changing #38bdf8 to #f472b6 to change the color", "linear-gradient(135deg, #color1, #color2) creates a diagonal gradient", "Use opacity: 0.5 to make an element semi-transparent"],
    starter: {
      html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Colors!</title>\n</head>\n<body>\n  <div class="card">Named Color: Tomato</div>\n  <div class="card hex">Hex Color: #3b82f6</div>\n  <div class="card gradient">Gradient Background</div>\n</body>\n</html>`,
      css: `body {\n  background: #0f172a;\n  padding: 32px;\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.card {\n  padding: 24px;\n  border-radius: 12px;\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: white;\n  background-color: tomato;\n}\n\n.hex {\n  background-color: #3b82f6;\n}\n\n.gradient {\n  background: linear-gradient(135deg, #7c3aed, #ec4899);\n}`,
      js: `console.log("Colors lesson loaded!");`
    }
  },
  {
    id: 6,
    unit: "Unit 3: JavaScript Basics",
    title: "Your First JavaScript",
    type: "lesson",
    about: "JavaScript is the programming language of the web. It makes websites interactive — responding to clicks, updating content, and communicating with servers. In this lesson you will write your very first JavaScript and see it run live!",
    docs: [
      { term: "console.log()", desc: "Prints a message to the browser console. Great for debugging." },
      { term: "alert()", desc: "Shows a pop-up dialog with a message." },
      { term: "let / const", desc: "Declares variables. Use const for values that don't change, let for those that do." },
      { term: "// comment", desc: "A comment — notes for humans, ignored by the browser." },
      { term: "document.write()", desc: "Writes directly into the HTML document." },
    ],
    hints: ["Open the browser console (F12) to see console.log output", "Use const for values you won't change, let for variables", "Strings must be wrapped in quotes: 'Hello' or \"Hello\""],
    starter: {
      html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>JavaScript!</title>\n</head>\n<body>\n  <h1 id="title">Hello from JavaScript!</h1>\n  <p id="result">Click the button below</p>\n  <button onclick="greet()">Say Hello</button>\n</body>\n</html>`,
      css: `body {\n  background: #0f172a;\n  color: #f8fafc;\n  font-family: sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\nh1 { color: #38bdf8; }\n\np {\n  color: #94a3b8;\n  font-size: 1.1rem;\n  margin: 16px 0;\n}\n\nbutton {\n  background: #10b981;\n  color: white;\n  border: none;\n  padding: 14px 32px;\n  border-radius: 10px;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n}`,
      js: `// Your first JavaScript!\nconst name = "Nextsem Learner";\n\nfunction greet() {\n  const result = document.getElementById("result");\n  result.textContent = "Hello, " + name + "! 🎉";\n  result.style.color = "#10b981";\n  console.log("Button clicked! Hello " + name);\n}`
    }
  },
  {
    id: 7,
    unit: "Unit 3: JavaScript Basics",
    title: "DOM Manipulation",
    type: "lesson",
    about: "The DOM (Document Object Model) represents your HTML as a tree of objects that JavaScript can read and modify. Using DOM methods you can change text, update styles, create new elements, and respond to user events — all without reloading the page!",
    docs: [
      { term: "document.getElementById()", desc: "Selects an element by its id attribute." },
      { term: "document.querySelector()", desc: "Selects the first element matching a CSS selector." },
      { term: "element.textContent", desc: "Gets or sets the text content of an element." },
      { term: "element.style.property", desc: "Gets or sets an inline CSS style on an element." },
      { term: "element.classList.toggle()", desc: "Adds a class if absent, removes it if present." },
    ],
    hints: ["getElementById is the fastest way to select a single element", "element.style.color = '#ff0000' sets text to red", "Use classList.toggle('active') to switch between two visual states"],
    starter: {
      html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>DOM Manipulation</title>\n</head>\n<body>\n  <h1 id="title">DOM Manipulation</h1>\n  <p id="counter">Count: 0</p>\n  <button onclick="increment()">➕ Add</button>\n  <button onclick="reset()">🔄 Reset</button>\n  <button onclick="changeColor()">🎨 Random Color</button>\n</body>\n</html>`,
      css: `body {\n  background: #0f172a;\n  color: #f8fafc;\n  font-family: sans-serif;\n  padding: 40px;\n  text-align: center;\n}\n\nh1 { color: #38bdf8; font-size: 2rem; margin-bottom: 20px; }\n\n#counter {\n  font-size: 3rem;\n  font-weight: bold;\n  color: #10b981;\n  margin: 24px 0;\n}\n\nbutton {\n  background: #334155;\n  color: white;\n  border: 1px solid #475569;\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-size: 1rem;\n  cursor: pointer;\n  margin: 6px;\n  transition: all 0.2s;\n}\n\nbutton:hover { background: #475569; transform: scale(1.05); }`,
      js: `let count = 0;\nconst colors = ['#38bdf8','#10b981','#f472b6','#fbbf24','#a78bfa'];\n\nfunction increment() {\n  count++;\n  document.getElementById('counter').textContent = 'Count: ' + count;\n}\n\nfunction reset() {\n  count = 0;\n  const el = document.getElementById('counter');\n  el.textContent = 'Count: 0';\n  el.style.color = '#10b981';\n}\n\nfunction changeColor() {\n  const random = colors[Math.floor(Math.random() * colors.length)];\n  document.getElementById('counter').style.color = random;\n  console.log('Color changed to:', random);\n}`
    }
  },
  {
    id: 8,
    unit: "Unit 3: JavaScript Basics",
    title: "Challenge: Build a Card",
    type: "challenge",
    about: "Time to apply what you have learned! Your challenge is to build a styled profile card using HTML, CSS, and JavaScript. The card should display a name, title, and bio. Clicking a button should toggle a 'dark mode' class on the card. Try it yourself!",
    docs: [
      { term: "classList.toggle('class')", desc: "Switches a class on/off every time it is called." },
      { term: "box-shadow", desc: "Adds a shadow around an element: box-shadow: 0 4px 24px rgba(0,0,0,0.3);" },
      { term: "transition", desc: "Animates CSS property changes: transition: all 0.3s ease;" },
      { term: "border-radius", desc: "Rounds corners of an element: border-radius: 16px;" },
      { term: "display: flex", desc: "Enables flexbox layout for easy alignment and spacing." },
    ],
    hints: ["Use a <div class='card'> as the wrapper", "Add an id to the card so JavaScript can target it", "Try: card.classList.toggle('dark') on button click"],
    starter: {
      html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Profile Card Challenge</title>\n</head>\n<body>\n  <div class="card" id="card">\n    <div class="avatar">🧑‍💻</div>\n    <h2>Alex Johnson</h2>\n    <p class="role">Full-Stack Developer</p>\n    <p class="bio">Passionate about building beautiful, functional web apps with HTML, CSS, and JavaScript.</p>\n    <button onclick="toggleMode()">🌙 Toggle Dark Mode</button>\n  </div>\n</body>\n</html>`,
      css: `body {\n  background: #f0f4ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: 'Segoe UI', sans-serif;\n}\n\n.card {\n  background: white;\n  border-radius: 20px;\n  padding: 40px;\n  text-align: center;\n  max-width: 320px;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.12);\n  transition: all 0.3s ease;\n}\n\n.card.dark {\n  background: #1e293b;\n  color: white;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.5);\n}\n\n.avatar {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n\nh2 { margin: 0 0 6px; font-size: 1.5rem; }\n\n.role {\n  color: #6366f1;\n  font-weight: bold;\n  margin: 0 0 16px;\n}\n\n.bio {\n  color: #64748b;\n  font-size: 0.9rem;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n\n.card.dark .bio { color: #94a3b8; }\n\nbutton {\n  background: #6366f1;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: bold;\n  transition: all 0.2s;\n}\n\nbutton:hover { background: #4f46e5; transform: scale(1.05); }`,
      js: `function toggleMode() {\n  const card = document.getElementById('card');\n  card.classList.toggle('dark');\n  const btn = card.querySelector('button');\n  const isDark = card.classList.contains('dark');\n  btn.textContent = isDark ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode';\n  console.log('Mode:', isDark ? 'Dark' : 'Light');\n}`
    }
  },
];

// ── Main Component ────────────────────────────────────────────────────────────

export default function HtmlDemoClient() {
  const [lessonIdx, setLessonIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"about" | "docs" | "hints">("about");
  const [activeCode, setActiveCode] = useState<"html" | "css" | "js">("html");
  const [htmlCode, setHtmlCode] = useState(LESSONS[0].starter.html);
  const [cssCode, setCssCode] = useState(LESSONS[0].starter.css);
  const [jsCode, setJsCode] = useState(LESSONS[0].starter.js);
  const [iframeSrc, setIframeSrc] = useState("");
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const lesson = LESSONS[lessonIdx];

  // Compile and run on mount and when code changes
  const compile = (html: string, css: string, js: string) => {
    const srcDoc = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css}</style></head><body>${extractBody(html)}<script>try{${js}}catch(e){console.error(e.message)}<\/script></body></html>`;
    setIframeSrc(srcDoc);
  };

  const extractBody = (html: string) => {
    const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    return match ? match[1] : html;
  };

  useEffect(() => { compile(htmlCode, cssCode, jsCode); }, []);

  // Load lesson
  const loadLesson = (idx: number) => {
    const l = LESSONS[idx];
    setLessonIdx(idx);
    setHtmlCode(l.starter.html);
    setCssCode(l.starter.css);
    setJsCode(l.starter.js);
    setActiveTab("about");
    setActiveCode("html");
    compile(l.starter.html, l.starter.css, l.starter.js);
  };

  const runCode = () => {
    compile(htmlCode, cssCode, jsCode);
    setCompleted(prev => new Set([...prev, lessonIdx]));
  };

  const resetCode = () => {
    setHtmlCode(lesson.starter.html);
    setCssCode(lesson.starter.css);
    setJsCode(lesson.starter.js);
    compile(lesson.starter.html, lesson.starter.css, lesson.starter.js);
  };

  const copyCode = () => {
    const current = activeCode === "html" ? htmlCode : activeCode === "css" ? cssCode : jsCode;
    navigator.clipboard.writeText(current);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentCode = activeCode === "html" ? htmlCode : activeCode === "css" ? cssCode : jsCode;
  const setCurrentCode = (val: string) => {
    if (activeCode === "html") setHtmlCode(val);
    else if (activeCode === "css") setCssCode(val);
    else setJsCode(val);
  };

  const unitGroups = LESSONS.reduce((acc, l) => {
    if (!acc[l.unit]) acc[l.unit] = [];
    acc[l.unit].push(l);
    return acc;
  }, {} as Record<string, Lesson[]>);

  return (
    <div className="flex h-screen bg-[#0d1117] text-white font-sans overflow-hidden">

      {/* ── LEFT SIDEBAR ── */}
      <aside className={`${sidebarOpen ? "w-72" : "w-0 overflow-hidden"} transition-all duration-300 bg-[#161b22] border-r border-white/5 flex flex-col shrink-0`}>
        {/* Sidebar header */}
        <div className="p-4 border-b border-white/5 shrink-0">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white text-xs font-bold mb-3 transition-colors">
            <ArrowLeft size={14} />
            <span>Back to Nextsem</span>
          </Link>
          <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 mb-1">Computer Programming</p>
          <h2 className="text-sm font-black text-white leading-tight">HTML, CSS & JavaScript</h2>
          <p className="text-[10px] text-slate-500 mt-1">{LESSONS.length} lessons · Interactive</p>
        </div>

        {/* Lesson list */}
        <div className="flex-1 overflow-y-auto py-3">
          {Object.entries(unitGroups).map(([unit, lessons]) => (
            <div key={unit} className="mb-2">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 px-4 py-2">{unit}</p>
              {lessons.map((l) => {
                const idx = LESSONS.findIndex(x => x.id === l.id);
                const isActive = idx === lessonIdx;
                const isDone = completed.has(idx);
                return (
                  <button
                    key={l.id}
                    onClick={() => loadLesson(idx)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all ${isActive ? "bg-blue-600/20 border-l-2 border-blue-500" : "hover:bg-white/5 border-l-2 border-transparent"}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] ${isDone ? "bg-green-500/20 text-green-400" : isActive ? "bg-blue-500/20 text-blue-400" : "bg-slate-800 text-slate-500"}`}>
                      {isDone ? <CheckCircle2 size={12} /> : l.type === "challenge" ? <Star size={12} /> : <Play size={10} />}
                    </div>
                    <span className={`text-xs font-medium leading-tight ${isActive ? "text-white" : isDone ? "text-slate-300" : "text-slate-400"}`}>
                      {l.title}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="p-4 border-t border-white/5 shrink-0">
          <div className="flex justify-between text-[9px] text-slate-500 mb-1.5">
            <span>Progress</span>
            <span>{completed.size} / {LESSONS.length} completed</span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${(completed.size / LESSONS.length) * 100}%` }}
            />
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <header className="h-12 bg-[#161b22] border-b border-white/5 flex items-center px-4 gap-3 shrink-0">
          <button
            onClick={() => setSidebarOpen(o => !o)}
            className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            {sidebarOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
          <div className="flex-1">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              {lesson.unit} · Lesson {lessonIdx + 1} of {LESSONS.length}
            </p>
            <h1 className="text-sm font-black text-white leading-none">{lesson.title}</h1>
          </div>
          {lesson.type === "challenge" && (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-[9px] font-black text-yellow-400 uppercase">
              <Star size={10} /> Challenge
            </span>
          )}
          {completed.has(lessonIdx) && (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[9px] font-black text-green-400 uppercase">
              <CheckCircle2 size={10} /> Completed
            </span>
          )}
        </header>

        {/* Split: Editor + Preview */}
        <div className="flex-1 flex overflow-hidden">

          {/* ── CODE EDITOR PANEL ── */}
          <div className="w-1/2 flex flex-col border-r border-white/5 overflow-hidden">

            {/* Editor tab bar */}
            <div className="flex items-center justify-between px-3 bg-[#161b22] border-b border-white/5 shrink-0">
              <div className="flex">
                {(["html", "css", "js"] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveCode(tab)}
                    className={`px-4 py-2.5 text-[10px] font-black uppercase tracking-wider border-b-2 transition-all ${activeCode === tab ? (tab === "html" ? "border-orange-400 text-orange-400" : tab === "css" ? "border-blue-400 text-blue-400" : "border-yellow-400 text-yellow-400") : "border-transparent text-slate-500 hover:text-slate-300"}`}
                  >
                    {tab === "html" ? "🌐 HTML" : tab === "css" ? "🎨 CSS" : "⚡ JS"}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button onClick={copyCode} className="p-1.5 rounded-lg hover:bg-white/10 text-slate-500 hover:text-white transition-all" title="Copy code">
                  {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                </button>
                <button onClick={resetCode} className="p-1.5 rounded-lg hover:bg-white/10 text-slate-500 hover:text-white transition-all" title="Reset to starter">
                  <RefreshCw size={13} />
                </button>
                <button
                  onClick={runCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg font-black text-[10px] transition-all hover:scale-[1.02] active:scale-95 ml-1"
                >
                  <Play size={10} className="fill-white" />
                  RUN
                </button>
              </div>
            </div>

            {/* Monaco-style code editor (textarea + pre overlay) */}
            <div className="flex-1 relative overflow-hidden bg-[#0d1117] font-mono text-sm">
              <textarea
                value={currentCode}
                onChange={e => setCurrentCode(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Tab") {
                    e.preventDefault();
                    const start = e.currentTarget.selectionStart;
                    const end = e.currentTarget.selectionEnd;
                    const newVal = currentCode.substring(0, start) + "  " + currentCode.substring(end);
                    setCurrentCode(newVal);
                    setTimeout(() => { e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2; }, 0);
                  }
                }}
                spellCheck={false}
                autoCorrect="off"
                autoCapitalize="off"
                className="absolute inset-0 w-full h-full bg-transparent text-transparent caret-white resize-none outline-none p-4 z-10 leading-6 whitespace-pre overflow-auto"
                style={{ caretColor: "#38bdf8", fontSize: "13px", lineHeight: "1.6" }}
              />
              <pre
                className="absolute inset-0 w-full h-full pointer-events-none p-4 overflow-auto leading-6 whitespace-pre text-slate-300 select-none"
                style={{ fontSize: "13px", lineHeight: "1.6" }}
                aria-hidden
              >
                <code>{currentCode}</code>
              </pre>
            </div>
          </div>

          {/* ── LIVE PREVIEW PANEL ── */}
          <div className="w-1/2 flex flex-col overflow-hidden">
            {/* Preview header */}
            <div className="h-10 bg-[#161b22] border-b border-white/5 flex items-center px-4 gap-2 text-[10px] text-slate-500 shrink-0">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <div className="flex-1 bg-[#0d1117] border border-white/5 rounded-md px-3 py-0.5 font-mono text-center text-slate-400 text-[9px] select-all">
                preview.sandbox.local
              </div>
            </div>
            {/* iframe */}
            <div className="flex-1 bg-white overflow-hidden">
              <iframe
                ref={iframeRef}
                title={`${lesson.title} preview`}
                srcDoc={iframeSrc}
                sandbox="allow-scripts"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>

        {/* ── BOTTOM TABS PANEL ── */}
        <div className="h-52 border-t border-white/5 bg-[#161b22] flex flex-col shrink-0">
          {/* Tab buttons */}
          <div className="flex items-center gap-0 border-b border-white/5 px-4 shrink-0">
            {[
              { key: "about", label: "About", icon: <BookOpen size={12} /> },
              { key: "docs", label: "Documentation", icon: <FileText size={12} /> },
              { key: "hints", label: "Hints", icon: <Lightbulb size={12} /> },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-[10px] font-black uppercase tracking-wider border-b-2 transition-all ${activeTab === tab.key ? "border-blue-500 text-blue-400" : "border-transparent text-slate-500 hover:text-slate-300"}`}
              >
                {tab.icon}{tab.label}
              </button>
            ))}

            {/* Lesson navigation — right side */}
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => lessonIdx > 0 && loadLesson(lessonIdx - 1)}
                disabled={lessonIdx === 0}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-black text-slate-400 hover:text-white hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={13} /> Prev
              </button>
              <button
                onClick={() => { if (lessonIdx < LESSONS.length - 1) loadLesson(lessonIdx + 1); setCompleted(p => new Set([...p, lessonIdx])); }}
                disabled={lessonIdx === LESSONS.length - 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-black bg-blue-600 hover:bg-blue-500 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next <ChevronRight size={13} />
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-y-auto px-5 py-3">
            {activeTab === "about" && (
              <p className="text-sm text-slate-300 leading-relaxed">{lesson.about}</p>
            )}

            {activeTab === "docs" && (
              <div className="space-y-2">
                {lesson.docs.map((d, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <code className="text-[10px] font-mono bg-slate-900 text-emerald-400 px-2 py-0.5 rounded-md shrink-0 border border-white/5 whitespace-nowrap">{d.term}</code>
                    <span className="text-xs text-slate-400 leading-relaxed">{d.desc}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "hints" && (
              <div className="space-y-2">
                {lesson.hints.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-yellow-400 text-sm shrink-0">💡</span>
                    <span className="text-xs text-slate-300 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
