import { useAppContext } from '../../context/appContext';
import { useEffect } from 'react';
import {
  SearchContainer,
  JobsContainer,
} from '@job-search-app/jobify/ui-shared';

export const AllJobs = () => {
  const { getJobs } = useAppContext();
  useEffect(() => {
    if (getJobs) {
      getJobs();
    }
  }, []);
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};
