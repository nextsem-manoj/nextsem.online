"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdSenseBanner from "../components/AdSenseBanner";
import { auth, signInWithGoogle, db } from "../lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useProgress } from "../context/ProgressContext";
import { coursePhases } from "../data/courseData";
import {
  Code, Palette, Cpu, Cloud, Layers, FileCode, Briefcase, Rocket, Star, LogOut, Sun, Moon, Coffee
} from "lucide-react";

interface HistoryLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

interface ModuleItem {
  id: string;
  title: string;
  subtitle: string;
  statusLabel: string;
  description: string;
  firstChapterId: string;
  color: string;
  renderIllustration: () => React.JSX.Element;
}

const modules: ModuleItem[] = [
  {
    id: "cli",
    title: "Windows commands Module 1",
    subtitle: "LEVEL 1 • RECOMMENDED",
    statusLabel: "CMD.EXE Terminal Workstation",
    description: "Master command prompt operations, directory navigation, file management, and diagnostics.",
    firstChapterId: "cmd",
    color: "#8b5cf6",
    renderIllustration: () => (
      <svg viewBox="0 0 200 200" className="w-56 h-56">
        <defs>
          <filter id="glow-violet" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="violet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="50" fill="url(#violet-grad)" opacity="0.15" />
        <g transform="translate(60, 50)" className="animate-pulse">
          <path d="M5,5 L28,2 L28,25 L5,25 Z" fill="#0078d4" opacity="0.9" />
          <path d="M32,2 L55,5 L55,25 L32,25 Z" fill="#0078d4" opacity="0.9" />
          <path d="M5,29 L28,29 L28,52 L5,49 Z" fill="#0078d4" opacity="0.9" />
          <path d="M32,29 L55,29 L55,49 L32,52 Z" fill="#0078d4" opacity="0.9" />
        </g>
        <g transform="translate(85, 90)" filter="url(#glow-violet)">
          <rect x="0" y="0" width="80" height="55" rx="6" fill="#030712" stroke="#8b5cf6" strokeWidth="1.5" />
          <line x1="0" y1="12" x2="80" y2="12" stroke="#2a3347" strokeWidth="1" />
          <circle cx="6" cy="6" r="1.5" fill="#ef4444" />
          <circle cx="12" cy="6" r="1.5" fill="#f59e0b" />
          <circle cx="18" cy="6" r="1.5" fill="#10b981" />
          <text x="6" y="32" fill="#39FF14" fontStyle="normal" fontWeight="bold" fontFamily="monospace" fontSize="16" letterSpacing="0">
            &gt;_
          </text>
          <rect x="32" y="21" width="6" height="12" fill="#39FF14" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0;0.8" dur="1s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
    )
  },
  {
    id: "p0",
    title: "Introduction to Coding",
    subtitle: "LEVEL 2 • RECOMMENDED",
    statusLabel: "Developer Setup & Git",
    description: "Install runtime dependencies, set up visual editor sandboxes, and initialize git repositories.",
    firstChapterId: "p0-setup",
    color: "#c084fc",
    renderIllustration: () => (
      <svg viewBox="0 0 200 200" className="w-56 h-56">
        <defs>
          <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g filter="url(#glow-purple)" transform="translate(100, 100)">
          <rect x="-35" y="-35" width="70" height="70" rx="14" fill="#5b2c6f" opacity="0.25" stroke="#c084fc" strokeWidth="3.5" />
          <circle cx="-15" cy="15" r="5" fill="#c084fc" />
          <circle cx="15" cy="-15" r="5" fill="#c084fc" />
          <circle cx="15" cy="15" r="5" fill="#c084fc" />
          <line x1="-15" y1="15" x2="15" y2="15" stroke="#c084fc" strokeWidth="2" />
          <line x1="15" y1="-15" x2="15" y2="15" stroke="#c084fc" strokeWidth="2" />
          <text x="0" y="5" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="monospace">
            {"<>"}
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "p1",
    title: "Basics of Web Dev",
    subtitle: "LEVEL 3 • CORE PATH",
    statusLabel: "HTML5 Structuring",
    description: "Structure web documents using tags, lists, forms, and dynamic components.",
    firstChapterId: "p1-1-intro-and-text",
    color: "#3b82f6",
    renderIllustration: () => (
      <svg viewBox="0 0 200 200" className="w-56 h-56">
        <defs>
          <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <rect x="35" y="60" width="130" height="80" rx="8" fill="#11111a" stroke="#1e1b4b" strokeWidth="3" />
        <rect x="42" y="67" width="116" height="66" rx="4" fill="#050508" stroke="#312e81" strokeWidth="1" />
        <path d="M20,140 L180,140 L170,148 L30,148 Z" fill="#1e1e2f" stroke="#3b82f6" strokeWidth="2" />
        <rect x="44" y="69" width="112" height="10" fill="#1e1b4b" />
        <circle cx="50" cy="74" r="2" fill="#ef4444" />
        <circle cx="56" cy="74" r="2" fill="#eab308" />
        <circle cx="62" cy="74" r="2" fill="#39FF14" />
        <g filter="url(#glow-blue)" transform="translate(100, 108)">
          <text x="0" y="0" fill="#3b82f6" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="monospace">
            {"</>"}
          </text>
        </g>
      </svg>
    )
  },
  {
    id: "p2",
    title: "Advanced HTML/CSS",
    subtitle: "LEVEL 4 • DESIGN PATH",
    statusLabel: "CSS3 Styling & Layouts",
    description: "Design layouts with variables, Flexbox, Grids, and transitions.",
    firstChapterId: "p2-1-selectors",
    color: "#2dd4bf",
    renderIllustration: () => (
      <svg viewBox="0 0 200 200" className="w-56 h-56">
        <defs>
          <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <rect x="40" y="40" width="120" height="120" rx="20" fill="#0c0c14" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />
        <g filter="url(#glow-teal)">
          <rect x="55" y="55" width="42" height="42" rx="10" fill="#2dd4bf" opacity="0.2" stroke="#2dd4bf" strokeWidth="2" />
          <circle cx="130" cy="75" r="22" fill="#14b8a6" opacity="0.3" stroke="#14b8a6" strokeWidth="2" />
        </g>
        <rect x="75" y="85" width="50" height="30" rx="8" fill="#1e1b4b" stroke="#2dd4bf" strokeWidth="2" />
        <text x="100" y="104" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          CSS3
        </text>
      </svg>
    )
  },
  {
    id: "p3",
    title: "JavaScript Fundamentals",
    subtitle: "LEVEL 5 • CORE PATH",
    statusLabel: "Variables & DOM Events",
    description: "Program dynamic browser features using variables, loops, arrays, and event handlers.",
    firstChapterId: "p3-1-basics",
    color: "#fbbf24",
    renderIllustration: () => (
      <svg viewBox="0 0 200 200" className="w-56 h-56">
        <defs>
          <filter id="glow-yellow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <circle cx="100" cy="100" r="60" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
        <g filter="url(#glow-yellow)" transform="translate(100, 100)">
          <rect x="-30" y="-30" width="60" height="60" rx="12" fill="#27273a" stroke="#fbbf24" strokeWidth="3" />
          <rect x="-35" y="-18" width="5" height="6" fill="#fbbf24" />
          <rect x="-35" y="-4" width="5" height="6" fill="#fbbf24" />
          <rect x="-35" y="10" width="5" height="6" fill="#fbbf24" />
          <rect x="30" y="-18" width="5" height="6" fill="#fbbf24" />
          <rect x="30" y="-4" width="5" height="6" fill="#fbbf24" />
          <rect x="30" y="10" width="5" height="6" fill="#fbbf24" />
          <path d="M -5,-14 L 8,-4 L -2,0 L 5,14 L -8,4 L 1,0 Z" fill="#fbbf24" />
        </g>
      </svg>
    )
  },
  {
    id: "p4",
    title: "React Basics",
    subtitle: "LEVEL 6 • FRAMEWORK PATH",
    statusLabel: "React SPAs & Context",
    description: "Build reactive single page frontends using components, hooks, states, and global Context API.",
    firstChapterId: "p4-1-jsx",
    color: "#ef4444",
    renderIllustration: () => (
      <svg viewBox="0 0 200 200" className="w-56 h-56">
        <defs>
          <filter id="glow-react" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g filter="url(#glow-react)" transform="translate(100, 100)">
          <circle cx="0" cy="0" r="10" fill="#ef4444" />
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="15s"
              repeatCount="indefinite"
            />
            <ellipse cx="0" cy="0" rx="55" ry="20" fill="none" stroke="#ef4444" strokeWidth="2.5" />
          </g>
          <g transform="rotate(60)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="15s"
              repeatCount="indefinite"
            />
            <ellipse cx="0" cy="0" rx="55" ry="20" fill="none" stroke="#ef4444" strokeWidth="2.5" />
          </g>
          <g transform="rotate(120)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="15s"
              repeatCount="indefinite"
            />
            <ellipse cx="0" cy="0" rx="55" ry="20" fill="none" stroke="#ef4444" strokeWidth="2.5" />
          </g>
        </g>
      </svg>
    )
  },
  {
    id: "p5",
    title: "Backend & APIs",
    subtitle: "LEVEL 7 • BACKEND PATH",
    statusLabel: "Express Servers & MongoDB",
    description: "Build APIs using Node, Express, MongoDB, and setup cloud hosting integrations.",
    firstChapterId: "p5-1-node",
    color: "#22c55e",
    renderIllustration: () => (
      <svg viewBox="0 0 200 200" className="w-56 h-56">
        <defs>
          <filter id="glow-backend" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g filter="url(#glow-backend)" transform="translate(100, 100)">
          <rect x="-35" y="-35" width="70" height="70" rx="12" fill="#14532d" opacity="0.3" stroke="#22c55e" strokeWidth="3" />
          <ellipse cx="0" cy="-15" rx="18" ry="6" fill="#15803d" stroke="#22c55e" strokeWidth="2" />
          <path d="M-18,-15 L-18,5 A18,6 0 0,0 18,5 L18,-15 Z" fill="#15803d" stroke="#22c55e" strokeWidth="2" />
          <path d="M-18,5 L-18,22 A18,6 0 0,0 18,22 L18,5 Z" fill="#15803d" stroke="#22c55e" strokeWidth="2" />
        </g>
      </svg>
    )
  },
  {
    id: "p6",
    title: "Capstone Projects",
    subtitle: "LEVEL 8 • PORTFOLIO PATH",
    statusLabel: "Full Stack Applications",
    description: "Construct capstone frontend applications, build portfolio, and deploy.",
    firstChapterId: "p6-1-portfolio",
    color: "#94a3b8",
    renderIllustration: () => (
      <svg viewBox="0 0 200 200" className="w-56 h-56">
        <defs>
          <filter id="glow-slate" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g filter="url(#glow-slate)" transform="translate(100, 100)">
          <circle cx="0" cy="0" r="40" fill="#334155" opacity="0.3" stroke="#94a3b8" strokeWidth="3" />
          <polygon points="0,-25 7,-9 24,-7 12,5 15,22 0,14 -15,22 -12,5 -24,-7 -7,-9" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
        </g>
      </svg>
    )
  },
  {
    id: "p7",
    title: "Placement Prep",
    subtitle: "LEVEL 9 • PLACEMENT PREP",
    statusLabel: "Interview & Resume Funnels",
    description: "Reconcile placement mock funnels, write resumes, and do freelance projects.",
    firstChapterId: "p7-1-interview",
    color: "#f472b6",
    renderIllustration: () => (
      <svg viewBox="0 0 200 200" className="w-56 h-56">
        <defs>
          <filter id="glow-pink" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g filter="url(#glow-pink)" transform="translate(100, 100)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,5; 0,-5; 0,5"
              dur="3s"
              repeatCount="indefinite"
            />
            <path d="M0,-35 C5,-15 15,-10 15,15 L-15,15 C-15,-10 -5,-15 0,-35 Z" fill="#db2777" stroke="#f472b6" strokeWidth="2.5" />
            <polygon points="-15,10 -25,25 -15,20" fill="#be185d" />
            <polygon points="15,10 25,25 15,20" fill="#be185d" />
            <path d="M-5,15 L-10,30 L0,22 L10,30 L5,15 Z" fill="#ef4444" />
          </g>
        </g>
      </svg>
    )
  }
];

interface VirtualFS {
  [key: string]: {
    isDir: boolean;
    contents?: string;
    contentsMap?: { [key: string]: string };
  };
}

interface StepQuestion {
  question: string;
  options: string[];
  answer: string;
}

interface StepType {
  id: string;
  title: string;
  instruction: string;
  expectedCommand?: string;
  hint?: string;
  preview?: string;
  successMsg: string;
  isTest?: boolean;
  getOutputs?: (fs: VirtualFS) => string[];
  questions?: StepQuestion[];
  suggestedCommands?: string[];
}

const TERMINAL_STEPS: StepType[] = [
  {
    id: "dir",
    title: "1. Listing Directory Contents (dir)",
    instruction: "Before doing anything, you need to see what files exist in the current folder. Type the 'dir' command and hit Enter.",
    expectedCommand: "dir",
    hint: "dir",
    preview: "Lists all files, folders, and subdirectories inside your current folder path.",
    successMsg: "Excellent! The 'dir' command lists all files, folders, and directories in your current path.",
    getOutputs: (fs: VirtualFS) => [
      " Volume in drive C has no label.",
      " Volume Serial Number is B48C-9F12",
      "",
      " Directory of C:\\Users\\User",
      "",
      "07/08/2026  04:33 PM    <DIR>          .",
      "07/08/2026  04:33 PM    <DIR>          ..",
      "07/08/2026  04:33 PM    <DIR>          Desktop",
      "07/08/2026  04:33 PM    <DIR>          Documents",
      "07/08/2026  04:33 PM    <DIR>          Downloads",
      ...Object.keys(fs).map(name => {
        const item = fs[name];
        const dateStr = "07/08/2026  04:35 PM";
        if (item.isDir) {
          return `${dateStr}    <DIR>          ${name}`;
        } else {
          return `${dateStr}                18 ${name}`;
        }
      }),
      `               ${Object.keys(fs).filter(k => !fs[k].isDir).length} File(s)             18 bytes`,
      `               ${5 + Object.keys(fs).filter(k => fs[k].isDir).length} Dir(s)   98,421,098,112 bytes free`
    ]
  },
  {
    id: "mkdir",
    title: "2. Creating Folders (mkdir)",
    instruction: "Let's create a workspace folder. Type 'mkdir nextsem' to create a new folder named 'nextsem'.",
    expectedCommand: "mkdir nextsem",
    hint: "mkdir nextsem",
    preview: "Creates a new subdirectory folder named 'nextsem' inside the current location.",
    successMsg: "Perfect! 'mkdir' (Make Directory) is the standard command to create folders on Windows command terminal.",
    getOutputs: (fs: VirtualFS) => {
      fs["nextsem"] = { isDir: true, contentsMap: {} };
      return [
        "Directory 'nextsem' created successfully."
      ];
    }
  },
  {
    id: "cd",
    title: "3. Navigating Directories (cd)",
    instruction: "To enter the folder you just created, change the active directory. Type 'cd nextsem' and hit Enter.",
    expectedCommand: "cd nextsem",
    hint: "cd nextsem",
    preview: "Navigates into the newly created 'nextsem' folder, changing your active directory prompt.",
    successMsg: "Awesome! 'cd' (Change Directory) shifts your active path. Notice the terminal prompt updated to C:\\Users\\User\\nextsem.",
    getOutputs: () => []
  },
  {
    id: "echo",
    title: "4. Writing Files (echo >)",
    instruction: "Now let's write content to a file inside nextsem. Type 'echo learn command terminal > index.txt' to create a text file.",
    expectedCommand: "echo learn command terminal > index.txt",
    hint: "echo learn command terminal > index.txt",
    preview: "Creates a new text file named 'index.txt' containing the text 'learn command terminal'.",
    successMsg: "Great job! The '>' redirect operator takes the output of 'echo' and writes it to a file named 'index.txt'.",
    getOutputs: (fs: VirtualFS) => {
      if (fs["nextsem"] && fs["nextsem"].contentsMap) {
        fs["nextsem"].contentsMap["index.txt"] = "learn command terminal";
      }
      return [
        "Wrote 22 bytes to index.txt"
      ];
    }
  },
  {
    id: "type",
    title: "5. Reading Files (type)",
    instruction: "To check the contents of a file without editing, print its text. Type 'type index.txt' and hit Enter.",
    expectedCommand: "type index.txt",
    hint: "type index.txt",
    preview: "Outputs the text contents of the specified file directly onto the command line screen.",
    successMsg: "Outstanding! The 'type' command outputs file contents directly into the Command Prompt screen.",
    getOutputs: (fs: VirtualFS) => {
      const content = fs["nextsem"]?.contentsMap?.["index.txt"] || "learn command terminal";
      return [content];
    }
  },
  {
    id: "copy",
    title: "6. Copying Files (copy)",
    instruction: "Copy 'index.txt' to create a backup file. Type 'copy index.txt index_backup.txt' and hit Enter.",
    expectedCommand: "copy index.txt index_backup.txt",
    hint: "copy index.txt index_backup.txt",
    preview: "Duplicates the specified file, creating a backup copy named 'index_backup.txt' in the same folder.",
    successMsg: "Superb! The 'copy' command duplicates files in your active workspace directory.",
    getOutputs: (fs: VirtualFS) => {
      if (fs["nextsem"] && fs["nextsem"].contentsMap) {
        fs["nextsem"].contentsMap["index_backup.txt"] = "learn command terminal";
      }
      return ["        1 file(s) copied."];
    }
  },
  {
    id: "ren",
    title: "7. Renaming Files (ren)",
    instruction: "Let's change the name of the backup file. Type 'ren index_backup.txt backup.txt' and press Enter.",
    expectedCommand: "ren index_backup.txt backup.txt",
    hint: "ren index_backup.txt backup.txt",
    preview: "Renames the file 'index_backup.txt' to 'backup.txt' without moving it.",
    successMsg: "Perfect! 'ren' (Rename) updates the file name without moving or duplicate copying it.",
    getOutputs: (fs: VirtualFS) => {
      if (fs["nextsem"] && fs["nextsem"].contentsMap) {
        delete fs["nextsem"].contentsMap["index_backup.txt"];
        fs["nextsem"].contentsMap["backup.txt"] = "learn command terminal";
      }
      return [];
    }
  },
  {
    id: "tree",
    title: "8. Displaying Folder Trees (tree)",
    instruction: "To view your directory structure graphically, print it in a tree diagram. Type 'tree' and press Enter.",
    expectedCommand: "tree",
    hint: "tree",
    preview: "Displays folder hierarchies recursively using ASCII lines.",
    successMsg: "Fascinating! The 'tree' command displays folder hierarchies recursively using ASCII lines.",
    getOutputs: () => [
      "Folder PATH listing for volume C",
      "Volume serial number is B48C-9F12",
      "C:\\Users\\User\\nextsem",
      "└── (No subfolders exist)"
    ]
  },
  {
    id: "ipconfig",
    title: "9. Network Configuration Diagnostics (ipconfig)",
    instruction: "Let's run some network commands. Type 'ipconfig' to query the local network adapter interfaces.",
    expectedCommand: "ipconfig",
    hint: "ipconfig",
    preview: "Displays active local network adapters, IP addresses, subnet masks, and gateways.",
    successMsg: "Excellent! 'ipconfig' is the primary diagnostic utility to check IP addresses, subnets, and gateways.",
    getOutputs: () => [
      "",
      "Windows IP Configuration",
      "",
      "Ethernet adapter Ethernet0:",
      "   Connection-specific DNS Suffix  . : local",
      "   IPv4 Address. . . . . . . . . . . : 192.168.1.105",
      "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
      "   Default Gateway . . . . . . . . . : 192.168.1.1"
    ]
  },
  {
    id: "ping",
    title: "10. Pinging Servers (ping)",
    instruction: "Lastly, test network connectivity to the Nextsem server. Type 'ping nextsem.online' and press Enter.",
    expectedCommand: "ping nextsem.online",
    hint: "ping nextsem.online",
    preview: "Sends four ICMP echo packets to test network connectivity and latency with nextsem.online.",
    successMsg: "Outstanding! You have completed all lessons and mastered basic Windows Command Prompt utilities! +1000 XP!",
    getOutputs: () => [
      "",
      "Pinging nextsem.online [199.36.158.100] with 32 bytes of data:",
      "Reply from 199.36.158.100: bytes=32 time=14ms TTL=54",
      "Reply from 199.36.158.100: bytes=32 time=15ms TTL=54",
      "Reply from 199.36.158.100: bytes=32 time=13ms TTL=54",
      "Reply from 199.36.158.100: bytes=32 time=16ms TTL=54",
      "",
      "Ping statistics for 199.36.158.100:",
      "    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),",
      "Approximate round trip times in milli-seconds:",
      "    Minimum = 13ms, Maximum = 16ms, Average = 14ms"
    ]
  }
];

const SUGGESTED_COMMANDS_MAP: Record<string, string[]> = {
  dir: ["dir", "ls", "help", "cd .."],
  mkdir: ["mkdir nextsem", "md nextsem", "mkdir folder", "dir"],
  cd: ["cd nextsem", "cd ..", "cd", "dir"],
  echo: ["echo learn command terminal > index.txt", "echo index.txt", "type index.txt", "dir"],
  type: ["type index.txt", "cat index.txt", "type index_backup.txt", "dir"],
  copy: ["copy index.txt index_backup.txt", "cp index.txt index_backup.txt", "move index.txt index_backup.txt", "type index.txt"],
  move: ["move index_backup.txt backup.txt", "mv index_backup.txt backup.txt", "copy index_backup.txt backup.txt", "dir"],
  del: ["del backup.txt", "rm backup.txt", "del index.txt", "dir"],
  ren: ["ren index.txt welcome.txt", "rename index.txt welcome.txt", "move index.txt welcome.txt", "dir"],
  ipconfig: ["ipconfig", "ifconfig", "ping", "systeminfo"],
  ping: ["ping nextsem.online", "ping 127.0.0.1", "ipconfig", "tracert nextsem.online"],
  systeminfo: ["systeminfo", "sysinfo", "tasklist", "ipconfig"],
  tasklist: ["tasklist", "ps", "taskkill", "systeminfo"],
  node: ["node -v", "node --version", "npm -v", "node"],
  npm_ver: ["npm -v", "npm --version", "node -v", "npm init"],
  npm_init: ["npm init -y", "npm init", "npm install", "node -v"],
  npm_install: ["npm install express", "npm run dev", "npm init -y", "yarn add express"],
  git_ver: ["git --version", "git -v", "git init", "git status"],
  git_init: ["git init", "git clone", "git status", "git add"],
  git_status: ["git status", "git add .", "git commit", "git log"],
  git_add: ["git add .", "git commit", "git status", "git init"],
  git_commit: ["git commit -m \"initial commit\"", "git commit", "git add .", "git push"],
  npm_run: ["npm run dev", "npm start", "npm build", "node index.js"],
  help: ["help", "help dir", "cls", "exit"],
  chkdsk: ["chkdsk", "chkdsk /f", "chkdsk /r", "vol"],
  attrib: ["attrib", "attrib +r", "icacls", "dir"]
};

export default function HomeClient() {
  const router = useRouter();
  
  // User Authentication
  const [currentUser, setCurrentUser] = useState<{ uid: string; name: string; email: string; avatar: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // User Progress and Swiper Slider Dashboard
  const { completedChapters } = useProgress();
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);

  // Read initial active card from query parameter (e.g. /?active=2)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const activeParam = params.get('active');
      if (activeParam) {
        const idx = parseInt(activeParam, 10);
        if (!isNaN(idx) && idx >= 0 && idx < modules.length) {
          setActiveModuleIdx(idx);
        }
      }
    }
  }, []);

  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragMove, setDragMove] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStart === null) return;
    setDragMove(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (dragStart === null || dragMove === null) return;
    const diff = dragStart - dragMove;
    if (diff > 50) {
      setActiveModuleIdx(prev => (prev + 1) % modules.length);
    } else if (diff < -50) {
      setActiveModuleIdx(prev => (prev - 1 + modules.length) % modules.length);
    }
    setDragStart(null);
    setDragMove(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart === null) return;
    setDragMove(e.clientX);
  };
  const handleMouseUp = () => {
    if (dragStart === null || dragMove === null) return;
    const diff = dragStart - dragMove;
    if (diff > 50) {
      setActiveModuleIdx(prev => (prev + 1) % modules.length);
    } else if (diff < -50) {
      setActiveModuleIdx(prev => (prev - 1 + modules.length) % modules.length);
    }
    setDragStart(null);
    setDragMove(null);
  };

  // Terminal state
  const [stepIdx, setStepIdx] = useState(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [currentPath, setCurrentPath] = useState("C:\\Users\\User");
  const [virtualFS] = useState<VirtualFS>({});
  
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState<'waiting' | 'correct' | 'wrong'>('waiting');
  const [showHint, setShowHint] = useState(false);
  const [courseCertified, setCourseCertified] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [showModulesMenu, setShowModulesMenu] = useState(false);
  const [showStarsMenu, setShowStarsMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isAutoTyping, setIsAutoTyping] = useState(false);
  const [autoCompleteEnabled, setAutoCompleteEnabled] = useState(false);

  // Points and progress tracking
  const [points, setPoints] = useState(0);
  const [maxProgressReached, setMaxProgressReached] = useState(0);

  // Offline mode and command execution loader states
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [workingMessage, setWorkingMessage] = useState("Processing command execution...");
  
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sliding Cards State for Instructions Column
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (idx: number) => {
    if (cardContainerRef.current) {
      const container = cardContainerRef.current;
      const cardWidth = container.clientWidth;
      container.scrollTo({
        left: idx * cardWidth,
        behavior: "smooth"
      });
      setActiveCardIdx(idx);
    }
  };

  const handleCardScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth || 1;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx !== activeCardIdx) {
      setActiveCardIdx(newIdx);
    }
  };
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoSubmitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoMoveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const modulesMenuRef = useRef<HTMLDivElement>(null);
  const starsMenuRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Sync progress to Firebase Firestore
  const saveOnlineProgress = async (uid: string, step: number, pts: number, certified: boolean) => {
    try {
      const userDocRef = doc(db, "users_progress", uid);
      await setDoc(userDocRef, {
        stepIdx: step,
        points: pts,
        courseCertified: certified,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (e) {
      console.error("Error saving online progress:", e);
    }
  };

  // Load and reconcile progress from Firestore
  const loadOnlineProgress = async (uid: string, userEmail: string) => {
    try {
      const userDocRef = doc(db, "users_progress", uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        
        const localStep = parseInt(localStorage.getItem(`nextsem_terminal_step_${userEmail}`) || "0", 10);
        const localPoints = parseInt(localStorage.getItem(`nextsem_terminal_points_${userEmail}`) || "0", 10);
        const localCertified = localStorage.getItem(`nextsem_terminal_certified_${userEmail}`) === "true";
        const localMaxProgress = parseInt(localStorage.getItem(`nextsem_terminal_max_progress_${userEmail}`) || "0", 10);
        
        const dbStep = data.stepIdx || 0;
        const dbPoints = data.points || 0;
        const dbCertified = data.courseCertified || false;
        
        if (dbStep > localStep || (dbStep === localStep && dbPoints > localPoints) || dbCertified) {
          setStepIdx(dbStep);
          setPoints(dbPoints);
          setCourseCertified(dbCertified);
          setMaxProgressReached(dbStep);
          
          localStorage.setItem(`nextsem_terminal_step_${userEmail}`, dbStep.toString());
          localStorage.setItem(`nextsem_terminal_points_${userEmail}`, dbPoints.toString());
          localStorage.setItem(`nextsem_terminal_certified_${userEmail}`, dbCertified.toString());
          localStorage.setItem(`nextsem_terminal_max_progress_${userEmail}`, dbStep.toString());
        } else {
          await saveOnlineProgress(uid, localStep, localPoints, localCertified);
          setStepIdx(localStep);
          setPoints(localPoints);
          setCourseCertified(localCertified);
          setMaxProgressReached(localMaxProgress || localStep);
        }
      } else {
        const localStep = parseInt(localStorage.getItem(`nextsem_terminal_step_${userEmail}`) || "0", 10);
        const localPoints = parseInt(localStorage.getItem(`nextsem_terminal_points_${userEmail}`) || "0", 10);
        const localCertified = localStorage.getItem(`nextsem_terminal_certified_${userEmail}`) === "true";
        const localMaxProgress = parseInt(localStorage.getItem(`nextsem_terminal_max_progress_${userEmail}`) || "0", 10);
        
        await saveOnlineProgress(uid, localStep, localPoints, localCertified);
        setStepIdx(localStep);
        setPoints(localPoints);
        setCourseCertified(localCertified);
        setMaxProgressReached(localMaxProgress || localStep);
      }
    } catch (e) {
      console.error("Error loading online progress:", e);
    }
  };
  const handlePlayOffline = () => {
    setIsOfflineMode(true);
    const offlineProfile = {
      uid: "offline",
      name: "Offline Player",
      email: "offline@nextsem.local",
      avatar: ""
    };
    setCurrentUser(offlineProfile);
    localStorage.setItem("nextsem_user", JSON.stringify(offlineProfile));
    
    // Restore offline progress
    const certified = localStorage.getItem(`nextsem_terminal_certified_offline`) === "true";
    setCourseCertified(certified);
    
    const savedStep = localStorage.getItem(`nextsem_terminal_step_offline`);
    setStepIdx(savedStep ? parseInt(savedStep, 10) : 0);
    
    const savedPoints = localStorage.getItem(`nextsem_terminal_points_offline`);
    setPoints(savedPoints ? parseInt(savedPoints, 10) : 0);
    
    const savedMaxProgress = localStorage.getItem(`nextsem_terminal_max_progress_offline`);
    setMaxProgressReached(savedMaxProgress ? parseInt(savedMaxProgress, 10) : 0);
  };

  // Auth synchronization & progress restoration
  useEffect(() => {
    // Evict any stored offline session immediately — Google login is now mandatory.
    // This ensures users who were previously in offline mode are redirected to the auth gate.
    try {
      const savedUser = localStorage.getItem("nextsem_user");
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        if (parsed?.uid === "offline") {
          localStorage.removeItem("nextsem_user");
        }
      }
    } catch (_) { /* noop */ }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthLoading(true);
      if (user) {
        const profile = {
          uid: user.uid,
          name: user.displayName || "User",
          email: user.email || "",
          avatar: user.photoURL || ""
        };
        setCurrentUser(profile);
        localStorage.setItem("nextsem_user", JSON.stringify(profile));
        setIsOfflineMode(false);
        setAvatarError(false);
        
        // Load and reconcile online progress
        loadOnlineProgress(user.uid, user.email || "guest");
      } else {
        setCurrentUser(null);
        localStorage.removeItem("nextsem_user");
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Auto-focus terminal input
  const focusTerminal = () => {
    if (typeof window !== "undefined") {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) return; // Do not focus on mobile/tablet to avoid keyboard popup
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    setActiveCardIdx(0);
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollLeft = 0;
    }
    if (currentUser) {
      focusTerminal();
    }
  }, [stepIdx, currentUser]);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  // Load Exam Question when stepIdx or currentQuestionIdx changes (if it is a test)
  useEffect(() => {
    const currentStep = TERMINAL_STEPS[stepIdx];
    if (currentStep && currentStep.isTest && currentStep.questions) {
      const q = currentStep.questions[currentQuestionIdx];
      if (q) {
        setHistory([
          { text: "==================================================", type: "system" },
          { text: `        EXAM MODULE: ${currentStep.title.toUpperCase()}`, type: "system" },
          { text: "==================================================", type: "system" },
          { text: "", type: "system" },
          { text: `Question ${currentQuestionIdx + 1} of ${currentStep.questions.length}:`, type: "system" },
          { text: q.question, type: "system" },
          { text: "", type: "system" },
          ...q.options.map(opt => ({ text: opt, type: "system" as const })),
          { text: "", type: "system" }
        ]);
        setInputVal("");
      }
    }
  }, [stepIdx, currentQuestionIdx]);

  // Prefetch dynamic pages
  useEffect(() => {
    router.prefetch("/course");
  }, [router]);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (e) {
      console.error("Google Sign-In failed:", e);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Clear offline user as well
      localStorage.removeItem("nextsem_user");
      setCurrentUser(null);
      setIsOfflineMode(false);
      setCourseCertified(false);
      setStepIdx(0);
      setPoints(0);
      setMaxProgressReached(0);
    } catch (e) {
      console.error("Sign-out failed:", e);
    }
  };

  const formatInstructionText = (text: string) => {
    if (!text) return "";
    
    const parts: { text: string; isCode: boolean }[] = [];
    let currentText = "";
    let inCode = false;
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      
      if (char === "'" || char === "’" || char === "‘") {
        const prevChar = i > 0 ? text[i - 1] : "";
        const nextChar = i < text.length - 1 ? text[i + 1] : "";
        const isLetter = (c: string) => /[a-zA-Z]/.test(c);
        
        if (isLetter(prevChar) && isLetter(nextChar)) {
          currentText += "'";
        } else {
          if (currentText) {
            parts.push({ text: currentText, isCode: inCode });
            currentText = "";
          }
          inCode = !inCode;
        }
      } else {
        currentText += char;
      }
    }
    
    if (currentText) {
      parts.push({ text: currentText, isCode: inCode });
    }
    
    return parts.map((part, index) => {
      if (part.isCode) {
        return (
          <code 
            key={index} 
            translate="no"
            className="notranslate mx-1 px-1.5 py-0.5 rounded bg-slate-950/80 border border-white/5 text-[#39FF14] font-mono text-[11px] font-black select-text shadow-sm"
          >
            {part.text}
          </code>
        );
      }
      return <span key={index}>{part.text}</span>;
    });
  };

  const startAutoTyping = () => {
    const currentStep = TERMINAL_STEPS[stepIdx];
    // Do not auto-type answers during an Exam!
    if (currentStep.isTest) return;

    setIsAutoTyping(true);
    const expected = currentStep.expectedCommand;
    if (!expected) return;

    let currentIndex = 0;
    let currentText = "";

    if (inputVal && expected.toLowerCase().startsWith(inputVal.toLowerCase())) {
      currentText = inputVal;
      currentIndex = inputVal.length;
    } else {
      setInputVal("");
    }

    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    typingIntervalRef.current = setInterval(() => {
      if (currentIndex < expected.length) {
        currentText += expected[currentIndex];
        setInputVal(currentText);
        currentIndex++;
      } else {
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        setIsAutoTyping(false);
      }
    }, 120);
  };

  const resetInactivityTimer = () => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    setIsAutoTyping(false);

    if (!autoCompleteEnabled) return;

    const currentStep = TERMINAL_STEPS[stepIdx];
    if (courseCertified || showSuccessOverlay || !currentUser || currentStep?.isTest) return;

    inactivityTimerRef.current = setTimeout(() => {
      setShowHint(true);
      startAutoTyping();
    }, 6000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isAutoTyping) {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      setIsAutoTyping(false);
    }
    setInputVal(e.target.value);
    resetInactivityTimer();
    setFeedbackStatus('waiting');
  };

  const handleInputKeyDown = () => {
    if (isAutoTyping) {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      setIsAutoTyping(false);
    }
    resetInactivityTimer();
  };

  // Reset inactivity timer when stepIdx, currentUser, or autoCompleteEnabled changes
  useEffect(() => {
    resetInactivityTimer();
    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, [stepIdx, currentUser, autoCompleteEnabled]);

  // Update terminal history with step instructions
  useEffect(() => {
    if (!currentUser || courseCertified) return;
    const currentStep = TERMINAL_STEPS[stepIdx];
    const cleanTitle = currentStep.title.includes(". ") ? currentStep.title.split(". ")[1] : currentStep.title;
    
    const instructions: HistoryLine[] = [];
    instructions.push({ text: `================================================================================`, type: "system" });
    instructions.push({ text: `📖 LESSON ${stepIdx + 1}: ${cleanTitle}`, type: "system" });
    instructions.push({ text: `================================================================================`, type: "system" });
    instructions.push({ text: "", type: "system" });
    
    if (currentStep.isTest && currentStep.questions && currentStep.questions[currentQuestionIdx]) {
      const q = currentStep.questions[currentQuestionIdx];
      instructions.push({ text: `❓ EXAM QUESTION ${currentQuestionIdx + 1}:`, type: "system" });
      instructions.push({ text: q.question, type: "system" });
      instructions.push({ text: "", type: "system" });
      q.options.forEach((opt, oIdx) => {
        const letter = String.fromCharCode(65 + oIdx); // A, B, C, D
        instructions.push({ text: `   [ ${letter} ] ${opt}`, type: "system" });
      });
    } else {
      instructions.push({ text: currentStep.instruction, type: "system" });
    }
    
    instructions.push({ text: "", type: "system" });
    instructions.push({ text: `--------------------------------------------------------------------------------`, type: "system" });
    instructions.push({ text: `💡 Type the correct option or command below and press Enter to execute:`, type: "system" });
    instructions.push({ text: `--------------------------------------------------------------------------------`, type: "system" });
    instructions.push({ text: "", type: "system" });

    setHistory(instructions);
  }, [stepIdx, currentQuestionIdx, currentUser, courseCertified]);

  // Clean up and handle auto-move timer when success overlay is shown
  useEffect(() => {
    if (showSuccessOverlay) {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      // Auto move is disabled: let users navigate themselves
    }
    return () => {
      if (autoMoveTimerRef.current) {
        clearTimeout(autoMoveTimerRef.current);
        autoMoveTimerRef.current = null;
      }
    };
  }, [showSuccessOverlay]);

  const playSuccessSound = () => {
    if (typeof window !== "undefined") {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const audioCtx = new AudioContextClass();
        
        // Note 1
        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        gain1.gain.setValueAtTime(0.03, audioCtx.currentTime);
        osc1.start();
        osc1.stop(audioCtx.currentTime + 0.08);

        // Note 2
        setTimeout(() => {
          const osc2 = audioCtx.createOscillator();
          const gain2 = audioCtx.createGain();
          osc2.connect(gain2);
          gain2.connect(audioCtx.destination);
          osc2.type = "sine";
          osc2.frequency.setValueAtTime(659.25, audioCtx.currentTime); // E5
          gain2.gain.setValueAtTime(0.03, audioCtx.currentTime);
          osc2.start();
          osc2.stop(audioCtx.currentTime + 0.12);
        }, 60);

      } catch (e) {
        console.warn("Audio Context blocked:", e);
      }
    }
  };

  const playErrorSound = () => {
    if (typeof window !== "undefined") {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const audioCtx = new AudioContextClass();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } catch (e) {}
    }
  };

  function handleNextStep() {
    if (autoMoveTimerRef.current) {
      clearTimeout(autoMoveTimerRef.current);
      autoMoveTimerRef.current = null;
    }
    setShowSuccessOverlay(false);
    setFeedbackStatus('waiting');
    setShowHint(false);
    setInputVal("");
    setCurrentQuestionIdx(0);

    const emailKey = currentUser?.email || "offline";
    const isOffline = isOfflineMode || emailKey === "offline";

    if (stepIdx < TERMINAL_STEPS.length - 1) {
      const nextStepIdx = stepIdx + 1;
      setStepIdx(nextStepIdx);
      
      // Reset terminal path based on index
      if (nextStepIdx < 2) {
        setCurrentPath("C:\\Users\\User");
      } else {
        setCurrentPath("C:\\Users\\User\\nextsem");
      }

      setHistory([]);

      if (currentUser) {
        localStorage.setItem(`nextsem_terminal_step_${emailKey}`, nextStepIdx.toString());
        if (nextStepIdx > maxProgressReached) {
          setMaxProgressReached(nextStepIdx);
          localStorage.setItem(`nextsem_terminal_max_progress_${emailKey}`, nextStepIdx.toString());
        }

        // Sync to cloud if online
        if (!isOffline && currentUser.uid !== "offline") {
          saveOnlineProgress(currentUser.uid, nextStepIdx, points, false);
        }
      }
    } else {
      setCourseCertified(true);
      if (currentUser) {
        localStorage.setItem(`nextsem_terminal_certified_${emailKey}`, "true");

        // Sync to cloud if online
        if (!isOffline && currentUser.uid !== "offline") {
          saveOnlineProgress(currentUser.uid, stepIdx, points, true);
        }
      }
    }
  }

  const handlePrevStep = () => {
    if (stepIdx > 0) {
      const prevStepIdx = stepIdx - 1;
      setStepIdx(prevStepIdx);
      setCurrentPath(prevStepIdx < 2 ? "C:\\Users\\User" : "C:\\Users\\User\\nextsem");
      setInputVal("");
      setFeedbackStatus('waiting');
      setShowHint(false);
      setCurrentQuestionIdx(0);
      setHistory([]);
    }
  };

  const handleNextStepDirect = () => {
    if (stepIdx < TERMINAL_STEPS.length - 1) {
      const nextStepIdx = stepIdx + 1;
      setStepIdx(nextStepIdx);
      setCurrentPath(nextStepIdx < 2 ? "C:\\Users\\User" : "C:\\Users\\User\\nextsem");
      setInputVal("");
      setFeedbackStatus('waiting');
      setShowHint(false);
      setCurrentQuestionIdx(0);
      setHistory([]);
    } else {
      setCourseCertified(true);
    }
  };;

  const executeCommand = (command: string) => {
    if (isWorking || showSuccessOverlay || !currentUser) return;
    setFeedbackStatus('waiting');

    const currentStep = TERMINAL_STEPS[stepIdx];
    const emailKey = currentUser.email || "offline";
    const isOffline = isOfflineMode || emailKey === "offline";

    // 1. Clear input
    setInputVal("");

    // 2. Add command string to history
    let promptLineText = "";
    if (currentStep.isTest) {
      promptLineText = `ENTER CHOICE (A, B, C, D)> ${command}`;
    } else {
      promptLineText = `${currentPath}>${command}`;
    }
    setHistory(prev => [...prev, { text: promptLineText, type: "input" }]);

    // 3. Set Working state with dynamic message
    let msg = "Processing command execution...";
    const cmdLower = command.toLowerCase();
    if (cmdLower.includes("ping")) {
      msg = "Pinging server, awaiting echo response...";
    } else if (cmdLower.includes("ipconfig")) {
      msg = "Querying local network interface adapters...";
    } else if (cmdLower.includes("git")) {
      msg = "Traversing Git repository revision trees...";
    } else if (cmdLower.includes("npm")) {
      msg = "Fetching packages, auditing dependencies...";
    } else if (cmdLower.includes("mkdir")) {
      msg = "Allocating storage blocks for directory...";
    } else if (cmdLower.includes("systeminfo")) {
      msg = "Querying system hardware and OS specifications...";
    } else if (cmdLower.includes("tasklist")) {
      msg = "Listing active background processes and memory usage...";
    } else if (cmdLower.includes("chkdsk")) {
      msg = "Scanning partition sectors and checking filesystems...";
    }
    setWorkingMessage(msg);
    setIsWorking(true);

    // 4. Simulated 1-second system execution delay
    setTimeout(async () => {
      setIsWorking(false);

      // 5. Handle MCQ Quiz answers
      if (currentStep.isTest && currentStep.questions) {
        const q = currentStep.questions[currentQuestionIdx];
        const choice = command.toUpperCase();

        if (choice === q.answer) {
          playSuccessSound();

          // Reward points if first-time play
          let newPoints = points;
          const isFirstTime = stepIdx === maxProgressReached;
          if (isFirstTime) {
            newPoints = points + 50;
            setPoints(newPoints);
            localStorage.setItem(`nextsem_terminal_points_${emailKey}`, newPoints.toString());
            if (!isOffline && currentUser.uid !== "offline") {
              await saveOnlineProgress(currentUser.uid, stepIdx, newPoints, courseCertified);
            }
          }

          setHistory(prev => [
            ...prev,
            { text: `✓ Correct answer choice! ${isFirstTime ? "(+50 Points)" : ""}`, type: "output" },
            { text: "", type: "system" }
          ]);

          const nextQIdx = currentQuestionIdx + 1;
          if (nextQIdx < currentStep.questions.length) {
            setCurrentQuestionIdx(nextQIdx);
          } else {
            // Exam finished successfully!
            setShowSuccessOverlay(true);
            setFeedbackStatus('correct');
          }
        } else {
          // Wrong Answer: deduct points
          playErrorSound();
          const newPoints = Math.max(0, points - 25);
          setPoints(newPoints);
          localStorage.setItem(`nextsem_terminal_points_${emailKey}`, newPoints.toString());
          if (!isOffline && currentUser.uid !== "offline") {
            await saveOnlineProgress(currentUser.uid, stepIdx, newPoints, courseCertified);
          }
          setFeedbackStatus('wrong');

          setHistory(prev => {
            const filtered = prev.filter(h => h.type !== "error" && h.type !== "input");
            return [
              ...filtered,
              { text: `${promptLineText}`, type: "input" },
              { text: `❌ Incorrect choice. Deducted 25 Points. Please try again!`, type: "error" },
              { text: "", type: "system" }
            ];
          });
        }
        return;
      }

      // 6. Normal Command checks
      const expectedCmd = currentStep.expectedCommand;
      if (!expectedCmd) return;
      const normalizedInput = command.replace(/\s+/g, " ").toLowerCase();
      const normalizedExpected = expectedCmd.toLowerCase();

      const newHistory: HistoryLine[] = [];

      if (normalizedInput === normalizedExpected) {
        const outputs = currentStep.getOutputs ? currentStep.getOutputs(virtualFS) : [];
        outputs.forEach(line => {
          newHistory.push({ text: line, type: "output" });
        });

        // Reward points if first-time play
        let newPoints = points;
        const isFirstTime = stepIdx === maxProgressReached;
        if (isFirstTime) {
          newPoints = points + 20;
          setPoints(newPoints);
          localStorage.setItem(`nextsem_terminal_points_${emailKey}`, newPoints.toString());
          if (!isOffline && currentUser.uid !== "offline") {
            await saveOnlineProgress(currentUser.uid, stepIdx, newPoints, courseCertified);
          }
        }

        newHistory.push({ text: `✓ Command executed successfully! ${isFirstTime ? "(+20 Points)" : ""}`, type: "output" });
        newHistory.push({ text: "", type: "system" });

        if (normalizedInput === "cd nextsem") {
          setCurrentPath("C:\\Users\\User\\nextsem");
        }

        if (normalizedInput === "cls") {
          setHistory([]);
        } else {
          setHistory(prev => [...prev, ...newHistory]);
        }

        setShowSuccessOverlay(true);
        setFeedbackStatus('correct');
        playSuccessSound();
      } else {
        // Wrong Command: deduct points
        const newPoints = Math.max(0, points - 10);
        setPoints(newPoints);
        localStorage.setItem(`nextsem_terminal_points_${emailKey}`, newPoints.toString());
        if (!isOffline && currentUser.uid !== "offline") {
          await saveOnlineProgress(currentUser.uid, stepIdx, newPoints, courseCertified);
        }

        newHistory.push({ 
          text: `'${command.split(" ")[0]}' is not recognized as an internal or external command, operable program or batch file.`, 
          type: "error" 
        });
        newHistory.push({ text: `❌ Incorrect command. Deducted 10 Points. Expected: '${currentStep.expectedCommand}'`, type: "system" });
        newHistory.push({ text: "", type: "system" });

        setHistory(prev => {
          const appended = [...prev, ...newHistory];
          if (appended.length > 15) {
            return [
              { text: "[Screen cleared automatically to prevent overflow]", type: "system" },
              { text: "", type: "system" },
              ...appended.slice(-4)
            ];
          }
          return appended;
        });

        playErrorSound();
        setFeedbackStatus('wrong');
      }
    }, 1000);
  };

  const handleCommandSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (autoSubmitTimerRef.current) {
      clearTimeout(autoSubmitTimerRef.current);
    }
    const command = inputVal.trim();
    if (!command) return;
    executeCommand(command);
  };

  // 3-second Auto-Submit Timer
  useEffect(() => {
    if (autoSubmitTimerRef.current) {
      clearTimeout(autoSubmitTimerRef.current);
    }

    const currentStep = TERMINAL_STEPS[stepIdx];
    if (!currentStep || courseCertified || showSuccessOverlay) return;

    let isTargetReached = false;
    if (currentStep.isTest && currentStep.questions) {
      const q = currentStep.questions[currentQuestionIdx];
      if (q && inputVal.trim().toUpperCase() === q.answer.toUpperCase()) {
        isTargetReached = true;
      }
    } else {
      const expected = currentStep.expectedCommand;
      if (expected && inputVal.trim().replace(/\s+/g, " ").toLowerCase() === expected.toLowerCase()) {
        isTargetReached = true;
      }
    }

    if (isTargetReached) {
      autoSubmitTimerRef.current = setTimeout(() => {
        handleCommandSubmit();
      }, 6000);
    }

    return () => {
      if (autoSubmitTimerRef.current) {
        clearTimeout(autoSubmitTimerRef.current);
      }
    };
  }, [inputVal, stepIdx, currentQuestionIdx, courseCertified, showSuccessOverlay, autoCompleteEnabled]);

  // Click outside menus handler to automatically close them
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (modulesMenuRef.current && !modulesMenuRef.current.contains(event.target as Node)) {
        setShowModulesMenu(false);
      }
      if (starsMenuRef.current && !starsMenuRef.current.contains(event.target as Node)) {
        setShowStarsMenu(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);


  // 1. Loading state view
  if (authLoading) {
    return (
      <div className="w-full min-h-screen bg-[#0c0c0c] text-white flex items-center justify-center font-sans">
        <div className="text-center space-y-3 select-none">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin mx-auto" />
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Checking Authentication...</p>
        </div>
      </div>
    );
  }

  // 2. Authentication Gate Lockscreen
  const getPreviousSessions = () => {
    if (typeof window === 'undefined') return [];
    const sessions: { email: string; step: number; certified: boolean }[] = [];
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("nextsem_terminal_step_")) {
          const email = key.substring("nextsem_terminal_step_".length);
          if (email === "offline" || email === "offline@nextsem.local") continue;
          const stepVal = parseInt(localStorage.getItem(key) || "0", 10);
          const certified = localStorage.getItem(`nextsem_terminal_certified_${email}`) === "true";
          sessions.push({
            email,
            step: stepVal,
            certified
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
    return sessions;
  };

  if (!currentUser) {
    const previousSessions = getPreviousSessions();

    return (
      <div className="w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans overflow-hidden relative">
        {/* Animated background grid */}
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Ambient glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[160px] bg-emerald-500/8 pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[160px] bg-blue-600/8 pointer-events-none z-0" />

        {/* Top nav bar */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/20 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-black border border-[#4ade80]/30 rounded-xl flex items-center justify-center shadow-lg shadow-[#4ade80]/10">
              <span className="text-sm font-black text-[#4ade80] leading-none drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">NS</span>
            </div>
            <span className="font-black text-sm text-white tracking-tight">Nextsem <span className="text-slate-500 font-normal">Academy</span></span>
          </div>
          <button
            onClick={handleSignIn}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-[11px] font-bold text-white transition-all"
          >
            Sign in
          </button>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            🪟 Windows commands Module 1
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-4 max-w-3xl">
            Learn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Windows Terminal
            </span>
            <br />by actually using it
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            Step-by-step interactive CMD training. Type real commands, earn XP, and get certified — all in your browser.
          </p>

          {/* Fresh Slider Image Design: Windows 11 Logo & Command Prompt Logo */}
          <div className="w-full max-w-lg mb-10 h-48 sm:h-56 relative select-none rounded-3xl overflow-hidden border border-slate-800 bg-[#060a16] shadow-2xl flex items-center justify-between px-6 sm:px-10 group">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none group-hover:bg-violet-500/10 transition-all duration-700" />

            {/* Left Graphic: Perspective Windows 11 Logo */}
            <div className="relative z-10 flex-1 flex items-center justify-center pr-2">
              <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_0_15px_rgba(0,120,212,0.45)]">
                {/* Top Left */}
                <path d="M10,10 L44,5 L44,44 L10,44 Z" fill="#0078d4" opacity="0.9" />
                {/* Top Right */}
                <path d="M50,5 L84,10 L84,44 L50,44 Z" fill="#0078d4" opacity="0.9" />
                {/* Bottom Left */}
                <path d="M10,50 L44,50 L44,89 L10,84 Z" fill="#0078d4" opacity="0.9" />
                {/* Bottom Right */}
                <path d="M50,50 L84,50 L84,84 L50,89 Z" fill="#0078d4" opacity="0.9" />
              </svg>
            </div>

            {/* Center Connection: Glowing Arrow Indicator */}
            <div className="hidden sm:flex items-center justify-center text-slate-700 font-bold text-xl animate-pulse">
              ⚡
            </div>

            {/* Right Graphic: Terminal Command Prompt Window Logo */}
            <div className="relative z-10 flex-1 flex items-center justify-center pl-2">
              <div className="w-28 h-20 sm:w-32 sm:h-24 bg-[#02050e] border border-violet-500/40 rounded-xl p-2.5 shadow-2xl relative flex flex-col justify-between overflow-hidden group-hover:border-violet-400 transition-all">
                {/* Window header buttons */}
                <div className="flex items-center justify-between border-b border-slate-900 pb-1.5 select-none">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]/80" />
                  </div>
                  <span className="text-[7px] font-mono text-slate-500">cmd.exe</span>
                </div>
                
                {/* Terminal lines content */}
                <div className="flex-1 font-mono text-[8px] sm:text-[9px] text-[#39FF14] flex flex-col justify-center leading-relaxed">
                  <div className="text-slate-500 truncate">C:\Users\Student&gt; ver</div>
                  <div className="text-slate-350 truncate">Windows 11 CLI [Module 1]</div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    <span className="text-[#39FF14]">C:\Users\Student&gt;</span>
                    <span className="text-white">dir</span>
                  </div>
                </div>

                {/* Pulsing prompt cursor */}
                <div className="absolute right-3 bottom-3 text-[#39FF14] text-xs font-black select-none drop-shadow-[0_0_8px_#39ff14] animate-pulse">
                  &gt;_
                </div>
              </div>
            </div>
          </div>

          {/* CTA — Google Sign In (primary) */}
          <button
            onClick={handleSignIn}
            className="group flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-white hover:bg-slate-50 text-black font-black text-sm rounded-2xl cursor-pointer transition-all shadow-lg shadow-black/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] mb-3"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.15-3.15C17.45 1.74 14.93 1 12 1 7.37 1 3.4 3.66 1.48 7.55l3.77 2.92C6.15 7.42 8.87 5.04 12 5.04z" />
              <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.76 2.92c2.2-2.03 3.67-5.01 3.67-8.65z" />
              <path fill="#FBBC05" d="M5.25 14.75c-.25-.76-.39-1.57-.39-2.41s.14-1.65.39-2.41L1.48 7.02C.54 8.92 0 11.04 0 13.25c0 2.21.54 4.33 1.48 6.23l3.77-2.92z" />
              <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.76-2.92c-1.1.74-2.52 1.18-4.2 1.18-3.13 0-5.85-2.38-6.75-5.43L1.48 15.8C3.4 19.69 7.37 23 12 23z" />
            </svg>
            Start Learning with Google
          </button>
          <p className="text-slate-600 text-[10px]">Free forever · Progress saved · Certified on completion</p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { icon: "🎯", label: "40+ Lessons" },
              { icon: "⭐", label: "XP & Achievements" },
              { icon: "🏆", label: "Certificate" },
              { icon: "☁️", label: "Cloud Sync" },
              { icon: "🪟", label: "Real CMD" },
            ].map(({ icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/8 rounded-full text-[11px] text-slate-400 font-medium">
                <span>{icon}</span>{label}
              </span>
            ))}
          </div>

          {/* Previous sessions */}
          {previousSessions.length > 0 && (
            <div className="mt-8 w-full max-w-sm p-4 rounded-2xl border border-violet-500/20 bg-violet-500/5 text-left">
              <span className="text-[9px] font-black text-violet-400 uppercase tracking-widest block mb-2.5">💾 Your Saved Progress</span>
              <div className="space-y-2">
                {previousSessions.map((session) => (
                  <div key={session.email} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="min-w-0 flex-1 pr-2">
                      <p className="text-[11px] font-bold text-white truncate">{session.email}</p>
                      <p className="text-[9px] text-slate-500 mt-0.5">
                        {session.certified ? "Course completed ✓" : `Lesson ${session.step + 1} of ${TERMINAL_STEPS.length}`}
                      </p>
                    </div>
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-lg shrink-0 ${
                      session.certified
                        ? "text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/20"
                        : "text-amber-400 bg-amber-500/10 border border-amber-500/20"
                    }`}>
                      {session.certified ? "Certified" : "In Progress"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Footer */}
        <footer className="relative z-10 text-center py-4 text-[10px] text-slate-750 border-t border-white/5 select-none mt-auto">
          © 2026 Nextsem Academy · Free Windows CMD Training
        </footer>
      </div>
      );
    }

  // 3. Authenticated Module Swiper Slider Screen
  const activeModule = modules[activeModuleIdx];
  const matchingPhase = coursePhases.find(p => p.id === activeModule.id.toUpperCase());
  const topicsList = matchingPhase?.topics || [];
  const completedCount = Object.keys(completedChapters).filter(k => completedChapters[k]).length;
  const totalCount = topicsList.length;
  const percentComplete = totalCount > 0 ? Math.round((topicsList.filter(t => completedChapters[t.path]).length / totalCount) * 100) : 0;

  // Find next incomplete topic or fall back to first topic
  const nextTopic = topicsList.find(t => !completedChapters[t.path]) || topicsList[0] || { label: activeModule.title, path: activeModule.firstChapterId };
  const isChapterCompleted = !!completedChapters[nextTopic.path];

  const handleLaunchChapter = (path: string) => {
    if (path === "cmd") {
      router.push("/cmd");
    } else {
      router.push(`/book/${path}`);
    }
  };

  const dragOffset = (dragStart !== null && dragMove !== null) ? (dragMove - dragStart) : 0;

  return (
    <div className="w-full h-screen lg:max-h-screen bg-[#07070c] text-white flex flex-col justify-between font-sans selection:bg-violet-500/30 overflow-hidden select-none pb-16 md:pb-0">
      {/* Ambient glowing radial light */}
      <div
        className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 transition-all duration-750"
        style={{ backgroundColor: activeModule.color }}
      />

      {/* Mobile-only view */}
      <div className="md:hidden flex flex-col justify-between h-full w-full relative">
        {/* ── 2. Module Header Area (12vh) ── */}
        <section className="h-[12vh] flex flex-col items-center justify-center text-center px-4 shrink-0 mt-2">
          <h2 className="text-white text-xl sm:text-2xl font-black font-sans tracking-wide leading-tight transition-all duration-300">
            {activeModule.title}
          </h2>
          <span
            className="text-[9px] font-black tracking-widest uppercase mt-2 transition-all duration-300"
            style={{ color: activeModule.color }}
          >
            {activeModule.subtitle}
          </span>
        </section>

        {/* ── 3. Authenticated Module Slider (50vh) ── */}
        <section
          className="h-[50vh] w-full max-w-sm mx-auto overflow-hidden relative shrink-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Track Container */}
          <div
            className="flex items-center h-full"
            style={{
              width: `${modules.length * 100}%`,
              transform: `translate3d(calc(-${(activeModuleIdx * 100) / modules.length}% + ${dragOffset}px), 0px, 0px)`,
              transition: dragStart !== null ? 'none' : 'transform 300ms cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {modules.map((mod, index) => {
              const isSelected = index === activeModuleIdx;
              
              // Adjacent card offsets for peaking effect
              const offset = index - activeModuleIdx;
              let transformStyle = "scale(0.85)";
              let opacityStyle = 0.35;
              
              if (offset === 0) {
                transformStyle = "scale(1.15)";
                opacityStyle = 1.0;
              } else if (offset === 1) {
                transformStyle = "scale(0.85) translateX(-20px)";
                opacityStyle = 0.35;
              } else if (offset === -1) {
                transformStyle = "scale(0.85) translateX(20px)";
                opacityStyle = 0.35;
              }

              return (
                <div
                  key={mod.id}
                  className="flex flex-col items-center justify-center shrink-0"
                  style={{
                    width: `${100 / modules.length}%`,
                    opacity: opacityStyle,
                    transform: transformStyle,
                    transition: dragStart !== null ? 'none' : 'all 300ms cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                >
                  {/* Clean SVG Illustration (No surrounding box) */}
                  <div 
                    onClick={() => {
                      if (index !== activeModuleIdx) {
                        setActiveModuleIdx(index);
                      }
                    }}
                    className="flex items-center justify-center cursor-pointer transition-transform duration-300"
                  >
                    {mod.renderIllustration()}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 4. Pagination Dots (4vh) ── */}
        <section className="h-[4vh] flex items-center justify-center gap-1.5 shrink-0">
          {modules.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveModuleIdx(i)}
              className="w-3 h-3 flex items-center justify-center group focus:outline-none cursor-pointer"
            >
              <span
                className={`rounded-full transition-all duration-300 ${i === activeModuleIdx
                    ? "w-2.5 h-2.5 shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                    : "w-1.5 h-1.5 bg-slate-700 group-hover:scale-125"
                  }`}
                style={{
                  backgroundColor: i === activeModuleIdx ? activeModule.color : '#334155'
                }}
              />
            </button>
          ))}
        </section>

        {/* ── 5. Floating Bottom Action Card (26vh) ── */}
        <section className="h-[26vh] flex flex-col justify-center px-6 shrink-0 z-30 pb-4">
          <div className="w-full max-w-sm mx-auto bg-[#121217]/95 border border-white/5 rounded-[32px] p-5 shadow-2xl flex flex-col gap-4">
            {/* Top Row: Icon + Title + Status */}
            <div className="flex items-center justify-between gap-3 w-full">
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Badge Circular Base */}
                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0"
                  style={{
                    borderColor: `${activeModule.color}35`,
                    backgroundColor: `${activeModule.color}0a`
                  }}
                >
                  {activeModule.id === "cli" && (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill={activeModule.color}>
                      <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55l-13.2-1.95v-9.6z" />
                    </svg>
                  )}
                  {activeModule.id === "p0" && <Layers size={18} style={{ color: activeModule.color }} />}
                  {activeModule.id === "p1" && <Code size={18} style={{ color: activeModule.color }} />}
                  {activeModule.id === "p2" && <Palette size={18} style={{ color: activeModule.color }} />}
                  {activeModule.id === "p3" && <Cpu size={18} style={{ color: activeModule.color }} />}
                  {activeModule.id === "p4" && <FileCode size={18} style={{ color: activeModule.color }} />}
                  {activeModule.id === "p5" && <Cloud size={18} style={{ color: activeModule.color }} />}
                  {activeModule.id === "p6" && <Briefcase size={18} style={{ color: activeModule.color }} />}
                  {activeModule.id === "p7" && <Rocket size={18} style={{ color: activeModule.color }} />}
                </div>

                {/* Lesson Title */}
                <div className="min-w-0 text-left">
                  <span className="block text-[8px] font-black uppercase text-slate-500 tracking-wider">Active Lesson</span>
                  <h4 className="text-sm font-black text-white tracking-tight truncate leading-tight mt-0.5 animate-fadeInFast">
                    {nextTopic.label}
                  </h4>
                </div>
              </div>

              {/* Status radio indicator */}
              <div className="shrink-0 flex items-center justify-center animate-fadeInFast">
                {isChapterCompleted ? (
                  <div className="w-5 h-5 rounded-full bg-[#39FF14]/20 border border-[#39FF14] flex items-center justify-center text-[#39FF14] text-[10px] font-black">
                    ✓
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full border border-slate-700 bg-transparent" />
                )}
              </div>
            </div>

            {/* Full-width CTA Button */}
            <button
              onClick={() => handleLaunchChapter(nextTopic.path)}
              className="w-full py-3.5 bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-400 hover:to-indigo-400 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all active:scale-95 shadow-[0_4px_20px_rgba(139,92,246,0.35)] cursor-pointer"
            >
              Start
            </button>
          </div>
        </section>
      </div>

      {/* Desktop-only view */}
      <div className="hidden md:flex flex-col h-full w-full overflow-y-auto bg-[#07070c] relative custom-scrollbar">
        {/* Main Header Banner */}
        <div className="w-full max-w-5xl mx-auto px-8 pt-10 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-left">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Nextsem Logo" className="w-9 h-9 rounded-xl border border-emerald-500/20" />
              <h1 className="text-2xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-450">Nextsem Academy</h1>
            </div>
            <p className="text-xs text-slate-500 font-bold mt-1.5 pl-0.5">Interactive CLI Terminal &amp; Frontend Learning Dashboard</p>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-850 px-5 py-2.5 rounded-2xl">
            <div className="text-center px-1">
              <span className="block text-emerald-450 font-black text-base">{completedCount}</span>
              <span className="block text-[8px] text-slate-500 font-black uppercase tracking-wider">Completed</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div className="text-center px-1">
              <span className="block text-amber-450 font-black text-base">{points}</span>
              <span className="block text-[8px] text-slate-500 font-black uppercase tracking-wider">🪙 Points</span>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="flex-1 w-full max-w-5xl mx-auto px-8 pb-12 grid grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {modules.map((mod) => {
            const modPhase = coursePhases.find(p => p.id === mod.id.toUpperCase());
            const modTopics = modPhase?.topics || [];
            const modCompletedCount = modTopics.filter(t => completedChapters[t.path]).length;
            const modTotalCount = modTopics.length;
            const modPercent = modTotalCount > 0 ? Math.round((modCompletedCount / modTotalCount) * 100) : 0;
            const modNextTopic = modTopics.find(t => !completedChapters[t.path]) || modTopics[0] || { label: mod.title, path: mod.firstChapterId };
            const isCompleted = modPercent === 100;

            return (
              <div
                key={mod.id}
                className="bg-[#111116]/80 hover:bg-[#14141d] border border-white/5 hover:border-emerald-500/20 rounded-[28px] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 pointer-events-none transition-all duration-500"
                  style={{ backgroundColor: mod.color }}
                />

                {/* SVG Illustration & Header */}
                <div>
                  <div className="w-full h-32 flex items-center justify-center relative mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {mod.renderIllustration()}
                  </div>

                  <div className="text-left mt-2">
                    <span className="inline-block text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 text-slate-400 mb-1">
                      {mod.id === 'cli' ? 'Prerequisite' : `Phase ${mod.id}`}
                    </span>
                    <h3 className="text-base font-black text-white leading-tight">{mod.title}</h3>
                    <p className="text-[10px] text-slate-500 font-bold leading-normal mt-1">{mod.subtitle}</p>
                  </div>
                </div>

                {/* Bottom section: Progress bar + CTA */}
                <div className="mt-6 space-y-4 pt-4 border-t border-white/5">
                  {/* Mini Progress */}
                  <div className="flex items-center justify-between text-[9px] font-black text-slate-400">
                    <span>{modCompletedCount} / {modTotalCount} Lessons</span>
                    <span className="text-[#39FF14]">{modPercent}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${modPercent}%`,
                        backgroundColor: mod.color
                      }}
                    />
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleLaunchChapter(modNextTopic.path)}
                    className="w-full py-3 rounded-2xl font-black text-[10px] uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                    style={{
                      backgroundColor: isCompleted ? 'rgba(57,255,20,0.1)' : '#ffffff',
                      color: isCompleted ? '#39FF14' : '#07070c',
                      border: isCompleted ? '1px solid rgba(57,255,20,0.2)' : 'none'
                    }}
                  >
                    {isCompleted ? (
                      <>
                        <span>Review Phase</span>
                      </>
                    ) : (
                      <>
                        <span>Continue Lesson</span>
                        <span className="font-sans">&rarr;</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-[10px] text-slate-700 border-t border-white/5 select-none mt-auto">
          © 2026 Nextsem Academy · Interactive Windows Terminal &amp; Web Development Academy
        </footer>
      </div>
      
      {/* Animations style block */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-fadeInFast {
          animation: fadeIn 0.15s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
