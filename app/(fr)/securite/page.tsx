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
  'Sécuriser : le socle de votre adoption IA | Velok',
  'Un cadre d’usage IA pour vos équipes et votre DSI : données, accès, validation humaine et responsabilités.',
  '/securite',
);

export default function SecurityPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Sécuriser · Le socle"
        title="Un cadre clair avant de connecter l’IA."
        lede="Sécuriser est le socle de votre adoption IA. Avec votre DSI et les responsables concernés, nous cadrons les usages, les données et les accès avant de passer à l’automatisation. La validation humaine reste au cœur du dispositif."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/v2/workflows/security-access.webp"
          alt="Illustration : deux professionnels vérifient les permissions d’accès et un journal d’activité avant de valider une exception."
        />
      </section>
      <section className="content-band dark concise-band">
        <div className="content-grid">
          <article className="content-card element-card">
            <VisualElement name="16-control-dial" />
            <h2>Cadrer</h2>
            <p>Usages autorisés, données exclues et responsabilités définis par écrit avec votre DSI.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="01-approval-gate" />
            <h2>Borner</h2>
            <p>Accès limités au périmètre convenu, permissions vérifiées et points de validation humaine.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="17-trace-ledger" />
            <h2>Tracer</h2>
            <p>Sources, actions, décisions et procédure de remontée des incidents à documenter.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="15-ownership-token" />
            <h2>Transmettre</h2>
            <p>Guide, modèle de politique d’usage IA et page de validation pour vos équipes.</p>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Un premier projet concret : votre politique d’usage IA.</h2>
        <p>
          Nous vous accompagnons pour adapter un modèle à vos usages : outils
          autorisés, informations à ne pas partager, vérification des résultats
          et personne à contacter en cas de doute. Un guide explique les règles
          au quotidien ; une page de validation permet à chaque membre de
          l’équipe de confirmer qu’il en a pris connaissance.
        </p>
        <p>
          Votre DSI et les responsables désignés valident le cadre avant sa
          diffusion. Ce projet pose une base commune pour les équipes, sans
          remplacer votre DPO ni votre conseil juridique.
        </p>
      </section>
      <section className="audit-disclosure">
        <h2>Un périmètre écrit avant tout accès.</h2>
        <p>
          Les données consultées, les exclusions, les prestataires, les
          permissions, les durées de conservation et les validations humaines
          sont définis avant toute connexion. Les paramètres et les limites de
          chaque outil sont examinés avec votre DSI.
        </p>
        <p>
          Lorsqu’un connecteur est prévu uniquement pour consulter des données,
          son code se limite à la lecture. Cela ne signifie pas que le fournisseur
          propose des permissions exclusivement en lecture seule : les droits
          effectivement accordés sont vérifiés et leurs limites documentées avant
          activation. Toute action d’écriture fait l’objet d’un périmètre et
          d’une validation distincts.
        </p>
      </section>
      <section className="page-cta">
        <h2>Poser les bases avant d’aller plus loin.</h2>
        <Link className="button button-cta" href="/diagnostic">
          Diagnostic · 3 min <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}

