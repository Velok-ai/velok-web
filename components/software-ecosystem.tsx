import { softwareCatalog, type SoftwareId } from '@/lib/software-ecosystems';
import Image from 'next/image';

export function SoftwareEcosystem({
  software,
  language = 'fr',
}: {
  software: readonly SoftwareId[];
  language?: 'fr' | 'en';
}) {
  const english = language === 'en';

  return (
    <div className="software-ecosystem">
      <p className="software-ecosystem-label">
        {english ? 'Software to connect, for example' : 'Des logiciels à relier, par exemple'}
      </p>
      <ul className="software-brands" aria-label={english ? 'Software with publisher API resources' : 'Logiciels disposant de ressources API éditeur'}>
        {software.map((id) => {
          const product = softwareCatalog[id];
          return (
            <li key={id}>
              <a
                href={product.apiUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={english ? `${product.name} — publisher API resources (new tab)` : `${product.name} — ressources API éditeur (nouvel onglet)`}
              >
                <span className="software-logo">
                  <Image src={product.logoSrc} alt="" width={140} height={40} />
                </span>
                <span className="software-brand-caption">
                  {product.name}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M5 19 19 5M5 5h14v14" />
                  </svg>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="software-ecosystem-note">
        {english
          ? 'Connections are scoped to your licences, permissions and available data.'
          : 'Les connexions se cadrent selon vos licences, vos accès et les données disponibles.'}
      </p>
    </div>
  );
}
