'use client';
import { Button } from '@/components/ui/button';
import { MB_URL } from '@/lib/url';

const Paymaster = () => {
  return (
    <div className='p-5 sm:w-full md:w-5/6 lg:w-4/6 my-5 md:my-40'>
      <div className='video-responsive flex justify-center '>
        <video
          poster='/video/paymaster-thumb.jpg'
          loop
          controls
          playsInline
          muted={false}
          className='w-screen h-full object-cover rounded-lg border border-[#313E52]'
        >
          <source src='/video/paymaster.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='text-center md:my-11 w-full'>
        <p className='pt-6 font-semibold text-white text-[32px] md:text-[40px] leading-tight  mx-auto  '>
          Paymaster
        </p>
        <p className='text-mb-gray-300 md:text-[20px] font-normal mt-4 leading-tight mx-auto px-5 max-w-[780px]'>
          Fund gasless transactions for your community on any NEAR smart
          contract and enable or disable specific functions.
        </p>
        <div className='mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 z-10  drop-shadow-xl'>
          <p className='font-normal text-white z-10'>
            Total Transactions Relayed
          </p>
          <span className='font-semibold text-[24px] text-white'>~170K</span>
        </div>
        <div className='mt-8 flex justify-center'>
          <Button
            variant='secondary'
            className='w-full md:w-[200px] text-white hover:text-black bg-[#414D7D40] border border-[#313E52]'
            onClick={() =>
              window.open(MB_URL.PAYMASTER, '_blank', 'noopener,noreferrer')
            }
          >
            Fund Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Paymaster;
