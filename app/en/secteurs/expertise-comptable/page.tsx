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
  'Accounting | Velok',
  'Follow a document from collection to review, without confusing received with usable.',
  '/en/secteurs/expertise-comptable',
);

export default function AccountingPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Accounting · partners & operations leaders"
        title="The document is received. The file is not moving."
        lede="A document may be received, misfiled, incomplete or unusable for the period concerned. We follow the file through to review to see where follow-ups and rework begin."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/v2/workflows/workflow-comptabilite.webp"
          alt="Illustration: an accountant examines digital documents and exceptions before approving a file."
        />
      </section>
      <section className="content-band alt">
        <h2>Received does not mean usable.</h2>
        <div className="content-grid">
          <article className="content-card">
            <VisualElement name="03-intake-tray" />
            <h3>Received, but not the right one.</h3>
            <p>
              The document arrives. It covers the wrong period or does not yet
              allow work to continue.
            </p>
          </article>
          <article className="content-card">
            <VisualElement name="04-message-stack" />
            <h3>The reply is in another thread.</h3>
            <p>
              The client replies elsewhere. The team member reconciles the
              conversations manually.
            </p>
          </article>
          <article className="content-card">
            <VisualElement name="10-exception-beacon" />
            <h3>The review starts too early.</h3>
            <p>
              The file goes to review while something is still missing. The
              review stops, then restarts.
            </p>
          </article>
          <article className="content-card">
            <VisualElement name="11-human-handoff" />
            <h3>The decision remains human.</h3>
            <p>
              Messages show receipt and follow-up. They do not decide whether a
              document is correct.
            </p>
          </article>
        </div>
      </section>
      <section className="content-band dark">
        <h2>The real issue starts after receipt.</h2>
        <p>
          Choose a type of file, follow requests, reminders and replies, then
          define with the team what makes a document genuinely usable. The rule
          for moving to review follows, before any decision to automate.
        </p>
      </section>
      <section className="content-band alt">
        <h2>What the messages do not show.</h2>
        <div className="content-grid">
          <article className="content-card">
            <h3>Accounting validity</h3>
            <p>Professional judgement remains with your team.</p>
          </article>
          <article className="content-card">
            <h3>Actual working time</h3>
            <p>A delay between two messages is not production time.</p>
          </article>
          <article className="content-card">
            <h3>What happens outside email</h3>
            <p>
              Portal, phone and messaging activity is confirmed with the team.
            </p>
          </article>
          <article className="content-card">
            <h3>Your software</h3>
            <p>
              If it already addresses the problem, the first conversation will
              show it. We then examine what remains around it.
            </p>
          </article>
        </div>
      </section>
      <section className="page-cta">
        <h2>Let’s take a collection process. Follow a document to review.</h2>
        <Link className="button button-cta" href="/en/commencer">
          Examine document collection with David{' '}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
