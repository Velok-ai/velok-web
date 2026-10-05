import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { SectorPage } from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'IA pour les professions juridiques | Velok',
  'Structurer les usages IA des équipes juridiques sans diluer la confidentialité ni la responsabilité professionnelle.',
  '/secteurs/juridique',
);

export default function LegalServicesPage() {
  return (
    <SectorPage
      kicker="Professions juridiques"
      title="Préparer le dossier sans perdre la source."
      lede="Recherche, chronologie, synthèse, premier projet : l’IA peut aider si la source, la version de référence et la personne qui valide restent explicites."
      flows={[
        ['Ouverture du dossier', 'Collecte, classement et éléments manquants.'],
        ['Recherche', 'Questions bornées, sources et limites visibles.'],
        ['Préparation', 'Chronologies, résumés et premiers projets.'],
        ['Revue', 'Validation, corrections et version finale attribuée.'],
      ]}
      illustration={{
        src: '/brand/illustrations/sector-workflows.webp',
        alt: 'Des documents de plusieurs formats sont orientés vers le bon traitement puis validés.',
      }}
      principle="L’IA prépare et organise. Elle ne remplace ni la vérification des sources, ni le secret professionnel, ni la décision du praticien."
    />
  );
}
