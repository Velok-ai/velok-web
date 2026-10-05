import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro } from '@/components/en/site-shell';
import { editorialStages } from '@/lib/en/v2-parcours';
export const metadata: Metadata = pageMetadata(
  'Understanding AI at work | Velok',
  'Facts, analysis, documented observations and methods for professional services teams.',
  '/en/learn',
);
export default function LearnPage() {
  return (
    <PageFrame>
      <PageIntro
        showTrust={false}
        kicker="Content · AI in context"
        title="Learn to work with AI, one step at a time."
        lede="Analysis for partners, leaders and team managers in professional services. A fact, an argument and its implications for work."
      />
      <div className="v2-home">
        <section className="v2-section v2-wrap">
          <p className="section-kicker">
            The thread running through our analysis
          </p>
          <div className="v2-editorial">
            {editorialStages.map(([title, body], i) => (
              <article key={title}>
                <span className="v2-number">0{i + 1}</span>
                <h2 style={{ fontSize: 24 }}>{title}</h2>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <p>
            Each article draws on identified sources. Trials and observations
            explain their context and limitations. Illustrative examples are
            labelled as such.
          </p>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap">
            <p className="section-kicker">The New Reality · Substack</p>
            <h2>Long-form analysis is published on Substack.</h2>
            <p>Explore the editions already published.</p>
            <a
              className="button button-primary"
              href="https://thenewreality.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              Read published articles ↗
            </a>
          </div>
        </section>
        <section className="v2-section v2-wrap">
          <h2>Introduce these uses to your team.</h2>
          <p>
            A session provides a way to examine specific tasks, understand what
            is changing and discuss possible first use cases.
          </p>
          <Link
            className="button button-primary"
            href="/en/commencer?besoin=awareness&source=learn"
          >
            Arrange a session for your team →
          </Link>
        </section>
      </div>
    </PageFrame>
  );
}
