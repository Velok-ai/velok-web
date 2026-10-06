import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/source-serif-4';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://velok.ai'),
  title: 'Velok — Useful AI. Without the complexity.',
  description:
    'Talks, training, workshops, integration and adoption: Velok puts the power of AI to work for your team.',
  openGraph: {
    locale: 'en_GB',
    type: 'website',
    siteName: 'Velok',
    title: 'Velok — Useful AI. Without the complexity.',
    description:
      'Learn, choose a first use case, implement it and help your team adopt it.',
    images: [
      {
        url: '/og-v2-en.png',
        width: 1200,
        height: 630,
        alt: 'Velok — Useful AI. Without the complexity.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velok — Useful AI. Without the complexity.',
    description:
      'Learn, choose a first use case, implement it and help your team adopt it.',
    images: ['/og-v2-en.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
