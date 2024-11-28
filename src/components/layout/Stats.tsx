'use client';
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export default function StatsPage({
  stats,
}: {
  stats: {
    totalPings: number;
    totalAgents: number;
    chartData: { date: string; pings: number }[];
  };
}) {
  return (
    <div className='container mx-auto py-8'>
      <div className='grid grid-cols-2 gap-8 mb-12'>
        <div className='bg-card p-6 rounded-lg border'>
          <h3 className='text-2xl font-bold text-foreground mb-2'>
            Total Agents
          </h3>
          <p className='text-4xl font-bold text-primary'>{stats.totalAgents}</p>
        </div>
        <div className='bg-card p-6 rounded-lg border'>
          <h3 className='text-2xl font-bold text-foreground mb-2'>
            Total Pings
          </h3>
          <p className='text-4xl font-bold text-primary'>
            {stats.totalPings.toLocaleString()}
          </p>
        </div>
      </div>

      <div className='bg-card p-6 rounded-lg border'>
        <h2 className='text-2xl font-bold mb-6'>Agent Activity Over Time</h2>
        <div className='h-[400px] w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              data={stats.chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id='colorPings' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#0ea5e9' stopOpacity={0.8} />
                  <stop offset='95%' stopColor='#0ea5e9' stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey='date'
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  });
                }}
                stroke='#888888'
              />
              <YAxis
                stroke='#888888'
                tickFormatter={(value) => value.toLocaleString()}
              />
              <CartesianGrid strokeDasharray='3 3' vertical={false} />
              <Tooltip
                contentStyle={{
                  background: '#18181b',
                  border: '1px solid #27272a',
                }}
                labelFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  });
                }}
                formatter={(value: number) => [value.toLocaleString(), 'Pings']}
              />
              <Area
                type='monotone'
                dataKey='pings'
                stroke='#0ea5e9'
                fill='url(#colorPings)'
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
