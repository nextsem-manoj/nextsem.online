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

export const cssLessons: Lesson[] = [
  {
    "id": 0,
    "slug": "vscode-live-css-setup-windows-11-devtools",
    "title": "VS Code Live CSS Setup, DevTools Inspector & First Stylesheet",
    "unit": "Unit 0: Developer Workstation Setup & CSS Tools",
    "bookRef": "Nextsem Full Stack CSS Guide (Phase 0)",
    "exercise": {
      "english": {
        "question": "Which HTML tag is placed inside the <head> element to connect an external CSS stylesheet like styles.css?",
        "options": [
          "<link rel='stylesheet' href='styles.css'>",
          "<script src='styles.css'>",
          "<style src='styles.css'>",
          "<css href='styles.css'>"
        ],
        "correctAnswer": "<link rel='stylesheet' href='styles.css'>",
        "hint": "Use the <link> tag with rel='stylesheet' and the href attribute pointing to your CSS file."
      },
      "hinglish": {
        "question": "External CSS फ़ाइल (styles.css) को HTML से जोड़ने के लिए <head> में कौन सा टैग इस्तेमाल किया जाता है?",
        "options": [
          "<link rel='stylesheet' href='styles.css'>",
          "<script src='styles.css'>",
          "<style src='styles.css'>",
          "<css href='styles.css'>"
        ],
        "correctAnswer": "<link rel='stylesheet' href='styles.css'>",
        "hint": "<link> टैग का उपयोग rel='stylesheet' और href के साथ किया जाता है।"
      },
      "hindi": {
        "question": "External CSS फ़ाइल (styles.css) को HTML से जोड़ने के लिए <head> में कौन सा टैग इस्तेमाल किया जाता है?",
        "options": [
          "<link rel='stylesheet' href='styles.css'>",
          "<script src='styles.css'>",
          "<style src='styles.css'>",
          "<css href='styles.css'>"
        ],
        "correctAnswer": "<link rel='stylesheet' href='styles.css'>",
        "hint": "<link> टैग का उपयोग rel='stylesheet' और href के साथ किया जाता है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: VS Code Live CSS Setup, DevTools Inspector & First Stylesheet!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **VS Code Live CSS Setup, DevTools Inspector & First Stylesheet** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* Think of HTML as the bare concrete foundation and brick walls of a house, while CSS is the interior design, paint, lighting, furniture, and windows!\n* **Key Takeaway**: VS Code live preview setup, Chrome/Edge F12 inspector, and creating your first external styles.css file linked with <link rel='stylesheet'>.\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* styles.css - Developer Workstation Setup */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #17181c;\n  color: #ffffff;\n  font-family: 'Segoe UI', system-ui, sans-serif;\n  padding: 32px;\n  line-height: 1.6;\n}\n\n.welcome-card {\n  background: #0f172a;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.welcome-card h1 {\n  color: #04AA6D;\n  margin-bottom: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** Why do developers wear glasses? Because they don't C# without CSS! 😂\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: VS Code Live CSS Setup, DevTools Inspector & First Stylesheet\n\nAn in-depth technical guide to **VS Code Live CSS Setup, DevTools Inspector & First Stylesheet** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: VS Code live preview setup, Chrome/Edge F12 inspector, and creating your first external styles.css file linked with <link rel='stylesheet'>.\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* styles.css - Developer Workstation Setup */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #17181c;\n  color: #ffffff;\n  font-family: 'Segoe UI', system-ui, sans-serif;\n  padding: 32px;\n  line-height: 1.6;\n}\n\n.welcome-card {\n  background: #0f172a;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.welcome-card h1 {\n  color: #04AA6D;\n  margin-bottom: 12px;\n}\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 VS Code Live CSS Setup, DevTools Inspector & First Stylesheet Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **VS Code Live CSS Setup, DevTools Inspector & First Stylesheet** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* Think of HTML as the bare concrete foundation and brick walls of a house, while CSS is the interior design, paint, lighting, furniture, and windows!\n* **Khas Baat**: VS Code live preview setup, Chrome/Edge F12 inspector, and creating your first external styles.css file linked with <link rel='stylesheet'>.\n\n---\n\n### 💻 Code Example:\n```css\n/* styles.css - Developer Workstation Setup */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #17181c;\n  color: #ffffff;\n  font-family: 'Segoe UI', system-ui, sans-serif;\n  padding: 32px;\n  line-height: 1.6;\n}\n\n.welcome-card {\n  background: #0f172a;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.welcome-card h1 {\n  color: #04AA6D;\n  margin-bottom: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: VS Code Live CSS Setup, DevTools Inspector & First Stylesheet\n\n* **Core Architecture**: VS Code live preview setup, Chrome/Edge F12 inspector, and creating your first external styles.css file linked with <link rel='stylesheet'>.\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: VS Code Live CSS Setup, DevTools Inspector & First Stylesheet!\n\nइस पाठ में हम **VS Code Live CSS Setup, DevTools Inspector & First Stylesheet** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* Think of HTML as the bare concrete foundation and brick walls of a house, while CSS is the interior design, paint, lighting, furniture, and windows!\n* **मुख्य बिंदु**: VS Code live preview setup, Chrome/Edge F12 inspector, and creating your first external styles.css file linked with <link rel='stylesheet'>.\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* styles.css - Developer Workstation Setup */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #17181c;\n  color: #ffffff;\n  font-family: 'Segoe UI', system-ui, sans-serif;\n  padding: 32px;\n  line-height: 1.6;\n}\n\n.welcome-card {\n  background: #0f172a;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.welcome-card h1 {\n  color: #04AA6D;\n  margin-bottom: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: VS Code Live CSS Setup, DevTools Inspector & First Stylesheet\n\n* **तकनीकी विनिर्देश**: VS Code live preview setup, Chrome/Edge F12 inspector, and creating your first external styles.css file linked with <link rel='stylesheet'>.\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 1,
    "slug": "what-is-css3-cascading-style-sheets-intro",
    "title": "What is CSS? (Cascading Style Sheets Explained)",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "CSS: The Definitive Guide Chapter 1",
    "exercise": {
      "english": {
        "question": "What does the acronym 'CSS' stand for in web engineering?",
        "options": [
          "Cascading Style Sheets",
          "Creative Style Syntax",
          "Computer Styling Software",
          "Colorful Sheet System"
        ],
        "correctAnswer": "Cascading Style Sheets",
        "hint": "CSS describes how HTML elements should be visually styled across different screens and devices."
      },
      "hinglish": {
        "question": "वेब डेवलपमेंट में 'CSS' का पूरा नाम क्या है?",
        "options": [
          "Cascading Style Sheets",
          "Creative Style Syntax",
          "Computer Styling Software",
          "Colorful Sheet System"
        ],
        "correctAnswer": "Cascading Style Sheets",
        "hint": "CSS का पूरा नाम Cascading Style Sheets है।"
      },
      "hindi": {
        "question": "वेब डेवलपमेंट में 'CSS' का पूरा नाम क्या है?",
        "options": [
          "Cascading Style Sheets",
          "Creative Style Syntax",
          "Computer Styling Software",
          "Colorful Sheet System"
        ],
        "correctAnswer": "Cascading Style Sheets",
        "hint": "CSS का पूरा नाम Cascading Style Sheets है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: What is CSS? (Cascading Style Sheets Explained)!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **What is CSS? (Cascading Style Sheets Explained)** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* If HTML is the human skeleton, CSS is the skin, hair, stylish clothing, and eye color that makes every person unique.\n* **Key Takeaway**: The foundational role of CSS3 in modern web browsers, separation of structure from presentation, and the cascading inheritance model.\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* CSS Rule Structure */\n/* Selector { Property: Value; } */\n\nh1 {\n  color: #04AA6D;\n  font-size: 32px;\n  text-align: center;\n}\n\np {\n  color: #e2e8f0;\n  font-size: 16px;\n  line-height: 1.8;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** CSS is like painting a room: one missing semicolon and your whole house becomes purple! 🎨\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: What is CSS? (Cascading Style Sheets Explained)\n\nAn in-depth technical guide to **What is CSS? (Cascading Style Sheets Explained)** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: The foundational role of CSS3 in modern web browsers, separation of structure from presentation, and the cascading inheritance model.\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* CSS Rule Structure */\n/* Selector { Property: Value; } */\n\nh1 {\n  color: #04AA6D;\n  font-size: 32px;\n  text-align: center;\n}\n\np {\n  color: #e2e8f0;\n  font-size: 16px;\n  line-height: 1.8;\n}\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 What is CSS? (Cascading Style Sheets Explained) Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **What is CSS? (Cascading Style Sheets Explained)** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* If HTML is the human skeleton, CSS is the skin, hair, stylish clothing, and eye color that makes every person unique.\n* **Khas Baat**: The foundational role of CSS3 in modern web browsers, separation of structure from presentation, and the cascading inheritance model.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Rule Structure */\n/* Selector { Property: Value; } */\n\nh1 {\n  color: #04AA6D;\n  font-size: 32px;\n  text-align: center;\n}\n\np {\n  color: #e2e8f0;\n  font-size: 16px;\n  line-height: 1.8;\n}\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: What is CSS? (Cascading Style Sheets Explained)\n\n* **Core Architecture**: The foundational role of CSS3 in modern web browsers, separation of structure from presentation, and the cascading inheritance model.\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: What is CSS? (Cascading Style Sheets Explained)!\n\nइस पाठ में हम **What is CSS? (Cascading Style Sheets Explained)** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* If HTML is the human skeleton, CSS is the skin, hair, stylish clothing, and eye color that makes every person unique.\n* **मुख्य बिंदु**: The foundational role of CSS3 in modern web browsers, separation of structure from presentation, and the cascading inheritance model.\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* CSS Rule Structure */\n/* Selector { Property: Value; } */\n\nh1 {\n  color: #04AA6D;\n  font-size: 32px;\n  text-align: center;\n}\n\np {\n  color: #e2e8f0;\n  font-size: 16px;\n  line-height: 1.8;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: What is CSS? (Cascading Style Sheets Explained)\n\n* **तकनीकी विनिर्देश**: The foundational role of CSS3 in modern web browsers, separation of structure from presentation, and the cascading inheritance model.\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 2,
    "slug": "anatomy-of-a-css-rule-selectors-properties",
    "title": "Anatomy of a CSS Rule (Selectors, Properties & Values)",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "Duckett HTML & CSS Chapter 10",
    "exercise": {
      "english": {
        "question": "In the CSS rule 'color: #04AA6D;', what is 'color' called?",
        "options": [
          "Property",
          "Selector",
          "Value",
          "Declaration Block"
        ],
        "correctAnswer": "Property",
        "hint": "'color' is the CSS property name, while '#04AA6D' is the property value."
      },
      "hinglish": {
        "question": "CSS नियम 'color: #04AA6D;' में 'color' को क्या कहा जाता है?",
        "options": [
          "Property (प्रॉपर्टी)",
          "Selector (सिलेक्टर)",
          "Value (मान)",
          "Declaration Block"
        ],
        "correctAnswer": "Property (प्रॉपर्टी)",
        "hint": "'color' स्टाइल की प्रॉपर्टी है और '#04AA6D' उसका वैल्यू है।"
      },
      "hindi": {
        "question": "CSS नियम 'color: #04AA6D;' में 'color' को क्या कहा जाता है?",
        "options": [
          "Property (प्रॉपर्टी)",
          "Selector (सिलेक्टर)",
          "Value (मान)",
          "Declaration Block"
        ],
        "correctAnswer": "Property (प्रॉपर्टी)",
        "hint": "'color' स्टाइल की प्रॉपर्टी है और '#04AA6D' उसका वैल्यू है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Anatomy of a CSS Rule (Selectors, Properties & Values)!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **Anatomy of a CSS Rule (Selectors, Properties & Values)** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* A CSS declaration is like a recipe instruction: 'Target: The Cake (Selector), Action: Bake at (Property), Parameter: 350 degrees (Value)'.\n* **Key Takeaway**: The anatomy of CSS rules: selector, declaration block, property name, colon separator, property value, and semicolon terminator.\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* Anatomy of a CSS Rule */\n/* [Selector] { [Property]: [Value]; } */\n\n.developer-badge {\n  background-color: #04AA6D; /* Property: Value */\n  color: #ffffff;            /* Text color */\n  padding: 8px 16px;         /* Spacing */\n  border-radius: 9999px;     /* Pill shape */\n  font-weight: 700;          /* Bold font */\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** A CSS rule without a closing brace } walks into a bar... and everything after it becomes part of the cocktail! 🍸\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: Anatomy of a CSS Rule (Selectors, Properties & Values)\n\nAn in-depth technical guide to **Anatomy of a CSS Rule (Selectors, Properties & Values)** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: The anatomy of CSS rules: selector, declaration block, property name, colon separator, property value, and semicolon terminator.\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* Anatomy of a CSS Rule */\n/* [Selector] { [Property]: [Value]; } */\n\n.developer-badge {\n  background-color: #04AA6D; /* Property: Value */\n  color: #ffffff;            /* Text color */\n  padding: 8px 16px;         /* Spacing */\n  border-radius: 9999px;     /* Pill shape */\n  font-weight: 700;          /* Bold font */\n}\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 Anatomy of a CSS Rule (Selectors, Properties & Values) Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **Anatomy of a CSS Rule (Selectors, Properties & Values)** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* A CSS declaration is like a recipe instruction: 'Target: The Cake (Selector), Action: Bake at (Property), Parameter: 350 degrees (Value)'.\n* **Khas Baat**: The anatomy of CSS rules: selector, declaration block, property name, colon separator, property value, and semicolon terminator.\n\n---\n\n### 💻 Code Example:\n```css\n/* Anatomy of a CSS Rule */\n/* [Selector] { [Property]: [Value]; } */\n\n.developer-badge {\n  background-color: #04AA6D; /* Property: Value */\n  color: #ffffff;            /* Text color */\n  padding: 8px 16px;         /* Spacing */\n  border-radius: 9999px;     /* Pill shape */\n  font-weight: 700;          /* Bold font */\n}\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: Anatomy of a CSS Rule (Selectors, Properties & Values)\n\n* **Core Architecture**: The anatomy of CSS rules: selector, declaration block, property name, colon separator, property value, and semicolon terminator.\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Anatomy of a CSS Rule (Selectors, Properties & Values)!\n\nइस पाठ में हम **Anatomy of a CSS Rule (Selectors, Properties & Values)** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* A CSS declaration is like a recipe instruction: 'Target: The Cake (Selector), Action: Bake at (Property), Parameter: 350 degrees (Value)'.\n* **मुख्य बिंदु**: The anatomy of CSS rules: selector, declaration block, property name, colon separator, property value, and semicolon terminator.\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* Anatomy of a CSS Rule */\n/* [Selector] { [Property]: [Value]; } */\n\n.developer-badge {\n  background-color: #04AA6D; /* Property: Value */\n  color: #ffffff;            /* Text color */\n  padding: 8px 16px;         /* Spacing */\n  border-radius: 9999px;     /* Pill shape */\n  font-weight: 700;          /* Bold font */\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Anatomy of a CSS Rule (Selectors, Properties & Values)\n\n* **तकनीकी विनिर्देश**: The anatomy of CSS rules: selector, declaration block, property name, colon separator, property value, and semicolon terminator.\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 3,
    "slug": "three-ways-to-insert-css-external-internal-inline",
    "title": "3 Ways to Insert CSS: External, Internal & Inline",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "Duckett HTML & CSS Chapter 10",
    "exercise": {
      "english": {
        "question": "Which method of adding CSS is considered the industry best practice for maintainability and browser caching?",
        "options": [
          "External Stylesheet (.css file via <link>)",
          "Inline style attribute",
          "Internal <style> block",
          "Writing CSS in JavaScript only"
        ],
        "correctAnswer": "External Stylesheet (.css file via <link>)",
        "hint": "External CSS files allow browsers to cache styles and apply uniform designs across hundreds of pages."
      },
      "hinglish": {
        "question": "वेबसाइट को व्यवस्थित और तेज़ रखने के लिए CSS जोड़ने का सबसे अच्छा तरीका कौन सा है?",
        "options": [
          "External Stylesheet (<link> टैग द्वारा .css फ़ाइल)",
          "Inline style attribute",
          "Internal <style> ब्लॉक",
          "जावास्क्रिप्ट में लिखना"
        ],
        "correctAnswer": "External Stylesheet (<link> टैग द्वारा .css फ़ाइल)",
        "hint": "अलग .css फ़ाइल बनाने से ब्राउज़र कैशिंग बेहतर होती है और कोड साफ रहता है।"
      },
      "hindi": {
        "question": "वेबसाइट को व्यवस्थित और तेज़ रखने के लिए CSS जोड़ने का सबसे अच्छा तरीका कौन सा है?",
        "options": [
          "External Stylesheet (<link> टैग द्वारा .css फ़ाइल)",
          "Inline style attribute",
          "Internal <style> ब्लॉक",
          "जावास्क्रिप्ट में लिखना"
        ],
        "correctAnswer": "External Stylesheet (<link> टैग द्वारा .css फ़ाइल)",
        "hint": "अलग .css फ़ाइल बनाने से ब्राउज़र कैशिंग बेहतर होती है और कोड साफ रहता है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: 3 Ways to Insert CSS: External, Internal & Inline!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **3 Ways to Insert CSS: External, Internal & Inline** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* External CSS is like buying clothes from a store that fit anyone. Inline style is like writing your name with a permanent marker directly on your forehead.\n* **Key Takeaway**: The 3 methods to include CSS in web pages: external .css file (<link>), internal header styles (<style>), and inline attributes (style='...'), with performance tradeoffs.\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n<!-- 1. External Stylesheet (Recommended for all projects) -->\n<link rel=\"stylesheet\" href=\"styles.css\">\n\n<!-- 2. Internal Styles (Page specific) -->\n<style>\n  .hero-title {\n    color: #04AA6D;\n    font-size: 2.5rem;\n  }\n</style>\n\n<!-- 3. Inline Style (Use sparingly for dynamic scripting) -->\n<p style=\"color: #38bdf8; font-weight: bold;\">\n  Inline styled text\n</p>\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** Why do senior developers hate inline styles? Because finding an inline style bug is like searching for a dropped needle in a dark server room! 🪡\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: 3 Ways to Insert CSS: External, Internal & Inline\n\nAn in-depth technical guide to **3 Ways to Insert CSS: External, Internal & Inline** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: The 3 methods to include CSS in web pages: external .css file (<link>), internal header styles (<style>), and inline attributes (style='...'), with performance tradeoffs.\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n<!-- 1. External Stylesheet (Recommended for all projects) -->\n<link rel=\"stylesheet\" href=\"styles.css\">\n\n<!-- 2. Internal Styles (Page specific) -->\n<style>\n  .hero-title {\n    color: #04AA6D;\n    font-size: 2.5rem;\n  }\n</style>\n\n<!-- 3. Inline Style (Use sparingly for dynamic scripting) -->\n<p style=\"color: #38bdf8; font-weight: bold;\">\n  Inline styled text\n</p>\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 3 Ways to Insert CSS: External, Internal & Inline Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **3 Ways to Insert CSS: External, Internal & Inline** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* External CSS is like buying clothes from a store that fit anyone. Inline style is like writing your name with a permanent marker directly on your forehead.\n* **Khas Baat**: The 3 methods to include CSS in web pages: external .css file (<link>), internal header styles (<style>), and inline attributes (style='...'), with performance tradeoffs.\n\n---\n\n### 💻 Code Example:\n```css\n<!-- 1. External Stylesheet (Recommended for all projects) -->\n<link rel=\"stylesheet\" href=\"styles.css\">\n\n<!-- 2. Internal Styles (Page specific) -->\n<style>\n  .hero-title {\n    color: #04AA6D;\n    font-size: 2.5rem;\n  }\n</style>\n\n<!-- 3. Inline Style (Use sparingly for dynamic scripting) -->\n<p style=\"color: #38bdf8; font-weight: bold;\">\n  Inline styled text\n</p>\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: 3 Ways to Insert CSS: External, Internal & Inline\n\n* **Core Architecture**: The 3 methods to include CSS in web pages: external .css file (<link>), internal header styles (<style>), and inline attributes (style='...'), with performance tradeoffs.\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: 3 Ways to Insert CSS: External, Internal & Inline!\n\nइस पाठ में हम **3 Ways to Insert CSS: External, Internal & Inline** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* External CSS is like buying clothes from a store that fit anyone. Inline style is like writing your name with a permanent marker directly on your forehead.\n* **मुख्य बिंदु**: The 3 methods to include CSS in web pages: external .css file (<link>), internal header styles (<style>), and inline attributes (style='...'), with performance tradeoffs.\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n<!-- 1. External Stylesheet (Recommended for all projects) -->\n<link rel=\"stylesheet\" href=\"styles.css\">\n\n<!-- 2. Internal Styles (Page specific) -->\n<style>\n  .hero-title {\n    color: #04AA6D;\n    font-size: 2.5rem;\n  }\n</style>\n\n<!-- 3. Inline Style (Use sparingly for dynamic scripting) -->\n<p style=\"color: #38bdf8; font-weight: bold;\">\n  Inline styled text\n</p>\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: 3 Ways to Insert CSS: External, Internal & Inline\n\n* **तकनीकी विनिर्देश**: The 3 methods to include CSS in web pages: external .css file (<link>), internal header styles (<style>), and inline attributes (style='...'), with performance tradeoffs.\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 4,
    "slug": "universal-type-element-grouping-selectors",
    "title": "Universal (*), Type & Grouping Selectors",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "MDN CSS Selectors Guide",
    "exercise": {
      "english": {
        "question": "Which CSS selector targets every single paragraph <p> element on the webpage?",
        "options": [
          "p { ... }",
          ".p { ... }",
          "#p { ... }",
          "*p { ... }"
        ],
        "correctAnswer": "p { ... }",
        "hint": "Element / Type selectors use the raw tag name directly without dots or hashes."
      },
      "hinglish": {
        "question": "पेज के सभी पैराग्राफ <p> को स्टाइल करने के लिए कौन सा सिलेक्टर लिखेंगे?",
        "options": [
          "p { ... }",
          ".p { ... }",
          "#p { ... }",
          "*p { ... }"
        ],
        "correctAnswer": "p { ... }",
        "hint": "टैग के नाम के आगे कोई डॉट या हैश नहीं लगाया जाता।"
      },
      "hindi": {
        "question": "पेज के सभी पैराग्राफ <p> को स्टाइल करने के लिए कौन सा सिलेक्टर लिखेंगे?",
        "options": [
          "p { ... }",
          ".p { ... }",
          "#p { ... }",
          "*p { ... }"
        ],
        "correctAnswer": "p { ... }",
        "hint": "टैग के नाम के आगे कोई डॉट या हैश नहीं लगाया जाता।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Universal (*), Type & Grouping Selectors!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **Universal (*), Type & Grouping Selectors** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* Element selectors are like school uniforms: all students in grade 1 (all <p> tags) wear the exact same uniform by default.\n* **Key Takeaway**: Targeting standard HTML elements directly by tag name to establish baseline typography, resets, and layout tags.\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* Type / Element Selectors */\nbody {\n  background-color: #17181c;\n  color: #f8fafc;\n}\n\nh1 {\n  color: #04AA6D;\n  font-size: 2.25rem;\n  margin-bottom: 1rem;\n}\n\np {\n  color: #cbd5e1;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n\na {\n  color: #04AA6D;\n  text-decoration: underline;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** An element selector walks into a room and shouts 'All paragraphs stand up!' Every single paragraph complies without question. 📢\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: Universal (*), Type & Grouping Selectors\n\nAn in-depth technical guide to **Universal (*), Type & Grouping Selectors** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: Targeting standard HTML elements directly by tag name to establish baseline typography, resets, and layout tags.\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* Type / Element Selectors */\nbody {\n  background-color: #17181c;\n  color: #f8fafc;\n}\n\nh1 {\n  color: #04AA6D;\n  font-size: 2.25rem;\n  margin-bottom: 1rem;\n}\n\np {\n  color: #cbd5e1;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n\na {\n  color: #04AA6D;\n  text-decoration: underline;\n}\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 Universal (*), Type & Grouping Selectors Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **Universal (*), Type & Grouping Selectors** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* Element selectors are like school uniforms: all students in grade 1 (all <p> tags) wear the exact same uniform by default.\n* **Khas Baat**: Targeting standard HTML elements directly by tag name to establish baseline typography, resets, and layout tags.\n\n---\n\n### 💻 Code Example:\n```css\n/* Type / Element Selectors */\nbody {\n  background-color: #17181c;\n  color: #f8fafc;\n}\n\nh1 {\n  color: #04AA6D;\n  font-size: 2.25rem;\n  margin-bottom: 1rem;\n}\n\np {\n  color: #cbd5e1;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n\na {\n  color: #04AA6D;\n  text-decoration: underline;\n}\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: Universal (*), Type & Grouping Selectors\n\n* **Core Architecture**: Targeting standard HTML elements directly by tag name to establish baseline typography, resets, and layout tags.\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Universal (*), Type & Grouping Selectors!\n\nइस पाठ में हम **Universal (*), Type & Grouping Selectors** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* Element selectors are like school uniforms: all students in grade 1 (all <p> tags) wear the exact same uniform by default.\n* **मुख्य बिंदु**: Targeting standard HTML elements directly by tag name to establish baseline typography, resets, and layout tags.\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* Type / Element Selectors */\nbody {\n  background-color: #17181c;\n  color: #f8fafc;\n}\n\nh1 {\n  color: #04AA6D;\n  font-size: 2.25rem;\n  margin-bottom: 1rem;\n}\n\np {\n  color: #cbd5e1;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n\na {\n  color: #04AA6D;\n  text-decoration: underline;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Universal (*), Type & Grouping Selectors\n\n* **तकनीकी विनिर्देश**: Targeting standard HTML elements directly by tag name to establish baseline typography, resets, and layout tags.\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 5,
    "slug": "class-selectors-vs-id-selectors-css",
    "title": "Class Selectors (.class) vs. ID Selectors (#id)",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "Duckett HTML & CSS Chapter 11",
    "exercise": {
      "english": {
        "question": "Which character is used at the start of a CSS selector to define a class name?",
        "options": [
          ". (Period / Dot)",
          "# (Hash)",
          "@ (At sign)",
          "* (Asterisk)"
        ],
        "correctAnswer": ". (Period / Dot)",
        "hint": "Classes in CSS always begin with a dot (e.g. .card, .btn-primary)."
      },
      "hinglish": {
        "question": "CSS में क्लास सिलेक्टर को किस चिन्ह से शुरू किया जाता है?",
        "options": [
          ". (डॉट / बिंदु)",
          "# (हैश)",
          "@ (एट)",
          "* (तारा)"
        ],
        "correctAnswer": ". (डॉट / बिंदु)",
        "hint": "क्लास नाम के पहले डॉट (.) लगाया जाता है जैसे .btn या .card।"
      },
      "hindi": {
        "question": "CSS में क्लास सिलेक्टर को किस चिन्ह से शुरू किया जाता है?",
        "options": [
          ". (डॉट / बिंदु)",
          "# (हैश)",
          "@ (एट)",
          "* (तारा)"
        ],
        "correctAnswer": ". (डॉट / बिंदु)",
        "hint": "क्लास नाम के पहले डॉट (.) लगाया जाता है जैसे .btn या .card।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Class Selectors (.class) vs. ID Selectors (#id)!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **Class Selectors (.class) vs. ID Selectors (#id)** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* A class selector is like a VIP badge: anyone wearing the 'badge' (.btn-primary) gets special privileges, no matter who they are.\n* **Key Takeaway**: Creating modular, reusable class selectors prefixed with a period (.), allowing multiple elements on the same page to share styling.\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* Reusable Component Classes */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #04AA6D;\n  color: #ffffff;\n  border: 1px solid #04AA6D;\n}\n\n.card {\n  background-color: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 20px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** Why do HTML elements love CSS classes? Because they have class! 🎩\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: Class Selectors (.class) vs. ID Selectors (#id)\n\nAn in-depth technical guide to **Class Selectors (.class) vs. ID Selectors (#id)** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: Creating modular, reusable class selectors prefixed with a period (.), allowing multiple elements on the same page to share styling.\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* Reusable Component Classes */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #04AA6D;\n  color: #ffffff;\n  border: 1px solid #04AA6D;\n}\n\n.card {\n  background-color: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 20px;\n}\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 Class Selectors (.class) vs. ID Selectors (#id) Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **Class Selectors (.class) vs. ID Selectors (#id)** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* A class selector is like a VIP badge: anyone wearing the 'badge' (.btn-primary) gets special privileges, no matter who they are.\n* **Khas Baat**: Creating modular, reusable class selectors prefixed with a period (.), allowing multiple elements on the same page to share styling.\n\n---\n\n### 💻 Code Example:\n```css\n/* Reusable Component Classes */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #04AA6D;\n  color: #ffffff;\n  border: 1px solid #04AA6D;\n}\n\n.card {\n  background-color: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 20px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: Class Selectors (.class) vs. ID Selectors (#id)\n\n* **Core Architecture**: Creating modular, reusable class selectors prefixed with a period (.), allowing multiple elements on the same page to share styling.\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Class Selectors (.class) vs. ID Selectors (#id)!\n\nइस पाठ में हम **Class Selectors (.class) vs. ID Selectors (#id)** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* A class selector is like a VIP badge: anyone wearing the 'badge' (.btn-primary) gets special privileges, no matter who they are.\n* **मुख्य बिंदु**: Creating modular, reusable class selectors prefixed with a period (.), allowing multiple elements on the same page to share styling.\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* Reusable Component Classes */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background-color: #04AA6D;\n  color: #ffffff;\n  border: 1px solid #04AA6D;\n}\n\n.card {\n  background-color: #1e293b;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 20px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Class Selectors (.class) vs. ID Selectors (#id)\n\n* **तकनीकी विनिर्देश**: Creating modular, reusable class selectors prefixed with a period (.), allowing multiple elements on the same page to share styling.\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 6,
    "slug": "css-cascade-inheritance-and-specificity-rules",
    "title": "The Cascade, Inheritance & Specificity Rules",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "CSS: The Definitive Guide Chapter 3",
    "exercise": {
      "english": {
        "question": "How many elements on an HTML page can legally share the exact same id attribute according to W3C standards?",
        "options": [
          "Exactly 1 unique element",
          "Up to 5 elements",
          "Any number of elements",
          "Only header and footer"
        ],
        "correctAnswer": "Exactly 1 unique element",
        "hint": "An ID must be 100% unique per HTML document."
      },
      "hinglish": {
        "question": "एक HTML पेज पर एक ही ID कितने एलिमेंट्स को दी जा सकती है?",
        "options": [
          "सिर्फ 1 यूनिक एलिमेंट को",
          "5 एलिमेंट्स को",
          "जितने मर्जी उतने",
          "सिर्फ 2 को"
        ],
        "correctAnswer": "सिर्फ 1 यूनिक एलिमेंट को",
        "hint": "ID हमेशा पूरे पेज में यूनिक (एकल) होनी चाहिए।"
      },
      "hindi": {
        "question": "एक HTML पेज पर एक ही ID कितने एलिमेंट्स को दी जा सकती है?",
        "options": [
          "सिर्फ 1 यूनिक एलिमेंट को",
          "5 एलिमेंट्स को",
          "जितने मर्जी उतने",
          "सिर्फ 2 को"
        ],
        "correctAnswer": "सिर्फ 1 यूनिक एलिमेंट को",
        "hint": "ID हमेशा पूरे पेज में यूनिक (एकल) होनी चाहिए।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: The Cascade, Inheritance & Specificity Rules!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **The Cascade, Inheritance & Specificity Rules** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* An ID selector is like an Aadhaar Card or Passport Number: it must belong to exactly ONE unique person on the entire page.\n* **Key Takeaway**: Targeting unique individual elements using ID selectors prefixed with a hash (#), and understanding why IDs have high specificity.\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* Unique ID Selectors */\n#main-navbar {\n  position: sticky;\n  top: 0;\n  background-color: #0b0f19;\n  border-bottom: 1px solid #1e293b;\n  z-index: 1000;\n}\n\n#hero-cta-button {\n  background: linear-gradient(135deg, #04AA6D, #008753);\n  color: #ffffff;\n  box-shadow: 0 4px 20px rgba(4, 170, 109, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** Why should you never duplicate an ID in HTML? Because the browser parser will get an identity crisis! 🆔\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: The Cascade, Inheritance & Specificity Rules\n\nAn in-depth technical guide to **The Cascade, Inheritance & Specificity Rules** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: Targeting unique individual elements using ID selectors prefixed with a hash (#), and understanding why IDs have high specificity.\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* Unique ID Selectors */\n#main-navbar {\n  position: sticky;\n  top: 0;\n  background-color: #0b0f19;\n  border-bottom: 1px solid #1e293b;\n  z-index: 1000;\n}\n\n#hero-cta-button {\n  background: linear-gradient(135deg, #04AA6D, #008753);\n  color: #ffffff;\n  box-shadow: 0 4px 20px rgba(4, 170, 109, 0.4);\n}\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 The Cascade, Inheritance & Specificity Rules Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **The Cascade, Inheritance & Specificity Rules** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* An ID selector is like an Aadhaar Card or Passport Number: it must belong to exactly ONE unique person on the entire page.\n* **Khas Baat**: Targeting unique individual elements using ID selectors prefixed with a hash (#), and understanding why IDs have high specificity.\n\n---\n\n### 💻 Code Example:\n```css\n/* Unique ID Selectors */\n#main-navbar {\n  position: sticky;\n  top: 0;\n  background-color: #0b0f19;\n  border-bottom: 1px solid #1e293b;\n  z-index: 1000;\n}\n\n#hero-cta-button {\n  background: linear-gradient(135deg, #04AA6D, #008753);\n  color: #ffffff;\n  box-shadow: 0 4px 20px rgba(4, 170, 109, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: The Cascade, Inheritance & Specificity Rules\n\n* **Core Architecture**: Targeting unique individual elements using ID selectors prefixed with a hash (#), and understanding why IDs have high specificity.\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: The Cascade, Inheritance & Specificity Rules!\n\nइस पाठ में हम **The Cascade, Inheritance & Specificity Rules** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* An ID selector is like an Aadhaar Card or Passport Number: it must belong to exactly ONE unique person on the entire page.\n* **मुख्य बिंदु**: Targeting unique individual elements using ID selectors prefixed with a hash (#), and understanding why IDs have high specificity.\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* Unique ID Selectors */\n#main-navbar {\n  position: sticky;\n  top: 0;\n  background-color: #0b0f19;\n  border-bottom: 1px solid #1e293b;\n  z-index: 1000;\n}\n\n#hero-cta-button {\n  background: linear-gradient(135deg, #04AA6D, #008753);\n  color: #ffffff;\n  box-shadow: 0 4px 20px rgba(4, 170, 109, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: The Cascade, Inheritance & Specificity Rules\n\n* **तकनीकी विनिर्देश**: Targeting unique individual elements using ID selectors prefixed with a hash (#), and understanding why IDs have high specificity.\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 7,
    "slug": "css-important-rule-specificity-calculator",
    "title": "The !important Rule & Specificity Calculator",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "MDN CSS Specificity Guide",
    "exercise": {
      "english": {
        "question": "Which character is used to separate multiple selectors when grouping them to share identical CSS styles?",
        "options": [
          ", (Comma)",
          "; (Semicolon)",
          "+ (Plus)",
          "> (Greater than)"
        ],
        "correctAnswer": ", (Comma)",
        "hint": "Use commas to group selectors, such as: h1, h2, h3 { color: #fff; }"
      },
      "hinglish": {
        "question": "एक साथ कई सेलेक्टर्स को एक ही स्टाइल देने के लिए उनके बीच क्या लगाते हैं?",
        "options": [
          ", (कॉमा / अल्पविराम)",
          "; (सेमीकोलन)",
          "+ (प्लस)",
          "> (एरो)"
        ],
        "correctAnswer": ", (कॉमा / अल्पविराम)",
        "hint": "कॉमा लगाकर हम h1, h2, h3 को एक साथ लिख सकते हैं।"
      },
      "hindi": {
        "question": "एक साथ कई सेलेक्टर्स को एक ही स्टाइल देने के लिए उनके बीच क्या लगाते हैं?",
        "options": [
          ", (कॉमा / अल्पविराम)",
          "; (सेमीकोलन)",
          "+ (प्लस)",
          "> (एरो)"
        ],
        "correctAnswer": ", (कॉमा / अल्पविराम)",
        "hint": "कॉमा लगाकर हम h1, h2, h3 को एक साथ लिख सकते हैं।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: The !important Rule & Specificity Calculator!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **The !important Rule & Specificity Calculator** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* Grouping is like inviting 5 friends with one text message instead of sending 5 identical messages separately.\n* **Key Takeaway**: Combining multiple selectors with commas (,) to share declarations and using the Universal Selector (*) for global box resets.\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* Universal Box-Sizing Reset */\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Grouping Selectors */\nh1, h2, h3, h4, h5, h6 {\n  color: #ffffff;\n  font-family: 'Outfit', sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** What is the universal selector's favorite song? 'Everything, Everywhere, All at Once!' 🌌\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: The !important Rule & Specificity Calculator\n\nAn in-depth technical guide to **The !important Rule & Specificity Calculator** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: Combining multiple selectors with commas (,) to share declarations and using the Universal Selector (*) for global box resets.\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* Universal Box-Sizing Reset */\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Grouping Selectors */\nh1, h2, h3, h4, h5, h6 {\n  color: #ffffff;\n  font-family: 'Outfit', sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 The !important Rule & Specificity Calculator Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **The !important Rule & Specificity Calculator** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* Grouping is like inviting 5 friends with one text message instead of sending 5 identical messages separately.\n* **Khas Baat**: Combining multiple selectors with commas (,) to share declarations and using the Universal Selector (*) for global box resets.\n\n---\n\n### 💻 Code Example:\n```css\n/* Universal Box-Sizing Reset */\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Grouping Selectors */\nh1, h2, h3, h4, h5, h6 {\n  color: #ffffff;\n  font-family: 'Outfit', sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: The !important Rule & Specificity Calculator\n\n* **Core Architecture**: Combining multiple selectors with commas (,) to share declarations and using the Universal Selector (*) for global box resets.\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: The !important Rule & Specificity Calculator!\n\nइस पाठ में हम **The !important Rule & Specificity Calculator** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* Grouping is like inviting 5 friends with one text message instead of sending 5 identical messages separately.\n* **मुख्य बिंदु**: Combining multiple selectors with commas (,) to share declarations and using the Universal Selector (*) for global box resets.\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* Universal Box-Sizing Reset */\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Grouping Selectors */\nh1, h2, h3, h4, h5, h6 {\n  color: #ffffff;\n  font-family: 'Outfit', sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: The !important Rule & Specificity Calculator\n\n* **तकनीकी विनिर्देश**: Combining multiple selectors with commas (,) to share declarations and using the Universal Selector (*) for global box resets.\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 8,
    "slug": "css-combinators-child-descendant-sibling-selectors",
    "title": "Child, Descendant & Sibling Combinators",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "CSS: The Definitive Guide Chapter 2",
    "exercise": {
      "english": {
        "question": "Which CSS combinator selects only the direct, immediate children of a parent element?",
        "options": [
          "> (Child combinator)",
          "  (Space descendant)",
          "+ (Adjacent sibling)",
          "~ (General sibling)"
        ],
        "correctAnswer": "> (Child combinator)",
        "hint": "The > symbol targets only direct 1st-level children."
      },
      "hinglish": {
        "question": "किसी पैरेंट के सिर्फ सीधे (direct) बच्चों को सिलेक्ट करने के लिए कौन सा चिन्ह इस्तेमाल होता है?",
        "options": [
          "> (चाइल्ड कॉम्बिनेटर)",
          "  (स्पेस)",
          "+ (प्लस)",
          "~ (टिल्ड)"
        ],
        "correctAnswer": "> (चाइल्ड कॉम्बिनेटर)",
        "hint": "चिन्ह '>' केवल डायरेक्ट चाइल्ड एलिमेंट्स को टारगेट करता है।"
      },
      "hindi": {
        "question": "किसी पैरेंट के सिर्फ सीधे (direct) बच्चों को सिलेक्ट करने के लिए कौन सा चिन्ह इस्तेमाल होता है?",
        "options": [
          "> (चाइल्ड कॉम्बिनेटर)",
          "  (स्पेस)",
          "+ (प्लस)",
          "~ (टिल्ड)"
        ],
        "correctAnswer": "> (चाइल्ड कॉम्बिनेटर)",
        "hint": "चिन्ह '>' केवल डायरेक्ट चाइल्ड एलिमेंट्स को टारगेट करता है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Child, Descendant & Sibling Combinators!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **Child, Descendant & Sibling Combinators** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* Direct child (>) is your son or daughter. Descendant (space) includes your children, grandchildren, and great-grandchildren!\n* **Key Takeaway**: Selecting elements based on relational hierarchy: Descendant (space), Direct Child (>), Adjacent Sibling (+), and General Sibling (~).\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* 1. Descendant Selector (any nested level) */\nnav a {\n  color: #94a3b8;\n}\n\n/* 2. Direct Child Selector (only immediate children) */\nul.menu > li {\n  list-style: none;\n  display: inline-block;\n}\n\n/* 3. Adjacent Sibling (immediately follows) */\nh2 + p {\n  font-size: 1.15rem;\n  color: #38bdf8;\n}\n\n/* 4. General Sibling (any sibling after) */\nh2 ~ p {\n  line-height: 1.8;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** Why was the child selector (> ) so picky? Because it refused to deal with distant descendants! 👶\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: Child, Descendant & Sibling Combinators\n\nAn in-depth technical guide to **Child, Descendant & Sibling Combinators** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: Selecting elements based on relational hierarchy: Descendant (space), Direct Child (>), Adjacent Sibling (+), and General Sibling (~).\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* 1. Descendant Selector (any nested level) */\nnav a {\n  color: #94a3b8;\n}\n\n/* 2. Direct Child Selector (only immediate children) */\nul.menu > li {\n  list-style: none;\n  display: inline-block;\n}\n\n/* 3. Adjacent Sibling (immediately follows) */\nh2 + p {\n  font-size: 1.15rem;\n  color: #38bdf8;\n}\n\n/* 4. General Sibling (any sibling after) */\nh2 ~ p {\n  line-height: 1.8;\n}\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 Child, Descendant & Sibling Combinators Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **Child, Descendant & Sibling Combinators** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* Direct child (>) is your son or daughter. Descendant (space) includes your children, grandchildren, and great-grandchildren!\n* **Khas Baat**: Selecting elements based on relational hierarchy: Descendant (space), Direct Child (>), Adjacent Sibling (+), and General Sibling (~).\n\n---\n\n### 💻 Code Example:\n```css\n/* 1. Descendant Selector (any nested level) */\nnav a {\n  color: #94a3b8;\n}\n\n/* 2. Direct Child Selector (only immediate children) */\nul.menu > li {\n  list-style: none;\n  display: inline-block;\n}\n\n/* 3. Adjacent Sibling (immediately follows) */\nh2 + p {\n  font-size: 1.15rem;\n  color: #38bdf8;\n}\n\n/* 4. General Sibling (any sibling after) */\nh2 ~ p {\n  line-height: 1.8;\n}\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: Child, Descendant & Sibling Combinators\n\n* **Core Architecture**: Selecting elements based on relational hierarchy: Descendant (space), Direct Child (>), Adjacent Sibling (+), and General Sibling (~).\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Child, Descendant & Sibling Combinators!\n\nइस पाठ में हम **Child, Descendant & Sibling Combinators** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* Direct child (>) is your son or daughter. Descendant (space) includes your children, grandchildren, and great-grandchildren!\n* **मुख्य बिंदु**: Selecting elements based on relational hierarchy: Descendant (space), Direct Child (>), Adjacent Sibling (+), and General Sibling (~).\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* 1. Descendant Selector (any nested level) */\nnav a {\n  color: #94a3b8;\n}\n\n/* 2. Direct Child Selector (only immediate children) */\nul.menu > li {\n  list-style: none;\n  display: inline-block;\n}\n\n/* 3. Adjacent Sibling (immediately follows) */\nh2 + p {\n  font-size: 1.15rem;\n  color: #38bdf8;\n}\n\n/* 4. General Sibling (any sibling after) */\nh2 ~ p {\n  line-height: 1.8;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Child, Descendant & Sibling Combinators\n\n* **तकनीकी विनिर्देश**: Selecting elements based on relational hierarchy: Descendant (space), Direct Child (>), Adjacent Sibling (+), and General Sibling (~).\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 9,
    "slug": "css-attribute-selectors-syntax-guide",
    "title": "Attribute Selectors ([attr], [attr='val'], [attr^='val'])",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "MDN CSS Attribute Selectors",
    "exercise": {
      "english": {
        "question": "Which CSS selector has the highest specificity score and overrides standard class selectors?",
        "options": [
          "#id-selector (100 pts)",
          ".class-selector (10 pts)",
          "element-selector (1 pt)",
          "* universal (0 pts)"
        ],
        "correctAnswer": "#id-selector (100 pts)",
        "hint": "IDs carry a specificity weight of 100, which beats classes (10) and tags (1)."
      },
      "hinglish": {
        "question": "इनमें से किस सिलेक्टर की स्पेसिफिसिटी (प्राथमिकता) सबसे ज़्यादा होती है?",
        "options": [
          "#id सिलेक्टर (100 अंक)",
          ".class सिलेक्टर (10 अंक)",
          "टैग सिलेक्टर (1 अंक)",
          "* यूनिवर्सल (0 अंक)"
        ],
        "correctAnswer": "#id सिलेक्टर (100 अंक)",
        "hint": "ID सिलेक्टर का स्पेसिफिसिटी स्कोर क्लास और टैग दोनों से बहुत बड़ा होता है।"
      },
      "hindi": {
        "question": "इनमें से किस सिलेक्टर की स्पेसिफिसिटी (प्राथमिकता) सबसे ज़्यादा होती है?",
        "options": [
          "#id सिलेक्टर (100 अंक)",
          ".class सिलेक्टर (10 अंक)",
          "टैग सिलेक्टर (1 अंक)",
          "* यूनिवर्सल (0 अंक)"
        ],
        "correctAnswer": "#id सिलेक्टर (100 अंक)",
        "hint": "ID सिलेक्टर का स्पेसिफिसिटी स्कोर क्लास और टैग दोनों से बहुत बड़ा होता है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Attribute Selectors ([attr], [attr='val'], [attr^='val'])!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **Attribute Selectors ([attr], [attr='val'], [attr^='val'])** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* Specificity is like military rank: A General (Inline 1000) outranks a Colonel (ID 100), who outranks a Captain (Class 10), who outranks a Private (Tag 1).\n* **Key Takeaway**: How browsers resolve style conflicts using the specificity formula: Inline (1000) > ID (100) > Class/Attribute/Pseudo-class (10) > Element (1).\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* Specificity Point Score Examples */\n\n/* Score: 0-0-0-1 (Element) */\np {\n  color: #94a3b8;\n}\n\n/* Score: 0-0-1-0 (Class) -> WINS over element */\n.lead-text {\n  color: #38bdf8;\n}\n\n/* Score: 0-1-0-0 (ID) -> WINS over class */\n#hero-intro {\n  color: #04AA6D;\n}\n\n/* Inline style on HTML element (1-0-0-0) -> WINS over ID */\n/* <p id=\"hero-intro\" class=\"lead-text\" style=\"color: #f59e0b;\"> */\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** A class and an ID get into a fight. The ID wins without throwing a single punch because its specificity score is 100! 🥊\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: Attribute Selectors ([attr], [attr='val'], [attr^='val'])\n\nAn in-depth technical guide to **Attribute Selectors ([attr], [attr='val'], [attr^='val'])** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: How browsers resolve style conflicts using the specificity formula: Inline (1000) > ID (100) > Class/Attribute/Pseudo-class (10) > Element (1).\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* Specificity Point Score Examples */\n\n/* Score: 0-0-0-1 (Element) */\np {\n  color: #94a3b8;\n}\n\n/* Score: 0-0-1-0 (Class) -> WINS over element */\n.lead-text {\n  color: #38bdf8;\n}\n\n/* Score: 0-1-0-0 (ID) -> WINS over class */\n#hero-intro {\n  color: #04AA6D;\n}\n\n/* Inline style on HTML element (1-0-0-0) -> WINS over ID */\n/* <p id=\"hero-intro\" class=\"lead-text\" style=\"color: #f59e0b;\"> */\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 Attribute Selectors ([attr], [attr='val'], [attr^='val']) Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **Attribute Selectors ([attr], [attr='val'], [attr^='val'])** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* Specificity is like military rank: A General (Inline 1000) outranks a Colonel (ID 100), who outranks a Captain (Class 10), who outranks a Private (Tag 1).\n* **Khas Baat**: How browsers resolve style conflicts using the specificity formula: Inline (1000) > ID (100) > Class/Attribute/Pseudo-class (10) > Element (1).\n\n---\n\n### 💻 Code Example:\n```css\n/* Specificity Point Score Examples */\n\n/* Score: 0-0-0-1 (Element) */\np {\n  color: #94a3b8;\n}\n\n/* Score: 0-0-1-0 (Class) -> WINS over element */\n.lead-text {\n  color: #38bdf8;\n}\n\n/* Score: 0-1-0-0 (ID) -> WINS over class */\n#hero-intro {\n  color: #04AA6D;\n}\n\n/* Inline style on HTML element (1-0-0-0) -> WINS over ID */\n/* <p id=\"hero-intro\" class=\"lead-text\" style=\"color: #f59e0b;\"> */\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: Attribute Selectors ([attr], [attr='val'], [attr^='val'])\n\n* **Core Architecture**: How browsers resolve style conflicts using the specificity formula: Inline (1000) > ID (100) > Class/Attribute/Pseudo-class (10) > Element (1).\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Attribute Selectors ([attr], [attr='val'], [attr^='val'])!\n\nइस पाठ में हम **Attribute Selectors ([attr], [attr='val'], [attr^='val'])** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* Specificity is like military rank: A General (Inline 1000) outranks a Colonel (ID 100), who outranks a Captain (Class 10), who outranks a Private (Tag 1).\n* **मुख्य बिंदु**: How browsers resolve style conflicts using the specificity formula: Inline (1000) > ID (100) > Class/Attribute/Pseudo-class (10) > Element (1).\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* Specificity Point Score Examples */\n\n/* Score: 0-0-0-1 (Element) */\np {\n  color: #94a3b8;\n}\n\n/* Score: 0-0-1-0 (Class) -> WINS over element */\n.lead-text {\n  color: #38bdf8;\n}\n\n/* Score: 0-1-0-0 (ID) -> WINS over class */\n#hero-intro {\n  color: #04AA6D;\n}\n\n/* Inline style on HTML element (1-0-0-0) -> WINS over ID */\n/* <p id=\"hero-intro\" class=\"lead-text\" style=\"color: #f59e0b;\"> */\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Attribute Selectors ([attr], [attr='val'], [attr^='val'])\n\n* **तकनीकी विनिर्देश**: How browsers resolve style conflicts using the specificity formula: Inline (1000) > ID (100) > Class/Attribute/Pseudo-class (10) > Element (1).\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 10,
    "slug": "inspecting-css-live-editing-chrome-devtools",
    "title": "Inspecting CSS & Live Editing with Chrome DevTools",
    "unit": "Unit 1: CSS Fundamentals, Selectors & The Cascade",
    "bookRef": "Chrome DevTools Official Guide",
    "exercise": {
      "english": {
        "question": "What does adding '!important' to a CSS property value do?",
        "options": [
          "Overrides all normal specificity calculations",
          "Speeds up browser rendering",
          "Creates a CSS variable",
          "Validates CSS syntax"
        ],
        "correctAnswer": "Overrides all normal specificity calculations",
        "hint": "!important forces the declaration to take precedence over almost all other rules."
      },
      "hinglish": {
        "question": "CSS प्रॉपर्टी के साथ '!important' लगाने से क्या होता है?",
        "options": [
          "यह सामान्य स्पेसिफिसिटी नियमों को ओवरराइड करके सबसे ऊपर लागू होता है",
          "पेज तेज़ी से लोड होता है",
          "वेरिएबल बन जाता है",
          "सिंटैक्स चेक करता है"
        ],
        "correctAnswer": "यह सामान्य स्पेसिफिसिटी नियमों को ओवरराइड करके सबसे ऊपर लागू होता है",
        "hint": "!important किसी भी सामान्य स्टाइल को ओवरराइड करने की ताक़त रखता है।"
      },
      "hindi": {
        "question": "CSS प्रॉपर्टी के साथ '!important' लगाने से क्या होता है?",
        "options": [
          "यह सामान्य स्पेसिफिसिटी नियमों को ओवरराइड करके सबसे ऊपर लागू होता है",
          "पेज तेज़ी से लोड होता है",
          "वेरिएबल बन जाता है",
          "सिंटैक्स चेक करता है"
        ],
        "correctAnswer": "यह सामान्य स्पेसिफिसिटी नियमों को ओवरराइड करके सबसे ऊपर लागू होता है",
        "hint": "!important किसी भी सामान्य स्टाइल को ओवरराइड करने की ताक़त रखता है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Inspecting CSS & Live Editing with Chrome DevTools!\n\nWelcome to this interactive CSS lesson! Today, we are mastering **Inspecting CSS & Live Editing with Chrome DevTools** and learning how it empowers you to build stunning, modern web experiences.\n\n---\n\n### 🌟 Real-World Story & Analogy:\n* !important is like using a nuclear bomb to kill a mosquito in your kitchen. It solves the problem immediately, but leaves permanent radiation in your codebase.\n* **Key Takeaway**: The !important directive, how it overrides normal specificity, when it is appropriate (utility classes/dark mode), and why overusing it damages codebase health.\n\n---\n\n### 💻 Complete, Working Code Example:\n```css\n/* Standard Specificity */\n#profile-card p {\n  color: #94a3b8;\n}\n\n/* Overriding with !important (Use sparingly!) */\n.text-danger {\n  color: #ef4444 !important;\n}\n\n/* Legitimate Use Case: Accessibility High Contrast Overrides */\n@media (forced-colors: active) {\n  .theme-btn {\n    border: 2px solid ButtonText !important;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open your project in VS Code (`code .`).\n2. Open `styles.css` and paste the code above.\n3. Save with `Ctrl + S` and inspect the live preview with **Live Server** (`http://127.0.0.1:5500`).\n4. Press `F12` on 🪟 Windows 11 to open DevTools and experiment live with property values!\n\n---\n\n> 💡 **Developer Joke:** Why do developers cry when reading legacy CSS? Because line 400 has !important, and line 800 has !important !important! 😭\n\n> ⊞ **Windows 11 Pro Tip:** Use `Alt + Tab` to switch instantly between VS Code and your browser preview for high-speed frontend development!",
      "pro": "### 🚀 Professional Architecture: Inspecting CSS & Live Editing with Chrome DevTools\n\nAn in-depth technical guide to **Inspecting CSS & Live Editing with Chrome DevTools** in accordance with W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Engine Mechanics & Performance\n* **Rendering Pipeline**: The !important directive, how it overrides normal specificity, when it is appropriate (utility classes/dark mode), and why overusing it damages codebase health.\n* **GPU Compositing**: Optimizes rendering passes without triggering costly full-document reflows.\n\n---\n\n### 2. Production Code Standard:\n```css\n/* Standard Specificity */\n#profile-card p {\n  color: #94a3b8;\n}\n\n/* Overriding with !important (Use sparingly!) */\n.text-danger {\n  color: #ef4444 !important;\n}\n\n/* Legitimate Use Case: Accessibility High Contrast Overrides */\n@media (forced-colors: active) {\n  .theme-btn {\n    border: 2px solid ButtonText !important;\n  }\n}\n```\n\n---\n\n### 3. Accessibility & Enterprise Best Practices\n* Adheres to **WCAG 2.1 AA** standards with accessible contrast ratios and readable typography.\n* Engineered for seamless cross-platform performance across 🪟 Windows 11, macOS, Android, and iOS."
    },
    "hinglish": {
      "kid": "### 🎨 Inspecting CSS & Live Editing with Chrome DevTools Seekhein!\n\nIs practical CSS lesson me aapka swagat hai! Aaj hum **Inspecting CSS & Live Editing with Chrome DevTools** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, stylish look deta hai.\n\n---\n\n### 🌟 Real-World Kahani & Analogy:\n* !important is like using a nuclear bomb to kill a mosquito in your kitchen. It solves the problem immediately, but leaves permanent radiation in your codebase.\n* **Khas Baat**: The !important directive, how it overrides normal specificity, when it is appropriate (utility classes/dark mode), and why overusing it damages codebase health.\n\n---\n\n### 💻 Code Example:\n```css\n/* Standard Specificity */\n#profile-card p {\n  color: #94a3b8;\n}\n\n/* Overriding with !important (Use sparingly!) */\n.text-danger {\n  color: #ef4444 !important;\n}\n\n/* Legitimate Use Case: Accessibility High Contrast Overrides */\n@media (forced-colors: active) {\n  .theme-btn {\n    border: 2px solid ButtonText !important;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Step-by-Step Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye code likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant output dekhein!\n4. `F12` dabakar DevTools Inspector me live property change karke test karein.",
      "pro": "### 🚀 Technical Architecture: Inspecting CSS & Live Editing with Chrome DevTools\n\n* **Core Architecture**: The !important directive, how it overrides normal specificity, when it is appropriate (utility classes/dark mode), and why overusing it damages codebase health.\n* **Production Standards**: Clean CSS design tokens, zero specificity conflicts, aur GPU accelerated visual rendering."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Inspecting CSS & Live Editing with Chrome DevTools!\n\nइस पाठ में हम **Inspecting CSS & Live Editing with Chrome DevTools** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 🌟 वास्तविक जीवन का उदाहरण:\n* !important is like using a nuclear bomb to kill a mosquito in your kitchen. It solves the problem immediately, but leaves permanent radiation in your codebase.\n* **मुख्य बिंदु**: The !important directive, how it overrides normal specificity, when it is appropriate (utility classes/dark mode), and why overusing it damages codebase health.\n\n---\n\n### 💻 पूरा कोड उदाहरण:\n```css\n/* Standard Specificity */\n#profile-card p {\n  color: #94a3b8;\n}\n\n/* Overriding with !important (Use sparingly!) */\n.text-danger {\n  color: #ef4444 !important;\n}\n\n/* Legitimate Use Case: Accessibility High Contrast Overrides */\n@media (forced-colors: active) {\n  .theme-btn {\n    border: 2px solid ButtonText !important;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में `F12` दबाकर DevTools खोलें और लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Inspecting CSS & Live Editing with Chrome DevTools\n\n* **तकनीकी विनिर्देश**: The !important directive, how it overrides normal specificity, when it is appropriate (utility classes/dark mode), and why overusing it damages codebase health.\n* **मानक**: W3C मानक, उच्च प्रदर्शन और WCAG 2.1 एक्सेसिबिलिटी अनुपालन।"
    }
  },
  {
    "id": 11,
    "slug": "css-color-formats-named-hex-rgb-rgba",
    "title": "Color Formats: Names, HEX (#ffffff), RGB & RGBA",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 11)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Color Formats: Names, HEX , RGB & RGBA' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Color Formats: Names, HEX , RGB & RGBA'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Color Formats: Names, HEX , RGB & RGBA'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Color Formats: Names, HEX , RGB & RGBA' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Color Formats: Names, HEX , RGB & RGBA' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Color Formats: Names, HEX , RGB & RGBA' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Color Formats: Names, HEX , RGB & RGBA' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Color Formats: Names, HEX , RGB & RGBA' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Color Formats: Names, HEX , RGB & RGBA' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Color Formats: Names, HEX (#ffffff), RGB & RGBA!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Color Formats: Names, HEX , RGB & RGBA** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Color Formats: Names, HEX , RGB & RGBA** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Color Formats: Names, HEX , RGB & RGBA */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Color Formats: Names, HEX (#ffffff), RGB & RGBA\n\nA comprehensive technical deep-dive into **Color Formats: Names, HEX , RGB & RGBA** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Color Formats: Names, HEX , RGB & RGBA */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Color Formats: Names, HEX (#ffffff), RGB & RGBA Seekhein!\n\nIs lesson me hum **Color Formats: Names, HEX , RGB & RGBA** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Color Formats: Names, HEX , RGB & RGBA** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Color Formats: Names, HEX , RGB & RGBA */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Color Formats: Names, HEX (#ffffff), RGB & RGBA\n* **Color Formats: Names, HEX , RGB & RGBA** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Color Formats: Names, HEX (#ffffff), RGB & RGBA!\n\nइस पाठ में हम **Color Formats: Names, HEX , RGB & RGBA** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Color Formats: Names, HEX , RGB & RGBA */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Color Formats: Names, HEX (#ffffff), RGB & RGBA\n* **Color Formats: Names, HEX , RGB & RGBA** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 12,
    "slug": "modern-css-colors-hsl-hsla-oklch-gamut",
    "title": "Modern Color Functions: HSL, HSLA & OKLCH",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 12)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Modern Color Functions: HSL, HSLA & OKLCH' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Modern Color Functions: HSL, HSLA & OKLCH'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Modern Color Functions: HSL, HSLA & OKLCH'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Modern Color Functions: HSL, HSLA & OKLCH' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Modern Color Functions: HSL, HSLA & OKLCH' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Modern Color Functions: HSL, HSLA & OKLCH' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Modern Color Functions: HSL, HSLA & OKLCH' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Modern Color Functions: HSL, HSLA & OKLCH' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Modern Color Functions: HSL, HSLA & OKLCH' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Modern Color Functions: HSL, HSLA & OKLCH!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Modern Color Functions: HSL, HSLA & OKLCH** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Modern Color Functions: HSL, HSLA & OKLCH** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Modern Color Functions: HSL, HSLA & OKLCH */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Modern Color Functions: HSL, HSLA & OKLCH\n\nA comprehensive technical deep-dive into **Modern Color Functions: HSL, HSLA & OKLCH** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Modern Color Functions: HSL, HSLA & OKLCH */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Modern Color Functions: HSL, HSLA & OKLCH Seekhein!\n\nIs lesson me hum **Modern Color Functions: HSL, HSLA & OKLCH** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Modern Color Functions: HSL, HSLA & OKLCH** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Modern Color Functions: HSL, HSLA & OKLCH */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Modern Color Functions: HSL, HSLA & OKLCH\n* **Modern Color Functions: HSL, HSLA & OKLCH** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Modern Color Functions: HSL, HSLA & OKLCH!\n\nइस पाठ में हम **Modern Color Functions: HSL, HSLA & OKLCH** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Modern Color Functions: HSL, HSLA & OKLCH */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Modern Color Functions: HSL, HSLA & OKLCH\n* **Modern Color Functions: HSL, HSLA & OKLCH** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 13,
    "slug": "css-background-color-opacity-vs-rgba",
    "title": "Background Color & Transparency (opacity vs. rgba)",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 13)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Background Color & Transparency' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Background Color & Transparency'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Background Color & Transparency'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Background Color & Transparency' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Background Color & Transparency' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Background Color & Transparency' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Background Color & Transparency' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Color & Transparency' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Color & Transparency' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Background Color & Transparency (opacity vs. rgba)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Background Color & Transparency** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Background Color & Transparency** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Background Color & Transparency */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Background Color & Transparency (opacity vs. rgba)\n\nA comprehensive technical deep-dive into **Background Color & Transparency** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Background Color & Transparency */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Background Color & Transparency (opacity vs. rgba) Seekhein!\n\nIs lesson me hum **Background Color & Transparency** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Background Color & Transparency** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Background Color & Transparency */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Background Color & Transparency (opacity vs. rgba)\n* **Background Color & Transparency** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Background Color & Transparency (opacity vs. rgba)!\n\nइस पाठ में हम **Background Color & Transparency** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Background Color & Transparency */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Background Color & Transparency (opacity vs. rgba)\n* **Background Color & Transparency** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 14,
    "slug": "css-background-image-url-property",
    "title": "Background Images (background-image: url())",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 14)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Background Images' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Background Images'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Background Images'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Background Images' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Background Images' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Background Images' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Background Images' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Images' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Images' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Background Images (background-image: url())!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Background Images** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Background Images** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Background Images */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Background Images (background-image: url())\n\nA comprehensive technical deep-dive into **Background Images** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Background Images */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Background Images (background-image: url()) Seekhein!\n\nIs lesson me hum **Background Images** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Background Images** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Background Images */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Background Images (background-image: url())\n* **Background Images** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Background Images (background-image: url())!\n\nइस पाठ में हम **Background Images** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Background Images */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Background Images (background-image: url())\n* **Background Images** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 15,
    "slug": "css-background-size-cover-contain-pixels",
    "title": "Background Sizing (cover, contain & exact pixels)",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 15)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Background Sizing' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Background Sizing'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Background Sizing'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Background Sizing' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Background Sizing' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Background Sizing' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Background Sizing' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Sizing' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Sizing' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Background Sizing (cover, contain & exact pixels)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Background Sizing** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Background Sizing** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Background Sizing */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Background Sizing (cover, contain & exact pixels)\n\nA comprehensive technical deep-dive into **Background Sizing** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Background Sizing */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Background Sizing (cover, contain & exact pixels) Seekhein!\n\nIs lesson me hum **Background Sizing** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Background Sizing** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Background Sizing */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Background Sizing (cover, contain & exact pixels)\n* **Background Sizing** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Background Sizing (cover, contain & exact pixels)!\n\nइस पाठ में हम **Background Sizing** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Background Sizing */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Background Sizing (cover, contain & exact pixels)\n* **Background Sizing** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 16,
    "slug": "css-background-position-alignment-properties",
    "title": "Background Position & Alignment (top, center, percentages)",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 16)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Background Position & Alignment' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Background Position & Alignment'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Background Position & Alignment'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Background Position & Alignment' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Background Position & Alignment' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Background Position & Alignment' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Background Position & Alignment' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Position & Alignment' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Position & Alignment' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Background Position & Alignment (top, center, percentages)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Background Position & Alignment** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Background Position & Alignment** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Background Position & Alignment */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Background Position & Alignment (top, center, percentages)\n\nA comprehensive technical deep-dive into **Background Position & Alignment** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Background Position & Alignment */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Background Position & Alignment (top, center, percentages) Seekhein!\n\nIs lesson me hum **Background Position & Alignment** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Background Position & Alignment** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Background Position & Alignment */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Background Position & Alignment (top, center, percentages)\n* **Background Position & Alignment** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Background Position & Alignment (top, center, percentages)!\n\nइस पाठ में हम **Background Position & Alignment** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Background Position & Alignment */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Background Position & Alignment (top, center, percentages)\n* **Background Position & Alignment** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 17,
    "slug": "css-background-repeat-tile-settings",
    "title": "Background Repeat (no-repeat, repeat-x, repeat-y)",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 17)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Background Repeat' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Background Repeat'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Background Repeat'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Background Repeat' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Background Repeat' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Background Repeat' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Background Repeat' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Repeat' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Repeat' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Background Repeat (no-repeat, repeat-x, repeat-y)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Background Repeat** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Background Repeat** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Background Repeat */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Background Repeat (no-repeat, repeat-x, repeat-y)\n\nA comprehensive technical deep-dive into **Background Repeat** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Background Repeat */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Background Repeat (no-repeat, repeat-x, repeat-y) Seekhein!\n\nIs lesson me hum **Background Repeat** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Background Repeat** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Background Repeat */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Background Repeat (no-repeat, repeat-x, repeat-y)\n* **Background Repeat** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Background Repeat (no-repeat, repeat-x, repeat-y)!\n\nइस पाठ में हम **Background Repeat** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Background Repeat */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Background Repeat (no-repeat, repeat-x, repeat-y)\n* **Background Repeat** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 18,
    "slug": "css-background-attachment-fixed-parallax",
    "title": "Background Attachment (fixed Parallax & scroll)",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 18)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Background Attachment' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Background Attachment'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Background Attachment'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Background Attachment' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Background Attachment' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Background Attachment' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Background Attachment' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Attachment' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Background Attachment' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Background Attachment (fixed Parallax & scroll)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Background Attachment** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Background Attachment** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Background Attachment */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Background Attachment (fixed Parallax & scroll)\n\nA comprehensive technical deep-dive into **Background Attachment** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Background Attachment */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Background Attachment (fixed Parallax & scroll) Seekhein!\n\nIs lesson me hum **Background Attachment** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Background Attachment** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Background Attachment */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Background Attachment (fixed Parallax & scroll)\n* **Background Attachment** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Background Attachment (fixed Parallax & scroll)!\n\nइस पाठ में हम **Background Attachment** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Background Attachment */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Background Attachment (fixed Parallax & scroll)\n* **Background Attachment** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 19,
    "slug": "css-gradients-linear-radial-conic-backgrounds",
    "title": "Linear, Radial & Conic Gradients",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 19)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Linear, Radial & Conic Gradients' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Linear, Radial & Conic Gradients'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Linear, Radial & Conic Gradients'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Linear, Radial & Conic Gradients' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Linear, Radial & Conic Gradients' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Linear, Radial & Conic Gradients' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Linear, Radial & Conic Gradients' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Linear, Radial & Conic Gradients' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Linear, Radial & Conic Gradients' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Linear, Radial & Conic Gradients!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Linear, Radial & Conic Gradients** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Linear, Radial & Conic Gradients** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Linear, Radial & Conic Gradients */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Linear, Radial & Conic Gradients\n\nA comprehensive technical deep-dive into **Linear, Radial & Conic Gradients** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Linear, Radial & Conic Gradients */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Linear, Radial & Conic Gradients Seekhein!\n\nIs lesson me hum **Linear, Radial & Conic Gradients** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Linear, Radial & Conic Gradients** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Linear, Radial & Conic Gradients */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Linear, Radial & Conic Gradients\n* **Linear, Radial & Conic Gradients** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Linear, Radial & Conic Gradients!\n\nइस पाठ में हम **Linear, Radial & Conic Gradients** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Linear, Radial & Conic Gradients */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Linear, Radial & Conic Gradients\n* **Linear, Radial & Conic Gradients** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 20,
    "slug": "css-shorthand-background-property-rules",
    "title": "Shorthand background Property Mastery",
    "unit": "Unit 2: Colors, Backgrounds & Modern Gradients",
    "bookRef": "Nextsem CSS Master Guide (Lesson 20)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Shorthand background Property Mastery' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Shorthand background Property Mastery'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Shorthand background Property Mastery'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Shorthand background Property Mastery' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Shorthand background Property Mastery' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Shorthand background Property Mastery' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Shorthand background Property Mastery' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Shorthand background Property Mastery' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Shorthand background Property Mastery' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Shorthand background Property Mastery!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Shorthand background Property Mastery** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Shorthand background Property Mastery** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Shorthand background Property Mastery */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Shorthand background Property Mastery\n\nA comprehensive technical deep-dive into **Shorthand background Property Mastery** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Shorthand background Property Mastery */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Shorthand background Property Mastery Seekhein!\n\nIs lesson me hum **Shorthand background Property Mastery** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Shorthand background Property Mastery** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Shorthand background Property Mastery */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Shorthand background Property Mastery\n* **Shorthand background Property Mastery** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Shorthand background Property Mastery!\n\nइस पाठ में हम **Shorthand background Property Mastery** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Shorthand background Property Mastery */\n.hero-banner {\n  background: linear-gradient(135deg, #04AA6D 0%, #0f172a 100%);\n  color: #ffffff;\n  padding: 40px 20px;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Shorthand background Property Mastery\n* **Shorthand background Property Mastery** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 21,
    "slug": "css-font-family-generic-fallbacks-web-safe",
    "title": "Font Family, Generic Fallbacks & Web Safe Fonts",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 21)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Font Family, Generic Fallbacks & Web Safe Fonts' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Font Family, Generic Fallbacks & Web Safe Fonts'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Font Family, Generic Fallbacks & Web Safe Fonts'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Font Family, Generic Fallbacks & Web Safe Fonts' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Font Family, Generic Fallbacks & Web Safe Fonts' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Font Family, Generic Fallbacks & Web Safe Fonts' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Font Family, Generic Fallbacks & Web Safe Fonts' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Font Family, Generic Fallbacks & Web Safe Fonts' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Font Family, Generic Fallbacks & Web Safe Fonts' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Font Family, Generic Fallbacks & Web Safe Fonts!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Font Family, Generic Fallbacks & Web Safe Fonts** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Font Family, Generic Fallbacks & Web Safe Fonts** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Font Family, Generic Fallbacks & Web Safe Fonts */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Font Family, Generic Fallbacks & Web Safe Fonts\n\nA comprehensive technical deep-dive into **Font Family, Generic Fallbacks & Web Safe Fonts** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Font Family, Generic Fallbacks & Web Safe Fonts */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Font Family, Generic Fallbacks & Web Safe Fonts Seekhein!\n\nIs lesson me hum **Font Family, Generic Fallbacks & Web Safe Fonts** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Font Family, Generic Fallbacks & Web Safe Fonts** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Font Family, Generic Fallbacks & Web Safe Fonts */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Font Family, Generic Fallbacks & Web Safe Fonts\n* **Font Family, Generic Fallbacks & Web Safe Fonts** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Font Family, Generic Fallbacks & Web Safe Fonts!\n\nइस पाठ में हम **Font Family, Generic Fallbacks & Web Safe Fonts** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Font Family, Generic Fallbacks & Web Safe Fonts */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Font Family, Generic Fallbacks & Web Safe Fonts\n* **Font Family, Generic Fallbacks & Web Safe Fonts** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 22,
    "slug": "google-fonts-integration-link-import-css",
    "title": "Google Fonts Integration with <link> and @import",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 22)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Google Fonts Integration with <link> and @import' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Google Fonts Integration with <link> and @import'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Google Fonts Integration with <link> and @import'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Google Fonts Integration with <link> and @import' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Google Fonts Integration with <link> and @import' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Google Fonts Integration with <link> and @import' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Google Fonts Integration with <link> and @import' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Google Fonts Integration with <link> and @import' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Google Fonts Integration with <link> and @import' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Google Fonts Integration with <link> and @import!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Google Fonts Integration with <link> and @import** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Google Fonts Integration with <link> and @import** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Google Fonts Integration with <link> and @import */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Google Fonts Integration with <link> and @import\n\nA comprehensive technical deep-dive into **Google Fonts Integration with <link> and @import** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Google Fonts Integration with <link> and @import */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Google Fonts Integration with <link> and @import Seekhein!\n\nIs lesson me hum **Google Fonts Integration with <link> and @import** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Google Fonts Integration with <link> and @import** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Google Fonts Integration with <link> and @import */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Google Fonts Integration with <link> and @import\n* **Google Fonts Integration with <link> and @import** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Google Fonts Integration with <link> and @import!\n\nइस पाठ में हम **Google Fonts Integration with <link> and @import** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Google Fonts Integration with <link> and @import */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Google Fonts Integration with <link> and @import\n* **Google Fonts Integration with <link> and @import** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 23,
    "slug": "css-font-sizing-px-rem-em-vw-units",
    "title": "Font Size: px, rem, em, %, vw & vh Units",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 23)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Font Size: px, rem, em, %, vw & vh Units' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Font Size: px, rem, em, %, vw & vh Units'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Font Size: px, rem, em, %, vw & vh Units'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Font Size: px, rem, em, %, vw & vh Units' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Font Size: px, rem, em, %, vw & vh Units' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Font Size: px, rem, em, %, vw & vh Units' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Font Size: px, rem, em, %, vw & vh Units' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Font Size: px, rem, em, %, vw & vh Units' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Font Size: px, rem, em, %, vw & vh Units' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Font Size: px, rem, em, %, vw & vh Units!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Font Size: px, rem, em, %, vw & vh Units** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Font Size: px, rem, em, %, vw & vh Units** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Font Size: px, rem, em, %, vw & vh Units */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Font Size: px, rem, em, %, vw & vh Units\n\nA comprehensive technical deep-dive into **Font Size: px, rem, em, %, vw & vh Units** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Font Size: px, rem, em, %, vw & vh Units */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Font Size: px, rem, em, %, vw & vh Units Seekhein!\n\nIs lesson me hum **Font Size: px, rem, em, %, vw & vh Units** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Font Size: px, rem, em, %, vw & vh Units** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Font Size: px, rem, em, %, vw & vh Units */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Font Size: px, rem, em, %, vw & vh Units\n* **Font Size: px, rem, em, %, vw & vh Units** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Font Size: px, rem, em, %, vw & vh Units!\n\nइस पाठ में हम **Font Size: px, rem, em, %, vw & vh Units** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Font Size: px, rem, em, %, vw & vh Units */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Font Size: px, rem, em, %, vw & vh Units\n* **Font Size: px, rem, em, %, vw & vh Units** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 24,
    "slug": "css-font-weight-italic-style-font-variant",
    "title": "Font Weight, Font Style & Font Variant",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 24)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Font Weight, Font Style & Font Variant' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Font Weight, Font Style & Font Variant'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Font Weight, Font Style & Font Variant'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Font Weight, Font Style & Font Variant' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Font Weight, Font Style & Font Variant' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Font Weight, Font Style & Font Variant' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Font Weight, Font Style & Font Variant' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Font Weight, Font Style & Font Variant' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Font Weight, Font Style & Font Variant' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Font Weight, Font Style & Font Variant!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Font Weight, Font Style & Font Variant** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Font Weight, Font Style & Font Variant** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Font Weight, Font Style & Font Variant */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Font Weight, Font Style & Font Variant\n\nA comprehensive technical deep-dive into **Font Weight, Font Style & Font Variant** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Font Weight, Font Style & Font Variant */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Font Weight, Font Style & Font Variant Seekhein!\n\nIs lesson me hum **Font Weight, Font Style & Font Variant** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Font Weight, Font Style & Font Variant** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Font Weight, Font Style & Font Variant */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Font Weight, Font Style & Font Variant\n* **Font Weight, Font Style & Font Variant** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Font Weight, Font Style & Font Variant!\n\nइस पाठ में हम **Font Weight, Font Style & Font Variant** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Font Weight, Font Style & Font Variant */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Font Weight, Font Style & Font Variant\n* **Font Weight, Font Style & Font Variant** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 25,
    "slug": "css-text-align-justify-direction-properties",
    "title": "Text Alignment & Direction (text-align, direction)",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 25)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Text Alignment & Direction' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Text Alignment & Direction'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Text Alignment & Direction'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Text Alignment & Direction' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Text Alignment & Direction' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Text Alignment & Direction' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Text Alignment & Direction' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Alignment & Direction' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Alignment & Direction' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Text Alignment & Direction (text-align, direction)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Text Alignment & Direction** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Text Alignment & Direction** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Text Alignment & Direction */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Text Alignment & Direction (text-align, direction)\n\nA comprehensive technical deep-dive into **Text Alignment & Direction** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Text Alignment & Direction */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Text Alignment & Direction (text-align, direction) Seekhein!\n\nIs lesson me hum **Text Alignment & Direction** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Text Alignment & Direction** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Text Alignment & Direction */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Text Alignment & Direction (text-align, direction)\n* **Text Alignment & Direction** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Text Alignment & Direction (text-align, direction)!\n\nइस पाठ में हम **Text Alignment & Direction** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Text Alignment & Direction */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Text Alignment & Direction (text-align, direction)\n* **Text Alignment & Direction** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 26,
    "slug": "css-text-decoration-styling-wavy-color",
    "title": "Text Decoration & Underline Styling (underline, wavy, color)",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 26)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Text Decoration & Underline Styling' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Text Decoration & Underline Styling'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Text Decoration & Underline Styling'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Text Decoration & Underline Styling' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Text Decoration & Underline Styling' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Text Decoration & Underline Styling' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Text Decoration & Underline Styling' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Decoration & Underline Styling' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Decoration & Underline Styling' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Text Decoration & Underline Styling (underline, wavy, color)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Text Decoration & Underline Styling** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Text Decoration & Underline Styling** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Text Decoration & Underline Styling */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Text Decoration & Underline Styling (underline, wavy, color)\n\nA comprehensive technical deep-dive into **Text Decoration & Underline Styling** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Text Decoration & Underline Styling */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Text Decoration & Underline Styling (underline, wavy, color) Seekhein!\n\nIs lesson me hum **Text Decoration & Underline Styling** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Text Decoration & Underline Styling** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Text Decoration & Underline Styling */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Text Decoration & Underline Styling (underline, wavy, color)\n* **Text Decoration & Underline Styling** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Text Decoration & Underline Styling (underline, wavy, color)!\n\nइस पाठ में हम **Text Decoration & Underline Styling** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Text Decoration & Underline Styling */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Text Decoration & Underline Styling (underline, wavy, color)\n* **Text Decoration & Underline Styling** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 27,
    "slug": "css-text-transform-letter-word-spacing",
    "title": "Text Transformation & Letter Spacing (uppercase, letter-spacing)",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 27)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Text Transformation & Letter Spacing' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Text Transformation & Letter Spacing'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Text Transformation & Letter Spacing'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Text Transformation & Letter Spacing' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Text Transformation & Letter Spacing' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Text Transformation & Letter Spacing' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Text Transformation & Letter Spacing' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Transformation & Letter Spacing' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Transformation & Letter Spacing' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Text Transformation & Letter Spacing (uppercase, letter-spacing)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Text Transformation & Letter Spacing** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Text Transformation & Letter Spacing** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Text Transformation & Letter Spacing */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Text Transformation & Letter Spacing (uppercase, letter-spacing)\n\nA comprehensive technical deep-dive into **Text Transformation & Letter Spacing** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Text Transformation & Letter Spacing */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Text Transformation & Letter Spacing (uppercase, letter-spacing) Seekhein!\n\nIs lesson me hum **Text Transformation & Letter Spacing** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Text Transformation & Letter Spacing** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Text Transformation & Letter Spacing */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Text Transformation & Letter Spacing (uppercase, letter-spacing)\n* **Text Transformation & Letter Spacing** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Text Transformation & Letter Spacing (uppercase, letter-spacing)!\n\nइस पाठ में हम **Text Transformation & Letter Spacing** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Text Transformation & Letter Spacing */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Text Transformation & Letter Spacing (uppercase, letter-spacing)\n* **Text Transformation & Letter Spacing** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 28,
    "slug": "css-line-height-proportional-leading",
    "title": "Line Height & Paragraph Readability (line-height ratios)",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 28)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Line Height & Paragraph Readability' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Line Height & Paragraph Readability'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Line Height & Paragraph Readability'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Line Height & Paragraph Readability' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Line Height & Paragraph Readability' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Line Height & Paragraph Readability' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Line Height & Paragraph Readability' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Line Height & Paragraph Readability' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Line Height & Paragraph Readability' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Line Height & Paragraph Readability (line-height ratios)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Line Height & Paragraph Readability** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Line Height & Paragraph Readability** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Line Height & Paragraph Readability */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Line Height & Paragraph Readability (line-height ratios)\n\nA comprehensive technical deep-dive into **Line Height & Paragraph Readability** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Line Height & Paragraph Readability */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Line Height & Paragraph Readability (line-height ratios) Seekhein!\n\nIs lesson me hum **Line Height & Paragraph Readability** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Line Height & Paragraph Readability** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Line Height & Paragraph Readability */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Line Height & Paragraph Readability (line-height ratios)\n* **Line Height & Paragraph Readability** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Line Height & Paragraph Readability (line-height ratios)!\n\nइस पाठ में हम **Line Height & Paragraph Readability** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Line Height & Paragraph Readability */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Line Height & Paragraph Readability (line-height ratios)\n* **Line Height & Paragraph Readability** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 29,
    "slug": "css-text-shadow-glow-drop-shadow-effects",
    "title": "Text Shadows & Neon Glow Effects (text-shadow)",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 29)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Text Shadows & Neon Glow Effects' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Text Shadows & Neon Glow Effects'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Text Shadows & Neon Glow Effects'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Text Shadows & Neon Glow Effects' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Text Shadows & Neon Glow Effects' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Text Shadows & Neon Glow Effects' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Text Shadows & Neon Glow Effects' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Shadows & Neon Glow Effects' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Shadows & Neon Glow Effects' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Text Shadows & Neon Glow Effects (text-shadow)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Text Shadows & Neon Glow Effects** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Text Shadows & Neon Glow Effects** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Text Shadows & Neon Glow Effects */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Text Shadows & Neon Glow Effects (text-shadow)\n\nA comprehensive technical deep-dive into **Text Shadows & Neon Glow Effects** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Text Shadows & Neon Glow Effects */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Text Shadows & Neon Glow Effects (text-shadow) Seekhein!\n\nIs lesson me hum **Text Shadows & Neon Glow Effects** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Text Shadows & Neon Glow Effects** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Text Shadows & Neon Glow Effects */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Text Shadows & Neon Glow Effects (text-shadow)\n* **Text Shadows & Neon Glow Effects** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Text Shadows & Neon Glow Effects (text-shadow)!\n\nइस पाठ में हम **Text Shadows & Neon Glow Effects** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Text Shadows & Neon Glow Effects */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Text Shadows & Neon Glow Effects (text-shadow)\n* **Text Shadows & Neon Glow Effects** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 30,
    "slug": "css-text-overflow-ellipsis-whitespace-wrapping",
    "title": "Text Overflow, Ellipsis & White-space Wrapping",
    "unit": "Unit 3: Typography, Fonts & Text Styling",
    "bookRef": "Nextsem CSS Master Guide (Lesson 30)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Text Overflow, Ellipsis & White-space Wrapping' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Text Overflow, Ellipsis & White-space Wrapping'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Text Overflow, Ellipsis & White-space Wrapping'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Text Overflow, Ellipsis & White-space Wrapping' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Text Overflow, Ellipsis & White-space Wrapping' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Text Overflow, Ellipsis & White-space Wrapping' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Text Overflow, Ellipsis & White-space Wrapping' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Overflow, Ellipsis & White-space Wrapping' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Text Overflow, Ellipsis & White-space Wrapping' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Text Overflow, Ellipsis & White-space Wrapping!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Text Overflow, Ellipsis & White-space Wrapping** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Text Overflow, Ellipsis & White-space Wrapping** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Text Overflow, Ellipsis & White-space Wrapping */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Text Overflow, Ellipsis & White-space Wrapping\n\nA comprehensive technical deep-dive into **Text Overflow, Ellipsis & White-space Wrapping** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Text Overflow, Ellipsis & White-space Wrapping */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Text Overflow, Ellipsis & White-space Wrapping Seekhein!\n\nIs lesson me hum **Text Overflow, Ellipsis & White-space Wrapping** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Text Overflow, Ellipsis & White-space Wrapping** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Text Overflow, Ellipsis & White-space Wrapping */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Text Overflow, Ellipsis & White-space Wrapping\n* **Text Overflow, Ellipsis & White-space Wrapping** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Text Overflow, Ellipsis & White-space Wrapping!\n\nइस पाठ में हम **Text Overflow, Ellipsis & White-space Wrapping** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Text Overflow, Ellipsis & White-space Wrapping */\n.article-headline {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n  font-weight: 800;\n  line-height: 1.25;\n  color: #ffffff;\n  text-shadow: 0 2px 8px rgba(4, 170, 109, 0.3);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Text Overflow, Ellipsis & White-space Wrapping\n* **Text Overflow, Ellipsis & White-space Wrapping** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 31,
    "slug": "css-box-model-content-padding-border-margin",
    "title": "The CSS Box Model: Content, Padding, Border, Margin",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 31)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'The CSS Box Model: Content, Padding, Border, Margin' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'The CSS Box Model: Content, Padding, Border, Margin'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'The CSS Box Model: Content, Padding, Border, Margin'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'The CSS Box Model: Content, Padding, Border, Margin' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'The CSS Box Model: Content, Padding, Border, Margin' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'The CSS Box Model: Content, Padding, Border, Margin' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'The CSS Box Model: Content, Padding, Border, Margin' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'The CSS Box Model: Content, Padding, Border, Margin' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'The CSS Box Model: Content, Padding, Border, Margin' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: The CSS Box Model: Content, Padding, Border, Margin!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **The CSS Box Model: Content, Padding, Border, Margin** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **The CSS Box Model: Content, Padding, Border, Margin** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* The CSS Box Model: Content, Padding, Border, Margin */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: The CSS Box Model: Content, Padding, Border, Margin\n\nA comprehensive technical deep-dive into **The CSS Box Model: Content, Padding, Border, Margin** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* The CSS Box Model: Content, Padding, Border, Margin */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 The CSS Box Model: Content, Padding, Border, Margin Seekhein!\n\nIs lesson me hum **The CSS Box Model: Content, Padding, Border, Margin** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **The CSS Box Model: Content, Padding, Border, Margin** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* The CSS Box Model: Content, Padding, Border, Margin */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: The CSS Box Model: Content, Padding, Border, Margin\n* **The CSS Box Model: Content, Padding, Border, Margin** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: The CSS Box Model: Content, Padding, Border, Margin!\n\nइस पाठ में हम **The CSS Box Model: Content, Padding, Border, Margin** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* The CSS Box Model: Content, Padding, Border, Margin */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: The CSS Box Model: Content, Padding, Border, Margin\n* **The CSS Box Model: Content, Padding, Border, Margin** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 32,
    "slug": "box-sizing-border-box-universal-reset",
    "title": "The Golden Rule: box-sizing: border-box",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 32)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'The Golden Rule: box-sizing: border-box' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'The Golden Rule: box-sizing: border-box'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'The Golden Rule: box-sizing: border-box'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'The Golden Rule: box-sizing: border-box' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'The Golden Rule: box-sizing: border-box' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'The Golden Rule: box-sizing: border-box' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'The Golden Rule: box-sizing: border-box' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'The Golden Rule: box-sizing: border-box' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'The Golden Rule: box-sizing: border-box' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: The Golden Rule: box-sizing: border-box!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **The Golden Rule: box-sizing: border-box** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **The Golden Rule: box-sizing: border-box** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* The Golden Rule: box-sizing: border-box */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: The Golden Rule: box-sizing: border-box\n\nA comprehensive technical deep-dive into **The Golden Rule: box-sizing: border-box** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* The Golden Rule: box-sizing: border-box */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 The Golden Rule: box-sizing: border-box Seekhein!\n\nIs lesson me hum **The Golden Rule: box-sizing: border-box** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **The Golden Rule: box-sizing: border-box** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* The Golden Rule: box-sizing: border-box */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: The Golden Rule: box-sizing: border-box\n* **The Golden Rule: box-sizing: border-box** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: The Golden Rule: box-sizing: border-box!\n\nइस पाठ में हम **The Golden Rule: box-sizing: border-box** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* The Golden Rule: box-sizing: border-box */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: The Golden Rule: box-sizing: border-box\n* **The Golden Rule: box-sizing: border-box** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 33,
    "slug": "css-width-height-min-max-constraints",
    "title": "Width, Height, min-width, max-width, min-height & max-height",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 33)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Width, Height, min-width, max-width, min-height & max-height' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Width, Height, min-width, max-width, min-height & max-height'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Width, Height, min-width, max-width, min-height & max-height'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Width, Height, min-width, max-width, min-height & max-height' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Width, Height, min-width, max-width, min-height & max-height' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Width, Height, min-width, max-width, min-height & max-height' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Width, Height, min-width, max-width, min-height & max-height' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Width, Height, min-width, max-width, min-height & max-height' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Width, Height, min-width, max-width, min-height & max-height' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Width, Height, min-width, max-width, min-height & max-height!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Width, Height, min-width, max-width, min-height & max-height** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Width, Height, min-width, max-width, min-height & max-height** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Width, Height, min-width, max-width, min-height & max-height */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Width, Height, min-width, max-width, min-height & max-height\n\nA comprehensive technical deep-dive into **Width, Height, min-width, max-width, min-height & max-height** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Width, Height, min-width, max-width, min-height & max-height */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Width, Height, min-width, max-width, min-height & max-height Seekhein!\n\nIs lesson me hum **Width, Height, min-width, max-width, min-height & max-height** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Width, Height, min-width, max-width, min-height & max-height** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Width, Height, min-width, max-width, min-height & max-height */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Width, Height, min-width, max-width, min-height & max-height\n* **Width, Height, min-width, max-width, min-height & max-height** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Width, Height, min-width, max-width, min-height & max-height!\n\nइस पाठ में हम **Width, Height, min-width, max-width, min-height & max-height** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Width, Height, min-width, max-width, min-height & max-height */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Width, Height, min-width, max-width, min-height & max-height\n* **Width, Height, min-width, max-width, min-height & max-height** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 34,
    "slug": "css-padding-shorthand-individual-sides",
    "title": "CSS Padding (Shorthand & Individual Sides)",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 34)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'CSS Padding' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'CSS Padding'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'CSS Padding'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'CSS Padding' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'CSS Padding' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'CSS Padding' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'CSS Padding' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Padding' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Padding' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: CSS Padding (Shorthand & Individual Sides)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **CSS Padding** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **CSS Padding** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* CSS Padding */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: CSS Padding (Shorthand & Individual Sides)\n\nA comprehensive technical deep-dive into **CSS Padding** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* CSS Padding */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 CSS Padding (Shorthand & Individual Sides) Seekhein!\n\nIs lesson me hum **CSS Padding** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **CSS Padding** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Padding */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: CSS Padding (Shorthand & Individual Sides)\n* **CSS Padding** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: CSS Padding (Shorthand & Individual Sides)!\n\nइस पाठ में हम **CSS Padding** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* CSS Padding */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: CSS Padding (Shorthand & Individual Sides)\n* **CSS Padding** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 35,
    "slug": "css-margins-auto-centering-shorthand",
    "title": "CSS Margins & Auto Centering (margin: 0 auto)",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 35)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'CSS Margins & Auto Centering' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'CSS Margins & Auto Centering'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'CSS Margins & Auto Centering'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'CSS Margins & Auto Centering' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'CSS Margins & Auto Centering' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'CSS Margins & Auto Centering' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'CSS Margins & Auto Centering' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Margins & Auto Centering' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Margins & Auto Centering' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: CSS Margins & Auto Centering (margin: 0 auto)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **CSS Margins & Auto Centering** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **CSS Margins & Auto Centering** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* CSS Margins & Auto Centering */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: CSS Margins & Auto Centering (margin: 0 auto)\n\nA comprehensive technical deep-dive into **CSS Margins & Auto Centering** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* CSS Margins & Auto Centering */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 CSS Margins & Auto Centering (margin: 0 auto) Seekhein!\n\nIs lesson me hum **CSS Margins & Auto Centering** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **CSS Margins & Auto Centering** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Margins & Auto Centering */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: CSS Margins & Auto Centering (margin: 0 auto)\n* **CSS Margins & Auto Centering** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: CSS Margins & Auto Centering (margin: 0 auto)!\n\nइस पाठ में हम **CSS Margins & Auto Centering** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* CSS Margins & Auto Centering */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: CSS Margins & Auto Centering (margin: 0 auto)\n* **CSS Margins & Auto Centering** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 36,
    "slug": "css-margin-collapsing-rules-prevention",
    "title": "Margin Collapsing Explained & Prevention",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 36)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Margin Collapsing Explained & Prevention' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Margin Collapsing Explained & Prevention'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Margin Collapsing Explained & Prevention'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Margin Collapsing Explained & Prevention' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Margin Collapsing Explained & Prevention' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Margin Collapsing Explained & Prevention' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Margin Collapsing Explained & Prevention' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Margin Collapsing Explained & Prevention' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Margin Collapsing Explained & Prevention' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Margin Collapsing Explained & Prevention!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Margin Collapsing Explained & Prevention** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Margin Collapsing Explained & Prevention** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Margin Collapsing Explained & Prevention */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Margin Collapsing Explained & Prevention\n\nA comprehensive technical deep-dive into **Margin Collapsing Explained & Prevention** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Margin Collapsing Explained & Prevention */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Margin Collapsing Explained & Prevention Seekhein!\n\nIs lesson me hum **Margin Collapsing Explained & Prevention** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Margin Collapsing Explained & Prevention** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Margin Collapsing Explained & Prevention */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Margin Collapsing Explained & Prevention\n* **Margin Collapsing Explained & Prevention** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Margin Collapsing Explained & Prevention!\n\nइस पाठ में हम **Margin Collapsing Explained & Prevention** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Margin Collapsing Explained & Prevention */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Margin Collapsing Explained & Prevention\n* **Margin Collapsing Explained & Prevention** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 37,
    "slug": "css-borders-style-width-color-shorthand",
    "title": "CSS Borders (Style, Width, Color & Shorthand)",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 37)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'CSS Borders' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'CSS Borders'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'CSS Borders'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'CSS Borders' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'CSS Borders' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'CSS Borders' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'CSS Borders' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Borders' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Borders' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: CSS Borders (Style, Width, Color & Shorthand)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **CSS Borders** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **CSS Borders** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* CSS Borders */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: CSS Borders (Style, Width, Color & Shorthand)\n\nA comprehensive technical deep-dive into **CSS Borders** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* CSS Borders */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 CSS Borders (Style, Width, Color & Shorthand) Seekhein!\n\nIs lesson me hum **CSS Borders** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **CSS Borders** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Borders */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: CSS Borders (Style, Width, Color & Shorthand)\n* **CSS Borders** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: CSS Borders (Style, Width, Color & Shorthand)!\n\nइस पाठ में हम **CSS Borders** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* CSS Borders */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: CSS Borders (Style, Width, Color & Shorthand)\n* **CSS Borders** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 38,
    "slug": "css-border-radius-rounded-corners-circles",
    "title": "Rounded Corners with border-radius (Pills, Circles, Ovals)",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 38)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Rounded Corners with border-radius' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Rounded Corners with border-radius'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Rounded Corners with border-radius'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Rounded Corners with border-radius' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Rounded Corners with border-radius' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Rounded Corners with border-radius' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Rounded Corners with border-radius' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Rounded Corners with border-radius' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Rounded Corners with border-radius' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Rounded Corners with border-radius (Pills, Circles, Ovals)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Rounded Corners with border-radius** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Rounded Corners with border-radius** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Rounded Corners with border-radius */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Rounded Corners with border-radius (Pills, Circles, Ovals)\n\nA comprehensive technical deep-dive into **Rounded Corners with border-radius** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Rounded Corners with border-radius */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Rounded Corners with border-radius (Pills, Circles, Ovals) Seekhein!\n\nIs lesson me hum **Rounded Corners with border-radius** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Rounded Corners with border-radius** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Rounded Corners with border-radius */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Rounded Corners with border-radius (Pills, Circles, Ovals)\n* **Rounded Corners with border-radius** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Rounded Corners with border-radius (Pills, Circles, Ovals)!\n\nइस पाठ में हम **Rounded Corners with border-radius** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Rounded Corners with border-radius */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Rounded Corners with border-radius (Pills, Circles, Ovals)\n* **Rounded Corners with border-radius** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 39,
    "slug": "css-outlines-vs-borders-focus-accessibility",
    "title": "Outlines vs. Borders (outline, outline-offset for accessibility)",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 39)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Outlines vs. Borders' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Outlines vs. Borders'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Outlines vs. Borders'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Outlines vs. Borders' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Outlines vs. Borders' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Outlines vs. Borders' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Outlines vs. Borders' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Outlines vs. Borders' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Outlines vs. Borders' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Outlines vs. Borders (outline, outline-offset for accessibility)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Outlines vs. Borders** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Outlines vs. Borders** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Outlines vs. Borders */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Outlines vs. Borders (outline, outline-offset for accessibility)\n\nA comprehensive technical deep-dive into **Outlines vs. Borders** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Outlines vs. Borders */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Outlines vs. Borders (outline, outline-offset for accessibility) Seekhein!\n\nIs lesson me hum **Outlines vs. Borders** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Outlines vs. Borders** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Outlines vs. Borders */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Outlines vs. Borders (outline, outline-offset for accessibility)\n* **Outlines vs. Borders** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Outlines vs. Borders (outline, outline-offset for accessibility)!\n\nइस पाठ में हम **Outlines vs. Borders** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Outlines vs. Borders */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Outlines vs. Borders (outline, outline-offset for accessibility)\n* **Outlines vs. Borders** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 40,
    "slug": "css-box-shadow-glassmorphism-inset-depth",
    "title": "Box Shadows (box-shadow Multi-layer Glassmorphism & Inset)",
    "unit": "Unit 4: The CSS Box Model & Sizing",
    "bookRef": "Nextsem CSS Master Guide (Lesson 40)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Box Shadows' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Box Shadows'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Box Shadows'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Box Shadows' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Box Shadows' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Box Shadows' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Box Shadows' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Box Shadows' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Box Shadows' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Box Shadows (box-shadow Multi-layer Glassmorphism & Inset)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Box Shadows** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Box Shadows** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Box Shadows */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Box Shadows (box-shadow Multi-layer Glassmorphism & Inset)\n\nA comprehensive technical deep-dive into **Box Shadows** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Box Shadows */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Box Shadows (box-shadow Multi-layer Glassmorphism & Inset) Seekhein!\n\nIs lesson me hum **Box Shadows** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Box Shadows** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Box Shadows */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Box Shadows (box-shadow Multi-layer Glassmorphism & Inset)\n* **Box Shadows** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Box Shadows (box-shadow Multi-layer Glassmorphism & Inset)!\n\nइस पाठ में हम **Box Shadows** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Box Shadows */\n.product-card {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 380px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  background-color: #1e293b;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Box Shadows (box-shadow Multi-layer Glassmorphism & Inset)\n* **Box Shadows** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 41,
    "slug": "css-display-block-inline-inline-block",
    "title": "Display Types: block, inline, inline-block",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 41)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Display Types: block, inline, inline-block' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Display Types: block, inline, inline-block'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Display Types: block, inline, inline-block'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Display Types: block, inline, inline-block' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Display Types: block, inline, inline-block' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Display Types: block, inline, inline-block' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Display Types: block, inline, inline-block' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Display Types: block, inline, inline-block' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Display Types: block, inline, inline-block' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Display Types: block, inline, inline-block!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Display Types: block, inline, inline-block** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Display Types: block, inline, inline-block** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Display Types: block, inline, inline-block */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Display Types: block, inline, inline-block\n\nA comprehensive technical deep-dive into **Display Types: block, inline, inline-block** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Display Types: block, inline, inline-block */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Display Types: block, inline, inline-block Seekhein!\n\nIs lesson me hum **Display Types: block, inline, inline-block** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Display Types: block, inline, inline-block** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Display Types: block, inline, inline-block */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Display Types: block, inline, inline-block\n* **Display Types: block, inline, inline-block** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Display Types: block, inline, inline-block!\n\nइस पाठ में हम **Display Types: block, inline, inline-block** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Display Types: block, inline, inline-block */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Display Types: block, inline, inline-block\n* **Display Types: block, inline, inline-block** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 42,
    "slug": "css-display-none-vs-visibility-hidden-opacity",
    "title": "Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 42)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0 */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0\n\nA comprehensive technical deep-dive into **Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0 */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0 Seekhein!\n\nIs lesson me hum **Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0 */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0\n* **Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0!\n\nइस पाठ में हम **Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0 */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0\n* **Hiding Elements: display: none vs. visibility: hidden vs. opacity: 0** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 43,
    "slug": "normal-document-flow-out-of-flow-elements",
    "title": "Normal Document Flow vs. Out-of-Flow Elements",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 43)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Normal Document Flow vs. Out-of-Flow Elements' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Normal Document Flow vs. Out-of-Flow Elements'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Normal Document Flow vs. Out-of-Flow Elements'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Normal Document Flow vs. Out-of-Flow Elements' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Normal Document Flow vs. Out-of-Flow Elements' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Normal Document Flow vs. Out-of-Flow Elements' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Normal Document Flow vs. Out-of-Flow Elements' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Normal Document Flow vs. Out-of-Flow Elements' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Normal Document Flow vs. Out-of-Flow Elements' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Normal Document Flow vs. Out-of-Flow Elements!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Normal Document Flow vs. Out-of-Flow Elements** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Normal Document Flow vs. Out-of-Flow Elements** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Normal Document Flow vs. Out-of-Flow Elements */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Normal Document Flow vs. Out-of-Flow Elements\n\nA comprehensive technical deep-dive into **Normal Document Flow vs. Out-of-Flow Elements** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Normal Document Flow vs. Out-of-Flow Elements */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Normal Document Flow vs. Out-of-Flow Elements Seekhein!\n\nIs lesson me hum **Normal Document Flow vs. Out-of-Flow Elements** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Normal Document Flow vs. Out-of-Flow Elements** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Normal Document Flow vs. Out-of-Flow Elements */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Normal Document Flow vs. Out-of-Flow Elements\n* **Normal Document Flow vs. Out-of-Flow Elements** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Normal Document Flow vs. Out-of-Flow Elements!\n\nइस पाठ में हम **Normal Document Flow vs. Out-of-Flow Elements** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Normal Document Flow vs. Out-of-Flow Elements */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Normal Document Flow vs. Out-of-Flow Elements\n* **Normal Document Flow vs. Out-of-Flow Elements** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 44,
    "slug": "css-position-static-default-flow",
    "title": "Static Positioning (Default Normal Flow)",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 44)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Static Positioning' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Static Positioning'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Static Positioning'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Static Positioning' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Static Positioning' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Static Positioning' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Static Positioning' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Static Positioning' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Static Positioning' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Static Positioning (Default Normal Flow)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Static Positioning** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Static Positioning** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Static Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Static Positioning (Default Normal Flow)\n\nA comprehensive technical deep-dive into **Static Positioning** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Static Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Static Positioning (Default Normal Flow) Seekhein!\n\nIs lesson me hum **Static Positioning** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Static Positioning** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Static Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Static Positioning (Default Normal Flow)\n* **Static Positioning** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Static Positioning (Default Normal Flow)!\n\nइस पाठ में हम **Static Positioning** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Static Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Static Positioning (Default Normal Flow)\n* **Static Positioning** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 45,
    "slug": "css-position-relative-offset-coordinates",
    "title": "Relative Positioning (position: relative, top, left)",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 45)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Relative Positioning' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Relative Positioning'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Relative Positioning'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Relative Positioning' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Relative Positioning' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Relative Positioning' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Relative Positioning' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Relative Positioning' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Relative Positioning' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Relative Positioning (position: relative, top, left)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Relative Positioning** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Relative Positioning** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Relative Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Relative Positioning (position: relative, top, left)\n\nA comprehensive technical deep-dive into **Relative Positioning** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Relative Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Relative Positioning (position: relative, top, left) Seekhein!\n\nIs lesson me hum **Relative Positioning** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Relative Positioning** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Relative Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Relative Positioning (position: relative, top, left)\n* **Relative Positioning** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Relative Positioning (position: relative, top, left)!\n\nइस पाठ में हम **Relative Positioning** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Relative Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Relative Positioning (position: relative, top, left)\n* **Relative Positioning** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 46,
    "slug": "css-position-absolute-nested-relative-parent",
    "title": "Absolute Positioning (position: absolute with relative parent)",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 46)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Absolute Positioning' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Absolute Positioning'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Absolute Positioning'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Absolute Positioning' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Absolute Positioning' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Absolute Positioning' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Absolute Positioning' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Absolute Positioning' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Absolute Positioning' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Absolute Positioning (position: absolute with relative parent)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Absolute Positioning** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Absolute Positioning** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Absolute Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Absolute Positioning (position: absolute with relative parent)\n\nA comprehensive technical deep-dive into **Absolute Positioning** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Absolute Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Absolute Positioning (position: absolute with relative parent) Seekhein!\n\nIs lesson me hum **Absolute Positioning** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Absolute Positioning** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Absolute Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Absolute Positioning (position: absolute with relative parent)\n* **Absolute Positioning** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Absolute Positioning (position: absolute with relative parent)!\n\nइस पाठ में हम **Absolute Positioning** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Absolute Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Absolute Positioning (position: absolute with relative parent)\n* **Absolute Positioning** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 47,
    "slug": "css-position-fixed-floating-navbars-modals",
    "title": "Fixed Positioning (position: fixed Sticky Navbars & Modals)",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 47)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Fixed Positioning' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Fixed Positioning'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Fixed Positioning'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Fixed Positioning' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Fixed Positioning' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Fixed Positioning' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Fixed Positioning' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Fixed Positioning' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Fixed Positioning' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Fixed Positioning (position: fixed Sticky Navbars & Modals)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Fixed Positioning** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Fixed Positioning** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Fixed Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Fixed Positioning (position: fixed Sticky Navbars & Modals)\n\nA comprehensive technical deep-dive into **Fixed Positioning** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Fixed Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Fixed Positioning (position: fixed Sticky Navbars & Modals) Seekhein!\n\nIs lesson me hum **Fixed Positioning** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Fixed Positioning** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Fixed Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Fixed Positioning (position: fixed Sticky Navbars & Modals)\n* **Fixed Positioning** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Fixed Positioning (position: fixed Sticky Navbars & Modals)!\n\nइस पाठ में हम **Fixed Positioning** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Fixed Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Fixed Positioning (position: fixed Sticky Navbars & Modals)\n* **Fixed Positioning** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 48,
    "slug": "css-position-sticky-headers-sidebars",
    "title": "Sticky Positioning (position: sticky Headers & Sidebars)",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 48)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Sticky Positioning' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Sticky Positioning'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Sticky Positioning'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Sticky Positioning' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Sticky Positioning' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Sticky Positioning' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Sticky Positioning' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Sticky Positioning' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Sticky Positioning' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Sticky Positioning (position: sticky Headers & Sidebars)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Sticky Positioning** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Sticky Positioning** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Sticky Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Sticky Positioning (position: sticky Headers & Sidebars)\n\nA comprehensive technical deep-dive into **Sticky Positioning** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Sticky Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Sticky Positioning (position: sticky Headers & Sidebars) Seekhein!\n\nIs lesson me hum **Sticky Positioning** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Sticky Positioning** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Sticky Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Sticky Positioning (position: sticky Headers & Sidebars)\n* **Sticky Positioning** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Sticky Positioning (position: sticky Headers & Sidebars)!\n\nइस पाठ में हम **Sticky Positioning** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Sticky Positioning */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Sticky Positioning (position: sticky Headers & Sidebars)\n* **Sticky Positioning** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 49,
    "slug": "css-z-index-stacking-context-layering",
    "title": "Stacking Context & Z-Index (z-index Layering Wars)",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 49)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Stacking Context & Z-Index' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Stacking Context & Z-Index'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Stacking Context & Z-Index'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Stacking Context & Z-Index' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Stacking Context & Z-Index' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Stacking Context & Z-Index' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Stacking Context & Z-Index' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Stacking Context & Z-Index' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Stacking Context & Z-Index' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Stacking Context & Z-Index (z-index Layering Wars)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Stacking Context & Z-Index** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Stacking Context & Z-Index** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Stacking Context & Z-Index */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Stacking Context & Z-Index (z-index Layering Wars)\n\nA comprehensive technical deep-dive into **Stacking Context & Z-Index** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Stacking Context & Z-Index */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Stacking Context & Z-Index (z-index Layering Wars) Seekhein!\n\nIs lesson me hum **Stacking Context & Z-Index** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Stacking Context & Z-Index** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Stacking Context & Z-Index */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Stacking Context & Z-Index (z-index Layering Wars)\n* **Stacking Context & Z-Index** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Stacking Context & Z-Index (z-index Layering Wars)!\n\nइस पाठ में हम **Stacking Context & Z-Index** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Stacking Context & Z-Index */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Stacking Context & Z-Index (z-index Layering Wars)\n* **Stacking Context & Z-Index** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 50,
    "slug": "css-overflow-visible-hidden-scroll-auto",
    "title": "Overflow Handling: visible, hidden, scroll, auto",
    "unit": "Unit 5: Display Types & Modern Positioning",
    "bookRef": "Nextsem CSS Master Guide (Lesson 50)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Overflow Handling: visible, hidden, scroll, auto' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Overflow Handling: visible, hidden, scroll, auto'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Overflow Handling: visible, hidden, scroll, auto'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Overflow Handling: visible, hidden, scroll, auto' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Overflow Handling: visible, hidden, scroll, auto' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Overflow Handling: visible, hidden, scroll, auto' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Overflow Handling: visible, hidden, scroll, auto' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Overflow Handling: visible, hidden, scroll, auto' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Overflow Handling: visible, hidden, scroll, auto' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Overflow Handling: visible, hidden, scroll, auto!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Overflow Handling: visible, hidden, scroll, auto** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Overflow Handling: visible, hidden, scroll, auto** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Overflow Handling: visible, hidden, scroll, auto */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Overflow Handling: visible, hidden, scroll, auto\n\nA comprehensive technical deep-dive into **Overflow Handling: visible, hidden, scroll, auto** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Overflow Handling: visible, hidden, scroll, auto */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Overflow Handling: visible, hidden, scroll, auto Seekhein!\n\nIs lesson me hum **Overflow Handling: visible, hidden, scroll, auto** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Overflow Handling: visible, hidden, scroll, auto** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Overflow Handling: visible, hidden, scroll, auto */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Overflow Handling: visible, hidden, scroll, auto\n* **Overflow Handling: visible, hidden, scroll, auto** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Overflow Handling: visible, hidden, scroll, auto!\n\nइस पाठ में हम **Overflow Handling: visible, hidden, scroll, auto** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Overflow Handling: visible, hidden, scroll, auto */\n.sticky-navbar {\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px;\n  background: rgba(23, 24, 28, 0.95);\n  backdrop-filter: blur(12px);\n  z-index: 100;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Overflow Handling: visible, hidden, scroll, auto\n* **Overflow Handling: visible, hidden, scroll, auto** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 51,
    "slug": "introduction-to-css-flexbox-axes",
    "title": "Introduction to Flexbox (display: flex, Main Axis vs Cross Axis)",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 51)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Introduction to Flexbox' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Introduction to Flexbox'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Introduction to Flexbox'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Introduction to Flexbox' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Introduction to Flexbox' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Introduction to Flexbox' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Introduction to Flexbox' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Introduction to Flexbox' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Introduction to Flexbox' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Introduction to Flexbox (display: flex, Main Axis vs Cross Axis)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Introduction to Flexbox** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Introduction to Flexbox** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Introduction to Flexbox */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Introduction to Flexbox (display: flex, Main Axis vs Cross Axis)\n\nA comprehensive technical deep-dive into **Introduction to Flexbox** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Introduction to Flexbox */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Introduction to Flexbox (display: flex, Main Axis vs Cross Axis) Seekhein!\n\nIs lesson me hum **Introduction to Flexbox** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Introduction to Flexbox** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Introduction to Flexbox */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Introduction to Flexbox (display: flex, Main Axis vs Cross Axis)\n* **Introduction to Flexbox** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Introduction to Flexbox (display: flex, Main Axis vs Cross Axis)!\n\nइस पाठ में हम **Introduction to Flexbox** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Introduction to Flexbox */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Introduction to Flexbox (display: flex, Main Axis vs Cross Axis)\n* **Introduction to Flexbox** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 52,
    "slug": "css-flex-direction-row-column-reverse",
    "title": "Flex Direction: row, column, row-reverse, column-reverse",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 52)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Flex Direction: row, column, row-reverse, column-reverse' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Flex Direction: row, column, row-reverse, column-reverse'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Flex Direction: row, column, row-reverse, column-reverse'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Flex Direction: row, column, row-reverse, column-reverse' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Flex Direction: row, column, row-reverse, column-reverse' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Flex Direction: row, column, row-reverse, column-reverse' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Flex Direction: row, column, row-reverse, column-reverse' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Flex Direction: row, column, row-reverse, column-reverse' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Flex Direction: row, column, row-reverse, column-reverse' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Flex Direction: row, column, row-reverse, column-reverse!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Flex Direction: row, column, row-reverse, column-reverse** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Flex Direction: row, column, row-reverse, column-reverse** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Flex Direction: row, column, row-reverse, column-reverse */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Flex Direction: row, column, row-reverse, column-reverse\n\nA comprehensive technical deep-dive into **Flex Direction: row, column, row-reverse, column-reverse** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Flex Direction: row, column, row-reverse, column-reverse */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Flex Direction: row, column, row-reverse, column-reverse Seekhein!\n\nIs lesson me hum **Flex Direction: row, column, row-reverse, column-reverse** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Flex Direction: row, column, row-reverse, column-reverse** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Flex Direction: row, column, row-reverse, column-reverse */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Flex Direction: row, column, row-reverse, column-reverse\n* **Flex Direction: row, column, row-reverse, column-reverse** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Flex Direction: row, column, row-reverse, column-reverse!\n\nइस पाठ में हम **Flex Direction: row, column, row-reverse, column-reverse** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Flex Direction: row, column, row-reverse, column-reverse */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Flex Direction: row, column, row-reverse, column-reverse\n* **Flex Direction: row, column, row-reverse, column-reverse** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 53,
    "slug": "css-flex-wrap-multiline-layouts",
    "title": "Flex Wrap & Multi-line Flex Items (flex-wrap: wrap)",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 53)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Flex Wrap & Multi-line Flex Items' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Flex Wrap & Multi-line Flex Items'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Flex Wrap & Multi-line Flex Items'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Flex Wrap & Multi-line Flex Items' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Flex Wrap & Multi-line Flex Items' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Flex Wrap & Multi-line Flex Items' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Flex Wrap & Multi-line Flex Items' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Flex Wrap & Multi-line Flex Items' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Flex Wrap & Multi-line Flex Items' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Flex Wrap & Multi-line Flex Items (flex-wrap: wrap)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Flex Wrap & Multi-line Flex Items** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Flex Wrap & Multi-line Flex Items** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Flex Wrap & Multi-line Flex Items */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Flex Wrap & Multi-line Flex Items (flex-wrap: wrap)\n\nA comprehensive technical deep-dive into **Flex Wrap & Multi-line Flex Items** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Flex Wrap & Multi-line Flex Items */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Flex Wrap & Multi-line Flex Items (flex-wrap: wrap) Seekhein!\n\nIs lesson me hum **Flex Wrap & Multi-line Flex Items** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Flex Wrap & Multi-line Flex Items** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Flex Wrap & Multi-line Flex Items */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Flex Wrap & Multi-line Flex Items (flex-wrap: wrap)\n* **Flex Wrap & Multi-line Flex Items** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Flex Wrap & Multi-line Flex Items (flex-wrap: wrap)!\n\nइस पाठ में हम **Flex Wrap & Multi-line Flex Items** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Flex Wrap & Multi-line Flex Items */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Flex Wrap & Multi-line Flex Items (flex-wrap: wrap)\n* **Flex Wrap & Multi-line Flex Items** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 54,
    "slug": "css-justify-content-main-axis-alignment",
    "title": "Justify Content: Main Axis Alignment (center, space-between, space-evenly)",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 54)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Justify Content: Main Axis Alignment' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Justify Content: Main Axis Alignment'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Justify Content: Main Axis Alignment'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Justify Content: Main Axis Alignment' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Justify Content: Main Axis Alignment' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Justify Content: Main Axis Alignment' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Justify Content: Main Axis Alignment' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Justify Content: Main Axis Alignment' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Justify Content: Main Axis Alignment' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Justify Content: Main Axis Alignment (center, space-between, space-evenly)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Justify Content: Main Axis Alignment** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Justify Content: Main Axis Alignment** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Justify Content: Main Axis Alignment */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Justify Content: Main Axis Alignment (center, space-between, space-evenly)\n\nA comprehensive technical deep-dive into **Justify Content: Main Axis Alignment** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Justify Content: Main Axis Alignment */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Justify Content: Main Axis Alignment (center, space-between, space-evenly) Seekhein!\n\nIs lesson me hum **Justify Content: Main Axis Alignment** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Justify Content: Main Axis Alignment** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Justify Content: Main Axis Alignment */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Justify Content: Main Axis Alignment (center, space-between, space-evenly)\n* **Justify Content: Main Axis Alignment** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Justify Content: Main Axis Alignment (center, space-between, space-evenly)!\n\nइस पाठ में हम **Justify Content: Main Axis Alignment** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Justify Content: Main Axis Alignment */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Justify Content: Main Axis Alignment (center, space-between, space-evenly)\n* **Justify Content: Main Axis Alignment** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 55,
    "slug": "css-align-items-cross-axis-alignment",
    "title": "Align Items: Cross Axis Alignment (stretch, center, baseline)",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 55)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Align Items: Cross Axis Alignment' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Align Items: Cross Axis Alignment'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Align Items: Cross Axis Alignment'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Align Items: Cross Axis Alignment' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Align Items: Cross Axis Alignment' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Align Items: Cross Axis Alignment' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Align Items: Cross Axis Alignment' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Align Items: Cross Axis Alignment' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Align Items: Cross Axis Alignment' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Align Items: Cross Axis Alignment (stretch, center, baseline)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Align Items: Cross Axis Alignment** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Align Items: Cross Axis Alignment** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Align Items: Cross Axis Alignment */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Align Items: Cross Axis Alignment (stretch, center, baseline)\n\nA comprehensive technical deep-dive into **Align Items: Cross Axis Alignment** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Align Items: Cross Axis Alignment */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Align Items: Cross Axis Alignment (stretch, center, baseline) Seekhein!\n\nIs lesson me hum **Align Items: Cross Axis Alignment** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Align Items: Cross Axis Alignment** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Align Items: Cross Axis Alignment */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Align Items: Cross Axis Alignment (stretch, center, baseline)\n* **Align Items: Cross Axis Alignment** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Align Items: Cross Axis Alignment (stretch, center, baseline)!\n\nइस पाठ में हम **Align Items: Cross Axis Alignment** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Align Items: Cross Axis Alignment */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Align Items: Cross Axis Alignment (stretch, center, baseline)\n* **Align Items: Cross Axis Alignment** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 56,
    "slug": "css-align-content-multiline-flex-alignment",
    "title": "Align Content for Multi-line Flex Containers",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 56)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Align Content for Multi-line Flex Containers' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Align Content for Multi-line Flex Containers'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Align Content for Multi-line Flex Containers'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Align Content for Multi-line Flex Containers' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Align Content for Multi-line Flex Containers' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Align Content for Multi-line Flex Containers' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Align Content for Multi-line Flex Containers' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Align Content for Multi-line Flex Containers' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Align Content for Multi-line Flex Containers' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Align Content for Multi-line Flex Containers!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Align Content for Multi-line Flex Containers** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Align Content for Multi-line Flex Containers** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Align Content for Multi-line Flex Containers */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Align Content for Multi-line Flex Containers\n\nA comprehensive technical deep-dive into **Align Content for Multi-line Flex Containers** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Align Content for Multi-line Flex Containers */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Align Content for Multi-line Flex Containers Seekhein!\n\nIs lesson me hum **Align Content for Multi-line Flex Containers** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Align Content for Multi-line Flex Containers** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Align Content for Multi-line Flex Containers */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Align Content for Multi-line Flex Containers\n* **Align Content for Multi-line Flex Containers** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Align Content for Multi-line Flex Containers!\n\nइस पाठ में हम **Align Content for Multi-line Flex Containers** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Align Content for Multi-line Flex Containers */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Align Content for Multi-line Flex Containers\n* **Align Content for Multi-line Flex Containers** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 57,
    "slug": "css-flex-grow-shrink-basis-shorthand",
    "title": "Flex Grow, Shrink & Basis (flex: 1 1 auto Shorthand)",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 57)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Flex Grow, Shrink & Basis' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Flex Grow, Shrink & Basis'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Flex Grow, Shrink & Basis'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Flex Grow, Shrink & Basis' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Flex Grow, Shrink & Basis' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Flex Grow, Shrink & Basis' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Flex Grow, Shrink & Basis' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Flex Grow, Shrink & Basis' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Flex Grow, Shrink & Basis' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Flex Grow, Shrink & Basis (flex: 1 1 auto Shorthand)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Flex Grow, Shrink & Basis** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Flex Grow, Shrink & Basis** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Flex Grow, Shrink & Basis */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Flex Grow, Shrink & Basis (flex: 1 1 auto Shorthand)\n\nA comprehensive technical deep-dive into **Flex Grow, Shrink & Basis** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Flex Grow, Shrink & Basis */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Flex Grow, Shrink & Basis (flex: 1 1 auto Shorthand) Seekhein!\n\nIs lesson me hum **Flex Grow, Shrink & Basis** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Flex Grow, Shrink & Basis** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Flex Grow, Shrink & Basis */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Flex Grow, Shrink & Basis (flex: 1 1 auto Shorthand)\n* **Flex Grow, Shrink & Basis** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Flex Grow, Shrink & Basis (flex: 1 1 auto Shorthand)!\n\nइस पाठ में हम **Flex Grow, Shrink & Basis** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Flex Grow, Shrink & Basis */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Flex Grow, Shrink & Basis (flex: 1 1 auto Shorthand)\n* **Flex Grow, Shrink & Basis** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 58,
    "slug": "css-align-self-individual-item-alignment",
    "title": "Align Self (Overriding Individual Flex Items)",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 58)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Align Self' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Align Self'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Align Self'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Align Self' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Align Self' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Align Self' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Align Self' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Align Self' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Align Self' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Align Self (Overriding Individual Flex Items)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Align Self** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Align Self** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Align Self */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Align Self (Overriding Individual Flex Items)\n\nA comprehensive technical deep-dive into **Align Self** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Align Self */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Align Self (Overriding Individual Flex Items) Seekhein!\n\nIs lesson me hum **Align Self** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Align Self** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Align Self */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Align Self (Overriding Individual Flex Items)\n* **Align Self** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Align Self (Overriding Individual Flex Items)!\n\nइस पाठ में हम **Align Self** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Align Self */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Align Self (Overriding Individual Flex Items)\n* **Align Self** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 59,
    "slug": "css-flexbox-gap-spacing-between-items",
    "title": "Flex Gap (gap, row-gap, column-gap)",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 59)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Flex Gap' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Flex Gap'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Flex Gap'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Flex Gap' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Flex Gap' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Flex Gap' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Flex Gap' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Flex Gap' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Flex Gap' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Flex Gap (gap, row-gap, column-gap)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Flex Gap** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Flex Gap** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Flex Gap */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Flex Gap (gap, row-gap, column-gap)\n\nA comprehensive technical deep-dive into **Flex Gap** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Flex Gap */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Flex Gap (gap, row-gap, column-gap) Seekhein!\n\nIs lesson me hum **Flex Gap** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Flex Gap** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Flex Gap */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Flex Gap (gap, row-gap, column-gap)\n* **Flex Gap** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Flex Gap (gap, row-gap, column-gap)!\n\nइस पाठ में हम **Flex Gap** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Flex Gap */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Flex Gap (gap, row-gap, column-gap)\n* **Flex Gap** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 60,
    "slug": "capstone-responsive-flexbox-navigation-bar",
    "title": "Capstone Project: Responsive Flexbox Navigation Bar",
    "unit": "Unit 6: CSS Flexbox 1D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 60)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Capstone Project: Responsive Flexbox Navigation Bar' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Capstone Project: Responsive Flexbox Navigation Bar'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Capstone Project: Responsive Flexbox Navigation Bar'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Capstone Project: Responsive Flexbox Navigation Bar' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Capstone Project: Responsive Flexbox Navigation Bar' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Capstone Project: Responsive Flexbox Navigation Bar' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Capstone Project: Responsive Flexbox Navigation Bar' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Capstone Project: Responsive Flexbox Navigation Bar' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Capstone Project: Responsive Flexbox Navigation Bar' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Capstone Project: Responsive Flexbox Navigation Bar!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Capstone Project: Responsive Flexbox Navigation Bar** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Capstone Project: Responsive Flexbox Navigation Bar** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Capstone Project: Responsive Flexbox Navigation Bar */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Capstone Project: Responsive Flexbox Navigation Bar\n\nA comprehensive technical deep-dive into **Capstone Project: Responsive Flexbox Navigation Bar** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Capstone Project: Responsive Flexbox Navigation Bar */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Capstone Project: Responsive Flexbox Navigation Bar Seekhein!\n\nIs lesson me hum **Capstone Project: Responsive Flexbox Navigation Bar** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Capstone Project: Responsive Flexbox Navigation Bar** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Capstone Project: Responsive Flexbox Navigation Bar */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Capstone Project: Responsive Flexbox Navigation Bar\n* **Capstone Project: Responsive Flexbox Navigation Bar** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Capstone Project: Responsive Flexbox Navigation Bar!\n\nइस पाठ में हम **Capstone Project: Responsive Flexbox Navigation Bar** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Capstone Project: Responsive Flexbox Navigation Bar */\n.flex-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n  padding: 20px;\n  background-color: #0f172a;\n  border-radius: 12px;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Capstone Project: Responsive Flexbox Navigation Bar\n* **Capstone Project: Responsive Flexbox Navigation Bar** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 61,
    "slug": "introduction-to-css-grid-2d-layout",
    "title": "Introduction to CSS Grid (display: grid, Rows & Columns)",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 61)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Introduction to CSS Grid' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Introduction to CSS Grid'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Introduction to CSS Grid'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Introduction to CSS Grid' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Introduction to CSS Grid' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Introduction to CSS Grid' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Introduction to CSS Grid' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Introduction to CSS Grid' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Introduction to CSS Grid' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Introduction to CSS Grid (display: grid, Rows & Columns)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Introduction to CSS Grid** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Introduction to CSS Grid** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Introduction to CSS Grid */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Introduction to CSS Grid (display: grid, Rows & Columns)\n\nA comprehensive technical deep-dive into **Introduction to CSS Grid** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Introduction to CSS Grid */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Introduction to CSS Grid (display: grid, Rows & Columns) Seekhein!\n\nIs lesson me hum **Introduction to CSS Grid** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Introduction to CSS Grid** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Introduction to CSS Grid */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Introduction to CSS Grid (display: grid, Rows & Columns)\n* **Introduction to CSS Grid** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Introduction to CSS Grid (display: grid, Rows & Columns)!\n\nइस पाठ में हम **Introduction to CSS Grid** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Introduction to CSS Grid */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Introduction to CSS Grid (display: grid, Rows & Columns)\n* **Introduction to CSS Grid** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 62,
    "slug": "css-grid-template-columns-rows-definition",
    "title": "Defining Columns & Rows (grid-template-columns, grid-template-rows)",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 62)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Defining Columns & Rows' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Defining Columns & Rows'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Defining Columns & Rows'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Defining Columns & Rows' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Defining Columns & Rows' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Defining Columns & Rows' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Defining Columns & Rows' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Defining Columns & Rows' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Defining Columns & Rows' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Defining Columns & Rows (grid-template-columns, grid-template-rows)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Defining Columns & Rows** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Defining Columns & Rows** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Defining Columns & Rows */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Defining Columns & Rows (grid-template-columns, grid-template-rows)\n\nA comprehensive technical deep-dive into **Defining Columns & Rows** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Defining Columns & Rows */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Defining Columns & Rows (grid-template-columns, grid-template-rows) Seekhein!\n\nIs lesson me hum **Defining Columns & Rows** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Defining Columns & Rows** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Defining Columns & Rows */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Defining Columns & Rows (grid-template-columns, grid-template-rows)\n* **Defining Columns & Rows** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Defining Columns & Rows (grid-template-columns, grid-template-rows)!\n\nइस पाठ में हम **Defining Columns & Rows** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Defining Columns & Rows */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Defining Columns & Rows (grid-template-columns, grid-template-rows)\n* **Defining Columns & Rows** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 63,
    "slug": "css-grid-fr-fraction-unit-repeat-function",
    "title": "The Flexible Fraction Unit (1fr, 2fr) & repeat() Function",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 63)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'The Flexible Fraction Unit  Function' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'The Flexible Fraction Unit  Function'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'The Flexible Fraction Unit  Function'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'The Flexible Fraction Unit  Function' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'The Flexible Fraction Unit  Function' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'The Flexible Fraction Unit  Function' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'The Flexible Fraction Unit  Function' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'The Flexible Fraction Unit  Function' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'The Flexible Fraction Unit  Function' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: The Flexible Fraction Unit (1fr, 2fr) & repeat() Function!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **The Flexible Fraction Unit  Function** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **The Flexible Fraction Unit  Function** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* The Flexible Fraction Unit  Function */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: The Flexible Fraction Unit (1fr, 2fr) & repeat() Function\n\nA comprehensive technical deep-dive into **The Flexible Fraction Unit  Function** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* The Flexible Fraction Unit  Function */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 The Flexible Fraction Unit (1fr, 2fr) & repeat() Function Seekhein!\n\nIs lesson me hum **The Flexible Fraction Unit  Function** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **The Flexible Fraction Unit  Function** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* The Flexible Fraction Unit  Function */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: The Flexible Fraction Unit (1fr, 2fr) & repeat() Function\n* **The Flexible Fraction Unit  Function** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: The Flexible Fraction Unit (1fr, 2fr) & repeat() Function!\n\nइस पाठ में हम **The Flexible Fraction Unit  Function** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* The Flexible Fraction Unit  Function */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: The Flexible Fraction Unit (1fr, 2fr) & repeat() Function\n* **The Flexible Fraction Unit  Function** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 64,
    "slug": "css-grid-gap-spacing-properties",
    "title": "Grid Gap Spacing (gap, grid-row-gap, grid-column-gap)",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 64)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Grid Gap Spacing' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Grid Gap Spacing'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Grid Gap Spacing'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Grid Gap Spacing' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Grid Gap Spacing' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Grid Gap Spacing' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Grid Gap Spacing' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Grid Gap Spacing' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Grid Gap Spacing' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Grid Gap Spacing (gap, grid-row-gap, grid-column-gap)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Grid Gap Spacing** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Grid Gap Spacing** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Grid Gap Spacing */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Grid Gap Spacing (gap, grid-row-gap, grid-column-gap)\n\nA comprehensive technical deep-dive into **Grid Gap Spacing** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Grid Gap Spacing */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Grid Gap Spacing (gap, grid-row-gap, grid-column-gap) Seekhein!\n\nIs lesson me hum **Grid Gap Spacing** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Grid Gap Spacing** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Grid Gap Spacing */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Grid Gap Spacing (gap, grid-row-gap, grid-column-gap)\n* **Grid Gap Spacing** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Grid Gap Spacing (gap, grid-row-gap, grid-column-gap)!\n\nइस पाठ में हम **Grid Gap Spacing** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Grid Gap Spacing */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Grid Gap Spacing (gap, grid-row-gap, grid-column-gap)\n* **Grid Gap Spacing** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 65,
    "slug": "css-grid-line-placement-column-span",
    "title": "Grid Line Placement (grid-column-start, grid-column-end, span)",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 65)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Grid Line Placement' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Grid Line Placement'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Grid Line Placement'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Grid Line Placement' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Grid Line Placement' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Grid Line Placement' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Grid Line Placement' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Grid Line Placement' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Grid Line Placement' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Grid Line Placement (grid-column-start, grid-column-end, span)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Grid Line Placement** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Grid Line Placement** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Grid Line Placement */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Grid Line Placement (grid-column-start, grid-column-end, span)\n\nA comprehensive technical deep-dive into **Grid Line Placement** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Grid Line Placement */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Grid Line Placement (grid-column-start, grid-column-end, span) Seekhein!\n\nIs lesson me hum **Grid Line Placement** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Grid Line Placement** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Grid Line Placement */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Grid Line Placement (grid-column-start, grid-column-end, span)\n* **Grid Line Placement** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Grid Line Placement (grid-column-start, grid-column-end, span)!\n\nइस पाठ में हम **Grid Line Placement** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Grid Line Placement */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Grid Line Placement (grid-column-start, grid-column-end, span)\n* **Grid Line Placement** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 66,
    "slug": "css-grid-template-areas-visual-layout",
    "title": "Named Grid Template Areas (grid-template-areas)",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 66)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Named Grid Template Areas' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Named Grid Template Areas'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Named Grid Template Areas'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Named Grid Template Areas' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Named Grid Template Areas' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Named Grid Template Areas' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Named Grid Template Areas' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Named Grid Template Areas' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Named Grid Template Areas' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Named Grid Template Areas (grid-template-areas)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Named Grid Template Areas** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Named Grid Template Areas** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Named Grid Template Areas */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Named Grid Template Areas (grid-template-areas)\n\nA comprehensive technical deep-dive into **Named Grid Template Areas** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Named Grid Template Areas */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Named Grid Template Areas (grid-template-areas) Seekhein!\n\nIs lesson me hum **Named Grid Template Areas** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Named Grid Template Areas** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Named Grid Template Areas */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Named Grid Template Areas (grid-template-areas)\n* **Named Grid Template Areas** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Named Grid Template Areas (grid-template-areas)!\n\nइस पाठ में हम **Named Grid Template Areas** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Named Grid Template Areas */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Named Grid Template Areas (grid-template-areas)\n* **Named Grid Template Areas** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 67,
    "slug": "css-grid-auto-fit-auto-fill-minmax-cards",
    "title": "Auto-Fit vs Auto-Fill with minmax() (Responsive Card Grid)",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 67)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Auto-Fit vs Auto-Fill with minmax' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Auto-Fit vs Auto-Fill with minmax'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Auto-Fit vs Auto-Fill with minmax'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Auto-Fit vs Auto-Fill with minmax' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Auto-Fit vs Auto-Fill with minmax' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Auto-Fit vs Auto-Fill with minmax' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Auto-Fit vs Auto-Fill with minmax' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Auto-Fit vs Auto-Fill with minmax' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Auto-Fit vs Auto-Fill with minmax' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Auto-Fit vs Auto-Fill with minmax() (Responsive Card Grid)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Auto-Fit vs Auto-Fill with minmax** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Auto-Fit vs Auto-Fill with minmax** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Auto-Fit vs Auto-Fill with minmax */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Auto-Fit vs Auto-Fill with minmax() (Responsive Card Grid)\n\nA comprehensive technical deep-dive into **Auto-Fit vs Auto-Fill with minmax** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Auto-Fit vs Auto-Fill with minmax */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Auto-Fit vs Auto-Fill with minmax() (Responsive Card Grid) Seekhein!\n\nIs lesson me hum **Auto-Fit vs Auto-Fill with minmax** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Auto-Fit vs Auto-Fill with minmax** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Auto-Fit vs Auto-Fill with minmax */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Auto-Fit vs Auto-Fill with minmax() (Responsive Card Grid)\n* **Auto-Fit vs Auto-Fill with minmax** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Auto-Fit vs Auto-Fill with minmax() (Responsive Card Grid)!\n\nइस पाठ में हम **Auto-Fit vs Auto-Fill with minmax** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Auto-Fit vs Auto-Fill with minmax */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Auto-Fit vs Auto-Fill with minmax() (Responsive Card Grid)\n* **Auto-Fit vs Auto-Fill with minmax** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 68,
    "slug": "css-grid-alignment-items-and-tracks",
    "title": "Aligning Grid Items & Tracks (justify-items, align-items, place-items)",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 68)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Aligning Grid Items & Tracks' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Aligning Grid Items & Tracks'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Aligning Grid Items & Tracks'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Aligning Grid Items & Tracks' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Aligning Grid Items & Tracks' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Aligning Grid Items & Tracks' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Aligning Grid Items & Tracks' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Aligning Grid Items & Tracks' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Aligning Grid Items & Tracks' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Aligning Grid Items & Tracks (justify-items, align-items, place-items)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Aligning Grid Items & Tracks** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Aligning Grid Items & Tracks** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Aligning Grid Items & Tracks */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Aligning Grid Items & Tracks (justify-items, align-items, place-items)\n\nA comprehensive technical deep-dive into **Aligning Grid Items & Tracks** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Aligning Grid Items & Tracks */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Aligning Grid Items & Tracks (justify-items, align-items, place-items) Seekhein!\n\nIs lesson me hum **Aligning Grid Items & Tracks** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Aligning Grid Items & Tracks** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Aligning Grid Items & Tracks */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Aligning Grid Items & Tracks (justify-items, align-items, place-items)\n* **Aligning Grid Items & Tracks** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Aligning Grid Items & Tracks (justify-items, align-items, place-items)!\n\nइस पाठ में हम **Aligning Grid Items & Tracks** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Aligning Grid Items & Tracks */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Aligning Grid Items & Tracks (justify-items, align-items, place-items)\n* **Aligning Grid Items & Tracks** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 69,
    "slug": "css-subgrid-nested-grid-inheritance",
    "title": "Subgrid & Nested Grids (grid-template-columns: subgrid)",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 69)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Subgrid & Nested Grids' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Subgrid & Nested Grids'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Subgrid & Nested Grids'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Subgrid & Nested Grids' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Subgrid & Nested Grids' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Subgrid & Nested Grids' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Subgrid & Nested Grids' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Subgrid & Nested Grids' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Subgrid & Nested Grids' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Subgrid & Nested Grids (grid-template-columns: subgrid)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Subgrid & Nested Grids** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Subgrid & Nested Grids** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Subgrid & Nested Grids */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Subgrid & Nested Grids (grid-template-columns: subgrid)\n\nA comprehensive technical deep-dive into **Subgrid & Nested Grids** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Subgrid & Nested Grids */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Subgrid & Nested Grids (grid-template-columns: subgrid) Seekhein!\n\nIs lesson me hum **Subgrid & Nested Grids** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Subgrid & Nested Grids** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Subgrid & Nested Grids */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Subgrid & Nested Grids (grid-template-columns: subgrid)\n* **Subgrid & Nested Grids** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Subgrid & Nested Grids (grid-template-columns: subgrid)!\n\nइस पाठ में हम **Subgrid & Nested Grids** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Subgrid & Nested Grids */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Subgrid & Nested Grids (grid-template-columns: subgrid)\n* **Subgrid & Nested Grids** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 70,
    "slug": "capstone-responsive-dashboard-grid-layout",
    "title": "Capstone Project: Responsive Dashboard 2D Grid",
    "unit": "Unit 7: CSS Grid 2D Layout System",
    "bookRef": "Nextsem CSS Master Guide (Lesson 70)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Capstone Project: Responsive Dashboard 2D Grid' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Capstone Project: Responsive Dashboard 2D Grid'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Capstone Project: Responsive Dashboard 2D Grid'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Capstone Project: Responsive Dashboard 2D Grid' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Capstone Project: Responsive Dashboard 2D Grid' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Capstone Project: Responsive Dashboard 2D Grid' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Capstone Project: Responsive Dashboard 2D Grid' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Capstone Project: Responsive Dashboard 2D Grid' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Capstone Project: Responsive Dashboard 2D Grid' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Capstone Project: Responsive Dashboard 2D Grid!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Capstone Project: Responsive Dashboard 2D Grid** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Capstone Project: Responsive Dashboard 2D Grid** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Capstone Project: Responsive Dashboard 2D Grid */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Capstone Project: Responsive Dashboard 2D Grid\n\nA comprehensive technical deep-dive into **Capstone Project: Responsive Dashboard 2D Grid** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Capstone Project: Responsive Dashboard 2D Grid */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Capstone Project: Responsive Dashboard 2D Grid Seekhein!\n\nIs lesson me hum **Capstone Project: Responsive Dashboard 2D Grid** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Capstone Project: Responsive Dashboard 2D Grid** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Capstone Project: Responsive Dashboard 2D Grid */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Capstone Project: Responsive Dashboard 2D Grid\n* **Capstone Project: Responsive Dashboard 2D Grid** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Capstone Project: Responsive Dashboard 2D Grid!\n\nइस पाठ में हम **Capstone Project: Responsive Dashboard 2D Grid** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Capstone Project: Responsive Dashboard 2D Grid */\n.grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  padding: 24px;\n}\n\n.grid-item {\n  background-color: #1e293b;\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Capstone Project: Responsive Dashboard 2D Grid\n* **Capstone Project: Responsive Dashboard 2D Grid** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 71,
    "slug": "css-mobile-first-vs-desktop-first-strategy",
    "title": "Mobile-First vs. Desktop-First Design Strategies",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 71)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Mobile-First vs. Desktop-First Design Strategies' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Mobile-First vs. Desktop-First Design Strategies'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Mobile-First vs. Desktop-First Design Strategies'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Mobile-First vs. Desktop-First Design Strategies' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Mobile-First vs. Desktop-First Design Strategies' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Mobile-First vs. Desktop-First Design Strategies' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Mobile-First vs. Desktop-First Design Strategies' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Mobile-First vs. Desktop-First Design Strategies' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Mobile-First vs. Desktop-First Design Strategies' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Mobile-First vs. Desktop-First Design Strategies!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Mobile-First vs. Desktop-First Design Strategies** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Mobile-First vs. Desktop-First Design Strategies** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Mobile-First vs. Desktop-First Design Strategies */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Mobile-First vs. Desktop-First Design Strategies\n\nA comprehensive technical deep-dive into **Mobile-First vs. Desktop-First Design Strategies** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Mobile-First vs. Desktop-First Design Strategies */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Mobile-First vs. Desktop-First Design Strategies Seekhein!\n\nIs lesson me hum **Mobile-First vs. Desktop-First Design Strategies** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Mobile-First vs. Desktop-First Design Strategies** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Mobile-First vs. Desktop-First Design Strategies */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Mobile-First vs. Desktop-First Design Strategies\n* **Mobile-First vs. Desktop-First Design Strategies** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Mobile-First vs. Desktop-First Design Strategies!\n\nइस पाठ में हम **Mobile-First vs. Desktop-First Design Strategies** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Mobile-First vs. Desktop-First Design Strategies */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Mobile-First vs. Desktop-First Design Strategies\n* **Mobile-First vs. Desktop-First Design Strategies** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 72,
    "slug": "css-viewport-meta-tag-scale-configuration",
    "title": "Viewport Meta Tag & Responsive Scaling",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 72)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Viewport Meta Tag & Responsive Scaling' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Viewport Meta Tag & Responsive Scaling'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Viewport Meta Tag & Responsive Scaling'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Viewport Meta Tag & Responsive Scaling' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Viewport Meta Tag & Responsive Scaling' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Viewport Meta Tag & Responsive Scaling' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Viewport Meta Tag & Responsive Scaling' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Viewport Meta Tag & Responsive Scaling' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Viewport Meta Tag & Responsive Scaling' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Viewport Meta Tag & Responsive Scaling!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Viewport Meta Tag & Responsive Scaling** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Viewport Meta Tag & Responsive Scaling** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Viewport Meta Tag & Responsive Scaling */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Viewport Meta Tag & Responsive Scaling\n\nA comprehensive technical deep-dive into **Viewport Meta Tag & Responsive Scaling** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Viewport Meta Tag & Responsive Scaling */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Viewport Meta Tag & Responsive Scaling Seekhein!\n\nIs lesson me hum **Viewport Meta Tag & Responsive Scaling** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Viewport Meta Tag & Responsive Scaling** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Viewport Meta Tag & Responsive Scaling */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Viewport Meta Tag & Responsive Scaling\n* **Viewport Meta Tag & Responsive Scaling** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Viewport Meta Tag & Responsive Scaling!\n\nइस पाठ में हम **Viewport Meta Tag & Responsive Scaling** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Viewport Meta Tag & Responsive Scaling */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Viewport Meta Tag & Responsive Scaling\n* **Viewport Meta Tag & Responsive Scaling** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 73,
    "slug": "css-media-queries-syntax-breakpoints",
    "title": "Media Queries Syntax (@media screen and (min-width: 768px))",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 73)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Media Queries Syntax' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Media Queries Syntax'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Media Queries Syntax'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Media Queries Syntax' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Media Queries Syntax' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Media Queries Syntax' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Media Queries Syntax' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Media Queries Syntax' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Media Queries Syntax' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Media Queries Syntax (@media screen and (min-width: 768px))!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Media Queries Syntax** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Media Queries Syntax** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Media Queries Syntax */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Media Queries Syntax (@media screen and (min-width: 768px))\n\nA comprehensive technical deep-dive into **Media Queries Syntax** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Media Queries Syntax */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Media Queries Syntax (@media screen and (min-width: 768px)) Seekhein!\n\nIs lesson me hum **Media Queries Syntax** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Media Queries Syntax** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Media Queries Syntax */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Media Queries Syntax (@media screen and (min-width: 768px))\n* **Media Queries Syntax** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Media Queries Syntax (@media screen and (min-width: 768px))!\n\nइस पाठ में हम **Media Queries Syntax** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Media Queries Syntax */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Media Queries Syntax (@media screen and (min-width: 768px))\n* **Media Queries Syntax** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 74,
    "slug": "standard-css-responsive-breakpoints-guide",
    "title": "Standard Responsive Breakpoints (Mobile, Tablet, Laptop, 4K)",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 74)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Standard Responsive Breakpoints' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Standard Responsive Breakpoints'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Standard Responsive Breakpoints'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Standard Responsive Breakpoints' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Standard Responsive Breakpoints' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Standard Responsive Breakpoints' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Standard Responsive Breakpoints' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Standard Responsive Breakpoints' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Standard Responsive Breakpoints' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Standard Responsive Breakpoints (Mobile, Tablet, Laptop, 4K)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Standard Responsive Breakpoints** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Standard Responsive Breakpoints** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Standard Responsive Breakpoints */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Standard Responsive Breakpoints (Mobile, Tablet, Laptop, 4K)\n\nA comprehensive technical deep-dive into **Standard Responsive Breakpoints** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Standard Responsive Breakpoints */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Standard Responsive Breakpoints (Mobile, Tablet, Laptop, 4K) Seekhein!\n\nIs lesson me hum **Standard Responsive Breakpoints** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Standard Responsive Breakpoints** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Standard Responsive Breakpoints */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Standard Responsive Breakpoints (Mobile, Tablet, Laptop, 4K)\n* **Standard Responsive Breakpoints** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Standard Responsive Breakpoints (Mobile, Tablet, Laptop, 4K)!\n\nइस पाठ में हम **Standard Responsive Breakpoints** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Standard Responsive Breakpoints */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Standard Responsive Breakpoints (Mobile, Tablet, Laptop, 4K)\n* **Standard Responsive Breakpoints** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 75,
    "slug": "css-math-functions-calc-min-max-clamp",
    "title": "Modern CSS Math Functions: calc(), min(), max(), clamp()",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 75)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Modern CSS Math Functions: calc' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Modern CSS Math Functions: calc'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Modern CSS Math Functions: calc'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Modern CSS Math Functions: calc' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Modern CSS Math Functions: calc' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Modern CSS Math Functions: calc' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Modern CSS Math Functions: calc' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Modern CSS Math Functions: calc' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Modern CSS Math Functions: calc' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Modern CSS Math Functions: calc(), min(), max(), clamp()!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Modern CSS Math Functions: calc** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Modern CSS Math Functions: calc** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Modern CSS Math Functions: calc */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Modern CSS Math Functions: calc(), min(), max(), clamp()\n\nA comprehensive technical deep-dive into **Modern CSS Math Functions: calc** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Modern CSS Math Functions: calc */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Modern CSS Math Functions: calc(), min(), max(), clamp() Seekhein!\n\nIs lesson me hum **Modern CSS Math Functions: calc** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Modern CSS Math Functions: calc** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Modern CSS Math Functions: calc */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Modern CSS Math Functions: calc(), min(), max(), clamp()\n* **Modern CSS Math Functions: calc** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Modern CSS Math Functions: calc(), min(), max(), clamp()!\n\nइस पाठ में हम **Modern CSS Math Functions: calc** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Modern CSS Math Functions: calc */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Modern CSS Math Functions: calc(), min(), max(), clamp()\n* **Modern CSS Math Functions: calc** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 76,
    "slug": "fluid-responsive-typography-clamp-function",
    "title": "Responsive Typography with Fluid clamp(1rem, 2.5vw, 2.5rem)",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 76)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Responsive Typography with Fluid clamp' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Responsive Typography with Fluid clamp'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Responsive Typography with Fluid clamp'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Responsive Typography with Fluid clamp' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Responsive Typography with Fluid clamp' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Responsive Typography with Fluid clamp' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Responsive Typography with Fluid clamp' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Responsive Typography with Fluid clamp' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Responsive Typography with Fluid clamp' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Responsive Typography with Fluid clamp(1rem, 2.5vw, 2.5rem)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Responsive Typography with Fluid clamp** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Responsive Typography with Fluid clamp** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Responsive Typography with Fluid clamp */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Responsive Typography with Fluid clamp(1rem, 2.5vw, 2.5rem)\n\nA comprehensive technical deep-dive into **Responsive Typography with Fluid clamp** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Responsive Typography with Fluid clamp */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Responsive Typography with Fluid clamp(1rem, 2.5vw, 2.5rem) Seekhein!\n\nIs lesson me hum **Responsive Typography with Fluid clamp** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Responsive Typography with Fluid clamp** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Responsive Typography with Fluid clamp */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Responsive Typography with Fluid clamp(1rem, 2.5vw, 2.5rem)\n* **Responsive Typography with Fluid clamp** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Responsive Typography with Fluid clamp(1rem, 2.5vw, 2.5rem)!\n\nइस पाठ में हम **Responsive Typography with Fluid clamp** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Responsive Typography with Fluid clamp */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Responsive Typography with Fluid clamp(1rem, 2.5vw, 2.5rem)\n* **Responsive Typography with Fluid clamp** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 77,
    "slug": "css-media-features-hover-pointer-orientation",
    "title": "Media Features: Orientation, Hover Capability & Pointer Precision",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 77)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Media Features: Orientation, Hover Capability & Pointer Precision' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Media Features: Orientation, Hover Capability & Pointer Precision'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Media Features: Orientation, Hover Capability & Pointer Precision'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Media Features: Orientation, Hover Capability & Pointer Precision' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Media Features: Orientation, Hover Capability & Pointer Precision' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Media Features: Orientation, Hover Capability & Pointer Precision' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Media Features: Orientation, Hover Capability & Pointer Precision' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Media Features: Orientation, Hover Capability & Pointer Precision' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Media Features: Orientation, Hover Capability & Pointer Precision' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Media Features: Orientation, Hover Capability & Pointer Precision!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Media Features: Orientation, Hover Capability & Pointer Precision** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Media Features: Orientation, Hover Capability & Pointer Precision** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Media Features: Orientation, Hover Capability & Pointer Precision */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Media Features: Orientation, Hover Capability & Pointer Precision\n\nA comprehensive technical deep-dive into **Media Features: Orientation, Hover Capability & Pointer Precision** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Media Features: Orientation, Hover Capability & Pointer Precision */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Media Features: Orientation, Hover Capability & Pointer Precision Seekhein!\n\nIs lesson me hum **Media Features: Orientation, Hover Capability & Pointer Precision** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Media Features: Orientation, Hover Capability & Pointer Precision** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Media Features: Orientation, Hover Capability & Pointer Precision */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Media Features: Orientation, Hover Capability & Pointer Precision\n* **Media Features: Orientation, Hover Capability & Pointer Precision** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Media Features: Orientation, Hover Capability & Pointer Precision!\n\nइस पाठ में हम **Media Features: Orientation, Hover Capability & Pointer Precision** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Media Features: Orientation, Hover Capability & Pointer Precision */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Media Features: Orientation, Hover Capability & Pointer Precision\n* **Media Features: Orientation, Hover Capability & Pointer Precision** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 78,
    "slug": "css-dark-mode-prefers-color-scheme",
    "title": "Dark Mode with @media (prefers-color-scheme: dark)",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 78)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Dark Mode with @media' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Dark Mode with @media'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Dark Mode with @media'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Dark Mode with @media' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Dark Mode with @media' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Dark Mode with @media' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Dark Mode with @media' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Dark Mode with @media' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Dark Mode with @media' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Dark Mode with @media (prefers-color-scheme: dark)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Dark Mode with @media** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Dark Mode with @media** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Dark Mode with @media */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Dark Mode with @media (prefers-color-scheme: dark)\n\nA comprehensive technical deep-dive into **Dark Mode with @media** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Dark Mode with @media */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Dark Mode with @media (prefers-color-scheme: dark) Seekhein!\n\nIs lesson me hum **Dark Mode with @media** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Dark Mode with @media** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Dark Mode with @media */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Dark Mode with @media (prefers-color-scheme: dark)\n* **Dark Mode with @media** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Dark Mode with @media (prefers-color-scheme: dark)!\n\nइस पाठ में हम **Dark Mode with @media** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Dark Mode with @media */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Dark Mode with @media (prefers-color-scheme: dark)\n* **Dark Mode with @media** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 79,
    "slug": "css-prefers-reduced-motion-accessibility",
    "title": "Reduced Motion for Accessibility (prefers-reduced-motion)",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 79)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Reduced Motion for Accessibility' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Reduced Motion for Accessibility'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Reduced Motion for Accessibility'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Reduced Motion for Accessibility' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Reduced Motion for Accessibility' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Reduced Motion for Accessibility' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Reduced Motion for Accessibility' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Reduced Motion for Accessibility' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Reduced Motion for Accessibility' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Reduced Motion for Accessibility (prefers-reduced-motion)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Reduced Motion for Accessibility** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Reduced Motion for Accessibility** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Reduced Motion for Accessibility */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Reduced Motion for Accessibility (prefers-reduced-motion)\n\nA comprehensive technical deep-dive into **Reduced Motion for Accessibility** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Reduced Motion for Accessibility */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Reduced Motion for Accessibility (prefers-reduced-motion) Seekhein!\n\nIs lesson me hum **Reduced Motion for Accessibility** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Reduced Motion for Accessibility** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Reduced Motion for Accessibility */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Reduced Motion for Accessibility (prefers-reduced-motion)\n* **Reduced Motion for Accessibility** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Reduced Motion for Accessibility (prefers-reduced-motion)!\n\nइस पाठ में हम **Reduced Motion for Accessibility** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Reduced Motion for Accessibility */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Reduced Motion for Accessibility (prefers-reduced-motion)\n* **Reduced Motion for Accessibility** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 80,
    "slug": "capstone-complete-responsive-landing-page",
    "title": "Capstone Project: Complete Responsive Landing Page",
    "unit": "Unit 8: Responsive Design & Media Queries",
    "bookRef": "Nextsem CSS Master Guide (Lesson 80)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Capstone Project: Complete Responsive Landing Page' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Capstone Project: Complete Responsive Landing Page'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Capstone Project: Complete Responsive Landing Page'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Capstone Project: Complete Responsive Landing Page' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Capstone Project: Complete Responsive Landing Page' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Capstone Project: Complete Responsive Landing Page' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Capstone Project: Complete Responsive Landing Page' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Capstone Project: Complete Responsive Landing Page' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Capstone Project: Complete Responsive Landing Page' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Capstone Project: Complete Responsive Landing Page!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Capstone Project: Complete Responsive Landing Page** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Capstone Project: Complete Responsive Landing Page** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Capstone Project: Complete Responsive Landing Page */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Capstone Project: Complete Responsive Landing Page\n\nA comprehensive technical deep-dive into **Capstone Project: Complete Responsive Landing Page** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Capstone Project: Complete Responsive Landing Page */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Capstone Project: Complete Responsive Landing Page Seekhein!\n\nIs lesson me hum **Capstone Project: Complete Responsive Landing Page** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Capstone Project: Complete Responsive Landing Page** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Capstone Project: Complete Responsive Landing Page */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Capstone Project: Complete Responsive Landing Page\n* **Capstone Project: Complete Responsive Landing Page** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Capstone Project: Complete Responsive Landing Page!\n\nइस पाठ में हम **Capstone Project: Complete Responsive Landing Page** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Capstone Project: Complete Responsive Landing Page */\n/* Mobile First Base Styles */\n.responsive-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n/* Tablet & Desktop Breakpoint */\n@media (min-width: 768px) {\n  .responsive-layout {\n    flex-direction: row;\n    gap: 24px;\n  }\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Capstone Project: Complete Responsive Landing Page\n* **Capstone Project: Complete Responsive Landing Page** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 81,
    "slug": "css-interactive-pseudo-classes-hover-focus",
    "title": "Dynamic Interactive Pseudo-classes (:hover, :active, :focus, :focus-visible)",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 81)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Dynamic Interactive Pseudo-classes' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Dynamic Interactive Pseudo-classes'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Dynamic Interactive Pseudo-classes'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Dynamic Interactive Pseudo-classes' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Dynamic Interactive Pseudo-classes' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Dynamic Interactive Pseudo-classes' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Dynamic Interactive Pseudo-classes' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Dynamic Interactive Pseudo-classes' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Dynamic Interactive Pseudo-classes' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Dynamic Interactive Pseudo-classes (:hover, :active, :focus, :focus-visible)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Dynamic Interactive Pseudo-classes** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Dynamic Interactive Pseudo-classes** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Dynamic Interactive Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Dynamic Interactive Pseudo-classes (:hover, :active, :focus, :focus-visible)\n\nA comprehensive technical deep-dive into **Dynamic Interactive Pseudo-classes** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Dynamic Interactive Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Dynamic Interactive Pseudo-classes (:hover, :active, :focus, :focus-visible) Seekhein!\n\nIs lesson me hum **Dynamic Interactive Pseudo-classes** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Dynamic Interactive Pseudo-classes** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Dynamic Interactive Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Dynamic Interactive Pseudo-classes (:hover, :active, :focus, :focus-visible)\n* **Dynamic Interactive Pseudo-classes** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Dynamic Interactive Pseudo-classes (:hover, :active, :focus, :focus-visible)!\n\nइस पाठ में हम **Dynamic Interactive Pseudo-classes** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Dynamic Interactive Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Dynamic Interactive Pseudo-classes (:hover, :active, :focus, :focus-visible)\n* **Dynamic Interactive Pseudo-classes** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 82,
    "slug": "css-form-state-pseudo-classes-valid-checked",
    "title": "Form State Pseudo-classes (:checked, :disabled, :valid, :invalid, :required)",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 82)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Form State Pseudo-classes' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Form State Pseudo-classes'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Form State Pseudo-classes'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Form State Pseudo-classes' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Form State Pseudo-classes' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Form State Pseudo-classes' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Form State Pseudo-classes' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Form State Pseudo-classes' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Form State Pseudo-classes' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Form State Pseudo-classes (:checked, :disabled, :valid, :invalid, :required)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Form State Pseudo-classes** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Form State Pseudo-classes** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Form State Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Form State Pseudo-classes (:checked, :disabled, :valid, :invalid, :required)\n\nA comprehensive technical deep-dive into **Form State Pseudo-classes** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Form State Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Form State Pseudo-classes (:checked, :disabled, :valid, :invalid, :required) Seekhein!\n\nIs lesson me hum **Form State Pseudo-classes** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Form State Pseudo-classes** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Form State Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Form State Pseudo-classes (:checked, :disabled, :valid, :invalid, :required)\n* **Form State Pseudo-classes** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Form State Pseudo-classes (:checked, :disabled, :valid, :invalid, :required)!\n\nइस पाठ में हम **Form State Pseudo-classes** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Form State Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Form State Pseudo-classes (:checked, :disabled, :valid, :invalid, :required)\n* **Form State Pseudo-classes** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 83,
    "slug": "css-structural-pseudo-classes-nth-child",
    "title": "Structural Pseudo-classes (:first-child, :last-child, :nth-child(2n+1))",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 83)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Structural Pseudo-classes' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Structural Pseudo-classes'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Structural Pseudo-classes'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Structural Pseudo-classes' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Structural Pseudo-classes' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Structural Pseudo-classes' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Structural Pseudo-classes' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Structural Pseudo-classes' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Structural Pseudo-classes' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Structural Pseudo-classes (:first-child, :last-child, :nth-child(2n+1))!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Structural Pseudo-classes** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Structural Pseudo-classes** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Structural Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Structural Pseudo-classes (:first-child, :last-child, :nth-child(2n+1))\n\nA comprehensive technical deep-dive into **Structural Pseudo-classes** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Structural Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Structural Pseudo-classes (:first-child, :last-child, :nth-child(2n+1)) Seekhein!\n\nIs lesson me hum **Structural Pseudo-classes** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Structural Pseudo-classes** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Structural Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Structural Pseudo-classes (:first-child, :last-child, :nth-child(2n+1))\n* **Structural Pseudo-classes** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Structural Pseudo-classes (:first-child, :last-child, :nth-child(2n+1))!\n\nइस पाठ में हम **Structural Pseudo-classes** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Structural Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Structural Pseudo-classes (:first-child, :last-child, :nth-child(2n+1))\n* **Structural Pseudo-classes** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 84,
    "slug": "css-logical-pseudo-classes-is-where-not-has",
    "title": "Logical Pseudo-classes (:is(), :where(), :not(), :has())",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 84)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Logical Pseudo-classes' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Logical Pseudo-classes'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Logical Pseudo-classes'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Logical Pseudo-classes' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Logical Pseudo-classes' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Logical Pseudo-classes' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Logical Pseudo-classes' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Logical Pseudo-classes' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Logical Pseudo-classes' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Logical Pseudo-classes (:is(), :where(), :not(), :has())!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Logical Pseudo-classes** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Logical Pseudo-classes** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Logical Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Logical Pseudo-classes (:is(), :where(), :not(), :has())\n\nA comprehensive technical deep-dive into **Logical Pseudo-classes** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Logical Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Logical Pseudo-classes (:is(), :where(), :not(), :has()) Seekhein!\n\nIs lesson me hum **Logical Pseudo-classes** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Logical Pseudo-classes** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Logical Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Logical Pseudo-classes (:is(), :where(), :not(), :has())\n* **Logical Pseudo-classes** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Logical Pseudo-classes (:is(), :where(), :not(), :has())!\n\nइस पाठ में हम **Logical Pseudo-classes** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Logical Pseudo-classes */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Logical Pseudo-classes (:is(), :where(), :not(), :has())\n* **Logical Pseudo-classes** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 85,
    "slug": "css-has-parent-selector-practical-guide",
    "title": "The :has() Parent Selector Gamechanger",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 85)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'The :has Parent Selector Gamechanger' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'The :has Parent Selector Gamechanger'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'The :has Parent Selector Gamechanger'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'The :has Parent Selector Gamechanger' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'The :has Parent Selector Gamechanger' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'The :has Parent Selector Gamechanger' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'The :has Parent Selector Gamechanger' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'The :has Parent Selector Gamechanger' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'The :has Parent Selector Gamechanger' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: The :has() Parent Selector Gamechanger!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **The :has Parent Selector Gamechanger** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **The :has Parent Selector Gamechanger** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* The :has Parent Selector Gamechanger */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: The :has() Parent Selector Gamechanger\n\nA comprehensive technical deep-dive into **The :has Parent Selector Gamechanger** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* The :has Parent Selector Gamechanger */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 The :has() Parent Selector Gamechanger Seekhein!\n\nIs lesson me hum **The :has Parent Selector Gamechanger** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **The :has Parent Selector Gamechanger** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* The :has Parent Selector Gamechanger */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: The :has() Parent Selector Gamechanger\n* **The :has Parent Selector Gamechanger** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: The :has() Parent Selector Gamechanger!\n\nइस पाठ में हम **The :has Parent Selector Gamechanger** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* The :has Parent Selector Gamechanger */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: The :has() Parent Selector Gamechanger\n* **The :has Parent Selector Gamechanger** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 86,
    "slug": "css-pseudo-elements-before-after-content",
    "title": "Pseudo-elements: ::before & ::after with content",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 86)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Pseudo-elements: ::before & ::after with content' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Pseudo-elements: ::before & ::after with content'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Pseudo-elements: ::before & ::after with content'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Pseudo-elements: ::before & ::after with content' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Pseudo-elements: ::before & ::after with content' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Pseudo-elements: ::before & ::after with content' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Pseudo-elements: ::before & ::after with content' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Pseudo-elements: ::before & ::after with content' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Pseudo-elements: ::before & ::after with content' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Pseudo-elements: ::before & ::after with content!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Pseudo-elements: ::before & ::after with content** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Pseudo-elements: ::before & ::after with content** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Pseudo-elements: ::before & ::after with content */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Pseudo-elements: ::before & ::after with content\n\nA comprehensive technical deep-dive into **Pseudo-elements: ::before & ::after with content** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Pseudo-elements: ::before & ::after with content */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Pseudo-elements: ::before & ::after with content Seekhein!\n\nIs lesson me hum **Pseudo-elements: ::before & ::after with content** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Pseudo-elements: ::before & ::after with content** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Pseudo-elements: ::before & ::after with content */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Pseudo-elements: ::before & ::after with content\n* **Pseudo-elements: ::before & ::after with content** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Pseudo-elements: ::before & ::after with content!\n\nइस पाठ में हम **Pseudo-elements: ::before & ::after with content** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Pseudo-elements: ::before & ::after with content */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Pseudo-elements: ::before & ::after with content\n* **Pseudo-elements: ::before & ::after with content** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 87,
    "slug": "css-pseudo-elements-first-letter-selection",
    "title": "Typographic Pseudo-elements (::first-letter, ::first-line, ::selection)",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 87)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Typographic Pseudo-elements' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Typographic Pseudo-elements'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Typographic Pseudo-elements'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Typographic Pseudo-elements' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Typographic Pseudo-elements' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Typographic Pseudo-elements' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Typographic Pseudo-elements' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Typographic Pseudo-elements' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Typographic Pseudo-elements' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Typographic Pseudo-elements (::first-letter, ::first-line, ::selection)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Typographic Pseudo-elements** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Typographic Pseudo-elements** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Typographic Pseudo-elements */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Typographic Pseudo-elements (::first-letter, ::first-line, ::selection)\n\nA comprehensive technical deep-dive into **Typographic Pseudo-elements** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Typographic Pseudo-elements */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Typographic Pseudo-elements (::first-letter, ::first-line, ::selection) Seekhein!\n\nIs lesson me hum **Typographic Pseudo-elements** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Typographic Pseudo-elements** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Typographic Pseudo-elements */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Typographic Pseudo-elements (::first-letter, ::first-line, ::selection)\n* **Typographic Pseudo-elements** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Typographic Pseudo-elements (::first-letter, ::first-line, ::selection)!\n\nइस पाठ में हम **Typographic Pseudo-elements** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Typographic Pseudo-elements */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Typographic Pseudo-elements (::first-letter, ::first-line, ::selection)\n* **Typographic Pseudo-elements** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 88,
    "slug": "css-custom-properties-variables-var-function",
    "title": "CSS Custom Properties (Variables: --primary-color, var())",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 88)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'CSS Custom Properties' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'CSS Custom Properties'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'CSS Custom Properties'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'CSS Custom Properties' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'CSS Custom Properties' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'CSS Custom Properties' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'CSS Custom Properties' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Custom Properties' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Custom Properties' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: CSS Custom Properties (Variables: --primary-color, var())!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **CSS Custom Properties** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **CSS Custom Properties** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* CSS Custom Properties */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: CSS Custom Properties (Variables: --primary-color, var())\n\nA comprehensive technical deep-dive into **CSS Custom Properties** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* CSS Custom Properties */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 CSS Custom Properties (Variables: --primary-color, var()) Seekhein!\n\nIs lesson me hum **CSS Custom Properties** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **CSS Custom Properties** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Custom Properties */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: CSS Custom Properties (Variables: --primary-color, var())\n* **CSS Custom Properties** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: CSS Custom Properties (Variables: --primary-color, var())!\n\nइस पाठ में हम **CSS Custom Properties** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* CSS Custom Properties */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: CSS Custom Properties (Variables: --primary-color, var())\n* **CSS Custom Properties** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 89,
    "slug": "dynamic-theme-switching-css-variables",
    "title": "Dynamic Theme Switching with CSS Variables",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 89)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Dynamic Theme Switching with CSS Variables' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Dynamic Theme Switching with CSS Variables'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Dynamic Theme Switching with CSS Variables'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Dynamic Theme Switching with CSS Variables' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Dynamic Theme Switching with CSS Variables' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Dynamic Theme Switching with CSS Variables' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Dynamic Theme Switching with CSS Variables' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Dynamic Theme Switching with CSS Variables' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Dynamic Theme Switching with CSS Variables' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Dynamic Theme Switching with CSS Variables!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Dynamic Theme Switching with CSS Variables** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Dynamic Theme Switching with CSS Variables** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Dynamic Theme Switching with CSS Variables */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Dynamic Theme Switching with CSS Variables\n\nA comprehensive technical deep-dive into **Dynamic Theme Switching with CSS Variables** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Dynamic Theme Switching with CSS Variables */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Dynamic Theme Switching with CSS Variables Seekhein!\n\nIs lesson me hum **Dynamic Theme Switching with CSS Variables** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Dynamic Theme Switching with CSS Variables** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Dynamic Theme Switching with CSS Variables */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Dynamic Theme Switching with CSS Variables\n* **Dynamic Theme Switching with CSS Variables** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Dynamic Theme Switching with CSS Variables!\n\nइस पाठ में हम **Dynamic Theme Switching with CSS Variables** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Dynamic Theme Switching with CSS Variables */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Dynamic Theme Switching with CSS Variables\n* **Dynamic Theme Switching with CSS Variables** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 90,
    "slug": "css-native-nesting-syntax-guide",
    "title": "CSS Modern Nesting Syntax (& > .child, &:hover)",
    "unit": "Unit 9: Pseudo-classes, Pseudo-elements & Custom Properties",
    "bookRef": "Nextsem CSS Master Guide (Lesson 90)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'CSS Modern Nesting Syntax' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'CSS Modern Nesting Syntax'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'CSS Modern Nesting Syntax'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'CSS Modern Nesting Syntax' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'CSS Modern Nesting Syntax' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'CSS Modern Nesting Syntax' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'CSS Modern Nesting Syntax' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Modern Nesting Syntax' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Modern Nesting Syntax' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: CSS Modern Nesting Syntax (& > .child, &:hover)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **CSS Modern Nesting Syntax** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **CSS Modern Nesting Syntax** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* CSS Modern Nesting Syntax */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: CSS Modern Nesting Syntax (& > .child, &:hover)\n\nA comprehensive technical deep-dive into **CSS Modern Nesting Syntax** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* CSS Modern Nesting Syntax */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 CSS Modern Nesting Syntax (& > .child, &:hover) Seekhein!\n\nIs lesson me hum **CSS Modern Nesting Syntax** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **CSS Modern Nesting Syntax** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Modern Nesting Syntax */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: CSS Modern Nesting Syntax (& > .child, &:hover)\n* **CSS Modern Nesting Syntax** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: CSS Modern Nesting Syntax (& > .child, &:hover)!\n\nइस पाठ में हम **CSS Modern Nesting Syntax** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* CSS Modern Nesting Syntax */\n.interactive-btn {\n  background-color: #04AA6D;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.interactive-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(4, 170, 109, 0.4);\n}\n\n.interactive-btn:active {\n  transform: translateY(0);\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: CSS Modern Nesting Syntax (& > .child, &:hover)\n* **CSS Modern Nesting Syntax** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 91,
    "slug": "css-2d-transforms-translate-rotate-scale-skew",
    "title": "2D Transforms: translate(), rotate(), scale(), skew()",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 91)",
    "exercise": {
      "english": {
        "question": "What is the primary role of '2D Transforms: translate' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for '2D Transforms: translate'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for '2D Transforms: translate'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me '2D Transforms: translate' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko '2D Transforms: translate' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko '2D Transforms: translate' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में '2D Transforms: translate' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को '2D Transforms: translate' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को '2D Transforms: translate' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: 2D Transforms: translate(), rotate(), scale(), skew()!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **2D Transforms: translate** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **2D Transforms: translate** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* 2D Transforms: translate */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: 2D Transforms: translate(), rotate(), scale(), skew()\n\nA comprehensive technical deep-dive into **2D Transforms: translate** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* 2D Transforms: translate */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 2D Transforms: translate(), rotate(), scale(), skew() Seekhein!\n\nIs lesson me hum **2D Transforms: translate** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **2D Transforms: translate** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* 2D Transforms: translate */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: 2D Transforms: translate(), rotate(), scale(), skew()\n* **2D Transforms: translate** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: 2D Transforms: translate(), rotate(), scale(), skew()!\n\nइस पाठ में हम **2D Transforms: translate** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* 2D Transforms: translate */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: 2D Transforms: translate(), rotate(), scale(), skew()\n* **2D Transforms: translate** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 92,
    "slug": "css-transform-origin-anchor-points",
    "title": "Transform Origin & Anchor Points (transform-origin)",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 92)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Transform Origin & Anchor Points' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Transform Origin & Anchor Points'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Transform Origin & Anchor Points'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Transform Origin & Anchor Points' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Transform Origin & Anchor Points' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Transform Origin & Anchor Points' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Transform Origin & Anchor Points' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Transform Origin & Anchor Points' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Transform Origin & Anchor Points' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Transform Origin & Anchor Points (transform-origin)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Transform Origin & Anchor Points** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Transform Origin & Anchor Points** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Transform Origin & Anchor Points */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Transform Origin & Anchor Points (transform-origin)\n\nA comprehensive technical deep-dive into **Transform Origin & Anchor Points** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Transform Origin & Anchor Points */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Transform Origin & Anchor Points (transform-origin) Seekhein!\n\nIs lesson me hum **Transform Origin & Anchor Points** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Transform Origin & Anchor Points** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Transform Origin & Anchor Points */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Transform Origin & Anchor Points (transform-origin)\n* **Transform Origin & Anchor Points** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Transform Origin & Anchor Points (transform-origin)!\n\nइस पाठ में हम **Transform Origin & Anchor Points** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Transform Origin & Anchor Points */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Transform Origin & Anchor Points (transform-origin)\n* **Transform Origin & Anchor Points** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 93,
    "slug": "css-transitions-timing-functions-cubic-bezier",
    "title": "CSS Transitions (transition-property, duration, timing-function)",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 93)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'CSS Transitions' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'CSS Transitions'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'CSS Transitions'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'CSS Transitions' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'CSS Transitions' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'CSS Transitions' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'CSS Transitions' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Transitions' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Transitions' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: CSS Transitions (transition-property, duration, timing-function)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **CSS Transitions** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **CSS Transitions** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* CSS Transitions */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: CSS Transitions (transition-property, duration, timing-function)\n\nA comprehensive technical deep-dive into **CSS Transitions** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* CSS Transitions */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 CSS Transitions (transition-property, duration, timing-function) Seekhein!\n\nIs lesson me hum **CSS Transitions** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **CSS Transitions** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Transitions */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: CSS Transitions (transition-property, duration, timing-function)\n* **CSS Transitions** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: CSS Transitions (transition-property, duration, timing-function)!\n\nइस पाठ में हम **CSS Transitions** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* CSS Transitions */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: CSS Transitions (transition-property, duration, timing-function)\n* **CSS Transitions** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 94,
    "slug": "css-keyframes-animations-syntax-rules",
    "title": "CSS Keyframe Animations (@keyframes, animation-name, duration)",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 94)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'CSS Keyframe Animations' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'CSS Keyframe Animations'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'CSS Keyframe Animations'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'CSS Keyframe Animations' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'CSS Keyframe Animations' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'CSS Keyframe Animations' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'CSS Keyframe Animations' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Keyframe Animations' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Keyframe Animations' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: CSS Keyframe Animations (@keyframes, animation-name, duration)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **CSS Keyframe Animations** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **CSS Keyframe Animations** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* CSS Keyframe Animations */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: CSS Keyframe Animations (@keyframes, animation-name, duration)\n\nA comprehensive technical deep-dive into **CSS Keyframe Animations** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* CSS Keyframe Animations */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 CSS Keyframe Animations (@keyframes, animation-name, duration) Seekhein!\n\nIs lesson me hum **CSS Keyframe Animations** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **CSS Keyframe Animations** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Keyframe Animations */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: CSS Keyframe Animations (@keyframes, animation-name, duration)\n* **CSS Keyframe Animations** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: CSS Keyframe Animations (@keyframes, animation-name, duration)!\n\nइस पाठ में हम **CSS Keyframe Animations** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* CSS Keyframe Animations */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: CSS Keyframe Animations (@keyframes, animation-name, duration)\n* **CSS Keyframe Animations** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 95,
    "slug": "css-animation-iteration-direction-fill-mode",
    "title": "Animation Iteration, Direction & Fill Modes (infinite, forwards)",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 95)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Animation Iteration, Direction & Fill Modes' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Animation Iteration, Direction & Fill Modes'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Animation Iteration, Direction & Fill Modes'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Animation Iteration, Direction & Fill Modes' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Animation Iteration, Direction & Fill Modes' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Animation Iteration, Direction & Fill Modes' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Animation Iteration, Direction & Fill Modes' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Animation Iteration, Direction & Fill Modes' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Animation Iteration, Direction & Fill Modes' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Animation Iteration, Direction & Fill Modes (infinite, forwards)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Animation Iteration, Direction & Fill Modes** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Animation Iteration, Direction & Fill Modes** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Animation Iteration, Direction & Fill Modes */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Animation Iteration, Direction & Fill Modes (infinite, forwards)\n\nA comprehensive technical deep-dive into **Animation Iteration, Direction & Fill Modes** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Animation Iteration, Direction & Fill Modes */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Animation Iteration, Direction & Fill Modes (infinite, forwards) Seekhein!\n\nIs lesson me hum **Animation Iteration, Direction & Fill Modes** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Animation Iteration, Direction & Fill Modes** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Animation Iteration, Direction & Fill Modes */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Animation Iteration, Direction & Fill Modes (infinite, forwards)\n* **Animation Iteration, Direction & Fill Modes** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Animation Iteration, Direction & Fill Modes (infinite, forwards)!\n\nइस पाठ में हम **Animation Iteration, Direction & Fill Modes** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Animation Iteration, Direction & Fill Modes */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Animation Iteration, Direction & Fill Modes (infinite, forwards)\n* **Animation Iteration, Direction & Fill Modes** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 96,
    "slug": "css-3d-transforms-perspective-card-flip",
    "title": "3D Transforms & Perspective (perspective, rotateY, preserve-3d)",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 96)",
    "exercise": {
      "english": {
        "question": "What is the primary role of '3D Transforms & Perspective' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for '3D Transforms & Perspective'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for '3D Transforms & Perspective'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me '3D Transforms & Perspective' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko '3D Transforms & Perspective' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko '3D Transforms & Perspective' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में '3D Transforms & Perspective' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को '3D Transforms & Perspective' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को '3D Transforms & Perspective' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: 3D Transforms & Perspective (perspective, rotateY, preserve-3d)!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **3D Transforms & Perspective** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **3D Transforms & Perspective** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* 3D Transforms & Perspective */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: 3D Transforms & Perspective (perspective, rotateY, preserve-3d)\n\nA comprehensive technical deep-dive into **3D Transforms & Perspective** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* 3D Transforms & Perspective */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 3D Transforms & Perspective (perspective, rotateY, preserve-3d) Seekhein!\n\nIs lesson me hum **3D Transforms & Perspective** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **3D Transforms & Perspective** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* 3D Transforms & Perspective */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: 3D Transforms & Perspective (perspective, rotateY, preserve-3d)\n* **3D Transforms & Perspective** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: 3D Transforms & Perspective (perspective, rotateY, preserve-3d)!\n\nइस पाठ में हम **3D Transforms & Perspective** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* 3D Transforms & Perspective */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: 3D Transforms & Perspective (perspective, rotateY, preserve-3d)\n* **3D Transforms & Perspective** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 97,
    "slug": "css-glassmorphism-backdrop-filter-blend-modes",
    "title": "Glassmorphism, Backdrop Filters (backdrop-filter: blur(12px)) & Blend Modes",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 97)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Glassmorphism, Backdrop Filters  & Blend Modes' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Glassmorphism, Backdrop Filters  & Blend Modes'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Glassmorphism, Backdrop Filters  & Blend Modes'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Glassmorphism, Backdrop Filters  & Blend Modes' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Glassmorphism, Backdrop Filters  & Blend Modes' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Glassmorphism, Backdrop Filters  & Blend Modes' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Glassmorphism, Backdrop Filters  & Blend Modes' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Glassmorphism, Backdrop Filters  & Blend Modes' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Glassmorphism, Backdrop Filters  & Blend Modes' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Glassmorphism, Backdrop Filters (backdrop-filter: blur(12px)) & Blend Modes!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Glassmorphism, Backdrop Filters  & Blend Modes** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Glassmorphism, Backdrop Filters  & Blend Modes** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Glassmorphism, Backdrop Filters  & Blend Modes */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Glassmorphism, Backdrop Filters (backdrop-filter: blur(12px)) & Blend Modes\n\nA comprehensive technical deep-dive into **Glassmorphism, Backdrop Filters  & Blend Modes** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Glassmorphism, Backdrop Filters  & Blend Modes */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Glassmorphism, Backdrop Filters (backdrop-filter: blur(12px)) & Blend Modes Seekhein!\n\nIs lesson me hum **Glassmorphism, Backdrop Filters  & Blend Modes** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Glassmorphism, Backdrop Filters  & Blend Modes** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Glassmorphism, Backdrop Filters  & Blend Modes */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Glassmorphism, Backdrop Filters (backdrop-filter: blur(12px)) & Blend Modes\n* **Glassmorphism, Backdrop Filters  & Blend Modes** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Glassmorphism, Backdrop Filters (backdrop-filter: blur(12px)) & Blend Modes!\n\nइस पाठ में हम **Glassmorphism, Backdrop Filters  & Blend Modes** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Glassmorphism, Backdrop Filters  & Blend Modes */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Glassmorphism, Backdrop Filters (backdrop-filter: blur(12px)) & Blend Modes\n* **Glassmorphism, Backdrop Filters  & Blend Modes** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 98,
    "slug": "css-clip-path-polygon-circle-masking",
    "title": "CSS Clip Path & Shape Masking (clip-path: polygon(), circle())",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 98)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'CSS Clip Path & Shape Masking' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'CSS Clip Path & Shape Masking'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'CSS Clip Path & Shape Masking'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'CSS Clip Path & Shape Masking' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'CSS Clip Path & Shape Masking' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'CSS Clip Path & Shape Masking' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'CSS Clip Path & Shape Masking' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Clip Path & Shape Masking' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Clip Path & Shape Masking' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: CSS Clip Path & Shape Masking (clip-path: polygon(), circle())!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **CSS Clip Path & Shape Masking** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **CSS Clip Path & Shape Masking** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* CSS Clip Path & Shape Masking */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: CSS Clip Path & Shape Masking (clip-path: polygon(), circle())\n\nA comprehensive technical deep-dive into **CSS Clip Path & Shape Masking** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* CSS Clip Path & Shape Masking */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 CSS Clip Path & Shape Masking (clip-path: polygon(), circle()) Seekhein!\n\nIs lesson me hum **CSS Clip Path & Shape Masking** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **CSS Clip Path & Shape Masking** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Clip Path & Shape Masking */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: CSS Clip Path & Shape Masking (clip-path: polygon(), circle())\n* **CSS Clip Path & Shape Masking** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: CSS Clip Path & Shape Masking (clip-path: polygon(), circle())!\n\nइस पाठ में हम **CSS Clip Path & Shape Masking** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* CSS Clip Path & Shape Masking */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: CSS Clip Path & Shape Masking (clip-path: polygon(), circle())\n* **CSS Clip Path & Shape Masking** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 99,
    "slug": "css-filters-blur-contrast-drop-shadow",
    "title": "CSS Filters: blur(), brightness(), contrast(), drop-shadow(), grayscale()",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 99)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'CSS Filters: blur' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'CSS Filters: blur'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'CSS Filters: blur'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'CSS Filters: blur' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'CSS Filters: blur' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'CSS Filters: blur' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'CSS Filters: blur' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Filters: blur' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'CSS Filters: blur' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: CSS Filters: blur(), brightness(), contrast(), drop-shadow(), grayscale()!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **CSS Filters: blur** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **CSS Filters: blur** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* CSS Filters: blur */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: CSS Filters: blur(), brightness(), contrast(), drop-shadow(), grayscale()\n\nA comprehensive technical deep-dive into **CSS Filters: blur** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* CSS Filters: blur */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 CSS Filters: blur(), brightness(), contrast(), drop-shadow(), grayscale() Seekhein!\n\nIs lesson me hum **CSS Filters: blur** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **CSS Filters: blur** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* CSS Filters: blur */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: CSS Filters: blur(), brightness(), contrast(), drop-shadow(), grayscale()\n* **CSS Filters: blur** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: CSS Filters: blur(), brightness(), contrast(), drop-shadow(), grayscale()!\n\nइस पाठ में हम **CSS Filters: blur** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* CSS Filters: blur */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: CSS Filters: blur(), brightness(), contrast(), drop-shadow(), grayscale()\n* **CSS Filters: blur** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  },
  {
    "id": 100,
    "slug": "capstone-interactive-animated-cyberpunk-card",
    "title": "Capstone Project: Interactive Animated Cyberpunk Card",
    "unit": "Unit 10: 2D/3D Transforms, Transitions & Keyframe Animations",
    "bookRef": "Nextsem CSS Master Guide (Lesson 100)",
    "exercise": {
      "english": {
        "question": "What is the primary role of 'Capstone Project: Interactive Animated Cyberpunk Card' in modern CSS development?",
        "options": [
          "Controls layout, visual presentation, and styling precision for 'Capstone Project: Interactive Animated Cyberpunk Card'",
          "Executes backend database queries",
          "Compiles C++ binaries for the operating system",
          "Configures hardware driver settings"
        ],
        "correctAnswer": "Controls layout, visual presentation, and styling precision for 'Capstone Project: Interactive Animated Cyberpunk Card'",
        "hint": "Remember that CSS properties control how HTML elements are presented and rendered on screen."
      },
      "hinglish": {
        "question": "Modern web design me 'Capstone Project: Interactive Animated Cyberpunk Card' ka mukhya kaam kya hota hai?",
        "options": [
          "Webpage ke visual styling aur layout ko 'Capstone Project: Interactive Animated Cyberpunk Card' ke anusaar customize karna",
          "Database me SQL queries run karna",
          "Operating system ke drivers update karna",
          "Hardware memory optimize karna"
        ],
        "correctAnswer": "Webpage ke visual styling aur layout ko 'Capstone Project: Interactive Animated Cyberpunk Card' ke anusaar customize karna",
        "hint": "CSS webpage ke design, layout aur styling ko control karne ke liye hoti hai!"
      },
      "hindi": {
        "question": "वेब डिजाइनिंग में 'Capstone Project: Interactive Animated Cyberpunk Card' का मुख्य कार्य क्या है?",
        "options": [
          "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Capstone Project: Interactive Animated Cyberpunk Card' के अनुसार नियंत्रित करना",
          "डेटाबेस में बैकएंड क्वेरी चलाना",
          "कंप्यूटर का हार्डवेयर ड्राइवर इंस्टॉल करना",
          "सिस्टम मेमोरी को रीसेट करना"
        ],
        "correctAnswer": "वेबपेज की विज़ुअल स्टाइलिंग और लेआउट को 'Capstone Project: Interactive Animated Cyberpunk Card' के अनुसार नियंत्रित करना",
        "hint": "CSS का कार्य वेबपेज के लेआउट और डिज़ाइन को सुंदर बनाना है।"
      }
    },
    "english": {
      "kid": "### 🎨 Let's Learn: Capstone Project: Interactive Animated Cyberpunk Card!\n\nWelcome to this hands-on CSS lesson! Today, we are exploring **Capstone Project: Interactive Animated Cyberpunk Card** and discovering how it gives you superpower control over your web design and layout styling!\n\n---\n\n### 🌟 Why is this Important?\n* Mastering **Capstone Project: Interactive Animated Cyberpunk Card** allows you to build clean, professional UI components that look flawless on all screens.\n* It provides precise control over layout geometry, visual hierarchy, spacing, and modern browser aesthetics.\n\n---\n\n### 💻 Live Code Example:\n```css\n/* Capstone Project: Interactive Animated Cyberpunk Card */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🛠️ Step-by-Step Practical Drill on 🪟 Windows 11:\n1. Open Visual Studio Code in your project folder (`code .`).\n2. Open your `styles.css` stylesheet file.\n3. Add the rule demonstrated above and save with `Ctrl + S`.\n4. Check your browser live with **Live Server** (`http://127.0.0.1:5500`).\n5. Open Chrome DevTools (`F12`) to inspect the element and experiment with live property toggles!\n\n---\n\n> 💡 **Developer Pro Tip:** Always inspect element styles in Chrome DevTools using the Computed Styles pane to verify exact pixel and rem computed values!\n\n> ⊞ **Windows 11 Tip:** Use `Win + Right Arrow` to snap VS Code to the right half of your screen and `Win + Left Arrow` to snap your browser to the left for a dual-pane live coding workstation!",
      "pro": "### 🚀 Professional CSS Architecture: Capstone Project: Interactive Animated Cyberpunk Card\n\nA comprehensive technical deep-dive into **Capstone Project: Interactive Animated Cyberpunk Card** according to W3C CSS Specifications and modern browser rendering engines (Blink, Gecko, WebKit).\n\n---\n\n### 1. Rendering Pipeline & Specification\n* **Layout & Reflow Impact**: Modern styling optimizations ensure efficient GPU compositing layers (`transform`, `opacity`) rather than triggering expensive layout reflows.\n* **Cascading Resolution**: Follows the standard CSS specificity matrix (Inline: 1000, ID: 100, Class/Attribute/Pseudo-class: 10, Element/Pseudo-element: 1).\n\n---\n\n### 2. Industry Standard Implementation:\n```css\n/* Capstone Project: Interactive Animated Cyberpunk Card */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 3. Developer Best Practices & Accessibility (WCAG 2.1)\n* Maintain a minimum contrast ratio of **4.5:1** for normal text against dark backgrounds (`#17181c`).\n* Ensure fluid scalability across mobile, tablet, and 4K desktop viewports."
    },
    "hinglish": {
      "kid": "### 🎨 Capstone Project: Interactive Animated Cyberpunk Card Seekhein!\n\nIs lesson me hum **Capstone Project: Interactive Animated Cyberpunk Card** ke baare me seekhenge aur dekhenge ki kaise ye hamari website ko ek modern, professional look deta hai!\n\n---\n\n### 🌟 Real World Story:\n* HTML hamari website ki **haddiyan (skeleton)** hai, aur **Capstone Project: Interactive Animated Cyberpunk Card** use stylish, colorful aur responsive banata hai!\n* Iska use karke aap styling, positioning aur animations ko perfectly control kar sakte hain.\n\n---\n\n### 💻 Code Example:\n```css\n/* Capstone Project: Interactive Animated Cyberpunk Card */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 Windows 11 Drill:\n1. VS Code me `styles.css` file kholiye.\n2. Ye CSS rule likhkar `Ctrl + S` dabakar save karein.\n3. Browser me Live Server se instant result dekhein!\n4. `F12` dabakar Chrome DevTools me live edit karke dekhein.",
      "pro": "### 🚀 Technical Deep-Dive: Capstone Project: Interactive Animated Cyberpunk Card\n* **Capstone Project: Interactive Animated Cyberpunk Card** ka architecture aur browser rendering pipeline.\n* **Performance & Specificity**: GPU accelerated rendering aur clean CSS design token systems."
    },
    "hindi": {
      "kid": "### 🎨 आइए सीखें: Capstone Project: Interactive Animated Cyberpunk Card!\n\nइस पाठ में हम **Capstone Project: Interactive Animated Cyberpunk Card** के बारे में विस्तार से जानेंगे और देखेंगे कि कैसे यह हमारे वेबपेज को आकर्षक और आधुनिक बनाता है!\n\n---\n\n### 💻 कोड उदाहरण:\n```css\n/* Capstone Project: Interactive Animated Cyberpunk Card */\n@keyframes pulseGlow {\n  0% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0.7);\n  }\n  70% {\n    box-shadow: 0 0 0 15px rgba(4, 170, 109, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(4, 170, 109, 0);\n  }\n}\n\n.animated-element {\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n```\n\n---\n\n### 🪟 विंडोज 11 अभ्यास:\n1. VS Code में `styles.css` खोलें।\n2. कोड लिखें और `Ctrl + S` से सेव करें।\n3. ब्राउज़र में लाइव परिणाम देखें!",
      "pro": "### 🚀 व्यावसायिक मार्गदर्शिका: Capstone Project: Interactive Animated Cyberpunk Card\n* **Capstone Project: Interactive Animated Cyberpunk Card** का तकनीकी विनिर्देश व W3C मानक।\n* उत्तरदायी डिज़ाइन, एक्सेसिबिलिटी (WCAG 2.1) और उच्च प्रदर्शन सीएसएस वास्तुकला।"
    }
  }
];
