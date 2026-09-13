import Link from '@/lib/navigation';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  FileCheck2,
  Landmark,
  Scale,
  ShieldCheck,
  Sprout,
  Factory,
  Handshake,
  MessagesSquare,
} from 'lucide-react';

const after = [
  'Tokenisation remains the long-term direction.',
  'Trust, verification, and legal readiness come first.',
  'The demo now measures readiness before showing a mock token.',
  'Real estate is the first wedge; agriculture and SMEs show expansion.',
  'Blockchain is used where it improves auditability and record integrity.',
];

export function IncubationPage() {
  return (
    <main className="wrap venture-page page-space" id="main-content">
      <p className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>Incubation
      </p>
      <div className="venture-hero">
        <p className="eyebrow">VENTURE DAY · PRODUCT EVOLUTION</p>
        <h1>What incubation changed</h1>
        <p>
          Derayes moved from a broad blockchain concept to a staged pathway
          built around the evidence, rights, protections, and records that
          tokenisation depends on.
        </p>
      </div>
      <div className="before-after-grid">
        <section className="panel comparison-card muted-card">
          <span className="comparison-label">BEFORE INCUBATION</span>
          <h2>A broad tokenisation concept</h2>
          <ul>
            <li>Real-estate tokenisation as the product</li>
            <li>A blockchain-first story</li>
            <li>An unclear bridge between legal rights and tokens</li>
            <li>A mostly conceptual user journey</li>
          </ul>
        </section>
        <section className="panel comparison-card">
          <span className="comparison-label amber-label">AFTER INCUBATION</span>
          <h2>A readiness pathway</h2>
          <ul>
            {after.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <blockquote className="incubation-quote">
        “During incubation, the main lesson was that tokenisation is not just a
        technical feature. It is a legal, financial, trust, and governance
        responsibility.”
      </blockquote>
      <div className="page-actions">
        <Link
          className="button primary"
          href="/opportunities/lagos-coliving/readiness"
        >
          See the updated demo <ArrowUpRight size={17} />
        </Link>
        <Link className="text-link" href="/ask">
          View the Venture Day ask <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}

const expansionSectors = [
  {
    icon: Building2,
    title: 'Real Estate',
    text: 'Renovation, development, rental, or infrastructure assets with ownership, approval, budget, and delivery records.',
    example: 'First wedge: Lagos co-living renovation',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    text: 'Storage, processing, productive land, or equipment projects with asset-use, operating, and seasonal evidence.',
    example: 'Example: maize storage facility upgrade',
  },
  {
    icon: Factory,
    title: 'SMEs',
    text: 'Equipment and productive-asset upgrades supported by supplier, valuation, operating, and company records.',
    example: 'Example: food processing equipment upgrade',
  },
];
const infrastructure = [
  'Asset and operator verification',
  'Supporting documents',
  'Risk disclosure',
  'Use-of-funds records',
  'Contributor records',
  'Legal and regulatory review',
  'Readiness scoring',
  'Integrity logs',
];

export function ExpansionPage() {
  return (
    <main className="wrap venture-page page-space" id="main-content">
      <p className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>Expansion
      </p>
      <div className="venture-hero">
        <p className="eyebrow">ONE TRUST LAYER · MULTIPLE ASSET CLASSES</p>
        <h1>Built to expand beyond real estate.</h1>
        <p>
          Derayes starts with a focused real-estate use case, then applies the
          same readiness questions to other asset-backed opportunities.
        </p>
      </div>
      <div className="expansion-grid">
        {expansionSectors.map(({ icon: Icon, title, text, example }) => (
          <section className="panel sector-path" key={title}>
            <span className="large-icon">
              <Icon size={24} />
            </span>
            <h2>{title}</h2>
            <p>{text}</p>
            <small>{example}</small>
          </section>
        ))}
      </div>
      <section className="panel common-layer">
        <div>
          <p className="eyebrow">COMMON INFRASTRUCTURE</p>
          <h2>The asset changes. The trust questions remain.</h2>
          <p>
            A shared evidence model helps reviewers see what exists, what has
            been checked, what is still unresolved, and what must happen before
            any tokenisation decision.
          </p>
        </div>
        <div className="infrastructure-list">
          {infrastructure.map((item) => (
            <span key={item}>
              <Check size={15} />
              {item}
            </span>
          ))}
        </div>
      </section>
      <div className="page-actions">
        <Link className="button primary" href="/opportunities">
          Compare the sample assets <ArrowUpRight size={17} />
        </Link>
      </div>
    </main>
  );
}

const asks = [
  {
    icon: Landmark,
    title: 'Grant support',
    text: 'Support the next phase of product, legal, and pilot validation.',
  },
  {
    icon: Scale,
    title: 'Legal and regulatory mentorship',
    text: 'Help define viable rights, classifications, protections, and operating boundaries.',
  },
  {
    icon: Building2,
    title: 'Pilot owner introductions',
    text: 'Connect Derayes with asset owners willing to test the verification workflow.',
  },
  {
    icon: Handshake,
    title: 'Ecosystem partnerships',
    text: 'Explore collaboration with verification, legal, compliance, and infrastructure providers.',
  },
  {
    icon: MessagesSquare,
    title: 'Technical feedback',
    text: 'Challenge the readiness model, data boundaries, and integrity approach.',
  },
];
const milestones = [
  'Validate the trust-room workflow with pilot asset owners',
  'Define the real-estate legal and regulatory pathway with qualified counsel',
  'Test a contributor-protection and reporting framework',
  'Build an authenticated pilot with controlled records and reviewer roles',
  'Prototype a compliant token structure only after the rights model is ready',
];

export function AskPage() {
  return (
    <main className="wrap venture-page page-space" id="main-content">
      <p className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>Venture Day ask
      </p>
      <div className="ask-hero">
        <span className="large-icon">
          <ShieldCheck size={28} />
        </span>
        <p className="eyebrow">THE NEXT VALIDATION STEP</p>
        <h1>
          Help Derayes test the pathway from verified assets to compliant
          tokenisation.
        </h1>
        <p>
          We are looking for support that strengthens the legal, trust,
          governance, and technical foundations before any live participation
          model is considered.
        </p>
      </div>
      <div className="ask-grid">
        {asks.map(({ icon: Icon, title, text }) => (
          <section className="panel ask-card" key={title}>
            <Icon size={22} />
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
      <section className="panel milestones-card">
        <div>
          <p className="eyebrow">NEXT MILESTONES</p>
          <h2>What the next phase should prove</h2>
        </div>
        <ol>
          {milestones.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </section>
      <div className="closing-ask">
        <div>
          <FileCheck2 size={23} />
          <p>
            <strong>This is a proof of concept.</strong> No live investments,
            token issuance, financial commitments, or ownership transfers are
            available.
          </p>
        </div>
        <Link className="button light" href="/opportunities/lagos-coliving">
          Open the Trust Room <ArrowUpRight size={17} />
        </Link>
      </div>
    </main>
  );
}
