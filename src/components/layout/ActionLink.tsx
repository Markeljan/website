'use client';
import { trackAnalytics } from '@/lib/utils/analytics';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import { Badge } from '@/components/ui/badge';
import { RegistryData } from '@/lib/types/agent.types';

export const ActionLink = ({ agent }: { agent: RegistryData }): JSX.Element => {
  const buttonCss = `flex p-0 repository-link ${buttonVariants({
    variant: 'link',
  })}`;

  const handleActionClick = (type: string) => {
    trackAnalytics(`Detail Page ${type}`, agent.name);
  };

  return (
    <ul>
      <li className='w-full flex mb-5'>
        <div className='text-mb-gray-200 text-sm'>Category</div>
        <div className='text-right text-sm text-mb-white-100 flex ml-auto gap-2'>
          <Badge variant='secondary' className='bg-mb-gray-700 rounded-full'>
            {agent?.category || 'Other'}
          </Badge>
          {agent.verified ? (
            <Badge
              variant='secondary'
              className='bg-[#22C55E33] text-[#22C55E] flex items-center gap-1 rounded-full'
            >
              <CheckCircle2 className='w-3 h-3' />
              Verified
            </Badge>
          ) : (
            <Badge
              variant='secondary'
              className='bg-[#C084FC33] text-[#C084FC] rounded-full'
            >
              Playground
            </Badge>
          )}
        </div>
      </li>

      <li className='w-full flex mb-5'>
        <div className='text-mb-gray-200 text-sm'>Publisher</div>
        <div className='text-right text-sm ml-auto font-semibold'>
          {agent.publisher || 'Bitte'}
        </div>
      </li>

      <li className='w-full flex mb-5'>
        <div className='text-mb-gray-200 text-sm'>Id</div>
        <div className='text-right text-sm ml-auto font-semibold'>
          {agent.id}
        </div>
      </li>

      <li className='w-full flex mb-5'>
        <div className='text-mb-gray-200 text-sm'>Repository</div>
        <div className='text-right text-mb-white-100 text-sm flex ml-auto gap-2'>
          {agent.repoUrl ? (
            <Link
              href={agent.repoUrl}
              target='_blank'
              className={buttonCss}
              onClick={() => handleActionClick('GitHub')}
            >
              GitHub
              <ArrowUpRight width={18} height={18} className='ml-2' />
            </Link>
          ) : (
            <Badge
              variant='secondary'
              className='bg-[#EF444433] text-[#EF4444] rounded-full'
            >
              Closed Source
            </Badge>
          )}
        </div>
      </li>
    </ul>
  );
};
