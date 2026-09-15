import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';
import { PrequalificationForm } from '@/components/lead-forms';

export const metadata: Metadata = {
  title: 'Qualifier votre projet IA | Velok',
  description: 'Cinq minutes pour choisir le bon point de départ avec Velok.',
};

export default function StartPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Pré-qualification · 5 min" title="Un projet précis. Un premier pas mesuré." lede="Votre contexte permet à David de recommander l’audit, l’atelier ou un cadrage technique." />
      <section className="form-page"><PrequalificationForm /></section>
    </PageFrame>
  );
}
