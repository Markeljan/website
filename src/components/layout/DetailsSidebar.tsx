import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { RegistryData } from '@/lib/types/agent.types';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ActionLink } from './ActionLink';

export const DetailsSideBar = ({ agent }: { agent: RegistryData }) => {
  if (!agent) return null;

  return (
    <aside className='sticky py-6 md:py-16 top-0'>
      <Link href='/registry' className='w-[200px] flex mb-8'>
        <Button variant='link' className='text-mb-white-100'>
          <ArrowLeft width={18} height={18} className='mr-2' /> Back to Registry
        </Button>
      </Link>

      <div className='flex w-full items-center gap-7'>
        <div className='w-[75px] h-[75px] relative aspect-square shrink-0'>
          <Image
            alt={agent.name}
            src={agent.coverImage || '/bitte-avatar.svg'}
            fill={true}
            className='rounded-sm'
          />
        </div>
        <h1 className='text-4xl w-auto font-semibold'>{agent.name}</h1>
      </div>
      <div className='mt-10'>
        <ActionLink agent={agent} />
      </div>
    </aside>
  );
};
