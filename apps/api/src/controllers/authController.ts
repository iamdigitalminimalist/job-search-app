import { Response, Request, NextFunction } from 'express';
import User from '../model/UserSchema';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};
export const login = (req: Request, res: Response) => {
  res.send('login');
};
export const updateUser = (req: Request, res: Response) => {
  res.send('updateUser');
};
