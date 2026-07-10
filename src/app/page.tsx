import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Nextsem Academy | Learn Web Development Free",
  description: "Start your journey to become a job-ready frontend developer. Free structured courses in HTML, CSS, JavaScript, React, and Node.js for BCA, B.Tech, and M.Tech students.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nextsem Academy | Learn Web Development Free",
    description: "Free, structured web development courses for BCA, B.Tech, M.Tech students. Master HTML5, CSS3, JavaScript, React, and Node.js.",
    url: "https://nextsem.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextsem Academy | Learn Web Development Free",
    description: "Free structured web development courses for aspiring frontend engineers.",
  },
};

export default function Home() {
  return <HomeClient />;
}
