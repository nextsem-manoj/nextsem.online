import React from 'react';
import Header from '@/components/Header';
import SolarSystemAnimation from '@/components/SolarSystemAnimation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSS Solar System 3D Planet Orbit | Nextsem Academy',
  robots: {
    index: false,
    follow: false,
  },
  description: 'Pure HTML and CSS solar system planet orbit animation.',
};

export default function SolarSystemPage() {
  return (
    <div className="min-h-screen bg-[#17181c] text-white flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 md:px-6 py-8 space-y-6">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        <SolarSystemAnimation />
      </main>

      <Footer />
    </div>
  );
}
