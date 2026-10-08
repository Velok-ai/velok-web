import { VelokWordmark } from '@/components/velok-wordmark';
import { TechnologyPartners } from '@/components/technology-partners';
import { LanguageSwitch } from '@/components/language-switch';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const auditMailto =
  'mailto:david@velok.ai?subject=Audit%20des%20op%C3%A9rations%20%E2%80%94%20Velok';


export function VisualElement({ name }: { name: string }) {
  return (
    <span className="visual-element" aria-hidden="true">
      <Image
        src={`/brand/elements/${name}.svg`}
        alt=""
        width={112}
        height={112}
      />
    </span>
  );
}

export function WideIllustration({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`wide-illustration ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        width={1536}
        height={1024}
        sizes="(max-width: 760px) 100vw, 1320px"
      />
    </figure>
  );
}

export function MockupVisual({
  variant,
  className = '',
}: {
  variant: 'hero' | 'workflow' | 'human' | 'adoption';
  className?: string;
}) {
  if (variant === 'hero') {
    return (
      <div
        className={`mockup-scene mockup-hero ${className}`.trim()}
        aria-hidden="true"
      >
        <div className="mockup-plant">
          <span className="leaf a" />
          <span className="leaf b" />
          <span className="leaf c" />
          <span className="pot" />
        </div>
        <div className="mockup-desk" />
        <div className="mockup-laptop">
          <div className="mockup-screen">
            <div className="screen-line short" />
            <div className="screen-task">
              <i />
              Collecte
            </div>
            <div className="screen-task">
              <i />
              Traitement
            </div>
            <div className="screen-task">
              <i />
              Suivi
            </div>
          </div>
        </div>
        <div className="mockup-flow">
          <strong>Processus en cours</strong>
          <div>
            <span />
            Collecte
          </div>
          <div>
            <span />
            Traitement
          </div>
          <div>
            <span />
            Suivi
          </div>
        </div>
        <div className="mockup-paperstack">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="mockup-note">
          Moins d’administratif,
          <br />
          plus d’impact.
        </div>
      </div>
    );
  }

  if (variant === 'workflow') {
    return (
      <div
        className={`mockup-scene mockup-svg ${className}`.trim()}
        aria-hidden="true"
      >
        <svg viewBox="0 0 640 440">
          <rect x="35" y="40" width="570" height="355" rx="26" fill="#f6f8fb" />
          <rect
            x="115"
            y="90"
            width="410"
            height="230"
            rx="16"
            fill="#fff"
            stroke="#dfe5ed"
            strokeWidth="3"
          />
          <circle cx="180" cy="160" r="28" fill="#dce5ff" />
          <circle cx="320" cy="160" r="28" fill="#cfe9e3" />
          <circle cx="460" cy="160" r="28" fill="#ffe2da" />
          <path
            d="M208 160h84M348 160h84"
            stroke="#315ee8"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <rect
            x="153"
            y="235"
            width="334"
            height="20"
            rx="10"
            fill="#e8edf3"
          />
          <rect x="214" y="275" width="212" height="14" rx="7" fill="#dce5ff" />
          <circle cx="95" cy="350" r="35" fill="#f0c5a4" />
          <path d="M62 343c7-39 58-48 68-10-22-4-42-18-68 10z" fill="#10294d" />
          <path d="M45 420c5-49 22-69 51-69 28 0 47 22 51 69" fill="#315ee8" />
        </svg>
      </div>
    );
  }

  if (variant === 'human') {
    return (
      <div
        className={`mockup-scene mockup-svg warm ${className}`.trim()}
        aria-hidden="true"
      >
        <svg viewBox="0 0 640 440">
          <rect x="38" y="35" width="565" height="360" rx="28" fill="#f8f6f1" />
          <circle cx="205" cy="192" r="55" fill="#edc3a2" />
          <path
            d="M153 184c8-60 89-75 105-15-34-5-65-26-105 15z"
            fill="#101b2b"
          />
          <path
            d="M128 386c8-87 34-119 80-119 44 0 73 35 81 119"
            fill="#315ee8"
          />
          <rect
            x="325"
            y="92"
            width="220"
            height="205"
            rx="18"
            fill="#fff"
            stroke="#dfe5ed"
            strokeWidth="3"
          />
          <rect x="355" y="125" width="105" height="13" rx="7" fill="#dce5ff" />
          <rect x="355" y="158" width="155" height="10" rx="5" fill="#e5eaf0" />
          <rect x="355" y="182" width="133" height="10" rx="5" fill="#e5eaf0" />
          <rect x="355" y="224" width="80" height="38" rx="10" fill="#16836f" />
          <path
            d="M449 243l6 6 13-16"
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M296 217c30-20 50-21 74-8"
            fill="none"
            stroke="#315ee8"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M515 327l8 17 17 8-17 8-8 18-8-18-18-8 18-8z"
            fill="#df5a42"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`mockup-scene mockup-svg ${className}`.trim()}
      aria-hidden="true"
    >
      <svg viewBox="0 0 640 440">
        <rect x="35" y="35" width="570" height="365" rx="28" fill="#eef3fb" />
        <rect
          x="185"
          y="75"
          width="270"
          height="170"
          rx="18"
          fill="#fff"
          stroke="#dfe5ed"
          strokeWidth="3"
        />
        <circle cx="320" cy="160" r="42" fill="#dce5ff" />
        <path
          d="M320 126l10 24 24 10-24 10-10 24-10-24-24-10 24-10z"
          fill="#315ee8"
        />
        <circle cx="145" cy="310" r="38" fill="#f0c5a4" />
        <path d="M110 303c5-43 64-53 76-11-25-5-48-19-76 11z" fill="#10294d" />
        <path d="M88 400c6-58 24-81 58-81 35 0 55 25 61 81" fill="#315ee8" />
        <circle cx="320" cy="320" r="38" fill="#d89f7c" />
        <path d="M285 312c5-42 63-51 75-10-24-5-47-18-75 10z" fill="#101b2b" />
        <path d="M263 400c6-57 24-80 58-80 34 0 54 25 60 80" fill="#16836f" />
        <circle cx="493" cy="310" r="38" fill="#e5b897" />
        <path d="M459 302c6-42 62-50 74-9-24-4-45-18-74 9z" fill="#10294d" />
        <path d="M436 400c6-57 24-80 58-80 34 0 54 25 60 80" fill="#df5a42" />
      </svg>
    </div>
  );
}

const links = [
  { href: '/#parcours', label: 'Parcours' },
  { href: '/methode', label: 'Méthode' },
  { href: '/situations', label: 'Situations' },
  { href: '/learn', label: 'Contenus' },
  { href: '/#secteurs', label: 'Secteurs' },
  { href: '/securite', label: 'Sécurité' },
];

export function SiteHeader() {
  return (
    <>
      <div className="trust-bar">
        <span>IA, humain &amp; équipes · France</span>
        <span>Apprendre · Mettre en place · Adopter</span>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Velok — accueil">
          <VelokWordmark />
        </Link>

        <nav className="primary-nav" aria-label="Navigation principale">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitch />
          <Link
            className="button button-small header-cta"
            href="/commencer?source=navigation"
          >
            Parler de votre premier usage <span aria-hidden="true">→</span>
          </Link>

          <details className="mobile-menu">
            <summary aria-label="Ouvrir le menu">
              <span>Menu</span>
              <b aria-hidden="true">☰</b>
            </summary>
            <nav aria-label="Navigation mobile">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/diagnostic">Diagnostic sécurité</Link>
              <Link href="/commencer?source=navigation">
                Parler de votre premier usage
              </Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <Link
          className="brand brand-light"
          href="/"
          aria-label="Velok — accueil"
        >
          <VelokWordmark />
        </Link>
        <p>
          L’IA utile.
          <br />
          Sans complexité.
        </p>
      </div>
      <nav aria-label="Navigation de pied de page">
        <div>
          <strong>Commencer</strong>
          <Link href="/commencer?source=navigation">
            Trouver un premier usage
          </Link>
          <Link href="/methode">Formation, intégration &amp; adoption</Link>
          <Link href="/audit">Audit des opérations</Link>
          <Link href="/atelier-agents">Atelier agents</Link>
          <Link href="/diagnostic">Diagnostic sécurité</Link>
        </div>
        <div>
          <strong>Secteurs</strong>
          <Link href="/secteurs/assurance">Assurance</Link>
          <Link href="/secteurs/expertise-comptable">Expertise comptable</Link>
          <Link href="/secteurs/industries-reglementees">
            Industries réglementées
          </Link>
        </div>
        <div>
          <strong>Entreprise</strong>
          <Link href="/learn">Contenus</Link>
          <a href="mailto:david@velok.ai">Contacter David</a>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
        </div>
      </nav>
      <TechnologyPartners />
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
  showTrust = true,
}: {
  kicker: string;
  title: string;
  lede: string;
  showTrust?: boolean;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">
        <span /> {kicker}
      </p>
      <h1>{title}</h1>
      <p>{lede}</p>
      {showTrust && (
        <div className="page-trust">
          <span>France</span>
          <span>Cadre documenté</span>
          <span>Vos outils et vos comptes</span>
        </div>
      )}
    </section>
  );
}

export function SectorPage({
  kicker,
  title,
  lede,
  flows,
  principle,
  illustration,
}: {
  kicker: string;
  title: string;
  lede: string;
  flows: Array<[string, string]>;
  principle: string;
  illustration?: { src: string; alt: string };
}) {
  return (
    <PageFrame>
      <PageIntro kicker={`Secteur · ${kicker}`} title={title} lede={lede} />
      {illustration && (
        <section className="page-illustration-band">
          <WideIllustration src={illustration.src} alt={illustration.alt} />
        </section>
      )}
      <section className="content-band alt">
        <h2>Les flux à regarder en premier</h2>
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
        <h2>Ce qui ne change pas</h2>
        <p>{principle}</p>
      </section>
      <section className="page-cta">
        <h2>Partir d’une opération réelle.</h2>
        <Link className="button button-cta" href="/commencer?source=navigation">
          Décrire le processus <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
