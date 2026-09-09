import { notFound } from 'next/navigation';
import { getOpportunity, views, type View } from '@/lib/opportunities';
import { OpportunityDetail } from '@/components/opportunity-detail';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; view: string }>;
}) {
  const { slug, view } = await params;
  return {
    title: `${views.find((v) => v.id === view)?.label ?? 'Not found'} — ${getOpportunity(slug)?.name ?? 'Derayes'}`,
  };
}
export default async function EvidencePage({
  params,
}: {
  params: Promise<{ slug: string; view: string }>;
}) {
  const { slug, view } = await params;
  const o = getOpportunity(slug);
  if (!o || !views.some((v) => v.id === view)) notFound();
  return <OpportunityDetail opportunity={o} view={view as View} />;
}
