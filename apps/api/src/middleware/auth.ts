import { Request, Response, NextFunction } from 'express';
import { UnauthenticatedError } from '../errors';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  next();
};

export default auth;
