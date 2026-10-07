import { pageMetadata } from '@/lib/site-metadata';
import { LeadLink } from '@/components/lead-link';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro, WideIllustration } from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'Agences — Explorer un partenariat IA | Velok',
  'Former vos équipes et cadrer un premier usage utile pour vos clients avec Velok.',
  '/partenaires/agences',
);

export default function AgenciesPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Agences · Partenariats"
        title="Un premier usage utile, pour vous ou vos clients."
        lede="Votre équipe veut pratiquer l’IA ou un client vous demande de l’aider. Partons de son travail pour définir un premier atelier et la suite éventuelle."
      />
      <section className="page-illustration-band">
        <WideIllustration
          className="agency-partnership-illustration"
          src="/brand/v2/partenariat-agence.webp"
          alt="Les deux personnages VELOK accompagnent un professionnel d’agence autour d’un workflow IA, dans un bureau lumineux."
        />
      </section>
      <section className="content-band alt">
        <div className="content-grid">
          <article className="content-card">
            <h3>Pour votre équipe</h3>
            <p>
              Préparer un brief, synthétiser des retours ou réutiliser des
              propositions : choisir une tâche, apprendre une méthode et
              observer son usage.
            </p>
            <Link className="text-link" href="/atelier-agents">
              Voir les ateliers →
            </Link>
          </article>
          <article className="content-card">
            <h3>Avec vos clients</h3>
            <p>
              Cadrer le besoin ensemble. Convenons de qui porte la relation,
              anime l’atelier, réalise une éventuelle intégration et suit
              l’adoption.
            </p>
            <Link className="text-link" href="/ai-sherpa">
              Voir l’accompagnement →
            </Link>
          </article>
        </div>
      </section>
      <section className="audit-disclosure">
        <h2>Commencer par une collaboration précise.</h2>
        <p>
          Un client, un besoin et un premier résultat attendu. Les
          responsabilités, le périmètre et les conditions du partenariat se
          conviennent avant la mission.
        </p>
      </section>
      <section className="page-cta">
        <h2>Parler d’un premier cas ensemble.</h2>
        <LeadLink className="button button-cta" href="/commencer?offre=partner">
          Explorer un partenariat avec David <span aria-hidden="true">→</span>
        </LeadLink>
      </section>
    </PageFrame>
  );
}
