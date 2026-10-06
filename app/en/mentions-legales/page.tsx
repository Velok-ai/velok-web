import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'Legal notice | Velok',
  'Publisher, publication director, hosting and contact details for the Velok website.',
  '/en/mentions-legales',
);

export default function LegalPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Legal information"
        title="Legal notice"
        lede="Velok is being incorporated as a separate entity. The information below describes the situation during this transition."
      />
      <section className="content-band alt">
        <div className="notice">
          <strong>Legal transition</strong>
          <p>
            The service is operated by 9512624 Canada Ltd. until the Velok
            entity is incorporated. Contractual documents always identify the
            entity responsible for the engagement.
          </p>
        </div>
        <h2>Publisher</h2>
        <p>
          9512624 Canada Ltd., operating under the Velok brand during the
          transition. Registration and postal details are provided in
          contractual documents or on request.
        </p>
        <h2>Publication director</h2>
        <p>David Desbons Lauvaux.</p>
        <h2>Contact</h2>
        <p>
          <a className="text-link" href="mailto:david@velok.ai">
            david@velok.ai
          </a>
        </p>
        <h2>Hosting</h2>
        <p>
          The website is hosted by Vercel Inc. The application infrastructure
          and any subcontractors involved in an engagement are specified in its
          contractual framework.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Text, graphics and trademarks on this website may not be reproduced or
          used without permission, subject to third-party rights and applicable
          licences.
        </p>
      </section>
    </PageFrame>
  );
}
