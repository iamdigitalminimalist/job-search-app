import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);

  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  };

  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item: any) => item.message)
      .join(',');
  }

  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
