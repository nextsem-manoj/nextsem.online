"use client";

import React from 'react';
import NcertChapterNotesClient from '@/components/NcertChapterNotesClient';

export default function Page() {
  const data = {
  "title": "Chapter 7: Depreciation, Provisions & Reserves",
  "introText": "Understand depreciation causes and calculations using Straight Line Method (SLM) vs. Written Down Value (WDV). Explore the concepts of provisions and reserves.",
  "distinctions": [
    {
      "title": "Straight Line Method (SLM) vs. Written Down Value (WDV)",
      "desc": "Compare flat depreciation models against declining balance models.",
      "table": {
        "headers": [
          "Basis",
          "Straight Line Method (SLM)",
          "Written Down Value (WDV)"
        ],
        "rows": [
          [
            "Depreciation Base",
            "Calculated on the original cost of the asset every year.",
            "Calculated on the book value (reducing balance) of the asset."
          ],
          [
            "Annual Amount",
            "Remains constant throughout the asset's life.",
            "Decreases year after year."
          ],
          [
            "Asset Book Value",
            "Can be reduced to zero eventually.",
            "Never reduced to absolute zero value."
          ]
        ]
      }
    }
  ],
  "mcqs": [
    {
      "id": 1,
      "question": "Which depreciation method is most logical for assets that yield decreasing utility as they age, like computers?",
      "options": [
        "Straight Line Method",
        "Written Down Value Method",
        "Annuity Method",
        "Revaluation Method"
      ],
      "answer": 1,
      "explanation": "Written Down Value Method charges higher depreciation in initial years when the asset's productivity is high and maintenance costs are low."
    }
  ],
  "assertions": [
    {
      "id": 1,
      "assertion": "Provision is a charge against profits, whereas Reserve is an appropriation of profits.",
      "reason": "Provisions are created to cover known liabilities, while Reserves are for strengthening financial position.",
      "correctOption": "A",
      "explanation": "Both statements are true and the reason explains the underlying financial status difference."
    }
  ],
  "blanks": [
    {
      "id": 1,
      "question": "The decrease in the value of an intangible asset (like patents or trademarks) over time is called ______.",
      "answer": "Amortisation",
      "hint": "Similar concept to depreciation, but specifically applied to intangible assets."
    }
  ]
};

  return (
    <NcertChapterNotesClient
      noteKey="accounting-chapter-7"
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
