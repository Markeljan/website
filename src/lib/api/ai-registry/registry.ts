import { RegistryData, Filters } from '@/lib/types/agent.types';
import { read, readAll, update } from '@/lib/utils/firestore';
import { getTotalPingsByAgentIds } from '@/lib/api/kv';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
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
  repo?: string;
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

export const getAssistants = async (): Promise<{
  agents: RegistryData[];
  unverifiedAgents: RegistryData[];
  filters: Filters[];
}> => {
  const assistants = await readAll<BitteAssistantConfig>('ai-assistants');
  const filteredAssistants = assistants.filter(filterLocalAndTunnelUrls);

  const updatedAssistants = await Promise.all(
    filteredAssistants.map(updateAssistantDescription)
  );

  const agentIds = updatedAssistants.map((a) => a.id);
  const pingCounts = await getTotalPingsByAgentIds(agentIds);
  const agents = updatedAssistants
    .map(mapAssistantToRegistryData)
    .sort((a, b) => {
      const aCount = pingCounts[a.id] || 0;
      const bCount = pingCounts[b.id] || 0;
      return bCount - aCount;
    });

  const verifiedAgents = agents.filter((agent) => agent.verified);
  const unverifiedAgents = agents.filter((agent) => !agent.verified);

  const categories = [...new Set(agents.map((agent) => agent.category))].filter(
    Boolean
  );

  return {
    agents: verifiedAgents,
    unverifiedAgents: unverifiedAgents,
    filters: [
      {
        label: 'Category',
        values: categories as string[],
      },
    ],
  };
};

export const getAssistantsByCategory = async (
  category?: string
): Promise<RegistryData[]> => {
  const assistants = await readAll<BitteAssistantConfig>('ai-assistants');
  const filteredAssistants = assistants.filter(filterLocalAndTunnelUrls);
  const agents = filteredAssistants.map(mapAssistantToRegistryData);
  const verifiedAgents = agents.filter((agent) => agent.verified);

  if (!category) {
    return verifiedAgents.slice(0, 2);
  }

  const categoryAgents = agents.filter(
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
): Promise<RegistryData | null> => {
  const assistant = await read<BitteAssistantConfig>('ai-assistants', id);

  if (!assistant) {
    return null;
  }

  return mapAssistantToRegistryData(assistant);
};

const filterLocalAndTunnelUrls = (assistant: BitteAssistantConfig) => {
  const id = assistant.id || '';
  const excludedDomains = [
    'loca.lt',
    'ngrok',
    'serveo',
    'local',
    'ngrok.io',
    '1ebf1221fc9232ac89c9507dbc981a20.serveo.net',
  ];
  return !excludedDomains.some((domain) => id.includes(domain));
};

const generateAssistantDescription = async (
  assistant: BitteAssistantConfig
): Promise<string> => {
  try {
    const prompt = `Generate a description for an AI assistant using the following details as a starting point:
      Tools: ${assistant.tools || 'None'}
      Instructions: ${assistant.instructions || 'None'} 
      Description: ${assistant.description || 'None'}

      Format the response in markdown with two distinct sections in total dont give more than 5-7 lines and do not indent any of the sections:

      ## About
      Provide 2-3 sentences that give a high-level introduction to the assistant and its main purpose.

      ## Features & Capabilities
      List out key functionalities of the assistant, focusing on the available tools and how they can be used. Format as bullet points.
      `;

    const { text } = await generateText({
      model: openai('gpt-4-turbo'),
      prompt,
    });

    return text;
  } catch (error) {
    console.error('Failed to generate assistant description:', error);
    return assistant.description || '';
  }
};

const updateAssistantDescription = async (assistant: BitteAssistantConfig) => {
  try {
    if (!assistant.generatedDescription && assistant.verified) {
      const generatedDescription =
        await generateAssistantDescription(assistant);
      await update('ai-assistants', assistant.id, {
        generatedDescription,
      });
      assistant.generatedDescription = generatedDescription;
    }
  } catch (error) {
    console.error('Failed to update assistant description:', error);
  }
  return assistant;
};

const mapAssistantToRegistryData = (
  assistant: BitteAssistantConfig
): RegistryData => ({
  id: assistant.id || '',
  name: assistant.name || '',
  coverImage: assistant.image || '',
  generatedDescription: assistant.generatedDescription || undefined,
  description: assistant.description || '',
  previewUrl: assistant.id ? `https://${assistant.id}` : '',
  vercelLink: assistant.id ? `https://${assistant.id}` : '',
  author: assistant.accountId || '',
  category: assistant.category || 'Other',
  verified: assistant.verified || false,
  repoUrl: assistant.repo,
});
