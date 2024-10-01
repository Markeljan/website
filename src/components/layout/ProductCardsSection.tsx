import { Button } from '../ui/button';
import { productCardsData } from '@/lib/data/productCardsData';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { useState } from 'react';
import { fira } from '@/app/fonts';

export const ProductCardsSection = ({
  data = productCardsData,
  dim = 'opacity-100',
}) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  // Function to handle card click
  const handleCardClick = (url: string) => {
    // Use `window.open` for opening a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className='my-12 md:my-28 px-6 xl:px-40 bg-black w-screen'>
      <p
        className={`${fira.className} text-sm text-mb-gray-300 font-normal text-center uppercase mb-10`}
      >
        {data.title}
      </p>
      <div className='flex lg:flex-row flex-col itmes-center justify-center gap-6'>
        {data.cards.map((data) => (
          <Card
            className='bg-black border border-[#313E52] w-full lg:w-2/3 h-[350px] relative overflow-hidden hover:border-[#E087FFB2] hover:shadow-custom transition-all duration-300 cursor-pointer'
            key={data?.id}
            onMouseEnter={() => setIsHovered(data.id)}
            onMouseLeave={() => setIsHovered(null)}
            onClick={() => handleCardClick(data?.link)}
          >
            {data?.bg &&
              (typeof data.bg === 'string' ? (
                <Image
                  src={data.bg}
                  alt={`background image for ${data.title}`}
                  loading='lazy'
                  height={232}
                  width={415}
                  className={`absolute inset-0 w-full h-full object-cover ${dim}`}
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  className='absolute inset-0 w-full h-full object-cover'
                >
                  <source src={data.bg} type='video/mp4' />
                </video>
              ))}
            <CardContent className='p-6 flex flex-col items-center justify-between gap-6 xl:gap-12 relative overflow-hidden w-full h-full'>
              <span
                className={`${fira.className} bg-[#414D7D33] backdrop-blur-md rounded-full text-white uppercase text-xs py-1.5 px-5`}
              >
                {data?.badge}
              </span>
              <div className='text-center'>
                <p className='text-mb-white-100 font-semibold mb-2 text-[23px]'>
                  {data?.title}
                </p>
                <p className='text-mb-gray-300 lg:text-sm xl:text-base'>
                  {data?.sub}
                </p>
              </div>
              <a href={data?.link} rel='noopener noreferrer' target='_blank'>
                <Button
                  variant='card'
                  className={`w-[135px] z-[52] ${isHovered === data.id ? 'scale-105 text-mb-gray-550 bg-white' : ''}`}
                >
                  Visit
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
