import { pageMetadata } from '@/lib/site-metadata';
import { LeadLink } from '@/components/lead-link';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageFrame,
  PageIntro,
  WideIllustration,
} from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'Organiser — AI Sherpa mensuel | Velok',
  'Un accompagnement mensuel ancré dans le travail réel de l’équipe, avec un premier projet concret et un suivi de l’adoption.',
  '/ai-sherpa',
);

export default function SherpaPage() {
  return (
    <PageFrame>
      <div className="v2-home">
        <PageIntro
          kicker="Organiser · AI Sherpa mensuel"
          title="Chaque mois, faire avancer les usages IA de votre équipe."
          lede="AI Sherpa est un accompagnement mensuel : nous partons du travail réel, choisissons un premier projet avec l’équipe et suivons son adoption. Pas seulement des conseils sur les outils, mais une pratique que l’équipe peut réutiliser."
        />
        <section className="page-illustration-band">
          <WideIllustration
            src="/brand/v2/workflows/presentation-workshop.webp"
            alt="Illustration : une personne présente un workflow numérique à une équipe pendant un atelier."
          />
        </section>
        <section className="content-band alt">
          <h2>Du conseil qui rejoint le travail.</h2>
          <div className="content-grid">
            <article className="content-card element-card">
              <h3>Choisir</h3>
              <p>
                Examiner les usages possibles à partir d’une tâche réelle.
                Décider de ce qui mérite un essai avant d’acheter ou de
                construire.
              </p>
            </article>
            <article className="content-card element-card">
              <h3>Pratiquer</h3>
              <p>
                Des séances de travail sur le premier projet avec les personnes
                concernées. Une méthode qu’elles peuvent réutiliser dans leur métier.
              </p>
            </article>
            <article className="content-card element-card">
              <h3>Observer</h3>
              <p>
                Suivre chaque mois l’adoption et comparer le travail avant et
                après l’essai : temps, qualité, reprises et usage réel. Choisir
                les mesures ensemble.
              </p>
            </article>
            <article className="content-card element-card">
              <h3>Faire durer</h3>
              <p>
                Ajuster ce qui bloque, transmettre la pratique et décider de la
                suite avec le responsable de l’équipe.
              </p>
            </article>
          </div>
        </section>
        <section className="audit-disclosure">
          <h2>Accompagner et construire : deux périmètres.</h2>
          <p>
            Le conseil et la formation peuvent suffire à votre équipe. Si une
            intégration ou une automatisation devient utile, nous la cadrons
            séparément : livrable, responsable, accès nécessaires et critères de
            réussite. Les outils existants passent avant le sur mesure. Un agent
            sur mesure ne vient qu’après AI Sherpa ou un audit, si le besoin le
            justifie. Tout accès aux données fait l’objet d’un périmètre écrit
            avant connexion.
          </p>
          <Link href="/methode">Voir comment nous avançons →</Link>
        </section>
        <section className="content-band alt">
          <h2>Un premier projet, un livrable, un rythme.</h2>
          <p>
            Par exemple : aider l’équipe à préparer un compte rendu à partir de
            ses notes. Le livrable est une méthode réutilisable, testée sur un cas
            réel, avec ses consignes de vérification et un suivi de l’usage.
            Nous choisissons ensemble le projet et son calendrier, puis revenons
            chaque mois sur l’adoption, les blocages et la prochaine amélioration.
          </p>
        </section>
        <section className="page-cta">
          <h2>Organisons un premier usage utile.</h2>
          <p>
            Vous pouvez commencer directement par AI Sherpa ou un atelier, sans
            audit préalable. Si vous ne savez pas quel flux améliorer,
            <Link href="/audit"> l’audit gratuit d’une boîte courriel</Link> est
            notre point de départ recommandé.
          </p>
          <LeadLink
            className="button button-cta"
            href="/commencer?offre=sherpa"
          >
            Parler d’AI Sherpa avec David <span aria-hidden="true">→</span>
          </LeadLink>
        </section>
      </div>
    </PageFrame>
  );
}

