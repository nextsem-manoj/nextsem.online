"use client";

import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";
import { Capacitor } from '@capacitor/core';
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AmpAd = 'amp-ad' as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OverflowDiv = 'div' as any;

export default function AdSenseBanner() {
  const [isNative, setIsNative] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [readTheme, setReadTheme] = useState<"default" | "sepia" | "dark">(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('read_theme') as "default" | "sepia" | "dark" | null;
      return savedTheme || "default";
    }
    return "default";
  });
  const [mounted, setMounted] = useState(false);
  const [adBlocked, setAdBlocked] = useState(false);
  const insRef = useRef<HTMLModElement>(null);
  const pathname = usePathname() || '';
  const isInBook = pathname.startsWith('/book/');
  const { theme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    if (typeof window === 'undefined') return;

    const native = Capacitor.isNativePlatform();
    const mobile = window.innerWidth < 768;
    setIsNative(native);
    setIsMobile(mobile);

    const onSettingsChange = () => {
      const t = localStorage.getItem('read_theme') as "default" | "sepia" | "dark" | null;
      if (t) setReadTheme(t);
    };
    window.addEventListener('readerSettingsChanged', onSettingsChange);

    if (native) {
      if (isInBook) {
        try {
          AdMob.hideBanner();
          document.body.style.paddingTop = '0px';
        } catch (e) { }
        return;
      }

      // Mobile app container: Initialize and display AdMob native banner
      const showAdMobBanner = async () => {
        try {
          await AdMob.initialize({});
          await AdMob.showBanner({
            adId: 'ca-app-pub-3940256099942544/6300978111', // Official Google Test Banner Ad ID
            adSize: BannerAdSize.BANNER,
            position: BannerAdPosition.TOP_CENTER,
            margin: 0,
            isTesting: true
          });
          // Push the web content layout down to merge the ad cleanly without hiding headers/content
          document.body.style.paddingTop = '50px';
        } catch (err) {
          console.error('AdMob Initialization failed:', err);
        }
      };

      showAdMobBanner();

      return () => {
        try {
          AdMob.hideBanner();
          document.body.style.paddingTop = '0px';
        } catch (e) { }
        window.removeEventListener('readerSettingsChanged', onSettingsChange);
      };
    } else {
      // Standard web browser: Initialize Google AdSense
      let checkTimeout: NodeJS.Timeout;
      if (!mobile) {
        try {
          // @ts-expect-error: adsbygoogle global is dynamically injected by the Google AdSense script
          (window.adsbygoogle = window.adsbygoogle || []).push({});

          checkTimeout = setTimeout(() => {
            if (insRef.current && insRef.current.innerHTML.trim() === "") {
              setAdBlocked(true);
            }
          }, 4000);
        } catch (err) {
          setAdBlocked(true);
        }
      }

      return () => {
        if (checkTimeout) clearTimeout(checkTimeout);
        window.removeEventListener('readerSettingsChanged', onSettingsChange);
      };
    }
  }, []);

  if (isNative) {
    // Native AdMob renders as a native overlay over the WebView,
    // so we render a matching placeholder spacer in the DOM.
    return (
      <div className={`${isInBook ? 'my-1 h-[40px]' : 'my-4 h-[50px]'} w-full bg-transparent pointer-events-none`} />
    );
  }

  if (adBlocked) {
    // Render a premium static fallback ad
    return (
      <div className="w-full relative">
        4        <a
          href="/course"
          className="w-full block select-none cursor-pointer"
        >
          <div className="relative w-full rounded-2xl overflow-hidden border border-emerald-500/25 bg-gradient-to-r from-slate-950 via-slate-900 to-[#0c1328] p-4 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-300 hover:scale-[1.01] hover:border-emerald-500/40 shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none" />
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl shrink-0 animate-pulse">🚀</span>
              <div className="text-left">
                <span className="inline-block px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-black uppercase tracking-wider rounded-full mb-1">
                  PROMO
                </span>
                <h4 className="text-xs font-black text-white uppercase tracking-tight">Become a Job-Ready Frontend Developer</h4>
                <p className="text-[10px] text-slate-400 font-bold leading-relaxed mt-0.5 max-w-lg">
                  Master HTML, CSS, JavaScript, React, Tailwind & Git from scratch with hands-on labs and 10+ real portfolio projects.
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-auto px-4 py-2 bg-[#39FF14] hover:bg-[#32e011] text-black font-black text-[10px] uppercase tracking-widest rounded-xl text-center shadow-md shadow-emerald-500/10">
              Start Learning →
            </div>
          </div>
        </a>
        {/* Render a hidden ins element to prevent late-loading Google AdSense scripts from throwing no_div errors */}
        {!isMobile && (
          <ins
            className="adsbygoogle"
            style={{ display: 'none' }}
            data-ad-client="ca-pub-4242865347895866"
            data-ad-slot="6059354880"
          />
        )}
      </div>
    );
  }

  // Decide active visual mode: 'light', 'dark', or 'sepia'
  let visualMode: 'light' | 'dark' | 'sepia' = 'dark';

  if (mounted) {
    if (theme === 'night-light') {
      visualMode = 'sepia';
    } else if (theme === 'light') {
      visualMode = 'light';
    } else {
      visualMode = 'dark';
    }
  } else {
    visualMode = 'dark';
  }

  let containerClass = "";
  let labelClass = "absolute top-1 right-2 text-[6px] font-black uppercase tracking-widest";

  if (visualMode === 'sepia') {
    containerClass = "my-2 flex flex-col items-center justify-center w-full overflow-hidden bg-[#ecdcb9]/80 border border-[#d2c29e] rounded-xl p-2 relative select-none";
    labelClass += " text-[#5b4636]/60";
  } else if (visualMode === 'dark') {
    containerClass = isInBook
      ? "my-2 flex flex-col items-center justify-center w-full overflow-hidden bg-[#0c1328]/60 border border-slate-800/80 rounded-xl p-2 relative select-none"
      : "my-8 flex flex-col items-center justify-center w-full overflow-hidden bg-[#0c1328]/60 border border-slate-800/80 rounded-2xl p-4 min-h-[120px] relative select-none";
    labelClass += " text-slate-500";
  } else {
    // light mode
    containerClass = isInBook
      ? "my-2 flex flex-col items-center justify-center w-full overflow-hidden bg-slate-100/60 border border-slate-200 rounded-xl p-2 relative select-none"
      : "my-8 flex flex-col items-center justify-center w-full overflow-hidden bg-slate-100/60 border border-slate-200 rounded-2xl p-4 min-h-[120px] relative select-none";
    labelClass += " text-slate-400";
  }

  return (
    <div className={containerClass}>
      <span className={labelClass}>Ads by Google</span>

      <div className="w-full flex justify-center">
        {isMobile ? (
          <AmpAd
            width="100vw"
            height="320"
            type="adsense"
            data-ad-client="ca-pub-4242865347895866"
            data-ad-slot="6059354880"
            data-auto-format="rspv"
            data-full-width=""
          >
            <OverflowDiv overflow=""></OverflowDiv>
          </AmpAd>
        ) : (
          /* Google AdSense Responsive Ad Unit */
          <ins
            ref={insRef}
            className="adsbygoogle"
            style={{
              display: 'inline-block',
              width: '100%',
              height: isInBook ? '45px' : '90px',
              background: 'transparent'
            }}
            data-ad-client="ca-pub-4242865347895866"
            data-ad-slot="6059354880"
            data-ad-format="auto"
            data-full-width-responsive="false"
          ></ins>
        )}
      </div>
    </div>
  );
}
