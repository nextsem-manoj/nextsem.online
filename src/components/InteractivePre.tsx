"use client";

import React, { useState } from 'react';
import { Play, Square, ChevronDown, ChevronUp } from 'lucide-react';

interface InteractivePreProps {
  children: React.ReactNode;
  [key: string]: any;
}

const InteractivePre = ({ children, ...props }: InteractivePreProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Extract raw code string and language from children
  const childrenArray = React.Children.toArray(children);
  const codeElement = childrenArray[0] as any;
  
  let rawCode = "";
  let language = "";

  if (codeElement && codeElement.props) {
    rawCode = codeElement.props.children || "";
    const className = codeElement.props.className || "";
    language = className.replace("language-", "").toLowerCase();
  } else if (typeof children === 'string') {
    rawCode = children;
  }

  // Determine if the snippet is runnable (HTML, CSS, JS)
  const isRunnable = 
    language === 'html' || 
    language === 'css' || 
    language === 'javascript' || 
    language === 'js' || 
    rawCode.trim().startsWith('<') ||
    rawCode.includes('function') ||
    rawCode.includes('const');

  const toggleRun = () => {
    if (!isRunning) {
      setIsRunning(true);
      setIsOpen(true);
    } else {
      setIsRunning(false);
    }
  };

  // Compile final iframe document
  const getIframeSrcDoc = () => {
    const trimmed = rawCode.trim();
    
    // If it's already a full HTML page
    if (trimmed.toLowerCase().includes('<html')) {
      return trimmed;
    }

    // Wrap CSS code blocks in style tags
    if (language === 'css') {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; padding: 16px; background: white; color: black; }
              ${trimmed}
            </style>
          </head>
          <body>
            <h3>CSS Styles Loaded</h3>
            <p>Modify elements or view styles in action.</p>
            <div class="box">Styled Box</div>
          </body>
        </html>
      `;
    }

    // Wrap JS code blocks in script tags
    if (language === 'javascript' || language === 'js') {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; padding: 16px; background: white; color: black; }
              #console { background: #f4f4f5; border: 1px solid #e4e4e7; border-radius: 8px; padding: 12px; font-family: monospace; font-size: 13px; min-height: 80px; }
            </style>
          </head>
          <body>
            <h3>JavaScript Console Output:</h3>
            <div id="console"></div>
            <script>
              const con = document.getElementById('console');
              console.log = (...args) => {
                con.innerHTML += args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ') + '<br>';
              };
              try {
                ${trimmed}
              } catch(e) {
                con.innerHTML += '<span style="color:red">Error: ' + e.message + '</span>';
              }
            </script>
          </body>
        </html>
      `;
    }

    // Standard HTML snippets (inject standard Tailwind CSS CDN for rich looks if they use Tailwind in example code!)
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              padding: 16px; 
              margin: 0;
              background: white; 
              color: black; 
            }
          </style>
        </head>
        <body>
          ${trimmed}
        </body>
      </html>
    `;
  };

  return (
    <div className="relative my-6 group/code">
      {/* Code Block Container */}
      <pre {...props} className="overflow-x-auto rounded-xl border border-gray-200/50 dark:border-slate-800/80 shadow-sm">
        {children}
      </pre>

      {/* Floating Action Bar */}
      {isRunnable && (
        <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-0 group-hover/code:opacity-100 focus-within:opacity-100 transition-opacity z-10">
          <button
            onClick={toggleRun}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black shadow-sm transition-all active:scale-95 ${
              isRunning
                ? "bg-rose-500 hover:bg-rose-400 text-white"
                : "bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white"
            }`}
          >
            {isRunning ? (
              <>
                <Square size={12} /> Stop Code
              </>
            ) : (
              <>
                <Play size={12} /> Run Code
              </>
            )}
          </button>
        </div>
      )}

      {/* Collapsible Live Preview Window */}
      {isRunning && (
        <div className="mt-2.5 border border-blue-100 dark:border-slate-800 rounded-xl overflow-hidden shadow-md animate-in slide-in-from-top duration-300">
          {/* Header */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-2 bg-blue-50/50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-slate-900 border-b border-blue-100 dark:border-slate-800 text-xs font-black text-blue-600 dark:text-blue-400 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              🚀 Live Interactive Sandbox Output
            </span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Collapsible Sandbox Frame */}
          {isOpen && (
            <div className="p-3 bg-gray-50 dark:bg-slate-950">
              <iframe
                title="Code block live output playground"
                srcDoc={getIframeSrcDoc()}
                sandbox="allow-scripts"
                className="w-full min-h-[160px] max-h-[400px] border border-gray-200/80 dark:border-slate-800/80 bg-white rounded-lg shadow-inner resize-y overflow-auto"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractivePre;
