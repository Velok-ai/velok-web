import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import { SectorPage } from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'AI for professional services teams | Velok',
  'AI workshops and support for your team’s proposals, summaries and handovers.',
  '/en/secteurs/services-professionnels',
);

export default function ProfessionalServicesPage() {
  return (
    <SectorPage
      kicker="Professional services"
      title="Put AI to work on your client work."
      lede="Consultancies, engineering firms and other service firms: try AI on a specific task before choosing an integration."
      flows={[
        [
          'Proposals',
          'Find the right previous examples and prepare a draft for review.',
        ],
        [
          'Summaries',
          'Prepare meeting notes and the points to confirm, working on an example chosen for the workshop.',
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
