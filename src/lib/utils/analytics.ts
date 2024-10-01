import { track } from '@vercel/analytics/react';

export const trackAnalytics = (action: string, name: string) => {
  track(action, { name });
};
