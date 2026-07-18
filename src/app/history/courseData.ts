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

export const historyPhases: Phase[] = [
  {
    id: 'THEME4',
    title: 'Theme Four: Thinkers, Beliefs & Buildings',
    duration: '4-6 Weeks',
    color: 'bg-[#1e112c]',
    bulletColor: '#a855f7',
    imageUrl: '/history_illustration.webp',
    icon: '🏛️',
    path: 'theme4-ch1-sanchi',
    topics: [
      { label: '1. A Glimpse of Sanchi', path: 'theme4-ch1-sanchi' },
      { label: '2. The Background: Sacrifices and Debates', path: 'theme4-ch2-background' },
      { label: '3. Beyond Worldly Pleasures: The Message of Mahavira', path: 'theme4-ch3-mahavira' },
      { label: '4. The Buddha and the Quest for Enlightenment', path: 'theme4-ch4-buddha' },
      { label: '5. The Teachings of the Buddha', path: 'theme4-ch5-teachings' },
      { label: '6. Followers of the Buddha', path: 'theme4-ch6-followers' },
      { label: '7. Stupas', path: 'theme4-ch7-stupas' },
      { label: '8. "Discovering" Stupas', path: 'theme4-ch8-discovering' },
      { label: '9. Sculpture', path: 'theme4-ch9-sculpture' },
      { label: '10. New Religious Traditions', path: 'theme4-ch10-traditions' },
      { label: '11. Can We "See" Everything?', path: 'theme4-ch11-seeing-all' }
    ]
  }
];
