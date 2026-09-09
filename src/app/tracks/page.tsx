import type { Metadata } from 'next';
import TracksClient from './TracksClient';

export const metadata: Metadata = {
  title: "Curated Developer Tracks & Structured Pathways | Nextsem Academy",
  description: "Follow proven, step-by-step full-stack developer tracks: Windows 11 CLI, HTML5, CSS3, JavaScript, React, Node.js, and Git with hands-on practice.",
  alternates: { canonical: "/tracks" },
  openGraph: {
    title: "Curated Developer Tracks & Structured Pathways | Nextsem Academy",
    description: "Follow proven, step-by-step full-stack developer tracks with real-world practice and 1-to-1 screenshot verification.",
    url: "https://nextsem.online/tracks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated Developer Tracks & Structured Pathways | Nextsem Academy",
    description: "Follow proven, step-by-step full-stack developer tracks on Nextsem Academy.",
  },
};

export default function TracksPage() {
  return <TracksClient />;
}
