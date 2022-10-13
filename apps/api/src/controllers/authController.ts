import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../model/UserSchema';

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}

class BadRequestError extends CustomAPIError {
  private statusCode: StatusCodes;
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

class NotFoundError extends CustomAPIError {
  private statusCode: StatusCodes;
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = (req: Request, res: Response) => {
  res.send('login');
};

export const updateUser = (req: Request, res: Response) => {
  res.send('updateUser');
};
