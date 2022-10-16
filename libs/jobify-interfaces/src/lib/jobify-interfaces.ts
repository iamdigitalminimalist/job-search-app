import { MouseEventHandler } from 'react';

export interface IUser {
  name: string;
  password: string;
  email: string;
  location?: string;
  lastName?: string;
}

export interface IJob {
  company: string;
  position: string;
  jobLocation: string;
  jobType: string;
  jobStatus: string;
}

export interface ILocalStorage {
  user: IUser;
  token: string;
  location: string;
}

export enum JobTypeOptions {
  'FULL_TIME' = 'full-time',
  'PART_TIME' = 'part-time',
  'REMOTE' = 'remote',
  'INTERNSHIP' = 'internship',
}

export enum JobStatusOptions {
  'INTERVIEW' = 'interview',
  'DECLINED' = 'declined',
  'PENDING' = 'pending',
}

export interface AppContextInterface {
  isLoading: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  user: IUser | null;
  token: string | null;
  userLocation: string;
  jobLocation: string;
  showSidebar: boolean;
  isEditing: boolean;
  editJobId: string;
  position: string;
  company: string;
  jobTypeOptions: JobTypeOptions[];
  jobType: string;
  jobStatusOptions: JobStatusOptions[];
  jobStatus: string;
  jobs: IJob[];
  totalJobs: number;
  numOfPages: number;
  page: number;
  displayAlert?: () => void;
  registerUser?: (currentUser: {
    password: string;
    name: string;
    email: string;
  }) => object;
  loginUser?: (currentUser: { password: string; email: string }) => void;
  toggleSidebar?: MouseEventHandler<HTMLButtonElement> | undefined;
  logoutUser?: MouseEventHandler<HTMLButtonElement> | undefined;
  updateUser?: (p: {
    lastName: string;
    name: string;
    location: string;
    email: string;
  }) => void;
  handleChange?: ({ name, value }: { name: string; value: string }) => void;
  clearValues?: () => void;
  createJob?: () => void;
  getJobs?: () => void;
}
