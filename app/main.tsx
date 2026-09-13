import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './page';
import NotFound from './not-found';
import { SiteLayout } from './layout';
import { Marketplace } from '@/components/marketplace';
import { OpportunityDetail } from '@/components/opportunity-detail';
import {
  AskPage,
  ExpansionPage,
  IncubationPage,
} from '@/components/venture-pages';
import { useRoute } from '@/lib/navigation';
import { getOpportunity, views } from '@/lib/opportunities';
import './globals.css';

function App() {
  const { path, anchor } = useRoute();
  const parts = path.split('/').filter(Boolean);
  const opportunity =
    parts[0] === 'opportunities' && parts.length >= 2
      ? getOpportunity(parts[1])
      : undefined;
  const view = views.find((item) => item.id === (parts[2] ?? 'overview'));
  const isDetail = !!opportunity && !!view && parts.length <= 3;
  const title =
    path === '/'
      ? 'Tokenisation readiness for real-world assets'
      : path === '/opportunities'
        ? 'Opportunity marketplace'
        : path === '/incubation'
          ? 'What incubation changed'
          : path === '/expansion'
            ? 'Expansion pathway'
            : path === '/ask'
              ? 'Venture Day ask'
              : isDetail
                ? `${view.label} — ${opportunity.name}`
                : 'Page not found';
  useEffect(() => {
    document.title = `${title} | Derayes`;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(anchor || 'main-content');
      if (anchor) target?.scrollIntoView();
      else window.scrollTo(0, 0);
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [path, anchor, title]);
  return (
    <SiteLayout>
      {path === '/' ? (
        <Home />
      ) : path === '/opportunities' ? (
        <Marketplace />
      ) : path === '/incubation' ? (
        <IncubationPage />
      ) : path === '/expansion' ? (
        <ExpansionPage />
      ) : path === '/ask' ? (
        <AskPage />
      ) : isDetail ? (
        <OpportunityDetail
          key={`${opportunity.id}-${view.id}`}
          opportunity={opportunity}
          view={view.id}
        />
      ) : (
        <NotFound />
      )}
    </SiteLayout>
  );
}

const container = document.getElementById('root');
if (!container) throw new Error('Missing application root');
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
