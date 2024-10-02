'use client';

import {
  newsletterCardsData,
  productCardsData,
} from '@/lib/data/productCardsData';
import { ExamplesSection } from './ExamplesSection';
import { NumbersSection } from './NumbersSection';
import { PartnersSection } from './PartnersSection';
import VideoSection from './VideoSection';
import { ProductCardsSection } from './ProductCardsSection';
import { SupportedChainsSection } from './SupportedChainsSection';
import { MB_URL } from '@/lib/url';

const paymasterSection = {
  thumb: '/video/paymaster-thumb.jpg',
  src: '/video/paymaster.mp4',
  title: 'Paymaster',
  subHeader:
    'Fund gasless transactions for your community on any NEAR smart contract and enable or disable specific functions.',
  factTitle: 'Sponsored Relays',
  fact: '+250k',
  btnTitle: 'Sponsor Now',
  btnUrl: MB_URL.PAYMASTER,
  isDisabled: false,
};

const crossSection = {
  thumb: '/video/cross-thumb.jpg',
  src: '/video/cross-chain.mp4',
  title: 'Chain Abstraction',
  subHeader: "One account to rule them all, with Gnosis Safe's on EVMs.",
  factTitle: '',
  fact: 'Coming October 2024',
  btnTitle: 'Coming October',
  btnUrl: MB_URL.PAYMASTER,
  isDisabled: true,
};

export const HomeComponent = () => {
  return (
    <>
      <div className='z-20'>
        <ProductCardsSection data={productCardsData} />
      </div>

      <ExamplesSection />
      <VideoSection {...crossSection} />
      <SupportedChainsSection />

      <NumbersSection />
      <VideoSection {...paymasterSection} />

      <ProductCardsSection data={newsletterCardsData} dim='opacity-50' />
      <PartnersSection />
    </>
  );
};
