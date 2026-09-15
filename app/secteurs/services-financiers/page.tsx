import type { Metadata } from 'next';
import { SectorPage } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'IA et services financiers | Velok',
  description: 'Introduire l’IA dans les opérations financières avec des rôles, des validations et des traces explicites.',
};

export default function FinancialServicesPage() {
  return <SectorPage
    kicker="Services financiers"
    title="Accélérer l’analyse. Conserver la validation."
    lede="Velok structure les usages où l’IA peut préparer, rapprocher ou signaler, sans lui confier seule une décision financière."
    flows={[
      ['Collecte', 'Documents, formats, complétude et provenance.'],
      ['Préparation', 'Extraction, rapprochement et première synthèse.'],
      ['Exceptions', 'Écarts, seuils et transfert vers le bon responsable.'],
      ['Restitution', 'Sources, hypothèses, validation et trace.'],
    ]}
    principle="Un modèle peut préparer une analyse. Une personne identifiée reste responsable de la décision, des contrôles et de la communication externe."
  />;
}
