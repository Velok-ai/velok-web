import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';
import { CaseStudiesContent } from '@/components/case-studies-content';
import { pageMetadata } from '@/lib/site-metadata';

export const metadata: Metadata = pageMetadata(
  'Cas pratiques : voir le système au travail | Velok',
  'Une première démonstration interne du système éditorial Velok : sources, brief, rédaction et validation humaine. Processus et limites documentés, sans résultat client revendiqué.',
  '/cas-pratiques',
);

export default function CaseStudiesPage() {
  return (
    <PageFrame>
      <PageIntro
        showTrust={false}
        kicker="Cas pratiques · Démonstration interne"
        title="Voir le travail. Comprendre les choix."
        lede="Un film montre une mécanique. Un cas documenté explique ce qui a été fait, contrôlé et observé. Nous commençons par notre propre système éditorial."
      />
      <CaseStudiesContent language="fr" />
    </PageFrame>
  );
}
