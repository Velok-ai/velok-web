import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/en/site-shell';
import { SafetyDiagnostic } from '@/components/en/lead-forms';

export const metadata: Metadata = pageMetadata(
  'AI security self-assessment | Velok',
  'Five questions to assess your initial AI safeguards.',
  '/en/diagnostic',
);

export default function DiagnosticPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Self-assessment · 3 min"
        title="Do you know who can use what, and for which tasks?"
        lede="Five questions to check access, human approval and responsibility before expanding AI use."
      />
      <section className="form-page">
        <SafetyDiagnostic />
      </section>
    </PageFrame>
  );
}
