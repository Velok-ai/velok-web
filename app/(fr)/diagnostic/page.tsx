import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';
import { SafetyDiagnostic } from '@/components/lead-forms';

export const metadata: Metadata = pageMetadata(
  'Diagnostic sécurité IA | Velok',
  'Cinq questions pour situer vos premiers garde-fous IA.',
  '/diagnostic',
);

export default function DiagnosticPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Auto-diagnostic · 3 min"
        title="Savez-vous qui peut utiliser quoi — et pour faire quoi ?"
        lede="Cinq questions pour vérifier les accès, la validation humaine et la responsabilité avant d’élargir l’usage de l’IA."
      />
      <section className="form-page">
        <SafetyDiagnostic />
      </section>
    </PageFrame>
  );
}
