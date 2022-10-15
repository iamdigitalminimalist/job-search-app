import Wrapper from '../../styles/DashboardFormPage';
import {
  FormRow,
  Alert,
  FormRowSelect,
} from '@job-search-app/jobify/ui-shared';
import { useAppContext } from '../../context/appContext';
import React, { useState } from 'react';

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
  const [jobPositionField, setJobPositionField] = useState<string>(position);
  const [jobCompanyField, setJobCompanyField] = useState<string>(company);
  const [jobLocationField, setJobLocationField] = useState<string>(jobLocation);
  const [jobTypeField, setJobTypeField] = useState<string>(jobType);
  const [jobStatusField, setJobStatusField] = useState<string>(jobStatus);

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobPositionField(e.target.value);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobCompanyField(e.target.value);
  };

  const handleJobLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobLocationField(e.target.value);
  };

  const handleJobTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobTypeField(e.target.value);
  };

  const handleJobStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobStatusField(e.target.value);
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
            value={jobPositionField}
            handleChange={handlePositionChange}
          />
          {/* Company */}
          <FormRow
            type="text"
            name="company"
            value={jobCompanyField}
            handleChange={handleCompanyChange}
          />
          {/* Job Location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocationField}
            handleChange={handleJobLocationChange}
          />
          {/* Job Type */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobTypeField}
            handleChange={handleJobTypeChange}
            list={jobTypeOptions}
          />
          {/* Job Status */}
          <FormRowSelect
            name="status"
            value={jobStatusField}
            handleChange={handleJobStatusChange}
            list={jobStatusOptions}
          />
          {/* Submit Button */}
          <div className="btn-container">
            <button type="submit" className="btn btn-block submit-btn">
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
