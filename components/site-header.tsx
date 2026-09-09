'use client';

import Link from '@/lib/navigation';
import { usePathname } from '@/lib/navigation';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export function SiteHeader() {
  const path = usePathname();
  return (
    <>
      <Link href={`${path}#main-content`} className="skip-link">
        Skip to content
      </Link>
      <div className="demo-bar">
        <span className="demo-pill">PROOF OF CONCEPT</span>
        <span>
          Explore the experience. No real investments, payments, or financial
          commitments.
        </span>
      </div>
      <header className="site-header wrap">
        <Link className="brand" href="/" aria-label="Derayes home">
          <span className="brand-mark">
            <ShieldCheck size={28} strokeWidth={1.7} />
          </span>
          derayes<span className="brand-dot">.</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link
            className={path.startsWith('/opportunities') ? 'active' : ''}
            href="/opportunities"
          >
            Opportunities
          </Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/opportunities/cedar-residences/integrity">
            Transparency
          </Link>
        </nav>
        <Link className="button header-cta" href="/opportunities">
          Explore demo <ArrowUpRight size={16} />
        </Link>
      </header>
    </>
  );
}
