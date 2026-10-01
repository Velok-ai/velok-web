import { VisualJourney } from '@/components/painted-object';
import { LeadLink } from '@/components/lead-link';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'De l’apprentissage à l’adoption — La méthode | Velok',
  description: 'Comprendre, apprendre, identifier, mettre en place, adopter et étendre les usages IA qui aident votre équipe.',
  alternates: { canonical: '/methode' },
};

const steps = [
  ['07-market-module', '01', 'Comprendre', 'Relier ce qui change dans l’IA aux tâches et aux questions de votre équipe.'],
  ['11-human-handoff', '02', 'Apprendre', 'Pratiquer les outils sur un exemple du métier. Savoir reprendre et vérifier le résultat.'],
  ['19-priority-marker', '03', 'Identifier', 'Choisir un premier usage, son responsable et une mesure de départ.'],
  ['09-connector-rail', '04', 'Mettre en place', 'Cadrer un outil, une intégration ou une automatisation si le besoin le justifie.'],
  ['14-cycle-marker', '05', 'Adopter', 'Observer l’usage réel, aider les personnes et ajuster ce qui bloque.'],
  ['20-baseline-result-slider', '06', 'Étendre', 'Répéter ce qui fonctionne. Choisir le prochain usage à partir des résultats observés.'],
] as const;

export default function MethodPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Méthode Velok" title="Voir le travail avant de choisir l’outil." lede="Comprendre → Apprendre → Identifier → Mettre en place → Adopter → Étendre. Le point de départ dépend de ce que votre équipe sait déjà faire." />
      <VisualJourney />
      <section className="content-band alt learning-detail-grid">
        {steps.map(([asset, number, heading, body]) => <article className="content-card element-card" key={number}><VisualElement name={asset} /><span className="step-label">{number}</span><h2>{heading}</h2><p>{body}</p></article>)}
      </section>
      <section className="audit-disclosure"><h2>Un premier usage, pas un grand programme.</h2><p>Un atelier produit une pratique à essayer. Avant une implémentation, nous convenons d’un livrable, des personnes qui le portent et de la manière d’observer sa valeur. L’adoption et les résultats déterminent la suite; ils ne sont pas présumés.</p></section>
      <section className="content-band dark"><h2>La technologie vient au service du besoin.</h2><p>Nous privilégions un outil professionnel existant. Une intégration relie les étapes lorsque c’est nécessaire. Un agent ou du code sur mesure n’entre dans le périmètre que s’il apporte une valeur utile. Les accès, validations et éléments à transmettre sont documentés pour chaque mise en œuvre.</p><Link className="text-link" href="/securite">Consulter les principes de mise en œuvre →</Link></section>
      <section className="page-cta"><h2>Choisir le bon premier pas.</h2><LeadLink className="button button-cta" href="/commencer">Trouver le premier usage utile <span aria-hidden="true">→</span></LeadLink></section>
    </PageFrame>
  );
}
