'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('main > section, .museum-offer > section, .journey-stage, .entry-card, .content-grid > article'));
    function clear() { observer?.disconnect(); elements.forEach(el => { delete el.dataset.enter; }); }
    function setup() {
      clear();
      if (media.matches || !('IntersectionObserver' in window)) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) { (entry.target as HTMLElement).dataset.enter = 'visible'; observer?.unobserve(entry.target); } });
      }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
      elements.forEach(el => { if (el.getBoundingClientRect().top > window.innerHeight) { el.dataset.enter = 'pending'; observer?.observe(el); } });
    }
    setup();
    media.addEventListener('change', setup);
    return () => { clear(); media.removeEventListener('change', setup); };
  }, [pathname]);
  return null;
}
