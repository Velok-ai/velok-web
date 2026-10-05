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
    stage: 'Client document collection',
    sector: 'Accounting firm',
    profile: 'Around 60 people · France',
    asset: '03-intake-tray',
    situation:
      'Documents arrive through several channels. The team knows a document has been received, but not always whether it allows work on the file to begin or continue.',
    work: 'Choose a recurring type of file, define what “ready to process” means, make missing or unusable documents visible and route exceptions to the right person.',
    lesson:
      'The transition from “received” to “usable” must be defined before any automation.',
  },
  {
    index: '02',
    stage: 'Preparation and review',
    sector: 'Law firm',
    profile: 'Around 35 lawyers and legal professionals · France',
    asset: '12-document-pack',
    situation:
      'On an urgent file, the latest version, comments and reference documents move between emails and shared documents. Time is spent rebuilding the context.',
    work: 'Choose a type of file, identify the authoritative version, sources to cite, deadline and reviewer. The system can prepare a brief or initial summary, never make the legal decision.',
    lesson:
      'Writing quality follows two simpler decisions: which version is authoritative and who should review next.',
  },
  {
    index: '03',
    stage: 'Sales proposals',
    sector: 'B2B consulting firm',
    profile: 'Around 80 people · Two offices',
    asset: '06-client-core',
    situation:
      'Each proposal starts again from old decks, biographies, project references and documents held by several teams. Searching and copying take more time than tailoring the proposal.',
    work: 'Create a library of approved content with a source, an owner and a review date. Prepare an initial assembly and flag what is missing before a consultant finalises it.',
    lesson:
      'A reusable library starts with reliable, current, attributed and reviewed information.',
  },
  {
    index: '04',
    stage: 'Sales follow-up',
    sector: 'Recruitment firm',
    profile: 'Around 45 people · France',
    asset: '04-message-stack',
    situation:
      'After client and candidate calls, next actions remain in notes, calendars or the consultant’s memory. The CRM is updated later, sometimes too late.',
    work: 'Using authorised conversations, prepare the CRM update, follow-up draft and expected next action. Nothing is sent automatically; the consultant remains responsible for the message and judgement.',
    lesson:
      'Administrative coordination can be automated; the relationship and assessment remain with the consultant.',
  },
];
