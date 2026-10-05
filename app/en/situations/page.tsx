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
  'Four illustrative scenarios showing how Velok starts with real work before choosing a technology.',
  '/en/situations',
);

export default function SituationsPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Scenarios · illustrative examples"
        title="The problem before the technology."
        lede="Four illustrative cases showing how an operational problem becomes a design decision before choosing a tool, integration or agent."
      />
      <section className="situations-note">
        <strong>Illustrative cases.</strong>
        <p>
          The organisations, people and results described here are fictional.
          These scenarios only illustrate the scoping method.
        </p>
      </section>
      <div className="v2-home">
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">
                Marketing · illustrative workflow
              </p>
              <h2>From research to published content.</h2>
              <p>
                The team chooses sources and an angle, checks the draft and
                approves adaptations before publication. The workflow makes each
                handover and responsibility explicit.
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
              <p>
                The team organises information, people to meet and training
                steps. Each access permission and sensitive step still requires
                approval from the relevant owner.
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
      <section className="situations-list">
        {illustrativeSituations.map((item) => (
          <article className="situation-story" key={item.index}>
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
            <div className="situation-story-grid">
              <div>
                <span>The situation</span>
                <p>{item.situation}</p>
              </div>
              <div>
                <span>The work</span>
                <p>{item.work}</p>
              </div>
              <div>
                <span>What this teaches us</span>
                <p>{item.lesson}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="page-cta">
        <p className="section-kicker">Your situation</p>
        <h2>Bring a real problem. We will start by following the work.</h2>
        <Link className="button button-cta" href="/en/commencer">
          Examine a process with David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
