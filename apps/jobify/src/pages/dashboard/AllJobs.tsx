import { useAppContext } from '../../context/appContext';
import { useEffect } from 'react';

export const AllJobs = () => {
  const { getJobs } = useAppContext();
  useEffect(() => {
    if (getJobs) {
      getJobs();
    }
  }, []);
  return <h1>All Jobs Page</h1>;
};
