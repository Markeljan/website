'use client';

import { MB_URL } from '@/lib/url';
import { Button } from '../ui/button';
import AiSection from './AiSection';

const Hero = () => {
  // Function to handle card click
  const handleCardClick = (url: string) => {
    // Use `window.open` for opening a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            <div className='mt-8'>
              <Button
                variant='outline'
                className='shadow-lg text-white hover:text-black bg-black bg-opacity-55 hover:bg-white border border-[#313E52] p-6'
                onClick={() => handleCardClick(`${MB_URL.DEV_DOCS}`)}
              >
                Build a Chain Agent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
