import { SoftwareEcosystem } from '@/components/software-ecosystem';
import { workflowSoftware } from '@/lib/software-ecosystems';
import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  PageFrame,
  PageIntro,
  VisualElement,
} from '@/components/en/site-shell';
import { illustrativeSituations } from '@/lib/en/illustrative-situations';

export const metadata: Metadata = pageMetadata(
  'Scenarios | Velok',
  'AI systems to scope around your business software: Pennylane, Cegid Loop, Kleos, Salesforce, HubSpot, Bullhorn and Microsoft 365.',
  '/en/situations',
);

export default function SituationsPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Your work · your software · your AI"
        title="Your AI, connected to your business software."
        lede="Accounting, legal, consulting or recruitment: we start with your work and the software you already use to scope an agentic system that helps your team."
      />
      <section className="situations-note">
        <strong>Illustrative cases.</strong>
        <p>
          The organisations and scenarios are fictional; the software is real.
          Their APIs let us assess custom connections: these examples are not integrations already deployed by VELOK.
        </p>
      </section>
      <nav className="situations-sector-nav" aria-label="Choose your business">
        <a href="#expertise-comptable">Accounting <span aria-hidden="true">↓</span></a>
        <a href="#avocats">Legal <span aria-hidden="true">↓</span></a>
        <a href="#conseil">B2B consulting <span aria-hidden="true">↓</span></a>
        <a href="#recrutement">Recruitment <span aria-hidden="true">↓</span></a>
      </nav>
      <section className="situations-list">
        {illustrativeSituations.map((item) => (
          <article className="situation-story" id={item.id} key={item.id}>
            <div className="situation-story-head">
              <span>
                {item.index} / {item.stage}
              </span>
              <VisualElement name={item.asset} />
            </div>
            <div className="situation-story-title">
              <h2>{item.sector}</h2>
              <p>{item.profile}</p>
            </div>
            <SoftwareEcosystem software={item.software} language="en" />
            <div className="situation-story-grid">
              <div>
                <span>The situation</span>
                <p>{item.situation}</p>
              </div>
              <div>
                <span>The system to scope</span>
                <p>{item.work}</p>
              </div>
              <div>
                <span>What this teaches us</span>
                <p>{item.lesson}</p>
              </div>
            </div>
            <Link className="text-link situation-contact" href={`/en/commencer?besoin=integration&source=situations-${item.id}`}>
              Scope a connection for my team <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </section>
      <div className="v2-home">
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">
                Marketing · illustrative workflow
              </p>
              <h2>Your content, from research to publication.</h2>
              <SoftwareEcosystem software={workflowSoftware.marketing} language="en" />
              <p>
                Connect a content library in Notion with contacts or campaigns
                in HubSpot or Brevo: the system can prepare adaptations and
                distribution. The team approves the angle, tone and every item before publication.
              </p>
              <p>
                <strong>
                  Research → draft → review → adaptations → publication.
                </strong>
              </p>
            </div>
            <figure className="v2-team-scene">
              <Image
                src="/brand/v2/workflows/workflow-marketing.webp"
                alt="A marketing team works on research, content and distribution using digital screens."
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption>
                An example workflow to scope with your team.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="v2-section">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">Sales · illustrative workflow</p>
              <h2>From first contact to the next action.</h2>
              <SoftwareEcosystem software={workflowSoftware.sales} language="en" />
              <p>
                Understand the need, prepare the conversation and record the
                next action: a shared process helps the sales team retain
                context. Qualification and commitments remain human decisions.
              </p>
              <p>
                <strong>Lead → qualification → proposal → follow-up.</strong>
              </p>
            </div>
            <figure className="v2-team-scene">
              <Image
                src="/brand/v2/workflows/workflow-sales.webp"
                alt="A sales team talks with a client around a tablet, with a digital pipeline displayed on the wall."
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption>
                An example workflow to scope with your team.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">
                Human resources · illustrative workflow
              </p>
              <h2>Prepare an arrival, support the first days.</h2>
              <SoftwareEcosystem software={workflowSoftware.hr} language="en" />
              <p>
                Using authorised information in Lucca or Personio, prepare
                the onboarding plan and next steps in Microsoft 365. Each access
                permission and sensitive step still requires approval from the relevant owner.
              </p>
              <p>
                <strong>
                  Preparation → access → team → training → follow-up.
                </strong>
              </p>
            </div>
            <figure className="v2-team-scene">
              <Image
                src="/brand/v2/workflows/workflow-rh.webp"
                alt="A team supports a new colleague through a digital training and follow-up plan."
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption>
                An example workflow to scope with your team.
              </figcaption>
            </figure>
          </div>
        </section>
      </div>

      <section className="page-cta">
        <p className="section-kicker">Your situation</p>
        <h2>Which tools do you use? What work would you like to simplify?</h2>
        <Link className="button button-cta" href="/en/commencer">
          Discuss my tools with David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
