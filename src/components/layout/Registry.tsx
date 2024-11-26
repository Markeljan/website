'use client';
import { RegistryData, Filters } from '@/lib/types/agent.types';
import { RegistryBanner } from '../ui/registry-banner';
import AllAgents from '@/components/ui/agents/AllAgents';
import { AgentStarterCard } from '../ui/agents/AgentStarterCard';

export const RegistryUI = ({
  agents,
  filters,
  unverifiedAgents,
}: {
  agents: RegistryData[];
  unverifiedAgents: RegistryData[];
  filters: Filters[];
}) => {
  return (
    <div className='container-home -mt-28 md:-mt-16 z-20'>
      <RegistryBanner />
      <AgentStarterCard />
      <AllAgents
        templates={agents}
        filters={filters}
        unverifiedAgents={unverifiedAgents}
      />
    </div>
  );
};
