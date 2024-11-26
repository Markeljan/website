import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '../utils/fetchService';
import { FunctionTool } from 'openai/resources/beta/assistants';
import { FunctionDefinition } from 'openai/resources/index';
import { HttpMethod } from '../constants';

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

export type ExecutionDefinition = {
  baseUrl: string;
  path: string;
  httpMethod: string;
};

export type PluginToolSpec = {
  id: string;
  agentId: string;
  type: 'function';
  function: FunctionDefinition;
  execution: ExecutionDefinition;
  verified: boolean;
};
export type BitteToolSpec = PluginToolSpec | FunctionTool;

export type BitteAssistantConfig = {
  id: string;
  name: string;
  accountId: string;
  description: string;
  instructions: string;
  verified: boolean;
  tools?: BitteToolSpec[];
  image?: string;
};

const getAgentImage = (agentId: string) => {
  return TEMP_AGENT_ID_IMAGE_MAP[agentId] || '/bitte-symbol-black.svg';
};

//TO DO REMOVE THIS FETCH & SERVICE
const getAgents = ({
  agentId,
  filterVerified,
  searchKeyword,
}: {
  agentId?: string;
  filterVerified?: boolean;
  searchKeyword?: string;
}): Promise<BitteAssistantConfig[]> => {
  /* `https://wallet.bitte.ai/api/ai-assistants */
  let fetchUrl = `http://testnet.localhost:3001/api/ai-assistants${agentId ? `/${agentId}` : ''}`;

  const params = new URLSearchParams();

  if (searchKeyword) {
    params.append('search', encodeURIComponent(searchKeyword));
  }

  if (filterVerified) {
    params.append('verified', 'true');
  }

  const queryString = params.toString();
  if (queryString) {
    fetchUrl += `?${queryString}`;
  }
  return fetchApi<BitteAssistantConfig[]>(fetchUrl, HttpMethod.GET);
};

const getFilteredData = (data: BitteAssistantConfig[]) => {
  return data.map(({ name, description, id, verified, image }) => ({
    name,
    description,
    id,
    verified,
    image: image || getAgentImage(id),
  }));
};

const useAgentIdData = (agentId?: string) => {
  const { data } = useQuery<BitteAssistantConfig[]>(
    ['q_AGENT_ID_DATA', agentId],
    () => getAgents({ agentId }),
    { enabled: !!agentId }
  );

  const filteredData = data ? getFilteredData(data) : undefined;

  return {
    agentIdData: filteredData?.[0],
  };
};

const useAgentsData = ({
  filterVerified,
  searchKeyword,
}: {
  filterVerified?: boolean;
  searchKeyword?: string;
}) => {
  const {
    data,
    error: agentsDataError,
    isLoading: agentsDataLoading,
  } = useQuery<BitteAssistantConfig[]>(
    ['q_AGENTS_DATA', searchKeyword, filterVerified],
    () =>
      getAgents({
        filterVerified,
        searchKeyword,
      })
  );

  const filteredData = data ? getFilteredData(data) : [];

  return {
    agentsData: filteredData,
    agentsDataLoading,
    agentsDataError,
  };
};

export { useAgentIdData, useAgentsData };
