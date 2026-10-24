import type { Metadata } from 'next';
import PlaygroundClient from './PlaygroundClient';

export const metadata: Metadata = {
  title: "Online Code Sandbox & Web IDE — Run HTML, CSS & JavaScript Live | Nextsem Academy",
  description: "Free browser-based online code sandbox and web editor. Write, compile, and debug HTML5, CSS3, and modern JavaScript in real-time with zero installation. 100% mobile-friendly IDE for students and web developers.",
  keywords: [
    "online code editor",
    "html css javascript sandbox",
    "free web ide",
    "run code in browser",
    "mobile code editor",
    "nextsem playground",
    "live html preview",
    "bca practical online editor",
    "web development simulator"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { 
    canonical: "https://nextsem.online/playground" 
  },
  openGraph: {
    title: "Online Code Sandbox & Web IDE | Nextsem Academy",
    description: "Write, run, and debug HTML5, CSS3, and JavaScript live in your browser on mobile and desktop.",
    url: "https://nextsem.online/playground",
    type: "website",
    siteName: "Nextsem Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Code Sandbox & Web IDE | Nextsem Academy",
    description: "Write, run, and debug HTML, CSS, and JavaScript in real-time with zero installation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Nextsem Online Code Sandbox & Web IDE",
  "url": "https://nextsem.online/playground",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "description": "Free interactive browser-based code editor for practicing HTML, CSS, and JavaScript in real-time with instant mobile and desktop live preview.",
  "author": {
    "@type": "Person",
    "name": "Er. Manoj Kumar"
  }
};

export default function PlaygroundPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PlaygroundClient />
    </>
  );
}
