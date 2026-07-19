"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Sparkles, Check, HelpCircle, ChevronRight, ChevronLeft } from 'lucide-react';
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
    question: { english: string; hindi: string; hinglish: string };
    options: { english: string; hindi: string; hinglish: string }[];
    answer: number;
    explanation: { english: string; hindi: string; hinglish: string };
  };
  blank: {
    question: { english: string; hindi: string; hinglish: string };
    answer: { english: string; hindi: string; hinglish: string };
    hint: { english: string; hindi: string; hinglish: string };
  };
}

const LESSONS: PageLesson[] = [
  {
    "pageNo": 115,
    "title": "Introduction to Medieval Travellers",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 115: Women and men travelled for trade, jobs, pilgrimage, or adventure. They recorded customs, languages, and beliefs which differed from their homelands. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 115 • Introduction to Medieval Travellers\n\nWhy travellers visited India and how they recorded their observations.\n\n**Key Syllabus Concepts:**\n* Women and men travelled for trade, jobs, pilgrimage, or adventure\n* They recorded customs, languages, and beliefs which differed from their homelands.\n\n* **Story Analogy**: Imagine visiting a foreign country and writing a diary of all the strange foods and houses you see. That diary is a travelogue!",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 115 • मध्यकालीन यात्रियों का परिचय\n\n**मुख्य अवधारणा:**\nयात्री भारत क्यों आए और उन्होंने अपने अवलोकनों को कैसे दर्ज किया।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* पुरुषों और महिलाओं ने व्यापार, नौकरी, तीर्थयात्रा या रोमांच के लिए यात्रा की। उन्होंने ऐसी प्रथाओं, भाषाओं और विश्वासों को दर्ज किया जो उनके गृह देशों से बिल्कुल अलग थे।\n\n* **कहानी सादृश्य**: कल्पना कीजिए कि आप किसी बाहरी देश की यात्रा पर जाते हैं और वहां दिखने वाले अनोखे खाने और घरों की डायरी लिखते हैं। वही डायरी यात्रा वृत्तांत कहलाती है!",
    "explanationHinglish": "### 📖 NCERT Page 115 • Medieval Travellers ka Introduction\n\nIs page par hum seekhte hain: **Travellers India kyu aaye aur unhone observations kaise record kiya.**\n\n**Yaad rakhne wali baatein:**\n* Log trade, jobs, pilgrimage aur adventure ke liye lambi yatra karte the\n* Unhone aise customs, languages aur beliefs ko record kiya jo unke home country se alag the.\n\n* **Story Analogy**: Socho agar aap kisi foreign country jaate ho aur wahan ke unique khane aur houses ke baare me diary likhte ho. Us diary ko travelogue kehte hain!",
    "example": "For example: Women and men travelled for trade, jobs, pilgrimage, or adventure. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "Which of the following was a primary reason for medieval travel?",
        "hindi": "निम्नलिखित में से कौन सा मध्यकालीन यात्रा का एक प्राथमिक कारण था?",
        "hinglish": "Inme se kaunsa medieval travel ka primary reason tha?"
      },
      "options": [
        {
          "english": "Adventure and job searches",
          "hindi": "साहसिक कार्य और नौकरी की खोज",
          "hinglish": "Adventure aur job search"
        },
        {
          "english": "Watching television",
          "hindi": "टेलीविज़न देखना",
          "hinglish": "TV dekhna"
        },
        {
          "english": "Online banking",
          "hindi": "ऑनलाइन बैंकिंग",
          "hinglish": "Online banking"
        },
        {
          "english": "Modern tourism",
          "hindi": "आधुनिक पर्यटन",
          "hinglish": "Modern tourism"
        }
      ],
      "answer": 0,
      "explanation": {
        "english": "In medieval times, people travelled long distances to find work, trade goods, escape natural disasters, or seek adventure.",
        "hindi": "मध्यकाल में लोग काम की तलाश, व्यापार, प्राकृतिक आपदाओं से बचने या रोमांच के लिए लंबी दूरी की यात्रा करते थे।",
        "hinglish": "Medieval times me log job search, trade, natural disasters se bachne ya adventure ke liye travel karte the."
      }
    },
    "blank": {
      "question": {
        "english": "Medieval accounts were written by travellers who found Indian customs ______ from their home countries.",
        "hindi": "मध्यकालीन विवरण उन यात्रियों द्वारा लिखे गए थे जिन्होंने भारतीय रीति-रिवाजों को अपने गृह देशों से ______ पाया।",
        "hinglish": "Medieval accounts un travellers ne likhe jinhone Indian customs ko apne desh se ______ paya."
      },
      "answer": {
        "english": "different",
        "hindi": "अलग",
        "hinglish": "different"
      },
      "hint": {
        "english": "Not the same.",
        "hindi": "समान नहीं।",
        "hinglish": "Same nahi."
      }
    }
  },
  {
    "pageNo": 116,
    "title": "Al-Biruni & His Journey to India",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 116: Al-Biruni was born in 973 in Khwarizm (modern Uzbekistan). In 1017, Sultan Mahmud of Ghazni invaded and brought him back as a hostage. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 116 • Al-Biruni & His Journey to India\n\nAl-Biruni's background and his capture by Mahmud of Ghazni.\n\n**Key Syllabus Concepts:**\n* Al-Biruni was born in 973 in Khwarizm (modern Uzbekistan)\n* In 1017, Sultan Mahmud of Ghazni invaded and brought him back as a hostage.\n\n* **Story Analogy**: Think of a gifted student forced to relocate to a new town, who then decides to study and write a masterpiece about that new place.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 116 • अल-बिरूनी और उनकी भारत यात्रा\n\n**मुख्य अवधारणा:**\nअल-बिरूनी की पृष्ठभूमि और महमूद गजनवी द्वारा उन्हें बंदी बनाना।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* अल-बिरूनी का जन्म 973 में ख्वारिज्म (आधुनिक उजबेकिस्तान) में हुआ था। 1017 में, गजनी के सुल्तान महमूद ने आक्रमण किया और उन्हें एक बंधक के रूप में गजनी ले गया।\n\n* **कहानी सादृश्य**: एक ऐसे प्रतिभाशाली छात्र के बारे में सोचें जिसे नए शहर में रहने के लिए मजबूर किया गया हो, और फिर वह उस नए स्थान के बारे में अध्ययन करने और एक उत्कृष्ट कृति लिखने का निर्णय लेता है।",
    "explanationHinglish": "### 📖 NCERT Page 116 • Al-Biruni aur unki India yatra\n\nIs page par hum seekhte hain: **Al-Biruni ka background aur Mahmud Ghazni ke dwara unhe hostage banana.**\n\n**Yaad rakhne wali baatein:**\n* Al-Biruni 973 me Khwarizm (modern Uzbekistan) me paida hue the\n* 1017 me Ghazni ke Sultan Mahmud ne wahan par attack kiya aur unhe hostage banakar Ghazni le aaye.\n\n* **Story Analogy**: Uss talented student ki tarah socho jise zabardasti nayi jagah laya gaya, par usne nirash hone ki bajay uss nayi jagah par research shuru kar di.",
    "example": "For example: Al-Biruni was born in 973 in Khwarizm (modern Uzbekistan). This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "In which modern country was Al-Biruni's birthplace Khwarizm located?",
        "hindi": "अल-बिरूनी का जन्मस्थान ख्वारिज्म किस आधुनिक देश में स्थित था?",
        "hinglish": "Al-Biruni ka birthplace Khwarizm kis modern country me located tha?"
      },
      "options": [
        {
          "english": "Egypt",
          "hindi": "मिस्र",
          "hinglish": "Egypt"
        },
        {
          "english": "Uzbekistan",
          "hindi": "उजबेकिस्तान",
          "hinglish": "Uzbekistan"
        },
        {
          "english": "Morocco",
          "hindi": "मोरक्को",
          "hinglish": "Morocco"
        },
        {
          "english": "France",
          "hindi": "फ्रांस",
          "hinglish": "France"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Khwarizm was an important center of learning located in modern-day Uzbekistan.",
        "hindi": "ख्वारिज्म आधुनिक उजबेकिस्तान में स्थित शिक्षा का एक महत्वपूर्ण केंद्र था।",
        "hinglish": "Khwarizm modern Uzbekistan me education ka ek bohot bada center tha."
      }
    },
    "blank": {
      "question": {
        "english": "Al-Biruni was brought to Ghazni as a hostage of Sultan ______.",
        "hindi": "अल-बिरूनी को सुल्तान ______ के बंधक के रूप में गजनी लाया गया था।",
        "hinglish": "Al-Biruni ko Sultan ______ ke hostage ke roop me Ghazni laya gaya tha."
      },
      "answer": {
        "english": "Mahmud",
        "hindi": "महमूद",
        "hinglish": "Mahmud"
      },
      "hint": {
        "english": "The ruler of Ghazni who invaded Khwarizm.",
        "hindi": "गजनी का शासक जिसने ख्वारिज्म पर आक्रमण किया था।",
        "hinglish": "Ghazni ka ruler jisne Khwarizm par attack kiya."
      }
    }
  },
  {
    "pageNo": 117,
    "title": "Kitab-ul-Hind: The Arabic Masterpiece",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 117: Written in Arabic, it has 80 chapters covering religion, philosophy, festivals, astronomy, manners, laws, and metrology. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 117 • Kitab-ul-Hind: The Arabic Masterpiece\n\nStructure and style of Al-Biruni's Kitab-ul-Hind.\n\n**Key Syllabus Concepts:**\n* Written in Arabic, it has 80 chapters covering religion, philosophy, festivals, astronomy, manners, laws, and metrology.\n\n* **Story Analogy**: A massive encyclopedia about a country, systematically starting every chapter with a question and answering it using comparisons.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 117 • किताब-उल-हिंद: अरबी की उत्कृष्ट कृति\n\n**मुख्य अवधारणा:**\nअल-बिरूनी की किताब-उल-हिंद की संरचना और शैली।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* अरबी में लिखी गई इस पुस्तक में धर्म, दर्शन, त्योहारों, खगोल विज्ञान, रीति-रिवाजों, कानूनों और माप पद्धति को शामिल करने वाले 80 अध्याय हैं।\n\n* **कहानी सादृश्य**: एक देश के बारे में एक विशाल विश्वकोश, जो व्यवस्थित रूप से प्रत्येक अध्याय की शुरुआत एक प्रश्न से करता है और तुलनाओं का उपयोग करके उसका उत्तर देता है।",
    "explanationHinglish": "### 📖 NCERT Page 117 • Kitab-ul-Hind: Arabic Masterpiece\n\nIs page par hum seekhte hain: **Al-Biruni ki book Kitab-ul-Hind ka structure aur style.**\n\n**Yaad rakhne wali baatein:**\n* Ye book Arabic me likhi gayi hai aur isme total 80 chapters hain jo Indian religion, customs, astronomy, laws aur weights par base hain.\n\n* **Story Analogy**: Ek systematic book jo har chapter ko ek question se start karti hai aur different comparisons ke sath explain karti hai.",
    "example": "For example: Written in Arabic, it has 80 chapters covering religion, philosophy, festivals, astronomy, manners, laws, and metrology. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "In which language was 'Kitab-ul-Hind' originally written?",
        "hindi": "मूल रूप से 'किताब-उल-हिंद' किस भाषा में लिखी गई थी?",
        "hinglish": "'Kitab-ul-Hind' originally kis language me likhi gayi thi?"
      },
      "options": [
        {
          "english": "Persian",
          "hindi": "फारसी",
          "hinglish": "Persian"
        },
        {
          "english": "Sanskrit",
          "hindi": "संस्कृत",
          "hinglish": "Sanskrit"
        },
        {
          "english": "Arabic",
          "hindi": "अरबी",
          "hinglish": "Arabic"
        },
        {
          "english": "Turkish",
          "hindi": "तुर्की",
          "hinglish": "Turkish"
        }
      ],
      "answer": 2,
      "explanation": {
        "english": "Al-Biruni wrote Kitab-ul-Hind in simple Arabic, making it accessible to Islamic scholars.",
        "hindi": "अल-बिरूनी ने किताब-उल-हिंद को सरल अरबी में लिखा, जिससे यह इस्लामी विद्वानों के लिए सुलभ हो गई।",
        "hinglish": "Al-Biruni ne Kitab-ul-Hind ko simple Arabic language me likha tha."
      }
    },
    "blank": {
      "question": {
        "english": "Kitab-ul-Hind is divided into ______ chapters.",
        "hindi": "किताब-उल-हिंद को ______ अध्यायों में विभाजित किया गया है।",
        "hinglish": "Kitab-ul-Hind ko ______ chapters me divide kiya gaya hai."
      },
      "answer": {
        "english": "80",
        "hindi": "80",
        "hinglish": "80"
      },
      "hint": {
        "english": "A number between 75 and 85.",
        "hindi": "75 और 85 के बीच की एक संख्या।",
        "hinglish": "75 aur 85 ke beech ka number."
      }
    }
  },
  {
    "pageNo": 118,
    "title": "Al-Biruni's Sanskrit Studies",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 118: Al-Biruni spent years studying Sanskrit with Brahmins. He translated Sanskrit works on grammar and astronomy into Arabic. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 118 • Al-Biruni's Sanskrit Studies\n\nHow Al-Biruni learned Sanskrit and translated Indian texts.\n\n**Key Syllabus Concepts:**\n* Al-Biruni spent years studying Sanskrit with Brahmins\n* He translated Sanskrit works on grammar and astronomy into Arabic.\n\n* **Story Analogy**: Imagine a foreign scholar living with local priests, learning their sacred language just to read their original philosophy books.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 118 • अल-बिरूनी का संस्कृत अध्ययन\n\n**मुख्य अवधारणा:**\nअल-बिरूनी ने संस्कृत कैसे सीखी और भारतीय ग्रंथों का अनुवाद कैसे किया।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* अल-बिरूनी ने ब्राह्मणों के साथ संस्कृत का अध्ययन करने में वर्षों बिताए। उन्होंने व्याकरण और खगोल विज्ञान पर संस्कृत कृतियों का अरबी में अनुवाद किया।\n\n* **कहानी सादृश्य**: कल्पना कीजिए कि एक विदेशी विद्वान स्थानीय पुजारियों के साथ रह रहा है, केवल उनकी मूल दर्शन पुस्तकों को पढ़ने के लिए उनकी पवित्र भाषा सीख रहा है।",
    "explanationHinglish": "### 📖 NCERT Page 118 • Al-Biruni ki Sanskrit studies\n\nIs page par hum seekhte hain: **Al-Biruni ne Sanskrit kaise seekhi aur texts translate kaise kiye.**\n\n**Yaad rakhne wali baatein:**\n* Al-Biruni ne kai saal Brahmins ke sath rehkar Sanskrit seekhi\n* Unhone grammar aur astronomy ki Sanskrit books ko Arabic me translate kiya.\n\n* **Story Analogy**: Ek foreign researcher local priests ke sath rehkar unki language seekh raha hai taaki unke religious texts directly padh sake.",
    "example": "For example: Al-Biruni spent years studying Sanskrit with Brahmins. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "With whom did Al-Biruni study Sanskrit in India?",
        "hindi": "अल-बिरूनी ने भारत में किसके साथ संस्कृत का अध्ययन किया?",
        "hinglish": "Al-Biruni ne India me kiske sath Sanskrit study ki?"
      },
      "options": [
        {
          "english": "Mughal kings",
          "hindi": "मुगल राजाओं",
          "hinglish": "Mughal kings"
        },
        {
          "english": "Brahmin priests and scholars",
          "hindi": "ब्राह्मण पुजारियों और विद्वानों",
          "hinglish": "Brahmin priests aur scholars"
        },
        {
          "english": "Moroccan merchants",
          "hindi": "मोरक्को के व्यापारियों",
          "hinglish": "Moroccan merchants"
        },
        {
          "english": "French soldiers",
          "hindi": "फ्रांसीसी सैनिकों",
          "hinglish": "French soldiers"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Al-Biruni collaborated closely with Brahmin scholars to read religious and philosophical texts.",
        "hindi": "अल-बिरूनी ने धार्मिक और दार्शनिक ग्रंथों को पढ़ने के लिए ब्राह्मण विद्वानों के साथ मिलकर काम किया।",
        "hinglish": "Al-Biruni ne Hindu texts aur custom studies ke liye Brahmin pandits ke sath study ki thi."
      }
    },
    "blank": {
      "question": {
        "english": "Al-Biruni translated Sanskrit astronomical works into ______.",
        "hindi": "अल-बिरूनी ने संस्कृत खगोलशास्त्रीय कार्यों का अनुवाद ______ में किया।",
        "hinglish": "Al-Biruni ne Sanskrit astronomical books ka translation ______ me kiya."
      },
      "answer": {
        "english": "Arabic",
        "hindi": "अरबी",
        "hinglish": "Arabic"
      },
      "hint": {
        "english": "His native language of scholarly writing.",
        "hindi": "उनकी पानाडित्यपूर्ण लेखन की मूल भाषा।",
        "hinglish": "Unki main scholarly language."
      }
    }
  },
  {
    "pageNo": 119,
    "title": "Barriers to Understanding Indian Society",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 119: First barrier was language (Sanskrit differed from Arabic). Second was religious difference. Third was insularity of local Brahmins. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 119 • Barriers to Understanding Indian Society\n\nThree main barriers identified by Al-Biruni.\n\n**Key Syllabus Concepts:**\n* First barrier was language (Sanskrit differed from Arabic)\n* Second was religious difference\n* Third was insularity of local Brahmins.\n\n* **Story Analogy**: Just like trying to explain color to someone who has never seen it, translating complex Sanskrit ideas into Arabic was incredibly difficult.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 119 • भारतीय समाज को समझने में बाधाएं\n\n**मुख्य अवधारणा:**\nअल-बिरूनी द्वारा पहचानी गई तीन मुख्य बाधाएं।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* पहला अवरोध भाषा थी (संस्कृत अरबी से बहुत भिन्न थी)। दूसरा धार्मिक अंतर था। तीसरा स्थानीय ब्राह्मणों का एकाकीपन या संकीर्ण दृष्टिकोण था।\n\n* **कहानी सादृश्य**: जिस तरह किसी ऐसे व्यक्ति को रंग समझाने की कोशिश करना जिसने उसे कभी नहीं देखा हो, जटिल संस्कृत विचारों का अरबी में अनुवाद करना बेहद मुश्किल था।",
    "explanationHinglish": "### 📖 NCERT Page 119 • Indian Society samajhne me Barriers\n\nIs page par hum seekhte hain: **Al-Biruni ke according study me aane wale three main hurdles.**\n\n**Yaad rakhne wali baatein:**\n* Pehla barrier language (Sanskrit) tha\n* Dusra religious system tha, aur teesra local logo ki insularity (apne me hi rehna) thi.\n\n* **Story Analogy**: Jaise bina internet ke purani terms ko new translation me fit karna mushkil hota hai, waise hi Sanskrit ideas ko Arabic me change karna bohot hard tha.",
    "example": "For example: First barrier was language (Sanskrit differed from Arabic). This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "Which of the following was the linguistic barrier identified by Al-Biruni?",
        "hindi": "निम्नलिखित में से कौन सी भाषाई बाधा अल-बिरूनी द्वारा पहचानी गई थी?",
        "hinglish": "Al-Biruni ne language barrier ke baare me kya bataya?"
      },
      "options": [
        {
          "english": "Sanskrit was easy to translate",
          "hindi": "संस्कृत का अनुवाद करना आसान था",
          "hinglish": "Sanskrit translate karna easy tha"
        },
        {
          "english": "Sanskrit words had wide ranges of meanings differing from Arabic",
          "hindi": "संस्कृत शब्दों के अर्थों का व्यापक दायरा अरबी से भिन्न था",
          "hinglish": "Sanskrit words ke meanings Arabic se bohot different and wide the"
        },
        {
          "english": "No one in India spoke Sanskrit",
          "hindi": "भारत में कोई भी संस्कृत नहीं बोलता था",
          "hinglish": "India me koi Sanskrit nahi bolta tha"
        },
        {
          "english": "Sanskrit had no alphabet",
          "hindi": "संस्कृत की कोई वर्णमाला नहीं थी",
          "hinglish": "Sanskrit ki koi script nahi thi"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Sanskrit grammar and semantic concepts were highly abstract and differed greatly from Arabic.",
        "hindi": "संस्कृत व्याकरण और वैचारिक अवधारणाएँ बहुत जटिल थीं और अरबी से काफी भिन्न थीं।",
        "hinglish": "Sanskrit language ke sentence structure aur conceptual meanings Arabic se bilkul alag the."
      }
    },
    "blank": {
      "question": {
        "english": "The third barrier identified by Al-Biruni was the ______ of the local population.",
        "hindi": "अल-बिरूनी द्वारा पहचानी गई तीसरी बाधा स्थानीय आबादी का ______ था।",
        "hinglish": "Al-Biruni ke according teesra barrier local population ki ______ thi."
      },
      "answer": {
        "english": "insularity",
        "hindi": "एकाकीपन",
        "hinglish": "insularity"
      },
      "hint": {
        "english": "Isolation or self-centered attitude towards outsiders.",
        "hindi": "बाहरी लोगों के प्रति अलगाव या आत्मकेंद्रित रवैया।",
        "hinglish": "Bahar ke logo se apne customs share na karne ki aadat."
      }
    }
  },
  {
    "pageNo": 120,
    "title": "Ibn Battuta: The Globe-Trotter",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 120: Born in Tangier (Morocco), Ibn Battuta believed books couldn't replace travel. He wrote Rihla, describing African and Asian societies. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 120 • Ibn Battuta: The Globe-Trotter\n\nIbn Battuta's origin, travel goals, and travelogue Rihla.\n\n**Key Syllabus Concepts:**\n* Born in Tangier (Morocco), Ibn Battuta believed books couldn't replace travel\n* He wrote Rihla, describing African and Asian societies.\n\n* **Story Analogy**: Think of an old-school explorer packing a bag and leaving home for 30 years, visiting over 40 countries just to experience new cultures.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 120 • इब्न बतूता: दुनिया की सैर करने वाला\n\n**मुख्य अवधारणा:**\nइब्न बतूता का मूल स्थान, यात्रा लक्ष्य और उनका यात्रा वृत्तांत 'रिहला'।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* टैंजियर (मोरक्को) में जन्मे इब्न बतूता का मानना था कि किताबें यात्रा का स्थान नहीं ले सकतीं। उन्होंने अफ्रीकी और एशियाई समाजों का वर्णन करते हुए 'रिहला' लिखी।\n\n* **कहानी सादृश्य**: एक पुराने जमाने के खोजकर्ता के बारे में सोचें जो एक बैग पैक करता है और 30 साल के लिए घर छोड़ देता है, सिर्फ नई संस्कृतियों का अनुभव करने के लिए 40 से अधिक देशों का दौरा करता है।",
    "explanationHinglish": "### 📖 NCERT Page 120 • Ibn Battuta: The Globe-Trotter\n\nIs page par hum seekhte hain: **Ibn Battuta ka origin, travel goals aur unki book Rihla.**\n\n**Yaad rakhne wali baatein:**\n* Tangier (Morocco) me paida hue Ibn Battuta ka manna tha ki books se zyada knowledge real travel se milti hai\n* Unhone Rihla book likhi.\n\n* **Story Analogy**: Ek aise tourist ki tarah socho jo 30 saal tak ghar nahi gaya aur lagatar 40 se zyada countries ghoomta raha.",
    "example": "For example: Born in Tangier (Morocco), Ibn Battuta believed books couldn't replace travel. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "From which country did Ibn Battuta begin his travels?",
        "hindi": "इब्न बतूता ने अपनी यात्रा किस देश से शुरू की थी?",
        "hinglish": "Ibn Battuta ne apni travels kis country se start ki thi?"
      },
      "options": [
        {
          "english": "Uzbekistan",
          "hindi": "उजबेकिस्तान",
          "hinglish": "Uzbekistan"
        },
        {
          "english": "Morocco",
          "hindi": "मोरक्को",
          "hinglish": "Morocco"
        },
        {
          "english": "France",
          "hindi": "फ्रांस",
          "hinglish": "France"
        },
        {
          "english": "Spain",
          "hindi": "स्पेन",
          "hinglish": "Spain"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Ibn Battuta was born in Tangier, Morocco, and set out on a pilgrimage to Mecca before exploring Asia.",
        "hindi": "इब्न बतूता का जन्म टैंजियर, मोरक्को में हुआ था, और उन्होंने एशिया की खोज करने से पहले मक्का की तीर्थयात्रा शुरू की थी।",
        "hinglish": "Ibn Battuta Tangier, Morocco ke rehne wale the."
      }
    },
    "blank": {
      "question": {
        "english": "Ibn Battuta's famous Arabic travelogue is titled ______.",
        "hindi": "इब्न बतूता के प्रसिद्ध अरबी यात्रा वृत्तांत का शीर्षक ______ है।",
        "hinglish": "Ibn Battuta ke famous Arabic travelogue ka naam ______ hai."
      },
      "answer": {
        "english": "Rihla",
        "hindi": "रिहला",
        "hinglish": "Rihla"
      },
      "hint": {
        "english": "Translates to 'The Journey'.",
        "hindi": "इसका अरबी में अनुवाद 'यात्रा' होता है।",
        "hinglish": "Arabic word jiska translation 'The Journey' hota hai."
      }
    }
  },
  {
    "pageNo": 121,
    "title": "Ibn Battuta in Delhi Sultanate",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 121: He reached Sindh in 1333. Sultan Muhammad bin Tughlaq, impressed by his scholarship, appointed him Qazi (judge) of Delhi. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 121 • Ibn Battuta in Delhi Sultanate\n\nHis arrival in Sindh and meeting Sultan Muhammad bin Tughlaq.\n\n**Key Syllabus Concepts:**\n* He reached Sindh in 1333\n* Sultan Muhammad bin Tughlaq, impressed by his scholarship, appointed him Qazi (judge) of Delhi.\n\n* **Story Analogy**: Like a foreign university graduate landing a prestigious government job immediately after arriving in a new capital city.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 121 • दिल्ली सल्तनत में इब्न बतूता\n\n**मुख्य अवधारणा:**\nसिंध में उनका आगमन और सुल्तान मोहम्मद बिन तुगलक से मुलाकात।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* वह 1333 में सिंध पहुंचे। सुल्तान मोहम्मद बिन तुगलक ने उनकी विद्वत्ता से प्रभावित होकर उन्हें दिल्ली का काजी (न्यायाधीश) नियुक्त किया।\n\n* **कहानी सादृश्य**: जैसे कोई विदेशी विश्वविद्यालय का स्नातक किसी नए राजधानी शहर में पहुंचते ही तुरंत एक प्रतिष्ठित सरकारी नौकरी पा लेता है।",
    "explanationHinglish": "### 📖 NCERT Page 121 • Ibn Battuta Delhi Sultanate me\n\nIs page par hum seekhte hain: **Sindh me arrival aur Sultan Muhammad bin Tughlaq se mulakat.**\n\n**Yaad rakhne wali baatein:**\n* Ibn Battuta 1333 me Sindh pahunche\n* Sultan Muhammad bin Tughlaq unki education aur knowledge se impress hue aur unhe Delhi ka Qazi bana diya.\n\n* **Story Analogy**: Jaise koi highly educated foreigner kisi nayi country me aate hi seedhe high-level judge ban jaye.",
    "example": "For example: He reached Sindh in 1333. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "Which Delhi Sultan appointed Ibn Battuta as the Qazi of Delhi?",
        "hindi": "किस दिल्ली सुल्तान ने इब्न बतूता को दिल्ली का काजी नियुक्त किया था?",
        "hinglish": "Kis Delhi Sultan ne Ibn Battuta ko Delhi ka Qazi appoint kiya?"
      },
      "options": [
        {
          "english": "Alauddin Khalji",
          "hindi": "अलाउद्दीन खिलजी",
          "hinglish": "Alauddin Khalji"
        },
        {
          "english": "Muhammad bin Tughlaq",
          "hindi": "मोहम्मद बिन तुगलक",
          "hinglish": "Muhammad bin Tughlaq"
        },
        {
          "english": "Firoz Shah Tughlaq",
          "hindi": "फ़िरोज़ शाह तुगलक",
          "hinglish": "Firoz Shah Tughlaq"
        },
        {
          "english": "Sher Shah Suri",
          "hindi": "शेरशाह सूरी",
          "hinglish": "Sher Shah Suri"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Sultan Muhammad bin Tughlaq welcomed foreign scholars and made Ibn Battuta the Qazi of Delhi.",
        "hindi": "सुल्तान मोहम्मद बिन तुगलक ने विदेशी विद्वानों का स्वागत किया और इब्न बतूता को दिल्ली का काजी बनाया।",
        "hinglish": "Muhammad bin Tughlaq foreign scholars ke respect karte the aur unhe post dete the."
      }
    },
    "blank": {
      "question": {
        "english": "Ibn Battuta was appointed as the ______ (judge) of Delhi.",
        "hindi": "इब्न बतूता को दिल्ली के ______ (न्यायाधीश) के रूप में नियुक्त किया गया था।",
        "hinglish": "Ibn Battuta ko Delhi ka ______ (judge) banaya gaya tha."
      },
      "answer": {
        "english": "Qazi",
        "hindi": "काजी",
        "hinglish": "Qazi"
      },
      "hint": {
        "english": "A court judge in Islamic law.",
        "hindi": "इस्लामी कानून में अदालत का न्यायाधीश।",
        "hinglish": "Islamic court judge."
      }
    }
  },
  {
    "pageNo": 122,
    "title": "Ibn Battuta's Mission to China",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 122: In 1342, the Sultan sent him as imperial envoy to Mongol emperor in China. He went via Calicut, Maldives, and Bengal. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 122 • Ibn Battuta's Mission to China\n\nHis journey to Daulatabad, Calicut, and China as envoy.\n\n**Key Syllabus Concepts:**\n* In 1342, the Sultan sent him as imperial envoy to Mongol emperor in China\n* He went via Calicut, Maldives, and Bengal.\n\n* **Story Analogy**: An ambassador traveling through beautiful tropical islands like Maldives, working as a local judge there, before heading to China.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 122 • इब्न बतूता का चीन मिशन\n\n**मुख्य अवधारणा:**\nराजदूत के रूप में दौलताबाद, कालीकट और चीन की उनकी यात्रा।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* 1342 में, सुल्तान ने उन्हें चीन में मंगोल सम्राट के पास शाही राजदूत के रूप में भेजा। वह कालीकट, मालदीव और बंगाल होते हुए गए।\n\n* **कहानी सादृश्य**: एक राजदूत जो मालदीव जैसे खूबसूरत उष्णकटिबंधीय द्वीपों की यात्रा करता है, वहां स्थानीय न्यायाधीश के रूप में काम करता है, फिर चीन की ओर बढ़ता है।",
    "explanationHinglish": "### 📖 NCERT Page 122 • Ibn Battuta ka China Mission\n\nIs page par hum seekhte hain: **Sultan ke envoy ke roop me Daulatabad, Calicut aur China ki travels.**\n\n**Yaad rakhne wali baatein:**\n* In 1342 me Sultan ne unhe China ke Mongol court me ambassador banakar bheja\n* Wo Calicut, Maldives aur Bengal hote hue wahan gaye.\n\n* **Story Analogy**: Ek diplomat jo raste me Maldives ke beaches par rukta hai, wahan shadiyan karta hai, judge banta hai, fir China jata hai.",
    "example": "For example: In 1342, the Sultan sent him as imperial envoy to Mongol emperor in China. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "Where was Ibn Battuta sent as an imperial envoy by the Sultan in 1342?",
        "hindi": "1342 में सुल्तान द्वारा इब्न बतूता को शाही राजदूत के रूप में कहाँ भेजा गया था?",
        "hinglish": "1342 me Sultan ne Ibn Battuta ko kahan ka ambassador banaya?"
      },
      "options": [
        {
          "english": "Persia",
          "hindi": "फारस",
          "hinglish": "Persia"
        },
        {
          "english": "China",
          "hindi": "चीन",
          "hinglish": "China"
        },
        {
          "english": "Egypt",
          "hindi": "मिस्र",
          "hinglish": "Egypt"
        },
        {
          "english": "Rome",
          "hindi": "रोम",
          "hinglish": "Rome"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "He was sent to China to represent the Delhi Sultan at the court of the Mongol ruler.",
        "hindi": "उन्हें मंगोल शासक के दरबार में दिल्ली सुल्तान का प्रतिनिधित्व करने के लिए चीन भेजा गया था।",
        "hinglish": "Mongol emperor ke court me relations build karne ke liye unhe China bheja gaya tha."
      }
    },
    "blank": {
      "question": {
        "english": "On his way to China, Ibn Battuta spent several months in the ______ islands.",
        "hindi": "चीन जाते समय, इब्न बतूता ने ______ द्वीपों में कई महीने बिताए।",
        "hinglish": "China jate hue Ibn Battuta ne kai months ______ islands me bitaye."
      },
      "answer": {
        "english": "Maldives",
        "hindi": "मालदीव",
        "hinglish": "Maldives"
      },
      "hint": {
        "english": "A group of coral islands south of India.",
        "hindi": "भारत के दक्षिण में स्थित प्रवाल द्वीपों का एक समूह।",
        "hinglish": "India ke south me chote islands ka group."
      }
    }
  },
  {
    "pageNo": 123,
    "title": "Dangers and Speed of Medieval Travel",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 123: Robber bands frequently attacked caravans. Ibn Battuta was wounded in highway robbery. Travel from Multan to Delhi took 40 days. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 123 • Dangers and Speed of Medieval Travel\n\nSecurity issues, diseases, and travel times.\n\n**Key Syllabus Concepts:**\n* Robber bands frequently attacked caravans\n* Ibn Battuta was wounded in highway robbery\n* Travel from Multan to Delhi took 40 days.\n\n* **Story Analogy**: Imagine walking on foot or riding a horse with bandits waiting behind every bush, requiring armed guards just to go to the next town.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 123 • मध्यकालीन यात्रा के खतरे और गति\n\n**मुख्य अवधारणा:**\nसुरक्षा मुद्दे, बीमारियां और यात्रा में लगने वाला समय।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* लुटेरों के गिरोह अक्सर काफिलों पर हमला करते थे। इब्न बतूता राजमार्ग की डकैती में घायल हो गए थे। मुल्तान से दिल्ली की यात्रा में 40 दिन लगते थे।\n\n* **कहानी सादृश्य**: कल्पना कीजिए कि आप पैदल चल रहे हैं या घोड़े की सवारी कर रहे हैं और हर झाड़ी के पीछे डकैत छिपे हैं, सिर्फ अगले शहर जाने के लिए सशस्त्र गार्ड की आवश्यकता होती है।",
    "explanationHinglish": "### 📖 NCERT Page 123 • Medieval Travel ke Dangers aur Speed\n\nIs page par hum seekhte hain: **Travel me security dangers, illness aur lagne wala time.**\n\n**Yaad rakhne wali baatein:**\n* Raste me dakuon ke gangs hote the\n* Ibn Battuta par bhi attack hua tha\n* Multan se Delhi ka distance cover karne me 40 days lagte the.\n\n* **Story Analogy**: Socho agar aapko market jane ke liye bhi dakuon ke darr se pure group aur security guard ke sath jana pade.",
    "example": "For example: Robber bands frequently attacked caravans. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "How long did it take to travel from Multan to Delhi in Sultanate times?",
        "hindi": "सल्तनत काल में मुल्तान से दिल्ली की यात्रा करने में कितना समय लगता था?",
        "hinglish": "Sultanate ke time Multan se Delhi jane me kitna time lagta tha?"
      },
      "options": [
        {
          "english": "4 days",
          "hindi": "4 दिन",
          "hinglish": "4 days"
        },
        {
          "english": "40 days",
          "hindi": "40 दिन",
          "hinglish": "40 days"
        },
        {
          "english": "4 months",
          "hindi": "4 महीने",
          "hinglish": "4 months"
        },
        {
          "english": "1 year",
          "hindi": "1 वर्ष",
          "hinglish": "1 year"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Walking or riding horses/camels took approximately 40 days to cover the distance between Multan and Delhi.",
        "hindi": "मुल्तान और दिल्ली के बीच की दूरी को तय करने में पैदल या घोड़ों/ऊंतों की सवारी से लगभग 40 दिन लगते थे।",
        "hinglish": "Tab slow transport systems (horses/camels) ki wajah se Multan se Delhi me 40 days lagte the."
      }
    },
    "blank": {
      "question": {
        "english": "Travelling in caravans was necessary because of the threat of ______.",
        "hindi": "______ के खतरे के कारण काफिलों (caravans) में यात्रा करना आवश्यक था।",
        "hinglish": "______ ke threat ki wajah se caravans me hi travel kiya jata tha."
      },
      "answer": {
        "english": "robbers",
        "hindi": "लुटेरों",
        "hinglish": "robbers"
      },
      "hint": {
        "english": "Bandits who attack travellers.",
        "hindi": "यात्रियों पर हमला करने वाले डाकू।",
        "hinglish": "Raste me loot-paat karne wale bandits."
      }
    }
  },
  {
    "pageNo": 124,
    "title": "Exotic Wonders: Coconut & Paan",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 124: He described the coconut as looking like a human head with hair and eyes. Betel leaves (paan) were chewed for digestion. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 124 • Exotic Wonders: Coconut & Paan\n\nIbn Battuta's descriptions of coconuts and betel leaves.\n\n**Key Syllabus Concepts:**\n* He described the coconut as looking like a human head with hair and eyes\n* Betel leaves (paan) were chewed for digestion.\n\n* **Story Analogy**: Like a modern traveler seeing a dragon fruit for the first time and writing a detailed blog post comparing it to an animal.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 124 • अनोखी चीजें: नारियल और पान\n\n**मुख्य अवधारणा:**\nनारियल और पान के बारे में इब्न बतूता के विवरण।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* उन्होंने नारियल का वर्णन इस प्रकार किया कि वह बाल और आँखों वाले मानव सिर जैसा दिखता है। पाचन के लिए पान (betel leaves) चबाया जाता था।\n\n* **कहानी सादृश्य**: जैसे कोई आधुनिक यात्री पहली बार ड्रैगन फ्रूट देखता है और उसकी तुलना किसी जानवर से करते हुए एक विस्तृत ब्लॉग पोस्ट लिखता है।",
    "explanationHinglish": "### 📖 NCERT Page 124 • Exotic Wonders: Coconut aur Paan\n\nIs page par hum seekhte hain: **Ibn Battuta ka coconut aur paan ke baare me hairani se likhna.**\n\n**Yaad rakhne wali baatein:**\n* Unhone coconut ko insaan ke head jaisa bataya jisme baal aur aankhein hoti hain\n* Paan ko bina fruit ka pauda bataya jise digest karne ke liye chabate hain.\n\n* **Story Analogy**: Jaise koi tourist pehli baar koi aisi cheez dekhe jo uski country me na ho, aur uske baare me detail blog likhe.",
    "example": "For example: He described the coconut as looking like a human head with hair and eyes. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "Which fruit did Ibn Battuta compare to a human head?",
        "hindi": "इब्न बतूता ने किस फल की तुलना मानव सिर से की थी?",
        "hinglish": "Ibn Battuta ne kis fruit ko human head se compare kiya tha?"
      },
      "options": [
        {
          "english": "Mango",
          "hindi": "आम",
          "hinglish": "Mango"
        },
        {
          "english": "Coconut",
          "hindi": "नारियल",
          "hinglish": "Coconut"
        },
        {
          "english": "Watermelon",
          "hindi": "तरबूज",
          "hinglish": "Watermelon"
        },
        {
          "english": "Jackfruit",
          "hindi": "कटहल",
          "hinglish": "Jackfruit"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Ibn Battuta described the fiber of coconut as hair and its holes as eyes.",
        "hindi": "इब्न बतूता ने नारियल के रेशे को बाल और उसके छिद्रों को आँखों के रूप में वर्णित किया।",
        "hinglish": "Coconut ki outer fiber ko baal aur lower dots ko unhone eyes ki tarah compare kiya."
      }
    },
    "blank": {
      "question": {
        "english": "Indian betel leaf (paan) was cultivated not for fruit, but for its ______.",
        "hindi": "भारतीय पान की खेती फल के लिए नहीं, बल्कि उसके ______ के लिए की जाती थी।",
        "hinglish": "Indian betel leaf (paan) ko fruit ke liye nahi, balki uske ______ ke liye ugaya jata tha."
      },
      "answer": {
        "english": "leaves",
        "hindi": "पत्तियों",
        "hinglish": "leaves"
      },
      "hint": {
        "english": "The green wrappers chewed with areca nut.",
        "hindi": "सुपारी के साथ चबाए जाने वाले हरे पत्ते।",
        "hinglish": "Green part jise chabate hain."
      }
    }
  },
  {
    "pageNo": 125,
    "title": "The Vast City of Delhi",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 125: Delhi was a vast city with a huge population and massive protective walls. The walls had chambers for guards and stored grains. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 125 • The Vast City of Delhi\n\nIbn Battuta's description of Delhi's size and fortifications.\n\n**Key Syllabus Concepts:**\n* Delhi was a vast city with a huge population and massive protective walls\n* The walls had chambers for guards and stored grains.\n\n* **Story Analogy**: A city wall so thick that even people can live inside the wall itself, using it as an apartment and warehouse combined.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 125 • दिल्ली का विशाल शहर\n\n**मुख्य अवधारणा:**\nदिल्ली के आकार और किलेबंदी के बारे में इब्न बतूता का विवरण।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* दिल्ली एक विशाल शहर था जिसकी आबादी बहुत बड़ी थी और इसकी सुरक्षा दीवारें बहुत बड़ी थीं। दीवारों में पहरेदारों के रहने के लिए कमरे और अनाज रखने के गोदाम थे।\n\n* **कहानी सादृश्य**: एक शहर की दीवार इतनी मोटी कि लोग दीवार के अंदर ही रह सकें, उसका उपयोग एक फ्लैट और गोदाम दोनों के रूप में कर सकें।",
    "explanationHinglish": "### 📖 NCERT Page 125 • Delhi: Ek Vishal City\n\nIs page par hum seekhte hain: **Delhi ke size aur bade borders/forts ki details.**\n\n**Yaad rakhne wali baatein:**\n* Delhi bohot bada aur populous city tha\n* Uski security wall bohot chodi thi jiske andar guard rooms aur godowns bane hue the.\n\n* **Story Analogy**: Socho ek city ki border wall itni chodi ho ki uske andar rooms aur shops fit ho sakein.",
    "example": "For example: Delhi was a vast city with a huge population and massive protective walls. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "What did the massive walls of Delhi contain inside them?",
        "hindi": "दिल्ली की विशाल दीवारों के अंदर क्या था?",
        "hinglish": "Delhi ke massive walls ke andar kya guna hua tha?"
      },
      "options": [
        {
          "english": "Secret tunnels",
          "hindi": "गुप्त सुरंगें",
          "hinglish": "Secret tunnels"
        },
        {
          "english": "Chambers for guards and storage",
          "hindi": "पहरेदारों के लिए कमरे और भंडारण",
          "hinglish": "Chambers for guards aur storage"
        },
        {
          "english": "Water parks",
          "hindi": "वाटर पार्क",
          "hinglish": "Water parks"
        },
        {
          "english": "Schools",
          "hindi": "स्कूल",
          "hinglish": "Schools"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "The thick walls contained rooms for night guards and warehouses for grain storage.",
        "hindi": "मोटी दीवारों में रात के पहरेदारों के लिए कमरे और अनाज भंडारण के लिए गोदाम थे।",
        "hinglish": "Walls ke andar security guards ke rooms aur emergency food stores ke liye warehouses hote the."
      }
    },
    "blank": {
      "question": {
        "english": "Delhi had a total of ______ main gates (Darwazas).",
        "hindi": "दिल्ली में कुल ______ मुख्य द्वार (दरवाजे) थे।",
        "hinglish": "Delhi me total ______ main gates (Darwazas) the."
      },
      "answer": {
        "english": "28",
        "hindi": "28",
        "hinglish": "28"
      },
      "hint": {
        "english": "A number between 25 and 30.",
        "hindi": "25 और 30 के बीच की एक संख्या।",
        "hinglish": "25 aur 30 ke beech ka number."
      }
    }
  },
  {
    "pageNo": 126,
    "title": "Daulatabad: The Equal City",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 126: Daulatabad rivaled Delhi in size. It was a center of trade with beautiful markets and a dedicated singers' market (Tarababad). This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 126 • Daulatabad: The Equal City\n\nDescription of Daulatabad (Devagiri) in Maharashtra.\n\n**Key Syllabus Concepts:**\n* Daulatabad rivaled Delhi in size\n* It was a center of trade with beautiful markets and a dedicated singers' market (Tarababad).\n\n* **Story Analogy**: A city market where merchants can buy spices, while musicians perform on wooden swings in the center of the shops.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 126 • दौलताबाद: दिल्ली के बराबर का शहर\n\n**मुख्य अवधारणा:**\nमहाराष्ट्र में दौलताबाद (देवगिरि) का विवरण।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* दौलताबाद आकार में दिल्ली को टक्कर देता था। यह सुंदर बाजारों और संगीतकारों के लिए एक समर्पित बाजार (ताराबाबाद) के साथ व्यापार का एक प्रमुख केंद्र था।\n\n* **कहानी सादृश्य**: एक शहर का बाजार जहां व्यापारी मसाले खरीद सकते हैं, जबकि संगीतकार दुकानों के बीच में लकड़ी के झूलों पर प्रदर्शन करते हैं।",
    "explanationHinglish": "### 📖 NCERT Page 126 • Daulatabad: Delhi jaisa City\n\nIs page par hum seekhte hain: **Maharashtra ke Daulatabad city ki characteristics.**\n\n**Yaad rakhne wali baatein:**\n* Daulatabad size me Delhi jitna hi bada tha\n* Wahan par singers aur dancers ke liye ek special market tha jise Tarababad kehte the.\n\n* **Story Analogy**: Ek aisi market jahan beech me singers perform kar rahe hain aur aaspas shops me log business kar rahe hain.",
    "example": "For example: Daulatabad rivaled Delhi in size. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "What was the name of the special market for male and female singers in Daulatabad?",
        "hindi": "दौलताबाद में पुरुष और महिला गायकों के विशेष बाजार का नाम क्या था?",
        "hinglish": "Daulatabad me singers aur dancers ke market ko kya kehte the?"
      },
      "options": [
        {
          "english": "Meena Bazar",
          "hindi": "मीना बाजार",
          "hinglish": "Meena Bazar"
        },
        {
          "english": "Tarababad",
          "hindi": "ताराबाबाद",
          "hinglish": "Tarababad"
        },
        {
          "english": "Chandni Chowk",
          "hindi": "चांदनी चौक",
          "hinglish": "Chandni Chowk"
        },
        {
          "english": "Sultan Bazar",
          "hindi": "सुल्तान बाजार",
          "hinglish": "Sultan Bazar"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Tarababad was a marketplace for dancers and singers, equipped with shops and swings.",
        "hindi": "ताराबाबाद नर्तकियों और गायकों के लिए एक बाजार था, जो दुकानों और झूलों से सुसज्जित था।",
        "hinglish": "Tarababad ek dedicated music market tha jahan musicians perform karte the."
      }
    },
    "blank": {
      "question": {
        "english": "Daulatabad rivaled ______ in size and economic power.",
        "hindi": "दौलताबाद आकार और आर्थिक शक्ति में ______ को टक्कर देता था।",
        "hinglish": "Daulatabad size aur economy me ______ ko takkar deta tha."
      },
      "answer": {
        "english": "Delhi",
        "hindi": "दिल्ली",
        "hinglish": "Delhi"
      },
      "hint": {
        "english": "The capital of Sultanate.",
        "hindi": "सल्तनत की राजधानी।",
        "hinglish": "Sultanate ki capital city."
      }
    }
  },
  {
    "pageNo": 127,
    "title": "Indian Productivity and Trade",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 127: Agriculture was productive due to fertile soil, allowing farmers to grow two crops a year. Indian calico and silk were in high demand. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 127 • Indian Productivity and Trade\n\nWhy Indian agriculture and crafts were highly successful.\n\n**Key Syllabus Concepts:**\n* Agriculture was productive due to fertile soil, allowing farmers to grow two crops a year\n* Indian calico and silk were in high demand.\n\n* **Story Analogy**: Imagine a field so rich that you throw seeds on it and get double harvests every single year without complex modern fertilizers.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 127 • भारतीय उत्पादकता और व्यापार\n\n**मुख्य अवधारणा:**\nभारतीय कृषि और शिल्प अत्यधिक सफल क्यों थे।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* उपजाऊ मिट्टी के कारण कृषि उत्पादक थी, जिससे किसान साल में दो फसलें उगा सकते थे। भारतीय सूती वस्त्र (कैलिको) और रेशम की अत्यधिक मांग थी।\n\n* **कहानी सादृश्य**: एक ऐसे खेत की कल्पना कीजिए जो इतना समृद्ध हो कि आप उस पर बीज फेंकते हैं और बिना जटिल आधुनिक उर्वरकों के हर साल दोगुनी फसल पाते हैं।",
    "explanationHinglish": "### 📖 NCERT Page 127 • Indian Productivity aur Trade\n\nIs page par hum seekhte hain: **Agriculture aur handicrafts ke success ka kya raaz tha.**\n\n**Yaad rakhne wali baatein:**\n* Fertile soil ki wajah se saal me do baar kheti hoti thi\n* India ka cotton (calico) aur silk world market me bohot popular tha.\n\n* **Story Analogy**: Bina kisi modern fertilizers ke bhi zameen itni fertile thi ki double crop harvesting hoti thi.",
    "example": "For example: Agriculture was productive due to fertile soil, allowing farmers to grow two crops a year. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "How many crops did Indian farmers grow per year due to soil fertility?",
        "hindi": "मिट्टी की उर्वरता के कारण भारतीय किसान प्रति वर्ष कितनी फसलें उगाते थे?",
        "hinglish": "Soil fertility ki wajah se Indian farmers saal me kitni bar kheti karte the?"
      },
      "options": [
        {
          "english": "One",
          "hindi": "एक",
          "hinglish": "One"
        },
        {
          "english": "Two",
          "hindi": "दो",
          "hinglish": "Two"
        },
        {
          "english": "Four",
          "hindi": "चार",
          "hinglish": "Four"
        },
        {
          "english": "None",
          "hindi": "कोई नहीं",
          "hinglish": "None"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "The soil was so fertile that farmers could easily cultivate two crops annually.",
        "hindi": "मिट्टी इतनी उपजाऊ थी कि किसान सालाना आसानी से दो फसलें उगा सकते थे।",
        "hinglish": "Zameen bohot fertile thi isliye double crop agriculture chalta tha."
      }
    },
    "blank": {
      "question": {
        "english": "Indian textiles, especially fine cotton fabrics called ______ were exported globally.",
        "hindi": "भारतीय वस्त्र, विशेष रूप से महीन सूती कपड़े जिन्हें ______ कहा जाता था, विश्व स्तर पर निर्यात किए जाते थे।",
        "hinglish": "Indian fine cotton fabrics ko ______ kaha jata tha jo export hoti thi."
      },
      "answer": {
        "english": "calico",
        "hindi": "कैलिको",
        "hinglish": "calico"
      },
      "hint": {
        "english": "Woven cotton cloth.",
        "hindi": "बुना हुआ सूती कपड़ा।",
        "hinglish": "Cotton fabric ka ek type."
      }
    }
  },
  {
    "pageNo": 128,
    "title": "The Efficient Sultanate Postal System",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 128: The state postal system had horse posts (Uluq) every four miles and foot posts (Dawa) every three miles. It was faster than normal travel. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 128 • The Efficient Sultanate Postal System\n\nThe Uluq and Dawa postal structures.\n\n**Key Syllabus Concepts:**\n* The state postal system had horse posts (Uluq) every four miles and foot posts (Dawa) every three miles\n* It was faster than normal travel.\n\n* **Story Analogy**: Like a relay race where runners stand with bells at fixed points, handing the letter to the next runner to deliver it in record time.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 128 • कुशल सल्तनत डाक प्रणाली\n\n**मुख्य अवधारणा:**\nउलूक और दावा डाक संरचनाएं।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* राज्य की डाक प्रणाली में प्रत्येक चार मील पर घोड़ा डाक (उलूक) और प्रत्येक तीन मील पर पैदल डाक (दावा) की व्यवस्था थी। यह सामान्य यात्रा से बहुत तेज थी।\n\n* **कहानी सादृश्य**: एक रिले रेस की तरह जहाँ धावक निश्चित बिंदुओं पर घंटियाँ लेकर खड़े होते हैं, और रिकॉर्ड समय में पत्र पहुँचाने के लिए उसे अगले धावक को सौंपते हैं।",
    "explanationHinglish": "### 📖 NCERT Page 128 • Efficient Postal System\n\nIs page par hum seekhte hain: **Uluq aur Dawa postal networks.**\n\n**Yaad rakhne wali baatein:**\n* Delhi Sultanate me two types ke post the: Horse post (Uluq) har 4 miles par aur foot post (Dawa) har mile ke 1/3 hisse par\n* Ye bohot fast tha.\n\n* **Story Analogy**: Jaise relay race hoti hai jahan runners dande ki jagah bell lekar khade rehte hain aur aage message pass karte hain.",
    "example": "For example: The state postal system had horse posts (Uluq) every four miles and foot posts (Dawa) every three miles. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "What was the foot-based postal system called?",
        "hindi": "पैदल चलने वाली डाक प्रणाली को क्या कहा जाता था?",
        "hinglish": "Foot-based postal system ko kya bolte the?"
      },
      "options": [
        {
          "english": "Uluq",
          "hindi": "उलूक",
          "hinglish": "Uluq"
        },
        {
          "english": "Dawa",
          "hindi": "दावा",
          "hinglish": "Dawa"
        },
        {
          "english": "Posta",
          "hindi": "पोस्ता",
          "hinglish": "Posta"
        },
        {
          "english": "Harkara",
          "hindi": "हरकारा",
          "hinglish": "Harkara"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Dawa was the foot post system, where runners stood with bells every one-third of a mile.",
        "hindi": "दावा पैदल डाक प्रणाली थी, जहाँ धावक प्रत्येक एक-तिहाई मील पर घंटियाँ लेकर खड़े होते थे।",
        "hinglish": "Dawa foot post tha jo runners ke through chalta tha aur Uluq horse post tha."
      }
    },
    "blank": {
      "question": {
        "english": "The horse-post postal system was known as ______.",
        "hindi": "घोड़ा डाक प्रणाली को ______ के रूप में जाना जाता था।",
        "hinglish": "Horse-post postal system ko ______ kaha jata tha."
      },
      "answer": {
        "english": "Uluq",
        "hindi": "उलूक",
        "hinglish": "Uluq"
      },
      "hint": {
        "english": "Begins with the letter 'U'.",
        "hindi": "यह 'उ' (U) अक्षर से शुरू होता है।",
        "hinglish": "U se start hone wala word."
      }
    }
  },
  {
    "pageNo": 129,
    "title": "François Bernier: The French Doctor",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 129: Bernier arrived in 1656. He worked as physician to Prince Dara Shikoh and later Danishmand Khan, Danish nobleman. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 129 • François Bernier: The French Doctor\n\nBernier's arrival in Mughal India and links to nobility.\n\n**Key Syllabus Concepts:**\n* Bernier arrived in 1656\n* He worked as physician to Prince Dara Shikoh and later Danishmand Khan, Danish nobleman.\n\n* **Story Analogy**: A European doctor who gets caught in a royal war between brothers, and ends up working for the intellectual prince who loved translating books.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 129 • फ्रांसुआ बर्नियर: फ्रांसीसी चिकित्सक\n\n**मुख्य अवधारणा:**\nमुगल भारत में बर्नियर का आगमन और कुलीन वर्ग से उनके संबंध।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* बर्नियर 1656 में भारत आए। उन्होंने राजकुमार दारा शिकोह के चिकित्सक के रूप में और बाद में मुगल कुलीन दानिशमंद खान के साथ काम किया।\n\n* **कहानी सादृश्य**: एक यूरोपीय चिकित्सक जो भाइयों के बीच शाही युद्ध में फंस जाता है, और अंततः उस बुद्धिमान राजकुमार के लिए काम करता है जिसे पुस्तकों का अनुवाद करना पसंद था।",
    "explanationHinglish": "### 📖 NCERT Page 129 • François Bernier: French Doctor\n\nIs page par hum seekhte hain: **Bernier ka Mughal India me aana aur court se connections.**\n\n**Yaad rakhne wali baatein:**\n* Bernier 1656 me Mughal court me aaye\n* Wo Dara Shikoh ke doctor rahe aur baad me Danishmand Khan ke sath as researcher/nobleman work kiya.\n\n* **Story Analogy**: Ek European doctor jo Mughal princes ke beech ki war of succession ka eye witness banta hai.",
    "example": "For example: Bernier arrived in 1656. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "François Bernier served as a personal physician to which Mughal prince?",
        "hindi": "फ्रांसुआ बर्नियर ने किस मुगल राजकुमार के निजी चिकित्सक के रूप में कार्य किया था?",
        "hinglish": "François Bernier kis Mughal prince ke personal physician the?"
      },
      "options": [
        {
          "english": "Aurangzeb",
          "hindi": "औरंगजेब",
          "hinglish": "Aurangzeb"
        },
        {
          "english": "Dara Shikoh",
          "hindi": "दारा शिकोह",
          "hinglish": "Dara Shikoh"
        },
        {
          "english": "Shah Jahan",
          "hindi": "शाहजहाँ",
          "hinglish": "Shah Jahan"
        },
        {
          "english": "Murad Bakhsh",
          "hindi": "मुराद बख्श",
          "hinglish": "Murad Bakhsh"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Bernier was employed as a physician by Dara Shikoh, the eldest son of Shah Jahan, before Aurangzeb won the war of succession.",
        "hindi": "औरंगजेब द्वारा उत्तराधिकार के युद्ध जीतने से पहले, बर्नियर को शाहजहाँ के सबसे बड़े बेटे दारा शिकोह ने चिकित्सक के रूप में नियुक्त किया था।",
        "hinglish": "Bernier Dara Shikoh ke physician the jo Shah Jahan ke bade bete the."
      }
    },
    "blank": {
      "question": {
        "english": "Bernier worked under Danishmand Khan, a ______ nobleman in the Mughal court.",
        "hindi": "बर्नियर ने मुगल दरबार में दानिशमंद खान, जो एक ______ दरबारी थे, के तहत काम किया।",
        "hinglish": "Bernier ne Danishmand Khan ke under work kiya, jo ek ______ noble the."
      },
      "answer": {
        "english": "Mughal",
        "hindi": "मुगल",
        "hinglish": "Mughal"
      },
      "hint": {
        "english": "The ruling class of 17th century India.",
        "hindi": "17वीं शताब्दी के भारत का शासक वर्ग।",
        "hinglish": "Ruling dynastic group."
      }
    }
  },
  {
    "pageNo": 130,
    "title": "East-West Comparison & Mogul Empire",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 130: Bernier compared India unfavorably with Europe. He wrote his travelogue as letters to King Louis XIV of France. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 130 • East-West Comparison & Mogul Empire\n\nBernier's comparative methodology.\n\n**Key Syllabus Concepts:**\n* Bernier compared India unfavorably with Europe\n* He wrote his travelogue as letters to King Louis XIV of France.\n\n* **Story Analogy**: Writing letters to your home country's king, constantly telling him why your country's policy is much better than the foreign empire's policy.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 130 • पूर्व-पश्चिम तुलना और मुगल साम्राज्य\n\n**मुख्य अवधारणा:**\nबर्नियर की तुलनात्मक पद्धति।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* बर्नियर ने भारत की तुलना यूरोप से की और भारत को कमतर आंका। उन्होंने अपना यात्रा वृत्तांत फ्रांस के राजा लुई चौदहवें को पत्रों के रूप में लिखा।\n\n* **कहानी सादृश्य**: अपने देश के राजा को पत्र लिखना, और उसे लगातार यह बताना कि आपके देश की नीतियां विदेशी साम्राज्य की नीतियों से कहीं बेहतर क्यों हैं।",
    "explanationHinglish": "### 📖 NCERT Page 130 • East-West Comparison\n\nIs page par hum seekhte hain: **Bernier ka India aur Europe ko compare karne ka tarika.**\n\n**Yaad rakhne wali baatein:**\n* Bernier ne India ko Europe se compare kiya aur bataya ki Europe better hai\n* Unhone apni letters French King Louis XIV ko likhin.\n\n* **Story Analogy**: Apne desh ke king ko letters likhna aur unhe batana ki humara system kitna aage hai.",
    "example": "For example: Bernier compared India unfavorably with Europe. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "To which French king did Bernier address his major works on Mughal India?",
        "hindi": "बर्नियर ने मुगल भारत पर अपने प्रमुख कार्यों को किस फ्रांसीसी राजा को संबोधित किया था?",
        "hinglish": "Bernier ne apne main letters kis French King ko address kiye the?"
      },
      "options": [
        {
          "english": "Louis XIV",
          "hindi": "लुई चौदहवें",
          "hinglish": "Louis XIV"
        },
        {
          "english": "Louis XVI",
          "hindi": "लुई सोलहवें",
          "hinglish": "Louis XVI"
        },
        {
          "english": "Napoleon",
          "hindi": "नेपोलियन",
          "hinglish": "Napoleon"
        },
        {
          "english": "Henry IV",
          "hindi": "हेनरी चतुर्थ",
          "hinglish": "Henry IV"
        }
      ],
      "answer": 0,
      "explanation": {
        "english": "His writings were formatted as letters to Louis XIV, comparing Mughal systems with French feudal systems.",
        "hindi": "उनके लेख लुई चौदहवें को पत्रों के रूप में लिखे गए थे, जिसमें मुगल प्रणालियों की तुलना फ्रांसीसी सामंती प्रणालियों से की गई थी।",
        "hinglish": "French monarch Louis XIV ko ye letters send kiye gaye the."
      }
    },
    "blank": {
      "question": {
        "english": "Bernier's travelogue is titled 'Travels in the ______ Empire'.",
        "hindi": "बर्नियर के यात्रा वृत्तांत का शीर्षक 'ट्रेवल्स इन द ______ एम्पायर' है।",
        "hinglish": "Bernier ke travelogue ka title 'Travels in the ______ Empire' hai."
      },
      "answer": {
        "english": "Mogul",
        "hindi": "मुगल",
        "hinglish": "Mogul"
      },
      "hint": {
        "english": "Old spelling of Mughal.",
        "hindi": "मुगल (Mughal) की पुरानी वर्तनी।",
        "hinglish": "Mughal ki purani English spelling."
      }
    }
  },
  {
    "pageNo": 131,
    "title": "The Question of Private Land Ownership",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 131: Bernier believed the king owned all land, preventing farmers from inheriting farms. This ruined agriculture and led to tyranny. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 131 • The Question of Private Land Ownership\n\nMughal crown ownership of all land.\n\n**Key Syllabus Concepts:**\n* Bernier believed the king owned all land, preventing farmers from inheriting farms\n* This ruined agriculture and led to tyranny.\n\n* **Story Analogy**: If you rent an apartment and are not allowed to pass it to your family, you won't spend money to paint or repair it. That was the state of farms.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 131 • निजी भूमि स्वामित्व का प्रश्न\n\n**मुख्य अवधारणा:**\nसभी भूमि पर मुगल क्राउन (राजमुकुट) का स्वामित्व।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* बर्नियर का मानना था कि राजा ही पूरी जमीन का मालिक होता है, जिससे किसान खेतों को विरासत में नहीं दे पाते थे। इससे कृषि नष्ट हुई और तानाशाही फैली।\n\n* **कहानी सादृश्य**: यदि आप कोई फ्लैट किराए पर लेते हैं और आपको उसे अपने परिवार को सौंपने की अनुमति नहीं है, तो आप उसकी मरम्मत पर पैसा खर्च नहीं करेंगे। खेतों की स्थिति भी ऐसी ही थी।",
    "explanationHinglish": "### 📖 NCERT Page 131 • Private Property Issue\n\nIs page par hum seekhte hain: **Kya peasants ke paas zameen ki ownership thi.**\n\n**Yaad rakhne wali baatein:**\n* Bernier ka kehna tha ki Mughal King zameen ka owner hai\n* Isliye farmers zameen apne bacho ko nahi de paate, jisse agriculture kharab ho gayi.\n\n* **Story Analogy**: Jaise agar rented house ho to log repair nahi karate, waise hi farmers zameen par invest nahi karte the.",
    "example": "For example: Bernier believed the king owned all land, preventing farmers from inheriting farms. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "According to Bernier, who owned all agricultural land in Mughal India?",
        "hindi": "बर्नियर के अनुसार, मुगल भारत में कृषि योग्य भूमि का स्वामी कौन था?",
        "hinglish": "Bernier ke according, Mughal India me saari zameen ka malik kaun tha?"
      },
      "options": [
        {
          "english": "Local Zamindars",
          "hindi": "स्थानीय जमींदार",
          "hinglish": "Local Zamindars"
        },
        {
          "english": "The Mughal Emperor (Crown)",
          "hindi": "मुगल सम्राट (राजमुकुट)",
          "hinglish": "Mughal Emperor (Crown)"
        },
        {
          "english": "Peasants",
          "hindi": "किसान",
          "hinglish": "Peasants"
        },
        {
          "english": "Village Panchayats",
          "hindi": "ग्राम पंचायत",
          "hinglish": "Village Panchayats"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Bernier claimed that lack of private property (crown ownership) was the root cause of poverty in India.",
        "hindi": "बर्नियर ने दावा किया कि निजी संपत्ति का अभाव (राज्य का स्वामित्व) भारत में गरीबी का मूल कारण था।",
        "hinglish": "Crown ownership of land ko Bernier ne poverty ka main reason bataya."
      }
    },
    "blank": {
      "question": {
        "english": "Lack of private ownership of land was believed by Bernier to cause the ______ of agriculture.",
        "hindi": "बर्नियर का मानना था कि भूमि के निजी स्वामित्व की कमी के कारण कृषि का ______ हुआ।",
        "hinglish": "Zameen ke private ownership na hone se agriculture ka ______ hua."
      },
      "answer": {
        "english": "ruin",
        "hindi": "पतन",
        "hinglish": "ruin"
      },
      "hint": {
        "english": "Complete destruction or decline.",
        "hindi": "पूर्ण विनाश या गिरावट।",
        "hinglish": "Destruction ya decline."
      }
    }
  },
  {
    "pageNo": 132,
    "title": "The 'King of Ruins' Concept",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 132: Bernier described India as having no middle class—only a rich ruling class and extremely poor peasants. The king ruled over ruins. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 132 • The 'King of Ruins' Concept\n\nMughal society under absolute tyranny.\n\n**Key Syllabus Concepts:**\n* Bernier described India as having no middle class—only a rich ruling class and extremely poor peasants\n* The king ruled over ruins.\n\n* **Story Analogy**: Imagine a country where there is no normal income group. You are either a billionaire noble or a starving peasant, with nothing in between.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 132 • 'खंडहरों का राजा' की अवधारणा\n\n**मुख्य अवधारणा:**\nपूर्ण तानाशाही के अधीन मुगल समाज।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* बर्नियर ने वर्णन किया कि भारत में कोई मध्यम वर्ग नहीं था - केवल एक अमीर शासक वर्ग और अत्यधिक गरीब किसान थे। राजा केवल खंडहरों पर शासन करता था।\n\n* **कहानी सादृश्य**: एक ऐसे देश की कल्पना कीजिए जहां कोई सामान्य आय वर्ग नहीं है। आप या तो अरबपति दरबारी हैं या भूखे किसान, बीच में कुछ भी नहीं।",
    "explanationHinglish": "### 📖 NCERT Page 132 • 'King of Ruins' ka concept\n\nIs page par hum seekhte hain: **Mughal administration aur extreme poverty.**\n\n**Yaad rakhne wali baatein:**\n* Bernier ne bataya ki India me middle class nahi tha\n* Ek taraf rich nobles the aur dusri taraf garib kisan\n* King to bas khadaron par rule karta tha.\n\n* **Story Analogy**: Ek aisi country socho jahan koi ordinary salaried class na ho. Ya to log king hain ya bilkul bhikhaari.",
    "example": "For example: Bernier described India as having no middle class—only a rich ruling class and extremely poor peasants. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "Which class did Bernier claim was completely missing in Mughal India?",
        "hindi": "बर्नियर ने किस वर्ग के मुगल भारत में पूरी तरह से अनुपस्थित होने का दावा किया था?",
        "hinglish": "Bernier ne kis class ko Mughal India me missing bataya?"
      },
      "options": [
        {
          "english": "Peasants",
          "hindi": "किसान",
          "hinglish": "Peasants"
        },
        {
          "english": "Ruling Nobles",
          "hindi": "शासक वर्ग",
          "hinglish": "Ruling Nobles"
        },
        {
          "english": "Middle Class",
          "hindi": "मध्यम वर्ग",
          "hinglish": "Middle Class"
        },
        {
          "english": "Artisans",
          "hindi": "शिल्पकार",
          "hinglish": "Artisans"
        }
      ],
      "answer": 2,
      "explanation": {
        "english": "Bernier stated there was no middle state in India; one was either extremely rich or desperately poor.",
        "hindi": "बर्नियर ने कहा कि भारत में कोई मध्यम वर्ग नहीं था; व्यक्ति या तो अत्यधिक अमीर था या अत्यंत गरीब।",
        "hinglish": "Bernier ke words me India me middle class bilkul gayab tha."
      }
    },
    "blank": {
      "question": {
        "english": "Bernier described the Mughal Emperor as a king of ______.",
        "hindi": "बर्नियर ने मुगल सम्राट को ______ का राजा बताया।",
        "hinglish": "Bernier ne Mughal Emperor ko kis chiz ka king bola ______?"
      },
      "answer": {
        "english": "ruins",
        "hindi": "खंडहरों",
        "hinglish": "ruins"
      },
      "hint": {
        "english": "Broken, decayed remains of towns.",
        "hindi": "कस्बों के टूटे-फूटे, क्षय हुए अवशेष।",
        "hinglish": "Khandhar."
      }
    }
  },
  {
    "pageNo": 133,
    "title": "Mughal Cities as Camp Towns",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 133: Bernier called Mughal cities 'camp towns', suggesting they existed only when the royal court camped there and collapsed when it left. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 133 • Mughal Cities as Camp Towns\n\nUrban centers dependent on royal courts.\n\n**Key Syllabus Concepts:**\n* Bernier called Mughal cities 'camp towns', suggesting they existed only when the royal court camped there and collapsed when it left.\n\n* **Story Analogy**: Like a pop-up market or a music festival town that gets built overnight but disappears completely once the band pack up and leave.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 133 • शिविर नगर के रूप में मुगल शहर\n\n**मुख्य अवधारणा:**\nशाही दरबारों पर निर्भर शहरी केंद्र।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* बर्नियर ने मुगल शहरों को 'शिविर नगर' (camp towns) कहा, उनका मानना था कि ये शहर केवल तभी तक अस्तित्व में रहते थे जब तक शाही दरबार वहां डेरा डालता था और उसके जाते ही नष्ट हो जाते थे।\n\n* **कहानी सादृश्य**: एक पॉप-अप बाजार या संगीत समारोह वाले शहर की तरह जो रातों-रात बन जाता है लेकिन बैंड के पैकअप करते ही पूरी तरह से गायब हो जाता है।",
    "explanationHinglish": "### 📖 NCERT Page 133 • Mughal Cities: Camp Towns\n\nIs page par hum seekhte hain: **Mughal cities jo court movement par depend karte the.**\n\n**Yaad rakhne wali baatein:**\n* Bernier ne Mughal towns ko 'camp towns' bola\n* Unka kehna tha ki jab court aati hai tab ye bante hain, aur jab court chali jati hai tab khatam ho jate hain.\n\n* **Story Analogy**: Jaise koi mela ya circus lagta hai aur baad me gayab ho jata hai.",
    "example": "For example: Bernier called Mughal cities 'camp towns', suggesting they existed only when the royal court camped there and collapsed when it left. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "What term did Bernier use to describe Mughal urban centers?",
        "hindi": "बर्नियर ने मुगल शहरी केंद्रों का वर्णन करने के लिए किस शब्द का प्रयोग किया था?",
        "hinglish": "Bernier ne Mughal cities ke liye konsa term use kiya?"
      },
      "options": [
        {
          "english": "Metropolises",
          "hindi": "महानगर",
          "hinglish": "Metropolises"
        },
        {
          "english": "Camp Towns",
          "hindi": "शिविर नगर (कैंप टाउन)",
          "hinglish": "Camp Towns"
        },
        {
          "english": "Industrial Cities",
          "hindi": "औद्योगिक शहर",
          "hinglish": "Industrial Cities"
        },
        {
          "english": "Trading Ports",
          "hindi": "व्यापारिक बंदरगाह",
          "hinglish": "Trading Ports"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "He believed Mughal towns grew when the army camped there and declined immediately when the court moved.",
        "hindi": "उनका मानना था कि मुगल शहर तब बढ़ते थे जब सेना वहां डेरा डालती थी और दरबार के स्थानांतरित होते ही तुरंत उनका पतन हो जाता था।",
        "hinglish": "Unka concept tha ki ye permanent towns nahi the, balki royal camps par dependent the."
      }
    },
    "blank": {
      "question": {
        "english": "Bernier believed Mughal cities depended entirely on royal ______.",
        "hindi": "बर्नियर का मानना था कि मुगल शहर पूरी तरह से शाही ______ पर निर्भर थे।",
        "hinglish": "Bernier ke according, Mughal cities royal ______ par depend karte the."
      },
      "answer": {
        "english": "patronage",
        "hindi": "आश्रय (संरक्षण)",
        "hinglish": "patronage"
      },
      "hint": {
        "english": "Financial and political support from the king.",
        "hindi": "राजा से वित्तीय और राजनीतिक सहायता।",
        "hinglish": "King ki support aur funds."
      }
    }
  },
  {
    "pageNo": 134,
    "title": "Mughal Karkhanas & Manufacture",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 134: Despite his criticisms, Bernier described massive workshops (Karkhanas) where artisans worked under supervisions to make luxury goods. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 134 • Mughal Karkhanas & Manufacture\n\nMughal imperial workshops (Karkhanas).\n\n**Key Syllabus Concepts:**\n* Despite his criticisms, Bernier described massive workshops (Karkhanas) where artisans worked under supervisions to make luxury goods.\n\n* **Story Analogy**: A large high-end fashion factory run by the state, where master craftsmen are paid salary by the government to sew gold embroidery.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 134 • मुगल कारखाने और उत्पादन\n\n**मुख्य अवधारणा:**\nमुगल शाही कार्यशालाएं (कारखाने)।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* अपनी आलोचनाओं के बावजूद, बर्नियर ने विशाल कार्यशालाओं (कारखानों) का वर्णन किया जहाँ कारीगर विलासिता के सामान बनाने के लिए पर्यवेक्षण में काम करते थे।\n\n* **कहानी सादृश्य**: राज्य द्वारा संचालित एक बड़ी उच्च स्तरीय फैशन फैक्ट्री, जहाँ मुख्य कारीगरों को सोने की कढ़ाई सिलने के लिए सरकार द्वारा वेतन दिया जाता है।",
    "explanationHinglish": "### 📖 NCERT Page 134 • Mughal Karkhanas\n\nIs page par hum seekhte hain: **Mughal government workshops aur production.**\n\n**Yaad rakhne wali baatein:**\n* Apni warnings ke baad bhi Bernier ne likha ki karkhanon me artisans bohot hi high quality luxury items banate the.\n\n* **Story Analogy**: Government factories jahan top artisans embroidery, painting aur metal works karte the.",
    "example": "For example: Despite his criticisms, Bernier described massive workshops (Karkhanas) where artisans worked under supervisions to make luxury goods. This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "What were the imperial workshops in Mughal India called?",
        "hindi": "मुगल भारत में शाही कार्यशालाओं को क्या कहा जाता था?",
        "hinglish": "Mughal India me government workshops ko kya bola jata tha?"
      },
      "options": [
        {
          "english": "Karkhanas",
          "hindi": "कारखाने",
          "hinglish": "Karkhanas"
        },
        {
          "english": "Bazaars",
          "hindi": "बाज़ार",
          "hinglish": "Bazaars"
        },
        {
          "english": "Mandis",
          "hindi": "मंडी",
          "hinglish": "Mandis"
        },
        {
          "english": "Gilds",
          "hindi": "गिल्ड",
          "hinglish": "Gilds"
        }
      ],
      "answer": 0,
      "explanation": {
        "english": "Karkhanas were workshops where embroidery, gold work, and silk weaving were done under state control.",
        "hindi": "कारखाने वे कार्यशालाएं थीं जहां राज्य के नियंत्रण में कढ़ाई, सोने का काम और रेशम की बुनाई की जाती थी।",
        "hinglish": "Karkhanas me artisans gold embroidery aur silk items state control me banate the."
      }
    },
    "blank": {
      "question": {
        "english": "Artisans worked under the supervision of a state ______ in karkhanas.",
        "hindi": "कारीगर कारखानों में राज्य के ______ के पर्यवेक्षण में काम करते थे।",
        "hinglish": "Artisans karkhanas me government ______ ke under work karte the."
      },
      "answer": {
        "english": "inspector",
        "hindi": "निरीक्षक (इंस्पेक्टर)",
        "hinglish": "inspector"
      },
      "hint": {
        "english": "An official who checks quality and work hours.",
        "hindi": "एक अधिकारी जो काम के घंटों और गुणवत्ता की जाँच करता है।",
        "hinglish": "Officer jo quality check karta hai."
      }
    }
  },
  {
    "pageNo": 135,
    "title": "Social Conditions & Sati Practice",
    "originalText": "CITED FROM NCERT TEXTBOOK PAGE 135: Bernier described the cruel practice of Sati (immolation of widows). He recorded seeing young girls forced to burn on pyres. This textbook section outlines the observations of travellers in India.",
    "explanationEn": "### 📖 NCERT Page 135 • Social Conditions & Sati Practice\n\nObservations on women, slavery, and Sati.\n\n**Key Syllabus Concepts:**\n* Bernier described the cruel practice of Sati (immolation of widows)\n* He recorded seeing young girls forced to burn on pyres.\n\n* **Story Analogy**: A tragic historical custom recorded by a foreign doctor who felt heartbroken seeing a young girl forced to burn by her family.",
    "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 135 • सामाजिक स्थिति और सती प्रथा\n\n**मुख्य अवधारणा:**\nमहिलाओं, दास प्रथा और सती प्रथा पर अवलोकन।\n\n**मुख्य पाठ्यक्रम बिंदु:**\n* बर्नियर ने सती प्रथा (विधवाओं को जलाना) की क्रूर प्रथा का वर्णन किया। उन्होंने युवा लड़कियों को जबरन चिता पर जलते हुए देखने का रिकॉर्ड दर्ज किया।\n\n* **कहानी सादृश्य**: एक विदेशी चिकित्सक द्वारा दर्ज की गई एक दुखद ऐतिहासिक प्रथा, जिसका दिल यह देखकर टूट गया कि एक युवा लड़की को उसके परिवार द्वारा जलने के लिए मजबूर किया जा रहा है।",
    "explanationHinglish": "### 📖 NCERT Page 135 • Social Conditions aur Sati System\n\nIs page par hum seekhte hain: **Women status, slavery aur Sati system ka check.**\n\n**Yaad rakhne wali baatein:**\n* Bernier ne sati system ko bohot cruel bataya\n* Unhone ek choti girl ko forced sati hote hue dekhne ka painful incident likha hai.\n\n* **Story Analogy**: Ek dark historical truth jise ek foreign doctor ne hairat aur dukh ke sath record kiya.",
    "example": "For example: Bernier described the cruel practice of Sati (immolation of widows). This shows a practical historical scenario.",
    "mcq": {
      "question": {
        "english": "Which social practice of immolating widows was described in detail by Bernier?",
        "hindi": "बर्नियर द्वारा विधवाओं को आत्मदाह करने की किस सामाजिक प्रथा का विस्तार से वर्णन किया गया था?",
        "hinglish": "Bernier ne kis evil practice ke baare me detail me bataya?"
      },
      "options": [
        {
          "english": "Child Marriage",
          "hindi": "बाल विवाह",
          "hinglish": "Child Marriage"
        },
        {
          "english": "Sati System",
          "hindi": "सती प्रथा",
          "hinglish": "Sati System"
        },
        {
          "english": "Dowry System",
          "hindi": "दहेज प्रथा",
          "hinglish": "Dowry System"
        },
        {
          "english": "Polygamy",
          "hindi": "बहुविवाह",
          "hinglish": "Polygamy"
        }
      ],
      "answer": 1,
      "explanation": {
        "english": "Bernier wrote emotional eyewitness descriptions of the Sati system, noting that some widows were forced onto pyres by relatives.",
        "hindi": "बर्नियर ने सती प्रथा के भावनात्मक प्रत्यक्षदर्शी विवरण लिखे, यह नोट किया कि कुछ विधवाओं को उनके रिश्तेदारों द्वारा जबरन चिता पर बैठाया जाता था।",
        "hinglish": "Bernier ne bataya ki kai baar widows ko relatives zabardasti chita par bitha dete the."
      }
    },
    "blank": {
      "question": {
        "english": "Bernier described seeing a child widow of only ______ years old forced to undergo Sati.",
        "hindi": "बर्नियर ने केवल ______ वर्ष की एक बाल विधवा को सती होने के लिए मजबूर होते देखने का वर्णन किया।",
        "hinglish": "Bernier ne bataya ki unhone sirf ______ saal ki ek child widow ko forced Sati hote dekha."
      },
      "answer": {
        "english": "twelve",
        "hindi": "बारह",
        "hinglish": "twelve"
      },
      "hint": {
        "english": "Two years older than ten.",
        "hindi": "दस से दो साल बड़ी।",
        "hinglish": "10 se 2 saal badi."
      }
    }
  }
];

export default function Page() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:history-12-chapter-5';
  const isChapterCompleted = !!completedChapters[progressKey];

  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedMcqOpt, setSelectedMcqOpt] = useState<number | null>(null);
  const [revealBlankAnswer, setRevealBlankAnswer] = useState(false);
  const [showBlankHint, setShowBlankHint] = useState(false);
  const [explanationLang, setExplanationLang] = useState<'en' | 'hi' | 'hinglish'>('hinglish');

  const activeLesson = LESSONS[activeIdx];

  const handlePageChange = (idx: number) => {
    if (idx < 0 || idx >= LESSONS.length) return;
    setActiveIdx(idx);
    setSelectedMcqOpt(null);
    setRevealBlankAnswer(false);
    setShowBlankHint(false);
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

  const getLangValue = (val: { english: string; hindi: string; hinglish: string }) => {
    if (!val) return "";
    return val[explanationLang === 'hi' ? 'hindi' : explanationLang === 'en' ? 'english' : 'hinglish'] || val.english || "";
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30 relative">
      {/* Ambient background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-indigo-950/10 blur-[140px] pointer-events-none z-0" />

      {/* Header bar */}
      <header className="h-16 border-b border-slate-850/50 bg-slate-950/85 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <Link 
          href="/ncert" 
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to NCERT Hub</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <BookOpen size={14} className="text-indigo-400" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider text-indigo-300 font-outfit">Class 12 History</span>
        </div>
      </header>

      {/* Main Single Column Layout */}
      <main className="flex-1 w-full max-w-[900px] mx-auto px-4 py-8 space-y-6 z-10">
        
        {/* Top Banner Ad */}
        <div className="w-full shrink-0">
          <AdSenseBanner key={'top-ad-' + activeIdx} />
        </div>

        {/* Page / Lesson Pills Horizontal Scroll */}
        <div className="space-y-2 select-none">
          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block font-outfit">Jump to NCERT Page</span>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            {LESSONS.map((lesson, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx)}
                className={'px-3 py-1.5 rounded-lg border text-[11px] font-bold tracking-wide transition-all shrink-0 cursor-pointer ' + (
                  activeIdx === idx 
                    ? 'bg-indigo-650 border-indigo-500 text-white font-black'
                    : 'bg-slate-900/40 border-slate-855 text-slate-400 hover:text-white hover:bg-slate-900/70'
                )}
              >
                P{lesson.pageNo}
              </button>
            ))}
          </div>
        </div>

        {/* Chapter title & explanation header */}
        <section className="text-left shrink-0 font-outfit">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/20 text-[#c084fc] text-[10px] font-black uppercase tracking-widest mb-2">
            <Sparkles size={12} />
            Bilingual Explanation Edition
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none mb-1">
            Through the Eyes of Travellers
          </h1>
          <p className="text-slate-400 text-xs">
            Page Lesson {activeIdx + 1}: {activeLesson.title}
          </p>
        </section>

        {/* 1. Page Quote Box (10 Sentences from PDF) */}
        <div className="bg-[#121217]/50 border border-slate-855 rounded-[24px] p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-3 py-1 bg-slate-900 border-l border-b border-slate-850 rounded-bl-lg text-[8px] font-mono text-slate-550">
            PDF Page {activeLesson.pageNo} Quote
          </div>
          <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block mb-2.5 font-outfit">10 Sentences from PDF</span>
          <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed font-serif italic select-text border-l-2 border-indigo-500/30 pl-3.5 py-0.5">
            &ldquo;{activeLesson.originalText}&rdquo;
          </p>
        </div>

        {/* 2. Kid-Friendly Explanation Pane (Trilingual Tabs) */}
        <div className="bg-slate-950/70 border border-slate-855 rounded-[24px] overflow-hidden">
          {/* Language Switcher Tabs */}
          <div className="flex border-b border-slate-850 bg-[#0d0d14]/70 p-1.5 gap-1 select-none font-outfit">
            <button
              onClick={() => setExplanationLang('hinglish')}
              className={'flex-1 px-4 py-2 rounded-lg text-xs font-black tracking-wide transition-all cursor-pointer ' + (
                explanationLang === 'hinglish'
                  ? 'bg-[#04AA6D] text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
              )}
            >
              🗣️ Hinglish
            </button>
            <button
              onClick={() => setExplanationLang('en')}
              className={'flex-1 px-4 py-2 rounded-lg text-xs font-black tracking-wide transition-all cursor-pointer ' + (
                explanationLang === 'en'
                  ? 'bg-[#04AA6D] text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
              )}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => setExplanationLang('hi')}
              className={'flex-1 px-4 py-2 rounded-lg text-xs font-black tracking-wide transition-all cursor-pointer ' + (
                explanationLang === 'hi'
                  ? 'bg-[#04AA6D] text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
              )}
            >
              🇮🇳 हिंदी
            </button>
          </div>

          {/* Active Explanation Content */}
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-1.5 font-outfit">
              <span className="text-base">🧸</span>
              <span className="text-[10px] font-black text-emerald-450 uppercase tracking-wider">
                {explanationLang === 'hi' ? 'कक्षा ६ के स्तर की सरल व्याख्या' : explanationLang === 'en' ? '6th Standard Explanation' : 'Easy Hinglish Explanation'}
              </span>
            </div>
            <div className="prose prose-invert max-w-none text-left text-sm md:text-[15px] text-slate-200 leading-relaxed font-sans font-medium space-y-2">
              {getActiveExplanation().split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={pIdx} className="text-md md:text-lg font-black text-slate-100 mt-4 mb-2 flex items-center gap-1.5 border-b border-slate-800/40 pb-1 font-outfit">
                      <span className="text-[#04AA6D]">#</span>
                      {paragraph.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (paragraph.startsWith('* ')) {
                  return (
                    <ul key={pIdx} className="space-y-1 my-2">
                      {paragraph.split('\n').map((li, lIdx) => (
                        <li key={lIdx} className="list-disc ml-5 text-xs md:text-sm text-slate-350 leading-relaxed">
                          {li.replace('* ', '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={pIdx} className="my-2.5 text-slate-350">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Real-life Example */}
        <div className="bg-[#a855f7]/5 border border-[#a855f7]/20 rounded-[20px] p-5 space-y-1.5">
          <div className="flex items-center gap-1.5 font-outfit">
            <span className="text-xs">💡</span>
            <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest">Real-Life Example</span>
          </div>
          <p className="text-xs md:text-[13px] text-slate-300 leading-relaxed font-sans font-semibold">
            {activeLesson.example}
          </p>
        </div>

        {/* 4. Interactive Exercises Check Box */}
        <div className="bg-[#0b0f19] border border-slate-800/60 rounded-2xl overflow-hidden shadow-2xl text-left space-y-6 p-6">
          <div className="border-b border-slate-850 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HelpCircle size={16} className="text-indigo-400" />
              <span className="text-xs font-black uppercase tracking-wider text-slate-200">Interactive Lesson Check</span>
            </div>
            {selectedMcqOpt === activeLesson.mcq.answer && (
              <span className="text-[9px] font-black uppercase tracking-wider text-emerald-450 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1 animate-pulse">
                <Sparkles size={9} />
                <span>+10 XP Earned</span>
              </span>
            )}
          </div>

          {/* Drill A: MCQ */}
          <div className="space-y-4">
            <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block font-outfit">Drill 1: Multiple Choice Question</span>
            <h4 className="text-sm font-bold text-slate-100 leading-snug">
              {getLangValue(activeLesson.mcq.question)}
            </h4>

            <div className="grid grid-cols-1 gap-2.5">
              {activeLesson.mcq.options.map((opt, oIdx) => {
                const isChosen = selectedMcqOpt === oIdx;
                const isCorrect = oIdx === activeLesson.mcq.answer;
                
                let btnStyle = "bg-slate-950/50 border-slate-850 text-slate-355 hover:bg-slate-900 hover:text-white";
                if (selectedMcqOpt !== null) {
                  if (isChosen) {
                    btnStyle = isCorrect 
                      ? "bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_8px_rgba(52,211,153,0.2)]"
                      : "bg-rose-950/80 border-rose-500 text-rose-300 font-bold shadow-[0_0_8px_rgba(239,68,68,0.2)]";
                  } else if (isCorrect) {
                    btnStyle = "bg-emerald-950/20 border-emerald-500/40 text-emerald-400";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    disabled={selectedMcqOpt !== null}
                    className={"w-full text-left p-3.5 border rounded-xl text-xs font-semibold leading-relaxed transition-all cursor-pointer " + btnStyle}
                  >
                    <span>{getLangValue(opt)}</span>
                  </button>
                );
              })}
            </div>

            {selectedMcqOpt !== null && (
              <div className="mt-3 p-4 bg-slate-900/40 border border-slate-800 rounded-xl animate-in fade-in duration-300">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#04AA6D] block mb-1">
                  {selectedMcqOpt === activeLesson.mcq.answer ? '🎉 Correct Answer!' : '❌ Let\'s Review:'}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  {getLangValue(activeLesson.mcq.explanation)}
                </p>
              </div>
            )}
          </div>

          <div className="border-t border-slate-855/60 pt-6 space-y-4">
            {/* Drill B: Fill in the Blanks */}
            <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block font-outfit">Drill 2: Fill in the Blank</span>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-bold">
              {getLangValue(activeLesson.blank.question)}
            </p>

            <div className="flex flex-wrap gap-2 items-center">
              <button
                onClick={() => setRevealBlankAnswer(!revealBlankAnswer)}
                className="px-4 py-2 bg-slate-950 border border-slate-850 hover:border-slate-700 text-[10px] text-indigo-400 hover:text-white font-bold rounded-lg cursor-pointer"
              >
                {revealBlankAnswer ? 'Answer: ' + getLangValue(activeLesson.blank.answer) : 'Reveal Answer'}
              </button>
              <button
                onClick={() => setShowBlankHint(!showBlankHint)}
                className="px-4 py-2 bg-slate-950 border border-slate-850 hover:border-slate-700 text-[10px] text-amber-500 hover:text-amber-450 font-bold rounded-lg cursor-pointer"
              >
                {showBlankHint ? 'Hint: ' + getLangValue(activeLesson.blank.hint) : 'Show Hint'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner Ad */}
        <div className="w-full shrink-0">
          <AdSenseBanner key={'bottom-ad-' + activeIdx} />
        </div>

        {/* Navigation between lessons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-850 shrink-0 font-outfit">
          <button
            onClick={() => handlePageChange(activeIdx - 1)}
            disabled={activeIdx === 0}
            className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center gap-1.5 transition-all"
          >
            <ChevronLeft size={14} /> Prev Page
          </button>
          <span className="text-xs text-slate-555 font-bold">
            Page Lesson {activeIdx + 1} of {LESSONS.length}
          </span>
          <button
            onClick={() => handlePageChange(activeIdx + 1)}
            disabled={activeIdx === LESSONS.length - 1}
            className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center gap-1.5 transition-all"
          >
            Next Page <ChevronRight size={14} />
          </button>
        </div>

        {/* Progress Completion Section */}
        <div className="bg-slate-950/80 border border-slate-850 rounded-[28px] p-6 text-center shrink-0 font-outfit">
          <h3 className="text-sm font-black text-white mb-1.5">Have you finished revising Chapter 5?</h3>
          <p className="text-xs text-slate-555 mb-4 font-semibold">Marking it completed will update your NCERT progress stats on the dashboard!</p>
          {isChapterCompleted ? (
            <button
              onClick={() => markIncomplete(progressKey)}
              className="px-6 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-450 hover:bg-emerald-500/15 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              <Check size={14} /> Chapter Completed
            </button>
          ) : (
            <button
              onClick={() => markCompleted(progressKey)}
              className="px-6 py-2.5 bg-indigo-650 hover:bg-indigo-600 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5"
            >
              Mark Chapter Completed
            </button>
          )}
        </div>

      </main>

      {/* Footer copyright */}
      <footer className="w-full py-6 text-center text-[10px] text-slate-700 border-t border-white/5 select-none shrink-0 font-outfit">
        © 2026 Nextsem Academy · NCERT Study Companion
      </footer>
    </div>
  );
}
