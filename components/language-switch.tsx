'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export function LanguageSwitch() {
  const pathname = usePathname() || '/';
  const english = pathname === '/en' || pathname.startsWith('/en/');
  const target = english
    ? pathname.slice(3) || '/'
    : '/en' + (pathname === '/' ? '' : pathname);
  return (
    <Link
      className="text-link language-switch"
      href={target}
      hrefLang={english ? 'fr' : 'en'}
      lang={english ? 'fr' : 'en'}
      aria-label={
        english ? 'Read this page in French' : 'Lire cette page en anglais'
      }
      onClick={(event) => {
        if (
          event.button === 0 &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          !event.altKey
        ) {
          event.preventDefault();
          window.location.assign(
            target + window.location.search + window.location.hash,
          );
        }
      }}
    >
      {english ? 'FR' : 'EN'}
    </Link>
  );
}
