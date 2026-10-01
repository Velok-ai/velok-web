import type { Metadata } from 'next';
import { SectorPage } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'IA et équipes — Services professionnels | Velok',
  description: 'Ateliers et accompagnement IA autour des propositions, synthèses et relais de vos équipes.',
  alternates: { canonical: '/secteurs/services-professionnels' },
};

export default function ProfessionalServicesPage() {
  return <SectorPage kicker="Services professionnels" title="L’IA au service de votre travail client." lede="Conseil, bureaux d’études et services : essayer l’IA sur une tâche concrète avant de choisir une intégration." flows={[
    ['Propositions', 'Retrouver les bons précédents et préparer un brouillon à faire relire.'],
    ['Synthèses', 'Préparer un compte rendu et les points à confirmer à partir d’un exemple adapté à l’atelier.'],
    ['Relais', 'Clarifier ce que la prochaine personne doit recevoir pour avancer.'],
    ['Suivi', 'Repérer les pièces et actions attendues, puis cadrer ce qui pourrait être simplifié.'],
  ]} principle="Une pratique que l’équipe peut reprendre. Un responsable pour le premier essai et une mesure convenue avant de décider de la suite." />;
}
