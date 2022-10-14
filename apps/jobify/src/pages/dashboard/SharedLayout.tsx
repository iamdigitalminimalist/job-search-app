import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="all-jobs">All Jobs</Link>
        <Link to="add-job">Add Job</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
