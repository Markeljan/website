'use client';

import Hero from '@/components/layout/Hero';
import { HomeComponent } from '@/components/layout/Home';
import { BitteAiChat } from 'bitte-ai-chat';

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
