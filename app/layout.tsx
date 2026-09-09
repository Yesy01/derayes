import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Derayes — Trust before opportunity',
    template: '%s | Derayes',
  },
  description:
    'Explore illustrative asset-backed opportunities, supporting evidence, risks, and transparency records. A proof of concept. No live investments.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
              All opportunities, documents, figures, and verification results
              are fictional demo data. Derayes does not offer investments or
              process funds. Document review does not establish asset safety or
              regulatory approval.
            </p>
            <span>© 2026 Derayes</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
