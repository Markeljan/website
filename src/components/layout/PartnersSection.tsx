import { partnerData } from '@/lib/data/partnerData';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { fira } from '@/app/fonts';
import { useEffect, useRef } from 'react';

export const PartnersSection = () => {
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
    <section className='relative my-40'>
      <p
        className={`${fira.className} text-sm text-mb-gray-300 font-normal text-center uppercase mb-10`}
      >
        Our Partners & Backers
      </p>
      <div className='absolute left-0 top-0 bottom-0 w-16 pointer-events-none bg-gradient-to-r from-black to-transparent z-10'></div>
      <div className='absolute right-0 top-0 bottom-0 w-16 pointer-events-none bg-gradient-to-l from-black to-transparent z-10'></div>
      <div
        className='flex itmes-center gap-6 max-w-[100vw] overflow-x-auto disable-scrollbars'
        ref={scrollContainerRef}
        style={{ scrollBehavior: 'auto' }}
      >
        {[...partnerData, ...partnerData]?.map((data, i) => (
          <Card
            className='bg-black border border-[#313E52] min-w-[195px] h-[95px]  flex flex-col items-center justify-center'
            key={`partners-${i}`}
          >
            <CardContent className='text-center p-4'>
              <div style={{ transform: `scale(${data.scale})` }}>
                <Image
                  src={data?.logo}
                  className='object-contain max-h-[60px] max-w-[160px] min-h-[40px] min-w-[140px]'
                  width={160}
                  height={60}
                  alt={`${data?.id}-logo`}
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
