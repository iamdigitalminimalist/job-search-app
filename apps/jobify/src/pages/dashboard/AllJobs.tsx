import { useAppContext } from '../../context/appContext';
import {
  SearchContainer,
  JobsContainer,
} from '@job-search-app/jobify/ui-shared';

export const AllJobs = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    jobLocation,
    jobStatus,
    setEditJob,
    deleteJob,
  } = useAppContext();
  return (
    <>
      <SearchContainer />
      <JobsContainer
        jobs={jobs}
        getJobs={getJobs}
        isLoading={isLoading}
        page={page}
        totalJobs={totalJobs}
        jobLocation={jobLocation}
        jobStatus={jobStatus}
        setEditJob={setEditJob}
        deleteJob={deleteJob}
      />
    </>
  );
};
