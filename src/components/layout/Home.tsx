'use client';

import { newsCardData } from '@/lib/data/dropCardData';
import { productCardsData } from '@/lib/data/productCardsData';
import { MB_URL } from '@/lib/url';
import { BitteAiChat } from 'bitte-ai-chat';
import { ExamplesSection } from './ExamplesSection';
import { NumbersSection } from './NumbersSection';
import { PartnersSection } from './PartnersSection';
import { ProductCardsSection } from './ProductCardsSection';
import { SupportedChainsSection } from './SupportedChainsSection';
import VideoSection from './VideoSection';

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
  title: 'Universal Accounts with Chain Abstraction',
  subHeader: "One account to rule them all, with ERC-4337 Safe's on EVMs.",
  factTitle: '',
  fact: '',
  btnTitle: 'Try Now',
  btnUrl: MB_URL.BITTE_WALLET,
  isDisabled: false,
};

const mockAgentData = {
  name: 'Mock Agent',
  id: 'agent-123',
  status: 'active',
  accountId: 'account-456', // Added property
  description: 'This is a mock agent for testing purposes.', // Added property
  instructions: 'Follow the guidelines provided.', // Added property
  verified: true, // Added property
};

const mockOpenAgentSelector = () => {
  console.log('Agent selector opened');
};

const mockWalletInfo = {
  address: '0x1234567890abcdef',
  balance: '10 ETH',
  accountData: {
    devicePublicKey: 'mockDevicePublicKey',
    accountId: 'mockAccountId',
    isCreated: true,
  },
  isLoading: false,
  isConnected: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  evmAdapter: {} as any, // Add other required properties here
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockWalletConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  network: 'mainnet' as any, // Ensure this matches one of the Network type values
  provider: 'rpc',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  networkConfig: {} as any, // Add appropriate configuration here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  relayer: {} as any, // Add appropriate configuration here
};

const mockColors = {
  generalBackground: '#ffffff', // Example value
  messageBackground: '#f0f0f0', // Corrected typo and added value
  textColor: '#333333', // Example value
  buttonColor: '#007bff', // Example value
  border: '#cccccc', // Example value
};

export const HomeComponent = () => {
  return (
    <>
      <BitteAiChat
        agentData={mockAgentData}
        openAgentSelector={mockOpenAgentSelector}
        walletInfo={mockWalletInfo}
        walletConfig={mockWalletConfig}
        colors={mockColors}
      />

      <SupportedChainsSection />
      <ProductCardsSection data={productCardsData} />

      <ExamplesSection />
      <ExamplesSection data={newsCardData} />

      <VideoSection {...crossSection} />

      <NumbersSection />
      <VideoSection {...paymasterSection} />
      <PartnersSection />
    </>
  );
};
