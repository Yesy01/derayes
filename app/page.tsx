import Link from '@/lib/navigation';
import { assetPath } from '@/lib/asset-path';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  Eye,
  Fingerprint,
  Check,
  Building2,
} from 'lucide-react';

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="amber-dot" /> CLARITY BEFORE COMMITMENT
          </p>
          <h1>
            Real assets.
            <br />
            Clear evidence.
            <br />
            <em>Earned trust.</em>
          </h1>
          <p className="hero-description">
            A clearer view of asset-backed opportunities. Explore the documents,
            understand the risks, and follow the evidence before you decide.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/opportunities">
              Explore opportunities <ArrowUpRight size={18} />
            </Link>
            <a className="text-link" href="#how-it-works">
              How trust works <ArrowRight size={17} />
            </a>
          </div>
          <p className="quiet-note">
            <ShieldCheck size={16} /> Built for informed decisions. No
            investments processed.
          </p>
        </div>
        <div className="hero-visual">
          <img
            width={1600}
            height={1000}
            src={assetPath('/images/residential.jpg')}
            alt="Illustrative modern residential building with balconies"
            className="hero-image"
          />
          <div className="image-label">
            <span className="tiny-dot" /> REAL ASSETS. VISIBLE ACCOUNTABILITY.
          </div>
          <div className="hero-assessment">
            <div className="assessment-head">
              <span className="icon-box">
                <ShieldCheck size={22} />
              </span>
              <div>
                <strong>Trust, with a paper trail.</strong>
                <span>Illustrative verification snapshot</span>
              </div>
              <span className="small-tag">DEMO</span>
            </div>
            <div className="assessment-row">
              <span>Ownership documentation</span>
              <span>
                <Check size={15} /> Reviewed
              </span>
            </div>
            <div className="assessment-row">
              <span>Use of funds</span>
              <span>
                <Check size={15} /> Disclosed
              </span>
            </div>
            <div className="assessment-row">
              <span>Project risk assessment</span>
              <span className="amber-text">1 open item</span>
            </div>
            <Link
              href="/opportunities/cedar-residences/trust"
              className="assessment-link"
            >
              See the complete trust checklist <ArrowUpRight size={16} />
            </Link>
          </div>
          <p className="image-caption">
            Illustrative photography · Fictional opportunity
          </p>
        </div>
      </section>
      <section className="principles">
        <div className="wrap principles-inner">
          <span>THE FOUNDATION OF A BETTER DECISION</span>
          <p>
            <FileCheck2 size={20} /> Evidence you can inspect
          </p>
          <p>
            <Eye size={20} /> Risks you can understand
          </p>
          <p>
            <Fingerprint size={20} /> Records you can trace
          </p>
        </div>
      </section>
      <section id="how-it-works" className="wrap how-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE DERAYES APPROACH</p>
            <h2>
              Trust is a process.
              <br />
              Make every step visible.
            </h2>
          </div>
          <p>
            From the underlying asset to the latest update,
            <br className="desktop-break" /> a connected view of what matters.
          </p>
        </div>
        <div className="steps-grid">
          {[
            {
              n: '01',
              icon: Building2,
              title: 'Explore the opportunity',
              text: 'Understand the asset, its purpose, and the people responsible.',
              href: '/opportunities',
            },
            {
              n: '02',
              icon: FileCheck2,
              title: 'Look beyond the summary',
              text: 'Review supporting documents, open questions, and disclosed risks.',
              href: '/opportunities/cedar-residences/trust',
            },
            {
              n: '03',
              icon: Fingerprint,
              title: 'Follow the evidence',
              text: 'Trace fund allocations, project updates, and timestamped records.',
              href: '/opportunities/cedar-residences/integrity',
            },
          ].map((s) => (
            <Link className="step" href={s.href} key={s.n}>
              <div className="step-top">
                <s.icon size={25} />
                <span>{s.n}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ArrowUpRight className="step-arrow" size={19} />
            </Link>
          ))}
        </div>
      </section>
      <section className="wrap">
        <div className="closing-band">
          <div>
            <p className="eyebrow">REAL ESTATE · AGRICULTURE · SME</p>
            <h2>Different assets. One standard of clarity.</h2>
          </div>
          <Link className="button light" href="/opportunities">
            Explore the demo <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
