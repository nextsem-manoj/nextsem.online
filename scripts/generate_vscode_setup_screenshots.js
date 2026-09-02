const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const outputDir = path.join(__dirname, "../public/screenshots/vscode");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Find Chrome or Edge executable on Windows
const browserPaths = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"
];

let executablePath = browserPaths.find(p => fs.existsSync(p));
if (!executablePath) {
  console.error("No browser executable found.");
  process.exit(1);
}

const screenshots = [
  // ── 0. VISUAL STUDIO CODE ON WINDOWS 11 WORKSPACE OVERVIEW ──
  {
    fileName: "step0_vscode_windows11_workspace.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', -apple-system, sans-serif; }
    html, body { width: 100%; height: 100%; background: #1e1e1e; }
    .vscode-window {
      width: 1000px; height: 620px; background: #1e1e1e; display: flex; flex-direction: column;
      border: 1px solid #333; border-radius: 8px; overflow: hidden;
    }
    .titlebar {
      background: #1f1f1f; height: 32px; display: flex; align-items: center; justify-content: space-between;
      padding: 0 12px; color: #ccc; font-size: 11.5px; border-bottom: 1px solid #252526;
    }
    .win-controls { display: flex; height: 100%; }
    .win-btn { width: 44px; height: 100%; display: flex; align-items: center; justify-content: center; color: #ccc; font-size: 11px; }
    .win-close:hover { background: #e81123; color: #fff; }
    .main-body { flex: 1; display: flex; overflow: hidden; }
    .activity-bar {
      width: 48px; background: #181818; display: flex; flex-direction: column; align-items: center;
      padding: 10px 0; gap: 18px; color: #858585; font-size: 18px; border-right: 1px solid #252526;
    }
    .act-active { color: #fff; border-left: 2px solid #0078d4; width: 100%; text-align: center; }
    .explorer-pane {
      width: 220px; background: #181818; border-right: 1px solid #252526; padding: 10px; font-size: 12px; color: #cccccc;
    }
    .exp-title { font-size: 11px; font-weight: 700; color: #bbb; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px; }
    .file-tree-item { display: flex; align-items: center; gap: 6px; padding: 4px 6px; border-radius: 4px; }
    .file-active { background: #2a2d2e; color: #fff; font-weight: 600; }
    .editor-pane { flex: 1; display: flex; flex-direction: column; background: #1e1e1e; }
    .tabs-bar { background: #181818; display: flex; border-bottom: 1px solid #252526; height: 32px; }
    .tab {
      background: #1e1e1e; color: #ffffff; padding: 6px 14px; font-size: 12px; display: flex; align-items: center;
      gap: 8px; border-top: 2px solid #0078d4; border-right: 1px solid #252526; font-weight: 500;
    }
    .code-area { flex: 1; padding: 16px; font-family: 'Consolas', monospace; font-size: 13px; line-height: 1.6; color: #d4d4d4; }
    .tag { color: #569cd6; font-weight: bold; }
    .attr { color: #9cdcfe; }
    .str { color: #ce9178; }
    .terminal-pane {
      height: 140px; background: #181818; border-top: 1px solid #333; padding: 10px 16px; font-family: 'Consolas', monospace; font-size: 11.5px;
    }
    .statusbar {
      height: 22px; background: #007acc; color: #fff; font-size: 11px; display: flex; align-items: center;
      justify-content: space-between; padding: 0 12px;
    }
  </style>
</head>
<body>
  <div class="vscode-window">
    <div class="titlebar">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="color:#0078d4; font-weight:900;">Visual Studio Code</span>
        <span style="color:#888;">— my-first-website — index.html</span>
      </div>
      <div class="win-controls">
        <div class="win-btn">&#x2014;</div>
        <div class="win-btn">&#x25A2;</div>
        <div class="win-btn win-close">&#x2715;</div>
      </div>
    </div>
    <div class="main-body">
      <div class="activity-bar">
        <span class="act-active">📁</span> <span>🔍</span> <span>🌿</span> <span>🐞</span> <span>🧩</span>
      </div>
      <div class="explorer-pane">
        <div class="exp-title">Explorer: my-first-website</div>
        <div class="file-tree-item file-active">
          <span style="color:#e44d26; font-weight:bold;">&lt;&gt;</span>
          <span>index.html</span>
        </div>
        <div class="file-tree-item">
          <span style="color:#264de4; font-weight:bold;">#</span>
          <span>style.css</span>
        </div>
        <div class="file-tree-item">
          <span style="color:#f7df1e; font-weight:bold;">JS</span>
          <span>app.js</span>
        </div>
      </div>
      <div class="editor-pane">
        <div class="tabs-bar">
          <div class="tab">
            <span style="color:#e44d26;">&lt;&gt;</span> index.html
          </div>
        </div>
        <div class="code-area">
          <div><span class="tag">&lt;!DOCTYPE html&gt;</span></div>
          <div><span class="tag">&lt;html <span class="attr">lang</span>=<span class="str">"en"</span>&gt;</span></div>
          <div><span class="tag">&lt;head&gt;</span></div>
          <div style="padding-left:16px;"><span class="tag">&lt;title&gt;</span>Full Stack Web Developer on Windows 11<span class="tag">&lt;/title&gt;</span></div>
          <div><span class="tag">&lt;/head&gt;</span></div>
          <div><span class="tag">&lt;body&gt;</span></div>
          <div style="padding-left:16px;"><span class="tag">&lt;h1&gt;</span>Visual Studio Code on Windows 11 Pro<span class="tag">&lt;/h1&gt;</span></div>
          <div style="padding-left:16px;"><span class="tag">&lt;p&gt;</span>Live Developer Workspace with Integrated Terminal & Extensions.<span class="tag">&lt;/p&gt;</span></div>
          <div><span class="tag">&lt;/body&gt;</span></div>
          <div><span class="tag">&lt;/html&gt;</span></div>
        </div>
        <div class="terminal-pane">
          <div style="color:#04AA6D; font-weight:bold; margin-bottom:4px;">TERMINAL • powershell (Windows 11 Pro)</div>
          <div style="color:#ccc;">PS C:\\Users\\Student\\my-first-website&gt; code .</div>
          <div style="color:#81c995;">[Live Server] Server is running at http://127.0.0.1:5500/index.html</div>
        </div>
      </div>
    </div>
    <div class="statusbar">
      <div style="display:flex; gap:12px;">
        <span>main*</span> <span>✓ 0 errors</span> <span>⚡ Go Live (Port 5500)</span>
      </div>
      <div style="display:flex; gap:12px;">
        <span>UTF-8</span> <span>HTML</span> <span>Prettier</span>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ── 1. GOOGLE CHROME SEARCH FOR VS CODE ON WINDOWS 11 ──
  {
    fileName: "step1_google_search_vscode.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Roboto, sans-serif; }
    html, body { width: 100%; height: 100%; background: #202124; }
    .chrome-window {
      width: 1000px; height: 620px; background: #202124; display: flex; flex-direction: column;
      border: 1px solid #3c4043; border-radius: 8px; overflow: hidden;
    }
    .chrome-titlebar {
      background: #1f1f1f; height: 40px; display: flex; align-items: center; justify-content: space-between;
      padding-left: 8px; border-bottom: 1px solid #2d2d2d; select-none: none;
    }
    .tabs-group { display: flex; align-items: flex-end; height: 100%; }
    .tab {
      background: #35363a; color: #fff; font-size: 12px; padding: 8px 18px; border-radius: 8px 8px 0 0;
      display: flex; align-items: center; gap: 8px; font-weight: 500; height: 34px;
    }
    .win-controls { display: flex; height: 100%; }
    .win-btn { width: 44px; height: 100%; display: flex; align-items: center; justify-content: center; color: #ccc; font-size: 12px; }
    .win-close:hover { background: #e81123; color: #fff; }
    .chrome-nav {
      background: #35363a; padding: 8px 12px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #3c4043;
    }
    .nav-icons { color: #9aa0a6; font-size: 16px; display: flex; gap: 14px; }
    .address-bar {
      flex: 1; background: #202124; border: 1px solid #5f6368; color: #e8eaed; border-radius: 20px;
      padding: 6px 16px; font-size: 13px; display: flex; align-items: center; gap: 8px;
    }
    .page-body { flex: 1; background: #202124; padding: 36px 60px; color: #fff; overflow: hidden; }
    .search-input-box {
      background: #303134; border: 1px solid #5f6368; border-radius: 24px; padding: 12px 20px;
      display: flex; align-items: center; gap: 14px; max-width: 650px; margin-bottom: 28px;
    }
    .search-text { color: #fff; font-size: 15px; font-weight: 500; flex: 1; }
    .search-result-card { max-width: 700px; }
    .site-header { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
    .vs-icon-badge { width: 26px; height: 26px; background: #0078d4; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 900; font-size: 14px; }
    .result-link { color: #8ab4f8; font-size: 21px; font-weight: 500; text-decoration: none; margin-bottom: 6px; display: inline-block; }
    .result-desc { color: #bdc1c6; font-size: 13.5px; line-height: 1.5; }
    .official-tag { background: #137333; color: #81c995; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="chrome-window">
    <div class="chrome-titlebar">
      <div class="tabs-group">
        <div class="tab">
          <span style="color:#8ab4f8; font-weight:bold;">G</span> download visual studio code windows 11 - Google Search
        </div>
      </div>
      <div class="win-controls">
        <div class="win-btn">&#x2014;</div>
        <div class="win-btn">&#x25A2;</div>
        <div class="win-btn win-close">&#x2715;</div>
      </div>
    </div>
    <div class="chrome-nav">
      <div class="nav-icons">
        <span>&#8592;</span> <span>&#8594;</span> <span>&#8635;</span>
      </div>
      <div class="address-bar">
        <span style="color:#81c995;">🔒</span>
        <span style="color:#fff;">https://www.google.com/search?q=download+visual+studio+code+windows+11</span>
      </div>
    </div>
    <div class="page-body">
      <div class="search-input-box">
        <span style="color:#9aa0a6;">🔍</span>
        <div class="search-text">download visual studio code windows 11</div>
        <span style="color:#8ab4f8; font-size:16px;">✕</span>
      </div>
      <div class="search-result-card">
        <div class="site-header">
          <div class="vs-icon-badge">&lt;&gt;</div>
          <div>
            <div style="font-size:13px; color:#bdc1c6; display:flex; align-items:center; gap:6px;">
              <span>Visual Studio Code</span>
              <span class="official-tag">Official Microsoft</span>
            </div>
            <div style="font-size:11px; color:#9aa0a6;">https://code.visualstudio.com &rsaquo; Download</div>
          </div>
        </div>
        <a class="result-link" href="#">Download Visual Studio Code - Windows 11 (64-bit)</a>
        <div class="result-desc">
          Download Visual Studio Code for Windows 11 / Windows 10 (User Installer 64-bit). Build and debug modern Full Stack web applications with HTML, CSS, JavaScript, React, and Node.js.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ── 2. OFFICIAL CODE.VISUALSTUDIO.COM DOWNLOAD PAGE (CHROME WINDOWS 11) ──
  {
    fileName: "step2_vscode_download_page.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Roboto, sans-serif; }
    html, body { width: 100%; height: 100%; background: #181818; }
    .chrome-window {
      width: 1000px; height: 620px; background: #181818; display: flex; flex-direction: column;
      border: 1px solid #333; border-radius: 8px; overflow: hidden;
    }
    .chrome-titlebar {
      background: #1f1f1f; height: 40px; display: flex; align-items: center; justify-content: space-between;
      padding-left: 8px; border-bottom: 1px solid #2d2d2d;
    }
    .tab {
      background: #2b2b2b; color: #fff; font-size: 12px; padding: 8px 18px; border-radius: 8px 8px 0 0;
      display: flex; align-items: center; gap: 8px; font-weight: 500; height: 34px;
    }
    .win-controls { display: flex; height: 100%; }
    .win-btn { width: 44px; height: 100%; display: flex; align-items: center; justify-content: center; color: #ccc; font-size: 12px; }
    .win-close:hover { background: #e81123; color: #fff; }
    .chrome-nav {
      background: #2b2b2b; padding: 8px 12px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #333;
    }
    .address-bar {
      flex: 1; background: #181818; border: 1px solid #444; color: #e8eaed; border-radius: 20px;
      padding: 6px 16px; font-size: 13px; display: flex; align-items: center; gap: 8px;
    }
    .download-body {
      flex: 1; background: #181818; padding: 40px 60px; color: #fff; text-align: center;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
    }
    .hero-h1 { font-size: 28px; font-weight: 600; margin-bottom: 10px; color: #fff; }
    .hero-p { color: #9aa0a6; font-size: 14px; margin-bottom: 32px; }
    .cards-row { display: flex; gap: 20px; justify-content: center; width: 100%; max-width: 860px; }
    .dl-card {
      background: #252526; border: 1px solid #3c3c3c; border-radius: 10px; padding: 24px;
      flex: 1; display: flex; flex-direction: column; align-items: center;
    }
    .featured-card { border: 2px solid #0078d4; background: #1e2430; box-shadow: 0 10px 30px rgba(0,120,212,0.3); }
    .os-title { font-size: 18px; font-weight: 600; margin: 12px 0 6px; }
    .dl-btn {
      background: #0078d4; color: #fff; font-weight: 700; font-size: 15px; padding: 12px 24px;
      border-radius: 6px; text-decoration: none; margin-top: 14px; display: flex; align-items: center; gap: 8px;
    }
    .dl-btn:hover { background: #006abc; }
    .sub-links { color: #9aa0a6; font-size: 12px; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="chrome-window">
    <div class="chrome-titlebar">
      <div class="tab">
        <span style="color:#0078d4; font-weight:bold;">Visual Studio Code</span> Download - Windows 11
      </div>
      <div class="win-controls">
        <div class="win-btn">&#x2014;</div>
        <div class="win-btn">&#x25A2;</div>
        <div class="win-btn win-close">&#x2715;</div>
      </div>
    </div>
    <div class="chrome-nav">
      <div style="color:#9aa0a6; font-size:15px; display:flex; gap:10px;">
        <span>&#8592;</span> <span>&#8594;</span> <span>&#8635;</span>
      </div>
      <div class="address-bar">
        <span style="color:#81c995;">🔒</span>
        <span style="color:#fff;">https://code.visualstudio.com/Download</span>
      </div>
    </div>
    <div class="download-body">
      <h1 class="hero-h1">Download Visual Studio Code</h1>
      <p class="hero-p">Free built on open source. Runs on Windows 11 / 10.</p>
      <div class="cards-row">
        <!-- Windows 11 Card (Featured) -->
        <div class="dl-card featured-card">
          <div style="font-size:36px; color:#0078d4; font-weight:900;">⊞</div>
          <div class="os-title">Windows</div>
          <div style="color:#bdc1c6; font-size:12px;">Windows 11, 10 (64-bit)</div>
          <a class="dl-btn" href="#">
            <span>⬇ User Installer (64-bit)</span>
          </a>
          <div class="sub-links">
            User Installer | System Installer | .zip
          </div>
        </div>
        <!-- macOS Card -->
        <div class="dl-card" style="opacity:0.7;">
          <div style="font-size:36px; color:#ccc;"></div>
          <div class="os-title">macOS</div>
          <div style="color:#888; font-size:12px;">Universal .zip</div>
          <div style="background:#333; color:#aaa; padding:10px 20px; border-radius:6px; margin-top:14px; font-size:13px;">Download Mac</div>
        </div>
        <!-- Linux Card -->
        <div class="dl-card" style="opacity:0.7;">
          <div style="font-size:36px; color:#ccc;">🐧</div>
          <div class="os-title">Linux</div>
          <div style="color:#888; font-size:12px;">.deb / .rpm</div>
          <div style="background:#333; color:#aaa; padding:10px 20px; border-radius:6px; margin-top:14px; font-size:13px;">.deb 64-bit</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ── 3. WINDOWS 11 FILE EXPLORER DOWNLOADS FOLDER ──
  {
    fileName: "step3_windows11_downloads_folder.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI Variable Text', 'Segoe UI', sans-serif; }
    html, body { width: 100%; height: 100%; background: #191919; }
    .win-window {
      width: 1000px; height: 620px; background: #191919; display: flex; flex-direction: column;
      border: 1px solid #2d2d2d; border-radius: 8px; overflow: hidden;
    }
    .win-titlebar {
      background: #202020; height: 42px; display: flex; align-items: center; justify-content: space-between;
      padding-left: 12px; border-bottom: 1px solid #2d2d2d;
    }
    .folder-tab {
      background: #2c2c2c; color: #fff; font-size: 12px; padding: 8px 16px; border-radius: 6px;
      display: flex; align-items: center; gap: 8px; font-weight: 500;
    }
    .win-controls { display: flex; height: 100%; }
    .win-btn { width: 44px; height: 100%; display: flex; align-items: center; justify-content: center; color: #ccc; font-size: 11px; }
    .win-close:hover { background: #e81123; color: #fff; }
    .command-bar {
      background: #202020; padding: 6px 14px; display: flex; align-items: center; gap: 16px;
      border-bottom: 1px solid #2d2d2d; font-size: 12px; color: #ccc;
    }
    .cmd-item { display: flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 4px; }
    .address-row {
      background: #191919; padding: 8px 14px; display: flex; align-items: center; gap: 10px;
      border-bottom: 1px solid #2d2d2d;
    }
    .path-box {
      flex: 1; background: #232323; border: 1px solid #333; color: #fff; border-radius: 4px;
      padding: 5px 12px; font-size: 12px; display: flex; align-items: center; gap: 8px;
    }
    .main-view { flex: 1; display: flex; }
    .nav-pane {
      width: 200px; background: #191919; border-right: 1px solid #2d2d2d; padding: 12px; font-size: 12px; color: #ccc;
    }
    .nav-item { padding: 6px 10px; border-radius: 4px; display: flex; align-items: center; gap: 8px; margin-bottom: 2px; }
    .nav-active { background: #2c2c2c; color: #fff; font-weight: 600; }
    .file-list { flex: 1; padding: 16px 24px; color: #fff; }
    .file-row {
      display: flex; align-items: center; justify-content: space-between; padding: 12px 16px;
      border-radius: 6px; background: #232323; border: 1px solid #0078d4;
      box-shadow: 0 4px 14px rgba(0,120,212,0.25);
    }
    .file-name-group { display: flex; align-items: center; gap: 12px; }
    .exe-badge {
      width: 36px; height: 36px; background: #0078d4; border-radius: 6px; display: flex; align-items: center;
      justify-content: center; font-weight: bold; color: #fff; font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="win-window">
    <div class="win-titlebar">
      <div class="folder-tab">
        <span>📥</span> Downloads — Windows 11 File Explorer
      </div>
      <div class="win-controls">
        <div class="win-btn">&#x2014;</div>
        <div class="win-btn">&#x25A2;</div>
        <div class="win-btn win-close">&#x2715;</div>
      </div>
    </div>
    <div class="command-bar">
      <div class="cmd-item">➕ New</div>
      <div class="cmd-item">✂ Cut</div>
      <div class="cmd-item">📋 Copy</div>
      <div class="cmd-item">🏷 Rename</div>
      <div class="cmd-item">🗑 Delete</div>
    </div>
    <div class="address-row">
      <div class="path-box">
        <span>This PC</span> &rsaquo; <span>Downloads</span>
      </div>
    </div>
    <div class="main-view">
      <div class="nav-pane">
        <div class="nav-item">🏠 Home</div>
        <div class="nav-item">📁 Desktop</div>
        <div class="nav-item nav-active">📥 Downloads</div>
        <div class="nav-item">📄 Documents</div>
        <div class="nav-item">💾 Local Disk (C:)</div>
      </div>
      <div class="file-list">
        <div style="font-size:12px; color:#888; margin-bottom:12px; font-weight:600;">TODAY</div>
        <div class="file-row">
          <div class="file-name-group">
            <div class="exe-badge">&lt;&gt;</div>
            <div>
              <div style="font-weight:700; font-size:14px; color:#fff;">VSCodeUserSetup-x64.exe</div>
              <div style="font-size:11px; color:#81c995; margin-top:2px;">Microsoft Visual Studio Code Setup Wizard • 98.4 MB</div>
            </div>
          </div>
          <div style="color:#0078d4; font-size:12px; font-weight:700; background:rgba(0,120,212,0.15); padding:6px 14px; border-radius:4px; border:1px solid #0078d4;">
            ➔ Double-Click to Install
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ── 4. VS CODE SETUP WIZARD WITH WINDOWS CHECKBOXES ──
  {
    fileName: "step4_vscode_setup_wizard_checkboxes.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', -apple-system, sans-serif; }
    html, body { width: 100%; height: 100%; background: #0c1222; display: flex; align-items: center; justify-content: center; }
    .wizard-dialog {
      width: 680px; background: #202020; border: 1px solid #3c3c3c; border-radius: 8px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.85); overflow: hidden; display: flex; flex-direction: column;
    }
    .wizard-titlebar {
      background: #2b2b2b; height: 34px; display: flex; align-items: center; justify-content: space-between;
      padding: 0 12px; color: #fff; font-size: 12px; font-weight: 500; border-bottom: 1px solid #333;
    }
    .win-controls { display: flex; height: 100%; }
    .win-btn { width: 40px; height: 100%; display: flex; align-items: center; justify-content: center; color: #ccc; font-size: 11px; }
    .win-close:hover { background: #e81123; color: #fff; }
    .wizard-content { padding: 24px 32px; color: #fff; }
    .step-title { font-size: 16px; font-weight: 600; margin-bottom: 6px; color: #fff; }
    .step-subtitle { font-size: 12px; color: #9aa0a6; margin-bottom: 20px; line-height: 1.4; }
    .checkbox-group { display: flex; flex-direction: column; gap: 12px; }
    .cb-row {
      background: #2a2a2a; border: 1px solid #3c3c3c; border-radius: 6px; padding: 10px 14px;
      display: flex; align-items: center; gap: 12px;
    }
    .cb-box {
      width: 18px; height: 18px; background: #0078d4; border-radius: 3px; display: flex;
      align-items: center; justify-content: center; color: #fff; font-size: 12px; font-weight: bold;
    }
    .cb-label { font-size: 12.5px; font-weight: 600; color: #fff; }
    .cb-desc { font-size: 11px; color: #81c995; margin-top: 2px; }
    .wizard-footer {
      background: #2b2b2b; padding: 12px 24px; display: flex; justify-content: flex-end; gap: 10px;
      border-top: 1px solid #333;
    }
    .btn { padding: 6px 18px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; border: none; }
    .btn-next { background: #0078d4; color: #fff; box-shadow: 0 4px 12px rgba(0,120,212,0.4); }
    .btn-cancel { background: #2d2d2d; color: #ccc; border: 1px solid #444; }
  </style>
</head>
<body>
  <div class="wizard-dialog">
    <div class="wizard-titlebar">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="color:#0078d4; font-size:16px;">🔷</span>
        <span>Setup - Visual Studio Code (User)</span>
      </div>
      <div class="win-controls">
        <div class="win-btn win-close">&#x2715;</div>
      </div>
    </div>
    <div class="wizard-content">
      <div class="step-title">Select Additional Tasks</div>
      <div class="step-subtitle">Which additional tasks should be performed while installing Visual Studio Code on Windows 11?</div>
      <div class="checkbox-group">
        <div class="cb-row">
          <div class="cb-box">✓</div>
          <div>
            <div class="cb-label">Add "Open with Code" action to Windows Explorer file context menu</div>
            <div class="cb-desc">Allows you to right-click any single HTML/CSS/JS file and edit it directly.</div>
          </div>
        </div>
        <div class="cb-row">
          <div class="cb-box">✓</div>
          <div>
            <div class="cb-label">Add "Open with Code" action to Windows Explorer directory context menu</div>
            <div class="cb-desc">Allows you to right-click your whole project folder and open it instantly.</div>
          </div>
        </div>
        <div class="cb-row">
          <div class="cb-box">✓</div>
          <div>
            <div class="cb-label">Register Code as an editor for supported file types (.html, .css, .js)</div>
          </div>
        </div>
        <div class="cb-row">
          <div class="cb-box">✓</div>
          <div>
            <div class="cb-label">Add to PATH (requires shell restart)</div>
            <div class="cb-desc">Enables launching VS Code from Command Prompt (CMD) using the "code ." command.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="wizard-footer">
      <button class="btn btn-cancel">&lt; Back</button>
      <button class="btn btn-next">Next &gt;</button>
      <button class="btn btn-cancel">Cancel</button>
    </div>
  </div>
</body>
</html>`
  },

  // ── 5. VS CODE EXTENSIONS MARKETPLACE (LIVE SERVER INSTALL) ──
  {
    fileName: "step5_vscode_extensions_liveserver.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', -apple-system, sans-serif; }
    html, body { width: 100%; height: 100%; background: #1e1e1e; }
    .vscode-window {
      width: 1000px; height: 620px; background: #1e1e1e; display: flex; flex-direction: column;
      border: 1px solid #333; border-radius: 8px; overflow: hidden;
    }
    .titlebar {
      background: #1f1f1f; height: 32px; display: flex; align-items: center; justify-content: space-between;
      padding: 0 12px; color: #ccc; font-size: 11.5px; border-bottom: 1px solid #252526;
    }
    .win-controls { display: flex; height: 100%; }
    .win-btn { width: 44px; height: 100%; display: flex; align-items: center; justify-content: center; color: #ccc; font-size: 11px; }
    .win-close:hover { background: #e81123; color: #fff; }
    .main-body { flex: 1; display: flex; }
    .activity-bar {
      width: 48px; background: #181818; display: flex; flex-direction: column; align-items: center;
      padding: 10px 0; gap: 18px; color: #858585; font-size: 18px; border-right: 1px solid #252526;
    }
    .act-active { color: #fff; border-left: 2px solid #0078d4; width: 100%; text-align: center; }
    .side-pane {
      width: 280px; background: #181818; border-right: 1px solid #252526; padding: 12px;
      display: flex; flex-direction: column;
    }
    .ext-search {
      background: #2a2d2e; border: 1px solid #3c3c3c; color: #fff; padding: 6px 10px;
      font-size: 12px; border-radius: 3px; outline: none; margin-bottom: 12px;
    }
    .ext-card {
      background: #252526; border-radius: 4px; padding: 10px; display: flex; gap: 10px;
      border: 1px solid #0078d4;
    }
    .ext-icon { width: 42px; height: 42px; background: #7158e2; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: bold; font-size: 20px; }
    .content-pane { flex: 1; background: #1e1e1e; padding: 32px; color: #fff; }
    .install-badge {
      background: #04AA6D; color: white; padding: 4px 14px; border-radius: 4px; font-weight: bold;
      font-size: 12px; display: inline-flex; align-items: center; gap: 4px; margin-top: 8px;
    }
  </style>
</head>
<body>
  <div class="vscode-window">
    <div class="titlebar">
      <span>Visual Studio Code — Extensions: Live Server (Ritwick Dey)</span>
      <div class="win-controls">
        <div class="win-btn">&#x2014;</div>
        <div class="win-btn">&#x25A2;</div>
        <div class="win-btn win-close">&#x2715;</div>
      </div>
    </div>
    <div class="main-body">
      <div class="activity-bar">
        <span>📁</span> <span>🔍</span> <span>🌿</span> <span>🐞</span> <span class="act-active">🧩</span>
      </div>
      <div class="side-pane">
        <div style="font-size:11px; font-weight:bold; color:#bbb; margin-bottom:8px;">EXTENSIONS</div>
        <input class="ext-search" value="Live Server" readonly>
        <div class="ext-card">
          <div class="ext-icon">⚡</div>
          <div style="flex:1;">
            <div style="font-size:13px; font-weight:bold; color:#fff;">Live Server</div>
            <div style="font-size:11px; color:#aaa;">Ritwick Dey</div>
            <div style="font-size:10px; color:#04AA6D; margin-top:4px;">50M+ Downloads ★ 4.8</div>
          </div>
        </div>
      </div>
      <div class="content-pane">
        <div style="display:flex; align-items:center; gap:16px;">
          <div style="width:64px; height:64px; background:#7158e2; border-radius:10px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:32px;">⚡</div>
          <div>
            <h2 style="font-size:24px; font-weight:600;">Live Server</h2>
            <div style="color:#aaa; font-size:13px;">Ritwick Dey | 50,432,198 downloads</div>
            <div class="install-badge">✓ Installed &amp; Ready</div>
          </div>
        </div>
        <div style="margin-top:24px; color:#ccc; font-size:13px; line-height:1.6; max-width:550px;">
          Launch a development local Server with live reload feature for static & dynamic HTML pages. Right-click any <strong>index.html</strong> file and select <strong>"Open with Live Server"</strong> to view real-time changes!
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ── 6. WINDOWS 11 RIGHT-CLICK OPEN WITH CODE ──
  {
    fileName: "step6_windows11_rightclick_open_with_code.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI Variable Text', 'Segoe UI', sans-serif; }
    html, body { width: 100%; height: 100%; background: #0c1222; }
    .desktop-scene {
      width: 1000px; height: 620px; background: radial-gradient(circle at 50% 30%, #1e293b, #090d16);
      border: 1px solid #1e293b; border-radius: 8px; position: relative; overflow: hidden;
      display: flex; flex-direction: column; justify-content: space-between;
    }
    .desktop-area { flex: 1; position: relative; }
    .folder-target {
      position: absolute; top: 80px; left: 120px; display: flex; flex-direction: column;
      align-items: center; gap: 6px; padding: 12px 18px; border-radius: 8px;
      background: rgba(0, 120, 212, 0.28); border: 1px solid rgba(0, 120, 212, 0.7);
    }
    .folder-icon { font-size: 54px; }
    .folder-name { color: #fff; font-size: 13px; font-weight: 600; }
    .context-menu {
      position: absolute; top: 120px; left: 250px; width: 300px; background: rgba(32, 32, 32, 0.95);
      backdrop-filter: blur(20px); border: 1px solid #3c3c3c; border-radius: 8px; padding: 6px;
      box-shadow: 0 25px 60px rgba(0,0,0,0.85); color: #e1e1e1; font-size: 13px;
    }
    .cm-item {
      padding: 9px 14px; border-radius: 5px; display: flex; align-items: center; justify-content: space-between;
    }
    .cm-highlight {
      background: #0078d4; color: #fff; font-weight: 700;
      box-shadow: 0 0 15px rgba(0,120,212,0.6);
    }
    .cm-divider { height: 1px; background: #333; margin: 4px 6px; }
    .win11-taskbar {
      height: 48px; background: rgba(20, 20, 20, 0.92); backdrop-filter: blur(20px);
      border-top: 1px solid #2d2d2d; display: flex; align-items: center; justify-content: center;
      gap: 16px; select-none: none;
    }
    .tb-icon { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 4px; font-size: 18px; color: #fff; }
    .tb-icon:hover { background: rgba(255,255,255,0.1); }
  </style>
</head>
<body>
  <div class="desktop-scene">
    <div class="desktop-area">
      <div class="folder-target">
        <div class="folder-icon">📁</div>
        <div class="folder-name">my-first-website</div>
      </div>
      <div class="context-menu">
        <div class="cm-item">
          <span>📂 Open in new window</span>
        </div>
        <div class="cm-item">
          <span>📌 Pin to Quick access</span>
        </div>
        <div class="cm-divider"></div>
        <div class="cm-item cm-highlight">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:15px; color:#fff;">🔷</span>
            <span>Open with Code</span>
          </div>
        </div>
        <div class="cm-divider"></div>
        <div class="cm-item">
          <span>✂ Cut</span> <span style="color:#888; font-size:11px;">Ctrl+X</span>
        </div>
        <div class="cm-item">
          <span>📋 Copy</span> <span style="color:#888; font-size:11px;">Ctrl+C</span>
        </div>
        <div class="cm-item">
          <span>🏷 Rename</span> <span style="color:#888; font-size:11px;">F2</span>
        </div>
      </div>
    </div>
    <div class="win11-taskbar">
      <div class="tb-icon" style="color:#0078d4; font-weight:900;">⊞</div>
      <div class="tb-icon">🔍</div>
      <div class="tb-icon">📁</div>
      <div class="tb-icon" style="color:#0078d4;">🔷</div>
      <div class="tb-icon">🌐</div>
    </div>
  </div>
</body>
</html>`
  },

  // ── 7. VISUAL STUDIO CODE & GOOGLE CHROME LIVE SERVER PREVIEW ──
  {
    fileName: "step7_first_index_html_live_server.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Roboto, sans-serif; }
    html, body { width: 100%; height: 100%; background: #000; display: flex; }
    .split-container { width: 1000px; height: 620px; display: flex; background: #1e1e1e; border: 1px solid #333; border-radius: 8px; overflow: hidden; }
    .left-vscode {
      width: 55%; background: #1e1e1e; border-right: 2px solid #0078d4; display: flex; flex-direction: column;
    }
    .right-chrome {
      width: 45%; background: #202124; display: flex; flex-direction: column;
    }
    .titlebar {
      background: #1f1f1f; height: 32px; display: flex; align-items: center; justify-content: space-between;
      padding: 0 12px; color: #ccc; font-size: 11px; border-bottom: 1px solid #252526;
    }
    .editor-body {
      flex: 1; padding: 16px; font-family: 'Consolas', monospace; font-size: 12.5px; color: #d4d4d4;
      line-height: 1.6; background: #1e1e1e;
    }
    .tag { color: #569cd6; font-weight: bold; }
    .attr { color: #9cdcfe; }
    .str { color: #ce9178; }
    .chrome-titlebar {
      background: #1f1f1f; height: 32px; display: flex; align-items: center; padding-left: 8px; border-bottom: 1px solid #2d2d2d;
    }
    .chrome-tab {
      background: #35363a; color: #fff; font-size: 11px; padding: 5px 12px; border-radius: 6px 6px 0 0;
      display: flex; align-items: center; gap: 6px; font-weight: 500;
    }
    .chrome-nav {
      background: #35363a; padding: 6px 10px; border-bottom: 1px solid #3c4043; display: flex; align-items: center; gap: 8px;
    }
    .chrome-address-bar {
      background: #202124; border: 1px solid #5f6368; color: #fff; border-radius: 12px;
      padding: 4px 10px; flex: 1; font-size: 11px; display: flex; align-items: center; gap: 6px;
    }
    .chrome-body {
      flex: 1; background: #ffffff; padding: 24px; color: #0f172a; font-family: sans-serif;
    }
  </style>
</head>
<body>
  <div class="split-container">
    <!-- Left: Visual Studio Code on Windows 11 -->
    <div class="left-vscode">
      <div class="titlebar">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="color:#0078d4; font-weight:bold;">VS Code</span>
          <span>— index.html</span>
        </div>
      </div>
      <div class="editor-body">
        <div><span class="tag">&lt;!DOCTYPE html&gt;</span></div>
        <div><span class="tag">&lt;html <span class="attr">lang</span>=<span class="str">"en"</span>&gt;</span></div>
        <div><span class="tag">&lt;head&gt;</span></div>
        <div style="padding-left:14px;"><span class="tag">&lt;meta <span class="attr">charset</span>=<span class="str">"UTF-8"</span>&gt;</span></div>
        <div style="padding-left:14px;"><span class="tag">&lt;title&gt;</span>My First Website<span class="tag">&lt;/title&gt;</span></div>
        <div><span class="tag">&lt;/head&gt;</span></div>
        <div><span class="tag">&lt;body&gt;</span></div>
        <div style="padding-left:14px;"><span class="tag">&lt;h1&gt;</span>Hello World! My First Web Page 🚀<span class="tag">&lt;/h1&gt;</span></div>
        <div style="padding-left:14px;"><span class="tag">&lt;p&gt;</span>I am learning Full Stack Web Development on Nextsem Academy.<span class="tag">&lt;/p&gt;</span></div>
        <div><span class="tag">&lt;/body&gt;</span></div>
        <div><span class="tag">&lt;/html&gt;</span></div>
      </div>
      <div style="background:#007acc; color:#fff; font-size:10.5px; padding:4px 12px; display:flex; justify-content:space-between;">
        <span>⚡ Port: 5500 (Live Server Active)</span>
        <span>HTML • UTF-8</span>
      </div>
    </div>

    <!-- Right: Google Chrome Browser Live Server -->
    <div class="right-chrome">
      <div class="chrome-titlebar">
        <div class="chrome-tab">
          <span style="color:#81c995;">●</span> My First Website
        </div>
      </div>
      <div class="chrome-nav">
        <span style="color:#9aa0a6; font-size:12px;">↻</span>
        <div class="chrome-address-bar">
          <span style="color:#81c995;">🔒</span>
          <span style="color:#fff;">http://127.0.0.1:5500/index.html</span>
        </div>
      </div>
      <div class="chrome-body">
        <h1 style="color:#0f172a; font-size:19px; font-weight:800; margin-bottom:8px;">Hello World! My First Web Page 🚀</h1>
        <p style="color:#334155; font-size:13.5px; line-height:1.5;">I am learning Full Stack Web Development on Nextsem Academy.</p>
        <div style="margin-top:24px; padding:12px 14px; background:#ecfdf5; border-left:4px solid #04AA6D; border-radius:4px; font-size:11.5px; color:#065f46; font-weight:600;">
          ✓ Google Chrome: Live Server auto-reloads on file save!
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  }
];

async function generateScreenshots() {
  console.log(`Launching browser from: ${executablePath}...`);
  const browser = await puppeteer.launch({
    executablePath,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 620, deviceScaleFactor: 2 });

  for (const shot of screenshots) {
    console.log(`Generating ${shot.fileName}...`);
    await page.setContent(shot.html, { waitUntil: "domcontentloaded" });
    await new Promise(r => setTimeout(r, 100));
    const targetPath = path.join(outputDir, shot.fileName);
    await page.screenshot({ path: targetPath, type: "png" });
    console.log(`Saved: ${targetPath}`);
  }

  await browser.close();
  console.log("All Visual Studio Code on Windows 11 & Google Chrome screenshots generated successfully!");
}

generateScreenshots().catch(console.error);
