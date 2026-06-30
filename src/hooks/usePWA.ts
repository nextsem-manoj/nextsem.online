"use client";

import { useEffect, useState } from "react";

let globalDeferredPrompt: any = null;
let globalIsInstallable = false;
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    globalDeferredPrompt = e;
    globalIsInstallable = true;
    listeners.forEach((l) => l());
  });

  window.addEventListener("appinstalled", () => {
    globalDeferredPrompt = null;
    globalIsInstallable = false;
    listeners.forEach((l) => l());
  });
}

export function usePWA() {
  const [isInstallable, setIsInstallable] = useState(globalIsInstallable);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const handleChange = () => {
      setIsInstallable(globalIsInstallable);
    };

    listeners.add(handleChange);
    // Initial sync
    setIsInstallable(globalIsInstallable);

    // Register SW
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .then(() => console.log("SW Registered"))
        .catch((err) => console.error("SW Registration failed", err));
    }

    return () => {
      listeners.delete(handleChange);
    };
  }, []);

  const installApp = async () => {
    if (!globalDeferredPrompt) return;
    globalDeferredPrompt.prompt();
    const { outcome } = await globalDeferredPrompt.userChoice;
    if (outcome === "accepted") {
      globalDeferredPrompt = null;
      globalIsInstallable = false;
      setIsInstallable(false);
      setIsInstalled(true);
      listeners.forEach((l) => l());
    }
  };

  return { isInstallable, isInstalled, installApp };
}
