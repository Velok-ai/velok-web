import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/en/site-shell';
import { CaseStudiesContent } from '@/components/case-studies-content';
import { pageMetadata } from '@/lib/en/site-metadata';

export const metadata: Metadata = pageMetadata(
  'Case studies: see the system at work | Velok',
  'An internal demonstration of Velok’s editorial system: source material, briefing, drafting and human approval. Documented process and limits, with no client outcome claimed.',
  '/en/cas-pratiques',
);

export default function CaseStudiesPage() {
  return (
    <PageFrame>
      <PageIntro
        showTrust={false}
        kicker="Case studies · Internal demonstration"
        title="See the work. Understand the decisions."
        lede="A film explains a process. A documented case establishes what was done, checked and observed. We are starting with our own editorial system."
      />
      <CaseStudiesContent language="en" />
    </PageFrame>
  );
}
