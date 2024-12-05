'use client';
import { RegistryData, Filters } from '@/lib/types/agent.types';
import { RegistryBanner } from './RegistryBanner';
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
    <div className='container z-20 m-auto'>
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
