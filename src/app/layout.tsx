import type { Metadata, Viewport } from "next";

import "./globals.css";

import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 0.5,
  maximumScale: 5,
  userScalable: true,
};


export const metadata: Metadata = {
  metadataBase: new URL("https://nextsem.online"),
  title: {
    default: "Nextsem Academy — College Computer Science, BCA, MCA, B.Tech & Tech Jobs",
    template: "%s | Nextsem Academy",
  },
  description: "Complete 100% free higher education & coding platform by Er. Manoj Kumar. Covers University Degrees (BCA, MCA, B.Tech CSE), Curated Tech Jobs & Internships, and 50-Day Practical Coding Labs with live GitHub verification.",
  keywords: [
    "nextsem academy",
    "er manoj kumar coaching",
    "bca practical coding lab",
    "50 days coding lab github verification",
    "ignou bca mca study materials",
    "btech cse engineering notes",
    "tech jobs india",
    "bca freshers off campus drives",
    "mca placement drive",
    "full stack web development course free",
    "learn html css javascript react nodejs",
    "windows cmd terminal for developers",
    "visual studio code windows 11 setup guide",
    "free computer science education india"
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Nextsem Academy — College Computer Science, BCA, MCA, B.Tech & Tech Jobs",
    description: "Free comprehensive higher education from College Degrees (BCA, MCA, B.Tech) to Curated Tech Jobs, Internships & 50-Day Coding Labs by Er. Manoj Kumar.",
    url: "https://nextsem.online",
    siteName: "Nextsem Academy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nextsem Academy — College Degrees, Tech Jobs & Coding" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nextsem",
    title: "Nextsem Academy — Higher Education: BCA, MCA, B.Tech, Jobs & Coding",
    description: "Free higher education and placement coaching for BCA, MCA, B.Tech & 50-Day Coding Labs with live GitHub verification by Er. Manoj Kumar.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "FjEmb6Ud3RTb754EJVil2PWI7iZoNiNs-C--fAatkzo",
  },
  alternates: {
    canonical: "https://nextsem.online",
  },
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-5947565211927754",
  },
};



import Script from "next/script";
import { ThemeProvider } from "../components/ThemeProvider";
import { ProgressProvider } from "../context/ProgressContext";
import BottomNavigation from "../components/BottomNavigation";
import AndroidBackButtonHandler from "../components/AndroidBackButtonHandler";
import CookieBanner from "../components/CookieBanner";


import TranslateWidget from "../components/TranslateWidget";
import { StudentProgressProvider } from "../context/StudentProgressContext";
import { CrossDeviceSyncProvider } from "../context/CrossDeviceSyncContext";
import SearchWidget from "../components/SearchWidget";
import GlobalNavigationWidget from "../components/GlobalNavigationWidget";
import OnboardingTour from "../components/OnboardingTour";
import UpdateBanner from "../components/UpdateBanner";
import SplashScreen from "../components/SplashScreen";

import RateAppPrompt from "../components/RateAppPrompt";
import OfflineGuard from "../components/OfflineGuard";
import { FontScaleHydrator } from "../components/FontSizeControl";
import LearningPathOnboardingModal from "../components/LearningPathOnboardingModal";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans min-h-full flex flex-col bg-background text-foreground transition-colors`}>
        {/* Anti-Crash Stylesheet recovery & Theme Auto-Initializer script */}
        <Script
          id="theme-anti-crash-initializer"
          src="/theme-init.js"
          strategy="beforeInteractive"
        />

        <Script
          id="amp-ad-script"
          async
          src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
          custom-element="amp-ad"
          strategy="afterInteractive"
        />

        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5947565211927754"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />





        <ThemeProvider
          attribute="class"
          themes={["light", "dark"]}
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ProgressProvider>
            <StudentProgressProvider>
              <CrossDeviceSyncProvider>
                <FontScaleHydrator />
                <OfflineGuard />
                <SplashScreen />

                <RateAppPrompt />
                <UpdateBanner />
                <LearningPathOnboardingModal />
                {children}
                <CookieBanner />
                <AndroidBackButtonHandler />
                <TranslateWidget />
                <SearchWidget />
                <GlobalNavigationWidget />

                <BottomNavigation />
              </CrossDeviceSyncProvider>
            </StudentProgressProvider>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
