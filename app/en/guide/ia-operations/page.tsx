import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageFrame,
  PageIntro,
  VisualElement,
} from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'Understanding AI in operations | Velok',
  'A short guide to choosing a first AI use case, protecting data and retaining human approval.',
  '/en/guide/ia-operations',
);

export default function OperationsGuidePage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Guide · No form required"
        title="Useful AI in your team’s work."
        lede="Six principles for choosing a first use case, implementing it and helping the team adopt it."
      />
      <section className="content-band alt guide-grid">
        {[
          [
            '03-intake-tray',
            'Start with the work',
            'Choose a repetitive, observable workflow that already takes time or resources.',
          ],
          [
            '16-control-dial',
            'Set the role’s boundaries',
            'Define what the agent can read, prepare or trigger.',
          ],
          [
            '01-approval-gate',
            'Place the approval step',
            'Keep a person responsible for sensitive decisions and external outputs.',
          ],
          [
            '18-data-intake-slot',
            'Limit the data',
            'Only share the information needed for the use case.',
          ],
          [
            '17-trace-ledger',
            'Keep the evidence',
            'Connect sources, outputs, corrections and approvals.',
          ],
          [
            '15-ownership-token',
            'Plan the handover',
            'Accounts, code and documentation must remain usable without Velok.',
          ],
        ].map(([asset, heading, body]) => (
          <article className="content-card element-card" key={heading}>
            <VisualElement name={asset} />
            <h2>{heading}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="audit-disclosure">
        <h2>OpenAI, Anthropic or another provider?</h2>
        <p>
          The provider follows the need. We favour professional plans and
          settings suited to the European context, then document choices, access
          and limitations with your team.
        </p>
      </section>
      <section className="page-cta">
        <h2>Apply these principles to a workflow.</h2>
        <Link className="button button-cta" href="/en/diagnostic">
          Take the self-assessment <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
