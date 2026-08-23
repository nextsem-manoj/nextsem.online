import React from 'react';
import Header from '@/components/Header';
import BlackHoleAnimation from '@/components/BlackHoleAnimation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSS Black Hole Gravitational Lensing Animation | Nextsem Academy',
  description: 'Pure HTML and CSS Black Hole animation with conic-gradient relativistic accretion disk, photon spheres, and light bending lensing arcs.',
};

export default function BlackHolePage() {
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

        <BlackHoleAnimation />
      </main>

      <Footer />
    </div>
  );
}
