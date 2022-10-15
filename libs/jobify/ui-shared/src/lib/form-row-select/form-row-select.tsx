/* eslint-disable-next-line */
import React from 'react';

export interface FormRowSelectProps {
  name: string;
  labelText?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  list: string[];
}

export const FormRowSelect = (props: FormRowSelectProps) => {
  return (
    <div className="form-row">
      <label htmlFor={props.name} className="form-label">
        {props.labelText || props.name}
      </label>
      <select
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-select"
      >
        {props.list.map((itemVale, index) => {
          return (
            <option key={index} value={itemVale}>
              {itemVale}
            </option>
          );
        })}
      </select>
    </div>
  );
};
