'use client';

import Link from '@/lib/navigation';
import { assetPath } from '@/lib/asset-path';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  FileText,
  Fingerprint,
  Info,
  MapPin,
  ShieldCheck,
  TriangleAlert,
  Clock3,
  CircleCheck,
  Wallet,
  CalendarDays,
  Building2,
} from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
} from '@/components/ui/table';
import {
  views,
  money,
  fundTotals,
  documentsFor,
  recordPayload,
  sha256,
  RECORD_TIMESTAMP,
  type Opportunity,
  type View,
  type DemoDocument,
} from '@/lib/opportunities';
import { recordHashes } from '@/lib/record-hashes';
import {
  ChecklistItem,
  MockTokenCard,
  ReadinessScore,
  RecordHashCard,
  RiskCard,
  StatusBadge,
  TimelineItem,
} from '@/components/trust-components';

function DocumentPreview({
  document: d,
  compact = false,
}: {
  document: DemoDocument;
  compact?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger
        className={compact ? 'text-link document-inline' : 'document-row'}
      >
        {!compact && (
          <span className="document-icon">
            <FileText size={21} />
          </span>
        )}
        <span>
          <strong>{d.title}</strong>
          {!compact && (
            <small>
              {d.kind} · {d.date}
            </small>
          )}
        </span>
        {compact ? <ArrowUpRight size={15} /> : <ArrowUpRight size={18} />}
      </DialogTrigger>
      <DialogContent className="document-modal">
        <DialogHeader>
          <p className="eyebrow">DERAYES / SAMPLE EVIDENCE</p>
          <DialogTitle>{d.title}</DialogTitle>
          <DialogDescription>
            Fictional document preview · {d.date} · No legal or financial
            validity
          </DialogDescription>
        </DialogHeader>
        <div className="document-paper">
          <span className="small-tag">DEMO DOCUMENT</span>
          {d.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div className="subtle-notice">
      <Info size={17} />
      <p>{children}</p>
    </div>
  );
}
function EvidenceOverview({ o }: { o: Opportunity }) {
  const docs = documentsFor(o);
  return (
    <div className="detail-grid">
      <div className="main-column">
        <div className="overview-photo">
          <img
            width={1600}
            height={1000}
            src={assetPath(o.image)}
            alt={`Illustrative asset for ${o.name}`}
          />
          <span>Illustrative photography · Not the actual project</span>
        </div>
        <section className="panel">
          <div className="panel-heading">
            <h2>The opportunity</h2>
            <span className="small-tag">FICTIONAL PROJECT</span>
          </div>
          <p className="body-copy">{o.description}</p>
          <dl className="definition-grid overview-definitions">
            <div>
              <dt>Underlying asset</dt>
              <dd>{o.asset}</dd>
            </div>
            <div>
              <dt>Project operator</dt>
              <dd>{o.operator}</dd>
            </div>
            <div>
              <dt>Proposed use</dt>
              <dd>{o.proposedUse}</dd>
            </div>
            <div>
              <dt>Proposed contributor model</dt>
              <dd>{o.contributorModel}</dd>
            </div>
          </dl>
        </section>
        <blockquote className="principle-quote">
          “Tokenisation should not start with a smart contract. It should start
          with verified assets, clear rights, and auditable records.”
        </blockquote>
        <section className="panel" id="documents">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">INSPECT THE EVIDENCE</p>
              <h2>Supporting documents</h2>
            </div>
            <span className="muted-label">4 sample documents</span>
          </div>
          <div className="documents-list">
            {docs.map((d) => (
              <DocumentPreview key={d.id} document={d} />
            ))}
          </div>
        </section>
        <section className="panel">
          <div className="panel-heading">
            <h2>Risks to understand</h2>
            <TriangleAlert size={20} className="risk-icon" />
          </div>
          <RiskCard title={o.risk} text={o.riskDetail} open />
          <RiskCard
            title="Delivery and cost uncertainty"
            text="Schedules and budgets are illustrative assumptions. Delays, supplier issues, and cost increases could affect the project's ability to complete its plan."
          />
          <RiskCard
            title="Asset value and liquidity"
            text="Asset backing does not guarantee value, repayment, or a timely exit. Assets may lose value and may be difficult to sell. This demo offers no returns or financial commitments."
          />
        </section>
      </div>
      <aside className="context-column">
        <section className="panel trust-summary">
          <span className="large-icon">
            <ShieldCheck size={28} />
          </span>
          <p className="eyebrow">TOKENISATION READINESS</p>
          <h2>{o.readiness}% ready for the next review.</h2>
          <ReadinessScore value={o.readiness} />
          <p className="status-line">
            <span className="amber-dot" />
            {o.verificationStatus}
          </p>
          <Link
            href={`/opportunities/${o.id}/readiness`}
            className="button primary full-width"
          >
            View readiness breakdown <ArrowRight size={17} />
          </Link>
          <p className="fine-print">
            Readiness is an illustrative review aid, not approval or a
            guarantee.
          </p>
        </section>
        <section className="panel quick-links">
          <h3>Follow the project</h3>
          <Link href={`/opportunities/${o.id}/funds`}>
            <Wallet size={17} /> Use of funds <ArrowUpRight size={16} />
          </Link>
          <Link href={`/opportunities/${o.id}/updates`}>
            <CalendarDays size={17} /> Project updates{' '}
            <ArrowUpRight size={16} />
          </Link>
          <Link href={`/opportunities/${o.id}/integrity`}>
            <Fingerprint size={17} /> Record integrity{' '}
            <ArrowUpRight size={16} />
          </Link>
          <Link href={`/opportunities/${o.id}/token`}>
            <Building2 size={17} /> Mock token preview{' '}
            <ArrowUpRight size={16} />
          </Link>
        </section>
        <Notice>
          All figures and verification outcomes are simulated. No real
          investments are available.
        </Notice>
      </aside>
    </div>
  );
}
function TrustChecklist({ o }: { o: Opportunity }) {
  return (
    <>
      <div className="view-heading">
        <p className="eyebrow">EVIDENCE, NOT ASSUMPTIONS</p>
        <h2>Verification checklist</h2>
        <p>
          See what has been checked, the supporting evidence, and what remains
          unresolved.
        </p>
      </div>
      <div className="detail-grid">
        <div className="checklist-groups">
          <div className="panel-heading">
            <h3>Readiness checklist</h3>
            <span className="muted-label">As of 8 Sep 2026</span>
          </div>
          {o.checklist.map((group, groupIndex) => (
            <section className="panel checklist-panel" key={group.section}>
              <h3 className="checklist-section-title">{group.section}</h3>
              {group.items.map((item, itemIndex) => (
                <ChecklistItem
                  key={item.title}
                  {...item}
                  index={
                    o.checklist
                      .slice(0, groupIndex)
                      .reduce(
                        (total, current) => total + current.items.length,
                        0,
                      ) +
                    itemIndex +
                    1
                  }
                />
              ))}
            </section>
          ))}
        </div>
        <aside className="context-column">
          <section className="panel trust-summary">
            <span className="large-icon">
              <ShieldCheck size={28} />
            </span>
            <h2>{o.verificationStatus}</h2>
            <ReadinessScore value={o.readiness} />
            <div className="review-legend">
              <p>
                <span className="legend-dot burgundy" />
                Completed
              </p>
              <p>
                <span className="legend-dot amber-bg" />
                Action required
              </p>
            </div>
            <Notice>
              Statuses describe sample workflow progress. They are not legal,
              regulatory, or investment approval.
            </Notice>
          </section>
          <section className="attention-card">
            <TriangleAlert size={21} />
            <h3>Keep the open question visible.</h3>
            <p>
              {o.risk}. Review the disclosure before forming a view of the
              opportunity.
            </p>
            <Link className="text-link" href={`/opportunities/${o.id}/updates`}>
              Follow the latest update <ArrowRight size={16} />
            </Link>
          </section>
        </aside>
      </div>
    </>
  );
}
function FundsDashboard({ o }: { o: Opportunity }) {
  const totals = fundTotals(o);
  const colors = ['#6B1E2A', '#A96974', '#FFAB00', '#DCCBBA'];
  const segments = o.allocation
    .map((a, i) => {
      const start =
        (o.allocation.slice(0, i).reduce((sum, row) => sum + row.planned, 0) /
          o.budget) *
        100;
      const end = start + (a.planned / o.budget) * 100;
      return `${colors[i]} ${start}% ${end}%`;
    })
    .join(',');
  return (
    <>
      <div className="view-heading">
        <p className="eyebrow">VISIBLE ACCOUNTABILITY</p>
        <h2>Where the budget goes.</h2>
        <p>
          A transparent breakdown of planned allocations and reported use. All
          amounts are simulated.
        </p>
      </div>
      <div className="metric-grid">
        <section className="metric">
          <span>Proposed funding requirement</span>
          <strong>{money(o.budget)}</strong>
          <small>Illustrative allocation</small>
        </section>
        <section className="metric">
          <span>Simulated reported use</span>
          <strong>{money(totals.used)}</strong>
          <small>{totals.percent}% of proposed budget</small>
        </section>
        <section className="metric">
          <span>Unused planned allocation</span>
          <strong>{money(totals.remaining)}</strong>
          <small>No funds held by Derayes</small>
        </section>
      </div>
      <div className="funds-grid">
        <section className="panel">
          <div className="panel-heading">
            <h2>Planned allocation</h2>
            <span className="muted-label">NGN · ₦</span>
          </div>
          <div className="allocation-visual">
            <figure
              className="donut"
              style={{ background: `conic-gradient(${segments})` }}
              aria-label={o.allocation
                .map(
                  (a) =>
                    `${a.label}: ${Math.round((a.planned / o.budget) * 100)} percent`,
                )
                .join('; ')}
            >
              <div>
                <small>TOTAL BUDGET</small>
                <strong>{money(o.budget)}</strong>
              </div>
            </figure>
            <div className="allocation-legend">
              {o.allocation.map((a, i) => (
                <div key={a.label}>
                  <span
                    className="legend-dot"
                    style={{ background: colors[i] }}
                  />
                  <span>{a.label}</span>
                  <strong>{Math.round((a.planned / o.budget) * 100)}%</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="panel spending-panel">
          <div className="panel-heading">
            <h2>Simulated reported use</h2>
            <span className="status-badge neutral">5 Sep 2026</span>
          </div>
          {o.allocation.map((a) => (
            <div className="spend-row" key={a.label}>
              <div>
                <strong>{a.label}</strong>
                <span>
                  {money(a.used)} <small>/ {money(a.planned)}</small>
                </span>
              </div>
              <Progress
                value={(a.used / a.planned) * 100}
                aria-label={`${a.label}: ${money(a.used)} of ${money(a.planned)} reported used`}
              />
            </div>
          ))}
          <DocumentPreview document={documentsFor(o)[2]} compact />
        </section>
      </div>
      <section className="panel funds-table">
        <div className="panel-heading">
          <h2>Allocation ledger</h2>
          <span className="small-tag">SIMULATED FIGURES</span>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Purpose</TableHead>
              <TableHead>Planned</TableHead>
              <TableHead>Simulated use</TableHead>
              <TableHead>Remaining</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {o.allocation.map((a) => (
              <TableRow key={a.label}>
                <TableCell>{a.label}</TableCell>
                <TableCell>{money(a.planned)}</TableCell>
                <TableCell>{money(a.used)}</TableCell>
                <TableCell>{money(a.planned - a.used)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>{money(o.budget)}</TableCell>
              <TableCell>{money(totals.used)}</TableCell>
              <TableCell>{money(totals.remaining)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
      <Notice>
        These figures demonstrate a proposed reporting workflow, not
        bank-verified transactions. Derayes has not collected, held, or
        disbursed funds. Unused allocation is a budget balance, not money in an
        account.
      </Notice>
    </>
  );
}
function UpdateTimeline({ o }: { o: Opportunity }) {
  return (
    <>
      <div className="view-heading">
        <p className="eyebrow">A CONTINUOUS EVIDENCE TRAIL</p>
        <h2>Progress, in plain sight.</h2>
        <p>
          Project updates, disclosed changes, and open questions, in the order
          they happened.
        </p>
      </div>
      <div className="detail-grid">
        <section className="panel timeline-panel">
          <div className="panel-heading">
            <h3>Project update timeline</h3>
            <span className="muted-label">4 demo records · Newest first</span>
          </div>
          <div className="timeline">
            {o.milestones.map((m) => (
              <TimelineItem item={m} key={m.date} />
            ))}
          </div>
        </section>
        <aside className="context-column">
          <section className="panel">
            <span className="large-icon">
              <Clock3 size={25} />
            </span>
            <h2>The latest position</h2>
            <dl className="stacked-definitions">
              <div>
                <dt>Current phase</dt>
                <dd>{o.stage}</dd>
              </div>
              <div>
                <dt>Last recorded update</dt>
                <dd>8 September 2026</dd>
              </div>
              <div>
                <dt>Reporting cadence</dt>
                <dd>Monthly, with material changes</dd>
              </div>
            </dl>
            <Link
              href={`/opportunities/${o.id}/integrity`}
              className="text-link"
            >
              Inspect the latest record <ArrowRight size={16} />
            </Link>
          </section>
          <Notice>
            Dates and updates are fixed demo snapshots. This timeline is not
            connected to a live operator or reporting service.
          </Notice>
        </aside>
      </div>
    </>
  );
}

function ReadinessDashboard({ o }: { o: Opportunity }) {
  return (
    <>
      <div className="view-heading">
        <p className="eyebrow">TOKENISATION READINESS ASSESSMENT</p>
        <h2>{o.readiness}% ready — more foundation work is required.</h2>
        <p>
          Readiness brings asset, document, legal, protection, technical, and
          integrity questions into one review.
        </p>
      </div>
      <div className="detail-grid">
        <section className="panel readiness-panel">
          <div className="readiness-hero-score">
            <strong>{o.readiness}%</strong>
            <span>overall illustrative readiness</span>
          </div>
          <div className="readiness-breakdown">
            {o.readinessBreakdown.map((metric) => (
              <div className="readiness-row" key={metric.label}>
                <div>
                  <span>{metric.label}</span>
                  <strong>{metric.value}%</strong>
                </div>
                <Progress
                  value={metric.value}
                  aria-label={`${metric.label}: ${metric.value} percent`}
                />
              </div>
            ))}
          </div>
        </section>
        <aside className="context-column">
          <section className="attention-card readiness-interpretation">
            <TriangleAlert size={21} />
            <h3>Readiness interpretation</h3>
            <p>
              This asset is not ready for tokenisation yet. It requires legal
              review, regulatory classification, and clearer contributor
              protection before any token can represent real participation
              rights.
            </p>
          </section>
          <section className="panel quick-links">
            <h3>Continue the review</h3>
            <Link href={`/opportunities/${o.id}/trust`}>
              <ShieldCheck size={17} /> Verification checklist{' '}
              <ArrowUpRight size={16} />
            </Link>
            <Link href={`/opportunities/${o.id}/token`}>
              <Building2 size={17} /> Mock token preview{' '}
              <ArrowUpRight size={16} />
            </Link>
          </section>
          <Notice>
            The score is fixed sample data for product demonstration. It is not
            a regulatory decision, rating, recommendation, or prediction.
          </Notice>
        </aside>
      </div>
    </>
  );
}

function TokenPreview({ o }: { o: Opportunity }) {
  return (
    <>
      <div className="view-heading">
        <p className="eyebrow">MOCK TOKEN PREVIEW</p>
        <h2>See what a future record might reference.</h2>
        <p>
          The preview makes unresolved rights and controls visible. It does not
          issue, mint, sell, or transfer anything.
        </p>
      </div>
      <div className="detail-grid">
        <MockTokenCard opportunity={o} />
        <aside className="context-column">
          <section className="panel integrity-explainer">
            <h3>What must happen first</h3>
            <p>
              <CircleCheck size={18} />
              Define legally enforceable participation rights.
            </p>
            <p>
              <CircleCheck size={18} />
              Complete regulatory classification and counsel review.
            </p>
            <p>
              <CircleCheck size={18} />
              Design contributor protections and dispute handling.
            </p>
            <p>
              <CircleCheck size={18} />
              Connect approved off-chain records to technical controls.
            </p>
          </section>
          <Notice>
            This preview is a product-design artefact. No blockchain transaction
            or token contract has been created.
          </Notice>
        </aside>
      </div>
    </>
  );
}

function IntegrityRecord({ o }: { o: Opportunity }) {
  const [result, setResult] = useState<'idle' | 'checking' | 'match' | 'error'>(
    'idle',
  );
  const [copy, setCopy] = useState('Copy hash');
  const payload = recordPayload(o);
  const expected = recordHashes[o.id];
  async function verify() {
    setResult('checking');
    try {
      setResult((await sha256(payload)) === expected ? 'match' : 'error');
    } catch {
      setResult('error');
    }
  }
  async function copyHash() {
    try {
      await navigator.clipboard.writeText(expected);
      setCopy('Hash copied');
    } catch {
      setCopy('Copy unavailable — select the hash below');
    }
  }
  return (
    <>
      <div className="view-heading">
        <p className="eyebrow">A RECORD YOU CAN TRACE</p>
        <h2>Evidence leaves a fingerprint.</h2>
        <p>
          Inspect the timestamp and content hash of the latest illustrative
          project snapshot.
        </p>
      </div>
      <div className="detail-grid">
        <div className="main-column">
          <section className="panel integrity-panel">
            <div className="panel-heading">
              <div className="integrity-title">
                <span className="large-icon">
                  <Fingerprint size={29} />
                </span>
                <div>
                  <h2>Project snapshot</h2>
                  <p>{o.name} · Version 5</p>
                </div>
              </div>
              <span className="small-tag">MOCK RECORD</span>
            </div>
            <dl className="record-metadata">
              <div>
                <dt>Record ID</dt>
                <dd>DRY-{o.id.toUpperCase()}-005</dd>
              </div>
              <div>
                <dt>Illustrative timestamp (UTC)</dt>
                <dd>
                  <time dateTime={RECORD_TIMESTAMP}>
                    08 Sep 2026 · 10:30:00 UTC
                  </time>
                </dd>
              </div>
              <div>
                <dt>Hash algorithm</dt>
                <dd>SHA-256</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>Fictional operator disclosure</dd>
              </div>
              <div>
                <dt>Mock transaction/reference ID</dt>
                <dd>TX-DEMO-{o.id.toUpperCase()}-0908</dd>
              </div>
              <div>
                <dt>Recorded status</dt>
                <dd>
                  <StatusBadge tone="neutral">Recorded · demo</StatusBadge>
                </dd>
              </div>
            </dl>
            <RecordHashCard
              hash={expected}
              onCopy={copyHash}
              copyLabel={copy}
            />
            <details className="payload-details">
              <summary>
                Inspect the exact snapshot content <ChevronDown size={16} />
              </summary>
              <p>
                The fingerprint is calculated from these exact UTF-8 bytes.
                Changes to any character produce a different hash.
              </p>
              <pre>{payload}</pre>
            </details>
            <div className="verify-action">
              <button
                className="button primary"
                onClick={verify}
                disabled={result === 'checking'}
              >
                <Fingerprint size={17} />
                {result === 'checking' ? 'Checking…' : 'Verify demo record'}
              </button>
              <span>Recalculate the fingerprint in your browser.</span>
            </div>
            <div aria-live="polite">
              {result === 'match' && (
                <div className="verification-result">
                  <CircleCheck size={20} />
                  <div>
                    <strong>
                      Content matches the stored demo fingerprint.
                    </strong>
                    <p>
                      The displayed snapshot is unchanged relative to this
                      demo’s stored hash. This does not verify the asset,
                      operator, or timestamp.
                    </p>
                  </div>
                </div>
              )}
              {result === 'error' && (
                <div className="verification-result error">
                  <TriangleAlert size={20} />
                  <div>
                    <strong>Could not confirm the fingerprint.</strong>
                    <p>
                      The content may differ, or browser cryptography may be
                      unavailable. Try again in a supported secure browser.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
          <section className="panel">
            <div className="panel-heading">
              <h2>Record history</h2>
              <span className="muted-label">Illustrative version trail</span>
            </div>
            <div className="record-history">
              {[
                { v: 5, date: '8 Sep 2026', title: 'Readiness score updated' },
                {
                  v: 4,
                  date: '8 Sep 2026',
                  title: 'Verification status changed',
                },
                { v: 3, date: '5 Sep 2026', title: 'Risk summary updated' },
                { v: 2, date: '28 Aug 2026', title: 'Budget document hashed' },
                {
                  v: 1,
                  date: '20 Aug 2026',
                  title: 'Project summary v1 uploaded',
                },
              ].map((r) => (
                <div key={r.v}>
                  <span className="version-label">v{r.v}</span>
                  <div>
                    <strong>{r.title}</strong>
                    <span>{r.date}</span>
                  </div>
                  {r.v === 5 && (
                    <span className="status-badge neutral">Current</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside className="context-column">
          <section className="panel integrity-explainer">
            <p className="integrity-statement">
              Derayes may use blockchain-backed hashes or timestamps to make key
              records harder to alter and easier to audit.
            </p>
            <h3>What this tells you</h3>
            <p>
              <CircleCheck size={18} />
              Whether this snapshot matches its stored demo fingerprint.
            </p>
            <p>
              <CircleCheck size={18} />
              Which record version you are viewing and its stated timestamp.
            </p>
            <hr />
            <h3>What it doesn’t tell you</h3>
            <p>
              <Info size={18} />
              Whether the underlying claims or documents are true.
            </p>
            <p>
              <Info size={18} />
              Whether the asset is safe, valuable, or legally approved.
            </p>
            <p>
              <Info size={18} />
              Whether a trusted third party witnessed the timestamp.
            </p>
          </section>
          <Notice>
            The timestamp and record history are mock data. The SHA-256
            calculation is real; the stored reference is part of the demo, not
            an independent or immutable registry.
          </Notice>
        </aside>
      </div>
    </>
  );
}
export function OpportunityDetail({
  opportunity: o,
  view,
}: {
  opportunity: Opportunity;
  view: View;
}) {
  return (
    <main className="wrap detail-page page-space" id="main-content">
      <Link href="/opportunities" className="back-link">
        <ArrowLeft size={15} /> All opportunities
      </Link>
      <header className="detail-heading">
        <div>
          <div className="detail-kicker">
            <span>
              <Building2 size={14} />
              {o.sector}
            </span>
            <span className="muted-label">Illustrative opportunity</span>
          </div>
          <h1>{o.name}</h1>
          <p className="location">
            <MapPin size={15} />
            {o.location}
            <span className="location-separator">·</span>
            {o.stage}
          </p>
        </div>
        <span className="evidence-status">
          <ShieldCheck size={17} />
          {o.verificationStatus}
          <span>DEMO</span>
        </span>
      </header>
      <div className="detail-top-facts">
        <div>
          <span>Funding requirement</span>
          <strong>{money(o.budget)}</strong>
        </div>
        <div>
          <span>Readiness</span>
          <strong>{o.readiness}%</strong>
        </div>
        <div>
          <span>Risk</span>
          <strong>{o.riskLevel}</strong>
        </div>
        <div>
          <span>Project timeline</span>
          <strong>{o.duration}</strong>
        </div>
      </div>
      <nav className="detail-nav" aria-label="Opportunity evidence">
        {views.map((v) => (
          <Link
            key={v.id}
            href={`/opportunities/${o.id}${v.id === 'overview' ? '' : `/${v.id}`}`}
            aria-current={view === v.id ? 'page' : undefined}
          >
            {v.label}
            {v.id === 'trust' && <span className="nav-count">4</span>}
          </Link>
        ))}
      </nav>
      <div key={`${o.id}-${view}`} className="view-content">
        {view === 'overview' ? (
          <EvidenceOverview o={o} />
        ) : view === 'trust' ? (
          <TrustChecklist o={o} />
        ) : view === 'readiness' ? (
          <ReadinessDashboard o={o} />
        ) : view === 'funds' ? (
          <FundsDashboard o={o} />
        ) : view === 'updates' ? (
          <UpdateTimeline o={o} />
        ) : view === 'token' ? (
          <TokenPreview o={o} />
        ) : (
          <IntegrityRecord key={o.id} o={o} />
        )}
      </div>
    </main>
  );
}
