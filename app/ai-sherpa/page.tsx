import { LeadLink } from '@/components/lead-link';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'AI Sherpa — Accompagner votre équipe | Velok',
  description: 'Un accompagnement pratique pour choisir les usages IA, former votre équipe et passer à un premier usage répété.',
  alternates: { canonical: '/ai-sherpa' },
};

export default function SherpaPage() {
  return (
    <PageFrame>
      <PageIntro kicker="AI Sherpa · Accompagnement" title="Un guide pour faire avancer votre équipe." lede="Vous avez des questions, des outils ou des premiers essais. Nous vous aidons à choisir la prochaine action utile et à la mettre en pratique." />
      <section className="content-band alt">
        <h2>Du conseil qui rejoint le travail.</h2>
        <div className="content-grid">
          <article className="content-card element-card"><VisualElement name="19-priority-marker" /><h3>Choisir</h3><p>Examiner les usages possibles à partir d’une tâche réelle. Décider de ce qui mérite un essai avant d’acheter ou de construire.</p></article>
          <article className="content-card element-card"><VisualElement name="11-human-handoff" /><h3>Pratiquer</h3><p>Des séances de travail avec les personnes concernées. Une méthode qu’elles peuvent réutiliser dans leur métier.</p></article>
          <article className="content-card element-card"><VisualElement name="20-baseline-result-slider" /><h3>Observer</h3><p>Comparer le travail avant et après l’essai : temps, qualité, reprises et usage réel. Choisir la mesure ensemble.</p></article>
          <article className="content-card element-card"><VisualElement name="14-cycle-marker" /><h3>Faire durer</h3><p>Ajuster ce qui bloque, transmettre la pratique et décider de la suite avec le responsable de l’équipe.</p></article>
        </div>
      </section>
      <section className="audit-disclosure"><h2>Accompagner et construire : deux périmètres.</h2><p>Le conseil et la formation peuvent suffire à votre équipe. Si une intégration ou une automatisation devient utile, nous la cadrons séparément : livrable, responsable, accès nécessaires et critères de réussite. Les outils existants passent avant le sur mesure.</p><Link href="/methode">Voir comment nous avançons →</Link></section>
      <section className="content-band alt"><h2>Vous avez déjà essayé l’IA. Et maintenant ?</h2><p>Le point de départ peut être un outil peu utilisé, une tâche qui se répète ou un relais difficile entre deux personnes. Nous choisissons un premier essai avec l’équipe, puis décidons de la suite à partir de son usage réel.</p></section>
      <section className="page-cta"><h2>Trouver la prochaine action utile.</h2><LeadLink className="button button-cta" href="/commencer?offre=sherpa">Parler d’AI Sherpa avec David <span aria-hidden="true">→</span></LeadLink></section>
    </PageFrame>
  );
}
