import { ErrorRequestHandler } from 'express';

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: err });
};

export default errorHandlerMiddleware;
