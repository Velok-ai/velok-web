import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'Privacy policy | Velok',
  'How Velok handles data from the website, forms and audit engagements.',
  '/en/confidentialite',
);

export default function PrivacyPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Personal data"
        title="Privacy policy"
        lede="This page distinguishes website data processing from processing during an engagement. For any question or request, contact David directly."
      />
      <section className="content-band alt">
        <div className="notice">
          <strong>Controller during the transition</strong>
          <p>
            Velok is currently operated by 9512624 Canada Ltd. The European
            entity that will take over the service will be identified here once
            incorporated.
          </p>
        </div>
        <h2>Visits and forms</h2>
        <p>
          The website does not use advertising trackers. Forms collect contact
          details, professional context and the answers you choose to provide.
          Campaign parameters in the URL may also be recorded to connect your
          request to the message you received.
        </p>
        <h2>Business enquiries</h2>
        <p>
          This information is used to respond, qualify your request and prepare
          a possible contractual relationship. The email sequence is only sent
          with your consent; you can unsubscribe at any time.
        </p>
        <h2>Audit engagements</h2>
        <p>
          Each engagement has a specific framework before any access. An audit
          may process message metadata and bodies in a temporary working copy.
          Only the summaries needed are retained after analysis, for the agreed
          period. Summaries are still treated as potentially personal or
          confidential.
        </p>
        <h2>Your rights</h2>
        <p>
          You may request access, rectification, erasure, restriction or
          objection where the applicable framework allows. Email{' '}
          <a className="text-link" href="mailto:david@velok.ai">
            david@velok.ai
          </a>
          . You may also contact the relevant supervisory authority.
        </p>
      </section>
    </PageFrame>
  );
}
