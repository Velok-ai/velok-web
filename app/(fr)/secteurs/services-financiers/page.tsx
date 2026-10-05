import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { SectorPage } from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'IA et services financiers | Velok',
  'Introduire l’IA dans les opérations financières avec des rôles, des validations et des traces explicites.',
  '/secteurs/services-financiers',
);

export default function FinancialServicesPage() {
  return (
    <SectorPage
      kicker="Services financiers"
      title="Préparer plus vite. Savoir qui valide."
      lede="Un relevé, une pièce ou un écart peut être préparé automatiquement ; la décision et la communication externe restent attribuées à une personne identifiée."
      flows={[
        ['Collecte', 'Documents, formats, complétude et provenance.'],
        ['Préparation', 'Extraction, rapprochement et première synthèse.'],
        ['Exceptions', 'Écarts, seuils et transfert vers le bon responsable.'],
        ['Restitution', 'Sources, hypothèses, validation et trace.'],
      ]}
      illustration={{
        src: '/brand/illustrations/sector-workflows.webp',
        alt: 'Des documents de plusieurs formats sont orientés vers le bon traitement puis validés.',
      }}
      principle="Un modèle peut préparer une analyse. Une personne identifiée reste responsable de la décision, des contrôles et de la communication externe."
    />
  );
}
