export type IllustrativeSituation = {
  index: string;
  stage: string;
  sector: string;
  profile: string;
  asset: string;
  situation: string;
  work: string;
  lesson: string;
};

export const illustrativeSituations: IllustrativeSituation[] = [
  {
    index: '01',
    stage: 'Collecte client',
    sector: 'Cabinet d’expertise comptable',
    profile: 'Environ 60 personnes · France',
    asset: '03-intake-tray',
    situation:
      'Les pièces arrivent par plusieurs canaux. L’équipe sait qu’un document a été reçu, mais pas toujours s’il permet réellement de démarrer ou de poursuivre le dossier.',
    work: 'Prendre un type de dossier récurrent, définir ce qui signifie “prêt à traiter”, rendre visibles les pièces manquantes ou inutilisables et envoyer les exceptions vers la bonne personne.',
    lesson:
      'Le passage entre « reçu » et « exploitable » doit être défini avant toute automatisation.',
  },
  {
    index: '02',
    stage: 'Préparation et revue',
    sector: 'Cabinet d’avocats',
    profile: 'Environ 35 avocats et juristes · France',
    asset: '12-document-pack',
    situation:
      'Sur un dossier urgent, la dernière version, les commentaires et les pièces de référence circulent entre emails et documents partagés. Le temps part dans la reconstitution du contexte.',
    work: 'Choisir un type de dossier, identifier la version de référence, les sources à citer, l’échéance et le relecteur. Le système peut préparer un brief ou une première synthèse, jamais prendre la décision juridique.',
    lesson:
      'La qualité de rédaction vient après deux décisions plus simples : quelle version fait foi et qui doit relire ensuite.',
  },
  {
    index: '03',
    stage: 'Propositions commerciales',
    sector: 'Société de conseil B2B',
    profile: 'Environ 80 personnes · Deux bureaux',
    asset: '06-client-core',
    situation:
      'Chaque proposition repart d’anciens decks, de biographies, de références projets et de documents conservés par plusieurs équipes. La recherche et le copier-coller prennent plus de temps que la personnalisation.',
    work: 'Créer une base de contenus approuvés avec une source, un propriétaire et une date de revue. Préparer ensuite un premier assemblage et signaler ce qui manque avant qu’un consultant ne finalise.',
    lesson:
      'Une base réutilisable commence par des informations fiables, actuelles, attribuées et revues.',
  },
  {
    index: '04',
    stage: 'Suivi commercial',
    sector: 'Cabinet de recrutement',
    profile: 'Environ 45 personnes · France',
    asset: '04-message-stack',
    situation:
      'Après les appels clients et candidats, les prochaines actions restent dans les notes, l’agenda ou la mémoire du consultant. Le CRM est mis à jour plus tard, parfois trop tard.',
    work: 'À partir des échanges autorisés, préparer la mise à jour CRM, le brouillon de suivi et la prochaine action attendue. Rien n’est envoyé automatiquement ; le consultant reste responsable du message et du jugement.',
    lesson:
      'La coordination administrative peut être automatisée ; la relation et l’évaluation restent au consultant.',
  },
];
