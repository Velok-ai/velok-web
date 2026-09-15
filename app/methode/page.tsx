import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Méthode d’implémentation IA | Velok',
  description: 'Observer un flux réel, cadrer les risques, déployer le minimum utile et transmettre un système documenté.',
};

const steps = [
  ['02-audit-lens', '01', 'Observer', 'Un flux réel, ses volumes et ses exceptions.'],
  ['13-process-map', '02', 'Cadrer', 'Usage, données, responsable et résultat attendu.'],
  ['09-connector-rail', '03', 'Déployer', 'Le plus petit système utile dans vos outils.'],
  ['17-trace-ledger', '04', 'Vérifier', 'Tests, validations, traces et incidents.'],
  ['15-ownership-token', '05', 'Transmettre', 'Comptes, code et documentation à votre équipe.'],
] as const;

export default function MethodPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Méthode Velok" title="Avancer vite. Garder la preuve." lede="Chaque mission commence par un travail observable, pas par une promesse sur l’IA." />
      <section className="content-band dark method-detail-grid">
        {steps.map(([asset, number, heading, body]) => (
          <article className="content-card element-card" key={number}>
            <VisualElement name={asset} />
            <span className="step-label">{number}</span>
            <h2>{heading}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="audit-disclosure">
        <h2>Marché ou sur mesure</h2>
        <p>Nous privilégions une solution professionnelle existante lorsqu’elle répond au besoin. Le code sur mesure ne vient que là où l’intégration, le contrôle ou le métier l’exigent. Vous détenez les comptes, le code livré et la documentation.</p>
      </section>
      <section className="page-cta"><h2>Choisir le bon premier pas.</h2><Link className="button button-cta" href="/commencer">Qualifier le projet <span aria-hidden="true">→</span></Link></section>
    </PageFrame>
  );
}
