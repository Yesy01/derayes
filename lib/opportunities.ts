export const sectors = [
  'All sectors',
  'Real Estate',
  'Agriculture',
  'SME',
] as const;

export type Sector = Exclude<(typeof sectors)[number], 'All sectors'>;
export type ChecklistStatus =
  | 'Completed'
  | 'In Progress'
  | 'Pending'
  | 'Needs Legal Review';

export type Opportunity = {
  id: string;
  name: string;
  sector: Sector;
  location: string;
  image: string;
  tagline: string;
  description: string;
  operator: string;
  asset: string;
  budget: number;
  duration: string;
  stage: string;
  verificationStatus: string;
  readiness: number;
  riskLevel: string;
  risk: string;
  riskDetail: string;
  proposedUse: string;
  contributorModel: string;
  allocation: { label: string; planned: number; used: number }[];
  readinessBreakdown: { label: string; value: number }[];
  checklist: {
    section: string;
    items: { title: string; status: ChecklistStatus; note: string }[];
  }[];
  token: {
    symbol: string;
    rights: string;
    futureStructure: string;
    network: string;
    smartContract: string;
    supply: string;
  };
  milestones: {
    date: string;
    title: string;
    description: string;
    status: 'Recorded' | 'Open item';
  }[];
};

const commonChecklist: Opportunity['checklist'] = [
  {
    section: 'Asset verification',
    items: [
      {
        title: 'Asset existence confirmed',
        status: 'Completed',
        note: 'Sample evidence is present in the fictional project pack.',
      },
      {
        title: 'Project owner identity checked',
        status: 'Completed',
        note: 'The declared operator is consistent across the sample records.',
      },
      {
        title: 'Asset location confirmed',
        status: 'Completed',
        note: 'The stated location is mapped in the demo record.',
      },
      {
        title: 'Supporting photos or evidence uploaded',
        status: 'In Progress',
        note: 'Illustrative evidence is present; independent field evidence is still required.',
      },
    ],
  },
  {
    section: 'Documentation',
    items: [
      {
        title: 'Ownership/supporting records uploaded',
        status: 'Completed',
        note: 'A sample ownership summary is available for review.',
      },
      {
        title: 'Project plan uploaded',
        status: 'Completed',
        note: 'The project scope and timeline are included in the demo pack.',
      },
      {
        title: 'Budget/use-of-funds uploaded',
        status: 'Completed',
        note: 'The proposed allocation reconciles to the funding requirement.',
      },
      {
        title: 'Risk summary drafted',
        status: 'In Progress',
        note: 'The main execution risks are shown; specialist review remains outstanding.',
      },
    ],
  },
  {
    section: 'Legal and regulatory',
    items: [
      {
        title: 'Rights represented by token defined',
        status: 'Needs Legal Review',
        note: 'No participation or ownership rights have been legally defined.',
      },
      {
        title: 'Regulatory classification reviewed',
        status: 'Needs Legal Review',
        note: 'Qualified Nigerian counsel and regulated partners must assess the structure.',
      },
      {
        title: 'Contributor protection structure drafted',
        status: 'Pending',
        note: 'Protections, custody, governance, and reporting obligations remain to be designed.',
      },
      {
        title: 'Dispute/refund process drafted',
        status: 'Pending',
        note: 'The process depends on the eventual legal participation model.',
      },
      {
        title: 'Legal counsel review pending',
        status: 'Needs Legal Review',
        note: 'This proof of concept has not received a legal opinion or regulatory approval.',
      },
    ],
  },
  {
    section: 'Technical',
    items: [
      {
        title: 'Smart contract structure drafted',
        status: 'In Progress',
        note: 'Only a mock structure is shown in this demonstration.',
      },
      {
        title: 'Off-chain/on-chain record mapping drafted',
        status: 'In Progress',
        note: 'A proposed data boundary is documented; no production integration exists.',
      },
      {
        title: 'Document hash generated',
        status: 'Completed',
        note: 'A real SHA-256 hash is calculated from the bundled demo snapshot.',
      },
      {
        title: 'Update timestamp generated',
        status: 'Completed',
        note: 'The timestamp is illustrative and not independently attested.',
      },
    ],
  },
];

export const opportunities: Opportunity[] = [
  {
    id: 'lagos-coliving',
    name: 'Lagos Co-Living Renovation Project',
    sector: 'Real Estate',
    location: 'Yaba, Lagos',
    image: '/images/residential.jpg',
    tagline:
      'A renovation opportunity moving through asset and legal readiness checks.',
    description:
      'An illustrative renovation of a residential property into managed co-living accommodation. Derayes organises the evidence needed to understand the asset, proposed works, budget, rights questions, and progress toward a structure that could be considered for compliant tokenisation in the future.',
    operator: 'Harbour Living Projects Ltd (fictional)',
    asset: '18-unit residential property',
    budget: 85000000,
    duration: '15 months',
    stage: 'Pre-renovation review',
    verificationStatus: 'Verification in Progress',
    readiness: 42,
    riskLevel: 'Medium',
    risk: 'Participation rights and regulatory classification are unresolved',
    riskDetail:
      'The proposed commercial structure has not been classified by qualified counsel or a regulator. No token can represent ownership, income, repayment, or participation rights until the legal counterparty, rights, protections, and regulatory route are defined.',
    proposedUse:
      'Renovation works, building services, furnishing, professional fees, and contingency.',
    contributorModel:
      'Future fractional or revenue-linked participation, subject to legal and regulatory approval.',
    allocation: [
      {
        label: 'Renovation & building works',
        planned: 42500000,
        used: 8500000,
      },
      { label: 'Furniture & equipment', planned: 17000000, used: 0 },
      {
        label: 'Professional & approval fees',
        planned: 12750000,
        used: 4250000,
      },
      { label: 'Contingency reserve', planned: 12750000, used: 0 },
    ],
    readinessBreakdown: [
      { label: 'Asset verification', value: 65 },
      { label: 'Documentation', value: 55 },
      { label: 'Legal enforceability', value: 20 },
      { label: 'Regulatory classification', value: 15 },
      { label: 'Contributor protection', value: 30 },
      { label: 'Technical smart contract design', value: 45 },
      { label: 'Record integrity', value: 70 },
    ],
    checklist: commonChecklist,
    token: {
      symbol: 'DRY-LAGOS-001',
      rights: 'Pending legal review',
      futureStructure:
        'Fractional participation record or revenue-linked participation, subject to legal and regulatory approval',
      network: 'Test/demo only',
      smartContract: 'Mock structure only',
      supply: '10,000 demo units',
    },
    milestones: [
      {
        date: '2026-09-08',
        title: 'Readiness score updated',
        description:
          'The illustrative readiness score was updated to 42% after the latest document and risk review.',
        status: 'Recorded',
      },
      {
        date: '2026-09-05',
        title: 'Legal classification flagged',
        description:
          'Token rights, contributor protections, and the regulatory route were marked for qualified legal review.',
        status: 'Open item',
      },
      {
        date: '2026-08-28',
        title: 'Budget document hashed',
        description:
          'The proposed ₦85.00 M use-of-funds statement was added to the integrity record.',
        status: 'Recorded',
      },
      {
        date: '2026-08-20',
        title: 'Project summary v1 uploaded',
        description:
          'The fictional asset profile, initial evidence, and project plan were added to the demo.',
        status: 'Recorded',
      },
    ],
  },
  {
    id: 'maize-storage',
    name: 'Maize Storage Facility Upgrade',
    sector: 'Agriculture',
    location: 'Kaduna, Nigeria',
    image: '/images/agriculture.jpg',
    tagline:
      'Storage infrastructure with documentation and operating evidence still to complete.',
    description:
      'An illustrative upgrade to a maize aggregation and storage facility, covering drying, storage, handling, and monitoring equipment. The trust room shows how the asset and project records could be prepared before any future participation structure is considered.',
    operator: 'Northfield Storage Cooperative (fictional)',
    asset: 'Grain storage and handling facility',
    budget: 25000000,
    duration: '10 months',
    stage: 'Document collection',
    verificationStatus: 'Documents Pending',
    readiness: 31,
    riskLevel: 'Medium',
    risk: 'Facility rights and equipment records are incomplete',
    riskDetail:
      'The demo pack does not contain independently confirmed facility-use rights, complete equipment quotations, or a finished operating risk assessment.',
    proposedUse:
      'Drying equipment, warehouse repairs, moisture monitoring, handling equipment, and contingency.',
    contributorModel:
      'Future cooperative or revenue-linked participation, subject to legal and regulatory review.',
    allocation: [
      {
        label: 'Drying & handling equipment',
        planned: 10000000,
        used: 2000000,
      },
      { label: 'Warehouse repairs', planned: 7500000, used: 1500000 },
      { label: 'Monitoring & quality systems', planned: 5000000, used: 0 },
      { label: 'Contingency reserve', planned: 2500000, used: 0 },
    ],
    readinessBreakdown: [
      { label: 'Asset verification', value: 42 },
      { label: 'Documentation', value: 35 },
      { label: 'Legal enforceability', value: 18 },
      { label: 'Regulatory classification', value: 12 },
      { label: 'Contributor protection', value: 20 },
      { label: 'Technical smart contract design', value: 32 },
      { label: 'Record integrity', value: 58 },
    ],
    checklist: commonChecklist,
    token: {
      symbol: 'DRY-MAIZE-001',
      rights: 'Pending legal review',
      futureStructure:
        'Cooperative or revenue-linked participation, subject to legal and regulatory approval',
      network: 'Test/demo only',
      smartContract: 'Mock structure only',
      supply: '10,000 demo units',
    },
    milestones: [
      {
        date: '2026-09-08',
        title: 'Readiness score updated',
        description:
          'The illustrative readiness score was updated to 31% after document review.',
        status: 'Recorded',
      },
      {
        date: '2026-09-05',
        title: 'Facility evidence remains open',
        description:
          'Supporting records for facility-use rights and equipment were requested in the fictional workflow.',
        status: 'Open item',
      },
      {
        date: '2026-08-28',
        title: 'Budget document hashed',
        description:
          'The proposed ₦25.00 M use-of-funds statement was added to the integrity record.',
        status: 'Recorded',
      },
      {
        date: '2026-08-20',
        title: 'Project summary v1 uploaded',
        description:
          'The fictional facility profile and upgrade plan were added to the demo.',
        status: 'Recorded',
      },
    ],
  },
  {
    id: 'food-processing',
    name: 'Food Processing Equipment Upgrade',
    sector: 'SME',
    location: 'Ogun State, Nigeria',
    image: '/images/manufacturing.jpg',
    tagline:
      'Productive equipment with a low-medium project risk and an unresolved legal structure.',
    description:
      'An illustrative equipment upgrade for a small food-processing business. The trust room connects the proposed assets, supplier evidence, budget, operating risks, and tokenisation questions without offering a live investment or ownership interest.',
    operator: 'Abeokuta Foods Enterprise Ltd (fictional)',
    asset: 'Food processing and packaging equipment',
    budget: 15000000,
    duration: '8 months',
    stage: 'Structure review',
    verificationStatus: 'Tokenisation Review Needed',
    readiness: 38,
    riskLevel: 'Low-Medium',
    risk: 'Equipment valuation and contributor rights need review',
    riskDetail:
      'Supplier quotations are present in the sample pack, but an independent valuation, enforceable participation rights, and contributor protections have not been established.',
    proposedUse:
      'Processing equipment, packaging line upgrades, installation, training, and contingency.',
    contributorModel:
      'Future equipment-backed or revenue-linked participation, subject to legal and regulatory review.',
    allocation: [
      { label: 'Processing equipment', planned: 7500000, used: 1500000 },
      { label: 'Packaging line', planned: 3750000, used: 750000 },
      { label: 'Installation & training', planned: 2250000, used: 0 },
      { label: 'Contingency reserve', planned: 1500000, used: 0 },
    ],
    readinessBreakdown: [
      { label: 'Asset verification', value: 58 },
      { label: 'Documentation', value: 48 },
      { label: 'Legal enforceability', value: 22 },
      { label: 'Regulatory classification', value: 15 },
      { label: 'Contributor protection', value: 25 },
      { label: 'Technical smart contract design', value: 38 },
      { label: 'Record integrity', value: 62 },
    ],
    checklist: commonChecklist,
    token: {
      symbol: 'DRY-SME-001',
      rights: 'Pending legal review',
      futureStructure:
        'Equipment-backed or revenue-linked participation, subject to legal and regulatory approval',
      network: 'Test/demo only',
      smartContract: 'Mock structure only',
      supply: '10,000 demo units',
    },
    milestones: [
      {
        date: '2026-09-08',
        title: 'Readiness score updated',
        description:
          'The illustrative readiness score was updated to 38% after the latest review.',
        status: 'Recorded',
      },
      {
        date: '2026-09-05',
        title: 'Tokenisation review opened',
        description:
          'The unresolved valuation and participation-right questions were added to the risk summary.',
        status: 'Open item',
      },
      {
        date: '2026-08-28',
        title: 'Budget document hashed',
        description:
          'The proposed ₦15.00 M use-of-funds statement was added to the integrity record.',
        status: 'Recorded',
      },
      {
        date: '2026-08-20',
        title: 'Project summary v1 uploaded',
        description:
          'The fictional enterprise and equipment plan were added to the demo.',
        status: 'Recorded',
      },
    ],
  },
];

export const views = [
  { id: 'overview', label: 'Trust room' },
  { id: 'trust', label: 'Verification' },
  { id: 'readiness', label: 'Readiness score' },
  { id: 'funds', label: 'Use of funds' },
  { id: 'updates', label: 'Updates' },
  { id: 'token', label: 'Mock token' },
  { id: 'integrity', label: 'Integrity' },
] as const;
export type View = (typeof views)[number]['id'];
export const getOpportunity = (id: string) =>
  opportunities.find((o) => o.id === id);
export const filterOpportunities = (sector: string) =>
  opportunities.filter((o) => sector === 'All sectors' || o.sector === sector);

export function money(value: number) {
  if (value >= 1_000_000_000) return `₦${(value / 1_000_000_000).toFixed(2)} B`;
  if (value >= 1_000_000) return `₦${(value / 1_000_000).toFixed(2)} M`;
  return `₦${value.toLocaleString('en-NG', { maximumFractionDigits: 2 })}`;
}

export function fundTotals(o: Opportunity) {
  const used = o.allocation.reduce((sum, row) => sum + row.used, 0);
  return {
    used,
    remaining: o.budget - used,
    percent: Math.round((used / o.budget) * 100),
  };
}

export function displayDate(value: string) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export type DemoDocument = {
  id: string;
  title: string;
  kind: string;
  date: string;
  body: string[];
};

export function documentsFor(o: Opportunity): DemoDocument[] {
  return [
    {
      id: 'asset',
      title: 'Asset & operator summary',
      kind: 'Asset evidence',
      date: '28 Aug 2026',
      body: [
        `ILLUSTRATIVE DOCUMENT — ${o.name}. This is a fictional summary, not a legal certificate or authenticated ownership record.`,
        `Declared asset: ${o.asset}. Declared operator: ${o.operator}. Location: ${o.location}.`,
        'The demo checks internal consistency only. No registry lookup, physical inspection, lien search, valuation, or legal title verification has been performed.',
        `Open issue: ${o.risk}.`,
      ],
    },
    {
      id: 'plan',
      title: 'Project plan & proposed participation',
      kind: 'Project record',
      date: '20 Aug 2026',
      body: [
        `ILLUSTRATIVE DOCUMENT — ${o.name}. Proposed timeline: ${o.duration}. Current stage: ${o.stage}.`,
        `Proposed use: ${o.proposedUse}`,
        `Possible future model: ${o.contributorModel}`,
        'No participation is available through this demo. The model requires qualified legal and regulatory review before it could be offered.',
      ],
    },
    {
      id: 'budget',
      title: 'Budget & use-of-funds statement',
      kind: 'Financial disclosure',
      date: '5 Sep 2026',
      body: [
        `ILLUSTRATIVE DOCUMENT — ${o.name}. Proposed funding requirement: ${money(o.budget)}.`,
        ...o.allocation.map(
          (row) =>
            `${row.label}: planned ${money(row.planned)}; simulated reported use ${money(row.used)}.`,
        ),
        `Total simulated reported use: ${money(fundTotals(o).used)}. These are demo accounting figures; no money has been collected, held, or transferred.`,
      ],
    },
    {
      id: 'risk',
      title: 'Risk, legal & regulatory register',
      kind: 'Risk disclosure',
      date: '8 Sep 2026',
      body: [
        `ILLUSTRATIVE DOCUMENT — ${o.name}. Open issue: ${o.risk}.`,
        o.riskDetail,
        'Execution, counterparty, asset-value, liquidity, legal, and regulatory risks may affect any future structure. There is no promised return, repayment, ownership claim, or exit.',
        'This fictional register is not investment advice, a legal opinion, or regulatory approval.',
      ],
    },
  ];
}

export const RECORD_TIMESTAMP = '2026-09-08T10:30:00.000Z';
export function recordPayload(o: Opportunity) {
  return JSON.stringify({
    demo: true,
    opportunity: o.id,
    version: 5,
    timestamp: RECORD_TIMESTAMP,
    fundingNeedNGN: o.budget,
    simulatedUsedNGN: fundTotals(o).used,
    readiness: o.readiness,
    verificationStatus: o.verificationStatus,
    openItem: o.risk,
  });
}

export async function sha256(value: string) {
  const result = await globalThis.crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(result), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('');
}
