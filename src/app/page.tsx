'use client';

import Hero from '@/components/layout/Hero';
import { HomeComponent } from '@/components/layout/Home';
import { BitteAiChat, WalletConfig, WalletInfo } from 'bitte-ai-chat';

const mockAgentData = {
  name: 'bitte-assistant',
  id: 'bitte-assistant',
  status: 'active',
  accountId: 'bitte.near', // Added property
  description: '', // Added property
  instructions: '', // Added property
  verified: true, // Added property
};

const mockOpenAgentSelector = () => {
  console.log('Agent selector opened');
};

const mockWalletInfo: WalletInfo = {
  accountData: {
    accountId: 'markeljan.near',
    devicePublicKey: 'ed25519:8By6D6bYiWRPWuaxjhWQj7C5294YzETf2fnSja8dE6c7',
    isCreated: true,
  },
  isLoading: false,
  isConnected: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  evmAdapter: {} as any, // Add other required properties here
};

const mockWalletConfig: WalletConfig = {
  network: 'mainnet',
  networkConfig: {
    networkId: 'mainnet',
    viewAccountId: 'mainnet',
    nodeUrl: 'https://free.rpc.fastnear.com',
    walletUrl: 'https://wallet.mainnet.near.org',
    helperUrl: 'https://helper.mainnet.near.org',
  },
  relayer: {
    accountId: 'mintbase.near',
  },
};

const mockColors = {
  generalBackground: '#18181A', // Example value
  messageBackground: '#000000', // Corrected typo and added value
  textColor: '#333333', // Example value
  buttonColor: '#0F172A', // Example value
  borderColor: '#334155', // Example value
};

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Hero />
      <div className='w-[70%]'>
        <BitteAiChat
          agentData={mockAgentData}
          openAgentSelector={mockOpenAgentSelector}
          walletInfo={mockWalletInfo}
          walletConfig={mockWalletConfig}
          colors={mockColors}
        />
      </div>

      <HomeComponent />
    </main>
  );
}
