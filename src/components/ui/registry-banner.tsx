import Link from 'next/link';
import { Button } from './button';

export const RegistryBanner = () => {
  return (
    <section className='mb-20 mt-9 md:mt-12'>
      <div className='relative rounded-md border border-mb-gray-800 h-fit w-full bg-mb-gray-900 h-[344px] sm:h-[324px] bg-cover bg-no-repeat lg:bg-[url("/registry_banner.svg")] bg-[url("/registry_banner_mobile.svg")]'>
        <Link
          href='https://docs.bitte.ai/'
          className='flex justify-between items-center'
        >
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
          {/*           <div className='absolute top-0 right-0 z-0'>
            <img
              src='/registry_banner.svg'
              className='hidden lg:block'
              alt='Registry banner'
            />
            <img
              src='/registry_banner_mobile.svg'
              className='lg:hidden h-full'
              alt='Registry banner mobile'
            />
          </div> */}
        </Link>
      </div>
    </section>
  );
};
