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
  'AI agents workshop | Velok',
  'Understand, test and set boundaries for a first AI agent with your team.',
  '/en/atelier-agents',
);

export default function WorkshopPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Learn · AI agents workshop"
        title="Learn to delegate while staying in control."
        lede="Your team builds a first agent for a simple use case, then learns to check what it does, what it uses and when it should stop."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/v2/workflows/presentation-equipe.webp"
          alt="Illustration: a professional discusses a digital workflow with a team during a workshop."
        />
      </section>
      <section className="content-band dark concise-band">
        <div className="content-grid">
          <article className="content-card element-card">
            <VisualElement name="16-control-dial" />
            <h2>Understand</h2>
            <p>Capabilities, limitations, data and responsibilities.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="01-approval-gate" />
            <h2>Choose a task</h2>
            <p>A specific need, an expected result and the people involved.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="11-human-handoff" />
            <h2>Practise</h2>
            <p>A simple agent on a real use case, without sensitive data.</p>
          </article>
          <article className="content-card element-card">
            <VisualElement name="12-document-pack" />
            <h2>Take it forward</h2>
            <p>Team rules and the next experiment.</p>
          </article>
        </div>
      </section>
      <section className="page-cta">
        <h2>Train the team on a real use case.</h2>
        <Link className="button button-cta" href="/en/commencer">
          Describe the use case <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
