'use client';
import { Button } from '@/components/ui/button';

const TextSection = ({
  title,
  subHeader,
  factTitle,
  fact,
  btnTitle,
  btnUrl,
  isDisabled,
  noSpacing,
}: {
  title: string;
  subHeader: string;
  factTitle?: string;
  fact?: string;
  btnTitle?: string;
  btnUrl?: string;
  isDisabled?: boolean;
  noSpacing?: boolean;
}) => {
  return (
    <div
      className={`p-5 sm:w-full md:w-5/6 lg:w-4/6 ${noSpacing ? '' : 'my-5 md:my-40'}`}
    >
      <div className='text-center md:my-11 w-full'>
        <p className='pt-6 font-semibold text-white text-[32px] md:text-[40px] leading-tight mx-auto max-w-[400px]'>
          {title}
        </p>
        <p className='text-mb-gray-300 md:text-[20px] font-normal mt-4 leading-tight mx-auto px-5 max-w-[650px]'>
          {subHeader}
        </p>
        <div className='mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 z-10  drop-shadow-xl'>
          <p className='font-normal text-white z-10'>{factTitle}</p>
          <span className='font-semibold text-[24px] text-white'>{fact}</span>
        </div>
        {!isDisabled && btnTitle && btnUrl && (
          <div className='mt-8 flex justify-center'>
            <Button
              variant='secondary'
              disabled={isDisabled}
              className='w-full md:w-[200px] text-white hover:text-black bg-[#414D7D40] border border-[#313E52]'
              onClick={() =>
                window.open(btnUrl, '_blank', 'noopener,noreferrer')
              }
            >
              {btnTitle}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSection;
