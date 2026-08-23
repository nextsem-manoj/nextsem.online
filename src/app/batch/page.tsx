import type { Metadata } from "next";
import BatchDashboardClient from "@/components/BatchDashboardClient";

export const metadata: Metadata = {
  title: "Windows Batch File Scripting Dashboard & Tutorial (.bat / .cmd) | Nextsem Academy",
  description: "Master Windows batch file scripting step-by-step with interactive terminal simulators, .bat script templates, syntax cheat sheets, and automation exercises.",
  alternates: {
    canonical: "/batch"
  },
  openGraph: {
    title: "Windows Batch File Scripting Dashboard & Tutorial (.bat / .cmd) | Nextsem Academy",
    description: "Master Windows batch file scripting step-by-step with interactive terminal simulators, .bat script templates, syntax cheat sheets, and automation exercises.",
    url: "https://nextsem.online/batch",
    type: "website"
  }
};

export default function BatchPage() {
  return <BatchDashboardClient />;
}
