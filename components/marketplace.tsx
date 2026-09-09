'use client';

import Link from '@/lib/navigation';
import { assetPath } from '@/lib/asset-path';
import { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Sprout,
  Factory,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  sectors,
  filterOpportunities,
  money,
  type Opportunity,
} from '@/lib/opportunities';

const sectorIcons = {
  'Real Estate': Building2,
  Agriculture: Sprout,
  SME: Factory,
};
export function OpportunityCard({
  opportunity: o,
}: {
  opportunity: Opportunity;
}) {
  const Icon = sectorIcons[o.sector];
  return (
    <article className="opportunity-card">
      <Link
        href={`/opportunities/${o.id}`}
        className="card-image-link"
        aria-label={`Review ${o.name}`}
      >
        <img
          width={1600}
          height={1000}
          src={assetPath(o.image)}
          alt={`Illustrative ${o.sector.toLowerCase()} asset`}
        />
        <span className="card-sector">
          <Icon size={14} />
          {o.sector}
        </span>
        <span className="photo-demo">ILLUSTRATIVE</span>
      </Link>
      <div className="opportunity-card-body">
        <div className="card-status">
          <ShieldCheck size={15} />
          <span>Evidence reviewed · Demo</span>
        </div>
        <Link href={`/opportunities/${o.id}`}>
          <h2>{o.name}</h2>
        </Link>
        <p className="location">
          <MapPin size={13} />
          {o.location}
        </p>
        <p className="card-description">{o.tagline}</p>
        <div className="card-facts">
          <div>
            <span>Proposed project budget</span>
            <strong>{money(o.budget)}</strong>
          </div>
          <div>
            <span>Project horizon</span>
            <strong>{o.duration}</strong>
          </div>
        </div>
        <div className="card-trust">
          <span>
            <span className="amber-dot" />1 evidence item open
          </span>
          <span>5/6 checks</span>
        </div>
        <Link className="card-review" href={`/opportunities/${o.id}`}>
          Review opportunity <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}
export function Marketplace() {
  const [sector, setSector] = useState('All sectors');
  return (
    <main className="wrap marketplace page-space" id="main-content">
      <p className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>Opportunities
      </p>
      <div className="page-title-row">
        <div>
          <p className="eyebrow">
            <span className="amber-dot" />
            THE OPPORTUNITY MARKETPLACE
          </p>
          <h1>Start with the evidence.</h1>
          <p className="page-description">
            Explore the assets. Review what’s known. See what still needs an
            answer.
          </p>
        </div>
        <span className="outline-label">3 illustrative opportunities</span>
      </div>
      <Tabs
        value={sector}
        onValueChange={(value) => setSector(String(value))}
        className="market-tabs"
      >
        <div className="market-controls">
          <TabsList aria-label="Opportunity sector" className="sector-tabs">
            {sectors.map((s) => (
              <TabsTrigger value={s} key={s}>
                {s !== 'All sectors' &&
                  (() => {
                    const Icon = sectorIcons[s];
                    return <Icon size={16} />;
                  })()}
                {s}
              </TabsTrigger>
            ))}
          </TabsList>
          <span className="results-count" aria-live="polite">
            {filterOpportunities(sector).length}{' '}
            {filterOpportunities(sector).length === 1
              ? 'opportunity'
              : 'opportunities'}
          </span>
        </div>
        {sectors.map((s) => (
          <TabsContent value={s} key={s}>
            <div className="opportunity-grid">
              {filterOpportunities(s).map((o) => (
                <OpportunityCard key={o.id} opportunity={o} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="info-banner">
        <Info size={19} />
        <p>
          <strong>Evidence reviewed isn’t a guarantee.</strong> Demo checks
          indicate that sample documents have been reviewed for consistency.
          They do not establish asset safety, regulatory approval, or investment
          suitability.
        </p>
        <Link href="/opportunities/cedar-residences/trust">
          Understand the checks <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
