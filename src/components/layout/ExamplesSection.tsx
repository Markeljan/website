import { fira } from '@/app/fonts';
import { dropCardData } from '@/lib/data/dropCardData';
import { useWindowSize } from '@/lib/utils/useWindowSize';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export const ExamplesSection = ({ data = dropCardData }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const { width } = useWindowSize();
  const isMobile = !!width && width < 640;

  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
      setIsAtStart(true);
      setIsAtEnd(false);
    }
  };

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left:
          scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth,
        behavior: 'smooth',
      });
      setIsAtStart(false);
      setIsAtEnd(true);
    }
  };

  // Function to handle card click
  const handleCardClick = (url: string) => {
    // Use `window.open` for opening a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const goToSmartActions = (link: string, message: string) => {
    const encodedPrompt = encodeURIComponent(message);
    window.open(`${link}/${encodedPrompt}`, '_blank');
  };

  useEffect(() => {
    const currentRef = scrollContainerRef.current;

    const handleScroll = () => {
      if (currentRef) {
        const { scrollLeft, scrollWidth, clientWidth } = currentRef;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft === scrollWidth - clientWidth);
      }
    };

    currentRef?.addEventListener('scroll', handleScroll);

    return () => {
      currentRef?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='relative w-screen py-40 overflow-hidden'>
      <div className='flex justify-center sm:justify-between items-center mb-10 px-16	'>
        <p
          className={`${fira.className} text-sm text-mb-gray-300 font-normal uppercase`}
        >
          {data.title}
        </p>
        <div className='hidden lg:flex gap-4'>
          <Button
            variant='arrow'
            size='icon'
            onClick={scrollToLeft}
            disabled={isAtStart}
          >
            <ArrowLeft width={18} height={18} />
          </Button>
          <Button
            variant='arrow'
            size='icon'
            onClick={scrollToRight}
            disabled={isAtEnd}
          >
            <ArrowRight width={18} height={18} />
          </Button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className='flex overflow-x-scroll overflow-hidden disable-scrollbars relative -mx-6 md:-mx-20 pl-6'
      >
        {data.cards.map((card) => (
          <Card
            className='relative bg-black border border-[#313E52] w-9/12 md:w-1/2 lg:w-[28%] h-[272px] sm:h-[420px] flex-shrink-0 snap-center hover:border-[#E087FFB2] hover:shadow-custom transition-all duration-300 cursor-pointer ml-4 first:ml-6 last:mr-12 md:first:ml-28 md:last:mr-36 overflow-hidden'
            key={card?.id}
            onMouseEnter={() => setIsHovered(card.id)}
            onMouseLeave={() => setIsHovered(null)}
            onClick={
              card.isSA
                ? () => goToSmartActions(card.link, card.action)
                : () => handleCardClick(card?.link)
            }
          >
            <div className='absolute inset-0 z-0'>
              <Image
                src={card.bg}
                alt={`background image for ${card.action}`}
                loading='lazy'
                layout={card.bg.includes('.svg') ? 'intrinsic' : 'fill'}
                objectFit={card.bg.includes('.svg') ? 'contain' : 'cover'}
                width={
                  card.bg.includes('.svg') ? (isMobile ? 180 : 260) : undefined
                }
                height={card.bg.includes('.svg') ? 72 : undefined}
                className={`z-10 ${card.bg.includes('.svg') ? 'absolute inset-0 m-auto ' : ''}`}
              />
              {card.gradientLayer && (
                <div className='absolute inset-0 gradient-overlay opacity-50 z-20'></div>
              )}
            </div>
            <CardContent className='p-[18px] flex flex-col justify-between relative overflow-hidden w-full h-full z-30'>
              <div className='flex justify-between items-center'>
                <span
                  className={`${fira.className} bg-[#414D7D33] backdrop-blur-md rounded-full text-white uppercase text-xs py-1.5 px-5 self-start`}
                >
                  {card?.badge}
                </span>
                {card?.sub && isMobile && (
                  <p className='text-white text-sm font-semibold'>
                    {card?.sub}
                  </p>
                )}
              </div>
              <div className='flex justify-center sm:justify-between sm:h-full'>
                <div
                  className={`sm:self-end min-w-full sm:min-w-[135px] sm:max-w-[300px] px-3 py-2.5 border border-[#313E52] hover:border-none rounded-[10px] flex items-center justify-center ease-out ${isHovered === card.id ? 'bg-white text-mb-gray-550 border-none' : 'bg-[#414D7D40] backdrop-blur-md text-mb-white-100'} transition-all duration-500 ease-in-out`}
                >
                  <p className='text-sm font-normal'>{card?.action}</p>
                </div>
                {card?.sub && !isMobile && (
                  <div className='self-end'>
                    <p className='text-white text-sm font-semibold'>
                      {card?.sub}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='mt-8 flex justify-center px-6'>
        <Button
          variant='secondary'
          className='w-full md:w-[200px] text-white hover:text-black bg-[#414D7D40] border border-[#313E52]'
          onClick={() => handleCardClick(data.btnUrl)}
        >
          {data.btnTitle}
        </Button>
      </div>
    </section>
  );
};
