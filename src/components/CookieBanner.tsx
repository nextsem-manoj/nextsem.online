"use client";

import { useEffect } from "react";

export default function CookieBanner() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("cookie_consent", "true");
      } catch (e) {
        // silent fail
      }
    }
  }, []);

  return null;
}
