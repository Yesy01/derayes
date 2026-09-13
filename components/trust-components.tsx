import type { ReactNode } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  CircleDashed,
  FileText,
  Fingerprint,
  TriangleAlert,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import type {
  ChecklistStatus,
  DemoDocument,
  Opportunity,
} from '@/lib/opportunities';
import { displayDate } from '@/lib/opportunities';

export function StatusBadge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'green' | 'amber' | 'neutral' | 'review';
}) {
  return <span className={`status-badge ${tone}`}>{children}</span>;
}

export function ReadinessScore({
  value,
  compact = false,
}: {
  value: number;
  compact?: boolean;
}) {
  return (
    <div className={compact ? 'readiness-score compact' : 'readiness-score'}>
      <div className="readiness-score-label">
        <span>Tokenisation readiness</span>
        <strong>{value}%</strong>
      </div>
      <Progress
        value={value}
        aria-label={`Tokenisation readiness: ${value} percent`}
      />
    </div>
  );
}

const statusTone: Record<
  ChecklistStatus,
  'green' | 'amber' | 'neutral' | 'review'
> = {
  Completed: 'green',
  'In Progress': 'amber',
  Pending: 'neutral',
  'Needs Legal Review': 'review',
};

export function ChecklistItem({
  title,
  status,
  note,
  index,
}: {
  title: string;
  status: ChecklistStatus;
  note: string;
  index: number;
}) {
  const open = status === 'Needs Legal Review';
  return (
    <details
      className={`checklist-item ${status !== 'Completed' ? 'pending' : ''}`}
      open={open}
    >
      <summary>
        <span className="check-status">
          {status === 'Completed' ? (
            <CircleCheck size={21} />
          ) : (
            <CircleDashed size={21} />
          )}
        </span>
        <span className="check-name">
          <small>CHECK {String(index).padStart(2, '0')}</small>
          <strong>{title}</strong>
        </span>
        <StatusBadge tone={statusTone[status]}>{status}</StatusBadge>
        <ChevronDown size={16} />
      </summary>
      <div className="check-detail">
        <p>{note}</p>
      </div>
    </details>
  );
}

export function RiskCard({
  title,
  text,
  open = false,
}: {
  title: string;
  text: string;
  open?: boolean;
}) {
  return (
    <details className="risk-item" open={open}>
      <summary>
        <span>
          <TriangleAlert size={16} />
          {title}
        </span>
        <ChevronDown size={16} />
      </summary>
      <p>{text}</p>
    </details>
  );
}

export function DocumentCard({
  document,
  onOpen,
}: {
  document: DemoDocument;
  onOpen: () => void;
}) {
  return (
    <button className="document-row" type="button" onClick={onOpen}>
      <span className="document-icon">
        <FileText size={21} />
      </span>
      <span>
        <strong>{document.title}</strong>
        <small>
          {document.kind} · {document.date}
        </small>
      </span>
      <ArrowUpRight size={18} />
    </button>
  );
}

export function TimelineItem({
  item,
}: {
  item: Opportunity['milestones'][number];
}) {
  return (
    <article
      className={`timeline-event ${item.status === 'Open item' ? 'event-open' : ''}`}
    >
      <span className="timeline-marker">
        {item.status === 'Open item' ? (
          <TriangleAlert size={15} />
        ) : (
          <Check size={15} />
        )}
      </span>
      <div className="event-meta">
        <time dateTime={item.date}>{displayDate(item.date)}</time>
        <StatusBadge tone={item.status === 'Open item' ? 'amber' : 'neutral'}>
          {item.status}
        </StatusBadge>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="event-footer">
        <span>Project operator · Sample update</span>
      </div>
    </article>
  );
}

export function MockTokenCard({
  opportunity: o,
}: {
  opportunity: Opportunity;
}) {
  const rows = [
    ['Token reference', o.token.symbol],
    ['Linked asset', o.name],
    ['Status', 'Demo only'],
    ['Rights', o.token.rights],
    ['Possible future structure', o.token.futureStructure],
    ['Network', o.token.network],
    ['Smart contract', o.token.smartContract],
    ['Supply', o.token.supply],
  ];
  return (
    <section className="panel mock-token-card">
      <div className="token-mark">DRY</div>
      <div className="panel-heading">
        <div>
          <p className="eyebrow">NON-TRANSFERABLE MOCK RECORD</p>
          <h2>{o.token.symbol}</h2>
        </div>
        <StatusBadge tone="review">DEMO ONLY</StatusBadge>
      </div>
      <dl className="token-details">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="token-warning">
        <TriangleAlert size={19} />
        <p>
          This is not a live token, security, investment product, ownership
          claim, or offer. It creates no legal or financial rights.
        </p>
      </div>
    </section>
  );
}

export function RecordHashCard({
  hash,
  onCopy,
  copyLabel,
}: {
  hash: string;
  onCopy: () => void;
  copyLabel: string;
}) {
  return (
    <div className="hash-box">
      <div>
        <span>CONTENT FINGERPRINT</span>
        <button type="button" onClick={onCopy} className="text-link">
          <Fingerprint size={15} />
          <span aria-live="polite">{copyLabel}</span>
        </button>
      </div>
      <code>{hash}</code>
    </div>
  );
}
