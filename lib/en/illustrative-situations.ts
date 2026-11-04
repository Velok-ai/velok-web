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
    stage: 'Client document collection',
    sector: 'Accounting firm',
    profile: 'Around 60 people · France',
    asset: '03-intake-tray',
    situation:
      'Documents arrive through several channels. The team knows a document has been received, but not always whether it allows work on the file to begin or continue.',
    work: 'Use the documents and statuses accessible in Pennylane or Cegid Loop to prepare a list of items to check and a draft client request. For businesses using Sage Active, scope the accounting data exchanges. The team approves exceptions and accounting entries.',
    lesson:
      'The transition from “received” to “usable” must be defined before any automation.',
  },
  {
    id: 'avocats',
    software: ['kleos', 'clio', 'microsoft-365'],
    index: '02',
    stage: 'Preparation and review',
    sector: 'Law firm',
    profile: 'Around 35 lawyers and legal professionals · France',
    asset: '12-document-pack',
    situation:
      'On an urgent file, the latest version, comments and reference documents move between emails and shared documents. Time is spent rebuilding the context.',
    work: 'Subject to available permissions, connect the matter in Kleos or Clio Manage with authorised Microsoft 365 documents and conversations. Prepare a timeline and sourced summary for the lawyer to review. Deadlines, strategy and legal decisions remain under their control.',
    lesson:
      'Writing quality follows two simpler decisions: which version is authoritative and who should review next.',
  },
  {
    id: 'conseil',
    software: ['salesforce', 'hubspot', 'notion', 'microsoft-365'],
    index: '03',
    stage: 'Sales proposals',
    sector: 'B2B consulting firm',
    profile: 'Around 80 people · Two offices',
    asset: '06-client-core',
    situation:
      'Each proposal starts again from old decks, biographies, project references and documents held by several teams. Searching and copying take more time than tailoring the proposal.',
    work: 'Start with the opportunity in Salesforce or HubSpot, bring together approved references in Notion or SharePoint, then prepare a proposal outline tailored to the need. The consultant checks the sources and approves scope, pricing and commitments.',
    lesson:
      'A reusable library starts with reliable, current, attributed and reviewed information.',
  },
  {
    id: 'recrutement',
    software: ['bullhorn', 'teamtailor', 'microsoft-365'],
    index: '04',
    stage: 'Sales follow-up',
    sector: 'Recruitment firm',
    profile: 'Around 45 people · France',
    asset: '04-message-stack',
    situation:
      'After client and candidate calls, next actions remain in notes, calendars or the consultant’s memory. The CRM is updated later, sometimes too late.',
    work: 'Using authorised conversations, prepare notes for Bullhorn or Teamtailor, follow-up drafts and the next meeting in Microsoft 365. The consultant approves updates and messages; candidate assessment remains a human responsibility.',
    lesson:
      'Administrative coordination can be automated; the relationship and assessment remain with the consultant.',
  },
];
