"use client";

import React from 'react';
import NcertChapterNotesClient from '@/components/NcertChapterNotesClient';

export default function Page() {
  const data = {
  "title": "Chapter 4: Recording of Transactions-II",
  "introText": "Explore special purpose books (special journals) including Cash Book, Purchases Book, Sales Book, and Journal Proper. Learn cash management and ledger balancing controls.",
  "distinctions": [
    {
      "title": "Cash Book vs. Cash Account",
      "desc": "Compare the visual ledger account template against the prime entry cash journal book.",
      "table": {
        "headers": [
          "Basis of Distinction",
          "Cash Book",
          "Cash Account"
        ],
        "rows": [
          [
            "Source of Entry",
            "Entries are recorded directly from source documents (bills, receipts).",
            "Entries are posted from journals or special books."
          ],
          [
            "Form",
            "It acts as a separate book of original entry.",
            "It is a ledger account inside the ledger book."
          ],
          [
            "Utility",
            "Serves the purpose of both journal and ledger.",
            "Only serves the purpose of a ledger account."
          ]
        ]
      }
    }
  ],
  "mcqs": [
    {
      "id": 1,
      "question": "Which transaction is NOT recorded in a Cash Book?",
      "options": [
        "Cash sales",
        "Credit sales of goods",
        "Payment of salary in cash",
        "Cash purchases"
      ],
      "answer": 1,
      "explanation": "Cash Book only records cash receipts and cash payments. Credit transactions of goods are recorded in special journals like the Sales Book."
    },
    {
      "id": 2,
      "question": "Contra entry is recorded in which type of Cash Book?",
      "options": [
        "Single Column Cash Book",
        "Double Column Cash Book (with cash & bank)",
        "Purchases Book",
        "Journal Proper"
      ],
      "answer": 1,
      "explanation": "Contra entries represent cash deposited in bank or cash withdrawn from bank, affecting both Cash and Bank columns in a double column cash book."
    }
  ],
  "assertions": [
    {
      "id": 1,
      "assertion": "Purchases Book only records credit purchases of merchandise.",
      "reason": "Cash purchases are recorded directly in the Cash Book to avoid duplication.",
      "correctOption": "A",
      "explanation": "Both assertion and reason are true, and reason is the correct explanation. Cash purchases immediately reduce cash balances, hence they bypass the purchases book."
    }
  ],
  "blanks": [
    {
      "id": 1,
      "question": "The journal that records credit sales of assets (other than goods) is called the ______.",
      "answer": "Journal Proper",
      "hint": "It acts as a residual journal for transactions that do not fit in any other special books."
    }
  ]
};

  return (
    <NcertChapterNotesClient
      noteKey="accounting-chapter-4"
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
