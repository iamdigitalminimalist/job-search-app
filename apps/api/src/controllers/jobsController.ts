import { Response, Request } from 'express';

export const createJob = async (req: Request, res: Response) => {
  res.send('create job');
};

export const getAllJobs = async (req: Request, res: Response) => {
  res.send('get all jobs');
};

export const updateJob = async (req: Request, res: Response) => {
  res.send('updateJob');
};

export const deleteJob = async (req: Request, res: Response) => {
  res.send('deleteJob');
};

export const showStats = async (req: Request, res: Response) => {
  res.send('showStats');
};
