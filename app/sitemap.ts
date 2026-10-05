import type { MetadataRoute } from 'next';
const routes = [
  '',
  '/atelier-agents',
  '/audit',
  '/commencer',
  '/confidentialite',
  '/diagnostic',
  '/learn',
  '/mentions-legales',
  '/methode',
  '/securite',
  '/situations',
  '/secteurs/assurance',
  '/secteurs/expertise-comptable',
  '/secteurs/industries-reglementees',
  '/secteurs/juridique',
  '/secteurs/services-financiers',
  '/guide/ia-operations',
  '/ai-sherpa',
  '/partenaires/agences',
  '/secteurs/services-professionnels',
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const fr = 'https://velok.ai' + (route || '/');
    const en = 'https://velok.ai/en' + route;
    const alternates = { languages: { fr, en } };
    return [
      {
        url: fr,
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
        alternates,
      },
      {
        url: en,
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
        alternates,
      },
    ];
  });
}
