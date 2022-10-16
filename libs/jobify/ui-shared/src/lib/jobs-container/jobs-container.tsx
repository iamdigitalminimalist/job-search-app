import styled from 'styled-components';

/* eslint-disable-next-line */
export interface JobsContainerProps {}

const StyledJobsContainer = styled.div`
  color: pink;
`;

export const JobsContainer = (props: JobsContainerProps) => {
  return (
    <StyledJobsContainer>
      <h1>Welcome to JobsContainer!</h1>
    </StyledJobsContainer>
  );
};
