import { Filters } from '../types/agent.types';

export const filterHandler = (
  prevFilters: Filters[],
  value: string,
  label: string
) => {
  const filterIndex = prevFilters.findIndex((filter) => filter.label === label);

  if (filterIndex !== -1) {
    // If the filter with the label exists
    const updatedFilters = [...prevFilters];
    const filterValues = updatedFilters[filterIndex].values.includes(value)
      ? updatedFilters[filterIndex].values.filter((v: string) => v !== value)
      : [...updatedFilters[filterIndex].values, value];

    // Update the values for the label
    updatedFilters[filterIndex] = { label, values: filterValues };

    if (filterValues.length === 0) {
      // If there are no values left for the label, remove the entire filter
      updatedFilters.splice(filterIndex, 1);
    }

    return updatedFilters;
  } else {
    // If the filter with the label doesn't exist, add a new filter
    return [...prevFilters, { label, values: [value] }];
  }
};
