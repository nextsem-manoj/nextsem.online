"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles, Check, HelpCircle, AlertCircle, RefreshCw, Award, Code2, Scale, ChevronRight, ChevronLeft, Zap, Menu, X } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import AdSenseBanner from '@/components/AdSenseBanner';

interface PageLesson {
  pageNo: number;
  title: string;
  originalText: string;
  explanationEn: string;
  explanationHi: string;
  explanationHinglish: string;
  example: string;
  mcq: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  };
  blank: {
    question: string;
    answer: string;
    hint: string;
  };
}

const LESSONS: PageLesson[] = [
  {
    pageNo: 81,
    title: "Introduction to Electric Current",
    originalText: "Charges in motion constitute an electric current. Such currents occur naturally in many situations. Lightning is one such phenomenon in which charges flow from the clouds to the earth through the atmosphere, sometimes with disastrous results. The flow of charges in lightning is not steady. But in our everyday life we see many devices where charges flow in a steady manner, like water flowing smoothly in a river. A torch and a cell-driven clock are examples of such devices. In the present chapter, we shall study some of the basic laws concerning steady electric currents. Let us understand the concept of electric current. Imagine a small area held normal to the direction of flow of charges. Both the positive and the negative charges may flow forward and backward across the area. The net amount of charge flowing across the area in the forward direction is the current.",
    explanationEn: "Imagine a crowd of tiny ants running along a branch! 🐜 If the ants are just sitting still, nothing happens. But when they all start marching in the same direction, that march is like an 'electric current'! Sometimes this current happens in a huge flash (like lightning). But in tools like a flashlight, the ants march in a steady, smooth line, just like water flowing down a river.",
    explanationHi: "कल्पना कीजिए कि छोटी चींटियों की भीड़ एक पेड़ की डाली पर दौड़ रही है! 🐜 यदि चींटियां बस स्थिर बैठी हैं, तो कुछ नहीं होता। लेकिन जब वे सभी एक ही दिशा में मार्च करना शुरू करती हैं, तो वह मार्च एक 'विद्युत प्रवाह' (electric current) की तरह होता है! कभी-कभी यह प्रवाह एक विशाल चमक (जैसे बिजली कड़कना) में होता है। लेकिन टॉर्च जैसी चीज़ों में, चींटियाँ एक स्थिर, सुचारू रेखा में मार्च करती हैं, जैसे नदी में पानी सुचारू रूप से बहता है।",
    explanationHinglish: "Imagine karo ki choti choti ants (चींटियां) ek tree ki branch par daud rahi hain! 🐜 Agar ants chup-chap baithi hain, toh kuch nahi hota. Lekin jab sab ki sab ek hi direction me aage badhne lagti hain, toh us march ko hum 'electric current' bolte hain! Kabhi-kabhi ye current bohot tezi se chamakta hai (jaise badal ki bijli). Lekin flashlight me ye ants ek dum steady and smooth line me chalti hain, jaise ek river me paani behta hai.",
    example: "A battery pushes the electric ants to march through a wire and into a lightbulb, making it glow. The battery is like a pump, and the wire is like a pipe.",
    mcq: {
      question: "What constitutes an electric current?",
      options: [
        "Charges at rest",
        "Charges in motion",
        "Neutral atoms",
        "Empty space"
      ],
      answer: 1,
      explanation: "Electric current is defined as the flow of electric charges in motion through a conductor."
    },
    blank: {
      question: "Charges flowing smoothly like a river in a flashlight is called a ______ current.",
      answer: "steady",
      hint: "It means the flow rate does not change over time."
    }
  },
  {
    pageNo: 82,
    title: "Electric Current & SI Unit",
    originalText: "Let us define current across the area in the forward direction. In a given time interval t, let q+ be the net amount of positive charge that flows. Similarly, let q- be the net amount of negative charge flowing across the area. The net amount of charge flowing across the area is q = q+ - q-. For steady current, this is proportional to time t. The quotient I = q/t is defined to be the current across the area. If it turns out to be a negative number, it implies a current in the backward direction. Currents are not always steady, and hence more generally, we define the current as the limit of delta q over delta t. In SI units, the unit of current is ampere. An ampere is typically the order of magnitude of currents in domestic appliances. Our nerves carry currents in microamperes.",
    explanationEn: "To find out how strong a current is, we count how many electric ants cross a line in one second. If 50 ants cross in 10 seconds, that's 5 ants per second! In science, we count these ants in packets called 'Coulombs' and the speed in 'Amperes' (or Amps). Domestic appliances like a toaster use around 5 to 10 Amps, while your brain's nerves send tiny messages using micro-amps!",
    explanationHi: "यह पता लगाने के लिए कि करंट कितना मजबूत है, हम गिनते हैं कि एक सेकंड में कितनी विद्युत चींटियाँ एक रेखा को पार करती हैं। यदि 50 चींटियाँ 10 सेकंड में पार करती हैं, तो यह प्रति सेकंड 5 चींटियाँ हैं! विज्ञान में, हम इन चींटियों को 'कूलम्ब' (Coulomb) नामक पैकेट में गिनते हैं और गति को 'एम्पियर' (Ampere) में मापते हैं। टोस्टर जैसे घरेलू उपकरण लगभग 5 से 10 एम्पियर का उपयोग करते हैं, जबकि हमारे मस्तिष्क की नसें माइक्रो-एम्पियर में छोटे संदेश भेजती हैं!",
    explanationHinglish: "Current kitna strong hai, ye janne ke liye hum dekhte hain ki 1 second me kitni electric ants ek line ko cross karti hain. Agar 10 seconds me 50 ants cross karti hain, toh iska matlab 5 ants per second! Physics me hum in ants ko 'Coulombs' ke packets me count karte hain aur speed ko 'Amperes' (ya short me Amps) bolte hain. Ghar ke appliances jaise toaster 5 se 10 Amps use karte hain, wahi hamare brain ki nerves bohot micro-amps me signals bhejti hain.",
    example: "A phone charger uses about 2 Amperes of current to pump energy into your phone battery every second.",
    mcq: {
      question: "What is the SI unit of electric current?",
      options: [
        "Volt",
        "Ohm",
        "Ampere",
        "Watt"
      ],
      answer: 2,
      explanation: "The SI unit of electric current is the Ampere (A), named after French physicist André-Marie Ampère."
    },
    blank: {
      question: "The formula to calculate steady electric current is I = ______ / t.",
      answer: "q",
      hint: "It stands for the total quantity of electric charge."
    }
  },
  {
    pageNo: 83,
    title: "Electric Currents in Conductors & Ohm's Law",
    originalText: "An electric charge will experience a force if an electric field is applied. If it is free to move, it will thus move contributing to a current. In nature, free charged particles do exist like in the upper strata of the atmosphere called the ionosphere. However, in atoms and molecules, the negatively charged electrons and the positively charged nuclei are bound to each other and are thus not free to move. Bulk matter is made up of many molecules. In some materials, notably metals, some of the electrons are practically free to move within the bulk material. These materials, generally called conductors, develop electric currents in them when an electric field is applied. A basic law regarding flow of currents was discovered by G.S. Ohm in 1828. Let V be the potential difference between the ends of the conductor. Then Ohm's law states that V is proportional to I, or V = RI.",
    explanationEn: "Some materials are like super highways for our electric ants—we call them **conductors** (like copper wires). In these metals, some electrons are free to run around. G.S. Ohm discovered a rule: the harder you push the ants (Voltage, V), the faster they run (Current, I). The highway itself has some speed bumps that try to slow the ants down—this is called **Resistance** (R)!",
    explanationHi: "कुछ सामग्रियां हमारी विद्युत चींटियों के लिए सुपर हाईवे की तरह होती हैं—इन्हें हम सुचालक या कंडक्टर्स (जैसे तांबे के तार) कहते हैं। इन धातुओं में, कुछ इलेक्ट्रॉन इधर-उधर दौड़ने के लिए स्वतंत्र होते हैं। जी.एस. ओम ने एक नियम खोजा: आप चींटियों को जितनी जोर से धकेलेंगे (वोल्टेज, V), वे उतनी ही तेजी से दौड़ेंगी (करंट, I)। इस हाईवे पर कुछ स्पीड ब्रेकर भी होते हैं जो चींटियों को धीमा करने की कोशिश करते हैं—इसे प्रतिरोध या रेजिस्टेंस (R) कहा जाता है!",
    explanationHinglish: "Kuch materials hamari electric ants ke liye super-express highway jaise hote hain—inhain hum conductors (jaise copper wire) bolte hain. In metals me electrons aazad hote hain kahin bhi bhaagne ke liye. G.S. Ohm ne ek simple rule bataya: Tum ants ko jitna zor se dhakeloge (Voltage, V), wo utna hi tezi se bhagengi (Current, I). Lekin is highway par kuch speed-breakers hote hain jo ants ko rokne ki koshish karte hain—ise hum Resistance (R) kehte hain.",
    example: "Pushing water through a hose. Squeezing the hose creates resistance. Turning the tap higher increases the water pressure (voltage), making more water flow (current).",
    mcq: {
      question: "According to Ohm's law, what is the relationship between Voltage (V), Current (I), and Resistance (R)?",
      options: [
        "V = I + R",
        "V = I / R",
        "V = R / I",
        "V = R * I"
      ],
      answer: 3,
      explanation: "Ohm's law states that V = R * I, meaning voltage equals resistance multiplied by current."
    },
    blank: {
      question: "Materials like metals in which electrons are free to move and carry current are called ______.",
      answer: "conductors",
      hint: "They readily transmit heat or electricity."
    }
  },
  {
    pageNo: 84,
    title: "Resistivity & Dimension Dependence",
    originalText: "The constant of proportionality R is called the resistance of the conductor. The SI units of resistance is ohm, and is denoted by the symbol Ω. The resistance R not only depends on the material of the conductor but also on the dimensions of the conductor. Doubling the length of a conductor doubles the resistance. In general, then resistance is proportional to length, R is proportional to l. Halving the area of the cross-section of a conductor doubles the resistance. In general, then the resistance R is inversely proportional to the cross-sectional area A. Combining these, we have R is proportional to l/A. Hence for a given conductor, R = rho * l / A. The constant of proportionality rho is called resistivity.",
    explanationEn: "Imagine walking through a long hallway. If the hallway is twice as long, it takes twice as much effort to get through (longer length = higher resistance). But if the hallway is super wide, it's much easier for everyone to walk through at once (wider area = lower resistance). The texture of the floor (sticky carpet vs slippery ice) is what we call **resistivity** (rho)!",
    explanationHi: "एक लंबे गलियारे से गुजरने की कल्पना करें। यदि गलियारा दोगुना लंबा है, तो पार करने में दोगुना प्रयास करना पड़ता है (लंबाई अधिक = प्रतिरोध अधिक)। लेकिन अगर गलियारा बहुत चौड़ा है, तो हर किसी के लिए एक साथ गुजरना बहुत आसान है (चौड़ाई अधिक = प्रतिरोध कम)। फर्श की बनावट (चिपचिपा कालीन बनाम चिकनी बर्फ) को हम प्रतिरोधकता या रेजिस्टिविटी (rho) कहते हैं!",
    explanationHinglish: "Socho tum ek lambe corridor se guzar rahe ho. Agar corridor double lamba hai, toh cross karne me double mehnat lagegi (more length = more resistance). Lekin agar corridor bohot broad ya chauda hai, toh wahan se nikalna bohot easy ho jayega (more area = less resistance). Aur corridor ka floor kaisa hai (rubber carpet hai ya slippery tile) use hum resistivity (rho) bolte hain.",
    example: "Drinking soda through a straw. A longer straw is harder to sip from. A wider boba straw makes it super easy to drink.",
    mcq: {
      question: "How does the resistance of a wire change if you double its length?",
      options: [
        "It is halved",
        "It remains the same",
        "It is doubled",
        "It becomes zero"
      ],
      answer: 2,
      explanation: "Resistance is directly proportional to the length of the conductor: doubling the length doubles the resistance."
    },
    blank: {
      question: "The constant of proportionality that depends only on the material of the wire and not its size is called ______.",
      answer: "resistivity",
      hint: "It is denoted by the Greek letter rho (ρ)."
    }
  },
  {
    pageNo: 85,
    title: "Drift of Electrons & Collisions",
    originalText: "An electron will suffer collisions with the heavy fixed ions. After collision, it will emerge with the same speed but in random directions. If we consider all the electrons, their average velocity will be zero since their directions are random. Consider now the situation when an electric field is present. Electrons will be accelerated due to this field by a = -eE/m, where -e is the charge and m is the mass of an electron. Consider again the i-th electron at a given time t. This electron would have had its last collision some time before t. Let t_i be the time elapsed after its last collision. If v_i was its velocity immediately after the last collision, then its velocity V_i at time t is V_i = v_i - eE/m * t_i. The average velocity of the electrons is the drift velocity.",
    explanationEn: "Electrons in a wire are like bumper cars 🚗! Even without a battery, they bounce around randomly in every direction, so they don't go anywhere on average (average speed is zero). But when we connect a battery, a force pushes them. They still crash into atoms and bounce around, but they slowly start to 'drift' forward in one direction.",
    explanationHi: "एक तार में इलेक्ट्रॉन बम्पर कारों की तरह होते हैं! बिना बैटरी के भी, वे हर दिशा में बेतरतीब ढंग से टकराते रहते हैं, इसलिए वे औसतन कहीं नहीं पहुँच पाते (औसत गति शून्य होती है)। लेकिन जब हम बैटरी जोड़ते हैं, तो एक बल उन्हें धक्का देता है। वे अभी भी परमाणुओं से टकराते हैं और इधर-उधर उछलते हैं, लेकिन वे धीरे-धीरे एक दिशा में आगे बढ़ना शुरू कर देते हैं।",
    explanationHinglish: "Wire me electrons ek dum bumper cars jaise hote hain! Bina battery ke bhi wo randomly har direction me takrate rehte hain, isliye average me wo kahin nahi pahunch paate (average velocity zero hoti hai). Lekin jaise hi battery lagate hain, ek electric force unhe push karta hai. Wo abhi bhi atoms se takra kar bhatakte hain, par dheere-dheere ek hi direction me aage khisakte (drift) hain.",
    example: "A pinball bouncing off pegs but slowly rolling down the ramp due to gravity. The gravity is the battery, the pegs are the atoms, and the ball is the electron.",
    mcq: {
      question: "What is the average velocity of free electrons in a conductor when no battery is connected?",
      options: [
        "Very high speed",
        "Speed of light",
        "Zero",
        "Negative"
      ],
      answer: 2,
      explanation: "In the absence of an electric field, the random thermal motion of electrons in all directions averages their net velocity to zero."
    },
    blank: {
      question: "The average slow movement of electrons along the wire when a battery is connected is called ______ velocity.",
      answer: "drift",
      hint: "It means to float or blow slowly along a current."
    }
  },
  {
    pageNo: 89,
    title: "Limitations of Ohm's Law",
    originalText: "Although Ohm’s law has been found valid over a large class of materials, there do exist materials and devices used in electric circuits where the proportionality of V and I does not hold. The deviations broadly are one or more of the following types: (a) V ceases to be proportional to I. (b) The relation between V and I depends on the sign of V. In other words, if I is the current for a certain V, then reversing the direction of V keeping its magnitude fixed, does not produce a current of the same magnitude as I in the opposite direction. This happens, for example, in a diode. (c) The relation between V and I is not unique, i.e., there is more than one value of V for the same current I. A material exhibiting such behaviour is GaAs.",
    explanationEn: "Ohm's law is a great rule, but it is not a perfect rule for everything! Some materials are rebels. For example, a **diode** is like a one-way gate: it lets electricity flow in one direction but blocks it if you flip the battery around! Other weird materials like Gallium Arsenide (GaAs) can have the same current flow at two completely different voltages.",
    explanationHi: "ओम का नियम एक बेहतरीन नियम है, लेकिन यह हर चीज़ के लिए एक आदर्श नियम नहीं है! कुछ सामग्रियां विद्रोही होती हैं। उदाहरण के लिए, एक डायोड एक-तरफा गेट की तरह है: यह बिजली को एक दिशा में बहने देता है लेकिन अगर आप बैटरी को उलट देते हैं तो इसे रोक देता है! गैलियम आर्सेनाइड (GaAs) जैसी अन्य अजीब सामग्रियां दो पूरी तरह से अलग वोल्टेज पर समान करंट प्रवाहित कर सकती हैं।",
    explanationHinglish: "Ohm's law bohot badhiya rule hai, par ye sabhi materials par fit nahi baithta! Kuch elements rebels hote hain. Jaise diode ek one-way gate ki tarah hota hai: ye current ko ek hi side jaane deta hai, agar battery ulti kar di toh current block! Wahi GaAs jaise materials me ek hi current value par do different voltage levels mil sakte hain.",
    example: "A check valve in water pipes that only lets water flow forward but shuts tight if water tries to flow backward.",
    mcq: {
      question: "Which of the following devices does NOT follow Ohm's law (non-linear)?",
      options: [
        "Copper wire",
        "Silver coin",
        "Diode",
        "Gold ring"
      ],
      answer: 2,
      explanation: "A diode only allows current to flow in one direction, representing a non-linear V-I relationship that violates Ohm's law."
    },
    blank: {
      question: "A material that shows a non-unique relationship between V and I is ______.",
      answer: "GaAs",
      hint: "It stands for Gallium Arsenide."
    }
  },
  {
    pageNo: 92,
    title: "Electrical Energy & Power",
    originalText: "In a time interval delta t, an amount of charge delta Q = I * delta t travels from A to B. The potential energy of the charge at A was Q * V(A) and similarly at B, it is Q * V(B). Thus, change in its potential energy is delta U = -I * V * delta t. Conservation of total energy would then imply that kinetic energy would change if charges moved without collisions. On the average, charge carriers do not move with acceleration but with a steady drift velocity. This is because of the collisions with ions and atoms during transit. During collisions, the energy gained by the charges is shared with the atoms. The atoms vibrate more vigorously, i.e., the conductor heats up. Thus, an actual conductor dissipates energy as heat. The energy dissipated per unit time is the power dissipated: P = I * V.",
    explanationEn: "When our electric ants run through a wire, they keep crashing into the wire's atoms. Every time they crash, they transfer their energy to the atoms. This makes the atoms vibrate and shake like crazy—which makes the wire hot! This is how electric heaters and toasters work. The rate at which this energy is used up is called **Power** (P = IV).",
    explanationHi: "जब हमारी विद्युत चींटियाँ एक तार से गुजरती हैं, तो वे तार के परमाणुओं से टकराती रहती हैं। हर बार जब वे टकराती हैं, तो वे अपनी ऊर्जा परमाणुओं में स्थानांतरित कर देती हैं। इससे परमाणु पागलों की तरह कंपन करने लगते हैं और हिलने लगते हैं—जिससे तार गर्म हो जाता है! इसी तरह इलेक्ट्रिक हीटर और टोस्टर काम करते हैं। जिस दर पर इस ऊर्जा का उपयोग किया जाता है उसे पावर (P = IV) कहा जाता है।",
    explanationHinglish: "Jab hamari electric ants wire se guzarti hain, toh wo beech-beech me atoms se takrati rehti hain. Har collision (टक्कर) par wo apni energy atoms ko de deti hain. Isse atoms bohot fast vibrate karne lagte hain, jisse wire garam ho jata hai! Hamare heaters aur toaster isi tarah kaam karte hain. Is energy loss ke rate ko hum Power (P = IV) bolte hain.",
    example: "An electric toaster getting red-hot when current flows through its wires, using up electrical energy to toast your bread.",
    mcq: {
      question: "What is the formula to calculate electric power dissipated in a resistor?",
      options: [
        "P = V / I",
        "P = I * V",
        "P = I / V",
        "P = I + V"
      ],
      answer: 1,
      explanation: "Electric power (P) is calculated as the product of current (I) and voltage (V): P = I * V."
    },
    blank: {
      question: "When electrons collide with atoms in a wire, the energy is lost in the form of ______.",
      answer: "heat",
      hint: "It makes things warm or hot."
    }
  },
  {
    pageNo: 97,
    title: "Kirchhoff's Rules",
    originalText: "Two rules, called Kirchhoff’s rules, are very useful for analysis of electric circuits. (a) Junction rule: At any junction, the sum of the currents entering the junction is equal to the sum of currents leaving the junction. The proof of this rule follows from the fact that when currents are steady, there is no accumulation of charges at any junction or at any point in a line. Thus, the total current flowing in must equal the total current flowing out. (b) Loop rule: The algebraic sum of changes in potential around any closed loop involving resistors and cells in the loop is zero. This rule is also obvious, since electric potential is dependent on the location of the point. Thus starting with any point if we come back to the same point, the total change must be zero.",
    explanationEn: "Gustav Kirchhoff made two simple rules for circuits:\n1. **Junction Rule (The Water Pipe rule) 🚰**: If three water pipes meet at a junction, the amount of water flowing in must equal the amount of water flowing out. Electricity cannot just disappear!\n2. **Loop Rule (The Rollercoaster rule) 🎢**: If you ride a rollercoaster and end up back at the starting gate, your total change in height is zero. In a circuit loop, if you go all the way around and return to the start, the total voltage change is zero!",
    explanationHi: "गुस्ताव किरचॉफ ने परिपथों (circuits) के लिए दो सरल नियम बनाए:\n१. जंक्शन नियम (पानी के पाइप का नियम): यदि तीन पानी के पाइप एक जंक्शन पर मिलते हैं, तो बहने वाले पानी की मात्रा बाहर बहने वाले पानी की मात्रा के बराबर होनी चाहिए। बिजली सिर्फ गायब नहीं हो सकती!\n२. लूप नियम (रोलरकोस्टर का नियम): यदि आप रोलरकोस्टर की सवारी करते हैं और वापस शुरूआती गेट पर पहुँचते हैं, तो आपकी ऊंचाई में कुल परिवर्तन शून्य होता है। एक सर्किट लूप में, यदि आप चारों ओर जाते हैं और शुरू में वापस आते हैं, तो कुल वोल्टेज परिवर्तन शून्य होता है!",
    explanationHinglish: "Gustav Kirchhoff ne circuits ke liye do easy rules banaye:\n1. Junction Rule (Paani ka pipe): Agar 3 water pipes ek jagah mil rahe hain, toh jitna paani andar aayega, utna hi bahar jana chahiye. Electricity hawa me gayab nahi ho sakti!\n2. Loop Rule (Rollercoaster wala rule): Agar tum rollercoaster ride lekar wapas starting point par aate ho, toh tumhari height me net change zero hota hai. Waise hi circuit loop me wapas aane par total voltage change zero hoga!",
    example: "If 3 Amps of current enter a wire junction and split into two paths, one path carrying 1 Amp, the other path must carry exactly 2 Amps.",
    mcq: {
      question: "What physical quantity is conserved in Kirchhoff's Junction Rule?",
      options: [
        "Energy",
        "Mass",
        "Charge",
        "Momentum"
      ],
      answer: 2,
      explanation: "Kirchhoff's Junction Rule is based on the conservation of electric charge, stating that charge cannot build up at any junction."
    },
    blank: {
      question: "Kirchhoff's Loop Rule is based on the law of conservation of ______.",
      answer: "energy",
      hint: "It states that this quantity cannot be created or destroyed, only transformed."
    }
  }
];

export default function PhysicsElectricityNotesPage() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:physics-chapter-3';
  const isChapterCompleted = !!completedChapters[progressKey];

  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedMcqOpt, setSelectedMcqOpt] = useState<number | null>(null);
  const [revealMcqExplanation, setRevealMcqExplanation] = useState(false);
  const [revealBlankAnswer, setRevealBlankAnswer] = useState(false);
  const [showBlankHint, setShowBlankHint] = useState(false);
  const [explanationLang, setExplanationLang] = useState<'en' | 'hi' | 'hinglish'>('hinglish');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLesson = LESSONS[activeIdx];

  const handlePageChange = (idx: number) => {
    setActiveIdx(idx);
    setSelectedMcqOpt(null);
    setRevealMcqExplanation(false);
    setRevealBlankAnswer(false);
    setShowBlankHint(false);
    setIsMobileMenuOpen(false); // Auto-close drawer on mobile navigation
  };

  const handleSelectOption = (optIdx: number) => {
    setSelectedMcqOpt(optIdx);
  };

  // Get active explanation text based on selected language tab
  const getActiveExplanation = () => {
    if (explanationLang === 'hi') return activeLesson.explanationHi;
    if (explanationLang === 'en') return activeLesson.explanationEn;
    return activeLesson.explanationHinglish;
  };

  // Left Sidebar Content (Lessons & Exercises)
  const renderSidebarContent = () => (
    <div className="flex flex-col h-full justify-between select-none">
      
      {/* Scrollable list of lessons and exercises */}
      <div className="flex flex-col gap-5 flex-1 min-h-0 overflow-y-auto pr-1">
        
        {/* Header section in drawer */}
        <div className="flex items-center justify-between md:hidden border-b border-slate-850 pb-3">
          <span className="text-xs font-black uppercase text-indigo-300 font-outfit">Unit Explorer</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-white">
            <X size={14} />
          </button>
        </div>

        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block px-1 font-outfit">Select Chapter Lesson</span>
        
        <div className="space-y-1.5 shrink-0">
          {LESSONS.map((lesson, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx)}
              className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-start gap-2.5 cursor-pointer ${
                activeIdx === idx 
                  ? 'bg-indigo-600/10 border-indigo-500 text-indigo-300 font-bold'
                  : 'bg-slate-900/40 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-900/70'
              }`}
            >
              <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono shrink-0 ${
                activeIdx === idx ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-500'
              }`}>
                P{lesson.pageNo}
              </span>
              <span className="truncate">{lesson.title}</span>
            </button>
          ))}
        </div>

        {/* Exercises Section inside Left Sidebar */}
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block px-1 mt-4 font-outfit">Related Exercises</span>
        
        <div className="space-y-4">
          
          {/* MCQ Check inside Sidebar */}
          <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl text-left">
            <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest block mb-1 font-outfit">MCQ Drill</span>
            <h4 className="text-[11px] font-black text-white leading-tight mb-2.5">{activeLesson.mcq.question}</h4>
            
            <div className="space-y-1.5">
              {activeLesson.mcq.options.map((opt, oIdx) => {
                const isChosen = selectedMcqOpt === oIdx;
                const isCorrect = oIdx === activeLesson.mcq.answer;
                let btnStyle = "bg-slate-950/60 border-slate-850 hover:border-slate-800 text-slate-355";
                
                if (selectedMcqOpt !== null) {
                  if (isChosen) {
                    btnStyle = isCorrect 
                      ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold"
                      : "bg-red-500/10 border-red-500/40 text-red-400 font-bold";
                  } else if (isCorrect) {
                    btnStyle = "bg-emerald-500/5 border-emerald-500/20 text-emerald-500/60";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    disabled={selectedMcqOpt !== null}
                    className={`w-full text-left px-2.5 py-1.5 border rounded-lg text-[10px] transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span className="truncate">{opt}</span>
                    {selectedMcqOpt !== null && isChosen && (
                      <span className="text-[9px] shrink-0 ml-1">{isCorrect ? '✓' : '✗'}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedMcqOpt !== null && (
              <div className="mt-2.5 pt-2 border-t border-slate-850">
                <p className="text-[10px] text-slate-400 leading-normal font-sans"><span className="font-bold text-emerald-400">Explanation:</span> {activeLesson.mcq.explanation}</p>
              </div>
            )}
          </div>

          {/* Fill in the Blank inside Sidebar */}
          <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl text-left">
            <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest block mb-1 font-outfit">Fill In The Blank</span>
            <p className="text-[10px] text-slate-350 leading-relaxed mb-2.5">
              {activeLesson.blank.question}
            </p>
            
            <div className="flex gap-1.5 items-center">
              <button
                onClick={() => setRevealBlankAnswer(!revealBlankAnswer)}
                className="flex-1 py-1 bg-slate-950 border border-slate-850 hover:border-slate-800 text-[9px] text-indigo-400 hover:text-white font-bold rounded cursor-pointer text-center"
              >
                {revealBlankAnswer ? activeLesson.blank.answer : 'Answer'}
              </button>
              <button
                onClick={() => setShowBlankHint(!showBlankHint)}
                className="flex-1 py-1 bg-slate-950 border border-slate-850 hover:border-slate-800 text-[9px] text-amber-500 hover:text-amber-400 font-bold rounded cursor-pointer text-center"
              >
                {showBlankHint ? activeLesson.blank.hint : 'Hint'}
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Ad 1 (Left Sidebar bottom) */}
      <div className="pt-4 mt-4 border-t border-slate-850/40 shrink-0">
        <span className="text-[8px] font-black uppercase tracking-wider text-slate-600 block mb-2 text-center">Advertisement</span>
        <div className="border border-slate-850 rounded-xl p-2 bg-slate-950/40 flex justify-center">
          <AdSenseBanner key={`left-ad-${activeIdx}`} />
        </div>
      </div>

    </div>
  );

  return (
    <div className="w-full h-screen bg-[#07070c] text-white flex flex-col justify-between font-sans selection:bg-indigo-500/30 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-indigo-950/5 blur-[130px] pointer-events-none" />

      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-[#07070c]/85 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <div className="flex items-center gap-2">
          {/* Hamburger Menu Icon (Mobile Only) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -ml-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <Menu size={20} />
          </button>
          
          <Link 
            href="/ncert" 
            className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to NCERT Hub</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <BookOpen size={14} className="text-indigo-400" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-indigo-300 font-outfit">Class 12 Physics</span>
        </div>
      </header>

      {/* Main Content Container (Split-Pane viewport layout) */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 py-4 overflow-hidden flex flex-col md:flex-row gap-6 relative">
        
        {/* ── DESKTOP LEFT SIDEBAR ── */}
        <aside className="hidden md:flex w-80 shrink-0 flex-col bg-[#0c0c14]/40 border border-slate-850/30 p-4 rounded-2xl overflow-hidden">
          {renderSidebarContent()}
        </aside>

        {/* ── MOBILE DRAWER OVERLAY SIDEBAR ── */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/65 backdrop-blur-sm z-45 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        <aside 
          className={`fixed inset-y-0 left-0 w-80 bg-[#0c0c14]/98 border-r border-slate-850 p-5 flex flex-col z-50 transform transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {renderSidebarContent()}
        </aside>

        {/* Center Column: Core Quotes & Explanations (Scrollable) */}
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2 min-w-0">
          
          {/* Ad 2 (Top Banner): Responsive horizontal unit */}
          <div className="w-full shrink-0">
            <AdSenseBanner key={`top-ad-${activeIdx}`} />
          </div>

          {/* Chapter title & explanation header */}
          <section className="text-left shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-2 font-outfit">
              <Sparkles size={12} />
              Bilingual Explanation Edition
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none mb-1 font-outfit">
              Current Electricity
            </h1>
            <p className="text-slate-400 text-xs">
              Lesson {activeIdx + 1}: {activeLesson.title}
            </p>
          </section>

          {/* Core study block for active lesson */}
          <div className="space-y-4">
            
            {/* 1. Page Quote Box (10 Sentences from PDF) - Styled with a beautiful Serif font */}
            <div className="bg-[#121217]/50 border border-slate-850 rounded-[24px] p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-slate-900 border-l border-b border-slate-850 rounded-bl-lg text-[8px] font-mono text-slate-500">
                PDF Page {activeLesson.pageNo} Quote
              </div>
              <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block mb-2 font-outfit">10 Sentences from PDF</span>
              <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed font-serif italic select-text border-l-2 border-indigo-500/30 pl-3.5 py-0.5">
                &ldquo;{activeLesson.originalText}&rdquo;
              </p>
            </div>

            {/* 2. Kid-Friendly Explanation Pane (Trilingual Tabs) */}
            <div className="bg-slate-950/70 border border-slate-850 rounded-[24px] overflow-hidden">
              {/* Language Switcher Tabs */}
              <div className="flex border-b border-slate-850 bg-[#0d0d14]/70 p-1.5 gap-1 select-none font-outfit">
                <button
                  onClick={() => setExplanationLang('hinglish')}
                  className={`flex-1 px-4 py-1.5 rounded-lg text-xs font-black tracking-wide transition-all cursor-pointer ${
                    explanationLang === 'hinglish'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  🗣️ Hinglish
                </button>
                <button
                  onClick={() => setExplanationLang('en')}
                  className={`flex-1 px-4 py-1.5 rounded-lg text-xs font-black tracking-wide transition-all cursor-pointer ${
                    explanationLang === 'en'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => setExplanationLang('hi')}
                  className={`flex-1 px-4 py-1.5 rounded-lg text-xs font-black tracking-wide transition-all cursor-pointer ${
                    explanationLang === 'hi'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  🇮🇳 हिंदी
                </button>
              </div>

              {/* Active Explanation Content */}
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🧸</span>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider font-outfit">
                    {explanationLang === 'hi' ? 'कक्षा ६ के स्तर की सरल व्याख्या' : explanationLang === 'en' ? '6th Standard Explanation' : 'Easy Hinglish Explanation'}
                  </span>
                </div>
                <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed font-sans">
                  {getActiveExplanation()}
                </p>
              </div>
            </div>

            {/* 3. Real-life Example */}
            <div className="bg-indigo-950/10 border border-indigo-500/20 rounded-[20px] p-4.5 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs">💡</span>
                <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest font-outfit">Real-Life Example</span>
              </div>
              <p className="text-xs text-slate-350 leading-relaxed font-sans">
                {activeLesson.example}
              </p>
            </div>

          </div>

          {/* Navigation between lessons */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-850 shrink-0 font-outfit">
            <button
              onClick={() => handlePageChange(activeIdx - 1)}
              disabled={activeIdx === 0}
              className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center gap-1"
            >
              <ChevronLeft size={12} /> Prev
            </button>
            <span className="text-xs text-slate-500">
              {activeIdx + 1} / {LESSONS.length}
            </span>
            <button
              onClick={() => handlePageChange(activeIdx + 1)}
              disabled={activeIdx === LESSONS.length - 1}
              className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center gap-1"
            >
              Next <ChevronRight size={12} />
            </button>
          </div>

          {/* Progress Completion Section */}
          <div className="bg-slate-950/80 border border-slate-850 rounded-[24px] p-5 text-center shrink-0 font-outfit">
            <span className="text-[10px] text-slate-450 block mb-2">Marking this completed updates your homepage progress stats!</span>
            {isChapterCompleted ? (
              <button
                onClick={() => markIncomplete(progressKey)}
                className="px-5 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-550 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <Check size={12} /> Unit 3 Completed
              </button>
            ) : (
              <button
                onClick={() => markCompleted(progressKey)}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                Mark Unit Completed
              </button>
            )}
          </div>
        </div>

        {/* Ad 3 (Right Sidebar): Compliant vertical ad (Exactly 3 Ads total per page view) */}
        <aside className="hidden md:flex w-80 shrink-0 flex-col gap-4 pl-1 bg-[#0c0c14]/40 border border-slate-850/30 p-4 rounded-2xl select-none justify-between">
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 text-center block pb-2 border-b border-slate-850/50 font-outfit">Sponsored Advertisement</span>
          
          <div className="border border-slate-850/50 rounded-xl p-3.5 bg-slate-950/40 flex-1 flex items-center justify-center text-center my-4 min-h-[400px]">
            <AdSenseBanner key={`right-ad-${activeIdx}`} />
          </div>
        </aside>

      </main>

      {/* Footer copyright */}
      <footer className="w-full py-3.5 text-center text-[9px] text-slate-700 border-t border-white/5 select-none shrink-0 font-outfit">
        © 2026 Nextsem Academy · NCERT Study Companion
      </footer>
    </div>
  );
}
