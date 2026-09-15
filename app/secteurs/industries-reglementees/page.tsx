import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'IA pour les industries réglementées | Velok',
  description: 'Une méthode opérationnelle pour cadrer les usages IA où les données, la preuve et la responsabilité comptent.',
};

export default function RegulatedIndustriesPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Industries réglementées" title="La vitesse n’efface pas l’obligation de preuve." lede="Nous adaptons l’outil, les accès et la validation au flux réel et à vos obligations, jamais à une recette générique." />
      <section className="content-band alt">
        <h2>Quatre questions avant l’outil</h2>
        <div className="content-grid">
          <article className="content-card"><h3>Quelle donnée ?</h3><p>Origine, sensibilité, destination et durée utile.</p></article>
          <article className="content-card"><h3>Quelle action ?</h3><p>Lire, préparer, proposer, modifier ou envoyer.</p></article>
          <article className="content-card"><h3>Quelle personne ?</h3><p>Responsable, valideur et point d’escalade.</p></article>
          <article className="content-card"><h3>Quelle preuve ?</h3><p>Sources, version, décision et événement à retracer.</p></article>
        </div>
      </section>
      <section className="sector-index">
        <Link href="/secteurs/assurance">Assurance <span>→</span></Link>
        <Link href="/secteurs/expertise-comptable">Expertise comptable <span>→</span></Link>
        <Link href="/secteurs/services-financiers">Services financiers <span>→</span></Link>
        <Link href="/secteurs/juridique">Professions juridiques <span>→</span></Link>
      </section>
      <section className="page-cta"><h2>Cadrer le premier usage.</h2><Link className="button button-cta" href="/commencer">Parler à David <span aria-hidden="true">→</span></Link></section>
    </PageFrame>
  );
}
