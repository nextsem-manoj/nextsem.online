"use client";

import React, { useState } from "react";
import {
  diagnoseCommand,
  getCommandSuggestions,
  SageDiagnosis,
} from "@/lib/aiCompilerSage";
import WindowsIcon from "@/components/WindowsIcon";
import {
  Bot,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Info,
  CornerDownLeft,
  Terminal,
  Zap,
  Check,
  Copy,
} from "lucide-react";

interface AiCompilerSageWidgetProps {
  initialCommand?: string;
  expectedCommand?: string;
  onApplyFix?: (fixedCmd: string) => void;
  className?: string;
}

export default function AiCompilerSageWidget({
  initialCommand = "mkdr my-project",
  expectedCommand,
  onApplyFix,
  className = "",
}: AiCompilerSageWidgetProps) {
  const [testInput, setTestInput] = useState(initialCommand);
  const [copied, setCopied] = useState(false);

  const diagnosis: SageDiagnosis = diagnoseCommand(testInput, expectedCommand);
  const suggestions = getCommandSuggestions(testInput);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSeverityBadge = (severity: SageDiagnosis["severity"]) => {
    switch (severity) {
      case "success":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-[#04AA6D] text-[#04AA6D] text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 size={13} />
            <span>Optimal Syntax</span>
          </span>
        );
      case "warning":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle size={13} />
            <span>Platform Mismatch</span>
          </span>
        );
      case "error":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-500 text-rose-300 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle size={13} />
            <span>Syntax Error / Typo</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Info size={13} />
            <span>AI Sage Ready</span>
          </span>
        );
    }
  };

  return (
    <div
      className={`bg-[#17181c] border-2 border-slate-800 hover:border-[#04AA6D]/60 rounded-3xl p-5 sm:p-7 shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#04AA6D]/20 border border-[#04AA6D] flex items-center justify-center text-[#04AA6D] shadow-lg shadow-[#04AA6D]/10">
            <Bot size={26} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>AI Compiler Sage CLI</span>
                <span className="px-2 py-0.5 rounded-full bg-[#04AA6D]/20 text-[#04AA6D] text-[10px] font-black uppercase tracking-wider border border-[#04AA6D]/40">
                  v3.1 Live
                </span>
              </h3>
            </div>
            <p className="text-xs text-slate-300 font-normal mt-0.5">
              Real-time terminal error diagnostics & intelligent 🪟 Windows 11 syntax suggestions
            </p>
          </div>
        </div>

        <div>{getSeverityBadge(diagnosis.severity)}</div>
      </div>

      {/* ── INTERACTIVE TEST INPUT BAR ── */}
      <div className="pt-5 space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-white flex items-center gap-2">
            <Terminal size={14} className="text-[#04AA6D]" />
            <span>Test Any Command or Typo Live:</span>
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-[#04AA6D] font-mono font-bold text-sm select-none">
              &gt;
            </span>
            <input
              type="text"
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              placeholder="e.g. ls, clear, mkdr my-app, cd.."
              className="w-full bg-[#0d0e12] border border-slate-700 focus:border-[#04AA6D] focus:ring-1 focus:ring-[#04AA6D] rounded-xl pl-8 pr-4 py-2.5 text-white font-mono text-xs sm:text-sm outline-none transition-all placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* ── AI SAGE DIAGNOSTIC OUTPUT CARD ── */}
        <div className="bg-[#121316] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
              <Lightbulb size={18} />
            </div>
            <div className="space-y-1 flex-1">
              <div className="text-xs font-black uppercase tracking-wider text-amber-300">
                Sage Diagnostic Analysis:
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                {diagnosis.explanation}
              </p>
              {diagnosis.windowsNote && (
                <div className="pt-2 flex items-start gap-2 text-[11px] text-slate-400">
                  <WindowsIcon className="w-3.5 h-3.5 text-[#04AA6D] shrink-0 mt-0.5" />
                  <span>{diagnosis.windowsNote}</span>
                </div>
              )}
            </div>
          </div>

          {/* Corrected Syntax Recommendation */}
          {diagnosis.suggestedCmd && (
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0a0a0c] p-3.5 rounded-xl border border-slate-800">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Recommended Command:
                </span>
                <div className="font-mono text-sm sm:text-base font-extrabold text-[#04AA6D] tracking-wide">
                  {diagnosis.suggestedCmd}
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                {onApplyFix && (
                  <button
                    onClick={() => onApplyFix(diagnosis.suggestedCmd)}
                    className="px-3.5 py-2 rounded-lg bg-[#04AA6D] hover:bg-[#039861] text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <CornerDownLeft size={13} />
                    <span>Apply Fix</span>
                  </button>
                )}

                <button
                  onClick={() => handleCopy(diagnosis.suggestedCmd)}
                  className="px-3 py-2 rounded-lg bg-[#1e2029] hover:bg-slate-800 text-white border border-slate-700 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy command"
                >
                  {copied ? <Check size={13} className="text-[#04AA6D]" /> : <Copy size={13} />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── POPULAR CLI COMMAND AUTOCOMPLETE HINTS ── */}
        <div className="space-y-2 pt-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Zap size={12} className="text-amber-400" />
            <span>Click to Test Common Mistake Scenarios:</span>
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "ls (Linux vs Win)", cmd: "ls" },
              { label: "clear (Linux vs Win)", cmd: "clear" },
              { label: "mkdr typo", cmd: "mkdr test-app" },
              { label: "cd.. missing space", cmd: "cd.." },
              { label: "code. without space", cmd: "code." },
              { label: "touch index.html", cmd: "touch index.html" },
            ].map((item) => (
              <button
                key={item.cmd}
                onClick={() => setTestInput(item.cmd)}
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-[#04AA6D]/50 text-xs font-mono transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
