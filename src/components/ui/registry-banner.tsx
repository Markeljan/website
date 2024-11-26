import Link from 'next/link';
import { Button } from './button';

export const RegistryBanner = () => {
  return (
    <section className='mb-20'>
      <div className='relative rounded-md border border-mb-gray-800 h-fit w-full bg-mb-gray-900 h-[344px] sm:h-[324px] hover:bg-mb-gray-1000 transition-all duration-500'>
        <Link href='https://docs.bitte.ai/' className='flex justify-between items-center'>
          <div className='p-7 md:py-16 md:px-14 flex flex-col w-full lg:w-[600px] z-10'>
            <span className='text-3xl font-semibold mb-6'>
              Any API can become an agent
            </span>
            <span className='text-xl text-mb-gray-300 mb-9'>
              Contribute to the growing ecosystem, and earn monetary rewards by
              building agents.
            </span>
            <div>
              <Button variant='default' size='lg'>
                Learn More
              </Button>
            </div>
          </div>
          <div className='absolute top-0 right-0 z-0'>
            <img 
              src='/registry_banner.svg' 
              className='hidden lg:block' 
              alt="Registry banner"
            />
            <img
              src='/registry_banner_mobile.svg'
              className='lg:hidden max-h-[300px]'
              alt="Registry banner mobile" 
            />
          </div>
        </Link>
      </div>
    </section>
  );
};
