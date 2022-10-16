import React from 'react';
import Wrapper from '../../styles/DashboardFormPage';
import {
  FormRow,
  Alert,
  FormRowSelect,
} from '@job-search-app/jobify/ui-shared';
import { useAppContext } from '../../context/appContext';

export const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    jobStatus,
    jobStatusOptions,
    handleChange,
    clearValues,
  } = useAppContext();

  const handleJobInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    console.log(name);
    const value = e.target.value;
    console.log(value);
    if (handleChange) {
      handleChange({ name, value });
    }
  };

  const handleRest = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (clearValues) {
      clearValues();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      if (displayAlert) {
        displayAlert();
      }
      return;
    }

    console.log('created job');
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert ? <Alert alertType="success" alertText="test" /> : null}
        <div className="form-center">
          {/* Position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* Company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* Job Location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* Job Type */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* Job Status */}
          <FormRowSelect
            name="jobStatus"
            labelText="status"
            value={jobStatus}
            handleChange={handleJobInput}
            list={jobStatusOptions}
          />
          {/* Submit Button */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              type="button"
              onClick={handleRest}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
