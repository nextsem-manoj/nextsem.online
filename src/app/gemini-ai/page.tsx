import React from "react";
import { Metadata } from "next";
import GeminiAiPlayground from "@/components/GeminiAiPlayground";

export const metadata: Metadata = {
  title: "Gemini AI Prompt Studio & Playground | NextSem Academy Tools",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/gemini-ai"
  },
  openGraph: {
    title: "Gemini AI Prompt Studio & Playground | NextSem Academy Tools",
    description: "Run custom user prompts and get instant AI explanations and code debugs using Gemini AI.",
    url: "https://nextsem.online/gemini-ai",
    type: "website"
  }
};

export default function GeminiAiPage() {
  return <GeminiAiPlayground />;
}
