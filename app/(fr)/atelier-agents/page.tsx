import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageFrame,
  PageIntro,
  VisualElement,
  WideIllustration,
} from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'Atelier agents IA | Velok',
  'Comprendre, tester et encadrer un premier agent IA avec votre équipe.',
  '/atelier-agents',
);

export default function WorkshopPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Apprendre · Atelier agents"
        title="Apprendre à déléguer sans perdre la main."
        lede="Votre équipe construit un premier agent sur un cas simple, puis apprend à vérifier ce qu’il fait, ce qu’il utilise et quand il doit s’arrêter."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/v2/workflows/presentation-equipe.webp"
          alt="Illustration : une personne présente un workflow numérique à une équipe pendant un atelier."
        />
      </section>
      <section className="content-band dark concise-band">
        <div className="content-grid">
          <article className="content-card element-card">
            <VisualElement name="16-control-dial" />
            <h2>Comprendre</h2>
            <p>Capacités, limites, données et responsabilités.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="01-approval-gate" />
            <h2>Choisir une tâche</h2>
            <p>
              Un besoin précis, un résultat attendu et les personnes concernées.
            </p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="11-human-handoff" />
            <h2>Pratiquer</h2>
            <p>Un agent simple sur un cas réel, sans donnée sensible.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="12-document-pack" />
            <h2>Repartir</h2>
            <p>Règles d’équipe et prochaine expérimentation.</p>
          </article>
        </div>
      </section>
      <section className="page-cta">
        <h2>Former l’équipe sur un cas réel.</h2>
        <Link className="button button-cta" href="/commencer">
          Décrire le cas <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
