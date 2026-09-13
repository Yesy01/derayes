import Link from '@/lib/navigation';
import { assetPath } from '@/lib/asset-path';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  Fingerprint,
  Building2,
  Scale,
  Braces,
} from 'lucide-react';

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="amber-dot" /> FROM ASSET TO TOKENISATION READINESS
          </p>
          <h1>
            Derayes makes real-world assets <em>tokenisation-ready.</em>
          </h1>
          <p className="hero-description">
            Verify the asset, clarify the rights, structure the records, then
            explore compliant tokenisation.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/opportunities">
              Explore assets <ArrowUpRight size={18} />
            </Link>
            <Link
              className="text-link"
              href="/opportunities/lagos-coliving/readiness"
            >
              View tokenisation readiness demo <ArrowRight size={17} />
            </Link>
          </div>
          <p className="quiet-note">
            <ShieldCheck size={16} /> Demo only. No real investments, live token
            issuance, or legal ownership transfer.
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
            <span className="tiny-dot" /> ASSET → VERIFIED ASSET →
            TOKENISATION-READY
          </div>
          <div className="hero-assessment">
            <div className="assessment-head">
              <span className="icon-box">
                <ShieldCheck size={22} />
              </span>
              <div>
                <strong>Lagos readiness snapshot</strong>
                <span>Illustrative assessment only</span>
              </div>
              <span className="small-tag">DEMO</span>
            </div>
            <div className="assessment-row">
              <span>Asset verification</span>
              <span>65%</span>
            </div>
            <div className="assessment-row">
              <span>Legal enforceability</span>
              <span className="amber-text">20%</span>
            </div>
            <div className="assessment-row">
              <span>Overall readiness</span>
              <span className="amber-text">42%</span>
            </div>
            <Link
              href="/opportunities/lagos-coliving/readiness"
              className="assessment-link"
            >
              See the readiness breakdown <ArrowUpRight size={16} />
            </Link>
          </div>
          <p className="image-caption">
            Illustrative photography · Fictional opportunity
          </p>
        </div>
      </section>
      <section className="principles">
        <div className="wrap principles-inner">
          <span>TRUST INFRASTRUCTURE BEFORE TOKEN ISSUANCE</span>
          <p>
            <FileCheck2 size={20} /> Assets and documents verified
          </p>
          <p>
            <Scale size={20} /> Rights and protections clarified
          </p>
          <p>
            <Fingerprint size={20} /> Records you can audit
          </p>
        </div>
      </section>
      <section id="how-it-works" className="wrap how-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE DERAYES APPROACH</p>
            <h2>
              Tokenisation is a process.
              <br />
              Start with what must be trusted.
            </h2>
          </div>
          <p>
            A pathway from an asset listing to a documented, legally reviewed,
            <br className="desktop-break" /> technically structured opportunity.
          </p>
        </div>
        <div className="steps-grid">
          {[
            {
              n: '01',
              icon: Building2,
              title: 'Start with the real asset',
              text: 'Understand the asset, project owner, location, proposed use, and risks.',
              href: '/opportunities',
            },
            {
              n: '02',
              icon: Scale,
              title: 'Verify and clarify rights',
              text: 'Review evidence, legal enforceability, classification, and contributor protection.',
              href: '/opportunities/lagos-coliving/trust',
            },
            {
              n: '03',
              icon: Braces,
              title: 'Assess tokenisation readiness',
              text: 'Connect off-chain records to a mock token design only after the trust foundation is visible.',
              href: '/opportunities/lagos-coliving/readiness',
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
            <h2>Real estate first. One readiness standard that can expand.</h2>
          </div>
          <Link className="button light" href="/opportunities">
            Explore the asset pathway <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
