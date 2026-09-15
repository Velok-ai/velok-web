import type { Metadata } from 'next';
import { auditMailto, PageFrame, PageIntro } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'IA et opérations d’assurance | Velok',
  description: 'Cartographier et améliorer les opérations d’assurance sans perdre la traçabilité ni le contrôle humain.',
};

export default function InsurancePage() {
  return (
    <PageFrame>
      <PageIntro kicker="Secteur · Assurance" title="Accélérer les dossiers sans raccourcir les contrôles." lede="Velok aide les courtiers et équipes d’assurance à rendre leurs flux visibles, à réduire les relances manuelles et à intégrer l’IA avec des responsabilités explicites." />
      <section className="content-band alt"><h2>Les flux à regarder en premier</h2><div className="content-grid"><article className="content-card"><h3>Entrée et qualification</h3><p>Demandes, pièces manquantes, extraction et routage vers le bon responsable.</p></article><article className="content-card"><h3>Suivi des dossiers</h3><p>Relances, changements de statut, exceptions et attentes entre partenaires.</p></article><article className="content-card"><h3>Contrôle humain</h3><p>Les décisions qui exigent validation, expertise ou justification.</p></article><article className="content-card"><h3>Trace et restitution</h3><p>Ce qui a été reçu, proposé, validé, modifié et transmis.</p></article></div></section>
      <section className="content-band dark"><h2>Notre point de départ</h2><p>Nous ne supposons pas que ces flux existent chez vous ni qu’ils doivent être automatisés. L’audit sert précisément à vérifier où le travail se trouve, ce qui se répète et ce qui doit rester sous contrôle humain.</p></section>
      <section className="page-cta"><h2>Cartographier une opération réelle.</h2><a className="button button-cta" href={auditMailto}>Parler à David <span aria-hidden="true">↗</span></a></section>
    </PageFrame>
  );
}
