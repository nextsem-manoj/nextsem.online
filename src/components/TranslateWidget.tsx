"use client";

import React, { useEffect, useState } from 'react';
import { Languages, X, Check } from 'lucide-react';

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi (हिंदी)', flag: '🇮🇳' },
  { code: 'hi-trans', label: 'Hinglish (Latin Hindi)', flag: '🇮🇳' },
  { code: 'es', label: 'Spanish (Español)', flag: '🇪🇸' },
  { code: 'fr', label: 'French (Français)', flag: '🇫🇷' },
  { code: 'de', label: 'German (Deutsch)', flag: '🇩🇪' },
];

const vowels: Record<string, string> = {
  'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo', 'ऋ': 'ri', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
  'ा': 'a', 'ि': 'i', 'ी': 'ee', 'ु': 'u', 'ू': 'oo', 'ृ': 'ri', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au',
  'ं': 'n', 'ः': 'h', 'ँ': 'n', 'ॉ': 'o'
};

const consonants: Record<string, string> = {
  'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'n',
  'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ञ': 'n',
  'ट': 't', 'ठ': 'th', 'ड': 'd', 'ढ': 'dh', 'ण': 'n',
  'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
  'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
  'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v', 'श': 'sh', 'ष': 'sh', 'स': 's', 'ह': 'h',
  'क्ष': 'ksh', 'त्र': 'tr', 'ज्ञ': 'gy',
  'क़': 'q', 'ख़': 'kh', 'ग़': 'g', 'ज़': 'z', 'ड़': 'd', 'ढ़': 'dh', 'फ़': 'f'
};

export const transliterateDevnagari = (text: string): string => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (consonants[char]) {
      const nextChar = text[i + 1];
      if (nextChar === '्') {
        result += consonants[char];
        i++; // skip halant
      } else if (vowels[nextChar]) {
        result += consonants[char] + vowels[nextChar];
        i++; // skip vowel
      } else {
        const isEndOfWord = !nextChar || nextChar === ' ' || /[\s,.\-!?"'():]/.test(nextChar);
        result += consonants[char] + (isEndOfWord ? '' : 'a');
      }
    } else if (vowels[char]) {
      result += vowels[char];
    } else {
      result += char;
    }
  }
  // Clean up double vowels/edge cases for natural reading
  return result
    .replace(/aa+/g, 'aa')
    .replace(/ee+/g, 'ee')
    .replace(/oo+/g, 'oo')
    .replace(/a+/g, 'a')
    .replace(/kh+a/g, 'kha')
    .replace(/sh+a/g, 'sha');
};

export const changeLanguage = (langCode: string) => {
  if (typeof window === 'undefined') return;
  
  // Hinglish uses Hindi translation from Google Translate, then we transliterate it
  const targetCode = langCode === 'hi-trans' ? 'hi' : langCode;
  
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  if (select) {
    select.value = targetCode;
    select.dispatchEvent(new Event('change'));
    localStorage.setItem('preferred_lang', langCode);
    
    // Trigger local state change event so the widget updates
    window.dispatchEvent(new CustomEvent('langchange', { detail: langCode }));
  } else {
    document.cookie = `googtrans=/en/${targetCode}; path=/;`;
    document.cookie = `googtrans=/en/${targetCode}; path=/; domain=.web.app`;
    document.cookie = `googtrans=/en/${targetCode}; path=/; domain=.bca-nextsem.web.app`;
    localStorage.setItem('preferred_lang', langCode);
    window.location.reload();
  }
};

const TranslateWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isDismissed = localStorage.getItem('translate_banner_dismissed') === 'true';
    setIsVisible(!isDismissed);

    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    setCurrentLang(savedLang);

    // Watch for global language changes
    const handleLangChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setCurrentLang(detail);
    };
    window.addEventListener('langchange', handleLangChange);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,es,fr,de',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
      setScriptLoaded(true);
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }

    return () => {
      window.removeEventListener('langchange', handleLangChange);
    };
  }, []);

  // Transliteration observer logic for Hinglish
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let observer: MutationObserver | null = null;

    const translateNode = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
        if (/[\u0900-\u097F]/.test(node.nodeValue)) {
          // Temporarily disconnect observer to prevent infinite loop of character mutation
          if (observer) observer.disconnect();
          
          node.nodeValue = transliterateDevnagari(node.nodeValue);
          
          if (observer) {
            observer.observe(document.body, {
              childList: true,
              subtree: true,
              characterData: true
            });
          }
        }
      } else {
        for (let child of Array.from(node.childNodes)) {
          translateNode(child);
        }
      }
    };

    if (currentLang === 'hi-trans') {
      // 1. Initial transliteration run
      translateNode(document.body);

      // 2. Continuous translation run for any dynamic elements translated by Google
      observer = new MutationObserver((mutations) => {
        if (observer) observer.disconnect();
        
        for (let mutation of mutations) {
          if (mutation.type === 'characterData') {
            translateNode(mutation.target);
          } else {
            for (let addedNode of Array.from(mutation.addedNodes)) {
              translateNode(addedNode);
            }
          }
        }

        if (observer) {
          observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
          });
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [currentLang, scriptLoaded]);

  const handleSelectLanguage = (langCode: string) => {
    changeLanguage(langCode);
    setCurrentLang(langCode);
    setDropdownOpen(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('translate_banner_dismissed', 'true');
  };

  if (!isVisible) return <div id="google_translate_element" className="hidden" />;

  const activeLanguage = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  return (
    <>
      <div id="google_translate_element" className="hidden" />

      {/* Floating Top Banner */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-200/50 dark:border-slate-800/80 px-4 py-2.5 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top duration-300">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 rounded-full">
            <Languages size={16} />
          </div>
          <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-200">
            Translate page:
          </span>
        </div>

        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 border border-gray-200/60 dark:border-slate-700/60 rounded-full text-xs font-black text-slate-800 dark:text-slate-100 transition-all active:scale-95"
          >
            <span>{activeLanguage.flag}</span>
            <span>{activeLanguage.label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {dropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
              
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-xl py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className="flex items-center justify-between w-full text-left px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </div>
                    {currentLang === lang.code && <Check size={14} className="text-emerald-500" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <button
          onClick={handleClose}
          className="p-1 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 hover:text-gray-650 dark:hover:text-slate-200 rounded-full transition-colors"
          aria-label="Dismiss translation banner"
        >
          <X size={16} />
        </button>
      </div>
    </>
  );
};

export default TranslateWidget;
