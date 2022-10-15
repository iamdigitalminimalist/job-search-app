import { Request, Response, NextFunction } from 'express';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers;
  const authHeader = req.headers.authorization;
  console.log(header);
  console.log(authHeader);
  console.log('authenticate user');
  next();
};

export default auth;
