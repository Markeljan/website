'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { communityLinks, developerLinks } from '@/lib/data/navData';
import { useEffect } from 'react';
import { fira } from '@/app/fonts';
import { MB_URL } from '@/lib/url';

declare global {
  interface Window {
    CustomSubstackWidget: {
      substackUrl: string;
      placeholder: string;
      buttonText: string;
      theme: string;
      colors: {
        primary: string;
        input: string;
        email: string;
        text: string;
      };
    };
  }
}

const Footer = () => {
  useEffect(() => {
    // Function to load the Substack script
    const loadSubstackScript = () => {
      const script = document.createElement('script');
      script.src = 'https://substackapi.com/widget.js';
      script.async = true;

      document.body.appendChild(script);

      // Initialize the widget configuration
      window.CustomSubstackWidget = {
        substackUrl: 'mintbase.substack.com',
        placeholder: 'Email',
        buttonText: 'Keep Up To Date',
        theme: 'custom',
        colors: {
          primary: '#263040',
          input: '#000000',
          email: '#A0A0A9',
          text: '#FFFFFF',
        },
      };

      return () => {
        // Cleanup the script when the component unmounts
        document.body.removeChild(script);
      };
    };

    // Load the script when the component mounts
    loadSubstackScript();
  }, []);

  return (
    <footer className='w-full border-t border-mb-gray-800 bg-black py-12 flex flex-col items-center'>
      <div className='footer-wrapper w-full'>
        <div className='flex flex-col md:flex-row items-center md:justify-between bg-black px-6 md:px-16 pb-12 h-full mx-auto'>
          <div className='max-w-[210px] text-sm mb-6 md:mb-0'>
            <p className='text-mb-white-100'>Sign up to our newsletter</p>
            <p className='text-mb-gray-300 mt-3'>
              {`Get product updates and news, we won't spam you.`}
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-3 items-center w-full md:w-auto'>
            <div
              id='custom-substack-embed'
              className='w-full md:w-[435px]'
            ></div>
          </div>
        </div>
      </div>
      <div className='px-6 md:px-16 mx-auto pt-12 bg-black border-t border-mb-gray-800 w-full footer-container'>
        <div className='footer-wrapper flex flex-col md:flex-row md:justify-between md:items-center'>
          <Link
            href='/'
            className='flex items-center h-full order-last md:order-first mt-12 md:mt-0'
          >
            <img src='/bitte.svg' alt='bitte-logo' width={120} height={36} />
          </Link>

          <div className='grid grid-cols-2 gap-20 md:grid-cols-4 order-first md:order-last'>
            <div className='flex flex-col gap-4'>
              <p
                className={`${fira.className} uppercase text-sm text-mb-white-100 font-medium`}
              >
                Products
              </p>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href={MB_URL.BITTE_WALLET}
              >
                Wallet <ArrowUpRight size={14} color='#475569' />
              </a>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href={MB_URL.TEMPLATES_URL}
              >
                Templates <ArrowUpRight size={14} color='#475569' />
              </a>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href={MB_URL.MINTBASE_OMNI}
              >
                Marketplace <ArrowUpRight size={14} color='#475569' />
              </a>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href={MB_URL.PAYMASTER}
              >
                Paymaster <ArrowUpRight size={14} color='#475569' />
              </a>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href={MB_URL.AI_DOCS}
              >
                Docs <ArrowUpRight size={14} color='#475569' />
              </a>
            </div>
            <div className='flex flex-col gap-4'>
              <p
                className={`${fira.className} uppercase text-sm text-mb-white-100 font-medium`}
              >
                Developers
              </p>
              {developerLinks?.map((devItem) => (
                <a
                  key={devItem?.title}
                  className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                  rel='noopener noreferrer'
                  target='_blank'
                  href={devItem?.href}
                >
                  {devItem?.title} <ArrowUpRight size={14} color='#475569' />
                </a>
              ))}
            </div>
            <div className='flex flex-col gap-4'>
              <p
                className={`${fira.className} uppercase text-sm text-mb-white-100 font-medium`}
              >
                Community
              </p>
              {communityLinks?.map((communityItem) => (
                <a
                  key={communityItem?.title}
                  className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                  rel='noopener noreferrer'
                  target='_blank'
                  href={communityItem?.href}
                >
                  {communityItem?.title}{' '}
                  <ArrowUpRight size={14} color='#475569' />
                </a>
              ))}
            </div>
            <div className='flex flex-col gap-4'>
              <p
                className={`${fira.className} uppercase text-sm text-mb-white-100 font-medium`}
              >
                Company
              </p>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href={MB_URL.WHITE_PAPER}
              >
                White Paper <ArrowUpRight size={14} color='#475569' />
              </a>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href={MB_URL.GRANTS}
              >
                Grants <ArrowUpRight size={14} color='#475569' />
              </a>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href='https://wellfound.com/company/mintbase/jobs'
              >
                Careers <ArrowUpRight size={14} color='#475569' />
              </a>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href='https://mintbase.substack.com/'
              >
                Blog <ArrowUpRight size={14} color='#475569' />
              </a>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href='https://bitte.ai/brand/bitte_press_kit.zip'
              >
                Press Kit <ArrowUpRight size={14} color='#475569' />
              </a>
              <a
                className='text-sm text-mb-gray-300 hover:text-mb-white-100 hover-icon font-medium flex items-center gap-2 transition-all duration-300'
                rel='noopener noreferrer'
                target='_blank'
                href='https://docs.mintbase.xyz/privacy-policy-and-terms-of-service'
              >
                Privacy Policy <ArrowUpRight size={14} color='#475569' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
