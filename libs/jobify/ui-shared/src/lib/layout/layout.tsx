import styled from 'styled-components';
import { Logo } from '../logo/logo';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';

/* eslint-disable-next-line */
export interface LayoutProps {}

export const Layout = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        <Link to="/register">Register</Link>
        <Link to="/landing">Landing</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
`;
