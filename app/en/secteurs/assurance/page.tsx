import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import {
  auditMailto,
  PageFrame,
  PageIntro,
  WideIllustration,
} from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'AI and insurance operations | Velok',
  'Map and improve insurance operations while retaining traceability and human control.',
  '/en/secteurs/assurance',
);

export default function InsurancePage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Sector · Insurance"
        title="A faster file must still be verifiable."
        lede="A claim arrives, a document is missing, a status changes, a partner is waiting. Velok makes these steps visible and only automates what can be automated without shifting responsibility."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/illustrations/sector-workflows.webp"
          alt="Documents received are classified, flagged or passed on according to their status before approval."
        />
      </section>
      <section className="content-band alt">
        <h2>Workflows to examine first</h2>
        <div className="content-grid">
          <article className="content-card">
            <h3>Intake and qualification</h3>
            <p>
              Requests, missing documents, extraction and routing to the right
              owner.
            </p>
          </article>
          <article className="content-card">
            <h3>Case follow-up</h3>
            <p>
              Reminders, status changes, exceptions and dependencies between
              partners.
            </p>
          </article>
          <article className="content-card">
            <h3>Human control</h3>
            <p>Decisions that require approval, expertise or justification.</p>
          </article>
          <article className="content-card">
            <h3>Records and reporting</h3>
            <p>What was received, proposed, approved, changed and passed on.</p>
          </article>
        </div>
      </section>
      <section className="content-band dark">
        <h2>What to check before automating</h2>
        <p>
          Where the file is waiting, which document is missing, who needs to
          decide and which action must remain assigned to a person. Automation
          follows these answers.
        </p>
      </section>
      <section className="page-cta">
        <h2>Map a real operation.</h2>
        <a className="button button-cta" href={auditMailto}>
          Talk to David <span aria-hidden="true">↗</span>
        </a>
      </section>
    </PageFrame>
  );
}
