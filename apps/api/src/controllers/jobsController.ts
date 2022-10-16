import { Response, Request } from 'express';
import Job from '../model/Job';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors';
import { IGetUserAuthInfoRequest } from '@job-search-app/api-interfaces';

export const createJob = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError('Please provide all values');
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
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
