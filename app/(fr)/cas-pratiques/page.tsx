import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';
import { CaseStudiesContent } from '@/components/case-studies-content';
import { pageMetadata } from '@/lib/site-metadata';

export const metadata: Metadata = pageMetadata(
  'Cas pratiques : voir le système au travail | Velok',
  'Des scénarios illustratifs pour les équipes : reporting, dossiers, suivi client, commandes et clubs. Avec le film éditorial VELOK. Sans résultat client revendiqué.',
  '/cas-pratiques',
);

export default function CaseStudiesPage() {
  return (
    <PageFrame>
      <PageIntro
        showTrust={false}
        kicker="Cas pratiques · Scénarios illustratifs & film"
        title="Voir le travail. Comprendre les choix."
        lede="Family office, cabinet d’avocats, agence, producteur alimentaire, réseau de salles de sport : des scénarios illustratifs pour comprendre ce que l’on peut confier à un agent, et ce que l’on garde en main. Avec le film de notre système éditorial."
      />
      <CaseStudiesContent language="fr" />
    </PageFrame>
  );
}
