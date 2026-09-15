import type { Metadata } from 'next';
import { SectorPage } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'IA pour les professions juridiques | Velok',
  description: 'Structurer les usages IA des équipes juridiques sans diluer la confidentialité ni la responsabilité professionnelle.',
};

export default function LegalServicesPage() {
  return <SectorPage
    kicker="Professions juridiques"
    title="Préparer davantage. Décider en humain."
    lede="Velok aide les équipes juridiques à cadrer la recherche, la préparation documentaire et le suivi, avec des sources et des accès explicites."
    flows={[
      ['Ouverture du dossier', 'Collecte, classement et éléments manquants.'],
      ['Recherche', 'Questions bornées, sources et limites visibles.'],
      ['Préparation', 'Chronologies, résumés et premiers projets.'],
      ['Revue', 'Validation, corrections et version finale attribuée.'],
    ]}
    principle="L’IA prépare et organise. Elle ne remplace ni la vérification des sources, ni le secret professionnel, ni la décision du praticien."
  />;
}
