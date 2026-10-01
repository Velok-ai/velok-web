import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/source-serif-4';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://velok.ai'),
  title: 'Velok — L’IA utile. Sans complexité.',
  description:
    'Formation IA pratique, ateliers équipes et accompagnement AI Sherpa : du travail réel au premier usage utile.',
  alternates: { canonical: '/' },
  openGraph: {
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Velok',
    title: 'Velok — L’IA utile. Sans complexité.',
    description: 'Nous formons vos équipes sur leur travail réel et les accompagnons vers un premier usage utile.',
    images: [{ url: '/brand/velok-v2-social.png', width: 1200, height: 630, alt: 'Velok — L’IA utile. Sans complexité.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velok — L’IA utile. Sans complexité.',
    description: 'Nous formons vos équipes sur leur travail réel et les accompagnons vers un premier usage utile.',
    images: ['/brand/velok-v2-social.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
