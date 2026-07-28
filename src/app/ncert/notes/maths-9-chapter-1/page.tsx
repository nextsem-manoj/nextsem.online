"use client";

import React, { useState } from 'react';
import NcertMasterLessonTemplate, { NcertLessonPage } from '@/components/ncert/NcertMasterLessonTemplate';
import { Calculator } from 'lucide-react';

const LESSON_PAGES: NcertLessonPage[] = [
  {
    pageNo: 1,
    title: "1.1 Introduction to Real Numbers & The Number Line",
    originalText: "In your earlier classes, you have studied about the number line and how to represent various types of numbers on it. Imagine you start walking from zero and keep walking along this line in the positive direction. As far as your eyes can see, there are numbers, numbers and numbers! You begin by picking up natural numbers N = {1, 2, 3, ...}. Now suppose you turn around and pick up 0. You now have whole numbers W = {0, 1, 2, 3, ...}. Next, you put all the negative numbers like -1, -2, -3 into your bag. Now your collection is the set of Integers Z, derived from the German word 'zahlen' which means to count.",
    explanationEn: `👋 **Welcome Future Math Wizard!** I am your NCERT Master Coach, and today we're starting an exciting adventure! 🚀

Imagine standing on a giant, infinite measuring tape stretched across the universe! 📏

1. **Step Forward (1, 2, 3, 4...)**: You pick up everyday counting numbers. We call these **Natural Numbers ($N$)**! 🎒
2. **Include Step Zero (0)**: Put $0$ in your bag! Boom! You now have **Whole Numbers ($W$)**.
3. **Turn Around & Walk Backward (-1, -2, -3...)**: Grab all the negative numbers! Your bag is now full of **Integers ($Z$)**!

💡 *Teacher's Secret Trick*: Why the letter **'Z'** for integers? It comes from the German word **'zahlen'**, which means *"to count"*! 🇩🇪

😄 *Quick Joke*: Why was the number 6 afraid of 7? Because 7 ate 9 (7, 8, 9)! 🍕`,
    explanationHi: `👋 **नमस्ते भावी गणित विजार्ड!** मैं आपका NCERT मास्टर कोच हूँ, और आज हम एक नया गणितीय साहसिक कार्य शुरू कर रहे हैं! 🚀

कल्पना कीजिए कि आप पूरे ब्रह्मांड में फैले एक विशाल, अनंत मापने वाले फीते (Measuring Tape) पर खड़े हैं! 📏

1. **आगे बढ़ें (1, 2, 3, 4...)**: आप रोजमर्रा की गिनती की संख्याएँ उठाते हैं। इन्हें हम **प्राकृत संख्याएं ($N$)** कहते हैं! 🎒
2. **शून्य (0) को शामिल करें**: अपने बैग में $0$ भी डाल लें! बूम! अब आपके पास **पूर्ण संख्याएं ($W$)** आ गईं।
3. **पीछे मुड़ें और उल्टा चलें (-1, -2, -3...)**: सभी ऋणात्मक संख्याओं को बैग में रखें! अब आपका बैग **पूर्णांक ($Z$)** से भर गया है!

💡 *मास्टर ट्रिक*: पूर्णांकों के लिए प्रतीक **'Z'** क्यों? यह जर्मन शब्द **'zahlen'** से लिया गया है, जिसका अर्थ है *"गिनना"*! 🇩🇪`,
    explanationHinglish: `👋 **Hey Champion!** Main hu aapka NCERT Master Coach, aur aaj hum Maths Chapter 1 ko super fun tariqay se seekhenge! 🚀

Suppose karo aap ek endless measuring tape par khade ho! 📏

1. **Aage Kadam Badhao (1, 2, 3, 4...)**: Sabhi natural counting numbers aapke bag me aa gaye. Direct kehna: **Natural Numbers ($N$)**! 🎒
2. **Starting Point Zero (0) Daal Lo**: Bag me $0$ milate hi ye ban gaye **Whole Numbers ($W$)**.
3. **Peeche Walk Karo (-1, -2, -3...)**: Negative numbers uthao! Ab aapke bag me poora **Integers ($Z$)** ka collection hai!

💡 *Fun Teacher Fact*: Integers ko **'Z'** kyu bolte hain? Kyunki German language me **'zahlen'** ka matlab hota hai *"to count"*! 🇩🇪`,
    pageImageUrl: "/ncert-pdfs/sample-page.png",
    keyPoints: [
      "Natural Numbers N = {1, 2, 3, ...} (Counting numbers)",
      "Whole Numbers W = {0, 1, 2, 3, ...} (Includes Zero)",
      "Integers Z = {..., -3, -2, -1, 0, 1, 2, 3, ...} ('zahlen' = to count)"
    ],
    mcq: {
      question: "Which collection of numbers includes '0' along with all counting numbers 1, 2, 3...?",
      options: [
        "Natural Numbers (N)",
        "Whole Numbers (W)",
        "Negative Integers",
        "Irrational Numbers"
      ],
      answer: 1,
      explanation: "Whole numbers (W) consist of all natural numbers along with 0: {0, 1, 2, 3, ...}."
    },
    blank: {
      question: "The letter 'Z' used for Integers comes from the German word ______ which means 'to count'.",
      answer: "zahlen",
      hint: "It starts with 'z' and ends with 'en'."
    }
  },
  {
    pageNo: 2,
    title: "1.2 Rational Numbers (Q) & Finding Rational Numbers Between Two Numbers",
    originalText: "A number 'r' is called a rational number if it can be written in the form p/q, where p and q are integers and q ≠ 0. The collection of rational numbers is denoted by Q, which comes from the word 'quotient'. There are infinitely many rational numbers between any two given rational numbers. We can find them using either the Mean Method (a+b)/2 or by multiplying numerator and denominator to make equivalent denominators.",
    explanationEn: `🍕 **Pizza Fractions & Rational Numbers ($Q$)**

Now, what if you slice a delicious pizza? 🍕
- Half a pizza is $\\frac{1}{2}$. Three-quarters is $\\frac{3}{4}$. Even 5 full pizzas is $\\frac{5}{1}$!
- Any number that can be written as a fraction $\\frac{p}{q}$ is a **Rational Number ($Q$)**! (Symbol **'Q'** stands for **Quotient**).

⚠️ **The Absolute Golden Rule**: The bottom number $q$ CAN NEVER BE ZERO ($q \\neq 0$)! Why? Because dividing a pizza into zero slices creates a black hole in mathematics! 🌌

✨ **Mind-Blowing Mindset**: Between any 2 numbers (like 1 and 2), how many rational numbers exist? 10? 100? NO! There are **INFINITELY MANY** ($\frac{3}{2} = 1.5, \frac{5}{4} = 1.25, \frac{7}{4} = 1.75\dots$)! 🎉`,
    explanationHi: `🍕 **पिज्जा स्लाइस और परिमेय संख्याएं ($Q$)**

अब, यदि आप एक स्वादिष्ट पिज्जा के टुकड़े करते हैं? 🍕
- आधा पिज्जा $\\frac{1}{2}$ है। तीन-चौथाई $\\frac{3}{4}$ है। यहाँ तक कि 5 पूरे पिज्जा $\\frac{5}{1}$ हैं!
- कोई भी संख्या जिसे भिन्न $\\frac{p}{q}$ के रूप में लिखा जा सकता है, वह **परिमेय संख्या ($Q$)** कहलाती है! (प्रतीक **'Q'** का अर्थ है **भागफल / Quotient**)।

⚠️ **अटूट नियम**: नीचे की संख्या $q$ कभी भी शून्य नहीं हो सकती ($q \\neq 0$)! 🌌

✨ **अद्भुत तथ्य**: किन्हीं 2 संख्याओं (जैसे 1 और 2) के बीच कितनी परिमेय संख्याएँ होती हैं? **अनंत (Infinitely Many)** ($\frac{3}{2} = 1.5, \frac{5}{4} = 1.25...$)! 🎉`,
    explanationHinglish: `🍕 **Pizza Fractions & Rational Numbers ($Q$)**

Socho agar aap ek pizza ke slices karo! 🍕
- Half pizza matlab $\\frac{1}{2}$. 3 slices out of 4 matlab $\\frac{3}{4}$.
- Har vo number jise p/q fraction me likha ja sake, use kehate hain **Rational Number ($Q$)**! (Q stands for **Quotient**).

⚠️ **Golden Teacher Rule**: Niche wala number $q$ KABHI BHI 0 NAHI HO SAKTA ($q \\neq 0$)! 🌌

✨ **Pro Tip**: Koi bhi 2 numbers ke beech me kitne rational numbers hote hain? **INFINITELY MANY**! Jaise 1 aur 2 ke beech $\\frac{3}{2} = 1.5, \\frac{5}{4} = 1.25, \\frac{7}{4} = 1.75$ infinite numbers hain! 🎉`,
    pageImageUrl: "/ncert-pdfs/sample-page.png",
    keyPoints: [
      "Rational Number Q = p/q where p, q are integers & q ≠ 0",
      "Symbol 'Q' stands for 'Quotient'",
      "Infinitely many rational numbers exist between any two numbers"
    ],
    mcq: {
      question: "In the definition of Rational Number p/q, which condition MUST always be satisfied?",
      options: [
        "p must be equal to 0",
        "q must not be equal to 0 (q ≠ 0)",
        "p must be greater than q",
        "q must be a negative number"
      ],
      answer: 1,
      explanation: "Division by zero is undefined, so in p/q, q cannot equal zero."
    },
    blank: {
      question: "The letter 'Q' for rational numbers stands for the word ______.",
      answer: "quotient",
      hint: "Result of division starting with 'q'."
    }
  },
  {
    pageNo: 3,
    title: "1.3 Irrational Numbers (s) & Pythagoras Representation on Number Line",
    originalText: "A number 'r' is called irrational if it cannot be written in the form p/q, where p and q are integers and q ≠ 0. The Pythagoreans in Greece (followers of Pythagoras) discovered irrational numbers around 400 BC. Famous examples are √2, √3, √15, π (pi), and 0.1010010001... We can locate √2 on the number line by constructing a right-angled triangle with base = 1 unit and height = 1 unit. By Pythagoras theorem, hypotenuse = √(1² + 1²) = √2.",
    explanationEn: `🕵️ **The Mystery of Irrational Numbers ($\sqrt{2}, \sqrt{3}, \pi$)**

Around 400 BC in ancient Greece, secret mathematicians called the **Pythagoreans** stumbled upon a crazy puzzle! 🧩

They asked: *"Can EVERY length on earth be written as a clean fraction $\\frac{p}{q}$?"*
Answer: **NO!** 🤯

Look at a right-angled triangle:
- $\text{Base} = 1\text{ unit}$
- $\text{Height} = 1\text{ unit}$
- By Pythagoras Theorem: $\text{Hypotenuse} = \sqrt{1^2 + 1^2} = \sqrt{2} \approx 1.41421356\dots$

This decimal $\sqrt{2}$ NEVER stops and NEVER repeats! Numbers that cannot be written as fractions are called **Irrational Numbers**! 📐`,
    explanationHi: `🕵️ **अपरिमेय संख्याओं का रहस्य ($\sqrt{2}, \sqrt{3}, \pi$)**

लगभग 400 ईसा पूर्व प्राचीन यूनान में, **पाइथागोरस के अनुयायियों** ने एक अद्भुत पहेली की खोज की! 🧩

उन्होंने समकोण त्रिभुज बनाया:
- $\text{आधार (Base)} = 1\text{ इकाई}$
- $\text{ऊंचाई (Height)} = 1\text{ इकाई}$
- पाइथागोरस प्रमेय द्वारा: $\text{कर्ण (Hypotenuse)} = \sqrt{1^2 + 1^2} = \sqrt{2} \approx 1.41421356\dots$

यह दशमलव संख्या $\sqrt{2}$ कभी समाप्त नहीं होती और कभी नहीं दोहराती! इन्हें **अपरिमेय संख्याएँ (Irrational Numbers)** कहते हैं! 📐`,
    explanationHinglish: `🕵️ **Mystery Numbers: Irrational Numbers ($\sqrt{2}, \sqrt{3}, \pi$)**

Around 400 BC me Greece ke **Pythagoreans** ne ek mind-bending discovery ki! 🧩

Unhone right triangle banaya:
- $\text{Base} = 1\text{ unit}$
- $\text{Height} = 1\text{ unit}$
- Pythagoras Formula se: $\text{Hypotenuse} = \sqrt{1^2 + 1^2} = \sqrt{2} \approx 1.41421356\dots$

Ye decimal $\sqrt{2}$ infinitely aage chalta rehta hai bina repeat hue! Isliye ise fraction $p/q$ me nahi likh sakte — ye hai **Irrational Number**! 📐`,
    pageImageUrl: "/ncert-pdfs/sample-page.png",
    keyPoints: [
      "Irrational numbers cannot be written as p/q",
      "Examples: √2, √3, √5, π, 0.1010010001...",
      "Pythagoras Theorem: Hypotenuse² = Base² + Height²"
    ],
    mcq: {
      question: "Who discovered the existence of Irrational Numbers like √2 around 400 BC in Greece?",
      options: [
        "Isaac Newton",
        "Followers of Pythagoras (Pythagoreans)",
        "Euclid",
        "Aryabhata"
      ],
      answer: 1,
      explanation: "The Pythagoreans in Greece discovered irrational numbers around 400 BC."
    },
    blank: {
      question: "By Pythagoras Theorem, a right triangle with base = 1 and height = 1 has hypotenuse equal to √______.",
      answer: "2",
      hint: "1² + 1² = ?"
    }
  },
  {
    pageNo: 4,
    title: "1.4 Real Numbers (R) & Decimal Expansions (Terminating vs Non-Terminating)",
    originalText: "The collection of all rational numbers and irrational numbers together makes up the set of Real Numbers, denoted by R. Every real number is represented by a unique point on the number line. The decimal expansion of a rational number is either terminating (e.g. 7/8 = 0.875) or non-terminating recurring (e.g. 1/3 = 0.333...). The decimal expansion of an irrational number is non-terminating non-recurring.",
    explanationEn: `🌟 **The Grand Kingdom of Real Numbers ($R$)**

When you dump **Rational Numbers** AND **Irrational Numbers** into one master bag, you get **Real Numbers ($R$)**! 👑

Let's test what happens when you divide fractions into decimals:
1. **Terminating Decimals** (It Stops!): $\\frac{7}{8} = 0.875$ (Remainder becomes $0$).
2. **Non-Terminating Recurring** (It Repeats!): $\\frac{1}{3} = 0.3333\dots = 0.\overline{3}$ (Pattern repeats forever!).
3. **Non-Terminating Non-Recurring** (Pure Chaos!): $\\sqrt{2} = 1.4142135\dots$ $\rightarrow$ **IRRATIONAL**! 🎯`,
    explanationHi: `🌟 **वास्तविक संख्याओं का महासाम्राज्य ($R$)**

जब आप **परिमेय संख्याओं** और **अपरिमेय संख्याओं** दोनों को एक मुख्य थैले में मिलाते हैं, तो आपको **वास्तविक संख्याएँ ($R$)** मिलती हैं! 👑

दशमलव रूप के 3 मुख्य नियम:
1. **शांत दशमलव (Terminating)**: $\\frac{7}{8} = 0.875$ (शेषफल 0 हो जाता है)।
2. **अशांत आवर्ती (Non-Terminating Recurring)**: $\\frac{1}{3} = 0.3333\dots = 0.\overline{3}$ (अंक दोहराता है)।
3. **अशांत अनावर्ती**: $\\sqrt{2} = 1.4142135\dots$ $\rightarrow$ **अपरिमेय संख्या**! 🎯`,
    explanationHinglish: `🌟 **Real Numbers ($R$) Ka Grand Kingdom**

Jab aap **Rational Numbers** aur **Irrational Numbers** dono ko combine karte ho, toh banta hai **Real Numbers ($R$)**! 👑

Decimals ke 3 types super easy hain:
1. **Terminating (Jo Ruk Jaye)**: $\\frac{7}{8} = 0.875$ (Remainder zero!).
2. **Non-Terminating Recurring (Repeat Hone Wala)**: $\\frac{1}{3} = 0.3333\dots = 0.\overline{3}$.
3. **Non-Terminating Non-Recurring (Bina Ruke, Bina Repeat)**: $\\sqrt{2} = 1.4142135\dots$ $\rightarrow$ **Irrational Number**! 🎯`,
    pageImageUrl: "/ncert-pdfs/sample-page.png",
    keyPoints: [
      "Real Numbers (R) = Rational Numbers (Q) + Irrational Numbers (s)",
      "Terminating Decimals: Remainder becomes 0 (e.g. 7/8 = 0.875)",
      "Non-Terminating Recurring: Remainder repeats (e.g. 1/3 = 0.333...)"
    ],
    mcq: {
      question: "What type of decimal expansion does the rational number 1/3 = 0.3333... possess?",
      options: [
        "Terminating",
        "Non-terminating recurring (repeating)",
        "Non-terminating non-recurring",
        "Irrational decimal"
      ],
      answer: 1,
      explanation: "1/3 = 0.333... repeats digit 3 continuously, so it is non-terminating recurring."
    },
    blank: {
      question: "The decimal expansion of an irrational number is non-terminating and non-______.",
      answer: "recurring",
      hint: "It means non-repeating starting with 'r'."
    }
  },
  {
    pageNo: 5,
    title: "1.5 Representing Real Numbers on Number Line using Successive Magnification",
    originalText: "To visualize the position of a real number with a decimal expansion on the number line, we use the process of Successive Magnification. Suppose we want to locate 3.765 on the number line. First, 3.765 lies between 3 and 4. We divide the segment between 3 and 4 into 10 equal parts. Then 3.765 lies between 3.7 and 3.8. Next, we magnify the interval [3.7, 3.8] into 10 equal parts to find 3.76 and 3.77. Finally, we magnify [3.76, 3.77] to pinpoint 3.765 exact location.",
    explanationEn: `🔍 **The Super-Zoom Microscope Method (Successive Magnification)**

Imagine holding a high-tech detective magnifying glass! 🔎

Let's locate **$3.765$** on the number line in 3 simple zoom steps:
1. **Zoom 1**: $3.765$ is between $3$ and $4$. Split $[3, 4]$ into 10 equal marks $\rightarrow$ zoom into $[3.7, 3.8]$.
2. **Zoom 2**: Split $[3.7, 3.8]$ into 10 marks $\rightarrow$ zoom into $[3.76, 3.77]$.
3. **Zoom 3**: Split $[3.76, 3.77]$ into 10 marks $\rightarrow$ BINGO! You pinpoint **$3.765$** with 100% accuracy! 🎯`,
    explanationHi: `🔍 **सुपर-ज़ूम माइक्रोस्कोप विधि (उत्तररोत्तर आवर्धन)**

एक जासूसी आवर्धक लेंस (Magnifying Glass) पकड़ने की कल्पना करें! 🔎

संख्या रेखा पर **$3.765$** को 3 सरल ज़ूम चरणों में खोजें:
1. **ज़ूम 1**: $3.765$, $3$ और $4$ के बीच है। $[3.7, 3.8]$ को ज़ूम करें।
2. **ज़ूम 2**: $[3.76, 3.77]$ अंतराल को ज़ूम करें।
3. **ज़ूम 3**: एकदम सटीक **$3.765$** बिंदु पर पहुंचें! 🎯`,
    explanationHinglish: `🔍 **Super-Zoom Microscope Technique (Successive Magnification)**

Socho aapke paas ek 100x zoom wala magnifying glass hai! 🔎

Decimal **$3.765$** dhoondne ke 3 easy zoom steps:
1. **Zoom Step 1**: $3.765$, $3$ aur $4$ ke beech hai. Zoom into $[3.7, 3.8]$.
2. **Zoom Step 2**: Zoom into $[3.76, 3.77]$.
3. **Zoom Step 3**: Perfect target! Exact **$3.765$** point spot ho gaya! 🎯`,
    pageImageUrl: "/ncert-pdfs/sample-page.png",
    keyPoints: [
      "Successive Magnification zooms into intervals step-by-step",
      "Each interval is divided into 10 equal sub-divisions",
      "Used to locate multi-decimal numbers like 3.765"
    ],
    mcq: {
      question: "In Successive Magnification, into how many equal sub-parts is each interval divided at every zoom step?",
      options: [
        "2 equal parts",
        "5 equal parts",
        "10 equal parts",
        "100 equal parts"
      ],
      answer: 2,
      explanation: "In standard successive magnification on base-10 number line, intervals are divided into 10 equal parts."
    },
    blank: {
      question: "The process of visualizing real numbers by zooming in step-by-step is called Successive ______.",
      answer: "magnification",
      hint: "Starts with 'm' (like zoom)."
    }
  },
  {
    pageNo: 6,
    title: "1.6 Operations on Real Numbers & Rationalising the Denominator",
    originalText: "When we add, subtract, multiply, or divide rational numbers with irrational numbers, the result is irrational! Identities for square roots: 1) √(ab) = √a • √b, 2) √(a/b) = √a / √b, 3) (√a + √b)(√a - √b) = a - b. Rationalising the denominator means eliminating radicals from the denominator by multiplying top and bottom by conjugate. E.g. to rationalise 1/(√2 + 1), multiply by (√2 - 1)/(√2 - 1) = √2 - 1.",
    explanationEn: `🪄 **Algebra Magic & Rationalising the Denominator**

When Rational and Irrational numbers mix:
- $\text{Rational} + \text{Irrational} = \text{Irrational}$ (e.g. $2 + \sqrt{3}$) 🧪
- Identity Trick: $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$

✨ **The Conjugate Magic Spell**:
How to clean a ugly root $\sqrt{2} + 1$ from the bottom of $\\frac{1}{\\sqrt{2} + 1}$?
Multiply numerator and denominator by its conjugate $(\\sqrt{2} - 1)$:
$$\\frac{1}{\\sqrt{2} + 1} \\times \\frac{\\sqrt{2} - 1}{\\sqrt{2} - 1} = \\frac{\\sqrt{2} - 1}{2 - 1} = \\sqrt{2} - 1$$
Boom! The square root at the bottom vanished! That's **Rationalising the Denominator**! 🪄`,
    explanationHi: `🪄 **बीजगणित का जादू और हर का परिमेयकरण**

जब परिमेय और अपरिमेय संख्याएं मिलती हैं:
- $\text{परिमेय} + \text{अपरिमेय} = \text{अपरिमेय}$ (जैसे $2 + \sqrt{3}$) 🧪
- सर्वसमिका: $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$

✨ **कन्ज्युगेट (युग्मी) का जादू**:
नीचे से $\sqrt{2} + 1$ को हटाने के लिए ऊपर-नीचे $(\sqrt{2} - 1)$ से गुणा करें! इसे **हर का परिमेयकरण (Rationalising Denominator)** कहते हैं! 🪄`,
    explanationHinglish: `🪄 **Algebra Magic & Rationalising the Denominator**

1. **Rule**: $\text{Rational} + \text{Irrational} = \text{Irrational}$ (e.g., $2 + \sqrt{3}$). 🧪
2. **Formula**: $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$.

✨ **Conjugate Trick**:
Denomniator me se root $\\sqrt{2} + 1$ kaise hataye? Top aur bottom dono ko $(\\sqrt{2} - 1)$ se multiply karo:
$$\\frac{1}{\\sqrt{2} + 1} \\times \\frac{\\sqrt{2} - 1}{\\sqrt{2} - 1} = \\sqrt{2} - 1$$
Niche wala root chhu-mantar ho gaya! Isse hi kehate hain **Rationalising the Denominator**! 🪄`,
    pageImageUrl: "/ncert-pdfs/sample-page.png",
    keyPoints: [
      "Identities: (√a + √b)(√a - √b) = a - b",
      "Identity: (a + √b)(a - √b) = a² - b",
      "Rationalising denominator removes radical signs from denominator"
    ],
    mcq: {
      question: "What is the simplified value of (√5 + √2)(√5 - √2) using identity (A+B)(A-B) = A² - B²?",
      options: [
        "7",
        "3",
        "10",
        "√3"
      ],
      answer: 1,
      explanation: "(√5)² - (√2)² = 5 - 2 = 3."
    },
    blank: {
      question: "Multiplying top and bottom by conjugate to clear square roots from bottom is called rationalising the ______.",
      answer: "denominator",
      hint: "Bottom part of a fraction."
    }
  },
  {
    pageNo: 7,
    title: "1.7 Laws of Exponents for Real Numbers & Radical Powers",
    originalText: "Let a > 0 be a real number and p, q be rational numbers. Laws of Exponents: 1) a^p • a^q = a^(p+q), 2) (a^p)^q = a^(p•q), 3) a^p / a^q = a^(p-q), 4) a^p • b^p = (ab)^p. Also, a^0 = 1 and a^(-n) = 1 / a^n. For radical powers, a^(1/n) = ⁿ√a.",
    explanationEn: `⚡ **Mastering Exponents & Power Rules (Laws of Exponents)**

Here are the 4 Superpowers of Exponents:
1. **Same Base Multiply $\\rightarrow$ ADD Powers**: $a^p \cdot a^q = a^{p+q}$ ($2^3 \cdot 2^2 = 2^5 = 32$) 🚀
2. **Power of a Power $\rightarrow$ MULTIPLY Powers**: $(a^p)^q = a^{p \cdot q}$ ($(2^3)^2 = 2^6 = 64$) 💥
3. **Power Zero Rule**: Any non-zero number to power $0 = 1$ ($100^0 = 1$, $x^0 = 1$)! 🏆
4. **Fractional Radical Power**: $64^{1/2} = \sqrt{64} = 8$!

💻 *Try using our Interactive CLI Exponent Calculator below to test any power live!*`,
    explanationHi: `⚡ **घातांक के नियम और शक्तियाँ (Laws of Exponents)**

घातांक की 4 मुख्य सुपरपावर:
1. **समान आधार गुणा $\\rightarrow$ घात जोड़ें**: $a^p \cdot a^q = a^{p+q}$ ($2^3 \cdot 2^2 = 2^5 = 32$) 🚀
2. **घात की घात $\\rightarrow$ गुणा करें**: $(a^p)^q = a^{p \cdot q}$ ($(2^3)^2 = 2^6 = 64$) 💥
3. **शून्य घात का नियम**: $a^0 = 1$ (जैसे $100^0 = 1$)! 🏆
4. **भिन्न घात**: $64^{1/2} = \sqrt{64} = 8$!`,
    explanationHinglish: `⚡ **Exponent Power Rules (Laws of Exponents)**

4 Super Power Rules:
1. **Same Base Multiply $\\rightarrow$ Power ADD karo**: $a^p \cdot a^q = a^{p+q}$ ($2^3 \cdot 2^2 = 2^5 = 32$) 🚀
2. **Power of Power $\rightarrow$ Power MULTIPLY karo**: $(a^p)^q = a^{p \cdot q}$ ($(2^3)^2 = 2^6 = 64$) 💥
3. **Power Zero Secret**: Kisi bhi non-zero number ki power 0 = 1 ($100^0 = 1$)! 🏆
4. **Fraction Power**: $64^{1/2} = \sqrt{64} = 8$!

💻 *Niche diye gaye CLI Exponent Calculator me base aur power try karke result check karo!*`,
    pageImageUrl: "/ncert-pdfs/sample-page.png",
    keyPoints: [
      "a^p • a^q = a^(p+q)",
      "(a^p)^q = a^(p•q)",
      "a^p / a^q = a^(p-q)",
      "a^0 = 1 and a^(1/n) = ⁿ√a"
    ],
    mcq: {
      question: "What is the value of 64^(1/2) (or square root of 64)?",
      options: [
        "4",
        "8",
        "16",
        "32"
      ],
      answer: 1,
      explanation: "64^(1/2) = √64 = 8 (since 8 × 8 = 64)."
    },
    blank: {
      question: "According to exponent laws, any non-zero real number raised to power 0 equals ______.",
      answer: "1",
      hint: "a^0 = ?"
    }
  }
];

export default function Maths9Chapter1Page() {
  // Custom CLI Number Systems Calculator component
  const [calcInput, setCalcInput] = useState('64');
  const [calcPower, setCalcPower] = useState('0.5');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  const handleRunCalc = (e: React.FormEvent) => {
    e.preventDefault();
    const base = parseFloat(calcInput);
    const pow = parseFloat(calcPower);
    if (!isNaN(base) && !isNaN(pow)) {
      const res = Math.pow(base, pow);
      setCalcResult(`${base}^(${pow}) = ${res}`);
    }
  };

  const customSimulator = (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
      <div className="flex items-center justify-between border-b border-slate-850 pb-2">
        <div className="flex items-center gap-2">
          <Calculator size={16} className="text-blue-400" />
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Interactive Exponents &amp; Radicals CLI Calculator</h4>
        </div>
        <span className="text-[10px] font-mono text-emerald-400">Laws of Exponents Engine</span>
      </div>

      <form onSubmit={handleRunCalc} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div>
          <label className="text-[10px] font-bold text-slate-400">Base (a):</label>
          <input
            type="number"
            value={calcInput}
            onChange={e => setCalcInput(e.target.value)}
            className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-slate-400">Power / Exponent (p):</label>
          <input
            type="text"
            value={calcPower}
            onChange={e => setCalcPower(e.target.value)}
            className="w-full px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white font-mono"
            placeholder="0.5 or 2"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer"
          >
            Calculate Power
          </button>
        </div>
      </form>

      {calcResult && (
        <div className="p-3 bg-blue-950/40 border border-blue-500/30 rounded-xl text-xs font-mono text-blue-300">
          Result: {calcResult}
        </div>
      )}
    </div>
  );

  // Attach custom simulator to Page 7
  const pagesWithSimulator = LESSON_PAGES.map(p => {
    if (p.pageNo === 7) return { ...p, customSimulator };
    return p;
  });

  return (
    <NcertMasterLessonTemplate
      noteKey="maths-9-chapter-1"
      classLabel="Class 9th"
      subjectName="Mathematics"
      chapterNumber={1}
      chapterTitle="Number Systems"
      subtitle="Natural Numbers, Rational Numbers, Irrational Numbers & Exponent Laws"
      pages={pagesWithSimulator}
      downloadPdfFileName="Class-9-Maths-Chapter-1-Number-Systems.pdf"
    />
  );
}
