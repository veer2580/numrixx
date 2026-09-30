import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Numerixx — Decode · Understand · Transform',
  description: 'Research-led numerical insights and practical perspectives for personal and professional decision-making with Harpreet Kaur.',
  icons: { icon: { url: '/favicon.svg?v=2', type: 'image/svg+xml' }, shortcut: '/favicon.svg?v=2', apple: '/apple-icon.png?v=2' },
  openGraph: { title: 'Numerixx — Decode · Understand · Transform', description: 'Personalised guidance for every stage of life.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Numerixx — Decode · Understand · Transform', description: 'Personalised guidance for every stage of life.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
