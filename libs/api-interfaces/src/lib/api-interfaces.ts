import * as express from 'express';

export interface Message {
  message: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any>;
    }
  }
}
