import React, { useState } from 'react';
import { FormRow, Alert } from '@job-search-app/jobify/ui-shared';
import { useAppContext } from '../../context/appContext';
import styled from 'styled-components';

export const Profile = () => {
  const {
    user,
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
    alertType,
    alertText,
  } = useAppContext();
  const [name, setName] = useState<string | undefined>(user?.name);
  const [email, setEmail] = useState<string | undefined>(user?.email);
  const [lastName, setLastName] = useState<string | undefined>(user?.lastName);
  const [location, setLocation] = useState<string | undefined>(user?.location);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      if (displayAlert) {
        displayAlert();
      }
      return;
    }
    if (updateUser) {
      updateUser({ name, email, lastName, location });
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        {showAlert ? (
          <Alert alertType={alertType} alertText={alertText} />
        ) : null}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name as string}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="text"
            name="lastName"
            value={lastName as string}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email as string}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="location"
            value={location as string}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? 'Please wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;
