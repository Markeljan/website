
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../accordion';
import { Checkbox } from '../checkbox';
import { Badge } from '../badge';
import { Filters as AgentFilters } from '@/lib/types/agent.types';

const Filters = ({
  selectedFilters,
  onFilterChange,
  filters,
}: {
  selectedFilters: AgentFilters[];
  onFilterChange: (value: string, label: string) => void;
  filters: AgentFilters[];
  isMobile?: boolean;
}) => {
  if (!filters?.length) return null;

  return (
    <Accordion
      type='single'
      className='text-mb-gray-200'
      collapsible
    >
      {filters.map((filter, index) => {
        const selectedAmount = selectedFilters?.filter(
          (selectedFilter) => selectedFilter.label === filter.label
        )?.[0]?.values?.length;
        return (
          <AccordionItem
            key={filter.label}
            value={filter.label}
            className={`border-mb-gray-500 ${index === 0 ? 'border-t' : ''}`}
          >
            <AccordionTrigger>
              <div className='flex items-center justify-between w-full'>
                <div>{filter.label}</div>
                {selectedAmount ? (
                  <Badge className='bg-mb-gray-600 text-mb-gray-200'>
                    {selectedAmount}
                  </Badge>
                ) : null}
              </div>
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-2'>
              {filter.values.map((value: string) => (
                <div
                  key={value}
                  className='flex items-center space-x-2 bg-mb-gray-950 rounded-md py-4 px-6 hover:bg-mb-gray-250 transition-all duration-500 cursor-pointer'
                  onClick={() => onFilterChange(value, filter?.label)}
                >
                  <Checkbox
                    id={value}
                    checked={
                      selectedFilters.filter(
                        (selectedFilter) =>
                          selectedFilter.label === filter.label &&
                          selectedFilter.values.includes(value)
                      ).length > 0
                    }
                    className='border-white'
                  />
                  <div className='text-sm font-medium leading-none'>
                    {value}
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Filters;
