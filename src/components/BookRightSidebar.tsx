"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Key, Send, Award, Zap, BookOpen, ChevronRight, X } from 'lucide-react';
import { askGemini } from '@/lib/gemini';
import { getSemmyResponses, querySemmy } from '@/data/semmyAiData';

interface BookRightSidebarProps {
  currentChapterId: string;
  currentChapterTitle: string;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'semmy';
  text: string;
}

export default function BookRightSidebar({ currentChapterId, currentChapterTitle }: BookRightSidebarProps) {
  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [keyValue, setKeyValue] = useState('');
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const kb = getSemmyResponses();

  // Load API Key & greeting
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const key = localStorage.getItem('nextsem_gemini_api_key') || '';
      setGeminiApiKey(key);
      setKeyValue(key);
    }
    setMessages([
      { 
        id: 'init', 
        sender: 'semmy', 
        text: `Hi! I'm Semmy AI 🤖, your companion for "${currentChapterTitle}". Ask me any questions or help clarify concepts from this lesson!` 
      }
    ]);
  }, [currentChapterId, currentChapterTitle]);

  // Sync API Key updates
  useEffect(() => {
    const handleApiKeyUpdate = () => {
      const key = localStorage.getItem('nextsem_gemini_api_key') || '';
      setGeminiApiKey(key);
      setKeyValue(key);
    };
    window.addEventListener('nextsem_api_key_updated', handleApiKeyUpdate);
    window.addEventListener('storage', handleApiKeyUpdate);
    return () => {
      window.removeEventListener('nextsem_api_key_updated', handleApiKeyUpdate);
      window.removeEventListener('storage', handleApiKeyUpdate);
    };
  }, []);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSaveKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      if (keyValue.trim()) {
        localStorage.setItem('nextsem_gemini_api_key', keyValue.trim());
      } else {
        localStorage.removeItem('nextsem_gemini_api_key');
      }
      window.dispatchEvent(new Event('nextsem_api_key_updated'));
      setShowKeyInput(false);
    }
  };

  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(async () => {
      // 1. Try built-in knowledge base
      const localResponse = querySemmy(query, kb);
      if (localResponse) {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          sender: 'semmy',
          text: `**${localResponse.title}**\n\n${localResponse.summary}`
        }]);
        return;
      }

      // 2. Try Gemini API
      const apiKey = geminiApiKey || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (apiKey) {
        try {
          const replyText = await askGemini(query, apiKey);
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: (Date.now() + 1).toString(),
            sender: 'semmy',
            text: replyText
          }]);
          return;
        } catch (err) {
          console.error("Gemini failed in sidebar", err);
        }
      }

      // 3. Fallback
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'semmy',
        text: `I couldn't find a direct answer to "${query}" in my local database. Configure a custom Gemini Key in settings to enable full internet searches!`
      }]);
    }, 800);
  };

  return (
    <aside className="hidden lg:flex w-80 flex-col border-l border-slate-850 bg-[#070b18]/45 backdrop-blur-md p-4 h-screen sticky top-0 shrink-0 justify-between z-20 select-none overflow-hidden">
      
      {/* Scrollable Container for Top Cards */}
      <div className="flex-1 flex flex-col min-h-0 overflow-y-auto space-y-4 pr-1 pb-4 scrollbar-thin">
        
        {/* ── CARD 1: STUDENT LEVEL & PROGRESS ── */}
        <div className="bg-[#0b101c]/90 border border-slate-800/80 rounded-2xl p-4 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full filter blur-xl pointer-events-none" />
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] font-black uppercase text-indigo-400 tracking-widest flex items-center gap-1">
              <Zap size={10} className="text-amber-500" />
              Developer Profile
            </span>
            <span className="text-[10px] font-bold text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/25 px-2 py-0.5 rounded-full">
              ⚡ 5 Days Streak
            </span>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-lg font-black text-white">Level 4</span>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Mastery</span>
          </div>

          <div className="mt-2.5">
            <div className="flex justify-between items-center text-[8px] font-black text-slate-400 mb-1">
              <span>PROGRESS TO LEVEL 5</span>
              <span>1,280 / 2,000 XP</span>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
              <div className="bg-indigo-500 h-full rounded-full w-[64%]" />
            </div>
          </div>
        </div>

        {/* ── CARD 2: LESSON MILESTONES ── */}
        <div className="bg-[#0b101c]/90 border border-slate-800/80 rounded-2xl p-4 text-left">
          <h3 className="text-[9px] font-black uppercase text-white tracking-widest mb-3 flex items-center gap-1.5 border-b border-white/5 pb-2">
            <BookOpen size={11} className="text-indigo-400" />
            Chapter Objectives
          </h3>

          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-[10px]">
              <span className="shrink-0 text-emerald-400 font-bold">✔</span>
              <span className="text-slate-200">Read Chapter Slides</span>
            </li>
            <li className="flex items-start gap-2 text-[10px]">
              <span className="shrink-0 text-slate-650 font-bold">☐</span>
              <span className="text-slate-400">Complete Practice Assignments</span>
            </li>
            <li className="flex items-start gap-2 text-[10px]">
              <span className="shrink-0 text-slate-650 font-bold">☐</span>
              <span className="text-slate-400">Answer Lesson Quizzes</span>
            </li>
          </ul>
        </div>

        {/* ── CARD 3: SEMMY AI COMPANION ── */}
        <div className="bg-[#0b101c]/90 border border-slate-800/80 rounded-2xl flex-1 flex flex-col overflow-hidden text-left">
          <div className="px-4 py-3 bg-[#0d1222] border-b border-white/5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <Sparkles size={12} className="text-indigo-400" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white">Semmy AI Helper</span>
            </div>
            
            <button 
              onClick={() => setShowKeyInput(!showKeyInput)}
              className={`p-1 hover:bg-slate-900 rounded transition-colors ${showKeyInput ? 'text-indigo-400' : 'text-slate-400'}`}
              title="Configure Gemini API Key"
            >
              <Key size={11} />
            </button>
          </div>

          {/* Key configuration overlay */}
          {showKeyInput ? (
            <form onSubmit={handleSaveKey} className="p-3 bg-[#0c0e18] border-b border-white/5 space-y-2.5 animate-in slide-in-from-top-2 duration-150 shrink-0">
              <div>
                <span className="text-[8px] font-black text-indigo-400 uppercase tracking-wider block mb-1">Set Gemini Key</span>
                <input 
                  type="password"
                  value={keyValue}
                  onChange={(e) => setKeyValue(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full bg-[#05060b] border border-white/5 focus:border-indigo-500/30 outline-none rounded-xl text-[9px] px-2 py-1.5 caret-indigo-400 text-white font-mono"
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button 
                  type="button" 
                  onClick={() => setShowKeyInput(false)}
                  className="px-2 py-1 border border-slate-800 text-[8px] font-black uppercase tracking-wider text-slate-400 rounded-lg hover:bg-slate-900"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-2 py-1 bg-indigo-600 text-[8px] font-black uppercase tracking-wider text-white rounded-lg hover:bg-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
          ) : null}

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2.5 text-[10px] min-h-[140px] max-h-[300px]">
            {messages.map(msg => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[90%] rounded-xl px-2.5 py-1.5 leading-normal whitespace-pre-wrap ${
                  msg.sender === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-[#12121c] border border-white/5 text-slate-300 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start">
                <div className="bg-[#12121c] border border-white/5 text-slate-500 rounded-xl rounded-bl-none px-2.5 py-1.5 flex items-center gap-0.5">
                  <span className="animate-bounce">⬤</span>
                  <span className="animate-bounce" style={{ animationDelay: '150ms' }}>⬤</span>
                  <span className="animate-bounce" style={{ animationDelay: '300ms' }}>⬤</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendChat} className="p-2.5 border-t border-white/5 bg-[#090b14]/50 flex gap-2 shrink-0">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Semmy a question..."
              className="flex-1 bg-[#05060b] border border-white/5 focus:border-indigo-500/30 outline-none rounded-xl text-[9px] px-2.5 py-2 caret-indigo-400 text-white"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="p-1.5 bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 text-white rounded-xl transition-all cursor-pointer shrink-0 disabled:opacity-40"
            >
              <Send size={10} />
            </button>
          </form>

        </div>

      </div>

    </aside>
  );
}
