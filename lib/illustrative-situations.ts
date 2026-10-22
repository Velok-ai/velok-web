import type { SoftwareId } from '@/lib/software-ecosystems';

export type IllustrativeSituation = {
  id: string;
  software: readonly SoftwareId[];
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
    id: 'expertise-comptable',
    software: ['pennylane', 'cegid-loop', 'sage-active'],
    index: '01',
    stage: 'Collecte client',
    sector: 'Cabinet d’expertise comptable',
    profile: 'Environ 60 personnes · France',
    asset: '03-intake-tray',
    situation:
      'Les pièces arrivent par plusieurs canaux. L’équipe sait qu’un document a été reçu, mais pas toujours s’il permet réellement de démarrer ou de poursuivre le dossier.',
    work: 'À partir des documents et statuts accessibles dans Pennylane ou Cegid Loop, préparer une liste de pièces à vérifier et un brouillon de demande au client. Avec Sage Active, cadrer les échanges de données comptables des entreprises équipées. L’équipe valide les exceptions et les écritures.',
    lesson:
      'Le passage entre « reçu » et « exploitable » doit être défini avant toute automatisation.',
  },
  {
    id: 'avocats',
    software: ['kleos', 'clio', 'microsoft-365'],
    index: '02',
    stage: 'Préparation et revue',
    sector: 'Cabinet d’avocats',
    profile: 'Environ 35 avocats et juristes · France',
    asset: '12-document-pack',
    situation:
      'Sur un dossier urgent, la dernière version, les commentaires et les pièces de référence circulent entre emails et documents partagés. Le temps part dans la reconstitution du contexte.',
    work: 'Relier, selon les accès disponibles, le dossier dans Kleos ou Clio Manage aux documents et échanges Microsoft 365 autorisés. Préparer une chronologie et une synthèse sourcée pour la revue de l’avocat. Les échéances, la stratégie et la décision juridique restent sous son contrôle.',
    lesson:
      'La qualité de rédaction vient après deux décisions plus simples : quelle version fait foi et qui doit relire ensuite.',
  },
  {
    id: 'conseil',
    software: ['salesforce', 'hubspot', 'notion', 'microsoft-365'],
    index: '03',
    stage: 'Propositions commerciales',
    sector: 'Société de conseil B2B',
    profile: 'Environ 80 personnes · Deux bureaux',
    asset: '06-client-core',
    situation:
      'Chaque proposition repart d’anciens decks, de biographies, de références projets et de documents conservés par plusieurs équipes. La recherche et le copier-coller prennent plus de temps que la personnalisation.',
    work: 'Partir de l’opportunité dans Salesforce ou HubSpot, rapprocher les références approuvées dans Notion ou SharePoint, puis préparer une trame de proposition adaptée au besoin. Le consultant vérifie les sources et valide le périmètre, le prix et les engagements.',
    lesson:
      'Une base réutilisable commence par des informations fiables, actuelles, attribuées et revues.',
  },
  {
    id: 'recrutement',
    software: ['bullhorn', 'teamtailor', 'microsoft-365'],
    index: '04',
    stage: 'Suivi commercial',
    sector: 'Cabinet de recrutement',
    profile: 'Environ 45 personnes · France',
    asset: '04-message-stack',
    situation:
      'Après les appels clients et candidats, les prochaines actions restent dans les notes, l’agenda ou la mémoire du consultant. Le CRM est mis à jour plus tard, parfois trop tard.',
    work: 'À partir des échanges autorisés, préparer les notes à reporter dans Bullhorn ou Teamtailor, les brouillons de suivi et le prochain rendez-vous dans Microsoft 365. Le consultant valide les mises à jour et les messages ; l’évaluation des candidats reste humaine.',
    lesson:
      'La coordination administrative peut être automatisée ; la relation et l’évaluation restent au consultant.',
  },
];
