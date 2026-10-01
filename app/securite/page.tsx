import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  alternates: { canonical: '/securite' },
  title: 'Sécurité, IA et données | Velok',
  description: 'Des outils reconnus, un cas d’usage cadré et des contrôles vérifiables.',
};

export default function SecurityPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Sécurité & données" title="Un usage utile. Un cadre clair." lede="Les accès, les données et les validations se conviennent pour chaque mise en œuvre. Ce cadre accompagne l’usage choisi par votre équipe." visual="review-a-document" />
      <section className="content-band dark concise-band">
        <div className="content-grid">
          <article className="content-card element-card"><VisualElement name="16-control-dial" /><h2>Choisir</h2><p>Outil, offre, région et paramètres adaptés.</p></article>
          <article className="content-card element-card"><VisualElement name="01-approval-gate" /><h2>Borner</h2><p>Permissions minimales et validation humaine.</p></article>
          <article className="content-card element-card"><VisualElement name="17-trace-ledger" /><h2>Tracer</h2><p>Sources, actions, décisions et incidents.</p></article>
          <article className="content-card element-card"><VisualElement name="15-ownership-token" /><h2>Transmettre</h2><p>Comptes, code et documentation au client.</p></article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Avant tout accès aux données</h2><p>Le diagnostic s’appuie actuellement sur des prestataires américains. Les prestataires, les régions de traitement et les modalités de conservation doivent être précisés avant la mission. Le choix d’un outil ne constitue pas à lui seul une garantie de conformité.</p>
        <h2>Pour l’audit de l’inbox</h2><p>Le périmètre, les données capturées, les preuves conservées et les modalités d’effacement doivent être documentés avant tout accès. Velok ne remplace ni votre DPO ni votre conseil juridique.</p>
      </section>
      <section className="page-cta"><h2>Tester vos garde-fous.</h2><Link className="button button-cta" href="/diagnostic">Diagnostic · 3 min <span aria-hidden="true">→</span></Link></section>
    </PageFrame>
  );
}
