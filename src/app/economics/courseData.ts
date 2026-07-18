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

export const economicsPhases: Phase[] = [
  {
    id: 'STATS',
    title: 'Statistics for Economics (Class XI)',
    duration: '4-6 Weeks',
    color: 'bg-[#0b1329]',
    bulletColor: '#38bdf8',
    imageUrl: '/statistics_illustration.webp',
    icon: '📊',
    path: 'eco-ch1-intro',
    topics: [
      { label: 'Chapter 1: Introduction', path: 'eco-ch1-intro' },
      { label: 'Chapter 2: Collection of Data', path: 'eco-ch2-collection' },
      { label: 'Chapter 3: Organisation of Data', path: 'eco-ch3-organisation' },
      { label: 'Chapter 4: Presentation of Data', path: 'eco-ch4-presentation' },
      { label: 'Chapter 5: Measures of Central Tendency', path: 'eco-ch5-central-tendency' },
      { label: 'Chapter 6: Correlation', path: 'eco-ch6-correlation' },
      { label: 'Chapter 7: Index Numbers', path: 'eco-ch7-index-numbers' },
      { label: 'Chapter 8: Use of Statistical Tools', path: 'eco-ch8-statistical-tools' },
    ]
  }
];
