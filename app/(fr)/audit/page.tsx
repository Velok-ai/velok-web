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
  'Audit des opérations | Velok',
  'Suivre un flux réel avant de décider quoi automatiser, intégrer ou laisser à l’équipe.',
  '/audit',
);

export default function AuditPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Audit · opérations"
        title="Avant d’automatiser, suivons un flux réel."
        lede="Une demande arrive, quelqu’un répond, une pièce manque, une validation attend. Nous suivons le flux jusqu’au point de blocage, puis l’équipe confirme ce qu’il faut changer."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/illustrations/human-control.webp"
          alt="Un flux automatisé revient vers une personne lorsqu’une exception doit être tranchée."
        />
      </section>
      <section className="content-band alt">
        <h2>Ce qu’un flux réel permet de voir.</h2>
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
              Une règle, un responsable et un résultat attendu avant de choisir
              une automatisation.
            </p>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Un périmètre écrit avant tout accès.</h2>
        <p>
          Données lues, exclusions, permissions, conservation, prestataires et
          hébergement sont précisés avant toute connexion. Le périmètre est
          documenté avant l’accès.
        </p>
        <Link href="/securite">Voir le cadre de sécurité →</Link>
      </section>
      <section className="content-band dark concise-band">
        <h2>Le résultat attendu : une décision opérationnelle.</h2>
        <p>
          À la fin du cadrage, l’objectif n’est pas de produire un score
          abstrait. Il est de choisir un flux, clarifier ses exceptions, nommer
          les responsabilités et décider ce qui mérite — ou non — d’être
          automatisé.
        </p>
      </section>
      <section className="page-cta">
        <h2>Prenons un flux réel. Suivons-le jusqu’au blocage.</h2>
        <Link className="button button-cta" href="/commencer">
          Examiner un processus avec David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
