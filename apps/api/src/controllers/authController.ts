import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../model/User';
import { BadRequestError, UnauthenticatedError } from '../errors';

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
  const token = user.createJWT?.();
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

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials');
  }
  // console.log(user);
  const isPassword = await user.comparePassword(password);
  if (!isPassword) {
    throw new UnauthenticatedError('Invalid Credentials');
  }
  const token = user.createJWT();
  user.password = undefined; // Remove password field from the user object
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

export const updateUser = (req: Request, res: Response) => {
  console.log(req.user);
  res.send('updateUser');
};
