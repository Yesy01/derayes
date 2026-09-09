import type { ReactNode } from 'react';
import Link from '@/lib/navigation';
import { ShieldCheck } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <footer className="site-footer wrap">
        <div className="footer-main">
          <Link className="brand" href="/">
            <ShieldCheck size={24} />
            derayes<span className="brand-dot">.</span>
          </Link>
          <p>Trust infrastructure for asset-backed opportunities.</p>
          <span className="small-tag">PROOF OF CONCEPT</span>
        </div>
        <div className="footer-bottom">
          <p>
            All opportunities, documents, figures, and verification results are
            fictional demo data. Derayes does not offer investments or process
            funds. Document review does not establish asset safety or regulatory
            approval.
          </p>
          <span>© 2026 Derayes</span>
        </div>
      </footer>
    </>
  );
}
