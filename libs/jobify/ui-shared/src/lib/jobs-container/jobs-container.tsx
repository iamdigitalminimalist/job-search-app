import styled from 'styled-components';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import { IJob } from '@job-search-app/jobify-interfaces';
import { useEffect } from 'react';
import { JobItem } from '../job-item/job-item';

export interface JobsContainerProps {
  jobs: IJob[];
  getJobs: (() => void) | undefined;
  isLoading: boolean;
  page: number;
  totalJobs: number;
  setEditJob: ((id: string) => void) | undefined;
  deleteJob: ((id: string) => void) | undefined;
}

export const JobsContainer = (props: JobsContainerProps) => {
  useEffect(() => {
    if (props.getJobs) {
      props.getJobs();
    }
  }, []);

  if (props.isLoading) {
    return <LoadingSpinner />;
  }

  if (props.jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {props.totalJobs} {props.jobs.length > 1 ? 'jobs' : 'job'} found
      </h5>
      <div className="jobs">
        {props.jobs.map((job) => (
          <JobItem
            key={job._id}
            setEditJob={props.setEditJob}
            deleteJob={props.deleteJob}
            {...job}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
