import Image from 'next/image';
import type { ReactNode } from 'react';
import { PaintedObject, type PaintedObjectName } from '@/components/painted-object';

export function GalleryArt({ src, alt, number, title, note, detail, priority = false, sizes = '100vw', className = '' }: { src: string; alt: string; number: string; title: string; note: string; detail?: PaintedObjectName; priority?: boolean; sizes?: string; className?: string }) {
  return (
    <figure className={`gallery-art ${className}`}>
      <div className="gallery-art-image"><Image src={src} alt={alt} fill priority={priority} sizes={sizes} />{detail && <PaintedObject name={detail} className="painted-detail" priority={priority} />}</div>
      <figcaption><span className="gallery-number" aria-hidden="true">{number}</span><div><b>{title}</b><span>{note}</span></div></figcaption>
    </figure>
  );
}

export function GalleryIntro({ kicker, title, lede, children }: { kicker: string; title: string; lede: string; children: ReactNode }) {
  return <section className="gallery-intro"><div className="gallery-intro-copy"><p className="section-kicker">{kicker}</p><h1>{title}</h1><p>{lede}</p></div>{children}</section>;
}
