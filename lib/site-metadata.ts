import type { Metadata } from 'next';
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const frenchPath = path.replace(/^\/en(?=\/|$)/, '') || '/';
  const englishPath = '/en' + (frenchPath === '/' ? '' : frenchPath);
  const english = path === '/en' || path.startsWith('/en/');
  const image = {
    url: english ? '/og-v2-en.png' : '/og-v2.png',
    width: 1200,
    height: 630,
    alt: english
      ? 'Velok — Useful AI. Without the complexity.'
      : 'Velok — L’IA utile. Sans complexité.',
  };
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { fr: frenchPath, en: englishPath, 'x-default': frenchPath },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: 'Velok',
      locale: english ? 'en_GB' : 'fr_FR',
      alternateLocale: english ? ['fr_FR'] : ['en_GB'],
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  };
}
