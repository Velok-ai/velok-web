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
  'Secure: the foundation for AI adoption | Velok',
  'An AI-use framework for your teams and IT leaders: data, access, human approval and responsibilities.',
  '/en/securite',
);

export default function SecurityPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Secure · The foundation"
        title="A clear framework before connecting AI."
        lede="Secure is the foundation for AI adoption. Together with your IT team and relevant owners, we define use cases, data and access before moving into automation. Human approval stays central to the process."
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
            <h2>Define the scope</h2>
            <p>Permitted uses, excluded data and responsibilities agreed in writing with your IT team.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="01-approval-gate" />
            <h2>Set boundaries</h2>
            <p>Access limited to the agreed scope, verified permissions and human approval checkpoints.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="17-trace-ledger" />
            <h2>Keep a record</h2>
            <p>Sources, actions, decisions and an incident escalation process to document.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="15-ownership-token" />
            <h2>Hand over</h2>
            <p>A guide, an AI-use policy template and a team sign-off page.</p>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>A practical first project: your AI-use policy.</h2>
        <p>
          We help you adapt a template to your use cases: approved tools,
          information that must not be shared, how to check results and who to
          contact when in doubt. A guide explains the day-to-day rules; a
          sign-off page lets each team member acknowledge that they have read
          them.
        </p>
        <p>
          Your IT team and designated owners approve the framework before it is
          shared. This project establishes a common foundation for your teams;
          it does not replace your DPO or legal adviser.
        </p>
      </section>
      <section className="audit-disclosure">
        <h2>A written scope before any access.</h2>
        <p>
          Data to be accessed, exclusions, providers, permissions, retention
          periods and human approval checkpoints are defined before any
          connection. Each tool’s settings and limitations are reviewed with
          your IT team.
        </p>
        <p>
          When a connector is designed only to retrieve data, its code performs
          reads only. This does not mean the provider offers read-only
          permissions: the actual permissions granted are checked and their
          limitations documented before activation. Any write action requires
          a separate scope and approval.
        </p>
      </section>
      <section className="page-cta">
        <h2>Build the foundation before going further.</h2>
        <Link className="button button-cta" href="/en/diagnostic">
          Self-assessment · 3 min <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}

