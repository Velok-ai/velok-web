import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageFrame, PageIntro } from '@/components/site-shell';
import { editorialStages } from '@/lib/v2-parcours';
export const metadata: Metadata = pageMetadata(
  'Comprendre l’IA dans le travail | Velok',
  'Faits, analyses, observations documentées et méthodes pour les équipes de services professionnels.',
  '/learn',
);
export default function LearnPage() {
  return (
    <PageFrame>
      <PageIntro
        showTrust={false}
        kicker="Contenus · IA en contexte"
        title="Apprendre à travailler avec l’IA, une étape à la fois."
        lede="Des analyses écrites pour les associés, dirigeants et responsables d’équipe des services professionnels. Un fait, une thèse et ses conséquences dans le travail."
      />
      <div className="v2-home">
        <section className="v2-section v2-wrap">
          <p className="section-kicker">Le fil de nos analyses</p>
          <div className="v2-editorial">
            {editorialStages.map(([title, body], i) => (
              <article key={title}>
                <span className="v2-number">0{i + 1}</span>
                <h2 style={{ fontSize: 24 }}>{title}</h2>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <p>
            Chaque analyse s’appuie sur des sources identifiées. Les essais et
            observations précisent leur contexte et leurs limites. Les exemples
            illustratifs sont présentés comme tels.
          </p>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap">
            <p className="section-kicker">The New Reality · Substack</p>
            <h2>Les analyses longues sont publiées sur Substack.</h2>
            <p>Retrouvez les éditions déjà publiées.</p>
            <a
              className="button button-primary"
              href="https://thenewreality.substack.com/"
              target="_blank"
              rel="noreferrer"
            >
              Voir les articles publiés ↗
            </a>
          </div>
        </section>
        <section className="v2-section v2-wrap">
          <h2>Faire découvrir ces usages à votre équipe.</h2>
          <p>
            Une session permet d’examiner des tâches concrètes, de comprendre ce
            qui change et de discuter des premiers usages possibles.
          </p>
          <Link
            className="button button-primary"
            href="/commencer?besoin=awareness&source=learn"
          >
            Organiser une session pour votre équipe →
          </Link>
        </section>
      </div>
    </PageFrame>
  );
}
