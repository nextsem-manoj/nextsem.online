const fs = require('fs');

const allLessons31to100 = [
  // ── UNIT 4: Semantic Content & Text Modifications (31–40) ──
  {
    id: 31,
    slug: "bold-b-vs-semantic-strong-tag",
    title: "Presentational Bold (<b>) vs. Semantic Strong (<strong>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 34-35)",
    points: {
      en: ["* 1. <b> makes text bold visually.", "* 2. <strong> indicates great structural importance.", "* 3. Screen readers announce <strong> with emphasis.", "* 4. <b> has no special semantic meaning.", "* 5. Use <strong> for crucial warnings."],
      hi: ["* 1. <b> टेक्स्ट को विजुअली बोल्ड बनाता है।", "* 2. <strong> टेक्स्ट को मुख्य महत्व देता है।", "* 3. स्क्रीन रीडर <strong> को जोर देकर पढ़ते हैं।", "* 4. <b> का कोई खास अर्थ नहीं होता।", "* 5. जरूरी सूचना के लिए <strong> चुनें।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Bold vs Strong</title>
</head>
<body>

  <h1>Important Notice</h1>
  <p>Please read this <b>carefully</b> before starting.</p>
  <p><strong>Warning:</strong> Never share your passwords!</p>

</body>
</html>`,
    exercise: {
      question: "Which element conveys strong importance and is emphasized by screen readers?",
      options: ["<strong>", "<b>", "<span>", "<mark>"],
      correctAnswer: "<strong>",
      hint: "Use <strong> for semantic importance and <b> for purely visual styling."
    }
  },
  {
    id: 32,
    slug: "italic-i-vs-semantic-emphasis-em-tag",
    title: "Presentational Italic (<i>) vs. Semantic Emphasis (<em>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 35-36)",
    points: {
      en: ["* 1. <i> slants text without extra meaning.", "* 2. <em> adds verbal stress and emphasis.", "* 3. Screen readers stress words inside <em>.", "* 4. <i> is ideal for book titles.", "* 5. Both render in italic font style."],
      hi: ["* 1. <i> टेक्स्ट को तिरछा (Italic) दिखाता है।", "* 2. <em> टेक्स्ट पर विशेष जोर देता है।", "* 3. स्क्रीन रीडर <em> को तनाव देकर पढ़ते हैं।", "* 4. <i> किताबों के नाम के लिए उपयुक्त है।", "* 5. दोनों ब्राउज़र में इटैलिक दिखते हैं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Italic vs Emphasis</title>
</head>
<body>

  <p>I read the novel <i>The Great Gatsby</i> yesterday.</p>
  <p>You <em>must</em> complete your assignment today!</p>

</body>
</html>`,
    exercise: {
      question: "Which tag adds semantic verbal stress to a sentence?",
      options: ["<em>", "<i>", "<cite>", "<span>"],
      correctAnswer: "<em>",
      hint: "<em> changes the meaning by adding emphasis to spoken voice."
    }
  },
  {
    id: 33,
    slug: "highlight-text-mark-tag-search-results",
    title: "Highlighted Text (<mark>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 37-38)",
    points: {
      en: ["* 1. <mark> highlights text with yellow background.", "* 2. It marks relevant or searched words.", "* 3. Browsers style it like highlighter pens.", "* 4. It works as an inline element.", "* 5. Useful for highlighting search query results."],
      hi: ["* 1. <mark> टेक्स्ट पर पीला बैकग्राउंड लगाता है।", "* 2. यह खोजे गए शब्दों को दर्शाता है।", "* 3. ब्राउज़र इसे हाइलाइटर पेन जैसा दिखाता है।", "* 4. यह एक इनलाइन एलिमेंट होता है।", "* 5. सर्च रिजल्ट्स हाइलाइट करने में उपयोगी है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Mark Element</title>
</head>
<body>

  <h1>Search Results for 'HTML'</h1>
  <p>Learn <mark>HTML</mark> to build modern web pages.</p>
  <p>Remember to buy <mark>fresh milk</mark> today.</p>

</body>
</html>`,
    exercise: {
      question: "Which HTML5 tag is used to highlight text with a yellow background by default?",
      options: ["<mark>", "<highlight>", "<yellow>", "<spotlight>"],
      correctAnswer: "<mark>",
      hint: "The <mark> tag represents text marked or highlighted for reference."
    }
  },
  {
    id: 34,
    slug: "monospace-code-snippet-code-tag",
    title: "Code Snippets (<code>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 45)",
    points: {
      en: ["* 1. <code> displays inline computer code.", "* 2. It uses a monospace fixed-width font.", "* 3. Characters take up equal horizontal space.", "* 4. Ideal for keywords, variables, and filenames.", "* 5. Nest inside <pre> for multiple lines."],
      hi: ["* 1. <code> कंप्यूटर कोड दिखाने के लिए है।", "* 2. यह मोनोस्पेस फॉन्ट का उपयोग करता है।", "* 3. सभी अक्षरों की चौड़ाई समान होती है।", "* 4. वैरिएबल्स और फाइलनाम लिखने के लिए उपयुक्त।", "* 5. मल्टी-लाइन कोड के लिए <pre> जोड़ें।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Code Element</title>
</head>
<body>

  <h2>JavaScript Variables</h2>
  <p>Use the <code>let</code> keyword to declare variables.</p>
  <p>Call <code>console.log()</code> to print debug output.</p>

</body>
</html>`,
    exercise: {
      question: "Which tag displays inline computer code in a monospace font?",
      options: ["<code>", "<program>", "<var>", "<script>"],
      correctAnswer: "<code>",
      hint: "Use <code> for inline code phrases and variable names."
    }
  },
  {
    id: 35,
    slug: "preformatted-text-pre-tag-spaces-tabs",
    title: "Preformatted Text (<pre>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 46)",
    points: {
      en: ["* 1. <pre> preserves exact spaces and linebreaks.", "* 2. Normal HTML collapses multiple spaces automatically.", "* 3. <pre> displays text in monospace font.", "* 4. Perfect for ASCII art and poems.", "* 5. Combine with <code> for code blocks."],
      hi: ["* 1. <pre> सभी स्पेस और लाइन ब्रेक सुरक्षित रखता है।", "* 2. साधारण HTML खाली स्पेस को हटा देता है।", "* 3. <pre> मोनोस्पेस फॉन्ट में प्रदर्शित होता है।", "* 4. ASCII आर्ट और कविताओं के लिए उत्तम है।", "* 5. कोड ब्लॉक के लिए <code> के साथ मिलाएं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Preformatted Text</title>
</head>
<body>

  <h2>Preformatted Code Block</h2>
  <pre>
function sayHello() {
    let message = "Hello, World!";
    return message;
}
  </pre>

</body>
</html>`,
    exercise: {
      question: "Which tag preserves whitespaces and line breaks exactly as typed?",
      options: ["<pre>", "<p>", "<format>", "<raw>"],
      correctAnswer: "<pre>",
      hint: "The <pre> element represents preformatted text."
    }
  },
  {
    id: 36,
    slug: "insert-ins-and-delete-del-tags",
    title: "Insertions (<ins>) & Deletions (<del>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 48)",
    points: {
      en: ["* 1. <del> marks deleted or removed text.", "* 2. <del> displays text with a strikethrough.", "* 3. <ins> marks newly inserted replacement text.", "* 4. <ins> renders text with an underline.", "* 5. Useful for document revision change tracking."],
      hi: ["* 1. <del> हटाए गए टेक्स्ट को दर्शाता है।", "* 2. <del> टेक्स्ट पर स्ट्राइकथ्रू लाइन लगाता है।", "* 3. <ins> नए जोड़े गए टेक्स्ट को दिखाता है।", "* 4. <ins> टेक्स्ट को अंडरलाइन करके दिखाता है।", "* 5. दस्तावेज़ संशोधन ट्रैक करने में उपयोगी है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Insert and Delete</title>
</head>
<body>

  <h1>Shopping List Updates</h1>
  <p>My favorite color is <del>blue</del> <ins>emerald green</ins>.</p>
  <p>Price: <del>$100</del> <ins>$49</ins></p>

</body>
</html>`,
    exercise: {
      question: "Which tag is used to represent inserted text with an underline?",
      options: ["<ins>", "<add>", "<u>", "<new>"],
      correctAnswer: "<ins>",
      hint: "<ins> represents text inserted into the document."
    }
  },
  {
    id: 37,
    slug: "strikethrough-s-tag-outdated-content",
    title: "Strikethrough (<s>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 49)",
    points: {
      en: ["* 1. <s> represents no longer accurate text.", "* 2. It draws a line through text.", "* 3. Unlike <del>, it represents outdated items.", "* 4. Great for discontinued product sale prices.", "* 5. It works as an inline element."],
      hi: ["* 1. <s> पुराना या अमान्य टेक्स्ट दर्शाता है।", "* 2. यह टेक्स्ट के बीच से रेखा खींचता है।", "* 3. <del> से अलग, यह अप्रचलित सामग्री दिखाता है।", "* 4. डिस्काउंट सेल कीमतों के लिए उत्तम है।", "* 5. यह एक इनलाइन तत्व होता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Strikethrough Element</title>
</head>
<body>

  <h2>Product Clearance Sale</h2>
  <p>Original Price: <s>$80</s></p>
  <p>Discounted Sale Price: $39</p>

</body>
</html>`,
    exercise: {
      question: "Which tag represents content that is no longer accurate or relevant?",
      options: ["<s>", "<strike>", "<cut>", "<remove>"],
      correctAnswer: "<s>",
      hint: "The <s> tag renders a strikethrough for outdated info."
    }
  },
  {
    id: 38,
    slug: "abbreviation-abbr-tag-title-tooltip",
    title: "Abbreviations (<abbr>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 42)",
    points: {
      en: ["* 1. <abbr> defines abbreviations and acronyms.", "* 2. Use the title attribute for definitions.", "* 3. Hovering mouse shows full definition tooltip.", "* 4. Browsers show a dotted underline style.", "* 5. Helps screen readers expand short forms."],
      hi: ["* 1. <abbr> संक्षिप्त रूपों को परिभाषित करता है।", "* 2. पूरे अर्थ के लिए title अट्रिब्यूट लगाएं।", "* 3. माउस ले जाने पर टूलटिप दिखाई देता है।", "* 4. ब्राउज़र बिंदीदार अंडरलाइन प्रदर्शित करते हैं।", "* 5. स्क्रीन रीडर्स को पूरा नाम समझने में मदद करता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Abbreviations</title>
</head>
<body>

  <h2>Web Standards</h2>
  <p>The <abbr title="World Wide Web">WWW</abbr> was invented in 1989.</p>
  <p>We write <abbr title="HyperText Markup Language">HTML</abbr> daily.</p>

</body>
</html>`,
    exercise: {
      question: "Which attribute inside <abbr> stores the full expanded text tooltip?",
      options: ["title", "desc", "tooltip", "full"],
      correctAnswer: "title",
      hint: "Hovering over the <abbr title=\"...\"> displays the title value."
    }
  },
  {
    id: 39,
    slug: "defining-term-dfn-tag-first-instance",
    title: "Defining Terms (<dfn>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 41)",
    points: {
      en: ["* 1. <dfn> marks the defining instance term.", "* 2. Use it when first introducing terms.", "* 3. Browsers render <dfn> in italic style.", "* 4. Helps search engines build vocabulary indexes.", "* 5. The nearest sentence explains the definition."],
      hi: ["* 1. <dfn> पहली बार समझाए गए शब्द को चिह्नित करता है।", "* 2. नए तकनीकी शब्दों की परिभाषा में उपयोग करें।", "* 3. ब्राउज़र इसे इटैलिक स्टाइल में दिखाते हैं।", "* 4. सर्च इंजन को शब्दावली इंडेक्स बनाने में मदद करता है।", "* 5. आसपास का वाक्य शब्द की परिभाषा समझाता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Defining Terms</title>
</head>
<body>

  <h2>Web Terminology</h2>
  <p><dfn>HTML</dfn> is the standard language used to create webpages.</p>
  <p><dfn>CSS</dfn> describes how HTML elements are styled on screen.</p>

</body>
</html>`,
    exercise: {
      question: "Which tag marks the term being defined in a dictionary or glossary sentence?",
      options: ["<dfn>", "<term>", "<define>", "<vocab>"],
      correctAnswer: "<dfn>",
      hint: "<dfn> represents the defining instance of a term."
    }
  },
  {
    id: 40,
    slug: "superscript-sup-and-subscript-sub-tags",
    title: "Superscript (<sup>) & Subscript (<sub>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 39)",
    points: {
      en: ["* 1. <sup> raises text above the baseline.", "* 2. <sub> lowers text below the baseline.", "* 3. <sup> is used for math exponents.", "* 4. <sub> is used for chemical formulas.", "* 5. Both reduce the font size slightly."],
      hi: ["* 1. <sup> टेक्स्ट को ऊपर की ओर उठाता है।", "* 2. <sub> टेक्स्ट को नीचे की ओर झुकाता है।", "* 3. <sup> का उपयोग गणितीय घात (exponents) के लिए होता है।", "* 4. <sub> का उपयोग रासायनिक सूत्रों के लिए होता है।", "* 5. दोनों फॉन्ट साइज को थोड़ा छोटा करते हैं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Superscript and Subscript</title>
</head>
<body>

  <h2>Science and Math Formulas</h2>
  <p>Chemical Formula of Water: H<sub>2</sub>O</p>
  <p>Einstein's Energy Formula: E = mc<sup>2</sup></p>
  <p>Date: October 24<sup>th</sup>, 2026</p>

</body>
</html>`,
    exercise: {
      question: "Which tag is used to write chemical formulas like H2O in HTML?",
      options: ["<sub>", "<sup>", "<lower>", "<down>"],
      correctAnswer: "<sub>",
      hint: "<sub> renders subscript text below the normal line."
    }
  },

  // ── UNIT 5: Navigation & Hyperlinks (41–50) ──
  {
    id: 41,
    slug: "anchor-a-tag-href-hyperlinks",
    title: "Anchor Elements (<a>) & the href Attribute",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 74-76)",
    points: {
      en: ["* 1. <a> creates clickable web hyperlinks.", "* 2. href specifies the destination page URL.", "* 3. Text between tags becomes clickable link.", "* 4. Unvisited links appear blue with underline.", "* 5. Visited links turn purple by default."],
      hi: ["* 1. <a> क्लिक करने योग्य लिंक बनाता है।", "* 2. href टारगेट वेबपेज का पता देता है।", "* 3. टैग्स के बीच का टेक्स्ट लिंक बनता है।", "* 4. बिना खुले लिंक नीले रंग में दिखते हैं।", "* 5. खुले हुए लिंक बैंगनी रंग के हो जाते हैं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Hyperlinks</title>
</head>
<body>

  <h1>Nextsem Academy Courses</h1>
  <p>Visit our platform: <a href="https://nextsem.online">Nextsem Academy</a></p>
  <p>Read about our mission: <a href="/about">About Us Page</a></p>

</body>
</html>`,
    exercise: {
      question: "Which attribute inside the <a> tag specifies the target link URL?",
      options: ["href", "src", "link", "target"],
      correctAnswer: "href",
      hint: "href stands for Hypertext REFerence."
    }
  },
  {
    id: 42,
    slug: "absolute-vs-relative-link-paths",
    title: "Absolute vs. Relative Paths",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 77-79)",
    points: {
      en: ["* 1. Absolute URLs include full domain names.", "* 2. Relative URLs point to local files.", "* 3. Use absolute paths for external sites.", "* 4. Use relative paths for internal pages.", "* 5. Relative links work across server environments."],
      hi: ["* 1. Absolute URL में पूरा डोमेन नाम होता है।", "* 2. Relative URL लोकल फाइलों को जोड़ता है।", "* 3. बाहरी वेबसाइटों के लिए Absolute चुनें।", "* 4. अपनी वेबसाइट के पेजों के लिए Relative चुनें।", "* 5. Relative लिंक्स सर्वर बदलने पर भी चलते हैं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Link Paths</title>
</head>
<body>

  <h2>Navigation Links</h2>
  <!-- Absolute Link to External Website -->
  <p><a href="https://www.google.com">Google Search (Absolute)</a></p>

  <!-- Relative Link to Local Page -->
  <p><a href="contact.html">Contact Us (Relative)</a></p>

</body>
</html>`,
    exercise: {
      question: "Which type of path includes the protocol like https:// and domain name?",
      options: ["Absolute Path", "Relative Path", "Inline Path", "Root Path"],
      correctAnswer: "Absolute Path",
      hint: "Absolute paths include the full web address with https://."
    }
  },
  {
    id: 43,
    slug: "parent-directory-hopping-relative-paths",
    title: "Parent Directory Hopping (../)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 80-82)",
    points: {
      en: ["* 1. ../ moves up one folder level.", "* 2. It navigates to the parent directory.", "* 3. Useful when subfolders link to root.", "* 4. Can be chained for multiple folders.", "* 5. Keeps local site links completely portable."],
      hi: ["* 1. ../ एक फोल्डर ऊपर ले जाता है।", "* 2. यह पैरेंट फोल्डर में नेविगेट करता है।", "* 3. सब-फोल्डर से मुख्य पेज पर जाने के काम आता है।", "* 4. कई स्तर ऊपर जाने के लिए दोहराया जा सकता है।", "* 5. साइट की फाइलों को पोर्टेबल रखता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Parent Directory Navigation</title>
</head>
<body>

  <h1>Course Chapter 1</h1>
  <p>Inside folder: <code>/courses/html/</code></p>
  <p><a href="../index.html">Go Back to Course Home</a></p>

</body>
</html>`,
    exercise: {
      question: "Which syntax moves up one folder level in relative paths?",
      options: ["../", "./", "//", "/.."],
      correctAnswer: "../",
      hint: "Double dot with slash (../) moves up to the parent directory."
    }
  },
  {
    id: 44,
    slug: "grandparent-directory-hopping-double-slash",
    title: "Grandparent Directory Hopping (../../)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 83-84)",
    points: {
      en: ["* 1. ../../ moves up two folder levels.", "* 2. It climbs out of deep folders.", "* 3. Reaches grandparent folders in file trees.", "* 4. Essential for deeply nested course chapters.", "* 5. Helps maintain relative structure on localhost."],
      hi: ["* 1. ../../ दो फोल्डर ऊपर ले जाता है।", "* 2. गहरे फोल्डरों से बाहर आने में उपयोगी।", "* 3. फाइल संरचना में ग्रैंडपैरेंट फोल्डर तक पहुंचता है।", "* 4. नेस्टेड अध्यायों के लिए जरूरी है।", "* 5. लोकलहोस्ट पर सही लिंक बनाए रखता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Grandparent Directory Navigation</title>
</head>
<body>

  <h2>Lesson Exercise Page</h2>
  <p>Current Path: <code>/projects/web/lesson1/</code></p>
  <p><a href="../../index.html">Back to Main Project Root</a></p>

</body>
</html>`,
    exercise: {
      question: "Which relative path climbs up two folder levels in the directory tree?",
      options: ["../../", "../", ".../", "/root/"],
      correctAnswer: "../../",
      hint: "Use ../../ to hop up two directory levels."
    }
  },
  {
    id: 45,
    slug: "email-mailto-links-anchor-tag",
    title: "Linking to Email Addresses (mailto:)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 85)",
    points: {
      en: ["* 1. mailto: creates clickable email links.", "* 2. Clicking opens the user's email client.", "* 3. Put recipient email after mailto: prefix.", "* 4. No spaces allowed after the colon.", "* 5. Essential for contact and support pages."],
      hi: ["* 1. mailto: ईमेल भेजने का लिंक बनाता है।", "* 2. क्लिक करने पर ईमेल ऐप खुलती है।", "* 3. mailto: के बाद ईमेल पता लिखें।", "* 4. कोलन के बाद स्पेस नहीं होना चाहिए।", "* 5. संपर्क और सपोर्ट पेज के लिए जरूरी है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Email Support Link</title>
</head>
<body>

  <h2>Contact Support</h2>
  <p>Have questions regarding full stack lessons?</p>
  <p>Send an email to: <a href="mailto:support@nextsem.online">support@nextsem.online</a></p>

</body>
</html>`,
    exercise: {
      question: "Which protocol prefix is used to open an email compose client?",
      options: ["mailto:", "email:", "send:", "inbox:"],
      correctAnswer: "mailto:",
      hint: "Use <a href=\"mailto:user@domain.com\"> to create an email link."
    }
  },
  {
    id: 46,
    slug: "telephone-dialing-tel-links-mobile",
    title: "Telephone Dialing Links (tel:)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 86)",
    points: {
      en: ["* 1. tel: creates direct phone call links.", "* 2. Mobile phones open their dialer directly.", "* 3. Include country code with plus prefix.", "* 4. Eliminates manual dialing for mobile users.", "* 5. Critical for local businesses and helpdesks."],
      hi: ["* 1. tel: सीधे फोन कॉल का लिंक बनाता है।", "* 2. मोबाइल फोन पर तुरंत डायलर खुलता है।", "* 3. देश कोड के साथ + निशान लगाएं।", "* 4. मोबाइल यूजर्स के लिए डायल करना आसान बनाता है।", "* 5. स्थानीय व्यापार और हेल्पलाइन के लिए जरूरी है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Telephone Links</title>
</head>
<body>

  <h2>Nextsem Helpline</h2>
  <p>Call our support line directly from your phone:</p>
  <p><a href="tel:+18005550199">Call Support: +1 (800) 555-0199</a></p>

</body>
</html>`,
    exercise: {
      question: "Which prefix is used in href to initiate a telephone call on smartphones?",
      options: ["tel:", "call:", "phone:", "dial:"],
      correctAnswer: "tel:",
      hint: "Use <a href=\"tel:+1234567890\"> for phone number links."
    }
  },
  {
    id: 47,
    slug: "open-link-new-tab-target-blank",
    title: "Target Attributes (target=\"_blank\")",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 87)",
    points: {
      en: ["* 1. target=\"_blank\" opens links in new tabs.", "* 2. Keeps your original website open.", "* 3. Great for external documentation references.", "* 4. Default target value is \"_self\".", "* 5. Always pair with rel security attributes."],
      hi: ["* 1. target=\"_blank\" नए टैब में लिंक खोलता है।", "* 2. आपकी मूल वेबसाइट खुली रहती है।", "* 3. बाहरी डॉक्यूमेंटेशन लिंक के लिए उत्तम।", "* 4. डिफ़ॉल्ट टारगेट मान \"_self\" होता है।", "* 5. सुरक्षा के लिए rel अट्रिब्यूट जरूर लगाएं।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Open in New Tab</title>
</head>
<body>

  <h2>External Documentation</h2>
  <p>Read MDN documentation without leaving Nextsem:</p>
  <p><a href="https://developer.mozilla.org" target="_blank">Open MDN Web Docs (New Tab)</a></p>

</body>
</html>`,
    exercise: {
      question: "Which target value instructs the browser to open a link in a new tab?",
      options: ["_blank", "_new", "_tab", "_open"],
      correctAnswer: "_blank",
      hint: "Use target=\"_blank\" to open a link in a new browser tab."
    }
  },
  {
    id: 48,
    slug: "link-security-rel-noopener-noreferrer",
    title: "Link Security (rel=\"noopener noreferrer\")",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "The Definitive Guide to HTML5 Chapter 13",
    points: {
      en: ["* 1. Protects against tabnabbing phishing security exploits.", "* 2. noopener stops new tab controlling opener.", "* 3. noreferrer hides referrer website header info.", "* 4. Essential when using target=\"_blank\".", "* 5. Standard security practice for external links."],
      hi: ["* 1. टैब-नैबिंग और फिशिंग हमलों से सुरक्षा देता है।", "* 2. noopener नए टैब को पुराना पेज बदलने से रोकता है।", "* 3. noreferrer रेफरर डेटा छिपाता है।", "* 4. target=\"_blank\" के साथ लगाना अनिवार्य है।", "* 5. बाहरी लिंक्स के लिए मानक सुरक्षा नियम है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Secure External Links</title>
</head>
<body>

  <h2>Secure External Links</h2>
  <p>Learn more on external resources safely:</p>
  <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">Visit GitHub Securely</a></p>

</body>
</html>`,
    exercise: {
      question: "Which rel attribute value prevents the new tab from accessing window.opener?",
      options: ["noopener", "nofollow", "secure", "isolate"],
      correctAnswer: "noopener",
      hint: "noopener secures external links from accessing the opening window."
    }
  },
  {
    id: 49,
    slug: "hash-links-jump-to-page-sections",
    title: "Document Hash Links (href=\"#id\")",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "Duckett Chapter 4 (p. 88-89)",
    points: {
      en: ["* 1. Hash links jump to specific page sections.", "* 2. Target elements must have matching id attribute.", "* 3. Put # before target id name in href.", "* 4. Creates instant single-page table of contents.", "* 5. Smoothly navigates without page reloads."],
      hi: ["* 1. हैश लिंक्स पेज के किसी हिस्से पर ले जाते हैं।", "* 2. टारगेट तत्व में id अट्रिब्यूट होना चाहिए।", "* 3. href में id नाम के आगे # लगाएं।", "* 4. एक ही पेज में इंडेक्स बनाने के काम आता है।", "* 5. पेज रीलोड किए बिना तुरंत स्क्रॉल करता है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Document Hash Navigation</title>
</head>
<body>

  <h1>Table of Contents</h1>
  <p><a href="#chapter1">Jump to Chapter 1</a></p>
  <p><a href="#chapter2">Jump to Chapter 2</a></p>

  <hr>

  <h2 id="chapter1">Chapter 1: Getting Started</h2>
  <p>Learn the basics of HTML elements.</p>

  <h2 id="chapter2">Chapter 2: Working with Links</h2>
  <p>Learn how to connect multiple pages together.</p>

</body>
</html>`,
    exercise: {
      question: "Which symbol must prefix the id name in href to jump to an element on the same page?",
      options: ["#", "@", "$", "."],
      correctAnswer: "#",
      hint: "Use href=\"#sectionId\" to target an element with id=\"sectionId\"."
    }
  },
  {
    id: 50,
    slug: "download-attribute-force-file-download",
    title: "Download Attribute (force download)",
    unit: "Unit 5: Navigation & Hyperlinks",
    bookRef: "The Definitive Guide to HTML5 Chapter 13",
    points: {
      en: ["* 1. download forces browsers to save files directly.", "* 2. Prevents browsers opening PDFs in tabs.", "* 3. Can rename downloaded file in value.", "* 4. Works seamlessly on local resource files.", "* 5. Great for cheat sheets and certificate downloads."],
      hi: ["* 1. download फाइल को सीधे सेव करने का निर्देश देता है।", "* 2. PDF या इमेज को नए टैब में खुलने से रोकता है।", "* 3. फाइल का नया नाम भी दिया जा सकता है।", "* 4. लोकल फाइलों पर सहजता से काम करता है।", "* 5. नोट्स और सर्टिफिकेट डाउनलोड के लिए उपयोगी है।"]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>File Downloads</title>
</head>
<body>

  <h2>Course Resources</h2>
  <p>Download our free reference guide:</p>
  <p><a href="html5_cheatsheet.pdf" download="Nextsem_HTML5_Guide.pdf">Download HTML5 Cheat Sheet (PDF)</a></p>

</body>
</html>`,
    exercise: {
      question: "Which attribute inside <a> triggers a file download instead of navigating to the file?",
      options: ["download", "save", "fetch", "export"],
      correctAnswer: "download",
      hint: "Add the download attribute to force the browser to download the linked file."
    }
  }
];

console.log("Loaded definitions up to 50:", allLessons31to100.length);
