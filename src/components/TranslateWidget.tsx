"use client";

import React, { useEffect, useState } from 'react';
import { Languages, X, Check } from 'lucide-react';

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi (हिंदी)', flag: '🇮🇳' },
  { code: 'hi-trans', label: 'Hinglish (हिन्दी)', flag: '🇮🇳' }, // mapped to Hindi
  { code: 'es', label: 'Spanish (Español)', flag: '🇪🇸' },
  { code: 'fr', label: 'French (Français)', flag: '🇫🇷' },
  { code: 'de', label: 'German (Deutsch)', flag: '🇩🇪' },
];

export const changeLanguage = (langCode: string) => {
  if (typeof window === 'undefined') return;
  
  // Custom mapping: Hinglish triggers Hindi translation but serves as a friendly guide
  const targetCode = langCode === 'hi-trans' ? 'hi' : langCode;
  
  // 1. Try to trigger via Google Translate DOM combo box if already loaded
  const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  if (select) {
    select.value = targetCode;
    select.dispatchEvent(new Event('change'));
    
    // Save selection
    localStorage.setItem('preferred_lang', langCode);
  } else {
    // 2. Fallback: Set googtrans cookie and reload page
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

    // Check if user dismissed the top translation banner
    const isDismissed = localStorage.getItem('translate_banner_dismissed') === 'true';
    setIsVisible(!isDismissed);

    // Read stored language choice
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    setCurrentLang(savedLang);

    // Define the global Google Translate callback
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,es,fr,de',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
      setScriptLoaded(true);
    };

    // Load Google Translate script dynamically if not already loaded
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

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
      {/* Hidden container required by Google Translate */}
      <div id="google_translate_element" className="hidden" />

      {/* Floating Top Banner (Dismissible) */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-200/50 dark:border-slate-800/80 px-4 py-2.5 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top duration-300">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 rounded-full">
            <Languages size={16} />
          </div>
          <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-200">
            Translate page:
          </span>
        </div>

        {/* Custom Dropdown Selector */}
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
              {/* Invisible Click Backdrop */}
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

        {/* Close Button */}
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
