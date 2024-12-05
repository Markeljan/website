import { RegistryUI } from '@/components/layout/Registry';
import { getAssistants } from '@/lib/api/ai-registry/registry';
import { Suspense } from 'react';

export default async function Registry() {
  const data = await getAssistants();

  return (
    <main className='flex flex-col items-center justify-between'>
      <Suspense>
        {data ? (
          <RegistryUI
            agents={data.agents}
            unverifiedAgents={data.unverifiedAgents}
            filters={data.filters}
          />
        ) : null}
      </Suspense>
    </main>
  );
}
