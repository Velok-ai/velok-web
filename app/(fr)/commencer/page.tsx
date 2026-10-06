import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';
import { PrequalificationForm } from '@/components/lead-forms';

export const metadata: Metadata = pageMetadata(
  'Trouver un premier usage | Velok',
  'Sensibilisation, formation, atelier, intégration ou adoption : échangeons sur le premier pas utile pour votre équipe.',
  '/commencer',
);

export default function StartPage({
  searchParams,
}: {
  searchParams: { besoin?: string };
}) {
  return (
    <PageFrame>
      <PageIntro
        kicker="Premier échange"
        title="Quel serait le premier usage utile pour votre équipe ?"
        lede="Partez d’une tâche, d’un irritant ou d’une équipe que vous voulez aider. Vous pouvez aussi demander une sensibilisation ou une formation, sans avoir déjà choisi un outil."
      />
      <section className="form-page">
        <PrequalificationForm initialOfferInterest={searchParams.besoin} />
        <p className="v2-note">
          Vous préférez écrire directement ?{' '}
          <a href="mailto:david@velok.ai">david@velok.ai</a>
        </p>
      </section>
    </PageFrame>
  );
}
