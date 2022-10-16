import { Request } from 'express';

export interface Message {
  message: string;
}
export interface IGetUserAuthInfoRequest extends Request {
  user: {
    userId: string;
  };
}
