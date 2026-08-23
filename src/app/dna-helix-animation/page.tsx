import React from 'react';
import Header from '@/components/Header';
import DnaHelixAnimation from '@/components/DnaHelixAnimation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D Rotating DNA Double Helix Animation | Nextsem Academy',
  description: 'Pure HTML and CSS 3D rotating DNA double helix animation with harmonic sine wave physics and staggered delays.',
};

export default function DnaHelixPage() {
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

        <DnaHelixAnimation />
      </main>

      <Footer />
    </div>
  );
}
