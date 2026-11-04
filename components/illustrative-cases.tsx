const scenarios = {
  "fr": [
    [
      "family-office",
      "Family office",
      "Préparer le reporting sans perdre la trace des pièces.",
      "Les relevés, documents patrimoniaux et échanges arrivent de plusieurs interlocuteurs. Préparer un reporting oblige à retrouver les bonnes versions et à vérifier ce qui manque.",
      "L’agent pourrait classer les pièces autorisées, extraire les éléments utiles et préparer une synthèse reliée à ses sources. Les dossiers d’investissement pourraient être résumés selon une grille définie par l’équipe.",
      "Le responsable vérifie les montants, les versions et les pièces manquantes. Les arbitrages d’investissement et tout envoi au client restent humains. Une information contradictoire doit être signalée, pas complétée par supposition.",
      "Un dossier de reporting à relire, une liste des pièces manquantes et des synthèses de dossiers sourcées."
    ],
    [
      "cabinet-avocats",
      "Cabinet d’avocats",
      "Préparer un dossier, laisser le jugement à l’avocat.",
      "À l’ouverture d’un dossier, les parties, les pièces et les informations de mission sont réparties entre les échanges et les outils du cabinet. Les vérifications mobilisent plusieurs personnes.",
      "L’agent pourrait rapprocher les noms des parties d’un référentiel autorisé et préparer une note d’alerte avec les antécédents trouvés. Il pourrait aussi préparer une lettre de mission depuis un modèle et un état des pièces à réunir.",
      "L’avocat décide s’il existe un conflit d’intérêts et valide les documents. Le secret professionnel, le périmètre d’accès et les règles du cabinet sont des préalables. Une correspondance de noms n’est pas une conclusion juridique.",
      "Une fiche d’ouverture, des alertes à examiner et des projets de documents à valider."
    ],
    [
      "agence",
      "Agence",
      "Garder le suivi client à jour quand le dossier change.",
      "Le client modifie sa demande alors que la production a commencé. Les échanges, le budget, les échéances et les engagements ne sont pas tous au même endroit.",
      "L’agent pourrait rapprocher les échanges autorisés du planning et du suivi commercial, préparer un état des engagements et signaler les renouvellements à examiner. Il pourrait assembler les éléments d’un reporting et proposer les mises à jour nécessaires.",
      "Le responsable de compte arbitre les priorités, les coûts et les délais. Si la demande change, les actions concernées doivent pouvoir être suspendues et reprises après validation. L’agent ne promet ni remise ni nouveau délai au client.",
      "Un point de situation client, des écarts à arbitrer et un reporting prêt à relire."
    ],
    [
      "production-alimentaire",
      "Producteur alimentaire",
      "Transformer une commande reçue en dossier prêt à vérifier.",
      "Les commandes arrivent par email, pièces jointes ou fichiers différents. Il faut reprendre les références, les quantités et les conditions avant de les saisir dans l’outil de gestion.",
      "L’agent pourrait extraire les lignes de commande, les rapprocher du catalogue autorisé et préparer une saisie ainsi qu’un accusé de réception. Les demandes de fiches produits et de certificats pourraient être préparées à partir des documents validés.",
      "L’équipe valide la commande avant son engagement. Un prix incohérent, une référence inconnue ou un stock insuffisant déclenche une reprise humaine. La qualité valide les documents réglementaires ; l’agent n’invente pas de certificat.",
      "Une commande préparée, les anomalies visibles et les documents à faire approuver."
    ],
    [
      "salles-sport",
      "Réseau de salles de sport",
      "Consolider les remontées des clubs sans masquer les exceptions.",
      "La direction reçoit des remontées de chaque club, des factures et des demandes d’adhérents. Les formats diffèrent et certaines informations arrivent après la préparation du point de gestion.",
      "L’agent pourrait rassembler les exports autorisés, préparer une synthèse par club et relever les informations absentes ou incohérentes. Il pourrait aussi classer les factures et préparer les réponses aux demandes courantes des adhérents.",
      "Les responsables confirment les chiffres et traitent les incidents. Les résiliations, litiges de paiement et décisions commerciales restent soumis à une personne. Une information manquante reste marquée comme telle.",
      "Un rapport consolidé à valider, une liste des exceptions et des réponses proposées aux équipes."
    ]
  ],
  "en": [
    [
      "family-office",
      "Family office",
      "Prepare reporting with a clear trail back to the documents.",
      "Statements, portfolio documents and correspondence arrive from several people. Reporting requires the right versions and a clear view of what is missing.",
      "An agent could organise authorised documents, extract relevant information and prepare a summary linked to its sources. Investment opportunities could be summarised against criteria defined by the team.",
      "The responsible person checks figures, versions and missing documents. Investment decisions and client communications remain human decisions. Conflicting information must be flagged rather than guessed.",
      "A reporting pack for review, a missing-document list and sourced investment summaries."
    ],
    [
      "cabinet-avocats",
      "Law firm",
      "Prepare the file. Leave legal judgement to the lawyer.",
      "When opening a matter, party names, documents and engagement information are scattered across correspondence and firm systems. Checks require input from several people.",
      "An agent could match party names against an authorised reference list and prepare an alert with the records found. It could also draft an engagement letter from a template and list the documents still needed.",
      "The lawyer determines whether a conflict exists and approves the documents. Professional secrecy, access boundaries and firm rules are prerequisites. A name match is not a legal conclusion.",
      "A matter-opening brief, alerts to investigate and draft documents for approval."
    ],
    [
      "agence",
      "Agency",
      "Keep client work aligned when the brief changes.",
      "A client changes the brief after production has started. Correspondence, budgets, deadlines and commitments are held in different places.",
      "An agent could reconcile authorised correspondence with the schedule and account records, prepare a view of commitments and flag renewals for review. It could assemble reporting material and propose updates.",
      "The account lead decides priorities, costs and deadlines. A changed brief must allow affected actions to pause and resume after approval. The agent does not promise a discount or a new deadline to the client.",
      "A client status brief, issues for decision and reporting material ready for review."
    ],
    [
      "production-alimentaire",
      "Food producer",
      "Turn an incoming order into a file ready to check.",
      "Orders arrive by email, attachments and different file formats. Product references, quantities and terms must be checked before entry into the management system.",
      "An agent could extract order lines, match them against an authorised catalogue and prepare an entry and acknowledgement. Product sheets and certificate responses could be drafted from approved documents.",
      "The team approves the order before it becomes a commitment. A price mismatch, unknown item or stock shortage triggers human review. Quality staff approve regulatory documents; the agent does not invent certificates.",
      "A prepared order, visible exceptions and documents awaiting approval."
    ],
    [
      "salles-sport",
      "Fitness chain",
      "Consolidate club reports without hiding exceptions.",
      "Management receives club updates, invoices and member requests. Formats differ and some information arrives after preparation of the management report.",
      "An agent could bring together authorised exports, draft a summary by club and flag missing or inconsistent information. It could also organise invoices and propose replies to routine member requests.",
      "Managers confirm the figures and handle incidents. Cancellations, payment disputes and commercial decisions remain subject to human review. Missing information stays explicitly marked as missing.",
      "A consolidated report for approval, an exception list and proposed replies for the teams."
    ]
  ]
} as const;

export function IllustrativeCases({ language }: { language: 'fr' | 'en' }) {
  const fr = language === 'fr';
  const label = fr ? 'Scénario illustratif · Entreprise fictive' : 'Illustrative scenario · Fictional company';
  return <>
    <section className="v2-section v2-wrap case-directory" aria-labelledby="scenario-heading">
      <p className="section-kicker">{fr ? 'Les cas pratiques' : 'Practical scenarios'}</p>
      <h2 id="scenario-heading">{fr ? 'Des situations de travail que vous connaissez.' : 'Work situations you will recognise.'}</h2>
      <p>{fr ? 'Ces scénarios présentent des fonctionnements envisageables, pas des déploiements clients attestés. Ils ne comportent ni résultat mesuré, ni tarif, ni témoignage client. Les outils et les accès sont à définir avant toute mise en œuvre.' : 'These scenarios describe possible workflows, not verified client deployments. They contain no measured outcomes, prices or client testimonials. Tools and access must be agreed before implementation.'}</p>
      <nav className="case-index" aria-label={fr ? 'Sommaire des cas pratiques' : 'Scenario contents'}>
        {scenarios[language].map(([id, sector, title]) => <a href={`#${id}`} key={id}><strong>{sector}</strong><span>{title}</span></a>)}
        <a href="#film-voix"><strong>{fr ? 'Le film VELOK' : 'The VELOK film'}</strong><span>{fr ? 'Comment nos agents écrivent avec votre voix.' : 'How our agents write in your voice.'}</span></a>
      </nav>
    </section>
    {scenarios[language].map(([id, sector, title, need, workflow, control, deliverable]) =>
      <section key={id} id={id} className="v2-section v2-soft case-scenario" aria-labelledby={`${id}-title`}>
        <div className="v2-wrap">
          <p className="case-label">{label}</p>
          <p className="section-kicker">{sector}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          <p className="case-lede">{need}</p>
          <figure className="case-film">
            <video
              controls
              playsInline
              preload="none"
              poster={`/cas-pratiques/films/${id}.webp`}
              aria-label={fr ? `Film du scénario ${sector}, en français` : `French-language film for the ${sector} scenario`}
            >
              <source src={`/cas-pratiques/films/${id}.mp4`} type="video/mp4" />
              <a href={`/cas-pratiques/films/${id}.mp4`}>{fr ? 'Ouvrir le film MP4' : 'Open the MP4 film'}</a>
            </video>
            <figcaption>{fr ? 'Scénario illustratif · 42 secondes · Film muet en français' : 'Illustrative scenario · 42 seconds · Silent film with French text'}</figcaption>
          </figure>
          <div className="case-scenario-grid">
            <div><h3>{fr ? 'Le fonctionnement envisagé' : 'The proposed workflow'}</h3><p>{workflow}</p></div>
            <div><h3>{fr ? 'Les décisions qui restent humaines' : 'Decisions that stay with people'}</h3><p>{control}</p></div>
          </div>
          <p className="case-output"><strong>{fr ? 'Le livrable à examiner : ' : 'What to review: '}</strong>{deliverable}</p>
          <p className="case-limit">{fr ? 'Scénario illustratif. Aucun gain ni résultat client mesuré n’est revendiqué.' : 'Illustrative scenario. No measured savings or client outcomes are claimed.'}</p>
        </div>
      </section>
    )}
  </>;
}
