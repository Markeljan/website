import { createClient } from '@vercel/kv';

const kv = createClient({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export const getTotalPingsByAgentId = async (
  agentId: string
): Promise<number | null> => {
  return await kv.get<number>(`smart-action:v1.0:agent:${agentId}:pings`);
};

export const getTotalPingsByAgentIds = async (
  agentIds: string[]
): Promise<Record<string, number | null>> => {
  const pipeline = kv.pipeline();
  agentIds.forEach((id) => {
    pipeline.get<number>(`smart-action:v1.0:agent:${id}:pings`);
  });

  const values = await pipeline.exec<number[]>();

  return agentIds.reduce(
    (acc, id, index) => {
      acc[id] = values[index];
      return acc;
    },
    {} as Record<string, number | null>
  );
};

export const getDailyPingsByAgentId = async (
  agentId: string,
  date: string
): Promise<number | null> => {
  return await kv.get<number>(
    `smart-action:v1.0:agent:${agentId}:pings:${date}`
  );
};
export const getAllDailyPingsByAgentId = async (
  agentId: string
): Promise<Record<string, number>> => {
  const keys = await kv.keys(`smart-action:v1.0:agent:${agentId}:pings:*`);

  if (keys.length === 0) {
    return {};
  }

  const pipeline = kv.pipeline();
  keys.forEach((key) => {
    pipeline.get<number>(key);
  });
  const values = await pipeline.exec<number[]>();

  const dailyPings: Record<string, number> = {};
  keys.forEach((key, index) => {
    const date = key.split(':').pop();
    if (date && values[index]) {
      dailyPings[date] = values[index];
    }
  });

  return dailyPings;
};
