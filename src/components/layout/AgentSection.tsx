/* import { fira } from '@/app/fonts'; */
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { AgentData } from './Home';
import { Button } from '../ui/button';

export const AgentSection = ({ agentData }: { agentData: AgentData }) => {
  const scrollContainerRef1 = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);

  console.log('AI ASS DATA', agentData);

  useEffect(() => {
    const scrollStep = (
      scrollContainer: HTMLDivElement | null,
      direction: 'left' | 'right'
    ) => {
      if (scrollContainer) {
        const scrollAmount = 1; // Adjust the speed of scrolling here
        if (direction === 'right') {
          // For the right direction, increase scrollLeft
          if (
            scrollContainer.scrollLeft >=
            scrollContainer.scrollWidth - scrollContainer.clientWidth
          ) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += scrollAmount;
          }
        } else {
          // For the left direction, decrease scrollLeft
          if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft =
              scrollContainer.scrollWidth - scrollContainer.clientWidth;
          } else {
            scrollContainer.scrollLeft -= scrollAmount;
          }
        }
      }
    };

    const step = () => {
      scrollStep(scrollContainerRef1.current, 'right');
      scrollStep(scrollContainerRef2.current, 'left'); // This row will move in the opposite direction
      window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, []);

  return (
    <section className='relative my-12'>
      <div className='absolute left-0 top-0 bottom-0 w-16 pointer-events-none bg-gradient-to-r from-black to-transparent z-10'></div>
      <div className='absolute right-0 top-0 bottom-0 w-16 pointer-events-none bg-gradient-to-l from-black to-transparent z-10'></div>
      <div
        className='flex itmes-center gap-3 max-w-[100vw] overflow-x-auto disable-scrollbars mb-3'
        ref={scrollContainerRef1}
        style={{ scrollBehavior: 'auto' }}
      >
        {agentData.agents?.map((data, i) => (
          <Card
            key={`agents-${i}`}
            className={`min-w-[307px] h-[76px] flex items-center bg-[#18181A]`}
          >
            <CardContent className='text-center p-3 flex items-center gap-3'>
              <div>
                <Image
                  src={data?.image || '/bitte-symbol-black.svg'}
                  className={`object-contain max-h-[56px] max-w-[160px] min-h-[40px] ${!data?.image ? 'bg-white' : ''}`}
                  width={56}
                  height={56}
                  alt={`${data?.id}-logo`}
                  loading='lazy'
                />
              </div>
              <div className='font-medium text-[#F8FAFC]'>{data?.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div
        className='flex itmes-center gap-3 max-w-[100vw] overflow-x-auto disable-scrollbars'
        ref={scrollContainerRef2}
        style={{ scrollBehavior: 'auto', paddingLeft: '50px' }}
      >
        {[...agentData.agents]?.reverse().map((data, i) => (
          <Card
            key={`agents-${i}`}
            className={`min-w-[307px] h-[76px] flex items-center bg-[#18181A]`}
          >
            <CardContent className='text-center p-3 flex items-center gap-3'>
              <div>
                <Image
                  src={data?.image || '/bitte-symbol-black.svg'}
                  className={`object-contain max-h-[56px] max-w-[160px] min-h-[40px] ${!data?.image ? 'bg-white' : ''}`}
                  width={56}
                  height={56}
                  alt={`${data?.id}-logo`}
                  loading='lazy'
                />
              </div>
              <div className='font-medium text-[#F8FAFC]'>{data?.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='mt-11 flex items-center justify-center gap-6'>
        <Button
          variant='default'
          className='w-full md:w-[200px]'
          /* onClick={() => handleCardClick(data.btnUrl)} */
        >
          Browse Agents
        </Button>
        <Button
          variant='secondary'
          className='w-full md:w-[200px]'
          /* onClick={() => handleCardClick(data.btnUrl)} */
        >
          Docs
        </Button>
      </div>
    </section>
  );
};
