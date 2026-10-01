'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { LeadLink } from '@/components/lead-link';

const offers = [
  { href: '/atelier-agents', label: 'Formation & ateliers', description: 'Apprendre sur une tâche de votre métier.' },
  { href: '/ai-sherpa', label: 'AI Sherpa', description: 'Installer une pratique avec un guide.' },
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
    const desktop = window.matchMedia('(min-width: 1101px)');
    function resize() { if (desktop.matches) close(); }
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('click', navigate);
    desktop.addEventListener('change', resize);
    return () => {
      document.removeEventListener('keydown', escape);
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('click', navigate);
      desktop.removeEventListener('change', resize);
    };
  }, [pathname]);

  function current(href: string) { return pathname === href ? 'page' as const : undefined; }

  return <header className="site-header refined-header">
    {brand}
    <nav className="primary-nav" aria-label="Navigation principale">
      <div className="nav-offers">{offers.map(link => <Link key={link.href} href={link.href} aria-current={current(link.href)}>{link.label}</Link>)}</div>
      <div className="nav-explore">{explore.map(link => <Link key={link.href} href={link.href} aria-current={current(link.href)}>{link.label}</Link>)}</div>
    </nav>
    <LeadLink className="button button-small header-cta" href="/commencer">Échanger avec David <span aria-hidden="true">↗</span></LeadLink>
    <details key={pathname} ref={menu} className="mobile-menu" onToggle={event => setMenuState({ pathname, open: event.currentTarget.open })}>
      <summary aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-controls="mobile-navigation" aria-expanded={open}>
        <span>{open ? 'Fermer' : 'Menu'}</span><span className="menu-glyph" aria-hidden="true"><i /><i /></span>
      </summary>
      <nav id="mobile-navigation" aria-label="Navigation mobile">
        <p className="menu-section-label">Pour votre équipe</p>
        <div className="menu-offers">{offers.map(link => <Link key={link.href} href={link.href} aria-current={current(link.href)}><span>{link.label}<span aria-hidden="true">↗</span></span><small>{link.description}</small></Link>)}</div>
        <div className="menu-explore">{explore.map(link => <Link key={link.href} href={link.href} aria-current={current(link.href)}>{link.label}<span aria-hidden="true">→</span></Link>)}</div>
        <LeadLink className="button button-primary" href="/commencer">Échanger avec David <span aria-hidden="true">↗</span></LeadLink>
      </nav>
    </details>
  </header>;
}
