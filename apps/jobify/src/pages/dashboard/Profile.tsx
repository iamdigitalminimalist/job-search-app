import React, { useState } from 'react';
import { FormRow, Alert } from '@job-search-app/jobify/ui-shared';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../styles/DashboardFormPage';

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
