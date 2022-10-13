import React from 'react';

/* eslint-disable-next-line */
export interface FormRowProps {
  type: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
}

export const FormRow = (props: FormRowProps) => {
  return (
    <div className="form-row">
      <label htmlFor={props.name} className="form-label">
        {props.labelText || props.name}
      </label>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        className="form-input"
      />
    </div>
  );
};
