import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro } from '@/components/site-shell';

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
          ['Partir du travail', 'Choisissez un flux répétitif, observable et déjà coûteux.'],
          ['Borner le rôle', 'Définissez ce que l’agent peut lire, préparer ou déclencher.'],
          ['Placer la validation', 'Gardez une personne aux décisions sensibles et aux sorties externes.'],
          ['Limiter les données', 'Ne transmettez que les informations nécessaires au cas d’usage.'],
          ['Conserver la preuve', 'Reliez sources, sorties, corrections et validations.'],
          ['Prévoir la sortie', 'Comptes, code et documentation doivent rester exploitables sans Velok.'],
        ].map(([heading, body]) => (
          <article className="content-card element-card" key={heading}>

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
