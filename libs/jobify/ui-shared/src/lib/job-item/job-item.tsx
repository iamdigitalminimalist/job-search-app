import { format } from 'date-fns';

export interface JobItemProps {
  company: string;
  createdAt: string;
}

export const JobItem = (props: JobItemProps) => {
  const date = format(new Date(props.createdAt), 'yyyy-MM-dd');
  return (
    <div>
      <h5>{props.company}</h5>
      <h5>{date}</h5>
    </div>
  );
};
