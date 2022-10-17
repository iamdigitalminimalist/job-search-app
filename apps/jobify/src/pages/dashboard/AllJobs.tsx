import { useAppContext } from '../../context/appContext';
import { useEffect } from 'react';
import {
  SearchContainer,
  JobsContainer,
} from '@job-search-app/jobify/ui-shared';

export const AllJobs = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();
  return (
    <>
      <SearchContainer />
      <JobsContainer
        jobs={jobs}
        getJobs={getJobs}
        isLoading={isLoading}
        page={page}
        totalJobs={totalJobs}
      />
    </>
  );
};
