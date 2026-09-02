import type { Metadata } from "next";
import TerminalFastTrackClient from "../cli/fast-track/TerminalFastTrackClient";

export const metadata: Metadata = {
  title: "Windows 11 Terminal Fast-Track for Web Developers | Nextsem Academy",
  description: "Master the 5 essential Windows 11 Command Prompt commands needed for web development in under 15 minutes. Dispel terminal fear with interactive in-browser practice.",
  alternates: {
    canonical: "/terminal-fast-track"
  },
  openGraph: {
    title: "Windows 11 Terminal Fast-Track for Web Developers | Nextsem Academy",
    description: "Learn the 5 essential Windows CMD commands for web development in 15 minutes.",
    url: "https://nextsem.online/terminal-fast-track",
    siteName: "Nextsem Academy",
    type: "website"
  }
};

export default function TerminalFastTrackPage() {
  return <TerminalFastTrackClient />;
}
