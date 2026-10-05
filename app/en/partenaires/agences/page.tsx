import { pageMetadata } from '@/lib/en/site-metadata';
import { LeadLink } from '@/components/lead-link';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro } from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'Agencies — Explore an AI partnership | Velok',
  'Train your team and scope a useful first use case for your clients with Velok.',
  '/en/partenaires/agences',
);

export default function AgenciesPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Agencies · Partnerships"
        title="A useful first use case, for you or your clients."
        lede="Your team wants to practise with AI, or a client asks for your help. Start with their work to define a first workshop and possible next steps."
      />
      <section className="content-band alt">
        <div className="content-grid">
          <article className="content-card">
            <h3>For your team</h3>
            <p>
              Prepare a brief, summarise feedback or reuse proposals: choose a
              task, learn a method and observe its use.
            </p>
            <Link className="text-link" href="/en/atelier-agents">
              Explore the workshops →
            </Link>
          </article>
          <article className="content-card">
            <h3>With your clients</h3>
            <p>
              Scope the need together. Agree on who owns the relationship, runs
              the workshop, handles any integration and supports adoption.
            </p>
            <Link className="text-link" href="/en/ai-sherpa">
              Explore team support →
            </Link>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Start with a specific collaboration.</h2>
        <p>
          One client, one need and a first expected result. Responsibilities,
          scope and partnership terms are agreed before the engagement.
        </p>
      </section>
      <section className="page-cta">
        <h2>Discuss a first use case together.</h2>
        <LeadLink
          className="button button-cta"
          href="/en/commencer?offre=partner"
        >
          Explore a partnership with David <span aria-hidden="true">→</span>
        </LeadLink>
      </section>
    </PageFrame>
  );
}
