import { notFound } from 'next/navigation';
import { getOpportunity } from '@/lib/opportunities';
import { OpportunityDetail } from '@/components/opportunity-detail';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const o = getOpportunity((await params).slug);
  return { title: o?.name ?? 'Opportunity not found' };
}
export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const o = getOpportunity((await params).slug);
  if (!o) notFound();
  return <OpportunityDetail opportunity={o} view="overview" />;
}
