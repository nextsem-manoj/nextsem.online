import React from 'react';
import Header from '@/components/Header';
import LiquidWaveAnimation from '@/components/LiquidWaveAnimation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSS Liquid Glass Battery & Wave Animation | Nextsem Academy',
  description: 'Pure HTML and CSS liquid wave battery charging animation using rotational border-radius geometry and rising bubbles.',
};

export default function LiquidWavePage() {
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

        <LiquidWaveAnimation />
      </main>

      <Footer />
    </div>
  );
}
