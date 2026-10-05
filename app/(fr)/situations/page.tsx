import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';
import { illustrativeSituations } from '@/lib/illustrative-situations';

export const metadata: Metadata = pageMetadata(
  'Situations | Velok',
  'Quatre scénarios illustratifs pour montrer comment Velok part du travail réel avant de choisir une technologie.',
  '/situations',
);

export default function SituationsPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Situations · cas illustratifs"
        title="Le problème avant la technologie."
        lede="Quatre cas illustratifs pour montrer comment un problème opérationnel devient une décision de conception avant qu’un outil, une intégration ou un agent soit choisi."
      />
      <section className="situations-note">
        <strong>Cas illustratifs.</strong>
        <p>
          Les organisations, personnes et résultats décrits ici sont inventés.
          Ces situations servent uniquement à montrer la méthode de cadrage.
        </p>
      </section>
      <div className="v2-home">
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">Marketing · workflow illustratif</p>
              <h2>De la recherche au contenu diffusé.</h2>
              <p>
                L’équipe choisit les sources et l’angle, vérifie le brouillon
                puis valide les adaptations avant leur diffusion. Le workflow
                rend chaque passage et chaque responsabilité explicites.
              </p>
              <p>
                <strong>
                  Recherche → brouillon → revue → adaptations → diffusion.
                </strong>
              </p>
            </div>
            <figure className="v2-team-scene">
              <Image
                src="/brand/v2/workflows/workflow-marketing.webp"
                alt="Une équipe marketing travaille sur la recherche, les contenus et leur diffusion sur des écrans numériques."
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption>
                Exemple de workflow à cadrer avec votre équipe.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="v2-section">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">Sales · workflow illustratif</p>
              <h2>Du premier contact à la prochaine action.</h2>
              <p>
                Comprendre le besoin, préparer l’échange et consigner la
                prochaine action : un parcours partagé aide l’équipe commerciale
                à garder le contexte. La qualification et les engagements
                restent des décisions humaines.
              </p>
              <p>
                <strong>Lead → qualification → proposition → suivi.</strong>
              </p>
            </div>
            <figure className="v2-team-scene">
              <Image
                src="/brand/v2/workflows/workflow-sales.webp"
                alt="Une équipe commerciale échange avec un client autour d’une tablette, avec un pipeline numérique affiché au mur."
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption>
                Exemple de workflow à cadrer avec votre équipe.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">
                Ressources humaines · workflow illustratif
              </p>
              <h2>Préparer une arrivée, accompagner les premiers jours.</h2>
              <p>
                L’équipe organise les informations, les personnes à rencontrer
                et les étapes de formation. Chaque accès et chaque étape
                sensible restent soumis à la validation du responsable concerné.
              </p>
              <p>
                <strong>
                  Préparation → accès → équipe → formation → suivi.
                </strong>
              </p>
            </div>
            <figure className="v2-team-scene">
              <Image
                src="/brand/v2/workflows/workflow-rh.webp"
                alt="Une équipe accompagne l’arrivée d’un nouveau collaborateur avec un parcours numérique de formation et de suivi."
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption>
                Exemple de workflow à cadrer avec votre équipe.
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
      <section className="situations-list">
        {illustrativeSituations.map((item) => (
          <article className="situation-story" key={item.index}>
            <div className="situation-story-head">
              <span>
                {item.index} / {item.stage}
              </span>
              <VisualElement name={item.asset} />
            </div>
            <div className="situation-story-title">
              <h2>{item.sector}</h2>
              <p>{item.profile}</p>
            </div>
            <div className="situation-story-grid">
              <div>
                <span>La situation</span>
                <p>{item.situation}</p>
              </div>
              <div>
                <span>Le travail</span>
                <p>{item.work}</p>
              </div>
              <div>
                <span>Ce que cela nous apprend</span>
                <p>{item.lesson}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="page-cta">
        <p className="section-kicker">Votre situation</p>
        <h2>Apportez un problème réel. Nous suivrons d’abord le travail.</h2>
        <Link className="button button-cta" href="/commencer">
          Examiner un processus avec David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
