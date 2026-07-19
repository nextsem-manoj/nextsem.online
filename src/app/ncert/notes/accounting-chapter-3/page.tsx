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
  "pageNo": 46,
  "title": "Business Transactions & Source Documents",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 46: Every business transaction must have documentary evidence. Cash memos are for cash transactions; invoices are for credit sales. This textbook section outlines the core principles of Business Transactions & Source Documents. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 46 · Business Transactions & Source Documents\n\nIdentifying transactions and source documents like Cash Memo and Bills.\n\n**Key Syllabus Concepts:**\n* Every business transaction must have documentary evidence\n* Cash memos are for cash transactions; invoices are for credit sales.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 46 · Business Transactions & Source Documents\n\n**मुख्य अवधारणा:**\nIdentifying transactions and source documents like Cash Memo and Bills.\n\n**महत्वपूर्ण बिंदु:**\n* Every business transaction must have documentary evidence. Cash memos are for cash transactions; invoices are for credit sales.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 46 · Business Transactions & Source Documents\n\nIs page par hum seekhte hain: **Identifying transactions and source documents like Cash Memo and Bills.**\n\n**Yaad rakhne wali baatein:**\n* Every business transaction must have documentary evidence. Cash memos are for cash transactions; invoices are for credit sales.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Every business transaction must have documentary evidence. This shows a practical application of the concept.",
  "mcq": {
    "question": "Which document acts as proof for cash sales?",
    "options": [
      "Cash Memo",
      "Invoice",
      "Receipt",
      "Pay-in-slip"
    ],
    "answer": 0,
    "explanation": "A Cash Memo is prepared by the seller when goods are sold for immediate cash payment."
  },
  "blank": {
    "question": "The first step in the accounting process is identifying transactions and preparing ______.",
    "answer": "source documents",
    "hint": "It's the receipt or bill from a store."
  }
},
{
  "pageNo": 47,
  "title": "Accounting Vouchers & Evidence",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 47: Vouchers are internal documents prepared by accountants and signed by authorized personnel. They specify which accounts to debit and credit. This textbook section outlines the core principles of Accounting Vouchers & Evidence. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 47 · Accounting Vouchers & Evidence\n\nPreparation of vouchers based on source documents.\n\n**Key Syllabus Concepts:**\n* Vouchers are internal documents prepared by accountants and signed by authorized personnel\n* They specify which accounts to debit and credit.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 47 · Accounting Vouchers & Evidence\n\n**मुख्य अवधारणा:**\nPreparation of vouchers based on source documents.\n\n**महत्वपूर्ण बिंदु:**\n* Vouchers are internal documents prepared by accountants and signed by authorized personnel. They specify which accounts to debit and credit.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 47 · Accounting Vouchers & Evidence\n\nIs page par hum seekhte hain: **Preparation of vouchers based on source documents.**\n\n**Yaad rakhne wali baatein:**\n* Vouchers are internal documents prepared by accountants and signed by authorized personnel. They specify which accounts to debit and credit.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Vouchers are internal documents prepared by accountants and signed by authorized personnel. This shows a practical application of the concept.",
  "mcq": {
    "question": "What document is used to authorize recording a transaction in the books?",
    "options": [
      "Invoice",
      "Voucher",
      "Ledger",
      "Balance Sheet"
    ],
    "answer": 1,
    "explanation": "Vouchers are prepared by the accountant to dictate and authorize the exact debit/credit entry in the journal."
  },
  "blank": {
    "question": "Vouchers are arranged in ______ order and serially numbered.",
    "answer": "chronological",
    "hint": "It means ordered by transaction date."
  }
},
{
  "pageNo": 48,
  "title": "Simple & Compound Vouchers",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 48: A simple voucher records one debit and one credit. A compound voucher records multiple debits/credits against a single credit/debit. This textbook section outlines the core principles of Simple & Compound Vouchers. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 48 · Simple & Compound Vouchers\n\nDifferentiating simple vouchers from compound vouchers.\n\n**Key Syllabus Concepts:**\n* A simple voucher records one debit and one credit\n* A compound voucher records multiple debits/credits against a single credit/debit.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 48 · Simple & Compound Vouchers\n\n**मुख्य अवधारणा:**\nDifferentiating simple vouchers from compound vouchers.\n\n**महत्वपूर्ण बिंदु:**\n* A simple voucher records one debit and one credit. A compound voucher records multiple debits/credits against a single credit/debit.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 48 · Simple & Compound Vouchers\n\nIs page par hum seekhte hain: **Differentiating simple vouchers from compound vouchers.**\n\n**Yaad rakhne wali baatein:**\n* A simple voucher records one debit and one credit. A compound voucher records multiple debits/credits against a single credit/debit.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: A simple voucher records one debit and one credit. This shows a practical application of the concept.",
  "mcq": {
    "question": "A debit voucher is prepared when there are:",
    "options": [
      "Multiple debits and single credit",
      "Multiple credits and single debit",
      "One debit and one credit",
      "No debits at all"
    ],
    "answer": 0,
    "explanation": "Debit vouchers are prepared for transactions involving multiple debit ledger accounts and a single credit account."
  },
  "blank": {
    "question": "A transaction with only one debit and one credit is a ______ transaction.",
    "answer": "simple",
    "hint": "It is the opposite of compound."
  }
},
{
  "pageNo": 49,
  "title": "Complex Vouchers & Formats",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 49: Transactions with multiple debits and multiple credits are called complex transactions. They are recorded on Journal Vouchers. This textbook section outlines the core principles of Complex Vouchers & Formats. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 49 · Complex Vouchers & Formats\n\nStructure of complex (journal) vouchers.\n\n**Key Syllabus Concepts:**\n* Transactions with multiple debits and multiple credits are called complex transactions\n* They are recorded on Journal Vouchers.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 49 · Complex Vouchers & Formats\n\n**मुख्य अवधारणा:**\nStructure of complex (journal) vouchers.\n\n**महत्वपूर्ण बिंदु:**\n* Transactions with multiple debits and multiple credits are called complex transactions. They are recorded on Journal Vouchers.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 49 · Complex Vouchers & Formats\n\nIs page par hum seekhte hain: **Structure of complex (journal) vouchers.**\n\n**Yaad rakhne wali baatein:**\n* Transactions with multiple debits and multiple credits are called complex transactions. They are recorded on Journal Vouchers.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Transactions with multiple debits and multiple credits are called complex transactions. This shows a practical application of the concept.",
  "mcq": {
    "question": "Vouchers are printed on different colored papers to:",
    "options": [
      "Make them look pretty",
      "Distinguish between different voucher types",
      "Save ink costs",
      "Satisfy audit rules"
    ],
    "answer": 1,
    "explanation": "Using different color papers helps accountants instantly distinguish debit vouchers, credit vouchers, and journal vouchers."
  },
  "blank": {
    "question": "Vouchers must be authorized by a ______ before recording.",
    "answer": "manager",
    "hint": "The boss or supervisor of the accounting team."
  }
},
{
  "pageNo": 50,
  "title": "The Accounting Equation",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 50: Assets of a business are always equal to the sum of its liabilities and capital. Capital is the owner's claim, liabilities are outsider claims. This textbook section outlines the core principles of The Accounting Equation. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 50 · The Accounting Equation\n\nThe fundamental balance sheet equation (A = L + C).\n\n**Key Syllabus Concepts:**\n* Assets of a business are always equal to the sum of its liabilities and capital\n* Capital is the owner's claim, liabilities are outsider claims.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 50 · The Accounting Equation\n\n**मुख्य अवधारणा:**\nThe fundamental balance sheet equation (A = L + C).\n\n**महत्वपूर्ण बिंदु:**\n* Assets of a business are always equal to the sum of its liabilities and capital. Capital is the owner's claim, liabilities are outsider claims.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 50 · The Accounting Equation\n\nIs page par hum seekhte hain: **The fundamental balance sheet equation (A = L + C).**\n\n**Yaad rakhne wali baatein:**\n* Assets of a business are always equal to the sum of its liabilities and capital. Capital is the owner's claim, liabilities are outsider claims.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Assets of a business are always equal to the sum of its liabilities and capital. This shows a practical application of the concept.",
  "mcq": {
    "question": "If assets are ₹10,000 and liabilities are ₹3,000, what is capital?",
    "options": [
      "₹13,000",
      "₹7,000",
      "₹3,000",
      "₹10,000"
    ],
    "answer": 1,
    "explanation": "Using the derivative Capital = Assets - Liabilities: ₹10,000 - ₹3,000 = ₹7,000."
  },
  "blank": {
    "question": "The accounting equation is also known as the ______ Sheet Equation.",
    "answer": "Balance",
    "hint": "The statement showing financial position of a firm."
  }
},
{
  "pageNo": 51,
  "title": "Equation Effects: Assets & Liabilities",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 51: Purchasing machinery for cash increases one asset (machinery) and decreases another (cash). Purchasing on credit increases an asset and a liability. This textbook section outlines the core principles of Equation Effects: Assets & Liabilities. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 51 · Equation Effects: Assets & Liabilities\n\nHow transactions change assets and liabilities.\n\n**Key Syllabus Concepts:**\n* Purchasing machinery for cash increases one asset (machinery) and decreases another (cash)\n* Purchasing on credit increases an asset and a liability.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 51 · Equation Effects: Assets & Liabilities\n\n**मुख्य अवधारणा:**\nHow transactions change assets and liabilities.\n\n**महत्वपूर्ण बिंदु:**\n* Purchasing machinery for cash increases one asset (machinery) and decreases another (cash). Purchasing on credit increases an asset and a liability.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 51 · Equation Effects: Assets & Liabilities\n\nIs page par hum seekhte hain: **How transactions change assets and liabilities.**\n\n**Yaad rakhne wali baatein:**\n* Purchasing machinery for cash increases one asset (machinery) and decreases another (cash). Purchasing on credit increases an asset and a liability.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Purchasing machinery for cash increases one asset (machinery) and decreases another (cash). This shows a practical application of the concept.",
  "mcq": {
    "question": "Purchasing goods on credit increases:",
    "options": [
      "Assets and Liabilities",
      "Assets and Capital",
      "Liabilities and Capital",
      "Only Assets"
    ],
    "answer": 0,
    "explanation": "Goods (Asset) increase, and Creditors (Liability) increase simultaneously, maintaining equation balance."
  },
  "blank": {
    "question": "Buying furniture for cash causes ______ in total assets.",
    "answer": "no change",
    "hint": "Think if one asset replaces another."
  }
},
{
  "pageNo": 52,
  "title": "Equation Effects: Revenues & Expenses",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 52: Revenues represent gains belonging to the owner, increasing Capital. Expenses are costs consumed, decreasing Capital. This textbook section outlines the core principles of Equation Effects: Revenues & Expenses. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 52 · Equation Effects: Revenues & Expenses\n\nRevenues increase capital; expenses decrease capital.\n\n**Key Syllabus Concepts:**\n* Revenues represent gains belonging to the owner, increasing Capital\n* Expenses are costs consumed, decreasing Capital.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 52 · Equation Effects: Revenues & Expenses\n\n**मुख्य अवधारणा:**\nRevenues increase capital; expenses decrease capital.\n\n**महत्वपूर्ण बिंदु:**\n* Revenues represent gains belonging to the owner, increasing Capital. Expenses are costs consumed, decreasing Capital.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 52 · Equation Effects: Revenues & Expenses\n\nIs page par hum seekhte hain: **Revenues increase capital; expenses decrease capital.**\n\n**Yaad rakhne wali baatein:**\n* Revenues represent gains belonging to the owner, increasing Capital. Expenses are costs consumed, decreasing Capital.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Revenues represent gains belonging to the owner, increasing Capital. This shows a practical application of the concept.",
  "mcq": {
    "question": "Paying rent of ₹1,000 will decrease:",
    "options": [
      "Cash and Liabilities",
      "Cash and Capital",
      "Capital and Liabilities",
      "Only Capital"
    ],
    "answer": 1,
    "explanation": "Rent is an expense. It reduces cash (asset) and decreases capital (owner's claim)."
  },
  "blank": {
    "question": "All business expenses ultimately ______ the owner's capital.",
    "answer": "decrease",
    "hint": "Opposite of increase."
  }
},
{
  "pageNo": 53,
  "title": "Accounting Equation Exercises",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 53: Every transaction, no matter how complex, keeps the accounting equation A = L + C in perfect balance. This textbook section outlines the core principles of Accounting Equation Exercises. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 53 · Accounting Equation Exercises\n\nComprehensive balance checks.\n\n**Key Syllabus Concepts:**\n* Every transaction, no matter how complex, keeps the accounting equation A = L + C in perfect balance.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 53 · Accounting Equation Exercises\n\n**मुख्य अवधारणा:**\nComprehensive balance checks.\n\n**महत्वपूर्ण बिंदु:**\n* Every transaction, no matter how complex, keeps the accounting equation A = L + C in perfect balance.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 53 · Accounting Equation Exercises\n\nIs page par hum seekhte hain: **Comprehensive balance checks.**\n\n**Yaad rakhne wali baatein:**\n* Every transaction, no matter how complex, keeps the accounting equation A = L + C in perfect balance.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Every transaction, no matter how complex, keeps the accounting equation A = L + C in perfect balance. This shows a practical application of the concept.",
  "mcq": {
    "question": "Owner withdrawing ₹5,000 cash for personal use decreases:",
    "options": [
      "Assets and Capital",
      "Assets and Liabilities",
      "Liabilities and Capital",
      "Only Capital"
    ],
    "answer": 0,
    "explanation": "Drawings decrease Cash (Asset) and decrease Capital (Owner's equity)."
  },
  "blank": {
    "question": "Proprietor's withdrawals for personal use are called ______.",
    "answer": "drawings",
    "hint": "It starts with the letter 'D'."
  }
},
{
  "pageNo": 54,
  "title": "Rules of Debit and Credit",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 54: Accounts have two sides. Left side is Debit (Dr.) and right side is Credit (Cr.). The rules depend on the category of the account. This textbook section outlines the core principles of Rules of Debit and Credit. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 54 · Rules of Debit and Credit\n\nIntroduction to debit/credit and T-accounts.\n\n**Key Syllabus Concepts:**\n* Accounts have two sides\n* Left side is Debit (Dr.) and right side is Credit (Cr.)\n* The rules depend on the category of the account.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 54 · Rules of Debit and Credit\n\n**मुख्य अवधारणा:**\nIntroduction to debit/credit and T-accounts.\n\n**महत्वपूर्ण बिंदु:**\n* Accounts have two sides. Left side is Debit (Dr.) and right side is Credit (Cr.). The rules depend on the category of the account.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 54 · Rules of Debit and Credit\n\nIs page par hum seekhte hain: **Introduction to debit/credit and T-accounts.**\n\n**Yaad rakhne wali baatein:**\n* Accounts have two sides. Left side is Debit (Dr.) and right side is Credit (Cr.). The rules depend on the category of the account.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Accounts have two sides. This shows a practical application of the concept.",
  "mcq": {
    "question": "In a T-account, which side represents the Debit side?",
    "options": [
      "Right side",
      "Left side",
      "Middle section",
      "Bottom row"
    ],
    "answer": 1,
    "explanation": "By convention, the left side of a T-account is designated as Debit and the right side is Credit."
  },
  "blank": {
    "question": "The abbreviation 'Cr.' stands for ______.",
    "answer": "credit",
    "hint": "Opposite of Debit."
  }
},
{
  "pageNo": 55,
  "title": "Debit & Credit: Assets & Expenses",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 55: Assets and expenses follow the same rules: Debited for increases, Credited for decreases. This textbook section outlines the core principles of Debit & Credit: Assets & Expenses. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 55 · Debit & Credit: Assets & Expenses\n\nRules for asset and expense accounts.\n\n**Key Syllabus Concepts:**\n* Assets and expenses follow the same rules: Debited for increases, Credited for decreases.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 55 · Debit & Credit: Assets & Expenses\n\n**मुख्य अवधारणा:**\nRules for asset and expense accounts.\n\n**महत्वपूर्ण बिंदु:**\n* Assets and expenses follow the same rules: Debited for increases, Credited for decreases.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 55 · Debit & Credit: Assets & Expenses\n\nIs page par hum seekhte hain: **Rules for asset and expense accounts.**\n\n**Yaad rakhne wali baatein:**\n* Assets and expenses follow the same rules: Debited for increases, Credited for decreases.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Assets and expenses follow the same rules: Debited for increases, Credited for decreases. This shows a practical application of the concept.",
  "mcq": {
    "question": "To record a decrease in Cash (Asset), you should:",
    "options": [
      "Debit it",
      "Credit it",
      "Ignore it",
      "Add it to capital"
    ],
    "answer": 1,
    "explanation": "Decreases in assets are recorded as credits."
  },
  "blank": {
    "question": "An increase in salary expense is recorded on the ______ side.",
    "answer": "debit",
    "hint": "Left side of the account."
  }
},
{
  "pageNo": 56,
  "title": "Debit & Credit: Liabilities, Capital & Revenue",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 56: Liabilities, Capital, and Revenues follow the opposite rules: Credited for increases, Debited for decreases. This textbook section outlines the core principles of Debit & Credit: Liabilities, Capital & Revenue. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 56 · Debit & Credit: Liabilities, Capital & Revenue\n\nRules for liability, capital, and revenue accounts.\n\n**Key Syllabus Concepts:**\n* Liabilities, Capital, and Revenues follow the opposite rules: Credited for increases, Debited for decreases.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 56 · Debit & Credit: Liabilities, Capital & Revenue\n\n**मुख्य अवधारणा:**\nRules for liability, capital, and revenue accounts.\n\n**महत्वपूर्ण बिंदु:**\n* Liabilities, Capital, and Revenues follow the opposite rules: Credited for increases, Debited for decreases.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 56 · Debit & Credit: Liabilities, Capital & Revenue\n\nIs page par hum seekhte hain: **Rules for liability, capital, and revenue accounts.**\n\n**Yaad rakhne wali baatein:**\n* Liabilities, Capital, and Revenues follow the opposite rules: Credited for increases, Debited for decreases.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Liabilities, Capital, and Revenues follow the opposite rules: Credited for increases, Debited for decreases. This shows a practical application of the concept.",
  "mcq": {
    "question": "An increase in bank loan (Liability) is recorded as a:",
    "options": [
      "Debit",
      "Credit",
      "Asset decrease",
      "Expense"
    ],
    "answer": 1,
    "explanation": "Increases in liabilities are always recorded as credits."
  },
  "blank": {
    "question": "A decrease in capital account is ______.",
    "answer": "debited",
    "hint": "Opposite of credited."
  }
},
{
  "pageNo": 57,
  "title": "Debit & Credit Illustrations",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 57: Analyzing double effects: determine which accounts are affected, classify them, and apply Dr./Cr. rules. This textbook section outlines the core principles of Debit & Credit Illustrations. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 57 · Debit & Credit Illustrations\n\nApplying debit/credit rules to transactions.\n\n**Key Syllabus Concepts:**\n* Analyzing double effects: determine which accounts are affected, classify them, and apply Dr./Cr\n* rules.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 57 · Debit & Credit Illustrations\n\n**मुख्य अवधारणा:**\nApplying debit/credit rules to transactions.\n\n**महत्वपूर्ण बिंदु:**\n* Analyzing double effects: determine which accounts are affected, classify them, and apply Dr./Cr. rules.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 57 · Debit & Credit Illustrations\n\nIs page par hum seekhte hain: **Applying debit/credit rules to transactions.**\n\n**Yaad rakhne wali baatein:**\n* Analyzing double effects: determine which accounts are affected, classify them, and apply Dr./Cr. rules.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Analyzing double effects: determine which accounts are affected, classify them, and apply Dr. This shows a practical application of the concept.",
  "mcq": {
    "question": "Goods worth ₹10,000 purchased for cash affects which accounts?",
    "options": [
      "Cash and Purchases",
      "Cash and Creditors",
      "Purchases and Creditors",
      "Capital and Cash"
    ],
    "answer": 0,
    "explanation": "Purchases (Expense increases, Debit) and Cash (Asset decreases, Credit) are affected."
  },
  "blank": {
    "question": "Purchasing furniture on credit affects Furniture and ______.",
    "answer": "creditors",
    "hint": "Suppliers who sell goods to us on credit."
  }
},
{
  "pageNo": 58,
  "title": "Ledger Account Layouts",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 58: Accounts display transaction date, particulars, journal folio reference, and numerical amounts on both Dr. and Cr. columns. This textbook section outlines the core principles of Ledger Account Layouts. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 58 · Ledger Account Layouts\n\nStandard double-entry account cards.\n\n**Key Syllabus Concepts:**\n* Accounts display transaction date, particulars, journal folio reference, and numerical amounts on both Dr\n* and Cr\n* columns.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 58 · Ledger Account Layouts\n\n**मुख्य अवधारणा:**\nStandard double-entry account cards.\n\n**महत्वपूर्ण बिंदु:**\n* Accounts display transaction date, particulars, journal folio reference, and numerical amounts on both Dr. and Cr. columns.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 58 · Ledger Account Layouts\n\nIs page par hum seekhte hain: **Standard double-entry account cards.**\n\n**Yaad rakhne wali baatein:**\n* Accounts display transaction date, particulars, journal folio reference, and numerical amounts on both Dr. and Cr. columns.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Accounts display transaction date, particulars, journal folio reference, and numerical amounts on both Dr. This shows a practical application of the concept.",
  "mcq": {
    "question": "Which column references the page number of the journal?",
    "options": [
      "Particulars",
      "Journal Folio (J.F.)",
      "Amount",
      "Ledger Folio"
    ],
    "answer": 1,
    "explanation": "Journal Folio (J.F.) column records the page number of the original journal entry where the transaction was first recorded."
  },
  "blank": {
    "question": "The left side of a ledger account is the ______ side.",
    "answer": "debit",
    "hint": "Abbreviated as Dr."
  }
},
{
  "pageNo": 59,
  "title": "Double Entry System Analysis",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 59: The double entry system requires that every transaction affects at least two accounts. Total debits must equal total credits. This textbook section outlines the core principles of Double Entry System Analysis. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 59 · Double Entry System Analysis\n\nAnalyzing accounts using the modern system.\n\n**Key Syllabus Concepts:**\n* The double entry system requires that every transaction affects at least two accounts\n* Total debits must equal total credits.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 59 · Double Entry System Analysis\n\n**मुख्य अवधारणा:**\nAnalyzing accounts using the modern system.\n\n**महत्वपूर्ण बिंदु:**\n* The double entry system requires that every transaction affects at least two accounts. Total debits must equal total credits.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 59 · Double Entry System Analysis\n\nIs page par hum seekhte hain: **Analyzing accounts using the modern system.**\n\n**Yaad rakhne wali baatein:**\n* The double entry system requires that every transaction affects at least two accounts. Total debits must equal total credits.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: The double entry system requires that every transaction affects at least two accounts. This shows a practical application of the concept.",
  "mcq": {
    "question": "The double-entry system was first documented by:",
    "options": [
      "Luca Pacioli",
      "Adam Smith",
      "John Maynard Keynes",
      "F.W. Taylor"
    ],
    "answer": 0,
    "explanation": "Luca Pacioli, a Franciscan friar, documented double-entry bookkeeping in Venice in 1494."
  },
  "blank": {
    "question": "In double entry, every debit must have a corresponding ______.",
    "answer": "credit",
    "hint": "The right-hand entry rule."
  }
},
{
  "pageNo": 60,
  "title": "Ledger Balancing Concepts",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 60: At the end of a period, the difference between total debits and total credits is computed to find the account balance. This textbook section outlines the core principles of Ledger Balancing Concepts. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 60 · Ledger Balancing Concepts\n\nIntroduction to finding ledger balances.\n\n**Key Syllabus Concepts:**\n* At the end of a period, the difference between total debits and total credits is computed to find the account balance.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 60 · Ledger Balancing Concepts\n\n**मुख्य अवधारणा:**\nIntroduction to finding ledger balances.\n\n**महत्वपूर्ण बिंदु:**\n* At the end of a period, the difference between total debits and total credits is computed to find the account balance.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 60 · Ledger Balancing Concepts\n\nIs page par hum seekhte hain: **Introduction to finding ledger balances.**\n\n**Yaad rakhne wali baatein:**\n* At the end of a period, the difference between total debits and total credits is computed to find the account balance.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: At the end of a period, the difference between total debits and total credits is computed to find the account balance. This shows a practical application of the concept.",
  "mcq": {
    "question": "If total debits of cash are ₹15,000 and total credits are ₹12,000, what is the balance?",
    "options": [
      "₹3,000 Debit balance",
      "₹3,000 Credit balance",
      "₹27,000 total",
      "₹12,000 balance"
    ],
    "answer": 0,
    "explanation": "Debits exceed credits by ₹3,000, leaving a debit balance."
  },
  "blank": {
    "question": "When debits exceed credits, the account shows a ______ balance.",
    "answer": "debit",
    "hint": "The side with the larger total."
  }
},
{
  "pageNo": 61,
  "title": "The Journal Overview",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 61: The Journal is the book of original entry. Columns: Date, Particulars, L.F., Debit Amount, Credit Amount. This textbook section outlines the core principles of The Journal Overview. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 61 · The Journal Overview\n\nStructure and columns of the Journal.\n\n**Key Syllabus Concepts:**\n* The Journal is the book of original entry\n* Columns: Date, Particulars, L.F., Debit Amount, Credit Amount.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 61 · The Journal Overview\n\n**मुख्य अवधारणा:**\nStructure and columns of the Journal.\n\n**महत्वपूर्ण बिंदु:**\n* The Journal is the book of original entry. Columns: Date, Particulars, L.F., Debit Amount, Credit Amount.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 61 · The Journal Overview\n\nIs page par hum seekhte hain: **Structure and columns of the Journal.**\n\n**Yaad rakhne wali baatein:**\n* The Journal is the book of original entry. Columns: Date, Particulars, L.F., Debit Amount, Credit Amount.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: The Journal is the book of original entry. This shows a practical application of the concept.",
  "mcq": {
    "question": "Which book is known as the book of original entry?",
    "options": [
      "Ledger",
      "Journal",
      "Trial Balance",
      "Cash Book"
    ],
    "answer": 1,
    "explanation": "Transactions are first recorded chronologically in the Journal before posting."
  },
  "blank": {
    "question": "L.F. in the journal stands for ______ Folio.",
    "answer": "Ledger",
    "hint": "It links the entry to the page in the ledger book."
  }
},
{
  "pageNo": 62,
  "title": "Recording Journal Entries",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 62: Debited account is written first. Credited account is indented on the next line prefixed with 'To'. A narration explains the entry. This textbook section outlines the core principles of Recording Journal Entries. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 62 · Recording Journal Entries\n\nWriting journal entries with narrations.\n\n**Key Syllabus Concepts:**\n* Debited account is written first\n* Credited account is indented on the next line prefixed with 'To'\n* A narration explains the entry.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 62 · Recording Journal Entries\n\n**मुख्य अवधारणा:**\nWriting journal entries with narrations.\n\n**महत्वपूर्ण बिंदु:**\n* Debited account is written first. Credited account is indented on the next line prefixed with 'To'. A narration explains the entry.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 62 · Recording Journal Entries\n\nIs page par hum seekhte hain: **Writing journal entries with narrations.**\n\n**Yaad rakhne wali baatein:**\n* Debited account is written first. Credited account is indented on the next line prefixed with 'To'. A narration explains the entry.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Debited account is written first. This shows a practical application of the concept.",
  "mcq": {
    "question": "The brief explanation written below each journal entry is called a:",
    "options": [
      "Summary",
      "Narration",
      "Annotation",
      "Footnote"
    ],
    "answer": 1,
    "explanation": "A narration is a brief description of the transaction recorded in the entry, starting with 'Being...'."
  },
  "blank": {
    "question": "The credited account in a journal entry is prefixed with the word ______.",
    "answer": "To",
    "hint": "A two-letter word."
  }
},
{
  "pageNo": 63,
  "title": "Journalizing Cash Transactions",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 63: Cash receipts are debited to Cash. Cash payments are credited to Cash. This textbook section outlines the core principles of Journalizing Cash Transactions. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 63 · Journalizing Cash Transactions\n\nDrafting cash entries.\n\n**Key Syllabus Concepts:**\n* Cash receipts are debited to Cash\n* Cash payments are credited to Cash.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 63 · Journalizing Cash Transactions\n\n**मुख्य अवधारणा:**\nDrafting cash entries.\n\n**महत्वपूर्ण बिंदु:**\n* Cash receipts are debited to Cash. Cash payments are credited to Cash.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 63 · Journalizing Cash Transactions\n\nIs page par hum seekhte hain: **Drafting cash entries.**\n\n**Yaad rakhne wali baatein:**\n* Cash receipts are debited to Cash. Cash payments are credited to Cash.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Cash receipts are debited to Cash. This shows a practical application of the concept.",
  "mcq": {
    "question": "Journal entry for Rent paid in Cash is:",
    "options": [
      "Rent A/c Dr. to Cash A/c",
      "Cash A/c Dr. to Rent A/c",
      "Rent A/c Dr. to Capital A/c",
      "Capital A/c Dr. to Rent A/c"
    ],
    "answer": 0,
    "explanation": "Rent (Expense, Debit) and Cash (Asset decreases, Credit) is the correct entry."
  },
  "blank": {
    "question": "Receiving cash from a debtor is journalized as Cash A/c Dr. to ______ A/c.",
    "answer": "Debtor",
    "hint": "The customer who owed us money."
  }
},
{
  "pageNo": 64,
  "title": "Journalizing Credit Transactions",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 64: Credit purchases are debited to Purchases and credited to Creditors. Credit sales are debited to Debtors and credited to Sales. This textbook section outlines the core principles of Journalizing Credit Transactions. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 64 · Journalizing Credit Transactions\n\nDrafting credit purchases and sales.\n\n**Key Syllabus Concepts:**\n* Credit purchases are debited to Purchases and credited to Creditors\n* Credit sales are debited to Debtors and credited to Sales.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 64 · Journalizing Credit Transactions\n\n**मुख्य अवधारणा:**\nDrafting credit purchases and sales.\n\n**महत्वपूर्ण बिंदु:**\n* Credit purchases are debited to Purchases and credited to Creditors. Credit sales are debited to Debtors and credited to Sales.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 64 · Journalizing Credit Transactions\n\nIs page par hum seekhte hain: **Drafting credit purchases and sales.**\n\n**Yaad rakhne wali baatein:**\n* Credit purchases are debited to Purchases and credited to Creditors. Credit sales are debited to Debtors and credited to Sales.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Credit purchases are debited to Purchases and credited to Creditors. This shows a practical application of the concept.",
  "mcq": {
    "question": "Purchasing goods from Amit on credit is journalized as:",
    "options": [
      "Purchases A/c Dr. to Cash A/c",
      "Purchases A/c Dr. to Amit A/c",
      "Amit A/c Dr. to Purchases A/c",
      "Cash A/c Dr. to Purchases A/c"
    ],
    "answer": 1,
    "explanation": "Since it is a credit purchase, Purchases is debited and Amit (Creditor) is credited."
  },
  "blank": {
    "question": "Selling goods on credit to Rohan is journalized as Rohan A/c Dr. to ______ A/c.",
    "answer": "Sales",
    "hint": "The revenue account for selling inventory."
  }
},
{
  "pageNo": 65,
  "title": "Journalizing Compound Entries",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 65: When multiple transactions of the same nature occur on the same day, they can be combined into one compound entry. This textbook section outlines the core principles of Journalizing Compound Entries. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 65 · Journalizing Compound Entries\n\nEntries with multiple debits or credits.\n\n**Key Syllabus Concepts:**\n* When multiple transactions of the same nature occur on the same day, they can be combined into one compound entry.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 65 · Journalizing Compound Entries\n\n**मुख्य अवधारणा:**\nEntries with multiple debits or credits.\n\n**महत्वपूर्ण बिंदु:**\n* When multiple transactions of the same nature occur on the same day, they can be combined into one compound entry.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 65 · Journalizing Compound Entries\n\nIs page par hum seekhte hain: **Entries with multiple debits or credits.**\n\n**Yaad rakhne wali baatein:**\n* When multiple transactions of the same nature occur on the same day, they can be combined into one compound entry.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: When multiple transactions of the same nature occur on the same day, they can be combined into one compound entry. This shows a practical application of the concept.",
  "mcq": {
    "question": "Paying salary ₹5,000 and wages ₹2,000 on the same day in cash is journalized as:",
    "options": [
      "Salary A/c Dr. 5,000, Wages A/c Dr. 2,000 to Cash A/c 7,000",
      "Cash A/c Dr. 7,000 to Salary A/c 5,000 to Wages A/c 2,000",
      "Salary A/c Dr. 5,000 to Cash A/c 5,000",
      "Wages A/c Dr. 2,000 to Cash A/c 2,000"
    ],
    "answer": 0,
    "explanation": "Both expenses are debited, and the total cash payment is credited in a single compound entry."
  },
  "blank": {
    "question": "Compound entries save space and time by reducing the number of ______ entries.",
    "answer": "journal",
    "hint": "Individual books records."
  }
},
{
  "pageNo": 66,
  "title": "Goods & Services Tax (GST)",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 66: GST is an indirect tax. CGST and SGST apply to intra-state sales. IGST applies to inter-state sales. This textbook section outlines the core principles of Goods & Services Tax (GST). The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 66 · Goods & Services Tax (GST)\n\nUnderstanding CGST, SGST, and IGST.\n\n**Key Syllabus Concepts:**\n* GST is an indirect tax\n* CGST and SGST apply to intra-state sales\n* IGST applies to inter-state sales.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 66 · Goods & Services Tax (GST)\n\n**मुख्य अवधारणा:**\nUnderstanding CGST, SGST, and IGST.\n\n**महत्वपूर्ण बिंदु:**\n* GST is an indirect tax. CGST and SGST apply to intra-state sales. IGST applies to inter-state sales.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 66 · Goods & Services Tax (GST)\n\nIs page par hum seekhte hain: **Understanding CGST, SGST, and IGST.**\n\n**Yaad rakhne wali baatein:**\n* GST is an indirect tax. CGST and SGST apply to intra-state sales. IGST applies to inter-state sales.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: GST is an indirect tax. This shows a practical application of the concept.",
  "mcq": {
    "question": "Which GST is charged on inter-state sales (between two states)?",
    "options": [
      "CGST",
      "SGST",
      "IGST",
      "UTGST"
    ],
    "answer": 2,
    "explanation": "Integrated GST (IGST) is levied on all supply of goods and services between states."
  },
  "blank": {
    "question": "For sales within the same state, tax is split equally into CGST and ______.",
    "answer": "SGST",
    "hint": "State level tax packet."
  }
},
{
  "pageNo": 67,
  "title": "Input vs. Output GST",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 67: Input GST (paid on purchases) is an asset. Output GST (collected on sales) is a liability. Input tax credit is offset against output tax. This textbook section outlines the core principles of Input vs. Output GST. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 67 · Input vs. Output GST\n\nGST adjustments and offsets.\n\n**Key Syllabus Concepts:**\n* Input GST (paid on purchases) is an asset\n* Output GST (collected on sales) is a liability\n* Input tax credit is offset against output tax.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 67 · Input vs. Output GST\n\n**मुख्य अवधारणा:**\nGST adjustments and offsets.\n\n**महत्वपूर्ण बिंदु:**\n* Input GST (paid on purchases) is an asset. Output GST (collected on sales) is a liability. Input tax credit is offset against output tax.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 67 · Input vs. Output GST\n\nIs page par hum seekhte hain: **GST adjustments and offsets.**\n\n**Yaad rakhne wali baatein:**\n* Input GST (paid on purchases) is an asset. Output GST (collected on sales) is a liability. Input tax credit is offset against output tax.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Input GST (paid on purchases) is an asset. This shows a practical application of the concept.",
  "mcq": {
    "question": "Input GST paid on purchases is classified as a/an:",
    "options": [
      "Expense",
      "Asset",
      "Liability",
      "Revenue"
    ],
    "answer": 1,
    "explanation": "Input GST is an asset because it is an input tax credit that can be used to reduce output tax liabilities."
  },
  "blank": {
    "question": "Output GST collected on sales is classified as a/an ______.",
    "answer": "liability",
    "hint": "Money we owe to the government."
  }
},
{
  "pageNo": 68,
  "title": "Journalizing GST Entries",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 68: Input CGST/SGST is debited alongside Purchases. Output CGST/SGST is credited alongside Sales. This textbook section outlines the core principles of Journalizing GST Entries. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 68 · Journalizing GST Entries\n\nDrafting GST purchases and sales entries.\n\n**Key Syllabus Concepts:**\n* Input CGST/SGST is debited alongside Purchases\n* Output CGST/SGST is credited alongside Sales.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 68 · Journalizing GST Entries\n\n**मुख्य अवधारणा:**\nDrafting GST purchases and sales entries.\n\n**महत्वपूर्ण बिंदु:**\n* Input CGST/SGST is debited alongside Purchases. Output CGST/SGST is credited alongside Sales.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 68 · Journalizing GST Entries\n\nIs page par hum seekhte hain: **Drafting GST purchases and sales entries.**\n\n**Yaad rakhne wali baatein:**\n* Input CGST/SGST is debited alongside Purchases. Output CGST/SGST is credited alongside Sales.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Input CGST/SGST is debited alongside Purchases. This shows a practical application of the concept.",
  "mcq": {
    "question": "Purchasing goods for cash with GST is journalized as:",
    "options": [
      "Purchases A/c Dr., Input GST A/c Dr. to Cash A/c",
      "Purchases A/c Dr. to Cash A/c, to Output GST A/c",
      "Cash A/c Dr. to Purchases A/c, to Input GST A/c",
      "Purchases A/c Dr. to Cash A/c"
    ],
    "answer": 0,
    "explanation": "Input GST is paid (debited) along with the purchase amount, and total cash is credited."
  },
  "blank": {
    "question": "Selling goods on credit with GST credits Sales and ______ GST accounts.",
    "answer": "Output",
    "hint": "Taxes collected from customers."
  }
},
{
  "pageNo": 69,
  "title": "GST Adjustment Entries",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 69: To pay the government, Output GST is debited, Input GST is credited, and the net balance is paid via Bank. This textbook section outlines the core principles of GST Adjustment Entries. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 69 · GST Adjustment Entries\n\nOffsets of input tax credit.\n\n**Key Syllabus Concepts:**\n* To pay the government, Output GST is debited, Input GST is credited, and the net balance is paid via Bank.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 69 · GST Adjustment Entries\n\n**मुख्य अवधारणा:**\nOffsets of input tax credit.\n\n**महत्वपूर्ण बिंदु:**\n* To pay the government, Output GST is debited, Input GST is credited, and the net balance is paid via Bank.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 69 · GST Adjustment Entries\n\nIs page par hum seekhte hain: **Offsets of input tax credit.**\n\n**Yaad rakhne wali baatein:**\n* To pay the government, Output GST is debited, Input GST is credited, and the net balance is paid via Bank.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: To pay the government, Output GST is debited, Input GST is credited, and the net balance is paid via Bank. This shows a practical application of the concept.",
  "mcq": {
    "question": "If Output GST is ₹5,000 and Input GST is ₹3,000, the net cash paid to government is:",
    "options": [
      "₹5,050",
      "₹2,000",
      "₹3,000",
      "₹8,000"
    ],
    "answer": 1,
    "explanation": "Net Tax Payable = Output GST - Input GST = ₹5,000 - ₹3,000 = ₹2,000."
  },
  "blank": {
    "question": "Input tax credit reduces the net tax ______ of a business.",
    "answer": "liability",
    "hint": "Money due to tax authorities."
  }
},
{
  "pageNo": 70,
  "title": "The Ledger Book",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 70: The Ledger is the principal book of accounts. It groups similar transactions together to show account balances. This textbook section outlines the core principles of The Ledger Book. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 70 · The Ledger Book\n\nUtility of Ledger Accounts.\n\n**Key Syllabus Concepts:**\n* The Ledger is the principal book of accounts\n* It groups similar transactions together to show account balances.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 70 · The Ledger Book\n\n**मुख्य अवधारणा:**\nUtility of Ledger Accounts.\n\n**महत्वपूर्ण बिंदु:**\n* The Ledger is the principal book of accounts. It groups similar transactions together to show account balances.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 70 · The Ledger Book\n\nIs page par hum seekhte hain: **Utility of Ledger Accounts.**\n\n**Yaad rakhne wali baatein:**\n* The Ledger is the principal book of accounts. It groups similar transactions together to show account balances.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: The Ledger is the principal book of accounts. This shows a practical application of the concept.",
  "mcq": {
    "question": "Which book is known as the principal book of accounts?",
    "options": [
      "Journal",
      "Ledger",
      "Cash Book",
      "Trial Balance"
    ],
    "answer": 1,
    "explanation": "The Ledger is the main book containing all the balanced accounts of a business."
  },
  "blank": {
    "question": "The process of transferring entries from the journal to the ledger is called ______.",
    "answer": "posting",
    "hint": "It starts with the letter 'P'."
  }
},
{
  "pageNo": 71,
  "title": "Ledger Format & T-Accounts",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 71: An account has a debit side (left) and credit side (right). Columns on each side: Date, Particulars, J.F., Amount. This textbook section outlines the core principles of Ledger Format & T-Accounts. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 71 · Ledger Format & T-Accounts\n\nVisual format of a ledger account.\n\n**Key Syllabus Concepts:**\n* An account has a debit side (left) and credit side (right)\n* Columns on each side: Date, Particulars, J.F., Amount.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 71 · Ledger Format & T-Accounts\n\n**मुख्य अवधारणा:**\nVisual format of a ledger account.\n\n**महत्वपूर्ण बिंदु:**\n* An account has a debit side (left) and credit side (right). Columns on each side: Date, Particulars, J.F., Amount.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 71 · Ledger Format & T-Accounts\n\nIs page par hum seekhte hain: **Visual format of a ledger account.**\n\n**Yaad rakhne wali baatein:**\n* An account has a debit side (left) and credit side (right). Columns on each side: Date, Particulars, J.F., Amount.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: An account has a debit side (left) and credit side (right). This shows a practical application of the concept.",
  "mcq": {
    "question": "What is written in the Particulars column of a ledger account?",
    "options": [
      "The name of the opposite account",
      "The transaction amount",
      "The page reference",
      "The date"
    ],
    "answer": 0,
    "explanation": "The Particulars column lists the name of the corresponding debit/credit account referenced in the original journal entry."
  },
  "blank": {
    "question": "J.F. in the ledger stands for ______ Folio.",
    "answer": "Journal",
    "hint": "It references the page in the journal book."
  }
},
{
  "pageNo": 72,
  "title": "Ledger Posting Rules",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 72: Debited accounts in the journal are posted to the Debit side of that ledger account with the prefix 'To'. Credited accounts are posted to the Credit side with the prefix 'By'. This textbook section outlines the core principles of Ledger Posting Rules. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 72 · Ledger Posting Rules\n\nTransferring debit/credit items.\n\n**Key Syllabus Concepts:**\n* Debited accounts in the journal are posted to the Debit side of that ledger account with the prefix 'To'\n* Credited accounts are posted to the Credit side with the prefix 'By'.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 72 · Ledger Posting Rules\n\n**मुख्य अवधारणा:**\nTransferring debit/credit items.\n\n**महत्वपूर्ण बिंदु:**\n* Debited accounts in the journal are posted to the Debit side of that ledger account with the prefix 'To'. Credited accounts are posted to the Credit side with the prefix 'By'.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 72 · Ledger Posting Rules\n\nIs page par hum seekhte hain: **Transferring debit/credit items.**\n\n**Yaad rakhne wali baatein:**\n* Debited accounts in the journal are posted to the Debit side of that ledger account with the prefix 'To'. Credited accounts are posted to the Credit side with the prefix 'By'.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Debited accounts in the journal are posted to the Debit side of that ledger account with the prefix 'To'. This shows a practical application of the concept.",
  "mcq": {
    "question": "When posting to the credit side of an account, what prefix is used?",
    "options": [
      "To",
      "By",
      "For",
      "Dr."
    ],
    "answer": 1,
    "explanation": "Items posted to the credit side of a ledger account are prefixed with the word 'By'."
  },
  "blank": {
    "question": "Items posted to the debit side of a ledger account are prefixed with ______.",
    "answer": "To",
    "hint": "Prefix for debit postings."
  }
},
{
  "pageNo": 73,
  "title": "Ledger Postings: Ledger Folio Linkage",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 73: Writing the ledger page number (L.F.) in the journal and the journal page number (J.F.) in the ledger creates a clear audit trail. This textbook section outlines the core principles of Ledger Postings: Ledger Folio Linkage. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 73 · Ledger Postings: Ledger Folio Linkage\n\nReferencing page indexes.\n\n**Key Syllabus Concepts:**\n* Writing the ledger page number (L.F.) in the journal and the journal page number (J.F.) in the ledger creates a clear audit trail.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 73 · Ledger Postings: Ledger Folio Linkage\n\n**मुख्य अवधारणा:**\nReferencing page indexes.\n\n**महत्वपूर्ण बिंदु:**\n* Writing the ledger page number (L.F.) in the journal and the journal page number (J.F.) in the ledger creates a clear audit trail.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 73 · Ledger Postings: Ledger Folio Linkage\n\nIs page par hum seekhte hain: **Referencing page indexes.**\n\n**Yaad rakhne wali baatein:**\n* Writing the ledger page number (L.F.) in the journal and the journal page number (J.F.) in the ledger creates a clear audit trail.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Writing the ledger page number (L. This shows a practical application of the concept.",
  "mcq": {
    "question": "Why do accountants write folio page numbers in books?",
    "options": [
      "To satisfy tax authorities",
      "To create a verifiable audit trail",
      "To calculate balances faster",
      "To record transactions chronologically"
    ],
    "answer": 1,
    "explanation": "Cross-referencing folio numbers provides proof that entries have been posted and creates an easy audit trail."
  },
  "blank": {
    "question": "Cross-referencing J.F. and L.F. prevents ______ of entries.",
    "answer": "omission",
    "hint": "Missing or skipping entries."
  }
},
{
  "pageNo": 74,
  "title": "Ledger Postings: Compound Entries",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 74: When posting compound entries, the accountant must post to multiple accounts, referencing the opposite joint accounts. This textbook section outlines the core principles of Ledger Postings: Compound Entries. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 74 · Ledger Postings: Compound Entries\n\nPosting compound journal entries.\n\n**Key Syllabus Concepts:**\n* When posting compound entries, the accountant must post to multiple accounts, referencing the opposite joint accounts.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 74 · Ledger Postings: Compound Entries\n\n**मुख्य अवधारणा:**\nPosting compound journal entries.\n\n**महत्वपूर्ण बिंदु:**\n* When posting compound entries, the accountant must post to multiple accounts, referencing the opposite joint accounts.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 74 · Ledger Postings: Compound Entries\n\nIs page par hum seekhte hain: **Posting compound journal entries.**\n\n**Yaad rakhne wali baatein:**\n* When posting compound entries, the accountant must post to multiple accounts, referencing the opposite joint accounts.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: When posting compound entries, the accountant must post to multiple accounts, referencing the opposite joint accounts. This shows a practical application of the concept.",
  "mcq": {
    "question": "When posting Salary and Wages compound entry, we post to the debit side of:",
    "options": [
      "Only Salary Account",
      "Only Wages Account",
      "Salary Account and Wages Account separately",
      "Cash Account only"
    ],
    "answer": 2,
    "explanation": "Each debited account (Salary and Wages) must be posted to separately in their respective ledger accounts."
  },
  "blank": {
    "question": "Compound entries must be split and posted into their respective ______ accounts.",
    "answer": "ledger",
    "hint": "T-shaped account cards."
  }
},
{
  "pageNo": 75,
  "title": "Balancing Ledger Accounts",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 75: Real and Personal accounts are balanced. The difference is added to the shorter side as 'Balance c/d' and brought down as 'Balance b/d' in the next period. This textbook section outlines the core principles of Balancing Ledger Accounts. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 75 · Balancing Ledger Accounts\n\nFinding balances for Real & Personal Accounts.\n\n**Key Syllabus Concepts:**\n* Real and Personal accounts are balanced\n* The difference is added to the shorter side as 'Balance c/d' and brought down as 'Balance b/d' in the next period.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 75 · Balancing Ledger Accounts\n\n**मुख्य अवधारणा:**\nFinding balances for Real & Personal Accounts.\n\n**महत्वपूर्ण बिंदु:**\n* Real and Personal accounts are balanced. The difference is added to the shorter side as 'Balance c/d' and brought down as 'Balance b/d' in the next period.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 75 · Balancing Ledger Accounts\n\nIs page par hum seekhte hain: **Finding balances for Real & Personal Accounts.**\n\n**Yaad rakhne wali baatein:**\n* Real and Personal accounts are balanced. The difference is added to the shorter side as 'Balance c/d' and brought down as 'Balance b/d' in the next period.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Real and Personal accounts are balanced. This shows a practical application of the concept.",
  "mcq": {
    "question": "What does 'c/d' stand for in ledger balancing?",
    "options": [
      "Carried down",
      "Credit debit",
      "Cash deposit",
      "Cleared debt"
    ],
    "answer": 0,
    "explanation": "c/d stands for 'carried down', representing the closing balance transferred to the next period."
  },
  "blank": {
    "question": "'b/d' in ledger balancing stands for ______ down.",
    "answer": "brought",
    "hint": "The balance brought from the previous period."
  }
},
{
  "pageNo": 76,
  "title": "Balancing Nominal Accounts",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 76: Nominal accounts (Revenues & Expenses) are not balanced at the end of the year; their totals are transferred directly to the Trading and Profit & Loss Account. This textbook section outlines the core principles of Balancing Nominal Accounts. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 76 · Balancing Nominal Accounts\n\nHandling revenues and expenses.\n\n**Key Syllabus Concepts:**\n* Nominal accounts (Revenues & Expenses) are not balanced at the end of the year; their totals are transferred directly to the Trading and Profit & Loss Account.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 76 · Balancing Nominal Accounts\n\n**मुख्य अवधारणा:**\nHandling revenues and expenses.\n\n**महत्वपूर्ण बिंदु:**\n* Nominal accounts (Revenues & Expenses) are not balanced at the end of the year; their totals are transferred directly to the Trading and Profit & Loss Account.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 76 · Balancing Nominal Accounts\n\nIs page par hum seekhte hain: **Handling revenues and expenses.**\n\n**Yaad rakhne wali baatein:**\n* Nominal accounts (Revenues & Expenses) are not balanced at the end of the year; their totals are transferred directly to the Trading and Profit & Loss Account.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Nominal accounts (Revenues & Expenses) are not balanced at the end of the year; their totals are transferred directly to the Trading and Profit & Loss Account. This shows a practical application of the concept.",
  "mcq": {
    "question": "Nominal accounts represent:",
    "options": [
      "Assets and Liabilities",
      "Revenues and Expenses",
      "Cash and Capital",
      "Bank and Creditors"
    ],
    "answer": 1,
    "explanation": "Nominal accounts represent expenses, losses, revenues, and gains."
  },
  "blank": {
    "question": "Nominal account balances are transferred to the Trading and Profit & ______ Account.",
    "answer": "Loss",
    "hint": "Opposite of profit."
  }
},
{
  "pageNo": 77,
  "title": "Introduction to Trial Balance",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 77: A Trial Balance is a statement prepared with the debit and credit balances of ledger accounts to test arithmetical accuracy. This textbook section outlines the core principles of Introduction to Trial Balance. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 77 · Introduction to Trial Balance\n\nPurpose and preparation of Trial Balance.\n\n**Key Syllabus Concepts:**\n* A Trial Balance is a statement prepared with the debit and credit balances of ledger accounts to test arithmetical accuracy.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 77 · Introduction to Trial Balance\n\n**मुख्य अवधारणा:**\nPurpose and preparation of Trial Balance.\n\n**महत्वपूर्ण बिंदु:**\n* A Trial Balance is a statement prepared with the debit and credit balances of ledger accounts to test arithmetical accuracy.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 77 · Introduction to Trial Balance\n\nIs page par hum seekhte hain: **Purpose and preparation of Trial Balance.**\n\n**Yaad rakhne wali baatein:**\n* A Trial Balance is a statement prepared with the debit and credit balances of ledger accounts to test arithmetical accuracy.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: A Trial Balance is a statement prepared with the debit and credit balances of ledger accounts to test arithmetical accuracy. This shows a practical application of the concept.",
  "mcq": {
    "question": "A Trial Balance is prepared to check:",
    "options": [
      "Absolute accuracy of books",
      "Arithmetical accuracy of ledger postings",
      "Cash flows",
      "Net profit of the firm"
    ],
    "answer": 1,
    "explanation": "The primary purpose of a Trial Balance is to check the mathematical / arithmetical accuracy of postings."
  },
  "blank": {
    "question": "If total debits equal total credits in a Trial Balance, it implies ______ accuracy.",
    "answer": "arithmetical",
    "hint": "Relating to simple math calculations."
  }
},
{
  "pageNo": 78,
  "title": "Trial Balance Formats & Agreement",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 78: Columns: Name of Account, L.F., Debit Balance, Credit Balance. Accounts showing debit balances are placed in the Debit column, and vice versa. This textbook section outlines the core principles of Trial Balance Formats & Agreement. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 78 · Trial Balance Formats & Agreement\n\nLayouts and balancing rules.\n\n**Key Syllabus Concepts:**\n* Columns: Name of Account, L.F., Debit Balance, Credit Balance\n* Accounts showing debit balances are placed in the Debit column, and vice versa.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 78 · Trial Balance Formats & Agreement\n\n**मुख्य अवधारणा:**\nLayouts and balancing rules.\n\n**महत्वपूर्ण बिंदु:**\n* Columns: Name of Account, L.F., Debit Balance, Credit Balance. Accounts showing debit balances are placed in the Debit column, and vice versa.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 78 · Trial Balance Formats & Agreement\n\nIs page par hum seekhte hain: **Layouts and balancing rules.**\n\n**Yaad rakhne wali baatein:**\n* Columns: Name of Account, L.F., Debit Balance, Credit Balance. Accounts showing debit balances are placed in the Debit column, and vice versa.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Columns: Name of Account, L. This shows a practical application of the concept.",
  "mcq": {
    "question": "Cash Account balance is placed in which column of the Trial Balance?",
    "options": [
      "Debit Balance column",
      "Credit Balance column",
      "Particulars column",
      "Ledger Folio column"
    ],
    "answer": 0,
    "explanation": "Cash is an asset and normally always has a debit balance, so it goes in the Debit column."
  },
  "blank": {
    "question": "Capital Account balance is placed in the ______ column of the Trial Balance.",
    "answer": "Credit",
    "hint": "The owner's equity balance column."
  }
},
{
  "pageNo": 79,
  "title": "Comprehensive Accounting Cycle",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 79: The cycle: Transactions -> Vouchers -> Journal -> Ledger -> Trial Balance -> Financial Statements. This textbook section outlines the core principles of Comprehensive Accounting Cycle. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 79 · Comprehensive Accounting Cycle\n\nSummarizing transaction to Trial Balance flow.\n\n**Key Syllabus Concepts:**\n* The cycle: Transactions -> Vouchers -> Journal -> Ledger -> Trial Balance -> Financial Statements.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 79 · Comprehensive Accounting Cycle\n\n**मुख्य अवधारणा:**\nSummarizing transaction to Trial Balance flow.\n\n**महत्वपूर्ण बिंदु:**\n* The cycle: Transactions -> Vouchers -> Journal -> Ledger -> Trial Balance -> Financial Statements.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 79 · Comprehensive Accounting Cycle\n\nIs page par hum seekhte hain: **Summarizing transaction to Trial Balance flow.**\n\n**Yaad rakhne wali baatein:**\n* The cycle: Transactions -> Vouchers -> Journal -> Ledger -> Trial Balance -> Financial Statements.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: The cycle: Transactions -> Vouchers -> Journal -> Ledger -> Trial Balance -> Financial Statements. This shows a practical application of the concept.",
  "mcq": {
    "question": "What is the final step in the accounting cycle before preparing financial statements?",
    "options": [
      "Journalizing",
      "Posting to Ledger",
      "Preparing Trial Balance",
      "Analyzing Transactions"
    ],
    "answer": 2,
    "explanation": "Preparing the Trial Balance summarizes all ledger balances, which are then used directly to prepare financial statements."
  },
  "blank": {
    "question": "The accounting cycle summarizes all business transactions in a ______ format.",
    "answer": "verifiable",
    "hint": "Capable of being checked or audited."
  }
},
{
  "pageNo": 80,
  "title": "Agreement of Trial Balance",
  "originalText": "CITED FROM NCERT TEXTBOOK PAGE 80: Agreement of Trial Balance proves that equal debits and credits have been posted. Errors that do not affect TB agreement must still be tracked down. This textbook section outlines the core principles of Agreement of Trial Balance. The first step in accounting requires identifying these entries.",
  "explanationEn": "### 📖 NCERT Page 80 · Agreement of Trial Balance\n\nFinal checks and suspense account overview.\n\n**Key Syllabus Concepts:**\n* Agreement of Trial Balance proves that equal debits and credits have been posted\n* Errors that do not affect TB agreement must still be tracked down.\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.",
  "explanationHi": "### 📖 एनसीईआरटी पृष्ठ 80 · Agreement of Trial Balance\n\n**मुख्य अवधारणा:**\nFinal checks and suspense account overview.\n\n**महत्वपूर्ण बिंदु:**\n* Agreement of Trial Balance proves that equal debits and credits have been posted. Errors that do not affect TB agreement must still be tracked down.\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।",
  "explanationHinglish": "### 📖 NCERT Page 80 · Agreement of Trial Balance\n\nIs page par hum seekhte hain: **Final checks and suspense account overview.**\n\n**Yaad rakhne wali baatein:**\n* Agreement of Trial Balance proves that equal debits and credits have been posted. Errors that do not affect TB agreement must still be tracked down.\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!",
  "example": "For example: Agreement of Trial Balance proves that equal debits and credits have been posted. This shows a practical application of the concept.",
  "mcq": {
    "question": "Which error will prevent a Trial Balance from balancing?",
    "options": [
      "Error of principle",
      "Omission of a transaction completely",
      "Compensating errors",
      "One-sided posting error"
    ],
    "answer": 3,
    "explanation": "Posting only one side of an entry (e.g. debiting cash but omitting credit) causes the Trial Balance to disagree."
  },
  "blank": {
    "question": "An agreed Trial Balance does not guarantee the absence of ______ errors.",
    "answer": "accounting",
    "hint": "Generic errors in principle or omissions."
  }
}
];

export default function RecordingTransactionsKidsPage() {
  const { completedChapters, markCompleted, markIncomplete } = useProgress();
  const progressKey = 'ncert_unit:accounting-chapter-3';
  const isChapterCompleted = !!completedChapters[progressKey];

  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedMcqOpt, setSelectedMcqOpt] = useState<number | null>(null);
  const [revealBlankAnswer, setRevealBlankAnswer] = useState(false);
  const [showBlankHint, setShowBlankHint] = useState(false);
  const [explanationLang, setExplanationLang] = useState<'en' | 'hi' | 'hinglish'>('hinglish');

  const activeLesson = LESSONS[activeIdx] || {
    pageNo: 46,
    title: "Loading...",
    originalText: "",
    explanationEn: "",
    explanationHi: "",
    explanationHinglish: "",
    example: "",
    mcq: { question: "", options: [], answer: 0, explanation: "" },
    blank: { question: "", answer: "", hint: "" }
  };

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
          <span className="text-xs font-black uppercase tracking-wider text-indigo-300 font-outfit">Class 11 Accountancy</span>
        </div>
      </header>

      {/* Main Single Column Layout */}
      {LESSONS.length > 0 ? (
        <main className="flex-1 w-full max-w-[900px] mx-auto px-4 py-8 space-y-6 z-10">
          
          {/* Top Banner Ad */}
          <div className="w-full shrink-0">
            <AdSenseBanner key={`top-ad-${activeIdx}`} />
          </div>

          {/* Page / Lesson Pills Horizontal Scroll */}
          <div className="space-y-2 select-none">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block font-outfit">Jump to NCERT Page</span>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {LESSONS.map((lesson, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx)}
                  className={`px-3 py-1.5 rounded-lg border text-[11px] font-bold tracking-wide transition-all shrink-0 cursor-pointer ${
                    activeIdx === idx 
                      ? 'bg-indigo-650 border-indigo-500 text-white font-black'
                      : 'bg-slate-900/40 border-slate-850 text-slate-400 hover:text-white hover:bg-slate-900/70'
                  }`}
                >
                  P{lesson.pageNo}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter title & explanation header */}
          <section className="text-left shrink-0 font-outfit">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 text-[10px] font-black uppercase tracking-widest mb-2">
              <Sparkles size={12} />
              Bilingual Explanation Edition
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight leading-none mb-1">
              Recording of Transactions-I
            </h1>
            <p className="text-slate-400 text-xs">
              Page Lesson {activeIdx + 1}: {activeLesson.title}
            </p>
          </section>

          {/* 1. Page Quote Box (10 Sentences from PDF) */}
          <div className="bg-[#121217]/50 border border-slate-850 rounded-[24px] p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-slate-900 border-l border-b border-slate-850 rounded-bl-lg text-[8px] font-mono text-slate-500">
              PDF Page {activeLesson.pageNo} Quote
            </div>
            <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block mb-2.5 font-outfit">10 Sentences from PDF</span>
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
                className={`flex-1 px-4 py-2 rounded-lg text-xs font-black tracking-wide transition-all cursor-pointer ${
                  explanationLang === 'hinglish'
                    ? 'bg-[#04AA6D] text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                🗣️ Hinglish
              </button>
              <button
                onClick={() => setExplanationLang('en')}
                className={`flex-1 px-4 py-2 rounded-lg text-xs font-black tracking-wide transition-all cursor-pointer ${
                  explanationLang === 'en'
                    ? 'bg-[#04AA6D] text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => setExplanationLang('hi')}
                className={`flex-1 px-4 py-2 rounded-lg text-xs font-black tracking-wide transition-all cursor-pointer ${
                  explanationLang === 'hi'
                    ? 'bg-[#04AA6D] text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                🇮🇳 हिंदी
              </button>
            </div>

            {/* Active Explanation Content */}
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-1.5 font-outfit">
                <span className="text-base">🧸</span>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">
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
                    <p key={pIdx} className="my-2.5 text-slate-300">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. Real-life Example */}
          <div className="bg-indigo-950/10 border border-indigo-500/20 rounded-[20px] p-5 space-y-1.5">
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
                <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1 animate-pulse">
                  <Sparkles size={9} />
                  <span>+10 XP Earned</span>
                </span>
              )}
            </div>

            {/* Drill A: MCQ */}
            <div className="space-y-4">
              <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block font-outfit">Drill 1: Multiple Choice Question</span>
              <h4 className="text-sm font-bold text-slate-100 leading-snug">
                {activeLesson.mcq.question}
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
                      className={`w-full text-left p-3.5 border rounded-xl text-xs font-semibold leading-relaxed transition-all cursor-pointer ${btnStyle}`}
                    >
                      <span>{opt}</span>
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
                    {activeLesson.mcq.explanation}
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-slate-850/60 pt-6 space-y-4">
              {/* Drill B: Fill in the Blanks */}
              <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block font-outfit">Drill 2: Fill in the Blank</span>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-bold">
                {activeLesson.blank.question}
              </p>

              <div className="flex flex-wrap gap-2 items-center">
                <button
                  onClick={() => setRevealBlankAnswer(!revealBlankAnswer)}
                  className="px-4 py-2 bg-slate-950 border border-slate-800 hover:border-slate-700 text-[10px] text-indigo-400 hover:text-white font-bold rounded-lg cursor-pointer"
                >
                  {revealBlankAnswer ? `Answer: ${activeLesson.blank.answer}` : 'Reveal Answer'}
                </button>
                <button
                  onClick={() => setShowBlankHint(!showBlankHint)}
                  className="px-4 py-2 bg-slate-950 border border-slate-800 hover:border-slate-700 text-[10px] text-amber-500 hover:text-amber-450 font-bold rounded-lg cursor-pointer"
                >
                  {showBlankHint ? `Hint: ${activeLesson.blank.hint}` : 'Show Hint'}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Banner Ad */}
          <div className="w-full shrink-0">
            <AdSenseBanner key={`bottom-ad-${activeIdx}`} />
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
            <span className="text-xs text-slate-550 font-bold">
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
            <h3 className="text-sm font-black text-white mb-1.5">Have you finished revising Chapter 3?</h3>
            <p className="text-xs text-slate-550 mb-4 font-semibold">Marking it completed will update your NCERT progress stats on the dashboard!</p>
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
      ) : (
        <div className="space-y-6 py-20 text-center">
          <div className="w-10 h-10 border-4 border-t-indigo-500 border-slate-800 rounded-full animate-spin mx-auto" />
          <span className="text-xs text-slate-500 font-bold block">Loading Chapter 3 Course Data...</span>
        </div>
      )}

      {/* Footer copyright */}
      <footer className="w-full py-6 text-center text-[10px] text-slate-700 border-t border-white/5 select-none shrink-0 font-outfit">
        © 2026 Nextsem Academy · NCERT Study Companion
      </footer>
    </div>
  );
}
