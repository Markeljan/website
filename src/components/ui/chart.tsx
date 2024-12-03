import * as React from 'react';
import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  TooltipProps,
  LegendProps,
} from 'recharts';

type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    color?: string;
  };
};

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = React.createContext<ChartContextProps | null>(null);

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig;
  children: React.ReactNode;
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, children, config, ...props }, ref) => {
    return (
      <ChartContext.Provider value={{ config }}>
        <div ref={ref} className={className} {...props}>
          <ResponsiveContainer>
            {React.Children.only(children) as React.ReactElement}
          </ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  }
);
ChartContainer.displayName = 'ChartContainer';

interface ChartTooltipContentProps
  extends TooltipProps<number | string, string> {
  className?: string;
  labelClassName?: string;
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(({ active, payload, label, className, labelClassName }, ref) => {
  if (!active || !payload?.length) return null;

  return (
    <div ref={ref} className={className}>
      {label && <div className={labelClassName}>{label}</div>}
      <div>
        {payload.map((entry) => (
          <div key={entry.name}>
            <div style={{ color: entry.color }}>
              <span>{entry.name}</span>
              <span>{entry.value?.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
ChartTooltipContent.displayName = 'ChartTooltipContent';

interface ChartLegendContentProps extends Omit<LegendProps, 'content'> {
  className?: string;
}

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(({ className, payload }, ref) => {
  if (!payload?.length) return null;

  return (
    <div ref={ref} className={className}>
      {payload.map((entry) => (
        <div key={entry.value}>
          <div style={{ backgroundColor: entry.color }} />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
});
ChartLegendContent.displayName = 'ChartLegendContent';

export {
  ChartContainer,
  Tooltip as ChartTooltip,
  ChartTooltipContent,
  Legend as ChartLegend,
  ChartLegendContent,
};
