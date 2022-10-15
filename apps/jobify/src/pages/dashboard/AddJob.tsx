import Wrapper from '../../styles/DashboardFormPage';
import {
  FormRow,
  Alert,
  FormRowSelect,
} from '@job-search-app/jobify/ui-shared';
import { useAppContext } from '../../context/appContext';
import React from 'react';

export const AddJob = () => {
  const {
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
  } = useAppContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      if (displayAlert) {
        displayAlert();
      }
      return;
    }
    console.log('created job');
  };

  const handleJobInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  };

  return (
    <Wrapper>
      <form className="form">
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
            name="status"
            value={jobStatus}
            handleChange={handleJobInput}
            list={jobStatusOptions}
          />
          {/* Submit Button */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onSubmit={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
