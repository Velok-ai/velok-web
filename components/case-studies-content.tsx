import Image from 'next/image';
import { IllustrativeCases } from './illustrative-cases';
import Link from 'next/link';

const copy = {
  fr: {
    badge: 'Démonstration du système VELOK',
    title: 'Comment nos agents écrivent avec votre voix.',
    intro: 'Le point de départ : conserver les mots, les décisions et les corrections qui donnent à un texte une voix personnelle. La rédaction est une étape ; le contexte et la relecture en sont deux autres.',
    date: 'Film de présentation · 3 novembre 2026 · 42 secondes · En français',
    filmLabel: 'Film de présentation du processus éditorial VELOK, en français',
    fallback: 'Votre navigateur ne peut pas lire cette vidéo.',
    film: 'Ouvrir la démonstration animée',
    download: 'Ouvrir le film MP4',
    description: 'Le film présente le parcours d’un appel transcrit vers une collecte de contexte, un brief préparé par le coordinateur P0, une proposition de texte et une validation humaine. Il ne montre pas une connexion en direct à une messagerie ni une exécution intégrale enregistrée.',
    scope: 'Il s’agit d’une démonstration interne, pas d’un cas client ni d’une preuve de gain de temps. Les scènes illustrent le processus ; les éléments d’interface ne constituent pas des résultats mesurés.',
    processKicker: 'Le processus présenté',
    processTitle: 'Des sources au texte, puis à la décision.',
    steps: [
      ['Les sources', 'Un enregistrement ou une transcription, lorsque sa collecte est autorisée, apporte les formulations et le contexte.'],
      ['Le brief', 'Le coordinateur rassemble le sujet, les sources utiles, le ton et les limites du travail demandé.'],
      ['La proposition', 'L’agent prépare un texte. Il doit distinguer les mots de la personne, les références choisies et ses propres formulations.'],
      ['La validation', 'La personne relit la version exacte et la corrige. Une demande de rédaction ne vaut pas un accord de publication.'],
    ],
    controlTitle: 'Ce qu’il faut encore vérifier sur chaque texte.',
    controlBody: 'Une animation ne remplace pas le contrôle du livrable. Les sources, les faits et la voix se vérifient sur la version exacte ; une modification impose une nouvelle lecture des passages concernés.',
    checks: ['La provenance des informations et le droit de les utiliser.', 'L’absence de vécu, de citation ou de résultat inventé.', 'La séparation de la production et du contrôle.', 'L’accord de la personne avant toute diffusion.'],
    comparisonTitle: 'Le changement recherché, sans résultat inventé.',
    before: 'Le problème à traiter',
    beforeBody: 'Le contexte peut rester réparti entre un appel, des notes et des corrections. Le risque est de perdre ce qui rend la formulation juste.',
    after: 'Le fonctionnement présenté',
    afterBody: 'Rassembler les sources dans un brief, produire une version identifiable et remettre les corrections au centre du travail.',
    metric: 'Aucun avant/après chiffré, taux de qualité ou retour sur investissement n’est publié pour cette démonstration.',
    evidenceTitle: 'Comment nous documenterons un cas.',
    evidenceIntro: 'Un cas publié doit permettre de distinguer une intention, une mise en œuvre et un résultat observé.',
    evidence: [
      ['Le périmètre', 'Une tâche précise, un responsable et un contexte autorisé à la publication.'],
      ['Le point de départ', 'La méthode de travail et, s’il existe une mesure, sa source et sa période.'],
      ['La mise en œuvre', 'Les outils réellement utilisés, les validations, les exceptions et les conditions d’arrêt.'],
      ['L’observation', 'La même définition de la mesure avant et après, les limites et ce qui reste inconnu.'],
    ],
    lastTitle: 'Partir d’un travail que vous connaissez.',
    lastBody: 'Décrivez un dossier, les personnes qui interviennent et ce qui bloque. C’est à partir de là que l’on peut discuter d’un premier périmètre.',
    cta: 'Parler de votre premier usage',
    imageAlt: 'Illustration 3D VELOK d’une équipe en atelier, distincte d’un client ou d’un résultat réel.',
    imageCaption: 'Illustration de marque. Elle ne représente pas un client.',
  },
  en: {
    badge: 'VELOK system demonstration',
    title: 'How our agents write in your voice.',
    intro: 'The starting point is to retain the words, decisions and corrections that make writing personal. Drafting is one part of the work. Context and review are two others.',
    date: 'Process film · 3 November 2026 · 42 seconds · In French',
    filmLabel: 'French-language film presenting the VELOK editorial process',
    fallback: 'Your browser cannot play this video.',
    film: 'Open the animated demonstration',
    download: 'Open the MP4 film',
    description: 'The film follows a transcribed conversation through context gathering, a brief prepared by the P0 coordinator, a proposed text and human approval. It does not show a live inbox connection or a recorded end-to-end execution.',
    scope: 'This is an internal demonstration, not a client case or evidence of time saved. The scenes illustrate a process; the interface elements are not measured results.',
    processKicker: 'The process presented',
    processTitle: 'From sources to a draft, then a decision.',
    steps: [
      ['Source material', 'A recording or transcript, collected with the necessary permission, provides wording and context.'],
      ['The brief', 'The coordinator brings together the topic, relevant sources, tone and boundaries of the assignment.'],
      ['The draft', 'The agent proposes a text. It must distinguish the person’s own words, chosen references and newly written material.'],
      ['Approval', 'The person reviews and corrects the exact version. A request to draft does not authorise publication.'],
    ],
    controlTitle: 'What still needs checking on each text.',
    controlBody: 'An animation does not replace review of the deliverable. Sources, facts and voice must be checked on the exact version. Changes require the affected passages to be reviewed again.',
    checks: ['Where the information comes from and permission to use it.', 'No invented experience, quotation or result.', 'Separation between production and review.', 'The person’s approval before distribution.'],
    comparisonTitle: 'The intended change, without invented results.',
    before: 'The problem to address',
    beforeBody: 'Context may be scattered across a conversation, notes and corrections. The risk is losing the detail that makes the wording right.',
    after: 'The process presented',
    afterBody: 'Bring sources into a brief, produce an identifiable version and use the person’s corrections to guide the work.',
    metric: 'No numerical before/after comparison, quality rate or return on investment is reported for this demonstration.',
    evidenceTitle: 'How we will document a case.',
    evidenceIntro: 'A published case should let the reader distinguish an intention, an implementation and an observed result.',
    evidence: [
      ['Scope', 'A specific task, a responsible owner and context cleared for publication.'],
      ['Starting point', 'The way the work was done and, where measured, the source and period of the baseline.'],
      ['Implementation', 'The tools actually used, approvals, exceptions and stop conditions.'],
      ['Observation', 'A consistent definition of the measure before and after, limitations and what remains unknown.'],
    ],
    lastTitle: 'Start with work you know.',
    lastBody: 'Describe a task, the people involved and where it gets stuck. That gives us a basis for discussing a first scope.',
    cta: 'Discuss your first use case',
    imageAlt: 'VELOK 3D illustration of a team in a workshop, not a depiction of a client or an actual result.',
    imageCaption: 'Brand illustration. Not a client depiction.',
  },
};

export function CaseStudiesContent({ language }: { language: 'fr' | 'en' }) {
  const c = copy[language];
  const contact = `${language === 'en' ? '/en' : ''}/commencer?source=cas-pratiques`;
  return (
    <div className="v2-home case-studies">
      <IllustrativeCases language={language} />
      <section id="film-voix" className="v2-section v2-wrap case-feature" aria-labelledby="voice-case-title">
        <p className="case-label">{c.badge}</p>
        <h2 id="voice-case-title">{c.title}</h2>
        <p className="case-lede">{c.intro}</p>
        <figure className="case-film">
          <video controls playsInline preload="metadata" aria-label={c.filmLabel} aria-describedby="film-description" lang="fr">
            <source src="/voix/velok-voix-landscape.mp4" type="video/mp4" />
            <track kind="captions" src="/cas-pratiques/voix-fr.vtt" srcLang="fr" label="Français" />
            <track kind="captions" src="/cas-pratiques/voix-en.vtt" srcLang="en" label="English" default={language === 'en'} />
            <p>{c.fallback} <a href="/voix/velok-voix-landscape.mp4">{c.download}</a></p>
          </video>
          <figcaption>{c.date}</figcaption>
        </figure>
        <p id="film-description">{c.description}</p>
        <p className="case-limit">{c.scope}</p>
        <div className="v2-actions">
          <a className="text-link" href="/voix">{c.film} ↗</a>
          <a className="text-link" href="/voix/velok-voix-landscape.mp4">{c.download} ↗</a>
        </div>
      </section>

      <section className="v2-section v2-soft" aria-labelledby="case-process-title">
        <div className="v2-wrap">
          <p className="section-kicker">{c.processKicker}</p>
          <h2 id="case-process-title">{c.processTitle}</h2>
          <ol className="case-steps">
            {c.steps.map(([title, body], i) => (
              <li key={title}><span className="v2-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="v2-section v2-wrap case-review" aria-labelledby="case-review-title">
        <div>
          <h2 id="case-review-title">{c.controlTitle}</h2>
          <p>{c.controlBody}</p>
          <ul>{c.checks.map(text => <li key={text}>{text}</li>)}</ul>
        </div>
        <figure>
          <Image src="/brand/v2/equipe-atelier.webp" alt={c.imageAlt} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 50vw" />
          <figcaption>{c.imageCaption}</figcaption>
        </figure>
      </section>

      <section className="v2-section v2-soft" aria-labelledby="case-change-title">
        <div className="v2-wrap">
          <h2 id="case-change-title">{c.comparisonTitle}</h2>
          <div className="case-comparison">
            <article><h3>{c.before}</h3><p>{c.beforeBody}</p></article>
            <article><h3>{c.after}</h3><p>{c.afterBody}</p></article>
          </div>
          <p className="case-limit">{c.metric}</p>
        </div>
      </section>

      <section className="v2-section v2-wrap" aria-labelledby="case-evidence-title">
        <h2 id="case-evidence-title">{c.evidenceTitle}</h2>
        <p>{c.evidenceIntro}</p>
        <div className="v2-editorial">{c.evidence.map(([title, body], i) => <article key={title}><span className="v2-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className="v2-section v2-soft">
        <div className="v2-wrap"><h2>{c.lastTitle}</h2><p>{c.lastBody}</p><Link className="button button-primary" href={contact}>{c.cta} →</Link></div>
      </section>
    </div>
  );
}
