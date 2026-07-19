import type { Metadata } from 'next';
import HtmlDemoClient from './HtmlDemoClient';

export const metadata: Metadata = {
  title: 'Interactive HTML/CSS/JS Tutorial | Nextsem Academy',
  description: 'Learn HTML, CSS, and JavaScript step-by-step with an interactive code editor and live preview.',
  alternates: { canonical: '/htmldemo' },
  openGraph: {
    title: 'HTML/CSS/JS Interactive Tutorial | Nextsem Academy',
    description: 'Learn web development hands-on with live code + preview, lesson navigation, hints, and documentation.',
    url: 'https://nextsem.online/htmldemo',
  },
};

export default function HtmlDemoPage() {
  return <HtmlDemoClient />;
}
