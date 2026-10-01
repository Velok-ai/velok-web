import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';
import { PrequalificationForm } from '@/components/lead-forms';

export const metadata: Metadata = {
  title: 'Trouver le premier usage utile pour votre équipe | Velok',
  description: 'Parlez de votre travail à David pour choisir une formation, un atelier ou un accompagnement AI Sherpa.',
  alternates: { canonical: '/commencer' },
};

export default function StartPage({ searchParams }: { searchParams: { offre?: string | string[] } }) {
  const initialOffer = typeof searchParams.offre === 'string' ? searchParams.offre : '';
  return (
    <PageFrame>
      <PageIntro kicker="Un premier échange" title="Votre équipe. Votre travail. Le premier pas." lede="Décrivez une tâche ou une question. David vous aide à choisir une formation, un atelier ou un accompagnement. Le diagnostic d’inbox reste une option si votre besoin le justifie." />
      <section className="form-page"><PrequalificationForm initialOffer={initialOffer} /></section>
    </PageFrame>
  );
}
