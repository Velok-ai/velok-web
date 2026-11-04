import { SoftwareEcosystem } from '@/components/software-ecosystem';
import { workflowSoftware } from '@/lib/software-ecosystems';
import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageFrame, PageIntro, VisualElement } from '@/components/site-shell';
import { illustrativeSituations } from '@/lib/illustrative-situations';

export const metadata: Metadata = pageMetadata(
  'Situations | Velok',
  'Des systèmes IA à cadrer autour de vos logiciels métier : Pennylane, Cegid Loop, Kleos, Salesforce, HubSpot, Bullhorn et Microsoft 365.',
  '/situations',
);

export default function SituationsPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Votre métier · vos logiciels · votre IA"
        title="Votre IA, reliée à vos outils métier."
        lede="Expertise comptable, juridique, conseil ou recrutement : nous partons de votre travail et des logiciels que vous utilisez déjà pour cadrer un système agentique utile à votre équipe."
      />
      <section className="situations-note">
        <strong>Cas illustratifs.</strong>
        <p>
          Les organisations et les situations sont fictives ; les logiciels cités sont réels.
          Leurs API permettent d’étudier des connexions sur mesure : ces exemples ne sont pas des intégrations VELOK déjà déployées.
        </p>
      </section>
      <nav className="situations-sector-nav" aria-label="Choisir votre métier">
        <a href="#expertise-comptable">Experts-comptables <span aria-hidden="true">↓</span></a>
        <a href="#avocats">Avocats <span aria-hidden="true">↓</span></a>
        <a href="#conseil">Conseil B2B <span aria-hidden="true">↓</span></a>
        <a href="#recrutement">Recrutement <span aria-hidden="true">↓</span></a>
      </nav>
      <section className="situations-list">
        {illustrativeSituations.map((item) => (
          <article className="situation-story" id={item.id} key={item.id}>
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
            <SoftwareEcosystem software={item.software} />
            <div className="situation-story-grid">
              <div>
                <span>La situation</span>
                <p>{item.situation}</p>
              </div>
              <div>
                <span>Le système à cadrer</span>
                <p>{item.work}</p>
              </div>
              <div>
                <span>Ce que cela nous apprend</span>
                <p>{item.lesson}</p>
              </div>
            </div>
            <Link className="text-link situation-contact" href={`/commencer?besoin=integration&source=situations-${item.id}`}>
              Cadrer une connexion pour mon équipe <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </section>
      <div className="v2-home">
        <section className="v2-section v2-soft">
          <div className="v2-wrap v2-split">
            <div>
              <p className="section-kicker">Marketing · workflow illustratif</p>
              <h2>Vos contenus, de la recherche à la diffusion.</h2>
              <SoftwareEcosystem software={workflowSoftware.marketing} />
              <p>
                Relier une base de contenus dans Notion aux contacts ou campagnes
                de HubSpot ou Brevo : le système peut préparer les adaptations
                et la diffusion. L’équipe valide l’angle, le ton et chaque contenu avant publication.
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
              <SoftwareEcosystem software={workflowSoftware.sales} />
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
              <SoftwareEcosystem software={workflowSoftware.hr} />
              <p>
                À partir des informations autorisées dans Lucca ou Personio,
                préparer le parcours d’accueil et les prochaines étapes dans
                Microsoft 365. Chaque accès et chaque étape sensible restent
                soumis à la validation du responsable concerné.
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

      <section className="page-cta">
        <p className="section-kicker">Votre situation</p>
        <h2>Quels outils utilisez-vous ? Quel travail voulez-vous simplifier ?</h2>
        <Link className="button button-cta" href="/commencer">
          Parler de mes outils avec David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
