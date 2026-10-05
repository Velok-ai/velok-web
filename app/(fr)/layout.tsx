import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/source-serif-4';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://velok.ai'),
  title: 'Velok — L’IA utile. Sans complexité.',
  description:
    'Conférences, formations, ateliers, intégration et adoption : Velok met la puissance de l’IA au service de vos équipes.',
  openGraph: {
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Velok',
    title: 'Velok — L’IA utile. Sans complexité.',
    description:
      'Apprendre, choisir un premier usage, le mettre en place et le faire adopter par vos équipes.',
    images: [
      {
        url: '/og-v2.png',
        width: 1200,
        height: 630,
        alt: 'Velok — L’IA utile. Sans complexité.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velok — L’IA utile. Sans complexité.',
    description:
      'Apprendre, choisir un premier usage, le mettre en place et le faire adopter par vos équipes.',
    images: ['/og-v2.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
