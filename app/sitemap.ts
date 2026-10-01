import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/audit',
    '/atelier-agents',
    '/ai-sherpa',
    '/partenaires/agences',
    '/secteurs/services-professionnels',
    '/diagnostic',
    '/commencer',
    '/methode',
    '/securite',
    '/secteurs/assurance',
    '/secteurs/expertise-comptable',
    '/secteurs/services-financiers',
    '/secteurs/juridique',
    '/secteurs/industries-reglementees',
    '/guide/ia-operations',
  ];
  return routes.map((route) => ({ url: `https://velok.ai${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: route === '' ? 1 : 0.8 }));
}
