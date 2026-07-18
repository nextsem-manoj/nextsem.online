"use client";

import React from 'react';
import NcertChapterNotesClient from '@/components/NcertChapterNotesClient';

export default function Page() {
  const data = {
  "title": "Chapter 6: Trial Balance & Rectification of Errors",
  "introText": "Learn how to prepare a Trial Balance to verify arithmetical accuracy. Master the classification of errors (principles, commission, omission) and rectification procedures.",
  "distinctions": [
    {
      "title": "One-Sided Errors vs. Two-Sided Errors",
      "desc": "Distinguish between errors that affect trial balance agreement vs. those that do not.",
      "table": {
        "headers": [
          "Basis",
          "One-Sided Errors",
          "Two-Sided Errors"
        ],
        "rows": [
          [
            "Trial Balance Impact",
            "Disagrees the Trial Balance; total debits won't equal credits.",
            "Trial Balance still agrees; totals remain equal."
          ],
          [
            "Suspense Account",
            "Rectified using a Suspense Account if TB is already closed.",
            "Rectified via a journal entry, no Suspense Account needed."
          ],
          [
            "Examples",
            "Wrong totaling of Sales Book, posting to wrong side of an account.",
            "Complete omission of entry, recording wrong amount on both sides."
          ]
        ]
      }
    }
  ],
  "mcqs": [
    {
      "id": 1,
      "question": "Which of the following errors does NOT affect the agreement of a Trial Balance?",
      "options": [
        "Error of posting wrong amount",
        "Compensating errors",
        "Wrong totaling of ledger",
        "Posting on the wrong side"
      ],
      "answer": 1,
      "explanation": "Compensating errors involve multiple errors that cancel each other out, leaving Trial Balance totals matching perfectly."
    }
  ],
  "assertions": [
    {
      "id": 1,
      "assertion": "Trial Balance is not conclusive proof of absolute accuracy of accounting records.",
      "reason": "Certain errors like errors of principle and complete omission do not affect Trial Balance agreement.",
      "correctOption": "A",
      "explanation": "Both statements are true and the reason explains why matching totals doesn't guarantee perfect ledger records."
    }
  ],
  "blanks": [
    {
      "id": 1,
      "question": "When a Trial Balance does not agree, the difference is temporarily transferred to the ______ Account.",
      "answer": "Suspense",
      "hint": "A temporary account used to force-match ledger balances until errors are tracked down."
    }
  ]
};

  return (
    <NcertChapterNotesClient
      noteKey="accounting-chapter-6"
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
