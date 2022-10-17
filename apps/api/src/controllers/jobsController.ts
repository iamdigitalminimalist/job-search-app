import { Response, Request } from 'express';
import Job from '../model/Job';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors';
import { IGetUserAuthInfoRequest } from '@job-search-app/api-interfaces';
import { checkPermissions } from '../utils/checkPermissions';

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

export const getAllJobs = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

export const updateJob = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;

  if (!company || !position) {
    throw new BadRequestError('Please Provide All Values');
  }

  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.send(StatusCodes.OK).json({ updatedJob });
};

export const deleteJob = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  await job.remove();

  res.send(StatusCodes.OK).json({ msg: 'Success! Job removed' });
};

export const showStats = async (req: Request, res: Response) => {
  res.send('showStats');
};
