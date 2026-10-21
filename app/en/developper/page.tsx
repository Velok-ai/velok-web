import { pageMetadata } from '@/lib/en/site-metadata';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageFrame, PageIntro } from '@/components/en/site-shell';
export const metadata: Metadata = pageMetadata("Grow | Your AI department — Velok", "Start with a clear audience and a campaign your team can review, run and improve. AI supports preparation and follow-up; your team keeps the commercial decisions.", '/en/developper');
export default function DevelopperPage() {
  return <PageFrame><div className="v2-home">
    <PageIntro kicker="Grow · First project" title="Grow your business with a first outbound campaign." lede="Start with a clear audience and a campaign your team can review, run and improve. AI supports preparation and follow-up; your team keeps the commercial decisions." />
    <section className="v2-section v2-wrap v2-split">
      <div><p className="section-kicker">A concrete starting point</p><h2>An outbound campaign ready for review.</h2><p>Deliverable: target criteria, outreach sequences, reply-handling rules and a meeting-preparation template. The channels, scope and timeline are agreed together before implementation.</p><Link className="button button-primary" href="/en/commencer?besoin=integration&amp;source=developper">Discuss my first campaign →</Link></div>
      <figure className="v2-team-scene"><Image src="/brand/v2/workflows/workflow-sales.webp" alt="Illustration: a team prepares a commercial workflow together." width={1536} height={1024} sizes="(max-width: 900px) 100vw, 50vw" /></figure>
    </section>
    <section className="v2-section v2-soft"><div className="v2-wrap"><h2>From targeting to the meeting.</h2><div className="v2-three"><article><span className="v2-number">01</span><h3>Target</h3><p>Define priority accounts, relevant contacts and the signals that make an approach useful.</p></article><article><span className="v2-number">02</span><h3>Prepare</h3><p>Draft outreach sequences and a meeting-preparation brief for the team to review.</p></article><article><span className="v2-number">03</span><h3>Handle replies</h3><p>Set reply categories, responsibilities and hand-off rules. A person reviews sensitive replies and commitments.</p></article></div></div></section>
    <section className="v2-section v2-wrap v2-split"><div><p className="section-kicker">A complementary use case</p><h2>Turn one call into short videos.</h2><p>A content workflow can extract useful themes from an authorised recording, prepare short formats and organise editorial review. It is a separate follow-on scope, not a prerequisite for your first campaign.</p></div><div><h3>Start with existing tools.</h3><p>Bespoke agents come only after an audit or AI Sherpa work has established the need. Access, data use and human review are defined before connecting tools.</p><Link className="text-link" href="/en/securite">Explore the shared foundation →</Link></div></section>
    <section className="page-cta"><h2>Choose a first commercial priority.</h2><Link className="button button-cta" href="/en/commencer?besoin=integration&amp;source=developper">Talk to David →</Link></section>
  </div></PageFrame>;
}
