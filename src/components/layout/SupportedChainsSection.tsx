import { fira } from '@/app/fonts';
import { chainData } from '@/lib/data/chainData';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '../ui/card';

export const SupportedChainsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = 1; // Adjust the speed of scrolling here
      const step = () => {
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          // Reset scroll to the start
          scrollContainer.scrollLeft = 0;
        } else {
          // Move the scroll
          scrollContainer.scrollLeft += scrollAmount;
        }
        window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
    }
  }, []);

  return (
    <section className='relative my-12 md:my-20 md:mb-40'>
      <p
        className={`${fira.className} text-sm text-mb-gray-300 font-normal text-center uppercase mb-10`}
      >
        Supported Chains
      </p>
      <div className='absolute left-0 top-0 bottom-0 w-16 pointer-events-none bg-gradient-to-r from-black to-transparent z-10'></div>
      <div className='absolute right-0 top-0 bottom-0 w-16 pointer-events-none bg-gradient-to-l from-black to-transparent z-10'></div>
      <div
        className='flex itmes-center gap-6 max-w-[100vw] overflow-x-auto disable-scrollbars'
        ref={scrollContainerRef}
        style={{ scrollBehavior: 'auto' }}
      >
        {[...chainData, ...chainData]?.map((data, i) => (
          <Card
            className={`border border-[#313E52] min-w-[195px] h-[95px] flex flex-col items-center justify-center`}
            key={`chains-${i}`}
          >
            <CardContent className='text-center p-4'>
              <div style={{ transform: `scale(${data.scale})` }}>
                <Image
                  src={data?.logo}
                  className='object-contain max-h-[60px] max-w-[160px] min-h-[40px] min-w-[140px]'
                  width={160}
                  height={60}
                  alt={`${data?.logo}-logo`}
                  loading='lazy'
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
