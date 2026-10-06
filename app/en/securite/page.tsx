import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageFrame,
  PageIntro,
  VisualElement,
  WideIllustration,
} from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'Security, AI and data | Velok',
  'Established tools, a defined use case and verifiable controls.',
  '/en/securite',
);

export default function SecurityPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Security & data"
        title="Limited access. Traceable decisions."
        lede="Before connecting an AI tool, we define accessible data, permissions and authorised actions. Human approvals, activity records and retention rules are part of the scope."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/v2/workflows/security-access.webp"
          alt="Illustration: two professionals review access permissions and an activity log before approving an exception."
        />
      </section>
      <section className="content-band dark concise-band">
        <div className="content-grid">
          <article className="content-card element-card">
            <VisualElement name="16-control-dial" />
            <h2>Choose</h2>
            <p>A suitable tool, plan, region and settings.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="01-approval-gate" />
            <h2>Set boundaries</h2>
            <p>Minimum permissions and human approval.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="17-trace-ledger" />
            <h2>Keep a record</h2>
            <p>Sources, actions, decisions and incidents.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="15-ownership-token" />
            <h2>Hand over</h2>
            <p>Accounts, code and documentation for the client.</p>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Before any access</h2>
        <p>
          Data to be accessed, exclusions, permissions, retention periods and
          providers are defined before any connection. Velok does not replace
          your DPO or legal adviser.
        </p>
      </section>
      <section className="page-cta">
        <h2>Test your safeguards.</h2>
        <Link className="button button-cta" href="/en/diagnostic">
          Self-assessment · 3 min <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
