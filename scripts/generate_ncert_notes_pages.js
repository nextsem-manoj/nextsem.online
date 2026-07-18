const fs = require('fs');
const path = require('path');

const ncertNotesData = {
  "accounting-chapter-4": {
    title: "Chapter 4: Recording of Transactions-II",
    introText: "Explore special purpose books (special journals) including Cash Book, Purchases Book, Sales Book, and Journal Proper. Learn cash management and ledger balancing controls.",
    distinctions: [
      {
        title: "Cash Book vs. Cash Account",
        desc: "Compare the visual ledger account template against the prime entry cash journal book.",
        table: {
          headers: ["Basis of Distinction", "Cash Book", "Cash Account"],
          rows: [
            ["Source of Entry", "Entries are recorded directly from source documents (bills, receipts).", "Entries are posted from journals or special books."],
            ["Form", "It acts as a separate book of original entry.", "It is a ledger account inside the ledger book."],
            ["Utility", "Serves the purpose of both journal and ledger.", "Only serves the purpose of a ledger account."]
          ]
        }
      }
    ],
    mcqs: [
      {
        id: 1,
        question: "Which transaction is NOT recorded in a Cash Book?",
        options: ["Cash sales", "Credit sales of goods", "Payment of salary in cash", "Cash purchases"],
        answer: 1,
        explanation: "Cash Book only records cash receipts and cash payments. Credit transactions of goods are recorded in special journals like the Sales Book."
      },
      {
        id: 2,
        question: "Contra entry is recorded in which type of Cash Book?",
        options: ["Single Column Cash Book", "Double Column Cash Book (with cash & bank)", "Purchases Book", "Journal Proper"],
        answer: 1,
        explanation: "Contra entries represent cash deposited in bank or cash withdrawn from bank, affecting both Cash and Bank columns in a double column cash book."
      }
    ],
    assertions: [
      {
        id: 1,
        assertion: "Purchases Book only records credit purchases of merchandise.",
        reason: "Cash purchases are recorded directly in the Cash Book to avoid duplication.",
        correctOption: "A",
        explanation: "Both assertion and reason are true, and reason is the correct explanation. Cash purchases immediately reduce cash balances, hence they bypass the purchases book."
      }
    ],
    blanks: [
      {
        id: 1,
        question: "The journal that records credit sales of assets (other than goods) is called the ______.",
        answer: "Journal Proper",
        hint: "It acts as a residual journal for transactions that do not fit in any other special books."
      }
    ]
  },

  "accounting-chapter-5": {
    title: "Chapter 5: Bank Reconciliation Statement (BRS)",
    introText: "Master BRS concepts. Understand the timing differences and errors that cause discrepancy between Cash Book bank balance and Pass Book (bank statement) balance.",
    distinctions: [
      {
        title: "Cash Book Bank Column vs. Bank Pass Book",
        desc: "Compare details recorded by the business vs. details recorded by the bank.",
        table: {
          headers: ["Basis", "Cash Book (Bank Column)", "Bank Pass Book"],
          rows: [
            ["Prepared By", "Prepared by the business firm's accountant.", "Prepared by the banker."],
            ["Debit Balance", "Indicates asset / cash deposited at the bank.", "Indicates bank overdraft / negative balance."],
            ["Credit Balance", "Indicates bank overdraft / negative balance.", "Indicates customer's deposit balance."]
          ]
        }
      }
    ],
    mcqs: [
      {
        id: 1,
        question: "Cheques issued but not yet presented for payment will cause:",
        options: [
          "Cash Book balance to be lower than Pass Book",
          "Pass Book balance to be higher than Cash Book",
          "Cash Book balance to be higher than Pass Book",
          "No difference in balances"
        ],
        answer: 1,
        explanation: "Cheques issued immediately reduce the Cash Book balance. Since they are not yet presented to the bank, the bank has not deducted them, leaving the Pass Book balance higher."
      }
    ],
    assertions: [
      {
        id: 1,
        assertion: "Bank Reconciliation Statement is not a part of the double-entry system.",
        reason: "It is prepared periodically to verify the accuracy of bank balances and reconcile differences.",
        correctOption: "B",
        explanation: "Both are true but the reason is not the explanatory link of why it is excluded from the double-entry accounting structure."
      }
    ],
    blanks: [
      {
        id: 1,
        question: "A bank reconciliation statement is prepared to reconcile the difference between the bank balance of the cash book and the balance shown by the ______.",
        answer: "Pass Book",
        hint: "The booklet or monthly statement issued by the bank to its depositors."
      }
    ]
  },

  "accounting-chapter-6": {
    title: "Chapter 6: Trial Balance & Rectification of Errors",
    introText: "Learn how to prepare a Trial Balance to verify arithmetical accuracy. Master the classification of errors (principles, commission, omission) and rectification procedures.",
    distinctions: [
      {
        title: "One-Sided Errors vs. Two-Sided Errors",
        desc: "Distinguish between errors that affect trial balance agreement vs. those that do not.",
        table: {
          headers: ["Basis", "One-Sided Errors", "Two-Sided Errors"],
          rows: [
            ["Trial Balance Impact", "Disagrees the Trial Balance; total debits won't equal credits.", "Trial Balance still agrees; totals remain equal."],
            ["Suspense Account", "Rectified using a Suspense Account if TB is already closed.", "Rectified via a journal entry, no Suspense Account needed."],
            ["Examples", "Wrong totaling of Sales Book, posting to wrong side of an account.", "Complete omission of entry, recording wrong amount on both sides."]
          ]
        }
      }
    ],
    mcqs: [
      {
        id: 1,
        question: "Which of the following errors does NOT affect the agreement of a Trial Balance?",
        options: ["Error of posting wrong amount", "Compensating errors", "Wrong totaling of ledger", "Posting on the wrong side"],
        answer: 1,
        explanation: "Compensating errors involve multiple errors that cancel each other out, leaving Trial Balance totals matching perfectly."
      }
    ],
    assertions: [
      {
        id: 1,
        assertion: "Trial Balance is not conclusive proof of absolute accuracy of accounting records.",
        reason: "Certain errors like errors of principle and complete omission do not affect Trial Balance agreement.",
        correctOption: "A",
        explanation: "Both statements are true and the reason explains why matching totals doesn't guarantee perfect ledger records."
      }
    ],
    blanks: [
      {
        id: 1,
        question: "When a Trial Balance does not agree, the difference is temporarily transferred to the ______ Account.",
        answer: "Suspense",
        hint: "A temporary account used to force-match ledger balances until errors are tracked down."
      }
    ]
  },

  "accounting-chapter-7": {
    title: "Chapter 7: Depreciation, Provisions & Reserves",
    introText: "Understand depreciation causes and calculations using Straight Line Method (SLM) vs. Written Down Value (WDV). Explore the concepts of provisions and reserves.",
    distinctions: [
      {
        title: "Straight Line Method (SLM) vs. Written Down Value (WDV)",
        desc: "Compare flat depreciation models against declining balance models.",
        table: {
          headers: ["Basis", "Straight Line Method (SLM)", "Written Down Value (WDV)"],
          rows: [
            ["Depreciation Base", "Calculated on the original cost of the asset every year.", "Calculated on the book value (reducing balance) of the asset."],
            ["Annual Amount", "Remains constant throughout the asset's life.", "Decreases year after year."],
            ["Asset Book Value", "Can be reduced to zero eventually.", "Never reduced to absolute zero value."]
          ]
        }
      }
    ],
    mcqs: [
      {
        id: 1,
        question: "Which depreciation method is most logical for assets that yield decreasing utility as they age, like computers?",
        options: ["Straight Line Method", "Written Down Value Method", "Annuity Method", "Revaluation Method"],
        answer: 1,
        explanation: "Written Down Value Method charges higher depreciation in initial years when the asset's productivity is high and maintenance costs are low."
      }
    ],
    assertions: [
      {
        id: 1,
        assertion: "Provision is a charge against profits, whereas Reserve is an appropriation of profits.",
        reason: "Provisions are created to cover known liabilities, while Reserves are for strengthening financial position.",
        correctOption: "A",
        explanation: "Both statements are true and the reason explains the underlying financial status difference."
      }
    ],
    blanks: [
      {
        id: 1,
        question: "The decrease in the value of an intangible asset (like patents or trademarks) over time is called ______.",
        answer: "Amortisation",
        hint: "Similar concept to depreciation, but specifically applied to intangible assets."
      }
    ]
  },

  "accounting-chapter-8": {
    title: "Chapter 8: Practical Problems & Solutions",
    introText: "Apply double-entry book-keeping principles to complete practice exercises, balance ledger accounts, compute depreciation, and reconcile bank books.",
    distinctions: [
      {
        title: "Journal entries vs. Ledger postings",
        desc: "Compare raw transaction listings against ledger-card postings.",
        table: {
          headers: ["Basis", "Journal", "Ledger"],
          rows: [
            ["Order of Entries", "Chronological order by transaction date.", "Analytical classification by account type."],
            ["Process Name", "Journalising", "Posting"],
            ["Purpose", "Records transaction details for the first time.", "Summarizes financial position of each account."]
          ]
        }
      }
    ],
    mcqs: [
      {
        id: 1,
        question: "If a business purchases machinery for cash, the total assets of the firm will:",
        options: ["Increase", "Decrease", "Remain unchanged", "Double"],
        answer: 2,
        explanation: "Machinery increases assets while Cash decreases assets by the exact same amount, leaving total assets unchanged."
      }
    ],
    assertions: [
      {
        id: 1,
        assertion: "Adjusting entries must be recorded at the end of the accounting period.",
        reason: "They ensure that revenues and expenses are matched in accordance with the accrual concept.",
        correctOption: "A",
        explanation: "Both statements are true and the reason justifies the matching principle constraints."
      }
    ],
    blanks: [
      {
        id: 1,
        question: "The formula to calculate straight-line depreciation is: (Original Cost - Estimated ______ Value) / Useful Life.",
        answer: "Scrap",
        hint: "The residual value of the asset at the end of its useful life."
      }
    ]
  }
};

// Generate each folder and page file
Object.entries(ncertNotesData).forEach(([slug, data]) => {
  const dirPath = path.join(__dirname, `../src/app/ncert/notes/${slug}`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const fileContent = `"use client";

import React from 'react';
import NcertChapterNotesClient from '@/components/NcertChapterNotesClient';

export default function Page() {
  const data = ${JSON.stringify(data, null, 2)};

  return (
    <NcertChapterNotesClient
      noteKey="${slug}"
      title={data.title}
      classLabel="11th Class"
      subjectName="Financial Accounting-I"
      introText={data.introText}
      distinctions={data.distinctions}
      mcqs={data.mcqs}
      assertions={data.assertions}
      blanks={data.blanks}
    />
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), fileContent, 'utf8');
  console.log(`Successfully generated NCERT Notes Page for ${slug}!`);
});
