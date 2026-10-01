import { GalleryArt, GalleryIntro } from '@/components/gallery-art';
import { LeadLink } from '@/components/lead-link';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Formation IA pratique et ateliers équipes | Velok',
  description: 'Comprendre l’IA, pratiquer sur une tâche de votre métier et repartir avec un premier usage à essayer en équipe.',
  alternates: { canonical: '/atelier-agents' },
};

export default function WorkshopPage() {
  return (
    <PageFrame>
      <div className="museum-offer">
      <GalleryIntro kicker="Formation IA · Ateliers équipes" title="Apprendre sur votre travail. Repartir avec un usage." lede="Une formation pratique commence par ce que vos équipes font déjà. Nous adaptons les exercices à leur métier et à leurs outils, sans audit d’inbox préalable."><GalleryArt className="gallery-offer-art" src="/brand/paintings/team-workshop.webp" alt="Illustration peinte d’une équipe et de son accompagnant qui examinent un exemple concret en atelier." number="02" title="Pratiquer ensemble." note="Des exemples adaptés au travail de votre équipe." priority /></GalleryIntro>
      <section className="content-band alt concise-band"><div className="content-grid">
        <article className="content-card element-card"><VisualElement name="07-market-module" /><h2>Comprendre</h2><p>Ce que les outils peuvent faire, ce qu’il faut vérifier et où ils peuvent aider dans votre quotidien.</p></article>
        <article className="content-card element-card"><VisualElement name="11-human-handoff" /><h2>Essayer</h2><p>Une tâche concrète sur un exemple adapté à l’atelier : préparer, chercher, synthétiser ou passer le relais.</p></article>
        <article className="content-card element-card"><VisualElement name="12-document-pack" /><h2>Réutiliser</h2><p>Une méthode de travail et un exercice que l’équipe peut reprendre après la séance.</p></article>
        <article className="content-card element-card"><VisualElement name="19-priority-marker" /><h2>Choisir la suite</h2><p>Un premier usage, une personne responsable et un critère d’observation. Une intégration seulement si elle apporte quelque chose.</p></article>
      </div></section>
      <section className="audit-disclosure"><h2>Le bon format pour votre équipe.</h2><p>Une sensibilisation pour comprendre ce qui change. Une formation pratique pour apprendre les outils. Un atelier pour essayer un usage métier ensemble. Nous convenons du format, des participants et du résultat attendu avant la séance.</p></section>
      <section className="content-band alt"><h2>Une formation ne doit pas rester une présentation.</h2><p>Le premier objectif est une pratique que l’équipe peut refaire. L’accompagnement AI Sherpa aide ensuite à l’adopter. Un projet d’implémentation reste une décision distincte, à prendre lorsque le besoin est démontré.</p><Link className="text-link" href="/ai-sherpa">Découvrir l’accompagnement AI Sherpa →</Link></section>
      <section className="page-cta"><h2>Quel travail votre équipe veut-elle améliorer ?</h2><LeadLink className="button button-cta" href="/commencer?offre=workshop">Préparer un atelier avec David <span aria-hidden="true">→</span></LeadLink></section>
    </div>
    </PageFrame>
  );
}
