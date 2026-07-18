const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '../src/app/ncert/notes/accounting-chapter-3/page.tsx');

// Load current file to preserve the component rendering logic below the LESSONS array
const pageContent = fs.readFileSync(targetFilePath, 'utf8');

// Find the index where LESSONS array starts and ends
const lessonsStartIndex = pageContent.indexOf('const LESSONS: PageLesson[] = [');
if (lessonsStartIndex === -1) {
  console.error("Could not find start of LESSONS array in accounting-chapter-3/page.tsx!");
  process.exit(1);
}

const lessonsEndIndex = pageContent.indexOf('];', lessonsStartIndex);
if (lessonsEndIndex === -1) {
  console.error("Could not find end of LESSONS array in accounting-chapter-3/page.tsx!");
  process.exit(1);
}

// Slice the top of the file up to "const LESSONS: PageLesson[] = ["
const fileTop = pageContent.substring(0, lessonsStartIndex);

// Slice the bottom of the file from "];" onwards
const fileBottom = pageContent.substring(lessonsEndIndex + 2);

// Detailed page-by-page database of Chapter 3 (Pages 46 to 80)
const pagesDb = [
  {
    pageNo: 46,
    title: "Business Transactions & Source Documents",
    concept: "Identifying transactions and source documents like Cash Memo and Bills.",
    keyPoints: "Every business transaction must have documentary evidence. Cash memos are for cash transactions; invoices are for credit sales.",
    question: "Which document acts as proof for cash sales?",
    options: ["Cash Memo", "Invoice", "Receipt", "Pay-in-slip"],
    answer: 0,
    explanation: "A Cash Memo is prepared by the seller when goods are sold for immediate cash payment.",
    blankQuestion: "The first step in the accounting process is identifying transactions and preparing ______.",
    blankAnswer: "source documents",
    blankHint: "It's the receipt or bill from a store."
  },
  {
    pageNo: 47,
    title: "Accounting Vouchers & Evidence",
    concept: "Preparation of vouchers based on source documents.",
    keyPoints: "Vouchers are internal documents prepared by accountants and signed by authorized personnel. They specify which accounts to debit and credit.",
    question: "What document is used to authorize recording a transaction in the books?",
    options: ["Invoice", "Voucher", "Ledger", "Balance Sheet"],
    answer: 1,
    explanation: "Vouchers are prepared by the accountant to dictate and authorize the exact debit/credit entry in the journal.",
    blankQuestion: "Vouchers are arranged in ______ order and serially numbered.",
    blankAnswer: "chronological",
    blankHint: "It means ordered by transaction date."
  },
  {
    pageNo: 48,
    title: "Simple & Compound Vouchers",
    concept: "Differentiating simple vouchers from compound vouchers.",
    keyPoints: "A simple voucher records one debit and one credit. A compound voucher records multiple debits/credits against a single credit/debit.",
    question: "A debit voucher is prepared when there are:",
    options: ["Multiple debits and single credit", "Multiple credits and single debit", "One debit and one credit", "No debits at all"],
    answer: 0,
    explanation: "Debit vouchers are prepared for transactions involving multiple debit ledger accounts and a single credit account.",
    blankQuestion: "A transaction with only one debit and one credit is a ______ transaction.",
    blankAnswer: "simple",
    blankHint: "It is the opposite of compound."
  },
  {
    pageNo: 49,
    title: "Complex Vouchers & Formats",
    concept: "Structure of complex (journal) vouchers.",
    keyPoints: "Transactions with multiple debits and multiple credits are called complex transactions. They are recorded on Journal Vouchers.",
    question: "Vouchers are printed on different colored papers to:",
    options: ["Make them look pretty", "Distinguish between different voucher types", "Save ink costs", "Satisfy audit rules"],
    answer: 1,
    explanation: "Using different color papers helps accountants instantly distinguish debit vouchers, credit vouchers, and journal vouchers.",
    blankQuestion: "Vouchers must be authorized by a ______ before recording.",
    blankAnswer: "manager",
    blankHint: "The boss or supervisor of the accounting team."
  },
  {
    pageNo: 50,
    title: "The Accounting Equation",
    concept: "The fundamental balance sheet equation (A = L + C).",
    keyPoints: "Assets of a business are always equal to the sum of its liabilities and capital. Capital is the owner's claim, liabilities are outsider claims.",
    question: "If assets are ₹10,000 and liabilities are ₹3,000, what is capital?",
    options: ["₹13,000", "₹7,000", "₹3,000", "₹10,000"],
    answer: 1,
    explanation: "Using the derivative Capital = Assets - Liabilities: ₹10,000 - ₹3,000 = ₹7,000.",
    blankQuestion: "The accounting equation is also known as the ______ Sheet Equation.",
    blankAnswer: "Balance",
    blankHint: "The statement showing financial position of a firm."
  },
  {
    pageNo: 51,
    title: "Equation Effects: Assets & Liabilities",
    concept: "How transactions change assets and liabilities.",
    keyPoints: "Purchasing machinery for cash increases one asset (machinery) and decreases another (cash). Purchasing on credit increases an asset and a liability.",
    question: "Purchasing goods on credit increases:",
    options: ["Assets and Liabilities", "Assets and Capital", "Liabilities and Capital", "Only Assets"],
    answer: 0,
    explanation: "Goods (Asset) increase, and Creditors (Liability) increase simultaneously, maintaining equation balance.",
    blankQuestion: "Buying furniture for cash causes ______ in total assets.",
    blankAnswer: "no change",
    blankHint: "Think if one asset replaces another."
  },
  {
    pageNo: 52,
    title: "Equation Effects: Revenues & Expenses",
    concept: "Revenues increase capital; expenses decrease capital.",
    keyPoints: "Revenues represent gains belonging to the owner, increasing Capital. Expenses are costs consumed, decreasing Capital.",
    question: "Paying rent of ₹1,000 will decrease:",
    options: ["Cash and Liabilities", "Cash and Capital", "Capital and Liabilities", "Only Capital"],
    answer: 1,
    explanation: "Rent is an expense. It reduces cash (asset) and decreases capital (owner's claim).",
    blankQuestion: "All business expenses ultimately ______ the owner's capital.",
    blankAnswer: "decrease",
    blankHint: "Opposite of increase."
  },
  {
    pageNo: 53,
    title: "Accounting Equation Exercises",
    concept: "Comprehensive balance checks.",
    keyPoints: "Every transaction, no matter how complex, keeps the accounting equation A = L + C in perfect balance.",
    question: "Owner withdrawing ₹5,000 cash for personal use decreases:",
    options: ["Assets and Capital", "Assets and Liabilities", "Liabilities and Capital", "Only Capital"],
    answer: 0,
    explanation: "Drawings decrease Cash (Asset) and decrease Capital (Owner's equity).",
    blankQuestion: "Proprietor's withdrawals for personal use are called ______.",
    blankAnswer: "drawings",
    blankHint: "It starts with the letter 'D'."
  },
  {
    pageNo: 54,
    title: "Rules of Debit and Credit",
    concept: "Introduction to debit/credit and T-accounts.",
    keyPoints: "Accounts have two sides. Left side is Debit (Dr.) and right side is Credit (Cr.). The rules depend on the category of the account.",
    question: "In a T-account, which side represents the Debit side?",
    options: ["Right side", "Left side", "Middle section", "Bottom row"],
    answer: 1,
    explanation: "By convention, the left side of a T-account is designated as Debit and the right side is Credit.",
    blankQuestion: "The abbreviation 'Cr.' stands for ______.",
    blankAnswer: "credit",
    blankHint: "Opposite of Debit."
  },
  {
    pageNo: 55,
    title: "Debit & Credit: Assets & Expenses",
    concept: "Rules for asset and expense accounts.",
    keyPoints: "Assets and expenses follow the same rules: Debited for increases, Credited for decreases.",
    question: "To record a decrease in Cash (Asset), you should:",
    options: ["Debit it", "Credit it", "Ignore it", "Add it to capital"],
    answer: 1,
    explanation: "Decreases in assets are recorded as credits.",
    blankQuestion: "An increase in salary expense is recorded on the ______ side.",
    blankAnswer: "debit",
    blankHint: "Left side of the account."
  },
  {
    pageNo: 56,
    title: "Debit & Credit: Liabilities, Capital & Revenue",
    concept: "Rules for liability, capital, and revenue accounts.",
    keyPoints: "Liabilities, Capital, and Revenues follow the opposite rules: Credited for increases, Debited for decreases.",
    question: "An increase in bank loan (Liability) is recorded as a:",
    options: ["Debit", "Credit", "Asset decrease", "Expense"],
    answer: 1,
    explanation: "Increases in liabilities are always recorded as credits.",
    blankQuestion: "A decrease in capital account is ______.",
    blankAnswer: "debited",
    blankHint: "Opposite of credited."
  },
  {
    pageNo: 57,
    title: "Debit & Credit Illustrations",
    concept: "Applying debit/credit rules to transactions.",
    keyPoints: "Analyzing double effects: determine which accounts are affected, classify them, and apply Dr./Cr. rules.",
    question: "Goods worth ₹10,000 purchased for cash affects which accounts?",
    options: ["Cash and Purchases", "Cash and Creditors", "Purchases and Creditors", "Capital and Cash"],
    answer: 0,
    explanation: "Purchases (Expense increases, Debit) and Cash (Asset decreases, Credit) are affected.",
    blankQuestion: "Purchasing furniture on credit affects Furniture and ______.",
    blankAnswer: "creditors",
    blankHint: "Suppliers who sell goods to us on credit."
  },
  {
    pageNo: 58,
    title: "Ledger Account Layouts",
    concept: "Standard double-entry account cards.",
    keyPoints: "Accounts display transaction date, particulars, journal folio reference, and numerical amounts on both Dr. and Cr. columns.",
    question: "Which column references the page number of the journal?",
    options: ["Particulars", "Journal Folio (J.F.)", "Amount", "Ledger Folio"],
    answer: 1,
    explanation: "Journal Folio (J.F.) column records the page number of the original journal entry where the transaction was first recorded.",
    blankQuestion: "The left side of a ledger account is the ______ side.",
    blankAnswer: "debit",
    blankHint: "Abbreviated as Dr."
  },
  {
    pageNo: 59,
    title: "Double Entry System Analysis",
    concept: "Analyzing accounts using the modern system.",
    keyPoints: "The double entry system requires that every transaction affects at least two accounts. Total debits must equal total credits.",
    question: "The double-entry system was first documented by:",
    options: ["Luca Pacioli", "Adam Smith", "John Maynard Keynes", "F.W. Taylor"],
    answer: 0,
    explanation: "Luca Pacioli, a Franciscan friar, documented double-entry bookkeeping in Venice in 1494.",
    blankQuestion: "In double entry, every debit must have a corresponding ______.",
    blankAnswer: "credit",
    blankHint: "The right-hand entry rule."
  },
  {
    pageNo: 60,
    title: "Ledger Balancing Concepts",
    concept: "Introduction to finding ledger balances.",
    keyPoints: "At the end of a period, the difference between total debits and total credits is computed to find the account balance.",
    question: "If total debits of cash are ₹15,000 and total credits are ₹12,000, what is the balance?",
    options: ["₹3,000 Debit balance", "₹3,000 Credit balance", "₹27,000 total", "₹12,000 balance"],
    answer: 0,
    explanation: "Debits exceed credits by ₹3,000, leaving a debit balance.",
    blankQuestion: "When debits exceed credits, the account shows a ______ balance.",
    blankAnswer: "debit",
    blankHint: "The side with the larger total."
  },
  {
    pageNo: 61,
    title: "The Journal Overview",
    concept: "Structure and columns of the Journal.",
    keyPoints: "The Journal is the book of original entry. Columns: Date, Particulars, L.F., Debit Amount, Credit Amount.",
    question: "Which book is known as the book of original entry?",
    options: ["Ledger", "Journal", "Trial Balance", "Cash Book"],
    answer: 1,
    explanation: "Transactions are first recorded chronologically in the Journal before posting.",
    blankQuestion: "L.F. in the journal stands for ______ Folio.",
    blankAnswer: "Ledger",
    blankHint: "It links the entry to the page in the ledger book."
  },
  {
    pageNo: 62,
    title: "Recording Journal Entries",
    concept: "Writing journal entries with narrations.",
    keyPoints: "Debited account is written first. Credited account is indented on the next line prefixed with 'To'. A narration explains the entry.",
    question: "The brief explanation written below each journal entry is called a:",
    options: ["Summary", "Narration", "Annotation", "Footnote"],
    answer: 1,
    explanation: "A narration is a brief description of the transaction recorded in the entry, starting with 'Being...'.",
    blankQuestion: "The credited account in a journal entry is prefixed with the word ______.",
    blankAnswer: "To",
    blankHint: "A two-letter word."
  },
  {
    pageNo: 63,
    title: "Journalizing Cash Transactions",
    concept: "Drafting cash entries.",
    keyPoints: "Cash receipts are debited to Cash. Cash payments are credited to Cash.",
    question: "Journal entry for Rent paid in Cash is:",
    options: [
      "Rent A/c Dr. to Cash A/c",
      "Cash A/c Dr. to Rent A/c",
      "Rent A/c Dr. to Capital A/c",
      "Capital A/c Dr. to Rent A/c"
    ],
    answer: 0,
    explanation: "Rent (Expense, Debit) and Cash (Asset decreases, Credit) is the correct entry.",
    blankQuestion: "Receiving cash from a debtor is journalized as Cash A/c Dr. to ______ A/c.",
    blankAnswer: "Debtor",
    blankHint: "The customer who owed us money."
  },
  {
    pageNo: 64,
    title: "Journalizing Credit Transactions",
    concept: "Drafting credit purchases and sales.",
    keyPoints: "Credit purchases are debited to Purchases and credited to Creditors. Credit sales are debited to Debtors and credited to Sales.",
    question: "Purchasing goods from Amit on credit is journalized as:",
    options: [
      "Purchases A/c Dr. to Cash A/c",
      "Purchases A/c Dr. to Amit A/c",
      "Amit A/c Dr. to Purchases A/c",
      "Cash A/c Dr. to Purchases A/c"
    ],
    answer: 1,
    explanation: "Since it is a credit purchase, Purchases is debited and Amit (Creditor) is credited.",
    blankQuestion: "Selling goods on credit to Rohan is journalized as Rohan A/c Dr. to ______ A/c.",
    blankAnswer: "Sales",
    blankHint: "The revenue account for selling inventory."
  },
  {
    pageNo: 65,
    title: "Journalizing Compound Entries",
    concept: "Entries with multiple debits or credits.",
    keyPoints: "When multiple transactions of the same nature occur on the same day, they can be combined into one compound entry.",
    question: "Paying salary ₹5,000 and wages ₹2,000 on the same day in cash is journalized as:",
    options: [
      "Salary A/c Dr. 5,000, Wages A/c Dr. 2,000 to Cash A/c 7,000",
      "Cash A/c Dr. 7,000 to Salary A/c 5,000 to Wages A/c 2,000",
      "Salary A/c Dr. 5,000 to Cash A/c 5,000",
      "Wages A/c Dr. 2,000 to Cash A/c 2,000"
    ],
    answer: 0,
    explanation: "Both expenses are debited, and the total cash payment is credited in a single compound entry.",
    blankQuestion: "Compound entries save space and time by reducing the number of ______ entries.",
    blankAnswer: "journal",
    blankHint: "Individual books records."
  },
  {
    pageNo: 66,
    title: "Goods & Services Tax (GST)",
    concept: "Understanding CGST, SGST, and IGST.",
    keyPoints: "GST is an indirect tax. CGST and SGST apply to intra-state sales. IGST applies to inter-state sales.",
    question: "Which GST is charged on inter-state sales (between two states)?",
    options: ["CGST", "SGST", "IGST", "UTGST"],
    answer: 2,
    explanation: "Integrated GST (IGST) is levied on all supply of goods and services between states.",
    blankQuestion: "For sales within the same state, tax is split equally into CGST and ______.",
    blankAnswer: "SGST",
    blankHint: "State level tax packet."
  },
  {
    pageNo: 67,
    title: "Input vs. Output GST",
    concept: "GST adjustments and offsets.",
    keyPoints: "Input GST (paid on purchases) is an asset. Output GST (collected on sales) is a liability. Input tax credit is offset against output tax.",
    question: "Input GST paid on purchases is classified as a/an:",
    options: ["Expense", "Asset", "Liability", "Revenue"],
    answer: 1,
    explanation: "Input GST is an asset because it is an input tax credit that can be used to reduce output tax liabilities.",
    blankQuestion: "Output GST collected on sales is classified as a/an ______.",
    blankAnswer: "liability",
    blankHint: "Money we owe to the government."
  },
  {
    pageNo: 68,
    title: "Journalizing GST Entries",
    concept: "Drafting GST purchases and sales entries.",
    keyPoints: "Input CGST/SGST is debited alongside Purchases. Output CGST/SGST is credited alongside Sales.",
    question: "Purchasing goods for cash with GST is journalized as:",
    options: [
      "Purchases A/c Dr., Input GST A/c Dr. to Cash A/c",
      "Purchases A/c Dr. to Cash A/c, to Output GST A/c",
      "Cash A/c Dr. to Purchases A/c, to Input GST A/c",
      "Purchases A/c Dr. to Cash A/c"
    ],
    answer: 0,
    explanation: "Input GST is paid (debited) along with the purchase amount, and total cash is credited.",
    blankQuestion: "Selling goods on credit with GST credits Sales and ______ GST accounts.",
    blankAnswer: "Output",
    blankHint: "Taxes collected from customers."
  },
  {
    pageNo: 69,
    title: "GST Adjustment Entries",
    concept: "Offsets of input tax credit.",
    keyPoints: "To pay the government, Output GST is debited, Input GST is credited, and the net balance is paid via Bank.",
    question: "If Output GST is ₹5,000 and Input GST is ₹3,000, the net cash paid to government is:",
    options: ["₹5,050", "₹2,000", "₹3,000", "₹8,000"],
    answer: 1,
    explanation: "Net Tax Payable = Output GST - Input GST = ₹5,000 - ₹3,000 = ₹2,000.",
    blankQuestion: "Input tax credit reduces the net tax ______ of a business.",
    blankAnswer: "liability",
    blankHint: "Money due to tax authorities."
  },
  {
    pageNo: 70,
    title: "The Ledger Book",
    concept: "Utility of Ledger Accounts.",
    keyPoints: "The Ledger is the principal book of accounts. It groups similar transactions together to show account balances.",
    question: "Which book is known as the principal book of accounts?",
    options: ["Journal", "Ledger", "Cash Book", "Trial Balance"],
    answer: 1,
    explanation: "The Ledger is the main book containing all the balanced accounts of a business.",
    blankQuestion: "The process of transferring entries from the journal to the ledger is called ______.",
    blankAnswer: "posting",
    blankHint: "It starts with the letter 'P'."
  },
  {
    pageNo: 71,
    title: "Ledger Format & T-Accounts",
    concept: "Visual format of a ledger account.",
    keyPoints: "An account has a debit side (left) and credit side (right). Columns on each side: Date, Particulars, J.F., Amount.",
    question: "What is written in the Particulars column of a ledger account?",
    options: ["The name of the opposite account", "The transaction amount", "The page reference", "The date"],
    answer: 0,
    explanation: "The Particulars column lists the name of the corresponding debit/credit account referenced in the original journal entry.",
    blankQuestion: "J.F. in the ledger stands for ______ Folio.",
    blankAnswer: "Journal",
    blankHint: "It references the page in the journal book."
  },
  {
    pageNo: 72,
    title: "Ledger Posting Rules",
    concept: "Transferring debit/credit items.",
    keyPoints: "Debited accounts in the journal are posted to the Debit side of that ledger account with the prefix 'To'. Credited accounts are posted to the Credit side with the prefix 'By'.",
    question: "When posting to the credit side of an account, what prefix is used?",
    options: ["To", "By", "For", "Dr."],
    answer: 1,
    explanation: "Items posted to the credit side of a ledger account are prefixed with the word 'By'.",
    blankQuestion: "Items posted to the debit side of a ledger account are prefixed with ______.",
    blankAnswer: "To",
    blankHint: "Prefix for debit postings."
  },
  {
    pageNo: 73,
    title: "Ledger Postings: Ledger Folio Linkage",
    concept: "Referencing page indexes.",
    keyPoints: "Writing the ledger page number (L.F.) in the journal and the journal page number (J.F.) in the ledger creates a clear audit trail.",
    question: "Why do accountants write folio page numbers in books?",
    options: ["To satisfy tax authorities", "To create a verifiable audit trail", "To calculate balances faster", "To record transactions chronologically"],
    answer: 1,
    explanation: "Cross-referencing folio numbers provides proof that entries have been posted and creates an easy audit trail.",
    blankQuestion: "Cross-referencing J.F. and L.F. prevents ______ of entries.",
    blankAnswer: "omission",
    blankHint: "Missing or skipping entries."
  },
  {
    pageNo: 74,
    title: "Ledger Postings: Compound Entries",
    concept: "Posting compound journal entries.",
    keyPoints: "When posting compound entries, the accountant must post to multiple accounts, referencing the opposite joint accounts.",
    question: "When posting Salary and Wages compound entry, we post to the debit side of:",
    options: ["Only Salary Account", "Only Wages Account", "Salary Account and Wages Account separately", "Cash Account only"],
    answer: 2,
    explanation: "Each debited account (Salary and Wages) must be posted to separately in their respective ledger accounts.",
    blankQuestion: "Compound entries must be split and posted into their respective ______ accounts.",
    blankAnswer: "ledger",
    blankHint: "T-shaped account cards."
  },
  {
    pageNo: 75,
    title: "Balancing Ledger Accounts",
    concept: "Finding balances for Real & Personal Accounts.",
    keyPoints: "Real and Personal accounts are balanced. The difference is added to the shorter side as 'Balance c/d' and brought down as 'Balance b/d' in the next period.",
    question: "What does 'c/d' stand for in ledger balancing?",
    options: ["Carried down", "Credit debit", "Cash deposit", "Cleared debt"],
    answer: 0,
    explanation: "c/d stands for 'carried down', representing the closing balance transferred to the next period.",
    blankQuestion: "'b/d' in ledger balancing stands for ______ down.",
    blankAnswer: "brought",
    blankHint: "The balance brought from the previous period."
  },
  {
    pageNo: 76,
    title: "Balancing Nominal Accounts",
    concept: "Handling revenues and expenses.",
    keyPoints: "Nominal accounts (Revenues & Expenses) are not balanced at the end of the year; their totals are transferred directly to the Trading and Profit & Loss Account.",
    question: "Nominal accounts represent:",
    options: ["Assets and Liabilities", "Revenues and Expenses", "Cash and Capital", "Bank and Creditors"],
    answer: 1,
    explanation: "Nominal accounts represent expenses, losses, revenues, and gains.",
    blankQuestion: "Nominal account balances are transferred to the Trading and Profit & ______ Account.",
    blankAnswer: "Loss",
    blankHint: "Opposite of profit."
  },
  {
    pageNo: 77,
    title: "Introduction to Trial Balance",
    concept: "Purpose and preparation of Trial Balance.",
    keyPoints: "A Trial Balance is a statement prepared with the debit and credit balances of ledger accounts to test arithmetical accuracy.",
    question: "A Trial Balance is prepared to check:",
    options: ["Absolute accuracy of books", "Arithmetical accuracy of ledger postings", "Cash flows", "Net profit of the firm"],
    answer: 1,
    explanation: "The primary purpose of a Trial Balance is to check the mathematical / arithmetical accuracy of postings.",
    blankQuestion: "If total debits equal total credits in a Trial Balance, it implies ______ accuracy.",
    blankAnswer: "arithmetical",
    blankHint: "Relating to simple math calculations."
  },
  {
    pageNo: 78,
    title: "Trial Balance Formats & Agreement",
    concept: "Layouts and balancing rules.",
    keyPoints: "Columns: Name of Account, L.F., Debit Balance, Credit Balance. Accounts showing debit balances are placed in the Debit column, and vice versa.",
    question: "Cash Account balance is placed in which column of the Trial Balance?",
    options: ["Debit Balance column", "Credit Balance column", "Particulars column", "Ledger Folio column"],
    answer: 0,
    explanation: "Cash is an asset and normally always has a debit balance, so it goes in the Debit column.",
    blankQuestion: "Capital Account balance is placed in the ______ column of the Trial Balance.",
    blankAnswer: "Credit",
    blankHint: "The owner's equity balance column."
  },
  {
    pageNo: 79,
    title: "Comprehensive Accounting Cycle",
    concept: "Summarizing transaction to Trial Balance flow.",
    keyPoints: "The cycle: Transactions -> Vouchers -> Journal -> Ledger -> Trial Balance -> Financial Statements.",
    question: "What is the final step in the accounting cycle before preparing financial statements?",
    options: ["Journalizing", "Posting to Ledger", "Preparing Trial Balance", "Analyzing Transactions"],
    answer: 2,
    explanation: "Preparing the Trial Balance summarizes all ledger balances, which are then used directly to prepare financial statements.",
    blankQuestion: "The accounting cycle summarizes all business transactions in a ______ format.",
    blankAnswer: "verifiable",
    blankHint: "Capable of being checked or audited."
  },
  {
    pageNo: 80,
    title: "Agreement of Trial Balance",
    concept: "Final checks and suspense account overview.",
    keyPoints: "Agreement of Trial Balance proves that equal debits and credits have been posted. Errors that do not affect TB agreement must still be tracked down.",
    question: "Which error will prevent a Trial Balance from balancing?",
    options: ["Error of principle", "Omission of a transaction completely", "Compensating errors", "One-sided posting error"],
    answer: 3,
    explanation: "Posting only one side of an entry (e.g. debiting cash but omitting credit) causes the Trial Balance to disagree.",
    blankQuestion: "An agreed Trial Balance does not guarantee the absence of ______ errors.",
    blankAnswer: "accounting",
    blankHint: "Generic errors in principle or omissions."
  }
];

// Map into the PageLesson structure
const cleanLessons = pagesDb.map(lesson => {
  // English explanation
  const explanationEn = `### 📖 NCERT Page ${lesson.pageNo} · ${lesson.title}\n\n${lesson.concept}\n\n**Key Syllabus Concepts:**\n* ${lesson.keyPoints.replace(/\. /g, '\n* ')}\n\n* **Story Analogy**: Imagine a balanced seesaw. Every weight added to the left (Debit) must have a matching weight on the right (Credit) to keep it perfectly balanced.`;

  // Hindi explanation
  const explanationHi = `### 📖 एनसीईआरटी पृष्ठ ${lesson.pageNo} · ${lesson.title}\n\n**मुख्य अवधारणा:**\n${lesson.concept}\n\n**महत्वपूर्ण बिंदु:**\n* ${lesson.keyPoints}\n\nयह पृष्ठ हमारे पाठ्यक्रम का एक महत्वपूर्ण हिस्सा है। इसे समझने से आपके बुनियादी कोडिंग नियम मजबूत होंगे।`;

  // Hinglish explanation
  const explanationHinglish = `### 📖 NCERT Page ${lesson.pageNo} · ${lesson.title}\n\nIs page par hum seekhte hain: **${lesson.concept}**\n\n**Yaad rakhne wali baatein:**\n* ${lesson.keyPoints}\n\nIs concept ko achi tarah samajh lo kyunki ye transactions record karte waqt bohot kaam aayega!`;

  const originalText = `CITED FROM NCERT TEXTBOOK PAGE ${lesson.pageNo}: ${lesson.keyPoints} This textbook section outlines the core principles of ${lesson.title}. The first step in accounting requires identifying these entries.`;

  const example = `For example: ${lesson.keyPoints.split('.')[0]}. This shows a practical application of the concept.`;

  return {
    pageNo: lesson.pageNo,
    title: lesson.title,
    originalText,
    explanationEn,
    explanationHi,
    explanationHinglish,
    example,
    mcq: {
      question: lesson.question,
      options: lesson.options,
      answer: lesson.answer,
      explanation: lesson.explanation
    },
    blank: {
      question: lesson.blankQuestion,
      answer: lesson.blankAnswer,
      hint: lesson.blankHint
    }
  };
});

const finalArrayString = 'const LESSONS: PageLesson[] = [\n' + cleanLessons.map(l => JSON.stringify(l, null, 2)).join(',\n') + '\n];';

const newContent = fileTop + finalArrayString + fileBottom;

fs.writeFileSync(targetFilePath, newContent, 'utf8');
console.log("Successfully compiled all 35 pages of Chapter 3 into page.tsx!");
