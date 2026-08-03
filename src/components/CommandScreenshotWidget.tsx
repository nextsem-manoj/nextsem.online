"use client";

import React, { useState, useEffect, useRef } from "react";
import { Camera, Upload, ZoomIn, X, Minus, Square } from "lucide-react";
import { app } from "../lib/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface CommandScreenshotWidgetProps {
  lessonId: number;
  lessonSlug: string;
  lessonTitle: string;
  defaultImage?: string;
  cmd?: string;
}

function getSimulatedOutputData(cmd?: string, fallbackTitle?: string) {
  const cleanCmd = (cmd || fallbackTitle || "ver").replace(/^Command\s*#\d+:\s*/i, "").trim();
  const lower = cleanCmd.toLowerCase();

  if (lower.startsWith("dir")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        " Volume in drive C has no label.",
        " Volume Serial Number is A8F2-3D19",
        "",
        " Directory of C:\\Users\\Developer",
        "",
        "08/03/2026  10:15 AM    <DIR>          .",
        "08/03/2026  10:15 AM    <DIR>          ..",
        "08/03/2026  09:30 AM             1,240 index.html",
        "08/03/2026  09:32 AM               850 style.css",
        "08/03/2026  09:45 AM             3,420 app.js",
        "08/03/2026  08:12 AM               412 README.md",
        "               4 File(s)          5,922 bytes",
        "               2 Dir(s)  142,850,304,000 bytes free"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("mkdir") || lower.startsWith("md")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("cd ..")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app",
      command: "cd ..",
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("cd")) {
    const target = cleanCmd.split(" ")[1] || "my-app";
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: `C:\\Users\\Developer\\${target}`
    };
  }

  if (lower.startsWith("copy")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: ["        1 file(s) copied."],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("move")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: ["        1 file(s) moved."],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("ren")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("del")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("type nul")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("echo %path%")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "echo %PATH%",
      outputLines: ["C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd"],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("set")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("prompt")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("tasklist")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "tasklist",
      outputLines: [
        "Image Name                     PID Session Name        Session#    Mem Usage",
        "========================= ======== ================ =========== ============",
        "System Idle Process              0 Services                   0          8 K",
        "System                           4 Services                   0      2,410 K",
        "cmd.exe                       4812 Console                    1      6,840 K",
        "node.exe                     12940 Console                    1     48,912 K"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("taskkill")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: ["SUCCESS: The process with PID 12940 has been terminated."],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("ipconfig")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "Windows IP Configuration",
        "",
        "   Host Name . . . . . . . . . . . . : DEV-WORKSTATION",
        "   IPv4 Address. . . . . . . . . . . : 192.168.1.45(Preferred)",
        "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
        "   Default Gateway . . . . . . . . . : 192.168.1.1"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("ping")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "Pinging nextsem.online [76.76.21.21] with 32 bytes of data:",
        "Reply from 76.76.21.21: bytes=32 time=18ms TTL=56",
        "Reply from 76.76.21.21: bytes=32 time=19ms TTL=56",
        "",
        "Ping statistics for 76.76.21.21:",
        "    Packets: Sent = 2, Received = 2, Lost = 0 (0% loss),"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("nslookup")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "Server:  UnKnown",
        "Address:  192.168.1.1",
        "",
        "Non-authoritative answer:",
        "Name:    nextsem.online",
        "Address: 76.76.21.21"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("netstat")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "Active Connections",
        "",
        "  Proto  Local Address          Foreign Address        State           PID",
        "  TCP    127.0.0.1:3000         0.0.0.0:0              LISTENING       12940"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("attrib")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("hostname")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "hostname",
      outputLines: ["DEV-WORKSTATION-X1"],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("systeminfo")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "systeminfo",
      outputLines: [
        "Host Name:                 DEV-WORKSTATION-X1",
        "OS Name:                   Microsoft Windows 11 Pro",
        "OS Version:                10.0.22631 N/A Build 22631",
        "System Manufacturer:       Dell Inc.",
        "System Type:               x64-based PC",
        "Total Physical Memory:     32,540 MB"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("whoami")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "whoami",
      outputLines: ["dev-workstation\\developer"],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("setx")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: ["SUCCESS: Specified value was saved."],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("echo %localappdata%")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "echo %LOCALAPPDATA%",
      outputLines: ["C:\\Users\\Developer\\AppData\\Local"],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("fsutil")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "Total # of bytes             : 512,000,000,000",
        "Total # of free bytes        : 245,850,304,000",
        "Total # of avail free bytes  : 245,850,304,000"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("tracert")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "Tracing route to nextsem.online [76.76.21.21] over a maximum of 30 hops:",
        "  1    1 ms    1 ms    1 ms  192.168.1.1",
        "  2   12 ms   11 ms   12 ms  10.20.0.1",
        "  3   18 ms   17 ms   18 ms  76.76.21.21",
        "",
        "Trace complete."
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("arp")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "arp -a",
      outputLines: [
        "Interface: 192.168.1.45 --- 0x14",
        "  Internet Address      Physical Address      Type",
        "  192.168.1.1           94-a4-0e-12-b3-4c     dynamic",
        "  192.168.1.255         ff-ff-ff-ff-ff-ff     static"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("findstr")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "server.log: 14: [ERROR] Failed to connect to database at port 5432",
        "server.log: 42: [ERROR] JWT Secret key missing in environment variables"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("git --version")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "git --version",
      outputLines: ["git version 2.44.0.windows.1"],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("git config")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("git init")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app",
      command: "git init",
      outputLines: ["Initialized empty Git repository in C:/Users/Developer/my-app/.git/"],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git status")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: "git status",
      outputLines: [
        "On branch main",
        "No commits yet",
        "",
        "Untracked files:",
        "  (use \"git add <file>...\" to include in what will be committed)",
        "        index.html",
        "        style.css",
        "        app.js",
        "",
        "nothing added to commit but untracked files present"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git add")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git commit")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: cleanCmd,
      outputLines: [
        "[main (root-commit) a8f3d19] feat: initial web application setup",
        " 3 files changed, 142 insertions(+)",
        " create mode 100644 app.js",
        " create mode 100644 index.html",
        " create mode 100644 style.css"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git log")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: cleanCmd,
      outputLines: [
        "a8f3d19 (HEAD -> main) feat: initial web application setup",
        "c4b2e91 style: add responsive flexbox grid layout",
        "9e1f8a4 docs: update API deployment documentation"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git diff")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: "git diff",
      outputLines: [
        "diff --git a/app.js b/app.js",
        "--- a/app.js",
        "+++ b/app.js",
        "@@ -12,3 +12,5 @@ function init() {",
        "-  console.log('App starting...');",
        "+  console.log('App starting on port 3000...');",
        "+  startServer();"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git branch")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: "git branch",
      outputLines: [
        "* main",
        "  feature/user-auth",
        "  fix/navigation-bug"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git checkout -b") || lower.startsWith("git switch -c")) {
    const branch = cleanCmd.split(" ").slice(-1)[0] || "feature/user-auth";
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: cleanCmd,
      outputLines: [`Switched to a new branch '${branch}'`],
      nextPrompt: `C:\\Users\\Developer\\my-app (${branch})`
    };
  }

  if (lower.startsWith("git checkout") || lower.startsWith("git switch")) {
    const branch = cleanCmd.split(" ").slice(-1)[0] || "main";
    return {
      promptPath: "C:\\Users\\Developer\\my-app",
      command: cleanCmd,
      outputLines: [`Switched to branch '${branch}'`],
      nextPrompt: `C:\\Users\\Developer\\my-app (${branch})`
    };
  }

  if (lower.startsWith("git merge")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: cleanCmd,
      outputLines: [
        "Updating a8f3d19..c4b2e91",
        "Fast-forward",
        " auth.js | 45 +++++++++++++++++++++++++++++++++++++++++++++",
        " 1 file changed, 45 insertions(+)"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git remote")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: cleanCmd,
      outputLines: [],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git push")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: cleanCmd,
      outputLines: [
        "Enumerating objects: 5, done.",
        "Counting objects: 100% (5/5), done.",
        "Writing objects: 100% (5/5), 1.2 KiB | 1.20 MiB/s, done.",
        "To https://github.com/user/my-app.git",
        " * [new branch]      main -> main",
        "Branch 'main' set up to track remote branch 'main' from 'origin'."
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("git pull")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app (main)",
      command: cleanCmd,
      outputLines: [
        "Already up to date."
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app (main)"
    };
  }

  if (lower.startsWith("node -v")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "node -v",
      outputLines: ["v20.11.1"],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("npm init")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app",
      command: cleanCmd,
      outputLines: [
        "Wrote to C:\\Users\\Developer\\my-app\\package.json:",
        "",
        "{",
        '  "name": "my-app",',
        '  "version": "1.0.0",',
        '  "main": "index.js",',
        '  "scripts": { "test": "echo \\"Error: no test specified\\" && exit 1" }',
        "}"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app"
    };
  }

  if (lower.startsWith("npm i") || lower.startsWith("npm install")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app",
      command: cleanCmd,
      outputLines: [
        "added 12 packages, and audited 180 packages in 2s",
        "found 0 vulnerabilities"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app"
    };
  }

  if (lower.startsWith("npx create-next-app")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "Creating a new Next.js app in C:\\Users\\Developer\\my-app.",
        "Using npm.",
        "",
        "Initializing project with template: app",
        "Installing dependencies:",
        "- react",
        "- react-dom",
        "- next",
        "- typescript",
        "- tailwindcss",
        "",
        "Success! Created my-app at C:\\Users\\Developer\\my-app"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("npx create-vite")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "Scaffolding project in C:\\Users\\Developer\\my-app...",
        "Done. Now run:",
        "  cd my-app",
        "  npm install",
        "  npm run dev"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("npm run dev")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app",
      command: "npm run dev",
      outputLines: [
        "> my-app@0.1.0 dev",
        "> next dev",
        "",
        "   ▲ Next.js 16.2.9 (Turbopack)",
        "   - Local:        http://localhost:3000",
        "   - Network:      http://192.168.1.45:3000",
        "",
        " ✓ Ready in 1200ms"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app"
    };
  }

  if (lower.startsWith("npm run build")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app",
      command: "npm run build",
      outputLines: [
        "> my-app@0.1.0 build",
        "> next build",
        "",
        " ✓ Compiled successfully in 14.2s",
        " ✓ Generating static pages (144/144) in 5.1s",
        " ✓ Finalizing page optimization"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app"
    };
  }

  if (lower.startsWith("curl -i") || lower.startsWith("curl -I")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        "HTTP/2 200",
        "content-type: text/html; charset=utf-8",
        "server: Vercel",
        "strict-transport-security: max-age=63072000; includeSubDomains; preload",
        "x-vercel-id: iad1::4c8d2-1785"
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("curl")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: cleanCmd,
      outputLines: [
        '{"login":"octocat","id":583231,"name":"The Octocat","company":"@github"}'
      ],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  if (lower.startsWith("npx vercel")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app",
      command: cleanCmd,
      outputLines: [
        "Vercel CLI 33.5.0",
        "🔍 Inspecting build outputs...",
        "✅ Production: https://my-app.vercel.app [1.2s]",
        "🔗 Deployed to production link above"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app"
    };
  }

  if (lower.startsWith("npx firebase deploy")) {
    return {
      promptPath: "C:\\Users\\Developer\\my-app",
      command: cleanCmd,
      outputLines: [
        "=== Deploying to 'nextsem-academy'...",
        "",
        "i  deploying hosting",
        "i  hosting[nextsem-academy]: beginning deploy...",
        "i  hosting[nextsem-academy]: uploading site...",
        "✔  hosting[nextsem-academy]: release complete",
        "",
        "✔  Deploy complete!",
        "",
        "Project Console: https://console.firebase.google.com/project/nextsem-academy/overview",
        "Hosting URL: https://nextsem-academy.web.app"
      ],
      nextPrompt: "C:\\Users\\Developer\\my-app"
    };
  }

  if (lower.startsWith("ver")) {
    return {
      promptPath: "C:\\Users\\Developer",
      command: "ver",
      outputLines: ["Microsoft Windows [Version 10.0.22631.3007]"],
      nextPrompt: "C:\\Users\\Developer"
    };
  }

  return {
    promptPath: "C:\\Users\\Developer",
    command: cleanCmd,
    outputLines: [],
    nextPrompt: "C:\\Users\\Developer"
  };
}

export default function CommandScreenshotWidget({
  lessonId,
  lessonSlug,
  lessonTitle,
  defaultImage,
  cmd,
}: CommandScreenshotWidgetProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const localKey = `nextsem_screenshot_${lessonSlug || lessonId}`;
  const firebaseKey = `nextsem_screenshot_url_${lessonSlug || lessonId}`;

  // Auto-derived static screenshot path for Lesson 1
  const staticPath = defaultImage || `/screenshots/cli/${lessonSlug}.png`;

  // Load screenshot on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fbUrl = localStorage.getItem(firebaseKey);
    if (fbUrl) { setImageSrc(fbUrl); return; }
    const raw = localStorage.getItem(localKey);
    if (raw) { setImageSrc(raw); return; }
    // Auto-fallback to static image path
    setImageSrc(staticPath);
  }, [lessonSlug, lessonId, localKey, firebaseKey, staticPath]);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const processFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file (PNG, JPG, WEBP).");
      return;
    }
    // Show instant local preview
    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64 = event.target?.result as string;
      if (!base64) return;
      setImageSrc(base64);
      try { localStorage.setItem(localKey, base64); } catch (_) {}

      // Auto-upload to Firebase Storage
      await uploadToFirebase(file);
    };
    reader.readAsDataURL(file);
  };

  const uploadToFirebase = async (file: File) => {
    setIsSaving(true);
    setSaveStatus(null);
    try {
      const storage = getStorage(app);
      const path = `cli-screenshots/${lessonSlug}/${Date.now()}.png`;
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);
      setImageSrc(downloadUrl);
      localStorage.setItem(firebaseKey, downloadUrl);
      localStorage.removeItem(localKey);
      setSaveStatus("Saved!");
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (err) {
      console.error("Firebase Storage upload failed:", err);
      setSaveStatus("Upload failed");
    } finally {
      setIsSaving(false);
    }
  };

  // Handle Ctrl+V paste
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith("image")) {
          const blob = items[i].getAsFile();
          if (blob) processFile(blob);
          break;
        }
      }
    };
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [lessonSlug]);

  const handleRemove = () => {
    setImageSrc(null);
    localStorage.removeItem(localKey);
    localStorage.removeItem(firebaseKey);
  };

  const handleManualSave = async () => {
    if (!imageSrc || imageSrc.startsWith("http")) {
      setSaveStatus("Already saved to cloud!");
      setTimeout(() => setSaveStatus(null), 2000);
      return;
    }
    // Convert base64 to blob and upload
    setIsSaving(true);
    try {
      const res = await fetch(imageSrc);
      const blob = await res.blob();
      const file = new File([blob], `${lessonSlug}.png`, { type: "image/png" });
      await uploadToFirebase(file);
    } catch (err) {
      setSaveStatus("Upload failed");
      setIsSaving(false);
    }
  };

  const simData = getSimulatedOutputData(cmd, lessonTitle);

  return (
    <div className="mt-2 mb-2 space-y-2 text-left">

      {imageSrc ? (
        /* Screenshot preview inside CMD-style window */
        <div className="bg-[#0b101c] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl transition-all relative">
          {/* Windows 11 CMD Title Bar */}
          <div className="bg-[#151c2e] px-4 py-2 border-b border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#04AA6D] shrink-0" viewBox="0 0 88 88" fill="currentColor">
                <path d="M0 12.402l35.687-4.859v34.981H0V12.402zm0 33.743h35.687v34.939L0 76.195V46.145zm39.734-39.141L88 0v41.677H39.734V7.004zm0 39.141H88V88l-48.266-6.85V46.145z"/>
              </svg>
              <span className="text-xs font-mono font-bold text-slate-300">
                Administrator: Command Prompt — {cmd || lessonTitle}
              </span>
            </div>
            {/* Windows 11 Window Controls (Minimize, Maximize, Close) */}
            <div className="flex items-center gap-3 text-slate-400">
              <Minus size={12} className="hover:text-white cursor-pointer" />
              <Square size={10} className="hover:text-white cursor-pointer" />
              <X size={13} className="hover:text-rose-400 cursor-pointer" />
            </div>
          </div>

          {/* Image */}
          <div
            className="p-2 sm:p-4 bg-black/80 cursor-pointer flex justify-center items-center"
            onClick={() => setIsZoomed(true)}
          >
            {isSaving && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                <span className="text-white text-xs font-bold animate-pulse">Uploading to cloud...</span>
              </div>
            )}
            <img
              src={imageSrc}
              onError={() => setImageSrc(null)}
              alt={`CMD screenshot for ${lessonTitle}`}
              className="max-h-[450px] w-auto max-w-full rounded-lg object-contain shadow-lg border border-slate-800"
            />
          </div>
        </div>
      ) : (
        /* Authentic Simulated Windows 11 Terminal Output Box */
        <div className="bg-[#090d16] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs text-left">
          {/* Windows 11 Title Bar */}
          <div className="bg-[#0e1526] px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#04AA6D] shrink-0" viewBox="0 0 88 88" fill="currentColor">
                <path d="M0 12.402l35.687-4.859v34.981H0V12.402zm0 33.743h35.687v34.939L0 76.195V46.145zm39.734-39.141L88 0v41.677H39.734V7.004zm0 39.141H88V88l-48.266-6.85V46.145z"/>
              </svg>
              <span className="text-xs font-bold text-slate-200">Administrator: Command Prompt</span>
            </div>
            {/* Windows 11 Window Controls (Minimize, Maximize, Close) */}
            <div className="flex items-center gap-3 text-slate-400">
              <Minus size={12} className="hover:text-white cursor-pointer" />
              <Square size={10} className="hover:text-white cursor-pointer" />
              <X size={13} className="hover:text-rose-400 cursor-pointer" />
            </div>
          </div>

          {/* Terminal Output Body */}
          <div className="p-4 sm:p-5 bg-[#070a12] text-slate-200 space-y-1.5 leading-relaxed font-mono text-xs sm:text-sm">
            <div className="text-white font-bold pb-1">
              <span>{simData.promptPath}&gt; </span>
              <u className="text-white font-bold underline font-mono">{simData.command}</u>
            </div>

            {simData.outputLines.map((line, idx) => (
              <div key={idx} className="text-slate-300 whitespace-pre">
                {line}
              </div>
            ))}

            <div className="pt-2 text-white font-bold flex items-center">
              <span>{simData.nextPrompt}&gt;</span>
              <span className="inline-block w-2 h-4 bg-[#04AA6D] animate-pulse ml-1 align-middle shadow-[0_0_8px_#04AA6D]" />
            </div>
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Zoom Modal */}
      {isZoomed && imageSrc && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
          <img
            src={imageSrc}
            alt="Zoomed CMD screenshot"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-slate-700 object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
