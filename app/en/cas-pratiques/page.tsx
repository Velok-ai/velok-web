import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/en/site-shell';
import { CaseStudiesContent } from '@/components/case-studies-content';
import { pageMetadata } from '@/lib/en/site-metadata';

export const metadata: Metadata = pageMetadata(
  'Case studies: see the system at work | Velok',
  'Illustrative workflows for reporting, legal matters, client work, orders and clubs. Plus the VELOK editorial film. No client outcomes claimed.',
  '/en/cas-pratiques',
);

export default function CaseStudiesPage() {
  return (
    <PageFrame>
      <PageIntro
        showTrust={false}
        kicker="Case studies · Illustrative scenarios & film"
        title="See the work. Understand the decisions."
        lede="Family office, law firm, agency, food producer and fitness chain: illustrative scenarios showing what an agent could prepare and which decisions stay with people. Plus a film of our editorial system."
      />
      <CaseStudiesContent language="en" />
    </PageFrame>
  );
}
