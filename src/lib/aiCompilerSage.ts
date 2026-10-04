/**
 * Nextsem Academy — AI Compiler Sage Engine (Milestone 3.1)
 * Real-time syntax corrections, error explanations, and intelligent terminal autocomplete.
 */

export interface SageDiagnosis {
  isValid: boolean;
  severity: "success" | "warning" | "error" | "info";
  category: "syntax" | "platform_mismatch" | "typo" | "missing_argument" | "optimal_practice" | "valid";
  rawInput: string;
  suggestedCmd: string;
  explanation: string;
  windowsNote?: string;
  quickFixAvailable: boolean;
}

export interface CommandAutocomplete {
  prefix: string;
  command: string;
  description: string;
  syntax: string;
}

// Common Developer Command Knowledge Base
const COMMAND_DATABASE: CommandAutocomplete[] = [
  { prefix: "mk", command: "mkdir", description: "Create a new directory / folder", syntax: "mkdir <folder-name>" },
  { prefix: "cd", command: "cd", description: "Change directory / navigate into folders", syntax: "cd <path>" },
  { prefix: "di", command: "dir", description: "List files and folders in active directory", syntax: "dir" },
  { prefix: "cl", command: "cls", description: "Clear the terminal screen buffer", syntax: "cls" },
  { prefix: "co", command: "code .", description: "Open current folder in Visual Studio Code", syntax: "code ." },
  { prefix: "ty", command: "type", description: "Display contents of a text file", syntax: "type <file-name>" },
  { prefix: "ec", command: "echo", description: "Print text or redirect content to file", syntax: "echo <text>" },
  { prefix: "gi", command: "git init", description: "Initialize a new Git version control repository", syntax: "git init" },
  { prefix: "gs", command: "git status", description: "Show repository status and staged files", syntax: "git status" },
  { prefix: "ga", command: "git add .", description: "Stage all modified files for commit", syntax: "git add ." },
  { prefix: "gc", command: 'git commit -m "update"', description: "Commit staged snapshot with message", syntax: 'git commit -m "<msg>"' },
  { prefix: "np", command: "npm install", description: "Install project dependencies from package.json", syntax: "npm install" },
  { prefix: "nr", command: "npm run dev", description: "Start local development server", syntax: "npm run dev" },
  { prefix: "no", command: "node -v", description: "Check installed Node.js runtime version", syntax: "node -v" },
  { prefix: "ex", command: "exit", description: "Close Command Prompt terminal window", syntax: "exit" },
];

/**
 * Intelligent diagnostic function: analyzes developer command and provides real-time AI Sage corrections.
 */
export function diagnoseCommand(input: string, expectedCmd?: string): SageDiagnosis {
  const trimmed = input.trim();
  const low = trimmed.toLowerCase();

  if (!trimmed) {
    return {
      isValid: false,
      severity: "info",
      category: "missing_argument",
      rawInput: input,
      suggestedCmd: expectedCmd || "dir",
      explanation: "Terminal is idle. Enter a 🪟 Windows 11 CMD or development command.",
      quickFixAvailable: false,
    };
  }

  // 1. Direct match with expected command (if provided)
  if (expectedCmd && low === expectedCmd.toLowerCase().trim()) {
    return {
      isValid: true,
      severity: "success",
      category: "valid",
      rawInput: trimmed,
      suggestedCmd: trimmed,
      explanation: `Perfect! Command '${trimmed}' matches the current target objective.`,
      quickFixAvailable: false,
    };
  }

  // 2. Linux vs Windows Platform Mismatches
  if (low === "ls" || low.startsWith("ls ")) {
    return {
      isValid: false,
      severity: "warning",
      category: "platform_mismatch",
      rawInput: trimmed,
      suggestedCmd: "dir",
      explanation: "You entered 'ls' (macOS / Linux bash command). In 🪟 Windows 11 Command Prompt, use 'dir' to list directory contents.",
      windowsNote: "🪟 Windows Command Prompt uses 'dir'. In PowerShell, 'ls' is an alias for Get-ChildItem, but standard CMD requires 'dir'.",
      quickFixAvailable: true,
    };
  }

  if (low === "clear") {
    return {
      isValid: false,
      severity: "warning",
      category: "platform_mismatch",
      rawInput: trimmed,
      suggestedCmd: "cls",
      explanation: "You typed 'clear' (UNIX/Linux command). In 🪟 Windows 11 Command Prompt, screen clearing is executed with 'cls'.",
      windowsNote: "Running 'cls' clears all previous scroll lines in your Command Prompt window.",
      quickFixAvailable: true,
    };
  }

  if (low === "pwd") {
    return {
      isValid: false,
      severity: "warning",
      category: "platform_mismatch",
      rawInput: trimmed,
      suggestedCmd: "cd",
      explanation: "You typed 'pwd' (Print Working Directory in Linux). In 🪟 Windows 11 CMD, typing 'cd' without arguments prints your current folder path.",
      windowsNote: "Running bare 'cd' in Windows outputs the current drive and directory path.",
      quickFixAvailable: true,
    };
  }

  if (low.startsWith("cat ")) {
    const file = trimmed.slice(4).trim();
    return {
      isValid: false,
      severity: "warning",
      category: "platform_mismatch",
      rawInput: trimmed,
      suggestedCmd: `type ${file}`,
      explanation: `You entered 'cat' (Linux). In 🪟 Windows 11 Command Prompt, inspect text file contents using 'type ${file}'.`,
      windowsNote: "Command Prompt's 'type' streams raw file text directly to standard output.",
      quickFixAvailable: true,
    };
  }

  if (low.startsWith("rm -rf ") || low.startsWith("rm ")) {
    const target = trimmed.replace(/^rm\s+(-rf\s+)?/i, "").trim();
    return {
      isValid: false,
      severity: "warning",
      category: "platform_mismatch",
      rawInput: trimmed,
      suggestedCmd: `rmdir /s /q ${target}`,
      explanation: "You entered 'rm -rf' (Linux flag). In 🪟 Windows 11 CMD, recursively deleting directories uses 'rmdir /s /q'.",
      windowsNote: "/s deletes all subdirectories and files; /q runs in quiet mode without confirmation prompts.",
      quickFixAvailable: true,
    };
  }

  if (low.startsWith("touch ")) {
    const file = trimmed.slice(6).trim();
    return {
      isValid: false,
      severity: "warning",
      category: "platform_mismatch",
      rawInput: trimmed,
      suggestedCmd: `type nul > ${file}`,
      explanation: "The 'touch' utility does not exist in standard Windows CMD. To create an empty file, use 'type nul > " + file + "'.",
      windowsNote: "'type nul' pipes 0 bytes into the redirect operator '>' to instantiate a zero-byte file.",
      quickFixAvailable: true,
    };
  }

  // 3. Common CMD Typo Corrections
  if (low === "cd.." || low === "cd/") {
    return {
      isValid: false,
      severity: "error",
      category: "typo",
      rawInput: trimmed,
      suggestedCmd: low === "cd.." ? "cd .." : "cd \\",
      explanation: low === "cd.." 
        ? "Typo detected: While some shells tolerate 'cd..', standard best-practice requires a space: 'cd ..' to move up one folder level."
        : "In 🪟 Windows 11, backslash '\\' represents the root drive directory: use 'cd \\'.",
      windowsNote: "Two dots '..' refer to the parent folder. Always include a space after 'cd'.",
      quickFixAvailable: true,
    };
  }

  if (low.startsWith("cd") && !low.startsWith("cd ") && low.length > 2) {
    const dest = trimmed.slice(2);
    return {
      isValid: false,
      severity: "error",
      category: "typo",
      rawInput: trimmed,
      suggestedCmd: `cd ${dest}`,
      explanation: `Missing space between 'cd' and folder destination '${dest}'. Command Prompt treats 'cd${dest}' as a single unknown program.`,
      quickFixAvailable: true,
    };
  }

  if (low.startsWith("mkdr") || low.startsWith("makedir") || low.startsWith("mdir")) {
    const rest = trimmed.replace(/^(mkdr|makedir|mdir)\s*/i, "");
    return {
      isValid: false,
      severity: "error",
      category: "typo",
      rawInput: trimmed,
      suggestedCmd: rest ? `mkdir ${rest}` : "mkdir <folder-name>",
      explanation: "Typo detected! The correct Make Directory command is 'mkdir' (or shorthand 'md').",
      windowsNote: "'mkdir' creates folder structures on NTFS and FAT32 file systems.",
      quickFixAvailable: !!rest,
    };
  }

  if (low === "mkdir" || low === "md") {
    return {
      isValid: false,
      severity: "error",
      category: "missing_argument",
      rawInput: trimmed,
      suggestedCmd: expectedCmd || "mkdir my-project",
      explanation: "The syntax of the command is incorrect: 'mkdir' requires a folder name argument (e.g., 'mkdir my-project').",
      quickFixAvailable: true,
    };
  }

  if (low === "code" || low === "code." || low === "code/") {
    return {
      isValid: false,
      severity: "error",
      category: "typo",
      rawInput: trimmed,
      suggestedCmd: "code .",
      explanation: "To open your active workspace in Visual Studio Code, you must place a space before the single dot: 'code .'.",
      windowsNote: "The single dot '.' represents the current working directory in 🪟 Windows 11.",
      quickFixAvailable: true,
    };
  }

  // 4. Git & NPM Typos
  if (low === "git init ." || low === "git-init") {
    return {
      isValid: false,
      severity: "warning",
      category: "optimal_practice",
      rawInput: trimmed,
      suggestedCmd: "git init",
      explanation: "'git init' already initializes the active directory. The extra dot is redundant in Git.",
      quickFixAvailable: true,
    };
  }

  if (low.startsWith("np init") || low === "npm-init") {
    return {
      isValid: false,
      severity: "error",
      category: "typo",
      rawInput: trimmed,
      suggestedCmd: "npm init -y",
      explanation: "Typo detected: use 'npm init -y' to initialize a package.json file with default configuration.",
      quickFixAvailable: true,
    };
  }

  // 5. General Fallback with expected hint
  if (expectedCmd) {
    return {
      isValid: false,
      severity: "warning",
      category: "syntax",
      rawInput: trimmed,
      suggestedCmd: expectedCmd,
      explanation: `Command '${trimmed}' is unrecognized for this stage. Target command is '${expectedCmd}'.`,
      quickFixAvailable: true,
    };
  }

  return {
    isValid: true,
    severity: "info",
    category: "valid",
    rawInput: trimmed,
    suggestedCmd: trimmed,
    explanation: `Command '${trimmed}' accepted by AI Compiler Sage.`,
    quickFixAvailable: false,
  };
}

/**
 * Autocomplete matching suggestions as user types in the terminal.
 */
export function getCommandSuggestions(partialInput: string): CommandAutocomplete[] {
  const query = partialInput.trim().toLowerCase();
  if (!query) return COMMAND_DATABASE.slice(0, 5);

  return COMMAND_DATABASE.filter(
    (item) =>
      item.command.toLowerCase().startsWith(query) ||
      item.prefix.toLowerCase().startsWith(query) ||
      item.syntax.toLowerCase().includes(query)
  );
}
