/** Single language exercise (legacy format) */
export interface ExerciseBlock {
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
}

/** Multilingual exercise format (new standard) */
export interface MultilingualExercise {
  english: ExerciseBlock;
  hinglish: ExerciseBlock;
  hindi: ExerciseBlock;
}

export interface Lesson {
  id: number;
  slug: string;
  title: string;
  shortTitle?: string;
  unit: string;
  bookRef: string;
  /** Supports both legacy ExerciseBlock and new MultilingualExercise */
  exercise: ExerciseBlock | MultilingualExercise;
  english: {
    kid: string;
    pro: string;
  };
  hinglish: {
    kid: string;
    pro: string;
  };
  hindi: {
    kid: string;
    pro: string;
  };
}

export const htmlLessons: Lesson[] = [
  {
    id: 0,
    slug: "download-install-vscode-windows-11-setup-guide",
    title: "Visual Studio Code Download, Windows 11 Setup & First HTML Page",
    unit: "Unit 0: Developer Workstation Setup & Visual Studio Code",
    bookRef: "Nextsem Full Stack Web Dev Guide (Phase 0)",
    exercise: {
      english: {
        question: "Which crucial checkbox during VS Code installation enables right-clicking any folder in Windows 11 File Explorer to open it directly in VS Code?",
        options: [
          "Add 'Open with Code' action to Windows Explorer directory context menu",
          "Create Desktop shortcut only",
          "Disable GPU hardware acceleration",
          "Install Microsoft Edge DevTools only",
        ],
        correctAnswer: "Add 'Open with Code' action to Windows Explorer directory context menu",
        hint: "This option allows you to right-click on any project folder on your Windows PC and select 'Open with Code'!"
      },
      hinglish: {
        question: "VS Code install karte samay kaun sa checkbox select karna sabse zaroori hai taaki aap Windows 11 ke kisi bhi folder par right-click karke use direct VS Code me khol sakein?",
        options: [
          "Sirf Desktop shortcut banayein",
          "Add 'Open with Code' action to Windows Explorer directory context menu",
          "GPU hardware acceleration ko band karein",
          "Edge browser extension install karein",
        ],
        correctAnswer: "Add 'Open with Code' action to Windows Explorer directory context menu",
        hint: "Is option se aap Windows PC par kisi bhi folder par right-click karke direct 'Open with Code' kar sakte hain!"
      },
      hindi: {
        question: "Windows 11 me VS Code install karte samay kaun sa checkbox sabse mahatvapoorna hai jisse kisi bhi folder par right-click karke 'Open with Code' kiya ja sake?",
        options: [
          "Keval Desktop shortcut banayein",
          "Add 'Open with Code' action to Windows Explorer directory context menu",
          "GPU acceleration band karein",
          "Edge browser extension install karein"
        ],
        correctAnswer: "Add 'Open with Code' action to Windows Explorer directory context menu",
        hint: "Yah option Windows 11 File Explorer me kisi bhi project folder par right-click karke direct 'Open with Code' karne ki suvidha deta hai!"
      }
    },
    english: {
      kid: `Welcome to Full Stack Web Development! Before we write HTML, CSS, and JavaScript, we need a modern code editor on our Windows 11 computer.

## What is Visual Studio Code (VS Code)?
![Visual Studio Code Windows 11 Developer Workspace](/screenshots/vscode/step0_vscode_windows11_workspace.png)
* VS Code is a free code editor.
* Microsoft built it for web software engineering.
* Includes terminal, Git, and syntax highlighting.
* Extensions provide live server and formatting.
* Works natively across all Windows 11 computers.

---

## Method 1: Download & Install via Command Line (CLI - Fastest)
If you prefer Windows Terminal or PowerShell, you can install VS Code with a single command using the official Microsoft Windows Package Manager (winget).

![Step 1: Install VS Code using winget in Windows Terminal](/screenshots/vscode/cli_step1_winget_install.png)
* Open Windows Terminal using Win + X.
* Run official Windows Package Manager command.
* Download and PATH configuration happen automatically.
* Verify your installation with version command.
* Open any directory using code dot.

\`\`\`powershell
winget install Microsoft.VisualStudioCode
\`\`\`

![Step 2: Verify VS Code Installation with code --version](/screenshots/vscode/cli_step2_code_version.png)
Verify your installation by checking the installed version:
\`\`\`powershell
code --version
\`\`\`

![Step 3: Launch VS Code Workspace with code dot](/screenshots/vscode/cli_step3_code_dot.png)
Launch VS Code directly into your workspace from the command line:
\`\`\`powershell
code .
\`\`\`

---

## Method 2: Direct Download from Official Website (Setup Wizard)

### Step 1: Open Google Chrome and Visit Official Site
![Step 1: Search for VS Code on Google Chrome Windows 11](/screenshots/vscode/step1_google_search_vscode.png)
* Open Google Chrome on your computer.
* Navigate to official Microsoft download portal.
* Official URL is https://code.visualstudio.com/Download.
* Download page displays all platform installers.
* Select Windows 11 64-bit installer option.

---

### Step 2: Download the Official Windows 11 User Installer
![Step 2: Download Visual Studio Code for Windows 11](/screenshots/vscode/step2_vscode_download_page.png)
* Click blue Windows 64-bit User Installer button.
* Download begins for VSCodeUserSetup-x64.exe installer package.
* Total download size is approximately 98 megabytes.
* File saves automatically in Downloads folder.
* Verify download completes before launching installer.

---

### Step 3: Open Downloads Folder in Windows 11
![Step 3: Downloaded VSCodeUserSetup-x64.exe in Windows 11 Downloads](/screenshots/vscode/step3_windows11_downloads_folder.png)
* Press Win + E for File Explorer.
* Navigate directly to your Downloads folder.
* Locate downloaded installer named VSCodeUserSetup-x64.exe file.
* Double-click file to launch Microsoft Setup Wizard.
* Click Yes when User Account Control appears.

---

### Step 4: Installation Wizard & Crucial Windows Checkboxes
![Step 4: Check Crucial Setup Checkboxes on Windows 11](/screenshots/vscode/step4_vscode_setup_wizard_checkboxes.png)
* Accept Microsoft software license agreement prompt.
* Check "Open with Code" file context menu.
* Check "Open with Code" directory context menu.
* Check "Register Code as supported file editor".
* Check "Add to PATH" environment variable checkbox.
* Click Install to complete Windows 11 setup.

---

## Step 5: Install Essential Web Developer Extensions
![Step 5: Install Live Server and Prettier in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
* Press Ctrl + Shift + X in editor.
* Install Live Server extension for Chrome preview.
* Install Prettier code formatter for clean syntax.
* Install Auto Rename Tag for faster editing.
* Extensions automatically activate inside your editor.

---

## Step 6: Create Your Project Folder & "Open with Code"
![Step 6: Windows 11 Right-Click Folder -> Open with Code](/screenshots/vscode/step6_windows11_rightclick_open_with_code.png)
* Create new folder named my-first-website on desktop.
* Right-click folder and select Show more options.
* Click "Open with Code" from context menu.
* Or run code dot inside Windows Terminal.
* VS Code loads workspace with active explorer.

\`\`\`powershell
code .
\`\`\`

---

## Step 7: Create index.html & Run Google Chrome Live Server
![Step 7: Visual Studio Code on Windows 11 and Google Chrome Live Server Preview](/screenshots/vscode/step7_first_index_html_live_server.png)
* Create index.html inside the project explorer.
* Type exclamation mark and press Enter key.
* Emmet generates complete HTML5 boilerplate skeleton.
* Right-click index.html and select Live Server.
* Chrome opens page at localhost port 5500.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website | Nextsem</title>
</head>
<body>
  <h1>Hello World! My First Web Page</h1>
  <p>I am learning Full Stack Web Development on Nextsem Academy.</p>
</body>
</html>
\`\`\`

---

## Essential Windows 11 VS Code Keyboard Shortcuts Drill
* Ctrl + S saves the active file.
* Ctrl + \` toggles integrated developer terminal.
* Ctrl + Shift + P opens Command Palette.
* Alt + Up / Down moves lines.
* Alt + Shift + F formats code document.`,
      pro: `Professional Web Development Workstation Setup on Windows 11 using Visual Studio Code.

## Industry-Standard Editor: Visual Studio Code
![Visual Studio Code Windows 11 Developer Workspace](/screenshots/vscode/step0_vscode_windows11_workspace.png)
* VS Code is premier full stack IDE.
* Microsoft engineered it for TypeScript and React.
* Includes native terminal, Git, and LSP integration.
* Multi-root workspaces optimize large full-stack codebases.
* Runs high-performance V8 engine on Windows 11.

---

## Installation Method 1: Windows Package Manager (winget CLI)
![Step 1: Install VS Code using winget in Windows Terminal](/screenshots/vscode/cli_step1_winget_install.png)
* Open Windows Terminal using Win + X.
* Execute winget install for Visual Studio Code.
* Package manager configures PATH variables automatically.
* Query compiler version to verify system integration.
* Launch workspace using terminal code dot syntax.

\`\`\`powershell
winget install Microsoft.VisualStudioCode
\`\`\`

![Step 2: Verify VS Code Installation with code --version](/screenshots/vscode/cli_step2_code_version.png)
Verify binary and PATH availability:
\`\`\`powershell
code --version
\`\`\`

![Step 3: Launch VS Code Workspace with code dot](/screenshots/vscode/cli_step3_code_dot.png)
Launch workspace from command line:
\`\`\`powershell
code .
\`\`\`

---

## Installation Method 2: Official Direct Installer Download
![Step 1: Search for VS Code on Google Chrome Windows 11](/screenshots/vscode/step1_google_search_vscode.png)
![Step 2: Download Visual Studio Code for Windows 11](/screenshots/vscode/step2_vscode_download_page.png)
* Direct official download: [code.visualstudio.com/Download](https://code.visualstudio.com/Download)
* Select Windows (64-bit User Installer) binary.
* Run downloaded package VSCodeUserSetup-x64.exe from Downloads folder.

![Step 3: Downloaded VSCodeUserSetup-x64.exe in Windows 11 Downloads](/screenshots/vscode/step3_windows11_downloads_folder.png)
![Step 4: Check Crucial Setup Checkboxes on Windows 11](/screenshots/vscode/step4_vscode_setup_wizard_checkboxes.png)
* Crucial setup flags: Directory context menu integration and system PATH registration.

---

## Toolchain Extensions, Workspace & First Server Launch
![Step 5: Install Live Server and Prettier in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
![Step 6: Windows 11 Right-Click Folder -> Open with Code](/screenshots/vscode/step6_windows11_rightclick_open_with_code.png)
![Step 7: Visual Studio Code on Windows 11 and Google Chrome Live Server Preview](/screenshots/vscode/step7_first_index_html_live_server.png)
* Extensions: Live Server (ritwickdey.liveserver) and Prettier (esbenp.prettier-vscode).
* Workspace Launch: Right-click folder -> Open with Code or run code dot in terminal.
* HTML5 Boilerplate: Emmet expansion with exclamation mark -> Launch Google Chrome on port 5500.

\`\`\`powershell
code .
\`\`\`

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website | Nextsem</title>
</head>
<body>
  <h1>Hello World! My First Web Page</h1>
  <p>I am learning Full Stack Web Development on Nextsem Academy.</p>
</body>
</html>
\`\`\`

## Professional Shortcuts Drill
* Ctrl + S: Atomic save current buffer.
* Ctrl + \`: Toggle integrated PowerShell terminal.
* Ctrl + Shift + P: Global Command Palette search.
* Alt + Shift + F: Run Prettier formatting engine.`
    },
    hinglish: {
      kid: `Full Stack Web Developer banne ke safar me aapka swagat hai! Web development shuru karne ke liye sabse pehle hume apne Windows 11 PC par **Visual Studio Code (VS Code)** download aur install karna hoga.

## Visual Studio Code (VS Code) Kya Hai?
![Visual Studio Code Windows 11 Developer Workspace](/screenshots/vscode/step0_vscode_windows11_workspace.png)
* VS Code free modern code editor hai.
* Microsoft ise professional web engineers banata hai.
* Isme built-in terminal aur Git milta hai.
* Extensions se live reload features judte hain.
* Ye Windows 11 par fast chalta hai.

---

## Tareeka 1: Command Line Se Install Karein (CLI - Sabse Fast)
Agar aap Windows Terminal ya PowerShell use karte hain, to sirf ek command se direct VS Code install kar sakte hain:

![Step 1: Install VS Code using winget in Windows Terminal](/screenshots/vscode/cli_step1_winget_install.png)
* Win + X dabakar Windows Terminal kholein.
* Microsoft winget package manager command chalayein.
* Download aur PATH setup automatically ho jayega.
* Version check karke installation verify karein.
* Kisi bhi folder me code dot likhein.

\`\`\`powershell
winget install Microsoft.VisualStudioCode
\`\`\`

![Step 2: Verify VS Code Installation with code --version](/screenshots/vscode/cli_step2_code_version.png)
Installation check karne ke liye ye command chalayein:
\`\`\`powershell
code --version
\`\`\`

![Step 3: Launch VS Code Workspace with code dot](/screenshots/vscode/cli_step3_code_dot.png)
Command line se workspace launch karein:
\`\`\`powershell
code .
\`\`\`

---

## Tareeka 2: Official Website Se Direct Download Karein

### Step 1: Google Chrome Me Official Site Kholein
![Step 1: Search for VS Code on Google Chrome Windows 11](/screenshots/vscode/step1_google_search_vscode.png)
* Chrome browser me official website open karein.
* Official link hai https://code.visualstudio.com/Download.
* Download page par alag platforms dikhenge.
* Windows 11 64-bit installer option chunein.

---

### Step 2: Windows 11 User Installer Download Karein
![Step 2: Download Visual Studio Code for Windows 11](/screenshots/vscode/step2_vscode_download_page.png)
* Blue Windows 64-bit User Installer button dabayein.
* VSCodeUserSetup-x64.exe file download hona shuru hogi.
* Setup file lagbhag 98 MB ki hai.
* File seedhe Downloads folder me save hogi.

---

### Step 3: Downloads Folder Me Setup File Kholein
![Step 3: Downloaded VSCodeUserSetup-x64.exe in Windows 11 Downloads](/screenshots/vscode/step3_windows11_downloads_folder.png)
* Win + E dabakar File Explorer kholein.
* Downloads folder me double click karein.
* VSCodeUserSetup-x64.exe file par double-click karein.
* Microsoft Setup Wizard open ho jayega.

---

### Step 4: Installation Wizard Me Zaroori Checkboxes Tick Karein
![Step 4: Check Crucial Setup Checkboxes on Windows 11](/screenshots/vscode/step4_vscode_setup_wizard_checkboxes.png)
* License agreement accept karke Next dabayein.
* "Open with Code" file context menu tick karein.
* "Open with Code" directory context menu tick karein.
* "Register Code as supported editor" tick karein.
* "Add to PATH" checkbox zaroor select karein.
* Install button dabakar setup complete karein.

---

## Step 5: Live Server & Prettier Extensions Install Karein
![Step 5: Install Live Server and Prettier in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
* VS Code me Ctrl + Shift + X dabayein.
* Live Server extension search karke install karein.
* Prettier code formatter extension install karein.
* Auto Rename Tag extension install karein.
* Extensions automatically editor me active ho jayengi.

---

## Step 6: Project Folder Banayein & "Open with Code" Karein
![Step 6: Windows 11 Right-Click Folder -> Open with Code](/screenshots/vscode/step6_windows11_rightclick_open_with_code.png)
* Desktop par my-first-website folder banayein.
* Folder par right click karke options kholein.
* "Open with Code" option par click karein.
* Ya terminal me code dot command chalayein.
* VS Code aapka naya workspace open karega.

\`\`\`powershell
code .
\`\`\`

---

## Step 7: index.html Banayein aur Live Server Chalayein!
![Step 7: Visual Studio Code on Windows 11 and Google Chrome Live Server Preview](/screenshots/vscode/step7_first_index_html_live_server.png)
* Explorer me new file index.html banayein.
* Exclamation mark type karke Enter dabayein.
* Emmet poora HTML5 boilerplate generate karega.
* Right-click karke Open with Live Server chunein.
* Chrome port 5500 par website open karega.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website | Nextsem</title>
</head>
<body>
  <h1>Hello World! My First Web Page</h1>
  <p>I am learning Full Stack Web Development on Nextsem Academy.</p>
</body>
</html>
\`\`\`

---

## Zaroori Windows 11 Keyboard Shortcuts Drill
* Ctrl + S file save karta hai.
* Ctrl + \` developer terminal toggle karta hai.
* Ctrl + Shift + P Command Palette kholta hai.
* Alt + Up / Down line move karta hai.
* Alt + Shift + F code auto-format karta hai.`,
      pro: `Professional Windows 11 Web Developer Workstation Setup using Visual Studio Code.

## Visual Studio Code Setup Overview
![Visual Studio Code Windows 11 Developer Workspace](/screenshots/vscode/step0_vscode_windows11_workspace.png)
* VS Code world standard code editor hai.
* Terminal, Git, aur IntelliSense built-in hain.
* Web development workflow ke liye fastest toolchain hai.

---

## Installation Method 1: winget Package Manager (CLI)
![Step 1: Install VS Code using winget in Windows Terminal](/screenshots/vscode/cli_step1_winget_install.png)
* Windows Terminal open karein (Win + X).
* winget command se direct install karein.
* Environment variables automatically PATH me add hote hain.

\`\`\`powershell
winget install Microsoft.VisualStudioCode
\`\`\`

![Step 2: Verify VS Code Installation with code --version](/screenshots/vscode/cli_step2_code_version.png)
Verify version:
\`\`\`powershell
code --version
\`\`\`

![Step 3: Launch VS Code Workspace with code dot](/screenshots/vscode/cli_step3_code_dot.png)
\`\`\`powershell
code .
\`\`\`

---

## Installation Method 2: Official Direct Installer Download
![Step 1: Search for VS Code on Google Chrome Windows 11](/screenshots/vscode/step1_google_search_vscode.png)
![Step 2: Download Visual Studio Code for Windows 11](/screenshots/vscode/step2_vscode_download_page.png)
* Direct download URL: [code.visualstudio.com/Download](https://code.visualstudio.com/Download)
* Windows (64-bit User Installer) download karein.
* Downloads folder se installer run karein.

![Step 3: Downloaded VSCodeUserSetup-x64.exe in Windows 11 Downloads](/screenshots/vscode/step3_windows11_downloads_folder.png)
![Step 4: Check Crucial Setup Checkboxes on Windows 11](/screenshots/vscode/step4_vscode_setup_wizard_checkboxes.png)
* Setup checkboxes me Directory Context Menu aur Add to PATH zaroor enable karein.

---

## Extensions, Workspace & First Launch
![Step 5: Install Live Server and Prettier in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
![Step 6: Windows 11 Right-Click Folder -> Open with Code](/screenshots/vscode/step6_windows11_rightclick_open_with_code.png)
![Step 7: Visual Studio Code on Windows 11 and Google Chrome Live Server Preview](/screenshots/vscode/step7_first_index_html_live_server.png)
* Extensions: Live Server aur Prettier.
* Workspace: Folder right click -> Open with Code ya terminal me code dot.
* First page: index.html boilerplate + Chrome Live Server port 5500.

\`\`\`powershell
code .
\`\`\`

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website | Nextsem</title>
</head>
<body>
  <h1>Hello World! My First Web Page</h1>
  <p>I am learning Full Stack Web Development on Nextsem Academy.</p>
</body>
</html>
\`\`\`

## Professional Shortcuts
* Ctrl + S: Save file.
* Ctrl + \`: Terminal open/close.
* Ctrl + Shift + P: Command Palette.
* Alt + Shift + F: Prettier format.`
    },
    hindi: {
      kid: `Full Stack Web Developer banne ke safar me aapka swagat hai! Web development shuru karne ke liye sabse pehle hume apne Windows 11 PC par Visual Studio Code (VS Code) download aur install karna hoga.

## Visual Studio Code (VS Code) Kya Hai?
![Visual Studio Code Windows 11 Developer Workspace](/screenshots/vscode/step0_vscode_windows11_workspace.png)
* VS Code ek muft modern code editor hai.
* Microsoft ise web engineering ke liye banata hai.
* Isme built-in terminal aur Git milta hai.
* Extensions se live reloading features judte hain.
* Ye Windows 11 par tez chalta hai.

---

## Tareeka 1: Command Line Se Install Karein (CLI - Sabse Fast)
Agar aap Windows Terminal ya PowerShell use karte hain, to sirf ek command se direct VS Code install kar sakte hain:

![Step 1: Install VS Code using winget in Windows Terminal](/screenshots/vscode/cli_step1_winget_install.png)
* Win + X dabakar Windows Terminal kholein.
* Microsoft winget package manager command chalayein.
* Download aur PATH setup automatically ho jayega.
* Version check karke installation verify karein.
* Kisi bhi folder me code dot likhein.

\`\`\`powershell
winget install Microsoft.VisualStudioCode
\`\`\`

![Step 2: Verify VS Code Installation with code --version](/screenshots/vscode/cli_step2_code_version.png)
Installation check karne ke liye ye command chalayein:
\`\`\`powershell
code --version
\`\`\`

![Step 3: Launch VS Code Workspace with code dot](/screenshots/vscode/cli_step3_code_dot.png)
\`\`\`powershell
code .
\`\`\`

---

## Tareeka 2: Official Website Se Direct Download Karein

### Step 1: Google Chrome Me Official Site Kholein
![Step 1: Search for VS Code on Google Chrome Windows 11](/screenshots/vscode/step1_google_search_vscode.png)
* Chrome browser me official website open karein.
* Official link hai https://code.visualstudio.com/Download.
* Download page par Windows 11 option chunein.

---

### Step 2: Windows 11 User Installer Download Karein
![Step 2: Download Visual Studio Code for Windows 11](/screenshots/vscode/step2_vscode_download_page.png)
* Blue Windows 64-bit User Installer button dabayein.
* VSCodeUserSetup-x64.exe file download hona shuru hogi.
* Setup file lagbhag 98 MB ki hai.

---

### Step 3: Downloads Folder Me Setup File Kholein
![Step 3: Downloaded VSCodeUserSetup-x64.exe in Windows 11 Downloads](/screenshots/vscode/step3_windows11_downloads_folder.png)
* Win + E dabakar File Explorer kholein.
* Downloads folder me double click karein.
* VSCodeUserSetup-x64.exe file par double-click karein.

---

### Step 4: Installation Wizard Me Zaroori Checkboxes Tick Karein
![Step 4: Check Crucial Setup Checkboxes on Windows 11](/screenshots/vscode/step4_vscode_setup_wizard_checkboxes.png)
* License agreement accept karke Next dabayein.
* "Open with Code" file context menu tick karein.
* "Open with Code" directory context menu tick karein.
* "Register Code as supported editor" tick karein.
* "Add to PATH" checkbox zaroor select karein.
* Install button dabakar setup complete karein.

---

## Step 5: Live Server & Prettier Extensions Install Karein
![Step 5: Install Live Server and Prettier in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
* VS Code me Ctrl + Shift + X dabayein.
* Live Server extension search karke install karein.
* Prettier code formatter extension install karein.
* Auto Rename Tag extension install karein.

---

## Step 6: Project Folder Banayein & "Open with Code" Karein
![Step 6: Windows 11 Right-Click Folder -> Open with Code](/screenshots/vscode/step6_windows11_rightclick_open_with_code.png)
* Desktop par my-first-website folder banayein.
* Folder par right click karke options kholein.
* "Open with Code" option par click karein.
* Ya terminal me code dot command chalayein.

\`\`\`powershell
code .
\`\`\`

---

## Step 7: index.html Banayein aur Live Server Chalayein!
![Step 7: Visual Studio Code on Windows 11 and Google Chrome Live Server Preview](/screenshots/vscode/step7_first_index_html_live_server.png)
* Explorer me new file index.html banayein.
* Exclamation mark type karke Enter dabayein.
* Emmet poora HTML5 boilerplate generate karega.
* Right-click karke Open with Live Server chunein.
* Chrome port 5500 par website open karega.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website | Nextsem</title>
</head>
<body>
  <h1>Hello World! My First Web Page</h1>
  <p>I am learning Full Stack Web Development on Nextsem Academy.</p>
</body>
</html>
\`\`\`

---

## Zaroori Windows 11 Keyboard Shortcuts
* Ctrl + S: File save karta hai.
* Ctrl + \`: Terminal open/close karta hai.
* Ctrl + Shift + P: Command Palette kholta hai.
* Alt + Shift + F: Code auto-format karta hai.`,
      pro: `Professional Windows 11 Web Developer Workstation Setup using Visual Studio Code.

## Visual Studio Code Setup
![Visual Studio Code Windows 11 Developer Workspace](/screenshots/vscode/step0_vscode_windows11_workspace.png)
* VS Code standard web development code editor hai.
* Terminal, Git, aur auto-complete built-in hain.

---

## Installation Method 1: winget Package Manager (CLI)
![Step 1: Install VS Code using winget in Windows Terminal](/screenshots/vscode/cli_step1_winget_install.png)
* Windows Terminal open karein (Win + X).
* winget command se direct install karein.
* PATH automatically configure hota hai.

\`\`\`powershell
winget install Microsoft.VisualStudioCode
\`\`\`

![Step 2: Verify VS Code Installation with code --version](/screenshots/vscode/cli_step2_code_version.png)
Verify version:
\`\`\`powershell
code --version
\`\`\`

![Step 3: Launch VS Code Workspace with code dot](/screenshots/vscode/cli_step3_code_dot.png)
\`\`\`powershell
code .
\`\`\`

---

## Installation Method 2: Official Direct Installer Download
![Step 1: Search for VS Code on Google Chrome Windows 11](/screenshots/vscode/step1_google_search_vscode.png)
![Step 2: Download Visual Studio Code for Windows 11](/screenshots/vscode/step2_vscode_download_page.png)
* Official URL: [code.visualstudio.com/Download](https://code.visualstudio.com/Download)
* Windows (64-bit User Installer) download karein.
* Downloads folder se setup file run karein.

![Step 3: Downloaded VSCodeUserSetup-x64.exe in Windows 11 Downloads](/screenshots/vscode/step3_windows11_downloads_folder.png)
![Step 4: Check Crucial Setup Checkboxes on Windows 11](/screenshots/vscode/step4_vscode_setup_wizard_checkboxes.png)
* Directory Context Menu aur Add to PATH checkboxes enable karein.

---

## Extensions, Workspace & First Launch
![Step 5: Install Live Server and Prettier in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
![Step 6: Windows 11 Right-Click Folder -> Open with Code](/screenshots/vscode/step6_windows11_rightclick_open_with_code.png)
![Step 7: Visual Studio Code on Windows 11 and Google Chrome Live Server Preview](/screenshots/vscode/step7_first_index_html_live_server.png)
* Extensions: Live Server aur Prettier.
* Workspace: Folder right-click -> Open with Code ya terminal me code dot.
* First page: index.html boilerplate aur Chrome Live Server port 5500.

\`\`\`powershell
code .
\`\`\`

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website | Nextsem</title>
</head>
<body>
  <h1>Hello World! My First Web Page</h1>
  <p>I am learning Full Stack Web Development on Nextsem Academy.</p>
</body>
</html>
\`\`\`

## Professional Shortcuts
* Ctrl + S: Save file.
* Ctrl + \`: Terminal toggle.
* Ctrl + Shift + P: Command Palette.
* Alt + Shift + F: Prettier format.`
    }
  },
  {
    id: 1,
    slug: "html-introduction-what-is-html",
    title: "HTML Introduction (What is HTML?)",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "W3Schools HTML Introduction & Standards Guide",
    exercise: {
      english: {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyperlinks and Text Management Language",
          "Home Tool Markup Language",
        ],
        correctAnswer: "Hyper Text Markup Language",
        hint: "HTML is the universal standard markup language used to create and structure Web pages across the World Wide Web!"
      },
      hinglish: {
        question: "HTML ka full form kya hai?",
        options: [
          "High Tech Modern Language",
          "Hyper Text Markup Language",
          "Hyperlinks and Text Management Language",
          "Home Tool Markup Language",
        ],
        correctAnswer: "Hyper Text Markup Language",
        hint: "HTML ka matlab Hyper Text Markup Language hota hai jo web pages ka structure banata hai."
      },
      hindi: {
        question: "HTML ka poora naam (Full Form) kya hai?",
        options: [
          "High Tech Modern Language",
          "Hyper Text Markup Language",
          "Hyperlinks and Text Management Language",
          "Home Tool Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language",
        hint: "HTML ka matlab Hyper Text Markup Language hai jo web pages ko structure deta hai."
      }
    },
    english: {
      kid: `* 1. HTML is standard language for web pages.
* 2. It defines structure of web content.
* 3. HTML consists of various building elements.
* 4. Elements tell browsers how to display content.
* 5. Elements label content like headings and paragraphs.

### Example: First HTML Page
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>
\`\`\`

---

## Install Live Server Extension in VS Code
![Step 5: Install Live Server in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
* 1. Press Ctrl + Shift + X in editor.
* 2. Search for "Live Server" by Ritwick Dey.
* 3. Click the blue Install button to install.
* 4. Or run CLI command in your terminal.
* 5. Extension auto-reloads pages whenever you save changes.

\`\`\`powershell
code --install-extension ritwickdey.LiveServer
\`\`\`

---

## Launch Your First HTML Page in Google Chrome
![Windows 11 Google Chrome First HTML Page Live Preview](/screenshots/html/lesson1_html_first_page_chrome.png)
* 1. Right-click anywhere inside your index.html file.
* 2. Select "Open with Live Server" from menu.
* 3. Keyboard shortcut is Alt + L, Alt + O.
* 4. Or click "Go Live" at status bar.
* 5. Chrome opens your page at port 5500.`,
      pro: `* 1. HTML is standard language for web pages.
* 2. It defines structure of web content.
* 3. HTML consists of various building elements.
* 4. Elements tell browsers how to display content.
* 5. Elements label content like headings and paragraphs.

### Example: First HTML Page
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>
\`\`\`

---

## Install Live Server Extension in VS Code
![Step 5: Install Live Server in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
* 1. Press Ctrl + Shift + X in editor.
* 2. Search for "Live Server" by Ritwick Dey.
* 3. Click the blue Install button to install.
* 4. Or run CLI command in your terminal.
* 5. Extension auto-reloads pages whenever you save changes.

\`\`\`powershell
code --install-extension ritwickdey.LiveServer
\`\`\`

---

## Launch Your First HTML Page in Google Chrome
![Windows 11 Google Chrome First HTML Page Live Preview](/screenshots/html/lesson1_html_first_page_chrome.png)
* 1. Right-click anywhere inside your index.html file.
* 2. Select "Open with Live Server" from menu.
* 3. Keyboard shortcut is Alt + L, Alt + O.
* 4. Or click "Go Live" at status bar.
* 5. Chrome opens your page at port 5500.`
    },
    hinglish: {
      kid: `* 1. HTML web pages banane ki standard language hai.
* 2. Ye website ka basic structure banata hai.
* 3. HTML alag alag elements se milkar banta.
* 4. Elements browser ko content dikhana sikhate hain.
* 5. Ye heading aur paragraph jaise content darshata.

### Example: Pehla HTML Page
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>
\`\`\`

---

## VS Code Me Live Server Extension Install Karein
![Step 5: Install Live Server in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
* 1. VS Code me Ctrl + Shift + X dabayein.
* 2. Search me "Live Server" likhein.
* 3. Ritwick Dey ka Live Server install karein.
* 4. Ya terminal me direct command chalayein.
* 5. Ye save karte hi browser reload karta.

\`\`\`powershell
code --install-extension ritwickdey.LiveServer
\`\`\`

---

## Google Chrome Me Live Website Kholein
![Windows 11 Google Chrome First HTML Page Live Preview](/screenshots/html/lesson1_html_first_page_chrome.png)
* 1. index.html file par right-click karein.
* 2. "Open with Live Server" option chunein.
* 3. Shortcut key Alt + L, Alt + O hai.
* 4. Ya bottom bar par Go Live dabayein.
* 5. Chrome port 5500 par page khol dega.`,
      pro: `* 1. HTML web pages banane ki standard language hai.
* 2. Ye website ka basic structure banata hai.
* 3. HTML alag alag elements se milkar banta.
* 4. Elements browser ko content dikhana sikhate hain.
* 5. Ye heading aur paragraph jaise content darshata.

### Example: Pehla HTML Page
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>
\`\`\`

---

## VS Code Me Live Server Extension Install Karein
![Step 5: Install Live Server in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
* 1. VS Code me Ctrl + Shift + X dabayein.
* 2. Search me "Live Server" likhein.
* 3. Ritwick Dey ka Live Server install karein.
* 4. Ya terminal me direct command chalayein.
* 5. Ye save karte hi browser reload karta.

\`\`\`powershell
code --install-extension ritwickdey.LiveServer
\`\`\`

---

## Google Chrome Me Live Website Kholein
![Windows 11 Google Chrome First HTML Page Live Preview](/screenshots/html/lesson1_html_first_page_chrome.png)
* 1. index.html file par right-click karein.
* 2. "Open with Live Server" option chunein.
* 3. Shortcut key Alt + L, Alt + O hai.
* 4. Ya bottom bar par Go Live dabayein.
* 5. Chrome port 5500 par page khol dega.`
    },
    hindi: {
      kid: `* 1. HTML web pages banane ki mool bhasha hai.
* 2. Yah har website ka dhaanchan banata hai.
* 3. HTML vibhinn elements se milkar banta hai.
* 4. Elements browser ko content dikhana sikhate hain.
* 5. Yah heading aur paragraph darshata hai.

### Example: Pehla HTML Page
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>
\`\`\`

---

## VS Code Me Live Server Extension Install Karein
![Step 5: Install Live Server in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
* 1. VS Code me Ctrl + Shift + X dabayein.
* 2. Search me "Live Server" likhein.
* 3. Ritwick Dey ka extension install karein.
* 4. Ya terminal me command run karein.
* 5. File save karte hi auto-reload hoga.

\`\`\`powershell
code --install-extension ritwickdey.LiveServer
\`\`\`

---

## Google Chrome Me Live Website Kholein
![Windows 11 Google Chrome First HTML Page Live Preview](/screenshots/html/lesson1_html_first_page_chrome.png)
* 1. index.html par right click karein.
* 2. "Open with Live Server" select karein.
* 3. Shortcut key Alt + L, Alt + O dabayein.
* 4. Ya Go Live button click karein.
* 5. Chrome port 5500 par website khol dega.`,
      pro: `* 1. HTML web pages banane ki mool bhasha hai.
* 2. Yah har website ka dhaanchan banata hai.
* 3. HTML vibhinn elements se milkar banta hai.
* 4. Elements browser ko content dikhana sikhate hain.
* 5. Yah heading aur paragraph darshata hai.

### Example: Pehla HTML Page
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>
\`\`\`

---

## VS Code Me Live Server Extension Install Karein
![Step 5: Install Live Server in Visual Studio Code](/screenshots/vscode/step5_vscode_extensions_liveserver.png)
* 1. VS Code me Ctrl + Shift + X dabayein.
* 2. Search me "Live Server" likhein.
* 3. Ritwick Dey ka extension install karein.
* 4. Ya terminal me command run karein.
* 5. File save karte hi auto-reload hoga.

\`\`\`powershell
code --install-extension ritwickdey.LiveServer
\`\`\`

---

## Google Chrome Me Live Website Kholein
![Windows 11 Google Chrome First HTML Page Live Preview](/screenshots/html/lesson1_html_first_page_chrome.png)
* 1. index.html par right click karein.
* 2. "Open with Live Server" select karein.
* 3. Shortcut key Alt + L, Alt + O dabayein.
* 4. Ya Go Live button click karein.
* 5. Chrome port 5500 par website khol dega.`
    }
  },
  {
    id: 2,
    slug: "free-web-development-lessons-client-server-model",
    title: "Client vs. Server Model",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "Duckett Chapter 1 (p. 6-10)",
    exercise: {
      english: {
        question: "In the Client-Server model, which entity requests the webpage and which entity delivers it?",
        options: [
          "Client requests, Server delivers",
          "Server requests, Client delivers",
          "Browser delivers, Server requests",
          "Router requests, Database delivers"
        ],
        correctAnswer: "Client requests, Server delivers",
        hint: "Your browser is the client requesting pages from the remote server."
      },
      hinglish: {
        question: "Client-Server model me webpage kaun request karta hai aur kaun deliver karta hai?",
        options: [
          "Client requests, Server delivers",
          "Server requests, Client delivers",
          "Browser delivers, Server requests",
          "Router requests, Database delivers"
        ],
        correctAnswer: "Client requests, Server delivers",
        hint: "Aapka browser client hota hai jo server se pages maangta hai."
      },
      hindi: {
        question: "क्लाइंट-सर्वर मॉडल में वेबपेज का अनुरोध कौन करता है और इसे कौन डिलीवर करता है?",
        options: [
          "Client requests, Server delivers",
          "Server requests, Client delivers",
          "Browser delivers, Server requests",
          "Router requests, Database delivers"
        ],
        correctAnswer: "Client requests, Server delivers",
        hint: "आपका ब्राउज़र क्लाइंट है जो सर्वर से पेज मंगवाता है।"
      }
    },
    english: {
      kid: `## 1. What is a Web Client?
* 1. Clients are devices used by people.
* 2. Your web browser acts as client.
* 3. Clients request websites from web servers.
* 4. Browsers send requests using internet protocols.
* 5. Clients receive and display web documents.

---

## 2. What is a Web Server?
* 1. Servers are powerful remote computers worldwide.
* 2. Servers store website files like HTML.
* 3. Servers listen constantly for incoming requests.
* 4. Servers process and validate client inquiries.
* 5. Servers return requested web page files.

---

## 3. The Client-Server Request Loop
* 1. User types website address in browser.
* 2. Client sends request to remote server.
* 3. Server locates requested website HTML file.
* 4. Server sends back complete response packet.
* 5. Browser renders page on user screen.

---

## 4. Testing Server Connectivity with ping
![Pinging nextsem.online Server in Windows Terminal](/screenshots/html/lesson2_ping_nextsem_online.png)
* 1. Ping tests connection to remote server.
* 2. Command sends small test data packets.
* 3. Server returns round trip response time.
* 4. Fast response verifies healthy network path.
* 5. Zero packet loss confirms server reachability.

\`\`\`powershell
ping nextsem.online
\`\`\``,
      pro: `## 1. Client Architecture & Request Dispatch
* 1. Clients initiate transactional web socket connections.
* 2. User agents formulate structured protocol requests.
* 3. Browsers execute asynchronous background network queries.
* 4. Operating systems buffer incoming binary stream data.
* 5. Client engines parse transmitted HTML documents.

---

## 2. Server Infrastructure & Daemon Listeners
* 1. Servers execute high concurrency HTTP daemons.
* 2. Systems bind sockets to port 443.
* 3. Web servers route URI request paths.
* 4. Edge nodes balance incoming global traffic.
* 5. Servers stream serialized HTML markup payloads.

---

## 3. Distributed Request-Response Lifecycle
* 1. Client initiates transport layer TCP handshake.
* 2. Client dispatches HTTP application layer payload.
* 3. Server routes query through reverse proxy.
* 4. Server returns status codes and headers.
* 5. Browser constructs DOM from received bytes.

---

## 4. Network Diagnostics with ICMP Ping
![Pinging nextsem.online Server in Windows Terminal](/screenshots/html/lesson2_ping_nextsem_online.png)
* 1. Ping utility dispatches ICMP echo packets.
* 2. Diagnostics measure millisecond round trip latency.
* 3. TTL values indicate gateway hop counts.
* 4. Zero packet loss confirms route stability.
* 5. Cloud edge answers within 17 milliseconds.

\`\`\`powershell
ping nextsem.online
\`\`\``
    },
    hinglish: {
      kid: `## 1. Web Client Kya Hota Hai?
* 1. Client wo device hai jo aap chalate.
* 2. Web browser ek client ki tarah kaam karta.
* 3. Client server se website page maangta hai.
* 4. Browser internet protocol se request bhejta hai.
* 5. Client web documents receive karke dikhata hai.

---

## 2. Web Server Kya Hota Hai?
* 1. Server ek powerful remote computer hota hai.
* 2. Server website ki HTML files sambhalta hai.
* 3. Server har waqt requests ka intezar karta.
* 4. Server client ki request ko process karta.
* 5. Server requested web page bhej deta hai.

---

## 3. Client-Server Request Loop
* 1. User browser me website address likhta hai.
* 2. Client server ko request send karta hai.
* 3. Server requested HTML file search karta hai.
* 4. Server client ko complete response packet bhejta.
* 5. Browser screen par page render kar deta.

---

## 4. Ping Se Server Connection Check Karein
![Pinging nextsem.online Server in Windows Terminal](/screenshots/html/lesson2_ping_nextsem_online.png)
* 1. Ping remote server ka connection test karta.
* 2. Command chhote test data packets bhejti hai.
* 3. Server round trip time return karta hai.
* 4. Fast response network connection verify karta hai.
* 5. Zero packet loss server connectivity prove karta.

\`\`\`powershell
ping nextsem.online
\`\`\``,
      pro: `## 1. Client Architecture & Request Dispatch
* 1. Client browser socket connection initiate karta hai.
* 2. User agent structured protocol requests formulate karta.
* 3. Browser background network queries execute karta hai.
* 4. Operating system incoming data stream buffer karta.
* 5. Rendering engine received HTML parse karta hai.

---

## 2. Server Infrastructure & Daemons
* 1. Server concurrent HTTP daemons execute karta hai.
* 2. Server ports 80 aur 443 listen karta.
* 3. Web server requested URI paths resolve karta.
* 4. Load balancers incoming traffic distribute karte hain.
* 5. Server serialized HTML markup payload return karta.

---

## 3. Request-Response Lifecycle
* 1. Client TCP socket handshake establish karta hai.
* 2. Client HTTP request headers transmit karta hai.
* 3. Server reverse proxy through request route karta.
* 4. Server status codes aur headers deliver karta.
* 5. Browser incoming bytes se DOM create karta.

---

## 4. ICMP Network Diagnostics
![Pinging nextsem.online Server in Windows Terminal](/screenshots/html/lesson2_ping_nextsem_online.png)
* 1. Ping utility ICMP echo packets bhejti hai.
* 2. Tool network round trip latency measure karta.
* 3. TTL metrics routing hop counts represent karte.
* 4. Zero packet loss route reliability confirm karta.
* 5. Cloud edge server 17ms me reply deta.

\`\`\`powershell
ping nextsem.online
\`\`\``
    },
    hindi: {
      kid: `## 1. वेब क्लाइंट क्या है?
* 1. क्लाइंट वह उपकरण है जो आप चलाते।
* 2. वेब ब्राउज़र क्लाइंट के रूप में काम करता।
* 3. क्लाइंट सर्वर से वेबपेज मांगता है।
* 4. ब्राउज़र इंटरनेट प्रोटोकॉल द्वारा अनुरोध भेजता।
* 5. क्लाइंट वेब दस्तावेज़ प्राप्त कर प्रदर्शित करता।

---

## 2. वेब सर्वर क्या है?
* 1. सर्वर शक्तिशाली दूरस्थ कंप्यूटर होते हैं।
* 2. सर्वर HTML जैसी फाइलें सुरक्षित रखते हैं।
* 3. सर्वर हर समय अनुरोधों की प्रतीक्षा करते।
* 4. सर्वर क्लाइंट के अनुरोधों को संसाधित करते।
* 5. सर्वर मांगी गई वेब फाइलें वापस भेजते।

---

## 3. क्लाइंट-सर्वर अनुरोध चक्र
* 1. उपयोगकर्ता ब्राउज़र में वेबसाइट पता लिखता है।
* 2. क्लाइंट दूरस्थ सर्वर को अनुरोध भेजता है।
* 3. सर्वर मांगी गई HTML फाइल खोजता है।
* 4. सर्वर पूरा रिस्पॉन्स पैकेट वापस भेजता है।
* 5. ब्राउज़र स्क्रीन पर पेज को रेंडर करता।

---

## 4. पिंग (ping) से सर्वर जांचें
![Pinging nextsem.online Server in Windows Terminal](/screenshots/html/lesson2_ping_nextsem_online.png)
* 1. पिंग दूरस्थ सर्वर का कनेक्शन जांचता है।
* 2. कमांड छोटे परीक्षण डेटा पैकेट भेजती है।
* 3. सर्वर राउंड ट्रिप समय लौटाता है।
* 4. तेज़ प्रतिक्रिया नेटवर्क मार्ग प्रमाणित करती है।
* 5. शून्य पैकेट हानि सर्वर उपलब्धता दिखाती है।

\`\`\`powershell
ping nextsem.online
\`\`\``,
      pro: `## 1. क्लाइंट आर्किटेक्चर एवं अनुरोध प्रेषण
* 1. क्लाइंट वेब सॉकेट कनेक्शन शुरू करता है।
* 2. यूज़र एजेंट संरचित प्रोटोकॉल अनुरोध बनाता है।
* 3. ब्राउज़र बैकग्राउंड नेटवर्क क्वेरी निष्पादित करता है।
* 4. ऑपरेटिंग सिस्टम आने वाले डेटा को बफर करता।
* 5. रेंडरिंग इंजन प्राप्त HTML पार्स करता है।

---

## 2. सर्वर इन्फ्रास्ट्रक्चर एवं डिमन्स
* 1. सर्वर समवर्ती HTTP डिमन्स निष्पादित करता है।
* 2. सर्वर पोर्ट 80 और 443 सुनता है।
* 3. वेब सर्वर अनुरोधित पथ को निर्देशित करता।
* 4. लोड बैलेंसर वैश्विक ट्रैफ़िक को संभालते हैं।
* 5. सर्वर सीरियलाइज़्ड HTML मार्कअप लौटाता है।

---

## 3. अनुरोध-प्रतिक्रिया जीवन चक्र
* 1. क्लाइंट टीसीपी सॉकेट हैंडशेक स्थापित करता।
* 2. क्लाइंट एचटीटीपी अनुरोध हेडर प्रसारित करता।
* 3. सर्वर रिवर्स प्रॉक्सी द्वारा अनुरोध भेजता।
* 4. सर्वर स्टेटस कोड और हेडर लौटाता।
* 5. ब्राउज़र प्राप्त बाइट्स से डीओएम बनाता।

---

## 4. ICMP नेटवर्क डायग्नोस्टिक्स
![Pinging nextsem.online Server in Windows Terminal](/screenshots/html/lesson2_ping_nextsem_online.png)
* 1. पिंग उपयोगिता आईसीएमपी पैकेट भेजती है।
* 2. टूल नेटवर्क राउंड ट्रिप लेटेंसी मापता।
* 3. टीटीएल मान रूटिंग हॉप्स दर्शाते हैं।
* 4. शून्य पैकेट हानि मार्ग स्थिरता प्रमाणित करती।
* 5. क्लाउड एज सर्वर त्वरित उत्तर देता।

\`\`\`powershell
ping nextsem.online
\`\`\``
    }
  },
  {
    id: 3,
    slug: "how-dns-lookup-works-step-by-step",
    title: "Understanding DNS Lookup",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "Freeman Chapter 2 (p. 25-28)",
    exercise: {
      english: {
        question: "What is the primary role of the Domain Name System (DNS)?",
        options: [
          "Translate domain names into IP addresses",
          "Encrypt local computer storage disks",
          "Format HTML text styling tags",
          "Speed up browser keyboard typing"
        ],
        correctAnswer: "Translate domain names into IP addresses",
        hint: "DNS acts like a phonebook, mapping names to numbers."
      },
      hinglish: {
        question: "Domain Name System (DNS) ka primary role kya hai?",
        options: [
          "Translate domain names into IP addresses",
          "Encrypt local computer storage disks",
          "Format HTML text styling tags",
          "Speed up browser keyboard typing"
        ],
        correctAnswer: "Translate domain names into IP addresses",
        hint: "DNS phonebook ki tarah domain name ko IP number me translate karta hai."
      },
      hindi: {
        question: "डोमेन नाम प्रणाली (DNS) की प्राथमिक भूमिका क्या है?",
        options: [
          "Translate domain names into IP addresses",
          "Encrypt local computer storage disks",
          "Format HTML text styling tags",
          "Speed up browser keyboard typing"
        ],
        correctAnswer: "Translate domain names into IP addresses",
        hint: "डीएनएस फोनबुक की तरह डोमेन नाम को आईपी पते में बदलता है।"
      }
    },
    english: {
      kid: `## 1. What is DNS?
* 1. DNS translates website names into numbers.
* 2. Computers only understand numerical IP addresses.
* 3. DNS works like your phone contacts.
* 4. You type names, DNS finds numbers.
* 5. Browsers connect instantly using IP numbers.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DNS Lookup Demo</title>
</head>
<body>
  <h1>Domain Name System</h1>
  <p>Translating nextsem.online to 199.36.158.100.</p>
</body>
</html>
\`\`\`

---

## 2. The DNS Resolution Chain
* 1. Browser checks local device DNS cache.
* 2. Router forwards query to internet provider.
* 3. Root servers direct query to TLD.
* 4. TLD server locates authoritative name server.
* 5. Authoritative server returns final website IP.

---

## 3. Querying DNS with nslookup
* 1. Open Windows Terminal on your PC.
* 2. Type nslookup followed by domain name.
* 3. DNS server resolves requested web address.
* 4. Output displays matching destination IP address.
* 5. Command confirms domain mapping to server.

\`\`\`powershell
nslookup nextsem.online
\`\`\`

---

## 4. Understanding DNS Record Types
* 1. A records map domains to IPv4.
* 2. AAAA records map domains to IPv6.
* 3. CNAME records create domain address aliases.
* 4. MX records direct domain email traffic.
* 5. TXT records store domain verification data.`,
      pro: `## 1. Domain Name System (DNS) Architecture
* 1. DNS provides distributed global directory resolution.
* 2. Fully qualified domain names map IPs.
* 3. UDP port 53 handles DNS queries.
* 4. Recursive resolvers query hierarchical namespaces.
* 5. Distributed caching minimizes latency worldwide.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DNS Architecture</title>
</head>
<body>
  <h1>DNS Resolution Hierarchy</h1>
  <p>Root servers guide authoritative record queries.</p>
</body>
</html>
\`\`\`

---

## 2. Iterative & Recursive Resolution Stages
* 1. Resolver inspects client resolver cache first.
* 2. Recursive query queries root DNS clusters.
* 3. Root servers refer query to TLD.
* 4. TLD servers delegate authoritative zone authority.
* 5. Authoritative server issues signed resource record.

---

## 3. Network Diagnostics with nslookup
* 1. Nslookup queries DNS name servers directly.
* 2. Command verifies A record binding resolution.
* 3. Non-authoritative response confirms cached resolution data.
* 4. Output exposes target edge IP addresses.
* 5. Tool diagnoses name resolution transport delays.

\`\`\`powershell
nslookup nextsem.online
\`\`\`

---

## 4. Standard DNS Resource Records
* 1. A records resolve 32-bit IPv4 addresses.
* 2. AAAA records resolve 128-bit IPv6 addresses.
* 3. CNAME maps aliases to canonical names.
* 4. NS records define authoritative zone nameservers.
* 5. TTL defines client DNS caching lifespan.`
    },
    hinglish: {
      kid: `## 1. DNS Kya Hota Hai?
* 1. DNS website name ko number banata.
* 2. Computers sirf numerical IP samajhte hain.
* 3. DNS phone contact list jaisa hai.
* 4. Aap naam likhte, DNS number dhundhta.
* 5. Browser IP number se connect hota.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DNS Demo</title>
</head>
<body>
  <h1>Domain Name System</h1>
  <p>nextsem.online translates to 199.36.158.100.</p>
</body>
</html>
\`\`\`

---

## 2. DNS Kaise Kaam Karta Hai?
* 1. Browser pehle local cache check karta.
* 2. Phir router ISP server se puchhta.
* 3. Root server TLD server tak bhejta.
* 4. TLD server authoritative nameserver batata hai.
* 5. Authoritative server final IP address deta.

---

## 3. Terminal Me nslookup Chalayein
* 1. Windows Terminal me command prompt kholein.
* 2. nslookup ke sath domain name likhein.
* 3. DNS server domain name resolve karta.
* 4. Output me website ka IP dikhta.
* 5. Isse domain connection confirm hota hai.

\`\`\`powershell
nslookup nextsem.online
\`\`\`

---

## 4. Zaroori DNS Records
* 1. A record domain ko IPv4 deta.
* 2. AAAA record domain ko IPv6 deta.
* 3. CNAME record alias name setup karta.
* 4. MX record email routing control karta.
* 5. TXT record security verification store karta.`,
      pro: `## 1. DNS Architecture & Name Resolution
* 1. DNS distributed database system operate karta.
* 2. Domain names IP address me convert hote.
* 3. Port 53 UDP par queries travel karti.
* 4. Recursive resolvers root servers consult karte.
* 5. Global caching DNS response speed badhati.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DNS Architecture</title>
</head>
<body>
  <h1>DNS Resolution Hierarchy</h1>
  <p>Root servers guide authoritative record queries.</p>
</body>
</html>
\`\`\`

---

## 2. DNS Resolution Process Steps
* 1. Resolver local OS cache query karta.
* 2. ISP resolver root zone query karta.
* 3. Root servers TLD nameserver point karte.
* 4. TLD servers authoritative server return karte.
* 5. Authoritative server final IP record deta.

---

## 3. Network Diagnostics with nslookup
* 1. Nslookup utility DNS servers probe karti.
* 2. Command A record mapping verify karti.
* 3. Response non-authoritative cache status report karta.
* 4. Output resolved edge IP display karta.
* 5. Tool network connectivity issues detect karta.

\`\`\`powershell
nslookup nextsem.online
\`\`\`

---

## 4. Core DNS Records Reference
* 1. A records 32-bit IPv4 resolve karte.
* 2. AAAA records 128-bit IPv6 resolve karte.
* 3. CNAME canonical hostname alias map karta.
* 4. NS records zone authoritative servers batate.
* 5. TTL cache expiry time define karta.`
    },
    hindi: {
      kid: `## 1. डीएनएस (DNS) क्या है?
* 1. डीएनएस डोमेन नाम को संख्या बनाता।
* 2. कंप्यूटर केवल आईपी संख्या को समझते।
* 3. डीएनएस फोन कॉन्टैक्ट जैसा काम करता।
* 4. आप नाम लिखते, डीएनएस नंबर खोजता।
* 5. ब्राउज़र आईपी से तुरंत जुड़ जाता।

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DNS Demo</title>
</head>
<body>
  <h1>Domain Name System</h1>
  <p>nextsem.online translates to 199.36.158.100.</p>
</body>
</html>
\`\`\`

---

## 2. डीएनएस कैसे काम करता है?
* 1. ब्राउज़र पहले लोकल कैशे जांचता है।
* 2. फिर इंटरनेट प्रोवाइडर से पूछता है।
* 3. रूट सर्वर टीएलडी तक भेजता है।
* 4. टीएलडी सर्वर मुख्य सर्वर बताता है।
* 5. मुख्य सर्वर अंतिम आईपी लौटाता है।

---

## 3. टर्मिनल में nslookup चलाएं
* 1. विंडोज़ टर्मिनल में कमांड प्रॉम्प्ट खोलें।
* 2. nslookup के साथ डोमेन नाम लिखें।
* 3. डीएनएस सर्वर डोमेन नाम खोजता है।
* 4. आउटपुट में वेबसाइट का आईपी दिखता।
* 5. इससे नेटवर्क कनेक्शन प्रमाणित होता है।

\`\`\`powershell
nslookup nextsem.online
\`\`\`

---

## 4. प्रमुख डीएनएस रिकॉर्ड्स
* 1. A रिकॉर्ड डोमेन को IPv4 देता।
* 2. AAAA रिकॉर्ड डोमेन को IPv6 देता।
* 3. CNAME रिकॉर्ड उपनाम जोड़ने में सहायक।
* 4. MX रिकॉर्ड ईमेल रूटिंग संभालता है।
* 5. TXT रिकॉर्ड सुरक्षा विवरण सुरक्षित रखता।`,
      pro: `## 1. डीएनएस संरचना और नाम समाधान
* 1. डीएनएस एक वैश्विक वितरित डेटाबेस प्रणाली।
* 2. डोमेन नाम आईपी पते में बदलते।
* 3. पोर्ट 53 पर यूडीपी पैकेट जाते।
* 4. रिकर्सिव रिसॉल्वर रूट सर्वर खोजते हैं।
* 5. वैश्विक कैशे रिस्पॉन्स को तेज़ बनाती।

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DNS Architecture</title>
</head>
<body>
  <h1>DNS Resolution Hierarchy</h1>
  <p>Root servers guide authoritative record queries.</p>
</body>
</html>
\`\`\`

---

## 2. डीएनएस रिज़ॉल्यूशन प्रक्रिया चरण
* 1. रिसॉल्वर स्थानीय ओएस कैशे जांचता है।
* 2. आईएसपी रिसॉल्वर रूट ज़ोन खोजता है।
* 3. रूट सर्वर टीएलडी सर्वर बताता है।
* 4. टीएलडी सर्वर अधिकृत सर्वर बताता है।
* 5. अधिकृत सर्वर अंतिम आईपी प्रदान करता।

---

## 3. nslookup द्वारा नेटवर्क परीक्षण
* 1. Nslookup डीएनएस सर्वर की जांच करता।
* 2. कमांड ए रिकॉर्ड मैपिंग प्रमाणित करती।
* 3. रिस्पॉन्स कैश्ड स्थिति की पुष्टि करता।
* 4. आउटपुट में गंतव्य आईपी दिखता है।
* 5. टूल नाम समाधान समस्या का पता।

\`\`\`powershell
nslookup nextsem.online
\`\`\`

---

## 4. मानक डीएनएस रिकॉर्ड्स
* 1. A रिकॉर्ड 32-बिट IPv4 बताता।
* 2. AAAA रिकॉर्ड 128-बिट IPv6 बताता।
* 3. CNAME मुख्य डोमेन का उपनाम बनाता।
* 4. NS रिकॉर्ड ज़ोन सर्वर परिभाषित करता।
* 5. TTL कैशे की अवधि निर्धारित करता।`
    }
  },
  {
    id: 4,
    slug: "ipv4-vs-ipv6-address-types-tutorial",
    title: "IP Addresses Explained (IPv4 vs. IPv6)",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "Freeman Chapter 2 (p. 29-32)",
    exercise: {
      english: {
        question: "How many bits are in an IPv4 address compared to an IPv6 address?",
        options: [
          "32 bits vs 128 bits",
          "64 bits vs 256 bits",
          "16 bits vs 64 bits",
          "8 bits vs 32 bits"
        ],
        correctAnswer: "32 bits vs 128 bits",
        hint: "IPv4 uses 32 bits (4 octets), while IPv6 uses 128 bits (hexadecimal)."
      },
      hinglish: {
        question: "IPv4 aur IPv6 address me kitne bits hote hain?",
        options: [
          "32 bits vs 128 bits",
          "64 bits vs 256 bits",
          "16 bits vs 64 bits",
          "8 bits vs 32 bits"
        ],
        correctAnswer: "32 bits vs 128 bits",
        hint: "IPv4 32 bits ka hota hai aur IPv6 128 bits ka hota hai."
      },
      hindi: {
        question: "IPv4 पते में IPv6 पते की तुलना में कितने बिट्स होते हैं?",
        options: [
          "32 bits vs 128 bits",
          "64 bits vs 256 bits",
          "16 bits vs 64 bits",
          "8 bits vs 32 bits"
        ],
        correctAnswer: "32 bits vs 128 bits",
        hint: "IPv4 में 32 बिट्स और IPv6 में 128 बिट्स होते हैं।"
      }
    },
    english: {
      kid: `## 1. What is an IP Address?
* 1. Every internet device needs an address.
* 2. IP stands for Internet Protocol address.
* 3. It works like postal home address.
* 4. Packets travel using unique IP addresses.
* 5. Routers direct data to correct destinations.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IP Address Demo</title>
</head>
<body>
  <h1>Internet Protocol Addresses</h1>
  <p>Local IP: 192.168.29.171</p>
</body>
</html>
\`\`\`

---

## 2. IPv4: 32-Bit Dotted Decimal
* 1. IPv4 uses four dotted decimal numbers.
* 2. Format looks like 192.168.1.1 on networks.
* 3. System allows 4.3 billion unique addresses.
* 4. Rapid internet growth depleted IPv4 pool.
* 5. Networks use NAT for address sharing.

---

## 3. IPv6: 128-Bit Hexadecimal
* 1. IPv6 replaces exhausted older IPv4 pools.
* 2. Format uses hexadecimal blocks with colons.
* 3. Provides trillions of new unique addresses.
* 4. Modern routers support dual stack protocols.
* 5. Every smart device gets unique address.

---

## 4. Inspecting Network Configuration with ipconfig
* 1. Windows ipconfig reveals active network settings.
* 2. Open Windows Terminal on your computer.
* 3. Type ipconfig and press Enter key.
* 4. Output reveals local IPv4 and IPv6.
* 5. Default gateway identifies local Wi-Fi router.

\`\`\`powershell
ipconfig
\`\`\``,
      pro: `## 1. Internet Protocol Layer Architecture
* 1. Network layers assign unique logical addresses.
* 2. IP packets encapsulate transport segment payloads.
* 3. Routers inspect headers to forward datagrams.
* 4. Host interfaces bind multiple IP addresses.
* 5. Addressing separates local and public networks.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IP Addressing</title>
</head>
<body>
  <h1>Network Protocol Layer</h1>
  <p>Dotted decimal and hexadecimal addressing modes.</p>
</body>
</html>
\`\`\`

---

## 2. IPv4 Protocol Specification & Subnetting
* 1. IPv4 employs 32-bit structured numeric space.
* 2. Space provides approximately 4.29 billion addresses.
* 3. Subnet masks distinguish network and host.
* 4. RFC 1918 reserves private address ranges.
* 5. NAT enables private local address multiplexing.

---

## 3. IPv6 Protocol Specification & Hexadecimal
* 1. IPv6 defines 128-bit global address space.
* 2. Format provides 340 undecillion possible addresses.
* 3. Eight colon-separated 16-bit hexadecimal groups format.
* 4. Stateless address autoconfiguration simplifies client deployment.
* 5. Dual-stack networking maintains backward compatibility.

---

## 4. Terminal Network Diagnostics via ipconfig
* 1. Ipconfig audits Windows host network parameters.
* 2. Command exposes interface link-local IPv6 addresses.
* 3. Terminal displays assigned private IPv4 addresses.
* 4. Subnet mask defines broadcast boundary limits.
* 5. Default gateway establishes upstream router connectivity.

\`\`\`powershell
ipconfig
\`\`\``
    },
    hinglish: {
      kid: `## 1. IP Address Kya Hota Hai?
* 1. Har internet device ka address hota.
* 2. IP ka matlab Internet Protocol address.
* 3. Ye ghar ke postal address jaisa.
* 4. Data packets IP address se pahunchte.
* 5. Routers data sahi device tak bhejte.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IP Address Demo</title>
</head>
<body>
  <h1>Internet Protocol Addresses</h1>
  <p>Local IP: 192.168.29.171</p>
</body>
</html>
\`\`\`

---

## 2. IPv4 Format (32-Bit)
* 1. IPv4 chaar numbers ka format hota.
* 2. Example: 192.168.1.1 jaisa dikhta hai.
* 3. Isme 4.3 billion addresses bante hain.
* 4. Devices badhne se IPv4 addresses khatam.
* 5. NAT technique se address share hota.

---

## 3. IPv6 Format (128-Bit)
* 1. IPv6 naya aur super-sized format hai.
* 2. Isme letters aur colons use hote.
* 3. Ye trillions of new addresses deta.
* 4. Sabhi modern devices IPv6 support karte.
* 5. Har smart device ko unique address.

---

## 4. ipconfig Se Network Settings Dekhein
* 1. ipconfig Windows network details show karta.
* 2. Windows Terminal me command prompt kholein.
* 3. ipconfig type karke Enter press karein.
* 4. Local IPv4 aur IPv6 addresses dikhte.
* 5. Default gateway aapka Wi-Fi router hota.

\`\`\`powershell
ipconfig
\`\`\``,
      pro: `## 1. Network Layer IP Architecture
* 1. IP protocol unique logical addresses assign karta.
* 2. Packets transport layer segments encapsulate karte.
* 3. Routers IP headers inspect karke forward.
* 4. Host interfaces multiple IPs bind karti.
* 5. Network private aur public addresses differentiate.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IP Addressing</title>
</head>
<body>
  <h1>Network Protocol Layer</h1>
  <p>Dotted decimal and hexadecimal addressing modes.</p>
</body>
</html>
\`\`\`

---

## 2. IPv4 Architecture & Subnetting
* 1. IPv4 32-bit address space provide karta.
* 2. Total 4.29 billion addresses create hote.
* 3. Subnet mask network boundaries define karta.
* 4. RFC 1918 private IP ranges allot.
* 5. NAT protocol IP conservation manage karta.

---

## 3. IPv6 Architecture & Address Space
* 1. IPv6 128-bit massive address space banata.
* 2. Hexadecimal notation 8 blocks me split.
* 3. Trillions of connected devices easily support.
* 4. Auto-configuration network setup bahut smooth karta.
* 5. Dual-stack systems parallel protocols run karte.

---

## 4. Diagnostics via ipconfig
* 1. Ipconfig active network adapter interfaces inspect.
* 2. Command host private IPv4 address reveal.
* 3. Output assigned IPv6 global prefixes expose.
* 4. Subnet mask local subnet scope define.
* 5. Gateway address upstream routing hop identify.

\`\`\`powershell
ipconfig
\`\`\``
    },
    hindi: {
      kid: `## 1. आईपी एड्रेस क्या है?
* 1. प्रत्येक इंटरनेट उपकरण का पता होता।
* 2. आईपी का अर्थ इंटरनेट प्रोटोकॉल एड्रेस।
* 3. यह घर के डाक पते जैसा।
* 4. डेटा पैकेट आईपी पते से पहुंचते।
* 5. राउटर डेटा को सही जगह भेजते।

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IP Address Demo</title>
</head>
<body>
  <h1>Internet Protocol Addresses</h1>
  <p>Local IP: 192.168.29.171</p>
</body>
</html>
\`\`\`

---

## 2. IPv4 प्रारूप (32-बिट)
* 1. IPv4 चार दशमलव संख्याओं का समूह।
* 2. उदाहरण: 192.168.1.1 जैसा दिखाई देता है।
* 3. इसमें 4.3 अरब विशिष्ट पते संभव।
* 4. उपकरणों की संख्या बढ़ने से यह समाप्त।
* 5. नैट तकनीक द्वारा पते साझा होते।

---

## 3. IPv6 प्रारूप (128-बिट)
* 1. IPv6 नया और बहुत बड़ा प्रारूप।
* 2. इसमें हेक्साडेसिमल और कोलन प्रयुक्त होते।
* 3. यह खरबों नए पते प्रदान करता।
* 4. आधुनिक राउटर दोनों प्रारूप सपोर्ट करते।
* 5. प्रत्येक स्मार्ट उपकरण को विशिष्ट पता।

---

## 4. ipconfig से नेटवर्क सेटिंग्स देखें
* 1. ipconfig नेटवर्क विवरण प्रदर्शित करता है।
* 2. विंडोज़ टर्मिनल में कमांड प्रॉम्प्ट खोलें।
* 3. ipconfig टाइप करके एंटर बटन दबाएं।
* 4. लोकल IPv4 और IPv6 पते दिखते।
* 5. डिफ़ॉल्ट गेटवे आपका वाई-फ़ाई राउटर है।

\`\`\`powershell
ipconfig
\`\`\``,
      pro: `## 1. नेटवर्क लेयर आईपी संरचना
* 1. आईपी नेटवर्क लेयर पर पते देता।
* 2. पैकेट ट्रांसपोर्ट सेगमेंट्स को सुरक्षित रखते।
* 3. राउटर हेडर पढ़कर डेटा फॉरवर्ड करते।
* 4. इंटरफेस कई आईपी पते संभाल सकता।
* 5. नेटवर्क निजी और सार्वजनिक पते बांटता।

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>IP Addressing</title>
</head>
<body>
  <h1>Network Protocol Layer</h1>
  <p>Dotted decimal and hexadecimal addressing modes.</p>
</body>
</html>
\`\`\`

---

## 2. IPv4 विनिर्देश एवं सबनेटिंग
* 1. IPv4 32-बिट संख्यात्मक पता प्रदान करता।
* 2. इसमें 4.29 अरब पते उपलब्ध हैं।
* 3. सबनेट मास्क नेटवर्क भाग अलग करता।
* 4. RFC 1918 निजी पते सुरक्षित रखता।
* 5. NAT तकनीक निजी पते साझा करती।

---

## 3. IPv6 विनिर्देश एवं हेक्साडेसिमल
* 1. IPv6 128-बिट बड़ा पता स्पेस देता।
* 2. हेक्साडेसिमल ब्लॉक कोलन द्वारा विभाजित होते।
* 3. यह खरबों नई डिवाइसों को जोड़ता।
* 4. स्वतः विन्यास नेटवर्क सेटअप आसान बनाता।
* 5. डुअल-स्टैक दोनों प्रोटोकॉल साथ चलाता है।

---

## 4. ipconfig द्वारा नेटवर्क परीक्षण
* 1. Ipconfig नेटवर्क पैरामीटर की जांच करता।
* 2. कमांड निजी IPv4 पता प्रदर्शित करती।
* 3. आउटपुट लिंक-लोकल IPv6 पता दिखाता।
* 4. सबनेट मास्क प्रसारण सीमा तय करता।
* 5. डिफ़ॉल्ट गेटवे राउटर से जोड़ता है।

\`\`\`powershell
ipconfig
\`\`\``
    }
  },
  {
    id: 5,
    slug: "tcp-ip-3-way-handshake-process",
    title: "TCP/IP 3-Way Handshake",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "Freeman Chapter 2 (p. 33-35)",
    exercise: {
      english: {
        question: "What is the correct sequence of packets in a TCP 3-Way Handshake?",
        options: [
          "SYN -> SYN-ACK -> ACK",
          "ACK -> SYN -> FIN",
          "GET -> POST -> RESPOND",
          "HELLO -> ACK -> DATA"
        ],
        correctAnswer: "SYN -> SYN-ACK -> ACK",
        hint: "Remember: Synchronize (SYN), Synchronize-Acknowledge (SYN-ACK), Acknowledge (ACK)."
      },
      hinglish: {
        question: "TCP 3-Way Handshake me packets ka sahi sequence kya hai?",
        options: [
          "SYN -> SYN-ACK -> ACK",
          "ACK -> SYN -> FIN",
          "GET -> POST -> RESPOND",
          "HELLO -> ACK -> DATA"
        ],
        correctAnswer: "SYN -> SYN-ACK -> ACK",
        hint: "Pehle SYN, fir SYN-ACK, aur aakhir me ACK."
      },
      hindi: {
        question: "टीसीपी 3-वे हैंडशेक में पैकेटों का सही क्रम क्या है?",
        options: [
          "SYN -> SYN-ACK -> ACK",
          "ACK -> SYN -> FIN",
          "GET -> POST -> RESPOND",
          "HELLO -> ACK -> DATA"
        ],
        correctAnswer: "SYN -> SYN-ACK -> ACK",
        hint: "पहले SYN, फिर SYN-ACK, और अंत में ACK आता है।"
      }
    },
    english: {
      kid: `## 1. What is Transmission Control Protocol?
* 1. TCP ensures reliable internet data delivery.
* 2. Data divides into numbered smaller packets.
* 3. Lost packets retransmit automatically until received.
* 4. Packets reassemble in perfect sequential order.
* 5. Web browsers rely on TCP streams.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TCP Handshake Demo</title>
</head>
<body>
  <h1>TCP Connection Established</h1>
  <p>Data streams securely over port 443.</p>
</body>
</html>
\`\`\`

---

## 2. The 3-Way Handshake Steps
* 1. Client sends SYN synchronize packet first.
* 2. Server replies with SYN-ACK acknowledgment packet.
* 3. Client confirms with final ACK packet.
* 4. Three steps establish secure socket connection.
* 5. Data transmission begins after handshake completes.

---

## 3. Why the Handshake Matters
* 1. Handshake prevents duplicate connection request confusion.
* 2. Both sides agree on sequence numbers.
* 3. Connection verifies server is truly listening.
* 4. Sockets allocate memory for incoming streams.
* 5. Unreachable servers fail before sending data.

---

## 4. Testing Port 443 with Test-NetConnection
* 1. PowerShell tests specific server TCP ports.
* 2. Test-NetConnection connects to port 443 safely.
* 3. Tool performs full TCP 3-way handshake.
* 4. TcpTestSucceeded confirms successful network socket setup.
* 5. Remote address verifies connected cloud server.

\`\`\`powershell
Test-NetConnection nextsem.online -Port 443
\`\`\``,
      pro: `## 1. Transport Layer TCP Protocol Architecture
* 1. TCP operates as connection-oriented transport protocol.
* 2. Protocol guarantees in-order byte stream transmission.
* 3. Flow control mechanisms prevent client buffer overflow.
* 4. Checksums verify packet header and payload integrity.
* 5. Retransmission timers resolve lost network segments.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TCP Handshake</title>
</head>
<body>
  <h1>Socket Stream Established</h1>
  <p>SYN-ACK sequence verified over TCP.</p>
</body>
</html>
\`\`\`

---

## 2. Formal 3-Way Handshake State Transitions
* 1. Client sends SYN with random sequence A.
* 2. Client transitions to SYN-SENT socket state.
* 3. Server responds SYN-ACK with sequence B.
* 4. Server acknowledges client sequence with A+1.
* 5. Client returns ACK B+1 establishing ESTABLISHED.

---

## 3. Socket Lifecycle & Flow Control
* 1. Handshake synchronizes sender and receiver windows.
* 2. Sliding window algorithms optimize transfer throughput.
* 3. Sockets bind local ephemeral client ports.
* 4. Keepalive probes monitor dormant TCP connections.
* 5. Four-way FIN exchange gracefully terminates sockets.

---

## 4. Windows Socket Diagnostics via Test-NetConnection
* 1. Test-NetConnection probes remote TCP endpoint ports.
* 2. Parameter -Port 443 targets HTTPS listener.
* 3. Command verifies complete 3-way handshake execution.
* 4. TcpTestSucceeded True confirms transport socket readiness.
* 5. Output displays active source network adapter.

\`\`\`powershell
Test-NetConnection nextsem.online -Port 443
\`\`\``
    },
    hinglish: {
      kid: `## 1. TCP Protocol Kya Hota Hai?
* 1. TCP data ko reliably deliver karta.
* 2. Bada data chhote packets me bat-ta.
* 3. Lost packets automatically dubara send hote.
* 4. Packets sahi sequential order me judte.
* 5. Browsers TCP streams par depend karte.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TCP Handshake Demo</title>
</head>
<body>
  <h1>TCP Connection Established</h1>
  <p>Data streams securely over port 443.</p>
</body>
</html>
\`\`\`

---

## 2. 3-Way Handshake Ke Steps
* 1. Client pehle SYN packet bhejta hai.
* 2. Server SYN-ACK acknowledgment reply bhejta hai.
* 3. Client aakhir me ACK bhejta hai.
* 4. Teen steps me connection establish hota.
* 5. Handshake ke baad data transfer shuru.

---

## 3. Handshake Kyun Zaroori Hai?
* 1. Ye duplicate packets se confusion rokta.
* 2. Dono computers sequence numbers decide karte.
* 3. Connection confirm karta ki server active hai.
* 4. Sockets incoming data ke liye prepare hote.
* 5. Offline server turant error de deta.

---

## 4. Test-NetConnection Se Port 443 Check Karein
* 1. PowerShell server TCP ports test karta.
* 2. Test-NetConnection 443 port connect karta.
* 3. Tool pura TCP handshake perform karta.
* 4. TcpTestSucceeded True aane par connection OK.
* 5. Remote address cloud server confirm karta.

\`\`\`powershell
Test-NetConnection nextsem.online -Port 443
\`\`\``,
      pro: `## 1. Transport Layer TCP Architecture
* 1. TCP connection-oriented byte stream protocol hai.
* 2. Protocol guaranteed in-order packet delivery ensure.
* 3. Flow control algorithms buffer congestion prevent.
* 4. Checksums packet headers integrity verify karte.
* 5. Retransmission timers lost segment recovery handle.

---

## 2. 3-Way Handshake Socket State Machine
* 1. Client SYN packet sequence number A transmit.
* 2. Client socket state SYN-SENT switch karta.
* 3. Server SYN-ACK packet sequence B respond.
* 4. Server client sequence acknowledgment A+1 assign.
* 5. Client ACK B+1 transmit karke ESTABLISHED.

---

## 3. Socket Management & Flow Control
* 1. Handshake TCP window size synchronize karta.
* 2. Sliding window throughput maximize karne me madad.
* 3. Operating system ephemeral client port allot.
* 4. TCP keepalive probes connection alive rakhte.
* 5. FIN handshake gracefully socket terminate karta.

---

## 4. PowerShell Port Diagnostics
* 1. Test-NetConnection remote server TCP socket audit.
* 2. Parameter -Port 443 HTTPS socket probe.
* 3. Command 3-way handshake success measure.
* 4. TcpTestSucceeded True socket connectivity confirm.
* 5. Interface details source adapter binding verify.

\`\`\`powershell
Test-NetConnection nextsem.online -Port 443
\`\`\``
    },
    hindi: {
      kid: `## 1. टीसीपी (TCP) प्रोटोकॉल क्या है?
* 1. टीसीपी सुरक्षित डेटा ट्रांसफर सुनिश्चित करता।
* 2. डेटा छोटे क्रमबद्ध पैकेटों में बंटता।
* 3. छूटे हुए पैकेट दोबारा भेजे जाते।
* 4. पैकेट सही क्रम में पुनः जुड़ते।
* 5. ब्राउज़र टीसीपी कनेक्शन पर निर्भर रहते।

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TCP Handshake Demo</title>
</head>
<body>
  <h1>TCP Connection Established</h1>
  <p>Data streams securely over port 443.</p>
</body>
</html>
\`\`\`

---

## 2. 3-वे हैंडशेक के चरण
* 1. क्लाइंट पहले SYN पैकेट भेजता है।
* 2. सर्वर SYN-ACK पैकेट से उत्तर देता।
* 3. क्लाइंट अंत में ACK भेजता है।
* 4. तीन चरणों में सुरक्षित सॉकेट बनता।
* 5. हैंडशेक पूरा होने पर डेटा बहता।

---

## 3. हैंडशेक क्यों आवश्यक है?
* 1. यह गलत कनेक्शन अनुरोधों को रोकता।
* 2. दोनों कंप्यूटर क्रम संख्या तय करते।
* 3. यह सुनिश्चित करता कि सर्वर सक्रिय।
* 4. सॉकेट मेमोरी डेटा के लिए तैयार।
* 5. निष्क्रिय सर्वर तुरंत त्रुटि दे देता।

---

## 4. Test-NetConnection से पोर्ट 443 जांचें
* 1. पॉवरशेल सर्वर टीसीपी पोर्ट जांचता है।
* 2. Test-NetConnection पोर्ट 443 से जुड़ता है।
* 3. टूल पूरा 3-वे हैंडशेक चलाता है।
* 4. TcpTestSucceeded True सफल सॉकेट दर्शाता है।
* 5. रिमोट एड्रेस क्लाउड सर्वर प्रमाणित करता।

\`\`\`powershell
Test-NetConnection nextsem.online -Port 443
\`\`\``,
      pro: `## 1. ट्रांसपोर्ट लेयर टीसीपी संरचना
* 1. टीसीपी कनेक्शन-उन्मुख ट्रांसपोर्ट प्रोटोकॉल है।
* 2. यह डेटा का सही क्रम सुनिश्चित।
* 3. फ्लो कंट्रोल बफर ओवरफ्लो को रोकता।
* 4. चेकसम डेटा की अखंडता प्रमाणित करते।
* 5. टाइमर खोए हुए पैकेट दोबारा भेजते।

---

## 2. 3-वे हैंडशेक स्टेट मशीन
* 1. क्लाइंट अनुक्रम संख्या A से SYN भेजता।
* 2. सॉकेट स्थिति SYN-SENT में बदलती है।
* 3. सर्वर अनुक्रम B से SYN-ACK लौटाता।
* 4. सर्वर क्लाइंट अनुक्रम A+1 स्वीकार करता।
* 5. क्लाइंट ACK B+1 भेजकर ESTABLISHED करता।

---

## 3. सॉकेट प्रबंधन एवं फ्लो कंट्रोल
* 1. हैंडशेक टीसीपी विंडो साइज सिंक करता।
* 2. स्लाइडिंग विंडो नेटवर्क थ्रूपुट को बढ़ाती।
* 3. ऑपरेटिंग सिस्टम लोकल क्लाइंट पोर्ट जोड़ता।
* 4. कीपअलाइव सिग्नल कनेक्शन बनाए रखते हैं।
* 5. FIN प्रक्रिया सॉकेट को सुरक्षित बंद।

---

## 4. पॉवरशेल द्वारा पोर्ट डायग्नोस्टिक्स
* 1. Test-NetConnection रिमोट पोर्ट की जांच करता।
* 2. -Port 443 पैरामीटर HTTPS जांचता है।
* 3. कमांड 3-वे हैंडशेक निष्पादित करती।
* 4. TcpTestSucceeded True सॉकेट कनेक्टिविटी प्रमाणित।
* 5. आउटपुट सक्रिय नेटवर्क इंटरफेस दिखाता है।

\`\`\`powershell
Test-NetConnection nextsem.online -Port 443
\`\`\``
    }
  },
  {
    id: 6,
    slug: "anatomy-of-http-request-headers-verbs",
    title: "Anatomy of an HTTP Request",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "Freeman Chapter 3 (p. 40-44)",
    exercise: {
      english: {
        question: "Which HTTP verb/method is used to retrieve data from a server?",
        options: [
          "PUT",
          "GET",
          "DELETE",
          "POST",
        ],
        correctAnswer: "GET",
        hint: "When you want to 'get' a webpage, you use the GET method!"
      },
      hinglish: {
        question: "Server se webpage data laane ke liye kaun sa HTTP method use hota hai?",
        options: [
          "PUT",
          "GET",
          "DELETE",
          "POST",
        ],
        correctAnswer: "GET",
        hint: "Browser jab server se page maangta hai to GET method se request bhejta hai."
      },
      hindi: {
        question: "Server se webpage data praapt karne ke liye kaun sa HTTP method upayog kiya jaata hai?",
        options: [
          "PUT",
          "GET",
          "DELETE",
          "POST"
        ],
        correctAnswer: "GET",
        hint: "Jab browser webpage mangwata hai to GET vidhi ka upayog hota hai."
      }
    },
    english: {
      kid: `## 1. The HTTP Request Line & Verbs
* 1. Browsers send HTTP requests to servers.
* 2. Requests start with action verbs like GET.
* 3. Request paths target specific website documents.
* 4. Protocol version specifies HTTP standard used.
* 5. Servers process request verbs to return content.

\`\`\`http
GET /index.html HTTP/1.1
Host: 127.0.0.1:5500
User-Agent: Mozilla/5.0 (Windows 11)
Accept: text/html
Connection: keep-alive
\`\`\`

---

## 2. Inspecting HTTP Requests in Chrome DevTools
![Google Chrome DevTools Network Tab HTTP Headers Inspection](/screenshots/html/lesson6_chrome_devtools_network_headers.png)
* 1. Press F12 to open Chrome DevTools.
* 2. Select Network tab from top bar.
* 3. Reload page to capture active requests.
* 4. Click index.html to view Request Headers.
* 5. Panel displays method, status, and headers.

---

## 3. Inspecting Server Response Headers with curl.exe
![Inspecting HTTP Response Headers using curl.exe](/screenshots/html/lesson6_curl_http_headers.png)
* 1. Curl fetches raw headers in terminal.
* 2. Flag -I requests header data only.
* 3. Server returns status HTTP 200 OK.
* 4. Content-Type verifies text/html document transfer.
* 5. Headers report server caching and compression.

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. Essential HTTP Verbs Reference
* 1. GET requests and retrieves web documents.
* 2. POST submits new form and data.
* 3. PUT replaces existing server resources completely.
* 4. PATCH applies partial modifications to data.
* 5. DELETE removes targeted resources from server.`,
      pro: `## 1. HTTP Request Architecture & Wire Protocol
* 1. Clients dispatch structured HTTP request envelopes.
* 2. Request line declares method, URI, and protocol.
* 3. Headers carry user-agent, authorization, and caching rules.
* 4. Body payload carries serialized form or JSON.
* 5. TCP sockets transmit byte streams over port 443.

\`\`\`http
GET /index.html HTTP/1.1
Host: 127.0.0.1:5500
User-Agent: Mozilla/5.0 (Windows 11)
Accept: text/html,application/xhtml+xml
Connection: keep-alive
\`\`\`

---

## 2. Real-Time Network Inspection in Chrome DevTools
![Google Chrome DevTools Network Tab HTTP Headers Inspection](/screenshots/html/lesson6_chrome_devtools_network_headers.png)
* 1. DevTools Network profiler captures HTTP lifecycles.
* 2. Headers tab exposes General request parameters.
* 3. Request headers confirm client accept encoding standards.
* 4. Response headers reveal server cache tags and timestamps.
* 5. Status 304 confirms browser cached content validation.

---

## 3. Command-Line HTTP Header Probing via curl.exe
![Inspecting HTTP Response Headers using curl.exe](/screenshots/html/lesson6_curl_http_headers.png)
* 1. Curl performs direct HTTP protocol diagnostics.
* 2. Parameter -I sends HEAD request for headers.
* 3. Header returns HTTP/1.1 200 OK verification.
* 4. Strict-Transport-Security enforces HTTPS encrypted channels.
* 5. Edge CDN reports cache HIT confirmation status.

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. Standard RESTful HTTP Methods Specification
* 1. GET initiates idempotent safe data retrieval.
* 2. POST submits state-changing payload mutations.
* 3. PUT replaces target resource representation idempotently.
* 4. PATCH modifies specific fields of existing entity.
* 5. DELETE purges designated entity from backend storage.`
    },
    hinglish: {
      kid: `## 1. HTTP Request Kya Hoti Hai?
* 1. Browser server ko HTTP request bhejta.
* 2. Request me GET jaise verbs hote.
* 3. Request path se page select hota.
* 4. Headers browser ki language details batate.
* 5. Server request padhkar HTML file bhejta.

\`\`\`http
GET /index.html HTTP/1.1
Host: 127.0.0.1:5500
User-Agent: Mozilla/5.0 (Windows 11)
Accept: text/html
Connection: keep-alive
\`\`\`

---

## 2. Chrome DevTools Me Request Check Karein
![Google Chrome DevTools Network Tab HTTP Headers Inspection](/screenshots/html/lesson6_chrome_devtools_network_headers.png)
* 1. Chrome me F12 dabakar DevTools kholein.
* 2. Top bar se Network tab select karein.
* 3. Page refresh karke requests list dekhein.
* 4. index.html par click karke Headers kholein.
* 5. Yahan method, status aur headers dikhte.

---

## 3. Terminal Me curl.exe Se Headers Dekhein
![Inspecting HTTP Response Headers using curl.exe](/screenshots/html/lesson6_curl_http_headers.png)
* 1. Terminal me curl command chalayein.
* 2. Flag -I se sirf headers aate.
* 3. Server HTTP 200 OK reply deta.
* 4. Content-Type se text/html verify hota.
* 5. Caching aur security headers saaf dikhte.

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. Zaroori HTTP Methods
* 1. GET server se page maangta hai.
* 2. POST naya form data submit karta.
* 3. PUT puraane data ko completely badalta.
* 4. PATCH thoda sa data update karta.
* 5. DELETE server se resource delete karta.`,
      pro: `## 1. HTTP Request Architecture & Wire Protocol
* 1. Client structured HTTP request packet banata hai.
* 2. Request line verb, URI aur protocol specify karta.
* 3. Request headers metadata client configuration transmit karte.
* 4. Request body data form submission deliver karta.
* 5. TCP socket connection stream par data travel karta.

\`\`\`http
GET /index.html HTTP/1.1
Host: 127.0.0.1:5500
User-Agent: Mozilla/5.0 (Windows 11)
Accept: text/html,application/xhtml+xml
Connection: keep-alive
\`\`\`

---

## 2. Real-Time Network Inspection in Chrome DevTools
![Google Chrome DevTools Network Tab HTTP Headers Inspection](/screenshots/html/lesson6_chrome_devtools_network_headers.png)
* 1. DevTools Network profiler HTTP requests track karta.
* 2. Headers tab General parameters display karta.
* 3. Request headers encoding standards verify karte.
* 4. Response headers server cache metadata show karte.
* 5. Status 304 browser cache validation confirm karta.

---

## 3. Command-Line HTTP Header Probing via curl.exe
![Inspecting HTTP Response Headers using curl.exe](/screenshots/html/lesson6_curl_http_headers.png)
* 1. Curl tool HTTP protocol test karta hai.
* 2. -I flag HEAD request dispatch karta.
* 3. Header HTTP/1.1 200 OK return karta.
* 4. Strict-Transport-Security HTTPS safety enforce karta hai.
* 5. CDN headers cache HIT metrics report karte.

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. Standard RESTful HTTP Methods
* 1. GET idempotent safe resource retrieval karta.
* 2. POST server par data insert karta hai.
* 3. PUT resource ko completely replace karta.
* 4. PATCH resource me partial edits karta.
* 5. DELETE target resource server se hata deta.`
    },
    hindi: {
      kid: `## 1. HTTP अनुरोध (Request) क्या है?
* 1. ब्राउज़र सर्वर को HTTP अनुरोध भेजता है।
* 2. अनुरोध में GET जैसी क्रियाएं होती हैं।
* 3. पाथ से विशिष्ट फ़ाइल चुनी जाती है।
* 4. हेडर ब्राउज़र की जानकारी भेजते हैं।
* 5. सर्वर अनुरोध स्वीकार कर फ़ाइल भेजता है।

\`\`\`http
GET /index.html HTTP/1.1
Host: 127.0.0.1:5500
User-Agent: Mozilla/5.0 (Windows 11)
Accept: text/html
Connection: keep-alive
\`\`\`

---

## 2. क्रोम DevTools में अनुरोध की जांच करें
![Google Chrome DevTools Network Tab HTTP Headers Inspection](/screenshots/html/lesson6_chrome_devtools_network_headers.png)
* 1. क्रोम में F12 दबाकर DevTools खोलें।
* 2. ऊपर से Network टैब चुनें।
* 3. पेज रीलोड कर सक्रिय अनुरोध देखें।
* 4. index.html पर क्लिक कर हेडर देखें।
* 5. यहां विधि, स्थिति और हेडर दिखते।

---

## 3. टर्मिनल में curl.exe से हेडर देखें
![Inspecting HTTP Response Headers using curl.exe](/screenshots/html/lesson6_curl_http_headers.png)
* 1. टर्मिनल में curl कमांड चलाएं।
* 2. फ्लैग -I से केवल हेडर आते।
* 3. सर्वर HTTP 200 OK उत्तर देता।
* 4. Content-Type से text/html प्रमाणित होता।
* 5. कैशिंग और सुरक्षा विवरण प्रदर्शित होते।

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. प्रमुख HTTP विधियां (Verbs)
* 1. GET सर्वर से पृष्ठ मंगाता है।
* 2. POST नया फॉर्म डेटा भेजता है।
* 3. PUT मौजूदा डेटा पूरी तरह बदलता।
* 4. PATCH आंशिक जानकारी अपडेट करता है।
* 5. DELETE सर्वर से फ़ाइल हटाता है।`,
      pro: `## 1. HTTP अनुरोध संरचना एवं प्रोटोकॉल
* 1. क्लाइंट संरचित HTTP अनुरोध पैकेट बनाता है।
* 2. रिक्वेस्ट लाइन वर्ब और पाथ बताती।
* 3. हेडर क्लाइंट विवरण सर्वर तक पहुंचाते।
* 4. बॉडी में फॉर्म डेटा भेजा जाता है।
* 5. टीसीपी सॉकेट पर डेटा स्ट्रीम चलता।

\`\`\`http
GET /index.html HTTP/1.1
Host: 127.0.0.1:5500
User-Agent: Mozilla/5.0 (Windows 11)
Accept: text/html,application/xhtml+xml
Connection: keep-alive
\`\`\`

---

## 2. क्रोम DevTools में नेटवर्क निरीक्षण
![Google Chrome DevTools Network Tab HTTP Headers Inspection](/screenshots/html/lesson6_chrome_devtools_network_headers.png)
* 1. DevTools नेटवर्क टैब अनुरोधों को रिकॉर्ड करता।
* 2. हेडर टैब सामान्य विवरण दिखाता है।
* 3. अनुरोध हेडर एनकोडिंग मानक सत्यापित करते हैं।
* 4. रिस्पॉन्स हेडर कैश मेटाडेटा दिखाते हैं।
* 5. स्थिति 304 कैश सत्यापन प्रमाणित करती है।

---

## 3. कमांड-लाइन द्वारा HTTP हेडर की जांच
![Inspecting HTTP Response Headers using curl.exe](/screenshots/html/lesson6_curl_http_headers.png)
* 1. Curl नेटवर्क प्रोटोकॉल की जांच करता।
* 2. पैरामीटर -I केवल हेडर मंगवाता है।
* 3. हेडर HTTP 200 OK उत्तर देता।
* 4. HSTS एन्क्रिप्टेड सुरक्षा लागू करता है।
* 5. CDN हेडर कैश स्थिति रिपोर्ट करते।

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. मानक RESTful HTTP विधियां
* 1. GET सुरक्षित डेटा निष्कर्षण करता है।
* 2. POST सर्वर पर डेटा जोड़ता है।
* 3. PUT संसाधन को पूरी तरह प्रतिस्थापित करता।
* 4. PATCH संसाधन में आंशिक सुधार करता।
* 5. DELETE संसाधन को सर्वर से हटाता।`
    }
  },
  {
    id: 7,
    slug: "http-response-status-codes-explained",
    title: "Anatomy of an HTTP Response",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "Freeman Chapter 3 (p. 45-50)",
    exercise: {
      english: {
        question: "Which HTTP status code signifies a successful request and delivery of the webpage?",
        options: [
          "200 OK",
          "304 Not Modified",
          "404 Not Found",
          "500 Internal Server Error"
        ],
        correctAnswer: "200 OK",
        hint: "Status code 200 indicates standard success in the HTTP protocol."
      },
      hinglish: {
        question: "Kaun sa HTTP status code batata hai ki webpage request successfully deliver ho gayi?",
        options: [
          "200 OK",
          "304 Not Modified",
          "404 Not Found",
          "500 Internal Server Error"
        ],
        correctAnswer: "200 OK",
        hint: "200 OK standard HTTP success code hota hai."
      },
      hindi: {
        question: "वेबपेज के सफल अनुरोध और वितरण को कौन सा HTTP स्टेटस कोड दर्शाता है?",
        options: [
          "200 OK",
          "304 Not Modified",
          "404 Not Found",
          "500 Internal Server Error"
        ],
        correctAnswer: "200 OK",
        hint: "200 OK मानक HTTP सफलता कोड है।"
      }
    },
    english: {
      kid: `## 1. The HTTP Response Structure
* 1. Servers send responses back to browsers.
* 2. Status lines report success or error.
* 3. Response headers explain the document type.
* 4. Response body delivers actual HTML code.
* 5. Browsers render HTML into visible web.

\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1250
Date: Sun, 13 Sep 2026 15:31:43 GMT

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Response Demo</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
\`\`\`

---

## 2. Inspecting Response Headers in Chrome DevTools
![Google Chrome DevTools Network Tab HTTP Response Headers](/screenshots/html/lesson7_chrome_devtools_response_headers.png)
* 1. Open DevTools with shortcut key F12.
* 2. Open Network tab and refresh page.
* 3. Status 304 confirms cached webpage copy.
* 4. Response headers show date and cache.
* 5. Left window displays rendered HTML body.

---

## 3. Inspecting HTTP 200 OK via curl.exe
![Inspecting HTTP 200 OK Response Headers using curl.exe](/screenshots/html/lesson7_curl_response_200.png)
* 1. Curl tool displays server response headers.
* 2. Flag -I fetches header data only.
* 3. Status 200 OK confirms successful delivery.
* 4. Content-Type verifies UTF-8 HTML document encoding.
* 5. Server headers describe edge caching state.

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. Essential HTTP Status Codes Reference
* 1. 200 OK means request succeeded completely.
* 2. 304 Not Modified serves cached files.
* 3. 400 Bad Request indicates malformed query.
* 4. 404 Not Found marks missing files.
* 5. 500 Internal Error signals server crash.`,
      pro: `## 1. HTTP Response Protocol Architecture
* 1. HTTP responses deliver protocol status packets.
* 2. Status lines declare protocol version codes.
* 3. Headers transfer payload metadata and policies.
* 4. Response body transmits raw document bytes.
* 5. Browsers parse HTML bytes into DOM.

\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1250
Cache-Control: public, max-age=0
Date: Sun, 13 Sep 2026 15:31:43 GMT

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Response Demo</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
\`\`\`

---

## 2. Chrome DevTools Network Response Inspection
![Google Chrome DevTools Network Tab HTTP Response Headers](/screenshots/html/lesson7_chrome_devtools_response_headers.png)
* 1. DevTools Network profiler captures response headers.
* 2. Status 304 validates browser local cache.
* 3. ETag header confirms matching file fingerprint.
* 4. Cache-Control dictates client storage longevity rules.
* 5. Rendered DOM viewport reflects transmitted markup.

---

## 3. Command-Line Diagnostics via curl.exe
![Inspecting HTTP 200 OK Response Headers using curl.exe](/screenshots/html/lesson7_curl_response_200.png)
* 1. Curl inspects HTTP transport response headers.
* 2. Flag -I executes HEAD method request.
* 3. Protocol status returns HTTP/1.1 200 OK.
* 4. Content-Type guarantees text/html charset utf-8 payload.
* 5. Header X-Cache reveals edge CDN hit.

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. Standard HTTP Status Code Categories
* 1. 2xx status class indicates successful transactions.
* 2. 3xx status class governs client redirection.
* 3. 304 Not Modified optimizes bandwidth consumption.
* 4. 4xx status class denotes client-side failures.
* 5. 5xx status class specifies server-side exceptions.`
    },
    hinglish: {
      kid: `## 1. HTTP Response Kya Hota Hai?
* 1. Server browser ko HTTP response bhejta.
* 2. Status line success ya error batati.
* 3. Response headers file type describe karte.
* 4. Response body me HTML code hota.
* 5. Browser HTML ko visually display karta.

\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1250
Date: Sun, 13 Sep 2026 15:31:43 GMT

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Response Demo</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
\`\`\`

---

## 2. Chrome DevTools Me Response Dekhein
![Google Chrome DevTools Network Tab HTTP Response Headers](/screenshots/html/lesson7_chrome_devtools_response_headers.png)
* 1. F12 dabakar Chrome DevTools kholein.
* 2. Network tab me page refresh karein.
* 3. Status 304 cached webpage verify karta.
* 4. Response headers date aur cache batate.
* 5. Left side par HTML render hota.

---

## 3. Terminal Me HTTP 200 Check Karein
![Inspecting HTTP 200 OK Response Headers using curl.exe](/screenshots/html/lesson7_curl_response_200.png)
* 1. Curl tool se response headers dekhein.
* 2. -I flag sirf headers fetch karta.
* 3. Status 200 OK successful reply hai.
* 4. Content-Type text/html format confirm karta hai.
* 5. Server cache aur connection details milti.

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. Zaroori HTTP Status Codes
* 1. 200 OK matlab request safal hui.
* 2. 304 Not Modified cached file deta.
* 3. 400 Bad Request galat syntax batata.
* 4. 404 Not Found missing file batata.
* 5. 500 Internal Error server problem batata.`,
      pro: `## 1. HTTP Response Protocol Structure
* 1. HTTP response packets status line bhejte.
* 2. Status line protocol version return karti.
* 3. Headers transfer metadata aur caching policies.
* 4. Response body HTML byte streams deliver karta.
* 5. Browser engine bytes se DOM banata.

\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1250
Cache-Control: public, max-age=0
Date: Sun, 13 Sep 2026 15:31:43 GMT

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Response Demo</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
\`\`\`

---

## 2. Chrome DevTools Network Inspection
![Google Chrome DevTools Network Tab HTTP Response Headers](/screenshots/html/lesson7_chrome_devtools_response_headers.png)
* 1. DevTools Network profiler headers capture karta.
* 2. Status 304 browser cache validate karta.
* 3. ETag header file hash verify karta.
* 4. Cache-Control browser caching rules control karta.
* 5. Rendered DOM window markup show karta.

---

## 3. Command-Line Diagnostics via curl.exe
![Inspecting HTTP 200 OK Response Headers using curl.exe](/screenshots/html/lesson7_curl_response_200.png)
* 1. Curl transport headers inspect karta hai.
* 2. -I flag HEAD method execute karta.
* 3. Protocol status HTTP/1.1 200 OK milta.
* 4. Content-Type payload text/html charset verify karta.
* 5. X-Cache header CDN hit report karta.

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. HTTP Status Code Categories
* 1. 2xx series successful requests represent karti.
* 2. 3xx series redirection aur caching sambhalti.
* 3. 304 Not Modified bandwidth save karta.
* 4. 4xx series client-side mistakes report karti.
* 5. 5xx series server failure explain karti.`
    },
    hindi: {
      kid: `## 1. HTTP प्रतिक्रिया (Response) क्या है?
* 1. सर्वर ब्राउज़र को HTTP रिस्पॉन्स भेजता।
* 2. स्टेटस लाइन सफलता या त्रुटि बताती।
* 3. हेडर फ़ाइल प्रकार की जानकारी देते।
* 4. रिस्पॉन्स बॉडी में HTML कोड होता।
* 5. ब्राउज़र HTML को स्क्रीन पर दिखाता।

\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1250
Date: Sun, 13 Sep 2026 15:31:43 GMT

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Response Demo</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
\`\`\`

---

## 2. क्रोम DevTools में प्रतिक्रिया जांचें
![Google Chrome DevTools Network Tab HTTP Response Headers](/screenshots/html/lesson7_chrome_devtools_response_headers.png)
* 1. F12 दबाकर क्रोम DevTools खोलें।
* 2. नेटवर्क टैब में पेज रीफ्रेश करें।
* 3. स्थिति 304 कैश्ड पेज दर्शाती है।
* 4. रिस्पॉन्स हेडर दिनांक और कैश बताते।
* 5. बाईं ओर HTML पेज दिखाई देता।

---

## 3. टर्मिनल में HTTP 200 जांचें
![Inspecting HTTP 200 OK Response Headers using curl.exe](/screenshots/html/lesson7_curl_response_200.png)
* 1. Curl से रिस्पॉन्स हेडर देखें।
* 2. -I फ्लैग केवल हेडर मंगाता है।
* 3. स्टेटस 200 OK सफल उत्तर है।
* 4. Content-Type टेक्स्ट प्रारूप की पुष्टि करता।
* 5. सर्वर कैश और सुरक्षा विवरण मिलते।

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. प्रमुख HTTP स्टेटस कोड
* 1. 200 OK का अर्थ सफल अनुरोध।
* 2. 304 Not Modified कैश्ड फ़ाइल देता।
* 3. 400 Bad Request अमान्य अनुरोध बताता।
* 4. 404 Not Found अनुपलब्ध फ़ाइल बताता।
* 5. 500 Internal Error सर्वर खराबी बताता।`,
      pro: `## 1. HTTP रिस्पॉन्स प्रोटोकॉल संरचना
* 1. HTTP रिस्पॉन्स में स्टेटस लाइन होती।
* 2. स्टेटस लाइन प्रोटोकॉल वर्ज़न बताती है।
* 3. हेडर मेटाडेटा और नीतियां स्थानांतरित करते।
* 4. रिस्पॉन्स बॉडी HTML डेटा डिलीवर करती।
* 5. ब्राउज़र इंजन कोड को रेंडर करता।

\`\`\`http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1250
Cache-Control: public, max-age=0
Date: Sun, 13 Sep 2026 15:31:43 GMT

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Response Demo</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
\`\`\`

---

## 2. क्रोम DevTools में नेटवर्क निरीक्षण
![Google Chrome DevTools Network Tab HTTP Response Headers](/screenshots/html/lesson7_chrome_devtools_response_headers.png)
* 1. DevTools नेटवर्क टैब हेडर रिकॉर्ड करता।
* 2. स्थिति 304 ब्राउज़र कैश सत्यापित करती।
* 3. ETag हेडर फ़ाइल फिंगरप्रिंट प्रमाणित करता।
* 4. Cache-Control हेडर स्टोरेज नियम तय करता।
* 5. रेंडर किया गया पेज बॉडी दिखाता।

---

## 3. कमांड-लाइन द्वारा 200 OK की जांच
![Inspecting HTTP 200 OK Response Headers using curl.exe](/screenshots/html/lesson7_curl_response_200.png)
* 1. Curl ट्रांसपोर्ट लेयर हेडर जांचता है।
* 2. -I फ्लैग HEAD मेथड चलाता है।
* 3. प्रोटोकॉल स्टेटस HTTP/1.1 200 OK मिलता।
* 4. Content-Type टेक्स्ट HTML एनकोडिंग प्रमाणित करता।
* 5. X-Cache हेडर CDN हिट दर्शाता है।

\`\`\`powershell
curl.exe -I https://nextsem.online/
\`\`\`

---

## 4. HTTP स्टेटस कोड श्रेणियां
* 1. 2xx श्रेणी सफल अनुरोध दर्शाती है।
* 2. 3xx श्रेणी पुनर्निर्देशन और कैशिंग संभालती।
* 3. 304 Not Modified बैंडविड्थ की बचत करता।
* 4. 4xx श्रेणी क्लाइंट-साइड त्रुटियां दर्शाती है।
* 5. 5xx श्रेणी सर्वर विफलता को दर्शाती।`
    }
  },
  {
    id: 8,
    slug: "how-to-read-url-query-parameters-path",
    title: "Anatomy of a URL",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "Freeman Chapter 3 (p. 51-55)",
    exercise: {
      question: "In the URL https://nextsem.online/html?user=amit, what does '?user=amit' represent?",
      options: [
        "The Directory Path",
        "The Protocol Scheme",
        "The Hostname",
        "The Query Parameters",
      ],
      correctAnswer: "The Query Parameters",
      hint: "Query parameters start with a question mark (?) and pass extra search values to the page."
    },
    english: {
      kid: `### 🧭 Decoding a URL Address!
Every webpage has a address bar link called a **URL** (Uniform Resource Locator). Let's dissect one:
\`https://nextsem.online/html?search=tags\` 

* **https://**: The protocol (how data travels safely).
* **nextsem.online**: The domain host name (which site you are visiting).
* **query parameters (?search=tags)**: Extra filters to find specific items on the page.

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>URL & Hyperlink Demo</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; }
    .url-box { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }
    a { color: #04AA6D; font-weight: bold; text-decoration: underline; }
  </style>
</head>
<body>

  <div class="url-box">
    <h2>Interactive URL Link</h2>
    <p>Click below to navigate using query parameters:</p>
    <a href="https://nextsem.online/html?topic=attributes" target="_blank">
      https://nextsem.online/html?topic=attributes
    </a>
  </div>

</body>
</html>`,
      pro: `### 📐 URL Specification & Component Parsers
A Uniform Resource Locator (URL) specifies the address of a resource on the Internet:

1. **Scheme/Protocol**: \`https\` indicating secure communication over SSL/TLS.
2. **Hostname/Domain**: \`nextsem.online\` resolved via DNS query.
3. **Port**: Default is \`443\` for HTTPS, \`80\` for HTTP.
4. **Path**: \`/html\` referring to the localized directory route.
5. **Query String**: \`?search=tags\` passing parameters via key-value tuples.

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>URL Component Visualizer</title>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 24px; }
    .url-container { background: #1e293b; padding: 20px; border-radius: 10px; border: 1px solid #334155; }
    .scheme { color: #f43f5e; font-weight: bold; }
    .host { color: #38bdf8; font-weight: bold; }
    .path { color: #04AA6D; font-weight: bold; }
    .query { color: #f59e0b; font-weight: bold; }
  </style>
</head>
<body>

  <div class="url-container">
    <h2>RFC 3986 URL Anatomy</h2>
    <p style="font-size:16px;">
      <span class="scheme">https://</span><span class="host">nextsem.online</span><span class="path">/html</span><span class="query">?topic=anatomy</span>
    </p>
  </div>

</body>
</html>`
    },
    hinglish: {
      kid: `### 🧭 URL Address Ka Breakdown!
URL ka matlab hota hai **Uniform Resource Locator**. Chalo iski body ko samajhte hain:
\`https://nextsem.online/html?user=john\` 

* **https**: Protocol jo data transfer secure karta hai.
* **nextsem.online**: Main website host address.
* **Query (?user=john)**: Extra variable parameters jo page dynamic inputs load karne me use karta hai.

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>URL & Hyperlink Demo</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; }
    .url-box { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }
    a { color: #04AA6D; font-weight: bold; text-decoration: underline; }
  </style>
</head>
<body>

  <div class="url-box">
    <h2>Interactive URL Link</h2>
    <p>Click below to navigate using query parameters:</p>
    <a href="https://nextsem.online/html?topic=attributes" target="_blank">
      https://nextsem.online/html?topic=attributes
    </a>
  </div>

</body>
</html>`,
      pro: `### 📐 RFC 3986 URI & URL Architecture
URL parser architecture logical parts divide karti hai:

* **Authority**: Domain credentials aur server ports binding specify karti hai.
* **Query parameters & Fragment hashes (#id)**: Client routers ko browser routing controls inject karne me access parameters map karne ke liye dynamic variables query pass karte hain.

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>URL Component Visualizer</title>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 24px; }
    .url-container { background: #1e293b; padding: 20px; border-radius: 10px; border: 1px solid #334155; }
    .scheme { color: #f43f5e; font-weight: bold; }
    .host { color: #38bdf8; font-weight: bold; }
    .path { color: #04AA6D; font-weight: bold; }
    .query { color: #f59e0b; font-weight: bold; }
  </style>
</head>
<body>

  <div class="url-container">
    <h2>RFC 3986 URL Anatomy</h2>
    <p style="font-size:16px;">
      <span class="scheme">https://</span><span class="host">nextsem.online</span><span class="path">/html</span><span class="query">?topic=anatomy</span>
    </p>
  </div>

</body>
</html>`
    },
    hindi: {
      kid: `### 🧭 यूआरएल का वर्गीकरण (URL Breakdown)!
प्रत्येक वेब पेज का एक डिजिटल पता होता है जिसे **URL** (यूनिफ़ॉर्म रिसोर्स लोकेटर) कहा जाता है:
\`https://nextsem.online/html?search=tags\` 

* **https://**: प्रोटोकॉल (डेटा सुरक्षित रूप से कैसे ट्रांसफर होगा)
* **nextsem.online**: डोमेन नेम (आप कौन सी वेबसाइट देख रहे हैं)
* **क्वेरी पैरामीटर (?search=tags)**: खोज परिणामों को फ़िल्टर करने के लिए अतिरिक्त निर्देश।

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>URL & Hyperlink Demo</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; }
    .url-box { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }
    a { color: #04AA6D; font-weight: bold; text-decoration: underline; }
  </style>
</head>
<body>

  <div class="url-box">
    <h2>Interactive URL Link</h2>
    <p>Click below to navigate using query parameters:</p>
    <a href="https://nextsem.online/html?topic=attributes" target="_blank">
      https://nextsem.online/html?topic=attributes
    </a>
  </div>

</body>
</html>`,
      pro: `### 📐 यूआरएल संरचना (URL Anatomy)
एक यूआरएल (URL) इंटरनेट पर किसी संसाधन का पूर्ण पता और स्थान है:

* **प्रोटोकॉल**: \`https\` जो सुरक्षित एसएसएल (SSL) कनेक्शन को दर्शाता है।
* **होस्टनेम**: \`nextsem.online\` जिसे डीएनएस द्वारा रिज़ॉल्व किया जाता है।
* **क्वेरी स्ट्रिंग**: \`?\` के बाद आने वाले कुंजी-मूल्य जोड़े (Key-Value Pairs) जो डेटा पास करते हैं।

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>URL Component Visualizer</title>
  <style>
    body { font-family: monospace; background: #0f172a; color: #f8fafc; padding: 24px; }
    .url-container { background: #1e293b; padding: 20px; border-radius: 10px; border: 1px solid #334155; }
    .scheme { color: #f43f5e; font-weight: bold; }
    .host { color: #38bdf8; font-weight: bold; }
    .path { color: #04AA6D; font-weight: bold; }
    .query { color: #f59e0b; font-weight: bold; }
  </style>
</head>
<body>

  <div class="url-container">
    <h2>RFC 3986 URL Anatomy</h2>
    <p style="font-size:16px;">
      <span class="scheme">https://</span><span class="host">nextsem.online</span><span class="path">/html</span><span class="query">?topic=anatomy</span>
    </p>
  </div>

</body>
</html>`
    }
  },
  {
    id: 9,
    slug: "how-browser-renders-html-dom-tree",
    title: "How Browsers Render HTML (DOM)",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "Freeman Chapter 3 (p. 56-60)",
    exercise: {
      question: "What does DOM stand for in web engineering?",
      options: [
        "Data Object Map",
        "Document Object Model",
        "Digital Outlook Machine",
        "Directory Output Manager",
      ],
      correctAnswer: "Document Object Model",
      hint: "It represents the page structure as a tree of objects. It starts with 'Document'!"
    },
    english: {
      kid: `### 🌳 The DOM: Building a Tree of Tags!
When your browser downloads an HTML file, it translates it into a tree model called the **Document Object Model (DOM)**:

* **The Root Trunk**: The \`<html>\` tag.
* **The Big Branches**: \`<head>\` and \`<body>\` tags.
* **The Leaves**: Headings, links, and paragraphs nested inside.

✨ If you change a leaf tag, the whole page structure updates instantly!

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Tree Visualizer</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; }
    .tree-node { background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #04AA6D; margin: 10px 0; }
    .child-node { margin-left: 24px; border-left-color: #38bdf8; }
  </style>
</head>
<body>

  <div class="tree-node">
    <strong>&lt;html&gt; (Root Element)</strong>
    <div class="tree-node child-node">
      <strong>&lt;body&gt;</strong>
      <div class="tree-node child-node" style="border-left-color:#f59e0b;">
        &lt;h1&gt;Document Object Model Tree&lt;/h1&gt;
        <p>&lt;p&gt;Every tag forms a live branch on the DOM tree.&lt;/p&gt;</p>
      </div>
    </div>
  </div>

</body>
</html>`,
      pro: `### 🌳 Critical Rendering Path & DOM Tree Construction
The Document Object Model (DOM) is an API interface for HTML documents, representing the layout structure as a node tree:

1. **Conversion**: Browser parses raw bytes into characters.
2. **Tokenization**: Identifies tags (e.g. \`<html>\`, \`<body>\`) based on HTML5 token rules.
3. **Lexing**: Converts tokens into node objects containing attributes.
4. **DOM Construction**: Nodes are linked hierarchically, forming the DOM tree.

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Node Tree Architecture</title>
  <style>
    body { font-family: monospace; background: #0f172a; color: #fff; padding: 24px; }
    .node-box { background: #1e293b; border: 1px solid #334155; padding: 14px; border-radius: 6px; margin-bottom: 8px; }
  </style>
</head>
<body>

  <div class="node-box" id="root-node">
    <h3 style="color:#04AA6D;">#document &gt; html &gt; body</h3>
    <p id="dom-status">Active Nodes: 12 | Tree State: Complete</p>
    <button onclick="document.getElementById('dom-status').innerText = 'Node Updated via DOM API!';" style="background:#04AA6D;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;">
      Mutate DOM Node
    </button>
  </div>

</body>
</html>`
    },
    hinglish: {
      kid: `### 🌳 DOM Tree: Web Page Ka Skeleton!
HTML file load hone par browser use ek tree structure me convert karta hai jise **DOM (Document Object Model)** kehte hain:

* **Main Trunk**: \`<html>\` tag root node hota hai.
* **Branches**: Uske andar \`<head>\` aur \`<body>\` nodes split hote hain.
* **Leaves**: Paragraphs \`<p>\` aur images \`<img>\` tiny nested leaves ki tarah nodes se attach hote hain.

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Tree Visualizer</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; }
    .tree-node { background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #04AA6D; margin: 10px 0; }
    .child-node { margin-left: 24px; border-left-color: #38bdf8; }
  </style>
</head>
<body>

  <div class="tree-node">
    <strong>&lt;html&gt; (Root Element)</strong>
    <div class="tree-node child-node">
      <strong>&lt;body&gt;</strong>
      <div class="tree-node child-node" style="border-left-color:#f59e0b;">
        &lt;h1&gt;Document Object Model Tree&lt;/h1&gt;
        <p>&lt;p&gt;Every tag forms a live branch on the DOM tree.&lt;/p&gt;</p>
      </div>
    </div>
  </div>

</body>
</html>`,
      pro: `### 🌳 Browser Parsing and DOM/CSSOM Integration
Browser rendering engine critical path parsing sequences calculate karta hai:

* **Token Stream Parsing**: Bytes stream tokenize hokar elements tree dynamic nodes register karti hai.
* **Render Tree**: DOM (structure) aur CSSOM (styles) merge hokar final Layout tree construct karte hain jo browser canvas par paint hota hai.

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Node Tree Architecture</title>
  <style>
    body { font-family: monospace; background: #0f172a; color: #fff; padding: 24px; }
    .node-box { background: #1e293b; border: 1px solid #334155; padding: 14px; border-radius: 6px; margin-bottom: 8px; }
  </style>
</head>
<body>

  <div class="node-box" id="root-node">
    <h3 style="color:#04AA6D;">#document &gt; html &gt; body</h3>
    <p id="dom-status">Active Nodes: 12 | Tree State: Complete</p>
    <button onclick="document.getElementById('dom-status').innerText = 'Node Updated via DOM API!';" style="background:#04AA6D;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;">
      Mutate DOM Node
    </button>
  </div>

</body>
</html>`
    },
    hindi: {
      kid: `### 🌳 डीओएम (DOM): टैग्स का एक पेड़!
जब आपका ब्राउज़र एक HTML फ़ाइल डाउनलोड करता है, तो वह इसे एक पेड़ जैसी संरचना में बदल देता है जिसे **Document Object Model (DOM)** कहा जाता है:

* **मुख्य तना**: \`<html>\` टैग (रूट नोड)
* **बड़ी शाखाएँ**: \`<head>\` और \`<body>\` टैग
* **पत्तियाँ**: इनके अंदर नेस्टेड हेडिंग, लिंक और पैराग्राफ।

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Tree Visualizer</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; }
    .tree-node { background: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #04AA6D; margin: 10px 0; }
    .child-node { margin-left: 24px; border-left-color: #38bdf8; }
  </style>
</head>
<body>

  <div class="tree-node">
    <strong>&lt;html&gt; (Root Element)</strong>
    <div class="tree-node child-node">
      <strong>&lt;body&gt;</strong>
      <div class="tree-node child-node" style="border-left-color:#f59e0b;">
        &lt;h1&gt;Document Object Model Tree&lt;/h1&gt;
        <p>&lt;p&gt;Every tag forms a live branch on the DOM tree.&lt;/p&gt;</p>
      </div>
    </div>
  </div>

</body>
</html>`,
      pro: `### 🌳 क्रिटिकल रेंडरिंग पाथ और डीओएम (DOM) निर्माण
दस्तावेज़ ऑब्जेक्ट मॉडल (DOM) HTML दस्तावेज़ों के लिए एक प्रोग्रामिंग इंटरफ़ेस है:

* **टोकनाइजेशन**: ब्राउज़र कच्चे बाइट्स को वर्णों में बदलता है और टोकन (शुरू और बंद होने वाले टैग) की पहचान करता है।
* **नोड निर्माण**: प्रत्येक टोकन को गुणों वाले एक विशिष्ट ऑब्जेक्ट (नोड) में बदला जाता है।
* **पेड़ की संरचना**: इन नोड्स को आपस में जोड़कर पैरेंट-चाइल्ड रिलेशनशिप ट्री बनाया जाता है।

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Node Tree Architecture</title>
  <style>
    body { font-family: monospace; background: #0f172a; color: #fff; padding: 24px; }
    .node-box { background: #1e293b; border: 1px solid #334155; padding: 14px; border-radius: 6px; margin-bottom: 8px; }
  </style>
</head>
<body>

  <div class="node-box" id="root-node">
    <h3 style="color:#04AA6D;">#document &gt; html &gt; body</h3>
    <p id="dom-status">Active Nodes: 12 | Tree State: Complete</p>
    <button onclick="document.getElementById('dom-status').innerText = 'Node Updated via DOM API!';" style="background:#04AA6D;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;">
      Mutate DOM Node
    </button>
  </div>

</body>
</html>`
    }
  },
  {
    id: 10,
    slug: "how-to-use-chrome-developer-tools-elements",
    title: "Introduction to Browser DevTools",
    unit: "Unit 1: HTML Introduction & Web Fundamentals",
    bookRef: "Freeman Chapter 3 (p. 61-64)",
    exercise: {
      question: "Which panel in Chrome DevTools allows you to inspect and modify live HTML elements?",
      options: [
        "Elements panel",
        "Network panel",
        "Application panel",
        "Console panel",
      ],
      correctAnswer: "Elements panel",
      hint: "It is named after the components of HTML, which are called elements!"
    },
    english: {
      kid: `### 🔍 DevTools: Your Superpower Magnifying Glass!
Want to peek behind the scenes of any website? Press \`F12\` or right-click and choose **Inspect** to open **Developer Tools**!

* **Elements Panel**: Shows you the exact HTML structure of the page.
* **Live Edits**: You can double-click any heading text and change it right on your screen!

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DevTools Interactive DOM Inspector</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; text-align: center; }
    .demo-box { background: #1e293b; padding: 24px; border-radius: 12px; border: 2px dashed #04AA6D; max-width: 500px; margin: 0 auto; }
    h2 { color: #04AA6D; }
  </style>
</head>
<body>

  <div class="demo-box">
    <h2 id="demo-title">Inspect Me in DevTools!</h2>
    <p>Right-click this element and select <strong>Inspect</strong> to view it in the Elements panel.</p>
    <button onclick="alert('Hello from Browser DevTools!')" style="background:#04AA6D;color:#fff;border:none;padding:10px 20px;border-radius:6px;font-weight:bold;cursor:pointer;margin-top:10px;">
      Test DevTools Click
    </button>
  </div>

</body>
</html>`,
      pro: `### 🛠️ DOM Inspection & DevTools Debugging Workflows
Browser Developer Tools are essential tools for auditing, styling, and debugging web pages:

* **Elements Tree**: Renders the active in-memory DOM, showing changes made via Javascript in real-time.
* **Styles Panel**: Debugs CSS rules, box models, grid layouts, and active selectors.
* **Console Panel**: Outputs runtime logs, stack traces, Javascript alerts, and network handshake problems.

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DevTools Live DOM Editing</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; }
    .card { background: #1e293b; padding: 24px; border-radius: 12px; border: 1px solid #334155; max-width: 600px; margin: 0 auto; }
    .tag-badge { background: #0078d4; color: #fff; padding: 3px 8px; border-radius: 4px; font-family: monospace; font-size: 12px; }
  </style>
</head>
<body>

  <div class="card">
    <span class="tag-badge">&lt;article class="card"&gt;</span>
    <h2 style="color:#04AA6D; margin-top:12px;">Live DOM Node</h2>
    <p>Open DevTools (F12) to inspect, edit attributes, or live-tweak CSS styles on this element.</p>
  </div>

</body>
</html>`
    },
    hinglish: {
      kid: `### 🔍 Browser DevTools: Hacker Mod Active!
Kya aap kisi bhi website ka structure dekhna chahte hain? Page par right-click karke **Inspect** select karein, DevTools khul jayega!

* **Elements Panel**: Page ka saara HTML code yahan dikhta hai.
* **Live Edit**: Aap kisi bhi website ka text change karke apne browser me mazaak kar sakte hain!

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DevTools Interactive DOM Inspector</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; text-align: center; }
    .demo-box { background: #1e293b; padding: 24px; border-radius: 12px; border: 2px dashed #04AA6D; max-width: 500px; margin: 0 auto; }
    h2 { color: #04AA6D; }
  </style>
</head>
<body>

  <div class="demo-box">
    <h2 id="demo-title">Inspect Me in DevTools!</h2>
    <p>Right-click this element and select <strong>Inspect</strong> to view it in the Elements panel.</p>
  </div>

</body>
</html>`,
      pro: `### 🛠️ Runtime DOM Debugging using DevTools
Modern front-end developers inspection workflows me DevTools panels master karte hain:

* **Live Style Audits**: Computed layout attributes, media query breakpoints, and device dimension overrides configure custom parameters.
* **Network Panel**: Track request status codes (200 OK, 301, 500) and API latency payloads.

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DevTools Live DOM Editing</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; }
    .card { background: #1e293b; padding: 24px; border-radius: 12px; border: 1px solid #334155; max-width: 600px; margin: 0 auto; }
    .tag-badge { background: #0078d4; color: #fff; padding: 3px 8px; border-radius: 4px; font-family: monospace; font-size: 12px; }
  </style>
</head>
<body>

  <div class="card">
    <span class="tag-badge">&lt;article class="card"&gt;</span>
    <h2 style="color:#04AA6D; margin-top:12px;">Live DOM Node</h2>
    <p>Open DevTools (F12) to inspect, edit attributes, or live-tweak CSS styles on this element.</p>
  </div>

</body>
</html>`
    },
    hindi: {
      kid: `### 🔍 डेवलपर टूल्स (DevTools): हैकर मॉड एक्टिव करें!
क्या आप किसी भी वेबसाइट के पीछे का कोड देखना चाहते हैं? किसी भी पेज पर राइट-क्लिक करें और **Inspect** चुनें, डीवटूल्स खुल जाएगा!

* **Elements पैनल**: यहाँ आपको वेबसाइट का पूरा HTML कोड दिखाई देगा।
* **लाइव एडिटिंग**: आप यहाँ किसी भी हेडिंग को बदल सकते हैं और वह तुरंत आपकी स्क्रीन पर बदल जाएगी!

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DevTools Interactive DOM Inspector</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; text-align: center; }
    .demo-box { background: #1e293b; padding: 24px; border-radius: 12px; border: 2px dashed #04AA6D; max-width: 500px; margin: 0 auto; }
    h2 { color: #04AA6D; }
  </style>
</head>
<body>

  <div class="demo-box">
    <h2 id="demo-title">Inspect Me in DevTools!</h2>
    <p>Right-click this element and select <strong>Inspect</strong> to view it in the Elements panel.</p>
  </div>

</body>
</html>`,
      pro: `### 🛠️ रनटाइम डीओएम निरीक्षण और देवटूल्स वर्कफ़्लो
ब्राउज़र डेवलपर टूल्स (DevTools) फ्रंट-एंड वेब इंजीनियरिंग के लिए सबसे महत्वपूर्ण उपकरण हैं:

* **Elements पैनल**: यह सक्रिय इन-मेमोरी DOM पेड़ दिखाता है, जिससे आप टैग जोड़ या हटा सकते हैं।
* **Styles टैब**: इसके द्वारा आप बॉक्स मॉडल (Margin, Padding) और सक्रिय सीएसएस नियमों को संशोधित कर सकते हैं।

## Example
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DevTools Live DOM Editing</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; padding: 24px; }
    .card { background: #1e293b; padding: 24px; border-radius: 12px; border: 1px solid #334155; max-width: 600px; margin: 0 auto; }
    .tag-badge { background: #0078d4; color: #fff; padding: 3px 8px; border-radius: 4px; font-family: monospace; font-size: 12px; }
  </style>
</head>
<body>

  <div class="card">
    <span class="tag-badge">&lt;article class="card"&gt;</span>
    <h2 style="color:#04AA6D; margin-top:12px;">Live DOM Node</h2>
    <p>Open DevTools (F12) to inspect, edit attributes, or live-tweak CSS styles on this element.</p>
  </div>

</body>
</html>`
    }
  },
  {
    id: 11,
    slug: "doctype-html5-declaration-syntax",
    title: "The <!DOCTYPE html> Declaration",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 1 (p. 24-25)",
    exercise: {
      question: "Where should the <!DOCTYPE html> declaration be placed in an HTML file?",
      options: [
        "At the very first line of the document, before the <html> tag",
        "Inside the <head> element block",
        "Directly after the opening <body> tag",
        "At the end of the document to close all tags"
      ],
      correctAnswer: "At the very first line of the document, before the <html> tag",
      hint: "It isn't an HTML tag itself; it is a preamble declaration placed before any tags start!"
    },
    english: {
      kid: "### 📜 DOCTYPE: Telling the Browser What Game We are Playing!\nImagine you invite a friend to play a game. First, you have to tell them the rules, right? \n\n`<!DOCTYPE html>` does exactly that! It tells your web browser: **'Hey! I am writing in HTML5, the newest version of web design. Please parse my page correctly!'**\n\n* **Preamble**: It must always sit on the very first line of your file. No spaces or tags before it!\n* **No Close Tag**: It's a declaration, so it doesn't need a closing tag like `</doctype>`.",
      pro: "### ⚙️ Doctype Declaration and Quirks Mode Prevention\nThe `<!DOCTYPE html>` declaration is a required document preamble in modern web standards.\n\n* **Purpose**: It triggers **Standard Mode** in modern web engines (like Blink and Gecko) rather than **Quirks Mode** (which replicates old 1990s Netscape/IE layout behavior).\n* **Syntax**: In HTML5, it is case-insensitive and simplified to `<!DOCTYPE html>`. Older XHTML standards required long DTD URLs."
    },
    hinglish: {
      kid: "### 📜 DOCTYPE: Browser Ko Rules Batana!\nJaise game shuru karne se pehle aap uske rules batate hain, waise hi `<!DOCTYPE html>` browser ko batata hai ki hum HTML5 use kar rahe hain!\n\n* **First Line**: Ise hamesha file ki sabse pehli line par likhte hain, bina kisi space ke.\n* **No Closing**: Ye koi normal tag nahi hai, isliye iska koi closing tag nahi hota.",
      pro: "### ⚙️ Doctype Preamble aur Quirks Mode Validation\n`<!DOCTYPE html>` specification web standards me validation ensure karta hai:\n\n* **Standard Mode**: Modern rendering engine standards align karne ke liye is declaration ka hona mandatory hai.\n* **Syntactical Rules**: Ye character set aur parsing rules ko modern HTML5 specification standard ke according bind karta hai."
    },
    hindi: {
      kid: "### 📜 DOCTYPE: ब्राउज़र को नियम बताना!\nसोचिए यदि आप अपने दोस्त को कोई गेम खेलने के लिए बुलाते हैं, तो सबसे पहले आप उसे खेल के नियम बताते हैं।\n\n`<!DOCTYPE html>` भी बिल्कुल यही करता है! यह ब्राउज़र को बताता है: **'अरे! मैं HTML5 (वेब कोडिंग का नया संस्करण) लिख रहा हूँ, कृपया मेरे पेज को सही ढंग से दिखाएं!'**\n\n* **पहली लाइन**: यह हमेशा फ़ाइल की सबसे पहली लाइन पर होना चाहिए।\n* **कोई बंद करने वाला टैग नहीं**: यह एक घोषणा (Declaration) है, इसलिए इसे बंद करने के लिए किसी टैग की आवश्यकता नहीं होती।",
      pro: "### ⚙️ Doctype घोषणा और Quirks मोड की रोकथाम\n`<!DOCTYPE html>` घोषणा आधुनिक वेब मानकों के अनुपालन के लिए आवश्यक दस्तावेज़ प्रस्तावना (Preamble) है:\n\n* **उद्देश्य**: यह ब्राउज़र के रेंडरिंग इंजन को **Standard Mode** में काम करने के लिए प्रेरित करता है ताकि पेज पुराने 'Quirks Mode' में न जाए।\n* **लक्षण**: HTML5 में यह केस-असंवेदनशील (Case-insensitive) है और इसे सबसे सरल रूप में लिखा जाता है।"
    }
  },
  {
    id: 12,
    slug: "html-root-element-lang-attribute",
    title: "The <html> Root Element",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 1 (p. 25-26)",
    exercise: {
      question: "Which attribute is used on the <html> tag to specify the page's language for search engines and screen readers?",
      options: [
        "lang",
        "charset",
        "href",
        "locale",
      ],
      correctAnswer: "lang",
      hint: "It is short for language, like lang=\"en\" or lang=\"hi\"!"
    },
    english: {
      kid: "### 🌐 The <html> Element: The Mother of All Tags!\nEvery single tag you write on your page needs to live inside the **`<html>`** element. It is like the suitcase that packs your entire website!\n\n* **The `lang` Attribute**: Always write `<html lang=\"en\">`. This tells search engines (like Google) and screen readers (for blind users) that the main language of your page is English.",
      pro: "### 📦 The Document Root and Accessibility Bindings\nThe `<html>` element serves as the absolute root of an HTML document, enclosing all content.\n\n* **Root Node**: All elements (except `<!DOCTYPE>`) are descendants of this element in the DOM tree.\n* **Accessibility Optimization**: Specifying `<html lang=\"en\">` is crucial for SEO and accessibility (a11y), allowing speech synthesizers to select correct pronunciations and search engines to filter localized index values."
    },
    hinglish: {
      kid: "### 🌐 <html> Tag: Saare Tags Ka Ghar!\nJo bhi code aap likhenge, wo sab **`<html>`** tag ke andar aayega. Ye saare page ka parent/root tag hai!\n\n* **lang Attribute**: `<html lang=\"en\">` likhne se browser aur Google search engine ko pata chalta hai ki page ki primary language English hai.",
      pro: "### 📦 Root Document Elements aur Accessibility Standards\n`<html>` element document lifecycle ka entry point model generate karta hai:\n\n* **DOM Root Entry**: Script selectors document tree query parameters is root node se check karte hain.\n* **SEO localization**: User request languages filter maps aur index crawling tags ke liye accurate `lang` values provide karna basic step hai."
    },
    hindi: {
      kid: "### 🌐 <html> टैग: सभी टैग्स का घर!\nआप अपने पेज पर जो कुछ भी कोडिंग लिखते हैं, वह सब **`<html>`** टैग के अंदर होनी चाहिए। यह आपकी पूरी वेबसाइट का मुख्य कंटेनर है!\n\n* **lang अटरीब्यूट**: हमेशा `<html lang=\"hi\">` या `<html lang=\"en\">` लिखें। यह गूगल जैसे सर्च इंजन और स्क्रीन रीडर को बताता है कि आपका पेज किस भाषा में लिखा गया है।",
      pro: "### 📦 दस्तावेज़ का मूल (Root) और सुगम्यता (Accessibility) बाइंडिंग\n`<html>` तत्व दस्तावेज़ के संपूर्ण पदानुक्रम का शीर्ष नोड (Top-most Node) है:\n\n* **रूट नोड**: DOM ट्री में अन्य सभी तत्व इसी के अंतर्गत संपुटित (Encapsulated) होते हैं।\n* **सुगम्यता (Accessibility)**: `lang` विशेषता (Attribute) स्क्रीन रीडर्स को शब्दों के सही उच्चारण में मदद करती है और वैश्विक खोजों में पेज की भाषा अनुक्रमित करती है।"
    }
  },
  {
    id: 13,
    slug: "html-head-container-metadata",
    title: "The <head> Container",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 1 (p. 26-28)",
    exercise: {
      question: "Which type of content belongs inside the <head> element?",
      options: [
        "Interactive button widgets and input form fields",
        "Metadata, page titles, character encodings, and CSS link sheets",
        "Image and native video players visible to users",
        "Visible paragraph texts and heading structures",
      ],
      correctAnswer: "Metadata, page titles, character encodings, and CSS link sheets",
      hint: "The head element contains invisible configurations and settings, NOT visible contents."
    },
    english: {
      kid: "### 🧠 The <head> Tag: The Webpage's Brain!\nA webpage is split into two main zones: the **`<head>`** (the brain) and the **`<body>`** (the visible body).\n\n* **Invisible Settings**: The `<head>` container holds things you don't see on the white screen. It stores your page title, character sets, search-keywords, and stylesheet styles!\n* **Preamble**: It sits right at the top, inside the `<html>` root, but before the `<body>` starts.",
      pro: "### ⚙️ Metadata Scope and Document Header Configurations\nThe `<head>` container holds non-visual configuration parameters and resource linkages for the document.\n\n* **Resource Mapping**: Stylesheets, script engines, font libraries, and viewport tags are registered here.\n* **Parser Blocking**: Browsers parse and execute scripts/styles in the `<head>` before rendering the `<body>`, which is why modern pages load critical configurations here."
    },
    hinglish: {
      kid: "### 🧠 <head> Tag: Webpage Ka Brain!\nWebpage do hisson me divided hota hai: **`<head>`** (jo dimaag hai aur invisible settings store karta hai) aur **`<body>`** (jo screen par dikhta hai).\n\n* **Settings & Metadata**: Isme page ka title, icon links, CSS files connection, aur metadata save hota hai jo visitors ko direct nahi dikhta.",
      pro: "### ⚙️ HTML Document Head Lifecycle\n`<head>` element header configurations block design define karta hai:\n\n* **Critical Path Loading**: Browser page render karne se pehle head dependencies resolve karta hai.\n* **SEO tags**: OpenGraph protocols and canonical URL pointers inside the head target search crawl behaviors."
    },
    hindi: {
      kid: "### 🧠 <head> टैग: वेबपेज का दिमाग!\nएक वेबपेज दो मुख्य भागों में विभाजित होता है: **`<head>`** (दिमाग) और **`<body>`** (दिखने वाला शरीर)।\n\n* **अदृश्य सेटिंग्स**: `<head>` टैग में वे सेटिंग्स होती हैं जो स्क्रीन पर सीधे दिखाई नहीं देतीं। इसमें पेज का शीर्षक (Title), कोडिंग भाषा की सेटिंग्स, और सीएसएस फाइलों के लिंक शामिल होते हैं।",
      pro: "### ⚙️ मेटाडेटा का क्षेत्र और दस्तावेज़ हेडर कॉन्फ़िगरेशन\n`<head>` तत्व दस्तावेज़ के संबंध में गैर-दृश्य (Non-visual) विवरण प्रदान करता है:\n\n* **रिसोर्स लोडिंग**: बाह्य सीएसएस फ़ाइलें, फोंट, और स्क्रिप्ट घटक यहीं पंजीकृत होते हैं।\n* **पार्सिंग प्रभाव**: ब्राउज़र मुख्य सामग्री प्रदर्शित करने से पहले हेड में मौजूद डेटा को संसाधित करता है, इसलिए यह पेज के प्रदर्शन (Performance) के लिए महत्वपूर्ण है।"
    }
  },
  {
    id: 14,
    slug: "html-title-element-seo-importance",
    title: "The <title> Element",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 1 (p. 27-28)",
    exercise: {
      question: "Which tag defines the text that appears on the browser's tab bar?",
      options: [
        "<meta name=\"title\">",
        "<title>",
        "<header>",
        "<h1>",
      ],
      correctAnswer: "<title>",
      hint: "It is placed inside the <head> block and defines the tab text!"
    },
    english: {
      kid: "### 🏷️ The <title> Tag: The Label on Your Tab!\nHave you ever looked at the small tabs at the top of your web browser? The text written on those tabs is set by the **`<title>`** tag!\n\n* **SEO Ranking**: When you search for something on Google, the blue links you click are actually the `<title>` values of those websites!\n* **Placement**: It must always be nested inside the `<head>` element.",
      pro: "### 🔍 SEO Title Tag Optimization and Crawling Rules\nThe `<title>` element defines the document's title in browser tabs, bookmarks, and search results.\n\n* **SEO Value**: It is the single most critical on-page SEO element. Search engine crawlers index this tag as the primary link header (Search Engine Results Page - SERP).\n* **Best Practices**: Keep titles between 50-60 characters, lead with primary keywords, and end with the brand name (e.g., `Primary Keyword | Brand`)."
    },
    hinglish: {
      kid: "### 🏷️ <title> Tag: Browser Tab Ka Name!\nBrowser tabs ke upar jo naam likha hota hai, wo **`<title>`** tag se aata hai. \n\n* **Google Search**: Jab aap Google par search karte hain, to jo blue click-links aate hain, wo titles hi hote hain! Ise hamesha `<head>` ke andar likhein.",
      pro: "### 🔍 SERP Title Optimization and Crawl Indexing\n`<title>` block metadata context configurations handle karta hai:\n\n* **Title Length Constraints**: 60 characters se badha text search results (SERP) me truncate (`...`) ho jata hai.\n* **Brand consistency**: Brand names ko titles me end pipeline `|` separator ke sath append karna standard pattern hai."
    },
    hindi: {
      kid: "### 🏷️ <title> टैग: ब्राउज़र टैब का नाम!\nक्या आपने कभी अपने ब्राउज़र के शीर्ष पर छोटे टैब देखे हैं? उन टैब पर जो नाम लिखा होता है, वह **`<title>`** टैग द्वारा निर्धारित होता है!\n\n* **सर्च इंजन (SEO)**: जब आप गूगल पर कुछ खोजते हैं, तो जो नीले रंग के लिंक दिखाई देते हैं, वे वास्तव में वेबसाइट के `<title>` ही होते हैं!",
      pro: "### 🔍 एसईओ शीर्षक अनुकूलन और क्रॉलिंग नियम\n`<title>` तत्व दस्तावेज़ के नाम को ब्राउज़र बार और खोज परिणामों (SERPs) में घोषित करता है:\n\n* **एसईओ महत्व**: यह ऑन-पेज एसईओ का सबसे महत्वपूर्ण तत्व है। सर्च इंजन क्रॉलर इसका उपयोग परिणामों में प्राथमिक हेडर के रूप में करते हैं।\n* **लंबाई सीमा**: शीर्षक सामान्यतः 50-60 अक्षरों का होना चाहिए ताकि यह सर्च परिणामों में अधूरा (Truncated) न दिखे।"
    }
  },
  {
    id: 15,
    slug: "html-meta-charset-utf8-encoding",
    title: "Character Encoding with <meta charset=\"UTF-8\">",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 8 (p. 182-184)",
    exercise: {
      question: "Which meta attribute sets the character encoding scheme for standard HTML5 documents?",
      options: [
        "http-equiv",
        "encoding",
        "content",
        "charset",
      ],
      correctAnswer: "charset",
      hint: "It is a meta tag attribute written as <meta charset=\"...\">"
    },
    english: {
      kid: "### 🔠 Meta Charset: Decoding Characters and Emojis!\nWebsites are sent across the internet as streams of numbers (`0`s and `1`s). But how does your browser know that a certain number is a letter 'A' or a smiling emoji (😊)?\n\nIt uses **`<meta charset=\"UTF-8\">`**!\n\n* **UTF-8**: This is a magic map that represents almost every character, symbol, and emoji from all languages in the world correctly. Without it, you might see weird garbage text like `Ã¢â‚¬`!",
      pro: "### 📡 Character Sets, UTF-8 Encoding, and Unicode Mapping\nThe `<meta charset=\"UTF-8\">` tag specifies the character encoding scheme for the HTML document.\n\n* **Unicode Standards**: UTF-8 (8-bit UCS Transformation Format) is the dominant variable-width encoding capable of representing all Unicode characters ($1.1 \\times 10^6$ codepoints).\n* **Injection Audits**: It should be declared in the first 1024 bytes of the HTML document to prevent cross-site scripting (XSS) attacks exploiting character set switching."
    },
    hinglish: {
      kid: "### 🔠 Meta Charset: Emojis Ko Sahi Dikhana!\nInternet par data numbers (binary) me travel karta hai. Browser ko numbers se letters ya emojis (😊) banane ke liye **`<meta charset=\"UTF-8\">`** ki zarurat hoti hai.\n\n* **UTF-8**: Ye ek decode key hai jo duniya ki lagbhag har language aur symbols ko browser me bina kisi glitch ke display karti hai.",
      pro: "### 📡 Document Decoding and Security Charset Standards\nCharset specification data stream translation manage karta hai:\n\n* **Byte Order Mark**: UTF-8 representation character encoding exploits aur document parser errors bypass karta hai.\n* **Parser Execution**: Document loading time optimize hone ke liye meta tag declaration header execution me start positions me define karte hain."
    },
    hindi: {
      kid: "### 🔠 Meta Charset: इमोजी और अक्षरों को सही दिखाना!\nवेबसाइटें इंटरनेट पर 0 और 1 (बाइनरी कोड) के रूप में यात्रा करती हैं। लेकिन ब्राउज़र को कैसे पता चलता है कि कोई विशेष संख्या हिंदी का अक्षर है या कोई मुस्कुराता हुआ इमोजी (😊)?\n\nइसके लिए हम **`<meta charset=\"UTF-8\">`** का उपयोग करते हैं!\n\n* **UTF-8**: यह एक सार्वभौमिक (Universal) कुंजी है जो दुनिया की लगभग सभी भाषाओं और प्रतीकों को ब्राउज़र पर बिना किसी गड़बड़ी के प्रदर्शित करती है।",
      pro: "### 🔠 वर्ण एन्कोडिंग (Character Encoding) और यूनिकोड मैपिंग\n`<meta charset=\"UTF-8\">` दस्तावेज़ के लिए डेटा एन्कोडिंग स्कीम को परिभाषित करता है:\n\n* **यूनिकोड मानक**: UTF-8 एक चर-चौड़ाई (Variable-width) एन्कोडिंग है जो संपूर्ण यूनिकोड डेटाबेस (सभी भाषाओं के अक्षर और इमोजी) को डिकोड कर सकती है।\n* **सुरक्षा**: सुरक्षा जोखिमों (जैसे XSS हमलों) से बचने के लिए इसे दस्तावेज़ के हेडर के पहले 1024 बाइट्स के भीतर घोषित करना अनिवार्य है।"
    }
  },
  {
    id: 16,
    slug: "responsive-viewport-meta-tag-mobile",
    title: "Responsive Viewport Configuration",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 15 (p. 390-392)",
    exercise: {
      question: "Which viewport setting prevents layout scale shifts and ensures mobile screens render the site at 100% zoom initially?",
      options: [
        "maximum-scale=2.0",
        "width=device-width",
        "initial-scale=1.0",
        "user-scalable=no",
      ],
      correctAnswer: "initial-scale=1.0",
      hint: "It sets the initial scale/zoom parameter, which should be 1.0 (100%)."
    },
    english: {
      kid: "### 📱 Viewport Meta Tag: Making It Look Good on Phones!\nHave you ever opened an old website on your phone, and the text was so tiny you had to pinch-zoom to read it?\n\nThat's because they didn't have the **Viewport Meta Tag**! \n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\n\n* **width=device-width**: Tells the browser: 'Make my website's width match the screen width of whatever device is loading it!'\n* **initial-scale=1.0**: Sets the zoom level to 100% when the page first loads.",
      pro: "### 📱 Responsive Layouts and Mobile Viewport Scaling\nThe viewport meta tag is essential for creating responsive design patterns across mobile and desktop viewports.\n\n* **Syntax**: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`\n* **Parameters**:\n  * `width=device-width` resets CSS pixel width to match hardware pixels (device-independent pixels).\n  * `initial-scale=1.0` ensures the viewport rendering scale matches a 1:1 ratio. This avoids desktop scaling behaviors on smartphones."
    },
    hinglish: {
      kid: "### 📱 Viewport Tag: Mobile Friendly Websites!\nPurani websites phone me kholne par bohot chhoti lagti thi aur bar-bar zoom karna padta tha. Mobile screen par layout automatically adjust karne ke liye hum **Viewport meta tag** use karte hain.\n\n* **width=device-width**: Website ki width mobile screen ke barabar auto-scale ho jati hai.\n* **initial-scale=1.0**: Zoom level ko default 100% par set karta hai.",
      pro: "### 📱 Viewport Dimensions and Device Independent Pixels\nViewport configurations mobile rendering logic apply karte hain:\n\n* **Desktop Shrink Prevention**: Device width override mobile CSS media queries parameters load karne me enable karti hai.\n* **Scale Constraints**: User viewport controls optimize karke interactive mobile layouts screen boundaries fit rakhte hain."
    },
    hindi: {
      kid: "### 📱 व्यूपोर्ट टैग: मोबाइल पर वेबसाइट को सुंदर बनाना!\nक्या आपने कभी अपने फोन पर कोई पुरानी वेबसाइट खोली है जहां टेक्स्ट इतना छोटा था कि आपको पढ़ने के लिए ज़ूम करना पड़ा?\n\nऐसा इसलिए हुआ क्योंकि उन्होंने **Viewport Meta Tag** का उपयोग नहीं किया था!\n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\n\n* **width=device-width**: यह ब्राउज़र से कहता है: 'वेबसाइट की चौड़ाई को मोबाइल स्क्रीन के बराबर रखें।'\n* **initial-scale=1.0**: यह सुनिश्चित करता है कि जब पेज लोड हो, तो ज़ूम लेवल 100% हो।",
      pro: "### 📱 अनुक्रियाशील (Responsive) लेआउट और मोबाइल व्यूपोर्ट स्केलिंग\nव्यूपोर्ट मेटा टैग मोबाइल उपकरणों पर पेज को स्केल और प्रदर्शित करने का तरीका नियंत्रित करता है:\n\n* **सिंटैक्स**: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`\n* **विशेषताएं**: यह ब्राउज़र को मोबाइल पर डेस्कटॉप-चौड़ाई (उदा. 980px) मानकर रेंडर करने से रोकता है, जिससे मीडिया क्वेरीज़ (Media Queries) सही ढंग से काम करती हैं।"
    }
  },
  {
    id: 17,
    slug: "adding-favicons-link-rel-icon",
    title: "Adding Favicons",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 8 (p. 183-185)",
    exercise: {
      question: "Which relationship attribute value (rel) is used to associate a favicon file with an HTML page?",
      options: [
        "logo",
        "stylesheet",
        "favicon",
        "icon",
      ],
      correctAnswer: "icon",
      hint: "It is written as <link rel=\"icon\" href=\"...\">."
    },
    english: {
      kid: "### 🎨 Favicon: Your Website's Little Logo Icon!\nLook up at your browser tabs again. See the tiny Google 'G' or the YouTube logo next to the title? Those tiny icons are called **Favicons**!\n\n* **Adding Favicons**: You use the `<link>` tag inside the head, like this:\n  ```html\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\n  ```\n* **Files**: Usually, they are small square images (`16x16` or `32x32` pixels) saved in `.ico`, `.png`, or `.svg` formats.",
      pro: "### 🎨 Favicon Formats, Dimensions, and Cross-Browser Configuration\nA favicon (favorite icon) is a visual brand identifier displayed in tab bars, history links, and bookmarks.\n\n* **Modern Standard**: Use high-resolution PNGs or SVGs instead of older legacy `.ico` formats:\n  ```html\n  <link rel=\"icon\" type=\"image/png\" href=\"/favicon-32x32.png\">\n  ```\n* **Responsive Icons**: Apple devices require custom icons (`apple-touch-icon`) to display shortcuts on home screens cleanly."
    },
    hinglish: {
      kid: "### 🎨 Favicon: Website Ka Logo!\nBrowser tab par title ke pehle jo chhota sa brand icon dikhta hai, use **Favicon** kehte hain. \n\n* **Kaise add karein**: `<link>` tag ko head ke andar likhein:\n  ```html\n  <link rel=\"icon\" href=\"favicon.ico\">\n  ```\n* **Sizes**: Ye circular ya square images hoti hain jo small resolution me store ki jati hain.",
      pro: "### 🎨 Multipurpose Tab Logo and Apple Touch Icons\nFavicon optimization brand metrics enhance karta hai:\n\n* **Alternative Formats**: Mobile app shortcuts, PWA configs, aur Safari pinned tabs specialized attributes define karte hain.\n* **SVG support**: Vector favicons high-density displays (Retina screens) me sharp rendering dynamic properties provide karte hain."
    },
    hindi: {
      kid: "### 🎨 फेविकॉन (Favicon): आपकी वेबसाइट का छोटा लोगो!\nअपने ब्राउज़र टैब पर दोबारा देखें। शीर्षक के बगल में छोटा गूगल 'G' या यूट्यूब का लोगो दिखाई दे रहा है? उन छोटे लोगो को **Favicon** कहते हैं!\n\n* **फेविकॉन जोड़ना**: हम हेड टैग के अंदर `<link>` टैग का उपयोग करते हैं:\n  ```html\n  <link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">\n  ```\n* **फ़ाइल स्वरूप**: ये छोटे वर्गाकार चित्र (सामान्यतः 16x16 या 32x32 पिक्सेल) होते हैं जो `.ico` या `.png` में सहेजे जाते हैं।",
      pro: "### 🎨 फेविकॉन प्रारूप, आकार और क्रॉस-ब्राउज़र कॉन्फ़िगरेशन\nफेविकॉन (Favicon) ब्रांडिंग और उपयोगकर्ता अनुभव के लिए आवश्यक एक सूक्ष्म ग्राफिक है:\n\n* **आधुनिक मानक**: आधुनिक वेब में `.ico` की जगह पारदर्शी (Transparent) `.png` या स्केलेबल `.svg` का उपयोग किया जाता है।\n* **मोबाइल अनुकूलन**: आईओएस (iOS) उपकरणों के लिए अलग से `<link rel=\"apple-touch-icon\" href=\"...\">` का उपयोग किया जाता है ताकि मोबाइल शॉर्टकट में यह स्पष्ट दिखे।"
    }
  },
  {
    id: 18,
    slug: "linking-external-css-stylesheets-link",
    title: "Linking CSS Stylesheets",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 10 (p. 226-228)",
    exercise: {
      question: "Which tag is used to connect an external stylesheet (.css) file to your HTML file?",
      options: [
        "<style>",
        "<css>",
        "<a>",
        "<link>",
      ],
      correctAnswer: "<link>",
      hint: "It is an empty element that creates a relationship link between documents!"
    },
    english: {
      kid: "### 💅 Linking CSS: Dressing Up Your Skeleton!\nIf HTML is the skeleton of a building, CSS is the colorful paint, wallpaper, and fancy lights. But how do we connect our CSS paint file to our HTML structure?\n\nWe use the **`<link>`** tag inside the `<head>`!\n\n```html\n<link rel=\"stylesheet\" href=\"styles.css\">\n```\n\n* **rel=\"stylesheet\"**: Tells the browser that the linked file contains layout styles.\n* **href**: Pointers to the path of your CSS file.",
      pro: "### 💅 External Style Association and Resource Loading\nConnecting an external CSS file using `<link>` is the standard method for separation of concerns (content vs. design).\n\n* **Syntax**: `<link rel=\"stylesheet\" href=\"/css/main.css\" type=\"text/css\">`\n* **Rendering Optimization**: The `<link>` tag initiates a non-blocking parallel download of the CSS rules. This avoids browser repaint delays (Flash of Unstyled Content - FOUC)."
    },
    hinglish: {
      kid: "### 💅 CSS Link: Webpage Ko Sundar Banana!\nHTML se structure banta hai aur CSS se styling. Apni CSS design file ko HTML se connect karne ke liye hum `<link>` tag ka use head me karte hain.\n\n```html\n<link rel=\"stylesheet\" href=\"style.css\">\n```\n\n* **rel**: Iska matlab 'relationship' hota hai, jo stylesheet set kia jata hai.",
      pro: "### 💅 External CSS Import and Separation of Concerns\nStyles sheet connection styles engine optimize karta hai:\n\n* **FOUC Prevention**: Inline script files connection block parse parameters coordinate karte hain stylesheet loading time enhance karne ke liye.\n* **Resource Caching**: External stylesheets assets download parameters compile karke browser cache storage use enable karte hain."
    },
    hindi: {
      kid: "### 💅 सीएसएस लिंक करना: वेबपेज को रंगीन बनाना!\nयदि HTML किसी इमारत का ढांचा है, तो CSS उसका रंग-रोगन, वॉलपेपर और सजावट है। हम अपने HTML ढांचे में रंग जोड़ने के लिए दोनों को कैसे जोड़ते हैं?\n\nहम हेड टैग के अंदर **`<link>`** टैग का उपयोग करते हैं!\n\n```html\n<link rel=\"stylesheet\" href=\"styles.css\">\n```\n\n* **rel=\"stylesheet\"**: यह ब्राउज़र को बताता है कि लिंक की गई फ़ाइल में डिज़ाइन नियम हैं।\n* **href**: यह हमारी सीएसएस फ़ाइल का स्थान बताता है।",
      pro: "### 💅 बाहरी शैली (CSS) एसोसिएशन और रेंडर अनुकूलन\nबाहरी सीएसएस फ़ाइल को जोड़ने के लिए `<link>` टैग का उपयोग करना वेब विकास का सबसे अच्छा अभ्यास है:\n\n* **उद्देश्य**: यह सामग्री (HTML) और डिज़ाइन (CSS) को अलग रखता है (Separation of Concerns)।\n* **FOUC की रोकथाम**: यह 'फ्रीज़ या फ्लैश ऑफ अनस्टाइल्ड कंटेंट' (FOUC) को रोकता है क्योंकि ब्राउज़र सीएसएस डाउनलोड होने के बाद ही पेज प्रदर्शित करता है।"
    }
  },
  {
    id: 19,
    slug: "internal-css-styles-style-tag",
    title: "Internal CSS with the <style> Tag",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 10 (p. 228-230)",
    exercise: {
      question: "Which tag is used to write CSS rules directly inside your HTML file?",
      options: [
        "<link>",
        "<css>",
        "<style>",
        "<script>",
      ],
      correctAnswer: "<style>",
      hint: "It is written as <style> h1 { color: red; } </style> inside the head."
    },
    english: {
      kid: "### 🎨 The <style> Tag: Inline Styling Center!\nSometimes, you want to add quick style rules without creating a separate `.css` file. That is where the **`<style>`** tag comes in!\n\n* **Direct Styles**: You can write CSS codes directly inside the `<style>` tag, and it will apply to your page instantly.\n* **Nesting**: Always place your `<style>` block inside the `<head>` section of your HTML document.",
      pro: "### 🎨 Embedded CSS Styling and Document Head Styling\nThe `<style>` element allows you to embed CSS rules directly within the HTML document structure.\n\n* **Usage**: Ideal for single-page applications or critical CSS setups where styling rules need to render immediately without triggering external requests.\n* **Specificity**: Internal styles declared inside `<style>` carry the same specificity rules as external CSS, but override external styles defined earlier in the `<head>`."
    },
    hinglish: {
      kid: "### 🎨 <style> Tag: Direct Styling!\nJab aap bina kisi nayi CSS file banaye page ko style karna chahte hain, tab **`<style>`** tag use hota hai.\n\n* **Head Element**: Ise hamesha `<head>` block ke andar likhein aur isme directly color, font aur margins CSS property configure karein.",
      pro: "### 🎨 Embedded Document Rules and Critical Path CSS\n`<style>` element inline definitions layout processing dynamic banati hai:\n\n* **Performance Gains**: Single file payload networks payload minimize karte hain first visual render accelerate karne ke liye.\n* **Scoped CSS**: HTML5 me global context variables and elements bind methods style controls manage karte hain."
    },
    hindi: {
      kid: "### 🎨 <style> टैग: सीधे डिज़ाइन नियम लिखना!\nकभी-कभी, आप एक अलग सीएसएस फ़ाइल बनाए बिना अपने वेबपेज पर त्वरित डिज़ाइन नियम लागू करना चाहते हैं। यहाँ **`<style>`** टैग काम आता है!\n\n* **सीधे स्टाइल**: आप इस टैग के भीतर सीधे सीएसएस नियम (उदा. अक्षरों का रंग बदलना) लिख सकते हैं।\n* **स्थान**: इसे हमेशा दस्तावेज़ के `<head>` भाग के भीतर ही रखें।",
      pro: "### 🎨 एंबेडेड सीएसएस स्टाइलिंग और क्रिटिकल सीएसएस\n`<style>` तत्व दस्तावेज़ के भीतर ही सीधे स्टाइलशीट नियमों को एम्बेड करने की अनुमति देता है:\n\n* **उपयोग**: यह एकल-पेज वेबसाइटों (Single-page apps) या 'Critical CSS' लोड करने के लिए उपयुक्त है, ताकि पहला रेंडर तुरंत हो।\n* **विशिष्टता (Specificity)**: यह बाहरी शैलियों के समान ही काम करता है, लेकिन क्रमिक लोडिंग के कारण यह पहले से लोड बाहरी सीएसएस नियमों को ओवरराइड कर सकता है।"
    }
  },
  {
    id: 20,
    slug: "script-tag-insert-javascript-code",
    title: "Script Insertion with <script>",
    unit: "Unit 2: The Document Structure & Metadata",
    bookRef: "Duckett Chapter 18 (p. 444-446)",
    exercise: {
      question: "Which tag is used to embed client-side JavaScript code in HTML?",
      options: [
        "<js>",
        "<javascript>",
        "<script>",
        "<code>"
      ],
      correctAnswer: "<script>",
      hint: "It is written as <script src=\"app.js\"></script>."
    },
    english: {
      kid: "### ⚡ The <script> Tag: Making Your Page Alive!\nHTML builds the body, CSS makes it pretty, but how do we make it do things when clicked? We use **JavaScript**! \n\nAnd to link or write JavaScript, we use the **`<script>`** tag!\n\n* **Inline Code**: You can write code directly inside `<script> console.log('Hello'); </script>`.\n* **External Link**: Link a file using `<script src=\"app.js\"></script>`.",
      pro: "### ⚡ Script Orchestration, Execution Models, and Performance\nThe `<script>` element is used to embed or reference client-side executable JavaScript.\n\n* **Asynchronous Loading**: Use attributes like `async` (runs script once downloaded, blocking parser) or `defer` (executes script only after DOM parsing finishes) to prevent rendering freezes:\n  ```html\n  <script src=\"app.js\" defer></script>\n  ```\n* **Parsing Impact**: Scripts block HTML parsing by default. Placing scripts at the bottom of the `<body>` or using `defer` ensures fast page loading."
    },
    hinglish: {
      kid: "### ⚡ <script> Tag: JavaScript Connect Karna!\nJavaScript se webpage me dynamic operations click actions set hote hain. Webpage me scripting capabilities add karne ke liye hum **`<script>`** tag use karte hain.\n\n* **Attributes**: External script connect karne ke liye `<script src=\"app.js\"></script>` ka use karte hain.",
      pro: "### ⚡ Parser Blocking Prevention and Defer/Async Attributes\n`<script>` tag runtime thread management configuration details:\n\n* **Defer attribute**: DOM building compile finish hone tak execution queue hold rakhta hai.\n* **Async attribute**: External file fetching task background threads target karti hai aur execution concurrent rehti hai."
    },
    hindi: {
      kid: "### ⚡ <script> टैग: पेज में जान डालना!\nHTML से पेज का ढांचा बनता है, CSS से वह सुंदर दिखता है, लेकिन बटन दबाने पर क्या काम होगा, यह **JavaScript** तय करती है!\n\nवेबपेज में जावास्क्रिप्ट को जोड़ने के लिए हम **`<script>`** टैग का उपयोग करते हैं!\n\n* **लाइव कोडिंग**: आप इसके अंदर सीधे कोड लिख सकते हैं: `<script> alert('Hello!'); </script>`।\n* **बाहरी लिंक**: आप बाहरी फ़ाइल को भी जोड़ सकते हैं: `<script src=\"app.js\"></script>`।",
      pro: "### ⚡ स्क्रिप्ट आर्केस्ट्रेशन, निष्पादन (Execution) मॉडल और निष्पादन गति\n`<script>` तत्व का उपयोग क्लाइंट-साइड निष्पादन योग्य जावास्क्रिप्ट कोड को एम्बेड करने या जोड़ने के लिए किया जाता है:\n\n* **असिंक्रोनस निष्पादन**: आधुनिक वेब में `defer` (पार्सिंग के बाद चलाना) या `async` (डाउनलोड होते ही चलाना) विशेषता का उपयोग किया जाता है ताकि स्क्रिप्ट ब्राउज़र पार्सिंग को बाधित न करे।\n* **स्थान नियम**: पुराने डिफ़ॉल्ट में स्क्रिप्ट को `<body>` के अंत में रखा जाता है, लेकिन `defer` के साथ इसे अब सीधे `<head>` में भी सुरक्षित रखा जा सकता है।"
    }
  },
  // Structural Text & Layout Elements (Lessons 21-30)
  {
    id: 21,
    slug: "html-body-tag-visible-content",
    title: "The <body> Container",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 1 (p. 18-20)",
    exercise: {
      question: "Which HTML tag acts as the visible stage containing all text, buttons, and images?",
      options: [
        "<body>",
        "<html>",
        "<main>",
        "<head>",
      ],
      correctAnswer: "<body>",
      hint: "It holds everything that is shown directly on the browser screen!"
    },
    english: {
      kid: "### 🎭 The <body>: Welcome to the Stage!\nIf the `<head>` is like backstage (where the director hides notes, lighting setups, and scripts), then the **`<body>`** is the main stage itself! \n\nEvery single thing that your website visitors can see—like cool pictures, text, buttons, and games—must live inside the `<body>` tag.\n\n```html\n<body>\n  <h1>Hello World!</h1>\n</body>\n```",
      pro: "### 🎭 Document Body Root and Visual Presentation Canvas\nThe `<body>` element represents the main content container of an HTML document.\n\n* **DOM Hierarchy**: There can only be one `<body>` element per document, nested directly inside `<html>`.\n* **Rendering Context**: Browsers apply default user-agent margins (usually `8px`) to `<body>`, which developers typically override using CSS resets (`margin: 0`)."
    },
    hinglish: {
      kid: "### 🎭 <body> Tag: Webpage Ki Main Stage!\nJaise school play me stage par sabhi actors perform karte hain, waise hi HTML me **`<body>`** tag aapka main stage hai! Jo bhi content users ko screen par dikhana hai (jaise text, images, buttons), wo sab body tag ke andar likha jata hai.",
      pro: "### 🎭 Rendering Canvas and User-Agent Style Reset\nBody tag element hierarchy parameters visual output flow control karta hai:\n\n* **Structure**: Document stream processing body element trigger parsing engine visual tree paint logic setup karta hai.\n* **Reset Styles**: CSS config base layout standard control reset enables margin controls for viewport alignment."
    },
    hindi: {
      kid: "### 🎭 <body> टैग: आपका मुख्य मंच!\nयदि `<head>` मंच के पीछे का हिस्सा है (जहाँ लेखक गुप्त सेटिंग्स और स्क्रिप्ट छिपाते हैं), तो **`<body>`** आपका मुख्य मंच है! वेबपेज पर जो कुछ भी दिखाई देता है—जैसे चित्र, बटन, लेख—सब कुछ इसी टैग के अंदर रखा जाता है।\n\n```html\n<body>\n  <h1>नमस्कार दुनिया!</h1>\n</body>\n```",
      pro: "### 🎭 दस्तावेज़ मुख्य कैनवास और दृश्य प्रतिपादन (Rendering)\n`<body>` तत्व दस्तावेज़ के दृश्य सामग्री भाग का प्रतिनिधित्व करता है:\n\n* **नियम**: पूरे दस्तावेज़ में केवल एक `<body>` तत्व हो सकता है, जो `<html>` के भीतर होता है।\n* **CSS रीसेट**: ब्राउज़र डिफ़ॉल्ट रूप से बॉडी में मार्जिन (उदा. 8px) जोड़ते हैं, जिसे `margin: 0` द्वारा हटाया जाता है।"
    }
  },
  {
    id: 22,
    slug: "html-heading-tags-h1-to-h6",
    title: "Heading Elements (<h1> to <h6>)",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 2 (p. 30-32)",
    exercise: {
      question: "What is the recommended SEO limit for <h1> tags on a single page?",
      options: [
        "None",
        "Unlimited",
        "Up to 6",
        "Exactly 1",
      ],
      correctAnswer: "Exactly 1",
      hint: "Having only one main title helps Google understand the absolute focus of your page!"
    },
    english: {
      kid: "### 👑 Headings: The Giant to the Baby!\nHTML provides six levels of titles/headings, from **`<h1>`** (the biggest, strongest grandparent) to **`<h6>`** (the tiniest baby text). \n\n* **`<h1>`**: Use this only **once** per page for the main title.\n* **`<h2>` to `<h6>`**: Use these for sub-sections and smaller topic headers.\n\n```html\n<h1>Main Title</h1>\n<h2>Sub-Heading</h2>\n```",
      pro: "### 👑 Document Outline and Search Engine Semantics\nHeading tags (`<h1>` through `<h6>`) establish the document outline hierarchy, which is critical for search engine indexing and screen readers.\n\n* **SEO Hierarchy**: Search engines like Google prioritize page topics based on heading text. Multiple `<h1>` tags dilute SEO scoring; use exactly one primary `<h1>` and progress sequentially (`<h2>` -> `<h3>`) without skipping levels."
    },
    hinglish: {
      kid: "### 👑 Headings: Bada Se Sabse Chota!\nHTML me text headings ko size dene ke liye 6 levels hote hain: `<h1>` sabse bada aur important heading hota hai, aur `<h6>` sabse chota heading tag hota hai. SEO ke liye ek page par sirf ek hi `<h1>` rakhna best practice hai.",
      pro: "### 👑 Document Semantic Tree and Heading Level Indexing\nHeadings tags relative weight system layout processing optimize karte hain:\n\n* **Screen Readers**: Users layout scanning visual headings node structure map structure sequential use (`<h2>` after `<h1>`) define navigation blocks.\n* **SEO Impact**: Search bots page focus keywords index header density analyze karte hain."
    },
    hindi: {
      kid: "### 👑 शीर्षक टैग: सबसे बड़े से सबसे छोटा!\nHTML में हेडिंग के लिए 6 स्तर होते हैं: **`<h1>`** (सबसे बड़ा मुख्य शीर्षक) से लेकर **`<h6>`** (सबसे छोटा शीर्षक) तक।\n\n* **नियम**: मुख्य रूप से केवल एक ही `<h1>` का उपयोग करें।\n* **क्रम**: उप-भागों के लिए `<h2>` से `<h6>` का उपयोग करें।",
      pro: "### 👑 दस्तावेज़ रूपरेखा (Outline) और शीर्ष पदानुक्रम (Heading Hierarchy)\nशीर्षक तत्व दस्तावेज़ के पदानुक्रमित संरचना को परिभाषित करते हैं:\n\n* **एसईओ (SEO)**: सर्च इंजन पृष्ठ के विषय को समझने के लिए शीर्षकों पर भरोसा करते हैं। हमेशा ध्यान रखें कि एक पेज पर केवल एक ही `<h1>` टैग हो।\n* **क्रमबद्धता**: शीर्षकों के स्तरों को छोड़ें नहीं (उदा. सीधे `<h1>` के बाद `<h3>` पर न जाएं, हमेशा `<h2>` का उपयोग करें)।"
    }
  },
  {
    id: 23,
    slug: "html-paragraph-tag-p-margins",
    title: "The Paragraph Element (<p>)",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 2 (p. 33-34)",
    exercise: {
      question: "By default, how does the browser display consecutive <p> tags?",
      options: [
        "Side-by-side on the same line",
        "Inside a single block container",
        "Italicized",
        "Stacked vertically with vertical margins",
      ],
      correctAnswer: "Stacked vertically with vertical margins",
      hint: "The browser automatically adds some empty vertical spacing to separate block paragraphs."
    },
    english: {
      kid: "### 📦 The Paragraph: Writing Blocks of Text!\nWhen you want to write standard text stories, you use the paragraph tag: **`<p>`**! \n\n* **Automatic Spacing**: The browser automatically leaves a bit of empty space (margin) above and below every `<p>` tag, keeping your sentences clean and easy to read.",
      pro: "### 📦 Text Layout and Block-Level Flow Mechanics\nThe `<p>` element defines a paragraph block.\n\n* **Layout Behavior**: It is a block-level element, meaning it always starts on a new line and occupies the full width of its parent container.\n* **Typography Defaults**: Browsers apply default vertical margins (`1em`) via User-Agent stylesheets to separate text blocks visually."
    },
    hinglish: {
      kid: "### 📦 <p> Tag: Paragraph Likhiye!\nApni websites me normal stories ya descriptive text likhne ke liye hum **`<p>`** tag use karte hain. Har `<p>` tag ke baad browser automatic thoda gap (margin) chodd deta hai taaki sentences readable lagien.",
      pro: "### 📦 Typography Blocks and Line Height Formatting\nParagraph elements text block layout standard system construct karte hain:\n\n* **Flow Processing**: Block-level formatting inline text rendering layout line spacing boundaries apply karta hai.\n* **Margining**: Reset scripts standard properties configure karke paragraphs block gaps margin reset direct set karti hain."
    },
    hindi: {
      kid: "### 📦 पैराग्राफ टैग: साधारण पाठ लिखना!\nजब आप अपने वेबपेज पर साधारण वाक्य या कहानियाँ लिखना चाहते हैं, तो आप पैराग्राफ टैग: **`<p>`** का उपयोग करते हैं!\n\n* **अंतराल**: ब्राउज़र वाक्यों को साफ और पढ़ने में आसान बनाने के लिए प्रत्येक पैराग्राफ के ऊपर और नीचे थोड़ा खाली स्थान (मार्जिन) छोड़ देता है।",
      pro: "### 📦 पाठ प्रवाह (Flow) और ब्लॉक-स्तरीय विशेषताएँ\n`<p>` तत्व एक पैराग्राफ को परिभाषित करता है:\n\n* **ब्लॉक-स्तर (Block-level)**: यह एक ब्लॉक-स्तरीय तत्व है, जिसका अर्थ है कि यह हमेशा एक नई लाइन से शुरू होता है और मूल कंटेनर की पूरी चौड़ाई लेता है।\n* **मार्जिन**: ब्राउज़र डिफ़ॉल्ट रूप से इसके ऊपर और नीचे दूरी (margin-top/bottom) जोड़ता है।"
    }
  },
  {
    id: 24,
    slug: "line-break-br-tag-text-split",
    title: "Line Breaks (<br />)",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 2 (p. 36-37)",
    exercise: {
      question: "Is the <br /> tag a self-closing empty element?",
      options: [
        "Only on mobile devices",
        "Yes, it does not need a closing tag",
        "No, it requires </br>",
        "No, it must contain a text body",
      ],
      correctAnswer: "Yes, it does not need a closing tag",
      hint: "It is an empty tag used to snap text to the next line immediately."
    },
    english: {
      kid: "### ↩️ Line Breaks: Typing Enter Key!\nImagine you are typing on an old typewriter. You reach the end of a line and press the lever to snap to the next line immediately. That is what **`<br />`** does! \n\n* **Self-Closing**: It is an empty element! It has no closing tag (no `</br>`). Just write `<br />` to break a line.",
      pro: "### ↩️ Inline Line Breaks and Text Box Wrapping\nThe `<br>` element forces a line break within text blocks without introducing a paragraph margin.\n\n* **Semantics**: Use `<br>` only when line breaks are part of the content (e.g., addresses, poetry). Do not use `<br>` to create layout spacing; use CSS margins or padding instead."
    },
    hinglish: {
      kid: "### ↩️ <br /> Tag: Line Change Karna!\nJaise typewriter par 'Enter' daba kar line change hoti hai, waise hi HTML me line break ke liye **`<br />`** likhte hain. Ye ek empty (self-closing) tag hai, yaani iska koi closing tag nahi hota.",
      pro: "### ↩️ Line Breaks and Inline Flow Controls\n`<br>` element inline formatting models break layout wrap attributes configure karta hai:\n\n* **Layout Spacing**: Structure spacing values inline margins control block patterns update dynamic layout set karte hain.\n* **Accessibility**: Screen readers addresses lines parse content transition understand block define karte hain."
    },
    hindi: {
      kid: "### ↩️ <br /> टैग: लाइन बदलना (Enter दबाना)!\nकल्पना करें कि आप एक पुराने टाइपराइटर पर टाइप कर रहे हैं। लाइन बदलने के लिए आप एक बटन दबाते हैं, जिससे अगली लाइन शुरू हो जाती है। **`<br />`** टैग बिल्कुल यही काम करता है!\n\n* **स्व-समापन (Self-closing)**: इसे बंद करने के लिए `</br>` की आवश्यकता नहीं होती। बस एक लाइन तोड़ने के लिए `<br />` लिखें।",
      pro: "### ↩️ इनलाइन लाइन ब्रेक और सिमेंटिक्स\n`<br>` तत्व बिना किसी नई पैराग्राफ मार्जिन के इनलाइन टेक्स्ट प्रवाह में लाइन ब्रेक वियोजन बनाता है:\n\n* **उचित उपयोग**: इसका उपयोग केवल तभी करें जब लाइन बदलना सामग्री का हिस्सा हो (जैसे कि पता या कविता)। लेआउट या दूरी बढ़ाने के लिए खाली `<br>` का उपयोग न करें; उसके लिए CSS मार्जिन का उपयोग करें।"
    }
  },
  {
    id: 25,
    slug: "horizontal-rule-hr-tag-separator",
    title: "Horizontal Rules (<hr />)",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 2 (p. 38-39)",
    exercise: {
      question: "What is the primary semantic purpose of the <hr /> tag in HTML5?",
      options: [
        "To load background styles",
        "To mark a thematic shift or transition between topics",
        "To make text bold",
        "To draw borders around layout cards",
      ],
      correctAnswer: "To mark a thematic shift or transition between topics",
      hint: "It represents a thematic break, drawing a straight horizontal line by default."
    },
    english: {
      kid: "### 📏 The Horizontal Rule: Drawing Division Lines!\nWant to draw a straight line to separate two different stories on your page? Use the **`<hr />`** tag!\n\n* **Simple Divider**: It is a self-closing tag that draws a thin horizontal line across your webpage. Ideal for splitting chapters or recipes!",
      pro: "### 📏 Thematic Breaks and Visual Separators\nThe `<hr>` element represents a thematic break between paragraph-level topics in an HTML document.\n\n* **Styling**: By default, it renders as a thin gray border. Developers can style it using CSS (`border: 0; height: 1px; background: #333;`) to create visually pleasing dividers."
    },
    hinglish: {
      kid: "### 📏 <hr /> Tag: Division Line Banana!\nJab aapko page par do alag topics ke beech me ek divider line banani ho, toh **`<hr />`** use hota hai. Ye page par ek horizontal line draw kar deta hai, jisse content sections divide ho jaate hain.",
      pro: "### 📏 Thematic Section Separations and Visual Presentation\n`<hr>` element semantics and styles customization methods layout block control optimize karte hain:\n\n* **Semantic Division**: Screen readers rules page changes segment sections break parameters detect visual controls map standard interface.\n* **Presentation Override**: Custom styles override borders properties height layout format set properties default."
    },
    hindi: {
      kid: "### 📏 <hr /> टैग: विभाजक रेखा खींचना!\nयदि आप अपने वेबपेज पर दो अलग-अलग विषयों या अध्यायों के बीच एक सीधी विभाजक रेखा खींचना चाहते हैं, तो **`<hr />`** टैग का उपयोग करें!\n\n* **सरल विभाजक**: यह एक स्व-समापन टैग है जो स्क्रीन पर एक पतली क्षैतिज रेखा खींचता है।",
      pro: "### 📏 विषयगत बदलाव (Thematic Breaks) और दृश्य विभाजक\n`<hr>` तत्व पैराग्राफ-स्तर के विषयों के बीच एक विषयगत बदलाव का प्रतिनिधित्व करता है:\n\n* **CSS शैलीकरण**: डिफ़ॉल्ट रूप से यह एक पतली धूसर (gray) रेखा के रूप में प्रस्तुत होता है। डेवलपर्स CSS का उपयोग करके इसे और अधिक आकर्षक बना सकते हैं (उदा. `border: 0; height: 2px; bg-gradient`)।"
    }
  },
  {
    id: 26,
    slug: "div-tag-generic-block-level-container",
    title: "Div Containers (<div>)",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 8 (p. 184-186)",
    exercise: {
      question: "By default, what type of element layout is a <div>?",
      options: [
        "Block-level container",
        "Self-closing divider line",
        "Inline text highlighted block",
        "Form input element"
      ],
      correctAnswer: "Block-level container",
      hint: "It acts as a generic container box that takes up the full width and starts on a new line."
    },
    english: {
      kid: "### 📦 The <div> Tag: Packing Boxes!\nThink of **`<div>`** as a cardboard shipping box. By itself, it has no color, shape, or text. But it is super useful because you can put multiple headings, paragraphs, and images inside it to pack them together!\n\n* **Block Box**: It starts on a new line and spans the full width of the screen.",
      pro: "### 📦 Generic Division Container and Layout Blocks\nThe `<div>` element is a generic block-level container used for grouping elements for styling purposes or layout structure.\n\n* **Layout Foundation**: In modern layout design (Flexbox/Grid), `<div>` tags act as wrappers and parent containers to organize children elements programmatically."
    },
    hinglish: {
      kid: "### 📦 <div> Tag: Cardboard Box!\n`<div>` ek empty cardboard box ki tarah hai. Jab aapko bahut saare elements (headings, text, buttons) ko ek sath group karna ho, toh hum unhe ek `<div>` ke andar pack kar dete hain, jisse styling aur positioning aasan ho jaati hai.",
      pro: "### 📦 Block-Level Containers and Styling Hooks\n`<div>` tags layout wrapper system flexbox dynamic alignment create karta hai:\n\n* **Grouping Elements**: CSS properties classes apply grouping parent structure design layout organize settings controls target block.\n* **No Native Semantics**: Semantic tags availability block-level layout setups generic container structure uses."
    },
    hindi: {
      kid: "### 📦 <div> टैग: पैकेजिंग बॉक्स!\n**`<div>`** को गत्ते के डिब्बे की तरह समझें। इसका अपना कोई रंग या रूप नहीं होता, लेकिन यह बहुत उपयोगी है क्योंकि आप स्टाइल या संरेखण के लिए कई पैराग्राफ, हेडिंग और बटन को एक साथ इस बॉक्स के भीतर बंद कर सकते हैं!\n\n* **ब्लॉक बॉक्स**: यह हमेशा एक नई लाइन से शुरू होता है और स्क्रीन की पूरी चौड़ाई लेता है।",
      pro: "### 📦 सामान्य विभाजन (Division) कंटेनर और लेआउट\n`<div>` तत्व एक सामान्य ब्लॉक-स्तरीय कंटेनर है जिसका उपयोग तत्वों को समूहबद्ध करने के लिए किया जाता है:\n\n* **लेआउट की नींव**: आधुनिक वेब डिज़ाइन (जैसे CSS Flexbox या Grid) में, `<div>` टैग बाल तत्वों (child elements) को व्यवस्थित करने के लिए माता-पिता (parent) रैपर के रूप में कार्य करते हैं।\n* **कोई अंतर्निहित अर्थ नहीं**: यह एक खाली कंटेनर है जब तक कि आप इसे CSS या JavaScript नहीं देते।"
    }
  },
  {
    id: 27,
    slug: "span-tag-generic-inline-container",
    title: "Span Containers (<span>)",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 8 (p. 187-189)",
    exercise: {
      question: "Unlike <div>, what is the default rendering type of a <span> container?",
      options: [
        "Inline-level",
        "Self-closing empty element",
        "Italic text block",
        "Block-level",
      ],
      correctAnswer: "Inline-level",
      hint: "It wraps words inline on the same line without breaking to a new line!"
    },
    english: {
      kid: "### 🖍️ The <span> Tag: Color Highlight Marker!\nWhen you read a book and want to highlight just one word, you use a neon pen. The **`<span>`** tag is your neon highlighter in HTML! \n\n* **Inline Wrap**: Unlike `<div>`, a `<span>` does not start on a new line. It wraps specific words on the same line so you can style them individually.",
      pro: "### 🖍️ Inline Formatting and Targeted CSS Hooks\nThe `<span>` element is a generic inline container used to wrap small segments of text within a block-level element.\n\n* **Visual Behavior**: It does not force line breaks or vertical spacing. Developers wrap phrases in `<span>` to apply target CSS classes (e.g., custom colors, font-weights, or interactions) locally."
    },
    hinglish: {
      kid: "### 🖍️ <span> Tag: Text Highlighter!\nJaise padhte waise ek word ko highlight karne ke liye marker use karte hain, waise hi HTML me specific words ko style karne ke liye **`<span>`** tag use hota hai. Ye line break nahi karta, inline hi text ko wrap karta hai.",
      pro: "### 🖍️ Inline Container Model and Text Formatting\n`<span>` element local target selectors and visual styles control optimize karta hai:\n\n* **Inline Context**: Word wrapping structure dynamic blocks text flow modify inline spacing change attributes system layout wrap.\n* **Neutral Semantics**: Styling parameters dynamic values bind methods trigger local scripts hooks target."
    },
    hindi: {
      kid: "### 🖍️ <span> टैग: टेक्स्ट हाईलाइटर!\nजब आप किताब पढ़ते समय केवल एक विशिष्ट शब्द को हाइलाइट करना चाहते हैं, तो आप मार्कर पेन का उपयोग करते हैं। HTML में **`<span>`** टैग बिल्कुल यही मार्कर है!\n\n* **इनलाइन रैप (Inline wrapper)**: `<div>` के विपरीत, यह एक नई लाइन से शुरू नहीं होता है। यह शब्दों को उसी लाइन में समेटे रखता है ताकि आप केवल उन्हें अलग रंग दे सकें।",
      pro: "### 🖍️ इनलाइन कंटेनर और लक्षित (Targeted) सीएसएस\n`<span>` तत्व एक सामान्य इनलाइन कंटेनर है जिसका उपयोग ब्लॉक-स्तरीय तत्व के भीतर पाठ के छोटे हिस्सों को लपेटने के लिए किया जाता है:\n\n* **दृश्य विशेषता**: यह लाइन ब्रेक या वर्टिकल स्पेसिंग नहीं बनाता है।\n* **लक्ष्य**: डेवलपर्स स्थानीय रूप से विशिष्ट शब्दों पर सीएसएस वर्ग (उदा. रंग, मोटाई) लागू करने के लिए इसका उपयोग करते हैं।"
    }
  },
  {
    id: 28,
    slug: "blockquote-tag-long-quotations-cite",
    title: "Blockquotes (<blockquote>)",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 2 (p. 40-42)",
    exercise: {
      question: "Which attribute is used inside <blockquote> to specify the official URL of the quoted source?",
      options: [
        "cite",
        "src",
        "source",
        "href",
      ],
      correctAnswer: "cite",
      hint: "The cite attribute contains the URL source of the quote, although it is invisible by default."
    },
    english: {
      kid: "### 💬 Blockquotes: Story Bubble!\nWant to showcase a famous quote from a book or a movie? The **`<blockquote>`** tag is like a big cartoon speech bubble! \n\n* **Indented Text**: The browser automatically pushes (indents) blockquote text inward from both sides to show readers that it is a direct quote from someone else.",
      pro: "### 💬 Section Quotations and Content Attribution\nThe `<blockquote>` element represents a section of content quoted from another source.\n\n* **Attribution Attributes**: Use the `cite` attribute to store the source URL semantically: `<blockquote cite=\"https://source.com\">...</blockquote>`.\n* **Layout Default**: Browsers display `<blockquote>` as a block-level element with default left and right margins (`40px`)."
    },
    hinglish: {
      kid: "### 💬 <blockquote> Tag: Badi Quotes Dikhana!\nKisi famous personality ya book ki lambi quote ko webpage par alag se dikhane ke liye **`<blockquote>`** tag use hota hai. Browser is text ko thoda indent (aage khiska) deta hai taaki ye normal paragraphs se alag lage.",
      pro: "### 💬 Block Quotation Semantics and Resource Attribution\n`<blockquote>` element document outline and citations management optimize karta hai:\n\n* **Attribution URL**: `cite` parameter metadata parameters configuration screen readers reference index link setup.\n* **Margining Controls**: Margin reset classes custom layout alignments override properties default styles."
    },
    hindi: {
      kid: "### 💬 <blockquote> टैग: बड़े उद्धरण (Quotes) प्रदर्शित करना!\nयदि आप किसी पुस्तक या प्रसिद्ध व्यक्ति का एक लंबा उद्धरण अपने वेबपेज पर दिखाना चाहते हैं, तो **`<blockquote>`** टैग का उपयोग करें। यह एक बड़े कार्टून स्पीच बबल की तरह काम करता है!\n\n* **आगे खिसकना (Indentation)**: ब्राउज़र उद्धरण के पाठ को दोनों तरफ से थोड़ा आगे खिसका देता है ताकि यह सामान्य पैराग्राफ से अलग दिखे।",
      pro: "### 💬 ब्लॉक उद्धरण (Blockquotes) और स्रोत रोपण\n`<blockquote>` तत्व किसी अन्य स्रोत से उद्धृत सामग्री के एक बड़े हिस्से का प्रतिनिधित्व करता है:\n\n* **मेटाडेटा**: उद्धरण के स्रोत का लिंक प्रदान करने के लिए `cite` विशेषता (attribute) का उपयोग करें।\n* **डिफ़ॉल्ट शैली**: ब्राउज़र ब्लॉक-स्तरीय लेआउट में दोनों तरफ डिफ़ॉल्ट रूप से अंतर (40px) लागू करते हैं।"
    }
  },
  {
    id: 29,
    slug: "inline-quote-q-tag-quotation-marks",
    title: "Inline Quotes (<q>)",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 2 (p. 43-44)",
    exercise: {
      question: "What does the browser automatically generate around text wrapped in a <q> tag?",
      options: [
        "A thin border outline",
        "Quotation marks",
        "Bullet markers",
        "Italicized font styles",
      ],
      correctAnswer: "Quotation marks",
      hint: "It automatically generates pretty quotation marks appropriate for the browser language!"
    },
    english: {
      kid: "### ✌️ Inline Quotes: Quotation Fingers!\nInstead of typing quotation marks (`\"` and `\"`) manually inside a sentence, you can wrap your quote in the **`<q>`** tag! \n\n* **Auto-Quotes**: The browser will automatically draw correct quotation marks around your text. It even updates quotation styles based on different countries!",
      pro: "### ✌️ Inline Quotations and Localized Typography Punctuation\nThe `<q>` element represents short inline quotations that do not require block-level structural isolation.\n\n* **Punctuation Rendering**: Browsers insert quotation marks around `<q>` content automatically. Using `<q>` is semantically superior to manual typing, as it enables localized punctuation adjustments based on the document's language tag."
    },
    hinglish: {
      kid: "### ✌️ <q> Tag: Small Quotes!\nSentence ke andar choti quotes likhne ke liye hum **`<q>`** tag use karte hain. Aapko double quotes (`\"`) manually type karne ki zaroorat nahi hai, browser apne aap quote marks add kar deta hai.",
      pro: "### ✌️ Inline Quotes and Punctuation Localization\n`<q>` element dynamic quotation marks rendering layout optimization manage karta hai:\n\n* **Auto Punctuation**: HTML document lang property check browser quotation marks style customize block standard sets.\n* **Strict Semantics**: Accessibility readers reading citation indexes context tracking parse enable karta hai."
    },
    hindi: {
      kid: "### ✌️ <q> टैग: इनलाइन उद्धरण (Inline Quotes)!\nवाक्य के बीच में छोटे उद्धरण लिखने के लिए, आप **`<q>`** टैग का उपयोग कर सकते हैं।\n\n* **स्वचालित उद्धरण चिह्न**: ब्राउज़र आपके पाठ के चारों ओर स्वचालित रूप से सुंदर उद्धरण चिह्न (quotation marks) लगा देगा, इसलिए आपको इसे मैन्युअल रूप से टाइप करने की आवश्यकता नहीं है।",
      pro: "### ✌️ इनलाइन उद्धरण और स्थानीयकरण (Localization)\n`<q>` तत्व लघु इनलाइन उद्धरणों का प्रतिनिधित्व करता है:\n\n* **उद्धरण चिह्न प्रस्तुति**: ब्राउज़र उपयोगकर्ता की भाषा सेटिंग के आधार पर स्वचालित रूप से सही प्रकार के उद्धरण चिह्न सम्मिलित करता है।\n* **सिमेंटिक्स**: यह स्क्रीन रीडर्स को यह पहचानने में मदद करता है कि पृष्ठ पर उद्धृत हिस्सा कहाँ से शुरू और समाप्त होता है।"
    }
  },
  {
    id: 30,
    slug: "address-tag-author-contact-information",
    title: "Address Details (<address>)",
    unit: "Unit 3: Structural Text & Layout Elements",
    bookRef: "Duckett Chapter 2 (p. 45-46)",
    exercise: {
      question: "Which tag is semantically designated to display the author's contact information?",
      options: [
        "<address>",
        "<contact>",
        "<mail>",
        "<info>"
      ],
      correctAnswer: "<address>",
      hint: "It contains phone numbers, emails, or office addresses, rendering in italics by default."
    },
    english: {
      kid: "### ✉️ The <address> Tag: Contact Me!\nIf you want to tell your readers how to write to you, email you, or call you, you use the **`<address>`** tag!\n\nIt makes the contact details stand out and look super professional (usually in italics!).\n\n```html\n<address>\n  Email: support@nextsem.online\n</address>\n```",
      pro: "### ✉️ The <address> Element: Semantic Contact Mapping\nThe `<address>` element represents contact information for its nearest `<article>` or `<body>` ancestor.\n\n* **Semantics**: Do not use `<address>` for arbitrary postal addresses unless they represent the contact points for the document.\n* **Presentation**: By default, browsers render `<address>` in italics."
    },
    hinglish: {
      kid: "### ✉️ <address> Tag: Contact Details Add Karna!\nWebpage me author ya owner ka contact information (jaise email, phone number, physical address) show karne ke liye hum **`<address>`** tag use karte hain.",
      pro: "### ✉️ Semantic Contact Specifications and Address Element\n`<address>` element doc specifications:\n\n* **Usage**: Document section or article footer me contact channels map karne ke liye iska use standard compliance structure setup karta hai."
    },
    hindi: {
      kid: "### ✉️ <address> टैग: संपर्क जानकारी!\nयदि आप अपने पाठकों को बताना चाहते हैं कि वे आपसे कैसे संपर्क करें, ईमेल करें या कॉल करें, तो आप **`<address>`** टैग का उपयोग करते हैं!\n\nयह संपर्क जानकारी को एक सुंदर इटैलिक शैली में दिखाता है।",
      pro: "### ✉️ <address> तत्व: संपर्क जानकारी सिमेंटिक्स\n`<address>` तत्व दस्तावेज़ के लेखक या स्वामी की संपर्क जानकारी का प्रतिनिधित्व करता है:\n\n* **नियम**: इसका उपयोग केवल वास्तविक संपर्क जानकारी के लिए करें, सामान्य डाक पते के लिए नहीं।"
    }
  },
  {
    id: 31,
    slug: "bold-b-vs-semantic-strong-tag",
    title: "Presentational Bold (<b>) vs. Semantic Strong (<strong>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 34-35)",
    exercise: {
      english: {
        question: "Which element conveys strong importance and is emphasized by screen readers?",
        options: ["<strong>","<b>","<span>","<mark>"],
        correctAnswer: "<strong>",
        hint: "Use <strong> for semantic importance and <b> for purely visual styling."
      },
      hinglish: {
        question: "Which element conveys strong importance and is emphasized by screen readers?",
        options: ["<strong>","<b>","<span>","<mark>"],
        correctAnswer: "<strong>",
        hint: "Use <strong> for semantic importance and <b> for purely visual styling."
      },
      hindi: {
        question: "Which element conveys strong importance and is emphasized by screen readers?",
        options: ["<strong>","<b>","<span>","<mark>"],
        correctAnswer: "<strong>",
        hint: "Use <strong> for semantic importance and <b> for purely visual styling."
      }
    },
    english: {
      kid: "* 1. <b> makes text bold visually.\n* 2. <strong> indicates great structural importance.\n* 3. Screen readers announce <strong> with emphasis.\n* 4. <b> has no special semantic meaning.\n* 5. Use <strong> for crucial warnings.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Bold vs Strong</title>\n</head>\n<body>\n\n  <h1>Important Notice</h1>\n  <p>Please read this <b>carefully</b> before starting.</p>\n  <p><strong>Warning:</strong> Never share your passwords!</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <b> makes text bold visually.\n* 2. <strong> indicates great structural importance.\n* 3. Screen readers announce <strong> with emphasis.\n* 4. <b> has no special semantic meaning.\n* 5. Use <strong> for crucial warnings.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Bold vs Strong</title>\n</head>\n<body>\n\n  <h1>Important Notice</h1>\n  <p>Please read this <b>carefully</b> before starting.</p>\n  <p><strong>Warning:</strong> Never share your passwords!</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <b> टेक्स्ट को विजुअली बोल्ड बनाता है।\n* 2. <strong> टेक्स्ट को मुख्य महत्व देता है।\n* 3. स्क्रीन रीडर <strong> को जोर देकर पढ़ते हैं।\n* 4. <b> का कोई खास अर्थ नहीं होता।\n* 5. जरूरी सूचना के लिए <strong> चुनें।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Bold vs Strong</title>\n</head>\n<body>\n\n  <h1>Important Notice</h1>\n  <p>Please read this <b>carefully</b> before starting.</p>\n  <p><strong>Warning:</strong> Never share your passwords!</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <b> टेक्स्ट को विजुअली बोल्ड बनाता है।\n* 2. <strong> टेक्स्ट को मुख्य महत्व देता है।\n* 3. स्क्रीन रीडर <strong> को जोर देकर पढ़ते हैं।\n* 4. <b> का कोई खास अर्थ नहीं होता।\n* 5. जरूरी सूचना के लिए <strong> चुनें।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Bold vs Strong</title>\n</head>\n<body>\n\n  <h1>Important Notice</h1>\n  <p>Please read this <b>carefully</b> before starting.</p>\n  <p><strong>Warning:</strong> Never share your passwords!</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <b> टेक्स्ट को विजुअली बोल्ड बनाता है।\n* 2. <strong> टेक्स्ट को मुख्य महत्व देता है।\n* 3. स्क्रीन रीडर <strong> को जोर देकर पढ़ते हैं।\n* 4. <b> का कोई खास अर्थ नहीं होता।\n* 5. जरूरी सूचना के लिए <strong> चुनें।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Bold vs Strong</title>\n</head>\n<body>\n\n  <h1>Important Notice</h1>\n  <p>Please read this <b>carefully</b> before starting.</p>\n  <p><strong>Warning:</strong> Never share your passwords!</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <b> टेक्स्ट को विजुअली बोल्ड बनाता है।\n* 2. <strong> टेक्स्ट को मुख्य महत्व देता है।\n* 3. स्क्रीन रीडर <strong> को जोर देकर पढ़ते हैं।\n* 4. <b> का कोई खास अर्थ नहीं होता।\n* 5. जरूरी सूचना के लिए <strong> चुनें।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Bold vs Strong</title>\n</head>\n<body>\n\n  <h1>Important Notice</h1>\n  <p>Please read this <b>carefully</b> before starting.</p>\n  <p><strong>Warning:</strong> Never share your passwords!</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 32,
    slug: "italic-i-vs-semantic-emphasis-em-tag",
    title: "Presentational Italic (<i>) vs. Semantic Emphasis (<em>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 35-36)",
    exercise: {
      english: {
        question: "Which tag adds semantic verbal stress to a sentence?",
        options: ["<em>","<i>","<cite>","<span>"],
        correctAnswer: "<em>",
        hint: "<em> changes the meaning by adding emphasis to spoken voice."
      },
      hinglish: {
        question: "Which tag adds semantic verbal stress to a sentence?",
        options: ["<em>","<i>","<cite>","<span>"],
        correctAnswer: "<em>",
        hint: "<em> changes the meaning by adding emphasis to spoken voice."
      },
      hindi: {
        question: "Which tag adds semantic verbal stress to a sentence?",
        options: ["<em>","<i>","<cite>","<span>"],
        correctAnswer: "<em>",
        hint: "<em> changes the meaning by adding emphasis to spoken voice."
      }
    },
    english: {
      kid: "* 1. <i> slants text without extra meaning.\n* 2. <em> adds verbal stress and emphasis.\n* 3. Screen readers stress words inside <em>.\n* 4. <i> is ideal for book titles.\n* 5. Both render in italic font style.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Italic vs Emphasis</title>\n</head>\n<body>\n\n  <p>I read the novel <i>The Great Gatsby</i> yesterday.</p>\n  <p>You <em>must</em> complete your assignment today!</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <i> slants text without extra meaning.\n* 2. <em> adds verbal stress and emphasis.\n* 3. Screen readers stress words inside <em>.\n* 4. <i> is ideal for book titles.\n* 5. Both render in italic font style.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Italic vs Emphasis</title>\n</head>\n<body>\n\n  <p>I read the novel <i>The Great Gatsby</i> yesterday.</p>\n  <p>You <em>must</em> complete your assignment today!</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <i> टेक्स्ट को तिरछा (Italic) दिखाता है।\n* 2. <em> टेक्स्ट पर विशेष जोर देता है।\n* 3. स्क्रीन रीडर <em> को तनाव देकर पढ़ते हैं।\n* 4. <i> किताबों के नाम के लिए उपयुक्त है।\n* 5. दोनों ब्राउज़र में इटैलिक दिखते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Italic vs Emphasis</title>\n</head>\n<body>\n\n  <p>I read the novel <i>The Great Gatsby</i> yesterday.</p>\n  <p>You <em>must</em> complete your assignment today!</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <i> टेक्स्ट को तिरछा (Italic) दिखाता है।\n* 2. <em> टेक्स्ट पर विशेष जोर देता है।\n* 3. स्क्रीन रीडर <em> को तनाव देकर पढ़ते हैं।\n* 4. <i> किताबों के नाम के लिए उपयुक्त है।\n* 5. दोनों ब्राउज़र में इटैलिक दिखते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Italic vs Emphasis</title>\n</head>\n<body>\n\n  <p>I read the novel <i>The Great Gatsby</i> yesterday.</p>\n  <p>You <em>must</em> complete your assignment today!</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <i> टेक्स्ट को तिरछा (Italic) दिखाता है।\n* 2. <em> टेक्स्ट पर विशेष जोर देता है।\n* 3. स्क्रीन रीडर <em> को तनाव देकर पढ़ते हैं।\n* 4. <i> किताबों के नाम के लिए उपयुक्त है।\n* 5. दोनों ब्राउज़र में इटैलिक दिखते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Italic vs Emphasis</title>\n</head>\n<body>\n\n  <p>I read the novel <i>The Great Gatsby</i> yesterday.</p>\n  <p>You <em>must</em> complete your assignment today!</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <i> टेक्स्ट को तिरछा (Italic) दिखाता है।\n* 2. <em> टेक्स्ट पर विशेष जोर देता है।\n* 3. स्क्रीन रीडर <em> को तनाव देकर पढ़ते हैं।\n* 4. <i> किताबों के नाम के लिए उपयुक्त है।\n* 5. दोनों ब्राउज़र में इटैलिक दिखते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Italic vs Emphasis</title>\n</head>\n<body>\n\n  <p>I read the novel <i>The Great Gatsby</i> yesterday.</p>\n  <p>You <em>must</em> complete your assignment today!</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 33,
    slug: "highlight-text-mark-tag-search-results",
    title: "Highlighted Text (<mark>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 37-38)",
    exercise: {
      english: {
        question: "Which HTML5 tag is used to highlight text with a yellow background by default?",
        options: ["<mark>","<highlight>","<yellow>","<spotlight>"],
        correctAnswer: "<mark>",
        hint: "The <mark> tag represents text marked or highlighted for reference."
      },
      hinglish: {
        question: "Which HTML5 tag is used to highlight text with a yellow background by default?",
        options: ["<mark>","<highlight>","<yellow>","<spotlight>"],
        correctAnswer: "<mark>",
        hint: "The <mark> tag represents text marked or highlighted for reference."
      },
      hindi: {
        question: "Which HTML5 tag is used to highlight text with a yellow background by default?",
        options: ["<mark>","<highlight>","<yellow>","<spotlight>"],
        correctAnswer: "<mark>",
        hint: "The <mark> tag represents text marked or highlighted for reference."
      }
    },
    english: {
      kid: "* 1. <mark> highlights text with yellow background.\n* 2. It marks relevant or searched words.\n* 3. Browsers style it like highlighter pens.\n* 4. It works as an inline element.\n* 5. Useful for highlighting search query results.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Mark Element</title>\n</head>\n<body>\n\n  <h1>Search Results for 'HTML'</h1>\n  <p>Learn <mark>HTML</mark> to build modern web pages.</p>\n  <p>Remember to buy <mark>fresh milk</mark> today.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <mark> highlights text with yellow background.\n* 2. It marks relevant or searched words.\n* 3. Browsers style it like highlighter pens.\n* 4. It works as an inline element.\n* 5. Useful for highlighting search query results.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Mark Element</title>\n</head>\n<body>\n\n  <h1>Search Results for 'HTML'</h1>\n  <p>Learn <mark>HTML</mark> to build modern web pages.</p>\n  <p>Remember to buy <mark>fresh milk</mark> today.</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <mark> टेक्स्ट पर पीला बैकग्राउंड लगाता है।\n* 2. यह खोजे गए शब्दों को दर्शाता है।\n* 3. ब्राउज़र इसे हाइलाइटर पेन जैसा दिखाता है।\n* 4. यह एक इनलाइन एलिमेंट होता है।\n* 5. सर्च रिजल्ट्स हाइलाइट करने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Mark Element</title>\n</head>\n<body>\n\n  <h1>Search Results for 'HTML'</h1>\n  <p>Learn <mark>HTML</mark> to build modern web pages.</p>\n  <p>Remember to buy <mark>fresh milk</mark> today.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <mark> टेक्स्ट पर पीला बैकग्राउंड लगाता है।\n* 2. यह खोजे गए शब्दों को दर्शाता है।\n* 3. ब्राउज़र इसे हाइलाइटर पेन जैसा दिखाता है।\n* 4. यह एक इनलाइन एलिमेंट होता है।\n* 5. सर्च रिजल्ट्स हाइलाइट करने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Mark Element</title>\n</head>\n<body>\n\n  <h1>Search Results for 'HTML'</h1>\n  <p>Learn <mark>HTML</mark> to build modern web pages.</p>\n  <p>Remember to buy <mark>fresh milk</mark> today.</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <mark> टेक्स्ट पर पीला बैकग्राउंड लगाता है।\n* 2. यह खोजे गए शब्दों को दर्शाता है।\n* 3. ब्राउज़र इसे हाइलाइटर पेन जैसा दिखाता है।\n* 4. यह एक इनलाइन एलिमेंट होता है।\n* 5. सर्च रिजल्ट्स हाइलाइट करने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Mark Element</title>\n</head>\n<body>\n\n  <h1>Search Results for 'HTML'</h1>\n  <p>Learn <mark>HTML</mark> to build modern web pages.</p>\n  <p>Remember to buy <mark>fresh milk</mark> today.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <mark> टेक्स्ट पर पीला बैकग्राउंड लगाता है।\n* 2. यह खोजे गए शब्दों को दर्शाता है।\n* 3. ब्राउज़र इसे हाइलाइटर पेन जैसा दिखाता है।\n* 4. यह एक इनलाइन एलिमेंट होता है।\n* 5. सर्च रिजल्ट्स हाइलाइट करने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Mark Element</title>\n</head>\n<body>\n\n  <h1>Search Results for 'HTML'</h1>\n  <p>Learn <mark>HTML</mark> to build modern web pages.</p>\n  <p>Remember to buy <mark>fresh milk</mark> today.</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 34,
    slug: "monospace-code-snippet-code-tag",
    title: "Code Snippets (<code>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 45)",
    exercise: {
      english: {
        question: "Which tag displays inline computer code in a monospace font?",
        options: ["<code>","<program>","<var>","<script>"],
        correctAnswer: "<code>",
        hint: "Use <code> for inline code phrases and variable names."
      },
      hinglish: {
        question: "Which tag displays inline computer code in a monospace font?",
        options: ["<code>","<program>","<var>","<script>"],
        correctAnswer: "<code>",
        hint: "Use <code> for inline code phrases and variable names."
      },
      hindi: {
        question: "Which tag displays inline computer code in a monospace font?",
        options: ["<code>","<program>","<var>","<script>"],
        correctAnswer: "<code>",
        hint: "Use <code> for inline code phrases and variable names."
      }
    },
    english: {
      kid: "* 1. <code> displays inline computer code.\n* 2. It uses a monospace fixed-width font.\n* 3. Characters take up equal horizontal space.\n* 4. Ideal for keywords, variables, and filenames.\n* 5. Nest inside <pre> for multiple lines.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Code Element</title>\n</head>\n<body>\n\n  <h2>JavaScript Variables</h2>\n  <p>Use the <code>let</code> keyword to declare variables.</p>\n  <p>Call <code>console.log()</code> to print debug output.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <code> displays inline computer code.\n* 2. It uses a monospace fixed-width font.\n* 3. Characters take up equal horizontal space.\n* 4. Ideal for keywords, variables, and filenames.\n* 5. Nest inside <pre> for multiple lines.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Code Element</title>\n</head>\n<body>\n\n  <h2>JavaScript Variables</h2>\n  <p>Use the <code>let</code> keyword to declare variables.</p>\n  <p>Call <code>console.log()</code> to print debug output.</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <code> कंप्यूटर कोड दिखाने के लिए है।\n* 2. यह मोनोस्पेस फॉन्ट का उपयोग करता है।\n* 3. सभी अक्षरों की चौड़ाई समान होती है।\n* 4. वैरिएबल्स और फाइलनाम लिखने के लिए उपयुक्त।\n* 5. मल्टी-लाइन कोड के लिए <pre> जोड़ें।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Code Element</title>\n</head>\n<body>\n\n  <h2>JavaScript Variables</h2>\n  <p>Use the <code>let</code> keyword to declare variables.</p>\n  <p>Call <code>console.log()</code> to print debug output.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <code> कंप्यूटर कोड दिखाने के लिए है।\n* 2. यह मोनोस्पेस फॉन्ट का उपयोग करता है।\n* 3. सभी अक्षरों की चौड़ाई समान होती है।\n* 4. वैरिएबल्स और फाइलनाम लिखने के लिए उपयुक्त।\n* 5. मल्टी-लाइन कोड के लिए <pre> जोड़ें।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Code Element</title>\n</head>\n<body>\n\n  <h2>JavaScript Variables</h2>\n  <p>Use the <code>let</code> keyword to declare variables.</p>\n  <p>Call <code>console.log()</code> to print debug output.</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <code> कंप्यूटर कोड दिखाने के लिए है।\n* 2. यह मोनोस्पेस फॉन्ट का उपयोग करता है।\n* 3. सभी अक्षरों की चौड़ाई समान होती है।\n* 4. वैरिएबल्स और फाइलनाम लिखने के लिए उपयुक्त।\n* 5. मल्टी-लाइन कोड के लिए <pre> जोड़ें।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Code Element</title>\n</head>\n<body>\n\n  <h2>JavaScript Variables</h2>\n  <p>Use the <code>let</code> keyword to declare variables.</p>\n  <p>Call <code>console.log()</code> to print debug output.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <code> कंप्यूटर कोड दिखाने के लिए है।\n* 2. यह मोनोस्पेस फॉन्ट का उपयोग करता है।\n* 3. सभी अक्षरों की चौड़ाई समान होती है।\n* 4. वैरिएबल्स और फाइलनाम लिखने के लिए उपयुक्त।\n* 5. मल्टी-लाइन कोड के लिए <pre> जोड़ें।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Code Element</title>\n</head>\n<body>\n\n  <h2>JavaScript Variables</h2>\n  <p>Use the <code>let</code> keyword to declare variables.</p>\n  <p>Call <code>console.log()</code> to print debug output.</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 35,
    slug: "preformatted-text-pre-tag-spaces-tabs",
    title: "Preformatted Text (<pre>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 46)",
    exercise: {
      english: {
        question: "Which tag preserves whitespaces and line breaks exactly as typed?",
        options: ["<pre>","<p>","<format>","<raw>"],
        correctAnswer: "<pre>",
        hint: "The <pre> element represents preformatted text."
      },
      hinglish: {
        question: "Which tag preserves whitespaces and line breaks exactly as typed?",
        options: ["<pre>","<p>","<format>","<raw>"],
        correctAnswer: "<pre>",
        hint: "The <pre> element represents preformatted text."
      },
      hindi: {
        question: "Which tag preserves whitespaces and line breaks exactly as typed?",
        options: ["<pre>","<p>","<format>","<raw>"],
        correctAnswer: "<pre>",
        hint: "The <pre> element represents preformatted text."
      }
    },
    english: {
      kid: "* 1. <pre> preserves exact spaces and linebreaks.\n* 2. Normal HTML collapses multiple spaces automatically.\n* 3. <pre> displays text in monospace font.\n* 4. Perfect for ASCII art and poems.\n* 5. Combine with <code> for code blocks.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Preformatted Text</title>\n</head>\n<body>\n\n  <h2>Preformatted Code Block</h2>\n  <pre>\nfunction sayHello() {\n    let message = \"Hello, World!\";\n    return message;\n}\n  </pre>\n\n</body>\n</html>\n```",
      pro: "* 1. <pre> preserves exact spaces and linebreaks.\n* 2. Normal HTML collapses multiple spaces automatically.\n* 3. <pre> displays text in monospace font.\n* 4. Perfect for ASCII art and poems.\n* 5. Combine with <code> for code blocks.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Preformatted Text</title>\n</head>\n<body>\n\n  <h2>Preformatted Code Block</h2>\n  <pre>\nfunction sayHello() {\n    let message = \"Hello, World!\";\n    return message;\n}\n  </pre>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <pre> सभी स्पेस और लाइन ब्रेक सुरक्षित रखता है।\n* 2. साधारण HTML खाली स्पेस को हटा देता है।\n* 3. <pre> मोनोस्पेस फॉन्ट में प्रदर्शित होता है।\n* 4. ASCII आर्ट और कविताओं के लिए उत्तम है।\n* 5. कोड ब्लॉक के लिए <code> के साथ मिलाएं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Preformatted Text</title>\n</head>\n<body>\n\n  <h2>Preformatted Code Block</h2>\n  <pre>\nfunction sayHello() {\n    let message = \"Hello, World!\";\n    return message;\n}\n  </pre>\n\n</body>\n</html>\n```",
      pro: "* 1. <pre> सभी स्पेस और लाइन ब्रेक सुरक्षित रखता है।\n* 2. साधारण HTML खाली स्पेस को हटा देता है।\n* 3. <pre> मोनोस्पेस फॉन्ट में प्रदर्शित होता है।\n* 4. ASCII आर्ट और कविताओं के लिए उत्तम है।\n* 5. कोड ब्लॉक के लिए <code> के साथ मिलाएं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Preformatted Text</title>\n</head>\n<body>\n\n  <h2>Preformatted Code Block</h2>\n  <pre>\nfunction sayHello() {\n    let message = \"Hello, World!\";\n    return message;\n}\n  </pre>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <pre> सभी स्पेस और लाइन ब्रेक सुरक्षित रखता है।\n* 2. साधारण HTML खाली स्पेस को हटा देता है।\n* 3. <pre> मोनोस्पेस फॉन्ट में प्रदर्शित होता है।\n* 4. ASCII आर्ट और कविताओं के लिए उत्तम है।\n* 5. कोड ब्लॉक के लिए <code> के साथ मिलाएं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Preformatted Text</title>\n</head>\n<body>\n\n  <h2>Preformatted Code Block</h2>\n  <pre>\nfunction sayHello() {\n    let message = \"Hello, World!\";\n    return message;\n}\n  </pre>\n\n</body>\n</html>\n```",
      pro: "* 1. <pre> सभी स्पेस और लाइन ब्रेक सुरक्षित रखता है।\n* 2. साधारण HTML खाली स्पेस को हटा देता है।\n* 3. <pre> मोनोस्पेस फॉन्ट में प्रदर्शित होता है।\n* 4. ASCII आर्ट और कविताओं के लिए उत्तम है।\n* 5. कोड ब्लॉक के लिए <code> के साथ मिलाएं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Preformatted Text</title>\n</head>\n<body>\n\n  <h2>Preformatted Code Block</h2>\n  <pre>\nfunction sayHello() {\n    let message = \"Hello, World!\";\n    return message;\n}\n  </pre>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 36,
    slug: "insert-ins-and-delete-del-tags",
    title: "Insertions (<ins>) & Deletions (<del>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 48)",
    exercise: {
      english: {
        question: "Which tag is used to represent inserted text with an underline?",
        options: ["<ins>","<add>","<u>","<new>"],
        correctAnswer: "<ins>",
        hint: "<ins> represents text inserted into the document."
      },
      hinglish: {
        question: "Which tag is used to represent inserted text with an underline?",
        options: ["<ins>","<add>","<u>","<new>"],
        correctAnswer: "<ins>",
        hint: "<ins> represents text inserted into the document."
      },
      hindi: {
        question: "Which tag is used to represent inserted text with an underline?",
        options: ["<ins>","<add>","<u>","<new>"],
        correctAnswer: "<ins>",
        hint: "<ins> represents text inserted into the document."
      }
    },
    english: {
      kid: "* 1. <del> marks deleted or removed text.\n* 2. <del> displays text with a strikethrough.\n* 3. <ins> marks newly inserted replacement text.\n* 4. <ins> renders text with an underline.\n* 5. Useful for document revision change tracking.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Insert and Delete</title>\n</head>\n<body>\n\n  <h1>Shopping List Updates</h1>\n  <p>My favorite color is <del>blue</del> <ins>emerald green</ins>.</p>\n  <p>Price: <del>$100</del> <ins>$49</ins></p>\n\n</body>\n</html>\n```",
      pro: "* 1. <del> marks deleted or removed text.\n* 2. <del> displays text with a strikethrough.\n* 3. <ins> marks newly inserted replacement text.\n* 4. <ins> renders text with an underline.\n* 5. Useful for document revision change tracking.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Insert and Delete</title>\n</head>\n<body>\n\n  <h1>Shopping List Updates</h1>\n  <p>My favorite color is <del>blue</del> <ins>emerald green</ins>.</p>\n  <p>Price: <del>$100</del> <ins>$49</ins></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <del> हटाए गए टेक्स्ट को दर्शाता है।\n* 2. <del> टेक्स्ट पर स्ट्राइकथ्रू लाइन लगाता है।\n* 3. <ins> नए जोड़े गए टेक्स्ट को दिखाता है।\n* 4. <ins> टेक्स्ट को अंडरलाइन करके दिखाता है।\n* 5. दस्तावेज़ संशोधन ट्रैक करने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Insert and Delete</title>\n</head>\n<body>\n\n  <h1>Shopping List Updates</h1>\n  <p>My favorite color is <del>blue</del> <ins>emerald green</ins>.</p>\n  <p>Price: <del>$100</del> <ins>$49</ins></p>\n\n</body>\n</html>\n```",
      pro: "* 1. <del> हटाए गए टेक्स्ट को दर्शाता है।\n* 2. <del> टेक्स्ट पर स्ट्राइकथ्रू लाइन लगाता है।\n* 3. <ins> नए जोड़े गए टेक्स्ट को दिखाता है।\n* 4. <ins> टेक्स्ट को अंडरलाइन करके दिखाता है।\n* 5. दस्तावेज़ संशोधन ट्रैक करने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Insert and Delete</title>\n</head>\n<body>\n\n  <h1>Shopping List Updates</h1>\n  <p>My favorite color is <del>blue</del> <ins>emerald green</ins>.</p>\n  <p>Price: <del>$100</del> <ins>$49</ins></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <del> हटाए गए टेक्स्ट को दर्शाता है।\n* 2. <del> टेक्स्ट पर स्ट्राइकथ्रू लाइन लगाता है।\n* 3. <ins> नए जोड़े गए टेक्स्ट को दिखाता है।\n* 4. <ins> टेक्स्ट को अंडरलाइन करके दिखाता है।\n* 5. दस्तावेज़ संशोधन ट्रैक करने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Insert and Delete</title>\n</head>\n<body>\n\n  <h1>Shopping List Updates</h1>\n  <p>My favorite color is <del>blue</del> <ins>emerald green</ins>.</p>\n  <p>Price: <del>$100</del> <ins>$49</ins></p>\n\n</body>\n</html>\n```",
      pro: "* 1. <del> हटाए गए टेक्स्ट को दर्शाता है।\n* 2. <del> टेक्स्ट पर स्ट्राइकथ्रू लाइन लगाता है।\n* 3. <ins> नए जोड़े गए टेक्स्ट को दिखाता है।\n* 4. <ins> टेक्स्ट को अंडरलाइन करके दिखाता है।\n* 5. दस्तावेज़ संशोधन ट्रैक करने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Insert and Delete</title>\n</head>\n<body>\n\n  <h1>Shopping List Updates</h1>\n  <p>My favorite color is <del>blue</del> <ins>emerald green</ins>.</p>\n  <p>Price: <del>$100</del> <ins>$49</ins></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 37,
    slug: "strikethrough-s-tag-outdated-content",
    title: "Strikethrough (<s>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 49)",
    exercise: {
      english: {
        question: "Which tag represents content that is no longer accurate or relevant?",
        options: ["<s>","<strike>","<cut>","<remove>"],
        correctAnswer: "<s>",
        hint: "The <s> tag renders a strikethrough for outdated info."
      },
      hinglish: {
        question: "Which tag represents content that is no longer accurate or relevant?",
        options: ["<s>","<strike>","<cut>","<remove>"],
        correctAnswer: "<s>",
        hint: "The <s> tag renders a strikethrough for outdated info."
      },
      hindi: {
        question: "Which tag represents content that is no longer accurate or relevant?",
        options: ["<s>","<strike>","<cut>","<remove>"],
        correctAnswer: "<s>",
        hint: "The <s> tag renders a strikethrough for outdated info."
      }
    },
    english: {
      kid: "* 1. <s> represents no longer accurate text.\n* 2. It draws a line through text.\n* 3. Unlike <del>, it represents outdated items.\n* 4. Great for discontinued product sale prices.\n* 5. It works as an inline element.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Strikethrough Element</title>\n</head>\n<body>\n\n  <h2>Product Clearance Sale</h2>\n  <p>Original Price: <s>$80</s></p>\n  <p>Discounted Sale Price: $39</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <s> represents no longer accurate text.\n* 2. It draws a line through text.\n* 3. Unlike <del>, it represents outdated items.\n* 4. Great for discontinued product sale prices.\n* 5. It works as an inline element.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Strikethrough Element</title>\n</head>\n<body>\n\n  <h2>Product Clearance Sale</h2>\n  <p>Original Price: <s>$80</s></p>\n  <p>Discounted Sale Price: $39</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <s> पुराना या अमान्य टेक्स्ट दर्शाता है।\n* 2. यह टेक्स्ट के बीच से रेखा खींचता है।\n* 3. <del> से अलग, यह अप्रचलित सामग्री दिखाता है।\n* 4. डिस्काउंट सेल कीमतों के लिए उत्तम है।\n* 5. यह एक इनलाइन तत्व होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Strikethrough Element</title>\n</head>\n<body>\n\n  <h2>Product Clearance Sale</h2>\n  <p>Original Price: <s>$80</s></p>\n  <p>Discounted Sale Price: $39</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <s> पुराना या अमान्य टेक्स्ट दर्शाता है।\n* 2. यह टेक्स्ट के बीच से रेखा खींचता है।\n* 3. <del> से अलग, यह अप्रचलित सामग्री दिखाता है।\n* 4. डिस्काउंट सेल कीमतों के लिए उत्तम है।\n* 5. यह एक इनलाइन तत्व होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Strikethrough Element</title>\n</head>\n<body>\n\n  <h2>Product Clearance Sale</h2>\n  <p>Original Price: <s>$80</s></p>\n  <p>Discounted Sale Price: $39</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <s> पुराना या अमान्य टेक्स्ट दर्शाता है।\n* 2. यह टेक्स्ट के बीच से रेखा खींचता है।\n* 3. <del> से अलग, यह अप्रचलित सामग्री दिखाता है।\n* 4. डिस्काउंट सेल कीमतों के लिए उत्तम है।\n* 5. यह एक इनलाइन तत्व होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Strikethrough Element</title>\n</head>\n<body>\n\n  <h2>Product Clearance Sale</h2>\n  <p>Original Price: <s>$80</s></p>\n  <p>Discounted Sale Price: $39</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <s> पुराना या अमान्य टेक्स्ट दर्शाता है।\n* 2. यह टेक्स्ट के बीच से रेखा खींचता है।\n* 3. <del> से अलग, यह अप्रचलित सामग्री दिखाता है।\n* 4. डिस्काउंट सेल कीमतों के लिए उत्तम है।\n* 5. यह एक इनलाइन तत्व होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Strikethrough Element</title>\n</head>\n<body>\n\n  <h2>Product Clearance Sale</h2>\n  <p>Original Price: <s>$80</s></p>\n  <p>Discounted Sale Price: $39</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 38,
    slug: "abbreviation-abbr-tag-title-tooltip",
    title: "Abbreviations (<abbr>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 42)",
    exercise: {
      english: {
        question: "Which attribute inside <abbr> stores the full expanded text tooltip?",
        options: ["title","desc","tooltip","full"],
        correctAnswer: "title",
        hint: "Hovering over the <abbr title=\"...\"> displays the title value."
      },
      hinglish: {
        question: "Which attribute inside <abbr> stores the full expanded text tooltip?",
        options: ["title","desc","tooltip","full"],
        correctAnswer: "title",
        hint: "Hovering over the <abbr title=\"...\"> displays the title value."
      },
      hindi: {
        question: "Which attribute inside <abbr> stores the full expanded text tooltip?",
        options: ["title","desc","tooltip","full"],
        correctAnswer: "title",
        hint: "Hovering over the <abbr title=\"...\"> displays the title value."
      }
    },
    english: {
      kid: "* 1. <abbr> defines abbreviations and acronyms.\n* 2. Use the title attribute for definitions.\n* 3. Hovering mouse shows full definition tooltip.\n* 4. Browsers show a dotted underline style.\n* 5. Helps screen readers expand short forms.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Abbreviations</title>\n</head>\n<body>\n\n  <h2>Web Standards</h2>\n  <p>The <abbr title=\"World Wide Web\">WWW</abbr> was invented in 1989.</p>\n  <p>We write <abbr title=\"HyperText Markup Language\">HTML</abbr> daily.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <abbr> defines abbreviations and acronyms.\n* 2. Use the title attribute for definitions.\n* 3. Hovering mouse shows full definition tooltip.\n* 4. Browsers show a dotted underline style.\n* 5. Helps screen readers expand short forms.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Abbreviations</title>\n</head>\n<body>\n\n  <h2>Web Standards</h2>\n  <p>The <abbr title=\"World Wide Web\">WWW</abbr> was invented in 1989.</p>\n  <p>We write <abbr title=\"HyperText Markup Language\">HTML</abbr> daily.</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <abbr> संक्षिप्त रूपों को परिभाषित करता है।\n* 2. पूरे अर्थ के लिए title अट्रिब्यूट लगाएं।\n* 3. माउस ले जाने पर टूलटिप दिखाई देता है।\n* 4. ब्राउज़र बिंदीदार अंडरलाइन प्रदर्शित करते हैं।\n* 5. स्क्रीन रीडर्स को पूरा नाम समझने में मदद करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Abbreviations</title>\n</head>\n<body>\n\n  <h2>Web Standards</h2>\n  <p>The <abbr title=\"World Wide Web\">WWW</abbr> was invented in 1989.</p>\n  <p>We write <abbr title=\"HyperText Markup Language\">HTML</abbr> daily.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <abbr> संक्षिप्त रूपों को परिभाषित करता है।\n* 2. पूरे अर्थ के लिए title अट्रिब्यूट लगाएं।\n* 3. माउस ले जाने पर टूलटिप दिखाई देता है।\n* 4. ब्राउज़र बिंदीदार अंडरलाइन प्रदर्शित करते हैं।\n* 5. स्क्रीन रीडर्स को पूरा नाम समझने में मदद करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Abbreviations</title>\n</head>\n<body>\n\n  <h2>Web Standards</h2>\n  <p>The <abbr title=\"World Wide Web\">WWW</abbr> was invented in 1989.</p>\n  <p>We write <abbr title=\"HyperText Markup Language\">HTML</abbr> daily.</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <abbr> संक्षिप्त रूपों को परिभाषित करता है।\n* 2. पूरे अर्थ के लिए title अट्रिब्यूट लगाएं।\n* 3. माउस ले जाने पर टूलटिप दिखाई देता है।\n* 4. ब्राउज़र बिंदीदार अंडरलाइन प्रदर्शित करते हैं।\n* 5. स्क्रीन रीडर्स को पूरा नाम समझने में मदद करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Abbreviations</title>\n</head>\n<body>\n\n  <h2>Web Standards</h2>\n  <p>The <abbr title=\"World Wide Web\">WWW</abbr> was invented in 1989.</p>\n  <p>We write <abbr title=\"HyperText Markup Language\">HTML</abbr> daily.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <abbr> संक्षिप्त रूपों को परिभाषित करता है।\n* 2. पूरे अर्थ के लिए title अट्रिब्यूट लगाएं।\n* 3. माउस ले जाने पर टूलटिप दिखाई देता है।\n* 4. ब्राउज़र बिंदीदार अंडरलाइन प्रदर्शित करते हैं।\n* 5. स्क्रीन रीडर्स को पूरा नाम समझने में मदद करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Abbreviations</title>\n</head>\n<body>\n\n  <h2>Web Standards</h2>\n  <p>The <abbr title=\"World Wide Web\">WWW</abbr> was invented in 1989.</p>\n  <p>We write <abbr title=\"HyperText Markup Language\">HTML</abbr> daily.</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 39,
    slug: "defining-term-dfn-tag-first-instance",
    title: "Defining Terms (<dfn>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 41)",
    exercise: {
      english: {
        question: "Which tag marks the term being defined in a dictionary or glossary sentence?",
        options: ["<dfn>","<term>","<define>","<vocab>"],
        correctAnswer: "<dfn>",
        hint: "<dfn> represents the defining instance of a term."
      },
      hinglish: {
        question: "Which tag marks the term being defined in a dictionary or glossary sentence?",
        options: ["<dfn>","<term>","<define>","<vocab>"],
        correctAnswer: "<dfn>",
        hint: "<dfn> represents the defining instance of a term."
      },
      hindi: {
        question: "Which tag marks the term being defined in a dictionary or glossary sentence?",
        options: ["<dfn>","<term>","<define>","<vocab>"],
        correctAnswer: "<dfn>",
        hint: "<dfn> represents the defining instance of a term."
      }
    },
    english: {
      kid: "* 1. <dfn> marks the defining instance term.\n* 2. Use it when first introducing terms.\n* 3. Browsers render <dfn> in italic style.\n* 4. Helps search engines build vocabulary indexes.\n* 5. The nearest sentence explains the definition.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Defining Terms</title>\n</head>\n<body>\n\n  <h2>Web Terminology</h2>\n  <p><dfn>HTML</dfn> is the standard language used to create webpages.</p>\n  <p><dfn>CSS</dfn> describes how HTML elements are styled on screen.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <dfn> marks the defining instance term.\n* 2. Use it when first introducing terms.\n* 3. Browsers render <dfn> in italic style.\n* 4. Helps search engines build vocabulary indexes.\n* 5. The nearest sentence explains the definition.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Defining Terms</title>\n</head>\n<body>\n\n  <h2>Web Terminology</h2>\n  <p><dfn>HTML</dfn> is the standard language used to create webpages.</p>\n  <p><dfn>CSS</dfn> describes how HTML elements are styled on screen.</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <dfn> पहली बार समझाए गए शब्द को चिह्नित करता है।\n* 2. नए तकनीकी शब्दों की परिभाषा में उपयोग करें।\n* 3. ब्राउज़र इसे इटैलिक स्टाइल में दिखाते हैं।\n* 4. सर्च इंजन को शब्दावली इंडेक्स बनाने में मदद करता है।\n* 5. आसपास का वाक्य शब्द की परिभाषा समझाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Defining Terms</title>\n</head>\n<body>\n\n  <h2>Web Terminology</h2>\n  <p><dfn>HTML</dfn> is the standard language used to create webpages.</p>\n  <p><dfn>CSS</dfn> describes how HTML elements are styled on screen.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <dfn> पहली बार समझाए गए शब्द को चिह्नित करता है।\n* 2. नए तकनीकी शब्दों की परिभाषा में उपयोग करें।\n* 3. ब्राउज़र इसे इटैलिक स्टाइल में दिखाते हैं।\n* 4. सर्च इंजन को शब्दावली इंडेक्स बनाने में मदद करता है।\n* 5. आसपास का वाक्य शब्द की परिभाषा समझाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Defining Terms</title>\n</head>\n<body>\n\n  <h2>Web Terminology</h2>\n  <p><dfn>HTML</dfn> is the standard language used to create webpages.</p>\n  <p><dfn>CSS</dfn> describes how HTML elements are styled on screen.</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <dfn> पहली बार समझाए गए शब्द को चिह्नित करता है।\n* 2. नए तकनीकी शब्दों की परिभाषा में उपयोग करें।\n* 3. ब्राउज़र इसे इटैलिक स्टाइल में दिखाते हैं।\n* 4. सर्च इंजन को शब्दावली इंडेक्स बनाने में मदद करता है।\n* 5. आसपास का वाक्य शब्द की परिभाषा समझाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Defining Terms</title>\n</head>\n<body>\n\n  <h2>Web Terminology</h2>\n  <p><dfn>HTML</dfn> is the standard language used to create webpages.</p>\n  <p><dfn>CSS</dfn> describes how HTML elements are styled on screen.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <dfn> पहली बार समझाए गए शब्द को चिह्नित करता है।\n* 2. नए तकनीकी शब्दों की परिभाषा में उपयोग करें।\n* 3. ब्राउज़र इसे इटैलिक स्टाइल में दिखाते हैं।\n* 4. सर्च इंजन को शब्दावली इंडेक्स बनाने में मदद करता है।\n* 5. आसपास का वाक्य शब्द की परिभाषा समझाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Defining Terms</title>\n</head>\n<body>\n\n  <h2>Web Terminology</h2>\n  <p><dfn>HTML</dfn> is the standard language used to create webpages.</p>\n  <p><dfn>CSS</dfn> describes how HTML elements are styled on screen.</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 40,
    slug: "superscript-sup-and-subscript-sub-tags",
    title: "Superscript (<sup>) & Subscript (<sub>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 39)",
    exercise: {
      english: {
        question: "Which tag is used to write chemical formulas like H2O in HTML?",
        options: ["<sub>","<sup>","<lower>","<down>"],
        correctAnswer: "<sub>",
        hint: "<sub> renders subscript text below the normal line."
      },
      hinglish: {
        question: "Which tag is used to write chemical formulas like H2O in HTML?",
        options: ["<sub>","<sup>","<lower>","<down>"],
        correctAnswer: "<sub>",
        hint: "<sub> renders subscript text below the normal line."
      },
      hindi: {
        question: "Which tag is used to write chemical formulas like H2O in HTML?",
        options: ["<sub>","<sup>","<lower>","<down>"],
        correctAnswer: "<sub>",
        hint: "<sub> renders subscript text below the normal line."
      }
    },
    english: {
      kid: "* 1. <sup> raises text above the baseline.\n* 2. <sub> lowers text below the baseline.\n* 3. <sup> is used for math exponents.\n* 4. <sub> is used for chemical formulas.\n* 5. Both reduce the font size slightly.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Superscript and Subscript</title>\n</head>\n<body>\n\n  <h2>Science and Math Formulas</h2>\n  <p>Chemical Formula of Water: H<sub>2</sub>O</p>\n  <p>Einstein's Energy Formula: E = mc<sup>2</sup></p>\n  <p>Date: October 24<sup>th</sup>, 2026</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <sup> raises text above the baseline.\n* 2. <sub> lowers text below the baseline.\n* 3. <sup> is used for math exponents.\n* 4. <sub> is used for chemical formulas.\n* 5. Both reduce the font size slightly.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Superscript and Subscript</title>\n</head>\n<body>\n\n  <h2>Science and Math Formulas</h2>\n  <p>Chemical Formula of Water: H<sub>2</sub>O</p>\n  <p>Einstein's Energy Formula: E = mc<sup>2</sup></p>\n  <p>Date: October 24<sup>th</sup>, 2026</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <sup> टेक्स्ट को ऊपर की ओर उठाता है।\n* 2. <sub> टेक्स्ट को नीचे की ओर झुकाता है।\n* 3. <sup> का उपयोग गणितीय घात (exponents) के लिए होता है।\n* 4. <sub> का उपयोग रासायनिक सूत्रों के लिए होता है।\n* 5. दोनों फॉन्ट साइज को थोड़ा छोटा करते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Superscript and Subscript</title>\n</head>\n<body>\n\n  <h2>Science and Math Formulas</h2>\n  <p>Chemical Formula of Water: H<sub>2</sub>O</p>\n  <p>Einstein's Energy Formula: E = mc<sup>2</sup></p>\n  <p>Date: October 24<sup>th</sup>, 2026</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <sup> टेक्स्ट को ऊपर की ओर उठाता है।\n* 2. <sub> टेक्स्ट को नीचे की ओर झुकाता है।\n* 3. <sup> का उपयोग गणितीय घात (exponents) के लिए होता है।\n* 4. <sub> का उपयोग रासायनिक सूत्रों के लिए होता है।\n* 5. दोनों फॉन्ट साइज को थोड़ा छोटा करते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Superscript and Subscript</title>\n</head>\n<body>\n\n  <h2>Science and Math Formulas</h2>\n  <p>Chemical Formula of Water: H<sub>2</sub>O</p>\n  <p>Einstein's Energy Formula: E = mc<sup>2</sup></p>\n  <p>Date: October 24<sup>th</sup>, 2026</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <sup> टेक्स्ट को ऊपर की ओर उठाता है।\n* 2. <sub> टेक्स्ट को नीचे की ओर झुकाता है।\n* 3. <sup> का उपयोग गणितीय घात (exponents) के लिए होता है।\n* 4. <sub> का उपयोग रासायनिक सूत्रों के लिए होता है।\n* 5. दोनों फॉन्ट साइज को थोड़ा छोटा करते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Superscript and Subscript</title>\n</head>\n<body>\n\n  <h2>Science and Math Formulas</h2>\n  <p>Chemical Formula of Water: H<sub>2</sub>O</p>\n  <p>Einstein's Energy Formula: E = mc<sup>2</sup></p>\n  <p>Date: October 24<sup>th</sup>, 2026</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <sup> टेक्स्ट को ऊपर की ओर उठाता है।\n* 2. <sub> टेक्स्ट को नीचे की ओर झुकाता है।\n* 3. <sup> का उपयोग गणितीय घात (exponents) के लिए होता है।\n* 4. <sub> का उपयोग रासायनिक सूत्रों के लिए होता है।\n* 5. दोनों फॉन्ट साइज को थोड़ा छोटा करते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Superscript and Subscript</title>\n</head>\n<body>\n\n  <h2>Science and Math Formulas</h2>\n  <p>Chemical Formula of Water: H<sub>2</sub>O</p>\n  <p>Einstein's Energy Formula: E = mc<sup>2</sup></p>\n  <p>Date: October 24<sup>th</sup>, 2026</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 41,
    slug: "anchor-a-tag-href-hyperlinks",
    title: "Anchor Elements (<a>) & the href Attribute",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 74-76)",
    exercise: {
      english: {
        question: "Which attribute inside the <a> tag specifies the target link URL?",
        options: ["href","src","link","target"],
        correctAnswer: "href",
        hint: "href stands for Hypertext REFerence."
      },
      hinglish: {
        question: "Which attribute inside the <a> tag specifies the target link URL?",
        options: ["href","src","link","target"],
        correctAnswer: "href",
        hint: "href stands for Hypertext REFerence."
      },
      hindi: {
        question: "Which attribute inside the <a> tag specifies the target link URL?",
        options: ["href","src","link","target"],
        correctAnswer: "href",
        hint: "href stands for Hypertext REFerence."
      }
    },
    english: {
      kid: "* 1. <a> creates clickable web hyperlinks.\n* 2. href specifies the destination page URL.\n* 3. Text between tags becomes clickable link.\n* 4. Unvisited links appear blue with underline.\n* 5. Visited links turn purple by default.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Hyperlinks</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Courses</h1>\n  <p>Visit our platform: <a href=\"https://nextsem.online\">Nextsem Academy</a></p>\n  <p>Read about our mission: <a href=\"/about\">About Us Page</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. <a> creates clickable web hyperlinks.\n* 2. href specifies the destination page URL.\n* 3. Text between tags becomes clickable link.\n* 4. Unvisited links appear blue with underline.\n* 5. Visited links turn purple by default.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Hyperlinks</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Courses</h1>\n  <p>Visit our platform: <a href=\"https://nextsem.online\">Nextsem Academy</a></p>\n  <p>Read about our mission: <a href=\"/about\">About Us Page</a></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <a> क्लिक करने योग्य लिंक बनाता है।\n* 2. href टारगेट वेबपेज का पता देता है।\n* 3. टैग्स के बीच का टेक्स्ट लिंक बनता है।\n* 4. बिना खुले लिंक नीले रंग में दिखते हैं।\n* 5. खुले हुए लिंक बैंगनी रंग के हो जाते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Hyperlinks</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Courses</h1>\n  <p>Visit our platform: <a href=\"https://nextsem.online\">Nextsem Academy</a></p>\n  <p>Read about our mission: <a href=\"/about\">About Us Page</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. <a> क्लिक करने योग्य लिंक बनाता है।\n* 2. href टारगेट वेबपेज का पता देता है।\n* 3. टैग्स के बीच का टेक्स्ट लिंक बनता है।\n* 4. बिना खुले लिंक नीले रंग में दिखते हैं।\n* 5. खुले हुए लिंक बैंगनी रंग के हो जाते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Hyperlinks</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Courses</h1>\n  <p>Visit our platform: <a href=\"https://nextsem.online\">Nextsem Academy</a></p>\n  <p>Read about our mission: <a href=\"/about\">About Us Page</a></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <a> क्लिक करने योग्य लिंक बनाता है।\n* 2. href टारगेट वेबपेज का पता देता है।\n* 3. टैग्स के बीच का टेक्स्ट लिंक बनता है।\n* 4. बिना खुले लिंक नीले रंग में दिखते हैं।\n* 5. खुले हुए लिंक बैंगनी रंग के हो जाते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Hyperlinks</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Courses</h1>\n  <p>Visit our platform: <a href=\"https://nextsem.online\">Nextsem Academy</a></p>\n  <p>Read about our mission: <a href=\"/about\">About Us Page</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. <a> क्लिक करने योग्य लिंक बनाता है।\n* 2. href टारगेट वेबपेज का पता देता है।\n* 3. टैग्स के बीच का टेक्स्ट लिंक बनता है।\n* 4. बिना खुले लिंक नीले रंग में दिखते हैं।\n* 5. खुले हुए लिंक बैंगनी रंग के हो जाते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Hyperlinks</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Courses</h1>\n  <p>Visit our platform: <a href=\"https://nextsem.online\">Nextsem Academy</a></p>\n  <p>Read about our mission: <a href=\"/about\">About Us Page</a></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 42,
    slug: "absolute-vs-relative-link-paths",
    title: "Absolute vs. Relative Paths",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 77-79)",
    exercise: {
      english: {
        question: "Which type of path includes the protocol like https:// and domain name?",
        options: ["Absolute Path","Relative Path","Inline Path","Root Path"],
        correctAnswer: "Absolute Path",
        hint: "Absolute paths include the full web address with https://."
      },
      hinglish: {
        question: "Which type of path includes the protocol like https:// and domain name?",
        options: ["Absolute Path","Relative Path","Inline Path","Root Path"],
        correctAnswer: "Absolute Path",
        hint: "Absolute paths include the full web address with https://."
      },
      hindi: {
        question: "Which type of path includes the protocol like https:// and domain name?",
        options: ["Absolute Path","Relative Path","Inline Path","Root Path"],
        correctAnswer: "Absolute Path",
        hint: "Absolute paths include the full web address with https://."
      }
    },
    english: {
      kid: "* 1. Absolute URLs include full domain names.\n* 2. Relative URLs point to local files.\n* 3. Use absolute paths for external sites.\n* 4. Use relative paths for internal pages.\n* 5. Relative links work across server environments.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Link Paths</title>\n</head>\n<body>\n\n  <h2>Navigation Links</h2>\n  <!-- Absolute Link to External Website -->\n  <p><a href=\"https://www.google.com\">Google Search (Absolute)</a></p>\n\n  <!-- Relative Link to Local Page -->\n  <p><a href=\"contact.html\">Contact Us (Relative)</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. Absolute URLs include full domain names.\n* 2. Relative URLs point to local files.\n* 3. Use absolute paths for external sites.\n* 4. Use relative paths for internal pages.\n* 5. Relative links work across server environments.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Link Paths</title>\n</head>\n<body>\n\n  <h2>Navigation Links</h2>\n  <!-- Absolute Link to External Website -->\n  <p><a href=\"https://www.google.com\">Google Search (Absolute)</a></p>\n\n  <!-- Relative Link to Local Page -->\n  <p><a href=\"contact.html\">Contact Us (Relative)</a></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. Absolute URL में पूरा डोमेन नाम होता है।\n* 2. Relative URL लोकल फाइलों को जोड़ता है।\n* 3. बाहरी वेबसाइटों के लिए Absolute चुनें।\n* 4. अपनी वेबसाइट के पेजों के लिए Relative चुनें।\n* 5. Relative लिंक्स सर्वर बदलने पर भी चलते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Link Paths</title>\n</head>\n<body>\n\n  <h2>Navigation Links</h2>\n  <!-- Absolute Link to External Website -->\n  <p><a href=\"https://www.google.com\">Google Search (Absolute)</a></p>\n\n  <!-- Relative Link to Local Page -->\n  <p><a href=\"contact.html\">Contact Us (Relative)</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. Absolute URL में पूरा डोमेन नाम होता है।\n* 2. Relative URL लोकल फाइलों को जोड़ता है।\n* 3. बाहरी वेबसाइटों के लिए Absolute चुनें।\n* 4. अपनी वेबसाइट के पेजों के लिए Relative चुनें।\n* 5. Relative लिंक्स सर्वर बदलने पर भी चलते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Link Paths</title>\n</head>\n<body>\n\n  <h2>Navigation Links</h2>\n  <!-- Absolute Link to External Website -->\n  <p><a href=\"https://www.google.com\">Google Search (Absolute)</a></p>\n\n  <!-- Relative Link to Local Page -->\n  <p><a href=\"contact.html\">Contact Us (Relative)</a></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. Absolute URL में पूरा डोमेन नाम होता है।\n* 2. Relative URL लोकल फाइलों को जोड़ता है।\n* 3. बाहरी वेबसाइटों के लिए Absolute चुनें।\n* 4. अपनी वेबसाइट के पेजों के लिए Relative चुनें।\n* 5. Relative लिंक्स सर्वर बदलने पर भी चलते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Link Paths</title>\n</head>\n<body>\n\n  <h2>Navigation Links</h2>\n  <!-- Absolute Link to External Website -->\n  <p><a href=\"https://www.google.com\">Google Search (Absolute)</a></p>\n\n  <!-- Relative Link to Local Page -->\n  <p><a href=\"contact.html\">Contact Us (Relative)</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. Absolute URL में पूरा डोमेन नाम होता है।\n* 2. Relative URL लोकल फाइलों को जोड़ता है।\n* 3. बाहरी वेबसाइटों के लिए Absolute चुनें।\n* 4. अपनी वेबसाइट के पेजों के लिए Relative चुनें।\n* 5. Relative लिंक्स सर्वर बदलने पर भी चलते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Link Paths</title>\n</head>\n<body>\n\n  <h2>Navigation Links</h2>\n  <!-- Absolute Link to External Website -->\n  <p><a href=\"https://www.google.com\">Google Search (Absolute)</a></p>\n\n  <!-- Relative Link to Local Page -->\n  <p><a href=\"contact.html\">Contact Us (Relative)</a></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 43,
    slug: "parent-directory-hopping-relative-paths",
    title: "Parent Directory Hopping (../)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 80-82)",
    exercise: {
      english: {
        question: "Which syntax moves up one folder level in relative paths?",
        options: ["../","./","//","/.."],
        correctAnswer: "../",
        hint: "Double dot with slash (../) moves up to the parent directory."
      },
      hinglish: {
        question: "Which syntax moves up one folder level in relative paths?",
        options: ["../","./","//","/.."],
        correctAnswer: "../",
        hint: "Double dot with slash (../) moves up to the parent directory."
      },
      hindi: {
        question: "Which syntax moves up one folder level in relative paths?",
        options: ["../","./","//","/.."],
        correctAnswer: "../",
        hint: "Double dot with slash (../) moves up to the parent directory."
      }
    },
    english: {
      kid: "* 1. ../ moves up one folder level.\n* 2. It navigates to the parent directory.\n* 3. Useful when subfolders link to root.\n* 4. Can be chained for multiple folders.\n* 5. Keeps local site links completely portable.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Parent Directory Navigation</title>\n</head>\n<body>\n\n  <h1>Course Chapter 1</h1>\n  <p>Inside folder: <code>/courses/html/</code></p>\n  <p><a href=\"../index.html\">Go Back to Course Home</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. ../ moves up one folder level.\n* 2. It navigates to the parent directory.\n* 3. Useful when subfolders link to root.\n* 4. Can be chained for multiple folders.\n* 5. Keeps local site links completely portable.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Parent Directory Navigation</title>\n</head>\n<body>\n\n  <h1>Course Chapter 1</h1>\n  <p>Inside folder: <code>/courses/html/</code></p>\n  <p><a href=\"../index.html\">Go Back to Course Home</a></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. ../ एक फोल्डर ऊपर ले जाता है।\n* 2. यह पैरेंट फोल्डर में नेविगेट करता है।\n* 3. सब-फोल्डर से मुख्य पेज पर जाने के काम आता है।\n* 4. कई स्तर ऊपर जाने के लिए दोहराया जा सकता है।\n* 5. साइट की फाइलों को पोर्टेबल रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Parent Directory Navigation</title>\n</head>\n<body>\n\n  <h1>Course Chapter 1</h1>\n  <p>Inside folder: <code>/courses/html/</code></p>\n  <p><a href=\"../index.html\">Go Back to Course Home</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. ../ एक फोल्डर ऊपर ले जाता है।\n* 2. यह पैरेंट फोल्डर में नेविगेट करता है।\n* 3. सब-फोल्डर से मुख्य पेज पर जाने के काम आता है।\n* 4. कई स्तर ऊपर जाने के लिए दोहराया जा सकता है।\n* 5. साइट की फाइलों को पोर्टेबल रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Parent Directory Navigation</title>\n</head>\n<body>\n\n  <h1>Course Chapter 1</h1>\n  <p>Inside folder: <code>/courses/html/</code></p>\n  <p><a href=\"../index.html\">Go Back to Course Home</a></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. ../ एक फोल्डर ऊपर ले जाता है।\n* 2. यह पैरेंट फोल्डर में नेविगेट करता है।\n* 3. सब-फोल्डर से मुख्य पेज पर जाने के काम आता है।\n* 4. कई स्तर ऊपर जाने के लिए दोहराया जा सकता है।\n* 5. साइट की फाइलों को पोर्टेबल रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Parent Directory Navigation</title>\n</head>\n<body>\n\n  <h1>Course Chapter 1</h1>\n  <p>Inside folder: <code>/courses/html/</code></p>\n  <p><a href=\"../index.html\">Go Back to Course Home</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. ../ एक फोल्डर ऊपर ले जाता है।\n* 2. यह पैरेंट फोल्डर में नेविगेट करता है।\n* 3. सब-फोल्डर से मुख्य पेज पर जाने के काम आता है।\n* 4. कई स्तर ऊपर जाने के लिए दोहराया जा सकता है।\n* 5. साइट की फाइलों को पोर्टेबल रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Parent Directory Navigation</title>\n</head>\n<body>\n\n  <h1>Course Chapter 1</h1>\n  <p>Inside folder: <code>/courses/html/</code></p>\n  <p><a href=\"../index.html\">Go Back to Course Home</a></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 44,
    slug: "grandparent-directory-hopping-double-slash",
    title: "Grandparent Directory Hopping (../../)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 83-84)",
    exercise: {
      english: {
        question: "Which relative path climbs up two folder levels in the directory tree?",
        options: ["../../","../",".../","/root/"],
        correctAnswer: "../../",
        hint: "Use ../../ to hop up two directory levels."
      },
      hinglish: {
        question: "Which relative path climbs up two folder levels in the directory tree?",
        options: ["../../","../",".../","/root/"],
        correctAnswer: "../../",
        hint: "Use ../../ to hop up two directory levels."
      },
      hindi: {
        question: "Which relative path climbs up two folder levels in the directory tree?",
        options: ["../../","../",".../","/root/"],
        correctAnswer: "../../",
        hint: "Use ../../ to hop up two directory levels."
      }
    },
    english: {
      kid: "* 1. ../../ moves up two folder levels.\n* 2. It climbs out of deep folders.\n* 3. Reaches grandparent folders in file trees.\n* 4. Essential for deeply nested course chapters.\n* 5. Helps maintain relative structure on localhost.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Grandparent Directory Navigation</title>\n</head>\n<body>\n\n  <h2>Lesson Exercise Page</h2>\n  <p>Current Path: <code>/projects/web/lesson1/</code></p>\n  <p><a href=\"../../index.html\">Back to Main Project Root</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. ../../ moves up two folder levels.\n* 2. It climbs out of deep folders.\n* 3. Reaches grandparent folders in file trees.\n* 4. Essential for deeply nested course chapters.\n* 5. Helps maintain relative structure on localhost.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Grandparent Directory Navigation</title>\n</head>\n<body>\n\n  <h2>Lesson Exercise Page</h2>\n  <p>Current Path: <code>/projects/web/lesson1/</code></p>\n  <p><a href=\"../../index.html\">Back to Main Project Root</a></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. ../../ दो फोल्डर ऊपर ले जाता है।\n* 2. गहरे फोल्डरों से बाहर आने में उपयोगी।\n* 3. फाइल संरचना में ग्रैंडपैरेंट फोल्डर तक पहुंचता है।\n* 4. नेस्टेड अध्यायों के लिए जरूरी है।\n* 5. लोकलहोस्ट पर सही लिंक बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Grandparent Directory Navigation</title>\n</head>\n<body>\n\n  <h2>Lesson Exercise Page</h2>\n  <p>Current Path: <code>/projects/web/lesson1/</code></p>\n  <p><a href=\"../../index.html\">Back to Main Project Root</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. ../../ दो फोल्डर ऊपर ले जाता है।\n* 2. गहरे फोल्डरों से बाहर आने में उपयोगी।\n* 3. फाइल संरचना में ग्रैंडपैरेंट फोल्डर तक पहुंचता है।\n* 4. नेस्टेड अध्यायों के लिए जरूरी है।\n* 5. लोकलहोस्ट पर सही लिंक बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Grandparent Directory Navigation</title>\n</head>\n<body>\n\n  <h2>Lesson Exercise Page</h2>\n  <p>Current Path: <code>/projects/web/lesson1/</code></p>\n  <p><a href=\"../../index.html\">Back to Main Project Root</a></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. ../../ दो फोल्डर ऊपर ले जाता है।\n* 2. गहरे फोल्डरों से बाहर आने में उपयोगी।\n* 3. फाइल संरचना में ग्रैंडपैरेंट फोल्डर तक पहुंचता है।\n* 4. नेस्टेड अध्यायों के लिए जरूरी है।\n* 5. लोकलहोस्ट पर सही लिंक बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Grandparent Directory Navigation</title>\n</head>\n<body>\n\n  <h2>Lesson Exercise Page</h2>\n  <p>Current Path: <code>/projects/web/lesson1/</code></p>\n  <p><a href=\"../../index.html\">Back to Main Project Root</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. ../../ दो फोल्डर ऊपर ले जाता है।\n* 2. गहरे फोल्डरों से बाहर आने में उपयोगी।\n* 3. फाइल संरचना में ग्रैंडपैरेंट फोल्डर तक पहुंचता है।\n* 4. नेस्टेड अध्यायों के लिए जरूरी है।\n* 5. लोकलहोस्ट पर सही लिंक बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Grandparent Directory Navigation</title>\n</head>\n<body>\n\n  <h2>Lesson Exercise Page</h2>\n  <p>Current Path: <code>/projects/web/lesson1/</code></p>\n  <p><a href=\"../../index.html\">Back to Main Project Root</a></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 45,
    slug: "email-mailto-links-anchor-tag",
    title: "Linking to Email Addresses (mailto:)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 85)",
    exercise: {
      english: {
        question: "Which protocol prefix is used to open an email compose client?",
        options: ["mailto:","email:","send:","inbox:"],
        correctAnswer: "mailto:",
        hint: "Use <a href=\"mailto:user@domain.com\"> to create an email link."
      },
      hinglish: {
        question: "Which protocol prefix is used to open an email compose client?",
        options: ["mailto:","email:","send:","inbox:"],
        correctAnswer: "mailto:",
        hint: "Use <a href=\"mailto:user@domain.com\"> to create an email link."
      },
      hindi: {
        question: "Which protocol prefix is used to open an email compose client?",
        options: ["mailto:","email:","send:","inbox:"],
        correctAnswer: "mailto:",
        hint: "Use <a href=\"mailto:user@domain.com\"> to create an email link."
      }
    },
    english: {
      kid: "* 1. mailto: creates clickable email links.\n* 2. Clicking opens the user's email client.\n* 3. Put recipient email after mailto: prefix.\n* 4. No spaces allowed after the colon.\n* 5. Essential for contact and support pages.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Email Support Link</title>\n</head>\n<body>\n\n  <h2>Contact Support</h2>\n  <p>Have questions regarding full stack lessons?</p>\n  <p>Send an email to: <a href=\"mailto:support@nextsem.online\">support@nextsem.online</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. mailto: creates clickable email links.\n* 2. Clicking opens the user's email client.\n* 3. Put recipient email after mailto: prefix.\n* 4. No spaces allowed after the colon.\n* 5. Essential for contact and support pages.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Email Support Link</title>\n</head>\n<body>\n\n  <h2>Contact Support</h2>\n  <p>Have questions regarding full stack lessons?</p>\n  <p>Send an email to: <a href=\"mailto:support@nextsem.online\">support@nextsem.online</a></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. mailto: ईमेल भेजने का लिंक बनाता है।\n* 2. क्लिक करने पर ईमेल ऐप खुलती है।\n* 3. mailto: के बाद ईमेल पता लिखें।\n* 4. कोलन के बाद स्पेस नहीं होना चाहिए।\n* 5. संपर्क और सपोर्ट पेज के लिए जरूरी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Email Support Link</title>\n</head>\n<body>\n\n  <h2>Contact Support</h2>\n  <p>Have questions regarding full stack lessons?</p>\n  <p>Send an email to: <a href=\"mailto:support@nextsem.online\">support@nextsem.online</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. mailto: ईमेल भेजने का लिंक बनाता है।\n* 2. क्लिक करने पर ईमेल ऐप खुलती है।\n* 3. mailto: के बाद ईमेल पता लिखें।\n* 4. कोलन के बाद स्पेस नहीं होना चाहिए।\n* 5. संपर्क और सपोर्ट पेज के लिए जरूरी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Email Support Link</title>\n</head>\n<body>\n\n  <h2>Contact Support</h2>\n  <p>Have questions regarding full stack lessons?</p>\n  <p>Send an email to: <a href=\"mailto:support@nextsem.online\">support@nextsem.online</a></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. mailto: ईमेल भेजने का लिंक बनाता है।\n* 2. क्लिक करने पर ईमेल ऐप खुलती है।\n* 3. mailto: के बाद ईमेल पता लिखें।\n* 4. कोलन के बाद स्पेस नहीं होना चाहिए।\n* 5. संपर्क और सपोर्ट पेज के लिए जरूरी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Email Support Link</title>\n</head>\n<body>\n\n  <h2>Contact Support</h2>\n  <p>Have questions regarding full stack lessons?</p>\n  <p>Send an email to: <a href=\"mailto:support@nextsem.online\">support@nextsem.online</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. mailto: ईमेल भेजने का लिंक बनाता है।\n* 2. क्लिक करने पर ईमेल ऐप खुलती है।\n* 3. mailto: के बाद ईमेल पता लिखें।\n* 4. कोलन के बाद स्पेस नहीं होना चाहिए।\n* 5. संपर्क और सपोर्ट पेज के लिए जरूरी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Email Support Link</title>\n</head>\n<body>\n\n  <h2>Contact Support</h2>\n  <p>Have questions regarding full stack lessons?</p>\n  <p>Send an email to: <a href=\"mailto:support@nextsem.online\">support@nextsem.online</a></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 46,
    slug: "telephone-dialing-tel-links-mobile",
    title: "Telephone Dialing Links (tel:)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 86)",
    exercise: {
      english: {
        question: "Which prefix is used in href to initiate a telephone call on smartphones?",
        options: ["tel:","call:","phone:","dial:"],
        correctAnswer: "tel:",
        hint: "Use <a href=\"tel:+1234567890\"> for phone number links."
      },
      hinglish: {
        question: "Which prefix is used in href to initiate a telephone call on smartphones?",
        options: ["tel:","call:","phone:","dial:"],
        correctAnswer: "tel:",
        hint: "Use <a href=\"tel:+1234567890\"> for phone number links."
      },
      hindi: {
        question: "Which prefix is used in href to initiate a telephone call on smartphones?",
        options: ["tel:","call:","phone:","dial:"],
        correctAnswer: "tel:",
        hint: "Use <a href=\"tel:+1234567890\"> for phone number links."
      }
    },
    english: {
      kid: "* 1. tel: creates direct phone call links.\n* 2. Mobile phones open their dialer directly.\n* 3. Include country code with plus prefix.\n* 4. Eliminates manual dialing for mobile users.\n* 5. Critical for local businesses and helpdesks.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Telephone Links</title>\n</head>\n<body>\n\n  <h2>Nextsem Helpline</h2>\n  <p>Call our support line directly from your phone:</p>\n  <p><a href=\"tel:+18005550199\">Call Support: +1 (800) 555-0199</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. tel: creates direct phone call links.\n* 2. Mobile phones open their dialer directly.\n* 3. Include country code with plus prefix.\n* 4. Eliminates manual dialing for mobile users.\n* 5. Critical for local businesses and helpdesks.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Telephone Links</title>\n</head>\n<body>\n\n  <h2>Nextsem Helpline</h2>\n  <p>Call our support line directly from your phone:</p>\n  <p><a href=\"tel:+18005550199\">Call Support: +1 (800) 555-0199</a></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. tel: सीधे फोन कॉल का लिंक बनाता है।\n* 2. मोबाइल फोन पर तुरंत डायलर खुलता है।\n* 3. देश कोड के साथ + निशान लगाएं।\n* 4. मोबाइल यूजर्स के लिए डायल करना आसान बनाता है।\n* 5. स्थानीय व्यापार और हेल्पलाइन के लिए जरूरी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Telephone Links</title>\n</head>\n<body>\n\n  <h2>Nextsem Helpline</h2>\n  <p>Call our support line directly from your phone:</p>\n  <p><a href=\"tel:+18005550199\">Call Support: +1 (800) 555-0199</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. tel: सीधे फोन कॉल का लिंक बनाता है।\n* 2. मोबाइल फोन पर तुरंत डायलर खुलता है।\n* 3. देश कोड के साथ + निशान लगाएं।\n* 4. मोबाइल यूजर्स के लिए डायल करना आसान बनाता है।\n* 5. स्थानीय व्यापार और हेल्पलाइन के लिए जरूरी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Telephone Links</title>\n</head>\n<body>\n\n  <h2>Nextsem Helpline</h2>\n  <p>Call our support line directly from your phone:</p>\n  <p><a href=\"tel:+18005550199\">Call Support: +1 (800) 555-0199</a></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. tel: सीधे फोन कॉल का लिंक बनाता है।\n* 2. मोबाइल फोन पर तुरंत डायलर खुलता है।\n* 3. देश कोड के साथ + निशान लगाएं।\n* 4. मोबाइल यूजर्स के लिए डायल करना आसान बनाता है।\n* 5. स्थानीय व्यापार और हेल्पलाइन के लिए जरूरी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Telephone Links</title>\n</head>\n<body>\n\n  <h2>Nextsem Helpline</h2>\n  <p>Call our support line directly from your phone:</p>\n  <p><a href=\"tel:+18005550199\">Call Support: +1 (800) 555-0199</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. tel: सीधे फोन कॉल का लिंक बनाता है।\n* 2. मोबाइल फोन पर तुरंत डायलर खुलता है।\n* 3. देश कोड के साथ + निशान लगाएं।\n* 4. मोबाइल यूजर्स के लिए डायल करना आसान बनाता है।\n* 5. स्थानीय व्यापार और हेल्पलाइन के लिए जरूरी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Telephone Links</title>\n</head>\n<body>\n\n  <h2>Nextsem Helpline</h2>\n  <p>Call our support line directly from your phone:</p>\n  <p><a href=\"tel:+18005550199\">Call Support: +1 (800) 555-0199</a></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 47,
    slug: "open-link-new-tab-target-blank",
    title: "Target Attributes (target=\"_blank\")",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 87)",
    exercise: {
      english: {
        question: "Which target value instructs the browser to open a link in a new tab?",
        options: ["_blank","_new","_tab","_open"],
        correctAnswer: "_blank",
        hint: "Use target=\"_blank\" to open a link in a new browser tab."
      },
      hinglish: {
        question: "Which target value instructs the browser to open a link in a new tab?",
        options: ["_blank","_new","_tab","_open"],
        correctAnswer: "_blank",
        hint: "Use target=\"_blank\" to open a link in a new browser tab."
      },
      hindi: {
        question: "Which target value instructs the browser to open a link in a new tab?",
        options: ["_blank","_new","_tab","_open"],
        correctAnswer: "_blank",
        hint: "Use target=\"_blank\" to open a link in a new browser tab."
      }
    },
    english: {
      kid: "* 1. target=\"_blank\" opens links in new tabs.\n* 2. Keeps your original website open.\n* 3. Great for external documentation references.\n* 4. Default target value is \"_self\".\n* 5. Always pair with rel security attributes.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Open in New Tab</title>\n</head>\n<body>\n\n  <h2>External Documentation</h2>\n  <p>Read MDN documentation without leaving Nextsem:</p>\n  <p><a href=\"https://developer.mozilla.org\" target=\"_blank\">Open MDN Web Docs (New Tab)</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. target=\"_blank\" opens links in new tabs.\n* 2. Keeps your original website open.\n* 3. Great for external documentation references.\n* 4. Default target value is \"_self\".\n* 5. Always pair with rel security attributes.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Open in New Tab</title>\n</head>\n<body>\n\n  <h2>External Documentation</h2>\n  <p>Read MDN documentation without leaving Nextsem:</p>\n  <p><a href=\"https://developer.mozilla.org\" target=\"_blank\">Open MDN Web Docs (New Tab)</a></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. target=\"_blank\" नए टैब में लिंक खोलता है।\n* 2. आपकी मूल वेबसाइट खुली रहती है।\n* 3. बाहरी डॉक्यूमेंटेशन लिंक के लिए उत्तम।\n* 4. डिफ़ॉल्ट टारगेट मान \"_self\" होता है।\n* 5. सुरक्षा के लिए rel अट्रिब्यूट जरूर लगाएं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Open in New Tab</title>\n</head>\n<body>\n\n  <h2>External Documentation</h2>\n  <p>Read MDN documentation without leaving Nextsem:</p>\n  <p><a href=\"https://developer.mozilla.org\" target=\"_blank\">Open MDN Web Docs (New Tab)</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. target=\"_blank\" नए टैब में लिंक खोलता है।\n* 2. आपकी मूल वेबसाइट खुली रहती है।\n* 3. बाहरी डॉक्यूमेंटेशन लिंक के लिए उत्तम।\n* 4. डिफ़ॉल्ट टारगेट मान \"_self\" होता है।\n* 5. सुरक्षा के लिए rel अट्रिब्यूट जरूर लगाएं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Open in New Tab</title>\n</head>\n<body>\n\n  <h2>External Documentation</h2>\n  <p>Read MDN documentation without leaving Nextsem:</p>\n  <p><a href=\"https://developer.mozilla.org\" target=\"_blank\">Open MDN Web Docs (New Tab)</a></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. target=\"_blank\" नए टैब में लिंक खोलता है।\n* 2. आपकी मूल वेबसाइट खुली रहती है।\n* 3. बाहरी डॉक्यूमेंटेशन लिंक के लिए उत्तम।\n* 4. डिफ़ॉल्ट टारगेट मान \"_self\" होता है।\n* 5. सुरक्षा के लिए rel अट्रिब्यूट जरूर लगाएं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Open in New Tab</title>\n</head>\n<body>\n\n  <h2>External Documentation</h2>\n  <p>Read MDN documentation without leaving Nextsem:</p>\n  <p><a href=\"https://developer.mozilla.org\" target=\"_blank\">Open MDN Web Docs (New Tab)</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. target=\"_blank\" नए टैब में लिंक खोलता है।\n* 2. आपकी मूल वेबसाइट खुली रहती है।\n* 3. बाहरी डॉक्यूमेंटेशन लिंक के लिए उत्तम।\n* 4. डिफ़ॉल्ट टारगेट मान \"_self\" होता है।\n* 5. सुरक्षा के लिए rel अट्रिब्यूट जरूर लगाएं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Open in New Tab</title>\n</head>\n<body>\n\n  <h2>External Documentation</h2>\n  <p>Read MDN documentation without leaving Nextsem:</p>\n  <p><a href=\"https://developer.mozilla.org\" target=\"_blank\">Open MDN Web Docs (New Tab)</a></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 48,
    slug: "link-security-rel-noopener-noreferrer",
    title: "Link Security (rel=\"noopener noreferrer\")",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "The Definitive Guide to HTML5 Chapter 13",
    exercise: {
      english: {
        question: "Which rel attribute value prevents the new tab from accessing window.opener?",
        options: ["noopener","nofollow","secure","isolate"],
        correctAnswer: "noopener",
        hint: "noopener secures external links from accessing the opening window."
      },
      hinglish: {
        question: "Which rel attribute value prevents the new tab from accessing window.opener?",
        options: ["noopener","nofollow","secure","isolate"],
        correctAnswer: "noopener",
        hint: "noopener secures external links from accessing the opening window."
      },
      hindi: {
        question: "Which rel attribute value prevents the new tab from accessing window.opener?",
        options: ["noopener","nofollow","secure","isolate"],
        correctAnswer: "noopener",
        hint: "noopener secures external links from accessing the opening window."
      }
    },
    english: {
      kid: "* 1. Protects against tabnabbing phishing security exploits.\n* 2. noopener stops new tab controlling opener.\n* 3. noreferrer hides referrer website header info.\n* 4. Essential when using target=\"_blank\".\n* 5. Standard security practice for external links.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Secure External Links</title>\n</head>\n<body>\n\n  <h2>Secure External Links</h2>\n  <p>Learn more on external resources safely:</p>\n  <p><a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit GitHub Securely</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. Protects against tabnabbing phishing security exploits.\n* 2. noopener stops new tab controlling opener.\n* 3. noreferrer hides referrer website header info.\n* 4. Essential when using target=\"_blank\".\n* 5. Standard security practice for external links.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Secure External Links</title>\n</head>\n<body>\n\n  <h2>Secure External Links</h2>\n  <p>Learn more on external resources safely:</p>\n  <p><a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit GitHub Securely</a></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. टैब-नैबिंग और फिशिंग हमलों से सुरक्षा देता है।\n* 2. noopener नए टैब को पुराना पेज बदलने से रोकता है।\n* 3. noreferrer रेफरर डेटा छिपाता है।\n* 4. target=\"_blank\" के साथ लगाना अनिवार्य है।\n* 5. बाहरी लिंक्स के लिए मानक सुरक्षा नियम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Secure External Links</title>\n</head>\n<body>\n\n  <h2>Secure External Links</h2>\n  <p>Learn more on external resources safely:</p>\n  <p><a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit GitHub Securely</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. टैब-नैबिंग और फिशिंग हमलों से सुरक्षा देता है।\n* 2. noopener नए टैब को पुराना पेज बदलने से रोकता है।\n* 3. noreferrer रेफरर डेटा छिपाता है।\n* 4. target=\"_blank\" के साथ लगाना अनिवार्य है।\n* 5. बाहरी लिंक्स के लिए मानक सुरक्षा नियम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Secure External Links</title>\n</head>\n<body>\n\n  <h2>Secure External Links</h2>\n  <p>Learn more on external resources safely:</p>\n  <p><a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit GitHub Securely</a></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. टैब-नैबिंग और फिशिंग हमलों से सुरक्षा देता है।\n* 2. noopener नए टैब को पुराना पेज बदलने से रोकता है।\n* 3. noreferrer रेफरर डेटा छिपाता है।\n* 4. target=\"_blank\" के साथ लगाना अनिवार्य है।\n* 5. बाहरी लिंक्स के लिए मानक सुरक्षा नियम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Secure External Links</title>\n</head>\n<body>\n\n  <h2>Secure External Links</h2>\n  <p>Learn more on external resources safely:</p>\n  <p><a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit GitHub Securely</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. टैब-नैबिंग और फिशिंग हमलों से सुरक्षा देता है।\n* 2. noopener नए टैब को पुराना पेज बदलने से रोकता है।\n* 3. noreferrer रेफरर डेटा छिपाता है।\n* 4. target=\"_blank\" के साथ लगाना अनिवार्य है।\n* 5. बाहरी लिंक्स के लिए मानक सुरक्षा नियम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Secure External Links</title>\n</head>\n<body>\n\n  <h2>Secure External Links</h2>\n  <p>Learn more on external resources safely:</p>\n  <p><a href=\"https://github.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit GitHub Securely</a></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 49,
    slug: "hash-links-jump-to-page-sections",
    title: "Document Hash Links (href=\"#id\")",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 88-89)",
    exercise: {
      english: {
        question: "Which symbol must prefix the id name in href to jump to an element on the same page?",
        options: ["#","@","$","."],
        correctAnswer: "#",
        hint: "Use href=\"#sectionId\" to target an element with id=\"sectionId\"."
      },
      hinglish: {
        question: "Which symbol must prefix the id name in href to jump to an element on the same page?",
        options: ["#","@","$","."],
        correctAnswer: "#",
        hint: "Use href=\"#sectionId\" to target an element with id=\"sectionId\"."
      },
      hindi: {
        question: "Which symbol must prefix the id name in href to jump to an element on the same page?",
        options: ["#","@","$","."],
        correctAnswer: "#",
        hint: "Use href=\"#sectionId\" to target an element with id=\"sectionId\"."
      }
    },
    english: {
      kid: "* 1. Hash links jump to specific page sections.\n* 2. Target elements must have matching id attribute.\n* 3. Put # before target id name in href.\n* 4. Creates instant single-page table of contents.\n* 5. Smoothly navigates without page reloads.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Document Hash Navigation</title>\n</head>\n<body>\n\n  <h1>Table of Contents</h1>\n  <p><a href=\"#chapter1\">Jump to Chapter 1</a></p>\n  <p><a href=\"#chapter2\">Jump to Chapter 2</a></p>\n\n  <hr>\n\n  <h2 id=\"chapter1\">Chapter 1: Getting Started</h2>\n  <p>Learn the basics of HTML elements.</p>\n\n  <h2 id=\"chapter2\">Chapter 2: Working with Links</h2>\n  <p>Learn how to connect multiple pages together.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. Hash links jump to specific page sections.\n* 2. Target elements must have matching id attribute.\n* 3. Put # before target id name in href.\n* 4. Creates instant single-page table of contents.\n* 5. Smoothly navigates without page reloads.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Document Hash Navigation</title>\n</head>\n<body>\n\n  <h1>Table of Contents</h1>\n  <p><a href=\"#chapter1\">Jump to Chapter 1</a></p>\n  <p><a href=\"#chapter2\">Jump to Chapter 2</a></p>\n\n  <hr>\n\n  <h2 id=\"chapter1\">Chapter 1: Getting Started</h2>\n  <p>Learn the basics of HTML elements.</p>\n\n  <h2 id=\"chapter2\">Chapter 2: Working with Links</h2>\n  <p>Learn how to connect multiple pages together.</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. हैश लिंक्स पेज के किसी हिस्से पर ले जाते हैं।\n* 2. टारगेट तत्व में id अट्रिब्यूट होना चाहिए।\n* 3. href में id नाम के आगे # लगाएं।\n* 4. एक ही पेज में इंडेक्स बनाने के काम आता है।\n* 5. पेज रीलोड किए बिना तुरंत स्क्रॉल करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Document Hash Navigation</title>\n</head>\n<body>\n\n  <h1>Table of Contents</h1>\n  <p><a href=\"#chapter1\">Jump to Chapter 1</a></p>\n  <p><a href=\"#chapter2\">Jump to Chapter 2</a></p>\n\n  <hr>\n\n  <h2 id=\"chapter1\">Chapter 1: Getting Started</h2>\n  <p>Learn the basics of HTML elements.</p>\n\n  <h2 id=\"chapter2\">Chapter 2: Working with Links</h2>\n  <p>Learn how to connect multiple pages together.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. हैश लिंक्स पेज के किसी हिस्से पर ले जाते हैं।\n* 2. टारगेट तत्व में id अट्रिब्यूट होना चाहिए।\n* 3. href में id नाम के आगे # लगाएं।\n* 4. एक ही पेज में इंडेक्स बनाने के काम आता है।\n* 5. पेज रीलोड किए बिना तुरंत स्क्रॉल करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Document Hash Navigation</title>\n</head>\n<body>\n\n  <h1>Table of Contents</h1>\n  <p><a href=\"#chapter1\">Jump to Chapter 1</a></p>\n  <p><a href=\"#chapter2\">Jump to Chapter 2</a></p>\n\n  <hr>\n\n  <h2 id=\"chapter1\">Chapter 1: Getting Started</h2>\n  <p>Learn the basics of HTML elements.</p>\n\n  <h2 id=\"chapter2\">Chapter 2: Working with Links</h2>\n  <p>Learn how to connect multiple pages together.</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. हैश लिंक्स पेज के किसी हिस्से पर ले जाते हैं।\n* 2. टारगेट तत्व में id अट्रिब्यूट होना चाहिए।\n* 3. href में id नाम के आगे # लगाएं।\n* 4. एक ही पेज में इंडेक्स बनाने के काम आता है।\n* 5. पेज रीलोड किए बिना तुरंत स्क्रॉल करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Document Hash Navigation</title>\n</head>\n<body>\n\n  <h1>Table of Contents</h1>\n  <p><a href=\"#chapter1\">Jump to Chapter 1</a></p>\n  <p><a href=\"#chapter2\">Jump to Chapter 2</a></p>\n\n  <hr>\n\n  <h2 id=\"chapter1\">Chapter 1: Getting Started</h2>\n  <p>Learn the basics of HTML elements.</p>\n\n  <h2 id=\"chapter2\">Chapter 2: Working with Links</h2>\n  <p>Learn how to connect multiple pages together.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. हैश लिंक्स पेज के किसी हिस्से पर ले जाते हैं।\n* 2. टारगेट तत्व में id अट्रिब्यूट होना चाहिए।\n* 3. href में id नाम के आगे # लगाएं।\n* 4. एक ही पेज में इंडेक्स बनाने के काम आता है।\n* 5. पेज रीलोड किए बिना तुरंत स्क्रॉल करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Document Hash Navigation</title>\n</head>\n<body>\n\n  <h1>Table of Contents</h1>\n  <p><a href=\"#chapter1\">Jump to Chapter 1</a></p>\n  <p><a href=\"#chapter2\">Jump to Chapter 2</a></p>\n\n  <hr>\n\n  <h2 id=\"chapter1\">Chapter 1: Getting Started</h2>\n  <p>Learn the basics of HTML elements.</p>\n\n  <h2 id=\"chapter2\">Chapter 2: Working with Links</h2>\n  <p>Learn how to connect multiple pages together.</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 50,
    slug: "download-attribute-force-file-download",
    title: "Download Attribute (force download)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "The Definitive Guide to HTML5 Chapter 13",
    exercise: {
      english: {
        question: "Which attribute inside <a> triggers a file download instead of navigating to the file?",
        options: ["download","save","fetch","export"],
        correctAnswer: "download",
        hint: "Add the download attribute to force the browser to download the linked file."
      },
      hinglish: {
        question: "Which attribute inside <a> triggers a file download instead of navigating to the file?",
        options: ["download","save","fetch","export"],
        correctAnswer: "download",
        hint: "Add the download attribute to force the browser to download the linked file."
      },
      hindi: {
        question: "Which attribute inside <a> triggers a file download instead of navigating to the file?",
        options: ["download","save","fetch","export"],
        correctAnswer: "download",
        hint: "Add the download attribute to force the browser to download the linked file."
      }
    },
    english: {
      kid: "* 1. download forces browsers to save files directly.\n* 2. Prevents browsers opening PDFs in tabs.\n* 3. Can rename downloaded file in value.\n* 4. Works seamlessly on local resource files.\n* 5. Great for cheat sheets and certificate downloads.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>File Downloads</title>\n</head>\n<body>\n\n  <h2>Course Resources</h2>\n  <p>Download our free reference guide:</p>\n  <p><a href=\"html5_cheatsheet.pdf\" download=\"Nextsem_HTML5_Guide.pdf\">Download HTML5 Cheat Sheet (PDF)</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. download forces browsers to save files directly.\n* 2. Prevents browsers opening PDFs in tabs.\n* 3. Can rename downloaded file in value.\n* 4. Works seamlessly on local resource files.\n* 5. Great for cheat sheets and certificate downloads.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>File Downloads</title>\n</head>\n<body>\n\n  <h2>Course Resources</h2>\n  <p>Download our free reference guide:</p>\n  <p><a href=\"html5_cheatsheet.pdf\" download=\"Nextsem_HTML5_Guide.pdf\">Download HTML5 Cheat Sheet (PDF)</a></p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. download फाइल को सीधे सेव करने का निर्देश देता है।\n* 2. PDF या इमेज को नए टैब में खुलने से रोकता है।\n* 3. फाइल का नया नाम भी दिया जा सकता है।\n* 4. लोकल फाइलों पर सहजता से काम करता है।\n* 5. नोट्स और सर्टिफिकेट डाउनलोड के लिए उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>File Downloads</title>\n</head>\n<body>\n\n  <h2>Course Resources</h2>\n  <p>Download our free reference guide:</p>\n  <p><a href=\"html5_cheatsheet.pdf\" download=\"Nextsem_HTML5_Guide.pdf\">Download HTML5 Cheat Sheet (PDF)</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. download फाइल को सीधे सेव करने का निर्देश देता है।\n* 2. PDF या इमेज को नए टैब में खुलने से रोकता है।\n* 3. फाइल का नया नाम भी दिया जा सकता है।\n* 4. लोकल फाइलों पर सहजता से काम करता है।\n* 5. नोट्स और सर्टिफिकेट डाउनलोड के लिए उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>File Downloads</title>\n</head>\n<body>\n\n  <h2>Course Resources</h2>\n  <p>Download our free reference guide:</p>\n  <p><a href=\"html5_cheatsheet.pdf\" download=\"Nextsem_HTML5_Guide.pdf\">Download HTML5 Cheat Sheet (PDF)</a></p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. download फाइल को सीधे सेव करने का निर्देश देता है।\n* 2. PDF या इमेज को नए टैब में खुलने से रोकता है।\n* 3. फाइल का नया नाम भी दिया जा सकता है।\n* 4. लोकल फाइलों पर सहजता से काम करता है।\n* 5. नोट्स और सर्टिफिकेट डाउनलोड के लिए उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>File Downloads</title>\n</head>\n<body>\n\n  <h2>Course Resources</h2>\n  <p>Download our free reference guide:</p>\n  <p><a href=\"html5_cheatsheet.pdf\" download=\"Nextsem_HTML5_Guide.pdf\">Download HTML5 Cheat Sheet (PDF)</a></p>\n\n</body>\n</html>\n```",
      pro: "* 1. download फाइल को सीधे सेव करने का निर्देश देता है।\n* 2. PDF या इमेज को नए टैब में खुलने से रोकता है।\n* 3. फाइल का नया नाम भी दिया जा सकता है।\n* 4. लोकल फाइलों पर सहजता से काम करता है।\n* 5. नोट्स और सर्टिफिकेट डाउनलोड के लिए उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>File Downloads</title>\n</head>\n<body>\n\n  <h2>Course Resources</h2>\n  <p>Download our free reference guide:</p>\n  <p><a href=\"html5_cheatsheet.pdf\" download=\"Nextsem_HTML5_Guide.pdf\">Download HTML5 Cheat Sheet (PDF)</a></p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 51,
    slug: "image-src-alt-attributes-elements",
    title: "The Image Element (<img>)",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "Duckett Chapter 5 (p. 94-96)",
    exercise: {
      english: {
        question: "Which attribute is mandatory for accessibility and displays if an image fails to load?",
        options: ["alt","title","name","desc"],
        correctAnswer: "alt",
        hint: "The alt attribute provides alternative text for images."
      },
      hinglish: {
        question: "Which attribute is mandatory for accessibility and displays if an image fails to load?",
        options: ["alt","title","name","desc"],
        correctAnswer: "alt",
        hint: "The alt attribute provides alternative text for images."
      },
      hindi: {
        question: "Which attribute is mandatory for accessibility and displays if an image fails to load?",
        options: ["alt","title","name","desc"],
        correctAnswer: "alt",
        hint: "The alt attribute provides alternative text for images."
      }
    },
    english: {
      kid: "* 1. <img> embeds images into web pages.\n* 2. src provides the image file path URL.\n* 3. alt provides descriptive alternative text.\n* 4. Screen readers read alt text aloud.\n* 5. <img> is an empty self-closing element.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Element</title>\n</head>\n<body>\n\n  <h1>Nextsem Web Academy</h1>\n  <img src=\"/brand/logo.png\" alt=\"Nextsem Academy Official Logo\">\n  <p>Welcome to our free developer curriculum.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <img> embeds images into web pages.\n* 2. src provides the image file path URL.\n* 3. alt provides descriptive alternative text.\n* 4. Screen readers read alt text aloud.\n* 5. <img> is an empty self-closing element.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Element</title>\n</head>\n<body>\n\n  <h1>Nextsem Web Academy</h1>\n  <img src=\"/brand/logo.png\" alt=\"Nextsem Academy Official Logo\">\n  <p>Welcome to our free developer curriculum.</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <img> वेबपेज में तस्वीरें जोड़ता है।\n* 2. src इमेज फाइल का पाथ देता है।\n* 3. alt वैकल्पिक विवरण (alt text) देता है।\n* 4. स्क्रीन रीडर alt टेक्स्ट को पढ़कर सुनाते हैं।\n* 5. <img> एक सेल्फ-क्लोजिंग एलिमेंट होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Element</title>\n</head>\n<body>\n\n  <h1>Nextsem Web Academy</h1>\n  <img src=\"/brand/logo.png\" alt=\"Nextsem Academy Official Logo\">\n  <p>Welcome to our free developer curriculum.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <img> वेबपेज में तस्वीरें जोड़ता है।\n* 2. src इमेज फाइल का पाथ देता है।\n* 3. alt वैकल्पिक विवरण (alt text) देता है।\n* 4. स्क्रीन रीडर alt टेक्स्ट को पढ़कर सुनाते हैं।\n* 5. <img> एक सेल्फ-क्लोजिंग एलिमेंट होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Element</title>\n</head>\n<body>\n\n  <h1>Nextsem Web Academy</h1>\n  <img src=\"/brand/logo.png\" alt=\"Nextsem Academy Official Logo\">\n  <p>Welcome to our free developer curriculum.</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <img> वेबपेज में तस्वीरें जोड़ता है।\n* 2. src इमेज फाइल का पाथ देता है।\n* 3. alt वैकल्पिक विवरण (alt text) देता है।\n* 4. स्क्रीन रीडर alt टेक्स्ट को पढ़कर सुनाते हैं।\n* 5. <img> एक सेल्फ-क्लोजिंग एलिमेंट होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Element</title>\n</head>\n<body>\n\n  <h1>Nextsem Web Academy</h1>\n  <img src=\"/brand/logo.png\" alt=\"Nextsem Academy Official Logo\">\n  <p>Welcome to our free developer curriculum.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <img> वेबपेज में तस्वीरें जोड़ता है।\n* 2. src इमेज फाइल का पाथ देता है।\n* 3. alt वैकल्पिक विवरण (alt text) देता है।\n* 4. स्क्रीन रीडर alt टेक्स्ट को पढ़कर सुनाते हैं।\n* 5. <img> एक सेल्फ-क्लोजिंग एलिमेंट होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Element</title>\n</head>\n<body>\n\n  <h1>Nextsem Web Academy</h1>\n  <img src=\"/brand/logo.png\" alt=\"Nextsem Academy Official Logo\">\n  <p>Welcome to our free developer curriculum.</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 52,
    slug: "image-sizing-width-height-attributes",
    title: "Image Sizing (width & height)",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "Duckett Chapter 5 (p. 97-98)",
    exercise: {
      english: {
        question: "Why should you always define width and height attributes on <img> tags?",
        options: ["To prevent layout shifts while loading","To compress the image file size","To turn images into clickable links","To convert images to vector format"],
        correctAnswer: "To prevent layout shifts while loading",
        hint: "Width and height reserve space and eliminate Cumulative Layout Shift (CLS)."
      },
      hinglish: {
        question: "Why should you always define width and height attributes on <img> tags?",
        options: ["To prevent layout shifts while loading","To compress the image file size","To turn images into clickable links","To convert images to vector format"],
        correctAnswer: "To prevent layout shifts while loading",
        hint: "Width and height reserve space and eliminate Cumulative Layout Shift (CLS)."
      },
      hindi: {
        question: "Why should you always define width and height attributes on <img> tags?",
        options: ["To prevent layout shifts while loading","To compress the image file size","To turn images into clickable links","To convert images to vector format"],
        correctAnswer: "To prevent layout shifts while loading",
        hint: "Width and height reserve space and eliminate Cumulative Layout Shift (CLS)."
      }
    },
    english: {
      kid: "* 1. width and height set image dimensions.\n* 2. Values are specified in pixels without units.\n* 3. Reserves layout space before images load.\n* 4. Prevents Cumulative Layout Shift (CLS) glitches.\n* 5. Maintains clear, crisp image aspect ratios.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Sizing</title>\n</head>\n<body>\n\n  <h2>Developer Workspace</h2>\n  <img src=\"/screenshots/workspace.jpg\" alt=\"Developer Workspace Setup\" width=\"600\" height=\"350\">\n  <p>Optimized workstation setup with dual monitors.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. width and height set image dimensions.\n* 2. Values are specified in pixels without units.\n* 3. Reserves layout space before images load.\n* 4. Prevents Cumulative Layout Shift (CLS) glitches.\n* 5. Maintains clear, crisp image aspect ratios.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Sizing</title>\n</head>\n<body>\n\n  <h2>Developer Workspace</h2>\n  <img src=\"/screenshots/workspace.jpg\" alt=\"Developer Workspace Setup\" width=\"600\" height=\"350\">\n  <p>Optimized workstation setup with dual monitors.</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. width और height इमेज का आकार तय करते हैं।\n* 2. मान सीधे पिक्सल में लिखे जाते हैं।\n* 3. इमेज लोड होने से पहले जगह आरक्षित रखता है।\n* 4. पेज हिलने (CLS लेआउट शिफ्ट) को रोकता है।\n* 5. इमेज का सही अनुपात बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Sizing</title>\n</head>\n<body>\n\n  <h2>Developer Workspace</h2>\n  <img src=\"/screenshots/workspace.jpg\" alt=\"Developer Workspace Setup\" width=\"600\" height=\"350\">\n  <p>Optimized workstation setup with dual monitors.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. width और height इमेज का आकार तय करते हैं।\n* 2. मान सीधे पिक्सल में लिखे जाते हैं।\n* 3. इमेज लोड होने से पहले जगह आरक्षित रखता है।\n* 4. पेज हिलने (CLS लेआउट शिफ्ट) को रोकता है।\n* 5. इमेज का सही अनुपात बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Sizing</title>\n</head>\n<body>\n\n  <h2>Developer Workspace</h2>\n  <img src=\"/screenshots/workspace.jpg\" alt=\"Developer Workspace Setup\" width=\"600\" height=\"350\">\n  <p>Optimized workstation setup with dual monitors.</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. width और height इमेज का आकार तय करते हैं।\n* 2. मान सीधे पिक्सल में लिखे जाते हैं।\n* 3. इमेज लोड होने से पहले जगह आरक्षित रखता है।\n* 4. पेज हिलने (CLS लेआउट शिफ्ट) को रोकता है।\n* 5. इमेज का सही अनुपात बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Sizing</title>\n</head>\n<body>\n\n  <h2>Developer Workspace</h2>\n  <img src=\"/screenshots/workspace.jpg\" alt=\"Developer Workspace Setup\" width=\"600\" height=\"350\">\n  <p>Optimized workstation setup with dual monitors.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. width और height इमेज का आकार तय करते हैं।\n* 2. मान सीधे पिक्सल में लिखे जाते हैं।\n* 3. इमेज लोड होने से पहले जगह आरक्षित रखता है।\n* 4. पेज हिलने (CLS लेआउट शिफ्ट) को रोकता है।\n* 5. इमेज का सही अनुपात बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Sizing</title>\n</head>\n<body>\n\n  <h2>Developer Workspace</h2>\n  <img src=\"/screenshots/workspace.jpg\" alt=\"Developer Workspace Setup\" width=\"600\" height=\"350\">\n  <p>Optimized workstation setup with dual monitors.</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 53,
    slug: "responsive-images-srcset-sizes-attributes",
    title: "Responsive Images (srcset & sizes)",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "Duckett Chapter 5 (p. 99-102)",
    exercise: {
      english: {
        question: "Which attribute allows specifying a list of image files with their natural widths?",
        options: ["srcset","sources","imglist","multisrc"],
        correctAnswer: "srcset",
        hint: "srcset (source set) lists image URLs paired with width descriptors like 800w."
      },
      hinglish: {
        question: "Which attribute allows specifying a list of image files with their natural widths?",
        options: ["srcset","sources","imglist","multisrc"],
        correctAnswer: "srcset",
        hint: "srcset (source set) lists image URLs paired with width descriptors like 800w."
      },
      hindi: {
        question: "Which attribute allows specifying a list of image files with their natural widths?",
        options: ["srcset","sources","imglist","multisrc"],
        correctAnswer: "srcset",
        hint: "srcset (source set) lists image URLs paired with width descriptors like 800w."
      }
    },
    english: {
      kid: "* 1. srcset provides multiple image resolution sources.\n* 2. sizes defines screen layout slot widths.\n* 3. Mobile phones download smaller lightweight images.\n* 4. 4K screens receive crisp high-resolution versions.\n* 5. Drastically reduces mobile data network consumption.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive Images</title>\n</head>\n<body>\n\n  <h2>Responsive Nature Banner</h2>\n  <img \n    src=\"banner-small.jpg\" \n    srcset=\"banner-small.jpg 480w, banner-medium.jpg 800w, banner-large.jpg 1200w\" \n    sizes=\"(max-width: 600px) 480px, 800px\" \n    alt=\"Scenic Mountain Sunset\">\n\n</body>\n</html>\n```",
      pro: "* 1. srcset provides multiple image resolution sources.\n* 2. sizes defines screen layout slot widths.\n* 3. Mobile phones download smaller lightweight images.\n* 4. 4K screens receive crisp high-resolution versions.\n* 5. Drastically reduces mobile data network consumption.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive Images</title>\n</head>\n<body>\n\n  <h2>Responsive Nature Banner</h2>\n  <img \n    src=\"banner-small.jpg\" \n    srcset=\"banner-small.jpg 480w, banner-medium.jpg 800w, banner-large.jpg 1200w\" \n    sizes=\"(max-width: 600px) 480px, 800px\" \n    alt=\"Scenic Mountain Sunset\">\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. srcset अलग-अलग रेजोल्यूशन की तस्वीरें देता है।\n* 2. sizes स्क्रीन के अनुसार चौड़ाई तय करता है।\n* 3. मोबाइल फोन हल्की और छोटी तस्वीरें डाउनलोड करते हैं।\n* 4. बड़ी 4K स्क्रीन को हाई-क्वालिटी इमेज मिलती है।\n* 5. मोबाइल इंटरनेट डेटा की भारी बचत होती है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive Images</title>\n</head>\n<body>\n\n  <h2>Responsive Nature Banner</h2>\n  <img \n    src=\"banner-small.jpg\" \n    srcset=\"banner-small.jpg 480w, banner-medium.jpg 800w, banner-large.jpg 1200w\" \n    sizes=\"(max-width: 600px) 480px, 800px\" \n    alt=\"Scenic Mountain Sunset\">\n\n</body>\n</html>\n```",
      pro: "* 1. srcset अलग-अलग रेजोल्यूशन की तस्वीरें देता है।\n* 2. sizes स्क्रीन के अनुसार चौड़ाई तय करता है।\n* 3. मोबाइल फोन हल्की और छोटी तस्वीरें डाउनलोड करते हैं।\n* 4. बड़ी 4K स्क्रीन को हाई-क्वालिटी इमेज मिलती है।\n* 5. मोबाइल इंटरनेट डेटा की भारी बचत होती है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive Images</title>\n</head>\n<body>\n\n  <h2>Responsive Nature Banner</h2>\n  <img \n    src=\"banner-small.jpg\" \n    srcset=\"banner-small.jpg 480w, banner-medium.jpg 800w, banner-large.jpg 1200w\" \n    sizes=\"(max-width: 600px) 480px, 800px\" \n    alt=\"Scenic Mountain Sunset\">\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. srcset अलग-अलग रेजोल्यूशन की तस्वीरें देता है।\n* 2. sizes स्क्रीन के अनुसार चौड़ाई तय करता है।\n* 3. मोबाइल फोन हल्की और छोटी तस्वीरें डाउनलोड करते हैं।\n* 4. बड़ी 4K स्क्रीन को हाई-क्वालिटी इमेज मिलती है।\n* 5. मोबाइल इंटरनेट डेटा की भारी बचत होती है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive Images</title>\n</head>\n<body>\n\n  <h2>Responsive Nature Banner</h2>\n  <img \n    src=\"banner-small.jpg\" \n    srcset=\"banner-small.jpg 480w, banner-medium.jpg 800w, banner-large.jpg 1200w\" \n    sizes=\"(max-width: 600px) 480px, 800px\" \n    alt=\"Scenic Mountain Sunset\">\n\n</body>\n</html>\n```",
      pro: "* 1. srcset अलग-अलग रेजोल्यूशन की तस्वीरें देता है।\n* 2. sizes स्क्रीन के अनुसार चौड़ाई तय करता है।\n* 3. मोबाइल फोन हल्की और छोटी तस्वीरें डाउनलोड करते हैं।\n* 4. बड़ी 4K स्क्रीन को हाई-क्वालिटी इमेज मिलती है।\n* 5. मोबाइल इंटरनेट डेटा की भारी बचत होती है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Responsive Images</title>\n</head>\n<body>\n\n  <h2>Responsive Nature Banner</h2>\n  <img \n    src=\"banner-small.jpg\" \n    srcset=\"banner-small.jpg 480w, banner-medium.jpg 800w, banner-large.jpg 1200w\" \n    sizes=\"(max-width: 600px) 480px, 800px\" \n    alt=\"Scenic Mountain Sunset\">\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 54,
    slug: "art-direction-picture-source-elements",
    title: "Art Direction with <picture> & <source>",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    exercise: {
      english: {
        question: "Which container element wraps multiple <source> tags for art direction image swapping?",
        options: ["<picture>","<figure>","<media>","<gallery>"],
        correctAnswer: "<picture>",
        hint: "The <picture> element contains one or more <source> tags and one <img> tag."
      },
      hinglish: {
        question: "Which container element wraps multiple <source> tags for art direction image swapping?",
        options: ["<picture>","<figure>","<media>","<gallery>"],
        correctAnswer: "<picture>",
        hint: "The <picture> element contains one or more <source> tags and one <img> tag."
      },
      hindi: {
        question: "Which container element wraps multiple <source> tags for art direction image swapping?",
        options: ["<picture>","<figure>","<media>","<gallery>"],
        correctAnswer: "<picture>",
        hint: "The <picture> element contains one or more <source> tags and one <img> tag."
      }
    },
    english: {
      kid: "* 1. <picture> enables complete art direction control.\n* 2. Contains multiple <source> elements inside.\n* 3. Swaps cropped images based on media queries.\n* 4. Serves modern AVIF and WebP formats.\n* 5. Must include fallback <img> at the end.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Art Direction Picture</title>\n</head>\n<body>\n\n  <h2>Adaptive Hero Banner</h2>\n  <picture>\n    <source media=\"(min-width: 800px)\" srcset=\"banner-wide.jpg\">\n    <source media=\"(min-width: 480px)\" srcset=\"banner-square.jpg\">\n    <img src=\"banner-mobile.jpg\" alt=\"Developer Conference 2026\">\n  </picture>\n\n</body>\n</html>\n```",
      pro: "* 1. <picture> enables complete art direction control.\n* 2. Contains multiple <source> elements inside.\n* 3. Swaps cropped images based on media queries.\n* 4. Serves modern AVIF and WebP formats.\n* 5. Must include fallback <img> at the end.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Art Direction Picture</title>\n</head>\n<body>\n\n  <h2>Adaptive Hero Banner</h2>\n  <picture>\n    <source media=\"(min-width: 800px)\" srcset=\"banner-wide.jpg\">\n    <source media=\"(min-width: 480px)\" srcset=\"banner-square.jpg\">\n    <img src=\"banner-mobile.jpg\" alt=\"Developer Conference 2026\">\n  </picture>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <picture> संपूर्ण आर्ट डायरेक्शन नियंत्रण देता है।\n* 2. इसके भीतर कई <source> तत्व होते हैं।\n* 3. स्क्रीन साइज के अनुसार अलग क्रॉप की गई इमेज दिखाता है।\n* 4. आधुनिक AVIF और WebP फॉर्मेट सर्व करता है।\n* 5. अंत में एक <img> फॉलबैक टैग होना अनिवार्य है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Art Direction Picture</title>\n</head>\n<body>\n\n  <h2>Adaptive Hero Banner</h2>\n  <picture>\n    <source media=\"(min-width: 800px)\" srcset=\"banner-wide.jpg\">\n    <source media=\"(min-width: 480px)\" srcset=\"banner-square.jpg\">\n    <img src=\"banner-mobile.jpg\" alt=\"Developer Conference 2026\">\n  </picture>\n\n</body>\n</html>\n```",
      pro: "* 1. <picture> संपूर्ण आर्ट डायरेक्शन नियंत्रण देता है।\n* 2. इसके भीतर कई <source> तत्व होते हैं।\n* 3. स्क्रीन साइज के अनुसार अलग क्रॉप की गई इमेज दिखाता है।\n* 4. आधुनिक AVIF और WebP फॉर्मेट सर्व करता है।\n* 5. अंत में एक <img> फॉलबैक टैग होना अनिवार्य है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Art Direction Picture</title>\n</head>\n<body>\n\n  <h2>Adaptive Hero Banner</h2>\n  <picture>\n    <source media=\"(min-width: 800px)\" srcset=\"banner-wide.jpg\">\n    <source media=\"(min-width: 480px)\" srcset=\"banner-square.jpg\">\n    <img src=\"banner-mobile.jpg\" alt=\"Developer Conference 2026\">\n  </picture>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <picture> संपूर्ण आर्ट डायरेक्शन नियंत्रण देता है।\n* 2. इसके भीतर कई <source> तत्व होते हैं।\n* 3. स्क्रीन साइज के अनुसार अलग क्रॉप की गई इमेज दिखाता है।\n* 4. आधुनिक AVIF और WebP फॉर्मेट सर्व करता है।\n* 5. अंत में एक <img> फॉलबैक टैग होना अनिवार्य है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Art Direction Picture</title>\n</head>\n<body>\n\n  <h2>Adaptive Hero Banner</h2>\n  <picture>\n    <source media=\"(min-width: 800px)\" srcset=\"banner-wide.jpg\">\n    <source media=\"(min-width: 480px)\" srcset=\"banner-square.jpg\">\n    <img src=\"banner-mobile.jpg\" alt=\"Developer Conference 2026\">\n  </picture>\n\n</body>\n</html>\n```",
      pro: "* 1. <picture> संपूर्ण आर्ट डायरेक्शन नियंत्रण देता है।\n* 2. इसके भीतर कई <source> तत्व होते हैं।\n* 3. स्क्रीन साइज के अनुसार अलग क्रॉप की गई इमेज दिखाता है।\n* 4. आधुनिक AVIF और WebP फॉर्मेट सर्व करता है।\n* 5. अंत में एक <img> फॉलबैक टैग होना अनिवार्य है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Art Direction Picture</title>\n</head>\n<body>\n\n  <h2>Adaptive Hero Banner</h2>\n  <picture>\n    <source media=\"(min-width: 800px)\" srcset=\"banner-wide.jpg\">\n    <source media=\"(min-width: 480px)\" srcset=\"banner-square.jpg\">\n    <img src=\"banner-mobile.jpg\" alt=\"Developer Conference 2026\">\n  </picture>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 55,
    slug: "lazy-loading-images-loading-attribute",
    title: "Lazy Loading Images (loading attribute)",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    exercise: {
      english: {
        question: "Which attribute value enables native browser deferred image loading?",
        options: ["loading=\"lazy\"","defer=\"true\"","async=\"image\"","preload=\"none\""],
        correctAnswer: "loading=\"lazy\"",
        hint: "Use loading=\"lazy\" directly on <img> tags."
      },
      hinglish: {
        question: "Which attribute value enables native browser deferred image loading?",
        options: ["loading=\"lazy\"","defer=\"true\"","async=\"image\"","preload=\"none\""],
        correctAnswer: "loading=\"lazy\"",
        hint: "Use loading=\"lazy\" directly on <img> tags."
      },
      hindi: {
        question: "Which attribute value enables native browser deferred image loading?",
        options: ["loading=\"lazy\"","defer=\"true\"","async=\"image\"","preload=\"none\""],
        correctAnswer: "loading=\"lazy\"",
        hint: "Use loading=\"lazy\" directly on <img> tags."
      }
    },
    english: {
      kid: "* 1. loading=\"lazy\" delays loading offscreen images.\n* 2. Images load only when scrolled near.\n* 3. Speeds up initial page load dramatically.\n* 4. Supported natively by modern web browsers.\n* 5. No external JavaScript libraries required anymore.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Lazy Loading</title>\n</head>\n<body>\n\n  <h1>Photo Article</h1>\n  <p>Scroll down to see high resolution illustrations:</p>\n  \n  <img src=\"mountain.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Snowy Mountain\">\n  <img src=\"ocean.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Pacific Ocean\">\n\n</body>\n</html>\n```",
      pro: "* 1. loading=\"lazy\" delays loading offscreen images.\n* 2. Images load only when scrolled near.\n* 3. Speeds up initial page load dramatically.\n* 4. Supported natively by modern web browsers.\n* 5. No external JavaScript libraries required anymore.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Lazy Loading</title>\n</head>\n<body>\n\n  <h1>Photo Article</h1>\n  <p>Scroll down to see high resolution illustrations:</p>\n  \n  <img src=\"mountain.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Snowy Mountain\">\n  <img src=\"ocean.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Pacific Ocean\">\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. loading=\"lazy\" स्क्रीन से बाहर की तस्वीरों की लोडिंग रोकता है।\n* 2. तस्वीरें केवल स्क्रॉल करने पर लोड होती हैं।\n* 3. शुरुआती पेज लोड की स्पीड काफी बढ़ा देता है।\n* 4. सभी आधुनिक ब्राउज़रों में सीधे सपोर्टेड है।\n* 5. किसी जावास्क्रिप्ट लाइब्रेरी की जरूरत नहीं होती।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Lazy Loading</title>\n</head>\n<body>\n\n  <h1>Photo Article</h1>\n  <p>Scroll down to see high resolution illustrations:</p>\n  \n  <img src=\"mountain.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Snowy Mountain\">\n  <img src=\"ocean.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Pacific Ocean\">\n\n</body>\n</html>\n```",
      pro: "* 1. loading=\"lazy\" स्क्रीन से बाहर की तस्वीरों की लोडिंग रोकता है।\n* 2. तस्वीरें केवल स्क्रॉल करने पर लोड होती हैं।\n* 3. शुरुआती पेज लोड की स्पीड काफी बढ़ा देता है।\n* 4. सभी आधुनिक ब्राउज़रों में सीधे सपोर्टेड है।\n* 5. किसी जावास्क्रिप्ट लाइब्रेरी की जरूरत नहीं होती।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Lazy Loading</title>\n</head>\n<body>\n\n  <h1>Photo Article</h1>\n  <p>Scroll down to see high resolution illustrations:</p>\n  \n  <img src=\"mountain.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Snowy Mountain\">\n  <img src=\"ocean.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Pacific Ocean\">\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. loading=\"lazy\" स्क्रीन से बाहर की तस्वीरों की लोडिंग रोकता है।\n* 2. तस्वीरें केवल स्क्रॉल करने पर लोड होती हैं।\n* 3. शुरुआती पेज लोड की स्पीड काफी बढ़ा देता है।\n* 4. सभी आधुनिक ब्राउज़रों में सीधे सपोर्टेड है।\n* 5. किसी जावास्क्रिप्ट लाइब्रेरी की जरूरत नहीं होती।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Lazy Loading</title>\n</head>\n<body>\n\n  <h1>Photo Article</h1>\n  <p>Scroll down to see high resolution illustrations:</p>\n  \n  <img src=\"mountain.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Snowy Mountain\">\n  <img src=\"ocean.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Pacific Ocean\">\n\n</body>\n</html>\n```",
      pro: "* 1. loading=\"lazy\" स्क्रीन से बाहर की तस्वीरों की लोडिंग रोकता है।\n* 2. तस्वीरें केवल स्क्रॉल करने पर लोड होती हैं।\n* 3. शुरुआती पेज लोड की स्पीड काफी बढ़ा देता है।\n* 4. सभी आधुनिक ब्राउज़रों में सीधे सपोर्टेड है।\n* 5. किसी जावास्क्रिप्ट लाइब्रेरी की जरूरत नहीं होती।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Lazy Loading</title>\n</head>\n<body>\n\n  <h1>Photo Article</h1>\n  <p>Scroll down to see high resolution illustrations:</p>\n  \n  <img src=\"mountain.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Snowy Mountain\">\n  <img src=\"ocean.jpg\" loading=\"lazy\" width=\"800\" height=\"500\" alt=\"Pacific Ocean\">\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 56,
    slug: "figure-figcaption-semantic-image-wrappers",
    title: "Semantic Image Wrappers (<figure> & <figcaption>)",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "Duckett Chapter 5 (p. 103-104)",
    exercise: {
      english: {
        question: "Which element provides a semantic caption for content inside a <figure>?",
        options: ["<figcaption>","<caption>","<label>","<legend>"],
        correctAnswer: "<figcaption>",
        hint: "<figcaption> represents a caption or legend for a <figure>."
      },
      hinglish: {
        question: "Which element provides a semantic caption for content inside a <figure>?",
        options: ["<figcaption>","<caption>","<label>","<legend>"],
        correctAnswer: "<figcaption>",
        hint: "<figcaption> represents a caption or legend for a <figure>."
      },
      hindi: {
        question: "Which element provides a semantic caption for content inside a <figure>?",
        options: ["<figcaption>","<caption>","<label>","<legend>"],
        correctAnswer: "<figcaption>",
        hint: "<figcaption> represents a caption or legend for a <figure>."
      }
    },
    english: {
      kid: "* 1. <figure> encapsulates self-contained visual media.\n* 2. <figcaption> adds a caption description.\n* 3. Can be placed first or last inside.\n* 4. Associates images and captions for accessibility.\n* 5. Semantically superior to generic <div> tags.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Figure and Figcaption</title>\n</head>\n<body>\n\n  <h2>Architecture Diagrams</h2>\n  <figure>\n    <img src=\"client_server_model.png\" alt=\"Client Server Architecture Diagram\">\n    <figcaption>Figure 1.1: Standard Client-Server Communication Flow.</figcaption>\n  </figure>\n\n</body>\n</html>\n```",
      pro: "* 1. <figure> encapsulates self-contained visual media.\n* 2. <figcaption> adds a caption description.\n* 3. Can be placed first or last inside.\n* 4. Associates images and captions for accessibility.\n* 5. Semantically superior to generic <div> tags.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Figure and Figcaption</title>\n</head>\n<body>\n\n  <h2>Architecture Diagrams</h2>\n  <figure>\n    <img src=\"client_server_model.png\" alt=\"Client Server Architecture Diagram\">\n    <figcaption>Figure 1.1: Standard Client-Server Communication Flow.</figcaption>\n  </figure>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <figure> विजुअल मीडिया को समेटता है।\n* 2. <figcaption> फोटो का शीर्षक/कैप्शन जोड़ता है।\n* 3. इसे अंदर सबसे ऊपर या नीचे रख सकते हैं।\n* 4. इमेज और कैप्शन को अर्थपूर्ण तरीके से जोड़ता है।\n* 5. सामान्य <div> टैग से कहीं अधिक बेहतर है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Figure and Figcaption</title>\n</head>\n<body>\n\n  <h2>Architecture Diagrams</h2>\n  <figure>\n    <img src=\"client_server_model.png\" alt=\"Client Server Architecture Diagram\">\n    <figcaption>Figure 1.1: Standard Client-Server Communication Flow.</figcaption>\n  </figure>\n\n</body>\n</html>\n```",
      pro: "* 1. <figure> विजुअल मीडिया को समेटता है।\n* 2. <figcaption> फोटो का शीर्षक/कैप्शन जोड़ता है।\n* 3. इसे अंदर सबसे ऊपर या नीचे रख सकते हैं।\n* 4. इमेज और कैप्शन को अर्थपूर्ण तरीके से जोड़ता है।\n* 5. सामान्य <div> टैग से कहीं अधिक बेहतर है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Figure and Figcaption</title>\n</head>\n<body>\n\n  <h2>Architecture Diagrams</h2>\n  <figure>\n    <img src=\"client_server_model.png\" alt=\"Client Server Architecture Diagram\">\n    <figcaption>Figure 1.1: Standard Client-Server Communication Flow.</figcaption>\n  </figure>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <figure> विजुअल मीडिया को समेटता है।\n* 2. <figcaption> फोटो का शीर्षक/कैप्शन जोड़ता है।\n* 3. इसे अंदर सबसे ऊपर या नीचे रख सकते हैं।\n* 4. इमेज और कैप्शन को अर्थपूर्ण तरीके से जोड़ता है।\n* 5. सामान्य <div> टैग से कहीं अधिक बेहतर है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Figure and Figcaption</title>\n</head>\n<body>\n\n  <h2>Architecture Diagrams</h2>\n  <figure>\n    <img src=\"client_server_model.png\" alt=\"Client Server Architecture Diagram\">\n    <figcaption>Figure 1.1: Standard Client-Server Communication Flow.</figcaption>\n  </figure>\n\n</body>\n</html>\n```",
      pro: "* 1. <figure> विजुअल मीडिया को समेटता है।\n* 2. <figcaption> फोटो का शीर्षक/कैप्शन जोड़ता है।\n* 3. इसे अंदर सबसे ऊपर या नीचे रख सकते हैं।\n* 4. इमेज और कैप्शन को अर्थपूर्ण तरीके से जोड़ता है।\n* 5. सामान्य <div> टैग से कहीं अधिक बेहतर है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Figure and Figcaption</title>\n</head>\n<body>\n\n  <h2>Architecture Diagrams</h2>\n  <figure>\n    <img src=\"client_server_model.png\" alt=\"Client Server Architecture Diagram\">\n    <figcaption>Figure 1.1: Standard Client-Server Communication Flow.</figcaption>\n  </figure>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 57,
    slug: "inline-vector-graphics-svg-element",
    title: "Vector Graphics (<svg>)",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "HTML5: The Missing Manual Chapter 6",
    exercise: {
      english: {
        question: "What is the primary advantage of SVG images compared to PNG or JPEG?",
        options: ["They scale infinitely without losing quality","They play audio streams natively","They only work on mobile devices","They automatically upload files to server"],
        correctAnswer: "They scale infinitely without losing quality",
        hint: "SVG graphics are vector math and never pixelate."
      },
      hinglish: {
        question: "What is the primary advantage of SVG images compared to PNG or JPEG?",
        options: ["They scale infinitely without losing quality","They play audio streams natively","They only work on mobile devices","They automatically upload files to server"],
        correctAnswer: "They scale infinitely without losing quality",
        hint: "SVG graphics are vector math and never pixelate."
      },
      hindi: {
        question: "What is the primary advantage of SVG images compared to PNG or JPEG?",
        options: ["They scale infinitely without losing quality","They play audio streams natively","They only work on mobile devices","They automatically upload files to server"],
        correctAnswer: "They scale infinitely without losing quality",
        hint: "SVG graphics are vector math and never pixelate."
      }
    },
    english: {
      kid: "* 1. <svg> draws scalable resolution-independent graphics.\n* 2. Images never pixelate or blur at scale.\n* 3. Built using XML markup shapes.\n* 4. Includes tags like <circle>, <rect>, <path>.\n* 5. Lightweight and ideal for UI icons.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline SVG Graphics</title>\n</head>\n<body>\n\n  <h2>Vector Icons</h2>\n  <!-- Green Checkmark Circle -->\n  <svg width=\"100\" height=\"100\">\n    <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#04AA6D\" stroke-width=\"4\" fill=\"#04AA6D\" />\n  </svg>\n\n</body>\n</html>\n```",
      pro: "* 1. <svg> draws scalable resolution-independent graphics.\n* 2. Images never pixelate or blur at scale.\n* 3. Built using XML markup shapes.\n* 4. Includes tags like <circle>, <rect>, <path>.\n* 5. Lightweight and ideal for UI icons.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline SVG Graphics</title>\n</head>\n<body>\n\n  <h2>Vector Icons</h2>\n  <!-- Green Checkmark Circle -->\n  <svg width=\"100\" height=\"100\">\n    <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#04AA6D\" stroke-width=\"4\" fill=\"#04AA6D\" />\n  </svg>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <svg> स्केलेबल वेक्टर ग्राफिक्स बनाता है।\n* 2. ज़ूम करने पर कभी धुंधला या पिक्सलेट नहीं होता।\n* 3. XML मार्कअप और आकृतियों से बनता है।\n* 4. इसमें <circle>, <rect>, <path> जैसे टैग होते हैं।\n* 5. बहुत हल्का और आइकॉन्स के लिए सर्वोत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline SVG Graphics</title>\n</head>\n<body>\n\n  <h2>Vector Icons</h2>\n  <!-- Green Checkmark Circle -->\n  <svg width=\"100\" height=\"100\">\n    <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#04AA6D\" stroke-width=\"4\" fill=\"#04AA6D\" />\n  </svg>\n\n</body>\n</html>\n```",
      pro: "* 1. <svg> स्केलेबल वेक्टर ग्राफिक्स बनाता है।\n* 2. ज़ूम करने पर कभी धुंधला या पिक्सलेट नहीं होता।\n* 3. XML मार्कअप और आकृतियों से बनता है।\n* 4. इसमें <circle>, <rect>, <path> जैसे टैग होते हैं।\n* 5. बहुत हल्का और आइकॉन्स के लिए सर्वोत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline SVG Graphics</title>\n</head>\n<body>\n\n  <h2>Vector Icons</h2>\n  <!-- Green Checkmark Circle -->\n  <svg width=\"100\" height=\"100\">\n    <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#04AA6D\" stroke-width=\"4\" fill=\"#04AA6D\" />\n  </svg>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <svg> स्केलेबल वेक्टर ग्राफिक्स बनाता है।\n* 2. ज़ूम करने पर कभी धुंधला या पिक्सलेट नहीं होता।\n* 3. XML मार्कअप और आकृतियों से बनता है।\n* 4. इसमें <circle>, <rect>, <path> जैसे टैग होते हैं।\n* 5. बहुत हल्का और आइकॉन्स के लिए सर्वोत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline SVG Graphics</title>\n</head>\n<body>\n\n  <h2>Vector Icons</h2>\n  <!-- Green Checkmark Circle -->\n  <svg width=\"100\" height=\"100\">\n    <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#04AA6D\" stroke-width=\"4\" fill=\"#04AA6D\" />\n  </svg>\n\n</body>\n</html>\n```",
      pro: "* 1. <svg> स्केलेबल वेक्टर ग्राफिक्स बनाता है।\n* 2. ज़ूम करने पर कभी धुंधला या पिक्सलेट नहीं होता।\n* 3. XML मार्कअप और आकृतियों से बनता है।\n* 4. इसमें <circle>, <rect>, <path> जैसे टैग होते हैं।\n* 5. बहुत हल्का और आइकॉन्स के लिए सर्वोत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Inline SVG Graphics</title>\n</head>\n<body>\n\n  <h2>Vector Icons</h2>\n  <!-- Green Checkmark Circle -->\n  <svg width=\"100\" height=\"100\">\n    <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#04AA6D\" stroke-width=\"4\" fill=\"#04AA6D\" />\n  </svg>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 58,
    slug: "image-maps-map-area-coordinate-tags",
    title: "Image Maps (<map> & <area>)",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "Duckett Chapter 5 (p. 105-108)",
    exercise: {
      english: {
        question: "Which attribute on an <img> connects it to a named <map>?",
        options: ["usemap","map","targetmap","hotspot"],
        correctAnswer: "usemap",
        hint: "usemap=\"#mapName\" links the image to <map name=\"mapName\">."
      },
      hinglish: {
        question: "Which attribute on an <img> connects it to a named <map>?",
        options: ["usemap","map","targetmap","hotspot"],
        correctAnswer: "usemap",
        hint: "usemap=\"#mapName\" links the image to <map name=\"mapName\">."
      },
      hindi: {
        question: "Which attribute on an <img> connects it to a named <map>?",
        options: ["usemap","map","targetmap","hotspot"],
        correctAnswer: "usemap",
        hint: "usemap=\"#mapName\" links the image to <map name=\"mapName\">."
      }
    },
    english: {
      kid: "* 1. <map> creates clickable hotspot zones on images.\n* 2. usemap attribute on <img> links map.\n* 3. <area> defines shape and pixel coordinates.\n* 4. Supports shapes: rect, circle, and poly.\n* 5. Useful for interactive geographical site maps.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Maps</title>\n</head>\n<body>\n\n  <h2>Interactive Workstation Map</h2>\n  <img src=\"desk.jpg\" alt=\"Developer Desk\" usemap=\"#deskmap\">\n\n  <map name=\"deskmap\">\n    <area shape=\"rect\" coords=\"34,44,270,350\" alt=\"Monitor\" href=\"monitor.html\">\n    <area shape=\"circle\" coords=\"337,300,44\" alt=\"Coffee Cup\" href=\"coffee.html\">\n  </map>\n\n</body>\n</html>\n```",
      pro: "* 1. <map> creates clickable hotspot zones on images.\n* 2. usemap attribute on <img> links map.\n* 3. <area> defines shape and pixel coordinates.\n* 4. Supports shapes: rect, circle, and poly.\n* 5. Useful for interactive geographical site maps.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Maps</title>\n</head>\n<body>\n\n  <h2>Interactive Workstation Map</h2>\n  <img src=\"desk.jpg\" alt=\"Developer Desk\" usemap=\"#deskmap\">\n\n  <map name=\"deskmap\">\n    <area shape=\"rect\" coords=\"34,44,270,350\" alt=\"Monitor\" href=\"monitor.html\">\n    <area shape=\"circle\" coords=\"337,300,44\" alt=\"Coffee Cup\" href=\"coffee.html\">\n  </map>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <map> एक तस्वीर पर कई क्लिक करने वाले क्षेत्र बनाता है।\n* 2. <img> का usemap अट्रिब्यूट मैप को जोड़ता है।\n* 3. <area> आकृति और पिक्सल निर्देशांक (coords) तय करता है।\n* 4. rect, circle, और poly आकृतियों को सपोर्ट करता है।\n* 5. इंटरैक्टिव मानचित्रों और लेआउट के लिए उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Maps</title>\n</head>\n<body>\n\n  <h2>Interactive Workstation Map</h2>\n  <img src=\"desk.jpg\" alt=\"Developer Desk\" usemap=\"#deskmap\">\n\n  <map name=\"deskmap\">\n    <area shape=\"rect\" coords=\"34,44,270,350\" alt=\"Monitor\" href=\"monitor.html\">\n    <area shape=\"circle\" coords=\"337,300,44\" alt=\"Coffee Cup\" href=\"coffee.html\">\n  </map>\n\n</body>\n</html>\n```",
      pro: "* 1. <map> एक तस्वीर पर कई क्लिक करने वाले क्षेत्र बनाता है।\n* 2. <img> का usemap अट्रिब्यूट मैप को जोड़ता है।\n* 3. <area> आकृति और पिक्सल निर्देशांक (coords) तय करता है।\n* 4. rect, circle, और poly आकृतियों को सपोर्ट करता है।\n* 5. इंटरैक्टिव मानचित्रों और लेआउट के लिए उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Maps</title>\n</head>\n<body>\n\n  <h2>Interactive Workstation Map</h2>\n  <img src=\"desk.jpg\" alt=\"Developer Desk\" usemap=\"#deskmap\">\n\n  <map name=\"deskmap\">\n    <area shape=\"rect\" coords=\"34,44,270,350\" alt=\"Monitor\" href=\"monitor.html\">\n    <area shape=\"circle\" coords=\"337,300,44\" alt=\"Coffee Cup\" href=\"coffee.html\">\n  </map>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <map> एक तस्वीर पर कई क्लिक करने वाले क्षेत्र बनाता है।\n* 2. <img> का usemap अट्रिब्यूट मैप को जोड़ता है।\n* 3. <area> आकृति और पिक्सल निर्देशांक (coords) तय करता है।\n* 4. rect, circle, और poly आकृतियों को सपोर्ट करता है।\n* 5. इंटरैक्टिव मानचित्रों और लेआउट के लिए उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Maps</title>\n</head>\n<body>\n\n  <h2>Interactive Workstation Map</h2>\n  <img src=\"desk.jpg\" alt=\"Developer Desk\" usemap=\"#deskmap\">\n\n  <map name=\"deskmap\">\n    <area shape=\"rect\" coords=\"34,44,270,350\" alt=\"Monitor\" href=\"monitor.html\">\n    <area shape=\"circle\" coords=\"337,300,44\" alt=\"Coffee Cup\" href=\"coffee.html\">\n  </map>\n\n</body>\n</html>\n```",
      pro: "* 1. <map> एक तस्वीर पर कई क्लिक करने वाले क्षेत्र बनाता है।\n* 2. <img> का usemap अट्रिब्यूट मैप को जोड़ता है।\n* 3. <area> आकृति और पिक्सल निर्देशांक (coords) तय करता है।\n* 4. rect, circle, और poly आकृतियों को सपोर्ट करता है।\n* 5. इंटरैक्टिव मानचित्रों और लेआउट के लिए उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Image Maps</title>\n</head>\n<body>\n\n  <h2>Interactive Workstation Map</h2>\n  <img src=\"desk.jpg\" alt=\"Developer Desk\" usemap=\"#deskmap\">\n\n  <map name=\"deskmap\">\n    <area shape=\"rect\" coords=\"34,44,270,350\" alt=\"Monitor\" href=\"monitor.html\">\n    <area shape=\"circle\" coords=\"337,300,44\" alt=\"Coffee Cup\" href=\"coffee.html\">\n  </map>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 59,
    slug: "favicon-modern-format-link-types",
    title: "Favicon Formats & Link Configurations",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "Duckett Chapter 8 (p. 190)",
    exercise: {
      english: {
        question: "Which rel attribute value is used to specify a website favicon?",
        options: ["icon","favicon","shortcut","logo"],
        correctAnswer: "icon",
        hint: "Use <link rel=\"icon\" href=\"favicon.svg\"> in the <head>."
      },
      hinglish: {
        question: "Which rel attribute value is used to specify a website favicon?",
        options: ["icon","favicon","shortcut","logo"],
        correctAnswer: "icon",
        hint: "Use <link rel=\"icon\" href=\"favicon.svg\"> in the <head>."
      },
      hindi: {
        question: "Which rel attribute value is used to specify a website favicon?",
        options: ["icon","favicon","shortcut","logo"],
        correctAnswer: "icon",
        hint: "Use <link rel=\"icon\" href=\"favicon.svg\"> in the <head>."
      }
    },
    english: {
      kid: "* 1. Favicons display on browser tab headers.\n* 2. Defined inside <head> using <link> tag.\n* 3. Modern sites use SVG and PNG favicons.\n* 4. Legacy browsers look for favicon.ico automatically.\n* 5. Enhances brand recognition across open tabs.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy</title>\n  <!-- Modern SVG Favicon -->\n  <link rel=\"icon\" type=\"image/svg+xml\" href=\"/brand/icon.svg\">\n  <!-- Fallback ICO Favicon -->\n  <link rel=\"alternate icon\" href=\"/favicon.ico\">\n</head>\n<body>\n\n  <h1>Nextsem Academy</h1>\n  <p>Check your browser tab to see our clean brand favicon icon!</p>\n\n</body>\n</html>\n```",
      pro: "* 1. Favicons display on browser tab headers.\n* 2. Defined inside <head> using <link> tag.\n* 3. Modern sites use SVG and PNG favicons.\n* 4. Legacy browsers look for favicon.ico automatically.\n* 5. Enhances brand recognition across open tabs.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy</title>\n  <!-- Modern SVG Favicon -->\n  <link rel=\"icon\" type=\"image/svg+xml\" href=\"/brand/icon.svg\">\n  <!-- Fallback ICO Favicon -->\n  <link rel=\"alternate icon\" href=\"/favicon.ico\">\n</head>\n<body>\n\n  <h1>Nextsem Academy</h1>\n  <p>Check your browser tab to see our clean brand favicon icon!</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. फेविकॉन ब्राउज़र टैब के शीर्ष पर दिखता है।\n* 2. <head> के भीतर <link> टैग से जोड़ा जाता है।\n* 3. आधुनिक वेबसाइटें SVG और PNG फेविकॉन इस्तेमाल करती हैं।\n* 4. पुराने ब्राउज़र favicon.ico को सीधे खोज लेते हैं।\n* 5. खुले हुए टैब में ब्रांड की पहचान मजबूत करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy</title>\n  <!-- Modern SVG Favicon -->\n  <link rel=\"icon\" type=\"image/svg+xml\" href=\"/brand/icon.svg\">\n  <!-- Fallback ICO Favicon -->\n  <link rel=\"alternate icon\" href=\"/favicon.ico\">\n</head>\n<body>\n\n  <h1>Nextsem Academy</h1>\n  <p>Check your browser tab to see our clean brand favicon icon!</p>\n\n</body>\n</html>\n```",
      pro: "* 1. फेविकॉन ब्राउज़र टैब के शीर्ष पर दिखता है।\n* 2. <head> के भीतर <link> टैग से जोड़ा जाता है।\n* 3. आधुनिक वेबसाइटें SVG और PNG फेविकॉन इस्तेमाल करती हैं।\n* 4. पुराने ब्राउज़र favicon.ico को सीधे खोज लेते हैं।\n* 5. खुले हुए टैब में ब्रांड की पहचान मजबूत करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy</title>\n  <!-- Modern SVG Favicon -->\n  <link rel=\"icon\" type=\"image/svg+xml\" href=\"/brand/icon.svg\">\n  <!-- Fallback ICO Favicon -->\n  <link rel=\"alternate icon\" href=\"/favicon.ico\">\n</head>\n<body>\n\n  <h1>Nextsem Academy</h1>\n  <p>Check your browser tab to see our clean brand favicon icon!</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. फेविकॉन ब्राउज़र टैब के शीर्ष पर दिखता है।\n* 2. <head> के भीतर <link> टैग से जोड़ा जाता है।\n* 3. आधुनिक वेबसाइटें SVG और PNG फेविकॉन इस्तेमाल करती हैं।\n* 4. पुराने ब्राउज़र favicon.ico को सीधे खोज लेते हैं।\n* 5. खुले हुए टैब में ब्रांड की पहचान मजबूत करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy</title>\n  <!-- Modern SVG Favicon -->\n  <link rel=\"icon\" type=\"image/svg+xml\" href=\"/brand/icon.svg\">\n  <!-- Fallback ICO Favicon -->\n  <link rel=\"alternate icon\" href=\"/favicon.ico\">\n</head>\n<body>\n\n  <h1>Nextsem Academy</h1>\n  <p>Check your browser tab to see our clean brand favicon icon!</p>\n\n</body>\n</html>\n```",
      pro: "* 1. फेविकॉन ब्राउज़र टैब के शीर्ष पर दिखता है।\n* 2. <head> के भीतर <link> टैग से जोड़ा जाता है।\n* 3. आधुनिक वेबसाइटें SVG और PNG फेविकॉन इस्तेमाल करती हैं।\n* 4. पुराने ब्राउज़र favicon.ico को सीधे खोज लेते हैं।\n* 5. खुले हुए टैब में ब्रांड की पहचान मजबूत करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy</title>\n  <!-- Modern SVG Favicon -->\n  <link rel=\"icon\" type=\"image/svg+xml\" href=\"/brand/icon.svg\">\n  <!-- Fallback ICO Favicon -->\n  <link rel=\"alternate icon\" href=\"/favicon.ico\">\n</head>\n<body>\n\n  <h1>Nextsem Academy</h1>\n  <p>Check your browser tab to see our clean brand favicon icon!</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 60,
    slug: "capstone-photo-gallery-responsive",
    title: "Capstone Project: Responsive Photo Gallery",
    unit: "Unit 6: Multimedia & Responsive Art Direction",
    bookRef: "Nextsem Academy Project Suite",
    exercise: {
      english: {
        question: "What is the recommended semantic container for images paired with captions in modern HTML5?",
        options: ["<figure> with <figcaption>","<div> with <p>","<section> with <label>","<aside> with <span>"],
        correctAnswer: "<figure> with <figcaption>",
        hint: "<figure> and <figcaption> provide semantic grouping for captioned media."
      },
      hinglish: {
        question: "What is the recommended semantic container for images paired with captions in modern HTML5?",
        options: ["<figure> with <figcaption>","<div> with <p>","<section> with <label>","<aside> with <span>"],
        correctAnswer: "<figure> with <figcaption>",
        hint: "<figure> and <figcaption> provide semantic grouping for captioned media."
      },
      hindi: {
        question: "What is the recommended semantic container for images paired with captions in modern HTML5?",
        options: ["<figure> with <figcaption>","<div> with <p>","<section> with <label>","<aside> with <span>"],
        correctAnswer: "<figure> with <figcaption>",
        hint: "<figure> and <figcaption> provide semantic grouping for captioned media."
      }
    },
    english: {
      kid: "* 1. Combines semantic <figure>, <picture>, and <figcaption> tags.\n* 2. Implements native loading=\"lazy\" on all media.\n* 3. Uses descriptive alt text for accessibility.\n* 4. Built with 100% pure semantic HTML5.\n* 5. Serves responsive image sizes efficiently.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Developer Photo Gallery</title>\n</head>\n<body>\n\n  <header>\n    <h1>Web Development Studio Gallery</h1>\n    <p>Explore our collaborative workspaces and design blueprints.</p>\n  </header>\n\n  <main>\n    <figure>\n      <img src=\"workspace1.jpg\" alt=\"Developer coding with VS Code on Windows 11\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 1: High performance dual-monitor coding setup.</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"workspace2.jpg\" alt=\"UI/UX wireframe design review\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 2: Architecture wireframing and database modeling.</figcaption>\n    </figure>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Nextsem Academy. All rights reserved.</p>\n  </footer>\n\n</body>\n</html>\n```",
      pro: "* 1. Combines semantic <figure>, <picture>, and <figcaption> tags.\n* 2. Implements native loading=\"lazy\" on all media.\n* 3. Uses descriptive alt text for accessibility.\n* 4. Built with 100% pure semantic HTML5.\n* 5. Serves responsive image sizes efficiently.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Developer Photo Gallery</title>\n</head>\n<body>\n\n  <header>\n    <h1>Web Development Studio Gallery</h1>\n    <p>Explore our collaborative workspaces and design blueprints.</p>\n  </header>\n\n  <main>\n    <figure>\n      <img src=\"workspace1.jpg\" alt=\"Developer coding with VS Code on Windows 11\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 1: High performance dual-monitor coding setup.</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"workspace2.jpg\" alt=\"UI/UX wireframe design review\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 2: Architecture wireframing and database modeling.</figcaption>\n    </figure>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Nextsem Academy. All rights reserved.</p>\n  </footer>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <figure>, <picture>, और <figcaption> का संयोजन।\n* 2. सभी तस्वीरों पर native loading=\"lazy\" लागू करता है।\n* 3. पूर्ण पहुंच (Accessibility) के लिए alt टेक्स्ट जोड़ता है।\n* 4. 100% शुद्ध सिमेंटिक HTML5 से बना है।\n* 5. सभी स्क्रीन पर सही इमेज साइज सर्व करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Developer Photo Gallery</title>\n</head>\n<body>\n\n  <header>\n    <h1>Web Development Studio Gallery</h1>\n    <p>Explore our collaborative workspaces and design blueprints.</p>\n  </header>\n\n  <main>\n    <figure>\n      <img src=\"workspace1.jpg\" alt=\"Developer coding with VS Code on Windows 11\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 1: High performance dual-monitor coding setup.</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"workspace2.jpg\" alt=\"UI/UX wireframe design review\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 2: Architecture wireframing and database modeling.</figcaption>\n    </figure>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Nextsem Academy. All rights reserved.</p>\n  </footer>\n\n</body>\n</html>\n```",
      pro: "* 1. <figure>, <picture>, और <figcaption> का संयोजन।\n* 2. सभी तस्वीरों पर native loading=\"lazy\" लागू करता है।\n* 3. पूर्ण पहुंच (Accessibility) के लिए alt टेक्स्ट जोड़ता है।\n* 4. 100% शुद्ध सिमेंटिक HTML5 से बना है।\n* 5. सभी स्क्रीन पर सही इमेज साइज सर्व करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Developer Photo Gallery</title>\n</head>\n<body>\n\n  <header>\n    <h1>Web Development Studio Gallery</h1>\n    <p>Explore our collaborative workspaces and design blueprints.</p>\n  </header>\n\n  <main>\n    <figure>\n      <img src=\"workspace1.jpg\" alt=\"Developer coding with VS Code on Windows 11\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 1: High performance dual-monitor coding setup.</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"workspace2.jpg\" alt=\"UI/UX wireframe design review\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 2: Architecture wireframing and database modeling.</figcaption>\n    </figure>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Nextsem Academy. All rights reserved.</p>\n  </footer>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <figure>, <picture>, और <figcaption> का संयोजन।\n* 2. सभी तस्वीरों पर native loading=\"lazy\" लागू करता है।\n* 3. पूर्ण पहुंच (Accessibility) के लिए alt टेक्स्ट जोड़ता है।\n* 4. 100% शुद्ध सिमेंटिक HTML5 से बना है।\n* 5. सभी स्क्रीन पर सही इमेज साइज सर्व करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Developer Photo Gallery</title>\n</head>\n<body>\n\n  <header>\n    <h1>Web Development Studio Gallery</h1>\n    <p>Explore our collaborative workspaces and design blueprints.</p>\n  </header>\n\n  <main>\n    <figure>\n      <img src=\"workspace1.jpg\" alt=\"Developer coding with VS Code on Windows 11\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 1: High performance dual-monitor coding setup.</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"workspace2.jpg\" alt=\"UI/UX wireframe design review\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 2: Architecture wireframing and database modeling.</figcaption>\n    </figure>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Nextsem Academy. All rights reserved.</p>\n  </footer>\n\n</body>\n</html>\n```",
      pro: "* 1. <figure>, <picture>, और <figcaption> का संयोजन।\n* 2. सभी तस्वीरों पर native loading=\"lazy\" लागू करता है।\n* 3. पूर्ण पहुंच (Accessibility) के लिए alt टेक्स्ट जोड़ता है।\n* 4. 100% शुद्ध सिमेंटिक HTML5 से बना है।\n* 5. सभी स्क्रीन पर सही इमेज साइज सर्व करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Developer Photo Gallery</title>\n</head>\n<body>\n\n  <header>\n    <h1>Web Development Studio Gallery</h1>\n    <p>Explore our collaborative workspaces and design blueprints.</p>\n  </header>\n\n  <main>\n    <figure>\n      <img src=\"workspace1.jpg\" alt=\"Developer coding with VS Code on Windows 11\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 1: High performance dual-monitor coding setup.</figcaption>\n    </figure>\n\n    <figure>\n      <img src=\"workspace2.jpg\" alt=\"UI/UX wireframe design review\" loading=\"lazy\" width=\"600\" height=\"350\">\n      <figcaption>Figure 2: Architecture wireframing and database modeling.</figcaption>\n    </figure>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Nextsem Academy. All rights reserved.</p>\n  </footer>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 61,
    slug: "audio-elements-src-controls-autoplay-attributes",
    title: "Audio Elements (src & controls)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 202-205)",
    exercise: {
      english: {
        question: "Which attribute must be added to <audio> so users can see play and pause buttons?",
        options: ["controls","playbar","buttons","autoplay"],
        correctAnswer: "controls",
        hint: "Without controls, the audio element remains invisible on the page."
      },
      hinglish: {
        question: "Which attribute must be added to <audio> so users can see play and pause buttons?",
        options: ["controls","playbar","buttons","autoplay"],
        correctAnswer: "controls",
        hint: "Without controls, the audio element remains invisible on the page."
      },
      hindi: {
        question: "Which attribute must be added to <audio> so users can see play and pause buttons?",
        options: ["controls","playbar","buttons","autoplay"],
        correctAnswer: "controls",
        hint: "Without controls, the audio element remains invisible on the page."
      }
    },
    english: {
      kid: "* 1. <audio> plays audio files natively in browsers.\n* 2. controls displays play pause volume buttons.\n* 3. src points to sound audio files.\n* 4. Text inside works as fallback message.\n* 5. No third-party Flash plugins needed.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Player</title>\n</head>\n<body>\n\n  <h2>Podcast Player</h2>\n  <audio controls>\n    <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n    Your browser does not support audio playback.\n  </audio>\n\n</body>\n</html>\n```",
      pro: "* 1. <audio> plays audio files natively in browsers.\n* 2. controls displays play pause volume buttons.\n* 3. src points to sound audio files.\n* 4. Text inside works as fallback message.\n* 5. No third-party Flash plugins needed.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Player</title>\n</head>\n<body>\n\n  <h2>Podcast Player</h2>\n  <audio controls>\n    <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n    Your browser does not support audio playback.\n  </audio>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <audio> ब्राउज़र में ऑडियो फाइल चलाता है।\n* 2. controls प्ले, पॉज, और वॉल्यूम बटन देता है।\n* 3. src ऑडियो फाइल का पाथ देता है।\n* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।\n* 5. किसी बाहरी फ्लैश प्लगइन की जरूरत नहीं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Player</title>\n</head>\n<body>\n\n  <h2>Podcast Player</h2>\n  <audio controls>\n    <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n    Your browser does not support audio playback.\n  </audio>\n\n</body>\n</html>\n```",
      pro: "* 1. <audio> ब्राउज़र में ऑडियो फाइल चलाता है।\n* 2. controls प्ले, पॉज, और वॉल्यूम बटन देता है।\n* 3. src ऑडियो फाइल का पाथ देता है।\n* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।\n* 5. किसी बाहरी फ्लैश प्लगइन की जरूरत नहीं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Player</title>\n</head>\n<body>\n\n  <h2>Podcast Player</h2>\n  <audio controls>\n    <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n    Your browser does not support audio playback.\n  </audio>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <audio> ब्राउज़र में ऑडियो फाइल चलाता है।\n* 2. controls प्ले, पॉज, और वॉल्यूम बटन देता है।\n* 3. src ऑडियो फाइल का पाथ देता है।\n* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।\n* 5. किसी बाहरी फ्लैश प्लगइन की जरूरत नहीं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Player</title>\n</head>\n<body>\n\n  <h2>Podcast Player</h2>\n  <audio controls>\n    <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n    Your browser does not support audio playback.\n  </audio>\n\n</body>\n</html>\n```",
      pro: "* 1. <audio> ब्राउज़र में ऑडियो फाइल चलाता है।\n* 2. controls प्ले, पॉज, और वॉल्यूम बटन देता है।\n* 3. src ऑडियो फाइल का पाथ देता है।\n* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।\n* 5. किसी बाहरी फ्लैश प्लगइन की जरूरत नहीं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Player</title>\n</head>\n<body>\n\n  <h2>Podcast Player</h2>\n  <audio controls>\n    <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n    Your browser does not support audio playback.\n  </audio>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 62,
    slug: "audio-fallback-source-format-types",
    title: "Audio Fallback Formats & Sources",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 206-208)",
    exercise: {
      english: {
        question: "How does the browser choose which <source> to play inside an <audio> tag?",
        options: ["It plays the first supported format in order","It plays the largest file size","It plays all formats at the same time","It prompts the user to select manually"],
        correctAnswer: "It plays the first supported format in order",
        hint: "The browser evaluates <source> tags from top to bottom."
      },
      hinglish: {
        question: "How does the browser choose which <source> to play inside an <audio> tag?",
        options: ["It plays the first supported format in order","It plays the largest file size","It plays all formats at the same time","It prompts the user to select manually"],
        correctAnswer: "It plays the first supported format in order",
        hint: "The browser evaluates <source> tags from top to bottom."
      },
      hindi: {
        question: "How does the browser choose which <source> to play inside an <audio> tag?",
        options: ["It plays the first supported format in order","It plays the largest file size","It plays all formats at the same time","It prompts the user to select manually"],
        correctAnswer: "It plays the first supported format in order",
        hint: "The browser evaluates <source> tags from top to bottom."
      }
    },
    english: {
      kid: "* 1. <source> provides multiple audio format alternatives.\n* 2. Browsers play the first supported format.\n* 3. MP3 provides universal browser playback compatibility.\n* 4. OGG and WAV provide open formats.\n* 5. type attribute specifies the audio MIME-type.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Formats</title>\n</head>\n<body>\n\n  <h2>Multi-Format Audio Player</h2>\n  <audio controls>\n    <source src=\"soundtrack.ogg\" type=\"audio/ogg\">\n    <source src=\"soundtrack.mp3\" type=\"audio/mpeg\">\n    <source src=\"soundtrack.wav\" type=\"audio/wav\">\n    Audio element unsupported on this device.\n  </audio>\n\n</body>\n</html>\n```",
      pro: "* 1. <source> provides multiple audio format alternatives.\n* 2. Browsers play the first supported format.\n* 3. MP3 provides universal browser playback compatibility.\n* 4. OGG and WAV provide open formats.\n* 5. type attribute specifies the audio MIME-type.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Formats</title>\n</head>\n<body>\n\n  <h2>Multi-Format Audio Player</h2>\n  <audio controls>\n    <source src=\"soundtrack.ogg\" type=\"audio/ogg\">\n    <source src=\"soundtrack.mp3\" type=\"audio/mpeg\">\n    <source src=\"soundtrack.wav\" type=\"audio/wav\">\n    Audio element unsupported on this device.\n  </audio>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <source> कई ऑडियो फॉर्मेट के विकल्प देता है।\n* 2. ब्राउज़र पहला समर्थित फॉर्मेट चलाता है।\n* 3. MP3 सभी ब्राउज़रों में आसानी से चलता है।\n* 4. OGG और WAV ओपन फॉर्मेट होते हैं।\n* 5. type अट्रिब्यूट ऑडियो का MIME प्रकार बताता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Formats</title>\n</head>\n<body>\n\n  <h2>Multi-Format Audio Player</h2>\n  <audio controls>\n    <source src=\"soundtrack.ogg\" type=\"audio/ogg\">\n    <source src=\"soundtrack.mp3\" type=\"audio/mpeg\">\n    <source src=\"soundtrack.wav\" type=\"audio/wav\">\n    Audio element unsupported on this device.\n  </audio>\n\n</body>\n</html>\n```",
      pro: "* 1. <source> कई ऑडियो फॉर्मेट के विकल्प देता है।\n* 2. ब्राउज़र पहला समर्थित फॉर्मेट चलाता है।\n* 3. MP3 सभी ब्राउज़रों में आसानी से चलता है।\n* 4. OGG और WAV ओपन फॉर्मेट होते हैं।\n* 5. type अट्रिब्यूट ऑडियो का MIME प्रकार बताता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Formats</title>\n</head>\n<body>\n\n  <h2>Multi-Format Audio Player</h2>\n  <audio controls>\n    <source src=\"soundtrack.ogg\" type=\"audio/ogg\">\n    <source src=\"soundtrack.mp3\" type=\"audio/mpeg\">\n    <source src=\"soundtrack.wav\" type=\"audio/wav\">\n    Audio element unsupported on this device.\n  </audio>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <source> कई ऑडियो फॉर्मेट के विकल्प देता है।\n* 2. ब्राउज़र पहला समर्थित फॉर्मेट चलाता है।\n* 3. MP3 सभी ब्राउज़रों में आसानी से चलता है।\n* 4. OGG और WAV ओपन फॉर्मेट होते हैं।\n* 5. type अट्रिब्यूट ऑडियो का MIME प्रकार बताता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Formats</title>\n</head>\n<body>\n\n  <h2>Multi-Format Audio Player</h2>\n  <audio controls>\n    <source src=\"soundtrack.ogg\" type=\"audio/ogg\">\n    <source src=\"soundtrack.mp3\" type=\"audio/mpeg\">\n    <source src=\"soundtrack.wav\" type=\"audio/wav\">\n    Audio element unsupported on this device.\n  </audio>\n\n</body>\n</html>\n```",
      pro: "* 1. <source> कई ऑडियो फॉर्मेट के विकल्प देता है।\n* 2. ब्राउज़र पहला समर्थित फॉर्मेट चलाता है।\n* 3. MP3 सभी ब्राउज़रों में आसानी से चलता है।\n* 4. OGG और WAV ओपन फॉर्मेट होते हैं।\n* 5. type अट्रिब्यूट ऑडियो का MIME प्रकार बताता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio Formats</title>\n</head>\n<body>\n\n  <h2>Multi-Format Audio Player</h2>\n  <audio controls>\n    <source src=\"soundtrack.ogg\" type=\"audio/ogg\">\n    <source src=\"soundtrack.mp3\" type=\"audio/mpeg\">\n    <source src=\"soundtrack.wav\" type=\"audio/wav\">\n    Audio element unsupported on this device.\n  </audio>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 63,
    slug: "video-elements-src-poster-preload-settings",
    title: "Video Elements (poster & preload)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 209-214)",
    exercise: {
      english: {
        question: "Which attribute sets a preview thumbnail image before the video begins playing?",
        options: ["poster","thumbnail","cover","preview"],
        correctAnswer: "poster",
        hint: "The poster attribute specifies an image to show while the video downloads."
      },
      hinglish: {
        question: "Which attribute sets a preview thumbnail image before the video begins playing?",
        options: ["poster","thumbnail","cover","preview"],
        correctAnswer: "poster",
        hint: "The poster attribute specifies an image to show while the video downloads."
      },
      hindi: {
        question: "Which attribute sets a preview thumbnail image before the video begins playing?",
        options: ["poster","thumbnail","cover","preview"],
        correctAnswer: "poster",
        hint: "The poster attribute specifies an image to show while the video downloads."
      }
    },
    english: {
      kid: "* 1. <video> embeds video clips directly on pages.\n* 2. poster specifies preview thumbnail cover image.\n* 3. controls enables play seek volume controls.\n* 4. width and height prevent layout reflows.\n* 5. preload controls initial video buffering behavior.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Player</title>\n</head>\n<body>\n\n  <h2>Full Stack Lesson Video</h2>\n  <video controls width=\"640\" height=\"360\" poster=\"poster_cover.jpg\">\n    <source src=\"lesson_demo.mp4\" type=\"video/mp4\">\n    <source src=\"lesson_demo.webm\" type=\"video/webm\">\n    Your browser does not support HTML5 video.\n  </video>\n\n</body>\n</html>\n```",
      pro: "* 1. <video> embeds video clips directly on pages.\n* 2. poster specifies preview thumbnail cover image.\n* 3. controls enables play seek volume controls.\n* 4. width and height prevent layout reflows.\n* 5. preload controls initial video buffering behavior.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Player</title>\n</head>\n<body>\n\n  <h2>Full Stack Lesson Video</h2>\n  <video controls width=\"640\" height=\"360\" poster=\"poster_cover.jpg\">\n    <source src=\"lesson_demo.mp4\" type=\"video/mp4\">\n    <source src=\"lesson_demo.webm\" type=\"video/webm\">\n    Your browser does not support HTML5 video.\n  </video>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <video> वेबपेज में वीडियो चलाता है।\n* 2. poster वीडियो का थंबनेल कवर दिखाता है।\n* 3. controls प्ले, पॉज और सीक बार देता है।\n* 4. width और height लेआउट को स्थिर रखते हैं।\n* 5. preload वीडियो की बफरिंग नियंत्रित करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Player</title>\n</head>\n<body>\n\n  <h2>Full Stack Lesson Video</h2>\n  <video controls width=\"640\" height=\"360\" poster=\"poster_cover.jpg\">\n    <source src=\"lesson_demo.mp4\" type=\"video/mp4\">\n    <source src=\"lesson_demo.webm\" type=\"video/webm\">\n    Your browser does not support HTML5 video.\n  </video>\n\n</body>\n</html>\n```",
      pro: "* 1. <video> वेबपेज में वीडियो चलाता है।\n* 2. poster वीडियो का थंबनेल कवर दिखाता है।\n* 3. controls प्ले, पॉज और सीक बार देता है।\n* 4. width और height लेआउट को स्थिर रखते हैं।\n* 5. preload वीडियो की बफरिंग नियंत्रित करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Player</title>\n</head>\n<body>\n\n  <h2>Full Stack Lesson Video</h2>\n  <video controls width=\"640\" height=\"360\" poster=\"poster_cover.jpg\">\n    <source src=\"lesson_demo.mp4\" type=\"video/mp4\">\n    <source src=\"lesson_demo.webm\" type=\"video/webm\">\n    Your browser does not support HTML5 video.\n  </video>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <video> वेबपेज में वीडियो चलाता है।\n* 2. poster वीडियो का थंबनेल कवर दिखाता है।\n* 3. controls प्ले, पॉज और सीक बार देता है।\n* 4. width और height लेआउट को स्थिर रखते हैं।\n* 5. preload वीडियो की बफरिंग नियंत्रित करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Player</title>\n</head>\n<body>\n\n  <h2>Full Stack Lesson Video</h2>\n  <video controls width=\"640\" height=\"360\" poster=\"poster_cover.jpg\">\n    <source src=\"lesson_demo.mp4\" type=\"video/mp4\">\n    <source src=\"lesson_demo.webm\" type=\"video/webm\">\n    Your browser does not support HTML5 video.\n  </video>\n\n</body>\n</html>\n```",
      pro: "* 1. <video> वेबपेज में वीडियो चलाता है।\n* 2. poster वीडियो का थंबनेल कवर दिखाता है।\n* 3. controls प्ले, पॉज और सीक बार देता है।\n* 4. width और height लेआउट को स्थिर रखते हैं।\n* 5. preload वीडियो की बफरिंग नियंत्रित करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Player</title>\n</head>\n<body>\n\n  <h2>Full Stack Lesson Video</h2>\n  <video controls width=\"640\" height=\"360\" poster=\"poster_cover.jpg\">\n    <source src=\"lesson_demo.mp4\" type=\"video/mp4\">\n    <source src=\"lesson_demo.webm\" type=\"video/webm\">\n    Your browser does not support HTML5 video.\n  </video>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 64,
    slug: "video-subtitles-tracks-element",
    title: "Video Subtitles & Captions (<track>)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "HTML5: The Missing Manual Chapter 5",
    exercise: {
      english: {
        question: "Which file format standard is used with the <track> element for subtitles?",
        options: ["WebVTT (.vtt)","SubRip (.srt)","Text (.txt)","JSON (.json)"],
        correctAnswer: "WebVTT (.vtt)",
        hint: "The <track> element uses the WebVTT (Web Video Text Tracks) standard format."
      },
      hinglish: {
        question: "Which file format standard is used with the <track> element for subtitles?",
        options: ["WebVTT (.vtt)","SubRip (.srt)","Text (.txt)","JSON (.json)"],
        correctAnswer: "WebVTT (.vtt)",
        hint: "The <track> element uses the WebVTT (Web Video Text Tracks) standard format."
      },
      hindi: {
        question: "Which file format standard is used with the <track> element for subtitles?",
        options: ["WebVTT (.vtt)","SubRip (.srt)","Text (.txt)","JSON (.json)"],
        correctAnswer: "WebVTT (.vtt)",
        hint: "The <track> element uses the WebVTT (Web Video Text Tracks) standard format."
      }
    },
    english: {
      kid: "* 1. <track> provides timed text captions and subtitles.\n* 2. Uses standardized WebVTT (.vtt) subtitle files.\n* 3. kind specifies subtitles, captions, or descriptions.\n* 4. srclang sets the subtitle language code.\n* 5. Essential for deaf and international accessibility.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Subtitles</title>\n</head>\n<body>\n\n  <h2>Subtitled Tutorial</h2>\n  <video controls width=\"640\">\n    <source src=\"tutorial.mp4\" type=\"video/mp4\">\n    <track src=\"captions_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n    <track src=\"captions_hi.vtt\" kind=\"subtitles\" srclang=\"hi\" label=\"Hindi\">\n  </video>\n\n</body>\n</html>\n```",
      pro: "* 1. <track> provides timed text captions and subtitles.\n* 2. Uses standardized WebVTT (.vtt) subtitle files.\n* 3. kind specifies subtitles, captions, or descriptions.\n* 4. srclang sets the subtitle language code.\n* 5. Essential for deaf and international accessibility.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Subtitles</title>\n</head>\n<body>\n\n  <h2>Subtitled Tutorial</h2>\n  <video controls width=\"640\">\n    <source src=\"tutorial.mp4\" type=\"video/mp4\">\n    <track src=\"captions_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n    <track src=\"captions_hi.vtt\" kind=\"subtitles\" srclang=\"hi\" label=\"Hindi\">\n  </video>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <track> वीडियो में सबटाइटल और कैप्शन जोड़ता है।\n* 2. मानक WebVTT (.vtt) फाइलों का उपयोग करता है।\n* 3. kind प्रकार (subtitles/captions) तय करता है।\n* 4. srclang भाषा का कोड सेट करता है।\n* 5. सभी यूजर्स के लिए वीडियो को सुलभ बनाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Subtitles</title>\n</head>\n<body>\n\n  <h2>Subtitled Tutorial</h2>\n  <video controls width=\"640\">\n    <source src=\"tutorial.mp4\" type=\"video/mp4\">\n    <track src=\"captions_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n    <track src=\"captions_hi.vtt\" kind=\"subtitles\" srclang=\"hi\" label=\"Hindi\">\n  </video>\n\n</body>\n</html>\n```",
      pro: "* 1. <track> वीडियो में सबटाइटल और कैप्शन जोड़ता है।\n* 2. मानक WebVTT (.vtt) फाइलों का उपयोग करता है।\n* 3. kind प्रकार (subtitles/captions) तय करता है।\n* 4. srclang भाषा का कोड सेट करता है।\n* 5. सभी यूजर्स के लिए वीडियो को सुलभ बनाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Subtitles</title>\n</head>\n<body>\n\n  <h2>Subtitled Tutorial</h2>\n  <video controls width=\"640\">\n    <source src=\"tutorial.mp4\" type=\"video/mp4\">\n    <track src=\"captions_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n    <track src=\"captions_hi.vtt\" kind=\"subtitles\" srclang=\"hi\" label=\"Hindi\">\n  </video>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <track> वीडियो में सबटाइटल और कैप्शन जोड़ता है।\n* 2. मानक WebVTT (.vtt) फाइलों का उपयोग करता है।\n* 3. kind प्रकार (subtitles/captions) तय करता है।\n* 4. srclang भाषा का कोड सेट करता है।\n* 5. सभी यूजर्स के लिए वीडियो को सुलभ बनाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Subtitles</title>\n</head>\n<body>\n\n  <h2>Subtitled Tutorial</h2>\n  <video controls width=\"640\">\n    <source src=\"tutorial.mp4\" type=\"video/mp4\">\n    <track src=\"captions_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n    <track src=\"captions_hi.vtt\" kind=\"subtitles\" srclang=\"hi\" label=\"Hindi\">\n  </video>\n\n</body>\n</html>\n```",
      pro: "* 1. <track> वीडियो में सबटाइटल और कैप्शन जोड़ता है।\n* 2. मानक WebVTT (.vtt) फाइलों का उपयोग करता है।\n* 3. kind प्रकार (subtitles/captions) तय करता है।\n* 4. srclang भाषा का कोड सेट करता है।\n* 5. सभी यूजर्स के लिए वीडियो को सुलभ बनाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Video Subtitles</title>\n</head>\n<body>\n\n  <h2>Subtitled Tutorial</h2>\n  <video controls width=\"640\">\n    <source src=\"tutorial.mp4\" type=\"video/mp4\">\n    <track src=\"captions_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n    <track src=\"captions_hi.vtt\" kind=\"subtitles\" srclang=\"hi\" label=\"Hindi\">\n  </video>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 65,
    slug: "embedding-external-sites-iframe-sandbox",
    title: "External Site Embedding (<iframe> & sandbox)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 215-218)",
    exercise: {
      english: {
        question: "Which attribute applies security restrictions to untrusted content inside an <iframe>?",
        options: ["sandbox","security","protect","isolation"],
        correctAnswer: "sandbox",
        hint: "The sandbox attribute restricts scripts, popups, and parent navigation."
      },
      hinglish: {
        question: "Which attribute applies security restrictions to untrusted content inside an <iframe>?",
        options: ["sandbox","security","protect","isolation"],
        correctAnswer: "sandbox",
        hint: "The sandbox attribute restricts scripts, popups, and parent navigation."
      },
      hindi: {
        question: "Which attribute applies security restrictions to untrusted content inside an <iframe>?",
        options: ["sandbox","security","protect","isolation"],
        correctAnswer: "sandbox",
        hint: "The sandbox attribute restricts scripts, popups, and parent navigation."
      }
    },
    english: {
      kid: "* 1. <iframe> embeds another HTML page inside.\n* 2. src specifies embedded target website URL.\n* 3. sandbox restricts scripts, forms, and popups.\n* 4. title attribute provides screen reader accessibility.\n* 5. Common for YouTube videos and Google Maps.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Embeds</title>\n</head>\n<body>\n\n  <h2>Embedded Resource</h2>\n  <iframe \n    src=\"https://example.com\" \n    width=\"600\" \n    height=\"400\" \n    title=\"Example Documentation Window\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```",
      pro: "* 1. <iframe> embeds another HTML page inside.\n* 2. src specifies embedded target website URL.\n* 3. sandbox restricts scripts, forms, and popups.\n* 4. title attribute provides screen reader accessibility.\n* 5. Common for YouTube videos and Google Maps.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Embeds</title>\n</head>\n<body>\n\n  <h2>Embedded Resource</h2>\n  <iframe \n    src=\"https://example.com\" \n    width=\"600\" \n    height=\"400\" \n    title=\"Example Documentation Window\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <iframe> एक पेज के अंदर दूसरा पेज खोलता है।\n* 2. src टारगेट वेबसाइट का पता देता है।\n* 3. sandbox सुरक्षा प्रतिबंध लगाता है।\n* 4. title स्क्रीन रीडर के लिए विवरण देता है।\n* 5. यूट्यूब वीडियो और मैप्स लगाने के लिए उपयोग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Embeds</title>\n</head>\n<body>\n\n  <h2>Embedded Resource</h2>\n  <iframe \n    src=\"https://example.com\" \n    width=\"600\" \n    height=\"400\" \n    title=\"Example Documentation Window\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```",
      pro: "* 1. <iframe> एक पेज के अंदर दूसरा पेज खोलता है।\n* 2. src टारगेट वेबसाइट का पता देता है।\n* 3. sandbox सुरक्षा प्रतिबंध लगाता है।\n* 4. title स्क्रीन रीडर के लिए विवरण देता है।\n* 5. यूट्यूब वीडियो और मैप्स लगाने के लिए उपयोग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Embeds</title>\n</head>\n<body>\n\n  <h2>Embedded Resource</h2>\n  <iframe \n    src=\"https://example.com\" \n    width=\"600\" \n    height=\"400\" \n    title=\"Example Documentation Window\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <iframe> एक पेज के अंदर दूसरा पेज खोलता है।\n* 2. src टारगेट वेबसाइट का पता देता है।\n* 3. sandbox सुरक्षा प्रतिबंध लगाता है।\n* 4. title स्क्रीन रीडर के लिए विवरण देता है।\n* 5. यूट्यूब वीडियो और मैप्स लगाने के लिए उपयोग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Embeds</title>\n</head>\n<body>\n\n  <h2>Embedded Resource</h2>\n  <iframe \n    src=\"https://example.com\" \n    width=\"600\" \n    height=\"400\" \n    title=\"Example Documentation Window\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```",
      pro: "* 1. <iframe> एक पेज के अंदर दूसरा पेज खोलता है।\n* 2. src टारगेट वेबसाइट का पता देता है।\n* 3. sandbox सुरक्षा प्रतिबंध लगाता है।\n* 4. title स्क्रीन रीडर के लिए विवरण देता है।\n* 5. यूट्यूब वीडियो और मैप्स लगाने के लिए उपयोग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Embeds</title>\n</head>\n<body>\n\n  <h2>Embedded Resource</h2>\n  <iframe \n    src=\"https://example.com\" \n    width=\"600\" \n    height=\"400\" \n    title=\"Example Documentation Window\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 66,
    slug: "plugin-insertion-embed-object-elements",
    title: "Plugin Insertion (<embed> & <object>)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 219-221)",
    exercise: {
      english: {
        question: "Which attribute on <object> specifies the URL of the external document to embed?",
        options: ["data","src","href","file"],
        correctAnswer: "data",
        hint: "The <object> element uses the data attribute to locate resources."
      },
      hinglish: {
        question: "Which attribute on <object> specifies the URL of the external document to embed?",
        options: ["data","src","href","file"],
        correctAnswer: "data",
        hint: "The <object> element uses the data attribute to locate resources."
      },
      hindi: {
        question: "Which attribute on <object> specifies the URL of the external document to embed?",
        options: ["data","src","href","file"],
        correctAnswer: "data",
        hint: "The <object> element uses the data attribute to locate resources."
      }
    },
    english: {
      kid: "* 1. <object> embeds general external media resources.\n* 2. data attribute provides target resource URL.\n* 3. Can embed PDF documents and SVG drawings.\n* 4. Supports fallback content inside its tags.\n* 5. <embed> is a self-closing plugin element.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Object and Embed</title>\n</head>\n<body>\n\n  <h2>PDF Document Viewer</h2>\n  <object data=\"syllabus.pdf\" type=\"application/pdf\" width=\"600\" height=\"400\">\n    <p>Your browser cannot view PDFs. <a href=\"syllabus.pdf\">Download Syllabus PDF</a></p>\n  </object>\n\n</body>\n</html>\n```",
      pro: "* 1. <object> embeds general external media resources.\n* 2. data attribute provides target resource URL.\n* 3. Can embed PDF documents and SVG drawings.\n* 4. Supports fallback content inside its tags.\n* 5. <embed> is a self-closing plugin element.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Object and Embed</title>\n</head>\n<body>\n\n  <h2>PDF Document Viewer</h2>\n  <object data=\"syllabus.pdf\" type=\"application/pdf\" width=\"600\" height=\"400\">\n    <p>Your browser cannot view PDFs. <a href=\"syllabus.pdf\">Download Syllabus PDF</a></p>\n  </object>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <object> बाहरी मीडिया फाइलों को लोड करता है।\n* 2. data अट्रिब्यूट फाइल का पाथ देता है।\n* 3. PDF डॉक्यूमेंट्स और SVG ग्राफिक्स लोड कर सकता है।\n* 4. अंदर फॉलबैक कंटेंट की सुविधा देता है।\n* 5. <embed> एक सेल्फ-क्लोजिंग टैग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Object and Embed</title>\n</head>\n<body>\n\n  <h2>PDF Document Viewer</h2>\n  <object data=\"syllabus.pdf\" type=\"application/pdf\" width=\"600\" height=\"400\">\n    <p>Your browser cannot view PDFs. <a href=\"syllabus.pdf\">Download Syllabus PDF</a></p>\n  </object>\n\n</body>\n</html>\n```",
      pro: "* 1. <object> बाहरी मीडिया फाइलों को लोड करता है।\n* 2. data अट्रिब्यूट फाइल का पाथ देता है।\n* 3. PDF डॉक्यूमेंट्स और SVG ग्राफिक्स लोड कर सकता है।\n* 4. अंदर फॉलबैक कंटेंट की सुविधा देता है।\n* 5. <embed> एक सेल्फ-क्लोजिंग टैग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Object and Embed</title>\n</head>\n<body>\n\n  <h2>PDF Document Viewer</h2>\n  <object data=\"syllabus.pdf\" type=\"application/pdf\" width=\"600\" height=\"400\">\n    <p>Your browser cannot view PDFs. <a href=\"syllabus.pdf\">Download Syllabus PDF</a></p>\n  </object>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <object> बाहरी मीडिया फाइलों को लोड करता है।\n* 2. data अट्रिब्यूट फाइल का पाथ देता है।\n* 3. PDF डॉक्यूमेंट्स और SVG ग्राफिक्स लोड कर सकता है।\n* 4. अंदर फॉलबैक कंटेंट की सुविधा देता है।\n* 5. <embed> एक सेल्फ-क्लोजिंग टैग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Object and Embed</title>\n</head>\n<body>\n\n  <h2>PDF Document Viewer</h2>\n  <object data=\"syllabus.pdf\" type=\"application/pdf\" width=\"600\" height=\"400\">\n    <p>Your browser cannot view PDFs. <a href=\"syllabus.pdf\">Download Syllabus PDF</a></p>\n  </object>\n\n</body>\n</html>\n```",
      pro: "* 1. <object> बाहरी मीडिया फाइलों को लोड करता है।\n* 2. data अट्रिब्यूट फाइल का पाथ देता है।\n* 3. PDF डॉक्यूमेंट्स और SVG ग्राफिक्स लोड कर सकता है।\n* 4. अंदर फॉलबैक कंटेंट की सुविधा देता है।\n* 5. <embed> एक सेल्फ-क्लोजिंग टैग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Object and Embed</title>\n</head>\n<body>\n\n  <h2>PDF Document Viewer</h2>\n  <object data=\"syllabus.pdf\" type=\"application/pdf\" width=\"600\" height=\"400\">\n    <p>Your browser cannot view PDFs. <a href=\"syllabus.pdf\">Download Syllabus PDF</a></p>\n  </object>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 67,
    slug: "custom-data-attributes-data-prefix",
    title: "Custom Data Attributes (data-*)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "HTML5: The Missing Manual Chapter 13",
    exercise: {
      english: {
        question: "What must all custom HTML5 data attributes begin with?",
        options: ["data-","custom-","var-","meta-"],
        correctAnswer: "data-",
        hint: "Custom attributes must start with the prefix data- (e.g., data-user-id)."
      },
      hinglish: {
        question: "What must all custom HTML5 data attributes begin with?",
        options: ["data-","custom-","var-","meta-"],
        correctAnswer: "data-",
        hint: "Custom attributes must start with the prefix data- (e.g., data-user-id)."
      },
      hindi: {
        question: "What must all custom HTML5 data attributes begin with?",
        options: ["data-","custom-","var-","meta-"],
        correctAnswer: "data-",
        hint: "Custom attributes must start with the prefix data- (e.g., data-user-id)."
      }
    },
    english: {
      kid: "* 1. data-* stores custom private metadata on elements.\n* 2. Prefix must always start with data-.\n* 3. Does not affect visual display styling.\n* 4. Readable via JavaScript dataset API object.\n* 5. Keeps HTML completely valid and standardized.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Custom Data Attributes</title>\n</head>\n<body>\n\n  <h1>Course Catalog</h1>\n  <article \n    id=\"course101\" \n    data-category=\"frontend\" \n    data-lessons=\"101\" \n    data-difficulty=\"beginner\">\n    <h2>HTML5 Complete Guide</h2>\n    <p>Learn web markup from scratch.</p>\n  </article>\n\n</body>\n</html>\n```",
      pro: "* 1. data-* stores custom private metadata on elements.\n* 2. Prefix must always start with data-.\n* 3. Does not affect visual display styling.\n* 4. Readable via JavaScript dataset API object.\n* 5. Keeps HTML completely valid and standardized.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Custom Data Attributes</title>\n</head>\n<body>\n\n  <h1>Course Catalog</h1>\n  <article \n    id=\"course101\" \n    data-category=\"frontend\" \n    data-lessons=\"101\" \n    data-difficulty=\"beginner\">\n    <h2>HTML5 Complete Guide</h2>\n    <p>Learn web markup from scratch.</p>\n  </article>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. data-* तत्वों पर कस्टम डेटा स्टोर करता है।\n* 2. नाम हमेशा data- से शुरू होना चाहिए।\n* 3. पेज के विजुअल लुक पर कोई असर नहीं पड़ता।\n* 4. जावास्क्रिप्ट dataset से आसानी से पढ़ा जा सकता है।\n* 5. HTML को मानक और वैध बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Custom Data Attributes</title>\n</head>\n<body>\n\n  <h1>Course Catalog</h1>\n  <article \n    id=\"course101\" \n    data-category=\"frontend\" \n    data-lessons=\"101\" \n    data-difficulty=\"beginner\">\n    <h2>HTML5 Complete Guide</h2>\n    <p>Learn web markup from scratch.</p>\n  </article>\n\n</body>\n</html>\n```",
      pro: "* 1. data-* तत्वों पर कस्टम डेटा स्टोर करता है।\n* 2. नाम हमेशा data- से शुरू होना चाहिए।\n* 3. पेज के विजुअल लुक पर कोई असर नहीं पड़ता।\n* 4. जावास्क्रिप्ट dataset से आसानी से पढ़ा जा सकता है।\n* 5. HTML को मानक और वैध बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Custom Data Attributes</title>\n</head>\n<body>\n\n  <h1>Course Catalog</h1>\n  <article \n    id=\"course101\" \n    data-category=\"frontend\" \n    data-lessons=\"101\" \n    data-difficulty=\"beginner\">\n    <h2>HTML5 Complete Guide</h2>\n    <p>Learn web markup from scratch.</p>\n  </article>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. data-* तत्वों पर कस्टम डेटा स्टोर करता है।\n* 2. नाम हमेशा data- से शुरू होना चाहिए।\n* 3. पेज के विजुअल लुक पर कोई असर नहीं पड़ता।\n* 4. जावास्क्रिप्ट dataset से आसानी से पढ़ा जा सकता है।\n* 5. HTML को मानक और वैध बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Custom Data Attributes</title>\n</head>\n<body>\n\n  <h1>Course Catalog</h1>\n  <article \n    id=\"course101\" \n    data-category=\"frontend\" \n    data-lessons=\"101\" \n    data-difficulty=\"beginner\">\n    <h2>HTML5 Complete Guide</h2>\n    <p>Learn web markup from scratch.</p>\n  </article>\n\n</body>\n</html>\n```",
      pro: "* 1. data-* तत्वों पर कस्टम डेटा स्टोर करता है।\n* 2. नाम हमेशा data- से शुरू होना चाहिए।\n* 3. पेज के विजुअल लुक पर कोई असर नहीं पड़ता।\n* 4. जावास्क्रिप्ट dataset से आसानी से पढ़ा जा सकता है।\n* 5. HTML को मानक और वैध बनाए रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Custom Data Attributes</title>\n</head>\n<body>\n\n  <h1>Course Catalog</h1>\n  <article \n    id=\"course101\" \n    data-category=\"frontend\" \n    data-lessons=\"101\" \n    data-difficulty=\"beginner\">\n    <h2>HTML5 Complete Guide</h2>\n    <p>Learn web markup from scratch.</p>\n  </article>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 68,
    slug: "iframe-communication-security-headers",
    title: "Iframe Security & Permission Policies",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "The Definitive Guide to HTML5 Chapter 13",
    exercise: {
      english: {
        question: "Which attribute specifies device features (like camera or geolocation) an iframe may use?",
        options: ["allow","permissions","enable","access"],
        correctAnswer: "allow",
        hint: "The allow attribute defines the feature policy for an <iframe>."
      },
      hinglish: {
        question: "Which attribute specifies device features (like camera or geolocation) an iframe may use?",
        options: ["allow","permissions","enable","access"],
        correctAnswer: "allow",
        hint: "The allow attribute defines the feature policy for an <iframe>."
      },
      hindi: {
        question: "Which attribute specifies device features (like camera or geolocation) an iframe may use?",
        options: ["allow","permissions","enable","access"],
        correctAnswer: "allow",
        hint: "The allow attribute defines the feature policy for an <iframe>."
      }
    },
    english: {
      kid: "* 1. allow attribute specifies allowed hardware features.\n* 2. Controls access to cameras and microphones.\n* 3. sandbox prevents malicious script execution attacks.\n* 4. title attribute describes iframe for accessibility.\n* 5. Protects users from third-party cross-site attacks.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Security</title>\n</head>\n<body>\n\n  <h2>Secure Map Embed</h2>\n  <iframe \n    src=\"https://maps.google.com\" \n    width=\"600\" \n    height=\"350\" \n    title=\"Location Map\" \n    allow=\"geolocation\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```",
      pro: "* 1. allow attribute specifies allowed hardware features.\n* 2. Controls access to cameras and microphones.\n* 3. sandbox prevents malicious script execution attacks.\n* 4. title attribute describes iframe for accessibility.\n* 5. Protects users from third-party cross-site attacks.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Security</title>\n</head>\n<body>\n\n  <h2>Secure Map Embed</h2>\n  <iframe \n    src=\"https://maps.google.com\" \n    width=\"600\" \n    height=\"350\" \n    title=\"Location Map\" \n    allow=\"geolocation\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. allow अट्रिब्यूट हार्डवेयर एक्सेस अनुमतियां देता है।\n* 2. कैमरा और माइक्रोफोन एक्सेस को नियंत्रित करता है।\n* 3. sandbox खतरनाक स्क्रिप्ट्स चलने से रोकता है।\n* 4. title स्क्रीन रीडर्स के लिए विवरण देता है।\n* 5. उपयोगकर्ताओं को सुरक्षा हमलों से बचाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Security</title>\n</head>\n<body>\n\n  <h2>Secure Map Embed</h2>\n  <iframe \n    src=\"https://maps.google.com\" \n    width=\"600\" \n    height=\"350\" \n    title=\"Location Map\" \n    allow=\"geolocation\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```",
      pro: "* 1. allow अट्रिब्यूट हार्डवेयर एक्सेस अनुमतियां देता है।\n* 2. कैमरा और माइक्रोफोन एक्सेस को नियंत्रित करता है।\n* 3. sandbox खतरनाक स्क्रिप्ट्स चलने से रोकता है।\n* 4. title स्क्रीन रीडर्स के लिए विवरण देता है।\n* 5. उपयोगकर्ताओं को सुरक्षा हमलों से बचाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Security</title>\n</head>\n<body>\n\n  <h2>Secure Map Embed</h2>\n  <iframe \n    src=\"https://maps.google.com\" \n    width=\"600\" \n    height=\"350\" \n    title=\"Location Map\" \n    allow=\"geolocation\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. allow अट्रिब्यूट हार्डवेयर एक्सेस अनुमतियां देता है।\n* 2. कैमरा और माइक्रोफोन एक्सेस को नियंत्रित करता है।\n* 3. sandbox खतरनाक स्क्रिप्ट्स चलने से रोकता है।\n* 4. title स्क्रीन रीडर्स के लिए विवरण देता है।\n* 5. उपयोगकर्ताओं को सुरक्षा हमलों से बचाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Security</title>\n</head>\n<body>\n\n  <h2>Secure Map Embed</h2>\n  <iframe \n    src=\"https://maps.google.com\" \n    width=\"600\" \n    height=\"350\" \n    title=\"Location Map\" \n    allow=\"geolocation\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```",
      pro: "* 1. allow अट्रिब्यूट हार्डवेयर एक्सेस अनुमतियां देता है।\n* 2. कैमरा और माइक्रोफोन एक्सेस को नियंत्रित करता है।\n* 3. sandbox खतरनाक स्क्रिप्ट्स चलने से रोकता है।\n* 4. title स्क्रीन रीडर्स के लिए विवरण देता है।\n* 5. उपयोगकर्ताओं को सुरक्षा हमलों से बचाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Iframe Security</title>\n</head>\n<body>\n\n  <h2>Secure Map Embed</h2>\n  <iframe \n    src=\"https://maps.google.com\" \n    width=\"600\" \n    height=\"350\" \n    title=\"Location Map\" \n    allow=\"geolocation\" \n    sandbox=\"allow-scripts allow-same-origin\">\n  </iframe>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 69,
    slug: "html5-native-geolocation-api-details",
    title: "HTML5 Geolocation Semantic Structure",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "HTML5: The Missing Manual Chapter 10",
    exercise: {
      english: {
        question: "Can web pages access a user's location without their explicit permission?",
        options: ["No, user permission is strictly required","Yes, any page can read coordinates silently","Only if the page uses HTTPS","Only on desktop computers"],
        correctAnswer: "No, user permission is strictly required",
        hint: "User consent is strictly required by browsers before reading coordinates."
      },
      hinglish: {
        question: "Can web pages access a user's location without their explicit permission?",
        options: ["No, user permission is strictly required","Yes, any page can read coordinates silently","Only if the page uses HTTPS","Only on desktop computers"],
        correctAnswer: "No, user permission is strictly required",
        hint: "User consent is strictly required by browsers before reading coordinates."
      },
      hindi: {
        question: "Can web pages access a user's location without their explicit permission?",
        options: ["No, user permission is strictly required","Yes, any page can read coordinates silently","Only if the page uses HTTPS","Only on desktop computers"],
        correctAnswer: "No, user permission is strictly required",
        hint: "User consent is strictly required by browsers before reading coordinates."
      }
    },
    english: {
      kid: "* 1. Semantic containers hold localized user content.\n* 2. Browsers request explicit user permission first.\n* 3. Coordinates include latitude and longitude values.\n* 4. Keeps user privacy secure by default.\n* 5. Organized inside semantic <section> layout tags.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Local Services</title>\n</head>\n<body>\n\n  <section id=\"location-panel\">\n    <h2>Nearby Study Hubs</h2>\n    <p>Explore coding groups and bootcamps near your city.</p>\n  </section>\n\n</body>\n</html>\n```",
      pro: "* 1. Semantic containers hold localized user content.\n* 2. Browsers request explicit user permission first.\n* 3. Coordinates include latitude and longitude values.\n* 4. Keeps user privacy secure by default.\n* 5. Organized inside semantic <section> layout tags.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Local Services</title>\n</head>\n<body>\n\n  <section id=\"location-panel\">\n    <h2>Nearby Study Hubs</h2>\n    <p>Explore coding groups and bootcamps near your city.</p>\n  </section>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. सिमेंटिक कंटेनर में लोकेशन सामग्री रखी जाती है।\n* 2. ब्राउज़र पहले यूजर से अनुमति मांगता है।\n* 3. निर्देशांक में अक्षांश और देशांतर होते हैं।\n* 4. यूजर की प्राइवेसी को सुरक्षित रखता है।\n* 5. सिमेंटिक <section> टैग में व्यवस्थित रहता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Local Services</title>\n</head>\n<body>\n\n  <section id=\"location-panel\">\n    <h2>Nearby Study Hubs</h2>\n    <p>Explore coding groups and bootcamps near your city.</p>\n  </section>\n\n</body>\n</html>\n```",
      pro: "* 1. सिमेंटिक कंटेनर में लोकेशन सामग्री रखी जाती है।\n* 2. ब्राउज़र पहले यूजर से अनुमति मांगता है।\n* 3. निर्देशांक में अक्षांश और देशांतर होते हैं।\n* 4. यूजर की प्राइवेसी को सुरक्षित रखता है।\n* 5. सिमेंटिक <section> टैग में व्यवस्थित रहता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Local Services</title>\n</head>\n<body>\n\n  <section id=\"location-panel\">\n    <h2>Nearby Study Hubs</h2>\n    <p>Explore coding groups and bootcamps near your city.</p>\n  </section>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. सिमेंटिक कंटेनर में लोकेशन सामग्री रखी जाती है।\n* 2. ब्राउज़र पहले यूजर से अनुमति मांगता है।\n* 3. निर्देशांक में अक्षांश और देशांतर होते हैं।\n* 4. यूजर की प्राइवेसी को सुरक्षित रखता है।\n* 5. सिमेंटिक <section> टैग में व्यवस्थित रहता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Local Services</title>\n</head>\n<body>\n\n  <section id=\"location-panel\">\n    <h2>Nearby Study Hubs</h2>\n    <p>Explore coding groups and bootcamps near your city.</p>\n  </section>\n\n</body>\n</html>\n```",
      pro: "* 1. सिमेंटिक कंटेनर में लोकेशन सामग्री रखी जाती है।\n* 2. ब्राउज़र पहले यूजर से अनुमति मांगता है।\n* 3. निर्देशांक में अक्षांश और देशांतर होते हैं।\n* 4. यूजर की प्राइवेसी को सुरक्षित रखता है।\n* 5. सिमेंटिक <section> टैग में व्यवस्थित रहता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Local Services</title>\n</head>\n<body>\n\n  <section id=\"location-panel\">\n    <h2>Nearby Study Hubs</h2>\n    <p>Explore coding groups and bootcamps near your city.</p>\n  </section>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 70,
    slug: "capstone-interactive-video-player",
    title: "Capstone Project: Media Showcase Layout",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Nextsem Academy Project Suite",
    exercise: {
      english: {
        question: "Which collection of semantic tags creates a complete, captioned media showcase?",
        options: ["<figure>, <video>, <track>, and <figcaption>","<div>, <span>, and <b> only","<canvas> and <script> only","<pre> and <code> only"],
        correctAnswer: "<figure>, <video>, <track>, and <figcaption>",
        hint: "These elements provide complete semantic structure and accessible media captions."
      },
      hinglish: {
        question: "Which collection of semantic tags creates a complete, captioned media showcase?",
        options: ["<figure>, <video>, <track>, and <figcaption>","<div>, <span>, and <b> only","<canvas> and <script> only","<pre> and <code> only"],
        correctAnswer: "<figure>, <video>, <track>, and <figcaption>",
        hint: "These elements provide complete semantic structure and accessible media captions."
      },
      hindi: {
        question: "Which collection of semantic tags creates a complete, captioned media showcase?",
        options: ["<figure>, <video>, <track>, and <figcaption>","<div>, <span>, and <b> only","<canvas> and <script> only","<pre> and <code> only"],
        correctAnswer: "<figure>, <video>, <track>, and <figcaption>",
        hint: "These elements provide complete semantic structure and accessible media captions."
      }
    },
    english: {
      kid: "* 1. Combines semantic <figure>, <video>, and <audio> tags.\n* 2. Includes subtitles with native <track> elements.\n* 3. Uses poster thumbnails and explicit dimensions.\n* 4. Built with 100% pure standard HTML5.\n* 5. Provides universal media playback across devices.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Media Showcase</title>\n</head>\n<body>\n\n  <header>\n    <h1>Nextsem Masterclass Series</h1>\n  </header>\n\n  <main>\n    <figure>\n      <video controls width=\"640\" height=\"360\" poster=\"cover.jpg\">\n        <source src=\"masterclass.mp4\" type=\"video/mp4\">\n        <track src=\"subs_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n      </video>\n      <figcaption>Full Stack Web Development Overview</figcaption>\n    </figure>\n\n    <figure>\n      <audio controls>\n        <source src=\"interview.mp3\" type=\"audio/mpeg\">\n      </audio>\n      <figcaption>Senior Developer Career Podcast</figcaption>\n    </figure>\n  </main>\n\n</body>\n</html>\n```",
      pro: "* 1. Combines semantic <figure>, <video>, and <audio> tags.\n* 2. Includes subtitles with native <track> elements.\n* 3. Uses poster thumbnails and explicit dimensions.\n* 4. Built with 100% pure standard HTML5.\n* 5. Provides universal media playback across devices.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Media Showcase</title>\n</head>\n<body>\n\n  <header>\n    <h1>Nextsem Masterclass Series</h1>\n  </header>\n\n  <main>\n    <figure>\n      <video controls width=\"640\" height=\"360\" poster=\"cover.jpg\">\n        <source src=\"masterclass.mp4\" type=\"video/mp4\">\n        <track src=\"subs_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n      </video>\n      <figcaption>Full Stack Web Development Overview</figcaption>\n    </figure>\n\n    <figure>\n      <audio controls>\n        <source src=\"interview.mp3\" type=\"audio/mpeg\">\n      </audio>\n      <figcaption>Senior Developer Career Podcast</figcaption>\n    </figure>\n  </main>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <figure>, <video>, और <audio> का संयुक्त उपयोग।\n* 2. <track> टैग से सबटाइटल जोड़े गए हैं।\n* 3. पोस्टर थंबनेल और सही आकार निर्धारित है।\n* 4. 100% शुद्ध मानक HTML5 से निर्मित।\n* 5. सभी डिवाइसेज पर मीडिया प्लेबैक सुनिश्चित करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Media Showcase</title>\n</head>\n<body>\n\n  <header>\n    <h1>Nextsem Masterclass Series</h1>\n  </header>\n\n  <main>\n    <figure>\n      <video controls width=\"640\" height=\"360\" poster=\"cover.jpg\">\n        <source src=\"masterclass.mp4\" type=\"video/mp4\">\n        <track src=\"subs_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n      </video>\n      <figcaption>Full Stack Web Development Overview</figcaption>\n    </figure>\n\n    <figure>\n      <audio controls>\n        <source src=\"interview.mp3\" type=\"audio/mpeg\">\n      </audio>\n      <figcaption>Senior Developer Career Podcast</figcaption>\n    </figure>\n  </main>\n\n</body>\n</html>\n```",
      pro: "* 1. <figure>, <video>, और <audio> का संयुक्त उपयोग।\n* 2. <track> टैग से सबटाइटल जोड़े गए हैं।\n* 3. पोस्टर थंबनेल और सही आकार निर्धारित है।\n* 4. 100% शुद्ध मानक HTML5 से निर्मित।\n* 5. सभी डिवाइसेज पर मीडिया प्लेबैक सुनिश्चित करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Media Showcase</title>\n</head>\n<body>\n\n  <header>\n    <h1>Nextsem Masterclass Series</h1>\n  </header>\n\n  <main>\n    <figure>\n      <video controls width=\"640\" height=\"360\" poster=\"cover.jpg\">\n        <source src=\"masterclass.mp4\" type=\"video/mp4\">\n        <track src=\"subs_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n      </video>\n      <figcaption>Full Stack Web Development Overview</figcaption>\n    </figure>\n\n    <figure>\n      <audio controls>\n        <source src=\"interview.mp3\" type=\"audio/mpeg\">\n      </audio>\n      <figcaption>Senior Developer Career Podcast</figcaption>\n    </figure>\n  </main>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <figure>, <video>, और <audio> का संयुक्त उपयोग।\n* 2. <track> टैग से सबटाइटल जोड़े गए हैं।\n* 3. पोस्टर थंबनेल और सही आकार निर्धारित है।\n* 4. 100% शुद्ध मानक HTML5 से निर्मित।\n* 5. सभी डिवाइसेज पर मीडिया प्लेबैक सुनिश्चित करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Media Showcase</title>\n</head>\n<body>\n\n  <header>\n    <h1>Nextsem Masterclass Series</h1>\n  </header>\n\n  <main>\n    <figure>\n      <video controls width=\"640\" height=\"360\" poster=\"cover.jpg\">\n        <source src=\"masterclass.mp4\" type=\"video/mp4\">\n        <track src=\"subs_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n      </video>\n      <figcaption>Full Stack Web Development Overview</figcaption>\n    </figure>\n\n    <figure>\n      <audio controls>\n        <source src=\"interview.mp3\" type=\"audio/mpeg\">\n      </audio>\n      <figcaption>Senior Developer Career Podcast</figcaption>\n    </figure>\n  </main>\n\n</body>\n</html>\n```",
      pro: "* 1. <figure>, <video>, और <audio> का संयुक्त उपयोग।\n* 2. <track> टैग से सबटाइटल जोड़े गए हैं।\n* 3. पोस्टर थंबनेल और सही आकार निर्धारित है।\n* 4. 100% शुद्ध मानक HTML5 से निर्मित।\n* 5. सभी डिवाइसेज पर मीडिया प्लेबैक सुनिश्चित करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Media Showcase</title>\n</head>\n<body>\n\n  <header>\n    <h1>Nextsem Masterclass Series</h1>\n  </header>\n\n  <main>\n    <figure>\n      <video controls width=\"640\" height=\"360\" poster=\"cover.jpg\">\n        <source src=\"masterclass.mp4\" type=\"video/mp4\">\n        <track src=\"subs_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n      </video>\n      <figcaption>Full Stack Web Development Overview</figcaption>\n    </figure>\n\n    <figure>\n      <audio controls>\n        <source src=\"interview.mp3\" type=\"audio/mpeg\">\n      </audio>\n      <figcaption>Senior Developer Career Podcast</figcaption>\n    </figure>\n  </main>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 71,
    slug: "unordered-lists-ul-li-bullet-points",
    title: "Unordered Lists (<ul> and <li>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 3 (p. 52-54)",
    exercise: {
      english: {
        question: "Which tag defines each individual item inside an unordered or ordered list?",
        options: ["<li>","<item>","<list>","<ul>"],
        correctAnswer: "<li>",
        hint: "<li> stands for List Item."
      },
      hinglish: {
        question: "Which tag defines each individual item inside an unordered or ordered list?",
        options: ["<li>","<item>","<list>","<ul>"],
        correctAnswer: "<li>",
        hint: "<li> stands for List Item."
      },
      hindi: {
        question: "Which tag defines each individual item inside an unordered or ordered list?",
        options: ["<li>","<item>","<list>","<ul>"],
        correctAnswer: "<li>",
        hint: "<li> stands for List Item."
      }
    },
    english: {
      kid: "* 1. <ul> creates bulleted unordered item lists.\n* 2. <li> defines individual list items inside.\n* 3. Browsers render solid disc bullet points.\n* 4. Order of list items does not matter.\n* 5. Foundation for website navigation menu bars.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Unordered Lists</title>\n</head>\n<body>\n\n  <h2>Web Development Skills</h2>\n  <ul>\n    <li>HTML5 Structure</li>\n    <li>CSS3 Styling</li>\n    <li>JavaScript Interactivity</li>\n    <li>Git Version Control</li>\n  </ul>\n\n</body>\n</html>\n```",
      pro: "* 1. <ul> creates bulleted unordered item lists.\n* 2. <li> defines individual list items inside.\n* 3. Browsers render solid disc bullet points.\n* 4. Order of list items does not matter.\n* 5. Foundation for website navigation menu bars.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Unordered Lists</title>\n</head>\n<body>\n\n  <h2>Web Development Skills</h2>\n  <ul>\n    <li>HTML5 Structure</li>\n    <li>CSS3 Styling</li>\n    <li>JavaScript Interactivity</li>\n    <li>Git Version Control</li>\n  </ul>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <ul> बुलेट वाली बिना क्रम की लिस्ट बनाता है।\n* 2. <li> अंदर के हर आइटम को परिभाषित करता है।\n* 3. ब्राउज़र गोल बुलेट पॉइंट प्रदर्शित करते हैं।\n* 4. लिस्ट के क्रम से कोई फर्क नहीं पड़ता।\n* 5. वेबसाइट नेविगेशन मेन्यू की नींव होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Unordered Lists</title>\n</head>\n<body>\n\n  <h2>Web Development Skills</h2>\n  <ul>\n    <li>HTML5 Structure</li>\n    <li>CSS3 Styling</li>\n    <li>JavaScript Interactivity</li>\n    <li>Git Version Control</li>\n  </ul>\n\n</body>\n</html>\n```",
      pro: "* 1. <ul> बुलेट वाली बिना क्रम की लिस्ट बनाता है।\n* 2. <li> अंदर के हर आइटम को परिभाषित करता है।\n* 3. ब्राउज़र गोल बुलेट पॉइंट प्रदर्शित करते हैं।\n* 4. लिस्ट के क्रम से कोई फर्क नहीं पड़ता।\n* 5. वेबसाइट नेविगेशन मेन्यू की नींव होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Unordered Lists</title>\n</head>\n<body>\n\n  <h2>Web Development Skills</h2>\n  <ul>\n    <li>HTML5 Structure</li>\n    <li>CSS3 Styling</li>\n    <li>JavaScript Interactivity</li>\n    <li>Git Version Control</li>\n  </ul>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <ul> बुलेट वाली बिना क्रम की लिस्ट बनाता है।\n* 2. <li> अंदर के हर आइटम को परिभाषित करता है।\n* 3. ब्राउज़र गोल बुलेट पॉइंट प्रदर्शित करते हैं।\n* 4. लिस्ट के क्रम से कोई फर्क नहीं पड़ता।\n* 5. वेबसाइट नेविगेशन मेन्यू की नींव होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Unordered Lists</title>\n</head>\n<body>\n\n  <h2>Web Development Skills</h2>\n  <ul>\n    <li>HTML5 Structure</li>\n    <li>CSS3 Styling</li>\n    <li>JavaScript Interactivity</li>\n    <li>Git Version Control</li>\n  </ul>\n\n</body>\n</html>\n```",
      pro: "* 1. <ul> बुलेट वाली बिना क्रम की लिस्ट बनाता है।\n* 2. <li> अंदर के हर आइटम को परिभाषित करता है।\n* 3. ब्राउज़र गोल बुलेट पॉइंट प्रदर्शित करते हैं।\n* 4. लिस्ट के क्रम से कोई फर्क नहीं पड़ता।\n* 5. वेबसाइट नेविगेशन मेन्यू की नींव होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Unordered Lists</title>\n</head>\n<body>\n\n  <h2>Web Development Skills</h2>\n  <ul>\n    <li>HTML5 Structure</li>\n    <li>CSS3 Styling</li>\n    <li>JavaScript Interactivity</li>\n    <li>Git Version Control</li>\n  </ul>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 72,
    slug: "ordered-lists-ol-li-numbered-steps",
    title: "Ordered Lists (<ol> and <li>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 3 (p. 55-57)",
    exercise: {
      english: {
        question: "Which tag automatically creates sequentially numbered list items?",
        options: ["<ol>","<ul>","<nl>","<dl>"],
        correctAnswer: "<ol>",
        hint: "<ol> stands for Ordered List."
      },
      hinglish: {
        question: "Which tag automatically creates sequentially numbered list items?",
        options: ["<ol>","<ul>","<nl>","<dl>"],
        correctAnswer: "<ol>",
        hint: "<ol> stands for Ordered List."
      },
      hindi: {
        question: "Which tag automatically creates sequentially numbered list items?",
        options: ["<ol>","<ul>","<nl>","<dl>"],
        correctAnswer: "<ol>",
        hint: "<ol> stands for Ordered List."
      }
    },
    english: {
      kid: "* 1. <ol> creates numbered sequential lists.\n* 2. Browsers number items 1, 2, 3 automatically.\n* 3. <li> defines each numbered step inside.\n* 4. Ideal for recipes and installation guides.\n* 5. Re-ordering automatically updates numbers dynamically.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Ordered Lists</title>\n</head>\n<body>\n\n  <h2>How to Setup VS Code on Windows 11</h2>\n  <ol>\n    <li>Download the Windows 11 User Installer.</li>\n    <li>Run the setup wizard executable.</li>\n    <li>Enable 'Add Open with Code' checkboxes.</li>\n    <li>Launch VS Code and create index.html.</li>\n  </ol>\n\n</body>\n</html>\n```",
      pro: "* 1. <ol> creates numbered sequential lists.\n* 2. Browsers number items 1, 2, 3 automatically.\n* 3. <li> defines each numbered step inside.\n* 4. Ideal for recipes and installation guides.\n* 5. Re-ordering automatically updates numbers dynamically.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Ordered Lists</title>\n</head>\n<body>\n\n  <h2>How to Setup VS Code on Windows 11</h2>\n  <ol>\n    <li>Download the Windows 11 User Installer.</li>\n    <li>Run the setup wizard executable.</li>\n    <li>Enable 'Add Open with Code' checkboxes.</li>\n    <li>Launch VS Code and create index.html.</li>\n  </ol>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <ol> नंबर वाली क्रमानुसार लिस्ट बनाता है।\n* 2. ब्राउज़र 1, 2, 3 नंबर खुद लगाता है।\n* 3. <li> हर क्रमबद्ध चरण को परिभाषित करता है।\n* 4. स्टेप-बाय-स्टेप गाइड के लिए उत्तम है।\n* 5. क्रम बदलने पर नंबर अपने आप अपडेट होते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Ordered Lists</title>\n</head>\n<body>\n\n  <h2>How to Setup VS Code on Windows 11</h2>\n  <ol>\n    <li>Download the Windows 11 User Installer.</li>\n    <li>Run the setup wizard executable.</li>\n    <li>Enable 'Add Open with Code' checkboxes.</li>\n    <li>Launch VS Code and create index.html.</li>\n  </ol>\n\n</body>\n</html>\n```",
      pro: "* 1. <ol> नंबर वाली क्रमानुसार लिस्ट बनाता है।\n* 2. ब्राउज़र 1, 2, 3 नंबर खुद लगाता है।\n* 3. <li> हर क्रमबद्ध चरण को परिभाषित करता है।\n* 4. स्टेप-बाय-स्टेप गाइड के लिए उत्तम है।\n* 5. क्रम बदलने पर नंबर अपने आप अपडेट होते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Ordered Lists</title>\n</head>\n<body>\n\n  <h2>How to Setup VS Code on Windows 11</h2>\n  <ol>\n    <li>Download the Windows 11 User Installer.</li>\n    <li>Run the setup wizard executable.</li>\n    <li>Enable 'Add Open with Code' checkboxes.</li>\n    <li>Launch VS Code and create index.html.</li>\n  </ol>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <ol> नंबर वाली क्रमानुसार लिस्ट बनाता है।\n* 2. ब्राउज़र 1, 2, 3 नंबर खुद लगाता है।\n* 3. <li> हर क्रमबद्ध चरण को परिभाषित करता है।\n* 4. स्टेप-बाय-स्टेप गाइड के लिए उत्तम है।\n* 5. क्रम बदलने पर नंबर अपने आप अपडेट होते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Ordered Lists</title>\n</head>\n<body>\n\n  <h2>How to Setup VS Code on Windows 11</h2>\n  <ol>\n    <li>Download the Windows 11 User Installer.</li>\n    <li>Run the setup wizard executable.</li>\n    <li>Enable 'Add Open with Code' checkboxes.</li>\n    <li>Launch VS Code and create index.html.</li>\n  </ol>\n\n</body>\n</html>\n```",
      pro: "* 1. <ol> नंबर वाली क्रमानुसार लिस्ट बनाता है।\n* 2. ब्राउज़र 1, 2, 3 नंबर खुद लगाता है।\n* 3. <li> हर क्रमबद्ध चरण को परिभाषित करता है।\n* 4. स्टेप-बाय-स्टेप गाइड के लिए उत्तम है।\n* 5. क्रम बदलने पर नंबर अपने आप अपडेट होते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Ordered Lists</title>\n</head>\n<body>\n\n  <h2>How to Setup VS Code on Windows 11</h2>\n  <ol>\n    <li>Download the Windows 11 User Installer.</li>\n    <li>Run the setup wizard executable.</li>\n    <li>Enable 'Add Open with Code' checkboxes.</li>\n    <li>Launch VS Code and create index.html.</li>\n  </ol>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 73,
    slug: "ordered-list-start-reversed-indexing",
    title: "Ordered Lists Start & Reversed Attributes",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 3 (p. 58-59)",
    exercise: {
      english: {
        question: "Which attribute makes an ordered list count backwards in descending order?",
        options: ["reversed","descending","countdown","backwards"],
        correctAnswer: "reversed",
        hint: "Add the boolean attribute reversed to <ol>."
      },
      hinglish: {
        question: "Which attribute makes an ordered list count backwards in descending order?",
        options: ["reversed","descending","countdown","backwards"],
        correctAnswer: "reversed",
        hint: "Add the boolean attribute reversed to <ol>."
      },
      hindi: {
        question: "Which attribute makes an ordered list count backwards in descending order?",
        options: ["reversed","descending","countdown","backwards"],
        correctAnswer: "reversed",
        hint: "Add the boolean attribute reversed to <ol>."
      }
    },
    english: {
      kid: "* 1. start attribute changes initial numbering start.\n* 2. reversed attribute counts numbers in reverse.\n* 3. type attribute sets letters or Roman numerals.\n* 4. start=\"5\" begins numbering from five.\n* 5. Great for top-10 countdown rankings.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>List Attributes</title>\n</head>\n<body>\n\n  <h2>Rocket Launch Countdown</h2>\n  <ol reversed>\n    <li>Engine Ignition</li>\n    <li>Final Checklist Confirmation</li>\n    <li>Ready for Liftoff</li>\n  </ol>\n\n  <h2>Continuation Steps</h2>\n  <ol start=\"5\">\n    <li>Deploy to Staging Server</li>\n    <li>Perform End-to-End Tests</li>\n  </ol>\n\n</body>\n</html>\n```",
      pro: "* 1. start attribute changes initial numbering start.\n* 2. reversed attribute counts numbers in reverse.\n* 3. type attribute sets letters or Roman numerals.\n* 4. start=\"5\" begins numbering from five.\n* 5. Great for top-10 countdown rankings.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>List Attributes</title>\n</head>\n<body>\n\n  <h2>Rocket Launch Countdown</h2>\n  <ol reversed>\n    <li>Engine Ignition</li>\n    <li>Final Checklist Confirmation</li>\n    <li>Ready for Liftoff</li>\n  </ol>\n\n  <h2>Continuation Steps</h2>\n  <ol start=\"5\">\n    <li>Deploy to Staging Server</li>\n    <li>Perform End-to-End Tests</li>\n  </ol>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. start अट्रिब्यूट शुरुआती नंबर बदलता है।\n* 2. reversed अट्रिब्यूट उल्टी गिनती (3, 2, 1) करता है।\n* 3. type अट्रिब्यूट रोमन या अक्षर सेट करता है।\n* 4. start=\"5\" पांच से गिनती शुरू करता है।\n* 5. टॉप-10 काउंटडाउन रैंकिंग के लिए उत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>List Attributes</title>\n</head>\n<body>\n\n  <h2>Rocket Launch Countdown</h2>\n  <ol reversed>\n    <li>Engine Ignition</li>\n    <li>Final Checklist Confirmation</li>\n    <li>Ready for Liftoff</li>\n  </ol>\n\n  <h2>Continuation Steps</h2>\n  <ol start=\"5\">\n    <li>Deploy to Staging Server</li>\n    <li>Perform End-to-End Tests</li>\n  </ol>\n\n</body>\n</html>\n```",
      pro: "* 1. start अट्रिब्यूट शुरुआती नंबर बदलता है।\n* 2. reversed अट्रिब्यूट उल्टी गिनती (3, 2, 1) करता है।\n* 3. type अट्रिब्यूट रोमन या अक्षर सेट करता है।\n* 4. start=\"5\" पांच से गिनती शुरू करता है।\n* 5. टॉप-10 काउंटडाउन रैंकिंग के लिए उत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>List Attributes</title>\n</head>\n<body>\n\n  <h2>Rocket Launch Countdown</h2>\n  <ol reversed>\n    <li>Engine Ignition</li>\n    <li>Final Checklist Confirmation</li>\n    <li>Ready for Liftoff</li>\n  </ol>\n\n  <h2>Continuation Steps</h2>\n  <ol start=\"5\">\n    <li>Deploy to Staging Server</li>\n    <li>Perform End-to-End Tests</li>\n  </ol>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. start अट्रिब्यूट शुरुआती नंबर बदलता है।\n* 2. reversed अट्रिब्यूट उल्टी गिनती (3, 2, 1) करता है।\n* 3. type अट्रिब्यूट रोमन या अक्षर सेट करता है।\n* 4. start=\"5\" पांच से गिनती शुरू करता है।\n* 5. टॉप-10 काउंटडाउन रैंकिंग के लिए उत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>List Attributes</title>\n</head>\n<body>\n\n  <h2>Rocket Launch Countdown</h2>\n  <ol reversed>\n    <li>Engine Ignition</li>\n    <li>Final Checklist Confirmation</li>\n    <li>Ready for Liftoff</li>\n  </ol>\n\n  <h2>Continuation Steps</h2>\n  <ol start=\"5\">\n    <li>Deploy to Staging Server</li>\n    <li>Perform End-to-End Tests</li>\n  </ol>\n\n</body>\n</html>\n```",
      pro: "* 1. start अट्रिब्यूट शुरुआती नंबर बदलता है।\n* 2. reversed अट्रिब्यूट उल्टी गिनती (3, 2, 1) करता है।\n* 3. type अट्रिब्यूट रोमन या अक्षर सेट करता है।\n* 4. start=\"5\" पांच से गिनती शुरू करता है।\n* 5. टॉप-10 काउंटडाउन रैंकिंग के लिए उत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>List Attributes</title>\n</head>\n<body>\n\n  <h2>Rocket Launch Countdown</h2>\n  <ol reversed>\n    <li>Engine Ignition</li>\n    <li>Final Checklist Confirmation</li>\n    <li>Ready for Liftoff</li>\n  </ol>\n\n  <h2>Continuation Steps</h2>\n  <ol start=\"5\">\n    <li>Deploy to Staging Server</li>\n    <li>Perform End-to-End Tests</li>\n  </ol>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 74,
    slug: "description-lists-dl-dt-dd-glossary",
    title: "Definition Lists (<dl>, <dt>, and <dd>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 3 (p. 60-63)",
    exercise: {
      english: {
        question: "Inside a <dl> description list, which tag specifies the term name?",
        options: ["<dt>","<dd>","<dfn>","<term>"],
        correctAnswer: "<dt>",
        hint: "<dt> stands for Description Term."
      },
      hinglish: {
        question: "Inside a <dl> description list, which tag specifies the term name?",
        options: ["<dt>","<dd>","<dfn>","<term>"],
        correctAnswer: "<dt>",
        hint: "<dt> stands for Description Term."
      },
      hindi: {
        question: "Inside a <dl> description list, which tag specifies the term name?",
        options: ["<dt>","<dd>","<dfn>","<term>"],
        correctAnswer: "<dt>",
        hint: "<dt> stands for Description Term."
      }
    },
    english: {
      kid: "* 1. <dl> creates description list glossary structures.\n* 2. <dt> specifies term or name definition.\n* 3. <dd> provides definition description value.\n* 4. Browsers indent <dd> automatically.\n* 5. Ideal for glossaries, FAQs, and dictionaries.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Description List</title>\n</head>\n<body>\n\n  <h2>Web Terms Glossary</h2>\n  <dl>\n    <dt>HTML</dt>\n    <dd>HyperText Markup Language used for web structure.</dd>\n\n    <dt>CSS</dt>\n    <dd>Cascading Style Sheets used for visual layout.</dd>\n\n    <dt>DOM</dt>\n    <dd>Document Object Model representing parsed web elements.</dd>\n  </dl>\n\n</body>\n</html>\n```",
      pro: "* 1. <dl> creates description list glossary structures.\n* 2. <dt> specifies term or name definition.\n* 3. <dd> provides definition description value.\n* 4. Browsers indent <dd> automatically.\n* 5. Ideal for glossaries, FAQs, and dictionaries.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Description List</title>\n</head>\n<body>\n\n  <h2>Web Terms Glossary</h2>\n  <dl>\n    <dt>HTML</dt>\n    <dd>HyperText Markup Language used for web structure.</dd>\n\n    <dt>CSS</dt>\n    <dd>Cascading Style Sheets used for visual layout.</dd>\n\n    <dt>DOM</dt>\n    <dd>Document Object Model representing parsed web elements.</dd>\n  </dl>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <dl> शब्दावली (Glossary) लिस्ट बनाता है।\n* 2. <dt> शब्द या शीर्षक को परिभाषित करता है।\n* 3. <dd> उस शब्द की परिभाषा या विवरण देता है।\n* 4. ब्राउज़र <dd> को थोड़ा आगे खिसकाता है।\n* 5. डिक्शनरी और FAQ पेज के लिए उपयुक्त है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Description List</title>\n</head>\n<body>\n\n  <h2>Web Terms Glossary</h2>\n  <dl>\n    <dt>HTML</dt>\n    <dd>HyperText Markup Language used for web structure.</dd>\n\n    <dt>CSS</dt>\n    <dd>Cascading Style Sheets used for visual layout.</dd>\n\n    <dt>DOM</dt>\n    <dd>Document Object Model representing parsed web elements.</dd>\n  </dl>\n\n</body>\n</html>\n```",
      pro: "* 1. <dl> शब्दावली (Glossary) लिस्ट बनाता है।\n* 2. <dt> शब्द या शीर्षक को परिभाषित करता है।\n* 3. <dd> उस शब्द की परिभाषा या विवरण देता है।\n* 4. ब्राउज़र <dd> को थोड़ा आगे खिसकाता है।\n* 5. डिक्शनरी और FAQ पेज के लिए उपयुक्त है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Description List</title>\n</head>\n<body>\n\n  <h2>Web Terms Glossary</h2>\n  <dl>\n    <dt>HTML</dt>\n    <dd>HyperText Markup Language used for web structure.</dd>\n\n    <dt>CSS</dt>\n    <dd>Cascading Style Sheets used for visual layout.</dd>\n\n    <dt>DOM</dt>\n    <dd>Document Object Model representing parsed web elements.</dd>\n  </dl>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <dl> शब्दावली (Glossary) लिस्ट बनाता है।\n* 2. <dt> शब्द या शीर्षक को परिभाषित करता है।\n* 3. <dd> उस शब्द की परिभाषा या विवरण देता है।\n* 4. ब्राउज़र <dd> को थोड़ा आगे खिसकाता है।\n* 5. डिक्शनरी और FAQ पेज के लिए उपयुक्त है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Description List</title>\n</head>\n<body>\n\n  <h2>Web Terms Glossary</h2>\n  <dl>\n    <dt>HTML</dt>\n    <dd>HyperText Markup Language used for web structure.</dd>\n\n    <dt>CSS</dt>\n    <dd>Cascading Style Sheets used for visual layout.</dd>\n\n    <dt>DOM</dt>\n    <dd>Document Object Model representing parsed web elements.</dd>\n  </dl>\n\n</body>\n</html>\n```",
      pro: "* 1. <dl> शब्दावली (Glossary) लिस्ट बनाता है।\n* 2. <dt> शब्द या शीर्षक को परिभाषित करता है।\n* 3. <dd> उस शब्द की परिभाषा या विवरण देता है।\n* 4. ब्राउज़र <dd> को थोड़ा आगे खिसकाता है।\n* 5. डिक्शनरी और FAQ पेज के लिए उपयुक्त है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Description List</title>\n</head>\n<body>\n\n  <h2>Web Terms Glossary</h2>\n  <dl>\n    <dt>HTML</dt>\n    <dd>HyperText Markup Language used for web structure.</dd>\n\n    <dt>CSS</dt>\n    <dd>Cascading Style Sheets used for visual layout.</dd>\n\n    <dt>DOM</dt>\n    <dd>Document Object Model representing parsed web elements.</dd>\n  </dl>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 75,
    slug: "table-container-grid-rows-columns",
    title: "Tables Rows & Cells (<tr>, <td>, <th>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 126-129)",
    exercise: {
      english: {
        question: "Which tag is used to create a table header cell with bold centered text by default?",
        options: ["<th>","<td>","<header>","<head>"],
        correctAnswer: "<th>",
        hint: "<th> stands for Table Header."
      },
      hinglish: {
        question: "Which tag is used to create a table header cell with bold centered text by default?",
        options: ["<th>","<td>","<header>","<head>"],
        correctAnswer: "<th>",
        hint: "<th> stands for Table Header."
      },
      hindi: {
        question: "Which tag is used to create a table header cell with bold centered text by default?",
        options: ["<th>","<td>","<header>","<head>"],
        correctAnswer: "<th>",
        hint: "<th> stands for Table Header."
      }
    },
    english: {
      kid: "* 1. <table> creates tabular data grid layouts.\n* 2. <tr> defines table row containers.\n* 3. <th> defines bold centered header cells.\n* 4. <td> defines regular table data cells.\n* 5. Organized in rows and vertical columns.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Tables</title>\n</head>\n<body>\n\n  <h2>Student Exam Results</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Student Name</th>\n      <th>Subject</th>\n      <th>Score</th>\n    </tr>\n    <tr>\n      <td>Aarav</td>\n      <td>HTML5</td>\n      <td>98</td>\n    </tr>\n    <tr>\n      <td>Priya</td>\n      <td>CSS3</td>\n      <td>95</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <table> creates tabular data grid layouts.\n* 2. <tr> defines table row containers.\n* 3. <th> defines bold centered header cells.\n* 4. <td> defines regular table data cells.\n* 5. Organized in rows and vertical columns.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Tables</title>\n</head>\n<body>\n\n  <h2>Student Exam Results</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Student Name</th>\n      <th>Subject</th>\n      <th>Score</th>\n    </tr>\n    <tr>\n      <td>Aarav</td>\n      <td>HTML5</td>\n      <td>98</td>\n    </tr>\n    <tr>\n      <td>Priya</td>\n      <td>CSS3</td>\n      <td>95</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <table> डेटा ग्रिड और टेबल बनाता है।\n* 2. <tr> टेबल की हर पंक्ति (Row) बनाता है।\n* 3. <th> बोल्ड और केंद्रित हेडर सेल बनाता है।\n* 4. <td> सामान्य डेटा सेल को परिभाषित करता है।\n* 5. पंक्तियों और स्तंभों में संरचित होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Tables</title>\n</head>\n<body>\n\n  <h2>Student Exam Results</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Student Name</th>\n      <th>Subject</th>\n      <th>Score</th>\n    </tr>\n    <tr>\n      <td>Aarav</td>\n      <td>HTML5</td>\n      <td>98</td>\n    </tr>\n    <tr>\n      <td>Priya</td>\n      <td>CSS3</td>\n      <td>95</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <table> डेटा ग्रिड और टेबल बनाता है।\n* 2. <tr> टेबल की हर पंक्ति (Row) बनाता है।\n* 3. <th> बोल्ड और केंद्रित हेडर सेल बनाता है।\n* 4. <td> सामान्य डेटा सेल को परिभाषित करता है।\n* 5. पंक्तियों और स्तंभों में संरचित होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Tables</title>\n</head>\n<body>\n\n  <h2>Student Exam Results</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Student Name</th>\n      <th>Subject</th>\n      <th>Score</th>\n    </tr>\n    <tr>\n      <td>Aarav</td>\n      <td>HTML5</td>\n      <td>98</td>\n    </tr>\n    <tr>\n      <td>Priya</td>\n      <td>CSS3</td>\n      <td>95</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <table> डेटा ग्रिड और टेबल बनाता है।\n* 2. <tr> टेबल की हर पंक्ति (Row) बनाता है।\n* 3. <th> बोल्ड और केंद्रित हेडर सेल बनाता है।\n* 4. <td> सामान्य डेटा सेल को परिभाषित करता है।\n* 5. पंक्तियों और स्तंभों में संरचित होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Tables</title>\n</head>\n<body>\n\n  <h2>Student Exam Results</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Student Name</th>\n      <th>Subject</th>\n      <th>Score</th>\n    </tr>\n    <tr>\n      <td>Aarav</td>\n      <td>HTML5</td>\n      <td>98</td>\n    </tr>\n    <tr>\n      <td>Priya</td>\n      <td>CSS3</td>\n      <td>95</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <table> डेटा ग्रिड और टेबल बनाता है।\n* 2. <tr> टेबल की हर पंक्ति (Row) बनाता है।\n* 3. <th> बोल्ड और केंद्रित हेडर सेल बनाता है।\n* 4. <td> सामान्य डेटा सेल को परिभाषित करता है।\n* 5. पंक्तियों और स्तंभों में संरचित होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Tables</title>\n</head>\n<body>\n\n  <h2>Student Exam Results</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Student Name</th>\n      <th>Subject</th>\n      <th>Score</th>\n    </tr>\n    <tr>\n      <td>Aarav</td>\n      <td>HTML5</td>\n      <td>98</td>\n    </tr>\n    <tr>\n      <td>Priya</td>\n      <td>CSS3</td>\n      <td>95</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 76,
    slug: "table-colspan-merge-columns",
    title: "Table Column Spanning (colspan & rowspan)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 130-133)",
    exercise: {
      english: {
        question: "Which attribute allows a single table cell to span across multiple columns horizontally?",
        options: ["colspan","rowspan","span","merge"],
        correctAnswer: "colspan",
        hint: "Use colspan=\"2\" to make a cell span across two columns."
      },
      hinglish: {
        question: "Which attribute allows a single table cell to span across multiple columns horizontally?",
        options: ["colspan","rowspan","span","merge"],
        correctAnswer: "colspan",
        hint: "Use colspan=\"2\" to make a cell span across two columns."
      },
      hindi: {
        question: "Which attribute allows a single table cell to span across multiple columns horizontally?",
        options: ["colspan","rowspan","span","merge"],
        correctAnswer: "colspan",
        hint: "Use colspan=\"2\" to make a cell span across two columns."
      }
    },
    english: {
      kid: "* 1. colspan merges cells across multiple columns.\n* 2. rowspan merges cells across multiple rows.\n* 3. Value sets number of cells merged.\n* 4. Eliminates redundant duplicate data cells.\n* 5. Essential for complex financial reporting grids.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Spanning</title>\n</head>\n<body>\n\n  <h2>Weekly Schedule</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Day</th>\n      <th colspan=\"2\">Classes</th>\n    </tr>\n    <tr>\n      <td>Monday</td>\n      <td>Web Dev</td>\n      <td>Algorithms</td>\n    </tr>\n    <tr>\n      <td>Friday</td>\n      <td colspan=\"2\">Capstone Project Lab</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. colspan merges cells across multiple columns.\n* 2. rowspan merges cells across multiple rows.\n* 3. Value sets number of cells merged.\n* 4. Eliminates redundant duplicate data cells.\n* 5. Essential for complex financial reporting grids.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Spanning</title>\n</head>\n<body>\n\n  <h2>Weekly Schedule</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Day</th>\n      <th colspan=\"2\">Classes</th>\n    </tr>\n    <tr>\n      <td>Monday</td>\n      <td>Web Dev</td>\n      <td>Algorithms</td>\n    </tr>\n    <tr>\n      <td>Friday</td>\n      <td colspan=\"2\">Capstone Project Lab</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. colspan कई कॉलम की सेल को जोड़ता है।\n* 2. rowspan कई पंक्तियों (Rows) की सेल जोड़ता है।\n* 3. मान जोड़ी जाने वाली सेलों की संख्या है।\n* 4. एक जैसा डेटा बार-बार लिखने से बचाता है।\n* 5. जटिल रिपोर्ट और टाइम-टेबल के लिए आवश्यक है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Spanning</title>\n</head>\n<body>\n\n  <h2>Weekly Schedule</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Day</th>\n      <th colspan=\"2\">Classes</th>\n    </tr>\n    <tr>\n      <td>Monday</td>\n      <td>Web Dev</td>\n      <td>Algorithms</td>\n    </tr>\n    <tr>\n      <td>Friday</td>\n      <td colspan=\"2\">Capstone Project Lab</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. colspan कई कॉलम की सेल को जोड़ता है।\n* 2. rowspan कई पंक्तियों (Rows) की सेल जोड़ता है।\n* 3. मान जोड़ी जाने वाली सेलों की संख्या है।\n* 4. एक जैसा डेटा बार-बार लिखने से बचाता है।\n* 5. जटिल रिपोर्ट और टाइम-टेबल के लिए आवश्यक है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Spanning</title>\n</head>\n<body>\n\n  <h2>Weekly Schedule</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Day</th>\n      <th colspan=\"2\">Classes</th>\n    </tr>\n    <tr>\n      <td>Monday</td>\n      <td>Web Dev</td>\n      <td>Algorithms</td>\n    </tr>\n    <tr>\n      <td>Friday</td>\n      <td colspan=\"2\">Capstone Project Lab</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. colspan कई कॉलम की सेल को जोड़ता है।\n* 2. rowspan कई पंक्तियों (Rows) की सेल जोड़ता है।\n* 3. मान जोड़ी जाने वाली सेलों की संख्या है।\n* 4. एक जैसा डेटा बार-बार लिखने से बचाता है।\n* 5. जटिल रिपोर्ट और टाइम-टेबल के लिए आवश्यक है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Spanning</title>\n</head>\n<body>\n\n  <h2>Weekly Schedule</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Day</th>\n      <th colspan=\"2\">Classes</th>\n    </tr>\n    <tr>\n      <td>Monday</td>\n      <td>Web Dev</td>\n      <td>Algorithms</td>\n    </tr>\n    <tr>\n      <td>Friday</td>\n      <td colspan=\"2\">Capstone Project Lab</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. colspan कई कॉलम की सेल को जोड़ता है।\n* 2. rowspan कई पंक्तियों (Rows) की सेल जोड़ता है।\n* 3. मान जोड़ी जाने वाली सेलों की संख्या है।\n* 4. एक जैसा डेटा बार-बार लिखने से बचाता है।\n* 5. जटिल रिपोर्ट और टाइम-टेबल के लिए आवश्यक है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Spanning</title>\n</head>\n<body>\n\n  <h2>Weekly Schedule</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Day</th>\n      <th colspan=\"2\">Classes</th>\n    </tr>\n    <tr>\n      <td>Monday</td>\n      <td>Web Dev</td>\n      <td>Algorithms</td>\n    </tr>\n    <tr>\n      <td>Friday</td>\n      <td colspan=\"2\">Capstone Project Lab</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 77,
    slug: "table-thead-tbody-tfoot-semantics",
    title: "Table Structured Sections (<thead>, <tbody>, <tfoot>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 134-137)",
    exercise: {
      english: {
        question: "Which semantic tag wraps the main body content rows of a table?",
        options: ["<tbody>","<thead>","<tfoot>","<table>"],
        correctAnswer: "<tbody>",
        hint: "<tbody> represents the Table Body."
      },
      hinglish: {
        question: "Which semantic tag wraps the main body content rows of a table?",
        options: ["<tbody>","<thead>","<tfoot>","<table>"],
        correctAnswer: "<tbody>",
        hint: "<tbody> represents the Table Body."
      },
      hindi: {
        question: "Which semantic tag wraps the main body content rows of a table?",
        options: ["<tbody>","<thead>","<tfoot>","<table>"],
        correctAnswer: "<tbody>",
        hint: "<tbody> represents the Table Body."
      }
    },
    english: {
      kid: "* 1. <thead> groups header rows of tables.\n* 2. <tbody> contains the primary data rows.\n* 3. <tfoot> groups footer total calculation rows.\n* 4. Enables independent table body scrolling.\n* 5. Improves table printing and screen readers.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Structured Table</title>\n</head>\n<body>\n\n  <h2>Course Billing Summary</h2>\n  <table border=\"1\">\n    <thead>\n      <tr>\n        <th>Item Description</th>\n        <th>Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Curriculum Access</td>\n        <td>$0.00</td>\n      </tr>\n      <tr>\n        <td>CLI Simulator Sandbox</td>\n        <td>$0.00</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td>Total Cost:</td>\n        <td>100% Free</td>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <thead> groups header rows of tables.\n* 2. <tbody> contains the primary data rows.\n* 3. <tfoot> groups footer total calculation rows.\n* 4. Enables independent table body scrolling.\n* 5. Improves table printing and screen readers.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Structured Table</title>\n</head>\n<body>\n\n  <h2>Course Billing Summary</h2>\n  <table border=\"1\">\n    <thead>\n      <tr>\n        <th>Item Description</th>\n        <th>Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Curriculum Access</td>\n        <td>$0.00</td>\n      </tr>\n      <tr>\n        <td>CLI Simulator Sandbox</td>\n        <td>$0.00</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td>Total Cost:</td>\n        <td>100% Free</td>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <thead> टेबल की हेडर पंक्तियों को समेटता है।\n* 2. <tbody> मुख्य डेटा पंक्तियों को रखता है।\n* 3. <tfoot> कुल योग और फुटर पंक्तियों के लिए है।\n* 4. बॉडी को अलग से स्क्रॉल करने में मदद करता है।\n* 5. प्रिंटिंग और स्क्रीन रीडर अनुभव बेहतर करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Structured Table</title>\n</head>\n<body>\n\n  <h2>Course Billing Summary</h2>\n  <table border=\"1\">\n    <thead>\n      <tr>\n        <th>Item Description</th>\n        <th>Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Curriculum Access</td>\n        <td>$0.00</td>\n      </tr>\n      <tr>\n        <td>CLI Simulator Sandbox</td>\n        <td>$0.00</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td>Total Cost:</td>\n        <td>100% Free</td>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <thead> टेबल की हेडर पंक्तियों को समेटता है।\n* 2. <tbody> मुख्य डेटा पंक्तियों को रखता है।\n* 3. <tfoot> कुल योग और फुटर पंक्तियों के लिए है।\n* 4. बॉडी को अलग से स्क्रॉल करने में मदद करता है।\n* 5. प्रिंटिंग और स्क्रीन रीडर अनुभव बेहतर करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Structured Table</title>\n</head>\n<body>\n\n  <h2>Course Billing Summary</h2>\n  <table border=\"1\">\n    <thead>\n      <tr>\n        <th>Item Description</th>\n        <th>Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Curriculum Access</td>\n        <td>$0.00</td>\n      </tr>\n      <tr>\n        <td>CLI Simulator Sandbox</td>\n        <td>$0.00</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td>Total Cost:</td>\n        <td>100% Free</td>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <thead> टेबल की हेडर पंक्तियों को समेटता है।\n* 2. <tbody> मुख्य डेटा पंक्तियों को रखता है।\n* 3. <tfoot> कुल योग और फुटर पंक्तियों के लिए है।\n* 4. बॉडी को अलग से स्क्रॉल करने में मदद करता है।\n* 5. प्रिंटिंग और स्क्रीन रीडर अनुभव बेहतर करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Structured Table</title>\n</head>\n<body>\n\n  <h2>Course Billing Summary</h2>\n  <table border=\"1\">\n    <thead>\n      <tr>\n        <th>Item Description</th>\n        <th>Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Curriculum Access</td>\n        <td>$0.00</td>\n      </tr>\n      <tr>\n        <td>CLI Simulator Sandbox</td>\n        <td>$0.00</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td>Total Cost:</td>\n        <td>100% Free</td>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <thead> टेबल की हेडर पंक्तियों को समेटता है।\n* 2. <tbody> मुख्य डेटा पंक्तियों को रखता है।\n* 3. <tfoot> कुल योग और फुटर पंक्तियों के लिए है।\n* 4. बॉडी को अलग से स्क्रॉल करने में मदद करता है।\n* 5. प्रिंटिंग और स्क्रीन रीडर अनुभव बेहतर करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Structured Table</title>\n</head>\n<body>\n\n  <h2>Course Billing Summary</h2>\n  <table border=\"1\">\n    <thead>\n      <tr>\n        <th>Item Description</th>\n        <th>Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Curriculum Access</td>\n        <td>$0.00</td>\n      </tr>\n      <tr>\n        <td>CLI Simulator Sandbox</td>\n        <td>$0.00</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td>Total Cost:</td>\n        <td>100% Free</td>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 78,
    slug: "table-column-groups-colgroup-col-widths",
    title: "Table Column Groups (<colgroup> & <col>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 138-140)",
    exercise: {
      english: {
        question: "Where should the <colgroup> tag be placed inside a table?",
        options: ["Directly after the opening <table> tag","Inside the <tfoot> element","After the closing </table> tag","Inside each <td> cell"],
        correctAnswer: "Directly after the opening <table> tag",
        hint: "<colgroup> belongs at the top of the table before <thead> or <tr>."
      },
      hinglish: {
        question: "Where should the <colgroup> tag be placed inside a table?",
        options: ["Directly after the opening <table> tag","Inside the <tfoot> element","After the closing </table> tag","Inside each <td> cell"],
        correctAnswer: "Directly after the opening <table> tag",
        hint: "<colgroup> belongs at the top of the table before <thead> or <tr>."
      },
      hindi: {
        question: "Where should the <colgroup> tag be placed inside a table?",
        options: ["Directly after the opening <table> tag","Inside the <tfoot> element","After the closing </table> tag","Inside each <td> cell"],
        correctAnswer: "Directly after the opening <table> tag",
        hint: "<colgroup> belongs at the top of the table before <thead> or <tr>."
      }
    },
    english: {
      kid: "* 1. <colgroup> specifies formatting for whole columns.\n* 2. Contains one or more <col> elements.\n* 3. span attribute sets number of columns.\n* 4. Avoids repeating attributes on every cell.\n* 5. Sits immediately after opening <table> tag.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Column Groups</title>\n</head>\n<body>\n\n  <h2>Product Inventory</h2>\n  <table border=\"1\">\n    <colgroup>\n      <col span=\"1\">\n      <col span=\"2\">\n    </colgroup>\n    <tr>\n      <th>SKU</th>\n      <th>Item Name</th>\n      <th>In Stock</th>\n    </tr>\n    <tr>\n      <td>#101</td>\n      <td>USB-C Cable</td>\n      <td>50</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <colgroup> specifies formatting for whole columns.\n* 2. Contains one or more <col> elements.\n* 3. span attribute sets number of columns.\n* 4. Avoids repeating attributes on every cell.\n* 5. Sits immediately after opening <table> tag.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Column Groups</title>\n</head>\n<body>\n\n  <h2>Product Inventory</h2>\n  <table border=\"1\">\n    <colgroup>\n      <col span=\"1\">\n      <col span=\"2\">\n    </colgroup>\n    <tr>\n      <th>SKU</th>\n      <th>Item Name</th>\n      <th>In Stock</th>\n    </tr>\n    <tr>\n      <td>#101</td>\n      <td>USB-C Cable</td>\n      <td>50</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <colgroup> पूरे कॉलम की फॉर्मेटिंग तय करता है।\n* 2. इसके अंदर एक या अधिक <col> तत्व होते हैं।\n* 3. span अट्रिब्यूट कॉलम की संख्या बताता है।\n* 4. हर सेल में बार-बार स्टाइल लगाने से बचाता है।\n* 5. <table> टैग के तुरंत बाद लगाया जाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Column Groups</title>\n</head>\n<body>\n\n  <h2>Product Inventory</h2>\n  <table border=\"1\">\n    <colgroup>\n      <col span=\"1\">\n      <col span=\"2\">\n    </colgroup>\n    <tr>\n      <th>SKU</th>\n      <th>Item Name</th>\n      <th>In Stock</th>\n    </tr>\n    <tr>\n      <td>#101</td>\n      <td>USB-C Cable</td>\n      <td>50</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <colgroup> पूरे कॉलम की फॉर्मेटिंग तय करता है।\n* 2. इसके अंदर एक या अधिक <col> तत्व होते हैं।\n* 3. span अट्रिब्यूट कॉलम की संख्या बताता है।\n* 4. हर सेल में बार-बार स्टाइल लगाने से बचाता है।\n* 5. <table> टैग के तुरंत बाद लगाया जाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Column Groups</title>\n</head>\n<body>\n\n  <h2>Product Inventory</h2>\n  <table border=\"1\">\n    <colgroup>\n      <col span=\"1\">\n      <col span=\"2\">\n    </colgroup>\n    <tr>\n      <th>SKU</th>\n      <th>Item Name</th>\n      <th>In Stock</th>\n    </tr>\n    <tr>\n      <td>#101</td>\n      <td>USB-C Cable</td>\n      <td>50</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <colgroup> पूरे कॉलम की फॉर्मेटिंग तय करता है।\n* 2. इसके अंदर एक या अधिक <col> तत्व होते हैं।\n* 3. span अट्रिब्यूट कॉलम की संख्या बताता है।\n* 4. हर सेल में बार-बार स्टाइल लगाने से बचाता है।\n* 5. <table> टैग के तुरंत बाद लगाया जाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Column Groups</title>\n</head>\n<body>\n\n  <h2>Product Inventory</h2>\n  <table border=\"1\">\n    <colgroup>\n      <col span=\"1\">\n      <col span=\"2\">\n    </colgroup>\n    <tr>\n      <th>SKU</th>\n      <th>Item Name</th>\n      <th>In Stock</th>\n    </tr>\n    <tr>\n      <td>#101</td>\n      <td>USB-C Cable</td>\n      <td>50</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <colgroup> पूरे कॉलम की फॉर्मेटिंग तय करता है।\n* 2. इसके अंदर एक या अधिक <col> तत्व होते हैं।\n* 3. span अट्रिब्यूट कॉलम की संख्या बताता है।\n* 4. हर सेल में बार-बार स्टाइल लगाने से बचाता है।\n* 5. <table> टैग के तुरंत बाद लगाया जाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Column Groups</title>\n</head>\n<body>\n\n  <h2>Product Inventory</h2>\n  <table border=\"1\">\n    <colgroup>\n      <col span=\"1\">\n      <col span=\"2\">\n    </colgroup>\n    <tr>\n      <th>SKU</th>\n      <th>Item Name</th>\n      <th>In Stock</th>\n    </tr>\n    <tr>\n      <td>#101</td>\n      <td>USB-C Cable</td>\n      <td>50</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 79,
    slug: "table-borders-cellpadding-cellspacing",
    title: "Table Borders & Spacing Layouts",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 141-143)",
    exercise: {
      english: {
        question: "Which pure HTML attribute renders visible grid borders around a table without CSS?",
        options: ["border=\"1\"","grid=\"true\"","outline=\"solid\"","lines=\"visible\""],
        correctAnswer: "border=\"1\"",
        hint: "Use border=\"1\" on <table> for basic visible grid borders."
      },
      hinglish: {
        question: "Which pure HTML attribute renders visible grid borders around a table without CSS?",
        options: ["border=\"1\"","grid=\"true\"","outline=\"solid\"","lines=\"visible\""],
        correctAnswer: "border=\"1\"",
        hint: "Use border=\"1\" on <table> for basic visible grid borders."
      },
      hindi: {
        question: "Which pure HTML attribute renders visible grid borders around a table without CSS?",
        options: ["border=\"1\"","grid=\"true\"","outline=\"solid\"","lines=\"visible\""],
        correctAnswer: "border=\"1\"",
        hint: "Use border=\"1\" on <table> for basic visible grid borders."
      }
    },
    english: {
      kid: "* 1. border attribute specifies table grid lines.\n* 2. Value \"1\" renders basic table borders.\n* 3. Keeps data clearly separated and readable.\n* 4. Modern styling uses CSS border-collapse.\n* 5. Pure HTML attributes ensure universal fallback.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Grid</title>\n</head>\n<body>\n\n  <h2>Command Reference Summary</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Command</th>\n      <th>Description</th>\n      <th>OS Platform</th>\n    </tr>\n    <tr>\n      <td>dir</td>\n      <td>List directory contents</td>\n      <td>Windows 11</td>\n    </tr>\n    <tr>\n      <td>mkdir</td>\n      <td>Create new folder</td>\n      <td>Windows & Linux</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. border attribute specifies table grid lines.\n* 2. Value \"1\" renders basic table borders.\n* 3. Keeps data clearly separated and readable.\n* 4. Modern styling uses CSS border-collapse.\n* 5. Pure HTML attributes ensure universal fallback.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Grid</title>\n</head>\n<body>\n\n  <h2>Command Reference Summary</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Command</th>\n      <th>Description</th>\n      <th>OS Platform</th>\n    </tr>\n    <tr>\n      <td>dir</td>\n      <td>List directory contents</td>\n      <td>Windows 11</td>\n    </tr>\n    <tr>\n      <td>mkdir</td>\n      <td>Create new folder</td>\n      <td>Windows & Linux</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. border अट्रिब्यूट टेबल की रेखाएं दिखाता है।\n* 2. मान \"1\" साधारण बॉर्डर रेखाएं बनाता है।\n* 3. डेटा को अलग-अलग और पढ़ने योग्य रखता है।\n* 4. आधुनिक वेब में CSS का उपयोग होता है।\n* 5. शुद्ध HTML में भी साफ लेआउट देता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Grid</title>\n</head>\n<body>\n\n  <h2>Command Reference Summary</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Command</th>\n      <th>Description</th>\n      <th>OS Platform</th>\n    </tr>\n    <tr>\n      <td>dir</td>\n      <td>List directory contents</td>\n      <td>Windows 11</td>\n    </tr>\n    <tr>\n      <td>mkdir</td>\n      <td>Create new folder</td>\n      <td>Windows & Linux</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. border अट्रिब्यूट टेबल की रेखाएं दिखाता है।\n* 2. मान \"1\" साधारण बॉर्डर रेखाएं बनाता है।\n* 3. डेटा को अलग-अलग और पढ़ने योग्य रखता है।\n* 4. आधुनिक वेब में CSS का उपयोग होता है।\n* 5. शुद्ध HTML में भी साफ लेआउट देता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Grid</title>\n</head>\n<body>\n\n  <h2>Command Reference Summary</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Command</th>\n      <th>Description</th>\n      <th>OS Platform</th>\n    </tr>\n    <tr>\n      <td>dir</td>\n      <td>List directory contents</td>\n      <td>Windows 11</td>\n    </tr>\n    <tr>\n      <td>mkdir</td>\n      <td>Create new folder</td>\n      <td>Windows & Linux</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. border अट्रिब्यूट टेबल की रेखाएं दिखाता है।\n* 2. मान \"1\" साधारण बॉर्डर रेखाएं बनाता है।\n* 3. डेटा को अलग-अलग और पढ़ने योग्य रखता है।\n* 4. आधुनिक वेब में CSS का उपयोग होता है।\n* 5. शुद्ध HTML में भी साफ लेआउट देता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Grid</title>\n</head>\n<body>\n\n  <h2>Command Reference Summary</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Command</th>\n      <th>Description</th>\n      <th>OS Platform</th>\n    </tr>\n    <tr>\n      <td>dir</td>\n      <td>List directory contents</td>\n      <td>Windows 11</td>\n    </tr>\n    <tr>\n      <td>mkdir</td>\n      <td>Create new folder</td>\n      <td>Windows & Linux</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. border अट्रिब्यूट टेबल की रेखाएं दिखाता है।\n* 2. मान \"1\" साधारण बॉर्डर रेखाएं बनाता है।\n* 3. डेटा को अलग-अलग और पढ़ने योग्य रखता है।\n* 4. आधुनिक वेब में CSS का उपयोग होता है।\n* 5. शुद्ध HTML में भी साफ लेआउट देता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Table Grid</title>\n</head>\n<body>\n\n  <h2>Command Reference Summary</h2>\n  <table border=\"1\">\n    <tr>\n      <th>Command</th>\n      <th>Description</th>\n      <th>OS Platform</th>\n    </tr>\n    <tr>\n      <td>dir</td>\n      <td>List directory contents</td>\n      <td>Windows 11</td>\n    </tr>\n    <tr>\n      <td>mkdir</td>\n      <td>Create new folder</td>\n      <td>Windows & Linux</td>\n    </tr>\n  </table>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 80,
    slug: "capstone-weekly-schedule-pricing-grid",
    title: "Capstone Project: Dynamic Pricing Grid",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Nextsem Academy Project Suite",
    exercise: {
      english: {
        question: "Which tag provides an accessible title or caption for an entire table?",
        options: ["<caption>","<title>","<header>","<label>"],
        correctAnswer: "<caption>",
        hint: "The <caption> tag must be inserted immediately after <table>."
      },
      hinglish: {
        question: "Which tag provides an accessible title or caption for an entire table?",
        options: ["<caption>","<title>","<header>","<label>"],
        correctAnswer: "<caption>",
        hint: "The <caption> tag must be inserted immediately after <table>."
      },
      hindi: {
        question: "Which tag provides an accessible title or caption for an entire table?",
        options: ["<caption>","<title>","<header>","<label>"],
        correctAnswer: "<caption>",
        hint: "The <caption> tag must be inserted immediately after <table>."
      }
    },
    english: {
      kid: "* 1. Combines <table>, <thead>, <tbody>, <tfoot>, and <caption>.\n* 2. Implements clean column spanning for highlights.\n* 3. Uses pure HTML5 semantic structure.\n* 4. 100% accessible to screen reading devices.\n* 5. Presents comparative pricing data cleanly.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy Plans</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Access Tiers</h1>\n\n  <table border=\"1\">\n    <caption>Complete Curriculum Access Pricing</caption>\n    <thead>\n      <tr>\n        <th>Feature Plan</th>\n        <th>Free Community</th>\n        <th>Developer Pro</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Lessons</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Windows 11 Terminal CLI</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Interactive MCQ Quizzes</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th>Monthly Subscription</th>\n        <th colspan=\"2\">$0 / Forever Free</th>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. Combines <table>, <thead>, <tbody>, <tfoot>, and <caption>.\n* 2. Implements clean column spanning for highlights.\n* 3. Uses pure HTML5 semantic structure.\n* 4. 100% accessible to screen reading devices.\n* 5. Presents comparative pricing data cleanly.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy Plans</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Access Tiers</h1>\n\n  <table border=\"1\">\n    <caption>Complete Curriculum Access Pricing</caption>\n    <thead>\n      <tr>\n        <th>Feature Plan</th>\n        <th>Free Community</th>\n        <th>Developer Pro</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Lessons</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Windows 11 Terminal CLI</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Interactive MCQ Quizzes</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th>Monthly Subscription</th>\n        <th colspan=\"2\">$0 / Forever Free</th>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <table>, <thead>, <tbody>, और <caption> का पूरा संगम।\n* 2. मुख्य बिंदुओं के लिए colspan का सही उपयोग।\n* 3. 100% शुद्ध सिमेंटिक HTML5 संरचना।\n* 4. स्क्रीन रीडर के लिए पूरी तरह सुलभ।\n* 5. तुलनात्मक मूल्य डेटा को साफ-साफ दिखाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy Plans</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Access Tiers</h1>\n\n  <table border=\"1\">\n    <caption>Complete Curriculum Access Pricing</caption>\n    <thead>\n      <tr>\n        <th>Feature Plan</th>\n        <th>Free Community</th>\n        <th>Developer Pro</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Lessons</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Windows 11 Terminal CLI</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Interactive MCQ Quizzes</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th>Monthly Subscription</th>\n        <th colspan=\"2\">$0 / Forever Free</th>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <table>, <thead>, <tbody>, और <caption> का पूरा संगम।\n* 2. मुख्य बिंदुओं के लिए colspan का सही उपयोग।\n* 3. 100% शुद्ध सिमेंटिक HTML5 संरचना।\n* 4. स्क्रीन रीडर के लिए पूरी तरह सुलभ।\n* 5. तुलनात्मक मूल्य डेटा को साफ-साफ दिखाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy Plans</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Access Tiers</h1>\n\n  <table border=\"1\">\n    <caption>Complete Curriculum Access Pricing</caption>\n    <thead>\n      <tr>\n        <th>Feature Plan</th>\n        <th>Free Community</th>\n        <th>Developer Pro</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Lessons</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Windows 11 Terminal CLI</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Interactive MCQ Quizzes</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th>Monthly Subscription</th>\n        <th colspan=\"2\">$0 / Forever Free</th>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <table>, <thead>, <tbody>, और <caption> का पूरा संगम।\n* 2. मुख्य बिंदुओं के लिए colspan का सही उपयोग।\n* 3. 100% शुद्ध सिमेंटिक HTML5 संरचना।\n* 4. स्क्रीन रीडर के लिए पूरी तरह सुलभ।\n* 5. तुलनात्मक मूल्य डेटा को साफ-साफ दिखाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy Plans</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Access Tiers</h1>\n\n  <table border=\"1\">\n    <caption>Complete Curriculum Access Pricing</caption>\n    <thead>\n      <tr>\n        <th>Feature Plan</th>\n        <th>Free Community</th>\n        <th>Developer Pro</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Lessons</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Windows 11 Terminal CLI</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Interactive MCQ Quizzes</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th>Monthly Subscription</th>\n        <th colspan=\"2\">$0 / Forever Free</th>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```",
      pro: "* 1. <table>, <thead>, <tbody>, और <caption> का पूरा संगम।\n* 2. मुख्य बिंदुओं के लिए colspan का सही उपयोग।\n* 3. 100% शुद्ध सिमेंटिक HTML5 संरचना।\n* 4. स्क्रीन रीडर के लिए पूरी तरह सुलभ।\n* 5. तुलनात्मक मूल्य डेटा को साफ-साफ दिखाता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Nextsem Academy Plans</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Access Tiers</h1>\n\n  <table border=\"1\">\n    <caption>Complete Curriculum Access Pricing</caption>\n    <thead>\n      <tr>\n        <th>Feature Plan</th>\n        <th>Free Community</th>\n        <th>Developer Pro</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Full Stack Lessons</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Windows 11 Terminal CLI</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n      <tr>\n        <td>Interactive MCQ Quizzes</td>\n        <td>Included</td>\n        <td>Included</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th>Monthly Subscription</th>\n        <th colspan=\"2\">$0 / Forever Free</th>\n      </tr>\n    </tfoot>\n  </table>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 81,
    slug: "form-action-method-attributes-processing",
    title: "Form Action & Method (processing basics)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 144-147)",
    exercise: {
      english: {
        question: "Which HTTP method sends sensitive form data securely in the request body instead of the URL?",
        options: ["POST","GET","FETCH","SUBMIT"],
        correctAnswer: "POST",
        hint: "POST sends data inside the request payload body."
      },
      hinglish: {
        question: "Which HTTP method sends sensitive form data securely in the request body instead of the URL?",
        options: ["POST","GET","FETCH","SUBMIT"],
        correctAnswer: "POST",
        hint: "POST sends data inside the request payload body."
      },
      hindi: {
        question: "Which HTTP method sends sensitive form data securely in the request body instead of the URL?",
        options: ["POST","GET","FETCH","SUBMIT"],
        correctAnswer: "POST",
        hint: "POST sends data inside the request payload body."
      }
    },
    english: {
      kid: "* 1. <form> collects user interactive input data.\n* 2. action specifies server endpoint URL destination.\n* 3. method=\"GET\" appends data to URL.\n* 4. method=\"POST\" sends data securely inside body.\n* 5. Container for inputs, checkboxes, and buttons.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Form</title>\n</head>\n<body>\n\n  <h2>User Registration Form</h2>\n  <form action=\"/register-user\" method=\"post\">\n    <p>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" id=\"username\" name=\"username\">\n    </p>\n    <button type=\"submit\">Create Account</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <form> collects user interactive input data.\n* 2. action specifies server endpoint URL destination.\n* 3. method=\"GET\" appends data to URL.\n* 4. method=\"POST\" sends data securely inside body.\n* 5. Container for inputs, checkboxes, and buttons.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Form</title>\n</head>\n<body>\n\n  <h2>User Registration Form</h2>\n  <form action=\"/register-user\" method=\"post\">\n    <p>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" id=\"username\" name=\"username\">\n    </p>\n    <button type=\"submit\">Create Account</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <form> उपयोगकर्ता से डेटा इनपुट लेता है।\n* 2. action सर्वर प्रोसेसिंग URL का पता देता है।\n* 3. method=\"GET\" डेटा को URL में जोड़ता है।\n* 4. method=\"POST\" डेटा को सुरक्षित बॉडी में भेजता है।\n* 5. इनपुट, चेकबॉक्स और बटनों का कंटेनर है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Form</title>\n</head>\n<body>\n\n  <h2>User Registration Form</h2>\n  <form action=\"/register-user\" method=\"post\">\n    <p>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" id=\"username\" name=\"username\">\n    </p>\n    <button type=\"submit\">Create Account</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <form> उपयोगकर्ता से डेटा इनपुट लेता है।\n* 2. action सर्वर प्रोसेसिंग URL का पता देता है।\n* 3. method=\"GET\" डेटा को URL में जोड़ता है।\n* 4. method=\"POST\" डेटा को सुरक्षित बॉडी में भेजता है।\n* 5. इनपुट, चेकबॉक्स और बटनों का कंटेनर है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Form</title>\n</head>\n<body>\n\n  <h2>User Registration Form</h2>\n  <form action=\"/register-user\" method=\"post\">\n    <p>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" id=\"username\" name=\"username\">\n    </p>\n    <button type=\"submit\">Create Account</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <form> उपयोगकर्ता से डेटा इनपुट लेता है।\n* 2. action सर्वर प्रोसेसिंग URL का पता देता है।\n* 3. method=\"GET\" डेटा को URL में जोड़ता है।\n* 4. method=\"POST\" डेटा को सुरक्षित बॉडी में भेजता है।\n* 5. इनपुट, चेकबॉक्स और बटनों का कंटेनर है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Form</title>\n</head>\n<body>\n\n  <h2>User Registration Form</h2>\n  <form action=\"/register-user\" method=\"post\">\n    <p>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" id=\"username\" name=\"username\">\n    </p>\n    <button type=\"submit\">Create Account</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <form> उपयोगकर्ता से डेटा इनपुट लेता है।\n* 2. action सर्वर प्रोसेसिंग URL का पता देता है।\n* 3. method=\"GET\" डेटा को URL में जोड़ता है।\n* 4. method=\"POST\" डेटा को सुरक्षित बॉडी में भेजता है।\n* 5. इनपुट, चेकबॉक्स और बटनों का कंटेनर है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Form</title>\n</head>\n<body>\n\n  <h2>User Registration Form</h2>\n  <form action=\"/register-user\" method=\"post\">\n    <p>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" id=\"username\" name=\"username\">\n    </p>\n    <button type=\"submit\">Create Account</button>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 82,
    slug: "form-labeling-for-attribute-linkage",
    title: "Form Labels (for attribute linkage)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 148-150)",
    exercise: {
      english: {
        question: "Which attribute inside <label> links it to an <input id=\"...\">?",
        options: ["for","target","to","name"],
        correctAnswer: "for",
        hint: "The for attribute on <label> must match the id on the <input>."
      },
      hinglish: {
        question: "Which attribute inside <label> links it to an <input id=\"...\">?",
        options: ["for","target","to","name"],
        correctAnswer: "for",
        hint: "The for attribute on <label> must match the id on the <input>."
      },
      hindi: {
        question: "Which attribute inside <label> links it to an <input id=\"...\">?",
        options: ["for","target","to","name"],
        correctAnswer: "for",
        hint: "The for attribute on <label> must match the id on the <input>."
      }
    },
    english: {
      kid: "* 1. <label> associates descriptive text with inputs.\n* 2. for attribute matches the input id.\n* 3. Clicking label automatically focuses the input.\n* 4. Greatly enlarges touch target on mobiles.\n* 5. Critical accessibility requirement for screen readers.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Labels</title>\n</head>\n<body>\n\n  <h2>Contact Information</h2>\n  <form>\n    <p>\n      <label for=\"emailInput\">Email Address:</label>\n      <input type=\"email\" id=\"emailInput\" name=\"email\">\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <label> associates descriptive text with inputs.\n* 2. for attribute matches the input id.\n* 3. Clicking label automatically focuses the input.\n* 4. Greatly enlarges touch target on mobiles.\n* 5. Critical accessibility requirement for screen readers.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Labels</title>\n</head>\n<body>\n\n  <h2>Contact Information</h2>\n  <form>\n    <p>\n      <label for=\"emailInput\">Email Address:</label>\n      <input type=\"email\" id=\"emailInput\" name=\"email\">\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <label> इनपुट बॉक्स को नाम/विवरण देता है।\n* 2. for अट्रिब्यूट इनपुट के id से मेल खाता है।\n* 3. लेबल पर क्लिक करने से कर्सर इनपुट में आ जाता है।\n* 4. मोबाइल पर टच करने की जगह बड़ी हो जाती है।\n* 5. स्क्रीन रीडर्स के लिए बहुत जरूरी नियम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Labels</title>\n</head>\n<body>\n\n  <h2>Contact Information</h2>\n  <form>\n    <p>\n      <label for=\"emailInput\">Email Address:</label>\n      <input type=\"email\" id=\"emailInput\" name=\"email\">\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <label> इनपुट बॉक्स को नाम/विवरण देता है।\n* 2. for अट्रिब्यूट इनपुट के id से मेल खाता है।\n* 3. लेबल पर क्लिक करने से कर्सर इनपुट में आ जाता है।\n* 4. मोबाइल पर टच करने की जगह बड़ी हो जाती है।\n* 5. स्क्रीन रीडर्स के लिए बहुत जरूरी नियम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Labels</title>\n</head>\n<body>\n\n  <h2>Contact Information</h2>\n  <form>\n    <p>\n      <label for=\"emailInput\">Email Address:</label>\n      <input type=\"email\" id=\"emailInput\" name=\"email\">\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <label> इनपुट बॉक्स को नाम/विवरण देता है।\n* 2. for अट्रिब्यूट इनपुट के id से मेल खाता है।\n* 3. लेबल पर क्लिक करने से कर्सर इनपुट में आ जाता है।\n* 4. मोबाइल पर टच करने की जगह बड़ी हो जाती है।\n* 5. स्क्रीन रीडर्स के लिए बहुत जरूरी नियम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Labels</title>\n</head>\n<body>\n\n  <h2>Contact Information</h2>\n  <form>\n    <p>\n      <label for=\"emailInput\">Email Address:</label>\n      <input type=\"email\" id=\"emailInput\" name=\"email\">\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <label> इनपुट बॉक्स को नाम/विवरण देता है।\n* 2. for अट्रिब्यूट इनपुट के id से मेल खाता है।\n* 3. लेबल पर क्लिक करने से कर्सर इनपुट में आ जाता है।\n* 4. मोबाइल पर टच करने की जगह बड़ी हो जाती है।\n* 5. स्क्रीन रीडर्स के लिए बहुत जरूरी नियम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Labels</title>\n</head>\n<body>\n\n  <h2>Contact Information</h2>\n  <form>\n    <p>\n      <label for=\"emailInput\">Email Address:</label>\n      <input type=\"email\" id=\"emailInput\" name=\"email\">\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 83,
    slug: "text-password-inputs-type-attributes",
    title: "Text & Password Inputs (type=\"text\" & \"password\")",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 151-153)",
    exercise: {
      english: {
        question: "Which input type masks characters with black dots or asterisks for privacy?",
        options: ["type=\"password\"","type=\"secret\"","type=\"hidden\"","type=\"mask\""],
        correctAnswer: "type=\"password\"",
        hint: "type=\"password\" obscures the text typed by users."
      },
      hinglish: {
        question: "Which input type masks characters with black dots or asterisks for privacy?",
        options: ["type=\"password\"","type=\"secret\"","type=\"hidden\"","type=\"mask\""],
        correctAnswer: "type=\"password\"",
        hint: "type=\"password\" obscures the text typed by users."
      },
      hindi: {
        question: "Which input type masks characters with black dots or asterisks for privacy?",
        options: ["type=\"password\"","type=\"secret\"","type=\"hidden\"","type=\"mask\""],
        correctAnswer: "type=\"password\"",
        hint: "type=\"password\" obscures the text typed by users."
      }
    },
    english: {
      kid: "* 1. <input type=\"text\"> creates single-line text inputs.\n* 2. <input type=\"password\"> masks typed characters securely.\n* 3. name attribute defines variable key submitted.\n* 4. placeholder displays subtle hint text inside.\n* 5. <input> is a self-closing empty element.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Login Credentials</title>\n</head>\n<body>\n\n  <h2>Member Login</h2>\n  <form action=\"/login\" method=\"post\">\n    <p>\n      <label for=\"user\">Username:</label>\n      <input type=\"text\" id=\"user\" name=\"username\" placeholder=\"e.g. alex2026\">\n    </p>\n    <p>\n      <label for=\"pass\">Password:</label>\n      <input type=\"password\" id=\"pass\" name=\"password\" placeholder=\"Enter secure password\">\n    </p>\n    <button type=\"submit\">Sign In</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <input type=\"text\"> creates single-line text inputs.\n* 2. <input type=\"password\"> masks typed characters securely.\n* 3. name attribute defines variable key submitted.\n* 4. placeholder displays subtle hint text inside.\n* 5. <input> is a self-closing empty element.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Login Credentials</title>\n</head>\n<body>\n\n  <h2>Member Login</h2>\n  <form action=\"/login\" method=\"post\">\n    <p>\n      <label for=\"user\">Username:</label>\n      <input type=\"text\" id=\"user\" name=\"username\" placeholder=\"e.g. alex2026\">\n    </p>\n    <p>\n      <label for=\"pass\">Password:</label>\n      <input type=\"password\" id=\"pass\" name=\"password\" placeholder=\"Enter secure password\">\n    </p>\n    <button type=\"submit\">Sign In</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. type=\"text\" साधारण एक लाइन इनपुट बनाता है।\n* 2. type=\"password\" पासवर्ड के अक्षरों को छिपाता है।\n* 3. name अट्रिब्यूट सर्वर पर जाने वाली की (key) है।\n* 4. placeholder बॉक्स में हल्का हिंट टेक्स्ट दिखाता है।\n* 5. <input> एक सेल्फ-क्लोजिंग टैग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Login Credentials</title>\n</head>\n<body>\n\n  <h2>Member Login</h2>\n  <form action=\"/login\" method=\"post\">\n    <p>\n      <label for=\"user\">Username:</label>\n      <input type=\"text\" id=\"user\" name=\"username\" placeholder=\"e.g. alex2026\">\n    </p>\n    <p>\n      <label for=\"pass\">Password:</label>\n      <input type=\"password\" id=\"pass\" name=\"password\" placeholder=\"Enter secure password\">\n    </p>\n    <button type=\"submit\">Sign In</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"text\" साधारण एक लाइन इनपुट बनाता है।\n* 2. type=\"password\" पासवर्ड के अक्षरों को छिपाता है।\n* 3. name अट्रिब्यूट सर्वर पर जाने वाली की (key) है।\n* 4. placeholder बॉक्स में हल्का हिंट टेक्स्ट दिखाता है।\n* 5. <input> एक सेल्फ-क्लोजिंग टैग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Login Credentials</title>\n</head>\n<body>\n\n  <h2>Member Login</h2>\n  <form action=\"/login\" method=\"post\">\n    <p>\n      <label for=\"user\">Username:</label>\n      <input type=\"text\" id=\"user\" name=\"username\" placeholder=\"e.g. alex2026\">\n    </p>\n    <p>\n      <label for=\"pass\">Password:</label>\n      <input type=\"password\" id=\"pass\" name=\"password\" placeholder=\"Enter secure password\">\n    </p>\n    <button type=\"submit\">Sign In</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. type=\"text\" साधारण एक लाइन इनपुट बनाता है।\n* 2. type=\"password\" पासवर्ड के अक्षरों को छिपाता है।\n* 3. name अट्रिब्यूट सर्वर पर जाने वाली की (key) है।\n* 4. placeholder बॉक्स में हल्का हिंट टेक्स्ट दिखाता है।\n* 5. <input> एक सेल्फ-क्लोजिंग टैग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Login Credentials</title>\n</head>\n<body>\n\n  <h2>Member Login</h2>\n  <form action=\"/login\" method=\"post\">\n    <p>\n      <label for=\"user\">Username:</label>\n      <input type=\"text\" id=\"user\" name=\"username\" placeholder=\"e.g. alex2026\">\n    </p>\n    <p>\n      <label for=\"pass\">Password:</label>\n      <input type=\"password\" id=\"pass\" name=\"password\" placeholder=\"Enter secure password\">\n    </p>\n    <button type=\"submit\">Sign In</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"text\" साधारण एक लाइन इनपुट बनाता है।\n* 2. type=\"password\" पासवर्ड के अक्षरों को छिपाता है।\n* 3. name अट्रिब्यूट सर्वर पर जाने वाली की (key) है।\n* 4. placeholder बॉक्स में हल्का हिंट टेक्स्ट दिखाता है।\n* 5. <input> एक सेल्फ-क्लोजिंग टैग होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Login Credentials</title>\n</head>\n<body>\n\n  <h2>Member Login</h2>\n  <form action=\"/login\" method=\"post\">\n    <p>\n      <label for=\"user\">Username:</label>\n      <input type=\"text\" id=\"user\" name=\"username\" placeholder=\"e.g. alex2026\">\n    </p>\n    <p>\n      <label for=\"pass\">Password:</label>\n      <input type=\"password\" id=\"pass\" name=\"password\" placeholder=\"Enter secure password\">\n    </p>\n    <button type=\"submit\">Sign In</button>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 84,
    slug: "radio-buttons-grouping-name-attribute",
    title: "Radio Buttons (type=\"radio\")",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 154-156)",
    exercise: {
      english: {
        question: "How do you group multiple radio buttons so only one can be selected at a time?",
        options: ["Give them all the exact same name attribute","Give them all the same id attribute","Wrap them in a <div> container","Use the type=\"grouped\" attribute"],
        correctAnswer: "Give them all the exact same name attribute",
        hint: "Radio buttons sharing the same name form a mutually exclusive group."
      },
      hinglish: {
        question: "How do you group multiple radio buttons so only one can be selected at a time?",
        options: ["Give them all the exact same name attribute","Give them all the same id attribute","Wrap them in a <div> container","Use the type=\"grouped\" attribute"],
        correctAnswer: "Give them all the exact same name attribute",
        hint: "Radio buttons sharing the same name form a mutually exclusive group."
      },
      hindi: {
        question: "How do you group multiple radio buttons so only one can be selected at a time?",
        options: ["Give them all the exact same name attribute","Give them all the same id attribute","Wrap them in a <div> container","Use the type=\"grouped\" attribute"],
        correctAnswer: "Give them all the exact same name attribute",
        hint: "Radio buttons sharing the same name form a mutually exclusive group."
      }
    },
    english: {
      kid: "* 1. type=\"radio\" creates single-choice option buttons.\n* 2. Same name attribute groups options together.\n* 3. Only one button selectable at once.\n* 4. value attribute defines submitted server data.\n* 5. checked attribute pre-selects default option.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Radio Buttons</title>\n</head>\n<body>\n\n  <h2>Select Your Developer Track</h2>\n  <form>\n    <p>\n      <input type=\"radio\" id=\"frontend\" name=\"track\" value=\"frontend\" checked>\n      <label for=\"frontend\">Frontend Web Developer</label>\n    </p>\n    <p>\n      <input type=\"radio\" id=\"fullstack\" name=\"track\" value=\"fullstack\">\n      <label for=\"fullstack\">Full Stack Engineer</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"radio\" creates single-choice option buttons.\n* 2. Same name attribute groups options together.\n* 3. Only one button selectable at once.\n* 4. value attribute defines submitted server data.\n* 5. checked attribute pre-selects default option.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Radio Buttons</title>\n</head>\n<body>\n\n  <h2>Select Your Developer Track</h2>\n  <form>\n    <p>\n      <input type=\"radio\" id=\"frontend\" name=\"track\" value=\"frontend\" checked>\n      <label for=\"frontend\">Frontend Web Developer</label>\n    </p>\n    <p>\n      <input type=\"radio\" id=\"fullstack\" name=\"track\" value=\"fullstack\">\n      <label for=\"fullstack\">Full Stack Engineer</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. type=\"radio\" केवल एक विकल्प चुनने देता है।\n* 2. एक समान name अट्रिब्यूट विकल्पों का ग्रुप बनाता है।\n* 3. एक समय में सिर्फ एक ही बटन चुना जा सकता है।\n* 4. value सर्वर पर जाने वाला असली डेटा होता है।\n* 5. checked अट्रिब्यूट पहले से चुनकर रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Radio Buttons</title>\n</head>\n<body>\n\n  <h2>Select Your Developer Track</h2>\n  <form>\n    <p>\n      <input type=\"radio\" id=\"frontend\" name=\"track\" value=\"frontend\" checked>\n      <label for=\"frontend\">Frontend Web Developer</label>\n    </p>\n    <p>\n      <input type=\"radio\" id=\"fullstack\" name=\"track\" value=\"fullstack\">\n      <label for=\"fullstack\">Full Stack Engineer</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"radio\" केवल एक विकल्प चुनने देता है।\n* 2. एक समान name अट्रिब्यूट विकल्पों का ग्रुप बनाता है।\n* 3. एक समय में सिर्फ एक ही बटन चुना जा सकता है।\n* 4. value सर्वर पर जाने वाला असली डेटा होता है।\n* 5. checked अट्रिब्यूट पहले से चुनकर रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Radio Buttons</title>\n</head>\n<body>\n\n  <h2>Select Your Developer Track</h2>\n  <form>\n    <p>\n      <input type=\"radio\" id=\"frontend\" name=\"track\" value=\"frontend\" checked>\n      <label for=\"frontend\">Frontend Web Developer</label>\n    </p>\n    <p>\n      <input type=\"radio\" id=\"fullstack\" name=\"track\" value=\"fullstack\">\n      <label for=\"fullstack\">Full Stack Engineer</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. type=\"radio\" केवल एक विकल्प चुनने देता है।\n* 2. एक समान name अट्रिब्यूट विकल्पों का ग्रुप बनाता है।\n* 3. एक समय में सिर्फ एक ही बटन चुना जा सकता है।\n* 4. value सर्वर पर जाने वाला असली डेटा होता है।\n* 5. checked अट्रिब्यूट पहले से चुनकर रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Radio Buttons</title>\n</head>\n<body>\n\n  <h2>Select Your Developer Track</h2>\n  <form>\n    <p>\n      <input type=\"radio\" id=\"frontend\" name=\"track\" value=\"frontend\" checked>\n      <label for=\"frontend\">Frontend Web Developer</label>\n    </p>\n    <p>\n      <input type=\"radio\" id=\"fullstack\" name=\"track\" value=\"fullstack\">\n      <label for=\"fullstack\">Full Stack Engineer</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"radio\" केवल एक विकल्प चुनने देता है।\n* 2. एक समान name अट्रिब्यूट विकल्पों का ग्रुप बनाता है।\n* 3. एक समय में सिर्फ एक ही बटन चुना जा सकता है।\n* 4. value सर्वर पर जाने वाला असली डेटा होता है।\n* 5. checked अट्रिब्यूट पहले से चुनकर रखता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Radio Buttons</title>\n</head>\n<body>\n\n  <h2>Select Your Developer Track</h2>\n  <form>\n    <p>\n      <input type=\"radio\" id=\"frontend\" name=\"track\" value=\"frontend\" checked>\n      <label for=\"frontend\">Frontend Web Developer</label>\n    </p>\n    <p>\n      <input type=\"radio\" id=\"fullstack\" name=\"track\" value=\"fullstack\">\n      <label for=\"fullstack\">Full Stack Engineer</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 85,
    slug: "checkboxes-prechecked-multiple-selections",
    title: "Checkboxes (type=\"checkbox\")",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 157-159)",
    exercise: {
      english: {
        question: "Which attribute marks a checkbox or radio button as selected by default?",
        options: ["checked","selected","active","default"],
        correctAnswer: "checked",
        hint: "Add the checked attribute (e.g. <input type=\"checkbox\" checked>)."
      },
      hinglish: {
        question: "Which attribute marks a checkbox or radio button as selected by default?",
        options: ["checked","selected","active","default"],
        correctAnswer: "checked",
        hint: "Add the checked attribute (e.g. <input type=\"checkbox\" checked>)."
      },
      hindi: {
        question: "Which attribute marks a checkbox or radio button as selected by default?",
        options: ["checked","selected","active","default"],
        correctAnswer: "checked",
        hint: "Add the checked attribute (e.g. <input type=\"checkbox\" checked>)."
      }
    },
    english: {
      kid: "* 1. type=\"checkbox\" allows selecting multiple independent options.\n* 2. Users can pick zero or many.\n* 3. checked attribute sets initially checked state.\n* 4. Each checkbox has a distinct value.\n* 5. Common for terms agreement and skills.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Checkboxes</title>\n</head>\n<body>\n\n  <h2>Select Coding Interests</h2>\n  <form>\n    <p>\n      <input type=\"checkbox\" id=\"htmlCheck\" name=\"skills\" value=\"html\" checked>\n      <label for=\"htmlCheck\">HTML5 Markup</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"cssCheck\" name=\"skills\" value=\"css\" checked>\n      <label for=\"cssCheck\">CSS3 Stylesheets</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"jsCheck\" name=\"skills\" value=\"js\">\n      <label for=\"jsCheck\">JavaScript ES6+</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"checkbox\" allows selecting multiple independent options.\n* 2. Users can pick zero or many.\n* 3. checked attribute sets initially checked state.\n* 4. Each checkbox has a distinct value.\n* 5. Common for terms agreement and skills.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Checkboxes</title>\n</head>\n<body>\n\n  <h2>Select Coding Interests</h2>\n  <form>\n    <p>\n      <input type=\"checkbox\" id=\"htmlCheck\" name=\"skills\" value=\"html\" checked>\n      <label for=\"htmlCheck\">HTML5 Markup</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"cssCheck\" name=\"skills\" value=\"css\" checked>\n      <label for=\"cssCheck\">CSS3 Stylesheets</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"jsCheck\" name=\"skills\" value=\"js\">\n      <label for=\"jsCheck\">JavaScript ES6+</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. type=\"checkbox\" एक से अधिक विकल्प चुनने देता है।\n* 2. यूजर शून्य या कई विकल्प चुन सकता है।\n* 3. checked अट्रिब्यूट से टिक पहले से लगा रहता है।\n* 4. हर चेकबॉक्स की अपनी अलग value होती है।\n* 5. नियमों की सहमति और स्किल्स चुनने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Checkboxes</title>\n</head>\n<body>\n\n  <h2>Select Coding Interests</h2>\n  <form>\n    <p>\n      <input type=\"checkbox\" id=\"htmlCheck\" name=\"skills\" value=\"html\" checked>\n      <label for=\"htmlCheck\">HTML5 Markup</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"cssCheck\" name=\"skills\" value=\"css\" checked>\n      <label for=\"cssCheck\">CSS3 Stylesheets</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"jsCheck\" name=\"skills\" value=\"js\">\n      <label for=\"jsCheck\">JavaScript ES6+</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"checkbox\" एक से अधिक विकल्प चुनने देता है।\n* 2. यूजर शून्य या कई विकल्प चुन सकता है।\n* 3. checked अट्रिब्यूट से टिक पहले से लगा रहता है।\n* 4. हर चेकबॉक्स की अपनी अलग value होती है।\n* 5. नियमों की सहमति और स्किल्स चुनने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Checkboxes</title>\n</head>\n<body>\n\n  <h2>Select Coding Interests</h2>\n  <form>\n    <p>\n      <input type=\"checkbox\" id=\"htmlCheck\" name=\"skills\" value=\"html\" checked>\n      <label for=\"htmlCheck\">HTML5 Markup</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"cssCheck\" name=\"skills\" value=\"css\" checked>\n      <label for=\"cssCheck\">CSS3 Stylesheets</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"jsCheck\" name=\"skills\" value=\"js\">\n      <label for=\"jsCheck\">JavaScript ES6+</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. type=\"checkbox\" एक से अधिक विकल्प चुनने देता है।\n* 2. यूजर शून्य या कई विकल्प चुन सकता है।\n* 3. checked अट्रिब्यूट से टिक पहले से लगा रहता है।\n* 4. हर चेकबॉक्स की अपनी अलग value होती है।\n* 5. नियमों की सहमति और स्किल्स चुनने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Checkboxes</title>\n</head>\n<body>\n\n  <h2>Select Coding Interests</h2>\n  <form>\n    <p>\n      <input type=\"checkbox\" id=\"htmlCheck\" name=\"skills\" value=\"html\" checked>\n      <label for=\"htmlCheck\">HTML5 Markup</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"cssCheck\" name=\"skills\" value=\"css\" checked>\n      <label for=\"cssCheck\">CSS3 Stylesheets</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"jsCheck\" name=\"skills\" value=\"js\">\n      <label for=\"jsCheck\">JavaScript ES6+</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"checkbox\" एक से अधिक विकल्प चुनने देता है।\n* 2. यूजर शून्य या कई विकल्प चुन सकता है।\n* 3. checked अट्रिब्यूट से टिक पहले से लगा रहता है।\n* 4. हर चेकबॉक्स की अपनी अलग value होती है।\n* 5. नियमों की सहमति और स्किल्स चुनने में उपयोगी है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Checkboxes</title>\n</head>\n<body>\n\n  <h2>Select Coding Interests</h2>\n  <form>\n    <p>\n      <input type=\"checkbox\" id=\"htmlCheck\" name=\"skills\" value=\"html\" checked>\n      <label for=\"htmlCheck\">HTML5 Markup</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"cssCheck\" name=\"skills\" value=\"css\" checked>\n      <label for=\"cssCheck\">CSS3 Stylesheets</label>\n    </p>\n    <p>\n      <input type=\"checkbox\" id=\"jsCheck\" name=\"skills\" value=\"js\">\n      <label for=\"jsCheck\">JavaScript ES6+</label>\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 86,
    slug: "dropdown-select-lists-option-attributes",
    title: "Dropdown Select Lists (<select> and <option>)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 160-163)",
    exercise: {
      english: {
        question: "Which tag represents an individual selectable entry inside a <select> dropdown?",
        options: ["<option>","<item>","<li>","<choice>"],
        correctAnswer: "<option>",
        hint: "<option> elements reside inside the <select> container."
      },
      hinglish: {
        question: "Which tag represents an individual selectable entry inside a <select> dropdown?",
        options: ["<option>","<item>","<li>","<choice>"],
        correctAnswer: "<option>",
        hint: "<option> elements reside inside the <select> container."
      },
      hindi: {
        question: "Which tag represents an individual selectable entry inside a <select> dropdown?",
        options: ["<option>","<item>","<li>","<choice>"],
        correctAnswer: "<option>",
        hint: "<option> elements reside inside the <select> container."
      }
    },
    english: {
      kid: "* 1. <select> creates dropdown option select menus.\n* 2. <option> tags define selectable items inside.\n* 3. selected attribute sets default chosen option.\n* 4. Saves massive screen space on forms.\n* 5. multiple attribute allows picking multiple values.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Dropdown List</title>\n</head>\n<body>\n\n  <h2>Select Your Country</h2>\n  <form>\n    <label for=\"countrySelect\">Location:</label>\n    <select id=\"countrySelect\" name=\"country\">\n      <option value=\"in\" selected>India</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n      <option value=\"ca\">Canada</option>\n    </select>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <select> creates dropdown option select menus.\n* 2. <option> tags define selectable items inside.\n* 3. selected attribute sets default chosen option.\n* 4. Saves massive screen space on forms.\n* 5. multiple attribute allows picking multiple values.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Dropdown List</title>\n</head>\n<body>\n\n  <h2>Select Your Country</h2>\n  <form>\n    <label for=\"countrySelect\">Location:</label>\n    <select id=\"countrySelect\" name=\"country\">\n      <option value=\"in\" selected>India</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n      <option value=\"ca\">Canada</option>\n    </select>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <select> ड्रॉपडाउन मेन्यू सूची बनाता है।\n* 2. <option> अंदर के विकल्पों को परिभाषित करता है।\n* 3. selected अट्रिब्यूट से डिफ़ॉल्ट विकल्प चुना रहता है।\n* 4. स्क्रीन पर बहुत कम जगह घेरता है।\n* 5. multiple अट्रिब्यूट से कई मान चुन सकते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Dropdown List</title>\n</head>\n<body>\n\n  <h2>Select Your Country</h2>\n  <form>\n    <label for=\"countrySelect\">Location:</label>\n    <select id=\"countrySelect\" name=\"country\">\n      <option value=\"in\" selected>India</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n      <option value=\"ca\">Canada</option>\n    </select>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <select> ड्रॉपडाउन मेन्यू सूची बनाता है।\n* 2. <option> अंदर के विकल्पों को परिभाषित करता है।\n* 3. selected अट्रिब्यूट से डिफ़ॉल्ट विकल्प चुना रहता है।\n* 4. स्क्रीन पर बहुत कम जगह घेरता है।\n* 5. multiple अट्रिब्यूट से कई मान चुन सकते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Dropdown List</title>\n</head>\n<body>\n\n  <h2>Select Your Country</h2>\n  <form>\n    <label for=\"countrySelect\">Location:</label>\n    <select id=\"countrySelect\" name=\"country\">\n      <option value=\"in\" selected>India</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n      <option value=\"ca\">Canada</option>\n    </select>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <select> ड्रॉपडाउन मेन्यू सूची बनाता है।\n* 2. <option> अंदर के विकल्पों को परिभाषित करता है।\n* 3. selected अट्रिब्यूट से डिफ़ॉल्ट विकल्प चुना रहता है।\n* 4. स्क्रीन पर बहुत कम जगह घेरता है।\n* 5. multiple अट्रिब्यूट से कई मान चुन सकते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Dropdown List</title>\n</head>\n<body>\n\n  <h2>Select Your Country</h2>\n  <form>\n    <label for=\"countrySelect\">Location:</label>\n    <select id=\"countrySelect\" name=\"country\">\n      <option value=\"in\" selected>India</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n      <option value=\"ca\">Canada</option>\n    </select>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <select> ड्रॉपडाउन मेन्यू सूची बनाता है।\n* 2. <option> अंदर के विकल्पों को परिभाषित करता है।\n* 3. selected अट्रिब्यूट से डिफ़ॉल्ट विकल्प चुना रहता है।\n* 4. स्क्रीन पर बहुत कम जगह घेरता है।\n* 5. multiple अट्रिब्यूट से कई मान चुन सकते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Dropdown List</title>\n</head>\n<body>\n\n  <h2>Select Your Country</h2>\n  <form>\n    <label for=\"countrySelect\">Location:</label>\n    <select id=\"countrySelect\" name=\"country\">\n      <option value=\"in\" selected>India</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n      <option value=\"ca\">Canada</option>\n    </select>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 87,
    slug: "multiline-textarea-rows-cols-settings",
    title: "Multi-line Input (<textarea>)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 164-166)",
    exercise: {
      english: {
        question: "Which tag is used for multi-line text input such as comments or feedback messages?",
        options: ["<textarea>","<input type=\"multiline\">","<textbox>","<text>"],
        correctAnswer: "<textarea>",
        hint: "Use <textarea rows=\"5\" cols=\"40\"></textarea> for multi-line text."
      },
      hinglish: {
        question: "Which tag is used for multi-line text input such as comments or feedback messages?",
        options: ["<textarea>","<input type=\"multiline\">","<textbox>","<text>"],
        correctAnswer: "<textarea>",
        hint: "Use <textarea rows=\"5\" cols=\"40\"></textarea> for multi-line text."
      },
      hindi: {
        question: "Which tag is used for multi-line text input such as comments or feedback messages?",
        options: ["<textarea>","<input type=\"multiline\">","<textbox>","<text>"],
        correctAnswer: "<textarea>",
        hint: "Use <textarea rows=\"5\" cols=\"40\"></textarea> for multi-line text."
      }
    },
    english: {
      kid: "* 1. <textarea> creates multi-line text input areas.\n* 2. rows sets visible line height count.\n* 3. cols sets visible character width count.\n* 4. Default text goes between opening/closing tags.\n* 5. Ideal for comments, feedback, and reviews.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Textarea</title>\n</head>\n<body>\n\n  <h2>Send Us Feedback</h2>\n  <form>\n    <p>\n      <label for=\"comments\">Your Message:</label><br>\n      <textarea id=\"comments\" name=\"comments\" rows=\"5\" cols=\"45\">Type your question or feedback here...</textarea>\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <textarea> creates multi-line text input areas.\n* 2. rows sets visible line height count.\n* 3. cols sets visible character width count.\n* 4. Default text goes between opening/closing tags.\n* 5. Ideal for comments, feedback, and reviews.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Textarea</title>\n</head>\n<body>\n\n  <h2>Send Us Feedback</h2>\n  <form>\n    <p>\n      <label for=\"comments\">Your Message:</label><br>\n      <textarea id=\"comments\" name=\"comments\" rows=\"5\" cols=\"45\">Type your question or feedback here...</textarea>\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <textarea> कई लाइनों का लंबा टेक्स्ट बॉक्स बनाता है।\n* 2. rows दिखाई देने वाली लाइनों की ऊंचाई तय करता है।\n* 3. cols दिखाई देने वाली चौड़ाई तय करता है।\n* 4. डिफ़ॉल्ट टेक्स्ट टैग्स के बीच में लिखा जाता है।\n* 5. फीडबैक, संदेश और समीक्षा लिखने के लिए उत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Textarea</title>\n</head>\n<body>\n\n  <h2>Send Us Feedback</h2>\n  <form>\n    <p>\n      <label for=\"comments\">Your Message:</label><br>\n      <textarea id=\"comments\" name=\"comments\" rows=\"5\" cols=\"45\">Type your question or feedback here...</textarea>\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <textarea> कई लाइनों का लंबा टेक्स्ट बॉक्स बनाता है।\n* 2. rows दिखाई देने वाली लाइनों की ऊंचाई तय करता है।\n* 3. cols दिखाई देने वाली चौड़ाई तय करता है।\n* 4. डिफ़ॉल्ट टेक्स्ट टैग्स के बीच में लिखा जाता है।\n* 5. फीडबैक, संदेश और समीक्षा लिखने के लिए उत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Textarea</title>\n</head>\n<body>\n\n  <h2>Send Us Feedback</h2>\n  <form>\n    <p>\n      <label for=\"comments\">Your Message:</label><br>\n      <textarea id=\"comments\" name=\"comments\" rows=\"5\" cols=\"45\">Type your question or feedback here...</textarea>\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <textarea> कई लाइनों का लंबा टेक्स्ट बॉक्स बनाता है।\n* 2. rows दिखाई देने वाली लाइनों की ऊंचाई तय करता है।\n* 3. cols दिखाई देने वाली चौड़ाई तय करता है।\n* 4. डिफ़ॉल्ट टेक्स्ट टैग्स के बीच में लिखा जाता है।\n* 5. फीडबैक, संदेश और समीक्षा लिखने के लिए उत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Textarea</title>\n</head>\n<body>\n\n  <h2>Send Us Feedback</h2>\n  <form>\n    <p>\n      <label for=\"comments\">Your Message:</label><br>\n      <textarea id=\"comments\" name=\"comments\" rows=\"5\" cols=\"45\">Type your question or feedback here...</textarea>\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <textarea> कई लाइनों का लंबा टेक्स्ट बॉक्स बनाता है।\n* 2. rows दिखाई देने वाली लाइनों की ऊंचाई तय करता है।\n* 3. cols दिखाई देने वाली चौड़ाई तय करता है।\n* 4. डिफ़ॉल्ट टेक्स्ट टैग्स के बीच में लिखा जाता है।\n* 5. फीडबैक, संदेश और समीक्षा लिखने के लिए उत्तम है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Textarea</title>\n</head>\n<body>\n\n  <h2>Send Us Feedback</h2>\n  <form>\n    <p>\n      <label for=\"comments\">Your Message:</label><br>\n      <textarea id=\"comments\" name=\"comments\" rows=\"5\" cols=\"45\">Type your question or feedback here...</textarea>\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 88,
    slug: "buttons-submit-button-reset-types",
    title: "Buttons (type=\"submit\", \"reset\", \"button\")",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 167-169)",
    exercise: {
      english: {
        question: "Which button type automatically submits the form data to the server when clicked?",
        options: ["type=\"submit\"","type=\"send\"","type=\"post\"","type=\"enter\""],
        correctAnswer: "type=\"submit\"",
        hint: "type=\"submit\" triggers the form submission action."
      },
      hinglish: {
        question: "Which button type automatically submits the form data to the server when clicked?",
        options: ["type=\"submit\"","type=\"send\"","type=\"post\"","type=\"enter\""],
        correctAnswer: "type=\"submit\"",
        hint: "type=\"submit\" triggers the form submission action."
      },
      hindi: {
        question: "Which button type automatically submits the form data to the server when clicked?",
        options: ["type=\"submit\"","type=\"send\"","type=\"post\"","type=\"enter\""],
        correctAnswer: "type=\"submit\"",
        hint: "type=\"submit\" triggers the form submission action."
      }
    },
    english: {
      kid: "* 1. <button> creates clickable interactive form buttons.\n* 2. type=\"submit\" sends form data to server.\n* 3. type=\"reset\" restores initial form values.\n* 4. type=\"button\" creates neutral clickable button.\n* 5. Can contain images and formatted text.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Buttons</title>\n</head>\n<body>\n\n  <h2>Complete Registration</h2>\n  <form action=\"/submit\" method=\"post\">\n    <p>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" id=\"name\" name=\"name\">\n    </p>\n    <button type=\"submit\">Submit Form</button>\n    <button type=\"reset\">Reset Form</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <button> creates clickable interactive form buttons.\n* 2. type=\"submit\" sends form data to server.\n* 3. type=\"reset\" restores initial form values.\n* 4. type=\"button\" creates neutral clickable button.\n* 5. Can contain images and formatted text.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Buttons</title>\n</head>\n<body>\n\n  <h2>Complete Registration</h2>\n  <form action=\"/submit\" method=\"post\">\n    <p>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" id=\"name\" name=\"name\">\n    </p>\n    <button type=\"submit\">Submit Form</button>\n    <button type=\"reset\">Reset Form</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <button> क्लिक करने योग्य फॉर्म बटन बनाता है।\n* 2. type=\"submit\" फॉर्म डेटा सर्वर को भेजता है।\n* 3. type=\"reset\" फॉर्म के सारे बॉक्स खाली करता है।\n* 4. type=\"button\" साधारण क्लिक बटन बनाता है।\n* 5. इसके अंदर टेक्स्ट और तस्वीरें दोनों आ सकते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Buttons</title>\n</head>\n<body>\n\n  <h2>Complete Registration</h2>\n  <form action=\"/submit\" method=\"post\">\n    <p>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" id=\"name\" name=\"name\">\n    </p>\n    <button type=\"submit\">Submit Form</button>\n    <button type=\"reset\">Reset Form</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <button> क्लिक करने योग्य फॉर्म बटन बनाता है।\n* 2. type=\"submit\" फॉर्म डेटा सर्वर को भेजता है।\n* 3. type=\"reset\" फॉर्म के सारे बॉक्स खाली करता है।\n* 4. type=\"button\" साधारण क्लिक बटन बनाता है।\n* 5. इसके अंदर टेक्स्ट और तस्वीरें दोनों आ सकते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Buttons</title>\n</head>\n<body>\n\n  <h2>Complete Registration</h2>\n  <form action=\"/submit\" method=\"post\">\n    <p>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" id=\"name\" name=\"name\">\n    </p>\n    <button type=\"submit\">Submit Form</button>\n    <button type=\"reset\">Reset Form</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <button> क्लिक करने योग्य फॉर्म बटन बनाता है।\n* 2. type=\"submit\" फॉर्म डेटा सर्वर को भेजता है।\n* 3. type=\"reset\" फॉर्म के सारे बॉक्स खाली करता है।\n* 4. type=\"button\" साधारण क्लिक बटन बनाता है।\n* 5. इसके अंदर टेक्स्ट और तस्वीरें दोनों आ सकते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Buttons</title>\n</head>\n<body>\n\n  <h2>Complete Registration</h2>\n  <form action=\"/submit\" method=\"post\">\n    <p>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" id=\"name\" name=\"name\">\n    </p>\n    <button type=\"submit\">Submit Form</button>\n    <button type=\"reset\">Reset Form</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <button> क्लिक करने योग्य फॉर्म बटन बनाता है।\n* 2. type=\"submit\" फॉर्म डेटा सर्वर को भेजता है।\n* 3. type=\"reset\" फॉर्म के सारे बॉक्स खाली करता है।\n* 4. type=\"button\" साधारण क्लिक बटन बनाता है।\n* 5. इसके अंदर टेक्स्ट और तस्वीरें दोनों आ सकते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Buttons</title>\n</head>\n<body>\n\n  <h2>Complete Registration</h2>\n  <form action=\"/submit\" method=\"post\">\n    <p>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" id=\"name\" name=\"name\">\n    </p>\n    <button type=\"submit\">Submit Form</button>\n    <button type=\"reset\">Reset Form</button>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 89,
    slug: "binding-input-labels-label-container",
    title: "Binding Input Labels (<label> wrapping)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 170-171)",
    exercise: {
      english: {
        question: "How can you link a label and input together without specifying id and for attributes?",
        options: ["Wrap the <input> element directly inside the <label> tags","Put them in the same row of a table","Use the link=\"true\" attribute","Group them in a <fieldset>"],
        correctAnswer: "Wrap the <input> element directly inside the <label> tags",
        hint: "Nesting the input inside <label> creates implicit association."
      },
      hinglish: {
        question: "How can you link a label and input together without specifying id and for attributes?",
        options: ["Wrap the <input> element directly inside the <label> tags","Put them in the same row of a table","Use the link=\"true\" attribute","Group them in a <fieldset>"],
        correctAnswer: "Wrap the <input> element directly inside the <label> tags",
        hint: "Nesting the input inside <label> creates implicit association."
      },
      hindi: {
        question: "How can you link a label and input together without specifying id and for attributes?",
        options: ["Wrap the <input> element directly inside the <label> tags","Put them in the same row of a table","Use the link=\"true\" attribute","Group them in a <fieldset>"],
        correctAnswer: "Wrap the <input> element directly inside the <label> tags",
        hint: "Nesting the input inside <label> creates implicit association."
      }
    },
    english: {
      kid: "* 1. Wrapping inputs inside <label> binds them.\n* 2. Implicit binding does not require id.\n* 3. Improves code simplicity for simple checkboxes.\n* 4. Clicking any label text toggles input.\n* 5. Fully supported by all assistive technologies.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Implicit Labeling</title>\n</head>\n<body>\n\n  <h2>Terms and Conditions</h2>\n  <form>\n    <!-- Implicit Label Association without id -->\n    <label>\n      <input type=\"checkbox\" name=\"agree\" value=\"yes\">\n      I agree to the Nextsem Academy Terms of Service\n    </label>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. Wrapping inputs inside <label> binds them.\n* 2. Implicit binding does not require id.\n* 3. Improves code simplicity for simple checkboxes.\n* 4. Clicking any label text toggles input.\n* 5. Fully supported by all assistive technologies.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Implicit Labeling</title>\n</head>\n<body>\n\n  <h2>Terms and Conditions</h2>\n  <form>\n    <!-- Implicit Label Association without id -->\n    <label>\n      <input type=\"checkbox\" name=\"agree\" value=\"yes\">\n      I agree to the Nextsem Academy Terms of Service\n    </label>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <label> के अंदर इनपुट रखने से दोनों जुड़ जाते हैं।\n* 2. इस तरीके में id लगाने की जरूरत नहीं होती।\n* 3. छोटे चेकबॉक्स के लिए कोड आसान बनाता है।\n* 4. लेबल टेक्स्ट पर क्लिक करने से चेकबॉक्स टिक होता है।\n* 5. सभी स्क्रीन रीडर्स इसे पूरी तरह समझते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Implicit Labeling</title>\n</head>\n<body>\n\n  <h2>Terms and Conditions</h2>\n  <form>\n    <!-- Implicit Label Association without id -->\n    <label>\n      <input type=\"checkbox\" name=\"agree\" value=\"yes\">\n      I agree to the Nextsem Academy Terms of Service\n    </label>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <label> के अंदर इनपुट रखने से दोनों जुड़ जाते हैं।\n* 2. इस तरीके में id लगाने की जरूरत नहीं होती।\n* 3. छोटे चेकबॉक्स के लिए कोड आसान बनाता है।\n* 4. लेबल टेक्स्ट पर क्लिक करने से चेकबॉक्स टिक होता है।\n* 5. सभी स्क्रीन रीडर्स इसे पूरी तरह समझते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Implicit Labeling</title>\n</head>\n<body>\n\n  <h2>Terms and Conditions</h2>\n  <form>\n    <!-- Implicit Label Association without id -->\n    <label>\n      <input type=\"checkbox\" name=\"agree\" value=\"yes\">\n      I agree to the Nextsem Academy Terms of Service\n    </label>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <label> के अंदर इनपुट रखने से दोनों जुड़ जाते हैं।\n* 2. इस तरीके में id लगाने की जरूरत नहीं होती।\n* 3. छोटे चेकबॉक्स के लिए कोड आसान बनाता है।\n* 4. लेबल टेक्स्ट पर क्लिक करने से चेकबॉक्स टिक होता है।\n* 5. सभी स्क्रीन रीडर्स इसे पूरी तरह समझते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Implicit Labeling</title>\n</head>\n<body>\n\n  <h2>Terms and Conditions</h2>\n  <form>\n    <!-- Implicit Label Association without id -->\n    <label>\n      <input type=\"checkbox\" name=\"agree\" value=\"yes\">\n      I agree to the Nextsem Academy Terms of Service\n    </label>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <label> के अंदर इनपुट रखने से दोनों जुड़ जाते हैं।\n* 2. इस तरीके में id लगाने की जरूरत नहीं होती।\n* 3. छोटे चेकबॉक्स के लिए कोड आसान बनाता है।\n* 4. लेबल टेक्स्ट पर क्लिक करने से चेकबॉक्स टिक होता है।\n* 5. सभी स्क्रीन रीडर्स इसे पूरी तरह समझते हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Implicit Labeling</title>\n</head>\n<body>\n\n  <h2>Terms and Conditions</h2>\n  <form>\n    <!-- Implicit Label Association without id -->\n    <label>\n      <input type=\"checkbox\" name=\"agree\" value=\"yes\">\n      I agree to the Nextsem Academy Terms of Service\n    </label>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 90,
    slug: "form-groups-fieldset-legend-elements",
    title: "Form Groups (<fieldset> and <legend>)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 172-175)",
    exercise: {
      english: {
        question: "Which element provides a caption title for a <fieldset> form container?",
        options: ["<legend>","<caption>","<title>","<heading>"],
        correctAnswer: "<legend>",
        hint: "<legend> must be the first child inside a <fieldset>."
      },
      hinglish: {
        question: "Which element provides a caption title for a <fieldset> form container?",
        options: ["<legend>","<caption>","<title>","<heading>"],
        correctAnswer: "<legend>",
        hint: "<legend> must be the first child inside a <fieldset>."
      },
      hindi: {
        question: "Which element provides a caption title for a <fieldset> form container?",
        options: ["<legend>","<caption>","<title>","<heading>"],
        correctAnswer: "<legend>",
        hint: "<legend> must be the first child inside a <fieldset>."
      }
    },
    english: {
      kid: "* 1. <fieldset> groups related inputs with borders.\n* 2. <legend> provides a caption title header.\n* 3. Organizes large multi-step form structures.\n* 4. Screen readers announce group purpose clearly.\n* 5. Must be first child of <fieldset>.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Fieldset and Legend</title>\n</head>\n<body>\n\n  <h2>User Profile Setup</h2>\n  <form>\n    <fieldset>\n      <legend>Personal Details</legend>\n      <p><label>First Name: <input type=\"text\" name=\"fname\"></label></p>\n      <p><label>Last Name: <input type=\"text\" name=\"lname\"></label></p>\n    </fieldset>\n\n    <fieldset>\n      <legend>Account Security</legend>\n      <p><label>Password: <input type=\"password\" name=\"pwd\"></label></p>\n    </fieldset>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <fieldset> groups related inputs with borders.\n* 2. <legend> provides a caption title header.\n* 3. Organizes large multi-step form structures.\n* 4. Screen readers announce group purpose clearly.\n* 5. Must be first child of <fieldset>.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Fieldset and Legend</title>\n</head>\n<body>\n\n  <h2>User Profile Setup</h2>\n  <form>\n    <fieldset>\n      <legend>Personal Details</legend>\n      <p><label>First Name: <input type=\"text\" name=\"fname\"></label></p>\n      <p><label>Last Name: <input type=\"text\" name=\"lname\"></label></p>\n    </fieldset>\n\n    <fieldset>\n      <legend>Account Security</legend>\n      <p><label>Password: <input type=\"password\" name=\"pwd\"></label></p>\n    </fieldset>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <fieldset> संबंधित इनपुट्स को बॉर्डर में घेरता है।\n* 2. <legend> उस ग्रुप का मुख्य शीर्षक बनता है।\n* 3. बड़े और लंबे फॉर्म को व्यवस्थित करता है।\n* 4. स्क्रीन रीडर ग्रुप का नाम स्पष्ट पढ़कर सुनाते हैं।\n* 5. <fieldset> के अंदर सबसे पहला टैग होना चाहिए।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Fieldset and Legend</title>\n</head>\n<body>\n\n  <h2>User Profile Setup</h2>\n  <form>\n    <fieldset>\n      <legend>Personal Details</legend>\n      <p><label>First Name: <input type=\"text\" name=\"fname\"></label></p>\n      <p><label>Last Name: <input type=\"text\" name=\"lname\"></label></p>\n    </fieldset>\n\n    <fieldset>\n      <legend>Account Security</legend>\n      <p><label>Password: <input type=\"password\" name=\"pwd\"></label></p>\n    </fieldset>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <fieldset> संबंधित इनपुट्स को बॉर्डर में घेरता है।\n* 2. <legend> उस ग्रुप का मुख्य शीर्षक बनता है।\n* 3. बड़े और लंबे फॉर्म को व्यवस्थित करता है।\n* 4. स्क्रीन रीडर ग्रुप का नाम स्पष्ट पढ़कर सुनाते हैं।\n* 5. <fieldset> के अंदर सबसे पहला टैग होना चाहिए।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Fieldset and Legend</title>\n</head>\n<body>\n\n  <h2>User Profile Setup</h2>\n  <form>\n    <fieldset>\n      <legend>Personal Details</legend>\n      <p><label>First Name: <input type=\"text\" name=\"fname\"></label></p>\n      <p><label>Last Name: <input type=\"text\" name=\"lname\"></label></p>\n    </fieldset>\n\n    <fieldset>\n      <legend>Account Security</legend>\n      <p><label>Password: <input type=\"password\" name=\"pwd\"></label></p>\n    </fieldset>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <fieldset> संबंधित इनपुट्स को बॉर्डर में घेरता है।\n* 2. <legend> उस ग्रुप का मुख्य शीर्षक बनता है।\n* 3. बड़े और लंबे फॉर्म को व्यवस्थित करता है।\n* 4. स्क्रीन रीडर ग्रुप का नाम स्पष्ट पढ़कर सुनाते हैं।\n* 5. <fieldset> के अंदर सबसे पहला टैग होना चाहिए।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Fieldset and Legend</title>\n</head>\n<body>\n\n  <h2>User Profile Setup</h2>\n  <form>\n    <fieldset>\n      <legend>Personal Details</legend>\n      <p><label>First Name: <input type=\"text\" name=\"fname\"></label></p>\n      <p><label>Last Name: <input type=\"text\" name=\"lname\"></label></p>\n    </fieldset>\n\n    <fieldset>\n      <legend>Account Security</legend>\n      <p><label>Password: <input type=\"password\" name=\"pwd\"></label></p>\n    </fieldset>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <fieldset> संबंधित इनपुट्स को बॉर्डर में घेरता है।\n* 2. <legend> उस ग्रुप का मुख्य शीर्षक बनता है।\n* 3. बड़े और लंबे फॉर्म को व्यवस्थित करता है।\n* 4. स्क्रीन रीडर ग्रुप का नाम स्पष्ट पढ़कर सुनाते हैं।\n* 5. <fieldset> के अंदर सबसे पहला टैग होना चाहिए।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Fieldset and Legend</title>\n</head>\n<body>\n\n  <h2>User Profile Setup</h2>\n  <form>\n    <fieldset>\n      <legend>Personal Details</legend>\n      <p><label>First Name: <input type=\"text\" name=\"fname\"></label></p>\n      <p><label>Last Name: <input type=\"text\" name=\"lname\"></label></p>\n    </fieldset>\n\n    <fieldset>\n      <legend>Account Security</legend>\n      <p><label>Password: <input type=\"password\" name=\"pwd\"></label></p>\n    </fieldset>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 91,
    slug: "form-validation-required-maxlength-minlength",
    title: "Form Field Required Validation",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    exercise: {
      english: {
        question: "Which attribute ensures a user cannot submit a form without filling in the input?",
        options: ["required","mandatory","validate","mustfill"],
        correctAnswer: "required",
        hint: "Adding required prevents submission until valid input is entered."
      },
      hinglish: {
        question: "Which attribute ensures a user cannot submit a form without filling in the input?",
        options: ["required","mandatory","validate","mustfill"],
        correctAnswer: "required",
        hint: "Adding required prevents submission until valid input is entered."
      },
      hindi: {
        question: "Which attribute ensures a user cannot submit a form without filling in the input?",
        options: ["required","mandatory","validate","mustfill"],
        correctAnswer: "required",
        hint: "Adding required prevents submission until valid input is entered."
      }
    },
    english: {
      kid: "* 1. required prevents submitting empty form fields.\n* 2. minlength sets minimum character length needed.\n* 3. maxlength stops typing beyond character limit.\n* 4. Browser shows native error tooltip bubbles.\n* 5. 100% native validation without JavaScript.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Validation</title>\n</head>\n<body>\n\n  <h2>Create Your Account</h2>\n  <form action=\"/register\" method=\"post\">\n    <p>\n      <label for=\"uname\">Full Name (Required, 3-20 chars):</label><br>\n      <input type=\"text\" id=\"uname\" name=\"fullname\" required minlength=\"3\" maxlength=\"20\">\n    </p>\n    <button type=\"submit\">Submit Registration</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. required prevents submitting empty form fields.\n* 2. minlength sets minimum character length needed.\n* 3. maxlength stops typing beyond character limit.\n* 4. Browser shows native error tooltip bubbles.\n* 5. 100% native validation without JavaScript.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Validation</title>\n</head>\n<body>\n\n  <h2>Create Your Account</h2>\n  <form action=\"/register\" method=\"post\">\n    <p>\n      <label for=\"uname\">Full Name (Required, 3-20 chars):</label><br>\n      <input type=\"text\" id=\"uname\" name=\"fullname\" required minlength=\"3\" maxlength=\"20\">\n    </p>\n    <button type=\"submit\">Submit Registration</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. required खाली फॉर्म सबमिट होने से रोकता है।\n* 2. minlength कम से कम अक्षरों की सीमा तय करता है।\n* 3. maxlength अधिकतम अक्षरों की सीमा तय करता है।\n* 4. ब्राउज़र अपने आप एरर चेतावनी बबल दिखाता है।\n* 5. बिना किसी जावास्क्रिप्ट के काम करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Validation</title>\n</head>\n<body>\n\n  <h2>Create Your Account</h2>\n  <form action=\"/register\" method=\"post\">\n    <p>\n      <label for=\"uname\">Full Name (Required, 3-20 chars):</label><br>\n      <input type=\"text\" id=\"uname\" name=\"fullname\" required minlength=\"3\" maxlength=\"20\">\n    </p>\n    <button type=\"submit\">Submit Registration</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. required खाली फॉर्म सबमिट होने से रोकता है।\n* 2. minlength कम से कम अक्षरों की सीमा तय करता है।\n* 3. maxlength अधिकतम अक्षरों की सीमा तय करता है।\n* 4. ब्राउज़र अपने आप एरर चेतावनी बबल दिखाता है।\n* 5. बिना किसी जावास्क्रिप्ट के काम करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Validation</title>\n</head>\n<body>\n\n  <h2>Create Your Account</h2>\n  <form action=\"/register\" method=\"post\">\n    <p>\n      <label for=\"uname\">Full Name (Required, 3-20 chars):</label><br>\n      <input type=\"text\" id=\"uname\" name=\"fullname\" required minlength=\"3\" maxlength=\"20\">\n    </p>\n    <button type=\"submit\">Submit Registration</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. required खाली फॉर्म सबमिट होने से रोकता है।\n* 2. minlength कम से कम अक्षरों की सीमा तय करता है।\n* 3. maxlength अधिकतम अक्षरों की सीमा तय करता है।\n* 4. ब्राउज़र अपने आप एरर चेतावनी बबल दिखाता है।\n* 5. बिना किसी जावास्क्रिप्ट के काम करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Validation</title>\n</head>\n<body>\n\n  <h2>Create Your Account</h2>\n  <form action=\"/register\" method=\"post\">\n    <p>\n      <label for=\"uname\">Full Name (Required, 3-20 chars):</label><br>\n      <input type=\"text\" id=\"uname\" name=\"fullname\" required minlength=\"3\" maxlength=\"20\">\n    </p>\n    <button type=\"submit\">Submit Registration</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. required खाली फॉर्म सबमिट होने से रोकता है।\n* 2. minlength कम से कम अक्षरों की सीमा तय करता है।\n* 3. maxlength अधिकतम अक्षरों की सीमा तय करता है।\n* 4. ब्राउज़र अपने आप एरर चेतावनी बबल दिखाता है।\n* 5. बिना किसी जावास्क्रिप्ट के काम करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Form Validation</title>\n</head>\n<body>\n\n  <h2>Create Your Account</h2>\n  <form action=\"/register\" method=\"post\">\n    <p>\n      <label for=\"uname\">Full Name (Required, 3-20 chars):</label><br>\n      <input type=\"text\" id=\"uname\" name=\"fullname\" required minlength=\"3\" maxlength=\"20\">\n    </p>\n    <button type=\"submit\">Submit Registration</button>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 92,
    slug: "regex-pattern-matching-validation",
    title: "Regex Pattern Matching (pattern attribute)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    exercise: {
      english: {
        question: "Which attribute validates an input's value against a regular expression pattern?",
        options: ["pattern","regex","format","mask"],
        correctAnswer: "pattern",
        hint: "Use pattern=\"[0-9]{6}\" to validate numerical format constraints."
      },
      hinglish: {
        question: "Which attribute validates an input's value against a regular expression pattern?",
        options: ["pattern","regex","format","mask"],
        correctAnswer: "pattern",
        hint: "Use pattern=\"[0-9]{6}\" to validate numerical format constraints."
      },
      hindi: {
        question: "Which attribute validates an input's value against a regular expression pattern?",
        options: ["pattern","regex","format","mask"],
        correctAnswer: "pattern",
        hint: "Use pattern=\"[0-9]{6}\" to validate numerical format constraints."
      }
    },
    english: {
      kid: "* 1. pattern checks inputs against regular expressions.\n* 2. Validates PIN codes, phone formats, IDs.\n* 3. Submissions blocked if pattern check fails.\n* 4. Use title attribute for error instructions.\n* 5. Native browser regex evaluation on submit.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Pattern Validation</title>\n</head>\n<body>\n\n  <h2>Postal PIN Code Verification</h2>\n  <form>\n    <p>\n      <label for=\"pincode\">6-Digit PIN Code:</label><br>\n      <input type=\"text\" id=\"pincode\" name=\"pin\" pattern=\"[0-9]{6}\" title=\"Enter exactly 6 digits\" required>\n    </p>\n    <button type=\"submit\">Verify Code</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. pattern checks inputs against regular expressions.\n* 2. Validates PIN codes, phone formats, IDs.\n* 3. Submissions blocked if pattern check fails.\n* 4. Use title attribute for error instructions.\n* 5. Native browser regex evaluation on submit.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Pattern Validation</title>\n</head>\n<body>\n\n  <h2>Postal PIN Code Verification</h2>\n  <form>\n    <p>\n      <label for=\"pincode\">6-Digit PIN Code:</label><br>\n      <input type=\"text\" id=\"pincode\" name=\"pin\" pattern=\"[0-9]{6}\" title=\"Enter exactly 6 digits\" required>\n    </p>\n    <button type=\"submit\">Verify Code</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. pattern रेगुलर एक्सप्रेशन (Regex) से जांच करता है।\n* 2. पिन कोड, फोन नंबर और आईडी का फॉर्मेट जांचता है।\n* 3. फॉर्मेट गलत होने पर फॉर्म सबमिट नहीं होता।\n* 4. title अट्रिब्यूट से यूजर को सही निर्देश दें।\n* 5. ब्राउज़र बिना स्क्रिप्ट के खुद जांच करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Pattern Validation</title>\n</head>\n<body>\n\n  <h2>Postal PIN Code Verification</h2>\n  <form>\n    <p>\n      <label for=\"pincode\">6-Digit PIN Code:</label><br>\n      <input type=\"text\" id=\"pincode\" name=\"pin\" pattern=\"[0-9]{6}\" title=\"Enter exactly 6 digits\" required>\n    </p>\n    <button type=\"submit\">Verify Code</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. pattern रेगुलर एक्सप्रेशन (Regex) से जांच करता है।\n* 2. पिन कोड, फोन नंबर और आईडी का फॉर्मेट जांचता है।\n* 3. फॉर्मेट गलत होने पर फॉर्म सबमिट नहीं होता।\n* 4. title अट्रिब्यूट से यूजर को सही निर्देश दें।\n* 5. ब्राउज़र बिना स्क्रिप्ट के खुद जांच करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Pattern Validation</title>\n</head>\n<body>\n\n  <h2>Postal PIN Code Verification</h2>\n  <form>\n    <p>\n      <label for=\"pincode\">6-Digit PIN Code:</label><br>\n      <input type=\"text\" id=\"pincode\" name=\"pin\" pattern=\"[0-9]{6}\" title=\"Enter exactly 6 digits\" required>\n    </p>\n    <button type=\"submit\">Verify Code</button>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. pattern रेगुलर एक्सप्रेशन (Regex) से जांच करता है।\n* 2. पिन कोड, फोन नंबर और आईडी का फॉर्मेट जांचता है।\n* 3. फॉर्मेट गलत होने पर फॉर्म सबमिट नहीं होता।\n* 4. title अट्रिब्यूट से यूजर को सही निर्देश दें।\n* 5. ब्राउज़र बिना स्क्रिप्ट के खुद जांच करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Pattern Validation</title>\n</head>\n<body>\n\n  <h2>Postal PIN Code Verification</h2>\n  <form>\n    <p>\n      <label for=\"pincode\">6-Digit PIN Code:</label><br>\n      <input type=\"text\" id=\"pincode\" name=\"pin\" pattern=\"[0-9]{6}\" title=\"Enter exactly 6 digits\" required>\n    </p>\n    <button type=\"submit\">Verify Code</button>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. pattern रेगुलर एक्सप्रेशन (Regex) से जांच करता है।\n* 2. पिन कोड, फोन नंबर और आईडी का फॉर्मेट जांचता है।\n* 3. फॉर्मेट गलत होने पर फॉर्म सबमिट नहीं होता।\n* 4. title अट्रिब्यूट से यूजर को सही निर्देश दें।\n* 5. ब्राउज़र बिना स्क्रिप्ट के खुद जांच करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Pattern Validation</title>\n</head>\n<body>\n\n  <h2>Postal PIN Code Verification</h2>\n  <form>\n    <p>\n      <label for=\"pincode\">6-Digit PIN Code:</label><br>\n      <input type=\"text\" id=\"pincode\" name=\"pin\" pattern=\"[0-9]{6}\" title=\"Enter exactly 6 digits\" required>\n    </p>\n    <button type=\"submit\">Verify Code</button>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 93,
    slug: "html5-numeric-ranges-type-number-range",
    title: "HTML5 Numeric Ranges (type=\"number\" & \"range\")",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    exercise: {
      english: {
        question: "Which input type renders a visual slider bar on screen?",
        options: ["type=\"range\"","type=\"slider\"","type=\"number\"","type=\"bar\""],
        correctAnswer: "type=\"range\"",
        hint: "type=\"range\" creates a slider control for selecting a number."
      },
      hinglish: {
        question: "Which input type renders a visual slider bar on screen?",
        options: ["type=\"range\"","type=\"slider\"","type=\"number\"","type=\"bar\""],
        correctAnswer: "type=\"range\"",
        hint: "type=\"range\" creates a slider control for selecting a number."
      },
      hindi: {
        question: "Which input type renders a visual slider bar on screen?",
        options: ["type=\"range\"","type=\"slider\"","type=\"number\"","type=\"bar\""],
        correctAnswer: "type=\"range\"",
        hint: "type=\"range\" creates a slider control for selecting a number."
      }
    },
    english: {
      kid: "* 1. type=\"number\" creates numeric spinner input boxes.\n* 2. type=\"range\" creates interactive slider controls.\n* 3. min and max define permitted bounds.\n* 4. step specifies allowed numeric increments.\n* 5. Mobile keyboards switch to number pads.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Numeric Inputs</title>\n</head>\n<body>\n\n  <h2>Developer Preferences</h2>\n  <form>\n    <p>\n      <label for=\"age\">Age (18 to 65):</label>\n      <input type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"65\" value=\"21\">\n    </p>\n    <p>\n      <label for=\"volume\">Volume Slider (0 to 100):</label>\n      <input type=\"range\" id=\"volume\" name=\"vol\" min=\"0\" max=\"100\" value=\"75\">\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"number\" creates numeric spinner input boxes.\n* 2. type=\"range\" creates interactive slider controls.\n* 3. min and max define permitted bounds.\n* 4. step specifies allowed numeric increments.\n* 5. Mobile keyboards switch to number pads.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Numeric Inputs</title>\n</head>\n<body>\n\n  <h2>Developer Preferences</h2>\n  <form>\n    <p>\n      <label for=\"age\">Age (18 to 65):</label>\n      <input type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"65\" value=\"21\">\n    </p>\n    <p>\n      <label for=\"volume\">Volume Slider (0 to 100):</label>\n      <input type=\"range\" id=\"volume\" name=\"vol\" min=\"0\" max=\"100\" value=\"75\">\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. type=\"number\" नंबर टाइप करने का बॉक्स बनाता है।\n* 2. type=\"range\" स्लाइडर बार कंट्रोल बनाता है।\n* 3. min और max न्यूनतम और अधिकतम सीमा तय करते हैं।\n* 4. step आगे बढ़ने की संख्या (इंक्रीमेंट) तय करता है।\n* 5. मोबाइल में सीधे नंबर कीपैड खुलता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Numeric Inputs</title>\n</head>\n<body>\n\n  <h2>Developer Preferences</h2>\n  <form>\n    <p>\n      <label for=\"age\">Age (18 to 65):</label>\n      <input type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"65\" value=\"21\">\n    </p>\n    <p>\n      <label for=\"volume\">Volume Slider (0 to 100):</label>\n      <input type=\"range\" id=\"volume\" name=\"vol\" min=\"0\" max=\"100\" value=\"75\">\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"number\" नंबर टाइप करने का बॉक्स बनाता है।\n* 2. type=\"range\" स्लाइडर बार कंट्रोल बनाता है।\n* 3. min और max न्यूनतम और अधिकतम सीमा तय करते हैं।\n* 4. step आगे बढ़ने की संख्या (इंक्रीमेंट) तय करता है।\n* 5. मोबाइल में सीधे नंबर कीपैड खुलता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Numeric Inputs</title>\n</head>\n<body>\n\n  <h2>Developer Preferences</h2>\n  <form>\n    <p>\n      <label for=\"age\">Age (18 to 65):</label>\n      <input type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"65\" value=\"21\">\n    </p>\n    <p>\n      <label for=\"volume\">Volume Slider (0 to 100):</label>\n      <input type=\"range\" id=\"volume\" name=\"vol\" min=\"0\" max=\"100\" value=\"75\">\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. type=\"number\" नंबर टाइप करने का बॉक्स बनाता है।\n* 2. type=\"range\" स्लाइडर बार कंट्रोल बनाता है।\n* 3. min और max न्यूनतम और अधिकतम सीमा तय करते हैं।\n* 4. step आगे बढ़ने की संख्या (इंक्रीमेंट) तय करता है।\n* 5. मोबाइल में सीधे नंबर कीपैड खुलता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Numeric Inputs</title>\n</head>\n<body>\n\n  <h2>Developer Preferences</h2>\n  <form>\n    <p>\n      <label for=\"age\">Age (18 to 65):</label>\n      <input type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"65\" value=\"21\">\n    </p>\n    <p>\n      <label for=\"volume\">Volume Slider (0 to 100):</label>\n      <input type=\"range\" id=\"volume\" name=\"vol\" min=\"0\" max=\"100\" value=\"75\">\n    </p>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. type=\"number\" नंबर टाइप करने का बॉक्स बनाता है।\n* 2. type=\"range\" स्लाइडर बार कंट्रोल बनाता है।\n* 3. min और max न्यूनतम और अधिकतम सीमा तय करते हैं।\n* 4. step आगे बढ़ने की संख्या (इंक्रीमेंट) तय करता है।\n* 5. मोबाइल में सीधे नंबर कीपैड खुलता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Numeric Inputs</title>\n</head>\n<body>\n\n  <h2>Developer Preferences</h2>\n  <form>\n    <p>\n      <label for=\"age\">Age (18 to 65):</label>\n      <input type=\"number\" id=\"age\" name=\"age\" min=\"18\" max=\"65\" value=\"21\">\n    </p>\n    <p>\n      <label for=\"volume\">Volume Slider (0 to 100):</label>\n      <input type=\"range\" id=\"volume\" name=\"vol\" min=\"0\" max=\"100\" value=\"75\">\n    </p>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 94,
    slug: "progress-indicators-meter-gauges",
    title: "Progress Indicators (<progress>) & Meter Gauges (<meter>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    exercise: {
      english: {
        question: "Which tag is specifically designed to show task completion progress (e.g. downloading)?",
        options: ["<progress>","<meter>","<gauge>","<status>"],
        correctAnswer: "<progress>",
        hint: "<progress> represents the completion progress of a task."
      },
      hinglish: {
        question: "Which tag is specifically designed to show task completion progress (e.g. downloading)?",
        options: ["<progress>","<meter>","<gauge>","<status>"],
        correctAnswer: "<progress>",
        hint: "<progress> represents the completion progress of a task."
      },
      hindi: {
        question: "Which tag is specifically designed to show task completion progress (e.g. downloading)?",
        options: ["<progress>","<meter>","<gauge>","<status>"],
        correctAnswer: "<progress>",
        hint: "<progress> represents the completion progress of a task."
      }
    },
    english: {
      kid: "* 1. <progress> displays task completion bar progress.\n* 2. <meter> displays scalar measurement gauge values.\n* 3. <progress> uses value and max attributes.\n* 4. <meter> uses min, max, and optimum.\n* 5. Semantic native alternatives to styled divs.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Progress and Meter</title>\n</head>\n<body>\n\n  <h2>System Dashboard</h2>\n  <p>File Download Progress:</p>\n  <progress value=\"75\" max=\"100\">75%</progress>\n\n  <p>Disk Storage Used:</p>\n  <meter value=\"0.6\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.8\" optimum=\"0.2\">60%</meter>\n\n</body>\n</html>\n```",
      pro: "* 1. <progress> displays task completion bar progress.\n* 2. <meter> displays scalar measurement gauge values.\n* 3. <progress> uses value and max attributes.\n* 4. <meter> uses min, max, and optimum.\n* 5. Semantic native alternatives to styled divs.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Progress and Meter</title>\n</head>\n<body>\n\n  <h2>System Dashboard</h2>\n  <p>File Download Progress:</p>\n  <progress value=\"75\" max=\"100\">75%</progress>\n\n  <p>Disk Storage Used:</p>\n  <meter value=\"0.6\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.8\" optimum=\"0.2\">60%</meter>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <progress> कार्य पूरा होने का प्रोग्रेस बार दिखाता है।\n* 2. <meter> मापन गेज (जैसे डिस्क स्पेस) दिखाता है।\n* 3. <progress> में value और max अट्रिब्यूट होते हैं।\n* 4. <meter> में min, max, और optimum मान होते हैं।\n* 5. सिमेंटिक और शुद्ध HTML5 तत्व हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Progress and Meter</title>\n</head>\n<body>\n\n  <h2>System Dashboard</h2>\n  <p>File Download Progress:</p>\n  <progress value=\"75\" max=\"100\">75%</progress>\n\n  <p>Disk Storage Used:</p>\n  <meter value=\"0.6\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.8\" optimum=\"0.2\">60%</meter>\n\n</body>\n</html>\n```",
      pro: "* 1. <progress> कार्य पूरा होने का प्रोग्रेस बार दिखाता है।\n* 2. <meter> मापन गेज (जैसे डिस्क स्पेस) दिखाता है।\n* 3. <progress> में value और max अट्रिब्यूट होते हैं।\n* 4. <meter> में min, max, और optimum मान होते हैं।\n* 5. सिमेंटिक और शुद्ध HTML5 तत्व हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Progress and Meter</title>\n</head>\n<body>\n\n  <h2>System Dashboard</h2>\n  <p>File Download Progress:</p>\n  <progress value=\"75\" max=\"100\">75%</progress>\n\n  <p>Disk Storage Used:</p>\n  <meter value=\"0.6\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.8\" optimum=\"0.2\">60%</meter>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <progress> कार्य पूरा होने का प्रोग्रेस बार दिखाता है।\n* 2. <meter> मापन गेज (जैसे डिस्क स्पेस) दिखाता है।\n* 3. <progress> में value और max अट्रिब्यूट होते हैं।\n* 4. <meter> में min, max, और optimum मान होते हैं।\n* 5. सिमेंटिक और शुद्ध HTML5 तत्व हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Progress and Meter</title>\n</head>\n<body>\n\n  <h2>System Dashboard</h2>\n  <p>File Download Progress:</p>\n  <progress value=\"75\" max=\"100\">75%</progress>\n\n  <p>Disk Storage Used:</p>\n  <meter value=\"0.6\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.8\" optimum=\"0.2\">60%</meter>\n\n</body>\n</html>\n```",
      pro: "* 1. <progress> कार्य पूरा होने का प्रोग्रेस बार दिखाता है।\n* 2. <meter> मापन गेज (जैसे डिस्क स्पेस) दिखाता है।\n* 3. <progress> में value और max अट्रिब्यूट होते हैं।\n* 4. <meter> में min, max, और optimum मान होते हैं।\n* 5. सिमेंटिक और शुद्ध HTML5 तत्व हैं।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Progress and Meter</title>\n</head>\n<body>\n\n  <h2>System Dashboard</h2>\n  <p>File Download Progress:</p>\n  <progress value=\"75\" max=\"100\">75%</progress>\n\n  <p>Disk Storage Used:</p>\n  <meter value=\"0.6\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.8\" optimum=\"0.2\">60%</meter>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 95,
    slug: "autocomplete-datalist-input-suggestions",
    title: "Autocomplete Data Lists (<datalist>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    exercise: {
      english: {
        question: "Which attribute on <input> connects it to a <datalist id=\"...\"> element?",
        options: ["list","datalist","options","autocomplete"],
        correctAnswer: "list",
        hint: "Use <input list=\"listId\"> to bind the suggestions."
      },
      hinglish: {
        question: "Which attribute on <input> connects it to a <datalist id=\"...\"> element?",
        options: ["list","datalist","options","autocomplete"],
        correctAnswer: "list",
        hint: "Use <input list=\"listId\"> to bind the suggestions."
      },
      hindi: {
        question: "Which attribute on <input> connects it to a <datalist id=\"...\"> element?",
        options: ["list","datalist","options","autocomplete"],
        correctAnswer: "list",
        hint: "Use <input list=\"listId\"> to bind the suggestions."
      }
    },
    english: {
      kid: "* 1. <datalist> provides autocomplete suggestion dropdown lists.\n* 2. Connects to input using list attribute.\n* 3. Users can pick suggestion or type.\n* 4. Contains <option> values inside.\n* 5. Unlike <select>, allows typing custom values.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Datalist Autocomplete</title>\n</head>\n<body>\n\n  <h2>Choose Code Editor</h2>\n  <form>\n    <label for=\"editorInput\">Your Preferred Editor:</label>\n    <input list=\"editors\" id=\"editorInput\" name=\"editor\" placeholder=\"Type or select...\">\n\n    <datalist id=\"editors\">\n      <option value=\"Visual Studio Code\">\n      <option value=\"Sublime Text\">\n      <option value=\"Vim\">\n      <option value=\"Neovim\">\n    </datalist>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <datalist> provides autocomplete suggestion dropdown lists.\n* 2. Connects to input using list attribute.\n* 3. Users can pick suggestion or type.\n* 4. Contains <option> values inside.\n* 5. Unlike <select>, allows typing custom values.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Datalist Autocomplete</title>\n</head>\n<body>\n\n  <h2>Choose Code Editor</h2>\n  <form>\n    <label for=\"editorInput\">Your Preferred Editor:</label>\n    <input list=\"editors\" id=\"editorInput\" name=\"editor\" placeholder=\"Type or select...\">\n\n    <datalist id=\"editors\">\n      <option value=\"Visual Studio Code\">\n      <option value=\"Sublime Text\">\n      <option value=\"Vim\">\n      <option value=\"Neovim\">\n    </datalist>\n  </form>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <datalist> ऑटो-कंप्लीट सुझाव सूची देता है।\n* 2. input के list अट्रिब्यूट से जुड़ता है।\n* 3. यूजर सुझाव चुन सकता है या खुद टाइप कर सकता है।\n* 4. इसके अंदर <option> वैल्यू होती हैं।\n* 5. <select> से अलग, इसमें नया टेक्स्ट भी टाइप हो सकता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Datalist Autocomplete</title>\n</head>\n<body>\n\n  <h2>Choose Code Editor</h2>\n  <form>\n    <label for=\"editorInput\">Your Preferred Editor:</label>\n    <input list=\"editors\" id=\"editorInput\" name=\"editor\" placeholder=\"Type or select...\">\n\n    <datalist id=\"editors\">\n      <option value=\"Visual Studio Code\">\n      <option value=\"Sublime Text\">\n      <option value=\"Vim\">\n      <option value=\"Neovim\">\n    </datalist>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <datalist> ऑटो-कंप्लीट सुझाव सूची देता है।\n* 2. input के list अट्रिब्यूट से जुड़ता है।\n* 3. यूजर सुझाव चुन सकता है या खुद टाइप कर सकता है।\n* 4. इसके अंदर <option> वैल्यू होती हैं।\n* 5. <select> से अलग, इसमें नया टेक्स्ट भी टाइप हो सकता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Datalist Autocomplete</title>\n</head>\n<body>\n\n  <h2>Choose Code Editor</h2>\n  <form>\n    <label for=\"editorInput\">Your Preferred Editor:</label>\n    <input list=\"editors\" id=\"editorInput\" name=\"editor\" placeholder=\"Type or select...\">\n\n    <datalist id=\"editors\">\n      <option value=\"Visual Studio Code\">\n      <option value=\"Sublime Text\">\n      <option value=\"Vim\">\n      <option value=\"Neovim\">\n    </datalist>\n  </form>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <datalist> ऑटो-कंप्लीट सुझाव सूची देता है।\n* 2. input के list अट्रिब्यूट से जुड़ता है।\n* 3. यूजर सुझाव चुन सकता है या खुद टाइप कर सकता है।\n* 4. इसके अंदर <option> वैल्यू होती हैं।\n* 5. <select> से अलग, इसमें नया टेक्स्ट भी टाइप हो सकता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Datalist Autocomplete</title>\n</head>\n<body>\n\n  <h2>Choose Code Editor</h2>\n  <form>\n    <label for=\"editorInput\">Your Preferred Editor:</label>\n    <input list=\"editors\" id=\"editorInput\" name=\"editor\" placeholder=\"Type or select...\">\n\n    <datalist id=\"editors\">\n      <option value=\"Visual Studio Code\">\n      <option value=\"Sublime Text\">\n      <option value=\"Vim\">\n      <option value=\"Neovim\">\n    </datalist>\n  </form>\n\n</body>\n</html>\n```",
      pro: "* 1. <datalist> ऑटो-कंप्लीट सुझाव सूची देता है।\n* 2. input के list अट्रिब्यूट से जुड़ता है।\n* 3. यूजर सुझाव चुन सकता है या खुद टाइप कर सकता है।\n* 4. इसके अंदर <option> वैल्यू होती हैं।\n* 5. <select> से अलग, इसमें नया टेक्स्ट भी टाइप हो सकता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Datalist Autocomplete</title>\n</head>\n<body>\n\n  <h2>Choose Code Editor</h2>\n  <form>\n    <label for=\"editorInput\">Your Preferred Editor:</label>\n    <input list=\"editors\" id=\"editorInput\" name=\"editor\" placeholder=\"Type or select...\">\n\n    <datalist id=\"editors\">\n      <option value=\"Visual Studio Code\">\n      <option value=\"Sublime Text\">\n      <option value=\"Vim\">\n      <option value=\"Neovim\">\n    </datalist>\n  </form>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 96,
    slug: "collapsible-accordions-details-summary",
    title: "Collapsible Accordions (<details> and <summary>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    exercise: {
      english: {
        question: "Which tag defines the visible clickable header for a <details> accordion?",
        options: ["<summary>","<header>","<title>","<accordion>"],
        correctAnswer: "<summary>",
        hint: "<summary> provides the heading that toggles the <details> disclosure."
      },
      hinglish: {
        question: "Which tag defines the visible clickable header for a <details> accordion?",
        options: ["<summary>","<header>","<title>","<accordion>"],
        correctAnswer: "<summary>",
        hint: "<summary> provides the heading that toggles the <details> disclosure."
      },
      hindi: {
        question: "Which tag defines the visible clickable header for a <details> accordion?",
        options: ["<summary>","<header>","<title>","<accordion>"],
        correctAnswer: "<summary>",
        hint: "<summary> provides the heading that toggles the <details> disclosure."
      }
    },
    english: {
      kid: "* 1. <details> creates native collapsible accordion widgets.\n* 2. <summary> defines clickable accordion heading label.\n* 3. Clicking summary toggles content visibility smoothly.\n* 4. open attribute expands accordion by default.\n* 5. Zero JavaScript required for interactive accordions.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Accordion Details</title>\n</head>\n<body>\n\n  <h2>Frequently Asked Questions</h2>\n\n  <details open>\n    <summary>Is Nextsem Academy free?</summary>\n    <p>Yes! All curriculum, lessons, and tools are 100% free forever.</p>\n  </details>\n\n  <details>\n    <summary>Do I need prior coding experience?</summary>\n    <p>No prior coding experience is required. We start from ground zero!</p>\n  </details>\n\n</body>\n</html>\n```",
      pro: "* 1. <details> creates native collapsible accordion widgets.\n* 2. <summary> defines clickable accordion heading label.\n* 3. Clicking summary toggles content visibility smoothly.\n* 4. open attribute expands accordion by default.\n* 5. Zero JavaScript required for interactive accordions.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Accordion Details</title>\n</head>\n<body>\n\n  <h2>Frequently Asked Questions</h2>\n\n  <details open>\n    <summary>Is Nextsem Academy free?</summary>\n    <p>Yes! All curriculum, lessons, and tools are 100% free forever.</p>\n  </details>\n\n  <details>\n    <summary>Do I need prior coding experience?</summary>\n    <p>No prior coding experience is required. We start from ground zero!</p>\n  </details>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <details> अपने आप खुलने/बंद होने वाला अकॉर्डियन बनाता है।\n* 2. <summary> क्लिक करने वाला शीर्षक बनता है।\n* 3. क्लिक करने पर अंदर का विवरण तुरंत खुल जाता है।\n* 4. open अट्रिब्यूट से पहले से खुला रहता है।\n* 5. बिना किसी जावास्क्रिप्ट के काम करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Accordion Details</title>\n</head>\n<body>\n\n  <h2>Frequently Asked Questions</h2>\n\n  <details open>\n    <summary>Is Nextsem Academy free?</summary>\n    <p>Yes! All curriculum, lessons, and tools are 100% free forever.</p>\n  </details>\n\n  <details>\n    <summary>Do I need prior coding experience?</summary>\n    <p>No prior coding experience is required. We start from ground zero!</p>\n  </details>\n\n</body>\n</html>\n```",
      pro: "* 1. <details> अपने आप खुलने/बंद होने वाला अकॉर्डियन बनाता है।\n* 2. <summary> क्लिक करने वाला शीर्षक बनता है।\n* 3. क्लिक करने पर अंदर का विवरण तुरंत खुल जाता है।\n* 4. open अट्रिब्यूट से पहले से खुला रहता है।\n* 5. बिना किसी जावास्क्रिप्ट के काम करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Accordion Details</title>\n</head>\n<body>\n\n  <h2>Frequently Asked Questions</h2>\n\n  <details open>\n    <summary>Is Nextsem Academy free?</summary>\n    <p>Yes! All curriculum, lessons, and tools are 100% free forever.</p>\n  </details>\n\n  <details>\n    <summary>Do I need prior coding experience?</summary>\n    <p>No prior coding experience is required. We start from ground zero!</p>\n  </details>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <details> अपने आप खुलने/बंद होने वाला अकॉर्डियन बनाता है।\n* 2. <summary> क्लिक करने वाला शीर्षक बनता है।\n* 3. क्लिक करने पर अंदर का विवरण तुरंत खुल जाता है।\n* 4. open अट्रिब्यूट से पहले से खुला रहता है।\n* 5. बिना किसी जावास्क्रिप्ट के काम करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Accordion Details</title>\n</head>\n<body>\n\n  <h2>Frequently Asked Questions</h2>\n\n  <details open>\n    <summary>Is Nextsem Academy free?</summary>\n    <p>Yes! All curriculum, lessons, and tools are 100% free forever.</p>\n  </details>\n\n  <details>\n    <summary>Do I need prior coding experience?</summary>\n    <p>No prior coding experience is required. We start from ground zero!</p>\n  </details>\n\n</body>\n</html>\n```",
      pro: "* 1. <details> अपने आप खुलने/बंद होने वाला अकॉर्डियन बनाता है।\n* 2. <summary> क्लिक करने वाला शीर्षक बनता है।\n* 3. क्लिक करने पर अंदर का विवरण तुरंत खुल जाता है।\n* 4. open अट्रिब्यूट से पहले से खुला रहता है।\n* 5. बिना किसी जावास्क्रिप्ट के काम करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Accordion Details</title>\n</head>\n<body>\n\n  <h2>Frequently Asked Questions</h2>\n\n  <details open>\n    <summary>Is Nextsem Academy free?</summary>\n    <p>Yes! All curriculum, lessons, and tools are 100% free forever.</p>\n  </details>\n\n  <details>\n    <summary>Do I need prior coding experience?</summary>\n    <p>No prior coding experience is required. We start from ground zero!</p>\n  </details>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 97,
    slug: "native-modals-dialog-showmodal-methods",
    title: "Native Modals & Popups (<dialog>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    exercise: {
      english: {
        question: "Which attribute makes a <dialog> element open and visible by default on page load?",
        options: ["open","visible","show","active"],
        correctAnswer: "open",
        hint: "Add the boolean attribute open to the <dialog> tag."
      },
      hinglish: {
        question: "Which attribute makes a <dialog> element open and visible by default on page load?",
        options: ["open","visible","show","active"],
        correctAnswer: "open",
        hint: "Add the boolean attribute open to the <dialog> tag."
      },
      hindi: {
        question: "Which attribute makes a <dialog> element open and visible by default on page load?",
        options: ["open","visible","show","active"],
        correctAnswer: "open",
        hint: "Add the boolean attribute open to the <dialog> tag."
      }
    },
    english: {
      kid: "* 1. <dialog> creates native modal popup windows.\n* 2. open attribute makes modal visible immediately.\n* 3. <form method=\"dialog\"> closes modal natively.\n* 4. Includes native backdrop behind modal popup.\n* 5. Replaces complex JavaScript modal library packages.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Dialog Modal</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Announcement</h1>\n\n  <dialog open>\n    <h2>Welcome Student!</h2>\n    <p>You are now on Lesson 97 of Full Stack Web Development.</p>\n    <form method=\"dialog\">\n      <button>Got it, continue!</button>\n    </form>\n  </dialog>\n\n</body>\n</html>\n```",
      pro: "* 1. <dialog> creates native modal popup windows.\n* 2. open attribute makes modal visible immediately.\n* 3. <form method=\"dialog\"> closes modal natively.\n* 4. Includes native backdrop behind modal popup.\n* 5. Replaces complex JavaScript modal library packages.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Dialog Modal</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Announcement</h1>\n\n  <dialog open>\n    <h2>Welcome Student!</h2>\n    <p>You are now on Lesson 97 of Full Stack Web Development.</p>\n    <form method=\"dialog\">\n      <button>Got it, continue!</button>\n    </form>\n  </dialog>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <dialog> नेटिव पॉपअप डायलॉग विंडो बनाता है।\n* 2. open अट्रिब्यूट से डायलॉग तुरंत दिखाई देता है।\n* 3. <form method=\"dialog\"> डायलॉग को सीधे बंद कर देता है।\n* 4. पीछे अपने आप बैकड्रॉप स्क्रीन लगाता है।\n* 5. भारी जावास्क्रिप्ट लाइब्रेरियों की जरूरत खत्म करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Dialog Modal</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Announcement</h1>\n\n  <dialog open>\n    <h2>Welcome Student!</h2>\n    <p>You are now on Lesson 97 of Full Stack Web Development.</p>\n    <form method=\"dialog\">\n      <button>Got it, continue!</button>\n    </form>\n  </dialog>\n\n</body>\n</html>\n```",
      pro: "* 1. <dialog> नेटिव पॉपअप डायलॉग विंडो बनाता है।\n* 2. open अट्रिब्यूट से डायलॉग तुरंत दिखाई देता है।\n* 3. <form method=\"dialog\"> डायलॉग को सीधे बंद कर देता है।\n* 4. पीछे अपने आप बैकड्रॉप स्क्रीन लगाता है।\n* 5. भारी जावास्क्रिप्ट लाइब्रेरियों की जरूरत खत्म करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Dialog Modal</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Announcement</h1>\n\n  <dialog open>\n    <h2>Welcome Student!</h2>\n    <p>You are now on Lesson 97 of Full Stack Web Development.</p>\n    <form method=\"dialog\">\n      <button>Got it, continue!</button>\n    </form>\n  </dialog>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <dialog> नेटिव पॉपअप डायलॉग विंडो बनाता है।\n* 2. open अट्रिब्यूट से डायलॉग तुरंत दिखाई देता है।\n* 3. <form method=\"dialog\"> डायलॉग को सीधे बंद कर देता है।\n* 4. पीछे अपने आप बैकड्रॉप स्क्रीन लगाता है।\n* 5. भारी जावास्क्रिप्ट लाइब्रेरियों की जरूरत खत्म करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Dialog Modal</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Announcement</h1>\n\n  <dialog open>\n    <h2>Welcome Student!</h2>\n    <p>You are now on Lesson 97 of Full Stack Web Development.</p>\n    <form method=\"dialog\">\n      <button>Got it, continue!</button>\n    </form>\n  </dialog>\n\n</body>\n</html>\n```",
      pro: "* 1. <dialog> नेटिव पॉपअप डायलॉग विंडो बनाता है।\n* 2. open अट्रिब्यूट से डायलॉग तुरंत दिखाई देता है।\n* 3. <form method=\"dialog\"> डायलॉग को सीधे बंद कर देता है।\n* 4. पीछे अपने आप बैकड्रॉप स्क्रीन लगाता है।\n* 5. भारी जावास्क्रिप्ट लाइब्रेरियों की जरूरत खत्म करता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Native Dialog Modal</title>\n</head>\n<body>\n\n  <h1>Nextsem Academy Announcement</h1>\n\n  <dialog open>\n    <h2>Welcome Student!</h2>\n    <p>You are now on Lesson 97 of Full Stack Web Development.</p>\n    <form method=\"dialog\">\n      <button>Got it, continue!</button>\n    </form>\n  </dialog>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 98,
    slug: "web-components-template-slot-elements",
    title: "Web Components Templates (<template> and <slot>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 13",
    exercise: {
      english: {
        question: "Does content inside a <template> tag render visible on the screen when the page loads?",
        options: ["No, it remains hidden until cloned and inserted via DOM","Yes, it renders as a regular <div>","Only on mobile screens","Only if open attribute is set"],
        correctAnswer: "No, it remains hidden until cloned and inserted via DOM",
        hint: "<template> contents are not rendered until instantiated."
      },
      hinglish: {
        question: "Does content inside a <template> tag render visible on the screen when the page loads?",
        options: ["No, it remains hidden until cloned and inserted via DOM","Yes, it renders as a regular <div>","Only on mobile screens","Only if open attribute is set"],
        correctAnswer: "No, it remains hidden until cloned and inserted via DOM",
        hint: "<template> contents are not rendered until instantiated."
      },
      hindi: {
        question: "Does content inside a <template> tag render visible on the screen when the page loads?",
        options: ["No, it remains hidden until cloned and inserted via DOM","Yes, it renders as a regular <div>","Only on mobile screens","Only if open attribute is set"],
        correctAnswer: "No, it remains hidden until cloned and inserted via DOM",
        hint: "<template> contents are not rendered until instantiated."
      }
    },
    english: {
      kid: "* 1. <template> holds hidden client-side markup fragments.\n* 2. Content is not rendered upon load.\n* 3. Cloned and inserted dynamically via DOM.\n* 4. <slot> creates placeholders for custom text.\n* 5. Building block for reusable Web Components.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Templates</title>\n</head>\n<body>\n\n  <h2>Course Card Blueprints</h2>\n\n  <template id=\"course-card-blueprint\">\n    <article>\n      <h3>Course Heading</h3>\n      <p>Course description goes here.</p>\n    </article>\n  </template>\n\n  <p>Template stored in DOM memory without rendering on screen.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <template> holds hidden client-side markup fragments.\n* 2. Content is not rendered upon load.\n* 3. Cloned and inserted dynamically via DOM.\n* 4. <slot> creates placeholders for custom text.\n* 5. Building block for reusable Web Components.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Templates</title>\n</head>\n<body>\n\n  <h2>Course Card Blueprints</h2>\n\n  <template id=\"course-card-blueprint\">\n    <article>\n      <h3>Course Heading</h3>\n      <p>Course description goes here.</p>\n    </article>\n  </template>\n\n  <p>Template stored in DOM memory without rendering on screen.</p>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <template> छिपे हुए HTML ब्लॉक को स्टोर करता है।\n* 2. पेज लोड होने पर यह स्क्रीन पर नहीं दिखता।\n* 3. DOM द्वारा क्लोन करके पेज में डाला जाता है।\n* 4. <slot> कस्टम टेक्स्ट के लिए खांचा (प्लेसहोल्डर) बनाता है।\n* 5. रीयूजेबल वेब कंपोनेंट्स की मजबूत नींव है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Templates</title>\n</head>\n<body>\n\n  <h2>Course Card Blueprints</h2>\n\n  <template id=\"course-card-blueprint\">\n    <article>\n      <h3>Course Heading</h3>\n      <p>Course description goes here.</p>\n    </article>\n  </template>\n\n  <p>Template stored in DOM memory without rendering on screen.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <template> छिपे हुए HTML ब्लॉक को स्टोर करता है।\n* 2. पेज लोड होने पर यह स्क्रीन पर नहीं दिखता।\n* 3. DOM द्वारा क्लोन करके पेज में डाला जाता है।\n* 4. <slot> कस्टम टेक्स्ट के लिए खांचा (प्लेसहोल्डर) बनाता है।\n* 5. रीयूजेबल वेब कंपोनेंट्स की मजबूत नींव है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Templates</title>\n</head>\n<body>\n\n  <h2>Course Card Blueprints</h2>\n\n  <template id=\"course-card-blueprint\">\n    <article>\n      <h3>Course Heading</h3>\n      <p>Course description goes here.</p>\n    </article>\n  </template>\n\n  <p>Template stored in DOM memory without rendering on screen.</p>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <template> छिपे हुए HTML ब्लॉक को स्टोर करता है।\n* 2. पेज लोड होने पर यह स्क्रीन पर नहीं दिखता।\n* 3. DOM द्वारा क्लोन करके पेज में डाला जाता है।\n* 4. <slot> कस्टम टेक्स्ट के लिए खांचा (प्लेसहोल्डर) बनाता है।\n* 5. रीयूजेबल वेब कंपोनेंट्स की मजबूत नींव है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Templates</title>\n</head>\n<body>\n\n  <h2>Course Card Blueprints</h2>\n\n  <template id=\"course-card-blueprint\">\n    <article>\n      <h3>Course Heading</h3>\n      <p>Course description goes here.</p>\n    </article>\n  </template>\n\n  <p>Template stored in DOM memory without rendering on screen.</p>\n\n</body>\n</html>\n```",
      pro: "* 1. <template> छिपे हुए HTML ब्लॉक को स्टोर करता है।\n* 2. पेज लोड होने पर यह स्क्रीन पर नहीं दिखता।\n* 3. DOM द्वारा क्लोन करके पेज में डाला जाता है।\n* 4. <slot> कस्टम टेक्स्ट के लिए खांचा (प्लेसहोल्डर) बनाता है।\n* 5. रीयूजेबल वेब कंपोनेंट्स की मजबूत नींव है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Templates</title>\n</head>\n<body>\n\n  <h2>Course Card Blueprints</h2>\n\n  <template id=\"course-card-blueprint\">\n    <article>\n      <h3>Course Heading</h3>\n      <p>Course description goes here.</p>\n    </article>\n  </template>\n\n  <p>Template stored in DOM memory without rendering on screen.</p>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 99,
    slug: "canvas-graphics-draw-shapes-context",
    title: "Canvas Graphics (<canvas>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "Duckett Chapter 9 (p. 222-226)",
    exercise: {
      english: {
        question: "Which element provides a scriptable 2D drawing canvas for charts and games?",
        options: ["<canvas>","<svg>","<draw>","<graphic>"],
        correctAnswer: "<canvas>",
        hint: "The <canvas> element provides a resolution-dependent bitmap canvas."
      },
      hinglish: {
        question: "Which element provides a scriptable 2D drawing canvas for charts and games?",
        options: ["<canvas>","<svg>","<draw>","<graphic>"],
        correctAnswer: "<canvas>",
        hint: "The <canvas> element provides a resolution-dependent bitmap canvas."
      },
      hindi: {
        question: "Which element provides a scriptable 2D drawing canvas for charts and games?",
        options: ["<canvas>","<svg>","<draw>","<graphic>"],
        correctAnswer: "<canvas>",
        hint: "The <canvas> element provides a resolution-dependent bitmap canvas."
      }
    },
    english: {
      kid: "* 1. <canvas> provides bitmap drawing graphic surfaces.\n* 2. width and height define pixel drawing area.\n* 3. Used for games, charts, and animations.\n* 4. Text inside serves as fallback message.\n* 5. Graphics are drawn via 2D context.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML5 Canvas</title>\n</head>\n<body>\n\n  <h2>Interactive Game Canvas</h2>\n  <canvas id=\"gameCanvas\" width=\"400\" height=\"200\">\n    Your browser does not support HTML5 canvas graphics.\n  </canvas>\n\n</body>\n</html>\n```",
      pro: "* 1. <canvas> provides bitmap drawing graphic surfaces.\n* 2. width and height define pixel drawing area.\n* 3. Used for games, charts, and animations.\n* 4. Text inside serves as fallback message.\n* 5. Graphics are drawn via 2D context.\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML5 Canvas</title>\n</head>\n<body>\n\n  <h2>Interactive Game Canvas</h2>\n  <canvas id=\"gameCanvas\" width=\"400\" height=\"200\">\n    Your browser does not support HTML5 canvas graphics.\n  </canvas>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. <canvas> ग्राफिक्स और ड्रॉइंग के लिए सतह देता है।\n* 2. width और height पिक्सल एरिया तय करते हैं।\n* 3. 2D गेम्स, चार्ट्स, और एनिमेशन के काम आता है।\n* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।\n* 5. 2D कॉन्टेक्स्ट के माध्यम से रेंडर होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML5 Canvas</title>\n</head>\n<body>\n\n  <h2>Interactive Game Canvas</h2>\n  <canvas id=\"gameCanvas\" width=\"400\" height=\"200\">\n    Your browser does not support HTML5 canvas graphics.\n  </canvas>\n\n</body>\n</html>\n```",
      pro: "* 1. <canvas> ग्राफिक्स और ड्रॉइंग के लिए सतह देता है।\n* 2. width और height पिक्सल एरिया तय करते हैं।\n* 3. 2D गेम्स, चार्ट्स, और एनिमेशन के काम आता है।\n* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।\n* 5. 2D कॉन्टेक्स्ट के माध्यम से रेंडर होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML5 Canvas</title>\n</head>\n<body>\n\n  <h2>Interactive Game Canvas</h2>\n  <canvas id=\"gameCanvas\" width=\"400\" height=\"200\">\n    Your browser does not support HTML5 canvas graphics.\n  </canvas>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. <canvas> ग्राफिक्स और ड्रॉइंग के लिए सतह देता है।\n* 2. width और height पिक्सल एरिया तय करते हैं।\n* 3. 2D गेम्स, चार्ट्स, और एनिमेशन के काम आता है।\n* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।\n* 5. 2D कॉन्टेक्स्ट के माध्यम से रेंडर होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML5 Canvas</title>\n</head>\n<body>\n\n  <h2>Interactive Game Canvas</h2>\n  <canvas id=\"gameCanvas\" width=\"400\" height=\"200\">\n    Your browser does not support HTML5 canvas graphics.\n  </canvas>\n\n</body>\n</html>\n```",
      pro: "* 1. <canvas> ग्राफिक्स और ड्रॉइंग के लिए सतह देता है।\n* 2. width और height पिक्सल एरिया तय करते हैं।\n* 3. 2D गेम्स, चार्ट्स, और एनिमेशन के काम आता है।\n* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।\n* 5. 2D कॉन्टेक्स्ट के माध्यम से रेंडर होता है।\n\n### Example\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML5 Canvas</title>\n</head>\n<body>\n\n  <h2>Interactive Game Canvas</h2>\n  <canvas id=\"gameCanvas\" width=\"400\" height=\"200\">\n    Your browser does not support HTML5 canvas graphics.\n  </canvas>\n\n</body>\n</html>\n```"
    }
  },
  {
    id: 100,
    slug: "capstone-portfolio-layout-page",
    title: "Capstone Project: Complete Semantic Portfolio",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "Nextsem Academy Project Suite",
    exercise: {
      english: {
        question: "Which semantic structure represents the complete modern HTML5 standard layout for a personal portfolio?",
        options: ["<header>, <nav>, <main>, <section>, and <footer>","<div> tags only with custom IDs","<frameset> and <frame>","<table> with <tr> layout cells"],
        correctAnswer: "<header>, <nav>, <main>, <section>, and <footer>",
        hint: "Modern semantic HTML5 organizes pages with header, nav, main, section, and footer."
      },
      hinglish: {
        question: "Which semantic structure represents the complete modern HTML5 standard layout for a personal portfolio?",
        options: ["<header>, <nav>, <main>, <section>, and <footer>","<div> tags only with custom IDs","<frameset> and <frame>","<table> with <tr> layout cells"],
        correctAnswer: "<header>, <nav>, <main>, <section>, and <footer>",
        hint: "Modern semantic HTML5 organizes pages with header, nav, main, section, and footer."
      },
      hindi: {
        question: "Which semantic structure represents the complete modern HTML5 standard layout for a personal portfolio?",
        options: ["<header>, <nav>, <main>, <section>, and <footer>","<div> tags only with custom IDs","<frameset> and <frame>","<table> with <tr> layout cells"],
        correctAnswer: "<header>, <nav>, <main>, <section>, and <footer>",
        hint: "Modern semantic HTML5 organizes pages with header, nav, main, section, and footer."
      }
    },
    english: {
      kid: "* 1. Combines all HTML5 semantic tags learned.\n* 2. Implements header, nav, main, sections, footer.\n* 3. Includes working accessible forms and tables.\n* 4. 100% pure standard valid HTML5 markup.\n* 5. Ready for portfolio showcase and deployment.\n\n### Example\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Jane Doe | Full Stack Web Developer</title>\n</head>\n<body>\n\n  <header>\n    <h1>Jane Doe</h1>\n    <p>Junior Full Stack Web Developer &bull; Nextsem Academy Graduate</p>\n    <nav>\n      <ul>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#skills\">Skills</a></li>\n        <li><a href=\"#projects\">Projects</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I build fast, accessible, and standards-compliant web applications using pure HTML5 and modern developer workflows.</p>\n    </section>\n\n    <section id=\"skills\">\n      <h2>Technical Skills</h2>\n      <ul>\n        <li>HTML5 Semantic Architecture</li>\n        <li>Windows 11 Command Prompt (cmd.exe)</li>\n        <li>Git Version Control</li>\n      </ul>\n    </section>\n\n    <section id=\"contact\">\n      <h2>Contact Me</h2>\n      <form action=\"/send-message\" method=\"post\">\n        <p>\n          <label for=\"cname\">Your Name:</label><br>\n          <input type=\"text\" id=\"cname\" name=\"name\" required>\n        </p>\n        <p>\n          <label for=\"cemail\">Your Email:</label><br>\n          <input type=\"email\" id=\"cemail\" name=\"email\" required>\n        </p>\n        <p>\n          <label for=\"cmsg\">Message:</label><br>\n          <textarea id=\"cmsg\" name=\"message\" rows=\"4\" cols=\"40\" required></textarea>\n        </p>\n        <button type=\"submit\">Send Message</button>\n      </form>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Jane Doe. Built with Nextsem Academy Curriculum.</p>\n  </footer>\n\n</body>\n</html>\n```",
      pro: "* 1. Combines all HTML5 semantic tags learned.\n* 2. Implements header, nav, main, sections, footer.\n* 3. Includes working accessible forms and tables.\n* 4. 100% pure standard valid HTML5 markup.\n* 5. Ready for portfolio showcase and deployment.\n\n### Example\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Jane Doe | Full Stack Web Developer</title>\n</head>\n<body>\n\n  <header>\n    <h1>Jane Doe</h1>\n    <p>Junior Full Stack Web Developer &bull; Nextsem Academy Graduate</p>\n    <nav>\n      <ul>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#skills\">Skills</a></li>\n        <li><a href=\"#projects\">Projects</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I build fast, accessible, and standards-compliant web applications using pure HTML5 and modern developer workflows.</p>\n    </section>\n\n    <section id=\"skills\">\n      <h2>Technical Skills</h2>\n      <ul>\n        <li>HTML5 Semantic Architecture</li>\n        <li>Windows 11 Command Prompt (cmd.exe)</li>\n        <li>Git Version Control</li>\n      </ul>\n    </section>\n\n    <section id=\"contact\">\n      <h2>Contact Me</h2>\n      <form action=\"/send-message\" method=\"post\">\n        <p>\n          <label for=\"cname\">Your Name:</label><br>\n          <input type=\"text\" id=\"cname\" name=\"name\" required>\n        </p>\n        <p>\n          <label for=\"cemail\">Your Email:</label><br>\n          <input type=\"email\" id=\"cemail\" name=\"email\" required>\n        </p>\n        <p>\n          <label for=\"cmsg\">Message:</label><br>\n          <textarea id=\"cmsg\" name=\"message\" rows=\"4\" cols=\"40\" required></textarea>\n        </p>\n        <button type=\"submit\">Send Message</button>\n      </form>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Jane Doe. Built with Nextsem Academy Curriculum.</p>\n  </footer>\n\n</body>\n</html>\n```"
    },
    hinglish: {
      kid: "* 1. सीखे गए सभी HTML5 सिमेंटिक टैग्स का संगम।\n* 2. header, nav, main, section, footer का सही उपयोग।\n* 3. कार्यशील फॉर्म और डेटा टेबल शामिल हैं।\n* 4. 100% शुद्ध और वैध HTML5 मार्कअप।\n* 5. लाइव प्रोजेक्ट डिप्लॉयमेंट के लिए तैयार।\n\n### Example\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Jane Doe | Full Stack Web Developer</title>\n</head>\n<body>\n\n  <header>\n    <h1>Jane Doe</h1>\n    <p>Junior Full Stack Web Developer &bull; Nextsem Academy Graduate</p>\n    <nav>\n      <ul>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#skills\">Skills</a></li>\n        <li><a href=\"#projects\">Projects</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I build fast, accessible, and standards-compliant web applications using pure HTML5 and modern developer workflows.</p>\n    </section>\n\n    <section id=\"skills\">\n      <h2>Technical Skills</h2>\n      <ul>\n        <li>HTML5 Semantic Architecture</li>\n        <li>Windows 11 Command Prompt (cmd.exe)</li>\n        <li>Git Version Control</li>\n      </ul>\n    </section>\n\n    <section id=\"contact\">\n      <h2>Contact Me</h2>\n      <form action=\"/send-message\" method=\"post\">\n        <p>\n          <label for=\"cname\">Your Name:</label><br>\n          <input type=\"text\" id=\"cname\" name=\"name\" required>\n        </p>\n        <p>\n          <label for=\"cemail\">Your Email:</label><br>\n          <input type=\"email\" id=\"cemail\" name=\"email\" required>\n        </p>\n        <p>\n          <label for=\"cmsg\">Message:</label><br>\n          <textarea id=\"cmsg\" name=\"message\" rows=\"4\" cols=\"40\" required></textarea>\n        </p>\n        <button type=\"submit\">Send Message</button>\n      </form>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Jane Doe. Built with Nextsem Academy Curriculum.</p>\n  </footer>\n\n</body>\n</html>\n```",
      pro: "* 1. सीखे गए सभी HTML5 सिमेंटिक टैग्स का संगम।\n* 2. header, nav, main, section, footer का सही उपयोग।\n* 3. कार्यशील फॉर्म और डेटा टेबल शामिल हैं।\n* 4. 100% शुद्ध और वैध HTML5 मार्कअप।\n* 5. लाइव प्रोजेक्ट डिप्लॉयमेंट के लिए तैयार।\n\n### Example\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Jane Doe | Full Stack Web Developer</title>\n</head>\n<body>\n\n  <header>\n    <h1>Jane Doe</h1>\n    <p>Junior Full Stack Web Developer &bull; Nextsem Academy Graduate</p>\n    <nav>\n      <ul>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#skills\">Skills</a></li>\n        <li><a href=\"#projects\">Projects</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I build fast, accessible, and standards-compliant web applications using pure HTML5 and modern developer workflows.</p>\n    </section>\n\n    <section id=\"skills\">\n      <h2>Technical Skills</h2>\n      <ul>\n        <li>HTML5 Semantic Architecture</li>\n        <li>Windows 11 Command Prompt (cmd.exe)</li>\n        <li>Git Version Control</li>\n      </ul>\n    </section>\n\n    <section id=\"contact\">\n      <h2>Contact Me</h2>\n      <form action=\"/send-message\" method=\"post\">\n        <p>\n          <label for=\"cname\">Your Name:</label><br>\n          <input type=\"text\" id=\"cname\" name=\"name\" required>\n        </p>\n        <p>\n          <label for=\"cemail\">Your Email:</label><br>\n          <input type=\"email\" id=\"cemail\" name=\"email\" required>\n        </p>\n        <p>\n          <label for=\"cmsg\">Message:</label><br>\n          <textarea id=\"cmsg\" name=\"message\" rows=\"4\" cols=\"40\" required></textarea>\n        </p>\n        <button type=\"submit\">Send Message</button>\n      </form>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Jane Doe. Built with Nextsem Academy Curriculum.</p>\n  </footer>\n\n</body>\n</html>\n```"
    },
    hindi: {
      kid: "* 1. सीखे गए सभी HTML5 सिमेंटिक टैग्स का संगम।\n* 2. header, nav, main, section, footer का सही उपयोग।\n* 3. कार्यशील फॉर्म और डेटा टेबल शामिल हैं।\n* 4. 100% शुद्ध और वैध HTML5 मार्कअप।\n* 5. लाइव प्रोजेक्ट डिप्लॉयमेंट के लिए तैयार।\n\n### Example\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Jane Doe | Full Stack Web Developer</title>\n</head>\n<body>\n\n  <header>\n    <h1>Jane Doe</h1>\n    <p>Junior Full Stack Web Developer &bull; Nextsem Academy Graduate</p>\n    <nav>\n      <ul>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#skills\">Skills</a></li>\n        <li><a href=\"#projects\">Projects</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I build fast, accessible, and standards-compliant web applications using pure HTML5 and modern developer workflows.</p>\n    </section>\n\n    <section id=\"skills\">\n      <h2>Technical Skills</h2>\n      <ul>\n        <li>HTML5 Semantic Architecture</li>\n        <li>Windows 11 Command Prompt (cmd.exe)</li>\n        <li>Git Version Control</li>\n      </ul>\n    </section>\n\n    <section id=\"contact\">\n      <h2>Contact Me</h2>\n      <form action=\"/send-message\" method=\"post\">\n        <p>\n          <label for=\"cname\">Your Name:</label><br>\n          <input type=\"text\" id=\"cname\" name=\"name\" required>\n        </p>\n        <p>\n          <label for=\"cemail\">Your Email:</label><br>\n          <input type=\"email\" id=\"cemail\" name=\"email\" required>\n        </p>\n        <p>\n          <label for=\"cmsg\">Message:</label><br>\n          <textarea id=\"cmsg\" name=\"message\" rows=\"4\" cols=\"40\" required></textarea>\n        </p>\n        <button type=\"submit\">Send Message</button>\n      </form>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Jane Doe. Built with Nextsem Academy Curriculum.</p>\n  </footer>\n\n</body>\n</html>\n```",
      pro: "* 1. सीखे गए सभी HTML5 सिमेंटिक टैग्स का संगम।\n* 2. header, nav, main, section, footer का सही उपयोग।\n* 3. कार्यशील फॉर्म और डेटा टेबल शामिल हैं।\n* 4. 100% शुद्ध और वैध HTML5 मार्कअप।\n* 5. लाइव प्रोजेक्ट डिप्लॉयमेंट के लिए तैयार।\n\n### Example\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Jane Doe | Full Stack Web Developer</title>\n</head>\n<body>\n\n  <header>\n    <h1>Jane Doe</h1>\n    <p>Junior Full Stack Web Developer &bull; Nextsem Academy Graduate</p>\n    <nav>\n      <ul>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#skills\">Skills</a></li>\n        <li><a href=\"#projects\">Projects</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"about\">\n      <h2>About Me</h2>\n      <p>I build fast, accessible, and standards-compliant web applications using pure HTML5 and modern developer workflows.</p>\n    </section>\n\n    <section id=\"skills\">\n      <h2>Technical Skills</h2>\n      <ul>\n        <li>HTML5 Semantic Architecture</li>\n        <li>Windows 11 Command Prompt (cmd.exe)</li>\n        <li>Git Version Control</li>\n      </ul>\n    </section>\n\n    <section id=\"contact\">\n      <h2>Contact Me</h2>\n      <form action=\"/send-message\" method=\"post\">\n        <p>\n          <label for=\"cname\">Your Name:</label><br>\n          <input type=\"text\" id=\"cname\" name=\"name\" required>\n        </p>\n        <p>\n          <label for=\"cemail\">Your Email:</label><br>\n          <input type=\"email\" id=\"cemail\" name=\"email\" required>\n        </p>\n        <p>\n          <label for=\"cmsg\">Message:</label><br>\n          <textarea id=\"cmsg\" name=\"message\" rows=\"4\" cols=\"40\" required></textarea>\n        </p>\n        <button type=\"submit\">Send Message</button>\n      </form>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Jane Doe. Built with Nextsem Academy Curriculum.</p>\n  </footer>\n\n</body>\n</html>\n```"
    }
  }
];
