import type { Metadata } from "next";
import BatchTabLauncherProjectClient from "@/components/BatchTabLauncherProjectClient";

export const metadata: Metadata = {
  title: "Open Google, YouTube & Gmail Multi-Tab Batch Script (.bat) | Nextsem Academy",
  description: "Learn how to write a Windows batch file script to automatically open Google, YouTube, and Gmail in multiple browser tabs using the start command, timeouts, and Windows Task Scheduler.",
  alternates: {
    canonical: "/batch/open-browser-tabs-script"
  },
  openGraph: {
    title: "Open Google, YouTube & Gmail Multi-Tab Batch Script (.bat) | Nextsem Academy",
    description: "Learn how to write a Windows batch file script to automatically open Google, YouTube, and Gmail in multiple browser tabs using the start command, timeouts, and Windows Task Scheduler.",
    url: "https://nextsem.online/batch/open-browser-tabs-script",
    type: "article"
  }
};

export default function BatchTabLauncherPage() {
  return <BatchTabLauncherProjectClient />;
}
