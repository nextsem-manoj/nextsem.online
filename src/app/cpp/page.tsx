import React from "react";
import { Metadata } from "next";
import CppClient from "./CppClient";

export const metadata: Metadata = {
  title: "Learn C++ Programming Master Course | 🪟 Windows 11 Systems Engineering | NextSem",
  description: "Master C++ programming from scratch on Windows 11. 20 comprehensive developer lessons covering GCC g++, pointers, references, dynamic memory, OOP inheritance, virtual functions, and STL containers.",
  alternates: {
    canonical: "https://nextsem.online/cpp",
  },
  openGraph: {
    title: "Learn C++ Programming Master Course | NextSem Academy",
    description: "Free interactive C++ developer curriculum with live compiler simulation, hands-on pointers & STL exercises.",
    url: "https://nextsem.online/cpp",
    type: "website",
  },
};

export default function CppDashboardPage() {
  return <CppClient />;
}
