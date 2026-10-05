import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/en/site-shell';
import { PrequalificationForm } from '@/components/en/lead-forms';

export const metadata: Metadata = pageMetadata(
  'Find a first use case | Velok',
  'Awareness, training, workshops, integration or adoption: let’s discuss a useful first step for your team.',
  '/en/commencer',
);

export default function StartPage({
  searchParams,
}: {
  searchParams: { besoin?: string };
}) {
  return (
    <PageFrame>
      <PageIntro
        kicker="A first conversation"
        title="What would be a useful first use case for your team?"
        lede="Start with a task, a recurring frustration or a team you want to help. You can also ask about awareness sessions or training without having chosen a tool."
      />
      <section className="form-page">
        <PrequalificationForm initialOfferInterest={searchParams.besoin} />
        <p className="v2-note">
          Prefer to email directly?{' '}
          <a href="mailto:david@velok.ai">david@velok.ai</a>
        </p>
      </section>
    </PageFrame>
  );
}
