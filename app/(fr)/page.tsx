import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageFrame } from '@/components/site-shell';
import { parcours, editorialStages } from '@/lib/v2-parcours';

export const metadata: Metadata = pageMetadata(
  'Velok — L’IA utile. Sans complexité.',
  'Conférences, formations, ateliers et mise en place : Velok aide vos équipes à trouver un premier usage utile de l’IA et à l’adopter dans leur travail.',
  '/',
);
const situations = [
  [
    'Préparer un dossier client',
    'Expertise comptable',
    'Rassembler les pièces reçues, repérer ce qui manque et préparer une synthèse à relire.',
    '/secteurs/expertise-comptable',
  ],
  [
    'Retrouver les décisions',
    'Management',
    'À partir d’un compte rendu, retrouver les engagements, les responsables et les échéances.',
    '/situations',
  ],
  [
    'Préparer une synthèse',
    'Agences et conseil',
    'Réunir les informations d’un brief pour préparer une première lecture, puis apporter le jugement métier.',
    '/situations',
  ],
];

export default function Home() {
  return (
    <PageFrame>
      <div className="v2-home">
        <section className="v2-hero v2-wrap">
          <div>
            <p className="section-kicker">IA, humain &amp; équipes</p>
            <h1>
              L’IA utile.
              <br />
              <em>Sans complexité.</em>
            </h1>
            <p className="v2-mission">
              La puissance de l’IA au service de vos équipes.
            </p>
            <p>
              Nous formons vos équipes, choisissons avec elles un premier usage,
              puis le mettons en place dans leurs outils et les accompagnons
              pendant qu’il s’installe.
            </p>
            <div className="v2-actions">
              <Link
                className="button button-primary"
                href="/commencer?source=hero"
              >
                Parler de votre premier usage <span aria-hidden="true">→</span>
              </Link>
              <a className="text-link" href="#parcours">
                Voir les façons de commencer
              </a>
            </div>
          </div>
          <figure className="v2-team-scene">
            <Image
              src="/brand/v2/equipe-atelier.webp"
              alt="Illustration : trois professionnels examinent ensemble une tâche et ses étapes pendant un atelier."
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <figcaption>Apprendre ensemble. Partir du travail réel.</figcaption>
          </figure>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap">
            <p className="section-kicker">Le point de départ</p>
            <h2>
              Le problème est souvent
              <br />
              entre deux étapes.
            </h2>
            <div className="v2-three">
              <article>
                <span className="v2-number">01</span>
                <h3>
                  L’information est là.
                  <br />
                  Le contexte manque.
                </h3>
                <p>
                  L’équipe rassemble des emails, documents et notes avant de
                  pouvoir avancer.
                </p>
              </article>
              <article>
                <span className="v2-number">02</span>
                <h3>
                  La tâche revient.
                  <br />
                  La relance aussi.
                </h3>
                <p>
                  Une pièce manque, une demande attend : le même suivi
                  recommence.
                </p>
              </article>
              <article>
                <span className="v2-number">03</span>
                <h3>
                  Le travail est prêt.
                  <br />
                  La décision attend.
                </h3>
                <p>
                  Il faut retrouver qui doit répondre, reprendre ou valider.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="v2-section v2-wrap" id="situations">
          <p className="section-kicker">Exemples illustratifs</p>
          <h2>
            Voir le travail avant
            <br />
            de choisir l’outil.
          </h2>
          <div className="v2-three v2-cases">
            {situations.map(([title, sector, body, href]) => (
              <article key={title}>
                <p className="v2-label">Situation type · {sector}</p>
                <h3>{title}</h3>
                <p>{body}</p>
                <Link className="text-link" href={href}>
                  Explorer la situation →
                </Link>
              </article>
            ))}
          </div>
          <p className="v2-note">
            Ces situations illustrent des usages possibles ; elles ne
            constituent pas des résultats clients.
          </p>
        </section>
        <section className="v2-section v2-navy" id="parcours">
          <div className="v2-wrap">
            <p className="section-kicker">Votre parcours</p>
            <h2>
              Commencez là où
              <br />
              <em>en est votre équipe.</em>
            </h2>
            <p className="v2-lede">
              Six étapes liées. Chacune peut servir de point d’entrée ; chacune
              prépare la suivante.
            </p>
            <ol className="v2-parcours">
              {parcours.map(([title, offer, body], i) => (
                <li key={title}>
                  <span className="v2-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{title}</h3>
                  <strong>{offer}</strong>
                  <p>{body}</p>
                  <Link
                    className="text-link"
                    href={
                      i < 3
                        ? `/commencer?besoin=${['awareness', 'training', 'workshop'][i]}&source=parcours-${i + 1}`
                        : [
                            '/methode#mettre-en-place',
                            '/commencer?besoin=adoption&source=parcours-5',
                            '/methode#adopter',
                          ][i - 3]
                    }
                  >
                    {
                      [
                        'Organiser une session',
                        'Former une équipe',
                        'Choisir un premier usage',
                        'Voir la mise en place',
                        'Accompagner l’adoption',
                        'Étendre les usages',
                      ][i]
                    }{' '}
                    →
                  </Link>
                  {i === 1 && (
                    <p>
                      <Link className="text-link" href="/atelier-agents">
                        Découvrir l’atelier agents →
                      </Link>
                    </p>
                  )}
                </li>
              ))}
            </ol>
            <div className="v2-actions">
              <Link className="button button-cta" href="/commencer">
                Choisir un point de départ →
              </Link>
              <Link className="text-link" href="/audit">
                Examiner une opération avec l’audit →
              </Link>
            </div>
          </div>
        </section>
        <section className="v2-section v2-wrap v2-split">
          <div>
            <p className="section-kicker">Apprendre en faisant</p>
            <h2>
              Apprendre à déléguer
              <br />
              <em>sans perdre la main.</em>
            </h2>
            <p>
              Une tâche précise, un résultat attendu, un premier essai. L’équipe
              apprend à reprendre ce qui demande son jugement et à ajuster ce
              qu’elle confie à l’IA.
            </p>
            <Link className="text-link" href="/atelier-agents">
              Découvrir l’atelier agents →
            </Link>
          </div>
          <figure className="v2-team-scene">
            <Image
              src="/brand/v2/workflows/workflow-sales.webp"
              alt="Illustration : trois professionnels échangent autour d’un workflow numérique, avec un ordinateur et une tablette."
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>
              Préparer un premier jet. Reprendre ce qui demande du jugement.
            </figcaption>
          </figure>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">Mise en place &amp; adoption</p>
              <h2>Une solution devient utile quand l’équipe s’en sert.</h2>
              <p>
                Nous intégrons le premier usage dans les outils adaptés, le
                testons sur le travail réel et expliquons comment s’en servir.
                Les retours de l’équipe permettent de l’ajuster avant de
                l’étendre.
              </p>
              <p>
                Vous retrouvez les comptes, les règles de fonctionnement et la
                documentation nécessaires pour le reprendre.
              </p>
              <Link className="text-link" href="/methode#adopter">
                Voir le parcours de mise en place →
              </Link>
            </div>
            <figure className="v2-team-scene">
              <Image
                src="/brand/v2/workflows/workflow-comptabilite.webp"
                alt="Illustration : une professionnelle utilise deux écrans pour vérifier des dossiers numériques et leurs exceptions."
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <figcaption>
                Pratiquer dans ses outils. Ajuster avec l’équipe.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="v2-section v2-wrap">
          <p className="section-kicker">Contenus &amp; méthodes</p>
          <h2>
            Apprendre à travailler avec l’IA,
            <br />
            <em>une étape à la fois.</em>
          </h2>
          <p className="v2-lede">
            Des faits expliqués, leurs conséquences dans le travail, des
            observations documentées et une méthode à essayer.
          </p>
          <div className="v2-editorial">
            {editorialStages.map(([title, body], i) => (
              <article key={title}>
                <span className="v2-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <Link className="text-link" href="/learn">
            Explorer les contenus →
          </Link>
          <div className="v2-actions">
            <Link
              className="button button-primary"
              href="/commencer?besoin=awareness&source=ressources"
            >
              Organiser une session pour votre équipe →
            </Link>
          </div>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap">
            <p className="section-kicker">Les conditions de confiance</p>
            <h2>
              Ce que nous mettons en place
              <br />
              reste à vous.
            </h2>
            <div className="v2-three">
              <article>
                <h3>Vos outils et vos comptes</h3>
                <p>
                  Des accès adaptés au besoin, dans un environnement que votre
                  organisation détient.
                </p>
              </article>
              <article>
                <h3>Le jugement humain</h3>
                <p>
                  Une personne reprend les situations sensibles, ambiguës ou
                  inhabituelles.
                </p>
              </article>
              <article>
                <h3>Un fonctionnement transmis</h3>
                <p>
                  Des règles et une documentation que l’équipe peut relire et
                  reprendre.
                </p>
              </article>
            </div>
            <Link className="text-link" href="/securite">
              Lire les principes de sécurité →
            </Link>
          </div>
        </section>
        <section className="v2-section v2-wrap v2-contact" id="secteurs">
          <p className="section-kicker">Votre interlocuteur en France</p>
          <h2>Quel serait le premier usage utile pour votre équipe ?</h2>
          <p>
            David Desbons Lauvaux, qui codirige Velok, vous répond directement.
            Pas besoin d’avoir déjà choisi un outil : partez d’une tâche, d’un
            irritant ou d’une équipe que vous voulez aider.
          </p>
          <div className="v2-actions">
            <Link
              className="button button-primary"
              href="/commencer?source=final"
            >
              Parler de votre premier usage →
            </Link>
            <a className="text-link" href="mailto:david@velok.ai">
              david@velok.ai ↗
            </a>
          </div>
          <p className="v2-note">
            Services professionnels ·{' '}
            <Link href="/secteurs/expertise-comptable">
              Expertise comptable
            </Link>{' '}
            · <Link href="/situations">Autres situations de travail</Link>
          </p>
        </section>
      </div>
    </PageFrame>
  );
}
