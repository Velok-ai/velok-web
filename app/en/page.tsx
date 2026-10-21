import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageFrame } from '@/components/en/site-shell';
import { editorialStages } from '@/lib/en/v2-parcours';

export const metadata: Metadata = pageMetadata(
  'Velok — Your AI department.',
  'Grow your business, organise your team and optimise operations, with a shared foundation for responsible AI use.',
  '/en',
);
const situations = [
  [
    'Prepare a client file',
    'Accounting',
    'Gather the documents received, identify what is missing and prepare a summary for review.',
    '/en/secteurs/expertise-comptable',
  ],
  [
    'Find the decisions',
    'Management',
    'Use meeting notes to identify commitments, owners and deadlines.',
    '/en/situations',
  ],
  [
    'Prepare a summary',
    'Agencies and consulting',
    'Bring together the information in a brief for an initial review, then apply professional judgement.',
    '/en/situations',
  ],
];

export default function Home() {
  return (
    <PageFrame>
      <div className="v2-home">
        <section className="v2-hero v2-wrap">
          <div>
            <p className="section-kicker">AI, people &amp; teams</p>
            <h1>
              Your<br />
              <em>AI department.</em>
            </h1>
            <p className="v2-mission">
              The power of AI, working for your team.
            </p>
            <p>
              Grow your business, organise your team or improve a recurring workflow. We start with one practical project, then help your team make it part of their work.
            </p>
            <div className="v2-actions">
              <Link
                className="button button-primary"
                href="/en/commencer?source=hero"
              >
                Discuss your first use case <span aria-hidden="true">→</span>
              </Link>
              <a className="text-link" href="#parcours">
                Explore ways to get started
              </a>
            </div>
          </div>
          <figure className="v2-team-scene">
            <Image
              src="/brand/v2/equipe-atelier.webp"
              alt="Illustration: three professionals examine a task and its steps together during a workshop."
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <figcaption>Learn together. Start with real work.</figcaption>
          </figure>
        </section>
        <section className="v2-section v2-navy" id="parcours">
          <div className="v2-wrap">
            <p className="section-kicker">Three ways to begin</p>
            <h2>One priority.<br /><em>One practical first project.</em></h2>
            <p className="v2-lede">Choose the need that matters today. These are three entry points, not six compulsory steps.</p>
            <ol className="v2-parcours">
              <li><span className="v2-number">01</span><h3>Grow</h3><strong>A first outbound campaign</strong><p>Choose targets, prepare outreach sequences, organise reply handling and prepare meetings.</p><p>Deliverable: a campaign ready for review, with reply-handling rules.</p><p className="v2-note">Timeline agreed together.</p><Link className="text-link" href="/en/developper">Explore the first project →</Link></li>
              <li><span className="v2-number">02</span><h3>Organise</h3><strong>Monthly AI Sherpa</strong><p>Bring AI into the team’s real work, practise together and track adoption.</p><p>Deliverable: one practical use case and an adoption tracker.</p><p className="v2-note">Monthly support; scope agreed together.</p><Link className="text-link" href="/en/ai-sherpa">Explore AI Sherpa →</Link></li>
              <li><span className="v2-number">03</span><h3>Optimise</h3><strong>An inbox audit, then a first workflow</strong><p>Identify where work gets stuck, then implement the first useful workflow the audit reveals.</p><p>Deliverable: an audit report and a prioritised first workflow.</p><p className="v2-note">Timeline agreed after scoping the inbox and history.</p><Link className="text-link" href="/en/audit">Explore the inbox audit →</Link></li>
            </ol>
            <aside className="v2-foundation" aria-labelledby="foundation-title">
              <div><p className="section-kicker">The shared foundation</p><h3 id="foundation-title">Secure</h3><p>An AI-use policy, clear access boundaries and human review support every project. A practical guide, a template and a team sign-off page to align with your IT lead.</p></div>
              <Link className="text-link" href="/en/securite">Explore the foundation →</Link>
            </aside>
          </div>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div><p className="section-kicker">Not sure where to start?</p><h2>Let real work point the way.</h2><p>Start with a free audit of one inbox to identify a useful first project. Any wider scope and history are agreed separately. An audit is not a prerequisite for a workshop.</p><Link className="text-link" href="/en/audit">Find my starting point →</Link></div>
            <div><h3>A clear need already?</h3><p>Start directly with AI Sherpa or a practical workshop. Bespoke agents are scoped only after an audit or Sherpa work has established the need.</p><Link className="text-link" href="/en/atelier-agents">Explore the workshop →</Link></div>
          </div>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap">
            <p className="section-kicker">The starting point</p>
            <h2>
              The problem often sits
              <br />
              between two steps.
            </h2>
            <div className="v2-three">
              <article>
                <span className="v2-number">01</span>
                <h3>
                  The information is there.
                  <br />
                  The context is missing.
                </h3>
                <p>
                  The team gathers emails, documents and notes before work can
                  move forward.
                </p>
              </article>
              <article>
                <span className="v2-number">02</span>
                <h3>
                  The task comes back.
                  <br />
                  So does the follow-up.
                </h3>
                <p>
                  A document is missing, a request is waiting: the same
                  follow-up starts again.
                </p>
              </article>
              <article>
                <span className="v2-number">03</span>
                <h3>
                  The work is ready.
                  <br />
                  The decision is waiting.
                </h3>
                <p>
                  Someone needs to identify who should respond, take over or
                  approve.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="v2-section v2-wrap" id="situations">
          <p className="section-kicker">Illustrative examples</p>
          <h2>
            Understand the workflow
            <br />
            before choosing the tool.
          </h2>
          <div className="v2-three v2-cases">
            {situations.map(([title, sector, body, href]) => (
              <article key={title}>
                <p className="v2-label">Example scenario · {sector}</p>
                <h3>{title}</h3>
                <p>{body}</p>
                <Link className="text-link" href={href}>
                  Explore the scenario →
                </Link>
              </article>
            ))}
          </div>
          <p className="v2-note">
            These scenarios illustrate possible uses; they are not client
            results.
          </p>
        </section>
        <section className="v2-section v2-wrap v2-split">
          <div>
            <p className="section-kicker">Learn by doing</p>
            <h2>
              Learn to delegate
              <br />
              <em>while staying in control.</em>
            </h2>
            <p>
              A specific task, an expected result, a first trial. The team
              learns to take back what needs their judgement and adjust what
              they delegate to AI.
            </p>
            <Link className="text-link" href="/en/atelier-agents">
              Explore the AI agents workshop →
            </Link>
          </div>
          <figure className="v2-team-scene">
            <Image
              src="/brand/v2/workflows/workflow-sales.webp"
              alt="Illustration: three professionals discuss a digital workflow with a laptop and a tablet."
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>
              Prepare a first draft. Review what needs judgement.
            </figcaption>
          </figure>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">Implementation &amp; adoption</p>
              <h2>A solution becomes useful when the team uses it.</h2>
              <p>
                We implement the first use case in suitable tools, test it on
                real work and explain how to use it. Feedback from the team
                helps refine it before extending it.
              </p>
              <p>
                You retain the accounts, operating rules and documentation
                needed to take it over.
              </p>
              <Link className="text-link" href="/en/methode#adopter">
                Explore the implementation path →
              </Link>
            </div>
            <figure className="v2-team-scene">
              <Image
                src="/brand/v2/workflows/workflow-comptabilite.webp"
                alt="Illustration: a professional uses two screens to check digital files and their exceptions."
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption>
                Practise in your tools. Adjust with the team.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="v2-section v2-wrap">
          <p className="section-kicker">Content &amp; methods</p>
          <h2>
            Learn to work with AI,
            <br />
            <em>one step at a time.</em>
          </h2>
          <p className="v2-lede">
            Facts explained, their implications for work, documented
            observations and a method to try.
          </p>
          <div className="v2-editorial">
            {editorialStages.map(([title, body], i) => (
              <article key={title}>
                <span className="v2-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <Link className="text-link" href="/en/learn">
            Explore the content →
          </Link>
          <div className="v2-actions">
            <Link
              className="button button-primary"
              href="/en/commencer?besoin=awareness&source=ressources"
            >
              Arrange a session for your team →
            </Link>
          </div>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap">
            <p className="section-kicker">The conditions for trust</p>
            <h2>
              What we implement
              <br />
              remains yours.
            </h2>
            <div className="v2-three">
              <article>
                <h3>Your tools and accounts</h3>
                <p>
                  Access suited to the task, in an environment your organisation
                  owns.
                </p>
              </article>
              <article>
                <h3>Human judgement</h3>
                <p>
                  A person takes over sensitive, ambiguous or unusual
                  situations.
                </p>
              </article>
              <article>
                <h3>A process you can take over</h3>
                <p>
                  Rules and documentation the team can review and use
                  independently.
                </p>
              </article>
            </div>
            <Link className="text-link" href="/en/securite">
              Read our security principles →
            </Link>
          </div>
        </section>
        <section className="v2-section v2-wrap v2-contact" id="secteurs">
          <p className="section-kicker">Your contact in France</p>
          <h2>What would be a useful first use case for your team?</h2>
          <p>
            David Desbons Lauvaux, who co-leads Velok, responds directly. You do
            not need to have chosen a tool: start with a task, a recurring
            frustration or a team you want to help.
          </p>
          <div className="v2-actions">
            <Link
              className="button button-primary"
              href="/en/commencer?source=final"
            >
              Discuss your first use case →
            </Link>
            <a className="text-link" href="mailto:david@velok.ai">
              david@velok.ai ↗
            </a>
          </div>
          <p className="v2-note">
            Professional services ·{' '}
            <Link href="/en/secteurs/expertise-comptable">Accounting</Link> ·{' '}
            <Link href="/en/situations">Other workplace scenarios</Link>
          </p>
        </section>
      </div>
    </PageFrame>
  );
}

