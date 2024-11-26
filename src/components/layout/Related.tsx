'use client';

import TemplateCard from '../ui/agents/AgentCard';
import Link from 'next/link';
import { Button } from '../ui/button';
import { RegistryData } from '@/lib/types/agent.types';

export const RelatedTemplates = ({
  relatedAgents,
}: {
  relatedAgents: RegistryData[];
}) => {
  return relatedAgents ? (
    <div className='w-full mt-10'>
      <h1 className='text-2xl font-semibold'>Related</h1>
      <div className='flex flex-wrap md:flex-nowrap w-full gap-8 mt-10'>
        {relatedAgents?.map((agent) => (
          <TemplateCard key={agent.id} agent={agent} />
        ))}
      </div>
      <div className='w-full flex justify-center p-20'>
        <Link href='/'>
          <Button variant='secondary' className='w-[200px]'>
            View All Agents
          </Button>
        </Link>
      </div>
    </div>
  ) : null;
};
