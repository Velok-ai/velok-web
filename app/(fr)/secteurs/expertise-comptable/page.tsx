import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageFrame,
  PageIntro,
  VisualElement,
  WideIllustration,
} from '@/components/site-shell';

export const metadata: Metadata = pageMetadata(
  'Expertise comptable | Velok',
  'Suivre une pièce de la collecte à la revue, sans confondre reçu et exploitable.',
  '/secteurs/expertise-comptable',
);

export default function AccountingPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="Expertise comptable · associés & direction de production"
        title="La pièce est reçue. Le dossier n’avance pas."
        lede="Une pièce peut être reçue, mal classée, incomplète ou inutilisable pour la période concernée. Nous suivons le dossier jusqu’à la revue pour voir où les relances et reprises commencent."
      />
      <section className="page-illustration-band">
        <WideIllustration
          src="/brand/v2/workflows/workflow-comptabilite.webp"
          alt="Illustration : une comptable examine des pièces numériques et les exceptions avant de valider un dossier."
        />
      </section>
      <section className="content-band alt">
        <h2>Reçu ne veut pas dire exploitable.</h2>
        <div className="content-grid">
          <article className="content-card">
            <VisualElement name="03-intake-tray" />
            <h3>Reçue, mais pas la bonne.</h3>
            <p>
              Le document arrive. Il couvre la mauvaise période ou ne permet pas
              encore d’avancer.
            </p>
          </article>
          <article className="content-card">
            <VisualElement name="04-message-stack" />
            <h3>La réponse dans un autre fil.</h3>
            <p>
              Le client répond ailleurs. Le collaborateur recoupe les échanges à
              la main.
            </p>
          </article>
          <article className="content-card">
            <VisualElement name="10-exception-beacon" />
            <h3>La revue démarre trop tôt.</h3>
            <p>
              Le dossier passe en revue alors qu’un élément manque encore. La
              revue s’arrête puis reprend.
            </p>
          </article>
          <article className="content-card">
            <VisualElement name="11-human-handoff" />
            <h3>La décision reste humaine.</h3>
            <p>
              Les échanges montrent l’arrivée et la relance. Ils ne décident pas
              si une pièce est juste.
            </p>
          </article>
        </div>
      </section>
      <section className="content-band dark">
        <h2>Le vrai sujet commence après la réception.</h2>
        <p>
          Choisir un type de dossier, suivre les demandes, les relances et les
          réponses, puis définir avec l’équipe ce qui rend une pièce réellement
          exploitable. La règle de passage à la revue vient ensuite — avant
          toute décision d’automatiser.
        </p>
      </section>
      <section className="content-band alt">
        <h2>Ce que les échanges ne montrent pas.</h2>
        <div className="content-grid">
          <article className="content-card">
            <h3>Validité comptable</h3>
            <p>Le jugement professionnel reste celui de vos équipes.</p>
          </article>
          <article className="content-card">
            <h3>Temps réellement travaillé</h3>
            <p>
              Un délai entre deux messages n’est pas du temps de production.
            </p>
          </article>
          <article className="content-card">
            <h3>Ce qui passe hors email</h3>
            <p>Portail, appel ou messagerie se confirment avec l’équipe.</p>
          </article>
          <article className="content-card">
            <h3>Votre logiciel</h3>
            <p>
              S’il couvre déjà le problème, le premier échange le montrera. Nous
              regardons alors ce qui reste autour.
            </p>
          </article>
        </div>
      </section>
      <section className="page-cta">
        <h2>Prenons une collecte. Suivons une pièce jusqu’à la revue.</h2>
        <Link className="button button-cta" href="/commencer">
          Examiner une collecte avec David <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageFrame>
  );
}
