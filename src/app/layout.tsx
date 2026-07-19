import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter, Lora, Outfit } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};


export const metadata: Metadata = {
  metadataBase: new URL("https://nextsem.online"),
  title: {
    default: "Nextsem Academy",
    template: "%s | Nextsem Academy",
  },
  description: "Start your journey to become a job-ready developer. BCA, B.Tech, M.Tech & more technical courses.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Nextsem Academy",
    description: "Interactive technical courses for BCA, B.Tech, M.Tech & more.",
    url: "https://nextsem.online",
    siteName: "Nextsem Academy",
    images: [{ url: "/og-image.png", width: 512, height: 512 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextsem",
  },
  verification: {
    google: "FjEmb6Ud3RTb754EJVil2PWI7iZoNiNs-C--fAatkzo",
  },
};


import Script from "next/script";
import { ThemeProvider } from "../components/ThemeProvider";
import { ProgressProvider } from "../context/ProgressContext";
import BottomNavigation from "../components/BottomNavigation";
import InstallBanner from "../components/InstallBanner";
import AndroidBackButtonHandler from "../components/AndroidBackButtonHandler";
import CookieBanner from "../components/CookieBanner";


import TranslateWidget from "../components/TranslateWidget";
import SearchWidget from "../components/SearchWidget";
import GlobalNavigationWidget from "../components/GlobalNavigationWidget";
import OnboardingTour from "../components/OnboardingTour";
import UpdateBanner from "../components/UpdateBanner";
import SplashScreen from "../components/SplashScreen";

import RateAppPrompt from "../components/RateAppPrompt";
import OfflineGuard from "../components/OfflineGuard";
import { FontScaleHydrator } from "../components/FontSizeControl";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-Crash Stylesheet recovery & Theme Auto-Initializer script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored) {
                    document.documentElement.classList.add(stored);
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
              window.addEventListener('error', function(e) {
                var target = e.target;
                if (target && target.tagName === 'LINK' && target.rel === 'stylesheet') {
                  console.warn('CSS Chunk load failed. Force reloading client...');
                  if ('caches' in window) {
                    caches.keys().then(function(names) {
                      names.forEach(function(name) { caches.delete(name); });
                    }).then(function() {
                      window.location.reload(true);
                    });
                  } else {
                    window.location.reload(true);
                  }
                }
              }, true);
            `
          }}
        />

        <Script
          async
          src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
          custom-element="amp-ad"
          strategy="afterInteractive"
        />

        {/* Google AdSense Verification - must be a raw <script> tag so crawlers can find it */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4242865347895866"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-4242865347895866" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${lora.variable} ${outfit.variable} min-h-full flex flex-col bg-background text-foreground transition-colors`}>


        <ThemeProvider
          attribute="class"
          themes={["light", "dark", "night-light"]}
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ProgressProvider>
            <FontScaleHydrator />
            <OfflineGuard />
            <SplashScreen />

            <RateAppPrompt />
            <UpdateBanner />
            {children}
            <CookieBanner />
            <InstallBanner />
            <AndroidBackButtonHandler />
            <TranslateWidget />
            <SearchWidget />
            <GlobalNavigationWidget />

            <BottomNavigation />
          </ProgressProvider>
        </ThemeProvider>
      </body>



    </html>
  );
}
