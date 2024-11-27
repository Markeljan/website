'use client';

import { productCardsData } from '@/lib/data/productCardsData';
import { ExamplesSection } from './ExamplesSection';
import { NumbersSection } from './NumbersSection';
import { PartnersSection } from './PartnersSection';
import TextSection from './TextSection';
import { ProductCardsSection } from './ProductCardsSection';
import { SupportedChainsSection } from './SupportedChainsSection';
import { newsCardData } from '@/lib/data/dropCardData';
import { videosCardData } from '@/lib/data/dropCardData';
import { AgentSection } from './AgentSection';
import { BitteAssistantConfig } from '@/lib/api/ai-agents/getAiAgents';

export type AgentData = {
  agents: BitteAssistantConfig[];
  unverifiedAgents: BitteAssistantConfig[];
};

const paymasterSection = {
  title: 'Any API can become an AI agent',
  subHeader:
    'Explore existing agents or create your own. We make it simple to infuse AI capabilities into any API.',
  factTitle: '',
  fact: '',
  isDisabled: false,
  noSpacing: true,
};

const crossSection = {
  title: 'Any API can become an AI agent',
  subHeader:
    'Explore existing agents or create your own. We make it simple to infuse AI capabilities into any API.',
  factTitle: '',
  fact: '',
  isDisabled: false,
  noSpacing: true,
};

export const HomeComponent = ({ agentData }: { agentData: AgentData }) => {
  return (
    <>
      <SupportedChainsSection />
      <TextSection {...crossSection} />
      <AgentSection agentData={agentData} />
      <ProductCardsSection data={productCardsData} />

      <ExamplesSection />
      <TextSection {...paymasterSection} />
      <ExamplesSection data={newsCardData} />
      <ExamplesSection data={videosCardData} />

      <NumbersSection />
      <PartnersSection />
    </>
  );
};
