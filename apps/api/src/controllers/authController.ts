import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../model/UserSchema';

export const register = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};
export const login = (req: Request, res: Response) => {
  res.send('login');
};
export const updateUser = (req: Request, res: Response) => {
  res.send('updateUser');
};
