import { Metadata } from "next";
import GuideClient from "./GuideClient";

export const metadata: Metadata = {
  title: "Complete Step-by-Step Full Stack Developer Learning Guide | Nextsem Academy",
  description: "Official structured guide for students and developers: The exact step-by-step order of lessons to master full stack web development — from Windows 11 VS Code setup and CLI to HTML5, React, Node.js, and Cloud Deployment.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Complete Step-by-Step Full Stack Developer Learning Guide | Nextsem Academy",
    description: "The definitive step-by-step curriculum path to master modern software engineering on Nextsem Academy.",
    url: "https://nextsem.online/guide",
    siteName: "Nextsem Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Step-by-Step Full Stack Developer Learning Guide | Nextsem Academy",
    description: "Ordered lesson roadmap and guide for mastering full stack web development on Nextsem Academy.",
  },
};

export default function GuidePage() {
  return <GuideClient />;
}
