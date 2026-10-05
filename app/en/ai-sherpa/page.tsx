import { pageMetadata } from '@/lib/en/site-metadata';
import { LeadLink } from '@/components/lead-link';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageFrame,
  PageIntro,
  WideIllustration,
} from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'AI Sherpa — Support your team | Velok',
  'Practical support to choose AI uses, train your team and establish a first repeatable use case.',
  '/en/ai-sherpa',
);

export default function SherpaPage() {
  return (
    <PageFrame>
      <div className="v2-home">
        <PageIntro
          kicker="AI Sherpa · Team support"
          title="A guide to help your team move forward."
          lede="You have questions, tools or initial trials. We help you choose the next useful action and put it into practice."
        />
        <section className="page-illustration-band">
          <WideIllustration
            src="/brand/v2/workflows/presentation-workshop.webp"
            alt="Illustration: a professional discusses a digital workflow with a team during a workshop."
          />
        </section>
        <section className="content-band alt">
          <h2>Advice that connects with the work.</h2>
          <div className="content-grid">
            <article className="content-card element-card">
              <h3>Choose</h3>
              <p>
                Examine possible uses starting from a real task. Decide what
                deserves a trial before buying or building.
              </p>
            </article>
            <article className="content-card element-card">
              <h3>Practise</h3>
              <p>
                Working sessions with the people involved. A method they can
                reuse in their profession.
              </p>
            </article>
            <article className="content-card element-card">
              <h3>Observe</h3>
              <p>
                Compare work before and after the trial: time, quality, rework
                and actual use. Choose the measure together.
              </p>
            </article>
            <article className="content-card element-card">
              <h3>Make it last</h3>
              <p>
                Adjust what gets in the way, hand over the practice and decide
                what follows with the team’s owner.
              </p>
            </article>
          </div>
        </section>
        <section className="audit-disclosure">
          <h2>Support and implementation: two scopes.</h2>
          <p>
            Advice and training may be enough for your team. If an integration
            or automation becomes useful, we scope it separately: deliverable,
            owner, access needed and success criteria. Existing tools come
            before custom development.
          </p>
          <Link href="/en/methode">See how we work →</Link>
        </section>
        <section className="content-band alt">
          <h2>You have already tried AI. What next?</h2>
          <p>
            The starting point may be an underused tool, a recurring task or a
            difficult handover between two people. We choose a first trial with
            the team, then decide what follows based on actual use.
          </p>
        </section>
        <section className="page-cta">
          <h2>Find the next useful action.</h2>
          <LeadLink
            className="button button-cta"
            href="/en/commencer?offre=sherpa"
          >
            Discuss AI Sherpa with David <span aria-hidden="true">→</span>
          </LeadLink>
        </section>
      </div>
    </PageFrame>
  );
}
