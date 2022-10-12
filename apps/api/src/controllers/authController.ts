import { Response, Request } from 'express';
import User from '../model/User';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ msg: `there was an error: ${err}` });
  }
};
export const login = (req: Request, res: Response) => {
  res.send('login');
};
export const updateUser = (req: Request, res: Response) => {
  res.send('updateUser');
};
