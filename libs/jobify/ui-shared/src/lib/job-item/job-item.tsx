/* eslint-disable-next-line */
export interface JobItemProps {
  company: string;
}

export const JobItem = (props: JobItemProps) => {
  return <h5>{props.company}</h5>;
};
