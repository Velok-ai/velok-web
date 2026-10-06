import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import {
  auditMailto,
  PageFrame,
  PageIntro,
  WideIllustration,
} from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'IA et opérations d’assurance | Velok',
  'Cartographier et améliorer les opérations d’assurance sans perdre la traçabilité ni le contrôle humain.',
  '/secteurs/assurance',
);

export default function InsurancePage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Secteur · Assurance"
        title="Un dossier rapide reste un dossier vérifiable."
        lede="Une déclaration arrive, une pièce manque, le statut change, un partenaire attend. Velok rend ces étapes visibles et automatise seulement ce qui peut l’être sans déplacer la responsabilité."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/illustrations/sector-workflows.webp"
          alt="Des pièces reçues sont classées, signalées ou transmises selon leur état avant validation."
        />
      </section>
      <section className="content-band alt">
        <h2>Les flux à regarder en premier</h2>
        <div className="content-grid">
          <article className="content-card">
            <h3>Entrée et qualification</h3>
            <p>
              Demandes, pièces manquantes, extraction et routage vers le bon
              responsable.
            </p>
          </article>
          <article className="content-card">
            <h3>Suivi des dossiers</h3>
            <p>
              Relances, changements de statut, exceptions et attentes entre
              partenaires.
            </p>
          </article>
          <article className="content-card">
            <h3>Contrôle humain</h3>
            <p>
              Les décisions qui exigent validation, expertise ou justification.
            </p>
          </article>
          <article className="content-card">
            <h3>Trace et restitution</h3>
            <p>Ce qui a été reçu, proposé, validé, modifié et transmis.</p>
          </article>
        </div>
      </section>
      <section className="content-band dark">
        <h2>Ce qu’il faut vérifier avant d’automatiser</h2>
        <p>
          Où le dossier attend, quelle pièce manque, qui doit décider et quelle
          action doit rester attribuée à une personne. L’automatisation vient
          après ces réponses.
        </p>
      </section>
      <section className="page-cta">
        <h2>Cartographier une opération réelle.</h2>
        <a className="button button-cta" href={auditMailto}>
          Parler à David <span aria-hidden="true">↗</span>
        </a>
      </section>
    </PageFrame>
  );
}
