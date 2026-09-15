import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';
import { SafetyDiagnostic } from '@/components/lead-forms';

export const metadata: Metadata = {
  title: 'Diagnostic sécurité IA | Velok',
  description: 'Cinq questions pour situer vos premiers garde-fous IA.',
};

export default function DiagnosticPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Auto-diagnostic · 3 min" title="Vos premiers garde-fous sont-ils en place ?" lede="Un repère rapide, pas une certification. Vos réponses servent uniquement à orienter la prochaine étape." />
      <section className="form-page"><SafetyDiagnostic /></section>
    </PageFrame>
  );
}
