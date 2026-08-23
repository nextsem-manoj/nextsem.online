import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Nextsem Academy | Complete Free Dev Curriculum",
  description: "Master full stack web development from Windows CLI and HTML basics up to React, Node.js, and Cloud deployment — free interactive developer curriculum.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nextsem Academy | Complete Free Dev Curriculum",
    description: "Free developer curriculum for aspiring full stack engineers.",
    url: "https://nextsem.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextsem Academy | Complete Free Dev Curriculum",
    description: "Free structured web development curriculum.",
  },
};

export default function Home() {
  return <HomeClient />;
}
