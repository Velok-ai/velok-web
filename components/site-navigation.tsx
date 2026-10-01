'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { LeadLink } from '@/components/lead-link';

const offers = [
  { href: '/atelier-agents', label: 'Formation & ateliers', description: 'Apprendre en faisant, avec votre équipe.', image: 'team-workshop', width: 1672, height: 941 },
  { href: '/ai-sherpa', label: 'AI Sherpa', description: 'Installer une pratique, avec un guide.', image: 'sherpa-working-session', width: 1536, height: 1024 },
];
const explore = [
  { href: '/methode', label: 'Notre méthode' },
  { href: '/partenaires/agences', label: 'Partenaires' },
];

export function SiteNavigation({ brand }: { brand: ReactNode }) {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const [menuState, setMenuState] = useState({ pathname, open: false });
  const open = menuState.pathname === pathname && menuState.open;

  useEffect(() => {
    const details = menu.current;
    function close(restoreFocus = false) {
      if (!details?.open) return;
      details.open = false;
      if (restoreFocus) details.querySelector('summary')?.focus();
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && details?.open) { event.preventDefault(); close(true); }
    }
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !details?.contains(event.target)) close();
    }
    function navigate(event: MouseEvent) {
      if (event.target instanceof Element && details?.contains(event.target) && event.target.closest('a')) close();
    }
    function focusOutside(event: FocusEvent) {
      if (event.target instanceof Node && !details?.contains(event.target)) close();
    }
    const desktop = window.matchMedia('(min-width: 1101px)');
    function resize() { close(); }
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('click', navigate);
    document.addEventListener('focusin', focusOutside);
    desktop.addEventListener('change', resize);
    return () => {
      document.removeEventListener('keydown', escape);
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('click', navigate);
      document.removeEventListener('focusin', focusOutside);
      desktop.removeEventListener('change', resize);
    };
  }, [pathname]);

  function current(href: string) { return pathname === href ? 'page' as const : undefined; }

  return <header className="site-header refined-header">
    {brand}
    <nav className="primary-nav" aria-label="Navigation principale">
      <details key={pathname} ref={menu} className={`image-menu ${offers.some(offer => offer.href === pathname) ? 'current-offer' : ''}`} onToggle={event => setMenuState({ pathname, open: event.currentTarget.open })}>
        <summary aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu : formation et AI Sherpa'} aria-controls="image-navigation" aria-expanded={open}>
          <span className="menu-summary-desktop">Formation &amp; AI Sherpa<svg className="mega-chevron" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="m1 1 5 5 5-5" /></svg></span>
          <span className="menu-summary-mobile">{open ? 'Fermer' : 'Menu'}<span className="menu-glyph" aria-hidden="true"><i /><i /></span></span>
        </summary>
        <div id="image-navigation" className="image-menu-panel">
          <div className="mega-intro">
            <p className="menu-section-label">Pour votre équipe</p>
            <p className="mega-title">Apprendre.<br /><em>Pratiquer.</em></p>
            <p className="mega-note">Un atelier pour commencer.<br />Un guide pour faire durer.</p>
          </div>
          <div className="menu-offers">{offers.map(offer => <Link className="offer-nav-card" key={offer.href} href={offer.href} aria-current={current(offer.href)}>
            <span className="offer-nav-image"><Image src={`/brand/paintings/${offer.image}.webp`} alt="" width={offer.width} height={offer.height} sizes="(max-width: 1100px) 140px, (max-width: 1400px) 30vw, 420px" /></span>
            <span className="offer-nav-copy"><span className="offer-nav-title">{offer.label}<span className="offer-nav-arrow" aria-hidden="true">↗</span></span><small>{offer.description}</small></span>
          </Link>)}</div>
          <div className="menu-explore">{explore.map(link => <Link key={link.href} href={link.href} aria-current={current(link.href)}>{link.label}<span aria-hidden="true">→</span></Link>)}</div>
          <LeadLink className="button button-primary menu-contact" href="/commencer">Échanger avec David <span aria-hidden="true">↗</span></LeadLink>
        </div>
      </details>
      <div className="nav-explore">{explore.map(link => <Link key={link.href} href={link.href} aria-current={current(link.href)}>{link.label}</Link>)}</div>
    </nav>
    <LeadLink className="button button-small header-cta" href="/commencer">Échanger avec David <span aria-hidden="true">↗</span></LeadLink>
  </header>;
}
