export interface Topic {
  label: string;
  path: string;
}

export interface Phase {
  id: string;
  title: string;
  duration: string;
  color: string;
  bulletColor: string;
  imageUrl: string;
  icon: string;
  path: string;
  topics: Topic[];
}

export const civicsPhases: Phase[] = [
  {
    id: 'CIVICS_CH4',
    title: 'Chapter 4: The Executive (Class XI)',
    duration: '2-3 Weeks',
    color: 'bg-[#0f172a]',
    bulletColor: '#38bdf8',
    imageUrl: '/civics_illustration.webp',
    icon: '🏛️',
    path: 'civics-ch4-executive',
    topics: [
      { label: 'Chapter 4: The Executive', path: 'civics-ch4-executive' }
    ]
  }
];
