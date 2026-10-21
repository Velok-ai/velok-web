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
  'Optimise — Inbox audit | Velok',
  'A free audit of one inbox to identify a useful first workflow, then tailor the next steps to your needs.',
  '/en/audit',
);

export default function AuditPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Optimise · Inbox audit"
        title="One inbox. A first workflow to improve."
        lede="The free audit covers one inbox. We identify recurring requests, follow-ups and approvals, then choose the first workflow to improve with you. Not sure where to start? This is our recommended starting point."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/illustrations/human-control.webp"
          alt="An automated workflow returns to a person when an exception requires a decision."
        />
      </section>
      <section className="content-band alt">
        <h2>What an inbox reveals about real work.</h2>
        <div className="content-grid">
          <article className="content-card element-card">
            <VisualElement name="17-trace-ledger" />
            <h3>What happens</h3>
            <p>
              What is requested, followed up, received, passed on or reworked
              within the agreed scope.
            </p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="13-process-map" />
            <h3>Where work stalls</h3>
            <p>
              One step waits for another, information arrives elsewhere, an
              approval has no owner.
            </p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="11-human-handoff" />
            <h3>What the team must decide</h3>
            <p>
              The team confirms what is usable, what requires judgement and who
              remains responsible.
            </p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="19-priority-marker" />
            <h3>What to change first</h3>
            <p>
              A first workflow identified by the audit, such as following up on
              missing documents. A rule, an owner and an expected result before
              choosing an automation.
            </p>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>A written scope before any access.</h2>
        <p>
          Analysis is read-only within the agreed scope. Data to be read,
          exclusions, permissions actually requested by the provider, retention,
          providers and hosting are specified in writing before any connection.
          The audit does not include sending or modifying emails.
        </p>
        <Link href="/en/securite">See the security framework →</Link>
      </section>
      <section className="content-band dark concise-band">
        <h2>A concrete deliverable, then tailored next steps.</h2>
        <p>
          The audit deliverable describes the observed process, its bottlenecks
          and the first recommended workflow. We agree on the timeline before
          starting. If you continue, the scope and history depth are tailored to
          your situation, then implementation of that first workflow is scoped
          separately. A custom agent only follows an audit or AI Sherpa support,
          when the need warrants it.
        </p>
      </section>
      <section className="page-cta">
        <h2>Let’s start with one inbox.</h2>
        <p>
          To organise your team’s use of AI, you can also start directly with
          AI Sherpa. An audit is not a mandatory prerequisite for workshops.
        </p>
        <Link href="/en/ai-sherpa">Discover AI Sherpa →</Link>
        <Link className="button button-cta" href="/en/commencer?offre=audit">
          Discuss the free audit with David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}

