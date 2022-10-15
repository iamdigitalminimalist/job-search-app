import { Request, Response, NextFunction } from 'express';
import { BadRequestError, UnauthenticatedError } from '../errors';
import * as jwt from 'jsonwebtoken';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    // console.log(payload);
    if (typeof payload === 'string')
      throw new BadRequestError('invalid jwt token');
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication Invalid');
  }
};

export default auth;
