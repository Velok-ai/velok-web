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
          Each engagement has a written framework before any access. The audit
          reads message metadata and bodies, not attachment contents. Our code
          only reads: it never sends, moves, changes or deletes a message. The
          permission Microsoft displays is broader today, until our own
          read-only application replaces it. AI models are called with zero
          retention at their hosts.
        </p>
        <p>
          Message content is deleted no later than 30 days after the report is
          delivered. The report and its figures stay available while you use
          the service, then everything is deleted within 30 days, except
          records the law requires. A mailbox connection is removed within 24
          hours of disconnecting. A deletion request is handled within 7 days,
          and every deletion is confirmed in writing. The report is still
          treated as potentially personal or confidential.
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
