import type { Metadata } from 'next';
import WinFastClient from './WinFastClient';

export const metadata: Metadata = {
  title: "WinFast 11 — Ultimate Windows 11 Speedup & Debloat Suite | NextSem",
  description: "Free, open-source Windows 11 optimizer developed by Manoj. Clean system junk, disable telemetry, unlock Ultimate Performance power plan, and boost gaming speed in 1-click.",
  alternates: { canonical: "/winfast11" },
  openGraph: {
    title: "WinFast 11 — Windows 11 Speedup & Debloat Suite",
    description: "Make Windows 11 lightning fast with zero risk. Auto restore points, deep junk purge, and telemetry removal.",
    url: "https://nextsem.online/winfast11",
    images: [{ url: "https://nextsem.online/images/win11_speedup_icon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WinFast 11 — Windows 11 Speedup & Debloat Suite",
    description: "Make Windows 11 lightning fast with zero risk. Free & Open-source.",
    images: ["https://nextsem.online/images/win11_speedup_icon.png"],
  },
};

export default function WinFastPage() {
  return <WinFastClient />;
}
