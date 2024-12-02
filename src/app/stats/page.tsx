import { getStats } from '@/lib/api/ai-registry/stats';
import StatsPage from '@/components/layout/Stats';

export const revalidate = 43200;

export default async function StatsPageWrapper() {
  const stats = await getStats();
  return <StatsPage stats={stats} />;
}
