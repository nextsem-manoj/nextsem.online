"use client";

import React from 'react';
import NcertChapterNotesClient from '@/components/NcertChapterNotesClient';

export default function Page() {
  const data = {
  "title": "Chapter 8: Practical Problems & Solutions",
  "introText": "Apply double-entry book-keeping principles to complete practice exercises, balance ledger accounts, compute depreciation, and reconcile bank books.",
  "distinctions": [
    {
      "title": "Journal entries vs. Ledger postings",
      "desc": "Compare raw transaction listings against ledger-card postings.",
      "table": {
        "headers": [
          "Basis",
          "Journal",
          "Ledger"
        ],
        "rows": [
          [
            "Order of Entries",
            "Chronological order by transaction date.",
            "Analytical classification by account type."
          ],
          [
            "Process Name",
            "Journalising",
            "Posting"
          ],
          [
            "Purpose",
            "Records transaction details for the first time.",
            "Summarizes financial position of each account."
          ]
        ]
      }
    }
  ],
  "mcqs": [
    {
      "id": 1,
      "question": "If a business purchases machinery for cash, the total assets of the firm will:",
      "options": [
        "Increase",
        "Decrease",
        "Remain unchanged",
        "Double"
      ],
      "answer": 2,
      "explanation": "Machinery increases assets while Cash decreases assets by the exact same amount, leaving total assets unchanged."
    }
  ],
  "assertions": [
    {
      "id": 1,
      "assertion": "Adjusting entries must be recorded at the end of the accounting period.",
      "reason": "They ensure that revenues and expenses are matched in accordance with the accrual concept.",
      "correctOption": "A",
      "explanation": "Both statements are true and the reason justifies the matching principle constraints."
    }
  ],
  "blanks": [
    {
      "id": 1,
      "question": "The formula to calculate straight-line depreciation is: (Original Cost - Estimated ______ Value) / Useful Life.",
      "answer": "Scrap",
      "hint": "The residual value of the asset at the end of its useful life."
    }
  ]
};

  return (
    <NcertChapterNotesClient
      noteKey="accounting-chapter-8"
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
