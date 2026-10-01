import { LeadLink } from '@/components/lead-link';
import { PaintedObject, type PaintedObjectName } from '@/components/painted-object';
import { SiteNavigation } from '@/components/site-navigation';
import { FooterIdentity } from '@/components/footer-identity';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const auditMailto =
  'mailto:david@velok.ai?subject=Audit%20des%20op%C3%A9rations%20%E2%80%94%20Velok';

export function VelokMark() {
  return (
    <svg aria-hidden="true" className="brand-mark" viewBox="0 0 48 48" fill="none">
      <path d="M8 9v12.5L24 38l16-16.5V9" />
      <path d="M8 9h8v9l8 8 8-8V9h8" />
      <circle cx="24" cy="27" r="2.4" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">Aller au contenu</a>
      <div className="trust-bar">
        <span>IA, humain &amp; équipes · France</span>
        <span>Formation · Ateliers · AI Sherpa</span>
        <span>La puissance de l’IA au service de vos équipes.</span>
      </div>
      <SiteNavigation brand={
        <Link className="brand" href="/" aria-label="Velok — accueil">
          <VelokMark />
          <span>Velok</span>
        </Link>
      } />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer painted-footer">
      <div className="footer-lead">
        <Link className="brand" href="/" aria-label="Velok — accueil">
          <VelokMark />
          <span>Velok</span>
        </Link>
        <FooterIdentity />
      </div>
      <nav aria-label="Navigation de pied de page">
        <div><strong>Commencer</strong><Link href="/atelier-agents">Formation &amp; ateliers</Link><Link href="/ai-sherpa">Accompagnement AI Sherpa</Link><Link href="/methode">Notre méthode</Link><Link href="/partenaires/agences">Agences partenaires</Link></div>
        <div><strong>Votre métier</strong><Link href="/secteurs/services-professionnels">Services professionnels</Link><Link href="/secteurs/expertise-comptable">Expertise comptable</Link><Link href="/secteurs/juridique">Juridique</Link><Link href="/secteurs/services-financiers">Services financiers</Link><Link href="/secteurs/assurance">Assurance</Link><Link href="/secteurs/industries-reglementees">Industries réglementées</Link></div>
        <div><strong>Pour aller plus loin</strong><Link href="/guide/ia-operations">Guide des usages IA</Link><Link href="/securite">Sécurité &amp; données</Link><Link href="/diagnostic">Diagnostic de sécurité</Link><Link href="/audit">Audit complémentaire de l’inbox</Link></div>
      </nav>
      <div className="footer-meta">
        <span>France · Europe</span>
        <a href="mailto:david@velok.ai">david@velok.ai <span aria-hidden="true">↗</span></a>
        <Link href="/confidentialite">Confidentialité</Link>
        <Link href="/mentions-legales">Mentions légales</Link>
        <span>© {new Date().getFullYear()} Velok</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
  visual,
  compact = false,
}: {
  kicker: string;
  title: string;
  lede: string;
  visual?: PaintedObjectName;
  compact?: boolean;
}) {
  return (
    <section className={`page-intro painted-page-intro ${visual ? 'has-art' : ''} ${compact ? 'compact-intro' : ''}`}>
      <div className="intro-copy">
      <p className="eyebrow"><span /> {kicker}</p>
      <h1>{title}</h1>
      <p>{lede}</p>
      </div>
      {visual && <PaintedObject name={visual} className="intro-cutout" priority />}
    </section>
  );
}

export function SectorPage({
  kicker,
  title,
  lede,
  flows,
  principle,
}: {
  kicker: string;
  title: string;
  lede: string;
  flows: Array<[string, string]>;
  principle: string;
}) {
  return (
    <PageFrame>
      <PageIntro kicker={`Secteur · ${kicker}`} title={title} lede={lede} />
      <section className="content-band alt">
        <h2>Les usages à explorer ensemble</h2>
        <div className="content-grid">
          {flows.map(([heading, body]) => (
            <article className="content-card" key={heading}>
              <h3>{heading}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-band dark">
        <h2>Le principe</h2>
        <p>{principle}</p>
      </section>
      <section className="page-cta">
        <h2>Choisir un premier usage avec votre équipe.</h2>
        <LeadLink className="button button-cta" href="/commencer">Échanger avec David <span aria-hidden="true">→</span></LeadLink>
      </section>
    </PageFrame>
  );
}
