import type { Metadata } from 'next';
import { auditMailto, PageFrame, PageIntro } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'IA et expertise comptable | Velok',
  description: 'Réduire les tâches répétitives des cabinets comptables tout en gardant la preuve, les accès et les exceptions sous contrôle.',
};

export default function AccountingPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Secteur · Expertise comptable" title="Fluidifier la collecte. Garder la responsabilité." lede="Velok aide les cabinets à voir où le temps part réellement, à structurer les demandes récurrentes et à mettre en œuvre les bons outils sans créer une nouvelle dépendance opaque." />
      <section className="content-band alt"><h2>Les flux à regarder en premier</h2><div className="content-grid"><article className="content-card"><h3>Collecte client</h3><p>Demandes de pièces, relances, classement et suivi des éléments manquants.</p></article><article className="content-card"><h3>Préparation récurrente</h3><p>Tâches répétées, contrôles préalables et passage d’un dossier à l’autre.</p></article><article className="content-card"><h3>Gestion des exceptions</h3><p>Cas incomplets, incohérences, priorités et escalades vers la bonne personne.</p></article><article className="content-card"><h3>Traçabilité</h3><p>Origine des informations, validation, changements et restitution au client.</p></article></div></section>
      <section className="content-band dark"><h2>L’automatisation n’est pas le contrôle</h2><p>Nous séparons ce qui peut être préparé ou routé de ce qui engage le jugement professionnel. Le système doit rendre les exceptions plus visibles, pas simplement les déplacer.</p></section>
      <section className="page-cta"><h2>Voir où le temps se perd.</h2><a className="button button-cta" href={auditMailto}>Parler à David <span aria-hidden="true">↗</span></a></section>
    </PageFrame>
  );
}
