import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "frontend by Nextsem",
  description: "Start your journey to become a job-ready Front End Developer.",
  manifest: "/manifest.json",
};

import { ThemeProvider } from "../components/ThemeProvider";
import { ProgressProvider } from "../context/ProgressContext";
import BottomNavigation from "../components/BottomNavigation";
import InstallBanner from "../components/InstallBanner";
import TranslateWidget from "../components/TranslateWidget";
import SearchWidget from "../components/SearchWidget";
import OnboardingTour from "../components/OnboardingTour";

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
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressProvider>
            {children}
            <InstallBanner />
            <TranslateWidget />
            <SearchWidget />
            <OnboardingTour />
            <BottomNavigation />
          </ProgressProvider>
        </ThemeProvider>
      </body>

    </html>
  );
}
