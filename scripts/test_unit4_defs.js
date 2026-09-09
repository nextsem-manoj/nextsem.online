const fs = require('fs');

// Load the 70 lesson definitions
const lessonDefs = [
  // ── UNIT 4 (31 - 40) ──
  {
    id: 31,
    slug: "bold-b-vs-semantic-strong-tag",
    title: "Presentational Bold (<b>) vs. Semantic Strong (<strong>)",
    unit: "Unit 4: Semantic Content & Text Modifications",
    bookRef: "Duckett Chapter 2 (p. 34-35)",
    points: {
      en: [
        "1. <b> makes text bold visually.",
        "2. <strong> indicates great structural importance.",
        "3. Screen readers announce <strong> with emphasis.",
        "4. <b> has no special semantic meaning.",
        "5. Use <strong> for crucial warnings."
      ],
      hi: [
        "1. <b> टेक्स्ट को विजुअली बोल्ड बनाता है।",
        "2. <strong> टेक्स्ट को मुख्य महत्व देता है।",
        "3. स्क्रीन रीडर <strong> को जोर देकर पढ़ते हैं।",
        "4. <b> का कोई खास अर्थ नहीं होता।",
        "5. जरूरी सूचना के लिए <strong> चुनें।"
      ]
    },
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Bold vs Strong</title>
</head>
<body>

  <h1>Important Announcement</h1>
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
      en: [
        "1. <i> slants text without extra meaning.",
        "2. <em> adds verbal stress and emphasis.",
        "3. Screen readers stress words inside <em>.",
        "4. <i> is ideal for book titles.",
        "5. Both render in italic font style."
      ],
      hi: [
        "1. <i> टेक्स्ट को तिरछा (Italic) दिखाता है।",
        "2. <em> टेक्स्ट पर विशेष जोर देता है।",
        "3. स्क्रीन रीडर <em> को तनाव देकर पढ़ते हैं।",
        "4. <i> किताबों के नाम के लिए उपयुक्त है।",
        "5. दोनों ब्राउज़र में इटैलिक दिखते हैं।"
      ]
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
      en: [
        "1. <mark> highlights text with yellow background.",
        "2. It marks relevant or searched words.",
        "3. Browsers style it like highlighter pens.",
        "4. It works as an inline element.",
        "5. Useful for highlighting search query results."
      ],
      hi: [
        "1. <mark> टेक्स्ट पर पीला बैकग्राउंड लगाता है।",
        "2. यह खोजे गए शब्दों को दर्शाता है।",
        "3. ब्राउज़र इसे हाइलाइटर पेन जैसा दिखाता है।",
        "4. यह एक इनलाइन एलिमेंट होता है।",
        "5. सर्च रिजल्ट्स हाइलाइट करने में उपयोगी है।"
      ]
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
      en: [
        "1. <code> displays inline computer code.",
        "2. It uses a monospace fixed-width font.",
        "3. Characters take up equal horizontal space.",
        "4. Ideal for keywords, variables, and filenames.",
        "5. Nest inside <pre> for multiple lines."
      ],
      hi: [
        "1. <code> कंप्यूटर कोड दिखाने के लिए है।",
        "2. यह मोनोस्पेस फॉन्ट का उपयोग करता है।",
        "3. सभी अक्षरों की चौड़ाई समान होती है।",
        "4. वैरिएबल्स और फाइलनाम लिखने के लिए उपयुक्त।",
        "5. मल्टी-लाइन कोड के लिए <pre> जोड़ें।"
      ]
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
      en: [
        "1. <pre> preserves exact spaces and linebreaks.",
        "2. Normal HTML collapses multiple spaces automatically.",
        "3. <pre> displays text in monospace font.",
        "4. Perfect for ASCII art and poems.",
        "5. Combine with <code> for code blocks."
      ],
      hi: [
        "1. <pre> सभी स्पेस और लाइन ब्रेक सुरक्षित रखता है।",
        "2. साधारण HTML खाली स्पेस को हटा देता है।",
        "3. <pre> मोनोस्पेस फॉन्ट में प्रदर्शित होता है।",
        "4. ASCII आर्ट और कविताओं के लिए उत्तम है।",
        "5. कोड ब्लॉक के लिए <code> के साथ मिलाएं।"
      ]
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
      en: [
        "1. <del> marks deleted or removed text.",
        "2. <del> displays text with a strikethrough.",
        "3. <ins> marks newly inserted replacement text.",
        "4. <ins> renders text with an underline.",
        "5. Useful for document revision change tracking."
      ],
      hi: [
        "1. <del> हटाए गए टेक्स्ट को दर्शाता है।",
        "2. <del> टेक्स्ट पर स्ट्राइकथ्रू लाइन लगाता है।",
        "3. <ins> नए जोड़े गए टेक्स्ट को दिखाता है।",
        "4. <ins> टेक्स्ट को अंडरलाइन करके दिखाता है।",
        "5. दस्तावेज़ संशोधन ट्रैक करने में उपयोगी है।"
      ]
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
      en: [
        "1. <s> represents no longer accurate text.",
        "2. It draws a line through text.",
        "3. Unlike <del>, it represents outdated items.",
        "4. Great for discontinued product sale prices.",
        "5. It works as an inline element."
      ],
      hi: [
        "1. <s> पुराना या अमान्य टेक्स्ट दर्शाता है।",
        "2. यह टेक्स्ट के बीच से रेखा खींचता है।",
        "3. <del> से अलग, यह अप्रचलित सामग्री दिखाता है।",
        "4. डिस्काउंट सेल कीमतों के लिए उत्तम है।",
        "5. यह एक इनलाइन तत्व होता है।"
      ]
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
      en: [
        "1. <abbr> defines abbreviations and acronyms.",
        "2. Use the title attribute for definitions.",
        "3. Hovering mouse shows full definition tooltip.",
        "4. Browsers show a dotted underline style.",
        "5. Helps screen readers expand short forms."
      ],
      hi: [
        "1. <abbr> संक्षिप्त रूपों को परिभाषित करता है।",
        "2. पूरे अर्थ के लिए title अट्रिब्यूट लगाएं।",
        "3. माउस ले जाने पर टूलटिप दिखाई देता है।",
        "4. ब्राउज़र बिंदीदार अंडरलाइन प्रदर्शित करते हैं।",
        "5. स्क्रीन रीडर्स को पूरा नाम समझने में मदद करता है।"
      ]
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
      en: [
        "1. <dfn> marks the defining instance term.",
        "2. Use it when first introducing terms.",
        "3. Browsers render <dfn> in italic style.",
        "4. Helps search engines build vocabulary indexes.",
        "5. The nearest sentence explains the definition."
      ],
      hi: [
        "1. <dfn> पहली बार समझाए गए शब्द को चिह्नित करता है।",
        "2. नए तकनीकी शब्दों की परिभाषा में उपयोग करें।",
        "3. ब्राउज़र इसे इटैलिक स्टाइल में दिखाते हैं।",
        "4. सर्च इंजन को शब्दावली इंडेक्स बनाने में मदद करता है।",
        "5. आसपास का वाक्य शब्द की परिभाषा समझाता है।"
      ]
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
      en: [
        "1. <sup> raises text above the baseline.",
        "2. <sub> lowers text below the baseline.",
        "3. <sup> is used for math exponents.",
        "4. <sub> is used for chemical formulas.",
        "5. Both reduce the font size slightly."
      ],
      hi: [
        "1. <sup> टेक्स्ट को ऊपर की ओर उठाता है।",
        "2. <sub> टेक्स्ट को नीचे की ओर झुकाता है।",
        "3. <sup> का उपयोग गणितीय घात (exponents) के लिए होता है।",
        "4. <sub> का उपयोग रासायनिक सूत्रों के लिए होता है।",
        "5. दोनों फॉन्ट साइज को थोड़ा छोटा करते हैं।"
      ]
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
  }
];

console.log("Loaded Unit 4 definitions:", lessonDefs.length);
