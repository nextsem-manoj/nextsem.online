import type { Metadata } from "next";
import VisualLogicSimulator from "@/components/VisualLogicSimulator";

export const metadata: Metadata = {
  title: "Visual Logic & Algorithm Simulator | NextSem Academy",
  description: "Learn fundamental coding algorithms, sequencing, and loops with interactive visual problem-solving games — zero coding experience required.",
  alternates: {
    canonical: "/visual-logic",
  },
  openGraph: {
    title: "Visual Logic & Algorithm Simulator | NextSem Academy",
    description: "Learn fundamental coding algorithms, sequencing, and loops with interactive visual problem-solving games.",
    url: "https://nextsem.online/visual-logic",
    type: "website",
  },
};

export default function VisualLogicPage() {
  return <VisualLogicSimulator />;
}
