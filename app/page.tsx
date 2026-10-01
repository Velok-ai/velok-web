import { LeadLink } from '@/components/lead-link';
import { GalleryArt } from '@/components/gallery-art';
import { PaintedObject, VisualJourney } from '@/components/painted-object';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter, SiteHeader, VisualElement } from '@/components/site-shell';

const examples = [
  ['Préparer une proposition', 'Retrouver les bons précédents, préparer un premier brouillon et le faire relire par la personne qui connaît le client.'],
  ['Passer le relais', 'Transformer un échange en synthèse, actions et points à confirmer pour la prochaine personne.'],
  ['Suivre un dossier', 'Repérer les pièces manquantes et préparer les relances, sans multiplier les tableaux à tenir.'],
];

const capabilities = [
  ['07-market-module', 'Choisir l’outil', 'Un outil existant lorsqu’il répond au besoin.'],
  ['09-connector-rail', 'Relier les étapes', 'Une intégration quand le travail se perd entre deux outils.'],
  ['11-human-handoff', 'Déléguer progressivement', 'Un agent seulement si la tâche le justifie.'],
  ['08-bespoke-module', 'Construire au besoin', 'Du sur mesure pour un besoin qui résiste aux solutions existantes.'],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="museum-home" id="main-content">
        <section className="gallery-hero">
          <div className="gallery-hero-copy">
            <p className="eyebrow"><span /> IA, humain &amp; équipes</p>
            <h1>L’IA utile.<br /><em>Sans complexité.</em></h1>
            <p>Nous formons vos équipes sur leur travail réel, puis mettons en place avec elles le premier usage qui mérite d’être répété.</p>
            <div className="hero-actions">
              <LeadLink className="button button-primary" href="/commencer">Trouver le premier usage utile <span aria-hidden="true">→</span></LeadLink>
              <Link className="text-link" href="/atelier-agents">Découvrir les ateliers</Link>
            </div>
            <div className="trust-rail" aria-label="Le point de départ"><span>Votre travail réel</span><span>Votre équipe</span><span>Un premier usage</span></div>
          </div>
          <GalleryArt className="gallery-hero-art" src="/brand/paintings/guided-ai-practice.webp" alt="Illustration peinte de deux collègues : une personne compare un document au brouillon d’un assistant IA, pendant qu’un guide lui montre un point à vérifier." number="01" title="Partir de votre travail." note="Choisir un usage. L’essayer ensemble." sizes="(max-width: 760px) 100vw, 54vw" priority />
        </section>

        <VisualJourney />

        <section className="entry-section" id="offres">
          <div className="short-heading">
            <p className="section-kicker">Par où commencer</p>
            <h2>Apprendre ensemble.<br /><em>Passer à l’usage.</em></h2>
          </div>
          <div className="entry-grid">
            <Link className="entry-card blue-entry" href="/atelier-agents">
              <div className="offer-painting"><Image src="/brand/paintings/team-workshop.webp" alt="" fill sizes="(max-width: 760px) 100vw, 46vw" /></div>
              <span>01 · Formation &amp; ateliers</span><h3>Pratiquer sur votre métier.</h3>
              <p>Comprendre les outils, essayer un cas concret et choisir ce que l’équipe peut réutiliser.</p><strong>Préparer un atelier →</strong>
            </Link>
            <Link className="entry-card dark-entry" href="/ai-sherpa">
              <PaintedObject name="practice-together" decorative />
              <span>02 · Accompagnement AI Sherpa</span><h3>Un guide pour avancer.</h3>
              <p>Choisir les bons usages, aider les personnes à les adopter et cadrer les prochaines améliorations.</p><strong>Découvrir AI Sherpa →</strong>
            </Link>
          </div>
          <p className="section-note">Une sensibilisation peut préparer le terrain. Un atelier ou un accompagnement peut commencer sans connecter une boîte email.</p>
        </section>

        <section className="gallery-room" aria-labelledby="gallery-workshop-heading">
          <div className="gallery-room-heading"><p className="section-kicker">Une équipe. Un exemple concret.</p><h2 id="gallery-workshop-heading">La pratique commence<br /><em>autour de votre travail.</em></h2><p>Comprendre les outils, essayer ensemble, puis choisir ce que l’équipe peut reprendre.</p></div>
          <GalleryArt className="gallery-mural" src="/brand/paintings/team-workshop.webp" alt="Illustration peinte d’un atelier : cinq personnes travaillent autour d’une table, avec des documents et des ordinateurs." number="02" title="Apprendre ensemble." note="La formation et les ateliers, sur des situations de votre métier." />
        </section>

        <section className="method-section-v2">
          <div className="short-heading">
            <p className="section-kicker">Les frictions du quotidien</p>
            <h2>Le problème est souvent<br /><em>entre deux étapes.</em></h2>
          </div>
          <div className="use-case-grid">
            <article><span>01 · Chercher</span><h3>L’information existe. Il faut la retrouver.</h3><p>Une proposition passée, une pièce de dossier, une décision prise dans un échange.</p></article>
            <article><span>02 · Refaire</span><h3>Le travail se répète. Chacun repart de zéro.</h3><p>Une synthèse, un compte rendu, une relance ou un premier brouillon à préparer.</p></article>
            <article><span>03 · Transmettre</span><h3>Le relais prend du temps. Le contexte se perd.</h3><p>Une personne attend ce que la précédente doit expliquer, valider ou envoyer.</p></article>
          </div>
          <p className="section-note">Voir le travail avant de choisir l’outil. Nous partons d’un exemple concret avec les personnes qui le font.</p>
          <Link className="text-link" href="/methode">Voir la méthode →</Link>
        </section>

        <section className="entry-section" id="usages">
          <div className="short-heading">
            <p className="section-kicker">Exemples à explorer</p>
            <h2>Votre métier.<br /><em>Un usage à essayer.</em></h2>
          </div>
          <div className="use-case-grid">
            {examples.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <p className="section-note">Ces exemples servent à choisir un premier essai. Le résultat se mesure sur votre travail, avec votre équipe.</p>
        </section>

        <section className="capability-section" id="solutions">
          <div className="short-heading light-heading">
            <p className="section-kicker">Quand le besoin est clair</p>
            <h2>Mettre en place<br /><em>ce qui aide vraiment.</em></h2>
          </div>
          <div className="capability-grid">
            {capabilities.map(([asset, title, body]) => <article key={title}><VisualElement name={asset} /><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <p className="compliance-note">L’implémentation fait l’objet d’un périmètre distinct : résultat attendu, responsable, outils et critères de réussite.</p>
        </section>

        <section className="method-section-v2" id="adoption">
          <div className="short-heading">
            <p className="section-kicker">L’adoption</p>
            <h2>Une solution est utile<br /><em>si l’équipe l’utilise.</em></h2>
          </div>
          <div className="use-case-grid">
            <article><h3>Un usage, un responsable.</h3><p>Nous choisissons avec vous qui porte le premier essai et ce que l’équipe doit pouvoir faire seule.</p></article>
            <article><h3>Une comparaison concrète.</h3><p>Temps passé, qualité du livrable, reprises nécessaires : nous convenons de ce qui sera observé.</p></article>
            <article><h3>Une suite qui se décide.</h3><p>Répéter, ajuster ou arrêter. Puis étendre ce qui fonctionne, au rythme de l’équipe.</p></article>
          </div>
          <div className="secondary-offer"><div><p className="section-kicker">Un diagnostic complémentaire</p><h3>Quand les échanges cachent le travail.</h3><p>L’audit de l’inbox peut éclairer les demandes, relais et relances. Son périmètre se convient séparément, lorsqu’il sert le besoin.</p></div><Link className="text-link" href="/audit">Voir l’audit de l’inbox →</Link></div>
        </section>

        <section className="sector-section-v2" id="secteurs">
          <div><p className="section-kicker">Équipes &amp; partenaires</p><h2>Partir de ce que vos équipes font déjà.</h2></div>
          <div className="sector-links">
            <Link href="/secteurs/services-professionnels"><span>Services professionnels</span><strong>Propositions, synthèses, suivi de dossiers →</strong></Link>
            <Link href="/secteurs/expertise-comptable"><span>Expertise comptable</span><strong>Collecte de pièces, préparation, relances →</strong></Link>
            <Link href="/partenaires/agences"><span>Agences partenaires</span><strong>Accompagner vos équipes et vos clients →</strong></Link>
          </div>
        </section>

        <section className="audit-disclosure proof-disclosure">
          <p className="section-kicker">Un cadre de mise en œuvre</p>
          <h2>Apprendre à déléguer sans perdre la main.</h2>
          <p>Accès adaptés, validation humaine des actions sensibles et documentation : nous convenons du cadre avant toute intégration.</p>
          <Link href="/securite">Voir les principes de mise en œuvre →</Link>
        </section>

        <section className="operator-section">
          <VisualElement name="11-human-handoff" />
          <div><p className="section-kicker">Votre interlocuteur en France</p><h2>Un premier échange avec David.</h2></div>
          <p>Parlez-lui d’une tâche qui revient, d’un outil déjà acheté ou d’une équipe qui veut essayer. Ensemble, choisissez le bon premier pas.</p>
          <a className="text-link" href="mailto:david@velok.ai">david@velok.ai ↗</a>
        </section>

        <section className="page-cta"><h2>Quel premier usage serait utile à votre équipe ?</h2><LeadLink className="button button-cta" href="/commencer">En parler avec David <span aria-hidden="true">→</span></LeadLink></section>
      </main>
      <SiteFooter />
    </>
  );
}
