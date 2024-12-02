import { RegistryUI } from '@/components/layout/Registry';
import { getAssistants } from '@/lib/api/ai-registry/registry';

export default async function Registry() {
  const data = await getAssistants();

  return (
    <main className='flex flex-col items-center justify-between'>
      {data ? (
        <RegistryUI
          agents={data.agents}
          unverifiedAgents={data.unverifiedAgents}
          filters={data.filters}
        />
      ) : null}
    </main>
  );
}
