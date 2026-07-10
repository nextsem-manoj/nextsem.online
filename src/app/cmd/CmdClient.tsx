"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Terminal, ShieldAlert, CheckCircle, HelpCircle, 
  RefreshCw, Play, ArrowRight, LockKeyhole, Sparkles, 
  Star, LogOut, ChevronRight, Award, Copy, Download,
  Check, ArrowLeft, RefreshCcw, X
} from "lucide-react";
import { auth, signInWithGoogle, db } from "../../lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface HistoryLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

interface FSItem {
  isDir: boolean;
  content?: string;
  isReadOnly?: boolean;
  isHidden?: boolean;
}

type VirtualFS = Record<string, FSItem>;

interface StepType {
  id: string;
  title: string;
  instruction: string;
  expectedCommand: string;
  hint: string;
  successMsg: string;
}

const COLOR_MAP: Record<string, string> = {
  "0": "#000000", // Black
  "1": "#000080", // Blue
  "2": "#008000", // Green
  "3": "#008080", // Aqua
  "4": "#800000", // Red
  "5": "#800080", // Purple
  "6": "#808000", // Yellow
  "7": "#C0C0C0", // White
  "8": "#808080", // Gray
  "9": "#0000FF", // Light Blue
  "a": "#39FF14", // Light Green (Matrix Green)
  "b": "#00FFFF", // Light Aqua
  "c": "#FF0000", // Light Red
  "d": "#FF00FF", // Light Purple
  "e": "#FFFF00", // Light Yellow
  "f": "#FFFFFF"  // Bright White
};

const SIMULATOR_STEPS: StepType[] = [
  {
    id: "dir",
    title: "1. Listing Directory Contents",
    instruction: "Before you do anything, you need to see what files exist in the current folder. Type the directory listing command `dir` and press Enter.",
    expectedCommand: "dir",
    hint: "dir",
    successMsg: "Fantastic! The 'dir' command lists all files, folders, and directories in your current folder path."
  },
  {
    id: "mkdir",
    title: "2. Creating Folders",
    instruction: "Let's create a workspace folder. Type `mkdir nextsem` to create a new folder named 'nextsem'.",
    expectedCommand: "mkdir nextsem",
    hint: "mkdir nextsem",
    successMsg: "Perfect! 'mkdir' (Make Directory) is the standard command to create folders on Windows."
  },
  {
    id: "cd",
    title: "3. Navigating Directories",
    instruction: "To enter the folder you just created, change the active directory. Type `cd nextsem` and press Enter.",
    expectedCommand: "cd nextsem",
    hint: "cd nextsem",
    successMsg: "Awesome! 'cd' (Change Directory) shifts your active path. Notice the prompt updates to C:\\Users\\Student\\nextsem."
  },
  {
    id: "echo",
    title: "4. Writing Files",
    instruction: "Now let's write content to a file inside 'nextsem'. Type `echo learn command terminal > index.txt` to create index.txt with that text.",
    expectedCommand: "echo learn command terminal > index.txt",
    hint: "echo learn command terminal > index.txt",
    successMsg: "Great job! The '>' redirect operator redirects the output of 'echo' and writes it to a file named 'index.txt'."
  },
  {
    id: "type",
    title: "5. Reading Files",
    instruction: "To check the contents of a file without editing, print its text. Type `type index.txt` and press Enter.",
    expectedCommand: "type index.txt",
    hint: "type index.txt",
    successMsg: "Outstanding! The 'type' command outputs file contents directly onto the command line screen."
  },
  {
    id: "copy",
    title: "6. Copying Files",
    instruction: "Let's copy 'index.txt' to create a backup file. Type `copy index.txt index_backup.txt` and press Enter.",
    expectedCommand: "copy index.txt index_backup.txt",
    hint: "copy index.txt index_backup.txt",
    successMsg: "Superb! The 'copy' command duplicates files in your active workspace directory."
  },
  {
    id: "ren",
    title: "7. Renaming Files",
    instruction: "Let's change the name of the backup file. Type `ren index_backup.txt backup.txt` and press Enter.",
    expectedCommand: "ren index_backup.txt backup.txt",
    hint: "ren index_backup.txt backup.txt",
    successMsg: "Perfect! 'ren' (Rename) updates the file name without moving or duplicate copying it."
  },
  {
    id: "tree",
    title: "8. Displaying Folder Trees",
    instruction: "To view your directory structure graphically, print it in a tree diagram. Type `tree` and press Enter.",
    expectedCommand: "tree",
    hint: "tree",
    successMsg: "Fascinating! The 'tree' command displays folder hierarchies recursively using ASCII lines."
  },
  {
    id: "ipconfig",
    title: "9. Network Configuration Diagnostics",
    instruction: "Let's run some network commands. Type `ipconfig` to query the local network adapter interfaces.",
    expectedCommand: "ipconfig",
    hint: "ipconfig",
    successMsg: "Excellent! 'ipconfig' is the primary diagnostic utility to check IP addresses, subnets, and gateways."
  },
  {
    id: "ping",
    title: "10. Pinging Servers",
    instruction: "Lastly, test network connectivity to the Nextsem server. Type `ping nextsem.online` and press Enter.",
    expectedCommand: "ping nextsem.online",
    hint: "ping nextsem.online",
    successMsg: "Outstanding! You have completed all lessons and mastered basic Windows Command Prompt utilities! +1000 XP!"
  }
];

export default function CmdClient() {
  const router = useRouter();
  
  // Auth state
  const [user, setUser] = useState<{ uid: string; name: string; email: string; avatar: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Lesson progression state
  const [stepIdx, setStepIdx] = useState(0);
  const [points, setPoints] = useState(0);
  const [certified, setCertified] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showCertOverlay, setShowCertOverlay] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Terminal state
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([
    { text: "Microsoft Windows [Version 10.0.22621.1702]", type: "output" },
    { text: "(c) Microsoft Corporation. All rights reserved.", type: "output" },
    { text: "", type: "output" },
    { text: "Type 'help' to view the list of supported Windows commands.", type: "system" },
    { text: "Type the expected commands in the left pane to progress through lessons.", type: "system" },
    { text: "", type: "output" }
  ]);
  const [currentDrive, setCurrentDrive] = useState("C");
  const [currentPath, setCurrentPath] = useState("C:\\Users\\Student");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isWorking, setIsWorking] = useState(false);

  // Custom colors theme state
  const [themeColors, setThemeColors] = useState({
    bg: "#050914",
    text: "#c5c9d6"
  });

  // Shell configurations and custom modes state
  const [terminalTitle, setTerminalTitle] = useState("cmd.exe");
  const [shellMode, setShellMode] = useState<"cmd" | "powershell" | "diskpart">("cmd");
  const [envVars, setEnvVars] = useState<Record<string, string>>({
    "USERNAME": "Student",
    "USERPROFILE": "C:\\Users\\Student",
    "COMPUTERNAME": "DESKTOP-NEXTSEM",
    "PATH": "C:\\Windows\\system32;C:\\Windows",
    "OS": "Windows_NT",
    "PROCESSOR_ARCHITECTURE": "AMD64",
    "SYSTEMDRIVE": "C:",
    "SYSTEMROOT": "C:\\Windows"
  });
  const [diskpartDisk, setDiskpartDisk] = useState<string | null>(null);
  const [diskpartPartition, setDiskpartPartition] = useState<string | null>(null);
  const [formatPendingConfirm, setFormatPendingConfirm] = useState(false);
  const [shutdownTimerVal, setShutdownTimerVal] = useState<NodeJS.Timeout | null>(null);

  // Sync clear of shutdown timer on unmount
  useEffect(() => {
    return () => {
      if (shutdownTimerVal) clearTimeout(shutdownTimerVal);
    };
  }, [shutdownTimerVal]);

  const getPrompt = () => {
    if (shellMode === "diskpart") return "DISKPART>";
    if (shellMode === "powershell") return `PS ${currentPath}>`;
    return `${currentPath}>`;
  };

  // Virtual Filesystem State
  const [fs, setFs] = useState<VirtualFS>({
    "C:": { isDir: true },
    "C:\\USERS": { isDir: true },
    "C:\\USERS\\STUDENT": { isDir: true },
    "C:\\USERS\\STUDENT\\DESKTOP": { isDir: true },
    "C:\\USERS\\STUDENT\\DOCUMENTS": { isDir: true },
    "C:\\USERS\\STUDENT\\DOWNLOADS": { isDir: true },
    "D:": { isDir: true },
    "D:\\BACKUPS": { isDir: true },
    "D:\\SOFTWARE": { isDir: true }
  });

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reconcile and load user progress
  const loadProgress = async (uid: string, email: string) => {
    try {
      // 1. Check local progress first (scoped by email)
      const localStep = parseInt(localStorage.getItem(`nextsem_terminal_step_${email}`) || "0", 10);
      const localCertified = localStorage.getItem(`nextsem_terminal_certified_${email}`) === "true";

      // 2. Fetch progress from Firestore online database
      const userDocRef = doc(db, "users_progress", uid);
      const docSnap = await getDoc(userDocRef);

      let finalStep = localStep;
      let finalCertified = localCertified;

      if (docSnap.exists()) {
        const dbData = docSnap.data();
        const dbStep = dbData.stepIdx || 0;
        const dbCertified = dbData.courseCertified || false;

        // Choose higher progress
        if (dbStep > localStep || (dbStep === localStep && dbCertified)) {
          finalStep = dbStep;
          finalCertified = dbCertified;
        }
      }

      setStepIdx(finalStep);
      setPoints(finalStep * 100);
      setCertified(finalCertified);

      // Save merged progress back to local
      localStorage.setItem(`nextsem_terminal_step_${email}`, finalStep.toString());
      localStorage.setItem(`nextsem_terminal_certified_${email}`, finalCertified.toString());
    } catch (e) {
      console.error("Failed to reconcile progress:", e);
    } finally {
      setAuthLoading(false);
    }
  };

  // Save progress online & offline
  const saveProgress = async (nextStep: number, isCert: boolean) => {
    if (!user) return;
    try {
      const email = user.email;
      const uid = user.uid;

      // Local save
      localStorage.setItem(`nextsem_terminal_step_${email}`, nextStep.toString());
      localStorage.setItem(`nextsem_terminal_certified_${email}`, isCert.toString());

      // Firestore save
      const userDocRef = doc(db, "users_progress", uid);
      await setDoc(userDocRef, {
        stepIdx: nextStep,
        points: nextStep * 100,
        courseCertified: isCert,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (e) {
      console.error("Failed to save progress:", e);
    }
  };

  // Auth setup listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setAuthLoading(true);
      if (firebaseUser) {
        const profile = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || "Student",
          email: firebaseUser.email || "guest@nextsem.local",
          avatar: firebaseUser.photoURL || ""
        };
        setUser(profile);
        loadProgress(firebaseUser.uid, profile.email);
      } else {
        setUser(null);
        setAuthLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Scroll to bottom when terminal history updates
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  // Focus terminal input helper
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSignIn = async () => {
    try {
      setAuthLoading(true);
      await signInWithGoogle();
    } catch (err) {
      console.error("Sign-In Error:", err);
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error("Sign-Out Error:", err);
    }
  };

  // Path resolution utility
  const resolvePath = (current: string, target: string): string => {
    const cleanTarget = target.replace(/\//g, "\\").trim();
    if (!cleanTarget) return current;

    // Check if target contains absolute drive root
    if (cleanTarget.match(/^[a-zA-Z]:\\/)) {
      return cleanTarget.toUpperCase();
    }
    if (cleanTarget.match(/^[a-zA-Z]:$/)) {
      return cleanTarget.toUpperCase() + "\\";
    }

    let parts = current.split("\\");
    if (cleanTarget.startsWith("\\")) {
      // Start from current drive root
      parts = [current.split("\\")[0]];
    }

    const targetParts = cleanTarget.split("\\");
    for (const part of targetParts) {
      if (!part || part === ".") continue;
      if (part === "..") {
        if (parts.length > 1) {
          parts.pop();
        }
      } else {
        parts.push(part.toUpperCase());
      }
    }
    return parts.join("\\");
  };

  // ASCII tree drawing recursive generator
  const buildTreeString = (path: string, prefix = ""): string[] => {
    const lines: string[] = [];
    const parentPath = path.endsWith("\\") ? path : path + "\\";

    const subDirs: string[] = [];
    const subFiles: string[] = [];

    Object.keys(fs).forEach(key => {
      if (key === path) return;
      if (key.startsWith(parentPath)) {
        const sub = key.slice(parentPath.length);
        if (!sub.includes("\\")) {
          if (fs[key].isDir) {
            subDirs.push(sub);
          } else {
            subFiles.push(sub);
          }
        }
      }
    });

    const allItems = [...subDirs.map(d => ({ name: d, isDir: true })), ...subFiles.map(f => ({ name: f, isDir: false }))];

    allItems.forEach((item, index) => {
      const isLast = index === allItems.length - 1;
      const marker = isLast ? "└── " : "├── ";
      lines.push(prefix + marker + (item.isDir ? item.name + "/" : item.name));

      if (item.isDir) {
        const nextPrefix = prefix + (isLast ? "    " : "│   ");
        const childLines = buildTreeString(parentPath + item.name, nextPrefix);
        lines.push(...childLines);
      }
    });

    return lines;
  };

  // Keyboard autocomplete tab-completion and history navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isWorking) {
      e.preventDefault();
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const parts = inputVal.split(" ");
      if (parts.length === 0) return;
      
      const lastWord = parts[parts.length - 1];
      if (!lastWord) return;

      const parentPath = currentPath.endsWith("\\") ? currentPath : currentPath + "\\";
      const candidates: string[] = [];

      Object.keys(fs).forEach(key => {
        if (key.startsWith(parentPath)) {
          const sub = key.slice(parentPath.length);
          if (!sub.includes("\\")) {
            if (sub.toUpperCase().startsWith(lastWord.toUpperCase())) {
              candidates.push(sub.toLowerCase());
            }
          }
        }
      });

      if (candidates.length > 0) {
        parts[parts.length - 1] = candidates[0];
        setInputVal(parts.join(" "));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      
      const nextIdx = historyIdx > 0 ? historyIdx - 1 : 0;
      setHistoryIdx(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const nextIdx = historyIdx < commandHistory.length - 1 ? historyIdx + 1 : commandHistory.length;
      setHistoryIdx(nextIdx);
      if (nextIdx === commandHistory.length) {
        setInputVal("");
      } else {
        setInputVal(commandHistory[nextIdx]);
      }
    }
  };

  // Command Interpreter Engine
  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Append to command history list
    setCommandHistory(prev => {
      const next = [...prev, trimmed];
      setHistoryIdx(next.length);
      return next;
    });

    const activePrompt = getPrompt();
    const rawPrompt = `${activePrompt} ${trimmed}`;
    const newHistory = [...history, { text: rawPrompt, type: "input" as const }];

    // Intercept Y/N format prompt
    if (formatPendingConfirm) {
      const response = trimmed.toLowerCase();
      let stdoutLines: string[] = [];
      const isError = false;
      
      if (response === "y" || response === "yes") {
        setFormatPendingConfirm(false);
        setHistory(newHistory);
        setInputVal("");
        runAsync("format", [], newHistory);
        return;
      } else {
        setFormatPendingConfirm(false);
        stdoutLines = ["Format command aborted by user."];
      }

      setHistory(prev => [
        ...prev,
        ...stdoutLines.map(line => ({ text: line, type: isError ? ("error" as const) : ("output" as const) })),
        { text: "", type: "output" }
      ]);
      setInputVal("");
      return;
    }

    // Intercept DiskPart Shell Mode
    if (shellMode === "diskpart") {
      const tokens = trimmed.split(" ");
      const subCommand = tokens[0].toLowerCase();
      const subArgs = tokens.slice(1);
      let stdoutLines: string[] = [];
      let isError = false;

      if (subCommand === "exit") {
        setShellMode("cmd");
        stdoutLines = ["Leaving DiskPart..."];
      } else if (subCommand === "help") {
        stdoutLines = [
          "Microsoft DiskPart commands:",
          "  LIST DISK          - Display a list of virtual disks.",
          "  LIST PARTITION     - Display a list of partitions on selected disk.",
          "  SELECT DISK [n]    - Shift disk focus to disk number [n].",
          "  SELECT PARTITION [n]- Shift partition focus to partition number [n].",
          "  CLEAN              - Erase partition tables from the selected disk.",
          "  EXIT               - Exit the DiskPart utility."
        ];
      } else if (subCommand === "list") {
        const listTarget = subArgs[0]?.toLowerCase();
        if (listTarget === "disk") {
          stdoutLines = [
            "  Disk ###  Status           Size     Free     Dyn  Gpt",
            "  --------  -------------  -------  -------  ---  ---",
            "  Disk 0    Online          100 GB      0 B        *",
            "  Disk 1    Online           50 GB    10 GB        *"
          ];
        } else if (listTarget === "partition") {
          if (diskpartDisk === null) {
            stdoutLines = [
              "There is no disk selected to list partitions.",
              "Select a disk and try again."
            ];
            isError = true;
          } else if (diskpartDisk === "0") {
            stdoutLines = [
              "  Partition ###  Type              Size     Offset",
              "  -------------  ----------------  -------  -------",
              "  Partition 1    Primary             99 GB  1024 KB",
              "  Partition 2    System             100 MB   100 GB"
            ];
          } else {
            stdoutLines = [
              "  Partition ###  Type              Size     Offset",
              "  -------------  ----------------  -------  -------",
              "  Partition 1    Primary             40 GB  1024 KB"
            ];
          }
        } else {
          stdoutLines = ["Error: Invalid LIST target. Try: LIST DISK or LIST PARTITION."];
          isError = true;
        }
      } else if (subCommand === "select") {
        const selTarget = subArgs[0]?.toLowerCase();
        const selVal = subArgs[1];
        if (selTarget === "disk") {
          if (selVal === "0" || selVal === "1") {
            setDiskpartDisk(selVal);
            setDiskpartPartition(null);
            stdoutLines = [`Disk ${selVal} is now the selected disk.`];
          } else {
            stdoutLines = ["Error: Disk number must be 0 or 1."];
            isError = true;
          }
        } else if (selTarget === "partition") {
          if (diskpartDisk === null) {
            stdoutLines = ["There is no disk selected to choose partitions from."];
            isError = true;
          } else if (selVal === "1" || (diskpartDisk === "0" && selVal === "2")) {
            setDiskpartPartition(selVal);
            stdoutLines = [`Partition ${selVal} is now the selected partition.`];
          } else {
            stdoutLines = ["Error: Invalid partition selection."];
            isError = true;
          }
        } else {
          stdoutLines = ["Error: Invalid SELECT target. Try: SELECT DISK or SELECT PARTITION."];
          isError = true;
        }
      } else if (subCommand === "clean") {
        if (diskpartDisk === null) {
          stdoutLines = ["There is no disk selected to clean. Select a disk first."];
          isError = true;
        } else {
          stdoutLines = [`DiskPart succeeded in cleaning disk ${diskpartDisk}.`];
        }
      } else {
        stdoutLines = [`Microsoft DiskPart version 10.0.22621`, `Command '${trimmed}' is not recognized in DiskPart shell.`];
        isError = true;
      }

      setHistory(prev => [
        ...prev,
        ...stdoutLines.map(line => ({ text: line, type: isError ? ("error" as const) : ("output" as const) })),
        { text: "", type: "output" }
      ]);
      setInputVal("");
      return;
    }

    // Resolve environment variables %VAR%
    let resolvedCmd = trimmed;
    Object.keys(envVars).forEach(key => {
      const regex = new RegExp(`%${key}%`, "gi");
      resolvedCmd = resolvedCmd.replace(regex, envVars[key]);
    });

    // Check piping operator '|' (e.g. echo hello | clip)
    let isPiped = false;
    let pipeTarget = "";
    let cmdPart = resolvedCmd;

    if (resolvedCmd.includes("|")) {
      const parts = resolvedCmd.split("|");
      cmdPart = parts[0].trim();
      pipeTarget = parts[1]?.trim()?.toLowerCase() || "";
      isPiped = true;
    }

    // Parsing commands with optional redirection operators
    let redirectFile = "";
    let isAppend = false;

    if (cmdPart.includes(">>")) {
      const parts = cmdPart.split(">>");
      cmdPart = parts[0].trim();
      redirectFile = parts[1]?.trim() || "";
      isAppend = true;
    } else if (cmdPart.includes(">")) {
      const parts = cmdPart.split(">");
      cmdPart = parts[0].trim();
      redirectFile = parts[1]?.trim() || "";
    }

    // Split target arguments
    const cmdTokens = cmdPart.split(" ");
    let command = cmdTokens[0].toLowerCase();
    let args = cmdTokens.slice(1);

    // PowerShell Mode Intercept & Aliases
    if (shellMode === "powershell") {
      if (command === "exit") {
        setShellMode("cmd");
        setHistory([...newHistory, { text: "", type: "output" }]);
        setInputVal("");
        return;
      }
      if (command === "ls" || command === "gci" || command === "get-childitem") {
        command = "dir";
      } else if (command === "gl" || command === "get-location" || command === "pwd") {
        command = "cd";
        args = [];
      } else if (command === "clear-host" || command === "clear") {
        setHistory([]);
        setInputVal("");
        return;
      } else if (command === "write-host") {
        command = "echo";
      }
    }

    if (command === "cls") {
      setHistory([]);
      setInputVal("");
      return;
    }

    // Async commands check (ping / chkdsk / sfc / tracert)
    if (!redirectFile) {
      if (command === "ping") {
        setHistory(newHistory);
        setInputVal("");
        runAsync("ping", args, newHistory);
        return;
      }
      if (command === "chkdsk") {
        setHistory(newHistory);
        setInputVal("");
        runAsync("chkdsk", args, newHistory);
        return;
      }
      if (command === "sfc" && args[0]?.toLowerCase() === "/scannow") {
        setHistory(newHistory);
        setInputVal("");
        runAsync("sfc", args, newHistory);
        return;
      }
      if (command === "tracert") {
        setHistory(newHistory);
        setInputVal("");
        runAsync("tracert", args, newHistory);
        return;
      }
    }

    let stdoutLines: string[] = [];
    let isError = false;

    // Direct drive switch check (e.g. C: or D:)
    if (cmdPart.match(/^[a-zA-Z]:$/)) {
      const driveLetter = cmdPart[0].toUpperCase();
      const targetDrivePath = driveLetter + ":";
      
      if (fs[targetDrivePath] || targetDrivePath === "C:" || targetDrivePath === "D:") {
        setCurrentDrive(driveLetter);
        setCurrentPath(driveLetter === "C" ? "C:\\Users\\Student" : "D:\\");
        setHistory([...newHistory, { text: "", type: "output" }]);
        setInputVal("");
        return;
      } else {
        setHistory([...newHistory, { text: `The system cannot find the drive specified.`, type: "error" }]);
        setInputVal("");
        return;
      }
    }
    switch (command) {
      case "help":
        stdoutLines = [
          "Supported Windows CMD commands and parameters:",
          "  HELP            Provides Help information for Windows commands.",
          "  CLS             Clears the Command Prompt terminal screen.",
          "  VER             Displays the Microsoft Windows operating system version.",
          "  WHOAMI          Displays active user identity and group scopes.",
          "  HOSTNAME        Displays the network hostname of the system.",
          "  DATE / TIME     Displays current system date and clock details.",
          "  VOL             Displays the disk volume label and serial key.",
          "  DIR             Lists all files and subdirectories in the folder. (/W for wide).",
          "  CD [path]       Changes the current active directory prompt path.",
          "  MKDIR [name]    Creates (makes) a new folder directory.",
          "  RMDIR [name]    Deletes (removes) an empty folder directory.",
          "  ECHO [text]     Outputs (prints) text or redirects to a file.",
          "  TYPE [file]     Outputs the contents of a text file to screen.",
          "  COPY [s] [d]    Copies files to another folder path or filename.",
          "  MOVE [s] [d]    Moves or renames files or directories.",
          "  DEL [file]      Deletes (erases) one or more files.",
          "  REN [old] [new] Renames a file or directory folder.",
          "  ATTRIB          Displays or modifies file attributes (+R/-R for Read-only, +H/-H for Hidden).",
          "  TREE            Displays the graphical folder tree structure.",
          "  SYSTEMINFO      Displays hardware, kernel, network, and memory config stats.",
          "  IPCONFIG        Displays IP networks configurations. (/ALL, /FLUSHDNS).",
          "  PING [host]     Tests host latency by sending ICMP packets.",
          "  NSLOOKUP [host] Resolves IP mapping and queries DNS domain entries.",
          "  TASKLIST        Displays current running background execution processes.",
          "  TASKKILL        Terminates a process matching PID or Image Name.",
          "  NETSTAT         Lists active network socket connection streams."
        ];
        break;

      case "ver":
        stdoutLines = ["Microsoft Windows [Version 10.0.22631.3296]"];
        break;

      case "whoami":
        stdoutLines = [`DESKTOP-NEXTSEM\\${user ? user.email.split("@")[0] : "student"}`];
        break;

      case "hostname":
        stdoutLines = ["DESKTOP-NEXTSEM"];
        break;

      case "vol":
        stdoutLines = [
          " Volume in drive C has no label.",
          " Volume Serial Number is B48C-9F12"
        ];
        break;

      case "date":
        stdoutLines = [`The current date is: ${new Date().toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}`];
        break;

      case "time":
        stdoutLines = [`The current time is: ${new Date().toLocaleTimeString()}`];
        break;

      case "echo":
        stdoutLines = [args.join(" ")];
        break;

      case "systeminfo":
        stdoutLines = [
          "OS Name:                   Microsoft Windows 11 Home",
          "OS Version:                10.0.22631 N/A Build 22631",
          "OS Manufacturer:           Microsoft Corporation",
          "Registered Owner:          " + (user ? user.name : "Guest Student"),
          "Product ID:                00326-10000-00000-AA523",
          "System Uptime:             3 Days, 5 Hours, 12 Minutes",
          "BIOS Version:              Dell Inc. 1.14.0, 7/12/2025",
          "Total Physical Memory:     16,234 MB",
          "Available Physical Memory: 6,842 MB",
          "Virtual Memory: Max Size:  24,192 MB",
          "Virtual Memory: Available: 11,208 MB",
          "Network Card(s):           1 NIC(s) Installed.",
          "                           [01]: Realtek PCIe GbE Family Controller",
          "                                 Connection Name: Ethernet0",
          "                                 DHCP Enabled:    Yes",
          "                                 IP Address(es):  192.168.1.104"
        ];
        break;

      case "ipconfig":
        if (args[0]?.toLowerCase() === "/flushdns") {
          stdoutLines = [
            "Windows IP Configuration",
            "",
            "Successfully flushed the DNS Resolver Cache."
          ];
        } else if (args[0]?.toLowerCase() === "/all") {
          stdoutLines = [
            "Windows IP Configuration",
            "",
            "Host Name . . . . . . . . . . . . : DESKTOP-NEXTSEM",
            "Primary Dns Suffix  . . . . . . . : local",
            "Node Type . . . . . . . . . . . . : Hybrid",
            "IP Routing Enabled. . . . . . . . : No",
            "WINS Proxy Enabled. . . . . . . . : No",
            "",
            "Ethernet adapter Ethernet0:",
            "   Connection-specific DNS Suffix  . : local",
            "   Description . . . . . . . . . . . : Realtek PCIe GbE Family Controller",
            "   Physical Address. . . . . . . . . : E8-11-32-A5-92-CF",
            "   DHCP Enabled. . . . . . . . . . . : Yes",
            "   Autoconfiguration Enabled . . . . : Yes",
            "   IPv4 Address. . . . . . . . . . . : 192.168.1.104(Preferred)",
            "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
            "   Lease Obtained. . . . . . . . . . : Friday, July 10, 2026 8:00 AM",
            "   Default Gateway . . . . . . . . . : 192.168.1.1",
            "   DHCP Server . . . . . . . . . . . : 192.168.1.1",
            "   DNS Servers . . . . . . . . . . . : 8.8.8.8",
            "                                       8.8.4.4"
          ];
        } else {
          stdoutLines = [
            "Windows IP Configuration",
            "",
            "Ethernet adapter Ethernet0:",
            "   Connection-specific DNS Suffix  . : local",
            "   IPv4 Address. . . . . . . . . . . : 192.168.1.104",
            "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
            "   Default Gateway . . . . . . . . . : 192.168.1.1"
          ];
        }
        break;

      case "nslookup":
        if (!args[0]) {
          stdoutLines = ["Default Server:  google-public-dns.google\nAddress:  8.8.8.8"];
        } else {
          stdoutLines = [
            "Server:  google-public-dns.google",
            "Address:  8.8.8.8",
            "",
            "Non-authoritative answer:",
            `Name:    ${args[0]}`,
            "Address:  199.36.158.100"
          ];
        }
        break;

      case "tasklist":
        stdoutLines = [
          "Image Name                     PID Session Name        Mem Usage",
          "========================= ======== ================ ============",
          "System Idle Process              0 Services                   8 K",
          "System                           4 Services                 156 K",
          "smss.exe                       384 Services                 452 K",
          "csrss.exe                      522 Services               1,450 K",
          "wininit.exe                    602 Services               1,200 K",
          "services.exe                   744 Services               4,520 K",
          "lsass.exe                      780 Services               6,212 K",
          "explorer.exe                  3212 Console              142,400 K",
          "cmd.exe                       5904 Console                8,240 K",
          "chrome.exe                    8412 Console              324,500 K",
          "laggy-process.exe             9214 Console              850,200 K"
        ];
        break;

      case "taskkill":
        const hasPid = args.includes("/pid") || args.includes("/PID");
        const hasIm = args.includes("/im") || args.includes("/IM");
        if (hasPid) {
          const idx = args.findIndex(v => v.toLowerCase() === "/pid");
          const targetPid = args[idx + 1];
          if (targetPid === "9214") {
            stdoutLines = ["SUCCESS: Sent termination signal to process with PID 9214."];
          } else {
            stdoutLines = [`ERROR: Process with PID ${targetPid} not found.`];
            isError = true;
          }
        } else if (hasIm) {
          const idx = args.findIndex(v => v.toLowerCase() === "/im");
          const targetIm = args[idx + 1]?.toLowerCase();
          if (targetIm === "laggy-process.exe") {
            stdoutLines = ["SUCCESS: Sent termination signal to image laggy-process.exe."];
          } else {
            stdoutLines = [`ERROR: Image ${targetIm} process not found.`];
            isError = true;
          }
        } else {
          stdoutLines = ["Usage: taskkill /pid <PID>  or  taskkill /im <ImageName>"];
        }
        break;

      case "netstat":
        stdoutLines = [
          "Active Connections",
          "",
          "  Proto  Local Address          Foreign Address        State",
          "  TCP    127.0.0.1:5000         0.0.0.0:0              LISTENING",
          "  TCP    192.168.1.104:51221    199.36.158.100:443     ESTABLISHED",
          "  TCP    192.168.1.104:51225    8.8.8.8:443            ESTABLISHED",
          "  UDP    0.0.0.0:5353           *:*"
        ];
        break;

      case "color":
        if (!args[0]) {
          // Reset default
          setThemeColors({ bg: "#050914", text: "#c5c9d6" });
          stdoutLines = [];
        } else {
          const val = args[0].toLowerCase();
          let bgCode = "0";
          let fgCode = "7";
          if (val.length === 1) {
            fgCode = val[0];
          } else if (val.length === 2) {
            bgCode = val[0];
            fgCode = val[1];
          }

          if (COLOR_MAP[bgCode] && COLOR_MAP[fgCode]) {
            if (bgCode === fgCode) {
              stdoutLines = ["Error: Foreground and background colors cannot be the same."];
              isError = true;
            } else {
              setThemeColors({
                bg: COLOR_MAP[bgCode],
                text: COLOR_MAP[fgCode]
              });
              stdoutLines = [];
            }
          } else {
            stdoutLines = ["Error: Invalid color scheme attribute hex character."];
            isError = true;
          }
        }
        break;

      case "cd":
        const targetCD = args.join(" ");
        if (!targetCD) {
          stdoutLines = [currentPath];
        } else {
          const resolved = resolvePath(currentPath, targetCD);
          if (fs[resolved] && fs[resolved].isDir) {
            setCurrentPath(resolved);
            stdoutLines = [];
          } else {
            stdoutLines = ["The system cannot find the path specified."];
            isError = true;
          }
        }
        break;

      case "dir":
        const isWide = args.some(a => a.toLowerCase() === "/w");
        const parentPrefix = currentPath.endsWith("\\") ? currentPath : currentPath + "\\";
        const dirsList: string[] = [];
        const filesList: { name: string; size: number }[] = [];

        Object.keys(fs).forEach(key => {
          if (key === currentPath) return;
          if (key.startsWith(parentPrefix)) {
            const sub = key.slice(parentPrefix.length);
            if (!sub.includes("\\")) {
              if (fs[key].isDir) {
                dirsList.push(sub);
              } else {
                filesList.push({ name: sub, size: fs[key].content?.length || 0 });
              }
            }
          }
        });

        if (isWide) {
          const allNames = [...dirsList.map(d => `[${d}]`), ...filesList.map(f => f.name)];
          stdoutLines = [
            ` Directory of ${currentPath}`,
            "",
            allNames.join("      "),
            `               ${filesList.length} File(s)             ${filesList.reduce((acc, f) => acc + f.size, 0)} bytes`,
            `               ${dirsList.length} Dir(s)   98,415,342 KB free`
          ];
        } else {
          const listLines = [
            ` Directory of ${currentPath}`,
            ""
          ];
          
          dirsList.forEach(d => {
            listLines.push(`07/10/2026  12:00 PM    <DIR>          ${d}`);
          });
          filesList.forEach(f => {
            listLines.push(`07/10/2026  12:00 PM                ${f.size} ${f.name}`);
          });

          listLines.push(
            `               ${filesList.length} File(s)             ${filesList.reduce((acc, f) => acc + f.size, 0)} bytes`,
            `               ${dirsList.length} Dir(s)   98,415,342 KB free`
          );
          stdoutLines = listLines;
        }
        break;

      case "mkdir":
      case "md":
        const targetMkdir = args.join(" ");
        if (!targetMkdir) {
          stdoutLines = ["A subdirectory or file already exists or command parameters incorrect."];
          isError = true;
        } else {
          const resolved = resolvePath(currentPath, targetMkdir);
          if (fs[resolved]) {
            stdoutLines = [`A subdirectory or file '${targetMkdir}' already exists.`];
            isError = true;
          } else {
            setFs(prev => ({
              ...prev,
              [resolved]: { isDir: true }
            }));
            stdoutLines = [];
          }
        }
        break;

      case "rmdir":
      case "rd":
        const targetRmdir = args.join(" ");
        if (!targetRmdir) {
          stdoutLines = ["The syntax of the command is incorrect."];
          isError = true;
        } else {
          const resolved = resolvePath(currentPath, targetRmdir);
          if (fs[resolved] && fs[resolved].isDir) {
            // Remove matching keys
            setFs(prev => {
              const next = { ...prev };
              Object.keys(next).forEach(k => {
                if (k === resolved || k.startsWith(resolved + "\\")) {
                  delete next[k];
                }
              });
              return next;
            });
            stdoutLines = [];
          } else {
            stdoutLines = ["The system cannot find the file specified."];
            isError = true;
          }
        }
        break;

      case "type":
        const targetType = args.join(" ");
        if (!targetType) {
          stdoutLines = ["The syntax of the command is incorrect."];
          isError = true;
        } else {
          const resolved = resolvePath(currentPath, targetType);
          if (fs[resolved] && !fs[resolved].isDir) {
            stdoutLines = [fs[resolved].content || ""];
          } else {
            stdoutLines = [`The system cannot find the file specified: '${targetType}'`];
            isError = true;
          }
        }
        break;

      case "copy":
        const srcCopy = args[0];
        const destCopy = args[1];
        if (!srcCopy || !destCopy) {
          stdoutLines = ["The syntax of the command is incorrect."];
          isError = true;
        } else {
          const srcResolved = resolvePath(currentPath, srcCopy);
          const destResolved = resolvePath(currentPath, destCopy);

          if (fs[srcResolved] && !fs[srcResolved].isDir) {
            let targetKey = destResolved;
            // If dest is a directory, append filename
            if (fs[destResolved] && fs[destResolved].isDir) {
              const filename = srcResolved.split("\\").pop() || "copied.txt";
              targetKey = destResolved.endsWith("\\") ? destResolved + filename : destResolved + "\\" + filename;
            }

            setFs(prev => ({
              ...prev,
              [targetKey]: {
                isDir: false,
                content: prev[srcResolved].content || "",
                isReadOnly: false,
                isHidden: false
              }
            }));
            stdoutLines = ["        1 file(s) copied."];
          } else {
            stdoutLines = ["The system cannot find the file specified."];
            isError = true;
          }
        }
        break;

      case "move":
        const srcMove = args[0];
        const destMove = args[1];
        if (!srcMove || !destMove) {
          stdoutLines = ["The syntax of the command is incorrect."];
          isError = true;
        } else {
          const srcResolved = resolvePath(currentPath, srcMove);
          const destResolved = resolvePath(currentPath, destMove);

          if (fs[srcResolved]) {
            let targetKey = destResolved;
            if (fs[destResolved] && fs[destResolved].isDir) {
              const itemname = srcResolved.split("\\").pop() || "moved_item";
              targetKey = destResolved.endsWith("\\") ? destResolved + itemname : destResolved + "\\" + itemname;
            }

            if (fs[srcResolved].isReadOnly) {
              stdoutLines = ["Access is denied (File is Read-Only)."];
              isError = true;
            } else {
              setFs(prev => {
                const next = { ...prev };
                const sourceItem = next[srcResolved];
                delete next[srcResolved];
                next[targetKey] = sourceItem;
                // Move subfolders if directory
                if (sourceItem.isDir) {
                  Object.keys(next).forEach(k => {
                    if (k.startsWith(srcResolved + "\\")) {
                      const relativePart = k.slice(srcResolved.length);
                      next[targetKey + relativePart] = next[k];
                      delete next[k];
                    }
                  });
                }
                return next;
              });
              stdoutLines = ["        1 file(s) moved."];
            }
          } else {
            stdoutLines = ["The system cannot find the file specified."];
            isError = true;
          }
        }
        break;

      case "del":
      case "erase":
        const targetDel = args.join(" ");
        if (!targetDel) {
          stdoutLines = ["The syntax of the command is incorrect."];
          isError = true;
        } else {
          const resolved = resolvePath(currentPath, targetDel);
          if (fs[resolved] && !fs[resolved].isDir) {
            if (fs[resolved].isReadOnly) {
              stdoutLines = ["Access is denied (File is Read-Only)."];
              isError = true;
            } else {
              setFs(prev => {
                const next = { ...prev };
                delete next[resolved];
                return next;
              });
              stdoutLines = [];
            }
          } else {
            stdoutLines = ["Could Not Find " + targetDel];
            isError = true;
          }
        }
        break;

      case "ren":
      case "rename":
        const oldRen = args[0];
        const newRen = args[1];
        if (!oldRen || !newRen) {
          stdoutLines = ["The syntax of the command is incorrect."];
          isError = true;
        } else {
          const oldResolved = resolvePath(currentPath, oldRen);
          // Rename only in the same folder context
          const parentFolder = oldResolved.substring(0, oldResolved.lastIndexOf("\\"));
          const newResolved = parentFolder + "\\" + newRen.toUpperCase();

          if (fs[oldResolved]) {
            if (fs[oldResolved].isReadOnly) {
              stdoutLines = ["Access is denied (File is Read-Only)."];
              isError = true;
            } else if (fs[newResolved]) {
              stdoutLines = ["A duplicate file name exists, or the file cannot be found."];
              isError = true;
            } else {
              setFs(prev => {
                const next = { ...prev };
                const oldObj = next[oldResolved];
                delete next[oldResolved];
                next[newResolved] = oldObj;
                
                // Move subfolders recursively
                if (oldObj.isDir) {
                  Object.keys(next).forEach(k => {
                    if (k.startsWith(oldResolved + "\\")) {
                      const sub = k.slice(oldResolved.length);
                      next[newResolved + sub] = next[k];
                      delete next[k];
                    }
                  });
                }
                return next;
              });
              stdoutLines = [];
            }
          } else {
            stdoutLines = ["The system cannot find the file specified."];
            isError = true;
          }
        }
        break;

      case "attrib":
        if (!args[0]) {
          // List files and attributes
          const lines: string[] = [];
          const parent = currentPath.endsWith("\\") ? currentPath : currentPath + "\\";
          Object.keys(fs).forEach(k => {
            if (k.startsWith(parent)) {
              const sub = k.slice(parent.length);
              if (!sub.includes("\\")) {
                const item = fs[k];
                const r = item.isReadOnly ? "R" : " ";
                const h = item.isHidden ? "H" : " ";
                lines.push(`${r}   ${h}     ${k}`);
              }
            }
          });
          stdoutLines = lines;
        } else {
          const attribFlag = args[0].toLowerCase();
          const fileName = args[1];
          if (!fileName) {
            stdoutLines = ["The syntax of the command is incorrect."];
            isError = true;
          } else {
            const fileResolved = resolvePath(currentPath, fileName);
            if (fs[fileResolved]) {
              setFs(prev => {
                const next = { ...prev };
                if (attribFlag === "+r") next[fileResolved].isReadOnly = true;
                if (attribFlag === "-r") next[fileResolved].isReadOnly = false;
                if (attribFlag === "+h") next[fileResolved].isHidden = true;
                if (attribFlag === "-h") next[fileResolved].isHidden = false;
                return next;
              });
              stdoutLines = [];
            } else {
              stdoutLines = ["File not found - " + fileName];
              isError = true;
            }
          }
        }
        break;

      case "tree":
        const treeLines = buildTreeString(currentPath);
        if (treeLines.length === 0) {
          stdoutLines = ["No subfolders exist."];
        } else {
          stdoutLines = [
            `Folder PATH listing for volume C`,
            `Volume serial number is B48C-9F12`,
            currentPath,
            ...treeLines
          ];
        }
        break;

      case "title":
        if (args.length === 0) {
          stdoutLines = ["Usage: title <new_title>"];
          isError = true;
        } else {
          setTerminalTitle(args.join(" "));
          stdoutLines = [];
        }
        break;

      case "set":
        if (args.length === 0) {
          stdoutLines = Object.keys(envVars).map(k => `${k}=${envVars[k]}`);
        } else {
          const fullArg = args.join(" ");
          const eqIdx = fullArg.indexOf("=");
          if (eqIdx !== -1) {
            const varName = fullArg.substring(0, eqIdx).trim().toUpperCase();
            const varVal = fullArg.substring(eqIdx + 1).trim();
            setEnvVars(prev => ({
              ...prev,
              [varName]: varVal
            }));
            stdoutLines = [];
          } else {
            const varName = args[0].toUpperCase();
            stdoutLines = [`${varName}=${envVars[varName] || ""}`];
          }
        }
        break;

      case "powershell":
        setShellMode("powershell");
        stdoutLines = [
          "Windows PowerShell",
          "Copyright (C) Microsoft Corporation. All rights reserved.",
          "",
          "Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows",
          ""
        ];
        break;

      case "diskpart":
        setShellMode("diskpart");
        setDiskpartDisk(null);
        setDiskpartPartition(null);
        stdoutLines = [
          "Microsoft DiskPart version 10.0.22621.1",
          "",
          "Copyright (C) Microsoft Corporation.",
          "On computer: DESKTOP-NEXTSEM",
          "",
          "DiskPart is an interactive partition utility. Type 'help' for instructions.",
          ""
        ];
        break;

      case "get-service":
        if (shellMode !== "powershell") {
          stdoutLines = [`'${command}' is not recognized as an internal or external command,`, "operable program or batch file. Type 'help' for support."];
          isError = true;
        } else {
          stdoutLines = [
            "Status   Name               DisplayName",
            "------   ----               -----------",
            "Running  AppIDSvc           Application Identity",
            "Running  AudioSvc           Windows Audio",
            "Stopped  BluetoothSupport   Bluetooth Support Service",
            "Running  CryptSvc           Cryptographic Services",
            "Running  Dhcp               DHCP Client",
            "Running  Dnscache           DNS Client",
            "Running  EventLog           Windows Event Log",
            "Stopped  Spooler            Print Spooler"
          ];
        }
        break;

      case "get-process":
        if (shellMode !== "powershell") {
          stdoutLines = [`'${command}' is not recognized as an internal or external command,`, "operable program or batch file. Type 'help' for support."];
          isError = true;
        } else {
          stdoutLines = [
            "Handles  NPM(K)    PM(K)      WS(K)     CPU(s)     Id  SI ProcessName",
            "-------  ------    -----      -----     ------     --  -- -----------",
            "    210      12     8420      24120       0.45   5904   1 cmd",
            "    890      45   324500     412000      23.14   8412   1 chrome",
            "   1120      60   142400     195000       4.12   3212   1 explorer",
            "    150       8     4520      12400       0.12    744   0 services"
          ];
        }
        break;

      case "shutdown":
        const isRestart = args.includes("/r") || args.includes("/R");
        const isShutdown = args.includes("/s") || args.includes("/S");
        const isAbort = args.includes("/a") || args.includes("/A");
        
        if (isAbort) {
          if (shutdownTimerVal) {
            clearTimeout(shutdownTimerVal);
            setShutdownTimerVal(null);
            stdoutLines = ["The system shutdown has been aborted."];
          } else {
            stdoutLines = ["Unable to abort the system shutdown because no shutdown was in progress."];
            isError = true;
          }
        } else if (isShutdown || isRestart) {
          let timeoutSec = 5;
          const tIdx = args.findIndex(v => v.toLowerCase() === "/t");
          if (tIdx !== -1 && args[tIdx + 1]) {
            timeoutSec = parseInt(args[tIdx + 1], 10) || 5;
          }
          
          stdoutLines = [`This system will shut down in ${timeoutSec} seconds.`];
          
          if (shutdownTimerVal) clearTimeout(shutdownTimerVal);
          
          const timer = setTimeout(() => {
            handleSignOut();
          }, timeoutSec * 1000);
          setShutdownTimerVal(timer);
        } else {
          stdoutLines = ["Usage: shutdown [/s | /r | /a] [/t xxx]"];
        }
        break;

      case "gpupdate":
        stdoutLines = [
          "Updating policy...",
          "Computer Policy update has completed successfully.",
          "User Policy update has completed successfully."
        ];
        break;

      case "driverquery":
        stdoutLines = [
          "Module Name  Display Name           Driver Type   Link Date",
          "===========  =====================  ============  ====================",
          "AppID        AppID Driver           Kernel        07/10/2026 12:00:00",
          "disk         Disk Driver            Kernel        07/10/2026 12:00:00",
          "intelpep     Intel Power Engine     Kernel        07/10/2026 12:00:00",
          "ntfs         NTFS File System       File System   07/10/2026 12:00:00",
          "pci          PCI Bus Driver         Kernel        07/10/2026 12:00:00"
        ];
        break;

      case "schtasks":
        stdoutLines = [
          "Folder: \\",
          "TaskName                                 Next Run Time          Status",
          "======================================== ====================== ===============",
          "\\NextsemUpdateCheck                      07/11/2026 10:00:00 AM Ready",
          "\\OneDrive Reporting                      07/11/2026 12:00:00 PM Ready"
        ];
        break;

      case "robocopy":
        const srcRobo = args[0];
        const destRobo = args[1];
        if (!srcRobo || !destRobo) {
          stdoutLines = ["Usage: robocopy <source> <destination>"];
          isError = true;
        } else {
          const srcRes = resolvePath(currentPath, srcRobo);
          const destRes = resolvePath(currentPath, destRobo);
          if (fs[srcRes] && !fs[srcRes].isDir) {
            setFs(prev => ({
              ...prev,
              [destRes]: {
                isDir: false,
                content: prev[srcRes].content || "",
                isReadOnly: false,
                isHidden: false
              }
            }));
            stdoutLines = [
              "-------------------------------------------------------------------------------",
              "   ROBOCOPY     ::     Robust File Copy for Windows",
              "-------------------------------------------------------------------------------",
              "  Started : " + new Date().toLocaleString(),
              "   Source : " + currentPath,
              "     Dest : " + currentPath,
              "    Files : " + srcRobo,
              "  Options : /DCOPY:DA /COPY:DAT /R:1000000 /W:30",
              "",
              "Total    Copied   Skipped  Mismatch    FAILED    Extras",
              " Dirs :         1         0         1         0         0         0",
              "Files :         1         1         0         0         0         0"
            ];
          } else {
            stdoutLines = ["Error: Source file not found."];
            isError = true;
          }
        }
        break;

      case "assoc":
        stdoutLines = [
          ".txt=txtfile",
          ".html=htmlfile",
          ".js=jsfile",
          ".json=jsonfile",
          ".css=cssfile"
        ];
        break;

      case "ftype":
        stdoutLines = [
          "txtfile=notepad.exe \"%1\"",
          "htmlfile=chrome.exe \"%1\"",
          "jsfile=node.exe \"%1\"",
          "cssfile=notepad.exe \"%1\""
        ];
        break;

      case "wmic":
        const targetWmic = args[1]?.toLowerCase();
        if (targetWmic === "cpu") {
          stdoutLines = ["Name", "Intel(R) Core(TM) i7-12700H CPU @ 2.70GHz"];
        } else if (targetWmic === "bios") {
          stdoutLines = ["SerialNumber", "B48C-9F12"];
        } else {
          stdoutLines = ["Usage: wmic <alias> get <property> (e.g. wmic cpu get name)"];
        }
        break;

      case "getmac":
        stdoutLines = [
          "Physical Address    Transport Name",
          "=================== =========================================================",
          "E8-11-32-A5-92-CF   \\Device\\Tcpip_{4546B48C-9F12-42FF-B326-1000000AA523}"
        ];
        break;

      case "format":
        const targetFormat = args[0]?.toUpperCase();
        if (targetFormat === "D:") {
          setFormatPendingConfirm(true);
          stdoutLines = [
            "WARNING, ALL DATA ON NON-REMOVABLE DISK DRIVE D: WILL BE LOST!",
            "Proceed with Format (Y/N)?"
          ];
        } else if (!targetFormat) {
          stdoutLines = ["Required parameter missing. Try: format D:"];
          isError = true;
        } else {
          stdoutLines = ["Access is denied. Cannot format active system drive " + targetFormat];
          isError = true;
        }
        break;

      case "fc":
        const file1 = args[0];
        const file2 = args[1];
        if (!file1 || !file2) {
          stdoutLines = ["Usage: fc <file1> <file2>"];
          isError = true;
        } else {
          const path1 = resolvePath(currentPath, file1);
          const path2 = resolvePath(currentPath, file2);
          if (fs[path1] && !fs[path1].isDir && fs[path2] && !fs[path2].isDir) {
            const c1 = fs[path1].content || "";
            const c2 = fs[path2].content || "";
            if (c1 === c2) {
              stdoutLines = ["FC: no differences encountered"];
            } else {
              stdoutLines = [
                "Comparing files " + file1 + " and " + file2,
                `***** ${file1}`,
                c1,
                "*****",
                `***** ${file2}`,
                c2,
                "*****"
              ];
            }
          } else {
            stdoutLines = ["FC: cannot open file(s) for comparison."];
            isError = true;
          }
        }
        break;

      case "find":
        let findText = args[0];
        const findFile = args[1];
        if (!findText || !findFile) {
          stdoutLines = ["Usage: find \"text\" <filename>"];
          isError = true;
        } else {
          findText = findText.replace(/['"]/g, "");
          const filePath = resolvePath(currentPath, findFile);
          if (fs[filePath] && !fs[filePath].isDir) {
            const fileLines = (fs[filePath].content || "").split("\n");
            const matches = fileLines.filter(l => l.toLowerCase().includes(findText.toLowerCase()));
            stdoutLines = [
              `---------- ${findFile.toUpperCase()}`,
              ...matches
            ];
          } else {
            stdoutLines = ["FIND: File not found - " + findFile];
            isError = true;
          }
        }
        break;

      default:
        stdoutLines = [`'${command}' is not recognized as an internal or external command,`, "operable program or batch file. Type 'help' for support."];
        isError = true;
        break;
    }

    // Redirect to clipboard if piped to clip
    if (isPiped && pipeTarget === "clip") {
      const clipboardText = stdoutLines.join("\n");
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(clipboardText).catch(() => {});
      }
      stdoutLines = ["Success: Output copied to clipboard."];
    }

    // Redirect to file handler
    if (redirectFile) {
      if (redirectFile.includes(" ")) {
        stdoutLines = ["Error: Space detected in destination filename."];
        isError = true;
      } else {
        const fileResolved = resolvePath(currentPath, redirectFile);
        const existing = fs[fileResolved];
        if (existing && existing.isReadOnly) {
          stdoutLines = ["Access is denied (File is Read-Only)."];
          isError = true;
        } else {
          const writtenContent = stdoutLines.join("\n");
          setFs(prev => {
            const prevContent = (isAppend && prev[fileResolved]?.content) ? prev[fileResolved].content + "\n" : "";
            return {
              ...prev,
              [fileResolved]: {
                isDir: false,
                content: prevContent + writtenContent,
                isReadOnly: false,
                isHidden: false
              }
            };
          });
          stdoutLines = [];
        }
      }
    }

    // Append output lines to console history
    const finalHistory = [...newHistory];
    stdoutLines.forEach(l => {
      finalHistory.push({ text: l, type: isError ? "error" : "output" });
    });
    finalHistory.push({ text: "", type: "output" });
    
    setHistory(finalHistory);
    setInputVal("");

    // Validate step
    checkLessonCompletion(trimmed);
  };

  // Simulated Async ping / chkdsk / sfc / tracert / format
  const runAsync = (type: "ping" | "chkdsk" | "sfc" | "tracert" | "format", args: string[], baseHistory: HistoryLine[]) => {
    setIsWorking(true);
    let step = 0;

    if (type === "ping") {
      const target = args[0] || "nextsem.online";
      const localHist = [...baseHistory];

      const interval = setInterval(() => {
        step++;
        if (step === 1) {
          localHist.push({ text: `Pinging ${target} [199.36.158.100] with 32 bytes of data:`, type: "output" });
          setHistory([...localHist]);
        } else if (step <= 5) {
          const latency = Math.floor(Math.random() * 8) + 12;
          localHist.push({ text: `Reply from 199.36.158.100: bytes=32 time=${latency}ms TTL=54`, type: "output" });
          setHistory([...localHist]);
        } else {
          clearInterval(interval);
          localHist.push(
            { text: "", type: "output" },
            { text: `Ping statistics for ${target}:`, type: "output" },
            { text: `    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),`, type: "output" },
            { text: `Approximate round trip times in milli-seconds:`, type: "output" },
            { text: `    Minimum = 12ms, Maximum = 20ms, Average = 15ms`, type: "output" },
            { text: "", type: "output" }
          );
          setHistory(localHist);
          setIsWorking(false);
          checkLessonCompletion("ping " + target);
        }
      }, 500);
    } else if (type === "chkdsk") {
      const localHist = [...baseHistory];
      localHist.push({ text: "The type of the file system is NTFS.", type: "output" });
      setHistory([...localHist]);

      const interval = setInterval(() => {
        step++;
        if (step === 1) {
          localHist.push({ text: "Stage 1: Examining basic file system structure...", type: "output" });
          setHistory([...localHist]);
        } else if (step === 2) {
          localHist.push({ text: "Stage 2: Examining file name linkage...", type: "output" });
          setHistory([...localHist]);
        } else if (step === 3) {
          localHist.push({ text: "Stage 3: Examining security descriptors...", type: "output" });
          setHistory([...localHist]);
        } else {
          clearInterval(interval);
          localHist.push(
            { text: "Windows has scanned the file system and found no problems.", type: "output" },
            { text: "No further action is required.", type: "output" },
            { text: "   98,421,098 KB total disk space.", type: "output" },
            { text: "        1,244 KB in 12 files.", type: "output" },
            { text: "        4,512 KB in 9 folders.", type: "output" },
            { text: "   98,415,342 KB available on disk.", type: "output" },
            { text: "", type: "output" }
          );
          setHistory(localHist);
          setIsWorking(false);
        }
      }, 600);
    } else if (type === "sfc") {
      const localHist = [...baseHistory];
      localHist.push({ text: "Beginning system scan. This process will take some time.", type: "output" });
      localHist.push({ text: "Beginning verification phase of system scan.", type: "output" });
      setHistory([...localHist]);

      const interval = setInterval(() => {
        step++;
        if (step === 1) {
          localHist.push({ text: "Verification 20% complete.", type: "output" });
          setHistory([...localHist]);
        } else if (step === 2) {
          localHist.push({ text: "Verification 50% complete.", type: "output" });
          setHistory([...localHist]);
        } else if (step === 3) {
          localHist.push({ text: "Verification 80% complete.", type: "output" });
          setHistory([...localHist]);
        } else if (step === 4) {
          localHist.push({ text: "Verification 100% complete.", type: "output" });
          setHistory([...localHist]);
        } else {
          clearInterval(interval);
          localHist.push(
            { text: "Windows Resource Protection did not find any integrity violations.", type: "output" },
            { text: "", type: "output" }
          );
          setHistory(localHist);
          setIsWorking(false);
        }
      }, 500);
    } else if (type === "tracert") {
      const target = args[0] || "nextsem.online";
      const localHist = [...baseHistory];
      localHist.push({ text: `Tracing route to ${target} [199.36.158.100] over a maximum of 30 hops:`, type: "output" });
      setHistory([...localHist]);

      const interval = setInterval(() => {
        step++;
        if (step === 1) {
          localHist.push({ text: "  1    <1 ms    <1 ms    <1 ms  192.168.1.1", type: "output" });
          setHistory([...localHist]);
        } else if (step === 2) {
          localHist.push({ text: "  2     1 ms     1 ms     1 ms  10.0.0.1", type: "output" });
          setHistory([...localHist]);
        } else if (step === 3) {
          localHist.push({ text: "  3    12 ms    10 ms    11 ms  72.14.232.12", type: "output" });
          setHistory([...localHist]);
        } else if (step === 4) {
          localHist.push({ text: "  4    15 ms    14 ms    14 ms  199.36.158.100", type: "output" });
          setHistory([...localHist]);
        } else {
          clearInterval(interval);
          localHist.push({ text: "Trace complete.", type: "output" }, { text: "", type: "output" });
          setHistory(localHist);
          setIsWorking(false);
        }
      }, 500);
    } else if (type === "format") {
      const localHist = [...baseHistory];
      localHist.push({ text: "Formatting D: drive...", type: "output" });
      setHistory([...localHist]);

      const interval = setInterval(() => {
        step++;
        if (step === 1) {
          localHist.push({ text: "Creating file system structures...", type: "output" });
          setHistory([...localHist]);
        } else if (step === 2) {
          localHist.push({ text: "Verifying 50.0 GB...", type: "output" });
          setHistory([...localHist]);
        } else {
          clearInterval(interval);
          setFs(prev => {
            const next = { ...prev };
            Object.keys(next).forEach(k => {
              if (k.startsWith("D:\\") && k !== "D:") {
                delete next[k];
              }
            });
            return next;
          });
          localHist.push(
            { text: "Format complete.", type: "output" },
            { text: "D: drive now has 53,687,091,200 bytes of free space.", type: "output" },
            { text: "", type: "output" }
          );
          setHistory(localHist);
          setIsWorking(false);
        }
      }, 600);
    }
  };

  // Lesson Step Validation Trigger
  const checkLessonCompletion = (enteredCmd: string) => {
    if (certified) return; // already certified

    const currentStep = SIMULATOR_STEPS[stepIdx];
    if (!currentStep) return;

    // Normalizing comparisons
    const entered = enteredCmd.trim().toLowerCase().replace(/\s+/g, " ");
    const expected = currentStep.expectedCommand.trim().toLowerCase().replace(/\s+/g, " ");

    let match = false;
    if (expected === "dir") {
      match = entered.startsWith("dir");
    } else if (expected === "tree") {
      match = entered.startsWith("tree");
    } else if (expected === "ipconfig") {
      match = entered.startsWith("ipconfig");
    } else if (expected === "ping nextsem.online") {
      match = entered.startsWith("ping");
    } else {
      match = entered === expected;
    }

    if (match) {
      // Correct command entered! Move to next step
      const nextStepIdx = stepIdx + 1;
      const isLastStep = nextStepIdx >= SIMULATOR_STEPS.length;
      
      const newPoints = (stepIdx + 1) * 100;
      setPoints(newPoints);

      if (isLastStep) {
        setCertified(true);
        setShowCertOverlay(true);
        saveProgress(stepIdx, true);
      } else {
        setStepIdx(nextStepIdx);
        saveProgress(nextStepIdx, false);
      }

      // Add success response banner inside command history log
      setHistory(prev => [
        ...prev,
        { text: `[SYSTEM ALERT] ${currentStep.successMsg}`, type: "system" },
        { text: `+100 XP gained! Total XP: ${newPoints}`, type: "system" },
        { text: "", type: "output" }
      ]);
      setShowHint(false);
    }
  };

  const handleLessonSkip = () => {
    if (stepIdx < SIMULATOR_STEPS.length - 1) {
      const nextStep = stepIdx + 1;
      setStepIdx(nextStep);
      setPoints(nextStep * 100);
      saveProgress(nextStep, false);
      
      setHistory(prev => [
        ...prev,
        { text: `[SYSTEM] Skipped to Lesson ${nextStep + 1}: ${SIMULATOR_STEPS[nextStep].title}`, type: "system" },
        { text: "", type: "output" }
      ]);
    }
  };

  const resetAllProgress = () => {
    if (!user) return;
    setStepIdx(0);
    setPoints(0);
    setCertified(false);
    setShowCertOverlay(false);
    saveProgress(0, false);

    setHistory([
      { text: "Microsoft Windows [Version 10.0.22621.1702]", type: "output" },
      { text: "(c) Microsoft Corporation. All rights reserved.", type: "output" },
      { text: "", type: "output" },
      { text: "Console session reset. All lesson progress cleared successfully.", type: "system" },
      { text: "", type: "output" }
    ]);
  };

  // Google sign-in layout
  if (!user && !authLoading) {
    return (
      <div className="min-h-screen bg-[#03060f] flex flex-col items-center justify-center p-4 text-slate-100 font-sans relative overflow-hidden">
        {/* Glow decorative graphics */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-600/10 blur-[130px] pointer-events-none" />

        <div className="max-w-md w-full bg-slate-900/65 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl text-center flex flex-col items-center justify-between min-h-[460px] relative z-10 animate-in fade-in zoom-in duration-300">
          <div className="w-full">
            <div className="bg-[#0a0f1c] rounded-2xl w-14 h-14 flex items-center justify-center border border-emerald-500/20 shadow-inner mb-6 mx-auto">
              <span className="text-[#39ff14] font-black text-lg tracking-tighter" style={{ textShadow: '0 0 8px #39ff14' }}>⊞</span>
            </div>
            
            <span className="text-[9px] font-black uppercase tracking-widest text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
              Authorization Required
            </span>

            <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-5">
              Command Line Simulator
            </h1>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed px-2">
              Sign in with your Google account to unlock the Windows CMD Terminal, track your step-by-step progress, and claim your Certificate of Mastery.
            </p>
          </div>

          <div className="w-full mt-8 space-y-4">
            <button
              onClick={handleSignIn}
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-wider rounded-2xl transition-all duration-200 cursor-pointer shadow-lg hover:scale-102 active:scale-98"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.48 14.97 1 12 1 7.24 1 3.2 3.73 1.24 7.72l3.85 2.99C6.01 7.69 8.78 5.04 12 5.04z"/>
                <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.74-2.4 3.58l3.76 2.91c2.2-2.03 3.67-5.02 3.67-8.64z"/>
                <path fill="#FBBC05" d="M5.09 10.71c-.24-.72-.37-1.49-.37-2.29s.13-1.57.37-2.29L1.24 7.14C.45 8.73 0 10.51 0 12.42s.45 3.69 1.24 5.28l3.85-2.99c-.24-.72-.37-1.49-.37-2.29z"/>
                <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.76-2.91c-1.1.74-2.52 1.18-4.2 1.18-3.22 0-5.99-2.65-6.91-5.67l-3.85 2.99C3.2 20.27 7.24 23 12 23z"/>
              </svg>
              <span>Sign In With Google</span>
            </button>

            <Link
              href="/"
              className="text-[10px] text-slate-500 hover:text-slate-350 transition-colors uppercase font-bold tracking-wider block"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#03060f] flex flex-col items-center justify-center text-slate-400 font-mono">
        <RefreshCw size={24} className="animate-spin text-emerald-400 mb-3" />
        <span className="text-[10px] uppercase tracking-widest text-slate-550 font-bold">Synchronizing Terminal Session...</span>
      </div>
    );
  }

  const currentStep = SIMULATOR_STEPS[stepIdx];

  return (
    <div className="h-screen w-screen bg-[#03050c] flex flex-col lg:flex-row text-slate-200 overflow-hidden font-sans select-none relative">
      
      {/* ── LEFT PANE: LESSONS & PROGRESS ── */}
      <div className="w-full lg:w-[420px] xl:w-[450px] border-b lg:border-b-0 lg:border-r border-slate-800 bg-[#070b14] flex flex-col justify-between h-[45%] lg:h-full shrink-0 z-10">
        
        {/* User Account / Navigation Bar */}
        <div className="p-4 border-b border-slate-850 flex items-center justify-between bg-slate-950/20">
          <div className="flex items-center gap-2">
            <Link 
              href="/course"
              className="p-1.5 rounded-lg hover:bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
              title="Close and Go Back to Course Menu"
            >
              <X size={16} className="stroke-[2.5]" />
            </Link>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#39FF14] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">
              Terminal Academy
            </span>
          </div>

          {user && (
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] font-black text-white">{user.name}</div>
                <div className="text-[8px] font-bold text-slate-500">{points} XP</div>
              </div>
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-7 h-7 rounded-full object-cover border border-slate-800"
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-650 text-white flex items-center justify-center font-black text-xs">
                  {user.name[0]}
                </div>
              )}
              <button
                onClick={handleSignOut}
                className="p-1.5 rounded-lg hover:bg-rose-500/10 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                title="Sign Out"
              >
                <LogOut size={13} />
              </button>
            </div>
          )}
        </div>

        {/* Lesson Body Scrolling Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin">
          
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex justify-between items-end text-xs font-black uppercase">
              <span className="text-slate-400">Mastery Progress</span>
              <span className="text-[#39FF14]">{certified ? "100" : Math.round((stepIdx / SIMULATOR_STEPS.length) * 100)}%</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-slate-900 border border-slate-850 h-2.5 rounded-full overflow-hidden p-[1px]">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-[#39FF14] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#39ff14]"
                style={{ width: `${certified ? 100 : (stepIdx / SIMULATOR_STEPS.length) * 100}%` }}
              />
            </div>

            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-slate-500">
              <Star size={10} className="fill-amber-500/80 text-amber-500" />
              <span>{certified ? "10 / 10" : `${stepIdx} / ${SIMULATOR_STEPS.length}`} Lessons Completed</span>
            </div>
          </div>

          {/* Lesson Card */}
          {!certified ? (
            <div className="bg-[#0b101c] border border-slate-850 rounded-2xl p-5 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-blue-500/5 border-l border-b border-blue-500/5 flex items-center justify-center font-bold text-xs text-blue-400 select-none">
                #{stepIdx + 1}
              </div>

              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">Current Objective</span>
                <h2 className="text-sm font-black text-white uppercase tracking-tight mt-1 flex items-center gap-1.5">
                  {currentStep.title}
                </h2>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {currentStep.instruction}
              </p>

              {/* Expected input prompt */}
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-900/60 flex items-center justify-between">
                <div 
                  className="min-w-0 cursor-pointer group"
                  onClick={() => {
                    setInputVal(currentStep.expectedCommand);
                    executeCommand(currentStep.expectedCommand);
                  }}
                  title="Click to run command"
                >
                  <span className="block text-[8px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-450 transition-colors">Expected Command (Click to Run)</span>
                  <code className="font-mono text-xs text-[#39FF14] break-all group-hover:underline">{currentStep.expectedCommand}</code>
                </div>
                <button
                  onClick={() => {
                    setInputVal(currentStep.expectedCommand);
                    executeCommand(currentStep.expectedCommand);
                  }}
                  className="p-1.5 px-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all active:scale-90 cursor-pointer text-[9px] font-black uppercase tracking-wide shrink-0"
                  title="Run command in terminal"
                >
                  Run
                </button>
              </div>

              {/* Show Hint area */}
              <div>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-[10px] font-black uppercase tracking-wider text-slate-500 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <HelpCircle size={11} />
                  <span>{showHint ? "Hide Explanation" : "Need a Hint?"}</span>
                </button>

                {showHint && (
                  <div className="mt-2.5 p-3.5 bg-slate-950/40 rounded-xl border border-slate-850/60 text-[10px] text-slate-450 leading-relaxed font-medium transition-all duration-300">
                    <strong>💡 Command Guide:</strong> {currentStep.hint}
                  </div>
                )}
              </div>

              {/* Previous / Next Lesson Navigation Controls */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-900 select-none">
                <button
                  disabled={stepIdx === 0}
                  onClick={() => {
                    if (stepIdx > 0) {
                      setStepIdx(prev => prev - 1);
                      setInputVal("");
                      setShowHint(false);
                    }
                  }}
                  className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1 cursor-pointer font-sans"
                >
                  <span>◀</span> Prev Lesson
                </button>

                <button
                  onClick={handleLessonSkip}
                  className="text-[9px] font-black uppercase tracking-widest text-slate-600 hover:text-slate-400 transition-colors flex items-center gap-0.5 cursor-pointer font-sans"
                >
                  <span>Skip Lesson</span>
                  <ChevronRight size={10} />
                </button>

                <button
                  disabled={stepIdx === SIMULATOR_STEPS.length - 1}
                  onClick={() => {
                    if (stepIdx < SIMULATOR_STEPS.length - 1) {
                      setStepIdx(prev => prev + 1);
                      setInputVal("");
                      setShowHint(false);
                    }
                  }}
                  className="text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1 cursor-pointer font-sans"
                >
                  Next Lesson <span>▶</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="bg-[#0b101c] border border-[#39ff14]/20 rounded-2xl p-5 space-y-4 text-center relative overflow-hidden shadow-lg shadow-emerald-500/5">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-[#39ff14]/30 flex items-center justify-center mx-auto text-[#39ff14] mb-2 animate-bounce">
                <Award size={20} />
              </div>
              <h2 className="text-sm font-black text-white uppercase tracking-tight">
                Certification Ready!
              </h2>
              <p className="text-xs text-slate-450 leading-relaxed font-medium">
                Excellent! You successfully completed all 10 terminal lessons. Your Windows CMD Terminal Certificate is ready to claim.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => setShowCertOverlay(true)}
                  className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-[#39ff14] hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
                >
                  View & Claim Certificate
                </button>
              </div>
            </div>
          )}

          {/* Quick Info Checklist (Fully Clickable & Unlocked) */}
          <div className="space-y-2">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 pl-1">Syllabus Overview</span>
            <div className="space-y-1.5">
              {SIMULATOR_STEPS.map((step, idx) => {
                const isDone = certified || idx < stepIdx;
                const isActive = !certified && idx === stepIdx;
                return (
                  <button 
                    key={step.id}
                    onClick={() => {
                      setStepIdx(idx);
                      setInputVal("");
                      setShowHint(false);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-[11px] font-medium text-left transition-all cursor-pointer ${
                      isActive 
                        ? "bg-blue-500/10 border-blue-500/40 text-white font-bold" 
                        : isDone 
                          ? "bg-slate-900/35 border-slate-900 text-slate-350 hover:bg-slate-900/50" 
                          : "bg-slate-900/10 border-slate-900/40 text-slate-400 hover:bg-slate-900/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center border shrink-0 ${
                        isDone 
                          ? "border-[#39ff14]/30 bg-emerald-500/10 text-[#39ff14]" 
                          : isActive 
                            ? "border-blue-400 bg-blue-500/10 text-blue-400 animate-pulse" 
                            : "border-slate-800 text-slate-500"
                      }`}>
                        {isDone ? <Check size={10} className="stroke-[3]" /> : idx + 1}
                      </div>
                      <span className="truncate">{step.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Reset settings button */}
        <div className="p-4 border-t border-slate-850 flex items-center justify-between bg-slate-950/20">
          <button
            onClick={resetAllProgress}
            className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-slate-650 hover:text-slate-450 transition-colors cursor-pointer"
            title="Reset Terminal Progression State"
          >
            <RefreshCcw size={10} />
            <span>Reset Lesson Progress</span>
          </button>

          <span className="text-[8px] font-mono text-slate-650 font-bold uppercase">
            v1.1.0-SIM
          </span>
        </div>

      </div>

      {/* ── RIGHT PANE: WINDOWS 11 CMD CONSOLE ── */}
      <div className="flex-1 flex flex-col h-[55%] lg:h-full bg-slate-950 relative overflow-hidden">
        
        {/* Terminal Header Tab Bar (Windows 11 Layout) */}
            <div className="bg-[#1d1d1f] border-b border-[#2d2d2f] flex items-center justify-between px-4 select-none shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-[#2d2d2f] text-slate-300 font-mono text-[10px] px-3 py-1.5 rounded-t-lg border-t border-x border-[#3d3d3f] flex items-center gap-1.5">
              <Terminal size={11} className="text-[#39FF14]" />
              <span className="font-bold">{terminalTitle}</span>
            </div>
          </div>

          {/* Windows 11 Chrome window control buttons */}
          <div className="flex items-center gap-3 text-slate-500 hover:text-slate-300 transition-colors text-xs pr-1">
            <span className="cursor-pointer font-light select-none hover:text-white transition-colors">─</span>
            <span className="cursor-pointer font-light select-none hover:text-white transition-colors">☐</span>
            <span className="cursor-pointer font-light select-none hover:text-rose-500 transition-colors">✕</span>
          </div>
        </div>

        {/* Terminal Screen Console Buffer */}
        <div 
          onClick={focusInput}
          className="flex-1 p-5 overflow-y-auto font-mono text-xs select-text scrollbar-thin cursor-text"
          style={{ 
            backgroundColor: themeColors.bg, 
            color: themeColors.text,
            transition: "background-color 0.3s, color 0.3s"
          }}
        >
          <div className="space-y-1">
            {history.map((line, idx) => {
              let colorClass = "";
              if (line.type === "error") colorClass = "text-rose-500 font-bold";
              if (line.type === "system") colorClass = "text-[#39FF14] font-bold";
              return (
                <div key={idx} className={`whitespace-pre-wrap leading-relaxed ${colorClass}`}>
                  {line.text}
                </div>
              );
            })}

            {/* Input Line */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                executeCommand(inputVal);
              }}
              className="flex items-center leading-relaxed w-full"
            >
              <span className="whitespace-nowrap mr-2 select-none">
                {getPrompt()}
              </span>
              <div className="flex-1 relative flex items-center mr-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isWorking}
                  autoFocus
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-inherit font-mono leading-relaxed"
                />
                {/* Simulated pulsing custom cursor in case input is out of focus */}
                {isWorking && (
                  <span className="absolute left-0 w-1.5 h-3.5 bg-slate-400 animate-pulse ml-0.5" />
                )}
              </div>
              <button
                type="submit"
                disabled={isWorking || !inputVal.trim()}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-350 hover:text-white rounded font-mono text-[9px] uppercase tracking-wide cursor-pointer transition-all active:scale-95 shrink-0 flex items-center gap-1"
                title="Execute command (Enter)"
              >
                <span>Enter</span>
                <span className="text-[7px]">⏎</span>
              </button>
            </form>
            
            <div ref={terminalEndRef} />
          </div>
        </div>

      </div>

      {/* ── CERTIFICATE CLAIM MODAL OVERLAY ── */}
      {showCertOverlay && user && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="max-w-2xl w-full bg-[#0a0f1d] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-between text-center relative shadow-2xl overflow-y-auto max-h-[90vh]">
            
            <button
              onClick={() => setShowCertOverlay(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white text-lg p-1.5 hover:bg-slate-900 rounded-full transition-colors cursor-pointer"
            >
              ✕
            </button>

            <span className="text-[9px] font-black uppercase tracking-widest text-[#39ff14] bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Course Completed
            </span>

            {/* Simulated certificate card */}
            <div className="w-full border-4 border-double border-amber-500/30 bg-slate-950 p-6 md:p-8 rounded-2xl my-6 select-text text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full flex items-center justify-center text-amber-500 opacity-20 font-black text-6xl">
                ★
              </div>

              <h3 className="font-serif text-amber-500 dark:text-amber-400 font-extrabold text-lg md:text-xl uppercase tracking-widest">
                Certificate of Mastery
              </h3>
              <p className="text-[8px] md:text-[9px] font-mono text-slate-550 uppercase tracking-widest mt-1">
                Nextsem Command Line Workstation
              </p>

              <div className="my-6">
                <span className="block text-[9px] font-serif italic text-slate-450">This is to certify that</span>
                <span className="block text-lg md:text-xl font-bold text-white uppercase tracking-tight mt-1.5 border-b border-slate-850 pb-1.5 max-w-xs mx-auto">
                  {user.name}
                </span>
                <span className="block text-[9px] text-slate-400 leading-relaxed mt-2 px-6">
                  has successfully completed all practical lessons on the interactive **Windows CMD Simulator**, demonstrating proficiency in listing, navigation, creation, copying, moving, renaming, and diagnostic diagnostics.
                </span>
              </div>

              <div className="flex justify-between items-center px-4 mt-6 pt-4 border-t border-slate-900 text-[8px] font-mono text-slate-500">
                <div className="text-left">
                  <span>DATE OF ISSUE</span>
                  <span className="block font-bold text-slate-400 uppercase mt-0.5">{new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="text-right">
                  <span>AUTHORIZED SIGNATORY</span>
                  <span className="block font-bold text-[#39ff14] uppercase mt-0.5">NEXTSEM ACADEMY ✓</span>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex-1 py-3 bg-white hover:bg-slate-100 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Download size={14} />
                <span>Save PDF</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("https://nextsem.online/cmd");
                  setCopiedLink(true);
                  setTimeout(() => setCopiedLink(false), 2000);
                }}
                className="flex-1 py-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                {copiedLink ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Share Link</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
