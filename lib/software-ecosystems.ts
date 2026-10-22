export type SoftwareId =
  | 'pennylane'
  | 'cegid-loop'
  | 'sage-active'
  | 'kleos'
  | 'clio'
  | 'microsoft-365'
  | 'salesforce'
  | 'hubspot'
  | 'notion'
  | 'bullhorn'
  | 'teamtailor'
  | 'brevo'
  | 'lucca'
  | 'personio';

// Editorial examples with publisher API sources, not a list of deployed integrations.
export const softwareCatalog: Record<SoftwareId, { name: string; apiUrl: string; logoSrc: string }> = {
  pennylane: {
    name: 'Pennylane',
    logoSrc: '/brand/software/pennylane.svg',
    apiUrl: 'https://help.pennylane.com/fr/articles/18770-utiliser-les-api-publiques-pennylane',
  },
  'cegid-loop': {
    name: 'Cegid Loop',
    logoSrc: '/brand/software/cegid-loop.svg',
    apiUrl: 'https://developers.cegid.com/docreference/BusinessUnits/Loop-Api-Management-Docs/index.html',
  },
  'sage-active': {
    name: 'Sage Active',
    logoSrc: '/brand/software/sage-active.svg',
    apiUrl: 'https://developer.sage.com/active/docs/latest/g/quickstart?tab=FR',
  },
  kleos: {
    name: 'Kleos',
    logoSrc: '/brand/software/kleos.svg',
    apiUrl: 'https://www.wolterskluwer.com/fr-fr/solutions/kleos/integrations',
  },
  clio: {
    name: 'Clio Manage',
    logoSrc: '/brand/software/clio.svg',
    apiUrl: 'https://docs.developers.clio.com/api-docs/clio-manage/',
  },
  'microsoft-365': {
    name: 'Microsoft 365',
    logoSrc: '/brand/software/microsoft-365.png',
    apiUrl: 'https://learn.microsoft.com/en-us/graph/overview',
  },
  salesforce: {
    name: 'Salesforce',
    logoSrc: '/brand/software/salesforce.svg',
    apiUrl: 'https://developer.salesforce.com/docs/platform/api-rest/guide/quickstart.html',
  },
  hubspot: {
    name: 'HubSpot',
    logoSrc: '/brand/software/hubspot.svg',
    apiUrl: 'https://developers.hubspot.com/docs/api-reference/crm-contacts-v3/guide',
  },
  notion: {
    name: 'Notion',
    logoSrc: '/brand/software/notion.png',
    apiUrl: 'https://developers.notion.com/guides/get-started/overview',
  },
  bullhorn: {
    name: 'Bullhorn',
    logoSrc: '/brand/software/bullhorn.svg',
    apiUrl: 'https://bullhorn.github.io/rest-api-docs/',
  },
  teamtailor: {
    name: 'Teamtailor',
    logoSrc: '/brand/software/teamtailor.svg',
    apiUrl: 'https://docs.teamtailor.com/',
  },
  brevo: {
    name: 'Brevo',
    logoSrc: '/brand/software/brevo.svg',
    apiUrl: 'https://developers.brevo.com/docs/getting-started',
  },
  lucca: {
    name: 'Lucca',
    logoSrc: '/brand/software/lucca.svg',
    apiUrl: 'https://developers.luccasoftware.com/home',
  },
  personio: {
    name: 'Personio',
    logoSrc: '/brand/software/personio.svg',
    apiUrl: 'https://developer.personio.de/docs/getting-started-with-the-personio-api',
  },
};

export const workflowSoftware = {
  marketing: ['hubspot', 'brevo', 'notion'],
  sales: ['salesforce', 'hubspot', 'microsoft-365'],
  hr: ['lucca', 'personio', 'microsoft-365'],
} as const satisfies Record<string, readonly SoftwareId[]>;
