import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/lib/en/site-metadata';
import { PageFrame, PageIntro } from '@/components/en/site-shell';

export const metadata: Metadata = pageMetadata(
  'Understand the workflow before choosing the tool | Velok',
  'Understand your team’s steps, tools and handovers, then choose a first AI use case to try and take over.',
  '/en/methode',
);
const steps = [
  [
    'Understand',
    'Connect changes in AI to your team’s tasks, steps and questions.',
  ],
  [
    'Learn',
    'Practise with tools on a task from your profession. Learn to review and check the result.',
  ],
  ['Identify', 'Choose a first use case, its owner and a baseline measure.'],
  [
    'Implement',
    'Scope a tool, integration or automation when the need justifies it.',
  ],
  [
    'Adopt',
    'Observe actual use, support people and adjust what gets in the way.',
  ],
  [
    'Expand',
    'Repeat what works. Choose the next use case based on observed results.',
  ],
];
export default function MethodPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Our method"
        title="Understand the workflow before choosing the tool."
        lede="Steps, tools, people and handovers: we start with how your team works to choose a useful first use case."
      />
      <div className="v2-home">
        <section className="v2-section v2-wrap v2-split">
          <div>
            <p className="section-kicker">Your starting point</p>
            <h2>Start where your team is today.</h2>
            <p>
              You may be discovering AI, already using tools or helping a team
              adopt a first use case. The starting point depends on what your
              team can already do.
            </p>
            <p>
              Understand → Learn → Identify → Implement → Adopt → Expand: these
              six steps are not six compulsory purchases.
            </p>
          </div>
          <figure className="v2-team-scene">
            <Image
              src="/brand/v2/adoption.webp"
              alt="Illustration: a professional practises with her tools at her workstation, supported by a colleague."
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>
              Understand the steps. Practise in your tools.
            </figcaption>
          </figure>
        </section>
        <section className="v2-section v2-navy">
          <div className="v2-wrap">
            <p className="section-kicker">From learning to adoption</p>
            <ol className="v2-parcours">
              {steps.map(([title, body], i) => (
                <li key={title}>
                  <span className="v2-number">0{i + 1}</span>
                  <h2 style={{ fontSize: 28 }}>{title}</h2>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="v2-section v2-wrap" id="premier-usage">
          <p className="section-kicker">
            Illustrative example · following up a client meeting
          </p>
          <h2>From notes to a method the team can use.</h2>
          <p className="v2-lede">
            The meeting notes exist, but decisions, open questions and actions
            are mixed together. We examine this workflow before deciding where
            AI can help.
          </p>
          <div className="v2-three">
            <article>
              <span className="v2-number">01 · Understand the process</span>
              <h3>What the next person needs to receive.</h3>
              <p>
                Authorised notes, a follow-up template and someone who knows the
                file. We observe the current preparation process and the rework
                it requires.
              </p>
            </article>
            <article>
              <span className="v2-number">02 · Try it together</span>
              <h3>A follow-up prepared, then reviewed.</h3>
              <p>
                AI prepares a draft separating decisions, questions and actions.
                The owner compares it with the notes; anything missing still
                needs confirmation.
              </p>
            </article>
            <article>
              <span className="v2-number">03 · Use the method again</span>
              <h3>The next file, with the team.</h3>
              <p>
                A colleague uses the instructions and checklist on another
                meeting. We examine the corrections needed and decide what
                happens next.
              </p>
            </article>
          </div>
          <p>
            You keep the instructions, a template and the professional checks.
            We agree on an owner, an observation criterion and the next
            decision: continue, adjust, stop or scope a separate integration.
          </p>
          <p className="v2-note">
            This example explains the method. It does not describe a client
            engagement or claim any measured gain.
          </p>
        </section>
        <section className="v2-section v2-soft" id="mettre-en-place">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">Implement</p>
              <h2>
                A first use case,
                <br />
                not a large programme.
              </h2>
            </div>
            <div>
              <p>
                A workshop produces a practice to try and can be useful on its
                own. Before implementation, we agree on a deliverable, the
                people responsible and how to observe its value. Results
                determine what happens next; they are not assumed.
              </p>
              <p>
                We favour an existing professional tool. An integration connects
                steps when needed. An agent or custom code is only included when
                it adds useful value.
              </p>
              <Link className="text-link" href="/en/securite">
                Read the implementation principles →
              </Link>
            </div>
          </div>
        </section>
        <section className="v2-section v2-wrap v2-split" id="adopter">
          <div>
            <p className="section-kicker">Adopt, then expand</p>
            <h2>
              Observe actual use.
              <br />
              Adjust what gets in the way.
            </h2>
          </div>
          <div>
            <p>
              We examine how the team uses the approach on subsequent files:
              quality, preparation time or corrections needed. The criterion is
              chosen together before the trial.
            </p>
            <p>
              Access, approvals and handover materials are documented for each
              implementation. What works can be extended to other tasks or
              teams, with an appropriate scope.
            </p>
          </div>
        </section>
        <section className="v2-section v2-wrap">
          <h2>What would be a useful first use case for your team?</h2>
          <div className="v2-actions">
            <Link
              className="button button-primary"
              href="/en/commencer?source=methode"
            >
              Discuss your first use case →
            </Link>
            <Link className="text-link" href="/en/atelier-agents">
              Learn by doing in a workshop →
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
