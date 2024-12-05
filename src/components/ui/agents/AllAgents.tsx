'use client';
import { Filters as AgentFilters, RegistryData } from '@/lib/types/agent.types';
import { filterHandler } from '@/lib/utils/filters';
import { ChevronRight } from 'lucide-react';
import { useSearchParams } from 'next/dist/client/components/navigation';
import { useState } from 'react';
import { Button } from '../button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog';
import AgentCard from './AgentCard';
import Filters from './Filters';
import PlaygroundSwitch from './PlaygroundSwitch';

const AllAgents = ({
  templates,
  filters,
  unverifiedAgents,
}: {
  templates: RegistryData[];
  filters: AgentFilters[];
  unverifiedAgents: RegistryData[];
}) => {
  const [selectedFilters, setSelectedFilters] = useState<AgentFilters[]>([]);

  const searchParams = useSearchParams();
  const isPlayground = searchParams.get('isPlayground') === 'true';

  const handleFilterClick = (value: string, label: string) => {
    setSelectedFilters((prevFilters) =>
      filterHandler(prevFilters, value, label)
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const filteredAgents = selectedFilters?.length
    ? (isPlayground ? unverifiedAgents : templates).filter((agent) => {
        if (!agent) return false;

        return selectedFilters.every((filter) => {
          if (filter.label === 'Category' && agent.category) {
            return filter.values.includes(agent.category);
          }
          return true;
        });
      })
    : isPlayground
      ? unverifiedAgents
      : templates;

  return (
    <section className='my-12 md:my-24 w-full'>
      <p className='text-mb-gray-200 text-[20px] md:text-[24px] font-semibold my-8'>
        Find agents
      </p>

      {/* Filters */}
      <div className='mb-6 hidden lg:grid lg:grid-cols-5 lg:justify-between w-full'>
        <div className='col-span-1 flex items-center justify-between'>
          <p className='text-mb-gray-200 text-[20px] font-semibold'>Filters</p>
          <Button
            variant='ghost'
            onClick={clearFilters}
            className={selectedFilters?.length ? 'visible' : 'invisible'}
          >
            Clear
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 w-full'>
        <div className='lg:hidden'>
          <Dialog>
            <DialogTrigger className='w-full'>
              <div className='flex flex-1 items-center gap-2 border-b border-mb-gray-500 w-full pb-4'>
                <ChevronRight className='h-6 w-6' />
                Filters
              </div>
            </DialogTrigger>
            <DialogContent className='h-full bg-mb-black p-0'>
              <DialogHeader className='text-left w-full h-auto flex'>
                <div className='border-b border-mb-gray-500 p-6 bg-mb-gray-550 w-auto'>
                  <DialogTitle>Filters</DialogTitle>
                </div>
                <div className='p-4'>
                  <PlaygroundSwitch />
                </div>

                <div className='p-4 h-[70vh] overflow-scroll'>
                  <Filters
                    filters={filters}
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterClick}
                    isMobile
                  />
                </div>
              </DialogHeader>

              <DialogFooter className='bg-mb-black'>
                <DialogClose className='py-4 px-6 border-t border-mb-gray-500 w-full'>
                  <div className='flex gap-4 w-full items-center'>
                    <Button
                      type='button'
                      variant='secondary'
                      className='w-full bg-mb-gray-600'
                      onClick={clearFilters}
                    >
                      Clear
                    </Button>
                    <Button type='button' variant='default' className='w-full'>
                      Apply
                    </Button>
                  </div>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className='col-span-1 hidden lg:block w-full'>
          <div className='border-b border-mb-gray-500 mb-6'></div>
          <div className='mb-6'>
            <PlaygroundSwitch />
          </div>

          <Filters
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterClick}
          />
        </div>
        <div className='lg:col-span-4 grid-cols-1 lg-card:grid-cols-2 grid gap-8 w-full h-fit'>
          {filteredAgents?.length ? (
            filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))
          ) : (
            <p>No agents found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllAgents;
