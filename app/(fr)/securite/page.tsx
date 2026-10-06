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
  'Sécurité, IA et données | Velok',
  'Des outils reconnus, un cas d’usage cadré et des contrôles vérifiables.',
  '/securite',
);

export default function SecurityPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Sécurité & données"
        title="Des accès limités. Des décisions traçables."
        lede="Avant de connecter un outil IA, nous définissons les données accessibles, les permissions et les actions autorisées. Les validations humaines, les traces et les règles de conservation font partie du périmètre."
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
            <h2>Choisir</h2>
            <p>Outil, offre, région et paramètres adaptés.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="01-approval-gate" />
            <h2>Borner</h2>
            <p>Permissions minimales et validation humaine.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="17-trace-ledger" />
            <h2>Tracer</h2>
            <p>Sources, actions, décisions et incidents.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="15-ownership-token" />
            <h2>Transmettre</h2>
            <p>Comptes, code et documentation au client.</p>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Avant tout accès</h2>
        <p>
          Les données consultées, les exclusions, les permissions, les durées de
          conservation et les prestataires sont définis avant toute connexion.
          Velok ne remplace ni votre DPO ni votre conseil juridique.
        </p>
      </section>
      <section className="page-cta">
        <h2>Tester vos garde-fous.</h2>
        <Link className="button button-cta" href="/diagnostic">
          Diagnostic · 3 min <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
