import { LeadLink } from '@/components/lead-link';
import Image from 'next/image';
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

export function VisualElement({ name }: { name: string }) {
  return (
    <span className="visual-element" aria-hidden="true">
      <Image src={`/brand/elements/${name}.svg`} alt="" width={112} height={112} />
    </span>
  );
}

const links = [
  { href: '/#offres', label: 'Offres' },
  { href: '/methode', label: 'Méthode' },
  { href: '/#usages', label: 'Usages' },
  { href: '/partenaires/agences', label: 'Partenaires' },
];

export function SiteHeader() {
  return (
    <>
      <div className="trust-bar">
        <span>IA, humain &amp; équipes · France</span>
        <span>Formation · Ateliers · AI Sherpa</span>
        <span>La puissance de l’IA au service de vos équipes.</span>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Velok — accueil">
          <VelokMark />
          <span>Velok</span>
        </Link>

        <nav className="primary-nav" aria-label="Navigation principale">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>

        <LeadLink className="button button-small header-cta" href="/commencer">
          Échanger avec David <span aria-hidden="true">→</span>
        </LeadLink>

        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu"><span>Menu</span><b aria-hidden="true">☰</b></summary>
          <nav aria-label="Navigation mobile">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <LeadLink href="/commencer">Échanger avec David</LeadLink>
          </nav>
        </details>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <Link className="brand brand-light" href="/" aria-label="Velok — accueil">
          <VelokMark />
          <span>Velok</span>
        </Link>
        <p>L’IA utile.<br />Sans complexité.</p>
      </div>
      <nav aria-label="Navigation de pied de page">
        <div><strong>Commencer</strong><Link href="/atelier-agents">Formation &amp; ateliers</Link><Link href="/ai-sherpa">Accompagnement AI Sherpa</Link><Link href="/audit">Audit de l’inbox</Link></div>
        <div><strong>Équipes &amp; partenaires</strong><Link href="/secteurs/services-professionnels">Services professionnels</Link><Link href="/secteurs/expertise-comptable">Expertise comptable</Link><Link href="/partenaires/agences">Agences partenaires</Link></div>
        <div><strong>Entreprise</strong><a href="mailto:david@velok.ai">Contacter David</a><Link href="/securite">Sécurité &amp; données</Link><Link href="/confidentialite">Confidentialité</Link><Link href="/mentions-legales">Mentions légales</Link></div>
      </nav>
      <div className="footer-meta">
        <span>France · Europe</span>
        <a href="mailto:david@velok.ai">david@velok.ai</a>
        <span>© {new Date().getFullYear()} Velok</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow"><span /> {kicker}</p>
      <h1>{title}</h1>
      <p>{lede}</p>
      <div className="page-trust"><span>Votre équipe</span><span>Votre travail réel</span><span>Un premier usage</span></div>
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
