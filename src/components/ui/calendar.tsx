'use client';

import { Card, CardContent, CardHeader, CardTitle } from './card';
import { ActivityCalendar, ThemeInput } from 'react-activity-calendar';

interface CalendarProps {
  record: {
    [key: string]: number; // date string as key, count as value
  };
}

export function Calendar({ record }: CalendarProps) {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const allDates = [];
  let currentDate = new Date(startOfYear);

  while (currentDate <= now) {
    const dateString = currentDate.toISOString().split('T')[0];
    const count = record[dateString] || 0;
    let level = 0;
    if (count > 50) level = 4;
    else if (count > 10) level = 3;
    else if (count > 5) level = 2;
    else if (count > 0) level = 1;

    allDates.push({
      date: dateString,
      count: count,
      level: level,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const explicitTheme: ThemeInput = {
    light: ['#f0f0f0', '#e0f2e9', '#c3e6cb', '#28a745', '#1e7e34'],
    dark: ['#383838', '#2d4a34', '#28a745', '#32cd32', '#90ee90'],
  };

  return (
    <Card className='w-full'>
      <CardHeader className='pb-2'>
        <CardTitle className='text-lg font-normal'>Agent Pings</CardTitle>
      </CardHeader>
      <CardContent>
        <ActivityCalendar data={allDates} theme={explicitTheme} />
      </CardContent>
    </Card>
  );
}
