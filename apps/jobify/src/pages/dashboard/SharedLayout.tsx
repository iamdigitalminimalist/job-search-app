import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import {
  BigSidebar,
  Navbar,
  SmallSidebar,
} from '@job-search-app/jobify/ui-shared';
import { useAppContext } from '../../context/appContext';

export const SharedLayout = () => {
  const { showSidebar, toggleSidebar, user, logoutUser } = useAppContext();
  return (
    <Wrapper>
      <main className="dashboard">
        <BigSidebar showSidebar={showSidebar} />
        <SmallSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <div>
          <Navbar
            toggleSidebar={toggleSidebar}
            user={user}
            logoutUser={logoutUser}
          />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
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
