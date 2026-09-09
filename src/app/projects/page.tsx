import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "15+ Interactive Developer Mini-Projects | Nextsem Academy",
  description: "Explore 15+ practical web development mini-projects: CSS candle flame, matrix code rain, canvas physics, 3D cubes, audio equalizers, and glassmorphism UI.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "15+ Interactive Developer Mini-Projects | Nextsem Academy",
    description: "Explore 15+ practical web development mini-projects with live labs, source code, and step-by-step guides.",
    url: "https://nextsem.online/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "15+ Interactive Developer Mini-Projects | Nextsem Academy",
    description: "Explore 15+ practical web development mini-projects on Nextsem Academy.",
  },
};

export default function ProjectsGalleryPage() {
  return <ProjectsClient />;
}
