'use client';

import { productCardsData } from '@/lib/data/productCardsData';
import { ExamplesSection } from './ExamplesSection';
import { NumbersSection } from './NumbersSection';
import { PartnersSection } from './PartnersSection';
import TextSection from './TextSection';
import { ProductCardsSection } from './ProductCardsSection';
import { SupportedChainsSection } from './SupportedChainsSection';
import { MB_URL } from '@/lib/url';
import { newsCardData } from '@/lib/data/dropCardData';
import { AgentSection } from './AgentSection';

const paymasterSection = {
  title: 'Any API can become an AI agent',
  subHeader:
    'Explore existing agents or create your own. We make it simple to infuse AI capabilities into any API.',
  factTitle: 'Sponsored Relays',
  fact: '+250k',
  btnTitle: 'Sponsor Now',
  btnUrl: MB_URL.PAYMASTER,
  isDisabled: false,
};

const crossSection = {
  title: 'Universal Accounts with Chain Abstraction',
  subHeader: "One account to rule them all, with ERC-4337 Safe's on EVMs.",
  factTitle: '',
  fact: '',
  btnTitle: 'Try Now',
  btnUrl: MB_URL.BITTE_WALLET,
  isDisabled: false,
};

export const HomeComponent = () => {
  return (
    <>
      <SupportedChainsSection />
      <TextSection {...crossSection} />
      <AgentSection />
      <ProductCardsSection data={productCardsData} />

      <ExamplesSection />
      <TextSection {...paymasterSection} />
      <ExamplesSection data={newsCardData} />

      <NumbersSection />
      <PartnersSection />
    </>
  );
};
