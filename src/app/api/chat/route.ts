import type { NextRequest } from 'next/server';

const BITTE_API_URL =
  process.env.BITTE_API_URL ||
  'http://localhost:3000/api/ai-router/v1/chat-external';

export const POST = async (req: NextRequest): Promise<Response> => {
  return fetch(BITTE_API_URL, {
    method: 'POST',
    body: await req.text(),
    headers: {
      Authorization: `Bearer ${process.env.BITTE_API_KEY}`,
    },
  });
};
