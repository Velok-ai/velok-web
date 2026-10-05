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
  'Operations audit | Velok',
  'Follow a real workflow before deciding what to automate, integrate or leave with the team.',
  '/en/audit',
);

export default function AuditPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Audit · operations"
        title="Before automating, let’s follow a real workflow."
        lede="A request arrives, someone responds, a document is missing, an approval is waiting. We follow the workflow to the point where it stalls, then the team confirms what needs to change."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/illustrations/human-control.webp"
          alt="An automated workflow returns to a person when an exception requires a decision."
        />
      </section>
      <section className="content-band alt">
        <h2>What a real workflow reveals.</h2>
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
              A rule, an owner and an expected result before choosing an
              automation.
            </p>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>A written scope before any access.</h2>
        <p>
          Data to be read, exclusions, permissions, retention, providers and
          hosting are specified before any connection. The scope is documented
          before access is granted.
        </p>
        <Link href="/en/securite">See the security framework →</Link>
      </section>
      <section className="content-band dark concise-band">
        <h2>The intended outcome: an operational decision.</h2>
        <p>
          The goal of scoping is not an abstract score. It is to choose a
          workflow, clarify its exceptions, assign responsibilities and decide
          what should be automated, if anything.
        </p>
      </section>
      <section className="page-cta">
        <h2>Let’s take a real workflow. Follow it to the bottleneck.</h2>
        <Link className="button button-cta" href="/en/commencer">
          Examine a process with David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
