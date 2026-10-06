import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import { SectorPage } from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'AI and financial services | Velok',
  'Introduce AI into financial operations with explicit roles, approvals and records.',
  '/en/secteurs/services-financiers',
);

export default function FinancialServicesPage() {
  return (
    <SectorPage
      kicker="Financial services"
      title="Prepare faster. Know who approves."
      lede="A statement, document or discrepancy can be prepared automatically; the decision and external communication remain assigned to an identified person."
      flows={[
        ['Collection', 'Documents, formats, completeness and provenance.'],
        ['Preparation', 'Extraction, reconciliation and an initial summary.'],
        [
          'Exceptions',
          'Discrepancies, thresholds and handover to the right owner.',
        ],
        ['Reporting', 'Sources, assumptions, approval and records.'],
      ]}
      illustration={{
        src: '/brand/illustrations/sector-workflows.webp',
        alt: 'Documents in different formats are routed to the right process, then approved.',
      }}
      principle="A model can prepare an analysis. An identified person remains responsible for the decision, checks and external communication."
    />
  );
}
