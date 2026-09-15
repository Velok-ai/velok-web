import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Atelier agents IA | Velok',
  description: 'Comprendre, tester et encadrer un premier agent IA avec votre équipe.',
};

export default function WorkshopPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Point d’entrée · Atelier" title="Apprendre avant de déléguer." lede="Votre équipe construit un premier agent borné et apprend à vérifier ses actions." />
      <section className="content-band dark concise-band">
        <div className="content-grid">
          <article className="content-card element-card"><VisualElement name="16-control-dial" /><h2>Comprendre</h2><p>Capacités, limites, données et responsabilités.</p></article>
          <article className="content-card element-card"><VisualElement name="01-approval-gate" /><h2>Encadrer</h2><p>Rôle, accès, tests et validation humaine.</p></article>
          <article className="content-card element-card"><VisualElement name="11-human-handoff" /><h2>Pratiquer</h2><p>Un agent simple sur un cas réel, sans donnée sensible.</p></article>
          <article className="content-card element-card"><VisualElement name="12-document-pack" /><h2>Repartir</h2><p>Règles d’équipe et prochaine expérimentation.</p></article>
        </div>
      </section>
      <section className="page-cta"><h2>Former l’équipe.</h2><Link className="button button-cta" href="/commencer">Qualifier l’atelier <span aria-hidden="true">→</span></Link></section>
    </PageFrame>
  );
}
