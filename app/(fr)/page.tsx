import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageFrame } from '@/components/site-shell';
import { editorialStages } from '@/lib/v2-parcours';

export const metadata: Metadata = pageMetadata(
  'Velok — Votre département IA.',
  'Développer votre activité, organiser le travail et optimiser vos opérations, avec un socle commun pour encadrer les usages IA.',
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
              Votre<br />
              <em>département IA.</em>
            </h1>
            <p className="v2-mission">
              La puissance de l’IA au service de vos équipes.
            </p>
            <p>
              Développer votre activité, organiser le travail de vos équipes ou optimiser un flux récurrent. Nous partons d’un premier chantier concret et accompagnons son adoption dans votre quotidien.
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
        <section className="v2-section v2-navy" id="parcours">
          <div className="v2-wrap">
            <p className="section-kicker">Trois portes d’entrée</p>
            <h2>Une priorité.<br /><em>Un premier chantier concret.</em></h2>
            <p className="v2-lede">Choisissez le besoin qui compte aujourd’hui. Trois portes d’entrée, pas six étapes obligatoires.</p>
            <ol className="v2-parcours">
              <li><span className="v2-number">01</span><h3>Développer</h3><strong>Une première campagne de prospection</strong><p>Cibler les bons comptes, préparer les séquences, organiser le traitement des réponses et préparer les rendez-vous.</p><p>Livrable : une campagne prête à valider et des règles de traitement des réponses.</p><p className="v2-note">Calendrier défini ensemble.</p><Link className="text-link" href="/developper">Voir le premier chantier →</Link></li>
              <li><span className="v2-number">02</span><h3>Organiser</h3><strong>AI Sherpa, chaque mois</strong><p>Installer l’IA dans le travail réel de l’équipe, pratiquer ensemble et suivre l’adoption.</p><p>Livrable : un premier usage métier et un suivi de son adoption.</p><p className="v2-note">Accompagnement mensuel, périmètre défini ensemble.</p><Link className="text-link" href="/ai-sherpa">Découvrir AI Sherpa →</Link></li>
              <li><span className="v2-number">03</span><h3>Optimiser</h3><strong>Un audit de boîte mail, puis un premier flux</strong><p>Repérer où le travail se bloque, puis mettre en place le premier workflow révélé par l’audit.</p><p>Livrable : un rapport d’audit et un premier workflow priorisé.</p><p className="v2-note">Calendrier défini selon la boîte et l’historique retenus.</p><Link className="text-link" href="/audit">Découvrir l’audit de boîte mail →</Link></li>
            </ol>
            <aside className="v2-foundation" aria-labelledby="foundation-title">
              <div><p className="section-kicker">Le socle commun</p><h3 id="foundation-title">Sécuriser</h3><p>Une politique d’usage IA, des accès cadrés et une validation humaine soutiennent chaque chantier. Un guide, un modèle et une page de validation équipe à construire avec votre responsable IT.</p></div>
              <Link className="text-link" href="/securite">Découvrir le socle →</Link>
            </aside>
          </div>
        </section>
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div><p className="section-kicker">Vous hésitez entre les trois ?</p><h2>Le travail réel indique la bonne porte.</h2><p>Commencez par l’audit gratuit d’une boîte mail pour identifier un premier chantier utile. Le périmètre et l’historique d’une suite éventuelle sont définis sur mesure. L’audit n’est pas un préalable obligatoire à un atelier.</p><Link className="text-link" href="/audit">Trouver mon point de départ →</Link></div>
            <div><h3>Un besoin déjà clair ?</h3><p>Démarrez directement avec AI Sherpa ou un atelier pratique. Les agents sur mesure viennent après un audit ou un accompagnement Sherpa qui en confirme l’utilité.</p><Link className="text-link" href="/atelier-agents">Découvrir l’atelier →</Link></div>
          </div>
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

