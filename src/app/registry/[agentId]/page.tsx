import { AgentDetailComponent } from '@/components/layout/AgentDetail';
import {
  getAssistantById,
  getAssistantsByCategory,
} from '@/lib/api/ai-registry/registry';
import { getAllDailyPingsByAgentId } from '@/lib/api/kv';

export default async function AgentDetail({
  params,
}: {
  params: { agentId: string };
}) {
  const agentId = params.agentId as string;

  const data = await getAssistantById(agentId);
  const relatedAgents = await getAssistantsByCategory(data?.category);
  const pings = await getAllDailyPingsByAgentId(agentId);
  if (!data) {
    return null;
  }

  return (
    <AgentDetailComponent
      agent={data}
      relatedAgents={relatedAgents}
      pings={pings}
    />
  );
}
