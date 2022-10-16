import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SearchContainerProps {}

const StyledSearchContainer = styled.div`
  color: pink;
`;

export const SearchContainer = (props: SearchContainerProps) => {
  return (
    <StyledSearchContainer>
      <h1>Welcome to SearchContainer!</h1>
    </StyledSearchContainer>
  );
};
