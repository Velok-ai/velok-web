import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from '@/lib/site-metadata';
import { PageFrame, PageIntro } from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'Comprendre le workflow avant de choisir l’outil | Velok',
  'Comprendre les étapes, les outils et les relais de votre équipe, puis choisir un premier usage IA à essayer et à reprendre.',
  '/methode',
);
const steps = [
  [
    'Comprendre',
    'Relier ce qui change dans l’IA aux tâches, aux étapes et aux questions de votre équipe.',
  ],
  [
    'Apprendre',
    'Pratiquer les outils sur un exemple du métier. Savoir reprendre et vérifier le résultat.',
  ],
  [
    'Identifier',
    'Choisir un premier usage, son responsable et une mesure de départ.',
  ],
  [
    'Mettre en place',
    'Cadrer un outil, une intégration ou une automatisation si le besoin le justifie.',
  ],
  [
    'Adopter',
    'Observer l’usage réel, aider les personnes et ajuster ce qui bloque.',
  ],
  [
    'Étendre',
    'Répéter ce qui fonctionne. Choisir le prochain usage à partir des résultats observés.',
  ],
];
export default function MethodPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Notre méthode"
        title="Comprendre le workflow avant de choisir l’outil."
        lede="Les étapes, les outils, les personnes et les passages de relais : nous partons de la façon dont votre équipe travaille pour choisir le premier usage utile."
      />
      <div className="v2-home">
        <section className="v2-section v2-wrap v2-split">
          <div>
            <p className="section-kicker">Votre point de départ</p>
            <h2>Commencez là où en est votre équipe.</h2>
            <p>
              Vous découvrez l’IA, vous avez déjà des outils ou vous voulez
              faire adopter un premier usage. Le point de départ dépend de ce
              que votre équipe sait déjà faire.
            </p>
            <p>
              Comprendre → Apprendre → Identifier → Mettre en place → Adopter →
              Étendre : ces six étapes ne sont pas six achats obligatoires.
            </p>
          </div>
          <figure className="v2-team-scene">
            <Image
              src="/brand/v2/adoption.webp"
              alt="Illustration : une professionnelle pratique dans ses outils à son poste de travail, accompagnée par un collègue."
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>
              Comprendre les étapes. Pratiquer dans ses outils.
            </figcaption>
          </figure>
        </section>
        <section className="v2-section v2-navy">
          <div className="v2-wrap">
            <p className="section-kicker">De l’apprentissage à l’adoption</p>
            <ol className="v2-parcours">
              {steps.map(([title, body], i) => (
                <li key={title}>
                  <span className="v2-number">0{i + 1}</span>
                  <h2 style={{ fontSize: 28 }}>{title}</h2>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="v2-section v2-wrap" id="premier-usage">
          <p className="section-kicker">
            Exemple illustratif · suivi d’une réunion client
          </p>
          <h2>Des notes à une méthode que l’équipe reprend.</h2>
          <p className="v2-lede">
            Le compte rendu existe, mais les décisions, les questions ouvertes
            et les actions restent mêlées. Nous examinons ce workflow avant de
            choisir où l’IA peut aider.
          </p>
          <div className="v2-three">
            <article>
              <span className="v2-number">01 · Comprendre le circuit</span>
              <h3>Ce que la prochaine personne doit recevoir.</h3>
              <p>
                Des notes autorisées, une trame de suivi et une personne qui
                connaît le dossier. Nous observons la préparation actuelle et
                les reprises nécessaires.
              </p>
            </article>
            <article>
              <span className="v2-number">02 · Essayer ensemble</span>
              <h3>Un suivi préparé, puis relu.</h3>
              <p>
                L’IA prépare un brouillon séparant décisions, questions et
                actions. Le responsable compare aux notes ; ce qui manque reste
                à confirmer.
              </p>
            </article>
            <article>
              <span className="v2-number">03 · Reprendre la méthode</span>
              <h3>Le dossier suivant, avec l’équipe.</h3>
              <p>
                Un collègue utilise la consigne et la checklist sur une autre
                réunion. Nous examinons les corrections nécessaires et décidons
                de la suite.
              </p>
            </article>
          </div>
          <p>
            Vous conservez une consigne, un modèle et les vérifications métier.
            Nous convenons d’un responsable, d’un critère d’observation et de la
            prochaine décision : continuer, ajuster, arrêter ou cadrer une
            intégration distincte.
          </p>
          <p className="v2-note">
            Cet exemple explique la méthode. Il ne décrit pas une mission client
            et ne revendique aucun gain mesuré.
          </p>
        </section>
        <section className="v2-section v2-soft" id="mettre-en-place">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">Mettre en place</p>
              <h2>
                Un premier usage,
                <br />
                pas un grand programme.
              </h2>
            </div>
            <div>
              <p>
                Un atelier produit une pratique à essayer et peut être utile
                seul. Avant une implémentation, nous convenons d’un livrable,
                des personnes qui le portent et de la manière d’observer sa
                valeur. Les résultats déterminent la suite ; ils ne sont pas
                présumés.
              </p>
              <p>
                Nous privilégions un outil professionnel existant. Une
                intégration relie les étapes lorsque c’est nécessaire. Un agent
                ou du code sur mesure n’entre dans le périmètre que s’il apporte
                une valeur utile.
              </p>
              <Link className="text-link" href="/securite">
                Consulter les principes de mise en œuvre →
              </Link>
            </div>
          </div>
        </section>
        <section className="v2-section v2-wrap v2-split" id="adopter">
          <div>
            <p className="section-kicker">Adopter, puis étendre</p>
            <h2>
              Observer l’usage.
              <br />
              Ajuster ce qui bloque.
            </h2>
          </div>
          <div>
            <p>
              Nous examinons la reprise sur les dossiers suivants : qualité,
              temps de préparation ou corrections nécessaires. Le critère est
              choisi ensemble avant l’essai.
            </p>
            <p>
              Les accès, validations et éléments à transmettre sont documentés
              pour chaque mise en œuvre. Ce qui fonctionne peut être étendu à
              d’autres tâches ou équipes, avec un périmètre adapté.
            </p>
          </div>
        </section>
        <section className="v2-section v2-wrap">
          <h2>Quel serait le premier usage utile pour votre équipe ?</h2>
          <div className="v2-actions">
            <Link
              className="button button-primary"
              href="/commencer?source=methode"
            >
              Parler de votre premier usage →
            </Link>
            <Link className="text-link" href="/atelier-agents">
              Apprendre en faisant dans un atelier →
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
