import type { Metadata } from 'next';
import ProfileClient from './ProfileClient';

export const metadata: Metadata = {
  title: "My Profile",
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: "/profile" },
  openGraph: {
    title: "My Profile | Nextsem Academy",
    description: "Track your Nextsem Academy course progress and completed chapters.",
    url: "https://nextsem.online/profile",
  },
  twitter: {
    card: "summary",
    title: "My Profile | Nextsem Academy",
    description: "Track your web development progress on Nextsem Academy.",
  },
};

export default function ProfilePage() {
  return <ProfileClient />;
}
