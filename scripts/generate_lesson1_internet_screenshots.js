const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const outputDir = path.join(__dirname, "../public/screenshots/html");
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
  // ── 1. THE PHYSICAL REALITY OF THE INTERNET (STRICTLY MONOCHROMATIC THEME) ──
  {
    fileName: "lesson1_internet_physical_cables.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; }
    html, body { width: 1000px; height: 600px; background: #060c18; display: flex; align-items: center; justify-content: center; }
    .canvas-container {
      width: 960px; height: 560px; background: #080d1a; border: 1px solid rgba(4,170,109,0.4);
      border-radius: 14px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;
      position: relative; overflow: hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.9);
    }
    .header-row { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #1e293b; padding-bottom: 14px; }
    .brand-title { display: flex; align-items: center; gap: 10px; }
    .ns-badge {
      width: 26px; height: 26px; border-radius: 6px; background: #080d1a; border: 2px solid #04AA6D;
      display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 12px; color: #04AA6D;
    }
    .header-text { color: #ffffff; font-weight: 800; font-size: 16px; letter-spacing: -0.3px; }
    .badge {
      background: rgba(4,170,109,0.12); color: #04AA6D; border: 1px solid rgba(4,170,109,0.35);
      font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; font-family: Consolas, monospace;
    }
    .diagram-area { flex: 1; display: flex; align-items: center; justify-content: space-between; padding: 25px 10px; position: relative; }
    .node-card {
      background: #0c1328; border: 1px solid #1e293b; border-radius: 12px; padding: 20px 16px; width: 235px;
      display: flex; flex-direction: column; align-items: center; text-align: center; z-index: 2;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .node-card-active {
      border-color: #04AA6D; box-shadow: 0 0 25px rgba(4,170,109,0.25);
    }
    .node-icon-box {
      width: 58px; height: 58px; border-radius: 12px; background: #15202b; border: 1px solid rgba(4,170,109,0.3);
      display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
    }
    .node-icon-svg { width: 30px; height: 30px; fill: none; stroke: #04AA6D; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .node-title { color: #ffffff; font-size: 14.5px; font-weight: 700; margin-bottom: 6px; }
    .node-sub { color: #94a3b8; font-size: 12px; line-height: 1.45; }
    .cable-line {
      position: absolute; top: 50%; left: 130px; right: 130px; height: 3px;
      background: #04AA6D; z-index: 1; transform: translateY(-50%); box-shadow: 0 0 12px rgba(4,170,109,0.8);
    }
    .pulse-dot {
      position: absolute; width: 12px; height: 12px; border-radius: 50%; background: #ffffff;
      box-shadow: 0 0 10px #04AA6D; top: -4.5px;
    }
    .footer-stats {
      background: #0c1328; border-radius: 10px; padding: 14px 20px; border: 1px solid #1e293b;
      display: flex; justify-content: space-around; text-align: center;
    }
    .stat-val { font-size: 17px; font-weight: 900; color: #04AA6D; font-family: Consolas, monospace; }
    .stat-lbl { font-size: 11.5px; color: #cbd5e1; margin-top: 3px; font-weight: 500; }
  </style>
</head>
<body>
  <div class="canvas-container">
    <div class="header-row">
      <div class="brand-title">
        <div class="ns-badge">NS</div>
        <span class="header-text">The Physical Reality of the Global Internet</span>
      </div>
      <span class="badge">GLOBAL PHYSICAL INFRASTRUCTURE</span>
    </div>

    <div class="diagram-area">
      <div class="cable-line">
        <div class="pulse-dot" style="left: 28%;"></div>
        <div class="pulse-dot" style="left: 72%;"></div>
      </div>

      <!-- Node 1: Client PC -->
      <div class="node-card">
        <div class="node-icon-box">
          <!-- Monochromatic Laptop/PC SVG -->
          <svg class="node-icon-svg" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="12" rx="2" stroke="#ffffff"/>
            <path d="M2 20h20" stroke="#04AA6D"/>
            <circle cx="12" cy="10" r="2" stroke="#04AA6D"/>
          </svg>
        </div>
        <div class="node-title">Your Windows 11 PC</div>
        <div class="node-sub">Client browser generates HTTP request packets via Local LAN / WiFi.</div>
      </div>

      <!-- Node 2: Submarine Cables -->
      <div class="node-card node-card-active" style="width: 270px;">
        <div class="node-icon-box" style="border-color:#04AA6D; background: rgba(4,170,109,0.1);">
          <!-- Monochromatic Submarine Cable / Wave SVG -->
          <svg class="node-icon-svg" viewBox="0 0 24 24">
            <path d="M2 12c3-4 6 4 9 0s6 4 9 0" stroke="#04AA6D"/>
            <path d="M2 17c3-4 6 4 9 0s6 4 9 0" stroke="#ffffff"/>
            <circle cx="12" cy="7" r="3" stroke="#04AA6D"/>
          </svg>
        </div>
        <div class="node-title">Undersea Fiber-Optic Cables</div>
        <div class="node-sub">1.4+ Million KM of submarine glass fibers pulse laser light across oceans at ~200,000 km/s.</div>
      </div>

      <!-- Node 3: Remote Server / Data Center -->
      <div class="node-card">
        <div class="node-icon-box">
          <!-- Monochromatic Server Rack SVG -->
          <svg class="node-icon-svg" viewBox="0 0 24 24">
            <rect x="4" y="3" width="16" height="6" rx="1" stroke="#ffffff"/>
            <rect x="4" y="11" width="16" height="6" rx="1" stroke="#ffffff"/>
            <path d="M7 6h2M7 14h2" stroke="#04AA6D"/>
            <circle cx="16" cy="6" r="1" fill="#04AA6D"/>
            <circle cx="16" cy="14" r="1" fill="#04AA6D"/>
            <path d="M12 17v4M8 21h8" stroke="#04AA6D"/>
          </svg>
        </div>
        <div class="node-title">Hyperscale Data Center</div>
        <div class="node-sub">Servers receive packets, fetch HTML/CSS files, and stream response data back.</div>
      </div>
    </div>

    <div class="footer-stats">
      <div>
        <div class="stat-val">1,400,000+ KM</div>
        <div class="stat-lbl">Undersea Submarine Cables</div>
      </div>
      <div>
        <div class="stat-val">99% of Global Traffic</div>
        <div class="stat-lbl">Carried by Physical Cables (Not Satellites)</div>
      </div>
      <div>
        <div class="stat-val">&lt; 30 ms</div>
        <div class="stat-lbl">Typical Packet Roundtrip Latency</div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ── 2. THE INTERNET VS THE WORLD WIDE WEB (MONOCHROMATIC ARCHITECTURE) ──
  {
    fileName: "lesson1_internet_vs_web_architecture.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; }
    html, body { width: 1000px; height: 600px; background: #060c18; display: flex; align-items: center; justify-content: center; }
    .canvas-container {
      width: 960px; height: 560px; background: #080d1a; border: 1px solid rgba(4,170,109,0.4);
      border-radius: 14px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;
      box-shadow: 0 25px 60px rgba(0,0,0,0.9);
    }
    .header-row { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #1e293b; padding-bottom: 14px; }
    .brand-title { display: flex; align-items: center; gap: 10px; }
    .ns-badge {
      width: 26px; height: 26px; border-radius: 6px; background: #080d1a; border: 2px solid #04AA6D;
      display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 12px; color: #04AA6D;
    }
    .header-text { color: #ffffff; font-weight: 800; font-size: 16px; letter-spacing: -0.3px; }
    .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex: 1; padding: 20px 0; }
    .comp-card {
      background: #0c1328; border-radius: 12px; padding: 22px; display: flex; flex-direction: column;
      border: 1px solid #1e293b; justify-content: space-between; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .comp-card-active {
      border-color: #04AA6D; box-shadow: 0 0 25px rgba(4,170,109,0.2);
    }
    .card-top { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
    .card-icon-box {
      width: 48px; height: 48px; border-radius: 10px; background: #15202b; border: 1px solid rgba(4,170,109,0.3);
      display: flex; align-items: center; justify-content: center;
    }
    .card-icon-svg { width: 26px; height: 26px; stroke: #04AA6D; fill: none; stroke-width: 2; }
    .card-title { color: #ffffff; font-size: 16.5px; font-weight: 800; }
    .card-layer { font-size: 11px; font-weight: 700; text-transform: uppercase; font-family: Consolas, monospace; color: #04AA6D; margin-top: 2px; }
    .bullet-list { list-style: none; display: flex; flex-direction: column; gap: 11px; font-size: 13px; color: #cbd5e1; }
    .bullet-item { display: flex; align-items: flex-start; gap: 10px; line-height: 1.45; }
    .check-bullet { color: #04AA6D; font-weight: 900; font-size: 14px; }
    .tag-box {
      background: #15202b; padding: 8px 14px; border-radius: 8px; font-size: 11.5px; font-family: Consolas, monospace;
      color: #ffffff; border: 1px solid #1e293b; margin-top: 14px; display: flex; align-items: center; gap: 8px;
    }
  </style>
</head>
<body>
  <div class="canvas-container">
    <div class="header-row">
      <div class="brand-title">
        <div class="ns-badge">NS</div>
        <span class="header-text">Architectural Distinction: The Internet vs. The World Wide Web</span>
      </div>
      <span style="color:#04AA6D; font-size:11px; font-weight:800; font-family:Consolas, monospace; background:rgba(4,170,109,0.12); padding:4px 12px; border-radius:20px; border:1px solid rgba(4,170,109,0.35);">
        FOUNDATIONS OF FULL STACK
      </span>
    </div>

    <div class="comparison-grid">
      <!-- Left: The Internet -->
      <div class="comp-card">
        <div>
          <div class="card-top">
            <div class="card-icon-box">
              <svg class="card-icon-svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="#ffffff"/>
                <path d="M3.6 9h16.8M3.6 15h16.8" stroke="#04AA6D"/>
                <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#04AA6D"/>
              </svg>
            </div>
            <div>
              <div class="card-title">1. The Internet</div>
              <div class="card-layer">Physical Infrastructure Layer</div>
            </div>
          </div>
          <ul class="bullet-list">
            <li class="bullet-item"><span class="check-bullet">✓</span> <span>A massive global network of interconnected computer hardware.</span></li>
            <li class="bullet-item"><span class="check-bullet">✓</span> <span>Consists of copper wires, undersea fiber-optic cables, routers, and switches.</span></li>
            <li class="bullet-item"><span class="check-bullet">✓</span> <span>Transports raw binary packets between IP addresses using TCP/IP protocols.</span></li>
            <li class="bullet-item"><span class="check-bullet">✓</span> <span>Also carries Email (SMTP), File Transfer (FTP), and Gaming streams.</span></li>
          </ul>
        </div>
        <div class="tag-box">
          <span style="color:#04AA6D; font-weight:bold;">Analogy:</span>
          <span>The Global Network of Roads &amp; Highways</span>
        </div>
      </div>

      <!-- Right: The World Wide Web -->
      <div class="comp-card comp-card-active">
        <div>
          <div class="card-top">
            <div class="card-icon-box" style="border-color:#04AA6D; background: rgba(4,170,109,0.1);">
              <svg class="card-icon-svg" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#ffffff"/>
                <polyline points="14 2 14 8 20 8" stroke="#04AA6D"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="#04AA6D"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="#04AA6D"/>
                <polyline points="10 9 9 9 8 9" stroke="#04AA6D"/>
              </svg>
            </div>
            <div>
              <div class="card-title">2. The World Wide Web (WWW)</div>
              <div class="card-layer">Software &amp; Information Layer</div>
            </div>
          </div>
          <ul class="bullet-list">
            <li class="bullet-item"><span class="check-bullet">✓</span> <span>A software application system built ON TOP of the Internet.</span></li>
            <li class="bullet-item"><span class="check-bullet">✓</span> <span>Consists of HTML web pages, CSS stylesheets, images, and JavaScript apps.</span></li>
            <li class="bullet-item"><span class="check-bullet">✓</span> <span>Connected by clickable Hyperlinks (URLs) and accessed via Web Browsers (Chrome).</span></li>
            <li class="bullet-item"><span class="check-bullet">✓</span> <span>Transfers documents securely using the HTTP / HTTPS application protocol.</span></li>
          </ul>
        </div>
        <div class="tag-box" style="border-color: rgba(4,170,109,0.4);">
          <span style="color:#04AA6D; font-weight:bold;">Analogy:</span>
          <span>The Delivery Trucks &amp; Cargo Traveling on the Roads</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },

  // ── 3. WINDOWS 11 PING & TRACERT PACKET DRILL IN CMD ──
  {
    fileName: "lesson1_windows11_ping_tracert_terminal.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, sans-serif; }
    html, body { width: 1000px; height: 600px; background: #060c18; display: flex; align-items: center; justify-content: center; }
    .cmd-window {
      width: 960px; height: 560px; background: #0c0c0c; border: 1px solid #2d2d2d;
      border-radius: 8px; overflow: hidden; display: flex; flex-direction: column;
      box-shadow: 0 20px 50px rgba(0,0,0,0.9);
    }
    .cmd-titlebar {
      background: #1f1f1f; height: 34px; display: flex; align-items: center; justify-content: space-between;
      padding: 0 12px; border-bottom: 1px solid #2d2d2d; color: #ccc; font-size: 12px;
    }
    .win-controls { display: flex; height: 100%; }
    .win-btn { width: 44px; height: 100%; display: flex; align-items: center; justify-content: center; color: #ccc; font-size: 11px; }
    .win-close:hover { background: #e81123; color: #fff; }
    .cmd-body {
      flex: 1; padding: 16px 20px; font-family: 'Consolas', monospace; font-size: 12.5px;
      color: #cccccc; line-height: 1.5; overflow: hidden;
    }
    .cmd-prompt { color: #04AA6D; font-weight: bold; }
    .cmd-input { color: #ffffff; font-weight: bold; }
    .cmd-highlight { color: #38bdf8; }
    .cmd-success { color: #04AA6D; }
  </style>
</head>
<body>
  <div class="cmd-window">
    <div class="cmd-titlebar">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="color:#04AA6D; font-weight:bold;">⊞</span>
        <span style="color:#fff; font-weight:bold;">Administrator: Windows 11 Command Prompt — Network Packet Trace</span>
      </div>
      <div class="win-controls">
        <div class="win-btn">&#x2014;</div>
        <div class="win-btn">&#x25A2;</div>
        <div class="win-btn win-close">&#x2715;</div>
      </div>
    </div>
    <div class="cmd-body">
      <div>Microsoft Windows [Version 10.0.22631.3007] (Windows 11 Pro x86_64)</div>
      <div>(c) Microsoft Corporation. All rights reserved.</div>
      <br>
      <div><span class="cmd-prompt">C:\\Users\\Student&gt;</span> <span class="cmd-input">ping nextsem.online</span></div>
      <div>Pinging nextsem.online [199.36.158.100] with 32 bytes of data:</div>
      <div>Reply from 199.36.158.100: bytes=32 <span class="cmd-success">time=18ms</span> TTL=58</div>
      <div>Reply from 199.36.158.100: bytes=32 <span class="cmd-success">time=16ms</span> TTL=58</div>
      <div>Reply from 199.36.158.100: bytes=32 <span class="cmd-success">time=17ms</span> TTL=58</div>
      <div>Reply from 199.36.158.100: bytes=32 <span class="cmd-success">time=19ms</span> TTL=58</div>
      <br>
      <div>Ping statistics for 199.36.158.100:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;Packets: <span class="cmd-highlight">Sent = 4, Received = 4, Lost = 0 (0% loss)</span>,</div>
      <div>Approximate round trip times in milli-seconds:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;Minimum = 16ms, Maximum = 19ms, <span class="cmd-success">Average = 17ms</span></div>
      <br>
      <div><span class="cmd-prompt">C:\\Users\\Student&gt;</span> <span class="cmd-input">tracert nextsem.online</span></div>
      <div>Tracing route to nextsem.online [199.36.158.100] over a maximum of 30 hops:</div>
      <div>&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2 ms&nbsp;&nbsp;&nbsp;&nbsp;1 ms&nbsp;&nbsp;&nbsp;&nbsp;1 ms&nbsp;&nbsp;192.168.29.1 [Local Gateway Router]</div>
      <div>&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;8 ms&nbsp;&nbsp;&nbsp;&nbsp;7 ms&nbsp;&nbsp;&nbsp;&nbsp;7 ms&nbsp;&nbsp;10.142.0.1 [ISP Metro Fiber Node]</div>
      <div>&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;14 ms&nbsp;&nbsp;&nbsp;13 ms&nbsp;&nbsp;&nbsp;13 ms&nbsp;&nbsp;182.79.141.65 [Submarine Cable Gateway]</div>
      <div>&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;17 ms&nbsp;&nbsp;&nbsp;16 ms&nbsp;&nbsp;&nbsp;17 ms&nbsp;&nbsp;199.36.158.100 [Nextsem Academy Cloud Edge]</div>
      <br>
      <div class="cmd-success">Trace complete. 4 physical hops resolved in 17 milliseconds!</div>
    </div>
  </div>
</body>
</html>`
  },

  // ── 4. GOOGLE CHROME DEVTOOLS NETWORK PACKET INSPECTOR ──
  {
    fileName: "lesson1_google_chrome_devtools_network.png",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, sans-serif; }
    html, body { width: 1000px; height: 600px; background: #202124; display: flex; align-items: center; justify-content: center; }
    .chrome-window {
      width: 960px; height: 560px; background: #202124; border: 1px solid #3c4043;
      border-radius: 8px; overflow: hidden; display: flex; flex-direction: column;
      box-shadow: 0 20px 50px rgba(0,0,0,0.9);
    }
    .chrome-titlebar {
      background: #1f1f1f; height: 36px; display: flex; align-items: center; justify-content: space-between;
      padding-left: 8px; border-bottom: 1px solid #2d2d2d;
    }
    .tab {
      background: #35363a; color: #fff; font-size: 11.5px; padding: 6px 14px; border-radius: 6px 6px 0 0;
      display: flex; align-items: center; gap: 6px; font-weight: 500;
    }
    .win-controls { display: flex; height: 100%; }
    .win-btn { width: 44px; height: 100%; display: flex; align-items: center; justify-content: center; color: #ccc; font-size: 11px; }
    .win-close:hover { background: #e81123; color: #fff; }
    .chrome-nav {
      background: #35363a; padding: 6px 12px; display: flex; align-items: center; gap: 8px;
      border-bottom: 1px solid #3c4043;
    }
    .address-bar {
      background: #202124; border: 1px solid #5f6368; color: #fff; border-radius: 14px;
      padding: 4px 12px; font-size: 11.5px; flex: 1; display: flex; align-items: center; gap: 6px;
    }
    .main-split { flex: 1; display: flex; flex-direction: column; background: #181818; }
    .page-preview {
      height: 120px; background: #0c1328; padding: 14px 20px; color: #ffffff; border-bottom: 2px solid #04AA6D;
    }
    .devtools-panel { flex: 1; background: #242424; display: flex; flex-direction: column; color: #cccccc; font-size: 11.5px; }
    .devtools-tabs {
      background: #2b2b2b; padding: 4px 12px; display: flex; gap: 16px; border-bottom: 1px solid #333;
      font-weight: 600; font-size: 11px;
    }
    .dt-tab-active { color: #04AA6D; border-bottom: 2px solid #04AA6D; padding-bottom: 4px; }
    .network-table { width: 100%; border-collapse: collapse; font-family: monospace; font-size: 11px; }
    .network-table th { background: #2d2d2d; padding: 6px 10px; text-align: left; color: #9aa0a6; border-bottom: 1px solid #3c4043; }
    .network-table td { padding: 6px 10px; border-bottom: 1px solid #2d2d2d; }
    .status-ok { color: #81c995; font-weight: bold; }
  </style>
</head>
<body>
  <div class="chrome-window">
    <div class="chrome-titlebar">
      <div class="tab">
        <span style="color:#04AA6D;">●</span> Nextsem Academy — Full Stack Web Development
      </div>
      <div class="win-controls">
        <div class="win-btn">&#x2014;</div>
        <div class="win-btn">&#x25A2;</div>
        <div class="win-btn win-close">&#x2715;</div>
      </div>
    </div>
    <div class="chrome-nav">
      <span style="color:#9aa0a6;">↻</span>
      <div class="address-bar">
        <span style="color:#81c995;">🔒</span>
        <span>https://nextsem.online/html/learn-html-web-free-lessons-what-is-the-internet</span>
      </div>
    </div>
    <div class="main-split">
      <div class="page-preview">
        <h2 style="font-size:16px; font-weight:800; color:#ffffff; margin-bottom:4px;">Nextsem Academy: What is the Internet?</h2>
        <p style="font-size:12px; color:#94a3b8;">Web pages are delivered across the global internet as structured HTML packets.</p>
      </div>

      <div class="devtools-panel">
        <div class="devtools-tabs">
          <span>Elements</span>
          <span>Console</span>
          <span>Sources</span>
          <span class="dt-tab-active">Network (4 Requests)</span>
          <span>Performance</span>
          <span>Application</span>
        </div>
        <table class="network-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Type</th>
              <th>Initiator</th>
              <th>Size</th>
              <th>Time</th>
              <th>Waterfall</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="color:#fff; font-weight:bold;">learn-html-web-free-lessons</td>
              <td><span class="status-ok">200 OK</span></td>
              <td>document</td>
              <td>Other</td>
              <td>14.2 kB</td>
              <td style="color:#81c995;">18 ms</td>
              <td><span style="background:#04AA6D; display:inline-block; width:40px; height:8px; border-radius:2px;"></span></td>
            </tr>
            <tr>
              <td style="color:#fff;">main.css</td>
              <td><span class="status-ok">200 OK</span></td>
              <td>stylesheet</td>
              <td>document</td>
              <td>8.6 kB</td>
              <td style="color:#81c995;">12 ms</td>
              <td><span style="background:#38bdf8; display:inline-block; width:30px; height:8px; border-radius:2px;"></span></td>
            </tr>
            <tr>
              <td style="color:#fff;">icon.svg</td>
              <td><span class="status-ok">200 OK</span></td>
              <td>svg+xml</td>
              <td>document</td>
              <td>1.2 kB</td>
              <td style="color:#81c995;">9 ms</td>
              <td><span style="background:#a78bfa; display:inline-block; width:20px; height:8px; border-radius:2px;"></span></td>
            </tr>
            <tr>
              <td style="color:#fff;">app.js</td>
              <td><span class="status-ok">200 OK</span></td>
              <td>script</td>
              <td>document</td>
              <td>22.4 kB</td>
              <td style="color:#81c995;">16 ms</td>
              <td><span style="background:#facc15; display:inline-block; width:35px; height:8px; border-radius:2px;"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`
  }
];

async function generateLesson1Screenshots() {
  console.log(`Launching browser for Monochromatic Lesson 1 screenshots from: ${executablePath}...`);
  const browser = await puppeteer.launch({
    executablePath,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 600, deviceScaleFactor: 2 });

  for (const shot of screenshots) {
    console.log(`Generating monochromatic ${shot.fileName}...`);
    await page.setContent(shot.html, { waitUntil: "domcontentloaded" });
    await new Promise(r => setTimeout(r, 100));
    const targetPath = path.join(outputDir, shot.fileName);
    await page.screenshot({ path: targetPath, type: "png" });
    console.log(`Saved: ${targetPath}`);
  }

  await browser.close();
  console.log("All Monochromatic Lesson 1 screenshots generated successfully!");
}

generateLesson1Screenshots().catch(console.error);
