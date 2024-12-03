import { RegistryData } from '@/lib/types/agent.types';
import { shortenString } from '@/lib/utils/strings';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage } from '../avatar';

const AgentCard = ({ agent }: { agent: RegistryData }): JSX.Element | null => {
  const defaultHref = `/registry/${agent?.id}`;

  if (!agent) return null;
  const coverImage = agent?.coverImage
    ? agent.coverImage.startsWith('http')
      ? agent.coverImage
      : `/${agent.coverImage.replace(/^\//, '')}`
    : '/logo.svg';

  return (
    <div className='rounded-md cursor-pointer bg-gradient-to-b from-mb-gray-750 to-mb-gray-650 p-[1px] h-fit w-full hover:bg-mb-gray-450 transition-all duration-500'>
      <Link href={defaultHref}>
        <div className='bg-mb-gray-900 p-6 rounded-md hover:bg-mb-gray-1000 transition-all duration-500'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between items-center text-white'>
              <div className='flex items-center gap-4 flex-1'>
                <div className='h-[64px] w-[64px] relative'>
                  <Image
                    src={coverImage}
                    alt={agent?.id || 'agent'}
                    fill={true}
                    className='rounded-sm'
                    unoptimized
                  />
                </div>
                <div className='flex-1'>
                  <div className='font-semibold text-[18px] md:text-[20px]'>
                    {agent?.name}
                  </div>
                  <div className='text-mb-gray-400 lg:hidden text-[14px]'>
                    By {agent?.author}
                  </div>
                </div>
              </div>
              <div className='hidden lg:flex items-center gap-4'>
                <Button
                  variant='secondary'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = defaultHref;
                  }}
                >
                  Run Agent
                </Button>
              </div>
            </div>
            <div className='h-[64px] md:h-[54px]'>
              <div className='text-mb-gray-200 line-clamp-5 text-[14px]'>
                <div className='hidden md:block'>
                  {shortenString(agent?.description || '')}{' '}
                </div>
                <div className='md:hidden'>
                  {shortenString(agent?.description || '', 120)}
                </div>
              </div>
            </div>
            <div className='flex lg:hidden items-center justify-between mt-5'>
              <Button
                variant='secondary'
                className={agent?.id === 'simple-token-drop' ? 'hidden' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.href = defaultHref;
                }}
              >
                Run Agent
              </Button>
            </div>
            <div className='text-mb-gray-200 text-[14px] hidden lg:flex items-center mt-2'>
              By
              <Avatar className='bg-mb-gray-700 p-[2px] h-6 w-6 ml-2 mr-0.5'>
                <AvatarImage src='/logo.svg' alt='bitte' />
              </Avatar>
              <span className='mr-3'>{agent?.author}</span>
              {agent.category && (
                <Badge
                  variant='secondary'
                  className='bg-mb-gray-700 rounded-full mr-2'
                >
                  {agent.category}
                </Badge>
              )}
              {agent.verified ? (
                <Badge
                  variant='secondary'
                  className='bg-[#22C55E33] text-[#22C55E] flex items-center gap-1 rounded-full mr-2'
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AgentCard;
