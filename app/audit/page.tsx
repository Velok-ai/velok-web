import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Audit de l’inbox — 1 500 € | Velok',
  description: 'Cartographier le travail réel avant d’automatiser.',
};

export default function AuditPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Point d’entrée · 1 500 €" title="Voir le travail avant de l’automatiser." lede="Nous cartographions demandes, décisions, relances, transferts et exceptions à partir d’un périmètre d’inbox convenu." />
      <section className="content-band dark concise-band">
        <div className="content-grid">
          <article className="content-card element-card"><VisualElement name="13-process-map" /><h2>Flux</h2><p>Étapes, outils, attentes et ruptures.</p></article>
          <article className="content-card element-card"><VisualElement name="17-trace-ledger" /><h2>Risques</h2><p>Données, accès, exceptions et contrôles.</p></article>
          <article className="content-card element-card"><VisualElement name="19-priority-marker" /><h2>Priorités</h2><p>Gains utiles, faisables et réversibles.</p></article>
          <article className="content-card element-card"><VisualElement name="12-document-pack" /><h2>Plan</h2><p>Solutions du marché, code sur mesure et responsabilités.</p></article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Ce que l’audit lit</h2>
        <p>Métadonnées et corps des messages inclus dans le périmètre. Une copie temporaire sert à l’analyse; seules les synthèses prévues sont conservées. Durées, pièces jointes, hébergement et sous-traitants sont fixés par écrit avant l’accès.</p>
        <Link href="/securite">Voir le traitement des données →</Link>
      </section>
      <section className="page-cta"><h2>Commencer par les faits.</h2><Link className="button button-cta" href="/commencer">Qualifier l’audit · 1&nbsp;500&nbsp;€ <span aria-hidden="true">→</span></Link></section>
    </PageFrame>
  );
}
