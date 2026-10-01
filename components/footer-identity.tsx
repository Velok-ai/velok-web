'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

/** This cutout introduces the first exchange on /commencer; do not repeat it there. */
export function FooterIdentity() {
  const contact = usePathname() === '/commencer';
  return <div className={`footer-identity ${contact ? 'without-art' : ''}`}>
    <div><p className="footer-signature">L’IA se pratique.<br /><em>Ensemble.</em></p><p className="footer-caption">Votre équipe. Votre travail. Un guide à vos côtés.</p></div>
    {!contact && <Image className="footer-practice" src="/brand/cutouts/practice-together.webp" alt="" width={1254} height={1254} sizes="(max-width: 760px) 180px, 280px" />}
  </div>;
}
