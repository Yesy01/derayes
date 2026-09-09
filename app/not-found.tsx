import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() {
  return (
    <main id="main-content" className="wrap not-found">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>This record isn’t in the demo.</h1>
      <p>
        Return to the marketplace to explore the available illustrative
        opportunities.
      </p>
      <Link className="button primary" href="/opportunities">
        <ArrowLeft size={17} />
        Back to opportunities
      </Link>
    </main>
  );
}
