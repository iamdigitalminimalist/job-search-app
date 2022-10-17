import styled from 'styled-components';
import React from 'react';
import { IconType } from 'react-icons';

/* eslint-disable-next-line */
export interface JobInfoProps {
  icon: IconType;
  text: string;
}

export const JobInfo = (props: JobInfoProps) => {
  return (
    <Wrapper>
      <span className="icon">
        <props.icon />
      </span>
      <span className="text">{props.text}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-400);
    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper;
