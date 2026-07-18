import { Suspense } from 'react';
import NcertClient from './NcertClient';

export const metadata = {
  title: 'NCERT Study Hub',
  description: 'Curated NCERT study guides, revision notes, and self-assessment test suites for Class 11 and Class 12 subjects.',
};

export default function NcertPage() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen bg-[#07070c] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-blue-500 border-slate-800 rounded-full animate-spin" />
      </div>
    }>
      <NcertClient />
    </Suspense>
  );
}
