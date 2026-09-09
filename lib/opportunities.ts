export const sectors = [
  'All sectors',
  'Real Estate',
  'Agriculture',
  'SME',
] as const;
export type Sector = Exclude<(typeof sectors)[number], 'All sectors'>;
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
  risk: string;
  riskDetail: string;
  allocation: { label: string; planned: number; used: number }[];
  milestones: {
    date: string;
    title: string;
    description: string;
    status: 'Recorded' | 'Open item';
  }[];
};
export const opportunities: Opportunity[] = [
  {
    id: 'cedar-residences',
    name: 'Cedar Residences',
    sector: 'Real Estate',
    location: 'Pune, Maharashtra',
    image: '/images/residential.jpg',
    tagline: 'Residential development with a clearer foundation.',
    description:
      'An illustrative 24-home residential development in Pune. The proposed project includes energy-efficient common areas and on-site water management. Follow the ownership evidence, construction budget, and delivery milestones in one place.',
    operator: 'Cedar Habitat Private Limited (fictional)',
    asset: '24 residential units',
    budget: 120000000,
    duration: '24 months',
    stage: 'Pre-construction',
    risk: 'Final construction approval pending',
    riskDetail:
      'The final construction approval is not included in the demo evidence pack. Starting construction before this is resolved could affect the schedule and costs. Owner: project operator. Next review: 18 Sep 2026.',
    allocation: [
      { label: 'Land & acquisition', planned: 48000000, used: 48000000 },
      { label: 'Construction', planned: 48000000, used: 12000000 },
      {
        label: 'Approvals & professional fees',
        planned: 12000000,
        used: 6000000,
      },
      { label: 'Contingency reserve', planned: 12000000, used: 0 },
    ],
    milestones: [
      {
        date: '2026-09-08',
        title: 'Approval review: one item remains open',
        description:
          'The project operator supplied an updated approvals register. Final construction approval is still pending; the target schedule remains provisional.',
        status: 'Open item',
      },
      {
        date: '2026-09-05',
        title: 'September use-of-funds statement recorded',
        description:
          'The illustrative statement reports ₦66.00 M used against a ₦120.00 M budget. Construction mobilisation accounts for ₦12.00 M.',
        status: 'Recorded',
      },
      {
        date: '2026-08-28',
        title: 'Ownership evidence reviewed',
        description:
          'The sample ownership register and operator declaration were checked for internal consistency. This is not an independent legal title opinion.',
        status: 'Recorded',
      },
      {
        date: '2026-08-20',
        title: 'Opportunity evidence pack created',
        description:
          'The fictional project profile, initial budget, and risk register were added to the demo.',
        status: 'Recorded',
      },
    ],
  },
  {
    id: 'greenfield-collective',
    name: 'Greenfield Collective',
    sector: 'Agriculture',
    location: 'Nashik, Maharashtra',
    image: '/images/agriculture.jpg',
    tagline: 'Productive land. Transparent stewardship.',
    description:
      'An illustrative 40-acre horticulture and irrigation project near Nashik. The plan combines drip irrigation, soil improvement, and shared post-harvest facilities. Review land-use evidence, seasonal assumptions, and how the proposed budget is allocated.',
    operator: 'Greenfield Growers Collective (fictional)',
    asset: '40 acres of agricultural land',
    budget: 20000000,
    duration: '18 months',
    stage: 'Site preparation',
    risk: 'Water availability assessment pending',
    riskDetail:
      'A complete seasonal water assessment is missing from the demo pack. Reduced water availability could lower yields or require additional infrastructure. Owner: project operator. Next review: 20 Sep 2026.',
    allocation: [
      { label: 'Land preparation', planned: 6000000, used: 5000000 },
      { label: 'Irrigation & equipment', planned: 8000000, used: 2000000 },
      { label: 'Inputs & operations', planned: 4000000, used: 1000000 },
      { label: 'Contingency reserve', planned: 2000000, used: 0 },
    ],
    milestones: [
      {
        date: '2026-09-08',
        title: 'Seasonal water review remains open',
        description:
          'The sample risk register was updated. The operator has yet to provide a complete water availability assessment.',
        status: 'Open item',
      },
      {
        date: '2026-09-05',
        title: 'September use-of-funds statement recorded',
        description:
          'The illustrative statement reports ₦8.00 M used against a ₦20.00 M budget. Land preparation accounts for ₦5.00 M.',
        status: 'Recorded',
      },
      {
        date: '2026-08-28',
        title: 'Land-use evidence reviewed',
        description:
          'The sample land-use declaration and operator profile were checked for internal consistency; no independent field inspection has taken place.',
        status: 'Recorded',
      },
      {
        date: '2026-08-20',
        title: 'Opportunity evidence pack created',
        description:
          'The fictional farming plan, initial budget, and seasonal risk register were added to the demo.',
        status: 'Recorded',
      },
    ],
  },
  {
    id: 'precision-works',
    name: 'Precision Works',
    sector: 'SME',
    location: 'Coimbatore, Tamil Nadu',
    image: '/images/manufacturing.jpg',
    tagline: 'A closer look at the assets behind enterprise.',
    description:
      'An illustrative precision-engineering workshop expansion in Coimbatore. The project proposes equipment upgrades and additional production capacity for industrial components. Inspect machinery evidence, planned spending, and operating risks.',
    operator: 'Precision Works Manufacturing (fictional)',
    asset: 'Machinery & workshop equipment',
    budget: 40000000,
    duration: '12 months',
    stage: 'Equipment planning',
    risk: 'Independent equipment valuation pending',
    riskDetail:
      'The machinery values in the demo rely on supplier quotations. An independent valuation is outstanding, so the assets may be worth less than the stated amounts. Owner: project operator. Next review: 22 Sep 2026.',
    allocation: [
      { label: 'Machinery & tooling', planned: 24000000, used: 8000000 },
      { label: 'Facility upgrades', planned: 8000000, used: 4000000 },
      { label: 'Working capital', planned: 4000000, used: 2000000 },
      { label: 'Contingency reserve', planned: 4000000, used: 0 },
    ],
    milestones: [
      {
        date: '2026-09-08',
        title: 'Equipment valuation remains open',
        description:
          'Supplier quotations are present, but an independent valuation has not been provided. This remains visible in the trust checklist.',
        status: 'Open item',
      },
      {
        date: '2026-09-05',
        title: 'September use-of-funds statement recorded',
        description:
          'The illustrative statement reports ₦14.00 M used against a ₦40.00 M budget. Machinery deposits account for ₦8.00 M.',
        status: 'Recorded',
      },
      {
        date: '2026-08-28',
        title: 'Operator evidence reviewed',
        description:
          'The sample operator declaration and asset register were checked for internal consistency. Supplier quotations have not been independently authenticated.',
        status: 'Recorded',
      },
      {
        date: '2026-08-20',
        title: 'Opportunity evidence pack created',
        description:
          'The fictional expansion plan, equipment budget, and risk register were added to the demo.',
        status: 'Recorded',
      },
    ],
  },
];
export const views = [
  { id: 'overview', label: 'Overview' },
  { id: 'trust', label: 'Trust checklist' },
  { id: 'funds', label: 'Use of funds' },
  { id: 'updates', label: 'Project updates' },
  { id: 'integrity', label: 'Record integrity' },
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
      title: 'Asset & ownership summary',
      kind: 'Asset evidence',
      date: '28 Aug 2026',
      body: [
        `ILLUSTRATIVE DOCUMENT — ${o.name}. This is a fictional summary, not a legal certificate or an authenticated ownership record.`,
        `Declared asset: ${o.asset}. Declared operator: ${o.operator}. Location: ${o.location}.`,
        `Demo review: the asset identifier and operator declaration are internally consistent with the fictional project profile. No registry lookup, physical inspection, lien search, or legal title verification has been performed.`,
        `Outstanding evidence: ${o.risk}.`,
      ],
    },
    {
      id: 'operator',
      title: 'Operator disclosure',
      kind: 'Operator evidence',
      date: '28 Aug 2026',
      body: [
        `ILLUSTRATIVE DOCUMENT — ${o.name}. Operator: ${o.operator}.`,
        `The operator is responsible for the project plan, supplier appointments, supporting documentation, and monthly progress statements. All entities and statements in this demo are fictional.`,
        `The demo review checks that the same operator is named throughout the sample pack. It does not establish actual incorporation, beneficial ownership, creditworthiness, or competence.`,
        `No real due-diligence provider has reviewed this entity.`,
      ],
    },
    {
      id: 'budget',
      title: 'Budget & use-of-funds statement',
      kind: 'Financial disclosure',
      date: '5 Sep 2026',
      body: [
        `ILLUSTRATIVE DOCUMENT — ${o.name}. Proposed budget: ${money(o.budget)}. Reporting cutoff: 5 Sep 2026.`,
        ...o.allocation.map(
          (row) =>
            `${row.label}: planned ${money(row.planned)}; reported used ${money(row.used)}.`,
        ),
        `Total reported used: ${money(fundTotals(o).used)}. Unused planned allocation: ${money(fundTotals(o).remaining)}. These are simulated accounting figures; no money has been collected, held, or transferred.`,
        `This statement is operator-reported demo data, not a bank reconciliation or an independent audit.`,
      ],
    },
    {
      id: 'risk',
      title: 'Risk & approvals register',
      kind: 'Risk disclosure',
      date: '8 Sep 2026',
      body: [
        `ILLUSTRATIVE DOCUMENT — ${o.name}. Open evidence item: ${o.risk}.`,
        o.riskDetail,
        'Execution risk: delays, supplier failure, and cost changes can affect project delivery. The stated timetable is an assumption, not a commitment.',
        'Asset-value and liquidity risk: assets may lose value or take longer to sell than expected. There is no promised return, repayment, or exit.',
        'Reviewing documents does not remove these risks. This register is a fictional example, not a complete assessment or investment advice.',
      ],
    },
  ];
}
export const RECORD_TIMESTAMP = '2026-09-08T10:30:00.000Z';
export function recordPayload(o: Opportunity) {
  return JSON.stringify({
    demo: true,
    opportunity: o.id,
    version: 3,
    timestamp: RECORD_TIMESTAMP,
    budgetNGN: o.budget,
    usedNGN: fundTotals(o).used,
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
