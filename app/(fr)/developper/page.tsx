import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageFrame, PageIntro } from '@/components/site-shell';
export const metadata: Metadata = pageMetadata("Développer | Votre département IA — Velok", "Partir d’une cible claire et d’une campagne que votre équipe peut valider, piloter et améliorer. L’IA prépare et facilite le suivi ; votre équipe garde les décisions commerciales.", '/developper');
export default function DevelopperPage() {
  return <PageFrame><div className="v2-home">
    <PageIntro kicker="Développer · Premier chantier" title="Développer votre activité, avec une première campagne." lede="Partir d’une cible claire et d’une campagne que votre équipe peut valider, piloter et améliorer. L’IA prépare et facilite le suivi ; votre équipe garde les décisions commerciales." />
    <section className="v2-section v2-wrap v2-split">
      <div><p className="section-kicker">Un point de départ concret</p><h2>Une campagne de prospection prête à valider.</h2><p>Livrable : critères de ciblage, séquences de prospection, règles de traitement des réponses et modèle de préparation des rendez-vous. Les canaux, le périmètre et le calendrier sont définis ensemble avant la mise en place.</p><Link className="button button-primary" href="/commencer?besoin=integration&amp;source=developper">Parler de ma première campagne →</Link></div>
      <figure className="v2-team-scene"><Image src="/brand/v2/workflows/workflow-sales.webp" alt="Illustration : une équipe prépare ensemble un workflow commercial." width={1536} height={1024} sizes="(max-width: 900px) 100vw, 50vw" /></figure>
    </section>
    <section className="v2-section v2-soft"><div className="v2-wrap"><h2>Du ciblage au rendez-vous.</h2><div className="v2-three"><article><span className="v2-number">01</span><h3>Cibler</h3><p>Définir les comptes prioritaires, les interlocuteurs pertinents et les signaux qui rendent une prise de contact utile.</p></article><article><span className="v2-number">02</span><h3>Préparer</h3><p>Préparer les séquences de prospection et une fiche de préparation des rendez-vous à valider par l’équipe.</p></article><article><span className="v2-number">03</span><h3>Traiter les réponses</h3><p>Définir les catégories de réponses, les responsables et les règles de reprise. Les réponses sensibles et les engagements restent validés par une personne.</p></article></div></div></section>
    <section className="v2-section v2-wrap v2-split"><div><p className="section-kicker">Un usage complémentaire</p><h2>Transformer un appel en vidéos courtes.</h2><p>Un workflow de contenu peut extraire les thèmes utiles d’un enregistrement autorisé, préparer des formats courts et organiser leur validation éditoriale. C’est un périmètre complémentaire, pas un préalable à votre première campagne.</p></div><div><h3>Commencer avec les outils existants.</h3><p>Les agents sur mesure viennent après un audit ou un accompagnement AI Sherpa qui en confirme l’utilité. Accès, usages des données et validations humaines sont définis avant toute connexion.</p><Link className="text-link" href="/securite">Découvrir le socle commun →</Link></div></section>
    <section className="page-cta"><h2>Choisir une première priorité commerciale.</h2><Link className="button button-cta" href="/commencer?besoin=integration&amp;source=developper">Échanger avec David →</Link></section>
  </div></PageFrame>;
}
