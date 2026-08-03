export interface LessonExercise {
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
}

export interface CommandItem {
  cmd: string;
  description: string;
  example?: string;
  notes?: string;
}

export interface Lesson {
  id: number;
  slug: string;
  originalChapterId: string;
  title: string;
  unit: string;
  bookRef: string;
  icon: string;
  exercise: LessonExercise;
  commands: CommandItem[];
  content: string;
}

export const cliLessons: Lesson[] = [
  {
    id: 1,
    slug: "introduction-to-command-line-interface-cli-basics",
    originalChapterId: "p0-2-terminal",
    title: "How to Open Windows 11 Command Prompt (`cmd.exe`)",
    unit: "Unit 1: Command Line & Terminal Foundations",
    bookRef: "Windows CLI Basics (p. 1-5)",
    icon: "",
    exercise: {
      question: "What shortcut key combination opens the Run dialog box in Windows 11 to launch cmd?",
      options: [
        "Win + R",
        "Ctrl + Shift + Esc",
        "Alt + F4",
        "Win + L"
      ],
      correctAnswer: "Win + R",
      hint: "Press the Windows key + R to open the Run window, then type 'cmd'."
    },
    commands: [
      {
        cmd: "cmd",
        description: "Method 1: Press Win + R to open the Run dialog, type 'cmd', and hit Enter.",
        example: "cmd",
        notes: "Hold Ctrl + Shift + Enter to open Command Prompt as Administrator."
      },
      {
        cmd: "cmd.exe",
        description: "Method 2: Press Win + S (or click Start), type 'Command Prompt' or 'cmd.exe', and press Enter.",
        example: "cmd.exe",
        notes: "Right-click Command Prompt and select 'Run as Administrator' for full elevated permissions."
      },
      {
        cmd: "cmd",
        description: "Method 3: Open File Explorer, click the top address bar in any folder, type 'cmd', and press Enter.",
        example: "cmd",
        notes: "This automatically launches Command Prompt directly inside your current project folder path."
      },
      {
        cmd: "wt",
        description: "Method 4: Press Win + X and select 'Terminal', or press Win + R and type 'wt' to launch Windows Terminal.",
        example: "wt",
        notes: "Windows Terminal is the modern tabbed host app for CMD and PowerShell in Windows 11."
      }
    ],
    content: `### What is the 🪟 Windows Command Prompt (\`cmd.exe\`)?

The Windows Command Prompt (or \`cmd.exe\`) is the default command-line shell in 🪟 Windows 11. Instead of clicking buttons with a mouse, you type commands directly into the terminal to interact with the operating system, run web development servers, manage files, and automate tasks.

* Fast File Operations: Create, move, copy, and delete thousands of files in milliseconds.
* Developer Workflows: Launch dev servers (Node.js, Next.js), manage Git repositories, and run build scripts.
* System Diagnostics: Inspect local network configurations (\`ipconfig\`), test domain latency (\`ping\`), and audit running processes (\`tasklist\`).

---

### 4 Easy Ways to Open Command Prompt in 🪟 Windows 11

Follow the 4 step-by-step methods below to open \`cmd.exe\` on your 🪟 Windows 11 computer. Try each method, run the command, and upload your screenshot for practice!`
  },
  {
    id: 2,
    slug: "learn-windows-command-prompt-cmd-basics",
    originalChapterId: "cli-ch1-basics",
    title: "Essential Windows CMD Commands (`ver`, `cls`, `help`, `title`)",
    unit: "Unit 1: Command Line & Terminal Foundations",
    bookRef: "Windows CLI Basics (p. 6-10)",
    icon: "",
    exercise: {
      question: "Which Windows command is used to clear the terminal screen buffer?",
      options: [
        "ver",
        "cls",
        "help",
        "title"
      ],
      correctAnswer: "cls",
      hint: "Type 'cls' (Clear Screen) to wipe all previous text and start fresh."
    },
    commands: [
      {
        cmd: "ver",
        description: "Queries and outputs the NT kernel build version string in Windows.",
        example: "ver",
        notes: "Outputs e.g. Microsoft Windows [Version 10.0.22631]."
      },
      {
        cmd: "cls",
        description: "Resets the active terminal console screen buffer to blank state.",
        example: "cls",
        notes: "Short for Clear Screen."
      },
      {
        cmd: "help",
        description: "Opens the built-in system command dictionary listing all available commands.",
        example: "help",
        notes: "You can also type 'help <command>' e.g. 'help dir' to see command flags."
      },
      {
        cmd: "title My Web App Dev Server",
        description: "Sets a custom title string for the active Command Prompt window header bar.",
        example: "title My Web App Dev Server",
        notes: "Helps identify which terminal window is running which server process."
      }
    ],
    content: `### Essential Windows Terminal Commands
Every command in the Windows Command Prompt (\`cmd.exe\`) performs a specific system operation. Run each command below in your local terminal and upload your screenshot for practice.`
  },
  {
    id: 3,
    slug: "windows-drive-letters-and-file-system-structure",
    originalChapterId: "cli-ch2-drives",
    title: "Windows File System Structure & Drive Navigation (`C:`, `D:`)",
    unit: "Unit 1: Command Line & Terminal Foundations",
    bookRef: "Windows CLI Basics (p. 11-15)",
    icon: "",
    exercise: {
      question: "Which directory separator character does Windows use in local file paths?",
      options: [
        "Forward slash ( / )",
        "Backslash ( \\ )",
        "Colon ( : )",
        "Dot ( . )"
      ],
      correctAnswer: "Backslash ( \\ )",
      hint: "Windows uses backslashes like C:\\Users\\Developer, whereas Linux/Mac use forward slashes."
    },
    commands: [
      {
        cmd: "C:",
        description: "Switches current working drive to main system partition C: drive.",
        example: "C:",
        notes: "Type C: and hit Enter to change to C drive instantly."
      },
      {
        cmd: "D:",
        description: "Switches current working drive to secondary data partition D: drive.",
        example: "D:",
        notes: "Type D: and hit Enter to switch to D drive."
      },
      {
        cmd: "cd",
        description: "Prints the full absolute path of your current working directory.",
        example: "cd",
        notes: "Running 'cd' without arguments displays where you are located."
      }
    ],
    content: `### Windows Drives & Directory Navigation
Unlike Unix system root \`/\`, Windows organizes disk drives with alphabetical letters followed by a colon.`
  },
  {
    id: 4,
    slug: "mkdir-cd-dir-working-with-windows-directories",
    originalChapterId: "cli-ch4-directories",
    title: "Directory Navigation & Creation (`dir`, `mkdir`, `cd`, `rmdir`)",
    unit: "Unit 2: Directory & File Operations",
    bookRef: "Windows CLI Basics (p. 21-25)",
    icon: "",
    exercise: {
      question: "Which command is used to create a new folder (directory) for a web project in Windows CLI?",
      options: [
        "cd",
        "dir",
        "mkdir",
        "rmdir"
      ],
      correctAnswer: "mkdir",
      hint: "'mkdir' stands for 'Make Directory'."
    },
    commands: [
      {
        cmd: "dir",
        description: "Lists all files, subdirectories, creation dates, and sizes in current folder.",
        example: "dir",
        notes: "Use 'dir /w' for wide layout or 'dir /a' to show hidden files."
      },
      {
        cmd: "mkdir my-app",
        description: "Creates a brand new directory folder named 'my-app'.",
        example: "mkdir my-app",
        notes: "You can also use 'md my-app'."
      },
      {
        cmd: "cd my-app",
        description: "Changes current directory location to step inside 'my-app'.",
        example: "cd my-app",
        notes: "Stands for Change Directory."
      },
      {
        cmd: "cd ..",
        description: "Moves up one level to the parent directory.",
        example: "cd ..",
        notes: "Double dots (..) always refer to the parent directory."
      },
      {
        cmd: "rmdir my-app",
        description: "Deletes an empty folder named 'my-app'.",
        example: "rmdir my-app",
        notes: "Use 'rmdir /s /q my-app' to remove a folder with files inside."
      }
    ],
    content: `### Managing Windows Project Directories
Folders are called directories in software development. Run each directory command below:`
  },
  {
    id: 5,
    slug: "copy-move-rename-delete-files-cmd",
    originalChapterId: "cli-ch7-operations",
    title: "File Operations for Web Developers (`copy`, `move`, `ren`, `del`)",
    unit: "Unit 2: Directory & File Operations",
    bookRef: "Windows CLI Basics (p. 31-35)",
    icon: "",
    exercise: {
      question: "Which command permanently deletes a file in Windows Command Prompt?",
      options: [
        "del",
        "ren",
        "move",
        "copy"
      ],
      correctAnswer: "del",
      hint: "'del' (delete) removes specified file targets."
    },
    commands: [
      {
        cmd: "type nul > index.html",
        description: "Creates a brand new empty file named 'index.html' instantly.",
        example: "type nul > index.html",
        notes: "The standard Windows CMD method to create blank code files."
      },
      {
        cmd: "copy index.html backup.html",
        description: "Creates an exact duplicate copy of 'index.html' as 'backup.html'.",
        example: "copy index.html backup.html",
        notes: "Copies byte-for-byte."
      },
      {
        cmd: "move index.html src\\",
        description: "Moves 'index.html' inside the 'src' subfolder.",
        example: "move index.html src\\",
        notes: "Relocates file without duplicating disk space."
      },
      {
        cmd: "ren index.html main.html",
        description: "Renames 'index.html' to 'main.html'.",
        example: "ren index.html main.html",
        notes: "Short for Rename."
      },
      {
        cmd: "del temp.log",
        description: "Permanently deletes file 'temp.log'.",
        example: "del temp.log",
        notes: "Warning: 'del' bypasses the Recycle Bin."
      }
    ],
    content: `### Managing Code Files
As a developer, you will copy, move, rename, and manage source files daily:`
  },
  {
    id: 6,
    slug: "windows-cli-wildcards-and-stream-redirection",
    originalChapterId: "cli-ch6-redirection",
    title: "Wildcards, Pipes & I/O Redirection (`*`, `?`, `>`, `>>`, `|`)",
    unit: "Unit 2: Directory & File Operations",
    bookRef: "Windows CLI Basics (p. 36-40)",
    icon: "",
    exercise: {
      question: "Which operator redirects command output to a file and appends it without overwriting previous contents?",
      options: [
        ">",
        ">>",
        "<",
        "|"
      ],
      correctAnswer: ">>",
      hint: "Single '>' overwrites the file, whereas double '>>' appends new text at the end."
    },
    commands: [
      {
        cmd: "dir *.js",
        description: "Lists all files ending with .js extension using the asterisk wildcard (*).",
        example: "dir *.js",
        notes: "Asterisk (*) matches any sequence of characters."
      },
      {
        cmd: "echo Hello World > notes.txt",
        description: "Writes text 'Hello World' into 'notes.txt', overwriting previous content.",
        example: "echo Hello World > notes.txt",
        notes: "Single '>' creates or overwrites target file."
      },
      {
        cmd: "echo New Line >> notes.txt",
        description: "Appends text 'New Line' to the bottom of 'notes.txt' without deleting content.",
        example: "echo New Line >> notes.txt",
        notes: "Double '>>' appends new data."
      },
      {
        cmd: "dir | findstr \".html\"",
        description: "Pipes directory listing into filter tool to display only lines containing '.html'.",
        example: "dir | findstr \".html\"",
        notes: "Pipe (|) connects stdout of first command to stdin of second command."
      }
    ],
    content: `### Wildcards & Stream Pipes
Enhance your command line productivity using system operators and wildcard patterns:`
  },
  {
    id: 7,
    slug: "how-to-customize-windows-command-prompt",
    originalChapterId: "cli-ch3-prompt",
    title: "Environment Variables, System PATH & `prompt` Customization",
    unit: "Unit 3: Environment & Process Management",
    bookRef: "Windows CLI Basics (p. 41-45)",
    icon: "",
    exercise: {
      question: "Which environment variable in Windows tells the command prompt where to look for executable software like Node.js or Git?",
      options: [
        "PATH",
        "HOME",
        "TEMP",
        "USER"
      ],
      correctAnswer: "PATH",
      hint: "The PATH environment variable contains directories of system binaries."
    },
    commands: [
      {
        cmd: "echo %PATH%",
        description: "Displays all directory paths configured in the system PATH environment variable.",
        example: "echo %PATH%",
        notes: "Windows checks these directories when running commands."
      },
      {
        cmd: "set PORT=3000",
        description: "Creates a temporary process-scoped environment variable PORT set to 3000.",
        example: "set PORT=3000",
        notes: "Active only in current terminal session."
      },
      {
        cmd: "prompt $p$g",
        description: "Resets prompt layout to show current directory path followed by '>'.",
        example: "prompt $p$g",
        notes: "$p = current path, $g = greater-than symbol (>)."
      }
    ],
    content: `### Environment Variables & PATH Configuration
When you execute tools like \`node\` or \`git\`, Windows references environment variables to locate the binary executables:`
  },
  {
    id: 8,
    slug: "windows-task-management-taskkill-schtasks",
    originalChapterId: "cli-ch14-tasks",
    title: "Process Audit & Task Management (`tasklist`, `taskkill` for freeing node ports)",
    unit: "Unit 3: Environment & Process Management",
    bookRef: "Windows CLI Basics (p. 46-50)",
    icon: "",
    exercise: {
      question: "Which Windows command is used to force terminate a stuck Node.js server process by its image name?",
      options: [
        "tasklist",
        "taskkill /f /im node.exe",
        "schtasks",
        "shutdown"
      ],
      correctAnswer: "taskkill /f /im node.exe",
      hint: "Use 'taskkill /f /im node.exe' to force stop background node processes."
    },
    commands: [
      {
        cmd: "tasklist",
        description: "Displays a complete list of all currently running system processes and process IDs (PID).",
        example: "tasklist",
        notes: "Shows memory footprint and image name of each app."
      },
      {
        cmd: "taskkill /f /im node.exe",
        description: "Force terminates all running instances of Node.js background processes.",
        example: "taskkill /f /im node.exe",
        notes: "Essential for freeing port 3000 when web dev servers get stuck."
      },
      {
        cmd: "taskkill /f /pid 1234",
        description: "Force terminates a specific process handle using its numerical PID ID.",
        example: "taskkill /f /pid 1234",
        notes: "Replace 1234 with target PID from tasklist."
      }
    ],
    content: `### Terminating Stuck Development Processes
If a background web server locks a network port like 3000, you can audit and terminate the process directly:`
  },
  {
    id: 9,
    slug: "network-troubleshooting-ping-tracert-ipconfig",
    originalChapterId: "cli-ch8-networking",
    title: "Network Diagnostics & Web Server Inspection (`ipconfig`, `ping`, `nslookup`, `netstat`)",
    unit: "Unit 4: Networking & Security",
    bookRef: "Windows CLI Basics (p. 51-55)",
    icon: "",
    exercise: {
      question: "Which command in Windows displays active TCP port connections and listening ports on your machine?",
      options: [
        "ipconfig",
        "ping",
        "netstat -ano",
        "tracert"
      ],
      correctAnswer: "netstat -ano",
      hint: "'netstat -ano' displays listening ports, IP connections, and PID numbers."
    },
    commands: [
      {
        cmd: "ipconfig /all",
        description: "Displays complete IP networking details, MAC addresses, and DNS server info.",
        example: "ipconfig /all",
        notes: "Shows your local IPv4 address."
      },
      {
        cmd: "ping nextsem.online",
        description: "Sends ICMP echo packets to test network connectivity and measure server latency.",
        example: "ping nextsem.online",
        notes: "Measures packet round-trip response time in milliseconds (ms)."
      },
      {
        cmd: "nslookup nextsem.online",
        description: "Queries DNS server records to resolve domain names to server IP addresses.",
        example: "nslookup nextsem.online",
        notes: "Useful for verifying domain DNS propagation."
      },
      {
        cmd: "netstat -ano",
        description: "Displays active TCP/UDP network connections, listening ports, and PIDs.",
        example: "netstat -ano",
        notes: "Use to see what app is occupying port 3000 or 8080."
      }
    ],
    content: `### Network Diagnostics for Web Developers
Inspect system network interfaces, DNS resolution, and active port connections:`
  },
  {
    id: 10,
    slug: "learn-windows-batch-files-scripting-basics",
    originalChapterId: "cli-ch13-batch",
    title: "Windows Batch Scripting (`.bat`) for Web App Deployment",
    unit: "Unit 5: Web Developer Automation",
    bookRef: "Windows CLI Basics (p. 56-60)",
    icon: "",
    exercise: {
      question: "Which file extension identifies executable Windows Batch automation scripts?",
      options: [
        ".txt",
        ".bat",
        ".sh",
        ".json"
      ],
      correctAnswer: ".bat",
      hint: "Windows Batch scripts use the '.bat' or '.cmd' extension."
    },
    commands: [
      {
        cmd: "@echo off",
        description: "Suppresses command line echoing in batch scripts for clean output logging.",
        example: "@echo off",
        notes: "Standard first line in .bat scripts."
      },
      {
        cmd: "echo Launching Web Server...",
        description: "Prints custom text string to console window.",
        example: "echo Launching Web Server...",
        notes: "Used to display status messages during script execution."
      },
      {
        cmd: "pause",
        description: "Pauses script execution until user presses any key.",
        example: "pause",
        notes: "Prevents batch window from closing automatically after finishing."
      }
    ],
    content: `### Automating Development Workflows with Batch Scripts
Save sequence commands inside files ending in \`.bat\` to create single-click automation scripts:`
  },
  {
    id: 11,
    slug: "windows-file-attributes-attrib-command",
    originalChapterId: "cli-ch11-attrib",
    title: "Managing Hidden Files & System Attributes (`attrib +h`, `attrib -h`)",
    unit: "Unit 5: System File & Attribute Security",
    bookRef: "Windows CLI Advanced (p. 61-65)",
    icon: "",
    exercise: {
      question: "Which switch parameter hides a file in Windows Command Prompt using the attrib command?",
      options: ["+h", "-h", "+r", "-r"],
      correctAnswer: "+h",
      hint: "Use '+h' to set the hidden file attribute, and '-h' to remove it."
    },
    commands: [
      {
        cmd: "attrib +h .env.local",
        description: "Sets the hidden (+h) attribute on '.env.local' to keep API keys secure.",
        example: "attrib +h .env.local",
        notes: "Prevents accidental directory listing clutter."
      },
      {
        cmd: "attrib -h .env.local",
        description: "Removes the hidden (-h) attribute from '.env.local' to make it visible.",
        example: "attrib -h .env.local",
        notes: "Restores normal file visibility."
      },
      {
        cmd: "attrib +r config.json",
        description: "Sets read-only (+r) flag to prevent accidental editing or deletion.",
        example: "attrib +r config.json",
        notes: "Protects critical configuration files."
      }
    ],
    content: `### Managing File Attributes in Windows
Developers often work with hidden configuration files like \`.env.local\` or read-only settings files. Master the \`attrib\` command to control file visibility and protection:`
  },
  {
    id: 12,
    slug: "windows-system-info-systeminfo-hostname",
    originalChapterId: "cli-ch12-sys",
    title: "System Hardware & Environment Auditing (`systeminfo`, `hostname`)",
    unit: "Unit 5: System File & Attribute Security",
    bookRef: "Windows CLI Advanced (p. 66-70)",
    icon: "",
    exercise: {
      question: "Which command in Windows CLI displays your computer's network hostname?",
      options: ["hostname", "systeminfo", "whoami", "ver"],
      correctAnswer: "hostname",
      hint: "Type 'hostname' to print your machine's netbios network name."
    },
    commands: [
      {
        cmd: "hostname",
        description: "Prints the unique network name of your active Windows workstation.",
        example: "hostname",
        notes: "Identifies your computer on local development networks."
      },
      {
        cmd: "systeminfo",
        description: "Queries complete system specs: OS build, RAM, CPU model, and boot uptime.",
        example: "systeminfo",
        notes: "Outputs detailed hardware and software configuration."
      },
      {
        cmd: "whoami",
        description: "Prints active logged-in username and domain authority level.",
        example: "whoami",
        notes: "Useful for checking active user rights."
      }
    ],
    content: `### Auditing System Specifications & Host Identity
Before running heavy dev build pipelines, inspect your hardware specs, OS version, and network hostname using system auditing commands:`
  },
  {
    id: 13,
    slug: "windows-environment-path-system-variables",
    originalChapterId: "cli-ch13-setx",
    title: "Configuring Permanent Environment Variables (`setx`)",
    unit: "Unit 6: Advanced CLI & Workstation Customization",
    bookRef: "Windows CLI Advanced (p. 71-75)",
    icon: "",
    exercise: {
      question: "Which command sets a permanent user environment variable in Windows CLI?",
      options: ["setx", "set", "export", "env"],
      correctAnswer: "setx",
      hint: "'set' sets variables for the current session only, while 'setx' persists across system restarts."
    },
    commands: [
      {
        cmd: "setx NODE_ENV \"development\"",
        description: "Permanently sets user environment variable NODE_ENV to 'development'.",
        example: "setx NODE_ENV \"development\"",
        notes: "Persists across all future terminal windows and system reboots."
      },
      {
        cmd: "echo %LOCALAPPDATA%",
        description: "Displays absolute path to active user's local application data folder.",
        example: "echo %LOCALAPPDATA%",
        notes: "Standard location for cache data and local DB instances."
      }
    ],
    content: `### Managing Permanent System Environment Variables
Temporary variables created with \`set\` disappear when you close your terminal. Use \`setx\` to store permanent environment settings:`
  },
  {
    id: 14,
    slug: "windows-disk-management-chkdsk-diskpart",
    originalChapterId: "cli-ch14-disk",
    title: "Storage Partition & Disk Space Management (`fsutil`, `vol`)",
    unit: "Unit 6: Advanced CLI & Workstation Customization",
    bookRef: "Windows CLI Advanced (p. 76-80)",
    icon: "",
    exercise: {
      question: "Which command displays the volume label and serial number of a Windows drive?",
      options: ["vol", "dir", "fsutil", "label"],
      correctAnswer: "vol",
      hint: "Type 'vol' to check disk volume label and serial ID."
    },
    commands: [
      {
        cmd: "vol",
        description: "Displays drive volume label name and unique disk serial number.",
        example: "vol",
        notes: "Quick check for mounted drives."
      },
      {
        cmd: "fsutil volume diskfree C:",
        description: "Queries free disk space and total capacity on drive C: in exact bytes.",
        example: "fsutil volume diskfree C:",
        notes: "Fast disk capacity audit for dev build caches."
      }
    ],
    content: `### Disk Volume & Free Space Auditing
Ensure your workstation has sufficient disk capacity for build artifacts, node_modules, and virtual machine containers:`
  },
  {
    id: 15,
    slug: "windows-network-routing-tracert-pathping",
    originalChapterId: "cli-ch15-route",
    title: "Advanced Network Route Inspection (`tracert`, `pathping`)",
    unit: "Unit 7: Network Routing & API Diagnostics",
    bookRef: "Windows CLI Advanced (p. 81-85)",
    icon: "",
    exercise: {
      question: "Which command traces the exact network router hops to a remote web server address?",
      options: ["tracert", "ping", "nslookup", "ipconfig"],
      correctAnswer: "tracert",
      hint: "'tracert' (Trace Route) outputs every router hop between your PC and a website."
    },
    commands: [
      {
        cmd: "tracert nextsem.online",
        description: "Traces all intermediate network router hops from your local machine to web server.",
        example: "tracert nextsem.online",
        notes: "Identifies network latency bottlenecks."
      },
      {
        cmd: "arp -a",
        description: "Displays current IP-to-Physical MAC address resolution table for local network.",
        example: "arp -a",
        notes: "Shows all connected devices on local subnet."
      }
    ],
    content: `### Diagnosing Server Hops & Latency Bottlenecks
When an API request is slow or failing, trace network router paths using \`tracert\` to isolate connection delays:`
  },
  {
    id: 16,
    slug: "windows-cmd-text-filtering-findstr-more",
    originalChapterId: "cli-ch16-findstr",
    title: "Text Search & Stream Filtering (`findstr /i /n`, `more`)",
    unit: "Unit 7: Network Routing & API Diagnostics",
    bookRef: "Windows CLI Advanced (p. 86-90)",
    icon: "",
    exercise: {
      question: "Which switch parameter in findstr enables case-insensitive text searching in Windows CLI?",
      options: ["/i", "/n", "/s", "/v"],
      correctAnswer: "/i",
      hint: "Use '/i' to ignore uppercase and lowercase text distinctions."
    },
    commands: [
      {
        cmd: "findstr /i \"error\" server.log",
        description: "Searches 'server.log' for lines containing 'error', ignoring text case (/i).",
        example: "findstr /i \"error\" server.log",
        notes: "Essential for debugging web server log files."
      },
      {
        cmd: "findstr /n /i \"import\" app.js",
        description: "Displays matching lines along with their exact line numbers (/n).",
        example: "findstr /n /i \"import\" app.js",
        notes: "Helps locate import statements quickly."
      }
    ],
    content: `### Searching Code & Log Files with \`findstr\`
Quickly filter log outputs, debug server errors, and search codebase text files directly from your terminal:`
  },
  {
    id: 17,
    slug: "windows-batch-control-flow-if-goto",
    originalChapterId: "cli-ch17-if",
    title: "Batch Script Conditionals & Control Flow (`if exist`, `goto`)",
    unit: "Unit 8: Script Automation & CI/CD Pipelines",
    bookRef: "Windows CLI Advanced (p. 91-95)",
    icon: "",
    exercise: {
      question: "Which batch scripting statement tests if a file exists before executing a command?",
      options: ["if exist", "if file", "where", "test -f"],
      correctAnswer: "if exist",
      hint: "Use 'if exist filename.txt (command)' in Windows batch files."
    },
    commands: [
      {
        cmd: "if exist package.json (echo Node Project Found)",
        description: "Checks if 'package.json' exists in current directory before printing message.",
        example: "if exist package.json (echo Node Project Found)",
        notes: "Standard check in build automation scripts."
      },
      {
        cmd: "goto :EOF",
        description: "Jumps directly to the end of the batch file execution.",
        example: "goto :EOF",
        notes: "Exits batch script cleanly."
      }
    ],
    content: `### Adding Logic & Conditionals to Batch Automation
Make your build scripts smart by verifying file existence and branching logic:`
  },
  {
    id: 18,
    slug: "windows-batch-loops-for-in-do-automation",
    originalChapterId: "cli-ch18-loops",
    title: "Batch File Loops & File Processing (`for /f`, `call`)",
    unit: "Unit 8: Script Automation & CI/CD Pipelines",
    bookRef: "Windows CLI Advanced (p. 96-100)",
    icon: "",
    exercise: {
      question: "Which loop syntax in Windows batch files iterates over all files matching a pattern?",
      options: ["for %%f in (*.png) do", "while %%f", "foreach", "loop"],
      correctAnswer: "for %%f in (*.png) do",
      hint: "Windows batch files use 'for %%var in (pattern) do command'."
    },
    commands: [
      {
        cmd: "for %f in (*.txt) do echo File: %f",
        description: "Loops over all .txt files in folder and prints their names to console.",
        example: "for %f in (*.txt) do echo File: %f",
        notes: "Use %%f inside .bat script files."
      },
      {
        cmd: "call build-step.bat",
        description: "Executes another batch file script and returns to active script when finished.",
        example: "call build-step.bat",
        notes: "Prevents batch script from terminating prematurely."
      }
    ],
    content: `### Automating Batch Processing with Loops
Process multiple files, run sequential build steps, and compose multi-file scripts:`
  },
  {
    id: 19,
    slug: "introduction-to-git-version-control-cli",
    originalChapterId: "git-ch1-config",
    title: "Getting Started with Git CLI (`git --version`, `git config`)",
    unit: "Unit 9: Git Version Control Foundations",
    bookRef: "Git CLI Mastery (p. 1-5)",
    icon: "",
    exercise: {
      question: "Which Git command configures your global author name for all repository commits?",
      options: ["git config --global user.name", "git set name", "git init", "git user"],
      correctAnswer: "git config --global user.name",
      hint: "Use 'git config --global user.name \"Your Name\"' to identify your commits."
    },
    commands: [
      {
        cmd: "git --version",
        description: "Checks active Git CLI installation and outputs release version number.",
        example: "git --version",
        notes: "Verifies Git is installed and added to PATH."
      },
      {
        cmd: "git config --global user.name \"NextSem Developer\"",
        description: "Sets your global developer author name attached to every Git commit.",
        example: "git config --global user.name \"NextSem Developer\"",
        notes: "Required initial setup for Git."
      },
      {
        cmd: "git config --global user.email \"dev@nextsem.online\"",
        description: "Sets your global developer email address for commit authorship.",
        example: "git config --global user.email \"dev@nextsem.online\"",
        notes: "Matches your GitHub or GitLab profile email."
      }
    ],
    content: `### Introduction to Git Version Control CLI
Git is the industry-standard version control system used by software engineering teams worldwide. Set up your author identity:`
  },
  {
    id: 20,
    slug: "git-init-repository-staging-status",
    originalChapterId: "git-ch2-init",
    title: "Initializing Repositories & Staging Changes (`git init`, `git status`, `git add`)",
    unit: "Unit 9: Git Version Control Foundations",
    bookRef: "Git CLI Mastery (p. 6-10)",
    icon: "",
    exercise: {
      question: "Which command stages all modified and new files in your project directory for commit?",
      options: ["git add .", "git init", "git status", "git commit"],
      correctAnswer: "git add .",
      hint: "'git add .' stages all current directory changes into the staging area."
    },
    commands: [
      {
        cmd: "git init",
        description: "Initializes a brand new empty Git repository inside current project directory.",
        example: "git init",
        notes: "Creates hidden .git metadata folder."
      },
      {
        cmd: "git status",
        description: "Displays active state of working directory: modified, staged, and untracked files.",
        example: "git status",
        notes: "Run frequently to inspect project status."
      },
      {
        cmd: "git add .",
        description: "Stages all new, modified, and deleted files for the next commit checkpoint.",
        example: "git add .",
        notes: "Prepares changes for commit."
      }
    ],
    content: `### Initializing Repositories & Staging Changes
Learn how Git tracks project files using the Working Directory, Staging Area, and Commit History:`
  },
  {
    id: 21,
    slug: "git-commit-history-git-log",
    originalChapterId: "git-ch3-commit",
    title: "Creating Commits & Inspecting History (`git commit`, `git log`)",
    unit: "Unit 9: Git Version Control Foundations",
    bookRef: "Git CLI Mastery (p. 11-15)",
    icon: "",
    exercise: {
      question: "Which command records staged changes into the Git repository with a descriptive log message?",
      options: ["git commit -m \"message\"", "git push", "git save", "git add"],
      correctAnswer: "git commit -m \"message\"",
      hint: "Use 'git commit -m \"descriptive text\"' to save a new commit checkpoint."
    },
    commands: [
      {
        cmd: "git commit -m \"feat: initial web application setup\"",
        description: "Saves staged file changes as a permanent commit snapshot in project history.",
        example: "git commit -m \"feat: initial setup\"",
        notes: "Write clear, meaningful commit messages."
      },
      {
        cmd: "git log --oneline",
        description: "Outputs a clean, single-line log summary of past repository commits and hashes.",
        example: "git log --oneline",
        notes: "Displays commit SHA hashes and titles."
      },
      {
        cmd: "git diff",
        description: "Shows line-by-line code differences between working directory and staging area.",
        example: "git diff",
        notes: "Green lines indicate additions (+), red lines indicate deletions (-)."
      }
    ],
    content: `### Creating Permanent Commit Checkpoints
Commits are permanent snapshots of your codebase. Create meaningful checkpoints and audit project history:`
  },
  {
    id: 22,
    slug: "git-branching-checkout-git-switch",
    originalChapterId: "git-ch4-branches",
    title: "Managing Feature Branches (`git branch`, `git switch`, `git checkout -b`)",
    unit: "Unit 10: Advanced Git Workflows",
    bookRef: "Git CLI Mastery (p. 16-20)",
    icon: "",
    exercise: {
      question: "Which command creates a new feature branch and immediately switches to it?",
      options: ["git checkout -b feature-login", "git branch", "git merge", "git status"],
      correctAnswer: "git checkout -b feature-login",
      hint: "Use 'git checkout -b <name>' or 'git switch -c <name>' to create and switch branches."
    },
    commands: [
      {
        cmd: "git branch",
        description: "Lists all local branches in repository and highlights current active branch.",
        example: "git branch",
        notes: "Active branch marked with asterisk (*)."
      },
      {
        cmd: "git checkout -b feature/user-auth",
        description: "Creates new branch 'feature/user-auth' and switches your working tree to it.",
        example: "git checkout -b feature/user-auth",
        notes: "Isolates new feature development from main branch."
      },
      {
        cmd: "git switch main",
        description: "Switches working directory back to primary 'main' production branch.",
        example: "git switch main",
        notes: "Modern Git syntax for branch switching."
      }
    ],
    content: `### Isolated Feature Development with Git Branches
Branches allow developers to work on new features safely without disrupting the stable production branch:`
  },
  {
    id: 23,
    slug: "git-merging-conflict-resolution",
    originalChapterId: "git-ch5-merge",
    title: "Merging Branches & Conflict Resolution (`git merge`)",
    unit: "Unit 10: Advanced Git Workflows",
    bookRef: "Git CLI Mastery (p. 21-25)",
    icon: "",
    exercise: {
      question: "Which command integrates code changes from a feature branch into your active branch?",
      options: ["git merge feature/user-auth", "git pull", "git push", "git clone"],
      correctAnswer: "git merge feature/user-auth",
      hint: "Switch to target branch first (e.g. main), then run 'git merge <branch>'."
    },
    commands: [
      {
        cmd: "git merge feature/user-auth",
        description: "Merges commits from 'feature/user-auth' into current active branch.",
        example: "git merge feature/user-auth",
        notes: "Combines branch histories seamlessly."
      },
      {
        cmd: "git branch -d feature/user-auth",
        description: "Safely deletes local branch after its changes have been merged.",
        example: "git branch -d feature/user-auth",
        notes: "Keeps repository branch list clean."
      }
    ],
    content: `### Merging Code & Resolving Merge Conflicts
Once a feature is tested and reviewed, merge it into the main codebase and clean up merged feature branches:`
  },
  {
    id: 24,
    slug: "git-remote-github-push-pull",
    originalChapterId: "git-ch6-remote",
    title: "Connecting Remote Repositories & GitHub Sync (`git push`, `git pull`)",
    unit: "Unit 10: Advanced Git Workflows",
    bookRef: "Git CLI Mastery (p. 26-30)",
    icon: "",
    exercise: {
      question: "Which command uploads your local commits to a remote GitHub repository?",
      options: ["git push -u origin main", "git pull", "git fetch", "git clone"],
      correctAnswer: "git push -u origin main",
      hint: "'git push' pushes local branch commits to the remote repository."
    },
    commands: [
      {
        cmd: "git remote add origin https://github.com/user/my-app.git",
        description: "Links local Git repository to remote GitHub URL alias named 'origin'.",
        example: "git remote add origin https://...",
        notes: "Initial remote connection setup."
      },
      {
        cmd: "git push -u origin main",
        description: "Pushes local 'main' branch commits to GitHub and sets upstream tracking.",
        example: "git push -u origin main",
        notes: "Publishes codebase online."
      },
      {
        cmd: "git pull origin main",
        description: "Fetches and merges latest team commits from GitHub into your local branch.",
        example: "git pull origin main",
        notes: "Keeps local repository synced with team changes."
      }
    ],
    content: `### Syncing Code with Remote GitHub Repositories
Push your code to remote repositories like GitHub to collaborate with team members and trigger cloud builds:`
  },
  {
    id: 25,
    slug: "node-npm-npx-cli-package-management",
    originalChapterId: "dev-ch1-npm",
    title: "Node.js & NPM Package Management (`node -v`, `npm init`, `npm i`)",
    unit: "Unit 11: Full Stack Web Developer Tooling",
    bookRef: "Full Stack Web Developer (p. 1-5)",
    icon: "",
    exercise: {
      question: "Which command initializes a new Node.js project and generates package.json with defaults?",
      options: ["npm init -y", "node start", "npm install", "npx create"],
      correctAnswer: "npm init -y",
      hint: "'npm init -y' creates a default package.json file instantly."
    },
    commands: [
      {
        cmd: "node -v",
        description: "Checks active Node.js runtime version installed on system.",
        example: "node -v",
        notes: "Verifies JavaScript desktop runtime is available."
      },
      {
        cmd: "npm init -y",
        description: "Creates package.json configuration file with standard default settings.",
        example: "npm init -y",
        notes: "Foundation for all Node and React projects."
      },
      {
        cmd: "npm i lucide-react",
        description: "Downloads and installs 'lucide-react' icon package into node_modules.",
        example: "npm i lucide-react",
        notes: "Adds dependency to package.json."
      }
    ],
    content: `### Node.js & NPM Package Management
Node.js lets developers run JavaScript on servers and desktop machines. NPM is the world's largest software registry:`
  },
  {
    id: 26,
    slug: "npx-create-next-app-vite-setup",
    originalChapterId: "dev-ch2-scaffold",
    title: "Scaffolding Modern Web Apps (`npx create-next-app`, `npx create-vite`)",
    unit: "Unit 11: Full Stack Web Developer Tooling",
    bookRef: "Full Stack Web Developer (p. 6-10)",
    icon: "",
    exercise: {
      question: "Which tool allows executing NPM package binaries without installing them globally?",
      options: ["npx", "npm", "node", "git"],
      correctAnswer: "npx",
      hint: "'npx' (Node Package Execute) runs remote generators directly."
    },
    commands: [
      {
        cmd: "npx create-next-app@latest ./ --typescript --tailwind --eslint",
        description: "Scaffolds complete Next.js web application with TypeScript and Tailwind CSS.",
        example: "npx create-next-app@latest ./",
        notes: "Industry standard web app initializer."
      },
      {
        cmd: "npx create-vite@latest ./ --template react-ts",
        description: "Scaffolds ultra-fast React TypeScript project using Vite build tool.",
        example: "npx create-vite@latest ./",
        notes: "Lightweight single-page app framework."
      }
    ],
    content: `### Scaffolding Modern Web Applications
Use \`npx\` to bootstrap production-ready web apps powered by React, Next.js, and Vite in seconds:`
  },
  {
    id: 27,
    slug: "npm-scripts-dev-build-start",
    originalChapterId: "dev-ch3-scripts",
    title: "Executing NPM Scripts & Build Pipelines (`npm run dev`, `npm run build`)",
    unit: "Unit 11: Full Stack Web Developer Tooling",
    bookRef: "Full Stack Web Developer (p. 11-15)",
    icon: "",
    exercise: {
      question: "Which command launches the local development server in Next.js / Vite web projects?",
      options: ["npm run dev", "npm run build", "npm start", "node index.js"],
      correctAnswer: "npm run dev",
      hint: "'npm run dev' boots up hot-reloading dev server on http://localhost:3000."
    },
    commands: [
      {
        cmd: "npm run dev",
        description: "Launches local hot-reloading development server on http://localhost:3000.",
        example: "npm run dev",
        notes: "Allows instant live browser previewing."
      },
      {
        cmd: "npm run build",
        description: "Compiles TypeScript, optimizes bundles, and prerenders production HTML assets.",
        example: "npm run build",
        notes: "Generates production-ready build output."
      },
      {
        cmd: "npm start",
        description: "Launches optimized Node production server hosting compiled web application.",
        example: "npm start",
        notes: "Runs production build on server."
      }
    ],
    content: `### Managing Development & Production Server Scripts
Run package scripts defined inside \`package.json\` to develop, test, compile, and launch web applications:`
  },
  {
    id: 28,
    slug: "env-files-dotenv-environment-variables",
    originalChapterId: "dev-ch4-env",
    title: "Securing API Keys with `.env.local` & `process.env`",
    unit: "Unit 12: Full Stack Cloud Deployment",
    bookRef: "Full Stack Web Developer (p. 16-20)",
    icon: "",
    exercise: {
      question: "Which file should store private API keys locally and NEVER be committed to Git?",
      options: [".env.local", "package.json", "readme.md", "app.js"],
      correctAnswer: ".env.local",
      hint: "Always add '.env.local' to '.gitignore' so secret keys remain safe."
    },
    commands: [
      {
        cmd: "echo NEXT_PUBLIC_API_URL=https://api.nextsem.online > .env.local",
        description: "Creates '.env.local' configuration file storing environment variables.",
        example: "echo API_KEY=secret > .env.local",
        notes: "Accessible in Node via process.env.API_KEY."
      },
      {
        cmd: "echo .env.local >> .gitignore",
        description: "Appends '.env.local' to '.gitignore' to prevent accidental cloud commits.",
        example: "echo .env.local >> .gitignore",
        notes: "Crucial security practice for all projects."
      }
    ],
    content: `### Securing API Keys & Environment Variables
Never hardcode private API keys or database passwords in code files. Store configuration inside \`.env.local\`:`
  },
  {
    id: 29,
    slug: "curl-http-requests-api-testing-cli",
    originalChapterId: "dev-ch5-curl",
    title: "Testing REST APIs from Terminal (`curl -I`, `curl -X POST`)",
    unit: "Unit 12: Full Stack Cloud Deployment",
    bookRef: "Full Stack Web Developer (p. 21-25)",
    icon: "",
    exercise: {
      question: "Which curl command flag inspects HTTP response headers without downloading the full body?",
      options: ["-I", "-X", "-d", "-v"],
      correctAnswer: "-I",
      hint: "'curl -I URL' fetches HTTP headers (status 200 OK, content-type, server info)."
    },
    commands: [
      {
        cmd: "curl -I https://nextsem.online",
        description: "Fetches HTTP status headers (HTTP 200 OK, server, content-type) from web server.",
        example: "curl -I https://nextsem.online",
        notes: "Quick check for server response status."
      },
      {
        cmd: "curl https://api.github.com/users/octocat",
        description: "Performs HTTP GET request and outputs raw JSON response payload to console.",
        example: "curl https://api...",
        notes: "Inspects API endpoints directly."
      }
    ],
    content: `### Testing Web APIs & HTTP Headers with \`curl\`
Inspect server response codes, status headers, and JSON payloads directly from your command line terminal:`
  },
  {
    id: 30,
    slug: "cloud-deployment-vercel-firebase-cli",
    originalChapterId: "dev-ch6-deploy",
    title: "Deploying Web Apps to Cloud via CLI (`vercel`, `firebase deploy`)",
    unit: "Unit 12: Full Stack Cloud Deployment",
    bookRef: "Full Stack Web Developer (p. 26-30)",
    icon: "",
    exercise: {
      question: "Which CLI command deploys hosting assets to Google Firebase Cloud hosting?",
      options: ["firebase deploy --only hosting", "npm run dev", "git push", "vercel --prod"],
      correctAnswer: "firebase deploy --only hosting",
      hint: "'firebase deploy' uploads compiled web assets to live global CDN endpoints."
    },
    commands: [
      {
        cmd: "npx vercel --prod",
        description: "Deploys compiled web application assets to Vercel global edge network.",
        example: "npx vercel --prod",
        notes: "Publishes live production web app URL."
      },
      {
        cmd: "npx firebase deploy --only hosting",
        description: "Deploys static web assets to Google Firebase Cloud hosting infrastructure.",
        example: "npx firebase deploy --only hosting",
        notes: "Deploys production build files to live CDN."
      }
    ],
    content: `### Deploying Web Applications to Cloud Infrastructure
Conclude your workstation setup by deploying production web applications to global cloud infrastructure via CLI:`
  },
  {
    id: 31,
    slug: "windows-cmd-command-chaining-and-or",
    originalChapterId: "cmd-ch31-chain",
    title: "Command Chaining: Run Multiple Commands (`&&`, `||`, `&`)",
    unit: "Unit 13: Advanced CMD Techniques",
    bookRef: "Windows CMD Advanced (p. 31-32)",
    icon: "⛓️",
    exercise: {
      question: "Which operator runs the second command ONLY if the first one succeeds?",
      options: ["&&", "||", "&", "|"],
      correctAnswer: "&&",
      hint: "'&&' means 'AND' — both must succeed in sequence."
    },
    commands: [
      { cmd: "mkdir project && cd project", description: "Creates directory and enters it only if mkdir succeeds.", example: "mkdir myapp && cd myapp", notes: "Safe chaining — stops on failure." },
      { cmd: "npm install || echo 'Install failed!'", description: "Runs fallback message if npm install fails.", example: "npm install || echo 'retry manually'", notes: "Good for CI/CD error handling." },
      { cmd: "git add . & git commit -m 'save'", description: "Runs both commands regardless of success or failure.", example: "git add . & git status", notes: "'&' runs both no matter what." }
    ],
    content: `### Command Chaining in Windows CMD
Master chaining multiple commands in a single line for efficient scripting and automation:

- 🔗 **\`&&\`** — Run second command only if first **succeeds** (exit code 0)
- ❌ **\`||\`** — Run second command only if first **fails** (non-zero exit code)  
- ⚡ **\`&\`** — Run both commands **always**, regardless of outcome

**Real Developer Example:**
\`\`\`cmd
npm install && npm run build && echo "Build complete!"
\`\`\`
If \`npm install\` fails, the build is skipped entirely — protecting your pipeline. 🛡️`
  },
  {
    id: 32,
    slug: "windows-cmd-piping-redirection-output",
    originalChapterId: "cmd-ch32-pipe",
    title: "Piping & Output Redirection (`|`, `>`, `>>`, `2>&1`)",
    unit: "Unit 13: Advanced CMD Techniques",
    bookRef: "Windows CMD Advanced (p. 33-35)",
    icon: "🔀",
    exercise: {
      question: "Which symbol appends command output to an existing file without erasing its contents?",
      options: [">>", ">", "|", "&"],
      correctAnswer: ">>",
      hint: "Double arrow '>>' appends. Single '>' overwrites."
    },
    commands: [
      { cmd: "dir | findstr .js", description: "Pipes directory listing through findstr to filter .js files.", example: "dir | findstr .tsx", notes: "Pipe sends output of one command as input to the next." },
      { cmd: "npm run build > build.log 2>&1", description: "Redirects both stdout and stderr to build.log file.", example: "git push > push.log 2>&1", notes: "2>&1 merges error stream into output stream." },
      { cmd: "echo Deployed! >> deploy.log", description: "Appends a deployment note to deploy.log without overwriting.", example: "echo %DATE% %TIME% >> activity.log", notes: ">> always appends a new line." }
    ],
    content: `### Piping & Redirection — Power Tools for Developers
Control where command output goes — to files, other commands, or the void:

- 🔀 **\`|\`** (pipe) — Feed one command's output as input to the next  
- 📄 **\`>\`** — Write output to file (overwrites existing content)  
- ➕ **\`>>\`** — Append output to file (never overwrites)  
- ⚠️ **\`2>&1\`** — Merge error messages (stderr) into the standard output stream

**Developer Power Tip:**
\`\`\`cmd
npm test 2>&1 | findstr "FAIL"
\`\`\`
Instantly finds failing tests in a large test output — saves scrolling! 🔍`
  },
  {
    id: 33,
    slug: "windows-cmd-variables-set-arithmetic",
    originalChapterId: "cmd-ch33-vars",
    title: "CMD Variables & Arithmetic (`set`, `set /a`, `%RANDOM%`)",
    unit: "Unit 13: Advanced CMD Techniques",
    bookRef: "Windows CMD Advanced (p. 36-38)",
    icon: "📦",
    exercise: {
      question: "Which command performs arithmetic calculations in Windows CMD?",
      options: ["set /a", "set", "calc", "echo /math"],
      correctAnswer: "set /a",
      hint: "'set /a' enables arithmetic mode for math operations."
    },
    commands: [
      { cmd: "set APP_PORT=3000", description: "Defines a variable APP_PORT with value 3000 in current CMD session.", example: "set DB_HOST=localhost", notes: "Variables exist only for the current CMD session." },
      { cmd: "echo %APP_PORT%", description: "Prints the value of the APP_PORT variable.", example: "echo %USERNAME%", notes: "Variables wrapped in % symbols to read their value." },
      { cmd: "set /a TOTAL=5+3*2", description: "Computes arithmetic expression and stores result in TOTAL.", example: "set /a COUNT=COUNT+1", notes: "Supports +, -, *, /, %%" }
    ],
    content: `### CMD Variables & Arithmetic
Use variables to store data, paths, and perform calculations in CMD sessions and batch scripts:

- 📦 **\`set VAR=value\`** — Define a session variable
- 📖 **\`%VAR%\`** — Read the variable value  
- 🔢 **\`set /a\`** — Do math: addition, subtraction, multiplication, division
- 🎲 **\`%RANDOM%\`** — Get a random number (0-32767)

**Practical Dev Use:**
\`\`\`cmd
set /a BUILD_NUM=%BUILD_NUM%+1
echo Build number: %BUILD_NUM%
\`\`\`
Auto-increment build numbers in your batch deployment scripts! 🚀`
  },
  {
    id: 34,
    slug: "windows-cmd-for-loops-batch",
    originalChapterId: "cmd-ch34-forloop",
    title: "CMD For Loops: Iterate Files & Ranges (`for /l`, `for /f`)",
    unit: "Unit 13: Advanced CMD Techniques",
    bookRef: "Windows CMD Advanced (p. 39-41)",
    icon: "🔁",
    exercise: {
      question: "Which `for` loop variant iterates over a numeric range in CMD?",
      options: ["for /l", "for /f", "for /d", "for /r"],
      correctAnswer: "for /l",
      hint: "'/l' stands for 'loop' — iterates a count range."
    },
    commands: [
      { cmd: "for /l %i in (1,1,5) do echo Step %i", description: "Loops from 1 to 5 incrementing by 1, echoing each step.", example: "for /l %n in (1,1,10) do echo Line %n", notes: "Syntax: (start, step, end)" },
      { cmd: "for %f in (*.txt) do echo %f", description: "Iterates over all .txt files in current directory.", example: "for %f in (*.log) do del %f", notes: "Great for batch file processing." },
      { cmd: "for /f \"tokens=1\" %a in ('git log --oneline') do echo %a", description: "Parses output of git log and extracts first token (commit hash).", example: "for /f %a in ('npm -v') do echo %a", notes: "'/f' parses command output line by line." }
    ],
    content: `### CMD For Loops — Automating Repetitive Developer Tasks
Loop through ranges, files, and command output like a pro:

- 🔢 **\`for /l\`** — Numeric range loops (1 to 100, etc.)
- 📁 **\`for %f in (*.ext)\`** — Loop over all matching files
- 📝 **\`for /f\`** — Parse command output or file contents line by line
- 📂 **\`for /d\`** — Loop over directories only

**Real Dev Script:**
\`\`\`cmd
for %f in (*.js) do (
  echo Processing: %f
  node lint.js %f
)
\`\`\`
Lint all JS files in one sweep from CMD! ✨`
  },
  {
    id: 35,
    slug: "windows-cmd-if-else-errorlevel",
    originalChapterId: "cmd-ch35-iferror",
    title: "CMD Conditional Logic: `if`, `if not`, `if errorlevel`",
    unit: "Unit 13: Advanced CMD Techniques",
    bookRef: "Windows CMD Advanced (p. 42-44)",
    icon: "🔀",
    exercise: {
      question: "What does `if errorlevel 1` check in a batch script?",
      options: ["If the last command failed (exit code ≥ 1)", "If a file named 'errorlevel' exists", "If error messages are logged", "If the variable errorlevel equals 1"],
      correctAnswer: "If the last command failed (exit code ≥ 1)",
      hint: "errorlevel in CMD holds the exit code of the last command."
    },
    commands: [
      { cmd: "if exist package.json echo Found package.json", description: "Checks if package.json file exists before echoing.", example: "if exist .env echo .env file loaded", notes: "Safe file existence check before operations." },
      { cmd: "if not exist dist mkdir dist", description: "Creates dist folder only if it doesn't already exist.", example: "if not exist out mkdir out", notes: "Prevents 'folder already exists' errors." },
      { cmd: "npm run build\nif errorlevel 1 echo BUILD FAILED && exit /b 1", description: "Checks if build command failed and exits script with error.", example: "git push\nif errorlevel 1 echo Push failed", notes: "errorlevel 1 = command returned non-zero exit code." }
    ],
    content: `### CMD Conditional Logic for Developers
Make your batch scripts smart with conditional branching:

- ✅ **\`if exist file\`** — Check if file/folder exists
- ❌ **\`if not exist\`** — Check if it does NOT exist
- 💥 **\`if errorlevel N\`** — Check if last command failed (exit code ≥ N)
- 🔤 **\`if "%VAR%"=="value"\`** — Compare string variables

**CI/CD Script Pattern:**
\`\`\`cmd
npm test
if errorlevel 1 (
  echo Tests failed! Blocking deploy.
  exit /b 1
)
echo Tests passed — deploying...
npm run deploy:prod
\`\`\`
Block deployments when tests fail — just like GitHub Actions! 🛡️`
  },
  {
    id: 36,
    slug: "windows-cmd-date-time-timeout-commands",
    originalChapterId: "cmd-ch36-datetime",
    title: "Date, Time & Pausing Execution (`date /t`, `time /t`, `timeout`)",
    unit: "Unit 14: CMD Scheduling & Timing",
    bookRef: "Windows CMD Advanced (p. 45-46)",
    icon: "⏰",
    exercise: {
      question: "Which CMD command pauses script execution for a specified number of seconds?",
      options: ["timeout /t 5", "sleep 5", "wait 5", "pause 5s"],
      correctAnswer: "timeout /t 5",
      hint: "'timeout /t N' waits N seconds before continuing."
    },
    commands: [
      { cmd: "date /t", description: "Displays current system date without prompting to change it.", example: "date /t >> deploy.log", notes: "'/t' flag returns date without prompt." },
      { cmd: "time /t", description: "Displays current system time without prompting to change it.", example: "echo %time% >> activity.log", notes: "Use %TIME% variable for current time in scripts." },
      { cmd: "timeout /t 5 /nobreak", description: "Pauses script execution for 5 seconds, ignoring keyboard interrupts.", example: "timeout /t 10 /nobreak", notes: "'/nobreak' prevents Ctrl+C from interrupting." }
    ],
    content: `### Date, Time & Execution Timing in CMD
Use date/time and pauses in developer automation scripts:

- 📅 **\`date /t\`** — Get today's date (non-interactive)
- ⏰ **\`time /t\`** — Get current time (non-interactive)  
- ⏸️ **\`timeout /t N\`** — Pause N seconds before next command
- 🛑 **\`pause\`** — Pause and wait for any key press

**Timestamped Logging Script:**
\`\`\`cmd
echo [%date% %time%] Deploy started >> deploy.log
npm run deploy:prod
echo [%date% %time%] Deploy complete >> deploy.log
\`\`\`
Add automatic timestamps to every deployment log entry! 📋`
  },
  {
    id: 37,
    slug: "windows-cmd-xcopy-robocopy-file-sync",
    originalChapterId: "cmd-ch37-xcopy",
    title: "Copying Files & Folders: `xcopy` and `robocopy`",
    unit: "Unit 14: CMD Scheduling & Timing",
    bookRef: "Windows CMD Advanced (p. 47-49)",
    icon: "📋",
    exercise: {
      question: "Which command is preferred for large-scale, reliable file synchronization in Windows?",
      options: ["robocopy", "xcopy", "copy", "move"],
      correctAnswer: "robocopy",
      hint: "robocopy = 'Robust Copy' — handles large transfers with resume support."
    },
    commands: [
      { cmd: "xcopy src dist /e /y /i", description: "Copies all files and subdirectories from src to dist, overwriting without prompts.", example: "xcopy public out /e /y", notes: "/e=subdirs, /y=no confirm, /i=create dest if needed." },
      { cmd: "robocopy src dist /mir /z /w:1 /r:1", description: "Mirrors src to dist directory, resuming failed copies automatically.", example: "robocopy C:\\myapp D:\\backup /mir", notes: "/mir=mirror, /z=restartable, /w:1=1s wait, /r:1=1 retry." },
      { cmd: "robocopy . backup /xd node_modules .git", description: "Copies project to backup excluding node_modules and .git folders.", example: "robocopy . ../backup /xd node_modules dist", notes: "/xd excludes specified directories from copy." }
    ],
    content: `### xcopy & robocopy — Reliable File Transfer from CMD
Move project files, sync directories, and create backups from the command line:

- 📋 **\`xcopy\`** — Extended copy with subdirectory and overwrite support
- 🔁 **\`robocopy\`** — Robust Copy: handles interruptions, retries, and large syncs
- 🚫 **\`/xd\`** — Exclude directories (skip node_modules, .git, dist)
- 🔄 **\`/mir\`** — Mirror mode: keeps destination identical to source

**Developer Backup Script:**
\`\`\`cmd
robocopy . D:\\DevBackup\\myapp /mir /xd node_modules .git dist
echo Backup complete!
\`\`\`
Fast, reliable project backup excluding heavy node_modules! 💾`
  },
  {
    id: 38,
    slug: "windows-cmd-symbolic-links-mklink",
    originalChapterId: "cmd-ch38-mklink",
    title: "Symbolic Links & Junction Points (`mklink`, `mklink /d`)",
    unit: "Unit 14: CMD Scheduling & Timing",
    bookRef: "Windows CMD Advanced (p. 50-51)",
    icon: "🔗",
    exercise: {
      question: "Which mklink option creates a symbolic link to a directory (folder symlink)?",
      options: ["mklink /d", "mklink /h", "mklink /j", "mklink"],
      correctAnswer: "mklink /d",
      hint: "'/d' creates a directory symbolic link — a shortcut to a folder."
    },
    commands: [
      { cmd: "mklink app.js src\\index.js", description: "Creates a symbolic link named app.js pointing to src\\index.js.", example: "mklink server.js backend\\server.js", notes: "Soft link — changes to target reflect through link." },
      { cmd: "mklink /d shared ..\\shared-lib", description: "Creates directory symbolic link 'shared' pointing to ..\\shared-lib folder.", example: "mklink /d node_modules ..\\node_modules", notes: "Useful for monorepo shared module linking." },
      { cmd: "dir /al", description: "Lists directory contents showing all symbolic links with their targets.", example: "dir /al C:\\project", notes: "Links shown with <SYMLINK> or <JUNCTION> type." }
    ],
    content: `### Symbolic Links in Windows — Monorepo & Shared Libraries
Symlinks let files/folders appear in multiple places without duplication:

- 🔗 **\`mklink target source\`** — File symbolic link
- 📁 **\`mklink /d link target\`** — Directory symbolic link
- 🔩 **\`mklink /j link target\`** — Junction point (legacy dir link)
- 📋 **\`mklink /h link target\`** — Hard link (same inode, no target change tracking)

**Monorepo Developer Tip:**
\`\`\`cmd
mklink /d packages\\ui ..\\shared-ui-library
\`\`\`
Link a shared UI library into your project without npm install or copying files! 🎯`
  },
  {
    id: 39,
    slug: "windows-cmd-icacls-file-permissions",
    originalChapterId: "cmd-ch39-icacls",
    title: "File Permissions from CMD (`icacls`, `takeown`)",
    unit: "Unit 15: CMD Security & Administration",
    bookRef: "Windows CMD Advanced (p. 52-54)",
    icon: "🔒",
    exercise: {
      question: "Which CMD command is used to view and modify file/folder NTFS permissions?",
      options: ["icacls", "attrib", "chmod", "takeown"],
      correctAnswer: "icacls",
      hint: "icacls = Integrity Control Access Control Lists — Windows permission manager."
    },
    commands: [
      { cmd: "icacls .env /deny Everyone:(R,W)", description: "Denies read and write access to .env file for all users.", example: "icacls secrets.json /deny Everyone:(F)", notes: "Security practice: lock sensitive config files." },
      { cmd: "icacls myapp /grant Developer:(F) /t", description: "Grants full control on myapp directory to Developer account recursively.", example: "icacls C:\\project /grant %USERNAME%:(F)", notes: "/t applies recursively to all subdirectories." },
      { cmd: "takeown /f locked-file.txt", description: "Takes ownership of a locked or inaccessible file.", example: "takeown /f C:\\Windows\\System32\\file.dll", notes: "Required before modifying system or locked files." }
    ],
    content: `### NTFS File Permissions via CMD — Secure Your Dev Environment
Control who can read, write, and execute files — critical for security:

- 🔐 **\`icacls file /grant user:(permission)\`** — Grant permissions (F=Full, R=Read, W=Write)
- 🚫 **\`icacls file /deny user:(permission)\`** — Deny access  
- 👑 **\`takeown /f file\`** — Claim ownership of a locked file
- 📋 **\`icacls file\`** — View current permissions for a file/folder

**Security Best Practice:**
\`\`\`cmd
icacls .env /deny Everyone:(R,W)
icacls .env /grant %USERNAME%:(F)
\`\`\`
Lock your .env file so only YOUR account can read it! 🛡️`
  },
  {
    id: 40,
    slug: "windows-cmd-scheduled-tasks-schtasks",
    originalChapterId: "cmd-ch40-schtasks",
    title: "Scheduled Tasks from CMD (`schtasks /create`, `/run`, `/delete`)",
    unit: "Unit 15: CMD Security & Administration",
    bookRef: "Windows CMD Advanced (p. 55-57)",
    icon: "📅",
    exercise: {
      question: "Which schtasks parameter schedules a task to run every day?",
      options: ["/sc daily", "/every day", "/repeat 24h", "/interval daily"],
      correctAnswer: "/sc daily",
      hint: "'/sc' sets the schedule type. Use '/sc daily' for daily tasks."
    },
    commands: [
      { cmd: "schtasks /create /tn \"BackupApp\" /tr \"cmd /c robocopy . D:\\backup /mir\" /sc daily /st 23:00", description: "Creates a scheduled task to backup the project every day at 11 PM.", example: "schtasks /create /tn \"NpmUpdate\" /tr \"npm update\" /sc weekly", notes: "Tasks run automatically even when CMD is closed." },
      { cmd: "schtasks /run /tn \"BackupApp\"", description: "Immediately runs the scheduled task named BackupApp.", example: "schtasks /run /tn \"MyScript\"", notes: "Useful for testing scheduled task before waiting for schedule." },
      { cmd: "schtasks /query /fo list /v", description: "Lists all scheduled tasks with verbose details.", example: "schtasks /query /tn \"BackupApp\" /fo list", notes: "/fo list = formatted list output, /v = verbose." }
    ],
    content: `### Windows Task Scheduler from CMD — Automate Developer Workflows
Schedule scripts, backups, and automated jobs directly from CMD:

- ➕ **\`schtasks /create\`** — Create a new scheduled task
- ▶️ **\`schtasks /run\`** — Run a task immediately  
- ❌ **\`schtasks /delete\`** — Remove a scheduled task
- 📋 **\`schtasks /query\`** — List all scheduled tasks

**Daily Backup Automation:**
\`\`\`cmd
schtasks /create /tn "DailyDevBackup" /tr "cmd /c robocopy C:\\myapp D:\\backup /mir /xd node_modules" /sc daily /st 02:00
\`\`\`
Auto-backup your code every night at 2 AM while you sleep! 😴`
  },
  {
    id: 41,
    slug: "windows-cmd-services-net-sc-commands",
    originalChapterId: "cmd-ch41-services",
    title: "Windows Services via CMD (`net start`, `net stop`, `sc query`)",
    unit: "Unit 15: CMD Security & Administration",
    bookRef: "Windows CMD Advanced (p. 58-60)",
    icon: "⚙️",
    exercise: {
      question: "Which command stops a Windows service named 'MongoDB' from CMD?",
      options: ["net stop MongoDB", "sc stop MongoDB", "service stop MongoDB", "taskkill MongoDB"],
      correctAnswer: "net stop MongoDB",
      hint: "'net stop ServiceName' gracefully stops a Windows service."
    },
    commands: [
      { cmd: "net start MongoDB", description: "Starts the MongoDB Windows service.", example: "net start MySQL80", notes: "Requires admin privileges. Run CMD as Administrator." },
      { cmd: "net stop MongoDB", description: "Stops the MongoDB Windows service gracefully.", example: "net stop wuauserv", notes: "Allows the service to complete pending operations." },
      { cmd: "sc query state= all", description: "Lists all Windows services and their current running states.", example: "sc query MongoDB", notes: "Shows RUNNING, STOPPED, PAUSED status for each service." }
    ],
    content: `### Windows Services via CMD — Control Your Dev Tools
Manage database servers, web servers, and system services from the terminal:

- ▶️ **\`net start ServiceName\`** — Start a service (e.g., MongoDB, MySQL, IIS)
- ⏹️ **\`net stop ServiceName\`** — Stop a service gracefully
- 🔍 **\`sc query\`** — Check service status
- ⚙️ **\`sc config\`** — Configure service startup type (auto/manual/disabled)

**Developer Daily Routine:**
\`\`\`cmd
net start MongoDB
net start MySQL80
echo All dev services running!
\`\`\`
Start your entire dev database stack with one script! 🗄️`
  },
  {
    id: 42,
    slug: "windows-cmd-process-management-tasklist-taskkill",
    originalChapterId: "cmd-ch42-process",
    title: "Process Management: `tasklist`, `taskkill`, Port Finder",
    unit: "Unit 15: CMD Security & Administration",
    bookRef: "Windows CMD Advanced (p. 61-63)",
    icon: "🔬",
    exercise: {
      question: "Which command kills a process running on port 3000 in Windows CMD?",
      options: ["taskkill /pid <PID> /f", "kill 3000", "stop port 3000", "taskkill port:3000"],
      correctAnswer: "taskkill /pid <PID> /f",
      hint: "First find the PID with netstat, then kill it with taskkill /pid PID /f"
    },
    commands: [
      { cmd: "tasklist | findstr node", description: "Lists all running processes and filters for Node.js processes.", example: "tasklist | findstr chrome", notes: "Useful for finding hung Node.js or dev server processes." },
      { cmd: "netstat -ano | findstr :3000", description: "Finds the process ID (PID) of whatever is running on port 3000.", example: "netstat -ano | findstr :8080", notes: "The last column in output is the PID." },
      { cmd: "taskkill /pid 1234 /f", description: "Forcefully kills the process with PID 1234.", example: "taskkill /im node.exe /f", notes: "/f = force kill, /im = kill by image name." }
    ],
    content: `### Process Management from CMD — Kill Stuck Dev Servers
Find and terminate hung processes, free up ports, and clean up your dev environment:

- 📋 **\`tasklist\`** — List all running processes
- 🔍 **\`netstat -ano | findstr :PORT\`** — Find what's running on a specific port  
- 💀 **\`taskkill /pid PID /f\`** — Force kill a process by ID
- 💀 **\`taskkill /im process.exe /f\`** — Kill all instances by name

**"Port 3000 is already in use" Fix:**
\`\`\`cmd
netstat -ano | findstr :3000
taskkill /pid 5678 /f
npm run dev
\`\`\`
Every developer needs this — kills whatever is blocking your dev server! ⚡`
  },
  {
    id: 43,
    slug: "windows-cmd-netstat-network-diagnostics",
    originalChapterId: "cmd-ch43-netstat",
    title: "Network Diagnostics: `netstat`, `ipconfig`, `nslookup`",
    unit: "Unit 16: CMD Networking Tools",
    bookRef: "Windows CLI Networking (p. 64-66)",
    icon: "🌐",
    exercise: {
      question: "Which command flushes the DNS resolver cache in Windows?",
      options: ["ipconfig /flushdns", "ipconfig /release", "nslookup flush", "dns clear"],
      correctAnswer: "ipconfig /flushdns",
      hint: "ipconfig /flushdns clears cached DNS records, fixing 'site not found' errors."
    },
    commands: [
      { cmd: "ipconfig /all", description: "Displays all network adapter details including IP, gateway, DNS servers.", example: "ipconfig /all | findstr DNS", notes: "Shows both IPv4 and IPv6 addresses." },
      { cmd: "ipconfig /flushdns", description: "Clears the DNS resolver cache to fix DNS resolution issues.", example: "ipconfig /flushdns && ipconfig /registerdns", notes: "Run when websites don't load after DNS changes." },
      { cmd: "nslookup nextsem.online", description: "Queries DNS to find the IP address of nextsem.online.", example: "nslookup google.com 8.8.8.8", notes: "Debug DNS propagation after deploying new domain settings." }
    ],
    content: `### Network Diagnostics from CMD — Debug Like a Pro
Diagnose DNS, network adapters, and connection issues from the terminal:

- 🌐 **\`ipconfig /all\`** — Full network adapter details  
- 🔄 **\`ipconfig /flushdns\`** — Clear DNS cache (fix "site not found")
- 🔍 **\`nslookup domain\`** — Look up a domain's IP address  
- 📡 **\`ping host\`** — Test connectivity to any host
- 🗺️ **\`tracert host\`** — Trace network route hop by hop

**After Deploying Your Domain:**
\`\`\`cmd
nslookup yournewsite.com
\`\`\`
Verify your domain points to the right server immediately after DNS changes! 🎯`
  },
  {
    id: 44,
    slug: "windows-cmd-ssh-remote-server-access",
    originalChapterId: "cmd-ch44-ssh",
    title: "SSH from Windows CMD: Connect to Remote Servers",
    unit: "Unit 16: CMD Networking Tools",
    bookRef: "Windows CLI Networking (p. 67-69)",
    icon: "🔐",
    exercise: {
      question: "What does the `-i` flag specify in the `ssh` command?",
      options: ["Identity file (private key path)", "IP address", "Interface name", "Ignore errors"],
      correctAnswer: "Identity file (private key path)",
      hint: "'-i keyfile.pem' tells SSH which private key to use for authentication."
    },
    commands: [
      { cmd: "ssh user@192.168.1.100", description: "Connects to a remote server at 192.168.1.100 as user.", example: "ssh ubuntu@myserver.com", notes: "Uses password auth by default. SSH must be enabled on server." },
      { cmd: "ssh -i mykey.pem ec2-user@ec2-54-88.compute.amazonaws.com", description: "Connects to AWS EC2 instance using a PEM key file.", example: "ssh -i ~/.ssh/id_rsa user@server.com", notes: "PEM files must have restricted permissions: icacls mykey.pem /inheritance:r" },
      { cmd: "scp myapp.zip user@server:/home/user/apps/", description: "Securely copies myapp.zip to the remote server over SSH.", example: "scp -r ./dist user@server:/var/www/html/", notes: "SCP = Secure Copy over SSH protocol." }
    ],
    content: `### SSH from Windows CMD — Remote Server Access
Connect to cloud servers, VPSes, and remote machines directly from your Windows CMD:

- 🔐 **\`ssh user@host\`** — Connect to remote server
- 🔑 **\`ssh -i keyfile.pem user@host\`** — Connect with PEM key (AWS EC2 style)
- 📦 **\`scp file user@host:/path\`** — Secure file copy to/from server
- 🚪 **Exit SSH session**: type \`exit\` or press **Ctrl+D**

**AWS EC2 Quick Connect:**
\`\`\`cmd
ssh -i "my-server-key.pem" ubuntu@ec2-12-34-56-78.compute-1.amazonaws.com
\`\`\`
SSH is built into Windows 10/11 — no PuTTY needed anymore! 🎉`
  },
  {
    id: 45,
    slug: "windows-cmd-curl-http-requests-api",
    originalChapterId: "cmd-ch45-curl",
    title: "Making HTTP API Requests from CMD (`curl` — Deep Dive)",
    unit: "Unit 16: CMD Networking Tools",
    bookRef: "Windows CLI Networking (p. 70-72)",
    icon: "🌐",
    exercise: {
      question: "Which curl flag sends a POST request with a JSON body?",
      options: ["-X POST -H 'Content-Type: application/json' -d '{}'", "-post json", "--method POST --json", "-P '{}'"],
      correctAnswer: "-X POST -H 'Content-Type: application/json' -d '{}'",
      hint: "-X sets method, -H sets header, -d sends body data."
    },
    commands: [
      { cmd: "curl https://api.github.com/users/octocat", description: "Makes a GET request to GitHub API and returns user JSON data.", example: "curl https://jsonplaceholder.typicode.com/posts/1", notes: "curl is built into Windows 10/11 CMD." },
      { cmd: "curl -X POST -H \"Content-Type: application/json\" -d \"{\\\"name\\\":\\\"test\\\"}\" http://localhost:3000/api/data", description: "Sends a POST request with JSON body to local API.", example: "curl -X POST http://localhost:8080/api/users -d '{\"name\":\"Manoj\"}'", notes: "Test your REST APIs without Postman!" },
      { cmd: "curl -o output.json https://api.example.com/data", description: "Downloads API response and saves it to output.json file.", example: "curl -o data.json https://api.coindesk.com/v1/bpi/currentprice.json", notes: "'-o' saves response to a file." }
    ],
    content: `### curl — Full HTTP Client in Your CMD Terminal
Make REST API calls, test endpoints, and download data — without Postman:

- 📥 **GET**: \`curl URL\` — fetch resource
- 📤 **POST**: \`curl -X POST -d '{}' URL\` — send data
- 📄 **Headers**: \`-H 'Content-Type: application/json'\`
- 💾 **Save output**: \`-o filename.json\`
- 🔇 **Silent mode**: \`-s\` — no progress, just response

**Test Your Express.js API:**
\`\`\`cmd
curl -X POST http://localhost:3000/api/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@test.com\",\"password\":\"pass123\"}"
\`\`\`
Test your backend API from CMD in seconds! ⚡`
  },
  {
    id: 46,
    slug: "windows-cmd-registry-cli-reg-query-add",
    originalChapterId: "cmd-ch46-registry",
    title: "Windows Registry from CMD (`reg query`, `reg add`, `reg delete`)",
    unit: "Unit 17: CMD System Administration",
    bookRef: "Windows CMD System (p. 73-75)",
    icon: "🗂️",
    exercise: {
      question: "Which reg command reads a registry key value from CMD?",
      options: ["reg query", "reg read", "reg get", "reg view"],
      correctAnswer: "reg query",
      hint: "'reg query KEYPATH' reads registry keys and their values."
    },
    commands: [
      { cmd: "reg query HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion /v ProductName", description: "Reads the Windows product name from the registry.", example: "reg query HKCU\\Software\\Google\\Chrome /v Version", notes: "HKLM = Local Machine, HKCU = Current User" },
      { cmd: "reg add HKCU\\Environment /v MY_APP_KEY /t REG_SZ /d \"my-secret-key\" /f", description: "Adds a persistent environment variable MY_APP_KEY to user registry.", example: "reg add HKCU\\Environment /v NODE_ENV /t REG_SZ /d production /f", notes: "Persists across reboots. Use setx for simpler env vars." },
      { cmd: "reg export HKCU\\Software\\MyApp backup.reg", description: "Exports registry key and all subkeys to a .reg backup file.", example: "reg export HKLM\\SOFTWARE\\Node backup-node.reg", notes: "Always backup before modifying registry." }
    ],
    content: `### Windows Registry from CMD — Advanced System Configuration
Read, write, and back up Windows Registry entries for developer tooling:

- 🔍 **\`reg query KEY\`** — Read registry key values
- ➕ **\`reg add KEY /v name /t type /d value\`** — Add/modify a registry value
- ❌ **\`reg delete KEY\`** — Remove a registry key
- 💾 **\`reg export KEY file.reg\`** — Backup a registry subtree

**Persistent Developer Environment Variable:**
\`\`\`cmd
reg add HKCU\\Environment /v REACT_APP_API_URL /t REG_SZ /d "https://api.myapp.com" /f
\`\`\`
Store app config directly in Windows Registry for permanent access! 🔧`
  },
  {
    id: 47,
    slug: "windows-cmd-wmic-system-info",
    originalChapterId: "cmd-ch47-wmic",
    title: "System Information via CMD: `wmic`, `systeminfo` Advanced",
    unit: "Unit 17: CMD System Administration",
    bookRef: "Windows CMD System (p. 76-78)",
    icon: "💻",
    exercise: {
      question: "Which WMIC command shows a list of installed software on the system?",
      options: ["wmic product get name,version", "wmic software list", "wmic app query", "wmic install show"],
      correctAnswer: "wmic product get name,version",
      hint: "'wmic product get name,version' queries the Windows Installer database."
    },
    commands: [
      { cmd: "wmic cpu get name,numberofcores,maxclockspeed", description: "Displays CPU name, core count, and maximum clock speed.", example: "wmic cpu get caption", notes: "WMIC = Windows Management Instrumentation Command-line." },
      { cmd: "wmic memorychip get capacity", description: "Shows installed RAM capacity in bytes for each memory module.", example: "wmic os get TotalVisibleMemorySize,FreePhysicalMemory", notes: "Divide by 1073741824 for GB." },
      { cmd: "wmic product get name,version /format:csv > installed_apps.csv", description: "Exports all installed applications list to a CSV file.", example: "wmic product get name > apps.txt", notes: "Useful for auditing dev machine software inventory." }
    ],
    content: `### WMIC — Advanced System Interrogation from CMD
Query hardware specs, installed software, and OS details from the terminal:

- 🖥️ **CPU info**: \`wmic cpu get name,numberofcores\`
- 🧠 **RAM info**: \`wmic memorychip get capacity\`
- 💾 **Disk info**: \`wmic diskdrive get model,size\`
- 📦 **Installed apps**: \`wmic product get name,version\`
- 🖨️ **Export to CSV**: append \`/format:csv > output.csv\`

**Check Before Installing Node.js:**
\`\`\`cmd
wmic product get name | findstr /i "node"
\`\`\`
Verify if Node.js is already installed before downloading again! 🤔`
  },
  {
    id: 48,
    slug: "windows-cmd-color-mode-title-customization",
    originalChapterId: "cmd-ch48-color",
    title: "Customizing CMD Appearance (`color`, `mode`, `title`, `prompt`)",
    unit: "Unit 17: CMD System Administration",
    bookRef: "Windows CMD System (p. 79-80)",
    icon: "🎨",
    exercise: {
      question: "Which CMD command changes the text color to green on black background?",
      options: ["color 0a", "color green", "set color=green", "title green"],
      correctAnswer: "color 0a",
      hint: "color XY: X=background, Y=foreground. 0=black, a=green."
    },
    commands: [
      { cmd: "color 0a", description: "Sets CMD text to bright green on black background — classic hacker look.", example: "color 07", notes: "0=black bg, a=bright green. 'color' alone resets to default." },
      { cmd: "title Nextsem Dev Terminal - %DATE%", description: "Sets the CMD window title bar text to include current date.", example: "title Build Pipeline - Running...", notes: "Updates dynamically. Use in batch scripts to show progress." },
      { cmd: "mode con: cols=120 lines=40", description: "Resizes the CMD window to 120 columns and 40 rows.", example: "mode con: cols=200 lines=50", notes: "Larger window helps when reading build logs." }
    ],
    content: `### CMD Appearance Customization — Your Developer Terminal Style
Customize how your CMD window looks and feels for a better developer experience:

- 🎨 **\`color XY\`** — Set background (X) and text (Y) colors
  - \`color 0a\` = Green text on black (classic hacker)
  - \`color 1f\` = White text on blue  
  - \`color 07\` = Default gray on black
- 📛 **\`title TEXT\`** — Set window title (great for identifying multiple terminals)
- 📏 **\`mode con: cols=N lines=N\`** — Resize CMD window dimensions
- 🖊️ **\`prompt TEXT\`** — Customize your prompt text (e.g., \`prompt [DEV] $P$G\`)

**Developer Theme Setup:**
\`\`\`cmd
color 0a
title 🚀 Nextsem Dev Terminal
mode con: cols=150 lines=50
\`\`\`
Make your CMD terminal look like a pro developer environment! 😎`
  },
  {
    id: 49,
    slug: "windows-cmd-netsh-firewall-network-config",
    originalChapterId: "cmd-ch49-netsh",
    title: "Network Configuration via CMD: `netsh` Firewall & WiFi",
    unit: "Unit 18: CMD Network Configuration",
    bookRef: "Windows CLI Networking (p. 81-83)",
    icon: "🔥",
    exercise: {
      question: "Which netsh command shows all saved WiFi network profiles on Windows?",
      options: ["netsh wlan show profiles", "netsh wifi list", "netsh show networks", "ipconfig /wlan"],
      correctAnswer: "netsh wlan show profiles",
      hint: "'netsh wlan show profiles' lists all stored WiFi network names."
    },
    commands: [
      { cmd: "netsh wlan show profiles", description: "Lists all saved WiFi network profiles on the system.", example: "netsh wlan show profile name=\"HomeWifi\"", notes: "Shows all networks this Windows device has connected to." },
      { cmd: "netsh wlan show profile name=\"MyWifi\" key=clear", description: "Shows the WiFi password for a saved network profile.", example: "netsh wlan show profile name=\"OfficeWifi\" key=clear", notes: "Look for 'Key Content' line in output. Requires admin." },
      { cmd: "netsh advfirewall firewall add rule name=\"Block Port 3000\" dir=in action=block protocol=tcp localport=3000", description: "Adds Windows Firewall rule to block incoming connections on port 3000.", example: "netsh advfirewall firewall show rule name=all", notes: "Advanced security config for dev server access control." }
    ],
    content: `### netsh — Windows Network Configuration Swiss Army Knife
Configure WiFi, firewall, and network settings from CMD:

- 📶 **\`netsh wlan show profiles\`** — List all saved WiFi networks
- 🔑 **\`netsh wlan show profile name="X" key=clear\`** — Reveal WiFi password
- 🔥 **\`netsh advfirewall firewall\`** — Windows Firewall management
- 🌐 **\`netsh interface ip show config\`** — Network interface IP configuration
- 🔄 **\`netsh int ip reset\`** — Reset TCP/IP stack (fixes network issues)

**Find Your Forgotten WiFi Password:**
\`\`\`cmd
netsh wlan show profile name="HomeNetwork" key=clear
\`\`\`
Saved WiFi password instantly retrieved — no router login needed! 🎉`
  },
  {
    id: 50,
    slug: "windows-cmd-batch-file-creation-run",
    originalChapterId: "cmd-ch50-batch",
    title: "Creating & Running Batch Scripts (`.bat` files) — Full Guide",
    unit: "Unit 18: CMD Network Configuration",
    bookRef: "Windows CMD Scripting (p. 84-87)",
    icon: "📜",
    exercise: {
      question: "What is the correct first line to suppress command echoing in a batch file?",
      options: ["@echo off", "@echo false", "#! /bin/cmd", "set echo=off"],
      correctAnswer: "@echo off",
      hint: "'@echo off' prevents CMD from printing each command before executing it."
    },
    commands: [
      { cmd: "@echo off\necho Starting dev environment...\nnpm install\nnpm run dev", description: "A basic batch script that installs and starts a dev server.", example: "Create setup.bat with these lines", notes: "@echo off hides command lines, showing only output." },
      { cmd: "start.bat", description: "Runs the start.bat batch file in the current directory.", example: ".\\deploy.bat", notes: "Double-click .bat file or type its name to run." },
      { cmd: "call build.bat && call deploy.bat", description: "Chains two batch scripts — runs deploy only if build succeeds.", example: "call test.bat && call package.bat", notes: "'call' runs another .bat and returns to current script." }
    ],
    content: `### Batch Scripts (.bat) — Automate Your Dev Workflow
Create reusable automation scripts that run with one double-click or terminal command:

**Anatomy of a .bat file:**
\`\`\`cmd
@echo off
REM This is a comment
setlocal

echo 🚀 Starting Nextsem Dev Setup...

npm install
if errorlevel 1 (echo npm install failed! && exit /b 1)

npm run dev
\`\`\`

**Key Batch Script Commands:**
- 🔇 **\`@echo off\`** — Don't print commands, only output
- 💬 **\`REM comment\`** — Add a comment line
- 🛑 **\`exit /b 1\`** — Exit script with error code
- 📢 **\`call script.bat\`** — Call another batch file
- 🔒 **\`setlocal\`** — Isolate variable scope to this script

Create a \`dev.bat\` file and start your entire dev environment with one click! 🎯`
  },
  {
    id: 51,
    slug: "windows-powershell-introduction-basics",
    originalChapterId: "ps-ch51-intro",
    title: "PowerShell Introduction: The Next-Level Windows Terminal",
    unit: "Unit 19: PowerShell for Developers",
    bookRef: "PowerShell Dev Guide (p. 1-4)",
    icon: "⚡",
    exercise: {
      question: "How do you open PowerShell from Windows CMD?",
      options: ["powershell", "pwsh", "Both 'powershell' and 'pwsh' work", "shell.exe"],
      correctAnswer: "Both 'powershell' and 'pwsh' work",
      hint: "'powershell' opens Windows PowerShell 5.x, 'pwsh' opens PowerShell 7+ (cross-platform)."
    },
    commands: [
      { cmd: "powershell", description: "Launches Windows PowerShell 5.x session from CMD or Run dialog.", example: "powershell -Command \"Get-Process\"", notes: "PowerShell comes pre-installed on all Windows 10/11 systems." },
      { cmd: "pwsh", description: "Launches PowerShell 7+ (the modern cross-platform version).", example: "pwsh -c 'node -v'", notes: "Install via winget install Microsoft.PowerShell" },
      { cmd: "Get-Host | Select-Object Version", description: "Shows the current PowerShell version you are running.", example: "$PSVersionTable.PSVersion", notes: "Verify your PowerShell version before running modern scripts." }
    ],
    content: `### PowerShell — The Ultimate Developer Terminal on Windows
PowerShell = CMD + Objects + .NET + Scripts. It's the professional tool every Windows developer needs:

**CMD vs PowerShell:**
| Feature | CMD | PowerShell |
|---------|-----|-----------|
| Output type | Plain text | Objects |
| Scripting | Limited .bat | Full .ps1 scripts |
| Cross-platform | Windows only | Windows + Mac + Linux |
| Pipelines | Text piping | Object piping |

**Getting Started:**
\`\`\`powershell
# Check PS version
$PSVersionTable.PSVersion

# Run help for any command
Get-Help Get-Process -Examples
\`\`\`

PowerShell commands are called **Cmdlets** (pronounced "command-lets") with Verb-Noun format: \`Get-Process\`, \`Set-Location\`, \`New-Item\` 🎯`
  },
  {
    id: 52,
    slug: "windows-powershell-file-system-navigation",
    originalChapterId: "ps-ch52-files",
    title: "PowerShell File System: `Get-ChildItem`, `New-Item`, `Remove-Item`",
    unit: "Unit 19: PowerShell for Developers",
    bookRef: "PowerShell Dev Guide (p. 5-7)",
    icon: "📁",
    exercise: {
      question: "What is the PowerShell equivalent of `ls` or `dir` to list directory contents?",
      options: ["Get-ChildItem", "List-Files", "Show-Directory", "Get-Directory"],
      correctAnswer: "Get-ChildItem",
      hint: "Get-ChildItem (aliased as 'ls', 'dir', 'gci') lists directory contents."
    },
    commands: [
      { cmd: "Get-ChildItem -Filter *.js -Recurse", description: "Lists all JavaScript files recursively in current directory and subdirectories.", example: "Get-ChildItem *.tsx -Recurse | Select Name", notes: "Alias: gci, ls, dir — all work in PowerShell." },
      { cmd: "New-Item -ItemType Directory -Name components", description: "Creates a new folder named 'components' in the current directory.", example: "New-Item -ItemType File -Name index.ts", notes: "PowerShell mkdir = New-Item -ItemType Directory" },
      { cmd: "Remove-Item node_modules -Recurse -Force", description: "Deletes the node_modules folder and all its contents.", example: "Remove-Item *.log -Force", notes: "-Recurse needed for directories, -Force skips confirmation." }
    ],
    content: `### PowerShell File System Operations
Navigate and manage project files and folders with PowerShell's powerful cmdlets:

- 📋 **\`Get-ChildItem\`** (ls/dir) — List files and folders
- 🔍 **\`Get-Item\`** — Get properties of a specific file
- ➕ **\`New-Item\`** — Create files or directories
- 🗑️ **\`Remove-Item\`** — Delete files or folders (-Recurse for folders)
- 📦 **\`Copy-Item\`** — Copy files (supports wildcards)
- ✂️ **\`Move-Item\`** — Move/rename files

**Delete node_modules and Reinstall Clean:**
\`\`\`powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json -Force
npm install
\`\`\`
The PowerShell "nuke and reinstall" — every React developer's emergency procedure! 💣`
  },
  {
    id: 53,
    slug: "windows-powershell-variables-types",
    originalChapterId: "ps-ch53-vars",
    title: "PowerShell Variables, Data Types & String Operations",
    unit: "Unit 19: PowerShell for Developers",
    bookRef: "PowerShell Dev Guide (p. 8-10)",
    icon: "📦",
    exercise: {
      question: "How do you declare a typed string variable in PowerShell?",
      options: ["[string]$name = 'Manoj'", "var name = 'Manoj'", "let name: string = 'Manoj'", "string name = 'Manoj'"],
      correctAnswer: "[string]$name = 'Manoj'",
      hint: "PowerShell uses [type]$variable syntax for typed variables."
    },
    commands: [
      { cmd: "$name = 'Nextsem'\n$version = 3\n$pi = 3.14\n$active = $true", description: "Declares string, integer, float and boolean variables in PowerShell.", example: "$port = 3000\necho \"Server on port $port\"", notes: "PowerShell is dynamically typed — no 'var' or 'let' needed." },
      { cmd: "$greeting = \"Hello, $name! Version: $version\"", description: "String interpolation — embeds variable values inside double-quoted strings.", example: "\"Deployed to: $env:COMPUTERNAME\"", notes: "Use double quotes for interpolation, single quotes for literals." },
      { cmd: "$path = $env:USERPROFILE + '\\projects'\nWrite-Host $path", description: "Concatenates environment variable with string path and displays it.", example: "$appDir = $env:LOCALAPPDATA + '\\MyApp'", notes: "$env:VARNAME accesses environment variables." }
    ],
    content: `### PowerShell Variables & Types — Object-Oriented Variables
PowerShell variables are objects — they have properties and methods, not just text:

\`\`\`powershell
$name = "nextsem"
$name.Length          # 7
$name.ToUpper()       # NEXTSEM
$name.Replace("n","N") # Nextsem
\`\`\`

**Common Data Types:**
- 📝 \`[string]\` — Text
- 🔢 \`[int]\` — Integer number  
- 🌊 \`[double]\` — Floating point
- ✅ \`[bool]\` — True/False
- 📋 \`[array]\` — List of items
- 🗂️ \`[hashtable]\` — Key-value pairs (like JavaScript objects)

**Environment Variables:**
\`\`\`powershell
$env:NODE_ENV = "production"
Write-Host "Env: $env:NODE_ENV"
\`\`\`
PowerShell variables are way more powerful than CMD variables! 🚀`
  },
  {
    id: 54,
    slug: "windows-powershell-objects-pipeline",
    originalChapterId: "ps-ch54-pipeline",
    title: "PowerShell Object Pipeline: `Where-Object`, `Select-Object`, `Sort-Object`",
    unit: "Unit 20: PowerShell Object Processing",
    bookRef: "PowerShell Dev Guide (p. 11-14)",
    icon: "🔄",
    exercise: {
      question: "Which PowerShell cmdlet filters objects based on a condition?",
      options: ["Where-Object", "Filter-Object", "Select-Where", "Get-Filter"],
      correctAnswer: "Where-Object",
      hint: "Where-Object (alias: where, ?) filters pipeline objects by condition — like Array.filter() in JS."
    },
    commands: [
      { cmd: "Get-Process | Where-Object {$_.CPU -gt 100}", description: "Lists all processes consuming more than 100 CPU time units.", example: "Get-Process | Where-Object Name -like 'node*'", notes: "$_ represents the current pipeline object." },
      { cmd: "Get-ChildItem | Select-Object Name, Length, LastWriteTime", description: "Lists files showing only Name, Size, and Last Modified date columns.", example: "Get-Process | Select-Object Name, Id, CPU | Sort-Object CPU -Descending", notes: "Select-Object picks specific properties to display." },
      { cmd: "Get-Service | Sort-Object Status | Format-Table -AutoSize", description: "Lists all Windows services sorted by status in a formatted table.", example: "Get-Process | Sort-Object CPU -Descending | Select -First 10", notes: "Format-Table displays objects as a clean table." }
    ],
    content: `### PowerShell Object Pipeline — Data Processing Like a Pro
PowerShell passes objects (not text) through pipelines — enabling rich data processing:

\`\`\`powershell
# Find top 5 CPU-hungry processes
Get-Process |
  Where-Object { $_.CPU -gt 10 } |
  Sort-Object CPU -Descending |
  Select-Object Name, CPU, Id -First 5 |
  Format-Table -AutoSize
\`\`\`

**Pipeline Cmdlets:**
- 🔍 **\`Where-Object\`** (where, ?) — Filter (like JS \`.filter()\`)
- 📋 **\`Select-Object\`** — Pick properties (like JS \`.map()\`)
- 🔢 **\`Sort-Object\`** — Sort (like JS \`.sort()\`)
- 📊 **\`Group-Object\`** — Group by property (like SQL GROUP BY)
- 📈 **\`Measure-Object\`** — Count, sum, average

If you know JavaScript array methods — PowerShell pipelines feel instantly familiar! 🎯`
  },
  {
    id: 55,
    slug: "windows-powershell-if-loops-functions",
    originalChapterId: "ps-ch55-flow",
    title: "PowerShell Control Flow: `if`, `foreach`, Functions",
    unit: "Unit 20: PowerShell Object Processing",
    bookRef: "PowerShell Dev Guide (p. 15-18)",
    icon: "🔀",
    exercise: {
      question: "How do you define a reusable function in PowerShell?",
      options: ["function MyFunc { ... }", "def MyFunc() { ... }", "sub MyFunc { ... }", "cmd MyFunc() {}"],
      correctAnswer: "function MyFunc { ... }",
      hint: "PowerShell uses the 'function' keyword, same as JavaScript and Bash."
    },
    commands: [
      { cmd: "if ($env:NODE_ENV -eq 'production') { Write-Host 'PROD mode' } else { Write-Host 'DEV mode' }", description: "Checks NODE_ENV environment variable and prints appropriate mode.", example: "if (Test-Path .env) { Write-Host '.env found!' }", notes: "-eq = equals. Use -ne, -gt, -lt, -like, -match for other comparisons." },
      { cmd: "foreach ($file in Get-ChildItem *.ts) { Write-Host $file.Name }", description: "Iterates over all TypeScript files and prints their names.", example: "Get-ChildItem *.js | ForEach-Object { node lint $_.Name }", notes: "ForEach-Object (%) works in pipelines; foreach loops over collections." },
      { cmd: "function Start-DevServer {\n  param([int]$Port = 3000)\n  Write-Host \"Starting on port $Port\"\n  npm run dev -- --port $Port\n}\nStart-DevServer -Port 4000", description: "Defines a reusable PowerShell function with a default parameter.", example: "function Get-ProjectInfo { Get-Content package.json | ConvertFrom-Json }", notes: "Functions can have typed parameters with default values." }
    ],
    content: `### PowerShell Control Flow — Scripts That Think
Write intelligent PowerShell scripts with conditionals, loops, and functions:

\`\`\`powershell
function Deploy-App {
  param(
    [string]$Environment = "staging",
    [switch]$Verbose
  )
  
  if ($Environment -eq "production") {
    Write-Host "🚀 Deploying to PRODUCTION..." -ForegroundColor Red
    npm run build && npx firebase deploy --only hosting
  } else {
    Write-Host "🧪 Deploying to staging..." -ForegroundColor Yellow
    npm run build:staging
  }
}

Deploy-App -Environment "production"
\`\`\`

**Comparison Operators:**
- \`-eq\` = equal | \`-ne\` = not equal
- \`-gt\` = greater | \`-lt\` = less than  
- \`-like\` = wildcard | \`-match\` = regex

Write reusable deployment functions in PowerShell — cleaner than .bat files! 💪`
  },
  {
    id: 56,
    slug: "windows-powershell-web-requests-json",
    originalChapterId: "ps-ch56-webreq",
    title: "PowerShell Web Requests & JSON (`Invoke-WebRequest`, `Invoke-RestMethod`)",
    unit: "Unit 20: PowerShell Object Processing",
    bookRef: "PowerShell Dev Guide (p. 19-21)",
    icon: "🌐",
    exercise: {
      question: "Which PowerShell cmdlet automatically parses JSON responses from REST APIs?",
      options: ["Invoke-RestMethod", "Invoke-WebRequest", "Get-WebContent", "Curl-JSON"],
      correctAnswer: "Invoke-RestMethod",
      hint: "Invoke-RestMethod (irm) auto-parses JSON into PowerShell objects. Invoke-WebRequest returns raw response."
    },
    commands: [
      { cmd: "Invoke-RestMethod https://jsonplaceholder.typicode.com/posts/1", description: "Fetches a JSON API response and automatically parses it into a PowerShell object.", example: "irm https://api.github.com/repos/vercel/next.js | Select-Object stargazers_count", notes: "irm is the alias for Invoke-RestMethod." },
      { cmd: "$body = @{name='Manoj'; role='developer'} | ConvertTo-Json\nInvoke-RestMethod http://localhost:3000/api/users -Method POST -Body $body -ContentType 'application/json'", description: "Sends a POST request with JSON body to a local REST API endpoint.", example: "irm http://api.example.com/login -Method POST -Body $creds -ContentType application/json", notes: "ConvertTo-Json converts hashtable to JSON string." },
      { cmd: "(irm https://api.coindesk.com/v1/bpi/currentprice.json).bpi.USD.rate", description: "Fetches Bitcoin price API and drills into nested JSON properties.", example: "(irm https://api.github.com/users/octocat).public_repos", notes: "PowerShell objects allow dot notation on nested JSON." }
    ],
    content: `### PowerShell HTTP Requests — Your Terminal API Client
Consume REST APIs, test endpoints, and process JSON — all from PowerShell:

\`\`\`powershell
# GET request — auto-parses JSON
$response = Invoke-RestMethod "https://api.github.com/users/octocat"
Write-Host "GitHub repos: $($response.public_repos)"

# POST request with JSON body
$body = @{
  email = "user@example.com"
  password = "secret123"
} | ConvertTo-Json

$result = Invoke-RestMethod "http://localhost:3000/api/login" \`
  -Method POST \`
  -Body $body \`
  -ContentType "application/json"

Write-Host "Token: $($result.token)"
\`\`\`

PowerShell + REST APIs = powerful test automation without any additional tools! 🚀`
  },
  {
    id: 57,
    slug: "windows-powershell-error-handling-trycatch",
    originalChapterId: "ps-ch57-error",
    title: "PowerShell Error Handling: `try`, `catch`, `finally`",
    unit: "Unit 21: PowerShell Advanced Scripting",
    bookRef: "PowerShell Dev Guide (p. 22-24)",
    icon: "⚠️",
    exercise: {
      question: "What must be set for PowerShell `try/catch` to catch non-terminating errors?",
      options: ["$ErrorActionPreference = 'Stop'", "$CatchErrors = $true", "-ErrorAction Catch", "Set-StopOnError"],
      correctAnswer: "$ErrorActionPreference = 'Stop'",
      hint: "By default, PowerShell doesn't stop on errors. Setting ErrorActionPreference to 'Stop' forces all errors to be caught."
    },
    commands: [
      { cmd: "$ErrorActionPreference = 'Stop'\ntry {\n  npm run build\n} catch {\n  Write-Host \"Build failed: $_\" -ForegroundColor Red\n  exit 1\n}", description: "Wraps build command in try/catch to handle failure gracefully.", example: "try { Invoke-RestMethod $url } catch { Write-Host $_.Exception.Message }", notes: "Set ErrorActionPreference to Stop so all errors are catchable." },
      { cmd: "try {\n  Remove-Item important.txt\n} catch [System.IO.FileNotFoundException] {\n  Write-Host 'File not found - skipping'\n} finally {\n  Write-Host 'Cleanup done'\n}", description: "Catches specific exception types and runs cleanup in finally block.", example: "finally { Set-Location $originalPath }", notes: "finally block always runs regardless of error." },
      { cmd: "Write-Error \"Custom error\" -ErrorAction Stop", description: "Throws a custom error that can be caught by a try/catch block.", example: "if (!$apiKey) { Write-Error 'API key missing!' -ErrorAction Stop }", notes: "Use Write-Error for validation failures in scripts." }
    ],
    content: `### PowerShell Error Handling — Resilient Deployment Scripts
Write production-grade PowerShell scripts that handle failures gracefully:

\`\`\`powershell
$ErrorActionPreference = 'Stop'

function Deploy-Production {
  try {
    Write-Host "Running tests..." -ForegroundColor Cyan
    npm test
    
    Write-Host "Building app..." -ForegroundColor Cyan
    npm run build
    
    Write-Host "Deploying to Firebase..." -ForegroundColor Green
    npx firebase deploy --only hosting
    
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
  }
  catch {
    Write-Host "❌ Deployment failed: $_" -ForegroundColor Red
    Write-Host "Rolling back..." -ForegroundColor Yellow
    # Rollback logic here
    exit 1
  }
  finally {
    Write-Host "Deployment pipeline complete."
  }
}

Deploy-Production
\`\`\`

This is how real production deployment scripts handle failures! 🛡️`
  },
  {
    id: 58,
    slug: "windows-powershell-modules-install-import",
    originalChapterId: "ps-ch58-modules",
    title: "PowerShell Modules: `Install-Module`, `Import-Module`",
    unit: "Unit 21: PowerShell Advanced Scripting",
    bookRef: "PowerShell Dev Guide (p. 25-27)",
    icon: "📦",
    exercise: {
      question: "Which command installs a PowerShell module from the PowerShell Gallery?",
      options: ["Install-Module ModuleName", "Get-Module ModuleName", "Import-Module ModuleName", "Add-Module ModuleName"],
      correctAnswer: "Install-Module ModuleName",
      hint: "Install-Module downloads modules from the PSGallery — like npm for PowerShell."
    },
    commands: [
      { cmd: "Find-Module -Name *Azure* | Select Name,Version", description: "Searches PowerShell Gallery for modules matching 'Azure'.", example: "Find-Module -Tag 'Git' | Select -First 5", notes: "PSGallery = PowerShell's package repository (like npm for PS)." },
      { cmd: "Install-Module posh-git -Scope CurrentUser -Force", description: "Installs posh-git module for Git integration in PowerShell.", example: "Install-Module PSReadLine -Force -SkipPublisherCheck", notes: "posh-git adds Git branch and status info to PS prompt." },
      { cmd: "Get-Module -ListAvailable | Where-Object Name -like 'Az.*'", description: "Lists all installed PowerShell modules matching the Azure naming pattern.", example: "Get-Module | Select Name, Version", notes: "Shows which modules are available to import." }
    ],
    content: `### PowerShell Modules — Extending Your Terminal Capabilities
Modules = pre-built PowerShell tools you can install and reuse:

**Essential Developer Modules:**
\`\`\`powershell
# Git integration in PowerShell prompt
Install-Module posh-git -Scope CurrentUser

# Better autocomplete and syntax highlighting
Install-Module PSReadLine -Scope CurrentUser -Force

# Azure cloud management
Install-Module Az -Scope CurrentUser

# GitHub CLI wrapper
Install-Module PowerShellForGitHub -Scope CurrentUser
\`\`\`

**Module Commands:**
- 🔍 **\`Find-Module\`** — Search PSGallery
- ⬇️ **\`Install-Module\`** — Install from gallery
- 📥 **\`Import-Module\`** — Load installed module into session
- 📋 **\`Get-Module\`** — List installed/loaded modules
- ❌ **\`Remove-Module\`** — Unload from session

PowerShell modules are like npm packages for your terminal! 🚀`
  },
  {
    id: 59,
    slug: "windows-powershell-profile-customization",
    originalChapterId: "ps-ch59-profile",
    title: "PowerShell Profile: Customize Your Terminal on Every Launch",
    unit: "Unit 21: PowerShell Advanced Scripting",
    bookRef: "PowerShell Dev Guide (p. 28-30)",
    icon: "⚙️",
    exercise: {
      question: "What variable holds the path to your PowerShell profile script?",
      options: ["$PROFILE", "$HOME/.ps_profile", "$PSHome", "$UserProfile"],
      correctAnswer: "$PROFILE",
      hint: "$PROFILE contains the path to your personal PowerShell profile script."
    },
    commands: [
      { cmd: "echo $PROFILE", description: "Displays the path to your PowerShell profile script file.", example: "$PROFILE", notes: "Profile path: C:\\Users\\YourName\\Documents\\PowerShell\\Microsoft.PowerShell_profile.ps1" },
      { cmd: "New-Item $PROFILE -Force\nnotepad $PROFILE", description: "Creates the profile file if it doesn't exist, then opens it in Notepad.", example: "code $PROFILE", notes: "Use 'code $PROFILE' to open in VS Code if installed." },
      { cmd: ". $PROFILE", description: "Reloads the PowerShell profile script without restarting the terminal.", example: ". $PROFILE", notes: "'. ' (dot-sourcing) runs the script in current session." }
    ],
    content: `### PowerShell Profile — Permanent Terminal Customization
Your profile script runs every time PowerShell starts — set up shortcuts, colors, and tools:

**Sample $PROFILE content:**
\`\`\`powershell
# Developer aliases
Set-Alias g git
Set-Alias k kubectl
function dev { Set-Location C:\\projects; code . }
function gs { git status }
function gp { git push }

# Git integration
Import-Module posh-git

# Color theme
$host.UI.RawUI.BackgroundColor = "Black"
$host.UI.RawUI.ForegroundColor = "Green"

# Custom prompt with git branch
function prompt {
  $branch = (git branch --show-current 2>$null)
  "PS [$branch] $(Get-Location)> "
}

Write-Host "🚀 Nextsem Dev Terminal Ready!" -ForegroundColor Cyan
\`\`\`

Your profile makes PowerShell feel like your own personalized dev environment! 😎`
  },
  {
    id: 60,
    slug: "windows-powershell-jobs-background-tasks",
    originalChapterId: "ps-ch60-jobs",
    title: "PowerShell Background Jobs: Run Tasks Asynchronously",
    unit: "Unit 22: PowerShell Automation",
    bookRef: "PowerShell Dev Guide (p. 31-33)",
    icon: "🔄",
    exercise: {
      question: "Which cmdlet starts a PowerShell command as a background job?",
      options: ["Start-Job", "New-Job", "Invoke-Background", "Run-Async"],
      correctAnswer: "Start-Job",
      hint: "Start-Job runs a script block asynchronously in the background."
    },
    commands: [
      { cmd: "$job = Start-Job { npm run build }", description: "Starts npm build as a background job and returns immediately.", example: "$job = Start-Job { node server.js }", notes: "Returns a job object. Terminal is free while job runs." },
      { cmd: "Wait-Job $job | Receive-Job", description: "Waits for the background job to complete and retrieves its output.", example: "Get-Job | Wait-Job | Receive-Job", notes: "Receive-Job gets all output from the completed job." },
      { cmd: "Get-Job | Where-Object State -eq 'Running'", description: "Lists all currently running background jobs.", example: "Stop-Job $job; Remove-Job $job", notes: "Stop-Job cancels a job, Remove-Job cleans it from memory." }
    ],
    content: `### PowerShell Background Jobs — Parallel Dev Workflows
Run long-running commands in the background while you keep working:

\`\`\`powershell
# Start multiple tasks in parallel
$buildJob = Start-Job { npm run build }
$testJob = Start-Job { npm test }
$lintJob = Start-Job { npx eslint src }

Write-Host "All 3 tasks running in parallel..."

# Wait for all to complete
$results = @($buildJob, $testJob, $lintJob) | Wait-Job | Receive-Job

# Check results
foreach ($job in Get-Job) {
  if ($job.State -eq 'Failed') {
    Write-Host "❌ Job $($job.Name) failed!" -ForegroundColor Red
  }
}
\`\`\`

Run build, test, and lint **simultaneously** — 3x faster than sequential execution! ⚡`
  },
  {
    id: 61,
    slug: "windows-vscode-cli-code-command",
    originalChapterId: "dev-ch61-vscode",
    title: "VS Code CLI: Open Projects & Install Extensions from Terminal",
    unit: "Unit 22: PowerShell Automation",
    bookRef: "Developer Tools CLI (p. 34-36)",
    icon: "💙",
    exercise: {
      question: "Which command opens the current directory as a new VS Code workspace?",
      options: ["code .", "vscode open", "code --new .", "open . --vscode"],
      correctAnswer: "code .",
      hint: "'code .' opens VS Code in the current working directory."
    },
    commands: [
      { cmd: "code .", description: "Opens current directory as VS Code workspace.", example: "code C:\\projects\\myapp", notes: "Must add VS Code to PATH. VS Code installer does this automatically." },
      { cmd: "code --install-extension esbenp.prettier-vscode", description: "Installs the Prettier VS Code extension from command line.", example: "code --install-extension ms-vscode.vscode-typescript-next", notes: "Extension ID format: publisher.extensionName" },
      { cmd: "code --list-extensions", description: "Lists all currently installed VS Code extensions.", example: "code --list-extensions | findstr prettier", notes: "Great for creating a team extensions setup script." }
    ],
    content: `### VS Code CLI — Supercharge Your Workflow
Control VS Code entirely from the terminal for faster project management:

**Must-Know code Commands:**
\`\`\`cmd
code .                    # Open current folder
code myfile.ts            # Open specific file
code -n .                 # Open in NEW window
code -r .                 # Reuse existing window
code --diff file1 file2   # Compare two files
\`\`\`

**Team Extension Setup Script:**
\`\`\`cmd
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
code --install-extension eamodio.gitlens
echo All team extensions installed!
\`\`\`

Share this script with your team — everyone gets the same extensions instantly! 🎯`
  },
  {
    id: 62,
    slug: "windows-typescript-cli-tsc-commands",
    originalChapterId: "dev-ch62-typescript",
    title: "TypeScript CLI: `tsc --init`, `tsc --watch`, Type Checking",
    unit: "Unit 23: Developer Tools from CLI",
    bookRef: "Developer Tools CLI (p. 37-39)",
    icon: "🔷",
    exercise: {
      question: "Which tsc flag enables watch mode to auto-recompile TypeScript files on save?",
      options: ["--watch", "--auto", "--live", "--reload"],
      correctAnswer: "--watch",
      hint: "'tsc --watch' (or tsc -w) watches for file changes and recompiles automatically."
    },
    commands: [
      { cmd: "npx tsc --init", description: "Creates a tsconfig.json configuration file with default TypeScript settings.", example: "npx tsc --init --target ES2020 --module commonjs", notes: "Run once per project to initialize TypeScript configuration." },
      { cmd: "npx tsc --watch", description: "Compiles TypeScript files in watch mode — auto-recompiles when files change.", example: "npx tsc -w --project tsconfig.prod.json", notes: "-w is the shorthand for --watch." },
      { cmd: "npx tsc --noEmit", description: "Type-checks TypeScript files without generating any JavaScript output.", example: "npx tsc --noEmit && echo 'No type errors!'", notes: "Perfect for CI/CD type checking without overwriting compiled output." }
    ],
    content: `### TypeScript CLI — Type-Safe Development from the Terminal
Use TypeScript's compiler directly from CMD or PowerShell:

**Project Setup:**
\`\`\`cmd
mkdir my-ts-app
cd my-ts-app
npm init -y
npm install typescript --save-dev
npx tsc --init
\`\`\`

**Common tsc Commands:**
- ⚙️ **\`tsc --init\`** — Create tsconfig.json
- 🔨 **\`tsc\`** — Compile all TypeScript files
- 👁️ **\`tsc --watch\`** — Auto-compile on save
- ✅ **\`tsc --noEmit\`** — Type-check only (no output files)
- 🎯 **\`tsc --strict\`** — Enable strict type checking

**CI/CD Type Check:**
\`\`\`cmd
npx tsc --noEmit
if errorlevel 1 (echo TypeScript errors found! && exit /b 1)
echo ✅ Type check passed!
\`\`\`

Block deployments with TypeScript type errors — like a compiler-level code review! 🛡️`
  },
  {
    id: 63,
    slug: "windows-eslint-prettier-cli",
    originalChapterId: "dev-ch63-eslint",
    title: "ESLint & Prettier from CLI: Auto-Fix Code Quality Issues",
    unit: "Unit 23: Developer Tools from CLI",
    bookRef: "Developer Tools CLI (p. 40-42)",
    icon: "🧹",
    exercise: {
      question: "Which ESLint flag automatically fixes fixable linting errors?",
      options: ["--fix", "--repair", "--auto", "--correct"],
      correctAnswer: "--fix",
      hint: "'npx eslint . --fix' automatically corrects all auto-fixable code style issues."
    },
    commands: [
      { cmd: "npx eslint src --ext .ts,.tsx", description: "Lints all TypeScript and TSX files in the src directory.", example: "npx eslint . --ext .js,.jsx,.ts,.tsx", notes: "--ext specifies file extensions to lint." },
      { cmd: "npx eslint src --fix", description: "Automatically fixes all auto-fixable ESLint errors in src directory.", example: "npx eslint . --fix --ext .ts,.tsx", notes: "Not all errors are auto-fixable — some require manual review." },
      { cmd: "npx prettier --write src", description: "Auto-formats all files in src directory according to Prettier rules.", example: "npx prettier --write \"src/**/*.{ts,tsx,css,json}\"", notes: "--write modifies files in place. --check only reports issues." }
    ],
    content: `### ESLint & Prettier CLI — Automated Code Quality
Keep your codebase clean and consistent with automated linting and formatting:

**Setup in New Project:**
\`\`\`cmd
npm install --save-dev eslint prettier eslint-config-prettier
npx eslint --init
echo {} > .prettierrc
\`\`\`

**Pre-Commit Quality Check Script:**
\`\`\`cmd
@echo off
echo 🔍 Running ESLint...
npx eslint src --ext .ts,.tsx
if errorlevel 1 (echo ESLint errors found! && exit /b 1)

echo 🎨 Running Prettier check...
npx prettier --check src
if errorlevel 1 (echo Prettier formatting issues! && exit /b 1)

echo ✅ Code quality checks passed!
\`\`\`

**Auto-Fix Everything at Once:**
\`\`\`cmd
npx eslint src --fix && npx prettier --write src
\`\`\`

Automate code quality so you focus on features, not formatting debates! 🎯`
  },
  {
    id: 64,
    slug: "windows-npm-audit-security-vulnerability-check",
    originalChapterId: "dev-ch64-npmaudit",
    title: "NPM Security Audit: `npm audit`, `npm audit fix`",
    unit: "Unit 23: Developer Tools from CLI",
    bookRef: "Developer Tools CLI (p. 43-45)",
    icon: "🛡️",
    exercise: {
      question: "Which npm command automatically fixes security vulnerabilities in dependencies?",
      options: ["npm audit fix", "npm security fix", "npm patch", "npm fix --vulnerabilities"],
      correctAnswer: "npm audit fix",
      hint: "'npm audit fix' automatically installs patched versions of vulnerable packages."
    },
    commands: [
      { cmd: "npm audit", description: "Scans all installed npm packages for known security vulnerabilities.", example: "npm audit --json > audit-report.json", notes: "Reports HIGH, MEDIUM, LOW severity vulnerabilities with CVE IDs." },
      { cmd: "npm audit fix", description: "Automatically installs patched, non-breaking dependency updates.", example: "npm audit fix --only=prod", notes: "Only fixes compatible, non-breaking version updates." },
      { cmd: "npm audit fix --force", description: "Forces fixing all vulnerabilities including major version updates (may break APIs).", example: "npm audit fix --force", notes: "Test thoroughly after --force as it may cause breaking changes." }
    ],
    content: `### npm audit — Security Scanning from CLI
Every production app must be scanned for known security vulnerabilities:

\`\`\`cmd
npm audit
\`\`\`
**Sample output:**
\`\`\`
# npm audit report

lodash  <4.17.21
Severity: high
Prototype Pollution - https://npmjs.com/advisories/1523

found 3 vulnerabilities (1 low, 1 moderate, 1 high)
\`\`\`

**Fix Workflow:**
\`\`\`cmd
npm audit            # Scan for issues
npm audit fix        # Auto-fix safe updates
npm audit            # Re-scan to confirm fixed
\`\`\`

**Add to CI/CD Pipeline:**
\`\`\`cmd
npm audit --audit-level=high
if errorlevel 1 (echo HIGH severity vulnerabilities found! Block deploy. && exit /b 1)
\`\`\`

Block deployments when high-severity vulnerabilities are found! 🛡️`
  },
  {
    id: 65,
    slug: "windows-cmd-node-debugging-inspect",
    originalChapterId: "dev-ch65-debug",
    title: "Debugging Node.js from CLI (`node --inspect`, Chrome DevTools)",
    unit: "Unit 24: Node.js Developer CLI",
    bookRef: "Node.js CLI Guide (p. 46-49)",
    icon: "🔍",
    exercise: {
      question: "Which flag enables the Node.js inspector for Chrome DevTools debugging?",
      options: ["--inspect", "--debug", "--devtools", "--chrome"],
      correctAnswer: "--inspect",
      hint: "'node --inspect server.js' enables the Chrome DevTools Protocol on port 9229."
    },
    commands: [
      { cmd: "node --inspect server.js", description: "Starts Node.js with Chrome DevTools inspector on port 9229.", example: "node --inspect=0.0.0.0:9229 app.js", notes: "Open chrome://inspect in Chrome to connect debugger." },
      { cmd: "node --inspect-brk server.js", description: "Starts Node.js in debug mode, paused at first line until debugger attaches.", example: "node --inspect-brk index.js", notes: "--inspect-brk pauses immediately — useful for startup code bugs." },
      { cmd: "node -e \"console.log(process.env)\"", description: "Runs inline JavaScript and prints all environment variables.", example: "node -e \"require('./src/lib/utils').myFunction()\"", notes: "'-e' runs a JavaScript expression directly from CMD." }
    ],
    content: `### Node.js Debugging from CLI — Find & Fix Bugs Faster
Debug your Node.js applications using Chrome DevTools — no IDE needed:

**Step-by-Step Debug Session:**
\`\`\`cmd
node --inspect-brk server.js
\`\`\`
Then in Chrome:
1. Open \`chrome://inspect\`
2. Click **"Open dedicated DevTools for Node"**
3. Set breakpoints, step through code, inspect variables

**Environment Variable Debugging:**
\`\`\`cmd
node -e "console.log('PORT:', process.env.PORT)"
node -e "console.log('NODE_ENV:', process.env.NODE_ENV)"
\`\`\`

**Quick Script Testing:**
\`\`\`cmd
node -e "const jwt = require('jsonwebtoken'); console.log(jwt.sign({id:1}, 'secret'))"
\`\`\`

Test individual Node.js functions directly from CMD without running the whole server! 🎯`
  },
  {
    id: 66,
    slug: "windows-cmd-npx-create-react-app-alternatives",
    originalChapterId: "dev-ch66-scaffold",
    title: "Scaffolding Projects: CRA, Vite, Astro, T3 Stack from CLI",
    unit: "Unit 24: Node.js Developer CLI",
    bookRef: "Node.js CLI Guide (p. 50-52)",
    icon: "🏗️",
    exercise: {
      question: "Which CLI command creates a new Vite project with React TypeScript template?",
      options: ["npm create vite@latest -- --template react-ts", "npx create-react-app --ts", "vite new react-ts", "npx vite create --react"],
      correctAnswer: "npm create vite@latest -- --template react-ts",
      hint: "'npm create vite@latest' is the official Vite project scaffolding command."
    },
    commands: [
      { cmd: "npm create vite@latest myapp -- --template react-ts", description: "Creates a new Vite project with React TypeScript template.", example: "npm create vite@latest myapp -- --template vue-ts", notes: "Fastest React project setup — much faster than CRA." },
      { cmd: "npx create-next-app@latest myapp --typescript --tailwind --app", description: "Creates Next.js 14+ project with TypeScript, Tailwind CSS, and App Router.", example: "npx create-next-app@latest . --typescript --eslint", notes: "--app flag enables the modern App Router (not Pages Router)." },
      { cmd: "npm create astro@latest", description: "Scaffolds a new Astro project — great for content-driven websites.", example: "npm create t3-app@latest", notes: "T3 Stack = Next.js + TypeScript + Tailwind + tRPC + Prisma" }
    ],
    content: `### Project Scaffolding CLI — Bootstrap Fast
Create production-ready project templates with one command:

**React Ecosystem:**
\`\`\`cmd
# Vite + React + TypeScript (Recommended 2024)
npm create vite@latest myapp -- --template react-ts

# Next.js (Full-stack React)
npx create-next-app@latest myapp --typescript --tailwind --app

# T3 Stack (Next.js + Prisma + tRPC + Tailwind)
npm create t3-app@latest
\`\`\`

**Backend:**
\`\`\`cmd
# Express.js starter
npx express-generator myapi --no-view

# NestJS (enterprise Node.js)
npx @nestjs/cli new myapi
\`\`\`

**Static Sites:**
\`\`\`cmd
# Astro (content sites)
npm create astro@latest

# Docusaurus (documentation)
npx create-docusaurus@latest my-docs classic
\`\`\`

One command from zero to a full project structure — CLI magic! 🪄`
  },
  {
    id: 67,
    slug: "windows-cmd-git-stash-rebase-advanced",
    originalChapterId: "git-ch67-advanced",
    title: "Advanced Git: `git stash`, `git rebase`, `git cherry-pick`",
    unit: "Unit 25: Advanced Git Workflows",
    bookRef: "Git Advanced CLI (p. 53-56)",
    icon: "🌿",
    exercise: {
      question: "What does `git stash pop` do?",
      options: ["Applies the most recent stash and removes it from the stash list", "Deletes the latest commit", "Creates a new branch from stash", "Pops a merge conflict"],
      correctAnswer: "Applies the most recent stash and removes it from the stash list",
      hint: "'git stash pop' = apply stash + remove it. 'git stash apply' keeps stash but also applies."
    },
    commands: [
      { cmd: "git stash", description: "Temporarily shelves uncommitted changes to switch branches cleanly.", example: "git stash save 'WIP: auth feature'", notes: "Saves working directory state. Use stash pop to restore." },
      { cmd: "git stash pop", description: "Applies the most recent stash and removes it from stash stack.", example: "git stash list; git stash pop stash@{1}", notes: "Use git stash list to see all stashes." },
      { cmd: "git cherry-pick abc1234", description: "Applies the changes from a specific commit onto the current branch.", example: "git cherry-pick feature/fix-123..feature/fix-125", notes: "Pick specific commits from other branches without merging everything." }
    ],
    content: `### Advanced Git Workflows — Work Like a Senior Developer
Master the Git commands that separate junior devs from seniors:

**Stash Workflow:**
\`\`\`cmd
git stash              # Save current work temporarily
git checkout main      # Switch to fix urgent bug on main
git pull               # Get latest changes
# ... fix bug, commit ...
git checkout feature   # Go back to your feature branch
git stash pop          # Restore your WIP work
\`\`\`

**Interactive Rebase (Clean Up Commits):**
\`\`\`cmd
git rebase -i HEAD~5   # Edit last 5 commits interactively
\`\`\`
- **pick** — keep commit
- **squash** — merge into previous commit
- **reword** — change commit message
- **drop** — delete commit

**Cherry-Pick (Port a Fix to Another Branch):**
\`\`\`cmd
git log --oneline    # Find commit hash
git cherry-pick a1b2c3  # Apply just that commit here
\`\`\`

These three commands will save you in real projects every week! 💪`
  },
  {
    id: 68,
    slug: "windows-cmd-git-tags-releases",
    originalChapterId: "git-ch68-tags",
    title: "Git Tags & Releases: `git tag`, `git push --tags`",
    unit: "Unit 25: Advanced Git Workflows",
    bookRef: "Git Advanced CLI (p. 57-59)",
    icon: "🏷️",
    exercise: {
      question: "Which command creates an annotated git tag with a message?",
      options: ["git tag -a v1.0.0 -m 'Release 1.0.0'", "git tag v1.0.0", "git release v1.0.0", "git label v1.0.0 -m 'Release'"],
      correctAnswer: "git tag -a v1.0.0 -m 'Release 1.0.0'",
      hint: "'-a' creates an annotated tag with metadata. '-m' adds a message."
    },
    commands: [
      { cmd: "git tag -a v1.0.0 -m \"First stable release\"", description: "Creates an annotated Git tag at the current commit marking version 1.0.0.", example: "git tag -a v2.1.3 -m 'Hotfix: auth bug fixed'", notes: "Annotated tags store tagger name, email, date, and message." },
      { cmd: "git push origin --tags", description: "Pushes all local tags to the remote repository on GitHub.", example: "git push origin v1.0.0", notes: "Tags don't push automatically with 'git push' — you must push them separately." },
      { cmd: "git tag -d v1.0.0-beta && git push origin :refs/tags/v1.0.0-beta", description: "Deletes a tag locally and remotely from GitHub.", example: "git tag --list 'v*'", notes: "git tag --list shows all tags. Use wildcards to filter." }
    ],
    content: `### Git Tags & Releases — Version Your Software Professionally
Tags mark significant points in your project history — versions, releases, milestones:

**Semantic Versioning Pattern:**
\`\`\`
v1.0.0 = MAJOR.MINOR.PATCH
v1.0.1 = bug fix
v1.1.0 = new feature (backward compatible)
v2.0.0 = breaking change
\`\`\`

**Release Workflow:**
\`\`\`cmd
git add . && git commit -m "chore: bump version to 1.2.0"
git tag -a v1.2.0 -m "v1.2.0: Added user authentication"
git push origin main --tags
\`\`\`

GitHub automatically creates a **Release** from your pushed tag! 🎉

**View Release History:**
\`\`\`cmd
git tag --list
git log --oneline --decorate | findstr "tag:"
\`\`\`

Professional open-source projects tag every release — now yours can too! 🏷️`
  },
  {
    id: 69,
    slug: "windows-cmd-github-cli-gh-commands",
    originalChapterId: "git-ch69-githubcli",
    title: "GitHub CLI (`gh`): Create Repos, PRs & Issues from Terminal",
    unit: "Unit 25: Advanced Git Workflows",
    bookRef: "Git Advanced CLI (p. 60-63)",
    icon: "🐙",
    exercise: {
      question: "Which GitHub CLI command creates a new pull request from the current branch?",
      options: ["gh pr create", "gh pull-request new", "git pr create", "gh merge request"],
      correctAnswer: "gh pr create",
      hint: "'gh pr create' opens an interactive prompt to create a pull request from your current branch."
    },
    commands: [
      { cmd: "gh auth login", description: "Authenticates GitHub CLI with your GitHub account via browser.", example: "gh auth status", notes: "Run once to set up. Uses OAuth — no passwords stored." },
      { cmd: "gh repo create myapp --public --clone", description: "Creates a new public GitHub repository and clones it locally.", example: "gh repo create my-private-app --private --clone", notes: "--public or --private controls visibility." },
      { cmd: "gh pr create --title \"Add auth feature\" --body \"Implements JWT login\" --base main", description: "Creates a pull request from current branch targeting main branch.", example: "gh pr list; gh pr merge 42 --squash", notes: "Entire GitHub PR workflow from terminal — no browser needed!" }
    ],
    content: `### GitHub CLI (gh) — GitHub in Your Terminal
The official GitHub CLI lets you manage repos, PRs, and issues without leaving your terminal:

**Install:**
\`\`\`cmd
winget install GitHub.cli
\`\`\`

**Complete PR Workflow:**
\`\`\`cmd
gh auth login                    # Authenticate once
git checkout -b feature/auth     # Create feature branch
# ... write code ...
git add . && git commit -m "feat: add JWT auth"
git push -u origin feature/auth
gh pr create --fill              # Create PR with commit message as description
gh pr view --web                 # Open PR in browser
\`\`\`

**Issue Management:**
\`\`\`cmd
gh issue create --title "Bug: login fails" --label bug
gh issue list --assignee @me
gh issue close 42
\`\`\`

**Repository Operations:**
\`\`\`cmd
gh repo fork original/repo --clone
gh repo view --web
gh release create v1.0.0 --notes "First release"
\`\`\`

Manage your entire GitHub workflow without touching a browser! 🚀`
  },
  {
    id: 70,
    slug: "windows-cmd-docker-basics-run-build",
    originalChapterId: "dev-ch70-docker",
    title: "Docker CLI Basics: `docker run`, `docker build`, `docker ps`",
    unit: "Unit 26: Containerization & Docker",
    bookRef: "Docker CLI Guide (p. 64-67)",
    icon: "🐳",
    exercise: {
      question: "Which Docker command runs a container in detached mode (background)?",
      options: ["docker run -d", "docker run --background", "docker start -b", "docker exec -d"],
      correctAnswer: "docker run -d",
      hint: "'-d' flag in 'docker run -d' starts the container detached (in background)."
    },
    commands: [
      { cmd: "docker run -p 3000:3000 node:20-alpine", description: "Runs the official Node.js 20 Alpine container mapping port 3000.", example: "docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=secret postgres", notes: "-p host:container port mapping. -d runs in background." },
      { cmd: "docker build -t myapp:latest .", description: "Builds a Docker image from Dockerfile in current directory.", example: "docker build -t nextsem-app:v1.0 --no-cache .", notes: "-t tags the image. --no-cache forces fresh build." },
      { cmd: "docker ps -a", description: "Lists all containers — running and stopped.", example: "docker ps | findstr myapp", notes: "-a shows stopped containers too. Without -a only running shown." }
    ],
    content: `### Docker CLI — Containerize Your Applications
Docker packages your app + its environment into portable containers:

**Why Docker for Developers?**
- ✅ "Works on my machine" — Now works on EVERY machine
- 🔄 Consistent environments across dev, staging, production
- 📦 Bundle Node.js version + dependencies + config together

**Basic Dockerfile:**
\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

**Build & Run Your App:**
\`\`\`cmd
docker build -t myapp:latest .
docker run -d -p 3000:3000 --name myapp-container myapp:latest
docker logs myapp-container
\`\`\`

**Essential Docker Commands:**
- 📋 \`docker ps\` — List running containers
- 📜 \`docker logs container\` — View container output
- 🖥️ \`docker exec -it container sh\` — Shell into container
- ⏹️ \`docker stop container\` — Stop container
- 🗑️ \`docker rm container\` — Remove container

Docker is now an essential skill for every backend developer! 🐳`
  },
  {
    id: 71,
    slug: "windows-cmd-docker-compose-multi-service",
    originalChapterId: "dev-ch71-compose",
    title: "Docker Compose: Run Full Stack Apps with One Command",
    unit: "Unit 26: Containerization & Docker",
    bookRef: "Docker CLI Guide (p. 68-70)",
    icon: "🎼",
    exercise: {
      question: "Which command starts all services defined in a docker-compose.yml file?",
      options: ["docker compose up -d", "docker start all", "docker run compose", "compose start"],
      correctAnswer: "docker compose up -d",
      hint: "'docker compose up -d' starts all services in detached mode from docker-compose.yml"
    },
    commands: [
      { cmd: "docker compose up -d", description: "Starts all services defined in docker-compose.yml in background.", example: "docker compose up -d --build", notes: "--build rebuilds images before starting. -d = detached mode." },
      { cmd: "docker compose logs -f", description: "Follows live log output from all running compose services.", example: "docker compose logs -f api", notes: "-f follows real-time. Specify service name to filter." },
      { cmd: "docker compose down -v", description: "Stops and removes all containers, networks, and volumes.", example: "docker compose down --rmi all", notes: "-v removes named volumes (database data). Use carefully." }
    ],
    content: `### Docker Compose — Orchestrate Your Full Stack Dev Environment
Run your entire app stack (frontend, backend, database) with one command:

**Sample docker-compose.yml:**
\`\`\`yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - api

  api:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - DB_URL=mongodb://mongodb:27017/myapp
    depends_on:
      - mongodb

  mongodb:
    image: mongo:7
    volumes:
      - mongo_data:/data/db
    ports:
      - "27017:27017"

volumes:
  mongo_data:
\`\`\`

**Usage:**
\`\`\`cmd
docker compose up -d --build   # Start everything
docker compose ps              # Check services status
docker compose logs -f api     # Watch API logs
docker compose down            # Stop everything
\`\`\`

Your entire MERN stack — running locally with one command! 🚀`
  },
  {
    id: 72,
    slug: "windows-ssh-keygen-github-setup",
    originalChapterId: "dev-ch72-sshkeys",
    title: "SSH Keys for GitHub: `ssh-keygen`, Adding to GitHub Account",
    unit: "Unit 27: Secure Developer Authentication",
    bookRef: "Developer Security CLI (p. 71-73)",
    icon: "🔑",
    exercise: {
      question: "Which ssh-keygen flag specifies the type of key algorithm to generate?",
      options: ["-t", "-b", "-f", "-C"],
      correctAnswer: "-t",
      hint: "'-t' specifies the type: ed25519 (recommended), rsa, ecdsa."
    },
    commands: [
      { cmd: "ssh-keygen -t ed25519 -C \"your@email.com\"", description: "Generates a new Ed25519 SSH key pair (recommended algorithm).", example: "ssh-keygen -t rsa -b 4096 -C \"work@company.com\"", notes: "Creates id_ed25519 (private) and id_ed25519.pub (public key)." },
      { cmd: "type %USERPROFILE%\\.ssh\\id_ed25519.pub", description: "Displays your public SSH key to copy to GitHub.", example: "cat ~/.ssh/id_ed25519.pub", notes: "Copy the entire output — starts with 'ssh-ed25519'. Paste into GitHub Settings > SSH Keys." },
      { cmd: "ssh -T git@github.com", description: "Tests your SSH connection to GitHub — confirms key is set up correctly.", example: "ssh -T git@github.com", notes: "Should respond: 'Hi username! You've successfully authenticated'" }
    ],
    content: `### SSH Keys for GitHub — No More Passwords
Set up SSH authentication once — push code to GitHub without ever typing a password:

**Complete Setup:**
\`\`\`cmd
REM Step 1: Generate key
ssh-keygen -t ed25519 -C "your@email.com"
REM (Press Enter for all prompts to use defaults)

REM Step 2: Copy your public key
type %USERPROFILE%\\.ssh\\id_ed25519.pub

REM Step 3: Add to GitHub
REM Go to GitHub → Settings → SSH and GPG keys → New SSH key
REM Paste your public key there

REM Step 4: Test the connection
ssh -T git@github.com

REM Step 5: Clone using SSH instead of HTTPS
git clone git@github.com:username/repo.git
\`\`\`

**Change existing repo to SSH:**
\`\`\`cmd
git remote set-url origin git@github.com:username/repo.git
\`\`\`

One-time setup — push code forever without passwords! 🔑`
  },
  {
    id: 73,
    slug: "windows-cmd-winget-package-manager",
    originalChapterId: "dev-ch73-winget",
    title: "Windows Package Manager: `winget install`, `winget upgrade`",
    unit: "Unit 27: Secure Developer Authentication",
    bookRef: "Windows Tools CLI (p. 74-76)",
    icon: "📦",
    exercise: {
      question: "Which winget command searches for available packages to install?",
      options: ["winget search", "winget find", "winget query", "winget list"],
      correctAnswer: "winget search",
      hint: "'winget search keyword' searches the Windows Package Catalog for matching apps."
    },
    commands: [
      { cmd: "winget search nodejs", description: "Searches for Node.js packages available in the Windows Package Catalog.", example: "winget search \"Visual Studio Code\"", notes: "Shows Package ID, version, source for matching packages." },
      { cmd: "winget install OpenJS.NodeJS.LTS", description: "Installs the latest LTS version of Node.js silently.", example: "winget install Microsoft.VisualStudioCode", notes: "Use the exact Package ID from winget search results." },
      { cmd: "winget upgrade --all", description: "Upgrades all installed applications to their latest versions.", example: "winget upgrade Git.Git", notes: "Like 'npm update' but for your whole Windows system." }
    ],
    content: `### winget — Windows Package Manager (Like npm for your PC)
Install and update developer tools from CMD without visiting download pages:

**Developer Machine Setup Script:**
\`\`\`cmd
@echo off
echo Setting up developer machine...

winget install Git.Git --silent
winget install OpenJS.NodeJS.LTS --silent
winget install Microsoft.VisualStudioCode --silent
winget install GitHub.cli --silent
winget install Docker.DockerDesktop --silent
winget install Microsoft.PowerShell --silent
winget install Postman.Postman --silent

echo Developer setup complete!
\`\`\`

**Update Everything:**
\`\`\`cmd
winget upgrade --all
\`\`\`

**Essential Packages:**
| App | Package ID |
|-----|-----------|
| Node.js LTS | OpenJS.NodeJS.LTS |
| VS Code | Microsoft.VisualStudioCode |
| Git | Git.Git |
| Docker Desktop | Docker.DockerDesktop |
| GitHub CLI | GitHub.cli |

Share your \`setup.bat\` with your team — everyone gets the exact same dev tools! 🛠️`
  },
  {
    id: 74,
    slug: "windows-cmd-git-workflows-gitflow",
    originalChapterId: "git-ch74-gitflow",
    title: "Git Branch Workflows: GitFlow, Feature Branch, Trunk-Based Dev",
    unit: "Unit 28: Professional Git Workflows",
    bookRef: "Git Advanced CLI (p. 77-80)",
    icon: "🌊",
    exercise: {
      question: "In GitFlow, which branch contains production-ready code that is live to users?",
      options: ["main/master", "develop", "release", "hotfix"],
      correctAnswer: "main/master",
      hint: "In GitFlow, 'main' always contains production-ready deployed code."
    },
    commands: [
      { cmd: "git checkout -b feature/user-auth develop", description: "Creates and switches to a new feature branch from develop.", example: "git checkout -b hotfix/login-crash main", notes: "GitFlow: features branch from develop, hotfixes from main." },
      { cmd: "git merge --no-ff feature/user-auth", description: "Merges feature branch with a merge commit (no fast-forward).", example: "git merge --squash feature/my-feature", notes: "--no-ff preserves branch history. --squash combines into one commit." },
      { cmd: "git log --oneline --graph --all", description: "Displays a visual ASCII graph of all branches and commits.", example: "git log --graph --decorate --pretty=oneline --abbrev-commit", notes: "Beautiful branch history visualization in terminal." }
    ],
    content: `### Git Branching Workflows — Industry Standard Patterns
Professional teams use structured branching strategies for organized development:

**GitFlow (Traditional):**
\`\`\`
main ──────────────────────── (production)
  └── develop ─────────────── (integration)
        ├── feature/auth ──── (new features)
        ├── feature/payments   
        └── hotfix/login ──── (urgent fixes from main)
\`\`\`

**Trunk-Based Development (Modern/CI-CD Friendly):**
\`\`\`
main ────────────────────────── (everyone commits here)
  ├── PR → short-lived branches (max 1-2 days)
  └── Feature flags for incomplete features
\`\`\`

**Daily Feature Branch Workflow:**
\`\`\`cmd
git pull origin main              # Get latest
git checkout -b feature/my-task   # Create feature branch
# ... code ...
git add . && git commit -m "feat: my new feature"
git push -u origin feature/my-task
gh pr create --fill               # Create PR via GitHub CLI
\`\`\`

Most companies use either GitFlow or Trunk-based — knowing both makes you hire-ready! 💼`
  },
  {
    id: 75,
    slug: "windows-cmd-environment-secrets-management",
    originalChapterId: "dev-ch75-secrets",
    title: "Secrets & API Key Management: `.env` Files, `dotenv`, `cross-env`",
    unit: "Unit 28: Professional Git Workflows",
    bookRef: "Developer Security CLI (p. 81-84)",
    icon: "🔐",
    exercise: {
      question: "Which command reads a `.env` file and loads variables into the current Node.js process?",
      options: ["require('dotenv').config()", "process.env.load('.env')", "import '.env'", "env.load()"],
      correctAnswer: "require('dotenv').config()",
      hint: "The 'dotenv' npm package reads .env files and populates process.env."
    },
    commands: [
      { cmd: "echo REACT_APP_API_URL=https://api.myapp.com >> .env\necho DB_PASSWORD=mysecret >> .env", description: "Appends environment variable definitions to .env file.", example: "echo NEXT_PUBLIC_FIREBASE_KEY=xxx >> .env.local", notes: "Never commit .env files to git! Add to .gitignore." },
      { cmd: "echo .env >> .gitignore\necho .env.local >> .gitignore\necho .env.production >> .gitignore", description: "Adds .env files to .gitignore to prevent secret leakage.", example: "git rm --cached .env", notes: "First and most important security practice — protect your secrets!" },
      { cmd: "npx cross-env NODE_ENV=production node server.js", description: "Sets NODE_ENV to production cross-platform (works on Windows and Linux).", example: "npx cross-env PORT=8080 node app.js", notes: "cross-env solves Windows CMD vs Linux/Mac env var syntax differences." }
    ],
    content: `### Secrets Management — Never Leak API Keys
The #1 cause of security incidents? Accidental API key commits to public GitHub repos:

**The Correct Pattern:**
\`\`\`cmd
REM 1. Create .env file
echo NEXT_PUBLIC_FIREBASE_KEY=your_key > .env.local
echo DATABASE_URL=postgresql://... >> .env.local
echo JWT_SECRET=ultra-secret-string >> .env.local

REM 2. IMMEDIATELY add to .gitignore
echo .env >> .gitignore
echo .env.local >> .gitignore
echo .env*.local >> .gitignore

REM 3. Create .env.example (safe to commit — shows structure)
echo NEXT_PUBLIC_FIREBASE_KEY=your_key_here > .env.example
echo DATABASE_URL=postgresql://localhost/mydb >> .env.example
\`\`\`

**In Node.js:**
\`\`\`javascript
require('dotenv').config()
console.log(process.env.DATABASE_URL) // reads from .env
\`\`\`

**For Deployments (Vercel/Firebase):**
\`\`\`cmd
npx vercel env add DATABASE_URL
npx firebase functions:config:set db.url="postgresql://..."
\`\`\`

Treat .env files like passwords — never share, never commit! 🔐`
  },
  {
    id: 76,
    slug: "windows-cmd-nginx-local-reverse-proxy",
    originalChapterId: "dev-ch76-nginx",
    title: "Nginx CLI: Local Reverse Proxy & Static File Server Setup",
    unit: "Unit 29: Web Server CLI Configuration",
    bookRef: "Web Server CLI Guide (p. 85-88)",
    icon: "🌐",
    exercise: {
      question: "Which nginx command reloads the configuration without stopping the server?",
      options: ["nginx -s reload", "nginx restart", "nginx --reload", "service nginx restart"],
      correctAnswer: "nginx -s reload",
      hint: "'nginx -s reload' gracefully reloads config — active connections are not interrupted."
    },
    commands: [
      { cmd: "winget install nginx", description: "Installs Nginx web server on Windows via winget package manager.", example: "nginx -v", notes: "Or download from nginx.org. nginx.exe is in C:\\nginx\\" },
      { cmd: "nginx -t", description: "Tests Nginx configuration file syntax for errors before applying.", example: "nginx -t -c C:\\nginx\\conf\\nginx.conf", notes: "Always test config before reload. Output: 'test is successful'" },
      { cmd: "nginx -s reload", description: "Gracefully reloads Nginx with new configuration — no downtime.", example: "nginx -s stop", notes: "'-s quit' graceful shutdown. '-s stop' immediate stop." }
    ],
    content: `### Nginx — Your Local Dev Reverse Proxy
Nginx is the world's most popular web server — learn to configure it from CLI:

**Nginx as Reverse Proxy (next.js → port 3000):**
\`\`\`nginx
# nginx.conf
server {
  listen 80;
  server_name localhost;
  
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
  }
}
\`\`\`

**Nginx CLI Commands:**
\`\`\`cmd
nginx -t          # Test config
nginx             # Start server
nginx -s reload   # Reload config (zero downtime)
nginx -s quit     # Graceful shutdown
nginx -s stop     # Immediate shutdown
\`\`\`

**Static File Hosting:**
\`\`\`nginx
server {
  listen 8080;
  root C:/projects/myapp/dist;
  index index.html;
  try_files $uri $uri/ /index.html;
}
\`\`\`

Nginx is used by 400 million+ websites — it's essential knowledge for every web developer! 🌐`
  },
  {
    id: 77,
    slug: "windows-cmd-jest-testing-cli",
    originalChapterId: "dev-ch77-testing",
    title: "Testing from CLI: `jest --watch`, Coverage Reports",
    unit: "Unit 29: Web Server CLI Configuration",
    bookRef: "Testing CLI Guide (p. 89-92)",
    icon: "🧪",
    exercise: {
      question: "Which Jest flag runs only tests related to files changed since the last commit?",
      options: ["--onlyChanged", "--changed", "--since-commit", "--modified"],
      correctAnswer: "--onlyChanged",
      hint: "'jest --onlyChanged' uses git diff to find changed files and runs only their tests."
    },
    commands: [
      { cmd: "npx jest --watch", description: "Runs Jest tests in interactive watch mode — re-runs affected tests on file change.", example: "npx jest --watchAll", notes: "--watchAll runs all tests on any change. --watch uses git diff." },
      { cmd: "npx jest --coverage", description: "Runs all tests and generates a code coverage report.", example: "npx jest --coverage --coverageReporters=text-summary", notes: "Coverage shows what % of your code is tested." },
      { cmd: "npx jest --testNamePattern=\"auth\"", description: "Runs only tests whose names match the 'auth' pattern.", example: "npx jest src/components/Button.test.tsx", notes: "Run a specific test file by providing its path." }
    ],
    content: `### Jest Testing CLI — Test Like a Professional
Run, watch, and analyze your test suite entirely from the terminal:

**Setup Jest in Project:**
\`\`\`cmd
npm install --save-dev jest @types/jest ts-jest
npx ts-jest config:init
\`\`\`

**Essential Jest Commands:**
\`\`\`cmd
npx jest                        # Run all tests once
npx jest --watch                # Watch mode (interactive)
npx jest --coverage             # Generate coverage report
npx jest --onlyChanged          # Only changed files
npx jest src/api/auth.test.ts   # Run specific test file
npx jest --verbose              # Detailed test output
\`\`\`

**Coverage Report:**
\`\`\`
--------------------|--------|----------|---------|---------|
File                | % Stmts| % Branch | % Funcs | % Lines |
--------------------|--------|----------|---------|---------|
All files           |  87.5  |    75    |   90    |  87.5   |
 auth/loginHandler  |  100   |   100    |   100   |   100   |
 utils/validator.ts |   75   |    50    |    80   |    75   |
\`\`\`

Aim for 80%+ coverage on critical business logic! 🎯`
  },
  {
    id: 78,
    slug: "windows-cmd-aws-cli-basics",
    originalChapterId: "cloud-ch78-aws",
    title: "AWS CLI Basics: Configure, S3 Upload, EC2 Status",
    unit: "Unit 30: Cloud CLI Deployment",
    bookRef: "Cloud CLI Guide (p. 93-96)",
    icon: "☁️",
    exercise: {
      question: "Which AWS CLI command configures your access keys and default region?",
      options: ["aws configure", "aws login", "aws setup", "aws init"],
      correctAnswer: "aws configure",
      hint: "'aws configure' interactively asks for Access Key ID, Secret, Region, and output format."
    },
    commands: [
      { cmd: "aws configure", description: "Sets up AWS CLI credentials — access key ID, secret, region, output format.", example: "aws configure --profile production", notes: "Stores credentials in ~/.aws/credentials — never commit this file!" },
      { cmd: "aws s3 cp dist s3://my-bucket/app --recursive", description: "Uploads entire dist directory to S3 bucket for static website hosting.", example: "aws s3 sync out s3://nextsem-app --delete", notes: "sync only uploads changed files. --delete removes old files." },
      { cmd: "aws ec2 describe-instances --query 'Reservations[].Instances[].State'", description: "Lists status of all EC2 instances in your AWS account.", example: "aws ec2 start-instances --instance-ids i-1234567890", notes: "EC2 = Elastic Compute Cloud — virtual servers in AWS." }
    ],
    content: `### AWS CLI — Manage Cloud Infrastructure from Terminal
AWS CLI lets you control all 200+ AWS services without clicking through the console:

**Setup:**
\`\`\`cmd
winget install Amazon.AWSCLI
aws configure
\`\`\`

**S3 Static Website Deployment:**
\`\`\`cmd
npm run build                                    # Build your Next.js app
aws s3 sync out s3://your-bucket-name --delete   # Upload to S3
aws cloudfront create-invalidation ^
  --distribution-id E1ABCDEFGHIJK ^
  --paths "/*"                                   # Clear CDN cache
echo Deployed to AWS! 🚀
\`\`\`

**Useful AWS CLI Commands:**
\`\`\`cmd
aws s3 ls                    # List all S3 buckets
aws s3 ls s3://bucket-name   # List bucket contents
aws ec2 describe-instances   # List EC2 virtual machines
aws rds describe-db-instances # List RDS databases
aws lambda list-functions    # List serverless functions
aws logs tail /aws/lambda/fn # Stream CloudWatch logs
\`\`\`

AWS CLI is used at every major tech company — it's a key DevOps skill! ☁️`
  },
  {
    id: 79,
    slug: "windows-cmd-gcloud-cli-basics",
    originalChapterId: "cloud-ch79-gcloud",
    title: "Google Cloud CLI (`gcloud`): Deploy Apps, Manage Firebase",
    unit: "Unit 30: Cloud CLI Deployment",
    bookRef: "Cloud CLI Guide (p. 97-100)",
    icon: "🔵",
    exercise: {
      question: "Which gcloud command deploys a Node.js app to Google App Engine?",
      options: ["gcloud app deploy", "gcloud run deploy", "gcloud deploy --runtime nodejs", "gcloud upload app"],
      correctAnswer: "gcloud app deploy",
      hint: "'gcloud app deploy' reads app.yaml and deploys to Google App Engine."
    },
    commands: [
      { cmd: "gcloud init", description: "Initializes gcloud CLI and authenticates with your Google account.", example: "gcloud auth login", notes: "Run once to set up. Authenticates via browser OAuth flow." },
      { cmd: "gcloud app deploy", description: "Deploys Node.js application to Google App Engine using app.yaml config.", example: "gcloud app deploy --version=v2 --no-promote", notes: "Requires app.yaml in project root defining runtime and scaling." },
      { cmd: "gcloud run deploy myapp --source . --region us-central1 --allow-unauthenticated", description: "Deploys containerized app to Google Cloud Run serverless platform.", example: "gcloud run services list", notes: "Cloud Run = serverless containers. Auto-scales to zero." }
    ],
    content: `### Google Cloud CLI — Deploy to GCP from Terminal
Control all Google Cloud services — App Engine, Cloud Run, Firebase, and more:

**Setup:**
\`\`\`cmd
winget install Google.CloudSDK
gcloud init
gcloud auth application-default login
\`\`\`

**Cloud Run (Serverless Containers):**
\`\`\`cmd
gcloud run deploy nextsem-api ^
  --source . ^
  --region us-central1 ^
  --allow-unauthenticated ^
  --port 3000
\`\`\`

**Firebase + gcloud Combined:**
\`\`\`cmd
firebase login
firebase use bca-nextsem
npm run build
firebase deploy --only hosting
\`\`\`

**Useful gcloud Commands:**
\`\`\`cmd
gcloud projects list              # List GCP projects
gcloud config set project my-project  # Switch project
gcloud run services list          # List Cloud Run services
gcloud logs read --limit 50       # View recent logs
gcloud sql instances list         # List Cloud SQL databases
\`\`\`

Google Cloud powers Google Search, YouTube, and millions of apps — learn their CLI! 🔵`
  },
  {
    id: 80,
    slug: "windows-cmd-ci-cd-github-actions-basics",
    originalChapterId: "dev-ch80-cicd",
    title: "CI/CD Basics: GitHub Actions Workflow with CLI Triggers",
    unit: "Unit 31: CI/CD & Automation",
    bookRef: "CI/CD CLI Guide (p. 101-104)",
    icon: "🤖",
    exercise: {
      question: "Which GitHub Actions event triggers a workflow when code is pushed to main branch?",
      options: ["on: push: branches: [main]", "trigger: push: main", "on: commit: main", "workflow: push main"],
      correctAnswer: "on: push: branches: [main]",
      hint: "GitHub Actions workflows are triggered by event definitions using 'on:' keyword in YAML."
    },
    commands: [
      { cmd: "mkdir -p .github/workflows && echo '' > .github/workflows/deploy.yml", description: "Creates the GitHub Actions workflow directory and a deploy workflow file.", example: "mkdir .github\\workflows", notes: "GitHub Actions reads YAML files from .github/workflows/ directory." },
      { cmd: "gh workflow list", description: "Lists all GitHub Actions workflows in the repository.", example: "gh workflow run deploy.yml", notes: "Requires GitHub CLI (gh) to be installed and authenticated." },
      { cmd: "gh run list --limit 10", description: "Shows the last 10 GitHub Actions workflow run results.", example: "gh run view 1234567890 --log", notes: "View logs of a specific workflow run with --log flag." }
    ],
    content: `### CI/CD with GitHub Actions — Automate Your Deployments
Set up automated testing and deployment that runs every time you push code:

**Sample .github/workflows/deploy.yml:**
\`\`\`yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Run Tests
        run: npm test
      
      - name: Build App
        run: npm run build
      
      - name: Deploy to Firebase
        run: npx firebase-tools deploy --only hosting --token \${{ secrets.FIREBASE_TOKEN }}
\`\`\`

**Manage from CLI:**
\`\`\`cmd
gh workflow list              # List all workflows
gh run list                   # Recent runs
gh run watch                  # Watch current run live
\`\`\`

Push to main → tests run → deploys automatically. This is professional DevOps! 🚀`
  },
  {
    id: 81,
    slug: "windows-cmd-netlify-cli-deployment",
    originalChapterId: "cloud-ch81-netlify",
    title: "Netlify CLI: Deploy Static Sites & Next.js Apps",
    unit: "Unit 31: CI/CD & Automation",
    bookRef: "Cloud CLI Guide (p. 105-107)",
    icon: "🌊",
    exercise: {
      question: "Which Netlify CLI command deploys a production build to your live site?",
      options: ["netlify deploy --prod", "netlify push --live", "netlify release", "netlify build --publish"],
      correctAnswer: "netlify deploy --prod",
      hint: "'netlify deploy --prod' pushes your build to the live production URL."
    },
    commands: [
      { cmd: "npx netlify login", description: "Authenticates Netlify CLI with your Netlify account via browser.", example: "npx netlify status", notes: "Opens browser OAuth flow. Stores auth token locally." },
      { cmd: "npx netlify init", description: "Links current project to a Netlify site and configures build settings.", example: "npx netlify link --id site-id", notes: "Creates netlify.toml config if it doesn't exist." },
      { cmd: "npx netlify deploy --prod --dir out", description: "Deploys the contents of the 'out' folder to production Netlify site.", example: "npx netlify deploy --prod --dir dist", notes: "--prod deploys to live URL. Without --prod deploys to preview URL." }
    ],
    content: `### Netlify CLI — Zero-Config Static & Next.js Deployment
Netlify is the fastest way to deploy frontend apps — works with Next.js, React, Vue, and more:

**Project Setup:**
\`\`\`cmd
npm install -g netlify-cli
netlify login
netlify init
\`\`\`

**Deployment Workflow:**
\`\`\`cmd
npm run build                        # Build your app
netlify deploy --prod --dir out      # Deploy to production

REM OR — Let Netlify handle the build:
netlify deploy --prod --build
\`\`\`

**netlify.toml (Config File):**
\`\`\`toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

**Preview Deploys:**
\`\`\`cmd
netlify deploy              # Creates preview URL (not live)
netlify deploy --prod       # Deploys to production URL
netlify open                # Opens site in browser
\`\`\`

Netlify auto-deploys from GitHub — perfect for continuous deployment! 🚀`
  },
  {
    id: 82,
    slug: "windows-cmd-pm2-process-manager-nodejs",
    originalChapterId: "dev-ch82-pm2",
    title: "PM2 Process Manager: Keep Node.js Servers Running 24/7",
    unit: "Unit 32: Production Node.js Operations",
    bookRef: "Node.js Production CLI (p. 108-111)",
    icon: "⚡",
    exercise: {
      question: "Which PM2 command starts a Node.js application and names it 'api'?",
      options: ["pm2 start server.js --name api", "pm2 run server.js api", "pm2 new api server.js", "node pm2 server.js"],
      correctAnswer: "pm2 start server.js --name api",
      hint: "'pm2 start file.js --name name' starts the app and assigns it a name for easy management."
    },
    commands: [
      { cmd: "npx pm2 start server.js --name api --watch", description: "Starts Node.js server with PM2, names it 'api', and auto-restarts on file changes.", example: "pm2 start ecosystem.config.js", notes: "--watch auto-restarts when files change. Like nodemon but for production." },
      { cmd: "pm2 logs api --lines 100", description: "Streams live logs from the 'api' PM2 process.", example: "pm2 logs --err", notes: "Logs are stored permanently. --err shows only error logs." },
      { cmd: "pm2 startup && pm2 save", description: "Configures PM2 to auto-start processes when Windows reboots.", example: "pm2 delete api", notes: "pm2 save saves current process list. pm2 resurrect restores it." }
    ],
    content: `### PM2 — Production Process Manager for Node.js
Keep your Node.js API running forever — auto-restart on crashes, survive server reboots:

**Install & Start:**
\`\`\`cmd
npm install -g pm2
pm2 start server.js --name "nextsem-api"
pm2 startup     # Configure auto-start on boot
pm2 save        # Save current process list
\`\`\`

**Essential PM2 Commands:**
\`\`\`cmd
pm2 list                    # Show all processes and status
pm2 logs api                # Stream live logs
pm2 restart api             # Restart the process
pm2 reload api              # Zero-downtime reload
pm2 stop api                # Stop (keeps in list)
pm2 delete api              # Remove from PM2
pm2 monit                   # Real-time CPU/RAM dashboard
\`\`\`

**ecosystem.config.js (Production Config):**
\`\`\`javascript
module.exports = {
  apps: [{
    name: 'nextsem-api',
    script: 'server.js',
    instances: 'max',    // Use all CPU cores
    exec_mode: 'cluster',
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
}
\`\`\`

PM2 is how real production Node.js servers stay online 24/7! 💪`
  },
  {
    id: 83,
    slug: "windows-cmd-prisma-cli-database",
    originalChapterId: "dev-ch83-prisma",
    title: "Prisma ORM CLI: `prisma generate`, `prisma migrate`, `prisma studio`",
    unit: "Unit 32: Production Node.js Operations",
    bookRef: "Database CLI Guide (p. 112-115)",
    icon: "🔷",
    exercise: {
      question: "Which Prisma CLI command creates a new database migration from schema changes?",
      options: ["npx prisma migrate dev", "npx prisma db push", "npx prisma generate", "npx prisma sync"],
      correctAnswer: "npx prisma migrate dev",
      hint: "'prisma migrate dev' creates a migration file and applies it to your development database."
    },
    commands: [
      { cmd: "npx prisma init", description: "Initializes Prisma in the project — creates schema.prisma and .env with DATABASE_URL.", example: "npx prisma init --datasource-provider postgresql", notes: "Creates prisma/schema.prisma file for database schema definition." },
      { cmd: "npx prisma migrate dev --name add-users-table", description: "Creates and applies a database migration named 'add-users-table'.", example: "npx prisma migrate deploy", notes: "migrate dev = development. migrate deploy = production (no prompts)." },
      { cmd: "npx prisma studio", description: "Opens Prisma Studio — a visual database browser at localhost:5555.", example: "npx prisma db pull", notes: "Browse, add, edit database records visually in the browser." }
    ],
    content: `### Prisma ORM CLI — Type-Safe Database Management
Prisma makes database work delightful — define your schema, run migrations, query with TypeScript:

**Complete Prisma Setup:**
\`\`\`cmd
npm install @prisma/client
npm install --save-dev prisma
npx prisma init --datasource-provider postgresql
\`\`\`

**schema.prisma Example:**
\`\`\`prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  createdAt DateTime @default(now())
}
\`\`\`

**Migration Workflow:**
\`\`\`cmd
npx prisma migrate dev --name init        # Create & apply migration
npx prisma generate                        # Generate TypeScript client
npx prisma studio                          # Open database GUI
npx prisma db seed                         # Run seed data script
\`\`\`

**Query Example in TypeScript:**
\`\`\`typescript
const user = await prisma.user.create({
  data: { email: 'manoj@nextsem.online', name: 'Er. Manoj' }
})
\`\`\`

Type-safe database queries with zero SQL writing — magic! 🔷`
  },
  {
    id: 84,
    slug: "windows-cmd-redis-cli-caching",
    originalChapterId: "dev-ch84-redis",
    title: "Redis CLI Basics: Set, Get, Cache & Pub/Sub from Terminal",
    unit: "Unit 33: Databases & Caching CLI",
    bookRef: "Database CLI Guide (p. 116-119)",
    icon: "🔴",
    exercise: {
      question: "Which Redis CLI command sets a key with an expiration time of 300 seconds?",
      options: ["SET key value EX 300", "SET key value TTL 300", "SET key value --expire 300", "SETEX key 300 value"],
      correctAnswer: "SET key value EX 300",
      hint: "'SET key value EX 300' sets the key to expire after 300 seconds. SETEX also works."
    },
    commands: [
      { cmd: "redis-cli ping", description: "Tests Redis server connection — responds with PONG if server is running.", example: "redis-cli -h localhost -p 6379 ping", notes: "PONG response = Redis is alive and reachable." },
      { cmd: "redis-cli SET session:user123 '{\"id\":1,\"email\":\"user@test.com\"}' EX 3600", description: "Stores a JSON session string in Redis with 1 hour expiration.", example: "redis-cli SET cache:homepage '<html>...' EX 300", notes: "EX = seconds. PX = milliseconds." },
      { cmd: "redis-cli GET session:user123", description: "Retrieves the value stored at the specified Redis key.", example: "redis-cli KEYS session:*", notes: "KEYS pattern matches all keys with a prefix. Use SCAN in production." }
    ],
    content: `### Redis CLI — Cache Your Data, Speed Up Your App
Redis stores data in memory for lightning-fast reads — used by Twitter, GitHub, StackOverflow:

**Start Redis:**
\`\`\`cmd
REM With Docker (easiest):
docker run -d -p 6379:6379 redis:alpine

REM Connect:
redis-cli
\`\`\`

**Essential Redis Commands:**
\`\`\`cmd
SET name "Nextsem"        # Store a string
GET name                   # Read it back
DEL name                   # Delete a key
EXISTS name                # Check if exists (1=yes, 0=no)
EXPIRE name 300            # Set expiry (seconds)
TTL name                   # Check remaining TTL

KEYS *                     # List all keys (avoid in production)
FLUSHDB                    # Clear current database (careful!)
INFO                       # Redis server statistics
\`\`\`

**In Node.js:**
\`\`\`javascript
const redis = require('ioredis')
const client = new redis()

await client.set('user:1', JSON.stringify(user), 'EX', 3600)
const cached = JSON.parse(await client.get('user:1'))
\`\`\`

Cache API responses in Redis → reduce database queries by 90%! ⚡`
  },
  {
    id: 85,
    slug: "windows-cmd-mongodb-cli-mongosh",
    originalChapterId: "dev-ch85-mongodb",
    title: "MongoDB CLI: `mongosh` — Query, Insert, Update Documents",
    unit: "Unit 33: Databases & Caching CLI",
    bookRef: "Database CLI Guide (p. 120-123)",
    icon: "🍃",
    exercise: {
      question: "Which mongosh command inserts a document into the 'users' collection?",
      options: ["db.users.insertOne({name: 'Manoj'})", "db.insert.users({name: 'Manoj'})", "db.users.create({name: 'Manoj'})", "db.add.users({name: 'Manoj'})"],
      correctAnswer: "db.users.insertOne({name: 'Manoj'})",
      hint: "MongoDB uses db.collectionName.insertOne() for single document insertion."
    },
    commands: [
      { cmd: "mongosh \"mongodb://localhost:27017/mydb\"", description: "Opens MongoDB Shell connected to 'mydb' database on localhost.", example: "mongosh \"mongodb+srv://user:pass@cluster.mongodb.net/mydb\"", notes: "mongosh = MongoDB Shell. Connects to local or Atlas cloud DB." },
      { cmd: "db.users.find({role: 'admin'}).pretty()", description: "Finds all user documents where role equals 'admin', formatted nicely.", example: "db.posts.find({published: true}).sort({createdAt: -1}).limit(10)", notes: ".pretty() formats JSON output. .limit(N) paginates results." },
      { cmd: "db.users.updateMany({}, {$set: {verified: false}})", description: "Updates all user documents to set verified field to false.", example: "db.posts.deleteMany({createdAt: {$lt: new Date('2020-01-01')}})", notes: "$set updates fields. $unset removes fields. $push adds to arrays." }
    ],
    content: `### MongoDB Shell (mongosh) — NoSQL Database from CLI
Query and manage your MongoDB database directly from the terminal:

**Connect & Explore:**
\`\`\`javascript
mongosh "mongodb://localhost:27017"
use myapp
show collections
\`\`\`

**CRUD Operations:**
\`\`\`javascript
// Create
db.users.insertOne({ name: "Manoj", email: "m@nextsem.online", role: "admin" })
db.users.insertMany([{name: "User1"}, {name: "User2"}])

// Read
db.users.find({role: "admin"}).pretty()
db.users.findOne({email: "m@nextsem.online"})
db.users.countDocuments({verified: true})

// Update
db.users.updateOne({email: "m@nextsem.online"}, {$set: {plan: "pro"}})

// Delete
db.users.deleteOne({email: "spam@test.com"})
\`\`\`

**Useful Queries:**
\`\`\`javascript
db.orders.find({total: {$gt: 1000}})         // Greater than
db.users.find({name: /^M/})                   // Regex match
db.posts.find().sort({views: -1}).limit(5)   // Top 5 by views
\`\`\`

MongoDB is used by Uber, Facebook, Adobe — essential NoSQL knowledge! 🍃`
  },
  {
    id: 86,
    slug: "windows-cmd-curl-postman-alternative",
    originalChapterId: "dev-ch86-apitest",
    title: "Full REST API Testing from CMD (curl as Postman Alternative)",
    unit: "Unit 34: API Development from CLI",
    bookRef: "API Testing CLI Guide (p. 124-127)",
    icon: "🔌",
    exercise: {
      question: "Which curl flag sends custom HTTP headers with a request?",
      options: ["-H", "--header-add", "-h", "--set-header"],
      correctAnswer: "-H",
      hint: "'-H \"Header: Value\"' adds a custom HTTP header to the curl request."
    },
    commands: [
      { cmd: "curl -X GET http://localhost:3000/api/users -H \"Authorization: Bearer eyJhbGc...\"", description: "Sends authenticated GET request with JWT Bearer token in header.", example: "curl http://api.example.com/users -H 'X-API-Key: abc123'", notes: "-H adds HTTP headers. Use for auth, content-type, API keys." },
      { cmd: "curl -X PUT http://localhost:3000/api/users/1 -H \"Content-Type: application/json\" -d \"{\\\"name\\\":\\\"Updated Name\\\"}\"", description: "Sends a PUT request to update user with ID 1.", example: "curl -X PATCH http://api.local/posts/1 -d '{\"title\":\"New\"}'", notes: "PUT = full update. PATCH = partial update." },
      { cmd: "curl -s -o /dev/null -w \"%{http_code}\" http://localhost:3000/health", description: "Makes a silent request and prints only the HTTP status code.", example: "curl -I http://localhost:3000/api/users", notes: "-w prints response info. -o /dev/null discards body. -I = HEAD request." }
    ],
    content: `### Full API Testing with curl — Postman in Your Terminal
Test every HTTP method, authenticate, debug headers — all from CMD:

**Complete CRUD API Test:**
\`\`\`cmd
REM Create user (POST)
curl -X POST http://localhost:3000/api/users ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Manoj\",\"email\":\"m@test.com\"}"

REM Get all users (GET)
curl http://localhost:3000/api/users

REM Update user (PUT)
curl -X PUT http://localhost:3000/api/users/1 ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer YOUR_JWT" ^
  -d "{\"name\":\"Er. Manoj Kumar\"}"

REM Delete user (DELETE)
curl -X DELETE http://localhost:3000/api/users/1 ^
  -H "Authorization: Bearer YOUR_JWT"
\`\`\`

**Health Check Script:**
\`\`\`cmd
@echo off
curl -s -o nul -w "%%{http_code}" http://localhost:3000/health > tmp.txt
set /p STATUS=<tmp.txt
if not "%STATUS%"=="200" echo API is DOWN! Status: %STATUS%
else echo API is UP ✅ Status: %STATUS%
\`\`\`

Master curl = debug any API from anywhere, any device! 💪`
  },
  {
    id: 87,
    slug: "windows-cmd-jq-json-processing",
    originalChapterId: "dev-ch87-jq",
    title: "JSON Processing from CLI: `jq` — Filter & Transform JSON",
    unit: "Unit 34: API Development from CLI",
    bookRef: "API Testing CLI Guide (p. 128-130)",
    icon: "📊",
    exercise: {
      question: "Which jq filter extracts just the 'name' field from a JSON object?",
      options: [".name", "$.name", "jq[name]", "get.name"],
      correctAnswer: ".name",
      hint: "In jq, '.' refers to the current input. '.name' extracts the 'name' field."
    },
    commands: [
      { cmd: "curl -s https://api.github.com/users/octocat | jq .name", description: "Fetches GitHub API response and extracts only the name field with jq.", example: "curl -s https://api.coindesk.com/v1/bpi/currentprice.json | jq .bpi.USD.rate", notes: "jq parses JSON. Install: winget install stedolan.jq" },
      { cmd: "curl -s http://localhost:3000/api/users | jq '.[].email'", description: "Fetches users array from API and extracts only email field from each object.", example: "curl -s api/posts | jq '[.[] | {id, title}]'", notes: ".[] iterates over array. | pipes to next filter." },
      { cmd: "cat package.json | jq '.dependencies | keys'", description: "Reads package.json and lists all dependency names as an array.", example: "cat package.json | jq '.version,.name'", notes: "jq works with local files too — not just API responses." }
    ],
    content: `### jq — The JSON Power Tool for CLI Developers
Process, filter, and transform JSON directly in your terminal — no code needed:

**Install:**
\`\`\`cmd
winget install stedolan.jq
\`\`\`

**Essential jq Patterns:**
\`\`\`cmd
REM Extract a field
curl -s api/user | jq '.email'

REM Get array length
curl -s api/users | jq '. | length'

REM Filter array by condition  
curl -s api/users | jq '[.[] | select(.role == "admin")]'

REM Extract multiple fields
curl -s api/users | jq '.[] | {id, name, email}'

REM Sort array by field
curl -s api/posts | jq '[.[] | .views] | sort | reverse'

REM Read from file
jq '.scripts' package.json
\`\`\`

**Real Use Case — Extract All Dependency Versions:**
\`\`\`cmd
jq '.dependencies | to_entries[] | "\\(.key): \\(.value)"' package.json -r
\`\`\`

jq is to JSON what grep is to text — an essential daily-use CLI tool! 📊`
  },
  {
    id: 88,
    slug: "windows-cmd-openssl-https-certificates",
    originalChapterId: "dev-ch88-openssl",
    title: "SSL/HTTPS from CMD: `openssl` — Generate Certs & Inspect TLS",
    unit: "Unit 35: Security & Cryptography CLI",
    bookRef: "Security CLI Guide (p. 131-134)",
    icon: "🔒",
    exercise: {
      question: "Which openssl command generates a self-signed SSL certificate for localhost?",
      options: ["openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365", "openssl generate --self-signed", "openssl ssl create localhost", "ssl-keygen localhost"],
      correctAnswer: "openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365",
      hint: "openssl req -x509 creates a self-signed certificate. -newkey generates a new private key."
    },
    commands: [
      { cmd: "openssl version", description: "Shows the installed OpenSSL version.", example: "openssl version -a", notes: "OpenSSL comes pre-installed on Windows via Git Bash. Install via winget." },
      { cmd: "openssl req -x509 -newkey rsa:2048 -keyout localhost-key.pem -out localhost-cert.pem -days 365 -nodes -subj \"/CN=localhost\"", description: "Generates a self-signed SSL certificate for local HTTPS development.", example: "openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes", notes: "-nodes = no passphrase. -days = validity period." },
      { cmd: "openssl s_client -connect nextsem.online:443", description: "Inspects the SSL/TLS certificate of a live website.", example: "openssl s_client -connect api.github.com:443 | openssl x509 -noout -dates", notes: "Shows certificate chain, expiry dates, and cipher suites." }
    ],
    content: `### OpenSSL — HTTPS & Certificates from CLI
Manage SSL certificates, inspect TLS connections, and generate cryptographic keys:

**Local HTTPS Setup for Next.js:**
\`\`\`cmd
REM Generate self-signed cert
openssl req -x509 -newkey rsa:2048 ^
  -keyout localhost-key.pem ^
  -out localhost-cert.pem ^
  -days 365 -nodes ^
  -subj "/CN=localhost"
\`\`\`

**In Next.js dev server:**
\`\`\`javascript
// next.config.js
const https = require('https')
const fs = require('fs')
module.exports = {
  server: {
    https: {
      key: fs.readFileSync('localhost-key.pem'),
      cert: fs.readFileSync('localhost-cert.pem')
    }
  }
}
\`\`\`

**Check Certificate Expiry:**
\`\`\`cmd
openssl s_client -connect your-site.com:443 2>/dev/null | openssl x509 -noout -enddate
\`\`\`

**Generate Random Secret Key:**
\`\`\`cmd
openssl rand -base64 32
\`\`\`

Use this for JWT_SECRET, API keys, and session secrets in your .env! 🔐`
  },
  {
    id: 89,
    slug: "windows-cmd-performance-profiling",
    originalChapterId: "dev-ch89-perf",
    title: "Performance Profiling from CMD: `node --prof`, Lighthouse CLI",
    unit: "Unit 35: Security & Cryptography CLI",
    bookRef: "Performance CLI Guide (p. 135-138)",
    icon: "⚡",
    exercise: {
      question: "Which Lighthouse CLI flag generates a performance report for a URL?",
      options: ["--output html --output-path report.html", "--report html", "--generate report.html", "--perf-report"],
      correctAnswer: "--output html --output-path report.html",
      hint: "Lighthouse CLI uses --output to set format and --output-path for the file name."
    },
    commands: [
      { cmd: "node --prof server.js", description: "Runs Node.js with the V8 profiler enabled to capture performance data.", example: "node --prof --prof-process isolate-*.log > processed.txt", notes: "Creates an isolate-*.log file. Process it with --prof-process." },
      { cmd: "npx lighthouse https://nextsem.online --output html --output-path ./report.html --chrome-flags=\"--headless\"", description: "Runs Google Lighthouse performance audit on nextsem.online and saves HTML report.", example: "npx lighthouse http://localhost:3000 --only-categories=performance", notes: "Measures Performance, Accessibility, SEO, Best Practices scores." },
      { cmd: "node --prof-process isolate-0x12345-v8.log > profile.txt", description: "Processes the V8 profiler log file into human-readable performance data.", example: "node --prof-process isolate-*.log | findstr Heavy", notes: "Look for 'Heavy (non-library) profile' section for bottlenecks." }
    ],
    content: `### Performance Profiling from CLI — Optimize Your App
Find bottlenecks, measure page speed, and optimize Node.js and web app performance:

**Node.js Profiling:**
\`\`\`cmd
REM Record profile
node --prof server.js
REM (do some requests, then Ctrl+C)

REM Process the profile
node --prof-process isolate-*.log > profile.txt
type profile.txt | findstr Heavy
\`\`\`

**Lighthouse Web Performance:**
\`\`\`cmd
npx lighthouse https://nextsem.online ^
  --output html ^
  --output-path ./lighthouse-report.html ^
  --chrome-flags="--headless"
\`\`\`

**Core Web Vitals Scores:**
- 🟢 **LCP** (Largest Contentful Paint) < 2.5s
- 🟢 **FID** (First Input Delay) < 100ms
- 🟢 **CLS** (Cumulative Layout Shift) < 0.1

**Quick Speed Test:**
\`\`\`cmd
curl -s -o /dev/null -w "Time: %{time_total}s\n" https://nextsem.online
\`\`\`

Regular performance auditing = faster app = happier users = better SEO rankings! 📈`
  },
  {
    id: 90,
    slug: "windows-cmd-regex-grep-findstr-advanced",
    originalChapterId: "dev-ch90-regex",
    title: "Advanced Text Search: `findstr` Regex, Multi-File Patterns",
    unit: "Unit 36: Advanced CMD Tools",
    bookRef: "Windows CMD Advanced (p. 139-142)",
    icon: "🔍",
    exercise: {
      question: "Which findstr flag enables case-insensitive searching?",
      options: ["/i", "/c", "/s", "/r"],
      correctAnswer: "/i",
      hint: "'/i' makes findstr case-insensitive. '/r' enables regex. '/s' searches subdirectories."
    },
    commands: [
      { cmd: "findstr /s /i /r \"console\\.log\" src\\*.ts", description: "Recursively searches all .ts files in src for console.log statements (case-insensitive regex).", example: "findstr /s /n \"TODO\" src\\**\\*.tsx", notes: "/s=recursive, /i=case-insensitive, /r=regex, /n=show line numbers." },
      { cmd: "findstr /v \"^#\\|^$\" .env", description: "Prints .env file lines that are NOT comments (#) or empty lines.", example: "findstr /v \"^$\" file.txt", notes: "/v inverts match — shows non-matching lines. ^# = line starts with #." },
      { cmd: "findstr /m \"process\\.env\" src\\*.ts", description: "Finds all .ts files that reference process.env — /m prints only filenames.", example: "findstr /m \"import.*firebase\" src\\**\\*.tsx", notes: "/m = print filenames only, not matched lines." }
    ],
    content: `### Advanced findstr — Regex Search Across Your Codebase
Search through files faster than any GUI with powerful command-line patterns:

**Essential findstr Flags:**
| Flag | Meaning |
|------|---------|
| \`/i\` | Case-insensitive |
| \`/r\` | Regular expression |
| \`/s\` | Recursive (subdirectories) |
| \`/n\` | Show line numbers |
| \`/m\` | Print filenames only |
| \`/v\` | Invert match |
| \`/c:"text"\` | Literal string |

**Developer Use Cases:**
\`\`\`cmd
REM Find all TODO comments in TypeScript files
findstr /s /n /i "TODO" src\\*.ts src\\*.tsx

REM Find files that import a specific package
findstr /s /m /r "import.*'react'" src\\*.tsx

REM Find hardcoded API keys (security audit)
findstr /s /r "api[_-]key\\s*=\\s*['\\\"]" src\\*

REM Find all console.log statements to remove before production
findstr /s /n "console.log" src\\*.ts src\\*.tsx
\`\`\`

Master findstr and you'll never need grep to search your Windows codebase! 🔍`
  },
  {
    id: 91,
    slug: "windows-cmd-file-comparison-fc-diff",
    originalChapterId: "dev-ch91-diff",
    title: "File Comparison from CMD: `fc`, `git diff`, `comp`",
    unit: "Unit 36: Advanced CMD Tools",
    bookRef: "Windows CMD Advanced (p. 143-145)",
    icon: "📊",
    exercise: {
      question: "Which CMD command compares two text files line by line?",
      options: ["fc /n file1 file2", "diff file1 file2", "compare file1 file2", "cmp file1 file2"],
      correctAnswer: "fc /n file1 file2",
      hint: "'fc' (File Compare) compares files. '/n' shows line numbers in differences."
    },
    commands: [
      { cmd: "fc /n original.js updated.js", description: "Compares two JavaScript files line by line and shows differences with line numbers.", example: "fc package.json package.json.bak", notes: "/n shows line numbers. fc shows lines that differ between files." },
      { cmd: "git diff HEAD~1 HEAD -- src/components/Button.tsx", description: "Shows changes made to Button.tsx between the last commit and the one before.", example: "git diff main..feature/auth -- src/api/", notes: "git diff is the best comparison tool for versioned code." },
      { cmd: "git diff --stat HEAD~5 HEAD", description: "Shows a summary of files changed and lines added/removed in the last 5 commits.", example: "git diff --name-only HEAD~1 HEAD", notes: "--stat shows file-level summary. --name-only shows only filenames." }
    ],
    content: `### File Comparison from CMD — Track What Changed
Compare files, spot differences, and understand code changes from the terminal:

**fc (File Compare) Commands:**
\`\`\`cmd
fc file1.txt file2.txt          # Basic comparison
fc /n file1.js file2.js         # Show line numbers
fc /b image1.png image2.png     # Binary comparison
\`\`\`

**Git Diff (Best for Code):**
\`\`\`cmd
git diff                         # Unstaged changes
git diff --staged                # Staged (git add'd) changes
git diff HEAD~1                  # vs last commit
git diff main..feature/auth      # Branch comparison
git diff --stat HEAD~10 HEAD     # What changed in last 10 commits
git diff --word-diff             # Word-level diff (cleaner output)
\`\`\`

**Generate a Patch File:**
\`\`\`cmd
git diff > changes.patch
git apply changes.patch
\`\`\`

Share code changes as a patch file — useful when you can't push to a shared repo! 🎯`
  },
  {
    id: 92,
    slug: "windows-cmd-tar-zip-compression",
    originalChapterId: "dev-ch92-compress",
    title: "File Compression from CMD: `tar`, `Compress-Archive` (PowerShell)",
    unit: "Unit 37: File Operations & Archives",
    bookRef: "Windows CMD Advanced (p. 146-148)",
    icon: "📦",
    exercise: {
      question: "Which tar command extracts a .tar.gz archive in Windows CMD?",
      options: ["tar -xzf archive.tar.gz", "tar extract archive.tar.gz", "unzip archive.tar.gz", "tar -d archive.tar.gz"],
      correctAnswer: "tar -xzf archive.tar.gz",
      hint: "tar -x = extract, -z = gzip, -f = file. Windows 10+ includes tar.exe."
    },
    commands: [
      { cmd: "tar -czf myapp-backup.tar.gz src package.json tsconfig.json", description: "Creates a compressed .tar.gz archive of specified files and folders.", example: "tar -czf dist-v1.0.tar.gz dist", notes: "-c=create, -z=gzip compress, -f=filename. Excludes node_modules." },
      { cmd: "tar -xzf myapp-backup.tar.gz", description: "Extracts all files from a .tar.gz archive in current directory.", example: "tar -xzf release.tar.gz -C C:\\deployments\\", notes: "-x=extract, -z=gunzip, -f=file. -C specifies extraction destination." },
      { cmd: "Compress-Archive -Path src,package.json -DestinationPath myapp.zip", description: "Creates a .zip archive using PowerShell Compress-Archive cmdlet.", example: "Expand-Archive myapp.zip -DestinationPath C:\\extracted", notes: "PowerShell alternative to tar. Expand-Archive for extraction." }
    ],
    content: `### File Compression from CMD — Package & Deploy
Create archives, compress build artifacts, and extract packages from the terminal:

**tar (Unix-style, Windows 10+):**
\`\`\`cmd
REM Create archive (excluding node_modules)
tar -czf backup.tar.gz src public package.json tsconfig.json

REM Extract archive
tar -xzf backup.tar.gz

REM List archive contents without extracting
tar -tzf backup.tar.gz

REM Extract to specific directory
tar -xzf release.tar.gz -C C:\\deployments\\v2
\`\`\`

**PowerShell (Zip format):**
\`\`\`powershell
# Create zip
Compress-Archive -Path dist -DestinationPath dist-v1.0.zip

# Extract zip
Expand-Archive dist-v1.0.zip -DestinationPath C:\\extracted

# Add to existing zip
Compress-Archive -Path newfile.txt -DestinationPath existing.zip -Update
\`\`\`

**Deploy via Archive:**
\`\`\`cmd
npm run build
tar -czf release.tar.gz dist
scp release.tar.gz user@server:/var/www/
ssh user@server "tar -xzf /var/www/release.tar.gz -C /var/www/html"
\`\`\`
Deploy your built app to a server in seconds! 🚀`
  },
  {
    id: 93,
    slug: "windows-cmd-batch-advanced-functions",
    originalChapterId: "cmd-ch93-batchfunc",
    title: "Advanced Batch Scripting: Functions, Subroutines & Error Codes",
    unit: "Unit 37: File Operations & Archives",
    bookRef: "Windows CMD Scripting (p. 149-152)",
    icon: "📜",
    exercise: {
      question: "How do you define a callable subroutine in a Windows batch file?",
      options: [":subroutine_name", "function subroutine_name", "def subroutine_name", "sub:name"],
      correctAnswer: ":subroutine_name",
      hint: "In batch scripts, labels starting with ':' define subroutines/functions."
    },
    commands: [
      { cmd: "call :deploy_prod\ngoto :eof\n:deploy_prod\n  echo Deploying...\n  npm run build\n  exit /b 0", description: "Defines and calls a 'deploy_prod' subroutine in a batch script.", example: "call :check_node %REQUIRED_NODE_VERSION%", notes: "':EOF' is a special label marking end of file or function." },
      { cmd: "setlocal enabledelayedexpansion\nset count=0\nfor %%f in (*.ts) do set /a count+=1\necho Found !count! TypeScript files", description: "Uses delayed expansion to count TypeScript files with a for loop.", example: "setlocal enabledelayedexpansion", notes: "EnableDelayedExpansion needed to use !VAR! inside loops/blocks." },
      { cmd: "exit /b %ERRORLEVEL%", description: "Exits a subroutine returning the current error level to the caller.", example: "exit /b 0", notes: "0 = success, 1+ = error. Callers check errorlevel after call." }
    ],
    content: `### Advanced Batch Scripting — Professional Automation Scripts
Write modular, reusable batch scripts with functions and proper error handling:

**Complete Deployment Script:**
\`\`\`cmd
@echo off
setlocal

set APP_NAME=nextsem
set BUILD_DIR=out

call :check_prerequisites
if errorlevel 1 goto :error

call :run_tests
if errorlevel 1 goto :error

call :build_app
if errorlevel 1 goto :error

call :deploy_to_firebase
if errorlevel 1 goto :error

echo ✅ Deployment complete!
goto :eof

:check_prerequisites
  echo Checking prerequisites...
  where npm >nul 2>&1 || (echo npm not found! & exit /b 1)
  where git >nul 2>&1 || (echo git not found! & exit /b 1)
  exit /b 0

:run_tests
  echo Running tests...
  npm test
  exit /b %errorlevel%

:build_app
  echo Building app...
  npm run build
  exit /b %errorlevel%

:deploy_to_firebase
  echo Deploying...
  npx firebase deploy --only hosting
  exit /b %errorlevel%

:error
  echo ❌ Deployment failed at step: %errorlevel%
  exit /b 1
\`\`\`

This is production-quality batch scripting — reusable functions, clean error handling! 💪`
  },
  {
    id: 94,
    slug: "windows-cmd-wsl-linux-on-windows",
    originalChapterId: "dev-ch94-wsl",
    title: "WSL (Windows Subsystem for Linux): Linux Commands on Windows",
    unit: "Unit 38: Cross-Platform Development",
    bookRef: "Cross-Platform CLI Guide (p. 153-156)",
    icon: "🐧",
    exercise: {
      question: "Which command installs Ubuntu in WSL on Windows 11?",
      options: ["wsl --install -d Ubuntu", "winget install Ubuntu", "wsl install linux", "wsl -d Ubuntu --add"],
      correctAnswer: "wsl --install -d Ubuntu",
      hint: "'wsl --install -d Ubuntu' installs the Ubuntu Linux distribution via WSL 2."
    },
    commands: [
      { cmd: "wsl --install -d Ubuntu", description: "Installs Ubuntu Linux distribution via Windows Subsystem for Linux.", example: "wsl --list --online", notes: "WSL 2 uses real Linux kernel. Requires Windows 10 version 2004+." },
      { cmd: "wsl", description: "Opens WSL shell (default Linux distribution) from Windows CMD.", example: "wsl -d Ubuntu", notes: "You're now in Linux! Run ls, grep, apt, etc. Type 'exit' to return." },
      { cmd: "wsl --shutdown", description: "Shuts down all running WSL instances and the WSL 2 VM.", example: "wsl --status", notes: "Use when WSL is consuming too much memory." }
    ],
    content: `### WSL — Full Linux on Windows Without a VM
WSL 2 gives you a real Linux kernel inside Windows — run Linux tools natively:

**Install WSL 2:**
\`\`\`cmd
wsl --install -d Ubuntu
REM Restart Windows
\`\`\`

**What You Can Do in WSL:**
\`\`\`bash
# In WSL (Ubuntu)
sudo apt update && sudo apt upgrade
sudo apt install nodejs npm git

# Run Linux commands
ls -la
grep -r "TODO" ~/projects
chmod 600 ~/.ssh/id_ed25519

# Access Windows files from Linux
cd /mnt/c/Users/YourName/projects
ls    # See your Windows files!
\`\`\`

**Access WSL from Windows CMD:**
\`\`\`cmd
wsl ls /home           # Run Linux command from CMD
wsl npm run build      # Run npm build in WSL
wsl -d Ubuntu bash     # Open Ubuntu bash shell
\`\`\`

**VS Code + WSL Integration:**
\`\`\`cmd
code .
REM VS Code auto-detects WSL and connects to it!
\`\`\`

WSL = best of both worlds — Windows GUI + Linux dev environment! 🐧`
  },
  {
    id: 95,
    slug: "windows-cmd-terminal-multiplexer-windows-terminal",
    originalChapterId: "dev-ch95-wt",
    title: "Windows Terminal & tmux: Multi-Pane Development Environment",
    unit: "Unit 38: Cross-Platform Development",
    bookRef: "Cross-Platform CLI Guide (p. 157-160)",
    icon: "🖥️",
    exercise: {
      question: "Which keyboard shortcut opens a new tab in Windows Terminal?",
      options: ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + N", "Win + Tab"],
      correctAnswer: "Ctrl + Shift + T",
      hint: "Windows Terminal uses Ctrl + Shift + T to open a new tab, similar to browser tabs."
    },
    commands: [
      { cmd: "winget install Microsoft.WindowsTerminal", description: "Installs Windows Terminal — the modern tabbed terminal for Windows.", example: "wt -p \"PowerShell\" --title \"Build\"", notes: "Free, open-source. Replaces the classic CMD window." },
      { cmd: "wt -p \"Command Prompt\" ; split-pane -p \"PowerShell\"", description: "Opens Windows Terminal with CMD in left pane and PowerShell in right pane.", example: "wt new-tab -p \"Ubuntu\" ; split-pane -p \"Command Prompt\"", notes: "Split panes let you run multiple terminals side by side." },
      { cmd: "wt --maximized -p \"PowerShell\" --title \"Dev Server\" cmd /k \"npm run dev\"", description: "Opens a maximized Windows Terminal running npm dev server in a named PowerShell tab.", example: "wt -p Ubuntu -d C:\\projects bash", notes: "'-d' sets starting directory. '--title' names the tab." }
    ],
    content: `### Windows Terminal — The Modern Developer Terminal
Replace the old CMD window with Windows Terminal — tabs, panes, GPU rendering, themes:

**Install & Configure:**
\`\`\`cmd
winget install Microsoft.WindowsTerminal
\`\`\`

**Multi-Pane Dev Workflow:**
\`\`\`cmd
REM Open 3-pane dev environment:
wt --maximized ^
  -p "PowerShell" --title "Dev Server" cmd /k "npm run dev" ^
  ; split-pane -p "PowerShell" --title "Git" ^
  ; split-pane -H -p "Ubuntu" --title "Linux Tools"
\`\`\`

**Keyboard Shortcuts:**
| Shortcut | Action |
|----------|--------|
| \`Ctrl+Shift+T\` | New tab |
| \`Ctrl+Shift+W\` | Close tab |
| \`Alt+Shift+D\` | Split pane |
| \`Alt+Arrow\` | Switch pane |
| \`Ctrl+,\` | Open settings |

**settings.json Themes:**
\`\`\`json
{
  "colorScheme": "One Half Dark",
  "fontFace": "Cascadia Code PL",
  "fontSize": 13,
  "useAcrylic": true,
  "acrylicOpacity": 0.8
}
\`\`\`

Windows Terminal transforms CMD into a professional development environment! 🚀`
  },
  {
    id: 96,
    slug: "windows-cmd-choco-scoop-package-managers",
    originalChapterId: "dev-ch96-pkgmgr",
    title: "Alternative Package Managers: Chocolatey & Scoop",
    unit: "Unit 39: Developer Environment Setup",
    bookRef: "Developer Tools CLI (p. 161-164)",
    icon: "🍫",
    exercise: {
      question: "Which Chocolatey command installs a package silently without prompts?",
      options: ["choco install nodejs --yes", "choco install nodejs", "choco add nodejs", "choco get nodejs --silent"],
      correctAnswer: "choco install nodejs --yes",
      hint: "'--yes' (or '-y') skips confirmation prompts in Chocolatey."
    },
    commands: [
      { cmd: "Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))", description: "Installs Chocolatey package manager via PowerShell.", example: "choco --version", notes: "Run in PowerShell as Administrator. Chocolatey = apt-get for Windows." },
      { cmd: "choco install nodejs-lts git vscode -y", description: "Installs Node.js LTS, Git, and VS Code via Chocolatey in one command.", example: "choco install postman docker-desktop -y", notes: "Mass install developer tools without downloading installers." },
      { cmd: "scoop install nodejs git curl jq", description: "Installs multiple developer tools via Scoop (no admin rights needed).", example: "scoop bucket add extras && scoop install vscode", notes: "Scoop installs to user directory — no admin privileges required." }
    ],
    content: `### Chocolatey & Scoop — Community Package Managers for Windows
Two popular alternatives to winget for installing developer tools:

**Chocolatey (choco) — 10,000+ Packages:**
\`\`\`powershell
# Install (run as Admin)
Set-ExecutionPolicy Bypass -Scope Process -Force
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Usage
choco install nodejs-lts git vscode -y
choco upgrade all -y
choco list --local-only
\`\`\`

**Scoop — No Admin Required:**
\`\`\`powershell
# Install
irm get.scoop.sh | iex

# Usage (user directory, no admin needed)
scoop install nodejs git curl jq
scoop add bucket extras
scoop install extras/vscode
scoop update *
\`\`\`

**Comparison:**
| Feature | winget | choco | scoop |
|---------|--------|-------|-------|
| Admin required | Sometimes | Yes | No |
| Package count | Growing | 10k+ | 1k+ |
| Dev tool focus | General | General | Dev-first |
| Auto-update | Limited | Yes | Yes |

Use all three! Different packages are available in each ecosystem 🎯`
  },
  {
    id: 97,
    slug: "windows-cmd-dotnet-cli-basics",
    originalChapterId: "dev-ch97-dotnet",
    title: ".NET CLI Basics: `dotnet new`, `dotnet run`, `dotnet build`",
    unit: "Unit 39: Developer Environment Setup",
    bookRef: "Developer Tools CLI (p. 165-168)",
    icon: "💜",
    exercise: {
      question: "Which dotnet command creates a new Web API project template?",
      options: ["dotnet new webapi", "dotnet create web-api", "dotnet init --api", "dotnet new --template webapi"],
      correctAnswer: "dotnet new webapi",
      hint: "'dotnet new webapi' scaffolds a new ASP.NET Core Web API project."
    },
    commands: [
      { cmd: "dotnet new webapi -n MyApi --use-controllers", description: "Creates a new ASP.NET Core Web API project named 'MyApi'.", example: "dotnet new mvc -n MyWebApp", notes: "dotnet new lists all templates: console, webapi, mvc, blazorwasm, etc." },
      { cmd: "dotnet run", description: "Builds and runs the .NET application in the current directory.", example: "dotnet run --project ./MyApi/MyApi.csproj", notes: "Listens on http://localhost:5000 by default." },
      { cmd: "dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL", description: "Adds PostgreSQL Entity Framework Core package to the .NET project.", example: "dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer", notes: "Like 'npm install' for .NET packages from NuGet." }
    ],
    content: `### .NET CLI — Build C# & ASP.NET Apps from Terminal
.NET CLI lets you create, build, test, and publish .NET applications without Visual Studio:

**Create & Run a Web API:**
\`\`\`cmd
dotnet new webapi -n NexerAPI --use-controllers
cd NexerAPI
dotnet run
\`\`\`

**Essential dotnet Commands:**
\`\`\`cmd
dotnet new list                     # List all project templates
dotnet new webapi -n MyApi          # Create Web API
dotnet new console -n MyCLI        # Create console app
dotnet run                          # Build & run
dotnet build                        # Build only
dotnet test                         # Run tests
dotnet publish -c Release           # Publish for deployment
dotnet add package PackageName      # Add NuGet package
dotnet restore                      # Restore packages
\`\`\`

**Full Stack with .NET + React:**
\`\`\`cmd
dotnet new react -n FullStackApp
cd FullStackApp
dotnet run
\`\`\`

Opens both the .NET backend AND React frontend together! 🚀

.NET is used by Microsoft, Stack Overflow, and thousands of enterprise apps worldwide! 💜`
  },
  {
    id: 98,
    slug: "windows-cmd-python-pip-virtualenv",
    originalChapterId: "dev-ch98-python",
    title: "Python CLI: `pip`, Virtual Environments, Scripts from CMD",
    unit: "Unit 40: Multi-Language CLI Mastery",
    bookRef: "Developer Tools CLI (p. 169-172)",
    icon: "🐍",
    exercise: {
      question: "Which command creates a Python virtual environment named 'venv'?",
      options: ["python -m venv venv", "python --venv venv", "pip create venv", "virtualenv create venv"],
      correctAnswer: "python -m venv venv",
      hint: "'python -m venv foldername' creates an isolated Python virtual environment."
    },
    commands: [
      { cmd: "python -m venv venv && venv\\Scripts\\activate", description: "Creates a Python virtual environment and activates it in Windows CMD.", example: "python -m venv .venv && .venv\\Scripts\\activate", notes: "Virtual env isolates Python packages from the system install." },
      { cmd: "pip install flask requests pandas --quiet", description: "Installs Flask web framework, requests HTTP library, and pandas quietly.", example: "pip install -r requirements.txt", notes: "Use requirements.txt to share dependency lists with your team." },
      { cmd: "pip freeze > requirements.txt", description: "Exports all installed packages and versions to requirements.txt file.", example: "pip install -r requirements.txt", notes: "requirements.txt is Python's equivalent of package.json." }
    ],
    content: `### Python CLI — Automate Everything with Python Scripts
Python + CMD = powerful automation, data processing, and AI scripts:

**Setup Python Project:**
\`\`\`cmd
python --version              # Check Python
python -m venv venv           # Create virtual env
venv\\Scripts\\activate         # Activate (Windows)
pip install requests flask    # Install packages
pip freeze > requirements.txt # Lock dependencies
\`\`\`

**Run Python Scripts:**
\`\`\`cmd
python script.py              # Run script
python -m flask run           # Run Flask web app
python -c "print('Hello!')"   # Inline code
\`\`\`

**Useful Python CLI Automations:**
\`\`\`python
# rename_files.py — Batch rename JS files to TS
import os, pathlib

for f in pathlib.Path('.').glob('src/**/*.js'):
    f.rename(f.with_suffix('.ts'))
    print(f'Renamed: {f}')
\`\`\`

\`\`\`cmd
python rename_files.py
\`\`\`

Python scripts + CMD = unbeatable automation toolkit for any developer! 🐍`
  },
  {
    id: 99,
    slug: "windows-cmd-developer-productivity-shortcuts",
    originalChapterId: "dev-ch99-productivity",
    title: "Developer Productivity: CMD Aliases, History & Keyboard Shortcuts",
    unit: "Unit 40: Multi-Language CLI Mastery",
    bookRef: "Windows CMD Productivity (p. 173-176)",
    icon: "⌨️",
    exercise: {
      question: "Which key cycles through previously typed commands in Windows CMD?",
      options: ["Up Arrow (↑)", "Ctrl+R", "F5", "Tab"],
      correctAnswer: "Up Arrow (↑)",
      hint: "Up Arrow ↑ navigates backward through your command history in CMD."
    },
    commands: [
      { cmd: "doskey gs=git status\ndoskey gp=git push\ndoskey gco=git checkout $*", description: "Creates CMD session aliases for common git commands.", example: "doskey np=npm run dev", notes: "doskey aliases only last for current CMD session. Add to AUTOEXEC via registry for permanent." },
      { cmd: "F7", description: "Opens an interactive history popup window showing all previously typed commands.", example: "Press F7 in CMD", notes: "Select any previous command with arrow keys + Enter to re-run." },
      { cmd: "doskey /history", description: "Prints all commands typed in the current CMD session.", example: "doskey /history > session.log", notes: "Save your session history to a file for reference." }
    ],
    content: `### CMD Productivity Shortcuts — Work Faster Every Day
Master these shortcuts and aliases to dramatically speed up your daily terminal workflow:

**Essential CMD Keyboard Shortcuts:**
| Shortcut | Action |
|----------|--------|
| ↑ / ↓ | Navigate command history |
| **F7** | Visual history picker popup |
| **Tab** | Autocomplete file/folder names |
| **Ctrl+C** | Cancel running command |
| **Ctrl+V** | Paste in CMD |
| **Ctrl+A** | Select all text |
| **Ctrl+Home/End** | Scroll to top/bottom |
| **F3** | Repeat last command |
| **Esc** | Clear current line |

**PowerShell Productivity:**
\`\`\`powershell
# Ctrl+R = reverse search history (like bash)
# Tab = autocomplete with cycling through options
# Ctrl+Space = IntelliSense completion (with PSReadLine)
\`\`\`

**Permanent Aliases (Windows Registry):**
\`\`\`cmd
reg add "HKCU\Software\Microsoft\Command Processor" /v AutoRun /t REG_EXPAND_SZ /d "doskey gs=git status$Tdoskey gp=git push$Tdoskey np=npm run dev" /f
\`\`\`

**Best CMD Workflow Tips:**
1. Use **Windows Terminal** (not classic CMD box)
2. Install **posh-git** for PowerShell git branch in prompt  
3. Create a **startup.bat** that sets all aliases automatically
4. Use **Tab** completion obsessively — save 1000s of keystrokes

Small productivity improvements compound into massive time savings! ⌨️`
  },
  {
    id: 100,
    slug: "windows-cmd-full-stack-developer-mastery-review",
    originalChapterId: "dev-ch100-mastery",
    title: "Full Stack Developer CLI Mastery — Complete Windows CMD Review",
    unit: "Unit 40: Multi-Language CLI Mastery",
    bookRef: "Full Stack Windows CLI (p. 177-180)",
    icon: "🏆",
    exercise: {
      question: "Which command sequence correctly sets up a new full-stack project from scratch in one pipeline?",
      options: [
        "mkdir myapp && cd myapp && git init && npm create vite@latest . -- --template react-ts && npm install && code .",
        "create myapp react-ts && git init && npm install",
        "npx create-app myapp --full-stack && code .",
        "git init && npm new react && code ."
      ],
      correctAnswer: "mkdir myapp && cd myapp && git init && npm create vite@latest . -- --template react-ts && npm install && code .",
      hint: "Chain mkdir, cd, git init, scaffold, install, and open VS Code in one powerful command pipeline!"
    },
    commands: [
      { cmd: "mkdir myapp && cd myapp && git init && npm create vite@latest . -- --template react-ts && npm install && code .", description: "Creates a full-stack project directory, initializes git, scaffolds Vite React TypeScript, installs deps, and opens VS Code.", example: "mkdir api && cd api && git init && npm init -y && npm install express typescript && code .", notes: "The complete developer setup pipeline in one command chain!" },
      { cmd: "git add . && git commit -m 'feat: initial project scaffold' && gh repo create myapp --public --source=. --push", description: "Stages all files, creates initial commit, creates GitHub repo, and pushes code.", example: "git add . && git commit -m 'initial commit' && git push -u origin main", notes: "Requires GitHub CLI (gh) authenticated." },
      { cmd: "npm test && npm run build && npx firebase deploy --only hosting", description: "Runs tests, builds production app, and deploys to Firebase — the complete deploy pipeline.", example: "npm audit && npm test && npm run build && npx vercel --prod", notes: "Full production deployment command chain — test before deploy!" }
    ],
    content: `### 🏆 Full Stack Developer CLI Mastery — You Made It!
Congratulations! You've completed **100 lessons** covering the entire Windows CMD & Developer CLI curriculum:

**What You've Mastered:**
| Phase | Topic | Lessons |
|-------|-------|---------|
| 🪟 Phase 1 | Windows CMD Foundations | 1-10 |
| 🔧 Phase 2 | CMD Advanced Techniques | 11-20 |
| ⚡ Phase 3 | System Admin & Networking | 21-50 |
| 🔷 Phase 4 | PowerShell for Developers | 51-60 |
| 🛠️ Phase 5 | Developer Tools (TS, ESLint) | 61-70 |
| 🐙 Phase 6 | Git Advanced Workflows | 67-74 |
| 🐳 Phase 7 | Docker & Containerization | 70-71 |
| ☁️ Phase 8 | Cloud CLI (AWS, GCP, Firebase) | 78-81 |
| 🗄️ Phase 9 | Databases (Prisma, Redis, MongoDB) | 83-85 |
| 🔒 Phase 10 | Security, Testing & Profiling | 86-92 |
| 🏁 Phase 11 | Multi-Language & Environment | 94-99 |

**Your Complete Developer CLI Arsenal:**
\`\`\`cmd
REM Full project setup in one pipeline:
mkdir myapp && cd myapp
git init
npm create vite@latest . -- --template react-ts
npm install
echo .env >> .gitignore
git add . && git commit -m "feat: initial scaffold"
gh repo create myapp --public --source=. --push
code .
echo "🚀 You are now a Full Stack CLI Developer!"
\`\`\`

**Next Steps — Continue Your Journey:**
- 🎯 Build 10 real projects using these CLI skills
- 📚 Start the **CSS3 Basics** course next
- 🚀 Set up your own CI/CD pipeline with GitHub Actions
- 🐳 Dockerize one of your Node.js projects

**Remember:** Every great developer started with \`cd\` and \`mkdir\`. You now command the terminal with confidence! 

*"The command line is not scary — it's your superpower."* — Er. Manoj Kumar 💪`
  }
];

