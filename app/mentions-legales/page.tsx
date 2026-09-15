import type { Metadata } from 'next';
import { PageFrame, PageIntro } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Mentions légales | Velok',
  description: 'Éditeur, responsable de publication, hébergement et contact du site Velok.',
};

export default function LegalPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Informations légales" title="Mentions légales" lede="Velok est en cours de constitution comme entité distincte. Les informations ci-dessous décrivent la situation pendant cette transition." />
      <section className="content-band alt">
        <div className="notice"><strong>Transition juridique</strong><p>Le service est exploité par 9512624 Canada Ltd. jusqu’à la constitution de l’entité Velok. Les documents contractuels identifient toujours l’entité qui s’engage pour la mission.</p></div>
        <h2>Éditeur</h2><p>9512624 Canada Ltd., opérant sous la marque Velok pendant la transition. Les coordonnées d’immatriculation et postales sont communiquées dans les documents contractuels ou sur demande.</p>
        <h2>Responsable de publication</h2><p>David Desbons Lauvaux.</p>
        <h2>Contact</h2><p><a className="text-link" href="mailto:david@velok.ai">david@velok.ai</a></p>
        <h2>Hébergement</h2><p>Le site est hébergé par Vercel Inc. L’infrastructure applicative et les éventuels sous-traitants d’une mission sont précisés dans son cadre contractuel.</p>
        <h2>Propriété intellectuelle</h2><p>Les textes, éléments graphiques et marques présentés sur ce site ne peuvent être reproduits ou exploités sans autorisation, sous réserve des droits des tiers et des licences applicables.</p>
      </section>
    </PageFrame>
  );
}
