import React from "react";
import { Metadata } from "next";
import HtmlDashboardClient from "@/components/HtmlDashboardClient";

export const metadata: Metadata = {
  title: "HTML5 Free Lessons Dashboard & Study Path | NextSem",
  description: "Explore our interactive HTML5 developer syllabus. Track your progress, unlock 100 lessons, and resume your coding journey on client-server concepts, tags, and semantic structures.",
  alternates: {
    canonical: "/html"
  },
  openGraph: {
    title: "HTML5 Free Lessons Dashboard & Study Path | NextSem",
    description: "Explore our interactive HTML5 developer syllabus. Track your progress, unlock 100 lessons, and resume your coding journey on client-server concepts, tags, and semantic structures.",
    url: "https://nextsem.online/html",
    type: "website"
  }
};

export default function HtmlRootPage() {
  return <HtmlDashboardClient />;
}
