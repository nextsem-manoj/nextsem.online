const fs = require('fs');

const unit7to10 = [
  // ── UNIT 7: Native Audio, Video & Embeds (61–70) ──
  {
    id: 61,
    slug: "audio-elements-src-controls-autoplay-attributes",
    title: "Audio Elements (src & controls)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 202-205)",
    points: {
      en: ["* 1. <audio> plays audio files natively in browsers.", "* 2. controls displays play pause volume buttons.", "* 3. src points to sound audio files.", "* 4. Text inside works as fallback message.", "* 5. No third-party Flash plugins needed."],
      hi: ["* 1. <audio> ब्राउज़र में ऑडियो फाइल चलाता है।", "* 2. controls प्ले, पॉज, और वॉल्यूम बटन देता है।", "* 3. src ऑडियो फाइल का पाथ देता है।", "* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।", "* 5. किसी बाहरी फ्लैश प्लगइन की जरूरत नहीं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Audio Player</title>
</head>
<body>

  <h2>Podcast Player</h2>
  <audio controls>
    <source src="podcast.mp3" type="audio/mpeg">
    Your browser does not support audio playback.
  </audio>

</body>
</html>`,
    exercise: {
      question: "Which attribute must be added to <audio> so users can see play and pause buttons?",
      options: ["controls", "playbar", "buttons", "autoplay"],
      correctAnswer: "controls",
      hint: "Without controls, the audio element remains invisible on the page."
    }
  },
  {
    id: 62,
    slug: "audio-fallback-source-format-types",
    title: "Audio Fallback Formats & Sources",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 206-208)",
    points: {
      en: ["* 1. <source> provides multiple audio format alternatives.", "* 2. Browsers play the first supported format.", "* 3. MP3 provides universal browser playback compatibility.", "* 4. OGG and WAV provide open formats.", "* 5. type attribute specifies the audio MIME-type."],
      hi: ["* 1. <source> कई ऑडियो फॉर्मेट के विकल्प देता है।", "* 2. ब्राउज़र पहला समर्थित फॉर्मेट चलाता है।", "* 3. MP3 सभी ब्राउज़रों में आसानी से चलता है।", "* 4. OGG और WAV ओपन फॉर्मेट होते हैं।", "* 5. type अट्रिब्यूट ऑडियो का MIME प्रकार बताता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Audio Formats</title>
</head>
<body>

  <h2>Multi-Format Audio Player</h2>
  <audio controls>
    <source src="soundtrack.ogg" type="audio/ogg">
    <source src="soundtrack.mp3" type="audio/mpeg">
    <source src="soundtrack.wav" type="audio/wav">
    Audio element unsupported on this device.
  </audio>

</body>
</html>`,
    exercise: {
      question: "How does the browser choose which <source> to play inside an <audio> tag?",
      options: [
        "It plays the first supported format in order",
        "It plays the largest file size",
        "It plays all formats at the same time",
        "It prompts the user to select manually"
      ],
      correctAnswer: "It plays the first supported format in order",
      hint: "The browser evaluates <source> tags from top to bottom."
    }
  },
  {
    id: 63,
    slug: "video-elements-src-poster-preload-settings",
    title: "Video Elements (poster & preload)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 209-214)",
    points: {
      en: ["* 1. <video> embeds video clips directly on pages.", "* 2. poster specifies preview thumbnail cover image.", "* 3. controls enables play seek volume controls.", "* 4. width and height prevent layout reflows.", "* 5. preload controls initial video buffering behavior."],
      hi: ["* 1. <video> वेबपेज में वीडियो चलाता है।", "* 2. poster वीडियो का थंबनेल कवर दिखाता है।", "* 3. controls प्ले, पॉज और सीक बार देता है।", "* 4. width और height लेआउट को स्थिर रखते हैं।", "* 5. preload वीडियो की बफरिंग नियंत्रित करता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Video Player</title>
</head>
<body>

  <h2>Full Stack Lesson Video</h2>
  <video controls width="640" height="360" poster="poster_cover.jpg">
    <source src="lesson_demo.mp4" type="video/mp4">
    <source src="lesson_demo.webm" type="video/webm">
    Your browser does not support HTML5 video.
  </video>

</body>
</html>`,
    exercise: {
      question: "Which attribute sets a preview thumbnail image before the video begins playing?",
      options: ["poster", "thumbnail", "cover", "preview"],
      correctAnswer: "poster",
      hint: "The poster attribute specifies an image to show while the video downloads."
    }
  },
  {
    id: 64,
    slug: "video-subtitles-tracks-element",
    title: "Video Subtitles & Captions (<track>)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "HTML5: The Missing Manual Chapter 5",
    points: {
      en: ["* 1. <track> provides timed text captions and subtitles.", "* 2. Uses standardized WebVTT (.vtt) subtitle files.", "* 3. kind specifies subtitles, captions, or descriptions.", "* 4. srclang sets the subtitle language code.", "* 5. Essential for deaf and international accessibility."],
      hi: ["* 1. <track> वीडियो में सबटाइटल और कैप्शन जोड़ता है।", "* 2. मानक WebVTT (.vtt) फाइलों का उपयोग करता है।", "* 3. kind प्रकार (subtitles/captions) तय करता है।", "* 4. srclang भाषा का कोड सेट करता है।", "* 5. सभी यूजर्स के लिए वीडियो को सुलभ बनाता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Video Subtitles</title>
</head>
<body>

  <h2>Subtitled Tutorial</h2>
  <video controls width="640">
    <source src="tutorial.mp4" type="video/mp4">
    <track src="captions_en.vtt" kind="subtitles" srclang="en" label="English" default>
    <track src="captions_hi.vtt" kind="subtitles" srclang="hi" label="Hindi">
  </video>

</body>
</html>`,
    exercise: {
      question: "Which file format standard is used with the <track> element for subtitles?",
      options: ["WebVTT (.vtt)", "SubRip (.srt)", "Text (.txt)", "JSON (.json)"],
      correctAnswer: "WebVTT (.vtt)",
      hint: "The <track> element uses the WebVTT (Web Video Text Tracks) standard format."
    }
  },
  {
    id: 65,
    slug: "embedding-external-sites-iframe-sandbox",
    title: "External Site Embedding (<iframe> & sandbox)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 215-218)",
    points: {
      en: ["* 1. <iframe> embeds another HTML page inside.", "* 2. src specifies embedded target website URL.", "* 3. sandbox restricts scripts, forms, and popups.", "* 4. title attribute provides screen reader accessibility.", "* 5. Common for YouTube videos and Google Maps."],
      hi: ["* 1. <iframe> एक पेज के अंदर दूसरा पेज खोलता है।", "* 2. src टारगेट वेबसाइट का पता देता है।", "* 3. sandbox सुरक्षा प्रतिबंध लगाता है।", "* 4. title स्क्रीन रीडर के लिए विवरण देता है।", "* 5. यूट्यूब वीडियो और मैप्स लगाने के लिए उपयोग होता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Iframe Embeds</title>
</head>
<body>

  <h2>Embedded Resource</h2>
  <iframe 
    src="https://example.com" 
    width="600" 
    height="400" 
    title="Example Documentation Window" 
    sandbox="allow-scripts allow-same-origin">
  </iframe>

</body>
</html>`,
    exercise: {
      question: "Which attribute applies security restrictions to untrusted content inside an <iframe>?",
      options: ["sandbox", "security", "protect", "isolation"],
      correctAnswer: "sandbox",
      hint: "The sandbox attribute restricts scripts, popups, and parent navigation."
    }
  },
  {
    id: 66,
    slug: "plugin-insertion-embed-object-elements",
    title: "Plugin Insertion (<embed> & <object>)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Duckett Chapter 9 (p. 219-221)",
    points: {
      en: ["* 1. <object> embeds general external media resources.", "* 2. data attribute provides target resource URL.", "* 3. Can embed PDF documents and SVG drawings.", "* 4. Supports fallback content inside its tags.", "* 5. <embed> is a self-closing plugin element."],
      hi: ["* 1. <object> बाहरी मीडिया फाइलों को लोड करता है।", "* 2. data अट्रिब्यूट फाइल का पाथ देता है।", "* 3. PDF डॉक्यूमेंट्स और SVG ग्राफिक्स लोड कर सकता है।", "* 4. अंदर फॉलबैक कंटेंट की सुविधा देता है।", "* 5. <embed> एक सेल्फ-क्लोजिंग टैग होता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Object and Embed</title>
</head>
<body>

  <h2>PDF Document Viewer</h2>
  <object data="syllabus.pdf" type="application/pdf" width="600" height="400">
    <p>Your browser cannot view PDFs. <a href="syllabus.pdf">Download Syllabus PDF</a></p>
  </object>

</body>
</html>`,
    exercise: {
      question: "Which attribute on <object> specifies the URL of the external document to embed?",
      options: ["data", "src", "href", "file"],
      correctAnswer: "data",
      hint: "The <object> element uses the data attribute to locate resources."
    }
  },
  {
    id: 67,
    slug: "custom-data-attributes-data-prefix",
    title: "Custom Data Attributes (data-*)",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "HTML5: The Missing Manual Chapter 13",
    points: {
      en: ["* 1. data-* stores custom private metadata on elements.", "* 2. Prefix must always start with data-.", "* 3. Does not affect visual display styling.", "* 4. Readable via JavaScript dataset API object.", "* 5. Keeps HTML completely valid and standardized."],
      hi: ["* 1. data-* तत्वों पर कस्टम डेटा स्टोर करता है।", "* 2. नाम हमेशा data- से शुरू होना चाहिए।", "* 3. पेज के विजुअल लुक पर कोई असर नहीं पड़ता।", "* 4. जावास्क्रिप्ट dataset से आसानी से पढ़ा जा सकता है।", "* 5. HTML को मानक और वैध बनाए रखता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Custom Data Attributes</title>
</head>
<body>

  <h1>Course Catalog</h1>
  <article 
    id="course101" 
    data-category="frontend" 
    data-lessons="101" 
    data-difficulty="beginner">
    <h2>HTML5 Complete Guide</h2>
    <p>Learn web markup from scratch.</p>
  </article>

</body>
</html>`,
    exercise: {
      question: "What must all custom HTML5 data attributes begin with?",
      options: ["data-", "custom-", "var-", "meta-"],
      correctAnswer: "data-",
      hint: "Custom attributes must start with the prefix data- (e.g., data-user-id)."
    }
  },
  {
    id: 68,
    slug: "iframe-communication-security-headers",
    title: "Iframe Security & Permission Policies",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "The Definitive Guide to HTML5 Chapter 13",
    points: {
      en: ["* 1. allow attribute specifies allowed hardware features.", "* 2. Controls access to cameras and microphones.", "* 3. sandbox prevents malicious script execution attacks.", "* 4. title attribute describes iframe for accessibility.", "* 5. Protects users from third-party cross-site attacks."],
      hi: ["* 1. allow अट्रिब्यूट हार्डवेयर एक्सेस अनुमतियां देता है।", "* 2. कैमरा और माइक्रोफोन एक्सेस को नियंत्रित करता है।", "* 3. sandbox खतरनाक स्क्रिप्ट्स चलने से रोकता है।", "* 4. title स्क्रीन रीडर्स के लिए विवरण देता है।", "* 5. उपयोगकर्ताओं को सुरक्षा हमलों से बचाता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Iframe Security</title>
</head>
<body>

  <h2>Secure Map Embed</h2>
  <iframe 
    src="https://maps.google.com" 
    width="600" 
    height="350" 
    title="Location Map" 
    allow="geolocation" 
    sandbox="allow-scripts allow-same-origin">
  </iframe>

</body>
</html>`,
    exercise: {
      question: "Which attribute specifies device features (like camera or geolocation) an iframe may use?",
      options: ["allow", "permissions", "enable", "access"],
      correctAnswer: "allow",
      hint: "The allow attribute defines the feature policy for an <iframe>."
    }
  },
  {
    id: 69,
    slug: "html5-native-geolocation-api-details",
    title: "HTML5 Geolocation Semantic Structure",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "HTML5: The Missing Manual Chapter 10",
    points: {
      en: ["* 1. Semantic containers hold localized user content.", "* 2. Browsers request explicit user permission first.", "* 3. Coordinates include latitude and longitude values.", "* 4. Keeps user privacy secure by default.", "* 5. Organized inside semantic <section> layout tags."],
      hi: ["* 1. सिमेंटिक कंटेनर में लोकेशन सामग्री रखी जाती है।", "* 2. ब्राउज़र पहले यूजर से अनुमति मांगता है।", "* 3. निर्देशांक में अक्षांश और देशांतर होते हैं।", "* 4. यूजर की प्राइवेसी को सुरक्षित रखता है।", "* 5. सिमेंटिक <section> टैग में व्यवस्थित रहता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Local Services</title>
</head>
<body>

  <section id="location-panel">
    <h2>Nearby Study Hubs</h2>
    <p>Explore coding groups and bootcamps near your city.</p>
  </section>

</body>
</html>`,
    exercise: {
      question: "Can web pages access a user's location without their explicit permission?",
      options: [
        "No, user permission is strictly required",
        "Yes, any page can read coordinates silently",
        "Only if the page uses HTTPS",
        "Only on desktop computers"
      ],
      correctAnswer: "No, user permission is strictly required",
      hint: "User consent is strictly required by browsers before reading coordinates."
    }
  },
  {
    id: 70,
    slug: "capstone-interactive-video-player",
    title: "Capstone Project: Media Showcase Layout",
    unit: "Unit 7: Native Audio, Video & Embeds",
    bookRef: "Nextsem Academy Project Suite",
    points: {
      en: ["* 1. Combines semantic <figure>, <video>, and <audio> tags.", "* 2. Includes subtitles with native <track> elements.", "* 3. Uses poster thumbnails and explicit dimensions.", "* 4. Built with 100% pure standard HTML5.", "* 5. Provides universal media playback across devices."],
      hi: ["* 1. <figure>, <video>, और <audio> का संयुक्त उपयोग।", "* 2. <track> टैग से सबटाइटल जोड़े गए हैं।", "* 3. पोस्टर थंबनेल और सही आकार निर्धारित है।", "* 4. 100% शुद्ध मानक HTML5 से निर्मित।", "* 5. सभी डिवाइसेज पर मीडिया प्लेबैक सुनिश्चित करता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Media Showcase</title>
</head>
<body>

  <header>
    <h1>Nextsem Masterclass Series</h1>
  </header>

  <main>
    <figure>
      <video controls width="640" height="360" poster="cover.jpg">
        <source src="masterclass.mp4" type="video/mp4">
        <track src="subs_en.vtt" kind="subtitles" srclang="en" label="English" default>
      </video>
      <figcaption>Full Stack Web Development Overview</figcaption>
    </figure>

    <figure>
      <audio controls>
        <source src="interview.mp3" type="audio/mpeg">
      </audio>
      <figcaption>Senior Developer Career Podcast</figcaption>
    </figure>
  </main>

</body>
</html>`,
    exercise: {
      question: "Which collection of semantic tags creates a complete, captioned media showcase?",
      options: [
        "<figure>, <video>, <track>, and <figcaption>",
        "<div>, <span>, and <b> only",
        "<canvas> and <script> only",
        "<pre> and <code> only"
      ],
      correctAnswer: "<figure>, <video>, <track>, and <figcaption>",
      hint: "These elements provide complete semantic structure and accessible media captions."
    }
  },

  // ── UNIT 8: Lists, Tables & Layout Grids (71–80) ──
  {
    id: 71,
    slug: "unordered-lists-ul-li-bullet-points",
    title: "Unordered Lists (<ul> and <li>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 3 (p. 52-54)",
    points: {
      en: ["* 1. <ul> creates bulleted unordered item lists.", "* 2. <li> defines individual list items inside.", "* 3. Browsers render solid disc bullet points.", "* 4. Order of list items does not matter.", "* 5. Foundation for website navigation menu bars."],
      hi: ["* 1. <ul> बुलेट वाली बिना क्रम की लिस्ट बनाता है।", "* 2. <li> अंदर के हर आइटम को परिभाषित करता है।", "* 3. ब्राउज़र गोल बुलेट पॉइंट प्रदर्शित करते हैं।", "* 4. लिस्ट के क्रम से कोई फर्क नहीं पड़ता।", "* 5. वेबसाइट नेविगेशन मेन्यू की नींव होता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Unordered Lists</title>
</head>
<body>

  <h2>Web Development Skills</h2>
  <ul>
    <li>HTML5 Structure</li>
    <li>CSS3 Styling</li>
    <li>JavaScript Interactivity</li>
    <li>Git Version Control</li>
  </ul>

</body>
</html>`,
    exercise: {
      question: "Which tag defines each individual item inside an unordered or ordered list?",
      options: ["<li>", "<item>", "<list>", "<ul>"],
      correctAnswer: "<li>",
      hint: "<li> stands for List Item."
    }
  },
  {
    id: 72,
    slug: "ordered-lists-ol-li-numbered-steps",
    title: "Ordered Lists (<ol> and <li>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 3 (p. 55-57)",
    points: {
      en: ["* 1. <ol> creates numbered sequential lists.", "* 2. Browsers number items 1, 2, 3 automatically.", "* 3. <li> defines each numbered step inside.", "* 4. Ideal for recipes and installation guides.", "* 5. Re-ordering automatically updates numbers dynamically."],
      hi: ["* 1. <ol> नंबर वाली क्रमानुसार लिस्ट बनाता है।", "* 2. ब्राउज़र 1, 2, 3 नंबर खुद लगाता है।", "* 3. <li> हर क्रमबद्ध चरण को परिभाषित करता है।", "* 4. स्टेप-बाय-स्टेप गाइड के लिए उत्तम है।", "* 5. क्रम बदलने पर नंबर अपने आप अपडेट होते हैं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Ordered Lists</title>
</head>
<body>

  <h2>How to Setup VS Code on Windows 11</h2>
  <ol>
    <li>Download the Windows 11 User Installer.</li>
    <li>Run the setup wizard executable.</li>
    <li>Enable 'Add Open with Code' checkboxes.</li>
    <li>Launch VS Code and create index.html.</li>
  </ol>

</body>
</html>`,
    exercise: {
      question: "Which tag automatically creates sequentially numbered list items?",
      options: ["<ol>", "<ul>", "<nl>", "<dl>"],
      correctAnswer: "<ol>",
      hint: "<ol> stands for Ordered List."
    }
  },
  {
    id: 73,
    slug: "ordered-list-start-reversed-indexing",
    title: "Ordered Lists Start & Reversed Attributes",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 3 (p. 58-59)",
    points: {
      en: ["* 1. start attribute changes initial numbering start.", "* 2. reversed attribute counts numbers in reverse.", "* 3. type attribute sets letters or Roman numerals.", "* 4. start=\"5\" begins numbering from five.", "* 5. Great for top-10 countdown rankings."],
      hi: ["* 1. start अट्रिब्यूट शुरुआती नंबर बदलता है।", "* 2. reversed अट्रिब्यूट उल्टी गिनती (3, 2, 1) करता है।", "* 3. type अट्रिब्यूट रोमन या अक्षर सेट करता है।", "* 4. start=\"5\" पांच से गिनती शुरू करता है।", "* 5. टॉप-10 काउंटडाउन रैंकिंग के लिए उत्तम है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>List Attributes</title>
</head>
<body>

  <h2>Rocket Launch Countdown</h2>
  <ol reversed>
    <li>Engine Ignition</li>
    <li>Final Checklist Confirmation</li>
    <li>Ready for Liftoff</li>
  </ol>

  <h2>Continuation Steps</h2>
  <ol start="5">
    <li>Deploy to Staging Server</li>
    <li>Perform End-to-End Tests</li>
  </ol>

</body>
</html>`,
    exercise: {
      question: "Which attribute makes an ordered list count backwards in descending order?",
      options: ["reversed", "descending", "countdown", "backwards"],
      correctAnswer: "reversed",
      hint: "Add the boolean attribute reversed to <ol>."
    }
  },
  {
    id: 74,
    slug: "description-lists-dl-dt-dd-glossary",
    title: "Definition Lists (<dl>, <dt>, and <dd>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 3 (p. 60-63)",
    points: {
      en: ["* 1. <dl> creates description list glossary structures.", "* 2. <dt> specifies term or name definition.", "* 3. <dd> provides definition description value.", "* 4. Browsers indent <dd> automatically.", "* 5. Ideal for glossaries, FAQs, and dictionaries."],
      hi: ["* 1. <dl> शब्दावली (Glossary) लिस्ट बनाता है।", "* 2. <dt> शब्द या शीर्षक को परिभाषित करता है।", "* 3. <dd> उस शब्द की परिभाषा या विवरण देता है।", "* 4. ब्राउज़र <dd> को थोड़ा आगे खिसकाता है।", "* 5. डिक्शनरी और FAQ पेज के लिए उपयुक्त है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Description List</title>
</head>
<body>

  <h2>Web Terms Glossary</h2>
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language used for web structure.</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets used for visual layout.</dd>

    <dt>DOM</dt>
    <dd>Document Object Model representing parsed web elements.</dd>
  </dl>

</body>
</html>`,
    exercise: {
      question: "Inside a <dl> description list, which tag specifies the term name?",
      options: ["<dt>", "<dd>", "<dfn>", "<term>"],
      correctAnswer: "<dt>",
      hint: "<dt> stands for Description Term."
    }
  },
  {
    id: 75,
    slug: "table-container-grid-rows-columns",
    title: "Tables Rows & Cells (<tr>, <td>, <th>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 126-129)",
    points: {
      en: ["* 1. <table> creates tabular data grid layouts.", "* 2. <tr> defines table row containers.", "* 3. <th> defines bold centered header cells.", "* 4. <td> defines regular table data cells.", "* 5. Organized in rows and vertical columns."],
      hi: ["* 1. <table> डेटा ग्रिड और टेबल बनाता है।", "* 2. <tr> टेबल की हर पंक्ति (Row) बनाता है।", "* 3. <th> बोल्ड और केंद्रित हेडर सेल बनाता है।", "* 4. <td> सामान्य डेटा सेल को परिभाषित करता है।", "* 5. पंक्तियों और स्तंभों में संरचित होता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Tables</title>
</head>
<body>

  <h2>Student Exam Results</h2>
  <table border="1">
    <tr>
      <th>Student Name</th>
      <th>Subject</th>
      <th>Score</th>
    </tr>
    <tr>
      <td>Aarav</td>
      <td>HTML5</td>
      <td>98</td>
    </tr>
    <tr>
      <td>Priya</td>
      <td>CSS3</td>
      <td>95</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "Which tag is used to create a table header cell with bold centered text by default?",
      options: ["<th>", "<td>", "<header>", "<head>"],
      correctAnswer: "<th>",
      hint: "<th> stands for Table Header."
    }
  },
  {
    id: 76,
    slug: "table-colspan-merge-columns",
    title: "Table Column Spanning (colspan & rowspan)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 130-133)",
    points: {
      en: ["* 1. colspan merges cells across multiple columns.", "* 2. rowspan merges cells across multiple rows.", "* 3. Value sets number of cells merged.", "* 4. Eliminates redundant duplicate data cells.", "* 5. Essential for complex financial reporting grids."],
      hi: ["* 1. colspan कई कॉलम की सेल को जोड़ता है।", "* 2. rowspan कई पंक्तियों (Rows) की सेल जोड़ता है।", "* 3. मान जोड़ी जाने वाली सेलों की संख्या है।", "* 4. एक जैसा डेटा बार-बार लिखने से बचाता है।", "* 5. जटिल रिपोर्ट और टाइम-टेबल के लिए आवश्यक है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Table Spanning</title>
</head>
<body>

  <h2>Weekly Schedule</h2>
  <table border="1">
    <tr>
      <th>Day</th>
      <th colspan="2">Classes</th>
    </tr>
    <tr>
      <td>Monday</td>
      <td>Web Dev</td>
      <td>Algorithms</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td colspan="2">Capstone Project Lab</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "Which attribute allows a single table cell to span across multiple columns horizontally?",
      options: ["colspan", "rowspan", "span", "merge"],
      correctAnswer: "colspan",
      hint: "Use colspan=\"2\" to make a cell span across two columns."
    }
  },
  {
    id: 77,
    slug: "table-thead-tbody-tfoot-semantics",
    title: "Table Structured Sections (<thead>, <tbody>, <tfoot>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 134-137)",
    points: {
      en: ["* 1. <thead> groups header rows of tables.", "* 2. <tbody> contains the primary data rows.", "* 3. <tfoot> groups footer total calculation rows.", "* 4. Enables independent table body scrolling.", "* 5. Improves table printing and screen readers."],
      hi: ["* 1. <thead> टेबल की हेडर पंक्तियों को समेटता है।", "* 2. <tbody> मुख्य डेटा पंक्तियों को रखता है।", "* 3. <tfoot> कुल योग और फुटर पंक्तियों के लिए है।", "* 4. बॉडी को अलग से स्क्रॉल करने में मदद करता है।", "* 5. प्रिंटिंग और स्क्रीन रीडर अनुभव बेहतर करता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Structured Table</title>
</head>
<body>

  <h2>Course Billing Summary</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Item Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Full Stack Curriculum Access</td>
        <td>$0.00</td>
      </tr>
      <tr>
        <td>CLI Simulator Sandbox</td>
        <td>$0.00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Total Cost:</td>
        <td>100% Free</td>
      </tr>
    </tfoot>
  </table>

</body>
</html>`,
    exercise: {
      question: "Which semantic tag wraps the main body content rows of a table?",
      options: ["<tbody>", "<thead>", "<tfoot>", "<table>"],
      correctAnswer: "<tbody>",
      hint: "<tbody> represents the Table Body."
    }
  },
  {
    id: 78,
    slug: "table-column-groups-colgroup-col-widths",
    title: "Table Column Groups (<colgroup> & <col>)",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 138-140)",
    points: {
      en: ["* 1. <colgroup> specifies formatting for whole columns.", "* 2. Contains one or more <col> elements.", "* 3. span attribute sets number of columns.", "* 4. Avoids repeating attributes on every cell.", "* 5. Sits immediately after opening <table> tag."],
      hi: ["* 1. <colgroup> पूरे कॉलम की फॉर्मेटिंग तय करता है।", "* 2. इसके अंदर एक या अधिक <col> तत्व होते हैं।", "* 3. span अट्रिब्यूट कॉलम की संख्या बताता है।", "* 4. हर सेल में बार-बार स्टाइल लगाने से बचाता है।", "* 5. <table> टैग के तुरंत बाद लगाया जाता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Column Groups</title>
</head>
<body>

  <h2>Product Inventory</h2>
  <table border="1">
    <colgroup>
      <col span="1">
      <col span="2">
    </colgroup>
    <tr>
      <th>SKU</th>
      <th>Item Name</th>
      <th>In Stock</th>
    </tr>
    <tr>
      <td>#101</td>
      <td>USB-C Cable</td>
      <td>50</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "Where should the <colgroup> tag be placed inside a table?",
      options: [
        "Directly after the opening <table> tag",
        "Inside the <tfoot> element",
        "After the closing </table> tag",
        "Inside each <td> cell"
      ],
      correctAnswer: "Directly after the opening <table> tag",
      hint: "<colgroup> belongs at the top of the table before <thead> or <tr>."
    }
  },
  {
    id: 79,
    slug: "table-borders-cellpadding-cellspacing",
    title: "Table Borders & Spacing Layouts",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Duckett Chapter 6 (p. 141-143)",
    points: {
      en: ["* 1. border attribute specifies table grid lines.", "* 2. Value \"1\" renders basic table borders.", "* 3. Keeps data clearly separated and readable.", "* 4. Modern styling uses CSS border-collapse.", "* 5. Pure HTML attributes ensure universal fallback."],
      hi: ["* 1. border अट्रिब्यूट टेबल की रेखाएं दिखाता है।", "* 2. मान \"1\" साधारण बॉर्डर रेखाएं बनाता है।", "* 3. डेटा को अलग-अलग और पढ़ने योग्य रखता है।", "* 4. आधुनिक वेब में CSS का उपयोग होता है।", "* 5. शुद्ध HTML में भी साफ लेआउट देता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Table Grid</title>
</head>
<body>

  <h2>Command Reference Summary</h2>
  <table border="1">
    <tr>
      <th>Command</th>
      <th>Description</th>
      <th>OS Platform</th>
    </tr>
    <tr>
      <td>dir</td>
      <td>List directory contents</td>
      <td>Windows 11</td>
    </tr>
    <tr>
      <td>mkdir</td>
      <td>Create new folder</td>
      <td>Windows & Linux</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "Which pure HTML attribute renders visible grid borders around a table without CSS?",
      options: ["border=\"1\"", "grid=\"true\"", "outline=\"solid\"", "lines=\"visible\""],
      correctAnswer: "border=\"1\"",
      hint: "Use border=\"1\" on <table> for basic visible grid borders."
    }
  },
  {
    id: 80,
    slug: "capstone-weekly-schedule-pricing-grid",
    title: "Capstone Project: Dynamic Pricing Grid",
    unit: "Unit 8: Lists, Tables & Layout Grids",
    bookRef: "Nextsem Academy Project Suite",
    points: {
      en: ["* 1. Combines <table>, <thead>, <tbody>, <tfoot>, and <caption>.", "* 2. Implements clean column spanning for highlights.", "* 3. Uses pure HTML5 semantic structure.", "* 4. 100% accessible to screen reading devices.", "* 5. Presents comparative pricing data cleanly."],
      hi: ["* 1. <table>, <thead>, <tbody>, और <caption> का पूरा संगम।", "* 2. मुख्य बिंदुओं के लिए colspan का सही उपयोग।", "* 3. 100% शुद्ध सिमेंटिक HTML5 संरचना।", "* 4. स्क्रीन रीडर के लिए पूरी तरह सुलभ।", "* 5. तुलनात्मक मूल्य डेटा को साफ-साफ दिखाता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Nextsem Academy Plans</title>
</head>
<body>

  <h1>Nextsem Academy Access Tiers</h1>

  <table border="1">
    <caption>Complete Curriculum Access Pricing</caption>
    <thead>
      <tr>
        <th>Feature Plan</th>
        <th>Free Community</th>
        <th>Developer Pro</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Full Stack Lessons</td>
        <td>Included</td>
        <td>Included</td>
      </tr>
      <tr>
        <td>Windows 11 Terminal CLI</td>
        <td>Included</td>
        <td>Included</td>
      </tr>
      <tr>
        <td>Interactive MCQ Quizzes</td>
        <td>Included</td>
        <td>Included</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Monthly Subscription</th>
        <th colspan="2">$0 / Forever Free</th>
      </tr>
    </tfoot>
  </table>

</body>
</html>`,
    exercise: {
      question: "Which tag provides an accessible title or caption for an entire table?",
      options: ["<caption>", "<title>", "<header>", "<label>"],
      correctAnswer: "<caption>",
      hint: "The <caption> tag must be inserted immediately after <table>."
    }
  },

  // ── UNIT 9: Interactive Forms & Inputs (81–90) ──
  {
    id: 81,
    slug: "form-action-method-attributes-processing",
    title: "Form Action & Method (processing basics)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 144-147)",
    points: {
      en: ["* 1. <form> collects user interactive input data.", "* 2. action specifies server endpoint URL destination.", "* 3. method=\"GET\" appends data to URL.", "* 4. method=\"POST\" sends data securely inside body.", "* 5. Container for inputs, checkboxes, and buttons."],
      hi: ["* 1. <form> उपयोगकर्ता से डेटा इनपुट लेता है।", "* 2. action सर्वर प्रोसेसिंग URL का पता देता है।", "* 3. method=\"GET\" डेटा को URL में जोड़ता है।", "* 4. method=\"POST\" डेटा को सुरक्षित बॉडी में भेजता है।", "* 5. इनपुट, चेकबॉक्स और बटनों का कंटेनर है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Form</title>
</head>
<body>

  <h2>User Registration Form</h2>
  <form action="/register-user" method="post">
    <p>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
    </p>
    <button type="submit">Create Account</button>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which HTTP method sends sensitive form data securely in the request body instead of the URL?",
      options: ["POST", "GET", "FETCH", "SUBMIT"],
      correctAnswer: "POST",
      hint: "POST sends data inside the request payload body."
    }
  },
  {
    id: 82,
    slug: "form-labeling-for-attribute-linkage",
    title: "Form Labels (for attribute linkage)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 148-150)",
    points: {
      en: ["* 1. <label> associates descriptive text with inputs.", "* 2. for attribute matches the input id.", "* 3. Clicking label automatically focuses the input.", "* 4. Greatly enlarges touch target on mobiles.", "* 5. Critical accessibility requirement for screen readers."],
      hi: ["* 1. <label> इनपुट बॉक्स को नाम/विवरण देता है।", "* 2. for अट्रिब्यूट इनपुट के id से मेल खाता है।", "* 3. लेबल पर क्लिक करने से कर्सर इनपुट में आ जाता है।", "* 4. मोबाइल पर टच करने की जगह बड़ी हो जाती है।", "* 5. स्क्रीन रीडर्स के लिए बहुत जरूरी नियम है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Form Labels</title>
</head>
<body>

  <h2>Contact Information</h2>
  <form>
    <p>
      <label for="emailInput">Email Address:</label>
      <input type="email" id="emailInput" name="email">
    </p>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which attribute inside <label> links it to an <input id=\"...\">?",
      options: ["for", "target", "to", "name"],
      correctAnswer: "for",
      hint: "The for attribute on <label> must match the id on the <input>."
    }
  },
  {
    id: 83,
    slug: "text-password-inputs-type-attributes",
    title: "Text & Password Inputs (type=\"text\" & \"password\")",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 151-153)",
    points: {
      en: ["* 1. <input type=\"text\"> creates single-line text inputs.", "* 2. <input type=\"password\"> masks typed characters securely.", "* 3. name attribute defines variable key submitted.", "* 4. placeholder displays subtle hint text inside.", "* 5. <input> is a self-closing empty element."],
      hi: ["* 1. type=\"text\" साधारण एक लाइन इनपुट बनाता है।", "* 2. type=\"password\" पासवर्ड के अक्षरों को छिपाता है।", "* 3. name अट्रिब्यूट सर्वर पर जाने वाली की (key) है।", "* 4. placeholder बॉक्स में हल्का हिंट टेक्स्ट दिखाता है।", "* 5. <input> एक सेल्फ-क्लोजिंग टैग होता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Login Credentials</title>
</head>
<body>

  <h2>Member Login</h2>
  <form action="/login" method="post">
    <p>
      <label for="user">Username:</label>
      <input type="text" id="user" name="username" placeholder="e.g. alex2026">
    </p>
    <p>
      <label for="pass">Password:</label>
      <input type="password" id="pass" name="password" placeholder="Enter secure password">
    </p>
    <button type="submit">Sign In</button>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which input type masks characters with black dots or asterisks for privacy?",
      options: ["type=\"password\"", "type=\"secret\"", "type=\"hidden\"", "type=\"mask\""],
      correctAnswer: "type=\"password\"",
      hint: "type=\"password\" obscures the text typed by users."
    }
  },
  {
    id: 84,
    slug: "radio-buttons-grouping-name-attribute",
    title: "Radio Buttons (type=\"radio\")",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 154-156)",
    points: {
      en: ["* 1. type=\"radio\" creates single-choice option buttons.", "* 2. Same name attribute groups options together.", "* 3. Only one button selectable at once.", "* 4. value attribute defines submitted server data.", "* 5. checked attribute pre-selects default option."],
      hi: ["* 1. type=\"radio\" केवल एक विकल्प चुनने देता है।", "* 2. एक समान name अट्रिब्यूट विकल्पों का ग्रुप बनाता है।", "* 3. एक समय में सिर्फ एक ही बटन चुना जा सकता है।", "* 4. value सर्वर पर जाने वाला असली डेटा होता है।", "* 5. checked अट्रिब्यूट पहले से चुनकर रखता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Radio Buttons</title>
</head>
<body>

  <h2>Select Your Developer Track</h2>
  <form>
    <p>
      <input type="radio" id="frontend" name="track" value="frontend" checked>
      <label for="frontend">Frontend Web Developer</label>
    </p>
    <p>
      <input type="radio" id="fullstack" name="track" value="fullstack">
      <label for="fullstack">Full Stack Engineer</label>
    </p>
  </form>

</body>
</html>`,
    exercise: {
      question: "How do you group multiple radio buttons so only one can be selected at a time?",
      options: [
        "Give them all the exact same name attribute",
        "Give them all the same id attribute",
        "Wrap them in a <div> container",
        "Use the type=\"grouped\" attribute"
      ],
      correctAnswer: "Give them all the exact same name attribute",
      hint: "Radio buttons sharing the same name form a mutually exclusive group."
    }
  },
  {
    id: 85,
    slug: "checkboxes-prechecked-multiple-selections",
    title: "Checkboxes (type=\"checkbox\")",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 157-159)",
    points: {
      en: ["* 1. type=\"checkbox\" allows selecting multiple independent options.", "* 2. Users can pick zero or many.", "* 3. checked attribute sets initially checked state.", "* 4. Each checkbox has a distinct value.", "* 5. Common for terms agreement and skills."],
      hi: ["* 1. type=\"checkbox\" एक से अधिक विकल्प चुनने देता है।", "* 2. यूजर शून्य या कई विकल्प चुन सकता है।", "* 3. checked अट्रिब्यूट से टिक पहले से लगा रहता है।", "* 4. हर चेकबॉक्स की अपनी अलग value होती है।", "* 5. नियमों की सहमति और स्किल्स चुनने में उपयोगी है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Checkboxes</title>
</head>
<body>

  <h2>Select Coding Interests</h2>
  <form>
    <p>
      <input type="checkbox" id="htmlCheck" name="skills" value="html" checked>
      <label for="htmlCheck">HTML5 Markup</label>
    </p>
    <p>
      <input type="checkbox" id="cssCheck" name="skills" value="css" checked>
      <label for="cssCheck">CSS3 Stylesheets</label>
    </p>
    <p>
      <input type="checkbox" id="jsCheck" name="skills" value="js">
      <label for="jsCheck">JavaScript ES6+</label>
    </p>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which attribute marks a checkbox or radio button as selected by default?",
      options: ["checked", "selected", "active", "default"],
      correctAnswer: "checked",
      hint: "Add the checked attribute (e.g. <input type=\"checkbox\" checked>)."
    }
  },
  {
    id: 86,
    slug: "dropdown-select-lists-option-attributes",
    title: "Dropdown Select Lists (<select> and <option>)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 160-163)",
    points: {
      en: ["* 1. <select> creates dropdown option select menus.", "* 2. <option> tags define selectable items inside.", "* 3. selected attribute sets default chosen option.", "* 4. Saves massive screen space on forms.", "* 5. multiple attribute allows picking multiple values."],
      hi: ["* 1. <select> ड्रॉपडाउन मेन्यू सूची बनाता है।", "* 2. <option> अंदर के विकल्पों को परिभाषित करता है।", "* 3. selected अट्रिब्यूट से डिफ़ॉल्ट विकल्प चुना रहता है।", "* 4. स्क्रीन पर बहुत कम जगह घेरता है।", "* 5. multiple अट्रिब्यूट से कई मान चुन सकते हैं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Dropdown List</title>
</head>
<body>

  <h2>Select Your Country</h2>
  <form>
    <label for="countrySelect">Location:</label>
    <select id="countrySelect" name="country">
      <option value="in" selected>India</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </select>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which tag represents an individual selectable entry inside a <select> dropdown?",
      options: ["<option>", "<item>", "<li>", "<choice>"],
      correctAnswer: "<option>",
      hint: "<option> elements reside inside the <select> container."
    }
  },
  {
    id: 87,
    slug: "multiline-textarea-rows-cols-settings",
    title: "Multi-line Input (<textarea>)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 164-166)",
    points: {
      en: ["* 1. <textarea> creates multi-line text input areas.", "* 2. rows sets visible line height count.", "* 3. cols sets visible character width count.", "* 4. Default text goes between opening/closing tags.", "* 5. Ideal for comments, feedback, and reviews."],
      hi: ["* 1. <textarea> कई लाइनों का लंबा टेक्स्ट बॉक्स बनाता है।", "* 2. rows दिखाई देने वाली लाइनों की ऊंचाई तय करता है।", "* 3. cols दिखाई देने वाली चौड़ाई तय करता है।", "* 4. डिफ़ॉल्ट टेक्स्ट टैग्स के बीच में लिखा जाता है।", "* 5. फीडबैक, संदेश और समीक्षा लिखने के लिए उत्तम है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Textarea</title>
</head>
<body>

  <h2>Send Us Feedback</h2>
  <form>
    <p>
      <label for="comments">Your Message:</label><br>
      <textarea id="comments" name="comments" rows="5" cols="45">Type your question or feedback here...</textarea>
    </p>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which tag is used for multi-line text input such as comments or feedback messages?",
      options: ["<textarea>", "<input type=\"multiline\">", "<textbox>", "<text>"],
      correctAnswer: "<textarea>",
      hint: "Use <textarea rows=\"5\" cols=\"40\"></textarea> for multi-line text."
    }
  },
  {
    id: 88,
    slug: "buttons-submit-button-reset-types",
    title: "Buttons (type=\"submit\", \"reset\", \"button\")",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 167-169)",
    points: {
      en: ["* 1. <button> creates clickable interactive form buttons.", "* 2. type=\"submit\" sends form data to server.", "* 3. type=\"reset\" restores initial form values.", "* 4. type=\"button\" creates neutral clickable button.", "* 5. Can contain images and formatted text."],
      hi: ["* 1. <button> क्लिक करने योग्य फॉर्म बटन बनाता है।", "* 2. type=\"submit\" फॉर्म डेटा सर्वर को भेजता है।", "* 3. type=\"reset\" फॉर्म के सारे बॉक्स खाली करता है।", "* 4. type=\"button\" साधारण क्लिक बटन बनाता है।", "* 5. इसके अंदर टेक्स्ट और तस्वीरें दोनों आ सकते हैं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Form Buttons</title>
</head>
<body>

  <h2>Complete Registration</h2>
  <form action="/submit" method="post">
    <p>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
    </p>
    <button type="submit">Submit Form</button>
    <button type="reset">Reset Form</button>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which button type automatically submits the form data to the server when clicked?",
      options: ["type=\"submit\"", "type=\"send\"", "type=\"post\"", "type=\"enter\""],
      correctAnswer: "type=\"submit\"",
      hint: "type=\"submit\" triggers the form submission action."
    }
  },
  {
    id: 89,
    slug: "binding-input-labels-label-container",
    title: "Binding Input Labels (<label> wrapping)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 170-171)",
    points: {
      en: ["* 1. Wrapping inputs inside <label> binds them.", "* 2. Implicit binding does not require id.", "* 3. Improves code simplicity for simple checkboxes.", "* 4. Clicking any label text toggles input.", "* 5. Fully supported by all assistive technologies."],
      hi: ["* 1. <label> के अंदर इनपुट रखने से दोनों जुड़ जाते हैं।", "* 2. इस तरीके में id लगाने की जरूरत नहीं होती।", "* 3. छोटे चेकबॉक्स के लिए कोड आसान बनाता है।", "* 4. लेबल टेक्स्ट पर क्लिक करने से चेकबॉक्स टिक होता है।", "* 5. सभी स्क्रीन रीडर्स इसे पूरी तरह समझते हैं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Implicit Labeling</title>
</head>
<body>

  <h2>Terms and Conditions</h2>
  <form>
    <!-- Implicit Label Association without id -->
    <label>
      <input type="checkbox" name="agree" value="yes">
      I agree to the Nextsem Academy Terms of Service
    </label>
  </form>

</body>
</html>`,
    exercise: {
      question: "How can you link a label and input together without specifying id and for attributes?",
      options: [
        "Wrap the <input> element directly inside the <label> tags",
        "Put them in the same row of a table",
        "Use the link=\"true\" attribute",
        "Group them in a <fieldset>"
      ],
      correctAnswer: "Wrap the <input> element directly inside the <label> tags",
      hint: "Nesting the input inside <label> creates implicit association."
    }
  },
  {
    id: 90,
    slug: "form-groups-fieldset-legend-elements",
    title: "Form Groups (<fieldset> and <legend>)",
    unit: "Unit 9: Interactive Forms & Inputs",
    bookRef: "Duckett Chapter 7 (p. 172-175)",
    points: {
      en: ["* 1. <fieldset> groups related inputs with borders.", "* 2. <legend> provides a caption title header.", "* 3. Organizes large multi-step form structures.", "* 4. Screen readers announce group purpose clearly.", "* 5. Must be first child of <fieldset>."],
      hi: ["* 1. <fieldset> संबंधित इनपुट्स को बॉर्डर में घेरता है।", "* 2. <legend> उस ग्रुप का मुख्य शीर्षक बनता है।", "* 3. बड़े और लंबे फॉर्म को व्यवस्थित करता है।", "* 4. स्क्रीन रीडर ग्रुप का नाम स्पष्ट पढ़कर सुनाते हैं।", "* 5. <fieldset> के अंदर सबसे पहला टैग होना चाहिए।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Fieldset and Legend</title>
</head>
<body>

  <h2>User Profile Setup</h2>
  <form>
    <fieldset>
      <legend>Personal Details</legend>
      <p><label>First Name: <input type="text" name="fname"></label></p>
      <p><label>Last Name: <input type="text" name="lname"></label></p>
    </fieldset>

    <fieldset>
      <legend>Account Security</legend>
      <p><label>Password: <input type="password" name="pwd"></label></p>
    </fieldset>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which element provides a caption title for a <fieldset> form container?",
      options: ["<legend>", "<caption>", "<title>", "<heading>"],
      correctAnswer: "<legend>",
      hint: "<legend> must be the first child inside a <fieldset>."
    }
  },

  // ── UNIT 10: Advanced Semantics, Validation & APIs (91–100) ──
  {
    id: 91,
    slug: "form-validation-required-maxlength-minlength",
    title: "Form Field Required Validation",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    points: {
      en: ["* 1. required prevents submitting empty form fields.", "* 2. minlength sets minimum character length needed.", "* 3. maxlength stops typing beyond character limit.", "* 4. Browser shows native error tooltip bubbles.", "* 5. 100% native validation without JavaScript."],
      hi: ["* 1. required खाली फॉर्म सबमिट होने से रोकता है।", "* 2. minlength कम से कम अक्षरों की सीमा तय करता है।", "* 3. maxlength अधिकतम अक्षरों की सीमा तय करता है।", "* 4. ब्राउज़र अपने आप एरर चेतावनी बबल दिखाता है।", "* 5. बिना किसी जावास्क्रिप्ट के काम करता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Form Validation</title>
</head>
<body>

  <h2>Create Your Account</h2>
  <form action="/register" method="post">
    <p>
      <label for="uname">Full Name (Required, 3-20 chars):</label><br>
      <input type="text" id="uname" name="fullname" required minlength="3" maxlength="20">
    </p>
    <button type="submit">Submit Registration</button>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which attribute ensures a user cannot submit a form without filling in the input?",
      options: ["required", "mandatory", "validate", "mustfill"],
      correctAnswer: "required",
      hint: "Adding required prevents submission until valid input is entered."
    }
  },
  {
    id: 92,
    slug: "regex-pattern-matching-validation",
    title: "Regex Pattern Matching (pattern attribute)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    points: {
      en: ["* 1. pattern checks inputs against regular expressions.", "* 2. Validates PIN codes, phone formats, IDs.", "* 3. Submissions blocked if pattern check fails.", "* 4. Use title attribute for error instructions.", "* 5. Native browser regex evaluation on submit."],
      hi: ["* 1. pattern रेगुलर एक्सप्रेशन (Regex) से जांच करता है।", "* 2. पिन कोड, फोन नंबर और आईडी का फॉर्मेट जांचता है।", "* 3. फॉर्मेट गलत होने पर फॉर्म सबमिट नहीं होता।", "* 4. title अट्रिब्यूट से यूजर को सही निर्देश दें।", "* 5. ब्राउज़र बिना स्क्रिप्ट के खुद जांच करता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Pattern Validation</title>
</head>
<body>

  <h2>Postal PIN Code Verification</h2>
  <form>
    <p>
      <label for="pincode">6-Digit PIN Code:</label><br>
      <input type="text" id="pincode" name="pin" pattern="[0-9]{6}" title="Enter exactly 6 digits" required>
    </p>
    <button type="submit">Verify Code</button>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which attribute validates an input's value against a regular expression pattern?",
      options: ["pattern", "regex", "format", "mask"],
      correctAnswer: "pattern",
      hint: "Use pattern=\"[0-9]{6}\" to validate numerical format constraints."
    }
  },
  {
    id: 93,
    slug: "html5-numeric-ranges-type-number-range",
    title: "HTML5 Numeric Ranges (type=\"number\" & \"range\")",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    points: {
      en: ["* 1. type=\"number\" creates numeric spinner input boxes.", "* 2. type=\"range\" creates interactive slider controls.", "* 3. min and max define permitted bounds.", "* 4. step specifies allowed numeric increments.", "* 5. Mobile keyboards switch to number pads."],
      hi: ["* 1. type=\"number\" नंबर टाइप करने का बॉक्स बनाता है।", "* 2. type=\"range\" स्लाइडर बार कंट्रोल बनाता है।", "* 3. min और max न्यूनतम और अधिकतम सीमा तय करते हैं।", "* 4. step आगे बढ़ने की संख्या (इंक्रीमेंट) तय करता है।", "* 5. मोबाइल में सीधे नंबर कीपैड खुलता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Numeric Inputs</title>
</head>
<body>

  <h2>Developer Preferences</h2>
  <form>
    <p>
      <label for="age">Age (18 to 65):</label>
      <input type="number" id="age" name="age" min="18" max="65" value="21">
    </p>
    <p>
      <label for="volume">Volume Slider (0 to 100):</label>
      <input type="range" id="volume" name="vol" min="0" max="100" value="75">
    </p>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which input type renders a visual slider bar on screen?",
      options: ["type=\"range\"", "type=\"slider\"", "type=\"number\"", "type=\"bar\""],
      correctAnswer: "type=\"range\"",
      hint: "type=\"range\" creates a slider control for selecting a number."
    }
  },
  {
    id: 94,
    slug: "progress-indicators-meter-gauges",
    title: "Progress Indicators (<progress>) & Meter Gauges (<meter>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    points: {
      en: ["* 1. <progress> displays task completion bar progress.", "* 2. <meter> displays scalar measurement gauge values.", "* 3. <progress> uses value and max attributes.", "* 4. <meter> uses min, max, and optimum.", "* 5. Semantic native alternatives to styled divs."],
      hi: ["* 1. <progress> कार्य पूरा होने का प्रोग्रेस बार दिखाता है।", "* 2. <meter> मापन गेज (जैसे डिस्क स्पेस) दिखाता है।", "* 3. <progress> में value और max अट्रिब्यूट होते हैं।", "* 4. <meter> में min, max, और optimum मान होते हैं।", "* 5. सिमेंटिक और शुद्ध HTML5 तत्व हैं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Progress and Meter</title>
</head>
<body>

  <h2>System Dashboard</h2>
  <p>File Download Progress:</p>
  <progress value="75" max="100">75%</progress>

  <p>Disk Storage Used:</p>
  <meter value="0.6" min="0" max="1" low="0.3" high="0.8" optimum="0.2">60%</meter>

</body>
</html>`,
    exercise: {
      question: "Which tag is specifically designed to show task completion progress (e.g. downloading)?",
      options: ["<progress>", "<meter>", "<gauge>", "<status>"],
      correctAnswer: "<progress>",
      hint: "<progress> represents the completion progress of a task."
    }
  },
  {
    id: 95,
    slug: "autocomplete-datalist-input-suggestions",
    title: "Autocomplete Data Lists (<datalist>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    points: {
      en: ["* 1. <datalist> provides autocomplete suggestion dropdown lists.", "* 2. Connects to input using list attribute.", "* 3. Users can pick suggestion or type.", "* 4. Contains <option> values inside.", "* 5. Unlike <select>, allows typing custom values."],
      hi: ["* 1. <datalist> ऑटो-कंप्लीट सुझाव सूची देता है।", "* 2. input के list अट्रिब्यूट से जुड़ता है।", "* 3. यूजर सुझाव चुन सकता है या खुद टाइप कर सकता है।", "* 4. इसके अंदर <option> वैल्यू होती हैं।", "* 5. <select> से अलग, इसमें नया टेक्स्ट भी टाइप हो सकता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Datalist Autocomplete</title>
</head>
<body>

  <h2>Choose Code Editor</h2>
  <form>
    <label for="editorInput">Your Preferred Editor:</label>
    <input list="editors" id="editorInput" name="editor" placeholder="Type or select...">

    <datalist id="editors">
      <option value="Visual Studio Code">
      <option value="Sublime Text">
      <option value="Vim">
      <option value="Neovim">
    </datalist>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which attribute on <input> connects it to a <datalist id=\"...\"> element?",
      options: ["list", "datalist", "options", "autocomplete"],
      correctAnswer: "list",
      hint: "Use <input list=\"listId\"> to bind the suggestions."
    }
  },
  {
    id: 96,
    slug: "collapsible-accordions-details-summary",
    title: "Collapsible Accordions (<details> and <summary>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    points: {
      en: ["* 1. <details> creates native collapsible accordion widgets.", "* 2. <summary> defines clickable accordion heading label.", "* 3. Clicking summary toggles content visibility smoothly.", "* 4. open attribute expands accordion by default.", "* 5. Zero JavaScript required for interactive accordions."],
      hi: ["* 1. <details> अपने आप खुलने/बंद होने वाला अकॉर्डियन बनाता है।", "* 2. <summary> क्लिक करने वाला शीर्षक बनता है।", "* 3. क्लिक करने पर अंदर का विवरण तुरंत खुल जाता है।", "* 4. open अट्रिब्यूट से पहले से खुला रहता है।", "* 5. बिना किसी जावास्क्रिप्ट के काम करता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Accordion Details</title>
</head>
<body>

  <h2>Frequently Asked Questions</h2>

  <details open>
    <summary>Is Nextsem Academy free?</summary>
    <p>Yes! All curriculum, lessons, and tools are 100% free forever.</p>
  </details>

  <details>
    <summary>Do I need prior coding experience?</summary>
    <p>No prior coding experience is required. We start from ground zero!</p>
  </details>

</body>
</html>`,
    exercise: {
      question: "Which tag defines the visible clickable header for a <details> accordion?",
      options: ["<summary>", "<header>", "<title>", "<accordion>"],
      correctAnswer: "<summary>",
      hint: "<summary> provides the heading that toggles the <details> disclosure."
    }
  },
  {
    id: 97,
    slug: "native-modals-dialog-showmodal-methods",
    title: "Native Modals & Popups (<dialog>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 4",
    points: {
      en: ["* 1. <dialog> creates native modal popup windows.", "* 2. open attribute makes modal visible immediately.", "* 3. <form method=\"dialog\"> closes modal natively.", "* 4. Includes native backdrop behind modal popup.", "* 5. Replaces complex JavaScript modal library packages."],
      hi: ["* 1. <dialog> नेटिव पॉपअप डायलॉग विंडो बनाता है।", "* 2. open अट्रिब्यूट से डायलॉग तुरंत दिखाई देता है।", "* 3. <form method=\"dialog\"> डायलॉग को सीधे बंद कर देता है।", "* 4. पीछे अपने आप बैकड्रॉप स्क्रीन लगाता है।", "* 5. भारी जावास्क्रिप्ट लाइब्रेरियों की जरूरत खत्म करता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Native Dialog Modal</title>
</head>
<body>

  <h1>Nextsem Academy Announcement</h1>

  <dialog open>
    <h2>Welcome Student!</h2>
    <p>You are now on Lesson 97 of Full Stack Web Development.</p>
    <form method="dialog">
      <button>Got it, continue!</button>
    </form>
  </dialog>

</body>
</html>`,
    exercise: {
      question: "Which attribute makes a <dialog> element open and visible by default on page load?",
      options: ["open", "visible", "show", "active"],
      correctAnswer: "open",
      hint: "Add the boolean attribute open to the <dialog> tag."
    }
  },
  {
    id: 98,
    slug: "web-components-template-slot-elements",
    title: "Web Components Templates (<template> and <slot>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "HTML5: The Missing Manual Chapter 13",
    points: {
      en: ["* 1. <template> holds hidden client-side markup fragments.", "* 2. Content is not rendered upon load.", "* 3. Cloned and inserted dynamically via DOM.", "* 4. <slot> creates placeholders for custom text.", "* 5. Building block for reusable Web Components."],
      hi: ["* 1. <template> छिपे हुए HTML ब्लॉक को स्टोर करता है।", "* 2. पेज लोड होने पर यह स्क्रीन पर नहीं दिखता।", "* 3. DOM द्वारा क्लोन करके पेज में डाला जाता है।", "* 4. <slot> कस्टम टेक्स्ट के लिए खांचा (प्लेसहोल्डर) बनाता है।", "* 5. रीयूजेबल वेब कंपोनेंट्स की मजबूत नींव है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Templates</title>
</head>
<body>

  <h2>Course Card Blueprints</h2>

  <template id="course-card-blueprint">
    <article>
      <h3>Course Heading</h3>
      <p>Course description goes here.</p>
    </article>
  </template>

  <p>Template stored in DOM memory without rendering on screen.</p>

</body>
</html>`,
    exercise: {
      question: "Does content inside a <template> tag render visible on the screen when the page loads?",
      options: [
        "No, it remains hidden until cloned and inserted via DOM",
        "Yes, it renders as a regular <div>",
        "Only on mobile screens",
        "Only if open attribute is set"
      ],
      correctAnswer: "No, it remains hidden until cloned and inserted via DOM",
      hint: "<template> contents are not rendered until instantiated."
    }
  },
  {
    id: 99,
    slug: "canvas-graphics-draw-shapes-context",
    title: "Canvas Graphics (<canvas>)",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "Duckett Chapter 9 (p. 222-226)",
    points: {
      en: ["* 1. <canvas> provides bitmap drawing graphic surfaces.", "* 2. width and height define pixel drawing area.", "* 3. Used for games, charts, and animations.", "* 4. Text inside serves as fallback message.", "* 5. Graphics are drawn via 2D context."],
      hi: ["* 1. <canvas> ग्राफिक्स और ड्रॉइंग के लिए सतह देता है।", "* 2. width और height पिक्सल एरिया तय करते हैं।", "* 3. 2D गेम्स, चार्ट्स, और एनिमेशन के काम आता है।", "* 4. अंदर का टेक्स्ट फॉलबैक संदेश बनता है।", "* 5. 2D कॉन्टेक्स्ट के माध्यम से रेंडर होता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML5 Canvas</title>
</head>
<body>

  <h2>Interactive Game Canvas</h2>
  <canvas id="gameCanvas" width="400" height="200">
    Your browser does not support HTML5 canvas graphics.
  </canvas>

</body>
</html>`,
    exercise: {
      question: "Which element provides a scriptable 2D drawing canvas for charts and games?",
      options: ["<canvas>", "<svg>", "<draw>", "<graphic>"],
      correctAnswer: "<canvas>",
      hint: "The <canvas> element provides a resolution-dependent bitmap canvas."
    }
  },
  {
    id: 100,
    slug: "capstone-portfolio-layout-page",
    title: "Capstone Project: Complete Semantic Portfolio",
    unit: "Unit 10: Advanced Semantics, Validation & APIs",
    bookRef: "Nextsem Academy Project Suite",
    points: {
      en: ["* 1. Combines all HTML5 semantic tags learned.", "* 2. Implements header, nav, main, sections, footer.", "* 3. Includes working accessible forms and tables.", "* 4. 100% pure standard valid HTML5 markup.", "* 5. Ready for portfolio showcase and deployment."],
      hi: ["* 1. सीखे गए सभी HTML5 सिमेंटिक टैग्स का संगम।", "* 2. header, nav, main, section, footer का सही उपयोग।", "* 3. कार्यशील फॉर्म और डेटा टेबल शामिल हैं।", "* 4. 100% शुद्ध और वैध HTML5 मार्कअप।", "* 5. लाइव प्रोजेक्ट डिप्लॉयमेंट के लिए तैयार।"]
    },
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jane Doe | Full Stack Web Developer</title>
</head>
<body>

  <header>
    <h1>Jane Doe</h1>
    <p>Junior Full Stack Web Developer &bull; Nextsem Academy Graduate</p>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>I build fast, accessible, and standards-compliant web applications using pure HTML5 and modern developer workflows.</p>
    </section>

    <section id="skills">
      <h2>Technical Skills</h2>
      <ul>
        <li>HTML5 Semantic Architecture</li>
        <li>Windows 11 Command Prompt (cmd.exe)</li>
        <li>Git Version Control</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact Me</h2>
      <form action="/send-message" method="post">
        <p>
          <label for="cname">Your Name:</label><br>
          <input type="text" id="cname" name="name" required>
        </p>
        <p>
          <label for="cemail">Your Email:</label><br>
          <input type="email" id="cemail" name="email" required>
        </p>
        <p>
          <label for="cmsg">Message:</label><br>
          <textarea id="cmsg" name="message" rows="4" cols="40" required></textarea>
        </p>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Jane Doe. Built with Nextsem Academy Curriculum.</p>
  </footer>

</body>
</html>`,
    exercise: {
      question: "Which semantic structure represents the complete modern HTML5 standard layout for a personal portfolio?",
      options: [
        "<header>, <nav>, <main>, <section>, and <footer>",
        "<div> tags only with custom IDs",
        "<frameset> and <frame>",
        "<table> with <tr> layout cells"
      ],
      correctAnswer: "<header>, <nav>, <main>, <section>, and <footer>",
      hint: "Modern semantic HTML5 organizes pages with header, nav, main, section, and footer."
    }
  }
];

// Combine all 70 lessons (31 to 100)
const full70 = require('./generated_units_4_6.json').concat(unit7to10);
console.log("Total definitions for 31-100:", full70.length);

fs.writeFileSync('scripts/all_rich_lessons_31_100.json', JSON.stringify(full70, null, 2));
console.log("Saved scripts/all_rich_lessons_31_100.json");
