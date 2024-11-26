import { read, readAll } from '@/lib/utils/firestore';
import { FunctionTool } from 'openai/resources/beta/assistants';
import { FunctionDefinition } from 'openai/resources/index';

export type BitteAssistantConfig = {
  id: string;
  name: string;
  accountId: string;
  description: string;
  instructions: string;
  verified: boolean;
  tools?: BitteToolSpec[];
  image?: string;
  generatedDescription?: string;
  category?: string;
};

export type BitteToolSpec = PluginToolSpec | FunctionTool;

export type PluginToolSpec = {
  id: string;
  agentId: string;
  type: 'function';
  function: FunctionDefinition;
  execution: ExecutionDefinition;
  verified: boolean;
};

export type ExecutionDefinition = {
  baseUrl: string;
  path: string;
  httpMethod: string;
};

const TEMP_AGENT_ID_IMAGE_MAP: Record<string, string> = {
  ['bitte-assistant']: '/bitte-symbol-black.svg',
  ['bitte-wasmer-agent.fly.dev']: '/wasmer.webp',
  ['coingecko-ai.vercel.app']: '/coingecko.svg',
  ['near-safe-agent.vercel.app']: '/safe.svg',
  ['potlockaiagent-hqd5dzcjajhpc3fa.eastus-01.azurewebsites.net']:
    '/potlock.ico',
  ['ref-finance-agent.vercel.app']: '/ref.svg',
  ['near-cow-agent.vercel.app']: '/cowswap.svg',
  ['staking-agent.intear.tech']: '/near-chain.svg',
};

export const getAgentImage = (agentId: string) => {
  return TEMP_AGENT_ID_IMAGE_MAP[agentId] || '/bitte-symbol-black.svg';
};

export const getAssistants = async (): Promise<{
  agents: BitteAssistantConfig[];
  unverifiedAgents: BitteAssistantConfig[];
}> => {
  const assistants = await readAll<BitteAssistantConfig>('ai-assistants');

  const filteredAssistants = assistants.filter((assistant) => {
    const id = assistant.id || '';
    return (
      !id.includes('local') && !id.includes('ngrok') && !id.includes('serveo')
    );
  });

  const agents = filteredAssistants.filter(
    (assistant: BitteAssistantConfig) => assistant.verified
  );

  const verifiedAgents = agents.filter((agent) => agent.verified);
  const unverifiedAgents = agents.filter((agent) => !agent.verified);

  return {
    agents: verifiedAgents,
    unverifiedAgents: unverifiedAgents,
  };
};

export const getAssistantsByCategory = async (
  category?: string
): Promise<BitteAssistantConfig[]> => {
  const assistants = await readAll<BitteAssistantConfig>('ai-assistants');

  const filteredAssistants = assistants.filter((assistant) => {
    const id = assistant.id || '';
    return (
      !id.includes('localtunnel.me') &&
      !id.includes('ngrok.io') &&
      !id.includes('1ebf1221fc9232ac89c9507dbc981a20.serveo.net') &&
      !id.includes('serveo')
    );
  });

  const verifiedAgents = filteredAssistants.filter((agent) => agent.verified);

  if (!category) {
    return verifiedAgents.slice(0, 2);
  }

  const categoryAgents = filteredAssistants.filter(
    (agent) =>
      agent.verified &&
      agent.category &&
      agent.category.toLowerCase() === category.toLowerCase()
  );

  if (categoryAgents.length === 0) {
    return verifiedAgents.slice(0, 2);
  }

  return categoryAgents.slice(0, 2);
};

export const getAssistantById = async (
  id: string
): Promise<BitteAssistantConfig | null> => {
  const assistant = await read<BitteAssistantConfig>('ai-assistants', id);

  if (!assistant) {
    return null;
  }

  return assistant;
};
