'use client';

import {
  newsletterCardsData,
  productCardsData,
} from '@/lib/data/productCardsData';
import { ExamplesSection } from './ExamplesSection';
import { NumbersSection } from './NumbersSection';
import { PartnersSection } from './PartnersSection';
import Paymaster from './Paymaster';
import { ProductCardsSection } from './ProductCardsSection';
import { SupportedChainsSection } from './SupportedChainsSection';

export const HomeComponent = () => {
  return (
    <>
      <div className='z-20'>
        <ProductCardsSection data={productCardsData} />
      </div>
      <SupportedChainsSection />

      <ExamplesSection />
      <Paymaster />
      <NumbersSection />
      <ProductCardsSection data={newsletterCardsData} dim='opacity-50' />
      <PartnersSection />
    </>
  );
};
