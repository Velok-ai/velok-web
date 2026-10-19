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
export const softwareCatalog: Record<SoftwareId, { name: string; apiUrl: string }> = {
  pennylane: {
    name: 'Pennylane',
    apiUrl: 'https://help.pennylane.com/fr/articles/18770-utiliser-les-api-publiques-pennylane',
  },
  'cegid-loop': {
    name: 'Cegid Loop',
    apiUrl: 'https://developers.cegid.com/docreference/BusinessUnits/Loop-Api-Management-Docs/index.html',
  },
  'sage-active': {
    name: 'Sage Active',
    apiUrl: 'https://developer.sage.com/active/docs/latest/g/quickstart?tab=FR',
  },
  kleos: {
    name: 'Kleos',
    apiUrl: 'https://www.wolterskluwer.com/fr-fr/solutions/kleos/integrations',
  },
  clio: {
    name: 'Clio Manage',
    apiUrl: 'https://docs.developers.clio.com/api-docs/clio-manage/',
  },
  'microsoft-365': {
    name: 'Microsoft 365',
    apiUrl: 'https://learn.microsoft.com/en-us/graph/overview',
  },
  salesforce: {
    name: 'Salesforce',
    apiUrl: 'https://developer.salesforce.com/docs/platform/api-rest/guide/quickstart.html',
  },
  hubspot: {
    name: 'HubSpot',
    apiUrl: 'https://developers.hubspot.com/docs/api-reference/crm-contacts-v3/guide',
  },
  notion: {
    name: 'Notion',
    apiUrl: 'https://developers.notion.com/guides/get-started/overview',
  },
  bullhorn: {
    name: 'Bullhorn',
    apiUrl: 'https://bullhorn.github.io/rest-api-docs/',
  },
  teamtailor: {
    name: 'Teamtailor',
    apiUrl: 'https://docs.teamtailor.com/',
  },
  brevo: {
    name: 'Brevo',
    apiUrl: 'https://developers.brevo.com/docs/getting-started',
  },
  lucca: {
    name: 'Lucca',
    apiUrl: 'https://developers.luccasoftware.com/home',
  },
  personio: {
    name: 'Personio',
    apiUrl: 'https://developer.personio.de/docs/getting-started-with-the-personio-api',
  },
};

export const workflowSoftware = {
  marketing: ['hubspot', 'brevo', 'notion'],
  sales: ['salesforce', 'hubspot', 'microsoft-365'],
  hr: ['lucca', 'personio', 'microsoft-365'],
} as const satisfies Record<string, readonly SoftwareId[]>;
