import { Metadata } from "next";
import FullStackRoadmapClient from "./FullStackRoadmapClient";

export const metadata: Metadata = {
  title: "Full Stack Web Development Roadmap 2026 | Nextsem Academy",
  description: "Complete step-by-step career path and status roadmap to master full stack software engineering — from Windows CLI & HTML to React, Node.js REST APIs, and Cloud Deployment.",
  keywords: [
    "Full Stack Web Development Roadmap",
    "Web Developer Learning Path",
    "Frontend to Backend Roadmap 2026",
    "HTML CSS JS React Node.js Roadmap",
    "Nextsem Academy Roadmap"
  ],
  openGraph: {
    title: "Full Stack Web Development Roadmap | Nextsem Academy",
    description: "Interactive step-by-step developer roadmap with real-time status tracking.",
    url: "https://nextsem.online/full-stack-web-development-roadmap",
    siteName: "Nextsem Academy",
    type: "website",
  },
};

export default function FullStackRoadmapPage() {
  return <FullStackRoadmapClient />;
}
