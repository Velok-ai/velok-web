import { LeadLink } from '@/components/lead-link';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  alternates: { canonical: '/audit' },
  title: 'Audit de l’inbox | Velok',
  description: 'Cartographier le travail réel avant d’automatiser.',
};

export default function AuditPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Diagnostic complémentaire" title="Voir le travail avant de l’automatiser." lede="Nous cartographions demandes, décisions, relances, transferts et exceptions à partir d’un périmètre d’inbox convenu." />
      <section className="content-band dark concise-band">
        <div className="content-grid">
          <article className="content-card element-card"><VisualElement name="13-process-map" /><h2>Flux</h2><p>Étapes, outils, attentes et ruptures.</p></article>
          <article className="content-card element-card"><VisualElement name="17-trace-ledger" /><h2>Risques</h2><p>Données, accès, exceptions et contrôles.</p></article>
          <article className="content-card element-card"><VisualElement name="19-priority-marker" /><h2>Priorités</h2><p>Gains utiles, faisables et réversibles.</p></article>
          <article className="content-card element-card"><VisualElement name="12-document-pack" /><h2>Plan</h2><p>Solutions du marché, code sur mesure et responsabilités.</p></article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Un premier périmètre, puis une suite à convenir.</h2>
        <p>Le premier diagnostic porte sur une seule boîte email. Un périmètre d’équipe et un historique plus large se cadrent ensuite selon le besoin. L’implémentation fait l’objet d’un périmètre distinct. Vous pouvez commencer une formation ou un atelier sans cet audit.</p>
        <h2>Ce que l’audit lit</h2>
        <p>L’audit peut traiter des métadonnées et du texte de messages sélectionnés. Les données capturées et les éléments de preuve peuvent être conservés avec le rapport. Le périmètre, les pièces jointes, l’hébergement et les modalités de conservation et d’effacement doivent être précisés avant toute connexion.</p>
        <Link href="/securite">Voir le traitement des données →</Link>
      </section>
      <section className="page-cta"><h2>Commencer par les faits.</h2><LeadLink className="button button-cta" href="/commencer">Qualifier l’audit <span aria-hidden="true">→</span></LeadLink></section>
    </PageFrame>
  );
}
