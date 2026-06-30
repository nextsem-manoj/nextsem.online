"use client";

import React, { useState, useEffect } from 'react';
import { Play, Square, ChevronDown, ChevronUp, Edit2, RotateCcw, Eye } from 'lucide-react';

interface InteractivePreProps {
  children: React.ReactNode;
  [key: string]: any;
}

// Recursive helper to safely extract text content from any React children structure
const getTextFromChildren = (node: any): string => {
  if (!node) return "";
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(getTextFromChildren).join("");
  }
  if (node.props && node.props.children !== undefined) {
    return getTextFromChildren(node.props.children);
  }
  return "";
};

const InteractivePre = ({ children, ...props }: InteractivePreProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [codeText, setCodeText] = useState("");
  const [originalCode, setOriginalCode] = useState("");
  const [iframeHeight, setIframeHeight] = useState(160);

  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = e.currentTarget;
    if (iframe && iframe.contentWindow) {
      setTimeout(() => {
        try {
          const body = iframe.contentWindow.document.body;
          const html = iframe.contentWindow.document.documentElement;
          const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
          );
          setIframeHeight(height + 16);
        } catch (err) {
          console.warn("Could not auto-adjust iframe height", err);
        }
      }, 100);
    }
  };

  // Extract raw code string and language from children
  const childrenArray = React.Children.toArray(children);
  const codeElement = childrenArray[0] as any;
  
  let language = "";
  if (codeElement && codeElement.props) {
    const className = codeElement.props.className || "";
    language = className.replace("language-", "").toLowerCase();
  }

  // Initialize codeText recursively once components mount or change
  useEffect(() => {
    let resolvedCode = "";
    if (codeElement && codeElement.props) {
      resolvedCode = getTextFromChildren(codeElement.props.children);
    } else {
      resolvedCode = getTextFromChildren(children);
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
    language === 'jsx' ||
    language === 'tsx' ||
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
    
    const globalStyles = `
      <style>
        body { 
          font-family: system-ui, -apple-system, sans-serif; 
          padding: 16px; 
          margin: 0;
          background: #060c18 !important; 
          color: #f8fafc !important; 
        }
        h1, h2, h3, h4, h5, h6, p, span, li, label, td, th {
          color: #f8fafc !important;
        }
        /* Style images beautifully */
        img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
      </style>
      <script>
        document.addEventListener('error', function(e) {
          if (e.target.tagName === 'IMG') {
            e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400';
          }
        }, true);
      </script>
    `;

    // If it's already a full HTML page
    if (trimmed.toLowerCase().includes('<html')) {
      if (trimmed.toLowerCase().includes('</head>')) {
        return trimmed.replace(/<\/head>/i, `${globalStyles}</head>`);
      }
      return trimmed + globalStyles;
    }

    // Wrap CSS code blocks in style tags
    if (language === 'css') {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            ${globalStyles}
            <style>
              ${trimmed}
            </style>
          </head>
          <body>
            <div class="sandbox-wrapper" style="padding: 16px; border: 1px solid #1e293b; border-radius: 12px; background: #0b1329; margin-bottom: 16px;">
              <h1 id="main-heading" style="font-size: 26px; font-weight: 900; color: #f8fafc; margin: 0 0 8px 0; transition: all 0.3s;">Demo Web Heading</h1>
              <p id="sub-text" style="font-size: 14px; color: #94a3b8; margin: 0 0 16px 0;">This is a live sandbox mock document. Modify styling selectors or trigger events via JavaScript.</p>
              <button id="submit-btn" style="padding: 10px 20px; background: #3b82f6; border: none; border-radius: 8px; color: white; font-weight: 700; cursor: pointer; transition: all 0.2s; outline: none;">Interact Button (#submit-btn)</button>
              <div class="box" style="margin-top: 16px; padding: 20px; border: 2px dashed #334155; border-radius: 10px; text-align: center; color: #94a3b8; font-weight: 600;">
                Sandbox Block (.box)
              </div>
            </div>
            
            <hr style="border-color: #1e293b; margin: 16px 0;">
            <h3 style="margin-top:0">CSS Sandbox Output</h3>
            <p style="font-size: 13px; color: #64748b;">Style the elements above by targeting tags (like <code>h1</code>, <code>button</code>) or classes (<code>.box</code>) in your CSS editor.</p>
          </body>
        </html>
      `;
    }

    // Wrap JS/React code blocks in script tags
    if (language === 'javascript' || language === 'js' || language === 'jsx' || language === 'tsx') {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            ${globalStyles}
            <style>
              #console { background: #0b1329; border: 1px solid #1e293b; border-radius: 8px; padding: 12px; font-family: monospace; font-size: 13px; min-height: 50px; color: #38bdf8; overflow-x: auto; }
            </style>
          </head>
          <body>
            <div class="sandbox-wrapper" style="padding: 16px; border: 1px solid #1e293b; border-radius: 12px; background: #0b1329; margin-bottom: 16px;">
              <h1 id="main-heading" style="font-size: 26px; font-weight: 900; color: #f8fafc; margin: 0 0 8px 0; transition: all 0.3s;">Demo Web Heading</h1>
              <p id="sub-text" style="font-size: 14px; color: #94a3b8; margin: 0 0 16px 0;">This is a live sandbox mock document. Modify styling selectors or trigger events via JavaScript.</p>
              <button id="submit-btn" style="padding: 10px 20px; background: #3b82f6; border: none; border-radius: 8px; color: white; font-weight: 700; cursor: pointer; transition: all 0.2s; outline: none;">Interact Button (#submit-btn)</button>
              <div class="box" style="margin-top: 16px; padding: 20px; border: 2px dashed #334155; border-radius: 10px; text-align: center; color: #94a3b8; font-weight: 600;">
                Sandbox Block (.box)
              </div>
            </div>
            
            <hr style="border-color: #1e293b; margin: 16px 0;">
            <h3 style="margin-top:0; font-size: 14px; text-transform: uppercase; color: #64748b;">JavaScript Console Output:</h3>
            <div id="console"></div>
            <script>
              const con = document.getElementById('console');
              console.log = (...args) => {
                con.innerHTML += args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ') + '<br>';
              };
              window.alert = (msg) => {
                con.innerHTML += '<span style="color:#10b981; font-weight:bold;">[Alert] ' + msg + '</span><br>';
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
          ${globalStyles}
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
          {codeText !== originalCode ? (
            <code className={codeElement?.props?.className || ""}>
              {codeText}
            </code>
          ) : (
            children
          )}
        </pre>
      )}

      {/* Floating Action Bar - Available on ALL code blocks for editing */}
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

        {/* Run / Stop Code Button - Runs only for runnable snippets */}
        {isRunnable && (
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
        )}
      </div>

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
                onLoad={handleIframeLoad}
                style={{ height: iframeHeight }}
                className="w-full border border-gray-200/80 dark:border-slate-800/80 bg-slate-950 rounded-lg shadow-inner overflow-hidden transition-all duration-200"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractivePre;
