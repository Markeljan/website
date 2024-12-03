import { readAll } from '@/lib/utils/firestore';
import { BitteAssistantConfig } from './registry';
import { getAllDailyPingsByAgentId, getTotalPingsByAgentIds } from '../kv';

export const getStats = async () => {
  const assistants = await readAll<BitteAssistantConfig>('ai-assistants');
  const agentIds = assistants.map((a) => a.id);

  const pingCounts = await getTotalPingsByAgentIds(agentIds);
  const totalPings = Object.values(pingCounts).reduce<number>(
    (sum: number, count: number | null) => sum + (count || 0),
    0
  );

  // Get daily pings for all agents
  const dailyPingsPromises = agentIds.map((id) =>
    getAllDailyPingsByAgentId(id)
  );
  const dailyPingsPerAgent = await Promise.all(dailyPingsPromises);

  // Combine daily pings across all agents
  const combinedDailyPings: Record<string, number> = {};
  dailyPingsPerAgent.forEach((agentPings) => {
    Object.entries(agentPings).forEach(([date, count]) => {
      combinedDailyPings[date] = (combinedDailyPings[date] || 0) + count;
    });
  });

  // Convert to chart data format
  const chartData = Object.entries(combinedDailyPings)
    .map(([date, pings]) => ({
      date,
      pings,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    totalAgents: assistants.length,
    totalPings: totalPings,
    chartData,
  };
};
