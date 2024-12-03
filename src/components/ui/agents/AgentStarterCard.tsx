'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../button';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

export const AgentStarterCard = (): JSX.Element => {
  const starterAgent = {
    name: 'Agent Starter',
    coverImage: '/logo.svg',
    description:
      'Create your own AI agent in minutes. Our starter template provides everything you need to build, test and deploy custom AI agents',
    detailImage: '/detail-placeholder.webp',
  };

  return (
    <section className='lg:w-[600px] flex flex-col gap-4 items-center mx-auto'>
      <p className='text-mb-gray-300 text-[16px] md:text-[20px] font-semibold'>
        Get Started
      </p>
      <div className='rounded-md cursor-pointer bg-gradient-to-b from-mb-gray-750 to-mb-gray-650 p-[1px] h-fit w-full hover:bg-mb-gray-450 transition-all duration-500'>
        <Link href='/registry/agent-starter'>
          <div className='bg-mb-gray-900 p-6 rounded-md hover:bg-mb-gray-1000 transition-all duration-500'>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between items-center text-white'>
                <div className='flex items-center gap-4'>
                  <div className='h-[64px] w-[64px] relative'>
                    <Image
                      src={starterAgent.coverImage}
                      alt='Agent Starter'
                      fill={true}
                      className='rounded-sm'
                      unoptimized
                    />
                  </div>
                  <div className='xl:w-[124px]'>
                    <div className='font-semibold text-[18px] md:text-[20px]'>
                      {starterAgent.name}
                    </div>
                  </div>
                </div>
                <div className='hidden lg:flex items-center gap-4'>
                  <Button
                    variant='card'
                    className='bg-mb-blue w-[140px]'
                    size='lg'
                  >
                    Start
                  </Button>
                </div>
              </div>
              <div className='h-[64px] md:h-[54px]'>
                <div className='text-mb-gray-200 line-clamp-5 text-[14px]'>
                  <div className='hidden md:block'>
                    {starterAgent.description}
                  </div>
                  <div className='md:hidden'>
                    {starterAgent.description.slice(0, 120)}
                  </div>
                </div>
              </div>
              <div className='flex lg:hidden items-center justify-center mt-5'>
                <Button variant='card' className='bg-mb-blue w-full' size='lg'>
                  Start
                </Button>
              </div>
            </div>
            <div className='text-mb-gray-200 text-[14px] hidden lg:flex items-center mt-2'>
              By
              <Avatar className='bg-mb-gray-700 p-[2px] h-6 w-6 ml-2 mr-0.5'>
                <AvatarImage src='/logo.svg' alt='bitte' />
              </Avatar>
              <span className='mr-3'>{'Bitte'}</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
