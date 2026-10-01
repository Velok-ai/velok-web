import { LeadLink } from '@/components/lead-link';
import { GalleryArt } from '@/components/gallery-art';
import { VisualJourney } from '@/components/painted-object';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/site-shell';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="museum-home focused-home" id="main-content">
        <section className="gallery-hero">
          <div className="gallery-hero-copy">
            <p className="eyebrow"><span /> Formation &amp; accompagnement IA</p>
            <h1>L’IA utile.<br /><em>Sans complexité.</em></h1>
            <p>Nous formons vos équipes sur leur travail réel, puis mettons en place avec elles le premier usage qui mérite d’être répété.</p>
            <div className="hero-actions">
              <LeadLink className="button button-primary" href="/commencer">Trouver le premier usage utile <span aria-hidden="true">→</span></LeadLink>
              <a className="text-link" href="#offres">Choisir votre point de départ <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <GalleryArt className="gallery-hero-art" src="/brand/paintings/guided-ai-practice.webp" alt="Illustration peinte de deux collègues : une personne compare un document au brouillon d’un assistant IA, pendant qu’un guide lui montre un point à vérifier." number="01" title="Votre travail. Un essai accompagné." note="" sizes="(max-width: 760px) 100vw, 54vw" priority />
        </section>

        <section className="entry-section" id="offres" aria-labelledby="offers-heading">
          <div className="short-heading">
            <p className="section-kicker">Deux façons de commencer</p>
            <h2 id="offers-heading">Faire un premier essai.<br /><em>Ou avancer dans la durée.</em></h2>
          </div>
          <div className="entry-grid">
            <Link className="entry-card" href="/atelier-agents">
              <div className="offer-painting"><Image src="/brand/paintings/team-workshop.webp" alt="Une équipe essaie une tâche concrète autour d’une table, avec un formateur." fill sizes="(max-width: 760px) 100vw, 46vw" /></div>
              <span>Formation &amp; ateliers</span><h3>Apprendre en faisant.</h3>
              <p>Un atelier pour essayer l’IA sur une tâche de votre métier et repartir avec une méthode.</p>
              <strong>Découvrir les ateliers <span aria-hidden="true">→</span></strong>
            </Link>
            <Link className="entry-card" href="/ai-sherpa">
              <div className="offer-painting"><Image src="/brand/paintings/sherpa-working-session.webp" alt="Une personne travaille sur son dossier avec un guide à ses côtés." fill sizes="(max-width: 760px) 100vw, 46vw" /></div>
              <span>Accompagnement AI Sherpa</span><h3>Installer une pratique.</h3>
              <p>Des séances et un suivi pour aider votre équipe à reprendre l’usage dans son travail quotidien.</p>
              <strong>Découvrir AI Sherpa <span aria-hidden="true">→</span></strong>
            </Link>
          </div>
        </section>

        <VisualJourney />

        <section className="page-cta home-conversation">
          <div>
            <p className="section-kicker">Votre premier pas</p>
            <h2>Vous avez une tâche en tête ?</h2>
            <p>David vous aide à choisir le bon format. Nous partons de vos outils ; toute intégration se cadre séparément.</p>
          </div>
          <LeadLink className="button button-cta" href="/commencer">En parler avec David <span aria-hidden="true">→</span></LeadLink>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
