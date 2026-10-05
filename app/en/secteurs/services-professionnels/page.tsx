import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import { SectorPage } from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'AI and teams — Professional services | Velok',
  'AI workshops and support for your team’s proposals, summaries and handovers.',
  '/en/secteurs/services-professionnels',
);

export default function ProfessionalServicesPage() {
  return (
    <SectorPage
      kicker="Professional services"
      title="AI working for your client work."
      lede="Consulting, engineering firms and services: try AI on a specific task before choosing an integration."
      flows={[
        [
          'Proposals',
          'Find the right previous examples and prepare a draft for review.',
        ],
        [
          'Summaries',
          'Prepare meeting notes and points to confirm using an example suited to the workshop.',
        ],
        [
          'Handovers',
          'Clarify what the next person needs to receive to move forward.',
        ],
        [
          'Follow-up',
          'Identify documents and actions still needed, then scope what could be simplified.',
        ],
      ]}
      principle="A practice the team can use independently. An owner for the first trial and an agreed measure before deciding what comes next."
    />
  );
}
