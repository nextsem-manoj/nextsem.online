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
    "id": 0,
    "slug": "download-install-vscode-windows-11-setup-guide",
    "title": "Visual Studio Code Download, Windows 11 Setup & First HTML Page",
    "unit": "Unit 0: Developer Workstation Setup & Visual Studio Code",
    "bookRef": "Nextsem Full Stack Web Dev Guide (Phase 0)",
    "exercise": {
      "english": {
        "question": "Which crucial checkbox during VS Code installation enables right-clicking any folder in Windows 11 File Explorer to open it directly in VS Code?",
        "options": [
          "Add 'Open with Code' action to Windows Explorer directory context menu",
          "Create Desktop shortcut only",
          "Disable GPU hardware acceleration",
          "Install Microsoft Edge DevTools only"
        ],
        "correctAnswer": "Add 'Open with Code' action to Windows Explorer directory context menu",
        "hint": "This option allows you to right-click on any project folder on your Windows PC and select 'Open with Code'!"
      },
      "hinglish": {
        "question": "VS Code install karte samay kaun sa checkbox select karna sabse zaroori hai taaki aap Windows 11 ke kisi bhi folder par right-click karke use direct VS Code me khol sakein?",
        "options": [
          "Sirf Desktop shortcut banayein",
          "Add 'Open with Code' action to Windows Explorer directory context menu",
          "GPU hardware acceleration ko band karein",
          "Edge browser extension install karein"
        ],
        "correctAnswer": "Add 'Open with Code' action to Windows Explorer directory context menu",
        "hint": "Is option se aap Windows PC par kisi bhi folder par right-click karke direct 'Open with Code' kar sakte hain!"
      },
      "hindi": {
        "question": "🪟 Windows 11 पर VS Code इंस्टॉल करते समय कौन सा चेकबॉक्स चुनना सबसे जरूरी है ताकि आप किसी भी फोल्डर पर राइट-क्लिक करके उसे सीधे VS Code में खोल सकें?",
        "options": [
          "केवल डेस्कटॉप शॉर्टकट बनाएं",
          "Add 'Open with Code' action to Windows Explorer directory context menu",
          "GPU एक्सेलेरेशन बंद करें",
          "माइक्रोसॉफ्ट एज एक्सटेंशन इंस्टॉल करें"
        ],
        "correctAnswer": "Add 'Open with Code' action to Windows Explorer directory context menu",
        "hint": "यह विकल्प आपको विंडोज में किसी भी प्रोजेक्ट फोल्डर पर राइट-क्लिक करके 'Open with Code' करने की सुविधा देता है!"
      }
    },
    "english": {
      "kid": "Welcome to Full Stack Web Development! Before we start writing HTML, CSS, and JavaScript, we need a powerful code editor on our 🪟 Windows 11 computer.\n\n## 🛠️ What is Visual Studio Code (VS Code)?\n* **Visual Studio Code (VS Code)** is the most popular, free, and lightning-fast code editor built by Microsoft.\n* It includes syntax color highlighting, auto-completion, built-in Git, an integrated terminal, and thousands of powerful developer extensions.\n\n---\n\n## 📥 Step 1: Download VS Code for 🪟 Windows 11\n1. Open your web browser and visit the official website: [https://code.visualstudio.com/](https://code.visualstudio.com/)\n2. Click the big blue **\"Download for Windows\"** button (or choose **User Installer x64**).\n3. The setup file `VSCodeUserSetup-x64.exe` will download to your **Downloads** folder.\n\n---\n\n## ⚙️ Step 2: Install VS Code & Check Crucial Windows Options\n1. Double-click the downloaded `VSCodeUserSetup-x64.exe` installer.\n2. Accept the license agreement and click **Next**.\n3. ⚠️ **CRITICAL STEP:** On the **\"Select Additional Tasks\"** screen, make sure you CHECK ALL of these boxes:\n   * ☑ **Add \"Open with Code\" action to Windows Explorer file context menu**\n   * ☑ **Add \"Open with Code\" action to Windows Explorer directory context menu**\n   * ☑ **Register Code as an editor for supported file types**\n   * ☑ **Add to PATH (requires shell restart)**\n4. Click **Install** and then click **Finish** to launch Visual Studio Code.\n\n---\n\n## 🧩 Step 3: Install Essential Web Developer Extensions\nVS Code extensions supercharge your development workflow:\n1. Press `Ctrl + Shift + X` (or click the Extensions icon 🧩 on the left Activity Bar).\n2. Search and click **Install** for each of these 3 essential extensions:\n   * 🌟 **Live Server** *(by Ritwick Dey)*: Launches a local development server with auto-reload for static HTML/CSS/JS pages.\n   * 🌟 **Prettier - Code Formatter**: Automatically formats your code into clean, beautiful syntax every time you press `Ctrl + S`.\n   * 🌟 **Auto Rename Tag**: Automatically renames paired HTML tags when you change the opening tag.\n\n---\n\n## 📂 Step 4: Create Your First Project Folder in Windows\n1. Open Windows File Explorer (`Win + E`) and navigate to your **Documents** or **Desktop**.\n2. Create a new folder named `my-first-website`.\n3. **Open in VS Code:**\n   * **Method A (Right-Click):** Right-click the folder ➔ select **Show more options** (Windows 11) ➔ click **Open with Code** 🪟.\n   * **Method B (Terminal):** Open Command Prompt (`cmd`) and type:\n     `mkdir my-first-website && cd my-first-website && code .`\n\n---\n\n## 📄 Step 5: Create Your First File (`index.html`)\n1. In the VS Code Explorer panel (left side), click the **New File** icon (📄+) and name it `index.html`.\n2. **Emmet Boilerplate Shortcut:** Inside the editor, type `!` (exclamation mark) and press **Enter** (or **Tab**).\n3. VS Code will automatically generate the standard HTML5 skeleton:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My First Website | Nextsem</title>\n</head>\n<body>\n  <h1>Hello World! My First Web Page 🚀</h1>\n  <p>I am learning Full Stack Web Development on Nextsem Academy.</p>\n</body>\n</html>\n```\n\n4. Press `Ctrl + S` to save the file.\n\n---\n\n## 🚀 Step 6: Launch Live Server in Your Browser\n1. Right-click anywhere inside your `index.html` editor window.\n2. Click **\"Open with Live Server\"** (Shortcut: `Alt + L, Alt + O`).\n3. Your default web browser will automatically open `http://127.0.0.1:5500/index.html` displaying your live web page!\n4. Whenever you edit the code and save (`Ctrl + S`), your browser updates instantly without manual refresh!\n\n---\n\n## ⌨️ Essential Windows 11 VS Code Keyboard Shortcuts Drill\n* **`Ctrl + S`**: Save current file\n* **`Ctrl + `` (backtick)**: Toggle integrated developer terminal\n* **`Ctrl + Shift + P`**: Open Command Palette\n* **`Alt + Up / Down`**: Move the current line of code up or down\n* **`Ctrl + /`**: Toggle comment (`<!-- code -->`)\n* **`Alt + Shift + F`**: Auto-format entire document with Prettier",
      "pro": "Professional Web Development Workstation Setup on 🪟 Windows 11 using Visual Studio Code.\n\n## 🛠️ Industry-Standard Editor: Visual Studio Code\n* **VS Code** is the premier IDE for Full Stack JavaScript/TypeScript, React, Node.js, and web application development.\n* Features native terminal integration, Git version control, multi-root workspaces, and language server protocols (LSP).\n\n---\n\n## 📥 1. Automated & Manual Installation on 🪟 Windows 11\n* **Direct Installer:** Download the x64 User Installer from [code.visualstudio.com](https://code.visualstudio.com/).\n* **CLI Package Manager Option (Windows Terminal / PowerShell):**\n  `winget install Microsoft.VisualStudioCode`\n* **Key Installation Tasks:**\n  * Ensure `code` binary is added to your Windows system `PATH` environment variable.\n  * Enable directory context menu registration for seamless `code .` workspace launching.\n\n---\n\n## 🧩 2. Core Extension Toolchain\n* **Live Server** (`ritwickdey.liveserver`): Local HTTP server with WebSocket live-reloading.\n* **Prettier** (`esbenp.prettier-vscode`): Opinionated code formatting.\n* **ESLint** (`dbaeumer.vscode-eslint`): Static code analysis for JavaScript & TypeScript.\n\n---\n\n## 📂 3. Workspace Architecture & First Document\n1. Initialize project directory:\n   `mkdir my-first-website && cd my-first-website && code .`\n2. Generate `index.html` using Emmet `!` expansion:\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Full Stack Development Workspace | Nextsem</title>\n</head>\n<body>\n  <h1>Hello World! Building Full Stack Web Applications 🚀</h1>\n  <p>Configured on 🪟 Windows 11 with Visual Studio Code.</p>\n</body>\n</html>\n```\n3. Launch with Live Server: Right-click ➔ **Open with Live Server** (`http://127.0.0.1:5500`)."
    },
    "hinglish": {
      "kid": "Full Stack Web Developer banne ke safar me aapka swagat hai! Web development shuru karne ke liye sabse pehle hume apne 🪟 Windows 11 PC par **Visual Studio Code (VS Code)** download aur install karna hoga.\n\n### 🛠️ Visual Studio Code Kya Hai?\n* **VS Code** Microsoft ka banaya hua world ka #1 free code editor hai jisme professional software engineers code likhte hain.\n* Isme syntax colors, auto-completion, terminal, aur extensions milte hain jo coding ko aasan banate hain.\n\n---\n\n### 📥 Step 1: VS Code Download Karein\n1. Official website par jayein: [https://code.visualstudio.com/](https://code.visualstudio.com/)\n2. Blue **\"Download for Windows\"** button par click karein.\n3. `VSCodeUserSetup-x64.exe` file aapke **Downloads** folder me save ho jayegi.\n\n---\n\n### ⚙️ Step 2: Windows 11 me Install Karein (Important Checkboxes!)\n1. Download hui `.exe` file par double click karein.\n2. License accept karke **Next** dabayein.\n3. ⚠️ **ZAROORI STEP:** \"Select Additional Tasks\" screen par in saare boxes ko zaroor tick (☑) karein:\n   * ☑ **Add \"Open with Code\" action to Windows Explorer file context menu**\n   * ☑ **Add \"Open with Code\" action to Windows Explorer directory context menu**\n   * ☑ **Register Code as an editor for supported file types**\n   * ☑ **Add to PATH (requires shell restart)**\n4. **Install** par click karein aur finish karein.\n\n---\n\n### 🧩 Step 3: Zaroori Extensions Install Karein\n1. VS Code me `Ctrl + Shift + X` dabayein (Extensions tab).\n2. Ye 3 extensions search karke **Install** karein:\n   * 🌟 **Live Server**: Browser me direct live website dekhne ke liye.\n   * 🌟 **Prettier - Code Formatter**: Code ko automatic format aur clean rakhne ke liye.\n   * 🌟 **Auto Rename Tag**: HTML tag rename karte hi closing tag auto-update karne ke liye.\n\n---\n\n### 📂 Step 4: Apna Pehla Project Folder Banayein\n1. Windows Explorer me **Documents** ya **Desktop** par jayein.\n2. Naya folder banayein: `my-first-website`.\n3. Folder par Right Click karein ➔ **Show more options** ➔ **Open with Code** 🪟 par click karein.\n\n---\n\n### 📄 Step 5: Pehli File (`index.html`) Banayein\n1. Explorer me **New File** icon par click karein aur naam dein `index.html`.\n2. Editor me sirf `!` (exclamation) type karke **Enter** dabayein (Emmet magic).\n3. `<body>` tag ke andar likhein:\n   `<h1>Hello World! Meri Pehli Website 🚀</h1>`\n4. `Ctrl + S` dabakar save karein.\n\n---\n\n### 🚀 Step 6: Live Server se Browser me Run Karein\n1. Editor me right-click karein ➔ **Open with Live Server** chunein.\n2. Chrome ya Edge browser me `http://127.0.0.1:5500/index.html` par aapki website live open ho jayegi!",
      "pro": "Professional 🪟 Windows 11 Web Developer Workstation Setup using Visual Studio Code.\n\n### 🛠️ Environment Configuration\n1. **Download & Binary Verification**:\n   * [code.visualstudio.com](https://code.visualstudio.com/) se Windows User Installer x64 download karein.\n   * Verify PATH integration in Windows Terminal: `code --version`.\n2. **Context Menu Shell Integration**:\n   * Installation wizard me Directory Context Menu option ko enable karein taaki kisi bhi folder se `code .` execute kiya ja sake.\n3. **Productivity Extensions**:\n   * `ritwickdey.liveserver` (Live Server on port 5500)\n   * `esbenp.prettier-vscode` (Format On Save enabled in settings.json)\n4. **First HTML Document & Live Server Loop**:\n   * Directory initialize karein: `mkdir web-project && cd web-project && code .`\n   * Emmet standard boilerplate trigger karein with `!` + `Tab`.\n   * Live Server launch karein with `Alt + L, Alt + O`."
    },
    "hindi": {
      "kid": "फुल स्टैक वेब डेवलपर बनने के सफर में आपका स्वागत है! कोडिंग शुरू करने से पहले हमें अपने 🪟 Windows 11 कंप्यूटर पर **Visual Studio Code (VS Code)** डाउनलोड और इंस्टॉल करना होगा।\n\n### 🛠️ विजुअल स्टूडियो कोड क्या है?\n* **VS Code** माइक्रोसॉफ्ट द्वारा बनाया गया दुनिया का सबसे लोकप्रिय और मुफ्त कोड एडिटर है।\n* इसमें सिंटैक्स कलरिंग, स्वतः पूर्णता (Auto-complete), टर्मिनल और उपयोगी एक्सटेंशन मिलते हैं।\n\n---\n\n### 📥 चरण 1: VS Code डाउनलोड करें\n1. आधिकारिक वेबसाइट पर जाएं: [https://code.visualstudio.com/](https://code.visualstudio.com/)\n2. नीले **\"Download for Windows\"** बटन पर क्लिक करें।\n3. आपकी **Downloads** डायरेक्टरी में इंस्टॉलर `VSCodeUserSetup-x64.exe` डाउनलोड हो जाएगा।\n\n---\n\n### ⚙️ चरण 2: विंडोज 11 में इंस्टॉल करें (महत्वपूर्ण चेकबॉक्स!)\n1. डाउनलोड की गई `.exe` फाइल पर डबल-क्लिक करें।\n2. लाइसेंस स्वीकार करें और **Next** पर क्लिक करें।\n3. ⚠️ **अति महत्वपूर्ण:** \"Select Additional Tasks\" स्क्रीन पर इन सभी विकल्पों को टिक (☑) करें:\n   * ☑ **Add \"Open with Code\" action to Windows Explorer file context menu**\n   * ☑ **Add \"Open with Code\" action to Windows Explorer directory context menu**\n   * ☑ **Register Code as an editor for supported file types**\n   * ☑ **Add to PATH (requires shell restart)**\n4. **Install** पर क्लिक करें और प्रक्रिया पूरी करें।\n\n---\n\n### 🧩 चरण 3: आवश्यक एक्सटेंशन इंस्टॉल करें\n1. VS Code में `Ctrl + Shift + X` दबाएं।\n2. निम्नलिखित एक्सटेंशन इंस्टॉल करें:\n   * 🌟 **Live Server**: ब्राउज़र में वास्तविक समय में लाइव पेज देखने के लिए।\n   * 🌟 **Prettier - Code Formatter**: कोड को स्वतः सुंदर और व्यवस्थित रखने के लिए।\n   * 🌟 **Auto Rename Tag**: HTML टैग को स्वतः अपडेट करने के लिए।\n\n---\n\n### 📂 चरण 4: अपना पहला प्रोजेक्ट फोल्डर बनाएं\n1. अपने कंप्यूटर पर `my-first-website` नाम का एक नया फोल्डर बनाएं।\n2. फोल्डर पर राइट-क्लिक करें ➔ **Show more options** ➔ **Open with Code** 🪟 चुनें।\n\n---\n\n### 📄 चरण 5: पहली फाइल (`index.html`) बनाएं और कोड लिखें\n1. VS Code में नई फाइल बनाएं और नाम दें `index.html`।\n2. एडिटर में सिर्फ `!` टाइप करके **Enter** दबाएं (Emmet शॉर्टकट)।\n3. फाइल में अपनी हेडिंग लिखें और `Ctrl + S` से सेव करें।\n\n---\n\n### 🚀 चरण 6: लाइव सर्वर शुरू करें\n1. एडिटर में राइट-क्लिक करें ➔ **Open with Live Server** चुनें।\n2. आपका ब्राउज़र `http://127.0.0.1:5500/index.html` पर तुरंत आपकी लाइव वेबसाइट प्रदर्शित करेगा!",
      "pro": "🪟 Windows 11 पर विजुअल स्टूडियो कोड का पेशेवर वातावरण सेटअप और पहली HTML फाइल का निर्माण।\n\n### 🛠️ सेटअप और विन्यास\n1. **डाउनलोड व इंस्टॉलेशन**: [code.visualstudio.com](https://code.visualstudio.com/) से विंडोज x64 इंस्टॉलर प्राप्त करें और PATH एनवायरनमेंट वेरिएबल चेकबॉक्स को सक्रिय रखें।\n2. **एक्सटेंशन टूलचेन**:\n   * `Live Server` (लोकल पोर्ट 5500 पर ऑटो रीलोडिंग)\n   * `Prettier` (सेव करते समय स्वतः फॉर्मेटिंग)\n3. **परियोजना संरचना व निष्पादन**:\n   * टर्मिनल में प्रोजेक्ट बनाएं: `mkdir web-project && cd web-project && code .`\n   * `index.html` बनाएं और Emmet `!` शॉर्टकट से HTML5 संरचना जनरेट करें।\n   * `Alt + L, Alt + O` दबाकर लाइव सर्वर शुरू करें।"
    }
  },
  {
    "id": 1,
    "slug": "learn-html-web-free-lessons-what-is-the-internet",
    "title": "What is the Internet?",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Duckett Chapter 1 (p. 2-5)",
    "exercise": {
      "english": {
        "question": "What is the physical reality of the internet?",
        "options": [
          "A software package installed on Windows",
          "A satellite-only beam that doesn't use wires",
          "A global network of physical cables, routers, and data centers",
          "A magical cloud in the sky"
        ],
        "correctAnswer": "A global network of physical cables, routers, and data centers",
        "hint": "Remember, the internet is not magical or invisible. It relies on thousands of miles of cables running under the oceans!"
      },
      "hinglish": {
        "question": "Internet ki physical reality kya hai?",
        "options": [
          "Sirf satellite se chalne wali beam jo wires use nahi karti",
          "Ek jadui baadal jo hawa mein hai",
          "Windows par install hua ek software package",
          "Dunia bhar mein failye physical cables, routers aur data centers ka network"
        ],
        "correctAnswer": "Dunia bhar mein failye physical cables, routers aur data centers ka network",
        "hint": "Yaad raho, internet koi jaadu nahi hai. Yeh samudron ke neeche bikhre hazaaron miles ke cables par nirbhar karta hai!"
      },
      "hindi": {
        "question": "इंटरनेट की वास्तविकता क्या है?",
        "options": [
          "आकाश में एक जादुई बादल",
          "एक सैटेलाइट बीम जो तारों का उपयोग नहीं करती",
          "भौतिक केबलों, राउटरों और डेटा केंद्रों का एक वैश्विक नेटवर्क",
          "🪟 Windows पर इंस्टॉल किया गया एक सॉफ्टवेयर पैकेज"
        ],
        "correctAnswer": "भौतिक केबलों, राउटरों और डेटा केंद्रों का एक वैश्विक नेटवर्क",
        "hint": "याद रखें, इंटरनेट कोई जादू नहीं है। यह समुद्र के नीचे फैले हजारों मील के केबलों पर निर्भर करता है!"
      }
    },
    "english": {
      "kid": "HTML is the standard markup language for creating Web pages.\n\n## What is HTML?\n* **HTML** stands for Hyper Text Markup Language\n* **HTML** is the standard markup language for creating Web pages\n* **HTML** describes the structure of a Web page\n* **HTML** consists of a series of elements\n* **HTML** elements tell the browser how to display the content\n* **HTML** elements label pieces of content such as \"this is a heading\", \"this is a paragraph\", \"this is a link\", etc.\n\n## A Simple HTML Document\n<!DOCTYPE html>\n<html>\n<head>\n<title>Nextsem Academy</title>\n</head>\n<body>\n\n<h1>\n  <img src=\"/icon.svg\" width=\"32\" height=\"32\" alt=\"Nextsem Logo\">\n  Welcome to Nextsem\n</h1>\n<p>Learn web development step-by-step with interactive coding examples.</p>\n\n<footer>\n  <p>© 2026 Nextsem Academy. All rights reserved.</p>\n</footer>\n\n</body>\n</html>\n\n## Example Explained\n* The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document\n* The `<html>` element is the root element of an HTML page\n* The `<head>` element contains meta information about the HTML page\n* The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)\n* The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.\n* The `<h1>` element defines a large heading\n* The `<p>` element defines a paragraph\n\n## What is an HTML Element?\nAn HTML element is defined by a start tag, some content, and an end tag:\n`<tagname>` Content goes here... `</tagname>`\n\nThe HTML element is everything from the start tag to the end tag:\n`<h1>`My First Heading`</h1>`\n`<p>`My first paragraph.`<p>`\n\nNote: Some HTML elements have no content (like the `<br>` element). These elements are called empty elements. Empty elements do not have an end tag!",
      "pro": "HTML is the standard markup language for creating Web pages.\n\n## What is HTML?\n* **HTML** stands for Hyper Text Markup Language\n* **HTML** is the standard markup language for creating Web pages\n* **HTML** describes the structure of a Web page\n* **HTML** consists of a series of elements\n* **HTML** elements tell the browser how to display the content\n* **HTML** elements label pieces of content such as \"this is a heading\", \"this is a paragraph\", \"this is a link\", etc.\n\n## A Simple HTML Document\n<!DOCTYPE html>\n<html>\n<head>\n<title>Nextsem Academy</title>\n</head>\n<body>\n\n<h1>\n  <img src=\"/icon.svg\" width=\"32\" height=\"32\" alt=\"Nextsem Logo\">\n  Welcome to Nextsem\n</h1>\n<p>Learn web development step-by-step with interactive coding examples.</p>\n\n<footer>\n  <p>© 2026 Nextsem Academy. All rights reserved.</p>\n</footer>\n\n</body>\n</html>\n\n## Example Explained\n* The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document\n* The `<html>` element is the root element of an HTML page\n* The `<head>` element contains meta information about the HTML page\n* The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)\n* The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.\n* The `<h1>` element defines a large heading\n* The `<p>` element defines a paragraph\n\n## What is an HTML Element?\nAn HTML element is defined by a start tag, some content, and an end tag:\n`<tagname>` Content goes here... `</tagname>`\n\nThe HTML element is everything from the start tag to the end tag:\n`<h1>`My First Heading`</h1>`\n`<p>`My first paragraph.`<p>`\n\nNote: Some HTML elements have no content (like the `<br>` element). These elements are called empty elements. Empty elements do not have an end tag!"
    },
    "hinglish": {
      "kid": "### 📮 Internet Ek Bada Cables Ka Highway Hai!\nLog sochte hain ki internet hawa me chalne waala koi jaadu hai, par sach ye hai ki internet **bade-bade taaro (cables) ka ek network** hai jo zameen ke niche aur samundar ke andar bichha hua hai!\n\n* **Aapka Computer**: Ye highway par bana ek ghar hai.\n* **Data Packets**: Aapki photos aur web pages chhote-chhote packets me toot kar in taaro ke zariye bhaagte hain.\n\n⚡ **Analogy**: Jaise postman chitthiyo ko alag-alag ghar bhejta hai, waise hi routers in data packets ko sahi address par deliver karte hain!",
      "pro": "### 📡 System Level Internet Infrastructure\nProduction me internet ko samajhne ke liye hume **Autonomous Systems (AS)** aur routing protocols ko dekhna hoga. Internet koi single network nahi hai balki aapas me connected thousands of private and public networks ka group hai.\n\n* **Fiber Optic Backbone**: Oceans ke niche layed submarine cables 99% international internet traffic carry karte hain.\n* **Packet Switching**: Data split hota hai packets me aur independent routes se destination tak pahunchta hai.\n\n💻 **Developer Advice**: Connection routes ko track karne ke liye ⊞ Windows Command Prompt me `tracert` utility use karein."
    },
    "hindi": {
      "kid": "### 📮 इंटरनेट तारों का एक विशाल नेटवर्क है!\nबहुत से लोग सोचते हैं कि इंटरनेट हवा में उड़ने वाला कोई जादुई बादल है, लेकिन यह वास्तव में तांबे के तारों और कांच के केबलों का एक विशाल भौतिक नेटवर्क है जो जमीन के नीचे और समुद्र के नीचे बिछा हुआ है!\n\n* **आपका कंप्यूटर**: यह इस बड़े नेटवर्क पर बने एक घर की तरह है।\n* **डेटा पैकेट**: आपकी फोटो या वेबसाइट की फाइलें छोटे-छोटे लिफाफों (पैकेट) में विभाजित होकर इन तारों से बहुत तेजी से यात्रा करती हैं।\n\n📝 **निष्कर्ष**: जब आप कोई वेबसाइट खोलते हैं, तो वह आपके कंप्यूटर तक पहुंचाने के लिए इन भौतिक तारों के माध्यम से यात्रा करती है।",
      "pro": "### 📡 ग्लोबल नेटवर्क इन्फ्रास्ट्रक्चर और आईपी राउटिंग\nपेशेवर स्तर पर, इंटरनेट स्वायत्त प्रणालियों (Autonomous Systems) का एक विकेन्द्रीकृत वैश्विक नेटवर्क है जो **TCP/IP प्रोटोकॉल** का उपयोग करके संचार करता है।\n\n* **बैकबोन नेटवर्क**: टियर 1 आईएसपी (ISP) के पास समुद्र के नीचे फैले विशाल फाइबर-ऑप्टिक केबल हैं, जो डेटा को प्रकाश की गति से ट्रांसफर करते हैं।\n* **पैकेट स्विचिंग**: डेटा को छोटे आईपी पैकेटों में तोड़ा जाता है, और राउटर गंतव्य तक पहुंचने के लिए सबसे छोटे मार्ग का चयन करते हैं।\n\n💻 **प्रो टिप**: अपने कंप्यूटर से सर्वर तक का मार्ग देखने के लिए 🪟 Windows 11 के टर्मिनल में `tracert nextsem.online` चलाएं।"
    }
  },
  {
    "id": 2,
    "slug": "free-web-development-lessons-client-server-model",
    "title": "Web Architecture: Client-Server, DNS, IP Addresses & TCP Handshake",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Duckett Chapter 1 (p. 6-10) & Freeman Chapter 2 (p. 25-35)",
    "exercise": {
      "english": {
        "question": "Which components are involved in establishing a complete Web connection sequence?",
        "options": [
          "Client-Server request/response, DNS domain resolution, IP addressing, and TCP 3-way handshake",
          "Only local file reading without network interfaces",
          "Only CSS styling sheets without server communication",
          "Only graphic design software rendering"
        ],
        "correctAnswer": "Client-Server request/response, DNS domain resolution, IP addressing, and TCP 3-way handshake",
        "hint": "A web connection relies on 4 fundamental steps: finding the server (DNS), getting its address (IP), connecting (TCP Handshake), and requesting the page (Client-Server)."
      },
      "hinglish": {
        "question": "Web connection establish karne mein kaun se main steps involve hote hain?",
        "options": [
          "Client-Server request/response, DNS domain resolution, IP addressing, aur TCP 3-way handshake",
          "Sirf local file reading bina network ke",
          "Sirf CSS styling sheets bina server communication ke",
          "Sirf graphic design software rendering"
        ],
        "correctAnswer": "Client-Server request/response, DNS domain resolution, IP addressing, aur TCP 3-way handshake",
        "hint": "Web connection 4 main steps par chalta hai: DNS resolution, IP addressing, TCP Handshake, aur Client-Server communication."
      },
      "hindi": {
        "question": "वेब कनेक्शन स्थापित करने में कौन से मुख्य चरण शामिल हैं?",
        "options": [
          "क्लाइंट-सर्वर अनुरोध/प्रतिक्रिया, DNS डोमेन रिज़ॉल्यूशन, IP एड्रेसिंग, और TCP 3-वे हैंडशेक",
          "बिना नेटवर्क के केवल लोकल फाइल रीडिंग",
          "बिना सर्वर कम्युनिकेशन के केवल CSS स्टाइलिंग",
          "केवल ग्राफिक्स डिजाइन सॉफ्टवेयर रेंडरिंग"
        ],
        "correctAnswer": "क्लाइंट-सर्वर अनुरोध/प्रतिक्रिया, DNS डोमेन रिज़ॉल्यूशन, IP एड्रेसिंग, और TCP 3-वे हैंडशेक",
        "hint": "वेब कनेक्शन 4 मुख्य चरणों पर निर्भर करता है: DNS, IP एड्रेस, TCP हैंडशेक और क्लाइंट-सर्वर रिस्पांस!"
      }
    },
    "english": {
      "kid": "### 🌐 Web Architecture: How the Web Works (All-in-One Guide)\n\nWeb communications rely on four essential pillars working together seamlessly:\n\n---\n\n### 1. 🧒 Client vs. Server Model\n* **The Client (You)**: This is your web browser (Chrome, Safari, Edge). It acts like a customer ordering food at a restaurant: *\"Can I please have the HTML page?\"*\n* **The Server (The Host)**: This is a powerful remote computer storing website files. It acts like the chef: it receives your request, finds the files, and sends them back to your screen.\n\n---\n\n### 2. 📞 DNS (Domain Name System): The Web's Phonebook\n* Computers don't understand words like `nextsem.online`; they only understand numeric **IP addresses** (like `192.168.29.170`).\n* **DNS** acts as the contacts phonebook of the internet. When you type a domain name, the DNS resolver looks up the name and retrieves the matching IP address in milliseconds!\n\n---\n\n### 3. 🏠 IP Addresses (IPv4 vs. IPv6)\n* Every connected device needs a unique address so data packets reach the right destination.\n* **IPv4**: The classic 32-bit format using 4 numbers separated by dots (e.g., `192.168.1.1`).\n* **IPv6**: The 128-bit hexadecimal format (e.g., `2001:0db8:85a3::8a2e:0370:7334`) created to provide trillions of new addresses.\n\n---\n\n### 4. 🤝 The TCP 3-Way Handshake\nBefore sending data, your browser and server perform a 3-step handshake to establish a reliable connection:\n1. **SYN (Hello)**: Client asks *\"Can we connect?\"*\n2. **SYN-ACK (Hello Back)**: Server replies *\"Yes! I hear you, can you hear me?\"*\n3. **ACK (Confirm)**: Client confirms *\"Yes! Connection established, let's transfer data!\"*",
      "pro": "### 🌐 Complete Web Communication & Infrastructure Stack\n\nA comprehensive analysis of Web Architecture covering Client-Server Roles, DNS Lookup Hierarchy, IP Protocols, and TCP Socket Management.\n\n---\n\n### 1. Client-Server Architecture & Execution\n* **Client Side**: Executes HTTP user agent requests, processes DOM trees, CSSOM stylesheets, and JavaScript runtime engines.\n* **Server Side**: Listens on inbound transport ports (e.g., Port 80 for HTTP, 443 for HTTPS), executes backend daemons (Nginx/Apache), and returns HTTP payloads.\n\n---\n\n### 2. Hierarchical DNS Resolution Query Flow\n1. **Browser Cache & OS Host File**: Checks local memory records.\n2. **Recursive Resolver**: Queries Root Nameservers (`.`).\n3. **Top-Level Domain (TLD) Servers**: Resolves TLD extensions (e.g., `.online`).\n4. **Authoritative Nameservers**: Returns exact `A` / `AAAA` record IP bindings.\n\n---\n\n### 3. IP Protocols: IPv4 Subnetting vs. IPv6 Datagrams\n* **IPv4**: 32-bit address space supporting $2^{32}$ (4.29 billion) addresses in dotted-decimal notation (`172.217.16.14`).\n* **IPv6**: 128-bit address space supporting $2^{128}$ ($3.4 \\times 10^{38}$) unique addresses in colon-separated hexadecimal blocks.\n\n---\n\n### 4. TCP 3-Way Handshake & Socket Management\n1. **SYN**: Client sends sequence number $A$ with `SYN` flag.\n2. **SYN-ACK**: Server acknowledges $A+1$, generates sequence number $B$, sets `SYN-ACK` flags.\n3. **ACK**: Client acknowledges $B+1$, sets `ACK` flag, moving state to `ESTABLISHED`."
    },
    "hinglish": {
      "kid": "### 🌐 Web Architecture: Internet Kaise Kaam Karta Hai? (Full Guide)\n\nInternet par ek web page open hone ke peeche 4 main steps hote hain:\n\n---\n\n### 1. 🧒 Client vs. Server\n* **Client (Aap)**: Aapka web browser (Chrome, Safari). Ye server ko request bhejta hai ki *\"Mujhe website dikhao\"*.\n* **Server (Website Computer)**: Ek powerful remote computer jo saari website files store karta hai aur request aane par unhe aapke screen par bhejta hai.\n\n---\n\n### 2. 📞 DNS: Internet Ka Phonebook\n* Computers ko `nextsem.online` jaise naam samajh nahi aate, unhe sirf numbers (IP addresses) samajh aate hain.\n* **DNS** phonebook ki tarah `nextsem.online` ko IP address (jaise `192.168.29.170`) mein translate kar deta hai.\n\n---\n\n### 3. 🏠 IP Address: Aapka Network Address\n* **IPv4**: Purana 32-bit format (jaise `192.168.1.1`).\n* **IPv6**: Naya 128-bit lamba format (jaise `2001:0db8...`) kyunki dunia mein devices badhne se IPv4 addresses khatam ho rahe hain.\n\n---\n\n### 4. 🤝 TCP 3-Way Handshake\nData bhejne se pehle computer aur server 3-step handshake karte hain:\n1. **SYN**: Client bolta hai *\"Connection banana hai?\"*\n2. **SYN-ACK**: Server bolta hai *\"Haan main ready hoon!\"*\n3. **ACK**: Client bolta hai *\"Okay, data bhejna shuru karo!\"*",
      "pro": "### 🌐 System Architecture & Transport Layers\n\nNetwork layer se le kar application layer tak web communication flow:\n\n1. **Client-Server Flow**: HTTP requests/responses isolated sockets ke zariye execute hote hain.\n2. **DNS Resolution**: Recursive resolver root aur TLD servers se query pass karke final `A Record` IP return karta hai.\n3. **IP Layer**: IPv4 (32-bit) vs IPv6 (128-bit) routing protocols packets ko destination address tak route karte hain.\n4. **TCP Handshake**: SYN ➔ SYN-ACK ➔ ACK sequence ke dwara socket streams active hoti hain."
    },
    "hindi": {
      "kid": "### 🌐 वेब आर्किटेक्चर: इंटरनेट कैसे काम करता है? (संपूर्ण गाइड)\n\nवेबसाइट खोलने के पीछे 4 मुख्य चरण काम करते हैं:\n\n---\n\n### 1. 🧒 क्लाइंट और सर्वर मॉडल\n* **क्लाइंट (आप)**: आपका वेब ब्राउज़र (Chrome, Safari)। यह सर्वर से अनुरोध करता है: *\"मुझे पेज दिखाएं।\"*\n* **सर्वर**: एक शक्तिशाली कंप्यूटर जो वेबसाइट फाइलों को सुरक्षित रखता है और आपके मांगने पर उन्हें भेजता है।\n\n---\n\n### 2. 📞 DNS: इंटरनेट की फोनबुक\n* कंप्यूटर `nextsem.online` जैसे नामों को नहीं समझते; वे केवल आईपी नंबर समझते हैं।\n* **DNS** डोमेन नाम को सही आईपी एड्रेस (`192.168.29.170`) में अनुवादित करता है।\n\n---\n\n### 3. 🏠 आईपी एड्रेस (IPv4 बनाम IPv6)\n* **IPv4**: 32-बिट का पता (उदा. `192.168.1.1`)।\n* **IPv6**: 128-बिट का नया बड़ा पता, जो खरबों नई डिवाइसों को जोड़ सकता है।\n\n---\n\n### 4. 🤝 टीसीपी 3-वे हैंडशेक\nडेटा ट्रांसफर से पहले 3-स्टेप समझौता होता है:\n1. **SYN (हैलो)**: क्लाइंट पूछता है *\"क्या हम जुड़ सकते हैं?\"*\n2. **SYN-ACK**: सर्वर जवाब देता है *\"हाँ, मैं तैयार हूँ!\"*\n3. **ACK**: क्लाइंट पुष्टि करता है *\"चाहिए, डेटा भेजें!\"*",
      "pro": "### 🌐 पूर्ण वेब संचार एवं नेटवर्क इन्फ्रास्ट्रक्चर\n\nवेब आर्किटेक्चर के 4 प्रमुख घटक: क्लाइंट-सर्वर मॉडल, डीएनएस रिज़ॉल्यूशन, आईपी प्रोटोकॉल और टीसीपी सॉकेट प्रबंधन।\n\n1. **क्लाइंट-सर्वर सिस्टम**: क्लाइंट एचटीटीपी अनुरोध भेजता है, और सर्वर पोर्ट 80/443 पर रिस्पॉन्स लौटाता है।\n2. **डीएनएस पदानुक्रम**: ब्राउज़र कैशे से लेकर अथॉरिटेटिव सर्वर तक ए-रिकॉर्ड (A Record) रिज़ॉल्यूशन।\n3. **आईपी एड्रेसिंग**: 32-बिट IPv4 और 128-बिट IPv6 पैकेट राउटिंग।\n4. **टीसीपी हैंडशेक**: SYN ➔ SYN-ACK ➔ ACK अनुक्रम द्वारा विश्वसनीय सॉकेट स्ट्रीम की स्थापना।"
    }
  },
  {
    "id": 3,
    "slug": "how-ip-addresses-and-subnets-work-ipv4-ipv6",
    "title": "IP Addresses, Ports & Subnets (IPv4 vs. IPv6)",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Duckett Chapter 1 & Kurose Ross Chapter 4",
    "exercise": {
      "english": {
        "question": "How many bits are used in an IPv4 address compared to an IPv6 address?",
        "options": [
          "IPv4 uses 32 bits; IPv6 uses 128 bits",
          "IPv4 uses 64 bits; IPv6 uses 256 bits",
          "IPv4 uses 16 bits; IPv6 uses 32 bits",
          "IPv4 uses 128 bits; IPv6 uses 32 bits"
        ],
        "correctAnswer": "IPv4 uses 32 bits; IPv6 uses 128 bits",
        "hint": "IPv4 consists of 4 octets (4 x 8 = 32 bits), while IPv6 provides 128 bits of vast hexadecimal address space!"
      },
      "hinglish": {
        "question": "IPv4 aur IPv6 addresses me kitne bits ka difference hota hai?",
        "options": [
          "IPv4 me 32 bits hote hain; IPv6 me 128 bits hote hain",
          "IPv4 me 64 bits hote hain; IPv6 me 256 bits hote hain",
          "IPv4 me 16 bits hote hain; IPv6 me 32 bits hote hain",
          "IPv4 me 128 bits hote hain; IPv6 me 32 bits hote hain"
        ],
        "correctAnswer": "IPv4 me 32 bits hote hain; IPv6 me 128 bits hote hain",
        "hint": "IPv4 me 4 octets (32 bits) hote hain jabki IPv6 me 128 bits ka huge hexadecimal address space milta hai!"
      },
      "hindi": {
        "question": "IPv4 और IPv6 एड्रेस में कितने बिट्स का अंतर होता है?",
        "options": [
          "IPv4 में 32 बिट्स होते हैं; IPv6 में 128 बिट्स होते हैं",
          "IPv4 में 64 बिट्स होते हैं; IPv6 में 256 बिट्स होते हैं",
          "IPv4 में 16 बिट्स होते हैं; IPv6 में 32 बिट्स होते हैं",
          "IPv4 में 128 बिट्स होते हैं; IPv6 में 32 बिट्स होते हैं"
        ],
        "correctAnswer": "IPv4 में 32 बिट्स होते हैं; IPv6 में 128 बिट्स होते हैं",
        "hint": "IPv4 32-बिट (4 बाइट) फॉर्मेट का उपयोग करता है, जबकि IPv6 128-बिट हेक्साडेसिमल प्रारूप का उपयोग करता है!"
      }
    },
    "english": {
      "kid": "### 🏠 What is an IP Address?\nEvery device connected to the internet (your phone, laptop, smart TV, or web server) needs a unique identification number called an **IP Address (Internet Protocol Address)**.\n\n---\n\n### 📦 Analogy: Your Home Postal Address\n* Think of the internet as a giant city.\n* Just like your house needs a postal address so the mail carrier can deliver packages, your computer needs an **IP address** so YouTube and Google can send videos and web pages directly to your screen!\n\n---\n\n### 🔢 IPv4 vs. IPv6: The Great Address Upgrade\n1. **IPv4 (Classic 32-bit Address)**:\n   * Looks like: `192.168.1.1` or `142.250.190.46` (Google's IP).\n   * Supports about **4.3 billion** unique devices. Because everyone today has phones, laptops, and smart devices, the world ran out of IPv4 addresses!\n2. **IPv6 (Modern 128-bit Address)**:\n   * Looks like: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.\n   * Provides **340 undecillion** addresses (enough for every atom on earth to have its own IP address!).\n\n---\n\n### 🚪 What are Port Numbers?\nIf your IP address is the **apartment building number**, the **Port Number** is the **room number**:\n* **Port 80**: Standard HTTP web traffic.\n* **Port 443**: Secure HTTPS web traffic (encrypted with SSL/TLS 🔒).\n* **Port 3000 / 5500**: Local development servers (like VS Code Live Server).\n\n---\n\n### 🪟 Windows 11 Terminal Drill: Find Your IP Address\nOpen Windows Terminal or Command Prompt (`cmd`) and type:\n```cmd\nipconfig\n```\nLook for **IPv4 Address** (e.g. `192.168.1.10`) and **Default Gateway** (your Wi-Fi router)!",
      "pro": "### 🌐 Network Layer Addressing: IPv4 Subnetting & IPv6 Architecture\n\nIn the OSI and TCP/IP models, the Network Layer (Layer 3) is responsible for host-to-host datagram delivery across routing boundaries via IP addresses.\n\n---\n\n### 1. IPv4 Structure & Subnet Masking\n* **Bit Allocation**: 32 bits divided into four 8-bit octets ($0-255$).\n* **CIDR (Classless Inter-Domain Routing)**: Notation like `192.168.1.0/24` designates the first 24 bits for the network prefix ($255.255.255.0$) and 8 bits for host allocation (254 usable hosts).\n* **Private Address Ranges (RFC 1918)**:\n  * `10.0.0.0/8` (Enterprise intranets)\n  * `172.16.0.0/12` (Mid-sized networks)\n  * `192.168.0.0/16` (Home LANs / Wi-Fi routers)\n  * `127.0.0.1` (Loopback / Localhost)\n\n---\n\n### 2. IPv6 Header Optimization & Colons\n* 128-bit address space represented as 8 hexadecimal groups separated by colons.\n* Eliminates NAT (Network Address Translation) bottlenecks and features stateless address autoconfiguration (SLAAC).\n\n---\n\n### 3. Transport Layer Ports & Sockets\nA network socket is defined by the 4-tuple: `(Source IP, Source Port, Destination IP, Destination Port)`.\n* **Well-known Ports (0–1023)**: 80 (HTTP), 443 (HTTPS), 22 (SSH), 53 (DNS).\n* **Registered Ports (1024–49151)**: 3000 (React/Next.js dev), 5500 (Live Server), 8080 (Proxies)."
    },
    "hinglish": {
      "kid": "### 🏠 IP Address Kya Hota Hai?\nInternet par connected har device (aapka mobile, laptop, server) ke paas ek unique identity number hota hai jise **IP Address (Internet Protocol Address)** kehte hain!\n\n---\n\n### 📦 Story Analogy: Ghar Ka Pata\n* Internet ko ek bada saher samjhein.\n* Jaise courier waale ko aapke ghar parcel pahunchane ke liye postal address chahiye, waise hi Google aur YouTube ko aapke computer tak web page bhejne ke liye **IP address** chahiye hota hai!\n\n---\n\n### 🔢 IPv4 vs. IPv6 me Antar\n1. **IPv4**: Purana 32-bit format (jaise `192.168.1.1`). Isme total 4.3 billion addresses the jo duniya bhar ke devices badhne par khatam ho gaye.\n2. **IPv6**: Naya 128-bit format (jaise `2001:0db8::8a2e`). Isme itne saare addresses hain ki kabhi khatam nahi honge!\n\n---\n\n### 🚪 Port Numbers Kya Hote Hain?\nAgar IP address aapki **society building** hai, to Port number aapka **flat number** hai:\n* **Port 80**: Normal HTTP websites ke liye.\n* **Port 443**: Secure HTTPS websites ke liye 🔒.\n* **Port 5500 / 3000**: Live Server aur Next.js coding ke liye.\n\n---\n\n### 🪟 Windows 11 CMD Command:\nApne computer ka IP dekhne ke liye Terminal me likhein:\n```cmd\nipconfig\n```",
      "pro": "### 🌐 IP Addressing & Port Allocation Architecture\n* **IPv4 vs IPv6**: 32-bit dotted-decimal (`192.168.1.1`) vs 128-bit hexadecimal addressing.\n* **RFC 1918 Private Ranges**: `192.168.0.0/16`, `10.0.0.0/8` NAT ke through public internet se connect hote hain.\n* **Ports**: Socket bindings define karte hain transport protocol (TCP/UDP) ke endpoints (80 HTTP, 443 HTTPS, 5500 Live Server)."
    },
    "hindi": {
      "kid": "### 🏠 आईपी एड्रेस क्या है?\nइंटरनेट से जुड़े प्रत्येक उपकरण (स्मार्टफोन, लैपटॉप या सर्वर) का एक विशिष्ट पहचान नंबर होता है जिसे **IP Address** कहा जाता है।\n\n---\n\n### 📦 घर के पते का उदाहरण:\n* जैसे डाकिए को आपके घर चिट्ठी पहुंचाने के लिए पते की आवश्यकता होती है, वैसे ही इंटरनेट पर डेटा आपके कंप्यूटर तक पहुंचाने के लिए आईपी एड्रेस का उपयोग होता है!\n\n---\n\n### 🔢 IPv4 बनाम IPv6:\n1. **IPv4**: 32-बिट प्रारूप (जैसे `192.168.1.1`), जिसमें सीमित संख्या में एड्रेस होते हैं।\n2. **IPv6**: 128-बिट प्रारूप, जिसमें खरबों नए एड्रेस उपलब्ध हैं।\n\n---\n\n### 🪟 विंडोज 11 कमांड:\nकमांड प्रॉम्प्ट में `ipconfig` टाइप करके अपना आईपी एड्रेस देखें।",
      "pro": "### 🌐 नेटवर्क लेयर एड्रेसिंग व पोर्ट प्रबंधन\n* **IPv4 संरचना**: 32 बिट्स, चार 8-बिट ऑक्टेट्स में विभाजित।\n* **IPv6**: 128 बिट्स, कोलोन-विभाजित हेक्साडेसिमल ब्लॉक।\n* **पोर्ट सॉकेट**: पोर्ट 80 (HTTP), 443 (HTTPS), और 5500 (लोकल लाइव सर्वर)।"
    }
  },
  {
    "id": 4,
    "slug": "domain-name-system-dns-resolution-flow",
    "title": "Domain Name System (DNS) Resolution & Root Servers",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Duckett Chapter 1 & Kurose Ross Chapter 2",
    "exercise": {
      "english": {
        "question": "What is the primary role of the Domain Name System (DNS) on the internet?",
        "options": [
          "Translating human-readable domain names (like nextsem.online) into machine-readable IP addresses",
          "Encrypting user passwords in database tables",
          "Compiling JavaScript into machine code",
          "Designing responsive CSS stylesheets"
        ],
        "correctAnswer": "Translating human-readable domain names (like nextsem.online) into machine-readable IP addresses",
        "hint": "DNS acts as the internet's phonebook, converting human names into numeric IP addresses!"
      },
      "hinglish": {
        "question": "Internet par DNS (Domain Name System) ka main kaam kya hota hai?",
        "options": [
          "Human-friendly domain names (jaise nextsem.online) ko machine IP addresses me translate karna",
          "Database me passwords encrypt karna",
          "JavaScript code ko machine code me convert karna",
          "CSS design styles banana"
        ],
        "correctAnswer": "Human-friendly domain names (jaise nextsem.online) ko machine IP addresses me translate karna",
        "hint": "DNS internet ki phonebook hai jo naam ko IP address me convert karti hai!"
      },
      "hindi": {
        "question": "इंटरनेट पर डोमेन नेम सिस्टम (DNS) का मुख्य कार्य क्या है?",
        "options": [
          "डोमेन नामों (जैसे nextsem.online) को संख्यात्मक IP एड्रेस में अनुवाद करना",
          "डेटाबेस में पासवर्ड एन्क्रिप्ट करना",
          "जावास्क्रिप्ट को मशीन कोड में बदलना",
          "वेबपेज की डिजाइन बनाना"
        ],
        "correctAnswer": "डोमेन नामों (जैसे nextsem.online) को संख्यात्मक IP एड्रेस में अनुवाद करना",
        "hint": "DNS इंटरनेट की टेलीफोन डायरेक्टरी की तरह काम करता है!"
      }
    },
    "english": {
      "kid": "### 📞 DNS: The Internet's Phonebook\nImagine if you had to memorize a 10-digit number for every friend in your school. That would be impossible! Instead, you save their name in your phone contacts and tap **\"Call\"**.\n\n* **The Web Problem**: Computers only understand IP addresses like `142.250.190.46`. But humans prefer names like `google.com` or `nextsem.online`.\n* **The DNS Solution**: **DNS (Domain Name System)** automatically translates human names into computer IP numbers in less than 50 milliseconds!\n\n---\n\n### 🏃 Step-by-Step: What Happens When You Type a URL?\n1. **Browser Cache Check**: Did you visit this website recently? If yes, use the saved IP.\n2. **OS Cache & Resolver**: Your 🪟 Windows OS asks your ISP (Internet Service Provider) resolver.\n3. **Root Servers (`.`)**: 13 global root server clusters guide the request to the right extension.\n4. **TLD Nameserver (`.online` or `.com`)**: Finds the authoritative registrar for the domain.\n5. **Authoritative Nameserver**: Returns the exact **A Record** IP address!\n\n---\n\n### 🪟 Windows 11 Terminal Drill: Perform a Live DNS Lookup\nOpen Command Prompt (`cmd`) on your PC and run:\n```cmd\nnslookup nextsem.online\n```\nYou will see the DNS Server responding with the exact public IP address of the website!",
      "pro": "### 🌐 Hierarchical DNS Resolution Architecture\n\nDNS is a globally distributed, hierarchical database system operating primarily over UDP Port 53 (and TCP Port 53 for zone transfers & payloads exceeding 512 bytes).\n\n---\n\n### 1. The 4-Stage Lookup Tree\n1. **DNS Recursive Resolver / Stub Resolver**: Queries on behalf of the client.\n2. **Root Nameservers (`.`)**: Directs queries to Top-Level Domain (TLD) authoritative servers.\n3. **TLD Nameservers (`.com`, `.online`, `.org`, `.edu`)**: Managed by registry operators (e.g., Verisign, Radix).\n4. **Authoritative Nameservers**: Holds the canonical DNS resource records (`A`, `AAAA`, `CNAME`, `MX`, `TXT`).\n\n---\n\n### 2. Essential DNS Record Types\n* **A Record**: Maps hostname to 32-bit IPv4 address (`nextsem.online -> 199.36.158.100`).\n* **AAAA Record**: Maps hostname to 128-bit IPv6 address.\n* **CNAME (Canonical Name)**: Alias pointing one domain to another (`www.nextsem.online -> nextsem.online`).\n* **TXT Record**: Used for domain verification, SPF, DKIM, and site ownership."
    },
    "hinglish": {
      "kid": "### 📞 DNS Kya Hai? (Internet Ki Contacts Book)\nAgar aapko har dost ka phone number yaad rakhna pade to kitni mushkil hogi! Isliye hum phone me naam save karte hain.\n\n* Web browsers sirf numeric **IP addresses** samajhte hain.\n* **DNS (Domain Name System)** hamare likhe domain name (jaise `nextsem.online`) ko IP address me convert karta hai!\n\n---\n\n### 🪟 Windows 11 Command:\n```cmd\nnslookup nextsem.online\n```",
      "pro": "### 🌐 DNS Lookup Hierarchy\n* **Recursive Resolver -> Root Nameserver -> TLD Server -> Authoritative Nameserver**.\n* **Resource Records**: `A` (IPv4), `AAAA` (IPv6), `CNAME` (Canonical Alias), `TXT` (Domain verification)."
    },
    "hindi": {
      "kid": "### 📞 डोमेन नेम सिस्टम (DNS) क्या है?\nDNS इंटरनेट की फोनबुक है। यह इंसानों द्वारा पढ़े जाने वाले नामों (जैसे `nextsem.online`) को कंप्यूटर द्वारा पढ़े जाने वाले आईपी एड्रेस में बदलता है।\n\n---\n\n### 🪟 विंडोज कमांड:\n```cmd\nnslookup nextsem.online\n```",
      "pro": "### 🌐 डीएनएस पदानुक्रम व रिसोर्स रिकॉर्ड्स\n* **क्वेरी चक्र**: रूट सर्वर ➔ TLD सर्वर ➔ प्रामाणिक (Authoritative) सर्वर।\n* **रिकॉर्ड प्रकार**: `A` रिकॉर्ड (IPv4), `AAAA` (IPv6), `CNAME` (उपनाम), `TXT` (सत्यापन)।"
    }
  },
  {
    "id": 5,
    "slug": "tcp-ip-3-way-handshake-network-packets",
    "title": "TCP/IP 3-Way Handshake & Packet Transmission",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Duckett Chapter 1 & Kurose Ross Chapter 3",
    "exercise": {
      "english": {
        "question": "What is the correct 3-step sequence of the TCP 3-Way Handshake?",
        "options": [
          "SYN -> SYN-ACK -> ACK",
          "ACK -> SYN -> FIN",
          "PING -> PONG -> CONNECT",
          "REQUEST -> PROCESS -> RESPONSE"
        ],
        "correctAnswer": "SYN -> SYN-ACK -> ACK",
        "hint": "The client sends SYN (synchronize), the server replies with SYN-ACK, and the client confirms with ACK (acknowledge)!"
      },
      "hinglish": {
        "question": "TCP 3-Way Handshake ka sahi sequence kaun sa hai?",
        "options": [
          "SYN -> SYN-ACK -> ACK",
          "ACK -> SYN -> FIN",
          "PING -> PONG -> CONNECT",
          "REQUEST -> PROCESS -> RESPONSE"
        ],
        "correctAnswer": "SYN -> SYN-ACK -> ACK",
        "hint": "Client pehle SYN bhejta hai, server SYN-ACK se reply karta hai, aur client ACK se confirm karta hai!"
      },
      "hindi": {
        "question": "TCP 3-वे हैंडशेक का सही क्रम क्या है?",
        "options": [
          "SYN -> SYN-ACK -> ACK",
          "ACK -> SYN -> FIN",
          "PING -> PONG -> CONNECT",
          "REQUEST -> PROCESS -> RESPONSE"
        ],
        "correctAnswer": "SYN -> SYN-ACK -> ACK",
        "hint": "क्लाइंट SYN भेजता है, सर्वर SYN-ACK लौटाता है, और अंत में क्लाइंट ACK से पुष्टि करता है!"
      }
    },
    "english": {
      "kid": "### 🤝 The Polite Computer Handshake (TCP 3-Way Handshake)\nBefore your browser and a web server exchange any webpage data or HTML code, they perform a **3-step handshake** to ensure both sides are awake and listening!\n\n---\n\n### 💬 The 3-Step Dialogue:\n1. **Step 1: SYN (Synchronize)**\n   * 🙋‍♂️ **Browser**: *\"Hello Server! I would like to connect with you. Are you ready?\"*\n2. **Step 2: SYN-ACK (Synchronize-Acknowledge)**\n   * 🖥️ **Server**: *\"Hello Browser! Yes, I hear you loud and clear. Can you hear me?\"*\n3. **Step 3: ACK (Acknowledge)**\n   * 🙋‍♂️ **Browser**: *\"Awesome! I hear you. The connection is established. Please send me the HTML page!\"*\n\n---\n\n### 📦 Packet Slicing & Reassembly\n* Large files (images, CSS files, videos) are chopped up into thousands of tiny **Packets** (each about 1,500 bytes).\n* Each packet travels independently across different internet wires and gets reassembled in perfect order by TCP at the destination.\n* If a packet gets lost, TCP automatically requests a re-transmission!\n\n---\n\n### 🪟 Windows 11 Terminal Drill: Ping a Server\nOpen Command Prompt (`cmd`) and run:\n```cmd\nping nextsem.online\n```\nNotice the 4 packets sent, 4 received, 0% loss, and the Round Trip Time (RTT in milliseconds)!",
      "pro": "### 📡 Transport Layer Reliability: TCP Handshake & Congestion Control\n\nTransmission Control Protocol (TCP - RFC 793) is a connection-oriented, full-duplex transport protocol providing guaranteed, in-order packet delivery over unreliable IP networks.\n\n---\n\n### 1. Connection Establishment: The 3-Way Handshake\n1. **SYN**: Client sets `SYN = 1` flag in TCP header, chooses initial sequence number ($ISN_c$).\n2. **SYN-ACK**: Server acknowledges with `ACK = ISN_c + 1`, sets `SYN = 1`, chooses server sequence number ($ISN_s$).\n3. **ACK**: Client acknowledges with `ACK = ISN_s + 1`. Sockets enter `ESTABLISHED` state.\n\n---\n\n### 2. TCP vs. UDP Comparison\n* **TCP**: Reliable, error-checked, flow control (sliding window), used for HTTP/1.1, HTTP/2, WebSockets, SSH.\n* **UDP**: Connectionless, low-latency, no re-transmissions, used for DNS queries, video live streaming, and HTTP/3 (QUIC)."
    },
    "hinglish": {
      "kid": "### 🤝 TCP 3-Way Handshake Kya Hai?\nWeb page mangne se pehle browser aur server 3 steps me dosti (connection) karte hain:\n1. **SYN**: Browser bolta hai *\"Hello Server, kya hum baat kar sakte hain?\"*\n2. **SYN-ACK**: Server reply karta hai *\"Haan! Main ready hoon, kya tum sun rahe ho?\"*\n3. **ACK**: Browser confirm karta hai *\"Haan, connection done! Ab HTML file bhejo.\"*\n\n---\n\n### 🪟 Windows 11 Command:\n```cmd\nping nextsem.online\n```",
      "pro": "### 📡 TCP Sockets & State Machine\n* **Handshake**: SYN $\\rightarrow$ SYN-ACK $\\rightarrow$ ACK.\n* **Packet Guarantee**: Sliding window flow control & automatic re-transmission on packet drop."
    },
    "hindi": {
      "kid": "### 🤝 TCP 3-वे हैंडशेक क्या है?\nब्राउज़र और सर्वर के बीच डेटा ट्रांसफर से पहले 3 चरणों में कनेक्शन बनता है:\n1. **SYN**: क्लाइंट कनेक्शन शुरू करता है।\n2. **SYN-ACK**: सर्वर सहमति देता है।\n3. **ACK**: क्लाइंट पुष्टि करता है और डेटा ट्रांसफर शुरू होता है।\n\n---\n\n### 🪟 विंडोज कमांड:\n```cmd\nping nextsem.online\n```",
      "pro": "### 📡 टीसीपी कनेक्शन प्रबंधन\n* **प्रोटोकॉल अंतर**: टीसीपी विश्वसनीय और क्रमित डिलीवरी सुनिश्चित करता है, जबकि यूडीपी (UDP) तेज़ गति के लिए उपयोग होता है।"
    }
  },
  {
    "id": 6,
    "slug": "anatomy-of-http-request-headers-verbs",
    "title": "Anatomy of an HTTP Request",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Freeman Chapter 3 (p. 40-44)",
    "exercise": {
      "question": "Which HTTP verb/method is used to retrieve data from a server?",
      "options": [
        "PUT",
        "GET",
        "DELETE",
        "POST"
      ],
      "correctAnswer": "GET",
      "hint": "When you want to 'get' a webpage, you use the GET method!"
    },
    "english": {
      "kid": "### 📄 Writing a Letter to the Server (HTTP Request)\nWhen you want to visit a website, your browser writes a digital letter called an **HTTP Request**:\n\n* **The Command (Verb)**: Usually `GET` (meaning: *'Give me this page'*).\n* **The Path**: Which page you want, like `/html`.\n* **The Headers**: Extra info, like *'I speak English'* or *'I am using Chrome browser'*.",
      "pro": "### 📡 Anatomy of an HTTP Request Payload\nAn HTTP request consists of a request line, headers, and an optional message body:\n\n1. **Request Line**: Contains Method (`GET`, `POST`, `PUT`, `DELETE`), Request URI (`/index.html`), and HTTP Version (`HTTP/1.1`).\n2. **Headers**: Key-value pairs containing client details:\n   ```http\n   Host: nextsem.online\n   User-Agent: Mozilla/5.0 (Windows 11)\n   Accept-Language: en-US\n   ```\n3. **Payload Body**: Used in `POST`/`PUT` requests to send form data."
    },
    "hinglish": {
      "kid": "### 📄 Request Letter: Server Se Data Maangna\nBrowser jab server se page maangta hai, toh woh ek digital request letter likhta hai:\n\n* **GET Method**: Sabse common command, iska matlab hai *'Mujhe ye file de do'*.\n* **Request Headers**: Browser ki settings batate hain, jaise language preference aur software browser engine details.",
      "pro": "### 📡 Structure of HTTP Request Headers\nHTTP protocol interactions request structures build karte hain:\n\n* **Request Verb**: Operations define karta hai (GET fetching, POST submission).\n* **Headers Metadata**: Content-Type, Authorization tokens, cookies aur caching configurations convey karta hai server daemon systems ko."
    },
    "hindi": {
      "kid": "### 📄 सर्वर को अनुरोध पत्र लिखना (HTTP Request)\nजब आप किसी वेबसाइट पर जाते हैं, तो आपका ब्राउज़र सर्वर को एक डिजिटल अनुरोध पत्र (HTTP Request) भेजता है:\n\n* **विधि (Verb)**: आमतौर पर `GET` (यानी: *'मुझे यह पेज दो'*)\n* **पता (Path)**: आपको कौन सा पेज चाहिए, जैसे `/html`\n* **हेडर (Headers)**: अतिरिक्त जानकारी, जैसे *'मेरा ब्राउज़र क्रोम है'*।",
      "pro": "### 📡 HTTP अनुरोध पेलोड की शारीरिक रचना (Request Payload)\nएक HTTP अनुरोध में एक अनुरोध पंक्ति (Request Line), हेडर (Headers) और एक बॉडी शामिल होती है:\n\n* **अनुरोध पंक्ति**: विधि (उदा. `GET`), पथ (उदा. `/html`), और प्रोटोकॉल संस्करण (उदा. `HTTP/1.1`) को परिभाषित करती है।\n* **अनुरोध हेडर**: क्लाइंट क्रेडेंशियल और मेटाडेटा जैसे `Host`, `User-Agent` और `Accept-Language` प्रदान करते हैं।"
    }
  },
  {
    "id": 7,
    "slug": "http-response-status-codes-explained",
    "title": "Anatomy of an HTTP Response",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Freeman Chapter 3 (p. 45-50)",
    "exercise": {
      "question": "Which HTTP status code represents a successful page retrieval?",
      "options": [
        "200 OK",
        "404 Not Found",
        "500 Internal Server Error",
        "301 Moved Permanently"
      ],
      "correctAnswer": "200 OK",
      "hint": "A successful operation returns the standard 'OK' status, which is 200!"
    },
    "english": {
      "kid": "### 📮 The Server's Reply (HTTP Response)\nWhen the server gets your request, it mails back an **HTTP Response** with a status code:\n\n* **200 OK**: *'Here is your webpage!'* \n* **404 Not Found**: *'Oops! I cannot find that page!'*\n* **500 Server Error**: *'My database crashed!'*",
      "pro": "### 📡 HTTP Response Payload & Status Code Segments\nAn HTTP response package contains a status line, headers, and the document payload:\n\n1. **Status Line**: HTTP Version, status numeric code, and status text:\n   ```http\n   HTTP/1.1 200 OK\n   ```\n2. **Response Headers**: Metadata describing the content:\n   ```http\n   Content-Type: text/html; charset=UTF-8\n   Content-Length: 1250\n   ```\n3. **Response Body**: The actual HTML source code rendered by the client browser."
    },
    "hinglish": {
      "kid": "### 📮 Server Ka Jawaab (HTTP Response)\nServer request milne par files ke sath ek **Status Code** bhejta hai jo connection status batata hai:\n\n* **200 OK**: Sab sahi hai, ye rahi aapki file!\n* **404 Not Found**: Ye page website par exist nahi karta.\n* **500 Internal Server Error**: Server me koi coding crash ho gayi hai.",
      "pro": "### 📡 HTTP Response Protocol & Status Classes\nResponse packages content deliver status return karte hain:\n\n* **Status Code Range**: 2xx (Success), 3xx (Redirect), 4xx (Client Errors), 5xx (Server Problems).\n* **Content headers**: Browser compiler engine ko parsing strategies configure karne me help karte hain (Content-Type header checks)."
    },
    "hindi": {
      "kid": "### 📮 सर्वर का उत्तर (HTTP Response)\nअनुरोध प्राप्त करने के बाद, सर्वर वेबसाइट की फाइलों के साथ एक प्रतिक्रिया (HTTP Response) और एक स्टेटस कोड भेजता है:\n\n* **200 OK**: *'सब ठीक है! ये रही आपकी वेबसाइट।'*\n* **404 Not Found**: *'यह पेज मौजूद नहीं है!'*\n* **500 Server Error**: *'सर्वर की कोडिंग में कोई समस्या आ गई है!'*",
      "pro": "### 📡 HTTP प्रतिक्रिया पेलोड और स्थिति कोड (Response Status Codes)\nएक HTTP प्रतिक्रिया में स्थिति पंक्ति (Status Line), हेडर (Headers) और दस्तावेज़ बॉडी शामिल होती है:\n\n* **स्थिति पंक्ति**: प्रतिक्रिया स्थिति (उदा. `HTTP/1.1 200 OK`) लौटाती है।\n* **प्रतिक्रिया हेडर**: डेटा का प्रकार (उदा. `Content-Type: text/html`) और लंबाई परिभाषित करते हैं।"
    }
  },
  {
    "id": 8,
    "slug": "how-to-read-url-query-parameters-path",
    "title": "Anatomy of a URL",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Freeman Chapter 3 (p. 51-55)",
    "exercise": {
      "question": "In the URL https://nextsem.online/html?user=amit, what does '?user=amit' represent?",
      "options": [
        "The Directory Path",
        "The Protocol Scheme",
        "The Hostname",
        "The Query Parameters"
      ],
      "correctAnswer": "The Query Parameters",
      "hint": "Query parameters start with a question mark (?) and pass extra search values to the page."
    },
    "english": {
      "kid": "### 🧭 Decoding a URL Address!\nEvery webpage has a address bar link called a **URL** (Uniform Resource Locator). Let's dissect one:\n`https://nextsem.online/html?search=tags` \n\n* **https://**: The protocol (how data travels safely).\n* **nextsem.online**: The domain host name (which site you are visiting).\n* **query parameters (?search=tags)**: Extra filters to find specific items on the page.",
      "pro": "### 📐 URL Specification & Component Parsers\nA Uniform Resource Locator (URL) specifies the address of a resource on the Internet:\n\n1. **Scheme/Protocol**: `https` indicating secure communication over SSL/TLS.\n2. **Hostname/Domain**: `nextsem.online` resolved via DNS query.\n3. **Port**: Default is `443` for HTTPS, `80` for HTTP.\n4. **Path**: `/html` referring to the localized directory route.\n5. **Query String**: `?search=tags` passing parameters via key-value tuples."
    },
    "hinglish": {
      "kid": "### 🧭 URL Address Ka Breakdown!\nURL ka matlab hota hai **Uniform Resource Locator**. Chalo iski body ko samajhte hain:\n`https://nextsem.online/html?user=john` \n\n* **https**: Protocol jo data transfer secure karta hai.\n* **nextsem.online**: Main website host address.\n* **Query (?user=john)**: Extra variable parameters jo page dynamic inputs load karne me use karta hai.",
      "pro": "### 📐 RFC 3986 URI & URL Architecture\nURL parser architecture logical parts divide karti hai:\n\n* **Authority**: Domain credentials aur server ports binding specify karti hai.\n* **Query parameters & Fragment hashes (#id)**: Client routers ko browser routing controls inject karne me access parameters map karne ke liye dynamic variables query pass karte hain."
    },
    "hindi": {
      "kid": "### 🧭 यूआरएल का वर्गीकरण (URL Breakdown)!\nप्रत्येक वेब पेज का एक डिजिटल पता होता है जिसे **URL** (यूनिफ़ॉर्म रिसोर्स लोकेटर) कहा जाता है:\n`https://nextsem.online/html?search=tags` \n\n* **https://**: प्रोटोकॉल (डेटा सुरक्षित रूप से कैसे ट्रांसफर होगा)\n* **nextsem.online**: डोमेन नेम (आप कौन सी वेबसाइट देख रहे हैं)\n* **क्वेरी पैरामीटर (?search=tags)**: खोज परिणामों को फ़िल्टर करने के लिए अतिरिक्त निर्देश।",
      "pro": "### 📐 यूआरएल संरचना (URL Anatomy)\nएक यूआरएल (URL) इंटरनेट पर किसी संसाधन का पूर्ण पता और स्थान है:\n\n* **प्रोटोकॉल**: `https` जो सुरक्षित एसएसएल (SSL) कनेक्शन को दर्शाता है।\n* **होस्टनेम**: `nextsem.online` जिसे डीएनएस द्वारा रिज़ॉल्व किया जाता है।\n* **क्वेरी स्ट्रिंग**: `?` के बाद आने वाले कुंजी-मूल्य जोड़े (Key-Value Pairs) जो डेटा पास करते हैं।"
    }
  },
  {
    "id": 9,
    "slug": "how-browser-renders-html-dom-tree",
    "title": "How Browsers Render HTML (DOM)",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Freeman Chapter 3 (p. 56-60)",
    "exercise": {
      "question": "What does DOM stand for in web engineering?",
      "options": [
        "Data Object Map",
        "Document Object Model",
        "Digital Outlook Machine",
        "Directory Output Manager"
      ],
      "correctAnswer": "Document Object Model",
      "hint": "It represents the page structure as a tree of objects. It starts with 'Document'!"
    },
    "english": {
      "kid": "### 🌳 The DOM: Building a Tree of Tags!\nWhen your browser downloads an HTML file, it translates it into a tree model called the **Document Object Model (DOM)**:\n\n* **The Root Trunk**: The `<html>` tag.\n* **The Big Branches**: `<head>` and `<body>` tags.\n* **The Leaves**: Headings, links, and paragraphs nested inside.\n\n✨ If you change a leaf tag, the whole page structure updates instantly!",
      "pro": "### 🌳 Critical Rendering Path & DOM Tree Construction\nThe Document Object Model (DOM) is an API interface for HTML documents, representing the layout structure as a node tree:\n\n1. **Conversion**: Browser parses raw bytes into characters.\n2. **Tokenization**: Identifies tags (e.g. `<html>`, `<body>`) based on HTML5 token rules.\n3. **Lexing**: Converts tokens into node objects containing attributes.\n4. **DOM Construction**: Nodes are linked hierarchically, forming the DOM tree."
    },
    "hinglish": {
      "kid": "### 🌳 DOM Tree: Web Page Ka Skeleton!\nHTML file load hone par browser use ek tree structure me convert karta hai jise **DOM (Document Object Model)** kehte hain:\n\n* **Main Trunk**: `<html>` tag root node hota hai.\n* **Branches**: Uske andar `<head>` aur `<body>` nodes split hote hain.\n* **Leaves**: Paragraphs `<p>` aur images `<img>` tiny nested leaves ki tarah nodes se attach hote hain.",
      "pro": "### 🌳 Browser Parsing and DOM/CSSOM Integration\nBrowser rendering engine critical path parsing sequences calculate karta hai:\n\n* **Token Stream Parsing**: Bytes stream tokenize hokar elements tree dynamic nodes register karti hai.\n* **Render Tree**: DOM (structure) aur CSSOM (styles) merge hokar final Layout tree construct karte hain jo browser canvas par paint hota hai."
    },
    "hindi": {
      "kid": "### 🌳 डीओएम (DOM): टैग्स का एक पेड़!\nजब आपका ब्राउज़र एक HTML फ़ाइल डाउनलोड करता है, तो वह इसे एक पेड़ जैसी संरचना में बदल देता है जिसे **Document Object Model (DOM)** कहा जाता है:\n\n* **मुख्य तना**: `<html>` टैग (रूट नोड)\n* **बड़ी शाखाएँ**: `<head>` और `<body>` टैग\n* **पत्तियाँ**: इनके अंदर नेस्टेड हेडिंग, लिंक और पैराग्राफ।",
      "pro": "### 🌳 क्रिटिकल रेंडरिंग पाथ और डीओएम (DOM) निर्माण\nदस्तावेज़ ऑब्जेक्ट मॉडल (DOM) HTML दस्तावेज़ों के लिए एक प्रोग्रामिंग इंटरफ़ेस है:\n\n* **टोकनाइजेशन**: ब्राउज़र कच्चे बाइट्स को वर्णों में बदलता है और टोकन (शुरू और बंद होने वाले टैग) की पहचान करता है।\n* **नोड निर्माण**: प्रत्येक टोकन को गुणों वाले एक विशिष्ट ऑब्जेक्ट (नोड) में बदला जाता है।\n* **पेड़ की संरचना**: इन नोड्स को आपस में जोड़कर पैरेंट-चाइल्ड रिलेशनशिप ट्री बनाया जाता है।"
    }
  },
  {
    "id": 10,
    "slug": "how-to-use-chrome-developer-tools-elements",
    "title": "Introduction to Browser DevTools",
    "unit": "Unit 1: Web Fundamentals & Client-Server Architecture",
    "bookRef": "Freeman Chapter 3 (p. 61-64)",
    "exercise": {
      "question": "Which panel in Chrome DevTools allows you to inspect and modify live HTML elements?",
      "options": [
        "Elements panel",
        "Network panel",
        "Application panel",
        "Console panel"
      ],
      "correctAnswer": "Elements panel",
      "hint": "It is named after the components of HTML, which are called elements!"
    },
    "english": {
      "kid": "### 🔍 DevTools: Your Superpower Magnifying Glass!\nWant to peek behind the scenes of any website? Press `F12` or right-click and choose **Inspect** to open **Developer Tools**!\n\n* **Elements Panel**: Shows you the exact HTML structure of the page.\n* **Live Edits**: You can double-click any heading text and change it right on your screen!\n\n🔍 **Try It**: Open DevTools, select a line, and edit the words to see it change live!",
      "pro": "### 🛠️ DOM Inspection & DevTools Debugging Workflows\nBrowser Developer Tools are essential tools for auditing, styling, and debugging web pages:\n\n* **Elements Tree**: Renders the active in-memory DOM, showing changes made via Javascript in real-time.\n* **Styles Panel**: Debugs CSS rules, box models, grid layouts, and active selectors.\n* **Console Panel**: Outputs runtime logs, stack traces, Javascript alerts, and network handshake problems."
    },
    "hinglish": {
      "kid": "### 🔍 Browser DevTools: Hacker Mod Active!\nKya aap kisi bhi website ka structure dekhna chahte hain? Page par right-click karke **Inspect** select karein, DevTools khul jayega!\n\n* **Elements Panel**: Page ka saara HTML code yahan dikhta hai.\n* **Live Edit**: Aap kisi bhi website ka text change karke apne browser me mazaak kar sakte hain!",
      "pro": "### 🛠️ Runtime DOM Debugging using DevTools\nModern front-end developers inspection workflows me DevTools panels master karte hain:\n\n* **Live Style Audits**: Computed layout attributes, media query breakpoints, and device dimension overrides configure custom parameters.\n* **Network Panel**: Track request status codes (200 OK, 301, 500) and API latency payloads."
    },
    "hindi": {
      "kid": "### 🔍 डेवलपर टूल्स (DevTools): हैकर मॉड एक्टिव करें!\nक्या आप किसी भी वेबसाइट के पीछे का कोड देखना चाहते हैं? किसी भी पेज पर राइट-क्लिक करें और **Inspect** चुनें, डीवटूल्स खुल जाएगा!\n\n* **Elements पैनल**: यहाँ आपको वेबसाइट का पूरा HTML कोड दिखाई देगा।\n* **लाइव एडिटिंग**: आप यहाँ किसी भी हेडिंग को बदल सकते हैं और वह तुरंत आपकी स्क्रीन पर बदल जाएगी!",
      "pro": "### 🛠️ रनटाइम डीओएम निरीक्षण और देवटूल्स वर्कफ़्लो\nब्राउज़र डेवलपर टूल्स (DevTools) फ्रंट-एंड वेब इंजीनियरिंग के लिए सबसे महत्वपूर्ण उपकरण हैं:\n\n* **Elements पैनल**: यह सक्रिय इन-मेमोरी DOM पेड़ दिखाता है, जिससे आप टैग जोड़ या हटा सकते हैं।\n* **Styles टैब**: इसके द्वारा आप बॉक्स मॉडल (Margin, Padding) और सक्रिय सीएसएस नियमों को संशोधित कर सकते हैं।"
    }
  },
  {
    "id": 11,
    "slug": "doctype-html5-declaration-syntax",
    "title": "The <!DOCTYPE html> Declaration",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 1 (p. 24-25)",
    "exercise": {
      "question": "Where should the <!DOCTYPE html> declaration be placed in an HTML file?",
      "options": [
        "At the very first line of the document, before the <html> tag",
        "Inside the <head> element block",
        "Directly after the opening <body> tag",
        "At the end of the document to close all tags"
      ],
      "correctAnswer": "At the very first line of the document, before the <html> tag",
      "hint": "It isn't an HTML tag itself; it is a preamble declaration placed before any tags start!"
    },
    "english": {
      "kid": "### 📜 DOCTYPE: Telling the Browser What Game We are Playing!\nImagine you invite a friend to play a game. First, you have to tell them the rules, right? \n\n`<!DOCTYPE html>` does exactly that! It tells your web browser: **'Hey! I am writing in HTML5, the newest version of web design. Please parse my page correctly!'**\n\n* **Preamble**: It must always sit on the very first line of your file. No spaces or tags before it!\n* **No Close Tag**: It's a declaration, so it doesn't need a closing tag like `</doctype>`.",
      "pro": "### ⚙️ Doctype Declaration and Quirks Mode Prevention\nThe `<!DOCTYPE html>` declaration is a required document preamble in modern web standards.\n\n* **Purpose**: It triggers **Standard Mode** in modern web engines (like Blink and Gecko) rather than **Quirks Mode** (which replicates old 1990s Netscape/IE layout behavior).\n* **Syntax**: In HTML5, it is case-insensitive and simplified to `<!DOCTYPE html>`. Older XHTML standards required long DTD URLs."
    },
    "hinglish": {
      "kid": "### 📜 DOCTYPE: Browser Ko Rules Batana!\nJaise game shuru karne se pehle aap uske rules batate hain, waise hi `<!DOCTYPE html>` browser ko batata hai ki hum HTML5 use kar rahe hain!\n\n* **First Line**: Ise hamesha file ki sabse pehli line par likhte hain, bina kisi space ke.\n* **No Closing**: Ye koi normal tag nahi hai, isliye iska koi closing tag nahi hota.",
      "pro": "### ⚙️ Doctype Preamble aur Quirks Mode Validation\n`<!DOCTYPE html>` specification web standards me validation ensure karta hai:\n\n* **Standard Mode**: Modern rendering engine standards align karne ke liye is declaration ka hona mandatory hai.\n* **Syntactical Rules**: Ye character set aur parsing rules ko modern HTML5 specification standard ke according bind karta hai."
    },
    "hindi": {
      "kid": "### 📜 DOCTYPE: ब्राउज़र को नियम बताना!\nसोचिए यदि आप अपने दोस्त को कोई गेम खेलने के लिए बुलाते हैं, तो सबसे पहले आप उसे खेल के नियम बताते हैं।\n\n`<!DOCTYPE html>` भी बिल्कुल यही करता है! यह ब्राउज़र को बताता है: **'अरे! मैं HTML5 (वेब कोडिंग का नया संस्करण) लिख रहा हूँ, कृपया मेरे पेज को सही ढंग से दिखाएं!'**\n\n* **पहली लाइन**: यह हमेशा फ़ाइल की सबसे पहली लाइन पर होना चाहिए।\n* **कोई बंद करने वाला टैग नहीं**: यह एक घोषणा (Declaration) है, इसलिए इसे बंद करने के लिए किसी टैग की आवश्यकता नहीं होती।",
      "pro": "### ⚙️ Doctype घोषणा और Quirks मोड की रोकथाम\n`<!DOCTYPE html>` घोषणा आधुनिक वेब मानकों के अनुपालन के लिए आवश्यक दस्तावेज़ प्रस्तावना (Preamble) है:\n\n* **उद्देश्य**: यह ब्राउज़र के रेंडरिंग इंजन को **Standard Mode** में काम करने के लिए प्रेरित करता है ताकि पेज पुराने 'Quirks Mode' में न जाए।\n* **लक्षण**: HTML5 में यह केस-असंवेदनशील (Case-insensitive) है और इसे सबसे सरल रूप में लिखा जाता है।"
    }
  },
  {
    "id": 12,
    "slug": "html-root-element-lang-attribute",
    "title": "The <html> Root Element",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 1 (p. 25-26)",
    "exercise": {
      "question": "Which attribute is used on the <html> tag to specify the page's language for search engines and screen readers?",
      "options": [
        "lang",
        "charset",
        "href",
        "locale"
      ],
      "correctAnswer": "lang",
      "hint": "It is short for language, like lang=\"en\" or lang=\"hi\"!"
    },
    "english": {
      "kid": "### 🌐 The <html> Element: The Mother of All Tags!\nEvery single tag you write on your page needs to live inside the **`<html>`** element. It is like the suitcase that packs your entire website!\n\n* **The `lang` Attribute**: Always write `<html lang=\"en\">`. This tells search engines (like Google) and screen readers (for blind users) that the main language of your page is English.",
      "pro": "### 📦 The Document Root and Accessibility Bindings\nThe `<html>` element serves as the absolute root of an HTML document, enclosing all content.\n\n* **Root Node**: All elements (except `<!DOCTYPE>`) are descendants of this element in the DOM tree.\n* **Accessibility Optimization**: Specifying `<html lang=\"en\">` is crucial for SEO and accessibility (a11y), allowing speech synthesizers to select correct pronunciations and search engines to filter localized index values."
    },
    "hinglish": {
      "kid": "### 🌐 <html> Tag: Saare Tags Ka Ghar!\nJo bhi code aap likhenge, wo sab **`<html>`** tag ke andar aayega. Ye saare page ka parent/root tag hai!\n\n* **lang Attribute**: `<html lang=\"en\">` likhne se browser aur Google search engine ko pata chalta hai ki page ki primary language English hai.",
      "pro": "### 📦 Root Document Elements aur Accessibility Standards\n`<html>` element document lifecycle ka entry point model generate karta hai:\n\n* **DOM Root Entry**: Script selectors document tree query parameters is root node se check karte hain.\n* **SEO localization**: User request languages filter maps aur index crawling tags ke liye accurate `lang` values provide karna basic step hai."
    },
    "hindi": {
      "kid": "### 🌐 <html> टैग: सभी टैग्स का घर!\nआप अपने पेज पर जो कुछ भी कोडिंग लिखते हैं, वह सब **`<html>`** टैग के अंदर होनी चाहिए। यह आपकी पूरी वेबसाइट का मुख्य कंटेनर है!\n\n* **lang अटरीब्यूट**: हमेशा `<html lang=\"hi\">` या `<html lang=\"en\">` लिखें। यह गूगल जैसे सर्च इंजन और स्क्रीन रीडर को बताता है कि आपका पेज किस भाषा में लिखा गया है।",
      "pro": "### 📦 दस्तावेज़ का मूल (Root) और सुगम्यता (Accessibility) बाइंडिंग\n`<html>` तत्व दस्तावेज़ के संपूर्ण पदानुक्रम का शीर्ष नोड (Top-most Node) है:\n\n* **रूट नोड**: DOM ट्री में अन्य सभी तत्व इसी के अंतर्गत संपुटित (Encapsulated) होते हैं।\n* **सुगम्यता (Accessibility)**: `lang` विशेषता (Attribute) स्क्रीन रीडर्स को शब्दों के सही उच्चारण में मदद करती है और वैश्विक खोजों में पेज की भाषा अनुक्रमित करती है।"
    }
  },
  {
    "id": 13,
    "slug": "html-head-container-metadata",
    "title": "The <head> Container",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 1 (p. 26-28)",
    "exercise": {
      "question": "Which type of content belongs inside the <head> element?",
      "options": [
        "Interactive button widgets and input form fields",
        "Metadata, page titles, character encodings, and CSS link sheets",
        "Image and native video players visible to users",
        "Visible paragraph texts and heading structures"
      ],
      "correctAnswer": "Metadata, page titles, character encodings, and CSS link sheets",
      "hint": "The head element contains invisible configurations and settings, NOT visible contents."
    },
    "english": {
      "kid": "### 🧠 The <head> Tag: The Webpage's Brain!\nA webpage is split into two main zones: the **`<head>`** (the brain) and the **`<body>`** (the visible body).\n\n* **Invisible Settings**: The `<head>` container holds things you don't see on the white screen. It stores your page title, character sets, search-keywords, and stylesheet styles!\n* **Preamble**: It sits right at the top, inside the `<html>` root, but before the `<body>` starts.",
      "pro": "### ⚙️ Metadata Scope and Document Header Configurations\nThe `<head>` container holds non-visual configuration parameters and resource linkages for the document.\n\n* **Resource Mapping**: Stylesheets, script engines, font libraries, and viewport tags are registered here.\n* **Parser Blocking**: Browsers parse and execute scripts/styles in the `<head>` before rendering the `<body>`, which is why modern pages load critical configurations here."
    },
    "hinglish": {
      "kid": "### 🧠 <head> Tag: Webpage Ka Brain!\nWebpage do hisson me divided hota hai: **`<head>`** (jo dimaag hai aur invisible settings store karta hai) aur **`<body>`** (jo screen par dikhta hai).\n\n* **Settings & Metadata**: Isme page ka title, icon links, CSS files connection, aur metadata save hota hai jo visitors ko direct nahi dikhta.",
      "pro": "### ⚙️ HTML Document Head Lifecycle\n`<head>` element header configurations block design define karta hai:\n\n* **Critical Path Loading**: Browser page render karne se pehle head dependencies resolve karta hai.\n* **SEO tags**: OpenGraph protocols and canonical URL pointers inside the head target search crawl behaviors."
    },
    "hindi": {
      "kid": "### 🧠 <head> टैग: वेबपेज का दिमाग!\nएक वेबपेज दो मुख्य भागों में विभाजित होता है: **`<head>`** (दिमाग) और **`<body>`** (दिखने वाला शरीर)।\n\n* **अदृश्य सेटिंग्स**: `<head>` टैग में वे सेटिंग्स होती हैं जो स्क्रीन पर सीधे दिखाई नहीं देतीं। इसमें पेज का शीर्षक (Title), कोडिंग भाषा की सेटिंग्स, और सीएसएस फाइलों के लिंक शामिल होते हैं।",
      "pro": "### ⚙️ मेटाडेटा का क्षेत्र और दस्तावेज़ हेडर कॉन्फ़िगरेशन\n`<head>` तत्व दस्तावेज़ के संबंध में गैर-दृश्य (Non-visual) विवरण प्रदान करता है:\n\n* **रिसोर्स लोडिंग**: बाह्य सीएसएस फ़ाइलें, फोंट, और स्क्रिप्ट घटक यहीं पंजीकृत होते हैं।\n* **पार्सिंग प्रभाव**: ब्राउज़र मुख्य सामग्री प्रदर्शित करने से पहले हेड में मौजूद डेटा को संसाधित करता है, इसलिए यह पेज के प्रदर्शन (Performance) के लिए महत्वपूर्ण है।"
    }
  },
  {
    "id": 14,
    "slug": "html-title-element-seo-importance",
    "title": "The <title> Element",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 1 (p. 27-28)",
    "exercise": {
      "question": "Which tag defines the text that appears on the browser's tab bar?",
      "options": [
        "<meta name=\"title\">",
        "<title>",
        "<header>",
        "<h1>"
      ],
      "correctAnswer": "<title>",
      "hint": "It is placed inside the <head> block and defines the tab text!"
    },
    "english": {
      "kid": "### 🏷️ The <title> Tag: The Label on Your Tab!\nHave you ever looked at the small tabs at the top of your web browser? The text written on those tabs is set by the **`<title>`** tag!\n\n* **SEO Ranking**: When you search for something on Google, the blue links you click are actually the `<title>` values of those websites!\n* **Placement**: It must always be nested inside the `<head>` element.",
      "pro": "### 🔍 SEO Title Tag Optimization and Crawling Rules\nThe `<title>` element defines the document's title in browser tabs, bookmarks, and search results.\n\n* **SEO Value**: It is the single most critical on-page SEO element. Search engine crawlers index this tag as the primary link header (Search Engine Results Page - SERP).\n* **Best Practices**: Keep titles between 50-60 characters, lead with primary keywords, and end with the brand name (e.g., `Primary Keyword | Brand`)."
    },
    "hinglish": {
      "kid": "### 🏷️ <title> Tag: Browser Tab Ka Name!\nBrowser tabs ke upar jo naam likha hota hai, wo **`<title>`** tag se aata hai. \n\n* **Google Search**: Jab aap Google par search karte hain, to jo blue click-links aate hain, wo titles hi hote hain! Ise hamesha `<head>` ke andar likhein.",
      "pro": "### 🔍 SERP Title Optimization and Crawl Indexing\n`<title>` block metadata context configurations handle karta hai:\n\n* **Title Length Constraints**: 60 characters se badha text search results (SERP) me truncate (`...`) ho jata hai.\n* **Brand consistency**: Brand names ko titles me end pipeline `|` separator ke sath append karna standard pattern hai."
    },
    "hindi": {
      "kid": "### 🏷️ <title> टैग: ब्राउज़र टैब का नाम!\nक्या आपने कभी अपने ब्राउज़र के शीर्ष पर छोटे टैब देखे हैं? उन टैब पर जो नाम लिखा होता है, वह **`<title>`** टैग द्वारा निर्धारित होता है!\n\n* **सर्च इंजन (SEO)**: जब आप गूगल पर कुछ खोजते हैं, तो जो नीले रंग के लिंक दिखाई देते हैं, वे वास्तव में वेबसाइट के `<title>` ही होते हैं!",
      "pro": "### 🔍 एसईओ शीर्षक अनुकूलन और क्रॉलिंग नियम\n`<title>` तत्व दस्तावेज़ के नाम को ब्राउज़र बार और खोज परिणामों (SERPs) में घोषित करता है:\n\n* **एसईओ महत्व**: यह ऑन-पेज एसईओ का सबसे महत्वपूर्ण तत्व है। सर्च इंजन क्रॉलर इसका उपयोग परिणामों में प्राथमिक हेडर के रूप में करते हैं।\n* **लंबाई सीमा**: शीर्षक सामान्यतः 50-60 अक्षरों का होना चाहिए ताकि यह सर्च परिणामों में अधूरा (Truncated) न दिखे।"
    }
  },
  {
    "id": 15,
    "slug": "html-meta-charset-utf8-encoding",
    "title": "Character Encoding with <meta charset=\"UTF-8\">",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 8 (p. 182-184)",
    "exercise": {
      "question": "Which meta attribute sets the character encoding scheme for standard HTML5 documents?",
      "options": [
        "http-equiv",
        "encoding",
        "content",
        "charset"
      ],
      "correctAnswer": "charset",
      "hint": "It is a meta tag attribute written as <meta charset=\"...\">"
    },
    "english": {
      "kid": "### 🔠 Meta Charset: Decoding Characters and Emojis!\nWebsites are sent across the internet as streams of numbers (`0`s and `1`s). But how does your browser know that a certain number is a letter 'A' or a smiling emoji (😊)?\n\nIt uses **`<meta charset=\"UTF-8\">`**!\n\n* **UTF-8**: This is a magic map that represents almost every character, symbol, and emoji from all languages in the world correctly. Without it, you might see weird garbage text like `Ã¢â‚¬`!",
      "pro": "### 📡 Character Sets, UTF-8 Encoding, and Unicode Mapping\nThe `<meta charset=\"UTF-8\">` tag specifies the character encoding scheme for the HTML document.\n\n* **Unicode Standards**: UTF-8 (8-bit UCS Transformation Format) is the dominant variable-width encoding capable of representing all Unicode characters ($1.1 \\times 10^6$ codepoints).\n* **Injection Audits**: It should be declared in the first 1024 bytes of the HTML document to prevent cross-site scripting (XSS) attacks exploiting character set switching."
    },
    "hinglish": {
      "kid": "### 🔠 Meta Charset: Emojis Ko Sahi Dikhana!\nInternet par data numbers (binary) me travel karta hai. Browser ko numbers se letters ya emojis (😊) banane ke liye **`<meta charset=\"UTF-8\">`** ki zarurat hoti hai.\n\n* **UTF-8**: Ye ek decode key hai jo duniya ki lagbhag har language aur symbols ko browser me bina kisi glitch ke display karti hai.",
      "pro": "### 📡 Document Decoding and Security Charset Standards\nCharset specification data stream translation manage karta hai:\n\n* **Byte Order Mark**: UTF-8 representation character encoding exploits aur document parser errors bypass karta hai.\n* **Parser Execution**: Document loading time optimize hone ke liye meta tag declaration header execution me start positions me define karte hain."
    },
    "hindi": {
      "kid": "### 🔠 Meta Charset: इमोजी और अक्षरों को सही दिखाना!\nवेबसाइटें इंटरनेट पर 0 और 1 (बाइनरी कोड) के रूप में यात्रा करती हैं। लेकिन ब्राउज़र को कैसे पता चलता है कि कोई विशेष संख्या हिंदी का अक्षर है या कोई मुस्कुराता हुआ इमोजी (😊)?\n\nइसके लिए हम **`<meta charset=\"UTF-8\">`** का उपयोग करते हैं!\n\n* **UTF-8**: यह एक सार्वभौमिक (Universal) कुंजी है जो दुनिया की लगभग सभी भाषाओं और प्रतीकों को ब्राउज़र पर बिना किसी गड़बड़ी के प्रदर्शित करती है।",
      "pro": "### 🔠 वर्ण एन्कोडिंग (Character Encoding) और यूनिकोड मैपिंग\n`<meta charset=\"UTF-8\">` दस्तावेज़ के लिए डेटा एन्कोडिंग स्कीम को परिभाषित करता है:\n\n* **यूनिकोड मानक**: UTF-8 एक चर-चौड़ाई (Variable-width) एन्कोडिंग है जो संपूर्ण यूनिकोड डेटाबेस (सभी भाषाओं के अक्षर और इमोजी) को डिकोड कर सकती है।\n* **सुरक्षा**: सुरक्षा जोखिमों (जैसे XSS हमलों) से बचने के लिए इसे दस्तावेज़ के हेडर के पहले 1024 बाइट्स के भीतर घोषित करना अनिवार्य है।"
    }
  },
  {
    "id": 16,
    "slug": "responsive-viewport-meta-tag-mobile",
    "title": "Responsive Viewport Configuration",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 15 (p. 390-392)",
    "exercise": {
      "question": "Which viewport setting prevents layout scale shifts and ensures mobile screens render the site at 100% zoom initially?",
      "options": [
        "maximum-scale=2.0",
        "width=device-width",
        "initial-scale=1.0",
        "user-scalable=no"
      ],
      "correctAnswer": "initial-scale=1.0",
      "hint": "It sets the initial scale/zoom parameter, which should be 1.0 (100%)."
    },
    "english": {
      "kid": "### 📱 Viewport Meta Tag: Making It Look Good on Phones!\nHave you ever opened an old website on your phone, and the text was so tiny you had to pinch-zoom to read it?\n\nThat's because they didn't have the **Viewport Meta Tag**! \n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\n\n* **width=device-width**: Tells the browser: 'Make my website's width match the screen width of whatever device is loading it!'\n* **initial-scale=1.0**: Sets the zoom level to 100% when the page first loads.",
      "pro": "### 📱 Responsive Layouts and Mobile Viewport Scaling\nThe viewport meta tag is essential for creating responsive design patterns across mobile and desktop viewports.\n\n* **Syntax**: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`\n* **Parameters**:\n  * `width=device-width` resets CSS pixel width to match hardware pixels (device-independent pixels).\n  * `initial-scale=1.0` ensures the viewport rendering scale matches a 1:1 ratio. This avoids desktop scaling behaviors on smartphones."
    },
    "hinglish": {
      "kid": "### 📱 Viewport Tag: Mobile Friendly Websites!\nPurani websites phone me kholne par bohot chhoti lagti thi aur bar-bar zoom karna padta tha. Mobile screen par layout automatically adjust karne ke liye hum **Viewport meta tag** use karte hain.\n\n* **width=device-width**: Website ki width mobile screen ke barabar auto-scale ho jati hai.\n* **initial-scale=1.0**: Zoom level ko default 100% par set karta hai.",
      "pro": "### 📱 Viewport Dimensions and Device Independent Pixels\nViewport configurations mobile rendering logic apply karte hain:\n\n* **Desktop Shrink Prevention**: Device width override mobile CSS media queries parameters load karne me enable karti hai.\n* **Scale Constraints**: User viewport controls optimize karke interactive mobile layouts screen boundaries fit rakhte hain."
    },
    "hindi": {
      "kid": "### 📱 व्यूपोर्ट टैग: मोबाइल पर वेबसाइट को सुंदर बनाना!\nक्या आपने कभी अपने फोन पर कोई पुरानी वेबसाइट खोली है जहां टेक्स्ट इतना छोटा था कि आपको पढ़ने के लिए ज़ूम करना पड़ा?\n\nऐसा इसलिए हुआ क्योंकि उन्होंने **Viewport Meta Tag** का उपयोग नहीं किया था!\n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\n\n* **width=device-width**: यह ब्राउज़र से कहता है: 'वेबसाइट की चौड़ाई को मोबाइल स्क्रीन के बराबर रखें।'\n* **initial-scale=1.0**: यह सुनिश्चित करता है कि जब पेज लोड हो, तो ज़ूम लेवल 100% हो।",
      "pro": "### 📱 अनुक्रियाशील (Responsive) लेआउट और मोबाइल व्यूपोर्ट स्केलिंग\nव्यूपोर्ट मेटा टैग मोबाइल उपकरणों पर पेज को स्केल और प्रदर्शित करने का तरीका नियंत्रित करता है:\n\n* **सिंटैक्स**: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`\n* **विशेषताएं**: यह ब्राउज़र को मोबाइल पर डेस्कटॉप-चौड़ाई (उदा. 980px) मानकर रेंडर करने से रोकता है, जिससे मीडिया क्वेरीज़ (Media Queries) सही ढंग से काम करती हैं।"
    }
  },
  {
    "id": 17,
    "slug": "adding-favicons-link-rel-icon",
    "title": "Adding Favicons",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 8 (p. 183-185)",
    "exercise": {
      "question": "Which relationship attribute value (rel) is used to associate a favicon file with an HTML page?",
      "options": [
        "logo",
        "stylesheet",
        "favicon",
        "icon"
      ],
      "correctAnswer": "icon",
      "hint": "It is written as <link rel=\"icon\" href=\"...\">."
    },
    "english": {
      "kid": "### 🎨 Favicon: Your Website's Little Logo Icon!\nLook up at your browser tabs again. See the tiny Google 'G' or the YouTube logo next to the title? Those tiny icons are called **Favicons**!\n\n* **Adding Favicons**: You use the `<link>` tag inside the head, like this:\n  ```html\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\n  ```\n* **Files**: Usually, they are small square images (`16x16` or `32x32` pixels) saved in `.ico`, `.png`, or `.svg` formats.",
      "pro": "### 🎨 Favicon Formats, Dimensions, and Cross-Browser Configuration\nA favicon (favorite icon) is a visual brand identifier displayed in tab bars, history links, and bookmarks.\n\n* **Modern Standard**: Use high-resolution PNGs or SVGs instead of older legacy `.ico` formats:\n  ```html\n  <link rel=\"icon\" type=\"image/png\" href=\"/favicon-32x32.png\">\n  ```\n* **Responsive Icons**: Apple devices require custom icons (`apple-touch-icon`) to display shortcuts on home screens cleanly."
    },
    "hinglish": {
      "kid": "### 🎨 Favicon: Website Ka Logo!\nBrowser tab par title ke pehle jo chhota sa brand icon dikhta hai, use **Favicon** kehte hain. \n\n* **Kaise add karein**: `<link>` tag ko head ke andar likhein:\n  ```html\n  <link rel=\"icon\" href=\"favicon.ico\">\n  ```\n* **Sizes**: Ye circular ya square images hoti hain jo small resolution me store ki jati hain.",
      "pro": "### 🎨 Multipurpose Tab Logo and Apple Touch Icons\nFavicon optimization brand metrics enhance karta hai:\n\n* **Alternative Formats**: Mobile app shortcuts, PWA configs, aur Safari pinned tabs specialized attributes define karte hain.\n* **SVG support**: Vector favicons high-density displays (Retina screens) me sharp rendering dynamic properties provide karte hain."
    },
    "hindi": {
      "kid": "### 🎨 फेविकॉन (Favicon): आपकी वेबसाइट का छोटा लोगो!\nअपने ब्राउज़र टैब पर दोबारा देखें। शीर्षक के बगल में छोटा गूगल 'G' या यूट्यूब का लोगो दिखाई दे रहा है? उन छोटे लोगो को **Favicon** कहते हैं!\n\n* **फेविकॉन जोड़ना**: हम हेड टैग के अंदर `<link>` टैग का उपयोग करते हैं:\n  ```html\n  <link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">\n  ```\n* **फ़ाइल स्वरूप**: ये छोटे वर्गाकार चित्र (सामान्यतः 16x16 या 32x32 पिक्सेल) होते हैं जो `.ico` या `.png` में सहेजे जाते हैं।",
      "pro": "### 🎨 फेविकॉन प्रारूप, आकार और क्रॉस-ब्राउज़र कॉन्फ़िगरेशन\nफेविकॉन (Favicon) ब्रांडिंग और उपयोगकर्ता अनुभव के लिए आवश्यक एक सूक्ष्म ग्राफिक है:\n\n* **आधुनिक मानक**: आधुनिक वेब में `.ico` की जगह पारदर्शी (Transparent) `.png` या स्केलेबल `.svg` का उपयोग किया जाता है।\n* **मोबाइल अनुकूलन**: आईओएस (iOS) उपकरणों के लिए अलग से `<link rel=\"apple-touch-icon\" href=\"...\">` का उपयोग किया जाता है ताकि मोबाइल शॉर्टकट में यह स्पष्ट दिखे।"
    }
  },
  {
    "id": 18,
    "slug": "linking-external-css-stylesheets-link",
    "title": "Linking CSS Stylesheets",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 10 (p. 226-228)",
    "exercise": {
      "question": "Which tag is used to connect an external stylesheet (.css) file to your HTML file?",
      "options": [
        "<style>",
        "<css>",
        "<a>",
        "<link>"
      ],
      "correctAnswer": "<link>",
      "hint": "It is an empty element that creates a relationship link between documents!"
    },
    "english": {
      "kid": "### 💅 Linking CSS: Dressing Up Your Skeleton!\nIf HTML is the skeleton of a building, CSS is the colorful paint, wallpaper, and fancy lights. But how do we connect our CSS paint file to our HTML structure?\n\nWe use the **`<link>`** tag inside the `<head>`!\n\n```html\n<link rel=\"stylesheet\" href=\"styles.css\">\n```\n\n* **rel=\"stylesheet\"**: Tells the browser that the linked file contains layout styles.\n* **href**: Pointers to the path of your CSS file.",
      "pro": "### 💅 External Style Association and Resource Loading\nConnecting an external CSS file using `<link>` is the standard method for separation of concerns (content vs. design).\n\n* **Syntax**: `<link rel=\"stylesheet\" href=\"/css/main.css\" type=\"text/css\">`\n* **Rendering Optimization**: The `<link>` tag initiates a non-blocking parallel download of the CSS rules. This avoids browser repaint delays (Flash of Unstyled Content - FOUC)."
    },
    "hinglish": {
      "kid": "### 💅 CSS Link: Webpage Ko Sundar Banana!\nHTML se structure banta hai aur CSS se styling. Apni CSS design file ko HTML se connect karne ke liye hum `<link>` tag ka use head me karte hain.\n\n```html\n<link rel=\"stylesheet\" href=\"style.css\">\n```\n\n* **rel**: Iska matlab 'relationship' hota hai, jo stylesheet set kia jata hai.",
      "pro": "### 💅 External CSS Import and Separation of Concerns\nStyles sheet connection styles engine optimize karta hai:\n\n* **FOUC Prevention**: Inline script files connection block parse parameters coordinate karte hain stylesheet loading time enhance karne ke liye.\n* **Resource Caching**: External stylesheets assets download parameters compile karke browser cache storage use enable karte hain."
    },
    "hindi": {
      "kid": "### 💅 सीएसएस लिंक करना: वेबपेज को रंगीन बनाना!\nयदि HTML किसी इमारत का ढांचा है, तो CSS उसका रंग-रोगन, वॉलपेपर और सजावट है। हम अपने HTML ढांचे में रंग जोड़ने के लिए दोनों को कैसे जोड़ते हैं?\n\nहम हेड टैग के अंदर **`<link>`** टैग का उपयोग करते हैं!\n\n```html\n<link rel=\"stylesheet\" href=\"styles.css\">\n```\n\n* **rel=\"stylesheet\"**: यह ब्राउज़र को बताता है कि लिंक की गई फ़ाइल में डिज़ाइन नियम हैं।\n* **href**: यह हमारी सीएसएस फ़ाइल का स्थान बताता है।",
      "pro": "### 💅 बाहरी शैली (CSS) एसोसिएशन और रेंडर अनुकूलन\nबाहरी सीएसएस फ़ाइल को जोड़ने के लिए `<link>` टैग का उपयोग करना वेब विकास का सबसे अच्छा अभ्यास है:\n\n* **उद्देश्य**: यह सामग्री (HTML) और डिज़ाइन (CSS) को अलग रखता है (Separation of Concerns)।\n* **FOUC की रोकथाम**: यह 'फ्रीज़ या फ्लैश ऑफ अनस्टाइल्ड कंटेंट' (FOUC) को रोकता है क्योंकि ब्राउज़र सीएसएस डाउनलोड होने के बाद ही पेज प्रदर्शित करता है।"
    }
  },
  {
    "id": 19,
    "slug": "internal-css-styles-style-tag",
    "title": "Internal CSS with the <style> Tag",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 10 (p. 228-230)",
    "exercise": {
      "question": "Which tag is used to write CSS rules directly inside your HTML file?",
      "options": [
        "<link>",
        "<css>",
        "<style>",
        "<script>"
      ],
      "correctAnswer": "<style>",
      "hint": "It is written as <style> h1 { color: red; } </style> inside the head."
    },
    "english": {
      "kid": "### 🎨 The <style> Tag: Inline Styling Center!\nSometimes, you want to add quick style rules without creating a separate `.css` file. That is where the **`<style>`** tag comes in!\n\n* **Direct Styles**: You can write CSS codes directly inside the `<style>` tag, and it will apply to your page instantly.\n* **Nesting**: Always place your `<style>` block inside the `<head>` section of your HTML document.",
      "pro": "### 🎨 Embedded CSS Styling and Document Head Styling\nThe `<style>` element allows you to embed CSS rules directly within the HTML document structure.\n\n* **Usage**: Ideal for single-page applications or critical CSS setups where styling rules need to render immediately without triggering external requests.\n* **Specificity**: Internal styles declared inside `<style>` carry the same specificity rules as external CSS, but override external styles defined earlier in the `<head>`."
    },
    "hinglish": {
      "kid": "### 🎨 <style> Tag: Direct Styling!\nJab aap bina kisi nayi CSS file banaye page ko style karna chahte hain, tab **`<style>`** tag use hota hai.\n\n* **Head Element**: Ise hamesha `<head>` block ke andar likhein aur isme directly color, font aur margins CSS property configure karein.",
      "pro": "### 🎨 Embedded Document Rules and Critical Path CSS\n`<style>` element inline definitions layout processing dynamic banati hai:\n\n* **Performance Gains**: Single file payload networks payload minimize karte hain first visual render accelerate karne ke liye.\n* **Scoped CSS**: HTML5 me global context variables and elements bind methods style controls manage karte hain."
    },
    "hindi": {
      "kid": "### 🎨 <style> टैग: सीधे डिज़ाइन नियम लिखना!\nकभी-कभी, आप एक अलग सीएसएस फ़ाइल बनाए बिना अपने वेबपेज पर त्वरित डिज़ाइन नियम लागू करना चाहते हैं। यहाँ **`<style>`** टैग काम आता है!\n\n* **सीधे स्टाइल**: आप इस टैग के भीतर सीधे सीएसएस नियम (उदा. अक्षरों का रंग बदलना) लिख सकते हैं।\n* **स्थान**: इसे हमेशा दस्तावेज़ के `<head>` भाग के भीतर ही रखें।",
      "pro": "### 🎨 एंबेडेड सीएसएस स्टाइलिंग और क्रिटिकल सीएसएस\n`<style>` तत्व दस्तावेज़ के भीतर ही सीधे स्टाइलशीट नियमों को एम्बेड करने की अनुमति देता है:\n\n* **उपयोग**: यह एकल-पेज वेबसाइटों (Single-page apps) या 'Critical CSS' लोड करने के लिए उपयुक्त है, ताकि पहला रेंडर तुरंत हो।\n* **विशिष्टता (Specificity)**: यह बाहरी शैलियों के समान ही काम करता है, लेकिन क्रमिक लोडिंग के कारण यह पहले से लोड बाहरी सीएसएस नियमों को ओवरराइड कर सकता है।"
    }
  },
  {
    "id": 20,
    "slug": "script-tag-insert-javascript-code",
    "title": "Script Insertion with <script>",
    "unit": "Unit 2: The Document Structure & Metadata",
    "bookRef": "Duckett Chapter 18 (p. 444-446)",
    "exercise": {
      "question": "Which tag is used to embed client-side JavaScript code in HTML?",
      "options": [
        "<js>",
        "<javascript>",
        "<script>",
        "<code>"
      ],
      "correctAnswer": "<script>",
      "hint": "It is written as <script src=\"app.js\"></script>."
    },
    "english": {
      "kid": "### ⚡ The <script> Tag: Making Your Page Alive!\nHTML builds the body, CSS makes it pretty, but how do we make it do things when clicked? We use **JavaScript**! \n\nAnd to link or write JavaScript, we use the **`<script>`** tag!\n\n* **Inline Code**: You can write code directly inside `<script> console.log('Hello'); </script>`.\n* **External Link**: Link a file using `<script src=\"app.js\"></script>`.",
      "pro": "### ⚡ Script Orchestration, Execution Models, and Performance\nThe `<script>` element is used to embed or reference client-side executable JavaScript.\n\n* **Asynchronous Loading**: Use attributes like `async` (runs script once downloaded, blocking parser) or `defer` (executes script only after DOM parsing finishes) to prevent rendering freezes:\n  ```html\n  <script src=\"app.js\" defer></script>\n  ```\n* **Parsing Impact**: Scripts block HTML parsing by default. Placing scripts at the bottom of the `<body>` or using `defer` ensures fast page loading."
    },
    "hinglish": {
      "kid": "### ⚡ <script> Tag: JavaScript Connect Karna!\nJavaScript se webpage me dynamic operations click actions set hote hain. Webpage me scripting capabilities add karne ke liye hum **`<script>`** tag use karte hain.\n\n* **Attributes**: External script connect karne ke liye `<script src=\"app.js\"></script>` ka use karte hain.",
      "pro": "### ⚡ Parser Blocking Prevention and Defer/Async Attributes\n`<script>` tag runtime thread management configuration details:\n\n* **Defer attribute**: DOM building compile finish hone tak execution queue hold rakhta hai.\n* **Async attribute**: External file fetching task background threads target karti hai aur execution concurrent rehti hai."
    },
    "hindi": {
      "kid": "### ⚡ <script> टैग: पेज में जान डालना!\nHTML से पेज का ढांचा बनता है, CSS से वह सुंदर दिखता है, लेकिन बटन दबाने पर क्या काम होगा, यह **JavaScript** तय करती है!\n\nवेबपेज में जावास्क्रिप्ट को जोड़ने के लिए हम **`<script>`** टैग का उपयोग करते हैं!\n\n* **लाइव कोडिंग**: आप इसके अंदर सीधे कोड लिख सकते हैं: `<script> alert('Hello!'); </script>`।\n* **बाहरी लिंक**: आप बाहरी फ़ाइल को भी जोड़ सकते हैं: `<script src=\"app.js\"></script>`।",
      "pro": "### ⚡ स्क्रिप्ट आर्केस्ट्रेशन, निष्पादन (Execution) मॉडल और निष्पादन गति\n`<script>` तत्व का उपयोग क्लाइंट-साइड निष्पादन योग्य जावास्क्रिप्ट कोड को एम्बेड करने या जोड़ने के लिए किया जाता है:\n\n* **असिंक्रोनस निष्पादन**: आधुनिक वेब में `defer` (पार्सिंग के बाद चलाना) या `async` (डाउनलोड होते ही चलाना) विशेषता का उपयोग किया जाता है ताकि स्क्रिप्ट ब्राउज़र पार्सिंग को बाधित न करे।\n* **स्थान नियम**: पुराने डिफ़ॉल्ट में स्क्रिप्ट को `<body>` के अंत में रखा जाता है, लेकिन `defer` के साथ इसे अब सीधे `<head>` में भी सुरक्षित रखा जा सकता है।"
    }
  },
  {
    "id": 21,
    "slug": "html-body-tag-visible-content",
    "title": "The <body> Container",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 1 (p. 18-20)",
    "exercise": {
      "question": "Which HTML tag acts as the visible stage containing all text, buttons, and images?",
      "options": [
        "<body>",
        "<html>",
        "<main>",
        "<head>"
      ],
      "correctAnswer": "<body>",
      "hint": "It holds everything that is shown directly on the browser screen!"
    },
    "english": {
      "kid": "### 🎭 The <body>: Welcome to the Stage!\nIf the `<head>` is like backstage (where the director hides notes, lighting setups, and scripts), then the **`<body>`** is the main stage itself! \n\nEvery single thing that your website visitors can see—like cool pictures, text, buttons, and games—must live inside the `<body>` tag.\n\n```html\n<body>\n  <h1>Hello World!</h1>\n</body>\n```",
      "pro": "### 🎭 Document Body Root and Visual Presentation Canvas\nThe `<body>` element represents the main content container of an HTML document.\n\n* **DOM Hierarchy**: There can only be one `<body>` element per document, nested directly inside `<html>`.\n* **Rendering Context**: Browsers apply default user-agent margins (usually `8px`) to `<body>`, which developers typically override using CSS resets (`margin: 0`)."
    },
    "hinglish": {
      "kid": "### 🎭 <body> Tag: Webpage Ki Main Stage!\nJaise school play me stage par sabhi actors perform karte hain, waise hi HTML me **`<body>`** tag aapka main stage hai! Jo bhi content users ko screen par dikhana hai (jaise text, images, buttons), wo sab body tag ke andar likha jata hai.",
      "pro": "### 🎭 Rendering Canvas and User-Agent Style Reset\nBody tag element hierarchy parameters visual output flow control karta hai:\n\n* **Structure**: Document stream processing body element trigger parsing engine visual tree paint logic setup karta hai.\n* **Reset Styles**: CSS config base layout standard control reset enables margin controls for viewport alignment."
    },
    "hindi": {
      "kid": "### 🎭 <body> टैग: आपका मुख्य मंच!\nयदि `<head>` मंच के पीछे का हिस्सा है (जहाँ लेखक गुप्त सेटिंग्स और स्क्रिप्ट छिपाते हैं), तो **`<body>`** आपका मुख्य मंच है! वेबपेज पर जो कुछ भी दिखाई देता है—जैसे चित्र, बटन, लेख—सब कुछ इसी टैग के अंदर रखा जाता है।\n\n```html\n<body>\n  <h1>नमस्कार दुनिया!</h1>\n</body>\n```",
      "pro": "### 🎭 दस्तावेज़ मुख्य कैनवास और दृश्य प्रतिपादन (Rendering)\n`<body>` तत्व दस्तावेज़ के दृश्य सामग्री भाग का प्रतिनिधित्व करता है:\n\n* **नियम**: पूरे दस्तावेज़ में केवल एक `<body>` तत्व हो सकता है, जो `<html>` के भीतर होता है।\n* **CSS रीसेट**: ब्राउज़र डिफ़ॉल्ट रूप से बॉडी में मार्जिन (उदा. 8px) जोड़ते हैं, जिसे `margin: 0` द्वारा हटाया जाता है।"
    }
  },
  {
    "id": 22,
    "slug": "html-heading-tags-h1-to-h6",
    "title": "Heading Elements (<h1> to <h6>)",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 2 (p. 30-32)",
    "exercise": {
      "question": "What is the recommended SEO limit for <h1> tags on a single page?",
      "options": [
        "None",
        "Unlimited",
        "Up to 6",
        "Exactly 1"
      ],
      "correctAnswer": "Exactly 1",
      "hint": "Having only one main title helps Google understand the absolute focus of your page!"
    },
    "english": {
      "kid": "### 👑 Headings: The Giant to the Baby!\nHTML provides six levels of titles/headings, from **`<h1>`** (the biggest, strongest grandparent) to **`<h6>`** (the tiniest baby text). \n\n* **`<h1>`**: Use this only **once** per page for the main title.\n* **`<h2>` to `<h6>`**: Use these for sub-sections and smaller topic headers.\n\n```html\n<h1>Main Title</h1>\n<h2>Sub-Heading</h2>\n```",
      "pro": "### 👑 Document Outline and Search Engine Semantics\nHeading tags (`<h1>` through `<h6>`) establish the document outline hierarchy, which is critical for search engine indexing and screen readers.\n\n* **SEO Hierarchy**: Search engines like Google prioritize page topics based on heading text. Multiple `<h1>` tags dilute SEO scoring; use exactly one primary `<h1>` and progress sequentially (`<h2>` -> `<h3>`) without skipping levels."
    },
    "hinglish": {
      "kid": "### 👑 Headings: Bada Se Sabse Chota!\nHTML me text headings ko size dene ke liye 6 levels hote hain: `<h1>` sabse bada aur important heading hota hai, aur `<h6>` sabse chota heading tag hota hai. SEO ke liye ek page par sirf ek hi `<h1>` rakhna best practice hai.",
      "pro": "### 👑 Document Semantic Tree and Heading Level Indexing\nHeadings tags relative weight system layout processing optimize karte hain:\n\n* **Screen Readers**: Users layout scanning visual headings node structure map structure sequential use (`<h2>` after `<h1>`) define navigation blocks.\n* **SEO Impact**: Search bots page focus keywords index header density analyze karte hain."
    },
    "hindi": {
      "kid": "### 👑 शीर्षक टैग: सबसे बड़े से सबसे छोटा!\nHTML में हेडिंग के लिए 6 स्तर होते हैं: **`<h1>`** (सबसे बड़ा मुख्य शीर्षक) से लेकर **`<h6>`** (सबसे छोटा शीर्षक) तक।\n\n* **नियम**: मुख्य रूप से केवल एक ही `<h1>` का उपयोग करें।\n* **क्रम**: उप-भागों के लिए `<h2>` से `<h6>` का उपयोग करें।",
      "pro": "### 👑 दस्तावेज़ रूपरेखा (Outline) और शीर्ष पदानुक्रम (Heading Hierarchy)\nशीर्षक तत्व दस्तावेज़ के पदानुक्रमित संरचना को परिभाषित करते हैं:\n\n* **एसईओ (SEO)**: सर्च इंजन पृष्ठ के विषय को समझने के लिए शीर्षकों पर भरोसा करते हैं। हमेशा ध्यान रखें कि एक पेज पर केवल एक ही `<h1>` टैग हो।\n* **क्रमबद्धता**: शीर्षकों के स्तरों को छोड़ें नहीं (उदा. सीधे `<h1>` के बाद `<h3>` पर न जाएं, हमेशा `<h2>` का उपयोग करें)।"
    }
  },
  {
    "id": 23,
    "slug": "html-paragraph-tag-p-margins",
    "title": "The Paragraph Element (<p>)",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 2 (p. 33-34)",
    "exercise": {
      "question": "By default, how does the browser display consecutive <p> tags?",
      "options": [
        "Side-by-side on the same line",
        "Inside a single block container",
        "Italicized",
        "Stacked vertically with vertical margins"
      ],
      "correctAnswer": "Stacked vertically with vertical margins",
      "hint": "The browser automatically adds some empty vertical spacing to separate block paragraphs."
    },
    "english": {
      "kid": "### 📦 The Paragraph: Writing Blocks of Text!\nWhen you want to write standard text stories, you use the paragraph tag: **`<p>`**! \n\n* **Automatic Spacing**: The browser automatically leaves a bit of empty space (margin) above and below every `<p>` tag, keeping your sentences clean and easy to read.",
      "pro": "### 📦 Text Layout and Block-Level Flow Mechanics\nThe `<p>` element defines a paragraph block.\n\n* **Layout Behavior**: It is a block-level element, meaning it always starts on a new line and occupies the full width of its parent container.\n* **Typography Defaults**: Browsers apply default vertical margins (`1em`) via User-Agent stylesheets to separate text blocks visually."
    },
    "hinglish": {
      "kid": "### 📦 <p> Tag: Paragraph Likhiye!\nApni websites me normal stories ya descriptive text likhne ke liye hum **`<p>`** tag use karte hain. Har `<p>` tag ke baad browser automatic thoda gap (margin) chodd deta hai taaki sentences readable lagien.",
      "pro": "### 📦 Typography Blocks and Line Height Formatting\nParagraph elements text block layout standard system construct karte hain:\n\n* **Flow Processing**: Block-level formatting inline text rendering layout line spacing boundaries apply karta hai.\n* **Margining**: Reset scripts standard properties configure karke paragraphs block gaps margin reset direct set karti hain."
    },
    "hindi": {
      "kid": "### 📦 पैराग्राफ टैग: साधारण पाठ लिखना!\nजब आप अपने वेबपेज पर साधारण वाक्य या कहानियाँ लिखना चाहते हैं, तो आप पैराग्राफ टैग: **`<p>`** का उपयोग करते हैं!\n\n* **अंतराल**: ब्राउज़र वाक्यों को साफ और पढ़ने में आसान बनाने के लिए प्रत्येक पैराग्राफ के ऊपर और नीचे थोड़ा खाली स्थान (मार्जिन) छोड़ देता है।",
      "pro": "### 📦 पाठ प्रवाह (Flow) और ब्लॉक-स्तरीय विशेषताएँ\n`<p>` तत्व एक पैराग्राफ को परिभाषित करता है:\n\n* **ब्लॉक-स्तर (Block-level)**: यह एक ब्लॉक-स्तरीय तत्व है, जिसका अर्थ है कि यह हमेशा एक नई लाइन से शुरू होता है और मूल कंटेनर की पूरी चौड़ाई लेता है।\n* **मार्जिन**: ब्राउज़र डिफ़ॉल्ट रूप से इसके ऊपर और नीचे दूरी (margin-top/bottom) जोड़ता है।"
    }
  },
  {
    "id": 24,
    "slug": "line-break-br-tag-text-split",
    "title": "Line Breaks (<br />)",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 2 (p. 36-37)",
    "exercise": {
      "question": "Is the <br /> tag a self-closing empty element?",
      "options": [
        "Only on mobile devices",
        "Yes, it does not need a closing tag",
        "No, it requires </br>",
        "No, it must contain a text body"
      ],
      "correctAnswer": "Yes, it does not need a closing tag",
      "hint": "It is an empty tag used to snap text to the next line immediately."
    },
    "english": {
      "kid": "### ↩️ Line Breaks: Typing Enter Key!\nImagine you are typing on an old typewriter. You reach the end of a line and press the lever to snap to the next line immediately. That is what **`<br />`** does! \n\n* **Self-Closing**: It is an empty element! It has no closing tag (no `</br>`). Just write `<br />` to break a line.",
      "pro": "### ↩️ Inline Line Breaks and Text Box Wrapping\nThe `<br>` element forces a line break within text blocks without introducing a paragraph margin.\n\n* **Semantics**: Use `<br>` only when line breaks are part of the content (e.g., addresses, poetry). Do not use `<br>` to create layout spacing; use CSS margins or padding instead."
    },
    "hinglish": {
      "kid": "### ↩️ <br /> Tag: Line Change Karna!\nJaise typewriter par 'Enter' daba kar line change hoti hai, waise hi HTML me line break ke liye **`<br />`** likhte hain. Ye ek empty (self-closing) tag hai, yaani iska koi closing tag nahi hota.",
      "pro": "### ↩️ Line Breaks and Inline Flow Controls\n`<br>` element inline formatting models break layout wrap attributes configure karta hai:\n\n* **Layout Spacing**: Structure spacing values inline margins control block patterns update dynamic layout set karte hain.\n* **Accessibility**: Screen readers addresses lines parse content transition understand block define karte hain."
    },
    "hindi": {
      "kid": "### ↩️ <br /> टैग: लाइन बदलना (Enter दबाना)!\nकल्पना करें कि आप एक पुराने टाइपराइटर पर टाइप कर रहे हैं। लाइन बदलने के लिए आप एक बटन दबाते हैं, जिससे अगली लाइन शुरू हो जाती है। **`<br />`** टैग बिल्कुल यही काम करता है!\n\n* **स्व-समापन (Self-closing)**: इसे बंद करने के लिए `</br>` की आवश्यकता नहीं होती। बस एक लाइन तोड़ने के लिए `<br />` लिखें।",
      "pro": "### ↩️ इनलाइन लाइन ब्रेक और सिमेंटिक्स\n`<br>` तत्व बिना किसी नई पैराग्राफ मार्जिन के इनलाइन टेक्स्ट प्रवाह में लाइन ब्रेक वियोजन बनाता है:\n\n* **उचित उपयोग**: इसका उपयोग केवल तभी करें जब लाइन बदलना सामग्री का हिस्सा हो (जैसे कि पता या कविता)। लेआउट या दूरी बढ़ाने के लिए खाली `<br>` का उपयोग न करें; उसके लिए CSS मार्जिन का उपयोग करें।"
    }
  },
  {
    "id": 25,
    "slug": "horizontal-rule-hr-tag-separator",
    "title": "Horizontal Rules (<hr />)",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 2 (p. 38-39)",
    "exercise": {
      "question": "What is the primary semantic purpose of the <hr /> tag in HTML5?",
      "options": [
        "To load background styles",
        "To mark a thematic shift or transition between topics",
        "To make text bold",
        "To draw borders around layout cards"
      ],
      "correctAnswer": "To mark a thematic shift or transition between topics",
      "hint": "It represents a thematic break, drawing a straight horizontal line by default."
    },
    "english": {
      "kid": "### 📏 The Horizontal Rule: Drawing Division Lines!\nWant to draw a straight line to separate two different stories on your page? Use the **`<hr />`** tag!\n\n* **Simple Divider**: It is a self-closing tag that draws a thin horizontal line across your webpage. Ideal for splitting chapters or recipes!",
      "pro": "### 📏 Thematic Breaks and Visual Separators\nThe `<hr>` element represents a thematic break between paragraph-level topics in an HTML document.\n\n* **Styling**: By default, it renders as a thin gray border. Developers can style it using CSS (`border: 0; height: 1px; background: #333;`) to create visually pleasing dividers."
    },
    "hinglish": {
      "kid": "### 📏 <hr /> Tag: Division Line Banana!\nJab aapko page par do alag topics ke beech me ek divider line banani ho, toh **`<hr />`** use hota hai. Ye page par ek horizontal line draw kar deta hai, jisse content sections divide ho jaate hain.",
      "pro": "### 📏 Thematic Section Separations and Visual Presentation\n`<hr>` element semantics and styles customization methods layout block control optimize karte hain:\n\n* **Semantic Division**: Screen readers rules page changes segment sections break parameters detect visual controls map standard interface.\n* **Presentation Override**: Custom styles override borders properties height layout format set properties default."
    },
    "hindi": {
      "kid": "### 📏 <hr /> टैग: विभाजक रेखा खींचना!\nयदि आप अपने वेबपेज पर दो अलग-अलग विषयों या अध्यायों के बीच एक सीधी विभाजक रेखा खींचना चाहते हैं, तो **`<hr />`** टैग का उपयोग करें!\n\n* **सरल विभाजक**: यह एक स्व-समापन टैग है जो स्क्रीन पर एक पतली क्षैतिज रेखा खींचता है।",
      "pro": "### 📏 विषयगत बदलाव (Thematic Breaks) और दृश्य विभाजक\n`<hr>` तत्व पैराग्राफ-स्तर के विषयों के बीच एक विषयगत बदलाव का प्रतिनिधित्व करता है:\n\n* **CSS शैलीकरण**: डिफ़ॉल्ट रूप से यह एक पतली धूसर (gray) रेखा के रूप में प्रस्तुत होता है। डेवलपर्स CSS का उपयोग करके इसे और अधिक आकर्षक बना सकते हैं (उदा. `border: 0; height: 2px; bg-gradient`)।"
    }
  },
  {
    "id": 26,
    "slug": "div-tag-generic-block-level-container",
    "title": "Div Containers (<div>)",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 8 (p. 184-186)",
    "exercise": {
      "question": "By default, what type of element layout is a <div>?",
      "options": [
        "Block-level container",
        "Self-closing divider line",
        "Inline text highlighted block",
        "Form input element"
      ],
      "correctAnswer": "Block-level container",
      "hint": "It acts as a generic container box that takes up the full width and starts on a new line."
    },
    "english": {
      "kid": "### 📦 The <div> Tag: Packing Boxes!\nThink of **`<div>`** as a cardboard shipping box. By itself, it has no color, shape, or text. But it is super useful because you can put multiple headings, paragraphs, and images inside it to pack them together!\n\n* **Block Box**: It starts on a new line and spans the full width of the screen.",
      "pro": "### 📦 Generic Division Container and Layout Blocks\nThe `<div>` element is a generic block-level container used for grouping elements for styling purposes or layout structure.\n\n* **Layout Foundation**: In modern layout design (Flexbox/Grid), `<div>` tags act as wrappers and parent containers to organize children elements programmatically."
    },
    "hinglish": {
      "kid": "### 📦 <div> Tag: Cardboard Box!\n`<div>` ek empty cardboard box ki tarah hai. Jab aapko bahut saare elements (headings, text, buttons) ko ek sath group karna ho, toh hum unhe ek `<div>` ke andar pack kar dete hain, jisse styling aur positioning aasan ho jaati hai.",
      "pro": "### 📦 Block-Level Containers and Styling Hooks\n`<div>` tags layout wrapper system flexbox dynamic alignment create karta hai:\n\n* **Grouping Elements**: CSS properties classes apply grouping parent structure design layout organize settings controls target block.\n* **No Native Semantics**: Semantic tags availability block-level layout setups generic container structure uses."
    },
    "hindi": {
      "kid": "### 📦 <div> टैग: पैकेजिंग बॉक्स!\n**`<div>`** को गत्ते के डिब्बे की तरह समझें। इसका अपना कोई रंग या रूप नहीं होता, लेकिन यह बहुत उपयोगी है क्योंकि आप स्टाइल या संरेखण के लिए कई पैराग्राफ, हेडिंग और बटन को एक साथ इस बॉक्स के भीतर बंद कर सकते हैं!\n\n* **ब्लॉक बॉक्स**: यह हमेशा एक नई लाइन से शुरू होता है और स्क्रीन की पूरी चौड़ाई लेता है।",
      "pro": "### 📦 सामान्य विभाजन (Division) कंटेनर और लेआउट\n`<div>` तत्व एक सामान्य ब्लॉक-स्तरीय कंटेनर है जिसका उपयोग तत्वों को समूहबद्ध करने के लिए किया जाता है:\n\n* **लेआउट की नींव**: आधुनिक वेब डिज़ाइन (जैसे CSS Flexbox या Grid) में, `<div>` टैग बाल तत्वों (child elements) को व्यवस्थित करने के लिए माता-पिता (parent) रैपर के रूप में कार्य करते हैं।\n* **कोई अंतर्निहित अर्थ नहीं**: यह एक खाली कंटेनर है जब तक कि आप इसे CSS या JavaScript नहीं देते।"
    }
  },
  {
    "id": 27,
    "slug": "span-tag-generic-inline-container",
    "title": "Span Containers (<span>)",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 8 (p. 187-189)",
    "exercise": {
      "question": "Unlike <div>, what is the default rendering type of a <span> container?",
      "options": [
        "Inline-level",
        "Self-closing empty element",
        "Italic text block",
        "Block-level"
      ],
      "correctAnswer": "Inline-level",
      "hint": "It wraps words inline on the same line without breaking to a new line!"
    },
    "english": {
      "kid": "### 🖍️ The <span> Tag: Color Highlight Marker!\nWhen you read a book and want to highlight just one word, you use a neon pen. The **`<span>`** tag is your neon highlighter in HTML! \n\n* **Inline Wrap**: Unlike `<div>`, a `<span>` does not start on a new line. It wraps specific words on the same line so you can style them individually.",
      "pro": "### 🖍️ Inline Formatting and Targeted CSS Hooks\nThe `<span>` element is a generic inline container used to wrap small segments of text within a block-level element.\n\n* **Visual Behavior**: It does not force line breaks or vertical spacing. Developers wrap phrases in `<span>` to apply target CSS classes (e.g., custom colors, font-weights, or interactions) locally."
    },
    "hinglish": {
      "kid": "### 🖍️ <span> Tag: Text Highlighter!\nJaise padhte waise ek word ko highlight karne ke liye marker use karte hain, waise hi HTML me specific words ko style karne ke liye **`<span>`** tag use hota hai. Ye line break nahi karta, inline hi text ko wrap karta hai.",
      "pro": "### 🖍️ Inline Container Model and Text Formatting\n`<span>` element local target selectors and visual styles control optimize karta hai:\n\n* **Inline Context**: Word wrapping structure dynamic blocks text flow modify inline spacing change attributes system layout wrap.\n* **Neutral Semantics**: Styling parameters dynamic values bind methods trigger local scripts hooks target."
    },
    "hindi": {
      "kid": "### 🖍️ <span> टैग: टेक्स्ट हाईलाइटर!\nजब आप किताब पढ़ते समय केवल एक विशिष्ट शब्द को हाइलाइट करना चाहते हैं, तो आप मार्कर पेन का उपयोग करते हैं। HTML में **`<span>`** टैग बिल्कुल यही मार्कर है!\n\n* **इनलाइन रैप (Inline wrapper)**: `<div>` के विपरीत, यह एक नई लाइन से शुरू नहीं होता है। यह शब्दों को उसी लाइन में समेटे रखता है ताकि आप केवल उन्हें अलग रंग दे सकें।",
      "pro": "### 🖍️ इनलाइन कंटेनर और लक्षित (Targeted) सीएसएस\n`<span>` तत्व एक सामान्य इनलाइन कंटेनर है जिसका उपयोग ब्लॉक-स्तरीय तत्व के भीतर पाठ के छोटे हिस्सों को लपेटने के लिए किया जाता है:\n\n* **दृश्य विशेषता**: यह लाइन ब्रेक या वर्टिकल स्पेसिंग नहीं बनाता है।\n* **लक्ष्य**: डेवलपर्स स्थानीय रूप से विशिष्ट शब्दों पर सीएसएस वर्ग (उदा. रंग, मोटाई) लागू करने के लिए इसका उपयोग करते हैं।"
    }
  },
  {
    "id": 28,
    "slug": "blockquote-tag-long-quotations-cite",
    "title": "Blockquotes (<blockquote>)",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 2 (p. 40-42)",
    "exercise": {
      "question": "Which attribute is used inside <blockquote> to specify the official URL of the quoted source?",
      "options": [
        "cite",
        "src",
        "source",
        "href"
      ],
      "correctAnswer": "cite",
      "hint": "The cite attribute contains the URL source of the quote, although it is invisible by default."
    },
    "english": {
      "kid": "### 💬 Blockquotes: Story Bubble!\nWant to showcase a famous quote from a book or a movie? The **`<blockquote>`** tag is like a big cartoon speech bubble! \n\n* **Indented Text**: The browser automatically pushes (indents) blockquote text inward from both sides to show readers that it is a direct quote from someone else.",
      "pro": "### 💬 Section Quotations and Content Attribution\nThe `<blockquote>` element represents a section of content quoted from another source.\n\n* **Attribution Attributes**: Use the `cite` attribute to store the source URL semantically: `<blockquote cite=\"https://source.com\">...</blockquote>`.\n* **Layout Default**: Browsers display `<blockquote>` as a block-level element with default left and right margins (`40px`)."
    },
    "hinglish": {
      "kid": "### 💬 <blockquote> Tag: Badi Quotes Dikhana!\nKisi famous personality ya book ki lambi quote ko webpage par alag se dikhane ke liye **`<blockquote>`** tag use hota hai. Browser is text ko thoda indent (aage khiska) deta hai taaki ye normal paragraphs se alag lage.",
      "pro": "### 💬 Block Quotation Semantics and Resource Attribution\n`<blockquote>` element document outline and citations management optimize karta hai:\n\n* **Attribution URL**: `cite` parameter metadata parameters configuration screen readers reference index link setup.\n* **Margining Controls**: Margin reset classes custom layout alignments override properties default styles."
    },
    "hindi": {
      "kid": "### 💬 <blockquote> टैग: बड़े उद्धरण (Quotes) प्रदर्शित करना!\nयदि आप किसी पुस्तक या प्रसिद्ध व्यक्ति का एक लंबा उद्धरण अपने वेबपेज पर दिखाना चाहते हैं, तो **`<blockquote>`** टैग का उपयोग करें। यह एक बड़े कार्टून स्पीच बबल की तरह काम करता है!\n\n* **आगे खिसकना (Indentation)**: ब्राउज़र उद्धरण के पाठ को दोनों तरफ से थोड़ा आगे खिसका देता है ताकि यह सामान्य पैराग्राफ से अलग दिखे।",
      "pro": "### 💬 ब्लॉक उद्धरण (Blockquotes) और स्रोत रोपण\n`<blockquote>` तत्व किसी अन्य स्रोत से उद्धृत सामग्री के एक बड़े हिस्से का प्रतिनिधित्व करता है:\n\n* **मेटाडेटा**: उद्धरण के स्रोत का लिंक प्रदान करने के लिए `cite` विशेषता (attribute) का उपयोग करें।\n* **डिफ़ॉल्ट शैली**: ब्राउज़र ब्लॉक-स्तरीय लेआउट में दोनों तरफ डिफ़ॉल्ट रूप से अंतर (40px) लागू करते हैं।"
    }
  },
  {
    "id": 29,
    "slug": "inline-quote-q-tag-quotation-marks",
    "title": "Inline Quotes (<q>)",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 2 (p. 43-44)",
    "exercise": {
      "question": "What does the browser automatically generate around text wrapped in a <q> tag?",
      "options": [
        "A thin border outline",
        "Quotation marks",
        "Bullet markers",
        "Italicized font styles"
      ],
      "correctAnswer": "Quotation marks",
      "hint": "It automatically generates pretty quotation marks appropriate for the browser language!"
    },
    "english": {
      "kid": "### ✌️ Inline Quotes: Quotation Fingers!\nInstead of typing quotation marks (`\"` and `\"`) manually inside a sentence, you can wrap your quote in the **`<q>`** tag! \n\n* **Auto-Quotes**: The browser will automatically draw correct quotation marks around your text. It even updates quotation styles based on different countries!",
      "pro": "### ✌️ Inline Quotations and Localized Typography Punctuation\nThe `<q>` element represents short inline quotations that do not require block-level structural isolation.\n\n* **Punctuation Rendering**: Browsers insert quotation marks around `<q>` content automatically. Using `<q>` is semantically superior to manual typing, as it enables localized punctuation adjustments based on the document's language tag."
    },
    "hinglish": {
      "kid": "### ✌️ <q> Tag: Small Quotes!\nSentence ke andar choti quotes likhne ke liye hum **`<q>`** tag use karte hain. Aapko double quotes (`\"`) manually type karne ki zaroorat nahi hai, browser apne aap quote marks add kar deta hai.",
      "pro": "### ✌️ Inline Quotes and Punctuation Localization\n`<q>` element dynamic quotation marks rendering layout optimization manage karta hai:\n\n* **Auto Punctuation**: HTML document lang property check browser quotation marks style customize block standard sets.\n* **Strict Semantics**: Accessibility readers reading citation indexes context tracking parse enable karta hai."
    },
    "hindi": {
      "kid": "### ✌️ <q> टैग: इनलाइन उद्धरण (Inline Quotes)!\nवाक्य के बीच में छोटे उद्धरण लिखने के लिए, आप **`<q>`** टैग का उपयोग कर सकते हैं।\n\n* **स्वचालित उद्धरण चिह्न**: ब्राउज़र आपके पाठ के चारों ओर स्वचालित रूप से सुंदर उद्धरण चिह्न (quotation marks) लगा देगा, इसलिए आपको इसे मैन्युअल रूप से टाइप करने की आवश्यकता नहीं है।",
      "pro": "### ✌️ इनलाइन उद्धरण और स्थानीयकरण (Localization)\n`<q>` तत्व लघु इनलाइन उद्धरणों का प्रतिनिधित्व करता है:\n\n* **उद्धरण चिह्न प्रस्तुति**: ब्राउज़र उपयोगकर्ता की भाषा सेटिंग के आधार पर स्वचालित रूप से सही प्रकार के उद्धरण चिह्न सम्मिलित करता है।\n* **सिमेंटिक्स**: यह स्क्रीन रीडर्स को यह पहचानने में मदद करता है कि पृष्ठ पर उद्धृत हिस्सा कहाँ से शुरू और समाप्त होता है।"
    }
  },
  {
    "id": 30,
    "slug": "address-tag-author-contact-information",
    "title": "Address Details (<address>)",
    "unit": "Unit 3: Structural Text & Layout Elements",
    "bookRef": "Duckett Chapter 2 (p. 45-46)",
    "exercise": {
      "question": "Which tag is semantically designated to display the author's contact information?",
      "options": [
        "<address>",
        "<contact>",
        "<mail>",
        "<info>"
      ],
      "correctAnswer": "<address>",
      "hint": "It contains phone numbers, emails, or office addresses, rendering in italics by default."
    },
    "english": {
      "kid": "### ✉️ The <address> Tag: Contact Me!\nIf you want to tell your readers how to write to you, email you, or call you, you use the **`<address>`** tag!\n\nIt makes the contact details stand out and look super professional (usually in italics!).\n\n```html\n<address>\n  Email: support@nextsem.online\n</address>\n```",
      "pro": "### ✉️ The <address> Element: Semantic Contact Mapping\nThe `<address>` element represents contact information for its nearest `<article>` or `<body>` ancestor.\n\n* **Semantics**: Do not use `<address>` for arbitrary postal addresses unless they represent the contact points for the document.\n* **Presentation**: By default, browsers render `<address>` in italics."
    },
    "hinglish": {
      "kid": "### ✉️ <address> Tag: Contact Details Add Karna!\nWebpage me author ya owner ka contact information (jaise email, phone number, physical address) show karne ke liye hum **`<address>`** tag use karte hain.",
      "pro": "### ✉️ Semantic Contact Specifications and Address Element\n`<address>` element doc specifications:\n\n* **Usage**: Document section or article footer me contact channels map karne ke liye iska use standard compliance structure setup karta hai."
    },
    "hindi": {
      "kid": "### ✉️ <address> टैग: संपर्क जानकारी!\nयदि आप अपने पाठकों को बताना चाहते हैं कि वे आपसे कैसे संपर्क करें, ईमेल करें या कॉल करें, तो आप **`<address>`** टैग का उपयोग करते हैं!\n\nयह संपर्क जानकारी को एक सुंदर इटैलिक शैली में दिखाता है।",
      "pro": "### ✉️ <address> तत्व: संपर्क जानकारी सिमेंटिक्स\n`<address>` तत्व दस्तावेज़ के लेखक या स्वामी की संपर्क जानकारी का प्रतिनिधित्व करता है:\n\n* **नियम**: इसका उपयोग केवल वास्तविक संपर्क जानकारी के लिए करें, सामान्य डाक पते के लिए नहीं।"
    }
  },
  {
    "id": 31,
    "slug": "bold-b-vs-semantic-strong-tag",
    "title": "Presentational Bold (<b>) vs. Semantic Strong (<strong>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 34-35)",
    "exercise": {
      "question": "Which tag is semantically designated to indicate that text has strong importance?",
      "options": [
        "<strong>",
        "<b>",
        "<bold>",
        "<heavy>"
      ],
      "correctAnswer": "<strong>",
      "hint": "While <b> just makes text bold visually, this tag tells screen readers and Google that the text is critically important!"
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Presentational Bold (<b>) vs. Semantic Strong (<strong>)!\nToday, we are looking at the **`<strong>`** tag, which represents **Strong importance** on our webpage!\n\n* **Analogy**: Imagine a **shouting warning megaphone**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<strong>This is super important!</strong>\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Presentational Bold (<b>) vs. Semantic Strong (<strong>)\nThe HTML `<strong>` element is used to represent **Strong importance** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<strong>Important Warning Text</strong>\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 34-35) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Presentational Bold () vs. Semantic Strong () seekhein!\nWeb development me **`<strong>`** tag ka use **Strong importance** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **shouting warning megaphone** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Presentational Bold () vs. Semantic Strong ()\n`<strong>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Presentational Bold () vs. Semantic Strong ()!\nआज हम **`<strong>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Strong importance** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **shouting warning megaphone** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Presentational Bold () vs. Semantic Strong ()\n`<strong>` तत्व दस्तावेज़ के पदानुक्रम में **Strong importance** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 32,
    "slug": "italic-i-vs-semantic-emphasis-em-tag",
    "title": "Presentational Italic (<i>) vs. Semantic Emphasis (<em>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 35-36)",
    "exercise": {
      "question": "Which HTML element is semantically used to apply emphasis to a word inside a sentence?",
      "options": [
        "<em>",
        "<i>",
        "<emphasis>",
        "<slant>"
      ],
      "correctAnswer": "<em>",
      "hint": "Emphasis (em) changes the meaning of the sentence by placing stress on specific words."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Presentational Italic (<i>) vs. Semantic Emphasis (<em>)!\nToday, we are looking at the **`<em>`** tag, which represents **Emphasis** on our webpage!\n\n* **Analogy**: Imagine a **slanted stress tone voice**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<em>Please read this carefully.</em>\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Presentational Italic (<i>) vs. Semantic Emphasis (<em>)\nThe HTML `<em>` element is used to represent **Emphasis** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<em>Emphasized Text</em>\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 35-36) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Presentational Italic () vs. Semantic Emphasis () seekhein!\nWeb development me **`<em>`** tag ka use **Emphasis** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **slanted stress tone voice** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Presentational Italic () vs. Semantic Emphasis ()\n`<em>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Presentational Italic () vs. Semantic Emphasis ()!\nआज हम **`<em>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Emphasis** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **slanted stress tone voice** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Presentational Italic () vs. Semantic Emphasis ()\n`<em>` तत्व दस्तावेज़ के पदानुक्रम में **Emphasis** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 33,
    "slug": "highlight-text-mark-tag-search-results",
    "title": "Highlighted Text (<mark>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 37-38)",
    "exercise": {
      "question": "Which HTML5 element is specifically designed to highlight keyword matches in search results?",
      "options": [
        "<mark>",
        "<highlight>",
        "<span>",
        "<b>"
      ],
      "correctAnswer": "<mark>",
      "hint": "It wraps text in a bright yellow background highlight by default."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Highlighted Text (<mark>)!\nToday, we are looking at the **`<mark>`** tag, which represents **Highlighted text** on our webpage!\n\n* **Analogy**: Imagine a **neon yellow marker pen**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <mark> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Highlighted Text (<mark>)\nThe HTML `<mark>` element is used to represent **Highlighted text** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <mark> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 37-38) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Highlighted Text () seekhein!\nWeb development me **`<mark>`** tag ka use **Highlighted text** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **neon yellow marker pen** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Highlighted Text ()\n`<mark>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Highlighted Text ()!\nआज हम **`<mark>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Highlighted text** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **neon yellow marker pen** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Highlighted Text ()\n`<mark>` तत्व दस्तावेज़ के पदानुक्रम में **Highlighted text** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 34,
    "slug": "monospace-code-snippet-code-tag",
    "title": "Code Snippets (<code>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 45)",
    "exercise": {
      "question": "Which HTML tag is used to display inline programming code in a monospaced font?",
      "options": [
        "<code>",
        "<pre>",
        "<monospace>",
        "<tt>"
      ],
      "correctAnswer": "<code>",
      "hint": "It renders characters with equal width, ideal for variable names like userEmail."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Code Snippets (<code>)!\nToday, we are looking at the **`<code>`** tag, which represents **Monospace code block** on our webpage!\n\n* **Analogy**: Imagine a **programmer text terminal font**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <code> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Code Snippets (<code>)\nThe HTML `<code>` element is used to represent **Monospace code block** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <code> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 45) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Code Snippets () seekhein!\nWeb development me **`<code>`** tag ka use **Monospace code block** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **programmer text terminal font** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Code Snippets ()\n`<code>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Code Snippets ()!\nआज हम **`<code>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Monospace code block** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **programmer text terminal font** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Code Snippets ()\n`<code>` तत्व दस्तावेज़ के पदानुक्रम में **Monospace code block** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 35,
    "slug": "preformatted-text-pre-tag-spaces-tabs",
    "title": "Preformatted Text (<pre>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 46)",
    "exercise": {
      "question": "Which tag is used to preserve whitespace, tabs, and line breaks exactly as written in source code?",
      "options": [
        "<pre>",
        "<code>",
        "<p>",
        "<br>"
      ],
      "correctAnswer": "<pre>",
      "hint": "Preformatted (pre) text keeps all spacing intact without browser layout collapse."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Preformatted Text (<pre>)!\nToday, we are looking at the **`<pre>`** tag, which represents **Preformatted text layout** on our webpage!\n\n* **Analogy**: Imagine a **photocopy machine that preserves spaces**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <pre> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Preformatted Text (<pre>)\nThe HTML `<pre>` element is used to represent **Preformatted text layout** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <pre> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 46) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Preformatted Text () seekhein!\nWeb development me **`<pre>`** tag ka use **Preformatted text layout** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **photocopy machine that preserves spaces** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Preformatted Text ()\n`<pre>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Preformatted Text ()!\nआज हम **`<pre>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Preformatted text layout** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **photocopy machine that preserves spaces** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Preformatted Text ()\n`<pre>` तत्व दस्तावेज़ के पदानुक्रम में **Preformatted text layout** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 36,
    "slug": "insert-ins-and-delete-del-tags",
    "title": "Insertions (<ins>) & Deletions (<del>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 48)",
    "exercise": {
      "question": "Which tag combination is used to show a revised price in an e-commerce catalog?",
      "options": [
        "<del> and <ins>",
        "<s> and <u>",
        "<strike> and <add>",
        "<b> and <i>"
      ],
      "correctAnswer": "<del> and <ins>",
      "hint": "Del strikes through the outdated content, and ins underlines the newly added content."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Insertions (<ins>) & Deletions (<del>)!\nToday, we are looking at the **`<del> and <ins>`** tag, which represents **Document edit markup** on our webpage!\n\n* **Analogy**: Imagine a **pen strikethrough and underline edits**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <del> and <ins> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Insertions (<ins>) & Deletions (<del>)\nThe HTML `<del> and <ins>` element is used to represent **Document edit markup** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <del> and <ins> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 48) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Insertions () & Deletions () seekhein!\nWeb development me **`<del> and <ins>`** tag ka use **Document edit markup** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **pen strikethrough and underline edits** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Insertions () & Deletions ()\n`<del> and <ins>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Insertions () & Deletions ()!\nआज हम **`<del> and <ins>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Document edit markup** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **pen strikethrough and underline edits** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Insertions () & Deletions ()\n`<del> and <ins>` तत्व दस्तावेज़ के पदानुक्रम में **Document edit markup** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 37,
    "slug": "strikethrough-s-tag-outdated-content",
    "title": "Strikethrough (<s>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 49)",
    "exercise": {
      "question": "Which element is used to represent content that is no longer accurate or relevant, like a sold-out item?",
      "options": [
        "<s>",
        "<del>",
        "<strike>",
        "<u>"
      ],
      "correctAnswer": "<s>",
      "hint": "Use <s> to show content that is no longer relevant, without indicating a document revision."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Strikethrough (<s>)!\nToday, we are looking at the **`<s>`** tag, which represents **Outdated content strikethrough** on our webpage!\n\n* **Analogy**: Imagine a **crossed out list item**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <s> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Strikethrough (<s>)\nThe HTML `<s>` element is used to represent **Outdated content strikethrough** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <s> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 49) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Strikethrough () seekhein!\nWeb development me **`<s>`** tag ka use **Outdated content strikethrough** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **crossed out list item** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Strikethrough ()\n`<s>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Strikethrough ()!\nआज हम **`<s>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Outdated content strikethrough** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **crossed out list item** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Strikethrough ()\n`<s>` तत्व दस्तावेज़ के पदानुक्रम में **Outdated content strikethrough** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 38,
    "slug": "abbreviation-abbr-tag-title-tooltip",
    "title": "Abbreviations (<abbr>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 42)",
    "exercise": {
      "question": "Which attribute inside the <abbr> tag holds the full explanation shown as a mouse hover tooltip?",
      "options": [
        "title",
        "href",
        "desc",
        "alt"
      ],
      "correctAnswer": "title",
      "hint": "Setting title=\"World Wide Web\" displays a standard browser tooltip on hover."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Abbreviations (<abbr>)!\nToday, we are looking at the **`<abbr>`** tag, which represents **Abbreviation tooltips** on our webpage!\n\n* **Analogy**: Imagine a **hover tooltip magnifier bubble**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <abbr> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Abbreviations (<abbr>)\nThe HTML `<abbr>` element is used to represent **Abbreviation tooltips** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <abbr> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 42) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Abbreviations () seekhein!\nWeb development me **`<abbr>`** tag ka use **Abbreviation tooltips** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **hover tooltip magnifier bubble** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Abbreviations ()\n`<abbr>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Abbreviations ()!\nआज हम **`<abbr>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Abbreviation tooltips** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **hover tooltip magnifier bubble** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Abbreviations ()\n`<abbr>` तत्व दस्तावेज़ के पदानुक्रम में **Abbreviation tooltips** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 39,
    "slug": "defining-term-dfn-tag-first-instance",
    "title": "Defining Terms (<dfn>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 41)",
    "exercise": {
      "question": "What is the semantic purpose of the <dfn> tag in HTML?",
      "options": [
        "To mark the defining instance of a term",
        "To define a form",
        "To make text bold",
        "To cite external URLs"
      ],
      "correctAnswer": "To mark the defining instance of a term",
      "hint": "It marks the first time a new term is introduced and defined in content."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Defining Terms (<dfn>)!\nToday, we are looking at the **`<dfn>`** tag, which represents **Defining term instance** on our webpage!\n\n* **Analogy**: Imagine a **dictionary entry highlight**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <dfn> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Defining Terms (<dfn>)\nThe HTML `<dfn>` element is used to represent **Defining term instance** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <dfn> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 41) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Defining Terms () seekhein!\nWeb development me **`<dfn>`** tag ka use **Defining term instance** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **dictionary entry highlight** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Defining Terms ()\n`<dfn>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Defining Terms ()!\nआज हम **`<dfn>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Defining term instance** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **dictionary entry highlight** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Defining Terms ()\n`<dfn>` तत्व दस्तावेज़ के पदानुक्रम में **Defining term instance** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 40,
    "slug": "superscript-sup-and-subscript-sub-tags",
    "title": "Superscript (<sup>) & Subscript (<sub>)",
    "unit": "Unit 4: Semantic Content & Text Modifications",
    "bookRef": "Duckett Chapter 2 (p. 39)",
    "exercise": {
      "question": "Which tag is used to write mathematical exponents like X squared (X²)?",
      "options": [
        "<sup>",
        "<sub>",
        "<exp>",
        "<up>"
      ],
      "correctAnswer": "<sup>",
      "hint": "Superscript (sup) raises text upward, while subscript (sub) lowers it down."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Superscript (<sup>) & Subscript (<sub>)!\nToday, we are looking at the **`<sup> and <sub>`** tag, which represents **Superscript and subscript notation** on our webpage!\n\n* **Analogy**: Imagine a **hot air balloon and submarine**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <sup> and <sub> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Superscript (<sup>) & Subscript (<sub>)\nThe HTML `<sup> and <sub>` element is used to represent **Superscript and subscript notation** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <sup> and <sub> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 2 (p. 39) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Superscript () & Subscript () seekhein!\nWeb development me **`<sup> and <sub>`** tag ka use **Superscript and subscript notation** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **hot air balloon and submarine** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Superscript () & Subscript ()\n`<sup> and <sub>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Superscript () & Subscript ()!\nआज हम **`<sup> and <sub>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Superscript and subscript notation** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **hot air balloon and submarine** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Superscript () & Subscript ()\n`<sup> and <sub>` तत्व दस्तावेज़ के पदानुक्रम में **Superscript and subscript notation** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 41,
    "slug": "anchor-a-tag-href-hyperlinks",
    "title": "Anchor Elements (<a>) & the href Attribute",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "Duckett Chapter 4 (p. 74-76)",
    "exercise": {
      "question": "Which attribute inside the anchor (<a>) tag specifies the target URL destination?",
      "options": [
        "href",
        "src",
        "link",
        "to"
      ],
      "correctAnswer": "href",
      "hint": "Hypertext Reference (href) points to the webpage URL you want to open."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Anchor Elements (<a>) & the href Attribute!\nToday, we are looking at the **`<a>`** tag, which represents **Hyperlinks** on our webpage!\n\n* **Analogy**: Imagine a **teleportation portal door**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <a> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Anchor Elements (<a>) & the href Attribute\nThe HTML `<a>` element is used to represent **Hyperlinks** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <a> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 4 (p. 74-76) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Anchor Elements () & the href Attribute seekhein!\nWeb development me **`<a>`** tag ka use **Hyperlinks** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **teleportation portal door** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Anchor Elements () & the href Attribute\n`<a>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Anchor Elements () & the href Attribute!\nआज हम **`<a>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Hyperlinks** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **teleportation portal door** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Anchor Elements () & the href Attribute\n`<a>` तत्व दस्तावेज़ के पदानुक्रम में **Hyperlinks** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 42,
    "slug": "absolute-vs-relative-link-paths",
    "title": "Absolute vs. Relative Paths",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "Duckett Chapter 4 (p. 77-79)",
    "exercise": {
      "question": "Which of the following is an example of an absolute URL path?",
      "options": [
        "https://nextsem.online/about",
        "/about",
        "about.html",
        "../about.html"
      ],
      "correctAnswer": "https://nextsem.online/about",
      "hint": "Absolute URLs include the protocol (https) and domain name, pointing globally."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Absolute vs. Relative Paths!\nToday, we are looking at the **`relative/absolute`** tag, which represents **Link path types** on our webpage!\n\n* **Analogy**: Imagine a **global GPS coordinates vs. local directions**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of relative/absolute -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Absolute vs. Relative Paths\nThe HTML `relative/absolute` element is used to represent **Link path types** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- relative/absolute specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 4 (p. 77-79) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Absolute vs. Relative Paths seekhein!\nWeb development me **`relative/absolute`** tag ka use **Link path types** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **global GPS coordinates vs. local directions** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Absolute vs. Relative Paths\n`relative/absolute` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Absolute vs. Relative Paths!\nआज हम **`relative/absolute`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Link path types** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **global GPS coordinates vs. local directions** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Absolute vs. Relative Paths\n`relative/absolute` तत्व दस्तावेज़ के पदानुक्रम में **Link path types** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 43,
    "slug": "parent-directory-hopping-relative-paths",
    "title": "Parent Directory Hopping (../)",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "Duckett Chapter 4 (p. 80-82)",
    "exercise": {
      "question": "What does the '../' prefix represent in a relative link path?",
      "options": [
        "Go up one level to the parent directory",
        "Reload current page",
        "Jump to website root",
        "Open a new window"
      ],
      "correctAnswer": "Go up one level to the parent directory",
      "hint": "It moves the relative path pointer out of the current folder into the folder enclosing it."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Parent Directory Hopping (../)!\nToday, we are looking at the **`../`** tag, which represents **Relative path directory hopping** on our webpage!\n\n* **Analogy**: Imagine a **climbing up one ladder step to the parent folder**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of ../ -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Parent Directory Hopping (../)\nThe HTML `../` element is used to represent **Relative path directory hopping** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- ../ specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 4 (p. 80-82) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Parent Directory Hopping (../) seekhein!\nWeb development me **`../`** tag ka use **Relative path directory hopping** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **climbing up one ladder step to the parent folder** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Parent Directory Hopping (../)\n`../` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Parent Directory Hopping (../)!\nआज हम **`../`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Relative path directory hopping** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **climbing up one ladder step to the parent folder** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Parent Directory Hopping (../)\n`../` तत्व दस्तावेज़ के पदानुक्रम में **Relative path directory hopping** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 44,
    "slug": "grandparent-directory-hopping-double-slash",
    "title": "Grandparent Directory Hopping (../../)",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "Duckett Chapter 4 (p. 83-84)",
    "exercise": {
      "question": "How do you navigate upward two directory levels in a relative path?",
      "options": [
        "../../",
        "../",
        "///",
        ".../"
      ],
      "correctAnswer": "../../",
      "hint": "Each '../' moves up one level, so doubling it navigates up two levels."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Grandparent Directory Hopping (../../)!\nToday, we are looking at the **`../../`** tag, which represents **Grandparent directory navigation** on our webpage!\n\n* **Analogy**: Imagine a **climbing up two ladder steps**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of ../../ -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Grandparent Directory Hopping (../../)\nThe HTML `../../` element is used to represent **Grandparent directory navigation** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- ../../ specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 4 (p. 83-84) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Grandparent Directory Hopping (../../) seekhein!\nWeb development me **`../../`** tag ka use **Grandparent directory navigation** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **climbing up two ladder steps** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Grandparent Directory Hopping (../../)\n`../../` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Grandparent Directory Hopping (../../)!\nआज हम **`../../`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Grandparent directory navigation** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **climbing up two ladder steps** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Grandparent Directory Hopping (../../)\n`../../` तत्व दस्तावेज़ के पदानुक्रम में **Grandparent directory navigation** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 45,
    "slug": "email-mailto-links-anchor-tag",
    "title": "Linking to Email Addresses (mailto:)",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "Duckett Chapter 4 (p. 85)",
    "exercise": {
      "question": "What prefix is used inside href to configure a link that opens the user's default email client?",
      "options": [
        "mailto:",
        "email:",
        "send:",
        "mail:"
      ],
      "correctAnswer": "mailto:",
      "hint": "Writing href=\"mailto:support@nextsem.online\" triggers the system's mail application."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Linking to Email Addresses (mailto:)!\nToday, we are looking at the **`mailto:`** tag, which represents **Email links** on our webpage!\n\n* **Analogy**: Imagine a **auto envelope filler**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of mailto: -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Linking to Email Addresses (mailto:)\nThe HTML `mailto:` element is used to represent **Email links** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- mailto: specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 4 (p. 85) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Linking to Email Addresses (mailto:) seekhein!\nWeb development me **`mailto:`** tag ka use **Email links** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **auto envelope filler** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Linking to Email Addresses (mailto:)\n`mailto:` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Linking to Email Addresses (mailto:)!\nआज हम **`mailto:`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Email links** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **auto envelope filler** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Linking to Email Addresses (mailto:)\n`mailto:` तत्व दस्तावेज़ के पदानुक्रम में **Email links** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 46,
    "slug": "telephone-dialing-tel-links-mobile",
    "title": "Telephone Dialing Links (tel:)",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "Duckett Chapter 4 (p. 86)",
    "exercise": {
      "question": "Which prefix enables a clickable link to dial a phone number on mobile devices?",
      "options": [
        "tel:",
        "phone:",
        "call:",
        "dial:"
      ],
      "correctAnswer": "tel:",
      "hint": "Setting href=\"tel:+1234567890\" prompts mobile browsers to start a phone call."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Telephone Dialing Links (tel:)!\nToday, we are looking at the **`tel:`** tag, which represents **Telephone links** on our webpage!\n\n* **Analogy**: Imagine a **phone dial keypad shortkey**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of tel: -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Telephone Dialing Links (tel:)\nThe HTML `tel:` element is used to represent **Telephone links** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- tel: specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 4 (p. 86) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Telephone Dialing Links (tel:) seekhein!\nWeb development me **`tel:`** tag ka use **Telephone links** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **phone dial keypad shortkey** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Telephone Dialing Links (tel:)\n`tel:` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Telephone Dialing Links (tel:)!\nआज हम **`tel:`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Telephone links** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **phone dial keypad shortkey** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Telephone Dialing Links (tel:)\n`tel:` तत्व दस्तावेज़ के पदानुक्रम में **Telephone links** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 47,
    "slug": "open-link-new-tab-target-blank",
    "title": "Target Targets (target=\"_blank\")",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "Duckett Chapter 4 (p. 87)",
    "exercise": {
      "question": "Which attribute and value configuration forces a link to open in a new browser tab?",
      "options": [
        "target=\"_blank\"",
        "target=\"_new\"",
        "rel=\"newtab\"",
        "href=\"_blank\""
      ],
      "correctAnswer": "target=\"_blank\"",
      "hint": "The target attribute set to _blank launches the linked document in a fresh window tab."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Target Targets (target=\"_blank\")!\nToday, we are looking at the **`target=\"_blank\"`** tag, which represents **Opening links in new tabs** on our webpage!\n\n* **Analogy**: Imagine a **spawning a new catalog window**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of target=\"_blank\" -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Target Targets (target=\"_blank\")\nThe HTML `target=\"_blank\"` element is used to represent **Opening links in new tabs** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- target=\"_blank\" specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 4 (p. 87) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Target Targets (target=\"_blank\") seekhein!\nWeb development me **`target=\"_blank\"`** tag ka use **Opening links in new tabs** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **spawning a new catalog window** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Target Targets (target=\"_blank\")\n`target=\"_blank\"` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Target Targets (target=\"_blank\")!\nआज हम **`target=\"_blank\"`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Opening links in new tabs** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **spawning a new catalog window** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Target Targets (target=\"_blank\")\n`target=\"_blank\"` तत्व दस्तावेज़ के पदानुक्रम में **Opening links in new tabs** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 48,
    "slug": "link-security-rel-noopener-noreferrer",
    "title": "Link Security (rel=\"noopener noreferrer\")",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "The Definitive Guide to HTML5 Chapter 13",
    "exercise": {
      "question": "Why should you add rel=\"noopener noreferrer\" to links configured with target=\"_blank\"?",
      "options": [
        "To prevent security exploits and protect referral information",
        "To load pages faster",
        "To style external links",
        "To index links in search engines"
      ],
      "correctAnswer": "To prevent security exploits and protect referral information",
      "hint": "It blocks the new page from accessing the opening page's window.opener object, preventing phishing redirects."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Link Security (rel=\"noopener noreferrer\")!\nToday, we are looking at the **`noopener noreferrer`** tag, which represents **External link security** on our webpage!\n\n* **Analogy**: Imagine a **locking the window connection thread**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of noopener noreferrer -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Link Security (rel=\"noopener noreferrer\")\nThe HTML `noopener noreferrer` element is used to represent **External link security** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- noopener noreferrer specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 13 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Link Security (rel=\"noopener noreferrer\") seekhein!\nWeb development me **`noopener noreferrer`** tag ka use **External link security** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **locking the window connection thread** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Link Security (rel=\"noopener noreferrer\")\n`noopener noreferrer` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Link Security (rel=\"noopener noreferrer\")!\nआज हम **`noopener noreferrer`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **External link security** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **locking the window connection thread** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Link Security (rel=\"noopener noreferrer\")\n`noopener noreferrer` तत्व दस्तावेज़ के पदानुक्रम में **External link security** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 49,
    "slug": "hash-links-jump-to-page-sections",
    "title": "Document Hash Links (href=\"#id\")",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "Duckett Chapter 4 (p. 88-89)",
    "exercise": {
      "question": "What character is prefix-linked in href to jump to an element with a matching ID on the same page?",
      "options": [
        "#",
        ".",
        "/",
        "@"
      ],
      "correctAnswer": "#",
      "hint": "Use href=\"#section-id\" to scroll the browser instantly to the element with id=\"section-id\"."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Document Hash Links (href=\"#id\")!\nToday, we are looking at the **`href=\"#id\"`** tag, which represents **Same-page hash navigation** on our webpage!\n\n* **Analogy**: Imagine a **elevator button jumping to a specific building floor**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of href=\"#id\" -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Document Hash Links (href=\"#id\")\nThe HTML `href=\"#id\"` element is used to represent **Same-page hash navigation** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- href=\"#id\" specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 4 (p. 88-89) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Document Hash Links (href=\"#id\") seekhein!\nWeb development me **`href=\"#id\"`** tag ka use **Same-page hash navigation** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **elevator button jumping to a specific building floor** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Document Hash Links (href=\"#id\")\n`href=\"#id\"` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Document Hash Links (href=\"#id\")!\nआज हम **`href=\"#id\"`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Same-page hash navigation** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **elevator button jumping to a specific building floor** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Document Hash Links (href=\"#id\")\n`href=\"#id\"` तत्व दस्तावेज़ के पदानुक्रम में **Same-page hash navigation** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 50,
    "slug": "download-attribute-force-file-download",
    "title": "Download Attribute (force download)",
    "unit": "Unit 5: Navigation & Hyperlinks",
    "bookRef": "The Definitive Guide to HTML5 Chapter 13",
    "exercise": {
      "question": "Which anchor tag attribute prompts the browser to download a linked file instead of navigating to it?",
      "options": [
        "download",
        "save",
        "action",
        "type"
      ],
      "correctAnswer": "download",
      "hint": "Setting the download attribute on <a> triggers a save dialog, optionally specifying the downloaded file name."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Download Attribute (force download)!\nToday, we are looking at the **`download`** tag, which represents **Forced file downloading** on our webpage!\n\n* **Analogy**: Imagine a **auto-save envelope trigger**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of download -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Download Attribute (force download)\nThe HTML `download` element is used to represent **Forced file downloading** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- download specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 13 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Download Attribute (force download) seekhein!\nWeb development me **`download`** tag ka use **Forced file downloading** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **auto-save envelope trigger** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Download Attribute (force download)\n`download` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Download Attribute (force download)!\nआज हम **`download`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Forced file downloading** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **auto-save envelope trigger** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Download Attribute (force download)\n`download` तत्व दस्तावेज़ के पदानुक्रम में **Forced file downloading** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 51,
    "slug": "image-src-alt-attributes-elements",
    "title": "The Image Element (<img>)",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "Duckett Chapter 5 (p. 94-96)",
    "exercise": {
      "question": "Which of the following is a key syntactic characteristic of the <img> element?",
      "options": [
        "It is a self-closing empty element",
        "It requires </img>",
        "It must contain text content",
        "It is a block-level wrapper"
      ],
      "correctAnswer": "It is a self-closing empty element",
      "hint": "It is empty because it only references an external source file via attributes without enclosing text."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: The Image Element (<img>)!\nToday, we are looking at the **`<img>`** tag, which represents **Image embedding** on our webpage!\n\n* **Analogy**: Imagine a **picture frame window**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <img> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: The Image Element (<img>)\nThe HTML `<img>` element is used to represent **Image embedding** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <img> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 5 (p. 94-96) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 The Image Element () seekhein!\nWeb development me **`<img>`** tag ka use **Image embedding** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **picture frame window** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for The Image Element ()\n`<img>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: The Image Element ()!\nआज हम **`<img>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Image embedding** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **picture frame window** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: The Image Element ()\n`<img>` तत्व दस्तावेज़ के पदानुक्रम में **Image embedding** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 52,
    "slug": "image-sizing-width-height-attributes",
    "title": "Image Sizing (width & height)",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "Duckett Chapter 5 (p. 97-99)",
    "exercise": {
      "question": "Why is it best practice to specify explicit width and height attributes on <img> tags?",
      "options": [
        "To reserve layout space and prevent Cumulative Layout Shift (CLS)",
        "To compress image files",
        "To enable zoom effects",
        "To translate image content"
      ],
      "correctAnswer": "To reserve layout space and prevent Cumulative Layout Shift (CLS)",
      "hint": "Setting dimensions lets browsers calculate the aspect ratio early, preventing page content jumps as images load."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Image Sizing (width & height)!\nToday, we are looking at the **`width/height`** tag, which represents **Image aspect ratio properties** on our webpage!\n\n* **Analogy**: Imagine a **cardboard template slots**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of width/height -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Image Sizing (width & height)\nThe HTML `width/height` element is used to represent **Image aspect ratio properties** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- width/height specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 5 (p. 97-99) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Image Sizing (width & height) seekhein!\nWeb development me **`width/height`** tag ka use **Image aspect ratio properties** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **cardboard template slots** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Image Sizing (width & height)\n`width/height` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Image Sizing (width & height)!\nआज हम **`width/height`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Image aspect ratio properties** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **cardboard template slots** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Image Sizing (width & height)\n`width/height` तत्व दस्तावेज़ के पदानुक्रम में **Image aspect ratio properties** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 53,
    "slug": "responsive-images-srcset-sizes-attributes",
    "title": "Responsive Images (srcset & sizes)",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "The Definitive Guide to HTML5 Chapter 15",
    "exercise": {
      "question": "Which attribute allows specifying multiple source images for different viewport resolutions?",
      "options": [
        "srcset",
        "srcs",
        "media",
        "sizes"
      ],
      "correctAnswer": "srcset",
      "hint": "srcset (source set) lists image URLs and their widths (e.g., banner-320w.jpg 320w) so browsers load the best fit."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Responsive Images (srcset & sizes)!\nToday, we are looking at the **`srcset`** tag, which represents **Responsive layout image sources** on our webpage!\n\n* **Analogy**: Imagine a **different sized shoes based on foot size**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of srcset -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Responsive Images (srcset & sizes)\nThe HTML `srcset` element is used to represent **Responsive layout image sources** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- srcset specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 15 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Responsive Images (srcset & sizes) seekhein!\nWeb development me **`srcset`** tag ka use **Responsive layout image sources** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **different sized shoes based on foot size** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Responsive Images (srcset & sizes)\n`srcset` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Responsive Images (srcset & sizes)!\nआज हम **`srcset`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Responsive layout image sources** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **different sized shoes based on foot size** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Responsive Images (srcset & sizes)\n`srcset` तत्व दस्तावेज़ के पदानुक्रम में **Responsive layout image sources** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 54,
    "slug": "art-direction-picture-source-elements",
    "title": "Art Direction with <picture> & <source>",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "The Definitive Guide to HTML5 Chapter 15",
    "exercise": {
      "question": "Which element is used as a wrapper to perform 'Art Direction' by serving cropped images for mobile viewports?",
      "options": [
        "<picture>",
        "<figure>",
        "<canvas>",
        "<srcset>"
      ],
      "correctAnswer": "<picture>",
      "hint": "It wraps multiple `<source>` tags and a single fallback `<img>` to dynamically select the best graphic profile."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Art Direction with <picture> & <source>!\nToday, we are looking at the **`<picture>`** tag, which represents **Art direction image swapping** on our webpage!\n\n* **Analogy**: Imagine a **wardrobe selector changing jackets based on weather**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <picture> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Art Direction with <picture> & <source>\nThe HTML `<picture>` element is used to represent **Art direction image swapping** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <picture> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 15 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Art Direction with  & seekhein!\nWeb development me **`<picture>`** tag ka use **Art direction image swapping** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **wardrobe selector changing jackets based on weather** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Art Direction with  &\n`<picture>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Art Direction with  &!\nआज हम **`<picture>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Art direction image swapping** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **wardrobe selector changing jackets based on weather** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Art Direction with  &\n`<picture>` तत्व दस्तावेज़ के पदानुक्रम में **Art direction image swapping** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 55,
    "slug": "lazy-loading-images-loading-attribute",
    "title": "Lazy Loading Images (loading attribute)",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "The Definitive Guide to HTML5 Chapter 15",
    "exercise": {
      "question": "Which attribute and value configuration prevents images from loading until they are scrolled near the viewport?",
      "options": [
        "loading=\"lazy\"",
        "defer=\"true\"",
        "preload=\"none\"",
        "async=\"lazy\""
      ],
      "correctAnswer": "loading=\"lazy\"",
      "hint": "loading=\"lazy\" conserves bandwidth by fetching off-screen images only as they approach the screen boundary."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Lazy Loading Images (loading attribute)!\nToday, we are looking at the **`loading=\"lazy\"`** tag, which represents **Image lazy loading optimization** on our webpage!\n\n* **Analogy**: Imagine a **waiter bringing dessert only when requested**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of loading=\"lazy\" -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Lazy Loading Images (loading attribute)\nThe HTML `loading=\"lazy\"` element is used to represent **Image lazy loading optimization** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- loading=\"lazy\" specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 15 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Lazy Loading Images (loading attribute) seekhein!\nWeb development me **`loading=\"lazy\"`** tag ka use **Image lazy loading optimization** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **waiter bringing dessert only when requested** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Lazy Loading Images (loading attribute)\n`loading=\"lazy\"` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Lazy Loading Images (loading attribute)!\nआज हम **`loading=\"lazy\"`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Image lazy loading optimization** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **waiter bringing dessert only when requested** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Lazy Loading Images (loading attribute)\n`loading=\"lazy\"` तत्व दस्तावेज़ के पदानुक्रम में **Image lazy loading optimization** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 56,
    "slug": "figure-figcaption-semantic-image-wrappers",
    "title": "Semantic Image Wrappers (<figure> & <figcaption>)",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "Duckett Chapter 5 (p. 100-101)",
    "exercise": {
      "question": "Which element is used to group an image with its caption semantically?",
      "options": [
        "<figure>",
        "<section>",
        "<div>",
        "<aside>"
      ],
      "correctAnswer": "<figure>",
      "hint": "The figure tag encloses the image, diagram, or code, while figcaption adds the description."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Semantic Image Wrappers (<figure> & <figcaption>)!\nToday, we are looking at the **`<figure>`** tag, which represents **Media figure mapping** on our webpage!\n\n* **Analogy**: Imagine a **museum exhibit display frame**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <figure> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Semantic Image Wrappers (<figure> & <figcaption>)\nThe HTML `<figure>` element is used to represent **Media figure mapping** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <figure> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 5 (p. 100-101) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Semantic Image Wrappers ( & ) seekhein!\nWeb development me **`<figure>`** tag ka use **Media figure mapping** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **museum exhibit display frame** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Semantic Image Wrappers ( & )\n`<figure>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Semantic Image Wrappers ( & )!\nआज हम **`<figure>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Media figure mapping** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **museum exhibit display frame** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Semantic Image Wrappers ( & )\n`<figure>` तत्व दस्तावेज़ के पदानुक्रम में **Media figure mapping** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 57,
    "slug": "inline-vector-graphics-svg-element",
    "title": "Vector Graphics (<svg>)",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "The Definitive Guide to HTML5 Chapter 16",
    "exercise": {
      "question": "What is the primary benefit of Scalable Vector Graphics (SVG) over raster images like PNG or JPG?",
      "options": [
        "They scale infinitely without losing quality or blurring",
        "They load faster on all servers",
        "They are automatically animated",
        "They store audio files"
      ],
      "correctAnswer": "They scale infinitely without losing quality or blurring",
      "hint": "Since SVGs are drawn using math equations (xml coordinates) instead of pixel grids, they remain crisp on all screen displays."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Vector Graphics (<svg>)!\nToday, we are looking at the **`<svg>`** tag, which represents **Scalable vector graphics** on our webpage!\n\n* **Analogy**: Imagine a **infinitely stretchable rubber band drawing**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <svg> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Vector Graphics (<svg>)\nThe HTML `<svg>` element is used to represent **Scalable vector graphics** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <svg> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 16 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Vector Graphics () seekhein!\nWeb development me **`<svg>`** tag ka use **Scalable vector graphics** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **infinitely stretchable rubber band drawing** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Vector Graphics ()\n`<svg>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Vector Graphics ()!\nआज हम **`<svg>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Scalable vector graphics** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **infinitely stretchable rubber band drawing** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Vector Graphics ()\n`<svg>` तत्व दस्तावेज़ के पदानुक्रम में **Scalable vector graphics** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 58,
    "slug": "image-maps-map-area-coordinate-tags",
    "title": "Image Maps (<map> & <area>)",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "Duckett Chapter 5 (p. 102-103)",
    "exercise": {
      "question": "Which element defines the clickable hotspot shapes inside an HTML image map?",
      "options": [
        "<area>",
        "<spot>",
        "<coord>",
        "<link>"
      ],
      "correctAnswer": "<area>",
      "hint": "The <map> tag coordinates with <area coords=\"...\"> to map clicks to specific geometric spots."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Image Maps (<map> & <area>)!\nToday, we are looking at the **`<map>`** tag, which represents **Clickable coordinate image map** on our webpage!\n\n* **Analogy**: Imagine a **clickable coordinate sectors on a map page**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <map> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Image Maps (<map> & <area>)\nThe HTML `<map>` element is used to represent **Clickable coordinate image map** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <map> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 5 (p. 102-103) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Image Maps ( & ) seekhein!\nWeb development me **`<map>`** tag ka use **Clickable coordinate image map** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **clickable coordinate sectors on a map page** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Image Maps ( & )\n`<map>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Image Maps ( & )!\nआज हम **`<map>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Clickable coordinate image map** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **clickable coordinate sectors on a map page** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Image Maps ( & )\n`<map>` तत्व दस्तावेज़ के पदानुक्रम में **Clickable coordinate image map** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 59,
    "slug": "favicon-modern-format-link-types",
    "title": "Favicon Formats & Link Configurations",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "The Definitive Guide to HTML5 Chapter 6",
    "exercise": {
      "question": "Which rel attribute configuration attaches a modern PNG format icon to the browser tab?",
      "options": [
        "rel=\"icon\"",
        "rel=\"shortcut\"",
        "rel=\"stylesheet\"",
        "rel=\"favicon\""
      ],
      "correctAnswer": "rel=\"icon\"",
      "hint": "Writing rel=\"icon\" with type=\"image/png\" is the standard configuration for modern site badges."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Favicon Formats & Link Configurations!\nToday, we are looking at the **`rel=\"icon\"`** tag, which represents **Tab bar favicon formats** on our webpage!\n\n* **Analogy**: Imagine a **mini badge on a lapel pin**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of rel=\"icon\" -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Favicon Formats & Link Configurations\nThe HTML `rel=\"icon\"` element is used to represent **Tab bar favicon formats** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- rel=\"icon\" specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 6 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Favicon Formats & Link Configurations seekhein!\nWeb development me **`rel=\"icon\"`** tag ka use **Tab bar favicon formats** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **mini badge on a lapel pin** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Favicon Formats & Link Configurations\n`rel=\"icon\"` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Favicon Formats & Link Configurations!\nआज हम **`rel=\"icon\"`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Tab bar favicon formats** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **mini badge on a lapel pin** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Favicon Formats & Link Configurations\n`rel=\"icon\"` तत्व दस्तावेज़ के पदानुक्रम में **Tab bar favicon formats** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 60,
    "slug": "capstone-photo-gallery-responsive",
    "title": "Capstone Project: Responsive Photo Gallery",
    "unit": "Unit 6: Multimedia & Responsive Art Direction",
    "bookRef": "Duckett Chapter 5 & 10",
    "exercise": {
      "question": "Which semantic tag combination is ideal for structuring a responsive photo grid listing?",
      "options": [
        "<figure> wrapping <img> and <figcaption>",
        "<ul> wrapping raw text items",
        "<table> grids containing headers",
        "<form> boxes containing checkboxes"
      ],
      "correctAnswer": "<figure> wrapping <img> and <figcaption>",
      "hint": "Figure structures provide semantic layout hooks to present images alongside text labels cleanly."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Capstone Project: Responsive Photo Gallery!\nToday, we are looking at the **`<figure> portfolio`** tag, which represents **HTML5 gallery integration** on our webpage!\n\n* **Analogy**: Imagine a **art gallery presentation walls**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <figure> portfolio -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Capstone Project: Responsive Photo Gallery\nThe HTML `<figure> portfolio` element is used to represent **HTML5 gallery integration** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <figure> portfolio specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 5 & 10 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Capstone Project: Responsive Photo Gallery seekhein!\nWeb development me **`<figure> portfolio`** tag ka use **HTML5 gallery integration** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **art gallery presentation walls** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Capstone Project: Responsive Photo Gallery\n`<figure> portfolio` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Capstone Project: Responsive Photo Gallery!\nआज हम **`<figure> portfolio`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **HTML5 gallery integration** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **art gallery presentation walls** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Capstone Project: Responsive Photo Gallery\n`<figure> portfolio` तत्व दस्तावेज़ के पदानुक्रम में **HTML5 gallery integration** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 61,
    "slug": "audio-elements-src-controls-autoplay-attributes",
    "title": "Audio Elements (src & controls)",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "Duckett Chapter 9 (p. 200-202)",
    "exercise": {
      "question": "Which attribute must be declared on <audio> to display the native browser play, volume, and progress bar controls?",
      "options": [
        "controls",
        "buttons",
        "show",
        "play"
      ],
      "correctAnswer": "controls",
      "hint": "Adding the controls attribute tells the browser to render its default player controls interface."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Audio Elements (src & controls)!\nToday, we are looking at the **`<audio>`** tag, which represents **Native audio player** on our webpage!\n\n* **Analogy**: Imagine a **tape recorder buttons play pause**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <audio> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Audio Elements (src & controls)\nThe HTML `<audio>` element is used to represent **Native audio player** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <audio> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 9 (p. 200-202) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Audio Elements (src & controls) seekhein!\nWeb development me **`<audio>`** tag ka use **Native audio player** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **tape recorder buttons play pause** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Audio Elements (src & controls)\n`<audio>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Audio Elements (src & controls)!\nआज हम **`<audio>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Native audio player** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **tape recorder buttons play pause** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Audio Elements (src & controls)\n`<audio>` तत्व दस्तावेज़ के पदानुक्रम में **Native audio player** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 62,
    "slug": "audio-fallback-source-format-types",
    "title": "Audio Fallback Formats & Sources",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "Duckett Chapter 9 (p. 203)",
    "exercise": {
      "question": "How do you specify multiple fallback audio files inside a single <audio> tag?",
      "options": [
        "Using nested <source> tags",
        "Separating links with commas inside src",
        "Declaring multiple src attributes",
        "Adding multiple audio blocks"
      ],
      "correctAnswer": "Using nested <source> tags",
      "hint": "Declaring multiple `<source src=\"...\">` tags lets the browser select the first format it supports."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Audio Fallback Formats & Sources!\nToday, we are looking at the **`<source>`** tag, which represents **Audio formats compatibility** on our webpage!\n\n* **Analogy**: Imagine a **different audio cassettes inside a player**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <source> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Audio Fallback Formats & Sources\nThe HTML `<source>` element is used to represent **Audio formats compatibility** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <source> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 9 (p. 203) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Audio Fallback Formats & Sources seekhein!\nWeb development me **`<source>`** tag ka use **Audio formats compatibility** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **different audio cassettes inside a player** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Audio Fallback Formats & Sources\n`<source>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Audio Fallback Formats & Sources!\nआज हम **`<source>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Audio formats compatibility** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **different audio cassettes inside a player** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Audio Fallback Formats & Sources\n`<source>` तत्व दस्तावेज़ के पदानुक्रम में **Audio formats compatibility** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 63,
    "slug": "video-elements-src-poster-preload-settings",
    "title": "Video Elements (poster & preload)",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "Duckett Chapter 9 (p. 206-209)",
    "exercise": {
      "question": "Which video attribute displays a placeholder poster image while the video file loads?",
      "options": [
        "poster",
        "src",
        "thumbnail",
        "preload"
      ],
      "correctAnswer": "poster",
      "hint": "The poster attribute points to a static image URL displayed until the user presses play."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Video Elements (poster & preload)!\nToday, we are looking at the **`<video>`** tag, which represents **Native video element properties** on our webpage!\n\n* **Analogy**: Imagine a **home cinema movie projector screen**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <video> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Video Elements (poster & preload)\nThe HTML `<video>` element is used to represent **Native video element properties** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <video> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 9 (p. 206-209) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Video Elements (poster & preload) seekhein!\nWeb development me **`<video>`** tag ka use **Native video element properties** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **home cinema movie projector screen** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Video Elements (poster & preload)\n`<video>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Video Elements (poster & preload)!\nआज हम **`<video>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Native video element properties** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **home cinema movie projector screen** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Video Elements (poster & preload)\n`<video>` तत्व दस्तावेज़ के पदानुक्रम में **Native video element properties** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 64,
    "slug": "video-subtitles-tracks-element",
    "title": "Video Subtitles & Captions (<track>)",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "The Definitive Guide to HTML5 Chapter 16",
    "exercise": {
      "question": "What is the standard file format referenced by the <track> tag to display video subtitles?",
      "options": [
        "WebVTT (.vtt)",
        "SRT (.srt)",
        "TXT (.txt)",
        "XML (.xml)"
      ],
      "correctAnswer": "WebVTT (.vtt)",
      "hint": "HTML5 track elements read Web Video Text Tracks (.vtt) to sync timestamps with caption text."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Video Subtitles & Captions (<track>)!\nToday, we are looking at the **`<track>`** tag, which represents **Video track caption syncing** on our webpage!\n\n* **Analogy**: Imagine a **movie subtitle text translation roll**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <track> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Video Subtitles & Captions (<track>)\nThe HTML `<track>` element is used to represent **Video track caption syncing** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <track> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 16 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Video Subtitles & Captions () seekhein!\nWeb development me **`<track>`** tag ka use **Video track caption syncing** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **movie subtitle text translation roll** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Video Subtitles & Captions ()\n`<track>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Video Subtitles & Captions ()!\nआज हम **`<track>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Video track caption syncing** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **movie subtitle text translation roll** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Video Subtitles & Captions ()\n`<track>` तत्व दस्तावेज़ के पदानुक्रम में **Video track caption syncing** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 65,
    "slug": "embedding-external-sites-iframe-sandbox",
    "title": "External Site Embedding (<iframe> & sandbox)",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "Duckett Chapter 9 (p. 212-214)",
    "exercise": {
      "question": "Which iframe security attribute isolates embedded pages, preventing them from accessing cookies or forms?",
      "options": [
        "sandbox",
        "security",
        "protect",
        "isolate"
      ],
      "correctAnswer": "sandbox",
      "hint": "The sandbox attribute applies restrictions, locking down the iframe content to a secure runtime profile."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: External Site Embedding (<iframe> & sandbox)!\nToday, we are looking at the **`<iframe>`** tag, which represents **Iframe frame sandbox controls** on our webpage!\n\n* **Analogy**: Imagine a **security window looking at a remote house**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <iframe> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: External Site Embedding (<iframe> & sandbox)\nThe HTML `<iframe>` element is used to represent **Iframe frame sandbox controls** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <iframe> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 9 (p. 212-214) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 External Site Embedding ( & sandbox) seekhein!\nWeb development me **`<iframe>`** tag ka use **Iframe frame sandbox controls** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **security window looking at a remote house** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for External Site Embedding ( & sandbox)\n`<iframe>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: External Site Embedding ( & sandbox)!\nआज हम **`<iframe>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Iframe frame sandbox controls** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **security window looking at a remote house** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: External Site Embedding ( & sandbox)\n`<iframe>` तत्व दस्तावेज़ के पदानुक्रम में **Iframe frame sandbox controls** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 66,
    "slug": "plugin-insertion-embed-object-elements",
    "title": "Plugin Insertion (<embed> & <object>)",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "The Definitive Guide to HTML5 Chapter 16",
    "exercise": {
      "question": "Which tag is used as a container to embed external documents, PDFs, or legacy Flash plugins?",
      "options": [
        "<object>",
        "<iframe>",
        "<media>",
        "<plugin>"
      ],
      "correctAnswer": "<object>",
      "hint": "The object element is a generic container for external resources, supporting data and type attributes."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Plugin Insertion (<embed> & <object>)!\nToday, we are looking at the **`<object>`** tag, which represents **Flash object plugin loaders** on our webpage!\n\n* **Analogy**: Imagine a **universal plug adapter adapter slots**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <object> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Plugin Insertion (<embed> & <object>)\nThe HTML `<object>` element is used to represent **Flash object plugin loaders** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <object> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 16 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Plugin Insertion ( & ) seekhein!\nWeb development me **`<object>`** tag ka use **Flash object plugin loaders** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **universal plug adapter adapter slots** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Plugin Insertion ( & )\n`<object>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Plugin Insertion ( & )!\nआज हम **`<object>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Flash object plugin loaders** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **universal plug adapter adapter slots** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Plugin Insertion ( & )\n`<object>` तत्व दस्तावेज़ के पदानुक्रम में **Flash object plugin loaders** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 67,
    "slug": "custom-data-attributes-data-prefix",
    "title": "Custom Data Attributes (data-*)",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "The Definitive Guide to HTML5 Chapter 25",
    "exercise": {
      "question": "Which prefix prefix-labels custom attributes used to store user-defined metadata on HTML tags?",
      "options": [
        "data-",
        "meta-",
        "custom-",
        "id-"
      ],
      "correctAnswer": "data-",
      "hint": "Custom attributes must start with data- (e.g. data-user-role) to be accessed via JavaScript dataset APIs."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Custom Data Attributes (data-*)!\nToday, we are looking at the **`data-*`** tag, which represents **Custom data properties attributes** on our webpage!\n\n* **Analogy**: Imagine a **sticky note with metadata on a folder**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of data-* -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Custom Data Attributes (data-*)\nThe HTML `data-*` element is used to represent **Custom data properties attributes** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- data-* specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 25 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Custom Data Attributes (data-*) seekhein!\nWeb development me **`data-*`** tag ka use **Custom data properties attributes** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **sticky note with metadata on a folder** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Custom Data Attributes (data-*)\n`data-*` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Custom Data Attributes (data-*)!\nआज हम **`data-*`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Custom data properties attributes** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **sticky note with metadata on a folder** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Custom Data Attributes (data-*)\n`data-*` तत्व दस्तावेज़ के पदानुक्रम में **Custom data properties attributes** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 68,
    "slug": "iframe-communication-security-headers",
    "title": "Iframe Communication & Security Headers",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "The Definitive Guide to HTML5 Chapter 16",
    "exercise": {
      "question": "Which API method enables safe, cross-origin communication between a main page and an iframe?",
      "options": [
        "window.postMessage()",
        "window.send()",
        "iframe.emit()",
        "document.dispatch()"
      ],
      "correctAnswer": "window.postMessage()",
      "hint": "postMessage allows sending message payloads between page contexts securely, ignoring strict origin checks."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Iframe Communication & Security Headers!\nToday, we are looking at the **`postMessage`** tag, which represents **Iframe cross-domain communication** on our webpage!\n\n* **Analogy**: Imagine a **safe telephone hotline between embassies**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of postMessage -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Iframe Communication & Security Headers\nThe HTML `postMessage` element is used to represent **Iframe cross-domain communication** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- postMessage specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 16 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Iframe Communication & Security Headers seekhein!\nWeb development me **`postMessage`** tag ka use **Iframe cross-domain communication** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **safe telephone hotline between embassies** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Iframe Communication & Security Headers\n`postMessage` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Iframe Communication & Security Headers!\nआज हम **`postMessage`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Iframe cross-domain communication** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **safe telephone hotline between embassies** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Iframe Communication & Security Headers\n`postMessage` तत्व दस्तावेज़ के पदानुक्रम में **Iframe cross-domain communication** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 69,
    "slug": "html5-native-geolocation-api-details",
    "title": "HTML5 Geolocation API Basics",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "The Definitive Guide to HTML5 Chapter 28",
    "exercise": {
      "question": "Which JavaScript object is queried to retrieve the device coordinates in HTML5 Geolocation?",
      "options": [
        "navigator.geolocation",
        "window.coords",
        "document.location",
        "system.gps"
      ],
      "correctAnswer": "navigator.geolocation",
      "hint": "The navigator.geolocation object exposes methods like getCurrentPosition to retrieve latitude and longitude."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: HTML5 Geolocation API Basics!\nToday, we are looking at the **`navigator.geolocation`** tag, which represents **HTML5 location tracking api** on our webpage!\n\n* **Analogy**: Imagine a **compass indicator built into your browser**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of navigator.geolocation -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: HTML5 Geolocation API Basics\nThe HTML `navigator.geolocation` element is used to represent **HTML5 location tracking api** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- navigator.geolocation specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 28 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 HTML5 Geolocation API Basics seekhein!\nWeb development me **`navigator.geolocation`** tag ka use **HTML5 location tracking api** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **compass indicator built into your browser** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for HTML5 Geolocation API Basics\n`navigator.geolocation` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: HTML5 Geolocation API Basics!\nआज हम **`navigator.geolocation`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **HTML5 location tracking api** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **compass indicator built into your browser** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: HTML5 Geolocation API Basics\n`navigator.geolocation` तत्व दस्तावेज़ के पदानुक्रम में **HTML5 location tracking api** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 70,
    "slug": "capstone-interactive-video-player",
    "title": "Capstone Project: Custom Video Player",
    "unit": "Unit 7: Native Audio, Video & Embeds",
    "bookRef": "The Definitive Guide to HTML5 Chapter 16",
    "exercise": {
      "question": "What elements are wrapped together to structure a responsive media player with customized controls?",
      "options": [
        "<video> with custom <button> and <input type=\"range\"> elements",
        "<table> cells displaying frame pictures",
        "<form> checkboxes mapping settings",
        "<ul> list steps mapping playlist"
      ],
      "correctAnswer": "<video> with custom <button> and <input type=\"range\"> elements",
      "hint": "Use HTML5 elements to structure the controls bar, and JavaScript to control video play/pause functions."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Capstone Project: Custom Video Player!\nToday, we are looking at the **`custom video layout`** tag, which represents **Video player interface structure** on our webpage!\n\n* **Analogy**: Imagine a **custom controller desk with dial sliders**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of custom video layout -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Capstone Project: Custom Video Player\nThe HTML `custom video layout` element is used to represent **Video player interface structure** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- custom video layout specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 16 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Capstone Project: Custom Video Player seekhein!\nWeb development me **`custom video layout`** tag ka use **Video player interface structure** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **custom controller desk with dial sliders** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Capstone Project: Custom Video Player\n`custom video layout` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Capstone Project: Custom Video Player!\nआज हम **`custom video layout`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Video player interface structure** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **custom controller desk with dial sliders** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Capstone Project: Custom Video Player\n`custom video layout` तत्व दस्तावेज़ के पदानुक्रम में **Video player interface structure** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 71,
    "slug": "unordered-lists-ul-li-bullet-points",
    "title": "Unordered Lists (<ul> and <li>)",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "Duckett Chapter 3 (p. 52-54)",
    "exercise": {
      "question": "Which tag is used as a container to define an unordered list of items?",
      "options": [
        "<ul>",
        "<ol>",
        "<list>",
        "<dl>"
      ],
      "correctAnswer": "<ul>",
      "hint": "Unordered list (ul) holds list item (li) children, displaying bullet points by default."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Unordered Lists (<ul> and <li>)!\nToday, we are looking at the **`<ul>`** tag, which represents **Unordered list syntax** on our webpage!\n\n* **Analogy**: Imagine a **shopping grocery list with bullets**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <ul> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Unordered Lists (<ul> and <li>)\nThe HTML `<ul>` element is used to represent **Unordered list syntax** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <ul> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 3 (p. 52-54) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Unordered Lists ( and ) seekhein!\nWeb development me **`<ul>`** tag ka use **Unordered list syntax** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **shopping grocery list with bullets** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Unordered Lists ( and )\n`<ul>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Unordered Lists ( and )!\nआज हम **`<ul>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Unordered list syntax** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **shopping grocery list with bullets** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Unordered Lists ( and )\n`<ul>` तत्व दस्तावेज़ के पदानुक्रम में **Unordered list syntax** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 72,
    "slug": "ordered-lists-ol-li-numbered-steps",
    "title": "Ordered Lists (<ol> and <li>)",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "Duckett Chapter 3 (p. 55-57)",
    "exercise": {
      "question": "Which tag is used to structure a sequential list of steps numbered 1, 2, 3?",
      "options": [
        "<ol>",
        "<ul>",
        "<dl>",
        "<list>"
      ],
      "correctAnswer": "<ol>",
      "hint": "Ordered list (ol) automatically increments step numbers for each list item (li)."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Ordered Lists (<ol> and <li>)!\nToday, we are looking at the **`<ol>`** tag, which represents **Ordered numbered list** on our webpage!\n\n* **Analogy**: Imagine a **cooking recipe step 1 step 2**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <ol> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Ordered Lists (<ol> and <li>)\nThe HTML `<ol>` element is used to represent **Ordered numbered list** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <ol> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 3 (p. 55-57) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Ordered Lists ( and ) seekhein!\nWeb development me **`<ol>`** tag ka use **Ordered numbered list** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **cooking recipe step 1 step 2** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Ordered Lists ( and )\n`<ol>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Ordered Lists ( and )!\nआज हम **`<ol>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Ordered numbered list** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **cooking recipe step 1 step 2** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Ordered Lists ( and )\n`<ol>` तत्व दस्तावेज़ के पदानुक्रम में **Ordered numbered list** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 73,
    "slug": "ordered-list-start-reversed-indexing",
    "title": "Ordered Lists Start & Reversed Attributes",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "The Definitive Guide to HTML5 Chapter 14",
    "exercise": {
      "question": "Which attribute is declared on <ol> to start numbering list items from 5 instead of 1?",
      "options": [
        "start",
        "value",
        "begin",
        "from"
      ],
      "correctAnswer": "start",
      "hint": "Use start=\"5\" to set the starting numerical index for the ordered list sequence."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Ordered Lists Start & Reversed Attributes!\nToday, we are looking at the **`reversed/start`** tag, which represents **Ordered list counters** on our webpage!\n\n* **Analogy**: Imagine a **rocket launch countdown timer**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of reversed/start -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Ordered Lists Start & Reversed Attributes\nThe HTML `reversed/start` element is used to represent **Ordered list counters** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- reversed/start specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 14 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Ordered Lists Start & Reversed Attributes seekhein!\nWeb development me **`reversed/start`** tag ka use **Ordered list counters** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **rocket launch countdown timer** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Ordered Lists Start & Reversed Attributes\n`reversed/start` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Ordered Lists Start & Reversed Attributes!\nआज हम **`reversed/start`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Ordered list counters** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **rocket launch countdown timer** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Ordered Lists Start & Reversed Attributes\n`reversed/start` तत्व दस्तावेज़ के पदानुक्रम में **Ordered list counters** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 74,
    "slug": "description-lists-dl-dt-dd-glossary",
    "title": "Definition Lists (<dl>, <dt>, and <dd>)",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "Duckett Chapter 3 (p. 58-60)",
    "exercise": {
      "question": "Which tag defines the actual description content for a term in a description list?",
      "options": [
        "<dd>",
        "<dt>",
        "<dl>",
        "<term>"
      ],
      "correctAnswer": "<dd>",
      "hint": "dl wraps the list, dt defines the term, and dd provides the description details."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Definition Lists (<dl>, <dt>, and <dd>)!\nToday, we are looking at the **`<dl>`** tag, which represents **Description list glossary structure** on our webpage!\n\n* **Analogy**: Imagine a **dictionary page with terms and definitions**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <dl> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Definition Lists (<dl>, <dt>, and <dd>)\nThe HTML `<dl>` element is used to represent **Description list glossary structure** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <dl> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 3 (p. 58-60) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Definition Lists (, , and ) seekhein!\nWeb development me **`<dl>`** tag ka use **Description list glossary structure** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **dictionary page with terms and definitions** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Definition Lists (, , and )\n`<dl>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Definition Lists (, , and )!\nआज हम **`<dl>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Description list glossary structure** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **dictionary page with terms and definitions** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Definition Lists (, , and )\n`<dl>` तत्व दस्तावेज़ के पदानुक्रम में **Description list glossary structure** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 75,
    "slug": "table-container-grid-rows-columns",
    "title": "Tables Rows & Cells (<tr>, <td>, <th>)",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "Duckett Chapter 6 (p. 126-128)",
    "exercise": {
      "question": "Which tag represents a standard data cell inside an HTML table row?",
      "options": [
        "<td>",
        "<tr>",
        "<th>",
        "<table>"
      ],
      "correctAnswer": "<td>",
      "hint": "tr defines the row, th represents a header cell, and td contains the cell data."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Tables Rows & Cells (<tr>, <td>, <th>)!\nToday, we are looking at the **`<table>`** tag, which represents **Table tags** on our webpage!\n\n* **Analogy**: Imagine a **checkerboard grid**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <table> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Tables Rows & Cells (<tr>, <td>, <th>)\nThe HTML `<table>` element is used to represent **Table tags** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <table> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 6 (p. 126-128) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Tables Rows & Cells (, , ) seekhein!\nWeb development me **`<table>`** tag ka use **Table tags** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **checkerboard grid** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Tables Rows & Cells (, , )\n`<table>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Tables Rows & Cells (, , )!\nआज हम **`<table>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Table tags** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **checkerboard grid** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Tables Rows & Cells (, , )\n`<table>` तत्व दस्तावेज़ के पदानुक्रम में **Table tags** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 76,
    "slug": "table-colspan-merge-columns",
    "title": "Table Column Spanning (colspan & rowspan)",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "Duckett Chapter 6 (p. 132-135)",
    "exercise": {
      "question": "Which attribute is used to stretch a cell horizontally to cover three columns?",
      "options": [
        "colspan=\"3\"",
        "rowspan=\"3\"",
        "width=\"3\"",
        "span=\"3\""
      ],
      "correctAnswer": "colspan=\"3\"",
      "hint": "Column Span (colspan) merges cells horizontally across columns in the same row."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Table Column Spanning (colspan & rowspan)!\nToday, we are looking at the **`colspan/rowspan`** tag, which represents **Table cell merging attributes** on our webpage!\n\n* **Analogy**: Imagine a **merging cells in Excel**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of colspan/rowspan -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Table Column Spanning (colspan & rowspan)\nThe HTML `colspan/rowspan` element is used to represent **Table cell merging attributes** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- colspan/rowspan specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 6 (p. 132-135) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Table Column Spanning (colspan & rowspan) seekhein!\nWeb development me **`colspan/rowspan`** tag ka use **Table cell merging attributes** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **merging cells in Excel** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Table Column Spanning (colspan & rowspan)\n`colspan/rowspan` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Table Column Spanning (colspan & rowspan)!\nआज हम **`colspan/rowspan`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Table cell merging attributes** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **merging cells in Excel** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Table Column Spanning (colspan & rowspan)\n`colspan/rowspan` तत्व दस्तावेज़ के पदानुक्रम में **Table cell merging attributes** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 77,
    "slug": "table-thead-tbody-tfoot-semantics",
    "title": "Table Structured Sections (<thead>, <tbody>, <tfoot>)",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "Duckett Chapter 6 (p. 136-138)",
    "exercise": {
      "question": "Which semantic tag groups the header row labels of a data table?",
      "options": [
        "<thead>",
        "<tbody>",
        "<tfoot>",
        "<tr>"
      ],
      "correctAnswer": "<thead>",
      "hint": "<thead>, <tbody>, and <tfoot> segment tables semantically, helping style columns and rows easily."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Table Structured Sections (<thead>, <tbody>, <tfoot>)!\nToday, we are looking at the **`<thead>`** tag, which represents **Table semantic layout blocks** on our webpage!\n\n* **Analogy**: Imagine a **splitting catalog paper into header body footer**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <thead> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Table Structured Sections (<thead>, <tbody>, <tfoot>)\nThe HTML `<thead>` element is used to represent **Table semantic layout blocks** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <thead> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 6 (p. 136-138) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Table Structured Sections (, , ) seekhein!\nWeb development me **`<thead>`** tag ka use **Table semantic layout blocks** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **splitting catalog paper into header body footer** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Table Structured Sections (, , )\n`<thead>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Table Structured Sections (, , )!\nआज हम **`<thead>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Table semantic layout blocks** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **splitting catalog paper into header body footer** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Table Structured Sections (, , )\n`<thead>` तत्व दस्तावेज़ के पदानुक्रम में **Table semantic layout blocks** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 78,
    "slug": "table-column-groups-colgroup-col-widths",
    "title": "Table Column Groups (<colgroup> & <col>)",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "The Definitive Guide to HTML5 Chapter 14",
    "exercise": {
      "question": "What is the primary benefit of using the <colgroup> tag in HTML tables?",
      "options": [
        "To apply styling rules to entire columns at once",
        "To sort rows",
        "To merge rows vertically",
        "To define column titles"
      ],
      "correctAnswer": "To apply styling rules to entire columns at once",
      "hint": "<colgroup> lets you define styles (like width or color) for columns without duplicating styles on every cell."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Table Column Groups (<colgroup> & <col>)!\nToday, we are looking at the **`<colgroup>`** tag, which represents **Table column width sizing controls** on our webpage!\n\n* **Analogy**: Imagine a **ruler setting column boundaries on paper**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <colgroup> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Table Column Groups (<colgroup> & <col>)\nThe HTML `<colgroup>` element is used to represent **Table column width sizing controls** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <colgroup> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 14 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Table Column Groups ( & ) seekhein!\nWeb development me **`<colgroup>`** tag ka use **Table column width sizing controls** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **ruler setting column boundaries on paper** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Table Column Groups ( & )\n`<colgroup>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Table Column Groups ( & )!\nआज हम **`<colgroup>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Table column width sizing controls** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **ruler setting column boundaries on paper** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Table Column Groups ( & )\n`<colgroup>` तत्व दस्तावेज़ के पदानुक्रम में **Table column width sizing controls** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 79,
    "slug": "table-borders-cellpadding-cellspacing",
    "title": "Table Borders & Spacing Layouts",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "Duckett Chapter 6 (p. 130)",
    "exercise": {
      "question": "Which CSS property is standard to collapse double table borders into a single line?",
      "options": [
        "border-collapse: collapse;",
        "border-spacing: 0;",
        "border-style: solid;",
        "grid-gap: 0;"
      ],
      "correctAnswer": "border-collapse: collapse;",
      "hint": "Setting border-collapse: collapse collapses cell borders into a single clean border."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Table Borders & Spacing Layouts!\nToday, we are looking at the **`border-collapse`** tag, which represents **Table layouts spacing styles** on our webpage!\n\n* **Analogy**: Imagine a **adjusting grid gaps between grid boxes**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of border-collapse -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Table Borders & Spacing Layouts\nThe HTML `border-collapse` element is used to represent **Table layouts spacing styles** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- border-collapse specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 6 (p. 130) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Table Borders & Spacing Layouts seekhein!\nWeb development me **`border-collapse`** tag ka use **Table layouts spacing styles** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **adjusting grid gaps between grid boxes** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Table Borders & Spacing Layouts\n`border-collapse` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Table Borders & Spacing Layouts!\nआज हम **`border-collapse`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Table layouts spacing styles** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **adjusting grid gaps between grid boxes** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Table Borders & Spacing Layouts\n`border-collapse` तत्व दस्तावेज़ के पदानुक्रम में **Table layouts spacing styles** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 80,
    "slug": "capstone-weekly-schedule-pricing-grid",
    "title": "Capstone Project: Dynamic Pricing Grid",
    "unit": "Unit 8: Lists, Tables & Layout Grids",
    "bookRef": "Duckett Chapter 6 & 11",
    "exercise": {
      "question": "Which HTML structure is best suited to display a clear comparisons matrix of features across pricing tiers?",
      "options": [
        "A semantic <table> structured with thead, tbody, and colgroups",
        "A series of line breaks and bold tags",
        "A description list with start attributes",
        "An unordered list nested in an address tag"
      ],
      "correctAnswer": "A semantic <table> structured with thead, tbody, and colgroups",
      "hint": "Tables are the semantic standard to present comparisons data, ensuring columns and rows align."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Capstone Project: Dynamic Pricing Grid!\nToday, we are looking at the **`custom grid layout`** tag, which represents **Grid layout integration** on our webpage!\n\n* **Analogy**: Imagine a **price lists comparison cards**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of custom grid layout -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Capstone Project: Dynamic Pricing Grid\nThe HTML `custom grid layout` element is used to represent **Grid layout integration** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- custom grid layout specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 6 & 11 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Capstone Project: Dynamic Pricing Grid seekhein!\nWeb development me **`custom grid layout`** tag ka use **Grid layout integration** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **price lists comparison cards** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Capstone Project: Dynamic Pricing Grid\n`custom grid layout` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Capstone Project: Dynamic Pricing Grid!\nआज हम **`custom grid layout`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Grid layout integration** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **price lists comparison cards** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Capstone Project: Dynamic Pricing Grid\n`custom grid layout` तत्व दस्तावेज़ के पदानुक्रम में **Grid layout integration** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 81,
    "slug": "form-action-method-attributes-processing",
    "title": "Form Action & Method (processing basics)",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 144-146)",
    "exercise": {
      "question": "Which attribute specifies the server URL destination where form data should be sent upon submission?",
      "options": [
        "action",
        "method",
        "target",
        "post"
      ],
      "correctAnswer": "action",
      "hint": "The action attribute specifies the API endpoint URL (e.g. /submit-form) handling the request."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Form Action & Method (processing basics)!\nToday, we are looking at the **`<form>`** tag, which represents **Form properties action method** on our webpage!\n\n* **Analogy**: Imagine a **letter envelope with target address and mail class**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <form> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Form Action & Method (processing basics)\nThe HTML `<form>` element is used to represent **Form properties action method** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <form> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 144-146) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Form Action & Method (processing basics) seekhein!\nWeb development me **`<form>`** tag ka use **Form properties action method** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **letter envelope with target address and mail class** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Form Action & Method (processing basics)\n`<form>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Form Action & Method (processing basics)!\nआज हम **`<form>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Form properties action method** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **letter envelope with target address and mail class** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Form Action & Method (processing basics)\n`<form>` तत्व दस्तावेज़ के पदानुक्रम में **Form properties action method** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 82,
    "slug": "form-labeling-for-attribute-linkage",
    "title": "Form Labels (for attribute linkage)",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 150-152)",
    "exercise": {
      "question": "How do you associate a <label> tag with an <input> field semantically?",
      "options": [
        "Match the label's 'for' attribute with the input's 'id'",
        "Match the label's 'name' with the input's 'name'",
        "Nest the input inside a header tag",
        "Assign matching class names"
      ],
      "correctAnswer": "Match the label's 'for' attribute with the input's 'id'",
      "hint": "Setting for=\"user-email\" on a label matches it to the input with id=\"user-email\", enabling click-to-focus."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Form Labels (for attribute linkage)!\nToday, we are looking at the **`<label>`** tag, which represents **Label target inputs linkage** on our webpage!\n\n* **Analogy**: Imagine a **name tag physically tied to a suitcase handle**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <label> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Form Labels (for attribute linkage)\nThe HTML `<label>` element is used to represent **Label target inputs linkage** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <label> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 150-152) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Form Labels (for attribute linkage) seekhein!\nWeb development me **`<label>`** tag ka use **Label target inputs linkage** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **name tag physically tied to a suitcase handle** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Form Labels (for attribute linkage)\n`<label>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Form Labels (for attribute linkage)!\nआज हम **`<label>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Label target inputs linkage** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **name tag physically tied to a suitcase handle** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Form Labels (for attribute linkage)\n`<label>` तत्व दस्तावेज़ के पदानुक्रम में **Label target inputs linkage** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 83,
    "slug": "text-password-inputs-type-attributes",
    "title": "Text & Password Inputs (type=\"text\", \"password\")",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 147-149)",
    "exercise": {
      "question": "Which attribute hides typed letters, displaying dots or asterisks instead?",
      "options": [
        "type=\"password\"",
        "type=\"hide\"",
        "type=\"mask\"",
        "type=\"secure\""
      ],
      "correctAnswer": "type=\"password\"",
      "hint": "type=\"password\" masks inputs visually to protect passwords on screen."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Text & Password Inputs (type=\"text\", \"password\")!\nToday, we are looking at the **`<input>`** tag, which represents **Input text password fields** on our webpage!\n\n* **Analogy**: Imagine a **writing on index cards vs. masking numbers**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <input> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Text & Password Inputs (type=\"text\", \"password\")\nThe HTML `<input>` element is used to represent **Input text password fields** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <input> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 147-149) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Text & Password Inputs (type=\"text\", \"password\") seekhein!\nWeb development me **`<input>`** tag ka use **Input text password fields** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **writing on index cards vs. masking numbers** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Text & Password Inputs (type=\"text\", \"password\")\n`<input>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Text & Password Inputs (type=\"text\", \"password\")!\nआज हम **`<input>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Input text password fields** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **writing on index cards vs. masking numbers** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Text & Password Inputs (type=\"text\", \"password\")\n`<input>` तत्व दस्तावेज़ के पदानुक्रम में **Input text password fields** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 84,
    "slug": "radio-buttons-grouping-name-attribute",
    "title": "Radio Buttons (type=\"radio\")",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 154-155)",
    "exercise": {
      "question": "What attribute groups radio buttons together so that selecting one automatically deselects others?",
      "options": [
        "name",
        "id",
        "class",
        "group"
      ],
      "correctAnswer": "name",
      "hint": "Radio inputs must share the exact same name attribute value to act as a mutually exclusive choice group."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Radio Buttons (type=\"radio\")!\nToday, we are looking at the **`type=\"radio\"`** tag, which represents **Radio buttons mutual selection** on our webpage!\n\n* **Analogy**: Imagine a **car radio selector buttons where only one option stays pressed**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of type=\"radio\" -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Radio Buttons (type=\"radio\")\nThe HTML `type=\"radio\"` element is used to represent **Radio buttons mutual selection** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- type=\"radio\" specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 154-155) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Radio Buttons (type=\"radio\") seekhein!\nWeb development me **`type=\"radio\"`** tag ka use **Radio buttons mutual selection** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **car radio selector buttons where only one option stays pressed** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Radio Buttons (type=\"radio\")\n`type=\"radio\"` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Radio Buttons (type=\"radio\")!\nआज हम **`type=\"radio\"`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Radio buttons mutual selection** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **car radio selector buttons where only one option stays pressed** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Radio Buttons (type=\"radio\")\n`type=\"radio\"` तत्व दस्तावेज़ के पदानुक्रम में **Radio buttons mutual selection** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 85,
    "slug": "checkboxes-prechecked-multiple-selections",
    "title": "Checkboxes (type=\"checkbox\")",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 156-157)",
    "exercise": {
      "question": "Which attribute is used to make a checkbox checked by default when the page loads?",
      "options": [
        "checked",
        "selected",
        "active",
        "default"
      ],
      "correctAnswer": "checked",
      "hint": "Adding the checked attribute (e.g. checked=\"checked\" or just checked) pre-selects the box on load."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Checkboxes (type=\"checkbox\")!\nToday, we are looking at the **`type=\"checkbox\"`** tag, which represents **Checkbox multi selections** on our webpage!\n\n* **Analogy**: Imagine a **checking multiple boxes on a questionnaire list**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of type=\"checkbox\" -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Checkboxes (type=\"checkbox\")\nThe HTML `type=\"checkbox\"` element is used to represent **Checkbox multi selections** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- type=\"checkbox\" specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 156-157) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Checkboxes (type=\"checkbox\") seekhein!\nWeb development me **`type=\"checkbox\"`** tag ka use **Checkbox multi selections** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **checking multiple boxes on a questionnaire list** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Checkboxes (type=\"checkbox\")\n`type=\"checkbox\"` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Checkboxes (type=\"checkbox\")!\nआज हम **`type=\"checkbox\"`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Checkbox multi selections** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **checking multiple boxes on a questionnaire list** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Checkboxes (type=\"checkbox\")\n`type=\"checkbox\"` तत्व दस्तावेज़ के पदानुक्रम में **Checkbox multi selections** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 86,
    "slug": "dropdown-select-lists-option-attributes",
    "title": "Dropdown Select Lists (<select> and <option>)",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 158-159)",
    "exercise": {
      "question": "Which tag is nested inside <select> to define an individual option in a dropdown menu?",
      "options": [
        "<option>",
        "<list>",
        "<item>",
        "<choice>"
      ],
      "correctAnswer": "<option>",
      "hint": "Each menu option is defined using the `<option value=\"...\">Label</option>` tag."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Dropdown Select Lists (<select> and <option>)!\nToday, we are looking at the **`<select>`** tag, which represents **Dropdown menu selectors** on our webpage!\n\n* **Analogy**: Imagine a **expanding rolodex card slot list**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <select> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Dropdown Select Lists (<select> and <option>)\nThe HTML `<select>` element is used to represent **Dropdown menu selectors** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <select> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 158-159) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Dropdown Select Lists ( and ) seekhein!\nWeb development me **`<select>`** tag ka use **Dropdown menu selectors** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **expanding rolodex card slot list** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Dropdown Select Lists ( and )\n`<select>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Dropdown Select Lists ( and )!\nआज हम **`<select>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Dropdown menu selectors** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **expanding rolodex card slot list** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Dropdown Select Lists ( and )\n`<select>` तत्व दस्तावेज़ के पदानुक्रम में **Dropdown menu selectors** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 87,
    "slug": "multiline-textarea-rows-cols-settings",
    "title": "Multi-line Input (<textarea>)",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 160-161)",
    "exercise": {
      "question": "Which attributes define the initial height and width of a <textarea> box?",
      "options": [
        "rows and cols",
        "width and height",
        "size and max",
        "lines and letters"
      ],
      "correctAnswer": "rows and cols",
      "hint": "rows sets the text lines height, and cols sets the character width spacing layout."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Multi-line Input (<textarea>)!\nToday, we are looking at the **`<textarea>`** tag, which represents **Textarea multi-line text input** on our webpage!\n\n* **Analogy**: Imagine a **large feedback notepad sheet**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <textarea> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Multi-line Input (<textarea>)\nThe HTML `<textarea>` element is used to represent **Textarea multi-line text input** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <textarea> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 160-161) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Multi-line Input () seekhein!\nWeb development me **`<textarea>`** tag ka use **Textarea multi-line text input** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **large feedback notepad sheet** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Multi-line Input ()\n`<textarea>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Multi-line Input ()!\nआज हम **`<textarea>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Textarea multi-line text input** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **large feedback notepad sheet** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Multi-line Input ()\n`<textarea>` तत्व दस्तावेज़ के पदानुक्रम में **Textarea multi-line text input** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 88,
    "slug": "buttons-submit-button-reset-types",
    "title": "Buttons (type=\"submit\", \"button\", \"reset\")",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 162-163)",
    "exercise": {
      "question": "What is the default behavior of a <button> placed inside a <form> if no type attribute is specified?",
      "options": [
        "It submits the form data (type=\"submit\")",
        "It clears the fields (type=\"reset\")",
        "It acts as a neutral button",
        "It disables the form"
      ],
      "correctAnswer": "It submits the form data (type=\"submit\")",
      "hint": "By default, browser specifications treat raw buttons inside form blocks as submit buttons."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Buttons (type=\"submit\", \"button\", \"reset\")!\nToday, we are looking at the **`<button>`** tag, which represents **Button controller behaviors** on our webpage!\n\n* **Analogy**: Imagine a **physical launch trigger buttons**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <button> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Buttons (type=\"submit\", \"button\", \"reset\")\nThe HTML `<button>` element is used to represent **Button controller behaviors** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <button> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 162-163) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Buttons (type=\"submit\", \"button\", \"reset\") seekhein!\nWeb development me **`<button>`** tag ka use **Button controller behaviors** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **physical launch trigger buttons** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Buttons (type=\"submit\", \"button\", \"reset\")\n`<button>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Buttons (type=\"submit\", \"button\", \"reset\")!\nआज हम **`<button>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Button controller behaviors** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **physical launch trigger buttons** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Buttons (type=\"submit\", \"button\", \"reset\")\n`<button>` तत्व दस्तावेज़ के पदानुक्रम में **Button controller behaviors** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 89,
    "slug": "binding-input-labels-label-container",
    "title": "Binding Input Labels (<label>)",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 150)",
    "exercise": {
      "question": "What is the accessibility advantage of wrapping an input tag directly inside a <label> tag?",
      "options": [
        "Clicking the label text automatically focuses/toggles the input",
        "It loads scripts",
        "It makes text bold",
        "It sends data securely"
      ],
      "correctAnswer": "Clicking the label text automatically focuses/toggles the input",
      "hint": "Nesting `<input>` inside `<label>` links them, enlarging the clickable target area for users."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Binding Input Labels (<label>)!\nToday, we are looking at the **`<label>`** tag, which represents **Form label containers accessibility** on our webpage!\n\n* **Analogy**: Imagine a **enveloping box with target description wrapper**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <label> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Binding Input Labels (<label>)\nThe HTML `<label>` element is used to represent **Form label containers accessibility** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <label> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 150) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Binding Input Labels () seekhein!\nWeb development me **`<label>`** tag ka use **Form label containers accessibility** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **enveloping box with target description wrapper** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Binding Input Labels ()\n`<label>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Binding Input Labels ()!\nआज हम **`<label>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Form label containers accessibility** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **enveloping box with target description wrapper** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Binding Input Labels ()\n`<label>` तत्व दस्तावेज़ के पदानुक्रम में **Form label containers accessibility** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 90,
    "slug": "form-groups-fieldset-legend-elements",
    "title": "Form Groups (<fieldset> and <legend>)",
    "unit": "Unit 9: Interactive Forms & Inputs",
    "bookRef": "Duckett Chapter 7 (p. 164-165)",
    "exercise": {
      "question": "Which tag provides the text title caption for a <fieldset> border group?",
      "options": [
        "<legend>",
        "<caption>",
        "<title>",
        "<label>"
      ],
      "correctAnswer": "<legend>",
      "hint": "<legend> defines the text header displayed on the fieldset container border line."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Form Groups (<fieldset> and <legend>)!\nToday, we are looking at the **`<fieldset>`** tag, which represents **Form fieldset legend groupings** on our webpage!\n\n* **Analogy**: Imagine a **index divider tab dividing files inside a binder**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <fieldset> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Form Groups (<fieldset> and <legend>)\nThe HTML `<fieldset>` element is used to represent **Form fieldset legend groupings** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <fieldset> specification container -->\n```\n\nConsult the standard specifications in Duckett Chapter 7 (p. 164-165) for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Form Groups ( and ) seekhein!\nWeb development me **`<fieldset>`** tag ka use **Form fieldset legend groupings** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **index divider tab dividing files inside a binder** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Form Groups ( and )\n`<fieldset>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Form Groups ( and )!\nआज हम **`<fieldset>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Form fieldset legend groupings** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **index divider tab dividing files inside a binder** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Form Groups ( and )\n`<fieldset>` तत्व दस्तावेज़ के पदानुक्रम में **Form fieldset legend groupings** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 91,
    "slug": "form-validation-required-maxlength-minlength",
    "title": "Form Field Required Validation",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5 Chapter 12",
    "exercise": {
      "question": "Which boolean attribute blocks form submission if an input field is left empty?",
      "options": [
        "required",
        "validate",
        "empty=\"false\"",
        "disabled"
      ],
      "correctAnswer": "required",
      "hint": "Adding the required attribute prompts the browser to show a validation warning if submitted empty."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Form Field Required Validation!\nToday, we are looking at the **`required`** tag, which represents **Required validation checks** on our webpage!\n\n* **Analogy**: Imagine a **red asterisk gate keeper checklist**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of required -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Form Field Required Validation\nThe HTML `required` element is used to represent **Required validation checks** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- required specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 12 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Form Field Required Validation seekhein!\nWeb development me **`required`** tag ka use **Required validation checks** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **red asterisk gate keeper checklist** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Form Field Required Validation\n`required` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Form Field Required Validation!\nआज हम **`required`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Required validation checks** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **red asterisk gate keeper checklist** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Form Field Required Validation\n`required` तत्व दस्तावेज़ के पदानुक्रम में **Required validation checks** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 92,
    "slug": "regex-pattern-matching-validation",
    "title": "Regex Pattern Matching (pattern attribute)",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5 Chapter 12",
    "exercise": {
      "question": "Which attribute validates form input text using a Regular Expression (regex) pattern?",
      "options": [
        "pattern",
        "regex",
        "format",
        "validate"
      ],
      "correctAnswer": "pattern",
      "hint": "Use pattern=\"[0-9]{5}\" to restrict inputs to exactly 5 digits, validating client-side."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Regex Pattern Matching (pattern attribute)!\nToday, we are looking at the **`pattern`** tag, which represents **Regex pattern validation input checks** on our webpage!\n\n* **Analogy**: Imagine a **custom security stencil template shape matcher**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of pattern -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Regex Pattern Matching (pattern attribute)\nThe HTML `pattern` element is used to represent **Regex pattern validation input checks** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- pattern specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 12 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Regex Pattern Matching (pattern attribute) seekhein!\nWeb development me **`pattern`** tag ka use **Regex pattern validation input checks** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **custom security stencil template shape matcher** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Regex Pattern Matching (pattern attribute)\n`pattern` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Regex Pattern Matching (pattern attribute)!\nआज हम **`pattern`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Regex pattern validation input checks** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **custom security stencil template shape matcher** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Regex Pattern Matching (pattern attribute)\n`pattern` तत्व दस्तावेज़ के पदानुक्रम में **Regex pattern validation input checks** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 93,
    "slug": "html5-numeric-ranges-type-number-range",
    "title": "HTML5 Numeric Ranges (type=\"range\", type=\"number\")",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5 Chapter 12",
    "exercise": {
      "question": "Which input type displays a native graphical slider knob to choose values between a min and max range?",
      "options": [
        "type=\"range\"",
        "type=\"slider\"",
        "type=\"number\"",
        "type=\"dial\""
      ],
      "correctAnswer": "type=\"range\"",
      "hint": "type=\"range\" renders a slider, while type=\"number\" renders a text box with increment spinners."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: HTML5 Numeric Ranges (type=\"range\", type=\"number\")!\nToday, we are looking at the **`type=\"range\"`** tag, which represents **Slider spinner number range fields** on our webpage!\n\n* **Analogy**: Imagine a **dimmer knob dial and speedometer counter**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of type=\"range\" -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: HTML5 Numeric Ranges (type=\"range\", type=\"number\")\nThe HTML `type=\"range\"` element is used to represent **Slider spinner number range fields** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- type=\"range\" specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 12 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 HTML5 Numeric Ranges (type=\"range\", type=\"number\") seekhein!\nWeb development me **`type=\"range\"`** tag ka use **Slider spinner number range fields** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **dimmer knob dial and speedometer counter** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for HTML5 Numeric Ranges (type=\"range\", type=\"number\")\n`type=\"range\"` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: HTML5 Numeric Ranges (type=\"range\", type=\"number\")!\nआज हम **`type=\"range\"`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Slider spinner number range fields** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **dimmer knob dial and speedometer counter** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: HTML5 Numeric Ranges (type=\"range\", type=\"number\")\n`type=\"range\"` तत्व दस्तावेज़ के पदानुक्रम में **Slider spinner number range fields** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 94,
    "slug": "progress-indicators-meter-gauges",
    "title": "Progress Indicators (<progress>) & Meter Gauges (<meter>)",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5 Chapter 16",
    "exercise": {
      "question": "Which tag is semantically best to show a disk storage usage percentage or a fuel gauge reading?",
      "options": [
        "<meter>",
        "<progress>",
        "<gauge>",
        "<range>"
      ],
      "correctAnswer": "<meter>",
      "hint": "Use <progress> for task completion (e.g. downloading), and <meter> for static fraction measurements (e.g. space usage)."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Progress Indicators (<progress>) & Meter Gauges (<meter>)!\nToday, we are looking at the **`<progress>`** tag, which represents **Progress meter value indicators** on our webpage!\n\n* **Analogy**: Imagine a **downloading status bars and car fuel gauges**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <progress> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Progress Indicators (<progress>) & Meter Gauges (<meter>)\nThe HTML `<progress>` element is used to represent **Progress meter value indicators** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <progress> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 16 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Progress Indicators () & Meter Gauges () seekhein!\nWeb development me **`<progress>`** tag ka use **Progress meter value indicators** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **downloading status bars and car fuel gauges** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Progress Indicators () & Meter Gauges ()\n`<progress>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Progress Indicators () & Meter Gauges ()!\nआज हम **`<progress>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Progress meter value indicators** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **downloading status bars and car fuel gauges** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Progress Indicators () & Meter Gauges ()\n`<progress>` तत्व दस्तावेज़ के पदानुक्रम में **Progress meter value indicators** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 95,
    "slug": "autocomplete-datalist-input-suggestions",
    "title": "Autocomplete Data Lists (<datalist>)",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5 Chapter 12",
    "exercise": {
      "question": "How do you connect a <datalist> suggestion dropdown to an <input> field?",
      "options": [
        "Link the input's 'list' attribute to the datalist's 'id'",
        "Link the input's 'id' to the datalist's 'for'",
        "Nest the input inside the datalist",
        "By matching name values"
      ],
      "correctAnswer": "Link the input's 'list' attribute to the datalist's 'id'",
      "hint": "Use list=\"browsers\" on the input, referencing a datalist with id=\"browsers\" holding option values."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Autocomplete Data Lists (<datalist>)!\nToday, we are looking at the **`<datalist>`** tag, which represents **Datalist options search input suggestions** on our webpage!\n\n* **Analogy**: Imagine a **search bar autocomplete suggestions drop list**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <datalist> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Autocomplete Data Lists (<datalist>)\nThe HTML `<datalist>` element is used to represent **Datalist options search input suggestions** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <datalist> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 12 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Autocomplete Data Lists () seekhein!\nWeb development me **`<datalist>`** tag ka use **Datalist options search input suggestions** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **search bar autocomplete suggestions drop list** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Autocomplete Data Lists ()\n`<datalist>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Autocomplete Data Lists ()!\nआज हम **`<datalist>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Datalist options search input suggestions** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **search bar autocomplete suggestions drop list** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Autocomplete Data Lists ()\n`<datalist>` तत्व दस्तावेज़ के पदानुक्रम में **Datalist options search input suggestions** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 96,
    "slug": "collapsible-accordions-details-summary",
    "title": "Collapsible Accordions (<details> and <summary>)",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5 Chapter 14",
    "exercise": {
      "question": "Which element provides the visible clickable heading for a collapsible <details> accordion widget?",
      "options": [
        "<summary>",
        "<title>",
        "<heading>",
        "<label>"
      ],
      "correctAnswer": "<summary>",
      "hint": "<summary> acts as the click trigger that toggles the rest of the <details> accordion content."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Collapsible Accordions (<details> and <summary>)!\nToday, we are looking at the **`<details>`** tag, which represents **Accordion details summary elements** on our webpage!\n\n* **Analogy**: Imagine a **secret drawer box that pops open when pushed**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <details> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Collapsible Accordions (<details> and <summary>)\nThe HTML `<details>` element is used to represent **Accordion details summary elements** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <details> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 14 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Collapsible Accordions ( and ) seekhein!\nWeb development me **`<details>`** tag ka use **Accordion details summary elements** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **secret drawer box that pops open when pushed** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Collapsible Accordions ( and )\n`<details>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Collapsible Accordions ( and )!\nआज हम **`<details>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Accordion details summary elements** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **secret drawer box that pops open when pushed** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Collapsible Accordions ( and )\n`<details>` तत्व दस्तावेज़ के पदानुक्रम में **Accordion details summary elements** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 97,
    "slug": "native-modals-dialog-showmodal-methods",
    "title": "Native Modals & Popups (<dialog>)",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5 Chapter 14",
    "exercise": {
      "question": "Which JavaScript method is called to open a <dialog> tag as a native modal overlay?",
      "options": [
        "dialog.showModal()",
        "dialog.open()",
        "dialog.show()",
        "dialog.popup()"
      ],
      "correctAnswer": "dialog.showModal()",
      "hint": "showModal() opens the dialog as a modal, rendering a backdrop and trapping page focus, unlike show()."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Native Modals & Popups (<dialog>)!\nToday, we are looking at the **`<dialog>`** tag, which represents **Dialog modals popup overlays** on our webpage!\n\n* **Analogy**: Imagine a **alert billboard popup that locks navigation flow**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <dialog> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Native Modals & Popups (<dialog>)\nThe HTML `<dialog>` element is used to represent **Dialog modals popup overlays** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <dialog> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 14 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Native Modals & Popups () seekhein!\nWeb development me **`<dialog>`** tag ka use **Dialog modals popup overlays** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **alert billboard popup that locks navigation flow** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Native Modals & Popups ()\n`<dialog>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Native Modals & Popups ()!\nआज हम **`<dialog>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Dialog modals popup overlays** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **alert billboard popup that locks navigation flow** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Native Modals & Popups ()\n`<dialog>` तत्व दस्तावेज़ के पदानुक्रम में **Dialog modals popup overlays** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 98,
    "slug": "web-components-template-slot-elements",
    "title": "Web Components Templates (<template> and <slot>)",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5 Chapter 14",
    "exercise": {
      "question": "What is a key rendering characteristic of markup written inside the <template> tag?",
      "options": [
        "It is hidden and not rendered by the browser until cloned with JavaScript",
        "It renders in italics",
        "It is instantly loaded via styles",
        "It redirects page parameters"
      ],
      "correctAnswer": "It is hidden and not rendered by the browser until cloned with JavaScript",
      "hint": "Template content is parsed but dormant in the DOM, allowing scripts to safely copy it without triggering side-effects."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Web Components Templates (<template> and <slot>)!\nToday, we are looking at the **`<template>`** tag, which represents **Template slot elements web components** on our webpage!\n\n* **Analogy**: Imagine a **cookie stencil mold that sits in the drawer**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <template> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Web Components Templates (<template> and <slot>)\nThe HTML `<template>` element is used to represent **Template slot elements web components** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <template> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 14 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Web Components Templates ( and ) seekhein!\nWeb development me **`<template>`** tag ka use **Template slot elements web components** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **cookie stencil mold that sits in the drawer** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Web Components Templates ( and )\n`<template>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Web Components Templates ( and )!\nआज हम **`<template>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Template slot elements web components** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **cookie stencil mold that sits in the drawer** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Web Components Templates ( and )\n`<template>` तत्व दस्तावेज़ के पदानुक्रम में **Template slot elements web components** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 99,
    "slug": "canvas-graphics-draw-shapes-context",
    "title": "Canvas Graphics (<canvas>)",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5 Chapter 16",
    "exercise": {
      "question": "Which tag is used as a container to draw shapes, graphs, and game graphics programmatically via JavaScript?",
      "options": [
        "<canvas>",
        "<svg>",
        "<paint>",
        "<graphic>"
      ],
      "correctAnswer": "<canvas>",
      "hint": "The canvas tag provides an empty bitmap canvas surface, which scripts target via the getContext('2d') API."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Canvas Graphics (<canvas>)!\nToday, we are looking at the **`<canvas>`** tag, which represents **Canvas drawing surface api** on our webpage!\n\n* **Analogy**: Imagine a **whiteboard screen and sketch pen controller**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of <canvas> -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Canvas Graphics (<canvas>)\nThe HTML `<canvas>` element is used to represent **Canvas drawing surface api** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- <canvas> specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 Chapter 16 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Canvas Graphics () seekhein!\nWeb development me **`<canvas>`** tag ka use **Canvas drawing surface api** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **whiteboard screen and sketch pen controller** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Canvas Graphics ()\n`<canvas>` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Canvas Graphics ()!\nआज हम **`<canvas>`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **Canvas drawing surface api** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **whiteboard screen and sketch pen controller** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Canvas Graphics ()\n`<canvas>` तत्व दस्तावेज़ के पदानुक्रम में **Canvas drawing surface api** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  },
  {
    "id": 100,
    "slug": "capstone-portfolio-layout-page",
    "title": "Capstone Project: Portfolio Layout",
    "unit": "Unit 10: Advanced Semantics, Validation & APIs",
    "bookRef": "The Definitive Guide to HTML5",
    "exercise": {
      "question": "Which set of HTML5 tags represents the most semantic way to outline a portfolio page with headers, main articles, sidebars, and footers?",
      "options": [
        "<header>, <nav>, <main>, <aside>, <footer>",
        "<div>, <span>, <table>, <p>",
        "<fieldset>, <legend>, <form>, <button>",
        "<dl>, <dt>, <dd>, <li>"
      ],
      "correctAnswer": "<header>, <nav>, <main>, <aside>, <footer>",
      "hint": "Using layout tags describes document structure clearly to search engines and screen readers."
    },
    "english": {
      "kid": "### 🧒 Let's Learn: Capstone Project: Portfolio Layout!\nToday, we are looking at the **`capstone project page`** tag, which represents **HTML5 validation structures integration** on our webpage!\n\n* **Analogy**: Imagine a **delivering a complete building structure blueprint**.\n* **How it works**: You wrap your content in the tag to tell the browser how it should look and behave.\n\n```html\n<!-- Example use of capstone project page -->\n```\n\nTry it out in the check questions below!",
      "pro": "### 💻 Professional Specifications: Capstone Project: Portfolio Layout\nThe HTML `capstone project page` element is used to represent **HTML5 validation structures integration** semantically.\n\n* **DOM Specifications**: It belongs to the category of flow content and phrasing content, carrying standard accessibility traits.\n* **Best Practice**: Use this tag for semantic clarity to improve SEO index crawling and screen reader accessibility.\n\n```html\n<!-- Semantically valid usage -->\n<!-- capstone project page specification container -->\n```\n\nConsult the standard specifications in The Definitive Guide to HTML5 for advanced details."
    },
    "hinglish": {
      "kid": "### 🧒 Capstone Project: Portfolio Layout seekhein!\nWeb development me **`capstone project page`** tag ka use **HTML5 validation structures integration** show karne ke liye kiya jata hai.\n\n* **Story Analogy**: Ise ek **delivering a complete building structure blueprint** ki tarah samjhein jo page ko neatly setup karta hai!\n* **Easy Implementation**: Bas text ya contents ko is tag ke andar wrap karein aur browser use automatically process kar lega.",
      "pro": "### 💻 Technical Notes for Capstone Project: Portfolio Layout\n`capstone project page` element ka configuration details aur browser implementation guidelines:\n\n* **SEO Value**: Google crawler indexes parse attributes check karte waqt is tag ko target validation tags me query karte hain.\n* **Reset Styles**: User-agent styles properties customize karne ke liye baseline controls sets configure karein."
    },
    "hindi": {
      "kid": "### 🧒 आइए सीखें: Capstone Project: Portfolio Layout!\nआज हम **`capstone project page`** टैग के बारे में जानेंगे, जिसका उपयोग वेबपेज में **HTML5 validation structures integration** दर्शाने के लिए किया जाता है।\n\n* **कहानी**: इसे एक **delivering a complete building structure blueprint** की तरह समझें, जो आपके वेबपेज को साफ और सुंदर बनाता है!\n* **उपयोग का तरीका**: बस अपने टेक्स्ट को इस टैग के भीतर रखें ताकि ब्राउज़र इसे सही ढंग से समझ सके।",
      "pro": "### 💻 व्यावसायिक मार्गदर्शिका: Capstone Project: Portfolio Layout\n`capstone project page` तत्व दस्तावेज़ के पदानुक्रम में **HTML5 validation structures integration** का प्रतिनिधित्व करता है:\n\n* **एसईओ और पहुंच (SEO & Accessibility)**: यह स्क्रीन रीडर्स को सामग्री का सही महत्व समझने में मदद करता है।\n* **सिमेंटिक्स**: सामान्य डिब्बों के स्थान पर इसका उपयोग कोडिंग मानकों को बढ़ाता है।"
    }
  }
];
