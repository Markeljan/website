import { fira } from '@/app/fonts';
import { numbersData } from '@/lib/data/numbersData';
import { Card, CardContent } from '../ui/card';

export const NumbersSection = () => {
  return (
    <section className='w-full'>
      <div className='my-12 md:my-32 px-6 relative w-screen'>
        <p
          className={`${fira.className} text-sm text-mb-gray-300 font-normal text-center uppercase mb-10`}
        >
          The Numbers
        </p>
        {/* <video
          autoPlay
          playsInline
          loop
          muted
          className='absolute object-cover w-screen h-full top-0 right-0 left-0 -z-20'
        >
          <source src='/video/lights.mp4' type='video/mp4' />
        </video> */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-20 lg:px-12 xl:px-64'>
          {numbersData?.map((data) => (
            <Card
              className='bg-black bg-opacity-70	 border border-[#313E52] md:min-w-[252px]'
              key={data?.id}
            >
              <CardContent className='p-4'>
                <p className='text-mb-gray-300 text-base'>{data.label}</p>
                <p className='text-white text-[24px] font-semibold mt-auto'>
                  {data.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
