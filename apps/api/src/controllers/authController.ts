import { Response, Request } from 'express';

export const register = (req: Request, res: Response) => {
  res.send('register user');
};
export const login = (req: Request, res: Response) => {
  res.send('login');
};
export const updateUser = (req: Request, res: Response) => {
  res.send('updateUser');
};
