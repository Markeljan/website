'use client';

import { MB_URL } from '@/lib/url';
import Link from 'next/link';
import { Button } from '../ui/button';
import AiSection from './AiSection';

const Hero = () => {
  return (
    <section className='w-full'>
      <div className='relative w-screen  h-full'>
        <video
          autoPlay
          loop
          playsInline
          muted
          className='absolute w-screen h-full object-cover border-b border-[#313E52] opacity-20'
        >
          <source src='/video/brains.mp4' type='video/mp4' />
        </video>
        <div className='flex justify-center flex-col text-center items-center px-8 pt-14 md:pt-12 lg:pt-12 xl:pt-24  2xl:pt-40  py-28'>
          <div className='z-10 md:pointer-events-none'>
            <p className='font-semibold text-white text-[32px] md:text-[40px] leading-tight mx-auto '>
              Talk with Blockchains Using AI
            </p>
            <p className='text-mb-gray-300 md:text-[22px] font-normal mt-4 leading-tight drop-shadow-2xl'>
              On-chain agent market for transaction building with Universal Safe
              Accounts
            </p>
          </div>
          <div className='text-center mt-6 z-10 '>
            <AiSection />
            <div className='flex justify-center'>
              <div className='mt-8 mr-5'>
                <a href={MB_URL.DEV_DOCS} target='_blank'>
                  <Button
                    variant='outline'
                    className='shadow-lg text-white hover:text-black bg-black bg-opacity-55 hover:bg-white border border-[#313E52] p-6'
                  >
                    Build Chain Agent
                  </Button>
                </a>
              </div>
              <div className='mt-8'>
                <Link href={MB_URL.REGISTRY}>
                  <Button
                    variant='outline'
                    className='shadow-lg text-white hover:text-black bg-black bg-opacity-55 hover:bg-white border border-[#313E52] p-6'
                  >
                    Agent Registry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
