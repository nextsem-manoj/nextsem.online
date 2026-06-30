"use client";

import React, { useState, useEffect } from 'react';
import { Play, Square, ChevronDown, ChevronUp, Edit2, RotateCcw, Eye } from 'lucide-react';

interface InteractivePreProps {
  children: React.ReactNode;
  [key: string]: any;
}

const InteractivePre = ({ children, ...props }: InteractivePreProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [codeText, setCodeText] = useState("");
  const [originalCode, setOriginalCode] = useState("");

  // Extract raw code string and language from children
  const childrenArray = React.Children.toArray(children);
  const codeElement = childrenArray[0] as any;
  
  let language = "";

  if (codeElement && codeElement.props) {
    const raw = codeElement.props.children || "";
    const className = codeElement.props.className || "";
    language = className.replace("language-", "").toLowerCase();
  } else if (typeof children === 'string') {
    language = "";
  }

  // Initialize codeText once component mounts and children are resolved
  useEffect(() => {
    let resolvedCode = "";
    if (codeElement && codeElement.props) {
      resolvedCode = codeElement.props.children || "";
    } else if (typeof children === 'string') {
      resolvedCode = children;
    }
    setCodeText(resolvedCode.trim());
    setOriginalCode(resolvedCode.trim());
  }, [children, codeElement]);

  // Determine if the snippet is runnable (HTML, CSS, JS)
  const isRunnable = 
    language === 'html' || 
    language === 'css' || 
    language === 'javascript' || 
    language === 'js' || 
    originalCode.trim().startsWith('<') ||
    originalCode.includes('function') ||
    originalCode.includes('const');

  const toggleRun = () => {
    if (!isRunning) {
      setIsRunning(true);
      setIsOpen(true);
    } else {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCodeText(originalCode);
  };

  // Compile final iframe document based on the current edited codeText
  const getIframeSrcDoc = () => {
    const trimmed = codeText.trim();
    
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
              body { font-family: system-ui, -apple-system, sans-serif; padding: 16px; background: #060c18; color: #f8fafc; }
              ${trimmed}
            </style>
          </head>
          <body>
            <h3 style="margin-top:0">CSS Styles Loaded</h3>
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
              body { font-family: system-ui, -apple-system, sans-serif; padding: 16px; background: #060c18; color: #f8fafc; }
              #console { background: #0b1329; border: 1px solid #1e293b; border-radius: 8px; padding: 12px; font-family: monospace; font-size: 13px; min-height: 80px; color: #38bdf8; }
            </style>
          </head>
          <body>
            <h3 style="margin-top:0">JavaScript Console Output:</h3>
            <div id="console"></div>
            <script>
              const con = document.getElementById('console');
              console.log = (...args) => {
                con.innerHTML += args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ') + '<br>';
              };
              try {
                ${trimmed}
              } catch(e) {
                con.innerHTML += '<span style="color:#ef4444">Error: ' + e.message + '</span>';
              }
            </script>
          </body>
        </html>
      `;
    }

    // Standard HTML snippets
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
              background: #060c18; 
              color: #f8fafc; 
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
      {/* Code Block / Textarea Editor Container */}
      {isEditing ? (
        <textarea
          value={codeText}
          onChange={(e) => setCodeText(e.target.value)}
          rows={Math.max(5, codeText.split('\n').length + 1)}
          className="w-full font-mono text-xs md:text-sm p-4 bg-[#090f1e] text-slate-100 border border-blue-500/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-inner resize-y leading-relaxed"
          placeholder="Edit code snippet..."
        />
      ) : (
        <pre {...props} className="overflow-x-auto rounded-xl border border-gray-200/50 dark:border-slate-800/80 shadow-sm relative">
          {/* Render edited code text if edited, otherwise fallback to standard markdown children highlighting */}
          {codeText !== originalCode ? (
            <code className={codeElement?.props?.className || ""}>
              {codeText}
            </code>
          ) : (
            children
          )}
        </pre>
      )}

      {/* Floating Action Bar */}
      {isRunnable && (
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 opacity-0 group-hover/code:opacity-100 focus-within:opacity-100 transition-opacity z-10">
          {/* Edit / View Code Toggle Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-black bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/50 shadow-sm transition-all active:scale-95"
            title={isEditing ? "View rendered code format" : "Edit this code snippet"}
          >
            {isEditing ? (
              <>
                <Eye size={12} /> View Code
              </>
            ) : (
              <>
                <Edit2 size={12} /> Edit Code
              </>
            )}
          </button>

          {/* Reset Code Button (only shows when content differs from original) */}
          {codeText !== originalCode && (
            <button
              onClick={handleReset}
              className="flex items-center justify-center p-1.5 rounded-lg text-xs font-black bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/50 shadow-sm transition-all active:scale-95"
              title="Reset code to original version"
            >
              <RotateCcw size={12} />
            </button>
          )}

          {/* Run / Stop Code Button */}
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
                className="w-full min-h-[160px] max-h-[400px] border border-gray-200/80 dark:border-slate-800/80 bg-slate-950 rounded-lg shadow-inner resize-y overflow-auto"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractivePre;
