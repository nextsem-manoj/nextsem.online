"use client";

import React from 'react';
import NcertChapterNotesClient from '@/components/NcertChapterNotesClient';

export default function Page() {
  const data = {
  "title": "Chapter 5: Bank Reconciliation Statement (BRS)",
  "introText": "Master BRS concepts. Understand the timing differences and errors that cause discrepancy between Cash Book bank balance and Pass Book (bank statement) balance.",
  "distinctions": [
    {
      "title": "Cash Book Bank Column vs. Bank Pass Book",
      "desc": "Compare details recorded by the business vs. details recorded by the bank.",
      "table": {
        "headers": [
          "Basis",
          "Cash Book (Bank Column)",
          "Bank Pass Book"
        ],
        "rows": [
          [
            "Prepared By",
            "Prepared by the business firm's accountant.",
            "Prepared by the banker."
          ],
          [
            "Debit Balance",
            "Indicates asset / cash deposited at the bank.",
            "Indicates bank overdraft / negative balance."
          ],
          [
            "Credit Balance",
            "Indicates bank overdraft / negative balance.",
            "Indicates customer's deposit balance."
          ]
        ]
      }
    }
  ],
  "mcqs": [
    {
      "id": 1,
      "question": "Cheques issued but not yet presented for payment will cause:",
      "options": [
        "Cash Book balance to be lower than Pass Book",
        "Pass Book balance to be higher than Cash Book",
        "Cash Book balance to be higher than Pass Book",
        "No difference in balances"
      ],
      "answer": 1,
      "explanation": "Cheques issued immediately reduce the Cash Book balance. Since they are not yet presented to the bank, the bank has not deducted them, leaving the Pass Book balance higher."
    }
  ],
  "assertions": [
    {
      "id": 1,
      "assertion": "Bank Reconciliation Statement is not a part of the double-entry system.",
      "reason": "It is prepared periodically to verify the accuracy of bank balances and reconcile differences.",
      "correctOption": "B",
      "explanation": "Both are true but the reason is not the explanatory link of why it is excluded from the double-entry accounting structure."
    }
  ],
  "blanks": [
    {
      "id": 1,
      "question": "A bank reconciliation statement is prepared to reconcile the difference between the bank balance of the cash book and the balance shown by the ______.",
      "answer": "Pass Book",
      "hint": "The booklet or monthly statement issued by the bank to its depositors."
    }
  ]
};

  return (
    <NcertChapterNotesClient
      noteKey="accounting-chapter-5"
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
