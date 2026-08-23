"use client";

import React, { useEffect } from "react";
import { Capacitor } from "@capacitor/core";

interface AdSenseBannerProps {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle";
  responsive?: boolean;
  className?: string;
}

export default function AdSenseBanner({
  slot = "1234567890",
  format = "auto",
  responsive = true,
  className = "my-4 text-center overflow-hidden",
}: AdSenseBannerProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && !Capacitor.isNativePlatform()) {
      try {
        // @ts-expect-error window.adsbygoogle is injected by Google AdSense script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense push error:", e);
      }
    }
  }, []);

  if (Capacitor.isNativePlatform()) {
    return null;
  }

  return (
    <div className={`${className} min-h-0 bg-transparent border-0 shadow-none`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", backgroundColor: "transparent" }}
        data-ad-client="ca-pub-5947565211927754"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}

