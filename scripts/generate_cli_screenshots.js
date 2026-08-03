const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const outputDir = path.join(__dirname, "../public/screenshots/cli");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const lessonsData = [
  {
    lessonId: 4,
    commands: [
      {
        cmd: "dir",
        output: ` Volume in drive C has no label.
 Volume Serial Number is A8F2-3D19

 Directory of C:\\Users\\Developer

08/03/2026  10:15 AM    <DIR>          .
08/03/2026  10:15 AM    <DIR>          ..
08/03/2026  09:30 AM             1,240 index.html
08/03/2026  09:32 AM               850 style.css
08/03/2026  09:45 AM             3,420 app.js
08/03/2026  08:12 AM               412 README.md
               4 File(s)          5,922 bytes
               2 Dir(s)  142,850,304,000 bytes free`
      },
      {
        cmd: "mkdir my-app",
        output: `C:\\Users\\Developer> mkdir my-app
C:\\Users\\Developer>`
      },
      {
        cmd: "cd my-app",
        output: `C:\\Users\\Developer> cd my-app
C:\\Users\\Developer\\my-app>`
      },
      {
        cmd: "cd ..",
        output: `C:\\Users\\Developer\\my-app> cd ..
C:\\Users\\Developer>`
      },
      {
        cmd: "rmdir my-app",
        output: `C:\\Users\\Developer> rmdir my-app
C:\\Users\\Developer>`
      }
    ]
  },
  {
    lessonId: 5,
    commands: [
      {
        cmd: "type nul > index.html",
        output: `C:\\Users\\Developer> type nul > index.html
C:\\Users\\Developer>`
      },
      {
        cmd: "copy index.html backup.html",
        output: `C:\\Users\\Developer> copy index.html backup.html
        1 file(s) copied.`
      },
      {
        cmd: "move index.html src\\",
        output: `C:\\Users\\Developer> move index.html src\\
        1 file(s) moved.`
      },
      {
        cmd: "ren index.html main.html",
        output: `C:\\Users\\Developer> ren index.html main.html
C:\\Users\\Developer>`
      },
      {
        cmd: "del temp.log",
        output: `C:\\Users\\Developer> del temp.log
C:\\Users\\Developer>`
      }
    ]
  },
  {
    lessonId: 6,
    commands: [
      {
        cmd: "dir *.js",
        output: ` Volume in drive C has no label.
 Directory of C:\\Users\\Developer

08/03/2026  09:45 AM             3,420 app.js
08/03/2026  10:02 AM             1,850 utils.js
               2 File(s)          5,270 bytes`
      },
      {
        cmd: "echo Hello World > notes.txt",
        output: `C:\\Users\\Developer> echo Hello World > notes.txt
C:\\Users\\Developer>`
      },
      {
        cmd: "echo New Line >> notes.txt",
        output: `C:\\Users\\Developer> echo New Line >> notes.txt
C:\\Users\\Developer>`
      },
      {
        cmd: "dir | findstr \".html\"",
        output: `08/03/2026  09:30 AM             1,240 index.html
08/03/2026  09:35 AM             2,110 about.html`
      }
    ]
  },
  {
    lessonId: 7,
    commands: [
      {
        cmd: "echo %PATH%",
        output: `C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd`
      },
      {
        cmd: "set PORT=3000",
        output: `C:\\Users\\Developer> set PORT=3000
C:\\Users\\Developer> echo %PORT%
3000`
      },
      {
        cmd: "prompt $p$g",
        output: `C:\\Users\\Developer> prompt $p$g
C:\\Users\\Developer>`
      }
    ]
  },
  {
    lessonId: 8,
    commands: [
      {
        cmd: "tasklist",
        output: `Image Name                     PID Session Name        Session#    Mem Usage
========================= ======== ================ =========== ============
System Idle Process              0 Services                   0          8 K
System                           4 Services                   0      2,410 K
cmd.exe                       4812 Console                    1      6,840 K
node.exe                     12940 Console                    1     48,912 K`
      },
      {
        cmd: "taskkill /f /im node.exe",
        output: `SUCCESS: The process "node.exe" with PID 12940 has been terminated.`
      },
      {
        cmd: "taskkill /f /pid 1234",
        output: `SUCCESS: The process with PID 1234 has been terminated.`
      }
    ]
  },
  {
    lessonId: 9,
    commands: [
      {
        cmd: "ipconfig /all",
        output: `Windows IP Configuration

   Host Name . . . . . . . . . . . . : DEV-WORKSTATION
   Primary Dns Suffix  . . . . . . . : 
   Node Type . . . . . . . . . . . . : Hybrid

Wireless LAN adapter Wi-Fi:
   Connection-specific DNS Suffix  . : 
   IPv4 Address. . . . . . . . . . . : 192.168.1.45(Preferred) 
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1`
      },
      {
        cmd: "ping nextsem.online",
        output: `Pinging nextsem.online [76.76.21.21] with 32 bytes of data:
Reply from 76.76.21.21: bytes=32 time=18ms TTL=56
Reply from 76.76.21.21: bytes=32 time=19ms TTL=56
Reply from 76.76.21.21: bytes=32 time=17ms TTL=56

Ping statistics for 76.76.21.21:
    Packets: Sent = 3, Received = 3, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 17ms, Maximum = 19ms, Average = 18ms`
      },
      {
        cmd: "nslookup nextsem.online",
        output: `Server:  UnKnown
Address:  192.168.1.1

Non-authoritative answer:
Name:    nextsem.online
Addresses:  76.76.21.21`
      },
      {
        cmd: "netstat -ano",
        output: `Active Connections

  Proto  Local Address          Foreign Address        State           PID
  TCP    127.0.0.1:3000         0.0.0.0:0              LISTENING       12940
  TCP    192.168.1.45:51240     76.76.21.21:443        ESTABLISHED     4812`
      }
    ]
  },
  {
    lessonId: 10,
    commands: [
      {
        cmd: "@echo off",
        output: `@echo off
echo Starting Web Development Server...
npm run dev`
      },
      {
        cmd: "echo Launching Web Server...",
        output: `Launching Web Server...
Ready on http://localhost:3000`
      },
      {
        cmd: "pause",
        output: `Press any key to continue . . .`
      }
    ]
  }
];

function generateHtml(cmdObj) {
  const promptStr = `C:\\Users\\Developer> ${cmdObj.cmd}`;
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: radial-gradient(circle at 50% 30%, #172033 0%, #080c16 70%, #04060a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px;
      width: 960px;
      height: 580px;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }
    .win11-window {
      width: 880px;
      background: #090d16;
      border: 1px solid #1e293b;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 30px 70px -10px rgba(0, 0, 0, 0.9), 0 0 1px 1px rgba(255, 255, 255, 0.08);
    }
    .win11-titlebar {
      background: #0e1526;
      height: 44px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #1b263a;
      user-select: none;
    }
    .win11-title {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #e2e8f0;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.2px;
    }
    .win11-logo {
      width: 16px;
      height: 16px;
      fill: #04AA6D;
    }
    .win11-controls {
      display: flex;
      align-items: center;
      gap: 20px;
      color: #94a3b8;
      font-size: 12px;
      font-family: system-ui;
    }
    .win-btn {
      width: 14px;
      height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
    }
    .win-btn-close {
      color: #f87171;
    }
    .terminal-body {
      background: #070a12;
      color: #f8fafc;
      padding: 22px 24px;
      font-family: 'Consolas', 'Cascadia Code', 'Segoe UI Mono', monospace;
      font-size: 14px;
      line-height: 1.6;
      min-height: 430px;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .prompt-line {
      color: #ffffff;
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 14px;
    }
    .prompt-line u {
      color: #ffffff;
      text-decoration: underline;
      text-decoration-color: #04AA6D;
      text-underline-offset: 3px;
      font-weight: 700;
    }
    .cmd-out {
      color: #cbd5e1;
      font-size: 13.5px;
    }
    .cursor-blink {
      display: inline-block;
      width: 8px;
      height: 16px;
      background: #04AA6D;
      margin-left: 4px;
      vertical-align: middle;
      box-shadow: 0 0 8px rgba(4, 170, 109, 0.6);
      animation: blink 1s infinite;
    }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  </style>
</head>
<body>
  <div class="win11-window">
    <div class="win11-titlebar">
      <div class="win11-title">
        <svg class="win11-logo" viewBox="0 0 88 88">
          <path d="M0,12.402l35.687-4.86v35.806H0V12.402z M35.687,48.093l0.001,35.824L0,79.032V48.093H35.687z M40.716,6.621 L88,0v43.348H40.716V6.621z M88,48.093V91.44l-47.284-6.639V48.093H88z" />
        </svg>
        <span>Administrator: Command Prompt</span>
      </div>
      <div class="win11-controls">
        <span class="win-btn">─</span>
        <span class="win-btn">▢</span>
        <span class="win-btn win-btn-close">✕</span>
      </div>
    </div>
    <div class="terminal-body">
      <div class="prompt-line"><u>${promptStr}</u></div>
      <div class="cmd-out">${cmdObj.output}</div>
      <div style="margin-top: 14px; color: #ffffff; font-weight: 700;">
        C:\\Users\\Developer><span class="cursor-blink"></span>
      </div>
    </div>
  </div>
</body>
</html>`;
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 960, height: 580, deviceScaleFactor: 2 });

  for (const item of lessonsData) {
    let cmdIdx = 1;
    for (const cmdObj of item.commands) {
      const fileName = `lesson${item.lessonId}_cmd_${cmdIdx}.png`;
      const filePath = path.join(outputDir, fileName);

      const htmlContent = generateHtml(cmdObj);
      await page.setContent(htmlContent);

      await page.screenshot({ path: filePath, omitBackground: true });
      console.log(`Generated: ${fileName} -> ${filePath}`);
      cmdIdx++;
    }
  }

  await browser.close();
  console.log("All screenshots generated successfully!");
}

run().catch(err => {
  console.error("Error generating screenshots:", err);
  process.exit(1);
});
