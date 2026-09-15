import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Comprendre l’IA dans les opérations | Velok',
  description: 'Un guide court pour choisir un premier usage IA, protéger les données et garder une validation humaine.',
};

export default function OperationsGuidePage() {
  return (
    <PageFrame>
      <PageIntro kicker="Guide · Sans formulaire" title="L’IA dans les opérations, sans boîte noire." lede="Six repères pour passer d’un test individuel à un système utile, contrôlé et transmissible." />
      <section className="content-band alt guide-grid">
        {[
          ['03-intake-tray', 'Partir du travail', 'Choisissez un flux répétitif, observable et déjà coûteux.'],
          ['16-control-dial', 'Borner le rôle', 'Définissez ce que l’agent peut lire, préparer ou déclencher.'],
          ['01-approval-gate', 'Placer la validation', 'Gardez une personne aux décisions sensibles et aux sorties externes.'],
          ['18-data-intake-slot', 'Limiter les données', 'Ne transmettez que les informations nécessaires au cas d’usage.'],
          ['17-trace-ledger', 'Conserver la preuve', 'Reliez sources, sorties, corrections et validations.'],
          ['15-ownership-token', 'Prévoir la sortie', 'Comptes, code et documentation doivent rester exploitables sans Velok.'],
        ].map(([asset, heading, body]) => (
          <article className="content-card element-card" key={heading}>
            <VisualElement name={asset} />
            <h2>{heading}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="audit-disclosure"><h2>OpenAI, Anthropic ou autre ?</h2><p>Le fournisseur vient après le besoin. Nous privilégions les offres professionnelles et les paramètres adaptés au contexte européen, puis nous documentons les choix, les accès et les limites avec votre équipe.</p></section>
      <section className="page-cta"><h2>Appliquer ces repères à un flux.</h2><Link className="button button-cta" href="/diagnostic">Faire le diagnostic <span aria-hidden="true">→</span></Link></section>
    </PageFrame>
  );
}
