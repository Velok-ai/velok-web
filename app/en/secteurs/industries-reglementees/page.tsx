import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageFrame,
  PageIntro,
  WideIllustration,
} from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'AI for regulated industries | Velok',
  'An operational method for scoping AI uses where data, evidence and responsibility matter.',
  '/en/secteurs/industries-reglementees',
);

export default function RegulatedIndustriesPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Regulated industries"
        title="Speed does not remove the need for evidence."
        lede="We adapt tools, access and approval to the real workflow and your obligations, rather than a generic recipe."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/illustrations/human-control.webp"
          alt="A system automates routine tasks and sends exceptions to a named person."
        />
      </section>
      <section className="content-band alt">
        <h2>Four questions before the tool</h2>
        <div className="content-grid">
          <article className="content-card">
            <h3>Which data?</h3>
            <p>Origin, sensitivity, destination and useful retention period.</p>
          </article>
          <article className="content-card">
            <h3>Which action?</h3>
            <p>Read, prepare, propose, modify or send.</p>
          </article>
          <article className="content-card">
            <h3>Which person?</h3>
            <p>Owner, approver and escalation contact.</p>
          </article>
          <article className="content-card">
            <h3>Which evidence?</h3>
            <p>Sources, version, decision and event to record.</p>
          </article>
        </div>
      </section>
      <section className="sector-index">
        <Link href="/en/secteurs/assurance">
          Insurance <span>→</span>
        </Link>
        <Link href="/en/secteurs/expertise-comptable">
          Accounting <span>→</span>
        </Link>
        <Link href="/en/secteurs/services-financiers">
          Financial services <span>→</span>
        </Link>
        <Link href="/en/secteurs/juridique">
          Legal services <span>→</span>
        </Link>
      </section>
      <section className="page-cta">
        <h2>Scope the first use case.</h2>
        <Link className="button button-cta" href="/en/commencer">
          Talk to David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
