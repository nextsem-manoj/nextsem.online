export interface CliLesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  desc: string;
  icon: string;
}

export const cliLessons: CliLesson[] = [
  {
    id: 1,
    slug: "p0-2-terminal",
    title: "CLI Introduction & Desktop Navigation",
    unit: "Unit 1: Command Line Fundamentals",
    desc: "Understand CLI vs GUI, the history of MS-DOS, and how the Command Interpreter works.",
    icon: "💻"
  },
  {
    id: 2,
    slug: "cli-ch1-basics",
    title: "Command Line Basics",
    unit: "Unit 1: Command Line Fundamentals",
    desc: "Learn how to launch Command Prompt, use ver, help, cls, and customize terminal window properties.",
    icon: "🖥️"
  },
  {
    id: 3,
    slug: "cli-ch2-drives",
    title: "Drive Letters and the File System",
    unit: "Unit 1: Command Line Fundamentals",
    desc: "Understand physical/logical drives, file naming rules, absolute vs relative paths, and drive switching.",
    icon: "💾"
  },
  {
    id: 4,
    slug: "cli-ch3-prompt",
    title: "Understanding the Prompt",
    unit: "Unit 1: Command Line Fundamentals",
    desc: "Deconstruct the cmd.exe prompt structure and use parameters to customize the prompt text.",
    icon: "⚡"
  },
  {
    id: 5,
    slug: "cli-ch4-directories",
    title: "Working with Directories",
    unit: "Unit 2: File System & Directories",
    desc: "Master directory commands: listing with dir, creating with mkdir, and navigating with cd.",
    icon: "📂"
  },
  {
    id: 6,
    slug: "cli-ch5-attributes",
    title: "File Attributes and NTFS Permissions",
    unit: "Unit 2: File System & Directories",
    desc: "Modify file attributes (read-only, hidden) using attrib and configure basic file permissions.",
    icon: "🔒"
  },
  {
    id: 7,
    slug: "cli-ch7-operations",
    title: "Copying, Moving, Renaming, and Deleting Files",
    unit: "Unit 2: File System & Directories",
    desc: "Execute file management commands safely: copy, xcopy, move, ren, and del.",
    icon: "📑"
  },
  {
    id: 8,
    slug: "cli-ch6-redirection",
    title: "Wildcards and Redirection",
    unit: "Unit 3: I/O Redirection & Disk Management",
    desc: "Use wildcards (*, ?) and redirect command input/output using symbols (>, >>, <, |).",
    icon: "🔍"
  },
  {
    id: 9,
    slug: "cli-ch9-disk",
    title: "Disk Management",
    unit: "Unit 3: I/O Redirection & Disk Management",
    desc: "Understand file systems (FAT, NTFS), defragmentation, error checking with chkdsk, and diskpart.",
    icon: "💿"
  },
  {
    id: 10,
    slug: "cli-ch10-shares",
    title: "Connecting to File Shares",
    unit: "Unit 3: I/O Redirection & Disk Management",
    desc: "Configure network sharing, map network drives, and utilize the net use command.",
    icon: "🔗"
  },
  {
    id: 11,
    slug: "cli-ch11-users",
    title: "Managing User Accounts",
    unit: "Unit 4: User Accounts & Networking",
    desc: "Understand Windows security hierarchy, create/delete users, and modify group memberships.",
    icon: "👥"
  },
  {
    id: 12,
    slug: "cli-ch8-networking",
    title: "Networking",
    unit: "Unit 4: User Accounts & Networking",
    desc: "Master network diagnostic tools: ipconfig, ping, tracert, nslookup, and netstat.",
    icon: "🌐"
  },
  {
    id: 13,
    slug: "cli-ch12-remote",
    title: "Remote Access",
    unit: "Unit 4: User Accounts & Networking",
    desc: "Understand Telnet, SSH, Remote Desktop Protocol (RDP), and remote management principles.",
    icon: "📶"
  },
  {
    id: 14,
    slug: "cli-ch13-batch",
    title: "Batch Files",
    unit: "Unit 5: Automation & Task Scheduling",
    desc: "Write batch scripts to automate command execution using echo, pause, variables, and loops.",
    icon: "📄"
  },
  {
    id: 15,
    slug: "cli-ch14-tasks",
    title: "Task Management",
    unit: "Unit 5: Automation & Task Scheduling",
    desc: "Monitor system performance with tasklist, end processes with taskkill, and schedule with schtasks.",
    icon: "⚙️"
  }
];
