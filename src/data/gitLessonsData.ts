export interface GitLesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  content: string;
}

export const gitLessons: GitLesson[] = [
  {
    id: 1,
    slug: "download-install-git-windows-11-setup",
    title: "Download & Install Git for Windows 11 Step-by-Step",
    unit: "Unit 1: Git Installation & Workstation Setup",
    content: `Welcome to the complete Git & GitHub Version Control Course on 🪟 Windows 11!

## 1. What is Git?
* **Git** is the world's most popular distributed version control system (VCS), created by Linus Torvalds.
* It tracks every modification made to your source code over time, allows you to rewind to previous versions, branch off to build new features safely, and collaborate with engineering teams across the world.

---

## 2. Step 1: Download the Official Git for Windows Installer
1. Open Google Chrome on your 🪟 Windows 11 PC and visit the official website: \`https://git-scm.com/download/win\`
2. Click the prominent button: **"Click here to download the latest 64-bit version of Git for Windows"**.
3. The executable installer \`Git-2.xx.x-64-bit.exe\` will download directly to your \`Downloads\` folder.

---

## 3. Step 2: Crucial Installation Wizard Checkboxes
When running the installer on 🪟 Windows 11:
* **Select Components:** Check **"Git Bash Here"**, **"Git GUI Here"**, and **"Add a Git Bash Profile to Windows Terminal"**.
* **Default Editor:** Select **"Use Visual Studio Code as Git's default editor"**.
* **Adjusting your PATH environment:** Select **"Git from the command line and also from 3rd-party software"** (Recommended). This enables running \`git\` inside Windows Command Prompt (\`cmd.exe\`), PowerShell, and VS Code terminal!
* **Line Ending Conversion:** Select **"Checkout Windows-style, commit Unix-style line endings"** (\`core.autocrlf true\`).

---

## 4. Step 3: Verifying Git Installation in Windows CMD
Open your 🪟 Windows 11 Command Prompt (\`Win + R\` -> type \`cmd\` -> hit \`Enter\`) and type:

\`\`\`cmd
git --version
\`\`\`

**Expected Windows 11 Terminal Output:**
\`\`\`cmd
git version 2.44.0.windows.1
\`\`\`
`
  },
  {
    id: 2,
    slug: "git-first-time-config-user-name-email",
    title: "First-Time Git Configuration: user.name, user.email & Default Branch",
    unit: "Unit 1: Git Installation & Workstation Setup",
    content: `Before creating your first commit, Git requires your identity (author name and email). Every commit you make permanently records this information.

## 1. Setting Up Global Identity
Run these commands in your 🪟 Windows Command Prompt:

\`\`\`cmd
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
\`\`\`

> 💡 **Crucial Tip:** Use the exact same email address registered on your **GitHub account** so your commits automatically link to your GitHub profile and contribute to your green activity graph!

---

## 2. Setting the Modern Default Branch Name to \`main\`
\`\`\`cmd
git config --global init.defaultBranch main
\`\`\`

---

## 3. Verifying All Global Git Configurations
\`\`\`cmd
git config --global --list
\`\`\`

**Output:**
\`\`\`cmd
user.name=Er. Manoj Kumar
user.email=dev@nextsem.online
init.defaultbranch=main
core.autocrlf=true
\`\`\`
`
  },
  {
    id: 3,
    slug: "git-init-first-repository-workspace-setup",
    title: "Initializing Local Git Repository (git init) & Architecture",
    unit: "Unit 1: Git Installation & Workstation Setup",
    content: `Learn how Git transforms any normal project directory on your Windows PC into a version-controlled repository.

## 1. The 3 Trees of Git Architecture
* **Working Directory:** The actual files on your hard drive that you edit in VS Code.
* **Staging Area (Index):** A staging buffer where you select which specific file changes will be included in the next commit.
* **Repository (Commit History):** The permanent, immutable database of project snapshots stored inside the hidden \`.git\` folder.

---

## 2. Initializing a Project on Windows 11
\`\`\`cmd
cd C:\\Users\\Developer\\Desktop
mkdir my-first-project
cd my-first-project
git init
\`\`\`

**Output:**
\`\`\`cmd
Initialized empty Git repository in C:/Users/Developer/Desktop/my-first-project/.git/
\`\`\`
`
  },
  {
    id: 4,
    slug: "git-status-staging-area-git-add-dot",
    title: "Staging Area, git status & Staging Files (git add .)",
    unit: "Unit 2: Daily Workflow & Snapshots",
    content: `The staging area lets you curate exactly what gets committed.

## 1. Checking Workspace Status
\`\`\`cmd
git status
\`\`\`

## 2. Staging Single vs All Files
\`\`\`cmd
# Stage a specific file
git add index.html

# Stage all modified and new files in the entire project
git add .
\`\`\`
`
  },
  {
    id: 5,
    slug: "git-commit-message-history-snapshots",
    title: "Saving Project Snapshots with git commit -m",
    unit: "Unit 2: Daily Workflow & Snapshots",
    content: `A commit records a permanent snapshot of your staged files along with a descriptive message and unique SHA-1 hash.

\`\`\`cmd
git commit -m "feat: build responsive navigation header with dark mode"
\`\`\`

**Output:**
\`\`\`cmd
[main (root-commit) 8f3a1bc] feat: build responsive navigation header with dark mode
 2 files changed, 48 insertions(+)
 create mode 100644 index.html
 create mode 100644 styles.css
\`\`\`
`
  },
  {
    id: 6,
    slug: "git-log-commit-history-diff-inspection",
    title: "Inspecting Commit History (git log) & Code Differences (git diff)",
    unit: "Unit 2: Daily Workflow & Snapshots",
    content: `Review your project timeline and see line-by-line code differences.

## 1. Clean One-Line Commit Log
\`\`\`cmd
git log --oneline --graph --decorate
\`\`\`

## 2. Inspecting Unstaged Changes with git diff
\`\`\`cmd
git diff
\`\`\`
`
  },
  {
    id: 7,
    slug: "git-ignore-node-modules-env-secrets",
    title: "Ignoring Files & Secrets with .gitignore",
    unit: "Unit 2: Daily Workflow & Snapshots",
    content: `Create a \`.gitignore\` file in the root of your project to prevent heavy dependencies and secret API keys from entering Git history.

\`\`\`gitignore
# Dependencies
node_modules/
dist/
.next/

# Environment Secrets
.env
.env.local
*.pem

# Windows OS Cache
Thumbs.db
desktop.ini
\`\`\`
`
  },
  {
    id: 8,
    slug: "git-branching-switch-checkout-workflows",
    title: "Branching Workflows: Creating & Switching Branches (git branch)",
    unit: "Unit 3: Branching & Merging",
    content: `Branches allow you to work on new features in complete isolation without affecting the stable production \`main\` branch.

\`\`\`cmd
# Create and switch to a new branch in one command
git checkout -b feature-contact-form

# Modern alternative
git switch -c feature-contact-form

# List all local branches
git branch
\`\`\`
`
  },
  {
    id: 9,
    slug: "git-merge-branches-fast-forward-strategies",
    title: "Merging Branches & Fast-Forward Strategies (git merge)",
    unit: "Unit 3: Branching & Merging",
    content: `Once a feature is completed and tested, merge it back into \`main\`.

\`\`\`cmd
# 1. Switch back to the main branch
git switch main

# 2. Merge the feature branch into main
git merge feature-contact-form

# 3. Delete the temporary feature branch
git branch -d feature-contact-form
\`\`\`
`
  },
  {
    id: 10,
    slug: "git-merge-conflict-resolution-vscode-markers",
    title: "Resolving Git Merge Conflicts Step-by-Step in VS Code",
    unit: "Unit 3: Branching & Merging",
    content: `A merge conflict occurs when two branches modify the exact same line of code in different ways.

## 1. Understanding Conflict Markers
\`\`\`text
<<<<<<< HEAD (Current Change - main)
<h1 class="text-white">Nextsem Academy Home</h1>
=======
<h1 class="text-emerald-400">Nextsem Learning Hub</h1>
>>>>>>> feature-hero-redesign (Incoming Change)
\`\`\`

## 2. Resolving in VS Code
1. Open the conflicted file in VS Code.
2. Click **"Accept Current Change"**, **"Accept Incoming Change"**, or **"Accept Both Changes"**.
3. Save the file, stage it with \`git add .\`, and commit with \`git commit -m "fix: resolve hero heading conflict"\`!
`
  },
  {
    id: 11,
    slug: "git-remote-add-origin-github-push-upstream",
    title: "Connecting GitHub Remote Repositories (git remote add origin)",
    unit: "Unit 4: GitHub Collaboration & Cloud Workflows",
    content: `Connect your local PC repository to GitHub in the cloud.

\`\`\`cmd
# 1. Link remote origin
git remote add origin https://github.com/manojkmr2403/my-nextsem-project.git

# 2. Verify remote URL
git remote -v

# 3. Push and set upstream tracking
git push -u origin main
\`\`\`
`
  },
  {
    id: 12,
    slug: "git-clone-fork-remote-github-collaboration",
    title: "Cloning & Forking Repositories (git clone) on Windows 11",
    unit: "Unit 4: GitHub Collaboration & Cloud Workflows",
    content: `Download any existing GitHub project to your local PC.

\`\`\`cmd
git clone https://github.com/nextsemacademy/web-starter.git
cd web-starter
npm install
\`\`\`
`
  },
  {
    id: 13,
    slug: "git-stash-save-pop-temporary-workspaces",
    title: "Stashing Uncommitted Work with git stash",
    unit: "Unit 4: GitHub Collaboration & Cloud Workflows",
    content: `When you need to switch branches urgently without committing half-finished code, use \`git stash\`.

\`\`\`cmd
# Save uncommitted changes to stash stack
git stash

# Switch to fix urgent bug
git switch main
# ... fix bug ...

# Return to feature branch and restore stashed work
git switch feature-dashboard
git stash pop
\`\`\`
`
  },
  {
    id: 14,
    slug: "git-undo-restore-soft-hard-reset-revert",
    title: "Undoing Mistakes: git restore, git reset & git revert",
    unit: "Unit 4: GitHub Collaboration & Cloud Workflows",
    content: `Master the tools to undo mistakes safely:
* **\`git restore <file>\`:** Discards unstaged modifications in working directory.
* **\`git restore --staged <file>\`:** Unstages a file back to working directory.
* **\`git revert <commit-hash>\`:** Creates a new commit that inverts changes from a previous commit (safe for public branches).
`
  },
  {
    id: 15,
    slug: "github-pull-requests-code-review-workflow",
    title: "GitHub Pull Requests, Code Reviews & Team Collaboration",
    unit: "Unit 4: GitHub Collaboration & Cloud Workflows",
    content: `Pull Requests (PRs) are the industry standard for code review, automated testing, and team collaboration on GitHub.

1. Push your feature branch: \`git push origin feature-auth\`
2. Open GitHub repository and click **"Compare & pull request"**.
3. Write a clear description of changes.
4. Request code review from teammates.
5. Click **"Squash and merge"** to merge into \`main\`!
`
  }
];
