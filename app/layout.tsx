import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/source-serif-4';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://velok.ai'),
  title: 'Velok — L’IA utile. La maîtrise en plus.',
  description:
    'Velok aide les équipes françaises à intégrer des systèmes IA fiables, documentés et détenus par leur organisation.',
  alternates: { canonical: '/' },
  openGraph: {
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Velok',
    title: 'Velok — L’IA utile. La maîtrise en plus.',
    description: 'Des systèmes IA fiables, documentés et réellement à vous.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Velok — L’IA utile. La maîtrise en plus.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velok — L’IA utile. La maîtrise en plus.',
    description: 'Des systèmes IA fiables, documentés et réellement à vous.',
    images: ['/og.png'],
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
