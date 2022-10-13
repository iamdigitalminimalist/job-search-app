import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../model/User';
import { BadRequestError } from '../errors';

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

export const login = (req: Request, res: Response) => {
  res.send('login');
};

export const updateUser = (req: Request, res: Response) => {
  res.send('updateUser');
};
