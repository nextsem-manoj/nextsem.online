# 🚀 Automated Browser Workspace & Incognito Launcher (.bat Scripts)

A practical Windows batch file automation project that opens **Google Search**, **YouTube**, and **Gmail** in standard or **Incognito / InPrivate** browser tabs with a single double-click.

---

## 📁 Project Structure

| File | Description |
| :--- | :--- |
| [`open_workspace_tabs.bat`](./open_workspace_tabs.bat) | Complete interactive production script with styled CMD console, title bar, status progress indicators, and 2-second safe delay timeouts. |
| [`open_incognito_tabs.bat`](./open_incognito_tabs.bat) | **Incognito Multi-Browser Script**: Interactive menu supporting Google Chrome, Microsoft Edge, Firefox, and Brave in private browsing mode. |
| [`open_chrome_incognito_simple.bat`](./open_chrome_incognito_simple.bat) | Minimal 2-line Google Chrome Incognito launcher. |
| [`open_edge_inprivate_simple.bat`](./open_edge_inprivate_simple.bat) | Minimal 2-line Microsoft Edge InPrivate launcher. |
| [`open_tabs_simple.bat`](./open_tabs_simple.bat) | Ultra-lightweight 5-line script for instant execution. |
| `README.md` | Complete tutorial and Windows 11 setup guide. |

---

## 🕵️‍♂️ How to Open Google & YouTube in Incognito Mode

### Option A: Google Chrome Incognito (.bat)
```cmd
@echo off
start chrome --incognito "https://www.google.com" "https://www.youtube.com"
exit
```

### Option B: Microsoft Edge InPrivate (.bat)
```cmd
@echo off
start msedge -inprivate "https://www.google.com" "https://www.youtube.com"
exit
```

### Option C: Mozilla Firefox Private Window (.bat)
```cmd
@echo off
start firefox -private-window "https://www.google.com" "https://www.youtube.com"
exit
```

### Option D: Brave Browser Incognito (.bat)
```cmd
@echo off
start brave --incognito "https://www.google.com" "https://www.youtube.com"
exit
```

---

## 🛠️ Step-by-Step Windows 11 Setup Guide

### Step 1: Open Notepad
Press **⊞ Win + R**, type `notepad`, and press **Enter**.

### Step 2: Paste the Batch Code
```cmd
@echo off
title Incognito Workspace Launcher
echo Opening Google and YouTube in Incognito...
start chrome --incognito "https://www.google.com" "https://www.youtube.com"
echo Launched in Incognito!
exit
```

### Step 3: Save as `.bat` File
1. Click **File > Save As...** in Notepad.
2. In the **Save as type** dropdown, select **All Files (*.*)**.
3. Name your file `incognito.bat` and save it to your **Desktop**.

### Step 4: Run the Script
- **Method A:** Double-click `incognito.bat` on your Desktop.
- **Method B:** Open Command Prompt and type:
  ```cmd
  incognito.bat
  ```

---

## 💡 How the Commands Work

1. **`@echo off`**: Hides command lines from repeating on the screen, keeping the console output neat and focused.
2. **`start chrome --incognito <URL1> <URL2>`**: Instructs Windows to launch Google Chrome with the `--incognito` flag, loading all listed URLs inside a single private browsing window.
3. **`start msedge -inprivate <URL1> <URL2>`**: Instructs Windows to launch Microsoft Edge with the `-inprivate` flag.
4. **`exit`**: Closes the Command Prompt window cleanly once launched.

---

## ⏰ Bonus: Auto-Run Every Morning with Task Scheduler

You can configure 🪟 Windows 11 to automatically launch this script every morning when you log into your PC:

1. Press **⊞ Win + S**, search for **Task Scheduler**, and press **Enter**.
2. Click **Create Basic Task...** on the right sidebar.
3. Name it: `Open Morning Incognito Tabs`.
4. Trigger: Select **At log on** or **Daily at 9:00 AM**.
5. Action: Select **Start a program**, then browse and select `incognito.bat`.
6. Click **Finish**.

Now your private development & research tabs will open automatically every morning! 🎉
