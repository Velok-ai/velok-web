import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import { SectorPage } from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'AI for legal services | Velok',
  'Structure AI uses for legal teams while preserving confidentiality and professional responsibility.',
  '/en/secteurs/juridique',
);

export default function LegalServicesPage() {
  return (
    <SectorPage
      kicker="Legal services"
      title="Prepare the file without losing the source."
      lede="Research, timelines, summaries, first drafts: AI can help when sources, the authoritative version and the person approving remain explicit."
      flows={[
        ['Opening a file', 'Collection, classification and missing items.'],
        ['Research', 'Bounded questions, visible sources and limitations.'],
        ['Preparation', 'Timelines, summaries and first drafts.'],
        [
          'Review',
          'Approval, corrections and a final version with a named owner.',
        ],
      ]}
      illustration={{
        src: '/brand/illustrations/sector-workflows.webp',
        alt: 'Documents in different formats are routed to the right process, then approved.',
      }}
      principle="AI prepares and organises. It does not replace source verification, professional confidentiality or the practitioner’s decision."
    />
  );
}
