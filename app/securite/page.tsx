import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Sécurité, IA et données | Velok',
  description: 'Des outils reconnus, un cas d’usage cadré et des contrôles vérifiables.',
};

export default function SecurityPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Sécurité & données" title="La conformité ne vient pas avec le logiciel." lede="OpenAI et Anthropic proposent des offres professionnelles en Europe. La conformité dépend encore du cas d’usage, des données, des accès et de vos obligations." />
      <section className="content-band dark concise-band">
        <div className="content-grid">
          <article className="content-card element-card"><VisualElement name="16-control-dial" /><h2>Choisir</h2><p>Outil, offre, région et paramètres adaptés.</p></article>
          <article className="content-card element-card"><VisualElement name="01-approval-gate" /><h2>Borner</h2><p>Permissions minimales et validation humaine.</p></article>
          <article className="content-card element-card"><VisualElement name="17-trace-ledger" /><h2>Tracer</h2><p>Sources, actions, décisions et incidents.</p></article>
          <article className="content-card element-card"><VisualElement name="15-ownership-token" /><h2>Transmettre</h2><p>Comptes, code et documentation au client.</p></article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Pour l’audit inbox</h2><p>Le périmètre, la copie temporaire, les synthèses conservées et les durées sont documentés avant tout accès. Velok ne remplace ni votre DPO ni votre conseil juridique.</p>
      </section>
      <section className="page-cta"><h2>Tester vos garde-fous.</h2><Link className="button button-cta" href="/diagnostic">Diagnostic · 3 min <span aria-hidden="true">→</span></Link></section>
    </PageFrame>
  );
}
