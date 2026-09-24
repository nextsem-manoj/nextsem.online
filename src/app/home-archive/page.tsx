import React from "react";
import type { Metadata } from "next";
import HomeClient from "../HomeClient";

export const metadata: Metadata = {
  title: "Nextsem Academy Developer Portal Archive",
  description: "Nextsem Academy Developer Platform multi-track showcase and roadmap archive.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomeArchivePage() {
  return <HomeClient />;
}
