import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageFrame,
  PageIntro,
  VisualElement,
  WideIllustration,
} from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'Optimiser — Audit de boîte courriel | Velok',
  'Un audit gratuit d’une boîte courriel pour repérer un premier workflow utile, puis cadrer la suite sur mesure.',
  '/audit',
);

export default function AuditPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Optimiser · Audit de boîte courriel"
        title="Une boîte courriel. Un premier workflow à améliorer."
        lede="L’audit gratuit porte sur une seule boîte courriel. Nous y repérons les demandes, relances et validations qui se répètent, puis choisissons avec vous le premier workflow à améliorer. Vous ne savez pas par où commencer ? C’est notre point de départ recommandé."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/illustrations/human-control.webp"
          alt="Un flux automatisé revient vers une personne lorsqu’une exception doit être tranchée."
        />
      </section>
      <section className="content-band alt">
        <h2>Ce qu’une boîte courriel révèle du travail réel.</h2>
        <div className="content-grid">
          <article className="content-card element-card">
            <VisualElement name="17-trace-ledger" />
            <h3>Ce qui se passe</h3>
            <p>
              Ce qui est demandé, relancé, reçu, transmis ou repris dans le
              périmètre convenu.
            </p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="13-process-map" />
            <h3>Où ça bloque</h3>
            <p>
              Une étape attend la précédente, une information arrive ailleurs,
              une validation reste sans propriétaire.
            </p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="11-human-handoff" />
            <h3>Ce que l’équipe doit trancher</h3>
            <p>
              Ce qui est exploitable, ce qui relève du jugement et qui reste
              responsable sont confirmés avec l’équipe.
            </p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="19-priority-marker" />
            <h3>Ce qu’on change d’abord</h3>
            <p>
              Un premier workflow issu de l’audit : par exemple, le suivi des
              pièces manquantes. Une règle, un responsable et un résultat attendu
              avant de choisir une automatisation.
            </p>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Un périmètre écrit avant tout accès.</h2>
        <p>
          L’analyse se fait en lecture seule dans le périmètre convenu. Données
          lues, exclusions, permissions réellement demandées par le fournisseur,
          conservation, prestataires et hébergement sont précisés par écrit avant
          toute connexion. L’audit ne prévoit ni envoi ni modification des courriels.
        </p>
        <Link href="/securite">Voir le cadre de sécurité →</Link>
      </section>
      <section className="content-band dark concise-band">
        <h2>Un livrable concret, puis une suite sur mesure.</h2>
        <p>
          Le livrable de l’audit décrit le flux observé, ses blocages et le
          premier workflow recommandé. Le calendrier est défini ensemble avant
          de commencer. Si vous poursuivez, le périmètre et la profondeur
          d’historique sont adaptés à votre situation, puis la mise en œuvre de
          ce premier workflow est cadrée séparément. Un agent sur mesure ne vient
          qu’après un audit ou un accompagnement AI Sherpa, si le besoin le justifie.
        </p>
      </section>
      <section className="page-cta">
        <h2>Commençons par une boîte courriel.</h2>
        <p>
          Pour organiser les usages de l’équipe, AI Sherpa est aussi accessible
          directement. L’audit n’est pas un préalable obligatoire aux ateliers.
        </p>
        <Link href="/ai-sherpa">Découvrir AI Sherpa →</Link>
        <Link className="button button-cta" href="/commencer?offre=audit">
          Parler de l’audit gratuit avec David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}

